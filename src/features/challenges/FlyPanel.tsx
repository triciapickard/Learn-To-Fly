import { BellRing, ExternalLink, Flag } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Link } from '@/components/Link';
import { Stopwatch } from '@/components/Stopwatch';
import { AircraftKeyNumbers } from '@/features/content/AircraftKeyNumbers';
import { cn } from '@/lib/cn';
import type { ChallengeDetail } from '@shared/schemas/api';
import { loadFlight, saveFlight, type FlightState } from './storage';

type RandomEvent = ChallengeDetail['randomEvents'][number];

/** Two short beeps with Web Audio. Silently does nothing where audio is unavailable. */
function beep() {
  try {
    const Ctx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    [0, 0.5].forEach((offset) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 880;
      gain.gain.value = 0.15;
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + offset);
      osc.stop(ctx.currentTime + offset + 0.3);
    });
    setTimeout(() => void ctx.close(), 1500);
  } catch {
    // No audio: the visual alert is enough.
  }
}

/** When each random event fires (ms after the timer starts), or null if it won't this time. */
function schedule(events: RandomEvent[]): Record<string, number | null> {
  return Object.fromEntries(
    events.map((e) => {
      const fires = e.chance === undefined || Math.random() < e.chance;
      const seconds = e.minSeconds + Math.random() * (e.maxSeconds - e.minSeconds);
      return [e.id, fires ? seconds * 1000 : null];
    }),
  );
}

/** Screen Wake Lock (P1): keeps a tablet or phone awake while flying, where supported. */
function useWakeLock() {
  const supported = typeof navigator !== 'undefined' && 'wakeLock' in navigator;
  const [on, setOn] = useState(false);
  const lock = useRef<{ release: () => Promise<void> } | null>(null);
  const toggle = async (next: boolean) => {
    try {
      if (next) {
        lock.current = await (
          navigator as unknown as {
            wakeLock: { request: (t: 'screen') => Promise<{ release: () => Promise<void> }> };
          }
        ).wakeLock.request('screen');
      } else {
        await lock.current?.release();
        lock.current = null;
      }
      setOn(next);
    } catch {
      setOn(false);
    }
  };
  useEffect(() => () => void lock.current?.release().catch(() => undefined), []);
  return { supported, on, toggle };
}

/**
 * The Fly tab and fly mode (Sections 20.6–20.7): big-type steps with checkboxes, key
 * numbers, an optional stopwatch and the challenge's random events.
 */
export function FlyPanel({
  challenge,
  large,
  onFinish,
}: {
  challenge: ChallengeDetail;
  large?: boolean;
  onFinish?: () => void;
}) {
  const [flight, setFlight] = useState<FlightState>(() => loadFlight(challenge.slug));
  const [alert, setAlert] = useState<RandomEvent | null>(null);
  const plan = useRef<Record<string, number | null>>({});
  const wake = useWakeLock();

  const update = useCallback(
    (next: (f: FlightState) => FlightState) =>
      setFlight((f) => {
        const value = next(f);
        saveFlight(challenge.slug, value);
        return value;
      }),
    [challenge.slug],
  );

  const onTick = (elapsed: number) => {
    for (const event of challenge.randomEvents) {
      const at = plan.current[event.id];
      if (at === null || at === undefined || elapsed < at) continue;
      plan.current[event.id] = null;
      update((f) => ({
        ...f,
        randomEventsFired: [...f.randomEventsFired, { id: event.id, at: new Date().toISOString() }],
      }));
      setAlert(event);
      beep();
    }
  };

  const text = large ? 'text-xl' : 'text-lg';

  return (
    <div className="flex flex-col gap-8">
      {alert && (
        <div
          role="alert"
          className="rounded-card border-4 border-danger bg-danger-soft p-4 motion-safe:animate-pulse"
        >
          <p className={cn('flex items-center gap-2 font-bold', large ? 'text-3xl' : 'text-2xl')}>
            <BellRing aria-hidden className="size-7 shrink-0 text-danger" /> {alert.label}
          </p>
          <p className={cn('mt-2', text)}>{alert.message}</p>
          <Button variant="secondary" className="mt-3" onClick={() => setAlert(null)}>
            Got it
          </Button>
        </div>
      )}

      <section aria-labelledby="fly-steps-heading">
        <h2 id="fly-steps-heading" className={cn('font-bold', large ? 'text-3xl' : 'text-2xl')}>
          Steps
        </h2>
        <ol className="mt-3 flex flex-col gap-3">
          {challenge.procedure.map((step, i) => {
            const id = `step-${i + 1}`;
            return (
              <li
                key={id}
                className={cn(
                  'rounded-card border border-border bg-surface p-3',
                  flight.ticks[id] && 'border-success bg-success-soft',
                )}
              >
                <Checkbox
                  label={<span className={text}>{`${i + 1}. ${step}`}</span>}
                  checked={!!flight.ticks[id]}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    update((f) => {
                      const ticks = { ...f.ticks };
                      if (checked) ticks[id] = new Date().toISOString();
                      else delete ticks[id];
                      return { ...f, ticks };
                    });
                  }}
                />
              </li>
            );
          })}
        </ol>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <section aria-labelledby="timer-heading" className="flex flex-col gap-3">
          <h2 id="timer-heading" className={cn('font-bold', large ? 'text-2xl' : 'text-xl')}>
            Timer (optional)
          </h2>
          <Stopwatch
            large={large}
            onStart={(at) => {
              plan.current = schedule(challenge.randomEvents);
              update((f) => ({ ...f, startedAt: f.startedAt ?? at.toISOString() }));
            }}
            onTick={challenge.randomEvents.length ? onTick : undefined}
          />
          {challenge.randomEvents.length > 0 && (
            <p className="text-muted">
              Start the timer when you unpause: something may happen during the flight. You will
              hear a beep and see an alert.
            </p>
          )}
          {wake.supported && (
            <Checkbox
              label="Keep the screen on while flying"
              checked={wake.on}
              onChange={(e) => void wake.toggle(e.target.checked)}
            />
          )}
        </section>
        <AircraftKeyNumbers large={large} columns={large ? 1 : 2} />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {onFinish && (
          <Button size="lg" onClick={onFinish}>
            <Flag aria-hidden className="size-5" /> Finished — debrief
          </Button>
        )}
        {!large && (
          <Link to={`/challenges/${challenge.slug}/fly`} target="_blank" rel="noopener">
            <span className="inline-flex items-center gap-1">
              Open fly mode on another screen <ExternalLink aria-hidden className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
