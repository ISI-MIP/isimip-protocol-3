import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
          dest: 'css',
          rename: { stripBase: true }
        },
        {
          src: 'app/img/*',
          dest: 'img',
          rename: { stripBase: true }
        },
        {
          src: 'app/css/*',
          dest: 'css',
          rename: { stripBase: true }
        }
      ]
    })
  ],
  server: {
    port: 8080
  },
  define: {
    global: 'globalThis',
    'process.env': {},
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: 'app/js/app.jsx',
      formats: ['es'],
      fileName: 'js/app',
    },
    outDir: 'output/assets',
  },
})
