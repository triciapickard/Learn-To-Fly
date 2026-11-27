# Instructional Design

Instructional design is the craft of arranging what a learner sees, does and hears so that learning happens with the least waste. Where the science of learning (Part XIV, The Science of Learning: Load and Memory) describes how memory and attention behave, this Part covers the models and prescriptions built on top of that science: how much guidance to give a beginner, how to sequence demonstration and practice, how to write objectives that can be tested, how a lesson should be put together, what feedback should say, when to let a learner move on, and how to keep a learner wanting to continue. Every chapter is applied to the actual Learn to Fly (LTF) product: the `LessonPage` and its blocks, the challenge files and their `criteria`, the `BriefTab`, `FlyPanel`, `DebriefForm` and `ResultView`, `FlyModePage`, the `DashboardPage` and the `CurriculumMap`.

The evidence in this field is uneven, and the grades say so. A few claims rest on meta-analyses: unassisted discovery loses to explicit instruction for novices [@alfieri2011does], mastery programs raise examination scores by about half a standard deviation [@kulik1990effectiveness], and part-task and increasing-difficulty training work only under specific conditions [@wickens2013effectiveness]. Many of the best-known models (Gagné's nine events, Merrill's first principles, backward design, ARCS) are syntheses by experts with little direct experimental testing of the whole model, so their rules are graded C. Some famous numbers do not survive scrutiny at all, notably Bloom's "2 sigma" for tutoring and the league table of effect sizes in *Visible Learning*; both are treated as myths here. Use the rules as design defaults for a course whose learners are true beginners, check the grade before treating any rule as settled, and measure LTF's own learners before tuning numbers.

## Guidance Before Discovery

The most consequential choice in a beginner's course is how much the learner is told and shown before being asked to perform. LTF's audience has, in the words of its own plan, "never flown", and works beside a full flight simulator that will let them do anything at all. Few settings tempt a designer more toward "go and explore". The evidence says that for beginners, that is the weakest option.

### What the discovery meta-analysis found

Alfieri, Brooks, Aldrich and Tenenbaum ran the first systematic meta-analysis of the discovery-learning literature, on a pool of 164 studies [@alfieri2011does]. They define discovery learning as any situation where the learner is not given the target information and must find it with only the materials provided. They split the field in two.

The first analysis compared unassisted discovery (no guidance and no feedback during the learning task) with explicit instruction: 580 comparisons from 108 studies. The result was d = -0.38, with a 95% confidence interval of -0.44 to -0.31 at the comparison level and -0.50 to -0.25 at the study level. Negative means explicit instruction won. The second analysis compared enhanced or assisted discovery (learners still construct the knowledge, but with scaffolding, feedback, worked examples or prompts to explain) with other forms of instruction: 360 comparisons from 56 studies, d = 0.30, with intervals of 0.23 to 0.36 and 0.15 to 0.44. The authors call both effects small but meaningful.

The moderators are more useful to a designer than the averages. Against unassisted discovery, worked examples did best among the explicit conditions (d = -0.63), then feedback (-0.46), direct teaching (-0.29) and explanations provided (-0.28). The explicit advantage was smallest in math (-0.16), larger in science (-0.39) and problem solving (-0.48), and largest in verbal and social skills (-0.95). Every age group favored explicit teaching, adolescents (-0.53) more than adults (-0.26). For enhanced discovery, the largest gains came in physical and motor skills (1.05) and computer skills (0.64), the smallest in science (0.11), and adults gained more than children.

The limits are real and the authors state them. Most included studies are short laboratory experiments with small samples, so the results extend only cautiously to months-long curricula. Heterogeneity is large. "Enhanced discovery" is a broad bin, so its positive result really means that some structured help beats lesser help. Publication tier moved the numbers (first-tier journals gave a larger explicit advantage, -0.67, than lower-tier ones, -0.24), and unpublished work leaned against enhanced discovery. None of this reverses the direction of the main findings.

::: {.rule #INS-001 grade="A"}
**Teach every new procedure explicitly; never leave a beginner to discover it unassisted.** Unassisted discovery lost to explicit instruction across 580 comparisons, and worked examples and feedback were the strongest explicit conditions [@alfieri2011does]. The cognitive argument for the result is that searching for a solution occupies working memory without necessarily building the knowledge structures that learning requires [@kirschner2006why]. The rule holds for learners without prior knowledge of the domain; it weakens as expertise grows (INS-005).

*In LTF:* no lesson or challenge may consist of "open the sim and see what happens". The `procedure` list in each challenge file and the lesson sections that a challenge names in `lessons` must, between them, state the whole procedure before the learner is scored on it.
:::

::: {.rule #INS-002 grade="A"}
**When a learner explores, give the exploration rails: a stated goal, a pointer to the cue that matters, feedback, and a prompt to explain what happened.** Enhanced discovery, which adds exactly these supports, beat comparison conditions (d = 0.30), and its largest gains were in physical, motor and computer skills, the categories closest to flying a simulator [@alfieri2011does]. Mayer's definition of guided discovery is the same package: the problem plus hints, direction, coaching, feedback or modeling [@mayer2004should].

*In LTF:* a widget in "Explore" mode in `WidgetFrame` should carry a one-line task ("Find the bank angle at which the load factor reaches the value the lesson names") and a follow-up question, not an open canvas. The "Quiz me" mode already supplies the feedback half.
:::

### The cognitive argument

Kirschner, Sweller and Clark gave the strongest theoretical statement of the case [@kirschner2006why]. Their position paper groups constructivist, discovery, problem-based, experiential and inquiry-based teaching as "minimally guided" and argues that decades of comparisons show such teaching to be less effective and less efficient than strong, explicit guidance. The argument rests on cognitive architecture: working memory is severely limited when handling novel material, long-term memory is effectively unlimited, and learning means building organized knowledge in long-term memory. A novice searching for a procedure spends working memory on the search.

Two clarifications from their 2007 reply to critics matter for design. First, "direct instructional guidance" is not a lecture: it means information that fully explains the concepts and procedures to be learned, plus learning-strategy support, and it explicitly includes worked examples, modeling and case studies. Second, the reply calls the complete solution, supplied before a task or just in time during it, the "ultimate scaffold". The reply also argues that no general, teachable problem-solving or inquiry strategy has been isolated, so domain-specific knowledge should be taught directly, and that collaboration itself costs working memory.

The criticism deserves equal space. Hmelo-Silver, Duncan and Chinn replied that problem-based and inquiry learning were never minimally guided, because they use heavy scaffolding; Schmidt and colleagues argued that problem-based learning fits cognitive architecture; Kuhn argued for inquiry skills over content. The authors' reply concedes that modern problem-based and inquiry learning are "very structured" and calls this a welcome shift. The recurring complaint is that the paper lumps together methods that differ greatly. The paper is a review and argument by three committed proponents of cognitive load theory, not a meta-analysis; the Alfieri meta-analysis later supported its narrower claim about unassisted discovery [@alfieri2011does]. Its own boundary condition matters most: the advantage of guidance recedes when learners have enough prior knowledge to supply internal guidance.

### The constructivist teaching fallacy

Mayer's review of three research literatures makes a distinction that dissolves much of the argument [@mayer2004should]. Constructivism as a theory of learning (learners actively build knowledge) is not in dispute. What he attacks is the inference that, because learning is active, teaching must make learners behaviorally active: hands-on work, discussion, free exploration. He calls this the "constructivist teaching fallacy". The activity that matters is cognitive: selecting relevant information, organizing it and integrating it with what the learner already knows.

His three "strikes" are three eras of research. In the 1950s and 1960s, studies of discovering problem-solving rules found guided groups learning more efficiently than pure discovery groups; in Kittel's comparison, pure discovery did worst and guided discovery best on immediate retention, delayed retention and transfer, and in Gagné and Brown's series-sum problems guided discovery took the most learning time but produced the best transfer. In the 1970s, children learned conservation concepts through guided practice, concrete demonstrations or simple right-or-wrong feedback, while self-discovery effects were small by comparison. In the 1980s, students with more than 50 hours of pure-discovery LOGO programming could write simple programs but held many incorrect conceptions, while a guided group given modeling, hints and feedback wrote better programs and planned better.

The mechanism is simple. Pure discovery can fail the selection step, because the learner may never meet the principle to be learned. Expository teaching can fail the integration step, if it discourages sense-making. Guided discovery serves both. Mayer's review is selective and narrative, built on small experiments with artificial tasks in what he calls an "old-fashioned horse-race design", and he concedes that the hard part of guided discovery is knowing how much and what kind of guidance to give. The later meta-analysis reached the same broad verdict with a fully described search [@alfieri2011does].

::: myth
**"Hands-on activity is active learning, so learners learn best by doing and discovering for themselves."** The claim treats behavioral activity (clicking, dragging, flying around) as if it were the cognitive activity that produces learning. Mayer calls this the constructivist teaching fallacy and shows across three research eras that pure discovery underperforms guided methods [@mayer2004should]; the meta-analysis of 108 studies of unassisted discovery agrees [@alfieri2011does]. Activity helps when it makes the learner select, organize and connect information, which is what guidance arranges.
:::

::: {.rule #INS-003 grade="B"}
**Make every interactive element demand a cognitive act (predict, explain, choose, connect), not only a physical one.** Learning depends on selecting and integrating information, not on behavioral activity as such [@mayer2004should]. Prompts to explain were among the supports that made discovery effective [@alfieri2011does]. The evidence for the distinction is a narrative review plus a meta-analysis of a broad category, so the rule is a strong default rather than a measured effect for any single widget.

*In LTF:* a slider in the `pitch-power` or `load-factor` widget earns its place only if the learner must commit to a prediction before moving it ("Where will the airspeed settle?") or explain the result afterward. A widget that only responds to dragging is a demonstration and should be labeled and used as one.
:::

::: {.rule #INS-004 grade="B"}
**Put free, hands-on practice after the basics have been taught, not before.** In Rosenshine's synthesis, the most effective teachers also used hands-on activities, but always after the basic material was learned [@rosenshine2012principles]; in Mayer's account, free practice is a consolidation step that follows guided practice [@mayer2004should]. The classroom evidence is correlational, so this is a sequencing default.

*In LTF:* the first flight a beginner makes in the sim should be a scripted, scored challenge with a procedure, not a free flight. An open "just fly around" session belongs after Module 2's fundamentals, framed as consolidation of named skills.
:::

### Where the guidance advantage ends

Guidance is not good in itself; it is good for people who lack the knowledge it supplies. Kalyuga, Ayres, Chandler and Sweller reviewed a set of experiments, mostly from their own group, in which techniques that helped inexperienced learners lost their benefit and sometimes reversed for experienced ones [@kalyuga2003expertise]. Integrated text that helped novice electrical trainees read circuit diagrams became redundant for more experienced trainees, who did better with the diagram alone. Worked examples beat problem solving for inexperienced apprentices, but as experience grew the advantage disappeared and problem solving became superior. The mechanism is that redundant guidance still has to be read and reconciled with what the learner already knows, and redundant information is, in the paper's words, "frequently difficult to ignore". Full reversals are rarer than simple disappearances, and many of the studies used subjective effort ratings, but the direction is consistent across several domains.

Part-task and increasing-difficulty training show the same pattern: in a meta-analysis of 37 transfer studies, experienced learners benefited less from these supports, or suffered more [@wickens2013effectiveness]. Kirschner and colleagues state the same boundary in their own abstract [@kirschner2006why].

::: {.rule #INS-005 grade="B"}
**Fade guidance as the learner gains expertise, and give learners who already know the material a way past supports built for novices.** Guidance that helps beginners becomes redundant and can hurt experienced learners [@kalyuga2003expertise]; supports for complex skills helped experienced learners less [@wickens2013effectiveness]. Most of the evidence comes from one research group and short sessions, so the grade is B.

*In LTF:* a learner who has flown other simulators or had real lessons should be able to skip a lesson's walkthrough (a collapsible section, or a "skip to the check" link from the objectives `Card`) and attempt the challenge directly, with the result deciding whether to return. Later modules should carry shorter briefings than Module 0 to 2.
:::

::: {.rule #INS-006 grade="B"}
**Do not judge a lesson by how fast learners finish it.** In Gagné and Brown's study, guided discovery took the most learning time but produced the best transfer [@mayer2004should]; more broadly, performance during learning is an unreliable index of what is retained [@soderstrom2015learning]. Completion time is a cost to watch, not a measure of quality.

*In LTF:* `estimatedMinutes` on a lesson is a planning aid for the learner, not a target for authors to shrink. Analytics on lesson duration should be read together with delayed challenge results.
:::

### What this means for Learn to Fly

LTF is already structured on the right side of this evidence. The landing page's "How a lesson works" band (Learn, See, Try, Fly, Reflect) and its line "Read a little. Try it on the page. Fly it in the sim." describe explicit teaching followed by supported practice. Challenge files carry a `goal`, a `procedure`, `commonMistakes` and `tips`, and the `BriefTab` presents them before the learner flies. Keep all of that.

What to change. First, widgets in `WidgetFrame` default to "Explore" with no task; each explore mode should open with one sentence that sets a target and a closing question that asks for a prediction or explanation (INS-002, INS-003). Second, audit Module 0 to 2 for any instruction that amounts to unguided exploration of the sim, and replace it with a stated procedure (INS-001, INS-004). Third, build the expertise path: the objectives `Card` ("In this lesson you will") or the resume bar can offer experienced learners a route to the challenge, and the challenge result routes them back to specific lesson sections through the existing review links (INS-005). Fourth, when lesson analytics arrive, do not reward short lessons; pair duration with delayed results (INS-006). Fly mode deserves particular restraint: the learner's working memory is already loaded by the sim, so `FlyModePage` should carry short procedural cues, never open-ended prompts.

## Worked Examples, Demonstration and Fading

If beginners need guidance, the most efficient guidance is usually a solved example: a complete demonstration of the procedure, with the state at each step made visible. The research on worked examples is among the most replicated in instructional psychology, and its limits are well mapped.

### The worked example effect

Sweller and Cooper's series of five experiments in algebra first reported what became known as the worked example effect [@sweller1985use]. Students who studied worked examples needed considerably less time to process them than students who solved the same problems conventionally, and then solved similar problems faster and with fewer errors. The explanation offered is that conventional problem solving by means-ends search spends working memory on the gap between the current state and the goal, leaving little for noticing the structure of the problem; a worked example directs attention to the problem states and the moves between them.

The paper states its own boundary. Both gains were specific to problems with the same structure as the examples. The authors concluded that general rules are reflected in only a limited number of schemas for novices, and that abstraction may need considerable practice with a wider range of cases. Later work added two more boundaries: worked examples lose their advantage as learners gain expertise, and problem solving eventually wins [@kalyuga2003expertise]; and they help with complex material more than with simple material. The 1985 paper's full text was not read for this book; its results are taken from its abstract and from how later papers describe it.

Among the explicit conditions in the discovery meta-analysis, worked examples had the largest advantage over unassisted discovery, d = -0.63 [@alfieri2011does]. Kirschner and colleagues treat the worked-example effect as the key empirical pillar of their case, because in those experiments only one variable differs between groups: one studies solutions and one does not [@kirschner2006why]. Rosenshine lists models and worked examples among his ten principles and notes that studying worked examples alternately with problems to solve reduces cognitive load [@rosenshine2012principles].

::: {.rule #INS-007 grade="A"}
**Show a complete worked example of each new procedure, with the expected state at every step, before asking the learner to perform it.** The worked example effect is among the best-replicated effects in instructional research [@sweller1985use], and worked examples were the strongest explicit condition against unassisted discovery [@alfieri2011does]. The effect is largest for novices and complex material and fades with expertise [@kalyuga2003expertise].

*In LTF:* every procedure that a challenge scores (a takeoff, a level-off, a pattern leg) should appear first in a lesson as a stepped example: what you do, then what the instruments and the view should show, in order. The `g1000-pfd` and `traffic-pattern` widgets can carry these states as a sequence of frames rather than one interactive canvas.
:::

::: {.rule #INS-008 grade="B"}
**Vary the surface features across worked examples of the same procedure.** The worked-example gains in the original experiments were limited to problems of the same structure, and the authors concluded that abstraction needs exposure to a wider range of cases [@sweller1985use]. Variability of practice supports transfer [@kirschner2008ten]. One example teaches one case.

*In LTF:* show a procedure in at least two settings that differ in what the learner sees (a different runway direction, a different airport from `airports.yaml`, a different wind preset), and say in the copy what stayed the same.
:::

### Showing beats telling

Wood, Bruner and Ross's study of tutoring, the paper that introduced "scaffolding", gives a small but vivid comparison [@wood1976role]. Thirty children aged 3 to 5 were tutored individually in building a pyramid from 21 interlocking blocks. In the paper's data, "showing" succeeded more often than "telling" at every age: 40% against 18% for the 3-year-olds, 63% against 40% for the 4-year-olds, 80% against 57% for the 5-year-olds. Two further observations matter. Children imitated only acts they could already do fairly well, so a demonstration far beyond the learner's reach was not taken up. And comprehension of a solution preceded production of it: children could recognize a correct construction before they could build one.

This is a descriptive study with one tutor and a narrow sample, never a controlled test, so its numbers are illustrations, not effect sizes. But Merrill's survey of instructional theories found the same principle in every model he examined: learning is promoted when learners see new knowledge demonstrated, and his check question is whether the instruction shows rather than merely tells, with guidance that directs the learner's attention [@merrill2002first].

::: {.rule #INS-009 grade="B"}
**Demonstrate procedures rather than only describing them.** Showing beat telling at every age in the original tutoring study [@wood1976role], and demonstration is one of the principles that every major instructional theory shares [@merrill2002first]. The first source is small and descriptive, the second a consensus of theorists, hence grade B.

*In LTF:* where a procedure involves a change the learner will see in the sim (the nose position, the needle movement, the view on final), the lesson should show it: a short `video` block, a sequence of annotated images, or a widget stepping through states. A paragraph that describes motion is the weakest option.
:::

::: {.rule #INS-010 grade="B"}
**Ask learners to recognize a correct state before asking them to produce it.** Comprehension of a solution preceded production in the tutoring study [@wood1976role]; the revised taxonomy distinguishes recognizing (Remember) from executing (Apply) as different cognitive processes [@krathwohl2002revision]. A recognition check confirms that the learner knows what the target looks like before effort is spent trying to hit it.

*In LTF:* before a challenge asks the learner to fly a stabilized approach, a `quiz` block or a widget in "Quiz me" mode should show two or three panel states and ask which one is correct and why.
:::

### From full support to none

A single worked example followed by a full problem is an abrupt change. The four-component model treats support as a continuum: from fully reasoned case studies, through partially worked examples that the learner completes (the "completion strategy"), to conventional tasks with no support [@kirschner2008ten]. It also separates two kinds of help. Support is product-oriented: the givens, the goal, a partial or full solution. Guidance is process-oriented: how to approach the problem. Both diminish with expertise. Each class of tasks begins with high-support tasks, continues with lower support and ends with conventional tasks.

The expertise-reversal review reports that Renkl and colleagues found gradual fading from examples into problems beat an abrupt switch [@kalyuga2003expertise]. It also reports a finding about mental rehearsal: students told to imagine a procedure learned more than students who studied worked examples only, but only if they already had the prerequisite knowledge; for less knowledgeable students, imagining had a negative effect. Merrill's application principle calls for a varied sequence of problems with feedback and "gradually diminished coaching" [@merrill2002first]. Rosenshine notes that worked examples studied alternately with problems reduce load, and that scaffolds should be withdrawn gradually as competence grows [@rosenshine2012principles].

::: {.rule #INS-011 grade="B"}
**Fade from worked example to completion task to independent task in steps, not in one jump.** Gradual fading beat an abrupt switch [@kalyuga2003expertise]; the four-component model prescribes the same continuum from fully worked cases to conventional tasks [@kirschner2008ten]; Merrill's principles call for diminishing coaching [@merrill2002first].

*In LTF:* a module's challenges should step down in support. The first challenge for a skill lists every step in `procedure` and shows the `Steps` checkboxes in `FlyPanel`; the second gives a shorter procedure with key steps blank for the learner to recall; the last gives only the `goal` and the scoring criteria.
:::

::: {.rule #INS-012 grade="B"}
**Annotate the reason for each step in a worked example, not only the action.** The four-component model distinguishes product support (what the solution is) from process guidance (how and why to approach it) and starts each task class with fully reasoned cases [@kirschner2008ten]; prompts to explain were among the supports that made discovery work [@alfieri2011does]. A bare list of actions supports copying but not adaptation when the case changes.

*In LTF:* challenge `procedure` steps are actions. Where the reason is not obvious, the matching lesson section should give it in one clause, and the `tips` list can carry the why for the trickiest step.
:::

::: {.rule #INS-013 grade="B"}
**Use mental rehearsal ("picture what you will see") only after the learner has handled the material.** Imagining a procedure helped learners who had the prerequisite knowledge and hurt those who did not [@kalyuga2003expertise]. The evidence comes from a small number of experiments by one group.

*In LTF:* a "chair-fly it" prompt belongs at the end of a lesson that has already shown the procedure, or in the `BriefTab` of a second attempt, never as the introduction to a new procedure.
:::

### What this means for Learn to Fly

The product has the raw material for strong worked examples: hand-built SVG instruments in `src/features/widgets/`, a `checklist` block that renders the Checklist Runner, `video` and `image` blocks, and challenge files that already carry a step-by-step `procedure`. What it lacks is a deliberate example format. Today a lesson section is prose, perhaps followed by a widget in "Explore" mode; the learner is told how a procedure works but rarely shown its states in order.

Build a "worked example" pattern for `LessonRenderer`: a numbered sequence in which each step pairs the action with the expected indication, drawn with the existing instrument primitives (`Gauge`, `Tape`) or annotated screenshots, and a one-clause reason (INS-007, INS-012). Pair it with a recognition check in `QuizBlock` before the challenge (INS-010). Show each core procedure in at least two settings over the course (INS-008). Then fade across the module's challenges, using what the challenge schema already supports: a full `procedure` first, a shorter one next, and a goal-only final attempt (INS-011). Keep mental rehearsal prompts for review, not introduction (INS-013). None of this requires new aviation facts; every indication shown must come from `content/aircraft.yaml` tokens or a verified source, as the project rules require.

## Scaffolding: What a Tutor Does

"Scaffolding" is one of the most used and least specified words in education. Its origin is a specific, modest paper, and that paper's account of what a tutor actually does is more useful to a software designer than the later general usage.

### The original definition

Wood, Bruner and Ross defined scaffolding as the adult controlling those elements of a task that are initially beyond the learner's capacity, so that the learner can concentrate on and complete only the elements within his or her range of competence [@wood1976role]. They went further than assisted completion: the process could lead the learner to develop competence of their own. The paper describes itself as an exercise in problem-finding: an observational description of one tutor (the third author) working with thirty children aged 3 to 5 on a block-building task, following a general plan with preset rules about how much help to give. Two independent scorers agreed on 94% of a pool of coded acts.

The developmental findings frame the functions. Unassisted success rose steeply with age: over 75% of the 15 construction acts needed for the pyramid were unassisted for 5-year-olds, against 50% for 4-year-olds and 10% for 3-year-olds, and none of the 3-year-olds could put four blocks together correctly. The same tutor plan produced very different interactions depending on what the child could already do. A scaffold, in this account, is not a fixed amount of help but help calibrated to the gap.

The paper is small, descriptive and narrow in age, place and background, and it does not invoke Vygotsky's zone of proximal development, with which the term later fused. One secondary essay argues that the concept has since been stretched into mechanical rules ("more help after failure, less after success") and that later uses neglect the motivational functions; that is opinion, but it is a fair warning against reducing the six functions to a hint button. The meta-analytic support for scaffolded learning comes from elsewhere: enhanced discovery, which includes scaffolding, beat comparison conditions [@alfieri2011does].

### The six functions

The paper's lasting contribution is its list of six things the tutor did. Each translates into a design question.

#### Recruitment

The tutor enlists the learner's interest in and adherence to the task requirements. In software this is the opening of a lesson or challenge: a concrete reason to attempt the task now. The ARCS model treats the same need under attention and relevance (see Designing for Motivation: the ARCS Model).

#### Reduction in degrees of freedom

The tutor simplifies the task by reducing the number of constituent acts, so the learner can recognize whether a step has fitted, while the tutor fills in the rest. This is the most directly designable function. In a flight task it means fixing variables the learner is not yet controlling: start already airborne, already trimmed, in calm air, with one control to manage, and release the others as the learner stabilizes. The load account of complex skill learning reaches the same prescription from a different literature: when processing demands are very high, practice conditions that reduce the load help, and flying meets every criterion of a complex skill in that account (it cannot be mastered in one session, has many degrees of freedom and is ecologically valid) [@wulf2002principles].

#### Direction maintenance

The tutor keeps the learner pursuing the objective, partly through "zest and sympathy", and by making it worthwhile to risk the next step. In a long task the goal drifts out of mind; the design response is to keep it visible.

#### Marking critical features

The tutor accentuates the relevant features and interprets the discrepancy between what the learner produced and a correct production. Clark's review of media attributes contains a parallel finding: in a partial replication by Bovy, a static isolation of the relevant cues worked even better than zooming or irising effects, suggesting that what mattered was isolating the cue, not the animation [@clark1983reconsidering].

#### Frustration control

Problem solving should be less stressful with a tutor than without, the authors note, with the main risk being too much dependency on the tutor. Software cannot offer sympathy, but it can make failure cheap and recoverable.

#### Demonstration

The tutor models an idealized version of the act, which may complete or explain a solution the learner partly executed. Showing beat telling at every age in the study, and children imitated only acts already within reach (see Worked Examples, Demonstration and Fading).

::: {.rule #INS-014 grade="B"}
**In a learner's first attempt at a skill, fix every variable the learner is not yet meant to control, and release them one at a time in later attempts.** Reduction in degrees of freedom is the core scaffolding function [@wood1976role]; for complex skills with very high load, reducing load during practice helps [@wulf2002principles]. The tutoring evidence is descriptive and the load account comes from a narrative review of motor-learning experiments, so the grade is B.

*In LTF:* a first challenge for a skill should use an air start, calm weather (`WX_CALM`), the `training` assistance preset and as few `criteria` as the skill allows. Later challenges add the ground phase, wind, traffic or `randomEvents`, one at a time, and the `BriefTab` says which variable is new.
:::

::: {.rule #INS-015 grade="C"}
**Keep the goal of the current task visible throughout the performance.** Direction maintenance is one of the six tutoring functions [@wood1976role], and keeping the learner oriented to where the work is headed is the first item of the WHERETO checklist [@wiggins2005understanding]. No experiment tests this rule directly.

*In LTF:* `FlyModePage` already shows the challenge `goal` in `text-2xl` under the title; keep it pinned while the `Steps` list scrolls, and in `FlyPanel` (normal size) show the goal above the steps rather than only in the `BriefTab`.
:::

::: {.rule #INS-016 grade="B"}
**Mark the one cue that matters, and show the gap between the learner's result and the target.** Marking critical features and interpreting discrepancies is a tutoring function [@wood1976role]; isolating the relevant cue was what made visual attributes effective [@clark1983reconsidering]. Animation adds nothing if the cue is not isolated.

*In LTF:* in widgets, highlight the single instrument or region a step concerns (using the `accent-line` color on the overlay, never the fixed instrument colors) and dim the rest. In the `ResultView`, a criterion that was not met should say how far off the learner's self-reported result was, in the terms of the criterion's own tiers.
:::

::: {.rule #INS-017 grade="C"}
**Make failure cheap: a proportionate message, the reason, and a one-step retry.** Frustration control is a tutoring function, with dependency as its main risk [@wood1976role]; avoiding discouraging or self-esteem-threatening messages is one of the feedback guidelines [@shute2008focus]. This is craft guidance from descriptive and review sources.

*In LTF:* the `ResultView` message "Not passed yet: a required criterion was not met. Review it and try again." is the right register. The "Fly again" action should be adjacent to the review link, and the `FlyPanel` state should reset without loss of the learner's notes.
:::

### Fading and dependency

Every scaffold carries the risk the original authors named: dependency. The guidance hypothesis in motor learning makes the same point with experimental support. Feedback given too often guides performance during practice, but learners can come to depend on it, which degrades learning as measured when it is withdrawn [@salmoni1984knowledge]. The four-component model builds fading into its structure: procedural information is given just in time and "quickly fading as expertise grows", and support diminishes within each class of tasks [@kirschner2008ten]. Rosenshine names the tools explicitly. Scaffolds include modeling, thinking aloud, prompts, and tools such as cue cards and checklists, and they are withdrawn gradually as competence grows [@rosenshine2012principles]. His observation from classroom research is that long explanations given at students' desks during independent practice signaled that guided practice had been insufficient: a scaffold needed late is a sign of a missing earlier step.

The caution for a flight course is that the complex-skill evidence does not support withholding help from beginners. In Wulf and Shea's ski-simulator work, learners given concurrent feedback on every trial learned at least as well as those given reduced feedback, and the best summary length was shorter for more complex tasks [@wulf2002principles]. Fading should follow the learner's stability, not a schedule.

::: {.rule #INS-018 grade="B"}
**Plan the removal of every scaffold at the moment you add it, and remove it when the learner's performance is stable.** Guidance that is never withdrawn produces dependency [@salmoni1984knowledge] and becomes redundant for learners who no longer need it [@kalyuga2003expertise]; design models prescribe fading support within each class of tasks [@kirschner2008ten]. For complex skills, early support should stay rich [@wulf2002principles].

*In LTF:* every support a challenge provides (the `Steps` list, `tips`, the `training` assistance preset, a checklist shown in `FlyPanel`) should have a named later challenge in the module that drops it. A challenge author should be able to answer "which challenge removes this?"
:::

::: {.rule #INS-019 grade="C"}
**Use checklists and cue cards as scaffolds during performance, and say that they are aids to be outgrown where the real-world practice is to keep using them.** Checklists and cue cards are named scaffolds in Rosenshine's synthesis [@rosenshine2012principles], and procedural information is best given just in time as job aids [@kirschner2008ten]. Some aviation checklists are not scaffolds at all but permanent working practice, and Part XVI, Skill, Simulation and the Cockpit, covers their design; the distinction must be stated so that fading a learning aid is never read as dropping a checklist.

*In LTF:* the `checklist-runner` widget and the reference checklists at `/reference/checklists/:slug` are permanent tools; the `Steps` list in `FlyPanel` is a learning scaffold. Label them differently and fade only the second.
:::

### What this means for Learn to Fly

The challenge schema is already a scaffold specification. `setup` controls the degrees of freedom (`startState`, `weatherPreset`, `assistance`, `aiTraffic`, `atc`), `procedure` is the demonstration in text, `commonMistakes` marks critical features, `tips` maintain direction, and the `ResultView` with its review links handles frustration control and correction. The gap is that nothing in the content model makes the fading explicit. Add a short authoring field or convention in each module (for example a line in `modules.yaml` or a note in the challenge README) that lists which supports each challenge adds or removes, so a reviewer can see the staircase (INS-014, INS-018).

In the interface, the Fly tab and `FlyModePage` should keep the goal visible (INS-015) and distinguish the learning scaffold (the `Steps` checkboxes) from the permanent checklist (INS-019). Widgets should mark the one relevant cue with the accent overlay and leave the fixed instrument colors untouched (INS-016). The `ResultView` should keep its calm failure message and put "Fly again" beside the review link (INS-017). Do not build a generic "hint" button that gives more help after each failure; the original account of scaffolding is about calibrating help to the gap, and the product already has a better mechanism in the criterion-level review link.

## Whole Tasks and the Four-Component Model

Flying a circuit is not a list of separate skills performed one after another. Attitude, power, lookout, radio, checklist and navigation run at the same time and interact. The models in this chapter start from that fact: they design instruction around whole tasks and add the parts as support, rather than teaching parts and hoping they combine.

### Four components

Kirschner and van Merriënboer's chapter gives a compact statement of the four-component instructional design model (4C/ID), developed for programs that teach complex cognitive skills over weeks to years [@kirschner2008ten]. Complex learning, in their definition, integrates knowledge, skills and attitudes, coordinates qualitatively different constituent skills, and often requires transfer to daily life or work. Atomistic design (small objectives taught separately) causes compartmentalization, fragmentation into part-task sequences, and what they call the transfer paradox. The four components of a 4C/ID blueprint are these.

| Component | What it is | When it appears |
| --- | --- | --- |
| Learning tasks | Authentic whole tasks in easy-to-hard classes | Throughout, support fading within each class |
| Supportive information | Mental models and strategies for non-routine aspects | Before a task class, kept available |
| Procedural information | Step-by-step how-to for routine aspects | Just in time, fading quickly |
| Part-task practice | Extra repetition of selected routine aspects | Only after meeting them in a whole task |

Learning tasks are organized into task classes from easy to difficult. Within each class, support diminishes from high to none, and practice is highly variable. Learners move to the next class when they reach prespecified performance standards. Supportive information explains how the domain is organized (mental models) and how to approach its problems (cognitive strategies); it serves the non-recurrent aspects of the task, where reasoning is needed. Procedural information serves the recurrent, routine aspects, and job aids or performance support can deliver it. Part-task practice builds automaticity on selected recurrent aspects, and begins only after the aspect has been met in a meaningful whole task. The ten design steps map onto these components, from designing learning tasks to designing part-task practice.

The evidence status is limited. The chapter is by the model's authors, and independent evidence on whole 4C/ID programs was not read for this book; a 2021 meta-analysis exists but was seen only in a search summary, so no effect sizes are claimed. The model rests on cognitive load theory and skill acquisition research, and it shares that tradition's critics. Its components can each be tested; the whole design has been tested less.

### Pebble in the pond

Merrill's companion design process reaches the same structure from a different starting point [@merrill2002first]. Merrill describes it as a version of 4C/ID. The "pebble" is a whole task; the ripples are a progression of such tasks of increasing complexity, the component knowledge and skills each needs, the instructional strategy, and the interface. Strategies combine four interaction modes with the knowledge components: tell, ask, show and do. His worked example is a spreadsheet course that presents a whole problem, teaches the components it needs, shows the problem worked, then asks learners to complete later problems with less and less guidance, until final authentic tasks serve as the assessment. Merrill criticizes specifying abstract objectives early, saying the whole tasks should be specified first. His principles share the evidence status of all consensus syntheses: agreement across theories that share many authors and roots, not a test.

### The transfer paradox and variability

The four-component chapter explains the transfer paradox with an example: learning to diagnose three error types. Teaching them blocked (all of the first, then all of the second, then all of the third) is efficient during training but yields low transfer, because learners build knowledge specific to each type. A random order takes more time and effort but builds general knowledge and better diagnosis of unseen errors [@kirschner2008ten]. The authors cite evidence that variability of practice benefits transfer for simple and complex tasks.

Rohrer and Taylor's experiments show the pattern with numbers [@rohrer2007shuffling]. Students learned to find the volumes of four unfamiliar solids. During practice, those who did problems blocked by type scored higher than those who did them mixed (89% against 60%). On a test a week later the pattern reversed: mixed 63%, blocked 20%. The samples were small and the tasks artificial, so the effect size is likely inflated, but the reversal is the point: blocked practice looks better during learning and worse afterward. Mixing forces the learner to choose which procedure applies, not just execute the one just taught. Part XIV, The Science of Learning, treats interleaving and spacing in depth; here the consequence is structural.

### When parts help and when they hurt

Wickens, Hutchins, Carolan and Cumming's meta-analysis of 37 transfer studies tested the two common ways of making a hard task easier to learn: splitting it into parts and starting easy then getting harder [@wickens2013effectiveness]. Part-task training generally produced negative transfer when the parts had to be performed concurrently in the whole task, but not when they were performed in sequence. Variable-priority training, in which the learner practices the whole task while the emphasis shifts between components, was successful. Increasing-difficulty training worked when the increases were adaptive, and not when difficulty rose in fixed steps. For both strategies, experienced learners benefited less or suffered more. The studies were mostly laboratory and simulated tasks, and the abstract gives no effect sizes, so none are quoted. The part-task result agrees with Wightman and Lintern's earlier review of segmentation and fractionation in tracking and manual control.

::: {.rule #INS-020 grade="B"}
**Build each module around whole flight tasks, grouped into classes from easy to hard, with the learner moving up a class on meeting a stated standard.** Whole-task design with task classes is the core of the four-component model [@kirschner2008ten] and of Merrill's pebble-in-the-pond process [@merrill2002first]; gating on performance standards has meta-analytic support from mastery learning [@kulik1990effectiveness]. The model as a whole has had little independent testing, so the grade is B.

*In LTF:* a module's challenges are its learning tasks. `difficulty` should describe position within the class, and the challenge list on `ModulePage` should show the classes ("calm air, airborne start", "from the runway", "with wind") rather than one flat list.
:::

::: {.rule #INS-021 grade="B"}
**Within each class of tasks, step support down from a demonstrated case to a supported attempt to an unsupported attempt, and treat the unsupported attempt as the assessment.** The four-component model prescribes high-support tasks first, then lower support, then conventional tasks [@kirschner2008ten]; Merrill uses final authentic tasks as the assessment [@merrill2002first].

*In LTF:* in each class, the last challenge carries no `procedure` steps in `FlyPanel`, only the `goal` and `criteria`, and the module's "What you'll be able to do" `Card` on `ModulePage` links to it as the proof.
:::

::: {.rule #INS-022 grade="B"}
**Vary the conditions across tasks in a class (airport, runway, wind, time of day, start state) instead of repeating one scenario until it is perfect.** Variability of practice supports transfer [@kirschner2008ten]; mixed practice looked worse during training and was far better a week later [@rohrer2007shuffling]; performance during practice is an unreliable index of learning [@soderstrom2015learning].

*In LTF:* the presets in `presets.yaml` and the cards in `airports.yaml` make variation cheap. A skill should not be assessed only at the airport where it was taught, and the `BriefTab` should say what is different from the last attempt.
:::

::: {.rule #INS-023 grade="C"}
**Keep supportive information (why it works, how the parts relate) separate from procedural information (what to do now), and place each where it is needed.** The four-component model assigns them different timing: supportive information before a task class and always available, procedural information just in time and fading [@kirschner2008ten]. This is a design model's prescription, graded C.

*In LTF:* lessons carry supportive information; the `BriefTab` and `FlyPanel` carry procedural information. Fly mode should contain only procedure and goal, never an explanation of aerodynamics; a "why" link from a step can open the lesson section in another tab.
:::

::: {.rule #INS-024 grade="A"}
**Do not split sub-skills that must be done at the same time into separate drills; practice the whole task and shift the emphasis between parts.** Part-task training produced negative transfer when the parts were concurrent in the whole task, while whole-task practice with variable priority succeeded [@wickens2013effectiveness]. The evidence is a meta-analysis of 37 transfer studies, mostly laboratory and simulated tasks.

*In LTF:* holding altitude and holding heading are concurrent; teach them in one challenge, and vary the emphasis in the `BriefTab` ("This time, put your attention on altitude") rather than building an altitude-only drill and a heading-only drill that never meet.
:::

::: {.rule #INS-025 grade="B"}
**Use part-task drills only for routine sub-skills performed in sequence, and only after the learner has met the sub-skill inside a whole task.** The four-component model places part-task practice after the meaningful whole task [@kirschner2008ten]; part-task training did not harm transfer when the parts were sequential in the real task [@wickens2013effectiveness].

*In LTF:* a drill such as reading a speed off the airspeed tape, or ordering a checklist with an `order` quiz, belongs after the lesson and challenge in which the learner used it in flight, as review.
:::

::: {.rule #INS-026 grade="B"}
**Specify the whole task a module teaches before writing its component objectives.** Merrill argues that whole tasks should be specified first and objectives derived from them [@merrill2002first]; the four-component model starts its ten steps with designing learning tasks [@kirschner2008ten]. Backward design reaches a compatible conclusion when the whole task is the assessed performance (see Backward Design, Objectives and Alignment).

*In LTF:* each module in `modules.yaml` should be traceable to one or two capstone challenges (as Module 8 already is, with a local checkride and a cross-country capstone), and each lesson's `objectives` should name the part of that task it serves.
:::

### What this means for Learn to Fly

LTF's curriculum is already whole-task in spirit: modules culminate in challenges such as `c4-7-three-circuit-session`, `c8-1-local-checkride` and `c8-2-cross-country-capstone`, and lessons attach to challenges through `challenges` and `lessons` fields. The four-component model asks for three additions.

First, make task classes visible. The `ModulePage` and `CurriculumMap` list challenges flatly; grouping them by class (with one sentence each on what changes) shows the learner the staircase and gives authors a frame for `difficulty` (INS-020, INS-021). Second, separate the two kinds of information by surface: lessons for the why, the `BriefTab` and `FlyPanel` for the how, and `FlyModePage` for only the how (INS-023). Third, plan variation deliberately: the presets and airport cards exist, so a skill's later challenges should change the airport, wind or start state, and review practice should mix challenge types instead of repeating the one just learned (INS-022, and Part XIV on interleaving). Avoid isolated drills for concurrent skills (INS-024); keep drills for routine, sequential parts after they have appeared in flight (INS-025).

## Backward Design, Objectives and Alignment

A course can be well written lesson by lesson and still fail, because what it teaches, what it asks the learner to do and what it checks do not line up. The tools in this chapter (backward design, behavioral objectives and the revised taxonomy of objectives) are authoring disciplines for keeping those three aligned. None of them is an instructional method with an effect size; they are ways of checking a design, and they are graded accordingly.

### Start from the evidence of learning

Wiggins and McTighe's *Understanding by Design* argues that curriculum design should work backward from the results wanted [@wiggins2005understanding]. Designers first decide what learners should understand and be able to transfer, then what evidence would show it, and only then what to teach. They name two "twin sins" of traditional design: activity-oriented teaching, "hands-on without being minds-on", and "coverage", marching through content without a guiding purpose. Their target is understanding as shown by transfer: learners using what they learned, on their own, in a new situation.

The three stages are: identify desired results (what learners should know, understand and do; the enduring understandings and transfer goals; the essential questions); determine acceptable evidence, thinking "like an assessor" before designing lessons, with performance tasks that apply learning to new, authentic situations plus quizzes, observations and work samples; and plan the learning experiences that equip learners for that evidence. The test is alignment: what Stage 1 names must be what Stage 2 assesses and Stage 3 teaches. Because there is always more content than time, Stage 1 forces priorities. The stages are a logic of design, not necessarily the order in which work happens.

Two further tools come from the book. The six facets of understanding (explain, interpret, apply, shift perspective, empathize, self-assess) are prompts for designing assessment, not all used each time. The WHERETO checklist reviews the learning plan: W, learners know where the unit is headed and why; H, hook and hold attention; E, equip learners with experiences, tools and knowledge; R, opportunities to rethink, reflect and revise; E, evaluation and self-assessment; T, tailoring to individual needs; O, organization for depth rather than coverage. The book flags its own "misconception alert": WHERETO and the facets are analytic tools for checking a design, not recipes for building one. The W element also means learners should see their final performance obligations and the judging criteria early; the book's example distributes rubrics on the first day. Performance tasks are culminating performances for a unit, not daily lessons; daily lessons build knowledge and skills, as practice does in athletics.

The evidence is craft and consensus. A search found no rigorous meta-analysis of the framework's effectiveness, and a compilation of studies on an author's site is promotional and reports no effect sizes. A conceptual critique argues that objectives-first, means-ends logic can narrow what a course offers. Fixing the assessment before the activities has strong logical appeal, but it is a design principle, not a tested intervention. Merrill's insistence on specifying whole tasks first is compatible if the whole task is the Stage 2 performance [@merrill2002first].

::: {.rule #INS-027 grade="C"}
**For each module, write the transfer goal and the culminating challenge that proves it before writing or revising its lessons.** Backward design puts the evidence of learning before the plan for teaching [@wiggins2005understanding]; Merrill uses final whole tasks as the assessment [@merrill2002first]. This is a design discipline without direct experimental support.

*In LTF:* a module's "What you'll be able to do" `Card` on `ModulePage` is its Stage 1; its final challenge is its Stage 2. Write and agree both before lesson prose, and check every lesson against them.
:::

::: {.rule #INS-028 grade="C"}
**Cut or move any lesson content that does not prepare the learner for an assessed performance.** Content without a link to the performance is "coverage", one of the twin sins of design [@wiggins2005understanding]. Interesting material that serves no performance belongs in optional depth, not in the main path.

*In LTF:* the "Go deeper" resource cards and the "Bonus" badge already provide a place for enrichment. Lesson sections that no quiz, widget task or challenge criterion draws on are candidates for that space or for the reference section.
:::

::: {.rule #INS-029 grade="C"}
**Show the learner the criteria for a performance before they attempt it.** The W element of WHERETO asks that learners see their performance obligations and judging criteria early [@wiggins2005understanding]; stating evaluation criteria is a confidence strategy in ARCS [@keller1987development]. Both are craft frameworks.

*In LTF:* the `BriefTab` already shows "How you'll be scored" as a `Table` before "I'm set up, start flying". Keep it there, and repeat the required criteria in compact form at the top of `FlyModePage`, where the learner looks during the flight.
:::

### Objectives: what helps and what does not

Mager's influential scheme says a useful objective has three parts: an observable performance, the important conditions under which it occurs (what the learner will and will not be given), and a criterion, the acceptable level of speed, accuracy or quality [@duchastel1972effects]. Keller's motivational objectives follow the same form of behavior, condition and criterion [@keller1987development]. As a tool for authors this is powerful: an objective in three-part form can be tested, and a vague one ("understand trim") cannot.

Whether showing objectives to learners helps them learn is a separate, empirical question. Duchastel and Merrill reviewed 28 studies of exactly that and found the evidence mixed and complex [@duchastel1972effects]. Advance knowledge of objectives improved posttest performance in five of ten studies and retention in two of three. Only two of seven studies found an interaction with the type of learning: in one, objectives helped knowledge acquisition but not comprehension; in the other, they interfered with a problem-solving task but not with a discrimination task. Interactions appeared with reasoning ability, personality and state anxiety. Paired with full learner control, objectives reduced learning time; alone, they had no effect or increased it.

The authors treat objectives as orienting stimuli, like questions and advance organizers. Their proposed functions are directing attention to relevant rather than incidental content, organizing the material, supporting self-management of time, giving the learner a standard to compare against, and reinforcing progress as learners see themselves mastering objectives. They also list reasons for the null results: students may ignore objectives, objectives vary in specificity and number, and a list so long and detailed that it overwhelms defeats its own purpose. The review covered only one of three functions of objectives (telling students); it leaves open their value for planning and evaluation. The studies were small and short, many unpublished.

::: myth
**"Listing the learning objectives at the top of a lesson improves learning."** A review of 28 studies found that telling learners the objectives improved posttest scores in only half of the relevant studies, interacted unpredictably with the type of learning and the learner, and could be defeated by long or detailed lists [@duchastel1972effects]. Objectives are reliably useful to authors for planning and assessment; their display to learners is a weaker and less predictable intervention.
:::

::: {.rule #INS-030 grade="C"}
**Write every authoring objective with a performance, its conditions and a criterion, and take the criterion's values only from a cited source.** The three-part form makes objectives testable [@duchastel1972effects]; it is craft authority rather than experimental evidence. For aviation content the criterion is a fact and falls under the project's sourcing rule.

*In LTF:* the challenge `criteria`, with `tiers`, `required` and `weight`, are the criterion part. Lesson `objectives` in front matter should name the performance and the conditions, and point to the challenge criterion rather than inventing a tolerance in lesson prose.
:::

::: {.rule #INS-031 grade="B"}
**Keep the learner-facing list of objectives short, phrased as what the learner will be able to do, and visibly connected to the checks that follow.** Showing objectives has inconsistent effects, and overlong lists can overwhelm [@duchastel1972effects]; their plausible benefits (attention, a standard to compare against) depend on learners seeing that the objectives are used. The grade reflects a mixed narrative review.

*In LTF:* the lesson objectives `Card` ("In this lesson you will") should hold two or three items. Each item can link to the quiz or challenge that checks it, and the completion panel can repeat them as a self-check before "Mark lesson complete".
:::

::: {.rule #INS-032 grade="C"}
**Replace vague verbs (know, understand, learn about, be familiar with) with observable actions (identify, set, predict, fly, explain).** An objective must describe an observable performance to be testable [@duchastel1972effects]; the revised taxonomy names 19 specific cognitive processes, each an action [@krathwohl2002revision].

*In LTF:* the existing objective "Use the 'attitude plus power equals performance' relationship" in `l2-2-attitude-flying-and-trim` is close; "Predict how airspeed changes when you raise the nose at constant power" would be testable by a `QuizBlock`. Add a validator warning in `content:validate` for objectives that start with "Know" or "Understand".
:::

### The revised taxonomy as a review tool

The original Taxonomy of Educational Objectives (1956) began as a way for faculty at different universities to share test items measuring the same objective [@krathwohl2002revision]. Analyses of curricula and tests with it repeatedly showed a heavy emphasis on recall. The 2001 revision, explained by Krathwohl, splits the old single dimension into two. The knowledge dimension (the noun in an objective) has four types: factual (terminology, specific details), conceptual (classifications, principles, theories and models), procedural (subject-specific skills, techniques and criteria for choosing procedures) and metacognitive (strategic knowledge, knowledge about tasks, self-knowledge). The cognitive process dimension (the verb) has six categories: Remember, Understand, Apply, Analyze, Evaluate and Create, with 19 specific processes such as recognizing, inferring, executing, differentiating, checking and planning. The revision emphasizes the 19 processes over the six headings.

Placing each objective in the cell where its noun and verb meet produces a Taxonomy Table for a unit, which can reveal, for example, that every quiz item tests remembering. The hierarchy was relaxed in the revision so that categories can overlap, and Understand was broadened so that explaining counts as more complex than executing. Krathwohl concedes the overlap, which weakens the original's claim of a strict cumulative hierarchy. Wiggins and McTighe caution that the taxonomy judges the cognitive difficulty of assessment items, not a teaching sequence [@wiggins2005understanding]. The taxonomy classifies objectives; it has no effect sizes because it is not a method.

::: myth
**"Bloom's taxonomy is a sequence: teach remembering first, then understanding, then application, and only then the higher levels."** The taxonomy was built to classify objectives and test items, its revision relaxed the cumulative hierarchy so that categories overlap [@krathwohl2002revision], and backward design explicitly warns against reading it as a prescribed teaching order [@wiggins2005understanding]. A flight lesson can ask a learner to apply and evaluate on the first day, with support.
:::

::: {.rule #INS-033 grade="C"}
**Classify each objective by knowledge type and cognitive process, and make each check item test the same cell as the objective it serves.** The Taxonomy Table exists to check the congruence of objectives, activities and assessment [@krathwohl2002revision]; alignment between what is named, taught and assessed is the core test of backward design [@wiggins2005understanding].

*In LTF:* a procedural objective at Apply ("set the attitude and power for a climb") is not checked by a `single` quiz asking for a definition; it is checked in a challenge or a widget task. A conceptual objective at Understand fits a prediction question. Authors can tag each `quiz` and challenge criterion with its cell in a comment.
:::

::: {.rule #INS-034 grade="C"}
**Audit each module for an excess of Remember-level checks and add items at Understand, Apply and Evaluate.** Analyses with the original taxonomy repeatedly found curricula and tests dominated by recall [@krathwohl2002revision]; process questions ("explain how you found the answer") are a mark of effective teaching in classroom research [@rosenshine2012principles].

*In LTF:* `npm run content:stats` already reports questions per lesson. Extending it to count quiz items by the author's taxonomy tag would let a reviewer see the balance per module. Metacognitive objectives (judging your own approach) fit the `debriefQuestions` in each challenge.
:::

### What this means for Learn to Fly

LTF's content model is unusually well aligned already. Lessons carry `objectives` and `challenges`; challenges carry `lessons`, `criteria` and per-criterion `reviewLink`s back to lesson sections; the `ResultView` uses those links. That is backward design in data. The work is to make it a habit and a check.

Make the module the unit of design: agree each module's "What you'll be able to do" items and final challenge before lesson prose (INS-027), and mark lesson content that no check draws on as optional depth (INS-028). Keep the "How you'll be scored" table before the flight and repeat the required criteria in Fly mode (INS-029). Keep the objectives `Card` short and connected to checks, rewriting vague verbs (INS-031, INS-032). Add a light taxonomy tag to quiz items and criteria and extend `content:stats` so a reviewer can see when a module only tests recall (INS-033, INS-034). Throughout, tolerances belong in challenge `criteria` from cited sources, never in lesson objectives written from memory (INS-030).

## The Anatomy of a Lesson

Three widely used models describe what a single lesson should contain: Gagné's nine events of instruction, Merrill's first principles and Rosenshine's ten principles of instruction. They come from different traditions (information-processing theory, a survey of design theories, and classroom research plus cognitive science) and they converge on a short sequence: activate, show, practice with feedback, check, apply, review. None has been tested as a whole package in a controlled experiment, so each is best used as a checklist for reviewing a lesson rather than a template that every lesson must fill.

### Gagné's events

Gagné's theory, as described in open secondary accounts (the book itself was not read for this Part), links two ideas: different kinds of learning outcome need different conditions, and instruction should support the internal processes that information-processing psychology describes [@gagne1985conditions]. The outcomes are classified into five categories: intellectual skills (procedural knowing, built as a hierarchy from discrimination through concepts and rules to problem solving), verbal information (knowing that something is the case), cognitive strategies (the learner's management of attention, learning and thinking), motor skills, and attitudes.

Instruction is then arranged as nine events, each said to support an internal process: gain attention; inform learners of the objective; stimulate recall of prior learning; present the content; provide learning guidance; elicit performance; provide feedback; assess performance; enhance retention and transfer. The sources group them as preparation (the first three), instruction and performance (the next four) and assessment and transfer (the last two), and one notes that not every lesson needs all nine. The criticisms in the same sources: the sequence can read as rigid and linear and teacher-centered, it fits open-ended fields poorly, it is lesson-level with little about spacing practice across weeks, and real objectives often straddle categories. Empirical support is mainly indirect, from research on the component processes; no controlled test of the full sequence was found.

### Merrill's first principles

Merrill surveyed instructional design theories for prescriptive principles they share despite their different vocabularies [@merrill2002first]. He found five: learning is promoted when learners engage in solving real-world problems; when existing knowledge is activated as a foundation; when new knowledge is demonstrated; when learners apply it; and when they integrate it into their own world. He showed the principles in seven representative models. The companion article claims that learning is promoted in direct proportion to how fully a program implements them, that they work in any delivery system, and that they are prescriptions rather than descriptions of how people learn. The check questions are concrete: is the content set in a real-world problem, with a progression of problems; does the demonstration show rather than tell, with guidance; does application give a varied sequence of problems with feedback and gradually diminishing coaching; and are there ways to transfer the knowledge to everyday use, to demonstrate it publicly, reflect on it and create new uses. Agreement among theories that share roots is an argument from consensus, not a test; notably, the critics of minimal guidance cite Merrill as an example of models that stress guidance [@kirschner2006why].

### Rosenshine's ten principles

Rosenshine distilled ten principles from three bodies of work: cognitive science on working-memory limits, classroom studies of "master teachers" whose classes made the largest achievement gains, and research on cognitive supports for complex tasks [@rosenshine2012principles]. The principles: begin with a short review of previous learning; present new material in small steps with practice after each; ask a large number of questions and check the responses of all students; provide models; guide practice; check for understanding; obtain a high success rate; provide scaffolds for difficult tasks; require and monitor independent practice; and engage students in weekly and monthly review.

Several come with specific findings. Effective teachers spent five to eight minutes on review at the start, and in one elementary math experiment teachers trained to spend eight minutes a day on review produced higher scores. The most successful teachers spent more than half of class time lecturing, demonstrating and asking questions, and asked more process questions; a training experiment that increased factual and process questions during guided practice raised scores. Independent practice should use the same material as guided practice. Review should include overlearning, practice beyond first mastery to automaticity. The master-teacher strand is correlational process-product research from the 1970s and 1980s, mostly in basic math and reading, so it shows what effective teachers did rather than proving cause; some principles have experimental support within the article. The article's suggested reading on working memory, Miller's "seven plus or minus two", should not be turned into an interface rule of seven items.

### Where the three agree

| Step | Gagné | Merrill | Rosenshine |
| --- | --- | --- | --- |
| Prepare | Attention, objective, recall | Activation | Daily review |
| Show | Content, guidance | Demonstration | Small steps, models |
| Practice | Performance, feedback | Application | Guided practice, checks |
| Transfer | Assessment, retention | Integration | Independent practice, review |

::: {.rule #INS-035 grade="C"}
**Use the shared lesson sequence (prepare, show, practice with feedback, apply, review) as a review checklist, and let a short lesson omit steps deliberately.** Gagné's events, Merrill's principles and Rosenshine's principles converge on this sequence [@gagne1985conditions; @merrill2002first; @rosenshine2012principles], but none has been tested as a whole, and the secondary accounts of Gagné say not every lesson needs every event. The checklist should flag a gap, not force a section.

*In LTF:* the lesson review skill (`/review-lesson`) and the authoring template in v1.md Appendix D can carry the five steps as review questions. A five-minute lesson like `l0-1` may legitimately have no worked example; a procedural lesson in Module 4 without one should be flagged.
:::

::: {.rule #INS-036 grade="B"}
**Open each lesson after the first with a short retrieval check on the previous lesson's key points.** Daily review at the start was a habit of effective teachers and raised scores when trained in an experiment [@rosenshine2012principles]; retrieving prior learning is Gagné's third event and Merrill's activation principle [@gagne1985conditions; @merrill2002first].

*In LTF:* a two- or three-item `quiz` block before the first section, drawing on the `prerequisites` lesson, with the explanation that every quiz requires. Keep it above the objectives `Card` only if it stays under a minute.
:::

::: {.rule #INS-037 grade="B"}
**Present new material in small steps and put a check (a question, a prediction, a widget task) after each step.** Small steps with practice after each, and frequent checks for understanding, are among the most consistent behaviors of effective teachers [@rosenshine2012principles]. The evidence is mostly correlational with some experimental support.

*In LTF:* the content guide already says to keep each section under about 250 words before a picture, widget, table or question. Make the question the default: each `##` section that introduces a new idea should end with a `quiz` block or a widget in "Quiz me" mode, so `SectionNav` becomes a sequence of learn-then-check steps.
:::

::: {.rule #INS-038 grade="B"}
**Ask process questions ("why", "what would happen if", "which would you choose") as well as fact questions.** Successful teachers asked more process questions, and training teachers to ask more of them raised scores [@rosenshine2012principles]; elicited explanations were among the supports that made discovery effective [@alfieri2011does].

*In LTF:* the `QuizBlock` types (`single`, `multi`, `numeric`, `order`) can all carry scenario stems ("You are climbing and the airspeed is dropping. What do you change first?"). The challenge `debriefQuestions` ("What made your altitude wander, and what fixed it?") are already process questions; keep that form.
:::

::: {.rule #INS-039 grade="C"}
**Activate the learner's relevant prior experience with a concrete prompt before presenting new content.** Activation is one of Merrill's five shared principles [@merrill2002first] and recall of prior learning is one of Gagné's events [@gagne1985conditions]. Both are consensus syntheses.

*In LTF:* most learners arrive with experience of the sim, of driving or of games. A lesson on trim might open by asking what happens to the airplane when the learner lets go of the controls in the sim, before explaining it.
:::

::: {.rule #INS-040 grade="C"}
**End each procedural lesson with an integration step that sends the learner to apply the skill in a varied setting.** Integration into the learner's own world and transfer are the last of Merrill's principles and Gagné's events [@merrill2002first; @gagne1985conditions]; varied conditions support transfer [@kirschner2008ten].

*In LTF:* the "Fly it" challenge cards after the lesson blocks do this. Their copy should name what is different from the lesson's example ("Same procedure, different runway") rather than only the challenge title.
:::

::: {.rule #INS-041 grade="B"}
**Make independent practice use the same kind of task as the guided practice that preceded it, and treat a need for long help during independent practice as a sign of missing guided practice.** Rosenshine reports both observations from classroom research [@rosenshine2012principles]. The evidence is observational.

*In LTF:* the first unsupported challenge for a skill should resemble its guided predecessor. If learners often open the lesson from the `FlyPanel` during that challenge, add a guided step before it rather than more text inside it.
:::

### What this means for Learn to Fly

The `LessonPage` already follows much of the shared sequence. The breadcrumb, mono lesson code and h1 orient; the objectives `Card` informs; the blocks present and guide; `QuizBlock` and widgets elicit performance with feedback; the "Fly it" challenge cards apply; the completion panel ("Finished reading and trying the questions?") closes. The landing page's "Learn, See, Try, Fly, Reflect" is a fair public summary of the same sequence.

Three steps are weak or missing. Preparation: no lesson opens with a review of the previous one (INS-036) or with an activation prompt (INS-039). Practice inside the lesson: quizzes appear where authors put them rather than after every new idea, so `SectionNav` reads as a table of contents, not a sequence of learn-and-check steps (INS-037, INS-038). Review across lessons: there is no weekly or monthly review surface. Rosenshine's tenth principle and the retention research in Part XIV both argue for one; the `DashboardPage` "Next up" area is the natural place for a short mixed review set drawn from completed lessons. Use the five-step checklist in `/review-lesson` and the Appendix D template to flag gaps, not to force every lesson into the same shape (INS-035).

## Feedback That Teaches

Feedback is the most trusted tool in instruction and one of the least reliable. Shute's review of half a century of research opens with the fact that about one third of the studies in two landmark meta-analyses (Bangert-Drowns and colleagues in 1991; Kluger and DeNisi in 1996) showed negative effects of feedback on learning [@shute2008focus]. She defines formative feedback as information communicated to the learner that is intended to modify thinking or behavior to improve learning, and notes the agreement that it should be nonevaluative, supportive, timely and specific. The designer's question is not whether to give feedback but which kind, when, and how much.

### Verification and elaboration

Shute separates verification, the judgment of right or wrong, from elaboration, the informational part: an explanation of why, hints and cues, worked examples, error analysis, the specific bug or misconception [@shute2008focus]. Her table of feedback types runs from least to most complex, with elaborated types including topic-specific, response-specific, hints and cues, bugs and misconceptions, and informative tutoring. Her guidelines ask for elaborated feedback (the what, how and why), presented in manageable units, as simple as possible but no simpler, specific and clear, unbiased and objective, and aimed at reducing uncertainty about the gap between performance and goal. Feedback should come after learners have attempted a solution, not before.

The discovery meta-analysis supports the same priority from the other direction: feedback was the second strongest explicit condition against unassisted discovery, d = -0.46 [@alfieri2011does]. Bloom's tutoring package, whatever its headline number, worked through formative tests followed by corrective procedures, and his table credits feedback-corrective procedures with large effects [@bloom1984sigma]; the critical reading of that table is in Judging Instructional Claims.

::: {.rule #INS-042 grade="B"}
**Make feedback say what happened, why, and what to change next time; a bare right or wrong is not enough.** Elaborated feedback is the core recommendation of the feedback literature [@shute2008focus], and feedback was among the strongest supports in the discovery meta-analysis [@alfieri2011does]. The review is narrative and the field's findings are inconsistent, so the grade is B.

*In LTF:* the `QuizBlock` already requires an explanation after every question (the section after the divider line in the quiz directive) and shows it with "Correct!" or "Not quite.". Hold every explanation to three parts: the right answer, the reason, and what the learner's choice would have caused. In the `ResultView`, each criterion that was not met should carry one authored line of why and what to try, drawn from `commonMistakes` or a per-criterion note.
:::

### Attention to the task, not to the self

Kluger and DeNisi's feedback intervention theory, as Shute summarizes it, holds that feedback directing attention to the task helps, while feedback directing attention to the self (praise, ego threat) tends to hurt [@shute2008focus]. Her list of things to avoid follows: normative comparisons; overall grades; discouraging or self-esteem-threatening messages; praise, except sparingly; oral delivery; and interrupting a learner who is actively engaged. Summarizing Wiliam, she reports that students given grades only showed no gains, students given comments only showed large gains, and students given grades plus comments showed no gains. The grade swamps the comment. That is one line of work summarized in a review, not a meta-analysis, but it matches the theory.

ARCS makes a related point about satisfaction: give informative feedback when it is immediately useful, avoid threats, and avoid external evaluation when the learner can evaluate their own work [@keller1987development]. Motivation, the subject of Part XVII, Motivation and Gamification, is a reason to be careful with rankings and praise; the feedback literature is a second, independent reason.

::: {.rule #INS-043 grade="B"}
**Point feedback at the task and the next attempt, never at the learner's ability, and use praise sparingly.** Feedback that draws attention to the self tends to hurt, while task-focused feedback helps [@shute2008focus]. The theory is supported by a large meta-analysis summarized in the review, but individual guidelines rest on fewer studies.

*In LTF:* the `ResultView` messages are close: "Passed. Fly it again to push for a higher tier." is task-focused; "Excellent flying. That is a Gold." is praise of the performance and acceptable as an occasional line, but should be followed by the next task (the next challenge in the class, or the same one under harder conditions).
:::

::: {.rule #INS-044 grade="B"}
**Do not let a score lead the feedback; put the comment first and the score second.** Grades alone produced no gains and grades with comments did no better, while comments alone produced large gains, in the work Shute summarizes [@shute2008focus]. The evidence is one strand within a narrative review, so the rule is about prominence, not removal.

*In LTF:* the `ResultView` opens with a `TierBadge` animated with `tier-pop`, a `font-mono text-5xl` percentage and the points total, then "Criterion by criterion". Reverse the weight: lead with the one or two criteria that most need work, each with its reason and review link, and present the tier and percentage in a smaller row. The `HistoryTab` can keep scores prominent, because there they serve self-comparison over time.
:::

::: {.rule #INS-045 grade="B"}
**Never rank learners against each other in feedback or progress views.** Normative comparison is on the review's list of practices to avoid [@shute2008focus], and ARCS warns against external evaluation where self-evaluation is possible [@keller1987development].

*In LTF:* the `DashboardPage` "Stats" tiles (Attempts, Gold results, "Sim time (estimated)") compare the learner with themselves. Keep it that way: no leaderboards, percentiles or "top x% of learners" lines on challenge results.
:::

### Timing

The timing of feedback is the least settled question in this literature. Shute's synthesis: immediate feedback corrects errors in real time and is efficient for procedural skills; delayed feedback has been associated with better transfer [@shute2008focus]. She cites a computer-based instruction meta-analysis with a mean weighted effect of 0.80 for feedback against none on immediate outcomes (22 studies) and 0.35 on delayed outcomes (9 studies), and a motor-task experiment in which spacing feedback over more trials worsened practice performance but improved retention. Her advice is immediate feedback for difficult tasks, at least at first, and delay for relatively simple ones; low-achieving learners were favored by immediate feedback and high achievers by delayed. Field studies tend to favor immediate feedback and laboratory studies delay.

Butler and Roediger's experiment with 72 undergraduates adds a specific result for quizzes [@butler2008feedback]. After a multiple-choice test, a week later, correct recall was .14 for untested material, .31 with no feedback, .45 with immediate feedback and .56 with feedback delayed to the end of the test. Wrong-option intrusions were .24 with no feedback and fell to the untested baseline (.15 immediate, .14 delayed). Feedback both raised the benefit of testing and removed its main harm, which is learning the distractor. The delayed-feedback advantage is not universal, and "delayed" here meant minutes, not days.

The motor-learning literature adds the guidance hypothesis. Salmoni, Schmidt and Walter argued that earlier work had confused the temporary effect of knowledge of results on performance with its lasting effect on learning; feedback given too often guides performance during practice but can create dependence that shows when it is withdrawn [@salmoni1984knowledge]. Replication has been mixed, and the most important qualification comes from complex skills. In Wulf and Shea's review, for a ski-simulator task, 100 percent concurrent feedback was most effective for learning, and the best summary length was shorter for more complex tasks (in a simulated batting task, a summary of 5 trials beat 1 or 15) [@wulf2002principles]. The guidance hypothesis holds best for simple tasks, and it does not justify withholding feedback from beginners on complex ones.

::: {.rule #INS-046 grade="B"}
**Give rich, frequent feedback to beginners on difficult tasks, and move toward summary feedback over several attempts as their performance stabilizes.** Immediate feedback suits difficult tasks and low achievers at first [@shute2008focus]; for complex skills, frequent feedback supported learning and short summaries beat long ones [@wulf2002principles]; feedback that never fades risks dependence [@salmoni1984knowledge]. The timing literature is inconsistent, so the rule describes a direction, not a schedule.

*In LTF:* a learner's first attempts at a challenge get the full "Criterion by criterion" breakdown and review links. Once the `HistoryTab` shows consistent passes, the result can lead with a short summary across the last few attempts ("Altitude has been your weakest criterion in three of four flights").
:::

::: {.rule #INS-047 grade="B"}
**Give feedback after the learner has committed to an answer or an attempt, never before.** Shute lists this among the things to do [@shute2008focus]; feedback presented before an attempt is guidance, which belongs in the brief.

*In LTF:* `QuizBlock` already hides the explanation until "Check answer". Widget "Quiz me" modes and the `DebriefForm` self-scoring should do the same: the learner rates each criterion before seeing tips or the live score preview.
:::

::: {.rule #INS-048 grade="B"}
**Follow every quiz item with feedback that gives the correct answer and the reason, and write distractors that are plausible but clearly wrong once the feedback is read.** Feedback after multiple-choice items raised later recall and brought wrong-option intrusions back to baseline [@butler2008feedback]. One experiment, consistent with the wider testing-effect literature (Part XIV).

*In LTF:* the content README already makes the explanation mandatory. Add to the review checklist that no distractor may state a dangerous practice as if it were acceptable without the explanation naming it, since a distractor that is read can be remembered.
:::

### Interruption and chunking

Two of Shute's guidelines bear directly on a learner flying a simulator: do not interrupt a learner who is actively engaged, and present feedback in manageable units to avoid overload [@shute2008focus]. The four-component model makes the same separation in another vocabulary: procedural information just in time during performance, supportive information around it [@kirschner2008ten]. Wulf and Shea's attention findings suggest the wording of in-flight cues matters too: an external focus on the effect of a movement beat an internal focus on body movements [@wulf2002principles].

::: {.rule #INS-049 grade="C"}
**Do not interrupt a learner in the middle of a maneuver with feedback or prompts; hold feedback for a pause or the debrief, unless safety of the simulated flight is the point.** Interrupting an engaged learner is on the review's list of things to avoid [@shute2008focus]. The rule is craft guidance supported by a narrative review.

*In LTF:* the `FlyPanel` random-event alert (`border-4 border-warn`, pulse, beep) is a deliberate interruption that simulates an in-flight event, and is part of the task. No other feedback, toast or banner should appear in `FlyModePage` during a flight. The `BetaBanner` currently shows above the header on every page including Fly mode; collapse or suppress it there once dismissed.
:::

::: {.rule #INS-050 grade="C"}
**Break debriefs into short units, one criterion or question per unit, and phrase in-flight cues as the effect to look for, not the body movement.** Feedback in manageable units avoids overload [@shute2008focus]; an external focus on movement effects beat an internal focus in complex-skill experiments [@wulf2002principles].

*In LTF:* the `DebriefForm` radio-card rubric already takes one criterion per card. The `debriefQuestions` and `tips` should be one sentence each. Procedure steps shown in `FlyPanel` should name what the learner sees ("keep the nose on the horizon mark") rather than hand movements.
:::

### What this means for Learn to Fly

LTF has three feedback surfaces and each is partly right. `QuizBlock` gives verification ("Correct!" or "Not quite.") plus a mandatory explanation, after the learner commits: keep it, and hold the explanation to answer, reason and consequence (INS-042, INS-047, INS-048). The challenge debrief combines self-scoring in `DebriefForm`, reflection prompts from `debriefQuestions`, and the `ResultView`. The `ResultView` is the main candidate for change: it leads with tier, percentage and a praise or pass line, and puts the elaborated part second. Reorder it so the learner first reads which criterion needs work, why, and where to review it, with the score below (INS-043, INS-044). Over repeated attempts, shift toward a summary across attempts using `HistoryTab` data (INS-046). Keep the dashboard free of rankings (INS-045). In Fly mode, allow only task-intrinsic interruptions such as random events, and suppress everything else, including the beta banner after dismissal (INS-049). Write in-flight cues as effects to look for (INS-050).

## Mastery, Retries and Pacing

LTF's progression model (modules, challenges with Bronze, Silver and Gold tiers, required criteria, and the freedom to fly a challenge again) is a form of mastery learning. That is good news, because mastery learning is one of the better-evidenced ideas in this Part. It is also the home of one of the field's most inflated numbers.

### What mastery learning is

Two families of program share the name [@kulik1990effectiveness]. Bloom's Learning for Mastery is teacher-paced and group-based: teach a unit, give a formative test, give corrective instruction to those who have not reached the standard, then a parallel test. Keller's Personalized System of Instruction (PSI) is self-paced: written materials and unit quizzes, with restudy until the learner meets the standard. Both hold the standard fixed and let time vary, the opposite of a conventional course, which holds time fixed and lets achievement vary.

### The evidence

Kulik, Kulik and Bangert-Drowns meta-analyzed 108 controlled evaluations of mastery programs in colleges, high schools and the upper elementary grades [@kulik1990effectiveness]. Inclusion required a conventionally taught comparison group and a mastery criterion of at least 70% correct on quizzes, and excluded studies with unequal exposure to the criterion test. Of the 108 studies, 72 were PSI and 36 Bloom-style. Positive effects appeared in 96, and 67 of those were statistically significant; none of the studies with negative results reported a significant difference. The average effect across 103 studies was 0.52 (standard error 0.033), placing the average mastery student at about the 70th percentile of a conventional class. Eleven studies with follow-up examinations averaged 0.71 about eight weeks after instruction. In 13 studies reporting aptitude, the effect was larger for less able students (0.61) than for more able ones (0.40), though the difference was not significant.

The moderators matter more than the average. Group-based programs had larger effects than self-paced ones. Programs with high mastery standards beat those with lower standards. Locally developed tests showed larger effects than standardized ones: in PSI studies, 0.33 on standardized tests against 0.52 on local tests, and the few Bloom-style studies using standardized tests showed no significant effect. Effects were larger when control groups got less quiz feedback than the mastery group and smaller when they got the same. Mastery programs improved attitudes and may increase time on task. And self-paced mastery programs often reduced completion rates in college courses.

The limits are serious. Study quality varied, many PSI studies were nonrandom, and the alignment between taught material and local tests may explain part of the benefit. Roughly a quarter of the variance in effect sizes was explained by the study features modeled. Still, half a standard deviation from 103 studies, with most positive, is a strong base by the standards of instructional research.

### The 2 sigma claim

Bloom's 1984 essay reported that students tutored one-to-one, with formative tests and corrective work, scored about two standard deviations above students in a conventional class of about 30, and that mastery-learning students in a class of about 30 scored about one standard deviation above [@bloom1984sigma]. The average tutored student, in his account, outperformed 98% of the control class; the average mastery student, 84%. About 90% of tutored students and 70% of mastery students reached the level of the top 20% of the conventional class. Time on task was 65% under conventional teaching, 75% under mastery and over 90% under tutoring, and the correlation between aptitude and final achievement fell from about .60 to .25 under tutoring, which Bloom partly attributes to restricted range. He framed the "2 sigma problem" as the search for group methods that could match tutoring.

The figure does not hold up. Von Hippel's critical account, read with Bloom's text for this lane, points out that the 2 sigma rests essentially on two University of Chicago dissertations, with interventions limited to 11 periods over three weeks in four samples; that the essay's figure was hand-drawn and illustrative rather than fitted to data; and that Bloom's table of effect sizes differs from the Walberg source it credits, where tutoring was estimated at 0.40, not 2.00. Meta-analyses of tutoring find far smaller effects: about 0.33 across 65 studies (Cohen, Kulik and Kulik, 1982), with only one reporting two sigma, and 0.37 across randomized studies (Nickow, Oreopoulos and Quan, 2020), none of 96 reaching two sigma. The experiment was a package of mastery-style instruction and correction, not tutoring alone, and it has not been replicated. Kulik's own mastery figure, 0.52, is half of Bloom's one sigma for mastery.

::: myth
**"One-to-one tutoring raises achievement by two standard deviations, so adaptive software that acts like a tutor can do the same."** The 2 sigma figure comes from two short dissertation studies of a package of tutoring, formative tests and correction, with tests aligned to the taught material; it has not been replicated, and meta-analyses of tutoring find effects of about 0.33 to 0.37 [@bloom1984sigma]. Mastery programs average about 0.52 [@kulik1990effectiveness]. The durable lesson is the feedback-corrective loop, not the number.
:::

::: {.rule #INS-051 grade="A"}
**Gate progress on a demonstrated standard, and set the standard high.** Mastery programs raised examination performance by about half a standard deviation across 103 studies, with larger effects for high mastery standards and a lasting effect at follow-up [@kulik1990effectiveness]. The effect is smaller on standardized than on course-aligned tests, so transfer should be checked separately (INS-057).

*In LTF:* a module counts as done when its `required` criteria are met in its final challenges, not when every lesson is marked complete. The `ProgressRing` on `CurriculumMap` and the per-module `ProgressBar`s on `DashboardPage` should reflect demonstrated criteria, and "Bronze means you did it safely" should be the minimum that unlocks the next class of tasks.
:::

::: {.rule #INS-052 grade="B"}
**After a failed check, run the corrective loop: identify the specific gap, send the learner to the material for that gap, then retest with a parallel task.** The feedback-corrective loop is the active ingredient common to Bloom's tutoring package and mastery learning [@bloom1984sigma; @kulik1990effectiveness]; mastery effects were smaller when comparison groups got the same quizzes and feedback, which points to the feedback and correction as the working part. The grade is B because the loop's separate contribution is inferred from moderators.

*In LTF:* `ResultView` already links each criterion that scored under two points to the lesson section named in its `reviewLink`. Complete the loop: after the review, offer a parallel attempt (the same skill with a different preset) rather than only "Fly again" on the identical setup, and make sure every required criterion in every challenge has a `reviewLink`.
:::

::: {.rule #INS-053 grade="B"}
**Allow unlimited retries, with a correction step between attempts, and never penalize a learner for the number of attempts.** Mastery learning holds the standard fixed and lets time vary [@kulik1990effectiveness]; Bloom reports aptitude predicting achievement much less under tutoring with correction than under conventional teaching, partly because of restricted range [@bloom1984sigma].

*In LTF:* the "Attempts" tile on `DashboardPage` is neutral information; keep it from becoming a cost. Best result, not first result, should drive tier display, as the challenge header's "Best: {TierBadge} {n}%" already does.
:::

### Self-pacing needs structure

The finding that self-paced mastery programs reduced completion in college courses is the most direct warning for LTF, which is self-paced by nature [@kulik1990effectiveness]. Group-based programs also outperformed self-paced ones. The mechanism is not established in the review, but a self-paced learner with a high standard and no schedule can stall indefinitely at a hard unit.

::: {.rule #INS-054 grade="B"}
**Give a self-paced course explicit structure: a suggested next step, visible pacing, and a path out of a stall.** Self-paced mastery programs often lowered completion rates, and group-paced programs had larger effects [@kulik1990effectiveness]. The review reports the effect without isolating its cause.

*In LTF:* the dashboard's Continue card and "Next up" list, and the landing CTA that targets the first incomplete lesson, are the structure. Add a stall path: after a set number of failed attempts on a required criterion (to be tuned with real data), the `ResultView` should offer an easier variant or the preceding challenge, not just another retry.
:::

### Difficulty and success rate

How hard should practice be? Rosenshine reports that in a fourth-grade math study, 82% of answers were correct in the classes of the most successful teachers against 73% in the least successful, and he writes that the optimal success rate "appears to be about 80 percent", high enough to show learning and low enough to show challenge [@rosenshine2012principles]. It is an observational optimum for classroom answers, not a universal law. The challenge point framework gives the theoretical frame: learning depends on the information a performance yields, too little challenge yields too little, too much overwhelms, and the best level moves as skill improves [@guadagnoli2004challenge]. Its critics note that functional difficulty is hard to measure, which makes the optimum hard to locate. The meta-analysis of increasing-difficulty training gives the practical answer: increases worked when they were adaptive and not when they came in fixed steps [@wickens2013effectiveness].

::: {.rule #INS-055 grade="C"}
**Tune quizzes and challenges so that learners succeed on most attempts but not all, and treat a success rate near 80% as a heuristic to check against real data.** The figure is an observational optimum from classroom research [@rosenshine2012principles]; the challenge point framework explains why an intermediate difficulty is best and why it moves [@guadagnoli2004challenge]. Neither licenses a fixed target.

*In LTF:* once attempt data exist, report first-attempt pass rates per challenge and quiz. A challenge nearly everyone passes first time can drop support or add a variable; one most learners fail needs more guided practice before it, not easier criteria.
:::

::: {.rule #INS-056 grade="A"}
**Raise difficulty adaptively, from each learner's results, rather than by a fixed ladder that every learner climbs at the same rate.** Increasing-difficulty training succeeded when adaptive and failed in fixed steps across a meta-analysis of 37 studies [@wickens2013effectiveness]; the challenge point framework predicts the same [@guadagnoli2004challenge].

*In LTF:* the challenge list is a fixed ladder today. A modest adaptive layer is possible with existing data: after consistent Gold on a challenge, suggest the harder variant or skip the next supported challenge in the class; after repeated failure on a required criterion, suggest the supported one.
:::

### Mastery per skill, and transfer

Two more consequences follow from the moderators. Because effects were smaller on standardized tests than on local ones, in-course checks overstate how well a skill transfers to unfamiliar situations [@kulik1990effectiveness]. And because performance during learning is an unreliable index of learning [@soderstrom2015learning], a single "percent complete" number mixes things that should be separate: what the learner has read, what they did well just now, and what they can still do later.

::: {.rule #INS-057 grade="B"}
**Include checks in novel conditions, because in-course tests overstate transfer.** Mastery effects were markedly smaller on standardized tests than on course-aligned ones [@kulik1990effectiveness]; variability builds transfer [@kirschner2008ten].

*In LTF:* a module's final challenge should use an airport, runway or weather preset the learner has not flown in that module, and the "What you'll be able to do" items should be phrased so that this is the evidence.
:::

::: {.rule #INS-058 grade="C"}
**Show progress as mastery of named skills, not as one percentage of content completed.** A single completion figure conflates reading with demonstrated performance [@soderstrom2015learning]; mastery programs are defined by criteria per unit [@kulik1990effectiveness]. This is an inference from the evidence, graded C.

*In LTF:* the `DashboardPage` "Your progress" section could list the module's skills (from its challenges' criteria) with the best tier reached on each, beside the existing per-module `ProgressBar`.
:::

### What this means for Learn to Fly

LTF already has the parts of a mastery system: required criteria, tiers, retries, a best-result record and criterion-level review links. The changes are about what counts and what happens next. Count demonstrated criteria, not completed pages, toward module progress (INS-051, INS-058). Close the corrective loop with a parallel retest after review (INS-052). Keep retries free (INS-053), add a stall path so self-pacing does not become stopping (INS-054), and use attempt data to tune difficulty toward frequent but not universal success, adapting per learner rather than by a fixed ladder (INS-055, INS-056). Make the module's final check a novel scenario (INS-057). In copy, never claim tutor-level gains; the landing page currently makes no such claim, and it should stay that way.

## Designing for Motivation: the ARCS Model

Motivation is the subject of Part XVII, Motivation and Gamification, which covers self-determination, rewards and game mechanics. This chapter takes a narrower, instructional-design view: Keller's ARCS model, which treats motivation as something a designer diagnoses and builds into instruction alongside its content, using the same systematic process. Its value is as a structured checklist; its evidence for learning outcomes is thin, and its grades are C.

### The model

Keller built ARCS to answer two questions: can the many theories of motivation be synthesized into a schema a practitioner can use, and can motivating instruction be designed systematically rather than by intuition or "native talent" [@keller1987development]? The model rests on expectancy-value theory: people engage in an activity if they see it as meeting their needs (value) and expect to succeed (expectancy). Keller argues that motivation is not a fixed trait to be accepted but something instruction can raise or kill, so a motivation problem is a design problem.

The strategy catalog was built by collecting strategy statements from research, handbooks and practitioner interviews and sorting them into four categories; four people classified them, with reliability estimated by an intraclass correlation of .78.

**Attention.** Get it, then sustain it, balancing boredom against overstimulation. Strategy families include incongruity, concreteness (visual representations, an example of every important concept), variability, humor, inquiry and participation (games, role plays, simulations).

**Relevance.** State how the instruction builds on the learner's existing skills, its present worth and future usefulness, match it to needs, use models, offer choice. Relevance can come from how something is taught, not only from the content.

**Confidence.** State learning goals and evaluation criteria; organize material by increasing difficulty so the challenge is "conquerable"; help learners set realistic goals; attribute success to effort when that is true; let learners learn new skills under low risk, then practice well-learned tasks under realistic conditions.

**Satisfaction.** Let learners use a new skill in a realistic setting as soon as possible; give informative feedback when it is immediately useful; avoid threats; avoid external evaluation when learners can evaluate their own work.

### The process and its restraint

Keller's design process has four phases [@keller1987development]. Define: classify the motivational problem, analyze the audience's motivation, and write motivational objectives that, like instructional objectives, state behavior, condition and criterion. Design: brainstorm strategies, then select them with five guidelines: they must not take much instructional time, must not detract from the objectives, must fit time and money limits, must be acceptable to the audience, and must be compatible with the delivery system. Develop. Evaluate, using direct measures such as persistence, effort, emotion and attitude, not achievement scores alone.

The most practical line in the paper is a restraint. Motivation is a means to an end, and if learners arrive motivated, do not add strategies. Keller's cautionary example is a banquet project that consumed half of a language course.

### Evidence

The paper reports two teacher field tests. Eighteen middle-school teachers took a four-month workshop; all found the model comprehensible and useful, and sixteen (89%) said it helped. A second workshop of sixteen teachers ran six days; of twelve respondents, ten (83%) found it comprehensible and useful and nine (75%) felt it helped, with weaker results where teachers chose problems about individual students rather than about instruction [@keller1987development]. Keller lists the limits himself: he ran both workshops, the outcomes were questionnaires, and no learning outcomes were measured. The model is heuristic, not algorithmic. A fair criticism is that ARCS is a taxonomy of strategies and does not show that any listed strategy works for a given audience. Later controlled studies were not read for this Part, so no effect sizes are claimed.

ARCS overlaps with sources elsewhere in this Part. Stating criteria up front is also the W of WHERETO [@wiggins2005understanding]; ordering by increasing difficulty is the task-class structure of the four-component model [@kirschner2008ten]; informative feedback and avoiding threats are feedback guidelines [@shute2008focus]; recruitment and frustration control are scaffolding functions [@wood1976role]. Where ARCS adds something, it is the insistence that motivation be diagnosed for a specific audience before strategies are chosen, and the five selection guidelines that keep motivational devices from eating instruction.

::: {.rule #INS-059 grade="C"}
**Diagnose the motivational problem for a specific audience and stage before adding any motivational device, and add none where learners are already motivated.** ARCS treats motivation as a design problem with an analysis phase and warns against adding strategies to a motivated audience [@keller1987development]. The model has attitudinal field tests only.

*In LTF:* a beginner who chose to open a flight course beside the sim is likely motivated at the start; the likely motivational problems are later (a stalled challenge, a long theory lesson in Module 6 or 7). Put motivational design effort where the dashboard shows learners stopping, not into the first lesson.
:::

::: {.rule #INS-060 grade="C"}
**Reject any motivational device that takes noticeable instruction time, distracts from the objective, or does not fit the delivery context.** These are three of Keller's five selection guidelines [@keller1987development]. Part XVII covers the evidence on rewards and game mechanics.

*In LTF:* `tier-pop`, the `CourseBadge` wings roundel and the Gold, Silver and Bronze rings pass the test: they are brief and tied to the criteria. Streaks, timers that pressure, or celebratory overlays in `FlyModePage` would fail the context test, because the learner's attention belongs on the sim.
:::

::: {.rule #INS-061 grade="C"}
**State the relevance of each lesson in one concrete sentence tied to the learner's next flight.** Relevance through present worth and future usefulness is an ARCS category [@keller1987development]; recruitment is the first scaffolding function [@wood1976role].

*In LTF:* the lesson `summary` field ("Set an attitude and a power setting, check the result, and trim the airplane so it holds that attitude hands-off.") is a good model. The "Fly it" challenge cards can add the relevance line: what this lets you do in the next challenge.
:::

::: {.rule #INS-062 grade="C"}
**Build confidence by stating criteria before the attempt, ordering tasks so each is conquerable, and teaching new skills at low risk before practicing them under realistic conditions.** These are ARCS confidence strategies [@keller1987development], consistent with task classes in the four-component model [@kirschner2008ten].

*In LTF:* the `BriefTab` "How you'll be scored" table, `DifficultyDots`, and an air start with calm weather for the first challenge of a skill implement all three. The landing tier legend ("Bronze means you did it safely. Gold is checkride-ready.") sets realistic goals in public copy; keep it.
:::

::: {.rule #INS-063 grade="C"}
**Attribute improvement to practice and specific technique, where that is true, in feedback and progress copy.** Attributing success to effort when true is an ARCS confidence strategy [@keller1987development], and it is compatible with task-focused feedback [@shute2008focus].

*In LTF:* a `ResultView` line such as "Your altitude criterion moved from Bronze to Silver since your last flight" names the change; avoid lines that credit talent ("You're a natural").
:::

::: {.rule #INS-064 grade="C"}
**Let the learner use each new skill in the sim soon after learning it.** Using a new skill in a realistic setting as soon as possible is an ARCS satisfaction strategy [@keller1987development]; integration into real use is one of Merrill's principles [@merrill2002first].

*In LTF:* every procedural lesson should link to a challenge in its "Fly it" cards, and the first such challenge should be short enough (by `estimatedMinutes`) to fly in the same session.
:::

::: {.rule #INS-065 grade="C"}
**Where the learner can evaluate their own work, let them do so first, then show the measured or recomputed result beside their rating.** ARCS recommends avoiding external evaluation when self-evaluation is possible [@keller1987development]; self-assessment is one of the facets of understanding and an element of WHERETO [@wiggins2005understanding]. Because people often mistake in-practice performance for learning [@soderstrom2015learning], the comparison is the teaching moment.

*In LTF:* the `DebriefForm` already has the learner self-score each criterion and the server recompute the tier. Show the learner where their self-rating and the recomputed result differ, if they do, and keep the `debriefQuestions` reflection before the score.
:::

### What this means for Learn to Fly

Most of what ARCS asks for exists in LTF under other names. Attention: widgets, the sim itself and the aviation framing (Brief, Fly, Debrief) provide concreteness and participation. Relevance: lesson `summary` lines and "Fly it" cards. Confidence: visible scoring criteria, difficulty dots and graded tiers. Satisfaction: challenges that follow lessons closely, informative criterion feedback, and self-scoring. The model's most important contribution for LTF is its restraint: diagnose where learners actually lose motivation (from dashboard and attempt data), spend design effort there (INS-059), and reject any device that costs instruction time or competes with the sim for attention, especially in `FlyModePage` (INS-060). Strengthen relevance lines (INS-061), keep attribution about practice (INS-063), keep the self-rating before the recomputed tier and show the difference (INS-065). Coordinate with Part XVII before adding any new reward mechanic.

## Judging Instructional Claims

Instructional design is full of confident claims: that video teaches better than text, that interactive beats static, that a ranked table of effect sizes tells a designer what to do, that one method doubles learning. This chapter collects the evidence that should make an LTF designer skeptical of such claims, and the methods that make LTF's own judgments sound. Part I, Evidence and Ideas, covers research methods in general; the points here are specific to instruction.

### Media are vehicles; methods teach

Clark's review of media research argued that the consistent finding was no learning benefit from any specific medium of delivery [@clark1983reconsidering]. His analogy: media are mere vehicles that deliver instruction and influence achievement no more than the truck that delivers groceries changes our nutrition. Apparent gains from a new medium are vulnerable to two rival explanations, uncontrolled differences in method or content, and novelty.

The numbers he reports make the case. In a review of 42 audiotutorial studies, 29 favored audiotutorial and 13 conventional instruction, a box score that looks decisive; the effect size analysis found about 0.2 standard deviations, roughly 1.6 points on a 100-point examination. In college comparisons of computerized and conventional courses, the effect was 0.51 when different faculty taught the two courses but dropped to 0.13 when one instructor planned and taught both, which points to the design effort, not the computer. Programmed instruction delivered by text or by computer gave similar effects of about 0.2, while Keller's personalized system of instruction gave about 0.5: method explained more than medium. On novelty, in secondary-school computer studies, an average effect of 0.32 was 0.56 for studies of four weeks or less, 0.3 for five to eight weeks and about 0.2 beyond eight weeks. Published studies averaged larger effects (0.47) than unpublished ones (0.21) or dissertations (0.3).

On media attributes such as zooming or animated arrows, Clark reports that they could cultivate skills for some learners, but in a partial replication by Bovy a static isolation of the cues worked even better, suggesting that only efficient isolation of the relevant cue was needed. Attributes are sometimes sufficient, never necessary.

The counter-argument matters, especially for a product built around a simulator. Kozma reframed the debate by arguing that media can enable methods; Nathan and Robinson argue that Clark and Kozma may agree about design while resting on different views of learning, and propose treating media and method as mutually constitutive. Clark's claim is strongest as a methodological warning about confounded comparisons and weaker as a claim that medium never matters: a simulator enables practice that no page of text can.

::: myth
**"Video (or animation, or interactivity) is more effective than text."** Comparisons that favor a medium usually also changed the method, the content or the design effort, and their advantage shrinks when one designer builds both versions and as novelty fades [@clark1983reconsidering]. What teaches is the method a medium carries (a worked example, a prediction prompt, feedback), so the useful question is which method a format makes possible.
:::

::: {.rule #INS-066 grade="B"}
**Justify every format choice (widget, video, diagram, text) by the instructional method it enables, never by the medium itself.** Media comparisons are confounded with method, and method explains more of the effect than medium [@clark1983reconsidering]. Media can enable methods that are otherwise impossible, which is the case for the simulator itself.

*In LTF:* a widget proposal should name its method ("the learner predicts the airspeed, then sets the pitch and sees the result"). A widget that only animates something a static annotated diagram shows equally well should be the diagram, which also costs less in the `Skeleton h-72` lazy chunk and in the "Describe this diagram" text.
:::

::: {.rule #INS-067 grade="B"}
**When LTF compares two designs, hold the method constant and change one thing.** Media effects fell from 0.51 to 0.13 when the same instructor designed both versions [@clark1983reconsidering]; the worked-example evidence is persuasive because only one variable differs between groups [@kirschner2006why].

*In LTF:* to test an interactive airspeed widget, compare it against a static diagram with the same prediction prompt and the same feedback, not against a lesson section without either.
:::

::: {.rule #INS-068 grade="B"}
**Judge a new interactive feature only after its novelty has had time to wear off.** Effects of new media were largest in short studies and fell by more than half beyond eight weeks [@clark1983reconsidering].

*In LTF:* evaluate a new widget or challenge mechanic on its effect over several weeks of use, with returning learners, not on first-week engagement.
:::

### Rank tables and the hinge point

Hattie's *Visible Learning* synthesizes more than 800 meta-analyses into a ranked list of influences on achievement, each expressed as an average effect size, with a benchmark of d = 0.40 (the "hinge point") dividing desired effects from smaller ones [@hattie2009visible]. Its central practical message, as the publisher describes it, is to set challenging learning intentions, be clear about what success looks like, and use strategies that build conceptual understanding. That message is well supported elsewhere. The ranking is not.

The criticisms are specific. Hattie acknowledged that the common language effect size values in the book were calculated incorrectly throughout, while the d values were correct; a statistician's critique notes that some of those values came out negative or above 100% [@hattie2009visible]. The same critique argues that the synthesis averages unrelated studies, treats correlations as effect sizes and converts them without checking conditions, and uses unweighted averages; a correlation of about .196 converts to a d above 0.4 yet explains under 4% of variance. The sign of an effect depends on an arbitrary choice of baseline, and effects on different outcomes, populations and durations are not comparable. In a simulated example, three effect-size formulas ranked the same three teaching methods differently. The 0.40 cutoff has no principled justification. Wecker, Vogel and Hetmanek tested the database and procedure against the methodological demands of meta-analysis and concluded that the goal of broadly integrating educational research is visionary but cannot currently be carried out in a scientifically sound way. The specific values often quoted from the first edition, and the definition of the hinge point, could not be confirmed from a primary page for this book and are stated only as critics describe them.

::: myth
**"An effect size above 0.40 means an intervention works, and Hattie's ranking tells you which methods to adopt."** The ranking averages incomparable studies, converts correlations to effect sizes without checking assumptions, contained miscalculated statistics, and uses a cutoff with no principled basis; a methodological audit concluded the synthesis cannot currently be done soundly [@hattie2009visible]. Use primary meta-analyses and experiments, which in this Part include the evidence on discovery, mastery, feedback and part-task training [@alfieri2011does; @kulik1990effectiveness; @shute2008focus; @wickens2013effectiveness].
:::

::: {.rule #INS-069 grade="B"}
**Never cite a league-table effect size or the 0.40 hinge point as the reason for an LTF design decision; cite a primary study or meta-analysis of the specific method.** The synthesis that produced them has documented calculation and conceptual problems [@hattie2009visible]. The general messages it shares with better evidence (clear goals, visible criteria, feedback) can be cited to that better evidence [@shute2008focus; @wiggins2005understanding].

*In LTF:* design rationales in PR descriptions and in this book's later Parts should not carry Hattie numbers. If a decision cites Hattie, it must also cite a primary source making the same point.
:::

::: {.rule #INS-070 grade="B"}
**Never promise tutor-level or multiplied learning gains in product copy or rationales.** The best-known figure, 2 sigma, rests on two short dissertation studies and has not been replicated; tutoring meta-analyses find about a sixth of it [@bloom1984sigma]; mastery learning averages about half a standard deviation [@kulik1990effectiveness].

*In LTF:* the landing hero ("Yes, you can fly a plane."), stats row and "Questions" section make claims about the course's content and structure, not about learning gains. Keep it so; any future claim of effectiveness needs LTF's own measured results behind it.
:::

### Performance is not learning

The deepest trap in judging instruction is measuring the wrong moment. Soderstrom and Bjork's integrative review distinguishes learning, the relatively permanent change in comprehension and skill that supports retention and transfer, from performance during instruction, which is "often an unreliable index" of learning [@soderstrom2015learning]. The two dissociate both ways, some manipulations push them in opposite directions, and people often mistake their performance during acquisition for a guide to long-term learning. Mixed practice in Rohrer and Taylor's study looked far worse during practice (60% against 89%) and far better a week later (63% against 20%) [@rohrer2007shuffling]. The guidance hypothesis makes the same point for feedback: performance with help shows that the help works, not that the skill has been learned, so learning should be tested without help and after a delay [@salmoni1984knowledge].

Mastery learning adds the alignment warning: effects measured with tests written for the course were larger than effects on standardized tests [@kulik1990effectiveness]. A designer who measures only in-session, aided, aligned performance will systematically overrate the design.

::: {.rule #INS-071 grade="A"}
**Measure whether LTF teaches with delayed, unaided checks in new conditions, not with in-session performance.** Performance during learning is an unreliable index of learning, and several manipulations push the two in opposite directions [@soderstrom2015learning; @rohrer2007shuffling]; feedback-supported performance overstates learning [@salmoni1984knowledge]; course-aligned tests overstate transfer [@kulik1990effectiveness]. The dissociation is replicated across motor and verbal learning.

*In LTF:* the signal that a module works is the learner's result on a later challenge in a new setting, without the `Steps` list, days after the lesson. Lesson completion, immediate quiz accuracy and first-session tiers are performance measures; report them as such.
:::

::: {.rule #INS-072 grade="C"}
**State the evidence grade and source type next to any instructional claim in a design rationale.** This Part grades its own rules for the same reason: the field mixes meta-analyses, single experiments and consensus frameworks, and several famous claims rest on weak evidence [@bloom1984sigma; @hattie2009visible; @clark1983reconsidering].

*In LTF:* a PR that changes lesson structure, feedback or progression should name the rule IDs it relies on; the grade comes with them.
:::

### What this means for Learn to Fly

LTF is about to make many choices where the medium is tempting: a widget for every concept, video demonstrations, animated instruments. The rule is to choose by method (INS-066) and, when it matters, to test by holding the method constant (INS-067) over long enough to outlast novelty (INS-068). The project should keep its copy honest about effects, as it already is about verification (the `BetaBanner`, `DraftBadge`, "Last verified" lines, and the "not a pilot certificate" line on the course badge): no tutor-level claims, no league-table numbers (INS-069, INS-070). And it should build its measurement around learning, not performance: delayed, unaided, varied challenges as the evidence, with in-session numbers labeled for what they are (INS-071). Rationales should cite rule IDs with their grades (INS-072).

## Decision list and review checklist

### Decisions this Part settles for Learn to Fly

The decisions below follow from the rules in this Part. Each names the surfaces it governs. Grades travel with the rules: a decision resting on C-grade rules is a reasoned default that LTF's own data may revise; one resting on A-grade rules should be changed only with strong contrary evidence.

#### Guidance and demonstration

1. **LTF teaches explicitly first and lets learners explore second.** No lesson or challenge asks a beginner to discover a procedure unaided; free flight comes after guided practice, as consolidation. Widgets in "Explore" mode open with a task and close with a prediction or explanation question. (INS-001, INS-002, INS-003, INS-004)
2. **Every scored procedure has a worked example in a lesson before it is scored.** The example is stepped, pairs each action with the expected indication and a one-clause reason, and appears in at least two settings over the course. A recognition check precedes the first attempt. (INS-007, INS-008, INS-009, INS-010, INS-012)
3. **Support fades on a planned staircase.** Within a module, the challenges for a skill move from a full `procedure` with `Steps`, to a shorter one, to goal and criteria only. Every support a challenge adds has a named later challenge that removes it. Mental rehearsal prompts come after demonstration. (INS-011, INS-013, INS-018, INS-021)
4. **Experienced learners can skip ahead.** A lesson offers a route straight to its check; the check's result routes back to specific sections. (INS-005)
5. **Lesson length is not a quality target.** Duration is read together with delayed results. (INS-006)

#### Structure

6. **Modules are designed backward from a culminating whole-task challenge.** The "What you'll be able to do" items and the final challenge are agreed before lesson prose; lesson content no check draws on moves to optional depth. (INS-026, INS-027, INS-028)
7. **Challenges are grouped into task classes, shown as such on `ModulePage` and `CurriculumMap`.** A class changes one major condition; conditions vary across tasks; the final challenge of a module uses a setting the learner has not flown in it. (INS-020, INS-022, INS-057)
8. **Concurrent sub-skills are practiced together, with shifting emphasis; drills are reserved for routine sequential parts already met in flight.** (INS-024, INS-025)
9. **Lessons carry the why; the Brief and Fly surfaces carry the how; Fly mode carries only the how and the goal.** (INS-023, INS-015)
10. **The checklist runner and reference checklists are permanent tools; the `Steps` list is a fading scaffold.** They are labeled differently. (INS-019)

#### Objectives and lesson anatomy

11. **Authoring objectives use performance, conditions and criterion; tolerances live only in challenge `criteria` from cited sources.** Learner-facing objective lists hold two or three items with observable verbs, linked to their checks. (INS-030, INS-031, INS-032)
12. **Quiz items and criteria are tagged with their taxonomy cell, and modules are audited for recall-heavy checks.** (INS-033, INS-034)
13. **Lessons after the first open with a short retrieval check on the previous lesson, present one idea per section with a check after it, ask process questions, and end with a transfer step to the sim.** The five-step lesson sequence is a review checklist, not a template. (INS-035, INS-036, INS-037, INS-038, INS-039, INS-040, INS-041)
14. **The criteria for any performance are shown before the attempt and repeated in Fly mode.** (INS-029, INS-062)

#### Feedback

15. **Feedback leads with the task, not the score.** `ResultView` puts the weakest criteria, their reasons and review links first, and the tier and percentage second. Praise is occasional and followed by the next task. (INS-042, INS-043, INS-044, INS-063)
16. **Every quiz explanation gives the answer, the reason and the consequence of the chosen option; distractors never leave a dangerous practice uncorrected.** (INS-042, INS-048)
17. **Feedback follows commitment and fades with stability.** Beginners get full criterion breakdowns; consistent performers get summaries across attempts. (INS-046, INS-047)
18. **Nothing interrupts a flight except task events.** In `FlyModePage`, only the challenge's own random events may interrupt; the beta banner, toasts and other prompts do not. In-flight cues name effects to look for. Debriefs come one criterion at a time. (INS-049, INS-050)
19. **No rankings of learners.** (INS-045)

#### Progression and motivation

20. **Progress means demonstrated criteria.** Module completion requires the required criteria of its final challenges; dashboards show mastery per skill. (INS-051, INS-058)
21. **Failure triggers the corrective loop: review link, then a parallel retest; retries are free; repeated failure offers an easier variant.** (INS-052, INS-053, INS-054)
22. **Difficulty is tuned from data toward frequent but not universal success, and adapted per learner rather than by a fixed ladder.** (INS-055, INS-056)
23. **Motivational design goes where learners stall, and no device may cost instruction time or compete with the sim for attention.** Relevance lines, conquerable steps, prompt use in the sim, practice-based attribution and self-evaluation before the recomputed tier are the standard tools. (INS-059, INS-060, INS-061, INS-062, INS-063, INS-064, INS-065)

#### Evidence

24. **Formats are chosen by method, tested with the method held constant, and judged after novelty fades.** (INS-066, INS-067, INS-068)
25. **LTF claims no learning gains it has not measured, and its rationales cite primary sources with rule grades, never league-table numbers.** (INS-069, INS-070, INS-072)
26. **LTF measures learning with delayed, unaided, varied challenges, and labels in-session numbers as performance.** (INS-071)

### Review checklist

Run these questions against a pull request that adds or changes a lesson, a challenge, a widget, a feedback surface or a progression rule. A "no" is a finding; cite the rule ID in the review.

#### For a lesson

- Does the lesson state every procedure it later expects the learner to perform, rather than asking the learner to discover it? (INS-001)
- Does each widget in "Explore" mode give a task and ask for a prediction or explanation? (INS-002, INS-003)
- Is there a stepped worked example, with expected indications and reasons, for each procedure the linked challenges score? (INS-007, INS-012)
- Has this procedure been shown in a different setting somewhere in the course? (INS-008)
- Is the procedure shown (image sequence, video, stepped widget) rather than only described? (INS-009)
- Is there a recognition check before the first scored attempt? (INS-010)
- Is any mental rehearsal prompt placed after the demonstration? (INS-013)
- Can an experienced learner reach the check without reading everything? (INS-005)
- Does every section of this lesson serve a check, or is it marked as optional depth? (INS-028)
- Are the learner-facing objectives two or three items, with observable verbs, linked to their checks? (INS-031, INS-032)
- Does the lesson open with a retrieval check on its prerequisite and an activation prompt? (INS-036, INS-039)
- Does each new idea end with a check, and are some checks process questions? (INS-037, INS-038)
- Does the lesson end with a transfer step that names what will be different in the sim? (INS-040)
- Has the lesson been reviewed against the five-step sequence, with any omitted step omitted on purpose? (INS-035)
- Are quiz items tagged with a taxonomy cell that matches the objective they check? (INS-033, INS-034)
- Does every quiz explanation give the answer, the reason and the consequence, and does every distractor get corrected? (INS-042, INS-048)

#### For a challenge

- Does the module's first challenge for this skill fix the variables the learner is not yet controlling? (INS-014)
- Which later challenge removes each support this one provides? (INS-018, INS-011)
- Is the challenge placed in a task class, and does it vary a condition from the previous task? (INS-020, INS-022)
- If this is the last challenge in its class, is it unsupported and does it use a novel setting? (INS-021, INS-057)
- Are concurrent sub-skills practiced together here rather than split into separate drills? (INS-024, INS-025)
- Are the scoring criteria visible in the Brief and in Fly mode? (INS-029, INS-015)
- Does every required criterion have a `reviewLink`, and is there a parallel challenge to retest it? (INS-052)
- Do `procedure` steps and `tips` name effects to look for, one sentence each? (INS-050)
- Are the `debriefQuestions` process questions, asked before the score is shown? (INS-038, INS-065)
- Are all tolerances in `criteria` sourced, with none restated in lesson prose? (INS-030)

#### For feedback, progression and Fly mode

- Does the result screen lead with what to work on and why, with the score second? (INS-044, INS-042)
- Is the feedback about the task, with praise rare and followed by a next step? (INS-043, INS-063)
- Does feedback appear only after the learner commits? (INS-047)
- Does the change add any ranking or comparison between learners? (INS-045)
- Does anything other than a challenge event interrupt the learner during a flight? (INS-049)
- Does progress count demonstrated criteria rather than pages read? (INS-051, INS-058)
- Are retries free, and does repeated failure lead to an easier path? (INS-053, INS-054)
- Is difficulty adaptation based on the learner's results, and are success rates being checked against data? (INS-055, INS-056)
- Does any new motivational device take instruction time, distract from the objective, or compete with the sim for attention? (INS-059, INS-060)
- Is relevance stated in one concrete line? (INS-061)

#### For any design rationale or claim

- Is the format justified by the method it enables? (INS-066)
- If two designs are compared, is the method held constant, and is the comparison run past the novelty period? (INS-067, INS-068)
- Does the rationale cite primary evidence with rule IDs and grades, and avoid league-table effect sizes? (INS-069, INS-072)
- Does any copy claim learning gains that LTF has not measured? (INS-070)
- Is the success of the change judged by delayed, unaided results in new conditions? (INS-071, INS-006)
