import { describe as suite, expect, it } from 'vitest';
import { airspaceProfileFixture as p } from '@/test/fixtures';
import {
  classAt,
  describe,
  inModeCVeil,
  placeText,
  planRings,
  QUESTIONS,
  terrainAt,
} from './model';

suite('W11 airspace model', () => {
  it('interpolates the terrain', () => {
    expect(terrainAt(p, 0)).toBe(0);
    expect(terrainAt(p, 17.5)).toBeCloseTo(755);
    expect(terrainAt(p, 100)).toBe(300);
  });

  it('finds the most restrictive class at a point', () => {
    expect(classAt(p, 10, 500).cls).toBe('B'); // surface area
    expect(classAt(p, 10, 10000).cls).toBe('B'); // up to and including the ceiling
    expect(classAt(p, 10, 10500).cls).toBe('E'); // above Class B
    expect(classAt(p, 20, 2500).cls).toBe('E'); // under the shelf, above 700 AGL
    expect(classAt(p, 20, 3000).cls).toBe('B'); // at the shelf floor
    expect(classAt(p, 2, 300).cls).toBe('G'); // below 700 AGL
    expect(classAt(p, 34, 2000).cls).toBe('D');
    expect(classAt(p, 34, 3000).cls).toBe('E');
    // The Class E floor follows the terrain: 700 ft above 1,500 ft hills.
    expect(classAt(p, 25, 2100).cls).toBe('G');
    expect(classAt(p, 25, 2300).cls).toBe('E');
  });

  it('describes the position with its requirement and the Mode C veil', () => {
    const text = describe(p, 10, 2000);
    expect(text).toContain('You are in Class B');
    expect(text).toContain('An ATC clearance.');
    expect(text).toContain('Mode C veil');
    expect(inModeCVeil(p, 39)).toBe(true);
    expect(placeText(p, 34.5)).toBe('over Charlie');
    expect(placeText(p, 20)).toBe('20.0 nm along the line');
  });

  it('builds plan-view rings, largest Class B floor first', () => {
    const rings = planRings(p);
    expect(rings.map((r) => r.label)).toEqual(['30', 'SFC', 'D 29']);
    expect(rings[0]).toMatchObject({ cls: 'B', cx: 10, r: 15 });
  });

  it('checks quiz answers', () => {
    const q = Object.fromEntries(QUESTIONS.map((x) => [x.id, x.check]));
    expect(q['w11-class-g']!(p, 2, 300)).toBe(true);
    expect(q['w11-clearance']!(p, 10, 2000)).toBe(true);
    expect(q['w11-tower']!(p, 34, 1500)).toBe(true);
    expect(q['w11-under-shelf']!(p, 20, 2500)).toBe(true);
    expect(q['w11-under-shelf']!(p, 20, 3500)).toBe(false);
    expect(q['w11-class-e']!(p, 20, 2500)).toBe(true);
  });
});
