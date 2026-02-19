import{j as n}from"./jsx-runtime-f6d73c06.js";import{M as i,d as r}from"./index-476a53a3.js";import{u as s}from"./index-b7a9f960.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-cb53812a.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-25515bb9.js";import"./index-8bf7f4ad.js";import"./index-11d98b33.js";import"./assertThisInitialized-33acfce7.js";import"./_baseIsEqual-34cfe065.js";import"./mapValues-2043404f.js";import"./_baseUniq-dced44ac.js";import"./index-356e4a49.js";import"./index-ac126507.js";const a=`# somenergia-ui

Common React/MUI components for Som Energia UI projects

[Documentation](https://som-energia.github.io/somenergia-ui)

## Install

\`\`\`bash
npm install --save @somenergia/somenergia-ui
\`\`\`

## Configuring i18n on your project with somenergia-ui components

This library requires i18n configuration for multi-language support. Simply provide the host project's i18n instance, and the library will handle registering the necessary translations.

\`\`\`ts
// Your project i18n instantiation file
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { registerSomEnergiaI18n } from '@somenergia/somenergia-ui';

import LOCALE_CA from './locale-ca.json'
import LOCALE_ES from './locale-es.json'
import LOCALE_GL from './locale-gl.json'
import LOCALE_EU from './locale-eu.json'

const resources = {
  ca: { translation: { ...LOCALE_CA } },
  es: { translation: { ...LOCALE_ES } },
  gl: { translation: { ...LOCALE_GL } },
  eu: { translation: { ...LOCALE_EU } }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    lng: 'es',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

// Register all somenergia-ui lib translations to the project i18n instance
registerSomEnergiaI18n(i18n);
\`\`\`

## Adding dependencies

- Do not add them in \`package.json\`'s \`dependencies\` key
- Add them both in \`peerDependencies\` and \`developmentDependencies\`
- Ensure they are filtered by the \`externals\` in \`vite-config.js\`' \`build.rollupOptions.externals\`
- If the build creates a \`vendor-***.js\` as output, means that you failed to filter it
- To know wich module is generating the \`vendor-***.js\`, you can get the name of the library
by uncomenting the code in \`vite-config.js\` (\`build.rollupOptions.output.manualChunks\`)

## Using unreleased components in another project

First build the library locally

\`\`\`bash
npm run build
\`\`\`

From the other project run:

\`\`\`bash
npm install ../somenergia-ui
\`\`\`

## Release process

- Update version package.json and CHANGES.md
- Tag the release somenergia-ui-M.m.p
- On pushing the version tag, automated CI will publish the package in npm
- Right now the storybook of the CI is failing so the following command must be run by hand

\`\`\`bash
npm run deploy-storybook
\`\`\`
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"README"}),`
`,n.jsx(r,{children:a})]})}function A(e={}){const{wrapper:t}=Object.assign({},s(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(o,e)})):o()}export{A as default};
