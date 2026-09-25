import mongoose from 'mongoose';
import type {
  AircraftDto,
  AirportDto,
  ChallengeDetail,
  ChallengeSummary,
  ChecklistDto,
  GlossaryTermDto,
  LessonDetail,
  LessonSummary,
  ModuleSummary,
  ResourceDto,
} from '@shared/schemas/api.js';
import { lessonHref } from '@shared/schemas/api.js';
import {
  AircraftModel,
  AirportModel,
  ChallengeModel,
  ChecklistModel,
  ContentReleaseModel,
  GlossaryTermModel,
  LessonModel,
  ModuleModel,
  ResourceModel,
} from '../models/content.js';
import { HttpError } from '../utils/HttpError.js';

type Raw = Record<string, unknown> & { _id?: unknown };

/**
 * `$in` over slugs read from our own database. `sanitizeFilter` (Section 32) rejects query
 * operators by default; these values never come from the request, so they are trusted.
 */
const inList = (values: string[]) => mongoose.trusted({ $in: values });

/** A lesson as stored by the seeder (references are slugs, not expanded). */
interface StoredLesson {
  moduleSlug: string;
  objectives: string[];
  blocks: LessonDetail['blocks'];
  sections: LessonDetail['sections'];
  widgets: string[];
  prerequisites: string[];
  challengeSlugs: string[];
  resources: string[];
  glossaryTerms: string[];
  checklists: string[];
  lastVerifiedAt: string | null;
  simVersion: string | null;
}

/** Strips Mongo/bookkeeping fields from a lean document. */
function clean<T>(doc: Raw): T {
  const { _id, __v, createdAt, updatedAt, contentHash, published, ...rest } = doc;
  void _id;
  void __v;
  void createdAt;
  void updatedAt;
  void contentHash;
  void published;
  return rest as T;
}

const LESSON_SUMMARY = {
  slug: 1,
  code: 1,
  moduleSlug: 1,
  order: 1,
  priority: 1,
  title: 1,
  summary: 1,
  estimatedMinutes: 1,
  draft: 1,
  version: 1,
};
const CHALLENGE_SUMMARY = {
  slug: 1,
  code: 1,
  moduleSlug: 1,
  title: 1,
  priority: 1,
  type: 1,
  difficulty: 1,
  estimatedMinutes: 1,
  draft: 1,
  version: 1,
  'setup.airport.icao': 1,
  lessonSlugs: 1,
};

function toLessonSummary(doc: Raw): LessonSummary {
  const d = clean<LessonSummary>(doc);
  return {
    slug: d.slug,
    code: d.code,
    moduleSlug: d.moduleSlug,
    order: d.order,
    priority: d.priority,
    title: d.title,
    summary: d.summary,
    estimatedMinutes: d.estimatedMinutes ?? null,
    draft: Boolean(d.draft),
    version: d.version,
  };
}

function toChallengeSummary(doc: Raw): ChallengeSummary {
  const d = doc as Raw & ChallengeSummary & { setup?: { airport?: { icao?: string } } };
  return {
    slug: d.slug,
    code: d.code,
    moduleSlug: d.moduleSlug,
    title: d.title,
    priority: d.priority,
    type: d.type,
    difficulty: d.difficulty,
    estimatedMinutes: d.estimatedMinutes,
    draft: Boolean(d.draft),
    version: d.version,
    airportIcao: d.setup?.airport?.icao ?? '',
    lessonSlugs: (d.lessonSlugs as string[]) ?? [],
  };
}

/** Sorts by the code's numbers: "L1.10" after "L1.9". */
function byCode(a: { code: string }, b: { code: string }) {
  const [am, an] = a.code.slice(1).split('.').map(Number);
  const [bm, bn] = b.code.slice(1).split('.').map(Number);
  return am! - bm! || an! - bn!;
}

/** Id of the latest content release; used for ETags (Section 29.3). */
export async function latestReleaseId(): Promise<string | null> {
  const release = await ContentReleaseModel.findOne({}, { _id: 1 })
    .sort({ releasedAt: -1 })
    .lean<Raw>();
  return release ? String(release._id) : null;
}

async function publishedLessonSummaries(filter: Record<string, unknown> = {}) {
  const docs = await LessonModel.find({ ...filter, published: true }, LESSON_SUMMARY).lean<Raw[]>();
  return docs.map(toLessonSummary);
}

async function publishedChallengeSummaries(filter: Record<string, unknown> = {}) {
  const docs = await ChallengeModel.find({ ...filter, published: true }, CHALLENGE_SUMMARY).lean<
    Raw[]
  >();
  return docs.map(toChallengeSummary);
}

function assembleModule(
  doc: Raw,
  lessons: LessonSummary[],
  challenges: ChallengeSummary[],
): ModuleSummary {
  const m = clean<ModuleSummary & { lessonSlugs: string[]; challengeSlugs: string[] }>(doc);
  const lessonBySlug = new Map(lessons.map((l) => [l.slug, l]));
  const challengeBySlug = new Map(challenges.map((c) => [c.slug, c]));
  return {
    slug: m.slug,
    code: m.code,
    order: m.order,
    title: m.title,
    summary: m.summary,
    description: m.description,
    icon: m.icon,
    estimatedMinutes: m.estimatedMinutes,
    lessons: m.lessonSlugs.flatMap((s) => (lessonBySlug.has(s) ? [lessonBySlug.get(s)!] : [])),
    challenges: m.challengeSlugs.flatMap((s) =>
      challengeBySlug.has(s) ? [challengeBySlug.get(s)!] : [],
    ),
  };
}

export async function listModules(): Promise<ModuleSummary[]> {
  const [modules, lessons, challenges] = await Promise.all([
    ModuleModel.find({ published: true }).sort({ order: 1 }).lean<Raw[]>(),
    publishedLessonSummaries(),
    publishedChallengeSummaries(),
  ]);
  return modules.map((m) => assembleModule(m, lessons, challenges));
}

export async function getModule(slug: string): Promise<ModuleSummary> {
  const doc = await ModuleModel.findOne({ slug, published: true }).lean<Raw>();
  if (!doc) throw HttpError.notFound('Module not found.');
  const [lessons, challenges] = await Promise.all([
    publishedLessonSummaries({ moduleSlug: slug }),
    publishedChallengeSummaries({ moduleSlug: slug }),
  ]);
  return assembleModule(doc, lessons, challenges);
}

/** Every published lesson in curriculum order (module order, then lesson order). */
async function curriculumOrder(): Promise<LessonSummary[]> {
  const modules = await listModules();
  return modules.flatMap((m) => m.lessons);
}

export async function getLesson(slug: string): Promise<LessonDetail> {
  const doc = await LessonModel.findOne({ slug, published: true }).lean<Raw>();
  if (!doc) throw HttpError.notFound('Lesson not found.');
  const l = clean<StoredLesson>(doc);
  const [module, order, prerequisites, challenges, resources, glossary, checklists] =
    await Promise.all([
      ModuleModel.findOne({ slug: l.moduleSlug }, { slug: 1, code: 1, title: 1 }).lean<Raw>(),
      curriculumOrder(),
      publishedLessonSummaries({ slug: inList(l.prerequisites) }),
      publishedChallengeSummaries({ slug: inList(l.challengeSlugs) }),
      ResourceModel.find({ slug: inList(l.resources), published: true }).lean<Raw[]>(),
      GlossaryTermModel.find(
        { slug: inList(l.glossaryTerms), published: true },
        { slug: 1, term: 1, definition: 1 },
      ).lean<Raw[]>(),
      ChecklistModel.find({ slug: inList(l.checklists), published: true }).lean<Raw[]>(),
    ]);
  const index = order.findIndex((o) => o.slug === slug);
  const resourceBySlug = new Map(resources.map((r) => [r.slug as string, clean<ResourceDto>(r)]));
  return {
    ...toLessonSummary(doc),
    objectives: l.objectives,
    blocks: l.blocks,
    sections: l.sections,
    widgets: l.widgets,
    module: {
      slug: String(module?.slug ?? l.moduleSlug),
      code: String(module?.code ?? ''),
      title: String(module?.title ?? ''),
    },
    prerequisites,
    challenges: challenges.sort(byCode),
    resources: l.resources.flatMap((s) => (resourceBySlug.has(s) ? [resourceBySlug.get(s)!] : [])),
    glossaryTerms: glossary
      .map((g) => ({
        slug: String(g.slug),
        term: String(g.term),
        definition: String(g.definition),
      }))
      .sort((a, b) => a.term.localeCompare(b.term)),
    checklists: checklists.map((c) => clean<ChecklistDto>(c)),
    navigation: {
      previous: index > 0 ? order[index - 1]! : null,
      next: index >= 0 && index < order.length - 1 ? order[index + 1]! : null,
    },
    lastVerifiedAt: l.lastVerifiedAt ?? null,
    simVersion: l.simVersion ?? null,
  };
}

export interface ChallengeFilters {
  module?: string;
  type?: string;
  difficulty?: number;
  priority?: string;
}

export async function listChallenges(filters: ChallengeFilters = {}): Promise<ChallengeSummary[]> {
  const query: Record<string, unknown> = {};
  if (filters.module) query.moduleSlug = filters.module;
  if (filters.type) query.type = filters.type;
  if (filters.difficulty) query.difficulty = filters.difficulty;
  if (filters.priority) query.priority = filters.priority;
  return (await publishedChallengeSummaries(query)).sort(byCode);
}

export async function getChallenge(slug: string): Promise<ChallengeDetail> {
  const doc = await ChallengeModel.findOne({ slug, published: true }).lean<Raw>();
  if (!doc) throw HttpError.notFound('Challenge not found.');
  const c = clean<ChallengeDetail & { lessonSlugs: string[] }>(doc);
  const [module, lessons] = await Promise.all([
    ModuleModel.findOne({ slug: c.moduleSlug }, { slug: 1, code: 1, title: 1 }).lean<Raw>(),
    publishedLessonSummaries({ slug: inList(c.lessonSlugs) }),
  ]);
  return {
    ...toChallengeSummary(doc),
    goal: c.goal,
    setup: c.setup,
    procedure: c.procedure,
    criteria: c.criteria,
    randomEvents: c.randomEvents ?? [],
    planningFields: c.planningFields ?? [],
    commonMistakes: c.commonMistakes ?? [],
    tips: c.tips ?? [],
    debriefQuestions: c.debriefQuestions ?? [],
    module: {
      slug: String(module?.slug ?? c.moduleSlug),
      code: String(module?.code ?? ''),
      title: String(module?.title ?? ''),
    },
    lessons: lessons.sort(byCode),
    lastVerifiedAt: c.lastVerifiedAt ?? null,
    simVersion: c.simVersion ?? null,
  };
}

export async function getAircraft(slug: string): Promise<AircraftDto> {
  const doc = await AircraftModel.findOne({ slug, published: true }).lean<Raw>();
  if (!doc) throw HttpError.notFound('Aircraft not found.');
  const { draft, ...rest } = clean<AircraftDto & { draft: boolean }>(doc);
  void draft;
  return rest;
}

export async function listChecklists(): Promise<ChecklistDto[]> {
  const docs = await ChecklistModel.find({ published: true }).sort({ order: 1 }).lean<Raw[]>();
  return docs.map((d) => clean<ChecklistDto>(d));
}

export async function getChecklist(slug: string): Promise<ChecklistDto> {
  const doc = await ChecklistModel.findOne({ slug, published: true }).lean<Raw>();
  if (!doc) throw HttpError.notFound('Checklist not found.');
  return clean<ChecklistDto>(doc);
}

export async function listAirports(): Promise<AirportDto[]> {
  const docs = await AirportModel.find({ published: true }).lean<Raw[]>();
  const roleOrder = { training: 0, destination: 1, awareness: 2 } as Record<string, number>;
  return docs
    .map((d) => clean<AirportDto>(d))
    .sort(
      (a, b) => (roleOrder[a.role] ?? 3) - (roleOrder[b.role] ?? 3) || a.icao.localeCompare(b.icao),
    );
}

export async function getAirport(icao: string) {
  const doc = await AirportModel.findOne({ icao: icao.toUpperCase(), published: true }).lean<Raw>();
  if (!doc) throw HttpError.notFound('Airport not found.');
  const challenges = await publishedChallengeSummaries({
    'setup.airport.icao': icao.toUpperCase(),
  });
  return { airport: clean<AirportDto>(doc), challenges: challenges.sort(byCode) };
}

export async function listGlossary(): Promise<GlossaryTermDto[]> {
  const [terms, lessons] = await Promise.all([
    GlossaryTermModel.find({ published: true }).lean<Raw[]>(),
    publishedLessonSummaries(),
  ]);
  const lessonBySlug = new Map(lessons.map((l) => [l.slug, l]));
  return terms
    .map((t) => {
      const term = clean<
        GlossaryTermDto & { lessonSlugs: string[]; draft: boolean; version: number }
      >(t);
      return {
        slug: term.slug,
        term: term.term,
        definition: term.definition,
        aliases: term.aliases ?? [],
        related: term.related ?? [],
        ...(term.source ? { source: term.source } : {}),
        lessons: (term.lessonSlugs ?? []).flatMap((s) => {
          const lesson = lessonBySlug.get(s);
          return lesson
            ? [
                {
                  slug: lesson.slug,
                  code: lesson.code,
                  title: lesson.title,
                  href: lessonHref(lesson),
                },
              ]
            : [];
        }),
      };
    })
    .sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }));
}

export async function listResources(
  filters: { topic?: string; type?: string } = {},
): Promise<ResourceDto[]> {
  const query: Record<string, unknown> = { published: true };
  if (filters.topic) query.topics = filters.topic;
  if (filters.type) query.type = filters.type;
  const docs = await ResourceModel.find(query).sort({ title: 1 }).lean<Raw[]>();
  return docs.map((d) => {
    const { draft, version, ...rest } = clean<ResourceDto & { draft: boolean; version: number }>(d);
    void draft;
    void version;
    return rest;
  });
}
