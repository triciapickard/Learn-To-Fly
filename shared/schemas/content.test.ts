import { describe, expect, it } from 'vitest';
import {
  AircraftSchema,
  AirspaceProfileSchema,
  AirportSchema,
  ChallengeSchema,
  ChecklistSchema,
  CriterionSchema,
  GlossaryTermSchema,
  LessonBlockSchema,
  LessonFrontmatterSchema,
  ModuleSchema,
  PresetsSchema,
  QuizBlockSchema,
  ResourceSchema,
} from './content.js';

const messages = (result: { success: boolean; error?: { issues: { message: string }[] } }) =>
  result.error?.issues.map((i) => i.message) ?? [];

describe('ModuleSchema', () => {
  const valid = {
    slug: 'm2-fundamentals',
    code: 'M2',
    order: 2,
    title: 'Fundamentals of flight',
    summary: 'Straight and level, climbs, descents and turns.',
    description: 'The four fundamentals.',
    icon: 'gauge',
    estimatedMinutes: 180,
  };
  it('accepts a module and defaults lists', () => {
    expect(ModuleSchema.parse(valid)).toMatchObject({
      lessons: [],
      challenges: [],
      published: true,
    });
  });
  it('rejects bad slugs, codes and unknown keys', () => {
    expect(ModuleSchema.safeParse({ ...valid, slug: 'Fundamentals' }).success).toBe(false);
    expect(ModuleSchema.safeParse({ ...valid, code: 'Module 2' }).success).toBe(false);
    expect(ModuleSchema.safeParse({ ...valid, colour: 'blue' }).success).toBe(false);
  });
});

describe('LessonFrontmatterSchema', () => {
  const valid = {
    slug: 'l2-4-turns-and-coordination',
    code: 'L2.4',
    module: 'm2-fundamentals',
    order: 4,
    priority: 'P0',
    title: 'Turns',
    summary: 'Turn well.',
    objectives: ['Roll into turns.', 'Keep the ball centered.'],
    published: false,
  };
  it('accepts frontmatter and normalises dates', () => {
    const parsed = LessonFrontmatterSchema.parse({
      ...valid,
      lastVerifiedAt: new Date('2026-11-02'),
    });
    expect(parsed.lastVerifiedAt).toBe('2026-11-02');
    expect(parsed.prerequisites).toEqual([]);
  });
  it('needs 2–4 objectives and known widgets', () => {
    expect(
      messages(LessonFrontmatterSchema.safeParse({ ...valid, objectives: ['One'] })),
    ).toHaveLength(1);
    expect(LessonFrontmatterSchema.safeParse({ ...valid, widgets: ['holodeck'] }).success).toBe(
      false,
    );
    expect(LessonFrontmatterSchema.safeParse({ ...valid, priority: 'P2' }).success).toBe(false);
  });
});

describe('QuizBlockSchema and LessonBlockSchema', () => {
  const base = { type: 'quiz', id: 'q1', prompt: 'What is Vy?', explanation: 'Vy is 74 KIAS.' };
  const options = [
    { id: 'a', text: '62 KIAS' },
    { id: 'b', text: '74 KIAS' },
  ];
  it('accepts each quiz type', () => {
    expect(
      QuizBlockSchema.safeParse({ ...base, quizType: 'single', options, correct: ['b'] }).success,
    ).toBe(true);
    expect(
      QuizBlockSchema.safeParse({ ...base, quizType: 'multi', options, correct: ['a', 'b'] })
        .success,
    ).toBe(true);
    expect(
      QuizBlockSchema.safeParse({ ...base, quizType: 'numeric', answer: 10, tolerance: 1 }).success,
    ).toBe(true);
    expect(QuizBlockSchema.safeParse({ ...base, quizType: 'order', options }).success).toBe(true);
  });
  it('enforces the authoring rules (Section 28.5)', () => {
    expect(
      messages(
        QuizBlockSchema.safeParse({ ...base, quizType: 'single', options, correct: ['a', 'b'] }),
      ),
    ).toContain('A single-answer question has exactly one correct option');
    expect(
      messages(
        QuizBlockSchema.safeParse({ ...base, quizType: 'numeric', answer: 10, tolerance: -1 }),
      ),
    ).toContain('Numeric questions need a tolerance');
    expect(
      messages(QuizBlockSchema.safeParse({ ...base, explanation: '', quizType: 'order', options })),
    ).toContain('Every question needs an explanation');
  });
  it('accepts every block type and rejects unknown ones', () => {
    const blocks = [
      { type: 'markdown', markdown: 'Hello' },
      { type: 'heading', id: 'a', text: 'A', level: 2 },
      { type: 'image', src: 'm1/a.webp', alt: 'A long enough description', width: 10, height: 10 },
      { type: 'callout', calloutType: 'tip', markdown: 'Trim!' },
      { type: 'widget', name: 'airspeed-indicator', props: { mode: 'explore' } },
      { type: 'video', provider: 'youtube', videoId: 'abcdef123', title: 'A video' },
      { type: 'checklist', slug: 'before-landing' },
    ];
    for (const block of blocks) expect(LessonBlockSchema.safeParse(block).success).toBe(true);
    expect(LessonBlockSchema.safeParse({ type: 'iframe', src: 'x' }).success).toBe(false);
    expect(
      LessonBlockSchema.safeParse({ type: 'image', src: 'x', alt: 'short', width: 1, height: 1 })
        .success,
    ).toBe(false);
  });
});

describe('ChallengeSchema', () => {
  const criterion = {
    id: 'altitude',
    label: 'Altitude',
    kind: 'tiered',
    tiers: { gold: '±100', silver: '±150', bronze: '±200' },
    required: true,
    weight: 3,
  };
  const valid = {
    slug: 'c2-1-straight-and-level',
    code: 'C2.1',
    title: 'Straight and level',
    module: 'm2-fundamentals',
    priority: 'P0',
    type: 'manoeuvre',
    difficulty: 1,
    estimatedMinutes: 15,
    published: false,
    goal: 'Hold altitude.',
    setup: {
      aircraftVariant: 'c172-g1000',
      airportIcao: 'KLVK',
      startState: 'AIR_START',
      weatherPreset: 'WX_CALM',
      timeLocal: '10:00',
      datePreset: 'late-spring',
      loadPreset: 'LOAD_SOLO',
      assistance: 'training',
      aiTraffic: false,
      atc: false,
      crashDamage: false,
    },
    procedure: ['Fly.'],
    criteria: [
      criterion,
      { ...criterion, id: 'heading' },
      { id: 'lookout', label: 'Looked out', kind: 'binary', required: false, weight: 1 },
    ],
  };
  it('accepts a challenge', () => {
    expect(ChallengeSchema.safeParse(valid).success).toBe(true);
  });
  it('enforces criteria rules', () => {
    expect(
      messages(
        ChallengeSchema.safeParse({
          ...valid,
          criteria: [criterion, criterion, { ...criterion, id: 'x' }],
        }),
      ),
    ).toContain('Duplicate criterion id "altitude"');
    const optional = valid.criteria.map((c) => ({ ...c, required: false }));
    expect(messages(ChallengeSchema.safeParse({ ...valid, criteria: optional }))).toContain(
      'At least one criterion must be required',
    );
    expect(messages(ChallengeSchema.safeParse({ ...valid, criteria: [criterion] }))).toContain(
      'Challenges have 3–8 criteria',
    );
    expect(
      messages(
        ChallengeSchema.safeParse({
          ...valid,
          setup: { ...valid.setup, weatherPreset: undefined },
        }),
      ),
    ).toContain('Give a weatherPreset or custom weather');
  });
  it('validates criterion shape and weights', () => {
    expect(messages(CriterionSchema.safeParse({ ...criterion, weight: 4 }))).toContain(
      'Weights are 1–3',
    );
    expect(CriterionSchema.safeParse({ ...criterion, kind: 'binary' }).success).toBe(false);
    expect(
      CriterionSchema.safeParse({ id: 'x', label: 'X', kind: 'tiered', required: true, weight: 1 })
        .success,
    ).toBe(false);
  });
});

describe('reference data schemas', () => {
  it('validates checklists', () => {
    const valid = {
      slug: 'before-landing',
      title: 'Before landing',
      phase: 'Landing',
      order: 1,
      mode: 'do-verify',
      aircraftSlug: 'c172',
      items: [{ id: 'mixture', item: 'Mixture', action: 'RICH' }],
    };
    expect(ChecklistSchema.safeParse(valid).success).toBe(true);
    expect(ChecklistSchema.safeParse({ ...valid, mode: 'read-only' }).success).toBe(false);
    expect(ChecklistSchema.safeParse({ ...valid, items: [] }).success).toBe(false);
  });

  it('validates airports and frequency formats', () => {
    const valid = {
      icao: 'KLVK',
      name: 'Livermore',
      city: 'Livermore',
      elevationFt: 400,
      airspaceClass: 'D',
      towered: true,
      role: 'training',
      runways: [{ designator: '7L/25R' }],
      links: {
        skyvector: 'https://skyvector.com/airport/KLVK',
        airnav: 'https://www.airnav.com/airport/KLVK',
      },
    };
    expect(AirportSchema.safeParse(valid).success).toBe(true);
    expect(AirportSchema.safeParse({ ...valid, icao: 'klvk' }).success).toBe(false);
    expect(
      AirportSchema.safeParse({ ...valid, runways: [{ designator: 'Runway 7' }] }).success,
    ).toBe(false);
    expect(
      AirportSchema.safeParse({ ...valid, frequencies: [{ type: 'Tower', mhz: '118.1' }] }).success,
    ).toBe(true);
    expect(
      AirportSchema.safeParse({ ...valid, frequencies: [{ type: 'Tower', mhz: '18.1' }] }).success,
    ).toBe(false);
  });

  it('validates glossary terms (≤ 80 words)', () => {
    expect(
      GlossaryTermSchema.safeParse({ slug: 'vy', term: 'Vy', definition: 'Best rate of climb.' })
        .success,
    ).toBe(true);
    const long = Array.from({ length: 81 }, () => 'word').join(' ');
    expect(
      messages(GlossaryTermSchema.safeParse({ slug: 'x', term: 'X', definition: long })),
    ).toContain('Definitions are at most 80 words');
  });

  it('validates resources', () => {
    const valid = {
      slug: 'skyvector',
      title: 'SkyVector',
      publisher: 'SkyVector',
      url: 'https://skyvector.com',
      type: 'tool',
      topics: ['charts'],
      free: true,
      description: 'Charts.',
    };
    expect(ResourceSchema.safeParse(valid).success).toBe(true);
    expect(ResourceSchema.safeParse({ ...valid, type: 'podcast' }).success).toBe(false);
    expect(ResourceSchema.safeParse({ ...valid, url: 'not a url' }).success).toBe(false);
  });

  it('validates presets keys', () => {
    const weather = {
      label: 'Calm',
      summary: 'Calm',
      clouds: 'Clear',
      surfaceWind: 'Calm',
      visibility: '10 sm',
      temperatureC: 15,
      altimeterInHg: 29.92,
    };
    const valid = {
      startStates: Object.fromEntries(
        ['COLD_DARK', 'RAMP_RUNNING', 'RUNWAY', 'AIR_START'].map((k) => [
          k,
          { label: k, description: k },
        ]),
      ),
      weather: { WX_CALM: weather },
      loads: { LOAD_SOLO: { label: 'Solo', description: 'Solo', priority: 'P0' } },
      dates: { 'late-spring': { label: 'Late spring', date: '15 May' } },
      assistance: { training: { label: 'Training', description: 'Training profile' } },
      defaults: {
        timeLocal: '10:00',
        datePreset: 'late-spring',
        loadPreset: 'LOAD_SOLO',
        assistance: 'training',
      },
    };
    expect(PresetsSchema.safeParse(valid).success).toBe(true);
    expect(PresetsSchema.safeParse({ ...valid, weather: { calm: weather } }).success).toBe(false);
    // Every standard start state must be described.
    expect(
      PresetsSchema.safeParse({
        ...valid,
        startStates: { RUNWAY: { label: 'R', description: 'R' } },
      }).success,
    ).toBe(false);
  });

  it('validates aircraft V-speeds', () => {
    const base = {
      slug: 'c172',
      name: 'C172',
      variants: [
        { id: 'c172-g1000', simName: 'C172', avionics: 'G1000', gps: true, autopilot: null },
      ],
      specs: {},
      arcs: { white: [40, 85], green: [48, 129], yellow: [129, 163], redline: 163 },
      limits: { maneuveringSpeed: [{ weightLb: 2550, kias: 105 }], maxDemonstratedCrosswindKt: 15 },
      powerSettings: [{ phase: 'Cruise', rpm: '2300', flaps: '0', targetSpeed: '100' }],
      verification: {},
    };
    expect(
      AircraftSchema.safeParse({
        ...base,
        vspeeds: { vy: { label: 'Vy', meaning: 'Best rate', kias: 74 } },
      }).success,
    ).toBe(true);
    expect(
      messages(
        AircraftSchema.safeParse({
          ...base,
          vspeeds: { vy: { label: 'Vy', meaning: 'Best rate' } },
        }),
      ),
    ).toContain('Give either `kias` or both `min` and `max`');

    const vspeeds = { vy: { label: 'Vy', meaning: 'Best rate', kias: 74 } };
    const performanceModel = {
      pitchDeg: [0, 5],
      rpm: [2000, 2400],
      ias: [
        [90, 105],
        [70, 80],
      ],
      vs: [
        [-200, 100],
        [100, 500],
      ],
      source: 'test',
    };
    expect(AircraftSchema.safeParse({ ...base, vspeeds, performanceModel }).success).toBe(true);
    expect(
      messages(
        AircraftSchema.safeParse({
          ...base,
          vspeeds,
          performanceModel: { ...performanceModel, vs: [[-200, 100]] },
        }),
      ),
    ).toContain('vs needs 2 rows (one per pitch) of 2 values (one per RPM)');
    expect(
      messages(
        AircraftSchema.safeParse({
          ...base,
          vspeeds,
          performanceModel: { ...performanceModel, rpm: [2400, 2000] },
        }),
      ),
    ).toContain('rpm must increase');
  });
});

describe('AirspaceProfileSchema', () => {
  const base = {
    slug: 'test-line',
    title: 'Test',
    summary: 'A test line.',
    lengthNm: 20,
    topFt: 12000,
    points: [
      { id: 'KAAA', name: 'A', x: 0, elevationFt: 0, towered: false },
      { id: 'KBBB', name: 'B', x: 20, elevationFt: 100, towered: true },
    ],
    terrain: [
      [0, 0],
      [20, 100],
    ],
    volumes: [
      {
        id: 'd-b',
        class: 'D',
        name: 'B Class D',
        fromNm: 16,
        toNm: 20,
        floorFt: 0,
        ceilingFt: 2600,
        center: 'KBBB',
      },
    ],
    requirements: Object.fromEntries(
      ['B', 'C', 'D', 'E', 'G'].map((c) => [c, { entry: 'x', vfrMinimums: 'y' }]),
    ),
    source: 'Test',
  };

  it('accepts a valid profile and defaults to unverified', () => {
    const parsed = AirspaceProfileSchema.parse(base);
    expect(parsed.verified).toBe(false);
    expect(parsed.volumes[0]!.floorRef).toBe('MSL');
  });

  it('rejects bad geometry and references', () => {
    const bad = (patch: object) => AirspaceProfileSchema.safeParse({ ...base, ...patch }).success;
    expect(
      bad({
        terrain: [
          [0, 0],
          [0, 10],
        ],
      }),
    ).toBe(false);
    expect(
      bad({
        terrain: [
          [0, 0],
          [30, 10],
        ],
      }),
    ).toBe(false);
    expect(bad({ volumes: [{ ...base.volumes[0], toNm: 25 }] })).toBe(false);
    expect(bad({ volumes: [{ ...base.volumes[0], center: 'KZZZ' }] })).toBe(false);
    expect(bad({ volumes: [{ ...base.volumes[0], ceilingFt: 0.5, floorFt: 1000 }] })).toBe(false);
    expect(bad({ volumes: [base.volumes[0], base.volumes[0]] })).toBe(false);
    expect(bad({ requirements: { B: { entry: 'x', vfrMinimums: 'y' } } })).toBe(false);
  });
});
