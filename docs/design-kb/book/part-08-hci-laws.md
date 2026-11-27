# The Quantitative Laws of Interaction

A small number of formulas have been quoted in interface design for seventy years: Fitts's law for pointing, the Hick-Hyman law for choosing, the steering law for dragging along a path, the keystroke-level model for counting work, the limits of short-term memory, the law of practice, the response-time limits, and the psychophysical laws that relate a stimulus to how large it seems. This Part takes each one back to its source, reports what the original experiments measured and on whom, follows the replications and the criticism, and states what the law can and cannot justify on Learn to Fly. The answer is usually narrower than the slogan. A law of interaction almost always has a robust qualitative shape (time grows with the logarithm of something, improvement slows with practice), a weaker theoretical interpretation, and a set of constants that change with the device, the population, the task and the method of measurement.

The evidence is uneven, and the grades say so. The pointing regularity and the logarithmic set-size effect in choice reaction time are among the most replicated findings in experimental psychology, but their numbers do not travel. The response-time limits that design guides repeat are expert conventions, not thresholds anyone measured. The power law of practice, once called universal, turned out to be largely an artifact of averaging. Use the Part in three ways: to size and place controls (the pointing, touch and steering chapters), to structure choices, menus and procedures (the choice, menu, operator-counting and memory chapters), and to set honest budgets for feedback and for progress displays (the practice, response-time and magnitude chapters). The final chapter lists the decisions this Part settles and a checklist a reviewer can run against a pull request.

## Laws, models and what they license

### Where the laws came from

Most of the laws in this Part were born in a single decade. Claude Shannon's information theory gave psychologists a unit, the bit, and a model, the communication channel of fixed capacity. Within a few years Hick applied it to choice reaction time and reported that the rate of gain of information is roughly constant, of the order of five bits per second [@hick1952rate]; Fitts applied it to aimed movement and argued that the motor system behaves like a channel whose capacity stays roughly fixed across a wide range of movement amplitudes and tolerances [@fitts1954information]; Hyman showed that choice time follows the information in the stimulus set, not merely the count of alternatives [@hyman1953stimulus]; and Miller pointed out that both the span of absolute judgment and the span of immediate memory cluster near seven, while warning that the coincidence might be "a pernicious, Pythagorean coincidence" [@miller1956magical]. Stevens, in the same years, replaced Fechner's logarithmic law of sensation with a power function [@stevens1957psychophysical].

The second wave turned these findings into engineering. At Xerox PARC, Card, English and Burr used Fitts's law to explain why the mouse beat a joystick and two kinds of keys for selecting text [@card1978evaluation]. Card, Moran and Newell then built the keystroke-level model, which predicts expert task time by summing standard operator times [@card1980keystroke], and the Model Human Processor, which describes the user as perceptual, cognitive and motor processors with measurable cycle times and memories [@card1983psychology]. The book's program was explicit: give designers models that predict performance before a system is built.

### Regularity, interpretation and constants

Every law in this Part has three layers, and they deserve different levels of trust.

The **regularity** is the empirical shape: movement time is linear in the logarithm of distance over width; choice time is linear in the information of the stimulus set; steering time is linear in path length over width; practice gives large early gains and smaller later ones. Where the regularity has been replicated across laboratories, devices and decades, it is the safest thing a designer can use.

The **interpretation** is the theory of why: a channel of fixed capacity, a constant rate of information gain, a set of chunks in a store. Interpretations have fared worse. The information-theoretic reading of Fitts's law is much weaker than the regularity [@fitts1954information; @mackenzie1992fitts]. The information account of choice time has been challenged since Kornblum's work on repetition effects in the late 1960s, and a memory-based account now competes with it [@proctor2018hicks]. The chunking theory of practice lost its main support when the power law it predicted was shown to be an averaging artifact [@heathcote2000power].

The **constants** are the numbers: bits per second, milliseconds per bit, seconds per operator, items in memory. They are the least portable layer. The Model Human Processor's typical values, as reproduced by Jastrzembski and Charness, include a perceptual cycle of 100 ms (range 50 to 200), cognitive and motor cycles of 70 ms, an effective working-memory capacity of 7 chunks and a pure capacity of 3, and a Fitts slope of 100 ms per bit (range 70 to 120). The same authors re-estimated these for older adults and found a perceptual cycle of 178 ms, a motor cycle of 146 ms and a Fitts slope of 175 ms per bit [@card1983psychology]. The ranges were built from best and worst performers across studies, and the values shift with the population. A constant from one of these tables is a description of a group in a setting, not a property of people.

### Three legitimate uses

The literature supports three uses of a quantitative law in design work.

First, **the shape as a direction.** If time grows with the logarithm of distance over size, then making a frequent target larger and nearer helps, with diminishing returns, and making it tiny or far costs more than intuition suggests. The direction is reliable even when the constants are not.

Second, **relative comparison within one study.** MacKenzie's review of six device comparisons shows that their very different numbers are explained by differences in error handling, practice and the range of conditions, and concludes that Fitts's law is good for ranking devices and layouts inside one carefully run study and poor for quoting absolute performance across studies [@mackenzie1992fitts]. Soukoreff and MacKenzie show how far apart identical-sounding studies land [@soukoreff2004towards].

Third, **structured counting.** The keystroke-level model asks the designer to write down the method, list each pointing movement, keystroke, hand movement and decision, and sum. Its constants come from 1970s text editors, but the act of counting operators exposes hidden costs (a decision that could be removed, a hand that must leave the controls) without any reliance on the constants [@card1980keystroke].

The illegitimate uses are equally clear: quoting a constant as a specification ("users process 10 bits per second"), turning a law into a slogan ("Hick's law says fewer options are faster"), and treating a law fitted to one task as if it governed another (memory span applied to menus that stay on screen).

::: {.rule #LAW-001 grade="C"}
**Name the specific effect and its conditions, not the law, when a design decision rests on one of these laws.** "Hick's law" or "Fitts's law" in a review comment carries no information about whether the conditions hold. Write instead the effect and its limits: "choice time rises slowly with the number of arbitrarily mapped options and falls with practice" [@proctor2018hicks], or "time to hit a control rises with the log of distance over size, and shrinking size costs more than lengthening distance" [@mackenzie1992fitts]. This is a craft rule derived from the reviews, not an experimental finding.

*In LTF:* review comments and pull request descriptions that justify a layout change by a law quote the effect in one sentence and say why the conditions apply to the page (`FlyModePage`, `QuizBlock`, `CurriculumMap`).
:::

::: {.rule #LAW-002 grade="B"}
**Use a law's shape and its relative predictions; never write one of its constants into a specification.** The constants vary several-fold with method and population: mouse throughput in published models ranged from 2.55 to 12.5 bits per second [@soukoreff2004towards], the same 1978 mouse data give 10.3 or 2.65 bits per second depending on the analysis [@card1978evaluation], and Model Human Processor values for older adults are much slower than the typical values [@card1983psychology]. The direction of the effect is what replicates.

*In LTF:* no token, component comment or design document states a bits-per-second, milliseconds-per-bit or items-in-memory figure as a target. Sizes are set by the target-size rules in this Part and by measurement, not by derived arithmetic.
:::

### The LTF situation is not the laboratory

The laws were measured on populations and in settings unlike a Learn to Fly learner's. Fitts's subjects were right-handed college men tapping with a stylus, told to favor accuracy [@fitts1954information]. Hick was the sole subject of his first experiment, and Hyman had four [@proctor2018hicks]. The keystroke-level model describes expert, error-free, routine work [@card1980keystroke]. The memory limits come from serial recall of digits, letters and words [@miller1956magical; @cowan2001magical].

The learner on LTF is a complete beginner who has never flown, often at a desk with a controller or a yoke, with the simulator on the main monitor and LTF on a second screen (a phone, tablet or laptop), switching attention between them. That shifts every law in the same direction. Pointing precision is degraded because the learner glances at the device and taps without a steady look, so effective target width grows (see Fitts's law and the cost of pointing). Choice time is at the steep, unpracticed end of the practice curve. The memory load includes the simulator's state as well as the page. And the expert, error-free assumption of the operator models does not hold, so the models give a lower bound, not an estimate.

::: {.rule #LAW-003 grade="B"}
**Design for degraded performance: assume a novice, divided attention and an imprecise hand, not the laboratory best case.** Effective width reflects where people actually land, not where they aim [@mackenzie1992fitts]; choice-time slopes are steepest before practice [@proctor2018hicks]; and soft-button selection slows when people cannot keep looking at the screen [@bragdon2011experimental]. A layout that works for a focused expert at a desk is the upper bound of performance, not the expected case.

*In LTF:* `FlyModePage`, `FlyPanel` and `ChecklistRunner` are designed for a learner looking at the simulator, glancing back and tapping with one hand. Every control size and spacing decision in those components is checked against that case first.
:::

::: {.rule #LAW-004 grade="C"}
**When a decision depends on how large an effect is, measure it on LTF's own learners instead of borrowing a number.** The reviews recommend relative comparisons within one study [@mackenzie1992fitts; @soukoreff2004towards], response-time research urges measuring real delays on real devices [@dabrowski2011years], and practice research warns against inferring an individual's curve from a group average [@heathcote2000power]. A small within-subjects test (two button sizes, two menu structures) answers the question the literature cannot.

*In LTF:* if a change to `FlyPanel` or to `CurriculumMap` is justified by speed, the pull request either cites a qualitative rule from this Part or attaches a small comparison run on the real layout with the conditions stated.
:::

### Reading the grades in this Part

The grades separate the layers. A rule about the shape of a replicated regularity gets an A. A rule from one or two experiments, or from indirect evidence applied to LTF's setting, gets a B. A rule from a standard (WCAG 2.2), a convention (the 0.1, 1 and 10 second limits) or craft reasoning from the reviews gets a C. A rule that depends on a contested claim, such as the power law of practice or the information-theoretic interpretation, gets a D, and is phrased so that it remains safe if the contested claim falls.

### What this means for Learn to Fly

Learn to Fly is unusually exposed to these laws because its hardest screen is used under divided attention. `FlyModePage` and `FlyPanel` are where pointing cost, choice cost, memory load and response time all bite at once: the learner holds a yoke or controller, looks at the simulator, and must find and hit the right control on a second screen without losing the place in the procedure. The lesson pages (`LessonPage`, `QuizBlock`, `WidgetFrame` and the range sliders in `RangeField`) are used with full attention, at a desk, and tolerate more. The navigation pages (`CurriculumMap`, `ReferenceSections`, the `Header` nav and `Drawer`) are about choosing and searching, where the menu research applies.

Keep: the code already applies several of the laws without naming them. `ChecklistRunner` uses full-width rows with a 48 px minimum height (64 px in large mode) and keyboard stepping (Space, Backspace, arrow keys), which addresses pointing cost and homing cost together. `useUpdateLessonProgress` in `src/features/progress/api.ts` updates the cache optimistically when a lesson is marked complete, which keeps a control action instant. `QuizBlock` options are whole-label targets at least 44 px tall.

Change: adopt the vocabulary of this Part in reviews (LAW-001), remove any constant borrowed from the literature from comments and documents (LAW-002), and treat fly mode as the reference case for every sizing decision (LAW-003). The remaining chapters give the specific rules.

Build: a small, repeatable test protocol for comparing two layouts on LTF's own learners (LAW-004), described in the next chapter under measurement.

## Fitts's law and the cost of pointing

### The regularity

Fitts ran three experiments with right-handed college men, 16 in the first two and 20 in the third [@fitts1954information]. In the first, reciprocal tapping, participants struck two metal plates alternately with a stylus for 15 seconds at a time. Plate widths were 2, 1, 0.5 and 0.25 inches and center-to-center amplitudes were 2, 4, 8 and 16 inches, giving 16 conditions, each run with a 1 ounce and a 1 pound stylus on separate days. Instructions stressed accuracy over speed, errors were rare (1.2 and 1.3 percent) and practice effects small. The second experiment had people move discs from one peg to another and the third transfer pins between holes, with no errors permitted.

Fitts defined an index of difficulty in bits per response, Id = -log2(Ws/2A), where Ws is the tolerance and A the amplitude, and an index of performance, Ip = Id/t, in bits per second. For the eight best light-stylus tapping conditions Ip ranged from 10.3 to 11.5 bits per second; disc transfer, with difficulty from 4 to 10 bits, ranged from 7.5 to 10.4; pin transfer ranged from 8.9 to 12.6 over all 20 conditions. His summary puts optimum performance at roughly 10 to 12 bits per second over 1 to 10 bits of difficulty. The correlation of Ip across the two stylus weights was .97. Performance fell at the extremes: movements of 1 and 2 inches were less efficient than those of 4 to 8 inches, and very small tolerances did poorly.

The regularity that survives, that movement time is linear in the logarithm of distance divided by width, is one of the most replicated results in human movement science [@fitts1954information; @mackenzie1992fitts]. The interpretation as a fixed channel capacity is much weaker. Fitts himself said capacity probably differs by limb and muscle group, and that his index ignores direction, grasp and release, and physical work. The regression form now taught, MT = a + b ID, came later; Fitts computed his index condition by condition.

### Three formulations

MacKenzie's review brought the law into human-computer interaction and catalogued the ways it had been written [@mackenzie1992fitts]. Fitts's original is ID = log2(2A/W). Welford's variant is log2(A/W + 0.5), the form Card, English and Burr used in their 1978 mouse study [@card1978evaluation]. MacKenzie's Shannon formulation is ID = log2(A/W + 1). The Shannon form has a practical advantage: it cannot go negative, while the other two can for overlapping targets or for wide, short targets such as a word of text approached from the side. Under the Shannon form, a target that is as wide as the distance to it has a difficulty of one bit, and difficulty can only approach zero as the target swallows the distance.

All three forms give the same design direction. Doubling the distance or halving the width adds roughly one bit, and each bit adds a roughly constant amount of time. Because the terms sit inside a logarithm, returns diminish: making a large target larger still helps less than making a small one larger.

### Where the law bends

MacKenzie lists the places where the law does not fit cleanly, and two of them change design decisions [@mackenzie1992fitts]. Movement time sits above the regression line at low difficulty, so very easy targets are not quite as fast as the line predicts; there is a floor. And reducing width costs more time than an equal proportional increase in distance, which breaks the symmetry the formula implies. A designer who halves a button to make room for another pays more than a designer who moves the button twice as far away. The review also records that intercepts are often nonzero or even negative, that error rates are often unreported, that the selection method (click, release, dwell) affects the intercept and should be treated as its own factor, and that at the time of writing the law had not been tested in three-dimensional tasks.

::: {.rule #LAW-005 grade="A"}
**Make frequently used and time-critical controls large and close to where the hand or pointer already is.** Time to acquire a target grows with the logarithm of distance over width, a regularity replicated across devices and decades [@fitts1954information; @mackenzie1992fitts; @soukoreff2004towards]. Both levers matter, with diminishing returns as targets grow. The rule holds for rapid aimed movements; it says nothing about time spent reading or deciding.

*In LTF:* the primary actions on `FlyModePage` and in `FlyPanel` (tick a step, start or pause the `Stopwatch`, dismiss a random-event alert, "Finish and debrief") are the largest controls on the screen and sit in a fixed place near the step the learner is working on.
:::

::: {.rule #LAW-006 grade="B"}
**When space is short, shorten or lengthen the reach before you shrink a frequent control.** Reducing a target's width costs more time than an equal proportional increase in its distance, contrary to the symmetry the formula implies [@mackenzie1992fitts]. This comes from a methodological review of several studies, not from one designed test of the trade-off, so it is graded B.

*In LTF:* when the phone layout of `FlyPanel` or of the `QuizBlock` action row runs out of room, wrap controls onto a new line at full size rather than reduce them to `size="sm"` (32 px). The 32 px `sm` size is for rare actions only.
:::

### Effective width: size for where people land

The most useful idea in the methodological literature is effective width. Nominal width is the size of the target as drawn. Effective width, We, is computed from where people actually land: 4.133 times the standard deviation of the endpoints, or, from an error rate, the nominal width multiplied by 2.066 divided by the z score for that error rate [@mackenzie1992fitts]. MacKenzie's example is a 2 percent error rate on a 5 cm target, giving an effective width of about 4.45 cm. When he reanalyzed Fitts's own 1954 data with effective width and the Shannon form, the correlation rose from .9831 to .9937 and the index of performance fell from 10.6 to 8.2 bits per second.

For design, effective width says that the real size of a target, in the sense that matters for speed, is set by the scatter of the people using it. A learner who is half-attending to a simulator, glancing at a tablet and tapping without a steady look scatters more widely than a seated student staring at the target. The nominal size must therefore be larger than a desk-bound test would suggest, and the gap between adjacent targets must absorb the scatter, or taps will land on a neighbor.

::: {.rule #LAW-007 grade="B"}
**Size targets for the scatter of a distracted user, not for an attentive one.** Effective width, computed from the spread of actual endpoints, is what governs pointing time and errors [@mackenzie1992fitts; @soukoreff2004towards], and divided attention widens that spread (the touch evidence is in Fingers, touch and the divided-attention screen). The specific margin is not established for LTF's setting, so treat it as a direction: when in doubt, larger and more widely spaced.

*In LTF:* in fly mode, step rows, the `Stopwatch` buttons and the alert's "Got it" button are sized at the large end of the component scale (`min-h-control-lg`, 48 px, or more), and adjacent controls have visible gaps of at least 8 px plus padding inside each target.
:::

::: {.rule #LAW-008 grade="B"}
**Make the whole visible control the hit target, so nominal and visual size are the same.** A target's effective size is limited by the part that responds. If a row looks like a 60 px card but only its 20 px checkbox and label respond, the pointing cost is that of the smaller target, and taps on the visible but dead padding fail. This applies the effective-width argument [@mackenzie1992fitts] and the touch-offset findings (people tap systematically away from where they aim) [@holz2011understanding].

*In LTF:* in `FlyPanel`, each step is an `li` with `p-3` padding and a border around a `Checkbox`; the `Checkbox` label is the hit area, so a tap on the row's padding does nothing. Make the entire row the label (as `ChecklistRunner` does with its full-width `button`), or give the label `w-full` and move the padding inside it.
:::

### Throughput and the trouble with headline numbers

The headline numbers of Fitts's law are the least reliable part of it. MacKenzie found that across six device studies the index of performance ranged from about 1.1 to 13.7 bits per second, and the mouse alone gave 10.4 in one study and 2.6 in another [@mackenzie1992fitts]. Soukoreff and MacKenzie surveyed 24 published models of the mouse built without the ISO 9241-9 method and found throughput from 2.55 bits per second to 12.5, a spread of nearly 10 bits per second, with disagreement even among studies using the same formulation. In nine studies that followed the standard (Shannon formulation, effective width, mean-of-means throughput) mouse throughput fell between 3.7 and 4.9 bits per second across five models from four groups. The authors caution that nine studies are too few for firm conclusions [@soukoreff2004towards].

The 1978 Card, English and Burr study shows the same thing in one data set. Their mouse model was MT = 1.03 + 0.096 ID, a throughput of 10.3 bits per second, with error trials (about 5 percent) excluded. Reanalyzed with the Shannon form and effective width, the same data give throughput from 1.42 to 3.77 bits per second, a mean of 2.65; removing a nominal 0.5 second grasp time raises it to 4.32 [@card1978evaluation]. The original study is still valuable for its explanation of why the mouse won: its slope was close to that of other eye-hand tasks, so positioning time was near the human minimum, while the key devices cost time in proportion to the number of keystrokes.

::: myth
**"Fitts's law shows people point at about 10 bits per second, so a designer can compute how long any click takes."** The 10 to 12 bits per second figure comes from stylus tapping by college men under an accuracy instruction [@fitts1954information]. Mouse throughput in published studies has ranged from about 2.55 to 12.5 bits per second depending on method [@soukoreff2004towards], and the same 1978 mouse data yield either 10.3 or 2.65 bits per second [@card1978evaluation]. There is no single human pointing rate to plug into a formula.
:::

::: {.rule #LAW-009 grade="B"}
**Do not compare throughput or movement-time figures across studies, devices or populations.** Identical-sounding Fitts studies are not replications of each other; formulation, the range of difficulty, error handling and practice all move the number [@mackenzie1992fitts; @soukoreff2004towards]. Only rankings within one study are meaningful.

*In LTF:* design documents and pull requests do not argue "touch is X bits per second slower than mouse, so the button needs Y px". They argue from the qualitative rules and, where needed, from a comparison run on LTF's own layout.
:::

### If LTF measures pointing

Soukoreff and MacKenzie give a method that LTF can adopt in miniature if it ever needs to compare two control layouts [@soukoreff2004towards]. Use the Shannon formulation. Cover a wide range of difficulty, with 2 to 8 bits suitable for most situations, and present each condition about 15 to 25 times per participant. Record where each selection lands. Compute effective width from the endpoint spread (or from a 4 percent error rate) per participant and condition, regress movement time on effective difficulty, and expect a small intercept (positive under 400 ms, negative not below about -200 ms); larger intercepts need investigation. Predict only within the range tested. Compute throughput as the mean of means, not from the reciprocal of the slope. Report movement times, error rates, effective distances and endpoint spreads. MacKenzie adds that learning should be controlled and reported and that the selection method should be treated as a factor of its own [@mackenzie1992fitts].

That method was designed for mice and similar devices. A thumb on a tablet propped beside a flight stick is a different situation, and the standard's data cannot be assumed to transfer [@soukoreff2004towards]. A cheaper alternative, adequate for most LTF decisions, is to follow the qualitative rules and run a short task-based comparison with a handful of learners in a realistic setup: the simulator running, the device where they would really put it, a controller in one hand.

::: {.rule #LAW-010 grade="C"}
**If LTF tests control sizes or layouts, run the comparison within one study, across a range of sizes and distances, with errors recorded.** This follows the methodological recommendations of the two main reviews [@mackenzie1992fitts; @soukoreff2004towards]. Their 4 percent error target and 2 to 8 bit range are conventions, not laws, and their data come from mouse-like devices.

*In LTF:* a comparison of, say, a 48 px and a 64 px step row in `FlyPanel` uses the same learners for both, several repetitions each, the simulator running, and reports misses as well as times.
:::

### What this means for Learn to Fly

The component scale is sound in principle and misapplied in a few places. `Button` offers `sm` (32 px), `md` (40 px) and `lg` (48 px) through `--spacing-control-sm`, `--spacing-control-md` and `--spacing-control-lg` in `tokens.css`. The `lg` size is used for the right things ("Finish and debrief", "Mark lesson complete", the landing CTAs). The problems are in fly mode and in widgets.

Change in `FlyPanel` and `FlyModePage`:

- Make each step row the hit target (LAW-008). Today a learner who taps the padding of a step card misses.
- The `Stopwatch` `PillButton` is a fixed `h-9` (36 px) even when `large` is set, and its Reset button sits 8 px (`gap-2`) from Pause or Resume with no confirmation. Under LAW-005 and LAW-007 the fly-mode stopwatch buttons should grow with `large`, and Reset should move away from Start and Pause (see the touch chapter on separating destructive actions).
- The random-event alert's "Got it" uses the default `md` size (40 px). It is the one control the learner must hit quickly, without much of a look, after a beep; make it `lg` or larger in fly mode.

Change in widgets: `WidgetFrame`'s ghost "Reset" and the `ChecklistRunner` header's "Large text" and "Reset" use `size="sm"` (32 px). These are rare actions, so small is acceptable on the lesson page, but "Reset" in `ChecklistRunner` clears every tick and sits beside "Large text"; it should not be the smaller and nearer of the two (LAW-006).

Keep: `ChecklistRunner` rows (`min-h-12`, `min-h-16` in large mode, full-width buttons), `QuizBlock` options (whole-label targets, `min-h-11`) and the `Header` nav links (`min-h-11`) already follow LAW-005 and LAW-008.

Build: the minimal test protocol under LAW-010 as a short checklist in the client review references, used only when a size argument cannot be settled by the rules.

## Fingers, touch and the divided-attention screen

### Why touch needs its own chapter

Fitts's law was measured with a stylus and later with a mouse, both of which have a visible tip and a precise point of contact. A finger has neither. It covers the target as it lands, it touches with a patch rather than a point, and the patch's center is not where the person aimed. These differences do not repeal the pointing regularity, but they change the constants and add failure modes that no mouse study shows. For Learn to Fly they matter more than for most sites, because the second screen beside the simulator is often a phone or a tablet, used with one hand while the other stays on a yoke, stick or controller, and the eyes are mostly on the simulator.

### How large a fingertip target must be

Parhi, Karlson and Bederson asked how large a target must be before one-handed thumb use stops being slowed or made error-prone by its size [@parhi2006target]. Twenty right-handed participants, standing, used only the right thumb on a 2005-era handheld. Discrete targets of 3.8, 5.8, 7.7, 9.6 and 11.5 mm per side appeared in nine screen locations among distractors with zero edge-to-edge spacing, and selection used lift-off (both touch-down and release inside the target). Task time fell with every size increase, even between the two largest. Error rates fell with size but did not differ significantly between 9.6 and 11.5 mm. A box of 9.1 by 8.9 mm enclosed 95 percent of hits on a 9.6 mm target at any location. For a serial task (four-digit codes on a soft keypad) errors were significantly higher at 5.8 mm than at 9.6 mm and above. The authors concluded that 9.2 mm suffices for discrete tasks and 9.6 mm for serial ones, because speed kept improving with size but accuracy stopped improving there. The sample was small, young, mostly male and mostly new to touchscreens, and the device is long obsolete.

Henze, Rukzio and Boll took the opposite approach: a tapping game on the Android Market that logged 120,626,225 touch events from 91,731 installations [@henze2011100]. The error rate fell with target size, rose dramatically below 15 mm and exceeded 40 percent for targets under 8 mm. For targets under 12 mm, errors at the screen border were much higher than at the center (on one phone, 31.68 against 17.59 percent), which the authors equate to making a target about 3 mm larger. Touches were systematically skewed toward a point in the lower right, consistent with right-handed thumbs, and a correction function cut the live error rate by 7.79 percent. The authors compare their numbers with Parhi's and attribute their higher error rates to time pressure, the absence of a preview of the next target and an animated background, so absolute values should not be compared across the two studies. What agrees is the shape: errors climb steeply as targets shrink, and position on the screen matters.

Holz and Baudisch explain part of the inaccuracy [@holz2011understanding]. Touchscreens assume people aim with the center of the contact patch, but in their studies (12 participants in an interview study, 30 in the first targeting study) people aligned visual features on the top of the finger, such as the nail, with the target. A model based on the projected center of the finger cut error offsets to 1.6 mm from 4 mm for the contact-area model, and supported 4.9 mm targets for 95 percent reliable input against 7.9 mm. Those figures describe a lab touchpad with an overhead camera, not a phone as sold. The transferable finding is that touch error is systematic, depends on finger angle and grip, and grows at the flat finger angles typical of a device lying on a desk.

### What the standard requires

WCAG 2.2 sets the conformance floor [@w3c2024wcag]. Success criterion 2.5.8, Target Size (Minimum), at Level AA, requires pointer targets of at least 24 by 24 CSS pixels, with exceptions: an undersized target passes if a 24 CSS pixel circle centered on it does not intersect another target or another undersized target's circle; if an equivalent control on the page meets the size; if the target is inline in text; if the browser sets the size; or if the presentation is essential. The Understanding document says spacing can work as well as size. Criterion 2.5.5, Target Size (Enhanced), at AAA, uses 44 by 44 CSS pixels and recommends larger targets for frequently used controls, actions that are hard to undo, controls at the edge of the screen and steps in a sequence. The document does not explain how 44 was derived. The 24 pixel floor is about 6 mm at the nominal 96 CSS pixels per inch, but a CSS pixel is not a fixed physical length on phones, and the floor is well below the 9 to 10 mm the touch studies support.

::: {.rule #LAW-011 grade="C"}
**Give every pointer target at least 24 by 24 CSS pixels (or the spacing equivalent), and give primary, repeated and sequential controls at least 44 by 44.** The 24 pixel floor is the WCAG 2.2 AA requirement and the 44 pixel figure the AAA one, which the standard recommends for frequent, hard-to-undo, edge and sequential controls [@w3c2024wcag]. These are consensus standards, not experimental thresholds, hence grade C; the experimental rules below push the primary size higher.

*In LTF:* `--spacing-control-sm` (32 px) meets the floor; `--spacing-control-md` (40 px) does not reach 44 and should not be used for primary or repeated actions; `ThemeToggle` segments (`h-8`, 32 px) and the `Stopwatch` pill buttons (36 px) pass AA only. Add a component test asserting minimum target sizes for `Button`, `Checkbox` labels, `Tabs` triggers and `ThemeToggle`.
:::

::: {.rule #LAW-012 grade="B"}
**Make controls that are tapped repeatedly under divided attention well above the standard's minimum, toward the physical size of a fingertip and beyond.** Touch errors stop improving only at about 9 to 10 mm in a small lab study [@parhi2006target] and climb steeply below the mid-teens of millimeters in a very large field study with time pressure [@henze2011100]. Speed keeps improving with size past the point where errors flatten [@parhi2006target]. The studies used phones held in the hand, so the exact sizes do not transfer to a tablet on a desk.

*In LTF:* step rows, checklist rows, the alert's "Got it" and the fly-mode stopwatch buttons on `FlyModePage` are at least 48 px tall, and preferably 64 px as `ChecklistRunner` uses in large mode, with full-width rows where the layout allows.
:::

::: {.rule #LAW-013 grade="B"}
**Leave real space between adjacent touch targets, and keep the responsive area larger than the drawn control where neighbors allow.** Touch offsets are systematic and depend on posture [@holz2011understanding]; Parhi's zero-spacing layout still needed about 9.6 mm targets before errors flattened [@parhi2006target]; and WCAG treats spacing as an alternative to size [@w3c2024wcag]. Sears and Shneiderman's "gravity" proposal, enlarging the selectable area around a target, points the same way [@sears1991high].

*In LTF:* the up and down `Button`s that reorder items in an order-type `QuizBlock`, the `Stopwatch` buttons and any plus and minus steppers in widgets keep at least 8 px between hit areas. Where a control looks small (an icon button), pad its hit area to the size rule rather than enlarging the icon.
:::

::: {.rule #LAW-014 grade="B"}
**Keep critical touch targets away from the extreme edges of the screen, or make edge targets larger.** In the field data, targets under 12 mm had much higher error rates at the border than at the center, equivalent to about 3 mm of size [@henze2011100]. Parhi found a right-leaning bias in the rightmost column and recommended that right-edge targets extend to the edge [@parhi2006target]. Both studies used phones in the hand.

*In LTF:* on phone layouts of `FlyModePage`, the primary controls are inset from the screen edge by the page gutter (`px-4`) and are full-width rather than tucked into a corner; any edge-anchored control (a close button on `Drawer` or `Toast`) has a hit area larger than its icon.
:::

### Commit on release

Sears and Shneiderman showed in the late 1980s that the poor reputation of touchscreens came from two fixable causes, noisy readings and a "land-on" strategy that committed a selection the moment the finger touched [@sears1991high]. With stabilization and a lift-off strategy (a cursor shown above the fingertip, commitment when the finger lifts) people matched the mouse for targets from 32 down to 4 pixels per side. The figures come from a technical report version and 1980s hardware, but the principle, that committing on release lets people correct their aim and cancel by sliding off, is how click events on touch devices work today.

::: {.rule #LAW-015 grade="B"}
**Commit selections on release, never on touch-down or pointer-down, and let the user slide off a control to cancel.** Lift-off selection lets users correct their aim and recover from a mis-landing, and it is what let touch match mouse accuracy in the original studies [@sears1991high; @parhi2006target]. Browsers already provide this through the click event; the risk is code that bypasses it.

*In LTF:* no handler in `FlyPanel`, `ChecklistRunner`, `QuizBlock` or any widget advances a step, ticks an item or submits an answer on `pointerdown`, `mousedown` or `touchstart`. Use `onClick` or native input events.
:::

### Looking is the expensive part

Bragdon and colleagues compared soft buttons with gesture designs while people sat and looked at the phone, sat while monitoring a separate display, walked on a treadmill while monitoring, or performed an attention-saturating tracking task [@bragdon2011experimental]. Fifteen participants took part. Soft buttons (a 3 by 4 grid of 14.2 by 9.5 mm buttons with 1 mm gaps) took 15.84 percent longer once people had to divide attention, and then stayed fairly flat, which suggests the main cost came from not being able to look at the phone all the time. Eye tracking showed that soft buttons needed the eyes on the phone 98.8 percent of the time, against 3.5 percent for gestures. Bezel-initiated marks were fastest and unaffected by environment, but edge gestures depend on a physical bezel that a web page cannot rely on. The finding that transfers is the attention cost of having to look at a small target.

That is exactly the fly-mode condition. The learner looks at the simulator, glances at the LTF screen, finds the control and taps. Every glance costs time away from flying, and every control that must be visually located before it can be hit costs a longer glance.

::: {.rule #LAW-016 grade="B"}
**On screens used beside the simulator, keep controls few, large and in fixed positions so they can be hit with a brief glance, and offer a keyboard path.** Soft buttons demand continuous visual attention and slow down when attention is divided [@bragdon2011experimental]; key-based actions avoid the pointing movement entirely [@card1978evaluation; @card1980keystroke]. The evidence is one lab study on divided attention plus the operator models, hence B.

*In LTF:* `FlyModePage` keeps the step list, the current step and the stopwatch in the same positions throughout a flight; nothing reflows when an item is ticked or an alert appears above the steps (an alert should overlay or reserve space rather than push the list down). `FlyPanel` gains the keyboard model `ChecklistRunner` already has: Space to tick the current step, Backspace to untick the last.
:::

### Grips, hands and the thumb zone

::: myth
**"There is a thumb zone: put primary actions in the bottom arc a right thumb can reach."** The reach diagrams came from Hoober's 2013 field observation of 1,333 people using phones in public, in which one-handed use was 49 percent of touching users, cradling 36 percent and two-handed use 15 percent, and grips changed often, sometimes every few seconds [@hoober2013how]. The article now carries the author's own 2017 comment that the reach drawings and the claim about touch locations were inaccurate and should be ignored. The data support the opposite lesson: grips vary, and no region of the screen is safe for every user.
:::

Hoober's conclusions that do hold are modest and useful: do not assume one-handed use, do not put dangerous functions where they are easy to hit by accident, pay attention to left-handed use, and test prototypes by holding them because fingers hide content [@hoober2013how]. Sears and Shneiderman's offset cursor addressed the same occlusion problem: a finger hides what it touches [@sears1991high].

::: {.rule #LAW-017 grade="B"}
**Separate destructive or progress-losing actions from frequent ones by distance, and protect them with confirmation or undo.** Touch error is systematic and posture-dependent [@holz2011understanding], misses near neighbors are common at small sizes [@henze2011100], and the observational data advise against placing dangerous functions where they are easily hit [@hoober2013how]. The pointing law predicts that the nearest, largest neighbor of a frequent action receives its misses.

*In LTF:* the `Stopwatch` "Reset" sits 8 px from "Pause" and clears the flight time with no confirmation; move it away (for example into an overflow or after a gap) or make it undoable. `ChecklistRunner` "Reset" clears all ticks and needs the same treatment. `Button variant="danger"` is already reserved for actions behind a confirmation `Dialog`; keep that rule.
:::

::: {.rule #LAW-018 grade="B"}
**Show the value being set or the item being acted on away from the finger, so the hand does not hide it.** Fingers occlude what they touch, the problem the offset cursor of the lift-off studies solved [@sears1991high], and observers of real grips advise testing by holding the device because fingers obscure content [@hoober2013how].

*In LTF:* `RangeField` already places the value readout (`font-mono text-sm`) above and to the right of the slider track, out from under a finger; keep that position in every widget slider, and in fly mode keep the current step's text above its tick control, not under it.
:::

### What this means for Learn to Fly

The product brief says the second screen may be a phone, tablet or laptop, and that Fly mode, large-type checklists and print styles serve that case. Treat that as a touch-first, glance-only design problem.

Keep: `ChecklistRunner` is the model component. Full-width rows, 48 and 64 px minimum heights, a visible current-item state (`aria-current="step"`, `border-accent-line bg-accent-tint`), keyboard stepping and a polite live announcement on completion all follow this chapter. `QuizBlock` options meet the AAA size. `RangeField` uses an `h-11` native range input, which gives a 44 px tall hit area, and keeps the readout off the track.

Change:

- `FlyPanel` step rows: make the whole row the target (LAW-008), raise the large-mode minimum height to match `ChecklistRunner` (LAW-012), add keyboard ticking (LAW-016).
- `Stopwatch`: scale `PillButton` with `large`, separate Reset from Start and Pause, and add confirmation or undo (LAW-011, LAW-017).
- `ThemeToggle` and other 32 px controls: acceptable on desktop pages, but do not appear on `FlyModePage`.
- The random-event alert in `FlyPanel` currently inserts itself above the step list and pushes the steps down. Under LAW-016 the steps should not move: reserve space for the alert or overlay it.

Build: a target-size assertion in component tests (LAW-011), and a fly-mode test session with a tablet lying flat on a desk, the low finger angle at which offsets are largest [@holz2011understanding], with at least one left-handed tester [@hoober2013how].

## Steering: paths, sliders and drags

### A different kind of movement

Fitts's law describes an aimed movement: the pointer travels however it likes and only the landing must be accurate. Many interactions are not like that. Dragging a slider thumb along its track, moving a cursor diagonally from a menu item into its submenu, tracing a route on a map, or dragging a control in an explainer all require the pointer to stay inside a corridor for the whole movement. Accot and Zhai argued that such trajectory-based tasks cannot be modeled by Fitts's law as it is applied to pointing, and set out to find whether a simple regularity governs them [@accot1997beyond].

### The steering law

Accot and Zhai ran four experiments with a stylus on an 18 by 25 inch Wacom tablet and a 19-inch monitor [@accot1997beyond]. In the first, ten participants passed the stylus through two goals separated by an amplitude A, each goal of vertical extent W. Time followed the Fitts-like relation MT = a + b log2(A/W + 1), with r-squared of .987 and an average error rate of 7.4 percent, higher for small widths.

The authors then derived what happens as the number of goals along a path grows. Subdividing a path into more and more goals turns it into a tunnel of length A and width W, and in the limit the logarithm disappears: difficulty becomes proportional to A/W, so MT = a + b(A/W). In the general case, where width varies along the path, the index of difficulty is the integral along the path of ds divided by W(s), and time is linear in that integral.

The second experiment tested straight tunnels of constant width with thirteen participants, four amplitudes (250 to 1000 pixels) and eight widths (20 to 90 pixels). The linear relation held. The third tested narrowing tunnels; regressing time on the integral index gave r-squared of .968 in one analysis and .978 in another, and error rates were far higher than in pointing studies (about 18 percent in one set of conditions).

The practical difference from pointing is the shape of the penalty. In pointing, doubling the distance adds about one bit and a fixed increment of time. In steering, doubling the length of the corridor or halving its width doubles the difficulty term. A long, narrow path is very expensive, and the cost is paid in errors as well as time.

### Replication and limits

Accot and Zhai's follow-up studies applied the law to device evaluation: five input devices in linear and circular steering tasks, with the law holding for all five at correlations above .98, and a study of movement scale that found a U-shaped relation between scale and performance [@accot1997beyond]. The limits are real. The experiments used one paradigm (a stylus on a tablet with visible, hard tunnel boundaries), error rates were high, and the theory treats the boundaries as hard constraints. Real interface paths, such as the diagonal from a menu item into a cascading submenu, often have soft boundaries, and design uses of the law are inferences from the laboratory results.

::: {.rule #LAW-019 grade="B"}
**Do not require the pointer to stay inside a long or narrow corridor; if a path is unavoidable, make it short and wide.** Steering time grows linearly with path length over path width, a steeper penalty than in pointing, and error rates in steering are much higher than in pointing [@accot1997beyond]. The law is well supported in its laboratory paradigm and less tested with soft boundaries, hence B.

*In LTF:* no widget in `src/features/widgets/` requires the learner to drag along a thin track, trace a narrow route on the `traffic-pattern` or `sectional-legend` drawings, or keep a pointer inside a band to succeed. Any future tracing widget accepts a tolerance band as wide as the teaching point allows.
:::

### Sliders are short steering tasks

A slider looks like pointing (grab the thumb, put it somewhere) but behaves partly like steering: the thumb is dragged along a track, and the pointer that leaves the track's corridor either drags the thumb with it or loses it. Native range inputs, which LTF uses everywhere (`RangeField` and the sliders in `LoadFactor`, `PitchPower`, `TurnCoordinator`, `AirspeedIndicator`, `TrafficPattern` and `AngleOfAttack`), handle this well in current browsers: they generally keep tracking the pointer when it wanders off the track vertically, clamp at the ends, and let a tap or click on the track jump the thumb. That makes the steering corridor effectively as tall as the screen.

The steering law suggests two further refinements. A slider with many steps and a short track demands fine control near the target value, which is the narrow end of the corridor. And a slider used repeatedly to reach one value is slower than a control that sets that value in one action.

::: {.rule #LAW-020 grade="B"}
**When the pointer wanders off a drag control, clamp or keep tracking; never cancel the drag.** Hard corridor boundaries are what make steering slow and error-prone [@accot1997beyond]. A drag that keeps tracking when the pointer leaves the visible track turns a narrow corridor into a wide one. This is an application of the law to control design, not a separate experiment.

*In LTF:* keep native `type="range"` inputs for widget sliders; a custom drag control (for example a draggable heading bug or a control-surface handle) uses pointer capture so the drag continues outside the element, and clamps to its range.
:::

::: {.rule #LAW-021 grade="C"}
**Give every drag interaction a single-pointer alternative that needs no dragging: a tap on the track, step buttons, or keyboard keys.** WCAG 2.2 success criterion 2.5.7, Dragging Movements (AA), requires that functionality achieved by dragging can also be achieved by a single pointer without dragging, unless dragging is essential; its examples include tapping a slider's track, directional buttons on a map and up and down controls on a sortable list [@w3c2024wcag]. It is a standard, hence C, and it also removes the steering cost for everyone.

*In LTF:* native range inputs satisfy this through track taps and arrow keys. The order-type `QuizBlock` already offers up and down buttons rather than drag-to-reorder; keep it that way. Any new drag widget ships with buttons or keys for the same changes.
:::

::: {.rule #LAW-022 grade="B"}
**Where the learner needs speed or will repeat a setting, prefer tap-to-set or tap-to-step controls over a drag.** Steering is slower and more error-prone than pointing [@accot1997beyond], and the keystroke-level analysis counts a key press as cheaper than a pointing movement for a practiced user [@card1980keystroke]. A preset button for a value the lesson names is one pointing action; dragging a slider to the same value is a pointing action plus a steering task plus a visual check.

*In LTF:* widget sliders with a few teaching-relevant values (for example the wind controls in `TrafficPattern`) gain preset chips for those values beside the slider, with the slider kept for exploration. The values themselves come from the lesson, not from this Part.
:::

### Menus that must be steered

Cascading menus are the classic steering problem in desktop interfaces: to reach a submenu item the pointer must travel horizontally along the parent item without crossing into its neighbors, then down the submenu. Accot and Zhai name "navigating nested menus" as a motivating case [@accot1997beyond]. The cost grows with the length of the path and shrinks with the height of the items. Fly mode is the worst place for such a path, because attention is elsewhere and precision is degraded.

::: {.rule #LAW-023 grade="B"}
**Avoid cascading submenus and hover-opened flyouts; open nested content on click, in place.** Steering through a nested menu is a corridor task whose time grows with length over width [@accot1997beyond], and hover-dependent paths fail when the pointer drifts. A click-to-open disclosure turns the steering task into two pointing tasks.

*In LTF:* `DropdownMenu` (used by `UserMenu`) has no submenus; keep it flat. `CurriculumMap` opens modules with `<details>` on click, which is the right pattern. The `Drawer` on phones should keep the same flat list as the `Header` nav, never nested flyouts.
:::

### Steering under divided attention

A steering task needs continuous visual guidance, since the pointer must be kept inside the corridor along its whole length. That is the opposite of what a learner can give while flying. In the divided-attention study discussed in the touch chapter, the cost of soft buttons came from having to look at them [@bragdon2011experimental]; a drag along a path needs more looking than a tap.

::: {.rule #LAW-024 grade="B"}
**Do not put any steering or drag task on a screen meant to be used while flying.** Steering requires continuous visual control [@accot1997beyond], and the cost of interacting with a screen rises when the eyes must stay elsewhere [@bragdon2011experimental].

*In LTF:* `FlyModePage` and `FlyPanel` contain no sliders, drag handles or swipe gestures. If a challenge needs the learner to record a value in flight, use large step buttons or a numeric field filled in after landing, in the Debrief tab.
:::

### What this means for Learn to Fly

LTF's interaction model is mostly pointing, which is the cheaper family, and its drags are almost all native range inputs, which are forgiving by construction. The risks are in what might be built next: tracing a pattern or a route on the `traffic-pattern` or `sectional-legend` drawings, a draggable heading bug on a compass in `vor-cdi`, or drag-to-reorder for checklist practice.

Keep: native `type="range"` with `h-11` hit height and an offset readout in `RangeField`; up and down buttons for ordering in `QuizBlock`; click-to-open `<details>` in `CurriculumMap`; a flat `DropdownMenu`.

Change: add preset values beside widget sliders where the lesson teaches particular settings (LAW-022), and check that any slider with many steps on a short track also responds to arrow keys with sensible step sizes (the native input does this by default).

Build: if a tracing or drag widget is designed, write its tolerance band, its non-drag alternative and its keyboard behavior into the widget's spec before it is drawn (LAW-019, LAW-021), and keep it off the fly-mode screens (LAW-024).

## Choice time: Hick, Hyman and uncertainty

### Hick's experiments

Hick's 1952 paper applied the new mathematics of information to choice reaction time [@hick1952rate]. Its abstract states the principal finding: the rate of gain of information is, on average, constant with respect to time within one perceptual-motor act, at a value of the order of five bits per second. Because the information in a choice grows with the logarithm of the number of equally likely alternatives, a constant rate predicts that reaction time grows with the logarithm of the number of alternatives, not in proportion to it.

The experiments were very small. Proctor and Schneider's review describes them [@proctor2018hicks]. Hick first fitted an older data set of Merkel's with a logarithmic function. In his own first experiment he was the sole subject, with ten lamps in a small irregular circle and ten fingers resting on keys; blocks ran from a go/no-go condition through two to ten alternatives, and analysis used only the little and ring fingers so that finger differences would not matter. His function was RT = b log10(n + 1), the "+1" allowing for the possibility of no stimulus. In a second experiment he and one other subject, later identified as the psychologist Richard Gregory, deliberately traded errors for speed in runs of 100 trials; Gregory later said the law rested on "my nervous system" and that the experiment went on for months. A third experiment checked that learning the repeated sequences did not explain the results. The form now quoted, RT = a + b log2 n, is not how Hick wrote it.

### Hyman: information, not number

Hyman showed a year later that choice time follows the information in the stimulus set, not simply the count of alternatives [@hyman1953stimulus]. With up to eight light positions, four subjects and spoken pseudoword responses, he varied the number of equally likely alternatives, then the probability of each alternative, then the sequential dependencies between successive stimuli. Plotted against the bits of information transmitted, each subject's data from all three experiments fitted a single function, RT = a + bH, where H is the average information per trial [@proctor2018hicks]. This is why the relation is called the Hick-Hyman law.

Hyman also drew a limit himself. When probability varied within a block, the line fitted to block means did not predict the times for the individual trial types inside the block: "we cannot predict, on the basis of the regression line fitted to the means of the conditions, what the mean reaction times will be to the components which make up a condition" (quoted in Proctor and Schneider) [@proctor2018hicks]. Kornblum later pointed out a confound: as set size grows, repetitions of the same stimulus become rarer, and repetitions are faster than switches. With a set of four, he built blocks with equal average information (1.87 bits) but repetition probabilities of 0.08 and 0.44, and found shorter times with more repetitions, which he took to reject the pure information account. Hyman and Umilta replied that his 140 ms response-stimulus interval was a poor test and found only small differences at about 7.5 seconds [@proctor2018hicks].

### What changes the slope

Proctor and Schneider conclude that the law is robust enough to be one of the few widely acknowledged laws in psychology, and bounded [@proctor2018hicks]. Four conditions change or remove it.

**Compatibility.** Set-size effects were small or absent for eye movements to a target location, for key presses signaled by a vibration under the finger, and for moving a cursor to a stimulus location, but present for arbitrary mappings such as letter cues. Schneider and Anderson argue that the key factor is whether the stimulus-response associations must be held in memory.

**Practice.** The slope shrinks. One study found the difference between eight and two alternatives close to 500 ms in the first session and a little over 300 ms in the fifth; another found 149 ms after nearly 4000 trials, with the law still present. The review says the slope can vary from zero to several hundred milliseconds.

**Large sets.** Most studies used two to ten alternatives (up to about 3.3 bits); results beyond that are mixed.

**Sequential effects.** Repetitions are faster than switches, and the information account does not explain why.

::: {.rule #LAW-025 grade="A"}
**Map controls compatibly: put each control where its effect is, so that choosing it needs no lookup.** The set-size effect is small or absent when the response mirrors the stimulus location, as with moving to a location or pressing the key under a vibrating finger, and present for arbitrary mappings [@proctor2018hicks]. This is one of the best replicated qualifications of the law.

*In LTF:* "previous" sits on the left and "next" on the right in the prev/next lesson `nav`; in `FlyPanel` the tick control for a step is on that step's own row; in widgets, the control that changes a gauge sits beside that gauge, not in a shared control panel elsewhere on the frame.
:::

::: {.rule #LAW-026 grade="A"}
**Keep the order and position of options stable across visits so that practice can flatten choice time.** Choice-time slopes shrink substantially with practice [@proctor2018hicks], and practice depends on the same item being in the same place. Reordering by recommendation or recency throws practice away.

*In LTF:* the `Header` nav order (Learn, Challenges, Reference), the `ReferenceSections` rail ("01 V-speeds and limits" to "05 Resources"), the module order in `CurriculumMap` and the step order in `FlyPanel` never reorder for personalization. "Most looked up" chips on the reference hub may change, but they sit in their own row and do not displace the fixed sections.
:::

::: {.rule #LAW-027 grade="B"}
**Make the expected action visually primary and keep rare actions available but quiet.** Choice time follows the uncertainty of the choice, not the count of options: a menu in which one option is almost always chosen behaves like a smaller one [@hyman1953stimulus; @proctor2018hicks]. The evidence is laboratory choice reaction time with arbitrary stimuli, applied by inference to visual hierarchy, hence B.

*In LTF:* each screen has one `Button variant="primary"` or `variant="accent"` for the action most learners take next ("Continue where you left off", "Start module n", "I'm set up, start flying", "Finish and debrief"); other actions are `secondary` or `ghost`. The `accent` variant stays reserved for continuing the lesson path, as `Button.tsx` documents.
:::

### What the law does not say

Liu, Gori, Rioul, Beaudouin-Lafon and Guiard reviewed the choice-reaction-time literature to ask how relevant Hick's law is for interface design [@liu2020relevant]. Their abstract makes four claims. Hick's law speaks against, not for, the popular principle that "less is better". Logarithmic growth in observed time data cannot automatically be interpreted as Hick's law. The stimulus-response paradigm behind the law is rarely relevant to interface tasks, where choice reaction time can often be assumed constant. And a detailed look at processes such as visual search and decision making is more fruitful than a reference to the law.

The first point follows from the shape. A logarithm grows ever more slowly, so each added option costs less than the one before. If the law governed a menu, it would favor showing everything at once over splitting a set into groups that each pay the logarithmic cost again. The second point is that other mechanisms produce logarithmic curves: searching a hierarchical menu or scrolling an alphabetical list can give the same shape. The third is that in most interfaces the user knows what they want (a familiar item, a known command), so the time goes to finding and pointing, not to a choice among unpracticed alternatives. The full text was not available to this book's research, so its own models and recommended numbers are not reported here.

::: myth
**"Hick's law says every extra option slows the decision, so cut choices to make pages faster."** The law describes choice reaction time among equally likely, arbitrarily mapped alternatives, mostly in sets of two to ten [@proctor2018hicks]. Its logarithmic form means each added option costs less than the last, which argues against splitting choices across screens, and most interface selections are dominated by visual search and pointing, not by this kind of choice [@liu2020relevant]. Proctor and Schneider note promotional uses of the law in design handbooks and web articles that the evidence does not support [@proctor2018hicks].
:::

::: {.rule #LAW-028 grade="B"}
**Do not remove useful options or split a list across screens to speed decisions; make the list easy to scan instead.** The logarithmic form penalizes splitting, and most selection time in interfaces is search and pointing [@liu2020relevant; @proctor2018hicks]. The rule rests on a critical review and on the shape of the law, not on a test of LTF's lists, hence B.

*In LTF:* `CurriculumMap` keeps all lessons and challenges of a module visible when it is open, grouped under the "Lessons" and "Challenges" eyebrows, rather than paginating; the `ChallengesPage` grid shows all matching challenges with filters rather than a stepped wizard.
:::

::: {.rule #LAW-029 grade="C"}
**Judge a list, menu or answer set by the processes it actually demands (searching, reading, deciding) and test it with learners, rather than by counting its items.** Logarithmic timing curves do not identify Hick's law, and process-level analysis is more fruitful than the law [@liu2020relevant]. This is the recommendation of a critical review, not an experiment, hence C.

*In LTF:* when a pull request changes `ReferenceSections`, the `Header` nav or the challenge filters, the description says what the learner is looking for and how they find it (scanning headings, reading codes, recognizing an icon), not how many items there are.
:::

### Answer options and checklists

Quiz answers on LTF are labeled text, mapped to a choice: closer to the arbitrary case than to the compatible one. Nothing in the choice-time literature supports adding or removing options to tune difficulty or speed [@proctor2018hicks; @liu2020relevant]; the levers that remain are the wording and the plausibility of the options, which the law does not address. In fly mode the opposite applies: the learner's choice is almost always "the next step", so the number of steps on screen is not the driver of time, and a predictable order matching the cockpit flow removes uncertainty. Degani and Wiener's checklist guidelines, from a NASA field study of airline crews, point the same way: sequence items by the geographical layout of the cockpit, and subdivide long checklists into chunks tied to systems and functions [@degani1990checklists].

Hyman's probability result also bears on answer order. Randomizing the position of the correct answer raises uncertainty about where it will be, which is the point of a quiz. Keeping a fixed order is right where order carries meaning, as in a procedure the learner is learning to follow.

::: {.rule #LAW-030 grade="C"}
**Do not tune quiz difficulty or speed by the number of answer options; tune the wording and the plausibility of the distractors.** Option count is a weak lever under the Hick-Hyman law, which concerns arbitrary stimulus-response mappings and shrinks with practice [@proctor2018hicks], and process-level factors dominate in real tasks [@liu2020relevant]. There is no direct test on LTF's quizzes, hence C.

*In LTF:* the content guidance for `QuizBlock` sets no rule on the number of options beyond what the question needs; reviews of quiz items look at distractor plausibility and wording, not count.
:::

### What this means for Learn to Fly

Retire "Hick's law" as a slogan in LTF reviews (LAW-001). The usable residue is three rules: map compatibly (LAW-025), keep positions stable (LAW-026), and make the expected action primary (LAW-027).

Keep: the single primary action per screen; the fixed `ReferenceSections` numbering and order; `QuizBlock`'s whole-label options. `shuffledOrder` in `shared/quiz.ts` shuffles only order-type quizzes, with a seed per quiz so the starting order is stable across visits; that keeps the arrangement the same each time a learner returns (LAW-026) while still presenting the items out of their correct sequence.

Change: in `FlyPanel`, highlight the current (first unticked) step the way `ChecklistRunner` does with `aria-current="step"` and `bg-accent-tint`, so the expected action is visually primary (LAW-027). Today every step row looks the same until ticked.

Build: nothing new. The menu chapter that follows applies the same reasoning to navigation structure.

## Menus, breadth and depth

### Decision and movement in series

Landauer and Nachbar ran the first widely cited test of the Hick-Hyman law on an interface structure [@landauer1985selection]. Participants found a goal item through a series of touch-screen menus that subdivided an ordered range: an integer from 1 to 4096, or one of 4096 alphabetically ordered words. The number of alternatives per screen, b, was 2, 4, 8 or 16, so the number of screens fell as breadth rose, and the touch targets shrank as more alternatives shared a screen [@proctor2018hicks]. Mean time per screen was well described by T = k + c log b, "in agreement with the Hick-Hyman and Fitts' laws for decision and movement components in series", and was fitted by a logarithmic function rather than the linear function that serial visual search would imply. Because each screen's cost grows only with the log of its breadth while each extra level adds a whole screen, the authors concluded that "broader, shallower menu trees yield faster search than narrower, deeper ones" (quoted in Proctor and Schneider) [@proctor2018hicks].

Two features of the design limit the result. The items had an obvious order, so each choice was a bisection of a known sequence, with no ambiguity about which branch held the target. And logarithmic curves can arise from search of an ordered list as well as from choice, so the shape alone does not show which process was at work [@liu2020relevant].

### Depth costs time

A series of experiments with category menus, where ambiguity is real, broadly agree that depth is the expensive dimension.

Dwight Miller fixed the number of end items at 64 and compared one level of 64, two levels of 8, three of 4 and six of 2 [@miller1981depth]. Goal acquisition time formed a U-shaped function with its minimum at two levels of eight, and errors corroborated the timing. Snowberry, Parkinson and Sisson re-ran the four structures, found that visual scanning ability (not memory span) predicted performance, especially in deep hierarchies, and found that the flat 64-item menu did better when its items were grouped into coherent categories than when they were arranged randomly (as described in the notes on Miller) [@miller1981depth].

Kiger dropped the flat condition and added two asymmetric two-level structures [@kiger1984depth]. A 4-item menu followed by a 16-item menu was fastest with the fewest errors, followed closely by the 16-then-4 and 8-by-8 structures, which did not differ reliably from it; deeper structures cost time and errors. Participants preferred the 8-by-8 structure, which was not the fastest. Kiger's general principle, as quoted by Larson and Czerwinski, was to minimize depth by providing broad menus of up to eight or nine items each.

Zaphiris repeated the structures as web link hierarchies with 17 participants and found task time rose with depth; the number of links per page, between 2 and 16, did not seem to matter [@zaphiris2000depth]. Mean times ranged from 36.0 seconds for six levels of two to 20.3 for two levels of eight. The fastest design ranked only third in preference.

Larson and Czerwinski built three structures from encyclopedia content with natural categories and 512 end items: three levels of 8, 16 top categories with 32 items each, and 32 with 16 [@larson1998web]. With 19 experienced users, the 16-by-32 structure was fastest (36 seconds), 32-by-16 next (46) and 8-by-8-by-8 slowest (58), reliably slower than both two-level structures. Lostness was 0.35 for 16-by-32 and 0.63, "very lost", for the three-level structure. The 32-by-16 structure was most often ranked best, but ratings did not differ reliably. Their conclusion was that depth harms search, but that the broadest structure was not the best: designers must balance the number of category decisions against the number of items to scan on a page.

::: {.rule #LAW-031 grade="A"}
**Do not add a level of navigation to reduce the number of items on a page; keep core content within two levels.** Several independent experiments, on terminals, touch screens and the web, found that added depth costs time, errors or lostness when the number of end items is fixed [@landauer1985selection; @miller1981depth; @kiger1984depth; @zaphiris2000depth; @larson1998web]. Each study is small and most used trained participants, but their direction agrees.

*In LTF:* the course stays two levels deep: modules in `CurriculumMap`, lessons and challenges inside each module. Do not add a "unit" or "phase" level between them as the syllabus grows; add grouping on the page (eyebrows, headings) instead.
:::

::: {.rule #LAW-032 grade="B"}
**Let a broad level hold up to a few dozen well-labeled items, grouped visibly, rather than splitting it; treat around 16 to 32 as an upper range, not a target.** The best web structure had 16 top categories and 32 items each [@larson1998web]; links per page from 2 to 16 did not slow users [@zaphiris2000depth]; broad flat menus work better when items are grouped coherently [@miller1981depth]. The broadest structures did not always win, and the figures come from single studies.

*In LTF:* `CurriculumMap` can show every module in the course on one page as a `LessonPath`, with lessons visible inside the open module; if a module's lesson list grows long, group it under sub-headings within the module card rather than nesting another `<details>`.
:::

### Labels matter more than shape

The menu studies share a caution. Miller and Kiger built every structure from the same bottom-level items, which forced unnatural categories in some conditions and confounded category quality with depth [@miller1981depth; @kiger1984depth]. Larson and Czerwinski argued that the clearest top-level labels, the ones with the best "scent", drove their best condition [@larson1998web]. Landauer and Nachbar's items had an order that made the right branch obvious [@landauer1985selection]. With beginners, the cost of a wrong branch (misreading a label such as "Systems" against "Procedures") and backtracking can exceed the cost of a level.

::: {.rule #LAW-033 grade="B"}
**Test the labels of a navigation level with learners before changing its shape.** Category quality changed the outcome as much as structure in the menu experiments [@miller1981depth; @larson1998web], and ordered items make breadth cheap because the right branch is evident [@landauer1985selection].

*In LTF:* module titles in `CurriculumMap` and section names in `ReferenceSections` ("V-speeds and limits", "Power settings by phase") are checked with a simple find-it task ("where would you look for the crosswind landing lesson?") before modules are merged or split. Numbered codes ("M4", "Lesson 0.1") give the list an order, which helps.
:::

::: {.rule #LAW-034 grade="B"}
**Measure navigation by task success and lostness, and collect preference separately; do not choose a structure by preference alone.** In three of the studies, the structure people preferred was not the fastest [@kiger1984depth; @zaphiris2000depth; @larson1998web]. Larson and Czerwinski's lostness measure (unique pages visited against pages required, with above 0.5 counted as lost and below 0.4 as not lost) is simple to compute [@larson1998web].

*In LTF:* a usability check of a navigation change records whether the learner found the lesson, how long it took and how many wrong pages they opened, then asks which version they preferred, and reports both.
:::

### Click counts are not a measure

::: myth
**"Users give up if they cannot find what they want within three clicks."** Porter analyzed 44 users, 620 tasks and more than 8,000 clicks and found the distribution of click-stream lengths was the same for successful and unsuccessful tasks; users did not give up after three clicks, and they complained about clicks only when they failed [@porter2003testing]. The analysis is observational, so it shows the rule lacks support rather than proving a right number, but it agrees with the menu research: what drives abandonment is whether each step looks right, not how many steps there are.
:::

::: {.rule #LAW-035 grade="B"}
**Do not set or enforce a click budget; make each step cheap and obviously correct instead.** Click count did not distinguish success from failure in session data [@porter2003testing], and depth costs come from decisions and lost orientation, not from clicks as such [@larson1998web]. One observational analysis plus the menu experiments, hence B.

*In LTF:* a longer path with clear labels (landing, curriculum, module, lesson) is acceptable. Shortcuts such as the landing page's "Continue where you left off" and the dashboard's Continue card are good because they serve the commonest task, not because they reduce a count.
:::

### Ordered content and fly mode

Landauer and Nachbar's result is strongest for content with an evident order, and LTF has a lot of it: lessons in numbered sequence, challenge codes, checklist steps, reference sections numbered 01 to 05. Such lists can be broad and flat because the learner can bisect them by number. Under stress the case for flatness is stronger: Zaphiris reports, from earlier work, that rushed users made 96 percent more errors and took 16 percent longer, a secondary report [@zaphiris2000depth].

::: {.rule #LAW-036 grade="B"}
**Present ordered content flat, on one screen, with visible numbers; reserve hierarchy for content without a natural order.** Breadth is cheap when the order makes the right choice evident [@landauer1985selection], and flat pages with good grouping work even at large breadth [@miller1981depth]. The rule extends menu findings to content lists by inference, hence B.

*In LTF:* `FlyPanel` shows every step of the procedure with its number, never paged; `ChecklistRunner` shows a whole checklist; each reference checklist under `/reference/checklists/:slug` stays on one page in full.
:::

### What this means for Learn to Fly

LTF's navigation is shallow and mostly ordered, which is the structure the menu research favors. The `content/lessons` folder holds 22 module folders, of which the beta shows only verified modules; a two-level course with a couple of dozen modules sits within the range the studies tested, provided the modules are grouped and labeled well.

Keep: two levels (module, lesson) in `CurriculumMap` and `ModulePage`; numbered codes on modules, lessons and challenges (`readout`, mono); the numbered `ReferenceSections` rail; flat checklists; click-to-open module cards.

Change: as more modules are verified and published, group the module list on `CurriculumMap` under visible headings (the product brief describes modules in "flight-school order"; the groups should follow that order) rather than nesting (LAW-031, LAW-032). Run a label test before renaming or merging modules (LAW-033).

Build: lostness and task-success measures for a navigation test protocol (LAW-034), so that the curriculum's shape is decided by learners finding lessons, not by item counts.

## Counting the work: the keystroke-level model and GOMS

### The model

The keystroke-level model predicts how long an expert takes to execute a routine task with a given method, by listing the low-level operations in the method and summing standard times for them [@card1980keystroke]. The authors' starting idea, in the report version, is that "the time for an expert to do a task on an interactive system is simply the time it takes to do the keystrokes", which they call a little too simplistic; so the model adds operators for pointing, homing, drawing, mental preparation and system response. It deliberately addresses one aspect of performance, the time error-free routine tasks take experts, and not errors, learning, recall, fatigue or acceptability.

The operators, with the times given in the report (the published article's values were not checked), are:

| Operator | What it is | Report value |
| --- | --- | --- |
| K | a keystroke or button press | 0.08 to 1.20 s by skill |
| P | pointing with a mouse | 1.10 s (0.8 to 1.5) |
| H | homing the hands on a device | 0.40 s |
| M | mental preparation | 1.35 s |
| R(t) | system response, when it makes the user wait | measured |

The K times span a best typist at 135 words per minute (0.08 s), an average non-secretary typist at 40 (0.28 s), random letters (0.50 s), complex codes (0.75 s) and the worst typist (1.20 s). The P value does not include the button press that usually follows (0.2 s). A system response shorter than an M can overlap with it [@card1980keystroke]. The pointing constant comes from the 1978 mouse study [@card1978evaluation].

The hard part is placing the M operators. The report's heuristics insert an M before keystrokes that are not part of an argument string and before pointing that selects a command (Rule 0), then delete it where the next operator is fully anticipated (Rule 1), inside a cognitive unit such as a command name (Rule 2), before a redundant terminator (Rule 3), and before a keystroke that ends a constant string (Rule 4). The principle is to place an M wherever a decision must be made, except where the decision overlaps other operations. The authors call the rules crude, and "fully anticipated" and "cognitive unit" are judgment calls [@card1980keystroke].

The model was validated against 28 users on 10 systems over 14 task types, with a root-mean-square prediction error of 21 percent for individual tasks and much better accuracy for collections of tasks [@card1980keystroke].

### GOMS and the Model Human Processor

The keystroke-level model is the simplest member of a family built in Card, Moran and Newell's book [@card1983psychology]. GOMS analyzes a task into goals, operators, methods and selection rules; its main application in the book is text editing. The Model Human Processor describes perceptual, cognitive and motor subsystems with memories and processors, and includes the Hick-Hyman law as an information-theory principle [@proctor2018hicks]. John and Kieras later compared four GOMS variants on one task, and say that since the book GOMS has been one of the most widely known theoretical concepts in HCI (as summarized in the notes on the book) [@card1983psychology].

The limits are built in. Expert, error-free, sequential, routine execution; subjective M placement; operator times measured on 1970s text editors and hardware; and a 21 percent error for single tasks. The numbers should be treated as historical [@card1980keystroke]. The structure is what lasts.

::: {.rule #LAW-037 grade="B"}
**Compare alternative methods for a frequent task by counting their operators (pointing movements, key presses, hand moves between devices, and decisions), and remove decisions first.** The keystroke-level model predicts expert task time from such counts with useful accuracy for collections of tasks, and the mental-preparation operator is the largest single unit in it [@card1980keystroke]. The constants are dated, so compare counts, not seconds.

*In LTF:* a pull request that changes how a step is ticked in `FlyPanel`, how a quiz is answered in `QuizBlock`, or how a lesson is marked complete includes a one-line operator count for the old and new method (for example "before: M P K P K; after: M P K").
:::

### Homing: the hidden cost beside the simulator

Homing is the operator that matters most for LTF and least for most websites. In the original model it is the time to move a hand from the keyboard to the mouse or back [@card1980keystroke]. Beside a simulator it is the time to take a hand off a yoke, stick, throttle or controller, find the phone, tablet or mouse, act, and return. Every step that requires a different device from the last one pays it twice, and the learner's aircraft is unattended while they do.

The 1978 device comparison already pointed to the alternative: key-based selection costs time per keystroke rather than per pointing movement [@card1978evaluation]. A learner whose hand rests on a keyboard beside the controller can tick a step with one key press and no pointing at all.

::: {.rule #LAW-038 grade="B"}
**Design fly-mode actions so the learner can complete a step without changing device, and offer a single-key path for the commonest action.** Homing between devices is a separate cost in the operator model [@card1980keystroke], and key-based selection avoids the pointing operator entirely [@card1978evaluation]. Under divided attention, avoiding a look at the screen is itself a gain [@bragdon2011experimental].

*In LTF:* `FlyPanel` accepts Space (tick the current step) and Backspace (untick the last), matching `ChecklistRunner`, and announces the change politely for screen readers. These keys work only when focus is inside the panel, so they never collide with the simulator.
:::

### Anticipation removes decisions

Rule 1 of the M heuristics says that when the next operator is fully anticipated, no mental preparation is needed [@card1980keystroke]. Design can create anticipation: if the next action is always in the same place, already selected, or the default, the learner does not have to decide where to go next.

::: {.rule #LAW-039 grade="B"}
**Preselect the next item, default the likely answer, and keep the next action in the same place, so that the learner does not have to decide what to do next.** Fully anticipated operators carry no mental-preparation cost in the keystroke-level model [@card1980keystroke], and stable positions let practice reduce choice time [@proctor2018hicks].

*In LTF:* after a tick in `FlyPanel` or `ChecklistRunner`, focus and the current-step highlight move to the next unticked step; after "Check answer" in `QuizBlock`, focus moves to the result and the next action; the prev/next lesson cards stay at the foot of every `LessonPage` in the same order.
:::

### Worked counts for three LTF tasks

The counts below use the operator letters only. They are illustrations of the method, not timings.

**Ticking a step in fly mode, today.** The learner decides to tick (M), takes a hand off the controller (H), points at the step's small checkbox label on the tablet (P), taps (K) and returns the hand (H): M H P K H. A miss on the row padding (LAW-008) adds P K. With the whole row as the target, the P becomes easier but remains. With a Space key on a keyboard beside the controller, it becomes M H K H if the hand must move, or M K if it rests there. Because the next step is anticipated, the M can shrink with practice.

**Answering a single-choice quiz.** Read the question (not modeled), decide (M), point at an option (P), tap (K), point at "Check answer" (P), tap (K): M P K P K. The second pointing movement exists because the design separates selection from submission, which is right for a learning quiz (it allows the learner to change their mind before checking, and `QuizBlock`'s "Change your answer and check again" depends on it). The count makes the cost visible and shows it is one P K, not a reason to auto-submit.

**Marking a lesson complete.** Scroll to the completion panel (not modeled by the classic model), decide (M), point at "Mark lesson complete" (P), tap (K). The optimistic update in `useUpdateLessonProgress` makes the system response R effectively zero for the learner, so no wait is added.

::: {.rule #LAW-040 grade="C"}
**Treat any operator-count estimate as a lower bound for LTF learners, never as an expected time.** The model assumes experts doing error-free routine work [@card1980keystroke]; beginners make errors, read, hesitate and learn, none of which it models, and the practice research shows their times fall steeply with early repetitions [@heathcote2000power]. This is a limit stated by the model's authors applied to LTF, hence C.

*In LTF:* operator counts appear in reviews only to compare methods (LAW-037). No estimate of "how long a challenge takes" in challenge metadata ("Est. 20 min") or elsewhere is derived from keystroke-level arithmetic.
:::

### Methods that stay the same

GOMS describes skill as methods selected by rules [@card1983psychology]. A method that is the same every time can be chunked and run with less thought; a method that changes from screen to screen keeps the learner at the stage of working it out. The skill literature makes the same point in its own terms: the early, cognitive stage of a skill is verbal and effortful, and practice turns it into procedure [@fitts1967human; @anderson1982acquisition].

::: {.rule #LAW-041 grade="C"}
**Give each recurring task one method that works the same way on every page where it appears.** The GOMS analysis treats routine skill as stable methods and selection rules [@card1983psychology], and skill acquisition moves from effortful declarative performance to procedure only when the procedure is consistent [@anderson1982acquisition]. This is a modeling framework and craft reasoning, not a direct test, hence C.

*In LTF:* ticking a step behaves identically in `FlyPanel`, `ChecklistRunner` and any checklist widget (same keys, same tick target, same current-step highlight, same undo); a challenge's Brief, Fly and Debrief tabs are always in that order with the same tab behavior.
:::

### What this means for Learn to Fly

The keystroke-level model is a cheap review tool that LTF can use without any of its constants. It exposes the two costs that matter most beside a simulator: decisions that could be removed (M) and hands that must leave the controls (H).

Keep: `ChecklistRunner`'s key bindings and its current-item highlight; `QuizBlock`'s separation of choosing and checking; optimistic progress updates.

Change: bring `FlyPanel` to the `ChecklistRunner` method (LAW-038, LAW-041): one tick model, keyboard support, a highlighted current step that advances (LAW-039). Today the two components that do the same job differ in hit target, keyboard support and current-step display.

Build: a one-line operator count in the pull request template's description for changes to frequent tasks (LAW-037).

## Working memory: seven, four and the chunk

### What Miller actually reported

George Miller's 1956 paper is the most quoted and least read source in interface design [@miller1956magical]. It is an essay on information theory in psychology, not a report of one experiment, and it brings together two kinds of measurement that both landed near seven.

The first is the span of absolute judgment: how many categories of a single stimulus dimension a person can reliably identify. Pitch came out at about 2.5 bits (roughly six categories), loudness at 2.3 bits (about five), saltiness at 1.9 bits (about four), the position of a point in an interval at 3.25 bits and the size of squares at 2.2 bits. Across one-dimensional variables the mean was 2.6 bits, about 6.5 categories, within a range of 3 to 15. Adding dimensions raised capacity with diminishing returns: dot position in a square gave 4.6 bits (about 24 positions), and six auditory variables of five values each gave 7.2 bits (about 150 categories), with accuracy on each dimension falling as dimensions were added.

The second is the span of immediate memory: how many items can be repeated back. Decimal digits carry about 3.3 bits each, so a span of seven digits holds about 23 bits; English words carry about 10 bits each. Hayes found a span of about nine for binary digits and about five for monosyllabic words. Miller's point was that absolute judgment is limited by bits but immediate memory is limited by chunks: the span in chunks stays roughly constant while the bits per chunk can grow. In Smith's demonstration, binary digits recoded in pairs or triples could be recalled far more fully.

The paper closes skeptically. Miller proposes to withhold judgment about whether anything deep lies behind the many sevens and suspects "a pernicious, Pythagorean coincidence" [@miller1956magical]. It gives no rule for lists, menus or page elements.

### Four, and the conditions for seeing it

Cowan argued that Miller's seven was "more as a rough estimate and a rhetorical device than as a real capacity limit", and that a wide range of data point to a central capacity limit averaging about four chunks, with others suggesting three to five [@cowan2001magical]. His central methodological point is that a capacity limit can only be observed under stated conditions: when information overload limits chunks to single items, when recoding into larger chunks is blocked, in discontinuities caused by the limit, and in indirect effects. Under those conditions rehearsal and long-term memory cannot combine items into chunks of unknown size. A typical digit-span test does not meet them, because chunking, rehearsal and long-term memory all contribute, so it gives a compound limit rather than a pure one.

The figure of four is itself contested. Alvarez and Cavanagh found visual short-term memory capacity ranging from 1.6 objects for shaded cubes to 4.4 for colors, almost exactly predicted by the information load of each item; Ma, Husain and Bays describe a proposal that working memory is a resource shared flexibly among items, so that the quality of representations rather than their number determines performance (both as summarized in the notes on Cowan) [@cowan2001magical]. The Model Human Processor lists a pure working-memory capacity of 3 chunks (2.5 to 4.2) and an effective capacity of 7 (5 to 9), with decay of about 7 seconds in the general case [@card1983psychology]. The consistent message is that capacity for unrelated new items is small, that it depends on what the items are, and that chunking lets more be held.

::: myth
**"People can only handle seven plus or minus two items, so menus, tabs and lists should have no more than seven entries."** Miller's paper concerns the span of immediate memory and of absolute judgment on one dimension, and it gives no design rule; it ends by calling the sevens a possible coincidence [@miller1956magical]. Items on a screen can be re-read and are not held in memory. The menu studies found good performance with 16 and 32 items per page [@larson1998web], and Larson and Czerwinski report that memory span did not reliably predict search time.
:::

::: {.rule #LAW-042 grade="A"}
**Keep the information a learner is acting on visible; do not make them hold it in memory while they operate the simulator.** The capacity for new, unrelated items in short-term memory is small, around four chunks under conditions that block recoding, and is replicated across many tasks even though its exact value is contested [@cowan2001magical; @miller1956magical]. A beginner has few chunks for flight concepts, so the effective limit is at its lowest.

*In LTF:* `FlyPanel` shows the full procedure and the current step on screen throughout; the "Key numbers" for a challenge (`KeyNumbers`) stay visible in fly mode instead of being shown once in the Brief; the reference `SpeedsPage` keeps the sticky `KeyNumbers large` panel beside the table.
:::

::: {.rule #LAW-043 grade="A"}
**Group material into named units the learner can reuse, and teach the names.** Immediate memory is limited in chunks, not bits, and recoding items into larger units lets more be held [@miller1956magical]; capacity estimates are larger whenever chunking and long-term memory can contribute [@cowan2001magical]. Checklist guidance from flight-deck field work recommends subdividing long checklists into chunks tied to systems and functions [@degani1990checklists].

*In LTF:* lesson sections (`SectionNav` entries), checklist names in `ChecklistRunner` and the challenge procedure's grouping use stable names that recur across lessons, so "the before-takeoff checklist" becomes one unit the learner can expand.
:::

### Applying the limit to a beginner

Cowan's figure is a caution, not a quota. For a learner without chunks for flight concepts, each new term, value or control is a separate item. Introducing many at once in one step, or asking the learner to keep two unrelated numbers in mind while they look at the simulator and answer a question, puts them at the limit.

::: {.rule #LAW-044 grade="B"}
**Introduce only a few new terms or values in one step, roughly three or four, then use them before adding more.** The figure comes from pure-capacity estimates for unchunked items [@cowan2001magical] and should be read as a prompt to count what is new on a screen, not as a rule of four; the right number depends on the material and is best checked with real beginners.

*In LTF:* lesson authors check each section for how many new glossary terms (`Terms in this lesson` chips) and new values it introduces; a section that introduces many is split, or its terms are taught in an earlier section first. This is a content review step, listed in the decision list below.
:::

::: {.rule #LAW-045 grade="B"}
**Show any string of digits the learner must read and act on in groups of two to four, and keep it on screen.** Digit spans are limited and recoding into groups lets people hold more [@miller1956magical]; the pure capacity for unrelated items is small [@cowan2001magical]. The grouping itself is an inference from the recoding findings, hence B.

*In LTF:* values such as a frequency, a code or a heading in challenge setup (`BriefTab` sim setup rows, `KeyNumbers`) are set in `readout` mono with a thin space or natural grouping where the format allows, and copy buttons stay beside them, so the learner copies rather than memorizes.
:::

::: {.rule #LAW-046 grade="B"}
**Do not ask the learner to hold one thing in memory while doing another unrelated task on the page.** Short-term capacity is shared and small for new material [@cowan2001magical; @card1983psychology], and the learner beside a simulator is already holding the aircraft's state.

*In LTF:* a quiz in a lesson does not refer back to a value shown only in an earlier section without repeating it; a fly-mode alert from a random event states what to do in its own text (`alert.message`) rather than referring to a step number elsewhere.
:::

### What this means for Learn to Fly

The product already relies more on display than on memory, and that is the right direction. The Brief, Fly and Debrief structure of `ChallengePage` puts the procedure on screen during the flight; the reference pages, the kneeboard band and print styles exist so the learner can look things up rather than recall them.

Keep: the persistent step list in `FlyPanel`, `KeyNumbers` beside tables, glossary `Popover`s that define a term in place, copy buttons in `BriefTab`.

Change: remove "seven plus or minus two" from any design discussion of navigation counts (the myth above); check that `FlyModePage` shows the challenge's key numbers, not only the steps (LAW-042); check that numeric values in fly mode are grouped and large (LAW-045).

Build: a content review prompt for lesson authors that counts new terms and values per section (LAW-044). The learning-science Part of this book covers the instructional side of load in depth; this chapter only sets the interface rules.

## The shape of practice

### The power law of practice

Newell and Rosenbloom's 1981 chapter argued that a single power law describes practice data across a wide range of tasks [@newell1981mechanisms]. It presented a set of practice curves, analyzed power functions mathematically, tested three classes of functions against the curves, reviewed existing models and proposed the chunking theory of learning as the mechanism: as people form ever larger chunks, each remaining improvement becomes rarer, so learning slows. In the form later used in HCI, the time to perform a task falls as a power of the number of practice trials, T = A + B(N + E) to the power of minus beta, where N is the trial number and E accounts for practice before the experiment. The Model Human Processor adopted the law with an exponent of 0.40 (range 0.20 to 0.60) [@card1983psychology]. The authors themselves remarked that "curve fitting without benefit of a model is notoriously a black art" (as quoted by Heathcote and colleagues) [@newell1981mechanisms].

Anderson's theory of skill acquisition took the log-log straight line as a phenomenon to explain, and argued that strengthening of procedures together with changes in the number of steps produces something close to, though not exactly, a power function [@anderson1982acquisition]. Fitts and Posner's three stages (cognitive, associative, autonomous) are often cited alongside the curve as its qualitative description: early performance is verbal and effortful, later performance is smooth, and the final stage improves slowly and indefinitely [@fitts1967human].

### The power law repealed

Heathcote, Brown and Mewhort showed that the evidence for a power law was largely an artifact of averaging [@heathcote2000power]. They fitted power and exponential functions to 40 data sets representing 7,910 learning series from 475 subjects in 24 experiments. The exponential fitted better than the power function in all the unaveraged data sets, and averaging produced a bias toward the power function. It has been known for about fifty years that an average curve need not have the form of the individual curves, and all but one of the tasks Newell and Rosenbloom examined used averaged data.

They also identified two technical problems with the original comparison: a three-parameter exponential was compared with a four-parameter power function, and a large prior-practice parameter lets a power function mimic an exponential over a finite range; and the fitting method (squared deviations in log of time minus asymptote) is undefined for any sample below the asymptote, a problem that grows in noisy individual data. Refitting part of Newell and Rosenbloom's data by ordinary least squares, the power function still won for averaged data, but the exponential won for the two unaveraged series.

The difference matters conceptually. An exponential implies a constant relative learning rate, proportional to what is left to learn; a power function implies a rate that slows with practice, so that some mechanism is slowing learning. Heathcote and colleagues proposed a four-parameter APEX function that nests both. Evans, Brown, Mewhort and Heathcote later proposed a delayed exponential law that fitted a clear majority of paradigms (as summarized in the notes) [@heathcote2000power]. Estes cautioned, in a remark quoted in the paper, that the form of the practice law does not constrain theory very much, because many models can mimic particular curve shapes. And the tasks in the survey were speeded laboratory tasks such as visual and memory search, not rich real-world skills.

::: myth
**"Learning follows a universal power law, so progress can be predicted from a learner's first attempts."** The apparent power law was produced largely by averaging over learners; individual series are better fitted by exponential or related functions [@heathcote2000power]. Even then the form of the curve says little about mechanism, and the data come from speeded laboratory tasks. What survives is qualitative: large early gains, then smaller ones.
:::

::: {.rule #LAW-047 grade="A"}
**Expect and design for the largest gains in a learner's first few repetitions of a skill, with improvement slowing after that.** Whether the best description is a power function, an exponential or a delayed exponential, practice data show rapid early improvement and diminishing later gains [@newell1981mechanisms; @heathcote2000power; @anderson1982acquisition]. The qualitative shape is well replicated; the function and its parameters are contested.

*In LTF:* challenges invite a short second and third attempt soon after the first (the Debrief and `HistoryTab` make "fly it again" an obvious next step), and lesson "Fly it" cards encourage brief, repeated tries rather than one long session.
:::

::: {.rule #LAW-048 grade="D"}
**Do not fit, display or schedule from a power-law model of an individual learner's progress.** The power law of practice is contested and largely an averaging artifact [@heathcote2000power], and the form of the curve does not constrain mechanism. Grade D because the claim it guards against is the contested one; the rule is safe whichever function wins.

*In LTF:* no "predicted attempts to Gold", "you will master this in n tries" or learning-rate-based review schedule appears on `DashboardPage`, `HistoryTab` or `ResultView`. Any future review scheduling uses the learner's own data or simple rules.
:::

### Averages lie about individuals

The deeper lesson of the reanalysis is about aggregation. An average of many step-like individual curves looks smooth and power-like whether or not any learner's curve does [@heathcote2000power]. LTF will aggregate attempt scores and times across learners for its own analytics, and the aggregate will look like a textbook learning curve. That curve is a poor guide to what one learner will experience, and a poor basis for pacing everyone.

::: {.rule #LAW-049 grade="B"}
**Show each learner their own attempts, as they happened, rather than a smoothed or averaged curve, and make the display robust to plateaus and jumps.** Group averages misrepresent the shape of individual learning [@heathcote2000power]. A single learner's sequence of attempts is the only honest picture of their progress.

*In LTF:* `HistoryTab` lists every attempt with date, tier and score; if a chart is added, it plots the learner's own attempts as points (with the tier bands as reference) and does not draw a fitted trend line. `DashboardPage` "Stats" tiles (Attempts, Gold results, Sim time) stay counts, not rates of improvement.
:::

::: {.rule #LAW-050 grade="B"}
**Present plateaus and early difficulty as normal, not as failure, in copy and in progress displays.** Improvement slows after the first repetitions in every account of practice [@heathcote2000power; @newell1981mechanisms], the autonomous stage of skill improves slowly and indefinitely [@fitts1967human], and individual learners progress unevenly [@heathcote2000power].

*In LTF:* result copy in `ResultView` after a repeated Bronze or a lower score than last time states what changed in the rubric criteria, not a judgment of the learner; the dashboard does not use streak-break or "falling behind" language. The motivation Part of this book covers the wider question of feedback tone.
:::

::: {.rule #LAW-051 grade="C"}
**In LTF's own user research, report individual learners' trajectories alongside any mean.** Averaging biases the apparent form of learning [@heathcote2000power]. This is a methodological rule for LTF's research, not a finding about learners, hence C.

*In LTF:* a study of how long beginners take to use a widget or pass a challenge shows each participant's sequence of attempts, then the summary.
:::

### Stages, not hours

Fitts and Posner's stages give the product a vocabulary but no thresholds [@fitts1967human]. The stages are descriptive, a learner is at different stages for different parts of a complex task, and the model does not predict when a learner moves on. Anderson's estimate that a significant cognitive skill takes at least 100 hours concerns cognitive skills in general and is not a claim about flying [@anderson1982acquisition].

::: {.rule #LAW-052 grade="C"}
**Do not claim to detect a learner's skill stage or attach hours to stages; show consistency across attempts instead.** The stage model is qualitative and gives no measurable boundary [@fitts1967human], and the hour figures in skill theory concern cognitive skills in general [@anderson1982acquisition].

*In LTF:* no badge, label or dashboard line on `DashboardPage` or `CourseBadge` says "autonomous", "expert" or "mastered" on the basis of attempts or time; tier results (Bronze, Silver, Gold) describe a single attempt against a rubric and are labeled as such.
:::

### What this means for Learn to Fly

The practice research is mainly a warning about charts and predictions. LTF's current displays are mostly counts and completion (`ProgressBar` per module, `ProgressRing` on module cards, stats tiles, the attempt table), which is the safe kind.

Keep: per-attempt history in `HistoryTab`; "Best: TierBadge n%" on the challenge header, which reports a fact; module completion bars that measure lessons done, not skill.

Change: if attempt charts are added to `DashboardPage` or `ResultView`, follow LAW-049 (individual points, no fitted line) and LAW-048 (no predictions). Review result copy against LAW-050.

Build: an analytics note that course-wide learning curves are aggregates and will look smoother than any learner's experience, so they inform content review, not individual pacing (LAW-051).
