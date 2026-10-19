import { useCallback, useEffect, useRef, useState } from 'react';
import { BETA_BANNER_STORAGE_KEY } from '@/features/layout/BetaBanner';
import { SIGNUP_BANNER_STORAGE_KEY } from '@/features/lessons/LessonParts';
import { THEME_STORAGE_KEY } from '@/features/theme/theme';
import { REEL_FRAME_NAME } from './frame';
import type { Shot } from './shots';
import {
  findTarget,
  HANDLE,
  placeCursor,
  playTake,
  prepareFrame,
  scrollTarget,
  STAGE,
  VIEW,
  WINDOW,
} from './take';

type Status = 'loading' | 'ready' | 'playing' | 'done' | 'failed';

/** Keys a take sets so the framed site looks the same every time; put back afterwards. */
const STAGED_KEYS = [THEME_STORAGE_KEY, BETA_BANNER_STORAGE_KEY, SIGNUP_BANNER_STORAGE_KEY];

function stageStorage(shot: Shot) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, shot.theme);
    localStorage.removeItem(BETA_BANNER_STORAGE_KEY);
    localStorage.setItem(SIGNUP_BANNER_STORAGE_KEY, '1');
    // Challenge step ticks and quiz answers live in session storage; start each take fresh.
    sessionStorage.clear();
  } catch {
    // Storage blocked: the take still plays, with whatever the site shows by default.
  }
}

function useStorageSnapshot() {
  useEffect(() => {
    const saved = new Map<string, string | null>();
    try {
      for (const key of STAGED_KEYS) saved.set(key, localStorage.getItem(key));
    } catch {
      return;
    }
    const restore = () => {
      try {
        for (const [key, value] of saved) {
          if (value === null) localStorage.removeItem(key);
          else localStorage.setItem(key, value);
        }
      } catch {
        // ignore
      }
    };
    window.addEventListener('pagehide', restore);
    return () => {
      window.removeEventListener('pagehide', restore);
      restore();
    };
  }, []);
}

function useStageScale() {
  const fit = () => Math.min(window.innerWidth / STAGE.width, window.innerHeight / STAGE.height);
  const [scale, setScale] = useState(fit);
  useEffect(() => {
    const onResize = () => setScale(fit());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return scale;
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function timecode(seconds: number) {
  const s = Math.max(0, seconds);
  const m = Math.floor(s / 60);
  return `${m}:${(s - m * 60).toFixed(2).padStart(5, '0')}`;
}

/**
 * Plays one shot of the launch video: the real site in a plain browser window on a 1920 × 1080
 * stage, driven by a scripted cursor. Record the screen while it plays.
 */
export function ReelPlayer({ shot, host }: { shot: Shot; host?: string }) {
  useStorageSnapshot();
  const scale = useStageScale();
  const zoom = shot.zoom ?? 1;
  const frameRef = useRef<HTMLIFrameElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLSpanElement>(null);
  const clockRef = useRef<HTMLSpanElement>(null);
  const stopRef = useRef<() => void>(() => {});
  const autoplayRef = useRef(false);
  const [take, setTake] = useState(0);
  const [status, setStatus] = useState<Status>('loading');
  const [hud, setHud] = useState(true);
  const [clock, setClock] = useState(false);

  // Each take loads the page afresh in a new frame, with storage staged before it loads.
  useEffect(() => {
    stageStorage(shot);
    if (frameRef.current) frameRef.current.src = shot.path;
  }, [shot, take]);

  const showAddress = useCallback(() => {
    const path = frameRef.current?.contentWindow?.location.pathname ?? shot.path;
    if (addressRef.current) addressRef.current.textContent = `${host ?? ''}${path}`;
  }, [host, shot.path]);

  const reload = useCallback((autoplay: boolean) => {
    stopRef.current();
    autoplayRef.current = autoplay;
    setStatus('loading');
    setTake((n) => n + 1);
  }, []);

  const play = useCallback(() => {
    const frame = frameRef.current;
    const cursor = cursorRef.current;
    const rings = ringsRef.current;
    if (!frame || !cursor || !rings) return;
    setStatus('playing');
    stopRef.current = playTake({
      frame,
      cursor,
      rings,
      shot,
      onTick: (seconds) => {
        if (clockRef.current) clockRef.current.textContent = timecode(seconds);
        showAddress();
      },
      onDone: () => setStatus('done'),
    });
  }, [shot, showAddress]);

  // Set the framed page up once it has loaded: wait for the shot's target, then frame it.
  const onLoad = useCallback(async () => {
    const frame = frameRef.current;
    const win = frame?.contentWindow;
    const doc = frame?.contentDocument;
    if (!frame || !win || !doc || win.location.href === 'about:blank') return;
    const current = () => frameRef.current === frame && frame.contentDocument === doc;
    prepareFrame(win, doc);

    for (let tries = 0; !findTarget(doc, shot.ready); tries++) {
      if (!current()) return;
      if (tries > 200) {
        setStatus('failed');
        return;
      }
      await wait(100);
    }
    await doc.fonts.ready;
    await wait(400);
    if (!current()) return;
    if (shot.openAt) {
      const el = findTarget(doc, shot.openAt.target);
      if (el) win.scrollTo({ top: scrollTarget(win, el, shot.openAt.offset), behavior: 'instant' });
    }
    if (cursorRef.current) placeCursor(cursorRef.current, shot);
    if (clockRef.current) clockRef.current.textContent = timecode(shot.start - HANDLE);
    showAddress();
    if (autoplayRef.current) {
      autoplayRef.current = false;
      play();
    } else {
      setStatus('ready');
    }
  }, [play, shot, showAddress]);

  useEffect(() => () => stopRef.current(), []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.code === 'Space') {
        event.preventDefault();
        if (status === 'ready') play();
        else if (status === 'done') reload(true);
      } else if (event.key === 'r') {
        reload(false);
      } else if (event.key === 'h') {
        setHud((v) => !v);
      } else if (event.key === 't') {
        setClock((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [play, reload, status]);

  const showHud = hud && status !== 'playing';

  return (
    <div
      data-theme={shot.theme}
      className="fixed inset-0 cursor-none overflow-hidden bg-surface-sunken"
    >
      <div
        className="absolute top-1/2 left-1/2 overflow-hidden bg-surface-sunken"
        style={{
          width: STAGE.width,
          height: STAGE.height,
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        <div
          className="absolute overflow-hidden rounded-xl border border-line bg-canvas shadow-[0_24px_64px_-24px_rgb(0_0_0/0.35)]"
          style={{
            left: WINDOW.left,
            top: WINDOW.top,
            width: WINDOW.width,
            height: WINDOW.height,
          }}
        >
          <div
            className="flex items-center gap-4 border-b border-line bg-surface px-5"
            style={{ height: WINDOW.bar }}
          >
            <div aria-hidden className="flex gap-2">
              {[0, 1, 2].map((dot) => (
                <span key={dot} className="size-3 rounded-full bg-line" />
              ))}
            </div>
            <div className="mx-auto flex h-7 w-[560px] items-center justify-center rounded-md bg-surface-sunken px-4 text-sm text-ink-3">
              <span ref={addressRef} className="truncate">
                {`${host ?? ''}${shot.path.split('?')[0]}`}
              </span>
            </div>
            <div aria-hidden className="w-[52px]" />
          </div>
          <iframe
            key={take}
            ref={frameRef}
            name={REEL_FRAME_NAME}
            title={`${shot.code}: ${shot.title}`}
            onLoad={() => void onLoad()}
            className="pointer-events-none block origin-top-left border-0"
            style={{
              width: VIEW.width / zoom,
              height: VIEW.height / zoom,
              transform: zoom === 1 ? undefined : `scale(${zoom})`,
            }}
          />
        </div>
        <div ref={ringsRef} className="pointer-events-none absolute inset-0" />
        <div
          ref={cursorRef}
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 will-change-transform"
          style={{ opacity: status === 'loading' || status === 'failed' ? 0 : 1 }}
        >
          {/* The arrow's tip is the hotspot, at the element's origin. */}
          <svg width="28" height="34" viewBox="0 0 28 34" className="origin-top-left">
            <path
              d="M2 2 L2 26 L8.2 20.4 L12.4 30.6 L16.8 28.8 L12.6 18.8 L21 18.4 Z"
              fill="#171614"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {clock && (
          <span
            ref={clockRef}
            className="absolute top-6 right-8 rounded-md bg-ink px-3 py-1 font-mono text-lg text-on-ink tabular-nums"
          >
            {timecode(shot.start - HANDLE)}
          </span>
        )}
      </div>

      {showHud && (
        <div className="fixed bottom-4 left-4 max-w-md cursor-auto rounded-lg border border-line bg-surface p-4 text-sm text-ink shadow-lg">
          <p className="font-semibold">
            {shot.code} · {shot.title}
          </p>
          <p className="mt-1 text-ink-2">
            Scene {shot.scene}, {timecode(shot.start)} to {timecode(shot.end)}. The take runs{' '}
            {HANDLE} s either side.
          </p>
          <p className="mt-2" role="status">
            {status === 'loading' && 'Loading the page…'}
            {status === 'ready' && 'Ready. Press Space to play.'}
            {status === 'done' && 'Done. Space plays it again, R reloads.'}
            {status === 'failed' &&
              'The page never showed what this shot needs. Check the server is running and the content is seeded, then press R.'}
          </p>
          <p className="mt-2 text-ink-3">
            Space play · R reload · T timecode · H hide this. Record logged out (or in a private
            window) so the site shows what a new visitor sees.
          </p>
        </div>
      )}
    </div>
  );
}
