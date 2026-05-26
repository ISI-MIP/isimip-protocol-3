import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import svgr from 'vite-plugin-svgr'

import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    svgr(),
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
    sourcemap: mode === 'development',
    outDir: 'output/assets',
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import', 'legacy-js-api', 'global-builtin', 'color-functions'],
      },
    },
  },
}))
