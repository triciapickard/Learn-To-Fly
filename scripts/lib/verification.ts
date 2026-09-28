import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { ContentBundle } from './loadContent.js';

/**
 * Phase 12 verification tracking (plan v1.md steps 12.2 and 12.5, Section 54).
 * Finds every open "verify" marker in content and turns it into a tracker CSV and a
 * module-by-module checklist.
 */

export interface Marker {
  line: number;
  text: string;
}

export interface VerificationItem {
  /** L0.1, C0.1 or the data file name (aircraft.yaml). */
  id: string;
  type: 'Lesson' | 'Challenge' | 'Data';
  module: string;
  moduleTitle: string;
  title: string;
  file: string;
  priority: string;
  published: boolean;
  lastVerifiedAt: string | null;
  simVersion: string | null;
  markers: Marker[];
}

const VERIFY_CALLOUT = /^:::callout\{[^}]*type="verify"[^}]*\}\s*$/;
/** "verify" as a word, but not the checklist mode "do-verify". */
const VERIFY_WORD = /(?<!do-)\bverify\b/i;

/** `:::callout{type="verify"}` blocks in a lesson, with their text on one line. */
export function findLessonMarkers(source: string): Marker[] {
  const lines = source.split('\n');
  const markers: Marker[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (!VERIFY_CALLOUT.test(lines[i]!)) continue;
    const body: string[] = [];
    let j = i + 1;
    while (j < lines.length && lines[j]!.trim() !== ':::') body.push(lines[j++]!.trim());
    const text = body
      .filter(Boolean)
      .join(' ')
      .replace(/^Author note:\s*/i, '');
    markers.push({ line: i + 1, text: text || '(empty verify callout)' });
    i = j;
  }
  return markers;
}

/**
 * YAML lines that mention "verify": `# ⚠ verify …` comments and "Verify — …" notes.
 * Whole-line comments only count when they carry a ⚠ (the rest explain the convention).
 */
export function findYamlMarkers(source: string): Marker[] {
  return source.split('\n').flatMap((line, i) =>
    VERIFY_WORD.test(line) && (!line.trimStart().startsWith('#') || line.includes('⚠'))
      ? [
          {
            line: i + 1,
            text: line
              .trim()
              .replace(/^-\s+/, '')
              .replace(/\s+#\s*/, ' — '),
          },
        ]
      : [],
  );
}

/** 1-based line of the first line matching `pattern` at or after `from`. */
function lineOf(lines: string[], pattern: RegExp, from = 0): number | undefined {
  for (let i = from; i < lines.length; i++) if (pattern.test(lines[i]!)) return i + 1;
  return undefined;
}

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Content dates may be parsed to Date objects by the YAML loader. */
const dateText = (value: unknown): string | null =>
  value instanceof Date ? value.toISOString().slice(0, 10) : value ? String(value) : null;

export function collectVerificationItems(
  bundle: ContentBundle,
  read: (file: string) => string = (file) => readFileSync(file, 'utf8'),
): VerificationItem[] {
  const items: VerificationItem[] = [];
  const lessonBySlug = new Map(bundle.lessons.map((l) => [l.frontmatter.slug, l]));
  const challengeBySlug = new Map(bundle.challenges.map((c) => [c.slug, c]));

  for (const m of bundle.modules) {
    for (const slug of m.lessons) {
      const lesson = lessonBySlug.get(slug);
      if (!lesson) continue;
      const fm = lesson.frontmatter;
      items.push({
        id: fm.code,
        type: 'Lesson',
        module: m.code,
        moduleTitle: m.title,
        title: fm.title,
        file: lesson.file,
        priority: fm.priority,
        published: fm.published,
        lastVerifiedAt: dateText(fm.lastVerifiedAt),
        simVersion: fm.simVersion ?? null,
        markers: findLessonMarkers(read(lesson.file)),
      });
    }
    for (const slug of m.challenges) {
      const c = challengeBySlug.get(slug);
      if (!c) continue;
      items.push({
        id: c.code,
        type: 'Challenge',
        module: m.code,
        moduleTitle: m.title,
        title: c.title,
        file: c.file,
        priority: c.priority,
        published: c.published,
        lastVerifiedAt: dateText(c.lastVerifiedAt),
        simVersion: c.simVersion ?? null,
        markers: findYamlMarkers(read(c.file)),
      });
    }
  }

  const dataFile = (name: string) =>
    path.relative(process.cwd(), path.join(bundle.contentDir, name));
  const data = (
    name: string,
    title: string,
    extra: (lines: string[]) => Marker[],
    verifiedAt: unknown,
  ) => {
    const file = dataFile(name);
    let source = '';
    try {
      source = read(file);
    } catch {
      return; // optional data files (e.g. airspace-profile.yaml in fixtures)
    }
    const lines = source.split('\n');
    const markers = [...findYamlMarkers(source), ...extra(lines)].sort((a, b) => a.line - b.line);
    items.push({
      id: name,
      type: 'Data',
      module: 'Data',
      moduleTitle: 'Reference data',
      title,
      file,
      priority: 'P0',
      published: false,
      lastVerifiedAt: dateText(verifiedAt),
      simVersion: bundle.aircraft?.simVersion ?? null,
      markers,
    });
  };

  data(
    'aircraft.yaml',
    'Aircraft data (specs, V-speeds, arcs, limits, power, performance)',
    (lines) => {
      const start = (lineOf(lines, /^verification:/) ?? 1) - 1;
      return Object.entries(bundle.aircraft?.verification ?? {})
        .filter(([, v]) => !v.verified)
        .map(([key, v]) => ({
          line: lineOf(lines, new RegExp(`^\\s+${escapeRegExp(key)}:`), start) ?? start + 1,
          text: `verification.${key} not verified${v.note ? ` — ${v.note}` : ''}`,
        }));
    },
    bundle.aircraft?.verifiedAt,
  );
  data(
    'airports.yaml',
    `Airports (${bundle.airports.length})`,
    (lines) =>
      bundle.airports
        .filter((a) => !a.verifiedAt)
        .map((a) => ({
          line: lineOf(lines, new RegExp(`icao:\\s*${a.icao}\\b`)) ?? 1,
          text: `${a.icao} ${a.name} not verified${a.frequencies.length ? '' : ' (frequencies still empty)'}`,
        })),
    bundle.airports.every((a) => a.verifiedAt) ? bundle.airports[0]?.verifiedAt : null,
  );
  data(
    'checklists.yaml',
    `Checklists (${bundle.checklists.length})`,
    (lines) =>
      bundle.checklists
        .filter((c) => !c.verifiedAt)
        .map((c) => ({
          line: lineOf(lines, new RegExp(`slug:\\s*${escapeRegExp(c.slug)}\\s*$`)) ?? 1,
          text: `${c.title}: not verified against the in-sim checklist`,
        })),
    bundle.checklists.every((c) => c.verifiedAt) ? bundle.checklists[0]?.verifiedAt : null,
  );
  data('presets.yaml', 'Challenge presets (start states, weather, loads)', () => [], null);
  const profile = bundle.airspaceProfiles[0];
  data(
    'airspace-profile.yaml',
    'W11 airspace cross-section',
    (lines) =>
      profile && !profile.verified
        ? [
            {
              line: lineOf(lines, /^verified:/) ?? 1,
              text: 'verified: false — check every floor and ceiling against the current TAC and sectional',
            },
          ]
        : [],
    profile?.verifiedAt,
  );
  data(
    'resources.yaml',
    `External resources (${bundle.resources.length})`,
    (lines) => {
      const unchecked = bundle.resources.filter((r) => !r.verifiedAt);
      const videos = unchecked.filter((r) => r.type === 'video');
      return [
        ...(unchecked.length
          ? [
              {
                line: lineOf(lines, /^resources:/) ?? 1,
                text: `${unchecked.length} resources have no verifiedAt — run npm run content:links, then check each still says what we claim`,
              },
            ]
          : []),
        ...videos.map((r) => ({
          line: lineOf(lines, new RegExp(`slug:\\s*${escapeRegExp(r.slug)}\\s*$`)) ?? 1,
          text: `Video "${r.title}" — watch in full before setting verifiedAt`,
        })),
      ];
    },
    bundle.resources.every((r) => r.verifiedAt) ? bundle.resources[0]?.verifiedAt : null,
  );

  return items;
}

// ---------------------------------------------------------------------------------------
// Tracker CSV (step 12.2): generated columns are refreshed, your columns are kept.

export const GENERATED_COLUMNS = [
  'Item',
  'Type',
  'Module',
  'Priority',
  'Title',
  'Open markers',
  'Status',
  'Last verified',
  'File',
] as const;

export const MANUAL_COLUMNS = [
  'Checked in sim (Y/N)',
  'Date checked',
  'Tier flown',
  'Minutes',
  'Screenshots done',
  'Issues',
  'Fix PR',
  'Notes',
] as const;

export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]!;
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (ch === '"') quoted = false;
      else field += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') {
      row.push(field);
      field = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else field += ch;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => cell !== ''));
}

const csvCell = (value: string) =>
  /[",\n\r]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;

export function toCsv(rows: string[][]): string {
  return rows.map((r) => r.map(csvCell).join(',')).join('\n') + '\n';
}

/** Builds the tracker, keeping whatever you typed in the manual columns of `existing`. */
export function buildTracker(items: VerificationItem[], existing?: string): string {
  const kept = new Map<string, Record<string, string>>();
  if (existing) {
    const [header, ...rows] = parseCsv(existing);
    if (header) {
      for (const row of rows) {
        const record = Object.fromEntries(header.map((h, i) => [h, row[i] ?? '']));
        if (record.Item) kept.set(record.Item, record);
      }
    }
  }
  const rows = items.map((item) => {
    const manual = kept.get(item.id) ?? {};
    return [
      item.id,
      item.type,
      item.module,
      item.priority,
      item.title,
      String(item.markers.length),
      item.type === 'Data'
        ? item.lastVerifiedAt
          ? 'Verified'
          : 'Unverified'
        : item.published
          ? 'Published'
          : 'Draft',
      item.lastVerifiedAt ?? '',
      item.file,
      ...MANUAL_COLUMNS.map((c) => manual[c] ?? ''),
    ];
  });
  return toCsv([[...GENERATED_COLUMNS, ...MANUAL_COLUMNS], ...rows]);
}

// ---------------------------------------------------------------------------------------
// Checklist Markdown (step 12.5): every open marker, grouped by module.

export function buildChecklist(
  items: VerificationItem[],
  generatedOn: string,
  linkBase: string,
): string {
  const count = (type: VerificationItem['type']) => items.filter((i) => i.type === type);
  const markers = (list: VerificationItem[]) => list.reduce((n, i) => n + i.markers.length, 0);
  const lessons = count('Lesson');
  const challenges = count('Challenge');
  const data = count('Data');
  const link = (file: string, line?: number) =>
    `[${line ? `line ${line}` : file}](${linkBase}${file}${line ? `#L${line}` : ''})`;

  const out: string[] = [
    '# Phase 12 verification checklist',
    '',
    `> Generated by \`npm run content:verify-report\` on ${generatedOn}. Do not edit by hand:`,
    '> fix the content, re-run the script, and resolved markers drop off. Record your',
    '> progress (checked in sim, tier flown, issues, fix PR) in [`tracker.csv`](./tracker.csv).',
    '',
    '## Summary',
    '',
    '| Group | Items | Published / verified | Open markers |',
    '| --- | --- | --- | --- |',
    `| Lessons | ${lessons.length} | ${lessons.filter((i) => i.published).length} | ${markers(lessons)} |`,
    `| Challenges | ${challenges.length} | ${challenges.filter((i) => i.published).length} | ${markers(challenges)} |`,
    `| Reference data | ${data.length} | ${data.filter((i) => i.lastVerifiedAt).length} | ${markers(data)} |`,
    '',
    'Every item still needs the full protocol from v1.md Section 54 even when it has no open',
    'markers: lessons follow 54.4 (numbers, sim instructions, screenshots, links, sim-vs-reality',
    'callouts); challenges follow 54.3 (set up from the brief only, fly it, time it, fly it badly',
    'once). When an item passes, set `lastVerifiedAt`, `simVersion` and `published: true` in its',
    'file (Section 54.2).',
    '',
  ];

  let module = '';
  for (const item of items) {
    if (item.module !== module) {
      module = item.module;
      out.push(
        item.type === 'Data' ? '## Reference data' : `## ${item.module} — ${item.moduleTitle}`,
        '',
      );
    }
    const status =
      item.type === 'Data'
        ? item.lastVerifiedAt
          ? `verified ${item.lastVerifiedAt}`
          : 'unverified'
        : item.published
          ? `published, verified ${item.lastVerifiedAt ?? '?'}`
          : 'draft';
    const heading =
      item.type === 'Data' ? `\`${item.id}\` — ${item.title}` : `${item.id} — ${item.title}`;
    out.push(`### ${heading}`, '', `${link(item.file)} · ${item.priority} · ${status}`, '');
    if (item.markers.length === 0) {
      out.push('- No open markers. Run the Section 54 protocol for this item.', '');
    } else {
      for (const m of item.markers) out.push(`- ${link(item.file, m.line)}: ${m.text}`);
      out.push('');
    }
  }
  return out.join('\n');
}
