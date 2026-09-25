import { Pause, Play, SkipForward } from 'lucide-react';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { drift, move, type Point } from '@shared/aviation/vor';
import { clamp, polar } from '../shared/geometry';
import { useAnnouncer, useDrag } from '../shared/hooks';
import { QuizPanel } from '../shared/QuizPanel';
import { RangeField } from '../shared/RangeField';
import { Arrow, Compass, Label } from '../shared/svg';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetMode, WidgetProps } from '../types';
import {
  answerText,
  clampToMap,
  describe,
  EXPLORE_START,
  MAP_NM,
  needleText,
  pointAt,
  PX_PER_NM,
  QUESTIONS,
  QUIZ_START,
  read,
  TAS,
  three,
  TIME_SCALE,
  type Reading,
  type VorState,
} from './model';

const MAP = 400;
const C = MAP / 2;
const toScreen = (p: Point) => ({ x: C + p.x * PX_PER_NM, y: C - p.y * PX_PER_NM });
const fromScreen = (p: Point) => ({ x: (p.x - C) / PX_PER_NM, y: (C - p.y) / PX_PER_NM });

interface Wind {
  on: boolean;
  from: number;
  kt: number;
}

/** W9 — VOR / CDI simulator (Section 16.10). */
export default function VorCdi({ props, onQuizAnswer }: WidgetProps) {
  const [mode, setModeState] = useState<WidgetMode>(props.mode === 'quiz' ? 'quiz' : 'explore');
  const start = mode === 'quiz' ? QUIZ_START : EXPLORE_START;
  const [aircraft, setAircraft] = useState<Point>(start.aircraft);
  const [trail, setTrail] = useState<Point[]>([]);
  const [heading, setHeading] = useState(start.heading);
  const [obs, setObs] = useState(start.obs);
  const [showHsi, setShowHsi] = useState(props.hsi === 'true');
  const [wind, setWind] = useState<Wind>({ on: false, from: 360, kt: 15 });
  const [flying, setFlying] = useState(false);
  const reduced = useReducedMotion();
  const [message, announce] = useAnnouncer(600);

  const state: VorState = { aircraft, heading, obs };
  const r = read(state);
  const summary = describe(state, r);

  const update = useCallback(
    (next: Partial<VorState>) => {
      const s = { aircraft, heading, obs, ...next };
      if (next.aircraft) setAircraft(clampToMap(next.aircraft));
      if (next.heading !== undefined) setHeading(s.heading);
      if (next.obs !== undefined) setObs(s.obs);
      announce(describe(s, read(s)));
    },
    [aircraft, heading, obs, announce],
  );

  const reset = (to: VorState) => {
    setFlying(false);
    setAircraft(to.aircraft);
    setHeading(to.heading);
    setObs(to.obs);
    setTrail([]);
  };

  const setMode = (m: WidgetMode) => {
    setModeState(m);
    reset(m === 'quiz' ? QUIZ_START : EXPLORE_START);
  };

  // Fly mode: move along the ground track (heading plus wind drift).
  const latest = useRef({ heading, wind, aircraft });
  useEffect(() => {
    latest.current = { heading, wind, aircraft };
  }, [heading, wind, aircraft]);

  const fly = useCallback((seconds: number) => {
    const { heading: h, wind: w, aircraft: p } = latest.current;
    const { track, gs } = drift(h, TAS, w.on ? w.from : 0, w.on ? w.kt : 0);
    const next = clampToMap(move(p, track, (gs * seconds) / 3600));
    // Keep the ref current so several frames before the next render still add up.
    latest.current = { ...latest.current, aircraft: next };
    setAircraft(next);
    setTrail((t) => [...t.slice(-240), next]);
    if (Math.hypot(next.x, next.y) >= MAP_NM - 0.01) setFlying(false);
  }, []);

  useEffect(() => {
    if (!flying || reduced) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      fly(dt * TIME_SCALE);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [flying, reduced, fly]);

  const drag = useDrag(
    useCallback(
      (p: Point) => {
        setTrail([]);
        update({ aircraft: fromScreen(p) });
      },
      [update],
    ),
  );

  const { track, gs } = drift(heading, TAS, wind.on ? wind.from : 0, wind.on ? wind.kt : 0);

  const description = (
    <>
      <p>
        A map with a VOR station in the center of a compass rose and an airplane you can place
        anywhere within {MAP_NM} nautical miles. A line shows the course set on the OBS and a dashed
        line shows the radial the airplane is on. Beside it, a VOR indicator shows the course under
        the top index, the needle (each dot is 2°, full scale 10°) and the TO or FROM flag.
      </p>
      <p>
        The needle and flag depend only on where you are, not which way you point. If your heading
        is more than 90° from the OBS course, the needle works backwards (reverse sensing). An HSI
        avoids this because its course needle turns with the heading.
      </p>
      <p>{summary}</p>
    </>
  );

  return (
    <WidgetFrame
      title="VOR and CDI simulator"
      simplified
      mode={mode}
      onModeChange={setMode}
      quizAvailable
      onReset={() => reset(mode === 'quiz' ? QUIZ_START : EXPLORE_START)}
      description={description}
    >
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <svg
          viewBox={`0 0 ${MAP} ${MAP}`}
          className="mx-auto w-full max-w-md touch-none select-none"
          role="img"
          aria-label={`Map. ${summary}`}
          {...drag}
        >
          <MapView state={state} r={r} trail={trail} />
        </svg>

        <div>
          <div className={showHsi ? 'grid grid-cols-2 gap-2' : 'mx-auto max-w-60'}>
            <Instrument caption="VOR indicator">
              <VorIndicator obs={obs} r={r} />
            </Instrument>
            {showHsi && (
              <Instrument caption="HSI">
                <Hsi obs={obs} heading={heading} r={r} />
              </Instrument>
            )}
          </div>
          <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {[
              ['Radial', `${three(r.radial)}°`],
              ['Distance', `${r.distance.toFixed(1)} nm`],
              ['Flag', r.flag],
              ['Needle', needleText(r)],
            ].map(([k, v]) => (
              <div key={k} className="rounded-control bg-surface-2 px-3 py-2">
                <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{k}</dt>
                <dd className="font-mono font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          {r.reverse && r.flag !== 'OFF' && (
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <Badge variant="warning">Reverse sensing</Badge>
              Your heading opposes the OBS course, so turning toward the needle takes you away from
              the course.
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-x-6 gap-y-3 md:grid-cols-2">
        <RangeField
          label="OBS (course)"
          value={obs}
          min={0}
          max={359}
          display={`${three(obs)}°`}
          valueText={`OBS ${three(obs)}, ${r.flag}, needle ${needleText(r)}`}
          onChange={(v) => update({ obs: v })}
        />
        <RangeField
          label="Heading"
          value={Math.round(heading) % 360}
          min={0}
          max={359}
          display={`${three(heading)}°`}
          valueText={`Heading ${three(heading)}`}
          onChange={(v) => update({ heading: v })}
        />
        <RangeField
          label="Airplane's radial"
          value={Math.round(r.radial) % 360}
          min={0}
          max={359}
          display={`${three(r.radial)}°`}
          valueText={`Radial ${three(r.radial)}`}
          onChange={(v) => {
            setTrail([]);
            update({ aircraft: pointAt(v, Math.max(1, r.distance)) });
          }}
        />
        <RangeField
          label="Distance from the station"
          value={Math.round(r.distance * 2) / 2}
          min={0}
          max={MAP_NM}
          step={0.5}
          display={`${r.distance.toFixed(1)} nm`}
          valueText={`${r.distance.toFixed(1)} nautical miles`}
          onChange={(v) => {
            setTrail([]);
            update({ aircraft: pointAt(r.radial, v) });
          }}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {reduced ? (
          <Button size="sm" onClick={() => fly(60)}>
            <SkipForward aria-hidden className="size-4" /> Fly 1 minute
          </Button>
        ) : (
          <Button size="sm" onClick={() => setFlying((f) => !f)} aria-pressed={flying}>
            {flying ? (
              <Pause aria-hidden className="size-4" />
            ) : (
              <Play aria-hidden className="size-4" />
            )}
            {flying ? 'Pause' : 'Fly'}
          </Button>
        )}
        <span className="text-sm text-muted">
          {TAS} KTAS, track {three(track)}°, groundspeed {Math.round(gs)} kt
        </span>
      </div>
      <div className="mt-3 grid gap-x-6 gap-y-2 md:grid-cols-2">
        <Checkbox
          label="Show HSI"
          checked={showHsi}
          onChange={(e) => setShowHsi(e.target.checked)}
        />
        <Checkbox
          label="Wind"
          checked={wind.on}
          onChange={(e) => setWind((w) => ({ ...w, on: e.target.checked }))}
        />
        {wind.on && (
          <>
            <RangeField
              label="Wind from"
              value={wind.from}
              min={10}
              max={360}
              step={10}
              display={`${three(wind.from)}°`}
              valueText={`${three(wind.from)} degrees`}
              onChange={(v) => setWind((w) => ({ ...w, from: v }))}
            />
            <RangeField
              label="Wind speed"
              value={wind.kt}
              min={5}
              max={40}
              display={`${wind.kt} kt`}
              valueText={`${wind.kt} knots`}
              onChange={(v) => setWind((w) => ({ ...w, kt: v }))}
            />
          </>
        )}
      </div>

      {mode === 'quiz' && (
        <div className="mt-4">
          <QuizPanel
            questions={QUESTIONS}
            check={(q) => ({ correct: q.check(state, r), answer: answerText(state, r) })}
            onAnswer={onQuizAnswer}
          />
        </div>
      )}

      <div aria-live="polite" className="sr-only">
        {message}
      </div>
    </WidgetFrame>
  );
}

function Instrument({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <figure className="text-center">
      {children}
      <figcaption className="mt-1 text-sm font-semibold text-muted">{caption}</figcaption>
    </figure>
  );
}

function MapView({ state, r, trail }: { state: VorState; r: Reading; trail: Point[] }) {
  const edge = MAP_NM * PX_PER_NM;
  const course = { from: polar(C, C, edge, state.obs + 180), to: polar(C, C, edge, state.obs) };
  const plane = toScreen(state.aircraft);
  const mid = { x: (C + plane.x) / 2, y: (C + plane.y) / 2 };
  const courseLabel = polar(C, C, edge - 30, state.obs + 8);
  return (
    <g>
      <Compass cx={C} cy={C} r={edge + 14} />
      {[10, 20].map((nm) => (
        <circle
          key={nm}
          cx={C}
          cy={C}
          r={nm * PX_PER_NM}
          className="fill-none stroke-border-strong"
          strokeDasharray="3 5"
        />
      ))}
      <Arrow
        from={course.from}
        to={course.to}
        className="stroke-primary fill-primary"
        width={2.5}
      />
      <Label x={courseLabel.x} y={courseLabel.y} className="fill-primary">
        OBS {three(state.obs)}
      </Label>
      {r.distance > 1 && (
        <>
          <line
            x1={C}
            y1={C}
            x2={plane.x}
            y2={plane.y}
            className="stroke-muted"
            strokeWidth={1.5}
            strokeDasharray="6 4"
          />
          <Label x={mid.x} y={mid.y - 12} className="fill-muted">
            R-{three(r.radial)}
          </Label>
        </>
      )}
      {trail.length > 1 && (
        <polyline
          points={trail.map((p) => `${toScreen(p).x},${toScreen(p).y}`).join(' ')}
          className="fill-none stroke-success"
          strokeWidth={2}
          strokeDasharray="2 4"
        />
      )}
      {/* VOR symbol: hexagon with a centre dot */}
      <path
        d={Array.from({ length: 6 }, (_, i) => {
          const p = polar(C, C, 9, i * 60 + 30);
          return `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`;
        }).join(' ')}
        className="fill-surface stroke-cyan"
        strokeWidth={2}
      />
      <circle cx={C} cy={C} r={2} className="fill-cyan" />
      <g transform={`translate(${plane.x} ${plane.y}) rotate(${state.heading})`}>
        <path
          d="M 0 -13 L 2.5 -4 L 12 1 L 12 4 L 2.5 2 L 2 9 L 5 12 L 5 14 L 0 12.5 L -5 14 L -5 12 L -2 9 L -2.5 2 L -12 4 L -12 1 L -2.5 -4 Z"
          className="cursor-grab fill-accent stroke-surface"
          strokeWidth={1.5}
        />
      </g>
    </g>
  );
}

/** Dial ticks and labels on a rotating compass card. */
function Card({ cx, cy, r, rotate }: { cx: number; cy: number; r: number; rotate: number }) {
  const items: ReactNode[] = [];
  for (let d = 0; d < 360; d += 5) {
    const a = d - rotate;
    const major = d % 10 === 0;
    const o = polar(cx, cy, r, a);
    const i = polar(cx, cy, r - (major ? 9 : 5), a);
    items.push(
      <line
        key={`t${d}`}
        x1={o.x}
        y1={o.y}
        x2={i.x}
        y2={i.y}
        className="stroke-instrument-text"
        strokeWidth={major ? 1.5 : 1}
      />,
    );
    if (d % 30 === 0) {
      const p = polar(cx, cy, r - 19, a);
      items.push(
        <text
          key={`l${d}`}
          x={p.x}
          y={p.y}
          textAnchor="middle"
          dominantBaseline="central"
          transform={`rotate(${a} ${p.x} ${p.y})`}
          className="fill-instrument-text text-[12px] font-bold"
        >
          {{ 0: 'N', 90: 'E', 180: 'S', 270: 'W' }[d] ?? d / 10}
        </text>,
      );
    }
  }
  return <g>{items}</g>;
}

function Flag({ flag, x, y }: { flag: Reading['flag']; x: number; y: number }) {
  if (flag === 'OFF') {
    return (
      <g>
        <rect x={x - 16} y={y - 9} width={32} height={18} rx={2} className="fill-arc-red" />
        <text
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-white text-[11px] font-bold"
        >
          OFF
        </text>
      </g>
    );
  }
  const to = flag === 'TO';
  return (
    <g>
      <path
        d={to ? `M ${x} ${y - 10} l -9 12 h 18 Z` : `M ${x} ${y + 10} l -9 -12 h 18 Z`}
        className="fill-white"
      />
      <text
        x={x}
        y={to ? y + 12 : y - 12}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-white text-[10px] font-bold"
      >
        {flag}
      </text>
    </g>
  );
}

function VorIndicator({ obs, r }: { obs: number; r: Reading }) {
  const c = 120;
  const needleX = c + r.needle * 60;
  return (
    <svg viewBox="0 0 240 240" className="w-full" aria-hidden>
      <circle
        cx={c}
        cy={c}
        r={112}
        className="fill-instrument stroke-border-strong"
        strokeWidth={3}
      />
      <Card cx={c} cy={c} r={104} rotate={obs} />
      <path d={`M ${c} ${c - 104} l -7 -6 h 14 Z`} className="fill-arc-yellow" />
      <path d={`M ${c} ${c - 83} l -6 -10 h 12 Z`} className="fill-arc-yellow" />
      {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5].map((k) => (
        <circle
          key={k}
          cx={c + k * 12}
          cy={c}
          r={3}
          className="fill-none stroke-instrument-text"
          strokeWidth={1.5}
        />
      ))}
      <circle cx={c} cy={c} r={6} className="fill-none stroke-instrument-text" strokeWidth={1.5} />
      <line
        x1={needleX}
        x2={needleX}
        y1={c - 62}
        y2={c + 62}
        className="stroke-white transition-[x1,x2] duration-150"
        strokeWidth={3.5}
        strokeLinecap="round"
      />
      <Flag flag={r.flag} x={c + 44} y={r.flag === 'FROM' ? c + 34 : c - 34} />
    </svg>
  );
}

function Hsi({ obs, heading, r }: { obs: number; heading: number; r: Reading }) {
  const c = 120;
  const dev = clamp(r.needle, -1, 1) * 40;
  return (
    <svg viewBox="0 0 240 240" className="w-full" aria-hidden>
      <circle
        cx={c}
        cy={c}
        r={112}
        className="fill-instrument stroke-border-strong"
        strokeWidth={3}
      />
      <Card cx={c} cy={c} r={104} rotate={heading} />
      <path d={`M ${c} ${c - 104} l -7 -8 h 14 Z`} className="fill-white" />
      <g
        transform={`rotate(${obs - heading} ${c} ${c})`}
        className="stroke-display-green fill-display-green"
      >
        <path d={`M ${c} ${c - 78} l -8 13 h 16 Z`} />
        <line x1={c} x2={c} y1={c - 65} y2={c - 38} strokeWidth={4} />
        <line x1={c} x2={c} y1={c + 38} y2={c + 76} strokeWidth={4} />
        {r.flag !== 'OFF' && (
          <line x1={c + dev} x2={c + dev} y1={c - 34} y2={c + 34} strokeWidth={4} />
        )}
        {[-40, -20, 20, 40].map((d) => (
          <circle
            key={d}
            cx={c + d}
            cy={c}
            r={3.5}
            className="fill-none stroke-white"
            strokeWidth={1.5}
          />
        ))}
        {r.flag !== 'OFF' && (
          <path
            d={
              r.flag === 'TO'
                ? `M ${c + 22} ${c - 34} l -7 10 h 14 Z`
                : `M ${c + 22} ${c + 34} l -7 -10 h 14 Z`
            }
            className="fill-white stroke-none"
          />
        )}
      </g>
      <path
        d={`M ${c} ${c - 14} v 28 M ${c - 13} ${c - 2} h 26 M ${c - 6} ${c + 12} h 12`}
        className="stroke-arc-yellow"
        strokeWidth={3}
        strokeLinecap="round"
      />
      {r.flag === 'OFF' && <Flag flag="OFF" x={c + 50} y={c + 50} />}
    </svg>
  );
}
