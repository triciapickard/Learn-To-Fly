import { describe, expect, it } from 'vitest';
import { loadContent } from '../lib/loadContent.js';
import {
  appBundleFiles,
  buildAppData,
  markdownToHtml,
  renderApp,
  simVersionFromReadme,
  splitTrackerNote,
  textKey,
  trackerNotes,
} from '../lib/verifyApp.js';

describe('markdownToHtml', () => {
  it('renders the GFM subset lessons use', () => {
    const html = markdownToHtml(
      '**Bold** and _em_ with `code`.\n\n- [x] yes\n- [ ] no\n\n| A | B |\n| - | - |\n| 1 | 2 |\n\n[FAA](https://faa.gov) and [C2.1 Straight](/challenges/c2-1).',
    );
    expect(html).toContain('<strong>Bold</strong>');
    expect(html).toContain('<em>em</em>');
    expect(html).toContain('<code>code</code>');
    expect(html).toContain('<span class="box on">☑</span> yes');
    expect(html).toContain('<th>A</th>');
    expect(html).toContain('<td>2</td>');
    expect(html).toContain('<a href="https://faa.gov" target="_blank" rel="noopener">FAA</a>');
    expect(html).toContain('<span class="ilink" title="/challenges/c2-1">C2.1 Straight</span>');
  });

  it('escapes HTML in text', () => {
    expect(markdownToHtml('a <b> & c')).toBe('<p>a &lt;b&gt; &amp; c</p>');
  });
});

describe('helpers', () => {
  it('splits tracker notes into actions', () => {
    expect(splitTrackerNote('Sim: confirm the air start; time it; fly it fast once.')).toEqual([
      'Confirm the air start',
      'Time it',
      'Fly it fast once',
    ]);
  });

  it('reads the Notes column by item id', () => {
    const csv = 'Item,Type,Notes\nL2.1,Lesson,"Sim: a; b"\nC2.1,Challenge,\n';
    expect([...trackerNotes(csv)]).toEqual([['L2.1', 'Sim: a; b']]);
    expect(trackerNotes(undefined).size).toBe(0);
  });

  it('finds the sim version in the verification README', () => {
    expect(simVersionFromReadme('| Sim version     | **1.8.16.0**  |')).toBe('1.8.16.0');
    expect(simVersionFromReadme('nothing here')).toBeNull();
  });

  it('gives stable keys for the same text', () => {
    expect(textKey('abc')).toBe(textKey('abc'));
    expect(textKey('abc')).not.toBe(textKey('abd'));
  });
});

describe('buildAppData', () => {
  const bundle = loadContent();
  const data = buildAppData(bundle, {
    modules: [2],
    tracker: 'Item,Notes\nL2.1,"Sim: check the widget; check the links"\n',
    simVersion: '1.8.16.0',
  });

  it('lists the module with its lessons then challenges', () => {
    expect(bundle.issues.errors).toEqual([]);
    expect(data.modules.map((m) => m.code)).toEqual(['M2']);
    expect(data.modules[0]!.items.map((i) => i.id)).toEqual([
      'L2.1',
      'L2.2',
      'L2.3',
      'L2.4',
      'C2.1',
      'C2.2',
      'C2.3',
      'C2.4',
    ]);
    expect(data.simVersion).toBe('1.8.16.0');
  });

  it('turns a lesson into sim checks, one group per section and overall checks', () => {
    const lesson = data.modules[0]!.items[0]!;
    expect(lesson.type).toBe('lesson');
    expect(lesson.groups[0]!.title).toBe('Sim checks and open markers');
    expect(lesson.groups[0]!.checks.map((c) => c.label)).toEqual([
      'Check the widget',
      'Check the links',
    ]);
    const sections = lesson.groups.filter((g) => g.reading);
    expect(sections[0]!.title).toBe('The four forces');
    expect(sections[0]!.reading).toContain('<div class="quiz">');
    expect(sections[0]!.checks[0]!.id).toBe('L2.1:the-four-forces:text');
    expect(sections[0]!.checks.some((c) => c.id === 'L2.1:the-four-forces:quiz:l2-1-q1')).toBe(
      true,
    );
    expect(lesson.groups.at(-1)!.id).toBe('overall');
    expect(lesson.groups.at(-1)!.checks.some((c) => c.id === 'L2.1:overall:numbers')).toBe(true);
  });

  it('keeps open verify markers with their line numbers', () => {
    const l22 = data.modules[0]!.items[1]!;
    const marker = l22.groups[0]!.checks[0]!;
    expect(marker.id).toMatch(/^L2\.2:marker:/);
    expect(marker.line).toBe(48);
    expect(marker.label).toMatch(/^Sim check: add a screenshot/);
  });

  it('turns a challenge into setup, procedure, criteria and flight-record groups', () => {
    const c21 = data.modules[0]!.items.find((i) => i.id === 'C2.1')!;
    expect(c21.type).toBe('challenge');
    expect(c21.groups.map((g) => g.id)).toEqual([
      'setup',
      'procedure',
      'criteria',
      'extras',
      'flight',
    ]);
    const setup = c21.groups[0]!.checks;
    expect(setup[0]!.label).toBe('Start: AIR_START at KLVK');
    expect(setup[0]!.detail).toContain('In the air');
    expect(setup.some((c) => c.id === 'C2.1:setup:weather' && c.detail!.includes('Calm'))).toBe(
      true,
    );
    expect(c21.groups[1]!.checks).toHaveLength(5);
    expect(c21.groups[2]!.checks.map((c) => c.id)).toEqual([
      'C2.1:criterion:altitude',
      'C2.1:criterion:heading',
      'C2.1:criterion:airspeed',
      'C2.1:criterion:hands-off',
      'C2.1:criterion:lookout',
    ]);
    expect(c21.groups[2]!.checks[0]!.detail).toContain('Within ±100 ft');
  });

  it('gives every check a unique id', () => {
    const ids = data.modules.flatMap((m) =>
      m.items.flatMap((i) => i.groups.flatMap((g) => g.checks.map((c) => c.id))),
    );
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('renderApp and appBundleFiles', () => {
  it('embeds the data safely and builds a launcher bundle', () => {
    const data = {
      generatedAt: '2026-10-22',
      simVersion: '1.8.16.0',
      modules: [
        {
          code: 'M2',
          title: 'T',
          summary: '</script><script>alert(1)</script>',
          items: [],
        },
      ],
    };
    const page = renderApp('<script>__LTF_DATA__</script>', data);
    expect(page).not.toContain('</script><script>');
    expect(page).toContain('<\\/script>');
    const files = appBundleFiles('LTF Verifier', page, [
      { path: 'fonts/a.woff2', content: Buffer.from('font') },
    ]);
    expect(files.map((f) => f.path)).toEqual([
      'LTF Verifier.app/Contents/Info.plist',
      'LTF Verifier.app/Contents/MacOS/launcher',
      'LTF Verifier.app/Contents/Resources/index.html',
      'LTF Verifier.app/Contents/Resources/fonts/a.woff2',
    ]);
    expect(files[1]!.executable).toBe(true);
    expect(files[0]!.content).toContain('<key>CFBundleExecutable</key><string>launcher</string>');
  });
});
