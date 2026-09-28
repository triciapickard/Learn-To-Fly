/**
 * Phase 12 verification report (plan v1.md steps 12.2 and 12.5).
 * Writes docs/verification/tracker.csv (your columns are kept on re-runs) and
 * docs/verification/checklist.md (every open verify marker, by module).
 * Usage: npm run content:verify-report [-- --out docs/verification]
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { loadContent } from './lib/loadContent.js';
import { buildChecklist, buildTracker, collectVerificationItems } from './lib/verification.js';

const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
const outDir = path.resolve(
  outIndex >= 0 && args[outIndex + 1] ? args[outIndex + 1]! : 'docs/verification',
);

const bundle = loadContent();
if (bundle.issues.errors.length > 0) {
  console.error('Content has errors; run npm run content:validate first.');
  process.exit(1);
}
const items = collectVerificationItems(bundle);

mkdirSync(outDir, { recursive: true });
const trackerFile = path.join(outDir, 'tracker.csv');
const existing = existsSync(trackerFile) ? readFileSync(trackerFile, 'utf8') : undefined;
writeFileSync(trackerFile, buildTracker(items, existing));

const linkBase = path.relative(outDir, process.cwd()).split(path.sep).join('/') + '/';
const today = new Date().toISOString().slice(0, 10);
writeFileSync(path.join(outDir, 'checklist.md'), buildChecklist(items, today, linkBase));

const open = items.filter((i) => i.markers.length > 0);
const total = items.reduce((n, i) => n + i.markers.length, 0);
console.log(
  `${items.length} items (${items.filter((i) => i.type === 'Lesson').length} lessons, ` +
    `${items.filter((i) => i.type === 'Challenge').length} challenges, ` +
    `${items.filter((i) => i.type === 'Data').length} data files); ` +
    `${total} open markers in ${open.length} items.`,
);
console.log(`Wrote ${path.relative(process.cwd(), trackerFile)} and checklist.md.`);
