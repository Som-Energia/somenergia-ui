import { defineConfig } from "i18next-cli"

export default defineConfig({
  locales: ["ca", "es", "eu", "gl"],
  extract: {
    input: ["lib/**/*.{js,jsx}"],
    output: "lib/i18n/locale-{{language}}.yaml",
    defaultNS: false,
    nsSeparator: false,
    keySeparator: false,
    sort: true,
    indentation: 4,
    removeUnusedKeys: true,
    extractFromComments: false,
  },
})
