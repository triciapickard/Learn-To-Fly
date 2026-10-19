import { GITHUB_URL } from '@/features/layout/navigation';

/** The three issue forms in `.github/ISSUE_TEMPLATE/`, keyed by the kind of report. */
export const REPORT_KINDS = ['bug', 'content', 'idea'] as const;
export type ReportKind = (typeof REPORT_KINDS)[number];

export const REPORT_KIND_LABELS: Record<ReportKind, { label: string; description: string }> = {
  bug: {
    label: 'Something is broken',
    description: 'A page, button, widget or score that does not work as it should.',
  },
  content: {
    label: 'A lesson or number is wrong',
    description: 'An aviation fact, procedure or explanation that is incorrect or unclear.',
  },
  idea: { label: 'A suggestion', description: 'An idea for a lesson, challenge or improvement.' },
};

const TEMPLATE_FILES: Record<ReportKind, string> = {
  bug: 'bug_report.yml',
  content: 'content_error.yml',
  idea: 'feature_request.yml',
};

export interface ReportContext {
  /** Path of the page the report is about, without query or hash. */
  path: string;
  /** Deployed commit (VITE_RELEASE), or empty when unknown. */
  release: string;
  userAgent: string;
  viewport: { width: number; height: number };
  theme: 'light' | 'dark';
  signedIn: boolean;
  /** ISO timestamp of the report. */
  at: string;
  /** Sentry event id when the report comes from the error page. */
  errorId?: string;
  /** The error message when the report comes from the error page. */
  errorMessage?: string;
}

/**
 * Plain-text diagnostics for the "Technical details" field. Deliberately contains nothing
 * that identifies the person: no email, name, IP or query string (Section 34.4).
 */
export function formatDiagnostics(context: ReportContext): string {
  const lines = [
    `Page: ${context.path}`,
    `Release: ${context.release ? context.release.slice(0, 12) : 'unknown'}`,
    `Browser: ${context.userAgent}`,
    `Viewport: ${context.viewport.width}x${context.viewport.height}`,
    `Theme: ${context.theme}`,
    `Signed in: ${context.signedIn ? 'yes' : 'no'}`,
    `Time: ${context.at}`,
  ];
  if (context.errorId) lines.push(`Error id: ${context.errorId}`);
  if (context.errorMessage) lines.push(`Error: ${context.errorMessage}`);
  return lines.join('\n');
}

export interface ReportInput {
  kind: ReportKind;
  description: string;
  context: ReportContext;
}

/** The first line of the description, trimmed to fit a GitHub issue title. */
export function reportTitle(kind: ReportKind, description: string): string {
  const prefix = { bug: '[Bug]', content: '[Content]', idea: '[Idea]' }[kind];
  const firstLine = description.trim().split('\n')[0]?.trim() ?? '';
  const short = firstLine.length > 72 ? `${firstLine.slice(0, 69).trimEnd()}…` : firstLine;
  return short ? `${prefix} ${short}` : `${prefix} `;
}

/**
 * A GitHub "new issue" link with the matching form pre-filled (GitHub reads form fields from
 * query parameters named after the field ids). Nothing is sent anywhere until the person
 * submits the issue on GitHub, so this works without an API and without storing anything.
 */
export function buildIssueUrl({ kind, description, context }: ReportInput): string {
  const params = new URLSearchParams();
  params.set('template', TEMPLATE_FILES[kind]);
  params.set('title', reportTitle(kind, description));
  if (description.trim()) params.set('description', description.trim());
  if (kind === 'bug') params.set('page', context.path);
  if (kind === 'content') params.set('where', context.path);
  params.set('diagnostics', formatDiagnostics(context));
  return `${GITHUB_URL}/issues/new?${params.toString()}`;
}

/** The whole report as plain text, for people who would rather paste it somewhere else. */
export function formatReportText({ kind, description, context }: ReportInput): string {
  return [
    reportTitle(kind, description),
    '',
    description.trim() || '(no description)',
    '',
    'Technical details',
    formatDiagnostics(context),
  ].join('\n');
}
