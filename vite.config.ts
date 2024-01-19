import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => 'assets/ba-logo-[name]-[hash][extname]',
        entryFileNames: 'assets/ba-logo-[name]-[hash].js',
        chunkFileNames: 'assets/ba-logo-[name]-[hash].js',
      },
    },
  },
});
