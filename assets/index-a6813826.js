import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i,d as r}from"./index-823812c3.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-84a496cf.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-6f09c02c.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./assertThisInitialized-33acfce7.js";import"./_baseIsEqual-39aea10f.js";import"./index-45304ab3.js";import"./index-356e4a49.js";const a="# somenergia-ui\n\nCommon React/MUI components for Som Energia UI projects\n\n[Documentation](https://som-energia.github.io/somenergia-ui)\n\n## Install\n\nnpm install --save @somenergia/somenergia-ui\n\n## Adding dependencies\n\n- Do not add them in `package.json`'s `dependencies` key\n- Add them both in `peerDependencies` and `developmentDependencies`\n- Ensure they are filtered by the `externals` in `vite-config.js`' `build.rollupOptions.externals`\n- If the build creates a `vendor-***.js` as output, means that you failed to filter it\n- To know wich module is generating the `vendor-***.js`, you can get the name of the library\nby uncomenting the code in `vite-config.js` (`build.rollupOptions.output.manualChunks`)\n";function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"README"}),`
`,e.jsx(r,{children:a})]})}function D(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o()}export{D as default};
