import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  return {
    define: {
      'import.meta.url': 'document.currentScript && document.currentScript.src || ""',
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'c64emu',
        formats: ['iife'],
        fileName: () => 'bundle.js',
      },
      outDir: 'dist',
      emptyOutDir: false,
      sourcemap: isDev ? 'inline' : true,
      minify: isDev ? false : 'esbuild',
      rollupOptions: {
        output: {
          assetFileNames: '[name][extname]',
        },
      },
    },
  };
});
