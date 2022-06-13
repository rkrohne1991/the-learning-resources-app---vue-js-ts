import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      // scss: {
      //   additionalData: ` @import "./src/sass/variables.scss";`,
      // },
      scss: {
        additionalData: ` @import "@/styles/variables.scss";`,
      },
    },
  },
});
