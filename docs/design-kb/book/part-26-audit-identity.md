# The Audit and the Identity Playbook

This Part does two jobs. It audits the Learn to Fly client as the code stands against the rules of Parts I to XXV, and it says, in order, what to change so that LTF stops looking like a component kit and starts looking like itself. The audit findings are written as rules with the prefix AUD: each states what must be fixed, names the file or component, cites the rules it breaks, gives a severity and a fix. The playbook rules carry the prefix IDN: each specifies a signature element or a thing to remove, at the level of tokens, components, type, color roles, imagery, motion and voice, precisely enough for a developer to open a pull request from it. The Part also rules on every conflict between earlier Parts that the editors collected, and it ends with a sequenced roadmap, a decision list and a review checklist for any future design change.

The evidence here is of two kinds and the grades keep them apart. Where a finding enforces a rule with experimental support (search pop-out, line length, feedback order, typicality and novelty), its grade follows that rule's grade. Where it enforces a standard (WCAG thresholds, target sizes) or craft consensus (one heading system, one name per action), it is graded C, which says nothing about urgency. Severity is a separate scale, defined in the first chapter, and it is the scale the roadmap uses. Recommendations that are my judgment rather than a consequence of a graded rule are labeled as judgment. Nothing here states an aviation number or procedure as fact; where the audit touches aviation content, it says only where the value lives and where it should live.

## How the audit was done

### What was examined

The audit read the client code under `src/` (read only): `src/styles/tokens.css` and `src/styles/index.css` in full, every component in `src/components/`, the four layouts, the pages the findings name, and the feature folders for lessons, quizzes, challenges, progress, reference and layout. It opened every file in `public/`, including `og-image.png`, `favicon.svg` and the four PNG icons, decoded with an image library to check their pixels rather than trusting a thumbnail. It read `index.html`, `manifest.webmanifest`, the Status lines and Decision Log of `v1.md` (D-25, D-27, D-32 and D-33 in full) and Section 21. It re-checked, in the code, every product finding that other writers reported in the editors' memo, and corrected or qualified five of them (see the chapter on drift between plan, code and assets, and the decision list).

Four measurements were made for this Part rather than taken from other Parts:

1. **Contrast.** Every text and ground pair that the components actually combine was computed from the hex values in `tokens.css` with the WCAG relative-luminance formula [@w3c2024wcag], in both themes, without rounding (ACC-007).
2. **Perceptual separation.** Day `ink-2` and `ink-3`, and Day `caution` and `warn`, were converted to Oklab [@ottosson2020perceptual]; the status pair was also run through the Machado deutan simulation matrix at full severity [@machado2009physiologically].
3. **Measure.** Average character width was computed from the Instrument Sans font file that ships in `node_modules` (advance widths over about 740,000 characters of LTF's own lesson Markdown), to convert the lesson column's pixel and `ch` widths into characters per line, which is the unit the reading rules use [@dyson2004physical].
4. **Counts.** Grep tallies over `src/**/*.tsx` excluding tests, for heading classes, hand-inlined cards, bracket sizes and accent hover borders. Counts are approximate (a class string split across lines is missed) and are given to show scale, not as targets.

### How a finding was established

A finding needed three things before it was written as a rule. First, the behavior had to be visible in the code: a class string, a token value, a missing branch, a file. Reported behavior that could not be found in code was left out. Second, it had to break a rule that exists in the rule index, cited by ID; a finding that broke only my taste was not written as a finding. Third, the fix had to be stated in the product's own terms (a token, a component, a file), so that it can be checked.

Positive findings were recorded the same way: what the code does well, which rules it satisfies, and why it must survive the redesign. An audit that lists only defects invites the redesign to throw out what was right, and several of LTF's best properties (the instrument tokens, the honesty lines, the reduced-motion rule, the axe tests) are exactly the things a generic redesign would flatten.

### The severity scale

Severity rates the consequence for a learner, not the grade of the rule broken; a C-grade WCAG threshold can be S1 and an A-grade finding can be S3 (EVD-005, ACC-004). The scale follows the convention that severity is judged by behavioral impact on the task [@nielsen1994enhancing] and that any problem that blocks a learner with a disability is severe whatever its guideline level (USE-060).

| Level | Meaning | Examples here |
| --- | --- | --- |
| S1 | Blocks a task, loses work, or misleads about safety or verification | lost Fly mode ticks |
| S2 | Fails a standard threshold, or a systematic defect on a common path | contrast misses |
| S3 | Inconsistency, craft defect or local confusion | heading dialects |
| S4 | Identity or polish opportunity | eyebrow overuse |

The roadmap orders work by severity within each release, and puts S1 and S2 items that are correctness or access failures before any S4 identity work, because the evidence says polish does not rescue a frustrating flow (USE-076, AES-006).

### Limits, stated plainly

This audit is one reviewer reading code, plus a handful of renders made by the dossier's author (the landing page in both themes and on a phone, the login page, the 404 and the `/learn` error state). No learner used anything for it. That has three consequences, each covered by an earlier Part's rules.

One reviewer finds a minority of the problems that exist. Hertzum and Jacobsen's review of eleven studies showed that the evaluator effect is not peculiar to one method, and that a study analyzed by one evaluator is "highly questionable" as an authoritative statement of an interface's problems [@hertzum2001evaluator]. Pooling evaluators raises coverage steeply up to about five [@nielsen1990heuristic]. This list is therefore a floor, not a census (EVD-026, USE-055, SYS-062).

Severity rated by one person, and especially by the person who found the problem, is not a reliable priority. The rules ask for severity to be rated on the merged list by someone who sees all of it (USE-059). The ratings here are provisional.

Inspection findings are hypotheses about learners, not observations of them (EVD-032, USE-062). That matters most for Fly mode, which no inspection can judge without the simulator running and the learner's eyes moving between screens (EVD-025, USE-063, ACC-080). Every Fly mode finding below is a code-level fact (a size, an order, a storage choice) whose cost to learners is inferred.

Finally, the lesson, challenge, dashboard and reference pages were read from source only. Rendering bugs that only appear with real data are not in this list.

::: {.rule #AUD-001 grade="A"}
**Have a second reviewer, working alone from the same scenarios, inspect the surfaces this audit covers, and re-rate severity on the merged list before scheduling anything beyond the first release.** A single evaluator finds a minority of known problems and evaluators agree poorly on what they find, a result replicated across methods and evaluator experience [@hertzum2001evaluator; @nielsen1990heuristic]. Severity rated by the finder is not a priority list (USE-059). The first release below is safe to start on one reviewer's word because its items are threshold failures and code-level defects that a computation or a test can confirm, not matters of judgment (EVD-061).

*In LTF:* the second pass uses the scenarios in this chapter's last section and the review checklist at the end of this Part. Findings are merged in one table with the AUD IDs as keys; new findings get new AUD numbers in a revision of this Part rather than being folded silently into old ones.
:::

::: {.rule #AUD-002 grade="B"}
**Treat every finding about an operated surface (Fly mode, the Fly tab, quizzes, the debrief, checklists) as a hypothesis, and confirm its severity with beginners at their own setup before investing in anything beyond the fix itself.** Heuristics are good at explaining problems already found, but whether inspection finds the problems learners will actually meet is untested [@nielsen1994enhancing], and views used under time pressure need testing over inspection (EVD-032, USE-062, USE-063). Grade B follows EVD-032.

*In LTF:* the Fly mode findings (AUD-035 to AUD-040) are cheap enough to fix on inspection evidence. Their redesign beyond the fix (the three-region template in IDN-022) waits for one round of the in-context test described in Part IX's protocol, run with the simulator running.
:::

::: {.rule #AUD-003 grade="B"}
**On any surface a learner operates, close its S1 and S2 findings before shipping identity or polish changes to the same surface.** Visual refinement does not compensate for a frustrating flow, and preference for a design can be unrelated to how well people perform with it [@roberts2017preference]; the rules make the order explicit (USE-076, AES-006). Grade B follows those rules.

*In LTF:* the type voice and ruled-sheet changes in the playbook must not reach `FlyModePage`, `FlyPanel`, `QuizBlock` or `DebriefForm` until AUD-032 and AUD-035 to AUD-039 are closed. The landing page and reference hub, which have no S1 findings, can take identity work in parallel.
:::

### The scenarios behind the findings

Findings were checked against five written scenarios, the form the rules ask for before any evaluation (EVD-027, USE-057). They are also the scenarios the second reviewer should use.

1. **First visit.** A beginner arrives at `/` from a shared link on a phone, has never flown, and must decide whether LTF is for them and start Lesson 0.1.
2. **Reading a lesson.** A learner at a desktop, browser default text size raised to 20 px, in Night theme, reads a lesson with a widget and a quiz, gets one quiz item wrong, and marks the lesson complete without an account.
3. **Flying a challenge.** A signed-in learner reads the Brief on a laptop, opens Fly mode on a phone propped beside a controller, ticks steps while flying, meets a random-event alert, then debriefs.
4. **Mid-flight lookup.** A learner on downwind needs one number from the reference pages on the second screen.
5. **Returning.** A learner returns after a week to the dashboard, wants to know what to do next and how they are doing.

A finding counts as S1 or S2 only if it bites in one of these scenarios. Two findings that are serious in principle but rare in these scenarios (the "Being written" links that appear only on preview builds, and the unused `body-md` utility) are rated lower for that reason.

### What this means for Learn to Fly

Keep the audit honest by keeping its limits visible. The AUD list is the starting backlog, not the whole backlog, and it is one person's.

Keep: the habit this book has started, which is to cite rule IDs in every design pull request; the axe tests in `pages/a11y.test.tsx` and `e2e/a11y.spec.ts`, which make the access floor a build property; `DevComponentsPage`, which is the right place to show every component in every state while the audit's fixes land.

Change: the way design findings enter the backlog. Each AUD finding becomes an issue that names its ID, severity and release. Re-rating after the second review (AUD-001) changes the issue, not the rule text.

Build: a small script, run in CI, that recomputes the contrast and separation figures in this chapter from `tokens.css` on every change (COL-058, SYS-024), so that the first release's fixes cannot regress. Build the five scenarios into the pull request template for any change to the pages they touch.

## The system layer: tokens, type, color and components

### What is right and must be kept

The token layer is better than the pages built on it, and the audit starts there because the redesign must not throw it away.

`tokens.css` clears Tailwind's default palette, radii, shadows and fonts (`--color-*: initial` and the rest), so no stray `blue-500` can enter a page. Colors are named by role (`canvas`, `surface`, `ink`, `ink-2`, `accent`, `go`, `caution`, `warn`), and Night is a second mapping of the same roles under `[data-theme='dark']`, which is the structure SYS-016 asks for. Status colors are documented as traveling with an icon or a word, and `Badge` enforces it by adding a 12 px Check, TriangleAlert or OctagonAlert to every status variant (COL-045, ACC-036). The fixed instrument tokens (`instrument`, `arc-*`, `sky`, `ground`, `bezel*`, `display-*`) and chart tokens (`chart-*`) stay the same in both themes and are confined to drawings, which is exactly the separation COL-075 and BRD-034 require and the clearest identity asset in the code. The focus ring is global, 2 px, offset 2 px and never removed (ACC-028). The reduced-motion block in `index.css` neutralizes every animation and transition (MOV-054). `Button` has one shape, three sizes on named control heights and a loading state that keeps the label so the width does not jump. `control-box` gives every field the same height, border, focus and invalid treatment (USE-030).

Instrument Sans for reading and JetBrains Mono for "everything you measure" is a sound division of labor (TYP-010, SCR-029), and the `readout-*` utilities set tabular figures on the mono face (TYP-047, SCR-042). None of this should be reopened on legibility grounds (LEG-028, SCR-030).

### Contrast: four pairs fail, two pairs nearly merge

Computed from `tokens.css` with the WCAG formula [@w3c2024wcag], most pairs pass with room. Four do not.

| Pair | Theme | Ratio | Needed |
| --- | --- | --- | --- |
| `ink-3` on `accent-tint` | Night | 4.31 | 4.5 (text) |
| `ink-3` on `caution-tint` | Night | 4.39 | 4.5 (text) |
| `ink-3` on `warn-tint` | Night | 4.48 | 4.5 (text) |
| `accent-line` on `surface-sunken` | Day | 2.88 | 3.0 (non-text) |

The last pair is not hypothetical. `ProgressBar` in `Progress.tsx` draws its fill in `bg-accent-line` inside a `bg-surface-sunken` track, so the one graphic that says how far a learner has come fails the non-text threshold in Day (COL-054, ACC-035, VIZ-042). `accent-line` also measures 2.96 on `accent-tint`, so it must not be drawn as a meaningful mark on a tinted fill. The Night `ink-3` failures bite wherever quiet meta text sits on a tint: the landing curriculum list sets the module code in `readout text-ink-3` inside a row that turns `bg-accent-tint` when it is the learner's current module.

Two pairs pass the ratio test and still fail their job. Day `ink-2` (Oklab lightness 0.461) and `ink-3` (0.521) are 0.06 apart, under the 0.08 minimum step COL-019 sets for adjacent ramp levels, so the product's second and third text ranks look like one rank on most screens (TYP-046). Day `caution` and `warn` sit 0.02 apart in Oklab after a full-severity deutan simulation [@machado2009physiologically], which means that for a red-green deficient learner the amber and red states are told apart only by their triangle and octagon icons. The icons are there, so this is not a failure of COL-045; it is a reason never to remove them.

::: {.rule #AUD-004 grade="C"}
**Fix the four failing pairs: never set `ink-3` on a tint (use `ink-2`), and darken Day `accent-line` until it clears 3:1 on every ground it touches.** WCAG 2.2 requires 4.5:1 for text and 3:1 for graphical objects needed to understand content, computed on the final colors [@w3c2024wcag]; the product's rules apply the thresholds without rounding and to tinted fills as separate pairs (ACC-034, ACC-035, COL-053, COL-059, SCR-056). Severity S2.

*In LTF:* in components, replace `text-ink-3` with `text-ink-2` wherever the ground can be a tint; the confirmed case is the module code in the landing curriculum list's current row, and a lint check keeps new ones out. For the horizon line, a Day `accent-line` near `#008a92` measures 3.59 on `surface-sunken`, 3.69 on `accent-tint`, 3.82 on `canvas` and 4.16 on `surface` by the same computation; the exact value is chosen with the contrast script described in the method chapter and recorded in the token comment. Because `accent-line` is a slow-layer identity value (BRD-036), the change gets a Decision Log entry.
:::

::: {.rule #AUD-005 grade="C"}
**Separate Day `ink-2` from `ink-3` by at least 0.08 in Oklch lightness, or merge them.** Adjacent ramp levels closer than about 0.08 read as one level (COL-019), and a page needs at least three distinguishable text ranks (TYP-046); lightness steps are judged perceptually, not by equal hex steps [@ottosson2020perceptual]. Severity S3.

*In LTF:* darkening Day `ink-2` to about `#4d4c4a` (Oklab lightness 0.417, 7.9:1 on `canvas`) keeps `ink-3` where it is and opens a 0.10 gap. This is a judgment between two compliant options; the alternative is to drop `ink-3` from Day text entirely and keep it only for placeholders and disabled states, as Part VI allows.
:::

### Surfaces that do not read as surfaces

`Card` sits on `canvas` at 1.09:1 in Day and 1.11:1 in Night; its `line` border is 1.34:1 against `surface` and 1.24:1 against `canvas`; the Day `shadow-1` is two soft blurs at 6 and 8 percent opacity. In practice a Day card is a white rectangle on a near-white page, held together mostly by its rounded corners. That is fine for decoration and weak for meaning: GRD-032 and PER-014 require every boundary that carries grouping meaning to read as a surface in both themes, at a glance. The same weakness explains part of the generic look, because the only thing left for the eye is the shape of the rounded box. The identity playbook replaces most of these boxes with ruled sheets (IDN-008), which is cheaper than making boxes louder.

::: {.rule #AUD-006 grade="B"}
**Stop relying on low-contrast boxes to carry grouping: where a group matters, give it a rule, a heading and space, and keep enclosure for true objects.** Boundaries that carry grouping meaning must read as surfaces in both themes (GRD-032, PER-014), enclosure is for groups that need it (PER-016) and one level of enclosure per section is enough (GRD-033); a bounded region groups what it contains as a principle of its own, so a boundary that is too faint to see leaves its group to proximity alone [@palmer1992common]. Severity S3.

*In LTF:* the dashboard tiles, the module page's lesson rows, the challenge filter card and the lesson completion panel are lists or panels, not objects. Convert them under IDN-008. Keep `Card` for objects: a challenge, a widget, a quiz, a sample challenge on the landing page.
:::

### The root size and the unit system

`index.css` sets `html { font-size: 16px }`. A learner who raises the browser's default text size gets nothing, because the root is pinned in pixels, and every type utility in `index.css` (`display-xl` 64px through `readout-sm` 14px) is also written in pixels with pixel line heights. Browser zoom still works, so this is not a WCAG 1.4.4 failure, but it defeats the setting that older readers are most likely to use (SCR-010, LEG-045). Three Parts state the fix the same way (SCR-012, GRD-049, ACC-039), and there is no conflict to rule on.

::: {.rule #AUD-007 grade="C"}
**Set the root font size to 100% and restate every type utility in `rem` with unitless line heights.** The reader's default text size should carry through the whole scale (ACC-039, SCR-012, GRD-049), and leading belongs to each style as a ratio (TYP-025); relative units let a reader's own text-size setting enlarge text coherently [@marcotte2009fluid]. Severity S2.

*In LTF:* `html { font-size: 100% }`; `display-xl` becomes `4rem/1`, `body-lg` `1.125rem/1.611`, `readout` `1rem/1.5`, and so on, with the same rendered result at the default setting. `control-box` keeps its height in `rem` so fields grow with text. Check every template at a 20 px default (GRD-053).
:::

### Two heading dialects and an open type scale

The type utilities in `index.css` define a coherent scale (`display-xl` 64, `display-lg` 44, `display-md` 32, `heading-lg` 24, `heading-md` 20, `heading-sm` 16, `body-lg` 18, `body-md` 16, `body-sm` 14, `label` 14, `eyebrow` 12, `readout-lg` 32, `readout` 16, `readout-sm` 14, `code` 14). But Tailwind's default `text-*` sizes, weights and tracking were not cleared, and the pages use both. By grep, 16 files use the `display-*` and `heading-*` utilities, and 16 files set headings with raw Tailwind (`text-2xl font-bold`, `text-3xl font-bold`, `text-4xl font-bold`), about 35 instances in all: `BriefTab` (5), `DashboardPage` (6), `AirportPage` (5), `SpeedsPage` (4), `ModulePage` (2), `DebriefForm` (2), `LessonParts` (2), and one each in `LessonPage`, `SimpleBlocks` (the lesson block h2), `ResultView`, `FlyModePage`, `ChecklistPage`, `GlossaryPage`, `RoadmapPage`, `NotFoundPage` and `RootErrorPage`. The result is that an h2 is 24 px at weight 700 on app pages, 32 to 44 px at 600 to 700 on the landing page and 20 px at 600 on the reference hub. `body-md` is defined and used nowhere. Bracket sizes (`text-[11px]` and similar) appear mostly in widget SVG files, where they are user units, but also in `Logo.tsx` (the 22 px wordmark) and `CourseBadge.tsx`, which the editors' memo missed.

This is the single most visible craft defect in the product, and it is an identity defect as well: a type voice cannot be recognized if it is not repeated identically (BRD-028, BRD-031).

::: {.rule #AUD-008 grade="C"}
**Replace every raw heading class with the token utilities, giving each heading level one style per surface class.** Every text size comes from a named token (TYP-040, SCR-048, GRD-012), each level has one style per surface class (TYP-042, SCR-050), same function takes the same form (EVD-068, PER-022, USE-030), and the type voice repeats identically (BRD-028); repetition is what builds familiarity with a visual vocabulary [@montoya2017reexamination]. Severity S2.

*In LTF:* page titles on app and reading pages use `display-md` through `PageHeader`, including `LessonPage` (now `text-3xl font-bold sm:text-4xl`) and `FlyModePage`; section h2s use `heading-lg`; h3s use `heading-md`. The lesson block heading in `SimpleBlocks.tsx` and the Markdown `h3` in `MarkdownContent.tsx` move onto `heading-lg` and `heading-md`. Display sizes larger than `display-md` stay on display surfaces (TYP-044).
:::

::: {.rule #AUD-009 grade="C"}
**Reset Tailwind's default type sizes, weights, leading and tracking, and fail lint on bracket values outside an allowlist for widget drawing code.** The token scale must be the only scale (SYS-018, GRD-009), and consistency is an ongoing process that needs ownership and enforcement, not memory (USE-036) [@nielsen1989coordinating]. Severity S3.

*In LTF:* add `--text-*: initial`, `--font-weight-*: initial`, `--leading-*: initial` and `--tracking-*: initial` to the `@theme` reset in `tokens.css`, then re-add only the roles the scale names. The allowlist covers `src/features/widgets/**` SVG labels and nothing else; `Logo.tsx` gets a `wordmark` utility instead of `text-[22px]`. Delete `body-md` or make it the lesson body's name (see AUD-029).
:::

### Faces and features as shipped

`main.tsx` imports `@fontsource-variable/instrument-sans` and `@fontsource-variable/jetbrains-mono`, which load the upright weight axis only: 400 to 700 for Instrument Sans and 100 to 800 for JetBrains Mono, both with `font-display: swap`. The package ships Instrument Sans italic files and a second "standard" file with a width axis (75 to 100), and neither is loaded. So every `em` in lesson Markdown, the italic radio calls in `TrafficPattern.tsx` and the italic labels in the sectional chart are slanted by the browser (TYP-011, SCR-024, SCR-041). Opening the font file shows that its OpenType features are `pnum` and `tnum` (no old-style figures, no small caps), and that capital I and lowercase l are both plain vertical bars of the same height, 82 and 80 units wide: indistinguishable in practice (TYP-017, LEG-022, SCR-028). That is acceptable in prose, where context disambiguates, and it is the reason identifiers belong in the mono face (SCR-029).

`index.css` also sets `-webkit-font-smoothing: antialiased` on `html`, which overrides the platform's text rendering on macOS for every page without a recorded test (SCR-025).

Bold mono is common in pages (`font-mono text-2xl font-bold` for dashboard stats and speed table cells, `font-mono text-5xl font-bold` for the result percentage) although the `readout` utilities are weight 500. Two weights for the same role at different sizes is the kind of detail inconsistency that EVD-074 calls a design defect.

::: {.rule #AUD-010 grade="C"}
**Load a real italic for every style that slants, or remove italic from the product; never let the browser synthesize it.** Synthesized italic is a distortion of the face, and no instruction or radio call belongs in italic in any case (TYP-011, SCR-024, SCR-041, LEG-031); the CSS Fonts specification already forbids synthesized condensed and expanded faces, on the same principle that a letter's proportions are part of its design [@w3c2026cssfonts]. Severity S3.

*In LTF:* the simplest compliant fix is removal: Markdown `em` renders as `font-semibold` (TYP-045), the `TrafficPattern` radio call loses `italic` and keeps its quotation marks (TYP-052), the chart label keeps its color. If italic is wanted for titles and defined terms, import `wght-italic.css` and count its bytes (SCR-036).
:::

::: {.rule #AUD-011 grade="C"}
**Set every measured value through a `readout` utility at weight 500, and remove `font-bold` from mono text.** One weight per readout size, from the tokens (TYP-049, SCR-039, SCR-047); the same function takes the same form (EVD-068), and detail errors repeated across pages are design defects (EVD-074) [@vignelli2010canon]. Severity S3.

*In LTF:* add `readout-xl` (48 px, `3rem/1`) and `readout-2xl` (64 px) for the result percentage and the Fly mode stopwatch; replace `font-mono text-2xl font-bold` in `DashboardPage` and `SpeedsPage` with `readout-lg`, and `font-mono text-5xl font-bold` in `ResultView` with `readout-xl`. Decide the smoothing override with a side-by-side test on macOS in both themes, and remove it if the test is not run (SCR-025).
:::

### Components: the inlined card and its siblings

`Card` exists, with states (`default`, `done`, `current`, `locked`), slots and a comment that "state is carried by the badge, the eyebrow and the fill, never a colored left border". The pages mostly ignore it. By grep, 26 files contain a hand-inlined variant of `rounded-lg border border-line bg-surface` (45 occurrences), with padding that varies between `p-2`, `p-3`, `p-4`, `p-5` and `p-6` and a shadow that is sometimes there and sometimes not. Six of them add `hover:border-accent` (`ChallengesPage`, `AirportsPage`, `ChecklistsPage` and three in `LessonParts`), which spends the horizon-line color on a generic hover state (BRD-013, COL-072). `QuizBlock` shows its result in a box with `border-l-4` in `go` or `warn`, the colored left stripe the `Card` comment forbids.

::: {.rule #AUD-012 grade="C"}
**Build every boxed object from `Card` (or a named variant), convert boxed lists to ruled lists, and remove accent hover borders.** Same function, same form (EVD-068, USE-030, INT-014), cards for objects only (PER-016), an inventory with a keep, merge or remove decision for each variant (SYS-032), the horizon line for position and progress only (BRD-013, COL-072); a small kit of container forms is how identity systems keep many hands consistent [@vignelli1970graphics]. Severity S3.

*In LTF:* interactive cards use `Card interactive` (border rises to `line-strong` on hover, plus a chevron, INT-008); `QuizBlock` result uses the shared feedback form in IDN-019 without a side stripe. The padding of a card is one token per card size (BRD-037).
:::

### Status colors spent on non-status jobs

`Callout.tsx` maps nine content types onto status tints: `safety` and `decision` on `warn-tint`, `tip` on `go-tint`, `classic` and `verify` on `caution-tint`, `sim` and `memory` on `accent-tint`, and only `note` and `real-world` on a neutral `surface-sunken`. `YouTubeEmbed.tsx` draws the landing page's largest saturated mark, a 64 px play disc, in `bg-warn`. `BetaBanner.tsx` paints a full-width `caution-tint` strip above the header on every route. A learner who has met red on a play button, green on a tip and amber on a panel note has learned that these hues mean "a kind of box", which is the opposite of what the Fly mode alert needs.

::: {.rule #AUD-013 grade="B"}
**Use `go`, `caution` and `warn` (and their tints) only for status, and give every non-status content type a neutral treatment carried by its icon and title.** Status hues mean status (COL-068, PER-051), the warning red is reserved for act-now conditions and never decoration or brand (COL-067, PER-044, SKL-075, BRD-014), and a target pops out only when ordinary items do not share its strong feature (PER-036, PER-037) [@okabe2008color]. Severity S2.

*In LTF:* `tip`, `classic`, `sim`, `memory`, `note`, `real-world` and `decision` share one neutral fill (`surface-sunken` with a `line` hairline) and keep distinct icons and title words; `safety` keeps `warn-tint`; `verify` moves to the honesty form (IDN-014). The play disc becomes `ink` with an `on-ink` glyph. The beta notice leaves `caution-tint` (see AUD-035 and IDN-014). The `decision` ruling is in the chapter on rulings.
:::

::: {.rule #AUD-014 grade="C"}
**Give the dashed border one meaning, "not yet": locked, unpublished or unverified.** Every visual code has one documented meaning (SYS-015), one picture one meaning (ICO-018), and antipatterns are recorded beside patterns (SYS-011); overloading a cue erodes it [@romaniuk2018building]. Severity S3.

*In LTF:* dashed borders now mean three things: the `verify` callout, a locked `LessonPath` pin, and every empty and error state in `States.tsx`. Keep dashed for the first two; give `EmptyState` and `ErrorState` a solid or no frame (AUD-047).
:::

### Icons, radii and the missing design sources

lucide-react is imported in 64 places at stroke widths of 1.5, 1.75, 2, 2.5 and 3; 1.75 is the most deliberate of them, used by `Callout`, `BetaBanner`, `ThemeToggle` and the landing icons (ICO-017, BRD-030). Radii are 6, 10, 16 and 999 px plus a few bracket values (`rounded-[2px]`, `[3px]`, `[4px]`). And the comment at the top of `tokens.css` cites `tokens.json`, a design-system README and `night-mode.md` for its rules and contrast figures; none of those files exists in the repository, so the code's own rationale cannot be checked (SYS-006, TYP-009).

::: {.rule #AUD-015 grade="C"}
**Write the design-system README that the token comments cite, and point every design comment at it.** One README holds the principles, each token's role and measured contrast, and the contribution process (SYS-006, SYS-024, TYP-009); identity rules must sit where every contributor, human or agent, will read them (BRD-035) [@kholmatova2017design]. Severity S3.

*In LTF:* `docs/design-system.md` (or `src/styles/README.md`), linked from `AGENTS.md` and the `ltf-review` client checklist. It records the stroke table (1.75 at 16 to 24 px, 1.5 at 32 px, 2 at 12 to 14 px), the radius set after IDN-009, the contrast table from the CI script, and the asset register (IDN-001). Comments in `tokens.css` and `index.css` stop citing absent files.
:::

### Fonts in loading

Fonts load through Fontsource's CSS with `font-display: swap`, no metric-matched fallback and no preload. On a reading page that means a visible swap from `system-ui` to Instrument Sans after text has rendered, with a change of line breaks if the fallback's metrics differ (SCR-033, SCR-034).

::: {.rule #AUD-016 grade="C"}
**Declare LTF's own `@font-face` rules with `font-display: fallback` for the app and `optional` for Fly mode, and give the fallback face metric overrides so a late swap does not move text.** Text should not change face after reading starts, and a swap should change neither size nor line breaks (SCR-033, SCR-034, SCR-035); the CSS Fonts specification defines the descriptors that do this [@w3c2026cssfonts]. Severity S3.

*In LTF:* Instrument Sans has an x-height of 510 units per 1000 (read from the font file), which is the value `font-size-adjust` or `size-adjust` should match on the fallback. Count the font bytes in the size budget: the Latin upright weight file is about 30 KB, the file with the width axis about 57 KB (measured from the package files), JetBrains Mono about 40 KB (SCR-036).
:::

### What this means for Learn to Fly

The system has good bones and loose joints. The values are role-named, themed, mostly compliant and in one file; the joints between values and pages (type, cards, status colors, accent use) were left open, and pages filled them with framework defaults.

Keep: the `@theme` reset, the role names, the Night mapping, the fixed instrument and chart tokens, the global focus ring, the reduced-motion block, `Button`, `control-box`, `Badge` icons, the Instrument Sans and JetBrains Mono division.

Change: the four failing pairs and the Day ink ramp (AUD-004, AUD-005); the pixel root and pixel utilities (AUD-007); the two heading dialects and the open Tailwind scale (AUD-008, AUD-009); synthesized italic and bold mono (AUD-010, AUD-011); inlined cards, accent hovers and the quiz stripe (AUD-012); status tints on non-status callouts, the red play disc and the amber banner (AUD-013); the overloaded dashed border (AUD-014).

Build: the missing README with the contrast table and asset register (AUD-015); the font-loading rules with a metric-matched fallback (AUD-016); a lint rule and a token test that keep all of it from drifting back.

## Drift between plan, code and outward-facing assets

### Three identities in one product

A learner can meet LTF in three forms today, and they are three different products.

The plan describes one. `v1.md` Section 21 specifies Inter for text, a sky-blue primary, an amber accent, a cool blue-tinted page and a navy dark mode, and decision D-25 (recorded 2026-10-03) adds the "Skyhawk livery" landing: Big Shoulders Display, a livery-red accent on the homepage only, navy bands, a detailed Skyhawk illustration, a "night livery" navy dark mode and a tail-fin mark "with the red stripe, used site-wide (header, loading screen, favicons, Open Graph image)". D-25's reason is that the owner picked it "as the most distinctive and on-topic of the three" mock-ups compared.

The share card shows a second. `public/og-image.png`, opened for this Part, is the D-25 direction: a navy ground, condensed uppercase "LEARN TO FLY / THE SKYHAWK." in white and coral, the fin with a red stripe beside an uppercase wordmark, a line "Cessna 172 · Microsoft Flight Simulator 2024 · Simulation only" and red and white diagonal bands across the foot. This is the image that appears when anyone shares any LTF link.

The pages show a third. The shipped design (its file comments call it "design system 2026") is warm off-white and near-black, Instrument Sans throughout with no display face, one teal accent, and a fin whose stripe is teal (`fill-accent-line` in `Logo.tsx`, `#009ca5` and `#00c3cb` in `favicon.svg`). The landing page's own comment says "no airplane illustration". There is no Decision Log entry for this change; the next free ID is still D-34.

The browser and home-screen icons add a fourth wrinkle. `icon-192.png`, `icon-512.png` and `icon-512-maskable.png` show the teal-striped fin on the warm ground, matching the pages. `apple-touch-icon.png` is broken: decoded, its 180 by 180 pixels contain two partial copies of the fin, one in rows 36 to 92 and another cut off at the bottom edge from row 129, with no complete mark anywhere. Anyone who adds LTF to an iPhone home screen gets a tile with two fragments of a fin on it.

Smaller drift completes the picture. `index.html` carries a default title that joins "Learn to Fly" and "Learn to fly the Cessna 172 in MSFS 2024" with an em dash (forbidden in learner-facing copy by `AGENTS.md`) and does not follow the "Page title · Learn to Fly" format that `usePageTitle` uses everywhere else (NAV-051, WRT-049). `manifest.webmanifest` sets `theme_color` to `#171614` (ink) while `index.html` sets the light theme color to `#f7f5f3` (canvas), so the installed app and the browser tab tint the window chrome differently. The plan's onboarding (D-27, Section 20.13: a five-screen `/welcome` flow behind a "Get started" button) is not built, and the landing CTA goes straight to Lesson 0.1; the plan's Status line still lists onboarding as in progress (steps 12.11 to 12.15).

### Why this drift is the first identity problem

Distinctive assets are memory cues built by consistent repetition; two partly implemented identities split exposure between them, so neither builds [@sharp2010how; @romaniuk2018building]. Rand's advice for marks is to change them only when they are ugly, outdated or inappropriate [@rand1991logos]. Whatever the owner decides about direction, the worst state is the present one, in which the share card advertises a product the learner never meets. Part XX made this its fourth rule (BRD-004); the audit confirms the facts and adds the broken touch icon.

::: {.rule #AUD-017 grade="C"}
**Record the identity direction in a Decision Log entry (D-34), mark D-25 superseded or reinstated, and bring every outward-facing asset into line with it in the same release.** Every change of identity direction is recorded and finished or reversed everywhere (BRD-004, SYS-063, SYS-083), and departures from the plan get Decision Log entries (EVD-006, SYS-033); consistent repetition is what builds distinctive assets [@sharp2010how]. Severity S2.

*In LTF:* D-34 states the direction chosen in the identity playbook (IDN-002), the alternatives considered (the D-25 livery, the shipped type-led design, and the instrument-and-handbook direction this Part recommends), and the reason. It updates the `v1.md` Section 21 tokens and fonts to match `tokens.css`, and the same pull request replaces `og-image.png`.
:::

::: {.rule #AUD-018 grade="C"}
**Replace `apple-touch-icon.png` now, and generate every icon and share image from the shared fin paths by a script.** The mark is drawn once and every size is generated from that drawing (BRD-023), it must work at small sizes and on both grounds (BRD-021), and no broken asset may reach learners (AES-049); recognition depends on identical repetition of the cue [@romaniuk2018building]. Severity S2 (the icon is visibly broken on one platform).

*In LTF:* a script in `scripts/` renders `favicon-32.png`, `apple-touch-icon.png` (180 px, with the platform's corner-safe margin), the 192 and 512 px icons, the maskable icon and the default `og-image.png` from the `FIN`, `STRIPE` and `GAP` path constants in `Logo.tsx`, exported for the script so there is still only one drawing. Its output is committed and its run is part of `/ltf-review` when `Logo.tsx` changes.
:::

::: {.rule #AUD-019 grade="C"}
**Make the default document title follow the house format without an em dash, and make the manifest and the meta theme colors agree.** One page-title format everywhere (NAV-051, WRT-049) and no em dashes in learner copy; every outward surface should be attributable and consistent [@ehrenberg2002brand]. Severity S4.

*In LTF:* `<title>Learn to fly the Cessna 172 in MSFS 2024 · Learn to Fly</title>`; `manifest.webmanifest` `theme_color` set to the canvas value that `index.html` uses for the light scheme.
:::

### Honesty statements that disagree

LTF's honesty lines are its most distinctive behavior (BRD-045), and two of them contradict each other. `BetaBanner.tsx`, on every page: "Lessons and challenges are still being checked in the sim, so you may hit rough edges or content that changes." `AboutPage.tsx`: "Everything that is open has been flown and checked in MSFS 2024, but the site is new". The landing FAQ: "We flew and checked every open module in MSFS 2024". D-32 is the policy that decides which is true: a module is published only when every lesson and challenge in it is verified, and only published modules are shown. Under D-32 the About page and the FAQ describe the policy, and the banner understates it, or the banner describes a reality in which verification is still running on published material and the other two overstate it. The audit cannot tell which; the owner can.

Either way, a learner who reads both learns that one of LTF's honesty statements is wrong, which is the most expensive kind of credibility error for a product whose brand rests on saying what it has checked (AES-054, DEC-061).

::: {.rule #AUD-020 grade="C"}
**Make every honesty statement say the same thing, in one wording pattern, and check it against D-32 before release.** Honesty statements must be consistent with each other (AES-054), judged by the net impression a beginner forms (DEC-058), and written as the limit followed by what it means (WRT-055); overstating value or making promises a product cannot keep is the failure Rams's honesty principle names [@rams2026good]. Severity S2, because it misleads about verification.

*In LTF:* if D-32 holds in practice, one sentence serves the banner, the FAQ and About: "Everything open here has been flown and checked in MSFS 2024. The site is new, so you may still find mistakes. Report a problem." If it does not, the About page and FAQ change instead. The wording lives in one constant in `features/layout/navigation.ts` beside the existing simulation-only line.
:::

### The plan sections that no longer describe the product

Two other plan sections describe things the code does not do, and the audit records them so that agents reading `v1.md` do not rebuild the old direction by mistake.

Section 21 (Design system) still names Inter, Big Shoulders Display for the homepage's "big uppercase headings", the sky-blue primary, the amber accent, the blue-tinted grounds, the 6, 12 and 9999 px radii and a logo with a red livery stripe. It also says one thing the code has drifted away from and should return to: a reading measure of 60 to 75 characters. An agent following AGENTS.md's routing table to "Client pages and components: Sections 19 to 23" will read those values and either reintroduce them or face a contradiction with `tokens.css` that nothing resolves. This is precisely the "most available consistency" trap that Grudin names [@grudin1989case] and that BRD-035 asks to close by putting the identity rules where every contributor reads them.

Section 20.13 and D-27 specify the `/welcome` onboarding. The book's forms and onboarding rules argue against parts of it: no carousel tour before the first task (FRM-051), every first-run step skippable and measured (FRM-054), the first screen a real task (FRM-047, INT-065). The ruling on that conflict is in the chapter on rulings. Whatever the ruling, the plan and the product must say the same thing.

::: {.rule #AUD-021 grade="C"}
**Rewrite `v1.md` Section 21 to describe the shipped and decided system, and resolve the D-27 onboarding in the Decision Log rather than leaving it half planned.** Slow-layer changes go through the Decision Log (SYS-033, BRD-036), the plan is the spec agents read (SYS-042), and departures from it are recorded with reasons (EVD-006, SYS-083); a design system's rules must be written for the people and agents who apply them [@kholmatova2017design]. Severity S3.

*In LTF:* Section 21 becomes a short pointer to the design-system README (AUD-015) plus the decisions this Part settles. D-27 is either confirmed with the changes ruled in the rulings chapter or superseded by an entry that says the first lesson is the onboarding.
:::

### Corrections to what other writers reported

The editors' memo listed product findings for re-checking. Most held. Five need correcting or qualifying, and the corrections matter because the roadmap's priorities depend on them.

1. **"Bracket sizes appear only in widget files."** They also appear in `Logo.tsx` (`text-[22px]` for the wordmark) and `CourseBadge.tsx`. The fix (AUD-009) includes both.
2. **"Landing rows marked 'Being written' link to unpublished modules."** True in the code, which wraps every row in a `Link`, but under D-32 the public API returns only published modules, and the static fallback filters to published ones. The "Being written" state therefore appears only on preview builds with drafts included. The finding stands (NAV-017) at S3, not S2.
3. **"Day `ink-2` and `ink-3` nearly identical."** Their text contrast differs (6.53 and 5.04 on `canvas`), and their Oklab lightness differs by 0.06. "Too close to be two ranks" is accurate; "nearly identical" overstates it.
4. **"The inlined card class string repeats in 23 files."** By this audit's grep it is 26 files and 45 occurrences, depending on how variants are counted. The order of magnitude is the finding.
5. **"34 files use `font-bold`, 29 use the token utilities."** The second figure depends on which utilities count. For heading utilities alone (`display-*`, `heading-*`) the count is 16 files, the same as the files that set headings with raw Tailwind classes. Either way the two dialects are about equally common.

A sixth item is new: the apple touch icon is broken, which no earlier Part reported.

### What this means for Learn to Fly

The product has to stop being three products before it can become one distinctive one. The cost of the fix is low: one Decision Log entry, one script, one regenerated image set, one corrected title, one honesty sentence and one rewritten plan section.

Keep: the fin drawing and the decision to make it the mark; the `usePageTitle` format; D-32 as the verification policy; the honesty lines as a family.

Change: `og-image.png`, `apple-touch-icon.png` and every PNG icon, regenerated from `Logo.tsx`'s paths (AUD-018); the `index.html` default title and the manifest color (AUD-019); the three beta statements, made one (AUD-020); `v1.md` Section 21 and the D-27 plan (AUD-021).

Build: Decision Log entry D-34 for the identity direction (AUD-017), written before any identity work in the playbook starts, so that the playbook's specifications are implementations of a recorded decision rather than one more undocumented direction.

## The surfaces: landing, curriculum, module and lesson

### The landing page

`LandingPage.tsx` (697 lines) is clear, honest and conventional, and it is the page that most deserves the owner's complaint. Its structure is the common marketing order: a hero with eyebrow, headline, subline, two buttons and a media block; a row of four stats; a Module 0 band; a five-step "How a lesson works" icon row; a curriculum list; a challenge band with a sample card; a three-card "What you need" row; a two-column FAQ; and a final call to action. Each band is a canvas or surface stripe with `py-16 sm:py-24` padding.

What is right: the h1 ("Yes, you can fly a plane.") and the final line ("Lesson 0.1 takes five minutes. Start there.") are the product's voice at its best; the primary action goes straight to the first lesson without an account (FRM-006, FRM-047); the note under the buttons says "You can start without an account. Any edition of MSFS 2024 works, on PC or Xbox. For simulation use only."; the stats come from the API with a static fallback; the Module 0 card shows the real `LessonPath` with the learner's progress; the sample challenge card is a faithful miniature of a real challenge brief; the FAQ answers "Is this real flight training?" with "No" in its first word. The page uses no stock photography and no decorative airplane, which keeps it out of the cheapest clichés of the category (BRD-012).

What is generic is the content of the bands, not their order. Simple, typical layouts are judged most appealing at first glance [@tuch2012role], and such judgments form consistently within a fraction of a second [@lindgaard2006attention], so the order can stay (BRD-002, AES-017). But the things only LTF has (drawn instruments, the lesson path, the Brief, Fly and Debrief sequence, the verification habit) appear below the fold or not at all, while the first view's one large visual is a click-to-load video with no thumbnail and a red play disc (BRD-050). The five-step row uses stock lucide glyphs (BookOpen, Eye, SlidersHorizontal, PlaneTakeoff, ClipboardCheck) that any course could show. An uppercase tracked eyebrow sits over the h1 and over most h2s ("Where you start · Module 0", "How a lesson works", "The curriculum", "Challenges", "What you need"), restating what the heading says (TYP-038, SCR-051).

Two details are correctness issues rather than style. The tier legend hard-codes an aviation tolerance string for each tier in the page's TypeScript (`TIERS` in `LandingPage.tsx`), and the sample challenge's setup chips and criteria hard-code values as well, outside `content/aircraft.yaml` and the challenge content files. If the challenge's criteria change, the landing page will advertise the old ones. And when the API is unreachable, the stats fall back to fixed figures (including a fixed hours figure) presented exactly like live counts.

::: {.rule #AUD-022 grade="B"}
**Put one unmistakably LTF element in the landing hero's first view, and take the warning red off the play control.** The first glance judges appeal from overall complexity and typicality [@tuch2012role; @lindgaard2006attention], so the first screen should stay simple, typical and still carry a cue that could only be LTF's (BRD-050, AES-011); a status color is never brand (BRD-014, COL-067). Severity S3.

*In LTF:* keep the 7fr/5fr hero grid. In the right column, show the instrument drawing specified in IDN-011 instead of the bare video frame, and move `YouTubeEmbed` to the "How a lesson works" band with an `ink` play disc. The h1 takes the display voice (IDN-004).
:::

::: {.rule #AUD-023 grade="C"}
**Move every aviation value on the landing page out of page code and into the content tokens, and label any static fallback figure as a fallback.** Aviation values live in tokens and data files so one change updates every surface (SYS-035, WRT-058), and fallback figures must never be presented as live (DEC-052); a page must not promise more than the product behind it delivers [@rams2026good]. Severity S2, because the advertised criteria can drift from the real ones.

*In LTF:* the tier legend and the sample challenge card read their values from the published challenge content (or `aircraft.yaml` tokens) at build time, with the same `verify` gate as lessons. The stats band renders the fallback with a quiet "Figures as of the last build" note, or hides the hours figure until the API answers.
:::

::: {.rule #AUD-024 grade="C"}
**Remove eyebrows that restate their heading, and keep only those that carry an identifier or a status the heading lacks.** Capital labels belong only where they say something the heading does not (TYP-038), uppercase tracked text is not stacked over every heading (SCR-051), and an inherited perceptual signature is an identity decision, not a default (BRD-003) [@hekkert2003most]. Severity S4.

*In LTF:* on the landing page, drop the eyebrows over "How a lesson works", "The curriculum", "What you need" and the challenge band; the Module 0 band keeps a code tag ("M0", IDN-006) in place of "Where you start · Module 0". The hero eyebrow ("Free · Public beta · Cessna 172 Skyhawk · MSFS 2024") becomes a plain `body-sm` line under the buttons, merged with the existing note.
:::

### Curriculum and module pages

`CurriculumPage` renders `CurriculumMap`: each module a `<details>` card on a teal connector, the current module `border-accent-line bg-accent-tint`, with an eyebrow, a `heading-md` title, a summary, a count line and, when signed in, a 56 px `ProgressRing`. Inside, `eyebrow` sub-heads ("Lessons", "Challenges") sit over `min-h-11` link rows. The structure is right: one overview, two levels to a lesson (NAV-022), the course order visible as a line (NAV-001), the current module marked by more than color. Two things are not. A ring per module asks learners to compare angles across cards, which is the encoding the visualization rules reserve for one part of one whole (VIZ-012); comparison across modules wants one encoding, a bar in an aligned column (VIZ-035). And the eyebrow sub-heads inside each card are the third level of uppercase label on one screen.

`ModulePage` opens with `PageHeader` (`display-md` title), then sets its "Lessons" and "Challenges" h2s in raw `text-2xl font-bold` (AUD-008), and lists rows in bordered `rounded-lg bg-surface p-2` boxes. Lesson prerequisites, which content declares, are rendered nowhere in the client (a search of `src/` finds no prerequisite display), so a learner arriving at a lesson from search or a link cannot see what it assumes (NAV-054, NAV-007).

The landing curriculum list wraps every module row, including those marked "Being written", in a link to `/learn/:slug`. Under D-32 that state appears only on preview builds, but a link to a page that cannot deliver must say so or not be a link (NAV-017).

::: {.rule #AUD-025 grade="C"}
**Render modules that are not open as plain rows, not links, on every build.** A link must never promise more than its destination delivers (NAV-017); a page must not promise more than it delivers (AES-016) [@rams2026good]. Severity S3 (preview builds only).

*In LTF:* in `LandingPage.tsx`, rows where `isOpen(module)` is false render as a `div` with "Being written" and no chevron.
:::

::: {.rule #AUD-026 grade="C"}
**Use one encoding for module progress across the product: a `ProgressBar` in an aligned column, with the ring kept only as a single-card glyph with its value printed.** One quantity has one encoding everywhere (VIZ-035), rings show one part of one whole (VIZ-012), and quantities compared across items go on a common scale [@tufte1990envisioning]. Severity S4.

*In LTF:* `CurriculumMap` summaries show a thin `ProgressBar` with its `readout-sm` value at a fixed position on the right of each module row; the dashboard's per-module bars stay; `ProgressRing` survives on the dashboard Continue card only.
:::

::: {.rule #AUD-027 grade="C"}
**Show each lesson's prerequisites as links at the top of the lesson and in the module list.** Pages link backward to what they assume and forward to what builds on them, generated from the same data (NAV-054), and the information a decision needs sits beside it (NAV-007) [@nielsen1994enhancing]. Severity S3.

*In LTF:* a one-line "Builds on: L0.2 Set up your controller" under the lesson meta row, in `body-sm` with a mono code, generated from the lesson's frontmatter; the same line on `ModulePage` rows that have prerequisites outside the module.
:::

### The lesson page

`LessonPage.tsx` is the product's working surface and it is mostly well built: a three-zone grid with a sticky `SectionNav` spine on the left, the article in the center, glossary chips on the right at `xl`, a mobile section `Select`, a completion panel and previous and next cards. The section spine marks the active section with the horizon line and a mono number, which is the quiet signature BRD-051 asks for. Three things work against reading.

**The measure is too long.** The article is `max-w-[800px]` and `MarkdownContent` inherits the 16 px body. Using the advance widths in the shipped Instrument Sans file, averaged over LTF's own lesson Markdown, a full 800 px line at 16 px holds about 111 characters, and at 18 px about 98. The design system's `--container-measure: 68ch` would not fix it: `ch` is the width of the zero (666 units per 1000 in this face), so 68ch holds about 100 characters of real text at any size. Parts II, III, IV and V all ask for roughly 45 to 75 characters (TYP-018, LEG-035, SCR-017, GRD-023), and so does `v1.md` Section 21.3 ("Measure: 60–75 characters"). Screen studies found readers rating about 55 characters easiest, with one finding better comprehension at 55 than at 100 [@dyson2004physical]. The lesson body is also 16 px where `Prose` (used only on About, Disclaimer, Privacy and Terms) is 18 px (`body-lg`); the legibility Parts ask for the larger size on reading surfaces (LEG-019, SCR-007), citing print-size evidence that reading slows below a critical size [@legge2011print].

**The top is crowded.** Before the first paragraph a visitor can meet: breadcrumbs, the mono lesson label, the h1, a meta row, an `UnverifiedWarning` on drafts, the `SignupBanner` ("Sign up (free) to save your progress and challenge scores."), a resume bar in `accent-tint`, the objectives `Card` in `accent-tint`, and on phones the sticky section `Select`. Promotional and account prompts belong after the text or in page furniture (TYP-057, GRD-040, AES-050), and the stack above the first block should show only what this learner needs on this visit (USE-051, SYS-075, GRD-065).

**Verification is invisible.** The lesson API returns `lastVerifiedAt` (it is in `shared/schemas/api.ts`) and `SpeedsPage` already prints "Last verified" with the sim version, but `LessonPage` shows neither. A lesson that has been flown and checked looks identical to one that has not, except that the draft carries a badge (AES-047, AES-053, USE-054).

::: {.rule #AUD-028 grade="B"}
**Cut the stack above the first lesson block to the title, the meta row, at most one notice and the objectives, and move the sign-up prompt to the completion panel.** Promotional prompts stay out of the reading column before the text (TYP-057, GRD-040, AES-050), each element above the first block must be relevant to this learner on this visit (USE-051), and peripheral elements beside task content are a cost even when ignored (PER-064): in an eye-tracking study, static and animated banners both slowed search although participants rarely looked at them [@burke2005highcost]. Severity S3.

*In LTF:* `SignupBanner` renders inside the completion panel beside "Mark lesson complete", where the account gives the learner something they asked for (FRM-006). The resume bar and objectives merge into one block when both apply. The objectives block leaves `accent-tint` (IDN-005); it is not the learner's position.
:::

::: {.rule #AUD-029 grade="B"}
**Set lesson prose at `body-lg` (18 px) in a column of about 30em, and let only figures, tables and widgets use the wider 800 px track.** Lesson prose should run about 45 to 75 characters per line (TYP-018, LEG-035, SCR-017), the measure is specified in a unit tied to the text and calibrated to the face (TYP-019, SCR-018, GRD-023), and reading text should be larger than the 16 px default (LEG-019, SCR-007); comprehension was better at 55 characters than at 100 in screen studies [@dyson2004physical]. Severity S2.

*In LTF:* `--container-measure` becomes `30em`, which in Instrument Sans holds about 66 characters of LTF's lesson text (by the same font-file computation). `MarkdownContent` paragraphs, lists, callouts and quiz stems take `max-w-measure` and `body-lg`; `WidgetBlock`, tables and images keep the 800 px article width as the one sanctioned wide width (GRD-028). `Prose` adopts the same token. A unit test renders a lesson paragraph and asserts 45 to 75 characters per line at 360, 768 and 1280 px. This restores `v1.md` Section 21.3 rather than departing from it, so it needs no Decision Log entry. The ruling on the competing measure values is in the rulings chapter.
:::

::: {.rule #AUD-030 grade="C"}
**Show the verification date, the sim version and a link to how lessons are checked in every lesson's meta row.** Every fact page shows the date it was last verified and the version it was checked against (AES-047), verification status stays visible wherever an aviation fact is shown (USE-054), and unverified content must look different from verified content (AES-053); honesty about what has been checked is LTF's most ownable trait (BRD-045) [@romaniuk2018building]. Severity S2.

*In LTF:* the meta row reads "About 8 minutes · Checked in MSFS 2024 (sim version) on 12 Oct 2026", in the honesty form (IDN-014), with the date and version in `readout-sm`. Drafts show the unverified variant of the same line in place of the separate `DraftBadge`.
:::

### Quizzes inside lessons

`QuizBlock` is a good conventional quiz: a card, a prompt in `text-lg font-semibold`, options with radio or checkbox semantics, a "Check answer" button, a live result and an explanation for right and wrong answers alike. Three details need fixing. The verdict is "Correct!" with an exclamation mark, against the voice rules for routine feedback (WRT-039, WRT-053). The result box uses `border-l-4` in `go` or `warn` on a status tint, the side stripe the component system rejects elsewhere. And answers for visitors are kept in `sessionStorage` (`quizStore.ts`), so a refreshed tab keeps them but a new tab or a returning visit loses them (ACC-061, INT-045).

`QuizPanel`, the quiz mode shared by widgets, is worse on the point that matters most for learning. After a wrong answer it shows "Not quite. Try again." and nothing else; the explanation is rendered only for a correct answer (`{result.correct && question.explanation}`). Feedback that gives the correct answer and a reason after every answer is one of the better-supported rules in the book (LRN-054, INS-048, MOT-039), and Shute's review of formative feedback recommends elaborated feedback over verification alone [@shute2008focus].

::: {.rule #AUD-031 grade="C"}
**Make quiz verdicts calm and the result box consistent, and keep visitors' answers across visits on the same device.** Verdicts are calm statements without exclamation (WRT-039, WRT-053), learner work is saved and restored across a closed tab (ACC-061, INT-045), and the same feedback takes the same form everywhere (USE-030) [@vignelli2010canon]. Severity S3.

*In LTF:* "Correct." and "Not quite." in the shared feedback form (IDN-019), without the side stripe; `quizStore.ts` moves to `localStorage` with a version key, and says "Saved on this device" once (INT-058).
:::

::: {.rule #AUD-032 grade="B"}
**Show the correct target and the reason after every widget quiz answer, wrong as well as right.** Every answer is followed by the correct answer and a one-sentence reason (LRN-054, INS-048, MOT-039, WRT-038), and elaborated feedback is recommended over bare verification [@shute2008focus]. Severity S2, because it removes the learning moment the quiz exists for.

*In LTF:* in `QuizPanel.tsx`, render `question.explanation` for both outcomes and, after a wrong answer, the readable answer that `check()` already returns ("The target was ..."), then "Try again".
:::

::: {.rule #AUD-033 grade="C"}
**Honor reduced motion in the lesson's scripted scrolling.** Smooth scrolling is for short distances and never under reduced motion (MOV-023, ACC-048); a CSS `scroll-behavior` rule does not override a script's explicit option [@w3c2024wcag]. Severity S3.

*In LTF:* `LessonParts.tsx` calls `scrollIntoView({ behavior: 'smooth' })` when the section `Select` changes, which ignores the global reduced-motion block in `index.css`. Pass `'auto'` when `prefers-reduced-motion: reduce` matches (or when the in-app Motion setting in AUD-048 says Reduced), and jump directly when the target is more than a screen away.
:::

### What this means for Learn to Fly

The orientation surfaces (landing, curriculum, module) are structurally right and visually anonymous; the reading surface (the lesson) is functionally rich and typographically off its own plan.

Keep: the landing's band order, its voice, its no-account path and its live `LessonPath` card; `CurriculumMap`'s single connector and `<details>` structure; the lesson's three-zone grid, `SectionNav` spine, glossary chips, completion panel and previous and next cards; `QuizBlock`'s semantics and explanations.

Change: the hero's media and play disc (AUD-022); hard-coded aviation values and unlabeled fallbacks (AUD-023); restating eyebrows (AUD-024); non-open module links (AUD-025); per-module rings (AUD-026); the lesson's top stack (AUD-028), measure and size (AUD-029); quiz verdict, stripe and storage (AUD-031); `QuizPanel` wrong-answer feedback (AUD-032); scripted smooth scroll (AUD-033).

Build: prerequisite links (AUD-027); the verification line in the lesson meta row (AUD-030), which is also the first place the honesty form appears on a working surface.

## The surfaces: challenges, Fly mode, results, dashboard and reference

### The challenge list and the challenge page

`ChallengesPage` is a well-behaved collection page: a `role="search"` filter panel of five `Select`s (Module, Type, Difficulty, Status, Priority), a `role="status"` line "Showing n challenges of n", a responsive grid of card links, and an `EmptyState` with "Clear filters" (NAV-043, DEC-031). Its weaknesses are the ones the system chapter already named: inlined cards with `hover:border-accent`, a raw `text-lg font-semibold` title, and challenge-type icons drawn from stock lucide glyphs (`Settings2` for Setup, `Route` for Pattern, `Compass` for Navigation, `Award`) where the plan called for custom icons. The "Priority" filter label is internal vocabulary; Part XIII asks for "Core or bonus" (NAV-037, INT-058).

`ChallengePage` is the product's most distinctive structure and the place the identity should be strongest. Its four tabs, Brief, Fly, Debrief and History, carry the aviation sequence of briefing, flying and debriefing in the interface itself; the tab lives in `?tab=` so it survives a refresh; the active tab gets the 3 px horizon underline. `BriefTab` lays out the goal, a sim setup `dl` with copy buttons, recommended lessons, the procedure, a scoring `Table` and a large "I'm set up, start flying". `DebriefForm` says plainly that "Scores are self-assessed, so they only help you improve if they match what happened", which is exactly the limit-stating INT-061 and AES-056 ask for.

Three defects on the Brief tab are worth a fix. Its five h2s are raw `text-2xl font-bold` (AUD-008). Its "Common mistakes" (`safety`, red tint) and "Tips" (`tip`, green tint) callouts sit side by side, a red box beside a green box that will read as "wrong" and "right" to many learners, although neither is a status (AUD-013). And `CopyButton` (36 px, `min-h-9`) swallows clipboard failures in an empty rejection handler, so a learner who presses it on a browser that blocks clipboard access sees nothing at all (INT-024, INT-023).

::: {.rule #AUD-034 grade="C"}
**Make `CopyButton` report failure, size it to 44 px, and replace internal filter labels with learner words.** Errors stay visible next to the control that failed (INT-024), outcomes persist where the action happened (INT-023), labels are the learner's words (INT-058, NAV-037) and primary or repeated targets are at least 44 by 44 (LAW-011) [@w3c2024wcag]. Severity S3.

*In LTF:* on rejection, the button shows "Copy failed, select the text" with the value selected; on success, "Copied" in words, not only a check glyph. The "Priority" filter becomes "Core or bonus".
:::

### Fly mode

`FlyModePage` in `FlyModeLayout` is the second-screen view: no header or footer, `text-xl`, a 768 px column, a back link, the mono code, an h1 in `text-4xl font-bold`, the goal at `text-2xl`, then `FlyPanel large` with steps, a stopwatch, a "Keep the screen on while flying" option and "Finish and debrief". The intent matches the rules closely: one exit, large type, no navigation, wake lock with consent (MOV-062), a random-event alert with sound and a pulsing ring that never animates the text. Its execution has six problems, five of which are cheap.

1. **The beta banner is the first thing on the screen.** `FlyModeLayout` renders `BetaBanner` above `main`, a full-width `caution-tint` strip with a paragraph and a dismiss button, on the one screen meant to carry only the flight (GRD-076, USE-053, MOT-053, DEC-046, INS-049).
2. **The alert moves the steps.** When a random event fires, `FlyPanel` inserts the alert block above the Steps list, so every step jumps down by the alert's height at the moment the learner looks back from the sim. A tap aimed at a step can land on the wrong row (GRD-082, FRM-076, PER-068, ACC-063). The alert's `warning-pulse` ring is also `infinite` (motion-safe only), against the rule to stop loops after about five seconds (MOV-056).
3. **Targets are smaller than the task.** Each step row is an `li` with `p-3` padding, but only the `Checkbox` label is the hit target, so the row's visible area and its tappable area differ (LAW-008, GRD-078, FRM-059). The `Stopwatch` Start, Pause and Reset buttons are 36 px pills (`h-9`), below the 44 px floor for repeated controls and far below the 48 px or more the Fly mode rules ask for (LAW-011, ACC-042, GRD-078).
4. **No keyboard path, no current step.** `ChecklistRunner` already supports Space to tick and Backspace to untick, with a highlighted current item; `FlyPanel` has neither, so a learner at a desk must switch from keyboard to mouse for every step and has no marker for "do this now" (LAW-038, FRM-073, NAV-010, PER-036).
5. **Ticks are per tab, and Reset is one tap from loss.** `storage.ts` keeps flight state in `sessionStorage`, so closing the tab, a phone killing the background tab, or opening Fly mode in a second tab loses or splits the ticks (INT-045, ACC-061, SKL-089). The `Stopwatch` Reset and the `ChecklistRunner` Reset clear everything in one tap, with no undo and no statement of scope (LAW-017, INT-043, USE-042, INT-046).
6. **The theme is decided for the learner.** `FlyModeLayout` sets `data-theme="dark"` unless the learner chose Day, so a learner on "System" in a bright room gets Night, and there is no switch on the page (SCR-055, COL-064). The ruling on the default is in the rulings chapter.

::: {.rule #AUD-035 grade="B"}
**Remove `BetaBanner` from `FlyModeLayout`, and put a one-line, non-dismissible help and status line at the foot of Fly mode instead.** Nothing the current task does not need belongs on the flying screen (GRD-076, MOT-053, DEC-046), site-wide notices belong on the page that leads into the flight (USE-053), and the way to get help stays in the same place on every page, Fly mode included (ACC-066); in an eye-tracking study, banners slowed search even though people seldom looked at them [@burke2005highcost]. Severity S2.

*In LTF:* the foot of `FlyModePage` carries "Public beta · Report a problem" in `body-sm` `ink-2`, in a fixed position. The status itself is shown on the Brief tab, in the honesty form (IDN-014), before the learner opens Fly mode.
:::

::: {.rule #AUD-036 grade="B"}
**Reserve a fixed region for the random-event alert so its arrival moves nothing, and stop its pulse after a few cycles.** Alerts get a reserved region (GRD-082), nothing moves under the learner's finger in Fly mode (FRM-076, ACC-063), important content does not change at the moment of another change (PER-068), and loops stop after about five seconds (MOV-056); critical alerts are redundant across senses and acknowledged (PER-070); large changes go unnoticed when they coincide with another visual disruption [@rensink1997see]. Severity S2.

*In LTF:* the alert region sits between the title block and the steps at a fixed height in every flight, showing "No events" in `ink-2` until one fires; the event replaces that text in place, with the beep, the `warn` border, the word and "Got it". The ring pulses three times and then holds a static 4 px border.
:::

::: {.rule #AUD-037 grade="B"}
**Make the whole step row the tick target and every Fly mode control at least 48 px tall.** The whole visible control is the hit target (LAW-008, FRM-059), repeated Fly mode controls are at least 44 by 44 and preferably larger (GRD-078, LAW-011, LAW-012), and the `lg` size or larger is used for every Fly mode control (ACC-042); thumb tapping was slowed or made error-prone below roughly fingertip-sized targets in Parhi and colleagues' study [@parhi2006target]. Severity S2.

*In LTF:* the `li` becomes the `label` (or the row gets a click handler that toggles the input), with the checkbox drawn at 24 px. `Stopwatch` in `large` mode uses 48 px buttons with words; outside Fly mode it uses 44 px.
:::

::: {.rule #AUD-038 grade="C"}
**Give `FlyPanel` the `ChecklistRunner` keyboard model and a visible current-step marker.** A single-key path for the commonest action (LAW-038, FRM-073), one method for one task everywhere (LAW-041), the current step marked in a strictly ordered list (NAV-010), and one strong feature for the item to find (PER-036) [@nielsen1994enhancing]. Severity S3.

*In LTF:* Space ticks the current step and advances the marker; Backspace unticks the last; both are announced on the page and documented beside the steps (ACC-033). The current step carries the horizon line on its left edge and an "Now" word; ticked steps recede to `ink-2` with their check (PER-072).
:::

::: {.rule #AUD-039 grade="C"}
**Persist Fly mode ticks beyond the tab, and make every Reset name its scope and offer undo.** Learner work survives a refresh, a closed tab and a change of device where the product can (INT-045, ACC-061, SKL-089), destructive actions are separated and protected (LAW-017), undo replaces confirmation for reversible actions (INT-043), and resets state their scope (USE-042, INT-046); easy reversal reduces anxiety and encourages exploration [@shneiderman2016designing]. Severity S1 for lost ticks during a flight, S3 for the Reset labels.

*In LTF:* `storage.ts` moves flight state to `localStorage` keyed by challenge and attempt, and syncs it to the server for signed-in learners; Fly mode says "Saved on this device" until sync exists (INT-058). "Reset" becomes "Reset timer" and "Untick all steps", each followed by a 10-second "Undo" in place.
:::

::: {.rule #AUD-040 grade="B"}
**Put a Day and Night switch on the Fly mode page itself and remember the choice separately for Fly mode.** The learner can switch to Day inside Fly mode (COL-064), Fly mode opens in the theme last chosen for it with a one-tap switch (SCR-055), and the default is to be decided by measurement (COL-065); positive polarity read better for younger and older adults [@piepenbrock2013positive], and light text on a dark screen was the worst condition for glance reading in near-dark surroundings [@dobres2017effects]. Severity S3.

*In LTF:* a two-option control ("Day", "Night") at the top right of `FlyModePage`, 48 px, stored as `ltf-fly-theme`. Until the measurement in the rulings chapter is done, the default stays Night with the compensations in IDN-022.
:::

### The result

`ResultView` is centered: an h2 "Your result" (raw `text-2xl font-bold`), the `TierBadge` with `tier-pop`, the percentage in `font-mono text-5xl font-bold`, the points, a one-line message, the best so far, then "Criterion by criterion" rows with icons, words and review links for any criterion below full marks, then "Fly again", "Next" and "See all attempts". The criterion rows and review links are good (NAV-057, MOT-033), and "Not passed yet: a required criterion was not met. Review it and try again." is the right voice. The order is wrong for learning: the tier and a 48 px percentage lead, and the feedback that says what to change comes below them. The feedback rules put comment before score (INS-044, MOT-036), citing work in which grades alone produced no gains while comments alone produced large ones [@shute2008focus]. The message "Excellent flying. That is a Gold." is about the flight, not the flyer, which keeps it on the right side of MOT-032; the dashboard's "Welcome aboard, {name}!" is not a result and does not need the exclamation.

::: {.rule #AUD-041 grade="B"}
**Lead the result with the criterion feedback and the one next change, then the tier, then the percentage.** Feedback leads with the task and puts the score second (INS-044, MOT-036), ends with one feed-forward step (MOT-033), and the tier headline outranks the percentage (SYS-066) [@shute2008focus]. Severity S3. The conflict with the identity Parts' view of the tier is ruled on in the rulings chapter.

*In LTF:* the result section opens with one sentence ("Passed. Your approach speed was the weakest criterion: review L4.3 Section 3."), then the criterion rows, then the tier badge and `readout-xl` percentage in the signature result block (IDN-021), then the actions, with "Review L4.3" first when the attempt did not pass (NAV-057).
:::

### The dashboard

`DashboardPage` orders well: a course-complete panel when earned, "All caught up" or the Continue card first, then progress and next steps beside stats and recent attempts. Its problems are measurement and wording. The "Sim time (estimated)" tile is computed from content estimates (`estimatedSimMinutes`), not from anything the learner logged; the rules allow estimates only when built from logged activity and labeled as such (SKL-010, MOT-071). "Gold results" is a count without a denominator (VIZ-028, MOT-024). The stat values use `font-mono text-2xl font-bold` and the section h2s raw `text-2xl font-bold` (AUD-008, AUD-011). Signed-in learners reach the dashboard on desktop only through the `UserMenu`; Part XIII's visible header item is ruled on in the rulings chapter.

::: {.rule #AUD-042 grade="B"}
**Replace the estimated sim-time tile with a figure built from logged attempts, or remove it, and give every count its denominator.** Practice totals come from logged sessions, never from content estimates (SKL-010, MOT-071), a value is shown with the context that makes it meaningful (VIZ-028), and progress headlines skills rather than volume (SKL-011, MOT-024) [@hattie2007power]. Severity S3.

*In LTF:* "Time flown (from your timed attempts)" when the stopwatch was used, otherwise no tile. "Gold in 3 of your 11 attempts" replaces "Gold results 3" (VIZ-063).
:::

### The reference pages

The reference hub is the most subject-derived surface in the product and should be protected. A search field over speeds, checklists, airports, glossary terms and resources; "Most looked up" chips; "The kneeboard" band with the `AirspeedArcs` drawing and a Print button; and `ReferenceSections`, a POH-style numbered rail ("01 V-speeds and limits" to "05 Resources") that becomes a horizontal scroller on phones. `SpeedsPage` prints "Last verified" with the sim version, a big table with mono values and a sticky `KeyNumbers` panel sized by container query. This is what the identity Parts mean by drawing identity from the subject's own artifacts (BRD-040, SYS-068).

Its gaps are coverage and naming. Search covers five kinds and not lessons (`search.ts`), so a learner who remembers "the lesson about crosswind" cannot find it from the one search box in the product (NAV-044, NAV-063). Only 42 of the 179 glossary entries have aliases, so a learner who types the sim's word or a plain description often finds nothing (NAV-033). The hub's h1 is a question ("What do you need to know?") under an eyebrow "Reference", which splits the page's name between two elements (NAV-035) though the question itself is the right lookup voice (WRT-022).

::: {.rule #AUD-043 grade="C"}
**Add lessons to the reference search, give every glossary entry the pilot's term, the sim's term and a plain description, and log searches that return nothing.** Search covers every item of the kind learners look up (NAV-044), items are indexed under several names (NAV-033), and zero-result searches are a backlog of missing aliases (NAV-039); people name the same object or action inconsistently, which is why one name per item fails search [@furnas1987vocabulary]. Severity S3.

*In LTF:* `search.ts` gains a `lesson` kind built from lesson titles, section headings and objectives; `glossary.yaml` aliases are filled during the next content review with `/review-lesson`; zero-result queries are counted without any account identifier.
:::

::: {.rule #AUD-044 grade="C"}
**Name the hub "Reference" in its `h1` and keep the question as the search field's visible label.** One name per page across header, `h1`, breadcrumb and title (NAV-035), and lookup surfaces use the learner's question (WRT-022); both can be satisfied at once, and a page whose name is obvious passes the trunk test [@krug2014dont]. Severity S4.

*In LTF:* `h1` "Reference" in the display voice; the search label "What do you need to know?" in `heading-lg` directly above the field. The eyebrow goes.
:::

### What this means for Learn to Fly

The challenge and reference surfaces hold most of LTF's distinctive structure, and the audit's job here is to make that structure work before it is made louder.

Keep: Brief, Fly, Debrief, History as the tab names and the `?tab=` state; the sim setup `dl` with copy buttons; the self-assessment sentence in `DebriefForm`; the criterion rows and review links in `ResultView`; Fly mode's single exit, large type, wake lock and two-channel alert; the dashboard's Continue-first order; the reference search, kneeboard band, numbered rail and "Last verified" line.

Change: `CopyButton` and the "Priority" label (AUD-034); the beta banner in Fly mode (AUD-035); the alert's placement and loop (AUD-036); Fly mode targets (AUD-037); the result's order (AUD-041); the estimated sim-time tile and bare counts (AUD-042); the hub's split name (AUD-044).

Build: keyboard ticking and the current-step marker in `FlyPanel` (AUD-038); persistent ticks and scoped, undoable resets (AUD-039); the in-page theme switch (AUD-040); lesson search and full aliases (AUD-043).

## Across the product: forms, states, motion, access, copy and voice

### Forms and account

The forms are the most conventional part of LTF, which is what they should be (AES-002, USE-035). `FormField` puts a 14 px label above every field with its hint and error beside it; every input shares `control-box` (40 px, `line-strong` border, accent focus ring with a canvas gap, `warn` border when invalid); `ErrorSummary` takes focus after a failed submit and says "There is a problem"; `PasswordInput` has a show toggle and a strength meter; "Remember me for 30 days" defaults to unticked (`defaultValues: { remember: false }`), as the default rules require (FRM-009, DEC-020); the terms box is unticked; account deletion sits behind a `Dialog` titled "Delete your account?". `AuthLayout` is one narrow column. None of this should change in look beyond the system-wide fixes.

Two things do need changing. The sign-up action has four labels: "Sign up" in the header and the lesson's `SignupBanner`, "Sign up free" in the lesson completion panel and `DebriefForm`, "Create a free account" on the landing page and in `LoginForm`, and "Create account" on the submit button of the sign-up form itself (WRT-045, USE-030). And `ReportProblemDialog` holds its description in component state, so a refresh or an accidental close loses what the learner typed, on the one form whose purpose is to collect a problem the learner just met (FRM-041, INT-045, ACC-061).

::: {.rule #AUD-045 grade="C"}
**Give the sign-up action one label everywhere, and use it on the submit button too.** One label for each action across the product, recorded in a vocabulary list (WRT-045), the same thing rendered with the same wording everywhere (USE-030), and labels that say exactly what pressing does (WRT-044); consistency of wording was among the principles that explained the most serious problems in Nielsen's analysis [@nielsen1994enhancing]. Severity S3.

*In LTF:* "Create a free account" on every entry point and "Create free account" on the submit button, or one shorter pair chosen by the owner; recorded in the voice guide's vocabulary (IDN-017). The header can keep a short form ("Sign up") only if the voice guide names it as the header variant of the same action.
:::

### Failures that make no sound

Three places fail silently, and each one teaches a learner that the product cannot be trusted with their work. `CopyButton` ignores a rejected clipboard write (AUD-034). The progress hooks in `features/progress/api.ts` update optimistically and, on error, roll the cache back to its previous value; `LessonPage` adds a toast for "Mark lesson complete", but the section-position save that runs on a timer has no error path, so a failed save simply disappears. And `ReportProblemDialog` loses its text as described above. A failed save must be as prominent as a success, because an uncertain learner experiences the wait as longer and may repeat the action (MOV-045), and errors stay visible until the learner deals with them (INT-024).

::: {.rule #AUD-046 grade="C"}
**Report every failed save and failed action where it happened, keep the learner's input, and save drafts as they are typed.** Errors stay next to what failed until handled (INT-024), learner input is saved as it is made and restored after a refresh (INT-045, FRM-041), and a failed save is as prominent as a success (MOV-045); anxiety lengthens waits [@maister1985psychology], and delayed or missing feedback leads users to think a page is broken and repeat the action [@google2024web]. Severity S2.

*In LTF:* the progress mutations surface "Not saved. Your place is kept on this device; we will try again." in place (beside the section nav or the completion panel) and retry; `ReportProblemDialog` writes its draft to `localStorage` on change and clears it only when the server accepts the report, as `DebriefForm` already does with its "Not saved" state.
:::

### Empty, error and loading states

`States.tsx` gives `EmptyState` and `ErrorState` one layout: a 420 px box with a dashed `line-strong` border, a 32 px lucide icon at stroke 1.5 (`Inbox` by default, `OctagonAlert` in `warn` for errors), a `heading-md` title, a `text-sm` message and one action. The box is not centered in its parent, so on a wide page it hangs at the left edge (visible in the dossier's `/learn` error screenshot). The default error copy, "Something went wrong" and "We could not load this. Check your connection and try again.", is generic by design, and callers rarely pass anything more specific. `RootErrorPage` and the 404 are better: "You've wandered off the taxiway" is the product's voice. Loading is handled carefully (`AppLoading` pulses the fin mark, `PageSkeleton` reserves blocks in a `LoadingRegion`, widgets reserve `h-72`), though the pulsing logo carries no text label (MOV-047).

::: {.rule #AUD-047 grade="C"}
**Write each empty and error state for its page, center it where it is the only content, drop the dashed frame and give it a drawn LTF glyph.** Empty, error and loading states get page-specific wording and form (SYS-076, WRT-040), carry the LTF voice and an LTF-specific visual cue (BRD-053), and error messages say what failed, what to do and where to go next (USE-045, INT-038); every detail is part of the design [@vignelli2010canon]. Severity S3.

*In LTF:* `ErrorState` on `/learn` reads "The course map did not load" with "Try again" and a link to Lesson 0.1, which works offline from the static preview; the glyphs come from IDN-020. `AppLoading` adds "Loading Learn to Fly" as visible text under the mark.
:::

### Motion

The motion system is small and disciplined: two easing tokens, entrance animations of 200 ms, a 400 ms `tier-pop` that overshoots once on the tier badge (which encodes nothing, so MOV-016 allows it), a `warning-pulse` that animates a ring and never the text, and a global reduced-motion block. Components add `motion-safe:` to every animation. This is close to what the motion Part asks for and should be kept. Three gaps remain: the scripted smooth scroll (AUD-033); two infinite loops (`shimmer` on skeletons and `warning-pulse` on the alert) that never stop on their own (MOV-056, ACC-050); and no in-app Motion setting for learners who have not set the operating system preference (MOV-057, ACC-048).

::: {.rule #AUD-048 grade="C"}
**Add a persistent Motion setting (System, Reduced, Full) applied before first paint, and stop looping animations after a few cycles.** An in-app motion setting that defaults to the system preference and can override it (MOV-057, ACC-048), loops that stop after about five seconds (MOV-056, ACC-050), and WCAG 2.3.3 treated as required (MOV-054) [@w3c2024wcag]. Severity S3.

*In LTF:* the setting sits beside `ThemeToggle` under Preferences on `/account` and in the header menu for visitors, stored like `ltf-theme` and applied by the inline script in `index.html` as a `data-motion` attribute that the reduced-motion CSS also matches. `shimmer` runs at most three cycles and then holds a static tint.
:::

### Accessibility: a good floor with specific holes

LTF's accessibility provisions are real and tested: a skip link first in the tab order, one `main`, labeled `nav` regions, one `h1` per page, a route announcer, the global focus ring, `aria-valuetext` on progress, sr-only status words, underlined links, and axe runs in unit and end-to-end tests that fail on serious violations, plus a keyboard end-to-end test (ACC-014, ACC-015, ACC-021, ACC-028, ACC-085). That floor is ahead of most small products and should be kept as a build property.

The holes found are mostly ones axe cannot see. The contrast failures on tints (AUD-004). The pixel root (AUD-007). Targets: `Button` size `sm` (32 px) is used 45 times, mostly in widget files (the G1000 PFD, pitch-power and traffic-pattern widgets) and `QuizPanel`; `ThemeToggle` segments are 32 px (`h-8`); `Tabs` triggers are 40 px; the `Stopwatch` pills are 36 px. The 24 px floor is met everywhere checked, but primary, repeated and sequential controls should be at least 44 (LAW-011, ACC-042, FRM-058), and widget controls are repeated by nature. Sticky offsets: the header is sticky at 64 px and the lesson's mobile section `Select` is sticky below it, but scroll offsets are set per element (`scroll-mt-24` on lesson headings and glossary entries), not as a document-level `scroll-padding-top`, so a focused control that is not one of those elements can scroll under the sticky stack (ACC-029, NAV-050).

::: {.rule #AUD-049 grade="C"}
**Raise every primary, repeated or sequential control to at least 44 px, including widget controls, tabs and the theme switch.** 24 by 24 is the floor and 44 by 44 the minimum for primary, repeated and sequential controls (LAW-011, ACC-041, ACC-042, FRM-058, NAV-065); WCAG 2.2 sets the floor at 24 CSS pixels with a spacing exception [@w3c2023wcag], and thumb tapping on small targets was slower and more error-prone [@parhi2006target]. Severity S3.

*In LTF:* `Button` `sm` stays for genuinely occasional actions only; widget control rows use `md` at a new 44 px height (`--spacing-control-md: 44px`, a token change that also lifts `control-box`); `Tabs` triggers and `ThemeToggle` segments become 44 px.
:::

::: {.rule #AUD-050 grade="C"}
**Set a document-level `scroll-padding-top` equal to the full sticky stack at every breakpoint.** Every sticky layer's height is reserved as scroll padding so focus never lands beneath it (ACC-029, NAV-050), which WCAG 2.2's focus-not-obscured criterion requires [@w3c2023wcag]. Severity S3.

*In LTF:* `html { scroll-padding-top: calc(4rem + var(--sticky-extra, 0px)) }`, with `LessonPage` setting `--sticky-extra` to the section `Select`'s height below `lg`. The per-element `scroll-mt-*` classes can then go.
:::

### Copy and voice

The voice is LTF's strongest identity asset and the audit found it mostly consistent with the rules: second person, US English, short declaratives, situational headings ("Read a little. Try it on the page. Fly it in the sim."), plain refusals of overclaiming ("It is not a pilot certificate and has no value for real-world flying."), and one dry joke on the 404. The defects are few and small, which is why they are worth fixing together: they are the places where the voice slips into a generic register.

- Praise and exclamation in routine moments: "Lesson complete. Nice work!" (toast in `LessonPage`), "Correct!" (`QuizBlock`), "Welcome aboard, {name}!" (dashboard title) (WRT-039, WRT-053, INT-006, INS-043).
- The em dash in the default `<title>` (AUD-019).
- The honesty contradiction (AUD-020).
- Four sign-up labels (AUD-045).
- Generic error copy (AUD-047).
- "Bronze ... Safe, and worth celebrating." and "Gold is checkride-ready." on the landing page, which the decisions Part asks to revise so that the net impression stays inside the simulator (DEC-019, DEC-058). "Checkride-ready" implies a real-world readiness the product disclaims in its own FAQ.

::: {.rule #AUD-051 grade="C"}
**Remove praise and exclamation from routine feedback, and revise "checkride-ready" so the claim stays inside the simulator.** Verdicts are calm statements (WRT-039), exclamation marks are for genuine achievements only (WRT-053), results are reported rather than praised (INT-006), and copy that borrows real-world credentials is reviewed for its net impression (DEC-019, DEC-058); feedback directed at the self tends to hurt while task-focused feedback helps [@shute2008focus]. Severity S4.

*In LTF:* "Lesson complete." (toast and inline), "Correct.", "Welcome back, {name}" for every visit after the first and "Welcome, {name}" for the first; the landing tier line becomes "Bronze means you flew it safely. Gold meets the standard the challenge borrows from real training." with the wording checked by the owner against the challenge sources.
:::

### What this means for Learn to Fly

The cross-cutting layer is where trust is won or lost one small failure at a time. LTF's forms, access floor and voice are already better than the visual layer; the audit's fixes here are mostly about making failures audible and wording consistent.

Keep: `FormField`, `control-box`, `ErrorSummary`, unticked defaults, the deletion dialog; the motion tokens, `motion-safe:` discipline and the global reduced-motion block; the access floor and its tests; the voice, the 404 line and the honesty lines.

Change: four sign-up labels to one (AUD-045); silent failures to visible ones (AUD-046); generic, dashed, left-hung states to page-specific ones (AUD-047); infinite loops (AUD-048); small repeated targets (AUD-049); per-element scroll offsets (AUD-050); praise, exclamation and "checkride-ready" (AUD-051).

Build: the Motion setting (AUD-048); a message catalog in the voice guide so that error, empty and confirmation wording is chosen once (WRT-035, WRT-040).

## Why LTF reads as generic: the diagnosis

### Two complaints, two causes

The owner's complaint has two words in it, "sloppy" and "generic", and the audit shows they have different causes and different fixes. Treating them as one problem is how a redesign ends up clean and still anonymous.

**Sloppy** is a craft judgment, and its sources are countable. Two heading dialects in about equal measure. A card hand-inlined 45 times in 26 files with five paddings. Five icon stroke widths. Bold mono in some pages and medium mono in the tokens. Four labels for one action. Three identities between the plan, the share card and the pages, and a broken touch icon. Status colors on content boxes. A dashed border with three meanings. Each of these is small; together they are what a learner perceives as lack of care before they can name any one of them. The aesthetics literature has a name for this facet: craftsmanship, one of the four facets of the VisAWI instrument, alongside simplicity, diversity and colors [@moshagen2010facets]. Part XVIII makes it testable (AES-025): the same component must look and behave the same everywhere, in both themes and every state. The fix for sloppiness is the system work in the audit chapters: one scale, one card, one stroke, one label, one identity, enforced by lint and review.

**Generic** is an identity judgment, and its cause is structural. Every layer where a product can be distinctive was filled with the most available default. Fixing the sloppiness will not touch this; a perfectly consistent product built from the same defaults is a tidy template. The holistic typology from package research includes a category for it, "nondescript", alongside massive, contrasting, natural and delicate [@orth2008holistic]; a page can be correct token by token and nondescript as a whole (BRD-025).

### Which layers carry identity, and what fills them now

Typicality and novelty jointly predict aesthetic preference, but novelty is liked only while it does not cost typicality [@hekkert2003most]; websites low in complexity and high in prototypicality are judged most appealing at a glance [@tuch2012role]. The practical reading, which Parts XVIII and XX both adopt, is to be typical in the layers where structure is judged (page order, navigation, reading direction, control behavior) and novel in the layers where identity is carried (BRD-002, AES-017, AES-018). The audit can now say exactly what fills each identity layer.

| Identity layer | What fills it now | Source of the choice |
| --- | --- | --- |
| Type voice | Instrument Sans at framework sizes | default |
| Display moments | same face, no display voice | plan not built |
| Shape | 16 px bordered, shadowed cards; pills | kit default |
| Control style | ink fills, ink pill toggles, ink tooltip | copied signature |
| Color use | one teal, spent on tints and hovers | good rule, diluted |
| Labels | uppercase eyebrow on most headings | template habit |
| Icons | stock lucide at five strokes | default |
| Landing composition | marketing bands, icon row, stat tiles | template |
| Imagery | none in the first view but a video | absent |
| Drawn instruments | 13 hand-built widgets, deep in lessons | LTF's own |
| Numerals | JetBrains Mono readouts | LTF's own |
| Language | Brief, Fly, Debrief; Day and Night; taxiway 404 | LTF's own |
| Honesty | many lines, no shared form | LTF's own, scattered |

The table explains the complaint precisely. The layers a visitor sees first (type, shape, control style, labels, icons, composition, imagery) are all defaults or borrowings. The layers that are genuinely LTF's (instruments, numerals, language, honesty) are either deep inside working surfaces or have no consistent visual form. The product is distinctive in the places a learner reaches after deciding to stay, and generic in the places where the decision is made.

### Why the defaults won

Part XX names four causes of convergence: shared framework defaults, safe copying of successful products, research guidance that pushes toward the center, and unfinished identity decisions. The audit confirms all four in the code and adds a fifth that is specific to how LTF is built.

1. **Framework defaults.** `tokens.css` cleared Tailwind's palette, radii, shadows and fonts but not its type sizes, weights, leading, tracking or spacing, and the pages used those directly. Defaults are typical by construction [@tuch2012role] and shared by construction [@romaniuk2007evidence], so they cannot be distinctive.
2. **Borrowed signatures.** The ink-filled pill segmented control (`ThemeToggle`), the ink pill timer (`Stopwatch`), the ink tooltip and the ink pill Explore and Quiz toggle in `WidgetFrame` are the perceptual signature of a few developer-tool brands, not a convention of learning software. They buy typicality nowhere it is needed.
3. **Evidence pushing to the center.** This book's own rules, applied without a counterweight, produce contrast, simplicity and conventional layout. Rams's "as little design as possible" [@rams2026good] is a call for restraint in use, and the commentary on his principles warns that unobtrusiveness can slide into monotony [@rams2026ten].
4. **Unfinished decisions.** D-25's livery direction was half built and half replaced (see the chapter on drift). A product with two partial identities has neither, because distinctive assets are built by consistent repetition [@sharp2010how].
5. **The most available consistency, written by agents.** Much of LTF's code is written by AI agents following `AGENTS.md`, which routes client work to `v1.md` Sections 19 to 23. Section 21 describes a different design, and the actual rules live in absent files cited by comments. An agent with no readable identity rule produces the most available consistency [@grudin1989case], which is the framework default. BRD-035 and SYS-042 make the remedy explicit: put the identity rules, in checkable one-line form, where agents read.

### Where conventional is correct and must stay

The diagnosis is not a license to make everything unusual. Typicality carries comprehension, and several rules with B grades protect it.

- **Page skeleton.** `RootLayout`'s header, main and footer; the lesson's three-zone grid; the challenge page's tabs; the dashboard's two columns; the landing page's band order (AES-017, BRD-002).
- **Navigation.** Three district links plus account controls, breadcrumbs below hubs, a hamburger and drawer on phones, links underlined (NAV-060, NAV-048, INT-012, TYP-006).
- **Controls.** Buttons that look like buttons, native checkboxes and radios, Radix tabs, `control-box` fields, a visible focus ring (AES-002, EVD-035, USE-035, INT-012).
- **Reading conventions.** Mixed case, flush left, one column, underlined links, paragraphs separated by space (TYP-006, GRD-026, LEG-038).
- **Aviation conventions.** Arc colors, sky over ground, magenta and green course colors, chart colors, the sim's own names for controls (BRD-034, USE-023, SYS-029).
- **The ink primary button.** It is conventional, at 18:1 contrast in Day it is the clearest possible "do this" signal, and nothing in the evidence says a brand gains from an unusual primary button. Part XX's asset table lists the ink button among the forms to replace; this Part rules that the button stays and the pill-shaped ink toggles go (IDN-018), because buttons are structure (AES-002 [B], USE-035 [B]) and the table entry is a judgment under BRD-003 [C], not a rule. That is a judgment, recorded as such.

### The identity register

Part XX asks for an asset register (BRD-015) and a perceptual layer specified apart from components (BRD-024); the diagnosis gives both their first content. The register is the artifact that keeps this Part's decisions from drifting again.

::: {.rule #IDN-001 grade="C"}
**Keep one identity register that lists every layer as "structure, conventional" or "identity, LTF's", with each identity element's exact specification, source file, surfaces and pace layer.** Every inherited default is decided one by one (BRD-003), candidate assets are registered with exact specifications (BRD-015), the perceptual layer is named apart from components (BRD-024, SYS-002), and slow layers change only by recorded decision (BRD-036); identity systems that survive many hands are written down [@vignelli1970graphics; @kholmatova2017design].

*In LTF:* a section of the design-system README (AUD-015) with two lists. Structure: the items in "Where conventional is correct and must stay". Identity: the signature set in the playbook (IDN-004 to IDN-014), each with tokens, components, surfaces and pace layer, and a link to the Decision Log entry that adopted it. `/ltf-review` checks pull requests that touch a listed file against the register.
:::

::: {.rule #AUD-052 grade="C"}
**Run the fix for sloppiness (system consistency) and the fix for genericness (identity layers) as two programs, in that order, and do not count the first as having solved the second.** Craftsmanship is a facet of perceived aesthetics measured separately from simplicity, diversity and color [@moshagen2010facets], and correct elements can still compose into a nondescript whole [@orth2008holistic]; the rules treat consistency (AES-025, SYS-032) and identity (BRD-002, BRD-025) as different jobs. Severity: not applicable (process).

*In LTF:* releases 1 and 2 of the roadmap remove sloppiness; release 4 adds identity. A screenshot of a consistent but still anonymous page after release 2 is expected, not a failure; the brief-exposure test (IDN-025) is run before and after release 4, not after release 2.
:::

### What this means for Learn to Fly

LTF does not need more design; it needs its design in different places. The structure is right. The identity material exists. The defaults sit in front of it.

Keep: every structural convention listed above, including the ink primary button; the three things that are already LTF's own (instruments, numerals, language) and the fourth that is LTF's but scattered (honesty).

Change: the order of attention. The visitor's first view, the shapes of boxes, the labels over headings and the controls that copy other brands are where the identity must now live (the playbook says how).

Build: the identity register (IDN-001) before the playbook's first pull request, and the two-program plan (AUD-052) as the frame for the roadmap.

## Rulings on the conflicts between Parts

The editors collected fifteen places where Parts disagree or overlap; the audit found four more. Each ruling below names the rules on each side with their grades, states the decision, gives the reason and says whether `v1.md` needs a Decision Log entry. Where the evidence cannot decide and the choice is the owner's, the ruling says so and gives a recommendation. A ruling does not change any other Part's rule text; it decides how the rules apply to LTF now.

The general principle for weighing them: a higher-graded rule on the same specific claim wins over a lower-graded one (EVD-002, EVD-050); where grades tie, the rule that serves the learner's task beats the rule that serves the brand on working surfaces, and the reverse on identity surfaces (AES-004, AES-023, BRD-033).

### Which identity direction

**Sides.** BRD-004 [C] requires one recorded direction, finished everywhere. BRD-026 [D] aims at a calm, refined register. AES-018 [B] puts novelty in a few signature elements on a typical skeleton (AES-017 [B]). SCR-032 [C], TYP-008 [C] and LEG-023 [B] confine any distinctive or condensed face to display sizes. D-25 chose the livery direction: navy, a red accent, Big Shoulders Display in "big uppercase headings", an illustration, a navy night mode. The shipped code chose a type-led warm-neutral and teal design with no display face.

**Ruling.** The owner chooses, and the choice is recorded as D-34 (AUD-017). This Part recommends a third option built from the second: keep the shipped tokens, the fin and the teal horizon line, and add the subject-derived identity layer specified in the playbook ("instrument and handbook", IDN-002).

**Reason.** The livery direction conflicts with A-grade rules as specified: its homepage headings are full sentences in uppercase ("LEARN TO FLY THE SKYHAWK."), which TYP-036 [A] and LEG-010 [A] forbid for sentences; its accent is a saturated red, which on a product whose alerts are red puts the brand in the warning channel (COL-067 [B], BRD-014 [C], PER-044 [B]); its navy night mode would be a third theme to maintain beside Day and Night. Its strengths (a condensed display voice, livery stripes, an on-topic look) can be kept without those costs. The shipped direction passes the rules but is nondescript (the diagnosis chapter). The recommendation keeps everything both have that passes and adds what neither has: drawn instruments, ruled handbook surfaces and the honesty form. That this is the best of the three is my judgment, not a tested result; BRD-054 and IDN-025 say how to test it.

**Decision Log.** Yes: D-34, superseding D-25's homepage and logo-color clauses.

### Lesson measure and body size

**Sides.** TYP-018 [B] (45 to 75 characters, aim near 60 to 66), TYP-019 [C] (count characters of real text in the face), LEG-035 [B] (45 to 75, never wider than about 80), LEG-036 [B] (specify in characters, `ch` or a token built on them), SCR-013 [C] and SCR-018 [C] (calibrate `ch` or use em), SCR-017 [B], GRD-023 [B]. Part II's decision proposes about 44ch; Part III's decision proposes capping lessons at the existing 68ch; Part IV's proposes 30em, at most 34em. LEG-019 [B] and SCR-007 [B] want the body at 18 px.

**Ruling.** `--container-measure: 30em` for all prose (lessons and `Prose`), lesson body at `body-lg` (18 px), and a test that asserts 45 to 75 characters per line (AUD-029).

**Reason.** The disagreement is arithmetic, not evidence. Measured in the shipped face over LTF's own lesson text, 30em holds about 66 characters, 34em about 75, 44ch about 65, and 68ch about 100. Part III's 68ch proposal therefore contradicts Part III's own rule LEG-035 and must not be implemented. Em is tied to the text's own size, so it satisfies the intent of LEG-036 and the letter of SCR-013 and SCR-018, and the test makes the character count, not the unit, the thing that is enforced (TYP-019). Screen-reading studies found readers rated about 55 characters easiest [@dyson2004physical].

**Decision Log.** No. `v1.md` Section 21.3 already says 60 to 75 characters; the change restores the plan.

### Root font size

**Sides.** SCR-012 [C], GRD-049 [C] and ACC-039 [C] all require a relative root. No rule defends the pixel root.

**Ruling.** `font-size: 100%` and `rem` utilities (AUD-007). There is no real conflict; the memo listed it because three Parts reported it.

**Decision Log.** No.

### Fly mode's default theme

**Sides.** LEG-044 [C] keeps Fly mode dark by default. SCR-055 [D] says not to default to dark regardless of the room, to open in the theme last chosen for Fly mode, and to offer a switch. COL-064 [B] puts a switch in Fly mode; COL-065 [B] decides the default by measuring glance reading time and step accuracy in both polarities; COL-060 [B] and SCR-053 [B] make positive polarity the default for dense reading and checklists. The plan (Section 20.7) and `FlyModeLayout` force Night unless the learner chose Day, so "System" means Night even in a bright room.

**Ruling.** Build the in-page switch now (AUD-040). Until the measurement is done, Fly mode opens in the theme the learner last chose for Fly mode, and on first use in the learner's site theme, with "System" honored rather than forced to Night. Then run the in-context glance test that COL-065 describes and set the default from its result (AUD-053).

**Reason.** The polarity evidence cuts against a fixed dark default: positive polarity read better for younger and older adults [@piepenbrock2013positive], and light text on a dark screen was the worst condition for glance reading in near-dark surroundings [@dobres2017effects]. LEG-044's case for dark rests on avoiding large bright areas in a dim room, which a well-built Day theme with a dim device also avoids. The B-graded rules outrank the C and D rules, and they ask for measurement, not a guess in either direction.

**Decision Log.** Yes: it changes Section 20.7's "dark unless the reader chose the light theme".

### `BetaBanner` in Fly mode, and what the beta notice says

**Sides.** GRD-076 [B], MOT-053 [B], NAV-011 [B], USE-053 [C], DEC-046 [C], INS-049 [C] and TYP-003 [C] want the banner out of Fly mode. DEC-061 [C], SYS-073 [C] and AES-052 [C] keep honesty signals visible and prominent. BRD-051 [C] suggests a smaller note inside Fly mode; ACC-066 [C] keeps the way to get help in the same place on every page, Fly mode included.

**Ruling.** The banner leaves `FlyModeLayout`. The status is shown on the page that leads into the flight, the challenge's Brief tab, in the honesty form; Fly mode keeps a one-line, fixed "Public beta · Report a problem" at its foot (AUD-035). The banner's copy and the About page's are made to agree (AUD-020).

**Reason.** Both sides are satisfied: the flying screen carries nothing the flight does not need, and the honesty signal moves to where the learner is still reading. The fixed footer line is help, not a notice, so it satisfies ACC-066 without a dismissible strip.

**Decision Log.** No; it is a presentation change within the beta policy (D-32).

### What leads the result screen

**Sides.** MOT-036 [B] and INS-044 [B] lead with what happened and what to change, with the tier and percentage secondary; MOT-008 [B] reports tiers after the flight in neutral language. SYS-066 [C] makes the tier, not the percentage, the headline. BRD-052 [C], AES-045 [C] and AES-023 [C] treat the result as a signature, celebratory composition.

**Ruling.** On the result screen, the order is: one sentence of what happened and the next change, the criterion rows, then the signature result block with the tier first and the percentage below it, then the actions (AUD-041, IDN-021). The shareable result image, which is an identity surface, leads with the tier.

**Reason.** On a learning surface the B-graded feedback rules win, and they rest on evidence that comments alone produced large gains where grades did not [@shute2008focus]. The identity rules are satisfied by giving the tier block the signature treatment and by the share image, where the learner is not learning but telling someone.

**Decision Log.** No, unless `v1.md` Section 20.6 specifies the order, in which case yes.

### Status colors used for non-status jobs

**Sides.** COL-067 [B], COL-068 [B], PER-044 [B], PER-051 [C], BRD-014 [C], SKL-075 [C] and ICO-073 [C] all agree that status hues mean status. The one disagreement is the `decision` callout: Part VI's decisions take `warn` off it; Part VII's decisions list "decision" among the meanings status hues may carry.

**Ruling.** `decision` takes the neutral callout treatment with its Signpost icon and title word (AUD-013). When a decision is itself a safety matter, the author uses the `safety` type. The landing play disc becomes `ink`, and the beta notice moves to the honesty form.

**Reason.** A "go or no-go" moment is a type of content, not a state of the learner's flight. COL-068 is B-graded and specific to content types; the Part VII decision has no rule of its own that grades the exception.

**Decision Log.** No.

### Eyebrows

**Sides.** TYP-038 [C] and SCR-051 [C] use an eyebrow only when it says something the heading does not and never stack one over every heading; BRD-003 [C] lists the eyebrow over every heading as an inherited signature to replace.

**Ruling.** Eyebrows that restate the heading go; identifiers become mono code tags (IDN-006); a short status word ("Module 3 · Done") may stay as a label. There is no conflict, only three Parts saying the same thing.

**Decision Log.** No.

### A dashboard item in the header

**Sides.** NAV-052 [C] makes the signed-in learner's home reachable from a visible, labeled item on every page. NAV-060 [C] keeps the global bar to districts plus account controls. PER-077 [C] keeps chrome calm.

**Ruling.** Add "Dashboard" for signed-in learners, at `md` and up, on the right side with the account controls, before the `UserMenu`. It is an account control, so NAV-060 is kept; the drawer already lists it on phones (NAV-064).

**Decision Log.** No.

### The planned onboarding

**Sides.** D-27 and Section 20.13 plan a five-screen `/welcome` flow (Welcome, Set up your cockpit, Set up the sim, Tour the site, Sign up), behind a "Get started" button, skippable and replayable. FRM-051 [C] puts no tour before the first task; FRM-047 [B], INT-065 [B] and WRT-029 [B] make the first screen a real task with explanation attached; FRM-054 [C] makes every first-run step skippable and measured; MOT-054 [B] wants a plain, hardware-specific control map early; FRM-014 [C] and INT-055 [C] ask for settings at the moment they matter.

**Ruling.** The owner chooses. The recommendation is that the first lesson remains the onboarding and the landing CTA keeps going straight to it; the "Set up your cockpit" and "Set up the sim" content becomes a page reachable from Lesson 0.2 and `/account`, asked in context and skippable; "Tour the site" is dropped; sign-up stays at "Mark lesson complete".

**Reason.** The B-graded rules on first runs favor a real task first. D-27's problem statement (visitors never learned what each part of the site does, and preferences stayed on defaults) is real, and the recommendation answers it in the path of the task rather than before it. Because D-27 records the owner's own request, this is a choice between the owner's stated wish and the evidence, which only the owner can make.

**Decision Log.** Yes: confirm D-27 with changes, or supersede it.

### Locking lessons versus gating completion

**Sides.** MOT-004 [C] and Part IX's decisions keep the sequence open and lock nothing a learner could safely skip. INS-051 [A], SKL-020 [B] and SKL-041 [B] gate progress on a demonstrated standard; Part XVI's decisions make module completion depend on the combined challenge.

**Ruling.** Access is never locked. What a module's "complete" means is gated: a module is complete when its final challenge's required criteria are met, not when its lessons are marked read. The recommended next step follows the same standard.

**Reason.** The A-graded rule is about progress, which LTF can gate through its completion status and recommendations without removing a learner's choice. Both sides are kept.

**Decision Log.** Yes if `v1.md` defines module completion by lessons alone.

### Captions

**Sides.** LRN-025 [B] does not show on-screen text duplicating narration by default and makes captions a control that is always offered. ACC-054 [C] captions every video with speaker identification and meaningful non-speech sounds, with a transcript.

**Ruling.** Every video ships with authored captions and a transcript beside it (ACC-054); the caption control is always visible, and its default follows the learner's caption preference in the player (LRN-025). The landing launch video, which has music and no narration, gets a short text description of what it shows.

**Reason.** The rules govern different things: LRN-025 concerns redundant text in instructional animations, ACC-054 concerns access to audio. Both hold.

**Decision Log.** No.

### One encoding for progress

**Sides.** VIZ-012 [B] and VIZ-035 [C] give module progress one encoding, the bar, with the ring as a single-card glyph. BRD-043 [C] reuses the `LessonPath` construction for a module's progress.

**Ruling.** Position in a sequence is drawn as a `LessonPath` (where you are among ordered stops); proportion complete across modules is a `ProgressBar` (how much, compared on a common scale). The ring survives only on the dashboard Continue card with its value printed (AUD-026, IDN-010).

**Reason.** They encode different questions, "where am I" and "how much", and each rule is right for its own.

**Decision Log.** No.

### Target sizes

**Sides.** LAW-011 [C], ACC-041 [C], FRM-058 [B], NAV-065 [C] and ICO-015 [C] set 24 px as the floor and 44 px for primary, repeated and sequential controls. LAW-012 [B], GRD-078 [B] and ACC-042 [B] go larger for divided attention and Fly mode; Part VIII's decisions name 48 px minimum and 64 px preferred in Fly mode.

**Ruling.** Floor 24 px everywhere; 44 px for primary, repeated, sequential and touch-first controls; Fly mode controls at least 48 px, with step rows full width and at least 56 px tall (AUD-037, AUD-049). The 56 px row is my judgment between 48 and 64, to be tested in the in-context round.

**Decision Log.** No; `v1.md` already names 44 px targets.

### Five users

**Sides.** The front matter says watching five people outranks distant experiments. EVD-028 [B], USE-064 [A] and USE-065 [A] keep small repeated rounds of about five but deny that five finds most problems; EVD-029 [B] and USE-068 [D] review every session for severe problems.

**Ruling.** The ranking stands (local observation over distant results); the number is a round size, not a coverage claim. Rounds of about five per learner group, repeated with fixes between, stopped by a written rule. The front matter's sentence should be read that way.

**Reason.** The claim that four or five users reveal about 80 percent of problems is how later reviewers describe Virzi's work [@virzi1992refining; @lewis1994sample]; in Faulkner's test of 60 users, as she reports it, the first five revealed only 35 percent of the problems, and the 13th and 15th users each still revealed a new severe one [@faulkner2003beyond].

**Decision Log.** No.

### Four further conflicts the audit found

**16. Naming a lookup page.** NAV-035 [C] wants one name across header, `h1` and title; WRT-022 [C] writes lookup headings as the reader's question. Ruling: `h1` "Reference" and the question as the search field's label (AUD-044).

**17. Accent on links.** COL-072 [C] lets the accent mean only "where you are and the next step"; BRD-013 [C] lists link underlines among the horizon line's uses; INT-012 [C] keeps links conventional. Ruling: links keep the accent text color and an underline, because a distinct link color is a reading convention, but the 3 px horizon stroke is never used to underline links; the stroke means position and progress only (IDN-005).

**18. The ink primary button.** Part XX's asset table proposes replacing the ink button with "an LTF form"; AES-002 [B] and USE-035 [B] keep controls familiar. Ruling: the ink primary button stays; the ink pill toggles and ink tooltip go (IDN-018). The reasoning is in the diagnosis chapter.

**19. Part III's 68ch decision.** Ruled in item 2: not implemented, because it yields about 100 characters per line.

::: {.rule #AUD-053 grade="B"}
**Decide Fly mode's default theme by an in-context glance test in both polarities, with display luminance and room light recorded, and change the default only on its result.** The default is set by measuring glance reading time and step accuracy (COL-065), Night and Fly mode are verified with learners rather than assumed (TYP-061), and tests of Fly mode run beside a running simulator (USE-063, ACC-080); the polarity literature favors dark text on light for reading and found light-on-dark worst for glance reading in near-dark rooms [@piepenbrock2013positive; @dobres2017effects]. Severity: not applicable (decision procedure).

*In LTF:* six to ten beginners, each flying the same short challenge twice with Fly mode on a phone at arm's length, once in Day and once in Night in counterbalanced order, in their own room light. Measure the time from looking at the phone to the correct tick and the wrong ticks. Record the result next to COL-065 in the design-system README.
:::

### What this means for Learn to Fly

The Parts agree on far more than they disagree, and most "conflicts" dissolve once the measurement, the surface class or the meaning of a word is fixed.

Keep: every rule's text; these rulings are applications, not amendments.

Change: Fly mode's forced Night (ruling 4), the banner in Fly mode (5), the result order (6), the `decision` callout (7), the header for signed-in learners (9), the onboarding plan (10), what module completion means (11), Part III's measure proposal (2, 19).

Build: Decision Log entries for rulings 1, 4, 10 and, if needed, 6 and 11; the Fly mode glance test (AUD-053); a line in the design-system README listing each ruling with its date, so that future writers do not reopen settled questions without new evidence (EVD-006).

## The identity playbook

This chapter says what LTF should look like when it stops looking generic. It is written as specifications a developer can implement: tokens, utilities, components, where each element appears and where it must not. Every specification is tied to rules and grades. Where a value is a choice among compliant options (a radius, a width setting), it is labeled a judgment, and it is a candidate for the identity tests at the end of the chapter rather than a finding.

### The direction, and how to choose it

Three directions are on the table, and the owner records one as D-34 (AUD-017).

| Direction | What it is | Main cost |
| --- | --- | --- |
| Livery (D-25) | navy, livery red, uppercase condensed, illustration | breaks status red and caps rules |
| Shipped | warm neutral, ink, one teal, no display voice | nondescript |
| Instrument and handbook | shipped tokens plus a subject layer | more work, untested |

The recommended direction keeps the shipped tokens (warm-neutral grounds, ink ramp, the teal horizon line, the fin) and adds a layer drawn from the subject's own artifacts: the pilot's operating handbook's ruled tables and numbered sections, the kneeboard, the instrument panel's drawn faces and readouts, and the brief, fly, debrief sequence of flight training. It takes from D-25 the one thing its rules allow, a condensed display voice confined to display sizes, and leaves the livery red and the uppercase sentences behind.

The reason to prefer it is the evidence on typicality and novelty: novelty is liked when it does not cost typicality [@hekkert2003most], first glances reward simple, prototypical pages [@tuch2012role], and descriptive cues help an unknown brand most [@luffarelli2019let]. Subject artifacts are descriptive (a drawn airspeed dial says "flying" before any text is read) and they sit in layers where novelty is safe (BRD-002, BRD-040). The calm, refined register that BRD-026 [D] aims at is kept, and the risk that "delicate" slides into "nondescript" is answered with drawn content and a display voice, not louder color.

::: {.rule #IDN-002 grade="C"}
**Adopt one identity direction by recorded decision before any identity work ships, and state it in one paragraph that names its source artifacts, its signature elements and what it excludes.** Identity directions are recorded and finished everywhere (BRD-004), identity ideas come from the subject's own artifacts before other software (BRD-040), and the missing strategy phase comes before more visual work (BRD-042); a strategy is one of the phases identity practitioners treat as distinct from design [@wheeler2012designing]. The choice among directions is the owner's.

*In LTF:* the recommended D-34 paragraph: "Learn to Fly looks like a well-made pilot's handbook beside a well-drawn instrument panel. Its grounds are warm neutral, its text is ink, its one color is the teal horizon line that marks where you are and what is done. It speaks in Instrument Sans, with a condensed display voice for page titles and results, and measures in JetBrains Mono. It draws instruments and charts; it does not use photographs, illustrations of airplanes, mascots, livery red or navy."
:::

### The structure that stays conventional

The playbook's novelty is spent in a few places so that everything else can stay typical. This list is the "structure" half of the identity register (IDN-001), and a pull request that changes any item on it needs a reason grounded in a learner task.

::: {.rule #IDN-003 grade="B"}
**Keep page skeletons, navigation, form controls, link styling, tabs, focus and the aviation conventions exactly conventional, and reject any identity proposal that changes them.** Familiar forms for every control a beginner operates (AES-002), typical page skeletons (AES-017), conventional navigation and patterns with novelty spent on content and identity (EVD-035, USE-035, INT-012), and aviation conventions never changed for distinctiveness (BRD-034); websites low in prototypicality are judged unattractive within a fraction of a second [@tuch2012role].

*In LTF:* unchanged by this playbook: `RootLayout`, `Header` items and drawer, breadcrumbs, `LessonPage`'s three-zone grid, `Tabs`, `Button` behavior and the ink primary fill, `control-box`, `Checkbox`, `RadioGroup`, underlined links, the focus ring, arc and course colors, chart colors.
:::

### The signature set

Ten elements carry the identity. Each is already present in some form in the code; the playbook specifies it, gives it one form, and says where it must and must not appear.

| Element | Lives in | Appears on |
| --- | --- | --- |
| Display voice | `display-*` utilities | every `h1`, result, share card |
| Horizon line | `accent-line`, `--stroke-horizon` | position and progress only |
| Code tags and readouts | `code-tag`, `readout-*` | codes, values, timers |
| The fin | `Logo.tsx` paths | header, icons, share images |
| Ruled sheets | `Sheet` pattern | lists, tables, panels |
| One geometry | radius and stroke tokens | every component |
| The lesson path | `LessonPath` | every ordered sequence |
| Drawn instruments | widget primitives | lessons, landing, share card |
| Brief, Fly, Debrief | copy and tabs | every challenge surface |
| The honesty form | `CheckLine` | every verified or unverified fact |

#### The display voice

Instrument Sans ships a width axis from 75 to 100 percent in the package LTF already depends on (the "standard" file, `standard.css`, which declares the same family with `font-stretch: 75% 100%`); LTF loads only the weight-axis file. A condensed cut of the face LTF already uses gives the product a recognizable display voice without a fourth family (TYP-010), without a new license, and without the uppercase sentences of D-25.

::: {.rule #IDN-004 grade="C"}
**Give LTF one display voice: Instrument Sans at a condensed width, sentence case, used for every page `h1`, the landing section headings, the Fly mode title, the result tier and share images, and nowhere else.** One type voice appears only in brand moments while body text stays in a legible workhorse face (BRD-027), it repeats identically (BRD-028, BRD-031), any distinctive face is confined to display sizes (SCR-032, TYP-008, LEG-023), no sentence is set in capitals (TYP-036), and widths come from the font, never from distortion (TYP-012) [@w3c2026cssfonts]. The width value is a judgment to be tested.

*In LTF:* import `@fontsource-variable/instrument-sans/standard.css` (or the equivalent own `@font-face` under AUD-016) in place of the weight-only file; Latin cost rises from about 30 KB to about 57 KB, measured from the package files. Add `--font-display-width: 80%` and set `font-width` (with `font-stretch` as fallback) in `display-xl`, `display-lg` and `display-md` only, weight 650, tracking `-0.005em`, line height 1.05. `PageHeader` h1, the lesson h1, `FlyModePage` h1, the landing h1 and h2s and `ResultView`'s tier word use it; `heading-*`, body, labels and buttons never do. Check the I and l pair is never needed to read a title (TYP-017).
:::

#### The horizon line

The tokens file already states the idea ("one saturated non-status color, the horizon line"). The playbook turns it into a usage rule with a whitelist, because a cue becomes an asset only through consistent use [@romaniuk2018building].

::: {.rule #IDN-005 grade="C"}
**Use the horizon line, a 3 px `accent-line` stroke, only to mark where the learner is and what is done, and spend `accent-tint` only on the single current item on a screen.** The horizon line gets a written usage rule (BRD-013), the accent means one thing (COL-072), status and brand colors do not mix (BRD-014), and exceptions pop only when ordinary items lack their feature (PER-037) [@romaniuk2018building].

*In LTF:* add `--stroke-horizon: 3px`. Allowed: the active header link and active tab underline; the active `SectionNav` item; the `LessonPath` connector between done stops; the `ProgressBar` fill; the current Fly mode step's left edge (AUD-038); the `Card current` border. `accent-tint` is allowed only on the current card, the current module row and the current `LessonPath` halo. Removed: `hover:border-accent` (six places in four files), `accent-tint` on the objectives box, the resume bar, `QuizPanel`, the `sim` and `memory` callouts and the "Simplified model" badge (which becomes `outline`). Links keep `accent` text and a 1 px underline; the 3 px stroke never underlines links.
:::

#### Code tags and readouts

JetBrains Mono is already "the face for everything you measure". The playbook extends it to identifiers, so that codes replace the uppercase eyebrows and the product gets a second recognizable cue that is native to aviation, where everything has a code.

::: {.rule #IDN-006 grade="C"}
**Set every identifier (module, lesson and challenge codes, section numbers, ICAO codes) as a mono code tag, and every measured value through a `readout` utility at weight 500, replacing restating eyebrows with code tags.** Identifiers and values go in a face whose figures and letters are distinct (SCR-029, LEG-026), with tabular figures (TYP-047), one weight per size (TYP-049), eyebrows only where they add information (TYP-038, SCR-051), and readout numerals repeated identically as a signature cue (BRD-031) [@montoya2017reexamination].

*In LTF:* new utility `code-tag`: `readout-sm` (0.875rem, weight 500), `ink-2`, `letter-spacing: 0.02em`, no uppercase transform (codes are already capitals). Format "M3", "L3.2", "C4.3", "§02". Used on module cards ("M3 · 6 lessons"), the lesson header ("L3.2 · lesson 2 of 6", replacing the accent mono label), challenge cards and the result. Readout scale: `readout-sm` 14, `readout` 16, `readout-lg` 32, `readout-xl` 48, `readout-2xl` 64 (Fly mode stopwatch), all weight 500 and tabular. A value and its unit never break across lines (TYP-032); the unit sits in the text face at `body-sm`.
:::

#### The fin and every outward-facing image

The fin is a good mark by the evidence: natural, descriptive and moderately elaborate [@henderson1998guidelines; @luffarelli2019let]. Its problem is everything around it (see the chapter on drift).

::: {.rule #IDN-007 grade="C"}
**Draw the fin once, add a one-color variant, and generate every icon and share image from one template that carries the fin, the page title in the display voice, its code tag and the horizon line.** The mark is drawn once (BRD-023), works in one color at 16 px on both grounds (BRD-021), shows beside the name where space allows (BRD-016), and outward surfaces are attributable before their text is read (BRD-009, BRD-052) [@rand1991logos].

*In LTF:* `LogoMark` gains `variant="solid"` (fin and stripe both `currentColor`, gap cut) for print and the kneeboard. The share template is 1200 by 630 on `canvas`: the fin at 96 px top left, the page title in `display-lg` (display voice, `ink`), the code tag below it, a 6 px horizon line across the foot (the share scale of the 3 px stroke), and, for lessons and challenges, the lesson's key instrument drawing on its fixed ground at the right. The fin's stripe diagonal may repeat once as a band on share images only, never in page UI (ICO-078). Every share image of a result carries "Practice in a flight simulator. Not a pilot certificate."
:::

#### Ruled sheets instead of boxes

The pilot's operating handbook, the checklist card and the kneeboard organize information with rules, numbers and alignment, not with rounded boxes. LTF's landing page already does this twice (the "How a lesson works" row under a 2 px `line-strong` rule, the FAQ items under 1 px rules), and those are among its least generic bands. Replacing most boxes with ruled sheets fixes the faint-surface problem (AUD-006), cuts visual complexity [@reinecke2013predicting] and moves the look toward the subject.

::: {.rule #IDN-008 grade="C"}
**Present lists, tables, stats and panels as ruled sheets (a 2 px `line-strong` rule over a heading, rows separated by 1 px `line` rules, values aligned in a mono column) and keep boxed `Card`s only for self-contained objects.** Enclosure is reserved for groups that need it (PER-016, GRD-033), boundaries that carry grouping must read in both themes (GRD-032), identity comes from the subject's artifacts (BRD-040, SYS-068), and fewer image areas and competing regions lower first-contact complexity (AES-011) [@reinecke2013predicting]. The specific rule weights are a judgment.

*In LTF:* a `Sheet` layout component (or a documented class pattern) with `SheetHeader` and `SheetRow`. Sheets replace: the dashboard's stats tiles, "Your progress" and "Recent attempts" boxes; `ModulePage`'s boxed lesson and challenge lists (with `LessonPath` pins, IDN-010); the challenge filter card (a single ruled filter row); the lesson completion panel; `SpeedsPage`'s limits tiles; the landing "What you need" cards and stats row. Cards stay for challenge cards in grids, `WidgetFrame`, `QuizBlock`, the landing sample challenge, the Continue card and dialogs.
:::

#### One geometry

LTF's shapes come from three sources: the fin's sweeping curve and diagonal, the instruments' circles and rectangles, and the component kit's 16 px rounded boxes and pills. BRD-030 asks for one vocabulary derived from the mark and the instruments.

::: {.rule #IDN-009 grade="C"}
**Reduce the radius set to 4, 6 and 10 px, keep circles only for things that are round in the subject (pins, dots, dials, tier rings), and use one icon stroke table.** Shape vocabulary derives from the mark and the instruments (BRD-030), one stroke and corner style for every icon (ICO-017), and harmony among parts raises affect and familiarity in logo research [@henderson1998guidelines; @vanderlans2009cross]. The values are a judgment.

*In LTF:* `--radius-sm: 4px` (badges, chips, code tags on tints, inline code), `--radius-md: 6px` (buttons, fields, callouts, toasts), `--radius-lg: 10px` (cards, `WidgetFrame`, dialogs, the drawer); `--radius-pill` survives only in tier badges and progress tracks. Bracket radii (`rounded-[2px]` and the rest) go. Icon strokes: 2 at 12 to 14 px, 1.75 at 16 to 24 px, 1.5 at 32 px. This is a medium pace-layer change with a `CHANGELOG.md` entry, not a Decision Log entry.
:::

#### The lesson path

`LessonPath` is the clearest system-level signature in the product: one vertical line, numbered pins, one current ink pin with a halo, teal only between completed stops (BRD-043). Part XII's ruling assigns it the job of showing position in a sequence.

::: {.rule #IDN-010 grade="C"}
**Write down the `LessonPath` construction and use it for every ordered sequence: Module 0 on the landing page, each module on `/learn`, the lesson list on `ModulePage`, the roadmap ladder and a module's challenge sequence.** Construction rules are the main identity (BRD-043), the course's one main path is shown as a line (NAV-001), position is shown with a word as well as a mark (NAV-005), and the system, not the logo, is what made the best-documented identities recognizable [@garland1994beck].

*In LTF:* the rules: 3 px vertical connector (`--stroke-horizon`), `line-strong` between stops not yet done and `accent-line` between done stops; 32 px pins with the stop number in `readout-sm`; done pins filled `accent` with an `on-accent` check; exactly one current pin per path, `ink` with a 4 px `accent-tint` halo and one `accent` action; upcoming pins a 2 px `line-strong` ring; locked pins dashed with the word "Locked" or "Being written". `RoadmapPage` replaces its `border-l-2` spine and `border-go` rung with this construction. Fly mode does not use it (its steps need full-width rows).
:::

#### Drawn instruments in the first view

The widgets in `src/features/widgets/` are LTF's most distinctive visual material and the strongest evidence of what the product is. They are simplified, labeled models drawn in fixed instrument colors (EVD-037, AES-057). Today a visitor first meets them inside a lesson.

::: {.rule #IDN-011 grade="B"}
**Show one drawn instrument from the widget system in the landing hero and on lesson and challenge share images, as a labeled simplified model with a text alternative.** One unmistakably LTF element belongs in the first view inside a simple layout (BRD-050), descriptive cues help unknown brands [@luffarelli2019let], embellishment tied to content is allowed on landing and share surfaces (ICO-078), drawings teach as caricatures and are labeled as models (AES-057, ICO-064), and every drawing states its content in text (ACC-069).

*In LTF:* the right column of the hero renders the airspeed indicator from `airspeed-indicator/` at 360 to 440 px on its `instrument` ground, static, with the "Simplified model" label and a caption naming the lesson that teaches it. No aviation value appears in the caption copy. The alternative candidate is the Module 0 `LessonPath` card moved into the hero; the glance test (IDN-025) chooses between them. `YouTubeEmbed` moves to the "How a lesson works" band.
:::

#### Brief, Fly, Debrief

The challenge tabs carry the structure of flight training in the interface. It is LTF's most ownable language (BRD-012) and appears in full only on `ChallengePage`.

::: {.rule #IDN-012 grade="C"}
**Name the challenge sequence "Brief, Fly, Debrief" identically on every surface that describes or runs a challenge, and show the current phase as a code-tag label at the top of Fly mode and the debrief.** One name for each concept everywhere (SYS-028, LEG-006, WRT-020), the current mode shown in words in a fixed place (INT-028, USE-039), and language among the candidate assets that could be unique to LTF (BRD-012, BRD-006) [@keller1993conceptualizing].

*In LTF:* the landing page gains a "How a challenge works: Brief, Fly, Debrief" band (IDN-024); challenge cards show "Brief · Fly · Debrief" progress for a started attempt; `FlyModePage` shows "Fly · C4.3" as its first line; `DebriefForm` shows "Debrief · C4.3". The tabs themselves stay conventional Radix tabs.
:::

#### Color roles

::: {.rule #IDN-013 grade="C"}
**Keep exactly these color roles: warm-neutral grounds, a three-step ink ramp, one accent for position and progress, three status hues for status, three tier hues for tiers only, and fixed instrument and chart colors inside drawings; add no hue.** Tokens are named by role (COL-018, SYS-016), large areas stay muted and saturated color is spent on small meaningful elements (COL-023, COL-040), status hues mean status (COL-068), instrument colors stay in drawings (COL-075), and the brand color is defended by its role (BRD-029); color associations from rating studies are no basis for a hue [@labrecque2012exciting].

*In LTF:* no navy, no livery red, no gradients, no per-module colors (BRD-031). Tier colors appear only in `TierBadge`, tier rings and the result block. Drawings may carry their fixed colors onto identity surfaces (hero, share card) because they are drawings. The `YouTubeEmbed` frame stops using `bg-instrument`, a drawing token, as page chrome; it uses `surface-sunken`.
:::

#### The honesty form

LTF tells learners what it has checked; that is its most unusual behavior (BRD-045) and has no visual form of its own. It appears as a caution strip (`BetaBanner`), an accent badge, a draft badge, an `UnverifiedWarning` box, a dashed `verify` callout and a plain "Last verified" line.

::: {.rule #IDN-014 grade="C"}
**Give every statement of verification, beta status and limits one component, the check line: a single line in a fixed format, checked or not yet checked, with its date and sim version in mono and a link to how LTF checks.** Honesty gets a consistent visual form as a brand signature (BRD-045, SYS-073), unverified content looks different from verified content (AES-053), limits are stated in one pattern (WRT-055), honesty statements agree (AES-054), and verification marks earn authority instead of decoration borrowing it (ICO-086); Rams's honesty principle is not to overstate [@rams2026good].

*In LTF:* `CheckLine` has variants `checked` ("Checked in MSFS 2024 · sim version · date", a 16 px check in `ink-2`, text `ink-2`), `unchecked` ("Not yet checked in the sim. Treat its numbers as provisional.", text `ink`, 1 px dashed `line-strong` rules above and below, the dashed border's one meaning), `beta` (the one agreed beta sentence, AUD-020) and `limit` ("Practice record, not a pilot certificate."). No tint and no status color, because none of these is an alert (COL-068). It replaces `DraftBadge` and `UnverifiedWarning` in lesson headers, the "Last verified" line on `SpeedsPage`, the beta strip, and the note under `CourseBadge`. The `verify` callout stays an author-only block but adopts the dashed rule.
:::

### Imagery, motion and voice

::: {.rule #IDN-015 grade="B"}
**Use only drawn instruments, drawn charts, real simulator screenshots for orientation and generated share images; no photographs, no airplane illustrations, no mascots and no stock icons as illustration.** Teach with caricatured drawings and use screenshots for where to look (AES-057, ICO-041), keep decorative and irrelevant pictures out of explanations (ICO-035, AES-042), no mascot (BRD-048), no negative flying imagery on outward surfaces (BRD-020), and elements shared with many flight sites make poor assets (BRD-012) [@romaniuk2018building].

*In LTF:* the three Module 0 screenshots stay, framed in a `figure` with a caption that says what to notice (ICO-087). The planned challenge-type icons are drawn in the house stroke and tested (ICO-025, ICO-027) before they replace the lucide stand-ins.
:::

::: {.rule #IDN-016 grade="C"}
**Keep motion as LTF's quietest layer: the only signature motions are `tier-pop` on an earned tier and the horizon line extending along a path or bar when progress is saved.** Motion character only for achievement and instrument-like widgets (MOV-006), brief, earned celebration (AES-045, BRD-047), one thing moving at a time (MOV-005), and none on the Fly mode screen except the alert (MOV-058, MOV-060) [@w3c2024wcag].

*In LTF:* no page transitions, no scroll-triggered motion, no hover animations beyond the 150 ms color change. The 400 ms progress and path transitions in `Progress.tsx` and `LessonPath.tsx` become the named `--duration-progress` token. All motion follows the Motion setting (AUD-048).
:::

::: {.rule #IDN-017 grade="C"}
**Write the voice down as a one-page guide of rules and a vocabulary list, and review copy against it.** A short voice guide of concrete rules instead of a personality (BRD-046), one voice with tone varied by named moment (WRT-050, WRT-051), one label per action (WRT-045), calm by default with energy only for earned results (BRD-047); in free-response data, people rarely attribute personality traits to brands at all, so behavior carries character [@romaniuk2012brands].

*In LTF:* the guide states: second person, present tense, short declaratives; the limit, then what it means; no exclamation except an earned Gold or course completion; no "easy", "just", "simply"; one dry line at most on non-safety pages (the taxiway 404 is the model); headings that name situations. The vocabulary list fixes: Brief, Fly, Debrief, Fly mode, Day, Night, kneeboard, "Create a free account", "Checked in the sim", "Not yet checked", "Practice record".
:::

### What to remove

::: {.rule #IDN-018 grade="C"}
**Remove the borrowed signatures: the ink pill segmented controls, the ink pill timer, the ink tooltip, restating eyebrows, accent and status tints on non-current and non-status content, dashed empty states and the stock icon row on the landing page.** Inherited defaults are decided one by one and borrowed perceptual signatures replaced (BRD-003), state controls look different from action buttons (USE-032, INT-014), selection and focus look different (ACC-027), and an element that adds nothing a learner needs or recognizes is left out (ICO-070) [@hekkert2003most].

*In LTF:* `ThemeToggle` and the `WidgetFrame` Explore and Quiz toggle become one `SegmentedControl`: 44 px, `radius-md`, a `line-strong` 1 px outline, the selected segment `surface-raised` with `ink` text, a 2 px `ink` underline and a check icon, unselected `ink-2`. `Tooltip` becomes `surface-raised` with a `line-strong` border and `ink` text. `Stopwatch` drops its ink pill: digits in `readout-lg` (or `readout-2xl` in Fly mode) on the page ground, with ordinary 44 or 48 px `secondary` buttons. The ink primary `Button` stays (the diagnosis chapter explains why).
:::

### Components that carry the signature

::: {.rule #IDN-019 grade="B"}
**Use one feedback form for every right-or-wrong result: a status icon, a verdict word, the correct answer and the reason, on its status tint without a side stripe.** Every answer gets the correct answer and a reason (LRN-054, INS-048), verdicts are calm (WRT-039), status is a word plus an icon and never color alone (LEG-033, COL-045), and the same function takes the same form (USE-030) [@shute2008focus].

*In LTF:* `QuizBlock`, `QuizPanel` and the `ResultView` criterion rows share `FeedbackRow`: 20 px icon (Check, X or Minus circle) in `go`, `warn` or `caution`, the verdict word in `font-semibold` `ink`, the explanation in `body-lg` `ink`, `radius-md`, status tint fill, no border.
:::

::: {.rule #IDN-020 grade="C"}
**Draw a small set of state glyphs from the subject (an empty kneeboard clip, a blank logbook page, a disconnected headset plug, a closed hangar door) in the house stroke, and use them only with their words in empty, error and not-found states.** Empty and error states carry an LTF-specific visual cue and voice (BRD-053), icons a beginner meets carry visible words (ICO-008), arbitrary pictures are listed in the icon register (ICO-021), and new pictures are drawn as a set with one grammar (ICO-016) [@vignelli2010canon].

*In LTF:* 32 px on a 24-unit grid at stroke 1.5, `ink-2`, registered in the icon register with their meanings; `EmptyState` uses the clip for "nothing here yet", `ErrorState` the plug for load failures, `NotFoundPage` the hangar door. They are never used without text.
:::

::: {.rule #IDN-021 grade="C"}
**Make the result block LTF's signature composition: the tier word in the display voice inside its tier ring, the percentage as a `readout-xl`, the self-assessed check line and the fin, placed after the feedback and saved as a share image.** The result card and course completion are the signature compositions and shareable with the brand intact (BRD-052), with energy reserved for earned results (BRD-047, AES-045), the tier saying what it is and is not (AES-061, MOT-022), and feedback before score on the screen itself (MOT-036) [@ehrenberg2002brand].

*In LTF:* in `ResultView`, after the criterion rows: a ruled sheet with "Gold" (or Silver, Bronze) in `display-md` in the tier color, a 2 px tier ring, `readout-xl` percentage in `ink`, "Self-assessed against the challenge criteria" as a `CheckLine limit`, the fin at 20 px. `tier-pop` stays on the tier word. A "Save image" action renders the IDN-007 template with the same block.
:::

::: {.rule #IDN-022 grade="B"}
**Build Fly mode as a fixed three-region template (header, reserved alert region, steps) with a bottom bar for the timer and finish, sized for arm's length, and compensated for Night when Night is used.** One viewport, one region per task, fixed positions (GRD-074, GRD-077, GRD-081, PER-080), landscape width used side by side (GRD-079), large brightest type for steps (COL-064, SCR-009, SCR-057), the plainest screen in the product (ICO-085) [@dobres2017effects].

*In LTF:* header: "Fly · C4.3" code tag, title in `display-md`, Day and Night switch, exit link. Alert region: fixed height, "No events" until one fires (AUD-036). Steps: full-width rows at least 56 px, step text at `1.875rem` weight 500 in `ink`, the current step marked by the horizon line and "Now", ticked steps receding to `ink-2`. Bottom bar: stopwatch in `readout-2xl` and 48 px buttons, "Finish and debrief". In landscape at `lg`, steps take the left two thirds and alert, timer and finish the right third. Foot: "Public beta · Report a problem" (AUD-035).
:::

::: {.rule #IDN-023 grade="C"}
**Keep the reference hub's handbook construction (numbered sections, the kneeboard band, ruled tables) and sign every printed kneeboard and checklist with the fin and a check line.** Identity drawn from the subject's artifacts (BRD-040), every surface signed, including print (BRD-007, BRD-031), and reference material HTML first with print as a copy (ACC-013, SCR-005) [@vignelli1970graphics].

*In LTF:* `ReferenceSections` keeps "01" to "05" as code tags; the print styles add a footer with the solid fin at 12 mm, "Learn to Fly", the page title and the check line with its date. No game elements on reference pages (MOT-017).
:::

::: {.rule #IDN-024 grade="C"}
**Keep the landing page's band order and replace the contents of its generic bands with LTF's own material: the drawn instrument, the Module 0 path, a Brief, Fly, Debrief band, ruled curriculum and needs lists, the sample challenge and the FAQ.** Typical structure with novelty in identity layers (BRD-002), the first view carrying an LTF element (BRD-050), large repeated structures varied (BRD-032), and fewer competing regions on first-contact pages (AES-011) [@tuch2012role].

*In LTF:* hero (display h1, sub-copy, two buttons, the merged note, the drawn instrument); "Where you start" (unchanged path card, code tag instead of eyebrow); "How a challenge works: Brief, Fly, Debrief" (three ruled columns, each showing a real excerpt: two lines of a brief, three Fly mode steps, one feedback row) replacing the five-icon row; "How a lesson works" with the video and a one-line description of the five steps without icons; curriculum as a ruled sheet with code tags and bars; the challenge band; "What you need" as a three-row ruled list; FAQ; final call to action. Every value on the page comes from content (AUD-023).
:::

### Testing whether the identity works

::: {.rule #IDN-025 grade="B"}
**Record a baseline brief-exposure and lookalike test of the landing, lesson and challenge pages before the identity release, repeat it after, and test the fin's recognition before regenerating icons.** Preference is not evidence (BRD-054, AES-063), a baseline is kept before a redesign (AES-066), brief-exposure tests ask which screens look alike as well as which appeal (BRD-057, AES-012), marks are tested for true and false recognition (BRD-056), and reactions are measured after several sessions (BRD-059); appeal judged at 50 ms agreed closely with judgments at 500 ms [@lindgaard2006attention].

*In LTF:* ten to fifteen people who have never flown, recruited through the beta list, see screenshots of LTF pages, three competitor pages and one unbranded component-kit template for 500 ms each, rate appeal, then pick the two most alike. Repeat after release 4 with the same stimuli. The fin is tested in the two-second recognition format with airline tail marks among the distracters (BRD-056). Results go to `docs/` beside the verification records.
:::

### What this means for Learn to Fly

The playbook adds very little that is new. It takes what LTF already has (a condensed width in its own face, a teal line with a meaning, a mono face for measured things, a fin, a few ruled bands, a lesson path, thirteen drawn widgets, a training vocabulary, a habit of honesty) and gives each one a single form and a place where a learner meets it first.

Keep: the structure list in IDN-003; the ink primary button; the warm-neutral palette and teal; the fin paths.

Change: headings into the display voice (IDN-004); accent use to the whitelist (IDN-005); eyebrows into code tags (IDN-006); boxes into ruled sheets (IDN-008); radii and strokes (IDN-009); pill toggles, ink tooltip and ink timer into conventional forms (IDN-018); the landing bands' contents (IDN-024).

Build: the share template and icon script (IDN-007); `Sheet`, `CheckLine`, `FeedbackRow`, `SegmentedControl` and `code-tag` (IDN-008, IDN-014, IDN-019, IDN-018, IDN-006); the hero instrument (IDN-011); the result block (IDN-021); the Fly mode template (IDN-022); the state glyphs (IDN-020); the baseline and follow-up tests (IDN-025).

## The roadmap: releases in order

### How the order was set

The order follows three rules from earlier Parts and one from this one. Fix task failures before visual refinement on surfaces learners operate (USE-076, AES-006, AUD-003). Improve the live system in recorded steps rather than building a parallel redesign (SYS-043). Give each step an external stopping rule (SYS-044). And remove sloppiness before adding identity, so that the identity is applied to a consistent system and judged on its own (AUD-052).

Each release below lists its scope by rule ID, the rules it satisfies, how to verify it, whether `v1.md` needs a Decision Log entry, and what not to do yet. The releases are sized as one pull request or a small group of related pull requests each, in the project's usual form (`AGENTS.md`, `v1.md` Section 39.4). Releases 1 and 2 can overlap in time where they touch different files; releases 4 and 5 cannot start before the baseline in release 0 exists.

::: {.rule #AUD-054 grade="C"}
**Deliver the audit's fixes and the identity as ordered releases on the live product, each with a stated scope, verification and stopping point, and never as a parallel redesign.** Continuous, recorded steps on a live system (SYS-043), an external stopping rule for every design effort (SYS-044), slow layers changed only by recorded decision (SYS-033, BRD-036), and design-system changes logged with breaking changes marked (SYS-040); a living standards manual has a maintenance cost and is revised in situ [@vignelli1970graphics]. Severity: not applicable (process).

*In LTF:* each release below becomes a milestone; each pull request cites its AUD and IDN IDs, adds a `CHANGELOG.md` line for anything a learner can see, and runs `/ship`. A release is done when its verification list passes, not when its last pull request merges.
:::

### Release 0: decisions, sources and a baseline (no visual change)

**Scope.** Decision Log entries: D-34 for the identity direction (AUD-017, IDN-002), the onboarding ruling (rulings chapter, item 10), the Fly mode theme ruling (item 4) and, if `v1.md` defines module completion by lessons, the completion ruling (item 11). The design-system README with the contrast table, stroke table, radius set and identity register (AUD-015, IDN-001). `v1.md` Section 21 rewritten to point at it (AUD-021). The one agreed honesty sentence (AUD-020), decided by the owner against D-32. A second, independent inspection by another reviewer using this Part's scenarios (AUD-001). The baseline glance and lookalike test (IDN-025) and the fin recognition test (BRD-056), run on the current product.

**Satisfies.** BRD-004, BRD-015, BRD-024, BRD-042, SYS-006, SYS-033, SYS-083, EVD-006, AES-066, EVD-026.

**Verify.** The entries exist with Problem, Decision and Reason; the README is linked from `AGENTS.md` and the `ltf-review` client checklist; `tokens.css` comments cite it; the test results sit in `docs/` with stimuli and raw answers.

**Not yet.** No change to any page. Do not start drawing the display voice or the share template before D-34 exists, or the product gains a fourth undocumented direction.

### Release 1: correctness and access

**Scope.** The S1 and S2 findings that are failures rather than style.

- Tokens and access: the four failing contrast pairs (AUD-004), the relative root and `rem` utilities (AUD-007), document scroll padding (AUD-050), 44 px repeated controls (AUD-049).
- Fly mode, functionally: banner out and help line in (AUD-035), the reserved alert region and finite pulse (AUD-036), whole-row tick targets and 48 px controls (AUD-037), persistent ticks and scoped, undoable resets (AUD-039).
- Learning and trust: `QuizPanel` wrong-answer feedback (AUD-032), silent failures made visible (AUD-046), the honesty sentence in all three places (AUD-020), aviation values on the landing page moved into content (AUD-023), non-open modules as plain rows (AUD-025), the scripted smooth scroll (AUD-033).
- Outward assets: `apple-touch-icon.png` replaced and the icon script added (AUD-018), the default title and manifest color (AUD-019).

**Satisfies.** ACC-029, ACC-034, ACC-035, ACC-039, ACC-042, ACC-061, ACC-063, ACC-066, COL-053, COL-054, GRD-076, GRD-078, GRD-082, INT-024, INT-043, INT-045, LAW-011, LRN-054, MOV-023, MOV-045, NAV-017, SYS-035, AES-049, AES-054, BRD-023.

**Verify.** A token test computes every declared pair in both themes and fails under threshold (COL-058); a grep in `/ltf-review` fails on `text-ink-3` inside a tinted container; axe and the keyboard end-to-end test pass; a Playwright check opens Fly mode, fires a random event and asserts that no step's bounding box moved; manual test on a phone beside a controller with the simulator running, recorded in the pull request; the touch icon decoded and inspected; a 20 px browser default renders every template without clipping.

**Decision Log.** Only the Fly mode theme change, already made in release 0. Darkening Day `accent-line` (AUD-004) touches a slow-layer identity value and is named in D-34.

**Not yet.** Do not restyle Fly mode (IDN-022 waits for release 5 and its test). Do not change radii, headings or callout colors here; mixing style changes into a correctness release makes both harder to verify.

### Release 2: system consolidation

**Scope.** The sloppiness program (AUD-052).

- Type: one heading system (AUD-008), Tailwind's type defaults reset and bracket lint (AUD-009), italic removed or loaded (AUD-010), readouts at one weight (AUD-011), font loading with metric-matched fallback (AUD-016), the Day ink ramp (AUD-005).
- Components and color: `Card` for objects and accent hovers removed (AUD-012), status hues only for status (AUD-013), dashed borders for "not yet" only (AUD-014), `QuizBlock` verdict and storage (AUD-031), `CopyButton` and filter label (AUD-034).
- Copy and states: one sign-up label (AUD-045), calm verdicts and the "checkride-ready" revision (AUD-051), page-specific state wording (AUD-047, without the glyphs), the hub's `h1` (AUD-044), the estimated sim-time tile and denominators (AUD-042).
- Behavior: the Motion setting and finite loops (AUD-048), `FlyPanel` keyboard and current-step marker (AUD-038).

**Satisfies.** TYP-040, TYP-042, SCR-048, SCR-050, GRD-012, SYS-018, SYS-032, BRD-028, EVD-068, USE-030, COL-019, COL-068, PER-051, SYS-015, WRT-039, WRT-045, MOV-057, LAW-038, SKL-010.

**Verify.** Lint reports zero raw `text-*` size classes and zero bracket sizes outside the widget allowlist; a grep finds no `font-mono` with `font-bold`; `/dev/components` renders every component in Day and Night at 360 and 1280 px and the screenshot set is reviewed side by side by someone other than the author (SYS-061); the callout grep finds status tints only on `safety`, quiz results and status badges.

**Decision Log.** No; these restore the system's own stated rules. Each gets a `CHANGELOG.md` line.

**Not yet.** No display voice, no radius change, no ruled sheets. After this release the product will look tidier and still anonymous; that is the expected result, and the glance test is not rerun yet.

### Release 3: the reading surface

**Scope.** The lesson page and the prose pages: the 30em measure and 18 px body (AUD-029), the top-of-lesson budget and the sign-up prompt moved to the completion panel (AUD-028), the verification line through the first `CheckLine` (AUD-030, IDN-014), prerequisite links (AUD-027), one progress encoding (AUD-026), lessons in reference search and full glossary aliases (AUD-043).

**Satisfies.** TYP-018, TYP-019, TYP-057, LEG-019, LEG-035, SCR-007, SCR-017, GRD-023, GRD-028, GRD-065, USE-051, AES-047, AES-053, USE-054, NAV-007, NAV-033, NAV-044, NAV-054, VIZ-012, VIZ-035.

**Verify.** A unit test asserts 45 to 75 characters per line for a lesson paragraph at three widths; print styles still work (SCR-005); one round of five beginners reads a changed lesson and answers its own quiz, with comprehension recorded beside reading time, because a speed gain with a comprehension loss counts as a failure (LEG-051); the measure test is also run with the browser default text size at 20 px.

**Decision Log.** No; Section 21.3 already says 60 to 75 characters.

**Not yet.** The lesson `h1` stays in `display-md` without the condensed width until release 4, so the reading test measures the measure and size, not the display voice.

### Release 4: the identity

**Scope.** The signature set: the display voice (IDN-004), the horizon-line whitelist (IDN-005), code tags in place of restating eyebrows (IDN-006, AUD-024), ruled sheets (IDN-008), the radius and stroke set (IDN-009), `LessonPath` construction reused on `ModulePage` and `RoadmapPage` (IDN-010), the drawn instrument in the hero (IDN-011, AUD-022), Brief, Fly, Debrief naming (IDN-012), the color roles (IDN-013), the removals (IDN-018), the state glyphs (IDN-020), the reference print signature (IDN-023), the landing composition (IDN-024), and the share template with regenerated share images (IDN-007).

**Satisfies.** BRD-002, BRD-009, BRD-013, BRD-016, BRD-021, BRD-027, BRD-030, BRD-031, BRD-032, BRD-040, BRD-043, BRD-050, BRD-053, AES-018, AES-019, EVD-082, ICO-069, ICO-078, TYP-038, SCR-051.

**Verify.** The glance and lookalike test repeated with the release 0 stimuli plus the new screens (IDN-025): LTF should no longer be paired with the component-kit template, and appeal should not drop; the thumbnail review of `LandingPage`, `LessonPage`, `ChallengePage` and the result card beside three competitor pages (BRD-025); font bytes within the size budget (SCR-036); layout shift on the lesson page measured before and after the font change (SCR-037); every changed screen in both themes at phone and desktop widths (AES-064).

**Decision Log.** Covered by D-34 if D-34 names the signature set; any element added beyond it needs its own entry (BRD-036).

**Not yet.** No illustration, mascot, gradient, new hue or motion beyond IDN-016. No identity treatment in Fly mode beyond the quiet signature (BRD-051). Do not judge the release on first-week reactions alone (BRD-059).

### Release 5: operated surfaces and signature moments

**Scope.** After one in-context test round with beginners and the simulator running (AUD-002): the Fly mode template (IDN-022), the in-page theme switch and the polarity test that sets its default (AUD-040, AUD-053), the result order and signature block with the share image (AUD-041, IDN-021), the shared `FeedbackRow` (IDN-019), and the course-complete panel in the same signature form.

**Satisfies.** GRD-074, GRD-077, GRD-079, GRD-081, COL-064, COL-065, SCR-055, MOT-033, MOT-036, INS-044, BRD-052, AES-045, LRN-054.

**Verify.** The in-context round measures time from glance to correct tick, wrong ticks, and recovery after an alert, in Day and Night; the result screen is tested with learners who are asked what they would change on the next attempt (the feed-forward is understood or it is not); share images are checked at the size social previews render.

**Decision Log.** The Fly mode default, if the test changes it.

**Not yet.** No streaks, points or social features (MOT-006, MOT-018, MOT-061). No spoken cues in Fly mode beyond the event beep (LRN-042).

### Release 6: measure and maintain

**Scope.** The follow-up identity tests after several sessions (BRD-059, IDN-025); an unprompted attribution test of the signature elements (BRD-055); a second full audit against this Part's checklist by two reviewers working alone (AUD-001); a review of the identity register, retiring anything that failed its test.

**Verify.** Results recorded beside the baseline; the register updated with a date.

**Not yet.** Do not refresh the identity because the team is tired of it; slow-layer changes need evidence and a Decision Log entry (BRD-004, BRD-036).

::: {.rule #AUD-055 grade="B"}
**Do not start the identity release until the correctness and access release is verified, and do not judge the identity release before the baseline test is repeated.** Interaction problems are fixed before polish (USE-076, AES-006), a baseline is recorded before a redesign (AES-066), and reactions to a new identity are measured after several sessions (BRD-059, AES-037); liking for visual material changes with repeated exposure, following an inverted U [@montoya2017reexamination]. Severity: not applicable (sequencing).

*In LTF:* the release 4 milestone lists release 1's verification items as blocking, and its description links the release 0 baseline results.
:::

### Summary of the order

| Release | Program | Main IDs |
| --- | --- | --- |
| 0 | decisions, sources, baseline | AUD-017, AUD-015, IDN-001, IDN-025 |
| 1 | correctness and access | AUD-004, AUD-007, AUD-035 to AUD-039 |
| 2 | consistency | AUD-008 to AUD-014, AUD-045 |
| 3 | reading surface | AUD-026 to AUD-030, AUD-043 |
| 4 | identity | IDN-004 to IDN-013, IDN-018, IDN-024 |
| 5 | operated surfaces, moments | IDN-019, IDN-021, IDN-022, AUD-041 |
| 6 | measure and maintain | IDN-025, AUD-001 |

### What this means for Learn to Fly

The work is large in count and small in each step. Most of release 1 is one-line fixes to classes and storage; release 2 is mechanical with lint behind it; release 3 is one token and one test; release 4 is where design judgment is spent, and it is the only release whose success is measured by learners' eyes rather than by a script.

Keep: the project's existing machinery (`/ship`, `/ltf-review`, the axe tests, `DevComponentsPage`, the Decision Log) as the vehicle for every release.

Change: the habit of mixing style and fixes in one pull request; each release keeps its own scope.

Build: the token test, the heading and bracket lint, the callout and `ink-3` greps, the Fly mode layout-shift check, the measure test and the test kit in `docs/`, so that each release's verification can be rerun on every later change.

## Decision list and review checklist

### Decisions this Part settles for Learn to Fly

#### Method and order

1. **The audit is a floor, not a census.** A second reviewer inspects the same surfaces alone, severity is re-rated on the merged list, and operated-surface findings are confirmed with beginners beside a running simulator before anything beyond their fix is built (AUD-001, AUD-002).
2. **Correctness and access come before polish, and sloppiness before identity.** The six releases run in the order of the roadmap; the identity release waits for the access release and a recorded baseline (AUD-003, AUD-052, AUD-054, AUD-055).

#### Direction and drift

3. **One direction, recorded.** D-34 records the identity direction; the recommendation is "instrument and handbook": the shipped tokens and fin plus a subject-derived layer (AUD-017, IDN-002).
4. **One source for every outward-facing image.** The broken `apple-touch-icon.png` is replaced; every icon and share image is generated from the fin paths by a script; the default title and manifest color follow the house format (AUD-018, AUD-019, IDN-007).
5. **One honesty statement.** The beta banner, the About page and the landing FAQ say the same thing, checked against D-32 (AUD-020).
6. **The plan describes the product.** `v1.md` Section 21 points to the design-system README; D-27 is confirmed with changes or superseded (AUD-021).

#### The system

7. **Four contrast failures fixed and the Day ink ramp separated.** `ink-3` never sits on a tint; Day `accent-line` clears 3:1 on every ground it touches; Day `ink-2` and `ink-3` differ by at least 0.08 in lightness (AUD-004, AUD-005).
8. **Relative root, `rem` utilities, unitless leading** (AUD-007).
9. **One type scale, one heading system, Tailwind's type defaults reset, brackets linted** (AUD-008, AUD-009).
10. **No synthesized italic; readouts at weight 500; fonts loaded without moving text** (AUD-010, AUD-011, AUD-016).
11. **`Card` for objects, ruled sheets for lists, no accent hovers, no side stripes** (AUD-006, AUD-012, IDN-008).
12. **Status hues for status only; dashed means "not yet"** (AUD-013, AUD-014).
13. **A design-system README exists and every design comment points to it** (AUD-015).

#### Surfaces

14. **Landing.** The first view carries a drawn instrument; the play disc is `ink`; aviation values come from content; restating eyebrows go; non-open modules are not links (AUD-022, AUD-023, AUD-024, AUD-025, IDN-011, IDN-024).
15. **Curriculum and module.** One progress encoding (bars across modules, the path within one); prerequisites shown as links (AUD-026, AUD-027, IDN-010).
16. **Lesson.** Prose at 18 px in a 30em column (about 66 characters) with a test; a top-of-lesson budget with the sign-up prompt in the completion panel; the verification line in the meta row (AUD-028, AUD-029, AUD-030).
17. **Quizzes.** Calm verdicts, one feedback form, answers kept on the device, and an explanation after every widget-quiz answer (AUD-031, AUD-032, IDN-019).
18. **Challenge pages.** `CopyButton` reports failure; filter labels use learner words; Brief, Fly, Debrief is named identically everywhere (AUD-034, IDN-012).
19. **Fly mode.** No beta banner but a fixed help line; a reserved alert region; whole-row targets and 48 px controls; keyboard ticking and a current-step marker; ticks that survive the tab; scoped, undoable resets; an in-page Day and Night switch; a three-region template after testing (AUD-035 to AUD-040, IDN-022).
20. **Result.** Feedback and the next change first, then the signature block with the tier before the percentage, saved as a share image (AUD-041, IDN-021).
21. **Dashboard.** No estimated sim-time tile built from content; counts with denominators; a visible Dashboard header item for signed-in learners (AUD-042, rulings item 9).
22. **Reference.** Lessons in search; full aliases; `h1` "Reference" with the question as the search label; printed sheets signed (AUD-043, AUD-044, IDN-023).

#### Across the product

23. **One sign-up label; failures reported in place; drafts saved; page-specific states with drawn glyphs** (AUD-045, AUD-046, AUD-047, IDN-020).
24. **A Motion setting; finite loops; scripted scrolling that honors it** (AUD-033, AUD-048).
25. **44 px for repeated controls; document scroll padding** (AUD-049, AUD-050).
26. **No routine praise or exclamation; "checkride-ready" revised** (AUD-051).

#### Identity

27. **The skeleton stays conventional, including the ink primary button** (IDN-003).
28. **The signature set:** a condensed display voice from Instrument Sans's own width axis for every `h1` and brand moment; the horizon line on a whitelist; code tags and readouts; the fin; ruled sheets; one geometry (4, 6 and 10 px radii, one stroke table); the lesson path for every ordered sequence; drawn instruments on identity surfaces; Brief, Fly, Debrief; fixed color roles with no new hue; the check line as the one honesty form (IDN-004 to IDN-014).
29. **Imagery, motion and voice:** drawings and orientation screenshots only; `tier-pop` and the extending horizon line as the only signature motion; a one-page voice guide and vocabulary (IDN-015, IDN-016, IDN-017).
30. **Removed:** ink pill toggles, the ink tooltip, the ink pill timer, restating eyebrows, accent and status tints off their meanings, dashed empty states, the stock icon row (IDN-018).
31. **Tested, not assumed:** a baseline before release 4, the same test after, fin recognition with airline distracters, and follow-up after several sessions (IDN-025, AUD-053).

#### Rulings

32. **The nineteen conflicts are ruled** as set out in the rulings chapter: the owner chooses the direction (recommendation given); 30em measure; 100% root; Fly mode's default by measurement with an in-page switch; banner out of Fly mode with a help line; feedback before tier on the result screen; `decision` callouts neutral; eyebrows only for codes and status; a Dashboard header item; onboarding inside the first lesson (owner's choice, recommendation given); completion gated, access never locked; captions authored and always available; path for position, bar for proportion; 24, 44 and 48 px targets; five as a round size, not a coverage figure; `h1` "Reference"; accent links without the horizon stroke; the ink primary button kept; Part III's 68ch proposal not implemented.

### Review checklist

Run these questions against any pull request that changes the client's look or behavior, adds a page or component, or touches an outward-facing asset. A "no" needs a reason recorded in the pull request.

#### Before review

- Does the pull request cite the AUD and IDN IDs it implements, and name its release? (AUD-054)
- If it changes a slow-layer element (the fin, the horizon line, the display voice, the color roles, the radius set), does it cite a Decision Log entry? (AUD-017, IDN-001, BRD-036)
- Has someone other than the author reviewed it, and for operated surfaces, has it been tried with the simulator running? (AUD-001, AUD-002, SYS-061)

#### Tokens and type

- Do all text and graphical pairs pass in both themes, including on tints, with no `ink-3` on a tint? (AUD-004, ACC-034, ACC-035)
- Is every size in `rem` from a named utility, with no raw `text-*` class and no bracket size outside widget drawings? (AUD-007, AUD-008, AUD-009)
- Does every `h1` use the display voice and every other heading a `heading-*` utility? (IDN-004, AUD-008)
- Is any text slanted or bolded by synthesis, or any mono value set in bold? (AUD-010, AUD-011)
- Are identifiers in `code-tag` and values in a `readout` utility, with no eyebrow that restates its heading? (IDN-006, AUD-024)

#### Color, shape and components

- Is the horizon line or `accent-tint` used for anything other than position, progress or the single current item? (IDN-005)
- Is any status hue used for something that is not a status? (AUD-013, IDN-013)
- Is a dashed border used for anything other than "not yet"? (AUD-014)
- Is a list or panel boxed where a ruled sheet would do, or an object built without `Card`? (AUD-012, IDN-008)
- Do radii and icon strokes come from the set in IDN-009?
- Does a new progress or sequence display use the `LessonPath` construction or `ProgressBar` according to its question? (IDN-010, AUD-026)
- Does any new control copy another product's signature (an ink pill, a pill toggle), or change a convention listed in IDN-003? (IDN-018, IDN-003)

#### Surfaces

- On the landing page and share images, is there one unmistakably LTF element in the first view, and does every aviation value come from content? (IDN-011, AUD-022, AUD-023)
- On a lesson, is prose in the measured column at `body-lg`, is the stack above the first block within budget, and is the check line in the meta row? (AUD-029, AUD-028, AUD-030)
- Does every quiz answer, right or wrong, show the answer and the reason in the shared feedback form? (AUD-032, IDN-019)
- In Fly mode, is anything shown that the flight does not need; does anything move when an alert arrives; is every control at least 48 px; does work survive the tab? (AUD-035 to AUD-039, IDN-022)
- Does the result lead with feedback and the next change, with the tier before the percentage? (AUD-041, IDN-021)
- Is every count shown with its denominator, and every total built from logged activity? (AUD-042)

#### Honesty, copy and states

- Is every verification, beta or limit statement in the check line, and does it agree with the others? (IDN-014, AUD-020)
- Does the copy follow the voice guide: one label per action, calm verdicts, no routine exclamation, no claim beyond the simulator? (IDN-017, AUD-045, AUD-051)
- Are failures reported where they happened, with the learner's input kept? (AUD-046, AUD-034)
- Are empty and error states written for their page, centered where alone, with a drawn glyph and words? (AUD-047, IDN-020)

#### Access and motion

- Are repeated controls at least 44 px, does focus clear the sticky stack, and does the keyboard path work? (AUD-049, AUD-050, AUD-038)
- Does every animation follow the Motion setting, stop if it loops, and stay within the signature motions? (AUD-048, AUD-033, IDN-016)

#### Evidence

- Is any identity claim supported by a test result rather than a preference, and is a reaction measured after several sessions as well as at first view? (IDN-025, AUD-053, AUD-055)
