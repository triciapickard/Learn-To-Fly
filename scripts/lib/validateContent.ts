import type { ContentBundle } from './loadContent.js';

function duplicates(values: string[]): string[] {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  for (const v of values) (seen.has(v) ? dupes : seen).add(v);
  return [...dupes];
}

/**
 * Cross-reference rules (plan.md Section 28.5). Adds issues to `bundle.issues`.
 * Draft items (`published: false`) may still contain `verify` callouts and have no
 * `lastVerifiedAt`; published items may not.
 */
export function validateContent(bundle: ContentBundle): void {
  const {
    issues,
    modules,
    lessons,
    challenges,
    resources,
    glossary,
    checklists,
    airports,
    presets,
    aircraft,
  } = bundle;
  const modulesFile = 'content/modules.yaml';

  const moduleBySlug = new Map(modules.map((m) => [m.slug, m]));
  const lessonBySlug = new Map(lessons.map((l) => [l.frontmatter.slug, l]));
  const challengeBySlug = new Map(challenges.map((c) => [c.slug, c]));
  const resourceSlugs = new Set(resources.map((r) => r.slug));
  const airportIcaos = new Set(airports.map((a) => a.icao));

  // Uniqueness
  for (const d of duplicates(modules.map((m) => m.slug)))
    issues.error(modulesFile, `Duplicate module slug "${d}"`);
  for (const d of duplicates(modules.map((m) => String(m.order))))
    issues.error(modulesFile, `Duplicate module order ${d}`);
  for (const d of duplicates(lessons.map((l) => l.frontmatter.slug)))
    issues.error('content/lessons', `Duplicate lesson slug "${d}"`);
  for (const d of duplicates(challenges.map((c) => c.slug)))
    issues.error('content/challenges', `Duplicate challenge slug "${d}"`);
  for (const d of duplicates(resources.map((r) => r.slug)))
    issues.error('content/resources.yaml', `Duplicate resource slug "${d}"`);
  for (const d of duplicates(checklists.map((c) => c.slug)))
    issues.error('content/checklists.yaml', `Duplicate checklist slug "${d}"`);
  for (const d of duplicates(airports.map((a) => a.icao)))
    issues.error('content/airports.yaml', `Duplicate airport "${d}"`);
  for (const c of checklists) {
    for (const d of duplicates(c.items.map((i) => i.id)))
      issues.error('content/checklists.yaml', `Checklist "${c.slug}" has duplicate item id "${d}"`);
  }
  const quizIds = lessons.flatMap((l) =>
    l.blocks.flatMap((b) => (b.type === 'quiz' ? [b.id] : [])),
  );
  for (const d of duplicates(quizIds)) issues.error('content/lessons', `Duplicate quiz id "${d}"`);

  // Modules ↔ lessons and challenges
  for (const m of modules) {
    for (const slug of m.lessons) {
      const lesson = lessonBySlug.get(slug);
      if (!lesson) issues.error(modulesFile, `Module "${m.slug}" lists unknown lesson "${slug}"`);
      else if (lesson.frontmatter.module !== m.slug) {
        issues.error(
          lesson.file,
          `Lesson is listed in "${m.slug}" but its module is "${lesson.frontmatter.module}"`,
        );
      }
    }
    for (const slug of m.challenges) {
      const challenge = challengeBySlug.get(slug);
      if (!challenge)
        issues.error(modulesFile, `Module "${m.slug}" lists unknown challenge "${slug}"`);
      else if (challenge.module !== m.slug) {
        issues.error(
          challenge.file,
          `Challenge is listed in "${m.slug}" but its module is "${challenge.module}"`,
        );
      }
    }
    // Lesson order: unique, and the module lists lessons in ascending order.
    const listed = m.lessons.flatMap((s) => (lessonBySlug.has(s) ? [lessonBySlug.get(s)!] : []));
    const orders = listed.map((l) => l.frontmatter.order);
    for (const d of duplicates(orders.map(String)))
      issues.error(modulesFile, `Module "${m.slug}" has two lessons with order ${d}`);
    if (orders.some((o, i) => i > 0 && o < orders[i - 1]!)) {
      issues.error(modulesFile, `Module "${m.slug}" must list its lessons in order`);
    }
    // Published lessons are contiguous (1, 2, 3, …); drafts may leave gaps while authoring.
    const published = listed.filter((l) => l.frontmatter.published).map((l) => l.frontmatter.order);
    if (published.some((o, i) => o !== i + 1)) {
      issues.error(
        modulesFile,
        `Module "${m.slug}": published lesson orders must be contiguous from 1`,
      );
    }
  }

  // Lessons
  for (const lesson of lessons) {
    const fm = lesson.frontmatter;
    const module = moduleBySlug.get(fm.module);
    if (!module) issues.error(lesson.file, `Unknown module "${fm.module}"`, 1);
    else if (!module.lessons.includes(fm.slug))
      issues.error(lesson.file, `Lesson is not listed in module "${fm.module}" (orphan)`, 1);
    if (!fm.code.startsWith(`L${fm.module.charAt(1)}.`))
      issues.error(lesson.file, `Code ${fm.code} does not match module ${fm.module}`, 1);
    for (const slug of fm.prerequisites)
      if (!lessonBySlug.has(slug)) issues.error(lesson.file, `Unknown prerequisite "${slug}"`, 1);
    for (const slug of fm.challenges)
      if (!challengeBySlug.has(slug)) issues.error(lesson.file, `Unknown challenge "${slug}"`, 1);
    for (const slug of fm.resources)
      if (!resourceSlugs.has(slug)) issues.error(lesson.file, `Unknown resource "${slug}"`, 1);
    if (fm.estimatedMinutes === undefined)
      issues.warning(lesson.file, 'estimatedMinutes is missing', 1);
    if (fm.published) {
      if (lesson.hasVerifyCallout)
        issues.error(lesson.file, 'Published lessons must not contain verify callouts');
      if (!fm.lastVerifiedAt)
        issues.error(lesson.file, 'Published lessons need lastVerifiedAt (Section 54)', 1);
    }
  }

  // Challenges
  const weather = new Set(Object.keys(presets?.weather ?? {}));
  const loads = new Set(Object.keys(presets?.loads ?? {}));
  const dates = new Set(Object.keys(presets?.dates ?? {}));
  const assistance = new Set(Object.keys(presets?.assistance ?? {}));
  const variants = new Set(aircraft?.variants.map((v) => v.id) ?? []);
  for (const c of challenges) {
    const module = moduleBySlug.get(c.module);
    if (!module) issues.error(c.file, `Unknown module "${c.module}"`);
    else if (!module.challenges.includes(c.slug))
      issues.error(c.file, `Challenge is not listed in module "${c.module}" (orphan)`);
    if (!c.code.startsWith(`C${c.module.charAt(1)}.`))
      issues.error(c.file, `Code ${c.code} does not match module ${c.module}`);
    for (const slug of c.lessons)
      if (!lessonBySlug.has(slug)) issues.error(c.file, `Unknown lesson "${slug}"`);
    if (!airportIcaos.has(c.setup.airportIcao))
      issues.error(c.file, `Unknown airport "${c.setup.airportIcao}"`);
    if (!variants.has(c.setup.aircraftVariant))
      issues.error(c.file, `Unknown aircraft variant "${c.setup.aircraftVariant}"`);
    if (c.setup.weatherPreset && !weather.has(c.setup.weatherPreset))
      issues.error(c.file, `Unknown weather preset "${c.setup.weatherPreset}"`);
    if (!loads.has(c.setup.loadPreset))
      issues.error(c.file, `Unknown load preset "${c.setup.loadPreset}"`);
    if (!dates.has(c.setup.datePreset))
      issues.error(c.file, `Unknown date preset "${c.setup.datePreset}"`);
    if (!assistance.has(c.setup.assistance))
      issues.error(c.file, `Unknown assistance profile "${c.setup.assistance}"`);
    for (const criterion of c.criteria) {
      if (!criterion.reviewLink) continue;
      const lesson = lessonBySlug.get(criterion.reviewLink.lesson);
      if (!lesson)
        issues.error(
          c.file,
          `Criterion "${criterion.id}" reviews unknown lesson "${criterion.reviewLink.lesson}"`,
        );
      else if (!lesson.sections.some((s) => s.id === criterion.reviewLink!.section)) {
        issues.error(
          c.file,
          `Criterion "${criterion.id}" reviews unknown section "${criterion.reviewLink.section}" in ${lesson.frontmatter.slug}`,
        );
      }
    }
    for (const e of c.randomEvents) {
      if (e.minSeconds > e.maxSeconds)
        issues.error(c.file, `Random event "${e.id}": minSeconds is after maxSeconds`);
    }
    if (c.published) {
      if (c.lessons.length === 0)
        issues.error(c.file, 'Published challenges must link at least one lesson');
      if (!c.lastVerifiedAt)
        issues.error(c.file, 'Published challenges need lastVerifiedAt (Section 54)');
    }
  }

  // Resources
  for (const r of resources) {
    if (r.url?.startsWith('http:'))
      issues.warning('content/resources.yaml', `Resource "${r.slug}" uses http: — prefer https:`);
    if (!r.url && !r.location)
      issues.error('content/resources.yaml', `Resource "${r.slug}" needs a url or a location`);
  }

  // Glossary: no duplicate terms or aliases; related terms exist.
  const glossaryFile = 'content/glossary.yaml';
  const owner = new Map<string, string>();
  for (const t of glossary) {
    for (const name of [t.term, ...t.aliases]) {
      const key = name.toLowerCase();
      const prev = owner.get(key);
      if (prev && prev !== t.slug)
        issues.error(glossaryFile, `"${name}" is used by both "${prev}" and "${t.slug}"`);
      owner.set(key, t.slug);
    }
  }
  for (const d of duplicates(glossary.map((t) => t.slug)))
    issues.error(glossaryFile, `Duplicate glossary slug "${d}"`);
  const glossarySlugs = new Set(glossary.map((t) => t.slug));
  for (const t of glossary) {
    for (const r of t.related)
      if (!glossarySlugs.has(r))
        issues.error(glossaryFile, `Term "${t.slug}" relates to unknown term "${r}"`);
  }
}
