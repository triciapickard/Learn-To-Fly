import { useCallback, useState, type ReactNode } from 'react';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { STANDARD_RATE } from '@shared/aviation/turns';
import { clamp, polar } from '../shared/geometry';
import { useAnnouncer } from '../shared/hooks';
import { QuizPanel } from '../shared/QuizPanel';
import { Arrow, Label } from '../shared/svg';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetMode, WidgetProps } from '../types';
import {
  bankText,
  coordinatedRudder,
  describe,
  MAX_BANK,
  quizQuestions,
  rudderText,
  standardRate,
  turnState,
  type TurnState,
} from './model';

/** W6 — Turn coordinator and slip ball (Section 16.7). */
export default function TurnCoordinator({ props, onQuizAnswer }: WidgetProps) {
  const [bank, setBankState] = useState(0);
  const [rudder, setRudderState] = useState(0);
  const [tas, setTasState] = useState(100);
  const [mode, setMode] = useState<WidgetMode>(props.mode === 'quiz' ? 'quiz' : 'explore');
  const [message, announce] = useAnnouncer();

  const state = turnState(bank, rudder, tas);
  const update = useCallback(
    (next: { bank?: number; rudder?: number; tas?: number }) => {
      const b = clamp(Math.round(next.bank ?? bank), -MAX_BANK, MAX_BANK);
      const r = clamp(Math.round((next.rudder ?? rudder) * 100) / 100, -1, 1);
      const t = clamp(next.tas ?? tas, 60, 140);
      setBankState(b);
      setRudderState(r);
      setTasState(t);
      announce(describe(turnState(b, r, t)));
    },
    [bank, rudder, tas, announce],
  );

  const std = standardRate(tas);
  const coordinationBadge =
    state.coordination === 'coordinated' ? (
      <Badge variant="complete">Coordinated</Badge>
    ) : (
      <Badge variant="warning">{state.coordination === 'slip' ? 'Slipping' : 'Skidding'}</Badge>
    );

  const description = (
    <>
      <p>
        Three views of the same turn. A classic turn coordinator: a miniature airplane that tilts
        with the rate of turn (the L and R marks are standard rate, 3° per second) above a ball in a
        curved glass tube. The top of a G1000 attitude indicator: the roll pointer shows the bank
        and the small trapezoid under it moves like the ball. And a view from above showing where
        the nose points compared with the flight path.
      </p>
      <p>
        When the rudder matches the bank, the ball is centered and the nose follows the flight path.
        Too little rudder is a slip: the ball falls to the inside of the turn and the nose points
        outside the path. Too much rudder is a skid: the ball slides to the outside and the nose
        yaws into the turn. Either way, step on the ball: press the rudder on the side the ball has
        moved to.
      </p>
      <p>
        Standard rate at {tas} knots true airspeed needs about {Math.round(std.exact)}° of bank; the
        rule of thumb TAS ÷ 10 + 7 gives {Math.round(std.ruleOfThumb)}°.
      </p>
    </>
  );

  return (
    <WidgetFrame
      title="Turn coordinator and slip ball"
      simplified
      mode={mode}
      onModeChange={setMode}
      quizAvailable
      onReset={() => update({ bank: 0, rudder: 0, tas: 100 })}
      description={description}
    >
      <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-3">
        <Instrument caption="Turn coordinator">
          <ClassicTurnCoordinator state={state} />
        </Instrument>
        <Instrument caption="G1000 roll and slip/skid">
          <G1000Slip state={state} />
        </Instrument>
        <Instrument caption="From above">
          <TopDown state={state} />
        </Instrument>
      </div>

      <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-center" aria-hidden>
        {coordinationBadge}
        <span className="font-semibold">
          {state.coordination === 'coordinated' ? 'Ball centered' : state.advice}
        </span>
      </p>

      <div className="mx-auto mt-4 grid max-w-xl gap-3">
        <Slider
          id="w6-bank"
          label="Bank"
          value={bank}
          min={-MAX_BANK}
          max={MAX_BANK}
          display={bank === 0 ? 'wings level' : `${Math.abs(bank)}° ${bank > 0 ? 'right' : 'left'}`}
          valueText={bankText(bank)}
          onChange={(v) => update({ bank: v })}
          ends={['Left', 'Right']}
        />
        <Slider
          id="w6-rudder"
          label="Rudder"
          value={Math.round(rudder * 100)}
          min={-100}
          max={100}
          display={
            rudder === 0
              ? 'neutral'
              : `${Math.round(Math.abs(rudder) * 100)}% ${rudder > 0 ? 'right' : 'left'}`
          }
          valueText={rudderText(rudder)}
          onChange={(v) => update({ rudder: v / 100 })}
          ends={['Left pedal', 'Right pedal']}
        />
        <Slider
          id="w6-tas"
          label="True airspeed"
          value={tas}
          min={60}
          max={140}
          step={5}
          display={`${tas} KTAS`}
          valueText={`${tas} knots`}
          onChange={(v) => update({ tas: v })}
        />
      </div>

      <div className="mx-auto mt-4 max-w-xl rounded-control bg-surface-2 p-3 text-sm">
        <p>
          <strong>Turn rate:</strong>{' '}
          <span className="font-mono">{Math.abs(state.rate).toFixed(1)}°/s</span>
          {Math.abs(Math.abs(state.rate) - STANDARD_RATE) <= 0.3 && ' — standard rate'}
        </p>
        <p className="mt-1">
          <strong>Standard rate at {tas} KTAS:</strong> about {Math.round(std.exact)}° of bank (rule
          of thumb TAS ÷ 10 + 7 = {Math.round(std.ruleOfThumb)}°).
        </p>
        {mode === 'explore' && (
          <div className="mt-2 flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => update({ rudder: coordinatedRudder(bank) })}
            >
              Center the ball
            </Button>
            {[-1, 1].map((dir) => (
              <Button
                key={dir}
                size="sm"
                variant="secondary"
                onClick={() => {
                  const b = dir * Math.round(std.exact);
                  update({ bank: b, rudder: coordinatedRudder(b) });
                }}
              >
                Standard rate {dir < 0 ? 'left' : 'right'}
              </Button>
            ))}
          </div>
        )}
      </div>

      {mode === 'quiz' && (
        <div className="mt-4">
          <QuizPanel
            questions={quizQuestions(tas)}
            check={(q) => ({
              correct: q.check(state),
              answer: `${bankText(bank)}, ${rudderText(rudder)}`,
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

function Instrument({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-full max-w-[180px] min-[480px]:max-w-[220px]">{children}</div>
      <p className="text-sm font-medium text-muted">{caption}</p>
    </div>
  );
}

function Slider({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  display,
  valueText,
  onChange,
  ends,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  display: string;
  valueText: string;
  onChange: (value: number) => void;
  ends?: [string, string];
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="font-semibold">
          {label}
        </label>
        <span className="font-mono text-sm" aria-hidden>
          {display}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={valueText}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-primary"
      />
      {ends && (
        <div className="flex justify-between text-xs text-muted" aria-hidden>
          <span>{ends[0]}</span>
          <span>{ends[1]}</span>
        </div>
      )}
    </div>
  );
}

/** Classic turn coordinator: tilting miniature airplane and inclinometer ball. */
function ClassicTurnCoordinator({ state }: { state: TurnState }) {
  const cx = 120;
  const cy = 112;
  // The ball runs along a tube curved round a centre above the instrument.
  const tube = { cx: 120, cy: 20, r: 150 };
  const ballAngle = state.ball * 16;
  const ball = polar(tube.cx, tube.cy, tube.r, 180 - ballAngle);
  const tubeStart = polar(tube.cx, tube.cy, tube.r, 180 + 20);
  const tubeEnd = polar(tube.cx, tube.cy, tube.r, 180 - 20);
  const mark = (deg: number) => {
    const a = polar(cx, cy, 90, deg);
    const b = polar(cx, cy, 106, deg);
    return (
      <line
        key={deg}
        x1={a.x}
        y1={a.y}
        x2={b.x}
        y2={b.y}
        className="stroke-instrument-text"
        strokeWidth={4}
      />
    );
  };
  const lPos = polar(cx, cy, 78, 250);
  const rPos = polar(cx, cy, 78, 110);
  return (
    <svg
      viewBox="0 0 240 240"
      className="w-full select-none"
      role="img"
      aria-label={`Turn coordinator: ${state.rate === 0 ? 'wings level' : `airplane tilted ${state.rate > 0 ? 'right' : 'left'}`}, ball ${Math.abs(state.ball) < 0.1 ? 'centered' : `displaced ${state.ball > 0 ? 'right' : 'left'}`}.`}
    >
      <circle
        cx={120}
        cy={120}
        r={116}
        className="fill-instrument stroke-border-strong"
        strokeWidth={2}
      />
      <text
        x={120}
        y={48}
        textAnchor="middle"
        className="fill-instrument-text text-[11px] font-semibold tracking-wider"
      >
        TURN COORDINATOR
      </text>
      {[90, 270, 110, 250].map(mark)}
      <text
        x={lPos.x}
        y={lPos.y}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-instrument-text text-[14px] font-bold"
      >
        L
      </text>
      <text
        x={rPos.x}
        y={rPos.y}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-instrument-text text-[14px] font-bold"
      >
        R
      </text>
      <path
        d={`M ${tubeStart.x} ${tubeStart.y} A ${tube.r} ${tube.r} 0 0 0 ${tubeEnd.x} ${tubeEnd.y}`}
        className="stroke-instrument-text"
        strokeOpacity={0.25}
        strokeWidth={22}
        strokeLinecap="round"
        fill="none"
      />
      <line
        x1={109}
        x2={109}
        y1={158}
        y2={182}
        className="stroke-instrument-text"
        strokeWidth={2}
      />
      <line
        x1={131}
        x2={131}
        y1={158}
        y2={182}
        className="stroke-instrument-text"
        strokeWidth={2}
      />
      <circle
        cx={ball.x}
        cy={ball.y}
        r={9}
        className="fill-black stroke-instrument-text motion-safe:transition-all"
        strokeWidth={2}
      />
      <g
        transform={`rotate(${state.tcTilt} ${cx} ${cy})`}
        className="motion-safe:transition-transform"
      >
        <rect
          x={cx - 78}
          y={cy - 3}
          width={156}
          height={6}
          rx={3}
          className="fill-instrument-text"
        />
        <rect x={cx - 2} y={cy - 22} width={4} height={20} className="fill-instrument-text" />
        <circle cx={cx} cy={cy} r={9} className="fill-instrument-text" />
      </g>
      <text x={120} y={206} textAnchor="middle" className="fill-instrument-text text-[11px]">
        2 MIN
      </text>
      <text x={120} y={220} textAnchor="middle" className="fill-instrument-text text-[8px]">
        NO PITCH INFORMATION
      </text>
    </svg>
  );
}

/** Top of a G1000 attitude indicator: sky pointer, roll scale and slip/skid trapezoid. */
function G1000Slip({ state }: { state: TurnState }) {
  const cx = 120;
  const cy = 150;
  const r = 100;
  const ticks = [-60, -45, -30, -20, -10, 10, 20, 30, 45, 60];
  return (
    <svg
      viewBox="0 0 240 240"
      className="w-full select-none"
      role="img"
      aria-label={`G1000 roll pointer at ${bankText(state.bank)}; slip/skid trapezoid ${Math.abs(state.ball) < 0.1 ? 'under the pointer' : `displaced ${state.ball > 0 ? 'right' : 'left'}`}.`}
    >
      <defs>
        <clipPath id="w6-adi-clip">
          <rect x={4} y={4} width={232} height={232} rx={10} />
        </clipPath>
      </defs>
      <g clipPath="url(#w6-adi-clip)">
        <g
          transform={`rotate(${-state.bank} ${cx} ${cy})`}
          className="motion-safe:transition-transform"
        >
          <rect x={-200} y={-300} width={640} height={300 + cy} className="fill-sky" />
          <rect x={-200} y={cy} width={640} height={400} className="fill-ground" />
          <line x1={-200} x2={440} y1={cy} y2={cy} className="stroke-white" strokeWidth={2} />
        </g>
        <path
          d={`M ${polar(cx, cy, r, -60).x} ${polar(cx, cy, r, -60).y} A ${r} ${r} 0 0 1 ${polar(cx, cy, r, 60).x} ${polar(cx, cy, r, 60).y}`}
          className="stroke-white"
          strokeWidth={2}
          fill="none"
        />
        {ticks.map((t) => {
          const long = Math.abs(t) === 30 || Math.abs(t) === 60;
          const a = polar(cx, cy, r, t);
          const b = polar(cx, cy, r + (long ? 16 : 9), t);
          return (
            <line
              key={t}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              className="stroke-white"
              strokeWidth={2}
            />
          );
        })}
        <path d={`M ${cx} ${cy - r} l -7 -12 h 14 Z`} className="fill-white" />
        <g
          transform={`rotate(${-state.bank} ${cx} ${cy})`}
          className="motion-safe:transition-transform"
        >
          <path d={`M ${cx} ${cy - r + 2} l -9 14 h 18 Z`} className="fill-white stroke-black" />
          <path
            d={`M ${cx - 9 + state.ball * 14} ${cy - r + 19} h 18 l 3 7 h -24 Z`}
            className="fill-white stroke-black motion-safe:transition-all"
          />
        </g>
        <path
          d={`M ${cx - 70} ${cy} h 40 l 6 6 M ${cx + 70} ${cy} h -40 l -6 6`}
          className="stroke-arc-yellow"
          strokeWidth={5}
          fill="none"
        />
        <path
          d={`M ${cx} ${cy} l -26 14 h 10 l 16 -7 l 16 7 h 10 Z`}
          className="fill-arc-yellow stroke-black"
        />
      </g>
      <rect
        x={4}
        y={4}
        width={232}
        height={232}
        rx={10}
        className="stroke-border-strong"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}

/** Flight path and nose direction seen from above. */
function TopDown({ state }: { state: TurnState }) {
  const ax = 120;
  const ay = 150;
  const dir = Math.sign(state.bank);
  const tan = Math.tan((Math.abs(state.bank) * Math.PI) / 180);
  const points: { x: number; y: number }[] = [];
  for (let s = -100; s <= 110; s += 5) {
    if (dir === 0 || tan < 0.01) {
      points.push({ x: ax, y: ay - s });
    } else {
      const R = 70 / tan;
      points.push({
        x: ax + dir * R * (1 - Math.cos(s / R)),
        y: ay - R * Math.sin(s / R),
      });
    }
  }
  const last = points[points.length - 1]!;
  const prev = points[points.length - 3]!;
  const nose = polar(ax, ay, 90, state.yaw);
  return (
    <svg
      viewBox="0 0 240 240"
      className="w-full select-none"
      role="img"
      aria-label={`From above: ${Math.abs(state.yaw) < 1 ? 'the nose follows the flight path' : `the nose points ${Math.round(Math.abs(state.yaw))} degrees ${state.yaw > 0 ? 'right' : 'left'} of the flight path`}.`}
    >
      <rect
        x={4}
        y={4}
        width={232}
        height={232}
        rx={10}
        className="fill-surface-2 stroke-border-strong"
        strokeWidth={2}
      />
      <polyline
        points={points
          .slice(0, -2)
          .map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
          .join(' ')}
        fill="none"
        className="stroke-magenta"
        strokeWidth={3}
        strokeDasharray="7 5"
      />
      <Arrow from={prev} to={last} className="stroke-magenta fill-magenta" width={3} />
      <line
        x1={ax}
        y1={ay}
        x2={nose.x}
        y2={nose.y}
        className="stroke-text"
        strokeWidth={1.5}
        strokeDasharray="3 3"
      />
      <g
        transform={`rotate(${state.yaw} ${ax} ${ay})`}
        className="motion-safe:transition-transform"
      >
        <g
          transform={`translate(${ax} ${ay})`}
          className="fill-surface stroke-text"
          strokeWidth={2}
        >
          <rect x={-50} y={-14} width={100} height={11} rx={4} />
          <rect x={-18} y={24} width={36} height={7} rx={3} />
          <path d="M -7 -34 Q 0 -42 7 -34 L 5 30 L -5 30 Z" />
        </g>
      </g>
      <Label
        x={nose.x + (state.yaw >= 0 ? 10 : -10)}
        y={nose.y - 6}
        anchor={state.yaw >= 0 ? 'start' : 'end'}
      >
        Nose
      </Label>
      <Label x={120} y={222} className="fill-magenta">
        Flight path
      </Label>
    </svg>
  );
}
