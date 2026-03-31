import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
      entry: 'src/app.jsx',
      formats: ['es'],
      fileName: 'app',
    },
    outDir: 'output',
  },
})
