import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteyaml from '@modyfi/vite-plugin-yaml'
import svgr from 'vite-plugin-svgr'
import { isAbsolute, join, resolve, relative, extname } from 'path'
import { glob } from 'glob'
import fs from 'fs'
import { fileURLToPath } from 'node:url'
import pkg from './package.json'

const isExternal = (id) => !id.startsWith('.') && !isAbsolute(id)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteyaml(), svgr()],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'lib/index.jsx'),
      formats: ['es'],
    },
    rollupOptions: {
      // Consider all dependencies external (do not bundle them)
      external: [
        /^react/,
        'react-i18next',
        'i18next',
        'i18next-browser-languagedetector',
        'prop-types',
        /^dayjs/,
        /^recharts/,
        'styled-components',
        /^@mui/,
        /node_modules/,
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
        // Enable preserveModules to check any 3rd party being bundled
        //preserveModules: true,
        entryFileNames: '[name].[format].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        manualChunks: (id) => {
          //if (id.includes('node_modules'))
          //  return id.toString().split('node_modules/')[1].split('/')[0].toString()
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
