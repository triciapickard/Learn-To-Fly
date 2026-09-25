import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
} from 'react';
import { useReducedMotion } from '@/hooks/useMediaQuery';

/** Width/height of an element, updated on resize (responsive SVG, step 6.15). */
export function useElementSize<T extends HTMLElement>(): [
  RefObject<T | null>,
  { width: number; height: number },
] {
  const ref = useRef<T>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, size];
}

/** Converts a pointer event to coordinates in an SVG's viewBox. */
export function svgPoint(
  svg: SVGSVGElement,
  clientX: number,
  clientY: number,
): { x: number; y: number } {
  const rect = svg.getBoundingClientRect();
  const viewBox = svg.viewBox.baseVal;
  const scaleX = viewBox && viewBox.width ? viewBox.width / rect.width : 1;
  const scaleY = viewBox && viewBox.height ? viewBox.height / rect.height : 1;
  return {
    x: (clientX - rect.left) * scaleX + (viewBox?.x ?? 0),
    y: (clientY - rect.top) * scaleY + (viewBox?.y ?? 0),
  };
}

/**
 * Pointer dragging inside an SVG (mouse, pen and touch). Keyboard users get an equivalent
 * slider or buttons in every widget (Section 16.1 rule 2).
 */
export function useDrag(onDrag: (point: { x: number; y: number }) => void) {
  const dragging = useRef(false);
  const onPointerDown = useCallback(
    (event: ReactPointerEvent<SVGElement>) => {
      const svg =
        (event.currentTarget as SVGElement).ownerSVGElement ??
        (event.currentTarget as SVGSVGElement);
      dragging.current = true;
      event.currentTarget.setPointerCapture?.(event.pointerId);
      onDrag(svgPoint(svg, event.clientX, event.clientY));
    },
    [onDrag],
  );
  const onPointerMove = useCallback(
    (event: ReactPointerEvent<SVGElement>) => {
      if (!dragging.current) return;
      const svg =
        (event.currentTarget as SVGElement).ownerSVGElement ??
        (event.currentTarget as SVGSVGElement);
      onDrag(svgPoint(svg, event.clientX, event.clientY));
    },
    [onDrag],
  );
  const stop = useCallback((event: ReactPointerEvent<SVGElement>) => {
    dragging.current = false;
    event.currentTarget.releasePointerCapture?.(event.pointerId);
  }, []);
  return {
    onPointerDown,
    onPointerMove,
    onPointerUp: stop,
    onPointerCancel: stop,
    style: { touchAction: 'none' },
  };
}

/**
 * Polite live-region announcements, debounced so dragging doesn't flood screen readers
 * (Section 16.1 rule 3). Render `message` inside an element with aria-live="polite".
 */
export function useAnnouncer(delayMs = 500): [string, (text: string) => void] {
  const [message, setMessage] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const announce = useCallback(
    (text: string) => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setMessage(text), delayMs);
    },
    [delayMs],
  );
  useEffect(() => () => clearTimeout(timer.current), []);
  return [message, announce];
}

/**
 * Eases a set of numbers towards their targets (about 350 ms), or jumps straight there when
 * the user prefers reduced motion (Section 16.1 rule 5).
 */
export function useTween(target: number[], durationMs = 350): number[] {
  const reduced = useReducedMotion();
  const key = target.join(',');
  const [value, setValue] = useState(target);
  const current = useRef(target);
  useEffect(() => {
    const goal = key.split(',').map(Number);
    const origin = current.current;
    if (reduced || typeof requestAnimationFrame === 'undefined') {
      current.current = goal;
      const frame = setTimeout(() => setValue(goal));
      return () => clearTimeout(frame);
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - (1 - t) ** 3;
      const next = goal.map((g, i) => (origin[i] ?? g) + (g - (origin[i] ?? g)) * eased);
      current.current = next;
      setValue(next);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [key, reduced, durationMs]);
  return value;
}
