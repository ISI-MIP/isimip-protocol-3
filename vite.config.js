import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import svgr from 'vite-plugin-svgr'

import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return ({
    base: '',
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
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    build: {
      sourcemap: isDev,
      outDir: 'output/assets',
      manifest: true,
      rollupOptions: {
        input: 'app/js/app.jsx',
        output: {
          entryFileNames: isDev ? 'js/[name].js' : 'js/[name]-[hash].js',
          chunkFileNames: isDev ? 'js/[name].js' : 'js/[name]-[hash].js',
          assetFileNames: isDev ? 'js/[name][extname]' : 'js/[name]-[hash][extname]',
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['import', 'legacy-js-api', 'global-builtin', 'color-functions'],
        },
      },
    },
  })
})
