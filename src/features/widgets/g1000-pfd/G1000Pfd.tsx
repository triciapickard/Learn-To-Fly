import { ChevronLeft, ChevronRight, Play, RotateCcw, Square } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { Button } from '@/components/Button';
import { useAircraft } from '@/features/content/api';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/cn';
import { useAnnouncer, useTween } from '../shared/hooks';
import { QuizPanel } from '../shared/QuizPanel';
import type { TapeBand } from '../shared/svg';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetMode, WidgetProps } from '../types';
import {
  answerText,
  DIRECT_TO_STEPS,
  EXPLORE_SCREEN,
  FLIGHT,
  NAV_REGIONS,
  PFD_REGIONS,
  QUESTIONS,
  regionById,
  regionSummary,
  type Region,
  type RegionId,
} from './model';
import { Pfd } from './Pfd';

type View = 'pfd' | 'navigation';
const TYPE_INTERVAL_MS = 400;

/** W2 — G1000 PFD explorer (Section 16.4). */
export default function G1000Pfd({ props, onQuizAnswer }: WidgetProps) {
  const initialView: View = props.view === 'navigation' ? 'navigation' : 'pfd';
  const [mode, setModeState] = useState<WidgetMode>(props.mode === 'quiz' ? 'quiz' : 'explore');
  const [view, setViewState] = useState<View>(initialView);
  const [selected, setSelected] = useState<RegionId | null>(null);
  const [hovered, setHovered] = useState<RegionId | null>(null);
  const [tour, setTour] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState(4);
  const timer = useRef<number | undefined>(undefined);
  const reduced = useReducedMotion();
  const [message, announce] = useAnnouncer(300);
  const { data } = useAircraft();
  const listLabel = useId();
  const stepsLabel = useId();

  useEffect(() => () => window.clearInterval(timer.current), []);

  const quiz = mode === 'quiz';
  const navigation = !quiz && view === 'navigation';
  const current = DIRECT_TO_STEPS[step]!;
  const screen = navigation ? current.screen : EXPLORE_SCREEN;
  const [heading, bank] = useTween([screen.heading, screen.bank], 1200);
  const regions = navigation ? NAV_REGIONS : PFD_REGIONS;
  const hotspots = navigation ? [...PFD_REGIONS, ...NAV_REGIONS] : PFD_REGIONS;
  const shown = quiz ? null : (hovered ?? selected ?? (navigation ? current.highlight : null));
  const highlight = quiz ? selected : shown;

  const arcs = data?.aircraft.arcs;
  const bands: TapeBand[] = arcs
    ? [
        { from: arcs.white[0], to: arcs.white[1], className: 'fill-arc-white', column: 1 },
        { from: arcs.green[0], to: arcs.green[1], className: 'fill-arc-green' },
        { from: arcs.yellow[0], to: arcs.yellow[1], className: 'fill-arc-yellow' },
        { from: arcs.redline, to: 400, className: 'fill-arc-red' },
      ]
    : [];

  const select = (id: RegionId) => {
    setSelected(id);
    if (quiz) {
      announce(`Selected display area ${hotspots.findIndex((r) => r.id === id) + 1}.`);
      return;
    }
    const index = PFD_REGIONS.findIndex((r) => r.id === id);
    if (tour !== null && index >= 0) setTour(index);
    announce(regionSummary(regionById(id)));
  };

  const goToTourStop = (index: number | null) => {
    setTour(index);
    const region = index === null ? null : PFD_REGIONS[index]!;
    setSelected(region?.id ?? null);
    if (region) {
      announce(`Stop ${index! + 1} of ${PFD_REGIONS.length}. ${regionSummary(region)}`);
    }
  };

  const goToStep = (index: number) => {
    window.clearInterval(timer.current);
    const next = DIRECT_TO_STEPS[index]!;
    setStep(index);
    setSelected(null);
    announce(`Step ${index + 1} of ${DIRECT_TO_STEPS.length}: ${next.title}. ${next.instruction}`);
    if (next.id === 'enter-ident' && !reduced) {
      let count = 0;
      setTyped(0);
      timer.current = window.setInterval(() => {
        count += 1;
        setTyped(count);
        if (count >= next.screen.ident.length) window.clearInterval(timer.current);
      }, TYPE_INTERVAL_MS);
    } else {
      setTyped(4);
    }
  };

  const setMode = (next: WidgetMode) => {
    setModeState(next);
    setSelected(null);
    setTour(null);
  };

  const setView = (next: View) => {
    setViewState(next);
    setSelected(null);
    setTour(null);
  };

  const reset = () => {
    window.clearInterval(timer.current);
    setViewState(initialView);
    setSelected(null);
    setHovered(null);
    setTour(null);
    setStep(0);
    setTyped(4);
  };

  const label = quiz
    ? 'G1000 PFD. Choose a display area to answer the question.'
    : 'Simplified drawing of a G1000 PFD in its bezel.';

  const description = (
    <>
      <p>
        An original, simplified drawing of a Garmin G1000 NXi primary flight display (PFD) in its
        bezel, not a screenshot. The airplane is climbing through {FLIGHT.altitude} feet at{' '}
        {FLIGHT.ias} knots in a gentle right turn. The parts of the display are:
      </p>
      <ul className="list-disc pl-5">
        {[...PFD_REGIONS, ...NAV_REGIONS].map((r) => (
          <li key={r.id}>{regionSummary(r)}</li>
        ))}
      </ul>
    </>
  );

  return (
    <WidgetFrame
      title="G1000 PFD explorer"
      mode={mode}
      onModeChange={setMode}
      quizAvailable
      onReset={reset}
      description={description}
    >
      {!quiz && (
        <div
          role="group"
          aria-label="View"
          className="mb-3 flex w-fit rounded-control border border-border-strong p-0.5"
        >
          {(
            [
              ['pfd', 'PFD tour'],
              ['navigation', 'GPS navigation'],
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
      )}

      <Pfd
        screen={{ ...screen, heading: heading ?? screen.heading, bank: bank ?? screen.bank }}
        typed={typed}
        highlight={highlight}
        hotspots={hotspots}
        airspeedBands={bands}
        quiz={quiz}
        selected={selected}
        onHover={setHovered}
        onSelect={select}
        label={label}
      />
      <p className="mt-1 text-xs text-muted">
        Simplified original drawing. Labels follow the G1000 NXi; the sim may differ slightly.
      </p>
      {!quiz && !navigation && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {tour === null ? (
            <Button size="sm" onClick={() => goToTourStop(0)}>
              <Play aria-hidden className="size-4" /> Start tour
            </Button>
          ) : (
            <>
              <Button
                variant="secondary"
                size="sm"
                disabled={tour === 0}
                onClick={() => goToTourStop(tour - 1)}
              >
                <ChevronLeft aria-hidden className="size-4" /> Previous
              </Button>
              <Button
                size="sm"
                onClick={() => goToTourStop(tour + 1 < PFD_REGIONS.length ? tour + 1 : null)}
              >
                {tour + 1 < PFD_REGIONS.length ? 'Next' : 'Finish tour'}
                <ChevronRight aria-hidden className="size-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => goToTourStop(null)}>
                <Square aria-hidden className="size-4" /> End tour
              </Button>
              <span className="text-sm text-muted">
                Stop {tour + 1} of {PFD_REGIONS.length}
              </span>
            </>
          )}
        </div>
      )}

      {navigation && (
        <section
          aria-labelledby={stepsLabel}
          className="mt-4 rounded-control border border-border p-4"
        >
          <p id={stepsLabel} className="font-semibold">
            Direct-To, step by step
          </p>
          <ol className="mt-2 space-y-1" aria-label="Direct-To steps">
            {DIRECT_TO_STEPS.map((s, i) => (
              <li
                key={s.id}
                aria-current={i === step ? 'step' : undefined}
                className={cn(
                  'rounded-control px-3 py-2 text-sm',
                  i === step ? 'bg-primary-soft' : 'text-muted',
                )}
              >
                <span className="font-semibold">
                  {i + 1}. {s.title}
                </span>
                {i === step && <p className="mt-1 text-text">{s.instruction}</p>}
              </li>
            ))}
          </ol>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button
              variant="secondary"
              size="sm"
              disabled={step === 0}
              onClick={() => goToStep(step - 1)}
            >
              <ChevronLeft aria-hidden className="size-4" /> Previous step
            </Button>
            {step < DIRECT_TO_STEPS.length - 1 ? (
              <Button size="sm" onClick={() => goToStep(step + 1)}>
                Next step <ChevronRight aria-hidden className="size-4" />
              </Button>
            ) : (
              <Button size="sm" onClick={() => goToStep(0)}>
                <RotateCcw aria-hidden className="size-4" /> Start over
              </Button>
            )}
          </div>
        </section>
      )}

      {!quiz && (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="md:order-2">
            <RegionCard region={shown ? regionById(shown) : null} />
          </div>
          <div className="md:order-1">
            <p id={listLabel} className="text-sm font-semibold">
              {navigation ? 'Navigation keys' : 'Parts of the display'}
            </p>
            <div role="group" aria-labelledby={listLabel} className="mt-2 flex flex-wrap gap-2">
              {regions.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  aria-pressed={selected === r.id}
                  onClick={() => select(r.id)}
                  className={cn(
                    'min-h-9 rounded-control border px-3 text-left text-sm font-medium',
                    selected === r.id
                      ? 'border-primary bg-primary-soft text-text'
                      : 'border-border-strong text-text hover:bg-surface-2',
                  )}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {quiz && (
        <div className="mt-4">
          <p className="mb-2 text-sm text-muted">
            Click or tap the display, or use Tab to move between display areas and Enter to choose
            one.
          </p>
          <QuizPanel
            questions={QUESTIONS}
            check={(q) => ({ correct: selected === q.target, answer: answerText(selected) })}
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

function RegionCard({ region }: { region: Region | null }) {
  if (!region) {
    return (
      <div className="rounded-control bg-surface-2 p-4 text-sm text-muted">
        Hover over or tap part of the display, choose from the list, or start the tour.
      </div>
    );
  }
  return (
    <div className="rounded-control bg-surface-2 p-4">
      <p className="font-semibold">{region.name}</p>
      <dl className="mt-2 space-y-2 text-sm">
        <div>
          <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
            What it shows
          </dt>
          <dd>{region.shows}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
            Classic equivalent
          </dt>
          <dd>{region.classic}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold tracking-wide text-muted uppercase">Tip</dt>
          <dd>{region.tip}</dd>
        </div>
      </dl>
    </div>
  );
}
