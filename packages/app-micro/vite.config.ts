import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  server: {
    port: 5001,
    cors: true
  },
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'AppMicro',
      fileName: 'app-micro'
    }
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
      customElement: true // we are building web components
    }),
    quasar() // config for quasar
  ],
})
