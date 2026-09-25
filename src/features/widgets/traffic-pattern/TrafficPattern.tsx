import { Pause, Play, SkipForward, Undo2 } from 'lucide-react';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/cn';
import { useAnnouncer } from '../shared/hooks';
import { Arrow, Label } from '../shared/svg';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetProps } from '../types';
import {
  crab,
  DIM,
  LEG_ORDER,
  labelPoints,
  LEGS,
  nextLegStart,
  patternGeometry,
  runwayHeading,
  toScreen,
  type LegId,
  type PatternGeometry,
  type Pt,
  type Side,
  type Wind,
} from './model';

type Phase = keyof PatternGeometry;
interface Position {
  phase: Phase;
  /** Fractional sample index along the current path. */
  index: number;
}

const START: Position = { phase: 'intro', index: 0 };
const SCALE = 0.72;
const CENTER = { x: 230, y: 172 };
/** The runway is always drawn across the page, landing toward the left. */
const VIEW_HEADING = 270;
/** Drawing units per second per knot of groundspeed. */
const SPEED = 0.75;
const STEP = 3;

/** The phase that follows when a path ends. */
const AFTER: Record<Phase, Phase> = { intro: 'lap', lap: 'lap', goAround: 'lap' };

/** W7 — Traffic pattern animator (Section 16.8). */
export default function TrafficPattern({ props }: WidgetProps) {
  const airport = props.airport ?? 'Tracy';
  const runway = props.runway ?? '26';
  const heading = runwayHeading(runway);
  const [side, setSide] = useState<Side>(props.side === 'right' ? 'right' : 'left');
  const [wind, setWind] = useState<Wind>({ direction: 260, speed: 0 });
  const [showConfig, setShowConfig] = useState(props.config === 'true');
  const [showCalls, setShowCalls] = useState(props.calls === 'true');
  const uid = useId();
  const [pos, setPos] = useState<Position>(START);
  const [playing, setPlaying] = useState(false);
  const reduced = useReducedMotion();
  const [message, announce] = useAnnouncer(200);

  const geom = useMemo(() => patternGeometry(side), [side]);
  const path = geom[pos.phase];
  const sample = path[Math.min(path.length - 1, Math.floor(pos.index))]!;
  const leg = sample.leg;
  const { heading: acHeading, gs } = crab(sample, heading, wind);
  const place = { airport, runway, side };

  // Where the pattern's middle sits in the runway frame, so the drawing is centred.
  // True bearings turn by this much on screen (north is wherever the north arrow points).
  const viewTurn = VIEW_HEADING - heading;
  const middle = toScreen(
    { u: 80, v: (DIM.downwindOffset / 2) * (side === 'left' ? -1 : 1) },
    VIEW_HEADING,
    { x: 0, y: 0 },
    SCALE,
  );
  const origin = { x: CENTER.x - middle.x, y: CENTER.y - middle.y };
  const screen = (p: { u: number; v: number }) => toScreen(p, VIEW_HEADING, origin, SCALE);

  // Animation: continuous when motion is fine, leg by leg when reduced motion is on.
  const latest = useRef({ geom, heading, wind });
  useEffect(() => {
    latest.current = { geom, heading, wind };
  }, [geom, heading, wind]);
  useEffect(() => {
    if (!playing) return;
    if (reduced) {
      const id = setInterval(() => setPos((p) => stepLegWith(latest.current.geom, p)), 1500);
      return () => clearInterval(id);
    }
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      setPos((p) => {
        const { geom: g, heading: h, wind: w } = latest.current;
        const current = g[p.phase];
        const s = current[Math.min(current.length - 1, Math.floor(p.index))]!;
        const advance = (crab(s, h, w).gs * SPEED * dt) / STEP;
        const index = p.index + advance;
        return index >= current.length ? { phase: AFTER[p.phase], index: 0 } : { ...p, index };
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, reduced]);

  // Announce each new leg.
  const lastLeg = useRef<LegId | null>(null);
  useEffect(() => {
    if (lastLeg.current === leg) return;
    lastLeg.current = leg;
    const info = LEGS[leg];
    const parts = [info.name];
    if (showConfig) parts.push(info.config);
    if (showCalls && info.call) parts.push(`Radio: ${info.call(place)}`);
    announce(parts.join('. '));
    // Announce on leg changes only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leg]);

  const patternCenter = screen({
    u: 80,
    v: (DIM.downwindOffset / 2) * (side === 'left' ? -1 : 1),
  });
  const labels = labelPoints(side).map((l) => {
    const anchor = screen(l);
    if (l.push === 'in') {
      // Vertical legs: label just inside the pattern, text running inwards.
      const dir = Math.sign(anchor.x - patternCenter.x) || 1;
      return {
        ...l,
        anchor,
        x: anchor.x - dir * 10,
        y: anchor.y,
        textAnchor: dir > 0 ? ('end' as const) : ('start' as const),
      };
    }
    const dir = Math.sign(anchor.y - patternCenter.y) || 1;
    return { ...l, anchor, x: anchor.x, y: anchor.y + dir * 16, textAnchor: 'middle' as const };
  });
  const polyline = (samples: { u: number; v: number }[]) =>
    samples
      .map((s) => {
        const p = screen(s);
        return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
      })
      .join(' ');

  const runwayCorners = [
    { u: 0, v: -9 },
    { u: DIM.runwayLength, v: -9 },
    { u: DIM.runwayLength, v: 9 },
    { u: 0, v: 9 },
  ].map(screen);
  const threshold = screen({ u: 16, v: 0 });
  const farEnd = screen({ u: DIM.runwayLength - 16, v: 0 });
  const reciprocal = String(((Number.parseInt(runway, 10) + 17) % 36) + 1).padStart(2, '0');
  const ac = screen(sample);
  const legsShown: LegId[] = pos.phase === 'goAround' ? [...LEG_ORDER, 'go-around'] : LEG_ORDER;

  const description = (
    <>
      <p>
        A top-down view of runway {runway} at {airport} with a {side}-hand traffic pattern. The
        runway is drawn across the page with landings toward the left; an arrow shows north. The
        legs are: the 45° entry, joining downwind at midfield; downwind, flown opposite to the
        landing direction about ¾ mile from the runway at pattern altitude; base; final; a
        touch-and-go; departure (upwind); and crosswind, turning back onto downwind.
      </p>
      <p>
        The step list below the diagram follows the airplane leg by leg, with the configuration and
        radio call for each leg when those options are on. With wind set, the airplane crabs into
        the wind to keep a rectangular ground track, and its groundspeed changes from leg to leg.
        The go-around button shows a go-around from short final: side-step away from the pattern,
        climb out, and rejoin the crosswind leg.
      </p>
    </>
  );

  return (
    <WidgetFrame
      title="Traffic pattern"
      onReset={() => {
        setPlaying(false);
        setPos(START);
      }}
      description={description}
    >
      <div className="grid gap-4 lg:grid-cols-[3fr_2fr]">
        <svg
          viewBox="0 0 460 350"
          className="w-full select-none"
          role="img"
          aria-label={`Traffic pattern for runway ${runway}, ${side} traffic. The airplane is on the ${LEGS[leg].name.toLowerCase()} leg, heading ${Math.round(acHeading)} degrees at ${Math.round(gs)} knots groundspeed.`}
        >
          <rect x={0} y={0} width={460} height={350} rx={10} className="fill-surface-2" />
          <polygon
            points={runwayCorners.map((p) => `${p.x},${p.y}`).join(' ')}
            className="fill-instrument stroke-border-strong"
          />
          <line
            x1={screen({ u: 30, v: 0 }).x}
            y1={screen({ u: 30, v: 0 }).y}
            x2={screen({ u: DIM.runwayLength - 30, v: 0 }).x}
            y2={screen({ u: DIM.runwayLength - 30, v: 0 }).y}
            className="stroke-white"
            strokeDasharray="6 5"
            strokeWidth={1.5}
          />
          <RunwayNumber at={threshold} rotate={VIEW_HEADING} text={runway.padStart(2, '0')} />
          <RunwayNumber at={farEnd} rotate={VIEW_HEADING - 180} text={reciprocal} />

          <polyline
            points={polyline(geom.intro)}
            fill="none"
            className="stroke-primary"
            strokeWidth={2}
            strokeDasharray="6 5"
          />
          <polyline
            points={polyline(geom.lap)}
            fill="none"
            className="stroke-primary"
            strokeWidth={2.5}
          />
          {pos.phase === 'goAround' && (
            <polyline
              points={polyline(geom.goAround)}
              fill="none"
              className="stroke-accent"
              strokeWidth={2.5}
              strokeDasharray="7 4"
            />
          )}

          {labels.map((l) => (
            <g key={l.leg}>
              <Label x={l.x} y={l.y} anchor={l.textAnchor} className="fill-text">
                {LEGS[l.leg].name.replace(' (upwind)', '')}
              </Label>
              {showConfig && (
                <text
                  x={l.x}
                  y={l.y + (l.push === 'out' && l.y < l.anchor.y ? -15 : 15)}
                  textAnchor={l.textAnchor}
                  dominantBaseline="central"
                  className="fill-muted text-[11px]"
                  paintOrder="stroke"
                  stroke="var(--color-surface-2)"
                  strokeWidth={3}
                >
                  {LEGS[l.leg].short}
                </text>
              )}
              {showCalls && LEGS[l.leg].call && (
                <CallMarker at={l.anchor} active={leg === l.leg} n={LEG_ORDER.indexOf(l.leg) + 1} />
              )}
            </g>
          ))}

          <g transform={`translate(${ac.x} ${ac.y}) rotate(${acHeading + viewTurn})`}>
            <path
              d="M 0 -11 L 2 -4 L 11 1 L 11 3 L 2 1 L 1.5 7 L 4.5 9.5 L 4.5 11 L 0 10 L -4.5 11 L -4.5 9.5 L -1.5 7 L -2 1 L -11 3 L -11 1 L -2 -4 Z"
              className="fill-primary stroke-surface"
              strokeWidth={1.5}
            />
          </g>

          <g transform={`translate(28 34) rotate(${viewTurn})`}>
            <Arrow
              from={{ x: 0, y: 14 }}
              to={{ x: 0, y: -12 }}
              className="stroke-text fill-text"
              width={2}
            />
            <text y={30} textAnchor="middle" className="fill-text text-[12px] font-bold">
              N
            </text>
          </g>
          <WindIndicator wind={wind} turn={viewTurn} />
        </svg>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={() => setPlaying((p) => !p)}>
              {playing ? (
                <Pause aria-hidden className="size-4" />
              ) : (
                <Play aria-hidden className="size-4" />
              )}
              {playing ? 'Pause' : 'Play'}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setPos((p) => stepLegWith(geom, p))}
            >
              <SkipForward aria-hidden className="size-4" /> Next leg
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setPos({ phase: 'goAround', index: 0 });
                announce(
                  `Go-around. ${LEGS['go-around'].config}${showCalls ? ` Radio: ${LEGS['go-around'].call!(place)}` : ''}`,
                );
                lastLeg.current = 'go-around';
              }}
            >
              <Undo2 aria-hidden className="size-4" /> Go around
            </Button>
          </div>

          <div
            role="group"
            aria-label="Traffic direction"
            className="flex w-fit rounded-control border border-border-strong p-0.5 text-sm"
          >
            {(['left', 'right'] as const).map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={side === s}
                onClick={() => {
                  setSide(s);
                  setPos(START);
                }}
                className={cn(
                  'min-h-9 rounded-[4px] px-3 font-semibold',
                  side === s ? 'bg-primary text-primary-contrast' : 'text-muted hover:text-text',
                )}
              >
                {s === 'left' ? 'Left traffic' : 'Right traffic'}
              </button>
            ))}
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <label htmlFor={`${uid}-wind-dir`} className="font-semibold">
                Wind from
              </label>
              <span className="font-mono text-sm" aria-hidden>
                {String(wind.direction).padStart(3, '0')}°
              </span>
            </div>
            <input
              id={`${uid}-wind-dir`}
              type="range"
              min={10}
              max={360}
              step={10}
              value={wind.direction}
              aria-valuetext={`${wind.direction} degrees`}
              onChange={(e) => setWind((w) => ({ ...w, direction: Number(e.target.value) }))}
              className="h-11 w-full cursor-pointer accent-primary"
            />
            <div className="flex items-baseline justify-between">
              <label htmlFor={`${uid}-wind-speed`} className="font-semibold">
                Wind speed
              </label>
              <span className="font-mono text-sm" aria-hidden>
                {wind.speed === 0 ? 'calm' : `${wind.speed} kt`}
              </span>
            </div>
            <input
              id={`${uid}-wind-speed`}
              type="range"
              min={0}
              max={25}
              step={1}
              value={wind.speed}
              aria-valuetext={wind.speed === 0 ? 'calm' : `${wind.speed} knots`}
              onChange={(e) => setWind((w) => ({ ...w, speed: Number(e.target.value) }))}
              className="h-11 w-full cursor-pointer accent-primary"
            />
          </div>

          <Checkbox
            label="Show configuration"
            checked={showConfig}
            onChange={(e) => setShowConfig(e.target.checked)}
          />
          <Checkbox
            label="Show radio calls"
            checked={showCalls}
            onChange={(e) => setShowCalls(e.target.checked)}
          />

          <p className="text-sm text-muted" aria-hidden>
            Heading{' '}
            <span className="font-mono">
              {String(Math.round(acHeading) % 360 || 360).padStart(3, '0')}°
            </span>
            , groundspeed <span className="font-mono">{Math.round(gs)} kt</span>
          </p>
        </div>
      </div>

      {showCalls && LEGS[leg].call && (
        <p
          className="mt-3 rounded-control border border-primary bg-primary-soft p-3 text-sm"
          aria-hidden
        >
          <span className="font-semibold">Radio: </span>
          {LEGS[leg].call!(place)}
        </p>
      )}

      <ol className="mt-4 grid gap-2" aria-label="Pattern legs">
        {legsShown.map((id, i) => {
          const info = LEGS[id];
          const current = id === leg;
          return (
            <li
              key={id}
              aria-current={current ? 'step' : undefined}
              className={cn(
                'rounded-control border p-3 text-sm',
                current ? 'border-primary bg-primary-soft' : 'border-border',
              )}
            >
              <p className="font-semibold">
                {i + 1}. {info.name}
                {current && <span className="sr-only"> (current leg)</span>}
              </p>
              {showConfig && <p className="mt-1">{info.config}</p>}
              {showCalls && info.call && <p className="mt-1 italic">“{info.call(place)}”</p>}
            </li>
          );
        })}
      </ol>

      <div aria-live="polite" className="sr-only">
        {message}
      </div>
    </WidgetFrame>
  );
}

function stepLegWith(geom: PatternGeometry, p: Position): Position {
  const next = nextLegStart(geom[p.phase], Math.floor(p.index));
  return next === 0 ? { phase: AFTER[p.phase], index: 0 } : { phase: p.phase, index: next };
}

function RunwayNumber({ at, rotate, text }: { at: Pt; rotate: number; text: string }) {
  return (
    <text
      x={at.x}
      y={at.y}
      textAnchor="middle"
      dominantBaseline="central"
      transform={`rotate(${rotate} ${at.x} ${at.y})`}
      className="fill-white font-mono text-[11px] font-bold"
    >
      {text}
    </text>
  );
}

function CallMarker({ at, active, n }: { at: Pt; active: boolean; n: number }) {
  return (
    <g transform={`translate(${at.x} ${at.y})`}>
      <path
        d="M -10 -22 h 20 a 4 4 0 0 1 4 4 v 10 a 4 4 0 0 1 -4 4 h -6 l -4 6 l -4 -6 h -6 a 4 4 0 0 1 -4 -4 v -10 a 4 4 0 0 1 4 -4 Z"
        className={active ? 'fill-accent' : 'fill-surface stroke-accent'}
        strokeWidth={1.5}
      />
      <text
        y={-13}
        textAnchor="middle"
        dominantBaseline="central"
        className={cn('text-[11px] font-bold', active ? 'fill-white' : 'fill-accent')}
      >
        {n}
      </text>
    </g>
  );
}

function WindIndicator({ wind, turn }: { wind: Wind; turn: number }) {
  const cx = 420;
  const cy = 34;
  const to = ((wind.direction + 180 + turn) * Math.PI) / 180;
  const len = 16;
  const from = { x: cx - Math.sin(to) * len, y: cy + Math.cos(to) * len };
  const tip = { x: cx + Math.sin(to) * len, y: cy - Math.cos(to) * len };
  return (
    <g>
      {wind.speed > 0 ? (
        <Arrow from={from} to={tip} className="stroke-magenta fill-magenta" width={3} />
      ) : (
        <circle cx={cx} cy={cy} r={6} className="fill-none stroke-magenta" strokeWidth={2} />
      )}
      <text
        x={cx}
        y={cy + 32}
        textAnchor="middle"
        className="fill-magenta text-[11px] font-semibold"
      >
        {wind.speed > 0 ? `${String(wind.direction).padStart(3, '0')}° ${wind.speed} kt` : 'Calm'}
      </text>
    </g>
  );
}
