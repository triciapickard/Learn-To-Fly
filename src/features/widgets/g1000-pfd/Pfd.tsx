import { useId, type KeyboardEvent, type ReactNode } from 'react';
import { arcPath, polar } from '../shared/geometry';
import { Tape, type TapeBand } from '../shared/svg';
import {
  BEZEL,
  DESTINATION,
  FLIGHT,
  SCREEN,
  SOFTKEY_BUTTON,
  SOFTKEYS,
  softkeyCenter,
  threeDigits,
  turnTrend,
  VIEW,
  VOR_COURSE,
  type PfdScreen,
  type Region,
  type RegionId,
} from './model';

// Attitude centre and pitch scale, in screen coordinates.
const ATT = { cx: 290, cy: 150, pxPerDeg: 6 };
const HSI = { cx: 290, cy: 330, r: 68 };
const MONO = 'font-mono';

interface PfdProps {
  screen: PfdScreen;
  /** Characters of the identifier typed so far (Direct-To walkthrough). */
  typed: number;
  highlight: RegionId | null;
  hotspots: Region[];
  airspeedBands: TapeBand[];
  quiz: boolean;
  selected: RegionId | null;
  onHover: (id: RegionId | null) => void;
  onSelect: (id: RegionId) => void;
  label: string;
}

/** The PFD drawing with its bezel and clickable regions. */
export function Pfd({
  screen,
  typed,
  highlight,
  hotspots,
  airspeedBands,
  quiz,
  selected,
  onHover,
  onSelect,
  label,
}: PfdProps) {
  const id = useId().replace(/:/g, '');
  const highlightRect = hotspots.find((r) => r.id === highlight)?.rect;

  return (
    <svg
      viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
      className="w-full select-none"
      role={quiz ? 'group' : 'img'}
      aria-label={label}
    >
      <Bezel />
      <g transform={`translate(${SCREEN.x} ${SCREEN.y})`}>
        <clipPath id={`${id}-screen`}>
          <rect width={SCREEN.width} height={SCREEN.height} />
        </clipPath>
        <g clipPath={`url(#${id}-screen)`}>
          <rect width={SCREEN.width} height={SCREEN.height} className="fill-instrument" />
          <Attitude screen={screen} clipId={`${id}-att`} ladderClipId={`${id}-ladder`} />
          <Tape
            x={14}
            y={60}
            width={100}
            height={220}
            value={FLIGHT.ias}
            pxPerUnit={2.4}
            step={5}
            labelStep={10}
            bands={airspeedBands}
          />
          <DataBox x={14} y={282} width={100}>
            <tspan className="fill-instrument-text">TAS </tspan>
            <tspan className="fill-white">{FLIGHT.tas}KT</tspan>
          </DataBox>
          <DataBox x={446} y={42} width={100}>
            <tspan className="fill-display-cyan">{FLIGHT.selectedAltitude}FT</tspan>
          </DataBox>
          <Tape
            x={446}
            y={62}
            width={100}
            height={218}
            value={FLIGHT.altitude}
            pxPerUnit={0.2}
            step={100}
            labelStep={200}
          />
          <DataBox x={446} y={284} width={100}>
            <tspan className="fill-display-cyan">{FLIGHT.baro}IN</tspan>
          </DataBox>
          <Vsi vs={FLIGHT.vs} />
          <Hsi screen={screen} />
          <WindBox heading={screen.heading} />
          <TopBar route={screen.route} />
          <BottomBar />
          {screen.window !== 'closed' && <DirectToWindow screen={screen} typed={typed} />}
        </g>
      </g>

      {highlightRect && (
        <rect
          x={highlightRect.x - 2}
          y={highlightRect.y - 2}
          width={highlightRect.width + 4}
          height={highlightRect.height + 4}
          rx={6}
          className="pointer-events-none fill-arc-yellow/15 stroke-arc-yellow"
          strokeWidth={3}
        />
      )}

      {hotspots.map((region, i) => (
        <rect
          key={region.id}
          {...region.rect}
          fill="transparent"
          className={
            quiz
              ? 'cursor-pointer outline-none focus-visible:stroke-display-cyan focus-visible:[stroke-width:3px]'
              : 'cursor-pointer'
          }
          data-region={region.id}
          onPointerEnter={() => onHover(region.id)}
          onPointerLeave={() => onHover(null)}
          onClick={() => onSelect(region.id)}
          {...(quiz && {
            role: 'button',
            tabIndex: 0,
            'aria-label': `Display area ${i + 1}`,
            'aria-pressed': selected === region.id,
            onKeyDown: (e: KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(region.id);
              }
            },
          })}
        />
      ))}
    </svg>
  );
}

function Bezel() {
  const knob = (cx: number, k: { id: string; label: string; y: number; r: number }) => (
    <g key={k.id}>
      <circle cx={cx} cy={k.y} r={k.r} className="fill-bezel-key stroke-black" strokeWidth={1.5} />
      {k.r >= 20 && (
        <circle
          cx={cx}
          cy={k.y}
          r={k.r * 0.55}
          className="fill-bezel stroke-black"
          strokeWidth={1.5}
        />
      )}
      <text
        x={cx}
        y={k.y + k.r + 11}
        textAnchor="middle"
        className="fill-instrument-text text-[9px] font-semibold"
      >
        {k.label}
      </text>
    </g>
  );
  return (
    <g>
      <rect width={VIEW.width} height={VIEW.height} rx={22} className="fill-bezel" />
      <rect
        x={SCREEN.x - 3}
        y={SCREEN.y - 3}
        width={SCREEN.width + 6}
        height={SCREEN.height + 6}
        rx={4}
        className="fill-black"
      />
      {BEZEL.left.map((k) => knob(BEZEL.leftX, k))}
      {BEZEL.right.map((k) => knob(BEZEL.rightX, k))}
      {BEZEL.keys.map((k) => (
        <g key={k.id}>
          <rect
            x={k.x}
            y={k.y}
            {...BEZEL.keySize}
            rx={4}
            className="fill-bezel-key stroke-black"
            strokeWidth={1}
          />
          <text
            x={k.x + BEZEL.keySize.width / 2}
            y={k.y + BEZEL.keySize.height / 2}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-white text-[9px] font-bold"
          >
            {k.label}
          </text>
        </g>
      ))}
      {SOFTKEYS.map((_, i) => (
        <rect
          key={i}
          x={softkeyCenter(i) - 18}
          y={SOFTKEY_BUTTON.y}
          width={36}
          height={SOFTKEY_BUTTON.height}
          rx={4}
          className="fill-bezel-key stroke-black"
          strokeWidth={1}
        />
      ))}
    </g>
  );
}

function DataBox({
  x,
  y,
  width,
  children,
}: {
  x: number;
  y: number;
  width: number;
  children: ReactNode;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={18}
        className="fill-black stroke-instrument-text/50"
        strokeWidth={1}
      />
      <text
        x={x + width / 2}
        y={y + 9}
        textAnchor="middle"
        dominantBaseline="central"
        className={`${MONO} text-[12px] font-semibold`}
      >
        {children}
      </text>
    </g>
  );
}

function Attitude({
  screen,
  clipId,
  ladderClipId,
}: {
  screen: PfdScreen;
  clipId: string;
  ladderClipId: string;
}) {
  const { cx, cy, pxPerDeg } = ATT;
  const horizon = `rotate(${-screen.bank} ${cx} ${cy}) translate(0 ${FLIGHT.pitch * pxPerDeg})`;
  const rungs: ReactNode[] = [];
  for (let deg = -20; deg <= 20; deg += 2.5) {
    if (deg === 0) continue;
    const y = cy - deg * pxPerDeg;
    const half = deg % 10 === 0 ? 34 : deg % 5 === 0 ? 18 : 8;
    rungs.push(
      <g key={deg}>
        <line
          x1={cx - half}
          x2={cx + half}
          y1={y}
          y2={y}
          className="stroke-white"
          strokeWidth={1.5}
        />
        {deg % 10 === 0 && (
          <>
            <text
              x={cx - half - 5}
              y={y}
              textAnchor="end"
              dominantBaseline="central"
              className="fill-white text-[11px] font-semibold"
            >
              {Math.abs(deg)}
            </text>
            <text
              x={cx + half + 5}
              y={y}
              dominantBaseline="central"
              className="fill-white text-[11px] font-semibold"
            >
              {Math.abs(deg)}
            </text>
          </>
        )}
      </g>,
    );
  }
  const rollTicks = [-60, -45, -30, -20, -10, 10, 20, 30, 45, 60].map((a) => {
    const long = a % 30 === 0;
    const outer = polar(cx, cy, 100 + (long ? 12 : 7), a);
    const inner = polar(cx, cy, 100, a);
    return (
      <line
        key={a}
        x1={inner.x}
        y1={inner.y}
        x2={outer.x}
        y2={outer.y}
        className="stroke-white"
        strokeWidth={2}
      />
    );
  });

  return (
    <g>
      <clipPath id={clipId}>
        <rect x={0} y={40} width={SCREEN.width} height={362} />
      </clipPath>
      <clipPath id={ladderClipId}>
        <rect x={cx - 80} y={cy - 80} width={160} height={150} />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <g transform={horizon}>
          <rect x={-400} y={cy - 800} width={1400} height={800} className="fill-sky" />
          <rect x={-400} y={cy} width={1400} height={800} className="fill-ground" />
          <line x1={-400} x2={1000} y1={cy} y2={cy} className="stroke-white" strokeWidth={2} />
        </g>
      </g>
      <g clipPath={`url(#${ladderClipId})`}>
        <g transform={horizon}>{rungs}</g>
      </g>
      {/* Roll scale (fixed), index at the top, and the sky pointer with the slip/skid bar. */}
      <path
        d={arcPath(cx, cy, 100, -60, 60)}
        className="stroke-white"
        strokeWidth={2}
        fill="none"
      />
      {rollTicks}
      <path
        d={`M ${cx} ${cy - 101} l -7 -11 h 14 Z`}
        className="fill-white stroke-black"
        strokeWidth={0.5}
      />
      <g transform={`rotate(${-screen.bank} ${cx} ${cy})`}>
        <path d={`M ${cx} ${cy - 98} l -8 12 h 16 Z`} className="fill-white" />
        <path d={`M ${cx - 9} ${cy - 84} h 18 l 2 6 h -22 Z`} className="fill-white" />
      </g>
      {/* Airplane symbol */}
      <path
        d={`M ${cx} ${cy} L ${cx - 62} ${cy + 22} L ${cx - 40} ${cy + 22} L ${cx} ${cy + 8} L ${cx + 40} ${cy + 22} L ${cx + 62} ${cy + 22} Z`}
        className="fill-arc-yellow stroke-black"
        strokeWidth={1.5}
      />
      <rect
        x={cx - 100}
        y={cy - 3}
        width={22}
        height={6}
        className="fill-arc-yellow stroke-black"
      />
      <rect x={cx + 78} y={cy - 3} width={22} height={6} className="fill-arc-yellow stroke-black" />
    </g>
  );
}

function Vsi({ vs }: { vs: number }) {
  const x = 550;
  const cy = 170;
  const pxPer1000 = 50;
  const y = cy - Math.max(-2000, Math.min(2000, vs)) * (pxPer1000 / 1000);
  const marks = [-2000, -1500, -1000, -500, 500, 1000, 1500, 2000];
  return (
    <g>
      <rect x={x} y={cy - 108} width={26} height={216} rx={3} className="fill-instrument/85" />
      <line x1={x + 2} x2={x + 12} y1={cy} y2={cy} className="stroke-white" strokeWidth={2} />
      {marks.map((m) => {
        const my = cy - m * (pxPer1000 / 1000);
        const labelled = m % 1000 === 0;
        return (
          <g key={m}>
            <line
              x1={x + 2}
              x2={x + (labelled ? 9 : 6)}
              y1={my}
              y2={my}
              className="stroke-white"
              strokeWidth={1.5}
            />
            {labelled && (
              <text
                x={x + 13}
                y={my}
                dominantBaseline="central"
                className="fill-white text-[11px] font-semibold"
              >
                {Math.abs(m / 1000)}
              </text>
            )}
          </g>
        );
      })}
      <path
        d={`M ${x + 2} ${y} l 7 -8 h 20 v 16 h -20 Z`}
        className="fill-black stroke-white"
        strokeWidth={1}
      />
      <text
        x={x + 19}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        className={`${MONO} fill-white text-[10px] font-bold`}
      >
        {Math.round(vs / 10) * 10}
      </text>
    </g>
  );
}

function Hsi({ screen }: { screen: PfdScreen }) {
  const { cx, cy, r } = HSI;
  const heading = screen.heading;
  const card: ReactNode[] = [];
  for (let deg = 0; deg < 360; deg += 5) {
    const a = deg - heading;
    const major = deg % 10 === 0;
    const outer = polar(cx, cy, r, a);
    const inner = polar(cx, cy, r - (major ? 9 : 5), a);
    card.push(
      <line
        key={`t${deg}`}
        x1={outer.x}
        y1={outer.y}
        x2={inner.x}
        y2={inner.y}
        className="stroke-white"
        strokeWidth={major ? 1.5 : 1}
      />,
    );
    if (deg % 30 === 0) {
      const p = polar(cx, cy, r - 18, a);
      card.push(
        <text
          key={`l${deg}`}
          x={p.x}
          y={p.y}
          textAnchor="middle"
          dominantBaseline="central"
          transform={`rotate(${a} ${p.x} ${p.y})`}
          className="fill-white text-[11px] font-bold"
        >
          {{ 0: 'N', 90: 'E', 180: 'S', 270: 'W' }[deg] ?? deg / 10}
        </text>,
      );
    }
  }

  const gps = screen.cdi === 'GPS';
  const showNeedle = !gps || screen.route;
  const course = gps ? DESTINATION.dtk : VOR_COURSE;
  const deviation = gps ? 0 : -14;
  const needleClass = gps
    ? 'stroke-display-magenta fill-display-magenta'
    : 'stroke-display-green fill-display-green';
  const textClass = gps ? 'fill-display-magenta' : 'fill-display-green';
  const trend = turnTrend(screen.bank, FLIGHT.tas);
  const bug = polar(cx, cy, r, FLIGHT.headingBug - heading);

  return (
    <g>
      {/* Turn rate indicator: half and standard rate marks and the 6-second trend line. */}
      {[-18, -9, 9, 18].map((a) => {
        const inner = polar(cx, cy, r + 8, a);
        const outer = polar(cx, cy, r + (Math.abs(a) === 18 ? 16 : 13), a);
        return (
          <line
            key={a}
            x1={inner.x}
            y1={inner.y}
            x2={outer.x}
            y2={outer.y}
            className="stroke-white"
            strokeWidth={2}
          />
        );
      })}
      {Math.abs(trend) > 0.5 && (
        <path
          d={arcPath(cx, cy, r + 10, Math.min(0, trend), Math.max(0, trend))}
          className="stroke-display-magenta"
          strokeWidth={4}
          fill="none"
        />
      )}
      <circle cx={cx} cy={cy} r={r} className="fill-instrument/90 stroke-white" strokeWidth={1} />
      {card}
      {/* Heading bug */}
      <g transform={`rotate(${FLIGHT.headingBug - heading} ${bug.x} ${bug.y})`}>
        <path
          d={`M ${bug.x - 7} ${bug.y - 5} h 14 v 8 h -4 l -3 -4 l -3 4 h -4 Z`}
          className="fill-display-cyan"
        />
      </g>
      {showNeedle && (
        <g transform={`rotate(${course - heading} ${cx} ${cy})`} className={needleClass}>
          <path d={`M ${cx} ${cy - 58} l -7 12 h 14 Z`} />
          <line x1={cx} x2={cx} y1={cy - 46} y2={cy - 28} strokeWidth={4} />
          <line x1={cx} x2={cx} y1={cy + 28} y2={cy + 56} strokeWidth={4} />
          <line x1={cx + deviation} x2={cx + deviation} y1={cy - 24} y2={cy + 24} strokeWidth={4} />
          {[-28, -14, 14, 28].map((d) => (
            <circle
              key={d}
              cx={cx + d}
              cy={cy}
              r={3}
              className="fill-none stroke-white"
              strokeWidth={1.5}
            />
          ))}
        </g>
      )}
      {/* Own airplane */}
      <path
        d={`M ${cx} ${cy - 12} v 24 M ${cx - 10} ${cy - 2} h 20 M ${cx - 5} ${cy + 10} h 10`}
        className="stroke-white"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <text
        x={cx - 36}
        y={cy - 22}
        textAnchor="middle"
        className={`${textClass} text-[11px] font-bold`}
      >
        {screen.cdi}
      </text>
      {/* Lubber line and heading readout */}
      <path d={`M ${cx} ${cy - r + 1} l -5 -7 h 10 Z`} className="fill-white" />
      <rect
        x={cx - 22}
        y={cy - r - 40}
        width={44}
        height={18}
        className="fill-black stroke-white"
        strokeWidth={1}
      />
      <text
        x={cx}
        y={cy - r - 31}
        textAnchor="middle"
        dominantBaseline="central"
        className={`${MONO} fill-white text-[12px] font-bold`}
      >
        {threeDigits(heading)}°
      </text>
      <DataBox x={150} y={262} width={64}>
        <tspan className="fill-white">HDG </tspan>
        <tspan className="fill-display-cyan">{threeDigits(FLIGHT.headingBug)}°</tspan>
      </DataBox>
      <DataBox x={366} y={262} width={64}>
        <tspan className="fill-white">CRS </tspan>
        <tspan className={textClass}>{threeDigits(course)}°</tspan>
      </DataBox>
    </g>
  );
}

function WindBox({ heading }: { heading: number }) {
  const cx = 34;
  const cy = 352;
  const toward = FLIGHT.windFrom + 180 - heading;
  return (
    <g>
      <rect
        x={14}
        y={330}
        width={92}
        height={44}
        className="fill-black/80 stroke-instrument-text/50"
        strokeWidth={1}
      />
      <g transform={`rotate(${toward} ${cx} ${cy})`} className="fill-white stroke-white">
        <line x1={cx} x2={cx} y1={cy + 13} y2={cy - 6} strokeWidth={2.5} />
        <path d={`M ${cx} ${cy - 14} l -6 9 h 12 Z`} />
      </g>
      <text x={56} y={346} className={`${MONO} fill-white text-[11px] font-semibold`}>
        {threeDigits(FLIGHT.windFrom)}°
      </text>
      <text x={56} y={362} className={`${MONO} fill-white text-[11px] font-semibold`}>
        {FLIGHT.windKt}KT
      </text>
    </g>
  );
}

function TopBar({ route }: { route: boolean }) {
  const text = `${MONO} text-[11px] font-semibold`;
  return (
    <g>
      <rect width={SCREEN.width} height={40} className="fill-black" />
      <line x1={150} x2={150} y1={0} y2={40} className="stroke-instrument-text/40" />
      <line x1={430} x2={430} y1={0} y2={40} className="stroke-instrument-text/40" />
      {/* NAV: label, standby (tuning box), active */}
      <text x={4} y={15} className="fill-instrument-text text-[9px] font-bold">
        NAV1
      </text>
      <rect x={32} y={5} width={46} height={14} className="fill-none stroke-display-cyan" />
      <text x={35} y={15} className={`${text} fill-display-cyan`}>
        108.00
      </text>
      <text x={81} y={15} className={`${text} fill-white`}>
        ↔
      </text>
      <text x={95} y={15} className={`${text} fill-display-green`}>
        117.60
      </text>
      <text x={4} y={33} className="fill-instrument-text text-[9px] font-bold">
        NAV2
      </text>
      <text x={35} y={33} className={`${text} fill-white`}>
        108.00
      </text>
      <text x={95} y={33} className={`${text} fill-white`}>
        110.50
      </text>
      {/* Navigation status */}
      {route ? (
        <>
          <text x={164} y={25} className={`${text} fill-display-magenta text-[13px]`}>
            D→ {DESTINATION.ident}
          </text>
          <text x={260} y={25} className={`${text} fill-white text-[12px]`}>
            DIS <tspan className="fill-display-magenta">{DESTINATION.distance}NM</tspan>
          </text>
          <text x={350} y={25} className={`${text} fill-white text-[12px]`}>
            DTK <tspan className="fill-display-magenta">{threeDigits(DESTINATION.dtk)}°</tspan>
          </text>
        </>
      ) : (
        <text x={290} y={25} textAnchor="middle" className={`${text} fill-instrument-text/70`}>
          DIS __._NM DTK ___°
        </text>
      )}
      {/* COM: active, standby (tuning box), label */}
      <text x={434} y={15} className={`${text} fill-display-green`}>
        118.300
      </text>
      <text x={488} y={15} className={`${text} fill-white`}>
        ↔
      </text>
      <rect x={497} y={5} width={53} height={14} className="fill-none stroke-display-cyan" />
      <text x={500} y={15} className={`${text} fill-display-cyan`}>
        122.800
      </text>
      <text x={553} y={15} className="fill-instrument-text text-[9px] font-bold">
        COM1
      </text>
      <text x={434} y={33} className={`${text} fill-white`}>
        136.975
      </text>
      <text x={500} y={33} className={`${text} fill-white`}>
        121.500
      </text>
      <text x={553} y={33} className="fill-instrument-text text-[9px] font-bold">
        COM2
      </text>
    </g>
  );
}

function BottomBar() {
  const text = `${MONO} text-[11px] font-semibold`;
  return (
    <g>
      <rect y={402} width={SCREEN.width} height={38} className="fill-black" />
      <text x={8} y={415} className={`${text} fill-white`}>
        OAT 15°C
      </text>
      <text x={378} y={415} className={`${text} fill-white`}>
        XPDR <tspan className="fill-display-green">1200 ALT</tspan>
      </text>
      <text x={490} y={415} className={`${text} fill-white`}>
        LCL 10:24:00
      </text>
      {SOFTKEYS.map((label, i) => (
        <g key={i}>
          <line
            x1={softkeyCenter(i) - SCREEN.x - SCREEN.width / SOFTKEYS.length / 2}
            x2={softkeyCenter(i) - SCREEN.x - SCREEN.width / SOFTKEYS.length / 2}
            y1={422}
            y2={440}
            className="stroke-instrument-text/30"
          />
          <text
            x={softkeyCenter(i) - SCREEN.x}
            y={432}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-white text-[10px] font-semibold"
          >
            {label}
          </text>
        </g>
      ))}
    </g>
  );
}

function DirectToWindow({ screen, typed }: { screen: PfdScreen; typed: number }) {
  const x = 388;
  const y = 300;
  const ident = screen.ident.slice(0, typed);
  const cursorAt = screen.window === 'ident' ? Math.min(ident.length, 3) : -1;
  const confirmed = screen.window === 'activate';
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={184}
        height={100}
        className="fill-instrument stroke-display-cyan"
        strokeWidth={1.5}
      />
      <rect x={x} y={y} width={184} height={16} className="fill-bezel" />
      <text
        x={x + 92}
        y={y + 8}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-white text-[10px] font-bold"
      >
        DIRECT TO
      </text>
      {Array.from({ length: 4 }, (_, i) => {
        const cx = x + 12 + i * 12;
        const cursor = i === cursorAt;
        return (
          <g key={i}>
            {cursor && (
              <rect x={cx - 0.5} y={y + 22} width={12} height={18} className="fill-display-cyan" />
            )}
            <text
              x={cx + 5.5}
              y={y + 31}
              textAnchor="middle"
              dominantBaseline="central"
              className={`${MONO} text-[15px] font-bold ${cursor ? 'fill-black' : 'fill-white'}`}
            >
              {ident[i] ?? '_'}
            </text>
          </g>
        );
      })}
      {confirmed && (
        <>
          <text x={x + 12} y={y + 54} className={`${MONO} fill-white text-[11px]`}>
            {DESTINATION.name}
          </text>
          <text x={x + 12} y={y + 70} className={`${MONO} fill-white text-[11px]`}>
            CRS {threeDigits(DESTINATION.dtk)}° DIS {DESTINATION.distance}NM
          </text>
        </>
      )}
      {confirmed && (
        <rect x={x + 8} y={y + 78} width={76} height={17} className="fill-display-cyan" />
      )}
      <text
        x={x + 12}
        y={y + 87}
        dominantBaseline="central"
        className={`${MONO} text-[11px] font-bold ${confirmed ? 'fill-black' : 'fill-instrument-text/60'}`}
      >
        ACTIVATE?
      </text>
    </g>
  );
}
