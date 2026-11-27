# Legibility and the Science of Reading

Reading is one of the best-studied acts of human perception. For more than a century psychologists, vision scientists and typographers have measured how long it takes to recognize a letter, how far the eye jumps along a line, how small type can get before reading slows, how wide a line can be before the eye loses its place, and whether serifs, capitals, italics, reversed print or special fonts make any difference. This Part compiles that evidence and applies it to Learn to Fly (LTF): the lesson page a beginner reads at a desk, the reference pages they look things up in, the widgets whose small labels they must decode, and Fly mode, which they glance at on a second screen while their hands are on the simulator's controls.

The evidence is uneven, and the rules say so. Some findings are among the most replicated in psychology (the eye reads in fixations and saccades, words are recognized from their letters, crowding limits what can be read away from fixation). Some rest on one careful experiment (the effect of serifs alone, letter variants that reduce confusions). Some are inherited from print studies of the 1920s to 1960s whose numbers do not carry straight to screens. And several popular beliefs (that we read by word shape, that serif or sans is more legible, that special fonts help readers with dyslexia, that speed reading works) do not survive the evidence. Each rule carries a grade from A (replicated) to D (contested). Use the rules to settle design arguments with evidence, the "What this means for Learn to Fly" sections to see what to change, and the closing checklist to review a page or a pull request.

## Reading Is a Sequence of Pauses

### The eye moves in jumps

The first fact of reading research is that the eyes do not glide along a line. Edmund Burke Huey, whose 1908 book is the first large synthesis of laboratory work on reading, watched readers' eyes in a hand mirror and described them moving line by line in "a succession of quick, short movements", with three to five pauses per line at the line length he used [@huey1908psychology]. He argued that reading is a perceptual act that can be studied, that the eye sees only during the pauses, and that print should be arranged to suit those facts. He also asked, of the printing rules of his day, for "further experimental investigation rather than the present excess of opinion" [@huey1908psychology]. That preference for measurement over taste is the stance of this Part.

The history is often told wrongly, and the error is instructive. Textbooks and web pages credit the French ophthalmologist Louis-Émile Javal with measuring the jerky eye movements of reading in 1879. Wade and Tatler went back to Javal's eight papers on reading and found that he did not [@wade2009javal]. Javal reasoned in 1878 from afterimages that the gaze glides smoothly along a line. In 1879 he credited his colleague Lamare, in a footnote, with the observation that the eye makes several jerks per line, about one for every 15 to 18 letters. Lamare's method was a blunt point on the upper eyelid that triggered a microphone, so each jerk made an audible click. The earliest clear description of discontinuous eye movements in reading that Wade and Tatler found was by Hering in the same year. Javal used the word "saccade" (an ordinary French word for a jerk) in a passage about short-sighted readers, not in a passage about measurement. The authors trace the myth to Huey's loose wording, which later writers copied instead of reading Javal [@wade2009javal].

::: myth
**"Javal discovered and measured saccades in 1879."** The claim appears in most histories of reading. Javal's own papers show that he believed the eye moved smoothly, that the counting of pauses in his laboratory was done by Lamare, and that Hering gave the earliest clear description in the same year; Javal's contribution was the term and early reasoning [@wade2009javal]. The error spread from Huey's wording [@huey1908psychology].
:::

The design consequence of the history is not about Javal. A claim repeated in every textbook can still be wrong at the source, which is why this book cites the primary study where it can, and why LTF's aviation content follows the same rule for numbers repeated on forums.

::: {.rule #LEG-001 grade="C"}
**Trace any claim about reading or type to the study that made it before using it to justify a design decision.** The Javal story shows how a secondary account can replace the record for a century [@wade2009javal], and later chapters show the same pattern for word shape, serifs and dyslexia fonts [@larson2005science; @richardson2022legibility]. Richardson's review of the serif question ends with the advice that what "everybody knows" should be treated "simply as conjectures that might be subject to refutation through carefully designed research" [@richardson2022legibility]. This is a process rule; its grade reflects that it is expert practice, not an experimental finding.

*In LTF:* a pull request that says a typeface, size or layout "reads better" names the source or the test that shows it. "Everyone knows sans serif is better on screens" is not a reason.
:::

### Fixations, saccades, regressions and skips

Modern eye tracking, led by Keith Rayner and George McConkie, turned Huey's observations into precise measures. Rayner's 1998 review is the standard account; its theme, in the abstract's words, is that eye movement data reflect moment-to-moment cognitive processes [@rayner1998eye]. The numbers below are from Rayner's later summaries of that review and are averages for skilled adult readers of alphabetic text.

| Measure | Typical value | Range or note |
| --- | --- | --- |
| Fixation duration | 200–250 ms | some under 100 ms, some over 500 ms |
| Saccade length | 7–9 letter spaces | under 1 to over 20 |
| Regressions | 10–15% of saccades | backward jumps |
| Words skipped | 25–30% | short words far more often |

A saccade itself lasts about 20 to 35 ms [@larson2005science], and almost no information is taken in during it. Reading is therefore a series of snapshots, roughly four a second, separated by brief blind jumps [@rayner1998eye; @pelli2008uncrowded]. Older readers show longer fixations, shorter saccades and more skipping and regressions [@rayner1998eye]. All of these values shift with text difficulty, reader skill and language, which is the point: the eye stays longer on a word that is harder to process, and goes back when understanding fails.

Gaze-contingent experiments also settled an old argument. A popular mid-century view (associated with Goodman and Hochberg) held that skilled reading is mainly top-down guessing, with the eye sampling a few words and the mind filling the gaps. Experienced readers in fact look at most words, and fixate long or difficult words almost always [@rayner1998eye]. The open questions are about mechanism, for example whether the next word can influence processing of the current one; these effects are elusive and may be partly measurement error [@rayner1998eye]. None of the open questions changes the design facts.

::: {.rule #LEG-002 grade="A"}
**Write lesson sentences so that each can be understood in one forward pass: one idea per sentence, with the subject and verb early.** Fixation durations and regressions rise with processing difficulty, and regressions already make up 10 to 15 percent of saccades in skilled reading [@rayner1998eye]. A sentence that forces a re-read costs time and, for a beginner meeting a new term, often a second failure. The evidence that eye movements track difficulty is replicated across decades and languages; the writing guidance drawn from it is an inference, so it does not set a sentence-length limit.

*In LTF:* lesson Markdown is written in short sentences, with a new term defined in the sentence where it first appears (the glossary `Popover` supports this, it does not replace it).
:::

### The perceptual span leans in the reading direction

How much does the eye take in during a fixation? The moving-window technique answers it directly. Only a set number of characters around the fixated letter are shown and the rest are masked; if reading is normal, the window is at least as large as the span. Smaller windows slow reading and disturb eye movements, and shrinking the window on the right hurts more than on the left [@rayner1998eye]. The span runs about 3 to 4 letter spaces to the left of fixation and 14 to 15 to the right. The asymmetry reverses for Hebrew and other right-to-left text, so it follows reading direction rather than anatomy [@rayner1998eye].

Larson reports the classic moving-window speeds: with 3 letters visible, reading ran at 207 words per minute; with 9, 308; and with 15, 340, as fast as with no window at all [@larson2005science]. The boundary technique adds the second half of the story. An invisible boundary is placed before a target word; while the eye is in flight across it, the word is changed. Information about the upcoming word picked up before the eye lands on it speeds its reading once fixated [@rayner1998eye].

Two practical consequences follow. First, the reader gets useful information about what comes next, but only a little way to the right, and mostly about the beginnings of words. Second, the reader's next landing point is chosen from coarse information to the right of fixation, chiefly the position of the spaces between words [@larson2005science].

::: {.rule #LEG-003 grade="B"}
**Put the word that distinguishes an item first in every heading, label, list row and checklist line.** The perceptual span extends 14 to 15 letter spaces to the right of fixation and only 3 to 4 to the left [@rayner1998eye]. A reader scanning a column of left-aligned items fixates near the start of each, so the first word or two is what a glance reliably captures. The span is replicated (grade A); the claim that front-loading speeds scanning of interface lists is an inference from it, so the rule is B.

*In LTF:* write rows in the form "Control: setting" rather than "Set the control to the setting" in lesson checklist displays, "Airspeed indicator" rather than "Understanding the airspeed indicator" in `SectionNav` entries, and put the distinguishing word first in `Tabs` labels and Fly mode steps. Keep the aviation wording itself from the verified source; only the order changes.
:::

::: {.rule #LEG-004 grade="B"}
**Never squeeze, remove or justify away word spaces in running text or labels.** Word spaces are the main cue the eye uses to choose where the next saccade lands (Pollatsek and Rayner's work, as reported by Larson) [@larson2005science], and saccade length is measured in characters, which is why the spaces fall where the eye expects them [@rayner1998eye]. Uneven or missing spaces disturb that targeting. The targeting finding is well established; its size in interface text is not measured, hence B.

*In LTF:* keep lesson text and Callouts ragged right (the current `MarkdownContent` default); do not introduce `text-justify` or negative word spacing, and do not set Fly mode strings such as frequencies or call signs with spaces removed for compactness.
:::

### Short words are skipped

Short words (articles, prepositions, "no", "not") are skipped far more often than long ones [@rayner1998eye]. A skipped word is usually processed from the parafovea, which works because short function words are predictable. It works less well when a short word carries the whole meaning of the sentence. "Do not move the lever" and "Do move the lever" differ by one three-letter word the eye has a good chance of jumping over.

::: {.rule #LEG-005 grade="B"}
**Do not let a short word carry a safety-critical meaning on its own; restate the negation in a longer word or move it into view.** Readers skip 25 to 30 percent of words, short words far more often than long ones [@rayner1998eye]. A negation inside a sentence is exactly the kind of short word a skilled reader may not fixate. The skipping data are replicated; that skipping causes misreading of negations in instructions is an inference, so the rule is B.

*In LTF:* in `safety` Callouts and Fly mode steps, prefer a positive form ("Leave the lever where it is") over "Do not move the lever", or put "Never" first in the line where the span will catch it (see LEG-003). Bold the negation when it must stay (bold costs no reading speed, see the chapter on capitals, italic and bold).
:::

### Familiarity is speed

The oldest result in the field is still one of the most useful. James McKeen Cattell, timing readers in Leipzig with a revolving drum, found that it took about twice as long to read words with no connection as words that make sentences, and about twice as long to read letters that make no words as letters that do [@cattell1886time]. Naming colors and pictures took about twice as long as naming words and letters, which Cattell explained by automaticity: the link from a printed word to its name has been exercised so often that no choice is needed. His own reading time per word fell with familiarity, from 138 thousandths of a second in English to 484 in Greek; these are one man's numbers, not norms [@cattell1886time]. His drum experiment also showed that readers gained from seeing letters ahead: four of his nine subjects read faster with five letters in view, though none gained from a sixth, an early hint of the perceptual span.

The interpretation Cattell's successors drew (that readers recognize whole word shapes) was later replaced, as the next chapter shows, but the descriptive findings hold: connected, familiar material is read much faster than disconnected or unfamiliar material. Rayner's work gives the modern form: word frequency and predictability are among the strongest influences on how long the eye stays on a word [@rayner1998eye].

::: {.rule #LEG-006 grade="A"}
**Use exactly one name for each instrument, control, procedure and screen, and use it everywhere: lessons, widgets, reference pages and Fly mode.** Familiar words are recognized faster and fixated for less time, and reading speed falls steeply in less familiar language [@cattell1886time; @rayner1998eye]. A beginner meets aviation vocabulary as an unfamiliar language; every synonym is a new word to learn. The familiarity effect is among the most replicated in reading research; this rule applies it directly.

*In LTF:* the glossary in `features/reference/glossary.ts` is the naming authority. If a lesson calls it the "airspeed indicator", the widget title, the `KeyNumbers` panel and the Fly mode step say "airspeed indicator", not "ASI" in one place and "speed gauge" in another. Abbreviations are introduced once, with the full name, and then used consistently.
:::

::: {.rule #LEG-007 grade="B"}
**Give list items in lessons a connecting reason or order rather than presenting bare fragments.** Cattell found disconnected words took about twice as long to read aloud as words forming sentences [@cattell1886time]. Bare lists remove the connection that lets readers predict. The finding is old and from a tiny sample, but it is consistent with the modern predictability effects [@rayner1998eye].

*In LTF:* on lesson pages, a checklist shown for learning carries a short "why" or a sequence cue beside each step (for example a phase heading). The reference checklist pages (`ChecklistPage`) and Fly mode, used for doing rather than learning, keep the bare checklist wording, since the learner has already met it in context.
:::

::: {.rule #LEG-008 grade="B"}
**Do not put a time limit on a learner's first reading of a lesson, brief or question.** Fixation times and regressions rise with unfamiliar words and difficult content [@rayner1998eye]; a beginner's first reading of a procedure is slow by nature. Timed reading would penalize exactly the processing that builds familiarity. The evidence is indirect, hence B.

*In LTF:* the challenge Brief tab, `QuizBlock` prompts and lesson pages have no countdowns. The optional `Stopwatch` in the Fly tab times flying, not reading, and should stay optional.
:::

### What this means for Learn to Fly

Keep the current ragged-right lesson text, the short sentences the content style already asks for, and the glossary chips beside lessons; all three fit how the eye works. Change the order of words in headings, `SectionNav` items, `Tabs` labels, checklist rows and Fly mode steps so the distinguishing word comes first (LEG-003), and audit `safety` Callouts for negations carried by short words (LEG-005). Build a naming check into content review: a list of canonical names drawn from the glossary, against which lesson Markdown, widget titles in `WidgetFrame`, reference pages and Fly mode copy are compared (LEG-006). Never add a reading timer (LEG-008). And when a design argument rests on a fact about reading, cite where the fact came from (LEG-001).

## Letters, Not Word Shapes

### Three models of word recognition

How does a reader get from marks on a page to a word? Kevin Larson, a cognitive psychologist on Microsoft's ClearType team, wrote a widely read essay to answer typographers who insisted that readers recognize words by the outline of the whole word, sometimes called the "bouma" [@larson2005science]. He sets out three models. The oldest, from Cattell's era, is word shape: practiced readers recognize the overall outline of a word, its pattern of ascenders, descenders and x-height letters. The second, from Gough in 1972, is serial letter recognition: letters are recognized one at a time, left to right. The third, which Larson says most psychologists now accept, is parallel letter recognition: all the letters in a word are recognized at once, and the letter information is used to recognize the word. His conclusion is blunt: "Word shape is no longer a viable model of word recognition" [@larson2005science].

Huey had summarized the word-shape view in 1908, reporting Cattell and Erdmann and Dodge as arguing that practiced readers use word length and general form as the main cues [@huey1908psychology]. Tinker repeated it in 1963 as the explanation for why all capitals read slowly [@tinker1963legibility]. The view was not foolish; it fitted the evidence then available. It was overturned by experiments that separated word shape from letter identity.

### Four pieces of evidence for word shape, and their answers

Larson works through the evidence that had been offered for word shape [@larson2005science].

**Word superiority.** Letters are recognized better inside words than alone (Reicher 1969). But McClelland and Johnson (1977) found the same advantage for pronounceable pseudowords like "mave", which have no familiar shape. The advantage comes from familiar letter combinations, not from outlines.

**Lowercase is faster.** Lowercase text is read 5 to 10 percent faster than uppercase (Smith 1969; Fisher 1975). Larson calls this "the weakest evidence", because reading speed in uppercase, and even in mirror-reversed text, rises with practice (Kolers and Perkins 1975). Readers are faster in lowercase because they have read far more of it.

**Proofreading errors.** Misspellings that keep the word's outline were missed more often (13 percent against 7, Haber and Schindler 1981). Paap, Newsome and Noel (1984) separated outline from letter shape. For the word "than", "tnan" (different outline, similar letter shapes) was missed 19 percent of the time, and "tdan" (same outline, different letter shape) 8 percent. The effect came from letter shape.

**Alternating case.** tExT lIkE tHiS is slow, which seemed to show that destroying word shape hurts. But Adams (1979) found that words and pseudowords were equally hurt, so the cost is not about familiar word outlines.

The positive evidence comes from eye movements. In the moving-window studies, showing whole words beyond the letter count did not help: what mattered was how many letters were visible [@larson2005science]. In Rayner's 1975 boundary study, the target word "chart" was fixated for 210 ms when the preview was intact, 240 ms when the preview shared letters and outline ("chovt"), 280 ms when it shared letters but not outline ("chyft"), and 300 ms when it shared the outline but no letters ("ebovf"). Capitalizing the whole word as "CHART", which removes the lowercase outline, gave the same times as the control [@larson2005science]. Larson notes honestly that letters in common did most of the work but that outline together with shared letters still helped a little.

Sheedy and colleagues found a complementary result with a threshold method: individual lowercase letters were 10 to 20 percent more legible than lowercase words, meaning words had to be 10 to 20 percent larger to reach the same recognition threshold [@sheedy2005text]. They concluded that letters play a large role and word shape a smaller role, if any, at threshold. Bouma's 1973 paper, the source of the term "bouma shape", actually showed that letters at the ends of words are recognized better than interior letters away from fixation, not that words are read by outline [@larson2005science; @pelli2008uncrowded].

::: myth
**"People read words by their outline shape, so lowercase reads better because each word has a distinctive silhouette."** The word-superiority effect appears for pronounceable nonwords with no familiar shape; proofreading errors track letter shape, not outline; capitalized previews that destroy the outline give normal reading times; and single letters are more legible than words at threshold [@larson2005science; @sheedy2005text]. The lowercase advantage is real but is explained by practice [@larson2005science]. Word shape "is no longer a viable model of word recognition" [@larson2005science].
:::

::: {.rule #LEG-009 grade="A"}
**Justify letterform, case and spacing decisions by letter recognition and practice, never by word shape.** Parallel letter recognition is the accepted model, supported by gaze-contingent, priming and proofreading experiments [@larson2005science; @rayner1998eye], and by threshold legibility work [@sheedy2005text]. Arguments from word shape lead to wrong advice, for example that a word set in lowercase is safe however tight its letters, or that capitals fail because "they look like boxes".

*In LTF:* review comments that say "this keeps the word shape" or "this loses the word shape" are replaced by the questions that matter: can each letter be identified at this size and spacing, and is the reader practiced with this form?
:::

### Letters, crowding and the ends of words

If words are recognized through their letters, the legibility of a word depends on the legibility of each letter in its neighbors' company. That is the subject of the next chapter, but one detail belongs here. Letters at the ends of a word are less crowded than interior letters, because they have a space on one side, and are recognized better away from fixation [@pelli2008uncrowded; @larson2005science]. This is part of why the first and last letters of a word seem to carry it, and part of why removing word spaces is so costly: it turns end letters into interior letters.

### Case

The parallel-letter model gives a clean account of capitals. Running text in all capitals is slower, Tinker found it "greatly retarded" reading and took at least one-third more space [@tinker1963legibility], and the lowercase advantage measured in the experiments Larson reviews is 5 to 10 percent [@larson2005science]. The explanation that survives is practice: adult readers have read vastly more lowercase. A second, mechanical cost is space: the same text in capitals takes more room, so fewer characters fit in the perceptual span and on the line [@tinker1963legibility]. Short capital labels are a different case. A three-letter ident or a one-word switch label is read letter by letter in any case, practice matters less for a single familiar word, and capitals match what the learner sees in the airplane.

::: {.rule #LEG-010 grade="A"}
**Set sentences, instructions and warnings in sentence case, never in all capitals.** All-capital running text is read more slowly and takes at least one-third more space [@tinker1963legibility]; the lowercase advantage is 5 to 10 percent in the studies Larson reviews and is explained by readers' far greater practice with lowercase [@larson2005science]. Replicated over a century of studies; the explanation changed, the finding did not.

*In LTF:* `Callout` titles ("Safety", "Sim vs reality") and bodies stay in sentence case. If a lesson must quote placarded text that appears in capitals in the cockpit, keep it short and inside a code span or quotation, and give the meaning in a normal sentence next to it.
:::

::: {.rule #LEG-011 grade="B"}
**Reserve capitals for short labels of one to three words and give them extra letter spacing.** Short capital labels are read letter by letter, and spacing, not size, sets the limit at which neighboring letters crowd one another, so added tracking protects them [@pelli2008uncrowded; @larson2005science]. The `eyebrow` utility's 0.08em tracking follows this practice. Grade B because the tracking value is craft practice, not an experimental optimum.

*In LTF:* keep `eyebrow` and the tier `Badge` as they are (12 px, uppercase, 0.08em). The widget definition-list labels (`text-xs font-semibold tracking-wide uppercase` in `G1000Pfd.tsx`, `VorCdi.tsx`, `AirspaceProfile.tsx` and others) are single words or short phrases and comply; do not extend uppercase to labels longer than three words.
:::

### What this means for Learn to Fly

LTF's typography already uses capitals the way the evidence suggests: only in `eyebrow` labels and tier badges, never in body text. Keep that. What should change is the reasoning used to defend type decisions. When the team compares faces or adjusts tracking, the question is whether individual letters stay distinct in their neighbors' company (LEG-009), which the next three chapters make testable. A concrete case is the Fly mode step list: because the learner reads it in short glances, letter distinctness and spacing matter more than any word "silhouette". The same applies to the challenge setup chips on `ChallengePage`, which mix codes and words in small type: test them for letter confusions, not for overall look.

One more case deserves a check. The eyebrow-over-heading pattern is the dominant heading pattern in LTF (the dossier counts it on landing sections, `PageHeader`, module cards, challenge cards and stat tiles). An eyebrow is fine as a label. It becomes a problem only if it grows into a sentence, because then the all-capitals cost applies (LEG-010). Keep eyebrows to the short codes and category words they carry today ("Module 0", "Challenge C4.3 · Landing").

## The Visual Span and Crowding

### A sensory ceiling on reading speed

Gordon Legge's laboratory in Minnesota spent decades measuring how reading speed changes with print size, contrast, letter spacing and position in the visual field. Legge and colleagues unified those results under one quantity, the visual span: the number of letters that can be recognized reliably without moving the eyes [@legge2007case]. They measure it with letter-recognition profiles. A letter is flashed at positions to the left and right of fixation and the percentage correct is recorded at each position; the span is the area under that profile, counted in bits of information, with a letter identified perfectly worth 4.7 bits. A sample profile across 13 letter slots transmitted 50.6 bits [@legge2007case].

The striking result is how closely span and speed move together. When contrast was varied, the visual span explained between 96 and 99.6 percent of the variance in reading speed across conditions; when character size was varied, between 80.9 and 95.5 percent [@legge2007case]. Across studies, one more letter of visual span corresponded to about a 39 percent increase in reading speed [@legge2007case]. A follow-up by Kwon and Legge found the span accounted for 92 percent of the variance in central-vision reading speed [@legge2007case]. The authors call it a bottom-up limit, distinct from attention, eye movement control or language: make the letters smaller, dimmer or tighter, and the span shrinks, and reading slows in step.

Two cautions keep this in proportion. First, the argument is correlational. Manipulations that shrink the span also slow reading, but that does not prove the span causes the slowing, and Kwon and Legge say only that their results are "consistent with" it [@legge2007case]. Second, the speeds were measured with rapid serial visual presentation (RSVP), one word at a time in the same place, which removes eye movements. RSVP speeds are far above normal reading (one study cited averaged 1,171 words per minute in RSVP against 303 for static text) [@legge2007case]. In ordinary reading, Rayner and colleagues argue, the bottleneck is usually language processing, not vision [@rayner2016much]. The views fit together: vision sets a ceiling, and for most text at comfortable sizes, language skill keeps the reader below it. The ceiling matters when text is small, dim, tightly spaced, far away or off to the side, which describes a good deal of what a learner reads in widgets and Fly mode.

::: {.rule #LEG-012 grade="B"}
**Treat print size, contrast and letter spacing as one budget: when one of them must drop, raise another.** All three shrink or grow the visual span, and the span tracks reading speed closely across conditions [@legge2007case]; crowding by spacing is the main limit on span [@legge2011print]. The evidence is consistent across Legge's experiments but correlational and based on RSVP, hence B.

*In LTF:* a label that must be small (a tick label in the airspeed dial, a soft-key caption in `G1000Pfd`) gets more letter spacing and full-strength contrast (`fill-instrument-text` on `fill-instrument`, never a mid-grey); a label that must be low in contrast (for example `text-ink-3` meta text) gets more size, not less.
:::

### Crowding and the Bouma law

Why should letter spacing matter so much? The answer is crowding. Pelli and Tillman's review shows that object recognition is usually limited by how close objects are to each other, not by how big they are [@pelli2008uncrowded]. The visual system recognizes an object by detecting its features and combining them. When objects are too close, features from neighbors are combined into one jumbled percept. Crowding impairs identification, counting and judging position, but not detection: the crowded letter does not vanish, it becomes unrecognizable [@pelli2008uncrowded].

The critical spacing, the center-to-center distance at which a neighbor stops interfering, follows a simple law first observed by Bouma in 1970: for small letters it is roughly half the distance from the point of fixation (the eccentricity) [@pelli2008uncrowded]. Pelli and Tillman report that this proportion is the same for letters, gratings, faces, animals and furniture, though weaker between dissimilar objects, and that critical spacing does not depend on object size: halving the letter size does not change it [@pelli2008uncrowded]. The region around fixation where spacing exceeds the critical value is the "uncrowded window". Objects outside it cannot be recognized, and its size limits the speed of reading and of visual search.

Legge and colleagues give the arithmetic. An acuity-based upper bound would allow a span of about 36 letters; crowding reduces the functional field by a factor of about 4, giving about 9 letters, close to what is measured in good viewing [@legge2007case]. Pelli and Tillman model reading rate as fixation rate (about four per second) times the characters taken in per fixation, and report that the number of characters inside the uncrowded window predicts reading speed for adults and children with no free parameters [@pelli2008uncrowded]. Dyslexic readers in their account had smaller spans and read at less than half their span-predicted speed, a sign that something beyond crowding is at work for them. The model's fixed four-per-second rate is a simplification of eye-movement data [@rayner1998eye], and rival accounts of the crowding mechanism exist that this review does not settle. Bouma's proportion itself has been reproduced in many studies, though critical spacing varies with direction and between observers [@pelli2008uncrowded].

### Spacing, not size, sets the limit

The most useful finding for typography is this one: reading speed stays roughly constant across a 6:1 range of text size, but drops sharply once letter spacing falls below a critical value in degrees of visual angle, whatever the letter size [@pelli2008uncrowded]. Legge and Bigelow put it in typographic terms: below the critical print size, the spacing between letters falls inside the crowding limit, the span shrinks and reading slows; Pelli and colleagues found that the limiting factor is spacing, not size [@legge2011print]. Typographers have long added tracking to small sizes, and the crowding account explains why that works [@pelli2008uncrowded].

Arditi and Cho's serif experiment, discussed later for what it says about serifs, also gives a clean measurement of spacing. They built nine fonts that differed only in serif size and in spacing added at the letter edges (0, 10 or 40 percent of cap height), so glyph shapes stayed the same. Spacing had a strong effect on the size threshold at which letter strings could be read (F[2,8] = 143.9), with thresholds falling as spacing grew, which the authors identify as a crowding effect [@arditi2005serifs]. The study had only six observers, but the effect is large and matches the crowding literature.

There is a ceiling on the benefit. Extra-wide spacing does not enlarge the visual span (Yu and colleagues, as reported by Legge and Bigelow) [@legge2011print]. And for readers in general the evidence on extra letter spacing is mixed: Kuster and colleagues summarize studies by Perea and by Zorzi suggesting a benefit for children with dyslexia and one by van den Boer and Hakvoort finding none, though reduced spacing did hurt fluency [@kuster2018dyslexie]. The safe summary is asymmetric: too little spacing reliably hurts, and more than normal helps only up to a point and not for everyone.

::: {.rule #LEG-013 grade="A"}
**Never tighten letter spacing in text below display sizes; when text must be small, keep or add tracking rather than only reducing size.** Crowding is set by spacing in degrees, not by letter size; reading speed is constant across a wide range of sizes until spacing falls below the critical value [@pelli2008uncrowded; @legge2011print]. Controlled manipulations of spacing alone show the same effect [@arditi2005serifs]. Replicated across many crowding studies.

*In LTF:* the `display-*` and `heading-lg` utilities carry negative tracking (from -0.025em at 64 px to -0.01em at 24 px); keep negative tracking on those large sizes only, and never apply `tracking-tight` or negative letter spacing to `body-*`, `label`, `readout-*` or any SVG label in `features/widgets/`.
:::

::: {.rule #LEG-014 grade="B"}
**Add letter spacing in moderate steps and do not expect very wide spacing to help further.** Very wide spacing does not enlarge the visual span [@legge2011print], and the evidence for extra spacing as an aid to struggling readers is mixed [@kuster2018dyslexie]. Grade B: the absence of benefit beyond normal spacing rests on few studies.

*In LTF:* if a reading-comfort setting is built (see the chapter on dyslexia, age and individual differences), offer one or two spacing steps, not a slider to extreme values, and keep word spacing growing with letter spacing so that words stay separated.
:::

### Instruments crowd

A gauge is a crowding problem drawn in a circle. Numerals sit next to tick marks, tick marks next to colored arcs, the needle crosses all of them, and the reader often looks at the dial from the corner of the eye. Every element close to the numeral the learner needs is a potential crowder [@pelli2008uncrowded]. The effect is weaker between dissimilar objects [@pelli2008uncrowded], which is one argument for keeping numerals visually distinct from ticks (different weight or length) and for not stacking text labels close together.

::: {.rule #LEG-015 grade="B"}
**Give every numeral and readout in a widget clear space on all sides, at least as wide as the gaps between its own characters, and keep needles and labels from crossing it.** Neighboring marks within the critical spacing jumble the features of a target, and critical spacing does not shrink when the drawing does [@pelli2008uncrowded]. The crowding principle is replicated; the clearance rule is an application, hence B.

*In LTF:* check `shared/svg.tsx` primitives: the `Gauge` scale numerals (`text-[13px]` in a 260-unit viewBox shown at up to 280 px, so about 14 px at most and smaller on phones) and the `Tape` pointer box (`text-[20px]` bold) need visible clearance from ticks and arcs. `Label` already draws a surface halo behind text, which is the right pattern; extend it to any scale numeral the needle can pass over.
:::

### Reading away from fixation

Critical spacing grows with distance from fixation, so the further a piece of text is from where the eye is pointing, the more space it needs to be read at all [@pelli2008uncrowded]. Reading speed falls steeply in peripheral vision: one study cited by Legge and colleagues found maximum speed fell from about 862 words per minute in central vision to 143 at 20 degrees from fixation [@legge2007case]. These RSVP speeds overstate normal reading, but the ratio is the point.

A learner flying in the simulator looks at the sim, not at the second screen. Fly mode is read in glances and partly in peripheral vision. A string of similar short items (a row of numbers, a list of short steps packed close) is exactly the arrangement that crowds worst away from fixation [@pelli2008uncrowded].

::: {.rule #LEG-016 grade="B"}
**On any surface read in glances, show one item per line or tile, separate items with gaps larger than the line spacing, and avoid strings of similar short items side by side.** Crowding grows with eccentricity, and outside the uncrowded window objects cannot be recognized [@pelli2008uncrowded]; reading speed falls steeply away from central vision [@legge2007case]. Grade B: the principle is replicated, the layout rule is an inference for glance reading.

*In LTF:* in `FlyModePage` and `FlyPanel large`, keep one step per row with generous row padding, keep the stopwatch digits alone in their ink pill, and do not place the challenge code, goal and step text in one line. The ticked-step style (`border-go bg-go-tint`) should not reduce the spacing between rows.
:::

### What this means for Learn to Fly

The crowding evidence is strongest exactly where LTF is most custom: the hand-built SVG widgets and Fly mode. Keep the `Label` halo pattern and the large, isolated stopwatch digits. Change three things. First, audit every SVG text element in `features/widgets/` for clearance from ticks, arcs and needles (LEG-015), and for negative or default-tight tracking at small sizes (LEG-013); the smallest labels in the widgets are set at 8 to 13 viewBox units and scale down further on phones. Second, keep negative tracking confined to the large `display-*` and `heading-lg` utilities; the dossier notes a few `tracking-wide` uses on small labels, which is the right direction. Third, treat Fly mode as peripheral reading: one item per row, wide gaps, nothing important packed beside something similar (LEG-016). When a widget label must shrink, the budget rule (LEG-012) says to buy back legibility with spacing and contrast.

## Print Size, Distance and the Fluent Range

### Measure size as an angle

Point size and pixel size say little about how big text looks. What the eye receives depends on the size of the letters and the distance from which they are read, and what matters within a font is the height of the lowercase letters, the x-height, not the nominal body size. Legge and Bigelow propose the angular x-height, in degrees of visual angle, as the common unit between vision science and typography [@legge2011print].

In those units, the critical print size (the smallest size at which reading is still at full speed) is about 0.2 degrees of x-height for normally sighted readers, with individual values mostly between 0.15 and 0.3 degrees [@legge2011print]. Below it, reading speed falls sharply. Above it there is a broad plateau, the fluent range, extending about a factor of 10 to about 2 degrees; above that, speed declines gradually, starting somewhere between 1 and 3 degrees [@legge2011print]. At a reading distance of 40 cm, the fluent range runs from an x-height of 1.4 mm (about 4-point type) to 14 mm (about 40-point) [@legge2011print]. The critical print size is about three times the acuity limit, so readers are not reading near the smallest thing they can see [@legge2007case].

The evidence for the fluent range comes from a few studies with few subjects each (4 to 16), and the authors speak of "striking parallels" between vision and typographic practice rather than proof [@legge2011print]. But the convergence is notable. Tinker's 1963 size data, converted to angular x-height, fit a critical print size near 0.2 degrees: his fastest reading was at an x-height of 0.21 degrees (1.5 mm, an 11-point body), slower at 0.19 and 0.15 [@legge2011print; @tinker1963legibility]. Huey's earlier minimum for the height of short letters was the same 1.5 mm [@huey1908psychology].

### What printers chose

Legge and Bigelow surveyed 360 US newspaper front pages, 200 hardcover novels and 100 paperbacks published since 2000. Running text averaged 0.24 degrees of x-height for hardcovers and paperbacks and 0.23 for newspapers (at their assumed 40 cm), with a range from 0.20 to 0.28 [@legge2011print]. Historical text sizes were similar: 0.30 degrees for fifteenth-century Italian roman, 0.23 for sixteenth-century French, 0.22 for eighteenth-century foundry type. Where earlier types fell below 0.2 degrees (27 percent of the sixteenth-century French and 37 percent of the eighteenth-century types), they were mostly used for notes and reference matter [@legge2011print]. Five centuries of printers, constrained by paper cost, settled just above the visual threshold for running text and went below it only for text that is consulted rather than read.

The same survey found the web doing worse. Text on news home pages averaged 0.19 degrees, below the 0.2 threshold, and online headlines were far smaller than print headlines (0.31 to 0.37 degrees against a print mean of 1.71) [@legge2011print]. The 40 cm distance is an assumption; a study the authors cite found preferred distances near 50 cm for screens and 36 cm for books [@legge2011print]. At 50 cm, the same angle needs a larger letter.

### The geometry for LTF's readers

The x-height needed for a given angle grows in proportion to distance. The table below applies the standard geometry (x-height equals twice the distance times the tangent of half the angle) to the thresholds above. The 40 cm row reproduces Legge and Bigelow's 1.4 mm; the other distances are illustrations, not measurements of LTF users.

| Viewing distance | 0.2° floor | 0.24° book mean | 0.3° |
| --- | --- | --- | --- |
| 40 cm | 1.4 mm | 1.7 mm | 2.1 mm |
| 50 cm (screen) | 1.75 mm | 2.1 mm | 2.6 mm |
| 70 cm | 2.4 mm | 2.9 mm | 3.7 mm |
| 100 cm | 3.5 mm | 4.2 mm | 5.2 mm |

A learner with a tablet propped beside a simulator monitor, or a laptop on a side desk, may well be at 70 cm to a meter. At a meter, text needs two and a half times the x-height it needs at 40 cm to sit at the same point in the fluent range.

::: {.rule #LEG-017 grade="B"}
**Specify and check text size as angular x-height at the real viewing distance, not as a pixel or point value.** The critical print size and the fluent range are consistent in angular units across vision studies, Tinker's print data and printers' practice [@legge2011print]. Nominal sizes mislead because faces differ in x-height and screens differ in pixel size. Grade B: the fluent range rests on small studies, but the angle principle is geometry.

*In LTF:* each reading surface gets a stated design distance (lesson page at a desk, a second screen in Fly mode further away) and its text tokens are checked by measuring the rendered x-height on a real device with a ruler and converting with the table above.
:::

::: {.rule #LEG-018 grade="B"}
**Keep every piece of text a learner must read at or above 0.2 degrees of x-height at the design distance, and set running text near the 0.24-degree mean of printed books.** Below about 0.2 degrees reading speed falls sharply [@legge2011print]; printers kept running text between 0.20 and 0.28 degrees for centuries and went below only for notes [@legge2011print]. Treat 0.2 degrees as a floor, not a target. Web home pages averaged 0.19 degrees [@legge2011print], so copying common web practice risks falling under the floor.

*In LTF:* small meta text (`text-sm leading-5`, 14/20) and `eyebrow` (12 px) must be checked against the floor on the smallest supported phone held at its normal distance and on a second screen at Fly mode distance. Information that only appears in 12 px text, such as some widget legends, either grows or is repeated in larger text nearby.
:::

### Larger than the web default

The best screen evidence that body text should be larger than long-standing web practice is Rello, Pielot and Marcos's eye-tracking study [@rello2016make]. 104 volunteers read Wikipedia articles in Arial at six sizes from 10 to 26 points on a 17-inch, 1024 by 768 monitor at about 60 cm. Mean fixation duration, a proxy for processing difficulty, fell from 0.255 s at 10 points to 0.241 (12), 0.224 (14), 0.208 (18), 0.199 (22) and 0.204 (26); fixations at 10, 12 and 14 points were significantly longer than at every larger size. Comprehension was significantly worse at 10 and 12 points than at 18, and readers rated 18 points the most readable. The benefit flattened between 18 and 22 points [@rello2016make].

The numbers must not be copied as CSS values. The study's "points" were relative to that 1024 by 768 monitor at 60 cm, so 18 points there is not 18 points or 24 px on a modern high-density laptop or phone; the angular frame above is the safer translation [@rello2016make; @legge2011print]. The study used one face and one language, the first few paragraphs only, and a fixed column, so larger type also meant fewer characters per line. What carries over is the direction: within the range web designers commonly use, larger body text improved both an eye-movement measure and comprehension.

Tinker's print data agree on direction and add a warning about going too far. Eye-movement records favored 10-point over both 6-point and 14-point type, and readers ranked 11-point first in opinion, with 10 and 12 close behind [@tinker1963legibility]. Size, he insisted, cannot be judged alone: it interacts with line width and leading (see the chapter on line length, leading and columns).

::: {.rule #LEG-019 grade="B"}
**Set lesson body text no smaller than the long-form size LTF already defines for prose (`body-lg`, 18/29), and never shrink lesson text to fit more on the screen.** Larger body sizes shortened fixations and improved comprehension in the largest eye-tracking study of web text size, with the benefit leveling off rather than reversing within the tested range [@rello2016make]; running text in print sits near the middle of the fluent range rather than its floor [@legge2011print]. Grade B: one main screen study, with display units that do not transfer directly.

*In LTF:* lessons currently use `MarkdownContent` at the inherited 16/26, while the legal pages in `Prose` get `body-lg` at 18/29. The lesson, the most-read page in the product, is set smaller than the Terms page. Move lesson Markdown, `Callout` bodies and `QuizBlock` explanations to `body-lg`, and adjust the measure in characters at the same time (LEG-035).
:::

::: {.rule #LEG-020 grade="B"}
**Size Fly mode and other glance surfaces for their greater viewing distance, so that their x-height in degrees at that distance at least matches lesson text at a desk.** Angular size falls in proportion to distance [@legge2011print]; a second screen beside a simulator is likely further away than a lesson page, and is read in glances, in dim light and partly off-axis, all of which shrink the visual span [@legge2007case; @pelli2008uncrowded]. Grade B: the geometry is certain, the distances are assumptions to measure.

*In LTF:* `FlyModeLayout` sets `text-xl` (20 px) body, step rows in `FlyPanel large` use larger sizes and the stopwatch digits `text-5xl`. Measure the rendered x-height of step text on a phone and a tablet at the distance learners actually use beside the sim, and raise the step text if it falls below about 0.24 degrees there. Keep `ChecklistPage`'s fullscreen option and check its text the same way.
:::

### Body size is not apparent size

Two fonts at the same nominal size can differ greatly in apparent size, because their x-heights differ. Legge and Bigelow report that the mean x-height fraction (x-height as a share of body size) rises from hardcovers (0.42) to newspapers (0.48) to faces designed for screens (0.52) [@legge2011print]. Sheedy and colleagues found Verdana (x-height fraction about 0.55) the most legible of their six faces at threshold and Times New Roman (about 0.45) the least, plausibly because a larger x-height gives more pixels to the lowercase body [@sheedy2005text; @legge2011print]. Wallace and colleagues, comparing 16 fonts, first had participants match each font's size to a reference by eye, because nominal sizes of different fonts look different [@wallace2022towards]. Marinus and colleagues matched x-height before testing a dyslexia font [@marinus2016special].

A side effect matters for evaluation. If a candidate face is compared with the current one at the same `font-size`, the one with the larger x-height will look and test better simply because it is bigger. Sheedy's "optimal legibility at 9 pixels" is another number to leave in its context: it was a property of early-2000s displays and threshold tasks, not a body-size rule for today's screens [@sheedy2005text].

::: {.rule #LEG-021 grade="B"}
**Compare typefaces, and set fallback fonts, at matched x-height rather than matched font-size.** Faces differ in x-height fraction from about 0.42 to 0.55 [@legge2011print; @sheedy2005text], and studies that control for apparent size do so because nominal size confounds comparisons [@wallace2022towards; @marinus2016special]. Grade B: a methodological requirement supported by several studies.

*In LTF:* the `font-sans` stack falls back from Instrument Sans Variable to `system-ui`, `-apple-system` and `Segoe UI`. Check that a fallback render (for example while the font loads, or if it fails) does not change apparent size enough to break the measure; if it does, use `font-size-adjust`, which scales a fallback so that its x-height matches [@w3c2026cssfonts] (the details belong to Part IV, Typography on Screens). In any test of a new face, match x-height first.
:::

### Huey and Degani: old specifications in their place

Huey's hygiene chapter gave the earliest experiment-based print specifications: type size as "perhaps the most important single factor", short letters at least 1.5 mm high, vertical strokes at least 0.25 mm thick (Cohn), preferably 0.3 mm (Sack), and at least six or seven letters per running centimeter as a rough gauge [@huey1908psychology]. Degani's NASA review of flight-deck documentation recommended an x-height of at least 0.10 inch for important documents, citing NTSB findings that one airline checklist's type was 57 percent smaller than human-engineering criteria recommended, while noting there was no evidence legibility caused that accident [@degani1992typography]. Degani is explicit that his list "are not specifications" but a baseline from his interpretation of laboratory studies done at desks under normal room lighting, and he tells designers to validate in a simulator with representative pilots [@degani1992typography].

Both are paper specifications at arm's length and should not be copied into CSS. What they contribute is the point that size is a safety property for documents consulted during operation, and that the margin should be generous.

### What this means for Learn to Fly

The biggest change this chapter argues for is lesson body size: move `MarkdownContent` from the inherited 16/26 to `body-lg` 18/29, matching `Prose` (LEG-019). The second is a measurement habit: state a design distance for each surface and check rendered x-height against the 0.2-degree floor and the 0.24-degree target, using the geometry table (LEG-017, LEG-018). Fly mode, the reference `SpeedsPage` (whose KIAS cells are already `text-2xl` mono) and `ChecklistPage` in fullscreen are the surfaces where distance matters most (LEG-020). The third is to stop comparing faces at equal `font-size` (LEG-021). Keep the large `KeyNumbers large` values and the `text-5xl` stopwatch; they are the right instinct.

## Telling Characters Apart

### Which letters get confused

If words are read through their letters, a typeface is only as legible as its most confusable letters. Letter-recognition studies consistently find two groups with high error rates: x-height letters built from mixed straight and curved strokes (e, c, a, s, n, u, o), and narrow letters with a single stem (i, j, l, t, f) [@beier2010design]. Legros and Grant had measured in 1912 how far similar letter pairs overlap, and Beier and Larson used that work to design variants meant to pull confusable letters apart [@beier2010design].

Their method is the important contribution. Most legibility studies compare one finished typeface with another, so a difference could come from weight, width, proportion, serifs or any letterform. Beier and Larson built three test fonts (named SpencerTest, PykeTest and OvinkTest after legibility researchers), each containing several variants of the frequently misread letters, and compared the variants inside the same font [@beier2010design]. Variants included open and closed apertures on c, e, a and s, a single-storey a, a tailless u, broad and narrow forms of j, l, t, f and i, serifs on i, and unfamiliar forms such as a taller a and a descending s.

Two tests were run. In a short-exposure test, 41 participants aged 19 to 34 named single letters flashed for about 43 ms in parafoveal view (2 cm right of fixation at 50 cm), at about 45 pixels high, followed by a mask. In a distance test, each participant's threshold distance (4.5 to 9 meters, about 6 meters on average) was found with the letter d, and they named each letter from that distance; 7 of 41 were excluded for acuity, leaving 34 [@beier2010design].

### What helped

The results, within each font [@beier2010design]:

- Wide versions of narrow letters were more legible: the wide j, l and t beat the narrow forms, as did the wide f in one font. Only the i showed no clear benefit.
- Letters that used more of the ascender or descender space were more legible: the ascending a and the descending s beat their x-height versions.
- The single-storey a was less legible than the double-storey a, with many misreadings as o and q.
- Differentiating n and u could not be shown to help.
- More open apertures on c and e were not confirmed to help, though extremely closed e forms did worse; the open-aperture a gave no reliable gain.

The authors name the limits. Single-letter recognition removes crowding and word context and may overstate letter differences compared with reading words. The participants were young students and the fonts were test designs. Wide j and l create spacing problems (overlap with the letter to the left) that need kerning [@beier2010design]. And unfamiliar shapes, though they did well in recognition, are a different matter in running text: a later study by Beier and Larson found that exposure time rather than the commonness of letter shapes drove familiarity effects on reading speed, and that readers disliked uncommon shapes [@beier2010design].

Huey gave the opposite caution a century earlier: changes to letterforms should not rest on isolated-letter tests, because "a letter whose legibility in isolation is bad may sometimes contribute most to the legibility of the total word-form" [@huey1908psychology]. Both are right. Single-letter tests find the confusable pairs; the decision to change a form must also be checked in words and running text.

Sheedy and colleagues' threshold study adds that the face, its stroke width and its rendering all affect the smallest legible size, and that a heavier stroke improved threshold legibility only at the thinnest stroke tested [@sheedy2005text]. Arditi and Cho's parametric fonts used a stroke of 10 percent of cap height and an x-height of 55 percent [@arditi2005serifs], ordinary text proportions. Very light weights fall outside the range where these studies find no penalty.

::: {.rule #LEG-022 grade="B"}
**Test every candidate text, interface or numeral face for the character pairs that matter in LTF content (0 and O, 1, l and I, 5 and S, 8 and B, 2 and Z, rn and m) at the smallest size used and in both themes.** Confusable letters drive legibility differences, and controlled variants within a font show which forms reduce confusion [@beier2010design]. Degani's review of flight-deck documents also recommends avoiding fonts with look-alike characters [@degani1992typography]. Grade B: one well-designed experiment plus a review.

*In LTF:* the pairs appear in runway designators, frequencies, ICAO codes on `AirportsPage`, challenge codes ("C4.3"), lesson codes and setup chips. Run the check on Instrument Sans (body and labels) and JetBrains Mono (readouts) at `text-xs`, at `readout-sm`, and at the smallest widget label size, on Day and Night.
:::

::: {.rule #LEG-023 grade="B"}
**Do not use condensed faces or narrow widths for small text that must be identified letter by letter.** Narrow single-stem letters are among the most confused, and widened forms of j, l, t and f were more legible [@beier2010design]; narrower letters also sit closer together, worsening crowding [@pelli2008uncrowded]. Grade B.

*In LTF:* the planned condensed display face (D-25's Big Shoulders Display) was not implemented. If a condensed face is ever adopted for identity, confine it to large headings and the logo, never to labels, codes, table text or widgets.
:::

::: {.rule #LEG-024 grade="B"}
**Use a text face with a double-storey a and with clearly distinguished l, I and 1.** The single-storey a was misread as o and q more often than the double-storey form [@beier2010design], and narrow stems are the weak point among letters [@beier2010design]. Grade B: one experiment with test fonts.

*In LTF:* confirm the rendered forms of a, l, I and 1 in Instrument Sans Variable at the weights in use (400, 500, 600, 700). If the capital I and lowercase l are indistinguishable, prefer a stylistic alternate (if the face offers one) for interface text, and rely on JetBrains Mono, whose purpose is to separate such characters, for codes.
:::

::: {.rule #LEG-025 grade="B"}
**Do not adopt unusual letterforms for brand character in text that learners must read quickly.** Unfamiliar forms can be recognized well in isolation, but readers dislike uncommon shapes and familiarity comes from exposure [@beier2010design]. Brand distinctiveness belongs in the logo, headings and layout, not in the letters of procedures. Grade B.

*In LTF:* the logo wordmark (Instrument Sans 700, 22 px) and any future display face may carry personality; lesson text, `Callout` bodies, checklist text and Fly mode steps use conventional forms.
:::

### Numerals and codes

Aviation is full of strings where a single wrong character is a wrong answer: frequencies, headings, runway numbers, squawk codes, altitudes. These are read character by character, often with no context to correct an error, because any digit is plausible. The letter-confusion evidence applies with more force, and two typographic features become important. Tabular numerals give every digit the same width, so columns line up and changing values do not jitter; CSS exposes them as `tabular-nums`, with `slashed-zero` available to distinguish zero from capital O where the font supports it [@w3c2026cssfonts].

::: {.rule #LEG-026 grade="C"}
**Set every code, frequency, speed, altitude, heading and score in a face whose zero is visibly different from capital O, with tabular lining numerals.** Mixed strings of letters and digits are read letter by letter with little context to repair an error, and look-alike characters are a recognized hazard in flight-deck documents [@degani1992typography; @beier2010design]. Tabular numerals are a CSS feature intended for aligned columns of figures [@w3c2026cssfonts]. Grade C: the rule follows from the confusion evidence and standards practice rather than a direct experiment on numerals.

*In LTF:* LTF already does most of this: `readout-*` utilities are JetBrains Mono with `tabular-nums`, and lesson and challenge codes, V-speed cells on `SpeedsPage`, ICAO codes and stopwatch digits use `font-mono`. Verify JetBrains Mono's zero against O at `readout-sm`; enable `slashed-zero` only if the default zero is not already distinct. Do not let numbers in `Badge` or `Tabs` meta fall back to proportional Instrument Sans digits when they sit in a column.
:::

::: {.rule #LEG-027 grade="B"}
**Check any letterform or typeface change in words, running text and real readouts, not only on a specimen of isolated characters.** Single-letter tests find confusable pairs but remove crowding and context [@beier2010design]; Huey warned that a letter poor in isolation may contribute well to the word [@huey1908psychology]; and threshold legibility is a different task from reading [@sheedy2005text]. Grade B.

*In LTF:* a type review page on `/dev/components` shows each candidate face in a lesson paragraph, a checklist, a setup-chip row, a `KeyNumbers` panel and a widget label, in both themes, side by side.
:::

### What this means for Learn to Fly

LTF's split between Instrument Sans "for everything you read" and JetBrains Mono "for everything you measure" (the `tokens.css` comment) is a sound division of labor by this evidence: codes and numbers are read character by character and get a face designed to separate characters. Keep it. What is missing is a recorded check. Add a confusion-pair test (LEG-022) for both faces at the smallest sizes in use, and confirm the a, l, I and 1 forms in Instrument Sans (LEG-024). Watch for drift: the dossier notes bold mono is common in pages (`font-mono text-2xl font-bold` on `SpeedsPage`, Dashboard and result percentages) although the `readout` utilities are weight 500; bold is not a legibility cost (see the next chapter but one), but the inconsistency means the face has not been checked at both weights. Keep personality out of the letters of procedures (LEG-025), which LTF's choice of conventional faces already does.

## Typeface Choice: Serifs, Screens and Preference

### Common faces read about equally

The oldest large result about typefaces is that ordinary ones hardly differ. Tinker and Paterson's Minnesota studies, which measured speed of reading meaningful text with comprehension checked, found common text faces equally legible; only a marked difference, such as the blackletter Cloister Black against Scotch Roman, produced one [@tinker1963legibility]. A sans serif (Kabel Light) was read as fast as ordinary type, though readers did not prefer it [@tinker1963legibility]. Tinker's conclusion was that the choices that matter are size, line width with leading, all capitals, italics and contrast, not the face among reasonable candidates.

The screen era repeated the finding. When Georgia and Verdana were designed for screens, Boyarski and colleagues tested whether they were read faster than older faces. The accounts of the study agree that no reliable reading-speed differences appeared between the screen fonts and the older ones, between serif and sans serif, or between aliased and anti-aliased rendering [@boyarski1998study]. The original paper could not be read for these notes, and secondary accounts disagree on preference data, so no preference claim is made here. Dyson's review likewise reports no clear evidence of legibility differences between faces in the screen literature [@boyarski1998study; @dyson2004physical].

### Serifs, isolated

The serif debate is where opinion has run furthest ahead of evidence. Some typographers argue serifs guide the eye along the line and reduce fatigue; others that sans serif is cleaner and better on screens. Arditi and Cho tested serifs directly, with parametric fonts that differed only in serif size (0, 5 or 10 percent of cap height) and spacing, so that nothing else about the letters varied [@arditi2005serifs]. Four normally sighted observers and two with age-related maculopathy took part.

For size thresholds with random five-letter strings, serif size had a small, systematic effect (F[2,8] = 10.1, p = 0.006), with the 5 percent serif usually giving the lowest threshold [@arditi2005serifs]. But serifs also add space between letters: 14 of 26 lowercase letters carry baseline serifs, so serifs add on average 2.69 percent of cap height of spacing for the 5 percent serif and 5.38 percent for the 10 percent serif. Using the measured effect of spacing, spacing alone would predict threshold reductions of 6.88 and 13.77 arc minutes; the observed reductions were much smaller, so serifs may slightly interfere at small sizes, offsetting part of their spacing benefit [@arditi2005serifs]. In RSVP reading of sentences and in continuous reading of 400-word passages printed at 18 points, there was no systematic effect of serifs at all. The abstract's summary: "our data exhibited no difference in legibility between typefaces that differ only in the presence or absence of serifs" [@arditi2005serifs]. The sample is small and subtle effects cannot be excluded, as the authors say.

Richardson's 2022 monograph applies the method of a systematic review to the whole question, on paper and on screens, and concludes: "there seems to be no difference in the legibility of serif typefaces and sans serif typefaces either when reading from paper or when reading from screens" [@richardson2022legibility]. He notes that twentieth-century typographers "almost without exception" held serifs easier to read on paper, while twenty-first-century dissent came mainly from journal editors recommending sans serif without evidence. He flags Wheildon's frequently cited research programme as having "come under extensive criticism" [@richardson2022legibility]. Only the chapter abstracts could be read for these notes, so the inclusion criteria and study count are not known. Degani's 1992 review called sans serif "usually more legible" for flight-deck documents [@degani1992typography]; later work has qualified this, and it is best treated as weak evidence.

::: myth
**"Serif type is more legible because serifs lead the eye along the line" (or the reverse, "sans serif is more legible on screens").** Controlled fonts differing only in serifs show no difference in reading speed, with at most a small threshold effect at small sizes that may come from the spacing serifs add [@arditi2005serifs]. A systematic review of paper and screen studies finds no difference in legibility between serif and sans serif [@richardson2022legibility]. Common faces of either kind read about equally [@tinker1963legibility; @boyarski1998study].
:::

::: {.rule #LEG-028 grade="A"}
**Choose LTF's typefaces for character distinctness, numerals, weight range, language coverage, rendering and tone, not for a claimed legibility advantage of serif or sans.** Controlled and review evidence finds no reliable legibility difference between serif and sans serif or between common text faces [@arditi2005serifs; @richardson2022legibility; @tinker1963legibility; @boyarski1998study]. Independent studies from print and screen, by different methods, agree.

*In LTF:* the current Instrument Sans is not justified or condemned by its lack of serifs. If the generic look of the product (the dossier's "Inter plus mono" observation) argues for a change of text face, that is a brand decision for Part XX, Brand Identity and Distinctiveness, to be checked against LEG-022 and LEG-024 before adoption.
:::

::: {.rule #LEG-029 grade="A"}
**Do not expect a change of typeface to fix a legibility problem; fix size, measure, spacing and contrast first.** Tinker found the large effects in size, line width, leading, capitals, italics and contrast, not in the choice among ordinary faces [@tinker1963legibility]; screen studies found no reliable speed gain from faces designed for screens [@boyarski1998study]; and a 16-font study found no font reliably faster across its whole sample [@wallace2022towards].

*In LTF:* when a lesson or widget "reads badly", the review checks the measure (LEG-035), size (LEG-019, LEG-020), spacing (LEG-013) and contrast (LEG-041) before anyone proposes a new font.
:::

### Preference is not performance

Readers have strong views about typefaces, and those views are a poor guide to how well they read. Wallace and colleagues measured reading speed for 352 adult crowdworkers (after filtering 500 recruits), each reading paragraph-length passages in five of 16 fonts, including their own most preferred [@wallace2022towards]. Across the whole sample, font was not a significant predictor of speed. At the individual level, people read 14 percent faster in their fastest font (314 words per minute on average) than in their preferred font (275), and 35 percent faster in their fastest than their slowest (232) among the five they read. Their preferred font was their fastest 20 percent of the time and their slowest 20 percent of the time, which is chance for five fonts; yet 73 percent of participants believed their preferred font would be the most effective [@wallace2022towards]. Comprehension stayed flat (median 90 percent).

Two readings of the 35 percent figure need care. The paper presents it as evidence that "one font does not fit all" and argues for individuated fonts [@wallace2022towards]. But taking each person's fastest and slowest of five noisy measurements will always produce a gap, even if fonts did nothing, so the figure is an upper bound on the font effect rather than an estimate of it. The authors' own chance-level result for preferred fonts and their description of a Cohen's d analysis as "a rough sanity check" point the same way. A retest of each person's fastest font on a second occasion would settle it.

The dissociation between preference and performance is not a one-off. Readers in Dyson and Kipping's study rated a 55-character line easiest but read faster at 100 [@dyson2004physical]. In Rello and Baeza-Yates's study of readers with dyslexia, preference and reading time were barely correlated (Pearson -0.13) [@rello2013good]. In Kuster and colleagues' studies of children, preference was largely unrelated to performance [@kuster2018dyslexie]. Wallace and colleagues say their result reproduces earlier work by Boyarski's group [@wallace2022towards].

::: {.rule #LEG-030 grade="A"}
**Never choose a typeface, size or layout by stakeholder or learner preference alone; measure reading with comprehension checked.** Preference failed to predict reading performance in adults choosing among fonts [@wallace2022towards], in line-length studies [@dyson2004physical], and in readers with dyslexia [@rello2013good; @kuster2018dyslexie]. Several independent studies agree. Preference still matters for tone and for whether people stay, so record it, but separately.

*In LTF:* a design review that compares two type treatments by asking "which looks better?" adds a short task test with real learners (time to read a lesson section and answer its `QuizBlock`, or time to find a value on `SpeedsPage`), counterbalanced for order (LEG-057).
:::

### What the population results leave open

Wallace's subgroup of 118 participants aged 35 or older did show a significant font effect (p = 0.01), with EB Garamond and Montserrat faster and Avant Garde and Open Sans slower, and the age effect on speed was larger in that group (2.6 words per minute per year against 1.51 overall) [@wallace2022towards]. That is a hypothesis about older readers, not a rule, and the remote study did not control screen, distance or device. Tone also remains a real reason to choose a face: Richardson treats connotation and preference as separate from legibility [@richardson2022legibility], and Part XVIII, Aesthetics, Emotion and Trust, covers how appearance affects credibility.

### What this means for Learn to Fly

The evidence frees LTF from the serif argument and points its type effort elsewhere. Keep the current faces unless brand work (Part XX) gives a reason to change, and if it does, choose by the criteria in LEG-028 and test against the confusion pairs in LEG-022. Do not run a preference poll among stakeholders or beta testers to pick a face (LEG-030); run a small counterbalanced reading test instead. Before any type change, fix the lesson's size (LEG-019) and measure (LEG-035), which are larger levers than the face (LEG-029). The dossier's two typographic dialects (raw Tailwind sizes like `text-2xl font-bold` beside the `display-*` and `heading-*` utilities) are a consistency problem rather than a legibility one, but unifying them is the moment to apply these rules.

## Italic, Bold and Emphasis

### Italic costs a little, and more in bad conditions

Tinker's studies found italic read somewhat more slowly than roman, and 96 percent of readers preferred lowercase roman to it [@tinker1963legibility]. The cost grew in poor conditions: italic combined with marginal lighting or small size slowed reading by more than 10 percent [@tinker1963legibility]. Rello and Baeza-Yates's eye-tracking study of 48 readers with dyslexia found the same direction by different measures [@rello2013good]. Of 12 fonts, Arial Italic had the longest mean reading time (about 35.0 s for a 60-word text against about 28.4 s for Arial), significantly longer than Arial, Computer Modern Unicode and Helvetica, and the longest mean fixation (0.28 s). Across the italic fonts as a group, fixations were longer (0.27 s against 0.25 s, p = 0.040), though group reading time was not significantly different (p = 0.09) [@rello2013good]. Degani's review of flight-deck documents recommends avoiding long italic strings [@degani1992typography].

The effect is modest and the studies old or narrow (Tinker on paper; Rello with short Spanish texts read once). But they agree in direction across eras, populations and measures, and italic has no compensating legibility benefit. Its uses are typographic conventions: titles of works, a word discussed as a word, a short aside.

::: {.rule #LEG-031 grade="B"}
**Do not set instructions, warnings, procedures, radio calls or any sentence a learner must act on in italic.** Italic was read more slowly in print, with a larger cost at small sizes and in poor light [@tinker1963legibility], produced longer fixations and, for Arial Italic, the longest reading times in readers with dyslexia [@rello2013good], and long italic strings are discouraged in flight-deck documents [@degani1992typography]. Grade B: consistent direction, small or dated studies.

*In LTF:* the traffic-pattern widget renders the radio call for each position as `<p className="mt-1 italic">` in quotation marks (`TrafficPattern.tsx`). Set it in roman; the quotation marks already mark it as speech. In lesson Markdown, `*emphasis*` renders as italic; the content guide should reserve it for titles and words discussed as words, and use `**bold**` for emphasis. Italic labels inside the drawn sectional (`Chart.tsx`) imitate chart convention and may stay, at a size that passes LEG-018.
:::

### Bold is free

Boldface, in Tinker's tests, was read at the ordinary rate, although 70 percent of readers preferred ordinary lowercase for running text [@tinker1963legibility]. At the threshold of legibility, Sheedy and colleagues found a heavier stroke helped only at the thinnest width they tested [@sheedy2005text]: bold rescues very light type but does not make normal type more legible. For emphasis, then, bold is the safe choice; for running text, normal weight is preferred and costs nothing.

::: {.rule #LEG-032 grade="B"}
**Use bold (LTF's `font-semibold`) to emphasize the critical word in an instruction, and normal weight for running text.** Bold was read at the ordinary rate while readers preferred normal weight for body text [@tinker1963legibility]; heavier strokes improve threshold legibility only for very thin strokes [@sheedy2005text]. Grade B.

*In LTF:* `MarkdownContent` already maps `strong` to `font-semibold`. Use it for the one word that carries a step's meaning (often the negation, see LEG-005), not for whole sentences. Avoid weights below 400 for any reading text, especially in Night.
:::

### One or two signals, not five

Every emphasis method (bold, italic, capitals, color, a box, an icon) competes with the others. Degani's recommendations for flight-deck documents include using one or two typefaces for emphasis and reserving colors for meanings (red usually associated with danger, green with normal, amber with caution) [@degani1992typography]. WCAG 2.2 requires that color is never the only visual means of conveying information [@w3c2023wcag], and Cattell's naming studies give an old reason: colors took about twice as long to name as words [@cattell1886time]. A word in a colored, bold, capitalized box with an icon is not more emphatic than a bold word; it is noisier, and the next emphatic thing has nowhere to go.

::: {.rule #LEG-033 grade="C"}
**Limit emphasis in running text to bold, and give status meaning by a word plus, optionally, an icon and color; never by color alone.** Flight-deck guidance limits emphasis methods and assigns colors to fixed meanings [@degani1992typography]; WCAG forbids color as the only means of conveying information [@w3c2023wcag]; and words are named faster than colors [@cattell1886time]. Grade C: guidance and standards rather than a controlled comparison of emphasis schemes.

*In LTF:* the `Callout` design (tint fill, type color only on the 20 px icon and title, no left stripe) and the `Badge` rule (status variants add an icon and a word) follow this. Keep them. Inside a `safety` Callout, do not add capitals or red text to the body; the callout already signals its type.
:::

### Non-optimal conditions compound

Tinker's eleventh chapter makes the point that matters most in practice: small departures from good practice that each cost a little combine into a large loss, though not strictly additively [@tinker1963legibility]. Degani applies it to the cockpit: white on black, italics, bold, small type and color together hurt more than any one alone, and the combined effect cannot be predicted by adding the single effects [@degani1992typography]. Degani also reports figures attributed to Tinker for conditions LTF will not meet on paper but will meet in analog: reading speed fell on glossy paper compared with matte, and tilting type 105, 120 and 135 degrees from the line of sight slowed reading by 1.5, 5.3 and 9.8 percent [@degani1992typography]. A tablet lying flat beside a keyboard is read at an angle.

::: {.rule #LEG-034 grade="B"}
**Never combine two or more of these in one text element: small size, light weight, italic, reversed polarity, low contrast, tight spacing.** Each costs a little alone and together they cost more than their sum predicts [@tinker1963legibility; @degani1992typography]. Grade B: consistent print-era evidence, not tested on screens.

*In LTF:* the riskiest places are Night theme meta text (`text-sm text-ink-3`, reversed and grey), widget captions (small, often reversed on `fill-instrument`) and Fly mode (reversed, read at an angle and distance). In each, at most one of the listed conditions may apply; for example, a reversed widget caption must be full-contrast `fill-instrument-text`, normal weight or heavier, roman and normally spaced.
:::

### What this means for Learn to Fly

LTF's emphasis system is already restrained: one accent, status by icon and word, `font-semibold` for strong text, no italic in components. Two changes follow from this chapter. Set the traffic-pattern radio calls in roman (LEG-031) and write a content rule that lesson Markdown uses bold for emphasis and italic only for titles. Then audit the combinations (LEG-034): reversed widget labels, Night meta text and Fly mode are where several mild costs meet. The `tier-pop` and `warning-pulse` animations add motion as a signal; that belongs to Part XXII, Motion and Perceived Performance, but the same restraint applies.

## Line Length, Leading and Columns

### A broad middle with two failure modes

Line length has a broad comfortable middle, and the two extremes fail for different reasons. Tinker's line-width and leading studies used samples rarely matched since (1,760 readers for 10-point type, 1,900 for 11-point, 1,800 for 12-point, 2,000 each for 9 and 8 points, 1,960 for 6) [@tinker1963legibility]. Ten-point type set solid was equally legible from 17 to 27 picas, and with 2 points of leading from 14 to 31 picas. Very short lines needed more and longer fixations. At the other end, a 43-pica line raised regression frequency by 56.7 percent against a 19-pica line, which Tinker explained as difficulty finding the start of the next line [@tinker1963legibility]. He published "safety zones" for each size; for 10-point, 14-pica lines with 1 to 4 points of leading, or 19-pica lines with 2 to 4 points.

Huey reached the same direction with weaker methods. He reported a consensus for shorter lines with a maximum of 90 mm and preferred 60 to 80 mm; in his recordings a 60.5 mm column was read at 3.63 words per fixation, while columns of 98 to 121 mm needed about one fixation per two words [@huey1908psychology]. His observation that shorter lines let the reader see "what his eye has just passed as well as what is just coming" is a plausible mechanism. His figures are in millimeters with no control for type size, so they show direction, not a value.

### Count characters

Dyson's critical review of screen studies argues that characters per line, physical line length, type size and margins were often confounded (a 15 cm line holds about 90 characters of 12-point Times and about 100 of 10-point) and that characters per line is the variable that matters, because saccade length is consistent in characters rather than in degrees (Morrison and Rayner) [@dyson2004physical]. This fits the eye-movement data: saccades average 7 to 9 letter spaces whatever the type size within normal ranges [@rayner1998eye].

Read that way, the screen studies mostly favor longer lines for speed and moderate lines for preference and comprehension [@dyson2004physical]:

- Dyson and Kipping: 48 readers, 800-word passages in 10-point Arial, six lengths from 25 to 100 characters per line. The longest line was read faster than the shortest, partly because of less scrolling; no other pairwise differences. Readers rated 55 characters easiest, though it was not fastest.
- Dyson and Haselgrove: with a more demanding multiple-choice comprehension test, 55 characters per line gave better comprehension than 100.
- Bernard and colleagues (2002): 20 adults at 45, 76 and 132 characters in 12-point Arial; no reading-time differences, which Dyson notes fails to replicate the earlier speed result, perhaps because of the extreme 132-character line.
- Youngman and Scharff: in a search task, fastest at the longest line with no margin, a format readers disliked most.

Bernard and colleagues' 2003 study of adults and children at about 45, 76 and 132 characters found no difference in reading time or efficiency for either group, while adults found the short line significantly easier to concentrate on and none chose the full width as a favorite [@bernard2003effects]. Accounts of the children's preferences conflict, so they are not used here. A later Wichita State study (Shaikh and Chaparro) found faster reading at 95 characters among 35 to 95, so the null is not settled [@bernard2003effects]. Dyson states that studies to date have not identified an upper limit on characters per line [@dyson2004physical]. The studies are small (18 to 48 participants), on 1980s and 1990s screens, and comprehension was often measured only to check for a speed-accuracy trade-off.

In print, Dyson cites Spencer for lines of no more than about 70 characters and Rayner and Pollatsek for deducing 52 characters from Tinker's work [@dyson2004physical].

The mechanism explains both ends. Short lines cut the characters available per fixation and multiply return sweeps. Long lines lengthen the return sweep and raise the chance of landing on the wrong line, which is where Tinker's extra regressions come from. In the middle, speed is flat, and preference and comprehension lean toward moderate lengths.

::: {.rule #LEG-035 grade="B"}
**Set lesson prose to a measure of about 45 to 75 characters per line, and never wider than about 80.** Readers prefer moderate lines, one study found better comprehension at 55 than at 100 characters, print tradition sits around 52 to 70, and long print lines raise regressions [@dyson2004physical; @tinker1963legibility; @bernard2003effects]. This is a preference and comprehension judgment, not a speed optimum: on screens, longer lines were often read as fast or faster [@dyson2004physical]. Hence B.

*In LTF:* the lesson `article` is capped at `max-w-[800px]`, which the dossier estimates at roughly 90 to 100 characters of 16 px Instrument Sans (not measured). `Prose` already uses `max-w-measure`, the `container-measure` token at 68ch. Apply `max-w-measure` to lesson paragraphs, lists and `Callout` bodies; let `WidgetFrame`, tables and images use the full 800 px column.
:::

::: {.rule #LEG-036 grade="B"}
**Specify every text measure in characters (`ch` units or a token built on them), never in pixels or fixed rem, so that it holds when the text size changes.** Characters per line, not physical width, is the variable that tracks reading, because saccades are constant in characters [@dyson2004physical; @rayner1998eye]. Enlarging type on a fixed-width column silently shortens the line [@rello2016make]. Grade B.

*In LTF:* `container-measure` (68ch) is the right kind of token. The lesson's `max-w-[800px]`, the Fly mode `max-w-3xl` and the `Callout`'s inherited width are pixel-based; when lesson text moves to `body-lg` (LEG-019) an 800 px column holds fewer characters, and it changes again whenever a learner zooms or sets a larger default size. A measure in `ch` keeps the count constant through all of these.
:::

### Leading

Leading (line spacing) matters less than size and length, and its effect depends on both. Tinker found leading mattered more for small type than for 12-point, and that 8-point type with 2 points of leading was not read faster than 10-point set solid: extra space between lines does not substitute for size [@tinker1963legibility]. His safety zones pair longer lines with more leading. Huey's sources conflicted on leading, some finding a small gain and Javal thinking the space better spent on larger letters [@huey1908psychology]. On screens, Dyson reports that double spacing was marginally better than single in one study and clearly better in another, but that the comparisons were confounded with the number of lines per screen and that no recent studies existed [@dyson2004physical].

The clearest modern data are Rello, Pielot and Marcos's [@rello2016make]. They tested line spacings of 0.8, 1.0, 1.4 and 1.8 times the browser default (where 1.0 equals 120 percent of the font size). Line spacing had no significant effect on fixation duration, but the tightest setting (0.8, about 96 percent of the font size) gave significantly lower comprehension than the others, and readers' own judgment of comprehension was lower at the loosest (1.8) than at the default. Degani recommends line spacing not below 25 to 33 percent of the font size for flight-deck documents [@degani1992typography].

::: {.rule #LEG-037 grade="B"}
**Keep running text line height between about 1.3 and 1.7 times the font size, never tighter than 1.2, and give longer lines and smaller sizes the upper end.** Very tight leading reduced comprehension and very loose leading lowered readers' sense of comprehension [@rello2016make]; leading matters more for small type and pairs with line length [@tinker1963legibility]; flight-deck guidance sets a floor of 25 to 33 percent extra space [@degani1992typography]. Grade B: one modern screen study and older print evidence.

*In LTF:* the base `line-height` of 1.625 (16/26) and `body-lg` 18/29 (about 1.61) sit in the band; keep them. `text-sm leading-5` (14/20, about 1.43) is acceptable for one- or two-line meta text but should not carry paragraphs. Headings at 1.25 with `text-wrap: balance` are fine because they are short. Fly mode step text in `FlyPanel large` should inherit a line height in the band rather than Tailwind's tighter defaults for large sizes.
:::

### Columns and how much is visible

Dyson's review reports that a single column of about 80 characters per line, paged, was read faster than three columns of about 25 characters, or than the same single column scrolled, with no difference in comprehension (18 participants), though the advantage held only for the 18 to 24 age group [@dyson2004physical]. On window height, Duchnicky and Kolers found reading faster with 4 and 20 visible lines than with fewer, with no comprehension differences [@dyson2004physical]. Narrow multi-column text is a print economy; on screens it costs speed and forces vertical scrolling within each column.

::: {.rule #LEG-038 grade="B"}
**Set running text in a single column on every screen size; never flow lesson prose into multiple columns.** A single column read faster than three narrow ones with no comprehension cost [@dyson2004physical]. Grade B: one small study, consistent with the short-line costs in print [@tinker1963legibility].

*In LTF:* lesson, module, challenge Brief and legal pages are single-column and should stay so. Multi-column grids (`md:grid-cols-2` FAQ on the landing page, challenge card grids) are fine for separate items, not for continuous text.
:::

::: {.rule #LEG-039 grade="B"}
**Show several lines or steps at once on reading surfaces; do not reduce a procedure or a passage to one line at a time.** Reading was faster with 4 and 20 visible lines than with fewer [@dyson2004physical], and removing the ability to look back harms comprehension (see the chapter on speed, comprehension and re-reading) [@rayner2016much]. Grade B.

*In LTF:* `FlyPanel` lists all steps with checkboxes rather than showing one step per screen; keep that design in Fly mode and in the `checklist-runner` widget, and do not introduce a "focus mode" that hides finished and upcoming steps.
:::

### Narrow is safe for glance surfaces

A narrower line costs little speed in the middle range and adults find short lines easiest to concentrate on [@bernard2003effects]. For surfaces read in short glances, where finding the start of the next line matters more than throughput, a short measure is a low-risk choice, provided the type is large (see the chapter on print size, distance and the fluent range).

::: {.rule #LEG-040 grade="B"}
**On glance surfaces (Fly mode, checklists in fullscreen, the kneeboard), prefer a short measure of large text over a long measure of small text.** Short lines were easiest to concentrate on and cost no measurable speed in the middle range [@bernard2003effects; @dyson2004physical], and Tinker's extra regressions came from long lines [@tinker1963legibility]. Grade B.

*In LTF:* Fly mode's `max-w-3xl` at `text-xl` gives a short measure of large type; keep it, and on wide monitors resist widening it. In `ChecklistPage` fullscreen, cap the checklist column in `ch` rather than letting it stretch to the screen edge.
:::

### What this means for Learn to Fly

The lesson page is the main fix. Its 800 px article cap sets prose wider than the product's own measure token, and with a move to `body-lg` the cap would hold about the right number of characters only by accident. Put lesson prose on `max-w-measure` (LEG-035, LEG-036) and leave the wide column for widgets and tables. Keep LTF's line heights (LEG-037), its single-column reading pages (LEG-038) and the Fly mode design that shows every step at once in a short, large measure (LEG-039, LEG-040). When testing any width change, measure comprehension as well as speed, because the two diverge in this literature.

## Contrast, Polarity and Reading in the Dark

### Contrast feeds the visual span

Contrast between letters and ground is one of the three properties that set the visual span. In Legge and colleagues' contrast experiments, the span explained 96 to 99.6 percent of the variance in reading speed across contrast conditions [@legge2007case]. The critical contrast, below which reading slows, is about 5 to 10 percent for normally sighted readers at good sizes [@legge2007case]. Ordinary interface text is far above that, which is why normally sighted readers tolerate moderate contrast loss at comfortable sizes. The reserve is what disappears when the text is also small, far away, seen off-axis, reversed or read by an older or low-vision reader, because the budget is shared (LEG-012).

WCAG 2.2's contrast minimum is built around that reserve. Success Criterion 1.4.3 requires a contrast ratio of at least 4.5:1 for text and 3:1 for large-scale text (18 point, or 14 point bold) [@w3c2023wcag]. The Understanding document explains the 4.5:1 figure as 3:1 (the minimum in earlier ISO and ANSI standards for standard text) multiplied by about 1.5 to compensate for the contrast sensitivity loss typical of about 20/40 acuity, which it links to typical acuity at about age 80; the enhanced 7:1 level relates to about 20/80 vision [@w3c2023wcag]. The thresholds are not rounded: 4.499:1 fails. The ratio is a consensus engineering measure, criticized by the developer of a rival method for ignoring font size and weight and for its behavior with dark colors; those criticisms are not independently validated, and WCAG 2.x remains the operative standard [@w3c2023wcag].

### LTF's text tokens, measured

The ratios below were computed for this Part from the hex values in `tokens.css` with the WCAG relative-luminance formula; they are arithmetic on the tokens, not rendered measurements, and do not include transparency or anti-aliasing.

| Text token on ground | Day | Night |
| --- | --- | --- |
| `ink` on `canvas` | 16.6:1 | 15.5:1 |
| `ink-2` on `surface` | 7.1:1 | 7.8:1 |
| `ink-3` on `surface-sunken` | 4.7:1 | 6.2:1 |
| `ink-3` on `surface-raised` | 5.5:1 | 4.6:1 |
| `ink-3` on `accent-tint` | 4.9:1 | 4.3:1 |
| `accent` on `surface-sunken` | 4.7:1 | 10.8:1 |

Every listed pair passes 4.5:1 except Night `ink-3` on `accent-tint` (about 4.3:1), which would fail if that combination were used; the files read for this Part did not show it in use, but the `current` Card and active `ReferenceSections` rail both use `accent-tint` fills, so it is one class away. Several pairs (Day `ink-3` and `accent` on `surface-sunken`, Night `ink-3` on `surface-raised`) pass with little margin. Passing is the floor. The span evidence argues for reserve, especially for small text, which `ink-3` usually is.

::: {.rule #LEG-041 grade="C"}
**Hold every text color and ground pair to WCAG 2.2 contrast (4.5:1 for text, 3:1 for large text) in both themes, computed from the final composited colors and never rounded up.** This is the accessibility standard LTF is audited against [@w3c2023wcag]. Grade C: a consensus standard whose thresholds are justified by vision research but not themselves tested as optima.

*In LTF:* add the token-pair table to the design-system tests so that a token change that drops a pair below 4.5:1 fails CI. Forbid `text-ink-3` on `bg-accent-tint` in Night (about 4.3:1) or adjust one of the tokens. Check text over `bg-canvas/95` with `backdrop-blur` in the sticky `Header`, where the composited ground depends on what scrolls beneath.
:::

::: {.rule #LEG-042 grade="B"}
**Give small text, and any text read at a distance or in a glance, contrast well above the minimum: use `ink` or `ink-2`, not `ink-3`, for anything a learner needs to act on.** Contrast is one input to the visual span, which tracks reading speed [@legge2007case]; the minimum assumes typical viewing and protects mainly against moderate acuity loss [@w3c2023wcag]; and costs from small size, reversal and low contrast compound [@tinker1963legibility; @degani1992typography]. Grade B.

*In LTF:* `text-ink-3` is used for quiet notes (the landing "You can start without an account" line), locked states and reference rail numbers. Keep it for content that is repeated elsewhere or decorative, and move instructions, form hints and widget readout labels to `ink-2` or `ink`.
:::

### Dark on light, light on dark

Tinker's tests found black print on white much more legible than white on black, because reversed print needed more fixations, and three-quarters of readers preferred black on white [@tinker1963legibility]. The cost depended on the face and size: reversal slowed the serif face (Scotch Roman) at every size tested, while a sans serif lost little at 10 and 14 points but did lose at 6 points [@tinker1963legibility]. Degani recommends black on white for most flight-deck documents and advises avoiding white on black in normal operations; where it is used, it should carry little text, in large type and a sans serif [@degani1992typography].

These are paper results. A screen in a dark room is a different situation, and Degani himself describes the problem of eyes moving between a lit document and a dark scene [@degani1992typography]. The learner beside a simulator at night faces that problem: a bright white tablet next to a dark sim scene forces the eye to readapt at every glance. A dark Fly mode is a reasonable answer to that, as LTF already decided. What the print evidence warns against is assuming that reversed text reads as well as dark text at the same size and weight. It does not, especially when small.

::: {.rule #LEG-043 grade="B"}
**In the Night theme and Fly mode, compensate for reversed polarity with size and weight: keep reading text at `text-sm` or larger, weight 400 or heavier, and in `ink` or `ink-2`.** Reversed print needed more fixations and cost more at small sizes, though a sans serif lost little at ordinary sizes [@tinker1963legibility]; flight-deck guidance limits reversed text to little text in large type [@degani1992typography]. Grade B: consistent print evidence, untested on modern screens.

*In LTF:* LTF's Night greys are near-neutral and its sans face matches the condition where reversal cost least. Keep that, and do not use `text-xs` for content in Night, or `ink-3` for anything in Fly mode. Test lesson reading in Night with learners rather than assuming parity with Day.
:::

::: {.rule #LEG-044 grade="C"}
**Keep Fly mode dark by default and avoid large bright areas on it, including banners and images.** A reader alternating between a lit document and a dark scene must readapt at each glance, a problem Degani raises for flight decks, and his guidance is to avoid large pure-white panels in that situation [@degani1992typography]. Grade C: a review's recommendation, not a tested threshold.

*In LTF:* `FlyModeLayout` forces `data-theme='dark'` unless the reader chose Day, which fits. The `BetaBanner` appears above Fly mode; in Night its `bg-caution-tint` is dark amber, which is acceptable, but it should be dismissible there as everywhere. Any future image or diagram in Fly mode uses the dark instrument palette, not a white card.
:::

### Older eyes and difficult light

Degani notes a 50 percent reduction in retinal illumination at age 50 compared with age 20, and that most laboratory subjects in the studies behind his recommendations were probably young recruits [@degani1992typography]. Rayner reports that older readers make longer fixations and shorter saccades [@rayner1998eye]. Wallace and colleagues found reading speed fell 1.51 words per minute per year of age across their sample [@wallace2022towards]. The flight-sim hobby and adult flight training both include many older learners, and Fisk and colleagues argue that age-related changes in vision are systematic enough to design for from the start, and that doing so helps younger users too [@fisk2009designing].

::: {.rule #LEG-045 grade="B"}
**Treat readers over 50 as a normal case when setting size, contrast and spacing floors, not as an edge case.** Retinal illumination falls substantially with age [@degani1992typography]; older readers fixate longer and read more slowly [@rayner1998eye; @wallace2022towards]; and most legibility data come from young participants [@degani1992typography; @beier2010design]. Design guidance for older adults treats these changes as systematic [@fisk2009designing]. Grade B.

*In LTF:* the floors in LEG-018, LEG-042 and LEG-043 are set with older readers in mind. Recruit at least some learners over 50 for any reading test (see the chapter on dyslexia, age and individual differences).
:::

### What this means for Learn to Fly

LTF's palette passes the WCAG minimum almost everywhere, and its decisions (near-neutral greys, a sans face, a dark Fly mode, fixed high-contrast instrument colors such as `instrument-text` on `instrument` at about 16:1) suit the evidence. Keep them. Change three things: forbid the one failing pair (Night `ink-3` on `accent-tint`) and put the token table under test (LEG-041); move action-bearing text off `ink-3` (LEG-042); and add size and weight floors for Night and Fly mode (LEG-043). Design the floors for older eyes (LEG-045). The dark Fly mode is right; keep bright areas out of it (LEG-044).

## Speed, Comprehension and Re-reading

### What limits reading speed

Skilled readers already average 200 to 400 words per minute, and eye movements account for no more than about 10 percent of reading time [@rayner2016much]. The main bottleneck is not getting visual input onto the retina but recognizing words and combining them into meaning [@rayner2016much]. Rayner and colleagues' review for the public, written in response to apps that promised reading at up to 1,000 words per minute by flashing one word at a time, concludes that there is a trade-off between speed and accuracy, and that it is unlikely readers can double or triple their speed (for example from around 250 to 500 to 750 words per minute) while understanding as well as at normal speed [@rayner2016much]. Skimming gets through text faster with moderate comprehension when gist is the goal. The way to read faster with high comprehension is to become a more skilled language user, chiefly through vocabulary [@rayner2016much].

Rapid serial visual presentation (RSVP), the one-word-at-a-time display those apps use, removes eye movements and with them the ability to look back. Removing re-reading tends to make comprehension worse [@rayner2016much]. Schotter, Tran and Rayner tested the claim that regressions are wasteful and found the opposite: when readers could not re-read, comprehension suffered [@rayner2016much]. RSVP speeds can be very high in the laboratory (1,171 words per minute against 303 for static text in one study) [@legge2007case], but those are presentation rates, not rates of understanding. Claims of prodigious readers fail when tested; such readers generally already know the topic, and without prior knowledge they recall little [@rayner2016much]. The review is a narrative synthesis, but its conclusion matches decades of eye-movement work and is not contested in the sources read here.

::: myth
**"Speed reading, or showing one word at a time, lets you read much faster with full understanding."** The evidence shows a trade-off between speed and comprehension; eye movements take no more than about 10 percent of reading time, so speeding up visual input does little; and preventing re-reading harms comprehension [@rayner2016much]. High RSVP presentation rates are not rates of understanding [@legge2007case].
:::

::: {.rule #LEG-046 grade="A"}
**Do not build speed-reading, word-at-a-time, auto-scrolling or other paced-text features for lessons, briefs or checklists.** Speed gains come at the cost of comprehension, the bottleneck is language not vision, and removing re-reading harms understanding [@rayner2016much]. The conclusion rests on a large, consistent literature reviewed by its leading researchers.

*In LTF:* no "speed mode", no teleprompter view in Fly mode, no auto-advancing steps. The learner controls when the next step appears, as `FlyPanel` already does with checkboxes.
:::

### Re-reading is part of reading

Regressions are 10 to 15 percent of saccades in skilled reading [@rayner1998eye], more when text is hard, and the evidence above shows they serve comprehension. For a beginner reading a procedure, looking back is part of understanding. The interface should make it easy: the text stays where it was, and nothing a learner might need to re-read disappears while they act on it.

::: {.rule #LEG-047 grade="B"}
**Keep the text a learner is answering or acting on visible and re-readable: quizzes do not hide the lesson, steps do not disappear when ticked, and briefs stay one tap away during a challenge.** Inability to re-read impairs comprehension [@rayner2016much], and regressions are a normal and frequent part of reading [@rayner1998eye]. Grade B: the comprehension finding is direct, the interface application is an inference.

*In LTF:* `QuizBlock` sits inline in the lesson, so the text above stays scrollable; keep it that way and never present lesson quizzes in a modal. In the challenge `Tabs`, the Fly tab should offer a way back to the Brief without losing step state (the `?tab=` URL state allows this). Ticked `FlyPanel` steps stay visible with `border-go bg-go-tint`.
:::

### Vocabulary is the lever

If language skill sets reading speed, then a beginner's reading speed in aviation is set by aviation vocabulary. Rayner and colleagues identify vocabulary and broad exposure as the reliable route to faster reading with comprehension: knowing the words, and enough context to anticipate the next ones [@rayner2016much]. Cattell's familiarity data point the same way [@cattell1886time]. LTF cannot make learners better readers in general, but it controls the vocabulary of its own lessons: how many new terms each page introduces, whether each is defined where it first appears, and whether the same word is used for the same thing everywhere (LEG-006).

::: {.rule #LEG-048 grade="B"}
**Define every aviation term where it first appears in a lesson, keep its definition one tap away on every later page, and introduce few new terms per section.** Vocabulary is the main lever on reading speed with comprehension [@rayner2016much], and unfamiliar words take longer to read [@cattell1886time; @rayner1998eye]. Grade B: the vocabulary effect is robust; the "few per section" guidance is an inference without a measured limit.

*In LTF:* the lesson glossary chips ("Terms in this lesson" in the right rail on `xl`, below the content otherwise) and their `Popover` definitions are the right mechanism. Make sure each chip's term also appears in bold or defined in the sentence of first use, and surface the same `Popover` for terms in `QuizBlock` and Fly mode.
:::

### Reading for gist and reading for action

Skimming works when the goal is gist [@rayner2016much]. Learners returning to a lesson to look something up are skimming, and a learner glancing at Fly mode mid-flight is searching for one line. Both are legitimate kinds of reading, and they need different support from a first reading: headings that name the content, key terms that stand out, and exact details (a checklist step, a value) set apart from prose so they can be found without reading paragraphs.

::: {.rule #LEG-049 grade="B"}
**Structure every lesson for return visits: descriptive section headings, a short objective list, key terms marked, and exact steps and values set apart from the prose rather than embedded in it.** Skimming yields gist at reduced comprehension [@rayner2016much], so anything that must be recalled exactly should not depend on careful reading of paragraphs. Grade B.

*In LTF:* the lesson objectives `Card` ("In this lesson you will"), the `SectionNav` rail and heading blocks already serve this. Put procedures in `checklist` blocks or ordered lists and values in `KeyNumbers` or tables with `{{vspeed.*}}` tokens, not inside sentences.
:::

::: {.rule #LEG-050 grade="C"}
**Promise clarity, not speed, in LTF's copy about its lessons.** The evidence does not support claims that a design or method makes reading or learning dramatically faster [@rayner2016much]. Grade C: an honesty rule drawn from the evidence.

*In LTF:* landing copy such as "Lesson 0.1 takes five minutes" states an estimate, which is fine; avoid phrases like "learn twice as fast" or "speed through ground school".
:::

### Measure understanding, not only speed

Speed alone can mislead. In the line-length studies, comprehension was often measured only to check for a trade-off, yet the one study with a demanding comprehension test found a difference speed did not show [@dyson2004physical]. Wallace and colleagues found comprehension flat while speed varied [@wallace2022towards]. And faster reading with lower understanding is the speed-reading failure itself [@rayner2016much]. Rello and colleagues deliberately measured fixation duration and comprehension rather than reading time, because speed was not their goal [@rello2016make].

::: {.rule #LEG-051 grade="B"}
**When testing any change to lesson typography or layout, measure comprehension (for example the lesson's own quiz) as well as reading time, and treat a speed gain with a comprehension loss as a failure.** Speed and comprehension trade off [@rayner2016much], and comprehension measures detected effects that speed did not [@dyson2004physical]. Grade B.

*In LTF:* the `QuizBlock` results for a lesson are a ready comprehension measure. A layout experiment compares first-attempt quiz accuracy as well as time on section.
:::

### What this means for Learn to Fly

LTF's design already respects how comprehension works: inline quizzes, ticked steps that stay visible, glossary chips, no reading timers. Keep all of it, and write it down as policy so it survives later features (LEG-046, LEG-047). The levers to pull are vocabulary and structure: define terms at first use and keep definitions reachable from quizzes and Fly mode (LEG-048), and set exact steps and values apart from prose so return visits can skim (LEG-049). Test with comprehension as well as speed (LEG-051), and keep marketing claims to clarity (LEG-050).

## Dyslexia, Age and Individual Differences

### Fonts designed for dyslexia

Two fonts marketed to readers with dyslexia have attracted wide attention: OpenDyslexic, a free font with letters weighted toward the bottom, whose developers claim this keeps letters from appearing to flip or swap, and Dyslexie, designed by Christian Boer in 2008. Both rest on the premise that dyslexia is mainly a visual problem of letter confusion or reversal. Wery and Diliberto point out that the premise is questionable, because dyslexia is widely understood as primarily phonological [@wery2017effect]. Four independent studies have now tested the fonts.

**Rello and Baeza-Yates (2013).** Forty-eight Spanish-speaking participants with a clinical diagnosis of dyslexia (ages 11 to 50, mean about 21) read 12 texts of 60 words, each in a different font, counterbalanced, while an eye tracker recorded them (46 recordings usable) [@rello2013good]. OpenDyslexic and OpenDyslexic Italic did not improve reading time or fixation duration, and were among the least preferred. The paper's abstract claims sans serif, monospaced and roman styles "significantly improved" reading, and recommends Helvetica, Courier, Arial, Verdana and Computer Modern Unicode. The data are weaker than that headline: font had a significant overall effect on reading time (chi-square(11) = 31.55, p < 0.001), but the only clear pairwise result was that Arial Italic was slower than Arial, Computer Modern Unicode and Helvetica. Serif versus sans and monospaced versus proportional did not significantly change reading time; the sans and mono claims rest on fixation durations (serif 0.26 s against 0.24 s; mono 0.22 s against 0.26 s), which are a proxy and are confounded with character width [@rello2013good]. The fonts were also not matched for x-height or spacing.

**Wery and Diliberto (2017).** Twelve children aged about 9 to 12 at a school for students with dyslexia read letters, real words and nonsense words in OpenDyslexic, Arial and Times New Roman, in a single-subject alternating design with sizes adjusted to match physical letter size [@wery2017effect]. The abstract reports "no improvement in reading rate or accuracy for individual students with dyslexia, as well as the group as a whole"; every effect-size comparison of OpenDyslexic with a standard font was negative, and no child preferred it. With 12 children and no comprehension measure, the safe reading is "no benefit, possibly worse" [@wery2017effect].

**Marinus and colleagues (2016).** Thirty-nine low-progress readers learning to read in English read four texts in four conditions matched for x-height [@marinus2016special]. They read 7 percent more words per minute in Dyslexie than in standard Arial, but when Arial's within-word and between-word spacing was matched to Dyslexie's, the difference was no longer significant. The authors concluded that the font's effect "is not due to its specially designed letter shapes" but to its spacing settings [@marinus2016special].

**Kuster and colleagues (2018).** The largest test: 170 Dutch children with dyslexia read a text in Arial and in Dyslexie a week or two apart, counterbalanced, and 102 children with dyslexia and 45 without read word lists in Dyslexie, Arial and Times New Roman [@kuster2018dyslexie]. Font had no significant effect on speed or accuracy in either experiment (per-card F from 0.04 to 0.85 in the second). Reading got faster on the second session regardless of font (F(1,167) = 33.86), a practice effect. More children preferred Arial; in the word-list study overall preferences were Arial 38.1 percent, Times New Roman 29.9 and Dyslexie 11.6, and preference was unrelated to performance. The abstract's conclusion: "the Dyslexie font neither benefits nor impedes the reading process of children with and without dyslexia" [@kuster2018dyslexie]. The authors note limits: null results, spacing not matched separately as in Marinus, a Dutch sample in a more transparent orthography than English.

::: myth
**"Special dyslexia fonts such as OpenDyslexic and Dyslexie help readers with dyslexia."** Controlled tests found no benefit from OpenDyslexic in adolescents and adults [@rello2013good] or children [@wery2017effect], and no benefit from Dyslexie in 170 children [@kuster2018dyslexie]. The one positive result, a 7 percent speed gain, vanished when Arial's spacing was matched to Dyslexie's, showing that spacing, not letter shape, was responsible [@marinus2016special].
:::

::: {.rule #LEG-052 grade="A"}
**Do not ship, offer or advertise a dyslexia-specific font.** Four independent studies, in three languages and across children and adults, found no benefit from OpenDyslexic or Dyslexie letter shapes, and the only positive effect was explained by spacing [@rello2013good; @wery2017effect; @kuster2018dyslexie; @marinus2016special].

*In LTF:* no "dyslexia font" toggle in `/account` Preferences or anywhere else, and no claim in copy that LTF is "dyslexia-friendly" because of a typeface.
:::

### What might help: spacing and size under the reader's control

The positive thread running through these studies is spacing. Marinus's matched-spacing result [@marinus2016special], the crowding evidence that spacing sets the limit on recognition [@pelli2008uncrowded], and Arditi and Cho's strong spacing effect on thresholds [@arditi2005serifs] point the same way. The evidence on extra letter spacing for struggling readers is nonetheless mixed, with some studies finding benefits and one finding none (though reduced spacing hurt fluency) [@kuster2018dyslexie], and very wide spacing does not enlarge the visual span [@legge2011print]. Pelli and Tillman also report that readers with dyslexia read at less than half their span-predicted speed [@pelli2008uncrowded], which suggests that spacing addresses only part of what makes reading hard for them. Size is the other robust lever, with larger text helping readers in general [@rello2016make; @legge2011print].

Wallace and colleagues' argument that "one font does not fit all" [@wallace2022towards] supports personalization, but their own population-level null, and the upper-bound problem with best-minus-worst comparisons, mean the font family itself is the weakest of the levers. Wery and Diliberto suggest that support for decoding (sound, plain words, help with long terms) is a better use of effort for readers who struggle than a change of font [@wery2017effect].

::: {.rule #LEG-053 grade="B"}
**Offer a reading-comfort setting with text size, line spacing, and letter-plus-word spacing as its controls, applied to lessons, reference pages and Fly mode.** Spacing explained the only positive dyslexia-font result [@marinus2016special], spacing limits recognition through crowding [@pelli2008uncrowded], and larger sizes improve reading [@rello2016make]. Evidence for extra spacing is mixed [@kuster2018dyslexie], so the controls are modest and optional, with two or three steps each. Grade B.

*In LTF:* add a "Reading" group beside the `ThemeToggle` in `/account` Preferences (and in a small menu on `FlyModePage`), stored like `ltf-theme`, that scales the `body-*` utilities and the spacing of `MarkdownContent` and `FlyPanel`. Because measures are in `ch` (LEG-036), the line length adapts.
:::

::: {.rule #LEG-054 grade="C"}
**Describe reading settings as comfort options, never as clinical aids.** The evidence shows preference does not predict performance [@kuster2018dyslexie; @wallace2022towards] and that benefits for specific groups are unproven [@marinus2016special; @kuster2018dyslexie]. Claiming a benefit LTF has not measured would repeat the dyslexia-font mistake. Grade C.

*In LTF:* the setting's label is "Reading comfort" or "Text size and spacing", with a plain description of what each control does.
:::

::: {.rule #LEG-055 grade="B"}
**If a choice of font family is ever offered, make it secondary to size and spacing, and offer only conventional, well-made faces.** No font was reliably faster across a large adult sample, and individual best-font gains are inflated by noise [@wallace2022towards]; special letter shapes did not help [@kuster2018dyslexie; @wery2017effect]. Grade B.

*In LTF:* the default is the product face; an alternative, if added, is one conventional serif or sans with distinct characters (LEG-022), not a novelty font.
:::

::: {.rule #LEG-056 grade="C"}
**Support decoding of aviation vocabulary directly: give pronunciations for difficult terms, break long call signs and codes into readable groups, and keep definitions in plain words.** Dyslexia is primarily a phonological difficulty, so visual changes to letters miss the main problem [@wery2017effect]; vocabulary is the main lever on reading [@rayner2016much]. Grade C: a reasoned recommendation without a direct test in this context.

*In LTF:* glossary entries in `glossary.ts` can carry a pronunciation hint for difficult terms, and examples of codes and call signs group their characters with spaces. Verify every aviation term and phrase against the content sources before adding it.
:::

### Individual differences in testing

Every study in this Part found large differences between readers, and several found practice effects as large as the effects being tested. In Kuster's study, reading speeded up on the second session regardless of font [@kuster2018dyslexie]; in Wery and Diliberto's, all lines trended upward over sessions [@wery2017effect]; in Wallace's, the second screen of text was read 39 words per minute faster than the first [@wallace2022towards]. Comparisons of faces at different x-heights or spacings measure the size or spacing, not the face [@marinus2016special; @legge2011print]. Finished typefaces differ in many ways at once, which is why Beier and Larson varied one letter at a time within a font [@beier2010design]. And Tinker's standard, a century old, still holds: measure reading of meaningful text with comprehension checked, on enough readers [@tinker1963legibility].

::: {.rule #LEG-057 grade="B"}
**Run any LTF reading test with counterbalanced order, a repeated condition, matched x-height and spacing, a comprehension check, and as many learners as can be recruited, including older ones.** Practice effects rival the effects tested [@kuster2018dyslexie; @wallace2022towards; @wery2017effect]; unmatched size or spacing masquerades as a font effect [@marinus2016special]; comprehension can diverge from speed [@dyson2004physical]; and legibility should be judged on meaningful text with comprehension checked [@tinker1963legibility]. Grade B: methodological consensus from several studies.

*In LTF:* a reading test can be built on existing lessons: two variants of one lesson section, each learner reading both in counterbalanced order, timed per section, with the section's `QuizBlock` as the comprehension check. Vary one thing at a time (size, measure or face), as in Beier and Larson's within-font design [@beier2010design].
:::

::: {.rule #LEG-058 grade="C"}
**Do not report the gap between each reader's best and worst condition as the effect of a design change.** Taking each person's fastest and slowest of several noisy measurements produces a gap even when the conditions do nothing, so such a figure is an upper bound [@wallace2022towards]. A retest of each reader's best condition is needed to estimate a real effect. Grade C: a statistical argument applied to one study's reporting, not a published finding.

*In LTF:* internal reports of a type or layout test give the average difference between conditions with its uncertainty, not "learners read up to 35 percent faster in their best version".
:::

### What this means for Learn to Fly

The evidence closes one door and opens another. Do not add a dyslexia font (LEG-052). Do add a modest reading-comfort setting for size, line spacing and letter and word spacing that reaches lessons, reference and Fly mode, described as a comfort option (LEG-053, LEG-054), and keep any font choice secondary (LEG-055). Support decoding with pronunciations, grouped codes and plain definitions (LEG-056), checking every aviation term against the sources. And when the team tests a type or layout change, design the test so practice, size and spacing cannot fake a result (LEG-057, LEG-058); the `QuizBlock` gives every lesson a ready comprehension check.

## Decision list and review checklist

### Decisions this Part settles for Learn to Fly

The decisions below follow from the rules above. Each names what to keep, change or build, and the rules that justify it.

**Lesson reading surface**

1. Lesson body text moves from the inherited 16/26 to `body-lg` (18/29) in `MarkdownContent`, `Callout` bodies and `QuizBlock` explanations, matching `Prose` (LEG-019).
2. Lesson paragraphs, lists and Callouts are capped at `max-w-measure` (68ch); widgets, tables and images keep the 800 px column (LEG-035, LEG-036).
3. Line heights stay in the 1.3 to 1.7 band; `text-sm leading-5` is not used for paragraphs (LEG-037).
4. Lesson text stays single-column and ragged right (LEG-004, LEG-038).
5. Sentences are written for one forward pass, with terms defined at first use and glossary `Popover`s reachable from quizzes and Fly mode (LEG-002, LEG-048).
6. Every lesson is structured for return visits: objectives, descriptive headings, steps and values set apart from prose (LEG-049).

**Words and names**

7. One canonical name per thing, taken from `glossary.ts`, used in lessons, widgets, reference and Fly mode (LEG-006).
8. Headings, `SectionNav` items, tab labels and checklist rows put the distinguishing word first (LEG-003).
9. Safety-critical negations are not carried by a short word alone; bold is used for the one critical word (LEG-005, LEG-032).
10. Lesson checklists shown for learning carry a reason or sequence cue; reference and Fly mode checklists keep the bare verified wording (LEG-007).

**Case, style and emphasis**

11. No running text in capitals; capitals only for labels of one to three words, with tracking (LEG-010, LEG-011).
12. No italic for instructions, warnings or radio calls; the traffic-pattern widget's italic radio calls become roman; Markdown emphasis uses bold (LEG-031).
13. Emphasis inside running text is bold only; status is a word plus icon, never color alone (LEG-033).
14. No element combines two of: small size, light weight, italic, reversal, low contrast, tight spacing (LEG-034).

**Size, distance and spacing**

15. Each reading surface has a stated design distance; rendered x-height is checked against the 0.2-degree floor and the 0.24-degree target (LEG-017, LEG-018).
16. Fly mode, fullscreen checklists and the kneeboard are sized for their greater distance and read in a short measure of large type, one item per row (LEG-016, LEG-020, LEG-040).
17. Negative tracking only on `display-*` and `heading-lg`; never on body, label, readout or widget text (LEG-013).
18. Small widget labels buy legibility back with spacing and full contrast; numerals get clearance from ticks, arcs and needles (LEG-012, LEG-015).
19. Type comparisons and fallback fonts are matched at x-height, not `font-size` (LEG-021).

**Faces and characters**

20. The Instrument Sans plus JetBrains Mono division stays; it is kept or changed for brand and character reasons, not for a serif-or-sans legibility claim (LEG-028, LEG-029).
21. Both faces get a recorded confusion-pair test at the smallest sizes in both themes; a, l, I and 1 forms are confirmed (LEG-022, LEG-024, LEG-027).
22. Codes and numbers use mono with tabular lining figures and a zero distinct from O (LEG-026).
23. No condensed face for small text, and no unusual letterforms in procedure text (LEG-023, LEG-025).

**Contrast and themes**

24. Text token pairs are tested against 4.5:1 in CI for both themes; Night `ink-3` on `accent-tint` is forbidden or the tokens adjusted (LEG-041).
25. Action-bearing text uses `ink` or `ink-2`, not `ink-3` (LEG-042).
26. Night and Fly mode reading text is `text-sm` or larger, weight 400 or heavier, `ink` or `ink-2` (LEG-043).
27. Fly mode stays dark by default with no large bright areas (LEG-044).
28. Floors are set for readers over 50 (LEG-045).

**Features**

29. No speed-reading, word-at-a-time, auto-scrolling or reading-timer features (LEG-008, LEG-046).
30. Text being acted on stays visible: inline quizzes, persistent ticked steps, the Brief reachable from the Fly tab (LEG-039, LEG-047).
31. No dyslexia font; a "Reading comfort" setting for size, line spacing and letter and word spacing is built for lessons, reference and Fly mode, described as a comfort option; any font choice is secondary (LEG-052, LEG-053, LEG-054, LEG-055).
32. Decoding support for aviation vocabulary (pronunciation hints, grouped codes, plain definitions), with every term checked against the content sources (LEG-056).
33. Marketing copy promises clarity, not speed (LEG-050).

**Evidence and testing**

34. Type and layout decisions cite the study or test behind them, and word-shape arguments are not accepted (LEG-001, LEG-009).
35. Type choices are not made by preference poll (LEG-030).
36. Reading tests counterbalance order, repeat a condition, match x-height and spacing, check comprehension with the lesson's `QuizBlock`, include older learners, and report average differences rather than best-minus-worst gaps (LEG-051, LEG-057, LEG-058).

### Review checklist

Run these questions against a pull request or a page. A "no" to any question is a finding, with the rule ID as its reference.

**Text and words**

- Can each lesson sentence be understood in one pass, with new terms defined where they first appear? (LEG-002, LEG-048)
- Is each instrument, control and procedure called by its one glossary name, the same in the lesson, the widget title, the reference page and Fly mode? (LEG-006)
- Does every heading, nav item, tab, list row and checklist row start with the word that distinguishes it? (LEG-003)
- Is any safety-critical negation carried only by a short word such as "not" or "no"? (LEG-005)
- Do learning checklists give a reason or order, and do reference and Fly mode checklists keep the verified wording? (LEG-007)
- Is any reading timed, auto-advanced or shown one word or line at a time? (LEG-008, LEG-039, LEG-046)
- Does the copy promise faster reading or learning? (LEG-050)

**Case, style and emphasis**

- Is any sentence, instruction or warning set in all capitals, or any capital label longer than three words or untracked? (LEG-010, LEG-011)
- Is any instruction, warning, procedure or radio call set in italic? (LEG-031)
- Is emphasis in running text limited to bold, and does every status carry a word, not color alone? (LEG-032, LEG-033)
- Does any element combine two or more of small size, light weight, italic, reversal, low contrast and tight spacing? (LEG-034)

**Size, measure and spacing**

- Is lesson body text at `body-lg` or larger? (LEG-019)
- Is the rendered x-height of every text a learner must read at or above 0.2 degrees at the surface's design distance, with running text near 0.24 degrees? (LEG-017, LEG-018)
- Are Fly mode and other glance surfaces sized for their distance and set one item per row with wide gaps? (LEG-016, LEG-020, LEG-040)
- Is lesson prose between about 45 and 75 characters per line, and is the measure specified in `ch`? (LEG-035, LEG-036)
- Is running text line height between about 1.3 and 1.7? (LEG-037)
- Is running text in a single column and ragged right, with word spaces intact? (LEG-004, LEG-038)
- Is negative tracking used below display sizes, or is small text tight? (LEG-013, LEG-014)
- Do widget numerals and labels have clearance from ticks, arcs and needles, and do small labels compensate with spacing and contrast? (LEG-012, LEG-015)

**Faces and characters**

- Does the change justify a face, case or spacing decision by word shape, or by a serif-or-sans legibility claim? (LEG-009, LEG-028)
- Has a new or changed face been tested for 0/O, 1/l/I, 5/S, 8/B, 2/Z and rn/m at the smallest size in both themes, and checked in words and readouts? (LEG-022, LEG-024, LEG-027)
- Are codes, frequencies, speeds and scores in mono with tabular lining figures and a distinct zero? (LEG-026)
- Is a condensed face or an unusual letterform used for small or procedural text? (LEG-023, LEG-025)
- Were faces compared at matched x-height? (LEG-021)
- Is a typeface change being proposed to fix a problem that size, measure, spacing or contrast would fix? (LEG-029)

**Contrast and themes**

- Does every text and ground pair reach 4.5:1 (3:1 for large text) in Day and Night, computed on final colors? (LEG-041)
- Is any text a learner must act on set in `ink-3`? (LEG-042)
- In Night and Fly mode, is any reading text below `text-sm`, below weight 400, or in `ink-3`? (LEG-043)
- Does Fly mode contain a large bright area? (LEG-044)
- Were floors chosen with readers over 50 in mind? (LEG-045)

**Features and settings**

- Does the text a learner is answering or acting on stay visible and re-readable? (LEG-047)
- Are exact steps and values set apart from prose for return visits? (LEG-049)
- Does the change add or advertise a dyslexia font, or describe a reading setting as a clinical aid? (LEG-052, LEG-054)
- Do reading settings change size and spacing first, with any font choice secondary? (LEG-053, LEG-055)
- Are difficult terms and codes given decoding support, checked against the sources? (LEG-056)

**Evidence and testing**

- Does every claim that a change "reads better" cite a study or an LTF test? (LEG-001)
- Was any type decision made by preference vote? (LEG-030)
- Did any reading test counterbalance order, repeat a condition, match x-height and spacing, include older learners and check comprehension, and does its report give average differences rather than best-minus-worst gaps? (LEG-051, LEG-057, LEG-058)
