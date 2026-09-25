/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const alias = {
  '@': fileURLToPath(new URL('./src', import.meta.url)),
  '@shared': fileURLToPath(new URL('./shared', import.meta.url)),
  '@server': fileURLToPath(new URL('./server/src', import.meta.url)),
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias },
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: 'client',
          environment: 'jsdom',
          include: ['src/**/*.test.{ts,tsx}'],
          setupFiles: ['src/test/setup.ts'],
        },
      },
      {
        resolve: { alias },
        test: {
          name: 'node',
          environment: 'node',
          include: ['server/**/*.test.ts', 'shared/**/*.test.ts', 'scripts/**/*.test.ts'],
        },
      },
    ],
    coverage: {
      provider: 'v8',
      include: ['src/**', 'server/src/**', 'shared/**', 'scripts/**'],
      exclude: ['**/*.test.*', 'src/test/**', 'src/main.tsx'],
    },
  },
});
