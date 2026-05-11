import viteyaml from "@modyfi/vite-plugin-yaml"
import react from "@vitejs/plugin-react"
import { glob } from "glob"
import { fileURLToPath } from "node:url"
import { extname, relative, resolve } from "path"
import { defineConfig } from "vite"
import eslint from "vite-plugin-eslint2"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [
    react(),
    viteyaml(),
    svgr(),
    eslint({
      build: true,
      lintOnStart: true,
      emitWarning: false,
      include: ["lib/**/*.{js,jsx}"],
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "lib/index.jsx"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        /^react/,
        "react-i18next",
        "i18next",
        "i18next-browser-languagedetector",
        "prop-types",
        /^dayjs/,
        "styled-components",
        /^@mui/,
        "@emotion",
        /^recharts/,
      ],
      // create modlue A/B/module from lib/A/B/module.jsx
      input: Object.fromEntries(
        glob
          .sync("./lib/**/index.{ts,tsx,js,jsx}")
          .map((file) => [
            relative("lib", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        interop: "auto",
        entryFileNames: "[name].[format].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
})
