import { createHash } from 'node:crypto';
import type { Model } from 'mongoose';
import {
  AircraftModel,
  AirportModel,
  AirspaceProfileModel,
  ChallengeModel,
  ChecklistModel,
  ContentReleaseModel,
  GlossaryTermModel,
  LessonModel,
  ModuleModel,
  ResourceModel,
} from '@server/models/content.js';
import type { ResolvedSetup } from '@shared/schemas/api.js';
import type { Challenge } from '@shared/schemas/content.js';
import { findGlossaryTerms } from './glossaryTerms.js';
import { formatIssue } from './issues.js';
import type { ContentBundle } from './loadContent.js';

export interface SeedOptions {
  dryRun?: boolean;
  /** Publish unverified drafts (for local development, CI and previews — never production). */
  includeDrafts?: boolean;
  gitSha?: string | null;
}

export interface SeedSummary {
  counts: Record<string, number>;
  created: string[];
  updated: string[];
  unpublished: string[];
  unchanged: number;
  releaseId: string | null;
}

type Doc = Record<string, unknown> & { published: boolean; draft: boolean };

interface CollectionPlan {
  name: string;
  model: Model<Record<string, unknown>>;
  key: string;
  docs: Doc[];
}

/** Stable JSON (sorted keys) so the hash only changes when content changes. */
function stableStringify(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value)
      .sort()
      .filter((k) => (value as Record<string, unknown>)[k] !== undefined)
      .map((k) => `${JSON.stringify(k)}:${stableStringify((value as Record<string, unknown>)[k])}`)
      .join(',')}}`;
  }
  return JSON.stringify(value);
}

/** Publication status is not content: changing it never bumps the version. */
export function contentHash(doc: Doc): string {
  const { published: _p, draft: _d, ...content } = doc;
  return createHash('sha256').update(stableStringify(content)).digest('hex');
}

function visibility(published: boolean, includeDrafts: boolean) {
  return { published: published || includeDrafts, draft: !published };
}

/** Expands a challenge's preset names into the full brief (Section 15.1). */
export function resolveSetup(setup: Challenge['setup'], bundle: ContentBundle): ResolvedSetup {
  const presets = bundle.presets!;
  const airport = bundle.airports.find((a) => a.icao === setup.airportIcao);
  const variant = bundle.aircraft?.variants.find((v) => v.id === setup.aircraftVariant);
  const preset = setup.weatherPreset ? presets.weather[setup.weatherPreset] : undefined;
  const load = presets.loads[setup.loadPreset];
  const assistance = presets.assistance[setup.assistance];
  const startState = presets.startStates[setup.startState];
  return {
    aircraft: {
      variant: setup.aircraftVariant,
      simName: variant?.simName ?? setup.aircraftVariant,
    },
    airport: { icao: setup.airportIcao, name: airport?.name ?? setup.airportIcao },
    startState: {
      id: setup.startState,
      label: startState?.label ?? setup.startState,
      description: startState?.description ?? '',
    },
    startDetails: Object.fromEntries(
      Object.entries(setup.startDetails).filter(([, v]) => v !== undefined),
    ) as Record<string, string | number>,
    weather: {
      preset: setup.weatherPreset ?? null,
      label: preset?.label ?? 'Custom weather',
      summary: preset?.summary ?? '',
      ...preset,
      ...setup.weather,
    },
    time: {
      local: setup.timeLocal,
      date: presets.dates[setup.datePreset]?.date ?? setup.datePreset,
    },
    load: {
      id: setup.loadPreset,
      label: load?.label ?? setup.loadPreset,
      description: load?.description ?? '',
    },
    assistance: {
      id: setup.assistance,
      label: assistance?.label ?? setup.assistance,
      description: assistance?.description ?? '',
    },
    aiTraffic: setup.aiTraffic,
    atc: setup.atc,
    crashDamage: setup.crashDamage,
    flightPlan: setup.flightPlan,
  };
}

/** Maps the validated bundle to the documents stored in each collection. */
export function buildDocuments(bundle: ContentBundle, includeDrafts = false): CollectionPlan[] {
  const v = (published: boolean) => visibility(published, includeDrafts);
  const lessons = bundle.lessons.map((l) => {
    const fm = l.frontmatter;
    return {
      slug: fm.slug,
      code: fm.code,
      moduleSlug: fm.module,
      order: fm.order,
      priority: fm.priority,
      title: fm.title,
      summary: fm.summary,
      objectives: fm.objectives,
      estimatedMinutes: fm.estimatedMinutes ?? null,
      prerequisites: fm.prerequisites,
      widgets: l.widgets,
      checklists: l.checklists,
      challengeSlugs: fm.challenges,
      resources: fm.resources,
      glossaryTerms: findGlossaryTerms(l.text, bundle.glossary),
      blocks: l.blocks,
      sections: l.sections,
      lastVerifiedAt: fm.lastVerifiedAt,
      simVersion: fm.simVersion,
      ...v(fm.published),
    };
  });
  // All lessons in the repo (the API hides unpublished ones), so publishing drafts does not
  // change glossary content or bump its version.
  const lessonsByTerm = new Map<string, string[]>();
  for (const lesson of lessons) {
    for (const term of lesson.glossaryTerms)
      lessonsByTerm.set(term, [...(lessonsByTerm.get(term) ?? []), lesson.slug]);
  }

  return [
    {
      name: 'modules',
      model: ModuleModel,
      key: 'slug',
      docs: bundle.modules.map(
        ({ lessons: lessonSlugs, challenges: challengeSlugs, published, ...m }) => ({
          ...m,
          lessonSlugs,
          challengeSlugs,
          ...v(published),
        }),
      ),
    },
    { name: 'lessons', model: LessonModel, key: 'slug', docs: lessons },
    {
      name: 'challenges',
      model: ChallengeModel,
      key: 'slug',
      docs: bundle.challenges.map(
        ({ file: _file, module, lessons: lessonSlugs, published, setup, ...c }) => ({
          ...c,
          setup: resolveSetup(setup, bundle),
          moduleSlug: module,
          lessonSlugs,
          ...v(published),
        }),
      ),
    },
    {
      name: 'aircraft',
      model: AircraftModel,
      key: 'slug',
      docs: bundle.aircraft ? [{ ...bundle.aircraft, ...v(true) }] : [],
    },
    {
      name: 'airspaceProfiles',
      model: AirspaceProfileModel,
      key: 'slug',
      docs: bundle.airspaceProfiles.map((p) => ({ ...p, ...v(true) })),
    },
    {
      name: 'checklists',
      model: ChecklistModel,
      key: 'slug',
      docs: bundle.checklists.map((c) => ({ ...c, ...v(true) })),
    },
    {
      name: 'airports',
      model: AirportModel,
      key: 'icao',
      docs: bundle.airports.map(({ published, ...a }) => ({ ...a, ...v(published) })),
    },
    {
      name: 'glossary',
      model: GlossaryTermModel,
      key: 'slug',
      docs: bundle.glossary.map((t) => ({
        ...t,
        lessonSlugs: lessonsByTerm.get(t.slug) ?? [],
        ...v(true),
      })),
    },
    {
      name: 'resources',
      model: ResourceModel,
      key: 'slug',
      docs: bundle.resources.map((r) => ({ ...r, ...v(true) })),
    },
  ];
}

/**
 * Upserts content by slug (Section 28.1): versions increase only when the content hash
 * changes; items removed from the repo are unpublished, never deleted (attempts reference
 * them); every run writes a `contentReleases` document.
 */
export async function seedContent(
  bundle: ContentBundle,
  options: SeedOptions = {},
): Promise<SeedSummary> {
  const { dryRun = false, includeDrafts = false, gitSha = null } = options;
  if (bundle.issues.errors.length > 0) {
    throw new Error(
      `Content has ${bundle.issues.errors.length} validation error(s); fix them before seeding.`,
    );
  }
  const summary: SeedSummary = {
    counts: {},
    created: [],
    updated: [],
    unpublished: [],
    unchanged: 0,
    releaseId: null,
  };

  for (const plan of buildDocuments(bundle, includeDrafts)) {
    summary.counts[plan.name] = plan.docs.filter((d) => d.published).length;
    const existing = await plan.model
      .find({}, { [plan.key]: 1, contentHash: 1, version: 1, published: 1, draft: 1 })
      .lean<Record<string, unknown>[]>();
    const byKey = new Map(existing.map((e) => [String(e[plan.key]), e]));
    const ops: Parameters<typeof plan.model.bulkWrite>[0] = [];

    for (const doc of plan.docs) {
      const key = String(doc[plan.key]);
      const id = `${plan.name}:${key}`;
      const hash = contentHash(doc);
      const current = byKey.get(key);
      byKey.delete(key);
      if (!current) {
        summary.created.push(id);
        ops.push({ insertOne: { document: { ...doc, contentHash: hash, version: 1 } } });
      } else if (current.contentHash !== hash) {
        summary.updated.push(id);
        ops.push({
          updateOne: {
            filter: { [plan.key]: key },
            update: { $set: { ...doc, contentHash: hash, version: Number(current.version) + 1 } },
          },
        });
      } else {
        summary.unchanged++;
        if (current.published !== doc.published || current.draft !== doc.draft) {
          ops.push({
            updateOne: {
              filter: { [plan.key]: key },
              update: { $set: { published: doc.published, draft: doc.draft } },
            },
          });
        }
      }
    }
    for (const [key, current] of byKey) {
      if (current.published) {
        summary.unpublished.push(`${plan.name}:${key}`);
        ops.push({
          updateOne: { filter: { [plan.key]: key }, update: { $set: { published: false } } },
        });
      }
    }
    if (!dryRun && ops.length > 0) await plan.model.bulkWrite(ops, { ordered: false });
  }

  if (!dryRun) {
    const release = await ContentReleaseModel.create({
      releasedAt: new Date(),
      gitSha,
      counts: summary.counts,
      changed: [...summary.created, ...summary.updated],
      unpublished: summary.unpublished,
      includeDrafts,
      validatorWarnings: bundle.issues.warnings.map(formatIssue),
    });
    summary.releaseId = String(release._id);
  }
  return summary;
}
