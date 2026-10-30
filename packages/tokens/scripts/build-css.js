// Writes dist/tokens.css from src/index.js.

import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import tokensToCss from "../src/css.js"
import tokens from "../src/index.js"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const output = resolve(root, "dist/tokens.css")

mkdirSync(dirname(output), { recursive: true })
writeFileSync(output, tokensToCss(tokens))
console.log(`Generated ${output}`)
