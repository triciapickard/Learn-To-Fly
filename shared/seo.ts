import { APP_NAME } from './constants.js';

/** "Page · Learn-To-Fly", or the site tagline for the landing page (Section 22.1). */
export function formatPageTitle(title?: string): string {
  return title
    ? `${title} · ${APP_NAME}`
    : `${APP_NAME} — Learn to fly the Cessna 172 in MSFS 2024`;
}

export const DEFAULT_DESCRIPTION =
  'Learn to fly the Cessna 172 in Microsoft Flight Simulator 2024 the way real pilots do, with short interactive lessons and in-sim challenges.';

/**
 * Titles and descriptions for the static public pages (step 11.18). The server writes them
 * into index.html so link previews and crawlers see them without running JavaScript; the
 * client uses the same text when navigating.
 */
export const PAGE_META: Record<string, { title?: string; description: string }> = {
  '/': { description: DEFAULT_DESCRIPTION },
  '/learn': {
    title: 'Learn',
    description:
      'The full Learn-To-Fly curriculum: nine modules from your first flight to a cross-country capstone in the Cessna 172.',
  },
  '/challenges': {
    title: 'Challenges',
    description:
      'In-sim challenges for MSFS 2024 with exact setups, procedures and honest Gold, Silver and Bronze scoring.',
  },
  '/reference': {
    title: 'Reference',
    description:
      'Quick lookups for mid-flight: Cessna 172 V-speeds, checklists, Bay Area airports, a glossary and resources.',
  },
  '/reference/speeds': {
    title: 'V-speeds and limits',
    description:
      'Cessna 172S V-speeds, airspeed arcs, limits and typical training power settings in large type.',
  },
  '/reference/checklists': {
    title: 'Checklists',
    description:
      'Cessna 172 normal and emergency checklists, from preflight to securing the airplane.',
  },
  '/reference/airports': {
    title: 'Airports',
    description:
      'The San Francisco Bay Area airports used in Learn-To-Fly, with runways, airspace and challenges.',
  },
  '/reference/glossary': {
    title: 'Glossary',
    description: 'Plain-English definitions of the aviation terms used in Learn-To-Fly lessons.',
  },
  '/reference/resources': {
    title: 'Resources',
    description: 'Free FAA handbooks, charts, tools and communities for learning to fly.',
  },
  '/about': {
    title: 'About',
    description:
      'Why Learn-To-Fly exists and how it teaches flying in Microsoft Flight Simulator 2024.',
  },
  '/disclaimer': {
    title: 'Disclaimer',
    description: 'Learn-To-Fly is for simulation use only and is not flight instruction.',
  },
  '/privacy': { title: 'Privacy policy', description: 'What Learn-To-Fly stores and why.' },
  '/terms': { title: 'Terms of use', description: 'The terms for using Learn-To-Fly.' },
  '/roadmap': {
    title: 'Roadmap',
    description: 'Where Learn-To-Fly goes after the Cessna 172, all the way to the Airbus A380.',
  },
  '/login': { title: 'Log in', description: 'Log in to Learn-To-Fly to save your progress.' },
  '/signup': {
    title: 'Sign up',
    description: 'Create a free Learn-To-Fly account to save your lessons and challenge results.',
  },
};

/** Private or utility pages that search engines should not index. */
const NOINDEX = ['/dashboard', '/account', '/account-deleted', '/login', '/signup', '/dev'];

export function isNoindex(pathname: string): boolean {
  return NOINDEX.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

const escapeAttr = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Writes the page's title, description, canonical URL and Open Graph / Twitter tags into
 * index.html's <head>. Only <title>, <meta> and <link> change, so the CSP hash of the inline
 * theme script stays valid.
 */
export function renderHead(
  html: string,
  { siteUrl, pathname }: { siteUrl: string; pathname: string },
) {
  const base = siteUrl.replace(/\/+$/, '');
  const meta = PAGE_META[pathname];
  const title = formatPageTitle(meta?.title);
  const description = meta?.description ?? DEFAULT_DESCRIPTION;
  const url = `${base}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`;
  const tags = [
    `<link rel="canonical" href="${escapeAttr(url)}" />`,
    `<meta property="og:site_name" content="${APP_NAME}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:url" content="${escapeAttr(url)}" />`,
    `<meta property="og:image" content="${escapeAttr(`${base}/og-image.png`)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    ...(isNoindex(pathname) ? ['<meta name="robots" content="noindex" />'] : []),
  ];
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(title)}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${escapeAttr(description)}" />`,
    )
    .replace(/\s*<meta property="og:image"[^>]*\/>/, '')
    .replace('</head>', `    ${tags.join('\n    ')}\n  </head>`);
}
