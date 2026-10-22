import { spawnSync } from 'node:child_process';
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist-v2');
await rm(output, { recursive: true, force: true });

const result = spawnSync(process.execPath, [
    path.join(root, 'node_modules/parcel/lib/bin.js'),
    'build', 'src/index.html', '--public-url', '/v2/',
    '--dist-dir', output, '--no-cache',
], { cwd: root, stdio: 'inherit' });
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

// This preview has its own URLs and stays out of search results until promoted.
async function preparePages(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
        const filename = path.join(directory, entry.name);
        if (entry.isDirectory()) await preparePages(filename);
        else if (entry.name.endsWith('.html')) {
            const html = (await readFile(filename, 'utf8'))
                .replaceAll('https://jaimechapinal.com/', 'https://jaimechapinal.com/v2/')
                .replace(/<head>/i, '<head><meta name="robots" content="noindex, follow">');
            await writeFile(filename, html);
        }
    }
}
await preparePages(output);

const manifestPath = path.join(output, 'manifest.webmanifest');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
manifest.scope = '/v2/';
manifest.start_url = '/v2/';
await writeFile(manifestPath, JSON.stringify(manifest));
await mkdir(path.join(output, 'images'), { recursive: true });
await cp(path.join(root, 'src/images/shareImg.webp'), path.join(output, 'images/shareImg.webp'));
console.log('V2 preview ready in dist-v2/ (serve at /v2/).');
