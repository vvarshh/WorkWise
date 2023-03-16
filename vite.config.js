import { fileURLToPath, URL } from 'node:url'
import { NodeGlobalsPolyfillPlugin} from '@esbuild-plugins/node-globals-polyfill' 
import { NodeModulesPolyfillPlugin} from '@esbuild-plugins/node-modules-polyfill'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: { esbuildOptions: {
    // Node.js global to browser globalThis
    define: {
    global: 'globalThis'
    },
    // Enable esbuild polyfill plugins
    plugins: [ NodeGlobalsPolyfillPlugin({
    process: true,
    buffer: true }),
    NodeModulesPolyfillPlugin() ]
  }}

})




