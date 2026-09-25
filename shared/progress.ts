/**
 * Completion rules (plan.md Section 13.3) and "continue" logic (step 8.9). Shared so the
 * dashboard API and any client-side overlay agree.
 *
 * - A module is complete when all its published P0 lessons are completed and all its
 *   published P0 challenges are passed. P1 (bonus) items never block completion. A module
 *   with no published P0 items is not complete: there is nothing in it to finish yet.
 * - The course is complete when every module is complete.
 */

export type Priority = 'P0' | 'P1';

export interface ProgressItem {
  slug: string;
  priority: Priority;
  /** Items from the content API are published; `false` lets callers pass raw data. */
  published?: boolean;
}

export interface ProgressModule {
  slug: string;
  lessons: ProgressItem[];
  challenges: ProgressItem[];
  published?: boolean;
}

export interface Done {
  /** Slugs of completed lessons. */
  lessons: Set<string>;
  /** Slugs of passed challenges. */
  challenges: Set<string>;
}

export interface ModuleProgress {
  slug: string;
  lessonsCompleted: number;
  lessonsTotal: number;
  challengesPassed: number;
  challengesTotal: number;
  /** P0 items done out of P0 items, 0–100. */
  percent: number;
  complete: boolean;
}

const live = <T extends { published?: boolean }>(items: T[]) =>
  items.filter((i) => i.published !== false);
const core = (items: ProgressItem[]) => live(items).filter((i) => i.priority === 'P0');

export function moduleProgress(module: ProgressModule, done: Done): ModuleProgress {
  const lessons = core(module.lessons);
  const challenges = core(module.challenges);
  const lessonsCompleted = lessons.filter((l) => done.lessons.has(l.slug)).length;
  const challengesPassed = challenges.filter((c) => done.challenges.has(c.slug)).length;
  const total = lessons.length + challenges.length;
  const finished = lessonsCompleted + challengesPassed;
  return {
    slug: module.slug,
    lessonsCompleted,
    lessonsTotal: lessons.length,
    challengesPassed,
    challengesTotal: challenges.length,
    percent: total === 0 ? 0 : Math.round((100 * finished) / total),
    complete: total > 0 && finished === total,
  };
}

export interface CourseProgress {
  modules: ModuleProgress[];
  lessonsCompleted: number;
  lessonsTotal: number;
  challengesPassed: number;
  challengesTotal: number;
  percent: number;
  complete: boolean;
}

export function courseProgress(modules: ProgressModule[], done: Done): CourseProgress {
  const list = live(modules).map((m) => moduleProgress(m, done));
  const sum = (key: keyof ModuleProgress) =>
    list.reduce((total, m) => total + (m[key] as number), 0);
  const total = sum('lessonsTotal') + sum('challengesTotal');
  const finished = sum('lessonsCompleted') + sum('challengesPassed');
  return {
    modules: list,
    lessonsCompleted: sum('lessonsCompleted'),
    lessonsTotal: sum('lessonsTotal'),
    challengesPassed: sum('challengesPassed'),
    challengesTotal: sum('challengesTotal'),
    percent: total === 0 ? 0 : Math.round((100 * finished) / total),
    complete: list.length > 0 && list.every((m) => m.complete),
  };
}

export interface CurriculumRef {
  type: 'lesson' | 'challenge';
  slug: string;
  moduleSlug: string;
}

/**
 * Core items in curriculum order that are not done yet: each module's lessons, then its
 * challenges.
 */
export function remainingItems(modules: ProgressModule[], done: Done): CurriculumRef[] {
  return live(modules).flatMap((m) => [
    ...core(m.lessons)
      .filter((l) => !done.lessons.has(l.slug))
      .map((l) => ({ type: 'lesson' as const, slug: l.slug, moduleSlug: m.slug })),
    ...core(m.challenges)
      .filter((c) => !done.challenges.has(c.slug))
      .map((c) => ({ type: 'challenge' as const, slug: c.slug, moduleSlug: m.slug })),
  ]);
}

/**
 * Where "Continue" goes: the last thing you worked on if it isn't finished, otherwise the
 * next unfinished core item. Null when everything is done.
 */
export function continueTarget(
  modules: ProgressModule[],
  done: Done,
  lastActivity: { type: 'lesson' | 'challenge'; slug: string } | null | undefined,
): CurriculumRef | null {
  if (lastActivity) {
    const finished =
      lastActivity.type === 'lesson'
        ? done.lessons.has(lastActivity.slug)
        : done.challenges.has(lastActivity.slug);
    const module = live(modules).find((m) =>
      (lastActivity.type === 'lesson' ? m.lessons : m.challenges).some(
        (i) => i.slug === lastActivity.slug && i.published !== false,
      ),
    );
    if (!finished && module) {
      return { type: lastActivity.type, slug: lastActivity.slug, moduleSlug: module.slug };
    }
  }
  return remainingItems(modules, done)[0] ?? null;
}
