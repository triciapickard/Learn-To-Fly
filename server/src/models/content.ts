import mongoose, { Schema, type Model } from 'mongoose';
import { toJSONPlugin } from './plugins/toJSON.js';

/**
 * Content collections (plan.md Section 27). Written only by the seed script
 * (`npm run content:seed`); the API reads them. Nested structures (blocks, setup,
 * criteria…) are validated by the shared Zod schemas before seeding, so they are stored
 * as Mixed here.
 */
const Mixed = Schema.Types.Mixed;

/** Fields every seeded content document has. */
const seededFields = {
  published: { type: Boolean, required: true, index: true },
  /** Seeded from an unverified draft (only when drafts are included, e.g. previews). */
  draft: { type: Boolean, default: false },
  contentHash: { type: String, required: true },
  version: { type: Number, required: true, min: 1 },
};

function contentModel(
  name: string,
  collection: string,
  definition: Record<string, unknown>,
  key = 'slug',
) {
  const schema = new Schema(
    { ...definition, ...seededFields },
    { timestamps: true, collection, minimize: false },
  );
  schema.index({ [key]: 1 }, { unique: true });
  schema.plugin(toJSONPlugin);
  return schema;
}

const ModuleSchema = contentModel('Module', 'modules', {
  slug: { type: String, required: true },
  code: String,
  order: { type: Number, required: true },
  title: String,
  summary: String,
  description: String,
  icon: String,
  lessonSlugs: [String],
  challengeSlugs: [String],
  estimatedMinutes: Number,
});

const LessonSchema = contentModel('Lesson', 'lessons', {
  slug: { type: String, required: true },
  code: String,
  moduleSlug: { type: String, required: true },
  order: Number,
  priority: { type: String, enum: ['P0', 'P1'] },
  title: String,
  summary: String,
  objectives: [String],
  estimatedMinutes: Number,
  prerequisites: [String],
  widgets: [String],
  checklists: [String],
  challengeSlugs: [String],
  resources: [String],
  glossaryTerms: [String],
  blocks: [Mixed],
  sections: [{ _id: false, id: String, title: String }],
  lastVerifiedAt: { type: String, default: null },
  simVersion: { type: String, default: null },
});
LessonSchema.index({ moduleSlug: 1, order: 1 });

const ChallengeSchema = contentModel('Challenge', 'challenges', {
  slug: { type: String, required: true },
  code: String,
  title: String,
  moduleSlug: { type: String, required: true },
  lessonSlugs: [String],
  priority: { type: String, enum: ['P0', 'P1'] },
  type: String,
  difficulty: Number,
  estimatedMinutes: Number,
  goal: String,
  setup: Mixed,
  procedure: [String],
  criteria: [Mixed],
  randomEvents: [Mixed],
  planningFields: [Mixed],
  commonMistakes: [String],
  tips: [String],
  debriefQuestions: [Mixed],
  lastVerifiedAt: { type: String, default: null },
  simVersion: { type: String, default: null },
});
ChallengeSchema.index({ moduleSlug: 1 });
ChallengeSchema.index({ 'setup.airportIcao': 1 });

const AircraftSchema = contentModel('Aircraft', 'aircraft', {
  slug: { type: String, required: true },
  name: String,
  variants: [Mixed],
  specs: Mixed,
  vspeeds: Mixed,
  arcs: Mixed,
  limits: Mixed,
  powerSettings: [Mixed],
  performanceModel: Mixed,
  verification: Mixed,
  verifiedAt: { type: String, default: null },
  simVersion: { type: String, default: null },
});

const ChecklistSchema = contentModel('Checklist', 'checklists', {
  slug: { type: String, required: true },
  title: String,
  phase: String,
  order: Number,
  mode: { type: String, enum: ['read-do', 'do-verify'] },
  aircraftSlug: String,
  items: [Mixed],
  verifiedAt: { type: String, default: null },
});

const AirportSchema = contentModel(
  'Airport',
  'airports',
  {
    icao: { type: String, required: true },
    name: String,
    city: String,
    elevationFt: Number,
    airspaceClass: String,
    towered: Boolean,
    role: String,
    runways: [Mixed],
    frequencies: [Mixed],
    patternNotes: String,
    notes: [String],
    links: Mixed,
    verifiedAt: { type: String, default: null },
    verifiedAgainst: [String],
  },
  'icao',
);

const GlossaryTermSchema = contentModel('GlossaryTerm', 'glossary', {
  slug: { type: String, required: true },
  term: String,
  aliases: [String],
  definition: String,
  related: [String],
  source: String,
  lessonSlugs: [String],
});

const ResourceSchema = contentModel('Resource', 'resources', {
  slug: { type: String, required: true },
  title: String,
  publisher: String,
  url: String,
  location: String,
  type: String,
  topics: [String],
  free: Boolean,
  description: String,
  verifiedAt: { type: String, default: null },
});

/** One document per seed run (Section 27.12). */
const ContentReleaseSchema = new Schema(
  {
    releasedAt: { type: Date, required: true },
    gitSha: { type: String, default: null },
    counts: Mixed,
    changed: [String],
    unpublished: [String],
    includeDrafts: Boolean,
    validatorWarnings: [String],
  },
  { collection: 'contentReleases' },
);
ContentReleaseSchema.index({ releasedAt: -1 });
ContentReleaseSchema.plugin(toJSONPlugin);

function model(name: string, schema: Schema): Model<Record<string, unknown>> {
  return (mongoose.models[name] as Model<Record<string, unknown>>) ?? mongoose.model(name, schema);
}

export const ModuleModel = model('Module', ModuleSchema);
export const LessonModel = model('Lesson', LessonSchema);
export const ChallengeModel = model('Challenge', ChallengeSchema);
export const AircraftModel = model('Aircraft', AircraftSchema);
export const ChecklistModel = model('Checklist', ChecklistSchema);
export const AirportModel = model('Airport', AirportSchema);
export const GlossaryTermModel = model('GlossaryTerm', GlossaryTermSchema);
export const ResourceModel = model('Resource', ResourceSchema);
export const ContentReleaseModel = model('ContentRelease', ContentReleaseSchema);
