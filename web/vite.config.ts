import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const ASSET_URL = process.env.NODE_ENV === 'production' ? '/dev-manager/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: ASSET_URL,
  build: {
    chunkSizeWarningLimit: 1600,
  },
  resolve: {
    alias: [
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
      }
    ]
  }
})
