import type { ReactNode } from 'react';
import { arcPath, polar } from './geometry';

/**
 * Shared SVG primitives (step 6.16). Colours come from CSS classes so they follow the
 * theme tokens.
 */

export interface GaugeArc {
  from: number;
  to: number;
  className: string;
  /** Distance inward from the rim. */
  inset?: number;
  width?: number;
}

export interface GaugeProps {
  cx: number;
  cy: number;
  r: number;
  min: number;
  max: number;
  /** Dial angles for min and max (0° = up, clockwise). */
  startAngle: number;
  endAngle: number;
  value: number;
  arcs?: GaugeArc[];
  majorStep: number;
  minorStep?: number;
  labelStep?: number;
  label?: ReactNode;
  needleClassName?: string;
}

export function valueToDialAngle(
  value: number,
  min: number,
  max: number,
  startAngle: number,
  endAngle: number,
) {
  const t = (Math.min(max, Math.max(min, value)) - min) / (max - min);
  return startAngle + t * (endAngle - startAngle);
}

/** A round dial with coloured arcs, ticks, labels and a needle. */
export function Gauge({
  cx,
  cy,
  r,
  min,
  max,
  startAngle,
  endAngle,
  value,
  arcs = [],
  majorStep,
  minorStep,
  labelStep = majorStep,
  label,
  needleClassName = 'fill-instrument-text',
}: GaugeProps) {
  const angle = (v: number) => valueToDialAngle(v, min, max, startAngle, endAngle);
  const ticks: ReactNode[] = [];
  const step = minorStep ?? majorStep;
  for (let v = min; v <= max + 1e-9; v += step) {
    const major = Math.abs(v / majorStep - Math.round(v / majorStep)) < 1e-9;
    const a = angle(v);
    const outer = polar(cx, cy, r - 2, a);
    const inner = polar(cx, cy, r - (major ? 16 : 9), a);
    ticks.push(
      <line
        key={`t${v}`}
        x1={outer.x}
        y1={outer.y}
        x2={inner.x}
        y2={inner.y}
        className="stroke-instrument-text"
        strokeWidth={major ? 2.5 : 1.2}
      />,
    );
    if (Math.abs(v / labelStep - Math.round(v / labelStep)) < 1e-9) {
      const p = polar(cx, cy, r - 30, a);
      ticks.push(
        <text
          key={`l${v}`}
          x={p.x}
          y={p.y}
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-instrument-text font-mono text-[13px]"
        >
          {v}
        </text>,
      );
    }
  }
  const needleAngle = angle(value);
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r + 6}
        className="fill-instrument stroke-border-strong"
        strokeWidth={2}
      />
      {arcs.map((arc) => (
        <path
          key={`${arc.className}-${arc.from}`}
          d={arcPath(cx, cy, r - (arc.inset ?? 4), angle(arc.from), angle(arc.to))}
          className={arc.className}
          strokeWidth={arc.width ?? 7}
          fill="none"
        />
      ))}
      {ticks}
      {label}
      <g
        transform={`rotate(${needleAngle} ${cx} ${cy})`}
        className="transition-transform duration-150"
      >
        <path
          d={`M ${cx - 4} ${cy + 14} L ${cx} ${cy - r + 12} L ${cx + 4} ${cy + 14} Z`}
          className={needleClassName}
        />
      </g>
      <circle
        cx={cx}
        cy={cy}
        r={8}
        className="fill-instrument stroke-instrument-text"
        strokeWidth={2}
      />
    </g>
  );
}

export interface TapeBand {
  from: number;
  to: number;
  className: string;
  /** 0 = outer column (right edge), 1 = next column inward. */
  column?: number;
}

/** A vertical G1000-style tape centred on the current value. */
export function Tape({
  x,
  y,
  width,
  height,
  value,
  pxPerUnit,
  step,
  labelStep,
  bands = [],
  unit,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  value: number;
  pxPerUnit: number;
  step: number;
  labelStep: number;
  bands?: TapeBand[];
  unit?: string;
}) {
  const cy = y + height / 2;
  const toY = (v: number) => cy - (v - value) * pxPerUnit;
  const visible = height / 2 / pxPerUnit;
  const first = Math.ceil((value - visible) / step) * step;
  const marks: ReactNode[] = [];
  for (let v = Math.max(0, first); v <= value + visible; v += step) {
    const yy = toY(v);
    const labelled = v % labelStep === 0;
    marks.push(
      <g key={v}>
        <line
          x1={x + width - 22}
          x2={x + width - (labelled ? 34 : 28)}
          y1={yy}
          y2={yy}
          className="stroke-instrument-text"
          strokeWidth={labelled ? 2 : 1}
        />
        {labelled && (
          <text
            x={x + width - 38}
            y={yy}
            textAnchor="end"
            dominantBaseline="central"
            className="fill-instrument-text font-mono text-[14px]"
          >
            {v}
          </text>
        )}
      </g>,
    );
  }
  const clipId = `tape-clip-${x}-${y}`;
  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <rect x={x} y={y} width={width} height={height} />
        </clipPath>
      </defs>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={4}
        className="fill-instrument stroke-border-strong"
        strokeWidth={2}
      />
      <g clipPath={`url(#${clipId})`}>
        {bands.map((band) => {
          const top = toY(band.to);
          const bottom = toY(band.from);
          const bx = x + width - 10 - (band.column ?? 0) * 9;
          return (
            <rect
              key={`${band.className}-${band.from}`}
              x={bx}
              y={top}
              width={8}
              height={Math.max(0, bottom - top)}
              className={band.className}
            />
          );
        })}
        {marks}
      </g>
      <g>
        <path
          d={`M ${x + 4} ${cy - 16} H ${x + width - 38} L ${x + width - 26} ${cy} L ${x + width - 38} ${cy + 16} H ${x + 4} Z`}
          className="fill-black stroke-instrument-text"
          strokeWidth={2}
        />
        <text
          x={x + width - 42}
          y={cy}
          textAnchor="end"
          dominantBaseline="central"
          className="fill-white font-mono text-[20px] font-bold"
        >
          {Math.round(value)}
        </text>
      </g>
      {unit && (
        <text
          x={x + width / 2}
          y={y + height + 18}
          textAnchor="middle"
          className="fill-muted text-[12px]"
        >
          {unit}
        </text>
      )}
    </g>
  );
}

/** A straight arrow with a triangular head. */
export function Arrow({
  from,
  to,
  className = 'stroke-primary fill-primary',
  width = 3,
  headSize = 10,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  className?: string;
  width?: number;
  headSize?: number;
}) {
  const angle = Math.atan2(to.y - from.y, to.x - from.x);
  const back = { x: to.x - headSize * Math.cos(angle), y: to.y - headSize * Math.sin(angle) };
  const left = {
    x: back.x + (headSize / 2) * Math.sin(angle),
    y: back.y - (headSize / 2) * Math.cos(angle),
  };
  const right = {
    x: back.x - (headSize / 2) * Math.sin(angle),
    y: back.y + (headSize / 2) * Math.cos(angle),
  };
  return (
    <g className={className}>
      <line
        x1={from.x}
        y1={from.y}
        x2={back.x}
        y2={back.y}
        strokeWidth={width}
        strokeLinecap="round"
      />
      <path
        d={`M ${to.x} ${to.y} L ${left.x} ${left.y} L ${right.x} ${right.y} Z`}
        strokeWidth={1}
      />
    </g>
  );
}

/** Text label with a background halo for legibility over diagrams. */
export function Label({
  x,
  y,
  children,
  className = 'fill-text',
  anchor = 'middle',
}: {
  x: number;
  y: number;
  children: ReactNode;
  className?: string;
  anchor?: 'start' | 'middle' | 'end';
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      dominantBaseline="central"
      className={`${className} text-[13px] font-semibold`}
      paintOrder="stroke"
      stroke="var(--color-surface)"
      strokeWidth={4}
    >
      {children}
    </text>
  );
}

/** A compass rose with 10° ticks and cardinal letters, rotated so `heading` is at the top. */
export function Compass({
  cx,
  cy,
  r,
  heading = 0,
}: {
  cx: number;
  cy: number;
  r: number;
  heading?: number;
}) {
  const items: ReactNode[] = [];
  for (let deg = 0; deg < 360; deg += 10) {
    const major = deg % 30 === 0;
    const a = deg - heading;
    const outer = polar(cx, cy, r, a);
    const inner = polar(cx, cy, r - (major ? 12 : 6), a);
    items.push(
      <line
        key={`c${deg}`}
        x1={outer.x}
        y1={outer.y}
        x2={inner.x}
        y2={inner.y}
        className="stroke-text"
        strokeWidth={major ? 2 : 1}
      />,
    );
    if (major) {
      const p = polar(cx, cy, r - 24, a);
      const text = { 0: 'N', 90: 'E', 180: 'S', 270: 'W' }[deg] ?? String(deg / 10);
      items.push(
        <text
          key={`t${deg}`}
          x={p.x}
          y={p.y}
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-text text-[12px] font-semibold"
          transform={`rotate(${a} ${p.x} ${p.y})`}
        >
          {text}
        </text>,
      );
    }
  }
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        className="fill-surface stroke-border-strong"
        strokeWidth={1.5}
      />
      {items}
    </g>
  );
}
