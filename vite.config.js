import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteyaml from '@modyfi/vite-plugin-yaml'
import svgr from 'vite-plugin-svgr'
import { resolve, relative, extname } from 'path'
import { glob } from 'glob'
import { fileURLToPath } from 'node:url'
// import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteyaml(),
    svgr(),
    // eslint()
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'lib/index.jsx'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        /^react/,
        'react-i18next',
        'i18next',
        'i18next-browser-languagedetector',
        'prop-types',
        /^dayjs/,
        'styled-components',
        /^@mui/,
        '@emotion',
        /^recharts/,
      ],
      // create modlue A/B/module from lib/A/B/module.jsx
      input: Object.fromEntries(
        glob
          .sync('./lib/**/index.{ts,tsx,js,jsx}')
          .map((file) => [
            relative('lib', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        interop: 'auto',
        entryFileNames: '[name].[format].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
