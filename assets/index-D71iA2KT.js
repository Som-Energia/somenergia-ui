import{j as n}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as i}from"./index-ChEI-nsM.js";import{c as a,e as s}from"./index-D_U6umBu.js";import"./index-DRjF_FHU.js";import"./iframe-DM4Xuxl7.js";import"./index-B7ki2Uzk.js";import"./index-D-Mha1DF.js";import"./index-Bhqu_tAV.js";const r=`[![CI](https://github.com/Som-Energia/somenergia-ui/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/Som-Energia/somenergia-ui/actions/workflows/ci.yaml)
[![Publish Package to npmjs](https://github.com/Som-Energia/somenergia-ui/actions/workflows/publish.yaml/badge.svg?branch=main)](https://github.com/Som-Energia/somenergia-ui/actions/workflows/publish.yaml)
[![npm version](https://img.shields.io/npm/v/%40somenergia%2Fsomenergia-ui)](https://www.npmjs.com/package/@somenergia/somenergia-ui)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Docs](https://img.shields.io/badge/docs-storybook-informational)](https://som-energia.github.io/somenergia-ui/)

# somenergia-ui

Common React/MUI components for Som Energia UI projects

[Documentation](https://som-energia.github.io/somenergia-ui)

## Install

\`\`\`bash
npm install --save @somenergia/somenergia-ui
\`\`\`

## Loading fonts

If your project uses \`SomEnergiaTheme\` or \`GlobalTheming\`, load the Som Energia font in the host application so the components render with the intended typography.

\`\`\`html
<link
  href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
  rel="stylesheet" />
\`\`\`

\`SomEnergiaTheme\` uses \`Outfit\` as the default font family. If the host application does not load the font, the browser will fall back to \`Helvetica\`, \`Arial\`, and \`sans-serif\`.

## Configuring i18n on your project with somenergia-ui components

This library requires i18n configuration for multi-language support. Simply provide the host project's i18n instance, and the library will handle registering the necessary translations.

\`\`\`ts
// Your project i18n instantiation file
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { registerSomEnergiaI18n } from "@somenergia/somenergia-ui"

import LOCALE_CA from "./locale-ca.json"
import LOCALE_ES from "./locale-es.json"
import LOCALE_GL from "./locale-gl.json"
import LOCALE_EU from "./locale-eu.json"

const resources = {
  ca: { translation: { ...LOCALE_CA } },
  es: { translation: { ...LOCALE_ES } },
  gl: { translation: { ...LOCALE_GL } },
  eu: { translation: { ...LOCALE_EU } },
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "es",
  lng: "es",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

// Register all somenergia-ui lib translations to the project i18n instance
registerSomEnergiaI18n(i18n)
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

## Manual publish version

Create a tag and update package.json version and execute:

\`\`\`bash
NPM_TOKEN=[...token] npm publish
\`\`\`

The release is an existing version update

\`\`\`bash
NPM_TOKEN=[...token] npm dist-tag add @somenergia/somenergia-ui@[...version] latest
\`\`\`

## Alpha publications

Create and use alpha tag and update package.json version. Example: \`1.0.0-alpha.1\`

\`\`\`bash
NPM_TOKEN=[...token] npm publish --tag alpha
\`\`\`
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"README"}),`
`,n.jsx(s,{children:r})]})}function f(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{f as default};
