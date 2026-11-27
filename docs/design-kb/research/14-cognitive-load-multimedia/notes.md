# Lane 14: Cognitive load theory and multimedia learning

Research notes. One section per source; each section ends with a "Confirmed this session" line.

## dejong2010cognitive

de Jong, T. (2010). Cognitive load theory, educational research, and instructional design: some food for thought. *Instructional Science*, 38(2), 105-134.

### Core claims

De Jong, a learning-technology researcher at the University of Twente, wrote the best-known internal critique of cognitive load theory (CLT). He does not dispute the central idea that working memory is limited and that learning suffers when a task demands more than the learner has. His target is the machinery on top of it: the split into intrinsic, extraneous and germane load is conceptually unstable, the usual load measures cannot support the claims made, and the experimental conditions are too artificial to carry design advice into real teaching. Because every outcome can be explained after the fact, he says the theory is hard or impossible to falsify. It is an expert review, not an experiment, built on the 35 most-cited Web of Science articles with "cognitive load" as a descriptor plus recent papers.

### Specifics

**Intrinsic load.** CLT says intrinsic load comes from the number of interacting elements and the learner's prior knowledge, and that instruction cannot change it. De Jong lists exceptions. Some content is harder than its element count predicts (a Tower of Hanoi variant with the same number of moves was much harder for children). CLT authors themselves recommend simple-to-complex sequencing, which is a way of controlling intrinsic load.

**Extraneous load.** He adds complications to the classic sources (split attention, means-ends problem solving, modality, redundancy). Designs that look extraneous can stimulate deep processing (relating a graph to a formula is redundancy to one camp and learning to another). Extraneous load probably cannot reach zero, because integrating everything into one representation can make it unreadable. And one study found redundant information helped when it was short and placed next to what it referred to.

**Germane load and additivity.** He calls the explanation of the high-variability result "post-hoc": learners reported more load and did better, so the load must have been germane. Intrinsic load describes material and germane load describes processes, so he doubts they simply add. The earliest papers (Sweller 1988; Chandler and Sweller 1991) distinguished only extraneous load from load due to learning processes.

**Measurement.** Many studies infer load from post-test scores, which is circular. The commonest direct measure is Paas's 1992 single-item mental-effort rating (9 points), which later studies used with 5 to 100 points, "effort" or "difficulty" anchors, and one rating or many. One study's best condition scored about 3 on a 7-point scale (43 percent) while another study's worst condition scored 2.5 (36 percent), so a given score means different things in different papers. The original validation reported reliabilities of .90 and .82, but he found no validity evidence. His three main problems: load is only measured relatively, an overall rating cannot separate the three types, and common measures ignore change over time. Overload itself, which the theory is about, is never detected.

**External validity.** Typical studies gave minutes of study time (a 2.5-minute slideshow, 3-minute frame sequences, a 6-minute lesson), used psychology students with no interest in the topic, and prevented note-taking and replay. He argues the modality effect appears mostly under fast system-paced presentation and often disappears when learners control the pace. He adds that CLT clearly applies to demanding, time-critical tasks, naming flying a fighter plane, where learners cannot pause, replay or annotate.

### Replication and criticism

This paper is itself the criticism. Crossref lists a commentary by Moreno in the same issue (pages 135-141), which I did not read. The 2019 update in this lane shows how CLT developed afterward: germane load became the working memory resources devoted to intrinsic load, leaving two basic categories, and the authors accept that an overall rating cannot separate load types. De Jong's point that CLT repackages older instructional design ideas is a judgment of novelty, not a refutation. Evidence: structured expert critique.

### Implications for LTF

1. Treat CLT principles as strong heuristics for novices, then test with real learners.
2. Do not build a "cognitive load score" into LTF analytics from a single self-rating. Use behavior (time on a step, retries, abandonment) and treat it as relative.
3. Give narrated or animated widgets play, pause, replay and step controls; system-paced autoplay is where modality benefits look most fragile.
4. CLT fits time-critical tasks, so fly mode, where the learner cannot pause the sim, needs glanceable briefings and checklists.
5. Allow offloading (a visible checklist, a place to jot numbers), since real learners do. Short captions beside diagrams are not automatically waste.

Confirmed this session: read the full text (open access PDF at https://ris.utwente.nl/ws/files/6597420/Jong10cognitive.pdf) and the Crossref record for DOI 10.1007/s11251-009-9110-0 (volume 38, issue 2, pages 105-134).

## sweller2019cognitive

Sweller, J., van Merriënboer, J. J. G., & Paas, F. (2019). Cognitive architecture and instructional design: 20 years later. *Educational Psychology Review*, 31(2), 261-292.

### Core claims

The three founders of CLT update their 1998 synthesis. The abstract says CLT began in the 1980s as an instructional design theory built on uncontroversial facts about memory: all novel information is first processed by a working memory limited in capacity and duration and is then stored in a long-term memory that is effectively unlimited. Once information is in long-term memory, the working memory limits "disappear", which transforms what a person can do. The paper reviews 20 years of work in four areas: grounding the theory in evolutionary psychology, extending it to course design through the four-component instructional design model (4C/ID), adding new effects, and new measurement methods. It is a theoretical review by the theory's own authors, so read it as the official position, not an independent test.

### Specifics

**Load categories.** Intrinsic load depends on element interactivity and on the learner's knowledge: a word that is one element to a fluent reader is many interacting elements to a beginner. Extraneous load comes from presentation and what the learner is asked to do, and can be changed by design. The authors say that element interactivity affects extraneous load too, so effective instruction lowers it. Germane load is now defined as the working memory resources devoted to intrinsic rather than extraneous load. Previously it was treated as a load in its own right that could substitute for extraneous load. The authors say that older view could not explain why total load falls when extraneous load is cut.

**Five principles (biologically primary).** Information store (long-term memory), borrowing and reorganizing (most knowledge comes from other people), randomness as genesis (random generate-and-test when no one can be borrowed from), narrow limits of change (working memory is tiny for novel information), and environmental organizing and linking (organized knowledge in long-term memory has no known working memory limit). The authors tie explicit instruction to biologically secondary, domain-specific knowledge such as reading.

**Effects.** Table 1 dates each effect: goal-free (1982), worked example (1985), completion (1987), split attention (1988), redundancy (1991), variability (1994), modality (1995), self-explanation (1998), imagination (2001), isolated elements (2002), expertise reversal (2003), guidance fading (2003), collective working memory (2009), transient information (2011), human movement (2012), self-management (2012). The worked-example text notes there is very strong empirical evidence but constraints: examples are less effective for high-expertise learners and are hard to design well. The transient information effect says spoken or animated information vanishes, so pacing and segmenting help, and Leahy and Sweller found short audiovisual pieces beat visual-only while longer ones did the reverse. The human movement effect says animation can beat static pictures when teaching motor procedures such as knot tying.

**4C/ID.** Courses have learning tasks, supportive information, procedural information and part-task practice. Complex supportive information should be given before the task, not during it, because doing both at once "would almost certainly cause cognitive overload". Procedural how-to information should be given just in time.

**Measurement.** The authors defend Paas's rating scale as sensitive and simple, accept it gives an overall measure, and report that a single rating after the whole task came out higher than the average of ratings after each task.

### Replication and criticism

Many effects were not directly tested against load measures; the authors admit that experiments often used the expected learning outcome as evidence for the theory. Compound effects (expertise reversal, element interactivity, guidance fading) limit the simple ones. De Jong's critique of the three-way split is the obvious comparison point; the paper's own account of the germane redefinition (above) is what the authors now say, and I did not find in it a direct reply to de Jong. The evolutionary-psychology foundation (Geary's primary and secondary knowledge) is a theoretical commitment I could not check against independent evidence this session. Evidence is a mix of many small experiments, mostly short-term, plus theory.

### Implications for LTF

Beginners have little in long-term memory, so lessons should present explicit worked examples first and fade support as skill grows. Put heavy "theory" in lessons before the sim, and short procedural cues beside the sim (fly mode). Order content from isolated elements to integrated tasks. Provide pause and replay for any audio or animation. Do not teach general "learning skills"; teach the aircraft.

Confirmed this session: read the full text of the paper (a PDF copy at leadinglearner.me, matching the Springer paper at DOI 10.1007/s10648-019-09465-5, checked against Crossref: volume 31, issue 2, pages 261-292).

## mayer2003nine

Mayer, R. E., & Moreno, R. (2003). Nine ways to reduce cognitive load in multimedia learning. *Educational Psychologist*, 38(1), 43-52.

### Core claims

Mayer and Moreno, writing in a special issue on cognitive load, merge two traditions. They state three assumptions of the cognitive theory of multimedia learning (CTML): humans have separate channels for verbal and pictorial material (dual channel), each channel has limited capacity, and meaningful learning needs active processing, including building links between words and pictures. Learning can then fail through cognitive overload, "in which the learner's intended cognitive processing exceeds the learner's available cognitive capacity". The paper sorts overload into five scenarios and gives one or two design fixes for each, nine in all, backed by the authors' own experiments. It is a research synthesis from one lab, not an independent meta-analysis.

### Specifics

**Terminology.** Three demands: essential processing (selecting, organizing and integrating words and images), incidental processing (work primed by the design but not needed, such as background music) and representational holding (keeping a representation in working memory). A footnote maps these onto germane, extraneous and, roughly, intrinsic load. Overload occurs when the sum exceeds capacity. All results use problem-solving transfer tests.

**The nine techniques with the effect sizes the paper reports (median effect size, number of experiments).**
1. Off-loading (move words from on-screen text to narration; the modality effect): 1.17, six experiments.
2. Segmenting (learner-controlled bite-size segments): 1.36, one experiment. The lightning lesson was split into 16 segments of one or two sentences and roughly 8 to 10 seconds of animation each, with a Continue button. The authors note the segmented group had more study time.
3. Pretraining (teach component names and behaviors first): 1.00, three experiments, with brake and pump lessons.
4. Weeding (remove interesting but extraneous material; the coherence effect): 0.90, five experiments, where the extras were background music or irrelevant video clips.
5. Signaling (cues such as stressed key words, arrows, outlines, headings, a progress map): 0.74, one experiment (an airplane-lift animation).
6. Aligning (place words next to the part of the graphic they describe; spatial contiguity): 0.48, one experiment.
7. Eliminating redundancy (do not show on-screen text that duplicates narration over an animation): 0.69, three experiments. The authors use "redundancy" more narrowly than Sweller, and without animation, narration plus text beat narration alone.
8. Synchronizing (present narration and its animation together, not one after the other; temporal contiguity): 1.30, eight experiments.
9. Individualizing (match well-designed material to learners with high spatial ability, who benefit more): 1.13, two experiments.

### Replication and criticism

Effect sizes here are medians from a few studies, several of them single experiments (segmenting, signaling and aligning each rest on one), run by the authors in short lessons about lightning, brakes, pumps and the respiratory system. The modality and signaling meta-analyses in this lane are the better guide to sizes, and de Jong argues the modality effect is strongest under fast, system-paced presentation. The mapping to CLT's load types is explicitly only rough, which matters given de Jong's conceptual critique. The segmenting result is confounded with study time by the authors' own note. Evidence is a set of controlled laboratory experiments with transfer tests, which is stronger than opinion but narrower than classroom evidence.

### Implications for LTF

This is the most directly usable checklist in the lane for lesson pages and widgets.
- Weeding: leave out decorative flight imagery and background audio in lessons and widgets unless it carries an instructional point.
- Aligning: label instrument parts on the image itself, not in a caption below.
- Segmenting: give animated explanations Next and Replay controls, and keep each step short.
- Pretraining: teach the names and jobs of the controls and instruments before a lesson on how they interact.
- Signaling: use highlights, arrows, headings and a visible progress cue to show the learner what to attend to.
- Synchronizing: when a narration or text explains an animation, show them together.
- Redundancy: do not read aloud text that is also on screen word for word; pick one.
- Off-loading: consider narration over a diagram, with a captions option for accessibility.
- Fly mode: the learner's eyes are on the sim, so spoken or very short cues may suit better than long text; test this with real learners.

Confirmed this session: read the full text (PDF at https://www.uky.edu/~gmswan3/575/9_ways_to_reduce_CL.pdf) and the Crossref record for DOI 10.1207/s15326985ep3801_6 (volume 38, issue 1, pages 43-52).

## kalyuga2003expertise

Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The expertise reversal effect. *Educational Psychologist*, 38(1), 23-31.

### Core claims

The paper reviews a set of experiments, mostly from the University of New South Wales group, and argues that many cognitive load effects hold only for learners with little experience. Techniques that are "highly effective with inexperienced learners can lose their effectiveness and even have negative consequences when used with more experienced learners" (abstract). With more expertise an effect first disappears and then reverses, so a design that wins for novices can lose for experts. The authors name this the expertise reversal effect and explain it inside cognitive load theory. It is a review by the theory's own proponents, who chose the experiments.

### Specifics

**Mechanism.** Experts hold schemas in long-term memory that let them treat a whole configuration as one element in working memory. Novices lack them, so instructional guidance acts as a substitute. For an expert the same guidance duplicates what their schemas already supply. The two sources of guidance must then be related, which costs working memory, and the paper notes this happens even when the learner knows the material is redundant, because redundant information "is frequently difficult to ignore".

**The studies reviewed.**
- Split attention to redundancy: inexperienced electrical trainees benefited from text integrated into circuit diagrams and could not understand a diagram alone. More experienced trainees did significantly better with the diagram alone and reported less mental effort for it (Kalyuga, Chandler and Sweller 1998). The integrated text had become redundant.
- Text coherence: McNamara and colleagues found added coherence helped low-knowledge readers, while high-knowledge readers did better with the original text. The authors reinterpret this as expertise reversal.
- Modality: in experiments on industrial machinery instructions, novices did best with a diagram plus simultaneous spoken explanation. After more training the audio advantage vanished, and after intensive training the diagram-only condition was clearly better, a reversal of the first result (Kalyuga, Chandler and Sweller 2000).
- Worked examples: for inexperienced mechanical-trade apprentices, studying worked examples beat solving problems, with lower mental-load ratings. As experience grew the advantage disappeared and then problem solving proved superior (Kalyuga, Chandler, Tuovinen and Sweller 2001). Another experiment compared worked examples with exploration: on simple tasks there were minimal differences, on complex tasks novices did better with examples, and the advantage faded with training.
- Guidance fading: Renkl and colleagues found gradual fading from examples into problems beat an abrupt switch.
- Isolated elements: presenting complex material first as isolated elements helped novices and lost its benefit for experienced learners (Pollock, Chandler and Sweller 2002).
- Imagination: students told to imagine procedures learned more than those told to study worked examples only if they already had the prerequisite schemas. For less knowledgeable students imagining had a negative effect.

**Design consequence.** Provide heavy guidance to inexperienced learners, then reduce it. The authors recommend matching format to the learner's level of expertise.

### Replication and criticism

The effect was found across domains (electrical, mechanical, language, spreadsheets, databases), mostly by the authors' group. A 2007 review by Kalyuga exists (search result only), and the 2019 CLT update in this lane treats expertise reversal as a variant of element interactivity, reporting that effects first shrink, then vanish, then can reverse. De Jong (also in this lane) notes that the effect makes the line between extraneous and germane load depend on the learner. The evidence is experiments with short sessions, many using subjective mental-effort ratings (themselves criticized). Full reversals are rarer than disappearances: the paper says a full reversal was not observed in the isolated-elements studies.

### Implications for LTF

LTF is built for beginners, but its audience will include people who already know parts of the material (pilots in training, long-time sim players, returning learners). Expertise changes the best format.
- Use heavily guided, worked-through presentations on first exposure to a procedure or instrument, and fade support in later lessons: replace a full walkthrough with a checklist, then with a prompt, then with a task.
- Offer a "skip the explanation" or collapsible detail path; the paper says redundant text is hard to ignore.
- Keep diagram labels integrated for new content, but consider removing them from review quizzes.
- Imagination or mental rehearsal prompts ("picture what you will see on final") should come after the learner has handled the material, not before.
- A short diagnostic or self-rating at the start of a module can decide which version to show.

Confirmed this session: read the full text (PDF copy at https://typeset.io/pdf/the-expertise-reversal-effect-5y3mqyx7oo.pdf, with the journal header for Educational Psychologist 38(1), 23-31) and the Crossref record for DOI 10.1207/s15326985ep3801_4. The 2007 review is known from a search result only.

## chandler1991cognitive

Chandler, P., & Sweller, J. (1991). Cognitive load theory and the format of instruction. *Cognition and Instruction*, 8(4), 293-332.

### Core claims

This is the paper that turned cognitive load theory into concrete layout advice. The authors argue that instructional material should direct cognitive resources "toward activities that are relevant to learning rather than toward preliminaries to learning" (abstract). When two sources of information refer to each other and neither makes sense alone (a diagram and separate explanatory text), the learner must mentally integrate them before learning can begin, and that search wastes working memory. Physically integrating the sources fixes this. But integration only helps when the sources are unintelligible alone. If a diagram is understandable by itself, adding text that repeats it is not merely useless, it can hurt, even when the text is integrated. These are the split-attention and redundancy effects in their original form.

### Specifics

Six experiments, using electrical engineering and biology (blood circulation) material.

**Experiment 1** compared conventional split-source notes with integrated notes on installation testing, a task that requires reading meter procedures against a diagram. Twenty-eight first-year trade apprentices with no prior formal electrical training were randomly allocated, 14 per group, by the course instructor. The integrated notes carried virtually identical information, with numbered text placed on the diagram. Tests came after a one-week course (written), one week later (practical tests on an electric kettle and a light switch) and about 12 weeks later. Written scores favored the integrated group, with a significant group main effect (F(1, 26) = 8.60), and the pattern held at both test times. The authors note that even after 12 weeks the conventional group's written score had not passed the integrated group's first score. Appliance practical performance also favored integrated notes (F(1, 18) = 33.72), though the second practical test (the light switch) did not differ significantly. The authors note that "there were no direct measures of cognitive load".

**Experiment 2** used lighting-circuit and fluorescent-lamp notes in which the diagram could be understood without the text. Integrated notes were no better than split-source notes (group effect F(1, 26) = 1.76, not significant).

**Experiment 3** (20 apprentices) tested a redundant text. One group was explicitly told to study and relate text and diagram, the other was simply given both. The group that was not told to integrate performed better, read by the authors as learners ignoring the redundant text.

**Experiment 4** (20 apprentices) used three groups: diagram only, conventional text plus diagram, and integrated text plus diagram. The diagram-only group scored significantly higher on the first test problem and spent the least time on the instructions. The conventional group spent notably more time than the others.

**Experiments 5 and 6** used a blood-circulation diagram plus text to replicate the findings with different content. Experiment 6 showed the need for integration returned when the material was organized so that individual units could not be understood alone.

### Replication and criticism

The split-attention and redundancy effects are among the most replicated in CLT, and the 2019 update in this lane gives the redundancy case from this paper as its standard example. Weaknesses: small samples (20 to 28 participants in each of Experiments 1 to 4), apprentices only, technical material, and no direct load measures in Experiment 1. The authors say the experiments "were not designed to test the validity of cognitive load theory" but to test whether it could generate useful instruction. De Jong (this lane) notes load is typically inferred from outcomes. The expertise reversal paper (this lane) shows that what counts as redundant depends on the learner. Mayer and Moreno's contiguity and redundancy principles follow the same logic, with a narrower definition of redundancy.

### Implications for LTF

- Put labels on the diagram, not in a legend or paragraph below it. For a cockpit panel, instrument diagram or traffic-pattern figure, annotate in place (callouts with leader lines).
- Keep steps that refer to a picture visible with it. On phones, do not push a caption a long scroll away from its figure.
- If a diagram is self-explanatory to the target learner, do not repeat it in prose. Decide per audience: a novice needs the labels, an expert does not.
- Do not require learners to cross-reference a checklist in one pane with a diagram in another. Fly mode should integrate the item with its visual cue.
- Do not instruct learners to reconcile redundant text; in Experiment 3 doing so made them worse.

Confirmed this session: read the full text (University of Wollongong Research Online copy, https://ro.uow.edu.au/edupapers/128, downloaded via a typeset.io mirror) and the Crossref record for DOI 10.1207/s1532690xci0804_2 (volume 8, issue 4, pages 293-332). Table values were garbled in my copy, so only the reported F and t statistics quoted above were used.

## sweller1998cognitive

Sweller, J., van Merriënboer, J. J. G., & Paas, F. G. W. C. (1998). Cognitive architecture and instructional design. *Educational Psychology Review*, 10(3), 251-296.

### Core claims

This is the review that fixed cognitive load theory (CLT) in the form most people know. The abstract (as summarized by the University of Twente repository record) says CLT offers guidelines for presenting information so that learners engage in activities that improve intellectual performance. The theory assumes a limited-capacity working memory with partly independent components for verbal and visual or spatial material, and a very large long-term memory holding schemas that differ in how automated they are. Instruction should reduce working memory load that does not serve learning and encourage schema construction.

I could not obtain the full text of this paper this session (the publisher page and a mirror both returned web pages, not the article). What follows is therefore built from the abstract and from two papers I did read in full that describe it: the authors' own 2019 retrospective and de Jong's 2010 critique, which quotes it with page numbers. Treat the specifics as secondhand.

### Specifics

**Architecture.** According to the 2019 retrospective, the 1998 version stressed the relation between working and long-term memory: working memory is limited when it handles novel information but effectively unlimited when it handles organized information retrieved from long-term memory. The retrospective says it was unusual in giving long-term memory a central role, drawing on De Groot's chess work.

**Three load categories.** Intrinsic load (the complexity of the material, tied to element interactivity), extraneous load (due to how the material is presented) and germane load (load that contributes to learning). De Jong quotes the paper (p. 263) as saying that intrinsic load due to element interactivity and extraneous load due to instructional design "are additive", and (p. 262) that intrinsic load cannot be directly influenced by designers although it needs to be considered. The 2019 retrospective says the 1998 paper treated germane load as able to substitute for extraneous load, a view the authors later revised, and that it assumed element interactivity applied only to intrinsic load.

**Seven effects.** The 2019 paper lists the seven effects presented in 1998 as goal-free, worked example, completion problem, split attention, redundancy, variability and modality. All except variability were attributed to reduced extraneous load; variability was attributed to intrinsic load. The retrospective notes that many of the underlying experiments did not measure load directly: the theory generated instructional techniques, and if they worked as expected the result was taken as support.

**Modality.** De Jong quotes the paper (pp. 281-282) saying that using both visual and auditory processors gives an appreciable increase in effective capacity, though "less than purely additive".

**Measurement.** The paper discussed load measurement and defined mental load as imposed by task demands, including element interactivity, and mental effort as the capacity actually allocated (this wording is quoted in de Jong from page 266).

### Replication and criticism

The paper became highly cited: the 2019 retrospective reports over 5,000 Google Scholar citations, and the Twente repository record shows a Scopus count of 5,076 at the time of its snapshot. Its framework drew sustained criticism. De Jong argues the three load types cannot be cleanly separated or measured, that "germane" was added after the fact, and that the theory is hard to falsify. The authors' reply, in the 2019 paper, was to redefine germane load as working memory resources devoted to intrinsic load and to say only intrinsic and extraneous load are basic categories. The individual effects fare better than the framework (the modality meta-analysis is in this lane). Evidence type: a synthesis by its originators.

### Implications for LTF

- Use it as the map of which design problems to look for: unnecessary problem solving for beginners, split sources, redundant text, and single-channel overload.
- Use the idea (cut what does not help the learner build the concept) but not the three-type vocabulary in product requirements; it is contested.
- Beginners benefit from worked examples and completion tasks over unguided problem solving; for LTF this supports showing a full, annotated example of a procedure (a pattern circuit, a stall recovery sequence in the sim) before asking the learner to attempt it.
- Variability of practice (different airports, winds, aircraft states in challenges) should be introduced after the learner can handle the basic task, since the paper's own interpretation is that added variability raises load.

Confirmed this session: Crossref record for DOI 10.1023/a:1022193728205 (volume 10, issue 3, pages 251-296); the University of Twente repository record at https://research.utwente.nl/en/publications/cognitive-architecture-and-instructional-design/ (abstract in paraphrase, citation counts); and the full texts of the 2019 retrospective and de Jong 2010, which describe and quote the 1998 paper. The 1998 full text itself was not read.

## sweller1988cognitive

Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. *Cognitive Science*, 12(2), 257-285.

### Core claims

The founding paper of cognitive load theory. Its abstract (retrieved via the Crossref record) argues that domain-specific knowledge in the form of schemas is the main factor separating experts from novices in problem solving, and that conventional problem-solving practice is ineffective for acquiring schemas. The proposed reason is that the cognitive processes needed for problem solving and for schema acquisition "overlap insufficiently", and that conventional problem solving by means-ends analysis demands a relatively large amount of processing capacity, which is then unavailable for schema acquisition. A computational model and experimental evidence are said to support this. The practical upshot is that doing many problems is not the same as learning from them, which overturned a common assumption in teaching mathematics and science.

I could not read the full text this session (the publisher and mirror pages were blocked or returned errors). The specifics below come from the abstract and from papers I did read in full that describe the paper: the 2019 retrospective by Sweller and colleagues, Chandler and Sweller 1991, Kalyuga and colleagues 2003 and de Jong 2010. I give no figures from the 1988 experiments.

### Specifics

**Means-ends analysis.** The 2019 retrospective illustrates it with a kinematics problem. A learner who must work toward a stated goal has to hold in working memory the current problem state, the goal state, the differences between them, the operators that could reduce the differences and any sub-goals. That is expensive, and it directs attention to reducing the gap rather than to the structure of the problem. The retrospective calls this exceptionally expensive of working memory capacity and says it bears little relation to knowledge-construction processes. Chandler and Sweller 1991 describe earlier studies by Sweller and colleagues in which subjects "could solve problems, in some cases repeatedly solve problems, and remain oblivious to their essential structure".

**Goal-free problems.** Replacing a specific goal with an open one ("calculate as many variables as you can") removes the goal state, so learners consider each state and apply any applicable operator. The retrospective says this greatly reduces load and focuses attention on states and operators, the combination knowledge construction needs. It dates the goal-free effect to a 1982 paper by Sweller and Levine, and the worked-example effect to Sweller and Cooper in 1985.

**Load categories.** De Jong notes that the 1988 and 1991 papers did not yet separate intrinsic from germane load; they distinguished load that is extraneous from load due to learning processes. He also lists the 1988 paper among the few that used a dual-task measure of load. The 2019 retrospective calls this paper the first full description of the theory.

**Worked examples.** Studying worked solutions directs attention to problem states and the operators used, which is what schema acquisition needs; Kalyuga and colleagues cite the 1988 paper for the point that means-ends search is unrelated to schema construction and cognitively costly.

### Replication and criticism

The conclusions about problem solving have been extended in many experiments (worked examples, goal-free problems, completion problems). They have also been qualified: the expertise reversal paper in this lane shows that for learners who already have schemas, solving problems can beat studying examples. De Jong (this lane) criticizes the inference that low scores show high load, and notes the early experiments used short sessions. The 2019 retrospective accepts that many experiments inferred load from learning outcomes. Evidence quality for the 1988 paper itself cannot be judged here beyond its abstract: the abstract says it combines a computational model with experimental evidence, and a secondary summary I could not confirm mentions equation-chaining problems in kinematics, geometry and trigonometry.

### Implications for LTF

For a beginner, simply being dropped into a sim challenge and told to fly a pattern is a form of unguided problem solving. The paper's lesson is to give the novice something to study before something to solve.
- Precede each in-sim challenge with a worked demonstration: the sequence of control inputs, the instrument readings that result and why.
- Where a challenge is open-ended, consider goal-reduced forms for early lessons ("note how the airspeed changes as you pitch") before goal-directed ones ("hold 70 knots").
- Treat success on a challenge as evidence of performance, not of learning; add a check of understanding afterwards.
- Avoid long chains of unguided practice flights with the same structure.

Confirmed this session: Crossref record and abstract for DOI 10.1207/s15516709cog1202_4 (Cognitive Science 12(2), 257-285); a PhilArchive and search summary of the abstract; and the full texts of the 2019 retrospective, Chandler and Sweller 1991, Kalyuga and colleagues 2003 and de Jong 2010 for how they describe it. The 1988 article itself was not read.

## mayer2021multimedia

Mayer, R. E. (2021). *Multimedia Learning* (3rd ed.). Cambridge University Press. (First edition 2001, second edition 2009.)

### Core claims

Mayer's book is the standard statement of the cognitive theory of multimedia learning (CTML) and of the design principles that follow from it. Its thesis, in the author's words from the preface, is that "people learn better from words and pictures than from words alone". The book reviews principles of design based on experiments by Mayer and colleagues, supplemented with evidence from elsewhere, and grounds them in a theory of how people learn from words and pictures. The third edition reviews 15 principles drawn from more than 200 experimental studies (publisher description). It is a research synthesis by the field's leading figure, so it reports one program with a strong theoretical commitment.

### Specifics

**Structure (from the published table of contents).** Section 1 introduces the promise of multimedia learning, the science of learning, instruction and assessment, and the multimedia principle (chapter 5). Section 2, "reducing extraneous processing", covers coherence, signaling, redundancy, spatial contiguity and temporal contiguity. Section 3, "managing essential processing", covers segmenting, pre-training and modality. Section 4, "fostering generative processing", covers personalization, voice, image, embodiment, immersion and generative activity. Chapter 20 summarizes the principles.

**Three kinds of processing.** The third edition uses a triarchic model: extraneous processing (does not serve the instructional goal), essential processing (needed to acquire the essential information) and generative processing (aimed at making sense of the material and motivating effort). This extends the earlier extraneous, essential and holding scheme in the 2003 Mayer and Moreno paper in this lane.

**Growth of the evidence base (preface).** The author reports 45 experimental comparisons involving transfer tests in the first edition (2001), 93 in the second (2009) and 201 in the third. The number of principles grew from seven to 12 to 15. Six original principles were kept (coherence, redundancy, spatial contiguity, temporal contiguity, modality, multimedia); six were added in the second edition (signaling, segmenting, pre-training, personalization, voice, image); three in the third (embodiment, immersion, generative activity). One original principle, individual differences, was recast as a boundary condition, "the idea that design principles that are effective for beginners may not be effective for more experienced learners". Transfer-test performance is the main outcome throughout; the third edition adds process measures such as eye-tracking, log files and EEG.

### Replication and criticism

The preface is candid about limits: "most research still focuses on learning in short-term studies with immediate tests in laboratory environments involving college students", with a need for longer-term studies in authentic settings. The base is largely the author's own laboratory, though the book cites a growing number of meta-analyses of individual principles (the modality and signaling analyses are in this lane), and independent work has found smaller or conditional effects (see Ginns 2005 and the Reinwein reanalysis discussed there). De Jong (this lane) argues that results for modality in particular depend on fast, system-paced presentation. De Jong notes that CTML's "essential processing" maps loosely onto CLT's germane load. I have not read the main chapters, only the front matter and preface, so the chapter-level evidence is not summarized here.

### Implications for LTF

This book is the best single source for a design-principles checklist, but LTF should adopt it as a set of defaults to test, not rules.
- Extraneous processing: cut decoration (coherence), cue what matters (signaling), do not read out on-screen text (redundancy), keep labels beside their referents and pair narration with its visual in time.
- Essential processing: break animated or multi-step explanations into learner-paced segments, teach the names of parts before explaining systems (pre-training), and use narration with visuals where listening is possible (modality).
- Generative processing: a conversational tone (personalization) and prompts that ask the learner to explain or summarize (generative activity) are the book's suggestions for motivating effort. For LTF, a "say it back" quiz question after a procedure fits this.
- The individual differences condition is the book's own version of expertise reversal: guidance that helps beginners may not help experienced learners, so an LTF module for returning pilots may need a lighter version.
- The preface's note that most evidence is short, immediate and from college students applies to LTF's multi-week audience; LTF should collect its own delayed-test data.

Confirmed this session: read the front matter and preface of the third edition (Cambridge University Press, https://assets.cambridge.org/97813166/38088/frontmatter/9781316638088_frontmatter.pdf, which gives the 2021 copyright, the edition history and ISBNs 9781107187504 hardback and 9781316638088 paperback), and the table of contents (https://assets.cambridge.org/97811071/87504/toc/9781107187504_toc.pdf). Open Library lists the work (OL1837843W for the 2001 first edition; a 2020 edition record carries the same ISBNs). Chapter text was not read.

## harp1998seductive

Harp, S. F., & Mayer, R. E. (1998). How seductive details do their damage: A theory of cognitive interest in science learning. *Journal of Educational Psychology*, 90(3), 414-434.

### Core claims

Textbooks and lessons are often made more engaging by adding interesting but irrelevant material, such as vivid facts or illustrations. Harp and Mayer tested whether this helps. Across four experiments with 357 undergraduates, students who read science passages containing such "seductive details" recalled fewer main ideas and generated fewer problem-solving transfer solutions than students who read the same passages without them. The title's theory is that the damage comes from cognitive rather than emotional interest. The authors argue seductive details interfere "by priming inappropriate schemas around which readers organize the material, rather than by distracting the reader or by disrupting the coherence of the passage" (abstract, as retrieved through OpenAlex). The paper is a set of controlled laboratory experiments, with a competing-hypotheses design.

### Specifics

**Design.** The abstract defines seductive details as interesting but irrelevant adjuncts. In each experiment readers got expository passages with or without them, then were tested on recall of main ideas and on transfer (problem-solving) questions. The ERIC record confirms 357 undergraduate participants across four experiments.

**Three rival explanations.** The paper compares the idea that details distract the reader (attention is drawn away from the main points), the idea that they disrupt coherence (the thread of the argument breaks), and the idea that they prime an inappropriate organizing schema (readers organize the passage around the interesting details). A later review (Rey 2012, in this lane) lists four explanations in the literature: working memory overload, attention distraction, schema interference and coherence disruption.

**Experiments 1 to 3.** The authors revised the passage to include highlighting of the main ideas (Experiment 1), a statement of learning objectives (Experiment 2) or signaling (Experiment 3). None of these reduced the seductive details effect. If distraction or lost coherence were the cause, cues pointing to the main ideas should have helped.

**Experiment 4.** Placing the seductive details at the start of the passage made the effect worse; placing them at the end reduced it. This fits the schema account: details read first can set the frame that organizes the rest, while details read last cannot.

**Interest.** The paper's framing, from the abstract's opening and its title, is that textbook material is often boring to students and that adding interest seems an obvious fix. The authors distinguish emotional interest (arousal from vivid material) from cognitive interest (interest arising from understanding how ideas connect), and argue the second is what supports learning. I did not read the paper's own definitions and only summarize this from its title and abstract.

### Replication and criticism

The effect has been heavily studied since. Rey's 2012 meta-analysis (in this lane) pooled 39 experimental effects and reports a significant effect, small to medium for retention and medium for transfer. A larger 2020 meta-analysis by Sundararajan and Adesope reports that findings on the size of the harm are mixed and moderated by factors including the type of image used for comparison, delivery format, language, subject, learner pacing, recall question type and manipulation check; its overall conclusion is that including seductive details can hinder learning (I read only its abstract through a publisher page, with no effect sizes). A 2021 experiment by Tislar and Steelman with 132 undergraduates on a plate tectonics lesson did not find a consistent detrimental effect on recall and transfer, and the effect appeared only when learning objectives were provided, so it is hard to elicit reliably (abstract via Crossref, DOI 10.1002/brb3.2322). Rey also lists evidence for and against each explanation. The overall verdict: the effect is real on average and often small, depends on what the details are and how they are placed, and Harp and Mayer's own schema-priming explanation is one of several rival accounts. Most of the base is short laboratory reading by college students.

### Implications for LTF

- Be wary of "fun facts", aviation trivia, historical anecdotes and decorative photographs inside the explanation of a core concept. Put them in an optional sidebar or after the lesson, not before it. Experiment 4 suggests that where trivia appears matters: before the main idea is worse than after.
- Cues such as highlighting and a learning objective did not rescue a page with irrelevant material, so do not rely on signposting to offset clutter; remove the clutter.
- This is a risk for a flight-sim audience that loves detail: war stories, aircraft history and exciting scenarios can be engaging but may pull the schema in the wrong direction while a beginner is learning the basic control relationships.
- The effect is not uniformly large. Test any engagement feature with an outcome measure (a transfer-style question) before deciding it is harmless or harmful.
- "Interest" should come from showing how ideas connect (cause and effect between pitch, power and airspeed), not from added color.

Confirmed this session: ERIC record EJ576496 (https://eric.ed.gov/?id=EJ576496) for the bibliographic details and the 357 participants and four experiments; the abstract text via OpenAlex (api.openalex.org, DOI 10.1037/0022-0663.90.3.414); the Crossref record (volume 90, issue 3, pages 414-434). Tislar and Steelman's abstract was read through Crossref and OpenAlex; Sundararajan and Adesope's abstract through the Springer page; Rey's through ERIC EJ986386. The full text of Harp and Mayer was not read.
