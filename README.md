# Portfolio JaimeChapinal


https://www.jaimechapinal.com

![demo](./src/images/demo.gif)

## Published versions

- `main` builds the current site at https://jaimechapinal.com/.
- `2.0` builds the preview at https://jaimechapinal.com/v2/.

Run `npm run build:v2` on `2.0` to generate `dist-v2/`. Mount that directory
at `/v2/` when previewing locally. The preview includes its own canonical and
sharing URLs, a scoped web manifest, and `noindex` on every HTML page.

GitHub Pages publishes one artifact containing both versions. Pushes to `main`
rebuild both; a successful **Build v2 preview** push run on `2.0` triggers the
same combined deployment from `main`. Pull requests only build. Deployment
continues to use the existing `github-pages` environment and its branch rules.
