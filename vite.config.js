import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jcloud-iphone/',
  build: {
    outDir: 'dist',
    chunkFileNames: 'assets/[name].[hash].js',
    assetFileNames: 'assets/[name].[hash].[ext]',
    workbox: {
      registerType: 'none',
    },
  },
})
