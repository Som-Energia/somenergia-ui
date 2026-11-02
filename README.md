[![CI](https://github.com/Som-Energia/somenergia-ui/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/Som-Energia/somenergia-ui/actions/workflows/ci.yaml)
[![Publish Package to npmjs](https://github.com/Som-Energia/somenergia-ui/actions/workflows/publish.yaml/badge.svg?branch=main)](https://github.com/Som-Energia/somenergia-ui/actions/workflows/publish.yaml)
[![npm version](https://img.shields.io/npm/v/%40somenergia%2Fsomenergia-ui)](https://www.npmjs.com/package/@somenergia/somenergia-ui)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Docs](https://img.shields.io/badge/docs-storybook-informational)](https://som-energia.github.io/somenergia-ui/)

# somenergia-ui

Common React/MUI components for Som Energia UI projects

[Documentation](https://som-energia.github.io/somenergia-ui)

## Install

```bash
npm install --save @somenergia/somenergia-ui
```

## Loading fonts

`SomEnergiaTheme` uses `Outfit` as the default font family. Load it once in the host application
from `@somenergia/tokens` (a dependency of this library), which ships the font files, so you don't depend on Google Fonts:

```js
import "@somenergia/tokens/fonts.css"
```

If the host application does not load the font, the browser falls back to the system sans-serif font.

## Design tokens

Som Energia colors, typography, radii and spacing live in [`@somenergia/tokens`](packages/tokens),
a dependency-free package in this repository (`packages/tokens`) that is the single source of truth.
`SomEnergiaTheme` builds the MUI theme from it, and it is re-exported here as `tokens`:

```js
import { tokens } from "@somenergia/somenergia-ui"
```

Projects without MUI should install `@somenergia/tokens` alone and import its CSS custom properties.
See [its README](packages/tokens/README.md).

`GlobalTheming` sets `data-theme` on `<html>` following the color mode, so plain CSS using the tokens
and MUI components always match.

## Configuring i18n on your project with somenergia-ui components

This library requires i18n configuration for multi-language support. Simply provide the host project's i18n instance, and the library will handle registering the necessary translations.

```ts
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
```

## Adding dependencies

- Do not add them in `package.json`'s `dependencies` key (except `@somenergia/tokens`, which lives in this repository)
- Add them both in `peerDependencies` and `developmentDependencies`
- Ensure they are filtered by the `externals` in `vite-config.js`' `build.rollupOptions.externals`
- If the build creates a `vendor-***.js` as output, means that you failed to filter it
- To know wich module is generating the `vendor-***.js`, you can get the name of the library
  by uncomenting the code in `vite-config.js` (`build.rollupOptions.output.manualChunks`)

## Using unreleased components in another project

First build the library locally (it also builds `packages/tokens`):

```bash
npm run build
```

From the other project install both packages. `@somenergia/tokens` goes first because, while it is
not published with the version `somenergia-ui` requires, npm can't find it in the registry:

```bash
npm install ../somenergia-ui/packages/tokens ../somenergia-ui
```

## Release process

This repository publishes two npm packages with independent versions:

| Package | Folder | Version in |
|---|---|---|
| `@somenergia/tokens` | `packages/tokens` | `packages/tokens/package.json` |
| `@somenergia/somenergia-ui` | repository root | `package.json` |

`somenergia-ui` depends on `@somenergia/tokens`, so **tokens are always published first**.

### 1. Decide the versions

- **`@somenergia/tokens`**: bump it only if `packages/tokens` changed since its last release.
  - Major: a token is renamed or removed, or a value changes visibly (it restyles every Som Energia project).
  - Minor: new tokens or new files (for example a new CSS export).
  - Patch: fixes that don't change any value.
- **`@somenergia/somenergia-ui`**: as usual. A tokens major bump that changes how components look is
  a major bump here too.
- If tokens got a new **major** version, update the range in the root `package.json`
  (`"@somenergia/tokens": "^X.0.0"`) and run `npm install` so `package-lock.json` follows.

### 2. Prepare the release commit

- Update the versions in `packages/tokens/package.json` and/or `package.json`
- Move the `Unreleased` entries of `CHANGES.md` under the new version and date
- Check everything passes as in CI:

```bash
npm ci
npm run lint
npm run test:ci
npm run build
```

- Review what each package will publish:

```bash
npm pack --dry-run -w @somenergia/tokens   # src/index.js, dist/tokens.css, dist/fonts.css, dist/fonts/*
npm pack --dry-run                          # dist/
```

### 3. Publish

#### Automatic (CI)

- Tag the release `somenergia-ui-M.m.p` and push the tag. Don't also create a GitHub release:
  the workflow runs on both, and the second run fails because the version is already on npm
- The `publish.yaml` workflow publishes `@somenergia/tokens` only if its version is not on npm yet,
  then publishes `@somenergia/somenergia-ui`
- The workflow's last step, "Deploy Storybook", fails: `gh-pages` can't push to the `gh-pages` branch
  because the job has no git credentials (`fatal: could not read Username for 'https://github.com'`)
  and only `contents: read` permission. The npm packages are already published by then.
  Deploy Storybook by hand from your machine:

```bash
npm run deploy-storybook
```

#### Manual

Tokens first (skip it if its version is already on npm, check with `npm view @somenergia/tokens versions`):

```bash
NPM_TOKEN=[...token] npm publish -w @somenergia/tokens --access public
```

Then the library:

```bash
NPM_TOKEN=[...token] npm publish
```

`prepack` builds `packages/tokens/dist` and `prepare` builds the library, so there is no need to build by hand.

The first publication of `@somenergia/tokens` creates the package on npm:
the token or user must be allowed to create packages in the `@somenergia` scope.

If the release is an existing version update:

```bash
NPM_TOKEN=[...token] npm dist-tag add @somenergia/tokens@[...version] latest
NPM_TOKEN=[...token] npm dist-tag add @somenergia/somenergia-ui@[...version] latest
```

### 4. After publishing

- Check both versions are on npm:

```bash
npm view @somenergia/tokens version
npm view @somenergia/somenergia-ui version
```

- Install the new version in a consuming project and check it looks right in light and dark mode

## Alpha publications

Create and use alpha tag and update package.json version. Example: `1.0.0-alpha.1`.
If tokens changed, publish an alpha of them first and make the root `package.json` depend on that
exact alpha version (`"@somenergia/tokens": "1.1.0-alpha.1"`), because `^` ranges skip prereleases.

```bash
NPM_TOKEN=[...token] npm publish -w @somenergia/tokens --access public --tag alpha
NPM_TOKEN=[...token] npm publish --tag alpha
```
