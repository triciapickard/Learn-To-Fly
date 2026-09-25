import { AlertTriangle, Minus, Plus } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Button } from '@/components/Button';
import { LoadingRegion, Skeleton } from '@/components/Skeleton';
import { useAircraft } from '@/features/content/api';
import { clamp, polar } from '../shared/geometry';
import { useAnnouncer } from '../shared/hooks';
import { QuizPanel } from '../shared/QuizPanel';
import { Arrow, Gauge, Label } from '../shared/svg';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetMode, WidgetProps } from '../types';
import {
  curve,
  describe,
  formatG,
  isCorrect,
  LIMIT_LOAD,
  MAX_BANK,
  pct,
  quizQuestions,
  turnLoad,
  type TurnLoad,
} from './model';

/** W14 — Bank angle, load factor and stall speed (Section 16.15). */
export default function LoadFactor({ props, onQuizAnswer }: WidgetProps) {
  const { data, isPending, isError } = useAircraft();
  const initial = clamp(Number(props.initial ?? 0) || 0, 0, MAX_BANK);
  const [bank, setBankState] = useState(initial);
  const [mode, setMode] = useState<WidgetMode>(props.mode === 'quiz' ? 'quiz' : 'explore');
  const [message, announce] = useAnnouncer();
  const vs1 = data?.aircraft.vspeeds.vs1?.kias;

  const setBank = useCallback(
    (value: number) => {
      const next = clamp(Math.round(value), 0, MAX_BANK);
      setBankState(next);
      if (vs1) announce(describe(turnLoad(next, vs1)));
    },
    [vs1, announce],
  );

  if (isPending) {
    return (
      <LoadingRegion label="Loading the load factor diagram" className="my-8">
        <Skeleton className="h-80 w-full" />
      </LoadingRegion>
    );
  }
  if (isError || !vs1) {
    return (
      <p className="my-8 text-muted">
        The load factor diagram could not load. In a level turn the load factor is 1 ÷ cos(bank):
        1.41 G at 45° and 2 G at 60°.
      </p>
    );
  }

  const load = turnLoad(bank, vs1);
  const speech = describe(load);

  const description = (
    <>
      <p>
        A rear view of the airplane in a level, coordinated turn. The lift arrow tilts with the
        wings. Its vertical part must still equal the weight to hold altitude, so total lift, and
        the load factor, grow as the bank steepens: load factor = 1 ÷ cos(bank). Its horizontal part
        is what turns the airplane.
      </p>
      <p>
        Stall speed rises with the square root of the load factor. With a clean stall speed of {vs1}{' '}
        KIAS: 30° gives 1.15 G and {Math.round(turnLoad(30, vs1).stall)} KIAS; 45° gives 1.41 G and{' '}
        {Math.round(turnLoad(45, vs1).stall)} KIAS; 60° gives 2 G and{' '}
        {Math.round(turnLoad(60, vs1).stall)} KIAS; 75° gives 3.86 G and{' '}
        {Math.round(turnLoad(75, vs1).stall)} KIAS, past the {LIMIT_LOAD} G limit load.
      </p>
    </>
  );

  return (
    <WidgetFrame
      title="Bank angle, load factor and stall speed"
      simplified
      mode={mode}
      onModeChange={setMode}
      quizAvailable
      onReset={() => setBank(initial)}
      description={description}
    >
      <div className="grid items-center gap-4 sm:grid-cols-[3fr_2fr]">
        <RearView load={load} />
        <svg
          viewBox="0 0 220 220"
          className="mx-auto w-full max-w-[160px] select-none sm:max-w-[200px]"
          role="img"
          aria-label={`G meter showing ${formatG(load.n)}`}
        >
          <Gauge
            cx={110}
            cy={110}
            r={96}
            min={0}
            max={6}
            startAngle={-135}
            endAngle={135}
            value={Math.min(load.n, 6)}
            majorStep={1}
            minorStep={0.5}
            labelStep={1}
            arcs={[
              { from: 0, to: LIMIT_LOAD, className: 'stroke-arc-green', inset: 5, width: 6 },
              { from: LIMIT_LOAD, to: 6, className: 'stroke-arc-red', inset: 5, width: 6 },
            ]}
            label={
              <text
                x={110}
                y={150}
                textAnchor="middle"
                className="fill-instrument-text font-mono text-[16px] font-bold"
              >
                {formatG(load.n)}
              </text>
            }
          />
        </svg>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Readout label="Load factor" value={formatG(load.n)} />
        <Readout
          label="Stall speed"
          value={`${Math.round(load.stall)} KIAS`}
          note={`clean, wings level: ${vs1}`}
        />
        <Readout label="Stall speed increase" value={`+${pct(load.stallIncrease)}`} />
        <Readout
          label="Back pressure"
          value={`+${pct(load.extraLift)} lift`}
          bar={Math.min(1, load.extraLift / (LIMIT_LOAD - 1))}
        />
      </dl>

      {load.overLimit && (
        <p className="mt-3 flex items-start gap-2 rounded-control bg-danger-soft p-3 text-sm">
          <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0 text-danger" />
          <span>
            Over the {LIMIT_LOAD} G limit load of the normal category: the airframe could be
            damaged.
          </span>
        </p>
      )}

      <Graph load={load} />

      <div className="mx-auto mt-4 flex max-w-xl items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          aria-label="Decrease bank by 5 degrees"
          onClick={() => setBank(bank - 5)}
        >
          <Minus aria-hidden className="size-4" />
        </Button>
        <label htmlFor="w14-bank" className="sr-only">
          Bank angle in degrees
        </label>
        <input
          id="w14-bank"
          type="range"
          min={0}
          max={MAX_BANK}
          step={1}
          value={bank}
          aria-valuetext={speech}
          onChange={(e) => setBank(Number(e.target.value))}
          className="h-11 flex-1 cursor-pointer accent-primary"
        />
        <Button
          variant="secondary"
          size="sm"
          aria-label="Increase bank by 5 degrees"
          onClick={() => setBank(bank + 5)}
        >
          <Plus aria-hidden className="size-4" />
        </Button>
      </div>
      <p className="mt-1 text-center font-mono text-sm font-semibold" aria-hidden>
        Bank {bank}°
      </p>

      {mode === 'quiz' && (
        <div className="mt-4">
          <QuizPanel
            questions={quizQuestions(vs1)}
            check={(q) => ({ correct: isCorrect(bank, q), answer: `${bank}° bank` })}
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

function Readout({
  label,
  value,
  note,
  bar,
}: {
  label: string;
  value: string;
  note?: string;
  bar?: number;
}) {
  return (
    <div className="rounded-control bg-surface-2 p-3">
      <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</dt>
      <dd className="font-mono text-lg font-semibold">{value}</dd>
      {note && <dd className="text-xs text-muted">{note}</dd>}
      {bar !== undefined && (
        <dd aria-hidden className="mt-1 h-2 overflow-hidden rounded-full bg-border">
          <div className="h-full bg-primary" style={{ width: `${bar * 100}%` }} />
        </dd>
      )}
    </div>
  );
}

const C = { x: 160, y: 150 };

/** Rear view of the banked airplane with lift, its components and weight. */
function RearView({ load }: { load: TurnLoad }) {
  // Arrows stay to scale with each other; the scale shrinks as lift grows so they fit.
  const s = Math.min(55, 145 / load.n);
  const liftTip = polar(C.x, C.y, s * load.n, load.bank);
  const vertTip = { x: C.x, y: C.y - s };
  const horizTip = { x: C.x + s * load.horizontal, y: C.y };
  const weightTip = { x: C.x, y: C.y + s };
  return (
    <svg
      viewBox="0 0 320 290"
      className="w-full select-none"
      role="img"
      aria-label={`Rear view of the airplane banked ${load.bank} degrees right. Lift is ${load.n.toFixed(2)} times the weight.`}
    >
      <line
        x1={0}
        x2={320}
        y1={C.y}
        y2={C.y}
        className="stroke-border-strong"
        strokeDasharray="4 6"
      />
      <g
        transform={`rotate(${load.bank} ${C.x} ${C.y})`}
        className="motion-safe:transition-transform"
      >
        <g transform={`translate(${C.x} ${C.y})`} strokeWidth={2} strokeLinejoin="round">
          <path d="M -3 -18 L 0 -62 L 3 -18 Z" className="fill-surface-2 stroke-text" />
          <rect x={-45} y={2} width={90} height={4} rx={2} className="fill-surface-2 stroke-text" />
          <line x1={-12} y1={14} x2={-30} y2={27} className="stroke-text" />
          <line x1={12} y1={14} x2={30} y2={27} className="stroke-text" />
          <circle cx={-30} cy={32} r={6} className="fill-text" />
          <circle cx={30} cy={32} r={6} className="fill-text" />
          <line x1={-13} y1={6} x2={-62} y2={-18} className="stroke-text" />
          <line x1={13} y1={6} x2={62} y2={-18} className="stroke-text" />
          <ellipse cx={0} cy={0} rx={16} ry={20} className="fill-surface-2 stroke-text" />
          <rect
            x={-120}
            y={-24}
            width={240}
            height={7}
            rx={3}
            className="fill-surface-2 stroke-text"
          />
        </g>
      </g>
      <line
        x1={vertTip.x}
        y1={vertTip.y}
        x2={liftTip.x}
        y2={liftTip.y}
        className="stroke-muted"
        strokeDasharray="3 4"
      />
      <line
        x1={horizTip.x}
        y1={horizTip.y}
        x2={liftTip.x}
        y2={liftTip.y}
        className="stroke-muted"
        strokeDasharray="3 4"
      />
      <Arrow from={C} to={weightTip} className="stroke-muted fill-muted" />
      <Arrow from={C} to={vertTip} className="stroke-success fill-success" />
      {load.horizontal * s > 12 && (
        <Arrow from={C} to={horizTip} className="stroke-magenta fill-magenta" />
      )}
      <Arrow from={C} to={liftTip} className="stroke-primary fill-primary" width={4} />
      <Label x={liftTip.x + (load.bank > 20 ? 0 : 26)} y={liftTip.y - 12} className="fill-primary">
        Lift
      </Label>
      <Label x={C.x - 8} y={vertTip.y + 10} anchor="end" className="fill-success">
        Vertical
      </Label>
      {load.horizontal * s > 40 && (
        <Label x={(C.x + horizTip.x) / 2} y={C.y + 14} className="fill-magenta">
          Horizontal
        </Label>
      )}
      <Label x={C.x + 8} y={weightTip.y + 10} anchor="start" className="fill-muted">
        Weight
      </Label>
    </svg>
  );
}

const G = { left: 44, right: 304, top: 16, bottom: 160 };
const gx = (bank: number) => G.left + (bank / MAX_BANK) * (G.right - G.left);
const gy = (n: number) => G.bottom - (n / 6) * (G.bottom - G.top);

/** Load factor vs bank graph with the current point. */
function Graph({ load }: { load: TurnLoad }) {
  const points = curve()
    .filter((p) => p.n <= 6)
    .map((p) => `${gx(p.bank).toFixed(1)},${gy(p.n).toFixed(1)}`)
    .join(' ');
  return (
    <svg
      viewBox="0 0 320 196"
      className="mx-auto mt-4 w-full max-w-lg select-none"
      role="img"
      aria-label={`Graph of load factor against bank angle. The curve stays near 1 G up to 30 degrees, reaches 2 G at 60 degrees and climbs steeply after that. Current point: ${load.bank} degrees, ${formatG(load.n)}.`}
    >
      {[0, 1, 2, 3, 4, 5, 6].map((n) => (
        <g key={n}>
          <line
            x1={G.left}
            x2={G.right}
            y1={gy(n)}
            y2={gy(n)}
            className="stroke-border"
            strokeWidth={1}
          />
          <text
            x={G.left - 8}
            y={gy(n)}
            textAnchor="end"
            dominantBaseline="central"
            className="fill-muted font-mono text-[12px]"
          >
            {n}
          </text>
        </g>
      ))}
      {[0, 15, 30, 45, 60, 75].map((b) => (
        <text
          key={b}
          x={gx(b)}
          y={G.bottom + 14}
          textAnchor="middle"
          className="fill-muted font-mono text-[12px]"
        >
          {b}°
        </text>
      ))}
      <text x={G.left - 30} y={G.top - 4} className="fill-muted text-[12px] font-semibold">
        G
      </text>
      <text
        x={(G.left + G.right) / 2}
        y={G.bottom + 32}
        textAnchor="middle"
        className="fill-muted text-[12px] font-semibold"
      >
        Bank angle
      </text>
      <line
        x1={G.left}
        x2={G.right}
        y1={gy(LIMIT_LOAD)}
        y2={gy(LIMIT_LOAD)}
        className="stroke-danger"
        strokeDasharray="5 4"
        strokeWidth={1.5}
      />
      <Label x={G.left + 6} y={gy(LIMIT_LOAD) - 10} anchor="start" className="fill-danger">
        {LIMIT_LOAD} G limit load
      </Label>
      <polyline points={points} fill="none" className="stroke-primary" strokeWidth={3} />
      <line
        x1={gx(load.bank)}
        x2={gx(load.bank)}
        y1={G.bottom}
        y2={gy(Math.min(load.n, 6))}
        className="stroke-primary"
        strokeDasharray="2 3"
      />
      <circle
        cx={gx(load.bank)}
        cy={gy(Math.min(load.n, 6))}
        r={7}
        className="fill-primary stroke-surface"
        strokeWidth={2}
      />
    </svg>
  );
}
