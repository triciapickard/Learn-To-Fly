# The Science of Learning: Load and Memory

This Part covers two bodies of research that decide whether a lesson works: how much a beginner can process at once (cognitive load theory and the cognitive theory of multimedia learning), and what makes knowledge last after the page is closed (forgetting, spacing, retrieval practice, interleaving and the learning versus performance distinction). Learn to Fly teaches a complete beginner, in short lessons read beside a running simulator, to do things that must be remembered weeks later in a cockpit. Both bodies of research bear directly on that job. The first governs the layout of `LessonPage`, the design of every widget in `src/features/widgets/` and the screens of `FlyModePage`. The second governs `QuizBlock`, the order of lessons and challenges, the dashboard's measures of progress, and the practice hub that `v2.md` plans.

The evidence is uneven and the Part says so rule by rule. Spacing and testing rest on large meta-analyses and replicate well. The worked-example and split-attention effects replicate across many small experiments, mostly from one research group. Several multimedia principles rest on one or a few laboratory studies with college students and lessons a few minutes long, and the theory that explains them is contested. Grades follow the brief's scale (A replicated, B some evidence, C expert consensus, D contested). Use the rules as defaults that need a reason to break, test the ones graded B or lower against LTF's own learners where you can, and never quote an effect size in learner copy.

## Working memory, long-term memory and the chunk

### Two memories and a bottleneck

Every rule in the first half of this Part starts from one architectural claim. Sweller, van Merriënboer and Paas, the founders of cognitive load theory, state it as resting on uncontroversial facts about memory: all novel information is first processed by a working memory that is limited in both capacity and duration, and is then stored in a long-term memory that is effectively unlimited [@sweller2019cognitive]. Once information is organized in long-term memory, the working memory limits "disappear" for that information, which transforms what a person can do. A fluent reader treats a word as one element; a beginner treats the same word as many interacting letters and sounds. The limit is severe for what is new and almost absent for what is known.

The 2019 update grounds this in five principles taken from evolutionary psychology: an information store (long-term memory), borrowing and reorganizing (most knowledge comes from other people), randomness as genesis (generate and test when no one can be borrowed from), narrow limits of change (working memory is tiny for novel information) and environmental organizing and linking (organized knowledge has no known working memory limit) [@sweller2019cognitive]. The authors tie explicit instruction to biologically secondary, domain-specific knowledge such as reading. The evolutionary framing is a theoretical commitment that has not been checked against independent evidence in the sources behind this Part, so treat it as the theory's self-description. The architecture underneath it (a narrow channel for new material and a vast store for organized knowledge) is the part designers can lean on.

The earlier 1998 statement of the theory gave long-term memory an unusual central role, drawing on De Groot's work with chess players: working memory is limited when it handles novel information but effectively unlimited when it handles organized information retrieved from long-term memory [@sweller1998cognitive; @sweller2019cognitive]. That is why the same page can overload a beginner and bore a pilot. The difference is not intelligence; it is what each brings from long-term memory.

### The parts of working memory

Baddeley's multicomponent model is the version of working memory that both cognitive load theory and multimedia learning theory borrow. It describes a brain system that provides temporary storage and manipulation of the information needed for complex tasks such as comprehension, learning and reasoning, and it divides that system into a central executive (an attention-controlling system) and two subsidiary stores: a visuospatial sketch pad that manipulates visual images and a phonological loop that stores and rehearses speech-based information [@baddeley1992working]. The phonological loop is, in Baddeley's abstract, necessary for acquiring native and second-language vocabulary.

Instructional researchers use the model to argue that words heard and pictures seen draw on partly independent processors, so that effective capacity can rise when both are used [@sweller2019cognitive]. The 1998 paper, as quoted by de Jong, put the gain as appreciable but "less than purely additive" [@dejong2010cognitive]. Two cautions travel with this argument. Mayer and Moreno warn that a verbal channel must not be equated with an auditory one, because printed words are verbal too [@mayer2003nine]. And the model's use to explain the modality effect is itself challenged: a 2012 reanalysis by Reinwein in the *Journal of Psycholinguistic Research* argued that the effect cannot rest on Baddeley's model or on Penney's separate-streams account, and that a different explanation is needed (the modality chapter, "Time, pace and the ear", returns to it). De Jong adds that the theory never says whether load is measured against total capacity when two channels are used [@dejong2010cognitive]. The model is a good map of where conflicts can arise (two visual sources competing, speech competing with speech). It is not a promise that adding narration will help.

### How many things at once

Miller's 1956 essay observed that two different measures, the number of categories of a single dimension a person can reliably judge and the number of items they can repeat back, both landed near seven [@miller1956magical]. Miller himself was skeptical of the number. He proposed to withhold judgment about whether anything deep lay behind it and suspected it was "a pernicious, Pythagorean coincidence". What he did insist on was recoding: grouping input into larger units, which he called chunks, raises effective capacity. His units were bits and chunks, and his limits applied to memory span and to judging one physical dimension. The paper gives no rule for menus, page elements or navigation.

Cowan's 2001 target article is the standard correction [@cowan2001magical]. Its abstract says Miller's seven "was meant more as a rough estimate and a rhetorical device than as a real capacity limit". Cowan assembles data from many procedures suggesting a smaller, real limit of three to five chunks, with a mean of about four and individual scores from about two to about six, and proposes that the limit belongs to the focus of attention. He is careful about the conditions under which the pure limit can be seen: when overload restricts chunks to single items, when recoding is blocked (for example by preventing rehearsal), in performance discontinuities, and in indirect effects. Outside those conditions, strategies and long-term memory combine items into chunks of unknown size and produce higher, compound estimates; Miller's seven survives as a valid compound figure. The article was published with open peer commentary, and some commentators argue the data do not support a fixed capacity at all, proposing instead that capacity is limited by how precisely the temporal and spatial context of items is specified [@cowan2001magical].

The design consequence is narrower than the folklore. The number that matters is how many new, unfamiliar, interacting pieces a learner must hold at once while reasoning, and it is small. It is not a count of visible things, because what stays on screen does not need to be held.

::: myth
**"People can hold seven plus or minus two items, so menus, nav bars and lists should have no more than seven."** Miller's own paper calls the recurring seven a possible coincidence and offers no design rule; his finding concerned memory span and absolute judgment, not items displayed and available for re-reading [@miller1956magical]. The best current estimate of pure capacity is smaller (about four chunks) and appears only under conditions that block chunking [@cowan2001magical]. A visible list is read, not remembered, so its length is a question of scanning and choice (covered in the Part on the quantitative laws of interaction), not of memory span.
:::

::: {.rule #LRN-001 grade="B"}
**Introduce no more than one or two new, interacting concepts before the learner has worked with them.** Capacity for novel material is small, about three to five chunks under controlled conditions [@cowan2001magical], and the limit applies to new information, not to organized knowledge already in long-term memory [@sweller2019cognitive]. The grade is B because the capacity estimate is well replicated but the step from it to a lesson's pacing is an inference, and the commentaries dispute the fixed number. Do not write "three to five" into a spec as a hard count; count interacting new elements and keep the count low.

*In LTF:* `v1.md` Section 12.4 already says "one new concept per lesson section". Keep it, and apply it to widgets too: a `pitch-power` scenario that changes pitch, power and trim at once asks the beginner to track three new relationships. Let the first scenario move one control.
:::

::: {.rule #LRN-002 grade="B"}
**Do not cite "seven plus or minus two" to cap the number of nav items, cards, tabs or answer options.** The paper behind the number disclaims it as a design limit [@miller1956magical], and the memory-span finding does not apply to items that stay visible [@cowan2001magical]. Choose list lengths from scanning, grouping and decision cost.

*In LTF:* the five `Select` filters on `ChallengesPage`, the header nav and the `ReferenceSections` rail are visible lists. Review them for grouping and clarity, not against a memory limit.
:::

### Chunks, schemas and why expertise changes everything

The chunk is the hinge between the two memories. Long-term memory can combine items into larger chunks of no fixed size, which is why the pure limit appears only when recoding is blocked and why expertise matters so much [@cowan2001magical]. Miller's clearest demonstration was recoding: people who learned to recode binary digits in pairs or triples could recall far more of them, because the span in chunks stays roughly constant while the information per chunk grows [@miller1956magical].

Cognitive load theory calls the stored, organized chunks schemas. Kalyuga and colleagues describe the mechanism in plain terms: experts hold schemas that let them treat a whole configuration as one element in working memory, while novices must hold its parts separately [@kalyuga2003expertise]. Sweller and Cooper's first algebra experiment shows what this looks like: more experienced students had better representations of equations, measured by how well they could recall equations and sort perceptually similar ones by the way they are solved [@sweller1985use]. The theory names the property of material that drives load element interactivity: how many elements must be held and related at once to understand it [@sweller2019cognitive]. Element interactivity is not a fixed property of the content. It depends on the learner, because what is many elements to a beginner is one element to someone who has the schema.

This is the single most useful idea in the Part for LTF. A cockpit is a dense field of interacting elements (instruments, controls, the view outside, the sim's own interface). For a pilot most of those are chunked; for the person LTF serves, almost none are. Every design choice either asks the beginner to hold new pieces separately or helps them build the chunk that will later let them hold the whole.

### Two codes: words and images

Paivio's dual coding theory holds that cognition runs on two functionally distinct symbolic systems, one for language and one for nonverbal objects and events, with connections between them [@paivio1986mental]. Verbal units are discrete and sequential; imaginal units are continuous and nested, so one image can stand for what would take many words to describe. The theory distinguishes representational processing (a word or picture activating its own code), referential processing (one system activating the other, as in naming a picture) and associative processing within a system. Mayer and Moreno call the dual-channel assumption "a central feature of Paivio's (1986) dual-coding theory", which is how the theory came to underpin multimedia design [@mayer2003nine].

The evidence summarized in a 1987 chapter by Clark and Paivio, which reproduces the theory's structure, includes several findings designers can use [@paivio1986mental]. Pictures tend to be remembered better than words, explained by pictures being more likely to activate both codes, whose effects on recall add. The picture superiority effect disappears when presentation is too fast to allow naming, and imagery instructions help most at slow presentation rates. Naming a picture took longer than reading a word in one study cited (821 against 562 milliseconds). The second code takes time to generate.

Two misreadings are common. The first is that any picture added to words helps. It does not: the redundancy and seductive-detail studies later in this Part show that added pictures and words can hurt [@harp1998seductive; @mayer2001cognitive]. The second is that people come in "visual" and "verbal" types. Dual coding gives both systems to everyone; nothing in it assigns people to one. The learning-styles evidence is taken up in "Meaning, cues and the myths of study".

::: {.rule #LRN-003 grade="B"}
**Keep every number the learner needs while flying visible on screen; never make them hold it.** Pure working memory capacity is a handful of chunks and is lowest for unstructured novel strings [@cowan2001magical]; recoding into groups helps, but only when the learner already has the groups [@miller1956magical]. A beginner flying the sim is already using working memory on the task.

*In LTF:* `FlyModePage` should show the target values a step refers to beside that step, in `readout` mono, rather than in the Brief tab the learner left. Group long numeric strings in twos or threes where the format allows. Refer to the values by `{{vspeed.*}}` and `{{aircraft.*}}` tokens so they match the reference pages.
:::

::: {.rule #LRN-004 grade="B"}
**Name the recurring groups of a procedure and reuse the names everywhere, so the learner can build each group into one chunk.** Experts hold whole configurations as single elements because they have schemas for them [@kalyuga2003expertise]; chunking is what raises effective capacity [@miller1956magical]. A named group (a checklist section, a flow with a title) is a ready-made chunk the learner can practice as a unit.

*In LTF:* checklist sections in `content/checklists.yaml`, the steps in a challenge's `procedure`, and lesson headings should use the same section names. The `checklist-runner` widget, `FlyPanel` steps and `/reference/checklists/:slug` should show identical group titles. The glossary is already named the authority for terms (`v1.md` Section 12.4); extend that to group names.
:::

::: {.rule #LRN-005 grade="B"}
**Pair each new concrete concept with a picture of it and its name, shown together.** Information coded both verbally and imaginally is remembered better than information coded once, and concrete, imageable material is remembered better than abstract material [@paivio1986mental]. The grade is B: the memory evidence is broad, but the step to complex learning is not guaranteed, and a picture that only repeats what the words already carry can hurt (see "Words beside pictures: split attention and redundancy").

*In LTF:* the first time a lesson names an instrument or control, show it, labeled, in the same view. The three Module 0 screenshots in `lessonImages.ts` and the instrument widgets (`airspeed-indicator`, `g1000-pfd`, `turn-coordinator`) are the natural carriers. Abstract ideas such as angle of attack get a diagram (`angle-of-attack` widget) before they get a paragraph.
:::

::: {.rule #LRN-006 grade="C"}
**Give image-and-word pairings time: let the learner control the pace of any sequence that introduces new pictures.** The picture advantage disappears when presentation is too fast to name, and imagery helps most at slow rates [@paivio1986mental]; the broader case for learner pacing is made in "Time, pace and the ear". Graded C because the specific finding concerns memory for pictures, not instructional sequences.

*In LTF:* no widget should auto-advance through labeled states on a timer. Step controls (Next, Back, Replay) belong in `WidgetFrame` beside the existing Reset.
:::

### What this means for Learn to Fly

LTF's audience is defined by an empty long-term memory for this domain, so the architecture above is not background; it is the design brief. Keep `v1.md` Section 12.4's "one new concept per lesson section" and enforce it in review against the actual content, counting new interacting elements rather than headings (LRN-001). Lessons such as L2.2 introduce a relationship, a sight picture, a scan pattern and a trim technique in sequence; that is acceptable only because each has its own section and its own check before the next.

Change the way numbers reach the learner in flight. `FlyPanel` renders each `procedure` step as a bordered row with a `Checkbox` and `text-lg` copy, and the target values live in the Brief tab. In Fly mode the learner cannot afford to hold them (LRN-003). Put the value next to the step that uses it.

Build a shared vocabulary for chunks (LRN-004). The same named groups should appear in lessons, `content/checklists.yaml`, the `checklist-runner` widget and `FlyPanel`. That consistency also serves the encoding-specificity rules later in the Part.

Remove "seven plus or minus two" from any design review vocabulary (LRN-002). If someone proposes trimming the `ChallengesPage` filters or the `ReferenceSections` rail on memory grounds, the argument does not hold; argue from grouping and scanning instead.

Treat images as half of a pair (LRN-005). LTF has only three lesson images and relies on hand-built SVG widgets for most visuals. That is a strength: every widget can carry labels on the drawing itself. Where a lesson introduces a physical thing (a control, a gauge, a pattern leg) and shows no picture of it, that is a gap to fill, with a widget or a labeled image rather than decoration.

## Cognitive load theory: what holds and what does not

### Doing problems is not learning from them

Cognitive load theory began with an observation that overturned a common teaching assumption. Sweller's 1988 paper argued that domain-specific schemas are the main thing separating experts from novices in problem solving, and that conventional problem-solving practice is an ineffective way to acquire them [@sweller1988cognitive]. The processes needed to solve a problem and the processes needed to learn its structure "overlap insufficiently", and conventional problem solving by means-ends analysis demands so much capacity that little is left for learning. The abstract reports a computational model and experiments in support; the full text was not available to this Part's research, so no figures from the 1988 experiments are given here.

The 2019 retrospective explains means-ends analysis with a kinematics problem [@sweller2019cognitive]. A learner working toward a stated goal must hold the current problem state, the goal state, the differences between them, the operators that might reduce the differences and any sub-goals. That is exceptionally expensive of working memory and directs attention to closing the gap rather than to the structure of the problem. Chandler and Sweller describe earlier studies in which people "could solve problems, in some cases repeatedly solve problems, and remain oblivious to their essential structure" [@chandler1991cognitive].

Two remedies came out of this. Goal-free problems replace a specific goal ("find the final velocity") with an open one ("calculate as many variables as you can"), which removes the goal state and lets the learner attend to states and operators; the retrospective dates the goal-free effect to 1982 [@sweller2019cognitive]. Worked examples, dated to Sweller and Cooper in 1985, give the learner solved problems to study, which directs attention to the states and steps that schema acquisition needs [@sweller1985use]. The next chapter, "Study before you solve", treats worked examples in detail.

### Three kinds of load, and their revision

The 1998 review fixed the theory in its best-known form [@sweller1998cognitive]. It assumed a limited working memory with partly independent verbal and visual components and a very large long-term memory holding schemas of varying automation, and it sorted load into three kinds. Intrinsic load comes from the complexity of the material, tied to element interactivity. Extraneous load comes from how the material is presented. Germane load is load that contributes to learning. De Jong quotes the paper as saying that intrinsic and extraneous load "are additive", and that intrinsic load cannot be directly influenced by designers [@dejong2010cognitive]. The 1998 paper listed seven effects (goal-free, worked example, completion problem, split attention, redundancy, variability and modality) and attributed all but variability to reduced extraneous load [@sweller2019cognitive]. Its full text was not read for this Part; these details come from the authors' own retrospective and from de Jong.

The 2019 update changed the framework in two ways [@sweller2019cognitive]. Germane load is no longer a load in its own right that can substitute for extraneous load; it is now defined as the working memory resources devoted to intrinsic rather than extraneous load, which leaves two basic categories. The authors say the older view could not explain why total load falls when extraneous load is cut. And element interactivity is now said to affect extraneous load as well, so poor presentation is costly in proportion to how much the learner must relate at once. The update also dates sixteen effects, from goal-free (1982) through expertise reversal and guidance fading (2003) to transient information (2011), human movement (2012) and self-management (2012), and extends the theory to whole courses through the four-component instructional design model.

### The critique

De Jong's 2010 review is the best-known internal critique and should be read by anyone who wants to use the theory responsibly [@dejong2010cognitive]. He does not dispute that working memory is limited or that learning suffers when a task demands more than the learner has. His targets are the machinery built on top.

The categories are unstable. Intrinsic load is supposed to be beyond the designer's reach, but some material is harder than its element count predicts, and the theory's own authors recommend simple-to-complex sequencing, which is a way of managing intrinsic load. Designs that look extraneous can provoke useful processing: relating a graph to a formula is redundancy to one camp and learning to another. Extraneous load probably cannot reach zero, because forcing everything into one representation can make it unreadable. And one study found redundant information helped when it was short and placed next to what it described. De Jong calls the explanation of the high-variability result post hoc (learners reported more load and did better, so the load must have been germane), and argues that because every outcome can be explained after the fact, the theory is hard or impossible to falsify. He doubts that intrinsic load, which describes material, and germane load, which describes processes, can simply add.

The external validity is weak. Typical studies gave minutes of study time (a 2.5-minute slideshow, 3-minute frame sequences, a 6-minute lesson), used psychology students with no interest in the topic, and prevented note-taking and replay [@dejong2010cognitive]. De Jong argues that the modality effect appears mostly under fast, system-paced presentation and often disappears when learners control the pace. He also says the theory clearly applies to demanding, time-critical tasks, naming flying a fighter plane, where learners cannot pause, replay or annotate.

The authors' own update partly answers him. Germane load has been redefined, and the authors accept that an overall rating cannot separate load types and that many experiments used the expected learning outcome as evidence for the theory [@sweller2019cognitive]. The individual effects fare better than the framework: split attention, worked examples and expertise reversal have each been found repeatedly, while the three-way taxonomy has not survived intact.

### Measuring load

The commonest direct measure is the single-item mental-effort rating Paas introduced in 1992: one question asking for the "perceived amount of mental effort" on a nine-point scale from "very, very low" to "very very high" [@paas1992training; @dejong2010cognitive]. Later studies used it with 5, 7, 9, 10 or 100 points, with "difficulty" instead of "effort", and once or many times. De Jong shows what that variety does: one study's best condition scored about 3 on a 7-point scale (43 percent of the range) while another study's worst condition scored 2.5 (36 percent), so a given score means different things in different papers. A 1994 analysis reported reliabilities of .90 and .82, but de Jong found no validity evidence, and consistency is not validity. His three problems with the measure are that load is only measured relatively, that an overall rating cannot separate the kinds of load, and that the common measures ignore change over time. Overload itself, which the theory is about, is never detected. Many studies infer load from post-test scores instead, which is circular.

The 2019 authors defend the scale as sensitive and simple, accept that it is an overall measure, and report that a single rating after a whole task came out higher than the average of ratings taken after each task [@sweller2019cognitive]. Paas's own result is instructive: the effort reported during training did not differ between conditions, and the strongest effect was on transfer [@paas1992training]. Effort ratings, in other words, are a weak instrument even in the study that introduced them.

::: {.rule #LRN-007 grade="D"}
**Write design requirements in terms of the concrete problem (split sources, redundant text, unguided search), not in terms of intrinsic, extraneous or germane load.** The three-way taxonomy is contested: its categories overlap, germane load has been redefined by the theory's own authors, and the types cannot be measured separately [@dejong2010cognitive; @sweller2019cognitive]. The effects the theory generated are better supported than the taxonomy that explains them.

*In LTF:* a review comment reads "the caption for this `traffic-pattern` diagram is a scroll away from the figure" or "this paragraph repeats the widget's labels", not "this adds extraneous load". The `ltf-review` content checklist should use the concrete wording.
:::

::: {.rule #LRN-008 grade="B"}
**Do not build a "cognitive load score" from self-ratings; read difficulty from behavior and compare versions, never absolute values.** Single-item ratings mean different things across scales and studies, cannot distinguish kinds of load, have no reported validity evidence and never detect overload [@dejong2010cognitive]. Behavior (time on a step, retries, abandonment) is cheaper and less ambiguous.

*In LTF:* analytics on `QuizBlock` first answers (already recorded per `v1.md` Section 17.3), widget resets, lesson abandonment points (the `SectionNav` scroll-spy knows the section) and challenge retry counts are the difficulty signals. Use them to compare two versions of the same lesson.
:::

::: {.rule #LRN-009 grade="B"}
**If you ask learners how hard something was, ask after each task, with the same wording and scale every time, and use the answers only to compare versions of the same material.** A rating after the whole session differs from the average of ratings after each task [@sweller2019cognitive], and the scale has been used so inconsistently that scores do not transfer between contexts [@dejong2010cognitive; @paas1992training].

*In LTF:* if `DebriefForm` gains an effort question, put it after each challenge attempt with a fixed wording ("How much mental effort did that take?") and keep it out of the learner's score and the `DashboardPage` stats.
:::

::: {.rule #LRN-010 grade="C"}
**Design every in-flight surface for a learner who cannot pause, replay or annotate.** De Jong, the theory's sharpest critic, still names time-critical tasks such as flying as the place it clearly applies [@dejong2010cognitive], and Sweller's account of means-ends search shows how quickly an unguided, goal-directed task consumes capacity [@sweller1988cognitive]. Graded C: this is an expert judgment about where the evidence applies, not a tested result for flight-sim companions.

*In LTF:* `FlyModePage` and `FlyPanel` are the surfaces. They should show only what the current step needs, in the large type the layout already uses, with no paragraphs to read mid-flight. Long explanation belongs in the lesson and the Brief tab.
:::

::: {.rule #LRN-011 grade="B"}
**Order material from isolated elements to integrated tasks, and treat that order as the main lever on how hard the content is.** Simple-to-complex sequencing manages the load that the material itself imposes, which de Jong points out the theory's own authors recommend [@dejong2010cognitive]; presenting complex material first as isolated elements helped novices in the studies Kalyuga and colleagues review [@kalyuga2003expertise], and the 2019 update dates the isolated-elements effect to 2002 [@sweller2019cognitive].

*In LTF:* the building-block order in `v1.md` Section 12.1 and each lesson's `prerequisites` field already encode this. Extend it inside lessons: name and show each part (a control, an instrument) before the section that makes them interact.
:::

::: {.rule #LRN-012 grade="C"}
**Let learners offload: keep reference material visible and give them somewhere to note numbers.** Real learners take notes, replay and look things up, which laboratory studies prevented [@dejong2010cognitive]; a visible aid lowers what must be held in working memory [@cowan2001magical]. Graded C because the benefit of offloading tools in this setting has not been tested directly.

*In LTF:* the reference hub's kneeboard band and Print support this already. Consider a small scratch field in `FlyPanel` (stored with the flight state in `features/challenges/storage.ts`) for the numbers a learner wants to jot during a flight.
:::

### What this means for Learn to Fly

Adopt cognitive load theory as a source of design defaults for novices, not as a scoring system. The effects it produced (worked examples, split attention, redundancy, expertise reversal) carry the weight in this Part; the vocabulary of load types does not. Rewrite any review language that says "extraneous load" into the concrete problem it names (LRN-007).

Do not add a load meter to LTF analytics or to the learner's dashboard (LRN-008). The data LTF already holds is better: `quizStore.ts` keeps the first answer and whether it was right, `v1.md` Section 17.3 records first answers for analytics, `DebriefForm` collects self-scores per criterion, and `HistoryTab` lists attempts. Retries and abandonment are the signals to read, and only to compare one version of a lesson with another.

Treat Fly mode as the place the theory applies most (LRN-010). `FlyModeLayout` already sets a dark ground, `text-xl` and `max-w-3xl`; the random-event alert already takes over with `border-4 border-warn`. What is missing is restraint in content: a challenge's `procedure` steps should be short commands with their values inline, and anything that needs a sentence of explanation should move back to the Brief tab.

Keep the building-block order and make it explicit within lessons (LRN-011). Keep the reference hub as an offloading tool and consider a scratch field in Fly mode (LRN-012). And because the external validity of the laboratory evidence is weak (minutes-long lessons, uninterested students, no replay), plan to check the important defaults against LTF's own learners, using the measures in "Measuring learning, not performance".

## Study before you solve: worked examples, completion and fading

### The worked example effect

The most practical result in cognitive load research is also one of the oldest. Sweller and Cooper studied how students acquire the knowledge needed for algebra manipulation problems, across five experiments [@sweller1985use]. They proposed that skill in algebra rests on many schemas and that conventional problem-solving search slows their acquisition. In Experiments 2 to 5, worked examples required considerably less time to process than conventional problems; afterwards, problems similar to the initial ones were solved more rapidly and with fewer mathematical errors. The 2019 retrospective credits this paper with the first report of the effect [@sweller2019cognitive].

The authors stated a boundary that is often dropped. Both gains, speed and accuracy, were specific to problems identical in structure to the ones studied [@sweller1985use]. They concluded that for novices general rules are reflected in only a few schemas, and that abstracting general rules may need considerable practice across a wider range of cases. The worked example effect, as first found, is a near-transfer effect.

Paas extended it to transfer [@paas1992training]. Students practiced statistics problems on a computer under one of three strategies: solving conventional problems, studying worked-out problems, or completing partly worked-out problems. The prediction was that conventional practice would cost more time and effort during training and produce lower, more effortful transfer. Except for time and effort during training, the results supported it: "the completion strategy and, in particular, the worked strategy proved to be superior to the conventional strategy for attaining transfer". Effort during training did not differ across conditions, which is a reminder that the benefit appeared at test, not as an easier training experience.

The 2019 retrospective calls the evidence for the worked example effect very strong, with two constraints: examples are less effective for high-expertise learners, and good examples are hard to design (for instance, they must not force the learner to integrate separate sources) [@sweller2019cognitive]. It also reports a reverse effect with material of low element interactivity, which limits the effect to complex material. Where there is little to relate, solving is fine.

### Why studying beats searching

The explanation is the one from the founding paper. A learner solving by means-ends search spends working memory on the gap between where they are and the goal, leaving little to notice the structure; a worked example points attention at the problem states and the moves between them [@sweller1988cognitive; @sweller1985use]. Kalyuga and colleagues cite the 1988 paper for exactly this: means-ends search is unrelated to schema construction and cognitively costly [@kalyuga2003expertise].

For a beginner, being dropped into the simulator and told to fly a maneuver is a form of unguided problem solving with a demanding goal. The sim is not a worked example; it is a problem. The lesson that precedes it is where the example belongs.

### When examples stop helping

The expertise reversal effect is the main limit on everything in this chapter [@kalyuga2003expertise]. Techniques that are "highly effective with inexperienced learners can lose their effectiveness and even have negative consequences when used with more experienced learners". For inexperienced mechanical-trade apprentices, studying worked examples beat solving problems, with lower mental-load ratings; as experience grew the advantage disappeared and then problem solving proved superior. Another experiment compared worked examples with exploration: on simple tasks the differences were minimal, on complex tasks novices did better with examples, and the advantage faded with training. The mechanism is redundancy: an expert's schemas already supply the guidance, so the example duplicates it, and relating the two costs working memory even when the learner knows the material is redundant, because redundant information "is frequently difficult to ignore".

Full reversals are rarer than disappearances; in the isolated-elements studies a full reversal was not observed [@kalyuga2003expertise]. The 2019 update treats expertise reversal as a variant of element interactivity: effects first shrink, then vanish, then can reverse [@sweller2019cognitive]. Mayer's third edition recasts his old "individual differences" principle as the same boundary condition: principles effective for beginners may not be effective for more experienced learners [@mayer2021multimedia].

### Fading the guidance

If examples help beginners and hinder the more experienced, the course must move from one to the other as the learner changes. Renkl and colleagues found that gradual fading from worked examples into problems beat an abrupt switch [@kalyuga2003expertise]. The usual sequence is a full worked example, then completion problems with progressively more steps left to the learner, then full problems. The 2019 update lists guidance fading among the compound effects dated to 2003 [@sweller2019cognitive].

A related finding concerns mental rehearsal. Students told to imagine a procedure learned more than students told to study worked examples, but only if they already had the prerequisite schemas; for less knowledgeable students imagining had a negative effect [@kalyuga2003expertise]. Rehearsal prompts belong after the learner has handled the material, not before.

### Supportive and procedural information

The four-component instructional design model, which the 2019 update uses to extend the theory to courses, separates learning tasks, supportive information, procedural information and part-task practice [@sweller2019cognitive]. Complex supportive information (the why, the mental model) should come before the task, not during it, because doing both at once "would almost certainly cause cognitive overload". Procedural how-to information should come just in time, at the moment it is needed. For LTF the split maps cleanly onto the lesson and the cockpit: the lesson carries the model, and the in-flight surface carries the cue.

### Variability comes later

The 1998 review attributed the variability effect (practice across varied cases improves transfer) to intrinsic load, since added variety raises the load of practice [@sweller1998cognitive]. Its own interpretation therefore implies that variety should arrive after the learner can manage the basic task. That fits Sweller and Cooper's boundary (one example does not yield a general rule) and the desirable-difficulty work later in this Part, which holds that a difficulty is desirable only when the learner can respond to it [@bjork2009making].

::: {.rule #LRN-013 grade="A"}
**Before any challenge that asks a beginner to perform a procedure, show a complete worked example of it: the inputs, the resulting indications and the reason for each step.** Studying worked examples beats solving equivalent problems for novices on speed, accuracy and transfer, one of the best-replicated findings in instructional psychology [@sweller1985use; @paas1992training; @sweller2019cognitive]. The limits: the effect weakens with expertise and reverses for low-interactivity material.

*In LTF:* each challenge's `BriefTab` has Goal, Sim setup, Recommended lessons and Procedure. The Procedure should be written as a worked example (each step with what the learner will see and why), and the linked lesson should walk through one complete instance before the "Fly it" card.
:::

::: {.rule #LRN-014 grade="B"}
**Insert a completion exercise between the worked example and the full attempt: the same procedure with some steps or values left for the learner to supply.** Completion practice beat conventional problem solving for transfer in Paas's experiment, though worked examples did best [@paas1992training]; gradual fading beat an abrupt switch [@kalyuga2003expertise]. Graded B because the completion condition rests on fewer studies than the worked example effect.

*In LTF:* the `order` quiz type in `QuizBlock` can present a procedure with steps to arrange; a `numeric` item can ask for one missing value in an otherwise worked sequence. Either fits between the lesson's walkthrough and the challenge.
:::

::: {.rule #LRN-015 grade="B"}
**Fade guidance across a module in visible steps: full walkthrough, then checklist, then a prompt, then the bare task.** Guidance that helps novices becomes redundant and can hurt as schemas form, and gradual fading outperforms abrupt removal [@kalyuga2003expertise; @sweller2019cognitive].

*In LTF:* within a module, early challenges carry full `procedure` steps in `FlyPanel`; later ones in the same module should list fewer, higher-level steps, and capstone challenges such as `c4-7-three-circuit-session` can show only the goal and the scoring. Make the fading a deliberate property of the challenge YAML, not an accident of who wrote it.
:::

::: {.rule #LRN-016 grade="B"}
**Use several worked examples that differ in surface features before expecting a general skill.** The original worked-example gains were confined to problems of the same structure, and the authors concluded that general rules need exposure to a wider range of cases [@sweller1985use]; variability helps transfer but adds load, so it comes after the basic task is managed [@sweller1998cognitive].

*In LTF:* a procedure taught at one airport in one setup should reappear in later lessons and challenges with a different airport, runway or wind from `content/airports.yaml` and `content/presets.yaml`. Introduce the variation only after the first challenge has been passed.
:::

::: {.rule #LRN-017 grade="B"}
**Ask for mental rehearsal ("picture what you will see next") only after the learner has studied and practiced the material.** Imagining a procedure helped learners who had the prerequisite schemas and harmed those who did not [@kalyuga2003expertise].

*In LTF:* a "visualize the flight" prompt belongs on the `BriefTab` of a challenge the learner has already read the lesson for, or at the start of a retry, not in the first lesson that introduces the procedure.
:::

::: {.rule #LRN-018 grade="C"}
**Put supportive explanation before the task and procedural cues at the moment of use; never ask the learner to absorb new theory while performing.** The four-component model holds that combining the two "would almost certainly cause cognitive overload" [@sweller2019cognitive]. Graded C because this is a model-level prescription rather than a single tested effect.

*In LTF:* the lesson page and the Brief tab carry the why; `FlyPanel` and `FlyModePage` carry the cue. If a `procedure` step needs a clause of explanation to make sense, that clause belongs in the lesson, and the step should link back to it.
:::

::: {.rule #LRN-019 grade="B"}
**Give learners who already know the material a shorter path: let them skip or collapse the walkthrough and go to the task.** Guidance that helps novices duplicates what experienced learners already hold, and redundant information is hard to ignore [@kalyuga2003expertise; @mayer2021multimedia].

*In LTF:* LTF's audience includes long-time sim players and returning learners. A collapsed "Show the walkthrough" `details` element, or a "Skip to the check" link from the objectives `Card`, lets them prove what they know through the section's `QuizBlock` instead of reading it.
:::

::: {.rule #LRN-020 grade="B"}
**In the first challenges of a skill, set a goal that asks the learner to observe a relationship before a goal that asks them to hit a target.** Removing a specific goal reduces means-ends search and focuses attention on states and operators [@sweller1988cognitive; @sweller2019cognitive]. Graded B: the goal-free effect has been extended in many studies but mostly with mathematics and science problems.

*In LTF:* an early challenge in a module can ask "note how the airspeed changes as you change pitch" before a later one scores holding a value within the bronze, silver and gold tolerances. The scoring rubric for the observation challenge can ask the learner to report what they saw.
:::

### What this means for Learn to Fly

LTF's lesson rhythm in `v1.md` Section 12.2 (Learn, See, Try, Fly, Reflect) is close to the sequence this chapter recommends, with one gap: "Try" is usually a single-choice `QuizBlock` or a widget in explore mode, and "Fly" is a full challenge. There is no completion step and no worked example in the strict sense (a complete instance with its inputs, results and reasons). Add both (LRN-013, LRN-014). The `order` quiz type is a ready-made completion format; a worked example can be a lesson section that walks one instance end to end, ideally with a widget showing each state.

Make fading explicit (LRN-015). The challenge YAML files under `content/challenges/` each carry a `procedure`. Decide per module how much procedure each challenge shows, and let the last challenge in a module carry the least. The landing page's sample "Full-stop landing" card promises "You are scored on" checks; the later the challenge, the more the scoring should replace the steps.

Respect expertise reversal (LRN-019). LTF's audience is beginners, but not only beginners. A visible way to skip explanation and go straight to the check costs little and protects the experienced learner from redundant guidance.

Keep theory out of the cockpit (LRN-018). The Brief tab and lesson are for supportive information; `FlyPanel` and `FlyModePage` are for procedural cues. Audit challenge `procedure` steps for explanation that belongs earlier.

Order goals within a skill (LRN-020): observe first, then hit a target. And treat the variability that later challenges add (other airports, winds, random events in `FlyPanel`) as something the learner earns by passing the basic version, not as the first experience (LRN-016).

## Words beside pictures: split attention and redundancy

### The split-attention effect

Chandler and Sweller's 1991 paper turned cognitive load theory into layout advice [@chandler1991cognitive]. Its argument is that instructional material should direct resources "toward activities that are relevant to learning rather than toward preliminaries to learning". When a diagram and a text refer to each other and neither makes sense alone, the learner must hold one while searching the other and mentally integrate them before learning can begin. That search is a preliminary, and it consumes working memory. Physically integrating the two removes it.

The first experiment used installation testing, a task that requires reading meter procedures against a circuit diagram [@chandler1991cognitive]. Twenty-eight first-year trade apprentices with no prior formal electrical training were randomly allocated, fourteen per group, to conventional notes (diagram here, text there) or integrated notes carrying virtually identical information, with numbered text placed on the diagram itself. Written tests after a one-week course and again about twelve weeks later favored the integrated group (F(1, 26) = 8.60), and the authors note that even after twelve weeks the conventional group's written score had not passed the integrated group's first score. A practical test on an appliance also favored integrated notes (F(1, 18) = 33.72), though a second practical test did not differ significantly. The authors are explicit that "there were no direct measures of cognitive load".

### Integrate only what cannot stand alone

The rest of the paper sets the boundary, and it is the part designers most often miss [@chandler1991cognitive]. In Experiment 2 the diagrams (lighting circuits and a fluorescent lamp) could be understood without the text, and integrated notes were no better than split ones (F(1, 26) = 1.76, not significant). In Experiment 4, a diagram-only group scored significantly higher on the first test problem than groups given the diagram plus text in either format, and spent the least time on the instructions; the conventional group spent notably more time than the others. When a diagram is intelligible alone, the text that repeats it is not merely useless; it can hurt even when integrated. Experiments 5 and 6 replicated the pattern with blood-circulation material, and Experiment 6 showed that the need for integration returned when the material was arranged so that individual units could not be understood alone.

Experiment 3 adds a warning about instructions. One group was explicitly told to study and relate a redundant text and its diagram; another was simply given both. The group not told to integrate did better, which the authors read as learners sensibly ignoring the redundant text when left alone [@chandler1991cognitive].

The samples are small (20 to 28 people in each of the first four experiments), the participants were apprentices and the material technical [@chandler1991cognitive]. The authors say the experiments were designed to test whether the theory could generate useful instruction, not to test the theory. Even so, split attention and redundancy are among the most replicated effects in the literature, and the 2019 update uses this paper's redundancy case as its standard example [@sweller2019cognitive].

### Redundancy depends on who is reading

What counts as redundant is a property of the learner, not the page. Inexperienced electrical trainees benefited from text integrated into circuit diagrams and could not understand a diagram alone; more experienced trainees did significantly better with the diagram alone and reported less mental effort for it [@kalyuga2003expertise]. The integrated text had become redundant as their schemas grew. McNamara and colleagues found the same shape with text coherence: added coherence helped low-knowledge readers while high-knowledge readers did better with the original text, which Kalyuga and colleagues reinterpret as expertise reversal.

The consequence for a course is that labels the beginner needs on day one become clutter by week four. A design that never removes labels is optimizing for the first visit.

### Contiguity in space and time

Mayer and Moreno's synthesis restates split attention for multimedia as two principles with effect sizes from the authors' own experiments [@mayer2003nine]. Aligning (place printed words next to the part of the graphic they describe, spatial contiguity) had a median effect of 0.48 in one experiment. Synchronizing (present narration together with the animation it describes, not one after the other, temporal contiguity) had a median of 1.30 across eight experiments. Both appear in Mayer's third edition among the principles for reducing extraneous processing, with coherence, signaling and redundancy [@mayer2021multimedia]. The sizes are medians from short laboratory lessons on lightning, brakes and pumps and should not be quoted as expected gains.

### Redundancy with narration: a narrow result

Mayer, Heiser and Lonn showed college students a 140-second narrated animation of how lightning forms [@mayer2001cognitive]. Adding concurrent on-screen text, whether it summarized the narration (Experiment 1) or duplicated it (Experiment 2), lowered retention and transfer. The explanation offered is that the printed words compete with the animation for the visual channel, and the learner tries to reconcile text with narration. Mayer and Moreno put the median effect of eliminating this redundancy at 0.69 across three experiments [@mayer2003nine].

The result is narrower than it is usually reported. Mayer and Moreno note that when no animation is present, learners did better with narration plus on-screen text than with narration alone, because the text does not compete with a moving picture [@mayer2003nine]. De Jong points to a later finding by Mayer and Johnson that redundant information helped when it was short and placed next to what it referred to [@dejong2010cognitive]. And Mayer and Moreno use "redundancy" more narrowly than Sweller: theirs is printed text duplicating narration over animation, while Sweller's is any second source that repeats a self-sufficient first one. The two findings share a logic but not a scope.

::: myth
**"More channels mean more learning: show the words, say the words and animate the picture."** Adding on-screen text that summarized or duplicated the narration of an animation lowered both retention and transfer [@mayer2001cognitive], and text that restated a self-explanatory diagram lowered performance even when integrated into it [@chandler1991cognitive]. Two sources help only when each carries something the other lacks.
:::

::: {.rule #LRN-021 grade="A"}
**Label the parts of a diagram on the diagram, at the part, not in a legend, caption or paragraph elsewhere.** When a picture and its explanation are each unintelligible alone, physical integration improves learning; this split-attention effect is among the most replicated in cognitive load research [@chandler1991cognitive; @sweller2019cognitive; @mayer2003nine].

*In LTF:* widget SVGs in `src/features/widgets/` already draw `Label`s with a surface halo; use them for every named part. The `AirspeedArcs` band and the `airspeed-indicator` widget currently rely partly on text legends; where space allows, name each arc at the arc. In lesson images, annotate in place rather than explaining in the paragraph below.
:::

::: {.rule #LRN-022 grade="B"}
**Keep a step and the figure it refers to on screen together at every breakpoint, including phones.** The cost of split sources comes from searching and holding one while reading the other [@chandler1991cognitive]; a caption pushed a scroll away recreates the split. Graded B because the evidence is from paper notes and laboratory screens, and the phone case is an inference.

*In LTF:* `LessonPage` collapses to one column below `lg`. A widget followed by three paragraphs about it should become a widget with the key sentence inside the `WidgetFrame` header or directly under the canvas. Lesson tables already sit in a scroll region; keep their explanatory sentence immediately above, not after.
:::

::: {.rule #LRN-023 grade="B"}
**When a diagram is self-explanatory to the intended learner, do not restate it in prose.** Text that repeats an intelligible diagram did not help and could hurt, even when integrated, and learners spent more time on the instructions [@chandler1991cognitive]; for more experienced learners the same text becomes redundant [@kalyuga2003expertise].

*In LTF:* a lesson paragraph that lists what the `traffic-pattern` widget already labels (the legs, their names, their order) should be cut to the one thing the widget cannot show, such as why the legs are flown in that order.
:::

::: {.rule #LRN-024 grade="B"}
**Never instruct learners to cross-check two sources that say the same thing.** In Chandler and Sweller's Experiment 3, learners told to relate a redundant text and diagram did worse than learners left to ignore the text [@chandler1991cognitive]. Graded B: one experiment, consistent with the wider redundancy literature.

*In LTF:* avoid copy such as "compare the steps above with the diagram" when they carry the same content. Pick one carrier.
:::

::: {.rule #LRN-025 grade="B"}
**Do not show on-screen text that duplicates or summarizes the narration of an animation by default; make captions a control that is always offered.** Concurrent duplicating or summarizing text lowered retention and transfer with narrated animation [@mayer2001cognitive; @mayer2003nine]. The evidence concerns hearing learners with a spoken track; captions remain an accessibility requirement (see the Part on accessibility).

*In LTF:* the `YouTubeEmbed` launch video and any future narrated widget should start with captions available but not forced on, with the caption control obvious. A transcript link belongs under the player either way.
:::

::: {.rule #LRN-026 grade="B"}
**Short labels and one-line captions placed beside a static picture are fine; redundancy harms mainly when long text competes with a moving image or restates a self-sufficient picture.** Narration plus on-screen text beat narration alone when no animation was present [@mayer2003nine], and short redundant information placed next to its referent helped in a study de Jong cites [@dejong2010cognitive].

*In LTF:* do not strip the "Simplified model" badge, widget titles or the `figcaption` in `WidgetFrame` on redundancy grounds. The rule targets paragraphs, not labels.
:::

::: {.rule #LRN-027 grade="B"}
**When text explains a value that changes, show the explanation at the moment and the place the value changes.** Narration presented together with its animation beat sequential presentation, with a median effect of 1.30 across eight experiments [@mayer2003nine]. The size comes from one laboratory's short lessons; the direction is what to rely on.

*In LTF:* in `pitch-power` and `load-factor`, a sentence that explains what just happened ("airspeed is falling because...") should appear next to the readout as the learner moves the slider, not in the lesson paragraph above the widget.
:::

::: {.rule #LRN-028 grade="C"}
**Remove scaffolding labels from diagrams in later reviews and quizzes once the learner has met them.** Integrated labels that help novices become redundant for more experienced learners [@kalyuga2003expertise], and naming the parts yourself is retrieval practice (see "Retrieval practice and feedback"). Graded C: an inference from two findings, not a tested design.

*In LTF:* the widget "Quiz me" mode in `WidgetFrame` is the natural place: quiz mode can hide part labels and ask the learner to identify the part, while explore mode keeps them.
:::

### What this means for Learn to Fly

LTF has a built-in split that no layout can remove: the learner's attention is divided between the simulator on one screen and LTF on another. That makes every avoidable split inside LTF more expensive. Keep labels on drawings (LRN-021), keep the step beside its figure (LRN-022), and in Fly mode describe sim indications exactly as they look in the sim, so the learner can match them without translation.

Audit lessons for redundant prose (LRN-023). The widgets are the most informative visuals LTF has; text above or below them that lists what the widget already labels can go. What remains should explain causes, which a diagram shows poorly.

Review the `LessonPage` glossary placement. Terms appear as chips in a right rail at `xl` (and below the content at smaller widths), each opening a `Popover` with the definition. The popover is on demand, which is good, but the chips sit far from where the term is used. Defining a term inline at first use, with the rail as an index, would keep the definition beside its referent.

Treat captions as a control, not a default (LRN-025), and keep short labels (LRN-026). Use widget quiz mode to strip labels for review (LRN-028). And when a widget's explanation depends on a changing value, move the explanation into the widget beside the readout (LRN-027).

## Cutting and cueing: coherence, seductive details and signaling

### Seductive details

Textbooks and lessons are often made "more engaging" by adding vivid facts, anecdotes or illustrations that are interesting but irrelevant to the point. Harp and Mayer tested whether that helps [@harp1998seductive]. Across four experiments with 357 undergraduates, readers of science passages that contained such seductive details recalled fewer main ideas and produced fewer problem-solving transfer solutions than readers of the same passages without them.

The experiments were built to separate three explanations. Details might distract the reader, they might disrupt the coherence of the argument, or they might prime an inappropriate schema around which the reader organizes the material. In Experiments 1 to 3 the authors added highlighting of the main ideas, a statement of learning objectives, or signaling; none removed the harm [@harp1998seductive]. If distraction or broken coherence were the cause, cues to the main ideas should have helped. In Experiment 4, placing the seductive details at the start of the passage made the effect worse and placing them at the end reduced it, which fits the schema account: details read first set the frame for what follows. The authors conclude that seductive details interfere "by priming inappropriate schemas around which readers organize the material, rather than by distracting the reader or by disrupting the coherence of the passage". The full text was not available to this Part's research; these details come from the abstract and bibliographic records.

Mayer, Heiser and Lonn found the same pattern in multimedia [@mayer2001cognitive]. Adding interesting but irrelevant details to the narration of the lightning lesson, or inserting interesting but conceptually irrelevant video clips within or before the presentation, lowered transfer. Mayer and Moreno put the median effect of weeding such material at 0.90 across five experiments, where the extras were background music or irrelevant clips [@mayer2003nine]. Coherence is the first principle in Mayer's section on reducing extraneous processing [@mayer2021multimedia].

### How large, and how reliable

Rey's meta-analysis pooled 39 experimental effects from text passages, illustrations and other kinds of seductive detail and found a significant effect, small to medium for retention and medium for transfer [@rey2012review]. Secondary sources give conflicting numeric values for this paper, so no figures are quoted here. Rey weighs four explanations (working memory overload, attention distraction, schema interference and coherence disruption) and finds evidence both for and against each; none is settled.

Later work complicates the picture. A 2020 meta-analysis by Sundararajan and Adesope in *Educational Psychology Review* describes the findings as mixed, with moderators such as delivery format, subject and learner pacing, while still concluding that seductive details can hinder learning. A 2021 experiment by Tislar and Steelman in *Brain and Behavior*, with 132 undergraduates and a plate tectonics lesson, found no consistent harm on recall and transfer; the effect appeared only when learning objectives were provided, and the authors argue that confounds make it hard to elicit. The defensible summary: on average the harm is real and largest for transfer, but its size depends on how "interesting" and "irrelevant" were defined and matched, and most of the base is short laboratory reading by college students. The research also measures learning after one short session, not whether interesting material keeps learners coming back over weeks.

::: myth
**"Fun facts and vivid asides make a lesson more engaging, so learners learn more."** Interesting but irrelevant material lowered recall of main ideas and transfer in controlled experiments [@harp1998seductive; @mayer2001cognitive], and a meta-analysis of 39 effects found a significant harm, medium for transfer [@rey2012review]. The effect varies and one recent experiment failed to find it consistently, so the honest claim is that decoration is not free, not that it always hurts.
:::

### Signaling

Signaling adds cues that show the learner what to attend to and how the material is organized, without adding content: highlighting, arrows, bold or colored key words, outlines, headings and spoken emphasis. Mayer and Moreno reported one experiment (an airplane-lift animation with stressed key words, red and blue arrows, an outline with headings and a map of which part was playing) with an effect of 0.74 [@mayer2003nine]. That single figure has been superseded.

Schneider and colleagues pooled 103 studies with 12,201 participants, using 139 retention measures and 70 transfer measures [@schneider2018meta]. The average effect was g+ = 0.53 (95 percent CI 0.42 to 0.64) for retention and g+ = 0.33 (95 percent CI 0.22 to 0.43) for transfer. Signaling helps retention moderately and transfer less. Signaling mode (textual against graphical cues) was a significant moderator among nine tested. These figures come from two independent summaries of the abstract rather than the paper itself, which was not read. Whether prior knowledge moderates the effect is unresolved: the accounts disagree, and other meta-analyses are reported to be inconsistent on it. The pooled sizes are well below the 2003 single-study figure, the usual pattern as early single-lab estimates shrink.

The boundary that matters most comes from the seductive-details work. Highlighting, learning objectives and signaling did not remove the harm caused by irrelevant material [@harp1998seductive]. Cues can direct attention through good material; they cannot rescue a page that is full of the wrong material.

::: {.rule #LRN-029 grade="B"}
**Keep decorative imagery, background audio, trivia and anecdotes out of the explanation of a core concept.** Interesting but irrelevant additions lowered transfer across experiments [@harp1998seductive; @mayer2001cognitive; @mayer2003nine], and a meta-analysis found a significant average harm, medium for transfer [@rey2012review]. Graded B, not A, because the effect varies widely and a recent experiment did not reproduce it consistently.

*In LTF:* the landing page's choice of no airplane illustration and lessons' near-absence of decorative images already follow this. Keep it in lessons and widgets: no aviation photography behind lesson prose, no sound in widgets, no history paragraphs inside a section that explains a mechanism.
:::

::: {.rule #LRN-030 grade="B"}
**Put engaging but non-essential material after the core content, in a section the learner can skip.** Seductive details placed at the start of a passage did more harm than the same details placed at the end [@harp1998seductive]. Graded B: one experiment, consistent with the schema-priming account.

*In LTF:* the "Go deeper" resource cards near the end of `LessonPage` are the right home for history, stories and trivia. A lesson should never open with an anecdote before the idea it is about.
:::

::: {.rule #LRN-031 grade="B"}
**Cut irrelevant material instead of adding cues around it.** Highlighting, learning objectives and signaling did not remove the seductive-detail harm [@harp1998seductive], and signaling's transfer effect is modest even in clean material [@schneider2018meta].

*In LTF:* if a lesson section needs a "Note" or "Pro tip" `Callout` to point the reader back to the main idea, the section has too much in it. Edit first; add a callout only if the section still needs one.
:::

::: {.rule #LRN-032 grade="A"}
**Signal structure and focus: a heading per idea, the key term in bold at first use, and a visible highlight on the element being discussed.** Across 103 studies, signaling improved retention (g+ = 0.53) and transfer (g+ = 0.33) [@schneider2018meta]. The direction is consistent across meta-analyses; moderators, including prior knowledge, are not.

*In LTF:* lesson headings, the `SectionNav` rail and the mobile section `Select` ("Section i of n") are organizational signals; keep them. In widgets, highlight the instrument or control the current sentence is about using `--color-accent` or `--color-accent-line`, and bold the term in `MarkdownContent` at first use.
:::

::: {.rule #LRN-033 grade="C"}
**Give each moment one cue: one highlighted element per step, not several competing emphases.** Signals work by reducing the search for what matters [@schneider2018meta; @mayer2003nine]; several simultaneous cues reintroduce the search. Graded C: an inference from the mechanism, not a tested count.

*In LTF:* in a widget step, highlight one gauge. On a lesson page, one `Callout` per type per section is already the plan's limit (`v1.md` Section 12.4); treat it as a ceiling, not a target.
:::

::: {.rule #LRN-034 grade="C"}
**Give each signal color one meaning across every lesson and widget, and never rely on color alone.** A cue helps only if the learner can read what it points at; inconsistent meanings recreate the search signals are meant to remove [@schneider2018meta]. Color-alone cues fail for some learners in both themes (see the Parts on color and accessibility). Graded C.

*In LTF:* decide, for example, that `accent` marks the item under discussion and a fixed instrument token marks a target value, and apply it in every widget in both Day and Night. Pair the color with a shape, outline or label.
:::

::: {.rule #LRN-035 grade="C"}
**Judge each story, image or aside by whether it illustrates the mechanism being taught; keep it only if it does.** The literature defines a seductive detail as interesting and irrelevant to the instructional objective [@rey2012review]; an account of a real event that demonstrates the cause under study is relevant interest, not decoration. Graded C: the boundary is a judgment the research leaves to the designer.

*In LTF:* a "Sim vs reality" or "In a real airplane" `Callout` earns its place when it changes what the learner will do or expect. One that only entertains belongs in "Go deeper".
:::

::: {.rule #LRN-036 grade="C"}
**Before adding an engagement feature to a lesson, test it against a transfer question, and measure return visits as well as scores.** The seductive-detail effect varies by format, subject and pacing and is sometimes absent [@rey2012review], and the research measures single sessions, not persistence. Graded C.

*In LTF:* compare two versions of a lesson section on the next lesson's first `QuizBlock` answers and on whether learners come back within a week.
:::

### What this means for Learn to Fly

LTF already leans the right way. `LandingPage.tsx` carries the comment "no airplane illustration", lessons use three screenshots in total, and the widgets are drawn diagrams rather than photographs. Keep that restraint inside lessons (LRN-029), and resist the pull a flight-sim audience creates toward history, war stories and aircraft trivia while a beginner is still learning basic control relationships. Put that material in "Go deeper" or after the lesson's completion panel (LRN-030).

Use the `Callout` set with discipline (LRN-031, LRN-035). Nine callout types (safety, sim, tip, classic, note, decision, memory, real-world, verify) are a strong signaling vocabulary; they are also an easy way to add asides. Each callout should change what the learner does or expects.

Signal more in widgets (LRN-032, LRN-033). Lessons already have headings, the `SectionNav` spine and section numbers. The widgets, which carry most of LTF's explanation, need the equivalent: a highlight on the element the current step is about. Decide what each highlight color means, and keep the meaning fixed across `pitch-power`, `airspeed-indicator`, `g1000-pfd` and the rest (LRN-034).

Do not decide on engagement features by taste (LRN-036). The evidence says decoration often costs transfer and sometimes does not; LTF can find out which applies to its learners with two versions of a section and a delayed check.

## Time, pace and the ear: segmenting, pretraining and modality

### Transient information

Words on a page wait for the reader. Speech and animation do not: each moment replaces the last, and whatever the learner needs from it must be held in working memory or lost. The 2019 update calls this the transient information effect and dates it to 2011 [@sweller2019cognitive]. Its practical form is that pacing and segmenting help with spoken or animated material, and its sharpest result is from Leahy and Sweller: short audiovisual pieces beat visual-only presentation, while longer ones did the reverse. Length turned an advantage into a cost, because a long spoken passage must be held to be used.

The update also lists a human movement effect, dated to 2012: animation can beat static pictures when the content is a motor procedure, such as tying a knot [@sweller2019cognitive]. Animation is not a general upgrade on still pictures, but movement shown as movement can help when what is learned is a movement.

### Segmenting and pretraining

Mayer and Moreno group two techniques under managing the essential processing a lesson demands [@mayer2003nine; @mayer2021multimedia]. Segmenting breaks a continuous presentation into learner-controlled pieces. In the lightning lesson, the explanation was split into 16 segments of one or two sentences and roughly 8 to 10 seconds of animation each, with a Continue button; the median effect was 1.36, from one experiment. The authors themselves note that the segmented group had more study time, which confounds the result. Pretraining teaches the names and behaviors of a system's components before the lesson on how the system works; its median effect was 1.00 across three experiments with brake and pump lessons.

Pretraining is the multimedia version of the isolated-elements effect: if the learner already knows what a caliper or a piston is, the lesson on the brake has fewer new elements to hold at once [@kalyuga2003expertise; @sweller2019cognitive]. It is also the cheapest technique in this Part to implement, because it is a matter of order.

### Modality: the effect and its doubts

The modality effect is the finding that people learn better from a picture with spoken explanation than from the same picture with the same words printed. Cognitive load theory explains it by spreading words and pictures across partly independent auditory and visual processors [@sweller1998cognitive; @baddeley1992working]. Mayer and Moreno report a median effect of 1.17 across six of their laboratory's experiments for "off-loading" words from screen to narration [@mayer2003nine].

Ginns's meta-analysis analyzed 43 independent effects (39 between-subjects, 4 within-subjects) and supported the benefit of presenting information across modalities [@ginns2005meta]. Two moderators held: element interactivity and pacing, with differences between fields. The abstract notes a "strong observed modality effect under system-paced conditions" and says that should be weighed against the cost of producing audio-visual material. The overall effect is reported elsewhere as d = 0.72; Ginns's results section was not read for this Part.

This is where the evidence most needs qualification. A 2012 reanalysis by Reinwein in the *Journal of Psycholinguistic Research*, using 86 independent effects, reported an overall effect of d = 0.38, nearly half of Ginns's, falling to d = 0.20 after a trim-and-fill correction for publication bias. Reinwein also argued that neither Baddeley's model nor Penney's separate-streams account explains the effect. De Jong reaches a compatible view from the primary studies: experiments finding the effect used system-paced, often rapid presentation, while several that let learners control the pace found no effect or a reverse one [@dejong2010cognitive]. A 2023 classroom study with fifth graders in a learner-paced setting (Haavisto and colleagues, *Computers and Education*) found narrated video beat illustrated text on retention, delayed retention and cognitive load but not on transfer, and concluded that the benefit may not come from avoiding overload.

Mayer and Moreno's ninth technique, individualizing, adds that well-designed material helps learners with high spatial ability more (median 1.13, two experiments) [@mayer2003nine]. Mayer's third edition later recast individual differences as a boundary condition tied to prior knowledge [@mayer2021multimedia]. Neither result supports sorting learners into "visual" or "auditory" types.

The summary for a designer is that the modality effect is real in many studies, its size depends on method and on publication bias, it is strongest for fast presentations the learner cannot control, and its standard explanation is disputed. LTF is overwhelmingly self-paced.

### Narration in the cockpit

The obvious idea for Fly mode is speech: the learner's eyes are on the sim, so speak the cue. The working memory model makes this plausible in principle, because speech and vision use different stores [@baddeley1992working]. But the sim already produces audio (engine noise, warnings, and in later modules radio) that competes for the phonological loop, and none of the modality studies involved a concurrent demanding task such as flying [@ginns2005meta]. Spoken cues in flight are a hypothesis to test with learners, not a finding to implement.

::: {.rule #LRN-037 grade="B"}
**Break every animated or multi-step explanation into short segments the learner advances, with Back and Replay.** Learner-controlled segments helped in the lightning experiment (median 1.36, one experiment, confounded with study time) [@mayer2003nine], transient material is costly when long [@sweller2019cognitive], and modality benefits are most fragile under system pacing [@dejong2010cognitive].

*In LTF:* `WidgetFrame` has Reset but no step controls. Widgets that walk through states (`traffic-pattern`, `checklist-runner`, the `g1000-pfd` scenarios) should expose Next, Back and Replay in the header, with a step count in `readout-sm`.
:::

::: {.rule #LRN-038 grade="B"}
**Teach the names and functions of the parts before the lesson that explains how they interact.** Pretraining on component names and behaviors improved transfer (median 1.00, three experiments) [@mayer2003nine], consistent with the isolated-elements effect [@kalyuga2003expertise].

*In LTF:* Module 1 ("Know the airplane") is pretraining for Module 2; keep it there. Within a lesson, a short "the parts" section with a labeled widget should precede the section on how they work together. The `c1-1-cockpit-scavenger-hunt` challenge is pretraining in the sim and should come before any challenge that uses those controls together.
:::

::: {.rule #LRN-039 grade="D"}
**For self-paced lessons, default to short printed text placed beside the diagram; do not assume narration beats text.** The modality effect is strongest under fast system-paced presentation [@ginns2005meta], shrinks or vanishes when learners control pace [@dejong2010cognitive], and a bias-corrected reanalysis puts its size far below early estimates. Graded D because the size and cause of the effect remain contested.

*In LTF:* lessons and widgets are read at the learner's pace. Do not budget for narrating them on learning grounds. If narration is added for other reasons (access, preference), keep it optional.
:::

::: {.rule #LRN-040 grade="B"}
**Keep any spoken passage paired with a visual short, and split long ones into segments.** Short audiovisual pieces beat visual-only presentation while longer ones did the reverse, because spoken information vanishes and must be held [@sweller2019cognitive].

*In LTF:* the landing page's 75-second tour video is a reasonable length for an overview. A future narrated lesson video should break at each idea, with chapters the learner can jump between.
:::

::: {.rule #LRN-041 grade="B"}
**Show movement as movement when the thing being learned is a movement; use still diagrams for structure.** Animation beat static pictures for motor procedures such as knot tying (the human movement effect) [@sweller2019cognitive], but animated presentation adds transient-information costs elsewhere. Graded B: one named effect with few studies in the sources behind this Part.

*In LTF:* the `control-surfaces` widget, which shows what a control input does to the airplane, is a good use of motion. A static labeled panel is better for teaching where instruments are.
:::

::: {.rule #LRN-042 grade="C"}
**Treat spoken cues in Fly mode as an experiment, not a default.** Separate auditory and visual stores make speech plausible during a visual task [@baddeley1992working], but the modality research never involved a concurrent demanding task, and the sim's own audio competes for the same store [@ginns2005meta; @dejong2010cognitive]. Graded C.

*In LTF:* if `FlyModePage` gains read-aloud steps, ship them off by default, measure step completion and challenge scores with and without, and keep the visual list primary. The existing random-event beep is an alert, not instruction, and is a separate question.
:::

::: {.rule #LRN-043 grade="B"}
**Never autoplay instructional audio or animation; start paused and let the learner start it.** The benefits attributed to narration appear mainly under system pacing that learners cannot control [@ginns2005meta; @dejong2010cognitive], and transient material that runs on is lost [@sweller2019cognitive].

*In LTF:* `YouTubeEmbed` is already click-to-load. Keep that behavior for every media block and every animated widget state.
:::

### What this means for Learn to Fly

LTF's medium is self-paced text and interactive diagrams, which is the condition under which the strongest multimedia claims (narration over text) are weakest. That is good news: it means the cheaper format is also the defensible one (LRN-039). Spend effort on segmenting and pretraining instead, which help regardless of channel.

Add step controls to widgets (LRN-037). The shared `WidgetFrame` is the single place to do it: a Next and Back pair, a Replay, and a mono step counter alongside the existing Explore or "Quiz me" toggle and Reset. Widgets that are pure exploration (sliders) do not need them; widgets that tell a sequence do.

Protect the pretraining order (LRN-038). The building-block sequence in `v1.md` Section 12.1 already puts "Know the airplane" first. The risk is inside lessons, where a section on how two instruments relate can arrive before either has been named. A review question for every lesson: is each part named and shown before it is used?

Keep media paused by default (LRN-043) and keep spoken passages short (LRN-040). And if anyone proposes spoken instructions for Fly mode, treat it as a test with a control group, not a feature (LRN-042). The sim is loud, and the learner's ears are not idle.

## Forgetting and the timing of review

### The shape of forgetting

Ebbinghaus made memory measurable by inventing material with no prior meaning, the nonsense syllable, and a measure of what survives, the savings method: relearn a list to the original criterion after a delay and express the work saved as a percentage of the original work [@ebbinghaus1913memory]. Series of 13 syllables relearned after delays from about twenty minutes to 31 days gave the curve now named after him. His chapter gives approximate figures: about half the work saved after roughly an hour, about one third after 8 hours, 33.7 percent after 24 hours, about one quarter after 6 days and "fully one fifth" after a month. He fitted a logarithmic formula and noted that its constants applied only to his own data.

The same work seeded the spacing literature. Nine 12-syllable series relearned over several days needed far fewer repetitions per series than a single series massed in one day, and Ebbinghaus concluded that 38 repetitions spread over three days were as favorable as 68 on one day, and that with any considerable number of repetitions, distribution is "decidedly more advantageous" than massing [@ebbinghaus1913memory]. He cautioned that this held "for only very limited conditions" and few observations. He also found that series learned twice "fade away much more slowly" than those learned once.

Murre and Dros repeated the savings design in 2015 with one subject (the second author) learning 70 lists of Dutch-phonotactic nonsense syllables at seven delays from 20 minutes to 31 days [@murre2015replication]. The curve was "similar to Ebbinghaus' original data" in broad shape. The long tail was not: the subject's 31-day savings were 0.0410 as measured and 0.137 after correcting for a steady rise in learning time, while the other datasets compared were "in the 0.20 range". A possible upward jump at 24 hours was "mixed" across datasets and absent for the replication subject, and the authors say they "may not conclude" it reflects sleep. The replication confirms that the curve is real for nonsense material and shows that its parameters do not transfer.

Two caveats limit any use of these numbers. Nonsense syllables are a poor model of meaningful learning, and the data come from single self-experimenting subjects [@ebbinghaus1913memory; @murre2015replication]. The direction (steep early loss, then a flattening) is robust; any half-life or percentage is not.

::: myth
**"You forget 70 percent of what you learn within a day, and memory has a fixed half-life."** Ebbinghaus's figures describe his own savings for nonsense syllables and he warned that his constants applied only to his data [@ebbinghaus1913memory]; a modern replication matched the shape but not the long-interval values [@murre2015replication]. Meaningful material learned well can last decades [@bahrick1984semantic]. There is no universal forgetting rate to quote.
:::

### What lasts: permastore

Bahrick tested 733 people on Spanish learned in school, across retention intervals of up to 50 years [@bahrick1984semantic]. Retention declined exponentially for the first three to six years, then stayed unchanged for periods of up to 30 years before a final decline. A large part of what had been learned remained accessible for over 50 years without use or rehearsal; he called this portion "permastore". Retention throughout was predictable from the level of original training, and most people rehearsed so little that rehearsal showed no significant effect. Learned responses split into those with life spans of 0 to 6 years and those of more than 25 years, with none in between, which Bahrick read as a discrete transition into permastore during extended original training.

The evidence is moderate: a large, unusual sample, but training histories gathered by questionnaire and the abstract does not say whether the design was cross-sectional throughout. Later accounts put the plateau's boundaries differently. The finding that matters for design is that how thoroughly something was learned, over how many sessions, predicted what survived.

### Spacing and lag

Cepeda and colleagues' 2006 meta-analysis is the benchmark synthesis [@cepeda2006distributed]. It pooled 839 assessments from 317 experiments in 184 articles and separated two effects earlier reviews had blended. The spacing effect proper compares massed presentation with presentations separated by a gap, for equal study time: learners who met each item at two different times recalled more, "regardless of whether the retention interval was less than 1 min or more than 1 month". The lag effect compares shorter and longer gaps: widening the gap raised retention at first, and beyond a point, relative to the retention interval, further widening reduced it. The best gap rose as the retention interval rose.

The paper's Table 5 shows the scale. At a 1-day retention interval, accuracy was 36.0 percent after gaps of 30 to 59 seconds and 62.5 percent after 1-day gaps. At retention intervals of 2 to 28 days, it was 26.4 percent for 11 to 29 second gaps against 52.8 percent for 1-day gaps. At short retention intervals the comparison reversed: 54.0 percent for gaps from 1 minute to 3 hours against 35.7 percent for gaps of 2 to 28 days at retention intervals of 1 minute to 2 hours [@cepeda2006distributed]. Most of the data are verbal tasks with short gaps and short retention intervals, which is why the same group ran a long-interval study.

That 2008 study had more than 1,350 adults learn 32 obscure facts, review them after a gap of up to 105 days, and take a final test up to 350 days later [@cepeda2008spacing]. At every test delay, widening the gap first improved and then reduced final performance. For a fixed amount of study, the best gap against a zero gap gave a 64 percent increase in final recall (d = 1.1) and a 26 percent increase in recognition (d = 1.5). Among the gaps sampled, the best for recall were 1, 11, 21 and 21 days for retention intervals of 7, 35, 70 and 350 days; interpolated, about 3, 8, 12 and 27 days, or 43, 23, 17 and 8 percent of the retention interval. The optimal gap grew with the retention interval while shrinking as a fraction of it. The authors conclude that the efficient gap "is not some absolute quantity that can be recommended". The recognition gain at the shortest, 7-day interval was only 1 percent; spacing pays most when the horizon is long.

### Expanding against fixed intervals

Many products schedule reviews at expanding intervals and present that as proven. Cepeda and colleagues located 18 studies with 22 comparisons [@cepeda2006distributed]. Expanding intervals did slightly better overall, but variability between studies was large and the authors called conclusions "necessarily tentative"; three researchers using gaps of at least a day found expanding better, fixed better, and no difference. Their summary is that expanding intervals either help or perform about as well as fixed spacing. Feedback may explain the inconsistency, but the data could not test it. They also note that real cramming usually involves noncontiguous study, not the literal massing tested, so the right message is that spaced review beats one block, not that last-minute review is worthless.

::: {.rule #LRN-044 grade="A"}
**Bring every item a learner must keep back in later sessions; never let a single pass be the only exposure.** Distributed presentation beat massed presentation at every retention interval tested in a meta-analysis of 317 experiments [@cepeda2006distributed], the effect appeared in Ebbinghaus's first experiments [@ebbinghaus1913memory], and dedicated reviews rate distributed practice high utility [@dunlosky2013improving].

*In LTF:* each lesson's first `QuizBlock` or a short recap section should revisit one or two items from earlier lessons. Later challenges already reuse earlier skills by plan (`v1.md` Section 12.5); do the same for knowledge items in lessons.
:::

::: {.rule #LRN-045 grade="A"}
**Time reviews relative to when the learner needs the knowledge, not with one fixed gap for everyone.** The best gap grows with the retention interval and shrinks as a fraction of it [@cepeda2006distributed; @cepeda2008spacing]; the authors say no absolute gap can be recommended.

*In LTF:* the planned practice hub (`v2.md` Section 18) and any refresher logic should take the learner's horizon into account where it is known (the next session, a planned flight, a checkride date) and fall back to a short first gap when it is not.
:::

::: {.rule #LRN-046 grade="B"}
**Do not describe expanding review intervals as proven best; fixed or growing gaps are both justified.** Across 22 comparisons, expanding intervals were at most slightly better, with large between-study variability [@cepeda2006distributed].

*In LTF:* the SM-2-style scheduler in `v2.md` D2-13 is acceptable as an implementation. Learner copy for the practice hub should say "spaced review helps you remember", not "scientifically optimized intervals".
:::

::: {.rule #LRN-047 grade="B"}
**Never show learners a forgetting percentage, a memory half-life or a precise "memory strength" meter.** Ebbinghaus's figures are specific to his nonsense syllables and his data [@ebbinghaus1913memory], and a careful replication produced very different long-interval values [@murre2015replication]. Any strength display is an estimate and must be labeled so or left out.

*In LTF:* if the practice hub shows when an item is due, show the due date, not a decaying bar. `ProgressRing` and `ProgressBar` should measure completion, never inferred retention.
:::

::: {.rule #LRN-048 grade="B"}
**Greet a returning learner with a quick check of what they learned before, then a targeted refresher; never force a restart.** Relearning costs much less than first learning [@ebbinghaus1913memory], and much of what is learned thoroughly survives long periods without rehearsal [@bahrick1984semantic].

*In LTF:* the `DashboardPage` Continue card and the lesson resume bar are where this belongs. After a long gap, offer "Check what you remember" from the last completed module before "Continue where you left off", and route wrong answers to the specific sections.
:::

::: {.rule #LRN-049 grade="B"}
**Teach core knowledge to a performance criterion across several sessions, not in one sitting.** In Bahrick's 50-year study the level of original training predicted retention throughout [@bahrick1984semantic], and material learned twice faded more slowly than material learned once [@ebbinghaus1913memory].

*In LTF:* basic control effects and core terms recur from Module 1 onward. Mark which items are "core" in the content files, and require each to be answered correctly in at least two different sessions before the module counts as mastered.
:::

::: {.rule #LRN-050 grade="C"}
**Let the learner's own review accuracy override the default schedule.** Individual and dataset differences are largest at long intervals [@murre2015replication], and the effect of feedback on interval benefits is unresolved [@cepeda2006distributed]. Graded C: a design inference.

*In LTF:* a missed review item returns sooner; a repeatedly correct one later. The plan's Again, Hard, Good and Easy ratings are self-reports; weight actual correctness on the item more than the rating.
:::

::: {.rule #LRN-051 grade="B"}
**Schedule the first review soon after learning, at the start of the next session or the next day.** Loss is steepest early [@ebbinghaus1913memory; @bahrick1984semantic], and for horizons of one to two weeks the best gaps in the large online study were a few days [@cepeda2008spacing].

*In LTF:* the first screen of a new session (the `DashboardPage` or the next lesson's top) should offer two or three items from the previous session before new material.
:::

### What this means for Learn to Fly

LTF today has no spaced review. Lessons are linear, quiz answers are kept in `sessionStorage` by `quizStore.ts` (so they vanish when the tab closes, with signed-in answers recorded on the server per the code comment), and the only planned refresher in v1 is a P1 dashboard suggestion after 14 days without flying (`v1.md` Section 12.5). The practice hub with an SM-2-style scheduler is a v2 plan (`v2.md` Section 18, D2-13), and v1 lists spaced-repetition flashcards in its parking lot. The evidence in this chapter is the strongest in the Part, and it says this gap matters more than any layout question in the lesson pages.

The minimum v1 change is structural, not a new feature: every lesson opens or closes with a recall of one or two items from earlier lessons (LRN-044, LRN-051). This needs only content and the existing `QuizBlock`.

For v2, keep the scheduler simple and honest (LRN-045, LRN-046, LRN-050). Schedule around the learner's horizon when known, override by accuracy, and do not market the intervals as optimal. Show due dates, never strength meters (LRN-047).

Design for return (LRN-048). LTF's learners will stop for weeks. The Continue card and the resume bar should offer a check before the next lesson, and route mistakes to sections.

Define mastery across sessions (LRN-049). "Mark lesson complete" records that a lesson was read. Mastery of core knowledge should mean the item has been retrieved correctly on more than one day.

## Retrieval practice and feedback

### Testing as a learning event

A memory test is usually treated as a measurement. The testing effect says it is also one of the most effective ways of producing the knowledge it measures. Roediger and Karpicke had 120 undergraduates study two short prose passages for seven minutes each, then either restudy one passage for seven minutes or spend the same time on a free-recall test with no feedback [@roediger2006testenhanced]. On a final test five minutes later, restudy won (81 against 75 percent of idea units, d = 0.52). Two days later the order reversed (68 against 54 percent, d = 0.95), and after a week the tested passage still led (56 against 42 percent, d = 0.83). The tested students at one week recalled slightly more than the restudy students had at two days. The restudy group re-read the whole passage while the tested group re-experienced only what they could produce, so the design if anything favors restudy.

The second experiment, with 180 students, compared four study periods (SSSS), three study periods and a test (SSST), and one study period and three tests (STTT) [@roediger2006testenhanced]. At five minutes the order was SSSS 83, SSST 78, STTT 71 percent. At a week it reversed: STTT 61, SSST 56, SSSS 40 percent. Proportional forgetting over the week was 14 percent for STTT against 28 percent for SSST. The SSSS group read the passage about 14.2 times against 3.4 for STTT, and predicted better one-week recall than the other groups, the opposite of what happened.

Two lessons follow. The first is a crossover: an immediate test rewards whatever makes material feel familiar, and a delayed test rewards whatever made the learner produce it. The second is that the learner's own judgment points the wrong way.

### How large, and against what

Rowland's meta-analysis pooled 159 effect sizes from 61 studies reported between 1975 and 2013 [@rowland2014effect]. The mean benefit of testing over restudy was g = 0.50 (95 percent CI 0.42 to 0.58), and 0.66 (CI 0.56 to 0.75) in a high-exposure subset of 92 effects where tested items were fully re-exposed through feedback or high initial success. Heterogeneity was large (I-squared about 84 percent): 81 percent of effects favored testing, 18 percent favored restudy and 1 percent were zero. Published studies averaged 0.58 and unpublished ones 0.25, a gap that vanished in the high-exposure set. Initial recall tests produced larger benefits than recognition tests, which Rowland reads as support for effortful retrieval as a contributor. The average is moderate and reliable; it is not a promise for any given lesson.

Karpicke and Blunt tested retrieval against a strong rival: concept mapping done with the text in view [@karpicke2011retrieval]. With learning time matched, and with the ideas included in maps and in recalls nearly identical (0.78 against 0.81), retrieval practice scored 0.67 on a one-week test against 0.45 for concept mapping (d = 1.50), on verbatim and inference questions alike. In the second experiment, with enumeration and sequence texts, the advantage held at about d = 1.07 and 1.01 on short-answer and concept-map final tests; 101 of 120 students did better with retrieval, yet only 30 had predicted it would win and 59 predicted mapping would. The authors note that mapping without the text would itself be retrieval, and that "active" is not diagnostic of how much a task teaches.

Dunlosky and colleagues' review of ten learning techniques rates practice testing as one of two high-utility techniques, because it benefits learners of different ages and abilities across many criterion tasks and in educational contexts [@dunlosky2013improving]. Rereading is rated low.

### Feedback

Multiple-choice items cut both ways. They strengthen what is tested, and they show the learner plausible wrong answers that can be absorbed as knowledge. Butler and Roediger had 72 undergraduates study prose passages and take a multiple-choice test with no feedback, immediate feedback (the correct answer shown for 10 seconds after each response) or delayed feedback (at the end of the test) [@butler2008feedback]. On a cued-recall test a week later, the proportion correct was .14 for untested material, .31 after the test without feedback, .45 with immediate feedback and .56 with delayed feedback. Intrusions of the lure answers were .16 untested, .24 without feedback, .15 with immediate and .14 with delayed feedback: feedback brought false knowledge back to baseline. The authors' advice is direct: "Educators should provide feedback when using multiple-choice tests". The delayed-feedback advantage is less general; "delayed" here meant minutes, at the end of the test, and the authors link it to spacing (the feedback is a spaced study trial). Feedback timing effects vary with material and test type, and Rowland treats feedback as one moderator of the testing effect [@rowland2014effect].

### Low stakes, often

Make It Stick, a popular synthesis by two of the researchers behind this literature and a writer, lists the practical consequences: recalling beats rereading, quizzing on assigned reading beats reviewing it, and regular low-stakes or no-stakes quizzes across a term build retention "somewhat like compound interest" [@brown2014make]. The book is a framing source, not evidence in its own right; its claims stand on the primary studies above.

::: {.rule #LRN-052 grade="A"}
**After each lesson section, ask the learner to retrieve the key point before they can re-read it.** Retrieval beats restudy on delayed tests, with a medium average effect across 159 effect sizes [@rowland2014effect; @roediger2006testenhanced], beats elaborative concept mapping with the text open [@karpicke2011retrieval], and is rated high utility [@dunlosky2013improving].

*In LTF:* `QuizBlock` after each section is the plan (`v1.md` Section 17.2: 2–4 questions per lesson, after the section they test). Keep it, and word prompts to ask for recall ("Without scrolling up, what comes first?") rather than recognition of a sentence the learner can see just above.
:::

::: {.rule #LRN-053 grade="B"}
**Use recall formats (type the term, give the number, put the steps in order from memory) for facts the learner must produce later; keep multiple choice for judgment between situations.** Initial recall tests produced larger benefits than recognition tests [@rowland2014effect], and multiple-choice lures can be learned as false knowledge [@butler2008feedback].

*In LTF:* `QuizBlock` supports `single`, `multi`, `numeric` and `order`. Use `numeric` for values (written with `{{vspeed.*}}` and `{{aircraft.*}}` tokens) and `order` for sequences. A short-answer type, matching typed terms against the glossary, is the missing recall format.
:::

::: {.rule #LRN-054 grade="B"}
**Follow every answer, right or wrong, with the correct answer and a one-sentence reason.** Feedback raised correct recall and brought lure intrusions back to the untested baseline [@butler2008feedback]; the testing effect is larger with re-exposure through feedback [@rowland2014effect].

*In LTF:* `QuizBlock` already shows the explanation after any answer. The widget `QuizPanel` does not: a wrong answer shows "Not quite. Try again." with no explanation, and the learner can press "Next question" without ever seeing the right answer. Show the target and the reason after a wrong answer too.
:::

::: {.rule #LRN-055 grade="B"}
**Write distractors that reflect real misconceptions, and make the feedback name why the chosen distractor is wrong.** Plausible wrong options are absorbed when not corrected [@butler2008feedback]; the corrective value comes from the feedback, not the option.

*In LTF:* `v1.md` Section 17.2 already asks for distractors that "reflect real misconceptions". Extend the authoring rule: the explanation addresses the most common wrong option by name. A distractor that states a wrong aviation fact must never appear in a quiz without feedback.
:::

::: {.rule #LRN-056 grade="B"}
**Keep retrieval items achievable: a learner who has read the section should usually get them right on the first try.** The testing benefit is larger when tested items are re-exposed through high initial success or feedback [@rowland2014effect], and a difficulty is desirable only if the learner can respond to it [@bjork2009making].

*In LTF:* `quizStore.ts` records `correctFirstTry`. An item that most learners miss on the first try is testing the writing, not the learner; revise the section or the item.
:::

::: {.rule #LRN-057 grade="B"}
**Mix direct recall items with inference items that ask the learner to apply or connect ideas.** Retrieval practice improved both verbatim and inference performance [@karpicke2011retrieval].

*In LTF:* the L2.2 item that asks what to do when altitude slowly increases with the controls centered is an inference item; balance each lesson's set so at least one item is of that kind.
:::

::: {.rule #LRN-058 grade="B"}
**Spread short, ungraded retrieval items through every lesson and across the course instead of relying on an end-of-module test.** Low-stakes quizzing repeated over time builds retention [@brown2014make; @dunlosky2013improving], and spaced retrieval combines two high-utility techniques [@cepeda2006distributed].

*In LTF:* quizzes are already low stakes with unlimited retries (`v1.md` Section 17.3). Keep them out of challenge tiers and out of `DashboardPage` "Gold results".
:::

::: {.rule #LRN-059 grade="B"}
**Use a retrieve, check, retrieve cycle for procedures: recall, compare against the source, recall again.** Retrieval practice in Karpicke and Blunt's design alternated recall and restudy, and beat both repeated study and concept mapping [@karpicke2011retrieval].

*In LTF:* for a checklist, the `checklist-runner` widget can offer a "from memory" mode: the learner lists the items, then sees the checklist, then tries again.
:::

::: {.rule #LRN-060 grade="C"}
**Place recall prompts at the briefing and the debrief, never during a flight.** Recall competes with flying for the same limited capacity [@sweller2019cognitive], and the testing literature concerns study sessions, not concurrent tasks [@rowland2014effect]. Graded C.

*In LTF:* the `BriefTab` can open with "Before you start: what are the steps?" and the `DebriefForm` can end with one recall item. `FlyModePage` stays free of questions; its random events test performance, not memory.
:::

### What this means for Learn to Fly

LTF's quiz design follows the evidence in its basics: questions after sections, unlimited retries, an explanation after every `QuizBlock` answer, and the first answer recorded. Keep all of that (LRN-052, LRN-054, LRN-058).

Fix the widget quiz (LRN-054). `QuizPanel` hides the explanation after a wrong answer and lets the learner move on. That is the condition in which wrong answers are most likely to be retained. Show the correct target and the explanation on a wrong answer, and keep "Try again" available.

Add a recall format (LRN-053). The four `QuizBlock` types are mostly recognition. A short-answer type that accepts glossary terms, or a cloze format using aircraft tokens (as `v2.md` Section 18.2 plans for flashcards), gives LTF the format with the larger benefit.

Use `correctFirstTry` as an authoring signal (LRN-056). It shows which items most learners miss; those items or their sections need rewriting.

Separate retrieval from the score. The lesson completion panel ("Finished reading and trying the questions?" and "Mark lesson complete") should not present an in-lesson quiz result as proof of learning; the five-minute result is the one that misleads. The plan says the completion screen shows the score and suggests reviewing missed sections (`v1.md` Section 17.3); if it does, it should frame the score as practice and point to a later review. And keep recall out of the cockpit (LRN-060): the Brief and Debrief tabs are the right moments.

## Interleaving, variation and desirable difficulty

### Learning is not what you see during practice

Bjork and Bjork state the problem that unites this chapter: learners and teachers are easily misled about whether learning has occurred, because performance during practice is an unreliable index of learning [@bjork2009making]. Performance is what can be observed during instruction; learning is the relatively permanent change that supports later retention and transfer, and it must be inferred. The two dissociate in both directions. Learning can occur without visible change in performance, and performance can improve without learning, which is revealed after a delay or in another context [@soderstrom2015learning]. Conditions that speed apparent progress often fail to support long-term retention and transfer, while conditions that slow apparent progress often optimize them.

The Bjorks explain this with two strengths of a memory [@bjork2009making]. Storage strength is how entrenched and interconnected a memory is; retrieval strength is how accessible it is right now, driven by cues and recency. Current performance reflects retrieval strength alone, but storage strength slows forgetting and speeds relearning. Conditions that raise retrieval strength quickly (massing, rereading, blocked practice) differ from those that build storage strength, so a learner who reads present fluency as durable learning will prefer the worse conditions. In a 2020 commentary they add that the higher the current retrieval strength, the smaller the storage gain from another study or retrieval, so some forgetting before review makes the review worth more.

They name four desirable difficulties: varying the conditions of learning, interleaving rather than blocking, spacing rather than massing, and using tests rather than presentations as study events [@bjork2009making]. The adjective carries the weight. Many difficulties are undesirable, and a difficulty becomes undesirable when the learner lacks the background to respond to it successfully. Critics can fairly say the framework groups effects with distinct mechanisms, and the classroom base is thinner for interleaving than for spacing and testing.

### Interleaving

Rohrer and Taylor tested two features of the standard mathematics practice set, which concentrates on the lesson just taught in blocks of one problem type [@rohrer2007shuffling]. In the first experiment, 66 undergraduates learned to count permutations of letter sequences with repeated letters. Students who spread the same practice problems across two sessions a week apart scored 74 percent on a test a week later, against 49 percent for students who massed them and 46 percent for a lighter massed group, although accuracy during the later practice session was about equal (83 against 82 percent). In the second experiment, 18 undergraduates learned to find the volumes of four obscure solids. Blockers did four problems on one solid in a row; Mixers did the same problems in a mixed order. During practice, Blockers scored higher (89 against 60 percent, d = 1.06). On the test a week later the pattern reversed: Mixers 63 percent, Blockers 20 percent (d = 1.34). The authors read this as mixing forcing learners to choose which procedure applies, not merely execute the one just taught, and note that the blocked format is also the default of computer-aided instruction.

The samples are small, the tasks artificial and the retention interval one week, so the sizes are probably larger than a real course would see [@rohrer2007shuffling]. The direction has classroom support reported elsewhere, and Dunlosky and colleagues rated interleaving moderate utility in 2013 because the evidence base was still small [@dunlosky2013improving]. The practice-phase reversal is the important part: blocked practice looks better while it is happening.

### Interleaving for telling things apart

A long-standing view held that massing helps induction, because seeing examples of one category together reveals what they share. Kornell and Bjork tested it with paintings [@kornell2008learning]. Undergraduates studied 72 paintings, six by each of 12 artists, with some artists' paintings presented together and others interleaved with other artists' work. On new paintings by the same artists, interleaved presentation gave better identification (.61 against .35 correct in Experiment 1a, d = 0.99; .59 against .36 in Experiment 1b, d = 1.28). A recognition version that did not require recalling names still favored interleaving (hit rate .77 against .67, d = 0.41).

The metacognitive result is as striking as the learning one. In Experiment 1a, 78 percent of participants did better with interleaved presentation, yet 78 percent judged massing as good as or better, after the test had shown otherwise [@kornell2008learning]. The authors also built a case where massing wins: word puzzles that each hide a linking word were solved and remembered better when massed (.34 against .22), because interleaving made them nearly impossible to solve. They call it contrived, and they caution that their design cannot separate spacing from interleaving; the benefit may come from interleaving's support for discrimination between categories (telling a maple from an oak requires learning the differences among trees).

### Varying the conditions

The Bjorks' examples of varied practice come from verbal and motor learning [@bjork2009making]. Studying in two different rooms rather than twice in one room increased recall. Children practicing beanbag throws at varied distances beat children who practiced only at the distance they were tested on. In a pinball-like motor task, blocked practice improved faster but, ten days later, interleaved practice was far better under random testing. Learners given interleaved keystroke practice predicted their next-day performance closely, while blocked learners were markedly overconfident. Soderstrom and Bjork's review integrates these motor and verbal literatures; its specifics in the sources behind this Part come from secondary accounts, but its abstract states the central claim that people "often mistakenly interpret their performance during acquisition as a reliable guide to long-term learning" [@soderstrom2015learning].

::: {.rule #LRN-061 grade="B"}
**Once each type of problem has been taught, mix types in practice sets and challenge sequences instead of stacking several of one kind.** Mixed practice scored lower during practice and far higher a week later [@rohrer2007shuffling]; the technique is rated moderate utility because the classroom base is still limited [@dunlosky2013improving].

*In LTF:* review quizzes and challenge suggestions should draw from several earlier topics. A "mixed practice" set at the end of a module (one climb, one descent, one turn, one level-off item) is better than five items on the last lesson.
:::

::: {.rule #LRN-062 grade="B"}
**When learners must tell similar things apart, present the examples interleaved, not one category at a time.** Interleaved exemplars improved classification of new cases in several experiments [@kornell2008learning]. The design does not separate spacing from interleaving, so treat both as supported.

*In LTF:* the `sectional-legend` widget, airspace classes in `airspace-profile`, and look-alike instrument indications in `vor-cdi` and `turn-coordinator` are discrimination tasks. Their quiz modes should mix categories in each run.
:::

::: {.rule #LRN-063 grade="A"}
**Never choose an instructional format by learners' stated preference or by their accuracy during practice.** Learners judged massing as good as or better than interleaving after doing worse with it [@kornell2008learning], predicted that rereading would beat testing [@roediger2006testenhanced; @karpicke2011retrieval], and blocked practice inflates in-practice accuracy while lowering later performance [@rohrer2007shuffling; @bjork2009making].

*In LTF:* a satisfaction survey or a "which version did you like?" test cannot decide between a blocked and a mixed review set. Decide on a delayed measure (see "Measuring learning, not performance").
:::

::: {.rule #LRN-064 grade="C"}
**Tell learners once, in plain words, that mixed and recall practice feels harder and works better, then do not repeat it.** Desirable difficulties are "typically undesired" by learners, who read effort as failure [@bjork2009making; @brown2014make]. Graded C: no study here tests the message itself.

*In LTF:* one sentence in the first mixed review ("These questions jump between topics on purpose. It feels harder and helps you remember.") in the calm-instructor voice the plan sets. Not a banner, not on every set.
:::

::: {.rule #LRN-065 grade="B"}
**Vary the conditions of repeated practice: change the airport, runway, weather or starting state between attempts at the same skill.** Varied practice beat constant practice at the tested condition and improved later performance in motor tasks [@bjork2009making; @soderstrom2015learning].

*In LTF:* challenges already support random events and presets. When the learner retries a challenge they have passed, offer a variant setup from `content/presets.yaml` rather than the identical one, and say so in the Brief.
:::

::: {.rule #LRN-066 grade="B"}
**Add difficulty only after a first explained pass, and only of a kind the learner can respond to.** A difficulty is desirable only when the learner has the background to meet it [@bjork2009making]; worked examples first, then mixed and varied practice [@kalyuga2003expertise].

*In LTF:* the first challenge of a skill keeps the default setup and no random events; variation and events arrive in later challenges of the module.
:::

::: {.rule #LRN-067 grade="B"}
**Do not reward streaks or within-session accuracy as signs of progress.** Blocked practice and massing raise accuracy during practice without raising learning [@rohrer2007shuffling; @soderstrom2015learning].

*In LTF:* `QuizPanel`'s "Quiz complete: n of m correct" is fine as feedback in the moment; do not carry it into `DashboardPage` stats or progress. If streaks are ever added for motivation (see the Part on motivation), they should count days of practice, not runs of correct answers.
:::

### What this means for Learn to Fly

LTF's structure is blocked by default: a lesson teaches one topic, its quizzes test that topic, and its challenge practices it. That is right for first exposure (LRN-066) and wrong as the only form of practice. Add mixing after the first pass (LRN-061, LRN-062): end-of-module mixed sets, widget quiz modes that draw from several categories, and challenge suggestions that return to earlier skills.

Expect learners to prefer the blocked version and to score lower on the mixed one (LRN-063). Say so once (LRN-064), and never let a preference survey or an in-session score decide the format.

Use variation in challenges deliberately (LRN-065). The challenge system already has presets, airports and random events. Make the first attempt at a skill standard and later attempts varied, with the Brief stating what changed.

Keep progress honest (LRN-067). The dashboard's "Your progress" bars measure completion, which is fine as long as they are not presented as learning. Measures of learning belong to delayed checks, which the next chapters cover.

## Meaning, cues and the myths of study

### Depth of processing

Craik and Lockhart proposed in 1972 that a memory trace is "a by-product of perceptual analysis" and that "trace persistence is a positive function of the depth to which the stimulus has been analyzed" [@craik1972levels]. Analysis runs from shallow features (what a word looks like, how it sounds) to meaning and association, and deeper analysis yields a more durable trace. They distinguished two kinds of rehearsal. Maintenance rehearsal, their Type I processing, repeats analyses already done and keeps an item accessible "without leading to formation of a more permanent memory trace". Type II processing analyzes the item more deeply and is the kind that improves memory. Time spent rehearsing improves memory only when it is Type II.

Most of the support came from incidental learning experiments, where an orienting task forces a kind of processing and memory is then tested by surprise [@craik1972levels]. Free recall after a task that treated each word as a meaningful unit equaled that of people told to learn, and both were far better than recall after a task that treated the word structurally, such as checking its letters. Scanning a list for words denoting living things gave better surprise recognition than scanning for words containing a given letter, with about the same scanning time. The instruction to learn helped only insofar as it produced better processing. The authors built in a caution: identical orienting tasks do not have equivalent effects across paradigms, and beyond a point the processing that proves effective depends on the match between encoding and retrieval.

The framework is influential and contested. Criticisms reported in secondary sources (not the paper itself) are that depth is inferred from good recall and then used to explain it, that it is hard to know what level a task induces, and that the framework describes rather than explains [@craik1972levels]. The practical consensus is that processing for meaning beats processing for surface features, and that retrieval and spacing add benefits depth alone does not capture. Dunlosky and colleagues rate self-explanation and elaborative interrogation (asking why a fact is true) moderate utility, because they had not been adequately evaluated in educational contexts [@dunlosky2013improving].

### The cue must match the memory

Tulving and Thomson's encoding specificity principle holds that what is stored depends on how an item was encoded, and what is stored determines which retrieval cues work [@tulving1973encoding]. A cue is effective when information about it was part of the original encoding. In the best-known demonstration, people studied a target word beside a weak associate; later, given a strong associate of the target as a cue, they often failed to produce or even recognize it, yet recalled it when given the original weak cue. Thomson later stated the principle as the effectiveness of a cue "varies directly with the extent it matches the format of the to-be-remembered information stored in memory". The paper itself was not available to this Part's research, and these details come from secondary accounts.

The principle's core claim about cues is better supported than its popular corollary about physical context [@tulving1973encoding]. Critics argue that encoding-retrieval overlap is correlational and that distinctive cues may matter more, and context effects are strongest in free recall and weaker when strong cues are present. The best-known applied example, divers who learned word lists on land or underwater, did not replicate in a 2021 attempt by Murre with 16 divers (*Royal Society Open Science*): the interaction was not significant (F = 1.999, p = 0.163), and the author concluded the original effect was not reproduced.

For a product, the robust version of the principle is about the cues, not the room. A learner who has only ever met a checklist item as a line of text in a lesson may not retrieve it when the cue is an indication on a sim panel. Practice should use the cues the learner will actually meet.

::: myth
**"Study in the same place you will be tested and the setting will bring the memories back."** The classic underwater-and-on-land diver study did not replicate in a 2021 attempt, and context effects shrink when good retrieval cues are present [@tulving1973encoding]. What transfers is the match between the cues present at learning and at recall, not the physical surroundings.
:::

### Learning styles

The learning-styles idea is that people differ in which mode of instruction is most effective for them, usually in the "meshing" form: teach a "visual learner" visually and an "auditory learner" aurally [@pashler2008learning]. Pashler and colleagues set out what a valid test requires: classify learners by style, randomly assign each group to several methods, give all the same test, and find a crossover interaction in which the method best for one style is not best for another. The literature is enormous, but very few studies used that design, and of those that did, several found results that "flatly contradict the popular meshing hypothesis". The conclusion: "there is no adequate evidence base to justify incorporating learning-styles assessments into general educational practice". The authors are careful not to claim every version has been disproved; many have never been properly tested.

A 2018 mini-review by Aslaksen and Loras in *Frontiers in Psychology* found 10 studies (13 experiments) meeting Pashler's criteria; pooled effects of matching were small and not significant (visual matching g = -0.09, auditory g = -0.27), leaning "clearly" toward no effect while noting how few studies there are. Belief remains widespread: the same review cites 93 percent of UK teachers in one survey assuming people learn better in their preferred style, and 58 percent of 114 UK academics believing in learning styles in a 2017 survey. People do have preferences and do differ in specific aptitudes [@pashler2008learning]; what lacks support is the claim that matching instruction to a preference improves learning. Dual coding gives every learner both verbal and imaginal systems and assigns no one to a type [@paivio1986mental].

::: myth
**"Find out whether each learner is visual, auditory or kinesthetic and teach them that way."** Properly designed tests of the matching hypothesis are rare and several contradict it [@pashler2008learning]; a 2018 review of the qualifying studies found no significant benefit of matching. Choose formats by the content, for every learner.
:::

### Techniques that feel productive and are not

Dunlosky and colleagues rated ten techniques students use on their own [@dunlosky2013improving]. Practice testing and distributed practice were rated high utility. Elaborative interrogation, self-explanation and interleaved practice were moderate. Summarization, highlighting or underlining, the keyword mnemonic, imagery use for text learning and rereading were low: rereading and highlighting are widely used but "do not consistently boost students' performance". The ratings are expert judgments of generalizability from a 2013 literature, not a meta-analysis, and they rate techniques students choose, not techniques a product builds in. Make It Stick translates the same findings for general readers: underlining, rereading and cramming create a feeling of mastery whose gains fade, while self-testing, spacing and interleaving build durable learning [@brown2014make].

::: {.rule #LRN-068 grade="B"}
**For each procedure step, ask the learner why it is there and what would happen if it were skipped.** Processing for meaning produces more durable memory than repeating surface form [@craik1972levels], and self-explanation and elaborative interrogation are rated moderate utility [@dunlosky2013improving].

*In LTF:* a "Why this step?" prompt can follow a checklist in a lesson, or be a `single` `QuizBlock` whose options are reasons. The `checklist-runner` widget can reveal each item's purpose on request.
:::

::: {.rule #LRN-069 grade="C"}
**Write explanations around what an indication means for the airplane, not around what it looks like.** Semantic analysis yields more durable traces than structural analysis [@craik1972levels]. Graded C: the framework is contested and the application is an inference.

*In LTF:* lesson copy for a gauge says what a change on it tells the pilot to do or expect, with the visual description in the widget label.
:::

::: {.rule #LRN-070 grade="B"}
**Practice retrieval with the cues the learner will meet in the sim: an indication, a scene, a sound, a phrase.** A cue works when it was part of the original encoding, and a strong but unmatched cue can fail where a matched weak cue succeeds [@tulving1973encoding]. Graded B: the core principle is well cited; its applied forms are mixed.

*In LTF:* quiz prompts can show a `g1000-pfd` or `airspeed-indicator` state and ask what it means, instead of asking for a definition. Fly mode steps should name the indication as the sim shows it.
:::

::: {.rule #LRN-071 grade="C"}
**Use the same words for the same thing in lessons, checklists, quizzes, Fly mode and, where possible, the sim's own labels.** Retrieval depends on the match between the cue and what was encoded [@tulving1973encoding]; changing the name changes the cue. Graded C.

*In LTF:* `content/glossary.yaml` is the authority (`v1.md` Section 12.4). Add a review check that checklist items and `procedure` steps use glossary terms, and note in the glossary where the sim labels a control differently.
:::

::: {.rule #LRN-072 grade="B"}
**Do not tell learners that studying beside the sim or in a particular setting will lock in memory.** The headline physical-context study did not replicate [@tulving1973encoding], and context effects weaken when good cues are present.

*In LTF:* copy about using LTF on a second screen should justify it by convenience and by showing the right cues, not by context-dependent memory.
:::

::: {.rule #LRN-073 grade="A"}
**Do not offer learning-style assessments, "visual" or "auditory" tracks, or copy that describes learners by style.** The matching hypothesis lacks support in properly designed studies and several contradict it [@pashler2008learning]; both coding systems are present in every learner [@paivio1986mental].

*In LTF:* choose diagrams for spatial content (instrument layouts, patterns) and text for logical content, for everyone. Captions, transcripts, text size and the Day and Night themes are access features, never labeled as style matching.
:::

::: {.rule #LRN-074 grade="B"}
**Do not present highlighting, rereading or copying summaries as ways to study.** They are rated low utility and do not consistently improve performance [@dunlosky2013improving]; retrieval and spacing are the replacements.

*In LTF:* a future highlight or bookmark tool is a convenience, not a study method. A "how to learn with Learn to Fly" page should recommend recall and spaced review, in a sentence each.
:::

::: {.rule #LRN-075 grade="C"}
**Do not treat a well-explained lesson as a substitute for later retrieval.** Meaningful processing helps, but effortful retrieval and spacing add benefits that depth alone does not capture [@craik1972levels; @rowland2014effect]. Graded C.

*In LTF:* a lesson rated clear and thorough in review still needs a later recall item in another lesson.
:::

### What this means for Learn to Fly

Three things here are already right in LTF and worth protecting. The glossary is the authority for terms (LRN-071). The landing page and lessons make no learning-styles claims (LRN-073). The `Callout` set separates "Sim vs reality" and "In a real airplane", which keeps cues honest about which environment the learner will meet.

Add "why" to procedures (LRN-068). Challenge `procedure` steps and checklists state what to do. A lesson section or a quiz should ask why, and the `checklist-runner` widget can carry each item's purpose.

Make cues look like the sim (LRN-070). The widgets can render the indications a learner will see; quiz prompts built on them practice retrieval with the right cue. Fly mode copy should describe what the learner sees, in the sim's terms.

Keep study advice evidence-based (LRN-074). If LTF writes a page on how to use the course, it should say: recall instead of rereading, come back after a few days, mix topics. Make It Stick shows how to say it plainly; quote no numbers from it.

## Measuring learning, not performance

### Why the obvious measures mislead

Every chapter in the memory half of this Part ends at the same warning. An immediate test favored rereading over retrieval, while a test two days later reversed it [@roediger2006testenhanced]. Blocked practice scored 89 percent during practice and 20 percent a week later, against 60 and 63 percent for mixed practice [@rohrer2007shuffling]. Massed presentation felt as good or better to learners who did worse with it [@kornell2008learning]. Soderstrom and Bjork's review generalizes the point: the primary goal of instruction is "relatively permanent changes in comprehension, understanding, and skills", and performance during instruction "is often an unreliable index" of whether those changes have occurred [@soderstrom2015learning]. The Bjorks, in a 2020 commentary that cites this review, put it as a rule of measurement: learning "can only be measured at a delay".

The research base itself shares the weakness. Mayer's preface to the third edition of *Multimedia Learning* says that "most research still focuses on learning in short-term studies with immediate tests in laboratory environments involving college students" and calls for longer studies in authentic settings [@mayer2021multimedia]. De Jong makes the same point about cognitive load studies with minutes of study time and no replay [@dejong2010cognitive]. LTF's learners study over weeks, beside a simulator, with full control of pace. The laboratory defaults in this Part are the best available starting point; LTF's own delayed data is the only way to know whether they hold.

### What a learning product can observe

LTF can see several kinds of evidence, and they are not equal.

Immediate performance is what a learner does in the lesson or flight that taught it: the first `QuizBlock` answer in a section, the `QuizPanel` score, a challenge attempt right after its lesson. It reflects retrieval strength and is inflated by recency, blocking and repetition [@bjork2009making]. It is useful for finding confusing content, not for judging learning.

Delayed performance is the same knowledge or skill tested after a gap, ideally in a later session: a recall item from Lesson 2.2 asked at the start of Lesson 2.4, or the first attempt at a challenge revisited after a week. This is the measure the testing and spacing literatures use [@roediger2006testenhanced; @cepeda2008spacing].

Transfer performance is the knowledge applied in a new situation: a scenario question that was not asked before, a challenge at a different airport or with a random event. Seductive details harm transfer more than retention [@rey2012review], signaling helps transfer less than retention [@schneider2018meta], and the original worked-example effect was limited to problems of the same structure [@sweller1985use]. Transfer is where design differences show most and where many effects are smallest; it is the measure that matters for flying.

Self-report covers ratings of effort, confidence or preference. Effort ratings are relative at best [@dejong2010cognitive], and confidence and preference point the wrong way in several studies [@roediger2006testenhanced; @karpicke2011retrieval; @kornell2008learning]. Self-reports are useful as data about the learner's beliefs, which can themselves be a target for feedback.

### Comparing versions

The heterogeneity in this literature is large. Rowland's testing-effect meta-analysis found that 18 percent of effects favored restudy [@rowland2014effect]; seductive-detail harm varies with format and pacing [@rey2012review]; the modality effect shrinks with learner pacing [@dejong2010cognitive]. An average effect is a reason to adopt a default, not a guarantee for a particular lesson. When LTF has a choice that matters (a mixed review set or a blocked one, a narrated widget or a printed one, an anecdote in a lesson or not), the useful question is which version produces better delayed and transfer results for LTF's learners.

That requires two things the product mostly lacks today. The first is a delayed item to measure with: a recall question placed in a later lesson, or a revisited challenge. The second is persistent data: `quizStore.ts` keeps answers in `sessionStorage`, with signed-in answers recorded on the server per its comment, and `v1.md` Section 17.3 records first answers for analytics. Those first answers are the right raw material if they are kept across sessions and linked to the item.

### Showing learners the gap between feeling and knowing

Because learners misjudge their own learning, the measurement can be turned toward them. Make It Stick's "avoid illusions of knowing" theme supports a simple feature: ask the learner to predict how they will do before a set, then show the result beside the prediction [@brown2014make]. Roediger and Karpicke's repeated-study group predicted the best one-week recall and had the worst [@roediger2006testenhanced]; showing a learner that gap once is a direct way to make the case for retrieval. No study in the sources behind this Part tests the feature itself, so it is a candidate, not a proven method.

### Honest claims

Several of the sources warn against the claims learning products like to make. The testing effect is moderate and varies widely, so "learn x percent faster" is not supportable [@rowland2014effect]. Bahrick's permastore result is specific to school-learned language, so "you will never forget" is not either [@bahrick1984semantic]. Expanding intervals are not established as best [@cepeda2006distributed]. And desirable difficulty is a claim to measure, not a slogan: a product that says it "optimizes difficulty" should show the delayed data [@bjork2009making].

::: {.rule #LRN-076 grade="A"}
**Measure learning with delayed checks, and report them separately from in-lesson results.** Immediate performance and delayed retention dissociate and can reverse [@roediger2006testenhanced; @rohrer2007shuffling; @soderstrom2015learning]; learning can only be inferred at a delay.

*In LTF:* the `DashboardPage` "Your progress" section can keep completion bars, and add a separate, plainly labeled line such as "Remembered after a week" built from delayed review items. Never merge the two into one number.
:::

::: {.rule #LRN-077 grade="B"}
**Treat a challenge pass as evidence of performance on that day, and follow it with a check of understanding.** Problems can be solved, even repeatedly, without learning their structure [@chandler1991cognitive; @sweller1988cognitive], and performance during practice is an unreliable index of learning [@soderstrom2015learning].

*In LTF:* after a passed challenge, the `DebriefForm` or `ResultView` can ask one question about why the procedure works. The tier badge stays a record of the flight, not of learning.
:::

::: {.rule #LRN-078 grade="B"}
**Decide between two versions of a lesson, widget or practice set by delayed and transfer results, not by immediate scores or preference.** Effects in this literature vary widely between studies [@rowland2014effect; @rey2012review], and immediate measures and preferences point the wrong way [@kornell2008learning; @karpicke2011retrieval].

*In LTF:* any experiment on lesson design uses a recall or scenario item in a later lesson as its outcome. Completion rate is a secondary measure to watch, not the deciding one.
:::

::: {.rule #LRN-079 grade="C"}
**Offer learners a prediction before a review set and show it beside the result.** Learners overestimate what rereading and massing do for them [@roediger2006testenhanced; @kornell2008learning]; showing the gap is a direct counter [@brown2014make]. Graded C: the feature itself is untested here.

*In LTF:* an optional "How many do you think you will get?" before a mixed review, with the result shown as "You predicted 3, you got 2", never as a grade.
:::

::: {.rule #LRN-080 grade="B"}
**Make no quantitative claims about learning gains, retention or memory in product or marketing copy.** The underlying effects are moderate, variable and mostly measured in short laboratory studies [@rowland2014effect; @mayer2021multimedia]; long-retention findings are specific to their material [@bahrick1984semantic].

*In LTF:* the landing page's stats row counts modules, lessons and challenges; keep it to counts of things that exist. Copy may say "spaced review helps you remember" and no more.
:::

::: {.rule #LRN-081 grade="C"}
**Keep each learner's first attempt at every review item, with its date, as the primary learning record.** The first retrieval attempt is the learning event and the measurement [@roediger2006testenhanced]; later attempts after feedback measure re-exposure [@rowland2014effect]. Graded C: a data-design inference.

*In LTF:* extend the `StoredAnswer` shape in `quizStore.ts` (which already has `firstAnswer` and `correctFirstTry`) with a timestamp, and persist it on the server for signed-in learners, so delayed checks can be compared with first exposure.
:::

### What this means for Learn to Fly

LTF's progress model today is about completion and flight results: lessons marked complete, `ProgressBar` and `ProgressRing` by module, challenge tiers and percentages, attempts and "Gold results" in the dashboard stats. None of these measures whether something is remembered later. That is acceptable as long as nothing in the interface says otherwise. Keep completion as completion and tiers as flight records (LRN-077), and add a separate delayed measure when spaced review exists (LRN-076).

Build the data before the feature (LRN-081). Persisting first answers with dates for signed-in learners turns every existing `QuizBlock` into a potential delayed check, as soon as items are reused in later lessons.

Use delayed and transfer items to settle design arguments (LRN-078). Many choices in this Part are graded B, C or D because the evidence is short-term or contested. LTF can resolve some of them for its own learners at low cost.

Keep claims modest (LRN-080). The beta banner, the "Draft · unverified" badges and the "not a pilot certificate" line show that honesty is already a trait of the product. Apply the same standard to claims about learning.
