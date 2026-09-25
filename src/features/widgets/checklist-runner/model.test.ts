import { describe, expect, it } from 'vitest';
import { currentItem, emptyRunner, isTicked, progress, toggle, untickLast } from './model';

const ids = ['brakes', 'mixture', 'master'];

describe('checklist runner model', () => {
  it('ticks and unticks items with timestamps', () => {
    const at = new Date('2026-05-15T17:00:00Z');
    const s1 = toggle(emptyRunner, 'mixture', at);
    expect(s1.ticks).toEqual([{ itemId: 'mixture', at: '2026-05-15T17:00:00.000Z' }]);
    expect(isTicked(s1, 'mixture')).toBe(true);
    expect(toggle(s1, 'mixture').ticks).toEqual([]);
  });

  it('highlights the first unticked item as current', () => {
    const s = toggle(emptyRunner, 'brakes');
    expect(currentItem(ids, s)).toBe('mixture');
    expect(currentItem(ids, toggle(toggle(s, 'mixture'), 'master'))).toBeNull();
  });

  it('unticks the most recent item', () => {
    const s = toggle(toggle(emptyRunner, 'brakes'), 'master');
    expect(untickLast(s).ticks.map((t) => t.itemId)).toEqual(['brakes']);
    expect(untickLast(emptyRunner).ticks).toEqual([]);
  });

  it('reports progress', () => {
    expect(progress(ids, emptyRunner)).toEqual({ done: 0, total: 3, complete: false });
    const all = ids.reduce((s, id) => toggle(s, id), emptyRunner);
    expect(progress(ids, all)).toEqual({ done: 3, total: 3, complete: true });
  });
});
