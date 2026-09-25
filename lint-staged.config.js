/** Pre-commit checks on staged files (plan.md step 1.21). */
export default {
  '*.{ts,tsx,js,mjs,cjs}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,yml,yaml,css,html}': ['prettier --write'],
  // Any content change must still validate (runs once, not per file).
  'content/**/*.{yaml,md}': () => 'npm run content:validate',
};
