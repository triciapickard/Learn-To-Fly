/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

const alias = {
  '@': fileURLToPath(new URL('./src', import.meta.url)),
  '@shared': fileURLToPath(new URL('./shared', import.meta.url)),
  '@server': fileURLToPath(new URL('./server/src', import.meta.url)),
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // `npm run analyze` writes a treemap of the bundle to dist/stats.html (step 11.6).
    process.env.ANALYZE ? visualizer({ filename: 'dist/stats.html', gzipSize: true }) : null,
  ],
  resolve: { alias },
  build: {
    // Never inline fonts as data: URLs, so the CSP can keep font-src 'self' (step 11.11).
    assetsInlineLimit: (file) => (/\.(woff2?|ttf|otf)$/.test(file) ? false : undefined),
  },
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
          globalSetup: ['server/tests/globalSetup.ts'],
          hookTimeout: 60_000,
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
