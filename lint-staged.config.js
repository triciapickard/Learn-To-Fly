/** Pre-commit checks on staged files (plan.md step 1.21). */
export default {
  '*.{ts,tsx,js,mjs,cjs}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,yml,yaml,css,html}': ['prettier --write'],
  // Any content change must still validate (runs once, not per file) and spell-check (D-28).
  'content/**/*.{yaml,md}': [
    () => 'npm run content:validate',
    'cspell --no-progress --no-summary --no-must-find-files',
  ],
};
