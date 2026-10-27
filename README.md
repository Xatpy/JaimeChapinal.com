# Portfolio JaimeChapinal


https://www.jaimechapinal.com

![demo](./src/images/demo.gif)

## Published versions

- `main` builds the current site at https://jaimechapinal.com/.
- `v1` is the archived original site, published at https://jaimechapinal.com/v1/.

GitHub Pages publishes one artifact containing both versions. Pushes to `main`
build the current site with `npm run build` and the `v1` branch with
`npm run build:v1`, then deploy them together. Pull requests only build.
