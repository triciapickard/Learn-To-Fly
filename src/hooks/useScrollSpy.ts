import { useEffect, useState } from 'react';

/**
 * Returns the id of the section heading currently at the top of the viewport (scroll-spy,
 * step 6.8). Uses IntersectionObserver; falls back to the first id.
 */
export function useScrollSpy(ids: string[], offsetPx = 96): string | undefined {
  const [active, setActive] = useState<string | undefined>(ids[0]);
  const key = ids.join('|');
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || ids.length === 0) return;
    const visible = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible.set(entry.target.id, entry.isIntersecting);
        // The active section is the last heading above the offset line.
        const current = ids.filter((id) => {
          const el = document.getElementById(id);
          return el && el.getBoundingClientRect().top <= offsetPx + 1;
        });
        setActive(current[current.length - 1] ?? ids[0]);
      },
      { rootMargin: `-${offsetPx}px 0px -40% 0px`, threshold: [0, 1] },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, offsetPx]);
  return active;
}
