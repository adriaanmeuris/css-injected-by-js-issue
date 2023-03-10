import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    // cssCodeSplit: true,
    minify: false,
  },
  plugins: [
    vue(),
    visualizer({
      filename: './dist/report-site.html',
    }),
  ],
})
