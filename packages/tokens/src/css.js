// Serializes the design tokens into CSS custom properties (--som-*).
//
// The light color scheme goes on :root and the dark one is applied
// either explicitly with <html data-theme="dark"> (as GlobalTheming does)
// or following the system preference when no data-theme is set to light.

const PREFIX = "--som"

function kebabCase(key) {
  return String(key).replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}

function flatten(values, path = []) {
  return Object.entries(values).flatMap(([key, value]) =>
    typeof value === "object"
      ? flatten(value, [...path, kebabCase(key)])
      : [[`${PREFIX}-${[...path, kebabCase(key)].join("-")}`, value]],
  )
}

function declarations(values, indent) {
  return flatten(values)
    .map(([name, value]) => `${indent}${name}: ${value};`)
    .join("\n")
}

export default function tokensToCss(tokens) {
  const shared = {
    font: tokens.font,
    radius: tokens.radius,
    space: tokens.space,
  }
  const dark = { color: tokens.color.dark }

  return `/* Generated from @somenergia/tokens src/index.js. Do not edit. */
:root {
  color-scheme: light;
${declarations(shared, "  ")}
${declarations({ color: tokens.color.light }, "  ")}
}

:root[data-theme="dark"] {
  color-scheme: dark;
${declarations(dark, "  ")}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    color-scheme: dark;
${declarations(dark, "    ")}
  }
}
`
}
