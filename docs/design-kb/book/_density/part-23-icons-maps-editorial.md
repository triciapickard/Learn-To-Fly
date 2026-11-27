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

[The full draft added: the delayed-session discrepancy between the abstract ("short-lived"
retention gap) and one secondary account (usefulness ratings rising for icon-only), with the
reason no conclusion is drawn; the secondary report of 60 undergraduates with an email
program, flagged as unconfirmed; the Guastello and Vukelich citations as reported in
McDougall and Isherwood 2009 on reliance on labels when graphics are unfamiliar; the 13
learning blocks and the fall in mean response time from about 2.9 seconds to about 1.2
seconds; the picture-labeling strategy that made symbols feel meaningful when the guess was
wrong (portable file read as luggage storage); the modern-convention caveat (magnifying glass,
gear); a paragraph on rarely met icons never leaving the early phase; and an LTF section
naming `TypeIcon`, `Badge` status icons, the Toast tone icons, the Callout type icons, the
`FlaskConical` beta icon, the fly-mode pill and the Stopwatch, with a worked decision for the
hamburger `Drawer` button and for the `Describe this diagram` disclosure.]

The full draft ran to about 850 words. Every added item above is a real finding, number,
caveat or applied decision. What it also contained, and what the final text must cut, was a
second restatement of "labels help first, icons help later" after each source, and a closing
paragraph that summarized the section.

## Verdict

The terse draft loses the caveats (sample, single application, the delayed-session
uncertainty) and the help-look-up detail that makes the LTF application specific. The medium
draft keeps every number but drops the response-time curve, the picture-labeling mechanism
and the rarely-met-icon point, all of which change design decisions. The full draft keeps
everything, and its only waste is restatement. The Part is written at the full density with
restatement removed: each source appears once with its numbers and its limits, and each
finding is followed directly by the LTF decision it supports, rather than by a summary.
