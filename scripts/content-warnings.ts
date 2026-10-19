/**
 * Adds the "not for learning use" warning to every unverified lesson and challenge, removes
 * it from verified ones, and regenerates the folder READMEs (D-17; the repository is public).
 * Usage: npm run content:warnings [-- --dir path/to/content]
 * Run it after changing `published`; content:validate fails until you do.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { loadContent } from './lib/loadContent.js';
import {
  addChallengeWarning,
  addLessonWarning,
  expectedReadmes,
  removeUnverifiedWarning,
  rootReadmeBlock,
  syncRootReadme,
} from './lib/unverifiedWarning.js';

const args = process.argv.slice(2);
const dirIndex = args.indexOf('--dir');
const contentDir =
  dirIndex >= 0 && args[dirIndex + 1] ? path.resolve(args[dirIndex + 1]!) : undefined;

const bundle = loadContent({ contentDir });
const changed: string[] = [];

function sync(file: string, next: (source: string) => string) {
  let current = '';
  try {
    current = readFileSync(file, 'utf8');
  } catch {
    // A missing README is written below.
  }
  const updated = next(current);
  if (updated !== current) {
    writeFileSync(file, updated);
    changed.push(file);
  }
}

for (const l of bundle.lessons) {
  sync(l.file, l.frontmatter.published ? removeUnverifiedWarning : addLessonWarning);
}
for (const c of bundle.challenges) {
  sync(c.file, c.published ? removeUnverifiedWarning : addChallengeWarning);
}
for (const [file, readme] of expectedReadmes(bundle)) sync(file, () => readme);
// The repository README (beside the default content/ folder only, not test fixtures).
if (!contentDir) sync('README.md', (source) => syncRootReadme(source, rootReadmeBlock(bundle)));

for (const file of changed) console.log(`updated ${file}`);
console.log(`${changed.length} file(s) updated.`);
