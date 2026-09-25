import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { cn } from '@/lib/cn';
import { useAnnouncer, useDrag, useTween } from '../shared/hooks';
import { QuizPanel } from '../shared/QuizPanel';
import { Label } from '../shared/svg';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetMode, WidgetProps } from '../types';
import { axes, buildAirframe, project, SURFACE_OF, type Part } from './airframe';
import {
  answerText,
  attitude,
  deflections,
  describeControl,
  FLAP_SETTINGS,
  NEUTRAL,
  QUESTIONS,
  step,
  SURFACES,
  surfaceInfo,
  type ControlAxis,
  type ControlInputs,
  type SurfaceId,
} from './model';

const SURFACE_COLOR: Record<SurfaceId, string> = {
  ailerons: 'var(--color-cyan)',
  elevator: 'var(--color-magenta)',
  rudder: 'var(--color-accent)',
  flaps: 'var(--color-success)',
  'trim-tab': 'var(--color-gold)',
};

function partColor(part: Part): string {
  const surface = SURFACE_OF[part];
  if (surface) return SURFACE_COLOR[surface];
  if (part === 'windshield') return 'var(--color-instrument)';
  return 'var(--color-instrument-text)';
}

type ChangeKind = ControlAxis | 'flaps' | 'trim';

/** W1 — Control surfaces explorer (Section 16.2). */
export default function ControlSurfaces({ props, onQuizAnswer }: WidgetProps) {
  const [inputs, setInputs] = useState<ControlInputs>(NEUTRAL);
  const [mode, setMode] = useState<WidgetMode>(props.mode === 'quiz' ? 'quiz' : 'explore');
  const [showAxes, setShowAxes] = useState(props.axes === 'true');
  const [selected, setSelected] = useState<SurfaceId | null>(null);
  const [lastChange, setLastChange] = useState('All controls centered.');
  const [message, announce] = useAnnouncer(300);

  const target = attitude(inputs);
  const [roll = 0, pitch = 0, yaw = 0] = useTween([target.roll, target.pitch, target.yaw]);
  const polys = useMemo(
    () => project(buildAirframe(deflections(inputs)), { roll, pitch, yaw }),
    [inputs, roll, pitch, yaw],
  );
  const axisLines = showAxes ? axes({ roll, pitch, yaw }) : [];

  const change = useCallback(
    (kind: ChangeKind, next: ControlInputs) => {
      setInputs(next);
      const text = describeControl(kind, next);
      setLastChange(text);
      announce(text);
    },
    [announce],
  );

  const select = (id: SurfaceId) => {
    setSelected(id);
    announce(`${surfaceInfo(id).name} selected.`);
  };

  const info = selected ? surfaceInfo(selected) : null;

  const description = (
    <>
      <p>
        A three-quarter view from behind and to the left of a high-wing trainer. The control
        surfaces are colored: ailerons on the outer trailing edge of each wing, flaps on the inner
        trailing edge, the elevator on the back of the horizontal tail with a small trim tab, and
        the rudder on the back of the fin.
      </p>
      <p>
        Turning the yoke right raises the right aileron and lowers the left one, and the airplane
        rolls right about its longitudinal axis. Pulling the yoke back raises the elevator, and the
        nose pitches up about the lateral axis. Pushing the right pedal moves the rudder right, and
        the nose yaws right about the vertical axis. The flaps go down together to 10°, 20° or 30°.
        Nose-up trim moves the trim tab down, which pushes the elevator up.
      </p>
    </>
  );

  return (
    <WidgetFrame
      title="Control surfaces explorer"
      mode={mode}
      onModeChange={setMode}
      quizAvailable
      onReset={() => {
        change('roll', NEUTRAL);
        setSelected(null);
      }}
      description={description}
    >
      <svg
        viewBox="0 0 460 340"
        className="mx-auto w-full max-w-2xl select-none"
        role="img"
        aria-label={`Airplane seen from behind and to the left. ${lastChange}`}
      >
        {polys.map((p, i) => {
          const surface = SURFACE_OF[p.part];
          const isSelected = surface !== undefined && surface === selected;
          return (
            <polygon
              key={i}
              points={p.points}
              style={{
                fill: `color-mix(in srgb, ${partColor(p.part)} ${Math.round(p.light * 100)}%, black)`,
              }}
              fillOpacity={p.part === 'prop' ? 0.18 : 1}
              stroke={isSelected ? 'var(--color-primary)' : 'var(--color-instrument)'}
              strokeWidth={isSelected ? 2.5 : 0.6}
              strokeLinejoin="round"
              className={surface ? 'cursor-pointer' : undefined}
              onClick={surface ? () => select(surface) : undefined}
            />
          );
        })}
        {axisLines.map((line) => (
          <g key={line.id}>
            <line
              x1={line.from.x}
              y1={line.from.y}
              x2={line.to.x}
              y2={line.to.y}
              className="stroke-danger"
              strokeWidth={2}
              strokeDasharray="6 4"
            />
            <Label
              x={line.to.x}
              y={line.to.y + (line.id === 'yaw' ? -10 : 12)}
              className="fill-danger"
            >
              {line.label}
            </Label>
          </g>
        ))}
      </svg>

      <div
        role="group"
        aria-label="Control surfaces"
        className="mt-2 flex flex-wrap justify-center gap-2"
      >
        {SURFACES.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={selected === s.id}
            onClick={() => select(s.id)}
            className={cn(
              'flex min-h-11 items-center gap-2 rounded-control border px-3 text-sm font-semibold',
              selected === s.id
                ? 'border-primary bg-primary-soft text-text'
                : 'border-border-strong text-text hover:bg-surface-2',
            )}
          >
            <span
              aria-hidden
              className="size-3 rounded-sm"
              style={{ background: SURFACE_COLOR[s.id] }}
            />
            {s.name}
          </button>
        ))}
      </div>

      {info && mode === 'explore' && (
        <div className="mx-auto mt-3 max-w-xl rounded-control bg-surface-2 p-3 text-sm">
          <p className="font-semibold">{info.name}</p>
          <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
            <dt className="text-muted">Moved by</dt>
            <dd>{info.control}</dd>
            <dt className="text-muted">Axis</dt>
            <dd>{info.axis}</dd>
          </dl>
          <p className="mt-2">{info.effect}</p>
        </div>
      )}

      <p className="mt-3 text-center font-medium" aria-hidden>
        {lastChange}
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ControlCard title="Yoke">
          <YokePad inputs={inputs} onChange={change} />
          <div className="mt-2 grid grid-cols-2 gap-2">
            <StepButton
              label="Roll left"
              onClick={() => change('roll', step(inputs, 'roll', -0.5))}
            />
            <StepButton
              label="Roll right"
              onClick={() => change('roll', step(inputs, 'roll', 0.5))}
            />
            <StepButton
              label="Pitch down"
              hint="push"
              onClick={() => change('pitch', step(inputs, 'pitch', -0.5))}
            />
            <StepButton
              label="Pitch up"
              hint="pull"
              onClick={() => change('pitch', step(inputs, 'pitch', 0.5))}
            />
          </div>
        </ControlCard>
        <ControlCard title="Rudder pedals">
          <Pedals inputs={inputs} onChange={change} />
          <div className="mt-2 grid grid-cols-2 gap-2">
            <StepButton label="Yaw left" onClick={() => change('yaw', step(inputs, 'yaw', -0.5))} />
            <StepButton label="Yaw right" onClick={() => change('yaw', step(inputs, 'yaw', 0.5))} />
          </div>
        </ControlCard>
        <ControlCard title="Flap lever">
          <div role="group" aria-label="Flaps" className="flex flex-wrap gap-2">
            {FLAP_SETTINGS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={inputs.flaps === f}
                onClick={() => change('flaps', { ...inputs, flaps: f })}
                className={cn(
                  'min-h-11 min-w-14 rounded-control border px-3 font-mono font-semibold',
                  inputs.flaps === f
                    ? 'border-primary bg-primary text-primary-contrast'
                    : 'border-border-strong hover:bg-surface-2',
                )}
              >
                {f}°
              </button>
            ))}
          </div>
        </ControlCard>
        <ControlCard title="Trim wheel">
          <div className="grid grid-cols-2 gap-2">
            <StepButton
              label="Trim nose down"
              onClick={() => change('trim', { ...inputs, trim: Math.max(-1, inputs.trim - 0.5) })}
            />
            <StepButton
              label="Trim nose up"
              onClick={() => change('trim', { ...inputs, trim: Math.min(1, inputs.trim + 0.5) })}
            />
          </div>
        </ControlCard>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Checkbox
          label="Show the three axes"
          checked={showAxes}
          onChange={(e) => setShowAxes(e.target.checked)}
        />
        <Button
          variant="secondary"
          size="sm"
          onClick={() => change('roll', { ...NEUTRAL, flaps: inputs.flaps })}
        >
          Center the controls
        </Button>
      </div>

      {mode === 'quiz' && (
        <div className="mt-4">
          {selected && (
            <p className="mb-2 text-sm">
              Selected: <strong>{surfaceInfo(selected).name}</strong>
            </p>
          )}
          <QuizPanel
            questions={QUESTIONS}
            check={(q) => ({
              correct: q.check(inputs, selected),
              answer: answerText(q, inputs, selected),
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

function ControlCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="rounded-control border border-border p-3">
      <legend className="px-1 font-semibold">{title}</legend>
      {children}
    </fieldset>
  );
}

function StepButton({
  label,
  hint,
  onClick,
}: {
  label: string;
  hint?: string;
  onClick: () => void;
}) {
  return (
    <Button variant="secondary" size="sm" onClick={onClick}>
      {label}
      {hint && <span className="font-normal text-muted"> ({hint})</span>}
    </Button>
  );
}

/** Drag the yoke: left/right rolls, up (push) and down (pull) pitches. */
function YokePad({
  inputs,
  onChange,
}: {
  inputs: ControlInputs;
  onChange: (kind: ChangeKind, next: ControlInputs) => void;
}) {
  const drag = useDrag(
    useCallback(
      (p: { x: number; y: number }) => {
        const prev = inputs;
        const roll = Math.round(Math.max(-1, Math.min(1, (p.x - 100) / 70)) * 20) / 20;
        const pitch = Math.round(Math.max(-1, Math.min(1, (p.y - 60) / 40)) * 20) / 20;
        const kind: ChangeKind =
          Math.abs(roll - prev.roll) >= Math.abs(pitch - prev.pitch) ? 'roll' : 'pitch';
        onChange(kind, { ...prev, roll, pitch });
      },
      [inputs, onChange],
    ),
  );
  return (
    <svg
      viewBox="0 0 200 120"
      className="w-full cursor-grab touch-none select-none"
      aria-hidden
      {...drag}
    >
      <rect x={1} y={1} width={198} height={118} rx={8} className="fill-surface-2 stroke-border" />
      <text x={100} y={14} textAnchor="middle" className="fill-muted text-[10px] font-semibold">
        PUSH
      </text>
      <text x={100} y={114} textAnchor="middle" className="fill-muted text-[10px] font-semibold">
        PULL
      </text>
      <g
        transform={`translate(${100 + inputs.roll * 30} ${60 + inputs.pitch * 28}) rotate(${inputs.roll * 40})`}
      >
        <path
          d="M -46 -14 Q -50 10 -30 12 L 30 12 Q 50 10 46 -14 L 36 -14 Q 38 2 28 2 L -28 2 Q -38 2 -36 -14 Z"
          className="fill-text"
        />
        <circle r={7} className="fill-primary" />
      </g>
    </svg>
  );
}

/** Drag across the pedals: left or right pedal forward. */
function Pedals({
  inputs,
  onChange,
}: {
  inputs: ControlInputs;
  onChange: (kind: ChangeKind, next: ControlInputs) => void;
}) {
  const drag = useDrag(
    useCallback(
      (p: { x: number; y: number }) => {
        const yaw = Math.round(Math.max(-1, Math.min(1, (p.x - 100) / 60)) * 20) / 20;
        onChange('yaw', { ...inputs, yaw });
      },
      [inputs, onChange],
    ),
  );
  const pedal = (x: number, forward: number, label: string) => (
    <g transform={`translate(${x} ${50 - forward * 16})`}>
      <rect x={-22} y={-22} width={44} height={44} rx={8} className="fill-text" />
      <text y={4} textAnchor="middle" className="fill-surface text-[12px] font-bold">
        {label}
      </text>
    </g>
  );
  return (
    <svg
      viewBox="0 0 200 100"
      className="w-full cursor-grab touch-none select-none"
      aria-hidden
      {...drag}
    >
      <rect x={1} y={1} width={198} height={98} rx={8} className="fill-surface-2 stroke-border" />
      {pedal(60, Math.max(0, -inputs.yaw) - Math.max(0, inputs.yaw), 'L')}
      {pedal(140, Math.max(0, inputs.yaw) - Math.max(0, -inputs.yaw), 'R')}
    </svg>
  );
}
