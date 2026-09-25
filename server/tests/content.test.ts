import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';
import { seedFixtureContent } from './contentFixture.js';
import { buildApp, registerUser } from './helpers.js';
import { useTestDb } from './setup.js';

useTestDb();
const app = buildApp();

beforeEach(async () => {
  await seedFixtureContent();
});

describe('GET /modules', () => {
  it('lists published modules with published lesson and challenge summaries, without blocks', async () => {
    const res = await request(app).get('/api/v1/modules').expect(200);
    expect(res.body.modules.map((m: { slug: string }) => m.slug)).toEqual(['m1-basics', 'm2-next']);
    const [m1, m2] = res.body.modules;
    expect(m1.lessons.map((l: { slug: string }) => l.slug)).toEqual([
      'l1-1-first-lesson',
      'l1-2-second-lesson',
    ]);
    expect(m1.challenges[0]).toMatchObject({
      slug: 'c1-1-first-challenge',
      type: 'landing',
      airportIcao: 'KLVK',
      draft: false,
    });
    expect(m2.lessons).toEqual([]);
    expect(m2.challenges).toEqual([]);
    expect(JSON.stringify(res.body)).not.toContain('"blocks"');
    expect(JSON.stringify(res.body)).not.toContain('contentHash');
  });

  it('returns one module or 404', async () => {
    const res = await request(app).get('/api/v1/modules/m1-basics').expect(200);
    expect(res.body.module.title).toBe('Basics');
    const missing = await request(app).get('/api/v1/modules/m9-nope').expect(404);
    expect(missing.body.error.code).toBe('NOT_FOUND');
    await request(app).get('/api/v1/modules/Bad_Slug!').expect(400);
  });
});

describe('GET /lessons/:slug', () => {
  it('returns blocks, expanded references and navigation', async () => {
    const res = await request(app).get('/api/v1/lessons/l1-1-first-lesson').expect(200);
    const { lesson } = res.body;
    expect(lesson).toMatchObject({
      slug: 'l1-1-first-lesson',
      code: 'L1.1',
      version: 1,
      draft: false,
      module: { slug: 'm1-basics', code: 'M1', title: 'Basics' },
      sections: [{ id: 'getting-started', title: 'Getting started' }],
      widgets: ['checklist-runner'],
      navigation: { previous: null, next: { slug: 'l1-2-second-lesson' } },
      lastVerifiedAt: '2026-09-01',
    });
    expect(lesson.blocks.map((b: { type: string }) => b.type)).toEqual([
      'heading',
      'markdown',
      'quiz',
      'checklist',
    ]);
    expect(lesson.blocks[1].markdown).toContain('74 KIAS');
    expect(lesson.resources[0]).toMatchObject({
      slug: 'phak-ch5',
      url: expect.stringContaining('faa.gov'),
    });
    expect(lesson.challenges[0]).toMatchObject({ slug: 'c1-1-first-challenge' });
    expect(lesson.checklists[0]).toMatchObject({
      slug: 'before-landing',
      items: expect.any(Array),
    });
    expect(lesson.glossaryTerms.map((t: { slug: string }) => t.slug)).toEqual(
      expect.arrayContaining(['vy', 'stall', 'critical-angle-of-attack']),
    );
  });

  it('links previous and next across the curriculum', async () => {
    const res = await request(app).get('/api/v1/lessons/l1-2-second-lesson').expect(200);
    expect(res.body.lesson.navigation).toMatchObject({
      previous: { slug: 'l1-1-first-lesson' },
      next: null,
    });
  });

  it('returns 404 for unknown and unpublished lessons', async () => {
    await request(app).get('/api/v1/lessons/l9-9-nope').expect(404);
    await request(app).get('/api/v1/lessons/l2-1-draft-lesson').expect(404);
  });

  it('serves drafts, marked as drafts, when they are seeded for a preview', async () => {
    await seedFixtureContent({ includeDrafts: true });
    const res = await request(app).get('/api/v1/lessons/l2-1-draft-lesson').expect(200);
    expect(res.body.lesson.draft).toBe(true);
  });
});

describe('GET /challenges', () => {
  it('lists published challenges in curriculum order and filters', async () => {
    await seedFixtureContent({ includeDrafts: true });
    const all = await request(app).get('/api/v1/challenges').expect(200);
    expect(all.body.challenges.map((c: { slug: string }) => c.slug)).toEqual([
      'c1-1-first-challenge',
      'c2-1-bonus-draft',
    ]);
    const filtered = async (query: string) =>
      (await request(app).get(`/api/v1/challenges?${query}`).expect(200)).body.challenges.map(
        (c: { slug: string }) => c.slug,
      );
    expect(await filtered('module=m2-next')).toEqual(['c2-1-bonus-draft']);
    expect(await filtered('type=landing')).toEqual(['c1-1-first-challenge']);
    expect(await filtered('difficulty=1')).toEqual(['c2-1-bonus-draft']);
    expect(await filtered('priority=P0')).toEqual(['c1-1-first-challenge']);
    expect(await filtered('priority=P0&type=manoeuvre')).toEqual([]);
    await request(app).get('/api/v1/challenges?type=spaceflight').expect(400);
  });

  it('returns a challenge with its setup resolved from presets', async () => {
    const res = await request(app).get('/api/v1/challenges/c1-1-first-challenge').expect(200);
    const { challenge } = res.body;
    expect(challenge.setup).toMatchObject({
      airport: { icao: 'KLVK', name: 'Livermore Municipal' },
      startState: { id: 'RUNWAY', label: 'On the runway' },
      startDetails: { runway: '25R' },
      weather: { preset: 'WX_CALM', label: 'Calm and clear', altimeterInHg: 29.92 },
      time: { local: '10:00', date: '15 May' },
      load: { id: 'LOAD_SOLO', label: 'Solo' },
    });
    expect(challenge.criteria).toHaveLength(3);
    expect(challenge.lessons[0]).toMatchObject({ slug: 'l1-1-first-lesson' });
    expect(challenge.version).toBe(1);
    await request(app).get('/api/v1/challenges/c2-1-bonus-draft').expect(404);
  });
});

describe('reference endpoints', () => {
  it('returns aircraft reference data', async () => {
    const res = await request(app).get('/api/v1/aircraft/c172').expect(200);
    expect(res.body.aircraft.vspeeds.vy.kias).toBe(74);
    expect(res.body.aircraft.arcs.green).toEqual([48, 129]);
    await request(app).get('/api/v1/aircraft/a380').expect(404);
  });

  it('returns the W11 airspace profile', async () => {
    const res = await request(app).get('/api/v1/airspace-profiles/bay-area').expect(200);
    expect(res.body.profile).toMatchObject({ slug: 'bay-area', verified: false, version: 1 });
    expect(res.body.profile.volumes.some((v: { class: string }) => v.class === 'B')).toBe(true);
    expect(res.body.profile.requirements.G.entry).toBe('None.');
    expect(JSON.stringify(res.body)).not.toContain('contentHash');
    await request(app).get('/api/v1/airspace-profiles/nowhere').expect(404);
  });

  it('returns checklists', async () => {
    const list = await request(app).get('/api/v1/checklists').expect(200);
    expect(list.body.checklists[0].slug).toBe('preflight');
    const one = await request(app).get('/api/v1/checklists/before-landing').expect(200);
    expect(one.body.checklist.mode).toBe('do-verify');
  });

  it('returns airports with the challenges flown there', async () => {
    const list = await request(app).get('/api/v1/airports').expect(200);
    expect(list.body.airports[0].icao).toBe('C83');
    const one = await request(app).get('/api/v1/airports/klvk').expect(200);
    expect(one.body.airport.name).toBe('Livermore Municipal');
    expect(one.body.challenges.map((c: { slug: string }) => c.slug)).toEqual([
      'c1-1-first-challenge',
    ]);
    await request(app).get('/api/v1/airports/KXYZ').expect(404);
  });

  it('returns the glossary with published lessons only', async () => {
    const res = await request(app).get('/api/v1/glossary').expect(200);
    expect(res.body.terms.length).toBeGreaterThan(150);
    const vy = res.body.terms.find((t: { slug: string }) => t.slug === 'vy');
    expect(vy.lessons.map((l: { slug: string }) => l.slug).sort()).toEqual([
      'l1-1-first-lesson',
      'l1-2-second-lesson',
    ]);
    expect(vy.lessons[0].href).toMatch(/^\/learn\/m1-basics\//);
  });

  it('filters resources by topic and type', async () => {
    const all = await request(app).get('/api/v1/resources').expect(200);
    expect(all.body.resources.length).toBeGreaterThan(50);
    const charts = await request(app).get('/api/v1/resources?type=chart').expect(200);
    expect(charts.body.resources.every((r: { type: string }) => r.type === 'chart')).toBe(true);
    const radio = await request(app).get('/api/v1/resources?topic=radio').expect(200);
    expect(
      radio.body.resources.every((r: { topics: string[] }) => r.topics.includes('radio')),
    ).toBe(true);
  });
});

describe('caching', () => {
  it('sets public cache headers and an ETag tied to the content release', async () => {
    const first = await request(app).get('/api/v1/modules').expect(200);
    expect(first.headers['cache-control']).toBe(
      'public, max-age=300, stale-while-revalidate=86400',
    );
    const etag = first.headers.etag as string;
    expect(etag).toMatch(/^W\/"[0-9a-f]{24}-/);
    await request(app).get('/api/v1/modules').set('If-None-Match', etag).expect(304);
    // A different URL has a different ETag.
    const other = await request(app).get('/api/v1/glossary');
    expect(other.headers.etag).not.toBe(etag);
    // A new seed run invalidates it.
    await seedFixtureContent();
    const after = await request(app).get('/api/v1/modules').set('If-None-Match', etag).expect(200);
    expect(after.headers.etag).not.toBe(etag);
  });

  it('never sends cookies with cacheable content', async () => {
    const agent = await registerUser(app);
    const res = await agent.get('/api/v1/modules').expect(200);
    expect(res.headers['set-cookie']).toBeUndefined();
  });
});
