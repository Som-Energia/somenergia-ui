# somenergia-ui

Common React/MUI components for Som Energia UI projects

[Documentation](https://som-energia.github.io/somenergia-ui)

## Install

npm install --save @somenergia/somenergia-ui

## Adding dependencies

- Do not add them in `package.json`'s `dependencies` key
- Add them both in `peerDependencies` and `developmentDependencies`
- Ensure they are filtered by the `externals` in `vite-config.js`' `build.rollupOptions.externals`
- If the build creates a `vendor-***.js` as output, means that you failed to filter it
- To know wich module is generating the `vendor-***.js`, you can get the name of the library
by uncomenting the code in `vite-config.js` (`build.rollupOptions.output.manualChunks`)
