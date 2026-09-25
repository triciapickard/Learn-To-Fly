import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { parseLessonSource } from '../lib/parseLesson.js';
import { lessonSource, testContext } from './helpers.js';

const FILE = 'content/lessons/m2-fundamentals/l2-4.md';
// lessonSource() writes 10 frontmatter keys between two "---" lines, so the body starts
// on line 13.
const BODY_LINE = 13;

function parse(body: string, frontmatter?: Record<string, unknown>, ctxOverrides = {}) {
  const ctx = testContext(ctxOverrides);
  const lesson = parseLessonSource(lessonSource(body, frontmatter), FILE, ctx);
  return { lesson, issues: ctx.issues };
}

describe('sections and headings', () => {
  it('turns ## headings into sections and heading blocks', () => {
    const { lesson, issues } = parse(
      '## How an airplane turns\n\nText.\n\n## Adverse yaw\n\nMore.\n\n## Adverse yaw\n\nAgain.',
    );
    expect(issues.errors).toEqual([]);
    expect(lesson?.sections).toEqual([
      { id: 'how-an-airplane-turns', title: 'How an airplane turns' },
      { id: 'adverse-yaw', title: 'Adverse yaw' },
      { id: 'adverse-yaw-1', title: 'Adverse yaw' },
    ]);
    expect(lesson?.blocks.slice(0, 2)).toEqual([
      { type: 'heading', id: 'how-an-airplane-turns', text: 'How an airplane turns', level: 2 },
      { type: 'markdown', markdown: 'Text.' },
    ]);
  });

  it('rejects # headings and lessons without sections', () => {
    const { issues } = parse('# Title\n\nText.');
    expect(issues.errors.map((e) => e.message)).toEqual([
      'Use ## for sections; the lesson title comes from the frontmatter',
      'A lesson needs at least one ## section',
    ]);
    expect(issues.errors[0]!.line).toBe(BODY_LINE);
  });

  it('keeps ### headings inside markdown blocks', () => {
    const { lesson } = parse('## A\n\n### Detail\n\nText.');
    expect(lesson?.blocks[1]).toEqual({ type: 'markdown', markdown: '### Detail\n\nText.' });
  });
});

describe('tokens and internal links', () => {
  it('replaces aviation tokens', () => {
    const { lesson, issues } = parse(
      '## A\n\nClimb at {{vspeed.vy}} and approach at {{vspeed.approachFlaps30}}, cruise {{aircraft.cruiseTas}}.',
    );
    expect(issues.errors).toEqual([]);
    expect(lesson?.blocks[1]).toEqual({
      type: 'markdown',
      markdown: 'Climb at 74 KIAS and approach at 60–70 KIAS, cruise 120 KTAS.',
    });
  });

  it('reports unknown tokens with the line number', () => {
    const { issues } = parse('## A\n\nLine one.\n\nClimb at {{vspeed.vq}}.');
    expect(issues.errors[0]).toMatchObject({
      message: 'Unknown token {{vspeed.vq}}',
      line: BODY_LINE + 4,
      file: FILE,
    });
  });

  it('resolves [[slug]] links and reports broken ones', () => {
    const { lesson, issues } = parse(
      '## Fly it\n\nTry [[c2-3-turns-to-headings]], then [[c9-9-nope]].',
    );
    expect(lesson?.blocks[1]).toMatchObject({
      markdown: expect.stringContaining(
        '[C2.3 Turns to headings](/challenges/c2-3-turns-to-headings)',
      ),
    });
    expect(issues.errors[0]).toMatchObject({
      message: expect.stringContaining('Broken internal link [[c9-9-nope]]'),
      line: BODY_LINE + 2,
    });
  });
});

describe('callouts', () => {
  it('parses each callout type and flags verify callouts', () => {
    const { lesson, issues } = parse(
      ':::callout{type="sim"}\nAuto-rudder helps.\n:::\n\n## A\n\n:::callout{type="verify"}\nCheck this.\n:::',
    );
    expect(issues.errors).toEqual([]);
    expect(lesson?.blocks[0]).toEqual({
      type: 'callout',
      calloutType: 'sim',
      markdown: 'Auto-rudder helps.',
    });
    expect(lesson?.hasVerifyCallout).toBe(true);
  });

  it('rejects unknown callout types', () => {
    const { issues } = parse('## A\n\n:::callout{type="warning"}\nX\n:::');
    expect(issues.errors[0]).toMatchObject({
      message: expect.stringContaining('Callout type "warning"'),
      line: BODY_LINE + 2,
    });
  });
});

describe('quizzes', () => {
  const single = `## Coordination

:::quiz{id="l2-4-q1" type="single"}
The ball is to the right in a right turn. Which rudder do you press?

- [ ] Left rudder
- [x] Right rudder
- [ ] No rudder

---

"Step on the ball".
:::`;

  it('parses a single-answer question', () => {
    const { lesson, issues } = parse(single);
    expect(issues.errors).toEqual([]);
    expect(lesson?.blocks[1]).toEqual({
      type: 'quiz',
      id: 'l2-4-q1',
      quizType: 'single',
      prompt: 'The ball is to the right in a right turn. Which rudder do you press?',
      options: [
        { id: 'a', text: 'Left rudder' },
        { id: 'b', text: 'Right rudder' },
        { id: 'c', text: 'No rudder' },
      ],
      correct: ['b'],
      explanation: '"Step on the ball".',
      sectionId: 'coordination',
    });
  });

  it('parses multi, numeric and order questions', () => {
    const { lesson, issues } = parse(`## A

:::quiz{id="m" type="multi"}
Which are left-turning tendencies?

- [x] Torque
- [x] P-factor
- [ ] Ground effect

---

Torque and P-factor yaw the airplane left.
:::

:::quiz{id="n" type="numeric" answer="10" tolerance="1" unit="kt"}
What is the crosswind component?

---

About 10 kt.
:::

:::quiz{id="o" type="order"}
Put the go-around steps in order.

1. Full power
2. Flaps 20
3. Climb at 60 KIAS

---

Power first, then clean up.
:::`);
    expect(issues.errors).toEqual([]);
    const quizzes = lesson!.blocks.filter((b) => b.type === 'quiz');
    expect(quizzes[0]).toMatchObject({ quizType: 'multi', correct: ['a', 'b'] });
    expect(quizzes[1]).toMatchObject({
      quizType: 'numeric',
      answer: 10,
      tolerance: 1,
      unit: 'kt',
      prompt: 'What is the crosswind component?',
    });
    expect(quizzes[2]).toMatchObject({
      quizType: 'order',
      options: [{ text: 'Full power' }, { text: 'Flaps 20' }, { text: 'Climb at 60 KIAS' }],
    });
  });

  it.each([
    [single.replace('- [ ] Left', '- [x] Left'), 'exactly one correct option'],
    [single.replace('\n---\n\n"Step on the ball".\n', '\n'), 'needs a "---" line'],
    [
      single.replace('\n---\n\n"Step on the ball".\n', '\n---\n'),
      'Every question needs an explanation',
    ],
    [single.replace('- [ ] Left rudder', '- Left rudder'), 'write every option as'],
    [single.replace('type="single"', 'type="essay"'), 'unknown type "essay"'],
    [single.replace('type="single"', 'type="numeric"'), 'Numeric questions need a tolerance'],
  ])('reports malformed quizzes (%#)', (body, message) => {
    const { issues } = parse(body);
    expect(issues.errors[0]).toMatchObject({
      message: expect.stringContaining(message),
      line: BODY_LINE + 2,
    });
  });
});

describe('widgets, videos and checklists', () => {
  it('parses leaf directives and records widgets', () => {
    const { lesson, issues } = parse(
      '## A\n\n::widget{name="turn-coordinator" mode="explore"}\n\n::video{provider="youtube" id="abc123XYZ" title="Turns"}\n\n::checklist{slug="before-landing"}',
    );
    expect(issues.errors).toEqual([]);
    expect(lesson?.blocks.slice(1)).toEqual([
      { type: 'widget', name: 'turn-coordinator', props: { mode: 'explore' } },
      { type: 'video', provider: 'youtube', videoId: 'abc123XYZ', title: 'Turns', captions: true },
      { type: 'checklist', slug: 'before-landing' },
    ]);
    expect(lesson?.widgets.sort()).toEqual(['checklist-runner', 'turn-coordinator']);
  });

  it.each([
    ['::widget{name="flux-capacitor"}', 'Unknown widget "flux-capacitor"'],
    ['::checklist{slug="nope"}', 'Unknown checklist "nope"'],
    ['::video{id="abc123"}', 'Video needs provider="youtube"'],
    ['::sparkle{}', 'Unknown directive "::sparkle"'],
    [':::box\nx\n:::', 'Unknown container directive ":::box"'],
  ])('reports %s', (directive, message) => {
    const { issues } = parse(`## A\n\n${directive}`);
    expect(issues.errors[0]).toMatchObject({
      message: expect.stringContaining(message),
      line: BODY_LINE + 2,
    });
  });

  it('checks frontmatter widgets match the directives used', () => {
    const { issues } = parse('## A\n\n::widget{name="turn-coordinator"}', {
      widgets: ['airspeed-indicator'],
    });
    expect(issues.errors[0]!.message).toContain('do not match');
  });
});

describe('images', () => {
  const assetsDir = mkdtempSync(path.join(tmpdir(), 'ltf-assets-'));
  mkdirSync(path.join(assetsDir, 'm2-fundamentals'));
  // A 3×2 transparent PNG.
  writeFileSync(
    path.join(assetsDir, 'm2-fundamentals', 'lift.png'),
    Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAEUlEQVR4nGNgYGD4z8DAwMAAAAwAAc5V7TUAAAAASUVORK5CYII=',
      'base64',
    ),
  );

  it('reads dimensions and keeps alt text and caption', () => {
    const { lesson, issues } = parse(
      '## A\n\n![Lift vector split in a bank](lift.png "Part of the lift turns you.")',
      {},
      { assetsDir },
    );
    expect(issues.errors).toEqual([]);
    expect(lesson?.blocks[1]).toEqual({
      type: 'image',
      src: 'm2-fundamentals/lift.png',
      alt: 'Lift vector split in a bank',
      caption: 'Part of the lift turns you.',
      width: 3,
      height: 2,
    });
  });

  it('reports missing files and short alt text', () => {
    const { issues } = parse(
      '## A\n\n![Lift](lift.png)\n\n![A missing picture here](missing.webp)',
      {},
      { assetsDir },
    );
    expect(issues.errors.map((e) => e.message)).toEqual([
      'Image "lift.png" needs alt text of at least 10 characters',
      expect.stringContaining('Image not found'),
    ]);
  });
});

describe('frontmatter and warnings', () => {
  it('reports invalid frontmatter fields', () => {
    const { lesson, issues } = parse('## A', { code: 'Lesson 2', objectives: ['Only one'] });
    expect(lesson).toBeNull();
    expect(issues.errors.map((e) => e.message)).toEqual([
      expect.stringContaining('frontmatter code'),
      expect.stringContaining('frontmatter objectives'),
    ]);
  });

  it('warns when a section runs over 300 words without a visual', () => {
    const words = Array.from({ length: 310 }, () => 'word').join(' ');
    const { issues } = parse(`## Long\n\n${words}`);
    expect(issues.warnings[0]!.message).toContain('more than 300 words');
  });
});
