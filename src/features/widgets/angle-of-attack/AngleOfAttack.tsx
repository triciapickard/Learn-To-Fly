import { Minus, Plus } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { cn } from '@/lib/cn';
import { arcPath, clamp, smoothPath } from '../shared/geometry';
import { useAnnouncer } from '../shared/hooks';
import { QuizPanel } from '../shared/QuizPanel';
import { Arrow, Label } from '../shared/svg';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetMode, WidgetProps } from '../types';
import { LAYOUT, outlinePath, streamlines, toScreen } from './flow';
import {
  AOA_MAX,
  AOA_MIN,
  criticalAoA,
  describe,
  flowState,
  liftCoefficient,
  liftCurve,
  maxLift,
  QUESTIONS,
  stallWarning,
  stallWarningAoA,
} from './model';

const FLOW_LABEL = {
  attached: 'Attached',
  separating: 'Separating',
  stalled: 'Stalled',
} as const;

/** W4 — Angle of attack and lift (Section 16.5). */
export default function AngleOfAttack({ props, onQuizAnswer }: WidgetProps) {
  const initial = clamp(Number(props.initial ?? 4) || 0, AOA_MIN, AOA_MAX);
  const [aoa, setAoaState] = useState(initial);
  const [flaps, setFlapsState] = useState(props.flaps === 'true');
  const [mode, setMode] = useState<WidgetMode>(props.mode === 'quiz' ? 'quiz' : 'explore');
  const [message, announce] = useAnnouncer();

  const update = useCallback(
    (nextAoa: number, nextFlaps: boolean) => {
      const a = clamp(Math.round(nextAoa * 2) / 2, AOA_MIN, AOA_MAX);
      setAoaState(a);
      setFlapsState(nextFlaps);
      announce(`${nextFlaps ? 'Flaps down. ' : ''}${describe(a, nextFlaps)}`);
    },
    [announce],
  );

  const cl = liftCoefficient(aoa, flaps);
  const state = flowState(aoa, flaps);
  const warning = stallWarning(aoa, flaps);

  const description = (
    <>
      <p>
        A cross-section of the wing (a NACA 2412 airfoil, the Skyhawk&apos;s) tilted to the oncoming
        air. The angle between the chord line and the relative wind is the angle of attack. Up to
        about {criticalAoA(false)}° the airflow follows the curved upper surface and lift grows
        steadily with angle of attack. Past that critical angle the flow separates from the upper
        surface, starting at the trailing edge, and lift falls: the wing stalls.
      </p>
      <p>
        The graph shows lift coefficient against angle of attack: a straight rise, a rounded peak at
        the critical angle and a drop after it. The stall warning sounds from about{' '}
        {stallWarningAoA(false)}°. With flaps down the curve moves up, giving more lift at every
        angle, and the wing stalls a little earlier, at about {criticalAoA(true)}°.
      </p>
    </>
  );

  return (
    <WidgetFrame
      title="Angle of attack and lift"
      simplified
      mode={mode}
      onModeChange={setMode}
      quizAvailable
      onReset={() => update(initial, false)}
      description={description}
    >
      <p className="text-sm text-muted">
        Simplified model: the shapes are realistic, the numbers are illustrative.
      </p>
      <div className="mt-3 grid gap-4">
        <AirfoilView aoa={aoa} flaps={flaps} cl={cl} />
        <LiftGraph aoa={aoa} flaps={flaps} />
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-3" aria-hidden>
        <span className="font-mono text-lg font-semibold">
          α {aoa}° · C<sub>L</sub> {cl.toFixed(2)}
        </span>
        <span
          className={cn(
            'rounded-control px-2 py-0.5 text-sm font-semibold',
            state === 'attached' && 'bg-success-soft text-success',
            state === 'separating' && 'bg-warning-soft text-warning',
            state === 'stalled' && 'bg-danger-soft text-danger',
          )}
        >
          Airflow: {FLOW_LABEL[state]}
        </span>
        <span
          className={cn(
            'rounded-control border px-2 py-0.5 font-mono text-sm font-bold tracking-wider',
            warning
              ? 'border-danger bg-danger text-white motion-safe:animate-warning-pulse dark:text-bg'
              : 'border-border text-muted',
          )}
        >
          STALL WARNING
        </span>
      </div>

      <div className="mx-auto mt-4 flex max-w-xl items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          aria-label="Decrease angle of attack by 1 degree"
          onClick={() => update(aoa - 1, flaps)}
        >
          <Minus aria-hidden className="size-4" />
        </Button>
        <label htmlFor="w4-aoa" className="sr-only">
          Angle of attack in degrees
        </label>
        <input
          id="w4-aoa"
          type="range"
          min={AOA_MIN}
          max={AOA_MAX}
          step={0.5}
          value={aoa}
          aria-valuetext={describe(aoa, flaps)}
          onChange={(e) => update(Number(e.target.value), flaps)}
          className="h-11 flex-1 cursor-pointer accent-primary"
        />
        <Button
          variant="secondary"
          size="sm"
          aria-label="Increase angle of attack by 1 degree"
          onClick={() => update(aoa + 1, flaps)}
        >
          <Plus aria-hidden className="size-4" />
        </Button>
      </div>
      <div className="mt-2 flex justify-center">
        <Checkbox
          label="Flaps down"
          checked={flaps}
          onChange={(e) => update(aoa, e.target.checked)}
        />
      </div>

      {mode === 'quiz' && (
        <div className="mt-4">
          <QuizPanel
            questions={QUESTIONS}
            check={(q) => ({
              correct: q.check(aoa, flaps),
              answer: `${aoa}° angle of attack, flaps ${flaps ? 'down' : 'up'}`,
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

function AirfoilView({ aoa, flaps, cl }: { aoa: number; flaps: boolean; cl: number }) {
  const { lines, eddies } = streamlines(aoa, flaps);
  const le = toScreen({ x: 0, y: 0 }, aoa);
  const te = toScreen({ x: 1, y: 0 }, aoa);
  const chordDir = { x: (te.x - le.x) / LAYOUT.chord, y: (te.y - le.y) / LAYOUT.chord };
  const cp = toScreen({ x: 0.3, y: 0.06 }, aoa);
  const liftLength = Math.max(0, cl) * 38;
  const arcR = 44;
  return (
    <svg
      viewBox="0 0 360 200"
      className="mx-auto w-full max-w-xl select-none"
      role="img"
      aria-label={`Wing cross-section at ${aoa} degrees angle of attack${flaps ? ' with flaps down' : ''}. ${
        flowState(aoa, flaps) === 'attached'
          ? 'The airflow follows the upper surface.'
          : 'The airflow is breaking away from the upper surface, with eddies behind it.'
      }`}
    >
      {lines.map((line, i) => (
        <path
          key={i}
          d={smoothPath(line.points)}
          fill="none"
          className={line.side === 'upper' ? 'stroke-cyan' : 'stroke-primary'}
          strokeOpacity={0.75}
          strokeWidth={1.6}
        />
      ))}
      {eddies.map((e, i) => (
        <path
          key={i}
          d={`M ${e.x + e.r} ${e.y} A ${e.r} ${e.r} 0 1 1 ${e.x} ${e.y + e.r}`}
          fill="none"
          className="stroke-danger"
          strokeWidth={1.6}
        />
      ))}
      <line
        x1={le.x - chordDir.x * 56}
        y1={le.y - chordDir.y * 56}
        x2={te.x + chordDir.x * 20}
        y2={te.y + chordDir.y * 20}
        className="stroke-muted"
        strokeDasharray="4 4"
      />
      <path
        d={outlinePath(aoa, flaps)}
        className="fill-surface-2 stroke-text"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {Math.abs(aoa) >= 2 && (
        <>
          <line
            x1={le.x}
            y1={le.y}
            x2={le.x - arcR - 8}
            y2={le.y}
            className="stroke-muted"
            strokeWidth={1}
          />
          <path
            d={arcPath(le.x, le.y, arcR, Math.min(270, 270 + aoa), Math.max(270, 270 + aoa))}
            fill="none"
            className="stroke-text"
            strokeWidth={1.5}
          />
          <Label x={le.x - arcR - 16} y={le.y + (aoa > 0 ? -9 : 9)} className="fill-text">
            α
          </Label>
        </>
      )}
      <Arrow from={{ x: 6, y: 22 }} to={{ x: 70, y: 22 }} className="stroke-muted fill-muted" />
      <Label x={8} y={9} anchor="start" className="fill-muted">
        Relative wind
      </Label>
      {liftLength > 6 && (
        <>
          <Arrow
            from={cp}
            to={{ x: cp.x, y: cp.y - liftLength - 10 }}
            className="stroke-success fill-success"
            width={4}
          />
          <Label x={cp.x + 26} y={cp.y - liftLength - 4} className="fill-success">
            Lift
          </Label>
        </>
      )}
    </svg>
  );
}

const G = { left: 40, right: 308, top: 14, bottom: 170 };
const CL_MIN = -0.4;
const CL_MAX = 2.4;
const gx = (aoa: number) => G.left + ((aoa - AOA_MIN) / (AOA_MAX - AOA_MIN)) * (G.right - G.left);
const gy = (cl: number) => G.bottom - ((cl - CL_MIN) / (CL_MAX - CL_MIN)) * (G.bottom - G.top);

function LiftGraph({ aoa, flaps }: { aoa: number; flaps: boolean }) {
  const line = (f: boolean) =>
    liftCurve(f)
      .map((p) => `${gx(p.aoa).toFixed(1)},${gy(p.cl).toFixed(1)}`)
      .join(' ');
  const crit = criticalAoA(flaps);
  const warn = stallWarningAoA(flaps);
  const cl = liftCoefficient(aoa, flaps);
  return (
    <svg
      viewBox="0 0 320 206"
      className="mx-auto w-full max-w-md select-none"
      role="img"
      aria-label={`Graph of lift coefficient against angle of attack${flaps ? ', flaps down' : ''}. Lift rises in a straight line to a peak of ${maxLift(flaps).toFixed(2)} at ${crit} degrees, the critical angle, then falls. Current point: ${aoa} degrees, ${cl.toFixed(2)}.`}
    >
      <rect
        x={gx(warn)}
        y={G.top}
        width={gx(crit) - gx(warn)}
        height={G.bottom - G.top}
        className="fill-warning-soft"
      />
      <rect
        x={gx(crit)}
        y={G.top}
        width={G.right - gx(crit)}
        height={G.bottom - G.top}
        className="fill-danger-soft"
      />
      {[0, 0.5, 1, 1.5, 2].map((v) => (
        <g key={v}>
          <line x1={G.left} x2={G.right} y1={gy(v)} y2={gy(v)} className="stroke-border" />
          <text
            x={G.left - 6}
            y={gy(v)}
            textAnchor="end"
            dominantBaseline="central"
            className="fill-muted font-mono text-[12px]"
          >
            {v}
          </text>
        </g>
      ))}
      {[-4, 0, 4, 8, 12, 16, 20].map((a) => (
        <text
          key={a}
          x={gx(a)}
          y={G.bottom + 14}
          textAnchor="middle"
          className="fill-muted font-mono text-[12px]"
        >
          {a}°
        </text>
      ))}
      <text x={G.left - 34} y={G.top - 2} className="fill-muted text-[12px] font-semibold">
        C
        <tspan baselineShift="sub" className="text-[9px]">
          L
        </tspan>
      </text>
      <text
        x={(G.left + G.right) / 2}
        y={G.bottom + 32}
        textAnchor="middle"
        className="fill-muted text-[12px] font-semibold"
      >
        Angle of attack
      </text>
      <polyline
        points={line(!flaps)}
        fill="none"
        className="stroke-border-strong"
        strokeWidth={1.5}
        strokeDasharray="4 4"
      />
      <polyline points={line(flaps)} fill="none" className="stroke-primary" strokeWidth={3} />
      <Label x={gx(crit)} y={G.top + 10} className="fill-danger">
        Stall
      </Label>
      <circle
        cx={gx(aoa)}
        cy={gy(cl)}
        r={6}
        className="fill-primary stroke-surface"
        strokeWidth={2}
      />
    </svg>
  );
}
