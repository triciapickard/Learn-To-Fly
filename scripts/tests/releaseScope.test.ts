import { describe, expect, it } from 'vitest';
import { loadContent } from '../lib/loadContent.js';

/**
 * The v0.0 early beta publishes Modules 0 and 1 only (v1.md D-26). Publishing a module is
 * a deliberate content change: remove its `published: false` here and in this test.
 */
describe('release scope (v0.0 early beta)', () => {
  const bundle = loadContent();
  const published = bundle.modules.filter((m) => m.published);

  it('publishes exactly Modules 0 and 1', () => {
    expect(published.map((m) => m.slug)).toEqual(['m0-getting-started', 'm1-meet-the-skyhawk']);
  });

  it('publishes no lesson or challenge outside a published module', () => {
    const live = new Set(published.map((m) => m.slug));
    const strayLessons = bundle.lessons
      .filter((l) => l.frontmatter.published && !live.has(l.frontmatter.module))
      .map((l) => l.frontmatter.slug);
    const strayChallenges = bundle.challenges
      .filter((c) => c.published && !live.has(c.module))
      .map((c) => c.slug);
    expect(strayLessons).toEqual([]);
    expect(strayChallenges).toEqual([]);
  });

  it('publishes every lesson and challenge of a published module', () => {
    for (const m of published) {
      const lessons = bundle.lessons.filter((l) => l.frontmatter.module === m.slug);
      const challenges = bundle.challenges.filter((c) => c.module === m.slug);
      expect(lessons.map((l) => l.frontmatter.slug).sort()).toEqual([...m.lessons].sort());
      expect(lessons.every((l) => l.frontmatter.published)).toBe(true);
      expect(challenges.map((c) => c.slug).sort()).toEqual([...m.challenges].sort());
      expect(challenges.every((c) => c.published)).toBe(true);
    }
  });
});
