import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { FIRST_LESSON_PATH } from '@shared/constants.js';
import { formatIssue } from '../lib/issues.js';
import { loadContent } from '../lib/loadContent.js';
import { validateContent } from '../lib/validateContent.js';

describe('the real content/ folder', () => {
  it('validates with no errors or warnings', () => {
    const bundle = loadContent();
    validateContent(bundle);
    expect(bundle.issues.items.map(formatIssue)).toEqual([]);
    expect(bundle.modules).toHaveLength(9);
    expect(bundle.glossary.length).toBeGreaterThanOrEqual(150);
    expect(bundle.lessons.length).toBeGreaterThanOrEqual(1);
  });

  it('has the lesson the landing page links to', () => {
    const bundle = loadContent();
    const paths = bundle.lessons.map((l) => `/learn/${l.frontmatter.module}/${l.frontmatter.slug}`);
    expect(paths).toContain(FIRST_LESSON_PATH);
  });
});

describe('a deliberately broken fixture', () => {
  const bundle = loadContent({ contentDir: path.resolve('scripts/tests/fixtures/broken') });
  validateContent(bundle);
  const report = bundle.issues.errors.map(formatIssue);

  it.each([
    'content/modules.yaml — Duplicate module order 1',
    'Module "m1-test" lists unknown lesson "l1-9-missing-lesson"',
    'airports.yaml:7 — airports.0.towered: Invalid input: expected boolean, received string',
    'Unknown token {{vspeed.vq}}',
    'Unknown resource "no-such-resource"',
    'Published lessons must not contain verify callouts',
    'Published lessons need lastVerifiedAt',
    'Unknown lesson "l1-7-not-a-lesson"',
    'Unknown airport "KXYZ"',
    'Unknown weather preset "WX_TORNADO"',
    'reviews unknown section "no-such-section"',
    'Published challenges need lastVerifiedAt',
    '"VY" is used by both "vy" and "best-rate"',
    'relates to unknown term "nonexistent-term"',
    'Checklist "before-landing" has duplicate item id "mixture"',
  ])('reports: %s', (expected) => {
    expect(report.some((line) => line.includes(expected))).toBe(true);
  });

  it('gives file and line for lesson errors', () => {
    expect(report).toContainEqual(
      expect.stringMatching(
        /^ERROR scripts\/tests\/fixtures\/broken\/lessons\/m1-test\/l1-1-published-draft\.md:22 — Unknown token/,
      ),
    );
  });
});
