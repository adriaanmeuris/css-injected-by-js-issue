import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/lib',
    emptyOutDir: false,
    polyfillModulePreload: false,
    lib: {
      entry: {
        'Comp1': 'src/components/Comp1.vue',
        'Comp2': 'src/components/Comp2.vue',
        'lib': 'src/components/components.js',
      },
      formats: ['es']
    },
    cssCodeSplit: true,
    minify: false,
  },
  rollupOptions: {
    external: ['vue'],
    output: {
      preserveModules: true,
      globals: {
        vue: 'Vue',
      },
    }
  },
  plugins: [
    vue(),
    cssInjectedByJsPlugin({
      relativeCSSInjection: true,
    }),
    visualizer({
      filename: './dist/report-lib.html',
    }),
  ],
})
