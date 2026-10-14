import { useEffect, useState } from 'react';

/**
 * The last id whose element's top is at or above the offset line, or the first id (also
 * at the top of the page).
 * At the very bottom of the page the last section that has scrolled into view wins, since
 * a short final section can never reach the offset line.
 */
export function activeSectionId(ids: string[], offsetPx: number): string | undefined {
  // A few px of slack: an anchor jump lands the heading on its scroll-margin, give or take
  // sub-pixel rounding (and browser zoom).
  const line = offsetPx + 8;
  // Nothing has been scrolled past yet: the first section is the one being read.
  if (window.scrollY <= 0) return ids[0];
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  let active = ids[0];
  for (const id of ids) {
    const top = document.getElementById(id)?.getBoundingClientRect().top;
    if (top === undefined) continue;
    if (top <= line || (atBottom && top < window.innerHeight)) active = id;
  }
  return active;
}

/**
 * Returns the id of the section heading currently at the top of the viewport (scroll-spy,
 * step 6.8). Recomputed on every scroll and resize (once per frame), so it is right after
 * any scroll, including an anchor jump to a heading that was already on screen.
 */
export function useScrollSpy(ids: string[], offsetPx = 96): string | undefined {
  const [active, setActive] = useState<string | undefined>(ids[0]);
  const key = ids.join('|');
  useEffect(() => {
    if (ids.length === 0) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      setActive(activeSectionId(ids, offsetPx));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, offsetPx]);
  return active;
}
