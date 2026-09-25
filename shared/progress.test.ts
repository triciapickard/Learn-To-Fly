import { describe, expect, it } from 'vitest';
import {
  continueTarget,
  courseProgress,
  moduleProgress,
  remainingItems,
  type Done,
  type ProgressModule,
} from './progress.js';

const m1: ProgressModule = {
  slug: 'm1',
  lessons: [
    { slug: 'l1-1', priority: 'P0' },
    { slug: 'l1-2', priority: 'P0' },
    { slug: 'l1-bonus', priority: 'P1' },
    { slug: 'l1-draft', priority: 'P0', published: false },
  ],
  challenges: [
    { slug: 'c1-1', priority: 'P0' },
    { slug: 'c1-bonus', priority: 'P1' },
  ],
};
const m2: ProgressModule = {
  slug: 'm2',
  lessons: [{ slug: 'l2-1', priority: 'P0' }],
  challenges: [],
};
const empty: ProgressModule = { slug: 'm9', lessons: [], challenges: [] };

const done = (lessons: string[] = [], challenges: string[] = []): Done => ({
  lessons: new Set(lessons),
  challenges: new Set(challenges),
});

describe('module completion (Section 13.3)', () => {
  it('is complete only when every P0 lesson is completed and every P0 challenge passed', () => {
    expect(moduleProgress(m1, done(['l1-1', 'l1-2']))).toMatchObject({
      complete: false,
      percent: 67,
      lessonsCompleted: 2,
      lessonsTotal: 2,
      challengesPassed: 0,
      challengesTotal: 1,
    });
    expect(moduleProgress(m1, done(['l1-1', 'l1-2'], ['c1-1']))).toMatchObject({
      complete: true,
      percent: 100,
    });
  });

  it("doesn't let P1 items block completion", () => {
    expect(moduleProgress(m1, done(['l1-1', 'l1-2'], ['c1-1'])).complete).toBe(true);
    expect(moduleProgress(m1, done(['l1-bonus'], ['c1-bonus'])).percent).toBe(0);
  });

  it('ignores unpublished items', () => {
    // l1-draft is P0 but unpublished: it is neither counted nor required.
    expect(moduleProgress(m1, done()).lessonsTotal).toBe(2);
    expect(remainingItems([m1], done(['l1-1', 'l1-2'], ['c1-1']))).toEqual([]);
    expect(
      courseProgress([m1, { ...m2, published: false }], done(['l1-1', 'l1-2'], ['c1-1'])),
    ).toMatchObject({ complete: true, modules: [expect.objectContaining({ slug: 'm1' })] });
  });

  it('treats a module with nothing published as not complete', () => {
    expect(moduleProgress(empty, done())).toMatchObject({ complete: false, percent: 0 });
  });
});

describe('course progress', () => {
  it('adds up modules and is complete when every module is', () => {
    const partial = courseProgress([m1, m2], done(['l1-1', 'l1-2'], ['c1-1']));
    expect(partial).toMatchObject({
      lessonsCompleted: 2,
      lessonsTotal: 3,
      challengesPassed: 1,
      challengesTotal: 1,
      percent: 75,
      complete: false,
    });
    expect(courseProgress([m1, m2], done(['l1-1', 'l1-2', 'l2-1'], ['c1-1'])).complete).toBe(true);
    expect(courseProgress([], done()).complete).toBe(false);
  });
});

describe('continue and next up (step 8.9)', () => {
  it('lists unfinished core items in curriculum order', () => {
    expect(remainingItems([m1, m2], done(['l1-1']))).toEqual([
      { type: 'lesson', slug: 'l1-2', moduleSlug: 'm1' },
      { type: 'challenge', slug: 'c1-1', moduleSlug: 'm1' },
      { type: 'lesson', slug: 'l2-1', moduleSlug: 'm2' },
    ]);
  });

  it('continues the last activity if unfinished, else the next item', () => {
    const modules = [m1, m2];
    expect(continueTarget(modules, done(['l1-1']), { type: 'lesson', slug: 'l2-1' })).toEqual({
      type: 'lesson',
      slug: 'l2-1',
      moduleSlug: 'm2',
    });
    // Finished last activity → next unfinished item.
    expect(continueTarget(modules, done(['l1-1']), { type: 'lesson', slug: 'l1-1' })).toEqual({
      type: 'lesson',
      slug: 'l1-2',
      moduleSlug: 'm1',
    });
    // A bonus challenge in progress is still worth continuing.
    expect(continueTarget(modules, done(), { type: 'challenge', slug: 'c1-bonus' })).toMatchObject({
      slug: 'c1-bonus',
    });
    // Unknown or unpublished slugs fall back to the next item.
    expect(continueTarget(modules, done(), { type: 'lesson', slug: 'l1-draft' })).toMatchObject({
      slug: 'l1-1',
    });
    expect(continueTarget(modules, done(), null)).toMatchObject({ slug: 'l1-1' });
    expect(continueTarget(modules, done(['l1-1', 'l1-2', 'l2-1'], ['c1-1']), null)).toBeNull();
  });
});
