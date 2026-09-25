/**
 * JS budget check (Section 33.1, step 11.6): the JavaScript index.html loads up front (the
 * entry script plus its modulepreloads) must stay at or under 250 KB gzipped. Route pages
 * and widgets are lazy chunks and don't count. Run after `vite build`.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { gzipSync } from 'node:zlib';

const BUDGET_KB = 250;
const dist = path.resolve('dist');
const html = readFileSync(path.join(dist, 'index.html'), 'utf8');
const files = [...html.matchAll(/(?:src|href)="(\/assets\/[^"]+\.js)"/g)].map((m) => m[1]!);
if (files.length === 0) {
  console.error('No scripts found in dist/index.html. Run `npm run build:client` first.');
  process.exit(1);
}

let total = 0;
for (const file of files) {
  const size = gzipSync(readFileSync(path.join(dist, file)), { level: 9 }).length;
  total += size;
  console.log(`${(size / 1024).toFixed(1).padStart(7)} KB  ${file}`);
}
const totalKb = total / 1024;
console.log(`${totalKb.toFixed(1).padStart(7)} KB  initial JS, gzipped (budget ${BUDGET_KB} KB)`);
if (totalKb > BUDGET_KB) {
  console.error(`Initial JS is over budget by ${(totalKb - BUDGET_KB).toFixed(1)} KB.`);
  process.exit(1);
}
