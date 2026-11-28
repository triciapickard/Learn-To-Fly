# Density test: Part VI, Color

Test section: "Polarity is a luminance question" (the chapter on dark themes and Fly mode), drafted
three times from the lane 06 notes on Buchner and Baumgartner (2007), Buchner, Mayr and Brandt
(2009), Piepenbrock et al. (2013, with the 2014 follow-up reported in those notes), Dobres et al.
(2017) and Legge et al. (1987).

## Draft 1: terse (about 150 words)

Dark text on a light background (positive polarity) beats light on dark for proofreading, in dark
rooms and office light, in black and white and in blue and yellow [@buchner2007text]. When overall
display luminance is equated, the advantage disappears; brighter displays read better
[@buchner2009advantage]. The advantage holds for older adults [@piepenbrock2013positive] and
grows as characters shrink. For glance reading, light-on-dark is worst in near-dark rooms
[@dobres2017effects]. Normal readers tolerate large contrast losses at comfortable sizes
[@legge1987psychophysics], so the effect is modest. For LTF: keep Day as the default for lessons,
make Night text larger and brighter, and test Fly mode, which defaults to dark, at a glance.

## Draft 2: medium (about 400 words)

The polarity question has a clear experimental record from one Düsseldorf group, with an
independent check from an automotive lab. Buchner and Baumgartner found proofreading consistently
better with dark text on a light background, whether the room was dark or office-lit, and whether
the text was black and white or blue and yellow [@buchner2007text]. A final experiment showed that
red text on a green background, a hue contrast without a luminance contrast, did not rescue
performance. Physiological strain and self-reported fatigue did not differ, so the advantage was
not bought with extra effort.

Buchner, Mayr and Brandt then separated polarity from brightness. With overall display luminance
matched, the polarity advantage vanished, and only luminance mattered: brighter displays were read
better [@buchner2009advantage]. Piepenbrock and colleagues found the positive-polarity advantage in
younger and older adults alike [@piepenbrock2013positive]; their 2014 follow-up, reported in the same
notes, found it grew as characters shrank from 14 to 8 points. Dobres, Chahine and Reimer measured
the time needed to read a word at a glance and found that light-on-dark text under near-dark
ambient light was the worst condition [@dobres2017effects].

Two limits keep this from becoming a ban on dark themes. The tasks were proofreading, acuity and
lexical decision, not comfortable long reading. And Legge and colleagues found that normal readers
at comfortable sizes tolerate large contrast losses: a tenfold contrast cut slowed reading of
1-degree letters by less than half, with little difference between polarities
[@legge1987psychophysics].

For LTF, Day stays the default for `LessonPage` prose and quizzes. Night must compensate: small
`text-ink-2` and `text-ink-3` text on `canvas` should be held to larger sizes and higher
luminance. `FlyModeLayout` forces the dark theme unless the reader chose Day, which is the
combination Dobres found slowest; it needs large type and a test of glance reading time.

## Draft 3: full (about 850 words)

The question "is dark mode harder to read" has a better experimental record than most theme
debates, and the record turns it into a different question: how bright is the display?

Buchner and Baumgartner ran a series of proofreading experiments that crossed text-background
polarity with ambient illumination (a dark room against typical office light) and with chromaticity
(black and white against blue and yellow) [@buchner2007text]. Dark text on a light background,
positive polarity, gave better proofreading in every comparison. A final experiment set red text on
a green background to test whether a hue difference could stand in for a luminance difference; it
could not. The study also measured breathing rate, heart rate, heart rate variability and skin
conductance, and asked about mood, fatigue, eyestrain, headache and muscle strain. None varied with
the conditions, which the authors read as showing that participants worked equally hard throughout,
so the positive-polarity advantage was not an effort trade-off. The notes do not give sample or
effect sizes, so the size of the advantage cannot be stated.

The obvious confound is that a positive-polarity screen is mostly bright background and therefore
emits more light. Buchner, Mayr and Brandt manipulated polarity and overall display luminance
independently and found no polarity effect at matched luminance, only a main effect of luminance,
with brighter displays read better [@buchner2009advantage]. Their conclusion is that polarity per se
does not affect readability; overall luminance does. That is a strong claim from one experiment, and
it is the claim on which a dark theme's design depends.

Two follow-ups sharpen it. Piepenbrock, Mayr, Mund and Buchner asked whether older adults, whose
aging lenses scatter more light, might reverse the effect; the competing prediction was that
age-related loss of retinal illuminance would make bright displays help them more. Positive polarity
won in both age groups, and the authors recommend it independent of age [@piepenbrock2013positive].
Their 2014 follow-up in Human Factors, confirmed in the same research notes, crossed polarity with
character sizes of 8, 10, 12 and 14 points (0.22 to 0.34 degrees of vertical visual angle) and found
the advantage grew linearly as characters got smaller; it advises against negative polarity
especially with small fonts. Dobres, Chahine and Reimer then used a lexical decision task with a
time threshold, an approximation of a glance, crossing two type sizes, two polarities and two
ambient illuminations [@dobres2017effects]. Thresholds were worst for light-on-dark text in
near-dark surroundings; positive polarity in the dark, and every condition under bright light, did
significantly better. Their proposed mechanism, pupil contraction under brighter light reducing
optical aberrations, fits the luminance account but was not measured directly.

The tension with Buchner and Baumgartner, who found no interaction with room light, is resolved by
task: extended proofreading in one, glance reading in the other.

The limits matter as much as the findings. Almost all of this comes from one group; the tasks are
proofreading, acuity and lexical decision; and the luminance manipulation is stylized. Legge, Rubin
and Luebker found that for letters between 0.25 and 2 degrees, normal readers are very tolerant of
contrast loss: a tenfold contrast reduction slowed reading of 1-degree letters by less than a factor
of two, and white-on-black and black-on-white were very similar [@legge1987psychophysics]. So the
polarity effect is real and modest, largest for small text, dim displays and glances, and smallest
for comfortable sizes.

For LTF this lands on three places. Day remains the right default for `LessonPage`, quizzes and
`Prose` pages. The Night theme is not banned, but its small text must be compensated: the Night
`ink-2` (#b2b1af) and `ink-3` (#939290) carry most meta text at `text-sm` (14 px), the size where
the penalty is largest, so meta text in Night should step up in size or ink level. And
`FlyModeLayout` sets `data-theme` to dark unless the reader explicitly chose Day, which puts a
learner glancing from a simulator in a dim room into exactly the condition Dobres found slowest. Its
`text-xl` base and `text-5xl` stopwatch help; the remaining step is to measure glance reading time
of a checklist step in both themes, as the studies did, rather than assume dark is kinder in a dark
room.

## Verdict

The terse draft loses the red-on-green result, the null effort measures, the 2014 size gradient, the
task difference that reconciles Buchner 2007 with Dobres, and every caveat. It reads as a rule list
without grounds, and a reviewer could not tell a B from a C. The medium draft keeps the main
findings and the Legge counterweight but drops the strain measures, the older-adult competing
hypotheses, the mechanism's unmeasured status and the concrete token values; its LTF paragraph is
generic. The full draft keeps every number in the notes, every caveat (one group, stylized
manipulation, unmeasured mechanism, no effect sizes) and ties each to a named token, size and
layout. It contains no restatement: each paragraph adds a finding or a limit.

Chosen density: full, about 700 to 900 words for a section built on several studies, shorter for
single-source sections, with each paragraph carrying a finding, a number, a caveat or an LTF
consequence. Restatement and recap paragraphs are cut; length comes from more sources, more product
specifics (computed token contrasts, Oklch values, simulated color-deficient pairs) and worked
decisions.
