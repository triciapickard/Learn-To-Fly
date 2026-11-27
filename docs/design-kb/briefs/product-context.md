# Learn to Fly: product design dossier

Purpose: a factual description of the Learn to Fly (LTF) client as the code stands, for design-book writers and the design auditor. Where code departs from `v1.md`, the code is stated as fact and the plan cited. Quoted strings are copied from source with file paths; aviation numbers inside quoted copy are copy only, not verified here. Counts are grep tallies over `src/**/*.tsx` excluding tests (approximate).


## 0. Method and limits

- Read: AGENTS.md, `v1.md` Sections 19 to 23 and decisions D-25 to D-33, `src/styles/`, `src/components/`, `src/layouts/`, `src/router.tsx`, `src/pages/`, the `src/features/` folders, `index.html` and `public/`.
- Rendering: dev server (`npx vite`) with no API, Chromium screenshots saved in the scratchpad as `product-*.png` (landing light, dark and mobile, login, 404, `/learn` API-error state, `/dev/components`). Only the landing page and the error state of `/learn` were inspected; lesson, challenge, dashboard and reference pages were read from source only. A small colorful round icon at the bottom-left of screenshots is a tooling overlay, not product.
- Files cited by CSS comments as the design source (`tokens.json`, a design-system README, `night-mode.md`) do not exist in the repo or machine, so contrast figures and the rules ("near-neutral greys", "one saturated non-status color, the horizon line") are known only from code comments. `CHANGELOG.md` and the `v1.md` decision log have no entry for this design system; D-25 describes a different direction.

## 1. What the product is

### 1.1 Product, audience, flows

Learn to Fly teaches a complete beginner to fly the Cessna 172 Skyhawk in Microsoft Flight Simulator 2024 through short lessons, interactive diagrams ("widgets") and scored in-sim challenges (AGENTS.md). It is free, runs in a browser beside the sim, and is in a public beta in which only fully verified modules show (`v1.md` D-32). Stack: React 19, Vite, Tailwind 4, Radix, lucide-react, TanStack Query, React Router. The audience is a beginner who has "never flown", typically at a desktop with a controller and a second screen (phone, tablet, laptop) open beside the sim; Fly mode, large-type checklists and print styles serve that case.


Main flows (v1.md Section 19.3, confirmed against the router):
1. Visitor to first lesson: `/` to `/learn/m0-getting-started/l0-1-welcome` (the landing CTA targets the first incomplete Module 0 lesson, see 2.1). No account needed.
2. Sign up and continue: `/signup`, `returnTo` redirect, progress saved.
3. Challenge: `/challenges/:slug` with tabs Brief, Fly, Debrief, History; the learner self-scores a rubric, the server recomputes the tier.
4. Mid-flight lookup: `/reference`, `/reference/speeds`, `/reference/checklists/:slug` and Fly mode on a second screen.

### 1.2 Tone


### 1.3 Where the code departs from the plan (important for the audit)

| Topic | Plan (`v1.md`) | Code | Evidence |
|---|---|---|---|
| Body font | Inter (21.3) | Instrument Sans Variable | `src/main.tsx` imports `@fontsource-variable/instrument-sans`; `tokens.css` `--font-sans` |
| Display font | Big Shoulders Display, `--font-display`, uppercase condensed (21.3, D-25) | none; headings use Instrument Sans 600 or 700 | no `--font-display` token, no Big Shoulders import anywhere in `src/` |
| Mono | JetBrains Mono or Roboto Mono | JetBrains Mono Variable | `tokens.css` `--font-mono` |
| Primary color | sky blue #1D4ED8 light / #60A5FA dark; amber accent #D97706 (21.2) | no blue primary. Primary buttons are ink (near-black in Day, near-white in Night). The one accent is teal #00757C (light) / #56D3DA (dark) | `Button.tsx` `primary: 'bg-ink text-on-ink'`; `tokens.css` |
| Page background | #F7F9FC light, navy #0B1220 dark (blue-tinted) | warm-neutral #f7f5f3 light, #141412 dark | `tokens.css` |
| Landing direction | D-25 "Skyhawk livery": white, navy and red, big condensed type, red #D0262D accent, navy bands, a detailed Skyhawk illustration, a navy "night livery" | type-led landing on canvas and surface bands, no illustration, no navy, no red; the file comment says "no airplane illustration" | `LandingPage.tsx` top comment |
| Logo | tail fin with a red livery stripe (D-25) | tail fin with a teal stripe (`accent-line` #009ca5 / #00c3cb); wordmark in Instrument Sans 700 22px | `Logo.tsx`, `public/favicon.svg` (`.stripe{fill:#009ca5}`) |
| Radii | 6 / 12 / 9999 px | 6 / 10 / 16 / 999 px | `tokens.css` |
| Primary CTA on landing | "Get started" to `/welcome` onboarding (D-27) | the CTA reads "Start lesson 0.1" or "Continue where you left off" and goes straight to the lesson. There is no `/welcome` route and no `src/features/onboarding/` | `router.tsx`, `LandingPage.tsx` |
| Tokens naming | `--color-bg`, `--color-text`, `--color-primary` | `canvas`, `surface`, `ink`, `ink-2`, `ink-3`, `accent`, `go`, `caution`, `warn` | `tokens.css` |


## 2. Route and page inventory

Router: `src/router.tsx`. Every page is lazy-loaded as its own chunk. Two layout trees: `RootLayout` (header and footer) and `FlyModeLayout` (neither). Dev-only routes `dev/components` and `dev/widgets` exist only when `import.meta.env.DEV`.

### 2.1 Layouts

- `RootLayout` (`src/layouts/RootLayout.tsx`): `div.flex.min-h-dvh.flex-col` holding SkipLink, BetaBanner, Header, `main#main.flex-1` (tabIndex -1), Footer, RouteAnnouncer, ScrollRestoration.
- `BetaBanner`: full-width `border-b bg-caution-tint` strip, `max-w-page px-4 py-2.5 text-sm`, 20 px `FlaskConical` in `text-caution`, copy "**Learn to Fly is in public beta.** Lessons and challenges are still being checked in the sim, so you may hit rough edges or content that changes. Report a problem", dismissible (localStorage `ltf-beta-banner`). Shown above the header on every page including Fly mode.
- `Header`: `sticky top-0 z-30 border-b border-line bg-canvas/95 backdrop-blur`, inner `mx-auto flex h-16 max-w-page items-center gap-4 px-4`. Logo left (wordmark hidden below `sm`); nav from `md`: Learn, Challenges, Reference (`min-h-11 px-3 text-sm font-medium text-ink-2`, active `text-ink` with a 3 px teal inset underline `shadow-[inset_0_-3px_0_var(--color-accent-line)]`); right: `ThemeToggle`, "Log in" (ghost sm), "Sign up" (primary sm) or `UserMenu`. Below `md` a 44 px hamburger opens a 320 px right `Drawer`.
- `AuthLayout`: `mx-auto w-full max-w-md px-4 py-10 sm:py-16`, one narrow column.
- `LessonLayout`: a bare `Outlet`; the lesson page builds its own grid.

### 2.2 Container widths

`PageContainer` (`components/PageHeader.tsx`): `mx-auto w-full px-4 py-8 sm:py-12`, `max-w-page` (1200 px) by default, `max-w-3xl` (48 rem, 768 px) when `narrow`. Landing sections use their own `band = mx-auto w-full max-w-page px-4`. The lesson page uses `max-w-7xl` (80 rem). The measure token is `max-w-measure` (68ch). There is a 16 px side gutter everywhere (`px-4`).

### 2.3 Landing page `/` (`src/pages/LandingPage.tsx`, 697 lines)

Seven bands, alternating `canvas` and `surface` backgrounds (white-ish in Day, one step lighter in Night). Section padding `py-16 sm:py-24` (64/96 px). Screenshots confirm the structure. No illustration, photo or image is used; the only "media" is a click-to-load video.

1. Hero (canvas). `grid gap-12 pt-16 pb-12 sm:pt-24 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-16`. Left: eyebrow "Free · Public beta · Cessna 172 Skyhawk · MSFS 2024" (`eyebrow text-ink-2`, 12 px uppercase, 0.08em); h1 "Yes, you can fly a plane." (`display-lg sm:display-xl mt-6 max-w-[12ch]`, so 44/48 on phones and 64/64 from `sm`, weight 700, tracking -0.025em); sub-copy `body-lg mt-6 max-w-[34em] text-ink-2`; two large buttons (`size="lg"`): primary ink "Start lesson 0.1" (or "Continue where you left off", or "Open the course") with an `ArrowRight`, and secondary "See the curriculum"; a `text-sm text-ink-3` note "You can start without an account. Any edition of MSFS 2024 works, on PC or Xbox. For simulation use only." Right: `YouTubeEmbed` (16:9 `aspect-video`, `rounded-lg border bg-instrument`, a red `bg-warn` 64 px play disc, "Play video: Learn to Fly launch video") with the caption "A 75-second tour of the lessons, diagrams and challenges."
2. Stats row. `dl` with a top `border-t border-line pt-8`, `sm:grid-cols-2 lg:grid-cols-4 gap-6`. Each stat: value in `readout-lg` (JetBrains Mono 32/36, 500, tabular) placed first via `order-first`, label `text-sm leading-5 text-ink-2`. Labels: "modules open now, one airplane", "short interactive lessons", "scored in-sim challenges", "of lessons and sim time". Values come from the API (live counts), with a static fallback.
3. "Where you start · Module 0". Two columns 7fr/5fr. Left: eyebrow, h2 (`display-md sm:display-lg`, 32/36 to 44/48), a requirement note with a `border-t`: "You need Microsoft Flight Simulator 2024." and three icon rows (Check in `text-go`, X in `text-ink-3`, BookOpen). Right: a `Card` (`max-w-[460px] p-5 sm:p-6`) containing the `LessonPath` for Module 0 (vertical 3 px connector, 32 px numbered pins, the current stop is an ink pin with an accent-tint halo and a teal "Start" button) and a mono `readout-sm` count line.
4. "How a lesson works" (surface band). Eyebrow, h2 "Read a little. Try it on the page. Fly it in the sim." and an `ol` of five steps (Learn, See, Try, Fly, Reflect) under `border-t-2 border-line-strong`, `sm:grid-cols-2 lg:grid-cols-5`. Each: a mono two-digit index (`readout-sm text-ink-3`), a 20 px lucide icon (`strokeWidth 1.75`), `heading-md` title, `text-sm text-ink-2` text. This is the stock "three to five icon steps" pattern.
5. "The curriculum" (canvas). h2 "{n} modules, in flight-school order." and one `Card` (`p-2`) containing an `ol` of module rows: `readout` code ("M0"), `heading-md` title plus `text-sm` summary, a `readout-sm` count, a chevron; the current module row is `bg-accent-tint` with "Up next" in `text-accent`. Rows are separated by `border-t border-line`.
6. "Challenges" (surface band). Two columns. Left: h2 "Bronze means you did it safely. Gold is checkride-ready.", a tier legend list (a 20 px ring in the tier color, the label in tier color, the criterion in `readout`, a note) and copy. Right: a sample challenge `Card` (`max-w-[560px]`): eyebrow "Challenge C4.3 · Landing", `DifficultyDots`, `display-md` title "Full-stop landing", setup chips (`rounded-sm bg-surface-sunken px-3 py-1.5`, mono for numeric ones), "You are scored on" with three check rows, and a footer with "Est. 20 min", a lesson link and a secondary button "Read the procedure".
7. "What you need" (canvas): h2 "MSFS 2024, a controller and a browser beside the sim." with three `Card`s in `md:grid-cols-3`, each a 24 px icon, `heading-md` title, `text-sm` text. Then "Questions" (surface): `dl` in `md:grid-cols-2`, each item `border-t border-line pt-5`, `dt` in `heading-md`. Then the final CTA band: h2 "Lesson 0.1 takes five minutes. Start there." with the same primary button and, for signed-out users, "Create a free account".


### 2.4 Curriculum `/learn` (`CurriculumPage` and `features/curriculum/CurriculumMap.tsx`)

`PageContainer narrow` (768 px), `PageHeader title="Learn"` (description begins "Nine modules take you from your first flight to a planned cross-country"), then `CurriculumMap`: modules rendered as a `LessonPath` (vertical teal connector), each a `<details>` card (`rounded-lg border bg-surface shadow-1`; the current module `border-accent-line bg-accent-tint shadow-none`, open by default). Summary: eyebrow "Module n" (+ " · Done" / " · Up next"), `heading-md` title, summary, `text-sm` "n lessons · n challenges · about h", a 56 px `ProgressRing` when signed in, a chevron. Body: `eyebrow` sub-heads "Lessons" and "Challenges" over `min-h-11` link rows (icon, mono code, title, "Bonus" badge, minutes, chevron). Error state (screenshot): dashed box, red octagon, "Something went wrong", button "Try again".

### 2.5 Module `/learn/:moduleSlug` (`ModulePage.tsx`)

`PageContainer narrow`: breadcrumbs, `PageHeader` (eyebrow "Module n", `display-md` title), a clock line "About {h} hours of lessons and sim time · n lessons · n challenges", `ProgressBar` (signed in), large "Start module n"; a `Card` "What you'll be able to do" with green check bullets; then `text-2xl font-bold` h2s "Lessons" and "Challenges" over bordered `rounded-lg bg-surface p-2` row lists.

### 2.6 Lesson `/learn/:moduleSlug/:lessonSlug` (`LessonPage.tsx`, `features/lessons/*`)

Outer: `mx-auto w-full max-w-7xl gap-10 px-4 py-8 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_280px]`. Three zones:
- Left rail (`lg+`): `SectionNav`, sticky `top-24`, heading "In this lesson" (`text-sm font-semibold text-ink-2`), an `ol` with a `border-l-2 border-line` spine; the active section gets `border-accent-line font-semibold text-accent` and a mono number prefix. Scroll-spy driven (`hooks/useScrollSpy.ts`).
- Center `article` (`max-w-[800px]`): breadcrumbs; mono label "Lesson 0.1" (`font-mono text-sm font-semibold text-accent`); h1 `text-3xl font-bold sm:text-4xl` (raw Tailwind, not `display-*`); meta row (clock "About n minutes", `DraftBadge`, "Completed" badge). Then in order: `UnverifiedWarning` (drafts), `SignupBanner` ("Sign up (free) to save your progress and challenge scores."), resume bar (`border-accent-line bg-accent-tint`), objectives `Card bg-accent-tint` ("In this lesson you will"), mobile section `Select` (sticky `top-16`, "Section i of n: title"), the blocks, "Fly it" challenge cards, "Go deeper" resource cards, glossary chips (below `xl`), a completion panel ("Finished reading and trying the questions?" and large "Mark lesson complete"), prev/next cards, and the simulation-only line.
- Right rail (`xl+`, 280 px): sticky `top-24` glossary chips ("Terms in this lesson"), each a `rounded-full border` button opening a `Popover` with the definition.

Blocks (`LessonRenderer.tsx`): markdown, heading, callout, image, video, quiz, widget, checklist. Lesson typography (`MarkdownContent.tsx`): body inherits 16/26 (not Prose's 18 px); block headings `h2 mt-12 mb-3 text-2xl font-bold`; markdown `h3` `text-xl font-semibold`; `p my-3`; `list-disc pl-6`; tables in a focusable bordered scroll region; code `bg-surface-sunken font-mono text-[0.9em]`; links `font-medium text-accent underline`. Images `rounded-lg border`; only three lesson images exist (Module 0 sim settings screenshots, WebP). Quiz (`QuizBlock.tsx`): `rounded-lg border bg-surface p-5 shadow-1` card, "Quick check" label in accent, `text-lg font-semibold` prompt, "Check answer", live result "Correct!" (go) or "Not quite." (warn) plus explanation.

### 2.7 Challenges list `/challenges` (`ChallengesPage.tsx`)

`PageContainer` (1200 px), `PageHeader title="Challenges"`, a `role="search"` filter card (`grid gap-3 rounded-lg border bg-surface p-4 sm:grid-cols-2 lg:grid-cols-5`) of five `Select`s (Module, Type, Difficulty, Status, Priority), a `role="status"` line "Showing n challenges of n", then `grid gap-4 sm:grid-cols-2 lg:grid-cols-3` of card links (`rounded-lg border bg-surface p-4 shadow-1 hover:border-accent`): mono code and `TypeIcon`, `text-lg font-semibold` title, meta row (`DifficultyDots`, minutes, ICAO, badges, best `TierBadge`). Empty: `EmptyState` "No challenges match these filters" / "Try fewer filters." / "Clear filters".

### 2.8 Challenge `/challenges/:slug` (`ChallengePage.tsx`)

`PageContainer narrow`. `Breadcrumbs`, `PageHeader` with eyebrow "Challenge {code}", `display-md` title, then a meta row (TypeIcon, DifficultyDots, clock, map pin, DraftBadge, "Best: {TierBadge} {n}%"). Tabs (`Tabs`, Radix): Brief, Fly, Debrief, History (signed in only); the tab is in `?tab=`. Active tab: ink text plus a 3 px teal inset underline on the 1 px baseline.
- Brief (`BriefTab.tsx`): `text-2xl font-bold` h2s Goal, "Sim setup" (a `dl` in `divide-y rounded-lg border`, rows `sm:grid-cols-[12rem_1fr]`, copy buttons), "Recommended lessons", Procedure, "How you'll be scored" (`Table` Criterion, Levels, Weight "×n"), side-by-side `safety` and `tip` Callouts, large "I'm set up, start flying".
- Fly (`FlyPanel.tsx`): "Steps" rows with `Checkbox` and `text-lg` copy (ticked: `border-go bg-go-tint`), "Timer (optional)" `Stopwatch`, "Keep the screen on while flying", random-event alert (`border-4 border-warn bg-warn-tint`, pulse, beep), "Finish and debrief". Debrief is a radio-card rubric form, live score preview with `font-mono text-2xl font-bold`, and a result card (centered, `TierBadge` with `tier-pop`, `font-mono text-5xl font-bold` percent, "Criterion by criterion" rows). History is a table.
- History: `HistoryTab.tsx` table of attempts.

### 2.9 Fly mode `/challenges/:slug/fly` (`FlyModePage.tsx`)

`FlyModeLayout` (dark, `text-xl`, `max-w-3xl`): "Back to challenge" link, mono code, h1 `text-4xl font-bold`, goal `text-2xl`, then `FlyPanel large` (h2 `text-3xl`, `text-5xl` mono stopwatch digits in an ink pill with an 8 px `accent-line` running dot).

### 2.10 Dashboard `/dashboard` (`DashboardPage.tsx`, auth only)

`PageContainer` 1200 px, `PageHeader` "Welcome aboard, {name}!" or "Welcome back, {name}". Order: course-complete panel (`border-tier-gold`, `CourseBadge` wings roundel, "Course complete: Skyhawk Pilot (Sim)"), "All caught up", the Continue card (`border-accent-line bg-accent-tint p-5`, `text-xl font-bold`, large button). Then `lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]`: left "Your progress" (`ProgressBar`s, per-module bars) and "Next up"; right "Stats" (three tiles, `font-mono text-2xl font-bold`: Attempts, Gold results, "Sim time (estimated)") and "Recent attempts". Section h2s are `text-2xl font-bold`.

### 2.11 Reference

- Hub `/reference`: centered header (eyebrow "Reference", h1 "What do you need to know?" in `display-lg`), a large search field (`h-16 rounded-lg pl-14 text-xl shadow-2`, placeholder "Speeds, terms, checklists, airports", results panel with outline type badges and mono readouts), "Most looked up" chips; then "The kneeboard" (`heading-md`) with Print and the `AirspeedArcs` band (Section 6); then `ReferenceSections`, a POH-style numbered rail ("01 V-speeds and limits" to "05 Resources"; horizontal scroll below `lg`, 260 px vertical rail from `lg`, active `bg-accent-tint` with a 3 px teal inset) beside the active panel ("Section 01. Power settings by phase"). State lives in `?section=`.
- Speeds `/reference/speeds` (`SpeedsPage.tsx`): `PageContainer`, breadcrumbs, `PageHeader` "V-speeds and limits", a "Last verified" line, a `verify` callout if unverified, then `lg:grid-cols-[1fr_20rem]`: a big `Table` (`text-lg`, KIAS cells `font-mono text-2xl font-bold`), a "Limits" `dl` of bordered tiles with mono values, "Typical power settings", and the explorable airspeed indicator widget. Right: a sticky `KeyNumbers large` panel (36 px values).
- Airports `/reference/airports` (3-up card grid, mono ICAO in `text-accent`, mono runway and elevation values, "{n} challenges here"), `/reference/airports/:icao` (`AirportPage.tsx`).
- Resources `/reference/resources` (filterable card list).

### 2.12 Account, auth and static pages

- `/login`, `/signup` in `AuthLayout` (448 px): `PageHeader`, `ErrorSummary`, `FormField`s, `PasswordInput`, strength meter, "Remember me for 30 days". `/account` (narrow): stacked Profile, Preferences (`ThemeToggle`), Security, Data (delete `Dialog` "Delete your account?").
- Static: `/about`, `/disclaimer`, `/privacy`, `/terms` (`PageHeader` plus `Prose`), `/roadmap` (eight-rung ladder on a `border-l-2` spine, current rung `border-go` with a "Version 1" badge), 404 (`font-mono text-6xl font-bold text-accent` "404", h1 "You've wandered off the taxiway"). Dev-only: `/dev/components`, `/dev/widgets`.
- Dev: `/dev/components` renders every component in every state (`DevComponentsPage.tsx`, 703 lines) and `/dev/widgets`. They are absent in production builds.

## 3. Component inventory (`src/components/`)

Shared rules: every interactive element gets the global focus ring (see 9). Status colors always come with an icon or word. Radii: `rounded-md` (10 px) and `rounded-lg` (16 px) are the two most common (58 uses each), then `rounded-pill` (23), `rounded-sm` (19), `rounded-full` (9, widely redundant with pill).

- Button: variants `primary` (`bg-ink text-on-ink hover:bg-ink-2`), `secondary` (`border-line-strong`, transparent), `ghost`, `accent` (`bg-accent`, only for continuing the lesson path), `danger` (`bg-warn`, behind a confirmation). Sizes sm 32, md 40, lg 48 px (`min-h-control-*`; `text-sm`, `text-sm`, `text-base`). Base `rounded-md font-medium leading-5 duration-150`, svg forced 18 px, disabled `opacity-45`, press `active:shadow-press`. `loading` swaps in a spinning `Loader2`. `asChild` renders links as buttons. The plan says 44 px touch targets; `sm` is 32 px.
- Card (`Card.tsx`): `flex flex-col rounded-lg border bg-surface shadow-1`. States: default, done, `current` (`border-accent-line bg-accent-tint shadow-none`), locked. `interactive` raises the border to `line-strong`. Slots `CardHeader`, `CardBody` (`px-5 sm:px-6`), `CardFooter` (`border-t`). The code comment: "State is carried by the badge, the eyebrow and the fill, never a colored left border." In practice many pages skip `Card` and inline `rounded-lg border border-line bg-surface p-4 shadow-1` (lesson, challenge, dashboard and reference cards).
- Badge (`Badge.tsx`): `h-6 rounded-sm px-2 text-xs font-semibold tracking-[0.02em]`; variants neutral, accent, go, caution, warn, outline, gold, silver, bronze. Status variants auto-add a 12 px icon (Check, TriangleAlert, OctagonAlert). Tier variants render as pills: `h-7 rounded-pill`, `tracking-[0.08em] uppercase`, a 1 px current-color ring and an 8 px dot.
- Callout: `grid-cols-[20px_1fr] gap-3 rounded-md px-5 py-4`, tinted fill, type color only on the 20 px icon and title, no left stripe. Nine types (default title): safety "Safety", sim "Sim vs reality", tip "Pro tip", classic "Classic panel", note "Note", decision "Decision", memory "Memory item", real-world "In a real airplane", verify "Verify (author note)" (dashed, blocks publication).
- Tabs (`Tabs.tsx`): Radix; 40 px triggers `px-3 text-sm font-medium`, scrolls sideways on phones; active gets the 3 px inset teal underline; optional mono `meta` count.
- Form controls: `FormField` (label 14/20 500, hint `text-sm text-ink-2`, error `font-medium text-warn` with octagon icon), `Input`, `PasswordInput`, `Textarea`, `Select`, all on `control-box`: 40 px, `rounded-md`, 1 px `line-strong` border, `bg-surface`, 16 px text, focus = accent border plus 2 px canvas gap and 2 px ring, invalid = warn border. `Checkbox` 20 px `rounded-sm`, checked fills ink; `RadioGroup` circle thickens to a 6 px ink border, `card` mode `rounded-md border` with an ink ring when checked. `ErrorSummary` `bg-warn-tint rounded-md`, "There is a problem", takes focus.
- ThemeToggle: three-way pill segmented control "Day", "System", "Night" (Sun, Laptop, Moon icons), 32 px segments in a `bg-surface-sunken p-[3px] rounded-pill` track, the selected one an ink pill.
- Table (`Table.tsx`): header cells `eyebrow` over a `line-strong` rule, body rows `border-line`, outer 1 px border with `rounded-lg` corners; below `md` each row stacks into a bordered `rounded-lg shadow-1` card with `data-label` captions; `numeric` columns are `readout-sm` right-aligned.
- Progress (`Progress.tsx`): `ProgressBar` (8 px `rounded-pill` track in `surface-sunken` with a 1 px border, fill `accent-line`, turning `go` at 100%, 400 ms width transition, label left and `readout-sm` value right) and `ProgressRing` (56 px, 6 px stroke, percent in `readout-sm`). Both are `role=progressbar` with `aria-valuetext`.
- LessonPath: the signature "horizon line" element. A vertical 3 px connector between 32 px numbered pins; `done` filled accent with a check, `current` the single ink pin with a 4 px `accent-tint` halo and an accent "Start" button, `upcoming` a `line-strong` ring, `locked` a dashed ring; the connector is teal only between completed stops.
- States (`States.tsx`): `EmptyState` and `ErrorState` share one layout: `max-w-[420px] rounded-lg border border-dashed border-line-strong px-6 py-12 text-center`, a 32 px icon (`strokeWidth 1.5`; Inbox default, OctagonAlert in warn for errors), `heading-md` title, `text-sm text-ink-2` message, one action. `ErrorState` is `role="alert"`. These are left-aligned inside their parent (the 420 px box is not centered on the page, visible in the screenshot).
- Toast (`Toast.tsx`): bottom-right, 360 px (full width on phones), `rounded-md border bg-surface-raised shadow-2`, a 20 px tone icon (info `text-ink-2`, success `text-go`, warning `text-caution`, error `text-warn`), bold title, optional description, a dismiss X. One at a time; success and info auto-dismiss at 6 s, errors persist and use `role="alert"`/`aria-live="assertive"`. Enter animation `rise-in`.
- Breadcrumbs: `text-sm` quiet links with 14 px chevrons; on phones only the parent shows as "‹ Parent".
- ChallengeMeta (`ChallengeMeta.tsx`): `DifficultyDots` (five 8 px discs, ink when filled, `line-strong` when empty, `role=img` "Difficulty n of 5"), `TierBadge` (labels Gold, Silver, Bronze, "Not passed"; optional pop animation), `TypeIcon` (nine challenge types mapped to lucide icons: Settings2, ClipboardList, Repeat2, Route, PlaneLanding, TriangleAlert, Compass, Radio, Award) and a `ChallengeMeta` row.
- KeyNumbers (`KeyNumbers.tsx`): a `@container` panel, `rounded-lg border bg-surface-sunken px-5 py-4`, `eyebrow` labels over `readout-lg` values with a small sans unit; `highlight` turns one value accent; `large` uses `text-4xl`. Explicitly "Page UI, not a gauge: never painted with the instrument tokens."
- Stopwatch, YouTubeEmbed (click-to-load, privacy-enhanced domain, no thumbnail), Prose (see 5), Logo (see 6).

## 4. Tokens (`src/styles/tokens.css`, `src/styles/index.css`)

Tailwind's default palette, radii, shadows and fonts are explicitly cleared (`--color-*: initial; --radius-*: initial; --shadow-*: initial; --font-*: initial`). Text sizes, weights, leading, tracking, breakpoints and the spacing scale are NOT cleared, so Tailwind's defaults for those still apply.

### 4.1 Color

| Group | Token | Day | Night |
|---|---|---|---|
| Ground | canvas | #f7f5f3 | #141412 |
| | surface | #ffffff | #1f1e1c |
| | surface-raised | #ffffff | #2b2a28 |
| | surface-sunken | #efeeec | #0f0e0d |
| | line | #dfdedc | #393836 |
| | line-strong | #81807e | #878684 |
| Ink | ink | #171614 | #ecebe9 |
| | ink-2 | #595856 | #b2b1af |
| | ink-3 | #6a6967 | #939290 |
| | on-ink | #ffffff | #141412 |
| Accent ("horizon line") | accent | #00757c | #56d3da |
| | accent-strong | #005c62 | #93e5e9 |
| | accent-line | #009ca5 | #00c3cb |
| | accent-tint | #daf7f8 | #023538 |
| | on-accent | #ffffff | #141412 |
| Status | go / go-tint | #006c43 / #d8f7e6 | #6bdeaa / #152f23 |
| | caution / tint | #945a00 / #ffeecb | #f8c655 / #3b2b0d |
| | warn / tint | #b71824 / #ffe7e4 | #ff8880 / #442321 |
| | on-go, on-warn | #ffffff | #141412 |
| Tiers | gold / silver / bronze | #906200 / #5f6469 / #8c5331 | #f1c45e / #b9bec4 / #dea279 |
| Utility | focus | alias of accent | alias of accent |
| | scrim | #171614 at 70% | #000000 at 70% |

Fixed (same in both themes) instrument tokens: instrument #100f0e, instrument-text #ecebe9, arc-white #f1f5f9, arc-green #22c55e, arc-yellow #facc15, arc-red #ef4444, sky #2563c9, ground #7a4d24, bezel #2f2e2c, bezel-key #4e4d4b, display-magenta #f472f6, display-cyan #22d3ee, display-green #4ade80. Fixed sectional chart tokens: chart-land #eef2dc, chart-hills #e4d8b4, chart-water #b9dcf0, chart-city #f5e07a, chart-blue #1f58a8, chart-magenta #a3166f, chart-ink #1d2733. Fixed colors are used only in gauge and chart drawings (`AirspeedArcs.tsx`, `g1000-pfd/*`, `sectional-legend/Chart.tsx`, `YouTubeEmbed.tsx` background).

Dark mode: `[data-theme='dark']` overrides the same properties; the `dark` variant is `[data-theme='dark'], [data-theme='dark'] *`. An inline script in `index.html` sets `data-theme` before first paint from `localStorage['ltf-theme']` (light, dark, system) and the OS setting. Greys are near-neutral and slightly warm. In Night, elevation is a lighter surface plus a 1 px line ring (`--shadow-1: 0 0 0 1px #393836`).


### 4.2 Fonts and loading

`src/main.tsx` imports `@fontsource-variable/instrument-sans` and `@fontsource-variable/jetbrains-mono` (self-hosted via npm; `vite.config.ts` forbids inlining fonts so the CSP keeps `font-src 'self'`). No Google Fonts link, no preconnect, no custom `@font-face`. `--font-sans: 'Instrument Sans Variable', system-ui, -apple-system, 'Segoe UI', sans-serif`; `--font-mono: 'JetBrains Mono Variable', ui-monospace, SFMono-Regular, Menlo, monospace`. Base 16 px/1.625; headings `line-height 1.25; text-wrap: balance`.

### 4.3 Type scale (utilities in `index.css`)

| Utility | Size/leading | Weight | Tracking | Other |
|---|---|---|---|---|
| display-xl | 64/64 | 700 | -0.025em | |
| display-lg | 44/48 | 700 | -0.02em | |
| display-md | 32/36 | 600 | -0.015em | |
| heading-lg | 24/30 | 600 | -0.01em | |
| heading-md | 20/26 | 600 | none | |
| heading-sm | 16/22 | 600 | none | |
| body-lg | 18/29 | 400 | | |
| body-md | 16/26 | 400 | | unused |
| body-sm | 14/20 | 400 | | |
| label | 14/20 | 500 | | |
| eyebrow | 12/16 | 600 | 0.08em | uppercase |
| readout-lg | 32/36 | 500 | | JetBrains Mono, tabular |
| readout | 16/24 | 500 | | mono, tabular |
| readout-sm | 14/20 | 500 | | mono, tabular |
| code | 14/22 | 400 | | mono |


Raw Tailwind size classes (138 files): `text-sm` 204, `text-2xl` 36, `text-xs` 29, `text-lg` 25, `text-xl` 19, `text-base` 5, `text-3xl` 5, `text-4xl` 3, `text-5xl` 2, `text-6xl` 1. Weights: `font-semibold` 163, `font-bold` 94, `font-mono` 74, `font-medium` 41. Leading: `leading-5` 57, `leading-6` 4. Tracking: `tracking-wide` 13. Uppercase 14 uses. 34 files use `font-bold`, 29 use the token utilities: two typographic dialects (Section 10).

### 4.4 Spacing, radii, shadows, motion

- Spacing: Tailwind's 4 px scale (`--spacing: 0.25rem` default). Named `--space-*` tokens (4, 8, 12, 16, 20, 24, 32, 48, 64, 96) exist "for CSS and documentation". Control heights: `--spacing-control-sm` 32, `-md` 40, `-lg` 48. Most used gaps: `gap-2` 34, `gap-3` 26, `gap-4` 13 in pages and layout.
- Radii: sm 6, md 10, lg 16, pill 999. A few bracket values (`rounded-[2px]` on links and focusable inline items, `rounded-[3px]`, `rounded-[4px]`).
- Shadows: `shadow-1` (two soft layers, 6 to 8% ink), `shadow-2` (a 4/8 px plus 12/28 px stack at 6/10%), `shadow-press` (inset 2 px top). Used 11, 10 and 4 times. Inset teal "underline" shadows (`shadow-[inset_0_-3px_0_var(--color-accent-line)]`) serve as the active-tab, active-nav and active-rail indicator.
- Motion tokens: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`, `--ease-in: cubic-bezier(0.7, 0, 0.84, 0)`. Animations: `fade-in` 200 ms, `pop-in` 200 ms (scale .98 to 1), `slide-in-right`/`left` 200 ms, `rise-in` 200 ms (8 px up), `shimmer` 1.4 s linear infinite, `tier-pop` 400 ms (scale .6 to 1.08 to 1), `warning-pulse` 1.2 s infinite (a ring that expands to 8 px, never the text). Transitions: `duration-150` 16 times, `duration-[400ms]` 4 times (progress and lesson-path).
- Breakpoints: Tailwind defaults (sm 640, md 768, lg 1024, xl 1280, 2xl 1536). Usage count: `sm:` 73, `md:` 47, `lg:` 41, `xl:` 3, `2xl:` 0. Container queries are used once (`KeyNumbers` `@container`).

## 5. Typography in practice

- Page title (h1): `PageHeader` gives `display-md` (32/36, 600, -0.015em) on app pages. The landing h1 is `display-lg` to `display-xl` (44 to 64, 700). The reference hub h1 is `display-lg` centered. The lesson h1 is `text-3xl font-bold sm:text-4xl` (30/36 px, with Tailwind's default leading, 700). The Fly mode h1 is `text-4xl font-bold`. The 404 and error h1s are `text-3xl font-bold`.
- Section headings (h2): landing sections use `display-md sm:display-lg`; most app pages (challenge, module, dashboard, speeds, lesson headings) use `text-2xl font-bold` (24 px, 700); reference panels use `heading-md` (20/26, 600). Card titles are `heading-md`, `text-lg font-semibold` (challenge cards, 18 px) or `text-xl font-semibold` (airport and glossary cards). In-lesson h3 is `text-xl font-semibold`.
- Body: sans 16 px/26 px in `ink`; supporting text `text-ink-2` (the single most common color class); meta text `text-sm leading-5` (14/20). Long form (`Prose`, used only on About, Disclaimer, Privacy, Terms): `body-lg` 18/29, `max-w-measure` 68ch, h2 `heading-lg` with `mt-10 mb-3`, h3 `heading-md` with `mt-6 mb-2`, paragraphs `my-4`, links accent with a 1.5 px accent-line underline, inline code as a bordered sunken chip. Lessons do not use `Prose`: they use `MarkdownContent` at 16 px with the article capped at 800 px (roughly 90 to 100 characters of 16 px Instrument Sans per line; not measured), so the lesson measure is wider than the 68ch the design system defines.
- Numerals and mono: JetBrains Mono (variable, tabular) is the "everything you measure" face: stat values on the landing page (`readout-lg`), module codes ("M0"), lesson and challenge codes (`font-mono text-sm text-ink-2`), V-speeds and limits (`font-mono text-2xl font-bold`), percentages (`font-mono text-2xl/5xl font-bold`), difficulty "3 of 5", ICAO and runway values, glossary letters, form keyboard hints. `font-mono` appears 74 times. Bold mono is common in pages (Dashboard, Speeds, Result) although the `readout` utilities are weight 500.
- Uppercase and tracking: only `eyebrow` (12 px, 600, 0.08em, uppercase) and tier badges (12 px, 0.08em, uppercase) use uppercase; used as the small labels over almost every section heading, table header and stat. `tracking-wide` (13 uses) accompanies a few small labels. Display headings have negative tracking. The logo wordmark is 22 px, 700, -0.02em.
- Eyebrow-over-heading is the dominant heading pattern: landing sections, `PageHeader`, module cards, challenge cards, stat tiles, table headers.

## 6. Iconography and imagery

- Icon library: lucide-react, imported in 64 places, line icons at `strokeWidth` 1.75 (the design default, 28 uses), 2 (48 uses), 1.5 (36, mostly state icons at 32 px), plus some 2.5 and 3 for checkmarks. Sizes: 12 (badges), 14 (field errors, external link, breadcrumbs), 16 (inline), 18 (inside buttons, forced), 20 (callouts, toasts, list icons), 24 (landing "What you need"), 32 (empty and error states, 56 for the hero play disc). Icons are `aria-hidden` with adjacent text; tiers and statuses always carry a word.
- Logo (`Logo.tsx`, `public/favicon.svg`): a 40 by 40 swept tail-fin path with a diagonal stripe masked through it. In the component the fin is `currentColor` (ink), the stripe `fill-accent-line` (teal), and the mark follows the Day/Night toggle; the favicon is a separate copy following the OS scheme (fin #171614 or #ecebe9, stripe #009ca5 or #00c3cb). Lockup: 28 px mark, `gap-2.5`, "Learn to Fly" at 22 px, 700, -0.02em; wordmark hides below `sm` in the header.
- Empty and error states: dashed `line-strong` box with a 32 px lucide icon (Inbox, SearchX, OctagonAlert, Trophy inline). No illustrations.
- Widgets (`src/features/widgets/`, 7,112 lines, hand-built SVG, fixed instrument colors): shared primitives in `shared/svg.tsx` (`Gauge` round dial with arcs, ticks and a CSS-rotated needle; `Tape` G1000-style tape with a black pointer box; `Arrow`, `Label` with a surface halo, `Compass`). Widgets: control-surfaces, g1000-pfd (818 lines: `fill-bezel` body, soft keys, `fill-sky` over `fill-ground` attitude, magenta and green course colors), airspeed-indicator (dial plus tape, white, green, yellow arcs, red line), angle-of-attack, pitch-power, turn-coordinator, traffic-pattern, vor-cdi, sectional-legend (`Chart.tsx`, a drawn mini sectional in `chart-*` colors with hotspots), airspace-profile, wind-triangle, load-factor, checklist-runner. `WidgetFrame`: `figure rounded-lg border bg-surface shadow-1`, header with title, "Simplified model" accent badge, Explore or "Quiz me" pill toggle, ghost "Reset", a `p-4` canvas, and a "Describe this diagram" `details`. Lazy chunks with `Skeleton h-72` and an error boundary; sliders are native range inputs with `accent-accent`.

## 7. Voice and microcopy

Rules (AGENTS.md): US English, second person, no em dashes in learner-facing text, knots, feet, inHg, MSL or AGL on altitudes. The plan (v1.md 21.1, 18) frames the voice as a calm instructor. Samples, exact, with file:

Headings and hero
- "Yes, you can fly a plane." (`pages/LandingPage.tsx`, h1)
- "Read a little. Try it on the page. Fly it in the sim." (landing)
- "Bronze means you did it safely. Gold is checkride-ready." (landing)
- "{n} modules, in flight-school order." (landing)
- "Lesson 0.1 takes five minutes. Start there." (landing final CTA)
- "What do you need to know?" (`pages/ReferenceHubPage.tsx`)
- "The road to the A380" (`pages/RoadmapPage.tsx`)
- "You've wandered off the taxiway" (`pages/NotFoundPage.tsx`)
- Page title format: "Page title · Learn to Fly" (`hooks/usePageTitle.ts`, `@shared/seo`). `index.html` carries a default title that contains an em dash.

Buttons and links
- "Start lesson 0.1", "Continue where you left off", "Open the course", "See the curriculum", "Create a free account" (landing)
- "Mark lesson complete", "Not now", "Sign up free" (`features/lessons/LessonParts.tsx`)

Empty, error and system states
- "No challenges match these filters" / "Try fewer filters." / "Clear filters" (`ChallengesPage.tsx`)
- "Something went wrong" / "We could not load this. Check your connection and try again." (`States.tsx`)
- "An unexpected error stopped this page from loading. Reloading usually fixes it. If it keeps happening, please try again later." (`RootErrorPage.tsx`)
- "The lessons for this module are being written" (`ModulePage.tsx`); "Being written" (landing module row); "Your challenge results will appear here." (dashboard)
- "Not saved", "This challenge was updated" (`DebriefForm.tsx`)

Callouts (default titles, `Callout.tsx`): Safety, Sim vs reality, Pro tip, Classic panel, Note, Decision, Memory item, In a real airplane, Verify (author note).

Quiz feedback: "Quick check", "Correct!", "Not quite.", "Select all that apply.", "Change your answer and check again." (`QuizBlock.tsx`).

Honesty and beta framing (a distinctive trait)
- "Learn to Fly is in public beta." banner (`BetaBanner.tsx`).
- "Unverified content: not for learning use" with "This lesson is an unverified draft. It hasn't been checked in Microsoft Flight Simulator 2024 or against official sources, so its numbers, procedures and steps may be wrong. Don't use it to learn to fly, in the sim or in a real aircraft." (`features/content/UnverifiedWarning.tsx`)
- "Draft · unverified" badge; "Last verified: …" lines; "Not yet verified" callout (`SpeedsPage.tsx`).
- "This badge celebrates your simulator practice on Learn to Fly. It is not a pilot certificate and has no value for real-world flying." (`DashboardPage.tsx`)
- "For simulation use only. Learn to Fly is not flight instruction and must not be used for real-world flight training or navigation." (`features/layout/navigation.ts`)


## 8. Motion, loading and feedback

- Reduced motion: `index.css` has a global `@media (prefers-reduced-motion: reduce)` that sets animation and transition durations to 0.01 ms, iteration count 1 and `scroll-behavior: auto` on every element. Components additionally use `motion-safe:` on animations (toast `rise-in`, dialog `pop-in`, `fade-in` scrims and tooltips, `slide-in-*`, `tier-pop`, `warning-pulse`, shimmer).
- Loading: `AppLoading` (pulsing 48 px logo mark), `PageSkeleton` (five `Skeleton` blocks in a `LoadingRegion`), widget `Skeleton h-72`, button `loading` spinner. The landing page renders from static fallback data while the API loads.
- Persistence: localStorage keys `ltf-theme`, `ltf-beta-banner`, `ltf-signup-banner-dismissed`; challenge flight state and debrief drafts in session or local storage (`features/challenges/storage.ts`).

## 9. Accessibility provisions in code

- Landmarks and skip: `SkipLink` ("Skip to main content", visible on focus, ink pill), `main#main` with `tabIndex=-1`, `nav aria-label` on main, footer, breadcrumb and lesson sections, `aria-labelledby` on every landing section, one `h1` per page.
- Focus: a global `:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px }` on everything; inputs replace it with a border plus a 2 px canvas gap and a 2 px ring (`control-box`); `[tabindex='-1']:focus` has no outline (programmatic focus targets). Focus color is the accent (teal), designed to meet 3:1 on both grounds per the comments (not verifiable here).
- Route changes: `RouteAnnouncer` moves focus to the page `h1` (or `main`, then `h1` once rendered), announces `document.title` in a polite live region, and skips the first load. `usePageTitle` sets a unique title and keeps meta tags in step.
- Color is never alone: badges carry icons and words; tiers always print Gold, Silver, Bronze; status icons have sr-only text ("Completed:", "In progress:", "Not started:"); links are always underlined; airspeed arcs have text legends; the progress bar carries `aria-valuetext`.
- Tests: `pages/a11y.test.tsx` and `e2e/a11y.spec.ts` run axe and fail on serious violations; `e2e/keyboard.spec.ts` covers keyboard flows; `jsx-a11y` lint is configured.

## 10. Generic signals and distinctive traits (observations only)

### 10.1 Traits that resemble a default Tailwind or SaaS template

1. Section rhythm on the landing page: hero with headline, subline, two buttons and an adjacent media block; a row of four stats; a five-step icon row; a "what you need" three-card row with icon, title and short text; a two-column FAQ; a final CTA band. This is the common marketing page order (`LandingPage.tsx`).
2. Rounded rectangles dominate: `rounded-lg` (16 px) bordered `bg-surface` cards with a soft shadow appear in lessons, challenge lists, airports, checklists, dashboard tiles, quiz blocks, widget frames and resource cards. `rounded-md` plus `rounded-lg` account for 116 of roughly 190 radius uses. Many of these are hand-inlined `rounded-lg border border-line bg-surface p-4 shadow-1` rather than `Card`.
4. Small uppercase tracked eyebrow above every heading, plus a heavy-semibold H2 (`text-2xl font-bold`) on most app pages.
5. Stock icon set: lucide line icons everywhere (64 import sites), including generic glyphs for challenge types (Settings2, Route, Compass, Award) and "how it works" (BookOpen, Eye, SlidersHorizontal, PlaneTakeoff, ClipboardCheck). The planned custom challenge-type icons are not drawn.
6. Pill segmented controls and ink-filled primary buttons: the `ThemeToggle`, the widget Explore/Quiz toggle, the Stopwatch and the primary Button all use the same near-black pill or rounded fill with white text, a very common Vercel or shadcn-like look. The tooltip is the same inversion.
7. Neutral and restrained palette with one accent: a warm off-white page, white cards, grey text and a single teal; status tints (go, caution, warn) as flat tinted boxes. Most of the visible UI is neutral grey at three ink levels (`text-ink-2` 266 uses).
8. One sans family for everything you read and a mono for numbers: a standard "Inter plus mono" pairing, here with Instrument Sans (a close relative in feel). No display face is in use (the planned Big Shoulders Display and D-25 condensed type were not implemented).
11. Two parallel type systems and an unused scale: `body-md` is never used; the lesson, dashboard, challenge and error pages hard-code Tailwind sizes (`text-2xl font-bold`, `text-3xl font-bold`) while the landing and `PageHeader` use the `display-*` and `heading-*` utilities. The result is that the app's headings are not uniform: h2 is 24 px/700 on app pages, 32 to 44 px/600 to 700 on the landing page, and 20 px/600 on the reference hub.
12. Empty and error states are the same dashed-border box with a generic icon.

### 10.2 Traits already distinctive

1. Instrument and chart tokens: fixed gauge colors (`instrument`, `arc-*`, `bezel*`, `display-*`) and printed-chart colors (`chart-*`) that stay constant across themes, with a documented rule that page UI never uses them; the kneeboard band and 13 SVG widgets (G1000 PFD, VOR/HSI, sectional legend, airspeed dial and tape) are hand-built, not chart-library output.
3. The logo and the "horizon line" idea: a tail-fin mark with a teal stripe, and the same teal line reused as the active-nav underline, the active tab underline, the lesson-path connector, the progress fill and link underlines. `LessonPath` (numbered pins on a vertical line, a single "current" ink pin with an accent-tint halo) is a custom pattern, not a stock stepper.
4. Honesty as UI: draft and unverified badges and warnings, a verification date on the speeds page, the public-beta banner, "not a pilot certificate" language, `verify` callouts that block publication.
5. Aviation framing in structure and copy: Brief, Fly, Debrief tabs; Gold, Silver, Bronze tiers shown as rings; a POH-style numbered rail and a "kneeboard" on the reference hub; "Fly mode" for a second screen (dark, large type, stopwatch); randomized in-flight events with beep and pulse; the 404 "taxiway" line; "Day" and "Night" theme names.
6. A rule-bound system: near-neutral warm greys in both themes, accent text colors darker in Day and lighter in Night, elevation by lighter surface plus a 1 px ring in Night, no left-stripe cards, ink-inverted buttons, status color only on icon and title. This is documented in the CSS comments (not in a separate file, see Section 0).
8. The landing page uses no illustration, photo or stock image; its visual identity is the type, the teal line and the lesson path card.

## 11. Gaps and unknowns

- Not rendered with real data: lesson, challenge (all tabs), dashboard, reference hub and speeds, widgets in context, the account pages. Their descriptions come from source only.
- Not checked: `og-image.png`, the earlier screenshots under `docs/screenshots/`, actual font file sizes or subsets, computed contrast ratios, the exact character count of the lesson measure.
- `v1.md` Section 20.13 onboarding (`/welcome`, five screens, annunciator lights) and D-25's livery landing are in the plan but not in the code; whether they are cancelled or only deferred is not stated in the files read.
- `tokens.json`, a design-system README and `night-mode.md` are cited by code comments and were not found.
