import { cn } from '@/lib/cn';
import type { AircraftDto } from '@shared/schemas/api';
import { arcsModel, type ArcFlag } from './speeds';

const SEGMENT_CLASSES = {
  white: 'bg-arc-white',
  green: 'bg-arc-green',
  yellow: 'bg-arc-yellow',
} as const;

const TONE_TEXT: Record<ArcFlag['tone'], string> = {
  target: 'text-display-cyan',
  limit: 'text-arc-red',
  plain: 'text-instrument-text',
};

const TONE_LINE: Record<ArcFlag['tone'], string> = {
  target: 'bg-display-cyan',
  limit: 'bg-arc-red',
  plain: 'bg-instrument-text/60',
};

const pct = (fraction: number) => `${(fraction * 100).toFixed(2)}%`;

/**
 * The airspeed indicator's arcs flattened into one horizontal band, with the V-speeds as
 * flags above it (the hub's kneeboard, Section 20.8). A gauge diagram, so it is painted with
 * the fixed instrument tokens and looks the same in Day and Night. Scrolls sideways on a
 * phone rather than shrinking its labels.
 */
export function AirspeedArcs({
  aircraft,
  className,
}: {
  aircraft: AircraftDto;
  className?: string;
}) {
  const model = arcsModel(aircraft);
  const [white, green, yellow] = model.segments;
  const label = [
    `Airspeed indicator arcs in knots: white ${white!.from} to ${white!.to}`,
    `green ${green!.from} to ${green!.to}`,
    `yellow ${yellow!.from} to ${yellow!.to}`,
    `red line at ${model.redline.kias}`,
    `V-speed flags: ${model.flags.map((f) => `${f.name} ${f.kias}`).join(', ')}`,
  ].join(', ');

  return (
    <div className={cn('-mx-4 overflow-x-auto px-4', className)}>
      <div
        role="img"
        aria-label={label}
        className="relative h-[232px] min-w-[880px] rounded-lg bg-instrument font-mono text-instrument-text"
      >
        <div className="absolute inset-x-10 top-6 h-[92px]">
          {model.flags.map((f) => (
            <div
              key={f.key}
              style={{ left: pct(f.at), top: f.row ? 32 : 0 }}
              className="absolute flex -translate-x-1/2 flex-col items-center gap-1"
            >
              <span className={cn('text-xs leading-4 whitespace-nowrap', TONE_TEXT[f.tone])}>
                {f.name} {f.kias}
              </span>
              <span className={cn('w-px', f.row ? 'h-8' : 'h-16', TONE_LINE[f.tone])} />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-10 top-[120px] h-5 rounded-[3px] bg-bezel">
          {[green, yellow].map((s) => (
            <div
              key={s!.id}
              style={{ left: pct(s!.start), width: pct(s!.width) }}
              className={cn('absolute inset-y-0', SEGMENT_CLASSES[s!.id])}
            />
          ))}
          <div
            style={{ left: pct(model.redline.at) }}
            className="absolute -inset-y-1.5 w-[3px] -translate-x-1/2 bg-arc-red"
          />
        </div>
        <div className="absolute inset-x-10 top-[146px] h-2.5">
          <div
            style={{ left: pct(white!.start), width: pct(white!.width) }}
            className={cn('absolute inset-y-0 rounded-[2px]', SEGMENT_CLASSES.white)}
          />
        </div>

        <div className="absolute inset-x-10 top-[168px] h-7 text-xs leading-4">
          {model.ticks.map((t) => (
            <span key={t.kias} style={{ left: pct(t.at) }} className="absolute -translate-x-1/2">
              {t.kias}
            </span>
          ))}
        </div>

        <div className="absolute inset-x-10 bottom-3.5 flex gap-6 font-sans text-xs leading-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-3.5 rounded-[2px] bg-arc-white" />
            White: flaps {white!.from} to {white!.to}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-3.5 rounded-[2px] bg-arc-green" />
            Green: normal {green!.from} to {green!.to}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-3.5 rounded-[2px] bg-arc-yellow" />
            Yellow: smooth air only {yellow!.from} to {yellow!.to}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-[3px] bg-arc-red" />
            Red line: never exceed {model.redline.kias}
          </span>
        </div>
      </div>
    </div>
  );
}
