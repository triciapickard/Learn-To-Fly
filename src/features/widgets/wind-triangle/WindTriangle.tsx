import { useCallback, useState } from 'react';
import { FormField } from '@/components/FormField';
import { Input } from '@/components/Input';
import { useAnnouncer, useDrag } from '../shared/hooks';
import { Arrow, Compass, Label } from '../shared/svg';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetProps } from '../types';
import {
  describe,
  eteText,
  heading,
  parseInputs,
  results,
  vectors,
  wcaText,
  windFromTip,
  type FieldName,
  type Pt as Point,
  type WindInputs,
} from './model';

const DEFAULTS: Record<FieldName, string> = {
  tc: '090',
  tas: '100',
  wd: '360',
  ws: '20',
  variation: '13',
  distance: '49',
};

const FIELDS: { name: FieldName; label: string; hint?: string; suffix: string }[] = [
  { name: 'tc', label: 'True course', suffix: '°' },
  { name: 'tas', label: 'True airspeed', suffix: 'kt' },
  { name: 'wd', label: 'Wind from', suffix: '°' },
  { name: 'ws', label: 'Wind speed', suffix: 'kt' },
  { name: 'variation', label: 'Variation', hint: 'East positive, west negative', suffix: '°' },
  { name: 'distance', label: 'Distance', suffix: 'nm' },
];

const ORIGIN = { x: 170, y: 170 };
const RADIUS = 150;

/** W12 — Wind triangle (Section 16.13). */
export default function WindTriangle({ props }: WidgetProps) {
  const [fields, setFields] = useState<Record<FieldName, string>>(() => ({
    ...DEFAULTS,
    ...Object.fromEntries(
      Object.entries(props).filter(([k]) => k in DEFAULTS) as [FieldName, string][],
    ),
  }));
  const [lastGood, setLastGood] = useState<WindInputs>(
    () => parseInputs(DEFAULTS).inputs as WindInputs,
  );
  const [message, announce] = useAnnouncer(800);

  const { inputs: parsed, errors } = parseInputs(fields);
  const inputs = parsed ?? lastGood;
  const r = results(inputs);
  const summary = describe(inputs, r);

  const updateFields = useCallback(
    (next: Record<FieldName, string>) => {
      setFields(next);
      const good = parseInputs(next).inputs;
      if (good) {
        setLastGood(good);
        announce(describe(good, results(good)));
      }
    },
    [announce],
  );

  // Scale so the longest vector fits inside the compass ring.
  const scale = (RADIUS - 12) / Math.max(inputs.tas + inputs.ws, 60);
  const v = vectors(inputs, r, ORIGIN, scale);
  const labels = v.ground ? labelPositions(v.origin, v.wind, v.ground) : null;

  const drag = useDrag(
    useCallback(
      (p: { x: number; y: number }) => {
        const wind = windFromTip(ORIGIN, p, scale);
        updateFields({ ...fields, wd: String(wind.wd).padStart(3, '0'), ws: String(wind.ws) });
      },
      [fields, scale, updateFields],
    ),
  );

  const description = (
    <>
      <p>
        A wind triangle drawn north-up inside a compass ring. The blue wind arrow starts at the
        center and points where the wind blows to. From its tip, the heading arrow (true heading and
        true airspeed) reaches the end of the green ground arrow, which runs along the true course
        with a length equal to the groundspeed. Ground = air + wind.
      </p>
      <p>{summary}</p>
    </>
  );

  return (
    <WidgetFrame
      title="Wind triangle"
      onReset={() => updateFields(DEFAULTS)}
      description={description}
    >
      <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <svg
          viewBox="0 0 340 340"
          className="mx-auto w-full max-w-sm touch-none select-none"
          role="img"
          aria-label={`Wind triangle. ${summary}`}
          {...drag}
        >
          <Compass cx={ORIGIN.x} cy={ORIGIN.y} r={RADIUS + 12} />
          {v.ground && (
            <>
              <Arrow
                from={v.wind}
                to={v.ground}
                className="stroke-magenta fill-magenta"
                width={3}
              />
              <Arrow
                from={v.origin}
                to={v.ground}
                className="stroke-success fill-success"
                width={4}
              />
              <Label {...labels!.heading} className="fill-magenta">
                Heading {heading(r!.th)}
              </Label>
              <Label {...labels!.course} className="fill-success">
                Course {heading(inputs.tc)}
              </Label>
            </>
          )}
          {inputs.ws > 0 && (
            <Arrow from={v.origin} to={v.wind} className="stroke-primary fill-primary" width={3} />
          )}
          <circle
            cx={v.wind.x}
            cy={v.wind.y}
            r={11}
            className="cursor-grab fill-primary/25 stroke-primary"
            strokeWidth={2}
          />
          <circle cx={ORIGIN.x} cy={ORIGIN.y} r={3} className="fill-text" />
        </svg>

        <div>
          <div className="grid grid-cols-2 gap-3">
            {FIELDS.map((f) => (
              <FormField
                key={f.name}
                label={`${f.label} (${f.suffix})`}
                hint={f.hint}
                error={errors[f.name]}
              >
                <Input
                  inputMode="decimal"
                  value={fields[f.name]}
                  onChange={(e) => updateFields({ ...fields, [f.name]: e.target.value })}
                />
              </FormField>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted">
            Or drag the wind arrow&apos;s tip on the diagram.
          </p>
        </div>
      </div>

      {r ? (
        <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[
            ['WCA', wcaText(r.wca)],
            ['True heading', heading(r.th)],
            ['Magnetic heading', heading(r.mh)],
            ['Groundspeed', `${Math.round(r.gs)} kt`],
            ['Time en route', eteText(r.ete)],
          ].map(([label, value]) => (
            <div key={label} className="rounded-control bg-surface-2 p-3">
              <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</dt>
              <dd className="font-mono text-lg font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p role="alert" className="mt-4 rounded-control bg-danger-soft p-3 text-sm font-medium">
          The wind is too strong for this airspeed: no heading can hold the course.
        </p>
      )}

      <div aria-live="polite" className="sr-only">
        {message}
      </div>
    </WidgetFrame>
  );
}

/**
 * Puts the heading label on the wind-tip side of the course line and the course label on
 * the other side, so they don't overlap when the triangle is thin.
 */
function labelPositions(o: Point, w: Point, g: Point) {
  const len = Math.hypot(g.x - o.x, g.y - o.y) || 1;
  const n = { x: -(g.y - o.y) / len, y: (g.x - o.x) / len };
  const side = Math.sign((g.x - o.x) * (w.y - o.y) - (g.y - o.y) * (w.x - o.x)) || 1;
  const off = 16;
  return {
    heading: {
      x: (w.x + g.x) / 2 + n.x * off * side,
      y: (w.y + g.y) / 2 + n.y * off * side,
    },
    course: {
      x: (o.x + g.x) / 2 - n.x * off * side,
      y: (o.y + g.y) / 2 - n.y * off * side,
    },
  };
}
