import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/wrapup-confetti.js',
      formats: ['iife'],
      name: 'WarpupConfetti',
      fileName: () => 'wrapup-confetti.js',
    },
  },
});