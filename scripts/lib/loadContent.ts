import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { LineCounter, parseDocument } from 'yaml';
import type { z } from 'zod';
import {
  AircraftSchema,
  AirspaceProfileSchema,
  AirportsFileSchema,
  ChallengeSchema,
  ChecklistsFileSchema,
  GlossaryFileSchema,
  ModulesFileSchema,
  PresetsSchema,
  ResourcesFileSchema,
  type Aircraft,
  type AirspaceProfile,
  type Airport,
  type Challenge,
  type Checklist,
  type GlossaryTerm,
  type Module,
  type Presets,
  type Resource,
} from '@shared/schemas/content.js';
import { IssueList } from './issues.js';
import { parseLessonSource, type LinkTarget, type ParsedLesson } from './parseLesson.js';

export interface ContentBundle {
  aircraft: Aircraft | null;
  /** W11 data; optional so content fixtures without it still load. */
  airspaceProfiles: AirspaceProfile[];
  modules: Module[];
  presets: Presets | null;
  resources: Resource[];
  airports: Airport[];
  glossary: GlossaryTerm[];
  checklists: Checklist[];
  challenges: (Challenge & { file: string })[];
  lessons: ParsedLesson[];
  issues: IssueList;
  contentDir: string;
}

export interface LoadOptions {
  contentDir?: string;
  assetsDir?: string;
}

function rel(file: string) {
  return path.relative(process.cwd(), file) || file;
}

/** Parses a YAML file with a Zod schema; issues carry the YAML line of the failing value. */
function loadYaml<T extends z.ZodType>(
  file: string,
  schema: T,
  issues: IssueList,
): z.output<T> | null {
  if (!existsSync(file)) {
    issues.error(rel(file), 'File is missing');
    return null;
  }
  const lineCounter = new LineCounter();
  const doc = parseDocument(readFileSync(file, 'utf8'), { lineCounter });
  for (const error of doc.errors) {
    issues.error(rel(file), `YAML: ${error.message.split('\n')[0]}`, error.linePos?.[0]?.line);
  }
  if (doc.errors.length) return null;
  const result = schema.safeParse(doc.toJS());
  if (!result.success) {
    for (const issue of result.error.issues) {
      let node = doc.getIn(issue.path as (string | number)[], true) as
        { range?: [number] } | undefined;
      // Fall back to the nearest parent that exists (e.g. for missing keys).
      for (let depth = issue.path.length - 1; !node?.range && depth >= 0; depth--) {
        node = doc.getIn(issue.path.slice(0, depth) as (string | number)[], true) as typeof node;
      }
      const line = node?.range ? lineCounter.linePos(node.range[0]).line : undefined;
      issues.error(rel(file), `${issue.path.join('.') || '(root)'}: ${issue.message}`, line);
    }
    return null;
  }
  return result.data;
}

function listFiles(dir: string, ext: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true, recursive: true })
    .filter((d) => d.isFile() && d.name.endsWith(ext))
    .map((d) => path.join(d.parentPath, d.name))
    .sort();
}

/** Loads and schema-validates everything in `content/` (Section 28.1). */
export function loadContent({
  contentDir = path.resolve('content'),
  assetsDir = path.resolve('src/assets/lessons'),
}: LoadOptions = {}): ContentBundle {
  const issues = new IssueList();
  const f = (name: string) => path.join(contentDir, name);

  const aircraft = loadYaml(f('aircraft.yaml'), AircraftSchema, issues);
  const modules = loadYaml(f('modules.yaml'), ModulesFileSchema, issues)?.modules ?? [];
  const presets = loadYaml(f('presets.yaml'), PresetsSchema, issues);
  const resources = loadYaml(f('resources.yaml'), ResourcesFileSchema, issues)?.resources ?? [];
  const airports = loadYaml(f('airports.yaml'), AirportsFileSchema, issues)?.airports ?? [];
  const glossary = loadYaml(f('glossary.yaml'), GlossaryFileSchema, issues)?.terms ?? [];
  const checklists = loadYaml(f('checklists.yaml'), ChecklistsFileSchema, issues)?.checklists ?? [];
  const profileFile = f('airspace-profile.yaml');
  const profile = existsSync(profileFile)
    ? loadYaml(profileFile, AirspaceProfileSchema, issues)
    : null;

  const challenges: ContentBundle['challenges'] = [];
  for (const file of listFiles(f('challenges'), '.yaml')) {
    const challenge = loadYaml(file, ChallengeSchema, issues);
    if (challenge) challenges.push({ ...challenge, file: rel(file) });
  }

  // Lesson frontmatter first, so [[slug]] links can be resolved while parsing bodies.
  const lessonFiles = listFiles(f('lessons'), '.md');
  const moduleBySlug = new Map(modules.map((m) => [m.slug, m]));
  const links = new Map<string, LinkTarget>();
  for (const file of lessonFiles) {
    const head = /^---\n([\s\S]*?)\n---/.exec(readFileSync(file, 'utf8'));
    const data = head ? (parseDocument(head[1]!).toJS() as Record<string, unknown>) : {};
    if (typeof data.slug === 'string' && typeof data.module === 'string') {
      links.set(data.slug, {
        code: String(data.code ?? ''),
        title: String(data.title ?? data.slug),
        href: `/learn/${data.module}/${data.slug}`,
      });
    }
  }
  for (const c of challenges) {
    links.set(c.slug, { code: c.code, title: c.title, href: `/challenges/${c.slug}` });
  }

  const lessons: ParsedLesson[] = [];
  if (aircraft) {
    const ctx = {
      aircraft,
      links,
      checklistSlugs: new Set(checklists.map((c) => c.slug)),
      assetsDir,
      issues,
    };
    for (const file of lessonFiles) {
      const parsed = parseLessonSource(readFileSync(file, 'utf8'), rel(file), ctx);
      if (parsed) lessons.push(parsed);
    }
  } else if (lessonFiles.length) {
    issues.error(
      rel(f('lessons')),
      'Lessons cannot be parsed until aircraft.yaml is valid (tokens)',
    );
  }

  void moduleBySlug;
  return {
    aircraft,
    airspaceProfiles: profile ? [profile] : [],
    modules,
    presets,
    resources,
    airports,
    glossary,
    checklists,
    challenges,
    lessons,
    issues,
    contentDir,
  };
}
