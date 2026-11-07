import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { importX } from 'eslint-plugin-import-x';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'dist-server',
      'coverage',
      'playwright-report',
      'test-results',
      'node_modules',
      'plan.md',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    settings: {
      'import-x/resolver': {
        typescript: {
          project: ['tsconfig.client.json', 'tsconfig.node.json'],
          noWarnOnMultipleProjects: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      'import-x/no-named-as-default-member': 'off',
      'import-x/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  // Type-aware rules for TypeScript files (D-28): unhandled promises are where Express
  // handlers and TanStack Query mutations fail silently.
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
      '@typescript-eslint/await-thenable': 'error',
    },
  },
  // Import boundaries (v1.md Section 25): shared code runs everywhere, so it imports
  // nothing app-specific; the client and the server never import each other.
  {
    rules: {
      'import-x/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './shared',
              from: ['./src', './server', './scripts'],
              message:
                'shared/ is imported by the client, server and scripts; keep it free of them.',
            },
            {
              target: './src',
              from: ['./server', './scripts'],
              message: 'The client talks to the server over the API, never by import.',
            },
            {
              target: './server/src',
              from: ['./src', './scripts'],
              message:
                'The server never imports client or script code; move shared logic to shared/.',
            },
          ],
        },
      ],
    },
  },
  // Services hold business logic with no req/res (v1.md Section 25).
  {
    files: ['server/src/services/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'express',
              message: 'Services never touch req/res; take plain values and throw HttpError.',
            },
          ],
        },
      ],
    },
  },
  // Client (browser)
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    files: ['src/**/*.tsx'],
    ...jsxA11y.flatConfigs.recommended,
  },
  // Server, scripts, config files (node)
  {
    files: ['server/**/*.ts', 'scripts/**/*.ts', 'e2e/**/*.ts', '*.config.{ts,js}'],
    languageOptions: { globals: globals.node },
  },
  // Shared code runs in both environments
  {
    files: ['shared/**/*.ts'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  prettier,
);
