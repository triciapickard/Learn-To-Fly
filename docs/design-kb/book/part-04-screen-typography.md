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

*In LTF:* the header, footer, beta banner and interactive parts of the reference pages already carry `print:hidden`. Extend the same treatment to `LessonPage` (hide `SectionNav`, the glossary rail, the sign-up banner and the completion panel when printing) so a lesson prints as clean text.
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

## Choosing faces for screens: letters, not outlines

### Readers identify letters

A persistent idea in design writing is that readers recognize words by their outline, the "bouma" or word shape, so that lowercase reads faster because its ascenders and descenders make distinctive silhouettes. Santa Maria's craft book repeats it, with the claims that letters carry more identifying features in their upper halves and that uppercase words form similar blocky rectangles [@santamaria2014web]. The experimental literature rejected this model decades ago.

Larson's review for Microsoft's typography group sets out the case [@larson2005science]. Psychologists moved from word shape to a model in which the letters of a word are recognized in parallel and the letter information is then used to identify the word. Each piece of evidence once offered for word shape has a better explanation. Letters are recognized better in words than alone, but the same advantage appears for pronounceable pseudowords that have no familiar shape, so the cause is regular letter combinations. Lowercase is read 5 to 10 percent faster than uppercase, but speed in uppercase (and even in mirror-reversed text) rises with practice, which points to familiarity. In proofreading, the effect once attributed to word shape came from letter shape when the two were separated: for "than", the misspelling "tnan" (different word shape, similar letter shapes) was missed 19 percent of the time and "tdan" (same word shape, different letter shapes) 8 percent. In moving-window studies, reading with 3 letters visible ran at 207 words per minute, with 9 at 308 and with 15 at 340, as fast as with no window; showing the whole word added nothing beyond the letter count. Larson's conclusion is that word shape is no longer a viable model of word recognition and that a typeface should not be judged by its ability to produce good word shapes. He leaves one door open: in boundary studies, shape together with shared letters still helped a little.

Sheedy and colleagues found the same thing at threshold: individual lowercase letters were 10% to 20% more legible than lowercase words, so words had to be 10% to 20% larger to be identified, which they read as showing that letters play a large role and word shape a small one, if any [@sheedy2005text].

::: myth
**"People read words by their outline shape, so lowercase and distinctive silhouettes are what make text legible."** Experiments that separate word shape from letter shape find the effect in the letters; pseudowords with no familiar shape show the word advantage; uppercase reading speeds up with practice; and letters are more legible than the words they form at threshold [@larson2005science; @sheedy2005text]. The full case, with the studies, is made in Part III, Legibility and the Science of Reading, and is not repeated here.
:::

::: {.rule #SCR-027 grade="A"}
**Judge a typeface for LTF by the distinctness of its individual letters and figures, and reject arguments from word shape or silhouette.** The word-shape model has been replaced by parallel letter recognition across many experiments, and letters are more legible than words at threshold [@larson2005science; @sheedy2005text]. The underlying findings are replicated, so the rule is graded A.

*In LTF:* a proposal to change `font-sans`, to set labels in all lowercase for "friendlier shapes", or to adopt a display face for headings is reviewed by testing letter and figure confusions at the sizes LTF uses, not by its look in a specimen.
:::

### Confusable letters and figures

If letters are the unit, the letters most often confused are the weak points. Beier and Larson built three test fonts with several variants of the lowercase letters readers misidentify most often, and compared variants within each font so that nothing else changed [@beier2010design]. Two groups have high error rates: x-height letters built from mixed straight and curved strokes (e, c, a, s, n, u, o) and narrow single-stem letters (i, j, l, t, f). In a short-exposure test (about 43 ms, parafoveal, 41 participants) and a distance test (34 participants), wide versions of narrow letters outperformed narrow ones (the wide j, l and t, and the wide f in one font; the i showed no clear benefit). Extending x-height letters into the ascender or descender zone helped. The single-storey a was less legible than the double-storey a, with many misreadings as o and q. More open apertures on c and e were not confirmed to help, though extremely closed e forms did worse. The authors warn that wide narrow letters create spacing problems that need kerning, and that their participants were young students reading test designs.

Degani's flight-deck review recommends avoiding fonts with look-alike characters [@degani1992typography], and the notes on Sheedy's study draw the aviation consequence: distinct I, l and 1, and O and 0, matter wherever a learner reads an altitude, a frequency or an identifier [@sheedy2005text].

The LTF faces were examined for this Part by reading their outlines from the installed font files. In Instrument Sans, the capital I and the lowercase l are both plain vertical rectangles with no serifs, tails or spurs, of identical height (the l's ascender reaches the 720-unit cap height) and almost identical width (82 and 80 units). They cannot be told apart in isolation. The figure 1 has a flag and is distinct from both. The zero has no inner mark and differs from the capital O only in width (666 against 786 units). JetBrains Mono's zero has a third contour, an inner mark that separates it from the O, and its fixed 600-unit advance gives the I, l and 1 room for distinguishing serifs and tails. LTF already sets ICAO codes, runway values, lesson and challenge codes and V-speed values in `font-mono`, which puts most identifiers in the face with distinct figures. The exposure is wherever an identifier, a letter-digit code or a single letter appears in body text: a lesson paragraph that mentions a runway, a frequency or an airspace class in running text, a glossary term, or a challenge title.

::: {.rule #SCR-028 grade="B"}
**Test every candidate face, at LTF's smallest sizes and in both themes, for the pairs that matter in flying: I, l and 1; O and 0; 5 and S; and 8 and B.** Misrecognition concentrates in narrow single-stem letters and in similar round forms, and within-font variants differ measurably in legibility [@beier2010design]; operational documents should avoid look-alike characters [@degani1992typography]. One careful study and a review, so B.

*In LTF:* the test applied to Instrument Sans fails for I and l. That does not disqualify the face for prose, where context resolves it, but it decides where the face may not be used (SCR-029).
:::

::: {.rule #SCR-029 grade="C"}
**Set every identifier, code, numeric value, frequency and isolated letter in `font-mono`, whose zero, I, l and 1 are distinct, including when it appears inside running prose.** Instrument Sans's I and l are indistinguishable in isolation and its zero has no mark (measured for this Part); the mono face distinguishes all of them. The principle comes from the letter-confusion evidence [@beier2010design; @larson2005science]; the rule is derived, so C.

*In LTF:* give content authors an inline code or readout convention in lesson Markdown for values and identifiers (the existing inline `code` style in `MarkdownContent` works, though its sunken chip may be heavier than a value needs; a lighter `readout` span is better), and apply `font-mono` to the airspace class letters and frequencies in widget labels. Speeds and aircraft numbers already come from `{{vspeed.*}}` and `{{aircraft.*}}` tokens, so the renderer can wrap every token's output in the mono style automatically.
:::

### Serif, sans and the screen face

Boyarski and colleagues tested Georgia and Verdana, two faces designed for screens, against older faces such as Times New Roman, serif against sans serif, and Verdana against its italic, and found no reliable differences in reading speed [@boyarski1998study]. Their cautious conclusion was that the faces of the time performed about as well as the new screen fonts and that faster reading would need more than a change of font. Arditi and Cho built fonts differing only in serif size and found a small threshold advantage for small serifs, explained mostly by the spacing serifs add, and no effect of serifs on reading speed in serial presentation or continuous reading [@arditi2005serifs]. Wallace and colleagues found no font reliably fastest across 352 readers [@wallace2022towards], and Dyson's review summarizes the typeface literature as showing no clear legibility differences between faces [@dyson2004physical]. Degani's 1992 recommendation that sans serif is "usually more legible" rests on older print studies and has been qualified by the later screen work [@degani1992typography].

The one place face design measurably matters is small size. Sheedy's threshold study found Verdana and Arial the most legible of six fonts and Times New Roman and Franklin the least [@sheedy2005text], and Legge and Bigelow connect this to x-height: Verdana's x-height fraction is about 0.55 and Times New Roman's about 0.45, and a larger x-height gives the lowercase more pixels [@legge2011print]. Arditi's spacing result points the same way: at small sizes, space between letters is the active ingredient [@arditi2005serifs].

::: myth
**"Sans serif faces are more legible on screens than serif faces."** Controlled comparisons of reading speed found no reliable difference between serif and sans serif faces on screen [@boyarski1998study], fonts differing only in serifs read at the same speed [@arditi2005serifs], and a large online study found no font fastest across readers [@wallace2022towards]. The full case, with the studies, is made in Part III, Legibility and the Science of Reading, and is not repeated here.
:::

::: {.rule #SCR-030 grade="A"}
**Do not choose or defend a text face on serif-versus-sans grounds; choose it for x-height, letter and figure distinctness, numeral features, weight range, language coverage and licensing.** Independent studies with different methods find no reliable reading difference attributable to serifs or to the screen-versus-print origin of a face at ordinary sizes [@boyarski1998study; @arditi2005serifs; @wallace2022towards; @dyson2004physical]. Replicated null results, so A.

*In LTF:* Instrument Sans's x-height (0.51) is at the screen-face mean, it has tabular figures, and its variable weight axis covers 400 to 700. Its weaknesses are the I and l (SCR-028) and its lack of designed alternates for the zero. Those are reasons for the mono convention in SCR-029, not for replacing the face.
:::

::: {.rule #SCR-031 grade="B"}
**For text set below about 14 px, including widget labels and badges, prefer a face with a large x-height and open default spacing, and add tracking rather than weight when small text crowds.** Threshold legibility was best for large-x-height faces and improved with stroke width only at the thinnest strokes [@sheedy2005text; @legge2011print], and spacing drives small-size legibility through crowding [@arditi2005serifs]. Threshold studies, not reading studies, so B.

*In LTF:* JetBrains Mono, with an x-height of 0.55 and fixed wide advances, is the better face for widget tick labels and small readouts; Instrument Sans at 10 to 11 SVG units with `font-semibold` is the weaker choice used in several widgets today.
:::

::: {.rule #SCR-032 grade="C"}
**Keep lesson text in a conventional, familiar text face and reserve any distinctive face for display sizes and brand marks.** Familiarity and practice explain much of what is attributed to letter and word form [@larson2005science], unusual letterforms that test well in isolation are disliked in running text [@beier2010design], and the craft literature holds that readers read best what they read most [@santamaria2014web]. Graded C.

*In LTF:* if the planned display face of `v1.md` Section 21.3 (a condensed uppercase face) is ever introduced, confine it to `display-*` sizes on the landing page and `PageHeader` titles; never use it for `heading-sm`, body, labels or Fly mode text.
:::

### What this means for Learn to Fly

Keep Instrument Sans for prose: its x-height is at the screen-face mean, the serif question is not a reason to change it, and nothing in the evidence says another face would be read faster (SCR-030). Keep JetBrains Mono as the face for "everything you measure", which the token comment in `tokens.css` already states; it is also the face with the distinct zero, I, l and 1. Change the convention for identifiers in running text: set them in mono, ideally automatically for every aircraft token the content renderer expands (SCR-029). Move widget tick labels and small readouts to the mono face at semibold (SCR-031). Write the confusable-pair test into the review checklist and run it on any proposed face (SCR-028). Treat a future display face as a brand decision limited to display sizes (SCR-032), which is where Part XX, Brand Identity and Distinctiveness, takes the question further.

## Web fonts: loading, fallback and metrics

### What the browser does while a font loads

A web font is a resource the page must fetch before it can draw text in that face. Until it arrives, the browser either hides the text, draws it in a fallback face, or does some of each. The CSS Fonts Module Level 4 defines the policy through the `font-display` descriptor, and the Working Draft of 12 November 2026 gives five values [@w3c2026cssfonts]:

- `auto` lets the browser decide.
- `block` has a short block period (about 3 seconds is recommended), during which text is invisible, then an indefinite swap period.
- `swap` has a very short block period (100 ms or less recommended) and an indefinite swap period: fallback text appears almost at once, and the web font replaces it whenever it arrives, however late.
- `fallback` has a very short block period and a short swap period (about 3 seconds); if the font has not arrived by then, the fallback stays for the life of the page. The specification describes it as suited to body text.
- `optional` uses the web font only if it is available in time for first paint, and the page must not shift when it arrives.

These durations are recommendations to browsers and authors, not measured human thresholds, and a Working Draft can change, although the features described are widely implemented [@w3c2026cssfonts]. The design consequence is a choice between two failures: invisible text (`block`) or text that changes face, and possibly size and line breaks, while the reader is reading (`swap`). `fallback` and `optional` bound the second failure in time.

The cost of a late swap is measured by the Core Web Vitals, which Google defines as the field metrics for loading, interactivity and visual stability [@google2024web]. Cumulative Layout Shift (CLS) is "good" at 0.1 or less; Largest Contentful Paint (LCP) at 2.5 seconds or less; Interaction to Next Paint at 200 ms or less; a page passes when it meets all three at the 75th percentile of page loads, separately for mobile and desktop. The thresholds mix research on perception with achievability: the threshold article chose 2.5 seconds for LCP because faster values were not consistently achievable across real sites. A font swap that changes line breaks in a paragraph the learner has begun to read moves everything below it, which is layout shift in the most literal sense, and a heading drawn in a late web font can be the largest contentful element whose paint time LCP records.

### Fallback metrics

Fallback faces have different proportions. X-height fractions vary by a factor of two across roman faces [@legge2011print], so the same `font-size` in the fallback and the web font can produce visibly different sizes and line lengths. The CSS Fonts specification provides `font-size-adjust`, which takes an aspect value (an x-height-to-size ratio) and scales the used size of whichever face is drawing so that a fallback with a different x-height keeps the same apparent size; it affects the used size and the `ex` and `ch` units, not the computed size or `em` [@w3c2026cssfonts]. Brown's essay on modular scales gives the craft version of the same warning: the whole system of measurements depends on the chosen typeface being available, fallback fonts take over when the web font fails, and the designer should start from baseline fonts and enhance from there [@brown2011more].

### What LTF does now

LTF self-hosts both faces through the `@fontsource-variable` packages imported in `src/main.tsx`, with no Google Fonts link and no preconnect, and `vite.config.ts` forbids inlining fonts as data URLs so the content security policy can keep `font-src 'self'`. The installed package CSS declares `font-display: swap` for every face. Instrument Sans is split by `unicode-range` into a latin and a latin-ext face; JetBrains Mono into six subsets (latin, latin-ext, cyrillic, cyrillic-ext, greek and vietnamese), of which a browser fetches only those whose ranges the page's text uses [@w3c2026cssfonts]. The latin upright files are about 30 KB (Instrument Sans) and 40 KB (JetBrains Mono) as woff2 in the installed packages. The project's size check, `scripts/check-bundle-size.ts`, budgets initial JavaScript at 250 KB gzipped and does not count fonts.

The fallback stacks are `system-ui, -apple-system, 'Segoe UI', sans-serif` for `font-sans` and `ui-monospace, SFMono-Regular, Menlo, monospace` for `font-mono`. The specification notes that `system-ui` is one of the universal generic families and that `ui-monospace` and the other `ui-*` families may not exist on every platform [@w3c2026cssfonts]. No `font-size-adjust` or metric override is declared, so the fallback draws at its own x-height and widths, which differ by platform. Under `swap`, a learner on a slow connection reads the opening of a lesson in the system face and sees it reflow into Instrument Sans whenever the file arrives.

::: {.rule #SCR-033 grade="C"}
**Load body faces with `font-display: fallback`, and use `optional` on surfaces opened in the middle of a task, so that text never changes face after the reader has started reading it.** The specification describes `fallback` as suited to body text and defines `optional` as the policy under which the page must not shift [@w3c2026cssfonts]; late swaps produce layout shift [@google2024web]. A standards-based policy, graded C.

*In LTF:* the packages' CSS hard-codes `swap`, so LTF must declare its own `@font-face` rules (pointing at the same self-hosted files) or override the descriptor, with `fallback` for the main app and `optional` for `FlyModeLayout`, which a learner opens on a second screen mid-flight and which must never reflow under a glance.
:::

::: {.rule #SCR-034 grade="C"}
**Match the fallback face's metrics to the web font (with `font-size-adjust` or equivalent metric overrides) so that the swap, if it happens, changes neither apparent size nor line breaks.** Fallbacks differ in x-height [@legge2011print]; `font-size-adjust` holds apparent size constant across faces [@w3c2026cssfonts]; unbounded swaps that move text count against the visual stability metric [@google2024web]. Graded C.

*In LTF:* Instrument Sans's aspect value is 0.51 (its x-height on a 1,000-unit em, measured for this Part) and JetBrains Mono's 0.55. Declaring `font-size-adjust: 0.51` on the root sans text and `0.55` on mono text keeps fallback text at the same apparent size. Note that `font-size-adjust` also rescales the `ch` unit, which is one more reason to set the measure in em (SCR-018).
:::

::: {.rule #SCR-035 grade="C"}
**Design and review every page in its fallback fonts as well as its web fonts; the page must be fully usable, with hierarchy intact and nothing clipped, if the web fonts never load.** The design system should depend on the fallback first and the web font as an enhancement [@brown2011more], and the generic families are the only faces the specification guarantees [@w3c2026cssfonts]. Craft authority, graded C.

*In LTF:* add a development toggle (or a test project in Playwright) that blocks the two font files, and review `LessonPage`, `FlyModePage`, `SpeedsPage` and the landing hero with it. Check in particular that `readout` values in the `ui-monospace` fallback still align (fallback monospace faces are fixed-width, so tabular alignment survives) and that `display-xl` headings in `system-ui` do not overflow their `max-w-[12ch]`.
:::

::: {.rule #SCR-036 grade="C"}
**Load only the styles, axes and character subsets the product uses, and count font bytes in the performance budget.** `unicode-range` limits each face to the characters in its range so unused subsets are never fetched [@w3c2026cssfonts], and font bytes compete with the content whose paint time LCP measures [@google2024web]. Graded C.

*In LTF:* the current imports are already lean (upright weight axes, unicode-range subsets). Adding the italic axis for SCR-024 adds one file per subset; extend `scripts/check-bundle-size.ts` or a separate check to report total woff2 bytes for the latin subsets, so the cost of a new style or face is visible in review.
:::

::: {.rule #SCR-037 grade="C"}
**Measure layout shift and largest-paint time on lesson pages in the field, at the 75th percentile, separately for mobile and desktop, and treat a font-caused shift above the good threshold as a defect.** Core Web Vitals define "good" as CLS at or below 0.1 and LCP at or below 2.5 seconds at the 75th percentile [@google2024web]. The thresholds are partly pragmatic, chosen so that enough real sites can meet them, and are not proven optima for learning, so C.

*In LTF:* the lesson h1 (`text-3xl font-bold sm:text-4xl`) is a likely largest element at the top of `LessonPage`; with `swap`, its paint and the first paragraph's line breaks both depend on the font arriving. Instrument the page with real-user measurement before and after SCR-033 and SCR-034.
:::

### Text that must not wait

Two parts of LTF have stricter needs than the average page. Fly mode is opened during a flight, and its content is a list of steps and a stopwatch; a reflow there moves the checkbox a learner is about to tap. And the theme script in `index.html` already shows the project's own pattern for avoiding a flash: it sets `data-theme` before first paint from local storage and the operating-system setting. Typography should follow the same principle. Anything that changes how text is drawn (theme, text-size preference from SCR-015, face choice) is applied before first paint, and anything that cannot be known before first paint (a font that has not arrived) is allowed to change nothing that the reader can see.

### What this means for Learn to Fly

Keep self-hosting, the `font-src 'self'` policy and the unicode-range subsets. Change the loading policy from the packages' `swap` to `fallback` for the app and `optional` for Fly mode by declaring LTF's own `@font-face` rules (SCR-033). Add `font-size-adjust` with the measured aspect values 0.51 and 0.55 so that a fallback draws at the same apparent size (SCR-034). Add a fonts-blocked review mode and put it in the review checklist (SCR-035). Count font bytes alongside the JavaScript budget (SCR-036), and add real-user CLS and LCP measurement to lesson pages (SCR-037), which also serves Part XXII, Motion and Perceived Performance. Apply any text-size preference with the same early script that applies the theme.

## Variable axes, weights and optical size

### What a variable font offers

A variable font stores a continuous design space instead of a set of separate files. The CSS Fonts specification maps its registered axes to ordinary properties: `wght` to `font-weight`, `wdth` to `font-width`, `slnt` or `ital` to `font-style`, and `opsz` to `font-optical-sizing` [@w3c2026cssfonts]. Weights run from 1 to 1000, with 400 as normal and 700 as bold, and fractional weights are valid for variable fonts. `font-variation-settings` gives low-level access to any axis by its four-letter tag, and the specification recommends the higher-level properties wherever they exist. Under `font-optical-sizing: auto`, the default, the browser may set the `opsz` axis to a value close to the used font size, so small text gets sturdier, more open letterforms and large text finer ones; synthesized optical sizing is not allowed. User agents must not synthesize condensed or expanded faces.

The specification states what fonts can do, not what is good for readers, and it contains no legibility evidence [@w3c2026cssfonts]. The notes for this lane say the same about the most tempting use of a weight axis, tuning weight per theme so that light text on a dark ground looks as heavy as dark text on light: it is a design hypothesis to test, not something the specification or the lane's evidence establishes. The reading evidence on weight is narrow. Sheedy and colleagues found that increased stroke width improved threshold legibility, but only at the thinnest width tested [@sheedy2005text], so more weight is not generally better; it rescues text that is already too thin.

### What LTF loads and uses

Read from the installed packages for this Part: the Instrument Sans file LTF imports has a single axis, `wght`, from 400 to 700. The package also ships a width-axis file that LTF does not import. There is no `opsz` axis, so `font-optical-sizing` has no effect on LTF's sans text, and the same outlines are used from the 12 px `eyebrow` to the 64 px `display-xl`. The JetBrains Mono file has a `wght` axis from 100 to 800.

The code uses weights through two routes. The project utilities fix weight per role: 700 for `display-xl` and `display-lg`, 600 for `display-md` and the `heading-*` styles, 500 for `label` and all `readout-*` styles, 400 for body. Pages also apply `font-semibold` (about 163 uses) and `font-bold` (about 94) directly, and bold mono is common on pages (the KIAS cells on `SpeedsPage` are `font-mono text-2xl font-bold`, the result percentage `font-mono text-5xl font-bold`, dashboard stats `font-mono text-2xl font-bold`), although the `readout` utilities are weight 500. The same kind of value, a measured number, is therefore drawn at 500 in some places and 700 in others, with no rule for which.

::: {.rule #SCR-038 grade="C"}
**Control font axes through the high-level properties (`font-weight`, `font-style`, `font-width`, `font-optical-sizing`) and use `font-variation-settings` only for an unregistered axis.** The specification recommends the high-level properties where they exist [@w3c2026cssfonts]. A standards recommendation, graded C.

*In LTF:* no `font-variation-settings` appears in `src/styles/index.css` today; keep it that way, and if a width axis is ever imported for condensed labels, set it with `font-width`.
:::

::: {.rule #SCR-039 grade="C"}
**Use a fixed set of four weights (400 body, 500 labels and readouts, 600 headings and emphasis, 700 display and alerts), each tied to a role in the type tokens, and do not apply weight classes directly in pages.** Fractional and arbitrary weights are available in a variable font [@w3c2026cssfonts], but more weight helps legibility only where strokes are too thin [@sheedy2005text], so extra weights add inconsistency without a reading benefit. Graded C.

*In LTF:* decide one weight for measured values. The evidence offers no reason to prefer 500 or 700 for legibility at 24 px and above, so choose by hierarchy: a `readout-display` utility at 700 for the hero values (KIAS cells, result percentage, stopwatch), and `readout` at 500 everywhere else. Replace page-level `font-mono ... font-bold` with those utilities.
:::

::: {.rule #SCR-040 grade="C"}
**When a face is chosen or replaced, prefer one with an optical-size axis if small labels and large display type must share it, and leave `font-optical-sizing` at `auto`.** Under `auto` the browser matches the `opsz` axis to the used size, giving small text sturdier forms [@w3c2026cssfonts]; whether that improves reading has not been tested in this lane, so the rule is a selection preference, graded C.

*In LTF:* Instrument Sans has no `opsz` axis, so its small sizes are compensated only by weight and tracking (the `eyebrow` style at 600 and 0.08em). This is not a reason to change face (SCR-030) but it is a criterion for any future face, including a display face.
:::

::: {.rule #SCR-041 grade="C"}
**Never use a weight the loaded font does not contain; load the axis range the styles need so that the browser does not synthesize bold or italic.** A synthesized style is drawn from outlines designed for another style, as LTF's italics already are (see the chapter on rendering); the weight scale itself (1 to 1000, with 400 normal and 700 bold) says nothing about which weights a given file contains [@w3c2026cssfonts]. Graded C.

*In LTF:* Instrument Sans covers 400 to 700 and JetBrains Mono 100 to 800, so the four weights of SCR-039 are all real; a `font-extrabold` (800) on sans text, or any `font-light`, would fall outside the sans axis and should fail review.
:::

### Weight, polarity and the dark theme

The tempting fix for thin-looking light text on the Night canvas is a different weight in Night than in Day. The polarity research in the next-to-last chapter of this Part supports larger and brighter small text in dark themes [@buchner2009advantage; @piepenbrock2013positive], but it does not test weight shifts. A per-theme weight adjustment is cheap to build with a variable `wght` axis and should be treated as an experiment: compare reading time and quiz accuracy for the 14 px meta text and the widget labels in Night with and without a small weight increase, rather than adjusting by eye.

### What this means for Learn to Fly

Keep the variable files and the 400 to 700 sans range; they cover every weight the product needs. Change the weight vocabulary: four role-based weights through the type utilities (SCR-039), one decision for measured values instead of the current mix of 500 and 700 mono, and no direct `font-bold` or `font-semibold` on page elements once the utilities exist. Use only high-level axis properties (SCR-038), never weights outside the loaded axis (SCR-041), and weigh optical sizing in any future face choice (SCR-040). Run the Night-theme weight test before adding any theme-dependent weight.

## Numerals, tables and data on screens

### Figure styles and what they are for

Rutter's handbook, applying Bringhurst's rules to the web, distinguishes two figure styles [@rutter2017web]. Lining figures sit on the baseline at one height, like capitals; old-style figures have a varying rhythm, like lowercase. Lining figures draw the eye, so in running text they can feel like shouting, while old-style figures sit comfortably in prose; lining figures suit all-caps settings and places where readers scan, compare or search, such as lists and tables. A second distinction is spacing: proportional figures have widths that suit each digit, while tabular figures share one width so that columns line up and changing values do not jitter. The CSS Fonts specification exposes all of these through `font-variant-numeric`: `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal` and `slashed-zero`, and states that tabular numerals allow columns of numbers to line up [@w3c2026cssfonts]. Each value works only if the font contains the corresponding OpenType feature.

This is craft authority. Rutter's claim that lining figures help scanning is plausible, but the excerpts in the notes cite no experiment for it [@rutter2017web]. The empirical support for careful numeric setting is indirect: Dillon and colleagues found that rendering quality mattered most in tasks that required scanning many rows of a table [@dillon2006visual], which shows that numeric scanning is sensitive to the details of how figures are drawn, and Degani's flight-deck review treats procedures and numbers on cards as displays whose legibility is a safety property [@degani1992typography].

### What LTF's faces contain

Measured from the installed font files for this Part: Instrument Sans's default figures are proportional, with advances from 391 units (the 1) to 666 (the 0) on a 1,000-unit em. The font contains `tnum` and `pnum` features and a tabular zero (`zero.tf`), but no `onum`, `frac` or `zero` (slashed zero) feature, so `oldstyle-nums`, `diagonal-fractions` and `slashed-zero` do nothing in LTF's sans text. JetBrains Mono is monospaced (every glyph 600 units), so its figures are tabular by construction; it contains a `frac` feature, and its default zero already carries an inner mark.

In the code, the `readout`, `readout-sm` and `readout-lg` utilities set JetBrains Mono with `tabular-nums`, and a `tabular` utility exists for sans text, used in two places in the components. Numbers outside the readouts, in sans text, are proportional: durations ("About n minutes"), counts ("Showing n challenges of n"), lesson table cells rendered by `MarkdownContent`, and any value a content author writes in Markdown rather than through a token.

::: {.rule #SCR-042 grade="C"}
**Set every value that changes, counts, or sits in a column with tabular lining figures, either in the mono face or in the sans face with `tabular-nums`.** Tabular figures keep columns aligned and stop changing values from jittering [@w3c2026cssfonts; @rutter2017web]. Craft and standards, graded C.

*In LTF:* keep the `readout` utilities as they are. Apply `tabular` to the `Stopwatch` (already mono), `ProgressBar` and `ProgressRing` labels, the "Showing n challenges" status line, the dashboard stat tiles, the score preview in `DebriefForm` and every numeric table cell. Any sans number that updates live without `tabular-nums` will shift its neighbors as digits change width, because Instrument Sans's 1 is less than two-thirds as wide as its 0.
:::

::: {.rule #SCR-043 grade="C"}
**Use lining figures everywhere in LTF, including prose, and do not ask for old-style or slashed figures that the faces do not contain.** Old-style figures suit prose only in a typeface that has them [@rutter2017web], and `font-variant-numeric` values depend on the font's features [@w3c2026cssfonts]; Instrument Sans has no `onum` or `zero` feature (measured for this Part). Graded C.

*In LTF:* if a distinct zero is needed in sans text, it is a reason to use the mono face for that value (SCR-029), not to add `slashed-zero`.
:::

### Tables designed to be read

Rutter's chapter on tables ("designed to be read, not looked at") is the most practical source in the lane for LTF's reference pages [@rutter2017web]. Size columns to their content rather than stretching tables to full width. Remove borders, fills and zebra striping and use alignment and white space instead, following Tschichold's objection to tables that look like nets. Left-align text columns and right-align numbers, with headings aligned like their data. When decimal precision varies, align on the decimal point (CSS Text Level 4 allows `text-align` with a string, with patchy support at the time he wrote). Use tabular lining figures, or a monospaced face, for numeric tables. Pad cells with less space above than below and reduce line height inside cells. On small screens, either use a condensed or slightly smaller font (not both) with horizontal scrolling, or linearize the table into stacked blocks. His argument against zebra striping (banding emphasizes alternate rows) is reasoned, not measured, and runs against common practice.

LTF's lesson tables in `MarkdownContent` are `w-full`, left-aligned throughout, with a `border-b-2` header row on a sunken fill and a `border-b` under every row, inside a bordered, rounded, horizontally scrolling region, at `text-sm` on phones and `text-base` from `sm`. The speeds page sets its main `Table` at `text-lg` with 24 px bold mono KIAS cells. The scrolling wrapper is the right answer for phones; the rest is the "net" Rutter argues against.

::: {.rule #SCR-044 grade="C"}
**Right-align numeric columns (and their headings), align on the decimal point where precision varies, and size tables to their content rather than to the container.** Alignment lets the eye compare magnitudes down a column [@rutter2017web]; scanning tables is a task in which presentation measurably matters [@dillon2006visual]. Craft authority, graded C.

*In LTF:* `MarkdownContent` cannot know which columns are numeric, so give content authors the GitHub-flavored Markdown column alignment syntax (a colon on the right of the separator row) and make the `th` and `td` renderers honor it; remove `w-full` from lesson tables so short tables do not stretch across the 800 px article.
:::

::: {.rule #SCR-045 grade="C"}
**Separate table rows with space and at most a hairline rule; no zebra fills, no heavy header borders and no cell borders on reference tables.** Borders, fills and banding compete with the data [@rutter2017web]. Reasoned craft guidance without measurement, graded C.

*In LTF:* in `MarkdownContent`, replace the `border-b-2 border-line bg-surface-sunken` header with a semibold header over a single `border-line` rule, keep the `border-b` hairline rows, and tighten cell line height (the cells currently inherit the 1.625 body leading).
:::

### Text inside scalable diagrams

LTF's widgets are hand-built SVGs drawn with a `viewBox` and `className="w-full"`, so everything inside, including text, scales with the width at which the widget is drawn. Label sizes are set in SVG user units, typically 10 or 11 (for example `text-[11px]` labels in `AirspaceProfile`, `TurnCoordinator`, `VorCdi` and `TrafficPattern`). A worked case, calculated for this Part from the code: `AirspaceProfile` uses a 720-unit-wide `viewBox`. In the 800 px lesson article, inside `WidgetFrame`'s border and `p-4`, it draws about 766 px wide, so an 11-unit label renders at about 11.7 px. On a 375 px phone, after the page's `px-4` and the frame's padding, it draws about 309 px wide, and the same label renders at about 4.7 px, an x-height of about 2.4 px. That is far below any size discussed in the chapter on size, and below the threshold sizes Sheedy tested [@sheedy2005text]. The `vor-cdi` instrument (240-unit `viewBox`) is less affected but still scales its 10 to 11 unit labels with width.

::: {.rule #SCR-046 grade="B"}
**Give every widget label a minimum rendered size equal to the reading floor for its surface, and when a diagram is narrower than its design width, enlarge the labels in user units (or switch to a simplified layout) rather than letting them shrink.** Legibility falls sharply below the critical print size [@legge2011print], threshold legibility depends on pixel height and stroke [@sheedy2005text], and the flight-deck review treats small numeric labels as a hazard [@degani1992typography]. The size evidence is strong; the specific mechanism for SVG is an engineering inference, so B.

*In LTF:* in `src/features/widgets/shared/svg.tsx`, add a hook that measures the rendered width of the SVG and returns a scale factor, so `Label` and the widget text can set font size in user units as the desired pixel size divided by that factor. Test `AirspaceProfile` and `VorCdi` at 375 px; until then, allow those two widgets to scroll horizontally at a minimum width on phones (diagrams are excepted from reflow [@w3c2023wcag]).
:::

::: {.rule #SCR-047 grade="C"}
**Set every number a learner must read in a widget or a checklist in the mono readout face at weight 500 or more, never in the sans face at small sizes.** The mono face has tabular figures and a distinct zero (measured for this Part), and confusable figures are a known weak point [@beier2010design]. Graded C.

*In LTF:* the `PitchPower` overlay already uses `font-mono text-[11px]`; extend the convention to the airspeed and altitude values in `Tape`, `Gauge` labels and any numeric labels in the `traffic-pattern` widget.
:::

### What this means for Learn to Fly

Keep the readout utilities, which already pair JetBrains Mono with tabular figures, and keep the scrolling wrapper on lesson tables. Change the numerals outside them: apply `tabular` to every live or columnar sans number (SCR-042) and stay with lining figures, since the sans face has no old-style set (SCR-043). Rebuild the lesson table styling: author-controlled numeric alignment, content-width tables, hairline rows, a lighter header (SCR-044, SCR-045). Fix the widget label scaling, the most serious small-text problem found in the code, with a measured-width scale factor in the shared SVG primitives (SCR-046), and set widget numbers in mono (SCR-047). The visualization side of these widgets is covered in Part XII, Information Visualization.

## Type scales and hierarchy on screens

### The modular scale and its limits

Brown argues that web layouts should be built from the type outward, with measurements derived from a harmonious system tied to the typeface rather than from arbitrary or easily divisible pixel numbers [@brown2011more]. His tool is the modular scale: a sequence made by multiplying and dividing a starting number by a ratio. With the golden mean (1:1.618) and a start of 10, multiplying gives 16.180, 26.179 and 42.358, and dividing gives 6.180, 3.819 and 2.360. A double-stranded scale combines two starting values or two ratios to give more usable steps. His worked example sets body text at 18 px in Minion Pro, a measure of 497.406 px with a line height of 1.54, a 29.124 px h1, a 190 px h2 at line height 1, and a 21.178 px intro derived by subtracting scale values; a 15 px sidebar text is an improvised value outside the scale. He advises starting with the body size and the typeface and deriving the rest, calls the scale a source of educated suggestions rather than strict rules, and warns that it depends on the typeface being available.

There is no empirical test of the claim that modular-scale type is more readable or more pleasing. Its justification is the craft tradition of proportional systems and the practical value of a limited set of related sizes. The notes add a criticism: ratios as steep as the golden mean produce extreme jumps at both ends (the example's 190 px heading sits far from its 18 px body) and real interfaces need sizes the scale does not generate, which is why Brown improvises. The reading evidence adds a constraint no ratio supplies: the lower end of any scale must stay above the legibility floor [@legge2011print; @rello2016make].

### LTF's scale as built

The project utilities define nine sizes: 12, 14, 16, 18, 20, 24, 32, 44 and 64 px. The ratios between neighbors, computed for this Part, are about 1.17, 1.14, 1.13, 1.11, 1.2, 1.33, 1.38 and 1.45: gentle and nearly even at the small end, accelerating at the display end. That shape is defensible for an interface (fine steps where labels and body text sit close together, larger jumps where display headings need contrast), even though it is not a single-ratio modular scale. The problem is not the scale; it is that the code does not use it consistently.

Pages set headings with raw Tailwind sizes that sit between the utility steps: `text-3xl` (30 px) for the lesson h1 and the 404 and error h1s, `text-4xl` (36 px) for the lesson h1 from `sm` and the Fly mode h1, `text-5xl` (48 px) and `text-6xl` (60 px) for result and 404 numerals, and `text-2xl font-bold` (24 px, 700) for the section h2s on the module, challenge, dashboard and lesson block headings, where the scale's 24 px step (`heading-lg`) is weight 600. Counted together, reading and heading text in the product uses at least thirteen sizes (12, 14, 16, 18, 20, 24, 30, 32, 36, 44, 48, 60 and 64 px), before the 10 and 11 unit widget labels. `body-md` exists and is unused. The result, described in the product dossier, is that an h2 is 24 px at 700 on app pages, 32 to 44 px on the landing page and 20 px on the reference hub: the same level of the document has three appearances.

::: {.rule #SCR-048 grade="C"}
**Define one type scale of named roles and make it the only way pages set type; no raw size or weight classes for headings or reading text in page code.** A limited set of related sizes yields consistency, the practical core of the modular-scale argument [@brown2011more], and it supports the project rule that visual values come from tokens. Craft authority, graded C.

*In LTF:* map every raw use to a role: lesson h1 to `display-md` (or a new `display-sm` if 32 px proves too large beside the article), section h2s to `heading-lg`, the Fly mode h1 to a Fly-specific role, result numerals to a `readout-display` role. Then add a lint rule or a review check that rejects `text-2xl` to `text-6xl` combined with `font-bold` in `src/pages` and `src/features`.
:::

::: {.rule #SCR-049 grade="C"}
**Derive the scale from the body size, which is set by the legibility evidence, and keep the small-end steps gentle (ratios near 1.1 to 1.2) and the display steps wider.** Brown starts from the body and derives the rest [@brown2011more]; the base must clear the size floor established by the reading studies [@legge2011print; @rello2016make]; steep ratios push the small end too small. Graded C.

*In LTF:* if the lesson body moves to 18 px (SCR-007), re-derive the scale from 18: the existing 14, 16, 20 and 24 px steps still work as caption, small, subhead and heading, and the 12 px step should be reserved for uppercase labels (SCR-011).
:::

::: {.rule #SCR-050 grade="C"}
**Tie each document level to exactly one role per surface type (app page, marketing page, Fly mode), so that an h2 looks the same everywhere it appears on that kind of page.** A scale is a means of consistency [@brown2011more]; inconsistent hierarchy defeats the stable spatial frame that long screen reading needs [@mangen2013reading]. Graded C.

*In LTF:* app pages (`PageHeader`, lesson, module, challenge, dashboard, reference): h1 `display-md`, h2 `heading-lg`, h3 `heading-md`. Landing page: h1 `display-lg`/`display-xl`, h2 `display-md`/`display-lg`. Fly mode: its own enlarged set (SCR-009). Write the mapping into `PageHeader` and the `MarkdownContent` heading renderers, where `h2` is currently rendered as `h3` with `text-xl font-semibold`.
:::

### Uppercase labels and tracking

The `eyebrow` style (12 px, 600, uppercase, 0.08em tracking) is used above almost every section heading, table header and stat, which the dossier counts among the template-like traits of the product. On reading grounds, the case against long runs of capitals rests on practice and space, not word shape [@larson2005science], and the craft advice is to use capitals only for short labels where speed over a few characters matters more than continuous reading [@santamaria2014web]. The eyebrows are short, so they are acceptable as labels; the risk is repetition and the 12 px size, discussed in the chapter on size.

::: {.rule #SCR-051 grade="C"}
**Use uppercase tracked text only for labels of one to four words, never for sentences, headings or instructions, and do not stack an eyebrow above every heading.** Long capital runs are slower because readers are less practiced with them [@larson2005science], and capitals suit short labels [@santamaria2014web]. Graded C.

*In LTF:* keep `eyebrow` for category labels ("Module 2", "Challenge C4.3") and table headers; remove it where it repeats the heading below it, and never apply `uppercase` to callout bodies, button text or Fly mode steps.
:::

::: {.rule #SCR-052 grade="C"}
**Review every derived size at its smallest rendered use on its farthest surface before adding it to the scale.** The scale is not a proof of legibility; each step must be checked where it is used smallest [@brown2011more; @legge2011print]. Graded C.

*In LTF:* the smallest uses are widget labels on phones, `Badge` text, `eyebrow` labels and `text-sm` meta text on a monitor beside the sim; check each against the angle table in the chapter on size.
:::

### Headings that wrap

The base layer gives `h1` to `h4` `text-wrap: balance`, which evens out the lines of a wrapping heading so that a short last word does not hang alone. This is a sensible default for the short headings LTF writes ("Yes, you can fly a plane.", "Read a little. Try it on the page. Fly it in the sim."). The specification evidence in the notes does not cover text wrapping, so this is recorded only as a practice to keep, with the line-height caution from the chapter on the measure: the tight display line heights are acceptable only because balanced display headings are short.

### What this means for Learn to Fly

Keep the shape of the existing scale (gentle small steps, wider display steps) and the balanced wrapping of headings. Change the way it is used: one set of named roles, used by every page, with raw `text-*xl font-bold` headings removed and a check that keeps them out (SCR-048, SCR-050). Re-derive the scale from the 18 px body (SCR-049), give measured display values a role of their own, cut the eyebrow back to genuine labels (SCR-051), and check each step at its smallest use (SCR-052). Part II, Classical Typography, covers the print tradition of proportional scales, and Part XXI, Design Systems, Process and Craft, covers how tokens are governed.

## Polarity, dark themes and glance reading

### Polarity is mostly luminance

Gould's IBM experiments counted dark characters on a light background among the four image-quality conditions under which screen reading matched paper [@gould1987reading]. Later work explains why. Buchner, Mayr and Brandt manipulated text-background polarity and overall display luminance independently and found no advantage for positive polarity (dark on light) once overall luminance was matched; only luminance mattered, with better performance on brighter displays [@buchner2009advantage]. Their conclusion is that text is more readable when overall luminance is high, as it usually is in positive-polarity displays, and that polarity itself does not affect readability. That is a strong claim from a single experiment whose abstract does not give the sample or measure.

Piepenbrock and colleagues tested whether the positive-polarity advantage holds for older adults, for whom light scatter in the aging eye might have reversed it, and found it in both younger and older groups, recommending dark characters on a light background for all ages [@piepenbrock2013positive]. A follow-up by the same group, described in the notes for that paper, found the advantage in proofreading grew linearly as characters got smaller, across 8 to 14 point sizes (0.22 to 0.34 degrees of vertical angle), and recommended avoiding negative polarity especially with small fonts. Dobres, Chahine and Reimer tested glance-like reading, measuring the display time needed to read a word accurately, with two sizes, two polarities and two ambient light levels [@dobres2017effects]. Thresholds were worst for negative polarity (light on dark) in near-dark surroundings; positive polarity in the dark, and every condition in bright light, did significantly better. They attribute this to pupil contraction under brighter light reducing optical aberrations, a hypothesis consistent with the data rather than directly measured.

Degani's flight-deck review, from print-era sources, recommends black on white for most documents and avoiding white on black in normal operations; where white on black is used, it should carry little text, in large sans serif type [@degani1992typography]. It also warns that sub-optimal conditions combine: white on black, italics, small type and color together hurt more than any one alone.

The evidence comes from one main group plus an independent automotive study, using proofreading, acuity and lexical decision rather than long comfortable reading, and it measured performance, not preference or fatigue. It is moderately strong for a modest effect. It does not say dark themes are unusable; it says a dimmer display costs legibility, most at small sizes and in glances in a dark room.

::: myth
**"Dark mode is easier to read, especially for older eyes and in a dark room."** Positive polarity was better for both younger and older adults [@piepenbrock2013positive], the difference tracks overall display luminance [@buchner2009advantage], and light text on a dark screen was the worst condition for glance reading in near-dark surroundings [@dobres2017effects]. The full case, with the studies, is made in Part VI, Color: Science, Meaning and Access, and is not repeated here.
:::

### LTF's themes measured

Computed for this Part from `tokens.css` with the WCAG 2.2 relative-luminance and contrast formulas [@w3c2024wcag]: the Day canvas (`#f7f5f3`) has a relative luminance of about 0.92 and the Night canvas (`#141412`) about 0.007, so the Night theme is a dim display in Buchner's sense. Text contrast passes the 4.5:1 Level AA threshold for normal text in most pairings: in Day, `ink` on `canvas` is about 16.6:1, `ink-2` 6.5:1, `ink-3` 5.0:1 and `accent` 5.0:1; in Night, `ink` 15.5:1, `ink-2` 8.6:1, `ink-3` 5.9:1 and `accent` 10.3:1. Two Night pairings fail: `ink-3` on `accent-tint` is about 4.3:1 and on `caution-tint` about 4.4:1. WCAG thresholds are not rounded, so these fail [@w3c2024wcag]. In Day, `ink-2` and `ink-3` are close (6.5 against 5.0), so the third ink level adds little visible distinction.

`FlyModeLayout` sets `data-theme` to dark unless the reader's stored preference is explicitly light; a reader on "System" in a bright room still gets the dark theme. Its stated reason (in the layout's comment, citing the plan's Section 20.7) is the second-screen use beside the sim. That is the setting in which Dobres and colleagues found light-on-dark glance reading worst, if the room is dark, and the plan's dark default is defensible only on glare grounds: Degani's review treats glare as a legibility problem in its own right, although it also recommends against white on black in normal operations [@degani1992typography]. The evidence pulls in two directions here, and the product should let the learner decide with the default set by the room rather than by assumption.

::: {.rule #SCR-053 grade="B"}
**Keep the light (Day) theme as the default for dense reading (lessons, quizzes, reference tables), and present the dark theme as a preference, not as the better choice for any group.** Positive polarity, or more exactly higher display luminance, gave better reading performance for younger and older adults [@buchner2009advantage; @piepenbrock2013positive]. Several experiments from one group with independent support, graded B.

*In LTF:* the `ThemeToggle` "System" setting follows the operating system, which is correct; do not add copy that recommends Night for comfort or for older eyes.
:::

::: {.rule #SCR-054 grade="B"}
**In the Night theme, set small text larger and brighter than in Day: raise the minimum reading size, use `ink` or `ink-2` rather than `ink-3` for anything read, and keep the widget labels at their brightest level.** The penalty of negative polarity grows as characters get smaller [@piepenbrock2013positive] and is luminance-driven [@buchner2009advantage]. Graded B.

*In LTF:* the two failing pairings (`ink-3` on `accent-tint` and `caution-tint` in Night) must change to `ink-2`; more generally, a `[data-theme='dark']` rule can map the meta text role from 14 px to 15 or 16 px. Test the change with the reading measures of SCR-004 rather than by eye.
:::

::: {.rule #SCR-055 grade="D"}
**Do not default Fly mode to dark regardless of the room; open it in the theme the reader last chose for Fly mode, offer a one-tap Day and Night switch on the Fly mode page itself, and if dark is used, compensate with larger, brighter text.** Light-on-dark glance reading was worst in near-dark surroundings [@dobres2017effects] and positive polarity is generally better [@piepenbrock2013positive], while glare is itself a recognized legibility problem for flight-deck documents read in poor light [@degani1992typography]. The evidence conflicts for this exact case and no study tested a second screen beside a simulator, so the rule is graded D: it settles who decides, not which theme wins.

*In LTF:* store a separate Fly mode theme preference, apply it in `FlyModeLayout` before first paint, and put a `ThemeToggle` in the Fly mode header next to "Back to challenge". Measure step-reading time in both themes with learners at their sim before choosing a new default.
:::

::: {.rule #SCR-056 grade="C"}
**Gate every text and background token pairing at 4.5:1 for normal text and 3:1 for large text in both themes, computed from the final colors without rounding, and check tinted fills as well as plain grounds.** These are WCAG 2.2 Level AA thresholds, with large text defined as 18 point, or 14 point bold [@w3c2024wcag]. A standard, graded C.

*In LTF:* add a unit test that computes every documented text-on-ground pair in `tokens.css` for both themes, including `accent-tint`, `go-tint`, `caution-tint` and `warn-tint` grounds used by `Callout`, the resume bar and the objectives card; it would catch the two Night failures above.
:::

::: {.rule #SCR-057 grade="C"}
**Hold Fly mode text and safety-relevant checklist text to 7:1 contrast in both themes.** WCAG's enhanced Level AAA threshold is 7:1 for normal text [@w3c2024wcag], and the notes on that standard recommend it as a target for the most safety-relevant text in Fly mode; the dim-room conditions of a second screen are not addressed by the AA minimum [@dobres2017effects]. Graded C.

*In LTF:* `ink` on `canvas` and `surface` passes 7:1 in both themes; `ink-2` passes in Night but not in Day (about 6.5:1 on `canvas`). Use `ink` for every Fly mode step, alert and goal, and keep `ink-2` to secondary labels there.
:::

### What this means for Learn to Fly

Keep the Day default, the "System" option and the near-neutral grounds, which pass contrast comfortably for primary text. Change the Night theme's small text (SCR-054) and fix the two failing tinted pairings, with an automated contrast test for every pairing (SCR-056). Change Fly mode's forced dark default into a remembered, switchable choice on the page itself (SCR-055), and hold its text to 7:1 with `ink` (SCR-057). Part VI, Color: Science, Meaning and Access, covers the color tokens and contrast algorithms in full; this chapter covers only what polarity and luminance do to reading.

## Decision list and review checklist

### Decisions this Part settles for LTF

1. **Lessons compensate for the screen.** Number-bearing and procedural lesson sections are followed by an active block; timed reading is short and glanceable; lessons keep a stable spatial frame and print cleanly. (SCR-001, SCR-002, SCR-003, SCR-005)
2. **Typography is judged by performance.** Changes to the measure, body size or faces are evaluated with quiz accuracy, completion and reading time, not preference. (SCR-004)
3. **Sizes are set by angle and distance.** Each surface has a recorded viewing distance; desk surfaces aim for an x-height near 0.3 degrees on a standard monitor. (SCR-006)
4. **The lesson body becomes 18 px.** `MarkdownContent` uses `body-lg` like `Prose`, with 20 px to be tested. (SCR-007, SCR-049)
5. **Fly mode is an arm's-length surface.** Step and alert text at least `text-3xl`, medium or semibold, `ink`, with its own size control. (SCR-009, SCR-023, SCR-057)
6. **Small text has a floor.** 14 px only for non-essential meta text; 12 px only for short uppercase labels; `Badge` text moves up. (SCR-011, SCR-052)
7. **The root is relative.** `html` font size returns to 100%; all type utilities move to rem with unitless line heights. (SCR-012)
8. **Reading settings exist.** Text size first, line spacing second, a face choice only if testing supports it; applied before first paint; never applied to widgets. (SCR-010, SCR-015)
9. **One measure token in em.** About 30em (about 66 characters of Instrument Sans), maximum 34em, replacing both `container-measure` (68ch, about 100 characters) and the lesson's `max-w-[800px]` for prose. (SCR-013, SCR-017, SCR-018)
10. **Single column, moderate leading.** Prose stays in one column at line heights between about 1.25 and 1.7; tight heading line heights stay out of multi-line reading text. (SCR-019, SCR-020, SCR-021)
11. **Reflow at 320 px.** Only tables, diagrams and widgets may scroll sideways. (SCR-014, SCR-016)
12. **Rendering-robust type.** No weights below 400; a designed italic or none; italic never for instructions or radio calls; the smoothing override is tested, not assumed; review on a standard-density monitor. (SCR-022, SCR-024, SCR-025, SCR-026)
13. **Instrument Sans stays for prose; JetBrains Mono for everything measured.** Identifiers, values and isolated letters are mono, including in prose and through token expansion. (SCR-027, SCR-028, SCR-029, SCR-030, SCR-031, SCR-032)
14. **Fonts load without moving text.** LTF's own `@font-face` rules with `fallback` (app) and `optional` (Fly mode), `font-size-adjust` at 0.51 and 0.55, a fonts-blocked review mode, font bytes counted, CLS and LCP measured in the field. (SCR-033 to SCR-037)
15. **Four weights by role.** 400, 500, 600 and 700 through utilities only; one rule for measured values; high-level axis properties only. (SCR-038 to SCR-041)
16. **Numbers are tabular and aligned.** Lining tabular figures for every live or columnar number; numeric columns right-aligned; tables content-width with hairline rows. (SCR-042 to SCR-045, SCR-047)
17. **Widget labels never shrink below the floor.** A measured-width scale factor in the shared SVG primitives. (SCR-046)
18. **One scale, one mapping.** Named roles only; no raw `text-*xl font-bold` in pages; each heading level has one role per surface type; eyebrows only for short labels. (SCR-048, SCR-050, SCR-051)
19. **Day is the reading default; Night compensates.** Larger and brighter small text in Night; every token pairing gated at AA in both themes, including tints. (SCR-053, SCR-054, SCR-056)
20. **Fly mode theme is the learner's choice on the page.** Remembered separately, switchable in place, measured before any new default. (SCR-055)

### Review checklist

Run these questions against any pull request or page that touches type, layout of reading text, fonts, themes or widgets.

**Reading and lesson structure**

- Is every lesson section that introduces a procedure or a value followed by a quiz or widget block? (SCR-001)
- Is any paragraph-length text read while a timer runs or in Fly mode? (SCR-002, SCR-021)
- Do the outline, position indicator and fixed block order survive the change? (SCR-003)
- Does the page still print cleanly, with navigation and rails hidden? (SCR-005)
- Was the change judged by task measures rather than opinion? (SCR-004)

**Size, units and reflow**

- For each new or changed text style, what viewing distance is assumed, and what x-height angle does it give on a standard monitor? (SCR-006, SCR-009)
- Is any reading text below 18 px in lessons, or below 14 px anywhere, or 12 px in mixed case? (SCR-007, SCR-011)
- Are sizes in rem and line heights unitless, with no pixel root size? (SCR-012)
- Is the measure in em, and is prose within about 55 to 75 characters? (SCR-013, SCR-017, SCR-018)
- Does the page reflow at 320 CSS px with sideways scrolling only in tables, diagrams and widgets? (SCR-014)
- Does fluid sizing apply only to display headings? (SCR-016)
- Do reading settings apply to prose and leave widgets and readouts unchanged? (SCR-010, SCR-015)

**Measure, spacing and columns**

- Is reading text in a single column? (SCR-019)
- Is paragraph line height between about 1.25 and 1.7, and are `text-3xl` and larger kept out of multi-line reading text? (SCR-020)

**Faces, rendering and loading**

- Is any text italic, and if so, is a designed italic loaded? Is any instruction or radio call italic? (SCR-024)
- Is glance text regular to semibold, never light, small or `ink-3`? (SCR-022, SCR-023)
- Was the change reviewed on a standard-density monitor in both themes, and with the smoothing override in question? (SCR-025, SCR-026)
- Is every identifier, value, frequency and isolated letter set in mono? (SCR-029, SCR-047)
- If a face is proposed, was it tested for I, l and 1; O and 0; 5 and S; 8 and B; and was the argument about letters, not word shape or serifs? (SCR-027, SCR-028, SCR-030, SCR-032)
- Are small labels in a large-x-height face with spacing rather than extra weight? (SCR-031)
- Does the page remain usable with web fonts blocked, and does a late font change neither size nor line breaks? (SCR-033, SCR-034, SCR-035)
- Does the change add font files, and are their bytes counted? (SCR-036)
- Did field CLS or LCP on lesson pages get worse? (SCR-037)

**Weights, numerals and widgets**

- Are weights limited to 400, 500, 600 and 700 and applied through type utilities, with no `font-variation-settings` for registered axes and no weight outside the loaded axis? (SCR-038, SCR-039, SCR-041)
- Does a new face, if any, have an optical-size axis? (SCR-040)
- Do live and columnar numbers use tabular lining figures, with no requests for features the faces lack? (SCR-042, SCR-043)
- Are numeric table columns right-aligned, tables content-width and rows separated by hairlines only? (SCR-044, SCR-045)
- At a 375 px viewport, does every widget label render at or above the reading floor? (SCR-046)

**Scale and hierarchy**

- Does the change use named type roles only, with no raw heading sizes or weights in page code? (SCR-048)
- Does each heading level look the same as on other pages of the same kind? (SCR-050)
- Is the scale still derived from the body size, and was each new step checked at its smallest use? (SCR-049, SCR-052)
- Is uppercase used only for labels of one to four words? (SCR-051)

**Polarity and contrast**

- Does every text and ground pairing, including tinted grounds, pass 4.5:1 (or 3:1 for large text) in both themes, unrounded? (SCR-056)
- In Night, is small text larger and brighter, and is `ink-3` kept off anything read? (SCR-054)
- Does any copy or default present the dark theme as more legible? (SCR-053)
- In Fly mode, is the theme the learner's own, switchable on the page, and is step text at 7:1? (SCR-055, SCR-057)

