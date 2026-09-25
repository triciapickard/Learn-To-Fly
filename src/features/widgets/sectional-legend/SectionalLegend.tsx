import { useId, useState, type KeyboardEvent } from 'react';
import { cn } from '@/lib/cn';
import { useAnnouncer } from '../shared/hooks';
import { QuizPanel } from '../shared/QuizPanel';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetMode, WidgetProps } from '../types';
import { Chart } from './Chart';
import { CHART, HOTSPOTS, hotspotById, QUESTIONS, type Hotspot } from './model';

/** W10 — Sectional legend explorer (Section 16.11). */
export default function SectionalLegend({ props, onQuizAnswer }: WidgetProps) {
  const [mode, setModeState] = useState<WidgetMode>(props.mode === 'quiz' ? 'quiz' : 'explore');
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [message, announce] = useAnnouncer(300);
  const clipId = useId().replace(/:/g, '');
  const listLabel = useId();
  const quiz = mode === 'quiz';

  const shown = quiz ? null : (hovered ?? selected);
  const highlight = quiz ? selected : shown;
  const highlightRect = highlight ? hotspotById(highlight)?.rect : undefined;

  const select = (id: string) => {
    setSelected(id);
    if (quiz) {
      announce(`Selected chart area ${HOTSPOTS.findIndex((h) => h.id === id) + 1}.`);
      return;
    }
    const h = hotspotById(id)!;
    announce(`${h.name}. ${h.legend}. ${h.explanation}`);
  };

  const setMode = (m: WidgetMode) => {
    setModeState(m);
    setSelected(null);
  };

  const description = (
    <>
      <p>
        An original, simplified drawing in the style of a VFR sectional chart around Livermore,
        California, with a &ldquo;Not for navigation&rdquo; watermark. {CHART.note}
      </p>
      <ul className="list-disc pl-5">
        {HOTSPOTS.map((h) => (
          <li key={h.id}>
            {h.name} ({h.legend}): {h.explanation}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <WidgetFrame
      title="Sectional chart legend explorer"
      mode={mode}
      onModeChange={setMode}
      quizAvailable
      onReset={() => {
        setSelected(null);
        setHovered(null);
      }}
      description={description}
    >
      <svg
        viewBox={`0 0 ${CHART.width} ${CHART.height}`}
        className="w-full rounded-control border border-border select-none"
        role={quiz ? 'group' : 'img'}
        aria-label={
          quiz
            ? 'Sectional chart. Choose a chart area to answer the question.'
            : 'Simplified sectional chart around Livermore.'
        }
      >
        <Chart clipId={clipId} />
        {highlightRect && (
          <rect
            x={highlightRect.x - 3}
            y={highlightRect.y - 3}
            width={highlightRect.width + 6}
            height={highlightRect.height + 6}
            rx={6}
            className="pointer-events-none fill-arc-yellow/20 stroke-accent"
            strokeWidth={3}
          />
        )}
        {HOTSPOTS.map((h, i) => (
          <rect
            key={h.id}
            {...h.rect}
            fill="transparent"
            data-hotspot={h.id}
            className={cn(
              'cursor-pointer',
              quiz && 'outline-none focus-visible:stroke-primary focus-visible:[stroke-width:3px]',
            )}
            onPointerEnter={() => setHovered(h.id)}
            onPointerLeave={() => setHovered(null)}
            onClick={() => select(h.id)}
            {...(quiz && {
              role: 'button',
              tabIndex: 0,
              'aria-label': `Chart area ${i + 1}`,
              'aria-pressed': selected === h.id,
              onKeyDown: (e: KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  select(h.id);
                }
              },
            })}
          />
        ))}
      </svg>
      <p className="mt-1 text-xs text-muted">{CHART.note}</p>

      {!quiz && (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="md:order-2">
            <HotspotCard hotspot={shown ? (hotspotById(shown) ?? null) : null} />
          </div>
          <div className="md:order-1">
            <p id={listLabel} className="text-sm font-semibold">
              Chart symbols
            </p>
            <div role="group" aria-labelledby={listLabel} className="mt-2 flex flex-wrap gap-2">
              {HOTSPOTS.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  aria-pressed={selected === h.id}
                  onClick={() => select(h.id)}
                  className={cn(
                    'min-h-9 rounded-control border px-3 text-left text-sm font-medium',
                    selected === h.id
                      ? 'border-primary bg-primary-soft text-text'
                      : 'border-border-strong text-text hover:bg-surface-2',
                  )}
                >
                  {h.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {quiz && (
        <div className="mt-4">
          <p className="mb-2 text-sm text-muted">
            Click or tap the chart, or use Tab to move between chart areas and Enter to choose one.
          </p>
          <QuizPanel
            questions={QUESTIONS}
            check={(q) => ({
              correct: !!selected && q.targets.includes(selected),
              answer: selected ? (hotspotById(selected)?.name ?? selected) : 'Nothing selected',
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

function HotspotCard({ hotspot }: { hotspot: Hotspot | null }) {
  if (!hotspot) {
    return (
      <div className="rounded-control bg-surface-2 p-4 text-sm text-muted">
        Hover over or tap a symbol on the chart, or choose one from the list.
      </div>
    );
  }
  return (
    <div className="rounded-control bg-surface-2 p-4">
      <p className="font-semibold">{hotspot.name}</p>
      <dl className="mt-2 space-y-2 text-sm">
        <div>
          <dt className="text-xs font-semibold tracking-wide text-muted uppercase">On the chart</dt>
          <dd>{hotspot.legend}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
            What it means
          </dt>
          <dd>{hotspot.explanation}</dd>
        </div>
      </dl>
    </div>
  );
}
