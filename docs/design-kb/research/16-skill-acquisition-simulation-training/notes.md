# Lane 16 notes: skill acquisition, motor learning, simulation and flight training

Confidence note. Bibliographic details marked "web" in sources.json were confirmed by search this session. The web search budget ran out before the "memory" entries (Fitts1967, Bryan1899, Schmidt1975, Schmidt1992, Shea1979, Roscoe1971) could be rechecked, so their DOIs, issues and pages were removed; their content below is from established knowledge of the literature and should be checked before any number is quoted. Where a commonly quoted figure could not be traced it is marked "not confirmed".

## Fitts1967

**Core claims.** Fitts and Posner describe skill acquisition as three overlapping phases. In the cognitive phase the learner works out what the task is: what the goal is, which cues matter, which actions are available and in what order. Performance is erratic, errors are large and varied, attention is heavily used, and verbal instruction, demonstration and verbal self-talk help most. In the associative phase the learner has a workable method and practice refines it: errors shrink and become more consistent, the learner gets better at detecting and correcting their own errors, and verbal mediation fades as the right movements become linked to the right cues. In the autonomous phase the skill runs with little conscious attention, is resistant to interference from other activity, and leaves spare capacity for a second task. The book is short and was aimed at readers who design training, which is why the phases are expressed as guidance for instruction rather than as a theory of mechanisms.

**Specifics.** The phases are a continuum, not steps with a clock; the same person is in different phases for different sub-skills at the same time. Fitts (who worked on Air Force pilot research and on cockpit display problems) used everyday and laboratory examples, among them learning to drive, Morse code reception and typing. Implications drawn for instruction were: in the early phase, give a clear picture of the goal and of the main cues, keep verbal guidance simple and avoid overloading the learner with detail; in the middle phase, arrange practice so the learner can feel and detect errors, and give feedback that helps them to build an internal standard; in the late phase, add variety and stress so the skill is robust. A working criterion for autonomy, used widely since, is that a secondary task can be carried out at the same time with little loss on either (dual-task logic). John Anderson's ACT theory (1982, "Acquisition of cognitive skill") later formalized a parallel account in cognitive science terms: declarative knowledge is proceduralized (compiled) through practice and then tuned. Neither account provides numerical thresholds for the boundaries between phases; none are reported here.

**Quotations.** None used; wording could not be checked.

**Criticism and status.** The three-phase framework is descriptive. It has endured mainly because it is useful and consistent with a broad range of data, not because the boundaries have been measured. Some researchers (for example Masters's work on "reinvestment") note that explicit rules accumulated early can resurface under pressure and disrupt an automatic skill; others argue for implicit learning routes that skip the verbal stage (Wulf's external-focus work, below, is compatible with this). The phase of a skill is also not the same as the learner's overall level: a pilot may be autonomous at holding wings level and cognitive at the flare.

**Use for LTF.**
- Build lesson content around phase. Early lessons are cognitive phase material: name every control, say what to look at, ask for one goal at a time. Later content should drop explanations and ask for consistency.
- Fade verbal scaffolding. Hint text, callouts and arrows should be heavy in lesson one and nearly gone by the time the same skill is used in a later scenario.
- Do not add a secondary task (radio call, checklist, navigation) until the primary skill is stable; use the dual-task test as a gate between lessons.
- Fly mode beside the simulator should be quiet and glanceable. A pilot in the cognitive phase has no spare attention for a busy second screen, so it should show one instruction at a time.
- Progress dashboards can express each skill as a phase (First attempts, Getting consistent, Hands-free) instead of only a score. This gives the learner a model of what progress looks like.
- Treat errors in early phases as expected and informative; avoid red failure styling for the cognitive phase.

## Bryan1899

**Core claims.** William Lowe Bryan and Noble Harter studied telegraph operators learning to send and receive Morse. They argued that a complex skill is built as a hierarchy of habits: letters are learned first, then words, then phrases and whole messages. When the lower-level habits become automatic, attention can move to the next level up. Progress therefore can stall for a time (a plateau) while the lower habit consolidates and the higher-order unit forms, and then rises again. Their 1897 paper (Psychological Review 4) reported the first data; the 1899 paper elaborated the hierarchy idea and the plateau.

**Specifics.** The data were weekly performance records of operators in training, plotted as learning curves of speed against weeks of practice. Receiving showed clearer plateaus than sending. The authors interpreted a plateau in receiving as the point where an operator has mastered letters and is beginning to process words as units. A plateau is not wasted time, they argued, because it reflects organization of lower-level habits, and the later rise reflects the gain from the new, larger unit. The work is regarded as one of the first quantitative studies of a real-world skill, and it set the pattern of presenting practice data as a learning curve. Exact sample sizes and rates are not given here because they could not be confirmed this session.

**Quotations.** None used.

**Criticism and status.** Keller (1958), "The phantom plateau", argued that plateaus often vanish in better-controlled data and may be artifacts of averaging across people, shifts in motivation or changes in method; later reviews find plateaus in some tasks and not in others. The accepted view is that plateaus are plausible in complex tasks with hierarchical structure and that they are not a law. The idea of a hierarchy of habits, however, survives in the "chunking" accounts of Miller (1956) and Chase and Simon, and in the Anderson model of skill. Note for the book: a "plateau" in a learner's data can also be a ceiling in the measure, so check the measure before explaining it.

**Use for LTF.**
- Normalize flat stretches. A dashboard may show a note when scores stay flat for several attempts ("Flat spells are normal. Your scan is being rebuilt around bigger chunks"), but only as long as the plateau is real and the advice is concrete.
- Track sub-skills (altitude hold, heading hold, speed hold) separately so improvement is visible while a headline score stalls.
- Teach in nested chunks: small habits first (pitch, power, trim), then the combined routine (a pattern leg), then the whole pattern. Offer the larger unit as a named thing the learner can recognize.
- Do not add a new demand while a lower-level habit is still consuming attention; the hierarchy picture says the lower habit must be nearly automatic.
- Use the learning-curve idea in the progress view with a visible horizontal axis in sessions, not days, so gaps in practice do not read as a plateau.

## Ericsson1993

**Core claims.** Ericsson, Krampe and Tesch-Römer proposed that differences among elite performers are closely related to the amount of deliberate practice each has accumulated, and that deliberate practice is a distinct kind of activity. It is designed specifically to improve current performance: it has a well-defined goal, is pitched at a level that stretches the performer, offers immediate informative feedback, and provides opportunities for repetition and error correction. It requires full concentration, is effortful and is not inherently enjoyable. It is usually guided by a teacher who can diagnose weaknesses. The paper positioned itself against explanations that rest on innate talent, arguing that the monotonic benefit of accumulated practice, plus the long delays to reach international levels, point to training as the dominant factor.

**Specifics.** The best-known study compared violin students at the West Berlin music academy who had been nominated by faculty as the best, as good, or as music-education students (a lower-level group). By age 20, reported accumulated solitary practice differed by group. Secondary reports quote roughly 10,000 hours for the best violinists, about 7,800 for the good group and about 5,000 for the music teacher group; the search this session reported "over 10,000 hours" for the best group and about 2,500 and 5,000 fewer hours for the other two groups, so the exact figures for the lower groups are not confirmed. The study also included pianists (experts versus amateurs, with the experts reported at 10,000 hours or more by around age 20). Hours were estimated by interview and by diary, retrospectively. As commonly summarized, the authors reported that practice was typically solitary, that best performers practiced in limited sessions, with total daily deliberate practice in the region of four hours, and that rest and sleep were part of the pattern (these details are from secondary summaries and not confirmed against the paper). They concluded that sustainable deliberate practice is limited by recovery. The "10,000-hour rule" was popularized by Gladwell (2008); Ericsson objected that 10,000 was an average for a particular group and not a threshold.

**Quotations.** None used.

**Criticism and status.** The hours are retrospective self-reports from small samples. Macnamara and Maitra (2019) re-ran the study design with more careful measurement and found smaller group differences. The meta-analysis by Macnamara and colleagues (2014; next entry) found that deliberate practice explains moderate to small shares of the variance in performance. Ericsson and Harwell (2019) replied that studies often counted ordinary practice and that the original definition was narrower (teacher-designed solitary practice). A reading of the original paper shows the definition was applied inconsistently, which the replication authors point out. Best view: deliberate practice describes a good way to practice; the paper does not show it is sufficient for expertise.

**Use for LTF.**
- Structure challenges as deliberate practice: one clear goal, a small stretch, immediate feedback, repeat. For example "hold 70 KIAS within 5 knots for one minute".
- Do not promise mastery from hours logged. Show quality of practice (goal set, feedback seen, repeated) instead of a simple time counter.
- Suggest short sessions and rest; if a session runs long, show a gentle prompt that practice quality usually drops.
- Tell learners what to fix next, in one sentence, as a teacher would; an app must stand in for the teacher's diagnosis.
- Avoid "10,000 hours" language in marketing copy and avoid streak mechanics that reward mere time at the screen.

## Macnamara2014

**Core claims.** Macnamara, Hambrick and Oswald carried out the first meta-analysis of the relationship between deliberate practice and performance across domains. They found that deliberate practice explained a meaningful but far smaller share of the variance in performance than strong versions of the deliberate practice view imply. They concluded that practice matters, but that other factors, such as starting age, general cognitive ability and working memory, personality and other individual differences, also matter and are not captured by practice hours.

**Specifics.** The paper reports 157 effect sizes from over 11,000 participants (figure from a later paper by the same group, confirmed in a search snippet). Reported variance explained by deliberate practice, quoted by later papers: about 26% for games, 21% for music, 18% for sports, 4% for education and under 1% for professions; about 12% overall (confirmed by search snippets from secondary sources; check the original table before quoting). The effect was larger in domains with more stable, predictable structure (games, music) than in less predictable ones (professions). Moderators examined included the domain, the method used to measure practice (interview versus log), and the skill level studied.
**Quotations.** None used.

**Criticism and status.** Ericsson (2014) and Ericsson and Harwell (2019) argued that the meta-analysis combined activities that do not meet the deliberate practice definition (for example group practice or ordinary playing time) and relied on retrospective measures of low reliability. Macnamara and Maitra's 2019 replication of the violinist study found smaller differences. Hambrick and colleagues later reviewed inconsistencies in how deliberate practice has been defined. The balanced conclusion is that practice is necessary and important, that definitions drive the numbers, and that individual differences remain real.

**Use for LTF.**
- Be honest in the voice of the product: most learners can fly safely and competently with good instruction, rates differ, and nothing here promises an outcome in a set number of hours.
- Never rank learners against each other by hours or speed; compare each learner with their own earlier attempts.
- Flying is a moderately predictable, rule-structured domain, which suggests structured practice should pay off clearly; say so without overclaiming.
- Avoid copy suggesting that effort alone guarantees mastery; it blames learners who struggle.
- Keep the distinction between practice and deliberate practice visible in the product: a long free-flight session is practice, a goal-driven drill with feedback is deliberate practice, and the meta-analysis warns against treating the two as equal.
- When explaining the approach in an About page, cite the meta-analysis as a reason for a design that varies practice and gives feedback rather than only counting hours.

## Schmidt1975

**Core claims.** Schmidt proposed schema theory as an answer to two problems in Adams's (1971) closed-loop theory of motor learning: the storage problem (a perceptual trace for every movement would need endless memory) and the novelty problem (how a person produces a movement never made before). Schema theory says that people store generalized motor programs (classes of movements sharing invariant features such as relative timing and force proportions) and that, on each trial, they select parameters (overall speed, size, effectors) to fit the situation. After every movement the learner stores four things: the initial conditions, the parameters used, the actual outcome, and the sensory consequences. From these, two schemas are abstracted. The recall schema is the relationship between the parameters used and the outcomes obtained, which lets the learner choose parameters for a new goal. The recognition schema is the relationship between initial conditions and expected sensory consequences, which lets the learner evaluate a movement as it happens or afterwards. Because schemas abstract across many experiences, they should be built better by varied practice than by repetition of one movement.

**Specifics.** The paper is explicitly about discrete, brief, rapid movements (a throw, a strike), and the theory was framed around ballistic skills in which feedback cannot modify the movement while it is under way. The central empirical prediction is the variability of practice hypothesis: practice across a range of movement parameters yields better transfer to a new parameter value than the same amount of practice at a single value, especially for the new value outside the practiced range. The theory also predicts that error information after a trial (knowledge of results) is used to update the recall schema, which links it to feedback research (see Salmoni1984). Evidence cited in later reviews: children's performance in beanbag-throwing experiments (Kerr and Booth, 1978; named in textbooks as a classic case) showed benefit for varied practice when transfer was to a new target distance. Adult laboratory results have been mixed. A meta-analytic review (Van Rossum, 1990) is commonly cited for the conclusion that variable practice helps most with novel transfer tasks and with children and less reliably with adults; the exact figures are not confirmed here. Schmidt later co-wrote the textbook Motor Control and Learning (with Lee) and extended the theory with generalized motor program ideas and the concept of the "invariant" structure.

**Quotations.** None used.

**Criticism and status.** The generalized motor program is contested by dynamical-systems theorists, who argue that coordination emerges from the interplay of task, body and environment, and by researchers who find that relative timing is not always invariant. The recall and recognition schemata have been hard to test separately. Variability of practice is supported but not universal. For continuous, closed-loop tasks like holding altitude with continuous feedback, the schema theory is less directly applicable, and its use for flying is by analogy rather than by direct demonstration. Even so, its practical advice (vary practice, vary conditions, and require prediction) is consistent with the later contextual interference and desirable difficulty literature.

**Use for LTF.**
- Vary practice conditions: different airports, wind, weights and flap settings rather than the same pattern repeatedly. The learner builds a relationship between control input and result, not a memorized sequence.
- Treat "a landing" as a class of movements. Each attempt should differ in a parameter (approach speed, crosswind, runway length) so that the learner abstracts the invariant (flare timing relative to height cues).
- Ask the learner to predict the outcome before acting ("Where will the nose go if you add power?"), which exercises the recognition schema, and then show the result.
- Do not vary too early: for the first exposure to an element, keep conditions constant until the learner has a workable first approximation.
- Use ranges, not single targets, when reporting results ("within 5 knots"), which matches how schemas work.

## Salmoni1984

**Core claims.** Salmoni, Schmidt and Walter reviewed the literature on knowledge of results (KR, feedback about the outcome of a movement) and argued that the then dominant view, that KR primarily works as a reinforcer or motivator and that more is better, was mistaken. KR has informational (guidance) and motivational functions. The authors proposed the guidance hypothesis: KR guides the learner toward the correct movement, but when it is provided frequently the learner becomes dependent on it, so the benefits seen during practice (when KR is present) do not carry to a retention test without KR. Learning must therefore be measured by tests without feedback after a delay, not by performance in the acquisition phase.

**Specifics.** The review distinguished learning (a relatively permanent change in capability) from performance (a temporary state during practice), and re-read earlier experiments on KR timing (delay interval and post-KR interval), frequency, precision and form. Many studies had measured only in-practice performance and concluded that more frequent or more precise KR was better; with retention tests without KR, results often reversed or vanished. The review showed that withholding KR on some trials, or summarizing KR after a block of trials, produced as much or better retention than giving it on every trial. Practical schedules that followed in the later literature: summary KR (feedback on a set of trials at once; Schmidt and colleagues 1989), reduced-frequency KR (Winstein and Schmidt, 1990), and bandwidth KR (feedback only when error exceeds a set tolerance; Sherwood, 1988). The authors also argued that performance in the absence of KR in the delay interval allows the learner to engage in error-detection processing, which builds an internal reference. The page range for this paper is confirmed as 355-386 by an APA listing, though one reference list gives 353.

**Quotations.** None used.

**Criticism and status.** The effect depends on the task. Wulf and Shea (2002) argued that the guidance hypothesis is supported mainly for simple tasks; for complex skills and for novices, more frequent feedback early can help because the learner needs help to find the basic pattern. Later work by Chiviacowsky and Wulf (2002, 2005) found that feedback given at the learner's request, or after good trials, can be more effective than a fixed schedule; this links to the motivational function and was later built into OPTIMAL theory (see Wulf2016). The guidance hypothesis remains widely taught but the evidence base is largely laboratory tasks with small movement tasks.

**Use for LTF.**
- During a flying attempt in fly mode, do not give a running stream of corrections; let the learner feel the error and make their own correction. Provide results after the attempt.
- Fade feedback by design: immediate and specific in the first lesson on a skill, summarized (after a block of attempts) later, and absent on a review challenge.
- Let learners ask for feedback ("Show me my trace") and give extra feedback after good attempts, not only after errors.
- Measure retention, not just in-session success: a "come back in a week with no hints" challenge is the honest test.
- Keep precise numbers in the post-attempt summary but use bands during the attempt (green when within tolerance), echoing bandwidth feedback.

## Schmidt1992

**Core claims.** Schmidt and Bjork argued that three lines of research, on contextual interference, on the frequency of augmented feedback and on the variability and distribution of practice, show one principle: conditions that make practice performance worse often make long-term retention and transfer better, and the reverse. They made the case for a distinction between performance (what is seen during practice) and learning (what is retained and can be transferred), and for the idea that practice should be designed to maximize the latter. They proposed that the common mechanism is that difficult conditions lead to more elaborate, more effortful processing, and that learners and instructors misjudge by watching practice performance, so they tend to choose the conditions that produce the worse long-term result.

**Specifics.** Three paradigms are reviewed. (1) Blocked versus random practice of several tasks (Shea and Morgan, 1979, and related work): blocked practice yields better practice performance, random practice yields better retention and transfer. (2) Frequent versus reduced feedback (Salmoni et al., 1984, and others): frequent feedback helps practice, hurts retention. (3) Massed versus distributed practice and constant versus varied practice, including verbal-learning work on spacing and on variable encoding. The authors proposed that the reason is that difficult conditions force the learner to engage in more processing: reconstructing the action plan on each trial, interpreting intrinsic feedback instead of relying on extrinsic feedback, and encoding in varied contexts. Later work (the challenge point framework, below) adds the practical rule that such manipulations should be introduced only up to the point where the learner can still make progress. This paper is the origin of later Bjork phrases such as "desirable difficulties" (Bjork, 1994), though that wording is not in this paper. I could not recheck volume, issue or pages this session; they were removed from sources.json.

**Quotations.** None used.

**Criticism and status.** The principle holds across many tasks, but difficulty is only desirable if the learner can meet it. The challenge point framework (Guadagnoli and Lee, 2004) states that the optimal difficulty depends on skill level and task complexity, and that the same condition can overload a novice and help an expert. Studies of applied skills show smaller benefits than laboratory tasks. The learner's judgment problem is well supported: students prefer blocked and massed practice because it feels more fluent, even when it yields worse retention.

**Use for LTF.**
- Design a path: block first, then mix. The first lesson on a manoeuvre is blocked and supported; later lessons mix it with others and remove support.
- Interleave review of earlier skills into later lessons even though it lowers the immediate score.
- Tell learners honestly that harder practice feels worse and works better, so a drop in score after mixing is expected and not a sign of failure.
- Dashboards should show retention (a skill revisited after a gap) as well as first-time success, and should not penalize a lower in-session score when difficulty was raised on purpose.
- Do not let adaptive systems always choose the easiest setting because the learner prefers it; set minimum challenge levels.

## Shea1979

**Core claims.** Shea and Morgan showed that the order in which several motor tasks are practiced changes learning. Practicing tasks in a random order produced poorer performance during practice than practicing them in blocks, but better performance in a later retention test and better transfer to new versions of the task. This is the contextual interference effect: interference among tasks during practice (high contextual interference) helps long-term learning.

**Specifics.** Participants learned three rapid arm movement patterns, each requiring them to knock down a series of barriers in a set order as fast as possible, in either a blocked schedule (all trials of one pattern before the next) or a random schedule (patterns mixed). Practice performance was better in the blocked group. In delayed retention tests the random group performed better (the retention intervals are not confirmed here), and in transfer tests with new movement conditions the random group was again better. Sample sizes and exact times are not confirmed here. Two explanations were offered later: the elaboration hypothesis (Shea and Zimny, 1983: random practice leads to comparisons across tasks and richer memory) and the forgetting-reconstruction hypothesis (Lee and Magill, 1983: switching tasks forces the learner to rebuild the action plan each time, and that rebuilding is itself practice). The experiment was in Journal of Experimental Psychology: Human Learning and Memory, 1979. Volume, issue and pages were not rechecked and are removed in sources.json.

**Quotations.** None used.

**Criticism and status.** The effect has been replicated many times in laboratory tasks. Magill and Hall (1990) reviewed it and found it was more reliable in laboratory tasks than in applied sport skills. Brady (2004) meta-analysed it and found smaller effects in applied settings, with details not confirmed here. It is weaker or absent for very complex skills, for children in some studies, and for learners who are at the start of learning; novices may be overloaded by fully random practice, and mixed schedules (start blocked, move to random) are commonly suggested. A strong claim that random practice is always better should not be made.

**Use for LTF.**
- After each element of the pattern (climb, level turn, descent) has been practiced separately, run mixed sessions where the order is not predictable.
- Randomize which scenario follows a warm-up in review challenges, and announce that this is deliberate.
- Do not randomize the very first exposure; the learner needs a first workable form.
- Report separately the score from blocked practice and the score from mixed practice, so learners can see that the lower score under mixing is expected.
- A "serial" progression (A, B, C, then A, B, C) is a middle path for learners who find fully random mixes too demanding.

## Wulf2016

**Core claims.** Wulf and Lewthwaite's OPTIMAL theory (Optimizing Performance through Intrinsic Motivation and Attention for Learning) says that motor performance and learning are enhanced by three factors that work together: enhanced expectancies for future performance (for example positive feedback after good trials, normative feedback that is favorable, and a belief that ability is learnable), autonomy (the learner has some control or choice, even incidental), and an external focus of attention (attention on the effect of the movement on the environment rather than on body movements). The authors argue that these factors strengthen the coupling between goals and actions: expectancies and autonomy make a goal-action link stronger through motivational and dopaminergic routes, and an external focus keeps attention on the goal and avoids the drift back to self-focus, which interferes with automatic control. The paper is a long theoretical review in Psychonomic Bulletin & Review (2016, 23(5), 1382-1414; DOI 10.3758/s13423-015-0999-9, confirmed).

**Specifics.** The evidence base on attentional focus goes back to Wulf, Höß and Prinz (1998), who had participants balance on a ski simulator and on a stabilometer. An external focus (on markers on the platform) produced better balance than an internal focus (on the feet). Related findings cover golf, basketball free throws, dart throwing, swimming and others. The constrained action hypothesis (McNevin, Shea and Wulf, 2003) explains it: an internal focus makes the motor system try to control the movement consciously, constraining automatic processes, whereas an external focus allows the system to self-organize. A further finding is that a more distal external focus (on the effect further from the body, such as the target) is often better than a proximal one, though this depends on skill level. The 2010 review by Wulf, Shea and Lewthwaite in Medical Education (confirmed by search) reviewed four factors for motor learning in medical training: observational practice, focus of attention, feedback and self-controlled practice, and stated that external-focus instructions have generally outperformed internal-focus ones. The expectancy component rests on studies in which learners who were given (bogus) positive normative feedback after a trial, or who were told that the skill depends on practice and not on a fixed ability, learned better. The autonomy component rests on studies in which a choice that was incidental to the task (for example the colour of a ball) still enhanced learning. A 2021 paper by the same authors in Current Directions in Psychological Science updates the evidence (confirmed to exist by search).

**Quotations.** None used.

**Criticism and status.** The evidence comes largely from one lab network and its collaborators, with mostly short laboratory or sports tasks, and many studies have small samples; some reanalyses and outside replications raise questions about effect sizes and publication bias, though I did not retrieve them this session and cannot state their numbers. The dopamine account is speculative. The evidence for the external focus advantage is broad enough that it has been adopted in sport coaching and clinical rehabilitation. Complex skills in which the learner needs to attend to body parts (rehabilitation, beginner technique) may require some internal focus; this is a live debate. Results in highly skilled performers also generally favor external focus.

**Use for LTF.**
- Write instructions in terms of the aircraft's effect, not the learner's body: "bring the nose to the horizon" or "keep the airspeed needle in the green arc" rather than "push forward with your wrist".
- Give real choices (which airport, which weather, which challenge next). Choices need not be large to matter.
- Give feedback that is true and encouraging after good attempts, and frame errors as normal and fixable; avoid copy implying fixed talent.
- Fly mode cues should point to external references (the horizon, runway numbers, an airspeed band), not to hands or feet.
- Expectancy-boosting copy must stay honest: use real normative data only when it exists and is accurate, and never show fabricated comparisons.

## Roscoe1971

**Core claims.** Stanley Roscoe introduced the transfer effectiveness ratio and its incremental version for evaluating training devices. The transfer effectiveness ratio (TER) is the amount of time saved in the real aircraft per unit of time spent in the simulator: TER = (Yc − Yx) / X, where Yc is the time or number of trials a control group needs in the aircraft to reach a criterion, Yx the time the experimental group needs in the aircraft after X hours in the simulator. The incremental transfer effectiveness ratio (ITER) is the same quantity computed for successive increments of simulator time. Roscoe's main empirical point is that ITER typically decreases as simulator time increases: the first simulator hours save the most aircraft time, and later hours save less, so a training program should stop adding simulator time at the point where the marginal saving no longer justifies the cost.

**Specifics.** The practical use is cost-effectiveness. A TER below 1.0 can still be worthwhile if a simulator hour costs much less than an aircraft hour; a positive TER with a break-even point can be calculated from the cost ratio. Roscoe developed the idea in a series of studies at the University of Illinois Aviation Research Laboratory and wrote it up in his book Aviation Psychology (1980) and in a measurement chapter with Williges (1980). The concept of a diminishing-returns curve (savings that rise quickly and flatten) is the key picture. Numerical TERs from specific studies were not retrieved this session, and no values are quoted here. The 1971 paper's volume, issue and pages were not rechecked this session and are removed from sources.json (it is in Human Factors, 1971).

**Quotations.** None used.

**Criticism and status.** TER depends on how the criterion and the time are measured, on instructor judgment and on how the control group is trained; the same device may give different ratios for different tasks, and a ratio from one study cannot be applied to others. Data are mostly military or airline. Still, the concept is the standard way to describe the economics of simulation training, and it is built into later evaluations such as the personal computer aviation training device studies (see Taylor1997). One limit: TER measures aircraft time saved; it does not measure the safety or quality of the training or the value of practicing dangerous situations that cannot be flown.

**Use for LTF.**
- Argue honestly for the early hours: a few structured sessions in the simulator are the high-return ones; the app should push learners to the first few key skills quickly and not to endless repetition of an easy task.
- Frame the simulator as the cheap place to learn procedures, scan and energy management; do not promise it replaces aircraft time or counts toward a licence.
- Show a diminishing-returns hint when a learner has repeated the same drill many times with no gain: suggest a different drill or a break.
- Use the same logic for content ordering: put the highest-value skills (attitude and power control, trim, the pattern) early.
- Avoid inventing transfer numbers in marketing; cite only studies that report them.

## Lintern1990

**Core claims.** Lintern, Roscoe, Koonce and Segal (Human Factors, 32, 319-327; journal, volume and pages confirmed by an SAE record) studied transfer of landing skills in beginning flight training. Beginning flight students at the University of Illinois were given two sessions of landing practice in a simulator with a computer-animated contact landing display before they began intensive landing practice in the aircraft, and their aircraft landing progress was compared with a control group that had no simulation practice. The aim was to test whether simulator landing practice transfers to the aircraft for novice pilots, and which display features supported transfer.

**Specifics.** The search this session confirmed only the design of the study (two simulator sessions with a computer-animated contact landing display; control group with no simulation; subjects were beginning students at the University of Illinois). The results were not retrieved, so no outcome figures are reported. Later work from the same laboratory is cited in the literature, for example Lintern, Taylor, Koonce, Kaiser and Morrison (1997) on scene detail and visual augmentation in landing training in the International Journal of Aviation Psychology; as I recall it, that work reported that adding guidance cues helped novices in training and that detailed scenery added little for transfer, but I did not verify this and it must be checked before use. Lintern also wrote extensively on augmented feedback and guidance in flight training, and on the need to fade guidance so the learner does not depend on it. That work is not part of this source.

**Quotations.** None used.

**Criticism and status.** Single laboratory, small samples, one task (landing), and a specific simulator display. The study design (a control group with no simulator training and a measure of aircraft effort to criterion) is the standard transfer design. Results for display features cannot be generalized to every simulator. The paper is useful here chiefly as an example of the design and as evidence that novice landing skills can be trained, at least in part, in a simulator.

**Use for LTF.**
- Treat the landing as a trainable simulator skill for beginners, but state limits: the sim does not provide the feel of ground effect or crosswind gusts in a real aircraft.
- If guidance aids (glidepath marks, speed bands) are offered, offer them as removable aids and design a path that removes them (to be checked against Lintern 1997).
- Evaluate the effectiveness of LTF lessons with a transfer-style design where possible: compare learners who used a lesson with those who did not on a later criterion task.
- Do not spend design effort on scene detail for its own sake; spend it on the cues the learner must use (runway edges, aim point, airspeed).
- Report landing practice as part of a path, with two or three short simulator sessions before more intensive practice.

## Hays1992

**Core claims.** Hays, Jacobs, Prince and Salas (Military Psychology, 4(2), 63-74; citation confirmed from a reference list) meta-analyzed the research on flight simulator training effectiveness. The headline conclusion in the literature that cites it is that adding simulator training to aircraft training generally produces better performance than aircraft training alone, and that effects vary with aircraft type, task and simulator features. The paper also drew attention to weaknesses in the research literature: poor reporting of statistics, inconsistent measures and few studies that report the data needed for meta-analysis.

**Specifics.** An earlier report (1990, Defense Technical Information Center) of the same project is reported to have located 247 articles, of which 26 had enough statistical information for meta-analysis; the 1992 paper is a separate publication and its own counts and effect sizes were not retrieved, so none are quoted here (not confirmed). Reviewers who cite the paper report that the simulator-plus-aircraft groups outperformed aircraft-only groups, that results were stronger for jet aircraft than for helicopters, and that the amount of simulator "fidelity" was not simply related to training effect; I did not verify these specifics against the paper and they must be checked before use. A related meta-analysis by Rantanen and Talleur is mentioned in a reference list as finding few differences beyond about ten hours of training device use; this was not verified here.

**Quotations.** None used.

**Criticism and status.** The design (simulator plus aircraft versus aircraft only) does not show that simulator hours are as efficient as aircraft hours, only that extra practice helps; part of the effect is simply additional practice. Publication bias is possible. Most studies are military and many use equipment that no longer exists. The overall conclusion that simulation can add value in aviation training is now widely accepted and is not controversial; it does not tell a designer which features matter.

**Use for LTF.**
- Use the paper as supporting evidence, with care, that simulation practice adds value to flight training, but phrase it as "can help" and describe it as a supplement to instruction with a qualified instructor.
- Do not quote effect sizes until the original is checked.
- Pair the claim with the fidelity message from Salas1998: usefulness depends on instructional use, not realism.
- If the product ever cites research, link to the original and say which results are from military populations.
- Note in design documentation that the extra-practice confound exists, and avoid claiming that LTF is better than aircraft time.

## Salas1998

**Core claims.** Salas, Bowers and Rhodenizer argue in the International Journal of Aviation Psychology (1998, 8(3), 197-208; DOI 10.1207/s15327108ijap0803_2, confirmed) that some assumptions in the simulation community are misguided, namely the overreliance on high-fidelity simulation and the misuse of simulation to teach complex skills. The title states the thesis: "It is not how much you have but how you use it". A simulator's training value depends on the instructional design around it (training objectives, task analysis, scenario design, practice opportunities, performance measurement and feedback), not on how closely it reproduces the aircraft. Their stated goal was to open a dialogue between behavioral scientists and engineers.

**Specifics.** I confirmed only the abstract and bibliographic data this session; the points below are from my knowledge of the paper and the wider fidelity literature, and must be checked against the full text. The paper separates physical fidelity (how the simulator looks and feels like the real thing) from psychological or functional fidelity (the degree to which it elicits the same cognitive and behavioral processes). It argues that training should be designed from the skills to be learned, that the necessary fidelity differs by training stage (lower for novices, higher later) and by skill (procedures versus motor feel), and that event-based scenario design, which builds in the specific events that trigger the target behaviours, makes better use of any simulator. It discusses the temptation to buy fidelity as a proxy for training quality and the lack of data showing that it adds transfer beyond a certain point. Alessi (1988, "Fidelity in the design of instructional simulations") made a related argument for instructional simulation in general, and said that the optimum fidelity increases with the learner's expertise; I have not verified this citation this session.

**Quotations.** The title quoted above is exact; no other quotations are used.

**Criticism and status.** The paper is a position paper and not an experiment; its thesis is consistent with experimental findings that low-fidelity devices can produce substantial transfer (see Taylor1997) and with the meta-analytic evidence that features and fidelity are weakly related to transfer. Some critics argue that for certain skills (high-speed motion cues, emergency handling) physical fidelity does matter, and that cost-benefit decisions need data per skill. The paper does not say fidelity is irrelevant, only that it is not sufficient.

**Use for LTF.**
- Justify using a consumer simulator: what matters is that it supplies the cues the skill needs (attitude, airspeed, instruments) and not that it matches every aspect of a real Cessna 172.
- Build each lesson from an objective, a scenario and feedback, and write these down for every lesson and challenge.
- Do not market realism; market clarity and a path.
- List, per skill, which simulator cues transfer well and which do not (for example procedures and scan transfer; seat-of-the-pants feel does not), and say so to learners.
- Use event-based scenarios (a gust at the flare, an airspeed drift) designed to trigger the target behavior, not random free flight.

## Gopher1994

**Core claims.** Gopher, Weil and Bareket (Human Factors, 36(3), 387-405; confirmed) tested whether training on a complex computer game could improve actual flight performance. The game was Space Fortress, a purpose-built task designed to train the management of attention under heavy load, not a commercial entertainment game. Israeli Air Force flight cadets who trained on the game for 10 hours were compared with a matched group without game experience on later test flights. Both game-trained groups performed significantly better than the no-game group (per the abstract indexed by a library catalog). The paper's argument for relevance rests on a skill-oriented task analysis: the game was chosen because it exercises the same underlying cognitive skills as flight (allocating attention among competing demands, planning, responding to changing priorities), not because it looks like flying.

**Specifics.** Two experimental groups each received the 10 hours of game training, and their instructions differed in how they were trained to manage the game (the study's design uses the group of "emphasis change" training strategies developed by Gopher and colleagues, in which the learner is told to prioritize different components of the task in different sessions, practicing control over attention allocation; I did not retrieve the exact instruction conditions). The outcome measures were flight performance scores in later test flights in the Air Force flight school. An interview on the SharpBrains website describes the paper as a milestone and quotes a flight improvement of about 30%; this figure was not traced to the paper and is not confirmed. The research program behind it also produced the "Space Fortress" research literature on part-task versus whole-task training and on emphasis change (Gopher, Weil and Siegel, 1989; not rechecked).

**Quotations.** None used.

**Criticism and status.** The subjects were selected, highly motivated Air Force cadets, not civilian beginners; the flight measures were instructor ratings and may be influenced by expectations; the sample size and the details of the flight scoring were not retrieved. The result does not show that entertaining video games in general improve flying. Later literature on "brain training" and game training has found that transfer is usually narrow, which is consistent with the Gopher approach of training a specific, task-analyzed skill. The study is best read as supporting the claim that training attention strategy on a whole-task simulation with a defined cognitive skill can transfer to real flying.

**Use for LTF.**
- Design some challenges for the cognitive skill (scan, priority setting, workload management), not only for the motor skill; for example a scenario where airspeed, heading and altitude all drift and the learner must choose what to fix first.
- Use emphasis-change drills: ask the learner to prioritize one parameter this attempt and another on the next, then combine.
- If game elements are used (points, levels), they must train the target skill; do not add game-like mechanics that reward something unrelated to flying.
- Describe the benefit honestly: it comes from training a skill that matters in flight, not from "playing a game".
- Where possible, measure the cognitive skill (how quickly a drifting parameter is noticed) and report it.

## Wickens2013

**Core claims.** Wickens, Hutchins, Carolan and Cumming (Human Factors, 55(2), 461-470; DOI 10.1177/0018720812451994, confirmed) meta-analyzed the effectiveness of two training strategies: part-task training (PTT), in which a complex task is broken into parts that are trained separately, and increasing-difficulty (ID) training, in which the whole task is practiced at gradually increasing difficulty. They used 37 transfer studies, a transfer ratio analysis and Hedges' g, and framed the question with cognitive load theory: strategies that reduce intrinsic load in training should free resources for learning. The main findings per the abstract: PTT generally produced negative transfer when the parts were performed concurrently in the whole transfer task (for example two control axes at once), but not when the parts were performed in sequence; variable-priority training of the whole task (practicing the whole task while shifting emphasis among components) was successful; ID training was successful when the increases were implemented adaptively (according to the learner's performance) but not when difficulty was increased in fixed steps.

**Specifics.** The distinction between concurrent and sequential parts is the key design rule: a task whose components must be performed at the same time, such as holding altitude while navigating, has a time-sharing component that part-task training does not teach. Sequential tasks (checklists, procedure steps, legs of a pattern) are well suited to part-task training. Adaptive difficulty means that the system adjusts task difficulty on the basis of current performance (raise when successful, lower when failing), whereas fixed ID raises difficulty on a preset schedule regardless of performance. A related U.S. Army technical report (Plott and colleagues, 2013) extended the approach to six training methods and a tool called TARGET (as mentioned in a search summary; not read). Effect sizes were not retrieved this session and none are quoted.

**Quotations.** None used.

**Criticism and status.** The set of 37 studies is modest, covers different tasks, and the moderator analyses are coarse; the conclusions are best treated as design guidance, not as precise estimates. The results fit the older part-whole training literature (Naylor and Briggs, 1963, who suggested that part-task training works for tasks with low organization and high complexity independent parts, and that whole-task training works for highly interdependent tasks) and Wightman and Lintern (1985), who proposed segmentation, fractionation and simplification as part-task methods. I did not verify these two citations this session.

**Use for LTF.**
- Teach sequential parts (the checklist, the elements of the pattern, the legs) as parts first; for concurrent skills (pitch and power together) teach the whole task in a simplified form instead of isolating the control axes for a long time.
- Adapt difficulty to performance: wind, turbulence or tolerance steps up after success and down after failures, instead of a fixed ladder. Tell learners that this is happening.
- Use variable-priority drills on the whole task (this attempt, protect altitude; next, protect airspeed).
- Design the lesson list so that the learner returns to the whole task regularly, to avoid negative transfer from isolated drills.
- Record how difficulty was adapted so the dashboard can show progress against the learner's own difficulty settings.

## Tannenbaum2013

**Core claims.** Tannenbaum and Cerasoli (Human Factors, 55(1), 231-245; confirmed) meta-analyzed whether debriefs, structured post-performance reviews, improve performance. Across 46 samples (N = 2,136), debriefs improved effectiveness over a control group by approximately 25% (d = .67). The effect was similar for teams and individuals, across simulated and real settings, and across medical and non-medical samples. Meta-analytic methods indicated a bolstering effect of alignment (participants, focus and intent, and level of measurement being aligned with the debrief) and a possible impact of facilitation and structure.

**Specifics.** The authors defined a debrief by four essential elements and excluded interventions lacking any of them; the elements are not listed in the abstract, and my recollection of them (active self-learning by participants, a focus on specific events, multiple sources of information, and a developmental intent) has not been confirmed, so treat that list as not confirmed. A debrief is distinguished from simply giving feedback by being a facilitated discussion in which participants reflect on their own performance and work out what to change, usually soon after the event. Secondary sources round the improvement to 20-25%; the paper's figure is d = .67 and about 25%. The sample covers military, medical, aviation and business settings; the relative contribution of any one is not retrieved.

**Quotations.** None used.

**Criticism and status.** The result is a meta-analysis of heterogeneous studies, and most are team or medical simulations; individual flight debriefing is only a small part of the data. The moderator analysis of facilitation and structure is tentative. Debriefing quality varies, and poor debriefs (judgmental, unstructured or too late) may not help; the meta-analysis speaks to well-defined debriefs. Replication is in the sense of convergence with other debrief reviews in healthcare simulation, not a direct replication.

**Use for LTF.**
- End every in-sim challenge with a structured debrief: what happened (data), why (the learner's diagnosis), what to change next time (one action).
- Ask the learner to diagnose before showing the answer. A prompt such as "What did you notice about your speed on short final?" comes before the trace.
- Tie the data to specific events in the flight (the flare, the turn onto base), not just totals.
- Use developmental language; show what to do next instead of what was wrong; avoid shame-based scoring.
- Allow a short note to the learner's future self ("Next time, trim earlier"), which the next lesson reads back at the start (briefing).
- Align the debrief with the goal that was set in the briefing; if the goal was altitude hold, do not debrief on the radio call.

## Taylor1997

**Core claims.** The report "Transfer of Training Effectiveness of Personal Computer-Based Aviation Training Devices" (Taylor, Lintern, Hulin, Talleur, Emanuel and Phillips; FAA Office of Aerospace Medicine, DOT/FAA/AM-97/11, May 1997) evaluated a commercially available personal computer aviation training device (PCATD) in a transfer-of-training experiment for instrument flight training. The report's summary, as shown in the FAA listing, is that transfer savings were positive and substantial when new tasks were introduced. A journal version in 1999 is suggested by one citing source, but the citation was not confirmed and is not listed.

**Specifics.** The design follows Roscoe's transfer methodology: a group trained partly on the PCATD and then in the aircraft is compared with a group trained in the aircraft only, with aircraft time and trials to criterion as the measures. Subjects were from the University of Illinois aviation program (stated in my knowledge of the lab; the FAA listing text retrieved did not detail this). Reported conclusions as I recall them are that the PCATD group needed fewer aircraft hours to reach criterion on new instrument tasks, that transfer was higher for newly introduced tasks than for tasks already known, and that incremental transfer fell as simulator time grew, which agrees with Roscoe1971; none of these specifics, and no numbers, were verified this session and they should be read from the report before use. The device used the manufacturer's flight controls, so the findings apply to a PCATD with control hardware and instructor guidance, not to mouse-and-keyboard play. Related reports in the same series examined PCATDs for maintaining instrument currency (a search listing shows such a title; not read).

**Quotations.** None used.

**Criticism and status.** The tasks were instrument-flight tasks, not primary flight training, and the device is not Microsoft Flight Simulator 2024. The instructor was part of the treatment, so the result does not show that unguided PC practice transfers. The sample size is small compared with meta-analyses. The report is a primary government source and is widely cited by regulators and researchers as evidence for the credit given to approved PCATDs; any such regulatory credit is outside this project.

**Use for LTF.**
- Cite as evidence that desktop-class simulators can support real learning of procedures and instrument skills, when combined with structure and guidance.
- Encourage proper controls (yoke, pedals, throttle) in onboarding, and say honestly that the evidence behind this is partly inference (control hardware featured in the PCATD studies).
- Introduce new tasks in the sim first, since savings were greatest for new tasks.
- Stay clear of claims about licence credit.
- Provide an instructor-style layer (briefing, goals, debrief) because the instructor was part of the tested treatment.

## Lane synthesis

The sources agree on a consistent picture. Skills move through phases (Fitts and Posner; Bryan and Harter), and instruction should change with the phase: clear goals and verbal help early, error detection in the middle, robustness and secondary tasks late. Practice quality matters more than raw hours (Ericsson), although the strength of that claim has been scaled back by the meta-analysis (Macnamara), which found that practice explains a modest share of performance differences and that definitions drive the numbers. The motor learning literature (Schmidt 1975; Salmoni; Schmidt and Bjork; Shea and Morgan) repeatedly shows that conditions that make practice harder and in-session performance worse (variation, random order, reduced feedback, spacing) improve retention and transfer, provided the learner can cope. Wulf adds that the wording of instruction matters: an external focus beats an internal one, and autonomy and honest positive expectancies help. The simulation literature (Roscoe, Lintern, Hays, Taylor, Salas) says that simulation can transfer positively, that early hours give the largest return, and that fidelity matters only to the extent that it supplies the cues the skill uses; instructional use matters more than realism. Wickens and Gopher refine design: do not isolate concurrent skills, adapt difficulty to performance, train attention strategy. Tannenbaum supports structured, facilitated debriefs.

Conflicts and open points. Feedback frequency: the guidance hypothesis (Salmoni) against the finding that novices and complex tasks need more feedback early (Wulf and Shea 2002). Blocked versus random practice: depends on learner level, and applied effects are smaller than lab effects. Deliberate practice strength: Ericsson against Macnamara, with the definition itself disputed. Fidelity: evidence says low fidelity can transfer, but some skills need physical cues. Several figures in this lane are from secondary sources or memory and are marked not confirmed.

Ten takeaways.
1. Name the phase of each skill, design for it and fade scaffolding as the skill matures.
2. Word instructions as effects on the aircraft (nose, needle, runway), not body movements.
3. One specific goal per drill, bounded, slightly hard, with feedback right after.
4. Fade augmented aids and hints; do not leave them on permanently.
5. Reduce feedback frequency over time, offer it on request and after good trials, not only after errors.
6. Vary scenarios; start blocked, then interleave once each element has a workable form.
7. Test retention on a later day without hints, and show it as the real measure of learning.
8. Normalize plateaus and errors in the interface and show sub-skill progress.
9. End every challenge with a structured, developmental debrief tied to specific events.
10. Sell clarity and honest transfer, not realism, and position LTF as a supplement to real instruction.
