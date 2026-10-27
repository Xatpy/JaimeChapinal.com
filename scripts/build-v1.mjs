import { spawnSync } from 'node:child_process';
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist-v1');
await rm(output, { recursive: true, force: true });

const result = spawnSync(process.execPath, [
    path.join(root, 'node_modules/parcel/lib/bin.js'),
    'build', 'src/index.html', '--public-url', '/v1/',
    '--dist-dir', output, '--no-cache',
], { cwd: root, stdio: 'inherit' });
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

await mkdir(path.join(output, 'images'), { recursive: true });
await mkdir(path.join(output, 'wiki'), { recursive: true });
await cp(path.join(root, 'src/images/shareImg.webp'), path.join(output, 'images/shareImg.webp'));
await cp(path.join(root, 'src/images/webp/cartoonHRwebp.webp'), path.join(output, 'images/wiki-portrait.webp'));
await cp(path.join(root, 'src/wiki/index.html'), path.join(output, 'wiki/index.html'));

// The archived site has its own URLs and stays out of search results.
async function preparePages(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
        const filename = path.join(directory, entry.name);
        if (entry.isDirectory()) await preparePages(filename);
        else if (entry.name.endsWith('.html')) {
            const html = (await readFile(filename, 'utf8'))
                .replaceAll('https://jaimechapinal.com/', 'https://jaimechapinal.com/v1/')
                .replace(/<head>/i, '<head><meta name="robots" content="noindex, follow">');
            await writeFile(filename, html);
        }
    }
}
await preparePages(output);

const manifestPath = path.join(output, 'manifest.webmanifest');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
manifest.scope = '/v1/';
manifest.start_url = '/v1/';
await writeFile(manifestPath, JSON.stringify(manifest));
console.log('V1 archive ready in dist-v1/ (serve at /v1/).');
