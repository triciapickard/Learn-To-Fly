import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
} from 'react';

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
