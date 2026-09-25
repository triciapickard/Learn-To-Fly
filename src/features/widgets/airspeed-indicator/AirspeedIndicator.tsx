import { Minus, Plus } from 'lucide-react';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/Button';
import { LoadingRegion, Skeleton } from '@/components/Skeleton';
import { useAircraft } from '@/features/content/api';
import { cn } from '@/lib/cn';
import { angleOf, clamp, polar } from '../shared/geometry';
import { useAnnouncer, useDrag } from '../shared/hooks';
import { QuizPanel } from '../shared/QuizPanel';
import { Gauge, Tape, valueToDialAngle } from '../shared/svg';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetMode, WidgetProps } from '../types';
import {
  angleToAirspeed,
  bandFor,
  describe,
  DIAL,
  isCorrect,
  markedSpeeds,
  quizQuestions,
} from './model';

type View = 'both' | 'dial' | 'tape';
const TAPE_MARKERS: Record<string, string> = { vr: 'R', vx: 'X', vy: 'Y', vg: 'G' };

/** W3 — Airspeed Indicator (Section 16.3). Reads arcs and V-speeds from aircraft.yaml. */
export default function AirspeedIndicator({ props, onQuizAnswer }: WidgetProps) {
  const { data, isPending, isError } = useAircraft();
  const initialMode: WidgetMode = props.mode === 'quiz' ? 'quiz' : 'explore';
  const initial = Number(props.initial ?? 0) || 0;
  const [ias, setIasState] = useState(initial);
  const [mode, setMode] = useState<WidgetMode>(initialMode);
  const [view, setView] = useState<View>((props.view as View) ?? 'both');
  const [message, announce] = useAnnouncer();

  const aircraft = data?.aircraft;
  const speeds = useMemo(() => (aircraft ? markedSpeeds(aircraft.vspeeds) : []), [aircraft]);

  const setIas = useCallback(
    (value: number) => {
      const next = clamp(Math.round(value), 0, 180);
      setIasState(next);
      if (aircraft) announce(describe(next, aircraft.arcs, speeds).speech);
    },
    [aircraft, speeds, announce],
  );

  const CX = 130;
  const CY = 130;
  const dialDrag = useDrag(
    useCallback(
      (p: { x: number; y: number }) => setIas(angleToAirspeed(angleOf(CX, CY, p.x, p.y))),
      [setIas],
    ),
  );
  // Dragging the tape down shows higher numbers under the pointer (like the real tape).
  const tapeStart = useRef<{ y: number; ias: number } | null>(null);
  const tapeDrag = useDrag(
    useCallback(
      (p: { x: number; y: number }) => {
        if (!tapeStart.current) {
          tapeStart.current = { y: p.y, ias };
          return;
        }
        setIas(tapeStart.current.ias + (p.y - tapeStart.current.y) / 3.2);
      },
      [ias, setIas],
    ),
  );

  if (isPending) {
    return (
      <LoadingRegion label="Loading the airspeed indicator" className="my-8">
        <Skeleton className="h-80 w-full" />
      </LoadingRegion>
    );
  }
  if (isError || !aircraft) {
    return (
      <p className="my-8 text-muted">
        The airspeed indicator could not load. The speeds are listed in the table above.
      </p>
    );
  }

  const { arcs } = aircraft;
  const band = bandFor(ias, arcs);
  const { readout, speech } = describe(ias, arcs, speeds);
  const questions = quizQuestions(aircraft.vspeeds);
  const redAngle = valueToDialAngle(
    arcs.redline,
    DIAL.min,
    DIAL.max,
    DIAL.startAngle,
    DIAL.endAngle,
  );
  const redOuter = polar(CX, CY, 118, redAngle);
  const redInner = polar(CX, CY, 100, redAngle);

  const description = (
    <>
      <p>
        A round airspeed indicator and a G1000-style airspeed tape for the Cessna 172S, showing the
        same airspeed. White arc {arcs.white[0]}–{arcs.white[1]} KIAS: the flap operating range.
        Green arc {arcs.green[0]}–{arcs.green[1]} KIAS: the normal operating range. Yellow arc{' '}
        {arcs.yellow[0]}–{arcs.yellow[1]} KIAS: caution, smooth air only. Red line {arcs.redline}{' '}
        KIAS: never exceed.
      </p>
      <p>
        Marked speeds:{' '}
        {speeds.map((s) => `${s.name} ${s.kias} KIAS (${s.meaning.toLowerCase()})`).join('; ')}.
      </p>
    </>
  );

  return (
    <WidgetFrame
      title="Airspeed indicator"
      mode={mode}
      onModeChange={setMode}
      quizAvailable
      onReset={() => setIas(initial)}
      description={description}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div
          role="group"
          aria-label="Show"
          className="flex rounded-control border border-border-strong p-0.5 text-sm"
        >
          {(['both', 'dial', 'tape'] as const).map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              onClick={() => setView(v)}
              className={cn(
                'min-h-9 rounded-[4px] px-3 font-semibold',
                view === v ? 'bg-surface-2 text-text' : 'text-muted',
              )}
            >
              {{ both: 'Both', dial: 'Round dial', tape: 'G1000 tape' }[v]}
            </button>
          ))}
        </div>
        <p className="font-mono text-lg font-semibold" aria-hidden>
          {readout}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-start justify-center gap-6">
        {view !== 'tape' && (
          <svg
            viewBox="0 0 260 260"
            className="w-full max-w-[280px] cursor-pointer select-none"
            role="img"
            aria-label={`Round airspeed indicator showing ${speech}`}
          >
            <g {...dialDrag}>
              <Gauge
                cx={CX}
                cy={CY}
                r={112}
                min={DIAL.min}
                max={DIAL.max}
                startAngle={DIAL.startAngle}
                endAngle={DIAL.endAngle}
                value={Math.max(ias, DIAL.min)}
                majorStep={20}
                minorStep={10}
                labelStep={20}
                arcs={[
                  {
                    from: arcs.white[0],
                    to: arcs.white[1],
                    className: 'stroke-arc-white',
                    inset: 14,
                    width: 6,
                  },
                  {
                    from: arcs.green[0],
                    to: arcs.green[1],
                    className: 'stroke-arc-green',
                    inset: 5,
                    width: 7,
                  },
                  {
                    from: arcs.yellow[0],
                    to: arcs.yellow[1],
                    className: 'stroke-arc-yellow',
                    inset: 5,
                    width: 7,
                  },
                ]}
                label={
                  <>
                    <line
                      x1={redOuter.x}
                      y1={redOuter.y}
                      x2={redInner.x}
                      y2={redInner.y}
                      className="stroke-arc-red"
                      strokeWidth={4}
                    />
                    <text
                      x={CX}
                      y={CY + 42}
                      textAnchor="middle"
                      className="fill-instrument-text text-[13px] font-semibold"
                    >
                      KNOTS
                    </text>
                  </>
                }
              />
            </g>
          </svg>
        )}
        {view !== 'dial' && (
          <svg
            viewBox="0 0 150 270"
            className="w-full max-w-[160px] cursor-ns-resize select-none"
            role="img"
            aria-label={`G1000 airspeed tape showing ${speech}`}
          >
            <g
              {...tapeDrag}
              onPointerUp={(e) => {
                tapeDrag.onPointerUp(e);
                tapeStart.current = null;
              }}
            >
              <Tape
                x={4}
                y={4}
                width={122}
                height={250}
                value={ias}
                pxPerUnit={3.2}
                step={5}
                labelStep={10}
                bands={[
                  {
                    from: arcs.white[0],
                    to: arcs.white[1],
                    className: 'fill-arc-white',
                    column: 1,
                  },
                  { from: arcs.green[0], to: arcs.green[1], className: 'fill-arc-green' },
                  { from: arcs.yellow[0], to: arcs.yellow[1], className: 'fill-arc-yellow' },
                  { from: arcs.redline, to: 400, className: 'fill-arc-red' },
                ]}
              />
              {speeds
                .filter((s) => TAPE_MARKERS[s.key] && Math.abs(s.kias - ias) < 38)
                .map((s) => (
                  <text
                    key={s.key}
                    x={138}
                    y={4 + 125 - (s.kias - ias) * 3.2}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="fill-cyan font-mono text-[12px] font-bold"
                  >
                    {TAPE_MARKERS[s.key]}
                  </text>
                ))}
            </g>
          </svg>
        )}
      </div>

      <div className="mx-auto mt-4 flex max-w-xl items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          aria-label="Decrease airspeed by 1 knot"
          onClick={() => setIas(ias - 1)}
        >
          <Minus aria-hidden className="size-4" />
        </Button>
        <label htmlFor="w3-slider" className="sr-only">
          Airspeed in knots
        </label>
        <input
          id="w3-slider"
          type="range"
          min={0}
          max={180}
          step={1}
          value={ias}
          aria-valuetext={speech}
          onChange={(e) => setIas(Number(e.target.value))}
          className="h-11 flex-1 cursor-pointer accent-primary"
        />
        <Button
          variant="secondary"
          size="sm"
          aria-label="Increase airspeed by 1 knot"
          onClick={() => setIas(ias + 1)}
        >
          <Plus aria-hidden className="size-4" />
        </Button>
      </div>
      <p className="mt-2 text-center text-sm text-muted">{band.meaning}</p>

      {mode === 'quiz' && (
        <div className="mt-4">
          <QuizPanel
            questions={questions}
            check={(q) => ({ correct: isCorrect(ias, q), answer: `${ias} KIAS` })}
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
