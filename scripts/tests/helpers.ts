import type { Aircraft } from '@shared/schemas/content.js';
import { IssueList } from '../lib/issues.js';
import type { ParseContext } from '../lib/parseLesson.js';

export const testAircraft = {
  slug: 'c172',
  name: 'Cessna 172S',
  variants: [{ id: 'c172-g1000', simName: 'C172', avionics: 'G1000', gps: true, autopilot: null }],
  specs: { cruiseTas: { label: 'Cruise', value: '120 KTAS' } },
  vspeeds: {
    vy: { label: 'V_Y', meaning: 'Best rate of climb', kias: 74 },
    approachFlaps30: { label: 'Approach', meaning: 'Final', min: 60, max: 70 },
  },
  arcs: { white: [40, 85], green: [48, 129], yellow: [129, 163], redline: 163 },
  limits: { maneuveringSpeed: [{ weightLb: 2550, kias: 105 }], maxDemonstratedCrosswindKt: 15 },
  powerSettings: [{ phase: 'Cruise', rpm: '2,300', flaps: '0°', targetSpeed: '100' }],
  performanceModel: null,
  verification: {},
  verifiedAt: null,
  simVersion: null,
} as Aircraft;

export function testContext(overrides: Partial<ParseContext> = {}): ParseContext {
  return {
    aircraft: testAircraft,
    links: new Map([
      [
        'c2-3-turns-to-headings',
        { code: 'C2.3', title: 'Turns to headings', href: '/challenges/c2-3-turns-to-headings' },
      ],
    ]),
    checklistSlugs: new Set(['before-landing']),
    assetsDir: '/nonexistent',
    issues: new IssueList(),
    ...overrides,
  };
}

export function lessonSource(body: string, frontmatter: Record<string, unknown> = {}): string {
  const fm = {
    slug: 'l2-4-turns-and-coordination',
    code: 'L2.4',
    module: 'm2-fundamentals',
    order: 4,
    priority: 'P0',
    title: 'Turns and coordination',
    summary: 'Roll into and out of turns precisely.',
    estimatedMinutes: 20,
    objectives: ['Roll into turns.', 'Keep the ball centered.'],
    published: false,
    ...frontmatter,
  };
  const yaml = Object.entries(fm)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join('\n');
  return `---\n${yaml}\n---\n${body}`;
}
