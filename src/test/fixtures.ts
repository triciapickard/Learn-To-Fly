import { http, HttpResponse } from 'msw';
import type {
  AirspaceProfileDto,
  AircraftDto,
  ChallengeSummary,
  ChecklistDto,
  LessonDetail,
  LessonSummary,
  ModuleSummary,
} from '@shared/schemas/api';

export const aircraftFixture: AircraftDto = {
  slug: 'c172',
  name: 'Cessna 172S',
  variants: [
    { id: 'c172-g1000', simName: 'C172 G1000', avionics: 'G1000', gps: true, autopilot: 'GFC 700' },
  ],
  specs: {},
  vspeeds: {
    vso: { label: 'V_SO', meaning: 'Stall speed with full flaps', kias: 40 },
    vs1: { label: 'V_S1', meaning: 'Stall speed clean', kias: 48 },
    vr: { label: 'V_R', meaning: 'Rotation speed', kias: 55 },
    vx: { label: 'V_X', meaning: 'Best angle of climb', kias: 62 },
    vg: { label: 'V_G', meaning: 'Best glide', kias: 68 },
    vy: { label: 'V_Y', meaning: 'Best rate of climb', kias: 74 },
    vfe: { label: 'V_FE (10°–30°)', meaning: 'Maximum speed with more than 10° flaps', kias: 85 },
    vno: { label: 'V_NO', meaning: 'Maximum structural cruising speed', kias: 129 },
    vne: { label: 'V_NE', meaning: 'Never exceed speed', kias: 163 },
    approachFlaps30: { label: 'Approach', meaning: 'Final with full flaps', min: 60, max: 70 },
  },
  arcs: { white: [40, 85], green: [48, 129], yellow: [129, 163], redline: 163 },
  limits: { maneuveringSpeed: [{ weightLb: 2550, kias: 105 }], maxDemonstratedCrosswindKt: 15 },
  powerSettings: [{ phase: 'Cruise', rpm: '2,300', flaps: '0°', targetSpeed: '100' }],
  performanceModel: {
    pitchDeg: [-5, 0, 5, 10],
    rpm: [1500, 2100, 2700],
    ias: [
      [100, 122, 137],
      [69, 96, 114],
      [48, 73, 93],
      [48, 56, 75],
    ],
    vs: [
      [-850, -770, -730],
      [-480, -30, 220],
      [-610, 230, 750],
      [-620, 190, 940],
    ],
    source: 'test fixture',
  },
  verification: { performanceModel: { verified: false } },
  verifiedAt: null,
  simVersion: null,
  version: 1,
};

export const checklistFixture: ChecklistDto = {
  slug: 'before-landing',
  title: 'Before landing',
  phase: 'Before landing',
  order: 10,
  mode: 'do-verify',
  aircraftSlug: 'c172',
  items: [
    { id: 'belts', item: 'Seat and belts', action: 'SECURE' },
    { id: 'fuel', item: 'Fuel selector', action: 'BOTH' },
    { id: 'mixture', item: 'Mixture', action: 'RICH', note: 'Full rich for landing.' },
  ],
  verifiedAt: null,
  version: 1,
};

export function lessonSummary(overrides: Partial<LessonSummary> = {}): LessonSummary {
  return {
    slug: 'l1-4-speeds-limits-and-checklists',
    code: 'L1.4',
    moduleSlug: 'm1-meet-the-skyhawk',
    order: 4,
    priority: 'P0',
    title: 'Speeds, limits and checklists',
    summary: 'Learn the key speeds.',
    estimatedMinutes: 20,
    objectives: ['State the key V-speeds.', 'Read the airspeed color bands.'],
    draft: false,
    version: 1,
    ...overrides,
  };
}

export function challengeSummary(overrides: Partial<ChallengeSummary> = {}): ChallengeSummary {
  return {
    slug: 'c2-1-straight-and-level',
    code: 'C2.1',
    moduleSlug: 'm2-fundamentals',
    title: 'Straight and level',
    priority: 'P0',
    type: 'manoeuvre',
    difficulty: 1,
    estimatedMinutes: 15,
    airportIcao: 'KLVK',
    lessonSlugs: [],
    draft: false,
    version: 1,
    ...overrides,
  };
}

export function lessonDetail(overrides: Partial<LessonDetail> = {}): LessonDetail {
  return {
    ...lessonSummary(),
    blocks: [
      { type: 'heading', id: 'what-a-v-speed-is', text: 'What a V-speed is', level: 2 },
      {
        type: 'markdown',
        markdown: 'Pilots fly by **numbers**. See [the glossary](/reference/glossary).',
      },
      { type: 'callout', calloutType: 'tip', markdown: 'Say the speeds out loud.' },
      {
        type: 'quiz',
        id: 'l1-4-q1',
        quizType: 'single',
        prompt: 'What is Vy?',
        options: [
          { id: 'a', text: '62 KIAS' },
          { id: 'b', text: '74 KIAS' },
        ],
        correct: ['b'],
        explanation: 'Vy is 74 KIAS.',
        sectionId: 'what-a-v-speed-is',
      },
      { type: 'heading', id: 'try-a-checklist', text: 'Try a checklist', level: 2 },
      { type: 'checklist', slug: 'before-landing' },
    ],
    sections: [
      { id: 'what-a-v-speed-is', title: 'What a V-speed is' },
      { id: 'try-a-checklist', title: 'Try a checklist' },
    ],
    widgets: ['checklist-runner'],
    module: { slug: 'm1-meet-the-skyhawk', code: 'M1', title: 'Meet the Skyhawk' },
    prerequisites: [],
    challenges: [challengeSummary()],
    resources: [
      {
        slug: 'phak-ch9',
        title: 'PHAK Chapter 9',
        publisher: 'FAA',
        url: 'https://www.faa.gov/phak',
        type: 'handbook',
        topics: ['aircraft'],
        free: true,
        description: 'Flight manuals.',
        verifiedAt: null,
      },
    ],
    glossaryTerms: [{ slug: 'vy', term: 'Vy', definition: 'Best rate-of-climb speed.' }],
    checklists: [checklistFixture],
    navigation: {
      previous: null,
      next: lessonSummary({
        slug: 'l2-1-four-forces',
        code: 'L2.1',
        title: 'Four forces',
        moduleSlug: 'm2-fundamentals',
      }),
    },
    lastVerifiedAt: null,
    simVersion: null,
    ...overrides,
  };
}

export function moduleSummary(overrides: Partial<ModuleSummary> = {}): ModuleSummary {
  return {
    slug: 'm1-meet-the-skyhawk',
    code: 'M1',
    order: 1,
    title: 'Meet the Skyhawk',
    summary: 'Controls, the cockpit and speeds.',
    description: 'Get to know the airplane.',
    icon: 'plane',
    estimatedMinutes: 90,
    lessons: [lessonSummary()],
    challenges: [],
    ...overrides,
  };
}

/** A small W11 profile: a Class B surface area and shelf, a Class D, Class E and G. */
export const airspaceProfileFixture: AirspaceProfileDto = {
  slug: 'bay-area',
  title: 'Test line',
  summary: 'A test line from A to C.',
  lengthNm: 40,
  topFt: 12000,
  points: [
    { id: 'KAAA', name: 'Alpha', x: 0, elevationFt: 0, towered: false },
    { id: 'KBBB', name: 'Bravo Intl', x: 10, elevationFt: 10, towered: true },
    { id: 'KCCC', name: 'Charlie', x: 34, elevationFt: 400, towered: true },
  ],
  terrain: [
    [0, 0],
    [10, 10],
    [25, 1500],
    [34, 400],
    [40, 300],
  ],
  modeCVeil: { center: 'KBBB', radiusNm: 30 },
  volumes: [
    {
      id: 'b-surface',
      class: 'B',
      name: 'Bravo Class B',
      fromNm: 5,
      toNm: 15,
      floorFt: 0,
      floorRef: 'MSL',
      ceilingFt: 10000,
      center: 'KBBB',
    },
    {
      id: 'b-shelf',
      class: 'B',
      name: 'Bravo Class B',
      fromNm: 15,
      toNm: 25,
      floorFt: 3000,
      floorRef: 'MSL',
      ceilingFt: 10000,
      center: 'KBBB',
    },
    {
      id: 'd-ccc',
      class: 'D',
      name: 'Charlie Class D',
      fromNm: 31,
      toNm: 37,
      floorFt: 0,
      floorRef: 'MSL',
      ceilingFt: 2900,
      center: 'KCCC',
    },
    {
      id: 'e-700',
      class: 'E',
      name: 'Class E from 700 ft above the ground',
      fromNm: 0,
      toNm: 40,
      floorFt: 700,
      floorRef: 'AGL',
      ceilingFt: 17999,
    },
  ],
  requirements: {
    B: { entry: 'An ATC clearance.', vfrMinimums: '3 SM, clear of clouds.' },
    C: { entry: 'Two-way radio contact.', vfrMinimums: '3 SM, 500/1,000/2,000.' },
    D: { entry: 'Two-way radio contact with the tower.', vfrMinimums: '3 SM, 500/1,000/2,000.' },
    E: { entry: 'None for VFR flights.', vfrMinimums: '3 SM, 500/1,000/2,000.' },
    G: { entry: 'None.', vfrMinimums: '1 SM, clear of clouds.' },
  },
  source: 'Test',
  verified: false,
  verifiedAt: null,
  version: 1,
};

/** MSW handlers serving the fixtures above. */
export const contentHandlers = [
  http.get('/api/v1/airspace-profiles/bay-area', () =>
    HttpResponse.json({ profile: airspaceProfileFixture }),
  ),
  http.get('/api/v1/aircraft/c172', () => HttpResponse.json({ aircraft: aircraftFixture })),
  http.get('/api/v1/modules', () =>
    HttpResponse.json({
      modules: [
        moduleSummary({
          slug: 'm0-getting-started',
          code: 'M0',
          order: 0,
          title: 'Getting started',
          lessons: [],
        }),
        moduleSummary(),
      ],
    }),
  ),
  http.get('/api/v1/modules/:slug', ({ params }) =>
    params.slug === 'm1-meet-the-skyhawk'
      ? HttpResponse.json({ module: moduleSummary() })
      : HttpResponse.json(
          { error: { code: 'NOT_FOUND', message: 'Module not found.' } },
          { status: 404 },
        ),
  ),
  http.get('/api/v1/lessons/:slug', ({ params }) =>
    params.slug === 'l1-4-speeds-limits-and-checklists'
      ? HttpResponse.json({ lesson: lessonDetail() })
      : HttpResponse.json(
          { error: { code: 'NOT_FOUND', message: 'Lesson not found.' } },
          { status: 404 },
        ),
  ),
  http.get('/api/v1/checklists/:slug', () => HttpResponse.json({ checklist: checklistFixture })),
];
