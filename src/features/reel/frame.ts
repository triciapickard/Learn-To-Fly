/**
 * `window.name` of the browser window the launch video reel (`/dev/reel`) frames the site in.
 */
export const REEL_FRAME_NAME = 'ltf-reel';

/**
 * Whether this page is the reel or the site framed inside it, so development-only overlays
 * that would show on camera can be left out.
 */
export function isReel(): boolean {
  if (typeof window === 'undefined') return false;
  return window.name === REEL_FRAME_NAME || window.location.pathname.startsWith('/dev/reel');
}
