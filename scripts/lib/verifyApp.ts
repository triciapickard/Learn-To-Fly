import { readFileSync } from 'node:fs';
import type { Nodes } from 'mdast';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import type { Checklist, Presets } from '@shared/schemas/content.js';
import type { ContentBundle } from './loadContent.js';
import type { ParsedLesson } from './parseLesson.js';
import { findLessonMarkers, findYamlMarkers, parseCsv, type Marker } from './verification.js';

/**
 * Data for the verifier app (docs/verification/app): for every lesson and challenge of the
 * chosen modules, only the checks that need the sim (Section 54.3 and the sim steps of 54.4),
 * built from the content, the open verify markers and the "Sim:" tracker notes. The app
 * itself is scripts/assets/verify-app.html.
 */

export interface AppCheck {
  /** Stable across rebuilds while the text is unchanged, so saved progress survives. */
  id: string;
  label: string;
  /** Pre-rendered HTML shown under the check (the text being verified). */
  detail?: string;
  /** Content line the check points at, when known. */
  line?: number;
}

export interface AppGroup {
  id: string;
  title: string;
  hint?: string;
  /** Rendered once above the checks: the section text a learner would read. */
  reading?: string;
  checks: AppCheck[];
}

export interface AppItem {
  id: string;
  type: 'lesson' | 'challenge';
  title: string;
  file: string;
  priority: string;
  estimatedMinutes: number;
  meta: { label: string; value: string }[];
  groups: AppGroup[];
}

export interface AppModule {
  code: string;
  title: string;
  summary: string;
  items: AppItem[];
}

export interface AppData {
  generatedAt: string;
  simVersion: string;
  modules: AppModule[];
}

export interface BuildOptions {
  /** Module numbers, e.g. [2, 3, 4]. */
  modules: number[];
  /** docs/verification/tracker.csv contents, for the Notes column. */
  tracker?: string;
  simVersion?: string;
  read?: (file: string) => string;
}

/* ----------------------------------------------------------------------------
 * Markdown → HTML (the subset lessons use: GFM text, lists, tables, links)
 * -------------------------------------------------------------------------- */

const parser = unified().use(remarkParse).use(remarkGfm);

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function nodeToHtml(node: Nodes): string {
  const children = () =>
    'children' in node ? (node.children as Nodes[]).map(nodeToHtml).join('') : '';
  switch (node.type) {
    case 'root':
      return children();
    case 'paragraph':
      return `<p>${children()}</p>`;
    case 'text':
      return escapeHtml(node.value);
    case 'strong':
      return `<strong>${children()}</strong>`;
    case 'emphasis':
      return `<em>${children()}</em>`;
    case 'delete':
      return `<del>${children()}</del>`;
    case 'inlineCode':
      return `<code>${escapeHtml(node.value)}</code>`;
    case 'code':
      return `<pre><code>${escapeHtml(node.value)}</code></pre>`;
    case 'break':
      return '<br>';
    case 'thematicBreak':
      return '<hr>';
    case 'heading':
      return `<h${node.depth + 2}>${children()}</h${node.depth + 2}>`;
    case 'blockquote':
      return `<blockquote>${children()}</blockquote>`;
    case 'link':
      return /^https?:/.test(node.url)
        ? `<a href="${escapeHtml(node.url)}" target="_blank" rel="noopener">${children()}</a>`
        : `<span class="ilink" title="${escapeHtml(node.url)}">${children()}</span>`;
    case 'image':
      return `<span class="img">[Image: ${escapeHtml(node.alt ?? node.url)}]</span>`;
    case 'list': {
      const tag = node.ordered ? 'ol' : 'ul';
      const start = node.ordered && node.start && node.start !== 1 ? ` start="${node.start}"` : '';
      return `<${tag}${start}>${children()}</${tag}>`;
    }
    case 'listItem': {
      const box =
        node.checked === true
          ? '<span class="box on">☑</span> '
          : node.checked === false
            ? '<span class="box">☐</span> '
            : '';
      const inner = (node.children as Nodes[])
        .map((c) =>
          c.type === 'paragraph' ? (c.children as Nodes[]).map(nodeToHtml).join('') : nodeToHtml(c),
        )
        .join('');
      return `<li>${box}${inner}</li>`;
    }
    case 'table': {
      const rows = node.children.map((row, r) => {
        const tag = r === 0 ? 'th' : 'td';
        const cells = row.children.map((cell) => `<${tag}>${nodeToHtml(cell)}</${tag}>`).join('');
        return `<tr>${cells}</tr>`;
      });
      return `<table>${rows.join('')}</table>`;
    }
    case 'tableRow':
    case 'tableCell':
      return children();
    case 'html':
      return escapeHtml(node.value);
    default:
      return children();
  }
}

export function markdownToHtml(markdown: string): string {
  return nodeToHtml(parser.parse(markdown) as Nodes);
}

/* ----------------------------------------------------------------------------
 * Helpers
 * -------------------------------------------------------------------------- */

/** Short, stable id fragment for a piece of text (djb2, base 36). */
export function textKey(text: string): string {
  let hash = 5381;
  for (let i = 0; i < text.length; i++) hash = ((hash * 33) ^ text.charCodeAt(i)) >>> 0;
  return hash.toString(36);
}

const dl = (rows: [string, string][]) =>
  `<dl>${rows.map(([k, v]) => `<dt>${escapeHtml(k)}</dt><dd>${v}</dd>`).join('')}</dl>`;

/** Sentences of a tracker Notes cell ("Sim: a; b; c" → ["a", "b", "c"]). */
export function splitTrackerNote(note: string): string[] {
  return note
    .replace(/^Sim:\s*/i, '')
    .split(/;\s+/)
    .map((s) => s.trim().replace(/\.$/, ''))
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1));
}

/** Item id → Notes column of docs/verification/tracker.csv. */
export function trackerNotes(csv: string | undefined): Map<string, string> {
  const notes = new Map<string, string>();
  if (!csv) return notes;
  const [header, ...rows] = parseCsv(csv);
  const idCol = header?.indexOf('Item') ?? -1;
  const notesCol = header?.indexOf('Notes') ?? -1;
  if (idCol < 0 || notesCol < 0) return notes;
  for (const row of rows) if (row[idCol] && row[notesCol]) notes.set(row[idCol], row[notesCol]);
  return notes;
}

/** The sim version recorded in docs/verification/README.md (step 12.1). */
export function simVersionFromReadme(readme: string): string | null {
  const match = /\|\s*Sim version\s*\|\s*\**([^|*]+?)\**\s*\|/.exec(readme);
  return match ? match[1]!.trim() : null;
}

function markerChecks(prefix: string, markers: Marker[], notes: string | undefined): AppCheck[] {
  const checks: AppCheck[] = markers.map((m) => ({
    id: `${prefix}:marker:${textKey(m.text)}`,
    label: m.text,
    line: m.line,
  }));
  for (const note of /^Sim:/i.test(notes ?? '') ? splitTrackerNote(notes ?? '') : []) {
    checks.push({ id: `${prefix}:tracker:${textKey(note)}`, label: note });
  }
  return checks;
}

/* ----------------------------------------------------------------------------
 * Lessons: only what needs the sim (open markers, "Sim:" tracker notes, "Sim vs reality"
 * callouts, embedded checklists against the EFB, screenshots). Text, quizzes, numbers and
 * links are desk checks and are left out on purpose.
 * -------------------------------------------------------------------------- */

interface LessonContext {
  checklists: Map<string, Checklist>;
  itemTitles: Map<string, string>;
}

function checklistHtml(checklist: Checklist | undefined, slug: string): string {
  if (!checklist) return `<p>Checklist <code>${escapeHtml(slug)}</code> (not found).</p>`;
  const rows = checklist.items
    .map(
      (i) =>
        `<tr><td>${escapeHtml(i.item)}</td><td><strong>${escapeHtml(i.action)}</strong></td><td>${escapeHtml(i.note ?? '')}</td></tr>`,
    )
    .join('');
  return `<table class="checklist"><tr><th>Item</th><th>Action</th><th>Note</th></tr>${rows}</table>`;
}

function lessonItem(lesson: ParsedLesson, ctx: LessonContext, notes: string | undefined): AppItem {
  const fm = lesson.frontmatter;
  const source = readFileSync(lesson.file, 'utf8');
  const markers = findLessonMarkers(source);
  const groups: AppGroup[] = [];

  const simChecks = markerChecks(fm.code, markers, notes);
  if (simChecks.length > 0) {
    groups.push({
      id: 'sim',
      title: 'Open markers and tracker notes',
      hint: 'Things that can only be settled in the sim. Tick OK when confirmed, or Issue and write what you found.',
      checks: simChecks,
    });
  }

  const callouts: AppCheck[] = [];
  const checklists: AppCheck[] = [];
  const media: AppCheck[] = [];
  let section = '';
  const where = () => (section ? ` (section "${section}")` : '');
  for (const block of lesson.blocks) {
    switch (block.type) {
      case 'heading':
        section = block.text;
        break;
      case 'callout':
        if (block.calloutType === 'sim') {
          callouts.push({
            id: `${fm.code}:callout:${textKey(block.markdown)}`,
            label: `Sim vs reality${where()}: still true in the current sim?`,
            detail: markdownToHtml(block.markdown),
          });
        }
        break;
      case 'checklist': {
        const checklist = ctx.checklists.get(block.slug);
        checklists.push({
          id: `${fm.code}:checklist:${block.slug}`,
          label: `Checklist "${checklist?.title ?? block.slug}"${where()}: items and order match the sim's EFB checklist?`,
          detail: checklistHtml(checklist, block.slug),
        });
        break;
      }
      case 'image':
        media.push({
          id: `${fm.code}:image:${textKey(block.src)}`,
          label: `Screenshot "${block.alt}"${where()}: still matches the current sim?`,
        });
        break;
      case 'video':
        media.push({
          id: `${fm.code}:video:${block.videoId}`,
          label: `Video "${block.title}"${where()}: still matches the current sim?`,
        });
        break;
      default:
        break;
    }
  }
  if (callouts.length)
    groups.push({
      id: 'callouts',
      title: 'Sim vs reality callouts',
      hint: 'Each one claims something about how MSFS 2024 behaves. Press Show to read it.',
      checks: callouts,
    });
  if (checklists.length)
    groups.push({
      id: 'checklists',
      title: 'Checklists against the EFB',
      hint: "Open the same checklist in the sim's EFB and compare the items and their order.",
      checks: checklists,
    });
  if (media.length) groups.push({ id: 'media', title: 'Screenshots and videos', checks: media });

  const meta: AppItem['meta'] = [{ label: 'Summary', value: fm.summary }];
  if (fm.challenges.length)
    meta.push({
      label: 'Challenges',
      value: fm.challenges.map((s) => ctx.itemTitles.get(s) ?? s).join(', '),
    });

  return {
    id: fm.code,
    type: 'lesson',
    title: fm.title,
    file: lesson.file,
    priority: fm.priority,
    estimatedMinutes: fm.estimatedMinutes ?? 0,
    meta,
    groups,
  };
}

/* ----------------------------------------------------------------------------
 * Challenges
 * -------------------------------------------------------------------------- */

function presetHtml(
  presets: Presets | null,
  kind: 'weather' | 'loads' | 'startStates' | 'dates' | 'assistance',
  key: string,
): string {
  const entry = presets?.[kind]?.[key as never] as Record<string, unknown> | undefined;
  if (!entry) return `<p><code>${escapeHtml(key)}</code></p>`;
  const rows = Object.entries(entry)
    .filter(([k, v]) => k !== 'priority' && v !== undefined && v !== null)
    .map(([k, v]) => [k, escapeHtml(String(v))] as [string, string]);
  return dl(rows);
}

const SETUP_LABELS: Record<string, (v: string) => string> = {
  runway: (v) => `Runway ${v}`,
  parking: (v) => `Parking: ${v}`,
  position: (v) => `Position: ${v}`,
  altitudeFt: (v) => `Altitude ${Number(v).toLocaleString('en-US')} ft MSL`,
  headingDeg: (v) => `Heading ${v.padStart(3, '0')}`,
  speedKias: (v) => `Speed ${v} KIAS`,
  fallback: (v) => `Fallback: ${v}`,
};

function challengeItem(
  c: ContentBundle['challenges'][number],
  bundle: ContentBundle,
  notes: string | undefined,
  itemTitles: Map<string, string>,
): AppItem {
  const source = readFileSync(c.file, 'utf8');
  const markers = findYamlMarkers(source);
  const groups: AppGroup[] = [];
  const id = c.code;

  const simChecks = markerChecks(id, markers, notes);
  if (simChecks.length > 0) {
    groups.push({
      id: 'sim',
      title: 'Open markers and tracker notes',
      hint: 'Settle each one in the sim. Tick OK when confirmed, or Issue and write what you found.',
      checks: simChecks,
    });
  }

  // Setup (54.3 step 2: every field must be possible as written).
  const s = c.setup;
  const setup: AppCheck[] = [
    {
      id: `${id}:setup:start`,
      label: `Start: ${s.startState} at ${s.airportIcao}`,
      detail: presetHtml(bundle.presets, 'startStates', s.startState),
    },
  ];
  const details = Object.entries(s.startDetails).filter(([, v]) => v !== undefined && v !== null);
  for (const [k, v] of details) {
    const value = String(v).replace(/\s*#.*$/, '');
    const text = SETUP_LABELS[k] ? SETUP_LABELS[k](value) : `${k}: ${value}`;
    setup.push({ id: `${id}:setup:${k}`, label: text });
  }
  if (s.weatherPreset)
    setup.push({
      id: `${id}:setup:weather`,
      label: `Weather: ${s.weatherPreset}`,
      detail: presetHtml(bundle.presets, 'weather', s.weatherPreset),
    });
  if (s.weather)
    setup.push({
      id: `${id}:setup:weather-custom`,
      label: 'Custom weather',
      detail: dl(Object.entries(s.weather).map(([k, v]) => [k, escapeHtml(String(v))])),
    });
  setup.push(
    {
      id: `${id}:setup:time`,
      label: `Time ${s.timeLocal} local, date ${s.datePreset}`,
      detail: presetHtml(bundle.presets, 'dates', s.datePreset),
    },
    {
      id: `${id}:setup:load`,
      label: `Load: ${s.loadPreset}`,
      detail: presetHtml(bundle.presets, 'loads', s.loadPreset),
    },
    {
      id: `${id}:setup:assistance`,
      label: `Assistance: ${s.assistance}`,
      detail: presetHtml(bundle.presets, 'assistance', s.assistance),
    },
    {
      id: `${id}:setup:switches`,
      label: `AI traffic ${s.aiTraffic ? 'on' : 'off'}, ATC ${s.atc ? 'on' : 'off'}, crash damage ${s.crashDamage ? 'on' : 'off'}`,
    },
  );
  if (s.flightPlan)
    setup.push({
      id: `${id}:setup:plan`,
      label: `Flight plan ${s.flightPlan.departure} → ${s.flightPlan.destination}${s.flightPlan.waypoints.length ? ` via ${s.flightPlan.waypoints.join(', ')}` : ''}`,
    });
  groups.push({
    id: 'setup',
    title: 'Setup: can every field be set exactly as written?',
    hint: 'Start the sim fresh and set up only from the brief. Note any menu name that differs.',
    checks: setup,
  });

  groups.push({
    id: 'procedure',
    title: 'Procedure: fly it exactly as written',
    hint: 'Mark any step that is ambiguous, impossible or in the wrong order.',
    checks: c.procedure.map((step, i) => ({
      id: `${id}:step:${textKey(step)}`,
      label: `Step ${i + 1}: ${step.replace(/\s*⚠ verify.*$/, '')}`,
    })),
  });

  groups.push({
    id: 'criteria',
    title: 'Criteria: measurable from inside the sim?',
    hint: 'Each criterion must be checkable from the PFD, the clock, the replay or a map trail, and the tiers must make sense.',
    checks: c.criteria.map((cr) => ({
      id: `${id}:criterion:${cr.id}`,
      label: `${cr.label}${cr.required ? ' (required)' : ''}`,
      detail: dl([
        ['Kind', cr.kind + `, weight ${cr.weight}`],
        ...(cr.tiers
          ? ([
              ['Gold', escapeHtml(cr.tiers.gold)],
              ['Silver', escapeHtml(cr.tiers.silver)],
              ['Bronze', escapeHtml(cr.tiers.bronze)],
            ] as [string, string][])
          : []),
        ...(cr.reviewLink
          ? ([
              [
                'Review link',
                escapeHtml(
                  `${itemTitles.get(cr.reviewLink.lesson) ?? cr.reviewLink.lesson} → ${cr.reviewLink.section}`,
                ),
              ],
            ] as [string, string][])
          : []),
      ]),
    })),
  });

  groups.push({
    id: 'flight',
    title: 'Flight record (protocol 54.3)',
    hint: 'Record the tier and the minutes it took in the fields above, then tick these.',
    checks: [
      { id: `${id}:flight:fresh`, label: 'Flown from the brief only, after a fresh sim start' },
      { id: `${id}:flight:timed`, label: `Timed it (estimate is ${c.estimatedMinutes} min)` },
      {
        id: `${id}:flight:badly`,
        label: 'Flown deliberately badly once: the rubric separates Bronze from Gold',
      },
      {
        id: `${id}:flight:screens`,
        label: 'Screenshots taken where the brief or lesson needs one (or none needed)',
      },
    ],
  });

  return {
    id,
    type: 'challenge',
    title: c.title,
    file: c.file,
    priority: c.priority,
    estimatedMinutes: c.estimatedMinutes,
    meta: [
      { label: 'Goal', value: c.goal.trim() },
      { label: 'Type', value: `${c.type}, difficulty ${c.difficulty}/5` },
      {
        label: 'Lessons',
        value: c.lessons.map((s) => itemTitles.get(s) ?? s).join(', ') || 'none',
      },
    ],
    groups,
  };
}

/* ----------------------------------------------------------------------------
 * Build
 * -------------------------------------------------------------------------- */

export function buildAppData(bundle: ContentBundle, options: BuildOptions): AppData {
  const wanted = new Set(options.modules.map((n) => `M${n}`));
  const notes = trackerNotes(options.tracker);
  const lessonBySlug = new Map(bundle.lessons.map((l) => [l.frontmatter.slug, l]));
  const challengeBySlug = new Map(bundle.challenges.map((c) => [c.slug, c]));
  const itemTitles = new Map<string, string>();
  for (const l of bundle.lessons)
    itemTitles.set(l.frontmatter.slug, `${l.frontmatter.code} ${l.frontmatter.title}`);
  for (const c of bundle.challenges) itemTitles.set(c.slug, `${c.code} ${c.title}`);
  const ctx: LessonContext = {
    checklists: new Map(bundle.checklists.map((c) => [c.slug, c])),
    itemTitles,
  };

  const modules: AppModule[] = [];
  for (const m of bundle.modules) {
    if (!wanted.has(m.code)) continue;
    const items: AppItem[] = [];
    for (const slug of m.lessons) {
      const lesson = lessonBySlug.get(slug);
      if (lesson) items.push(lessonItem(lesson, ctx, notes.get(lesson.frontmatter.code)));
    }
    for (const slug of m.challenges) {
      const challenge = challengeBySlug.get(slug);
      if (challenge)
        items.push(challengeItem(challenge, bundle, notes.get(challenge.code), itemTitles));
    }
    // An item with nothing to check in the sim is a desk check only; leave it out.
    const inSim = items.filter((i) => i.groups.some((g) => g.checks.length > 0));
    if (inSim.length)
      modules.push({ code: m.code, title: m.title, summary: m.summary, items: inSim });
  }

  return {
    generatedAt: new Date().toISOString().slice(0, 10),
    simVersion: options.simVersion ?? 'unknown',
    modules,
  };
}

/** Fills the app template: the data goes where `__LTF_DATA__` is. */
export function renderApp(template: string, data: AppData): string {
  const json = JSON.stringify(data).replace(/<\//g, '<\\/');
  return template.replace('__LTF_DATA__', () => json);
}

export interface BundleFile {
  path: string;
  content: string | Buffer;
  executable?: boolean;
}

/**
 * Files of the macOS launcher bundle (a shell script that opens the page). `resources` are
 * extra files (the fonts) placed next to the page in Contents/Resources.
 */
export function appBundleFiles(
  name: string,
  page: string,
  resources: { path: string; content: Buffer }[] = [],
): BundleFile[] {
  const launcher = [
    '#!/bin/bash',
    '# Opens the verifier page in the default browser. Double-click the .app to run it.',
    'DIR="$(cd "$(dirname "$0")/../Resources" && pwd)"',
    'open "$DIR/index.html"',
    '',
  ].join('\n');
  const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleName</key><string>${escapeHtml(name)}</string>
  <key>CFBundleDisplayName</key><string>${escapeHtml(name)}</string>
  <key>CFBundleIdentifier</key><string>app.learntofly.verifier</string>
  <key>CFBundleVersion</key><string>1</string>
  <key>CFBundleShortVersionString</key><string>1.0</string>
  <key>CFBundlePackageType</key><string>APPL</string>
  <key>CFBundleExecutable</key><string>launcher</string>
  <key>LSMinimumSystemVersion</key><string>11.0</string>
  <key>LSUIElement</key><true/>
  <key>NSHighResolutionCapable</key><true/>
</dict>
</plist>
`;
  const dir = `${name}.app/Contents`;
  return [
    { path: `${dir}/Info.plist`, content: plist },
    { path: `${dir}/MacOS/launcher`, content: launcher, executable: true },
    { path: `${dir}/Resources/index.html`, content: page },
    ...resources.map((r) => ({ path: `${dir}/Resources/${r.path}`, content: r.content })),
  ];
}
