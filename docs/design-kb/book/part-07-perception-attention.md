# Perception and Attention

This Part covers what the eye and the attentional system do with a page before the learner has read a word of it: how marks are organized into groups and objects, which items can be found at a glance and which must be hunted for, what captures attention against the learner's will, where people actually look on screens, and why large, visible things are routinely missed. The evidence is uneven, and the rules say so. The grouping principles, visual search, change blindness and inattentional blindness rest on a century of laboratory work, much of it parametric and replicated. The page-level eye-tracking findings (left and top attract attention, right rails are neglected, banners are skipped) come from a handful of academic studies and from large but thinly documented industry datasets. Saliency models and the reading of intent from gaze are where popular claims run furthest ahead of the data, and both get myth blocks.

Use the Part in three ways. When laying out a page or widget, work through the chapters on grouping (proximity, common region, similarity, emergent features) to decide what belongs together and how strongly to say so. When something must be found or noticed, a status, an alert, the next step, use the chapters on search, capture, page-level gaze and change detection. When reviewing a pull request, run the checklist in the last chapter. Learn to Fly (LTF) has an unusual viewing situation that makes these questions sharper than on most websites: a beginner glancing from a flight simulator to a second screen, with most of their capacity spent on flying. Fly mode, the challenge Fly tab and the instrument widgets are where perceptual mistakes cost the most, so they get the most attention here.

## Organization before meaning

### What Wertheimer actually claimed

The grouping "laws" begin with Wertheimer's 1923 paper, and the original says more than its textbook summaries [@wertheimer1923untersuchungen]. His claim was that we do not first see a mosaic of separate sensations and then combine them: what we see is already organized into units, and the organization follows describable factors in the stimulus. He rejected two explanations that were common at the time. Grouping is not habit or learned association, and fewer or simpler stimulus points do not automatically give simpler percepts, because simplicity is a property of wholes rather than parts. He tended to say "factors" rather than "laws", which is a better word for what he showed.

The method was demonstration. Rows of dots are drawn so the reader can see how they group, then one aspect of the row is changed and the reader sees what happens. The factors in the English translation are proximity (in a row with alternating small and large gaps, given as 3 mm and 12 mm, people see pairs separated by the large gaps, and the same holds for taps in time), similarity (elements of one color, or soft against loud beats, band together, and the degree of dissimilarity matters), direction or good continuation (a line is seen to carry on through a crossing), common fate (elements that shift together are seen as a unit), closure (self-enclosed shapes tend to be seen as wholes), good curve (a smooth continuous curve can outweigh closure) and objective set, or Einstellung, in which an ambiguous row takes the grouping suggested by the rows seen just before it [@wertheimer1923untersuchungen].

Two features of the paper matter for design and are usually lost. First, each factor is a matter of degree, and factors compete. A row can be pushed from one grouping to another by small changes, and when two factors disagree the percept is unstable. Second, the common fate section distinguishes shifts that agree with the existing grouping, which look smooth, from shifts that cut across it, which look confusing and tend to force a regrouping. That distinction anticipates most of what goes wrong when a group of interface elements is animated piecemeal.

### A century of measurement

Wagemans and colleagues wrote the standard modern review for the centenary of Wertheimer's earlier work on apparent motion [@wagemans2012century]. Their verdict is balanced. The Berlin school was right about the phenomena and weak on method: demonstrations relied on subjective report, stimuli were simple or confounded, the laws had little precision, and the list kept growing with no mechanism behind it. A century of work has since put numbers on several effects, found new principles (generalized common fate, synchrony, common region, element connectedness and uniform connectedness), and shown that organization happens at several levels of processing rather than in one early step. Reports of Gestalt psychology's death were exaggerated, but modern vision science is not a Gestalt school; it adopted the problems and kept mainstream methods.

The review is best read as a map with uneven detail. Proximity, similarity and good continuation are well measured. The synchrony literature is contested, with some effects possibly stimulus artifacts. Uniform connectedness as the entry-level step was disputed. And the field still lacks computational process models that connect the phenomena to neural mechanisms [@wagemans2012century]. The companion review on theory reaches a similar conclusion from the other side: Gestalt phenomena are real and reliable, but none of the modern frameworks (Garner-style dimensional analysis, structural information theory, Bayesian models, dynamical systems) has explained them entirely, and the old argument between simplicity (Prägnanz) and likelihood is unresolved [@wagemans2012conceptual].

For a design rule, this means a grouping principle predicts what will usually happen in a clean layout. It does not guarantee the outcome, and its strength depends on what else is on the page.

::: myth
**"The Gestalt laws are laws of perception: apply them and the grouping follows."** Wertheimer himself called them factors and showed them competing and trading off by degree [@wertheimer1923untersuchungen]. The modern review finds the classic demonstrations overstated some factors (convexity and symmetry in figure-ground) and that controlled effect sizes are smaller than textbook figures suggest; the principles combine, compete and can be overridden [@wagemans2012century]. They are strong defaults, not laws.
:::

::: {.rule #PER-001 grade="B"}
**Make every grouping cue on a component say the same thing.** Grouping factors are graded and compete; when spacing, enclosure and style agree the grouping is strong, and when one contradicts another the result is ambiguous [@wertheimer1923untersuchungen; @wagemans2012century]. Proximity and similarity have been shown to combine additively in brief presentations, so agreement adds up and conflict subtracts [@wagemans2012century]. The rule applies to any group a learner must read as one thing; it cannot rescue a grouping that is wrong in meaning.

*In LTF:* a challenge card on `ChallengesPage` puts code, `TypeIcon`, title and a meta row inside one bordered region; the meta row's internal gaps must be smaller than the gap to the title, and its type style must differ from the title's, so spacing, region and style all point the same way. Review any component where a border groups items that spacing separates, or the reverse.
:::

### Wholes, simplicity and accidental structure

The theory review puts holism at the center: Koffka's version is that the whole is something other than the sum of its parts, because part-whole relations carry meaning even where summing does not [@wagemans2012conceptual]. The practical consequences, emergent features and configural superiority, get their own chapter below. What belongs here is the simplicity principle. Structural information theory holds that percepts correspond to the simplest descriptive code and limits visual regularities to repetition, mirror or broken symmetry, and alternation; Bayesian accounts treat good continuation as a likelihood over deviations from collinearity and argue that Prägnanz corresponds to Bayes' rule, with the choice of priors as the open problem [@wagemans2012conceptual]. Whichever framing is right, the eye resolves a display toward its simplest structure, and that structure can include alignments and shapes the designer never intended.

Arnheim's craft treatise states the same principle for composition: a stimulus pattern tends to be seen so that the resulting structure is as simple as the conditions permit, with simplicity judged by structural features such as distance and angle rather than by the number of elements [@arnheim1974art]. He adds a warning that matters for icons and diagrams. A discrepancy between form and meaning interferes with simplicity: when a decorative shape has the structural clarity of a meaningful one, the viewer reads structure where there is none.

::: {.rule #PER-002 grade="C"}
**Remove decorative marks that create alignments, shapes or symmetries a learner could read as meaningful.** The visual system resolves displays toward their simplest structure, and accidental regularities (two unrelated edges aligning, a flourish closing a shape) are picked up as structure [@wagemans2012conceptual; @arnheim1974art]. This is craft reasoning from a principle, not a tested design rule; it applies most to diagrams and widgets, where every mark is supposed to mean something.

*In LTF:* in the SVG widgets under `src/features/widgets/`, a decorative bezel line or tick that happens to align with a needle position reads as a reference mark. In `g1000-pfd` and `airspeed-indicator`, every line should either encode something or be visibly subordinate (thinner, lower contrast) to the ones that do.
:::

### Levels of explanation: what a display is for

Marr's framework supplies a discipline that design reviews often skip [@marr2010vision]. He argued that any information-processing system can be analyzed at three levels: the computational level (what problem is solved and why the solution suits the world), the representational and algorithmic level (which representations and processes carry it out) and the implementational level (how it is physically realized). He held that the computational level is the most important and the most neglected. His three-stage scheme for vision itself (primal sketch, 2.5D sketch, 3D model) is less accepted today, and critics argue that the levels are not independent and that the framework favors the computational level unduly; Gibson's school rejected its premise that perception needs internal representations of this kind [@marr2010vision; @gibson2015ecological]. As a way of organizing design questions, though, the three levels hold up.

Applied to an LTF widget, the computational question is what the learner must conclude about the aircraft or the procedure, and why. The representational question is what display form makes that conclusion easy to extract: a dial, a number, a band, a picture. The implementation is the SVG and the tokens. A diagram that cannot state what the learner should conclude from it has not been defined at the first level yet, and no amount of polish at the third will fix it.

::: {.rule #PER-003 grade="C"}
**Before drawing a widget or diagram, write one sentence stating what the learner must conclude from it and why.** Marr's computational level asks what a system computes and why that computation suits the world; design reviews that start at the pixels skip it [@marr2010vision]. The sentence becomes the test for every later choice: a mark that does not serve the stated conclusion is a candidate for removal.

*In LTF:* each widget's `WidgetFrame` already carries a "Describe this diagram" disclosure. Its first sentence should be that computational statement ("This shows whether you are inside the band where ..."), written before the SVG, and the widget review should check the drawing against it.
:::

### Affordance, signifier and what a control looks like it does

Gibson's ecological approach is the other large framework [@gibson2015ecological]. Vision, for Gibson, is an animal moving through a structured environment, and the light reflected from surfaces carries information that specifies layout and events directly. His most influential idea is the affordance: what the environment offers the animal, for good or ill. A nearly horizontal, flat, rigid, extended surface affords support; if it is also knee-high, it affords sitting. Affordances are relative to the perceiver, and in Gibson's words "knee-high for a child is not the same as knee-high for an adult" [@gibson2015ecological]. The claim that meaning and value are perceived directly is contested, and the term has been widely misused in design.

Norman, who brought the word into design, later separated real from perceived affordances and added the signifier, defined in his preface as "signs, perceptible signals of what can be done" [@norman2013design]. On a screen the designer controls only what is perceived. The useful discipline for LTF is to say which sense is meant: Gibson's relation between learner and environment (what a beginner can actually do with a control, given what they know), or Norman's signifier (the visible cue that says a thing can be dragged, pressed or opened).

Two Gibsonian points survive the controversy and apply directly. First, flight itself is a task of ecological information (horizon angle, ground texture, optic flow on approach), which is why faithful depictions of the outside view and of instruments matter more in LTF than skeuomorphism would on a generic site. Second, because affordances are relative to the perceiver, a beginner does not yet see what an experienced pilot sees in a panel. Lessons have to teach what to look at before asking what to do [@gibson2015ecological].

::: {.rule #PER-004 grade="C"}
**Give every interactive element a visible signifier of its action, and make read-only displays look unmistakably read-only.** On screens only perceived affordances exist, so a control that does not look operable will not be operated, and a gauge that looks like a slider will be dragged [@norman2013design; @gibson2015ecological]. This is expert consensus with no single experiment behind it.

*In LTF:* widget sliders are native range inputs with `accent-accent`, which carry their own signifiers. Hotspots in `sectional-legend/Chart.tsx` and any draggable needle need a visible cue (a handle, a cursor change and a label such as "Drag the needle") while the read-only gauges drawn by `Gauge` should have no handle-like shapes.
:::

::: {.rule #PER-005 grade="C"}
**When a lesson introduces a visual concept, show the display and ask what the learner sees before naming the principle.** Wertheimer's method was to show and then ask; it works because organization is seen before it is explained [@wertheimer1923untersuchungen]. Because affordances depend on the perceiver, a beginner's first look is also diagnostic of what they do not yet see [@gibson2015ecological]. This is a teaching inference from perception research, not a tested instructional rule; the instructional design Part covers the evidence on sequencing.

*In LTF:* a lesson on the attitude indicator can open with the `g1000-pfd` widget in Explore mode and a `QuizBlock` asking "Which way is the airplane banked?" before the explanation, rather than a paragraph followed by the picture.
:::

### Arnheim's vocabulary of weight

Arnheim's treatise is phenomenological craft, not experiment, and some of its figure-ground claims fared poorly when later tested [@arnheim1974art; @wagemans2012century]. Its value is a vocabulary for discussing layout beyond grouping. A dark disc placed off-center on a white square seems to strain toward or away from certain points, because the square has an undrawn structural skeleton of center, axes and diagonals; equilibrium comes when the pulls compensate, and "dead center is not dead" [@arnheim1974art]. Visual weight grows with position on that skeleton, with size, with color (he gives red as heavier than blue and bright as heavier than dark), with isolation, with regular compact shape, with verticality and with intrinsic interest.

For a two-theme product, the color factor has a direct consequence. A bright, saturated accent on a dark ground carries more weight than the same role on white, so a layout balanced in Day can tip in Night.

::: {.rule #PER-006 grade="C"}
**Review page balance in both themes, and rebalance accent use when the theme changes.** Visual weight increases with brightness, saturation, size and isolation [@arnheim1974art]; in a dark theme the accent becomes the brightest saturated element and its weight rises. This is a craft rule from a theory treatise, untested experimentally; use it as a review prompt, not a measurement.

*In LTF:* Night `accent` (#56d3da) and `accent-line` (#00c3cb) are bright on `canvas` #141412, so the header's teal active underline, the `LessonPath` connector and accent-tinted cards weigh more at night. Check `FlyModeLayout`, which forces the dark theme unless the learner chose light, for accent elements that pull the eye from the steps.
:::

### What this means for Learn to Fly

Keep the parts of LTF that already behave like good Gestalt design. The `LessonPath` uses a continuous connector with pins on it, so the course reads as one line; the `Callout` puts type color only on the icon and title with no left stripe, so the box reads as one region; the `Card` comment says state is carried by badge, eyebrow and fill rather than a colored edge. These are coherent choices.

Change three things. First, adopt PER-003 as a widget-authoring step: the first sentence of each "Describe this diagram" disclosure states what the learner must conclude, and widget review checks the drawing against it. Second, audit components for conflicting cues under PER-001, starting with the hand-inlined `rounded-lg border border-line bg-surface p-4 shadow-1` blocks on lesson, challenge and dashboard pages, where spacing inside the box is often the same as spacing between boxes. Third, add a Night review pass to the design checklist under PER-006, since `FlyModePage` is dark by default and the accent's weight rises there.

Build one thing: a short glossary note in the design documentation that fixes LTF's use of "affordance" (Norman's perceived affordance and signifier) so that design discussions and PR reviews mean the same thing by it (PER-004).

## Proximity and spacing

### The measured effect

Proximity is the oldest grouping factor and the best measured. Wertheimer showed it with dots and with taps in time [@wertheimer1923untersuchungen]. The quantitative work came much later, with dot lattices: regular grids in which the distance between neighbors along one axis can be varied against the distance along another, so that the observer's reported grouping can be plotted against the ratio of the two distances. Kubovy and Wagemans, and Kubovy, Holcombe and Wagemans, found that when the ratio of the two competing inter-dot distances exceeds about 1.5, grouping along the longer axis is almost never seen [@wagemans2012century]. The grouping log-odds fall on a single attraction function of relative distance, which they called the Pure Distance law. Oyama had earlier fitted a power law to proximity grouping with an exponent of about 2.89. Kubovy and van den Berg showed with 300 ms presentations that proximity and similarity combine additively [@wagemans2012century].

Three points make this usable. The quantity that matters is a ratio of distances, not a number of pixels. The effect is steep: the probability of the competing grouping falls off fast as the ratio grows. And it holds in brief presentations, which is the regime of a glance at a second screen. The limits are equally important: these are dot lattices, regular and featureless, and the review does not report the ratio for text, icons or mixed interface elements. Treat 1.5 as the floor below which grouping by spacing is unreliable, not as a target.

### Proximity in natural images

Elder and Goldberg asked a different question: not how strong a cue is in the laboratory, but how much information it carries in the real world [@elder2002ecological]. People traced the contours they saw in natural photographs; the traced curves were mapped to sequences of tangent elements; and the relations between successive elements on traced curves were compared with relations between random pairs. The difference gives the likelihood distributions an optimal model of contour grouping would need.

Their abstract reports four results. The cues of proximity, good continuation and luminance similarity are approximately uncorrelated when defined appropriately, which supports a factorial model in which the evidence from each cue can be multiplied. There is moderate image-to-image variation, which argues for general probabilistic models. The cues differ greatly in power, with proximity by far the strongest. And proximity follows a scale-invariant power law in close agreement with earlier psychophysics [@elder2002ecological]. The review adds the numbers: Elder and Goldberg's ecological exponent of about 2.92 sits close to Oyama's perceptual 2.89, whereas Sigman and colleagues had estimated a far weaker 0.6, with measurements not restricted to the same contour [@wagemans2012century].

The study concerns contours in photographs, not text or interface elements, and it relies on human tracing as ground truth. It does not test common region, closure or symmetry. Its contribution to interface design is a ranking, with an argument behind it: when cues compete, spacing carries most of the grouping information, and the closest neighbor will usually be read as the partner. Scale invariance adds that the same ratios should hold when a layout is zoomed, resized or viewed from further away.

::: {.rule #PER-007 grade="B"}
**Make the gap between groups at least 1.5 times the gap within them, and in text-heavy layouts aim well above that.** In dot lattices, once one inter-element distance is more than about 1.5 times the competing one, grouping along the longer distance almost never occurs, and grouping strength falls steeply with the ratio [@wagemans2012century]. The ratio, not the absolute size, carries the effect [@elder2002ecological]. The figure comes from regular dot arrays; for interface elements with other cues present, treat it as the minimum below which spacing cannot be trusted to group.

*In LTF:* `MarkdownContent` gives block headings `mt-12 mb-3` (48 px above, 12 px below), a ratio of four, which is safe. Prose h3 is `mt-6 mb-2` (24 over 8). Check denser components: the landing stats `dl` puts value and label in one stat with `gap-6` between stats; the challenge card meta row and the `BriefTab` sim-setup `dl` rows should be measured the same way.
:::

::: {.rule #PER-008 grade="B"}
**Place every label measurably closer to the thing it names than to any neighbor, whatever its styling.** Proximity is by far the most informative grouping cue in natural images, and when a label sits between two candidates it will be read as belonging to the nearer one even if its style matches the other [@elder2002ecological]. The evidence is from contours in photographs and dot lattices; its transfer to labels is a strong inference rather than a direct test.

*In LTF:* in `FormField` the label sits above the control, the hint below the label and the error below the control; the label-to-control gap must be smaller than the gap to the previous field. In widgets, the `Label` primitive in `shared/svg.tsx` should be positioned nearer its tick or needle than to the next one, which matters most on the crowded dial of `airspeed-indicator`.
:::

::: {.rule #PER-009 grade="B"}
**Define spacing as a small set of ratios between inner and outer gaps, and keep those ratios when components scale.** Proximity grouping follows a scale-invariant power law of relative distance, so the same layout should group the same way when zoomed or resized, provided the ratios hold [@elder2002ecological; @wagemans2012century]. A spacing system with near-equal steps (12, 14, 16) produces near-equal gaps that do not separate anything.

*In LTF:* Tailwind's default spacing scale is not cleared in `tokens.css`, so any multiple of 4 px is available and nothing enforces ratios. Define two or three named relations in the design-system documentation (for example "within a group", "between groups", "between sections") and use them in `Card`, `CardBody`, `Callout` and the fly-mode step list instead of free choices.
:::

::: {.rule #PER-010 grade="B"}
**Put more space above a heading than below it, so the heading groups with the text it introduces.** A heading equidistant from the paragraph before and after is ambiguous by proximity; spacing decides which block it belongs to [@wertheimer1923untersuchungen; @elder2002ecological]. This applies a well-measured principle to typography; the typographic Parts treat the rhythm itself.

*In LTF:* `MarkdownContent` and `Prose` already follow this. The section h2s that pages hard-code as `text-2xl font-bold` on `DashboardPage`, `ModulePage` and `BriefTab` should inherit the same asymmetric spacing rather than relying on a parent `gap`, which spaces equally above and below.
:::

### Proximity recast as similarity

Arnheim reduced Wertheimer's grouping rules to one rule of similarity, acting only in conjunction with separation, and recast proximity as similarity of spatial location [@arnheim1974art]. A visual object is more unitary the more strictly similar its elements are. That framing is theoretical, but it explains a common failure: two items close together that differ in every other respect still read as a weak pair, because only one dimension of similarity holds them. The factorial model from natural images gives the same prediction in probabilistic terms: each agreeing cue multiplies the evidence for a group [@elder2002ecological].

### Crowding: when proximity breaks recognition

Proximity has a second effect that grouping research does not cover. Pelli and Tillman's review argues that object recognition is usually limited by how close objects are to each other, not by how big they are [@pelli2008uncrowded]. The visual system recognizes an object by detecting its features and combining them; when objects are too close, features from several objects are combined into a jumbled percept. This is crowding. The critical spacing needed to avoid it is the same for letters, gratings, faces and furniture (weaker between dissimilar objects), it is proportional to the object's distance from fixation, roughly half the eccentricity for small letters according to Bouma's observation, and it is independent of the object's size. Halving a letter's size does not change the spacing it needs. Crowding impairs identification, counting and localization but not detection: the crowded object is still seen as present, it just cannot be identified [@pelli2008uncrowded].

The region around fixation where spacing exceeds the critical value is the uncrowded window, and its size limits the speed of reading and search. Reading speed stays roughly constant across a sixfold range of text size but drops sharply once letter spacing falls below a critical value [@pelli2008uncrowded]. The proportionality has been reproduced across many studies, though critical spacing varies with direction in the visual field and between observers, and the review is a synthesis by the field's main contributors.

Crowding matters most for LTF in two places. Instrument widgets pack numerals, tick labels and needles close together, which is exactly the condition that crowds the number the learner needs. And fly mode is read in glances, often from the corner of the eye while looking at the sim, where critical spacing is large.

::: {.rule #PER-011 grade="B"}
**Give scale numerals, tick labels and readouts clearance from their neighbors, and solve small-size legibility with spacing before size.** Crowding is set by center-to-center spacing relative to distance from fixation, not by object size, and it jumbles features of neighboring objects so that a visible number cannot be identified [@pelli2008uncrowded]. The phenomenon is well replicated; its application to gauge faces is an inference.

*In LTF:* the `Gauge` and `Tape` primitives draw numerals close to ticks and needles. The `Label` primitive already has a surface halo, which helps separate a label from lines behind it; also check numeral-to-numeral spacing on the `airspeed-indicator` dial and the `g1000-pfd` tapes at the smallest rendered size, and prefer fewer labeled ticks over smaller numerals.
:::

::: {.rule #PER-012 grade="B"}
**In fly mode and any view read in glances, show one value per element, separated by large gaps, and avoid strings of similar short items.** Critical spacing grows with distance from fixation, so peripheral reading needs far more space between items than foveal reading [@pelli2008uncrowded]. Similar short items crowd one another more than dissimilar ones. The evidence is laboratory psychophysics; the second-screen application is an inference to test.

*In LTF:* `FlyPanel large` uses `gap-3` between step rows at `text-xl`. That is fine for reading while looking at the screen, but the steps are glanced at from the sim. Test larger inter-row gaps and drop secondary text (such as the timer explanation) from the large variant.
:::

### What this means for Learn to Fly

Keep the asymmetric heading spacing in `MarkdownContent` and `Prose`, which already satisfies PER-007 and PER-010 by a wide margin. Keep the `Label` halo in widget SVGs, which reduces crowding against lines behind a label.

Change the spacing model. Because the Tailwind spacing scale is uncleared, every component picks its own gaps, and the result is the near-equal inner and outer gaps visible in hand-inlined cards. Write the inner-to-outer ratios into the design-system documentation (PER-009), then audit `Card`, `Callout`, the challenge card grid, the dashboard stat tiles and the `FormField` stack for PER-007 and PER-008. The page-level h2s hard-coded as `text-2xl font-bold` on app pages should take their spacing from the same rule as `MarkdownContent` headings (PER-010).

Build a widget clearance check. For each SVG widget, render at the smallest size the layout allows and confirm that numerals do not crowd one another or the needle (PER-011). In `FlyModePage`, enlarge the gaps between step rows and between the steps section and the timer, and remove text that is not needed during flight (PER-012). The grid and spacing Part covers the spacing scale itself; this chapter supplies the perceptual reason for ratios.

## Common region, connectedness and figure-ground

### Common region

Palmer proposed that elements lying inside the same bounded region tend to be grouped, and that this is a new principle that cannot be reduced to proximity, closure or similarity [@palmer1992common]. His demonstrations followed Wertheimer: rows of elements arranged so that proximity or similarity favored one grouping, then closed outlines drawn so that a different grouping fell inside shared regions. The outlines won. Common region overcame both proximity and similarity.

The abstract adds three findings. Common region depends on perceived depth: if the outline is not seen as a surface or background behind the elements, the effect weakens, which places the principle after at least some depth processing. When regions nest, the smallest enclosing region dominates, so an element inside a small box inside a large box groups first with the small box's contents. And regions follow a hierarchical embedding scheme, so groups can sit inside larger groups [@palmer1992common]. Later work, in which Palmer and Beck's repetition discrimination task measured grouping as a response-time difference between repeated shapes inside a group and across a group boundary, gave the principle objective support, and the modern review lists it among the established newer principles [@wagemans2012century]. Secondary summaries report that common region dominated shape similarity in later studies; those originals were not read for this book.

Common region is what designers call a card, a panel, a tray or a box. It is cheap and strong, and both properties have costs. Because it can override proximity and similarity, an element placed inside the wrong region will be read as part of it. Because it depends on the region reading as a surface, its strength varies with theme, display and viewing distance.

::: {.rule #PER-013 grade="B"}
**Draw region boundaries around meaning: everything inside a card belongs to one task or object, and nothing that belongs to it sits outside.** Common region can override proximity and similarity, so a boundary is read as a statement about what belongs together whether or not the designer meant one [@palmer1992common; @wagemans2012century]. The principle is well supported; the rule is its direct application.

*In LTF:* in `WidgetFrame` the title, "Simplified model" badge, mode toggle, canvas and "Describe this diagram" disclosure share one `figure`, which is right. On `LessonPage`, a `Callout` that comments on a widget should sit immediately after the frame, not inside it, unless it is part of the widget's own explanation.
:::

::: {.rule #PER-014 grade="B"}
**Make every region read as a surface against its background in both themes, and test that at a glance rather than by inspection.** Common region weakens when the boundary is not perceived as a surface behind the elements [@palmer1992common], and a boundary that fades in one theme removes the cue there. The contrast needed is not established in the sources; treat it as an empirical check on real screens.

*In LTF:* computed this session from `tokens.css`, Day `surface` (#ffffff) on `canvas` (#f7f5f3) is about 1.09:1 and the `line` border (#dfdedc) on `surface` about 1.34:1; Night `surface` (#1f1e1c) on `canvas` (#141412) is about 1.11:1 and the `line` ring (#393836) on `surface` about 1.42:1. The region is carried almost entirely by a faint hairline (plus `shadow-1` in Day). Card outlines are decoration, not controls, so no cited standard fails here; still, check `Card` and the inlined card blocks on a second screen at arm's length in both themes, and raise the ring to `line-strong` where a card must group content in fly mode.
:::

::: {.rule #PER-015 grade="B"}
**Nest regions at most two deep, and put the most specific grouping in the innermost region.** When regions nest, the smallest enclosing region dominates grouping [@palmer1992common]; each extra level is another boundary the learner must resolve. The two-level limit is a craft judgment layered on the finding.

*In LTF:* the top of `LessonPage` stacks an `UnverifiedWarning`, a `SignupBanner`, a resume bar and an objectives `Card` with `bg-accent-tint`, each its own box, above blocks that may open with a `Callout`. Avoid putting a `Callout` or `Card` inside a `Callout`, and avoid badges in boxes in boxes on the `DashboardPage` Continue card.
:::

::: {.rule #PER-016 grade="C"}
**Reserve enclosure for groups that need it; do not give every element its own box.** A boundary distinguishes a group only against unenclosed surroundings. When everything is boxed, enclosure stops carrying information and the page becomes a field of equal regions, which the chapters on search and clutter show is harder to search. This is reasoning from the grouping and search literature [@palmer1992common; @duncan1989visual], not a direct test.

*In LTF:* the product dossier counts `rounded-lg` bordered surface cards on lessons, challenge lists, airports, checklists, dashboard tiles, quiz blocks, widget frames and resource cards. Prefer spacing and a rule (`border-t`) for list-like content, as the landing "Questions" `dl` already does, and keep the card for things that are objects (a challenge, a widget, a quiz).
:::

### Connectedness

Palmer and Rock proposed uniform connectedness: closed regions of homogeneous lightness, color or texture tend to be perceived initially as single units [@palmer1994rethinking]. They argued it is not one more grouping principle but the process that defines the elements in the first place; classical grouping then builds larger units from these, and parsing cuts them into parts. Uniform connectedness in the image is necessary but not sufficient: connected regions perceived to lie in separate depth planes fail to form one unit, which places the process late, after lightness and depth are resolved.

The ordering claim is contested. Peterson disputed its entry-level status, Kimchi found collinearity and closure at least as important early on, and one brief-exposure series reported in a secondary summary found the effect in only one of nine experiments [@palmer1994rethinking; @wagemans2012century]. The phenomenon itself is consistently supported. Palmer and Beck found faster responses to connected repeated elements, and Humphreys and Riddoch reported a patient with Balint's syndrome who could tell a one-color from a two-color array of circles only when pairs were joined by lines [@wagemans2012century]. Treat "connectedness comes first" as a theoretical position and "a line joining two things makes them one unit, even against proximity and similarity" as well supported.

::: {.rule #PER-017 grade="B"}
**Bind labels to parts of a diagram, and steps to a sequence, with explicit connectors rather than nearness alone.** Element connectedness groups items as one unit even against proximity and similarity [@palmer1994rethinking; @wagemans2012century]. A leader line from a label to a needle, or a continuous track under a sequence of markers, removes the ambiguity spacing leaves.

*In LTF:* `LessonPath` already uses a continuous 3 px connector with pins on it, and teal only between completed stops, which is connectedness used well. Apply the same device to widget callouts: in `control-surfaces` and `traffic-pattern`, draw leader lines from labels to the parts they name rather than floating labels near them.
:::

::: {.rule #PER-018 grade="B"}
**Check every line, underline and border for accidental connections between unrelated items.** Because connectedness can override proximity and similarity, a rule or outline that touches two unrelated elements joins them [@palmer1994rethinking]. The risk is highest in dense lists and diagrams.

*In LTF:* the `ReferenceSections` rail's active item has a 3 px teal inset, the header's active nav item a 3 px teal underline and `Tabs` a teal underline on the 1 px baseline. Check that no such line runs on into a neighboring item, and that table borders in `MarkdownContent` and the Speeds `Table` do not visually join a value in one row to a label in the next.
:::

::: {.rule #PER-019 grade="B"}
**Use genuinely uniform fills for anything that must read as one object; keep gradients, noise and texture out of data fills.** Regions of homogeneous lightness, color or texture are taken as single units; variation inside a fill weakens the unit [@palmer1994rethinking]. A uniformly filled bar reads at a glance as one thing; a segmented or gradient bar needs an outline to be read as one.

*In LTF:* `ProgressBar`, `ProgressRing` and the airspeed arcs in `AirspeedArcs` use flat token fills, which is right. Keep it that way in any future chart or widget, and give segmented displays (such as `DifficultyDots`) a containing outline or label if they must be read as one quantity.
:::

### Figure and ground

Which side of an edge is the object and which the background is decided by configural cues. Arnheim, following Rubin, gives the classic list: the surrounded surface tends to be figure, as do smaller areas, enclosed and textured regions, simpler and symmetrical shapes, convex shapes, shapes aligned with the frame's axes, lower regions and regions in relative motion [@arnheim1974art]. The modern review adds image-based cues (lower region, top-bottom polarity, extremal edges, edge-region grouping, articulating motion, advancing region, entropy contrast) and shows that past experience (familiar upright shapes are more often figure) and attention also bias assignment [@wagemans2012century].

The review also cuts the classic demonstrations down to size. Peterson and Salvagio found convex regions seen as figure on 57 percent of two-region trials at 100 ms, rising to 89 percent with eight regions; the authors conclude that traditional demonstrations overstated convexity and symmetry [@wagemans2012century]. Figure-ground cues are real but modest one at a time, and they gain strength from repetition and context.

Arnheim's corollary is the one designers use: negative spaces must be given enough figure quality to be perceivable in their own right, and the spacing between figures must be controlled as carefully as the figures [@arnheim1974art].

::: {.rule #PER-020 grade="B"}
**When an element must stand out as the figure, give it several figure cues at once (surroundedness, contrast, a boundary and a label), not convexity or symmetry alone.** Single configural cues such as convexity are weaker than the textbook demonstrations implied, near chance in two-region displays at brief exposure [@wagemans2012century]. Cues combine, so redundancy is cheap insurance.

*In LTF:* the attitude display in `g1000-pfd` uses `fill-sky` over `fill-ground`, a lower-region cue plus a strong color boundary, with the aircraft symbol surrounded and high-contrast. Keep the symbol's outline and contrast strong in both themes, since the instrument colors are fixed and do not adapt.
:::

::: {.rule #PER-021 grade="C"}
**Design margins, gutters and the gaps between figures as deliberately as the figures.** Negative space needs enough figure quality to be read, and inter-figure spacing shapes the composition as much as the figures do [@arnheim1974art]. This is craft authority, not experiment.

*In LTF:* the landing page's `py-16 sm:py-24` section padding and the lesson grid's `gap-10` are designed spaces. On `LessonPage` the 220 px left rail, the 800 px article and the 280 px right rail create two gutters; check that each gutter is clearly wider than any gap inside a column so the three zones never read as one field (PER-007).
:::

### What this means for Learn to Fly

Keep `LessonPath`, which is the product's best use of connectedness and of a single highlighted unit on a track; keep the flat token fills in progress and arc displays; keep `WidgetFrame` as the single region for a widget and its explanation.

Change the card habit. The `Card` and its inlined copies are the main grouping device on most pages, and they rest on surfaces that differ from the canvas by very little in either theme. Run the glance test in PER-014 on `LessonPage`, `ChallengesPage`, `DashboardPage` and `FlyModePage`; where a card is doing real grouping work in fly mode, use the `line-strong` ring. Then apply PER-016: convert list-like stacks (resource lists, "Recent attempts", lesson rows inside a module) from cards to spaced rows with a top rule, so that cards are left for objects.

Simplify the top of `LessonPage` under PER-015. Before the first block, a learner can meet up to four boxed regions (unverified warning, sign-up banner, resume bar, objectives card), two of them accent-tinted. Merge the resume bar and the objectives card into one region when both apply, and keep the sign-up prompt visually lighter than either.

Build leader lines into the widget primitives (`shared/svg.tsx`), so that `Label` can be attached to a point with a connector rather than placed near it (PER-017).

## Similarity, texture and the statistics of a glance

### Similarity is graded and multi-dimensional

Wertheimer's similarity factor was graded from the start: elements of one color, or loud against soft beats, band together, and the degree of dissimilarity matters [@wertheimer1923untersuchungen]. Similarity applies to shape, brightness, color, location, movement and speed [@arnheim1974art], and proximity and similarity combine additively in brief presentations [@wagemans2012century]. The natural-image statistics add a ranking within similarity: brightness similarity carried useful grouping information, contrast similarity relatively little, though later work showed contrast polarity is also informative [@wagemans2012century; @elder2002ecological].

The consequence for interface design is that similarity groups whatever is similar, including things that are not related. Two elements styled alike are read as the same kind of thing. Two elements that should be the same kind but are styled slightly differently are read as different kinds, or the learner wonders whether the difference means something.

::: {.rule #PER-022 grade="B"}
**Style elements of the same kind identically across the product, and make elements of different kinds differ clearly, never slightly.** Similarity is graded and groups by any shared feature, so near-identical styles for different roles invite confusion and small accidental differences for one role suggest a distinction that does not exist [@wertheimer1923untersuchungen; @arnheim1974art]. The principle is well established; the product rule is its application.

*In LTF:* the dossier records two typographic dialects: `PageHeader` and the landing use `display-*` and `heading-*` utilities, while lesson, dashboard, challenge and error pages hard-code `text-2xl font-bold` and `text-3xl font-bold`. The h2 is 24 px at 700 on app pages, 32 to 44 px at 600 to 700 on the landing page and 20 px at 600 on the reference hub. A learner moving between pages sees three kinds of section heading where there is one. Map every h1 and h2 to the token utilities.
:::

### Which features win when they conflict

Healey and Enns's survey for visualization designers reports a feature hierarchy that decides which encoding wins when two vary at once [@healey2012attention]. In boundary detection, Callaghan found that random variation in color slowed (without completely blocking) detection of a boundary formed by shape, while random variation in shape had no effect on seeing color boundaries. Luminance dominated hue, and hue dominated texture. In Healey and Enns's own experiment, a 20 by 15 array of paper-strip glyphs varied hue, size, density and regularity: hue, size and density differences were easy to see in isolation and regularity was not; random texture variation did not affect detection of hue targets, but random hue variation degraded detection of size and density targets. A related search experiment showed that viewers can choose rapidly among up to seven isoluminant colors [@healey2012attention].

These interference results come largely from Callaghan's work and the authors' own lab with simple glyphs and short trials, so they need checking in realistic displays. The direction is consistent, though: the stronger channel intrudes on the weaker one, not the reverse.

::: {.rule #PER-023 grade="B"}
**Spend the strongest visual channel on the most important attribute, and never let hue vary for decoration on a display that encodes magnitude by size or position.** In the feature hierarchy, luminance dominates hue and hue dominates shape and texture; random hue variation degrades reading of size and density, while texture variation does not disturb hue [@healey2012attention]. The evidence comes from a small set of laboratory studies with simple glyphs.

*In LTF:* the dashboard's per-module `ProgressBar`s encode completion by length; keep them in one hue (`accent`) rather than coloring each module differently. In the `load-factor` and `wind-triangle` widgets, if length or angle is the quantity, do not add a color ramp for decoration.
:::

### Texture: what segregates without scrutiny

Julesz studied when a region of one texture stands out from a background of another without focused attention [@julesz1981textons]. He built texture pairs with identical second-order statistics and found that the preattentive system cannot globally process third- and higher-order statistics. Discrimination depends instead on a few local conspicuous features he called textons, such as elongated blobs with their orientation and size, and line ends or terminators. Only the first-order statistics of textons (how many of each) matter; the arrangement between them cannot be perceived without scrutiny. The standard illustration: a region of randomly placed Xs is easy to distinguish from a background of Ls, but a region of Ts can only be found with scrutiny, even though a single T is easy to tell from a single L [@julesz1981textons].

The original statistical conjecture was refuted, and the 1981 paper is Julesz's response; modern accounts prefer filter models (linear filters, a pointwise nonlinearity, further filtering) to a list of textons. Texture segregation and search are related but not interchangeable, and Wolfe and Horowitz call effortless segmentation a good but imperfect diagnostic of a guiding feature [@julesz1981textons; @wolfe2004what]. What survives for design is the distinction: a texture region stands out when its elements differ in a simple feature, and it does not when only their arrangement differs.

::: {.rule #PER-024 grade="B"}
**Do not carry a critical difference by texture arrangement; if two patterned regions must be told apart at a glance, make their elements differ in orientation, size or line ends, and add a label or color.** Textures segregate preattentively only when local elements differ in simple features; regions that differ in arrangement of the same elements need scrutiny [@julesz1981textons]. Fine textures also disappear at small sizes and on poor displays.

*In LTF:* the `airspace-profile` and `sectional-legend` widgets reproduce chart symbology in `chart-*` colors. Where they use hatching or dashed boundaries, make sure the distinction that matters is also carried by color and by a text label, and check the hatches at the smallest rendered size.
:::

::: {.rule #PER-025 grade="C"}
**Use flat fills for panels and surfaces, and reserve pattern for a few purposeful encodings.** Texture is a channel; spent on decoration it competes with texture that means something, and it is the weakest of the channels in the feature hierarchy [@healey2012attention; @julesz1981textons]. This is a craft inference from the research.

*In LTF:* the current token set has no texture fills for page UI, and `States.tsx` uses a dashed border only for empty and error boxes and `verify` callouts. Keep it that way; if a future identity direction introduces a pattern (a chart or livery motif), keep it off any surface that holds data.
:::

### Ensembles: what one glance takes in

Whitney and Yamanashi Leib's review describes ensemble perception: the visual system extracts summary statistics (average size, orientation, motion direction, color, even facial expression) from a group of similar objects, often in one brief glance, without identifying the individual items [@whitney2018ensemble]. Operationally, ensemble perception is the ability to report a statistical moment (a mean or a variance) that requires integrating two or more items; grouping alone is not evidence of it. Observers report the mean size of an array of circles in displays of less than a tenth of a second, and average expression in a crowd of faces from perhaps 100 ms or less. Sensitivity falls as the variance of the set rises; the shape of the distribution matters less when variance is held constant.

How many items are integrated is debated. A fit across many studies gives a power function with exponent 0.58, roughly the square root of the number of items, with individual estimates from about 3 to 5 items per display in some basic-feature studies to more than 4 to 8 in face and biological-motion studies [@whitney2018ensemble]. The square-root rule is a fitted summary across heterogeneous studies, not a law, and mean-size perception is the most disputed claim, through the argument that observers may sample only a few items. Low-level ensembles (average motion, orientation) are well replicated.

Ensembles explain why a good row of bars is understood at once and a table of numbers must be read. They also explain a hazard: an outlier is averaged in. If the question is "is one of these different", the ensemble works against the learner unless the outlier is marked.

::: {.rule #PER-026 grade="B"}
**When a set of values answers an overall question, draw them as similar marks on one scale so the ensemble carries the answer.** People extract the mean and spread of a set of similar items in a single brief glance, without reading individual items [@whitney2018ensemble]. The capacity estimates are debated; the existence of fast summary statistics for simple features is well supported.

*In LTF:* "Your progress" on `DashboardPage` shows per-module `ProgressBar`s; keep them the same length and aligned on one baseline so overall progress reads at once. The landing stats row, by contrast, shows four unrelated counts and is not an ensemble; it should not be drawn as if it were (no shared bars or scales).
:::

::: {.rule #PER-027 grade="B"}
**Mark a critical outlier explicitly, with a second cue, rather than trusting it to stand out from a row of similar marks.** Ensemble coding summarizes a set, and an outlier contributes to the average rather than announcing itself; sensitivity also falls as the set's variance rises [@whitney2018ensemble]. The design inference is that a deviation that matters needs its own marker.

*In LTF:* in the Debrief "Criterion by criterion" rows and the challenge rubric, a failed criterion among passed ones should carry its own `Badge` (warn icon and word), not only a lower number or a shorter bar.
:::

::: {.rule #PER-028 grade="B"}
**Smooth or steady any live value that the learner is meant to read as a trend.** Sensitivity to the mean of a set falls as its variance rises [@whitney2018ensemble], so jitter in a streaming display makes the underlying level harder to read. The applied evidence is indirect.

*In LTF:* when widgets animate a needle or tape from simulated input (the `airspeed-indicator`, `pitch-power`), damp the motion so the needle settles; under reduced motion, step to the new value as the motion Part requires, without intermediate jitter.
:::

### What this means for Learn to Fly

Keep the product's restraint: no texture fills in page UI, flat fills in progress and arc displays, one accent hue for progress.

Change the type system first. The two heading dialects are the most visible similarity failure in the product, because they make the same element (a section heading) look like several kinds of thing across pages (PER-022). Moving `LessonPage`, `DashboardPage`, `ModulePage`, `BriefTab` and the error pages to `display-*` and `heading-*` utilities is a perceptual fix as much as a typographic one.

Change how outliers are shown in results. The `ResultView` criterion rows and the `HistoryTab` table should mark the failing or best item with its own cue rather than relying on the learner to see a number differ (PER-027).

Build an ensemble-friendly progress view when per-lesson progress is added: one row of identical marks on one baseline per module, done marks filled in `accent`, so a learner sees their whole course in one glance (PER-026). Keep live widget values damped (PER-028). The information visualization Part covers chart choice in more depth.

## Emergent features and integrated displays

### When the whole is easier than the parts

The companion Gestalt review gives the clearest evidence for holism in a form a designer can use [@wagemans2012conceptual]. Pomerantz, Sager and Stoever showed that adding a redundant context element can make an odd item easier to find, if the addition creates a salient emergent feature. In their arrow and triangle displays, search was more than twice as fast with the added context, and the advantage vanished when the parts were shifted slightly so that the emergent feature no longer formed. This is configural superiority: the whole carries a property (closure, a vertex, a straight line, symmetry) that none of the parts has, and that property is found faster than any part. Chen found that the strongest configural superiority effects involve topological features: holes, connectedness, and inside versus outside [@wagemans2012conceptual].

Two cautions apply. The effect depends on the parts being placed exactly; a small shift removes it. And the experiments use simple line figures, so the size of the advantage in a real widget is unknown. The direction is reliable: a display can be built so that the answer is a shape, and shapes are found faster than comparisons.

::: {.rule #PER-029 grade="B"}
**Build widgets so that the answer to the learner's question is an emergent feature of the display: an alignment, a closure, a straight line or a symmetry.** Emergent features of configurations are found faster than their parts, more than twice as fast in the original arrow and triangle displays, and the advantage vanishes when the parts are misaligned [@wagemans2012conceptual]. The evidence is laboratory search with simple figures; the widget application is an inference.

*In LTF:* in the `vor-cdi` widget, "on course" is the needle lining up with the center reference, an emergent straight line. In `turn-coordinator` and `angle-of-attack`, look for the equivalent: a symbol level with a reference, a pointer inside a marked region. Draw the reference marks so that the aligned state forms a clean line and the misaligned state visibly breaks it.
:::

::: {.rule #PER-030 grade="B"}
**Frame glance questions topologically (inside the band or outside it, touching or separate) rather than metrically (how close to a number).** The strongest configural superiority effects involve topological features such as inside versus outside and connectedness [@wagemans2012conceptual]. A learner can tell whether a needle is inside a colored arc at a glance; telling whether a number is near a target needs reading.

*In LTF:* the `AirspeedArcs` band on the reference hub and the arcs in the `airspeed-indicator` widget already pose "which arc is the needle in". Lesson copy and quiz stems about them should ask the same topological question ("Is the needle in the green arc?") and leave the numbers to the token-driven text (`{{vspeed.*}}`) for when exact values matter.
:::

### Whole before part, sometimes

Navon's hierarchical letters (a large letter made of small letters) were taken to show global precedence: the global structure is processed first [@wagemans2012conceptual]. Later work narrowed the claim. Kimchi found the global advantage only when the local task relied on line orientation, not closure; Han, Humphreys and Chen found a far weaker global advantage for closure than for orientation; Kimchi's primed-matching study found global form primed at brief exposures and local elements only at longer ones. The review's conclusion is that wholes dominate parts in attention and perception, but this "does not imply a specific processing order" [@wagemans2012conceptual]. The same display can show global or local dominance depending on the judgment asked.

::: myth
**"People always see the forest before the trees, so the overall shape of a page is perceived first."** Navon's global precedence effect is real but task-dependent: it appeared when the local task relied on orientation and was weak or absent for closure, and the review concludes that whole-over-part dominance does not imply a fixed processing order [@wagemans2012conceptual]. A learner looking for one value may see it before the layout around it.
:::

::: {.rule #PER-031 grade="D"}
**Do not rely on the learner taking in a page's overall structure before its details; give both a whole-level summary and labeled parts.** Evidence on global precedence conflicts: global advantages appear for some judgments and not others, and processing order is not fixed [@wagemans2012conceptual]. Because the evidence is contested, the safe design gives both levels explicitly.

*In LTF:* `SectionNav` ("In this lesson") and the objectives `Card` give the whole-level summary; the block headings give the parts. On phones, where `SectionNav` is replaced by the sticky section `Select`, make sure the objectives card still states the lesson's structure in a sentence.
:::

### Proximity compatibility: integrate or separate

Wickens and Carswell formalized a rule that connects grouping to task: displays relevant to a common task or mental operation should be rendered close together in perceptual space [@wickens1995proximity]. Display proximity covers more than distance; it includes shared color, shared object boundaries and other cues that make items look like one thing. The second half of the principle is what stops it becoming "group everything": when information must be selectively attended, it should be shown with low proximity, because pulling one value out of a bundle costs focused attention.

The best-known anchor is Wickens and Andre's study of object displays, in which several parameters are drawn as the dimensions of one shape. In an aircraft stall-analysis task, the object display gave better integration than separate bars but degraded focused attention on individual dimensions, and only homogeneous-feature objects produced emergent features that helped integration [@wickens1995proximity]. That study was seen only through an abstract. The principle is widely cited and extended; its benefit depends on the task actually being integrative.

::: {.rule #PER-032 grade="B"}
**Put information that must be compared or combined in one step close together and in one region; separate information that must be read on its own.** Close display proximity helps integration and hurts focused attention, so proximity should follow the mental operation the task requires [@wickens1995proximity]. Which values belong together in flight is aircraft knowledge that must come from approved sources, not from this principle.

*In LTF:* on `SpeedsPage`, a learner reading one speed needs it separated (the big `Table` row with a `font-mono text-2xl font-bold` value). A challenge criterion that compares a reading with a target needs both in one place: the rubric row in `DebriefForm` should show the target and the learner's self-score side by side, not in separate sections.
:::

::: {.rule #PER-033 grade="B"}
**Pair every object-style or integrated display with a plain numeric or text readout for focused reading.** Object displays support integration but degrade focused attention on single dimensions [@wickens1995proximity]; a separate readout serves the other task.

*In LTF:* the `airspeed-indicator` widget combines a dial and a tape, and `g1000-pfd` integrates attitude, speed and altitude. Give each a plain readout of the value the lesson is about, in `readout` mono, outside the drawing, so a learner who needs the number does not have to extract it from the instrument.
:::

### The visual query

Ware's book for designers frames display design around the visual query [@ware2008visual]. We do not build a full inner model of a scene; the world serves as its own memory, and we query it with eye movements as needed. Design therefore means making the answer to the next query easy to find and easy to read. The book is an accessible secondary source with thin referencing (a reviewer found errata), so its specific claims should be traced to primary work; the query framing itself is consistent with the task-driven gaze research in a later chapter [@tatler2011eye]. Ware also argues that screen perception is closer to 2.5D than 3D and that depth effects mostly help grasping tasks, a view the reviewer reports without primary evidence [@ware2008visual].

::: {.rule #PER-034 grade="C"}
**For each widget, list the questions a learner will ask of it and make each answerable by looking at one place.** Displays are queried by eye movements rather than memorized, so each query should land on one location with one answer [@ware2008visual]. This is synthesis guidance rather than a tested rule.

*In LTF:* for the `pitch-power` widget the queries might be "what is the attitude", "what is the power setting" and "what happens to speed"; each needs one labeled place. Write the queries into the widget's authoring notes next to its PER-003 sentence.
:::

::: {.rule #PER-035 grade="C"}
**Keep widgets flat unless depth is the subject; avoid tilt, perspective and 3D effects added for appearance.** Screen perception is closer to 2.5D than full 3D, and depth cues mainly aid grasping, in Ware's account [@ware2008visual]; perspective also distorts the lengths and angles that instrument reading depends on. This is expert opinion.

*In LTF:* the current widgets are flat SVG with a CSS-rotated needle. Keep them so; if a future lesson needs depth (a `traffic-pattern` view from above versus from the cockpit), make the depth the lesson's content and label it.
:::

### What this means for Learn to Fly

Keep the integrated instrument widgets, which are among the product's most distinctive work, and keep their flatness.

Change how widgets are specified. Before the SVG, write the computational sentence (PER-003) and the visual queries (PER-034), then check that the key answer is an emergent feature or a topological relation (PER-029, PER-030). Add a plain readout next to every integrated display (PER-033): the instrument teaches recognition, the readout serves the learner who needs the value.

Change lesson and quiz copy about instruments to ask the topological question the display answers ("inside the arc or not") and keep numeric values in `{{vspeed.*}}` and `{{aircraft.*}}` tokens.

Build the proximity compatibility check into challenge pages. On `BriefTab` and `DebriefForm`, values that are compared in one mental step (a target and the learner's result) belong in one row; values that are read alone (a sim setup item) belong in their own row of the `dl` (PER-032). The skill and cockpit Part covers which instruments are scanned together; this chapter supplies only the display rule.

## Visual search and pop-out

### Feature integration and its revision

Treisman and Gelade's feature integration theory set the terms for forty years of search research [@treisman1980feature]. Simple features (color, orientation, size) are registered early, automatically and in parallel across the visual field; objects, meaning the correct combination of features at a location, need focused attention, which acts as the glue that binds them. The main paradigm plots response time against the number of items on display; the slope in milliseconds per item measures search efficiency. A target that differs from all distractors in one feature (a single colored item among items of another color) gives a flat line. A target defined by a conjunction of features that each appear among the distractors (a red vertical bar among red horizontal and green vertical bars) gives a rising line. When attention is overloaded, features of different objects can be wrongly combined into illusory conjunctions; a secondary summary reports them on 18 percent of trials with four briefly flashed objects in Treisman and Schmidt's work [@treisman1980feature].

The feature-conjunction contrast has been replicated many times. The strict parallel-versus-serial reading has not. Conjunction searches were often more efficient than the theory predicted, and Guided Search replaced the dichotomy with a continuum of guidance; Wolfe describes the latest version as an evolution, not a repudiation, of feature integration [@wolfe2021guided].

### Similarity sets the difficulty

Duncan and Humphreys explained the continuum with two similarity relations [@duncan1989visual]. Search gets harder as targets become more similar to non-targets, and harder as non-targets become less similar to one another. Search is easiest when the target is very different from the distractors and the distractors are all alike. In their model a parallel stage groups and describes the input; inputs then compete for access to awareness and action, weighted by how well each matches a template of what is sought; and grouped inputs share weight, so suppressing one non-target suppresses its similar neighbors too (spreading suppression). Conjunction searches tend to be hard because conjunction displays usually have high target-distractor similarity and heterogeneous distractors, without needing a separate mechanism. In a 1992 reply to Treisman, they reported data in which feature and conjunction search were equally difficult once both similarity factors were controlled [@duncan1989visual].

The disagreement with feature integration is about mechanism; the practical regularities are shared, and later models build the similarity relations in [@wolfe2021guided; @wolfe2004what]. For design the result is the most practical rule in this Part: make the thing to be found unlike everything else, and make everything else like each other.

::: myth
**"Visual search is either instant pop-out or a slow item-by-item scan."** The dichotomy persists in textbooks, but search slopes form a continuum from near zero to hundreds of milliseconds per item, set by how well features guide attention and by target-distractor and distractor-distractor similarity [@wolfe2021guided; @duncan1989visual]. Wolfe and Horowitz show slopes are not bimodal and avoid the word "preattentive" for that reason [@wolfe2004what].
:::

::: {.rule #PER-036 grade="A"}
**Make each item a learner must find differ from its neighbors in one strong guiding feature (color, size, orientation or motion), not in a combination of weaker ones.** A single unique feature supports efficient search largely independent of the number of items; a target defined by a conjunction of features shared with the distractors is found more slowly as items are added [@treisman1980feature; @wolfe2021guided; @itti1998model]. This is among the best-replicated findings in attention research.

*In LTF:* in the `FlyPanel` step list, ticked steps turn `border-go bg-go-tint`, but the next step to do is not marked at all; it is defined only by being the first unticked row, a relation the learner must work out. Give the current step one strong cue of its own (the ink treatment used for the current `LessonPath` pin, or a heavier border) so it pops.
:::

::: {.rule #PER-037 grade="A"}
**Keep ordinary items visually uniform and spend one visual channel on the exceptions.** Search is easiest when distractors are alike and the target differs; varied non-targets make search harder, and grouped similar non-targets are suppressed together [@duncan1989visual; @wolfe2004what]. A highlighted item stands out only if the rest are plain.

*In LTF:* on `ChallengesPage`, each card carries a mono code, `TypeIcon`, `DifficultyDots`, minutes, ICAO, badges and a best `TierBadge`. When every card has several colored marks, a learner looking for "challenges I have not attempted" or "my gold results" has no uniform background to find them against. Keep the default meta row in `ink-2` neutrals and let only the property being filtered or the learner's status carry color.
:::

### What guides attention

Wolfe and Horowitz ranked the attributes that can steer attention during search [@wolfe2004what]. Undoubted: color, motion, orientation and size (including length and spatial frequency). Possible: lighting direction, glossiness, expansion, number and aspect ratio. Doubtful: novelty, letter identity and alphanumeric category. Probable non-attributes: intersection type, optic flow, color change, three-dimensional volumes, faces, the observer's own name and semantic categories such as "animal" or "scary". The authors flag the face placement as debatable. Guided Search 6.0 keeps the core: color, motion and orientation guide; intersection type and surface material do not [@wolfe2021guided].

The signal-to-noise details are what turn the list into specifications. A search for a unique basic feature can be made arbitrarily hard by shrinking the difference, but a search with no unique feature cannot be made easy by enlarging differences. The bend in the efficiency function is far above the threshold of discrimination: efficient color search needs differences much larger than a just noticeable difference, and for orientation the critical target-distractor difference for efficient search is about 15 degrees, against roughly 1 to 2 degrees needed to tell two lines apart [@wolfe2004what]. Guidance by color and orientation uses coarse, categorical representations; a difference of roughly 10 to 15 degrees is typically needed for orientation to guide [@wolfe2021guided]. And heterogeneity hurts most when distractors flank the target in feature space: a vertical target is easy among distractors all tilted 20 degrees left, or all 20 degrees right, but hard among a mix of both [@wolfe2004what].

::: {.rule #PER-038 grade="B"}
**Make state differences categorical: different hue families rather than shades, and orientation differences well beyond 15 degrees, plus a second cue.** Efficient guidance needs differences far above discrimination thresholds; for orientation about 15 degrees against 1 to 2 degrees for discrimination, and color guidance is categorical [@wolfe2004what; @wolfe2021guided]. Two shades of one hue, or two slightly different needle angles, will be told apart on inspection but will not pop.

*In LTF:* `go` (#006c43), `caution` (#945a00) and `warn` (#b71824) in Day are distinct hue families, which is right; keep any new status token (for example an "in progress" state) out of their families. In widgets, a needle position that means "alert" must differ from the normal position by a large angle and by color or a marker, not by a few degrees.
:::

::: {.rule #PER-039 grade="B"}
**Choose exception colors that are separable from all ordinary colors in color space, not flanked by them.** A target hue among distractor hues on both sides of it in color space is hard to find; one that can be separated by a single boundary (the only warm color among cool ones) is easy [@wolfe2004what]. The evidence is laboratory search with simple stimuli.

*In LTF:* the page palette is warm neutral plus teal `accent`, with `go`, `caution` and `warn` as status hues. `warn` red is separable from teal and the neutrals. Keep decorative or category colors from sitting between status hues; a future amber or orange brand color would flank `caution` and weaken it.
:::

::: {.rule #PER-040 grade="B"}
**Do not rely on an icon's meaning, a face or a word to make something pop out.** Semantic category, faces and the observer's own name are probable non-guiding attributes; shape and meaning are weak or doubtful guides [@wolfe2004what]. A warning icon is recognized once attended, but its meaning does not draw attention to it.

*In LTF:* the `Badge` status variants add a 12 px `TriangleAlert` or `OctagonAlert` icon; the badge pops through its tint and color, not the glyph. Keep it that way: the icon is for recognition and for color-blind users, while the color and size do the guiding.
:::

### Guided Search 6.0

Wolfe's current model builds a spatial priority map from several sources of guidance (top-down and bottom-up feature guidance, history, reward, and scene syntax and semantics) and sends selective attention to the most active location about 20 times a second [@wolfe2021guided]. Recognition is slower, more than 150 ms per item, so several items are being recognized at once; the model is a hybrid of serial selection and parallel recognition. The slope numbers locate real searches on the continuum: pop-out near zero ms per item; an unguided search for a T among Ls about 250 to 350 ms per item on target-absent trials and about half that when the target is present; a search for a 2 among 5s about 90 ms per item on absent trials, again about half when present [@wolfe2021guided]. Wolfe and Horowitz give lower figures for the 2-among-5s search in their review, about 20 to 40 ms per item on present trials, and 150 to 300 ms per item where search is limited by eye movements [@wolfe2004what]; the spread is a reminder that slopes depend on stimuli and method.

The attentional field matters for layout. In T versus L search, the field had a radius of about 5 to 8 degrees, and targets within 2 degrees of fixation were fixated within the next three fixations about 70 percent of the time [@wolfe2021guided]. Items near where the eye lands are found much faster.

Finally, the quitting rule and target prevalence. Search ends when an accumulating signal reaches an adaptive threshold that falls after a correct "absent" response and rises after a miss. At low target prevalence, observers miss more and say "absent" faster; at high prevalence they make more false positives; the criterion shifts while sensitivity changes little [@wolfe2021guided]. The prevalence effect is among the most replicated results in the field. Wolfe himself cautions that it is unclear how far laboratory search findings apply to real-world search, and he lists eccentricity and crowding as vastly understudied.

::: {.rule #PER-041 grade="A"}
**Give rare but important states a louder, redundant signal than common ones, and never let a rare error look like a routine row.** At low target prevalence, searchers miss more targets and quit faster, because the decision criterion shifts while sensitivity barely changes [@wolfe2021guided]. The prevalence effect is among the most replicated in search research.

*In LTF:* a challenge's random event is rare by design; `FlyPanel` already gives it a beep, a 4 px `border-warn`, `bg-warn-tint` and `role="alert"`, which is the right redundancy. Apply the same logic to a missed step in the Debrief and to a failed criterion in `ResultView`: rare failures need a marker that does not depend on the learner searching for them.
:::

::: {.rule #PER-042 grade="B"}
**Put the item a learner most needs in a glance exactly where the glance lands, and keep it in that place every time.** Items within a few degrees of fixation are found and fixated quickly; the attentional field is limited and guidance weakens with eccentricity [@wolfe2021guided]. Where the glance lands depends on the layout the learner has learned, so stability matters as much as position.

*In LTF:* in `FlyModePage` the eye returning from the sim lands near the top of the window. The top currently holds the `BetaBanner`, the "Back to challenge" link, the mono code, the `text-4xl` title and the `text-2xl` goal, so the steps start well down the screen. Move the current step to the top of the fly-mode view, directly under a compact title.
:::

::: {.rule #PER-043 grade="C"}
**Test whether an item that should pop actually does, by timing a search for it on the real screen with more and fewer surrounding items.** Search efficiency is measured by how response time grows with the number of items; a flat line means the design works, a rising one means the learner is scanning [@treisman1980feature; @wolfe2021guided]. Laboratory results may not transfer to real interfaces, so the test has to be run on the product [@wolfe2021guided; @healey2012attention].

*In LTF:* a cheap protocol: screenshot `ChallengesPage` with 3, 9 and 18 cards and ask five people to find "the challenge you have a gold result on"; if their time grows with the card count, the `TierBadge` does not pop. Do the same for the next unticked step in `FlyPanel`.
:::

### What this means for Learn to Fly

Keep the status hue families, which are well separated, and the redundant random-event alert in `FlyPanel`, which matches the prevalence finding.

Change the step list in `FlyPanel` so that the current step is a singleton (PER-036, PER-042). At present the completed steps carry the color and the step that matters carries nothing, the reverse of what search research recommends. Change the challenge card grid to a neutral default meta row so that status and the active filter can pop (PER-037).

Change the fly-mode layout so that the current step sits where the returning glance lands (PER-042), and protect the status hues from future decorative colors (PER-038, PER-039). The color Part covers the palette itself; this chapter adds the search reason to keep status hues categorical and separable.

Build a findability test into design review (PER-043): a handful of timed searches on screenshots for the items each page exists to surface.

## Capture, salience and clutter

### Salient singletons capture attention

Theeuwes asked whether people can use knowledge of what they are looking for to shield themselves from a conspicuous but irrelevant item [@theeuwes1992perceptual]. In three experiments, observers searched for a salient green circle, either a unique form (the circle among green squares) or a unique color (the green item among red circles), with or without an extra salient item in the other dimension. The extra item slowed search in both directions, a color distractor on form search and a form distractor on color search; extended, consistent practice did not remove the effect; and the interference scaled with the relative discriminability of the dimensions. In the abstract's words, "complete top-down selectivity toward a particular feature was not possible" [@theeuwes1992perceptual]. Only the abstract was read, so no reaction-time figures are given here.

The finding sits in a long dispute. The goal-driven school argues that capture depends on the searcher's set. Bacon and Egeth concluded that people looking for a singleton adopt a "singleton detection mode" and so attend to anything that pops out, and that when the target was no longer a singleton the irrelevant singleton stopped distracting; Folk and colleagues proposed that only distractors sharing a task-critical property capture attention [@burke2005highcost]. Both schools agree that in the conditions Theeuwes used the interference is real. Interfaces often recreate those conditions: the learner is looking for one distinct thing (a button, a needle, a warning) among others that are also distinct.

::: {.rule #PER-044 grade="B"}
**Reserve the warn hue, and the loudest treatment generally, for genuine warnings; never use it for decoration, branding or ordinary controls.** A unique, salient color captures attention even when the searcher knows it is irrelevant, practice does not remove the effect, and the cost scales with how discriminable the distractor is [@theeuwes1992perceptual]. Whether capture is fully stimulus-driven is debated, but the cost in singleton-search conditions is established [@burke2005highcost].

*In LTF:* the landing `YouTubeEmbed` uses a 64 px `bg-warn` red play disc, which spends the product's warning hue on a media control on the first page a learner sees. The `danger` button variant also uses `bg-warn`, which is appropriate only because it sits behind a confirmation. Give the play disc an ink or accent fill and keep `warn` for warnings, destructive actions and instrument limits.
:::

::: {.rule #PER-045 grade="B"}
**Give each screen region one visual focal point, and keep everything else calm.** Several equally salient items force the learner to search among competing singletons, and each one taxes the search for the others [@theeuwes1992perceptual; @duncan1989visual]. The limit of one per region is a design judgment derived from the capture and similarity findings.

*In LTF:* the lesson's `SectionNav` active item (teal), the header's active nav underline (teal), the objectives card (`accent-tint`), the resume bar (`accent-tint`) and the mono "Lesson 0.1" label (`text-accent`) all use the accent in the first screen of `LessonPage`. Decide which one is the focal point for a learner arriving at the page (normally the resume bar or the first block) and make the others neutral.
:::

::: {.rule #PER-046 grade="B"}
**Remove a distracting element rather than telling learners to ignore it.** Practice does not eliminate capture by an irrelevant salient item in the laboratory [@theeuwes1992perceptual]. Instructions to ignore cannot be relied on.

*In LTF:* `FlyModeLayout` renders the `BetaBanner` (a `bg-caution-tint` strip with a `text-caution` flask) above the fly-mode content until dismissed. On a screen whose only job is the current step and the random-event alert, the banner is a caution-colored singleton at the top edge. Omit it from `FlyModeLayout`, or show it once per session and never during a running timer.
:::

### Saliency maps and what they predict

Itti, Koch and Niebur built the standard computational model of bottom-up salience [@itti1998model]. A color image is filtered at nine spatial scales; center-surround differences produce 42 feature maps (six for intensity, 12 for color opponency, 24 for orientation at four angles); a normalization operator promotes maps with a few strong peaks and suppresses maps with many comparable peaks; the maps merge into one saliency map; a winner-take-all network picks the most salient location, which is then inhibited for about 500 to 900 ms of simulated time so attention moves on. On artificial displays the model attended first to a target differing in orientation, color, intensity or size regardless of the number of distractors, and needed time growing linearly with distractors for a conjunction target, matching human search. On natural scenes most attended locations were objects such as faces, flags, persons and vehicles [@itti1998model].

The authors state the limits themselves: no top-down guidance, no motion channel (though motion strongly affects human salience), no conjunction detection, and no claim that the model's trajectory resembles human fixations. The paper has no human eye-tracking data [@itti1998model]. Later testing confirms the caution. Tatler and colleagues report that evaluations of salience-based models against human fixations give areas under the ROC curve of roughly 0.55 to 0.65, where 0.5 is chance; salience correlates only with short saccades and weakens once the viewer's task changes; and in a natural task people looked mainly at objects, with about 15 percent of fixations on background, while a salience model predicted more than 70 percent on background [@tatler2011eye]. Salience still matters for large, sudden events.

::: myth
**"An attention-prediction heat map shows where users will look."** Saliency models were built from early-vision features and include no task; evaluated against human fixations they predict only modestly (ROC areas of about 0.55 to 0.65 against 0.5 chance), the correlation is limited to short saccades and vanishes when the task changes, and in natural tasks they badly overpredict looking at background [@tatler2011eye; @itti1998model]. A heat map generated from a screenshot describes conspicuity, not learner gaze.
:::

::: {.rule #PER-047 grade="A"}
**Do not use saliency-map or "attention prediction" tools as evidence of where learners will look; test with learners doing the real task.** Across evaluations, salience models account for only a modest share of fixations, and their predictions fail once viewers have a task [@tatler2011eye]. The model's own authors disclaim fixation prediction [@itti1998model].

*In LTF:* if a design review proposes an AI heat map of a lesson or landing screenshot, treat it as a conspicuity check at most (is anything decorative brighter than the focal point?), never as a substitute for the task tests in PER-043 and the page-level checks in the next chapter.
:::

::: {.rule #PER-048 grade="B"}
**Make the intended focal point the most conspicuous item on first view, and check that no decoration outcompetes it in color, brightness or orientation contrast.** Bottom-up conspicuity does influence where attention goes first and for large, sudden events, even though it does not predict task-driven gaze [@itti1998model; @tatler2011eye].

*In LTF:* on the landing hero, the most conspicuous element should be the primary ink button "Start lesson 0.1". The red play disc (PER-044) and the large dark `bg-instrument` video box compete with it on the right; at `lg` the video takes 5 of 12 columns. Check the hero in both themes for which element wins first.
:::

### Clutter as a measurable property

Rosenholtz, Li and Nakano gave clutter a working definition and a measure [@rosenholtz2007measuring]. Excess or disorganized items cause crowding, masking, occlusion and harder segmentation and search. Feature Congestion rests on an analogy: the more cluttered a display, the harder it would be to add a new item that reliably draws attention; a later description bases it on local variability in color, orientation and luminance. Subband Entropy measures the information in wavelet subbands, and Edge Density had been used as a measure of subjective complexity. The measures correlated well with search performance in the authors' tests, and an extra experiment showed that color variability, which Feature Congestion captures and the other two do not, matters for clutter. MIT hosts code for two of the measures [@rosenholtz2007measuring].

A later study reported in a secondary summary found the correlations statistically significant but numerically modest. The measures describe low-level image statistics; they miss organization (a neatly grouped dense display can be less confusing than a sparse chaotic one), meaning and task. The definition is performance-based, tied to search difficulty, not to beauty or general ease of use.

::: {.rule #PER-049 grade="B"}
**Judge clutter by one question: if a warning appeared here now, would it stand out?** Clutter is usefully defined as the difficulty of adding an item that reliably draws attention, and color variability is a major contributor [@rosenholtz2007measuring]. A screen that fails the question is too busy for anything that must be noticed.

*In LTF:* apply the question to `FlyModePage` with the random-event alert showing, to the `ChallengePage` Fly tab and to the `DashboardPage` first screen. Where the answer is doubtful, remove color variety first (status tints used for non-status content, multiple accent uses) before removing items.
:::

::: {.rule #PER-050 grade="C"}
**Track a computed clutter score on key screenshots as a regression signal, not as a pass or fail gate.** Feature Congestion and related measures predict search difficulty in arbitrary images including screenshots, with modest correlations and no account of organization or task [@rosenholtz2007measuring]. A rising score between releases is a prompt to look, not a verdict.

*In LTF:* the e2e suite already renders pages; a script could run a clutter measure on screenshots of `LessonPage`, `ChallengePage` and `FlyModePage` in both themes and record the values with each release. Calibrate against LTF's own pages before reading anything into a number.
:::

::: {.rule #PER-051 grade="C"}
**Map status tokens only to status meanings, and never reuse go, caution or warn tints for content categories.** Each reuse of a status hue for a category adds a competing singleton and color variety, which both raise clutter and dilute the status signal [@theeuwes1992perceptual; @rosenholtz2007measuring; @duncan1989visual]. This is a design inference from three lines of evidence.

*In LTF:* `Callout.tsx` gives "Pro tip" `bg-go-tint` with `text-go`, "Classic panel" `bg-caution-tint` with `text-caution`, and "Decision" the same `bg-warn-tint` as "Safety"; "Sim vs reality" and "Memory item" use `accent-tint`. So a lesson's green box means a tip, not success; its amber box means a panel variant, not caution. Give non-status callouts neutral fills (`surface-sunken` with an `ink-2` head, as "Note" already has) distinguished by icon and title, and keep tints for safety, decision and verification.
:::

### What this means for Learn to Fly

Keep the warn hue's use on instrument limits, error states, the `ErrorSummary` and the random-event alert, and the `danger` button's place behind a confirmation.

Change three uses of loud color. Move the landing play disc off `bg-warn` (PER-044). Rework the `Callout` color map so that status tints mean status (PER-051); this is the single largest source of color variety in lesson pages. Pick one accent focal point for the top of `LessonPage` (PER-045).

Change fly mode: remove or suppress the `BetaBanner` in `FlyModeLayout` (PER-046) and apply the PER-049 question with the alert showing.

Build two cheap checks. A conspicuity check in review (PER-048), done by eye or with a saliency tool used only for conspicuity (PER-047). And, optionally, a clutter score on e2e screenshots tracked over time (PER-050). The color Part and the information visualization Part cover the palette and chart encodings; this chapter supplies the attentional cost of each extra salient color.

## Where people look on a page

### Task steers gaze

Yarbus recorded where the eye goes during long viewing of complex pictures and argued that the pattern of fixations depends on the task [@yarbus1967eye]. In the best-known demonstration, one observer viewed Repin's painting "The Unexpected Visitor" seven times, for 3 minutes each, after different instructions (free examination, estimating the family's wealth, giving the people's ages, guessing what they had been doing, remembering clothing, remembering positions, and estimating how long the visitor had been away), and the scan records differ visibly. As quoted by Tatler and colleagues, Yarbus wrote that "Depending on the task in which a person is engaged...the distribution of the points of fixation on an object will vary correspondingly" [@yarbus1967eye]. He also observed that viewers of faces favored the eyes and cycled among eyes, nose and mouth.

The evidence is modest by modern standards: the picture series is one observer. Later work supports the core claim. DeAngelus and Pelz found task-dependent differences across several observers viewing the painting, and Tatler and colleagues re-ran the design with a portrait, 20 volunteers and seven instructions, finding that gaze shifted with instruction, with the eyes and mouth taking the most gaze in free viewing [@yarbus1967eye].

### Natural tasks

Tatler, Hayhoe, Land and Ballard reviewed eye guidance in natural behavior and concluded that salience-based schemes "are poor at accounting for many aspects of picture viewing and can fail dramatically in the context of natural task performance" [@tatler2011eye]. In natural tasks gaze follows behavioral relevance, learned expectations, reward and the reduction of uncertainty. Drivers look at or near the tangent point of a bend or the lane ahead, with around half the fixations of three drivers within an area of about 3 degrees. In making tea or a sandwich, people look at where an object is about to be put, including currently empty places, and fixations fall almost entirely on task-relevant objects; before the task begins, fixations split roughly equally between relevant and irrelevant objects. The authors also note that picture viewing has artifacts: the monitor frame induces a central bias, and the sudden onset of a whole scene has no real-world analogue [@tatler2011eye].

The review does not cover flying, so its application to a learner flying beside a second screen is an inference, but the structure of the task is similar: gaze is learned, scheduled and anticipatory, and a novice has not yet learned where and when to look.

::: {.rule #PER-052 grade="B"}
**State the task before showing the display it applies to.** What a viewer fixates depends on the task they are doing, and before a task begins, fixations are spread across relevant and irrelevant items [@yarbus1967eye; @tatler2011eye]. A goal stated first concentrates gaze on what matters.

*In LTF:* a lesson block that introduces a widget should open with the question ("Find the attitude indicator and read the bank angle") before the `WidgetFrame`, and a `QuizBlock` prompt should come before its stimulus image. On `ChallengePage`, the Brief tab's "Goal" heading comes first, which is right; `FlyModePage` repeats the goal under the title, also right.
:::

::: {.rule #PER-053 grade="B"}
**Place information where the learner's next action will happen, not where it is convenient to render it.** In natural tasks people look ahead to the location of the next action, including empty places where an object is about to go [@tatler2011eye]. Information at that location is seen as part of the action.

*In LTF:* in `DebriefForm`, the explanation of a rubric level belongs beside the radio card the learner is about to choose, not in a header above the form. In `FlyPanel`, the "Finish and debrief" button should sit immediately after the last step, where the eye is when the flight ends.
:::

### Reading the task back out of gaze

Greene, Liu and Wolfe tested the popular reading of Yarbus: that an observer's task can be read from their scan path [@greene2012reconsidering]. Observers viewed 64 grayscale photographs, each with at least two people, under four tasks (memory, guessing the decade, judging how well the people know each other, judging wealth), tracked at 1000 Hz. A classifier on seven summary features decoded the image at 33 percent against 1.5 percent chance and the observer at 26 percent against 6.3 percent, but the task at only 27.1 percent against 25 percent chance. Longer viewing (60 s) did not help (task 25.9 percent), nor did selecting time windows, nor did human judges looking at overlaid scan paths (26.3 and 27.5 percent). The authors conclude that "static scan paths alone do not appear to be adequate to infer complex mental states of an observer" [@greene2012reconsidering].

The result has since been qualified: later reports, seen only in summary, decoded task slightly but significantly above chance with stronger classifiers. The net position is that task shapes gaze, but the signal in summary statistics is weak and claims in either direction need care [@greene2012reconsidering; @yarbus1967eye].

::: myth
**"A heat map shows what users wanted, so we can read intent from where they looked."** Even with research-grade trackers and well-separated tasks, summary gaze features identified the image and the viewer but not the task, and human judges did no better than chance from scan paths [@greene2012reconsidering]. Later reanalyses found only small above-chance decoding. Gaze shows where the eyes pointed under one task; a different task gives a different map.
:::

### Page-level regularities

Three academic studies supply most of what is known about gaze on web pages, and all are modest in scale.

Buscher, Cutrell and Morris tracked 20 participants on 361 pages (2,126 page views) during information foraging and page recognition, with fixations defined as gaze within a 50 pixel radius for at least 100 ms [@buscher2009what]. "The entire right side above the fold is neglected" for both task types: participants took about 3 seconds to fixate the three right-side regions in foraging tasks and about 2 seconds in recognition tasks, and the median fixation impact there was zero. The upper-left regions attracted the most attention; in the first second of foraging, center-left drew the most and earliest attention, and in recognition the top-left did. Element size had the highest information gain in predicting attention; their simple models reached a correlation of 0.50 with a regression and 0.69 combined with a classifier, and failed on unusual layouts such as pages with images far right [@buscher2009what].

Djamasbi, Siegel and Tullis tracked 19 employees of one company, aged 18 to 31, on six retail home pages chosen as the most and least liked from a survey, with fixations defined as gaze over 300 ms [@djamasbi2010generation]. The highest-rated pages produced focused hot spots near the center; the lowest-rated produced scattered fixation. Faces were fixated within the first two fixations when present; logos and top navigation within the first four; blocks of text were not fixated in the first few fixations on most pages; when a large main image was absent, long link lists attracted early fixations; and the area below the fold received little fixation. The study measured appeal, not comprehension, and its sample and page choice are narrow.

Pan and colleagues tracked 30 subjects on 22 pages from 11 sites and found that gender, viewing order and the interaction of order with site type affected scan paths, while task instructions did not; more complex pages produced more variation between viewers [@pan2004determinants]. Buscher and colleagues criticized the task manipulation as weak (remembering a page versus no task) and found task differences with stronger tasks [@buscher2009what].

The fixation definitions differ (100 ms in a 50 pixel radius against 300 ms), so the numbers cannot be compared directly [@holmqvist2011eye]. The directions agree: top and left draw early attention, the right side is slow to be looked at, size and faces attract, and complex pages scatter gaze.

::: {.rule #PER-054 grade="B"}
**Put the page's first instruction and its primary content in the upper-left to center-left of the main column, within the first screen.** The upper-left regions draw the most attention, center-left the earliest during foraging, and the right side above the fold is neglected for seconds [@buscher2009what; @djamasbi2010generation]. The evidence comes from a few modest studies of informational pages; it is consistent across them.

*In LTF:* on `LessonPage` the `article` is the center column, with `SectionNav` at left and the glossary rail at right from `xl`. The first instruction should be the first thing in the article after the title and meta row; the stack of banners and boxes in between (PER-015) pushes it down.
:::

::: {.rule #PER-055 grade="B"}
**Make the key diagram or instrument the largest element of its lesson section, and give each first screen one dominant element.** Element size was the strongest predictor of attention, and pages with a dominant focal point produced focused gaze while pages without one produced scattered fixation [@buscher2009what; @djamasbi2010generation]. The appeal study did not measure learning, so dominance is a layout rule, not a comprehension guarantee.

*In LTF:* a `WidgetFrame` should span the article width (800 px) rather than sit in a narrow column beside text. The landing hero splits 7/5 between headline and video at `lg`; decide which is dominant for the first-time visitor and size accordingly.
:::

::: {.rule #PER-056 grade="B"}
**Keep orientation elements (logo, page title, primary navigation) in the same expected place on every page.** Viewers fixate logos and top navigation early as orientation to expected structure, and recognition tasks draw attention to the top-left [@djamasbi2010generation; @buscher2009what].

*In LTF:* `Header` is consistent across `RootLayout` pages, but `FlyModeLayout` drops it, and the lesson, challenge, dashboard and reference pages place the h1 in different styles (PER-022). Keep the title in the same position and style within each layout tree.
:::

::: {.rule #PER-057 grade="B"}
**Use pictures of faces only where they direct attention toward the content, and keep them off instrument pages.** Faces are fixated within the first two fixations when present and take heavy attention [@djamasbi2010generation; @yarbus1967eye]; they compete with whatever else is on the screen.

*In LTF:* the product has no photos of people, which suits instrument lessons. If a future instructor photo or pilot illustration is added (for example to a landing redesign), place it so the gaze direction points at the headline or the button, and never in a lesson section that contains a widget.
:::

### Scanning patterns and the F

Nielsen's 2006 article reported that on text-heavy pages gaze often follows a rough F: a horizontal sweep across the top, a shorter sweep lower down, and a vertical scan down the left side, from an eye-tracking study of 232 users [@nielsen2006f]. Its recommendations: users do not read word by word, so put the most important information in the first two paragraphs and start subheads, paragraphs and bullets with information-carrying words, since the third word on a line is read much less often. The article itself calls the F "a rough, general shape" that varies with task. A 2019 Nielsen Norman Group follow-up by Kara Pernice, which updates that article, places the F among four patterns: the F (fixating line beginnings and the top, on pages without subheadings or bullets, the least effective), the spotted pattern (fixating standout or task-matching words such as links, bold words or digits), the layer-cake pattern (fixating mainly headings and subheadings, the most effective scanning method) and the commitment pattern (reading nearly everything, given high motivation, with the best comprehension and the longest time) [@nielsen2006f]. The pattern mirrors in right-to-left languages.

Buscher and colleagues note that such broad patterns lack quantitative analysis, though their own left-weighted data are compatible with the F [@buscher2009what]. The book-length study behind these articles covered about 1.5 million instances of users looking at sites over three years, but its data date from around 2005, it studied informational sites only, and it acknowledges little outside research [@nielsen2010eyetracking]. Use it for hypotheses.

::: myth
**"Users read in an F, so lay pages out along the F."** The F is an aggregate heat-map shape that appears on poorly structured text, and its own authors later rank it the least effective scanning pattern; structured pages with informative headings let readers use the more effective layer-cake pattern [@nielsen2006f]. The F is a symptom to design away, not a template.
:::

::: {.rule #PER-058 grade="B"}
**Write headings that carry the content of their section, and start paragraphs and list items with the key term, so learners can scan by headings.** Readers fixate line beginnings and headings; the layer-cake pattern, reading headings and subheadings, is the most effective scanning method, and it needs headings worth reading [@nielsen2006f]. The data are industry research, not peer reviewed, but the left-edge emphasis agrees with academic studies [@buscher2009what].

*In LTF:* lesson block headings in content Markdown should say what the section teaches ("Trim takes the pressure off the yoke"), not label it ("Trim"). `SectionNav` lists these headings, so informative headings also make the left rail a summary. The writing Part covers the copy itself.
:::

### The fold

Fessenden's 2018 analysis of over 130,000 fixations from 120 participants on 1920 by 1080 screens found that 57 percent of viewing time fell above the fold, down from 80 percent in a 2010 study on smaller screens, and 74 percent within the first two screenfuls [@fessenden2018scrolling]. On general pages over 42 percent of viewing time fell in the top 20 percent of the page. Users scroll, but attention stays concentrated near the top. The data concern casual browsing of public sites; committed learners working through a lesson probably behave differently, a gap the article does not address.

::: {.rule #PER-059 grade="B"}
**Put each lesson section's objective and any safety-relevant step at the start of the section, and keep the first screen of every page for what the learner came to do.** Attention concentrates at the top of pages and falls sharply below the first screen, even though users scroll [@fessenden2018scrolling; @djamasbi2010generation]. The data come from casual browsing; for committed learners treat them as a prior, not a limit.

*In LTF:* `Callout` type `safety` should open the section it applies to, not close it. On phones, where the lesson's mobile section `Select` is sticky at `top-16` under a 64 px header, the first screen is small; check that a lesson's first block, not only its banners, appears above the fold at 375 px width.
:::

### What this means for Learn to Fly

Keep the center-column lesson layout, the stated goal at the top of challenge and fly-mode pages, and the absence of decorative faces.

Change the top of `LessonPage` so that the first instruction is reached within the first screen (PER-054, PER-059): merge or demote the boxes above the first block. Change lesson authoring guidance so that headings carry content and paragraphs start with the key term (PER-058), and so that each block that uses a widget states the task before the widget (PER-052). Give widgets the full article width (PER-055).

Do not import page-level percentages as targets. They come from casual browsing of informational sites with dated pages and differing fixation definitions [@nielsen2010eyetracking; @holmqvist2011eye]. Build a small, task-scripted test instead: five learners asked to find the next lesson, read a speed from `SpeedsPage` and start a challenge, timed and observed.

## Banner blindness and the cost of the periphery

### The irony of attention grabbing

Designers make important links distinctive, often as banners, to draw attention to them. Benway found the opposite effect when people were looking for something specific: they overlooked precisely the distinctive items [@benway1998banner]. The abstract states the irony directly: "the user who really wants to find the information the designer has highlighted is not likely to do so." It reports three findings: banners higher on the page, and therefore further from the other links, were missed more often than banners lower and closer to the links; banners were missed more often on pages of category links than on pages of specific item links; and users saw banners "hardly at all" when clicking one was not required for their task [@benway1998banner]. Only the abstract was available, so no sample sizes are given.

Nielsen Norman Group reported in 2018, in an industry article by Kara Pernice that updates this line of work, that the effect persisted in a new study with 26 participants; on one page, 148 fixations fell on the content area and one, about 0.8 percent, in the right rail. Pernice names three traits that signal an ad: placement (top banner, right rail), ad-like treatment such as animation, and proximity to ads; useful sections were ignored because they looked promotional [@benway1998banner]. That article is not peer reviewed.

### Ignored, but not free

Burke, Hornof, Nilsen and Gorman resolved the contradiction between "people ignore ads" and "ads distract people" [@burke2005highcost]. In their first experiment, participants searched for short words with two banners on screen: animated commercial, static commercial, cyan with flashing large text, or blank. Mean search times did not differ significantly across banner types (about 4.8 to 5.8 seconds), but flashing-text banners produced the highest workload on the NASA Task Load Index, F(3, 36) = 6.52, p < .001, with a mean of 160.71 against 121.44 for animated, 107.83 for static and 110.54 for blank, and were rated more frustrating and demanding. A target sandwiched between two flashing-text banners took on average 75 percent (4.3 seconds) longer to find [@burke2005highcost].

In the second experiment, 24 participants searched news headlines while their eyes were tracked. Both animated and static commercial banners slowed search. Participants looked at a banner in 11.7 percent of trials regardless of type, with gray rectangles (8.8 percent) almost as likely to be fixated as static (13.0) or animated (13.2) banners; 70 percent of those looks were on the first eye movement. Of 164 banners correctly "remembered", only 10 had been directly looked at, so 93.9 percent of the remembered banners had never been fixated; given high false-alarm rates, the authors read this as luck, and animated banners were recognized no better than chance [@burke2005highcost]. In the abstract's words, "animated banners are more difficult to remember than static look-alikes."

The numbers come from the submitted author manuscript and student samples in stylized layouts. They qualify the word "blind": people rarely look at banners, but banners still cost time and effort, plausibly through peripheral processing. Burke and colleagues also note studies finding that people do notice ads, dislike them, and judge the site less credible [@burke2005highcost].

::: {.rule #PER-060 grade="B"}
**Never put essential, instructional or safety content in a banner-shaped strip, a promotional-looking box, or a right rail.** Goal-directed users rarely fixate banner-like regions, miss distinctive items that resemble promotions, and skip right-rail content [@benway1998banner; @burke2005highcost; @buscher2009what]. The evidence is a few laboratory studies plus industry research; the direction is consistent.

*In LTF:* the `UnverifiedWarning` on draft lessons and the `verify` callout carry information a learner must not miss; they must look like lesson content, in the article's reading line, not like the `BetaBanner` strip or the `SignupBanner`. The `SignupBanner` is fine as a skippable prompt precisely because nothing essential is in it.
:::

::: {.rule #PER-061 grade="B"}
**Keep primary calls to action inside the flow of the main content and close to related links, not above or beside it.** Banners far from the other links were missed more often than banners close to them [@benway1998banner].

*In LTF:* the lesson's "Mark lesson complete" button sits in a completion panel at the end of the article, followed by prev/next cards, in the reading flow, which is right. The `DashboardPage` Continue card is first in the main column, also right. Do not move either into a sidebar or a top strip.
:::

::: {.rule #PER-062 grade="B"}
**Never use blinking or flashing text, and put no looping animation next to content the learner must read or find.** Flashing-text banners produced the highest workload and slowed search for a target between them by about three quarters; animated banners were remembered no better than chance [@burke2005highcost]. WCAG 2.2 separately limits flashing to three times in any second and requires a pause control for automatic motion lasting more than five seconds beside other content [@w3c2024wcag].

*In LTF:* the `shimmer` skeleton animation (1.4 s, infinite) is acceptable only while content loads. The `warning-pulse` on the random-event alert is a ring that expands, never the text, and it runs under `motion-safe`, which fits; but it is infinite, so keep the alert dismissible ("Got it") and check that it does not continue while the learner reads the step list below it.
:::

::: {.rule #PER-063 grade="B"}
**Do not animate content to make it memorable; repeat it as static text in the reading line and check recall.** Animated banners were recognized no better than chance and worse than static look-alikes [@burke2005highcost]. Motion buys a glance at most, not memory.

*In LTF:* lesson key facts drawn from `{{vspeed.*}}` and `{{aircraft.*}}` tokens belong in static text, in a `KeyNumbers` panel or a `memory` callout, and in a `QuizBlock` that asks for them, not in an animated reveal.
:::

::: {.rule #PER-064 grade="B"}
**Count every promotional or peripheral element beside task content as a cost, even if nobody looks at it, and remove such elements from task-critical screens.** Banners slowed search and raised perceived workload without being fixated [@burke2005highcost]. Peripheral processing taxes the task even when gaze stays on it.

*In LTF:* `FlyModeLayout` shows the `BetaBanner`; `FlyModePage` has no other chrome. Remove the banner from fly mode (also PER-046). On `LessonPage`, the `SignupBanner` and any future announcement ribbon should never sit between the objectives and the first block.
:::

### The right rail and the edges

The right side of the page is the region the eye-tracking studies agree on most. Buscher and colleagues found it neglected above the fold, taking seconds to be fixated [@buscher2009what]; the industry book reports promotional content in a right column receiving little or no attention [@nielsen2010eyetracking]; Pernice's banner data show right-rail fixations near zero [@benway1998banner]. Two qualifications matter for LTF. First, task overrides layout: a learner who goes to a right-hand panel to look something up will find it, because gaze follows the task [@tatler2011eye]. Second, toasts and status messages that appear in a corner are both peripheral and transient, a combination the next chapter shows is easily missed.

::: {.rule #PER-065 grade="B"}
**Use the right rail only for reference material a learner goes looking for, and duplicate anything needed for the lesson in the main column.** The right side above the fold is neglected during foraging and recognition, while task-directed lookups still find what they seek [@buscher2009what; @tatler2011eye]. The rule depends on that distinction between material that must be met and material that is sought.

*In LTF:* the glossary rail ("Terms in this lesson", `xl+`, 280 px) is sought-for reference, which suits the right side; it is also repeated as chips below `xl`. The `KeyNumbers large` panel on `SpeedsPage` sits sticky at right in a page whose task is lookup, which is acceptable. A safety note or a prerequisite must never live only in a right rail.
:::

::: {.rule #PER-066 grade="B"}
**Show errors and outcomes of the learner's action next to the control that caused them, and use corner toasts only as a second channel.** Peripheral, banner-like regions are rarely fixated during a task [@burke2005highcost; @buscher2009what], and a message there may be missed.

*In LTF:* `Toast` appears bottom-right at 360 px; success and info toasts auto-dismiss at 6 s. For a saved debrief or a failed save in `DebriefForm`, show the state inline beside the submit button ("Not saved" already exists as inline copy) and treat the toast as confirmation only. Errors already persist and use `role="alert"`, which is right.
:::

### What this means for Learn to Fly

Keep the in-flow placement of "Mark lesson complete" and the Continue card, the inline `ErrorSummary` in forms, the persistent error toasts, and the honest, skippable `BetaBanner` and `SignupBanner`; both are fine precisely because nothing essential lives in them.

Change the fly-mode chrome: no `BetaBanner` during flight (PER-064). Check that `UnverifiedWarning` and `verify` callouts are styled as content in the reading line rather than as banners (PER-060). Pair corner toasts with inline state for actions whose outcome matters (PER-066).

Keep `prefers-reduced-motion` handling and the `motion-safe` prefixes, and add a rule to the component checklist that no text ever blinks and no loop runs next to task content (PER-062). The motion Part covers durations and easing; the accessibility Part covers the WCAG criteria in full.

## Seeing change and noticing the unexpected

### Change blindness

Rensink, O'Regan and Clark showed that large, obvious changes in real-world pictures become very hard to find when the brief motion signal that normally accompanies a change is masked [@rensink1997see]. In their flicker paradigm, an original image and a modified image alternate, each shown for 240 ms with an 80 ms blank between, until the observer reports the change. Forty-eight color scenes were used, each with one change of color, location or presence, and ten naive observers took part in each experiment. Changes to parts of "marginal interest" (mentioned by none of five describers) needed an average of 17.1 alternations (10.9 s) to be identified, and for some images more than 80 alternations (50 s); changes to parts of "central interest" took 7.3 alternations (4.7 s). Without the blanks, identification took 1.4 alternations (0.9 s) with no interest difference, which shows the changes were easy to see when the motion signal was intact. A valid verbal cue made identification much faster [@rensink1997see].

The authors' conclusion is that people "never form a complete, detailed representation of their surroundings", and that seeing a change requires focused attention on the part that changes [@rensink1997see]. The manipulation is artificial, since in ordinary viewing a local motion transient draws attention to a change; that is precisely the point for interfaces, which routinely mask transients with re-renders, page transitions, scrolls and modal openings. Healey and Enns add that changes that do not alter the gist of a scene are the most likely to be missed, and that large multi-monitor displays make change blindness worse than small screens [@healey2012attention].

::: {.rule #PER-067 grade="A"}
**Mark every state change that matters with a brief local transient at the changed element, followed by a persistent marker and a word.** When the motion transient that accompanies a change is masked, even large changes take many seconds to find; with the transient intact they are found almost at once [@rensink1997see]. Change blindness is heavily replicated [@healey2012attention]. The transient restores the attention signal; the persistent marker covers a learner who was looking at the sim when it happened.

*In LTF:* when a `FlyPanel` step is ticked, the row changes to `border-go bg-go-tint`; that is a persistent marker, and the checkbox change is local. When a `ResultView` tier appears, `tier-pop` (400 ms) plus the `TierBadge` word does both. In widgets, when a mode or value changes as the result of the learner's input, flash the changed element briefly (a color or opacity change, which WCAG does not count as motion) and leave a label.
:::

::: {.rule #PER-068 grade="B"}
**Never change important content at the same moment as a page transition, re-render, scroll jump or dialog opening.** A global visual disruption masks the local transient that would draw attention to a change [@rensink1997see]. Changes made during a transient are likely to be missed.

*In LTF:* the random-event alert in `FlyPanel` is inserted at the top of the panel, which pushes the step list down as it appears. On the large fly-mode layout the steps move under the learner's returning glance at the same moment the alert appears. Reserve the alert's space (or overlay it without shifting the steps) so that the only change on screen is the alert.
:::

::: {.rule #PER-069 grade="B"}
**Say in words what changed, beside the place where it changed.** A valid verbal cue made change identification much faster, ruling out poor visibility as the cause of the delay [@rensink1997see].

*In LTF:* after a quiz answer, `QuizBlock` shows "Correct!" or "Not quite." plus an explanation next to the button, which is right. Extend the habit to widgets: when the learner moves a slider in `pitch-power` and a derived value changes, a short live caption ("Speed decreasing") beside the drawing names the change.
:::

### Inattentional blindness

Simons and Chabris showed that people can fail to see a clearly visible, unexpected object when their attention is occupied, even when it crosses the middle of the scene for several seconds [@simons1999gorillas]. Observers counted passes by one team in a video of two teams passing basketballs; an unexpected person (a woman with an umbrella, or a person in a gorilla suit) crossed the scene. From the abstract, noticing depended on the similarity of the unexpected object to the attended objects and on the difficulty of the counting task, and spatial proximity to the attended locations did not affect detection, which suggests "observers attend to objects and events, not spatial positions" [@simons1999gorillas]. In the condition where the gorilla stopped, faced the camera and thumped its chest, only half of observers noticed it, while about 90 percent of people predict they would.

A later study with a new video, 76 people at a student union, found that all 23 viewers who knew the original video noticed the gorilla, against 56 percent (23 of 41) of those who did not; but a curtain color change and a player leaving were noticed by only 11 and 16 percent, and knowing about the gorilla gave no significant help in spotting the other surprises [@simons1999gorillas]. The 50 percent figure belongs to one video and one task; the effect shows failure to notice, not a defective visual system.

::: {.rule #PER-070 grade="B"}
**Assume a learner busy with a demanding task will miss an unexpected notice, however large; make critical alerts redundant across senses and require an acknowledgment.** Visible unexpected events go unnoticed under load, more so when the task is harder, and knowing about the effect does not protect against new surprises [@simons1999gorillas].

*In LTF:* the `FlyPanel` random-event alert combines a beep (Web Audio), a 4 px `border-warn` box, `role="alert"` and a "Got it" button, which satisfies the rule. Keep the beep when audio is available, say on the Brief tab that a beep means "look at the screen", and record whether the learner acknowledged it, which the flight state already stores as `randomEventsFired`.
:::

::: {.rule #PER-071 grade="B"}
**Style a notice the learner must see like the content they are attending to, and place it in the line of that content, not in the chrome.** The more similar an unexpected object is to what is being attended, the more likely it is to be noticed; attention goes to objects and events rather than positions [@simons1999gorillas]. A warning styled like peripheral chrome is styled to be ignored.

*In LTF:* in `FlyPanel` the alert sits in the panel at the size of the steps (`text-3xl` label in the large variant), which follows this rule. A `safety` `Callout` in a lesson should look like part of the lesson text column at full width, not like a banner or a side note.
:::

### Cueing: where attention goes before the eyes

Posner showed that attention can be directed to a location without moving the eyes, with measurable benefits when it points the right way and costs when it points the wrong way [@posner1980orienting]. In the cueing paradigm the observer fixates between two boxes, a cue appears, then a target appears in one box after a variable interval. A central symbolic cue such as an arrow demands voluntary orienting and takes a few hundred milliseconds to work; a peripheral cue such as a flash at the location produces involuntary orienting quickly but briefly. Posner's original studies used cues that were valid 80 percent of the time, so observers learned to follow them; a neutral baseline separates the benefit at the cued place from the cost at the uncued place. In later experiments with arrow cues 80 percent predictive, voluntary cueing effects for short targets appeared only at intervals of 300 ms or more, and effects at very short intervals were attributed to cue-target conflict rather than attention [@posner1980orienting]. The saliency model's inhibition of a just-attended region for about 500 to 900 ms draws on Posner's later work on inhibition of return [@itti1998model].

The cueing advantage is replicated many times. The design consequences are about validity and timing.

::: {.rule #PER-072 grade="A"}
**Keep every attention cue valid: remove a highlight the moment its step is done, and never leave emphasis on something that no longer matters.** Valid cues speed detection at the cued place and invalid cues slow it elsewhere; observers follow cues that are usually right and learn to discount those that are not [@posner1980orienting]. The cueing effect is among the most replicated in attention research.

*In LTF:* the `SectionNav` active item follows scroll-spy, so it stays valid. The resume bar on `LessonPage` should disappear once the learner has reached the resumed section. In widgets that highlight a part during a guided explanation, clear the highlight when the explanation moves on.
:::

::: {.rule #PER-073 grade="B"}
**Use an onset or flash at the target location for alerts that must be seen at once, and symbolic cues (arrows, words) for guided reading; let the cue come before the thing it points to.** Peripheral onsets orient attention quickly but briefly; symbolic cues take a few hundred milliseconds to work [@posner1980orienting]. Flashing must still stay within the WCAG limits on flash frequency [@w3c2024wcag].

*In LTF:* the random-event alert appearing in place, with a beep, is an onset cue; good. In lessons, a widget explanation that says "Look at the turn coordinator" should highlight the instrument before revealing the question, not after.
:::

::: {.rule #PER-074 grade="B"}
**Do not equate "was on screen" with "was attended": when a point matters, ask the learner for a response.** Attention can be directed away from where the eyes point [@posner1980orienting], and visible information is missed without focused attention [@rensink1997see; @simons1999gorillas].

*In LTF:* the `QuizBlock` after a key section is the response that confirms attention; place one after each section that introduces a safety-relevant concept, rather than relying on a `Callout` having been on screen.
:::

### What this means for Learn to Fly

Keep the `FlyPanel` alert's redundancy (beep, border, role, acknowledgment), the `QuizBlock` inline result, the persistent tick state on steps and the scroll-spy `SectionNav`; each already follows the change and cueing findings.

Change the alert's insertion so that it does not shift the step list (PER-068), and add a brief transient to widget state changes driven by the learner (PER-067, PER-069). Clear the resume bar once it has served its purpose (PER-072).

Build a "did they notice" check into challenge design. When a challenge has a random event, the Debrief can ask what happened and when, which turns the event into a measure of attention rather than an assumption. The skill and cockpit Part covers teaching a scheduled scan; this chapter's evidence is the reason not to rely on chance noticing in its place (PER-070).

## Capacity and divided attention at the second screen

### Attention as limited capacity

Kahneman proposed that attention is best understood as a limited pool of capacity allocated among concurrent activities, not a single bottleneck that passes one input at a time [@kahneman1973attention]. The effort a person invests is tied to the demands of the activity, to arousal, and to an allocation policy shaped by momentary intentions and enduring dispositions. Time pressure is an important determinant of effort, and novel stimuli produce a surge of it. His main physiological index was pupil dilation, which tracked mental work in the research he reviewed [@kahneman1973attention].

The capacity view has been criticized. A 2018 reappraisal argues that "effort" is never operationally defined, that pupil responses decrease with practice on demanding tasks even while demands are met, and that the evidence leans on laboratory tasks with forced attention; capacity thinking was later developed into multiple-resource models [@kahneman1973attention; @wickens2003attentional]. The book was read here only through a catalog record and that critical review. The parts that survive for design are modest and useful: capacity is limited, it is directed by the current intention, time pressure and novelty raise its cost.

A beginner in LTF is the extreme case. The sim controls, the vocabulary and the instruments are all unfamiliar, so most of their capacity is already committed before the web page asks for any.

::: {.rule #PER-075 grade="B"}
**Give each screen one primary next action and state it plainly; make every other action visibly secondary.** Capacity is allocated by the current intention, so a page that states the single next step lets the learner commit to it, and several equal calls to action leave the allocation undecided [@kahneman1973attention]. The rule is a design inference from a contested but influential theory.

*In LTF:* the landing hero has a primary ink "Start lesson 0.1" and a secondary "See the curriculum", which is right. On `ChallengePage` the Brief tab ends with one large "I'm set up, start flying". The lesson completion panel offers "Mark lesson complete" as large; keep prev/next cards visibly secondary to it.
:::

::: {.rule #PER-076 grade="B"}
**Use no countdowns, urgency copy or ticking timers unless time pressure is the skill being practised.** Time pressure raises effort and taxes capacity the learner needs for the primary task [@kahneman1973attention].

*In LTF:* the `Stopwatch` is labeled "Timer (optional)" and counts up, which suits the rule. Keep it optional; do not add countdowns to quizzes or challenges, and keep any future streak or deadline copy out of lesson and fly-mode pages. The motivation Part treats streaks on their own terms.
:::

::: {.rule #PER-077 grade="C"}
**Keep persistent page chrome calm and unchanging, and reserve novelty for the content that matters.** Novel stimuli produce a surge of effort [@kahneman1973attention]; chrome that changes or announces itself spends that effort on nothing.

*In LTF:* the header, footer and `ThemeToggle` are stable; keep any future "what's new" badges, rotating tips or announcement ribbons out of `RootLayout` pages that hold lessons.
:::

### Multitask pilots and the expected-value model

Wickens and colleagues studied instrument-rated pilots in a high-fidelity simulation who flew, monitored for traffic and read back messages while air traffic control information arrived either by voice or on displays (a traffic display and a data-link display), alone or redundantly [@wickens2003attentional]. With 12 pilots, the data suggested a modest cost for visual presentation over auditory, mediated by head-down visual scanning, and no benefit for redundant presentation in those tasks. Pilots' visual scanning in all conditions was fit by an expected-value model of selective attention that accounted for 94 percent of the variance in the scanning data, and 90 percent in a validation experiment. The unit of those variance figures could not be confirmed from the abstract [@wickens2003attentional].

The model became SEEV: the probability of looking at an area depends on its salience (physical properties of events), the effort to reach it (distance from the previous fixation, demands of concurrent tasks), the expectancy of information there (event rate or bandwidth) and its value (the reward for processing it or the cost of missing it) [@wickens2003attentional]. A later review of driver attention models reports that expectancy and value were the dominant terms in driving experiments and that predicted dwell times correlated highly with observed ones; it also lists limits: SEEV computes cumulative gaze per area rather than moment-to-moment switching, its parameters were set from assumptions that proved hard to establish in less structured settings, and it failed to reproduce one asymmetry in a lane-change task [@wickens2003attentional].

For LTF the important points are that top-down terms dominate (people look where information changes and matters), that effort counts (distant information is looked at less), and that head-down time has a cost. Which aircraft instruments belong in which area, and how often each changes, is aircraft knowledge that must come from approved sources, not from this model.

::: {.rule #PER-078 grade="B"}
**Place the information a learner checks most often and most needs where reaching it takes the least effort, and keep items used together side by side.** Scanning is well predicted by expectancy and value, with effort (distance and competing demands) reducing looks [@wickens2003attentional; @wickens1995proximity]. The model was fit to pilots and drivers; applying it to a second-screen web view is an inference.

*In LTF:* in `FlyModePage` the step list is the high-value, frequently checked item and the stopwatch the low-value one; the current layout puts title, goal and banner first. Order the fly-mode view by value: current step, next step, alert space, then timer and controls.
:::

::: {.rule #PER-079 grade="B"}
**Make every glance at the second screen short: one fact or one step per look, in large type, with nothing to read past.** Head-down visual scanning carried a measurable cost for pilots compared with voice delivery [@wickens2003attentional], and a learner's capacity during flight is already committed [@kahneman1973attention]. The modality finding was specific to the tested tasks, so it supports brevity rather than a switch to audio everywhere.

*In LTF:* `FlyPanel large` shows each step at `text-xl` with a number; step copy authored for challenges should be one action per step, short enough to read in one glance. The timer help sentence ("Start the timer when you unpause...") belongs on the Brief tab, not in the large fly-mode panel.
:::

::: {.rule #PER-080 grade="C"}
**Give fly mode a fixed layout in which each recurring question has one location, and never reflow it during a flight.** Displays are queried by eye movements and the learner's scan becomes routine only if locations stay put; effort rises when the eye must search [@ware2008visual; @wickens2003attentional]. This is synthesis guidance.

*In LTF:* as well as reserving space for the alert (PER-068), keep step rows at a fixed height so that ticking one (which changes border and fill) never moves the others, and keep the stopwatch in the same corner across challenges.
:::

### Measuring attention honestly

Holmqvist and colleagues' methods textbook argues that eye-tracking results depend on choices that are often left unstated: hardware, calibration, how raw samples become fixations and saccades, and how measures are defined [@holmqvist2011eye]. The studies in this Part illustrate the point. Buscher and colleagues counted a fixation after gaze stayed within 50 pixels for at least 100 ms, using a 50 Hz tracker with 0.5 degree accuracy [@buscher2009what]; Djamasbi and colleagues defined a fixation as gaze longer than 300 ms [@djamasbi2010generation]; Greene and colleagues used 1000 Hz and required calibration error of 1 degree or less [@greene2012reconsidering]. Counts, durations and heat maps change with such choices.

The broader limit is that gaze shows where the eye points, not what is processed. Most "remembered" banners had never been fixated [@burke2005highcost]; looking does not guarantee seeing [@rensink1997see; @simons1999gorillas]; and the task cannot be read reliably from summary gaze statistics [@greene2012reconsidering]. Heat maps aggregate across people and tasks and hide the individual variation Pan and colleagues found [@pan2004determinants].

::: {.rule #PER-081 grade="C"}
**Before trusting any gaze or attention result, write down the tracker, sampling rate, accuracy, calibration, fixation definition, tasks and participants; prefer task success, time on step and errors as primary measures.** Eye-tracking numbers depend on methodological choices that differ across studies [@holmqvist2011eye; @buscher2009what; @djamasbi2010generation]. This is methodological consensus.

*In LTF:* if LTF runs a webcam or lab gaze study, attach the method record to the report in `docs/`. For routine design questions, a timed task script with a handful of learners (find the next lesson, read a speed on `SpeedsPage`, start a challenge) answers more for less.
:::

::: {.rule #PER-082 grade="B"}
**Do not treat gaze, dwell time or "time on page" as evidence of understanding; ask for a response when understanding matters.** Fixation does not equal attention or memory: unfixated items are reported, fixated changes are missed, and intent cannot be decoded from gaze summaries [@burke2005highcost; @rensink1997see; @greene2012reconsidering].

*In LTF:* lesson completion is self-reported with "Mark lesson complete" after "Finished reading and trying the questions?"; that is honest. Do not add analytics that infer comprehension from scroll depth or dwell; use `QuizBlock` answers and challenge results.
:::

::: {.rule #PER-083 grade="C"}
**Label any "where to look" overlay in an instrument lesson as a teaching device unless it comes from documented expert gaze data.** Gaze patterns depend on task, method and person, and an invented scan path presented as measured would claim evidence it does not have [@holmqvist2011eye; @pan2004determinants].

*In LTF:* if a widget or lesson adds an animated scan sequence over the `g1000-pfd`, caption it as a suggested order from the lesson's sources, with the `verify` callout process applying to the order itself as an aviation procedure.
:::

### What this means for Learn to Fly

Keep the optional, count-up `Stopwatch`, the single primary action on each challenge tab, the large type of `FlyPanel large`, and the self-reported lesson completion.

Change the order of `FlyModePage` by value (PER-078): a compact title, then the current step, the next steps, reserved alert space, then timer and controls, with the `BetaBanner` removed and the goal on one line. Move explanatory sentences out of the large panel (PER-079). Fix row heights and alert space so that nothing reflows during a flight (PER-080).

Change step authoring for challenges: one action per step, short enough for one glance (PER-079). The challenge content guidance in `content/README.md` is the place for this, and the instructional design Part covers how steps are sequenced.

Build a lightweight attention-measurement habit rather than an eye-tracking program: task scripts and timing with real learners (PER-081), and responses rather than dwell as the evidence of understanding (PER-082).

## Decision list and review checklist

### Decisions this Part settles for Learn to Fly

1. **Grouping cues agree.** Every component's spacing, enclosure and style must say the same thing about what belongs together; conflicts are fixed by changing the weaker cue (PER-001, PER-013).
2. **Spacing is a set of ratios.** The design system defines inner, between-group and between-section gaps as named relations with at least a 1.5 ratio between neighbors, well above it in text, and labels sit nearer their targets than anything else (PER-007, PER-008, PER-009, PER-010).
3. **Cards are for objects.** `Card` and its inlined copies are used for things that are objects (a challenge, a widget, a quiz), list-like content uses spaced rows with a rule, nesting stops at two levels, and every card is glance-tested in both themes (PER-014, PER-015, PER-016).
4. **The top of `LessonPage` is simplified.** The resume bar and objectives card merge when both apply, the sign-up prompt is visually lighter than either, and the first instruction appears within the first screen (PER-015, PER-045, PER-054, PER-059).
5. **One heading system.** All h1 and h2 elements use the `display-*` and `heading-*` utilities; the hard-coded `text-2xl font-bold` and `text-3xl font-bold` headings go (PER-022, PER-056).
6. **Widgets are specified before they are drawn.** Each widget has a computational sentence and a list of visual queries in its authoring notes; the key answer is an emergent or topological feature; every integrated display has a plain readout; widgets stay flat (PER-003, PER-029, PER-030, PER-033, PER-034, PER-035).
7. **Widgets get leader lines and clearance.** `shared/svg.tsx` gains a connector for `Label`, and each widget passes a crowding check at its smallest size (PER-011, PER-017).
8. **Status hues mean status.** `go`, `caution` and `warn` and their tints are used only for status, safety, decision and verification; `Callout` types "Pro tip", "Classic panel", "Sim vs reality" and "Memory item" move to neutral fills with icon and title; the landing play disc leaves `bg-warn` (PER-038, PER-039, PER-044, PER-051).
9. **One focal point per region.** Each screen region has one salient element; ordinary items, such as challenge card meta rows, are neutral so that exceptions pop (PER-037, PER-045, PER-048).
10. **The current step is the singleton.** In `FlyPanel` the step to do now carries its own strong cue, and ticked steps recede (PER-036, PER-041).
11. **Fly mode is ordered by value and never reflows.** Compact title, current step, next steps, reserved alert space, then timer and controls; no `BetaBanner`; no explanatory paragraphs; fixed row heights (PER-012, PER-042, PER-046, PER-064, PER-068, PER-078, PER-079, PER-080).
12. **Alerts are redundant and acknowledged.** Rare, critical alerts combine sound, a strong border, a role and an acknowledgment, appear without moving other content, and are styled like the content being attended (PER-041, PER-068, PER-070, PER-071).
13. **Changes are marked.** Every meaningful state change gets a local transient, a persistent marker and a word; cues are cleared when they stop being valid (PER-067, PER-069, PER-072).
14. **Essential content is never banner-like.** Unverified and verify warnings, safety notes and prerequisites live in the article's reading line, never in a strip, promo box or right rail; toasts are a second channel only (PER-060, PER-065, PER-066).
15. **No blinking, no ambient loops near tasks, no countdowns.** Static emphasis replaces animation for memory, and time pressure is used only when it is the skill (PER-062, PER-063, PER-076).
16. **Task first.** Lesson blocks state the task before the display; headings carry content; safety callouts open their sections (PER-052, PER-058, PER-059).
17. **Evidence about attention comes from tasks, not heat maps.** Saliency tools are conspicuity checks only; gaze studies carry a method record; comprehension is measured by responses (PER-047, PER-081, PER-082).

### Review checklist

Run these questions against a pull request or a page. Each names the rules that decide it.

**Grouping and spacing**

- Do spacing, borders and type style on each component agree about what belongs together? (PER-001, PER-013)
- Is every gap between groups at least 1.5 times the gap within them, and much more in text? (PER-007, PER-009)
- Is every label closer to its target than to any neighbor? (PER-008)
- Does each heading sit closer to the text it introduces than to the text before it? (PER-010)
- In widgets, do numerals and readouts have clearance from each other and from needles at the smallest size? (PER-011)
- Is any card nested more than two deep, or used for list-like content that could be spaced rows? (PER-015, PER-016)
- Do cards still read as surfaces at a glance in Day and Night? (PER-014)
- Are labels on diagrams joined to their parts by leader lines, and do any lines accidentally join unrelated items? (PER-017, PER-018)
- Are fills that must read as one object uniform, with no gradient or texture? (PER-019)
- Does a needed figure have several figure cues, not just shape? (PER-020)

**Similarity and integrated displays**

- Do elements of the same kind look identical across pages, including headings? (PER-022)
- Is hue reserved for the most important attribute, with no decorative hue on displays that encode size or length? (PER-023)
- Is any critical difference carried only by texture arrangement? (PER-024, PER-025)
- Does a set of values meant to be read together use similar marks on one scale, and is any critical outlier marked separately? (PER-026, PER-027)
- For a widget: is the computational sentence written, are the visual queries listed, is the key answer an emergent or topological feature, and is there a plain readout? (PER-003, PER-029, PER-030, PER-033, PER-034)
- Are values compared in one step placed together, and values read alone separated? (PER-032)
- Do decorative marks create accidental alignments or shapes? (PER-002)
- Does the page give both a whole-level summary and labeled parts? (PER-031)

**Search, capture and clutter**

- Does each thing the learner must find differ from its neighbors in one strong feature (color, size, orientation)? (PER-036)
- Are ordinary items uniform, so that exceptions pop? (PER-037)
- Are state differences categorical (different hue families, large angles) and separable from ordinary colors? (PER-038, PER-039)
- Does anything rely on an icon's meaning alone to be noticed? (PER-040)
- Do rare, critical states have a louder, redundant signal? (PER-041)
- Is the item needed in a glance where the glance lands, in a stable place? (PER-042)
- Has findability been checked by timing a search at more than one set size? (PER-043)
- Is `warn` (or any loud treatment) used for anything other than a warning, a destructive action or a limit? (PER-044)
- Does each region have one focal point? Is anything decorative more conspicuous than it? (PER-045, PER-048)
- Is a distractor being handled by an instruction to ignore it instead of being removed? (PER-046)
- Is a saliency heat map being used as evidence of gaze? (PER-047)
- If a warning appeared on this screen now, would it stand out? (PER-049)
- Are status tints used only for status? (PER-051)

**Page-level gaze and the periphery**

- Is the task stated before the display it applies to? (PER-052)
- Is information placed where the next action happens? (PER-053)
- Are the first instruction and the primary content upper-left to center-left in the main column, within the first screen? (PER-054, PER-059)
- Is the key diagram the largest element of its section? (PER-055)
- Are logo, title and navigation in their expected places and styles? (PER-056)
- Do any faces compete with instrument content? (PER-057)
- Do headings carry content and lines begin with the key term? (PER-058)
- Is any essential, instructional or safety content in a banner-shaped strip, a promo-styled box or a right rail? (PER-060, PER-065)
- Are primary calls to action in the flow of the content? (PER-061)
- Does anything blink, flash or loop beside task content, or animate to be remembered? (PER-062, PER-063)
- Does a task-critical screen carry promotional or peripheral elements? (PER-064)
- Are outcomes shown beside the control that caused them, with toasts as a second channel? (PER-066)

**Change, alerts and capacity**

- Does every meaningful state change have a local transient, a persistent marker and a word? (PER-067, PER-069)
- Does any important change coincide with a re-render, transition, scroll jump or layout shift? (PER-068)
- Are critical alerts redundant across senses, acknowledged and styled like the attended content? (PER-070, PER-071)
- Are highlights and cues removed as soon as they stop being valid, and do cues come before their targets? (PER-072, PER-073)
- Where a point matters, does the page ask for a response instead of assuming it was seen? (PER-074)
- Does each screen have one primary next action? (PER-075)
- Is there any countdown or urgency copy that is not the skill being practised? (PER-076)
- Is persistent chrome calm, with novelty reserved for content? (PER-077)
- In fly mode: is content ordered by value, one fact or step per glance, with a fixed layout that never reflows? (PER-078, PER-079, PER-080)
- Do review claims about attention rest on task measures with a written method, not on gaze or dwell alone? (PER-081, PER-082, PER-083)
- Are the page's grouping and accent weight checked in both themes? (PER-006)
- Do interactive elements have signifiers and read-only displays look read-only? (PER-004)
- Does a lesson that introduces a visual idea show it before naming it? (PER-005)
- Are widget changes from live input smoothed, and are glance views sparse? (PER-028, PER-012)
- Do safety and verification notes look like lesson content? (PER-060, PER-071)
- Are clutter scores tracked as a signal rather than a gate? (PER-050)
- Does any instrument scan overlay claim to be measured expert gaze without data? (PER-083)
- Is a plain spacing relation used for headings on app pages? (PER-010)
- Are the rules for the fly-mode alert and the step list kept together when either changes? (PER-036, PER-068)
- Are the grouping cue checks repeated when a component is copied inline instead of using `Card`? (PER-001, PER-016)
- Is the right rail used only for sought-for reference? (PER-065)
- Is a texture or hatch checked at the smallest rendered size? (PER-024)
- Are negative spaces between page zones wider than gaps within zones? (PER-021)
:::
