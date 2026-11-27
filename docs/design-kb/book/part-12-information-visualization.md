# Information Visualization

This Part covers pictures of quantities and relations: progress bars and rings, score readouts, the gauges and tapes inside the lesson widgets, the flattened airspeed arcs on the reference hub, tables of numbers, and the charts Learn to Fly has not built yet but will need (attempt histories, error over a flight, a learner's spread of results). It runs from the perceptual evidence on how people decode a graphic, through integrity, ornament, color, labeling and glanceable displays, to uncertainty and interaction, and ends with the decisions it settles and a checklist for review.

The evidence is uneven, and the grades say so. The ranking of visual channels rests on controlled experiments that have been replicated in their broad shape, but only for one narrow task, and later work questions how far that task generalizes. The integrity rules (proportional marks, honest baselines) combine craft authority with a handful of recent experiments. The case for and against decoration is genuinely contested, with small studies on both sides. Dashboard and interaction guidance is mostly practitioner consensus with little direct testing. Read the grade before you lean on a rule, and where a rule is graded C or D, treat it as a default to test with real learners rather than a law.

## What a data graphic is for

### The founding argument is perceptual

William Playfair, who devised the bar chart and popularized the line graph for time series in 1786 and introduced the pie chart in 1801, gave a reason for drawing numbers at all: that "making an appeal to the eye when proportion and magnitude are concerned, is the best and readiest method of conveying a distinct idea" (as quoted by Spence) [@playfair2005commercial]. The claim is not that pictures are prettier than tables. It is that the eye grasps proportion and trend faster than a reader can by comparing digits. Everything else in this Part is a refinement of when that claim holds and when it fails.

Playfair's own charts were loose. Spence notes that his areas did not match well across linked diagrams and that the slope of a line in one chart depended on the diameter of a circle [@playfair2005commercial]. The inventor of the form was also an early example of its main hazard: a picture that is quick to grasp can be quick to mislead.

Tufte turned the argument into a standard. Graphical excellence, in his words, "consists of complex ideas communicated with clarity, precision, and efficiency", and gives the viewer the greatest number of ideas in the shortest time with the least ink in the smallest space [@tufte1983visual]. He insists that excellence is "the well-designed presentation of interesting data", a matter of substance and statistics as much as of design. A chart of uninteresting or untrustworthy data cannot be rescued by drawing.

### What the eye does fast and what it does slowly

The modern evidence review by Franconeri and colleagues gives the most useful single model of what a graphic can and cannot do [@franconeri2021science]. The visual system extracts broad statistics from a display (its mean, its extremes) within a fraction of a second. Comparing between subsets of values is slow: a viewer manages only a handful of such comparisons per second. The design consequences follow directly. A good graphic does not tax working memory, it guides attention to the one comparison that matters, and it respects conventions the viewer already knows, such as "up" meaning "more".

Vision science calls the fast part ensemble perception. Whitney and Yamanashi Leib review the ability to extract summary statistics (average size, orientation, motion direction, color, even facial expression) from a group of similar objects, often in a single brief glance, and argue that it is found at low, middle and high levels of visual analysis [@whitney2018ensemble]. Observers report the average size of an array of circles from displays shorter than a tenth of a second, though the review calls the size result somewhat controversial because observers may be subsampling a few items. Across many studies the number of items integrated is fitted by a power function with an exponent of 0.58, roughly the square root of the number shown, a fitted summary rather than a law. Sensitivity falls as the variance of the set rises.

Two practical points follow. First, a row of similar marks (bars on a common baseline, dots on a line) lets the learner take in "how am I doing overall" without reading any single value, which a table of digits cannot do. Second, the same mechanism can hide what matters: an outlier in a set may be down-weighted in the averaged impression, so a critical outlier must be marked explicitly rather than left for the ensemble to reveal [@whitney2018ensemble].

::: {.rule #VIZ-001 grade="B"}
**Design each graphic around one named comparison, and make that comparison the one the eye reaches first.** The visual system gets the gist of a display quickly but compares subsets slowly, a handful of comparisons per second, so a chart that asks for many comparisons at once makes the viewer work through them one at a time [@franconeri2021science]. Ensemble perception gives overall level and spread almost for free, but not individual values or the identity of outliers [@whitney2018ensemble]. The evidence is a narrative review of laboratory work, not a test of whole charts.

*In LTF:* before a chart is drawn, its caption states the comparison ("your best attempt against this one", "the curve against the limit line"). `KeyNumbers` already does this for numbers: one item may take `highlight`, and every other value stays ink.
:::

::: {.rule #VIZ-002 grade="B"}
**Mark critical outliers explicitly; never rely on the viewer's averaged impression to reveal them.** Observers extract means and spreads from sets of similar items, and an odd item can be down-weighted in that average [@whitney2018ensemble]. A value that needs action must carry its own cue (a label, a different shape, a reference line it crosses), not merely sit apart from the rest.

*In LTF:* in any row of per-criterion results or per-module bars, a failed required criterion or a stalled module gets a word and an icon, as `ResultView` already does with its "Not met" rows, not only a shorter bar.
:::

### Start from the data and the task, not the chart type

Bertin, writing in 1967, set the first step of design before any drawing: analyze the information [@bertin2010semiology]. Information, in his framework, is a set of correspondences among a finite set of components, all relating to a common ground he calls the invariant. In his stock-price example the invariant is the closing price of one stock on one exchange, and the components are quantity (francs) and time, so the drawing needs two visual variables, the two dimensions of the plane. Add a second stock and there are three components, requiring a third visual variable; add a second exchange and there are four. The drawing must use as many visual variables as there are components, and a precise statement of the invariant and the components is needed both to choose the representation and to word the title and legend.

Munzner gives the modern form of the same idea as three questions: what data is shown, why the user is looking at it (the task), and how the encoding and interaction are built [@munzner2014visualization]. Design starts from an abstraction of the data and the task, not from a favorite chart type. She adds that validation happens at four nested levels (the domain situation, the data and task abstraction, the visual idiom, and the algorithm), and that an error at an outer level cannot be repaired by polish at an inner one. A beautifully drawn chart that answers the wrong question fails at the abstraction level, and no amount of type or color work fixes it.

Munzner's rule of thumb "function first, form next" belongs here. Aesthetics matter as another level of function (hierarchy, alignment, flow), but starting with aesthetics makes function hard to add later [@munzner2014visualization]. The rule is expert synthesis, not experiment, and her own slides present all such rules as guidelines with justified exceptions.

::: {.rule #VIZ-003 grade="C"}
**Write the invariant, the components and the task in one sentence before choosing any chart form.** Bertin's analysis of information requires one visual variable per component and uses the same statement to word the title and legend [@bertin2010semiology]; Munzner's what, why and how puts the data and task abstraction first and warns that outer-level errors cannot be fixed by inner-level polish [@munzner2014visualization]. Both are craft frameworks; no study shows that designers who use them build better charts.

*In LTF:* a pull request that adds a chart includes the sentence in the component's doc comment, as the existing widgets do for their models. Example: "Invariant: one learner's score on challenge C4.3. Components: attempt (ordered) and percentage (quantity). Task: see whether the scores are rising and how far from the best."
:::

::: {.rule #VIZ-004 grade="C"}
**Get the encoding right before styling it.** Munzner's "function first, form next" holds that form starting first makes function hard to add later [@munzner2014visualization]. Encoding decisions (which quantity takes position, what the baseline is, what is labeled) are made and reviewed on a plain draft; color, weight and tokens follow.

*In LTF:* review a new widget or chart in `/dev/widgets` in a neutral draft first, then in both Day and Night themes.
:::

### Five qualities and the order they come in

Cairo organizes good visualization around five qualities: truthful, functional, beautiful, insightful and enlightening, with truthfulness first [@cairo2016truthful]. Truthful means based on honest, thorough research and free of self-deception such as cherry-picking a time window. Functional means accurate depictions that let the viewer do something (compare values, spot trends, estimate proportions). Beautiful means aesthetically pleasing in a way that invites exploration, so that beauty is part of the communication rather than ornament on top of it. Insightful means it reveals evidence that would be hard to see otherwise; enlightening means it changes understanding for the better. Each is a spectrum, and the designer trades among them deliberately.

The framework is a values statement, not a testable theory: two designers can disagree on whether a chart is enlightening. Its usefulness is the order. A chart that fails the first quality does not ship, however well it scores on the third. Cairo also distinguishes spontaneous insight, which a viewer gets at once, from knowledge-building insight that develops over time, often through interactive views [@cairo2016truthful].

::: {.rule #VIZ-005 grade="C"}
**Treat truthfulness as a gate, not a weight: a chart that cannot be defended as honest does not ship.** Cairo places truthfulness first among his five qualities and frames it as honest research and the avoidance of self-deception [@cairo2016truthful]. A cropped axis, a selected window or a trend drawn from two points fails the gate regardless of how attractive or motivating the chart is.

*In LTF:* the review checklist at the end of this Part puts the integrity questions first. A dashboard chart that makes a learner look better than the data show fails review even if it would encourage them.
:::

::: {.rule #VIZ-006 grade="C"}
**Design the debrief for spontaneous insight and the progress view for knowledge-building insight.** Cairo separates insight a viewer gets at once from insight that builds across many observations [@cairo2016truthful]. One surface should answer "how did that flight go" in a glance; another should let the learner see a pattern across many flights.

*In LTF:* `ResultView` (tier, percentage, "n of n points", criterion rows) is the spontaneous surface and should stay a single glance. `HistoryTab` and the dashboard's "Recent attempts" are where pattern across attempts belongs, and they currently show only lists.
:::

### What this means for Learn to Fly

LTF already contains more data graphics than its pages suggest. `ProgressBar` (an 8 px pill track in `surface-sunken`, filled with `accent-line`, turning `go` at 100 percent, with `aria-valuetext`) and `ProgressRing` (56 px, 6 px stroke, percentage in `readout-sm` at the center) encode one quantity each. `DifficultyDots` encodes an ordinal rating as five 8 px discs. The landing stats row, the dashboard "Stats" tiles and the result card are numeric displays. The widgets (`Gauge`, `Tape`, the load-factor graph in `LoadFactor.tsx`, `AirspeedArcs` on the reference hub) are full graphics with axes, scales and reference lines.

What is missing is any view across attempts. A learner who has flown a challenge six times sees six rows in `HistoryTab`, each with "n of n points", and a percentage and a tier in "Recent attempts", but nothing that shows the six results against each other. That is the knowledge-building surface Cairo describes, and the ensemble evidence says a row of marks on one scale would let the learner see the trend without reading six numbers.

Keep: `KeyNumbers`' one-highlight rule, which is VIZ-001 in component form, and the criterion rows in `ResultView`, which mark failures with a word (VIZ-002). Change: require the invariant-components-task sentence (VIZ-003) in the doc comment of every new chart or widget. Build: an attempt-history graphic for `HistoryTab`, designed by the rules in the chapters that follow.

## Graphical perception and the ranking of channels

### Cleveland and McGill's theory

Cleveland and McGill replaced taste with a testable theory [@cleveland1984graphical]. They called the visual decoding of quantities from a graph "graphical perception" and broke it into elementary perceptual tasks: judging position along a common scale, position along non-aligned scales, length, direction, angle, area, volume, curvature, shading and color saturation. The theory orders those tasks by how accurately people perform them, and the design rule follows: build a graph so that the viewer performs tasks high in the ordering (position on a common scale) rather than low in it (area, volume, shade). Their paper ends bluntly that some popular graphs need radical surgery, and offers dot charts, grouped dot charts and framed-rectangle charts as replacements.

The ordering, as given in a course summary of the paper (a secondary account), runs: position along a common scale; position along non-aligned scales; length, direction and angle; area; volume and curvature; shading and color saturation [@cleveland1984graphical].

The experiments that support it used a single task: judging what percentage one value is of another. In the 1984 work, ten sets of five numbers summing to 100 were drawn as bar charts and as pie charts, and subjects judged each of four values as a percentage of the largest; a second experiment used divided bar charts in three position and two length conditions [@cleveland1984graphical]. The authors' 1986 follow-up had 127 subjects (24 high school students, 60 college students and 43 technically trained professionals), each making 210 judgments across seven stimulus types. Two types of position judgment were most accurate, length was second, angle and slope third, and area last; greater distance between the judged objects reduced accuracy; and the three groups of subjects performed nearly alike.

### Replication, and where it bends

Heer and Bostock re-ran the comparison on Mechanical Turk with 50 subjects per chart type, seven judgment types (three position, two length, one angle, one circular area), ten charts at 380 by 380 pixels and Cleveland and McGill's own error measure, log absolute error [@heer2010crowdsourcing]. The rough shape and ranking of the position and length types were preserved. As predicted, area proved worse than angle and both worse than position. Not as predicted, angle was not worse than length. The replication supports the top of the ranking firmly and the middle loosely.

They also tested rectangular area, the encoding of treemaps and many "tile" layouts. Subjects judged what percentage the smaller of two rectangles was of the larger, either as bare rectangles or inside a 600 by 400 pixel treemap of 24 values [@heer2010crowdsourcing]. Accuracy matched circular area. Aspect ratio mattered, and, against intuition, comparisons between squares were worst; the authors suggest viewers use side lengths as a proxy for area, which maximizes error when both shapes are square. Treemap context did not hurt.

The broader criticism concerns the task itself. A two-value ratio judgment is a narrow baseline for charts that show many values. A 2021 preprint by McColeman, Yang, Brady and Franconeri ran experiments with 2, 4 and 8 marks and did not recover the classic ranking; the rankings it found varied with the number of marks; the preprint is known here only through a summary, so treat it as a warning rather than a result [@cleveland1984graphical]. Simkin and Hastie, as described by Spence, argued that the angle task did not match how pies are read (a segment against the whole) and found pies and bars equivalent when the task was proportion of the whole [@playfair2005commercial]. Skau and Kosara found angle the weakest cue in pies and donuts, with a donut read as accurately as a pie.

The fair reading: the ranking is strong evidence for the relative-magnitude task between two values, and a weaker basis for a universal law of chart quality. Position on a common scale tops every version of it, and that is the part to build on.

::: {.rule #VIZ-007 grade="A"}
**Put the quantity the learner must read or compare precisely on position along a common scale.** Position on a common scale was the most accurate judgment in Cleveland and McGill's experiments [@cleveland1984graphical] and in Heer and Bostock's crowdsourced replication [@heer2010crowdsourcing], and it heads every later ranking, including Mackinlay's for quantitative, ordinal and nominal data [@mackinlay1986automating]. The supporting task is relative magnitude of two values; for many-mark displays the ordering below the top is less certain.

*In LTF:* dot plots, aligned bars and lines on a shared axis are the default for anything the learner must read off. The dashboard's per-module `ProgressBar`s, stacked in one grid column so that their tracks share a start and a length, are already a position-on-common-scale display and should stay that way.
:::

::: {.rule #VIZ-008 grade="B"}
**Do not use area, angle or shade to carry a quantity that must be compared precisely.** Area was the least accurate judgment in the 1986 experiment and worse than angle in the replication [@cleveland1984graphical; @heer2010crowdsourcing]. Shading and saturation sit at the bottom of the quantitative ranking [@mackinlay1986automating]. Angle's place relative to length did not replicate, so the firm claim is about area and shade.

*In LTF:* no heat-shaded cells for scores, no bubble sizes for attempt counts. Where a quantity is shown as a ring or a fill, its exact value is printed beside or inside it, as `ProgressRing` prints its percentage.
:::

::: {.rule #VIZ-009 grade="B"}
**When area must encode a quantity, avoid comparing near-square rectangles and print the values.** In Heer and Bostock's rectangle experiment, aspect ratio affected accuracy and comparisons of squares were worst, perhaps because viewers judge side length as a proxy for area [@heer2010crowdsourcing]. One crowdsourced experiment; treat the direction as a caution rather than a layout formula.

*In LTF:* a future breakdown of time spent per phase of a flight, if drawn as tiles, gets value labels on every tile, or better becomes a single stacked bar or a row of aligned bars.
:::

### Channels, marks and what each is good for

Munzner turns the ranking into a working vocabulary [@munzner2014visualization]. Marks are geometric primitives (points, lines, areas). Channels are the visual properties that control how a mark appears. Channels split into two families. Magnitude channels show ordered attributes, and her slides list them in effectiveness order: position on a common scale, position on an unaligned scale, length, tilt or angle, area, depth (3D position), color luminance, color saturation. Identity channels show categories: spatial region, color hue, motion, shape. Each channel is judged on accuracy, discriminability (how many distinct steps can be told apart), separability (whether using one channel interferes with another) and popout.

Mackinlay had made the split explicit in 1986 [@mackinlay1986automating]. For quantitative data he reproduced Cleveland and McGill's ranking: position, length, angle, slope, area, volume, then density and color at the bottom. But color, at the bottom for quantities, is a very effective way to encode nominal sets, so he extended the ranking with separate orders for quantitative, ordinal and nominal data. Position tops all three. For nominal data the order runs position, color hue, texture, connection, containment, density, color saturation, shape. For ordinal data position is followed by color saturation among the channels shown. He is candid that "there does not yet exist an empirically verified theory of human perceptual capabilities" strong enough to prove such theorems, and that his extension "has not been empirically verified". The nominal and ordinal orders are reasoned, not measured.

Healey and Enns add a finding about interference that matters when one mark carries several channels at once [@healey2012attention]. In boundary detection the visual system favors color over shape: random variation in color slows detection of a boundary formed by shape, while random variation in shape has no effect on seeing a color pattern. In their own experiment with arrays of paper-strip glyphs, random hue variation degraded detection of size and density targets, while random texture variation did not affect detection of hue targets. Viewers could rapidly choose among up to seven isoluminant colors in a cited search experiment. The interference results come largely from one lab and from simple stimuli.

::: {.rule #VIZ-010 grade="B"}
**Use magnitude channels for quantities and identity channels for categories; never use hue to show how much.** Munzner's split of channels into magnitude and identity families [@munzner2014visualization] and Mackinlay's separate rankings by data type [@mackinlay1986automating] agree that hue is strong for categories and weak for quantities. Mackinlay calls his nominal and ordinal rankings unverified, so the grade rests on the quantitative side and on consistency across frameworks.

*In LTF:* a phase of flight or a challenge type may take a hue; a score, a deviation or a count takes position or length. The tier colors (`tier-gold`, `tier-silver`, `tier-bronze`) are categories with a cultural order and must always print their word, as `TierBadge` does.
:::

::: {.rule #VIZ-011 grade="B"}
**Spend the strongest channel on the most important variable, and keep secondary variation from interfering with it.** Mackinlay's Principle of Importance Ordering assigns the highest-ranked channel to the most important relation [@mackinlay1986automating]. Healey and Enns found that random hue variation degrades detection of size and density, so a hue that varies for decoration or a secondary variable can hide a primary magnitude [@healey2012attention].

*In LTF:* in a widget that encodes magnitude by size or position, keep the hue palette fixed and minimal. The instrument tokens (`arc-green`, `arc-yellow`, `arc-red`, `display-magenta`) carry meaning in the gauges and must not also be used for decoration nearby.
:::

::: myth
**"Pie charts are always wrong."** The claim comes from reading Cleveland and McGill's ranking as a verdict: angle is less accurate than position, so pies lose. But the original task was a ratio of two values, which is not how pies are read. Simkin and Hastie, as described by Spence, found pies and bars equivalent when the task was the proportion of a whole, and Spence and Lewandowsky found pies comparable for simple proportions, with a pie advantage on compound comparisons [@playfair2005commercial]. Heer and Bostock did not find angle worse than length [@heer2010crowdsourcing]. Spence's view is that criticism came from those who wanted the pie to do more than it could: it suits part-whole display of a few categories, not exploration or change over time. The defensible rule is narrower than the myth: do not use pies to compare many categories or change over time [@cleveland1984graphical].
:::

::: {.rule #VIZ-012 grade="B"}
**Use a ring or pie only to show one part of one whole, or a few labeled parts.** Pies and bars performed alike for part-whole proportion tasks in the studies Spence reviews [@playfair2005commercial], while angle and area are weak for comparing values across charts [@cleveland1984graphical]. Comparing many rings side by side turns a part-whole task into a cross-chart comparison, which is where the weak channels fail.

*In LTF:* `ProgressRing` showing one module's completion, with the percentage printed at its center, is a defensible use. A grid of rings for comparing modules is not; that comparison belongs to aligned bars (see VIZ-020).
:::

### Instruments are a separate case

Spence makes a point that bears directly on a flight-training product: circular dials, such as airspeed indicators and altimeters, have been preferred to linear scales in instruments because they take less space at the same or better resolution [@playfair2005commercial]. An instrument dial is not a chart a learner analyzes. It is the object the learner is being trained to read, and its form is fixed by the aircraft, not by a ranking of channels. Few says the same from the dashboard side: simulating a control board would be the right choice if the purpose were training in its use [@few2006information].

::: {.rule #VIZ-013 grade="C"}
**Draw an instrument widget in the instrument's own form, and keep analytic charts in chart forms.** Where the learning goal is to read a real instrument, the instrument's dial or tape is the content, and Few accepts skeuomorphic display when training in the instrument is the purpose [@few2006information]. Circular dials have been preferred in instruments for space and resolution [@playfair2005commercial]. Outside that purpose, the channel ranking applies.

*In LTF:* `Gauge` and `Tape` in `features/widgets/shared/svg.tsx`, painted with the fixed instrument tokens, are correct for the airspeed, attitude and turn widgets. A chart of a learner's results is never drawn as a gauge.
:::

::: {.rule #VIZ-014 grade="C"}
**Test multi-mark charts with learners rather than deferring to the channel ranking.** The ranking was built on two-value judgments, and a 2021 preprint with 2, 4 and 8 marks did not recover it [@cleveland1984graphical]. A chart with many marks may behave differently from the laboratory case.

*In LTF:* for any chart with more than a handful of marks (an attempt history, a phase breakdown), run a short task test with two or three beginners before it ships: ask them to state the comparison the caption promises.
:::

### What this means for Learn to Fly

The most consequential finding for LTF is not about a chart it has but about a pair of displays it has for the same thing. `CurriculumMap` shows each module's progress as a 56 px `ProgressRing`; `DashboardPage` shows the same per-module progress as `ProgressBar`s in a single aligned column. The dashboard is right by VIZ-007: the bars share a start and a length, so the learner compares modules by position on a common scale. The rings on the curriculum map are acceptable individually (VIZ-012, one part of one whole, value printed), but a learner scanning a column of module cards to see which module is furthest along is comparing angles across separate charts. Either replace the rings with the same `ProgressBar` used on the dashboard, or keep the ring as a per-card glyph and never present a set of rings as the way to compare modules.

`DifficultyDots` is a sound ordinal display: five 8 px discs, the filled count encoding the level, with "Difficulty n of 5" as its accessible name. It uses count and position, not shade, and it would survive any version of the ranking.

The load-factor graph (`Graph` in `LoadFactor.tsx`) is the best existing model of a chart: the quantity sits on position along two labeled axes, the curve is one 3 px accent line, the current state is a single dot with a dotted drop line, and the limit is a dashed reference line carrying its own label. Copy its construction for the charts LTF builds next. The instrument widgets (`Gauge`, `Tape`, `AirspeedArcs`) are exempt from the chart rules by VIZ-013 and bound instead by the instrument they imitate.

## Choosing the form: expressiveness, tables and small multiples

### A picture must say exactly what the data say

Mackinlay treated a graphical presentation as a sentence in a graphical language and split the quality of a design into two tests [@mackinlay1986automating]. Expressiveness asks whether the language can express exactly the desired information, no more and no less: a design is expressive if its sentences encode all the facts in the data and no additional facts. Effectiveness asks whether the design exploits the output medium and the human visual system, which is where the channel ranking of the previous chapter enters. His prototype, APT, composed primitive languages (axes, bar chart, line chart, scatter plot, color, shape, size, saturation, texture, orientation, tree, network) into candidate designs, filtered them by expressiveness and ordered them by effectiveness.

His example of an expressiveness failure is instructive: a bar chart of a relation whose domain has no order expresses an ordering the data lack, because most readers take bar lengths as encoding an ordered or quantitative set [@mackinlay1986automating]. A scatter plot of the same relation avoids the false implication. The two most common expressiveness failures in a product like LTF follow from the same logic. A line drawn through discrete results (one lesson score, then another) implies a continuous quantity varying between them, when nothing existed between the attempts. Bars for unordered categories (phases of flight, challenge types) placed in an arbitrary sequence imply a ranking.

Expressiveness is a logical test, which makes it unusually checkable. It does not depend on perceptual experiments; it asks whether the graphic asserts a fact that is not in the data. Mackinlay's effectiveness theory is, by his own account, conjectural, but the expressiveness criterion needs no such support.

::: {.rule #VIZ-015 grade="C"}
**Reject any chart that implies a fact the data lack: no lines through discrete events, no ordering of unordered categories.** Mackinlay's expressiveness criterion requires that a design encode all the facts in the data and no others, and shows a bar chart of an unordered domain implying an order [@mackinlay1986automating]. It is a logical criterion from a systems paper, not a user study.

*In LTF:* attempt results are discrete events, so an attempt history uses dots (optionally joined by a faint line only if the caption says the line is a guide, not a value). Challenge types on `ChallengesPage` are unordered; if they are ever charted, sort them by the value shown, not by the order of `CHALLENGE_TYPES`.
:::

### The level of the variable must match the level of the data

Bertin's rules of organization make the same point at the level of each visual variable [@bertin2010semiology]. Components are qualitative (nominal), ordered or quantitative, and visual variables have levels of organization too. His two rules are compact: "an order will not be perceptible if the variable is not ordered; a ratio will not be perceptible if the variable is not quantitative". The visual variable must have a level of organization at least equal to that of the component it represents. Hue is not ordered, so a score shown by hue cannot be read as an order. Size is ordered and quantitative, so categories shown by size will be read as ranked.

He adds that qualitative categories are reorderable and equidistant, so a graphic should not highlight one or create groups a priori. For categories he names two reading modes: selective (this differs from that) and associative (these belong together), and each needs a variable that supports it [@bertin2010semiology]. The retinal variables he lists are size, value, texture, color, orientation and shape, plus the two dimensions of the plane. Bertin's rules come from craft reasoning and print-era examples, and the book does not treat interaction.

::: {.rule #VIZ-016 grade="C"}
**Give each component a visual variable whose level of organization is at least that of the data: ordered variables for ordered data, quantitative variables for quantities.** Bertin's rule is that an order is not perceptible through an unordered variable, nor a ratio through a non-quantitative one [@bertin2010semiology]; Mackinlay's data-type rankings encode the same constraint [@mackinlay1986automating]. Craft theory, consistent with the perceptual rankings.

*In LTF:* difficulty is ordinal and `DifficultyDots` encodes it by count, an ordered variable. Tiers are ordinal and are shown by hue plus a printed word; the word carries the order, so it must never be dropped.
:::

::: {.rule #VIZ-017 grade="C"}
**Show peer categories with equal visual weight; make one stand out only when it is the subject.** Bertin treats qualitative categories as equidistant and warns against highlighting one or implying groups that the data do not contain [@bertin2010semiology].

*In LTF:* the nine `Callout` types are peers; their type color appears only on the 20 px icon and title, which keeps them equal. In a future chart of time per phase, all phases share one weight unless the caption is about a specific phase.
:::

### When a table beats a chart

Tufte notes that tables usually outperform graphics for data sets of 20 numbers or less [@tufte1983visual]. The reasoning is the one Playfair gave for pictures, applied in reverse: a picture earns its place when the eye must grasp proportion or trend across many values. When there are few values and the task is to look one up exactly, a table delivers the number directly and the chart adds a decoding step. Few's dashboard pitfalls include the same idea from the other side: choosing an inappropriate medium, such as a pie whose slices cannot be read without value labels, when a bar graph or a plain list would do [@few2006information].

The judgment is about the task, not only the count. A table of five values that the learner must memorize is best as a table. A sequence of 12 attempt scores whose question is "am I improving" is better as a chart even though it is under 20 numbers, because the task is trend, not lookup.

::: {.rule #VIZ-018 grade="C"}
**Use a table, not a chart, for a small set of values the reader must look up or memorize exactly.** Tufte observes that tables usually beat graphics for 20 numbers or fewer [@tufte1983visual]; Few lists choosing an inappropriate medium among common dashboard failures [@few2006information]. Craft judgment; the threshold is Tufte's rule of thumb, not a measured limit.

*In LTF:* the `SpeedsPage` `Table` with mono KIAS cells, the "Limits" tiles and `KeyNumbers` are correct as tables and lists. Do not convert them to bar charts. The `BriefTab` scoring `Table` (Criterion, Levels, Weight) is also correct.
:::

### Small multiples: let the eye compare, not the memory

Small multiples, in Tufte's definition, are "a series of graphics, showing the same combination of variables, indexed by changes in another variable", like frames of a film, with the design held constant so that attention goes to shifts in the data [@tufte1983visual]. Munzner's rule of thumb "eyes beat memory" gives the perceptual reason: comparing a visible item to a remembered one is harder than comparing two visible items, so side-by-side views beat animation for comparing many states [@munzner2014visualization]. Franconeri and colleagues advise avoiding animation in data communication because it typically leads to confusion, with the qualification that animation controls helped precise questions about single items but hurt extracting global trends [@franconeri2021science].

Two cautions apply. Small multiples work only if the axes are identical across panels; a panel that rescales to its own data breaks the comparison the form exists for. And Cleveland and McGill found that greater distance between the judged objects reduced accuracy [@cleveland1984graphical], so the values to be compared most often should sit in adjacent panels or, better, on one shared axis. Few's pitfall list includes comparison bars that are not adjacent [@few2006information].

::: {.rule #VIZ-019 grade="B"}
**Show many states of the same thing as small multiples on identical axes, not as an animation or a set of independently scaled charts.** Munzner's "eyes beat memory" favors side-by-side views over animation [@munzner2014visualization], Franconeri and colleagues report that animation typically confuses and hurts trend extraction [@franconeri2021science], and Tufte's small multiples hold the design constant so only the data change [@tufte1983visual].

*In LTF:* a learner comparing three attempts at the same challenge sees three identical small panels (same axis range, same reference lines) or one panel with three series, never a carousel that replaces one with the next.
:::

::: {.rule #VIZ-020 grade="B"}
**Put the values most often compared next to each other on one shared baseline.** Accuracy fell with distance between judged objects in Cleveland and McGill's experiments [@cleveland1984graphical], and Few lists non-adjacent comparison bars among dashboard failures [@few2006information]. Position on a common scale is the most accurate judgment of all (VIZ-007).

*In LTF:* per-module progress belongs in one aligned column, as on `DashboardPage`. On `CurriculumMap`, where each module is a separate `<details>` card with its own `ProgressRing`, the cards are for navigation; they should not be the place a learner compares modules.
:::

### No unjustified 3D, and the right data type

Munzner's first rule of thumb is "no unjustified 3D" [@munzner2014visualization]. Depth is a weak channel, occlusion hides data, perspective distortion corrupts size channels, and tilted text is hard to read. 3D is legitimate for truly spatial data when the task is to perceive shape. Her companion rule, "no unjustified 2D", warns against drawing as a 2D plane what is really a list. Shneiderman's taxonomy names the data types a designer may face (one-, two- and three-dimensional data, temporal data, multi-dimensional data, trees and networks) and attaches cautions about disorientation and occlusion to the 3D type [@shneiderman1996eyes].

For LTF, the distinction is between flight data and flight space. A traffic pattern around a runway or the shape of an approach path is spatial, and a 2D plan or profile view is usually enough; 3D earns its place only when the shape in depth is the lesson. A score, a time or a count is never spatial, and drawing it as a 3D bar or a perspective column adds distortion and nothing else.

::: {.rule #VIZ-021 grade="C"}
**Draw quantities in 2D; use 3D only when perceiving a shape in space is the task.** Munzner's rule cites weak depth perception, occlusion, perspective distortion of size and the difficulty of tilted text [@munzner2014visualization]; Shneiderman flags disorientation and occlusion in 3D data [@shneiderman1996eyes]. Expert synthesis with cited experiments.

*In LTF:* `AirspaceProfile` already draws a side view and a plan view in 2D rather than one 3D scene. Keep that pattern. No 3D bars, no perspective tilt on cards that hold numbers.
:::

### Proximity: group by the task, not by the topic

Wickens and Carswell's proximity compatibility principle states that displays relevant to a common task or mental operation should be rendered close together in perceptual space [@wickens1995proximity]. Display proximity can come from spatial closeness, shared color, a shared object boundary or other cues that make items look like one thing. The second half of the principle is what keeps it from meaning "group everything": when information must be selectively attended, it should be shown with low proximity. In the account of Wickens and Andre's earlier study, an object display that merged several parameters into one shape gave better integration in an aircraft stall-analysis task but degraded focused attention on single dimensions, and only homogeneous-feature objects produced the emergent features that aid integration [@wickens1995proximity]. The full text of the 1995 paper was not read for this book, so its list of proximity manipulations should be checked before it is quoted.

::: {.rule #VIZ-022 grade="B"}
**Place together what the learner must combine in one mental step, and separate what they must read alone.** The proximity compatibility principle, drawn from laboratory studies in aviation, graph reading and display layout, matches display proximity to task proximity and warns that integration costs focused attention [@wickens1995proximity].

*In LTF:* in a debrief, a criterion and the learner's result on it share one row, as in `ResultView`'s "Criterion by criterion". In a widget that answers "are these consistent", draw the readings in one figure; in one that asks for a single value, give that value its own plain readout beside the figure. Which instrument readings belong together is aircraft knowledge from approved sources, not a design choice.
:::

### What this means for Learn to Fly

The reference pages already make the table-versus-chart choice correctly. `SpeedsPage` presents speeds as a `Table` with large mono KIAS cells, a "Limits" list and a sticky `KeyNumbers large` panel: few values, looked up exactly, under VIZ-018. The `AirspeedArcs` band beside them is a graphic because its task is different (where the speeds fall relative to each other on one scale), and it uses position along a single axis to do it.

The gap is the same as in the previous chapters: there is no form yet for many attempts. The form that the rules here point to is a dot strip or a small set of identical panels (VIZ-019), with discrete dots rather than a continuous line (VIZ-015), on one shared 0–100 axis (VIZ-020). Build it as a shared primitive (for example `AttemptStrip` beside `ProgressBar` in `src/components/Progress.tsx`), so that `HistoryTab`, the dashboard and any future account page use the same encoding for the same quantity.

`AirspaceProfile`'s paired side and plan views are a good use of 2D for spatial data (VIZ-021). If a future widget is tempted toward a 3D scene, write the invariant-components-task sentence (VIZ-003) first: if the task is not perceiving shape in depth, it stays 2D.

## Graphical integrity: scale, baseline and the lie factor

### Proportion is the first promise

Tufte states two principles of graphical integrity [@tufte1983visual]. The first is that the physical representation of numbers on the graphic "should be directly proportional to the numerical quantities represented". The second is that labeling should be clear, detailed and thorough, enough to defeat graphical distortion and ambiguity. To measure violations of the first he defines the Lie Factor: the size of the effect shown in the graphic divided by the size of the effect in the data. A value of one suggests reasonable accuracy; values above 1.05 or below 0.95, in his judgment, indicate substantial distortion. In practice, he reports, almost all distortions overstate, with factors of two to five not uncommon, and his worked example, a graphic of fuel economy standards, yields a Lie Factor of 14.8.

The 0.95 to 1.05 band is Tufte's own threshold, not an experimental result, and should be read as a craft tolerance. The ratio itself is a useful audit tool because it can be computed: measure the graphic, measure the data, divide.

Wainer reached the same idea from the opposite direction in his satirical "dirty dozen" of ways to display data badly [@wainer1984display]. His third rule, "ignore the visual metaphor altogether", is measured by a perceptual distortion ratio (perceived change over actual change), and in one dollar-value graphic he reads a ratio of about 7.6, a distortion of over 700 percent. The usual mechanism is a picture scaled in two dimensions to show a change in one: double the height of an icon and, if its width doubles too, its area quadruples.

Franconeri and colleagues give the modern rule for circles and squares: map data to area, not to diameter [@franconeri2021science]. A circle whose diameter doubles has four times the area, and area is what a viewer compares.

::: {.rule #VIZ-023 grade="C"}
**Make every mark's size proportional to its value, and audit any scaled picture by computing its lie factor.** Tufte's integrity principle requires proportional representation and defines the Lie Factor as effect shown over effect in the data, with 0.95 to 1.05 as his tolerance [@tufte1983visual]; Wainer's perceptual distortion ratio measures the same failure [@wainer1984display]. The tolerance is craft judgment.

*In LTF:* a fill, a bar or an arc length must be a linear function of its value. `clampPercent` in `Progress.tsx` does this for both progress components (a width percentage and a dash offset). Any future scaled icon, such as a larger airplane for a longer flight, fails unless it scales in one dimension only.
:::

::: {.rule #VIZ-024 grade="B"}
**Map values to the area of a circle or square, never to its diameter or side.** Franconeri and colleagues give this as a key guideline [@franconeri2021science]; Wainer's example graphics show the distortion that two-dimensional scaling of a one-dimensional change produces [@wainer1984display]. Area is itself a weak channel (VIZ-008), so print the values as well.

*In LTF:* if dot sizes ever encode attempt counts or time, compute the radius as the square root of the value. Prefer not to encode a quantity by size at all.
:::

### Where the axis starts

A bar encodes its value twice: by the position of its end against the axis and by its length from the baseline. When the axis starts above zero, the end position stays honest but the length does not, and length is what a viewer compares when two bars stand side by side. A truncated bar is a Lie Factor greater than one by construction.

Correll, Bertini and Franconeri tested what truncation does in three crowdsourced experiments [@correll2020truncating]. In the first, 39 analyzed participants rated the severity of changes in bar and line charts whose axes started at 0, 25 or 50 percent of the range. Truncation had a large effect on rated severity, with all three levels differing, and chart type made no significant difference: lines exaggerated as much as bars. Framing (value or trend) had a small effect, and 78 percent answered a truncation literacy item correctly. In the second, 31 participants saw standard bars, broken-axis bars and bars whose bottoms faded out in a gradient; the two cues meant to warn viewers did not reduce perceived severity. In the third, 25 participants estimated values: error in estimating the trend did not change with truncation, but error in estimating individual values rose at the 25 percent baseline, and severity still followed truncation. The authors conclude that the bias is visual: a viewer can read the numbers correctly and still feel the exaggeration.

The samples are small (25 to 39 people), the stimuli had no domain context, only two warning cues were tried, and the measure was a severity rating, not a decision. No independent replication was found. The paper is strong on one point (warning cues do not repair truncated bars) and suggestive on the rest.

The same authors decline a binary of deceptive and truthful axes [@correll2020truncating]. They survey the guidance: Huff called non-zero axes "gee whiz" graphs; Brinton said scales should normally include zero; Tufte advised, for time series, a baseline that shows the data rather than wasting space reaching down to zero; Cairo advises zero for length-encoded bars but not for lines; the Draco design tool hard-codes the bar rule. Their advice is to consider the size of the meaningful effects and variation the chart is meant to communicate, whatever the encoding. Franconeri and colleagues agree: failing to start at zero can make viewers overestimate differences, but a zero baseline can make effect sizes illegible when data sit far from zero, and designers disagree on whether the rule is absolute; one approach they cite spans 0.75 standard deviations either side of the mean [@franconeri2021science]. Cairo's position, as relayed in secondary accounts, is zero unless zero is not a meaningful reference point and the start does not distort perceived magnitude [@cairo2016truthful]. Wainer showed the other edge of the rule with irony: an appeal that "honesty requires that we start the scale at zero" can blow up a scale until real growth disappears, as in his private-schools example [@wainer1984display]. Few gives the plainest bar example: a truncated axis that makes revenue look four times costs when it is under double [@few2006information].

::: myth
**"A broken-axis mark makes a truncated bar chart honest."** The belief is that a zigzag on the axis, or bars that fade out at the bottom, tells viewers that the baseline is not zero and so neutralizes the exaggeration. In Correll, Bertini and Franconeri's second experiment, neither cue reduced perceived severity compared with a plain truncated bar; the exaggeration persisted even when viewers could see that truncation had occurred [@correll2020truncating]. The sample was small (31 analyzed participants), but no evidence supports the cue as a fix.
:::

::: {.rule #VIZ-025 grade="B"}
**Start every length-encoded display (bars, columns, fills, stacked areas) at zero, with no break marks.** Truncation produced a large increase in perceived severity, and broken-axis and gradient cues did not reduce it [@correll2020truncating]; Tufte's proportionality principle forbids it [@tufte1983visual]; Few's example shows the distortion's size [@few2006information]. Small crowdsourced samples, consistent with the craft consensus.

*In LTF:* `ProgressBar` and `ProgressRing` comply by construction. A score history drawn as bars starts at zero. A "bar" whose job is to show a narrow range becomes a dot on an axis instead.
:::

::: {.rule #VIZ-026 grade="C"}
**Let a position-encoded display (line, dot plot, centered deviation gauge) start away from zero only when the axis is labeled with units and the meaningful band is drawn on it.** The zero rule is contested for non-bar encodings, and both Correll and colleagues and Franconeri and colleagues recommend scaling to the size of the effect that matters [@correll2020truncating; @franconeri2021science]. Lines still exaggerated in Correll's first experiment, so the drawn band is what lets the viewer judge the effect relative to what matters. The evidence on this middle path is thin, which is why the grade is C.

*In LTF:* a deviation display that is centered on a target (the kind a lesson might use to show holding a speed or an altitude) labels its scale and shades the acceptable band, as the load-factor graph labels its limit line. The target value itself comes from the lesson's `{{vspeed.*}}` or `{{aircraft.*}}` token, never a hand-typed number.
:::

### Context, windows and baselines

Several of Wainer's rules concern what is around the data rather than the data's marks [@wainer1984display]. Rule 5, "graph data out of context": the choice of interval can make a precipitous drop vanish. Rule 6, "change scales in mid-axis": a newspaper circulation graph with a shifting scale. Rule 8, "jiggle the baseline": a stacked-area graph of meat imports in which each series starts from a different base, so the reader cannot tell whether one series is rising; a line for each, or for the total, would have served. These are failures of the frame, and they mislead even when every mark is drawn to scale.

Cairo's account of truthfulness makes the same demand at the level of research: avoid self-deception, such as cherry-picking a time window, and use rates rather than raw counts when a confounding base (in his case population on a map) would otherwise drive the picture [@cairo2016truthful]. Few's second pitfall is the dashboard version: a number on its own needs context (a target, a history, a qualitative state) to mean anything [@few2006information].

Wainer's essay is satire with a serious purpose, and he acknowledges that automatic rules do not always work and that judgment is required [@wainer1984display]. Read the dozen as a review checklist, not as a list of absolute bans.

::: {.rule #VIZ-027 grade="C"}
**Keep every scale continuous and every compared series on one baseline.** Wainer's rules against changing scales in mid-axis and jiggling the baseline show how a stacked or shifting frame hides change even with accurate marks [@wainer1984display]. Craft authority with worked examples.

*In LTF:* no stacked charts of per-criterion points across attempts (each criterion would sit on a different base). Show each criterion as its own aligned row, or show the total.
:::

::: {.rule #VIZ-028 grade="C"}
**Show a value with the context that makes it meaningful (a target, a previous best or a history), and choose the time window before looking at the result.** Wainer's "graph data out of context" [@wainer1984display], Cairo's warning against cherry-picked windows [@cairo2016truthful] and Few's "inadequate context" pitfall [@few2006information] agree. A single point invites the viewer to supply their own context, usually the wrong one.

*In LTF:* `ResultView` already prints "Your best so far" beside a new result when they differ. Keep it, and give the dashboard's "Gold results" tile its denominator (Gold out of attempts, or out of challenges flown).
:::

::: {.rule #VIZ-029 grade="C"}
**Compare rates, not raw totals, when the things compared differ in size or duration.** Cairo advises rates over raw counts when a base such as population would otherwise drive the picture [@cairo2016truthful]. A raw count rewards whoever had more opportunity.

*In LTF:* a comparison of modules by "challenges passed" should show passed out of available, as the dashboard's `ProgressBar` value text does ("n of n challenges"), not a raw count that grows with module size.
:::

### What this means for Learn to Fly

The progress components are honest by construction and should stay so: `clampPercent` maps value over max to 0–100, the bar's fill is a width, the ring's is a dash offset, and both start at zero. The value text ("3 of 5 lessons", "n of n challenges") gives the denominator, which satisfies VIZ-029.

The exposure is in what has not been built, and in the motivational frame around it. A score history on `DashboardPage` or in `HistoryTab` that plotted attempt percentages as bars from 50 would make a two-point gain look like a leap, and in a product whose result card already celebrates a tier with the `tier-pop` animation, that exaggeration would feed a confidence the flying has not earned. Build the history as dots on a labeled 0–100 axis (VIZ-025, VIZ-026), draw the learner's previous best as a reference line (VIZ-028), and print the change as a number beside it ("up 4 points"). Do not add a broken-axis mark to make a truncated chart acceptable; it does not work.

The dashboard "Stats" tiles are the clearest current case for VIZ-028. "Attempts", "Gold results" and "Sim time (estimated)" are bare numbers in `font-mono text-2xl font-bold` with no target, history or denominator. "Gold results: 3" means something different after 4 attempts than after 40. Add the base ("3 of 12 attempts") in the tile's `dt` or a `text-sm text-ink-2` line.

## Ink, ornament and memory

### The data-ink argument

Tufte defines data-ink as the non-erasable, non-redundant ink that changes as the data change, and the data-ink ratio as data-ink divided by total ink, equal to one minus the proportion of ink that could be erased without losing data-information [@tufte1983visual]. His five principles in the book's conclusion are: above all else show the data; maximize the data-ink ratio; erase non-data-ink; erase redundant data-ink; revise and edit. In the body of the book the maximizing and erasing rules are qualified "within reason", a phrase that matters more than it is usually given credit for.

He names the enemies. Chartjunk includes moiré vibration, the op-art patterns of hatching that shimmer, which he calls "probably the most common form of graphical clutter"; heavy grids; and the "duck", a graphic whose whole form is itself decoration, named after a duck-shaped roadside store [@tufte1983visual]. His summary of the balance is "for non-data-ink, less is more; for data-ink, less is a bore". The second half is a reminder that the goal is not an empty chart but a full one: he also asks designers to maximize data density (entries in the data matrix per area of graphic) within reason, shrinking marks as data grow.

Wainer's first two dirty-dozen rules are the same argument as satire: "show as few data as possible" and "hide what data you do show" [@wainer1984display]. Using Tufte's data density index (numbers per square inch), he found values from 0.1 to 362 across popular and technical media, including a four-color graphic in a social indicators volume that carried 18 numbers at an index of about 0.3. He concedes that high density does not guarantee a good graphic, nor low density a bad one.

All of this is craft authority and argument by example. The one experimental thread Bateman and colleagues summarize, from Gillan and Richman, found high data-ink ratios correlated with faster and more accurate responses, but the effect depended on where the extra ink was placed: background images hurt, while axis lines helped [@bateman2010useful]. Ink is not uniformly bad; ink that competes with the data is.

::: {.rule #VIZ-030 grade="C"}
**Where values are read under workload, strip non-data ink: thin light gridlines, no frames, no gradients, no backgrounds behind the marks.** Tufte's data-ink principles, qualified "within reason" [@tufte1983visual], and the Gillan and Richman finding that background images hurt while axis lines helped [@bateman2010useful] support economy where speed and accuracy matter. Few makes the same case for glanceable displays [@few2006information].

*In LTF:* Fly mode (`FlyModePage`, `FlyPanel large`) and every instrument readout follow this rule. Keep the axes and tick labels; they are data-ink that helps. The load-factor graph's 1 px `stroke-line` gridlines and plain background are the model.
:::

::: {.rule #VIZ-031 grade="C"}
**Never use hatching, op-art fills or a decorative overall shape to carry data.** Tufte identifies moiré vibration as the most common form of graphical clutter and the "duck" as a graphic whose form is decoration [@tufte1983visual]. Craft judgment with many worked examples.

*In LTF:* no hatched fills in progress or score displays, and no chart shaped like an airplane or a runway whose outline is not itself the data. Hatching is acceptable in the sectional chart drawing (`sectional-legend/Chart.tsx`) only where it reproduces a real chart symbol.
:::

### Useful junk?

Bateman and colleagues tested the minimalist premise directly [@bateman2010useful]. They took 14 embellished charts by the designer Nigel Holmes and made plain versions carrying exactly the same data, chart type, titles, axis labels and values. The plain versions kept ticks and chart style, dropped axis lines, were framed in black and used grayscale; they were not engineered to maximize data-ink. Twenty university students (aged 18 to 40) each saw one version of each chart, with order counterbalanced across two groups of ten, under an eye tracker, and were not told that recall would be tested.

Describing the charts, participants did no worse with the embellished versions: there were no differences for subject, categories or trend, and the value message (whether the author was trying to convey a judgment) was described better for Holmes charts. Completion time did not differ. Ten participants were tested for recall after a five-minute distraction game and ten after 12 to 22 days. Long-term recall was significantly better for the embellished charts on subject, categories, trend and value message, and plain charts needed more prompting. Participants preferred the Holmes charts for enjoyment, attractiveness and memorability. Eye tracking showed that 40 percent of on-screen time on Holmes charts went to embellishment or dual-coded regions, yet description took no longer [@bateman2010useful].

The authors are cautious. They do not advocate embellishment as a general principle, since strong images can bias interpretation, and they suggest the effect came from images tightly tied to the topic and trend (a monster whose rising teeth tracked the data) and perhaps from emotion anchoring memory. The study is small (20 people, 10 per recall condition) and uses one designer's style. Few's critique argues the finding is narrow: simple one-sentence messages, embellishments tied to the message, one designer's charts, 20 students [@few2006information]. Borgo and colleagues, with a dual-task design, found embellishments helped memory, slowed visual search and had a mixed effect on concept comprehension, so the benefit is real but not free (known here from abstracts only). A later study of enhanced graphics, seen only in a summary, reported that data-relevant enhancements helped recall of titles and themes but not specific values, while unrelated enhancements were remembered worse than plain charts.

Franconeri and colleagues sum up the state of play [@franconeri2021science]. Despite strong calls to declutter, "there is only mixed evidence" that decluttering improves aesthetic ratings, and little evidence that it affects objective performance; some researchers discourage further tests of a simple declutter rule given the small, mixed effects. Studies of pictorial embellishment show no improvement in memory for data, mixed results, or better memory for content or message. Embellishments can distract if unrelated to the data; related ones can improve memory and engagement.

The instructional literature adds a stronger warning about unrelated material. Rey's meta-analysis of 39 experimental effects found that interesting but irrelevant "seductive details" harm learning, with a small to medium effect on retention and a medium effect on transfer, though none of the four proposed explanations is settled and later work finds the effect variable [@rey2012review].

::: myth
**"Chartjunk always harms comprehension."** The minimalist tradition assumes that any ink not carrying data makes a chart harder to read. In Bateman and colleagues' experiment, embellished charts were described as accurately as plain ones and remembered significantly better after two to three weeks [@bateman2010useful], and Franconeri and colleagues find little evidence that decluttering affects objective performance [@franconeri2021science]. The opposite claim is not proven either: the study was small, its embellishments were tied to the data, and unrelated decoration is the case that does harm, as the seductive-detail literature shows for instruction [@rey2012review].
:::

::: {.rule #VIZ-032 grade="B"}
**Add no decoration that is unrelated to the data or to the point the graphic makes.** Unrelated embellishment can distract and was remembered worse than plain charts in one later study [@franconeri2021science]; irrelevant interesting material harms retention and transfer in instruction, by meta-analysis [@rey2012review]. Bateman's positive result came from embellishments tied to the topic [@bateman2010useful].

*In LTF:* no stock clip art, sky gradients or airplane silhouettes on charts and stat tiles unless the picture encodes the quantity or the concept being shown. The landing page's choice of no illustration is consistent with this rule for its stats row.
:::

::: {.rule #VIZ-033 grade="D"}
**Consider one restrained, topic-related pictorial element on a recap graphic meant to be remembered for weeks, and keep exact values in plain labeled marks.** Bateman and colleagues found better delayed recall for embellished charts with no loss of accuracy [@bateman2010useful], but the study had 20 participants, Few disputes its scope [@few2006information], and Borgo's work found costs to search. Contested: test it on LTF's own lessons with a delayed-recall check before relying on it.

*In LTF:* a candidate is the end-of-lesson recap or the completion panel ("Finished reading and trying the questions?"), never `FlyModePage`, `KeyNumbers`, `SpeedsPage` or any widget readout.
:::

### Memorable is not the same as good

Borkin and colleagues ran what they called the largest visualization study to that date: 2,070 single-panel visualizations from news media, government reports, scientific journals and infographic sources, labeled by chart type and rated for data-ink ratio and visual density, with memorability scores collected on Mechanical Turk for hundreds of them [@borkin2013what]. Memorability was measured with a memory game: images appear for one second each and the participant presses a key on seeing a repeat; the score combines the hit rate and the false-alarm rate. Observers were consistent about which visualizations were memorable. Human-recognizable objects (photos, people, cartoons, logos) were, in Pfister's words, "the most dominant thing that affects the memorability". Denser visualizations and those with many colors were more memorable, against the minimalist hypothesis. Unusual types (grids and matrices, trees and networks, diagrams) beat familiar bars, lines, pies and scatters.

The limits are as important as the findings. A 2018 replication on scientific visualizations by Li and Chen validated the game on 50 of Borkin's images (rank correlation 0.69), then found lower hit rates (about 48 percent) and false alarms (about 7 percent) for scientific images; for those, objective density and clutter correlated negatively with memorability, though faces again scored high [@borkin2013what]. The "dense and colorful is memorable" result is partly a property of the infographic sample and did not transfer cleanly. The features were annotated, not manipulated, so the study is correlational. And memorability here is one-second recognition: it says nothing about comprehension, accuracy or learning. The lead author cautions that a memorable visualization is not necessarily a good one, and the authors decline to issue sweeping guidelines.

::: myth
**"A memorable chart is a better chart."** Borkin and colleagues showed that some visualizations are consistently remembered after a one-second glance, and that pictures, color and unusual forms predict it [@borkin2013what]. But the measure is recognition of having seen an image, not understanding of what it showed, the features were observed rather than manipulated, and the density finding reversed for scientific images in a later replication. The authors themselves say a memorable visualization is not necessarily a good one. Franconeri and colleagues note that pictorial elements improve memory for having seen a visualization, which is a different thing from memory for its data [@franconeri2021science].
:::

::: {.rule #VIZ-034 grade="B"}
**Never justify density, color or pictures in a data display by memorability alone; judge it by whether learners read and use it correctly.** Borkin's memorability is one-second recognition, correlational and partly sample-specific [@borkin2013what]; recognition is not comprehension [@franconeri2021science].

*In LTF:* a dashboard or debrief redesign that adds color or imagery "so it sticks" must also pass a reading test: can a learner state their best result and their trend from it?
:::

::: {.rule #VIZ-035 grade="C"}
**Use one encoding for one quantity everywhere in the product.** Few lists meaningless variety among dashboard pitfalls, because consistency lets viewers reuse one perceptual strategy [@few2006information]; Borkin's finding that unusual forms are memorable is not a reason to vary the form of the same quantity [@borkin2013what].

*In LTF:* module progress is a `ProgressBar` on `DashboardPage` and a `ProgressRing` on `CurriculumMap`; pick one. Scores are always a mono percentage with a `TierBadge` and "n of n points", as in `ResultView`, `DebriefForm`'s preview and `HistoryTab`.
:::

::: {.rule #VIZ-036 grade="D"}
**Give a concept that must be remembered (a pattern, a profile, a sequence) a distinctive diagram of its own rather than a stock chart.** Unusual diagram forms and human-recognizable objects were more memorable in Borkin's sample [@borkin2013what], and related pictures aided recall in Bateman's [@bateman2010useful]; both findings are contested or limited to recognition.

*In LTF:* the hand-built widgets (`traffic-pattern`, `airspace-profile`, `wind-triangle`) are already distinctive and specific, which is the strength of the product's visual identity. Do not replace them with generic chart-library output.
:::

### What this means for Learn to Fly

LTF's drawing style is already close to the evidence's middle path. The widgets are plain where values are read (thin `stroke-line` gridlines, `fill-ink-2` mono tick labels, no frames inside the `WidgetFrame` canvas) and specific where concepts are taught (a drawn mini sectional, an airspace profile, a traffic pattern). Keep both halves.

The rules split LTF's surfaces into two classes. Reading surfaces (`FlyModePage`, `KeyNumbers`, `SpeedsPage`, every `Gauge` and `Tape`, the debrief score preview) get maximum data-ink and nothing decorative (VIZ-030, VIZ-032). Remembering surfaces (lesson recaps, the completion panel, the `CourseBadge` moment) may carry a single related picture, but only as an experiment with a delayed check (VIZ-033). The same learner, same lesson, can be asked a week later what the recap showed.

The inconsistency to fix is VIZ-035: one quantity, two encodings, ring on the curriculum map and bar on the dashboard. Choose the bar, since it also serves comparison (VIZ-020), or confine the ring to a single-card glyph and say so in its doc comment.

## Color in data graphics

### Three kinds of color scale

The first color decision in a chart is not which colors but which kind of scale. Harrower and Brewer's ColorBrewer tool, built on Brewer's cartographic research, sorts schemes by the nature of the data [@harrower2003colorbrewer]. Sequential schemes suit ordered data from low to high, with lightness steps dominating: light for low values, dark for high. Diverging schemes give equal weight to a critical middle value and to both extremes, with the middle light and the extremes in dark contrasting hues; they work when the midpoint means something (a mean, a median, zero, a target). Qualitative schemes are for categories: hue carries the distinction, lightness varies only subtly, and no order is implied. The tool also filters schemes by end use (colorblind safe, print friendly, photocopy safe). Its palettes were hand-selected by experts rather than generated by a formula, and their wide adoption in software libraries is adoption, not validation.

The three kinds line up with the channel theory of earlier chapters. Sequential scales use lightness, an ordered channel, for ordered data. Qualitative scales use hue, an identity channel, for categories, which is where Mackinlay ranks hue second only to position [@mackinlay1986automating]. Diverging scales combine both: lightness for distance from the center and hue for the side. Bertin's rule that an order is not perceptible through an unordered variable explains why a qualitative palette applied to an ordered metric hides the order [@bertin2010semiology].

::: {.rule #VIZ-037 grade="C"}
**Classify every color scale as sequential, diverging or qualitative before choosing a single color.** ColorBrewer's taxonomy ties scheme type to the nature of the data [@harrower2003colorbrewer], and the channel rankings put lightness on ordered data and hue on categories [@mackinlay1986automating; @bertin2010semiology]. Expert-built tool; no controlled test of its palettes against alternatives.

*In LTF:* a deviation from a target is diverging (centered on the target), a score or time is sequential, a phase of flight or challenge type is qualitative. The current tokens offer only one data hue (`accent-line`); build the three scale kinds as tokens before the first multi-series chart.
:::

### The rainbow problem

Borland and Taylor's "Rainbow color map (still) considered harmful" argues that the spectral sweep through violet, blue, cyan, green, yellow, orange and red is rarely the best choice for continuous data [@borland2007rainbow]. In their phrase, its "characteristics of confusing the viewer, obscuring the data and actively misleading interpretation make it a poor choice for visualization". The three standard critiques are that its hues have no perceptual order; that its luminance varies without control, which distorts the shapes viewers infer from the data (shape from shading depends on luminance); and that it partitions data into colored bands that create boundaries not in the data. A survey summary attributes to them the finding that about half (51 percent) of pseudocoloring papers in IEEE Visualization proceedings from 2001 to 2005 used the rainbow. The piece is a viewpoint, not an experiment.

The mechanisms are now well described. The classic rainbow, an interpolation in RGB, is extremely nonuniform in how much data it communicates at different points, especially between cyan and green, and feature-resolving power depends mostly on the lightness gradient, so flat spots in the luminance profile hide small features [@borland2007rainbow]. Full rainbows are also very hard to make accessible to people with severe color blindness. Franconeri and colleagues add the perceptual consequence for readers: mapping continuous numbers to a spectrum of hues exaggerates differences that straddle hue boundaries [@franconeri2021science].

The position has been qualified. In 2023 Ware, Stone and Szafir, each of whom had written against rainbows, replied in the same magazine that the experimental evidence on the critique of Borland and Taylor [@borland2007rainbow] is mixed: rainbow maps have repeatedly been the most accurate in studies where a value must be read with a key, may draw attention to global structure, and their faults can be mitigated by designed variants such as Turbo; they also cite work finding that well-designed multi-hue maps can raise accuracy over single-hue ones. They do not defend the classic RGB rainbow. The practical reading: avoid the classic rainbow, prefer a perceptually designed map, and remember that a key or direct labels matter more than the hue sequence when values must be read.

::: {.rule #VIZ-038 grade="B"}
**Do not use a classic rainbow or jet gradient for a continuous quantity; use a single-hue ramp with monotonic lightness or a perceptually designed multi-hue map.** The rainbow lacks perceptual order, varies uncontrollably in luminance and creates false boundaries [@borland2007rainbow]; hue boundaries exaggerate differences that straddle them [@franconeri2021science]. Later experiments are mixed on designed rainbows, which is why the rule bans the classic map, not every multi-hue scale.

*In LTF:* a heat map of how closely a learner held a value over time, or a map of wind strength, uses a lightness ramp built from the accent hue, or a designed map such as Viridis, never a spectral sweep. When exact values matter, add labels or numbers.
:::

::: {.rule #VIZ-039 grade="C"}
**Encode ordered ratings with ordered lightness, not with a set of different hues.** Mackinlay ranks saturation after position for ordinal data and hue far lower for order [@mackinlay1986automating]; Bertin's rule is that hue cannot make an order perceptible [@bertin2010semiology]. Reasoned rankings, not measured ones.

*In LTF:* difficulty uses filled versus empty discs (`bg-ink` against `bg-line-strong`), an ordered contrast; keep it. If a future rating scale needs color, step lightness within one hue.
:::

### Categories, color vision and the word beside the color

Okabe and Ito, two scientists who are themselves strong protanopes, wrote the most widely used guide to color-blind-safe figures [@okabe2008color]. Their principles: choose schemes identifiable by all types of color vision; do not rely on color alone; state color names where communication depends on them; and aim for attractive design. Their page gives red-green color blindness as affecting roughly 8 percent of Caucasian males, 5 percent of Asian males and 4 percent of African males, with tritanopia very rare; Few gives a rounder figure of about 10 percent of males and 1 percent of females when he warns against red, yellow and green status codes [@few2006information]. The specific rules are concrete: avoid pure red on green or on dark backgrounds (dark red can look black to protanopes); use vermilion or a light red instead; avoid colors between yellow and green; use strong lightness or saturation differences when pairing two warm or two cool colors; and combine color with line style, symbols and hatching, with labels placed directly on the graph rather than in a separate key [@okabe2008color]. Simulators show only an approximation and should not stand in for a color-blind reviewer.

Franconeri and colleagues give the paired-color version: for color-blind viewers, pair red with blue rather than with green [@franconeri2021science]. WCAG 2.2 makes the core rule a requirement at Level A (1.4.1 Use of Color): color is not the only visual means of conveying information, indicating an action, prompting a response or distinguishing a visual element [@w3c2024wcag]. At Level AA (1.4.11 Non-text Contrast), parts of graphics needed to understand the content need at least 3:1 contrast against adjacent colors.

How many categorical hues can be told apart? Healey cites a search experiment in which viewers could rapidly choose among up to seven isoluminant colors [@healey2012attention]. The ColorBrewer notes say nothing about a limit, and its qualitative schemes run up to 12 classes [@harrower2003colorbrewer]. With direct labels, fewer is safer.

::: {.rule #VIZ-040 grade="C"}
**Never let color alone carry a status, a category or a value; pair it with a word, a shape, a position or a line style.** WCAG 2.2 Success Criterion 1.4.1 requires it at Level A [@w3c2024wcag]; Okabe and Ito make it their second principle [@okabe2008color]; Few warns against red, yellow and green alone [@few2006information]. A standard and craft consensus, with population prevalence figures behind it.

*In LTF:* the existing rule ("color is never alone") is right and is honored by `Badge`, `TierBadge`, the status icons and the `AirspeedArcs` legend ("White: flaps", "Green: normal" and so on). Extend it to every chart: series get direct labels or different marks, not only different hues.
:::

::: {.rule #VIZ-041 grade="C"}
**Pair opposites as red and blue (or vermilion and blue), not red and green, and avoid pure red on dark grounds.** Franconeri and colleagues recommend red with blue for color-blind viewers [@franconeri2021science]; Okabe and Ito warn that dark red can look black to protanopes and advise vermilion or light red [@okabe2008color].

*In LTF:* a diverging scale for deviation (too slow on one side, too fast on the other) uses two hues a red-green dichromat can separate. In Night, `warn` (#ff8880) is already a light red, which is the right direction for Fly mode's dark layout.
:::

::: {.rule #VIZ-042 grade="C"}
**Give every data mark at least 3:1 contrast against what it sits on, in both themes, and check ramps at their dark and light ends.** WCAG 2.2 1.4.11 sets 3:1 for parts of graphics needed to understand content [@w3c2024wcag]. A sequential ramp that ends near black disappears on a dark background, and one that starts near white disappears on a light one [@borland2007rainbow]. A standard threshold; the ramp point is a design inference.

*In LTF:* a check made for this book (WCAG formula on the token hex values) puts the `ProgressBar` fill (`accent-line` #009ca5) against its track (`surface-sunken` #efeeec) at about 2.9:1 in Day, just under 3:1; in Night (#00c3cb on #0f0e0d) it is far above. The bar's printed value text carries the information, so this is a margin issue rather than a failure, but the Day fill should move toward `accent` (#00757c) or the track lighten. Gridlines (`line` on `surface`, about 1.3:1) are deliberately faint and are not content.
:::

### Spend saturation on the one thing

Few's twelfth pitfall is misusing or overusing color, and his advice is to keep most of a display in neutral colors and reserve color for highlighting [@few2006information]. The learning-science evidence supports cueing in the same spirit: Schneider and colleagues' meta-analysis of signaling (highlighting, arrows, colored key words) across 103 studies with 12,201 participants found an average effect of g+ = 0.53 for retention and g+ = 0.33 for transfer [@schneider2018meta]. A cue helps when it points at what matters; when everything is colored, nothing is cued. Franconeri and colleagues add one perceptual trap to avoid: do not plot intensities on intensities, because contrast illusions make the same shade look different on different backgrounds [@franconeri2021science].

::: {.rule #VIZ-043 grade="B"}
**Keep a chart neutral and give saturated color only to the mark the caption is about.** Few advises neutral displays with color reserved for highlighting [@few2006information]; signaling has a moderate pooled effect on retention and a smaller one on transfer [@schneider2018meta]. The meta-analysis is about learning materials in general, not charts specifically.

*In LTF:* in an attempt history, past attempts are `ink-3` dots and the current attempt is the one `accent` dot; the reference line for the best is `line-strong`. This matches the product's existing "one saturated non-status color" rule for page UI.
:::

::: {.rule #VIZ-044 grade="B"}
**Do not encode a value as a shade placed on a background that itself varies in shade.** Franconeri and colleagues list "do not plot intensities on intensities" among their key guidelines, because contrast illusions shift perceived lightness [@franconeri2021science].

*In LTF:* no tinted cells inside tinted cards (for example a shaded score cell inside an `accent-tint` current-module card). Put shaded marks on `surface` or `canvas`, which are flat.
:::

### What this means for Learn to Fly

LTF has two color systems, and the data rules apply differently to each. The fixed instrument tokens (`arc-white`, `arc-green`, `arc-yellow`, `arc-red`, `display-magenta`, `display-cyan`) reproduce real instrument conventions and stay constant across Day and Night; they are governed by the instruments they imitate (VIZ-013), and `AirspeedArcs` correctly backs each color with a word in its legend and the flags above the band. The page tokens (`accent`, `accent-line`, `go`, `caution`, `warn`, the tier colors) are where chart color will come from.

Three changes follow. First, define data-scale tokens before the first multi-series chart: a sequential lightness ramp on the accent hue, a diverging pair that a red-green dichromat can separate around a neutral center, and a short qualitative set for categories (VIZ-037, VIZ-041), each checked at 3:1 against `surface` in both themes (VIZ-042). Second, fix the Day `ProgressBar` fill margin noted under VIZ-042. Third, keep the tier rule exactly as it is: the gold and bronze tokens are close in lightness in Day (a check here gives about 1.2:1 between #906200 and #8c5331), so the word "Gold", "Silver" or "Bronze" that `TierBadge` always prints is what separates them for many viewers, and it must never be dropped to save space (VIZ-040).

## Labels, annotation, gridlines and size

### Name what is shown, then say what to see

Bertin gives the title and legend two separate jobs [@bertin2010semiology]. External identification tells the reader the invariant and the components: what this is a picture of, and along which dimensions. Internal identification tells the reader which visual variable corresponds to which component: what the color means, what the height means. A drawing cannot supply either on its own. A title such as "Your flights" fails external identification; "Altitude (feet MSL) by time, three attempts" passes it. Tufte's second integrity principle, that labeling be clear, detailed and thorough enough to defeat distortion and ambiguity, is the same demand [@tufte1983visual]. Wainer's tenth rule, mocking the opposite, is to label "illegibly, incompletely, incorrectly, and ambiguously" [@wainer1984display].

Franconeri and colleagues go one step further: integrate text into the graphic as annotation, convert legends into direct labels, and use grouping cues, annotation and highlighting to narrow the viewer to the single most important comparison [@franconeri2021science]. Their reasoning is the working-memory argument of the first chapter. A legend sends the eye away from the data to decode a key and back again, holding the mapping in memory on the way. A direct label sits on the mark. An annotation ("your best", "limit") tells the viewer which of many possible comparisons the designer meant. Okabe and Ito make the direct-label recommendation for a different reason: it lets viewers with color vision deficiency identify series without matching hues to a key [@okabe2008color].

Signaling research supports the annotation half from the learning side. Across 103 studies, cues that tell learners what to attend to (highlighting, arrows, colored key words, headings) had a moderate pooled effect on retention and a smaller one on transfer [@schneider2018meta]. The same review's boundary condition, drawn from Harp and Mayer, is that signaling did not remove the harm of irrelevant material: a cue cannot compensate for clutter.

::: {.rule #VIZ-045 grade="B"}
**Label series and reference lines directly on the chart; use a separate legend only when direct labels cannot fit.** Franconeri and colleagues recommend converting legends to direct labels [@franconeri2021science]; Okabe and Ito recommend it for color-blind readers [@okabe2008color]. A legend costs an eye movement and a memory load per lookup.

*In LTF:* the load-factor graph labels its limit line in place ("limit load" beside the dashed `stroke-warn` line), and `AirspeedArcs` labels each V-speed flag directly. Follow both. In a future attempt history, write "Best" on the best line and "This attempt" beside the current dot.
:::

::: {.rule #VIZ-046 grade="B"}
**Annotate the one comparison the chart exists for, in words, on or beside the chart.** Franconeri and colleagues advise annotation and highlighting to narrow attention to the most important comparison [@franconeri2021science], and signaling improves retention moderately [@schneider2018meta]. Signals cannot rescue irrelevant content, so cut first and annotate second.

*In LTF:* a chart's caption or a `text-sm text-ink-2` line under it reads like a finding ("Your last three attempts are above your first"), not a description of the axes. In widgets, the `Label` primitive with its surface halo is the annotation tool.
:::

::: {.rule #VIZ-047 grade="C"}
**Title every chart with what it shows and in what units, and make every axis carry its unit.** Bertin's external and internal identification [@bertin2010semiology], Tufte's labeling principle [@tufte1983visual] and Wainer's satire of incomplete labels [@wainer1984display] agree. Craft consensus.

*In LTF:* the product's copy rules already require units and MSL or AGL on every altitude. A chart's axis titles follow them ("Knots, indicated", "Feet MSL"). The load-factor graph's axis titles ("Bank angle", "G") are the pattern.
:::

### Gridlines and the size of a chart

Heer and Bostock supply the only measured numbers for two routine choices [@heer2010crowdsourcing]. In their second experiment, subjects adjusted gridline transparency on scatter plots across five background intensities and four data densities. Density had a significant effect; background intensity did not. The results corroborated Stone and Bartram's recommendation of an alpha of 0.2 as a safe default. Display configuration mattered a little: greater color depth went with lighter choices, and an older display gamma with darker ones.

In their third experiment, subjects compared two marked bars in charts 40, 80, 160 or 320 pixels tall with gridlines every 10, 20, 50 or 100 units on a 0 to 100 scale [@heer2010crowdsourcing]. Charts 40 pixels tall produced significantly more error; heights from 80 up did not differ. Accuracy plateaued roughly where pixel resolution matched data resolution. Gridlines improved accuracy, with no significant difference between spacings of 10 and 20 or between 50 and 100, and error rose steeply at 40 pixels with spacing of 10 units; the authors suggest that gridlines be at least 8 pixels apart.

The authors state their limits. Crowdsourcing gave no control over display, viewing distance or lighting, so only environment-insensitive perceptual tasks suit it; the height results come from one scale and 2010-era screens; and the gridline study used light to mid-gray backgrounds only. Copy the principles (light gridlines, accuracy plateaus once pixels match data resolution, gridlines not too dense), and treat the pixel values as starting points.

::: {.rule #VIZ-048 grade="B"}
**Draw gridlines light and sparse, starting near the equivalent of 20 percent opacity, and tune them separately for the dark theme.** Heer and Bostock's crowdsourced adjustment corroborated alpha 0.2 as a safe default, with data density mattering and background intensity not [@heer2010crowdsourcing]. Tested on light and mid-gray grounds only, so Night needs its own check.

*In LTF:* the widgets use the solid `line` token for gridlines (#dfdedc on white in Day, #393836 on #1f1e1c in Night), which is already in the faint range; keep them a step lighter than axis lines and never use `line-strong` for gridlines.
:::

::: {.rule #VIZ-049 grade="B"}
**Make a chart tall enough that each data unit gets about a pixel, and no taller for accuracy's sake.** Error was higher at 40 pixels and did not improve beyond 80 pixels on a 0 to 100 scale, roughly where pixel and data resolution match [@heer2010crowdsourcing]. One experiment on one scale; copy the principle, not the number.

*In LTF:* an inline chart in a lesson or in `HistoryTab` showing scores from 0 to 100 needs a plot area of roughly 80 to 160 CSS pixels; more height adds nothing to accuracy and costs page space on a second screen.
:::

::: {.rule #VIZ-050 grade="B"}
**Keep gridlines at least about 8 pixels apart at the smallest rendered size.** Heer and Bostock found error rising steeply when short charts had dense gridlines and suggest a minimum of 8 pixels [@heer2010crowdsourcing].

*In LTF:* the load-factor graph's gridlines are 24 viewBox units apart; at the narrowest phone width (the SVG scales with `w-full`) check that they stay above 8 rendered pixels, and drop every other gridline if not.
:::

### Precision and familiarity

Two last labeling rules concern the reader, not the marks. Wainer's eleventh rule, "more is murkier", criticizes decimal places far beyond what a reader can perceive or use [@wainer1984display]. Few's third dashboard pitfall is the same: displaying excessive detail or precision, as in $3,848,305.93 where $3.8M would do [@few2006information]. Extra digits are not more honest; they are more to read, and they suggest a precision the measurement may not have.

Familiarity is the other. Franconeri and colleagues advise preferring formats familiar to the audience and respecting conventions such as up meaning more, and note that unfamiliar formats must be learned [@franconeri2021science]. Their review is aimed explicitly at viewers with low graphical literacy, numeracy or domain knowledge, which describes a beginner meeting their first aviation display. A one-line "how to read this" before a new chart format costs little and pays back every time the format reappears.

::: {.rule #VIZ-051 grade="C"}
**Round every displayed number to the precision the learner can use.** Wainer [@wainer1984display] and Few [@few2006information] both name excess precision as a common failure. Craft consensus.

*In LTF:* percentages are whole numbers (as `clampPercent` already rounds), and the dashboard's `simTime` already shows minutes under an hour and hours to one decimal above it ("1.5 h"), which is about the precision an estimate deserves. Where a value is an estimate ("Sim time (estimated)"), the label says so, as it does now.
:::

::: {.rule #VIZ-052 grade="B"}
**Introduce each chart format with one line on how to read it the first time a learner meets it.** Franconeri and colleagues advise familiar formats and note that unfamiliar ones must be learned, especially by viewers with low graphical literacy [@franconeri2021science]. The evidence is a review; the one-line remedy is an inference from it.

*In LTF:* the first lesson that uses a new widget form opens it with a sentence ("The curve shows how load grows as you bank; the dot is your current bank"), and the `WidgetFrame` "Describe this diagram" panel carries the full text description for those who cannot use the picture.
:::

### What this means for Learn to Fly

The lesson widgets already follow most of this chapter. The load-factor graph has unit-bearing axis titles, mono tick labels in `fill-ink-2`, faint 1 px `stroke-line` gridlines and a directly labeled limit line; `AirspeedArcs` labels its flags in place and backs its colored segments with a worded legend; the `Label` primitive draws text with a `--color-surface` halo (`paint-order: stroke`) so annotations stay legible over marks. `WidgetFrame`'s "Describe this diagram" panel is a text alternative and a how-to-read in one.

What to add is mostly discipline for charts not yet built. Every chart gets a title that names the invariant and units (VIZ-047), direct labels (VIZ-045) and one annotated finding (VIZ-046). Gridlines use `line`, never `line-strong` (VIZ-048). Plot areas for 0–100 scores sit around 80 to 160 px tall (VIZ-049). Put these defaults into the shared chart primitive proposed in the chapter on choosing the form, so that individual pages cannot drift.

One check to run now: the load-factor graph scales with its container, so confirm on a 320 px wide phone that its gridlines remain at least 8 rendered pixels apart (VIZ-050) and its 12 px tick labels have not shrunk below legibility. Typography limits for small text are covered in Part IV, Typography on Screens.

## Glanceable displays: dashboards and Fly mode

### Few's definition and what follows from it

Few defines a dashboard as "a visual display of the most important information needed to achieve one or more objectives, consolidated and arranged on a single screen so the information can be monitored at a glance" [@few2006information]. Each clause carries a design consequence. "Most important" means selection comes before layout. "Single screen" means simultaneity: the viewer sees everything at once, without scrolling or switching. "At a glance" means the display supports a three-step monitoring process: see the big picture, focus on the specific items that need attention, and drill quickly into the detail needed to act.

His 13 common pitfalls, from a 2006 white paper that previews the book, are the most concrete checklist the field has for such displays [@few2006information]: exceeding a single screen; inadequate context; excessive detail or precision; expressing measures indirectly (show the variance from target directly, often as a percentage, rather than two numbers the viewer must subtract); inappropriate media; meaningless variety; poorly designed media (bright bars, 3D, comparison bars not adjacent); inaccurate encoding; poor arrangement (the top left is prime space, related items belong together); ineffective highlighting (when everything is prominent, nothing stands out); useless decoration (styling a dashboard as a car dashboard or LED panel); misused color; and an unappealing display, by which he means not pretty touches but attractive display of the data itself. He is hostile to decorative gauges, meters and traffic lights that impress in a demonstration and are abandoned within a week.

The list is practitioner craft with worked examples, not experiment; the white paper was sponsored by a software vendor and draws its bad examples from vendor sites. Its prescriptions agree with the perceptual evidence (position over angle, accurate scales, adjacency) and no controlled test of the 13 as a set was found.

::: {.rule #VIZ-053 grade="C"}
**Fit any display meant for monitoring onto one screen without scrolling.** Few's first pitfall is exceeding a single screen, which sacrifices the simultaneity that monitoring depends on [@few2006information]. Craft authority, consistent with the slow-comparison finding that makes remembered values costly [@franconeri2021science].

*In LTF:* `FlyModePage` is the product's monitoring display. The steps, the timer and the current random-event alert must fit the viewport of the second screen the learner flies with (a phone, tablet or laptop) without scrolling for the current step.
:::

::: {.rule #VIZ-054 grade="C"}
**Show each monitored measure with its context and as a direct deviation from target, not as two numbers to subtract.** Few's second and fourth pitfalls are inadequate context and expressing measures indirectly [@few2006information]. Comparisons are slow, so a display that hands the viewer a computed difference saves the slowest step [@franconeri2021science].

*In LTF:* on `DashboardPage`, "Core lessons completed" already reads "n of n lessons" (context included). In any future debrief view of a held value, show "10 over target" or a marker on a band centered on the target, rather than the value and the target side by side.
:::

::: {.rule #VIZ-055 grade="C"}
**Put the item that needs action in the most prominent position and subdue everything else, including navigation and brand.** Few names poor arrangement and ineffective highlighting as pitfalls and gives the top left as prime space [@few2006information]; Mackinlay's Importance Ordering assigns the strongest encoding to the most important information [@mackinlay1986automating].

*In LTF:* in Fly mode the current step is the largest, highest-contrast element. The `BetaBanner` is shown above Fly mode as on every page; on `FlyModeLayout` it should collapse to a single quiet line or stay dismissed, because it competes with the step for the learner's glance.
:::

::: {.rule #VIZ-056 grade="C"}
**Keep instrument simulators and analytic displays apart, and never style an analytic display as an instrument panel.** Few treats dashboard styling that imitates car dashboards or LED panels as useless decoration, while accepting a simulated control board when training in its use is the purpose [@few2006information].

*In LTF:* the `g1000-pfd` and gauge widgets live in lessons, framed by `WidgetFrame`. The dashboard, the result card and any history chart use page tokens and plain chart forms, never `bezel`, `instrument` or `display-*` colors.
:::

### Overview first, and its limits

Shneiderman's Visual Information-Seeking Mantra, "overview first, zoom and filter, then details on demand", is the most quoted sentence in interactive visualization [@shneiderman1996eyes]. He offered it explicitly as a starting point, and the paper attaches a taxonomy of seven tasks: overview (the whole collection), zoom (items of interest), filter (remove uninteresting items), details on demand (select an item and get details), relate (relationships among items), history (undo, replay and progressive refinement) and extract (save sub-collections and query parameters). He noted that most prototypes of the time failed to support history.

Craft and Cairns reviewed the literature that cites the mantra of @shneiderman1996eyes and reported that "there are no reasonably obvious studies that have validated" it. They conclude it works as inspiration and guideline for practitioners rather than as a scientifically studied approach, and that Shneiderman himself framed the ideas as descriptive rather than prescriptive, although many designers treat them as prescriptive. Munzner adopts it as a rule of thumb [@munzner2014visualization]. The evidence class is expert opinion; no experimental test of the mantra as a whole was found.

For a learner the mantra maps onto two different surfaces. On a dashboard or debrief, it is a good order: a single summary first, then filtering by module or challenge, then the numbers for one attempt on request. In Fly mode, the zoom and filter steps are a hazard: the learner is flying, and any display that requires interaction to reach the information has failed the glance test.

::: {.rule #VIZ-057 grade="C"}
**Order analytic views as overview, then filter, then details on demand, and treat that order as a starting checklist to test, not a proven law.** Shneiderman offers the mantra as a starting point [@shneiderman1996eyes], Munzner adopts it as a rule of thumb [@munzner2014visualization], and the review of its citations finds no validating studies. Beginners may need the overview explained in words before they can use it.

*In LTF:* `DashboardPage` opens with the Continue card and course-level `ProgressBar`s (overview), then per-module bars, then "Recent attempts" with a link to each history (details). Keep that order. In Fly mode, show the overview and one detail only, and never require a tap to reveal the current step.
:::

### Glances, change blindness and noisy streams

A learner beside a simulator looks away from the screen constantly. Healey and Enns review the change-blindness literature: changes that do not alter the gist of a scene are the ones most likely to be missed, and large multi-monitor arrangements make this worse than small screens [@healey2012attention]. A value or state that changes while the learner looks at the sim will often not be noticed on return unless the change draws attention or leaves a persistent mark.

Ensemble perception raises the opposite problem for streams of values. Sensitivity to the mean of a set falls as its variance rises [@whitney2018ensemble]. A jittery readout makes the underlying level harder to see, which argues for smoothing or stabilizing any live display meant to show a trend, while keeping the raw value available for exact reading.

Tversky and colleagues' review of animation adds a specific warning for glanceable displays: animations that play once and disappear are a poor carrier of information, and learners under load notice salient motion and miss the thematic point [@tversky2002animation]. Their conditions for animation that works (slow, clear, schematic, annotated, under learner control) are all hard to meet in a glance.

::: {.rule #VIZ-058 grade="B"}
**Signal a state change that may happen while the learner looks away with both a brief transient and a lasting visible marker.** Change blindness is widely replicated, and changes that do not alter a scene's gist are the likeliest to be missed [@healey2012attention]. A transient alone can be missed during a glance away; a lasting marker survives it.

*In LTF:* the Fly mode random-event alert (`border-4 border-warn bg-warn-tint`, a pulse and a beep) combines transient and lasting cues and is right. A completed step's lasting marker is its `border-go bg-go-tint` row and checked box; keep it visible until the learner moves on.
:::

::: {.rule #VIZ-059 grade="B"}
**Show states, not processes, on any display read in glances; keep animated explanations in the lesson where they can be paused.** Tversky and colleagues find animation rarely beats informationally equivalent static graphics and warn that one-time motion is missed under load [@tversky2002animation]; Heer and Robertson's benefits for animated transitions were measured in a study task, not in glances [@heer2007animated].

*In LTF:* `FlyPanel` uses no transitions on its step rows; the only motion is the random-event alert's `warning-pulse`, a lasting ring rather than a moving explanation. Keep it that way. The `motion-safe:` transitions inside lesson widgets (`PitchPower`, `TurnCoordinator`) are acceptable because the learner is looking at them; none belongs in `FlyModePage`.
:::

::: {.rule #VIZ-060 grade="B"}
**Stabilize any live value meant to show a level or trend, and show the exact value separately.** Sensitivity to the mean of a set declines as its variance grows [@whitney2018ensemble], so jitter hides the level the learner is meant to read.

*In LTF:* widgets that animate a reading (`vor-cdi` and `traffic-pattern` use `requestAnimationFrame`) should ease toward a new value rather than flicker, and print the current value as a mono readout beside the moving mark.
:::

### Instruments that move

Where an LTF widget animates an instrument, the question is whose point of view its motion shows. Roscoe's paper on airborne displays is usually cited for two display principles: pictorial realism (a display should resemble what it represents, as an attitude indicator's horizon line resembles the horizon seen from the cockpit) and the moving part (the element that moves on the display should correspond to the element that moves in the user's mental model) [@roscoe1968airborne]. The attribution is not settled (some sources credit the moving-part principle to later work by Johnson and Roscoe), the paper was not read for this book, and the two principles can recommend opposite attitude-indicator formats. The empirical record on which format is better is mixed. The lesson for a product is to match what the simulator actually shows, and to test with first-time learners where realism and intuition conflict.

::: {.rule #VIZ-061 grade="C"}
**Make every animated instrument move in the same direction and against the same reference as the instrument in the simulator.** Pictorial realism and the moving-part principle can conflict, and the evidence on which serves pilots better is mixed [@roscoe1968airborne]; a learner who learns a motion on the page must not unlearn it in the sim. The direction of motion is aircraft and sim knowledge, to be checked in the simulator, not taken from this rule.

*In LTF:* add "which way does it move, and against what" to the acceptance check for every widget in `features/widgets/`, and record the check in the widget's verification notes alongside the other in-sim checks.
:::

### What this means for Learn to Fly

`FlyModePage` is LTF's dashboard in Few's sense, even though it holds no sim data (the product does not read from the simulator; the learner self-scores). Its contents (the steps, the optional `Stopwatch` with `text-5xl` mono digits, the random-event alert) are already chosen for glances, and its dark, large-type layout supports them. Three changes follow from this chapter. Make sure the current step never scrolls out of view on a phone (VIZ-053). Quiet the `BetaBanner` in `FlyModeLayout` (VIZ-055). Keep transitions out of Fly mode entirely (VIZ-059), which the global reduced-motion rule does for some learners and this rule extends to all.

`DashboardPage` follows overview-filter-details already (VIZ-057). Its weak point is context: the "Stats" tiles show bare counts (VIZ-054, and VIZ-028 in the chapter on integrity). The `ChallengesPage` filter card, five `Select`s with a live "Showing n challenges of n" status, is a dynamic query in Shneiderman's sense, and its count line is the overview; keep both.

For the widgets, VIZ-060 and VIZ-061 are acceptance criteria: stable readouts beside moving marks, and motion that matches the sim, checked in the sim.

## Uncertainty, risk and variability

### Why uncertainty is hard to show

Every result a learner gets is a sample. One landing scored Silver; the next might score Bronze or Gold with nothing changed but the wind and the learner's attention. A display that shows only the latest number, or only the best, hides that spread. A display that shows the spread badly (with a notation the learner cannot read) can be worse than none.

Hullman and colleagues surveyed 86 user studies of uncertainty visualization published between 1987 and 2018, coding 372 evaluation paths [@hullman2019pursuit]. Their starting point is that evaluating such displays is harder than evaluating other charts, because people have difficulty interpreting uncertainty and because "correct" behavior is hard to define. Their findings are about the field's habits. Evaluation centers on performance and satisfaction measures that assume more predictable, statistically driven judgment than the decision-making literature supports. Where studies elicited decisions, accuracy-focused goals were about twice as common as decision-quality goals. Studies tend to confirm that a new technique "works" rather than explain why, and they compare visualizations against each other while rarely including a baseline with no uncertainty shown, or plain text. Roughly 20 percent of paths concern confidence, and the authors warn about the hard-easy effect (overconfidence on difficult tasks, underconfidence on easy ones), that confidence reports are noisy, and that subjective confidence is not a linear function of statistical confidence.

The survey also records what is known about one common display. Error bars lead to perceptual bias and to underweighting of uncertainty, and produce "within-the-bar" bias, in which outcomes inside the area of a bar are judged more likely than outcomes outside it [@hullman2019pursuit]. The survey is a coded review of methods, not a test of displays, and its conclusions about a mismatch between methods and real judgment are interpretive.

### What to show instead

Hullman, Resnick and Adar proposed hypothetical outcome plots (HOPs): an animation that shows a finite set of individual draws from a distribution, one per frame, so that viewers can infer its properties by counting and integrating rather than by decoding a statistical notation [@hullman2015hypothetical]. They tested HOPs against error bars and violin plots with 288 crowdsourced participants, 96 per display, each completing nine tasks (four about one variable, four about two, one about three), with frames advancing every 400 milliseconds and responses scored by absolute error.

For two variables (the probability that B exceeds A), HOPs had much lower error than both static displays on all four tasks; for three variables, HOPs again had lower error [@hullman2015hypothetical]. For one variable the picture reversed or blurred: estimating the mean under high variance, HOPs were significantly worse; under low variance there was no difference; on single-variable probability questions results were mixed. The static displays' failure on two-variable questions is stark: with error bars and violin plots, error was never below 36 percentage points on any task, and on one task whose correct answer was 59 percent, answers clustered near 95 percent and near 23 percent. The authors list limits: a sample possibly above average in numeracy, normal distributions only, underlying rather than sampling distributions, two static comparison displays, no reasoning reports and an unvaried frame rate.

A follow-up from the same lab by Kale, Nguyen, Kay and Hullman tested HOPs against error bars and line ensembles on judging which of two underlying trends more likely produced a noisy time series, and a summary reports more correct interpretations with HOPs for ambiguous examples [@hullman2015hypothetical]. It is an extension, not an independent replication. HOPs also have practical costs: they take time and attention, cannot be read at a glance and cannot be printed.

Franconeri and colleagues draw the practical guidance together for lay audiences [@franconeri2021science]. Avoid error bars, which can be misread as data ranges. Show examples of discrete outcomes, simultaneously or over time. For low-numeracy risk communication, use absolute rather than relative rates, frequencies ("3 out of 10") rather than percentages, and icon arrays with the same denominator. They still warn that animation in general tends to confuse, which is why a static strip of individual outcomes is often the better form of the same idea.

::: myth
**"Error bars show people how uncertain a value is."** Error bars are the default display of uncertainty in science, and designers assume readers decode them as intended. In Hullman, Resnick and Adar's experiment, error on two-variable probability questions with error bars or violin plots was never below 36 percentage points, and answers to one question split between near 95 percent and near 23 percent when the truth was 59 [@hullman2015hypothetical]. The survey literature records within-the-bar bias and underweighting of uncertainty [@hullman2019pursuit], and Franconeri and colleagues advise lay audiences to avoid error bars because they are misread as data ranges [@franconeri2021science].
:::

::: {.rule #VIZ-062 grade="B"}
**Show a learner's variability as their individual results, not as an error bar, interval or violin.** Error bars produced large errors on comparison questions and are subject to within-the-bar bias [@hullman2015hypothetical; @hullman2019pursuit]; Franconeri and colleagues recommend discrete outcomes for lay audiences [@franconeri2021science]. One main experiment plus a review; the direction is consistent.

*In LTF:* the attempt history is a strip of dots, one per attempt, not a mean with a whisker. A spread of results within one challenge is visible as the spread of the dots.
:::

::: {.rule #VIZ-063 grade="B"}
**State chances and rates as frequencies with a fixed denominator ("Gold in 3 of your last 10 attempts"), not as percentages or relative changes.** Franconeri and colleagues recommend absolute rates, frequencies and icon arrays with the same denominator for low-numeracy audiences [@franconeri2021science]; Hullman and colleagues recommend frequency framings for risk [@hullman2019pursuit].

*In LTF:* feedback copy on `ResultView`, `HistoryTab` and the dashboard speaks in counts out of a stated number of attempts. A chart percentage stays as a score; a chance of an outcome becomes a count.
:::

::: {.rule #VIZ-064 grade="C"}
**Say in words, beside any display of spread, what the spread means for the learner's next decision.** Hullman and colleagues recommend treating explanation as an end goal and note that heuristics vary in how people read uncertainty [@hullman2019pursuit]; Franconeri and colleagues advise integrating text as annotation [@franconeri2021science].

*In LTF:* under an attempt strip, one `text-sm text-ink-2` line such as "Your last five landings range from Bronze to Gold." Any advice that follows (whether to fly it again) must come from the lesson's content, not be invented by the chart.
:::

::: {.rule #VIZ-065 grade="B"}
**Use animated or ensemble outcome displays to compare two or three uncertain quantities, never to estimate one mean, and always provide a static version.** HOPs beat error bars and violins on two- and three-variable comparisons but were worse for estimating a mean under high variance [@hullman2015hypothetical]; animation generally confuses lay readers [@franconeri2021science]. One between-subjects experiment and a same-lab extension.

*In LTF:* a lesson explaining wind variability on an approach, or the scatter of touchdown points, may cycle ghosted outcomes under a play control, with a static strip of all outcomes as the default under `prefers-reduced-motion` and in print. Never in `FlyModePage`.
:::

::: {.rule #VIZ-066 grade="C"}
**Evaluate any uncertainty display by the decisions learners make with it, against a baseline with no uncertainty shown.** Hullman and colleagues find that evaluations favor accuracy over decision quality and rarely include a no-uncertainty or plain-text baseline [@hullman2019pursuit].

*In LTF:* when testing a spread display with learners, ask a decision question ("Would you move to the next lesson?") and compare against the same page showing only the latest result.
:::

::: {.rule #VIZ-067 grade="C"}
**Do not treat a learner's self-rated confidence as calibrated, and never display it as if it measured skill.** Confidence reports are noisy, show overconfidence on hard tasks and underconfidence on easy ones, and are not linear in statistical confidence [@hullman2019pursuit].

*In LTF:* the debrief is a self-scored rubric, which is a different thing from a confidence rating; keep it criterion-based ("Met", "Not met", level choices). If a "how sure are you" input is ever added to a quiz or debrief, show it beside the scored result, never in place of it, and expect beginners to be most overconfident on the hardest challenges.
:::

### What this means for Learn to Fly

LTF's challenge data are small samples per learner, and the product currently shows them as single values: a percentage and a tier on `ResultView`, a list in `HistoryTab`, the latest few in "Recent attempts". That avoids every misleading uncertainty notation, which is good, but it also hides variability that matters to a learner deciding whether a skill is reliable.

The recommended build is modest. A dot strip of attempts per challenge (one dot per attempt, the current one in `accent`, the best as a labeled line), with a frequency sentence below it (VIZ-062 to VIZ-064). No error bars, no averages with whiskers, no "confidence" numbers. If a lesson later teaches variability (wind, touchdown scatter), it may use a played sequence of outcomes as an explainer, with a static ensemble as the reduced-motion and print default (VIZ-065). The debrief's self-scoring rubric is already the right instrument; it should not be supplemented with a confidence slider that would be read as data (VIZ-067).

How much repetition a learner should do before moving on is an instructional question, covered in Part XV, Instructional Design, and Part XVI, Skill, Simulation and the Cockpit; this chapter only says how to show the evidence for that decision.
