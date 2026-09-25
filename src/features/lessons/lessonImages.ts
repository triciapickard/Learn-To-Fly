/**
 * Lesson images live in src/assets/lessons/<module>/ (Section 18.6). Vite fingerprints
 * them; this map turns the `<module>/<file>` stored in image blocks into their URLs.
 */
const urls = import.meta.glob('/src/assets/lessons/**/*.{webp,avif,png,jpg,jpeg,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export function lessonImageUrl(src: string): string | undefined {
  return urls[`/src/assets/lessons/${src}`];
}
