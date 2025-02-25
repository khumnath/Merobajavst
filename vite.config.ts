import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/docs',
  build: {
    outDir: 'docs',
    sourcemap: true,
  },
});