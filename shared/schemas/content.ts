import { z } from 'zod';
import { WIDGET_NAMES } from '../widgets.js';

/**
 * Content schemas (plan.md Sections 27–28). The files in `content/` are validated against
 * these by `npm run content:validate`; the seeder stores the parsed result in MongoDB.
 */

export const SlugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slugs are lowercase kebab-case (a-z, 0-9, -)');
export const ModuleSlugSchema = SlugSchema.regex(/^m\d-/, 'Module slugs start with m<digit>-');
export const LessonSlugSchema = SlugSchema.regex(/^l\d-\d+-/, 'Lesson slugs look like l2-3-…');
export const ChallengeSlugSchema = SlugSchema.regex(
  /^c\d-\d+-/,
  'Challenge slugs look like c4-3-…',
);
export const PrioritySchema = z.enum(['P0', 'P1']);
export type Priority = z.infer<typeof PrioritySchema>;
export const IcaoSchema = z.string().regex(/^[A-Z0-9]{3,4}$/, 'ICAO codes are 3–4 capitals/digits');
/** YAML dates may arrive as Date objects or strings; store ISO date strings. */
export const DateSchema = z
  .union([z.date(), z.string().regex(/^\d{4}-\d{2}-\d{2}/)])
  .transform((value) =>
    value instanceof Date ? value.toISOString().slice(0, 10) : value.slice(0, 10),
  );
export const NullableDateSchema = DateSchema.nullable().default(null);

// ---------------------------------------------------------------------------------------
// Aircraft (Section 8, 27.4)

export const VSpeedSchema = z
  .strictObject({
    label: z.string().min(1),
    meaning: z.string().min(1),
    /** A single KIAS value, or `min`–`max` for ranges. */
    kias: z.number().positive().optional(),
    min: z.number().positive().optional(),
    max: z.number().positive().optional(),
    notes: z.string().optional(),
  })
  .refine((v) => v.kias !== undefined || (v.min !== undefined && v.max !== undefined), {
    message: 'Give either `kias` or both `min` and `max`',
  });
export type VSpeed = z.infer<typeof VSpeedSchema>;

const Range = z.tuple([z.number(), z.number()]);

export const AircraftSchema = z.strictObject({
  slug: SlugSchema,
  name: z.string().min(1),
  variants: z
    .array(
      z.strictObject({
        id: SlugSchema,
        simName: z.string().min(1),
        avionics: z.string().min(1),
        gps: z.boolean(),
        autopilot: z.string().nullable(),
        notes: z.string().optional(),
      }),
    )
    .min(1),
  specs: z.record(z.string(), z.strictObject({ label: z.string(), value: z.string() })),
  vspeeds: z.record(z.string(), VSpeedSchema),
  arcs: z.strictObject({ white: Range, green: Range, yellow: Range, redline: z.number() }),
  limits: z.strictObject({
    maneuveringSpeed: z.array(z.strictObject({ weightLb: z.number(), kias: z.number() })).min(1),
    maxDemonstratedCrosswindKt: z.number(),
  }),
  powerSettings: z
    .array(
      z.strictObject({
        phase: z.string(),
        rpm: z.string(),
        flaps: z.string(),
        targetSpeed: z.string(),
        pitch: z.string().optional(),
      }),
    )
    .min(1),
  /** W5 steady-state lookup (pitch°, RPM) → (KIAS, fpm). Filled from sim test flights. */
  performanceModel: z
    .object({
      pitchDeg: z.array(z.number()).min(2),
      rpm: z.array(z.number()).min(2),
      ias: z.array(z.array(z.number())),
      vs: z.array(z.array(z.number())),
      source: z.string(),
    })
    .superRefine((model, ctx) => {
      // One row per pitch and one column per RPM, with both axes in increasing order.
      for (const key of ['pitchDeg', 'rpm'] as const) {
        if (model[key].some((v, i) => i > 0 && v <= model[key][i - 1]!)) {
          ctx.addIssue({ code: 'custom', path: [key], message: `${key} must increase` });
        }
      }
      for (const key of ['ias', 'vs'] as const) {
        const table = model[key];
        if (
          table.length !== model.pitchDeg.length ||
          table.some((row) => row.length !== model.rpm.length)
        ) {
          ctx.addIssue({
            code: 'custom',
            path: [key],
            message: `${key} needs ${model.pitchDeg.length} rows (one per pitch) of ${model.rpm.length} values (one per RPM)`,
          });
        }
      }
    })
    .nullable()
    .default(null),
  /** Per-field verification status; every number starts unverified (step 5.4). */
  verification: z.record(
    z.string(),
    z.strictObject({ verified: z.boolean(), note: z.string().optional() }),
  ),
  verifiedAt: NullableDateSchema,
  simVersion: z.string().nullable().default(null),
});
export type Aircraft = z.infer<typeof AircraftSchema>;

// ---------------------------------------------------------------------------------------
// Modules (Section 27.2)

export const ModuleSchema = z.strictObject({
  slug: ModuleSlugSchema,
  code: z.string().regex(/^M\d$/),
  order: z.number().int().min(0),
  title: z.string().min(1),
  summary: z.string().min(1).max(200),
  description: z.string().min(1),
  icon: z.string().min(1),
  lessons: z.array(LessonSlugSchema).default([]),
  challenges: z.array(ChallengeSlugSchema).default([]),
  estimatedMinutes: z.number().int().positive(),
  published: z.boolean().default(true),
});
export type Module = z.infer<typeof ModuleSchema>;
export const ModulesFileSchema = z.strictObject({ modules: z.array(ModuleSchema).min(1) });

// ---------------------------------------------------------------------------------------
// Lessons (Sections 27.3, 28.2, Appendix D)

export const LessonFrontmatterSchema = z.strictObject({
  slug: LessonSlugSchema,
  code: z.string().regex(/^L\d\.\d+$/),
  module: ModuleSlugSchema,
  order: z.number().int().min(1),
  priority: PrioritySchema,
  title: z.string().min(1),
  summary: z.string().min(1).max(200),
  estimatedMinutes: z.number().int().positive().optional(),
  prerequisites: z.array(LessonSlugSchema).default([]),
  objectives: z.array(z.string().min(1)).min(2).max(4),
  /** Optional: widgets are detected from directives; if listed, they must match. */
  widgets: z.array(z.enum(WIDGET_NAMES)).optional(),
  challenges: z.array(ChallengeSlugSchema).default([]),
  resources: z.array(SlugSchema).default([]),
  published: z.boolean(),
  lastVerifiedAt: NullableDateSchema,
  simVersion: z.string().nullable().default(null),
});
export type LessonFrontmatter = z.infer<typeof LessonFrontmatterSchema>;

export const CALLOUT_TYPES = ['safety', 'sim', 'classic', 'tip', 'verify', 'note'] as const;
export const QUIZ_TYPES = ['single', 'multi', 'numeric', 'order'] as const;

export const QuizOptionSchema = z.strictObject({ id: z.string(), text: z.string().min(1) });

const QuizBase = {
  type: z.literal('quiz'),
  id: SlugSchema,
  prompt: z.string().min(1),
  explanation: z.string().min(1, 'Every question needs an explanation'),
  sectionId: z.string().optional(),
};

export const QuizBlockSchema = z.discriminatedUnion('quizType', [
  z.strictObject({
    ...QuizBase,
    quizType: z.literal('single'),
    options: z.array(QuizOptionSchema).min(2),
    correct: z
      .array(z.string())
      .length(1, 'A single-answer question has exactly one correct option'),
  }),
  z.strictObject({
    ...QuizBase,
    quizType: z.literal('multi'),
    options: z.array(QuizOptionSchema).min(2),
    correct: z.array(z.string()).min(1, 'Mark at least one correct option'),
  }),
  z.strictObject({
    ...QuizBase,
    quizType: z.literal('numeric'),
    answer: z.number(),
    tolerance: z.number().min(0, 'Numeric questions need a tolerance'),
    unit: z.string().optional(),
  }),
  z.strictObject({
    ...QuizBase,
    quizType: z.literal('order'),
    /** Options in the correct order; the client shuffles them. */
    options: z.array(QuizOptionSchema).min(2),
  }),
]);
export type QuizBlock = z.infer<typeof QuizBlockSchema>;

export const LessonBlockSchema = z.union([
  z.strictObject({ type: z.literal('markdown'), markdown: z.string() }),
  z.strictObject({
    type: z.literal('heading'),
    id: z.string(),
    text: z.string(),
    level: z.literal(2),
  }),
  z.strictObject({
    type: z.literal('image'),
    src: z.string(),
    alt: z.string().min(10, 'Alt text must be at least 10 characters'),
    caption: z.string().optional(),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
  }),
  z.strictObject({
    type: z.literal('callout'),
    calloutType: z.enum(CALLOUT_TYPES),
    markdown: z.string(),
  }),
  z.strictObject({
    type: z.literal('widget'),
    name: z.enum(WIDGET_NAMES),
    props: z.record(z.string(), z.string()).default({}),
  }),
  QuizBlockSchema,
  z.strictObject({
    type: z.literal('video'),
    provider: z.literal('youtube'),
    videoId: z.string().regex(/^[\w-]{6,20}$/),
    title: z.string().min(1),
    captions: z.boolean().default(true),
  }),
  z.strictObject({ type: z.literal('checklist'), slug: SlugSchema }),
]);
export type LessonBlock = z.infer<typeof LessonBlockSchema>;

export const SectionSchema = z.strictObject({ id: z.string(), title: z.string() });
export type Section = z.infer<typeof SectionSchema>;

// ---------------------------------------------------------------------------------------
// Presets (Section 15.1)

export const START_STATES = ['COLD_DARK', 'RAMP_RUNNING', 'RUNWAY', 'AIR_START'] as const;

export const WeatherSchema = z.strictObject({
  label: z.string(),
  summary: z.string(),
  clouds: z.string(),
  surfaceWind: z.string(),
  windsAloft: z.string().optional(),
  visibility: z.string(),
  temperatureC: z.number(),
  altimeterInHg: z.number(),
});

export const PresetsSchema = z.strictObject({
  startStates: z.record(
    z.enum(START_STATES),
    z.strictObject({ label: z.string(), description: z.string() }),
  ),
  weather: z.record(z.string().regex(/^WX_[A-Z0-9_]+$/), WeatherSchema),
  loads: z.record(
    z.string().regex(/^LOAD_[A-Z_]+$/),
    z.strictObject({ label: z.string(), description: z.string(), priority: PrioritySchema }),
  ),
  dates: z.record(SlugSchema, z.strictObject({ label: z.string(), date: z.string() })),
  assistance: z.record(SlugSchema, z.strictObject({ label: z.string(), description: z.string() })),
  defaults: z.strictObject({
    timeLocal: z.string(),
    datePreset: SlugSchema,
    loadPreset: z.string(),
    assistance: SlugSchema,
  }),
});
export type Presets = z.infer<typeof PresetsSchema>;

// ---------------------------------------------------------------------------------------
// Challenges (Sections 15, 27.5, Appendix C)

export const CHALLENGE_TYPES = [
  'setup',
  'procedure',
  'manoeuvre',
  'pattern',
  'landing',
  'emergency',
  'navigation',
  'communication',
  'capstone',
] as const;
export type ChallengeType = (typeof CHALLENGE_TYPES)[number];

export const CriterionSchema = z
  .object({
    id: SlugSchema,
    label: z.string().min(1),
    kind: z.enum(['tiered', 'binary']),
    tiers: z.strictObject({ gold: z.string(), silver: z.string(), bronze: z.string() }).optional(),
    required: z.boolean(),
    weight: z.number().int().min(1, 'Weights are 1–3').max(3, 'Weights are 1–3'),
    reviewLink: z.strictObject({ lesson: LessonSlugSchema, section: z.string() }).optional(),
  })
  .refine((c) => (c.kind === 'tiered') === (c.tiers !== undefined), {
    message:
      'Tiered criteria need gold/silver/bronze descriptions; binary criteria must not have tiers',
  });
export type Criterion = z.infer<typeof CriterionSchema>;

export const ChallengeSetupSchema = z.strictObject({
  aircraftVariant: SlugSchema,
  airportIcao: IcaoSchema,
  startState: z.enum(START_STATES),
  startDetails: z
    .object({
      runway: z.string().optional(),
      parking: z.string().optional(),
      position: z.string().optional(),
      altitudeFt: z.number().optional(),
      headingDeg: z.number().min(0).max(360).optional(),
      speedKias: z.number().optional(),
      fallback: z.string().optional(),
    })
    .default({}),
  weatherPreset: z.string().optional(),
  weather: WeatherSchema.partial().optional(),
  timeLocal: z.string().regex(/^\d{2}:\d{2}$/),
  datePreset: SlugSchema,
  loadPreset: z.string(),
  assistance: SlugSchema,
  aiTraffic: z.boolean(),
  atc: z.boolean(),
  crashDamage: z.boolean(),
  flightPlan: z
    .object({
      departure: IcaoSchema,
      destination: IcaoSchema,
      waypoints: z.array(z.string()).default([]),
    })
    .nullable()
    .default(null),
});

export const ChallengeSchema = z
  .object({
    slug: ChallengeSlugSchema,
    code: z.string().regex(/^C\d\.\d+$/),
    title: z.string().min(1),
    module: ModuleSlugSchema,
    lessons: z.array(LessonSlugSchema).default([]),
    priority: PrioritySchema,
    type: z.enum(CHALLENGE_TYPES),
    difficulty: z.number().int().min(1).max(5),
    estimatedMinutes: z.number().int().positive(),
    published: z.boolean(),
    lastVerifiedAt: NullableDateSchema,
    simVersion: z.string().nullable().default(null),
    goal: z.string().min(1),
    setup: ChallengeSetupSchema,
    procedure: z.array(z.string().min(1)).min(1),
    criteria: z
      .array(CriterionSchema)
      .min(3, 'Challenges have 3–8 criteria')
      .max(8, 'Challenges have 3–8 criteria'),
    randomEvents: z
      .array(
        z.strictObject({
          id: SlugSchema,
          label: z.string(),
          minSeconds: z.number().int().min(0),
          maxSeconds: z.number().int().positive(),
          message: z.string(),
          chance: z.number().min(0).max(1).optional(),
        }),
      )
      .default([]),
    planningFields: z
      .array(
        z.strictObject({ id: SlugSchema, label: z.string(), type: z.enum(['text', 'number']) }),
      )
      .default([]),
    commonMistakes: z.array(z.string()).default([]),
    tips: z.array(z.string()).default([]),
    debriefQuestions: z.array(z.strictObject({ id: SlugSchema, prompt: z.string() })).default([]),
  })
  .superRefine((c, ctx) => {
    const ids = c.criteria.map((cr) => cr.id);
    const duplicate = ids.find((id, i) => ids.indexOf(id) !== i);
    if (duplicate)
      ctx.addIssue({
        code: 'custom',
        path: ['criteria'],
        message: `Duplicate criterion id "${duplicate}"`,
      });
    if (!c.criteria.some((cr) => cr.required)) {
      ctx.addIssue({
        code: 'custom',
        path: ['criteria'],
        message: 'At least one criterion must be required',
      });
    }
    if (!c.setup.weatherPreset && !c.setup.weather) {
      ctx.addIssue({
        code: 'custom',
        path: ['setup'],
        message: 'Give a weatherPreset or custom weather',
      });
    }
  });
export type Challenge = z.infer<typeof ChallengeSchema>;

// ---------------------------------------------------------------------------------------
// Reference data (Sections 27.8–27.10)

export const ChecklistSchema = z.strictObject({
  slug: SlugSchema,
  title: z.string(),
  phase: z.string(),
  order: z.number().int().min(1),
  mode: z.enum(['read-do', 'do-verify']),
  aircraftSlug: SlugSchema,
  items: z
    .array(
      z.strictObject({
        id: SlugSchema,
        item: z.string(),
        action: z.string(),
        note: z.string().optional(),
        variant: z.enum(['g1000', 'classic']).optional(),
      }),
    )
    .min(1),
  verifiedAt: NullableDateSchema,
});
export type Checklist = z.infer<typeof ChecklistSchema>;
export const ChecklistsFileSchema = z.strictObject({ checklists: z.array(ChecklistSchema).min(1) });

export const AIRSPACE_CLASSES = ['B', 'C', 'D', 'E', 'G'] as const;

export const AirportSchema = z.strictObject({
  icao: IcaoSchema,
  name: z.string(),
  city: z.string(),
  elevationFt: z.number().nullable(),
  airspaceClass: z.enum(AIRSPACE_CLASSES),
  towered: z.boolean(),
  role: z.enum(['training', 'destination', 'awareness']),
  runways: z
    .array(
      z.strictObject({
        designator: z.string().regex(/^\d{1,2}[LRC]?\/\d{1,2}[LRC]?$/),
        lengthFt: z.number().nullable().default(null),
        widthFt: z.number().nullable().default(null),
        trafficPattern: z.enum(['left', 'right', 'varies']).nullable().default(null),
        patternAltitudeFt: z.number().nullable().default(null),
      }),
    )
    .min(1),
  /** Frequencies are only listed once verified (Section 11). */
  frequencies: z
    .array(
      z.strictObject({
        type: z.string(),
        mhz: z.string().regex(/^1\d{2}\.\d{1,3}$/),
        notes: z.string().optional(),
      }),
    )
    .default([]),
  patternNotes: z.string().optional(),
  notes: z.array(z.string()).default([]),
  links: z.strictObject({ skyvector: z.url(), airnav: z.url(), diagram: z.url().optional() }),
  verifiedAt: NullableDateSchema,
  verifiedAgainst: z.array(z.string()).default([]),
  published: z.boolean().default(true),
});
export type Airport = z.infer<typeof AirportSchema>;
export const AirportsFileSchema = z.strictObject({ airports: z.array(AirportSchema).min(1) });

export const GlossaryTermSchema = z.strictObject({
  slug: SlugSchema,
  term: z.string().min(1),
  aliases: z.array(z.string()).default([]),
  definition: z
    .string()
    .min(1)
    .refine((d) => d.trim().split(/\s+/).length <= 80, 'Definitions are at most 80 words'),
  related: z.array(SlugSchema).default([]),
  source: z.string().optional(),
});
export type GlossaryTerm = z.infer<typeof GlossaryTermSchema>;
export const GlossaryFileSchema = z.strictObject({ terms: z.array(GlossaryTermSchema).min(1) });

export const RESOURCE_TYPES = [
  'handbook',
  'regulation',
  'chart',
  'tool',
  'video',
  'article',
  'course',
  'community',
  'sim',
] as const;

export const ResourceSchema = z.strictObject({
  slug: SlugSchema,
  title: z.string(),
  publisher: z.string(),
  /** Omitted for resources that live inside the sim (e.g. the in-sim checklist). */
  url: z.url().optional(),
  location: z.string().optional(),
  type: z.enum(RESOURCE_TYPES),
  topics: z.array(z.string()).min(1),
  free: z.boolean(),
  description: z.string(),
  verifiedAt: NullableDateSchema,
});
export type Resource = z.infer<typeof ResourceSchema>;
export const ResourcesFileSchema = z.strictObject({ resources: z.array(ResourceSchema).min(1) });
