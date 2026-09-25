import type {
  Aircraft,
  Airport,
  ChallengeType,
  Checklist,
  Criterion,
  LessonBlock,
  Priority,
  Resource,
  Section,
} from './content.js';

/**
 * Response shapes of the public content API (plan.md Section 29.3). Personalised data
 * (progress) is never mixed in, so these responses stay cacheable.
 */

interface Seeded {
  /** True when this item is an unverified draft shown in a preview environment. */
  draft: boolean;
  version: number;
}

export interface LessonSummary extends Seeded {
  slug: string;
  code: string;
  moduleSlug: string;
  order: number;
  priority: Priority;
  title: string;
  summary: string;
  estimatedMinutes: number | null;
}

export interface ChallengeSummary extends Seeded {
  slug: string;
  code: string;
  moduleSlug: string;
  title: string;
  priority: Priority;
  type: ChallengeType;
  difficulty: number;
  estimatedMinutes: number;
  airportIcao: string;
  lessonSlugs: string[];
}

export interface ModuleSummary {
  slug: string;
  code: string;
  order: number;
  title: string;
  summary: string;
  description: string;
  icon: string;
  estimatedMinutes: number;
  lessons: LessonSummary[];
  challenges: ChallengeSummary[];
}

export interface GlossaryTermRef {
  slug: string;
  term: string;
  definition: string;
}

export interface LessonDetail extends LessonSummary {
  objectives: string[];
  blocks: LessonBlock[];
  sections: Section[];
  widgets: string[];
  module: { slug: string; code: string; title: string };
  prerequisites: LessonSummary[];
  challenges: ChallengeSummary[];
  resources: ResourceDto[];
  glossaryTerms: GlossaryTermRef[];
  checklists: ChecklistDto[];
  navigation: { previous: LessonSummary | null; next: LessonSummary | null };
  lastVerifiedAt: string | null;
  simVersion: string | null;
}

export interface ResolvedSetup {
  aircraft: { variant: string; simName: string };
  airport: { icao: string; name: string };
  startState: { id: string; label: string; description: string };
  startDetails: Record<string, string | number>;
  weather: {
    preset: string | null;
    label: string;
    summary: string;
    clouds?: string;
    surfaceWind?: string;
    windsAloft?: string;
    visibility?: string;
    temperatureC?: number;
    altimeterInHg?: number;
  };
  time: { local: string; date: string };
  load: { id: string; label: string; description: string };
  assistance: { id: string; label: string; description: string };
  aiTraffic: boolean;
  atc: boolean;
  crashDamage: boolean;
  flightPlan: { departure: string; destination: string; waypoints: string[] } | null;
}

export interface ChallengeDetail extends ChallengeSummary {
  goal: string;
  setup: ResolvedSetup;
  procedure: string[];
  criteria: Criterion[];
  randomEvents: {
    id: string;
    label: string;
    minSeconds: number;
    maxSeconds: number;
    message: string;
    chance?: number;
  }[];
  planningFields: { id: string; label: string; type: 'text' | 'number' }[];
  commonMistakes: string[];
  tips: string[];
  debriefQuestions: { id: string; prompt: string }[];
  module: { slug: string; code: string; title: string };
  lessons: LessonSummary[];
  lastVerifiedAt: string | null;
  simVersion: string | null;
}

export type AircraftDto = Aircraft & { version: number };
export type ChecklistDto = Checklist & { version: number };
export type AirportDto = Airport & { version: number };
export type ResourceDto = Resource;

export interface GlossaryTermDto extends GlossaryTermRef {
  aliases: string[];
  related: string[];
  source?: string;
  lessons: { slug: string; code: string; title: string; href: string }[];
}

export interface ModulesResponse {
  modules: ModuleSummary[];
}
export interface ModuleResponse {
  module: ModuleSummary;
}
export interface LessonResponse {
  lesson: LessonDetail;
}
export interface ChallengesResponse {
  challenges: ChallengeSummary[];
}
export interface ChallengeResponse {
  challenge: ChallengeDetail;
}
export interface AircraftResponse {
  aircraft: AircraftDto;
}
export interface ChecklistsResponse {
  checklists: ChecklistDto[];
}
export interface ChecklistResponse {
  checklist: ChecklistDto;
}
export interface AirportsResponse {
  airports: AirportDto[];
}
export interface AirportResponse {
  airport: AirportDto;
  challenges: ChallengeSummary[];
}
export interface GlossaryResponse {
  terms: GlossaryTermDto[];
}
export interface ResourcesResponse {
  resources: ResourceDto[];
}

export function lessonHref(lesson: { moduleSlug: string; slug: string }): string {
  return `/learn/${lesson.moduleSlug}/${lesson.slug}`;
}
