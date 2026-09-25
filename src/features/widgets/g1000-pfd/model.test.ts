import { describe, expect, it } from 'vitest';
import {
  ALL_REGIONS,
  DIRECT_TO_STEPS,
  NAV_REGIONS,
  PFD_REGIONS,
  QUESTIONS,
  SCREEN,
  threeDigits,
  turnTrend,
  VIEW,
} from './model';

describe('G1000 PFD model', () => {
  it('has unique regions that fit inside the drawing', () => {
    const ids = ALL_REGIONS.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const { rect, id } of ALL_REGIONS) {
      expect(rect.x, id).toBeGreaterThanOrEqual(0);
      expect(rect.y, id).toBeGreaterThanOrEqual(0);
      expect(rect.x + rect.width, id).toBeLessThanOrEqual(VIEW.width);
      expect(rect.y + rect.height, id).toBeLessThanOrEqual(VIEW.height);
    }
  });

  it('covers every region the Section 16.4 spec and L1.2 outline name', () => {
    const ids = PFD_REGIONS.map((r) => r.id);
    for (const id of [
      'attitude',
      'airspeed',
      'altitude',
      'baro',
      'vsi',
      'hsi',
      'turn-rate',
      'slip-skid',
      'nav-box',
      'com-box',
      'xpdr',
      'softkeys',
      'wind',
    ] as const) {
      expect(ids).toContain(id);
    }
    expect(NAV_REGIONS.map((r) => r.id)).toEqual(
      expect.arrayContaining(['direct-to', 'fpl', 'nrst', 'cdi', 'fms']),
    );
  });

  it('puts the screen regions on the screen', () => {
    const screenOnly = PFD_REGIONS.filter(
      (r) => !['softkeys', 'hdg-knob', 'crs-baro-knob'].includes(r.id),
    );
    for (const { rect, id } of screenOnly) {
      expect(rect.x, id).toBeGreaterThanOrEqual(SCREEN.x);
      expect(rect.x + rect.width, id).toBeLessThanOrEqual(SCREEN.x + SCREEN.width);
      expect(rect.y + rect.height, id).toBeLessThanOrEqual(SCREEN.y + SCREEN.height);
    }
  });

  it('asks about regions that exist', () => {
    const ids = PFD_REGIONS.map((r) => r.id);
    for (const q of QUESTIONS) expect(ids).toContain(q.target);
    expect(QUESTIONS.map((q) => q.target)).toEqual(expect.arrayContaining(['vsi', 'baro']));
  });

  it('walks through Direct-To and ends on GPS with the route active', () => {
    expect(DIRECT_TO_STEPS[0]!.screen).toMatchObject({ route: false, cdi: 'VOR1' });
    const last = DIRECT_TO_STEPS.at(-1)!.screen;
    expect(last).toMatchObject({ route: true, cdi: 'GPS', window: 'closed', heading: 87 });
    const highlights = DIRECT_TO_STEPS.map((s) => s.highlight);
    expect(highlights).toEqual([null, 'direct-to', 'fms', 'ent', 'ent', 'cdi', 'hsi']);
  });

  it('draws a 6-second trend line: standard rate reaches the 18° mark', () => {
    // Standard-rate bank at 110 kt is about 16.7°.
    expect(turnTrend(16.7, 110)).toBeCloseTo(18, 0);
    expect(turnTrend(0, 110)).toBe(0);
    expect(turnTrend(-10, 110)).toBeLessThan(0);
    expect(turnTrend(60, 110)).toBe(30);
  });

  it('formats headings with three digits, north as 360', () => {
    expect(threeDigits(0)).toBe('360');
    expect(threeDigits(30)).toBe('030');
    expect(threeDigits(-3)).toBe('357');
    expect(threeDigits(87.4)).toBe('087');
  });
});
