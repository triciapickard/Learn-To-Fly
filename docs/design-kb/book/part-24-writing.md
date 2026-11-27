# Writing and Microcopy

This Part is about the words in Learn to Fly: lesson prose, headings, quiz stems and feedback, challenge briefs, Fly mode steps, button and link labels, error and empty states, banners and page titles. Words are the part of an interface that a reader cannot skip and that a designer most often leaves to the last minute. They also carry most of what a beginner learns from the product, because a lesson is mostly text and a challenge is mostly instructions. The Part draws on four bodies of work: usability studies of how people read on screens (Nielsen, Morkes, Krug), the plain language tradition and the evidence collected for it (Orwell, Gowers, Strunk and White, the U.S. Plain Writing Act and Federal Plain Language Guidelines, GOV.UK, Kimble), the research on readability formulas and its critics (Flesch, Kincaid, DuBay, Redish), and the experimental work on messages and instructions for novice computer users (Shneiderman, Carroll and the Minimal Manual). Practitioner sources on interface writing (Podmajersky), cognitive accessibility (the W3C note on cognitive and learning disabilities) and inclusive language (Microsoft) fill in the smallest scale.

The evidence is thinner than the confidence with which writing advice is usually given. A handful of controlled studies exist, most of them small, old or run by people who also sell the conclusion; the rest is craft authority and government standards. Where studies exist they point the same way (shorter, more specific, better organized, less promotional text helps), but they rarely isolate which change did the work, and almost none were run on instructional material for adults learning a physical skill. The grades say so. Use each rule as a default that a test with real beginners can overturn, and read its "In LTF" paragraph as a concrete proposal for a named component or content file. Aviation wording (checklist items, radio calls, limits) is outside this Part's authority: where a rule here would change such wording, the source wins, and the project's rule that every aviation fact needs a source applies.

## How people read interface and lesson text

### Scanning is the default when the reader has a task

The oldest controlled evidence on writing for screens is a set of three studies that John Morkes and Jakob Nielsen ran for Sun Microsystems in 1997 [@morkes1997concise]. The first two were exploratory. In the second, 19 experienced web users thought aloud while visiting preselected sites, and most of them (15) scanned a page before reading any of it; they said they preferred concise, simple, informal writing, summaries and the inverted pyramid [@morkes1997concise]. Nielsen's companion summary for practitioners put the headline in two numbers: 79 percent of test users always scanned any new page, and 16 percent read word by word [@nielsen1997how]. The summary does not describe the sample behind those two figures, and screens, habits and typography have changed since, so they are best read as a vivid statement of a pattern rather than a current estimate.

The third study was the measurement. Fifty-one experienced web users, with web professionals, writers and programmers excluded, used one of five versions of a seven-page site about Nebraska, chosen to limit prior knowledge [@morkes1997concise]. All versions had the same structure and essentially the same information. The control was written in promotional "marketese"; the others were concise (about half the words), scannable (bulleted lists, bold keywords, captions, shorter sections, more headings), objective (no exaggeration), and all three combined. Mean task time fell from 359 seconds for the control to 149 for the combined version, and mean task errors from 0.82 to 0.10. Satisfaction on a 1 to 10 scale rose from 5.7 to 7.0 for the combined version and was highest, 7.4, for the scannable one. Normalized against the control at 100, overall usability was 158 for concise, 147 for scannable, 127 for objective and 224 for combined [@morkes1997concise].

Those are large numbers from a small study. Each condition had about ten users, the report appeared in an industry venue without peer review, and the usability score is a composite that Nielsen built by normalizing and averaging measures of different kinds [@morkes1997concise]. Site-map accuracy did not differ between versions, and one hypothesis about memory was only partly confirmed. The "objective" version changed tone and content together, so the effect of tone alone cannot be separated. The tasks were fact-finding on a travel site. Read the study for direction and rough size: removing padding, adding structure and removing hype each helped, and together they helped most.

::: {.rule #WRT-001 grade="B"}
**Assume a reader with a task will scan first, and write so that scanning finds the point.** In Morkes and Nielsen's measurement study, a concise, scannable, objective rewrite of the same content roughly halved task time and cut errors sharply against a promotional control, and most exploratory participants scanned before reading [@morkes1997concise; @nielsen1997how]. The samples were small and the tasks were fact-finding, so treat the sizes as indicative. Scanning is a strategy a reader adopts when the text looks dense and a goal is pressing, not a fixed trait, and a learner may read closely the sentences they judge relevant.

*In LTF:* every page type has a scanning reader: the reference hub, the challenge Brief, the Fly tab and `FlyModePage` almost always; a `LessonPage` on second visits and when a learner returns from the sim to find one fact. Write those surfaces so the first words of each heading, step and paragraph carry the information.
:::

### The F is a symptom, not a layout

Nielsen's 2006 eyetracking report is the source of the most quoted picture of web reading. Across 232 users looking at thousands of pages, the dominant pattern resembled the letter F: a horizontal read across the top of the content, a shorter horizontal read lower down, then a vertical scan down the left edge, sometimes slow and systematic and sometimes fast and spotty [@nielsen2006f]. Variants looked like an E or an inverted L. On a product page the second bar sat lower because of an image; on search results the second bar was longer because the headline was. Nielsen drew three implications: users will not read word by word, the first two paragraphs must carry the most important information, and headings, paragraphs and bullets should start with information-carrying words, because readers see the first two words of a line much more than the third [@nielsen2006f].

The same group later published a follow-up whose title calls the pattern misunderstood. Kara Pernice describes F-shaped reading as a default that appears when nothing guides the eye: when text is unformatted, readers want to be efficient, and they are not committed to the content. It persists on phones, mirrors for right-to-left languages, is rarely a perfect F, and is "a bad sign" because readers skip important content [@nielsen2006f]. Its remedies are structural: key points in the first two paragraphs, visible headings that start with the most informative words, grouping, bold key phrases, descriptive link text, bullets and numbers, and cutting what is not needed.

The data set is large, but it is an industry report; the pages read do not say how pages and tasks were sampled, and it studied general web pages, not learning materials [@nielsen2006f]. Its value for a lesson page is as a diagnostic. If learners read a lesson in an F, the writing has given them no cues to do anything better.

::: myth
**"The F-pattern is how people read, so lay pages out in an F."** The pattern is what readers fall back on when a page offers no structure and they are not committed to it. The group that reported it later framed it as a failure state that headings, grouping and front-loaded wording counteract, not as a template to design toward [@nielsen2006f].
:::

::: {.rule #WRT-002 grade="B"}
**Start every heading, list item, step and paragraph with the words that carry its information.** Eyetracking of 232 users found readers see the first two words of a line much more than the third and scan down the left edge of text blocks [@nielsen2006f]. Nielsen's guidelines ask for one idea per paragraph stated in its opening words and for meaningful rather than clever subheadings [@nielsen1997how]. The evidence is industry eyetracking on general web pages, so the effect on lessons is an inference.

*In LTF:* the lesson L0.1 headings already front-load ("How the course is organized", "How a challenge works", "What you need"). Apply the same test to quiz stems, `Callout` first sentences and challenge criteria labels: cover everything after the second word and ask whether the reader can still tell items apart.
:::

### Billboards, satisficing and muddling through

Steve Krug's craft book reaches the same place from consulting observation. Its second chapter names three "facts of life": people scan rather than read, satisfice (take the first reasonable option) rather than optimize, and muddle through rather than work out how things work; its third chapter is subtitled "Designing for scanning, not reading" [@krug2014dont]. If readers treat pages like billboards seen at speed, Krug argues, design good billboards: clear visual hierarchy, conventions, and clearly defined areas [@krug2014dont]. The book is expert opinion, and its answer to uncertainty is to test with a few users. It fits the experimental findings, but it was written for web sites where people want to finish and leave, not for learning, where the goal is understanding.

Satisficing matters for wording more than it first appears. A beginner who takes the first plausible option will act on the first label that seems to fit. That makes ambiguity costly: two buttons whose labels could both mean "go on" will be chosen between by position, not meaning. It also makes defaults a writing problem, because the label on the default action is the one most people will act on without reading the alternatives.

::: {.rule #WRT-003 grade="C"}
**Write every label so that the first plausible reading is the right one.** Krug's observation that users satisfice and muddle through implies that a label will be acted on as soon as it seems to fit, without comparison [@krug2014dont]. This is expert observation rather than experiment, but it agrees with the scanning studies [@morkes1997concise].

*In LTF:* the Brief's "I'm set up, start flying" and the Fly panel's "Finish and debrief" are good: each says what pressing does. Check pairs that sit together, such as "Mark lesson complete" and "Not now" in the completion panel, by asking what a learner who reads only one of them would do.
:::

### Scanning is not the only mode, and learning needs the other one

The scanning evidence was gathered on fact-finding tasks. A learner reading a lesson about why the airplane behaves as it does is not hunting for one fact; they need the reasoning, and reasoning lives in connected sentences. Several of the sources make the limit explicit. The Morkes and Nielsen tasks were finding facts on a travel site [@morkes1997concise]. Krug writes for sites people want to leave [@krug2014dont]. Nielsen's own guidance says to write half the words or less, which is advice for pages whose reader wants an answer [@nielsen1997how]. None of it tests explanatory writing for learners.

That leaves a practical division. On surfaces where the reader is looking something up or acting (reference pages, the Brief, the Fly tab, buttons, errors), the scanning rules apply in full. In explanatory lesson sections the same rules shape the entry points (headings, first sentences, key terms) while the body can be continuous prose that a committed reader follows. The test is not length but whether every sentence earns its place, which later chapters on structure and plain language take up.

A second limit is that scanning patterns describe where eyes go, not what readers understand. A reader who fixates the first words of each line may still read closely the paragraph they judge relevant. For a safety point, that cuts both ways: front-loading makes the point findable, and breaking it into skimmable fragments may make it easy to skip. Where LTF needs deliberate reading, the format should slow the reader down rather than speed them up.

::: {.rule #WRT-004 grade="C"}
**Use scanning formats for lookup and action, and continuous prose for explanation.** The scanning studies measured fact-finding, not learning [@morkes1997concise; @nielsen1997how], and none tested explanatory writing for learners. Explanations of cause and effect need connected sentences; lookup and procedure need lists, tables and steps. This is an inference from the limits of the evidence, graded as expert judgment.

*In LTF:* lesson sections that explain a concept stay as short paragraphs under a front-loaded heading, with the key term bolded once; the same lesson's procedure, settings and numbers go in lists, tables and `{{vspeed.*}}` tokens. `FlyPanel` steps and the Brief's "Sim setup" `dl` are lookup formats and should stay that way.
:::

::: {.rule #WRT-005 grade="C"}
**Do not format a warning as a skimmable fragment.** Front-loading makes a point findable, but scanning readers skip what looks like routine list content, and the F-pattern follow-up describes skipped content as the failure the pattern signals [@nielsen2006f]. A warning that must be read should be a full sentence with its consequence, set apart by position and component rather than by being one more bullet.

*In LTF:* safety content goes in a `Callout` of type `safety`, as one or two full sentences that state the consequence, not as a bullet inside a step list. In Fly mode, the random-event alert (`border-4 border-warn`) carries one sentence and one action.
:::

### Credibility is read before content

Nielsen's guidelines end with credibility: readers look for signs that a page can be trusted, and promotional language lowers it [@nielsen1997how]. The objective condition in the measurement study, which removed exaggeration, raised usability on its own [@morkes1997concise]. For a product that teaches an activity where a wrong belief has consequences, credibility is not a brand nicety. A learner who decides in the first paragraph that the author is selling rather than teaching will read the rest with less trust, and the evidence on fluency and long words in the chapter on words and sentences suggests that how a sentence is written, not only what it claims, feeds that judgment.

::: {.rule #WRT-006 grade="B"}
**Cut promotional exaggeration from every surface a learner reads to learn.** Removing marketese alone raised measured usability against a promotional control, and practitioners report that hype lowers credibility [@morkes1997concise; @nielsen1997how]. The effect of tone could not be separated from content changes in that study, so the size is uncertain.

*In LTF:* the landing h1 "Yes, you can fly a plane." is a brand moment and can stay. Inside `LessonPage`, challenge Briefs, quiz feedback and `FlyModePage`, replace encouragement such as "you'll be flying in no time" with a plain statement of what the learner will do next.
:::

### What this means for Learn to Fly

LTF's surfaces divide cleanly by reading mode. The reference hub (`ReferenceHubPage`, `SpeedsPage`, the POH-style `ReferenceSections`), the challenge Brief tab, the Fly tab and `FlyModePage`, the `Header` nav, every `Button` and every `ErrorState`, `EmptyState` and `Toast` are read by a scanner with a task. Lessons are read in both modes: closely on the first pass at a desk, by scanning when the learner returns from the sim to find one thing. That means the scanning rules apply to lesson entry points (headings, first sentences, the objectives `Card`, the `SectionNav` labels) while explanatory paragraphs keep their reasoning.

Keep the front-loaded lesson headings of L0.1 as the model, and add a review step that covers everything after the second word of each heading, step, criterion label and quiz option (WRT-002). Keep the challenge procedure pattern in which each step starts with the control's name and then gives the action ("Fuel selector. Set it to …"): in a cockpit the first job of the eye is to find the control, so the name is the information-carrying word there, and the imperative follows. Build a habit, not a component: when a sentence's job is a warning, it moves into a `safety` `Callout` as a full sentence (WRT-005). And keep hype out of anything below the landing hero (WRT-006); the product's honesty traits (the beta banner, "Draft · unverified", "not a pilot certificate") already do the credibility work that marketing copy would undo.

