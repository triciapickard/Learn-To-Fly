import { describe, expect, it } from 'vitest';
import { classify, extractUrls } from '../lib/links.js';
import {
  buildTracker,
  findLessonMarkers,
  findYamlMarkers,
  parseCsv,
  toCsv,
  type VerificationItem,
} from '../lib/verification.js';

describe('findLessonMarkers', () => {
  it('returns each verify callout with its line and text', () => {
    const source = [
      '## Intro',
      ':::callout{type="tip"}',
      'Not this one.',
      ':::',
      ':::callout{type="verify"}',
      'Author note: check the runway',
      'in the sim.',
      ':::',
    ].join('\n');
    expect(findLessonMarkers(source)).toEqual([{ line: 5, text: 'check the runway in the sim.' }]);
  });
});

describe('findYamlMarkers', () => {
  it('finds inline comments and notes but not do-verify or explanatory comments', () => {
    const source = [
      '# Items with a note starting "Verify" are known uncertainties.',
      '# ⚠ Verify menu names in the sim.',
      'runway: 25R # ⚠ verify the runway name',
      'mode: do-verify',
      "note: 'Verify — lean above 3,000 ft.'",
      'definition: then verifying.',
    ].join('\n');
    expect(findYamlMarkers(source)).toEqual([
      { line: 2, text: '# ⚠ Verify menu names in the sim.' },
      { line: 3, text: 'runway: 25R — ⚠ verify the runway name' },
      { line: 5, text: "note: 'Verify — lean above 3,000 ft.'" },
    ]);
  });
});

describe('tracker CSV', () => {
  const item = (id: string, markers = 0): VerificationItem => ({
    id,
    type: 'Challenge',
    module: 'M0',
    moduleTitle: 'Getting started',
    title: `Title, with "quotes"`,
    file: `content/challenges/${id}.yaml`,
    priority: 'P0',
    published: false,
    lastVerifiedAt: null,
    simVersion: null,
    markers: Array.from({ length: markers }, (_, i) => ({ line: i + 1, text: 'x' })),
  });

  it('round-trips quoted cells', () => {
    const rows = [['a', 'b, c', 'say "hi"', 'two\nlines']];
    expect(parseCsv(toCsv(rows))).toEqual(rows);
  });

  it('refreshes generated columns and keeps manual ones', () => {
    const first = buildTracker([item('C0.1', 2)]);
    const [header, row] = parseCsv(first);
    const issues = header!.indexOf('Issues');
    const tier = header!.indexOf('Tier flown');
    row![issues] = 'Runway is "25R", not 25L';
    row![tier] = 'Gold';
    const edited = toCsv([header!, row!]);

    const [, updated] = parseCsv(buildTracker([item('C0.1', 0), item('C1.1')], edited));
    expect(updated![header!.indexOf('Open markers')]).toBe('0');
    expect(updated![issues]).toBe('Runway is "25R", not 25L');
    expect(updated![tier]).toBe('Gold');
    expect(parseCsv(buildTracker([item('C0.1'), item('C1.1')], edited))).toHaveLength(3);
  });
});

describe('links', () => {
  it('extracts URLs and trims trailing punctuation', () => {
    const text =
      'See https://www.faa.gov/phak.\nAlso [AIM](https://www.faa.gov/aim) and "http://x.org/a".';
    expect(extractUrls(text)).toEqual([
      { url: 'https://www.faa.gov/phak', line: 1 },
      { url: 'https://www.faa.gov/aim', line: 2 },
      { url: 'http://x.org/a', line: 2 },
    ]);
  });

  it('classifies responses', () => {
    expect(classify('http://faa.gov/a', 200, 'https://www.faa.gov/a/')).toBe('ok');
    expect(classify('https://faa.gov/a', 200, 'https://faa.gov/b')).toBe('redirected');
    expect(classify('https://faa.gov/a', 403, 'https://faa.gov/a')).toBe('blocked');
    expect(classify('https://faa.gov/a', 404, 'https://faa.gov/a')).toBe('broken');
    expect(classify('https://www.ecfr.gov/a', 200, 'https://unblock.federalregister.gov/')).toBe(
      'blocked',
    );
  });
});
