import mongoose from 'mongoose';
import { describe, expect, it } from 'vitest';
import { ContentReleaseModel, LessonModel } from '@server/models/content.js';
import { useTestDb } from '../../server/tests/setup.js';
import { loadContent } from '../lib/loadContent.js';
import { contentHash, seedContent } from '../lib/seedContent.js';
import { validateContent } from '../lib/validateContent.js';

useTestDb();

function bundle() {
  const b = loadContent();
  validateContent(b);
  return b;
}

async function lessonDoc(slug: string) {
  return LessonModel.findOne({ slug }).lean<Record<string, unknown>>();
}

describe('seedContent', () => {
  it('creates everything on the first run and records a release', async () => {
    const summary = await seedContent(bundle(), { includeDrafts: true, gitSha: 'abc123' });
    expect(summary.updated).toEqual([]);
    expect(summary.created).toContain('lessons:l1-4-speeds-limits-and-checklists');
    const lesson = await lessonDoc('l1-4-speeds-limits-and-checklists');
    expect(lesson).toMatchObject({
      version: 1,
      published: true,
      draft: true,
      moduleSlug: 'm1-meet-the-skyhawk',
    });
    expect((lesson?.blocks as unknown[]).length).toBeGreaterThan(5);
    expect(lesson?.glossaryTerms).toEqual(expect.arrayContaining(['vy', 'v-speeds', 'checklist']));
    const release = await ContentReleaseModel.findById(summary.releaseId).lean<
      Record<string, unknown>
    >();
    expect(release).toMatchObject({ gitSha: 'abc123', includeDrafts: true });
    expect((release?.counts as Record<string, number>).glossary).toBeGreaterThanOrEqual(150);
  });

  it('is idempotent: a second run changes nothing and bumps no versions', async () => {
    await seedContent(bundle(), { includeDrafts: true });
    const second = await seedContent(bundle(), { includeDrafts: true });
    expect(second.created).toEqual([]);
    expect(second.updated).toEqual([]);
    expect(second.unpublished).toEqual([]);
    expect((await lessonDoc('l1-4-speeds-limits-and-checklists'))?.version).toBe(1);
    expect(await ContentReleaseModel.countDocuments()).toBe(2);
  });

  it('bumps only the lesson that changed', async () => {
    await seedContent(bundle(), { includeDrafts: true });
    const changed = bundle();
    const lesson = changed.lessons.find(
      (l) => l.frontmatter.slug === 'l1-4-speeds-limits-and-checklists',
    )!;
    lesson.frontmatter = { ...lesson.frontmatter, summary: 'A new summary.' };
    const summary = await seedContent(changed, { includeDrafts: true });
    expect(summary.updated).toEqual(['lessons:l1-4-speeds-limits-and-checklists']);
    expect(await lessonDoc('l1-4-speeds-limits-and-checklists')).toMatchObject({
      version: 2,
      summary: 'A new summary.',
    });
  });

  it('unpublishes lessons removed from the repo instead of deleting them', async () => {
    const full = bundle();
    await seedContent(full, { includeDrafts: true });
    const without = bundle();
    without.lessons = [];
    const summary = await seedContent(without, { includeDrafts: true });
    expect([...summary.unpublished].sort()).toEqual(
      full.lessons.map((l) => `lessons:${l.frontmatter.slug}`).sort(),
    );
    expect(summary.unpublished).toContain('lessons:l1-4-speeds-limits-and-checklists');
    expect(await lessonDoc('l1-4-speeds-limits-and-checklists')).toMatchObject({
      published: false,
      version: 1,
    });
  });

  it('keeps drafts unpublished unless drafts are included, without bumping versions', async () => {
    await seedContent(bundle());
    expect(await lessonDoc('l1-4-speeds-limits-and-checklists')).toMatchObject({
      published: false,
      draft: true,
    });
    const withDrafts = await seedContent(bundle(), { includeDrafts: true });
    expect(withDrafts.updated).toEqual([]);
    expect(await lessonDoc('l1-4-speeds-limits-and-checklists')).toMatchObject({
      published: true,
      version: 1,
    });
  });

  it('writes nothing on a dry run', async () => {
    const summary = await seedContent(bundle(), { dryRun: true });
    expect(summary.created.length).toBeGreaterThan(100);
    expect(summary.releaseId).toBeNull();
    const collections = await mongoose.connection.db!.listCollections().toArray();
    for (const { name } of collections) {
      expect(await mongoose.connection.db!.collection(name).countDocuments()).toBe(0);
    }
  });

  it('refuses to seed content with validation errors', async () => {
    const broken = bundle();
    broken.issues.error('content/x.yaml', 'Broken');
    await expect(seedContent(broken)).rejects.toThrow('1 validation error');
  });

  it('ignores publication status in the content hash', () => {
    const doc = { slug: 'a', title: 'A', published: true, draft: false };
    expect(contentHash(doc)).toBe(contentHash({ ...doc, published: false, draft: true }));
    expect(contentHash(doc)).not.toBe(contentHash({ ...doc, title: 'B' }));
  });
});
