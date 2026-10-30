# @somenergia/tokens

Som Energia design tokens: colors, typography, radii and spacing.
They are the single source of truth for Som Energia styles:
`@somenergia/somenergia-ui` builds its MUI theme from them, and any
other project can use them as plain CSS custom properties.

It has no dependencies, so projects without React or MUI can use it.

## Install

```bash
npm install --save @somenergia/tokens
```

## From CSS

```js
import "@somenergia/tokens/tokens.css"
```

```css
.card {
  color: var(--som-color-text);
  background: var(--som-color-surface);
  border-radius: var(--som-radius-lg);
  padding: var(--som-space-4);
  font-family: var(--som-font-family);
}
```

Dark colors apply with `<html data-theme="dark">`, or following the system
preference unless `data-theme="light"` is set. `GlobalTheming` from
`@somenergia/somenergia-ui` keeps `data-theme` in sync with its color mode.

## Font

`fonts.css` declares the Outfit variable font (OFL-1.1) with its files bundled in the package:

```js
import "@somenergia/tokens/fonts.css"
```

## From JavaScript

```js
import tokens from "@somenergia/tokens"

tokens.color.light.primary
tokens.color.dark.text
tokens.radius.xl
```

## Changing tokens

Edit `src/index.js` and run `npm run build -w @somenergia/tokens` from the
repository root. Never edit `dist/tokens.css`: it is generated.

Renaming or removing a token, or changing its value visibly, is a breaking
change for every Som Energia project: bump the major version.
