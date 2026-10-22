/**
 * Builds the verifier app (Phase 12, Section 54): a self-contained page, wrapped in a
 * macOS .app launcher, that lists every check for the chosen modules, records OK / Issue /
 * Skip with notes, and exports a .txt report to hand back for fixes.
 * Usage: npm run content:verify-app [-- --modules 2,3,4 --out docs/verification/app]
 */
import { chmodSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { loadContent } from './lib/loadContent.js';
import { appBundleFiles, buildAppData, renderApp, simVersionFromReadme } from './lib/verifyApp.js';

const args = process.argv.slice(2);
const option = (name: string, fallback: string) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1]! : fallback;
};
const modules = option('--modules', '2,3,4')
  .split(',')
  .map((n) => Number(n.trim()))
  .filter((n) => Number.isInteger(n) && n >= 0);
const outDir = path.resolve(option('--out', 'docs/verification/app'));
const verificationDir = path.resolve('docs/verification');

const bundle = loadContent();
if (bundle.issues.errors.length > 0) {
  console.error('Content has errors; run npm run content:validate first.');
  process.exit(1);
}

const readIf = (file: string) => (existsSync(file) ? readFileSync(file, 'utf8') : undefined);
const data = buildAppData(bundle, {
  modules,
  tracker: readIf(path.join(verificationDir, 'tracker.csv')),
  simVersion:
    simVersionFromReadme(readIf(path.join(verificationDir, 'README.md')) ?? '') ?? 'unknown',
});

const template = readFileSync(path.resolve('scripts/assets/verify-app.html'), 'utf8');
const page = renderApp(template, data);
// The site's fonts (tokens.css), shipped inside the bundle so the app works offline.
const fonts = [
  '@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2',
  '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2',
].map((file) => ({
  path: `fonts/${path.basename(file)}`,
  content: readFileSync(path.resolve('node_modules', file)),
}));
for (const file of appBundleFiles('LTF Verifier', page, fonts)) {
  const target = path.join(outDir, file.path);
  mkdirSync(path.dirname(target), { recursive: true });
  writeFileSync(target, file.content);
  if (file.executable) chmodSync(target, 0o755);
}

const items = data.modules.flatMap((m) => m.items);
const checks = items.reduce((n, i) => n + i.groups.reduce((k, g) => k + g.checks.length, 0), 0);
console.log(
  `Modules ${data.modules.map((m) => m.code).join(', ')}: ${items.length} items, ${checks} checks ` +
    `(sim ${data.simVersion}).`,
);
console.log(`Wrote ${path.relative(process.cwd(), outDir)}/LTF Verifier.app`);
