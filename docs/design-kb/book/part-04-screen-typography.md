# Typography on Screens

This Part covers what changes when type is set for a screen rather than a page: the comprehension cost of the medium, size as a visual angle that depends on viewing distance, relative units and the reader's control over size, the measure as the browser actually computes it, rendering and anti-aliasing, choosing faces for screen letterforms, loading web fonts, variable axes and weights, numerals and tables, type scales, and polarity in dark themes. Each chapter applies the material to the Learn to Fly (LTF) client as the code stands: Instrument Sans and JetBrains Mono, the `display-*`, `heading-*`, `body-*` and `readout-*` utilities in `src/styles/index.css`, `container-measure`, `LessonPage`, `MarkdownContent`, `FlyModePage`, the widgets, and the Day and Night themes. Where a figure about LTF comes from a measurement made for this Part (the font files' metrics, contrast ratios computed from the tokens, rendered sizes worked out from the code), the text says so.

The evidence is uneven. The size findings (critical print size and the fluent range) rest on a long, consistent line of vision science, and the paper-versus-screen comprehension gap rests on a meta-analysis; both earn strong grades. Line length on screens, rendering technology and typeface choice rest on small, often confounded studies with displays that no longer exist, and the rules drawn from them are graded B or lower. Loading, units, numerals and scales rest on standards and craft authority (grade C), which tell you what the browser will do and what careful practitioners do, not what readers measurably gain. Use the rules as defaults to keep unless LTF's own tests show otherwise, and use the review checklist in the last chapter against pull requests that touch type.

## Reading from screens: what the medium costs

### The original deficit was image quality

By the mid-1980s it was an established finding that people read more slowly from screens than from paper, and many designers took that to be a property of the technology. Gould and colleagues at IBM Research ran six experiments that located the cause in the image of the characters [@gould1987reading]. When a display had print-like character fonts rather than dot-matrix forms, dark characters on a light background, anti-aliased (grey-level) characters and relatively high resolution (they give 1000 by 800 as an example), reading speed equaled that on paper. They could not say how much each of the four variables contributed, only that each probably contributed something, and their experiments, with earlier work, ruled out general explanations such as inherent defects of CRT technology or the reader's age, experience or familiarity with screens. Dyson's review adds two details from that program: Gould's group found no evidence that eye movements on screen differ from those in print, and readers tend to sit farther from a screen than from a page, so a physically longer line on screen subtends a smaller angle [@dyson2004physical].

The limits are real. The task was proofreading, which is not comprehension. The displays were CRTs whose resolution and fonts no modern device shares, and Dyson cautions that results from 1980s displays have questionable validity for later ones. Gould's polarity benchmark was dark on light, so the study does not rank today's light and dark themes against each other; that question has its own literature, covered in the chapter on polarity. What survives is the direction of the argument: the speed deficit came from the glyphs, and when the glyphs became paper-like, it went away. On a modern screen, the remaining costs are likelier to come from size, layout, navigation and the conditions of reading than from the letters themselves.

::: myth
**"Reading on a screen is inherently slower than reading on paper."** The claim treats a finding about early displays as a law of the medium. Gould and colleagues showed that when character image quality was paper-like (print-like fonts, dark on light, anti-aliasing, high resolution), reading speed from a screen equaled that from paper, and that the reader's familiarity with screens did not explain the old deficit [@gould1987reading]. What remains on modern screens is a comprehension difference under particular conditions, not a speed penalty built into the glass [@delgado2018dont].
:::

### The comprehension gap that remains

Speed is not understanding. Delgado and colleagues pooled 54 studies published or presented between 2000 and 2017, with 76 comparisons of paper and digital reading in which the texts were matched in content, structure and images, read individually and silently, by readers in their daily language [@delgado2018dont]. Paper produced slightly better comprehension: Hedges' g was -.21 for between-participant designs (95% CI -.28 to -.14) and -.21 for within-participant designs (95% CI -.37 to -.06), with negative values favoring paper. The authors call this the screen inferiority effect and describe it as robust but modest. Heterogeneity was medium-high (I-squared 72.24 between participants) and the prediction interval ran from -.56 to .14, so in some populations the effect is trivial or reversed. There was no evidence of publication bias, and removing outliers, large studies and unpublished work did not change the result.

Three moderators matter for an instructional product. The paper advantage was larger when reading time was constrained (g = -.26) than when reading was self-paced (-.09). It appeared for informational texts (-.27) and mixed texts (-.30) but not for narrative-only texts (.01), although few narrative-only comparisons exist. And it grew by about .01 per year since 2000, the opposite of what would happen if readers were simply adapting to screens. Educational level, text length, device type, the need to scroll and the type of comprehension question were not significant moderators; numerically, the effect was larger on computers (-.23) than on hand-held devices (-.12, not significant) and larger when scrolling was needed (-.25) than when it was not (-.13).

Mangen, Walgermo and Bronnick's randomized study of 72 Norwegian tenth graders is one of the individual studies behind that pattern [@mangen2013reading]. Students read a narrative and an expository text of 1,400 to 2,000 words in total, on A4 paper in 14 point Times New Roman or as PDFs on 15-inch, 1280 by 1024 LCD monitors, then answered questions on screen within an hour. After vocabulary, word reading and a pretest were entered in a regression, reading modality added 4% of explained variance (p = .025), favoring paper. Contrary to the authors' prediction, the effect did not differ between the narrative and the expository text. Their explanation is spatial: paper gives fixed, tangible cues to where information sits, while scrolling gives an unstable sense of the text as a whole. They had no data on whether the screen group actually scrolled, so the mechanism is a hypothesis, and the groups were unequal (25 on paper, 47 on screen).

The two sources together say this: the cost is small, it is concentrated in informational text read under time pressure, and it has not shrunk with familiarity. LTF's lessons are informational text (procedures, relationships, numbers), and some of its reading happens under time pressure, in a challenge's Fly tab or in Fly mode while a simulated airplane keeps flying. That puts LTF inside the zone where the penalty is largest.

::: myth
**"The screen penalty is a generational artifact that will disappear as readers grow up with devices."** If familiarity were the cause, the paper advantage should shrink over time. In Delgado and colleagues' meta-analysis it grew by about .01 per year between 2000 and 2017 [@delgado2018dont]. The authors note that publication year is a crude proxy for generation, so the trend is not proof of anything specific, but it is evidence against the reassuring version of the claim.
:::

::: {.rule #SCR-001 grade="A"}
**Do not rely on on-screen reading alone for facts a learner must retain; pair every lesson section that carries a procedure or a number with an active task.** A meta-analysis of 54 studies found a small, robust comprehension advantage for paper over screens for informational text (g = -.21), with no sign of publication bias [@delgado2018dont], and a randomized study of tenth graders found the same direction [@mangen2013reading]. The effect is modest and heterogeneous, so this is a reason to add retrieval and interaction, not a reason to avoid screens, which the meta-analysis authors explicitly reject.

*In LTF:* each section of a lesson rendered by `LessonRenderer` that introduces a procedure or a value should be followed by a `quiz` or `widget` block, not only by more `markdown`. A lesson whose blocks are mostly `markdown` is the weak case and should be flagged in review.
:::

::: {.rule #SCR-002 grade="B"}
**Keep sustained reading out of timed conditions; text that must be read while the clock runs is written and set as short, separately scannable units.** The paper advantage was larger under time constraints (g = -.26) than for self-paced reading (-.09) in the meta-analysis [@delgado2018dont]. This is one moderator in one meta-analysis, so the grade is B.

*In LTF:* the challenge `BriefTab` is the place for paragraphs; the `FlyPanel` steps and the random-event alert are timed reading and should hold one instruction per row, set large, with no paragraph longer than a couple of lines. The Fly tab's "Steps" list already follows this pattern; keep it that way when content authors add steps.
:::

::: {.rule #SCR-003 grade="C"}
**Give every long lesson a stable spatial frame: a persistent outline, a visible position within the whole, and recurring elements in the same place in every lesson.** Mangen and colleagues explain the paper advantage by the reader's spatial map of a text, which scrolling may weaken [@mangen2013reading], and the meta-analysis found a numerically (not significantly) larger penalty when scrolling was required [@delgado2018dont]. The mechanism is untested, so this is graded C, but the cost of following it is low.

*In LTF:* `SectionNav` with its scroll-spy spine on `lg` screens and the sticky mobile section `Select` ("Section i of n") already supply the frame. Keep the objectives `Card` first and the completion panel last in every lesson, and do not let lesson authors move them.
:::

### Preference is not performance

A recurring finding across the screen-typography literature is that what readers say they like and how well they read diverge. Dyson's review notes it in line-length studies: readers preferred moderate lines while often reading longer ones faster, and in one comparison they preferred three columns although a single paged column was read fastest (only by 18 to 24 year olds) [@dyson2004physical]. Bernard and colleagues found no difference in reading time or efficiency between lines of about 45, 76 and 132 characters for adults or children, while adults found the short line easier to concentrate on and none chose the full width as a favorite [@bernard2003effects]. Wallace and colleagues found that stated font preference did not predict reading speed even after sizes were normalized: participants read 14% faster in their fastest font than in their most preferred one [@wallace2022towards]. Readers' judgments about type are real data about comfort and trust, but they are not evidence about comprehension or speed.

::: {.rule #SCR-004 grade="B"}
**Decide typographic defaults by measured task performance (reading time, quiz accuracy, error counts), and treat stated preference as a separate, secondary signal.** In several independent screen studies, preference and performance pointed in different directions: for line length [@dyson2004physical; @bernard2003effects] and for typeface [@wallace2022towards]. Each study is small or confounded, so the grade is B, but no study in this lane found preference to be a reliable proxy for performance.

*In LTF:* a change to `container-measure`, to the body size of `MarkdownContent` or to `font-sans` is evaluated with quiz scores and completion rates on real lessons, not with a survey or a team vote. Comments that a page "feels easier" are logged but do not settle the question.
:::

### Legibility and readability

Santa Maria's craft book offers a distinction that helps in review: legibility is whether text can be decoded, readability is whether the reader wants to keep reading, and poor typography can make people abandon text that is technically legible [@santamaria2014web]. The same excerpt repeats the word-shape account of reading, which the experimental evidence does not support (see the chapter on choosing faces), so use the book for its vocabulary, not its science. A checklist can be perfectly legible and still tiring to read, and a lesson can pass every contrast check and still lose a beginner by its third screen.

::: {.rule #SCR-005 grade="C"}
**Provide a print path for every lesson summary and reference checklist, and keep print styles working as part of the definition of done for those pages.** The meta-analysis found paper slightly better for informational text and its authors suggest predictable conditions in which the media are equivalent [@delgado2018dont]; offering paper costs little for learners who study better on it. This is a design inference, graded C.

*In LTF:* the header, footer, beta banner and interactive parts of the reference pages already carry `print:hidden`. Extend the same treatment to `LessonPage` (hide `SectionNav`, the glossary rail, the signup banner and the completion panel when printing) so a lesson prints as clean text.
:::

### What this means for Learn to Fly

Keep the lesson model of short sections mixing `markdown`, `quiz` and `widget` blocks: it is the right answer to a medium with a small, persistent comprehension cost. Keep `SectionNav`, the mobile section `Select` and the fixed order of objectives, blocks, challenge cards and completion panel, which give the reader a stable map. Change two things. First, add a review check that a lesson's procedure or number-bearing sections are followed by an active block (SCR-001). Second, add print styles to `LessonPage` and the checklist pages so the paper route works (SCR-005); the reference hub already shows the pattern with `print:hidden`. Build one measurement into the product before arguing about type: the lesson completion and quiz-accuracy data that SCR-004 requires already exist in the progress model, and any typography change should be judged against them. Treat `FlyPanel` and `FlyModePage` as timed reading surfaces (SCR-002), which every later chapter on size, polarity and numerals returns to.

## Size is an angle, not a pixel count

### The fluent range and the critical print size

Legge, a vision scientist, and Bigelow, a type designer, argue that the sizes people read at are constrained mainly by the visual system [@legge2011print]. They measure size by x-height rather than point size, because point size is a body measure that most letters do not fill: about 94.5% of running text is lowercase, and about 87% of the black area of lowercase letters lies in the x-height zone. The x-height fraction of the body varies widely between typefaces. Karow's measurement of 1,049 roman faces ran from 0.28 to 0.58 of the body, with a mean of 0.46, so two faces at the same nominal size can differ in effective size by a factor of two.

Size is then expressed as an angle at the eye: 57.3 times the physical x-height divided by the viewing distance. Reading speed is at its maximum across a fluent range of roughly 0.2 to 2 degrees of x-height, a factor of ten. Below the critical print size (CPS), about 0.2 degrees with individual estimates from 0.15 to 0.3, speed drops sharply. Above roughly 1 to 3 degrees, reading slows again for very large print. At the conventional reading distance of 40 cm, 0.2 degrees corresponds to an x-height of 1.4 mm (4 points) and 2 degrees to 14 mm (40 points).

Print converged just above the floor. In the authors' survey, newspaper running text averaged 0.23 degrees and paperback and hardcover fiction 0.24, within a range of 0.20 to 0.28. Fifteenth-century Italian romans averaged 0.30 degrees and eighteenth-century foundry types 0.22, with 37% of the latter below the fluent range. Screens did not do better: in an online-news sample measured at 132 ppi and 40 cm, home-page body text averaged 0.19 degrees, below CPS, and article text 0.21, just above. The authors also report mean x-height fractions of 0.42 for hardcover book faces, 0.48 for newspaper faces and 0.52 for faces designed for screens.

The mechanism they favor is the visual span, the number of letters taken in at one fixation, limited by crowding. Below CPS, the spacing between letters falls inside the crowding zone and the span shrinks. Eye-movement control is not the limit: rapid serial presentation of one word at a time, which removes eye movements, shows the same curve. Widening letter spacing did not enlarge the span in the work they cite.

This is among the strongest bodies of evidence in screen typography, a long line of psychophysics with consistent values across methods. Its limits are that the fluent range is defined for normal vision (low-vision readers have a CPS that is a multiple of their acuity limit), that 40 cm is a convention real devices break, and that the clustering of historical print sizes inside the fluent range is correlational; tradition and the price of paper also shaped it.

::: {.rule #SCR-006 grade="A"}
**Specify the size of reading text by the x-height angle it must deliver at the farthest expected viewing distance, and keep that angle well above 0.2 degrees, aiming toward 0.3.** Reading speed falls sharply below a critical print size of about 0.2 degrees of x-height, with individual values up to 0.3 degrees, and is flat across a fluent range up to about 2 degrees [@legge2011print]. The finding is replicated across methods. The 0.3 target is a margin chosen so that readers at the top of the reported individual range remain fluent; it is not itself a measured optimum.

*In LTF:* every text style in `src/styles/index.css` and every raw Tailwind size used for reading gets a recorded viewing distance (desk, arm's length beside the sim, or across the room) and the angle it yields on a reference display. The calculation is in the next section.
:::

### What LTF's sizes deliver at a desk

The arithmetic below was computed for this Part from the font files in `node_modules/@fontsource-variable` and Legge and Bigelow's formula. Instrument Sans has an x-height of 510 units on a 1,000-unit em (0.51), close to the 0.52 mean the survey reports for screen faces. JetBrains Mono's is 0.55. The reference display is a 24-inch, 1920 by 1080 monitor at 100% operating-system scaling, which gives a pixel pitch of about 0.28 mm per CSS pixel. These are assumptions about a plausible setup, not measurements of LTF users' desks; a high-density laptop at its default scaling, or a monitor at 125%, gives different figures.

| Style | Size | X-height | Angle at 60 / 70 / 100 cm |
| --- | --- | --- | --- |
| `MarkdownContent` body | 16 px | 8.2 px, 2.3 mm | 0.22 / 0.18 / 0.13 |
| `body-lg` (Prose, hero) | 18 px | 9.2 px, 2.5 mm | 0.24 / 0.21 / 0.15 |
| `text-sm` meta, `label` | 14 px | 7.1 px, 2.0 mm | 0.19 / 0.16 / 0.11 |
| `text-xs` badge text | 12 px | 6.1 px, 1.7 mm | 0.16 / 0.14 / 0.10 |
| Fly mode `text-xl` steps | 20 px | 10.2 px, 2.8 mm | 0.27 / 0.23 / 0.16 |

Two conclusions follow. At an ordinary desk distance, LTF's lesson body sits at the critical print size rather than comfortably above it, which is where Legge and Bigelow found screen news text in their sample. And the 14 px meta text, used for hints, durations, breadcrumbs and captions throughout (`text-sm` is the most common size class in the code, with about 204 uses), is below the floor at 60 cm on this display. The `eyebrow` labels at 12 px are uppercase, so their letter height is the cap height (0.72 em, 8.6 px), which gives about 0.23 degrees at 60 cm; they are closer to fluent than the lowercase `text-xs` in `Badge`, which is the smallest reading text in the product.

To deliver 0.3 degrees of x-height on the reference display, the arithmetic gives an Instrument Sans size of about 22 px at 60 cm, 26 px at 70 cm and 37 px at a metre. To deliver the bare 0.2 degree floor, about 15 px at 60 cm, 17 px at 70 cm and 25 px at a metre. These figures are why the rest of this chapter recommends larger body text and much larger Fly mode text.

::: myth
**"Nine pixels (ten points) is the optimal size for screen text."** Sheedy and colleagues did report optimal threshold legibility at 9 pixels (10 points) [@sheedy2005text]. That was the smallest size at which letters and words could be identified, measured with six fonts on early-2000s displays, not a size for reading paragraphs. On high-density screens, pixel height is not what limits legibility, and citing the figure as a body-size rule misreads a threshold study as a reading study.
:::

### Screen evidence above the floor

Rello, Pielot and Marcos tested whether web text should be larger than the 10 to 14 point sizes common in their era [@rello2016make]. Prior HCI studies had never tested above 14 points and had always found the largest tested size best. They tested 104 readers (93 analyzed for fixations) on six Wikipedia passages in Arial at six sizes (10, 12, 14, 18, 22 and 26 points), with four line spacings, using a Tobii eye tracker on a 17-inch, 1024 by 768 monitor at about 60 cm. Mean fixation duration, their proxy for processing difficulty, fell from .255 s at 10 points to .241 (12), .224 (14), .208 (18) and .199 (22), then rose slightly to .204 at 26 (F(5, 445) = 66.825, p < .001). Fixations at 10, 12 and 14 points were longer than at every larger size. Comprehension was worse at 10 and 12 points than at 18, and readers rated 18 points the most readable. The authors recommend 18 points or more for text-heavy pages and report similar size effects in a replication with 28 readers with dyslexia.

Three caveats limit transfer. It is one experiment, in one typeface and probably one language (the sample item is Spanish), with only the first paragraphs read. The column width was fixed, so larger type also meant fewer characters per line, the confound Dyson warns about [@dyson2004physical]. And the sizes were points on that monitor at that distance: an 18-point setting there is not the same visual angle as the same CSS value on a high-density laptop or a phone. What transfers is the direction (on screens, larger than the conventional web size helped, up to a plateau) and the size of the plateau region in angular terms, not the number.

::: {.rule #SCR-007 grade="B"}
**Set lesson body text larger than the 16 px browser default, and never shrink reading text to fit more on a screen.** On screens, comprehension and fixation measures improved as size rose beyond conventional web sizes and flattened near the top of the tested range [@rello2016make], consistent with the fluent-range account [@legge2011print]. One screen experiment and one typeface carry the specific result, so the grade is B.

*In LTF:* move `MarkdownContent` body text from the inherited 16/26 to `body-lg` (18/29), the size `Prose` already uses on the static pages. The calculation above puts 18 px at 0.24 degrees at 60 cm on the reference display, still short of the 0.3 target, so treat 18 px as the minimum step, not the end point, and test 20 px on real lessons (SCR-004).
:::

::: {.rule #SCR-008 grade="B"}
**Compare candidate typefaces, and set fallback sizes, by x-height, not by nominal font size.** X-height fractions range from 0.28 to 0.58 across roman faces [@legge2011print], and Wallace and colleagues found nominal sizes so misleading across fonts that they normalized every face perceptually before testing speed [@wallace2022towards]. The measurement logic is sound and the variation is documented; whether a given difference in x-height changes reading for LTF's readers is untested, hence B.

*In LTF:* Instrument Sans (0.51) and JetBrains Mono (0.55) differ by about 8% in x-height at the same `font-size`, so a mono readout set inline with sans text at the same size looks larger. Inline mono in `MarkdownContent` code spans is already reduced to `text-[0.9em]`, which roughly equalizes them; keep that ratio when adding inline readouts to prose.
:::

### Distance, age and the second screen

LTF's audience reads at more than one distance. The plan describes a beginner at a desktop with a controller and a second screen beside the sim; Fly mode exists for that case. Dyson notes that readers already sit farther from screens than from printed pages [@dyson2004physical], and a tablet propped beside a yoke or a laptop pushed aside for a joystick is farther still. Under Legge and Bigelow's formula, doubling the distance halves the angle, so text that is fluent on a phone held near the face drops toward or below CPS on a screen at arm's length or beyond [@legge2011print].

Degani's review for NASA of the typography of flight-deck documents treats checklist cards as displays read under poor conditions, and among its recommendations is to assess the age of the reading population and be conservative [@degani1992typography]. It reports a 50% reduction in retinal illumination at age 50 compared with age 20, and notes that most laboratory participants in the underlying studies were probably young. Wallace and colleagues' 352 crowd-sourced readers slowed by about 1.5 words per minute per year of age across the sample, steepening to about 2.6 for readers aged 35 and over, and font choice mattered for that older group although it did not across the whole sample [@wallace2022towards]. People who take up flight simulation as adults sit in exactly that range.

::: {.rule #SCR-009 grade="B"}
**Size Fly mode and any other second-screen surface for the distance it is read from: design it for arm's length or more, and scale type up accordingly rather than reusing desk sizes.** The angle a size delivers halves when distance doubles [@legge2011print], readers sit farther from screens than from paper [@dyson2004physical], and checklist typography for the flight deck is meant for poor conditions and conservative assumptions [@degani1992typography]. The angular logic is well established; the specific distances LTF learners use are not measured, so the grade is B.

*In LTF:* `FlyModeLayout` sets `text-xl` (20 px) as the base and `FlyPanel large` uses `text-xl` step text and `text-3xl` headings. At a metre on the reference display, 20 px gives 0.16 degrees, below CPS. Raise the Fly mode step text to at least `text-3xl` (30 px, about 0.24 degrees at a metre) and test larger; add a size control on the Fly mode page itself, since the distance varies by setup.
:::

::: {.rule #SCR-010 grade="B"}
**Choose default sizes for an adult population that includes readers over 50, not for the young laboratory participant, and treat text size as a setting, not a constant.** Reading slows with age and older readers were more sensitive to font in a large online study [@wallace2022towards]; retinal illumination is reported halved at 50 compared with 20 [@degani1992typography]. The age effects are documented in several sources but measured on generic readers, not LTF learners, hence B.

*In LTF:* the account Preferences section currently holds only the `ThemeToggle`. Add a text-size preference (for example three steps) that scales the root size, so that every rem-based size in the product follows it; this depends on the unit fixes in the next chapter.
:::

::: {.rule #SCR-011 grade="C"}
**Reserve 14 px for short meta text that is not needed to complete a task, and set nothing a learner must read below it; 12 px is allowed only for short uppercase labels.** On the reference display at 60 cm, 14 px Instrument Sans gives an x-height of about 0.19 degrees and 12 px lowercase about 0.16, both at or below the critical print size [@legge2011print]; uppercase 12 px text relies on the larger cap height. This is a derived rule from the angular calculation, graded C.

*In LTF:* audit the `text-sm` uses: form hints in `FormField`, durations, breadcrumbs and captions may stay at 14 px; any instruction, error text or quiz explanation set in `text-sm` moves to the body size. `Badge` text at `text-xs` (12 px, mixed case) should move to 13 or 14 px or to uppercase with tracking, as the tier pills already are.
:::

### What this means for Learn to Fly

Keep `body-lg` (18/29) and promote it to the lesson body: `MarkdownContent` should stop inheriting the 16/26 root and use the same size as `Prose`, which removes one of the two reading sizes and lifts the lesson body off the critical print size (SCR-007). Record a viewing distance for each surface and check its sizes with the table method above (SCR-006); the lesson, challenge and reference pages are desk surfaces, `FlyModePage` is an arm's-length-or-farther surface, and the kneeboard print output is a hand-held paper surface. Change Fly mode's base from `text-xl` to at least `text-3xl` for steps and alerts, and give it its own size control (SCR-009). Audit the 14 px and 12 px reading text (SCR-011), starting with `Badge`, quiz explanations and `ErrorState` messages, which use `text-sm text-ink-2`. Build the text-size preference into the account page (SCR-010) once the unit work in the next chapter makes the whole scale follow the root.

## Units, zoom and the reader's control

### Proportional to something the reader controls

The previous chapter showed that no single physical size suits every viewing distance. The web's answer, older than any of the studies above, is to make sizes relative to something the reader controls. Marcotte's essay on fluid grids gave the method its best-known form: divide the target size by its context to get the result [@marcotte2009fluid]. For type, the target pixel size divided by the parent's font size gives an em value, so a 24 px heading in a 16 px context becomes 1.5em and 14 px list text becomes 0.875em. For layout, a target width divided by the containing width gives a percentage: in his example a 700 px title in a 988 px page becomes 70.85%, and 700 px inside an 844 px entry becomes 82.938%. He set the body to 100% so that the browser's default size, usually 16 px, became the base, and sized everything else in ems so that it scaled with the user's text-size setting. The measure was expressed the same way: a maximum width of 61.75em (988 divided by 16), which keeps line length in check while scaling with the text.

His reason was practical: pixel-sized fonts were a problem because Internet Explorer largely refused to resize them. He listed the method's limits himself: fixed-size media, browsers that round sub-pixel percentages differently, a context that must be recalculated for every nested container, the assumption of a 16 px default, and no treatment of vertical rhythm or fluid line height. Commenters added that cascading context is fragile, since an ancestor's font-size change silently changes every divisor below it. Modern CSS has since added units and functions (rem, ch, clamp, viewport units) that remove most of the arithmetic. No experiment tested readability benefits of fluid type, and the article claims none. Its central idea, that sizes should be proportional to something the reader controls, is supported indirectly by the reading research: if the right physical size depends on viewing distance [@legge2011print] and larger sizes help on screens [@rello2016make], then a fixed pixel size cannot be right for every reader.

### What LTF does now

The LTF client sets `html { font-size: 16px; line-height: 1.625 }` in the base layer of `src/styles/index.css`. Marcotte's method depends on the root being the browser's default (set at 100%), so that a reader who has raised the default text size in the browser gets larger text everywhere [@marcotte2009fluid]. A pixel value at the root replaces that default with a constant. Browser zoom still enlarges everything, but a reader who changed only the default font size does not get larger text in LTF.

The rest of the scale is split. Tailwind's size classes (`text-sm`, `text-xl`, `text-3xl` and so on) are defined in rem in the installed Tailwind theme, so they would follow a relative root. The project's own utilities (`display-xl` 64 px, `display-lg` 44 px, `display-md` 32 px, `heading-lg` 24 px, `heading-md` 20 px, `heading-sm` 16 px, `body-lg` 18 px, `body-sm` 14 px, `label` 14 px, `eyebrow` 12 px, the three `readout` sizes, `code`) and `control-box` text (16 px) are declared in pixels with pixel line heights, so they would not. Widths are a third mix: `container-measure` is 68ch, the lesson article is `max-w-[800px]`, cards and panels use pixel caps such as `max-w-[460px]` and `max-w-[560px]`, and a few elements use ems (`max-w-[34em]` on the hero sub-copy). If the root were made relative today, the Tailwind-sized text would grow and the utility-sized headings, readouts and form text would not, so the hierarchy would invert at large settings: a raised body size could approach or pass the `heading-sm` and `label` text above it.

::: {.rule #SCR-012 grade="C"}
**Leave the root font size to the browser and express every type size in rem (and component-internal spacing in em), so that one reader setting scales the whole scale together.** Relative units let the reader's own text-size setting enlarge text coherently [@marcotte2009fluid], which the size and distance evidence makes necessary [@legge2011print; @rello2016make]. This is craft consensus with indirect evidence, graded C.

*In LTF:* change the base rule in `src/styles/index.css` from `font-size: 16px` to `font-size: 100%`, and convert the `display-*`, `heading-*`, `body-*`, `label`, `eyebrow`, `readout-*`, `code` and `control-box` utilities from pixel sizes and pixel line heights to rem sizes with unitless line heights. The rendered result at the default setting is identical; the change only matters when a reader has a different default, which is the point.
:::

::: {.rule #SCR-013 grade="C"}
**Express the measure of reading text in a unit tied to that text's own size (em, or ch calibrated to the face), never in fixed pixels.** Marcotte's 61.75em measure kept line length constant as text scaled [@marcotte2009fluid]; Dyson's review identifies characters per line, not physical width, as the variable that organizes the screen line-length results [@dyson2004physical]. Graded C: the logic is sound, but no experiment compares measure units.

*In LTF:* the lesson article's `max-w-[800px]` means that a learner who enlarges text gets fewer characters per line and a learner on the default gets more than the design intends. Replace it with a measure token in em (the chapter on the measure gives the value), so `LessonPage`'s center column holds a constant number of characters at every text size.
:::

### Reflow at narrow widths

WCAG 2.2 Success Criterion 1.4.10 Reflow (Level AA) requires that content be usable without two-dimensional scrolling at a width equivalent to 320 CSS pixels for vertically scrolling content, or a height of 256 CSS pixels for horizontally scrolling content, with exceptions for maps, diagrams, video, games and data tables [@w3c2023wcag]. A reader who zooms a desktop browser far enough reaches that width, so reflow and text scaling are the same requirement seen from two sides: relative sizes only help if the layout gives the larger text somewhere to go.

LTF's lesson tables are rendered by `MarkdownContent` inside a focusable, bordered scroll region (`overflow-x-auto`), which is the allowed form for data tables. The lesson grid collapses its rails below `lg`, and the mobile section `Select` replaces `SectionNav`. The risks are elsewhere: fixed-width pins and cards (`max-w-[460px]` sits inside a column, so it shrinks, but any `min-w-*` or `whitespace-nowrap` on long text does not), the `whitespace-nowrap` on the 24 px mono KIAS cells on the speeds page, and widget SVGs whose text shrinks with their width rather than reflowing (covered in the chapter on numerals and data).

::: {.rule #SCR-014 grade="C"}
**Make every page of reading text reflow to a single column at 320 CSS pixels with no horizontal scrolling, keeping horizontal scrolling only for data tables, diagrams and widgets.** This is WCAG 2.2 Success Criterion 1.4.10 at Level AA [@w3c2023wcag]. A standards requirement with no experiment behind it is graded C, but it is a conformance floor, not an option.

*In LTF:* add a 320 px viewport case to `e2e/a11y.spec.ts` for `LessonPage`, `ChallengePage` (all tabs), `SpeedsPage` and `FlyModePage`, and check that the only horizontal scroll regions are the table wrappers and widget canvases. The `whitespace-nowrap` KIAS cells on `SpeedsPage` are acceptable only inside the table's scroll region.
:::

### Individuation: settings, not one right answer

Wallace and colleagues asked how much reading speed changes when only the font changes, with size normalized by perception [@wallace2022towards]. Across 352 crowd workers reading on their own devices, font was not a significant factor for speed at the population level: passage, topic familiarity, order, screen order (second screens were read 39 words per minute faster) and age mattered more. Within individuals the picture differed. Participants read 14% faster in their fastest font (314 words per minute on average) than in their most preferred font (275), and 35% faster than in their slowest of the five they read (232), with comprehension unchanged. The authors argue for individuated reading: let each reader find the font that suits them.

The 35% figure must be read carefully. Each participant read only two passages in each of five fonts, and the authors call their own effect-size analysis a rough sanity check given non-independent data. Comparing each person's fastest and slowest of five noisy measurements will always show a gap, even if fonts had no real effect, so the figure is an upper bound on what personalization could deliver, not a forecast; the notes record no retest showing that the same person is fastest in the same font twice. Several authors work at Adobe, and no independent replication was found. The conservative reading is the population null, which agrees with Dyson's conclusion that there is no clear evidence of typeface differences in legibility [@dyson2004physical].

The rendering studies point the same way from another direction. Dillon and colleagues found substantial individual differences in the effect of subpixel rendering and suggested it may not suit every information worker [@dillon2006visual], and Bias, Larson and colleagues later linked preference for subpixel text to visual acuity, hue sensitivity and personality (as summarized on the Microsoft Research page recorded in the notes for that paper). Readers differ physiologically, and no single setting is best for all of them.

::: {.rule #SCR-015 grade="B"}
**Offer a small set of persistent reading settings (text size, line spacing and, at most, a choice among two or three vetted text faces) and apply them to lesson and reference prose, not to instrument widgets.** Individual readers differ in which font and rendering suit them even when the population shows no average difference [@wallace2022towards; @dillon2006visual], and the size evidence argues for reader control of scale [@legge2011print]. The individual effects are likely overstated by the design of the main study, so the grade is B and the font choice is the weakest part.

*In LTF:* add the settings to the account Preferences section beside `ThemeToggle`, store them with the other preferences (and in local storage for signed-out learners, like `ltf-theme`), and apply them through root-level custom properties read by `MarkdownContent`, `Prose` and the challenge tabs. Leave widget text, `readout-*` values and the `g1000-pfd` and `airspeed-indicator` widgets unaffected, since their appearance must match the lesson's descriptions of them.
:::

::: {.rule #SCR-016 grade="C"}
**Use fluid, viewport-dependent sizing only for display headings, and give body and label text a fixed floor that no viewport can push below.** Fluid techniques solve the problem of headings that are too large on phones [@marcotte2009fluid], but the legibility floor for reading text does not shrink with the window [@legge2011print]. Craft practice, graded C.

*In LTF:* the landing h1 already steps from `display-lg` to `display-xl` at `sm`. A clamp between those two sizes would remove the jump at 640 px; do not apply the same treatment to `body-lg`, `MarkdownContent` text or `FormField` labels.
:::

### What this means for Learn to Fly

Keep Tailwind's rem-based size classes and the global focus and reduced-motion rules in the base layer. Change the root: `font-size: 16px` in `src/styles/index.css` becomes `100%`, and the project's px-based type utilities become rem with unitless line heights (SCR-012). This is a mechanical change with no visible effect at default settings and should land before any text-size preference. Replace the pixel measure of the lesson article with an em measure (SCR-013). Add 320 px reflow checks to the end-to-end accessibility suite (SCR-014). Then build the reading settings (SCR-015): size first, line spacing second, a font choice only if testing supports it, all scoped away from the widgets. The existing pattern for preferences (`ThemeToggle`, the `ltf-theme` key and the inline script in `index.html` that applies the theme before first paint) is the model; a text-size preference should be applied by the same early script so that pages do not reflow after load.

## The measure and line spacing on screens

### What the screen studies found

Dyson's review of physical text layout on screens is the anchor for line length [@dyson2004physical]. Her first point is methodological: physical line length (or visual angle), characters per line and type size are linked, and any comparison that holds one constant varies the other two, so a study can almost never isolate one of them. Her synthesis is that characters per line, not physical width, best organizes the results, because saccades are sized in characters, not degrees; and that greater viewing distance on screens shrinks the angle of the return sweep, which may make long screen lines less costly than long printed ones.

The studies she describes do not point one way.

- Kolers and colleagues (1981) compared 35 and 70 characters per line, produced by halving character width on a low-resolution display, with twenty readers and passages of about 300 words. The narrower characters with more per line were read faster, with fewer fixations. Duchnicky and Kolers (1983) confirmed the direction and found a positive correlation between characters per line and reading rate.
- Dyson and Kipping (1998) held type at 10 point Arial with 12 point spacing and varied line length from 25 to 100 characters, with 48 readers and passages of about 800 words. The longest line was read faster than the shortest, with no other significant differences.
- Bernard and colleagues (2002) compared 45, 76 and 132 characters per line in 12 point Arial with 20 adults and found no difference in reading time or efficiency. Dyson suggests the 132-character line was extreme.
- Dyson and Haselgrove (2001) found that 55 characters per line produced better comprehension than 100, with 25 in between.
- Dyson and Kipping (1997) compared one column of about 80 characters with a three-column paged layout. The single column was read fastest, but only by 18 to 24 year olds, and readers preferred three columns.

Bernard, Fernandez, Hull and Chaparro extended the 2002 work to children [@bernard2003effects]. With adults aged 18 to 61 and children aged 9 to 12 reading lines of about 132, 76 and 45 characters, reading time and efficiency did not differ for either group. Adults found the short line significantly easier to concentrate on (p < .01), none chose the full width as a favorite, most chose the medium line with the short close behind, and they rated the full width best for the amount of scrolling. Secondary accounts disagree about the children's preferences, so that result is uncertain. A related study by Shaikh and Chaparro (2005) compared 35, 55, 75 and 95 characters with 20 college-age readers and found faster reading at 95, no change in satisfaction, and strong preferences for the extremes, so the null is not settled either.

Dyson records the print benchmarks the screen work is measured against: Tinker's data interpreted as an optimum of 52 characters per line (by Rayner and Pollatsek), and a guideline of not more than about 70 (Spencer). She also lists the weaknesses of the screen evidence: samples of 10 to 20, 1980s displays, tasks from proofreading to searching for shapes, "kitchen sink" studies that change many settings at once, and nothing on responsive layouts, touch or high-density screens.

The honest summary is this. On screens, longer lines were usually read at least as fast as moderate ones, sometimes faster, and very short lines did not help speed. Comprehension (one study) and stated preference (several) favored moderate lines. Nothing in the lane shows a speed penalty for lines in the medium-to-long range. A moderate measure is therefore chosen for comprehension and comfort, not for speed, and the choice is a default to test, not a law.

::: myth
**"Research shows that 50 to 75 characters per line is fastest to read on screen."** The range comes from print craft and Tinker-era print data. Most screen studies found longer lines read at least as fast and often faster, and one found no difference across 45, 76 and 132 characters [@dyson2004physical; @bernard2003effects]. The case for a moderate screen measure rests on one comprehension result and on preference, which is enough for a default but not for the claim of speed.
:::

::: {.rule #SCR-017 grade="B"}
**Set continuous lesson prose to a moderate measure of about 55 to 75 characters per line, and do not let it stretch with the window.** One screen study found better comprehension at 55 characters than at 100, and adults preferred medium lines and found short ones easier to concentrate on, while speed results conflict and show no clear penalty for longer lines [@dyson2004physical; @bernard2003effects]. The grade is B because the support is comprehension in one study plus repeated preference data, against a mixed speed record.

*In LTF:* the target is the same for `MarkdownContent` and `Prose`. At the 18 px body recommended earlier, about 65 average characters of Instrument Sans is about 29em (about 530 px); a measure token of about 30em, with an upper limit of 34em (about 75 characters), replaces both the lesson's `max-w-[800px]` and the current `container-measure` value.
:::

### The ch unit does not mean "a character" in Instrument Sans

CSS's `ch` unit is the advance width of the digit zero in the element's font. Designers often read `68ch` as "68 characters". That holds only when the zero is about as wide as an average character, which is roughly true of a monospaced face and false for many proportional ones.

Measured for this Part from the Instrument Sans variable font file used by LTF (latin subset, default weight 400): the zero is 666 units wide on a 1,000-unit em, while the average advance over a 238-character sample of English lesson-style prose is 452 units. One `ch` is therefore about 1.47 average characters. LTF's `container-measure` of 68ch, intended as a classic 68-character measure, holds about 100 average characters of Instrument Sans: at the 18 px `body-lg` size of `Prose` it is about 815 px wide. The lesson article's 800 px cap at the inherited 16 px holds about 111 average characters by the same measurement, wider than the "roughly 90 to 100" the product dossier estimated. Both measures are far beyond the moderate band and near the 100-character condition that comprehended worse than 55 in Dyson and Haselgrove's study [@dyson2004physical]. The sample-based average ignores kerning and varies with the text, so treat these as estimates within about ten percent. JetBrains Mono, by contrast, is monospaced with a 600-unit advance for every glyph, so 68ch of mono text is 68 characters.

::: {.rule #SCR-018 grade="C"}
**Before using `ch` for a measure, calibrate it against the face's average character width, or express the measure in em instead.** The unit is defined by the zero's advance, which in Instrument Sans is about 1.47 times the average character (measured for this Part), so `ch` values silently overstate the measure. This is a property of the font and the unit, not a finding about readers, graded C; its consequence for readers follows from SCR-017.

*In LTF:* redefine `container-measure` in em (about 30em, see SCR-017), and add a comment in `tokens.css` that records the character count it was calibrated to and the face it assumes. If `font-sans` ever changes, recalibrate the token.
:::

### One column, and the window height

In Dyson and Kipping's comparison, a single paged column of about 80 characters was read faster than three columns by younger readers, although readers preferred the three columns [@dyson2004physical]. Window-height studies (for example 20 against 60 lines, or 15, 25 and 35 lines) mostly found no difference in speed or comprehension, although readers preferred larger windows. There is no evidence in the lane for multi-column reading text on screens, and one result against it.

::: {.rule #SCR-019 grade="B"}
**Keep lesson and reference prose in a single column; use side columns only for navigation, glossary and summary material that is not read continuously.** In the one screen comparison reported, a single column was read faster than a three-column layout by younger readers, while preference ran the other way [@dyson2004physical]. One study, so B.

*In LTF:* the `LessonPage` grid (`SectionNav` rail, article, glossary rail at `xl`) already follows this: the rails are reference, not reading text. Do not set `MarkdownContent` lists or long callouts in `md:grid-cols-2` inside the article; side-by-side `safety` and `tip` callouts in `BriefTab` are acceptable only while each stays short.
:::

### Line spacing

On leading, the screen evidence is thin. Dyson found that early screens favored double over single spacing and that she could locate no recent empirical studies of fine spacing [@dyson2004physical]. Rello, Pielot and Marcos tested four line spacings between groups (0.8, 1.0, 1.4 and 1.8, where 1.0 is the browser default, equal to 120% of the font size) [@rello2016make]. Line spacing had no effect on fixation duration (F(3, 89) = 0.064, p = .978). The tightest setting, 0.8, gave significantly lower comprehension than the other three, and readers rated their own comprehension lower at 1.8 than at 1.0. Their recommendation was to keep default line spacing. Degani's flight-deck review, from print-era data, recommends line spacing not below 25 to 33% of font size, that is, a line height of at least about 1.25 to 1.33 [@degani1992typography].

Converted to CSS line heights, Rello's tested settings are about 0.96 (bad for comprehension), 1.2, 1.68 and 2.16 (rated worse subjectively). LTF's body line height of 1.625 (16/26) and `body-lg` 18/29 (about 1.61) sit between the 1.2 and 1.68 conditions, inside the range that tested well, and above Degani's floor. The base rule for `h1` to `h4` is 1.25, and the display utilities go tighter: `display-md` 32/36 (1.125), `display-lg` 44/48 (about 1.09), `display-xl` 64/64 (1.0). Rello tested paragraphs only, so the evidence says nothing direct about headings; large display type is conventionally set tighter, and the tight values are acceptable for one- or two-line headings but not for multi-line headings a learner must read carefully, such as the 12ch-wide landing h1, which wraps to three lines on phones.

::: {.rule #SCR-020 grade="B"}
**Keep the line height of reading text between about 1.25 and 1.7 of the font size; never set paragraph text tighter than 1.2 or looser than about 1.8.** The tightest spacing tested on screen lowered comprehension and the loosest lowered rated comprehension, with no effect of spacing on fixations in between [@rello2016make]; the flight-deck review sets a floor of about 1.25 to 1.33 [@degani1992typography]. One screen experiment and a print-era review, so B.

*In LTF:* keep 1.625 for body and about 1.6 for `body-lg`. Raw Tailwind sizes used for reading carry Tailwind's own line heights: `text-lg` is about 1.56 and `text-xl` 1.4, both fine, but `text-3xl` is 1.2 and `text-4xl` about 1.11, which are heading values and should not be used for multi-line reading text in `FlyPanel large` or the Fly mode goal.
:::

::: {.rule #SCR-021 grade="C"}
**On glance surfaces (Fly mode, the challenge Fly tab, printed checklists), use a shorter measure than lesson prose and keep one instruction per line where possible.** Adults found short lines easier to concentrate on [@bernard2003effects], and checklist typography for the flight deck favors generous spacing and conservative assumptions [@degani1992typography]. No study tested glance reading at different measures, so C.

*In LTF:* `FlyModeLayout`'s `max-w-3xl` (48rem, 768 px) holds about 85 average characters at the 20 px base, above the moderate band. When Fly mode text is enlarged as SCR-009 asks, the same container gives a shorter line in characters; keep the container in rem so that this happens automatically, and set steps as list items, not paragraphs.
:::

### What this means for Learn to Fly

The measure is the clearest single defect this Part found in the LTF type system. Both reading measures are too wide: `container-measure` (68ch) holds about 100 average characters of Instrument Sans because of the face's wide zero, and the lesson article's 800 px holds about 111 at 16 px. Replace both with one em-based measure token of about 30em (SCR-017, SCR-018) and apply it to the `MarkdownContent` wrapper inside `LessonPage` and to `Prose`. Keep the article's grid column as it is; only the text inside it narrows, so figures, tables and widgets can still use the full 800 px where they need it (a widget is not prose). Keep the single reading column and the rail layout (SCR-019). Keep body line heights near 1.6 (SCR-020), and stop using `text-3xl` and `text-4xl` with their tight Tailwind line heights for multi-line reading text in Fly mode (SCR-021).

## Rendering: pixels, smoothing and stroke

### What rendering changes, and what it does not

A screen draws each letter on a grid of pixels, and the renderer decides how to treat edges that fall between pixels. Aliased (black-and-white) rendering turns each pixel fully on or off. Grayscale anti-aliasing uses intermediate levels to suggest the edge. Subpixel rendering, which Microsoft marketed as ClearType, treats the red, green and blue stripes of an LCD pixel as separately addressable, roughly tripling the horizontal resolution available for letter edges at the cost of colored fringes [@gugerty2004effects]. Which of these a learner sees is decided by the operating system, browser and display, not by the page.

Gould's IBM program found that anti-aliasing was one of four image-quality variables that together brought screen reading speed up to paper [@gould1987reading]. Later work measured the specific gain from subpixel rendering.

Gugerty and colleagues at Clemson ran four experiments comparing subpixel-rendered text with aliased text on LCD screens [@gugerty2004effects]. Readers preferred the subpixel text and rated it more readable. It improved the accuracy of lexical decision (judging whether a briefly flashed string is a word) and the accuracy and speed of sentence comprehension, but did not change word naming or the speed of reading for pleasure. Two experiments are described in detail only in blog posts by Kevin Larson, a Microsoft reading psychologist whose employer promoted the technology, so those figures are reported, not independently confirmed: in the lexical decision task, 24 readers judged 280 words and 280 pseudowords, and accuracy improved by 17% after correcting for guessing; in sentence comprehension, 46 students judged 144 sentence pairs, reading about 5% faster with subpixel rendering and answering slightly more accurately (91.5% against 89.8%, F(1,45) = 6.06, p = .02). The benefit was larger for italic text. The stimuli were Verdana and Verdana Italic on a 115 dpi screen with the operating system at its default 96 dpi.

Dillon and colleagues asked whether the gain carried over to office work [@dillon2006visual]. In extended reading of 12 point Arial, Larson's summary reports mean reading time of 9 minutes 9 seconds with ClearType against 9 minutes 39 seconds without, about 5% faster, with the advantage holding on each of five screens. In scanning spreadsheets for target rows, completion took 4 minutes 40 seconds against 5 minutes 4 seconds, about 8% faster. There were no differences in accuracy or self-reported visual fatigue. The abstract reports substantial individual differences, from which the authors suggest the technology may not benefit every information worker.

Sheedy and colleagues measured threshold legibility, the smallest size at which text can be identified, across six fonts, three smoothing modes, four sizes, ten pixel heights and four stroke widths [@sheedy2005text]. Pixel height, font, stroke width and smoothing each had significant main effects. Subpixel rendering improved threshold legibility for some fonts and, with Verdana, gave the most legible condition. Increased stroke width (bold) improved threshold legibility, but only at the thinnest width tested.

Boyarski and colleagues found no reliable reading-speed difference between aliased and anti-aliased renderings, nor between screen fonts and older fonts, at the 10 point sizes of a 640 by 480 display of 1998 [@boyarski1998study]. The original paper could not be read for the notes, and two secondary accounts differ on details, so only the null on speed is used here.

The pattern across these studies has a single explanation that runs through the criticism of all of them: the comparison group. In Gugerty's and Dillon's experiments the alternative to subpixel rendering was aliased black-and-white text, the worst baseline, not ordinary grayscale smoothing, a point raised even in comments on the vendor's blog [@gugerty2004effects; @dillon2006visual]. Measured against aliased text, subpixel rendering helps modestly, mostly in brief word recognition and in scanning many words and numbers; measured against good grayscale smoothing, the advantage is hard to find. The effects are a few percent, smaller than the individual differences Dillon reports, and each study used one typeface.

::: myth
**"Subpixel rendering makes on-screen reading much faster."** The gains measured were about 5% in extended reading and 8% in spreadsheet scanning, against aliased text rather than ordinary grayscale smoothing, with large individual differences and no change in fatigue [@dillon2006visual; @gugerty2004effects]. A 1998 comparison found no reliable speed difference between aliased and anti-aliased text at all [@boyarski1998study]. Rendering technology matters most at small sizes and in glances, and modestly even there.
:::

::: {.rule #SCR-022 grade="B"}
**Choose sizes and weights that read well under aliased, grayscale and subpixel rendering alike; never depend on one rendering mode to make thin or small text acceptable.** Rendering effects are real but small and inconsistent across tasks, fonts and individuals [@gugerty2004effects; @dillon2006visual], and stroke width and pixel height interact with smoothing at small sizes [@sheedy2005text]. Several studies, all with old displays and one face each, so B.

*In LTF:* the Instrument Sans axis LTF loads starts at weight 400, so no reading text can go thinner, and this floor should stay. The risk is small text in widgets: the `airspace-profile`, `vor-cdi`, `turn-coordinator` and `control-surfaces` labels at 10 to 11 SVG units are the text most exposed to rendering differences. Give them weight 500 or 600 (several already use `font-semibold`) and the minimum rendered size set in the chapter on numerals and data.
:::

::: {.rule #SCR-023 grade="B"}
**Use regular or medium weights at generous sizes for any text read at a glance, and keep light weights, small sizes and italics out of it.** The benefit of better rendering was largest in the briefest recognition tasks and for italic text [@gugerty2004effects], and the flight-deck review warns that small type, italics and other sub-optimal conditions combine worse than any one alone [@degani1992typography]. Graded B on combined indirect evidence.

*In LTF:* `FlyPanel` steps, the random-event alert and the Fly mode goal should be weight 500 or 600 at the enlarged sizes set by SCR-009, never italic, and never in `text-ink-3`.
:::

### Italics LTF does not load

`src/main.tsx` imports `@fontsource-variable/instrument-sans` and `@fontsource-variable/jetbrains-mono` without a style suffix, which loads the upright weight axis only (the installed package's `index.css` declares `font-style: normal` faces for weights 400 to 700). The package ships separate italic files that LTF does not import. Any italic in the product is therefore drawn by the browser from the upright design. Italics occur in lesson Markdown (any `*emphasis*` a content author writes), in the `traffic-pattern` widget, which sets the radio call for each position in the pattern in `italic`, and in the `sectional-legend` chart text.

The evidence on italics is limited but consistent in direction. Italic was the condition in which rendering mattered most in Gugerty's experiments [@gugerty2004effects]. Boyarski's comparison of Verdana with Verdana Italic found no reliable speed difference in a 1998 setting [@boyarski1998study]. Degani's flight-deck review recommends avoiding long italic strings [@degani1992typography]. None of these studies tested a browser-slanted upright, which is a further step away from a designed italic.

::: {.rule #SCR-024 grade="C"}
**Load a designed italic for every face that sets italic text, or remove italic from the styles; never let the browser slant an upright face, and never set an instruction or a radio call in italic.** Italic is the case where rendering affects recognition most [@gugerty2004effects], and long italic strings are discouraged for operational documents [@degani1992typography]. No study compares synthesized and designed italics, so C.

*In LTF:* either import the italic axis (`@fontsource-variable/instrument-sans/wght-italic.css`) so lesson emphasis uses the designed italic, or style `em` in `MarkdownContent` as weight 600 upright. In `TrafficPattern.tsx`, set the radio call upright in the body face, distinguished by its quotation marks and position, not by slant.
:::

### The platform smoothing switch

LTF's base layer sets `-webkit-font-smoothing: antialiased` on the root. It is a vendor-prefixed property that affects only some platforms, and the notes contain no study of its effect. What the evidence does say is that rendering effects differ between people and tasks [@dillon2006visual], that the gains from one mode over another are small [@gugerty2004effects], and that stroke width matters most when strokes are already thin [@sheedy2005text]. A global switch that changes how every glyph is drawn on part of the audience's machines is a decision that should be tested, not inherited from a template, particularly for light text on the Night canvas, which is where stroke appearance matters most (see the chapter on polarity).

::: {.rule #SCR-025 grade="C"}
**Do not override the platform's text smoothing for reading text unless a side-by-side test on that platform, in both themes, shows the override reads at least as well.** No study in the lane tests the override; rendering effects are small and individual [@dillon2006visual; @gugerty2004effects]. Graded C.

*In LTF:* compare the lesson page in Day and Night on a macOS machine with and without the `-webkit-font-smoothing` declaration in `src/styles/index.css`, at the 18 px body and at the 14 px meta size, and keep it only if it wins.
:::

::: {.rule #SCR-026 grade="C"}
**Review type on the lowest-quality display LTF supports, a standard-density desktop monitor at normal distance, as well as on high-density laptops and phones.** The image-quality findings were made on low-resolution displays and the effects of rendering appear at small sizes and low pixel counts [@gould1987reading; @sheedy2005text]; LTF learners commonly read on a monitor beside the sim. Graded C as a review practice.

*In LTF:* the design review for any change to `src/styles/index.css`, widget labels or `Badge` should include a screenshot from a standard-density external monitor in both themes, not only the developer's laptop.
:::

### What this means for Learn to Fly

Keep the weight floor of 400 that the loaded Instrument Sans axis imposes and the absence of light weights anywhere in the type scale (SCR-022). Change the italic situation: either load the italic axis or restyle `em` as semibold upright, and take italic off the radio calls in the `traffic-pattern` widget (SCR-024). Put the `-webkit-font-smoothing` declaration on trial in a side-by-side comparison rather than keeping it by default (SCR-025). Make Fly mode text medium or semibold and never `text-ink-3` (SCR-023). Add a standard-density monitor to the review routine (SCR-026); the people this product serves sit at gaming desks with ordinary monitors, not only at high-density laptops.

