import { useCallback, useId, useState } from 'react';
import { Badge } from '@/components/Badge';
import { LoadingRegion, Skeleton } from '@/components/Skeleton';
import { useAirspaceProfile } from '@/features/content/api';
import { cn } from '@/lib/cn';
import type { AirspaceProfileDto } from '@shared/schemas/api';
import type { AirspaceVolume } from '@shared/schemas/content';
import { clamp } from '../shared/geometry';
import { useAnnouncer, useDrag } from '../shared/hooks';
import { QuizPanel } from '../shared/QuizPanel';
import { RangeField } from '../shared/RangeField';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetMode, WidgetProps } from '../types';
import {
  classAt,
  describe,
  feet,
  floorAt,
  floorText,
  inModeCVeil,
  placeText,
  planRings,
  QUESTIONS,
  terrainAt,
  type AirspaceClass,
} from './model';

const W = 720;
const H = 360;
const PLOT = { left: 56, right: 704, top: 34, bottom: 318 };

const CLASS_STYLE: Record<AirspaceClass, { shape: string; dash?: string; text: string }> = {
  B: { shape: 'fill-primary/15 stroke-primary', text: 'fill-primary' },
  C: { shape: 'fill-magenta/20 stroke-magenta', text: 'fill-magenta' },
  D: { shape: 'fill-primary/5 stroke-primary', dash: '6 4', text: 'fill-primary' },
  E: { shape: 'fill-magenta/5 stroke-magenta/60', dash: '2 4', text: 'fill-magenta' },
  G: { shape: 'fill-transparent stroke-none', text: 'fill-muted' },
};

/** W11 — Airspace cross-section (Section 16.12). Data from content/airspace-profile.yaml. */
export default function AirspaceProfile(widget: WidgetProps) {
  const { data, isPending, isError } = useAirspaceProfile(widget.props.profile ?? 'bay-area');
  if (isPending) {
    return (
      <LoadingRegion label="Loading the airspace cross-section" className="my-8">
        <Skeleton className="h-96 w-full" />
      </LoadingRegion>
    );
  }
  if (isError || !data) {
    return (
      <p className="my-8 text-muted">
        The airspace cross-section could not load. The airspace classes are described in the lesson
        text.
      </p>
    );
  }
  return <Profile profile={data.profile} {...widget} />;
}

function Profile({ profile, props, onQuizAnswer }: WidgetProps & { profile: AirspaceProfileDto }) {
  const [mode, setMode] = useState<WidgetMode>(props.mode === 'quiz' ? 'quiz' : 'explore');
  const [view, setView] = useState<'side' | 'plan'>('side');
  const start = profile.points[Math.floor(profile.points.length / 2)]?.x ?? 0;
  const [x, setX] = useState(start);
  const [altitude, setAltitude] = useState(3500);
  const [hovered, setHovered] = useState<string | null>(null);
  const [message, announce] = useAnnouncer(600);
  const viewLabel = useId();

  const sx = (nm: number) => PLOT.left + (nm / profile.lengthNm) * (PLOT.right - PLOT.left);
  const sy = (ft: number) => PLOT.bottom - (ft / profile.topFt) * (PLOT.bottom - PLOT.top);

  const move = useCallback(
    (nextX: number, nextAlt: number) => {
      const nx = clamp(Math.round(nextX * 2) / 2, 0, profile.lengthNm);
      const ground = terrainAt(profile, nx);
      const na = clamp(
        Math.round(nextAlt / 100) * 100,
        Math.ceil(ground / 100) * 100,
        profile.topFt,
      );
      setX(nx);
      setAltitude(na);
      announce(describe(profile, nx, na));
    },
    [profile, announce],
  );

  const drag = useDrag(
    useCallback(
      (p: { x: number; y: number }) => {
        const nm = ((p.x - PLOT.left) / (PLOT.right - PLOT.left)) * profile.lengthNm;
        const ft = ((PLOT.bottom - p.y) / (PLOT.bottom - PLOT.top)) * profile.topFt;
        move(nm, ft);
      },
      [move, profile],
    ),
  );

  const here = classAt(profile, x, altitude);
  const hoveredVolume = profile.volumes.find((v) => v.id === hovered) ?? null;
  const card =
    hovered === 'G'
      ? { cls: 'G' as const, volume: null }
      : hoveredVolume
        ? { cls: hoveredVolume.class, volume: hoveredVolume }
        : here;
  const requirement = profile.requirements[card.cls];
  const summary = describe(profile, x, altitude);

  const description = (
    <>
      <p>
        {profile.summary} The side view shows altitude from the ground up to {feet(profile.topFt)}{' '}
        and the terrain along the line. It is simplified and not to scale.
      </p>
      <ul className="list-disc pl-5">
        {profile.volumes.map((v) => (
          <li key={v.id}>
            Class {v.class}, {v.name}: {v.fromNm} to {v.toNm} nm along the line, from {floorText(v)}{' '}
            to {feet(v.ceilingFt)} MSL.
          </li>
        ))}
        <li>Everything else near the ground is Class G.</li>
      </ul>
      <p>{summary}</p>
    </>
  );

  return (
    <WidgetFrame
      title="Airspace cross-section"
      simplified
      mode={mode}
      onModeChange={setMode}
      quizAvailable
      onReset={() => move(start, 3500)}
      description={description}
    >
      {!profile.verified && (
        <p className="mb-3 flex flex-wrap items-center gap-2 text-sm">
          <Badge variant="warning">Unverified data</Badge>
          Simplified and not to scale. The floors and ceilings still have to be checked against the
          current chart. Never use this for navigation.
        </p>
      )}
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span id={viewLabel} className="sr-only">
          View
        </span>
        <div
          role="group"
          aria-labelledby={viewLabel}
          className="flex rounded-control border border-border-strong p-0.5"
        >
          {(
            [
              ['side', 'Side view'],
              ['plan', 'Plan view'],
            ] as const
          ).map(([v, text]) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              onClick={() => setView(v)}
              className={cn(
                'min-h-9 rounded-[4px] px-3 text-sm font-semibold',
                view === v ? 'bg-primary text-primary-contrast' : 'text-muted hover:text-text',
              )}
            >
              {text}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted">{profile.title}</p>
      </div>

      {view === 'side' ? (
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full touch-none select-none"
          role="img"
          aria-label={`Side view of the airspace. ${summary}`}
          {...drag}
        >
          <SideView
            profile={profile}
            sx={sx}
            sy={sy}
            x={x}
            altitude={altitude}
            highlighted={card.volume?.id ?? (card.cls === 'G' ? 'G' : null)}
            onHover={setHovered}
          />
        </svg>
      ) : (
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          role="img"
          aria-label={`Plan view. ${summary}`}
        >
          <PlanView profile={profile} sx={sx} x={x} />
        </svg>
      )}

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="grid gap-3">
          <RangeField
            label="Position along the line"
            value={x}
            min={0}
            max={profile.lengthNm}
            step={0.5}
            display={placeText(profile, x)}
            valueText={placeText(profile, x)}
            onChange={(v) => move(v, altitude)}
          />
          <RangeField
            label="Altitude"
            value={altitude}
            min={0}
            max={profile.topFt}
            step={100}
            display={`${feet(altitude)} MSL`}
            valueText={`${feet(altitude)} MSL, Class ${here.cls}`}
            onChange={(v) => move(x, v)}
          />
          <p className="text-xs text-muted">Or drag on the side view to move the airplane.</p>
        </div>
        <div className="rounded-control bg-surface-2 p-4" aria-hidden={mode === 'quiz'}>
          {mode === 'quiz' && !hovered ? (
            <p className="text-sm text-muted">
              Move the airplane, then press Check. Hover over a layer to learn about it.
            </p>
          ) : (
            <>
              <p className="font-semibold">
                {hovered ? '' : 'You are in '}Class {card.cls}
                {card.volume && card.cls !== 'E' ? ` · ${card.volume.name}` : ''}
              </p>
              <dl className="mt-2 space-y-2 text-sm">
                {card.volume && (
                  <div>
                    <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
                      Floor and ceiling
                    </dt>
                    <dd>
                      From {floorText(card.volume)} up to {feet(card.volume.ceilingFt)} MSL
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
                    To enter
                  </dt>
                  <dd>{requirement.entry}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
                    VFR weather minimums
                  </dt>
                  <dd>{requirement.vfrMinimums}</dd>
                </div>
                {!hovered && inModeCVeil(profile, x) && (
                  <div>
                    <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
                      Mode C veil
                    </dt>
                    <dd>
                      Within {profile.modeCVeil?.radiusNm} nm of the Class B airport you need a
                      transponder with altitude reporting and ADS-B Out, even outside Class B.
                    </dd>
                  </div>
                )}
              </dl>
            </>
          )}
        </div>
      </div>

      {mode === 'quiz' && (
        <div className="mt-4">
          <QuizPanel
            questions={QUESTIONS}
            check={(q) => ({
              correct: q.check(profile, x, altitude),
              answer: `${feet(altitude)} MSL ${placeText(profile, x)}, Class ${here.cls}`,
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

function volumePath(
  profile: AirspaceProfileDto,
  v: AirspaceVolume,
  sx: (nm: number) => number,
  sy: (ft: number) => number,
) {
  const top = Math.min(v.ceilingFt, profile.topFt);
  if (v.floorRef === 'MSL') {
    return `M ${sx(v.fromNm)} ${sy(v.floorFt)} V ${sy(top)} H ${sx(v.toNm)} V ${sy(v.floorFt)} Z`;
  }
  // AGL floors follow the terrain.
  const pts: string[] = [];
  const step = profile.lengthNm / 120;
  for (let nm = v.fromNm; nm <= v.toNm + 1e-9; nm += step) {
    pts.push(`${sx(nm)} ${sy(floorAt(profile, v, nm))}`);
  }
  return `M ${pts.join(' L ')} L ${sx(v.toNm)} ${sy(top)} L ${sx(v.fromNm)} ${sy(top)} Z`;
}

function SideView({
  profile,
  sx,
  sy,
  x,
  altitude,
  highlighted,
  onHover,
}: {
  profile: AirspaceProfileDto;
  sx: (nm: number) => number;
  sy: (ft: number) => number;
  x: number;
  altitude: number;
  highlighted: string | null;
  onHover: (id: string | null) => void;
}) {
  // Draw E first (it underlies everything), then D, C, B on top.
  const order: AirspaceClass[] = ['E', 'D', 'C', 'B'];
  const volumes = [...profile.volumes].sort(
    (a, b) => order.indexOf(a.class) - order.indexOf(b.class),
  );
  const ground = `M ${profile.terrain.map(([nm, ft]) => `${sx(nm)} ${sy(ft)}`).join(' L ')} L ${sx(profile.lengthNm)} ${sy(0)} L ${sx(0)} ${sy(0)} Z`;
  const ticks = [];
  for (let ft = 0; ft <= profile.topFt; ft += 2000) ticks.push(ft);
  const veil = profile.modeCVeil;
  const veilCenter = profile.points.find((p) => p.id === veil?.center);
  const plane = { x: sx(x), y: sy(altitude) };

  return (
    <g>
      <rect
        x={PLOT.left}
        y={PLOT.top}
        width={PLOT.right - PLOT.left}
        height={PLOT.bottom - PLOT.top}
        className="fill-surface"
        onPointerEnter={() => onHover('G')}
        onPointerLeave={() => onHover(null)}
      />
      {ticks.map((ft) => (
        <g key={ft}>
          <line
            x1={PLOT.left}
            x2={PLOT.right}
            y1={sy(ft)}
            y2={sy(ft)}
            className="stroke-border"
            strokeDasharray="2 6"
          />
          <text
            x={PLOT.left - 6}
            y={sy(ft)}
            textAnchor="end"
            dominantBaseline="central"
            className="fill-muted text-[11px]"
          >
            {ft === 0 ? 'MSL' : ft.toLocaleString('en-US')}
          </text>
        </g>
      ))}
      {volumes.map((v) => {
        const style = CLASS_STYLE[v.class];
        const active = highlighted === v.id;
        const midX = sx((v.fromNm + v.toNm) / 2);
        const labelY = sy(Math.min(v.ceilingFt, profile.topFt)) + 14;
        return (
          <g key={v.id} onPointerEnter={() => onHover(v.id)} onPointerLeave={() => onHover(null)}>
            <path
              d={volumePath(profile, v, sx, sy)}
              className={cn(style.shape, active && 'stroke-[3px]')}
              strokeWidth={active ? 3 : 1.5}
              strokeDasharray={style.dash}
            />
            {v.class !== 'E' && sx(v.toNm) - sx(v.fromNm) >= 24 && (
              <text
                x={midX}
                y={v.class === 'B' ? labelY : sy(v.ceilingFt) + 14}
                textAnchor="middle"
                className={cn(style.text, 'pointer-events-none text-[11px] font-bold')}
              >
                <tspan x={midX}>{Math.round(v.ceilingFt / 100)}</tspan>
                <tspan x={midX} dy={12}>
                  {v.floorFt === 0 ? 'SFC' : Math.round(v.floorFt / 100)}
                </tspan>
              </text>
            )}
          </g>
        );
      })}
      <path
        d={ground}
        className="pointer-events-none fill-ground/70 stroke-ground"
        strokeWidth={1.5}
      />
      {profile.points.map((p) => (
        <g key={p.id} className="pointer-events-none">
          <circle
            cx={sx(p.x)}
            cy={sy(terrainAt(profile, p.x))}
            r={4}
            className={p.towered ? 'fill-primary stroke-surface' : 'fill-magenta stroke-surface'}
            strokeWidth={1.5}
          />
          <text
            x={sx(p.x)}
            y={PLOT.bottom + 16}
            textAnchor="middle"
            className="fill-text text-[11px] font-semibold"
          >
            {p.id}
          </text>
        </g>
      ))}
      {veil && veilCenter && (
        <g className="pointer-events-none">
          <line
            x1={sx(Math.max(0, veilCenter.x - veil.radiusNm))}
            x2={sx(Math.min(profile.lengthNm, veilCenter.x + veil.radiusNm))}
            y1={20}
            y2={20}
            className="stroke-muted"
            strokeWidth={1.5}
            strokeDasharray="4 3"
          />
          <text
            x={sx(veilCenter.x)}
            y={14}
            textAnchor="middle"
            className="fill-muted text-[11px] font-semibold"
          >
            Mode C veil ({veil.radiusNm} nm of {veilCenter.id})
          </text>
        </g>
      )}
      <line
        x1={plane.x}
        x2={plane.x}
        y1={plane.y}
        y2={sy(terrainAt(profile, x))}
        className="pointer-events-none stroke-text"
        strokeDasharray="3 3"
      />
      <g transform={`translate(${plane.x} ${plane.y})`} className="pointer-events-none">
        <path
          d="M -16 -1 L -12 -9 L -9 -9 L -6 -2 L 8 -2 Q 16 -1 16 1 Q 16 3 8 3 L -14 3 Z M -3 1 L 3 1 L -2 7 L -6 7 Z"
          className="fill-accent stroke-surface"
          strokeWidth={1.5}
        />
      </g>
    </g>
  );
}

function PlanView({
  profile,
  sx,
  x,
}: {
  profile: AirspaceProfileDto;
  sx: (nm: number) => number;
  x: number;
}) {
  const cy = H / 2;
  const pxPerNm = (PLOT.right - PLOT.left) / profile.lengthNm;
  const rings = planRings(profile);
  return (
    <g>
      <clipPath id="w11-plan-clip">
        <rect x={0} y={24} width={W} height={H - 48} />
      </clipPath>
      <rect width={W} height={H} className="fill-surface" />
      <g clipPath="url(#w11-plan-clip)">
        {rings.map((ring) => {
          const style = CLASS_STYLE[ring.cls];
          return (
            <g key={ring.key}>
              <circle
                cx={sx(ring.cx)}
                cy={cy}
                r={ring.r * pxPerNm}
                className={style.shape}
                strokeWidth={1.5}
                strokeDasharray={style.dash}
              />
              <text
                x={sx(ring.cx) + ring.r * pxPerNm - 4}
                y={cy - 6}
                textAnchor="end"
                className={cn(style.text, 'text-[11px] font-bold')}
              >
                {ring.label}
              </text>
            </g>
          );
        })}
      </g>
      <line
        x1={sx(0)}
        x2={sx(profile.lengthNm)}
        y1={cy}
        y2={cy}
        className="stroke-text"
        strokeWidth={2}
        strokeDasharray="8 4"
      />
      {profile.points.map((p, i) => (
        <g key={p.id}>
          <circle
            cx={sx(p.x)}
            cy={cy}
            r={5}
            className={p.towered ? 'fill-primary stroke-surface' : 'fill-magenta stroke-surface'}
            strokeWidth={1.5}
          />
          <text
            x={sx(p.x)}
            y={i % 2 ? cy + 22 : cy - 14}
            textAnchor="middle"
            className="fill-text text-[11px] font-semibold"
            paintOrder="stroke"
            stroke="var(--color-surface)"
            strokeWidth={3}
          >
            {p.id}
          </text>
        </g>
      ))}
      <circle cx={sx(x)} cy={cy} r={7} className="fill-accent stroke-surface" strokeWidth={2} />
      <text x={W / 2} y={H - 8} textAnchor="middle" className="fill-muted text-[11px]">
        Schematic: the line drawn straight, airspace as simple circles. Numbers are floors in
        hundreds of feet. Not to scale.
      </text>
    </g>
  );
}
