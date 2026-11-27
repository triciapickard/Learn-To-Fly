# Density test: Part XXIII, Icons, Maps, Ornament and Editorial Design

Test section: "Labels carry the first session" (from the chapter on labels and icon-only
controls), drafted from the notes for wiedenbeck1999use, isherwood2007icon,
mcdougall2009whats and mcdougall1999measuring.

## Draft 1: terse (about 150 words)

Wiedenbeck (1999) built one application three ways: text labels only, icons only, and icons
with labels. Novices did best in the first session with labels alone or icons plus labels;
icon-only was clearly poorer, most of all in time and help look-ups. By the second session
the icon-only group approached the others, and the retention gap was short-lived. Labeled
icons were rated easiest to use throughout. The McDougall group explains why: early on,
identification depends on semantic distance (up to 55 percent of variance in early trials),
and later on familiarity with the function name. Mean concept agreement for 239 real symbols
seen without context was 15.49 percent. So a label is what a beginner reads first, and the
icon becomes a faster cue later. For LTF, keep `TypeIcon` labels visible, never ship a bare
flight-specific icon, and allow icon-only controls only for conventions such as close and
menu.

## Draft 2: medium (about 400 words)

Icons are often defended as faster to recognize than words. For beginners learning a real
application the evidence points the other way at first. Wiedenbeck (1999) built three
versions of one interface (labels only, icons only, and icons with labels) and followed
novices through a first session and a delayed second session. In the first session
performance was best with the label-only and icon-label versions. The icon-only version was
much poorer, particularly in time and in the number of references to help. By the second
session the icon-only users had improved to approach the others, and the retention gap was
described as short-lived. Perceived ease of use was consistently best for icons with labels.
The study is one application with a modest sample of novices, so its effect sizes should not
be carried over.

The McDougall group's learning experiments explain the pattern. In early trials semantic
distance, the closeness of picture to function, was the best predictor of identification,
accounting for up to 55 percent of variance; familiarity with the function name mattered
more later (McDougall and Isherwood 2009). Isherwood, McDougall and Curry (2007) found icon
characteristics accounted for up to 69 percent of variance, with their ranking shifting as
people practiced. And the base rate is sobering: across 239 real symbols seen without
context, mean concept agreement was 15.49 percent, median 2.5 (McDougall et al. 1999).

So the label is what the beginner actually reads in the first minutes. The icon becomes a
faster cue once the meaning is learned. Removing the label too early spends the attention a
learner needs for the simulator.

For LTF: `TypeIcon` already has a `showLabel` prop; keep it true wherever a challenge type is
shown to someone who may not know the set. The header nav is text. `ThemeToggle` pairs Sun,
Laptop and Moon with "Day", "System" and "Night". Icon-only controls should be limited to
everyday conventions (close X, hamburger menu, chevrons) and each needs an accessible name.

## Draft 3: full (about 800 words)

Icons are often defended as faster to recognize and easier to remember than words. For
beginners learning a real application, the evidence points the other way in the first
session. Wiedenbeck (1999) built three versions of one application interface, with buttons
carrying text labels only, icons only, or both together, and followed novice users through
an initial learning session and a delayed second session, recording attitudes at the end of
each. In session 1, performance was best with the label-only and icon-label versions. The
icon-only version was much poorer, particularly in time and in the number of references to
help. By session 2 the icon-only users had improved to approach the other groups. Retention
between sessions was worse for icon-only, but the effect was described as short-lived.
Perceived ease of use was consistently better for the icon-label version than for either of
the others.

Two details cannot be settled. A later paper describes the sample as 60 undergraduates with
little computer experience using a desktop email program; that is a secondary report. One
secondary account says usefulness ratings and performance became more positive for the
icon-only signs in the delayed session, which sits uneasily with the "short-lived" retention
gap. Without the full text, the safe reading is the abstract's: icon-only was never better,
and its penalty shrank with practice. It is one application, one icon set and a modest
sample, so effect sizes should not be carried over.

The McDougall group's learning experiments explain why the label matters so much early.
McDougall and Isherwood (2009) ran 13 blocks of identification trials; mean response time
fell from about 2.9 seconds in the first block to roughly 1.2 seconds in later blocks. In
early trials semantic distance (how closely the picture relates to its function) was the
best predictor, accounting for up to 55 percent of variance, while familiarity with the
function name became more important later and was the top accuracy predictor after the
first blocks. Isherwood, McDougall and Curry (2007) found icon characteristics together
accounted for up to 69 percent of variance, an upper bound across the learning series, with
their ranking changing as people practiced. The same paper cites earlier work showing that
people rely on text labels to get at meaning when the graphic is unfamiliar.

The base rate is the warning. Across 239 real symbols rated without context, mean concept
agreement was 15.49 percent, with a median of 2.5 percent (McDougall et al. 1999). Raters
also used a picture-labeling strategy that made a symbol feel meaningful when the guessed
function was wrong: a portable-file symbol was read as luggage storage. A designer's sense
that an icon is obvious is therefore not evidence.

Modern conventions shift the picture a little: a magnifying glass for search and a gear for
settings are learned from everyday software and may be familiar to most adults. Flight
concepts are not. And for rarely met icons, the early phase never ends: an icon seen once
per lesson stays in the semantic-distance regime, so its label must stay.

For LTF, the consequences are specific. `TypeIcon` already has a `showLabel` prop; keep it
true wherever a challenge type appears to someone who may not know the set, because the
Lucide stand-ins (Settings2 for setup, Repeat2 for maneuver, Route for pattern) are not close
metaphors. `Badge` status variants pair a 12 px icon with a word, and tiers always print
Gold, Silver or Bronze: keep both. Toast tone icons and the nine Callout type icons sit next
to a bold title; keep the titles visible. The `FlaskConical` icon in `BetaBanner` is
decoration for a sentence that carries the meaning, which is the right relation. Icon-only
controls should be limited to everyday conventions (the close X on a Toast, the hamburger
that opens the `Drawer`, chevrons in Breadcrumbs), each with an accessible name. In Fly mode,
where the learner glances from the simulator, any control a wrong reading would cost a
missed step carries a word.

The full draft ran to about 820 words. Every added item is a real finding, number, caveat or
applied decision. What it also contained, and what the final text must cut, was a tendency
to restate "labels help first, icons help later" after each source.

## Verdict

The terse draft loses the caveats (sample, single application, the delayed-session
uncertainty) and the help-look-up detail that makes the LTF application specific. The medium
draft keeps every number but drops the response-time curve, the picture-labeling mechanism
and the rarely-met-icon point, all of which change design decisions. The full draft keeps
everything, and its only waste is restatement. The Part is written at the full density with
restatement removed: each source appears once with its numbers and its limits, and each
finding is followed directly by the LTF decision it supports, rather than by a summary.
