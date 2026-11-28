# Cross-Part seams, conflicts and product findings (orchestrator memo for Part XXVI)

Collected from the writers' hand-backs. Part XXVI must adjudicate the conflicts explicitly, citing the
rule IDs on each side (look them up in `rule-index.md`), and must not contradict a Part silently.

## Conflicts that need a ruling

1. **Identity direction.** `public/og-image.png` still shows the D-25 livery direction (navy, condensed
   uppercase, red stripe) while the shipped pages are ink and teal. Part XX (BRD-004, BRD-026) asks for one
   recorded direction and prefers a calm, refined register; Part XVIII puts novelty in a few signature
   elements on a conventional skeleton; Part IV limits any condensed display face to display sizes.
2. **Lesson measure and body size.** Lessons render at 16 px in an article capped at 800 px. Measured
   estimates differ slightly by method: about 93 to 112 characters (Part II, font metrics over the lesson
   corpus), about 111 (Part IV), 90 to 100 (dossier, unmeasured). `--container-measure: 68ch` holds about
   100 characters because `ch` is the width of the zero. Parts II, III, IV and V all want a shorter measure;
   state one decision.
3. **Root font size.** `html { font-size: 16px }` is a pixel root. Part V frees it; Parts II, IV and XXV
   note that a larger browser font setting does not enlarge text.
4. **Fly mode theme.** Fly mode forces Night unless the learner chose Day. Part IV grades this D (evidence
   conflicts on polarity); Part VI discusses it; decide what to recommend.
5. **Fly mode `BetaBanner`.** Parts XV, XVII, XIX, XIII and X want it out of Fly mode; honesty rules in
   Parts XVIII and XIX want the status disclosed somewhere. Also `BetaBanner` copy contradicts `AboutPage`
   ("still being checked" vs "Everything that is open has been flown and checked").
6. **`ResultView` emphasis.** Parts XV and XVII make the tier badge and percentage secondary to criterion
   feedback; Parts XX and XVIII treat tiers as identity or celebration elements.
7. **Status color misuse.** Parts VI, VII, XVI, XVIII and XXIII: `warn` red on the YouTube play disc and the
   landing play disc, status tints used for non-status `Callout` types, `BetaBanner` on `caution`.
8. **Eyebrows.** Part II wants fewer uppercase eyebrows; Part XX lists the eyebrow-over-every-heading as a
   generic signature to replace.
9. **Header navigation.** Part XIII adds a dashboard item for signed-in learners; check against any rule
   holding the header to its current items.
10. **Onboarding.** Part XI argues against parts of the planned five-screen `/welcome` flow (v1.md 20.13,
    D-27), which is not built; the landing CTA goes straight to Lesson 0.1.
11. **Lesson sequence locking.** Part IX argues against locking sequence without learning evidence; Part
    XVI wants module completion to depend on the combined challenge.
12. **Captions.** Part XIV makes captions an always-available control, not on by default; reconcile with
    Part XXV.
13. **Progress encoding.** Part XII wants one encoding for module progress (the bar), keeping
    `ProgressRing` as a single-card glyph.
14. **Target sizes.** Part VIII: at least 44 px for primary and repeated controls and 48 px or more in Fly
    mode; Parts XI, XIII, XXIII and XXV also state target rules. `Stopwatch` buttons are 36 px.
15. **Five users.** The front matter says watching five people outranks distant experiments; Part I
    (EVD-028, EVD-029) and Part IX keep the ranking but deny that five is a fixed coverage figure.

## Product findings reported by writers (verified by them in code; re-check before asserting)

- Two heading dialects: token utilities (`display-*`, `heading-*`) on landing, `PageHeader`, reference hub;
  raw `text-2xl font-bold` / `text-3xl font-bold` on lesson, challenge, dashboard, module, speeds pages.
  `body-md` is never used. Bracket sizes (`text-[11px]` and similar) appear only in widget files.
- The inlined card class string repeats in 23 files.
- Contrast computed from `tokens.css`: Day `accent-line` on `surface-sunken` about 2.9:1 (under 3:1
  non-text); Night `ink-3` on `accent-tint` about 4.3:1 and on `caution-tint` about 4.4:1 (under 4.5:1);
  Day `ink-2` and `ink-3` nearly identical; Day `caution` and `warn` nearly merge under deutan simulation;
  card surface on canvas about 1.09:1; `line` border about 1.3:1.
- Instrument Sans as shipped: no italic loaded (browser-synthesized), no small caps or old-style figures,
  capital I and lowercase l identical; figures proportional unless `tnum` is set. Lesson sources use
  straight quotes throughout.
- `tokens.css` cites `tokens.json`, a README and `night-mode.md` that do not exist in the repo.
- `LessonPage` never shows `lastVerifiedAt` although the API returns it.
- `QuizPanel` shows no explanation after a wrong answer; quiz answers live in `sessionStorage`.
- Fly mode: ticks in `sessionStorage` (per tab); checklist Reset has no undo; the random-event alert
  inserts above the steps and pushes the list down; only the checkbox label is tappable in a step row;
  no keyboard ticking in `FlyPanel`.
- `ReportProblemDialog` loses text on refresh; `CopyButton` fails silently; failed optimistic saves roll
  back silently.
- Glossary: 42 of 179 entries have aliases; reference search excludes lessons; landing rows marked "Being
  written" link to unpublished modules; lesson prerequisites are never shown.
- The sign-up action has four different labels across the product.
- `scrollIntoView({behavior:'smooth'})` ignores reduced motion; no in-app motion setting.
- Dashed borders carry three meanings (verify callout, locked pin, empty or error state).
- Dashboard "Sim time (estimated)" is computed from content estimates, not logged time.

## Style seam

Several Parts write tokens without the leading `--` (the validator once flagged it). Part XXVI may write
tokens with `--` inside code spans; the validator now allows it.
