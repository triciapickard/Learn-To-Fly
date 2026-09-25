import { AlertTriangle, Minus, Plus } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Button } from '@/components/Button';
import { LoadingRegion, Skeleton } from '@/components/Skeleton';
import { useAircraft } from '@/features/content/api';
import { cn } from '@/lib/cn';
import { clamp } from '../shared/geometry';
import { useAnnouncer } from '../shared/hooks';
import { QuizPanel } from '../shared/QuizPanel';
import { Tape } from '../shared/svg';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetMode, WidgetProps } from '../types';
import {
  describe,
  forceText,
  QUESTIONS,
  range,
  roundIas,
  roundVs,
  SCENARIOS,
  steadyState,
  stickForce,
  warnings,
  type PerformanceTable,
} from './model';

/** W5 — Pitch and power trainer (Section 16.6). */
export default function PitchPower({ props, onQuizAnswer }: WidgetProps) {
  const { data, isPending, isError } = useAircraft();
  const table = data?.aircraft.performanceModel ?? null;

  if (isPending) {
    return (
      <LoadingRegion label="Loading the pitch and power trainer" className="my-8">
        <Skeleton className="h-96 w-full" />
      </LoadingRegion>
    );
  }
  if (isError || !data || !table) {
    return (
      <p className="my-8 text-muted">
        The pitch and power trainer could not load. Remember the rule it teaches: pitch sets your
        airspeed, power sets whether you climb or descend.
      </p>
    );
  }
  const { vspeeds, arcs, verification } = data.aircraft;
  return (
    <Trainer
      table={table}
      vs1={vspeeds.vs1?.kias ?? arcs.green[0]}
      arcs={arcs}
      verified={verification.performanceModel?.verified === true}
      mode={props.mode === 'quiz' ? 'quiz' : 'explore'}
      onQuizAnswer={onQuizAnswer}
    />
  );
}

interface Arcs {
  white: number[];
  green: number[];
  yellow: number[];
  redline: number;
}

const START = SCENARIOS[0]!;

function Trainer({
  table,
  vs1,
  arcs,
  verified,
  mode: initialMode,
  onQuizAnswer,
}: {
  table: PerformanceTable;
  vs1: number;
  arcs: Arcs;
  verified: boolean;
  mode: WidgetMode;
  onQuizAnswer: WidgetProps['onQuizAnswer'];
}) {
  const limits = range(table);
  const [pitch, setPitch] = useState(START.pitch);
  const [rpm, setRpm] = useState(START.rpm);
  const [trimmedIas, setTrimmedIas] = useState(() =>
    roundIas(steadyState(table, START.pitch, START.rpm).ias),
  );
  const [mode, setMode] = useState<WidgetMode>(initialMode);
  const [message, announce] = useAnnouncer();

  const state = steadyState(table, pitch, rpm);
  const ias = roundIas(state.ias);
  const vs = roundVs(state.vs);
  const force = stickForce(state.ias, trimmedIas);
  const warn = warnings(state.ias, vs1, arcs.redline);

  const update = useCallback(
    (nextPitch: number, nextRpm: number) => {
      const p = clamp(Math.round(nextPitch * 2) / 2, limits.pitch[0], limits.pitch[1]);
      const r = clamp(Math.round(nextRpm / 50) * 50, limits.rpm[0], limits.rpm[1]);
      setPitch(p);
      setRpm(r);
      announce(describe(p, r, steadyState(table, p, r)));
    },
    [announce, limits.pitch, limits.rpm, table],
  );

  const trim = () => {
    setTrimmedIas(ias);
    announce(`Trimmed for ${ias} knots.`);
  };

  const description = (
    <>
      <p>
        An attitude indicator, an airspeed tape and a vertical speed scale for the Cessna 172.
        Choose a pitch attitude and a power setting (RPM), and the instruments show the airspeed and
        climb or descent rate the airplane settles at. For example: cruise, 2,300 RPM with the nose
        level, holds altitude at about 100 knots; Vy climb, full power and 8° nose up, climbs at
        about 74 knots.
      </p>
      <p>
        With power fixed, raising the nose slows the airplane and lowering it speeds it up: pitch
        controls airspeed. With pitch fixed, adding power makes it climb and reducing power makes it
        descend. Trim sets an airspeed: fly slower than the trimmed speed and you have to pull;
        faster and you have to push. Press Trim to take the force away.
      </p>
    </>
  );

  return (
    <WidgetFrame
      title="Pitch and power trainer"
      simplified
      mode={mode}
      onModeChange={setMode}
      quizAvailable
      onReset={() => {
        update(START.pitch, START.rpm);
        setTrimmedIas(roundIas(steadyState(table, START.pitch, START.rpm).ias));
      }}
      description={description}
    >
      {!verified && (
        <p className="mb-3 rounded-control bg-warning-soft p-2 text-sm">
          Provisional numbers: this trainer&apos;s table hasn&apos;t been checked against flights in
          the sim yet, so treat the exact speeds as approximate.
        </p>
      )}

      <div className="flex flex-wrap items-start justify-center gap-3">
        <AttitudeIndicator pitch={pitch} />
        <svg
          viewBox="0 0 120 200"
          className="w-24 select-none sm:w-28"
          role="img"
          aria-label={`Airspeed ${ias} knots`}
        >
          <Tape
            x={2}
            y={2}
            width={112}
            height={196}
            value={state.ias}
            pxPerUnit={2.4}
            step={5}
            labelStep={10}
            bands={[
              { from: arcs.white[0]!, to: arcs.white[1]!, className: 'fill-arc-white', column: 1 },
              { from: arcs.green[0]!, to: arcs.green[1]!, className: 'fill-arc-green' },
              { from: arcs.yellow[0]!, to: arcs.yellow[1]!, className: 'fill-arc-yellow' },
              { from: arcs.redline, to: 400, className: 'fill-arc-red' },
            ]}
          />
        </svg>
        <VerticalSpeed vs={vs} />
      </div>

      <p className="mt-3 text-center font-mono text-lg font-semibold" aria-hidden>
        {ias} KIAS · {vs > 0 ? '+' : ''}
        {vs.toLocaleString('en-US')} fpm
      </p>
      <p className="text-center text-sm text-muted" aria-hidden>
        Altitude in one minute: {vs > 0 ? '+' : ''}
        {vs.toLocaleString('en-US')} ft
      </p>
      {(warn.stall || warn.overspeed) && (
        <p className="mx-auto mt-2 flex max-w-md items-center justify-center gap-2 rounded-control bg-danger-soft p-2 text-sm font-semibold text-danger">
          <AlertTriangle aria-hidden className="size-4" />
          {warn.stall ? 'Stall warning: too slow' : 'Over the never-exceed speed'}
        </p>
      )}

      <div className="mx-auto mt-4 max-w-xl">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Push</span>
          <span className="font-semibold">{forceText(force)}</span>
          <span className="text-muted">Pull</span>
        </div>
        <div aria-hidden className="relative mt-1 h-3 rounded-full bg-surface-2">
          <div className="absolute top-0 left-1/2 h-3 w-0.5 -translate-x-1/2 bg-border-strong" />
          <div
            className={cn(
              'absolute top-0 h-3 rounded-full',
              Math.abs(force) < 0.04 ? 'bg-success' : 'bg-warning',
            )}
            style={
              force >= 0
                ? { left: '50%', width: `${Math.max(1, force * 50)}%` }
                : { right: '50%', width: `${Math.max(1, -force * 50)}%` }
            }
          />
        </div>
        <div className="mt-2 flex justify-center">
          <Button size="sm" variant="secondary" onClick={trim}>
            Trim for {ias} knots
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-4 grid max-w-xl gap-3">
        <StepSlider
          id="w5-pitch"
          label="Pitch attitude"
          display={pitch === 0 ? 'level' : `${Math.abs(pitch)}° ${pitch > 0 ? 'up' : 'down'}`}
          value={pitch}
          min={limits.pitch[0]}
          max={limits.pitch[1]}
          step={0.5}
          valueText={describe(pitch, rpm, state)}
          onChange={(v) => update(v, rpm)}
          stepBy={1}
          unit="degree"
        />
        <StepSlider
          id="w5-rpm"
          label="Power"
          display={`${rpm.toLocaleString('en-US')} RPM`}
          value={rpm}
          min={limits.rpm[0]}
          max={limits.rpm[1]}
          step={50}
          valueText={describe(pitch, rpm, state)}
          onChange={(v) => update(pitch, v)}
          stepBy={100}
          unit="RPM"
        />
      </div>

      {mode === 'explore' && (
        <div
          className="mt-4 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Scenarios"
        >
          {SCENARIOS.map((s) => (
            <Button
              key={s.id}
              size="sm"
              variant="secondary"
              aria-pressed={pitch === s.pitch && rpm === s.rpm}
              onClick={() => update(s.pitch, s.rpm)}
            >
              {s.name}
            </Button>
          ))}
        </div>
      )}

      {mode === 'quiz' && (
        <div className="mt-4">
          <QuizPanel
            questions={QUESTIONS}
            check={(q) => ({
              correct: q.check(state),
              answer: `${pitch}° pitch, ${rpm} RPM: ${ias} KIAS, ${vs} fpm`,
            })}
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

function StepSlider({
  id,
  label,
  display,
  value,
  min,
  max,
  step,
  valueText,
  onChange,
  stepBy,
  unit,
}: {
  id: string;
  label: string;
  display: string;
  value: number;
  min: number;
  max: number;
  step: number;
  valueText: string;
  onChange: (value: number) => void;
  stepBy: number;
  unit: string;
}) {
  const units = (n: number) =>
    unit === 'degree' ? `${n} degree${n === 1 ? '' : 's'}` : `${n} ${unit}`;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="font-semibold">
          {label}
        </label>
        <span className="font-mono text-sm" aria-hidden>
          {display}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          aria-label={`Decrease ${label.toLowerCase()} by ${units(stepBy)}`}
          onClick={() => onChange(value - stepBy)}
        >
          <Minus aria-hidden className="size-4" />
        </Button>
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          aria-valuetext={valueText}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-11 flex-1 cursor-pointer accent-primary"
        />
        <Button
          variant="secondary"
          size="sm"
          aria-label={`Increase ${label.toLowerCase()} by ${units(stepBy)}`}
          onClick={() => onChange(value + stepBy)}
        >
          <Plus aria-hidden className="size-4" />
        </Button>
      </div>
    </div>
  );
}

const PX_PER_DEG = 4;

/** G1000-style attitude indicator, wings level; the horizon moves with pitch. */
function AttitudeIndicator({ pitch }: { pitch: number }) {
  const horizon = 100 + pitch * PX_PER_DEG;
  const rungs = [-20, -15, -10, -5, 5, 10, 15, 20];
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-44 select-none sm:w-52"
      role="img"
      aria-label={`Attitude indicator: ${pitch === 0 ? 'nose on the horizon' : `${Math.abs(pitch)} degrees nose ${pitch > 0 ? 'up' : 'down'}`}, wings level`}
    >
      <defs>
        <clipPath id="w5-adi-clip">
          <rect x={2} y={2} width={196} height={196} rx={10} />
        </clipPath>
      </defs>
      <g clipPath="url(#w5-adi-clip)">
        <g className="motion-safe:transition-transform" transform={`translate(0 ${horizon - 100})`}>
          <rect x={0} y={-400} width={200} height={500} className="fill-sky" />
          <rect x={0} y={100} width={200} height={500} className="fill-ground" />
          <line x1={0} x2={200} y1={100} y2={100} className="stroke-white" strokeWidth={2} />
          {rungs.map((p) => {
            const y = 100 - p * PX_PER_DEG;
            const half = p % 10 === 0 ? 30 : 15;
            return (
              <g key={p}>
                <line
                  x1={100 - half}
                  x2={100 + half}
                  y1={y}
                  y2={y}
                  className="stroke-white"
                  strokeWidth={1.5}
                />
                {p % 10 === 0 && (
                  <text
                    x={100 - half - 4}
                    y={y}
                    textAnchor="end"
                    dominantBaseline="central"
                    className="fill-white font-mono text-[11px]"
                  >
                    {Math.abs(p)}
                  </text>
                )}
              </g>
            );
          })}
        </g>
        <path
          d="M 40 100 h 36 l 6 6 M 160 100 h -36 l -6 6"
          className="stroke-arc-yellow"
          strokeWidth={5}
          fill="none"
        />
        <path
          d="M 100 100 l -24 13 h 9 l 15 -7 l 15 7 h 9 Z"
          className="fill-arc-yellow stroke-black"
        />
      </g>
      <rect
        x={2}
        y={2}
        width={196}
        height={196}
        rx={10}
        fill="none"
        className="stroke-border-strong"
        strokeWidth={2}
      />
    </svg>
  );
}

/** G1000-style vertical speed scale, ±2,000 fpm. */
function VerticalSpeed({ vs }: { vs: number }) {
  const PX = 0.042;
  const y = (v: number) => 100 - clamp(v, -2100, 2100) * PX;
  return (
    <svg
      viewBox="0 0 90 200"
      className="w-20 select-none sm:w-24"
      role="img"
      aria-label={`Vertical speed ${Math.abs(vs) < 50 ? 'zero, level' : `${Math.abs(vs)} feet per minute ${vs > 0 ? 'up' : 'down'}`}`}
    >
      <rect
        x={2}
        y={2}
        width={60}
        height={196}
        rx={4}
        className="fill-instrument stroke-border-strong"
        strokeWidth={2}
      />
      {[-2000, -1500, -1000, -500, 0, 500, 1000, 1500, 2000].map((v) => (
        <g key={v}>
          <line
            x1={4}
            x2={v % 1000 === 0 ? 18 : 12}
            y1={y(v)}
            y2={y(v)}
            className="stroke-instrument-text"
            strokeWidth={v === 0 ? 2.5 : 1.5}
          />
          {v % 1000 === 0 && (
            <text
              x={22}
              y={y(v)}
              dominantBaseline="central"
              className="fill-instrument-text font-mono text-[12px]"
            >
              {Math.abs(v / 1000)}
            </text>
          )}
        </g>
      ))}
      <g className="motion-safe:transition-transform" transform={`translate(0 ${y(vs) - 100})`}>
        <path
          d="M 30 100 l 10 -11 h 48 v 22 h -48 Z"
          className="fill-black stroke-instrument-text"
          strokeWidth={1.5}
        />
        <text
          x={86}
          y={100}
          textAnchor="end"
          dominantBaseline="central"
          className="fill-white font-mono text-[12px] font-bold"
        >
          {vs > 0 ? '+' : ''}
          {vs}
        </text>
      </g>
    </svg>
  );
}
