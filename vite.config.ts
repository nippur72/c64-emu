import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'c64emu',
        formats: ['es'],
        fileName: () => 'bundle.js',
      },
      outDir: 'dist',
      emptyOutDir: false,
      sourcemap: false,
      minify: isDev ? false : 'esbuild',
      rollupOptions: {
        output: {
          assetFileNames: '[name][extname]',
        },
      },
    },
  };
});
