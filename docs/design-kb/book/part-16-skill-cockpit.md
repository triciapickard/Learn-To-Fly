# Skill, Simulation and the Cockpit

Learn to Fly is not a reading product with a simulator attached. Its whole promise is that a person who has never flown will, after a sequence of lessons and challenges, be able to do something with their hands and eyes in Microsoft Flight Simulator that they could not do before. That makes it a skill-training product, and skill training has its own research base, separate from the research on reading, memory for facts or visual design. This Part covers that base in two halves. The first half is skill acquisition and simulator training: how a perceptual-motor and cognitive skill develops, how practice should be scheduled, how much feedback to give, when to break a task apart, how much a simulator transfers and whether realism matters. The second half is aviation human factors: what eighty years of work on checklists, flight-deck documents, cockpit displays, alerting, automation modes and pilot error says about designing anything that a person reads while operating a complex machine. LTF's `FlyPanel`, `FlyModePage`, `ChecklistRunner`, `BriefTab`, `DebriefForm`, `ResultView` and the instrument widgets are all such things.

The evidence is uneven, and the grades say so. A few findings are well replicated: random practice beats blocked practice for retention on simple tasks, delayed unaided tests are the right measure of learning, part-task training of components that must be done together tends to transfer badly. Many are single studies, often old, often on military pilots or college students at a desk, and several of the most famous claims (the 10,000-hour rule, the five-stage expert ladder, the 40 percent checklist effect) are weaker than their reputation. The aviation sources are used for design lessons only. Nothing in this Part is a statement about how to fly the Cessna 172: every airspeed, limit, checklist item and procedure in LTF comes from `content/aircraft.yaml` and its sources, through `{{vspeed.*}}` and `{{aircraft.*}}` tokens, and is verified in the sim. Use the rules here to decide how a lesson, challenge or fly-mode screen is structured, sequenced, worded and measured, never what it says about the airplane.

## How a skill is built

### Three phases, and why the activity changes

Fitts and Posner's short textbook gave skill research its most durable description: a cognitive phase, an associative phase and an autonomous phase [@fitts1967human]. The important idea is not the number three. It is that the learner does not simply get faster at the same activity; the activity itself changes. In the cognitive phase the learner works out what the task is and what to do, in a verbal and effortful way. In the associative phase the learner links the right responses to the right cues and removes errors. In the autonomous phase the skill runs with little demand on attention, which frees capacity for everything else. The book is a synthesis of mid-century experimental and applied work, not a single experiment, and it gives no fixed hours for any phase.

Anderson built a formal theory on these phases and described them in his own words [@anderson1982acquisition]. In the first stage the learner makes an initial encoding of the skill that is good enough to produce the behavior "to at least some crude approximation", and verbal mediation is common: the learner rehearses the information needed to carry out the skill. In the associative stage performance is smoothed out, errors in the initial understanding are gradually found and removed, and the verbal mediation drops out. In the autonomous stage improvement is gradual and continues, often indefinitely.

The practical content of the stage model is the pairing of each stage with what instruction should do. A learner in the cognitive stage needs a clear picture of the goal and the component actions. A learner in the associative stage needs practice and informative feedback. A learner in the autonomous stage needs continued practice under the demands of real conditions.

The model has three limits that a product team must respect. The stages are not separable for a whole course: a single learner is at different stages for different parts of a complex task at the same time, so the model describes components, not people. It is qualitative and does not predict when anyone moves on. And it was drawn largely from simple tasks, which Wulf and Shea argue do not reliably generalize to complex skills [@wulf2002principles]. It is well used as a broad description and weakly tested as a set of sharp boundaries.

::: {.rule #SKL-001 grade="C"}
**Design each lesson and challenge for a named phase of the component it teaches, not for a phase of the learner.** The cognitive, associative and autonomous phases describe how one component of a skill changes with practice [@fitts1967human; @anderson1982acquisition]. A learner who is autonomous at taxiing may be in the cognitive phase for landing. The model gives no timings, so it cannot sort people, but it does say what instruction each phase needs: a clear goal and ordered parts, then practice with feedback, then practice in realistic conditions.

*In LTF:* lesson pages under `content/lessons/` serve the cognitive phase of their topic; the challenge that follows in `BriefTab` and `FlyPanel` serves the associative phase. Content review should ask of each block which phase it serves.
:::

::: {.rule #SKL-002 grade="C"}
**Never label a learner with a skill stage, and never put hours on a stage in learner-facing copy.** The phase models are descriptive and give no measurable threshold or duration [@fitts1967human]. A dashboard that announces "autonomous" or a lesson that says "after ten hours this becomes automatic" claims what the evidence does not give.

*In LTF:* `DashboardPage` should show consistency across attempts per criterion, not a stage name. Plain phrases such as "learning what to do", "getting smooth" and "doing it without thinking about each step" are acceptable in copy when they describe a component, not a person.
:::

### Declarative to procedural

Anderson's account of what changes between the stages is the most useful single idea for the structure of a lesson [@anderson1982acquisition]. In the declarative stage, facts about the domain are stored and interpreted by general procedures, so performance is slow and demands working memory. In the procedural stage, the knowledge is embodied directly in procedures (condition-action rules), so performance is fast and does not require retrieving facts one at a time. The bridge between them is knowledge compilation, which has two subprocesses: composition collapses sequences of steps into single steps, and proceduralization embeds factual knowledge into the procedure so that the learner stops looking things up. After a skill is procedural, further practice tunes it through generalization (the procedure applies more widely), discrimination (it becomes more selective) and strengthening (procedures that work get stronger and faster).

Anderson frames the scale bluntly: he writes that it takes at least 100 hours of learning and practice to acquire any significant cognitive skill to a reasonable degree of proficiency, that a student programmer has only a very modest facility after 100 hours, and that a first language takes tens of thousands of hours. That figure concerns cognitive skills in general. It is not a statement about flying and must not appear in LTF copy as one.

The theory was developed for symbolic skills such as geometry proofs and programming, and its details have been revised many times since 1982. A pilot's skill also includes perceptual-motor control, which ACT was not built to explain. What has held is the broad pattern that novices verbalize and rely on explicit facts, and experts do not.

For design, the consequence is that explicit knowledge is the early form of the skill, not the goal. A lesson that states what the airspeed indicator's colored arcs mean is delivering the declarative form. The goal of practice is that the learner stops needing to recall the statement and simply acts on the cue. A page that always shows the fact beside the task keeps the learner in the declarative stage, because the fact never has to be retrieved and compiled.

::: {.rule #SKL-003 grade="B"}
**Put facts in the lesson and require their use, unseen, in the challenge.** Skill begins as declarative knowledge interpreted slowly and becomes procedural through use; the change requires that the learner retrieve and apply the fact rather than read it [@anderson1982acquisition]. A challenge that displays every fact it tests lets the learner perform without compiling anything. Grade B because the theory has broad support for the declarative-to-procedural shift but was built on symbolic tasks.

*In LTF:* `BriefTab` may restate the goal and the sim setup, but the numbers the learner must hold should appear as `{{vspeed.*}}` tokens in the lesson and in the "Key numbers" reference, not inside each `FlyPanel` step once a learner has passed the challenge once.
:::

::: {.rule #SKL-004 grade="B"}
**Write quiz items that ask for application of a fact, not recitation of it.** A recitation item ("what does this arc on the airspeed indicator mean?") tests the declarative form only; an application item ("the needle is here and you want to do this: which control change?") requires the procedure the course is trying to build [@anderson1982acquisition]. Recitation still has a place as a first check of the declarative stage.

*In LTF:* `QuizBlock` prompts in each lesson should include at least one application item per section, and the widget "Quiz me" mode in `WidgetFrame` is the natural place for them, since it can set an instrument state and ask what to do.
:::

### The practice curve and the plateau

Anderson also addresses the log-linear power law of practice, which he reports has been widely discussed with reference to Fitts and Posner: a plot of the logarithm of time to perform a task against the logarithm of practice approximates a straight line [@anderson1982acquisition]. The shape means large early gains and progressively smaller ones. Anderson argues that a multi-stage, multi-mechanism theory produces something that looks like a power function to a good approximation, though not a pure power law. A standing criticism, raised by later authors in other lanes, is that averaging across learners can produce a smooth power curve even when individuals learn in a different shape, so the curve describes groups better than individuals.

The design consequence is about expectation, not mathematics. A learner who improves quickly on the first three attempts and then barely moves has not stalled; that is the normal shape. A product that reads flat later gains as failure, or that celebrates only improvement, will discourage people at exactly the point where steady practice is still building the skill.

::: {.rule #SKL-005 grade="B"}
**Present progress so that a flattening curve after early gains reads as normal, not as failure.** Practice curves show steep early improvement followed by smaller gains [@anderson1982acquisition; @fitts1967human]. The smooth form may be partly an artifact of averaging, which is a further reason not to read any one learner's plateau as a problem.

*In LTF:* any per-criterion trend added to `HistoryTab` or `DashboardPage` should label the later part of the curve with what it means ("small gains now: this is normal") and point to the next skill once results are consistent, as "What a simulator transfers" recommends.
:::

### Stage ladders for experts

The five-stage model of Hubert and Stuart Dreyfus (novice, advanced beginner, competent, proficient, expert) is the most widely used stage model in professional training, and it is often used to structure courses and to label learners [@dreyfus1986mind]. In Peña's summary, novices follow context-free rules and need monitoring; advanced beginners learn "instructional maxims" from real situations; competent performers learn guidelines and become emotionally invested; proficient performers recognize situations intuitively; experts act fluidly on implicit knowledge, falling back on analysis when intuition fails. The book is a philosophical and phenomenological argument illustrated with examples, among them pilots and chess players, not an experimental study.

Its empirical support is weak. Peña's review of the cognitive evidence doubts the model for clinical reasoning, noting that it rests on phenomenology, cites little scientific evidence, and that medical students generate hypotheses before extensive experience, which undercuts the claim that novices ignore context. Gary Klein argues that the model "runs into trouble from the very start": chess novices and fighter pilots preparing for combat do not follow context-free tactical rules, training developers who use the model invent rules where none exist, which trainees must later unlearn, and experience does not reliably move people from procedures to intuition. He cites Gobet and Chassy (2009) as finding no empirical support for the stages. Klein still agrees about the direction of travel, toward pattern-based intuitive expertise.

::: myth
**"Learners pass through five stages from novice to expert, starting with context-free rules."** The Dreyfus model is widely taught but rests on phenomenology rather than experiment [@dreyfus1986mind]. Critics summarized in the notes find no empirical support for discrete stages, observe that novices use context from the start, and warn that rule-first training invents rules that must later be unlearned. Growth looks continuous, built from a growing repertoire of recognized patterns.
:::

The part of the model that survives is the observation, shared with the cognitive phase of Fitts and Posner and the declarative stage of Anderson, that a beginner needs a simple, concrete starting structure. A short procedure is fine when it is tied to a situation and the learner can see why each step matters. What fails is a stack of rules to memorize before the learner has seen the situation they apply to.

::: {.rule #SKL-006 grade="C"}
**Tie every early procedure to the situation it serves, and show that situation before asking the learner to memorize the steps.** Beginners need a concrete starting structure [@fitts1967human; @anderson1982acquisition], but the evidence against rule-first stage ladders suggests that rules without context are learned poorly and sometimes must be unlearned [@dreyfus1986mind]. Grade C: the claim rests on critique and convergent theory, not on a direct test.

*In LTF:* a lesson that introduces a checklist should show, in a widget, image or short video, the moment in the flight where it is used before the `ChecklistRunner` appears. Marketing copy on `LandingPage` should avoid "from novice to expert in N lessons".
:::

### What this means for Learn to Fly

Keep the lesson-then-challenge sequence that `LessonPage` and `ChallengePage` already embody: it is a direct match to the cognitive-then-associative order, and the "Fly it" challenge cards at the end of a lesson make the transition explicit. Keep the plain, unstaged language of the dashboard. `DashboardPage` currently shows Attempts, Gold results and "Sim time (estimated)"; it does not label anyone a novice or an expert, and it should stay that way (SKL-002).

Change three things. First, the `FlyPanel` step list repeats the full procedure, including every number, on every attempt. That is right for a first attempt and wrong for the fifth (SKL-003). A challenge passed once should offer a version of fly mode in which the steps collapse to their headings and the learner flies from memory. Second, `QuizBlock` items across the lessons should be audited for the ratio of recitation to application (SKL-004); widgets in "Quiz me" mode are the cheapest place to add application items, because the instrument state is already drawn. Third, any trend view added to `HistoryTab` must carry the expectation of a flattening curve (SKL-005), so that a learner is not told by a falling slope that they are failing.

Build nothing that depends on stage boundaries. A "skill level" badge, a "you are now proficient" message or a Dreyfus-style course ladder on `RoadmapPage` would claim more than the evidence supports. The roadmap's eight rungs describe content versions of the product, which is fine; they should never be reworded into learner stages.

## Deliberate practice and its limits

### The claim

Ericsson, Krampe and Tesch-Römer proposed that the difference between expert and ordinary performers reflects a long period of deliberate practice rather than innate talent as the main cause [@ericsson1993role]. As quoted by Macnamara and colleagues, they wrote that "high levels of deliberate practice are necessary to attain expert level performance" and that their framework could "provide a sufficient account" of the main facts about exceptional performance. Deliberate practice is usually described as engagement in structured activities created specifically to improve performance in a domain [@macnamara2014deliberate]. The evidence was two retrospective studies of musicians and a theoretical framework: correlational evidence from small samples.

The violin study used three groups of 10 students from the Music Academy of West Berlin, described as best, good and future music teachers. Structured interviews asked for weekly hours of practice alone since starting the instrument, summed to cumulative totals. As reported in the later replication, cumulative practice alone to age 18 was 7,410 hours for the best group, 5,301 for the good group and 3,420 for the least accomplished, with an effect size of eta squared 0.48 [@ericsson1993role]. Averages to age 20 put the best violinists above 10,000 hours [@macnamara2014deliberate], which is where the popular rule comes from, by way of Gladwell's *Outliers*. The 1993 article itself was not read for this book; its figures here come from the replication and the meta-analysis that report them.

### The tests

Three criticisms followed. The data were retrospective self-reports, open to memory error. The definition shifted: the 1993 theory described deliberate practice as activities designed by a teacher, but the measure actually used was practice alone, which did not require a teacher, and later writing moved between the two. And correlation is not cause; Sternberg suggested that deliberate practice may be a proxy for ability, since people stop doing what they do not do well [@macnamara2014deliberate].

The most direct test was a preregistered, double-blind replication with 39 violin students, 13 per group, from the Cleveland Institute of Music and Case Western Reserve University. The best group did not accumulate significantly more practice alone to age 18 than the good group (p = 0.364), and the best group's current weekly practice was lower than the good group's. Deliberate practice explained about 26 percent of the variance in the replication against 48 percent in the original, and the authors concluded that the original's complete correspondence between practice and level was not replicated [@ericsson1993role].

Macnamara, Hambrick and Oswald asked the question across every domain where it had been studied [@macnamara2014deliberate]. From 9,331 potentially relevant articles they found 88 studies that met their criteria, with 111 independent samples, 157 effect sizes and 11,135 participants. Deliberate practice explained 26 percent of the variance in performance for games (r = .51), 21 percent for music (r = .46), 18 percent for sports (r = .42), 4 percent for education (r = .21) and less than 1 percent for professions (r = .05, not significant).

Two moderators matter for LTF. The first is predictability. Practice explained 24 percent of variance for highly predictable activities (r = .49), 12 percent for moderately predictable ones (r = .35) and 4 percent for activities of low predictability (r = .21). The authors' own example of a low-predictability environment is handling an aviation emergency; fencing is moderate and running is high. The second is how practice was measured. Retrospective interviews gave 20 percent of variance (r = .45), retrospective questionnaires 12 percent (r = .34), and logs kept as practice happened 5 percent (r = .22). The authors reason that logs are probably more accurate, because people do not remember the past perfectly, which means the better the measure, the smaller the apparent effect.

The meta-analysis has its own critics, who argue it used a broader definition of deliberate practice than Ericsson's; a music-focused reanalysis used stricter inclusion rules. Whether the true share is nearer one fifth or one half depends on how practice is defined and measured, and the argument is live. No one in the debate disputes that other factors matter.

::: myth
**"Ten thousand hours of practice makes anyone an expert."** The figure is the average to age 20 of the best violinists in one retrospective study of 30 music students [@ericsson1993role]. A preregistered replication did not reproduce the original's close link between practice and level, and a meta-analysis of 88 studies found practice explained 26 percent of performance variance in games, 18 percent in sports, 4 percent in education and under 1 percent in professions [@macnamara2014deliberate]. Practice matters; the amount alone does not decide who becomes expert.
:::

### What survives

LTF's learners are not elite performers, so the dispute over whether practice explains a fifth or half of elite variance matters less than the useful core: practice that is structured, aimed at a specific weakness and followed by feedback beats unfocused repetition. That core is accepted by both sides and is consistent with the transfer and feedback evidence later in this Part.

::: {.rule #SKL-007 grade="B"}
**Make each challenge attempt a targeted attempt at named criteria, with feedback on those criteria afterward.** Structured practice aimed at a specific improvement is the part of the deliberate-practice account that both its authors and its critics accept [@ericsson1993role; @macnamara2014deliberate]. Grade B: the share of performance it explains is moderate and contested, but the direction is not.

*In LTF:* every challenge YAML already lists `criteria` with labels and tiers, and `BriefTab` shows them under "How you'll be scored". Keep that. On the Fly tab, show the one or two criteria the learner chose to work on this attempt above the steps.
:::

::: {.rule #SKL-008 grade="C"}
**Ask the learner for one goal before a fly-mode session and show the result against it at the end.** A self-set, specific target turns repetition into practice aimed at a weakness [@ericsson1993role]. The rule follows from the definition of deliberate practice rather than from a test of goal prompts in a simulator, so it is graded C.

*In LTF:* `DebriefForm` collects reflections after the flight; a single "What are you working on this time?" field in `BriefTab`, echoed in the `ResultView` heading, would close the loop. The field must be optional and short.
:::

::: {.rule #SKL-009 grade="B"}
**Use varied scenarios, not repetition of one, for decision skills and rare events.** Practice explained least variance in low-predictability activities, and the meta-analysis's own example of such an activity is handling an aviation emergency [@macnamara2014deliberate]. Drilling one fixed version of a rare event trains that version.

*In LTF:* the `randomEvents` in challenges such as C5.5 and C8.1 already vary timing and occurrence through `schedule()` in `FlyPanel`. Extend the idea so that a non-normal challenge draws from more than one scenario, each with procedures from the aircraft's documents.
:::

::: {.rule #SKL-010 grade="B"}
**Build practice totals from logged sessions, never from self-report or content estimates.** In the meta-analysis, practice measured by retrospective interview explained 20 percent of performance variance and practice measured by a log explained 5 percent, which the authors attribute to the inaccuracy of memory [@macnamara2014deliberate]. A number the learner remembers, or a number derived from what an activity is supposed to take, is a worse measure than a timestamp.

*In LTF:* the "Sim time (estimated)" tile on `DashboardPage` is computed in `progress.service.ts` from each challenge's `estimatedMinutes`, not from flown time. The `FlyPanel` stopwatch already records `startedAt`; record a stop time too and show logged time, or drop the tile.
:::

::: {.rule #SKL-011 grade="B"}
**Do not headline hours or attempt counts; headline improvement on named skills.** Amount of practice explains a modest share of performance and less in unpredictable domains [@macnamara2014deliberate]; a large number of hours is neither the goal nor good evidence of skill.

*In LTF:* the `DashboardPage` "Stats" column leads with Attempts. Move a per-skill view (best tier per criterion over recent attempts) above it, and keep attempt counts as secondary detail.
:::

::: {.rule #SKL-012 grade="B"}
**Never promise that effort alone guarantees mastery, and never use the 10,000-hour idea in copy.** The replication and the meta-analysis show practice is necessary but not sufficient, and its share varies widely by domain [@ericsson1993role; @macnamara2014deliberate]. Copy that tells beginners everyone can reach a level with enough hours has no support.

*In LTF:* the landing h1 "Yes, you can fly a plane." is a claim about a simulator course, not about mastery, and is acceptable. Encouragement in `ResultView` such as "Fly it again to push for a higher tier" should stay specific to the next attempt and should not imply a guaranteed outcome.
:::

### Practice without a teacher

The definitional dispute over whether deliberate practice must be designed by a teacher matters for LTF, because LTF has no teacher in the loop. The original theory described activities designed by a teacher; the measure was practice alone [@macnamara2014deliberate]. LTF is in the position of having to design the practice in advance, in content, for a learner who will run it alone. That puts the burden on the challenge design: the criteria, the debrief questions and the review links are the teacher's contribution, written once.

The challenge YAML format already has the parts of a designed practice activity. `goal` states the target. `criteria` names what is measured and how it is tiered. `commonMistakes` and `tips` give the coaching a teacher would give. `debriefQuestions` prompt reflection on the cause of errors ("What made your altitude wander, and what fixed it?" in C2.1). `reviewLink` on a criterion sends the learner back to the exact lesson section. What the format lacks is the teacher's judgment about what to practice next, which "Difficulty, load and the challenge point" addresses.

::: {.rule #SKL-013 grade="C"}
**Write every challenge as a complete designed practice activity: goal, criteria, likely errors, a coaching tip, a reflection prompt and a route back to the lesson.** With no teacher present, the content must carry the design that deliberate practice assumes a teacher supplies [@ericsson1993role; @macnamara2014deliberate]. Grade C: the requirement follows from the definition, not from an experiment.

*In LTF:* make `commonMistakes`, `tips`, `debriefQuestions` and at least one `reviewLink` required fields in the challenge schema in `@shared/schemas/`, so that strict content validation fails a challenge that lacks them.
:::

### What this means for Learn to Fly

Keep the criterion-based scoring. `DebriefForm` builds the rubric from each criterion, `scoreAttempt` in `shared/scoring.ts` recomputes the tier on the server, and `ResultView` lists "Criterion by criterion". That is a deliberate-practice structure: specific targets, specific results. Keep the `randomEvents` mechanism, which already varies when and whether an event occurs (SKL-009).

Change the dashboard's emphasis. The "Stats" tiles (Attempts, Gold results, Sim time) are the three most practice-quantity-like numbers available, and the sim time is not even measured (SKL-010). Replace the headline with a per-skill view and log real flight time from the stopwatch, or remove the time tile. Keep "Gold results" but place it under a breakdown that says which criteria have reached gold, so the number refers to skills, not to volume (SKL-011).

Build a goal prompt: one optional field in `BriefTab` ("What are you working on this time?"), saved with the attempt in `features/challenges/storage.ts`, shown at the top of the Fly tab and in `ResultView` (SKL-008). Make the coaching fields required in the challenge schema (SKL-013), and audit the 29 challenge files in `content/challenges/` for missing `reviewLink` entries, since those links are the only place the course can act as a teacher at the moment of failure.

## Learning is not performance

### Two problems with the obvious measure

The single most important reference for a product that sits beside a simulator is Schmidt and Bjork's review of practice [@schmidt1992new]. Its target is an assumption built into most training: that whatever speeds improvement during practice also produces the best long-term performance and the best transfer. With evidence from both motor and verbal learning, they show that the assumption is often wrong. Manipulations that maximize performance during training can be detrimental in the long term, and manipulations that slow acquisition can support the long-term goals.

They name two problems with the common view. The first is that performance during acquisition is an imperfect indicator of learning, because many variables have temporary effects on performance that disappear when the variable is removed. The second is that acquisition and retention are not separable phases with separate measures: the amount learned has to be measured on a delayed retention or transfer test, performed without the practice manipulation. Trainers rarely see their learners on those delayed tests, which are the real goal, so their intuitions are calibrated on the wrong signal.

A further warning concerns learners themselves. In Baddeley and Longman's keyboard study, as Schmidt and Bjork recount it, the training schedules subjects preferred produced the least learning [@schmidt1992new]. Learners can mislead instructors, and they can mislead product teams who read satisfaction surveys.

::: {.rule #SKL-014 grade="A"}
**Judge whether a lesson or challenge teaches by a delayed, unaided test, never by how smoothly learners perform inside it.** Performance during practice mixes learning with temporary effects of the practice conditions; learning shows on a later test without those conditions [@schmidt1992new; @salmoni1984knowledge]. The distinction is supported across motor and verbal paradigms. Grade A for the measurement principle.

*In LTF:* a pass in `FlyPanel` with every step visible shows the steps work. To know the learner has learned, LTF needs a later attempt with the steps hidden or a quiz on a later visit. Any future analytics on lesson effectiveness must use those, not first-attempt tiers.
:::

::: {.rule #SKL-015 grade="B"}
**Never treat learner preference or satisfaction as evidence that a practice design works.** In the keyboard study described by Schmidt and Bjork, the schedules learners preferred produced the least learning [@schmidt1992new]. Preference is worth collecting for other reasons, such as whether people come back, but it does not measure learning.

*In LTF:* if a "this was helpful" control is added to `LessonPage` or `ResultView`, its results belong in the product's engagement measures, and must not be used to choose between practice schedules.
:::

### Scheduling: blocked and random practice

The first of Schmidt and Bjork's three illustrations is the order in which tasks are practiced [@schmidt1992new]. In Shea and Morgan's arm-movement study, blocked practice (all trials of one task, then all of the next) gave better performance during acquisition, but after 10 minutes and after 10 days random practice (tasks intermixed) gave better retention, whether the retention test itself was blocked or random. The effect, called contextual interference, has one qualification in the same paper: at minimal levels of practice blocked practice gave better retention, and the advantage reversed only with more practice.

The verbal analogue is spacing. In Landauer and Bjork's name-learning experiments, the condition with zero items between repeated tests gave about 95 percent correct during acquisition but 33 percent on the final retention test. Uniform spacing of 4 or 5 items gave about 43 percent during acquisition and 41 percent at final retention, and an expanding sequence of intervals gave 48 percent at final retention. The condition that looked best during practice was the worst at the end.

Testing is part of the same picture. In a face-name experiment a name presented once and tested four times was retained better than one presented five times, 66 percent against 58 percent [@schmidt1992new]. A test is a learning event, not only a measurement. The testing and spacing literature is treated in depth in Part XIV, The Science of Learning: Load and Memory; this chapter uses it only where it meets motor practice.

The random-practice result has a boundary that matters for flying. Wulf and Shea report that for complex skills the evidence is mixed: a kayak-roll study and serving studies favor alternation, but blocked practice was better for low-skilled or young learners in studies of tennis groundstrokes and of Frisbee throwing by children aged 5 to 6 [@wulf2002principles]. The challenge point framework, covered in "Difficulty, load and the challenge point", predicts this: low contextual interference suits beginners and higher interference suits more skilled performers [@guadagnoli2004challenge].

::: {.rule #SKL-016 grade="B"}
**Introduce a new maneuver in a block, then mix it with earlier maneuvers once the learner can complete it.** Random practice beats blocked practice for retention on simple tasks, but at minimal practice and for low-skilled learners of complex skills blocked practice can be better [@schmidt1992new; @wulf2002principles; @guadagnoli2004challenge]. The combined rule (block first, mix later) is an inference from the two bodies of evidence, so it is graded B rather than A.

*In LTF:* the challenges of a module (C2.1 to C2.4 for the fundamentals) are a block. Combined challenges such as C2.4 "The box" and C4.7 "Three-circuit session" are the mixed practice. Keep both kinds, and let the curriculum route a learner who has passed a module's single-skill challenges to a mixed one before moving on.
:::

::: {.rule #SKL-017 grade="A"}
**Bring earlier material back at spaced intervals, interleaved with new work, rather than in one review block.** Spaced repetition and tests at intervals produced better final retention than massed repetition even though massed repetition looked better during practice [@schmidt1992new]. The spacing and testing effects are among the most replicated results in learning research.

*In LTF:* each lesson's `QuizBlock` can include one item from an earlier lesson. A short "from earlier" quiz at the top of a lesson after a gap of days would apply the rule without new pages. See Part XIV, The Science of Learning: Load and Memory, for scheduling detail.
:::

### Variability of practice

The third illustration is induced variability [@schmidt1992new]. In Catalano and Kleiner's coincident-timing task, practice at four different target speeds produced larger error during acquisition (52 against 38 milliseconds) than practice at one speed, but was more accurate on new speeds the learners had never practiced. The skill being built by variable practice is the general one, and the test that shows it is a test on new conditions.

Flying in the sim offers variation cheaply: wind, time of day, starting position, runway, weight. The challenge YAML already has `weatherPreset`, `timeLocal`, `loadPreset` and `startDetails`. Each challenge currently fixes one value of each, which makes every attempt a repetition of the same conditions.

::: {.rule #SKL-018 grade="B"}
**Once a learner can complete a challenge in its base setup, vary the setup across attempts.** Variable practice produces more error during training and better performance on new conditions [@schmidt1992new]. For complex skills, add variation after the basics are stable rather than from the first attempt [@wulf2002principles]. Grade B because the evidence comes mostly from simple tasks and is qualified for complex ones.

*In LTF:* allow a challenge to define two or three alternative `weatherPreset` or `startDetails` values, chosen by `BriefTab` on a repeat attempt, with each variant verified in the sim like the base setup.
:::

### The common principle and its limit

Schmidt and Bjork offer one principle behind all three results: the conditions that give the best retention introduce "difficulty" during acquisition that forces the learner to retrieve or reconstruct the response, rather than repeat it from short-term memory [@schmidt1992new]. They also caution that it is too extreme to say any difficulty helps. Shea and Upton found that interpolated processing tasks degrade both practice and retention. The difficulty has to engage the processing the learner will need later.

::: {.rule #SKL-019 grade="B"}
**Add difficulty only when it makes the learner retrieve or reconstruct what the real task needs; remove difficulty that does not.** The useful difficulties force retrieval of the response; unrelated extra processing harms both practice and retention [@schmidt1992new]. A timer, a distracting animation or a confusing layout is difficulty of the useless kind.

*In LTF:* hiding the `FlyPanel` steps on a repeat attempt is a useful difficulty (the learner must recall the procedure). A random event with no connection to the challenge's skill, or a fly-mode layout that hides the current step, is a useless one.
:::

### Measuring in the condition the learner will face

Lintern, Roscoe and Sivier measured transfer from 64 different training conditions to a single criterion condition: a conventional contact display with normal control dynamics, the condition the learners would eventually face [@lintern1990display]. That design choice is the model for any final check. The training conditions may be simplified or augmented; the test is not. For LTF the unaided condition is Microsoft Flight Simulator with no app prompts, the sim's assistance settings at the level the course names for its final checks, and no visible procedure.

::: {.rule #SKL-020 grade="B"}
**Make the final check of each module a challenge flown in the unaided condition the learner will face, with prompts removed.** Transfer studies measure learning in the criterion condition, not in the training condition [@lintern1990display; @schmidt1992new].

*In LTF:* C8.1 "Local checkride" and C8.2 "Cross-country capstone" are the course's unaided checks. Their `FlyModePage` view should show only the goal, the timer and any random-event alert, with the procedure behind a "show steps" control that is recorded in the attempt if used.
:::

### What this means for Learn to Fly

Keep what already fits. Quizzes inside lessons are tests, and tests are learning events; `QuizBlock` with "Check answer" and an explanation is well placed. The split between single-skill and combined challenges in the curriculum already provides a block-then-mix progression (SKL-016).

Change the measurement mindset. The `TierBadge` result and the "Best: Gold" line on `ChallengePage` record the best performance under full guidance. That is useful for motivation and misleading as a measure of learning (SKL-014). The attempt record already stores `checklistTicks` and `randomEventsFired`; it should also store whether the procedure was visible, so that a pass with the steps hidden can be distinguished from a guided pass.

Build three features in this order. First, the hide-steps mode for `FlyPanel` and `FlyModePage` (SKL-019, SKL-020), which is a small UI change. Second, setup variants on repeat attempts (SKL-018), which needs a schema change and sim verification for each variant. Third, spaced return of earlier material: a "from earlier" quiz item at the top of a lesson when the learner returns after a gap (SKL-017). None of these should be judged by whether learners like them more (SKL-015); judge them by unaided performance later.

## Feedback, guidance and attention

### Knowledge of results and the guidance hypothesis

Knowledge of results (KR) is information about the outcome of a movement: where the ball landed, how far the flight path drifted from the target. Salmoni, Schmidt and Walter argued that earlier research on KR had confounded two effects [@salmoni1984knowledge]. Experiments measured performance while KR was still being given, and that measure mixes a temporary effect of KR on performance, which vanishes when KR is withdrawn, with a relatively permanent effect on learning, which shows on a later test without KR. Once the two are separated the picture changes. The guidance hypothesis that grew from the review says KR guides the learner toward the correct response, which helps during practice, but given too often it becomes something the learner depends on, so that learning, measured when KR is removed, suffers.

Two terms from the review recur in the design rules. Relative frequency of KR is the proportion of trials on which KR is given: absolute frequency divided by total trials. Summary KR is information about a whole set of trials, given after the set is finished. The review's practical conclusion, as later authors relay it, is that a reduced relative frequency of KR slows acquisition while KR is present but supports better retention, because learners process their own intrinsic feedback and become less dependent on augmented information. The full review was not read for this book; these definitions and conclusions come from later papers that describe and cite it, among them Schmidt and Bjork, who note that "this important distinction has been mostly ignored since the late 1950s" [@schmidt1992new].

Schmidt and Bjork describe the experiment that made the idea concrete. In Schmidt, Young, Swinnen and Shapiro's study, feedback came after every trial or as a summary after 5 or 15 trials. Errors during acquisition grew as the summary got longer. On the no-feedback retention tests at 10 minutes and 2 days the 15-trial group did best. A 50 percent faded condition, in which feedback was progressively withdrawn, did better than 100 percent feedback on retention, and the differences grew as the retention interval grew [@schmidt1992new].

### When the rule reverses

The guidance hypothesis stimulated hundreds of experiments with mixed results. Several studies showed learning advantages of reduced feedback, but replication has been inconsistent, and neither the guidance hypothesis nor a competing feedback-usefulness hypothesis could be confirmed in several studies [@salmoni1984knowledge]. The most important qualification comes from Wulf and Shea's review of complex skills [@wulf2002principles]. On the ski simulator task, 100 percent concurrent feedback proved the most effective condition for learning. The optimal summary length was shorter for more complex tasks: in a simulated batting task a summary of 5 trials beat summaries of 1 and of 15. And the organization of feedback mattered: switching the focus of feedback every trial (serial feedback) was worse than holding one focus for a block of trials.

Wulf and Shea explain this with a load account. In the words of their abstract, situations with low processing demands benefit from practice conditions that increase the load and challenge the performer, whereas practice conditions that result in extremely high load should benefit from conditions that reduce the load to more manageable levels [@wulf2002principles]. Withholding feedback adds load. On a simple task, added load helps; on a complex task the beginner is already overloaded, and feedback reduces it. Flying is complex by Wulf and Shea's own criteria: it cannot be mastered in one session, has many degrees of freedom and is ecologically valid.

::: {.rule #SKL-021 grade="B"}
**Give beginners on complex maneuvers frequent, specific feedback, and thin it as their attempts become consistent.** Reduced feedback helped retention on simple tasks [@schmidt1992new; @salmoni1984knowledge], but on complex tasks frequent and even concurrent feedback was as good or better, and the best summary was short [@wulf2002principles]. Grade B: the reversal rests on a small number of complex-task studies, many from one laboratory.

*In LTF:* `ResultView` gives criterion-by-criterion feedback after every attempt, which is right for modules 2 to 5. After a learner has passed a challenge at Silver or better twice, offer a "summary" view that shows results only after a set of attempts.
:::

::: {.rule #SKL-022 grade="B"}
**Offer a summary across several attempts, not only a verdict per attempt.** Summary feedback over a set of trials supported retention in the simple-task studies, with a shorter optimal summary for complex tasks [@schmidt1992new; @wulf2002principles]. No specific set size has been shown optimal for flight tasks, so LTF should not claim one.

*In LTF:* `HistoryTab` is a table of attempts. Add a per-criterion row showing the last few results as small tier marks, so the learner sees a pattern rather than a single verdict, and put a one-line summary above the table.
:::

::: {.rule #SKL-023 grade="B"}
**Give one feedback focus per attempt rather than switching what the feedback is about every time.** Serial feedback that changed focus every trial was worse than blocked feedback on one aspect [@wulf2002principles].

*In LTF:* when `ResultView` lists several criteria below Silver, highlight one (the highest-weight required criterion) as "Work on this next" with its `reviewLink`, rather than presenting every weakness with equal weight.
:::

::: {.rule #SKL-024 grade="C"}
**Provide a no-help mode that the learner can choose, labeled in plain words.** Dependence on augmented feedback is the risk the guidance hypothesis identifies [@salmoni1984knowledge]; a learner who never practices without the page cannot learn to do without it. Grade C because the design response is inferred from the hypothesis rather than tested.

*In LTF:* a toggle in `FlyModePage` ("Fly from memory: hide the steps") recorded with the attempt. The label must say what it hides, not use a game term such as "hard mode".
:::

### Intrinsic feedback and the sim

Every attempt in the sim already gives the learner intrinsic feedback: the view out the window, the instruments, the sound of the engine. The point of reducing augmented feedback is to make the learner attend to that. Wulf and Shea's review also covers physical guidance, observation and dyad practice (two learners practicing together and discussing attempts), which they find more uniformly effective for complex tasks than many other manipulations [@wulf2002principles]. A short demonstration, or a replay of a good attempt, followed by the learner's own attempt, suits a complex skill.

::: {.rule #SKL-025 grade="B"}
**Show a demonstration of the maneuver before the learner's first attempt at a complex challenge.** Observational practice was among the more consistently effective manipulations for complex skills in Wulf and Shea's review [@wulf2002principles].

*In LTF:* lesson blocks already support `video`. Each manoeuvre challenge should link from `BriefTab` to a short clip of the maneuver flown in the sim, captured with the same aircraft variant and setup the challenge specifies.
:::

### Focus of attention

Wulf and Shea report that an external focus of attention, on the effect of a movement, beat an internal focus on the body movements themselves [@wulf2002principles]. The external-focus line of work grew into a large literature whose later meta-analyses were not verified for this book, so no effect size is given here. The direction is clear enough to shape instruction wording.

For a flight lesson the distinction is concrete. An internal-focus instruction names a body action: how far to move a hand, how hard to press a pedal. An external-focus instruction names the effect: where the nose sits against the horizon, what the needle does. External wording also has the practical merit of keeping the learner's eyes on the sim display, where the effect is visible, rather than on their hands.

::: {.rule #SKL-026 grade="B"}
**Word control instructions by their effect on the airplane or the display, not by the body movement.** An external focus on movement effects beat an internal focus on body movements in the studies Wulf and Shea review [@wulf2002principles]. Grade B: the direction is consistent, the effect size here unverified.

*In LTF:* `FlyPanel` steps and lesson prose should name a visible result, such as where the horizon sits against the glare shield (the pattern the first step of C2.1 already uses), and never a distance to move the yoke. Content review should flag body-movement wording.
:::

::: {.rule #SKL-027 grade="C"}
**Keep fly-mode instruction short enough that attention stays on the sim, not on the page.** Complex tasks under high load benefit from reducing load [@wulf2002principles], and an external focus means attention on the effect, which is in the sim. Every extra line in `FlyModePage` competes for the same attention.

*In LTF:* a `FlyPanel` step should be one action and its target in one sentence. Explanations belong in the lesson and in `BriefTab`, not in the steps.
:::

### Feedback tone

What feedback says about the learner matters as much as when it arrives. The human-error research covered in "Error as information" argues for describing conditions rather than people; Part XVII, Motivation and Gamification, covers the motivational literature on feedback that targets the self. Here one point is enough: feedback after a challenge should point at the next action, not at a verdict on ability. LTF's current result messages do this. "Not passed yet: a required criterion was not met. Review it and try again." names the cause and the next step; "Passed. Fly it again to push for a higher tier." points forward.

### What this means for Learn to Fly

Keep `ResultView`'s structure (heading message, tier, percentage, criterion rows, review links for Bronze or Not met), the `QuizBlock` result with an explanation, and the forward-pointing result copy. Keep the external-effect wording already present in challenge steps.

Change the feedback schedule over the course of a challenge's life. A first attempt gets the full criterion list. Later attempts should lead with one focus (SKL-023), and repeat attempts after two passes should be able to run as a set with a summary at the end (SKL-021, SKL-022). `HistoryTab` needs a per-criterion trend row to make that summary visible.

Build the no-help toggle in `FlyModePage` and record it with the attempt (SKL-024), and link a demonstration clip from `BriefTab` for each manoeuvre challenge (SKL-025). Add a content-review check for internal-focus wording in steps and lesson prose (SKL-026), and a length limit on `FlyPanel` steps (SKL-027). None of these needs a new component; each is a change to `FlyPanel`, `ResultView`, `HistoryTab` or the challenge schema.

## Difficulty, load and the challenge point

### What makes a skill complex

Wulf and Shea do not define complexity by a single measure [@wulf2002principles]. They judge a task complex if it generally cannot be mastered in a single session, has several degrees of freedom and tends to be ecologically valid, and simple if it has one degree of freedom, can be mastered in one session and looks artificial. Their thought experiment is a student driver: learning to drive might not benefit from practice in rush-hour traffic, though a simple laboratory skill might benefit from extra demands. Flying an airplane meets every criterion for complex. That alone means that much of the practice advice derived from simple tasks, "make it harder" and "withhold feedback" among it, cannot be applied to LTF's beginners without checking whether it holds for complex skills.

::: {.rule #SKL-028 grade="B"}
**Before importing a practice principle, check whether its evidence comes from simple or complex tasks, and treat simple-task results as untested for flying.** Several factors have opposite effects on simple and complex skills, and others matter mainly for complex ones [@wulf2002principles]. Grade B: a narrative review, many of its studies from one laboratory.

*In LTF:* when a lesson-design proposal in a pull request cites a learning principle, the review checklist in "Decision list and review checklist" asks which kind of task the evidence used.
:::

### The challenge point

Guadagnoli and Lee proposed a framework that reconciles the simple-task and complex-task findings by describing practice conditions in terms of two variables: the learner's skill level and the difficulty of the task [@guadagnoli2004challenge]. Their central claim is that learning depends on the information available from performance. Too little challenge gives too little information to learn from; too much overwhelms the learner. The best level of difficulty, the optimal challenge point, differs by skill level and moves as skill improves.

Secondary accounts give the framework's two kinds of difficulty, and these definitions could not be checked against the paper itself. Nominal task difficulty is the difficulty of the task independent of who performs it and where. Functional task difficulty is how challenging the task is for a particular person in particular conditions. The optimal challenge point is the functional difficulty at which a learner of a given skill level learns best. Predictions attributed to the framework include that the advantage of random over blocked practice is greatest for low-difficulty tasks, that low contextual interference suits beginners and higher interference suits skilled performers, and that frequent feedback is more useful for high-difficulty tasks while less frequent feedback is better for low-difficulty ones. If they hold, they reconcile Schmidt and Bjork's simple-task results [@schmidt1992new] with Wulf and Shea's complex-task results [@wulf2002principles].

The support is moderate and mostly indirect. A 2015 experiment that varied nominal and functional difficulty reported that both affected performance on tests of learning, and another 2015 paper described itself as supporting the framework. A 2018 visuomotor study reported that the effect of difficulty on mental workload, not nominal difficulty, affected motor learning, and that the framework applies only when some error is present. The common criticism is that difficulty is not explicitly defined, so functional difficulty cannot be measured directly, which makes the optimal point hard to locate and the framework hard to falsify.

::: {.rule #SKL-029 grade="B"}
**Give each challenge levels of difficulty, start every learner at the lowest and move up only after a pattern of success.** The challenge point framework holds that each learner has a band of productive difficulty that moves with skill [@guadagnoli2004challenge], and adaptive increases outperformed fixed ones in a meta-analysis of transfer studies [@wickens2013effectiveness]. Grade B: the framework is hard to falsify, but the adaptive-increase finding is meta-analytic.

*In LTF:* challenge setup already fixes a `weatherPreset` (for example `WX_CALM`) and a `difficulty` rating shown as `DifficultyDots`. Allow a challenge to define two or three setup levels, and choose the level in `BriefTab` from the learner's previous results on that challenge.
:::

Because functional difficulty cannot be measured directly [@guadagnoli2004challenge], any estimate of where a learner sits is a heuristic to be tested on data. If LTF adopts an adaptive rule (for example, two consecutive Silver results raise the level), the level belongs in each attempt record, so that the rule itself can be evaluated against later unaided results in the way SKL-014 requires.

### Adaptive, not fixed, increases

Wickens, Hutchins, Carolan and Cumming meta-analyzed 37 transfer studies of two strategies for making a hard task easier to learn: part-task training and increasing-difficulty training [@wickens2013effectiveness]. The background is cognitive load theory: strategies that reduce the intrinsic load of the task during training free resources for learning. Both strategies had offered only mixed success, and the analysis explains when each works. They used two effect measures: a transfer ratio (treatment transfer performance over control transfer performance) and Hedges' g (the standardized difference between treatment and control means).

For increasing difficulty the result is direct. Training in which difficulty rose was successful when the increases were implemented adaptively, in response to the learner's performance, but not when difficulty rose in fixed steps. For both strategies, experienced learners benefited less, or suffered more, which the authors say is consistent with cognitive load theory. The effect sizes are not in the abstract that was read, so none is quoted here. The studies were mostly laboratory and simulated tasks, and a pattern such as "adaptive beats fixed" could also arise because adaptive schedules keep each learner near the right challenge, as the challenge point framework would predict.

::: {.rule #SKL-030 grade="A"}
**Raise difficulty in response to each learner's results, never on a fixed schedule by lesson number.** Increasing-difficulty training transferred when increases were adaptive and failed when they came in fixed steps [@wickens2013effectiveness], which is also what the challenge point framework predicts [@guadagnoli2004challenge]. Grade A: a meta-analysis of 37 studies with a consistent account.

*In LTF:* the curriculum sets difficulty by position in the course. Keep the order of topics fixed, which is a content decision, but make the conditions within a challenge adaptive (SKL-029).
:::

::: {.rule #SKL-031 grade="B"}
**Offer learners with prior experience a diagnostic challenge or a skip-ahead, and do not force them through supports meant for novices.** Experienced learners benefited less or suffered more from both load-reducing strategies [@wickens2013effectiveness]. The pattern matches the expertise-reversal literature on cognitive load; see Part XIV, The Science of Learning: Load and Memory.

*In LTF:* the curriculum is open, so skipping is possible, but nothing invites it. A module card in `CurriculumMap` could offer "Already know this? Try the module challenge first", linking to the combined challenge, with a pass marking the lessons as reviewable rather than required.
:::

### Load for beginners

The practical translation of the load account for a complete beginner is to reduce load first and add it later [@wulf2002principles]. Reduce load by limiting what the learner must control at once, by flying in steady conditions, and by giving frequent specific feedback. Add load by adding variation, removing prompts and introducing disturbances once the learner is stable. Lintern and colleagues found interactions consistent with this in their landing study: for some conditions transfer benefited from training without crosswind [@lintern1990display]. The interactions in that fractional factorial design deserve caution, since such designs have limited power for high-order effects, but they point the same way.

::: {.rule #SKL-032 grade="B"}
**Start each new maneuver in calm, steady conditions with one thing to control, and add disturbances only after the learner is stable.** High-load complex tasks benefit from conditions that reduce load [@wulf2002principles], and in one landing study some conditions transferred better after training without crosswind [@lintern1990display].

*In LTF:* the first challenge for each new maneuver should use the calmest `weatherPreset` available and the sim's training assistance, and the challenge description should say which disturbance a later version adds.
:::

::: {.rule #SKL-033 grade="C"}
**When a learner fails repeatedly, show a route to an easier version, not a failure screen.** Too much challenge overwhelms the learner and gives little usable information [@guadagnoli2004challenge]. Repeated failure at the same level is a signal that the challenge point is above the learner.

*In LTF:* `ResultView` shows "Not passed yet" with review links. After two failed attempts at the same challenge, add an option to fly the lower setup level, or link to the single-skill challenge that the combined challenge depends on.
:::

### Difficulty is not decoration

A timer, a score multiplier or a streak can make a challenge feel harder without changing the processing the learner needs. The useful difficulty, in the sense Schmidt and Bjork describe, is difficulty that makes the learner retrieve and reconstruct the response [@schmidt1992new]. The challenge levels LTF can control are the ones that change the skill: conditions in the sim, tolerance in the criteria, and how much of the procedure the page shows. The tiers in each criterion (Gold, Silver, Bronze) already work as nested tolerance bands, and a learner aiming for Gold is in effect choosing a harder version of the same task.

::: {.rule #SKL-034 grade="C"}
**Make difficulty levels change the skill demanded (conditions, tolerance, prompts), never only a timer or a score.** Only difficulty that engages the processing the real task needs supports learning [@schmidt1992new; @guadagnoli2004challenge].

*In LTF:* the optional `Stopwatch` in `FlyPanel` is labeled "Timer (optional)" and serves the random events and the learner's own timing. Keep it optional and never use elapsed time as a scored criterion unless the real task has a time standard from the aircraft's documents.
:::

### What this means for Learn to Fly

Keep the tiered criteria, which already give the learner three tolerance bands to aim for within one setup, and keep the calm presets in early challenges. Keep `DifficultyDots` as a content-level rating, since it helps the learner choose, but do not mistake it for adaptation.

Change the challenge model so that one challenge can hold two or three verified setup levels (SKL-029), each a variation in conditions rather than a different maneuver. `BriefTab` picks the level from the learner's history and states it under "Sim setup" with a plain reason ("You passed this twice in calm air, so this attempt adds a light wind"), with an override. Log the level in the attempt so that the rule can be checked against later results.

Build two routes that do not exist: a skip-ahead diagnostic for experienced learners on each `CurriculumMap` module card (SKL-031), and a step-down route in `ResultView` after repeated failure (SKL-033). Both are links between existing pages, not new pages.

## Breaking the task apart

### Three ways to make a part

Every lesson in LTF is a piece of flying, and every challenge picks out one piece. LTF is a part-task trainer by construction, so the evidence on part-task training applies to its whole structure. Wightman and Lintern reviewed whether teaching a complex task in pieces before the whole improves learning efficiency or reduces cost, with a focus on tracking skills for manual control, the continuous control found in flying [@wightman1985parttask]. Part-task training, in the review's definition, is practice on some set of components of the whole task as a prelude to performance of the whole task. The review emphasized transfer of training and the methods for assessing it, described three procedures and summarized ways of reintegrating the parts. The full text was not read for this book; what follows is from its abstract and from later accounts that use its terms.

The three procedures give a working vocabulary.

- **Segmentation** divides a task along spatial or temporal lines, so that the parts are practiced one after another and then chained.
- **Fractionation** separates components that are normally performed at the same time, such as control in two axes, and trains them separately.
- **Simplification** changes the task to make it easier while keeping it whole, for instance by slowing its dynamics or reducing what must be tracked.

The reasoning for part-task training is that a learner can concentrate on one component, and that devices for components can be cheaper than the whole. A later review cited in the notes says that in a majority of cases part training was found less efficient than whole-task training, and another account adds that the recommendation to use part-task training applies to segmented tasks, whose parts are performed in sequence, and not to fractionated tasks, whose components are performed together.

### The meta-analytic test

Wickens and colleagues' meta-analysis of 37 transfer studies tested the distinction [@wickens2013effectiveness]. Part-task training generally produced negative transfer when the parts were performed concurrently in the whole transfer task, but not when the parts were performed in sequence. That is the segmentation and fractionation distinction confirmed. A second result names the remedy: variable-priority training of the whole task, in which the learner practices the whole task while the emphasis shifts between components, was a successful technique. The authors' conclusion is that part-task training can succeed if the integrated parts are varied in the priority they are given to the learner.

::: {.rule #SKL-035 grade="A"}
**Segment procedures by time and chain them; do not fractionate components the learner must perform together.** Part-task training transferred when parts were performed in sequence in the whole task and produced negative transfer when they were performed concurrently [@wickens2013effectiveness; @wightman1985parttask]. Grade A: a meta-analysis of 37 studies agreeing with an earlier review.

*In LTF:* a takeoff lesson can teach its phases in order as separate sections in `SectionNav`, and a challenge can then chain them. Lessons that isolate one axis of control are fractionation and fall under SKL-036.
:::

::: {.rule #SKL-036 grade="A"}
**After any lesson or widget that isolates one concurrent component, follow it with whole-task practice in which the emphasis moves between components.** Variable-priority training of the whole task succeeded where separate drills of concurrent parts failed [@wickens2013effectiveness].

*In LTF:* where a module teaches holding altitude and holding heading, the challenge should ask for both at once with a stated emphasis that changes across attempts ("this time, altitude first"), in `BriefTab` and at the top of `FlyPanel`, rather than two challenges that never meet.
:::

### Widgets are part-task trainers

The thirteen widgets under `src/features/widgets/` are part-task trainers for reading. The airspeed indicator widget isolates one instrument; `g1000-pfd` isolates the primary flight display; `vor-cdi`, `turn-coordinator` and `angle-of-attack` isolate one quantity each; `checklist-runner` isolates one list. That is simplification and fractionation of the instrument scan, which in the sim is a concurrent task: the learner reads several instruments while controlling the airplane. The meta-analytic result says that reading an instrument well in isolation will not by itself produce a good scan. Gopher and colleagues' study, covered in "What a simulator transfers", shows the other side: a small practice task can train a component such as attention allocation when it is built from an analysis of the whole task [@gopher1994transfer].

::: {.rule #SKL-037 grade="B"}
**Follow every single-instrument widget with practice that uses that instrument inside the whole scan, in the sim.** Isolated practice of concurrent components transfers poorly unless it is reintegrated [@wickens2013effectiveness; @wightman1985parttask]. Grade B: the evidence is about control tasks; reading instruments is an extension.

*In LTF:* a lesson that uses the airspeed indicator widget should end with a "Fly it" challenge in which reading that instrument is one of the criteria among others, and the challenge's `debriefQuestions` should ask where the learner looked.
:::

::: {.rule #SKL-038 grade="C"}
**Build at least one widget mode that trains moving attention between instruments, not reading one.** Component practice transfers when its demands match the whole task's [@gopher1994transfer], and the scan is a whole-task demand that single-instrument widgets do not train.

*In LTF:* `g1000-pfd` already draws several readouts together. A "Quiz me" mode that changes one readout at a time and asks which one changed would practice the scan as a component, with a short strategy instruction first.
:::

### Show parts and wholes separately

A learner who has passed every single-skill challenge in a module may conclude they can fly the whole. The part-task evidence says they may not, and the dashboard can either reinforce or correct the impression. The same point applies to experienced learners: the meta-analysis found they benefited less, or suffered more, from part-task training [@wickens2013effectiveness], so a learner coming from another simulator should be able to go straight to the whole task.

::: {.rule #SKL-039 grade="C"}
**Report part-skill results and whole-task results separately, so that passing the parts never reads as mastery of the whole.** Parts passed separately do not guarantee the concurrent whole [@wickens2013effectiveness].

*In LTF:* `ModulePage` and `DashboardPage` count challenges passed per module. Mark combined challenges (C2.4, C4.7, C8.1, C8.2) as "put it together" challenges, shown in their own row, and make module completion depend on them.
:::

::: {.rule #SKL-040 grade="C"}
**Use the sim's own settings for simplification, and tell the learner which simplification is on.** Simplification keeps the task whole while making it easier [@wightman1985parttask], which in the sim means steady weather, reduced traffic and training assistance, and these must be removed later for the skill to be tested in its real form (SKL-020).

*In LTF:* the challenge `setup` already names `assistance`, `aiTraffic`, `atc` and `crashDamage`. Show these in `BriefTab` under "Sim setup" as simplifications with a short reason, so the learner knows what will change in later challenges.
:::

### What this means for Learn to Fly

Keep the sectioned lesson structure and the sequence of single-skill then combined challenges; both are segmentation done well. Keep the widgets, which are the most distinctive part of the product, and keep their "Simplified model" badge in `WidgetFrame`, which tells the learner a simplification is in use.

Change two things. Combined challenges should carry more weight in how progress is reported (SKL-039): at present a module's challenge count treats C2.4 "The box" the same as C2.1 "Straight and level". And any lesson pair that fractionates control (one axis, then the other) needs a challenge that combines them with shifting emphasis (SKL-036); content review should look for fractionated pairs across `content/lessons/`.

Build a scan mode for the multi-instrument widgets (SKL-038) and connect each single-instrument widget to a challenge criterion that uses it in flight (SKL-037). Surface the simplifications already present in challenge setup (SKL-040); they are stored in YAML and invisible to the learner in the form that explains them.

## What a simulator transfers

### The meta-analytic case

The best-known quantitative summary of whether flight simulators improve training is Hays, Jacobs, Prince and Salas's meta-analysis [@hays1992flight]. As its abstract is summarized, using simulators together with aircraft training consistently improved training for jet pilots compared with training in the aircraft alone. Performance-paced training, in which trainees move on when they reach a standard, was on average more effective than lock-step training, in which everyone moves on at the same time. Motion cuing added little to the training environments for jets. For helicopters the number of experiments was too small for a conclusion.

The analysis followed a 1990 technical report by the same team, whose abstract says its search located 247 articles and reports, of which 26 had enough information for statistical meta-analysis, 19 on jet pilot training and 7 on helicopter training, and that outcomes appeared to depend on the type of task and on how much and what kind of training was given. Whether the 1992 article reuses exactly those counts could not be confirmed, so they belong to the 1990 report. Neither full text was accessible; the findings come from abstracts and secondary summaries.

The limits are large. Only a small part of the located literature could be used. The studies are mostly military, mostly with expensive devices, mostly with trainees already in a flight program. The comparison is simulator plus aircraft against aircraft alone, which says nothing about whether the simulator hours were worth their cost. And none of it concerns complete beginners on a consumer PC.

::: {.rule #SKL-041 grade="B"}
**Advance learners on a demonstrated standard, not on pages completed.** Performance-paced simulator training was more effective on average than lock-step training in the flight-simulator meta-analysis [@hays1992flight]. Grade B: a meta-analysis of a small, mostly military set of studies, read through its abstract.

*In LTF:* lessons are marked complete by the learner with "Mark lesson complete". Keep that for lessons, but make a module's "Done" state on `CurriculumMap` depend on passing its combined challenge, and use the existing but unused `locked` state of `LessonPath` and `Card` only for the final checks in Module 8.
:::

::: {.rule #SKL-042 grade="C"}
**Present simulator practice as a complement to instruction in an aircraft, never as a replacement for it, and recommend an instructor for real flight.** The evidence supports simulators used alongside aircraft training, not instead of it [@hays1992flight; @salas1998rational].

*In LTF:* the simulation-only line at the end of every lesson ("For simulation use only. Learn to Fly is not flight instruction...") and the `DashboardPage` badge note already say this. Keep both wordings unchanged in substance.
:::

### A low-cost PC trainer, measured

The closest evidence to LTF's setting is the FAA's study of a personal-computer aviation training device (PCATD) [@taylor1997transfer]. A commercially available PC flight simulation program, modified for the training aircraft's performance, ran on a 60 MHz Pentium with a 20-inch monitor showing six instruments, a hood and commercial flight controls, for under $10,000 in total. 144 students in instrument courses at the University of Illinois Institute of Aviation took part (117 in a basic course and 27 in an advanced one), aged 18 to 30 with private pilot training. One group trained on the device, the other only in the airplane, and both had to show proficiency in the airplane on each lesson before moving on, so transfer was measured as the trials and time each group needed in the airplane.

The report's abstract summarizes the outcome. Savings in airplane time varied from 15 percent to over 40 percent for certain exercises, but there were also cases where savings were essentially zero, or even decrements as high as 25 percent. In general, transfer was positive and substantial when new tasks were introduced. Review of tasks already learned to proficiency mostly did not transfer: no single instrument procedure reviewed in the basic course showed statistically significant transfer. In the advanced course, review of a navigation approach after some time had passed saved about one fifth of airplane trials, suggesting the device helps when a task is refreshed after a gap.

The overall numbers carry a lesson about efficiency. The PCATD group needed a mean of 47.4 hours in the airplane to finish the rating against 51.3 for the airplane group, about 4 hours saved, but the device time that produced the saving exceeded 12.5 hours and 14 hours in the two courses. The report calls this inefficient and estimates that targeting only the tasks with good transfer could have given the same saving with about 6.75 and 4.5 device hours. Its own limits: one program, unstable data in one term because of small numbers, transfer measures that were insensitive in some lessons, and instrument training for private pilots, not basic control for beginners.

::: {.rule #SKL-043 grade="B"}
**Place each challenge immediately after the lesson that introduces its maneuver, because simulator practice pays most on new tasks.** In the PCATD study transfer was positive and substantial when new tasks were introduced and mostly absent for review of tasks already at proficiency [@taylor1997transfer]. Grade B: one well-run quasi-experiment, in instrument training.

*In LTF:* lesson pages end with "Fly it" challenge cards. Keep them at the end of the introducing lesson, and make the first challenge card the primary next action after "Mark lesson complete".
:::

::: {.rule #SKL-044 grade="B"}
**Keep review practice short and tie it to a gap in time, not to repetition of something just mastered.** Review of tasks at proficiency gave little transfer, but review after an interval saved a fifth of airplane trials in one course [@taylor1997transfer].

*In LTF:* when a learner returns after a gap, the `DashboardPage` Continue card could offer one short review challenge from an earlier module before the next new item, rather than suggesting the learner repeat a challenge passed yesterday.
:::

::: {.rule #SKL-045 grade="B"}
**Never state an hours saving, cost saving or percentage benefit for LTF.** The PC-trainer study found savings for some tasks, none for others and losses for a few [@taylor1997transfer], and the meta-analysis concerns military trainees on expensive devices [@hays1992flight]. No study supports a number for LTF's learners.

*In LTF:* `LandingPage`, `AboutPage` and the "Questions" section must say only that research on PC-based trainers found benefits for some tasks, and must recommend instruction for real flight.
:::

### Transfer effectiveness and diminishing returns

Roscoe proposed judging a training device by what it saves, accounting for time spent in it [@roscoe1971incremental]. Percent transfer, the conventional measure, ignores how much practice the device took. The transfer effectiveness ratio (TER), as the PCATD report defines it, is the trials or time saved in the airplane by the device group, compared with the airplane-only group, as a function of the trials or time in the device [@taylor1997transfer]. Roscoe's incremental version asks what each added block of device time saves, and postulates that the curve is negatively decelerated: each extra hour of pretraining saves less than the one before. A companion study by Povenmire and Roscoe gave groups of student pilots 0, 3, 7 or 11 hours in a ground trainer along with their flight lessons, and a summary reports that average flight times to the private pilot standard fit the decelerating curve. The PCATD study reported TERs from about 0.20 to 0.50 for a run of basic-course lessons, and rental costs of $69 per hour for the airplane against $5 for the device, which is the comparison the method exists to support.

Roscoe's claim that the curve applies to all educational experience is a postulate. Two limits follow from the definition itself: a device can show a high TER at small usage and little total value, and a TER measured against a fixed criterion says nothing about retention or about which part of the skill transferred.

::: {.rule #SKL-046 grade="B"}
**Do not reward grinding one challenge: after consistent success, say so and offer the next skill.** Transfer from added device practice diminishes with each increment [@roscoe1971incremental], and in the PCATD study much device time went to tasks that transferred little [@taylor1997transfer].

*In LTF:* the result message "Passed. Fly it again to push for a higher tier." invites repetition indefinitely. After a learner has reached Silver or Gold on every required criterion twice, `ResultView` should lead with the next challenge ("You have this. Next: ...") and offer the repeat as secondary.
:::

A plot of each skill's results against attempts makes the flattening visible and gives the learner a reason to move on that a single tier badge does not [@roscoe1971incremental]. The per-criterion row proposed for `HistoryTab` (SKL-022) can carry it, attempts on one axis and tier on the other, with the flat part labeled.

### A game that trained attention

Gopher, Weil and Bareket tested whether skills from a complex computer game carried over to real flight [@gopher1994transfer]. Israeli Air Force cadets who received 10 hours of training on the game flew better in test flights than a matched group with no game experience. The game was chosen because a task analysis, using models of human information processing, argued it was relevant to flight. Two training strategies were compared: one focused on the specific skills of the game, the other on improving trainees' general ability to cope with high processing and response demands and on teaching better strategies of attention control. Both game groups performed significantly better than the control group in later test flights, and the game was incorporated into the Air Force's regular program. Sample and effect sizes were not available beyond "significantly better".

The caution is generalization. The result shows that a purpose-built game, chosen by task analysis and paired with explicit strategy instruction, helped a selected and motivated population. It does not show that any game, or any flight-simulator game, helps people fly.

::: {.rule #SKL-047 grade="B"}
**Build practice exercises from an analysis of what flying demands, pair them with explicit strategy instruction, and say what each one trains.** A game transferred to flight when its demands were matched to the flight task by analysis and paired with attention-strategy instruction [@gopher1994transfer]. Grade B: a controlled field study in one selected population.

*In LTF:* each widget's "Quiz me" mode should open with one sentence of strategy ("Check the instruments in this order, then decide") and its `WidgetFrame` title or description should name the skill it trains, not claim to be "like flying".
:::

::: myth
**"Game mechanics make flight practice transfer."** The game-to-flight study is often cited as if any game helps pilots [@gopher1994transfer]. The benefit followed from a match between game demands and flight demands established by task analysis, plus strategy instruction, in a military population. Points, streaks and leaderboards were not the active ingredient. See Part XVII, Motivation and Gamification, for the evidence on game elements themselves.
:::

### Simulation is not training

Salas, Bowers and Rhodenizer's position paper argues that the simulation community holds mistaken or unsupported assumptions that stop it using findings from the training sciences, concerning reliance on high-fidelity simulation and poor use of simulation to teach complex skills [@salas1998rational]. Its title states the thesis: it is not how much you have but how you use it. Only the abstract was read. Secondary accounts attribute to the authors the ideas that "more is better" is an invalid assumption and that instructional design (practice, feedback, scenarios) must accompany the simulator, but those accounts are weak and are treated as leads. The claim the abstract does support, that the value of a simulator lies in how it is used, agrees with every transfer result above.

::: {.rule #SKL-048 grade="C"}
**Wrap every sim session in instruction: an objective and briefing before, specific feedback after, and a plan for the next attempt.** A simulator's value depends on how it is used [@salas1998rational], and transfer in the PC-trainer study came from structured, proficiency-based lessons [@taylor1997transfer].

*In LTF:* the Brief, Fly, Debrief tabs of `ChallengePage` are exactly this wrapper. Keep the order, keep the Debrief mandatory before a result is recorded, and add the next-attempt plan to `ResultView`.
:::

### What this means for Learn to Fly

Keep the Brief, Fly, Debrief structure, the placement of challenges at the end of the lessons that introduce them, and the honest simulation-only and "not a pilot certificate" copy. These match the evidence better than most commercial flight-training products.

Change the default after success. LTF currently invites another attempt after every pass. The diminishing-returns evidence says that after consistent success the next skill is the better use of the learner's time (SKL-046). Change progress so that a module is complete when its combined challenge is passed, not when its pages are ticked (SKL-041).

Build the honest version of the evidence into the product's public copy: a short paragraph on `AboutPage` saying what research on simulator and PC-based training has found (benefit alongside real instruction, mostly for new tasks, none for some) with no numbers attached (SKL-045). For LTF's own future evaluation, the method to copy is Roscoe's: compare learners who used LTF with learners who did not, on instructional time to a real milestone. That is a research plan, not a claim.

## Fidelity and the teaching display

### Why "fidelity" misleads

The intuition that a more realistic simulator or diagram teaches better is strong and mostly unsupported. Hamstra, Brydges, Hatala, Zendejas and Cook, drawing on their systematic review of simulation-based health professions education, argue that fidelity is a misleading organizing concept [@hamstra2014reconsidering]. It is inconsistently defined and applied; the same simulator can look high or low fidelity depending on which features are emphasized; requirements vary by task; and several empirical studies suggest fidelity is unrelated to educational effectiveness. The article is a perspective from medicine, read through its publisher-side description, but its examples come from the same literature that includes flight simulators.

They make three recommendations. Stop using the single word fidelity, and use separate terms for physical resemblance and for functional task alignment. Shift emphasis from physical resemblance to functional correspondence: whether the simulator reproduces the information and the actions the task depends on. And focus design on what directly shapes learning: transfer, learner engagement (how actively involved learners are) and suspension of disbelief (how willingly they accept the scenario).

A related randomized trial, found by search and not part of the perspective, allocated 135 fourth-year medical students to a high-fidelity group (67) or a low-fidelity group (68) in an advanced life support course. Video-rated performance was similar, knowledge improved in both without a difference, and the high-fidelity group rated its own performance too highly. It is one center with a modest sample, but the overconfidence result is worth noting: realism can make people feel more prepared than they are.

A weakness of the functional-correspondence idea is that it can be hard to specify without a task analysis, the kind the PCATD report describes when it matches device features to the learning requirements of each task [@taylor1997transfer].

::: {.rule #SKL-049 grade="B"}
**For every widget and challenge, record separately what it reproduces physically and what it reproduces functionally, and design for the functional match first.** Physical resemblance is weakly tied to learning; correspondence of information and action is what the task depends on [@hamstra2014reconsidering; @salas1998rational]. Grade B: a perspective informed by a systematic review, consistent with the aviation transfer studies.

*In LTF:* add two short fields to each widget's registry entry in `src/features/widgets/registry.ts` or its content description: "looks like" and "trains the decision to". Review new widgets against the second.
:::

::: {.rule #SKL-050 grade="C"}
**Do not spend design effort on photorealistic art or replica cockpit chrome that serves no learning goal.** Realism beyond what the task needs does not reliably improve learning [@hamstra2014reconsidering; @salas1998rational].

*In LTF:* the hand-drawn SVG widgets with `fill-bezel`, `fill-sky` and `fill-ground` are at the right level: recognizable, simplified, labeled "Simplified model". A proposal for a photographic panel needs a stated learning reason.
:::

::: {.rule #SKL-051 grade="C"}
**Rest progress claims on checks, not on how real the practice felt.** In the medical trial the high-fidelity group overrated its own performance; realism can inflate confidence without improving skill [@hamstra2014reconsidering]. LTF's challenges are self-scored, which makes the risk sharper.

*In LTF:* `DebriefForm` asks the learner to score each criterion. Add, beside each tiered criterion, a one-line "how to check this" (where in the sim or on which instrument to look), so that self-scoring refers to an observation rather than a feeling.
:::

### Simplified displays can train better

Lintern, Roscoe and Sivier gave the most direct evidence about training displays for beginners [@lintern1990display]. 64 flight-naive men trained in a fractional factorial quasi-transfer design that varied four display factors, one control-response factor and one environmental factor, with 12 more as controls, and all were tested in a criterion condition with a conventional contact display and normal control dynamics. Transfer was better after training with pictorial displays than with symbolic displays, and better with normal rather than reduced bank control order. Interactions showed that in some conditions transfer benefited from training with predictive augmentation and from training without crosswind.

A later study from the same group, known only from a search summary, reports that beginners trained with a low-detail scene transferred better than those trained with a moderate-detail scene, and that augmented guidance helped transfer with the low-detail scene but degraded it with the moderate one. Treat that as secondary. The 1990 experiment is old, used one simulator, and its interactions are underpowered, so the safe conclusions are the main effects and the general principle: a training display need not copy the real one, and added guidance can help or hurt depending on what it is combined with.

::: {.rule #SKL-052 grade="B"}
**Use pictorial rather than symbolic displays when a beginner first meets a flight concept.** Beginners trained on pictorial displays transferred better than those trained on symbolic ones [@lintern1990display]. Grade B: one quasi-transfer experiment with flight-naive participants.

*In LTF:* widgets such as `traffic-pattern`, `airspace-profile` and `control-surfaces` should show the situation as a picture of the airplane and its surroundings, with the abstract symbol introduced next to the picture, not instead of it.
:::

::: {.rule #SKL-053 grade="B"}
**Use augmented cues (a target band, a predicted path) in early practice and plan their removal before the final check.** Predictive augmentation helped transfer in some training conditions [@lintern1990display], and transfer is measured without augmentation in the criterion condition. The interactions mean augmentation is not always helpful, so remove it on a schedule and check unaided results.

*In LTF:* the airspeed indicator widget's colored arcs and any target band drawn in a widget are augmentation. Widgets in "Quiz me" mode should be able to hide target bands, and lessons late in a module should use the widget without them.
:::

### Whose motion does the display show

Roscoe's 1968 review of airborne displays is usually cited for two principles of display design [@roscoe1968airborne]. The paper itself could not be read; the principles come from later sources that cite it, and their attribution is unsettled. Pictorial realism says a display should resemble what it represents: in the familiar attitude display the horizon line is drawn as the pilot sees the real horizon, the moving-horizon or inside-out format. The principle of the moving part says the element that moves on the display should be the one that moves in the user's mental model: "If it moves in the real world (or the operator's mental model), it should move in the display", in a teaching summary's wording. Applied to attitude, it favors the outside-in or moving-aircraft format, where an aircraft symbol moves against a fixed horizon. Some sources credit the moving-part principle to Johnson and Roscoe (1972) rather than to the 1968 paper.

The two principles recommend different designs for the same instrument. In the moving-horizon format, the horizon rotates opposite to the roll the pilot commands, which is consistent with the view through the window but not with the pilot's sense of their own airplane moving. Search results link roll-reversal errors to this ambiguity. The empirical status is mixed: one study found the moving-part principle more effective than pictorial realism, a recent study confirms the superiority of the moving-aircraft format, and other work, including extended-horizon displays, has produced mixed results. Two accepted principles, two designs, and evidence that does not settle it: principle-based display design must be checked with users.

::: {.rule #SKL-054 grade="C"}
**Make every animated instrument widget move the same element, in the same direction, as the instrument the learner will see in the sim.** A beginner who learns a motion in a widget must not have to unlearn it in the sim; where pictorial realism and the moving-part principle conflict, the sim's own display is the tie-breaker [@roscoe1968airborne]. Grade C: the principles are expert consensus with mixed evidence, and the tie-break is a transfer argument.

*In LTF:* the attitude display in `g1000-pfd` draws `fill-sky` over `fill-ground`. Its motion convention must match the sim's G1000 display, verified in the sim, and any widget that uses a different convention to explain a point (for example, an outside view of the airplane rolling) must say so in its caption.
:::

Because two sound principles can disagree about the same instrument [@roscoe1968airborne], motion direction has to be an explicit, checked property of every widget rather than an assumption. The acceptance question is short: which element moves, which way, and against what reference. It belongs in widget review on `/dev/widgets`, with the sim as the reference.

Pictorial realism helps the first encounter with an instrument [@roscoe1968airborne; @lintern1990display], and simplified diagrams are good teaching displays afterward, provided the learner knows what was simplified. The `WidgetFrame` "Simplified model" badge does half of that job; a one-line statement of what is simplified, added to the "Describe this diagram" `details`, would do the rest.

### Engagement and suspension of disbelief

Hamstra and colleagues name engagement and suspension of disbelief as two of the three concepts that directly shape learning [@hamstra2014reconsidering]. For a self-paced web page beside a simulator, a short, plausible scenario that sets the learner in a situation draws more engagement than an abstract exercise, and a mismatch between what the page says and what the sim shows breaks disbelief at once. The sim provides the immersion; the page's job is not to puncture it.

::: {.rule #SKL-055 grade="C"}
**Open challenges with a short, plausible scenario, and never let the page contradict what the sim shows.** Engagement and suspension of disbelief shape learning more directly than physical resemblance [@hamstra2014reconsidering]. A briefing that names a control the sim labels differently breaks both.

*In LTF:* the challenge `goal` field can carry a one-sentence scenario. Every control name and display label in `BriefTab` and `FlyPanel` must match the sim's exact wording, checked during sim verification.
:::

### What this means for Learn to Fly

Keep the widget style: hand-drawn, recognizable, simplified and labeled as such. It is both distinctive and consistent with the evidence that functional correspondence matters more than resemblance (SKL-049, SKL-050). Keep the fixed instrument tokens (`instrument`, `arc-*`, `bezel`, `sky`, `ground`) separate from page UI tokens, which keeps the teaching display recognizable in both Day and Night themes.

Change the self-scoring in `DebriefForm` so that each criterion names its check (SKL-051). The overconfidence result from medical simulation is a direct warning for a product that asks learners to grade themselves.

Build the motion-direction check into widget review (SKL-054), a "hide target band" option for widgets in quiz mode (SKL-053), and a "looks like / trains" record for each widget (SKL-049). These are review and content tasks more than engineering tasks, and they protect the most distinctive part of the product from the one failure that would make it harmful: a widget that teaches a motion the sim contradicts.

## Checklists and flight-deck documents

### The checklist as a system

Degani and Wiener open their NASA report by observing that the aircraft checklist, "long regarded as the foundation of pilot standardization and cockpit safety," had "escaped the scrutiny of the human factors profession," even though improper use or non-use is often cited as a probable or contributing cause of accidents [@degani1990checklists]. Their central move is to widen the frame. The checklist is not only a memory aid but "a generator and coordinator of many cockpit tasks" [@degani1990checklists, 2], and its design and use are shaped by the manufacturer's philosophy, the regulator, airline culture, schedule pressure and the pilot. The printed card, they write, turned out to be "only the outer shell of the problem". A 1943 bomber checklist reproduced in the report is described as very similar in concept and design to a modern airliner checklist, with little rethinking in between.

The method was mixed: interviews with line pilots from seven major U.S. carriers, incident and accident reports, interviews with officials and manufacturers, and a jumpseat field study at one carrier covering 42 crews, 72 flights and about 140 flight hours. It is not an experiment, the observed sample was one carrier and two aircraft types, and the authors call their 16 guidelines "not specifications" that may conflict with each other. Most checklist formats, they note, follow three steps: read or hear the item, accomplish it (verify or execute), and respond with the outcome.

Several of the guidelines transfer directly to a web page used beside a simulator. In the report's numbering: avoid using the checklist to resolve discipline problems (1); standardize the names of controls and displays (3); the response should state the desired status or value, not just "checked" or "set" (4); touching the controls while running the checklist is recommended (5); the completion call should be the last item (6); a long checklist should be subdivided into shorter chunks tied to systems and functions (7); items should follow the geographical layout of the cockpit, with a pictorial flow for training (8); the most critical items should come as close to the beginning as possible so they are done before an interruption, and this takes precedence over (8) and (9) where they conflict (10); critical items may be duplicated between task checklists (11); and checklists should not be tightly coupled to other tasks, with buffers for recovery and a way to "take up the slack" (12).

::: {.rule #SKL-056 grade="C"}
**State the target state for every checklist item; never let a bare tick stand in for the check.** Responses should portray the desired status or value, not "checked" or "set" [@degani1990checklists]. Grade C: a proposed guideline from field observation and expert synthesis.

*In LTF:* `ChecklistRunner` already renders each item as `item` and `action` joined by a dotted leader, the action in mono. Keep the format, and reject content in `content/checklists.yaml` whose `action` is a generic word such as "checked" or "set".
:::

::: {.rule #SKL-057 grade="C"}
**Subdivide any checklist longer than a short screen into named chunks tied to a system or task, each ending in an explicit completion line.** Long lists should be chunked by system and function, and the completion call should be the last item [@degani1990checklists].

*In LTF:* the longest list in `content/checklists.yaml` has 15 items. Allow `ChecklistRunner` to render sub-headings within a list, with a "Section complete" line after each, alongside the existing "Checklist complete" message.
:::

::: {.rule #SKL-058 grade="C"}
**Put the most consequential items first, even when that breaks a tidy grouping.** Learners, like crews, are interrupted; critical items near the start get done before the interruption, and this guideline outranks geographic order [@degani1990checklists].

*In LTF:* content authors should flag the critical items of each checklist, and review should check that they come first within their chunk. The item content itself comes from the aircraft's documents.
:::

::: {.rule #SKL-059 grade="C"}
**Order checklist items by where the learner looks in the sim, and use the panel layout as the diagram in training.** Items should follow the geographic layout of the cockpit, with a pictorial flow for training [@degani1990checklists], except where SKL-058 puts critical items first.

*In LTF:* a lesson that introduces a checklist can pair `ChecklistRunner` with a panel diagram that numbers each item's location, so the learner sees the flow before running it.
:::

::: {.rule #SKL-060 grade="C"}
**Use one name for each control and display across lessons, challenges, checklists and the glossary.** Standardized names are among the most transferable guidelines [@degani1990checklists].

*In LTF:* `content/glossary.yaml` is the place to fix the canonical name. `content:validate` could warn when a checklist `item` uses a control name that is not a glossary term or alias.
:::

::: {.rule #SKL-061 grade="C"}
**Give every procedure a visible "resume here" point and a way to recover from falling behind.** Checklists should not be tightly coupled to other tasks, and should provide buffers and a way to take up the slack [@degani1990checklists].

*In LTF:* `ChecklistRunner` highlights the current item (`aria-current="step"`, accent tint) and Backspace unticks the last one. Keep both. `FlyPanel` steps have checkboxes but no current-step highlight; add one, so a learner who looks back at the screen finds their place at once.
:::

### Read-do and do-confirm

Gawande's trade book argues that modern work has become too complex for memory and individual expertise alone, and that a good checklist is a cheap way to catch the steps experts forget [@gawande2010checklist]. A review summarizes his design advice: good checklists are precise, practical and easy to use in difficult situations; they cover only the most critical steps; poor ones are vague, too long and treat users as unthinking. A secondary summary of the book's rules adds two styles. A do-confirm checklist has people do their work from memory and then pause to confirm it was all done; a read-do checklist is followed like a recipe, each task done as it is read. His rules begin by defining a clear pause point at which the checklist is used. These descriptions should be checked against the book before being quoted. The book's best-known story, the 1935 bomber crash that led to a pre-takeoff checklist, is the author's narrative rather than independent history, and accounts differ.

::: {.rule #SKL-062 grade="C"}
**Label every checklist as read-do or do-confirm, and tell the learner how to use that kind.** The two styles serve different situations: read-do for sequences to follow in order, do-confirm for actions done from memory and then checked [@gawande2010checklist].

*In LTF:* this is already built. `ChecklistRunner` shows a "Read-do" or "Do-verify" badge with a one-line explanation from `MODE_HELP`, and `ChecklistPage` states the mode in its description. Keep it, and keep the mode a required field.
:::

::: {.rule #SKL-063 grade="C"}
**Tie each checklist to a named pause point, and show that pause point on the page when it arrives.** A checklist is used at a defined moment [@gawande2010checklist], and the surgical checklist's three pause points structure its whole use [@haynes2009surgical].

*In LTF:* in `FlyPanel`, a step that calls for a checklist should open the relevant `ChecklistRunner` inline under a banner naming the pause ("Pause: run the before-landing checks"), rather than linking away to `/reference/checklists/:slug`.
:::

### What a checklist can and cannot deliver

The most cited field test of an aviation-style checklist outside aviation is Haynes and colleagues' surgical safety checklist study [@haynes2009surgical]. A 19-item checklist based on World Health Organization guidance, organized around three pause points (sign in, time out, sign out) and described as a single page taking a few minutes, was introduced in eight hospitals in eight cities with very different resources. Across 7,688 patients (3,733 before, 3,955 after), major complications fell from 11 percent to 7 percent and inpatient deaths after major operations from 1.5 percent to 0.8 percent, as a news report of the paper gives the figures. The checklist includes communication steps, so it is a teamwork tool as well as a memory aid.

The design was before-and-after, which cannot rule out other changes over time, and the effect did not replicate at population scale. After a provincial policy in Ontario, an analysis of 109,341 surgeries before and 106,370 after across 101 hospitals found adjusted risk of death of 0.71 percent before and 0.65 percent after (P = 0.13) and complications of 3.86 percent before and 3.82 percent after (P = 0.29), not significant. An accompanying editorial argued that effective use requires local adaptation and training, and Gawande raised methodological concerns about the Ontario study. The size of the benefit in routine practice is contested.

::: myth
**"Checklists cut deaths by 40 percent."** The figure comes from one eight-hospital before-and-after study of surgical teams [@haynes2009surgical]. A population-scale evaluation of mandated surgical checklists in Ontario found no significant reduction in death or complications, and an accompanying editorial argued that benefit depends on local adaptation and training [@haynes2009surgical]. A checklist helps when it is short, used at defined moments and adopted by the people who use it.
:::

::: {.rule #SKL-064 grade="B"}
**Design each checklist for real use beside the sim (short, at a defined moment, readable at a glance) and do not claim safety outcomes for it.** Checklist benefit depends on adoption and local adaptation, and the headline effect is contested [@haynes2009surgical; @degani1990checklists]. Grade B: one positive multi-site study and one null population study.

*In LTF:* any lesson that explains why checklists matter should cite both the positive and the null study, and must not quote a percentage as a promise. A fly-mode checklist should fit one screen without scrolling at the `large` size.
:::

::: {.rule #SKL-065 grade="C"}
**Let learners add their own reminder to a challenge or checklist, kept separate from the verified items.** Local adaptation is the condition the checklist literature identifies for effective use [@haynes2009surgical; @gawande2010checklist].

*In LTF:* the `DebriefForm` notes field already stores free text per attempt. A "my reminder" line shown at the top of the Fly tab on the next attempt would make that note a personal checklist item, visibly separate from the verified procedure.
:::

### Documents are displays

Degani's companion report treats printed flight-deck documents (checklist cards, charts, manuals) as displays in the full human-factors sense, designed with almost no applied research [@degani1992typography]. Its summary says reading procedures "has a significant impact on flight safety" and that there is "a dearth of information on how to effectively design these displays" [@degani1992typography, 1]. Two motivating cases make findability and legibility safety properties: an accident report found one airline's checklist typeface 57 percent smaller than human engineering criteria recommended, while stating there was no evidence legibility caused that accident; and a crew spent about 3 minutes looking for a smoke procedure because they believed it was in the wrong section.

The report's 19 recommendations [@degani1992typography, 31-32] include: sans-serif type is "usually more legible" than serif; avoid typefaces with look-alike characters; set long text in lower case; keep line spacing at no less than 25 to 33 percent of font size; avoid long italic strings; use one or two typefaces for emphasis; use black on white for most documents and avoid white on black in normal operations (if used, little text, large type, sans-serif); avoid black over dark red, green or blue; reduce glare; and assess the age of the readers and be conservative. Degani reports, from older work, a 50 percent reduction in retinal illumination at age 50 compared with age 20, and notes most laboratory subjects were probably young. He also argues, citing Tinker, that sub-optimal conditions combine: white on black, italics, bold, small type and color together hurt more than any one alone, and the combined effect cannot be predicted by adding single effects.

The author is candid about the limits. Very little of the data comes from reading in a cockpit; most experiments used college students at a desk in normal room lighting; the recommendations "are not specifications" but a baseline from "the author's subjective interpretation"; and designers should validate in a simulator with representative users. The sans-serif claim has been qualified by later screen-reading work. Screen typography for LTF as such is the business of Part IV, Typography on Screens, and Part III, Legibility and the Science of Reading; what this report adds is the operational frame.

::: {.rule #SKL-066 grade="C"}
**Treat fly mode and every checklist view as an operating document: test its legibility at the distance, lighting and glance length of real use.** Flight-deck documents are displays whose legibility and findability are safety properties, and laboratory figures do not transfer to the operating environment without validation [@degani1992typography].

*In LTF:* `FlyModeLayout` is dark with `text-xl` and `max-w-3xl`. Test it on a phone and a tablet propped beside a monitor in a dim room, with learners, before treating its sizes as settled. Do not copy the report's paper-era measurements into CSS.
:::

::: {.rule #SKL-067 grade="B"}
**Never stack small type, italics, color-only distinctions and low contrast in one fly-mode panel.** Sub-optimal typographic conditions combine to hurt more than any one alone, and the combined effect is not predictable from single effects [@degani1992typography]. Grade B for the interaction finding, which comes from older legibility research.

*In LTF:* the `FlyPanel` step text is regular weight at `text-lg` or `text-xl`, with ticked steps shown by a `go` border and tint and a checkbox. Keep italics out of steps, keep the check mark as the non-color cue, and check the ticked state's contrast in Night.
:::

::: {.rule #SKL-068 grade="C"}
**Give every checklist and procedure view a text-size control and a stable, consistent position for each section.** Readers vary in age and visual conditions and designers should be conservative [@degani1992typography]; findability depends on consistent placement [@degani1992typography].

*In LTF:* `ChecklistRunner` has a "Large text" toggle and `ChecklistPage` a "Full screen" control. Add the same large-text control to `FlyPanel` outside fly mode, and keep the order Goal, Steps, Timer fixed across every challenge.
:::

### What this means for Learn to Fly

Keep `ChecklistRunner` nearly as it is. It already shows the target state for each item (SKL-056), labels read-do and do-verify with instructions (SKL-062), highlights the current item, supports Backspace recovery and announces completion. Keep `ChecklistPage`'s verification line ("Last verified..." or "Not yet verified against the in-sim checklist"), which applies the honesty rule to the most safety-like document in the product.

Change `FlyPanel` to borrow what `ChecklistRunner` does: a current-step highlight, chunking for long procedures with a completion line per chunk (SKL-057, SKL-061), and inline checklists at named pause points rather than links to the reference section (SKL-063).

Build two content checks into `content:validate`: generic actions in checklist items (SKL-056) and control names that are not in the glossary (SKL-060). Run a legibility test of fly mode with learners in real conditions (SKL-066). And when any lesson argues for checklists, give both sides of the surgical evidence (SKL-064).

## Displays, alerts and modes

### Proximity compatibility

Wickens and Carswell state the proximity compatibility principle in one sentence: displays relevant to a common task or mental operation (close task or mental proximity) should be rendered close together in perceptual space (close display proximity) [@wickens1995proximity]. Task proximity is how much information must be combined, compared or used together in one mental operation. Display proximity is closeness in space, color, shared boundaries or other cues that make items look like one thing. The paper reviews evidence in aviation, graphs, display layout and decision aiding, and says there are different forms of task proximity with different mechanisms behind them. Only the abstract was read.

The principle has a second half, given in secondary summaries, that stops it from becoming "group everything": when information must be selectively attended, it should be shown with low proximity. Close display proximity helps integration but can hurt focused attention, because the viewer has to pull one value out of a bundle. The best-known anchor, a study of object displays in which several parameters are drawn as dimensions of one shape, found that an object display gave better integration than separate bar graphs in an aircraft stall-analysis task but degraded focused attention on single dimensions, and that only well-designed emergent features aided integration. The benefit depends on the task actually being integrative, so a display serving both kinds of task must compromise or offer two views.

::: {.rule #SKL-069 grade="B"}
**Place values the learner must compare or combine in one step together, and separate values the learner must read alone.** Close display proximity helps integration and hurts focused attention [@wickens1995proximity]. Grade B: a theoretical integration with laboratory support, mostly from simulated flight and graph tasks.

*In LTF:* in `ResultView`, each criterion's label, the learner's result and the tier definition they chose belong in one row; the overall percentage stands apart. In `BriefTab` the "Sim setup" `dl` rows pair a setting with its value, which is correct.
:::

::: {.rule #SKL-070 grade="B"}
**Put a plain numeric readout beside any widget that encodes values in a shape.** Object displays support integration questions but degrade reading of single values [@wickens1995proximity].

*In LTF:* `load-factor`, `wind-triangle` and `pitch-power` draw relationships as shapes. Each should show the key values as `readout` text beside the drawing, so a "read this one number" question does not require reading the shape.
:::

Color is itself a display-proximity cue: items that share a color are read as belonging together [@wickens1995proximity]. In fly mode the teal accent marks the stopwatch dot and links, and the green `go` tint marks ticked steps, which keeps one meaning per color. Part VI, Color: Science, Meaning and Access, covers the palette; the point here is only that a shared color on `FlyModePage` or `ResultView` makes a claim of relatedness.

### Situation awareness as a design lens

Endsley's model of situation awareness (SA) treats it as central to operating dynamic systems and builds it from its role in decision making [@endsley1995toward]. Its three levels are perception of the elements in the environment, comprehension of their meaning, and projection of their status into the near future. The abstract names attention and working memory as the critical limits on acquiring and interpreting information, and mental models and goal-directed behavior as the mechanisms that overcome them; it derives design implications for design features, workload, stress, complexity and automation.

The construct is contested. Flach argued in the same journal issue that SA is a useful description but a circular explanation: the event happened because SA was lacking, and SA is judged lacking because the event happened. Dekker later argued that "losing SA" is used in investigations to blame practitioners. A recent review notes the construct still lacks a universally accepted operational definition. Endsley's reply holds that the levels are ascending, not linear stages, and that the account is not circular. The debate is unresolved, and the useful position is the narrow one: SA is a good framing for design and a risky explanation of why someone erred.

::: {.rule #SKL-071 grade="C"}
**Structure every briefing and fly-mode view in three questions: what to look at, what it means, what happens next.** Endsley's three levels (perception, comprehension, projection) give a design lens for any display used in a dynamic task [@endsley1995toward]. Grade C: an influential model whose causal claims are contested; it is used here only as a checklist.

*In LTF:* each `FlyPanel` step could carry an optional "what you should see next" line, and `QuizBlock` items can be written at each level ("which gauge", "what does it tell you", "what will it do").
:::

::: {.rule #SKL-072 grade="C"}
**In fly mode, show the current and next step prominently and move completed steps out of the way.** Working memory is the bottleneck in Endsley's account [@endsley1995toward], and a long list of equal-weight steps makes the learner search for their place each time they look back.

*In LTF:* the `FlyPanel` list shows every step at the same size, with ticked steps tinted green. In `FlyModePage`, collapse ticked steps to one line and enlarge the current one.
:::

::: {.rule #SKL-073 grade="C"}
**Never claim to measure a learner's situation awareness, and never tell a learner they "lost situation awareness".** The construct lacks an agreed operational definition, and critics argue the phrase works as blame [@endsley1995toward].

*In LTF:* `debriefQuestions` such as "Where did you look most of the time?" ask about observable behavior, which is the right form. Keep that, and keep "situational awareness" out of criterion labels and `ResultView` copy.
:::

### Alerting: three levels and a color convention

The transport-airplane alerting rule, 14 CFR 25.1322, is one of the few places an alerting convention is written down as a requirement [@faa2010flightcrew]. It is a certification standard for one class of airplane, not a training document and not a flying procedure, and is summarized here from a paragraph-by-paragraph reading of the rule text. Alerts must give the crew the information needed to recognize a non-normal condition and decide what action, if any, to take, must be easy to detect and understand under all foreseeable conditions including multiple alerts, and must be removed when the condition no longer exists. There are three priority levels by urgency: a warning needs immediate awareness and immediate response; a caution needs immediate awareness and a later response; an advisory needs awareness and may need a later response. Warnings and cautions must use at least two different senses (aural, visual or tactile), and each attention-getting cue must be acknowledgeable and suppressible unless required to be continuous.

The rule requires that false and nuisance alerts be minimized. A means to suppress an attention-getting component must exist if the alerting function itself malfunctions, must not be operable by accident or habitual reflex, and must leave a clear indication that suppression is active. The color convention is red for warnings, amber or yellow for cautions, and any color except red or green for advisories; displays that cannot show these colors must use other coding. Red, amber and yellow may be used for non-alerting functions only to a limited extent and without adversely affecting alerting. The rule is consensus and accumulated experience, a floor rather than a method, and the requirement for more than one sense reflects (by inference) the weakness of color-only coding.

::: {.rule #SKL-074 grade="C"}
**Use three levels for in-app messages during a challenge (act now, act soon, note for later), each with its own treatment, place and word.** The three-level structure orders alerts by the urgency of awareness and response [@faa2010flightcrew]. Grade C: a regulatory convention without an experiment behind it, adopted here by analogy.

*In LTF:* the random-event alert in `FlyPanel` (`border-4 border-warn bg-warn-tint`, `BellRing`, pulse, beep) is the act-now level. Define act-soon and note-for-later treatments for anything else shown during a flight, and do not use the act-now treatment for them.
:::

::: {.rule #SKL-075 grade="C"}
**Reserve the warning red for must-act-now states, and audit every other use of it.** Limited use of alert colors elsewhere protects their meaning [@faa2010flightcrew].

*In LTF:* `warn` currently colors the random-event alert, but also form errors in `FormField`, the "Not quite." quiz result, the `danger` button, the `decision` and `safety` callouts and the red play disc in `YouTubeEmbed`. The play disc and the `decision` callout have no urgency and should move off `warn`; the `BetaBanner` uses the `caution` tint for a standing advisory, which should move to a neutral or accent treatment. See Part VI, Color: Science, Meaning and Access, for the palette itself.
:::

::: {.rule #SKL-076 grade="C"}
**Signal every act-now alert through at least two channels, make it acknowledgeable, and never through color alone.** Warnings and cautions use at least two senses, and their cues must be acknowledgeable [@faa2010flightcrew].

*In LTF:* the `FlyPanel` alert already combines a beep, a visual panel, an icon, a bold label and a "Got it" acknowledgment. Keep all of them, and keep the visual alert sufficient on its own for learners with sound off, as the `beep()` comment intends.
:::

::: {.rule #SKL-077 grade="C"}
**Remove an alert or nudge as soon as its condition clears, and say on the page when a type of nudge is switched off.** Alerts must be removed when the condition no longer exists, and suppression must be clearly indicated [@faa2010flightcrew].

*In LTF:* if LTF later adds condition-based nudges (for example from a sim connection), a stale banner after the learner corrects is a bug. A learner who turns a nudge type off should see a small "nudges off" indicator in `FlyModePage`, removable with one action that cannot be triggered by accident.
:::

### False alarms and over-reliance

Parasuraman and Riley organize the human side of automation in four terms [@parasuraman1997humans]. Use is voluntary activation or disengagement. Misuse is over-reliance, which "can result in failures of monitoring or decision biases". Disuse is neglect or underuse, "commonly caused by alarms that activate falsely". Abuse is automation designed and introduced "without due regard for the consequences for human performance", which defines the operator's role as a by-product of the automation and can promote both misuse and disuse. These follow from design and management decisions, not from operator character. Monitoring of automation depends on workload, reliability and the saliency of automation-state indicators. Disuse "often occurs because the base rate of the condition to be detected is not considered" in setting the trade-off between false alarms and misses: when the event is rare, even an accurate alarm is wrong most of the times it sounds. Lee's later review called the paper a pivotal node in automation research and concluded that automation "requires more, not less, attention to training, interface design, and interaction design".

::: {.rule #SKL-078 grade="B"}
**Make nudges and warnings rare enough to mean something, and retire any that learners routinely dismiss.** Alarms that activate falsely produce disuse, and alert thresholds must account for the base rate of the event [@parasuraman1997humans]. Grade B: an integrative review of empirical and analytical work.

*In LTF:* the `BetaBanner` and `SignupBanner` are dismissible and remembered in localStorage, which is right. Any future in-flight nudge should log dismissals so that a nudge dismissed most of the time can be removed.
:::

::: {.rule #SKL-079 grade="B"}
**Make challenges require reading the sim; let the page confirm, never supply, what the sim shows.** Over-reliance on an aid produces failures of monitoring [@parasuraman1997humans]. If the page gives the value the learner should be reading from the instrument, the learner stops reading the instrument.

*In LTF:* the app cannot see the sim, and should say so plainly in `BriefTab`. Steps should name what to check in the sim ("confirm on the airspeed indicator"), not restate the expected reading after the first attempt (SKL-003).
:::

::: {.rule #SKL-080 grade="C"}
**Do not automate the learner's part of a procedure: no auto-ticking, no auto-advancing steps.** Automation introduced without regard for human performance reduces the operator to a by-product [@parasuraman1997humans].

*In LTF:* `FlyPanel` and `ChecklistRunner` tick only on the learner's action, and the debrief is scored by the learner and recomputed by the server. Keep both. A future sim connection that ticks steps automatically would need a reason stronger than convenience.
:::

### Modes

Sarter and Woods showed how flexibility in automated systems creates a new class of error [@sarter1995world]. Because the supervisor must choose the mode best suited to the situation, he or she "must know more than before about system operations" and must meet new attentional demands "to track which mode the automation is in and what it is doing". When designers "proliferate modes without supporting these new cognitive demands, new mode-related error forms and failure paths can result." Their expanded view of mode error includes failures of mode awareness (not knowing which mode is active and what it will do), not only the slip of acting in the wrong mode. The evidence is studies of pilots in early glass-cockpit airliners, so the display details do not carry over to anything else; the design pattern does. A summary adds that these "automation surprises" occurred mostly in non-normal, time-critical situations.

LTF has modes of its own: lesson, challenge Brief, Fly and Debrief, fly mode on a second screen, widget Explore and Quiz, Day and Night. Most are well signposted. Two weak points are fly mode, which opens in a new tab with "Back to challenge" as its only orientation, and the timer-driven random event, which changes what the screen shows without the learner acting.

::: {.rule #SKL-081 grade="C"}
**Show the current mode and place in words, in the same position on every screen, and never change mode without a visible announcement.** Mode errors and surprises come from many modes with weak support for tracking them [@sarter1995world].

*In LTF:* `FlyModePage` should show a fixed line at the top ("Fly mode · C2.1 · Step 3 of 5") readable at a glance, and the random-event alert, already announced with `role="alert"`, should name itself as an event in the challenge so it is not mistaken for an app error.
:::

Since the root of the problem is the proliferation of modes [@sarter1995world], fewer modes beat better labels on many. LTF already follows this where it counts: fly mode and the Fly tab are one component, `FlyPanel`, with a `large` prop, rather than two sets of controls that could drift apart. When a lesson covers the sim's autopilot, "which mode is active" should be an explicit item to observe and quiz, with mode names from the aircraft's documents.

### Standards as a model for this book

The FAA's Human Factors Design Standard compiles human-factors criteria for the agency's own systems: air traffic and technical operations, not aircraft cockpits [@ahlstrom2016human]. Its stated aim is "a single, easy-to-use source of design criteria", with notes on trade-offs between criteria, and its own warning is that it is "not a substitute for in-depth professional human factors practice" and must be tailored "to meet the needs of the system or program at hand". Only its front matter and records were read, so no numeric criterion is quoted from it.

::: {.rule #SKL-082 grade="C"}
**Look numeric human-factors criteria up in the standard and quote them with their section, never from memory, and record the trade-offs when criteria conflict.** A design standard packages criteria for citation and review but warns that it does not replace judgment or testing [@ahlstrom2016human].

*In LTF:* when fly-mode text size, alert coding or label wording needs a numeric criterion, open the relevant chapter of the standard or another verified source. Nothing in the standard is a fact about the Cessna 172.
:::

### What this means for Learn to Fly

Keep the `FlyPanel` alert, which already meets the two-channel, acknowledgeable pattern (SKL-076), the learner-driven ticking in `FlyPanel` and `ChecklistRunner` (SKL-080), and the observable-behavior wording of debrief questions (SKL-073).

Change the use of red and amber across the product (SKL-075). The warning color currently means "random event in flight", "wrong quiz answer", "form error", "decision callout" and "play this video". Only the first is a must-act-now state. Move the video disc and the `decision` callout off `warn`, and the beta notice off `caution`. Change `FlyModePage` so its top line states mode, challenge and step (SKL-081), collapses completed steps and enlarges the current one (SKL-072).

Build the three message levels as named treatments in `src/components/` (SKL-074), and use them for anything shown during a flight. Add numeric readouts beside the shape-based widgets (SKL-070). Keep alerting rare and track dismissals once any automatic nudge exists (SKL-078).

## Error as information

### "Pilot error" as a design finding

In 1947 Fitts and Jones collected 460 accounts of errors pilots made in operating aircraft controls and argued that much of what was being written off as "pilot error" was better explained by how the controls were designed, shaped, placed and sequenced [@fitts1947analysis]. A secondary account reports their conclusion that the frequency of these errors, "and therefore the incidence of aircraft accidents, can be reduced substantially by designing and locating controls in accordance with human requirements," and that they rejected the then-usual view that such errors were mainly a matter of selection and training, since pilots of every experience level made them. The memorandum itself could not be read, so the quotation is secondhand. The authors put "pilot error" in quotation marks, which is the point: the phrase is something to investigate, not an explanation.

The method was a collection of interviewed and written accounts, an early form of what became the critical incident technique. Secondary summaries name four categories of control error: operating the wrong control (substitution), failing to adjust a control properly, forgetting to operate a control, and being unable to reach a control when needed. No source gave the share of each category, so none is given here. The best-known illustration is the substitution of one control for another that looks alike, sits nearby and is used in the same phase: controls that look alike, sit close together and are used in sequence invite a predictable slip. Remedies named in the secondary summary are standardization, simplification, sequencing and interlocks. A retrospective case collection cannot give rates, since there is no count of correct operations, and is open to recall and reporting bias; its strength is as a taxonomy and an argument. Applied forty years later to driving and computer use, the taxonomy transferred well to control errors and less well to errors in reading and interpreting instruments.

::: {.rule #SKL-083 grade="B"}
**Treat a pattern of the same learner error as a design defect to investigate before treating it as a learner deficit.** Errors repeated across operators of every experience level point to the design of controls and displays [@fitts1947analysis; @reason2000human]. Grade B: a founding case collection, a long tradition of system-based analysis and no contrary evidence in the notes.

*In LTF:* log wrong answers per `QuizBlock` item and per widget quiz, and per criterion scored Not met in `DebriefForm`. Review items where many learners fail the same way as content bugs, with the same priority as a broken link.
:::

::: {.rule #SKL-084 grade="C"}
**Review every challenge briefing for the four control errors: can the learner pick the wrong control, set it wrongly, forget it, or be unable to find it when needed?** The categories from the 1947 analysis are a ready review checklist [@fitts1947analysis]. Where two easily confused controls are introduced, make their labels, icons and positions on the page clearly different and explain the difference in the same panel.

*In LTF:* "unable to reach" has a web form: a step or briefing that has scrolled off screen in `FlyModePage`, or a checklist behind a link. Run the four questions against `BriefTab` and `FlyPanel` content during `/review-lesson`.
:::

### Person and system

Reason sets out two ways of thinking about human error [@reason2000human]. The person approach locates the cause of mishaps in forgetfulness, inattention, poor motivation, carelessness and negligence, and answers with poster campaigns, new procedures, discipline, retraining and "naming, blaming, and shaming". It persists because blaming individuals is "emotionally more satisfying than targeting institutions". The system approach starts from the premise that humans are fallible and errors are to be expected "even in the best organisations"; "errors are seen as consequences rather than causes", with origins upstream. Its slogan: "We cannot change the human condition, but we can change the conditions under which humans work." After an adverse event the question becomes "not who blundered, but how and why the defences failed."

The person approach has two shortcomings in Reason's account. Most unsafe acts are not egregious (in aviation maintenance, he cites a finding that about 90 percent of quality lapses were judged blameless), and isolating individuals overlooks that "it is often the best people who make the worst mistakes" and that mishaps follow recurrent patterns whoever is involved. Effective risk management depends on a reporting culture, which depends on trust and on a shared understanding of the line between blameless and blameworthy acts.

The Swiss cheese model describes defences in layers (engineered barriers, people, procedures), each with holes that open, close and shift; an accident happens when holes in several layers momentarily line up. Active failures are unsafe acts by people at the sharp end, with direct and short-lived effects. Latent conditions are "resident pathogens" created by designers, procedure writers and managers: they produce error-provoking conditions such as time pressure and inexperience, and long-lasting holes such as untrustworthy alarms, unworkable procedures and design deficiencies. Unlike active failures, latent conditions can be found and fixed in advance. The article is a short commentary for clinicians distilling the author's industrial and aviation work; the metaphor is a communication model, not a validated predictive one.

::: {.rule #SKL-085 grade="C"}
**Hunt for latent conditions in the product itself: ambiguous copy, inconsistent checklists, alerts that cry wolf, and any mismatch between the page and the sim.** Latent conditions are created by designers and procedure writers, persist, and can be fixed before they cause harm [@reason2000human]. Grade C: expert synthesis.

*In LTF:* the `verify` callout, the "Draft · unverified" badge and `/review-lesson` already target one latent condition, unverified facts. Add the others to the content review, and treat every "Report a problem" submission from `ReportProblemDialog` as a report of a possible latent condition.
:::

The layered-defence idea [@reason2000human] maps onto LTF's own sequence. The lesson, `BriefTab`, `FlyPanel` and `DebriefForm` are layers, and a gap in one (a step missing from the procedure) can be caught by another (a criterion that checks it, a debrief question that asks about it). Content review can test the layering by mapping each criterion to a lesson section and a step.

### Experts slip too

Dismukes, Berman and Loukopoulos asked how highly experienced, trained and regularly checked airline pilots come to be involved in the errors that figure in so many accidents [@dismukes2007limits]. As a review of the book reports, they reviewed 19 major U.S. air carrier accidents from 1991 to 2000 in which the investigating board found crew error an important causal factor, using a method similar to an earlier board study on which Berman was principal investigator. Their answer is that the naive view is wrong: a pilot who errs, seen in hindsight, "typically does not lack skill, vigilance or conscientiousness" but is behaving expertly in a situation that may involve misinformation, lack of information, ambiguity or other stressors in a possibly unique combination. Experts in all domains make inadvertent errors at tasks they normally perform, from "subtle variations in task demands, incomplete information available to the expert performing the task, and the inherent nature of the cognitive processes that enable skilled performance."

The recurrent themes include inadvertent slips while performing highly practiced tasks under normal conditions; inadequate execution of practiced normal procedures under challenging conditions; inadequate execution of non-normal procedures under challenging conditions; inadequate response to rare situations; judgment in ambiguous situations that hindsight proves wrong; and deviation from explicit guidance. The inputs are accident narratives shaped by hindsight, for one decade and one kind of operation, and the book cannot give causal estimates. Only a review of it was read.

::: {.rule #SKL-086 grade="C"}
**Keep confirmations for routine steps in later lessons; never let "mastered" remove the check.** Experts slip on highly practiced tasks under normal conditions; fluency does not guarantee reliability [@dismukes2007limits].

*In LTF:* do-verify checklists in `ChecklistRunner` are the right tool for steps the learner now does from memory, and they should remain part of challenges in Modules 4 to 8 rather than being dropped once a learner has passed the module that introduced them.
:::

::: {.rule #SKL-087 grade="C"}
**In any review screen, show what the learner could see at the time before showing what went wrong.** Judgments that hindsight proves wrong were often reasonable given the information available [@dismukes2007limits]; a review that starts from the outcome teaches hindsight, not judgment.

*In LTF:* `debriefQuestions` should begin with what the learner saw and expected ("Where did you look most of the time?") before asking what they would change. If LTF later adds a replay or timeline, it should show the state at each moment before the verdict.
:::

::: {.rule #SKL-088 grade="B"}
**Describe errors by their conditions (time pressure, an ambiguous cue, an interruption), never by blame words such as careless, mistake or pilot error.** Errors are consequences of conditions, and expert performers err for reasons the person approach misses [@reason2000human; @dismukes2007limits; @fitts1947analysis]. Grade B: three independent lines of work agree.

*In LTF:* `BriefTab` shows `commonMistakes` in a `safety` callout titled "Common mistakes", in the warn color. Retitle it "What tends to go wrong" or similar, move it to a neutral callout, and write each item as a condition and its effect. Keep `ResultView`'s "Not passed yet" phrasing, which names a criterion rather than the learner.
:::

### Interruptions and recovery

Two findings meet here. Degani and Wiener's guidelines ask for buffers and a way to take up the slack [@degani1990checklists]; Dismukes and colleagues list slips under interruption and distraction among the recurrent vulnerabilities of experts [@dismukes2007limits]. A learner at a desk will be interrupted: the sim pauses, a phone rings, the second screen sleeps. The product should assume interruption and make the return obvious. Reason's high reliability organizations train people to expect and recover from errors [@reason2000human]; the web equivalent is undo, safe retry and a clear "you were here".

::: {.rule #SKL-089 grade="C"}
**Persist the learner's place in every flight and make it obvious on return, with undo and safe retry everywhere.** Recovery from interruption and error is a design property, not a learner virtue [@degani1990checklists; @reason2000human].

*In LTF:* `FlyPanel` already saves ticks and the start time through `saveFlight` and restores them with `loadFlight`, and debrief drafts survive a refresh. Keep that. Add a visible "You were on step n" line when a flight is restored, and keep the "Keep the screen on while flying" wake-lock option.
:::

### Non-normal practice

The accident review's themes include non-normal procedures under challenging conditions and inadequate response to rare situations [@dismukes2007limits], and the practice meta-analysis found practice explains least in unpredictable situations [@macnamara2014deliberate]. A course that trains only the normal flow leaves its learners unprepared for the event that does not follow it. LTF's challenges already include an engine-failure exercise (C5.5), a go-around (C4.4) and random events in three challenges.

::: {.rule #SKL-090 grade="B"}
**Include non-normal practice in each later module, framed as rehearsing recognition and response, with every procedure taken from the aircraft's documents.** Non-normal and rare situations are recurrent vulnerabilities even for experts [@dismukes2007limits], and unpredictable tasks need varied practice [@macnamara2014deliberate; @gopher1994transfer].

*In LTF:* extend `randomEvents` beyond C5.5, C6.5 and C8.1 to at least one challenge per module from Module 4 on, each event verified in the sim, and debrief each with a question about the first cue the learner noticed.
:::

### What this means for Learn to Fly

Keep the system stance that the product already takes in its honesty features: draft badges, `verify` callouts, "Report a problem" in the footer and the beta banner, and result copy that names criteria rather than people. Keep flight-state persistence in `features/challenges/storage.ts`.

Change the framing of `commonMistakes` in `BriefTab` (SKL-088): the safety callout in red with the title "Common mistakes" tells the learner the errors are theirs and dangerous, when most are ordinary consequences of conditions. Change debrief question order so that what the learner saw comes first (SKL-087).

Build error logging per quiz item, widget quiz and criterion (SKL-083), reviewed as content defects, and a four-question control-error review in `/review-lesson` (SKL-084). Extend non-normal events across later modules (SKL-090). Each of these makes learner errors into information about the course, which is the main lesson of eighty years of aviation human factors.

## Decision list and review checklist

### Decisions this Part settles for Learn to Fly

1. **Learning is measured unaided and later.** A guided pass is evidence that the guidance works, not that the learner has learned. The attempt record stores whether the procedure was visible, and any claim about lesson effectiveness uses unaided, delayed results (SKL-014, SKL-015, SKL-020, SKL-051).
2. **Facts live in the lesson; challenges ask for their use.** After a first pass, `FlyPanel` and `FlyModePage` offer a mode with the steps hidden, recorded with the attempt (SKL-003, SKL-019, SKL-024). Quizzes include application items (SKL-004).
3. **No stages, no hours, no promised outcomes.** The product never labels a learner with a skill stage, never puts hours on learning, never uses the 10,000-hour idea and never states an hours, cost or percentage benefit for LTF (SKL-002, SKL-012, SKL-045). Simulator practice is presented as a complement to real instruction (SKL-042).
4. **Progress headlines skills, not volume.** `DashboardPage` leads with improvement on named criteria; attempt counts are secondary, and the estimated sim-time tile is replaced by logged time or removed (SKL-010, SKL-011). Trend views treat a flattening curve as normal (SKL-005).
5. **Every challenge is a designed practice activity.** Goal, criteria, likely errors framed as conditions, a tip, a reflection prompt and a review link are required by the schema (SKL-007, SKL-013, SKL-088). An optional per-attempt goal is collected in `BriefTab` (SKL-008).
6. **Feedback starts rich and thins.** Early attempts get criterion-by-criterion feedback with one highlighted focus; after consistent passes the learner can practice in sets with a summary, and `HistoryTab` shows per-criterion patterns (SKL-021, SKL-022, SKL-023).
7. **Instruction names effects and stays short in flight.** Steps describe what the learner should see, not body movements, and one action per step (SKL-026, SKL-027). Complex challenges link a demonstration clip (SKL-025).
8. **Difficulty adapts to the learner.** A challenge can hold two or three verified setup levels; the first attempt is calm and simple, and the level rises after a pattern of success and falls after repeated failure (SKL-029, SKL-030, SKL-032, SKL-033). Difficulty changes conditions, tolerance or prompts, never only a timer (SKL-034). Experienced learners get a diagnostic route (SKL-031).
9. **Block first, then mix and vary.** New maneuvers are practiced in a block, then combined challenges mix them, with varied setups on repeat attempts and earlier material returning at intervals (SKL-016, SKL-017, SKL-018).
10. **Parts are reintegrated and reported separately.** Fractionated lessons are followed by whole-task practice with shifting emphasis; single-instrument widgets lead to challenges that use the instrument in the scan; combined challenges carry module completion (SKL-035 to SKL-041).
11. **Challenges follow the lesson that introduces them, and the product moves learners on.** After consistent success `ResultView` leads with the next skill; review is short and tied to a gap (SKL-043, SKL-044, SKL-046).
12. **Widgets are judged by functional match and motion direction.** Each records what it looks like and what decision it trains; motion matches the sim; augmentation is planned for removal; pictures come before symbols (SKL-049, SKL-050, SKL-052, SKL-053, SKL-054). Widget exercises carry a strategy sentence and name what they train (SKL-047).
13. **Checklists keep the `ChecklistRunner` model.** Target state per item, read-do or do-verify labels, current-item highlight, chunking with completion lines, critical items first, panel order, canonical names, pause points shown in flight, personal reminders kept separate (SKL-056 to SKL-065). No safety outcome is claimed (SKL-064).
14. **Fly mode is an operating document.** It is tested with learners in real conditions, avoids stacked typographic handicaps, offers a text-size control, shows mode and place at a glance, and collapses completed steps (SKL-066 to SKL-068, SKL-072, SKL-081).
15. **Alerts have three levels, and red means act now.** Only must-act-now states use `warn`; alerts use two channels, are acknowledgeable, clear with their condition and stay rare (SKL-074 to SKL-078). The page confirms what the sim shows and never automates the learner's part (SKL-079, SKL-080).
16. **Learner errors are information about the course.** Wrong answers and failed criteria are logged and reviewed as content defects; briefings are reviewed for the four control errors; copy names conditions, not blame; review screens show what the learner could see first (SKL-083 to SKL-088). Flights survive interruption (SKL-089), and non-normal practice appears in every later module (SKL-090, SKL-009).

### Review checklist

Run these questions against a pull request that touches lessons, challenges, widgets, fly mode, the dashboard or learner-facing copy. A "no" is a finding unless the pull request explains why.

#### Lessons and quizzes

- Does each new block serve a named phase of the component it teaches, and does an early procedure appear with the situation it serves? (SKL-001, SKL-006)
- Does each quiz section include at least one application item, and one item from earlier material where a gap is likely? (SKL-004, SKL-017)
- Is every control instruction worded by its visible effect rather than a body movement? (SKL-026)
- If the pull request cites a learning principle, does its evidence come from complex tasks, or is that limit stated? (SKL-028)
- Does any lesson argue for checklists or simulators with a number presented as a promise? (SKL-045, SKL-064)

#### Challenges

- Does the challenge have goal, criteria, likely errors written as conditions, a tip, a reflection prompt and at least one review link? (SKL-007, SKL-013, SKL-088)
- Does it come right after the lesson that introduces its maneuver, and start in calm, simple conditions? (SKL-032, SKL-043)
- If it fractionates a concurrent skill, is there a whole-task challenge with shifting emphasis after it? (SKL-035, SKL-036)
- Do its difficulty levels change conditions, tolerance or prompts rather than a timer or score? (SKL-029, SKL-034)
- Has it been reviewed for wrong-control, wrong-setting, forgotten-control and cannot-find errors? (SKL-084)
- If it adds a random event, is the event verified in the sim, varied, and debriefed by asking for the first cue noticed? (SKL-009, SKL-090)
- Does every control name match the sim and the glossary? (SKL-055, SKL-060)

#### Fly mode and checklists

- Is each step one action and its target, with the current step highlighted and completed steps collapsed? (SKL-027, SKL-061, SKL-072)
- Can the learner hide the steps, and is that recorded? (SKL-024)
- Does the screen show mode, challenge and step in a fixed place? (SKL-081)
- Does any panel combine small type, italics, color-only meaning and low contrast? (SKL-067)
- Does every checklist item state a target state, is the list chunked with completion lines, and are critical items first? (SKL-056, SKL-057, SKL-058)
- Is each checklist labeled read-do or do-verify, and opened inline at its pause point? (SKL-062, SKL-063)
- Was the view checked at real distance and lighting, with a text-size control available? (SKL-066, SKL-068)

#### Alerts and automation

- Is red used only for must-act-now states? (SKL-075)
- Does every act-now alert use two channels, carry a word and an icon, and accept acknowledgment? (SKL-076)
- Does every alert clear with its condition, and does a switched-off nudge type show as off? (SKL-077)
- Is the new nudge rare, and are its dismissals logged? (SKL-078)
- Does the page supply a value the learner should read from the sim, or tick or advance anything without the learner? (SKL-079, SKL-080)

#### Widgets

- Does the widget record what it looks like and what decision it trains? (SKL-049)
- Does its motion match the sim: which element moves, which way, against what reference? (SKL-054)
- Does a shape-based widget show plain numeric readouts beside the shape? (SKL-070)
- Are augmented cues removable in quiz mode, and is there a strategy sentence before quiz mode starts? (SKL-047, SKL-053)
- Is a single-instrument widget connected to a challenge criterion that uses the instrument in flight? (SKL-037)

#### Progress, results and copy

- Does the dashboard or result view headline skills rather than hours or attempt counts, and is any time shown logged rather than estimated? (SKL-010, SKL-011)
- Does any copy label a stage, attach hours to learning, promise mastery or claim situation awareness was measured or lost? (SKL-002, SKL-012, SKL-073)
- After consistent success, does `ResultView` lead with the next skill? After repeated failure, does it offer an easier route? (SKL-033, SKL-046)
- Does feedback highlight one focus, and is a multi-attempt summary available? (SKL-022, SKL-023)
- Do error messages describe conditions rather than the learner, and do review screens show what the learner could see before the verdict? (SKL-087, SKL-088)
- Is any claim of learning effectiveness based on unaided, delayed results rather than guided passes, satisfaction or how real the practice felt? (SKL-014, SKL-015, SKL-051)
