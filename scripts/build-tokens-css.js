// Writes dist/tokens.css from lib/tokens. Runs after vite build,
// which empties dist/ first.

import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import tokens from "../lib/tokens/index.js"
import tokensToCss from "../lib/tokens/css.js"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const output = resolve(root, "dist/tokens.css")

mkdirSync(dirname(output), { recursive: true })
writeFileSync(output, tokensToCss(tokens))
console.log(`Generated ${output}`)
