/**
 * Only same-site relative paths are allowed as redirect targets (prevents open redirects,
 * step 4.13). Anything else falls back to `fallback`.
 */
export function safeReturnTo(value: string | null | undefined, fallback = '/dashboard'): string {
  if (!value) return fallback;
  let decoded: string;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    return fallback;
  }
  const trimmed = decoded.trim();
  if (!trimmed.startsWith('/')) return fallback;
  if (trimmed.startsWith('//') || trimmed.startsWith('/\\')) return fallback;
  if ([...trimmed].some((char) => char.charCodeAt(0) < 0x20)) return fallback;
  // Parse against a dummy origin: must stay on it.
  const url = new URL(trimmed, 'https://ltf.invalid');
  if (url.origin !== 'https://ltf.invalid') return fallback;
  if (['/login', '/signup'].includes(url.pathname)) return fallback;
  return `${url.pathname}${url.search}${url.hash}`;
}

export function loginPathFor(returnTo: string): string {
  return `/login?returnTo=${encodeURIComponent(returnTo)}`;
}
