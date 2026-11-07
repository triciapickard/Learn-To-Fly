# Client checklist (`src/**`)

Sources: v1.md Sections 21, 22, 23, 31, 33; v2.md Sections 22, 23, 31.

## Structure (Section 31.1)

- **C1 Pages are thin.** `src/pages/*` compose feature components. State, data fetching
  and logic live in `src/features/<feature>/`.
- **C2 Reuse before adding.** A new button, field, dialog, tabs, tooltip or callout uses
  the component in `src/components/` (Button, FormField, Dialog, Tabs, Tooltip, Callout,
  States, Skeleton…). Flag a near-copy of an existing component.
- **C3 Types come from shared Zod schemas** (`z.infer` from `@shared/schemas/`), not
  hand-written interfaces that duplicate them.

## Data (Section 31.3)

- **C4 Server state lives in TanStack Query.** Fetching goes through
  `src/features/<feature>/api.ts` hooks and `src/lib/apiClient.ts`, never a bare `fetch`
  in a component. Query keys follow the Section 31.3 list.
- **C5 Mutations invalidate what they change** (or update optimistically, as "mark
  complete" does). A mutation with no invalidation is a stale-UI bug.
- **C6 Loading, empty and error states exist** for every query, using `States`/`Skeleton`,
  and skeletons match the final layout (no layout shift).
- **C7 Nothing secret or sensitive is stored client-side.** Only the keys in Section 31.7
  go to `localStorage`/`sessionStorage`. Reads and writes are wrapped so a blocked storage
  doesn't crash the page.

## Look (Sections 21, 23; D-25)

- **C8 Colours and spacing come from tokens.** Use the variables in
  `src/styles/tokens.css` through Tailwind classes. No raw hex, rgb or hsl values in
  components (the homepage livery tokens of D-25 live in `tokens.css` too).
- **C9 Both themes work.** Anything with colour, borders, shadows or images is checked in
  light and dark. A new colour token gets both values.
- **C10 Mobile first.** Layout works at 375 px wide with no horizontal scroll, and at the
  Section 23.2 breakpoints (tables stack below `md`, the lesson sidebar collapses below
  `lg`).

## Accessibility (Section 22, WCAG 2.2 AA)

- **C11 Semantic HTML first.** Real `button`, `a`, `label` and landmark elements; one `h1`
  per page; no `div` with an `onClick`.
- **C12 Keyboard and focus.** Everything is operable by keyboard with a visible focus ring.
  Dialogs and drawers trap and return focus (Radix does this; custom overlays must too).
- **C13 Never colour alone.** States, tiers and arcs have text or an icon with a label.
- **C14 Motion respects `prefers-reduced-motion`.** New animations have a reduced-motion
  path.
- **C15 Images have meaningful alt text**, explicit `width`/`height`, and `loading="lazy"`
  below the fold.

## Performance (Section 33)

- **C16 Routes and widgets are lazy.** A new route uses `lazy` in the router; a new widget
  goes through `src/features/widgets/registry.ts`. A large new dependency in the initial
  chunk risks the 250 KB budget (`npm run size`).
- **C17 Effects are honest.** No `useEffect` that derives state you could compute during
  render, no missing cleanup for listeners, timers or subscriptions.

## Copy

- **C18 User-visible strings follow the content rules** in `content.md` (US English,
  second person, no em-dashes in site copy, units and number formats).
