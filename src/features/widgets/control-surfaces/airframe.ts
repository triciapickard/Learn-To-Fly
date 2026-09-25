import type { Attitude, Deflections, SurfaceId } from './model';

/**
 * A stylised high-wing trainer (our own drawing) as flat 3D polygons, and an orthographic
 * three-quarter camera to draw it in SVG. Body axes: x forward, y right, z up; units are
 * roughly feet. Pure functions so the geometry can be unit tested.
 */

export type Vec3 = [number, number, number];

export type Part =
  | 'airframe'
  | 'windshield'
  | 'prop'
  | 'aileron-left'
  | 'aileron-right'
  | 'flap-left'
  | 'flap-right'
  | 'elevator'
  | 'rudder'
  | 'trim-tab';

export interface Poly3 {
  part: Part;
  points: Vec3[];
}

export const SURFACE_OF: Partial<Record<Part, SurfaceId>> = {
  'aileron-left': 'ailerons',
  'aileron-right': 'ailerons',
  'flap-left': 'flaps',
  'flap-right': 'flaps',
  elevator: 'elevator',
  rudder: 'rudder',
  'trim-tab': 'trim-tab',
};

const rad = (deg: number) => (deg * Math.PI) / 180;
const WING_Z = 2.6;
const dihedral = (y: number) => WING_Z + Math.abs(y) * 0.03;

/** Trailing-edge point of a horizontal surface hinged along y; positive angle = trailing edge down. */
function hingedAft(hinge: Vec3, chord: number, deg: number): Vec3 {
  return [hinge[0] - chord * Math.cos(rad(deg)), hinge[1], hinge[2] - chord * Math.sin(rad(deg))];
}

/** Splits a quad into strips along its first edge so painter's sorting works on long surfaces. */
function strips(part: Part, a: Vec3, b: Vec3, c: Vec3, d: Vec3, n: number): Poly3[] {
  const lerp = (p: Vec3, q: Vec3, t: number): Vec3 => [
    p[0] + (q[0] - p[0]) * t,
    p[1] + (q[1] - p[1]) * t,
    p[2] + (q[2] - p[2]) * t,
  ];
  const out: Poly3[] = [];
  for (let i = 0; i < n; i++) {
    const t0 = i / n;
    const t1 = (i + 1) / n;
    out.push({ part, points: [lerp(a, b, t0), lerp(a, b, t1), lerp(d, c, t1), lerp(d, c, t0)] });
  }
  return out;
}

/** A hinged surface along y from y0 to y1, split into strips. */
function horizontalSurface(
  part: Part,
  hingeX: number,
  y0: number,
  y1: number,
  z: (y: number) => number,
  chord: number,
  deg: number,
  n = 2,
): Poly3[] {
  const h0: Vec3 = [hingeX, y0, z(y0)];
  const h1: Vec3 = [hingeX, y1, z(y1)];
  return strips(part, h0, h1, hingedAft(h1, chord, deg), hingedAft(h0, chord, deg), n);
}

/** Fuselage cross-sections: x, half width, bottom z, top z. */
const SECTIONS: [number, number, number, number][] = [
  [12, 0.9, -0.9, 1.0],
  [9.5, 1.8, -1.6, 1.8],
  [5, 1.9, -1.8, WING_Z],
  [-1, 1.9, -1.8, WING_Z],
  [-6, 1.2, -1.0, 2.1],
  [-11, 0.7, -0.1, 1.8],
  [-16.5, 0.3, 0.6, 1.6],
];

function fuselage(): Poly3[] {
  const polys: Poly3[] = [];
  for (let i = 0; i < SECTIONS.length - 1; i++) {
    const [x0, w0, b0, t0] = SECTIONS[i]!;
    const [x1, w1, b1, t1] = SECTIONS[i + 1]!;
    const corners = (x: number, w: number, b: number, t: number) => ({
      tl: [x, -w, t] as Vec3,
      tr: [x, w, t] as Vec3,
      bl: [x, -w, b] as Vec3,
      br: [x, w, b] as Vec3,
    });
    const f = corners(x0, w0, b0, t0);
    const r = corners(x1, w1, b1, t1);
    polys.push({ part: 'airframe', points: [f.tl, f.bl, r.bl, r.tl] });
    polys.push({ part: 'airframe', points: [f.tr, f.br, r.br, r.tr] });
    polys.push({ part: 'airframe', points: [f.bl, f.br, r.br, r.bl] });
    // The cabin roof sits under the wing, so it is not drawn.
    if (x0 !== 5) {
      polys.push({ part: i === 1 ? 'windshield' : 'airframe', points: [f.tl, f.tr, r.tr, r.tl] });
    }
  }
  const [nx, nw, nb, nt] = SECTIONS[0]!;
  polys.push({
    part: 'airframe',
    points: [
      [nx, -nw, nt],
      [nx, nw, nt],
      [nx, nw, nb],
      [nx, -nw, nb],
    ],
  });
  return polys;
}

function octagon(part: Part, centre: Vec3, r: number, plane: 'xz' | 'yz'): Poly3 {
  const points: Vec3[] = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    points.push(
      plane === 'xz'
        ? [centre[0] + r * Math.cos(a), centre[1], centre[2] + r * Math.sin(a)]
        : [centre[0], centre[1] + r * Math.cos(a), centre[2] + r * Math.sin(a)],
    );
  }
  return { part, points };
}

/** A thin flat bar between two points (struts, gear legs). */
function bar(a: Vec3, b: Vec3, width: number): Poly3 {
  return {
    part: 'airframe',
    points: [
      [a[0] + width, a[1], a[2]],
      [b[0] + width, b[1], b[2]],
      [b[0] - width, b[1], b[2]],
      [a[0] - width, a[1], a[2]],
    ],
  };
}

export function buildAirframe(d: Deflections): Poly3[] {
  const polys: Poly3[] = [...fuselage()];

  // Wing: fixed panel ahead of the hinge line at x = 0, then flaps and ailerons behind it.
  polys.push(
    ...strips(
      'airframe',
      [4.5, -18, dihedral(18)],
      [4.5, 18, dihedral(18)],
      [0, 18, dihedral(18)],
      [0, -18, dihedral(18)],
      12,
    ).map((p) => ({
      ...p,
      points: p.points.map(([x, y]) => [x, y, dihedral(y)] as Vec3),
    })),
  );
  polys.push(...horizontalSurface('flap-left', 0, -9.5, -1.9, dihedral, 1.5, d.flaps));
  polys.push(...horizontalSurface('flap-right', 0, 1.9, 9.5, dihedral, 1.5, d.flaps));
  polys.push(...horizontalSurface('aileron-left', 0, -17.5, -9.5, dihedral, 1.3, d.leftAileron));
  polys.push(...horizontalSurface('aileron-right', 0, 9.5, 17.5, dihedral, 1.3, d.rightAileron));

  // Struts and landing gear.
  for (const side of [-1, 1]) {
    polys.push(bar([1, side * 1.9, -1.2], [1.4, side * 9, dihedral(9)], 0.25));
    polys.push(bar([1, side * 1.8, -1.7], [1, side * 5, -4.2], 0.3));
    polys.push(octagon('airframe', [1, side * 5.2, -4.8], 0.9, 'xz'));
  }
  polys.push(bar([10, 0, -1.2], [10.4, 0, -4.2], 0.3));
  polys.push(octagon('airframe', [10.4, 0, -4.8], 0.8, 'xz'));

  // Tail: horizontal stabiliser, split elevator (around the rudder), trim tab and fin.
  const tailZ = () => 1.2;
  polys.push(
    ...strips(
      'airframe',
      [-12.5, -6.2, 1.2],
      [-12.5, 6.2, 1.2],
      [-15, 6.2, 1.2],
      [-15, -6.2, 1.2],
      4,
    ),
  );
  polys.push(...horizontalSurface('elevator', -15, -6.2, -0.35, tailZ, 1.8, d.elevator));
  polys.push(...horizontalSurface('elevator', -15, 0.35, 6.2, tailZ, 1.8, d.elevator));
  const tabHinge0 = hingedAft([-15, 0.9, 1.2], 1.8, d.elevator);
  const tabHinge1 = hingedAft([-15, 2.6, 1.2], 1.8, d.elevator);
  polys.push({
    part: 'trim-tab',
    points: [
      tabHinge0,
      tabHinge1,
      hingedAft(tabHinge1, 0.6, d.elevator + d.trimTab),
      hingedAft(tabHinge0, 0.6, d.elevator + d.trimTab),
    ],
  });
  polys.push({
    part: 'airframe',
    points: [
      [-10, 0, 1.9],
      [-15.2, 0, 1.6],
      [-15.2, 0, 7.2],
      [-13.6, 0, 7.2],
    ],
  });
  // Rudder: hinged on a vertical line; positive = trailing edge right.
  const rudderTe = (z: number): Vec3 => [
    -15.2 - 1.6 * Math.cos(rad(d.rudder)),
    1.6 * Math.sin(rad(d.rudder)),
    z,
  ];
  polys.push(
    ...strips('rudder', [-15.2, 0, 0.9], [-15.2, 0, 7.2], rudderTe(7.2), rudderTe(0.9), 3),
  );

  // Propeller disc.
  polys.push(octagon('prop', [12.3, 0, 0.1], 3.2, 'yz'));
  return polys;
}

/** Rotates body coordinates by the airplane's attitude (roll, then pitch, then yaw) about the CG. */
export const CG: Vec3 = [2, 0, 1];

export function applyAttitude(p: Vec3, a: Attitude): Vec3 {
  let [x, y, z] = [p[0] - CG[0], p[1] - CG[1], p[2] - CG[2]];
  // Roll right: right wing (+y) goes down.
  const r = rad(a.roll);
  [y, z] = [y * Math.cos(r) + z * Math.sin(r), -y * Math.sin(r) + z * Math.cos(r)];
  // Pitch up: nose (+x) goes up.
  const t = rad(a.pitch);
  [x, z] = [x * Math.cos(t) - z * Math.sin(t), x * Math.sin(t) + z * Math.cos(t)];
  // Yaw right: nose goes to the right (+y).
  const w = rad(a.yaw);
  [x, y] = [x * Math.cos(w) - y * Math.sin(w), x * Math.sin(w) + y * Math.cos(w)];
  return [x + CG[0], y + CG[1], z + CG[2]];
}

export interface Camera {
  /** Negative looks from behind and to the left. */
  azimuth: number;
  /** Degrees looking down. */
  elevation: number;
  scale: number;
  cx: number;
  cy: number;
}

export const CAMERA: Camera = { azimuth: -32, elevation: 22, scale: 10, cx: 230, cy: 185 };

/** Camera space: x right on screen, y up on screen, depth away from the viewer. */
export function toCamera(p: Vec3, cam: Camera = CAMERA): Vec3 {
  const a = rad(cam.azimuth);
  const x1 = p[0] * Math.cos(a) - p[1] * Math.sin(a);
  const y1 = p[0] * Math.sin(a) + p[1] * Math.cos(a);
  const e = rad(cam.elevation);
  const depth = x1 * Math.cos(e) - p[2] * Math.sin(e);
  const up = x1 * Math.sin(e) + p[2] * Math.cos(e);
  return [y1, up, depth];
}

export function toScreen(p: Vec3, cam: Camera = CAMERA): { x: number; y: number; depth: number } {
  const [x, up, depth] = toCamera(p, cam);
  return { x: cam.cx + x * cam.scale, y: cam.cy - up * cam.scale, depth };
}

export interface Poly2 {
  part: Part;
  points: string;
  depth: number;
  /** 0.55 (facing away from the light) … 1 (facing it). */
  light: number;
}

const LIGHT: Vec3 = (() => {
  const v: Vec3 = [-0.35, 0.8, -0.3];
  const len = Math.hypot(...v);
  return [v[0] / len, v[1] / len, v[2] / len];
})();

/** Projects and depth-sorts polygons (far first: painter's algorithm), with flat shading. */
export function project(polys: Poly3[], a: Attitude, cam: Camera = CAMERA): Poly2[] {
  return polys
    .map((poly) => {
      const world = poly.points.map((p) => applyAttitude(p, a));
      const camPts = world.map((p) => toCamera(p, cam));
      const screen = world.map((p) => toScreen(p, cam));
      const depth = camPts.reduce((sum, p) => sum + p[2], 0) / camPts.length;
      const [p0, p1, p2] = [camPts[0]!, camPts[1]!, camPts[2]!];
      const u = [p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]];
      const v = [p2[0] - p0[0], p2[1] - p0[1], p2[2] - p0[2]];
      const n = [
        u[1]! * v[2]! - u[2]! * v[1]!,
        u[2]! * v[0]! - u[0]! * v[2]!,
        u[0]! * v[1]! - u[1]! * v[0]!,
      ];
      const len = Math.hypot(n[0]!, n[1]!, n[2]!) || 1;
      const dot = Math.abs((n[0]! * LIGHT[0] + n[1]! * LIGHT[1] + n[2]! * LIGHT[2]) / len);
      return {
        part: poly.part,
        points: screen.map((s) => `${s.x.toFixed(1)},${s.y.toFixed(1)}`).join(' '),
        depth,
        light: 0.55 + 0.45 * dot,
      };
    })
    .sort((p, q) => q.depth - p.depth);
}

export interface AxisLine {
  id: 'roll' | 'pitch' | 'yaw';
  label: string;
  from: { x: number; y: number };
  to: { x: number; y: number };
}

/** The three axes through the CG, turning with the airplane. */
export function axes(a: Attitude, cam: Camera = CAMERA): AxisLine[] {
  const line = (id: AxisLine['id'], label: string, from: Vec3, to: Vec3): AxisLine => ({
    id,
    label,
    from: toScreen(applyAttitude(from, a), cam),
    to: toScreen(applyAttitude(to, a), cam),
  });
  const [x, y, z] = CG;
  return [
    line('roll', 'Longitudinal (roll)', [x - 22, y, z], [x + 16, y, z]),
    line('pitch', 'Lateral (pitch)', [x, y - 22, z], [x, y + 22, z]),
    line('yaw', 'Vertical (yaw)', [x, y, z - 8], [x, y, z + 11]),
  ];
}
