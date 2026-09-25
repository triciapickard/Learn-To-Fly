import { cpSync, mkdtempSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { formatIssue } from '../../scripts/lib/issues.js';
import { loadContent } from '../../scripts/lib/loadContent.js';
import { seedContent, type SeedOptions } from '../../scripts/lib/seedContent.js';
import { validateContent } from '../../scripts/lib/validateContent.js';

/**
 * Builds a content folder from the real reference data (aircraft, presets, checklists,
 * airports, glossary, resources) plus the small fixture modules, lessons and challenges in
 * tests/fixtures/content, validates it and seeds it with the real seeder (Section 35.3).
 */
export async function seedFixtureContent(options: SeedOptions = {}) {
  const dir = mkdtempSync(path.join(tmpdir(), 'ltf-content-'));
  for (const file of readdirSync('content')) {
    if (file.endsWith('.yaml') && file !== 'modules.yaml')
      cpSync(path.join('content', file), path.join(dir, file));
  }
  cpSync('server/tests/fixtures/content', dir, { recursive: true });
  const bundle = loadContent({ contentDir: dir });
  validateContent(bundle);
  if (bundle.issues.errors.length) {
    throw new Error(
      `Fixture content is invalid:\n${bundle.issues.errors.map(formatIssue).join('\n')}`,
    );
  }
  return seedContent(bundle, options);
}
