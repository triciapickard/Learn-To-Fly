# Density test: Part XXVI, The Audit and the Identity Playbook

Test section: the audit finding "Status colors are spent on jobs that are not status", drafted
from the code (`Callout.tsx`, `YouTubeEmbed.tsx`, `BetaBanner.tsx`), the rule index (COL-067,
COL-068, PER-044, PER-051, BRD-014, SKL-075) and the notes behind them as the Parts report them.

## Draft 1: terse (about 150 words)

Three components spend status hues on things that are not status. `Callout.tsx` fills "Pro tip"
with `go-tint`, "Classic panel" with `caution-tint`, and both "Safety" and "Decision" with
`warn-tint`; `YouTubeEmbed.tsx` draws its 64 px play disc in `bg-warn`; `BetaBanner.tsx` sits on
`caution-tint` on every page. The rules are unanimous: status hues mean status (COL-068,
PER-051), warning red is reserved for act-now conditions (COL-067, PER-044, SKL-075) and is never
brand (BRD-014). The cost is that the one exceptional state can no longer be picked out at a
glance, because ordinary content already wears its color. Severity S2. Fix: neutral fill for
every non-status callout type with the type carried by icon and title; play disc in ink;
`BetaBanner` moved to the honesty form. Keep `safety` on `warn-tint`. Decision Log not needed.

## Draft 2: medium (about 400 words)

**What the code shows.** `Callout.tsx` maps nine content types onto the status tints:
`safety` and `decision` on `warn-tint`, `tip` on `go-tint`, `classic` and `verify` on
`caution-tint`, `sim` and `memory` on `accent-tint`, and only `note` and `real-world` on a
neutral `surface-sunken`. `YouTubeEmbed.tsx` draws the landing page's largest saturated mark, a
64 px disc, in `bg-warn`. `BetaBanner.tsx` paints a full-width `caution-tint` strip above the
header of every route, including Fly mode.

**Which rules it breaks.** Status hues are for status only (COL-068 [B], PER-051 [C]); the
warning red is for conditions that need immediate attention and never for decoration or brand
(COL-067 [B], PER-044 [B], BRD-014 [C], SKL-075 [C]). The perceptual reason is search: a target
pops out when it differs from its neighbors in one strong feature, and it stops popping when
ordinary items share that feature (PER-036 [A], PER-037 [A]). A learner who has seen red on a
play button, green on a tip and amber on a panel-variant note has learned that these hues mean
"a kind of box", which is the opposite of what Fly mode's random-event alert needs.

**Severity.** S2: a systematic misuse on reading surfaces that weakens the one signal the product
must keep strong, not a blocker today.

**Fix.** Give every non-status callout type (`tip`, `classic`, `sim`, `memory`, `note`,
`real-world`, `decision`) one neutral fill with its type carried by the icon and the title word;
keep `safety` on `warn-tint` and `verify` in the honesty form. Redraw the play disc in `ink` with
`on-ink` glyph. Move the beta notice into the shared honesty form, neutral, with its word.

## Draft 3: full (about 800 words)

The full draft adds: the exact class strings for all nine callout types; the contrast of each
title color on its tint, computed from `tokens.css`; the reasoning on whether `decision` is a
status (Part VI says no, Part VII lists it with safety); the history of why tints were used (the
code comment says "fill is the type's tint and the type color is spent only on the icon and
title"); the deutan simulation result for Day `caution` against `warn` (their Oklab distance
falls to about 0.02 under full-severity simulation, so the two tints are told apart only by
their icons); a worked list of every other `warn` use in the product (form errors, `danger`
buttons, quiz "Not quite", the Fly mode alert, the 404 is not one); the identity argument that a
status color used as decoration cannot become a brand cue either (BRD-014); the screen-by-screen
before and after for `LessonPage`, `BriefTab` (its `safety` and `tip` callouts sit side by side,
red beside green) and the landing hero; a note that the change is a medium pace-layer change
(BRD-036) needing a `CHANGELOG.md` line but no Decision Log entry; and the verification step (a
grep in `/ltf-review` that fails on `bg-go-tint`, `bg-caution-tint` or `bg-warn-tint` outside an
allowlist of status components). Written out in full it ran to about 850 words.

## Verdict

The terse draft keeps the finding, the rules and the fix, but drops the evidence that explains
why it matters (pop-out search, PER-036 and PER-037) and the exact mapping a developer needs. The
full draft repeats the rule statements in prose, spends paragraphs on history and side cases, and
duplicates material that belongs in the rulings chapter (the `decision` callout dispute) and in
the roadmap (verification steps). The medium draft carries everything a developer and a reviewer
need: what the code does, which rules with grades, the mechanism in one sentence, the severity
and an exact fix. The Part is written at medium density per finding, with the full detail
reserved for the few findings that are disputed across Parts (handled once, in the rulings
chapter) and for the identity specifications, where a developer needs exact values.
