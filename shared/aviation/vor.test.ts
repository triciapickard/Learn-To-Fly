import { describe, expect, it } from 'vitest';
import { centeringObs, cdi, distanceNm, drift, isReverseSensing, move, radialOf } from './vor.js';

describe('VOR geometry (Section 16.10)', () => {
  it('finds the radial in every quadrant', () => {
    expect(radialOf({ x: 0, y: 10 })).toBeCloseTo(0);
    expect(radialOf({ x: 5, y: 5 })).toBeCloseTo(45);
    expect(radialOf({ x: 10, y: 0 })).toBeCloseTo(90);
    expect(radialOf({ x: 5, y: -5 })).toBeCloseTo(135);
    expect(radialOf({ x: 0, y: -10 })).toBeCloseTo(180);
    expect(radialOf({ x: -5, y: -5 })).toBeCloseTo(225);
    expect(radialOf({ x: -10, y: 0 })).toBeCloseTo(270);
    expect(radialOf({ x: -5, y: 5 })).toBeCloseTo(315);
    expect(distanceNm({ x: 3, y: 4 })).toBe(5);
  });

  it('centres the needle with FROM on the radial and TO on its reciprocal, all round', () => {
    for (let r = 0; r < 360; r += 45) {
      const from = cdi(r, r, 10);
      expect(from.flag).toBe('FROM');
      expect(from.needle).toBeCloseTo(0);
      const to = cdi(r, r + 180, 10);
      expect(to.flag).toBe('TO');
      expect(to.needle).toBeCloseTo(0);
      expect(centeringObs(r)).toEqual({ from: r % 360, to: (r + 180) % 360 });
    }
  });

  it('deflects toward the course with a FROM flag', () => {
    // OBS 090 FROM (outbound east). On the 080 radial you are north of the course: the
    // course is to the right. On the 100 radial it is to the left.
    expect(cdi(80, 90, 10)).toMatchObject({ flag: 'FROM', offsetDeg: 10, needle: 1 });
    expect(cdi(100, 90, 10)).toMatchObject({ flag: 'FROM', offsetDeg: -10, needle: -1 });
    expect(cdi(86, 90, 10).needle).toBeCloseTo(0.4);
  });

  it('deflects toward the course with a TO flag', () => {
    // OBS 090 TO (inbound, flying east toward the station from the west). On the 280
    // radial you are north of the course: it is to the right.
    expect(cdi(280, 90, 10)).toMatchObject({ flag: 'TO', offsetDeg: 10, needle: 1 });
    expect(cdi(260, 90, 10)).toMatchObject({ flag: 'TO', offsetDeg: -10, needle: -1 });
    // Across north: OBS 360 TO from the 170 radial (south of the station, a little east).
    expect(cdi(170, 0, 10)).toMatchObject({ flag: 'TO' });
    expect(cdi(170, 0, 10).needle).toBe(-1);
  });

  it('clamps at full scale and flags OFF over the station', () => {
    expect(cdi(40, 90, 10).needle).toBe(1);
    expect(cdi(90, 90, 0.1)).toEqual({ flag: 'OFF', offsetDeg: 0, needle: 0 });
  });

  it('detects reverse sensing when the heading opposes the course', () => {
    expect(isReverseSensing(270, 90)).toBe(true);
    expect(isReverseSensing(100, 90)).toBe(false);
    expect(isReverseSensing(350, 180)).toBe(true);
  });

  it('moves along a track and drifts with the wind', () => {
    const p = move({ x: 0, y: 0 }, 90, 5);
    expect(p.x).toBeCloseTo(5);
    expect(p.y).toBeCloseTo(0);
    // Heading north at 100 kt with a 20 kt wind from the west: drift right to about 011°.
    const d = drift(360, 100, 270, 20);
    expect(d.track).toBeCloseTo(11.3, 1);
    expect(d.gs).toBeCloseTo(102, 0);
    expect(drift(90, 100, 0, 0)).toEqual({ track: 90, gs: 100 });
  });
});
