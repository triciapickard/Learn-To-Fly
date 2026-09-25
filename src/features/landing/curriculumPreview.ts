/** Module overview for the landing page (plan.md Section 13.1). */
export const CURRICULUM_PREVIEW = [
  {
    code: 'M0',
    title: 'Getting started',
    lessons: 3,
    challenges: 1,
    summary: 'Set up MSFS 2024 for training and take your first flight.',
  },
  {
    code: 'M1',
    title: 'Meet the Skyhawk',
    lessons: 4,
    challenges: 1,
    summary: 'Controls, the G1000 cockpit, engine, fuel, speeds and checklists.',
  },
  {
    code: 'M2',
    title: 'Fundamentals of flight',
    lessons: 5,
    challenges: 4,
    summary: 'Straight and level, climbs, descents and coordinated turns.',
  },
  {
    code: 'M3',
    title: 'Ground operations',
    lessons: 3,
    challenges: 4,
    summary: 'Preflight, engine start, taxiing and the run-up.',
  },
  {
    code: 'M4',
    title: 'Takeoffs, patterns and landings',
    lessons: 6,
    challenges: 7,
    summary: 'Take off, fly the traffic pattern, land and go around.',
  },
  {
    code: 'M5',
    title: 'Slow flight, stalls and emergencies',
    lessons: 5,
    challenges: 6,
    summary: 'Handle the edges of the envelope and an engine failure.',
  },
  {
    code: 'M6',
    title: 'VFR navigation',
    lessons: 8,
    challenges: 7,
    summary: 'Charts, airspace, pilotage, dead reckoning, VOR and GPS.',
  },
  {
    code: 'M7',
    title: 'Radio and airport operations',
    lessons: 4,
    challenges: 3,
    summary: 'Radio calls at non-towered and towered airports.',
  },
  {
    code: 'M8',
    title: 'Capstone',
    lessons: 2,
    challenges: 2,
    summary: 'Decision making, a local checkride and a cross-country flight.',
  },
] as const;

export const FIRST_LESSON_PATH = '/learn/m0-getting-started/l0-1-welcome';
