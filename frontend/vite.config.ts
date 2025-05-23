import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true}),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
  },
  base: '/',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },

})
