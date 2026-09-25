import { describe, expect, it } from 'vitest';
import { CHART, HOTSPOTS, QUESTIONS } from './model';

describe('W10 sectional legend data', () => {
  it('has unique hotspots inside the chart', () => {
    const ids = HOTSPOTS.map((h) => h.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const { id, rect } of HOTSPOTS) {
      expect(rect.x, id).toBeGreaterThanOrEqual(0);
      expect(rect.y, id).toBeGreaterThanOrEqual(0);
      expect(rect.x + rect.width, id).toBeLessThanOrEqual(CHART.width);
      expect(rect.y + rect.height, id).toBeLessThanOrEqual(CHART.height);
    }
  });

  it('covers the symbols Section 16.11 lists', () => {
    const ids = HOTSPOTS.map((h) => h.id);
    for (const id of [
      'lvk-airport',
      'lvk-data-block',
      'mef',
      'obstacle',
      'vor',
      'isogonic',
      'class-d',
      'class-b-boundary',
      'city',
    ]) {
      expect(ids).toContain(id);
    }
  });

  it('asks questions whose answers exist', () => {
    const ids = new Set(HOTSPOTS.map((h) => h.id));
    for (const q of QUESTIONS) {
      expect(q.targets.length, q.id).toBeGreaterThan(0);
      for (const t of q.targets) expect(ids.has(t), t).toBe(true);
    }
    expect(QUESTIONS[0]!.targets).toEqual(['tcy-airport', 'private-airport']);
  });
});
