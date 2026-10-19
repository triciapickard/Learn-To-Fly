import { describe, expect, it } from 'vitest';
import { parseLessonSource } from '../lib/parseLesson.js';
import {
  addChallengeWarning,
  addLessonWarning,
  expectedReadmes,
  hasUnverifiedWarning,
  removeUnverifiedWarning,
  WARNING_TITLE,
} from '../lib/unverifiedWarning.js';
import { lessonSource, testContext } from './helpers.js';

const FILE = 'content/lessons/m2-fundamentals/l2-4.md';

describe('lesson warning', () => {
  const source = lessonSource('\n## Banking\n\nText {{vspeed.vq}}.\n');
  const warned = addLessonWarning(source);

  it('goes right after the frontmatter, once', () => {
    expect(hasUnverifiedWarning(source)).toBe(false);
    expect(warned.indexOf('[!CAUTION]')).toBeGreaterThan(warned.indexOf('\n---\n'));
    expect(warned).toContain(WARNING_TITLE);
    expect(addLessonWarning(warned)).toBe(warned);
  });

  it('round-trips back to the original file', () => {
    expect(removeUnverifiedWarning(warned)).toBe(source);
  });

  it('is never rendered and does not move reported line numbers', () => {
    const plain = testContext();
    const ctx = testContext();
    parseLessonSource(source, FILE, plain);
    const lesson = parseLessonSource(warned, FILE, ctx);
    expect(lesson?.hasUnverifiedWarning).toBe(true);
    expect(JSON.stringify(lesson?.blocks)).not.toContain('CAUTION');
    const shift = warned.split('\n').length - source.split('\n').length;
    expect(ctx.issues.errors[0]?.line).toBe(plain.issues.errors[0]!.line! + shift);
  });
});

describe('challenge warning', () => {
  const source = 'slug: c2-1-straight-and-level\npublished: false\n';
  it('is a comment block at the top that round-trips', () => {
    const warned = addChallengeWarning(source);
    expect(warned.startsWith('# ')).toBe(true);
    expect(warned.endsWith(source)).toBe(true);
    expect(removeUnverifiedWarning(warned)).toBe(source);
  });
});

describe('folder READMEs', () => {
  const lesson = (n: number, published: boolean) => ({
    file: `content/lessons/m2-fundamentals/l2-${n}.md`,
    frontmatter: {
      code: `L2.${n}`,
      title: `Lesson ${n}`,
      module: 'm2-fundamentals',
      order: n,
      published,
    },
  });
  const modules = [{ slug: 'm2-fundamentals', code: 'M2', title: 'Fundamentals of flight' }];

  it('warns when anything in the folder is unverified and marks each item', () => {
    const readme = expectedReadmes({
      lessons: [lesson(2, false), lesson(1, true)],
      challenges: [],
      modules,
    }).get('content/lessons/m2-fundamentals/README.md')!;
    expect(readme).toContain('# M2 · Fundamentals of flight');
    expect(readme).toContain('[!CAUTION]');
    expect(readme.indexOf('L2.1')).toBeLessThan(readme.indexOf('L2.2'));
    expect(readme).toContain('✅ Verified: [L2.1 Lesson 1](./l2-1.md)');
    expect(readme).toContain('⚠ **Unverified**: [L2.2 Lesson 2](./l2-2.md)');
  });

  it('has no warning when everything is verified', () => {
    const readme = expectedReadmes({ lessons: [lesson(1, true)], challenges: [], modules }).get(
      'content/lessons/m2-fundamentals/README.md',
    )!;
    expect(readme).not.toContain('[!CAUTION]');
  });
});
