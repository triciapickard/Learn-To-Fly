import { describe, expect, it } from 'vitest';
import {
  buildIssueUrl,
  formatDiagnostics,
  formatReportText,
  reportTitle,
  type ReportContext,
} from './report';

const context: ReportContext = {
  path: '/challenges/c2-straight-and-level',
  release: 'abcdef1234567890',
  userAgent: 'TestBrowser/1.0',
  viewport: { width: 1280, height: 720 },
  theme: 'dark',
  signedIn: true,
  at: '2026-10-19T15:00:00.000Z',
};

describe('formatDiagnostics', () => {
  it('lists the page, short release, browser, viewport, theme and sign-in state', () => {
    expect(formatDiagnostics(context)).toBe(
      [
        'Page: /challenges/c2-straight-and-level',
        'Release: abcdef123456',
        'Browser: TestBrowser/1.0',
        'Viewport: 1280x720',
        'Theme: dark',
        'Signed in: yes',
        'Time: 2026-10-19T15:00:00.000Z',
      ].join('\n'),
    );
  });

  it('adds the error id and message from the error page', () => {
    const text = formatDiagnostics({
      ...context,
      release: '',
      errorId: 'evt-1',
      errorMessage: 'TypeError: boom',
    });
    expect(text).toContain('Release: unknown');
    expect(text).toContain('Error id: evt-1');
    expect(text).toContain('Error: TypeError: boom');
  });
});

describe('reportTitle', () => {
  it('uses the first line of the description with the kind prefix', () => {
    expect(reportTitle('bug', 'Page went blank\nafter clicking Start')).toBe(
      '[Bug] Page went blank',
    );
    expect(reportTitle('content', '  Vr is wrong  ')).toBe('[Content] Vr is wrong');
    expect(reportTitle('idea', '')).toBe('[Idea] ');
  });

  it('truncates long first lines', () => {
    const title = reportTitle('bug', 'x'.repeat(100));
    expect(title.length).toBeLessThanOrEqual(78);
    expect(title.endsWith('…')).toBe(true);
  });
});

describe('buildIssueUrl', () => {
  it('points at the matching issue form with the fields pre-filled', () => {
    const url = new URL(buildIssueUrl({ kind: 'bug', description: 'Page went blank', context }));
    expect(url.origin + url.pathname).toBe(
      'https://github.com/triciapickard/Learn-To-Fly/issues/new',
    );
    expect(url.searchParams.get('template')).toBe('bug_report.yml');
    expect(url.searchParams.get('title')).toBe('[Bug] Page went blank');
    expect(url.searchParams.get('description')).toBe('Page went blank');
    expect(url.searchParams.get('page')).toBe('/challenges/c2-straight-and-level');
    expect(url.searchParams.get('diagnostics')).toBe(formatDiagnostics(context));
  });

  it('fills the "where" field for content errors and no page for ideas', () => {
    const content = new URL(buildIssueUrl({ kind: 'content', description: 'Vr', context }));
    expect(content.searchParams.get('template')).toBe('content_error.yml');
    expect(content.searchParams.get('where')).toBe(context.path);
    const idea = new URL(buildIssueUrl({ kind: 'idea', description: 'More', context }));
    expect(idea.searchParams.get('template')).toBe('feature_request.yml');
    expect(idea.searchParams.has('page')).toBe(false);
    expect(idea.searchParams.has('where')).toBe(false);
  });

  it('never includes personal data', () => {
    const url = buildIssueUrl({ kind: 'bug', description: 'x', context });
    expect(url).not.toMatch(/email|@/);
  });
});

describe('formatReportText', () => {
  it('is a readable plain-text copy of the report', () => {
    const text = formatReportText({ kind: 'bug', description: 'Page went blank', context });
    expect(text.startsWith('[Bug] Page went blank\n\nPage went blank\n\nTechnical details\n')).toBe(
      true,
    );
    expect(text).toContain('Page: /challenges/c2-straight-and-level');
  });
});
