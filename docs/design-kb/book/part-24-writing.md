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
**"The F-pattern is how people read, so lay pages out in an F."** The pattern is what readers fall back on when a page offers no structure and they are not committed to it. The group that reported it later framed it as a failure state that headings, grouping and front-loaded wording counteract, not as a template to design toward [@nielsen2006f]. The full case, with the studies, is made in Part VII, Perception and Attention, and is not repeated here.
:::

::: {.rule #WRT-002 grade="B"}
**Start every heading, list item, step and paragraph with the words that carry its information.** Eyetracking of 232 users found readers see the first two words of a line much more than the third and scan down the left edge of text blocks [@nielsen2006f]. Nielsen's guidelines ask for one idea per paragraph stated in its opening words and for meaningful rather than clever subheadings [@nielsen1997how]. The evidence is industry eyetracking on general web pages, so the effect on lessons is an inference.

*In LTF:* the lesson L0.1 headings already front-load ("How the course is organized", "How a challenge works", "What you need"). Apply the same test to quiz stems, `Callout` first sentences and challenge criteria labels: cover everything after the second word and ask whether the reader can still tell items apart.
:::

### Billboards, satisficing and muddling through

Steve Krug's craft book reaches the same place from consulting observation. Its second chapter names three "facts of life": people scan rather than read, satisfice (take the first reasonable option) rather than optimize, and muddle through rather than work out how things work; its third chapter is subtitled "Designing for scanning, not reading" [@krug2014dont]. If readers treat pages like billboards seen at speed, Krug argues, design good billboards: clear visual hierarchy, conventions, and clearly defined areas [@krug2014dont]. The book is expert opinion, and its answer to uncertainty is to test with a few users. It fits the experimental findings, but it was written for websites where people want to finish and leave, not for learning, where the goal is understanding.

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

*In LTF:* safety content goes in a `Callout` of type `safety`, as one or two full sentences that state the consequence, not as a bullet inside a step list. In Fly mode, the random-event alert (`border-4 border-warn`) should carry one sentence and one action.
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

## Plain language: what it is and what it buys

### A definition that names outcomes, not scores

The clearest short definition of plain writing in American law is in the Plain Writing Act of 2010, which requires federal agencies to use it in documents people need to obtain a benefit or service, file taxes or comply with a requirement. Plain writing, in the Act's definition, is writing that is clear, concise, well-organized, and follows other best practices appropriate to the subject or field and intended audience [@uscongress2010plain]. Its purpose section speaks of communication the public can understand and use. The Act sets up officials, training and a plain writing page for each agency, and by design creates no enforceable rights and is not subject to judicial review [@uscongress2010plain]. LTF is not covered by it, but the definition is a usable test.

Two features of the definition matter for a design rule. First, it is about outcomes for a reader, not about a measurable property of text: nothing in it can be checked by counting syllables, which agrees with the research view, taken up in the chapter on testing, that no single score captures clarity [@uscongress2010plain]. Second, it names the subject and the audience. Plain writing about aviation for beginners is not the same as plain writing about tax for the general public, and the definition leaves room for necessary technical vocabulary.

The federal government's implementation guidance repeats the point that comes first in every plain language source: write for your audience. It says plain language does not mean dumbing down, advises shorter words, short sections, active voice and present tense, and gives the example "Not 'It must be done,' but 'You must do it.'" [@uscongress2010plain]. Its testing page says "Plan to test at least twice" [@uscongress2010plain].

::: {.rule #WRT-007 grade="C"}
**Judge every learner-facing text by one question: is it clear, concise, well organized and right for a beginner learning this subject?** The Plain Writing Act defines plain writing in these terms, by outcome and audience rather than by any score [@uscongress2010plain]. It is a legal definition, not a finding, and is graded as a standard.

*In LTF:* put this sentence at the top of the content style guide in `content/README.md` and in the content checklist used by `/ltf-review`. It is the question a reviewer asks of a lesson section, a quiz stem, a `Callout` or a `Toast` before any narrower rule.
:::

### The handbook rules and where they come from

The Federal Plain Language Guidelines, written and revised by a community of federal employees since the mid-1990s, are the most specific American standard of practice [@plain2011federal]. They organize the work into five topics: think about your audience, organize, write (words, sentences, paragraphs and other aids), write for the web, and test. Their first rule is to write for the audience, in language it knows and is comfortable with, taking its current knowledge into account. They call it a myth that plain language means dumbing down, and say to write for an eighth grade class only if the audience is one [@plain2011federal].

The word-level and sentence-level rules are the ones most often copied into product style guides: active voice; the simplest form of a verb; no hidden verbs (nominalizations); "must" for requirements instead of "shall"; contractions where they sound natural; "you" to speak directly to readers; few abbreviations; short simple words; no unnecessary words; the same term for the same thing throughout; no legal, foreign or technical jargon; no slashes; short sentences with one idea each; subject, verb and object close together; no double negatives; and the main idea before exceptions and conditions [@plain2011federal]. On pronouns the guidelines say: "More than any other single technique, using 'you' pulls users into your document and makes it relevant to them" [@plain2011federal].

The evidence behind each rule is uneven. Each section ends with a source list, and most sources are legal-writing authorities; for contractions the text cites one reading study [@plain2011federal]. Treat the guidelines as a consensus of experienced practitioners, which is how they present themselves.

GOV.UK's content guidance is the most developed standard for a large transactional site. It makes plain English mandatory across the whole site so that content is accessible and understandable to everyone who needs it, and says its rules come from research into how people read online and use GOV.UK [@govuk2026writing]. Specialist terms are allowed but explained the first time. It prefers short familiar words ("buy" for "purchase", "help" for "assist", "about" for "approximately"), notes that words ending in "-ion" or "-ment" tend to lengthen sentences, and asks writers to use the words users know and search for [@govuk2026writing]. The underlying studies are not listed on the pages, and its limits on paragraph and sentence length are house rules.

### Specialists want it too

The most common objection to plain language in a technical subject is that experts need the technical register. GOV.UK states the opposite as a finding: it cites research on legal language in which 80 percent of people preferred sentences in clear English, with the preference growing as the issue became more complex, and says more educated and more specialist readers prefer plain English more [@govuk2026writing]. The page does not identify the study, so the figure cannot be audited from it.

Kimble's column for the Michigan Bar Journal summarizes four studies with numbers [@kimble2016proof]. In his own survey, an original and a revised appellate opinion went to 700 randomly selected Michigan lawyers. The revision opened with a summary of the facts, the issue and the answer, used short sections with informative headings and topic sentences, cut average sentence length from 25 words to 19, and dropped unnecessary cases and detail. Of 251 who responded, 153 (61 percent) preferred the revision, rating it 7 against 6 on a 1 to 10 scale; the top reasons were less unnecessary detail and a summary at the start. In Flammer's survey, judges preferred a plain version 66 percent to 34 percent, with no differences by court level, jurisdiction, setting, gender or experience [@kimble2016proof].

Two studies measured comprehension. In Mindlin's 2005 California study, 60 volunteers answered ten questions about court forms; accuracy was 81 percent on a plain proof of service against 61 percent on the original, and 95 percent against 65 percent on a plain subpoena [@kimble2016proof]. A Document Design Center test of the FCC's marine radio rules for recreational boats found readers of the old rules answered 10.66 of 20 questions correctly and readers of the rewrite 16.85, with mean response time falling from 2.97 to 1.62 minutes and difficulty ratings from 4.59 to 1.88 on a 5-point scale [@kimble2016proof]. Kimble notes that the hardest principle in that revision was restraint: "select only the content that the audience needs."

These are four studies chosen by an advocate from a collection of 50, so the column cannot show how many of the others were weaker or null [@kimble2016proof]. Two measure preference rather than understanding. In every case plain wording was bundled with summaries, headings, lists and cuts, so the gains cannot be credited to word choice. That bundling is the most useful lesson. DuBay's review describes the Duffy and Kabance experiments, in which simplifying only words and sentences in Navy training passages gave inconsistent results (no significant gain in three experiments, and a 13 percent gain for low-ability readers in the fourth) [@dubay2004principles]. Put together, the evidence says the large gains come from structure and selection, not from synonym swaps.

::: {.rule #WRT-008 grade="B"}
**Get clarity from structure and selection first, and from word choice second.** In the plain language studies Kimble reports, large gains in accuracy and speed came from revisions that added summaries and headings and removed content the audience did not need [@kimble2016proof], while simplifying only words and sentences gave inconsistent results in Navy experiments [@dubay2004principles]. The studies are few and selected by an advocate, and the changes were bundled.

*In LTF:* when a lesson section fails review, restructure before rewording: move the point to the first sentence, split mixed topics, and move rare exceptions to a reference page. A pass that only swaps long words for short ones is not a rewrite.
:::

::: {.rule #WRT-009 grade="B"}
**Write plainly for experts as well as beginners; plainness is not simplification.** Practitioners and specialists preferred plain versions in Kimble's surveys, and GOV.UK reports that more specialist readers prefer plain English more [@kimble2016proof; @govuk2026writing]. The federal guidelines call "dumbing down" a myth [@plain2011federal]. Preference studies do not show comprehension, but the comprehension studies point the same way.

*In LTF:* the same plain style serves the beginner in L0.1 and the returning simmer reading `SpeedsPage`. Do not keep a denser "expert" register for reference pages or later modules; keep the technical terms and drop the padding around them.
:::

### Restraint: select only what the audience needs

The FCC revision's lesson, that the hardest principle is restraint, is the same lesson the Minimal Manual taught with experiments (see the chapter on instructions) and that Krug states as a slogan: get rid of half the words on each page, then half of what is left [@kimble2016proof; @krug2014dont]. The slogan is not evidence, and a fixed percentage is the wrong target for explanatory text, where cutting can remove the reasoning a beginner needs. The defensible version is selection: decide what this reader needs for this task, and move the rest to where a reader with a different task will find it.

For LTF, selection has a natural axis. The course teaches one airplane in one simulator. Rules for other aircraft, other editions or rare configurations belong in a clearly separate reference location or in a later module, not in the main line of a lesson. The FCC revision removed rules for other audiences and edge cases; LTF's decision to teach only the Skyhawk is the same kind of restraint at the scale of the curriculum [@kimble2016proof].

::: {.rule #WRT-010 grade="B"}
**Move exceptions, edge cases and rare configurations out of the main line of a lesson.** Content selection was the hardest and most consequential principle in the FCC rewrite that raised correct answers and cut reading time [@kimble2016proof]. The rewrite bundled several changes, so selection's share of the gain is unknown.

*In LTF:* a lesson states the normal case for the Skyhawk in MSFS 2024. A difference that matters only for another variant or an unusual setup goes in a `Callout` of type `classic` or `sim`, or on a reference page linked from the lesson, never in the middle of the paragraph that explains the normal case.
:::

### The craft tradition: Orwell and Gowers

Two mid-century British texts are the canonical statements of the plain style in English, and both are craft, not research. Orwell's 1946 essay argues that vague language and muddled thought feed each other, and names four devices of vague writing: dying metaphors, used because they spare the writer the work of finding a fresh phrase; operators or "verbal false limbs", stock phrases that replace a simple verb; pretentious diction; and meaningless words [@orwell1946politics]. It gives a list of questions to ask of every sentence (What am I trying to say? What words will express it? What image or idiom will make it clearer? Is the image fresh enough to have an effect? Could I say it more shortly? Have I said anything avoidably ugly?) and six rules, the last of which is "Break any of these rules sooner than say anything outright barbarous" [@orwell1946politics]. That last rule tells the reader that the others serve meaning.

Gowers wrote at the Treasury's request to help officials use English as a working tool. The Complete Plain Words combined a 1948 booklet and a 1951 A to Z guide, and its central advice is to imagine the reader's position, prefer the familiar and concrete word, and cut words that carry nothing; its chapter titles include "Avoiding the Superfluous Word", "Choosing the Familiar Word" and "Choosing the Precise Word" [@gowers1954complete]. Gowers disliked the A to Z format of his second booklet because it implied every topic was equally important and because readers who needed help would not know which entry to look up, which is a pointed observation about style guides [@gowers1954complete].

The standing objection to both came early. The linguist G. H. Vallins argued, by the account available, that verbose phrases can carry nuances lost in plain versions [@gowers1954complete]. Plainness can strip a qualification that matters. In aviation that is a real risk: an everyday word may not carry the exact sense of a technical term.

::: {.rule #WRT-011 grade="C"}
**Never let plainness erase a technical distinction; keep the exact term, define it once in plain words, then use it consistently.** Gowers's critics argued that plain versions can lose nuance, and the federal guidelines ask for the same term for the same thing throughout [@gowers1954complete; @plain2011federal]. Orwell's sixth rule puts meaning above the other rules [@orwell1946politics]. This is craft consensus.

*In LTF:* a lesson introduces each aviation term with a short plain gloss at first use on the page, links it to `glossary.yaml` (which caps entries at 80 words), and then uses that exact term. The glossary chips in the lesson's right rail ("Terms in this lesson") are the place to check that every term used in the page is defined.
:::

::: {.rule #WRT-012 grade="C"}
**Keep required wording exactly as the source gives it, even when a plainer version exists.** Orwell's last rule and the plain language guidance both make the rules servants of meaning [@orwell1946politics; @plain2011federal]. Where meaning is fixed by an external source (a checklist item, a radio call, a limit, a quoted regulation), the exact wording is the meaning. This is a domain judgment, graded as expert consensus.

*In LTF:* checklist items in `content/checklists.yaml`, radio phraseology and any quoted regulation keep their sourced wording, with a plain explanation beside them rather than in place of them. A plain-language edit that touches such wording needs the source check that the project's rules require, and `/review-lesson` should list it.
:::

### What this means for Learn to Fly

LTF already writes in the plain tradition: second person, short sentences, US English, defined units. What it lacks is a single written standard that names its sources and its exceptions. Build one in `content/README.md` (or a linked style page) with four parts: the Plain Writing Act's outcome test as the first line (WRT-007); a short list of the federal and GOV.UK rules LTF adopts, each with its LTF example; the exceptions, chiefly that sourced aviation wording is never "plained" (WRT-012); and the testing step (see the chapter on testing).

Change how lesson revisions are done. A lesson that reads badly is first restructured (point first, one topic per section, exceptions moved out) and only then reworded (WRT-008, WRT-010). Keep one register across beginner and reference content (WRT-009); `SpeedsPage` and the `KeyNumbers` panel should read in the same voice as L0.1. Use `glossary.yaml` and the glossary `Popover` as the system for WRT-011: a validator check could list terms that appear in a lesson's body but are neither glossed in the text nor present in the page's glossary chips. That check is cheap and catches the most common failure of technical plain writing, a term used before it is explained.

## Words and sentences

### Short familiar words, and what long ones cost

Every plain language source asks for short, familiar words, and most give the same examples. GOV.UK's list ("buy" not "purchase", "help" not "assist", "about" not "approximately") is typical [@govuk2026writing]; the federal guidelines ask for short simple words and no unnecessary ones [@plain2011federal]; Orwell's second rule is "Never use a long word where a short one will do" [@orwell1946politics]; Gowers's chapter is "Choosing the Familiar Word" [@gowers1954complete]. The common justification is comprehension. A second justification has experimental support of its own: needless long words cost the writer credibility.

Oppenheimer's 2006 paper reports five experiments with student participants [@oppenheimer2006consequences]. In the first three, texts made more complex (graduate application essays, sociology dissertation abstracts, translations of Descartes) were judged to come from less intelligent authors; in the essays, complex words were swapped for shorter synonyms or the reverse. In the fourth, the same text in a hard-to-read font was judged to come from a less intelligent author. In the fifth, when there was an obvious irrelevant cause for the difficulty (a press account describes low printer toner), readers stopped penalizing the author, and when told the difficulty was irrelevant some overcorrected. The proposed mechanism is processing fluency: anything that makes a text harder to read lowers the evaluation of the text and its writer, unless readers can blame something else [@oppenheimer2006consequences].

The full paper was not read for these notes, so no sample sizes or statistics are given here, and no direct replication was found. A related fluency paper by the same author has failed to replicate, which says only that the fluency literature is mixed in places [@oppenheimer2006consequences]. The careful reading is that needlessly difficult wording probably costs credibility, with an unknown effect size on any particular page. The paper's own target is needless long words, not long words: a necessary technical term is not the problem.

::: {.rule #WRT-013 grade="B"}
**Use the short familiar word unless a longer one is the precise or required term.** Plain language standards ask for it [@govuk2026writing; @plain2011federal; @orwell1946politics], and Oppenheimer's experiments found that needless complexity lowered readers' judgments of the author [@oppenheimer2006consequences]. The experiments used students and short texts and have not been directly replicated.

*In LTF:* ban the Latinate padding that creeps into training copy: "utilize", "commence", "in the event that", "prior to", "in order to". Keep "airspeed indicator", "altimeter" and the sim's own control names; they are the subject, not padding.
:::

::: {.rule #WRT-014 grade="B"}
**Do not mistake dense phrasing for rigor when adapting an authoritative source.** A source can be authoritative while its sentences are written for a different reader. The fluency findings suggest that a learner judges the author by how hard the text is to read, and penalizes the author when no other cause is visible [@oppenheimer2006consequences]. One set of experiments supports this.

*In LTF:* lessons that draw on handbooks or manuals rewrite the explanation for a beginner and cite the source in "Go deeper", rather than paraphrasing the source's sentence structure. The sourced fact stays exact; the sentence around it is LTF's.
:::

### Verbs, not nouns

The federal guidelines and GOV.UK both name hidden verbs (nominalizations) as a cause of wordiness. The digital.gov example is "We analyze data" against "We conduct an analysis of the data" [@uscongress2010plain]; Orwell's "verbal false limbs" are the same thing, stock phrases that replace a simple verb with a noun and a weak verb [@orwell1946politics]. The guidelines also ask for the simplest form of a verb and for subject, verb and object close together [@plain2011federal].

In interface text a hidden verb does particular harm because it hides the action. "Completion of the debrief is required to save your score" makes the reader extract "complete the debrief" from a noun phrase. "Finish the debrief to save your score" puts the action first, where the scanning reader looks (WRT-002).

::: {.rule #WRT-015 grade="C"}
**Put the action in a verb, and keep subject, verb and object close together.** The federal guidelines and GOV.UK both ask for this, and Orwell names noun-for-verb phrases as a mark of vague writing [@plain2011federal; @govuk2026writing; @orwell1946politics]. It is consensus, not experiment.

*In LTF:* the existing labels mostly follow it ("Mark lesson complete", "Submit debrief", "Clear filters"). Review `Callout` bodies and challenge goals for "perform a check of", "make an adjustment to" and "the setting of", and rewrite them with the verb.
:::

### Active voice, with judgment

"Use the active voice" is rule 11 in Strunk's original list, and Orwell's fourth rule is "Never use the passive where you can use the active" [@strunk2000elements; @orwell1946politics]. The federal guidelines and GOV.UK repeat it, GOV.UK because the active is direct and keeps sentences short [@plain2011federal; @govuk2026writing]. The best argument for it in interface writing is about responsibility: the passive can hide who must act. "Your progress could not be saved" leaves unclear whether the learner should do something; "We could not save your progress. Try again in a minute." says who failed and what the learner can do.

The rule has a well-known critic. The linguist Geoffrey Pullum argues that The Elements of Style's passive-voice advice is inconsistent: Strunk's example "My first visit to Boston will always be remembered by me" sounds bad for information-structure reasons, not because it is passive; several of the book's "passive" examples are not passives; and many of its own sentences are passive [@strunk2000elements]. He calls the book a hopeless guide to English usage. A defender can point out that the authors call the passive "frequently convenient and sometimes necessary" [@strunk2000elements]. GOV.UK allows the passive when the outcome matters more than who acts [@govuk2026writing].

Both positions fit a practical rule. Use the active by default for instructions and for messages, where the reader must know who acts. Use the passive when the actor is unknown, obvious or irrelevant and the thing acted on is the topic of the sentence. Technical descriptions of aircraft and sim behavior sometimes read best this way, and a writer should choose by what the sentence needs to put first.

::: myth
**"Passive voice is a grammatical error."** The passive is a normal construction that English uses to put the thing acted on first. Pullum's critique of The Elements of Style shows that many sentences called passive there are not, and that the bad examples are bad for other reasons [@strunk2000elements]. GOV.UK, a strict plain language standard, permits the passive when the outcome matters more than the actor [@govuk2026writing].
:::

::: {.rule #WRT-016 grade="C"}
**Use the active voice for instructions and messages, and choose the passive only when the actor is unknown or beside the point.** The plain language standards prefer the active for directness and length [@plain2011federal; @govuk2026writing], and the active makes clear who must act. Linguistic criticism of blanket active-voice rules is well founded [@strunk2000elements], so this is a default, not a lint rule.

*In LTF:* every `ErrorState`, `Toast`, `ErrorSummary` item and `FormField` error says who acts ("We could not…", "Enter…"). Lesson descriptions of what the airplane or the sim does may use the passive when the system, not the learner, is the topic.
:::

### Positive form and the main idea first

Strunk's rule 12 is to state things positively, and the federal guidelines ask writers to avoid double negatives and to put the main idea before exceptions and conditions [@strunk2000elements; @plain2011federal]. The W3C note on cognitive accessibility lists "avoid double negatives or nested clauses" among its clear-content patterns [@seemanhorwitz2021making]. For instructions, positive form means telling the learner what to do before what not to do. For conditions, main-idea-first means the reader learns the normal action before the exception, rather than holding an "if" clause in mind while waiting for the verb. The guidelines also ask that "if" conditions be broken into separate sentences while keeping the logical relationship [@plain2011federal].

::: {.rule #WRT-017 grade="C"}
**Say what to do before what not to do, and the main case before its exceptions.** Strunk and White's positive form and the federal guidelines' ordering rule agree [@strunk2000elements; @plain2011federal], and the W3C cognitive accessibility note asks writers to avoid double negatives and nested clauses [@seemanhorwitz2021making]. Consensus guidance.

*In LTF:* L0.1 already writes "Read it with the sim paused." rather than "Do not unpause the sim until you have read the brief unless you are replaying it". A condition that changes the action goes in its own sentence after the main one.
:::

### Modal verbs carry the weight of obligation

Plain language standards agree that requirement words must be used consistently, and differ slightly on which words. The federal guidelines say to use "must" for an obligation, "must not" for a prohibition, "may" for discretion and "should" for a recommendation, and to drop "shall" [@plain2011federal]. GOV.UK uses "must" for legal requirements, "need" for administrative steps without legal consequences, "can" for optional actions, and not "may be able to" [@govuk2026writing].

For a training product the scale matters because learners take modal verbs literally. A beginner who reads "you must use" a technique may believe it is a regulation; one who reads "you should" a limit may believe it is optional. LTF's sources determine which is which. The scale only works if "must" is reserved for what a source says is required.

::: {.rule #WRT-018 grade="C"}
**Reserve "must" for what a cited source makes mandatory, and use "should" for recommended technique and "can" for options.** The federal guidelines and GOV.UK both define a fixed modal scale for requirements [@plain2011federal; @govuk2026writing]. A learner reads the scale literally, so mixing it misstates the status of a rule. Standards guidance.

*In LTF:* add the scale to the style guide with the rule that "must" in lesson or challenge text needs a source in the content's references. Sim-specific requirements ("the sim must be paused while you set up") use "need" to separate them from aviation rules.
:::

### Contractions: a real conflict

The standards disagree. The federal guidelines recommend contractions where they sound natural and cite a reading study for it [@plain2011federal]. GOV.UK's style guide advises against negative contractions such as "can't" and "don't", and its clear-language page marks forms such as "should've" and "they've" as hard to read, while allowing others such as "you'll" [@govuk2026writing]. Neither position rests on published evidence that this Part could audit.

The conflict matters most where a negation carries safety weight. "Don't exceed" and "Do not exceed" differ in how visible the negation is; a reader skimming a warning may miss a contracted "n't". Positive contractions ("you'll", "it's", "you're") carry no such risk and keep the second-person voice conversational.

::: {.rule #WRT-019 grade="D"}
**Use positive contractions freely, and spell out "not" in warnings, limits and prohibitions.** The federal guidelines favor natural contractions and GOV.UK warns against negative ones [@plain2011federal; @govuk2026writing]; the evidence each cites could not be checked. Spelling out the negation where misreading costs most is a precaution, not a finding, and should be tested.

*In LTF:* "you'll", "it's", "you're" and "you've" are fine in lessons and the UI. In `safety` `Callout`s, Fly mode alerts and any sentence about a limit, write "do not" and "cannot". Elsewhere, "don't" is acceptable, and existing positive contractions such as "You've wandered off the taxiway" need not change.
:::

### One term, one thing; no slashes

The federal guidelines ask for the same term for the same specific thing, and for no slashes [@plain2011federal]. Both are rules about ambiguity. A reader who meets "airspeed", "speed" and an abbreviation in one lesson cannot know whether they are one quantity or three. A slash hides whether two things are alternatives ("and or or") or one thing with two names. Degani and Wiener's checklist guidelines make the first rule explicit for cockpit documents: standardize the names for controls and displays [@degani1990checklists]. Nielsen's analysis of 249 usability problems found that the single heuristic explaining the most of them was consistency (same thing, same way) [@nielsen1994enhancing]. That analysis was done by one rater on one database, so it shows how often the problem appears, not a measured effect.

::: {.rule #WRT-020 grade="B"}
**Use one name for each thing across lessons, challenges, checklists, widgets and the interface, and never use a slash between alternatives.** The federal guidelines require consistent terms and ban slashes [@plain2011federal]; checklist guidelines ask for standard names for controls and displays [@degani1990checklists]; consistency was the most common explanation of usability problems in Nielsen's analysis [@nielsen1994enhancing].

*In LTF:* adopt the sim's labels as the canonical names, record them in `glossary.yaml`, and add a validator check for known synonyms of a canonical term. The challenge C1.1 procedure's habit of naming the tooltip's label beside LTF's ("the tooltip calls it Magnetos") is the right way to handle an unavoidable second name. Replace "and/or" and "on/off" style slashes in prose with words.
:::

### What this means for Learn to Fly

The sentence-level rules become most useful as an author checklist and a small set of validator checks in `npm run content:validate`. The checks that can be automated reliably are: a list of banned padding words (WRT-013), slashes between words in prose (WRT-020), "must" without a reference in the lesson's front matter (WRT-018, reported as a warning), negative contractions inside `safety` callouts (WRT-019), and terms from a synonyms list in `glossary.yaml` (WRT-020). Each should report, not fail, at first, and be promoted to an error only once authors agree the false positives are rare.

The rules that need judgment belong in the review checklist: verbs over nouns (WRT-015), active voice where the reader must act (WRT-016), positive form and main idea first (WRT-017), and keeping a source's fact while rewriting its sentence (WRT-014). In the interface, the system messages in `States.tsx`, `RootErrorPage.tsx`, `ErrorSummary` and the server's auth errors already use the active voice and short words; keep them as the model for new messages.

## Structure: headings, paragraphs, lists and the opening

### Headings that inform, not tease

Nielsen's guidelines ask for meaningful subheadings, not clever ones [@nielsen1997how]. The F-pattern follow-up asks for visible headings that start with the most informative words [@nielsen2006f]. Kimble's appellate opinion revision used "short sections with informative headings and topic sentences", and lawyers who preferred it named the structure among their reasons [@kimble2016proof]. Redish's practitioner method suggests writing headings as the question or the action the reader would bring, so that a reader arriving from a search result or a link can see at once where they are [@redish2012letting].

There is also experimental evidence that organizational cues help learning. Schneider and colleagues' meta-analysis of signaling, which covers cues such as headings, outlines, highlighting and bold key words that tell the learner what to attend to without adding content, pooled 103 studies with 12,201 participants [@schneider2018meta]. The average effect was g+ = 0.53 for retention and g+ = 0.33 for transfer: moderate for remembering, smaller for applying. The studies are short laboratory lessons, and how the effect varies with prior knowledge is unresolved [@schneider2018meta]. Signaling helps, but it does not rescue a badly structured lesson; it works on top of good sequencing.

Headings in LTF also do navigational work. Lesson `##` sections become the `SectionNav` entries in the left rail and the mobile "Section i of n" `Select`, and the challenge Brief's h2s (Goal, Sim setup, Recommended lessons, Procedure, How you'll be scored) are the learner's map of the tab. A heading that teases ("The secret of smooth landings") gives the navigation nothing to say.

::: {.rule #WRT-021 grade="A"}
**Write headings that state what the section tells or teaches, and use them as signals in every lesson.** A meta-analysis of 103 studies found that organizational cues such as headings and highlighted key terms improve retention moderately and transfer modestly [@schneider2018meta], and the web reading studies and plain language revisions favor informative over clever headings [@nielsen1997how; @nielsen2006f; @kimble2016proof]. The meta-analytic effect is for signaling in general, measured in short lessons.

*In LTF:* lesson `##` headings must make sense out of context, because they appear alone in `SectionNav`. Write them as the topic or the action ("How a challenge works", "What you need"), not as a hook. The same applies to `PageHeader` titles and to `Callout` titles when they are not the default.
:::

### Questions as headings: where the conversation model fits

Redish's central idea is that web content is one side of a conversation with a particular reader who has come to do something: answer the questions that reader brings, in their words, organized so the answer is easy to find [@redish2012letting]. The method starts from a named reader and task and leads with the most important questions, inverted pyramid fashion. A reviewer of the first edition judged the conversation model the book's strongest idea while noting it gets lost as the book grows into a general guide [@redish2012letting]. It is a craft book with no experiments of its own.

The conversation model has a limit in teaching. A reader who arrives with a question can be answered; a beginner does not know what to ask. A course must raise the questions the learner will need before the learner knows to ask them, which is why lesson order matters. The model fits LTF's reference pages, glossary, challenge Briefs and error states, where the learner does arrive with a question, and fits the opening of lessons less well.

::: {.rule #WRT-022 grade="C"}
**On lookup surfaces, write headings and labels as the question or task the reader arrives with; in lessons, raise the questions the learner does not yet know to ask.** Redish's conversation method fits readers who come with a question [@redish2012letting]; a beginner in a course often does not have one yet. Craft guidance, adapted.

*In LTF:* the reference hub's "What do you need to know?" and its search placeholder "Speeds, terms, checklists, airports" are already conversational in the right place. The `ReferenceSections` panels and airport cards can use task headings; lessons keep teaching order and use the objectives `Card` to tell the learner what questions the lesson will answer.
:::

### Paragraphs: one topic, point first

Strunk's rules 9 and 10 are to make the paragraph the unit of composition, covering one topic, and usually to open it with a topic sentence [@strunk2000elements]. Nielsen asks for one idea per paragraph stated in its opening words [@nielsen1997how]. GOV.UK limits paragraphs to five sentences and sentences to 25 words, as house rules without a stated experiment behind them [@govuk2026writing]. LTF's own content guide asks authors to keep each lesson section under about 250 words before a picture, widget, table or question.

These limits are proxies for a single principle: the reader should be able to tell from the first sentence what the paragraph is for and decide whether to read on. A paragraph that opens with context and arrives at its point in the third sentence fails the scanning reader and slows the close reader.

::: {.rule #WRT-023 grade="C"}
**Give each paragraph one topic and state it in the first sentence.** Strunk and White, Nielsen and GOV.UK agree on the principle [@strunk2000elements; @nielsen1997how; @govuk2026writing]; the specific limits (five sentences, 25 words) are house rules. Treat length limits as review prompts.

*In LTF:* keep the content guide's 250-word limit per section before a visual or question, and add a review prompt for any paragraph over five sentences or any sentence over 25 words. These are warnings for a human to read, not validator errors.
:::

### Lists, tables and the lead-in line

Bulleted lists were one of the scannable treatments in the Morkes and Nielsen study [@morkes1997concise], and every web writing guide recommends them [@nielsen1997how; @nielsen2006f]. GOV.UK adds two rules: a bulleted list needs a lead-in line, and steps use numbers [@govuk2026writing]. The W3C note's pattern "separate each instruction" says the same about procedures [@seemanhorwitz2021making]. Strunk's rule 15, express parallel ideas in parallel form, governs the list's items [@strunk2000elements]: each item should have the same grammatical shape, so the reader can compare them.

The distinction between bullets and numbers carries meaning. Numbers say "in this order"; bullets say "in any order". A bulleted procedure tells the learner the order does not matter, which is rarely true in a cockpit. A numbered list of features tells the learner they must be done in sequence, which is confusing.

::: {.rule #WRT-024 grade="C"}
**Number steps that must be done in order, bullet items that need not be, give every list a lead-in line, and write its items in parallel form.** GOV.UK requires lead-in lines and numbered steps, the W3C cognitive accessibility note asks for each instruction to be separate, and parallel form is Strunk and White's rule 15 [@govuk2026writing; @seemanhorwitz2021making; @strunk2000elements]. Standards guidance.

*In LTF:* L0.1's "Each module follows the same loop:" followed by a numbered list of five bold-led items is the model. `MarkdownContent` renders `list-disc` for bullets; check that every procedure in lessons uses an ordered list, and that the `FlyPanel` "Steps" stay numbered.
:::

### Cut the welcome: happy talk and seductive details

Krug's chapter "Omit needless words" names two targets: "happy talk", the welcome text and content-free sociability that nobody reads, and instructions [@krug2014dont]. The Minimal Manual's designers removed the "welcome to word processing" introduction, previews and reviews from their manual, and learners did better with it (see the chapter on instructions) [@carroll1987minimal]. Both are about the opening of a page, which is the most valuable space in it (WRT-002).

There is a related experimental literature on what happens when interesting but irrelevant material is added to explanations. Harp and Mayer's four experiments with 357 undergraduates found that science passages with "seductive details" produced poorer recall of main ideas and fewer problem-solving solutions than the same passages without them [@harp1998seductive]. Highlighting the main ideas, stating learning objectives and signaling did not remove the harm. Placing the details at the start made it worse; placing them at the end reduced it. The authors' explanation is that details read first prime the wrong frame for organizing the rest [@harp1998seductive]. Later work is mixed: a meta-analysis reports an average harm, but one recent experiment did not find a consistent effect, so the effect is real on average and varies [@harp1998seductive].

Happy talk and seductive details are not the same thing, but they share a position and a cost. Both occupy the opening, and both delay or displace the point.

::: {.rule #WRT-025 grade="B"}
**Open every lesson, section and page with the first thing the learner needs, not a welcome, a preview or an anecdote.** Krug names welcome text as the first thing to cut [@krug2014dont]; the Minimal Manual removed introductions and previews and learners did better [@carroll1987minimal]; interesting but irrelevant material placed first harmed recall and transfer more than the same material placed last [@harp1998seductive]. The seductive details effect varies across studies.

*In LTF:* L0.1 opens with "By the end of Learn to Fly you will fly…", an outcome, which is acceptable for the course's welcome lesson. Later lessons should open with the idea or the action, not "Welcome to Lesson 3! In this lesson you will…". Aviation history, anecdotes and trivia go after the main idea or in a "Go deeper" resource, not in the first section.
:::

::: {.rule #WRT-026 grade="C"}
**Keep lesson objectives to a short list of observable actions and do not restate them as a prose preview.** The Minimal Manual removed previews [@carroll1987minimal], and a statement of objectives did not protect learners from irrelevant material in Harp and Mayer's experiments [@harp1998seductive]. Objectives that tell the learner what they will be able to do are a signal; a paragraph that previews the lesson is padding. Inference from the evidence, graded as judgment.

*In LTF:* the objectives `Card` ("In this lesson you will") stays as a list of two to four verbs-first items, as L0.1's front matter does ("Describe…", "Explain…", "State…"). Do not add an introductory paragraph that repeats them.
:::

### Summaries at the top of long pages

Kimble's appellate opinion revision opened with a summary of the crucial facts, the issue and the answer, and lawyers named the summary as a top reason for preferring it [@kimble2016proof]. Nielsen recommends the inverted pyramid, conclusion first [@nielsen1997how]; the W3C note asks for a summary of long documents [@seemanhorwitz2021making]. For a lesson, the summary is the front matter's `summary` field and the objectives; for a reference page, the first line under the title; for a challenge, the Goal.

::: {.rule #WRT-027 grade="B"}
**Put a one- or two-sentence summary of the point at the top of every long page.** Readers preferred revisions that opened with a summary [@kimble2016proof], and the inverted pyramid and summaries are standard guidance [@nielsen1997how; @seemanhorwitz2021making]. The supporting studies measured preference and bundled changes.

*In LTF:* the lesson `summary` field ("How the course works, how challenges are flown and scored, and what Learn to Fly is (and is not).") should render as visible text under the lesson h1, and every challenge `goal` should open with the task in its first sentence, as C1.1's does ("Find and operate the Skyhawk's main controls and instruments…").
:::

### What this means for Learn to Fly

Structure is where LTF's content is strongest and where small rules will keep it that way. The lesson format already forces sections (`##` becomes `SectionNav`), already caps sections at about 250 words before a visual or question, and already has objectives and a summary in front matter. Keep all of that. Change three things. First, make headings pass a context-free test, since `SectionNav` and the mobile section `Select` show them alone (WRT-021). Second, apply WRT-025 to every lesson after L0.1: the first section starts with the idea or the action, and stories or trivia move to the end or to "Go deeper". Third, render the `summary` as visible text at the top of the lesson and use the challenge `goal` as a one-sentence task statement (WRT-027).

On reference surfaces, write headings as the learner's question or task (WRT-022): the airport cards, the `ReferenceSections` panels and the reference search results. In the Brief tab, the existing h2s are a good conversational sequence; keep them. For lists, check that every procedure uses numbers and every list has a lead-in (WRT-024); `MarkdownContent` needs no change, only the content.

## Instructions and procedures

### The active learner does not read first

Carroll and Rosson's "paradox of the active user", drawn from IBM user studies in the early 1980s, is that new users skip manuals and set-up and start using a system at once to get their task done, even though some time spent learning first would save time later [@carroll1987paradox]. The design lesson is not to wish for an idealized learner who studies first, but to design for one who acts with limited knowledge and learns from what happens. The accessible accounts are secondary, and "users never read" overstates it: people do consult help once stuck, especially when it is short and at the point of need [@carroll1987paradox].

LTF's learners are active users in this sense twice over. They have a simulator open, and the simulator is more interesting than the page. Anything a learner must know before acting has to be in the path of the action, not in a "read this first" panel.

::: {.rule #WRT-028 grade="B"}
**Put every instruction a learner needs at the point where they need it, not in an introduction they will skip.** New users start acting before reading set-up material, a pattern reported from IBM studies and confirmed in later practitioner observation [@carroll1987paradox]; the Minimal Manual's gains came partly from removing front matter [@carroll1987minimal]. The original data were not available, and the pattern is a design heuristic rather than a measured effect.

*In LTF:* critical sim setup lives in the Brief's "Sim setup" `dl`, next to the action it concerns, not in L0.2 alone. A step that depends on a setting repeats the setting at that step.
:::

### What the Minimal Manual tested

Carroll and colleagues built a "minimal manual" that accepts the active learner's habits rather than fighting them [@carroll1987minimal]. Their model has four parts: focus on real tasks and activities; slash the verbiage; support error recognition and recovery; and guide exploration. The motivating observation, in a learner's words quoted in the paper, is that learners "want to do something, not learn how to do everything" [@carroll1987minimal]. They cut a commercial word-processor training manual to 45 pages, less than a quarter of its length, by removing repetition, previews, reviews, practice exercises, the index, the welcome introduction and the troubleshooting appendix.

In the first experiment, 19 novices used either the Minimal Manual or a standard self-instruction manual in a simulated office. The minimal group needed 40 percent less learning time, accomplished 2.7 times as many performance subtasks and was more than twice as efficient on basic tasks [@carroll1987minimal]. In the second, 32 office workers with little computer experience were crossed by manual and by instructions to "learn while doing" or "learn by the book". Minimal Manual learners completed 58 percent more subtasks and achieved 93 percent more per unit time on the first tasks. They made 20 percent fewer errors, spent 10 percent less time recovering and used recommended recovery methods 60 percent more often, but these error differences were not statistically significant [@carroll1987minimal].

The samples were small, the system was a 1980s word processor, and the comparison manual differed in many ways at once, so the study cannot say which feature (shorter text, task focus, error support) caused the gain [@carroll1987minimal]. Carroll has said there is no deductive theory of minimalist instruction and that design depends on iterative testing. Flying also involves concepts (why the airplane responds as it does) that cannot be learned only by doing; the minimal approach keeps concept text short and tied to a task, it does not remove it.

::: {.rule #WRT-029 grade="B"}
**Put the learner on a real task early and attach explanation to the task, not before it.** Learners with a task-focused minimal manual learned faster and accomplished more than learners with a conventional manual in two small experiments [@carroll1987minimal]. The design bundled several changes, so the active ingredient is unknown, and conceptual material still needs a place.

*In LTF:* every lesson after Module 0 should reach a "Try" (a widget, a quiz or a sim action) within its first two sections, with the explanation for that action placed immediately before or after it. The "Learn, See, Try, Fly, Reflect" loop already encodes this; keep the "Learn" part of each loop short.
:::

### Steps: one action, verb or object first, parallel

The procedure rules from the plain language standards and the cognitive accessibility note converge: one instruction per step, numbered, in parallel form, with the action in a verb [@plain2011federal; @govuk2026writing; @seemanhorwitz2021making; @strunk2000elements]. Nielsen's F-pattern findings add that the first two words of each line do most of the work [@nielsen2006f]. In a step list read in glances, the learner returns to the list after looking at the sim and must find their place from the left edge.

Which word should come first is a real choice. Verb-first ("Set the fuel selector…") makes the action visible. Object-first ("Fuel selector. Set it…") makes the target visible. In a cockpit, the first job is to find the control, and the control's name is the word the eye can match against the panel. LTF's C1.1 procedure uses object-first steps, which suits a scavenger hunt. For a flow in which the learner already knows where the controls are, verb-first steps make the actions easier to compare. Both are defensible; mixing them in one list is not.

::: {.rule #WRT-030 grade="C"}
**Give each step one action, start it with either the action or the control name, and use the same pattern for every step in the list.** The standards ask for one instruction per step and parallel form [@seemanhorwitz2021making; @strunk2000elements], and readers rely on the first words of each line [@nielsen2006f]. Choosing verb-first or object-first is a judgment; consistency within a list is the rule.

*In LTF:* write object-first steps ("Flap switch. Lower and raise the flaps…") where the task is finding controls, and verb-first steps where the task is a flow of known actions. In `FlyPanel` and `FlyModePage`, each step is one `Checkbox` row with one action; a step with "then" in it is two steps.
:::

### Checkpoints and recovery: coordinating the page and the sim

The Minimal Manual's third and fourth principles, support error recognition and recovery and help learners coordinate the manual with the system, describe exactly the problem a learner faces with LTF open beside the simulator [@carroll1987minimal]. After each action, the learner needs to know what they should see now, and if they do not see it, what to do. A step without a checkpoint leaves the learner unsure whether they did it; a step without a recovery leaves them stuck when the sim does something else.

Degani and Wiener's guidelines for flight-deck checklists make a related point about the response half of an item: responses should portray the desired status or value, not just "checked" or "set" [@degani1990checklists]. They also propose a completion call as the last item, subdividing long checklists into chunks tied to systems and functions, putting the most critical items as close as possible to the beginning so they are done before interruptions, and providing buffers to recover and "take up the slack" [@degani1990checklists]. The authors say these are proposals, not specifications, drawn from field observation of one carrier and from interviews and incident reports.

::: {.rule #WRT-031 grade="B"}
**After any step whose result the learner must confirm in the sim, say what they should see, and give the recovery when they do not see it.** The Minimal Manual's support for error recognition and recovery and for coordinating manual and system was part of a design that outperformed a standard manual [@carroll1987minimal]; checklist guidelines ask that responses state the desired status rather than "checked" [@degani1990checklists]. Small studies and expert proposals.

*In LTF:* C1.1 already writes checkpoints into steps ("Turn both halves on and watch the PFD start."). Make it a pattern: an action sentence, then a "You should see…" sentence, then, where a common failure exists, an "If not, …" sentence. In `checklists.yaml`, where the `action` field holds a bare verb such as `CHECK` or `SET`, use the `note` to state the target state where a source supports it.
:::

::: {.rule #WRT-032 grade="C"}
**Chunk long procedures, end each chunk with a completion line, and place the most consequential steps early.** Degani and Wiener propose chunking, a completion call and putting critical items near the beginning so they survive interruptions [@degani1990checklists]. These are proposals from observation, not experiments, and the ordering of real checklist items comes from their sources.

*In LTF:* in Fly mode, show a short phrase after the last step of each group ("Run-up complete" or the equivalent from the source) so the learner knows when to stop looking at the page. Do not reorder sourced checklist items to satisfy this rule; apply it to LTF's own training flows and step groupings.
:::

### Instructions must die, but only in the interface

Krug's line "Instructions must die" expresses his view that a page needing instructions should be fixed, and that any instructions left should be cut to the minimum [@krug2014dont]. It is right about the interface and wrong about content. Flight procedures are the content of LTF; a checklist is an instruction by nature. But if a widget needs a paragraph explaining how to operate it, or a form needs a block of guidance above it, the widget or the form should change.

Jarrett and Gaffney's forms book makes the same point positively: instructions belong inside the question, not in a separate block [@jarrett2009forms]. The test for an interface instruction is whether it would be needed if the control were labeled well.

::: {.rule #WRT-033 grade="C"}
**If a control needs instructions to be used, fix the control or its label before writing the instructions.** Krug argues that interface instructions signal a design problem [@krug2014dont], and forms practice puts necessary guidance inside the question rather than above it [@jarrett2009forms]. This does not apply to procedures, which are content. Expert consensus.

*In LTF:* `WidgetFrame`'s Explore and "Quiz me" toggle and its "Reset" button should be clear without help text; if testing shows learners need the "Describe this diagram" `details` to operate a widget (rather than to understand the diagram), the widget's controls need relabeling.
:::

### Glance reading in Fly mode

Fly mode is where every rule about instructions is tested hardest. The learner is flying, looks at the page for a second or two, and looks back. Degani's review of flight-deck documentation treats such pages as displays in the full human-factors sense: findability and legibility are safety properties, and the review cites a case in which a crew spent about three minutes looking for a smoke procedure because they believed it was in the wrong section [@degani1992typography]. The review's numbers are for paper at arm's length and cannot be copied into CSS, but its direction is clear: one canonical name and position for each procedure, and no stacking of small type, italics and low contrast.

For writing, glance reading means each step must be recoverable from its first words, a message must fit one line, and nothing the learner needs mid-flight should be in a paragraph.

::: {.rule #WRT-034 grade="C"}
**Write Fly mode text to be read in one glance: one short line per step, the information in the first words, no paragraphs.** Flight-deck documentation research treats such pages as displays where findability is a safety property [@degani1992typography], and readers in glance conditions rely on the first words of lines [@nielsen2006f]. The evidence is a narrative review and general eyetracking, applied by inference.

*In LTF:* `FlyModePage` shows the goal (`text-2xl`) and the `FlyPanel large` steps. Cap the goal at one sentence, each step at about one line at Fly mode's size, and put any explanation in the Brief, linked by "Back to challenge". The "Keep the screen on while flying" label is the right length.
:::

### What this means for Learn to Fly

The challenge YAML format already contains the pieces these rules need: `goal`, `setup`, `procedure` and `criteria`, with each procedure step a string. Strengthen the procedure format. Each step is one action (WRT-030); steps whose result shows in the sim carry a checkpoint and, where useful, a recovery (WRT-031); groups of steps end in a completion line (WRT-032). A schema change could make this explicit by allowing a step to be an object with `do`, `see` and `ifNot` fields, rendered in `FlyPanel` as one line with an expandable check. That is a product decision with a plan entry, not something to slip in.

In lessons, reach a "Try" early (WRT-029), keep critical setup at the step that needs it (WRT-028), and fix widgets that need operating instructions rather than writing the instructions (WRT-033). In `checklists.yaml`, use `note` to state the target state where the source supports it (WRT-031). In `FlyModePage`, enforce the one-glance rule with a review prompt that flags any step string longer than a set length (WRT-034); the length should be chosen by testing on a phone beside the sim, not copied from this Part.

## Messages: errors, feedback and system states

### What novices meet when something goes wrong

A beginner meets software mainly through what it says when something goes wrong, and a learner who is also flying a simulator meets it at the worst moment, with attention split between two screens. Shneiderman's 1982 note in Communications of the ACM is the root of most later advice on system messages. It opens with what novices then faced: violent messages such as "FATAL ERROR, RUN ABORTED", vague ones such as "ILLEGAL CMD", and codes such as "OC7", which leave users "shaken, confused, dismayed, and discouraged from continuing" [@shneiderman1982designing].

It reports five experiments. Undergraduate novices repairing Cobol statements did 28 percent better with more specific compiler messages. Users of a text editor whose only message was a question mark made 10.7 errors, and 6.1 with an editor that had brief messages. Students corrected 4.1 of 10 erroneous editor commands with standard messages and 7.5 of 10 with improved ones. With job control language, students given messages from two popular systems scored 2.9 and 3.8 out of 6, and students given improved messages 4.8 [@shneiderman1982designing]. Preferences favored the improved messages.

The article reports no sample sizes and no statistical tests, and the tasks were programming and editing on command-line systems [@shneiderman1982designing]. Later work on enhanced compiler messages for novice programmers is mixed: one study is reported to have found fewer errors, another is titled "Results Inconclusive", and a think-aloud study found students read and acted on enhanced messages without a substantial learning gain [@shneiderman1982designing]. The direction is consistent; the size for a modern web product is unknown.

### The specification for a good message

Shneiderman's guidance is more durable than his numbers. Messages should be brief, positive, constructive, specific and comprehensible, and should emphasize the user's control over the system. They should not be wordy, negative in tone, critical of errors, general or cryptic, or suggest that the system controls the user [@shneiderman1982designing]. The model rewrites show the move: "ILLEGAL PASSWORD" becomes "Your password did not match the stored password. Please try again."; "INVALID DATA" in an inventory application becomes "Dress sizes range from 5 to 16."; "INCORRECT COMMAND" becomes "Permissible commands are: SAVE, LOAD, or EXPLAIN." [@shneiderman1982designing]. Each replaces a verdict with a fact the user can act on. Nielsen's synthesis of usability heuristics keeps the same idea as one of its nine: help users recognize, diagnose and recover from errors [@nielsen1994enhancing].

GOV.UK's style guide adds that there is usually no need to say "please" [@govuk2026writing]. Shneiderman's own rewrite contains one, which shows how style has moved; the point of the rewrite is the fact, not the courtesy word.

::: {.rule #WRT-035 grade="B"}
**Make every error message say what happened in the learner's terms and what to do next, without blame, codes or alarm.** Revised messages that were more specific and constructive improved novice performance in Shneiderman's experiments [@shneiderman1982designing], and error recovery is one of the core usability heuristics [@nielsen1994enhancing]. The experiments were small and old, and later results for enhanced compiler messages are mixed.

*In LTF:* the default `ErrorState` text ("Something went wrong" / "We could not load this. Check your connection and try again.") names one cause and one action. That suits a failed fetch, but pages should pass a specific message when the cause is known (a missing lesson, a server error, an unpublished module), because "check your connection" is wrong advice for those. The server's "Email or password is incorrect." and "This password is too common. Choose something harder to guess." already meet the rule.
:::

::: {.rule #WRT-036 grade="B"}
**State the accepted values or the allowed actions instead of saying an input is invalid.** Shneiderman's model rewrites replace "INVALID DATA" and "INCORRECT COMMAND" with the range or the list the user can choose from [@shneiderman1982designing], and stating the format rule in advance produced fewer errors in a forms study [@bargasavila2010simple]. The evidence is old experiments and one lab study.

*In LTF:* a numeric quiz answer or challenge entry that is out of range says what range or unit it expects; a `FormField` hint states the format before the learner types. "Not saved" as a `Callout` title in `DebriefForm` should be followed by the reason and the action, as its rubric-change variant already is ("Refresh the page to load the new rubric, then answer again.").
:::

### Where and when a message appears

Form research adds placement and timing. Bargas-Avila and colleagues report a comparison of six error-message presentations in which messages embedded next to fields and shown after the send button led to fewer consecutive errors, while inline validation (a message as each field was left) led to significantly more errors because people ignored or dismissed the messages [@bargasavila2010simple]. They also recommend never clearing completed fields and making errors noticeable at a glance by color, icon and text.

Wroblewski's study with the firm Etre found the reverse for some fields [@wroblewski2009inline]. With 22 users and six versions of a registration form, the best inline version beat submit-only validation on success, errors, satisfaction, time and fixations. "After" timing (validate when the field is left) was fastest; "before and while" (validate as the user starts typing) gave the most errors and worst satisfaction, because premature messages distracted. Only 30 to 50 percent of participants noticed validation messages on simple fields such as name and email, against 80 to 100 percent on harder fields such as user ID and password. Persistent messages outside the field worked best; fading success messages were missed, and success checkmarks on simple fields confused people about whether they meant "correct" or "valid" [@wroblewski2009inline]. The sample was small, errors were counted only at submission, and screen-reader users were not tested.

The two studies conflict on inline validation. They agree that a message should appear when the user can use it, beside what it concerns, and stay until it is resolved.

::: {.rule #WRT-037 grade="D"}
**Show form messages next to the field they concern, after the learner has finished with it, and keep them until the problem is fixed; never while the learner is still typing.** One lab study found inline messages were ignored and post-submit messages beside fields worked better [@bargasavila2010simple]; a small practitioner study found inline messages after the field is left worked best and premature ones worst [@wroblewski2009inline]. The evidence on inline timing conflicts, so this rule keeps only what both support.

*In LTF:* `FormField` errors (`font-medium text-warn` with the octagon icon) appear on submit, and `ErrorSummary` ("There is a problem") takes focus; keep that. If inline validation is added for the password on `/signup`, validate when the field is left, not on each keystroke, and do not show green ticks on email or name.
:::

### Feedback in quizzes teaches as much as the question

A quiz message is a special kind of system message, because the learner may remember it. Butler and Roediger's experiment with 72 undergraduates found that multiple-choice tests both help and hurt: they improve retention of tested material, but they expose learners to wrong options that can be absorbed as false knowledge [@butler2008feedback]. On a cued-recall test a week later, proportion correct was .14 for untested material, .31 for tested material without feedback, .45 with immediate feedback and .56 with feedback delayed to the end of the test. Lure intrusions were .24 with no feedback and fell to .15 and .14 with feedback, back to the untested baseline [@butler2008feedback]. The authors advise that educators provide feedback when using multiple-choice tests. It is a single experiment, and the delayed-feedback advantage is not universal in the wider literature.

For writing, the consequence is that the explanation after a quiz item is not an afterthought. It is the part of the item that prevents a plausible wrong option from becoming a belief.

::: {.rule #WRT-038 grade="B"}
**Follow every quiz answer, right or wrong, with the correct answer and a one-sentence reason.** Feedback after multiple-choice items increased later correct recall and removed the extra intrusions of wrong options that unfeedbacked tests produced [@butler2008feedback]. One laboratory experiment, consistent with broader findings on testing.

*In LTF:* `QuizBlock` shows "Correct!" or "Not quite." followed by the explanation from the quiz's `---` section, as L0.1's quiz does. Keep the explanation mandatory in the content schema. The verdict words carry no information; the explanation must name the correct option and say why, so that a learner who reads only the explanation still learns the fact.
:::

::: {.rule #WRT-039 grade="C"}
**Write the verdict in a quiz as a calm statement, without exclamation or praise inflation.** Shneiderman's guidance asks for positive, non-judgmental messages that do not criticize the user [@shneiderman1982designing], and the objective-tone result argues against exaggeration [@morkes1997concise]. No study compares quiz verdict wordings; this is consensus applied.

*In LTF:* "Not quite." is gentle and can stay. "Correct!" is the one exclamation in the learning flow; "Correct." reads in the same calm voice as the rest of the product. "Change your answer and check again." is a good next-step line.
:::

### Empty, loading and confirmation states

Empty and loading states are messages too. Each answers a question the learner did not ask aloud: is something wrong, is it still coming, what can I do here? The heuristic of visibility of system status names the first two [@nielsen1994enhancing]; Shneiderman's specification covers the third [@shneiderman1982designing]. A good empty state says why the space is empty and what will fill it; a good loading label says what is happening ("Saving…"); a good confirmation says what will happen and whether it can be undone.

::: {.rule #WRT-040 grade="C"}
**Make every empty state say why it is empty and what fills it, and every confirmation say what will happen and whether it can be undone.** System status and recovery are core heuristics [@nielsen1994enhancing], and specific, constructive messages help novices [@shneiderman1982designing]. Consensus guidance.

*In LTF:* "No challenges match these filters" / "Try fewer filters." / "Clear filters" and "Your challenge results will appear here." are good. "The lessons for this module are being written" is honest; add when or how the learner will know. The account `Dialog` "Delete your account?" should state in its body what is deleted and that it cannot be undone, if that is what the server does.
:::

::: {.rule #WRT-041 grade="C"}
**Keep in-flight messages to one short line and one action.** Glance conditions favor the first words of a line [@nielsen2006f], and flight-deck documentation research treats findability as a safety property [@degani1992typography]. Applied judgment.

*In LTF:* the Fly mode random-event alert (`border-4 border-warn`, pulse, beep) carries one sentence naming the event and one imperative. `Toast` titles in Fly mode should not have descriptions; if something needs explaining, it belongs in the Debrief.
:::

### Count the messages

Shneiderman's recommendations end with measurement: collect user performance data, such as how often each error condition occurs, and treat an error rate as a metric of system quality [@shneiderman1982designing]. He also recommends an acceptance test with the target users and a quality-control process for message wording. A message that fires often is a defect in the design that produces it, not only in its wording.

::: {.rule #WRT-042 grade="C"}
**Log how often each error, empty state and failed quiz item is shown, and treat a frequent one as a design defect.** Shneiderman recommends counting error conditions and testing messages with target users before release [@shneiderman1982designing]. A recommendation from practice, not a tested method.

*In LTF:* give each `ErrorState`, `Toast` and validation message a stable identifier, count them in the existing analytics if any, and count wrong answers per quiz option from saved quiz answers. A quiz option chosen by many learners points at the lesson section before it.
:::

### What this means for Learn to Fly

LTF's messages are better than most products'. The auth messages, the debrief's rubric-change message, the challenge filter empty state and `RootErrorPage` ("Reloading usually fixes it. If it keeps happening, please try again later.") all state a fact and an action. The weak point is the defaults. `ErrorState` falls back to "Something went wrong" with a connection hint everywhere a caller does not pass a message; `queryState.tsx` uses the same title as a hidden heading. Make callers pass a cause-specific message, and keep the default only for genuine network failures (WRT-035).

Write a short message catalog in the style guide: one line per state (lesson not found, module unpublished, server error, offline, save failed, rubric changed, session expired), each with its title, body and action, so new pages reuse wording rather than invent it. Apply WRT-038 and WRT-039 to `QuizBlock` by keeping the explanation required in the quiz schema (or making it required if the validator allows it to be omitted) and dropping the exclamation from "Correct!". In Fly mode, keep alerts to one line and one action (WRT-041). Then measure (WRT-042): the message that fires most is the next design fix.

## Labels, buttons and links

### The words that are the interface

Podmajersky defines UX writing as the process of creating the words in user experiences: the titles, buttons, labels, instructions, descriptions, notifications, warnings and controls that people see [@podmajersky2019strategic]. Her book treats those words as design material that serves the person using the product and the organization making it, with a stated ideal that words "pass unremembered while they help somebody to the thing they want" [@podmajersky2019strategic]. It is a practitioner's book, not research. Its usefulness here is the framing: a button label is not copy added to a design; it is part of the control.

Labels carry more of the meaning than designers expect. Wiedenbeck compared three versions of the same application, with text labels only, icons only, or both [@wiedenbeck1999use]. In the first session, performance was best with labels only and with icons plus labels; icons alone were clearly poorer, particularly in time and in references to help. By the second session the icon-only group had nearly caught up, and its retention penalty was described as short-lived. Perceived ease of use was consistently highest with icons plus labels [@wiedenbeck1999use]. It is one application and a modest sample of novices, but its direction matches other icon research: for beginners, the words do the carrying.

::: {.rule #WRT-043 grade="B"}
**Give every control a visible text label; let icons accompany labels, not replace them, for anything a beginner must get right.** Novices performed worse with icon-only buttons than with labeled ones in their first session, and rated icons with labels easiest to use [@wiedenbeck1999use]. One study with novices; the icon-only penalty shrank with practice.

*In LTF:* the `Header` nav, the `ThemeToggle` ("Day", "System", "Night") and the challenge Brief buttons are labeled; keep them so. Icon-only controls are acceptable for universal conventions (close, menu, dismiss X on `Toast` and `BetaBanner`) with an accessible name. `TypeIcon` on challenge cards uses generic glyphs, so it should always have the challenge type in text beside it or in its accessible name.
:::

### Say what the button does

A button label is a promise about what pressing it will do. The plain language and UX writing sources agree on its form: a verb, naming the action and if needed its object, in the words the learner would use [@podmajersky2019strategic; @plain2011federal]. Krug's satisficing observation adds the reason: the learner will press the first button that seems to fit [@krug2014dont]. Labels such as "OK", "Submit", "Continue" or "Yes" make the learner read the surrounding text to know what will happen; "Submit debrief" or "Start lesson 0.1" do not.

The label should match what happens. A label that says "Save" and also publishes, or "Continue" and also charges or deletes, is a dark pattern in miniature. For LTF, the stakes are lower but real: a learner who presses "Mark lesson complete" believes progress is saved, so if a visitor's press opens a sign-up prompt instead, the label should say so or the prompt should explain it.

::: {.rule #WRT-044 grade="C"}
**Label every button with a verb and its object, in words that match exactly what pressing it does.** UX writing practice and plain language guidance ask for direct, specific action words [@podmajersky2019strategic; @plain2011federal], and users act on the first plausible label [@krug2014dont]. Consensus guidance.

*In LTF:* keep "Start lesson 0.1", "Continue where you left off", "Submit debrief", "Clear filters", "Check answer" and "I'm set up, start flying". The completion panel's "Mark lesson complete" opens a sign-up prompt ("Save your progress") for visitors; that prompt's body says what an account does, which keeps the promise honest.
:::

### One action, one label, everywhere

Consistency is the heuristic that explained the most usability problems in Nielsen's analysis [@nielsen1994enhancing], and the federal guidelines' rule of one term for one thing applies to actions as much as to nouns [@plain2011federal]. If the same action has several labels, the learner must work out whether they are the same action. LTF's sign-up action currently appears as "Sign up" in the `Header`, "Sign up free" in `LessonParts.tsx`, "Create a free account" on the landing page, and "Sign up (free) to save your progress and challenge scores." in the `SignupBanner`. The log-in action is "Log in" everywhere, which is right.

Podmajersky's voice chart, discussed in the chapter on voice and tone, has a row for vocabulary (preferred and avoided words) precisely to settle questions like this before they multiply [@podmajersky2019strategic].

::: {.rule #WRT-045 grade="B"}
**Use one label for each action across the product, and record it in the vocabulary list.** Consistency was the largest single explainer of usability problems in Nielsen's analysis [@nielsen1994enhancing], and the federal guidelines require one term for one thing [@plain2011federal]. The analysis shows frequency, not effect size.

*In LTF:* pick one sign-up label (for example "Sign up free") and use it in `Header`, `SignupBanner`, the completion panel, the landing CTA band and `DebriefForm`'s "Log in to save your result" tip. Do the same for continuing ("Continue where you left off" on the landing, "Pick up where you left off" on `/login`) and for the debrief ("Finish and debrief", "Submit debrief").
:::

### Interface verbs: select, not click

GOV.UK's style guide says not to use "click" for interface actions "because not all users click"; it uses "select" [@govuk2026writing]. LTF's learners use a mouse, a keyboard, a touch screen on a tablet beside the sim, and a gamepad or joystick in the sim itself. Interface verbs should fit every device; physical verbs belong to the sim. In the sim, "press" suits keys and buttons and "move" suits a stick or lever, and the choice should follow how the control is operated.

::: {.rule #WRT-046 grade="C"}
**Write "select" for choosing things in LTF's interface, and reserve physical verbs for controls in the sim.** GOV.UK avoids "click" because not every user clicks [@govuk2026writing]. LTF is used by mouse, keyboard and touch. Standards guidance.

*In LTF:* lesson text that refers to the page says "select Check answer" or "open the Fly tab", never "click". Text that refers to the sim uses the verb for the control ("press the softkey", "move the throttle"), matching the procedure wording.
:::

### Link text that names the destination

The F-pattern follow-up asks for descriptive link text [@nielsen2006f]; readers scanning a page see links as landmarks, and screen-reader users often navigate by a list of links read out of context. "Read more", "here" and "this lesson" name nothing. A link should say where it goes, and if it leaves LTF, that it does.

::: {.rule #WRT-047 grade="C"}
**Make every link's text name its destination, so that it makes sense read alone.** Descriptive link text is among the structural remedies for unguided scanning [@nielsen2006f], and the cognitive accessibility note asks writers to help users understand what things are and how to use them [@seemanhorwitz2021making]. Standards and practitioner guidance.

*In LTF:* the `[[c4-3-full-stop-landing]]` internal link directive renders as "C4.3 Full-stop landing", which already names the destination. Apply the same standard to markdown links in lessons and to "Go deeper" resource titles; `MarkdownContent` underlines links in `text-accent`, so they are visible as landmarks.
:::

### Capitalization, punctuation and the small marks

Podmajersky's voice chart includes rows for grammar and for punctuation and capitalization, because these small choices are where inconsistency is most visible [@podmajersky2019strategic]. The VTEX writing guide that adopts her method, for example, avoids exclamation marks and ends sentences with a period [@podmajersky2019strategic]. The U.S. plain language design guidance on digital.gov says to emphasize only what matters, "otherwise you'll dilute its impact", to avoid all capital letters, and to avoid underlining except for links, where readers expect it [@uscongress2010plain].

Sentence case for buttons, headings and labels is the common convention in interface writing and is what LTF uses ("Mark lesson complete", "How a challenge works"). Title case would make every label look like a proper noun; all capitals make words harder to read and, in an aviation product, compete with the capitalized annunciator and checklist conventions that the content quotes.

::: {.rule #WRT-048 grade="C"}
**Use sentence case for every heading, button, label and title, and reserve capitals for proper nouns, abbreviations and quoted cockpit labels.** Voice charts fix capitalization and punctuation as part of a product's voice [@podmajersky2019strategic], and plain language design guidance avoids all capitals for emphasis [@uscongress2010plain]. Convention.

*In LTF:* keep sentence case as it is. The `eyebrow` utility applies uppercase through CSS, so source strings stay sentence case and screen readers read them normally; keep it that way rather than typing capitals into content. Checklist `action` values and sim labels such as `BOTH` or `STBY` keep the capitals the source uses.
:::

### Page titles and the browser tab

The page title is the label a learner sees in the browser tab, in history and in bookmarks, and it is what a screen reader announces on navigation. LTF's format is "Page title · Learn to Fly" (`usePageTitle.ts`). The `index.html` default title contains an em dash, which the project's own copy rule forbids in learner-facing text and which differs from the format the hook produces. The specific page title should come first, because the tab is narrow and the first words are what fits (WRT-002).

::: {.rule #WRT-049 grade="C"}
**Write page titles as the specific page name first and the product name last, in one format everywhere.** Readers see the first words of a line most [@nielsen2006f], and the browser tab shows only the first words. Convention applied.

*In LTF:* keep the `usePageTitle` format "Page title · Learn to Fly". Replace the em dash in `index.html`'s default title with the same middle-dot format. Lesson titles in the tab should be the lesson's title ("Welcome: how Learn to Fly works · Learn to Fly"), not the code alone.
:::

### What this means for Learn to Fly

LTF's labels are good individually and inconsistent collectively. The fix is a vocabulary list in the style guide (WRT-045), the first entries being the actions that already have several labels: sign up, continue, debrief. With it, a reviewer can check new labels against the list instead of against memory.

Keep labels on all controls a beginner must get right (WRT-043) and keep buttons as verb plus object (WRT-044). Add "click" to the validator's banned words for lesson text (WRT-046), and check link text in lessons and "Go deeper" resources (WRT-047). Fix the `index.html` title (WRT-049). None of this needs new components. It needs one list, one checker and a habit of looking at labels side by side.

## Voice and tone

### Voice is a set of decisions, not an adjective

Most product voice guides list adjectives ("friendly", "confident", "human") and stop. Podmajersky's method goes further: it turns the voice into a table that authors can apply [@podmajersky2019strategic]. Its columns are the product principles, which define "what the experience is trying to be to the people who use it" (as quoted by the VTEX guide that adopts the method). Its rows are concepts (the ideas the product wants to reinforce), vocabulary (preferred and avoided words), verbosity (how much to write), grammar, and punctuation and capitalization [@podmajersky2019strategic]. VTEX's published chart has two principles, "serious" and "authority", with entries such as "Less is more. Unless it's for cordiality" under verbosity and rules against exclamation marks [@podmajersky2019strategic].

The method separates voice from tone. Voice is the consistent, recognizable set of choices across the experience; tone is how that voice varies from one moment to another [@podmajersky2019strategic]. A reassuring note after a failed attempt and a firm sentence in a safety warning can both be in one voice if they share vocabulary, grammar and punctuation, and differ only in how much warmth or firmness they carry.

No experiment shows that a voice chart improves outcomes; the book's claims are practitioner experience, and a critical review questioned some of its broader claims about the UX writer's role while praising the voice and consistency framework [@podmajersky2019strategic]. Its value is procedural: when several authors write over several years, a chart makes the voice checkable.

::: {.rule #WRT-050 grade="C"}
**Write the voice down as a chart of principles against concepts, vocabulary, verbosity, grammar and punctuation, and review copy against it.** Podmajersky's voice chart turns a product's voice into decisions that authors can apply and reviewers can check [@podmajersky2019strategic]. Practitioner method with no outcome evidence.

*In LTF:* the plan frames the voice as a calm instructor. Turn that into a chart with two or three principles (for example calm, precise, honest) and fill each row: concepts (verified in the sim; for simulation only; you are learning a skill), vocabulary (the sim's control names; avoid "easy", "just", "simply"), verbosity (one action per line in Fly mode; short paragraphs in lessons), grammar (second person, active, present tense) and punctuation (sentence case, no exclamation marks in procedures, no em dashes).
:::

### One voice, several tones

LTF has moments that need different tones: the landing hero, a first lesson, a failed challenge, a safety callout, a server error, the course-complete panel. Voice-and-tone separation lets each moment adjust without the product sounding like several products [@podmajersky2019strategic]. The objective-tone result in Morkes and Nielsen's study argues that informational surfaces should sit at the plain, unexaggerated end [@morkes1997concise]. Brand and celebration moments can carry more warmth, but they should be the exception that the chart names, not the default.

::: {.rule #WRT-051 grade="C"}
**Keep one voice everywhere and vary only the tone, naming in the chart which moments may carry more warmth or more firmness.** Voice and tone separation is the basis of Podmajersky's method [@podmajersky2019strategic]; plain, objective text performed better than promotional text on informational tasks [@morkes1997concise]. Practitioner guidance with indirect support.

*In LTF:* warmer tone is reserved for the landing hero, `CourseBadge` and the course-complete panel, and the result card after a Gold. Firm tone is reserved for `safety` `Callout`s and Fly mode alerts. Everything else (lessons, Briefs, errors, settings) uses the neutral instructor tone.
:::

### Encouragement without hype

Beginners need encouragement, and the evidence warns against the usual way of giving it. Promotional exaggeration lowered measured usability [@morkes1997concise] and is said to lower credibility [@nielsen1997how]. Shneiderman's guidance asks messages to be positive without being wordy or critical [@shneiderman1982designing]. Reconciling these, the encouraging move is to tell the learner something true and useful about their progress: what they did, what to try next, that the step they found hard is one many learners find hard (if the data shows it). Words such as "easy", "just" and "simply" do the opposite of encouraging when the learner is struggling: they say the difficulty is the learner's fault.

::: {.rule #WRT-052 grade="C"}
**Encourage by stating what the learner did and what to do next, and never call a task easy.** Exaggeration hurts usability and credibility [@morkes1997concise; @nielsen1997how], and good messages are positive and constructive without judging the user [@shneiderman1982designing]. Banning "easy", "just" and "simply" is a common UX writing rule without direct experimental evidence.

*In LTF:* the Debrief result card states the tier and "Criterion by criterion" results; add one line on the criterion closest to the next tier, drawn from the rubric. The `DebriefForm` note "Score what you flew" is a good example of honest, direct encouragement. Add "easy", "just" and "simply" to the vocabulary list's avoided words.
:::

### Exclamation marks and celebration

LTF's interface uses exclamation marks in a few places: "Correct!" in `QuizBlock` and "Welcome aboard, {name}!" in the `DashboardPage` header. A voice chart is where such choices are settled; VTEX's chart, for one, bans them [@podmajersky2019strategic]. An exclamation mark is a tone marker. Used rarely, it marks a genuine moment; used on routine events, it inflates them and makes the real celebrations sound the same as the routine ones.

::: {.rule #WRT-053 grade="C"}
**Reserve exclamation marks for genuine achievements, and never use them in instructions, errors or routine feedback.** Voice charts settle punctuation as part of a product's voice, and the published example avoids exclamation marks entirely [@podmajersky2019strategic]. Convention, not evidence.

*In LTF:* change "Correct!" to "Correct." and keep the first-visit "Welcome aboard, {name}!" only if the chart lists the first dashboard visit as a celebration moment; otherwise use "Welcome aboard, {name}." The course-complete panel and a first Gold are the moments that can carry one.
:::

### Metaphor, humor and the aviation frame

LTF's copy borrows aviation framing in its structure: Brief, Fly and Debrief; "Day" and "Night" themes; a 404 headed "You've wandered off the taxiway"; a "kneeboard" on the reference hub. The craft and accessibility sources are cautious about figurative language. Orwell's first rule is never to use a figure of speech you are used to seeing in print, and he names dying metaphors as a mark of vague writing [@orwell1946politics]; GOV.UK discourages metaphors because they slow comprehension [@govuk2026writing]; the W3C cognitive accessibility note asks for literal language, because some readers do not understand metaphors or non-literal text [@seemanhorwitz2021making].

There is a distinction worth keeping. Aviation names for real structures (Brief, Debrief, kneeboard) are not metaphors for LTF's learners; they are the vocabulary of the subject, and the course teaches them. A joke heading on a 404 is a metaphor. It can stay as a brand moment if the body says literally what happened and what to do. Stock training phrases ("build good habits", "keep your eyes outside the cockpit") are the dying metaphors Orwell meant: replace them with the observation an instructor would actually make, and if the phrase itself is a term the learner must learn, define it.

::: {.rule #WRT-054 grade="C"}
**Use aviation's real names freely, keep jokes and metaphors to headings with a literal body beneath them, and replace stock training phrases with the concrete observation.** Orwell warns against worn figures, GOV.UK discourages metaphors, and the W3C note asks for literal language [@orwell1946politics; @govuk2026writing; @seemanhorwitz2021making]. Consensus guidance.

*In LTF:* keep "You've wandered off the taxiway" as the `NotFoundPage` h1, and make sure the body below it says literally that the page does not exist and offers the curriculum and the reference hub. Keep Brief, Fly, Debrief and kneeboard. In lessons, an idiom that is not itself a term gets rewritten.
:::

### Honesty is part of the voice

The product's most distinctive verbal trait is its honesty about itself: the `BetaBanner` ("Lessons and challenges are still being checked in the sim, so you may hit rough edges or content that changes."), "Draft · unverified" badges, "Last verified" lines, and the statement that the course badge "is not a pilot certificate and has no value for real-world flying". These are exactly the credibility signals that the web reading research says readers look for [@nielsen1997how], and they are written plainly, without hedging language piled on hedging language. The risk is inconsistency: each was written separately, and the voice chart should give them one pattern (a short plain statement of the limit, then what it means for the learner).

::: {.rule #WRT-055 grade="C"}
**State every limit of the product plainly, in one pattern: what is not yet true or not covered, then what it means for the learner.** Readers look for credibility signals and distrust promotion [@nielsen1997how], and the plain language sources ask for main ideas before conditions [@plain2011federal]. Consensus applied to LTF's existing practice.

*In LTF:* the `BetaBanner`, `UnverifiedWarning`, `DraftBadge`, the speeds page's "Not yet verified" callout, the course badge disclaimer and the simulation-only line in `navigation.ts` share this pattern. Write them from one template in the style guide and keep their wording aligned when any one changes.
:::

### What this means for Learn to Fly

LTF has a voice already: calm, direct, second person, honest about limits. What it lacks is a written chart, so the voice depends on whoever writes next. Write the chart (WRT-050) with the vocabulary list from the labels chapter as its vocabulary row. Name the tone moments (WRT-051): warmth on the landing hero, `CourseBadge` and Gold results; firmness in `safety` callouts and Fly mode alerts; neutral everywhere else.

Then make the small changes the chart implies: "Correct." for "Correct!" (WRT-053); "easy", "just" and "simply" on the avoided list (WRT-052); a literal body under the 404 joke (WRT-054); and one template for the honesty statements (WRT-055). The repository's `/unslop` command, which checks learner copy for text that reads as machine-written, is a natural place to apply the chart's avoided words and punctuation rules.

## Inclusive and accessible language

### Writing for readers with cognitive and learning disabilities

The W3C note Making Content Usable for People with Cognitive and Learning Disabilities is the most detailed account of how writing affects those readers [@seemanhorwitz2021making]. It supplements WCAG and is not required for conformance. It is organized as eight objectives with design patterns: help users understand what things are and how to use them; help them find what they need; use clear and understandable content; help them avoid mistakes and know how to correct them; help them focus; ensure processes do not rely on memory; provide help and support; and support adaptation and personalization. The objective on clear content lists thirteen patterns: use clear words; use a simple tense and voice; avoid double negatives or nested clauses; use literal language; keep text succinct; use clear, unambiguous formatting and punctuation; include symbols and letters necessary to decipher the words; provide a summary of long documents and media; separate each instruction; use white spacing; ensure foreground content is not obscured by background; explain implied content; and provide alternatives for numerical concepts [@seemanhorwitz2021making].

The note says the same measures help people with mental health conditions, people under temporary stress, people unfamiliar with the language or culture, and people new to the web [@seemanhorwitz2021making]. A beginner flying a simulator with a page open beside it is under temporary stress by definition. The note is consensus guidance built on user needs and the working group's experience, not a body of controlled experiments, and its status as a Working Group Note means it may be revised [@seemanhorwitz2021making].

::: {.rule #WRT-056 grade="C"}
**Apply the W3C clear-content patterns to all learner-facing text: clear words, simple tense and voice, literal language, succinct text, one instruction per step and a summary for long content.** The W3C cognitive accessibility note gives these patterns as the basis of usable content for people with cognitive and learning disabilities and says they help stressed and non-native readers too [@seemanhorwitz2021making]. Consensus guidance, not experiment.

*In LTF:* most of these patterns are already rules in earlier chapters (WRT-013, WRT-016, WRT-024, WRT-027, WRT-054). Reference the note in the style guide as the reason they apply to every page, including Fly mode, account pages and errors, not only lessons.
:::

### Do not rely on memory

The note's objective that processes should not rely on memory has a direct writing consequence: show the information a task depends on at the task, rather than referring the learner to an earlier lesson [@seemanhorwitz2021making]. Nielsen's analysis found "recognition rather than recall", in the form of seeing and pointing rather than remembering and typing, to be the single largest explainer of serious usability problems [@nielsen1994enhancing]. For a beginner, "as you learned in Lesson 1.4" is a memory test.

::: {.rule #WRT-057 grade="B"}
**Show the numbers, names and settings a task depends on at the task, and never make the learner recall them from an earlier page.** Recognition over recall was the largest explainer of serious usability problems in Nielsen's analysis [@nielsen1994enhancing], and the W3C note asks that processes not rely on memory [@seemanhorwitz2021making]. Single-rater analysis plus consensus guidance.

*In LTF:* a challenge Brief and Fly tab show the values the challenge depends on, through `{{vspeed.*}}` and `{{aircraft.*}}` tokens and the `KeyNumbers` panel, rather than "use the speeds from Lesson 1.4". A lesson that builds on an earlier term repeats its short gloss or shows it as a glossary chip.
:::

### Numbers: keep them, and say what they mean

The note's pattern "provide alternatives for numerical concepts" responds to readers with impaired numerical comprehension, who may not understand percentages and need words [@seemanhorwitz2021making]. In a flying course the numbers are the content, so LTF cannot replace them. It can add a plain statement of what a number means for the learner beside it. Any such comparison is itself an aviation claim and needs a source. Units must be written the way the source and the cockpit show them, and the project's copy rules (knots, feet, nautical miles, inHg, MSL or AGL on every altitude) apply.

::: {.rule #WRT-058 grade="C"}
**Keep every aviation number, written through its token with its unit, and add a plain statement of what it means for the learner where that meaning is sourced.** The W3C note asks for alternatives to numerical concepts for readers who struggle with numbers [@seemanhorwitz2021making]; in a domain where numbers are the content, an explanation beside the number serves the same need. Adapted consensus guidance.

*In LTF:* the challenge result's percent and tier both appear in words as well as numerals ("Gold", "Silver", "Bronze"), which is right. Lesson text that gives a speed or limit uses the token and, where the lesson's sources support it, one sentence on what happens near that value.
:::

### Abbreviations, per page

GOV.UK explains an abbreviation in full the first time it appears on a page, except for very well-known ones [@govuk2026writing]; the federal guidelines ask writers to minimize abbreviations [@plain2011federal]. Aviation is dense with abbreviations, and LTF pages are opened from links, search results and the reference hub, not only in sequence. A learner who lands on a challenge page from a search has not read the lesson where an abbreviation was spelled out.

::: {.rule #WRT-059 grade="C"}
**Spell out every abbreviation at its first use on each page, not once per course.** GOV.UK requires abbreviations to be explained on first use on a page, and the federal guidelines ask for few abbreviations [@govuk2026writing; @plain2011federal]. Each LTF page can be the learner's first. Standards guidance.

*In LTF:* the first mention of an abbreviation in a lesson, Brief, reference panel or glossary definition is followed by its expansion in parentheses, or is itself a glossary chip. C1.1's "the right-hand screen (MFD)" and "EIS (the engine strip down the left edge of the MFD)" show the pattern; the check is that each page does it, even if the previous page already did.
:::

### Bias-free language

Microsoft's style guide gives concrete rules for inclusive product writing [@microsoft2024bias]. For generic references it says not to use he, him, his, she, her or hers, and to rewrite with the second person, a plural, an article instead of a pronoun, a role, or "person"; if none of those works, singular "they" is acceptable, and "he/she" and "s/he" are not. It replaces gendered terms ("chair" for "chairman", "staff" for "manpower", "synthetic" for "manmade"), asks for names reflecting a variety of genders and cultures in examples, avoids stereotypes in roles, and avoids examples that assume a Western or affluent lifestyle. On disability it asks writers to focus on people rather than conditions, to avoid words that imply pity such as "suffering from", and not to mention a disability unless it is relevant [@microsoft2024bias]. It is a corporate style rule set without cited experiments, and term preferences change over time.

Older aviation texts sometimes use a gendered default for the pilot. LTF can follow the guide in its own prose without touching sourced wording: address the learner as "you", use "the pilot" and "they" for hypothetical others, and vary names in scenarios. Standard phraseology and checklist wording stay as their sources give them (WRT-012), and any term with a fixed technical meaning keeps it.

::: {.rule #WRT-060 grade="C"}
**Write about people without gendered defaults, stereotypes or pity, and record in the style guide which sourced terms are exempt.** Microsoft's style guide gives concrete replacements and rules for generic pronouns, examples and disability language [@microsoft2024bias]. A style standard without experimental evidence.

*In LTF:* lessons address "you"; scenario characters (other pilots, controllers, passengers) get varied names and singular "they" when generic. Accessibility help text and any copy about medical topics follows the people-first rule. Official terms and quoted regulation text are listed as exceptions so authors do not rewrite quotations.
:::

### What this means for Learn to Fly

The accessibility of LTF's writing is mostly a consequence of the rules in earlier chapters, and the code already provides much of the support the W3C note asks for: a theme setting, reduced motion, glossary popovers, summaries in front matter. What is missing is a writing check per page rather than per course. Add three review questions to the content checklist: does this page spell out each abbreviation at first use (WRT-059); does it show the numbers and names the task depends on rather than referring back (WRT-057); and does every number appear through its token with its unit (WRT-058)?

For people language, add a short section to the style guide (WRT-060) with the pronoun rule, a note on scenario names and the list of exempt sourced terms. The `glossary.yaml` entries are short enough (80 words or fewer) to be read in a `Popover`; keep them literal (WRT-056), because the glossary is where a stressed learner goes when a word fails.

## Measuring and testing writing

### What readability formulas measure

Flesch's 1948 paper proposed predicting how hard a passage is to read from two countable features, average sentence length and average word length in syllables, giving a "reading ease" score on which higher numbers mean easier text [@flesch1948new]. It replaced formulas that depended on vocabulary lists, because syllables and sentences can be counted without them. As reprinted in the 1975 Navy report, the formula is Reading Ease = 206.835 minus 1.015 times words per sentence minus 0.836 times syllables per 100 words [@kincaid1975derivation]; secondary sources give the syllable constant as 84.6 per word (0.846 per 100 words), so one of the printed constants may be a slip, and Flesch's own paper should be checked before the constant is quoted [@flesch1948new]. The familiar band labels ("very easy" and so on) are conventions of later software, not findings of the paper.

The grade-level version most writing software reports came from the Navy study by Kincaid and colleagues [@kincaid1975derivation]. They tested 531 trainees at four technical schools, mostly new enlistees and recent high school graduates, on 18 passages (3,067 words in all) from Navy training manuals, using a cloze test in which every fifth word was deleted, and regressed the passages' scaled grade levels on text features. The new Flesch grade-level formula is 0.39 times words per sentence plus 11.8 times syllables per word minus 15.59. The recalculated formulas predicted grade levels about one to one and a half grades below the originals on the test passages, and the authors state that readability formulas are only accurate to within about one grade level [@kincaid1975derivation].

DuBay's long review defends the formulas against their critics [@dubay2004principles]. He reports that surface features (word difficulty and sentence length) remain the best simple predictors of how hard a text is for readers; in Gray and Leary's 1935 study of 80 style variables, average sentence length correlated -0.52 with difficulty. He also shows the formulas' limits: different formulas give different grade levels for the same text because they were calibrated to different criteria, with scores for four paragraphs in one example ranging from 8.9 to 12.3 [@dubay2004principles].

### What they cannot see

Redish's commentary on Klare's review is the standard statement of the case against using formulas to judge or improve documents [@redish2000readability]. The formulas were built for children's school texts, not adult technical documentation; they ignore differences between readers; they ignore content, organization, layout and retrieval aids such as headings, lists and tables; and they reward what can be counted over what drives comprehension. Writing to the formula (short choppy sentences, avoiding necessary terms) can make a text harder to use. She favors usability testing and reading protocols with real readers [@redish2000readability]. DuBay replies that critics offer little evidence that writing to the formula is widespread and that testing alone cannot locate the cause of a failure [@dubay2004principles]. Both sides agree on the practical point: a formula is an estimate, to be combined with testing.

For LTF there are three specific reasons not to use a score as a gate. Aviation vocabulary raises the syllable count of words the learner must learn ("airspeed indicator", "altimeter setting"), so a score would punish exactly the terms the course teaches. Short, fragmented sentences can score well while being incoherent. And checklists, radio calls and numeric limits are not prose; the formula means nothing for them [@flesch1948new; @kincaid1975derivation].

::: myth
**"A lower grade level means a clearer text."** Readability formulas count sentence and word length only; they cannot see organization, coherence, layout or the reader's prior knowledge, are accurate only to about one grade level, and disagree with each other on the same passage [@kincaid1975derivation; @dubay2004principles; @redish2000readability]. Rewriting to lower a score can produce choppy text that is harder to follow.
:::

::: {.rule #WRT-061 grade="B"}
**Use readability scores only as a report to authors that flags outlier passages, never as a pass or fail gate and never shown to learners.** Surface-feature formulas predict the difficulty of continuous prose with modest accuracy [@dubay2004principles], are accurate only to about one grade level [@kincaid1975derivation], and ignore organization, content and layout [@redish2000readability]. The validity evidence is real but narrow.

*In LTF:* if `content:validate` reports a grade level, it reports it per lesson section as a warning, compares each section with its neighbors, and excludes checklists, tables, quiz options and token-heavy lines. A section several grades above the rest of its lesson is read aloud by its author; the number is never "fixed" directly.
:::

### Testing with readers: paraphrase, cloze and tasks

The federal guidelines name three testing methods [@plain2011federal]. Paraphrase testing uses individual interviews, suits short documents and web pages, and is run with 6 to 9 people per document: the participant reads to a stopping point and says in their own words what it means, and the tester does not correct them or ask yes-or-no questions. Usability testing suits longer documents and sites where finding information matters, with three people matching simple criteria per round, run in rounds. Focus groups are said to be more useful before writing than for testing. These numbers are practical rules of thumb, not power calculations [@plain2011federal]. The digital.gov guidance adds controlled comparative studies and says to plan to test at least twice [@uscongress2010plain].

The cloze test, introduced by Wilson Taylor in 1953, deletes every fifth word and counts how many the reader restores; DuBay reports that a cloze score of 35 percent or more marks the level for assisted reading [@dubay2004principles]. It is the method the Navy study used to calibrate its formulas [@kincaid1975derivation]. It is cheap, needs no equipment and works on running prose; it does not work on lists, labels or quiz stems.

Shneiderman's recommendation for messages is the same idea at the smallest scale: an acceptance test with the target users before release [@shneiderman1982designing]. Redish's program puts testing at the end of every writing process [@redish2012letting]. For an LTF lesson, the questions that matter are task questions: can the learner find the next action, does the sentence use the term the sim uses, can they do the task after reading?

::: {.rule #WRT-062 grade="C"}
**Paraphrase-test every high-stakes explanation with a handful of non-pilots before publishing, and treat each misunderstanding as a defect in the text.** The federal guidelines recommend paraphrase testing with 6 to 9 participants per document, without correcting them [@plain2011federal], and plain language guidance says to test at least twice [@uscongress2010plain]. The counts are rules of thumb.

*In LTF:* for each lesson section that explains a concept a later challenge depends on, ask several beginners to read to the section's end and say what it means. Record misreadings in the lesson's verification record under `docs/verification/` alongside the sim checks, and revise before `published: true`.
:::

::: {.rule #WRT-063 grade="C"}
**Before releasing a challenge, give its Brief, steps and failure messages to two or three beginners and ask what they would do next.** Shneiderman recommends acceptance tests of messages with target users [@shneiderman1982designing], and usability testing in small rounds is the federal guidelines' method for documents where finding matters [@plain2011federal]. Practice recommendation.

*In LTF:* the content guide requires flying a challenge three times in the sim before publishing; add one round in which a beginner reads the Brief and the Fly tab with the sim open and narrates. Where they hesitate, the wording changes.
:::

::: {.rule #WRT-064 grade="C"}
**Use cloze tests on key explanatory passages as a cheap check of whether non-pilots can follow them.** The cloze procedure is a validated comprehension measure for running prose and was used to calibrate the Navy formulas [@dubay2004principles; @kincaid1975derivation]. It does not apply to lists, labels or checklists. Method guidance.

*In LTF:* for a section flagged by WRT-061 or by a failed paraphrase test, delete every fifth word and ask several non-pilots to fill the gaps; sentences where most people fail are rewritten first.
:::

### Measure understanding, not clicks

Podmajersky's book describes measuring copy with A/B tests, web analytics and key performance indicators [@podmajersky2019strategic]. A/B tests measure behavior, such as clicks, not understanding, and need enough traffic to detect a difference; a product as small as LTF will rarely have it. The better measures for a learning product are learning measures: quiz results per item and option, challenge success per criterion, and how often each error message fires (WRT-042). DuBay's lesson for technical communicators applies with special force: the more critical the information is for safety, the greater the need for readability [@dubay2004principles].

::: {.rule #WRT-065 grade="C"}
**Judge copy changes by whether learners understood and completed the task, using quiz, challenge and message data, not by clicks.** Commercial copy testing measures clicks and conversions [@podmajersky2019strategic], which say little about understanding; safety-relevant information needs the strictest readability checks [@dubay2004principles]. Judgment from the sources.

*In LTF:* a wording change to a lesson section is evaluated by the wrong-answer rate on the quiz that follows it and the success rate of the criteria it supports. Do not run A/B tests on safety callouts or procedure wording.
:::

### What this means for Learn to Fly

LTF's content pipeline is well placed to add writing checks, because every lesson is Markdown with front matter and every challenge is structured YAML. Add three things. First, a report-only readability pass that flags outlier sections and excludes non-prose (WRT-061). Second, a beginner reading step in the verification process, recorded in `docs/verification/` next to the sim checks: paraphrase tests for key explanations (WRT-062), a narrated Brief-and-Fly read for each challenge (WRT-063), and cloze tests where a section keeps failing (WRT-064). Third, per-item quiz data and per-message counts as the measures of whether wording works (WRT-065, WRT-042).

None of these replaces the aviation accuracy review that `/review-lesson` performs. A lesson can be perfectly clear and wrong; another can be correct and unreadable. The two reviews answer different questions and both are needed before `published: true`.

## Decision list and review checklist

### Decisions this Part settles for Learn to Fly

1. **Reading modes decide format.** Reference pages, the Brief, the Fly tab, `FlyModePage`, buttons and messages are written for a scanning reader with a task; lesson explanations are continuous prose under front-loaded headings (WRT-001, WRT-004).
2. **The first words carry the information.** Headings, steps, criteria labels, quiz options and paragraphs start with the words that distinguish them (WRT-002, WRT-023).
3. **No hype below the landing hero.** Lessons, Briefs, quiz feedback and Fly mode state what the learner will do, without promotional language (WRT-006, WRT-052).
4. **Warnings are full sentences in a `safety` `Callout`.** They are never a bullet in a step list, and their negations are spelled out (WRT-005, WRT-019).
5. **One written standard.** `content/README.md` (or a linked style page) opens with the outcome test from the Plain Writing Act, lists the adopted plain language rules with LTF examples, names the exceptions and includes the testing step (WRT-007, WRT-050).
6. **Restructure before rewording.** A failing section is fixed by moving the point first, splitting topics and moving exceptions out, before any word swaps (WRT-008, WRT-010).
7. **One register for beginners and reference.** `SpeedsPage`, `KeyNumbers` and later modules keep the plain voice of L0.1 (WRT-009).
8. **Technical terms are kept, glossed once per page, and used consistently.** `glossary.yaml` and the glossary chips are the system; sim labels are the canonical names; slashes between alternatives are replaced by words (WRT-011, WRT-020, WRT-059).
9. **Sourced wording is never "plained".** Checklist items, radio phraseology, limits and quoted regulation keep their source wording, with plain explanation beside them (WRT-012, WRT-060).
10. **Sentence rules are defaults, not lint errors.** Short familiar words, verbs over nouns, active voice where the reader must act, positive form and main idea first (WRT-013, WRT-014, WRT-015, WRT-016, WRT-017).
11. **A fixed modal scale.** "Must" only with a cited source; "should" for technique; "can" for options; "need" for sim requirements (WRT-018).
12. **Headings work out of context.** `SectionNav`, the mobile section `Select` and `PageHeader` titles state the topic or action; lookup surfaces use the learner's question or task (WRT-021, WRT-022).
13. **Lists follow meaning.** Numbers for ordered steps, bullets otherwise, a lead-in line for every list, parallel items (WRT-024).
14. **Openings carry the point.** No welcome text, previews or anecdotes before the first idea or action; objectives are a short verb-first list; the `summary` and challenge `goal` state the point first (WRT-025, WRT-026, WRT-027).
15. **Instructions sit at the point of action and the learner acts early.** Critical setup is repeated where it is needed, and each lesson reaches a "Try" within its first two sections (WRT-028, WRT-029).
16. **Steps have one action, one pattern, a checkpoint and a recovery.** Groups end with a completion line; most consequential steps come early in LTF's own flows; sourced checklist order is not changed (WRT-030, WRT-031, WRT-032).
17. **Interface instructions are a design smell.** A widget or form that needs instructions is relabeled or redesigned first (WRT-033).
18. **Fly mode is one-glance text.** One short line per step, one sentence for the goal, one line and one action per alert (WRT-034, WRT-041).
19. **Messages state cause and action.** Callers of `ErrorState` pass cause-specific messages; invalid input states the accepted values; a message catalog in the style guide holds the standard wording (WRT-035, WRT-036, WRT-040).
20. **Form messages appear beside the field, after the learner finishes, and persist.** No validation while typing; no success ticks on simple fields (WRT-037).
21. **Every quiz item has an explanation that names the correct answer and its reason, and verdicts are calm.** "Correct." replaces "Correct!" (WRT-038, WRT-039, WRT-053).
22. **Messages and wrong answers are counted.** The most frequent is the next design fix (WRT-042, WRT-065).
23. **Every control has a visible label.** Icon-only controls are limited to universal conventions with accessible names (WRT-043).
24. **Buttons say what they do, and each action has one label.** A vocabulary list in the style guide fixes the labels for sign up, continue and debrief first (WRT-044, WRT-045).
25. **"Select" in the interface, physical verbs in the sim; descriptive link text; sentence case; one page-title format.** The `index.html` default title loses its em dash (WRT-046, WRT-047, WRT-048, WRT-049).
26. **A voice chart with named tone moments.** Warmth on the landing hero, `CourseBadge`, course completion and Gold results; firmness in safety content; neutral elsewhere; "easy", "just" and "simply" avoided (WRT-050, WRT-051, WRT-052).
27. **Aviation names stay; jokes get a literal body; stock phrases go.** The 404 keeps its heading and gains a literal explanation (WRT-054).
28. **Honesty statements share one template.** Beta, draft, unverified, not-a-certificate and simulation-only messages state the limit, then what it means (WRT-055).
29. **Accessibility of language is checked per page.** Clear-content patterns, no reliance on memory, numbers through tokens with units and sourced meaning, abbreviations spelled out on each page, people-first and bias-free wording (WRT-056, WRT-057, WRT-058, WRT-059, WRT-060).
30. **Readability scores are author reports only.** No gate, no learner display, non-prose excluded (WRT-061).
31. **Beginners read before publishing.** Paraphrase tests for key explanations, a narrated Brief-and-Fly read for each challenge, cloze tests where sections keep failing, recorded in `docs/verification/` (WRT-062, WRT-063, WRT-064).
32. **Copy is judged by learning, not clicks.** Quiz and challenge outcomes are the measures; no A/B tests on safety or procedure wording (WRT-065).

### Review checklist

Run these questions against a pull request that adds or changes learner-facing text (lessons, challenges, checklists, glossary, components with copy, messages) or against a page. A "no" needs a reason recorded in the pull request. Aviation accuracy is reviewed separately with `/review-lesson`; this list is about the writing.

#### Reading and structure

- Does each heading, step, criterion label and quiz option still make sense, and differ from its neighbors, when everything after its second word is covered? (WRT-002)
- Is lookup and procedure content in lists, tables or steps, and explanatory content in short paragraphs? (WRT-001, WRT-004)
- Is every warning a full sentence in a `safety` `Callout`, with its consequence and a spelled-out "not"? (WRT-005, WRT-019)
- Is there any promotional or encouraging hype in a lesson, Brief, quiz or Fly mode text? (WRT-006)
- Do lesson headings work alone in `SectionNav`, and do lookup headings use the learner's question or task? (WRT-021, WRT-022)
- Does each paragraph have one topic stated in its first sentence, and are paragraphs over five sentences or sentences over 25 words justified? (WRT-023)
- Are ordered steps numbered, unordered items bulleted, every list introduced by a lead-in line, and items parallel? (WRT-024)
- Does the page open with the idea or action, with no welcome, preview or anecdote first, and are objectives a short verb-first list? (WRT-025, WRT-026)
- Does a long page start with a one- or two-sentence summary, and does a challenge `goal` state the task first? (WRT-027)

#### Plain language and words

- Is the text clear, concise, well organized and right for a beginner in this subject? (WRT-007)
- If a section was revised, was it restructured before it was reworded, and were exceptions moved out of the main line? (WRT-008, WRT-010)
- Is the register the same as the rest of the course, with technical terms kept and padding removed? (WRT-009, WRT-013)
- Is each technical term glossed at its first use on this page and then used without synonyms? (WRT-011, WRT-020)
- Is any checklist item, radio call, limit or quotation reworded from its source? (WRT-012)
- Has dense source phrasing been rewritten for a beginner while keeping the fact exact? (WRT-014)
- Are actions in verbs, subjects and verbs close, and the active voice used wherever the reader must act? (WRT-015, WRT-016)
- Does each instruction say what to do before what not to do, and the main case before exceptions? (WRT-017)
- Does every "must" have a cited source, and are "should", "can" and "need" used on the fixed scale? (WRT-018)
- Are there slashes between alternatives? (WRT-020)

#### Instructions and Fly mode

- Is every instruction placed where the learner needs it, and does the lesson reach a "Try" within its first two sections? (WRT-028, WRT-029)
- Does each step have one action, with every step in the list following the same verb-first or object-first pattern? (WRT-030)
- Do steps with visible results say what the learner should see and what to do if they do not? (WRT-031)
- Do step groups end with a completion line, without reordering sourced checklist items? (WRT-032)
- Does any widget or form rely on instructions that a better label would remove? (WRT-033)
- Can each Fly mode step and alert be read in one glance, with one action per alert? (WRT-034, WRT-041)

#### Messages and feedback

- Does each error message say what happened in the learner's terms and what to do, without blame, codes or alarm, and is the `ErrorState` default replaced where the cause is known? (WRT-035)
- Does each input error state the accepted values or format? (WRT-036)
- Do form messages appear beside the field after the learner finishes it, persist until fixed, and avoid success ticks on simple fields? (WRT-037)
- Does every quiz item have an explanation that names the correct answer and its reason, and is the verdict calm? (WRT-038, WRT-039)
- Does each empty state say why it is empty and what fills it, and each confirmation what happens and whether it can be undone? (WRT-040)
- Does each new message have a stable identifier so its frequency can be counted? (WRT-042)

#### Labels, voice and inclusion

- Does every control a beginner must get right have a visible text label? (WRT-043)
- Does every button name its action and object, match what it does, and use the label in the vocabulary list? (WRT-044, WRT-045)
- Does the text say "select" for interface actions and physical verbs only for sim controls? (WRT-046)
- Does every link name its destination? (WRT-047)
- Are headings, buttons and titles in sentence case, with capitals only for proper nouns, abbreviations and quoted labels? (WRT-048)
- Does the page title follow "Page title · Learn to Fly", with no em dash? (WRT-049)
- Does the copy match the voice chart, with tone shifts only in the named moments, no "easy", "just" or "simply", and no exclamation marks outside celebrations? (WRT-050, WRT-051, WRT-052, WRT-053)
- Are metaphors limited to headings with a literal body, and stock training phrases replaced? (WRT-054)
- Does any statement of a product limit follow the honesty template? (WRT-055)
- Does the text follow the clear-content patterns, show what the task depends on rather than referring back, and give numbers through tokens with units? (WRT-056, WRT-057, WRT-058)
- Is each abbreviation spelled out at its first use on this page? (WRT-059)
- Is the text free of gendered defaults, stereotypes and pity language, with exempt sourced terms left alone? (WRT-060)

#### Testing

- If a readability score is reported, is it used only to flag outlier sections for the author? (WRT-061)
- Has a key explanation been paraphrase-tested with beginners, and has a new challenge's Brief and Fly tab been read aloud by one? (WRT-062, WRT-063)
- For a section that keeps failing, has a cloze test been run? (WRT-064)
- Is the change judged by quiz and challenge outcomes rather than clicks? (WRT-065)
