import {
  minimumJerk,
  moveDuration,
  planMove,
  planStroke,
  restingDrift,
  type Move,
  type Point,
} from './motion';
import type { Shot, Target } from './shots';

/**
 * Plays one shot of the launch video reel: drives the framed site with synthetic pointer
 * events while drawing a cursor over it. All positions here are in stage pixels (the 1920 ×
 * 1080 frame); the framed page's own coordinates are offset by `VIEW` and scaled by the
 * shot's zoom.
 */

export const STAGE = { width: 1920, height: 1080 } as const;
/** The browser window on the stage, and its title bar. */
export const WINDOW = { left: 160, top: 84, width: 1600, height: 912, bar: 44 } as const;
/** The page area inside the window. */
export const VIEW = {
  left: WINDOW.left,
  top: WINDOW.top + WINDOW.bar,
  width: WINDOW.width,
  height: WINDOW.height - WINDOW.bar,
} as const;

/** Seconds recorded before and after the shot's cut points, for the editor's handles. */
export const HANDLE = 1;
/** A hand settles on a target for a moment before it presses. */
const SETTLE = 0.14;

type FrameWindow = Window & typeof globalThis;

export function findTarget(doc: Document, target: Target): Element | null {
  const matches = Array.from(doc.querySelectorAll(target.selector)).filter(
    (el) => target.text === undefined || el.textContent?.trim() === target.text,
  );
  return matches[target.nth ?? 0] ?? null;
}

/** From the framed page's coordinates to the stage's. */
function toStage(p: Point, zoom: number): Point {
  return { x: VIEW.left + p.x * zoom, y: VIEW.top + p.y * zoom };
}

function pointOn(el: Element, target: Target, zoom: number): Point {
  const r = el.getBoundingClientRect();
  return toStage(
    { x: r.left + r.width * (target.fx ?? 0.5), y: r.top + r.height * (target.fy ?? 0.5) },
    zoom,
  );
}

export function viewPoint(fraction: Point): Point {
  return { x: VIEW.left + VIEW.width * fraction.x, y: VIEW.top + VIEW.height * fraction.y };
}

function seedOf(text: string): number {
  let h = 2166136261;
  for (const ch of text) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return h >>> 0;
}

/** Fire a mouse or pointer event in the framed page, at page coordinates. */
function fire(win: FrameWindow, el: Element, type: string, at: Point, pressed: boolean) {
  const init = {
    bubbles: true,
    cancelable: true,
    composed: true,
    view: win,
    clientX: at.x,
    clientY: at.y,
    button: 0,
    buttons: pressed ? 1 : 0,
  };
  const event = type.startsWith('pointer')
    ? new win.PointerEvent(type, { ...init, pointerId: 1, pointerType: 'mouse', isPrimary: true })
    : new win.MouseEvent(type, init);
  el.dispatchEvent(event);
}

/** Styles added to the framed page: no scrollbars or caret on camera, no real cursor. */
const FRAME_CSS = `
  html { scrollbar-width: none; }
  html::-webkit-scrollbar { display: none; }
  * { caret-color: transparent !important; cursor: none !important; }
`;

/** Get a freshly loaded framed page ready to be driven. */
export function prepareFrame(win: Window, doc: Document) {
  const style = doc.createElement('style');
  style.textContent = FRAME_CSS;
  doc.head.append(style);
  // Drags call setPointerCapture, which throws for a pointer the browser never saw.
  const proto = (win as FrameWindow).Element.prototype;
  proto.setPointerCapture = () => {};
  proto.releasePointerCapture = () => {};
}

export interface TakeOptions {
  frame: HTMLIFrameElement;
  cursor: HTMLElement;
  /** Layer for the click rings. */
  rings: HTMLElement;
  shot: Shot;
  onTick?: (filmSeconds: number) => void;
  onDone: () => void;
}

/** Put the cursor where the shot opens. */
export function placeCursor(cursor: HTMLElement, shot: Shot) {
  const p = viewPoint(shot.cursor);
  cursor.style.transform = `translate(${p.x}px, ${p.y}px)`;
}

/** Scroll the framed page so the target sits `offset` px below the top of the view. */
export function scrollTarget(win: Window, el: Element, offset: number): number {
  const doc = win.document.documentElement;
  const max = Math.max(0, doc.scrollHeight - win.innerHeight);
  return Math.min(max, Math.max(0, el.getBoundingClientRect().top + win.scrollY - offset));
}

function ring(layer: HTMLElement, at: Point) {
  const el = document.createElement('div');
  el.className = 'pointer-events-none absolute size-12 rounded-full border-[3px] border-accent';
  el.style.left = `${at.x - 24}px`;
  el.style.top = `${at.y - 24}px`;
  layer.append(el);
  const animation = el.animate(
    [
      { transform: 'scale(0.35)', opacity: 0.9 },
      { transform: 'scale(1.25)', opacity: 0 },
    ],
    { duration: 480, easing: 'cubic-bezier(0.2, 0.7, 0.3, 1)' },
  );
  animation.onfinish = () => el.remove();
}

function press(cursor: HTMLElement) {
  cursor.firstElementChild?.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(0.86)' }, { transform: 'scale(1)' }],
    { duration: 180, easing: 'ease-out' },
  );
}

/** Start a take; returns a function that stops it. */
export function playTake({ frame, cursor, rings, shot, onTick, onDone }: TakeOptions): () => void {
  const win = frame.contentWindow as FrameWindow | null;
  const doc = frame.contentDocument;
  if (!win || !doc) {
    onDone();
    return () => {};
  }

  const seed = seedOf(shot.id);
  const zoom = shot.zoom ?? 1;
  const filmStart = shot.start - HANDLE;
  const filmEnd = shot.end + HANDLE;
  const startedAt = performance.now();

  let pos = viewPoint(shot.cursor);
  let restSince = filmStart - 1;
  let drawn = pos;
  let index = 0;
  let busyUntil = filmStart;
  /** The next move, planned once its target is known and started when it is due. */
  let pending: { dest: Point; start: number; duration: number } | null = null;
  let move: { path: Move; start: number } | null = null;
  let stroke: { path: Move; start: number; el: Element } | null = null;
  let strokePoints: Point[] = [];
  let scroll: { from: number; to: number; start: number; duration: number } | null = null;
  let hovered: Element | null = null;
  let prepared = false;
  let raf = 0;

  const local = (p: Point): Point => ({ x: (p.x - VIEW.left) / zoom, y: (p.y - VIEW.top) / zoom });
  const inView = (p: Point) =>
    p.x >= VIEW.left &&
    p.x < VIEW.left + VIEW.width &&
    p.y >= VIEW.top &&
    p.y < VIEW.top + VIEW.height;

  const prepare = (now: number) => {
    prepared = true;
    const action = shot.actions[index]!;
    if (action.kind === 'scroll') return;
    const el = findTarget(doc, action.target);
    if (!el) {
      console.warn(`[reel] ${shot.code}: nothing matches`, action.target);
      return;
    }
    let dest: Point;
    if (action.kind === 'drag') {
      strokePoints = action.points(el.getBoundingClientRect()).map((p) => toStage(p, zoom));
      dest = strokePoints[0]!;
    } else {
      dest = pointOn(el, action.target, zoom);
    }
    const arrive = action.kind === 'hover' ? action.at : action.at - SETTLE;
    const duration = moveDuration(Math.hypot(dest.x - pos.x, dest.y - pos.y));
    const start = Math.max(now, arrive - duration);
    pending = { dest, start, duration: Math.max(0.18, arrive - start) };
  };

  const click = (at: Point) => {
    const p = local(at);
    const el = doc.elementFromPoint(p.x, p.y);
    ring(rings, at);
    press(cursor);
    if (!el) return;
    fire(win, el, 'pointerdown', p, true);
    fire(win, el, 'mousedown', p, true);
    fire(win, el, 'pointerup', p, false);
    fire(win, el, 'mouseup', p, false);
    if (el instanceof win.HTMLElement) el.click();
    else fire(win, el, 'click', p, false);
  };

  const hover = (at: Point, pressed: boolean) => {
    if (!inView(at)) return;
    const p = local(at);
    const el = doc.elementFromPoint(p.x, p.y);
    if (el !== hovered) {
      if (hovered) {
        fire(win, hovered, 'pointerout', p, pressed);
        fire(win, hovered, 'mouseout', p, pressed);
      }
      if (el) {
        fire(win, el, 'pointerover', p, pressed);
        fire(win, el, 'mouseover', p, pressed);
      }
      hovered = el;
    }
    if (el && !stroke) {
      fire(win, el, 'pointermove', p, pressed);
      fire(win, el, 'mousemove', p, pressed);
    }
  };

  const tick = (ms: number) => {
    const now = filmStart + (ms - startedAt) / 1000;

    while (index < shot.actions.length) {
      const action = shot.actions[index]!;
      if (!prepared) {
        if (now < busyUntil) break;
        prepare(now);
      }
      if (now < action.at || pending || move) break;
      if (action.kind === 'click') {
        click(pos);
        busyUntil = action.at + 0.05;
      } else if (action.kind === 'hover') {
        busyUntil = action.at;
      } else if (action.kind === 'scroll') {
        const el = findTarget(doc, action.target);
        if (el) {
          scroll = {
            from: win.scrollY,
            to: scrollTarget(win, el, action.offset),
            start: action.at,
            duration: action.duration,
          };
        }
        busyUntil = action.at + action.duration;
      } else if (strokePoints.length > 1) {
        const p = local(pos);
        const el = doc.elementFromPoint(p.x, p.y);
        if (el) {
          fire(win, el, 'pointerdown', p, true);
          stroke = { path: planStroke(strokePoints, seed + index * 13, 0.3), start: now, el };
          busyUntil = now + stroke.path.duration + 0.05;
        }
      }
      index += 1;
      prepared = false;
    }

    if (pending && now >= pending.start) {
      move = {
        path: planMove(drawn, pending.dest, seed + index * 7, pending.duration),
        start: pending.start,
      };
      pending = null;
    }

    if (stroke) {
      const t = now - stroke.start;
      pos = stroke.path.at(t);
      const p = local(pos);
      fire(win, stroke.el, 'pointermove', p, t < stroke.path.duration);
      if (t >= stroke.path.duration) {
        fire(win, stroke.el, 'pointerup', p, false);
        stroke = null;
        restSince = now;
      }
      drawn = pos;
    } else if (move) {
      const t = now - move.start;
      pos = move.path.at(t);
      drawn = pos;
      if (t >= move.path.duration) {
        pos = move.path.to;
        move = null;
        restSince = now;
      }
    } else {
      // A resting hand drifts a pixel or two, eased in so a stop never jumps.
      const weight = Math.min(1, Math.max(0, (now - restSince) / 0.8));
      const d = restingDrift(now, seed);
      drawn = { x: pos.x + d.x * weight, y: pos.y + d.y * weight };
    }

    if (scroll) {
      const k = minimumJerk((now - scroll.start) / scroll.duration);
      win.scrollTo({ top: scroll.from + (scroll.to - scroll.from) * k, behavior: 'instant' });
      if (k >= 1) scroll = null;
    }

    cursor.style.transform = `translate(${drawn.x}px, ${drawn.y}px)`;
    hover(drawn, Boolean(stroke));
    onTick?.(now);

    if (now >= filmEnd && index >= shot.actions.length && !stroke && !move) {
      onDone();
      return;
    }
    raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}
