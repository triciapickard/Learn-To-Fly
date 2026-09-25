import type { ReactNode } from 'react';
import { polar } from '../shared/geometry';
import { CHART } from './model';

/**
 * An original, simplified redraw of a sectional chart around Livermore (Section 16.11).
 * Positions are schematic. Chart colours are fixed: printed charts look the same in both
 * themes.
 */
export function Chart({ clipId }: { clipId: string }) {
  const { width: W, height: H } = CHART;
  const blue = 'fill-chart-blue';
  const magenta = 'fill-chart-magenta';
  return (
    <g>
      <clipPath id={clipId}>
        <rect width={W} height={H} />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect width={W} height={H} className="fill-chart-land" />
        {/* Hills with contour lines */}
        <path
          d="M 470 40 C 520 20 600 60 640 120 C 680 190 650 260 690 330 C 700 380 660 470 600 480 L 470 480 C 480 420 440 360 460 300 C 480 240 440 160 470 40 Z"
          className="fill-chart-hills"
        />
        {[0.8, 0.6].map((k) => (
          <path
            key={k}
            d="M 510 90 C 560 80 610 120 620 180 C 630 250 610 320 630 390 C 600 420 540 420 520 380 C 500 320 520 250 500 190 C 490 150 480 110 510 90 Z"
            transform={`translate(${(1 - k) * 560} ${(1 - k) * 250}) scale(${k})`}
            className="fill-none stroke-chart-ink/25"
            strokeWidth={1}
          />
        ))}
        {/* Bay shoreline */}
        <path
          d="M 0 0 H 60 C 80 60 50 110 70 170 C 90 230 40 280 60 340 C 75 400 40 440 50 480 H 0 Z"
          className="fill-chart-water"
        />
        {/* Lake */}
        <path
          d="M 330 380 C 340 360 380 362 400 372 C 414 380 404 398 380 400 C 360 402 350 392 338 396 C 326 398 322 390 330 380 Z"
          className="fill-chart-water stroke-chart-blue/60"
        />
        <ChartText x={366} y={414} size={10} className="fill-chart-blue italic">
          Lake Del Valle
        </ChartText>
        {/* Built-up areas */}
        <path
          d="M 350 205 C 380 192 420 196 432 214 C 440 232 416 244 390 242 C 366 244 344 236 350 205 Z"
          className="fill-chart-city stroke-chart-ink/30"
        />
        <ChartText x={392} y={226} size={10} className="fill-chart-ink">
          Livermore
        </ChartText>
        <path
          d="M 190 280 C 210 268 250 272 256 290 C 260 306 236 314 214 312 C 196 310 184 298 190 280 Z"
          className="fill-chart-city stroke-chart-ink/30"
        />
        {/* Railroad with ticks */}
        <line x1={0} y1={320} x2={720} y2={290} className="stroke-chart-ink" strokeWidth={1.5} />
        {Array.from({ length: 36 }, (_, i) => {
          const x = i * 20 + 10;
          const y = 320 - (30 * x) / 720;
          return (
            <line
              key={i}
              x1={x}
              x2={x}
              y1={y - 4}
              y2={y + 4}
              className="stroke-chart-ink"
              strokeWidth={1}
            />
          );
        })}
        {/* Highway (double line) with a shield */}
        {[-2, 2].map((d) => (
          <line
            key={d}
            x1={0}
            y1={205 + d}
            x2={720}
            y2={150 + d}
            className="stroke-chart-magenta/70"
            strokeWidth={1.5}
          />
        ))}
        <path
          d="M 474 156 h 22 v 10 c 0 6 -6 10 -11 12 c -5 -2 -11 -6 -11 -12 Z"
          className="fill-white stroke-chart-ink"
          strokeWidth={1}
        />
        <ChartText x={485} y={164} size={8} className="fill-chart-ink font-bold">
          580
        </ChartText>
        {/* Isogonic line */}
        <line
          x1={110}
          y1={0}
          x2={150}
          y2={480}
          className="stroke-chart-magenta"
          strokeWidth={1.5}
          strokeDasharray="10 6"
        />
        <ChartText
          x={121}
          y={178}
          size={11}
          className={`${magenta} font-bold`}
          transform="rotate(85 121 178)"
        >
          14°E
        </ChartText>
        {/* Latitude/longitude grid and the MEF */}
        <line x1={360} x2={360} y1={0} y2={480} className="stroke-chart-ink/30" />
        <line x1={0} x2={720} y1={260} y2={260} className="stroke-chart-ink/30" />
        <text x={408} y={66} className={`${blue} text-[38px] font-bold`}>
          3
          <tspan dy={-14} className="text-[22px]">
            6
          </tspan>
        </text>
        {/* Class B shelf */}
        <path
          d="M 85 0 A 420 420 0 0 1 85 480"
          transform="translate(0 0)"
          className="fill-none stroke-chart-blue"
          strokeWidth={3}
        />
        <g className={`${blue} font-bold`}>
          <ChartText x={184} y={72} size={13}>
            100
          </ChartText>
          <line x1={170} x2={198} y1={80} y2={80} className="stroke-chart-blue" strokeWidth={1.5} />
          <ChartText x={184} y={90} size={13}>
            40
          </ChartText>
        </g>
        {/* Victor airway from the VOR */}
        <line x1={690} y1={440} x2={230} y2={20} className="stroke-chart-blue/30" strokeWidth={7} />
        <ChartText
          x={463}
          y={229}
          size={11}
          className={`${blue} font-bold`}
          transform="rotate(42.4 463 229)"
        >
          V195
        </ChartText>
        {/* Livermore Class D, ceiling box, airport and data block */}
        <circle
          cx={300}
          cy={215}
          r={62}
          className="fill-none stroke-chart-blue"
          strokeWidth={2}
          strokeDasharray="8 5"
        />
        <rect
          x={337}
          y={255}
          width={24}
          height={18}
          className="fill-chart-land stroke-chart-blue"
          strokeDasharray="3 2"
        />
        <ChartText x={349} y={264} size={11} className={`${blue} font-bold`}>
          29
        </ChartText>
        <AirportSymbol cx={300} cy={215} className="stroke-chart-blue fill-chart-blue" />
        <g className={blue}>
          <text x={196} y={124} className="text-[10px] font-bold">
            LIVERMORE (LVK)
          </text>
          <text x={196} y={138} className="text-[9px] font-semibold">
            CT – 118.1 ★ ATIS 119.65
          </text>
          <text x={196} y={152} className="text-[9px] font-semibold">
            400 L 53 122.95
          </text>
        </g>
        {/* Tracy: non-towered, with the 700 ft Class E vignette */}
        <circle
          cx={650}
          cy={120}
          r={62}
          className="fill-none stroke-chart-magenta/25"
          strokeWidth={14}
        />
        <circle
          cx={650}
          cy={120}
          r={55}
          className="fill-none stroke-chart-magenta/40"
          strokeWidth={2}
        />
        <AirportSymbol cx={650} cy={120} className="stroke-chart-magenta fill-chart-magenta" />
        <g className={magenta}>
          <text x={610} y={50} className="text-[10px] font-bold">
            TRACY (TCY)
          </text>
          <text x={610} y={64} className="text-[9px] font-semibold">
            193 L 40 122.8 Ⓒ
          </text>
        </g>
        {/* Private airport */}
        <circle
          cx={465}
          cy={423}
          r={9}
          className="fill-chart-land stroke-chart-magenta"
          strokeWidth={2}
        />
        <ChartText x={465} y={424} size={10} className={`${magenta} font-bold`}>
          R
        </ChartText>
        {/* Obstacle */}
        <path
          d="M 522 262 L 531 240 L 540 262 M 531 240 v -4"
          className="fill-none stroke-chart-ink"
          strokeWidth={2}
        />
        <circle cx={531} cy={252} r={2} className="fill-chart-ink" />
        <ChartText x={531} y={230} size={11} className="fill-chart-ink font-bold">
          1520
        </ChartText>
        <ChartText x={531} y={274} size={10} className="fill-chart-ink">
          (620)
        </ChartText>
        {/* VORTAC with its compass rose, and the information box */}
        <Rose cx={690} cy={440} r={96} />
        <path
          d="M 684 430 h 12 l 6 10 l -6 10 h -12 l -6 -10 Z"
          className="fill-chart-land stroke-chart-blue"
          strokeWidth={2}
        />
        <circle cx={690} cy={440} r={2} className="fill-chart-blue" />
        <rect
          x={532}
          y={442}
          width={100}
          height={24}
          className="fill-white stroke-chart-blue"
          strokeWidth={1.5}
        />
        <ChartText x={582} y={454} size={10} className={`${blue} font-bold`}>
          MANTECA 116.0 ECA
        </ChartText>
      </g>
      {/* Watermark */}
      <text
        x={W / 2}
        y={H / 2}
        textAnchor="middle"
        dominantBaseline="central"
        transform={`rotate(-20 ${W / 2} ${H / 2})`}
        className="pointer-events-none fill-chart-ink/15 text-[44px] font-bold tracking-widest"
      >
        NOT FOR NAVIGATION
      </text>
    </g>
  );
}

function ChartText({
  x,
  y,
  size,
  className,
  transform,
  children,
}: {
  x: number;
  y: number;
  size: number;
  className?: string;
  transform?: string;
  children: ReactNode;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="central"
      transform={transform}
      className={className}
      style={{ fontSize: size }}
    >
      {children}
    </text>
  );
}

function AirportSymbol({ cx, cy, className }: { cx: number; cy: number; className: string }) {
  return (
    <g className={className}>
      <circle cx={cx} cy={cy} r={12} className="fill-chart-land" strokeWidth={2.5} />
      <line x1={cx - 8} y1={cy + 5} x2={cx + 8} y2={cy - 5} strokeWidth={3.5} />
      <line x1={cx - 3} y1={cy - 8} x2={cx + 2} y2={cy + 8} strokeWidth={3} />
      {[0, 90, 180, 270].map((a) => {
        const o = polar(cx, cy, 16, a);
        const i = polar(cx, cy, 12, a);
        return <line key={a} x1={i.x} y1={i.y} x2={o.x} y2={o.y} strokeWidth={2.5} />;
      })}
    </g>
  );
}

function Rose({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  // Magnetic north on a VOR rose is rotated from true north by the variation (14°E).
  const variation = 14;
  const ticks: ReactNode[] = [];
  for (let d = 0; d < 360; d += 5) {
    const major = d % 30 === 0;
    const o = polar(cx, cy, r, d + variation);
    const i = polar(cx, cy, r - (major ? 10 : d % 10 === 0 ? 6 : 4), d + variation);
    ticks.push(
      <line
        key={d}
        x1={o.x}
        y1={o.y}
        x2={i.x}
        y2={i.y}
        className="stroke-chart-blue"
        strokeWidth={major ? 1.5 : 1}
      />,
    );
    if (major && (d >= 240 || d === 0)) {
      const p = polar(cx, cy, r - 18, d + variation);
      ticks.push(
        <text
          key={`l${d}`}
          x={p.x}
          y={p.y}
          textAnchor="middle"
          dominantBaseline="central"
          transform={`rotate(${d + variation} ${p.x} ${p.y})`}
          className="fill-chart-blue text-[9px] font-bold"
        >
          {d === 0 ? 'N' : d / 10}
        </text>,
      );
    }
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} className="fill-none stroke-chart-blue" strokeWidth={1.5} />
      {ticks}
      <line
        x1={cx}
        y1={cy}
        x2={polar(cx, cy, r, variation).x}
        y2={polar(cx, cy, r, variation).y}
        className="stroke-chart-blue"
        strokeWidth={1}
      />
    </g>
  );
}
