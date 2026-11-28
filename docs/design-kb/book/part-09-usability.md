# Usability Principles and Evaluation

Usability is the part of design that can be checked. A page can be handsome and still leave a beginner unsure which button starts the lesson, whether the quiz answer was saved, or what the stopwatch's Reset will erase. This Part covers the principles that explain such failures (the heuristic lists of Nielsen, Shneiderman, Norman, Tognazzini and ISO 9241-110), the definitions that make usability measurable (ISO 9241-11), and the evaluation methods that find problems before learners do: heuristic inspection, usability testing, and questionnaires such as the System Usability Scale. It then applies them to the Learn to Fly (LTF) client as it stands in the code: `LessonPage`, `ChallengePage` and its Brief, Fly and Debrief tabs, `FlyModePage`, `QuizBlock`, `ErrorState`, `Toast`, the widgets and the reference pages.

The evidence is uneven, and the grades say so. The principles themselves are expert consensus: their derivation is thinner than their reputation, and no heuristic list has been validated as a measuring instrument. The evaluation literature is stronger and more sobering. It is well replicated that individual evaluators miss most problems and disagree with each other, that each added test participant finds fewer new problems, and that small samples vary a great deal by chance. The popular "five users find 85% of problems" is an average from particular conditions, not a constant. Read the principles chapters as a shared vocabulary for review, and the evaluation chapters as the protocol LTF should run. The last chapter collects the decisions and a checklist for pull requests.

## What Usability Is

### The standard definition

ISO 9241-11 defines usability as "the extent to which a system, product or service can be used by specified users to achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use" [@iso2018ergonomics]. The definition is quoted here as ISO 9241-110:2020 reproduces it (clause 3.6, citing 9241-11:2018, clause 3.1.1), because the 2018 standard itself is paywalled [@iso2020ergonomics]. The second edition replaced the 1998 text and was reviewed and confirmed in 2023 [@iso2018ergonomics].

Three words in the definition do most of the work, and all three are "specified". Usability is not a property a screen has in the way it has a width. It is an outcome of use, and it changes when the users, their goals or the setting change. A reference table that works for a learner at a desk may fail for the same learner glancing across from a running simulator with a hand on the yoke. A claim that "the lesson page is usable" is empty until it says for whom, for what, and where. The standard is explicit that it supplies a framework, not methods for design or evaluation [@iso2018ergonomics].

The related definitions are precise and worth adopting as vocabulary. Context of use is the combination of users, goals and tasks, resources and environment, where the environment includes technical, physical, social, cultural and organizational parts. A goal is an intended outcome; a task is the set of activities undertaken to reach it, so goals are independent of the means and tasks describe particular means. A user includes those who operate the system, use its output, or support it. User experience is the combination of a user's perceptions and responses resulting from use and anticipated use. All of these are given with their clause numbers in the ISO 9241-110 preview [@iso2020ergonomics].

### Effectiveness, efficiency and satisfaction

The three components each have a definition [@iso2020ergonomics]. Effectiveness is the accuracy and completeness with which users achieve specified goals. Efficiency is the resources used in relation to the results achieved. Satisfaction is the extent to which the user's physical, cognitive and emotional responses to use meet the user's needs and expectations.

They are separate for a reason: they do not move together. Users can rate a product highly while failing tasks, and can complete tasks quickly while disliking the experience. The measurement chapter of this Part gives the evidence: on the System Usability Scale, the correlation between the satisfaction score and task performance is modest [@brooke1996sus], and in metro-map experiments people's ratings were unrelated to how fast they planned journeys [@roberts2017preference]. One natural mapping of the components to measures (not the standard's text) is task success and errors for effectiveness, time or effort for efficiency, and a questionnaire for satisfaction. A design review that reports only one of the three has not reported usability.

::: {.rule #USE-001 grade="C"}
**State every usability goal or claim with its specified users, goals and context of use.** ISO 9241-11 defines usability relative to specified users, goals and context, so a claim without them cannot be checked or refuted [@iso2018ergonomics; @iso2020ergonomics]. The standard supplies the form, not the targets: numeric targets are product decisions.

*In LTF:* write goals in the form "complete beginners (users) finish Lesson 0.1 and its quick checks (goal) in a desktop browser beside a running MSFS 2024 session (context)". A pull request that says a page is "easier" names which of these it improved.
:::

::: {.rule #USE-002 grade="C"}
**Measure effectiveness, efficiency and satisfaction separately, and never let one stand in for another.** The three components are defined independently [@iso2020ergonomics], and ratings dissociate from performance in experiments [@roberts2017preference] and in SUS data, where satisfaction scores explain little of task performance [@brooke1996sus].

*In LTF:* a usability round on `ChallengePage` reports task completion (did the learner reach the Debrief tab with a scored rubric), time or deviations, and a satisfaction measure, as three numbers.
:::

### Context of use is a design input

Because context is part of the definition, a product with several contexts has several usability targets. LTF has at least three. A lesson is read at a desk with full attention, often before the simulator is open. A challenge brief is read while setting up the simulator, with attention split between two screens. Fly mode is used during flight, on a second screen, at a glance, with hands on the controls; `FlyModeLayout` already acknowledges this with a dark ground, `text-xl` base size and `text-5xl` stopwatch digits. The environment part of the context (technical, physical, social) differs in each: screen size and distance, lighting, whether a keyboard is reachable, whether the learner is mid-maneuver.

The context also differs by user group. LTF's audience is a beginner who has never flown, but beginners differ: some have used no flight simulator, some have played other games, some have used MSFS. Faulkner's 60-user study found large differences between experience groups in the same task (mean deviations from the optimal path of 65.6, 43.7 and 19.2 for her novice/novice, expert/novice and expert/expert groups) [@faulkner2003beyond]. A usability goal for "beginners" should say which beginners.

::: {.rule #USE-003 grade="C"}
**Keep a written context-of-use record for each distinct use situation, and set separate targets for Fly mode.** The environment is part of the definition of usability [@iso2018ergonomics], so a screen used at a glance during flight has different requirements from one read at a desk.

*In LTF:* record three contexts (lesson reading, challenge setup, in-flight lookup) with screen, distance, attention, input devices and interruptions. `FlyModePage`, `KeyNumbers large` and the checklist pages are judged against the in-flight record, not the desk one.
:::

### Use error, not user error

ISO 9241-11 defines a use error as a user action or lack of action that leads to a result different from that intended by the manufacturer or expected by the user, and chooses the term to avoid implying blame [@iso2020ergonomics]. The choice of word is a choice of stance. Reason's system approach makes the same move for safety: people are fallible, errors are consequences rather than causes, and the useful question is how defenses failed rather than who was careless [@reason1990human; @reason2000human]. Norman's account of everyday design puts it as "human error? no, bad design" [@norman2013design].

For a teaching product the stance has a practical edge. When many learners give the same wrong answer to a quick check, the first hypothesis is that the question, the diagram or the preceding text misled them. When learners tick the wrong `FlyPanel` step, the first hypothesis is that two steps look alike.

::: {.rule #USE-004 grade="C"}
**Record failures in reviews and analytics as use errors attributed to the design, not as learner mistakes.** The standard's term is chosen to avoid blame [@iso2020ergonomics], and the system approach to error treats errors as consequences of conditions designers create [@reason1990human].

*In LTF:* the problem log for a test round has a "design condition" column; a quiz item missed by many learners is filed against the item and its lesson, and learner-facing copy such as "Not quite." stays neutral.
:::

### The three principles of Gould and Lewis

The founding statement of user-centered design is three principles from Gould and Lewis: early and continual focus on users and their tasks; empirical measurement, in which intended users carry out real work with simulations and prototypes while their performance and reactions are observed, recorded and analyzed; and iterative design, in which problems found are fixed and the cycle repeats [@gould1985designing]. They insist that a single revision is not enough, that the implementation must allow cheap change, and that testable behavioral goals should be set early.

Their survey is the part most often forgotten. Of 447 systems planners, designers and developers asked to write the key steps in developing a system for end users, 26% mentioned none of the three principles, 35% one, 24% two and 16% all three; 62% mentioned early focus on users, 40% empirical measurement and only 20% iterative design [@gould1985designing]. Grading was liberal and the sample probably leaned toward human factors. The principles feel obvious once stated, and still go unmentioned.

They also name the confusions that defeat the principles. Showing a design to users for approval is not studying their work. Demonstrating a prototype is not testing it: a usability test is "not a selling job". Designers underestimate how diverse users are [@gould1985designing]. Cockton's later critique (2008, known to this lane only through search snippets) argues the principles were stated after the fact and that the paper gives few examples of the first two succeeding, so they are craft wisdom rather than a tested method.

::: {.rule #USE-005 grade="C"}
**Set a testable behavioral goal for each lesson, challenge and tool before it is built or redesigned.** Gould and Lewis recommend measurable behavioral goals set early, so that a test has something to pass or fail [@gould1985designing]; vague goals such as "easy to use" cannot be tested.

*In LTF:* each content or page change states a goal such as "a new learner finds the Fly tab from the Brief tab and ticks the first step unaided". The goal sits in the pull request next to the plan step it completes.
:::

::: {.rule #USE-006 grade="C"}
**Keep demonstrations and reviews separate from tests, and do not count a demo as evidence.** A test has intended users doing real tasks while observers record what happens; showing a screen for approval measures politeness [@gould1985designing].

*In LTF:* walking a pilot friend through a finished `FlyModePage` is a review. It can catch factual problems, but it does not show that a beginner can use the page.
:::

### Usable is not the same as useful

Greenberg and Buxton warn that evaluation methods such as think-aloud, task walkthroughs and heuristic evaluation look for problems, not benefits, and so favor "more usable systems, but not radically new ones" [@greenberg2008usability]. They argue that usability evaluation applied by rule can mute early creative ideas, quash an immature but promising concept, and lend false scientific weight to a prototype; the method should follow from the question. Their essay does not claim testing is useless: the authors have practiced it for decades and expect it to continue for many situations.

For LTF the distinction is direct. A lesson a learner can navigate without a single error may still fail to teach. Usability measures say whether the learner could use the page; learning measures (a delayed quick check, a challenge result) say whether the page did its job.

::: {.rule #USE-007 grade="C"}
**Pair every usability measure of a lesson or challenge with a learning or outcome measure.** Usability methods find obstacles, not value, so a flow can pass a usability test and still be useless [@greenberg2008usability].

*In LTF:* a redesign of `LessonPage` is judged on navigation and completion and also on quick-check results and later challenge tiers; a redesign that improves one and harms the other is not an improvement.
:::

::: {.rule #USE-008 grade="C"}
**Evaluate early concepts as sketches compared side by side, and test working prototypes only once a direction is chosen.** Premature evaluation of a sketch treated as a prototype can kill a good concept over the bugs of its first build [@greenberg2008usability].

*In LTF:* a new widget or Fly mode layout starts as two or three rough alternatives shown to a few beginners; usability testing of a built `WidgetFrame` comes after one has been chosen.
:::

### What this means for Learn to Fly

The plan files do not contain a usability goal or a usability test step; a search of `v1.md` and `v2.md` for usability, user testing, think-aloud or SUS finds none. That is the first gap this Part addresses. Keep the practice of stating who the product is for (the beginner who has "never flown", at a desktop with a second screen), and make it operational:

- Write three context-of-use records (lesson at a desk, challenge setup, in-flight lookup) and keep them beside the design system docs. `FlyModePage`, `KeyNumbers large`, `/reference/checklists/:slug` and `/reference/speeds` are judged against the in-flight record (USE-003).
- Give each module's first lesson a behavioral goal in the USE-001 form, beginning with Lesson 0.1, which the landing page promises "takes five minutes". That promise is a usability claim with a stated efficiency target, and it should be tested with beginners before it is printed (USE-005).
- Add a "design condition" field to test logs and to the triage of the public GitHub issues that `ReportProblemDialog` files, and keep feedback copy neutral (USE-004). The current quiz copy ("Not quite.", "Change your answer and check again.") already follows this.
- For each redesign, report effectiveness, efficiency and satisfaction separately, and a learning measure alongside them (USE-002, USE-007).
- Start new widgets and the planned onboarding screens (the `/welcome` flow in the plan, which is not in the code) as compared sketches (USE-008).

## The Heuristic Canon

### From a thousand guidelines to ten heuristics

The short heuristic lists that designers now quote are a reaction to long ones. In 1986 Smith and Mosier, working at MITRE for the U.S. Air Force, compiled 944 guidelines for user interface software in six functional areas: data entry (199), data display (298), sequence control (184), user guidance (110), data transmission (83) and data protection (70) [@smith1986guidelines]. Each guideline had a number, a title, a one-sentence statement, examples, exceptions, comments and source notes. The authors were candid about the limits. Guidelines are not rules; many rest on judgment rather than experiment; not every one applies to every system; and a team must select, tailor, prioritize and document them as project design rules with an exception process. In their words, "It is only specifically worded design rules that can be enforced, not guidelines." Their own introduction reports a 1986 survey in which respondents applied only about 40 percent of the guidelines from the previous edition [@smith1986guidelines].

The principles behind the report aged well; the specifics did not. Nielsen later reviewed a sample of 60 of the guidelines, ten from each section, and left 47 uncommented as still correct; of the 13 he annotated, seven were outdated (field markers, automatic justification, function-key conventions and similar mainframe-era advice) and six still held with caveats [@smith1986guidelines]. That is one expert's judgment on a small sample, and it says nothing about the other 884 guidelines, but its pattern is instructive: the reasons survive, while the technology-bound wording expires.

Nielsen and Molich cite the Smith and Mosier report as the source of roughly a thousand rules, and set out the opposite approach: a short list of principles that an evaluator can hold in mind while inspecting an interface [@nielsen1990heuristic]. Their 1990 list had nine items: simple and natural dialogue; speak the user's language; minimize user memory load; be consistent; provide feedback; provide clearly marked exits; provide shortcuts; good error messages; prevent errors. The argument was explicitly economic. Cheap, intuitive methods are the ones that get used in real projects, which they called "discount usability".

::: {.rule #USE-009 grade="C"}
**Turn general principles into specifically worded LTF design rules that a reviewer can check, each with a stated exception process.** Smith and Mosier found that only specific design rules can be enforced, and that large lists of general guidelines go largely unapplied [@smith1986guidelines].

*In LTF:* "every altitude states MSL or AGL" and "every control name matches the name the sim uses" are enforceable; "use clear labels" is not. AGENTS.md already works this way for copy; extend it to interface rules, with exceptions recorded in the pull request.
:::

::: {.rule #USE-010 grade="C"}
**Keep the LTF review rule set short, grouped by function, and revisit it when the platform changes.** A large list is mostly ignored (about 40 percent applied in the 1986 survey), and guidelines tied to a technology expire with it [@smith1986guidelines].

*In LTF:* group interface rules by entry, display, sequence and guidance, as the report did, and review them when the stack or the simulator changes (a new MSFS release, a new input device), since those are LTF's equivalents of the mainframe function key.
:::

### How the ten heuristics were derived

The familiar list comes from a 1994 study in which Nielsen compared seven published sets of usability principles, 101 principles in all, against a database of 249 real usability problems collected from 11 earlier projects [@nielsen1994enhancing]. Seven projects had been evaluated by heuristic evaluation and four by user testing; two had character-based interfaces, six graphical and three telephone-operated. Nielsen rated how well each of the 101 principles explained each problem on a scale from 0 (not at all) to 5 (complete), with 3 meaning a major part. Only he could rate, since the original project knowledge was needed, and he warns of "less than perfect reliability".

The results resist a tidy story. A principal components analysis found no small set of factors: the two largest each accounted for about 6% of variance, the seven largest about 30% together, 25 factors with at least 1% each reached 62%, and 53 factors were needed for 90% [@nielsen1994enhancing]. Usability problems arise from a broad range of phenomena. The seven named factors (visibility of system status; match between system and the real world; user control and freedom; consistency and standards; error prevention; recognition rather than recall; flexibility and efficiency of use) are, Nielsen notes, his own subjective labels for those factors.

Coverage told a more useful story. A greedy choice of ten principles from the pool explained 85% of the 249 problems, led by consistency ("same thing, same way") at 23%. Of the 249 problems, 82 were classed serious and 167 minor. The ten principles that best explained serious problems covered 95% of them, led by "seeing and pointing versus remembering and typing" at 22% and "same things look the same" at 18% [@nielsen1994enhancing]. Serious problems were somewhat more concentrated, and they leaned on visibility and salience. Principles that mostly explained minor problems (speak the user's language, aesthetic integrity, shortcuts) were kept because they matter for satisfaction and expert efficiency.

The paper's conclusion names nine heuristics: visibility of system status; match between system and the real world; user control and freedom; consistency and standards; error prevention; recognition rather than recall; flexibility and efficiency of use; aesthetic and minimalist design; and help users recognize, diagnose and recover from errors. The published list of ten adds help and documentation. Nielsen states that the heuristics seem excellent at explaining problems already found, but that whether they are good at finding new ones remains untested [@nielsen1994enhancing]. The database also came largely from the projects where the original heuristics were used, which favored them in the comparison (the original set scored a mean rating of 3.72 and explained 82% of problems at level 3 or above, against 2.38 and 49% for the Star interface principles), and Nielsen cautions that the comparison is not a competition.

::: myth
**"Nielsen's ten heuristics are a validated instrument for measuring usability."** The ten are the best-known checklist in the field, and are often treated as if a page that "passes" them is usable. Their derivation is one rater's judgments of one problem database, which Nielsen describes as less than perfectly reliable, and the study tested only how well the principles explain problems already found, not whether they find new ones [@nielsen1994enhancing]. Inspection with them also suffers a large evaluator effect [@hertzum2001evaluator]. They are a good shared vocabulary, not a measurement.
:::

::: {.rule #USE-011 grade="C"}
**Use Nielsen's ten heuristics as the shared vocabulary for LTF design reviews, and file each finding under one of them.** They explained most of a large problem database [@nielsen1994enhancing] and are the common language of practice, but they are expert craft knowledge, not a validated instrument.

*In LTF:* every finding in a review of `LessonPage` or `ChallengePage` names the heuristic it falls under, which makes merged lists from several reviewers comparable.
:::

::: {.rule #USE-012 grade="B"}
**Spend the most review effort on consistency and on recognition rather than recall, the two principles that explain the most problems.** In Nielsen's database consistency explained 23% of all problems, and for serious problems "seeing and pointing versus remembering and typing" (22%) and "same things look the same" (18%) led [@nielsen1994enhancing]. The evidence is one rater and one database, so it sets priorities rather than proving them.

*In LTF:* the first two questions in any review are whether the same thing looks and is named the same everywhere, and whether the learner can see what they need rather than remember it.
:::

### Shneiderman's eight golden rules

Shneiderman's rules, first published in 1985 and presented in the sixth edition of his textbook in Section 3.3.4, are the other canonical list [@shneiderman2016designing]. Strive for consistency (with understandable, limited exceptions such as confirming a delete). Seek universal usability (explanations for novices and shortcuts for experts both improve a design). Offer informative feedback, modest for frequent minor actions and more substantial for infrequent major ones. Design dialogs to yield closure: action sequences with a beginning, middle and end and feedback at the end of each group. Prevent errors, and when they occur give simple, specific recovery guidance and leave the state unchanged or explain how to restore it. Permit easy reversal of actions, which reduces anxiety and encourages exploration. Keep users in control. Reduce short-term memory load.

Overlap with Nielsen's list is large: consistency, feedback, error prevention, reversal and memory load appear in both. Closure and universal usability are Shneiderman's distinctive contributions, and both matter for a course. The rules are expert-derived rules of thumb, not experimental findings, and they have not been tested as a set [@shneiderman2016designing]. One element is shaky: the eighth rule's explanation cites "seven plus or minus two" chunks, a figure the recognition chapter of this Part replaces.

### ISO 9241-110 and Tognazzini

ISO 9241-110:2020 is the standards counterpart, with seven interaction principles for analysis, design and evaluation, independent of interaction technique [@iso2020ergonomics]. Suitability for the user's tasks: functions and interactions are based on the task, not the technology. Self-descriptiveness: information is presented where needed so capabilities and use are immediately obvious. Conformity with user expectations: behavior is predictable from the context and accepted conventions. Learnability: the system supports discovery, allows exploration, minimizes the need for learning and supports it when needed. Controllability: users control the interface, including speed, sequence and individualization. Use error robustness: the system helps avoid errors, tolerates identifiable ones and helps recovery. User engagement: functions and information are presented in an inviting and motivating way, including trustworthiness.

The 2020 revision merged individualization into controllability and added user engagement. The order implies no priority; applying one recommendation does not satisfy a principle; and the principles overlap and need trade-offs (the standard's own example is a smart watch, where conformity with expectations outranks self-descriptiveness because the display cannot carry explanations). The standard excludes marketing, aesthetics and corporate identity, and does not cover the specifics of safety-critical systems, collaborative work or AI features [@iso2020ergonomics].

Tognazzini's "first principles", an expert craft list revised in 2014, add emphasis rather than new categories: discoverability ("If the user cannot find it, it does not exist"), explorable interfaces that always allow undo and a way out, protection of users' work, visible state, defaults whose scope is stated, and secondary cues whenever color carries information [@tognazzini2014first]. Most of the numbers on his page are his own unsourced estimates and are not used in this Part.

::: {.rule #USE-013 grade="C"}
**Add ISO 9241-110's learnability and user engagement to the review vocabulary, since Nielsen's ten have no heading for them.** Learnability (discovery, exploration, retention) and engagement (motivation, trustworthiness) are separate principles in the 2020 standard [@iso2020ergonomics]; for a course they are central rather than peripheral.

*In LTF:* review `LessonPage` for whether a returning learner can rediscover where they were (learnability) and whether verification status is visible (trustworthiness, under engagement).
:::

### Convergence is not independent evidence

The lists agree to a striking degree: consistency, feedback, error prevention and recovery, control and memory load appear in all of them. This is sometimes taken as evidence that the principles are right. It is weaker evidence than it looks. ISO 9241-110 says its recommendations derive from heuristic guidance including Molich, Nielsen and Tognazzini [@iso2020ergonomics]; Shneiderman notes that Nielsen and others expanded his rules [@shneiderman2016designing]; Nielsen's 1994 pool included earlier lists [@nielsen1994enhancing]. The lists share ancestors. Their agreement shows a stable professional consensus, which is worth having, but it is graded C: expert consensus, not experiment.

General lists also miss domain problems. Nielsen's factor analysis found usability problems spread across dozens of underlying factors, with the seven largest explaining only about 30% of the variance [@nielsen1994enhancing]; a ten-item list therefore names broad families, and the specific hazards of a domain have to be added by the team that knows them. For LTF those checks concern units, altitude references, control names and the simulator version.

::: {.rule #USE-014 grade="C"}
**Extend the general heuristics with LTF-specific review items for units, altitude references, control names, simulator version and verification status.** General lists explain problems at a high level and do not name domain hazards [@nielsen1994enhancing; @smith1986guidelines].

*In LTF:* the checklist at the end of this Part includes these items. They mirror the copy rules in AGENTS.md (knots, feet, nautical miles, inHg, MSL or AGL on every altitude) and the `{{vspeed.*}}` and `{{aircraft.*}}` tokens.
:::

### What this means for Learn to Fly

LTF already has the beginnings of a tailored rule set: the copy rules in AGENTS.md, the token system for aircraft numbers, and component comments such as `Card`'s "State is carried by the badge, the eyebrow and the fill, never a colored left border." Those are specifically worded and checkable, which is what Smith and Mosier asked for. What is missing is an interface rule set at the same level, and a single vocabulary for review findings.

- Adopt Nielsen's ten plus ISO's learnability and engagement as the twelve headings under which review findings are filed (USE-011, USE-013).
- Put consistency and recognition first in every review (USE-012). The next three chapters show where each applies in the current code.
- Write the interface rules from this book in enforceable form and keep them short (USE-009, USE-010). The `ltf-review` checklist files under `.claude/skills/ltf-review/references/` are the natural home; the rule IDs in this Part are the source.
- Keep the domain items (USE-014) as standing checklist entries for content and for every page that shows numbers: `SpeedsPage`, `KeyNumbers`, `AirportPage`, the challenge Brief tab's "Sim setup" list and the widgets.

## Visibility, Feedback and System Status

### The gulf of evaluation

Norman's model of action describes a person acting on a system in seven approximate stages: forming a goal, forming an intention, specifying an action and executing it, then perceiving the state of the world, interpreting it and evaluating the outcome against the goal [@norman1986cognitive]. The model locates difficulty in two gulfs. The gulf of execution lies between what the person wants to do and what the system lets them do; the gulf of evaluation lies between what the system shows and what the person can conclude from it. The second is bridged when the output presents a conceptual model that is readily perceived and interpreted. The stages are an approximation rather than discrete steps, and not every goal needs all of them [@norman1986cognitive].

Visibility of system status, the first of Nielsen's heuristics, is the design response to the gulf of evaluation [@nielsen1994enhancing]. Feedback, which Norman defines as informing people about the results of their actions, is its mechanism [@norman2013design]. Norman's early analysis of slips adds a reason that goes beyond comfort: a slip can be detected only when some monitoring process becomes aware of a discrepancy between what was intended and what happened, so feedback is needed at each level of action [@norman1981categorization]. A learner who cannot see the result of an action cannot catch their own mistake.

In Nielsen's problem database, serious problems leaned on visibility and salience more than minor ones did, and "seeing and pointing versus remembering and typing" was the single best explainer of serious problems [@nielsen1994enhancing]. Visibility is not a polish item.

::: {.rule #USE-015 grade="B"}
**Make the next action and the current state identifiable at a glance on every screen used during flight.** Serious problems in Nielsen's database concentrated on visibility and salience [@nielsen1994enhancing], and the gulf of evaluation is widest when attention is divided [@norman1986cognitive].

*In LTF:* on `FlyModePage` the current unticked step in `FlyPanel large`, the stopwatch state and the "Finish and debrief" action should be findable without reading anything else. Test this with a glance task: show the screen briefly, then ask what to do next.
:::

### Feedback proportional to the action

Shneiderman's third rule asks that every action produce some response, modest for frequent and minor actions and more substantial for infrequent and major ones [@shneiderman2016designing]. The proportion matters in both directions. A heavy response to a trivial action (a toast for every checkbox) trains people to ignore responses; a light response to a heavy action (a quiet status line after deleting an account) leaves people unsure it happened. Tognazzini adds that status should be visible, up to date and accurate, and that the system should acknowledge each click at once even when the work behind it takes longer [@tognazzini2014first]. His 50 millisecond figure for that acknowledgment is his own assertion and is not adopted here as a requirement.

ISO 9241-110 puts the same idea under self-descriptiveness, including a clear indication of processing status [@iso2020ergonomics]. Norman's signifiers belong here too: "Signifiers are signs, perceptible signals of what can be done" [@norman2013design]. Before the action, the signifier says what is possible; after it, feedback says what happened.

::: {.rule #USE-016 grade="C"}
**Give every learner action a visible response in place, scaled to the weight of the action.** Frequent minor actions get a modest in-place change; rare major ones get a substantial, explicit confirmation [@shneiderman2016designing; @iso2020ergonomics].

*In LTF:* a `FlyPanel` step tick changes the row in place (`border-go bg-go-tint`), which is right; "Mark lesson complete" changes to a "Lesson complete" status line, which is right for a frequent action; submitting a debrief produces the full result card with `TierBadge` and `tier-pop`, which suits a rare, major action. Do not add toasts to tick-level actions.
:::

### Closure

Shneiderman's fourth rule asks that action sequences be grouped with a beginning, a middle and an end, with feedback at the end of each group so that people feel the task is finished and can release it from memory [@shneiderman2016designing]. A checkout confirmation is his example. Degani and Wiener's guidelines for flight-deck checklists make the same point for procedures: the completion call should be the last item, and long checklists should be broken into smaller chunks tied to systems and functions [@degani1990checklists]. Closure tells the learner when to stop looking at the page.

LTF has closure at the large scale. A lesson ends with a completion panel ("Finished reading and trying the questions?" and "Mark lesson complete"), and a challenge ends with a debrief and a result card that reads criterion by criterion. Closure is weaker at the small scale. A `FlyPanel` step list ends with the last step and a "Finish and debrief" button, but nothing marks the end of a chunk within a long procedure, and the lesson's own sections end without a marker of what was covered.

::: {.rule #USE-017 grade="C"}
**End every lesson, challenge and procedure chunk with an explicit closure that states what was completed.** Closure frees memory and marks the end of a task [@shneiderman2016designing], and chunked checklists with a completion line are a long-standing human-factors guideline [@degani1990checklists].

*In LTF:* keep the lesson completion panel, the debrief result card and `ChecklistRunner`'s announcement that the checklist is complete. In `FlyPanel` and in long checklists, close each chunk of steps with a visible completion line before the next chunk starts, so the learner looking back from the sim knows a block is done.
:::

### Show the target state, not just "done"

A tick shows that someone acted; it does not show what state they left the system in. Degani and Wiener's fourth guideline is that a checklist response should portray the desired status or value, not just "checked" or "set" [@degani1990checklists]. Their field study of airline crews (42 crews, 72 flights, about 140 flight hours observed from the jumpseat) found the checklist to be "a generator and coordinator of many cockpit tasks", not only a memory aid. The report is a mixed-method technical study of one carrier, and its guidelines are expressly proposals, but the display principle transfers to any procedure on a screen.

For LTF this governs how a step row is written, not only how it looks. A row that says the target state lets the learner compare the screen with the sim, which bridges the gulf of evaluation. A row that only names the control leaves the learner to remember what "set" means. The aviation content of each row is a content decision under the project's sourcing rules; the display rule is that the row states the state.

::: {.rule #USE-018 grade="C"}
**Write procedure and checklist rows so that the row states the target state, and treat the checkbox as a record, not the check itself.** Responses that portray the desired status support verification better than "checked" [@degani1990checklists].

*In LTF:* `FlyPanel` step rows and `ChecklistRunner` items name the control and the state it should be in, in the sim's own words; the checkbox records that the learner compared them. Aircraft values in those rows come from `{{aircraft.*}}` tokens.
:::

### Response time categories

Nielsen distills older work (Miller 1968; Card, Robertson and Mackinlay 1991) into three limits [@nielsen1993response]. About 0.1 second is "about the limit for having the user feel that the system is reacting instantaneously"; beyond it, the user needs feedback. About 1.0 second is "about the limit for the user's flow of thought to stay uninterrupted"; between 0.1 and 1 second users notice the delay but need no special feedback. About 10 seconds is "about the limit for keeping the user's attention focused on the dialogue"; longer waits invite people to switch tasks, so they need to know when the system expects to finish. For waits beyond about 10 seconds he recommends a percent-done indicator, ideally a graphic progress bar, and a clear way to interrupt; for waits of about 2 to 10 seconds a full percent-done indicator can be excessive and distracting, and a small busy indicator is enough [@nielsen1993response].

These are round categories of experience, not cliffs. Empirical work finds smooth effects of delay rather than sharp thresholds at 1 or 10 seconds, and patience varies with context; the 2014 update to Nielsen's page added no new data [@nielsen1993response]. They remain the most useful vocabulary for writing performance requirements, provided they are treated as budgets to test against.

::: {.rule #USE-019 grade="C"}
**Budget response times in three categories: an immediate change of control state for every input, under about a second for moving between lesson parts, and a percent-done indicator with a cancel control for anything that can exceed about ten seconds.** The categories come from Nielsen's synthesis of earlier response-time research; they describe experience, not sharp thresholds [@nielsen1993response].

*In LTF:* `Button` shows its `loading` spinner at once; route changes show `PageSkeleton` while a lazy chunk loads; widgets show `Skeleton h-72`. Nothing in the client currently runs past ten seconds; a future offline download of checklists or lessons would need the full treatment.
:::

::: {.rule #USE-020 grade="C"}
**Do not decorate short waits: for waits of a few seconds use a small, calm indicator in place rather than a full progress display.** A percent-done display that flashes on and off for a short wait distracts more than it informs [@nielsen1993response].

*In LTF:* keep `Skeleton` blocks and the button spinner; do not add full-screen loaders or progress bars to lesson navigation. The pulsing `AppLoading` logo is reserved for first load.
:::

### Visible save state

When a learner enters something (a quiz answer, a set of ticks, a debrief rubric), the status that matters most is whether it has been kept. Tognazzini's principle "protect users' work" asks that work be saved continuously and that state be visible [@tognazzini2014first]. LTF's challenge flow saves Fly tab ticks and debrief drafts in session storage so that a refresh or a detour through log-in loses nothing (`features/challenges/storage.ts`). The code comment is precise about the limit: if storage is blocked or full, "the form still works, it just won't survive a refresh". Session storage also ends with the tab. None of this is visible to the learner, who therefore cannot know whether closing the tab, or the browser crashing beside a heavy simulator, will lose a flight's ticks.

::: {.rule #USE-021 grade="C"}
**Show learners whether what they have entered is saved, where, and for how long.** Protecting work only helps if people can see that it is protected [@tognazzini2014first; @iso2020ergonomics].

*In LTF:* add a quiet status line to `FlyPanel` and `DebriefForm` ("Saved in this tab" or "Saved to your account"), and a warning in the same place when storage is unavailable, instead of failing silently. The existing "Not saved" `Callout` covers submit errors only.
:::

### Seeing the result of a maneuver

The stages of evaluation are hardest when the system is the simulator rather than the page. A beginner often cannot tell from the sim's picture whether a maneuver went well. Applying the seven stages to a challenge step means asking whether the learner knows the goal, can form an intention, can find the control, can execute the action, will see something in the sim, can interpret it, and can tell whether they succeeded [@norman1986cognitive]. The last three stages are the ones LTF can design for, by stating in the brief what success looks like in observable terms.

::: {.rule #USE-022 grade="C"}
**For each challenge step, state what the learner will see when it has gone right, in observable cues from the sim or the instruments.** The gulf of evaluation is bridged by output the person can perceive and interpret [@norman1986cognitive].

*In LTF:* the Brief tab's Procedure and "How you'll be scored" sections describe success in observable terms; any numeric target in them is a verified fact under the project's sourcing rules, not a design choice, and is written with tokens.
:::

### What this means for Learn to Fly

Much of the feedback design is already right and should be kept: the in-place tick on `FlyPanel` rows, `QuizBlock`'s live result in an `aria-live="polite"` region with "Correct!" or "Not quite." plus the explanation, the live "Score preview" with `TierBadge` and points in `DebriefForm`, `Toast` errors that persist and use `role="alert"` while success toasts auto-dismiss, `ProgressBar` with `aria-valuetext`, the `LessonPath` states, and the scroll-spy `SectionNav` that shows where the reader is.

Change or build:

- Fly mode glance test and layout (USE-015): the current step should be the most salient element on `FlyModePage` after the random-event alert.
- Chunk-level closure in `FlyPanel` and `ChecklistRunner` (USE-017), and target-state wording in step rows (USE-018).
- A visible save status for `FlyPanel` and `DebriefForm` (USE-021), with a warning when session storage is unavailable.
- Response-time budgets written into the definition of done for client changes (USE-019), checked with the existing e2e suite. Keep short waits calm (USE-020).
- Challenge briefs that state observable success cues (USE-022), reviewed under the content rules.

## Match, Recognition and Memory

### Speak the learner's language, and the sim's

"Speak the user's language" was in the 1990 list [@nielsen1990heuristic]; the 1994 synthesis broadened it into match between the system and the real world [@nielsen1994enhancing]. ISO 9241-110 puts the same idea under conformity with user expectations, with internal and external consistency and behavior predictable from accepted conventions [@iso2020ergonomics]. For most products "the real world" means the user's vocabulary. For LTF it means three vocabularies at once: the beginner's everyday words, the aviation terms the course is teaching, and the labels the simulator puts on its controls and menus. The learner has the first, is acquiring the second, and must act through the third.

The three pull in different directions. Everyday words are easiest at first but do not survive contact with the simulator. Aviation terms are the point of the course but are, by definition, not yet known. Simulator labels are what the learner will see on screen while flying, and Degani and Wiener's third checklist guideline asks for standardized names for controls and displays across every document that refers to them [@degani1990checklists]. Nielsen's coordination volume treats this as an organizational problem: the team needs one source of names and an owner for it [@nielsen1989coordinating].

The resolution is to treat the simulator's label as the name of record for anything the learner must find in the sim, to introduce aviation terms explicitly and define them where they appear, and to use everyday words for the explanation around them.

::: {.rule #USE-023 grade="C"}
**Name every simulator control, menu and setting exactly as the simulator labels it, and use that one name everywhere.** Standardized names for controls and displays are a checklist guideline [@degani1990checklists], and consistency of terminology is in every heuristic list [@nielsen1994enhancing; @shneiderman2016designing].

*In LTF:* lesson text, `FlyPanel` steps, the Brief tab's "Sim setup" rows, widget labels and glossary entries use the same string for the same control. Where the real aircraft's name differs from the sim's, the lesson says so once, in a "Sim vs reality" `Callout`.
:::

Internal codes are a quieter mismatch. LTF shows mono codes everywhere: "M0" for modules, "Lesson 0.1", "Challenge C4.3", and section numbers on the reference rail. They are useful for orientation once learned and are consistently styled, but a code is not a name, and on first contact "C4.3" means nothing. The landing page and `ChallengesPage` cards pair codes with titles, which is the right pattern; a code should never appear alone where a learner must make a choice.

### Recognition rather than recall

The best single explainer of serious problems in Nielsen's database was "seeing and pointing versus remembering and typing" (22% of serious problems) [@nielsen1994enhancing]. Norman's version is the distinction between knowledge in the head and knowledge in the world: how much people must remember versus how much the environment shows them [@norman2013design]. Shneiderman's eighth rule makes it concrete: do not make users carry information from one display to another [@shneiderman2016designing]. In Gould and Lewis's terms, a product that forces recall pushes the burden onto the person least equipped to carry it, the newcomer [@gould1985designing].

For a beginner beside a simulator the burden is acute. Any value the learner needs while acting in the sim must be on the second screen, not in a lesson read twenty minutes earlier. LTF already does this in several places: the sticky `KeyNumbers large` panel on `SpeedsPage`, the "Sim setup" list on the Brief tab with copy buttons, the "Terms in this lesson" glossary chips that open definitions in a `Popover`, and the objectives card at the top of each lesson.

::: {.rule #USE-024 grade="B"}
**Keep on screen everything the learner must act on or compare, at the moment they act, rather than relying on what an earlier lesson said.** Recognition-over-recall problems were the largest share of serious problems in Nielsen's database [@nielsen1994enhancing], and the principle is common to Norman's and Shneiderman's accounts [@norman2013design; @shneiderman2016designing]. Graded B because the database evidence is indirect.

*In LTF:* `FlyModePage` shows the steps, the goal and any reference value the steps use; a step never says "use the speed from Lesson 3.2". Glossary chips stay available on narrow screens (they move below the lesson below `xl`, which keeps them reachable).
:::

### Memory limits without the magic number

Shneiderman's explanation of the memory rule cites the familiar "seven plus or minus two" chunks [@shneiderman2016designing]. The number should not be used as a design limit.

::: myth
**"People can hold seven plus or minus two items in mind, so menus and lists should have no more than seven entries."** Miller's 1956 number was, in Cowan's words, "more of a rough estimate and a rhetorical device than a real capacity limit" [@cowan2001magical]. The full case, with the studies, is made in Part VIII, The Quantitative Laws of Interaction, and is not repeated here.
:::

What survives is the direction. A beginner has no chunks yet for flight concepts, so each new term or value costs a full slot. The practical rule is about what the learner must hold while doing something else, not about the length of a visible list.

::: {.rule #USE-025 grade="B"}
**Introduce only a few new terms or values in one step, and never require the learner to hold a value in memory while looking away to the sim.** Short-term capacity is small (about four chunks under strict conditions) and depends on the material [@cowan2001magical]; carrying information between displays is a classic memory burden [@shneiderman2016designing]. Graded B because the capacity figure is replicated but its interpretation is contested; do not quote a number as the limit.

*In LTF:* check each lesson section and each `FlyPanel` step for how many new items it asks the learner to track; split those that ask for many. Lists that stay visible (the curriculum, the challenge filters) are not limited by this rule.
:::

### Mindless choices and the click-count myth

Krug's first law is the book's title: a page should not make the user think [@krug2014dont]. His second law concerns navigation: it does not matter how many times the user has to click, as long as each click is a mindless, unambiguous choice. He argues that rules stipulating a maximum number of clicks are a poor metric, and that what counts is the thought each click requires and the uncertainty about whether the choice is right. He offers, with the hedge "might be something like", an exchange rate of three mindless clicks for one that requires thought, with exceptions where users repeat a path often or pages load slowly [@krug2014dont]. The book is craft authority from consulting and testing experience, not research; its scent-of-information idea is credited to Pirolli and Card's information foraging work.

::: myth
**"Every page must be reachable within three clicks."** The rule is popular in site specifications. Krug argues against it directly: the difficulty of each choice matters more than the number of choices, and his own exchange rate between easy and hard clicks is offered as a rough guess, not a measurement [@krug2014dont]. The full case, with the studies, is made in Part XIII, Information Architecture and Wayfinding, and is not repeated here.
:::

::: {.rule #USE-026 grade="C"}
**Make every fork a choice the learner can make without deliberation, by giving each option a label that says where it leads.** Krug's craft observation is that unambiguous choices cost little even when there are several, and ambiguous ones cost a lot even when there is one [@krug2014dont].

*In LTF:* the landing hero offers "Start lesson 0.1" and "See the curriculum", two clearly different destinations; keep that. On `ChallengePage` the Brief tab ends with "I'm set up, start flying", which says what happens next. Review every pair of adjacent actions for overlap, for example "Log in" and "Sign up" in the save-progress `Dialog`, and "Not now".
:::

Krug's other practical point concerns help. When a choice is genuinely hard, guidance should be brief, timely and unavoidable, like the "LOOK RIGHT" painted at London street corners [@krug2014dont]. Help on a separate page arrives too late and is skipped.

::: {.rule #USE-027 grade="C"}
**Put guidance at the point of need, in one or two lines, where the learner cannot miss it, instead of on a separate help page.** Brief, timely and unavoidable guidance works where documentation does not get read [@krug2014dont]; ISO 9241-110 asks that information be presented where it is needed [@iso2020ergonomics].

*In LTF:* a one-line hint beside a widget control, a `tip` `Callout` beside the Brief tab's procedure, or a hint under a `FormField` are the patterns. Nielsen's tenth heuristic, help and documentation, is served by the `/reference` hub for lookups, not for instructions on using the interface.
:::

### Natural mapping

Mapping is how controls relate to their effects, and a natural mapping exploits spatial or cultural correspondence so that the relation needs no learning; Norman notes that what counts as natural varies by culture [@norman2013design]. Widgets that depict the simulator's controls inherit a strong external convention: the sim's own layout and direction of movement. A slider that raises a value by moving left, or a knob drawn in a different place from the panel the learner will look at, is a mapping error even if it is labeled.

Degani and Wiener's eighth guideline applies the same principle to sequence: order checklist items by the geography of the cockpit, with a pictorial flow for training, so that the eye moves through the panel in one sweep [@degani1990checklists]. Their tenth guideline outranks it: put the most critical items as close as possible to the beginning so that they are done before interruptions. Where the two conflict, criticality wins.

::: {.rule #USE-028 grade="C"}
**Make every widget control move in the same direction, and sit in the same relative place, as the simulator control it depicts.** Natural mapping removes the need to learn the relation [@norman2013design], and conformity with external conventions is an ISO principle [@iso2020ergonomics].

*In LTF:* the native range sliders in `control-surfaces`, `pitch-power`, `airspeed-indicator` and the G1000 PFD widget are reviewed against the sim's panel for direction and placement. Where a widget simplifies, the "Simplified model" badge in `WidgetFrame` says so, and the lesson says what differs.
:::

::: {.rule #USE-029 grade="C"}
**Order procedure steps by where the learner looks in the sim, except that the most consequential steps come first.** Geographic ordering and critical-items-first are both checklist guidelines, and the authors give the second precedence when they conflict [@degani1990checklists].

*In LTF:* `FlyPanel` step lists and `/reference/checklists/:slug` follow the panel layout for sequence; the ordering of real procedures is content, decided from sources under the project's rules, and this rule governs only how the page presents an order already verified.
:::

### What this means for Learn to Fly

The product's aviation framing (Brief, Fly and Debrief tabs, "Day" and "Night" themes, the kneeboard, the POH-style numbered rail) is a strength for match with the real world, but it uses terms a beginner may not know yet. "Kneeboard" and "POH" are aviation vocabulary; each should be introduced by a definition the first time a learner meets it, through the glossary `Popover` or a line of copy.

- Keep: glossary chips with definitions in place, `KeyNumbers large` beside the speeds table, copy buttons in "Sim setup", the objectives card, codes paired with titles on cards (USE-024).
- Build a single names list for simulator controls (one source, like `content/aircraft.yaml` for numbers) and check lessons, widgets and `FlyPanel` against it (USE-023).
- Review step granularity in `FlyPanel` and lesson sections for memory load (USE-025), and ban cross-lesson recall in steps.
- Review adjacent actions for ambiguity (USE-026), and move interface guidance next to the controls it explains (USE-027).
- Review widget mappings against the sim (USE-028) and keep presentation order separate from procedure content (USE-029).

## Consistency and Standards

### The largest single explainer

In Nielsen's database of 249 problems, consistency ("same thing, same way") explained more problems than any other principle, 23% of the total, and "same things look the same" explained 18% of the serious ones [@nielsen1994enhancing]. Every heuristic list puts it first or near the top: Shneiderman's first golden rule is "strive for consistency", asking for the same action sequences, terminology and visual conventions in similar situations, with exceptions that are understandable and few [@shneiderman2016designing]; ISO 9241-110 asks for internal and external consistency under conformity with user expectations [@iso2020ergonomics]. Grudin counted over 60 guidelines with "consistent" in the title in Smith and Mosier's compendium [@grudin1989case].

The experimental support is narrower than the consensus suggests. Ozok and Salvendy measured consistency in web page designs and its effect on use in a four-group experiment with ten participants per group; consistency improved error rates, but the hypothesized gains in performance time and satisfaction were not supported [@ozok2000measuring]. They distinguished physical consistency (how equal things look), communicational consistency (how the interface talks) and conceptual consistency (whether the same idea maps to the same structure); the first two interacted with each other, the third behaved separately. With ten per cell, the null results are weak evidence of no effect, but the positive result points to where consistency pays: fewer mistakes.

::: {.rule #USE-030 grade="B"}
**Render the same kind of thing with the same component, the same wording and the same behavior everywhere it appears.** Consistency explained the largest share of problems in Nielsen's database [@nielsen1994enhancing], and in an experiment consistent design reduced errors although it did not measurably speed use [@ozok2000measuring].

*In LTF:* many pages inline `rounded-lg border border-line bg-surface p-4 shadow-1` instead of using `Card`, and section headings on app pages are hard-coded `text-2xl font-bold` while the landing and `PageHeader` use the `display-*` and `heading-*` utilities. Route cards through `Card` and headings through the type utilities, so that a change to one changes all.
:::

### Audit physical, communicational and conceptual consistency separately

The three-part scheme is a useful review tool even though it has not been independently replicated [@ozok2000measuring]. Physical inconsistencies in LTF are the easiest to see. Product inspection finds two typographic dialects: h2 is 24 px at weight 700 on app pages (dashboard, challenge Brief tab, module page), 32 to 44 px at 600 to 700 on the landing page, and 20 px at 600 on the reference hub. The `Card` component's own comment says "State is carried by the badge, the eyebrow and the fill, never a colored left border", yet the `QuizBlock` result panel uses a 4 px colored left border (`border-l-4 border-go` or `border-warn`). Each is small; together they tell the learner that equal things are not equal.

Communicational consistency covers labels and feedback wording. Buttons that start things are mostly verb phrases ("Start lesson 0.1", "Start module n", "I'm set up, start flying"), which is consistent. Reset controls all read "Reset" (in `WidgetFrame`, `Stopwatch` and `ChecklistRunner`) but reset different scopes, which is the kind of consistency that misleads, and the error chapter returns to it.

Conceptual consistency is whether "lesson", "module", "challenge", "step" and "section" each mean one thing. The curriculum and module pages present lessons and challenges as two lists under each module, while the lesson page's "Fly it" cards link lessons to challenges; the concept is the same in both places, which is right.

::: {.rule #USE-031 grade="C"}
**Run consistency reviews in three passes: physical (look), communicational (wording and feedback) and conceptual (what each term means), and log findings under each.** The scheme separates kinds of consistency that behave differently [@ozok2000measuring]; communicational consistency is the part that copy rules and tokens can enforce.

*In LTF:* the physical pass checks headings, cards, borders and badges against the type utilities and `Card`; the communicational pass checks button and status wording; the conceptual pass checks that course terms are used one way across `CurriculumMap`, `ModulePage`, `LessonPage` and `ChallengePage`.
:::

### Different things must look different

The converse of "same things look the same" is that different things should not. Norman's analysis of action slips names description errors: when the intended action is specified ambiguously or incompletely, a similar object captures it, and similar-looking controls invite exactly this [@norman1981categorization]. His advice is to make controls distinct in shape and position, not only in label.

LTF applies one visual treatment to several different kinds of control. The `ThemeToggle` selected segment, the widget Explore and Quiz toggle, the `Stopwatch` pill and the primary `Button` all use the same near-black ink fill with light text. A segmented control shows a current state; a primary button triggers an action. When both look the same, the learner must read the label to know whether pressing will change a setting or start something. Product inspection already flags this pattern as one of the most generic looks in the interface; the usability argument is independent of the aesthetic one.

::: {.rule #USE-032 grade="C"}
**Give state-showing controls (toggles, segmented controls, tabs) a different visual treatment from action buttons.** Similar-looking controls with different functions invite description errors [@norman1981categorization], and "same things look the same" implies that different things look different [@nielsen1994enhancing].

*In LTF:* keep the ink fill for the primary `Button`; restyle the selected segment of `ThemeToggle` and the `WidgetFrame` Explore and Quiz toggle so that selection reads as state (for example the teal underline already used for the active tab and nav item), not as a pressed action.
:::

The product does this well in one place. The active navigation item, the active tab and the active reference section all use the same 3 px teal inset underline, and the lesson `SectionNav` uses the same `accent-line` color on its spine. One signal means "you are here" across four components. That is the pattern to extend.

### The case against consistency

Grudin argued in 1989 that consistency is an unreliable guide and that designers "would often do better to focus on users' work environments" [@grudin1989case]. His point was not that randomness is better but that the case for consistency is more context-bound than designers think, and that the term has never been pinned down (a two-day workshop of 15 experts in 1988 could not define it). He distinguished internal consistency (a design agreeing with itself), external consistency (agreement with other interfaces the user knows) and analogic consistency (correspondence to the world outside computers), and showed that they conflict.

His examples remain instructive. For menu defaults, "last item accessed", "most frequent" and "most likely next" each fail for some task, and for irreversible global operations the correct default is Cancel, so no single rule applied consistently yields good defaults. When implementers argued that printing a folder should print a list of pointers because that was consistent with the system's architecture, most people expected the documents to print; Grudin calls this "the most available consistency", a snare [@grudin1989case]. Tognazzini's list makes the same point positively: of his four forms of consistency, he quotes Buxton that consistency with user expectations is "the most important" [@tognazzini2014first]. Nielsen's own coordination volume lists rigid application among the risks of consistency [@nielsen1989coordinating].

::: {.rule #USE-033 grade="C"}
**When internal consistency conflicts with the learner's task or with the simulator's conventions, follow the task or the simulator, and record the exception and its reason.** Consistency serves tasks; applied as a goal in itself it can produce designs that match the system's structure rather than people's expectations [@grudin1989case; @tognazzini2014first].

*In LTF:* an instrument widget that departs from the design system's colors or controls to match the simulator's instrument is a deliberate exception, already reflected in the fixed `instrument`, `arc-*` and `bezel*` tokens. Record such exceptions in the component's header comment so they are not later "fixed".
:::

::: {.rule #USE-034 grade="C"}
**Never let the data model or file structure decide how screens are grouped or what a command does.** Grudin's folder-printing case shows the "most available consistency" is often the implementation's, not the user's [@grudin1989case].

*In LTF:* lessons and challenges are separate collections in `content/` and separate routes, but the learner's task (learn a maneuver, then fly it) joins them; keep the "Fly it" cards on `LessonPage` and the "Recommended lessons" on the Brief tab, and resist splitting views along storage lines.
:::

### Familiarity

Kurosu and Kashimura's study of cash-machine layouts is usually cited for a link between beauty and apparent usability (a correlation of 0.589 between ratings of beauty and of apparent ease of use, across 26 layouts rated by 252 students) [@kurosu1995apparent]. Their data contain a stronger result that is less often cited: familiarity of the keypad arrangement correlated 0.730 with apparent usability, more than beauty and far more than the other design strategies designers believed in (grouping 0.075, glance sequence 0.000). The study is correlational, on ratings of static pictures by people who never used the layouts, so it is about how usable a layout looks, not how usable it is. Still, it is evidence that a newcomer judges ease by resemblance to what they already know.

::: {.rule #USE-035 grade="B"}
**Use familiar, conventional patterns for navigation, forms, quizzes and lists, and spend novelty on the course content and the instruments.** Familiarity was the strongest correlate of apparent usability in Kurosu and Kashimura's data, stronger than beauty [@kurosu1995apparent]. Graded B because the evidence concerns ratings of static layouts, not use.

*In LTF:* the `Header`, `Breadcrumbs`, `Tabs`, `FormField` and `QuizBlock` patterns should stay conventional. Distinctiveness belongs in `LessonPath`, the widgets, the kneeboard and the challenge tiers, where the identity work of other Parts of this book is concentrated.
:::

### Consistency as a process

Nielsen's edited volume on coordinating interfaces calls itself a "meta-design" book: it is about methods for keeping many designers, or one designer over time, producing a coherent whole [@nielsen1989coordinating]. Its lessons are that consistency benefits users and the organizations that build interfaces, that it has several dimensions and methods, that standards should be judged by cost and benefit, that rigid application carries risks, and that it is an ongoing process needing ownership, commitment and political support. The book is expert opinion and corporate case study (Apple, IBM, Digital, Lotus, GE), and its strongest economic claims are unverified, but its central claim is uncontroversial: consistency decays unless someone owns it and tools enforce it.

::: {.rule #USE-036 grade="C"}
**Give the design system an owner who approves new components, and enforce consistency with lint and token checks rather than memory.** Consistency is maintained by ownership and tooling, not by writing a style guide once [@nielsen1989coordinating; @smith1986guidelines].

*In LTF:* the project already clears Tailwind's default palette, radii and shadows in `tokens.css`, which enforces color consistency mechanically. Extend the same approach to type and surfaces: a lint rule that flags raw `text-2xl font-bold` on headings and inlined card class strings would have prevented the two dialects.
:::

### What this means for Learn to Fly

LTF's consistency problems are physical and local, and fixable; its conceptual consistency is good. The active-state underline shared by `Header` nav, `Tabs`, `ReferenceSections` and `SectionNav` is a model to keep.

- Unify headings on the `display-*` and `heading-*` utilities and remove hard-coded `text-2xl font-bold` and `text-3xl font-bold` from `LessonPage`, `ModulePage`, `DashboardPage`, `BriefTab` and the error pages (USE-030, USE-036).
- Replace inlined card class strings with `Card` and its states (USE-030).
- Bring the `QuizBlock` result panel into line with the `Card` and `Callout` rule of no colored left border, or change the rule; either way, one rule (USE-031).
- Separate state controls from action buttons visually (USE-032).
- Record deliberate exceptions, especially instrument widgets, in their component comments (USE-033), and keep views grouped by learner task (USE-034).
- Keep conventional patterns conventional (USE-035).

## Errors: Prevention, Tolerance and Recovery

### Slips, lapses and mistakes

Three heuristics in Nielsen's list concern error: error prevention; user control and freedom; and helping users recognize, diagnose and recover from errors [@nielsen1994enhancing]. ISO 9241-110 groups the same ground under use error robustness, with recommendations for avoidance, tolerance and recovery [@iso2020ergonomics]. The design response depends on what kind of error it is, and the most useful distinction comes from the psychology of error rather than from the heuristic lists.

Norman defines a slip as an action that is not what was intended [@norman1981categorization]. A mistake is different: the action goes as planned, but the plan is wrong. Reason's framework classifies errors by cognitive level (skill-based, rule-based, knowledge-based) and by type, separating slips (execution failures linked to attention) and lapses (memory failures) from mistakes (planning failures) [@reason1990human]. The revised edition of Norman's everyday-design book keeps the same division and links it to the seven stages of action [@norman2013design]. The remedies differ. A slip is prevented by constraints, distinct controls and confirmation where the cost is high; better explanations do nothing for it, since the person already knew what to do. A mistake is prevented by a better conceptual model and better explanation; a confirmation dialog only confirms the wrong plan.

For a learning product the distinction also governs feedback copy. A learner who chose the wrong answer in a quick check after misreading the options made a slip; one who chose it because the lesson's diagram suggested it made a mistake that the diagram caused.

::: {.rule #USE-037 grade="C"}
**Classify each observed error as a slip, a lapse or a mistake before choosing a fix, and match the fix to the class.** Slips and lapses call for constraints, distinctness and reminders; mistakes call for a better model and explanation [@norman1981categorization; @reason1990human; @norman2013design].

*In LTF:* in a test log, a learner who ticks the wrong `FlyPanel` row they meant to skip has slipped (make rows more distinct); a learner who ticks a row believing it is done when it is not has a mistaken model (fix the row's wording, USE-018, or the lesson).
:::

### The system approach

Reason's later summary of his framework contrasts a person approach, which blames individuals for forgetfulness, inattention and carelessness, with a system approach, in which people are fallible, "errors are seen as consequences rather than causes", and the key question is "not who blundered, but how and why the defences failed" [@reason2000human]. His slogan for the consequence is "We cannot change the human condition, but we can change the conditions under which humans work." He distinguishes active failures by the people in direct contact with a system from latent conditions created by designers, builders, procedure writers and managers, and pictures defenses as layers of Swiss cheese whose holes must line up for harm to occur. The Swiss cheese image is a communication device, not a tested model [@reason2000human]. Two of his observations carry over directly to a course: the best people often make the worst mistakes, and mishaps fall into recurrent patterns. A recurring wrong answer is a pattern, and patterns point to latent conditions in the material.

### Capture, description and mode errors

Norman's 1981 taxonomy, built from about a thousand collected incidents including pilot-error collections and accident reports, names the slips that interface design can predict [@norman1981categorization]. The method is naturalistic, so the categories are well established while their frequencies are not.

A capture error occurs when a sequence being performed resembles a more frequent or better-learned one, which takes over. A description error occurs when the intention is specified ambiguously and a similar object or action is chosen. A mode error occurs when the situation is misclassified: the action fits the assumed state but not the true one. Norman's examples include text editors with separate text and command modes (in one, typing the word "edit" in command mode destroyed the manuscript and then the ability to undo) and devices whose buttons change meaning by mode, among them aircraft automatic pilots [@norman1981categorization].

Each has an LTF instance. Capture: a learner who has practiced a procedure several times will run the familiar version even after a content update has changed one step. Description: `FlyPanel` rows that begin with the same words, or widget sliders that look alike, invite the wrong one. Mode: the widgets have an Explore mode and a Quiz mode with different starting states and, in `VorCdi`, a different reset target.

::: {.rule #USE-038 grade="C"}
**When a procedure, checklist or rubric changes after learners have practiced it, mark the changed step visibly rather than relying on the learner to notice.** Capture errors arise when a familiar sequence takes over a changed one [@norman1981categorization].

*In LTF:* `DebriefForm` already detects a changed rubric and shows "This challenge was updated" with a Refresh button. Extend the same idea to `FlyPanel` and checklists: a changed step carries a "Changed" `Badge` for a period after the content update.
:::

::: {.rule #USE-039 grade="C"}
**Keep modes few, show the current mode at all times in the area the learner is acting on, and make mode-dependent controls say which mode they act in.** Mode errors occur when an action fits the assumed state but not the true one [@norman1981categorization].

*In LTF:* the `WidgetFrame` Explore and Quiz toggle is visible in the frame header, which is right; the Reset beside it should name the state it restores in Quiz mode. Fly mode is a separate route with its own layout, not a mode of the challenge page, which avoids a mode error by design.
:::

### Prevention by constraint

Shneiderman's fifth rule asks for designs in which serious errors are hard to make, for example by disabling inappropriate menu items, and, when errors occur, simple and specific recovery guidance that leaves the state unchanged or explains how to restore it [@shneiderman2016designing]. Norman's constraints (physical, cultural, semantic and logical) and forcing functions (lock-in and lock-out) are the mechanisms [@norman2013design].

LTF uses constraints well in several places. `QuizBlock` disables "Check answer" until an answer exists, and its numeric questions print the unit beside the input, which prevents unit slips. The ordering question disables "Move up" on the first item and "Move down" on the last. `DebriefForm` disables submit until every criterion is answered and links the button to the status line that says what is missing (`aria-describedby`). The risk with disabled controls is silence: a greyed button that does not say why it is disabled leaves the learner to guess.

::: {.rule #USE-040 grade="C"}
**Prevent invalid actions with constraints, and whenever a control is disabled, say beside it what is needed to enable it.** Disabling inappropriate actions prevents errors [@shneiderman2016designing], and constraints guide use [@norman2013design]; a constraint without an explanation becomes a dead end.

*In LTF:* keep the disabled "Check answer" and the unit label in `QuizBlock`, and the `DebriefForm` pattern that ties the disabled submit to a status line listing missing criteria. Apply the same pattern to any new disabled control.
:::

### Reversal, and what undo is for

Shneiderman's sixth rule, permit easy reversal of actions, is justified by its effect on behavior: reversibility reduces anxiety and encourages exploration [@shneiderman2016designing]. Tognazzini puts it as explorable interfaces: make actions reversible, always allow undo, always allow a way out [@tognazzini2014first]. Abowd and Dix sharpen the idea: undo should be regarded "not as a system command to be implemented, but as a user intention to be supported by the system", so the question is what the undo button is for, not what it does [@abowd1992giving]. They report a study of a word processor in which even expert users could neither predict the effect of undo nor recognize its behavior, and list four things a user must be able to answer: which stream of activity is relevant, how it is divided into units, which unit an undo affects, and what exactly is restored. They distinguish backward recovery (restore the previous state) from forward recovery (move on from the present state toward the goal), and name two supporting properties: visibility of the effects of one's actions, and commensurate effort, meaning that what is easy to do should be easy to undo. The paper is analytical, not empirical.

For a beginner, reversibility is a teaching device. A widget that can be reset invites experiment; a quiz that lets the learner change an answer and check again ("Change your answer and check again.") turns an error into practice. LTF does both.

::: {.rule #USE-041 grade="C"}
**Make every learning action reversible at the same effort it took to do it: answers can be changed, ticks untoggled, widgets reset, lessons revisited.** Reversibility reduces anxiety and encourages exploration [@shneiderman2016designing; @tognazzini2014first], and commensurate effort is a property of good recovery [@abowd1992giving].

*In LTF:* keep `QuizBlock` retries and widget Reset. "Mark lesson complete" turns into a "Lesson complete" status with no way back; offer a quiet way to mark it incomplete from the same place, since a learner who marked it by accident should not have to live with a wrong progress record.
:::

::: {.rule #USE-042 grade="C"}
**Label every reset and clear control with its scope, so the learner knows what it will erase before pressing it.** A user must be able to predict which unit an undo or reset affects [@abowd1992giving], and Tognazzini asks that the scope of any reversion be communicated [@tognazzini2014first].

*In LTF:* "Reset" appears in `WidgetFrame`, `Stopwatch` and `ChecklistRunner` with three different scopes. Use "Reset diagram", "Reset timer" and "Clear ticks" (or equivalent), and if a reset will also clear session-stored flight state, say so.
:::

::: {.rule #USE-043 grade="C"}
**In Fly mode, prefer forward recovery: a wrong tick is fixed by tapping again, never by navigating a history or confirming a dialog.** Forward recovery from the present state is the natural repair in open, time-pressured tasks [@abowd1992giving].

*In LTF:* `FlyPanel large` step rows toggle in place; keep them free of confirmation prompts, and keep any destructive action (resetting a flight) out of reach of a stray tap, for example behind the challenge page rather than on `FlyModePage`.
:::

### Irreversible actions and safe defaults

Some actions cannot be undone: deleting an account, submitting a scored attempt that the server records. Abowd and Dix argue that irreversibility is a design property users must be able to predict, so it should be stated before the action [@abowd1992giving]. Grudin's analysis of defaults gives the companion rule: for irreversible global operations the right default is Cancel, even where other menus default differently [@grudin1989case].

LTF's account deletion is a `Dialog` titled "Delete your account?" whose copy ends "This cannot be undone.", and the `danger` button variant is reserved for actions behind a confirmation. That is the right pattern. The confirmation should be reserved for actions that are both costly and irreversible; confirmations on everyday actions train people to click through them.

::: {.rule #USE-044 grade="C"}
**State irreversibility before any action that cannot be undone, make the safe choice the default focus, and do not use confirmation dialogs for reversible actions.** Users need to predict irreversibility [@abowd1992giving], and the safe default for irreversible operations is Cancel [@grudin1989case]; confirmations elsewhere lose their force.

*In LTF:* keep the account deletion `Dialog` and the `danger` variant. Check that initial focus in that dialog lands on the cancelling action. Debrief submission is recorded by the server; say on the button or beside it that the attempt will be saved to History.
:::

### Error messages

The last error heuristic asks that messages help users recognize, diagnose and recover [@nielsen1994enhancing]. Tognazzini's version is specific: say what went wrong, say what to do, and allow for a deeper fault [@tognazzini2014first]. Shneiderman asks for simple, specific recovery guidance [@shneiderman2016designing].

LTF's messages vary. "This challenge was updated" with "Refresh the page to load the new rubric, then answer again." and a Refresh button is a model: it names the cause, the action and offers the action. The generic `ErrorState`, "Something went wrong" with "We could not load this. Check your connection and try again." and a "Try again" button, says what to do but not what failed, which is acceptable for a network failure and wrong for anything else. The root error page ("An unexpected error stopped this page from loading. Reloading usually fixes it. If it keeps happening, please try again later.") allows for the deeper fault but gives no route out except waiting; the `ReportProblemDialog` already exists and is the natural next step to offer.

::: {.rule #USE-045 grade="C"}
**Write every error message to say what failed, what the learner can do now, and where to go if that does not work.** Recovery requires recognition, diagnosis and a path [@nielsen1994enhancing; @tognazzini2014first; @shneiderman2016designing].

*In LTF:* keep the rubric-changed callout as the model. Give `ErrorState` a specific title where the cause is known (lesson not found, network failure, server error), and add "Report a problem" as the fallback action on `RootErrorPage` and repeated `ErrorState` failures.
:::

### What this means for Learn to Fly

The product's error handling is better than average where it has been designed (the debrief, quizzes, account deletion) and generic where it has not (the shared `ErrorState`, the root error page).

- Classify test-observed errors as slips, lapses or mistakes in the log (USE-037).
- Mark changed steps after content updates in `FlyPanel` and checklists, following the `DebriefForm` precedent (USE-038).
- Name the restored state on widget Reset in Quiz mode (USE-039) and give every reset a scoped label (USE-042).
- Keep constraints and their explanations in `QuizBlock` and `DebriefForm` (USE-040).
- Add a way to un-mark a lesson complete (USE-041).
- Keep Fly mode free of confirmations and destructive controls (USE-043).
- Check focus in the delete dialog and label scored submissions (USE-044).
- Make `ErrorState` and `RootErrorPage` messages specific and add the report path (USE-045).

## Control, Flexibility and Minimalism

### User control and freedom

The 1990 list asked for clearly marked exits [@nielsen1990heuristic]; the 1994 synthesis broadened this into user control and freedom [@nielsen1994enhancing]. Shneiderman's seventh rule says experienced users want to feel in charge and dislike surprises, tedious data entry, difficulty getting information and inability to reach the result they want [@shneiderman2016designing]. ISO 9241-110's controllability principle lists interruption by the user, flexibility and individualization, including control of speed and sequence [@iso2020ergonomics]. Tognazzini's autonomy principle gives the same idea a boundary: users control their environment within rules, and status must be visible, up to date and accurate for that control to mean anything [@tognazzini2014first].

For LTF the most important freedom is interruption. A learner beside a simulator is interrupted by the simulator: a menu, a loading screen, a wrong key, a stall. They will leave the page and return, sometimes after minutes. Interruption is part of the context of use, not an exception to it. Degani and Wiener's twelfth checklist guideline makes the same point for procedures: do not couple checklists tightly to other tasks, and provide buffers for recovery and a way to "take up the slack" [@degani1990checklists].

::: {.rule #USE-046 grade="C"}
**Let the learner leave any lesson, challenge or Fly mode screen at any point and return to exactly where they were.** Interruption and control of sequence are part of controllability [@iso2020ergonomics], and procedures used under load need room for recovery [@degani1990checklists; @tognazzini2014first].

*In LTF:* keep the lesson resume bar, "Continue where you left off" on the landing page and the dashboard Continue card. On `FlyModePage`, ticks and the flight's start time already survive a refresh through session storage (`features/challenges/storage.ts`); they should also survive the learner switching to the sim and back, and the page should never time out to a different view.
:::

::: {.rule #USE-047 grade="C"}
**Give every focused or full-screen view one clearly marked exit, in the same place each time.** Clearly marked exits were in the original heuristic list [@nielsen1990heuristic], and controls needed for success should be visible at all times [@tognazzini2014first].

*In LTF:* `FlyModePage` has "Back to challenge" at the top; keep it in the same position across challenges, and give every `Dialog` and `Drawer` a visible close control as well as Escape.
:::

### Flexibility and efficiency of use

Flexibility and efficiency of use, one of the seven factors in Nielsen's analysis, covers accelerators that experts use and novices need not see [@nielsen1994enhancing]. Shneiderman's universal usability makes the point from the other side: explanations for novices and shortcuts for experts both improve a design, because users differ in experience, age, ability, culture and technology [@shneiderman2016designing]. Gould and Lewis found that designers routinely underestimate how diverse users are [@gould1985designing]. Nielsen kept shortcuts in his list even though they mostly explained minor problems, because they matter for expert efficiency and satisfaction [@nielsen1994enhancing].

An LTF learner changes from novice to expert within the course. A learner in Module 0 needs every step explained; the same learner flying a cross-country challenge months later wants the checklist and the stopwatch and nothing else. The design question is how to serve the second without burdening the first.

`ChecklistRunner` is a working example: Space or Enter ticks the focused item, Backspace unticks the last one, the arrow keys, Home and End move between items, a one-line hint states the keys, and a "Large text" toggle enlarges the list. The reference search supports Enter, the arrow keys and Escape. Elsewhere there are no keyboard accelerators.

::: {.rule #USE-048 grade="C"}
**Provide accelerators for actions that returning learners repeat, keep them invisible to beginners until relevant, and state them at the point of use.** Shortcuts serve experts without burdening novices [@nielsen1994enhancing; @shneiderman2016designing].

*In LTF:* extend the `ChecklistRunner` key pattern (Space to tick, Backspace to untick last, a one-line key hint) to `FlyPanel`, where a learner with a keyboard beside the sim benefits most. Do not add global single-key shortcuts that could fire while the learner types in the reference search.
:::

::: {.rule #USE-049 grade="C"}
**Let returning learners skip what they already know, without hiding it from beginners.** Universal usability asks for explanations for novices and shortcuts for experts in the same design [@shneiderman2016designing], and ISO controllability includes control of sequence [@iso2020ergonomics].

*In LTF:* lessons are free to open in any order from `CurriculumMap` and `ModulePage`; keep that. The `LessonPage` objectives card and section navigation let a returning learner jump to a section. Do not add locks that force sequence unless a later Part's learning evidence argues for them.
:::

### Individualization

ISO 9241-110 merged individualization into controllability in 2020 [@iso2020ergonomics]. LTF offers three individual settings: the three-way `ThemeToggle` ("Day", "System", "Night"), the "Large text" toggle in `ChecklistRunner`, and the dismissible `BetaBanner` and `SignupBanner`. The theme setting is applied before first paint by an inline script, which avoids a flash of the wrong theme; the setting lives in local storage and is remembered.

::: {.rule #USE-050 grade="C"}
**Offer individualization for the settings that differ by context of use (theme, text size), remember them, and apply them before first paint.** Individualization is part of controllability [@iso2020ergonomics].

*In LTF:* keep `ThemeToggle` and its pre-paint script. Fly mode's large type is fixed by layout; a single text-size control that applies to `FlyModePage`, `ChecklistRunner` and the checklist reference pages would serve learners whose second screen sits far away.
:::

### Aesthetic and minimalist design

The eighth heuristic asks that dialogues contain no irrelevant or rarely needed information, since every extra unit of information competes with the relevant ones [@nielsen1994enhancing]. Krug gives one of his chapters the title "Omit needless words" [@krug2014dont]. Tognazzini warns against the opposite failure, the "illusion of simplicity", in which needed controls are hidden to make a screen look clean, and recommends progressive revelation instead [@tognazzini2014first]. ISO 9241-110 asks that the system minimize unnecessary interactions while presenting needed information where it is needed [@iso2020ergonomics]. Minimalism, on this reading, is about relevance, not emptiness.

The top of `LessonPage` is the clearest test case. Before the first lesson block, a learner can meet breadcrumbs, the mono lesson label, the h1, a meta row (time, `DraftBadge`, "Completed" badge), the `UnverifiedWarning` on drafts, the `SignupBanner`, the resume bar, the objectives `Card`, and on phones the sticky section `Select`, all below the site-wide `BetaBanner` and `Header`. Each element is defensible alone. Together they push the lesson below the first screen on small viewports and present several bordered or tinted boxes that compete for first attention. Which of them is relevant depends on the learner: the resume bar matters only to a returning learner, the sign-up prompt only to a visitor, the draft warning only on unverified content.

::: {.rule #USE-051 grade="C"}
**Show each element above the first content block only when it is relevant to this learner on this visit, and cap the number of tinted or bordered boxes above the lesson.** Every extra unit of information competes with the relevant ones [@nielsen1994enhancing; @krug2014dont], and needed information belongs where it is needed [@iso2020ergonomics].

*In LTF:* on `LessonPage`, show the resume bar or the objectives card first depending on whether the learner has started; merge the `SignupBanner` into the completion panel for visitors (the "Mark lesson complete" dialog already makes the save-progress case); keep `UnverifiedWarning` because honesty about verification is a product commitment.
:::

::: {.rule #USE-052 grade="C"}
**Never hide a control that is needed to succeed at the current task in order to make a screen look cleaner; use progressive revelation for what is optional.** Discoverability fails when needed controls are hidden ("If the user cannot find it, it does not exist") [@tognazzini2014first].

*In LTF:* `CurriculumMap` uses `<details>` with the current module open by default, and `WidgetFrame` puts the text description in a "Describe this diagram" `details`, both good uses of progressive revelation. Fly mode controls stay visible; nothing needed in flight sits behind a menu or a hover.
:::

### Banners in the wrong context

The `BetaBanner` appears on every page, including `FlyModePage`, until dismissed. Its message is important and honest, and dismissal is remembered. In Fly mode, though, it is the first thing above the flight content, in a caution-tinted band, competing with the very elements USE-015 says must be found at a glance. Its content does not change what the learner should do in flight.

::: {.rule #USE-053 grade="C"}
**Keep site-wide notices out of views used during flight, and show them instead on the page that leads into the flight.** In-flight views have a different context of use [@iso2018ergonomics], and irrelevant information competes with what is needed at a glance [@nielsen1994enhancing].

*In LTF:* render `BetaBanner` in `RootLayout` only and remove it from `FlyModeLayout`; the challenge page that links to Fly mode already shows it.
:::

### Learnability and engagement

ISO 9241-110's learnability principle (discovery, exploration, retention) and its user engagement principle (motivation, trustworthiness, involvement) were described in the heuristic canon chapter [@iso2020ergonomics]. Two applications belong here. Exploration is supported by reversibility, which USE-041 already requires, and by safe sandboxes: LTF's widgets with Explore mode and Reset are exactly that. Trustworthiness is supported by visible honesty, and LTF already shows it: "Draft · unverified" badges, "Last verified" lines on `SpeedsPage`, `verify` callouts that block publication, and the "not a pilot certificate" line on the course badge. The standard's own scope excludes safety-critical domains, which is a reason to keep these markers visible rather than to rely on the standard [@iso2020ergonomics]. Engagement as a design goal has little empirical grounding in the standard itself; the motivation evidence belongs to Part XVII, Motivation and Gamification.

::: {.rule #USE-054 grade="C"}
**Keep verification status visible wherever an aviation fact is shown, as part of the interface's trustworthiness.** Trustworthiness is a recommendation group under user engagement in ISO 9241-110 [@iso2020ergonomics].

*In LTF:* keep `DraftBadge`, `UnverifiedWarning`, the "Last verified" line and the "Not yet verified" callout on `SpeedsPage`; check that `KeyNumbers` and the checklist reference pages carry a "Last verified" line, and add one where it is missing.
:::

### What this means for Learn to Fly

LTF gives learners good freedom of sequence and good recovery from interruption at the large scale (resume bar, Continue card, session-stored flight state), and one excellent example of expert accelerators in `ChecklistRunner`.

- Treat interruption as normal: state survives leaving and returning, everywhere (USE-046); exits stay in one place (USE-047).
- Bring `ChecklistRunner`'s keyboard pattern to `FlyPanel` (USE-048); keep open sequence across lessons (USE-049).
- Add a shared text-size control for in-flight views (USE-050).
- Reduce the stack above the lesson on `LessonPage` by showing elements only when relevant (USE-051), while keeping needed controls visible (USE-052).
- Remove `BetaBanner` from `FlyModeLayout` (USE-053).
- Keep and extend verification markers (USE-054).

## Running a Heuristic Evaluation

### What one evaluator finds

Heuristic evaluation is an informal inspection: several evaluators examine an interface alone and judge it against a short list of recognized principles [@nielsen1990heuristic]. Nielsen and Molich's founding paper is double-edged. Across four experiments, individual evaluators were "mostly quite bad" at it, finding on average between 20% and 51% of the known problems. The experiments used non-specialist evaluators (computer science students and readers of a computer magazine) and problem lists the authors compiled and revised after evaluators found problems they had missed:

| Interface | Evaluators | Known problems | Mean found by one |
| --- | --- | --- | --- |
| Teledata (videotex, screen dumps) | 37 | 52 | 51% |
| Mantel (paper specification) | 77 | 30 | 38% |
| Savings (live voice response) | 34 | 48 | 26% |
| Transport (live voice response) | 34 | 34 | 20% |

Individual differences were large: in Teledata the worst evaluator found 22.6% and the best 74.5%; in Transport, 6.7% and 46.7% [@nielsen1990heuristic]. The spread grew as interfaces got harder to evaluate, and the voice interfaces were hardest because their output vanishes as soon as it is spoken. Skill did not transfer reliably: the same 34 people evaluated Savings and Transport, and their scores correlated only weakly (R squared 0.33). Nor was skill a simple ladder: poor evaluators sometimes found hard problems that good ones missed.

### Pooling evaluators

The positive half of the result is that different evaluators find different problems, so a small group does much better than any member. Nielsen and Molich estimated by random sampling the share of problems found by aggregates of evaluators [@nielsen1990heuristic]:

| Interface | 1 | 3 | 5 | 10 |
| --- | --- | --- | --- | --- |
| Teledata | 51% | 81% | 90% | 97% |
| Mantel | 38% | 60% | 70% | 83% |
| Savings | 26% | 50% | 63% | 78% |
| Transport | 20% | 42% | 55% | 71% |

The curves rise steeply to about five evaluators and flatten toward ten. Even for the hardest interface, five found more than half. The authors recommend three to five independent evaluators. Their own limits are stated: small interfaces, no real-user test of whether the problems mattered, and problem lists of their own making. The often-repeated figure that five evaluators find about two thirds of problems is an average from these four cases; across them, five evaluators found anywhere from 55% to 90%.

### The evaluator effect

Hertzum and Jacobsen's review of eleven studies showed that the weakness is not peculiar to heuristic evaluation [@hertzum2001evaluator]. Cognitive walkthrough, heuristic evaluation and thinking-aloud testing all show a substantial evaluator effect: evaluators using the same method on the same interface detect markedly different problems. The effect held for novice and experienced evaluators, cosmetic and severe problems, detection and severity judgment, and simple and complex systems. Average agreement between any two evaluators ranged from 5% to 65%, and no method was consistently better.

The preferred measure is any-two agreement (problems both found, divided by problems either found, averaged over pairs), because the common detection rate flatters small teams: its lower bound is 100/n percent and it assumes the group found everything. Agreement measures reliability only, not whether the problems matter in real use. In one cognitive walkthrough, 58% of the 33 problems found collectively were found by a single evaluator and none by all. In one thinking-aloud analysis, four HCI researchers analyzed the same videotapes with nine set problem criteria; 46% of the 93 problems were found by one evaluator only and another 20% by two. The two experienced evaluators found more (average detection 59% against 45%) but agreed on only 40% of what they found [@hertzum2001evaluator].

The effect persists among professionals. In a 2014 follow-up by Hertzum, Molich and Jacobsen, 19 experienced practitioners analyzing video of five users each reported on average about a third of the problems their group reported, and up to 24% (moderated sessions) and 30% (unmoderated) of problems reported by several people were rated critical by one and minor by another. The 2001 review's conclusion is blunt: a thinking-aloud study analyzed by one evaluator is "highly questionable" as an authoritative statement of an interface's problems [@hertzum2001evaluator].

::: {.rule #USE-055 grade="A"}
**Never accept one reviewer's inspection as the list of a page's usability problems; use at least three independent reviewers, and five for the screens that matter most.** One evaluator finds a minority of known problems and pooling raises coverage steeply up to about five [@nielsen1990heuristic]; the evaluator effect is replicated across methods and evaluator experience [@hertzum2001evaluator].

*In LTF:* a review of `LessonPage`, `ChallengePage` or `FlyModePage` before a release has at least three reviewers. Fly mode and the first lesson, where a miss is costly, get five.
:::

::: {.rule #USE-056 grade="C"}
**Have each reviewer inspect and write findings alone, and merge only after every list is written.** Nielsen and Molich have evaluators work independently and compare only afterwards, because early discussion biases everyone toward one way of analyzing [@nielsen1990heuristic].

*In LTF:* reviewers file findings separately (one list each, each finding under a heuristic per USE-011); the merge is a separate step done by someone who did not inspect.
:::

### Why evaluators disagree, and what to fix

Hertzum and Jacobsen trace the effect to interpretation and name three weaknesses of the methods [@hertzum2001evaluator]. Vague goal analyses lead evaluators to imagine different task scenarios. Vague procedures lead to anchoring, in which evaluators drift toward evaluating for a user like themselves. Vague problem criteria lead to anything being accepted as a usability problem. Their recommendations are to involve several evaluators, to check that the task scenarios cover high-risk and high-frequency functions, and to define the problem criteria explicitly.

Anchoring is a particular risk for LTF, whose builders know both the product and the aviation content. A reviewer who already knows where the mixture control is, or what "Do-verify" means, cannot see the page as a beginner does. Nielsen and Molich found evaluation skill varied across interfaces and that domain mattered [@nielsen1990heuristic]; the remedy is a mix of reviewers and a written scenario that forces the beginner's path.

::: {.rule #USE-057 grade="B"}
**Before an inspection, write the task scenarios and the problem criteria, and give the same set to every reviewer.** Vague scenarios and criteria are the named causes of the evaluator effect [@hertzum2001evaluator]. Graded B because the recommendation follows from the review's analysis rather than from a test of the remedy.

*In LTF:* scenarios include the high-risk ones: open Fly mode on a phone beside a running sim and follow the steps; find a V-speed on `/reference/speeds` while the sim is paused; resume a lesson after closing the tab. Problem criteria: the learner would stall, take a wrong action, misread a unit or altitude reference, or need outside help.
:::

::: {.rule #USE-058 grade="C"}
**Mix reviewers: include at least one who has flown the simulator and at least one who has not, and assign the beginner's scenario to the latter.** Evaluation skill does not transfer reliably between interfaces [@nielsen1990heuristic], and evaluators anchor on users like themselves [@hertzum2001evaluator].

*In LTF:* a three-person review of a challenge has one MSFS user, one person with no simulator experience, and one reviewer of either kind who focuses on the domain checklist items of USE-014.
:::

### Severity

Severity ratings are where the evaluator effect does most damage, because they decide what gets fixed. Of the experiments in the seven studies that assessed severity, four found severe problems detected appreciably more often and ten found largely no difference; agreement on which problems were severe was 28% in one study and 20% in two, and mean Spearman correlations between evaluators' severity ratings were 0.31, 0.24 and 0.23 [@hertzum2001evaluator]. Guideline priority levels are no substitute. In Petrie and Kheir's study of 6 blind and 6 sighted users on two websites, participants agreed highly with each other and with the researchers on how severe each problem was, but neither agreed significantly with the importance or priority ratings that accessibility and usability guidelines assign [@petrie2007relationship]. The problems the two groups met overlapped only partly (about 15%), and blind users rated problems on one site as significantly more severe. The study is small, and the overlap figure is not a constant, but its direction was extended by larger later work.

::: {.rule #USE-059 grade="A"}
**Do not let one person's severity rating decide priority: have severity rated by someone who sees the merged list, and check it against observed impact.** Agreement on severity between evaluators is low in several studies [@hertzum2001evaluator], and guideline priorities do not match the severity users experience [@petrie2007relationship].

*In LTF:* the merger rates severity on a scale defined by impact on the learner's task (blocks the task, causes a wrong action, causes a stall, cosmetic), not by which heuristic or WCAG level it falls under.
:::

::: {.rule #USE-060 grade="B"}
**Rate severity by behavioral impact on the task, and treat any problem that blocks a learner with a disability from finishing a task as severe whatever its guideline level.** Users and researchers agree on experienced severity, while guideline priorities do not predict it [@petrie2007relationship]. Graded B: one small study, consistent with later larger ones.

*In LTF:* a keyboard trap in `QuizBlock` or a `FlyPanel` row a screen reader cannot tick ranks above a contrast shortfall on a decorative element. Accessibility checks follow Part XXV, Accessibility; this rule governs only how findings are ranked.
:::

### Many teams, one product

The comparative usability evaluation (CUE) studies asked several professional teams to evaluate the same product. In CUE-2, nine teams evaluated the Hotmail website in late 1998 [@molich2004comparative]. The authors' project page states that the study confirmed an earlier round: teams used very different methods and effort and reported very different problems, no single method reliably found all problems, and the total number of problems exceeded what one or a few tests can find. Figures relayed from an interview with Molich (secondary, not from the paper) are that the teams reported 310 different problems, 232 of them (75%) only once, and only six by more than half the teams. Earlier comparisons summarized by Hertzum and Jacobsen found 129 of 141, and 147 of 186, problems reported by only one laboratory [@hertzum2001evaluator]. In these studies more than the evaluator varied (procedure and test users too), so they measure the reliability of whole evaluations, not of evaluators alone.

A unique finding is therefore the normal case, not a sign that a finding is spurious. Nielsen and Molich found false positives rare and noted that a team can challenge a lone evaluator's false positive [@nielsen1990heuristic].

::: {.rule #USE-061 grade="B"}
**Do not discard a finding because only one reviewer or one session produced it; judge it by its severity.** Most problems in multi-team evaluations are reported only once [@molich2004comparative; @hertzum2001evaluator], and false positives in heuristic evaluation are rare [@nielsen1990heuristic].

*In LTF:* the merged review list keeps single-reviewer findings, marked with their count; the merger may reject a finding only with a stated reason.
:::

### Inspection is input to testing

Heuristic evaluation may identify problems without suggesting solutions [@nielsen1990heuristic], and none of the evaluator-effect studies tested whether the problems found were real for users [@hertzum2001evaluator]. Inspection is cheap and fast and finds many problems, but its results are hypotheses. For interfaces whose output is ephemeral or used under time pressure, the kind Nielsen and Molich found hardest to inspect, inspection will miss more and testing matters more.

::: {.rule #USE-062 grade="C"}
**Treat inspection findings as hypotheses to confirm in a usability test, and rely on testing over inspection for views used under time pressure.** Inspection does not test validity [@hertzum2001evaluator], and interfaces with fleeting output were the hardest to evaluate by inspection [@nielsen1990heuristic].

*In LTF:* the random-event alert in `FlyPanel` (pulse and beep), the stopwatch and the `FlyModePage` glance task are tested with beginners at a running simulator, not only inspected.
:::

### What this means for Learn to Fly

LTF's review process today is a code and content review (`/ltf-review`, `/review-lesson`) run by one reviewer at a time. That process is right for code and facts and should stay. It is not a usability inspection, and nothing in it compensates for the evaluator effect.

- Add a usability inspection step for pages and flows that change: at least three reviewers, five for Fly mode and the first lesson (USE-055), working alone (USE-056) from written scenarios and problem criteria (USE-057), with a mixed panel (USE-058).
- Rate severity once, on the merged list, by task impact (USE-059, USE-060), and keep single-reviewer findings (USE-061).
- Store the scenarios, criteria and merged lists in `docs/` beside the verification records in `docs/verification/`, so that rounds are comparable.
- Route Fly mode findings into testing rather than treating inspection as sufficient (USE-062).

## Usability Testing and How Many Learners

### Testing is observation of real tasks

Gould and Lewis's second principle is empirical measurement: intended users carry out real work with prototypes while their performance and reactions are observed, recorded and analyzed [@gould1985designing]. A usability test differs from a demonstration, an interview or a review in that the observer watches what people do, not what they say they would do. Beyer and Holtzblatt's contextual inquiry pushes the observation into the user's own setting, on a master-apprentice model in which the interviewer watches people work and asks about what they do, rather than arriving with a fixed list of questions [@beyer1998contextual]. Their method is craft authority built on field experience rather than experiment, and it is costly, but its central claim fits LTF well: what people do in context differs from what designers assume.

LTF's context is unusual enough that a quiet-room test misses most of it. A beginner at home has the simulator full screen, a controller or keyboard in hand, and LTF on a phone, tablet or second monitor at some distance and angle. They glance across mid-maneuver. They are interrupted by the simulator itself. Greenberg and Buxton make the same point for evaluation generally: the method must fit the question, and context-specific use must be tested in context [@greenberg2008usability].

::: {.rule #USE-063 grade="C"}
**Test challenge and Fly mode flows with beginners at their own setup, with the simulator running, not only at a desk with the page alone.** Observation in context captures what happens in real use [@beyer1998contextual], and the method should fit the context being studied [@greenberg2008usability].

*In LTF:* for `ChallengePage` and `FlyModePage`, at least part of each test round is remote or in-home, with the learner's own screen arrangement; record where the second screen sits and how often the learner looks at it.
:::

### Where "five users" comes from

Two papers are the roots of the five-user rule. Virzi reported three experiments relating the share of problems found to the number of test participants, measured against the problems revealed by 12 users in the first study and 20 in the second and third [@virzi1992refining]. As described by later reviewers (the paper itself was not read for this book), it supports three claims: observing four or five participants reveals about 80% of a product's usability problems; additional participants reveal fewer and fewer new problems; and the more severe problems tend to be found by the first few participants, with three users revealing most of the severe ones [@lewis1994sample; @faulkner2003beyond]. Virzi's own stopping advice, quoted by Faulkner, was to run subjects until the number of new problems drops to an acceptable level, leaving "acceptable" to the practitioner [@faulkner2003beyond].

Nielsen and Landauer modeled the finding of problems as a Poisson-type process fitted to data from 11 studies: each added test user or evaluator finds fewer new problems [@nielsen1993mathematical]. For a "medium" example, they estimated that 16 evaluations would be worth their cost and that the benefit-to-cost ratio peaked at four. Nielsen's later popular statement of the model gives the number of problems found with n users as N(1 − (1 − L)^n), where N is the total number of problems and L the proportion one user finds, with a typical L of 31% across the projects studied, so that the curve "bends around 5 users" [@nielsen1993mathematical]. With L at 31%, five users find about 85%, which is arithmetic on his figures. His practical advice in the same article is not "test five users once": with fifteen users available, run three studies of five, fixing problems between rounds.

The model assumes that every problem is equally likely to be found and every participant equally likely to find it. Both assumptions are false in general, and the critiques that followed are about what happens when they fail.

### What the replications found

Lewis tested Virzi's three claims on an independent usability study [@lewis1994sample]. Diminishing returns were clearly supported. The 80% claim was supported only partially: it held when the average probability of detecting a problem was between 0.32 and 0.42, as in Virzi's data, and more participants are needed when it is lower. The severity claim was not supported: using behavioral categories for impact on the user's work rather than expert ratings, Lewis found no correlation between a problem's severity and how early it was discovered. His economic simulations found that only the average detection probability strongly influenced the sample size that maximized return on investment.

Faulkner ran a structured test with 60 users of a web-based time-sheet application, 20 in each of three experience groups, logging every departure from the optimal path, and then drew 100 random samples at each sample size [@faulkner2003beyond]. The full group identified 45 problem areas.

| Users per sample | Lowest share found | Mean share found |
| --- | --- | --- |
| 5 | 55% | 85.55% |
| 10 | 82% | 94.7% |
| 15 | 90% | 97.05% |
| 20 | 95% | 98.4% |

The mean for five users matches Nielsen's prediction closely. The spread is the point: the standard deviation at five users was 9.3 points, the 95% interval was plus or minus 18.5 points for five users against plus or minus 6.4 for ten, and some sets of five found 99% while one found 55% [@faulkner2003beyond]. Relying on any one set of five risks missing nearly half the problems. Faulkner's result is consistent with the binomial model, which predicts this variance; what it refutes is the practitioner's reading of an average as a guarantee.

Spool and Schroeder's field study, reported as a two-page extended abstract, had 49 users perform the same task on four production websites and concluded that these sites would need considerably more than five users to find 85% of their problems [@spool2001testing]. As Faulkner reports it, the first five users revealed only 35% of the problems, and the 13th and 15th users each revealed at least one new severe problem [@faulkner2003beyond]. The tasks were open-ended and goal-oriented, the kind where each user sees only a small slice of a large space of possible problems, so detection probability per user is low and the curve rises slowly.

::: myth
**"Five users find 85% of usability problems."** The figure comes from a model with a typical detection probability of 31% [@nielsen1993mathematical]. It holds on average when per-user detection is around 0.32 to 0.42 [@lewis1994sample]; individual five-user samples found anywhere from 55% to 99% in a 60-user resampling study [@faulkner2003beyond]; and on open-ended tasks on live sites the first five users found about 35% [@spool2001testing; @faulkner2003beyond]. Nielsen's own advice was several small rounds with fixes in between, not one round of five. Five is a reasonable size for a round, not a measure of coverage.
:::

::: {.rule #USE-064 grade="A"}
**Test in repeated small rounds, about five learners each, and fix the problems found between rounds.** Diminishing returns per added participant is supported by every study in this line [@virzi1992refining; @lewis1994sample; @nielsen1993mathematical; @faulkner2003beyond], and Nielsen's recommendation is three rounds of five over one of fifteen [@nielsen1993mathematical].

*In LTF:* plan each test of a flow as at least two rounds, with fixes between; a single round is a probe, not a test.
:::

::: {.rule #USE-065 grade="A"}
**Never report a small test round as having found most of a page's problems; report it as a sample with its likely spread.** Five-user samples vary widely in coverage by chance [@faulkner2003beyond], and coverage depends on the detection probability of the task [@lewis1994sample; @spool2001testing].

*In LTF:* a test report says "five learners, these problems", not "the lesson page's problems". For high-cost screens (the first lesson, the first challenge brief, Fly mode), add participants or rounds; with ten learners the lowest coverage in Faulkner's resampling rose to 82%.
:::

### Estimating how many learners a page needs

Because only the average detection probability strongly drives the right sample size [@lewis1994sample], the useful practice is to estimate it. After the first round, look at what share of observed problems were seen by only one learner. If most problems were seen by most learners, detection probability is high and a few more sessions will saturate; if most were seen by one learner each, it is low and many more are needed. Narrow, scripted tasks behave like Virzi's and Faulkner's structured tests; open, exploratory tasks behave like Spool and Schroeder's live sites.

LTF has both kinds. "Open the first lesson, answer the quick check, mark the lesson complete" is narrow. "Find a challenge you would like to fly and get ready to fly it" is open: the learner can filter on `ChallengesPage`, browse `CurriculumMap`, or follow "Fly it" cards from a lesson.

::: {.rule #USE-066 grade="B"}
**Size each test round from an estimate of how likely each learner is to hit each problem, and expect open-ended tasks to need many more learners than scripted ones.** Only the average detection probability strongly drives the efficient sample size [@lewis1994sample], and open-ended web tasks showed much lower per-user detection than the model's typical value [@spool2001testing].

*In LTF:* scripted tasks (first lesson, first quick check, sign-up with `returnTo`) start at five learners; open tasks (choosing and preparing a challenge, using the reference hub mid-flight) start larger and use realistic goals, not prescribed clicks.
:::

::: {.rule #USE-067 grade="C"}
**Stop a round when new sessions stop producing new serious problems, using a stated rule, not at a fixed count.** Virzi's own advice was to run participants until new problems drop to an acceptable level [@faulkner2003beyond; @virzi1992refining]; in open tasks late users still found new severe problems [@spool2001testing].

*In LTF:* the default stopping rule is two consecutive sessions with no new problem rated as blocking or causing a wrong action. Keep a per-problem tally across sessions so the rule can be applied.
:::

### Severe problems do not reliably come first

Virzi's claim that the severe problems show up in the first few sessions is the one claim that did not replicate: Lewis found no correlation between severity and discovery rate when severity was measured by behavioral impact [@lewis1994sample]. The evaluator-effect review found mixed results across experiments [@hertzum2001evaluator], and in Spool and Schroeder's study new severe problems appeared at the 13th and 15th users [@faulkner2003beyond]. Faulkner adds that subtle problems, the least likely to appear in small samples, can be the most serious [@faulkner2003beyond].

::: {.rule #USE-068 grade="D"}
**Do not assume that the first few sessions have surfaced the severe problems; review every session for blockers.** The claim that severe problems are found first is contested: Virzi reported it, Lewis's independent test with behavioral severity did not support it, and other data are mixed [@virzi1992refining; @lewis1994sample; @hertzum2001evaluator]. The grade reflects the conflicting evidence; the safe practice does not depend on resolving it.

*In LTF:* every session is scanned for a learner who cannot find the next step in Fly mode, cannot get from the Brief tab to the Fly tab, or loses entered work, whatever the session's number.
:::

### More than one kind of beginner

The model's numbers assume comparable users using the product in similar ways, a limit Nielsen himself concedes [@nielsen1993mathematical]. For more than one user group his popular article recommends three to four users per group for two groups, and three per group for three or more. Faulkner's three experience groups differed significantly in path deviations (means of 65.6, 43.7 and 19.2) [@faulkner2003beyond], so a test that recruits only one kind of user describes only that kind.

::: {.rule #USE-069 grade="B"}
**Recruit each distinct learner group separately, three or four learners per group per round.** Comparable users are an assumption of the sample-size model [@nielsen1993mathematical], and experience groups differ greatly in how they deviate from the intended path [@faulkner2003beyond].

*In LTF:* at least two groups: people who have never used a flight simulator, and people who have played MSFS or other flight games. A third group, gamers new to flight simulation, is worth adding for Module 0 and the controls lessons.
:::

### What to record

Faulkner's measure was cheap and comparable: a tick on a data sheet each time a participant departed from the optimal path [@faulkner2003beyond]. Lewis's severity measure was behavioral: impact on the user's work [@lewis1994sample]. Both avoid the unreliability of expert judgment. Molich's CUE studies add that test tasks, success criteria and the problem definition should be written before testing, and that usable reports matter as much as method [@molich2004comparative]. Thinking-aloud testing has its own evaluator effect when sessions are analyzed [@hertzum2001evaluator], so more than one person should analyze each session.

::: {.rule #USE-070 grade="C"}
**Record each session as task success, time, and a tally of deviations from the intended path, with each deviation classed by behavioral impact.** Deviation counts are cheap and comparable across sessions [@faulkner2003beyond], and behavioral severity avoids unreliable expert ratings [@lewis1994sample].

*In LTF:* a one-page session sheet per task with columns for deviation, impact (stall, wrong action, help request, task failure), and the screen element involved, kept with the round's report.
:::

::: {.rule #USE-071 grade="B"}
**Have at least two people analyze each test session independently before problems are listed.** The evaluator effect applies to thinking-aloud analysis as much as to inspection [@hertzum2001evaluator]. Graded B because the remedy follows from the evidence rather than being tested itself.

*In LTF:* record sessions (with consent) so that a second person can analyze them; the merged list follows the same rules as an inspection merge (USE-059, USE-061).
:::

::: {.rule #USE-072 grade="C"}
**Write tasks, success criteria and the problem definition before the first session, and narrow each round to one flow.** Testing small feature sets iteratively finds more than one broad test, and quality of method and reporting matters [@molich2004comparative].

*In LTF:* one round tests one flow (landing to first lesson complete; Brief to debrief; mid-flight lookup), with the behavioral goal from USE-005 as its success criterion.
:::

### Cheap and frequent beats rare and large

Krug's argument for testing "on 10 cents a day" is that testing must be simple and cheap enough that teams actually do it, often, with the whole team watching [@krug2014dont]. It is advocacy in the discount-usability tradition, and the variance results above temper it: a cheap round is a sample. But the alternative LTF faces is not a large rigorous study; it is no testing at all, which Gould and Lewis found to be the common case [@gould1985designing]. Small, frequent rounds are the practical answer, as long as their results are reported as samples.

### What this means for Learn to Fly

The plan has no usability testing step. The protocol below fits a small team and the public beta.

- Before each phase that changes a learner-facing flow, run at least two rounds of about five learners per group, with fixes between (USE-064, USE-069), in the learner's own setup with the sim running for challenge and Fly mode flows (USE-063).
- Write tasks, criteria and the stopping rule first (USE-072, USE-067); log deviations and behavioral impact (USE-070); have two people analyze each session (USE-071).
- Report results as samples (USE-065), size open tasks larger (USE-066), and read every session for blockers (USE-068).
- The beta's `ReportProblemDialog` reports are a useful supplement but not a test: they come from learners who chose to report, about problems they recognized as problems.

## Measuring Usability: Tasks, Questionnaires and Their Limits

### Ratings and performance come apart

The three components of usability are measured differently, and the evidence that they must be measured separately is strong. In three experiments on schematic metro maps, Roberts, Gray and Lesnik found that how usable people said a map was could differ from how well they used it [@roberts2017preference]. In the first, 80 participants planned journeys on the official octolinear Paris Metro map and on a curvilinear alternative. The curvilinear map was faster (63 of 80 had a faster mean time with it; mean planning times were 42.4 and 37.9 seconds for the curvilinear map, depending on order, against 51.7 and 48.4 for the official one), yet preference was unrelated to performance: 38 preferred the official map, 34 the curvilinear, 8 were undecided, and aggregate ratings did not differ. In the third, three Berlin maps gave equal journey times but different usability ratings. Ratings, the authors conclude, reflect expectations and prejudices about what effective design looks like [@roberts2017preference].

The aesthetics literature points the same way from another side. Tractinsky, Katz and Ikar had 124 students use one of several simulated cash machines in which aesthetics and real usability were manipulated independently [@tractinsky2000what]. The usability manipulation worked (23.5 seconds per task against 37.5 in the poor condition), and aesthetics did not affect completion time or errors; yet after use, only the aesthetics manipulation affected perceived usability. Under high aesthetics, ratings did not drop even when real usability was poor. Hassenzahl and Monk reanalyzed the beauty-usability link across four datasets and argued it has been overplayed: with little experience, people infer usability from an overall judgment of goodness that beauty colors, and the effect is indirect [@hassenzahl2010inference]. Tuch and colleagues manipulated both factors independently with 80 participants on an online shop, using a strong usability manipulation, and found the reverse: aesthetics did not affect perceived usability before or after use, while poor usability lowered perceived beauty [@tuch2012beautiful].

The direction of the aesthetics effect is contested and depends on how strong each manipulation is. What is not contested is the practical conclusion: a rating of how usable something feels is not a measure of how usable it is.

::: {.rule #USE-073 grade="B"}
**Judge usability from task performance (success, errors, time, deviations), and treat ratings as a separate measure of satisfaction, never as evidence that a flow works.** Ratings and performance dissociated in three map experiments [@roberts2017preference], and perceived usability followed aesthetics rather than real usability in a cash-machine experiment [@tractinsky2000what].

*In LTF:* a learner saying "this is clear" about a `FlyPanel` layout or a lesson page is recorded, but the decision rests on whether they completed the task and how often they deviated.
:::

::: {.rule #USE-074 grade="B"}
**Choose between alternative diagrams and widgets by measuring reading accuracy and time on a real task, then ask for opinions.** Preference for a familiar or handsome design can coexist with slower use [@roberts2017preference].

*In LTF:* before changing an instrument widget (the airspeed dial and tape, the G1000 PFD, the VOR CDI), give beginners a reading task with both versions, timed, and count misreadings; for Fly mode, use a brief glance and recall format.
:::

### Polish as a confound

If aesthetics can bias ratings, it can bias tests. Sonderegger and Sauer gave 60 adolescents functionally identical simulations of a mobile phone that differed only in visual design [@sonderegger2010influence]. The appealing version was rated more usable (6.14 against 5.32) and was also used faster (147.7 against 198.5 seconds) with fewer errors per trial (2.0 against 4.8). The sample was adolescents with a simulated phone, and a related study by the same authors is reported to have found longer completion times with the more attractive product, so the direction of performance effects is not settled. Tuch and colleagues' results run the other way for ratings [@tuch2012beautiful]. The finding to act on is narrow: when two variants differ in finish, finish may drive the result.

::: {.rule #USE-075 grade="D"}
**When comparing two design variants in a test, give them the same level of visual finish, or the comparison measures polish as well as design.** An appealing but functionally identical prototype was rated more usable and used faster in one experiment [@sonderegger2010influence], while another found no aesthetics effect on perceived usability [@tuch2012beautiful]; the evidence conflicts, and equal finish removes the question.

*In LTF:* test a rough sketch against a rough sketch, and a polished build against a polished build; never a new mockup against the shipped `LessonPage`.
:::

::: {.rule #USE-076 grade="B"}
**Fix interaction problems before polishing, and do not expect visual refinement to compensate for a frustrating flow.** With a strong usability manipulation, poor usability lowered perceived beauty and aesthetics did not raise perceived usability [@tuch2012beautiful]; where aesthetics did lift ratings, it did not change errors or time [@tractinsky2000what].

*In LTF:* the identity work in other Parts of this book (type, color, the horizon line) follows, not replaces, fixing the problems this Part's reviews and tests find on `LessonPage`, `ChallengePage` and `FlyModePage`.
:::

### The System Usability Scale

Brooke's System Usability Scale (SUS) is a ten-item questionnaire that gives a single score from 0 to 100 for the perceived usability of a system [@brooke1996sus]. It was designed to be "quick and dirty": cheap, usable on small samples, and independent of technology. Each statement is answered on a five-point scale from strongly disagree to strongly agree, and the statements alternate positive and negative wording, from "I think that I would like to use this system frequently" to "I needed to learn a lot of things before I could get going with this system". Scoring subtracts 1 from each odd item's response and subtracts each even item's response from 5, sums the ten converted values and multiplies by 2.5 [@brooke1996sus].

The benchmark data come from later work. A current benchmark across about 500 studies gives the average score as 68, places a raw 74 near the 70th percentile and a score above 80.3 in the top 10%, and treats below 51 as failing [@brooke1996sus]. Bangor, Kortum and Miller analyzed nearly ten years of SUS data from many products at different development stages and concluded that SUS is a quick, robust measure; later papers report that their data showed SUS sensitive to interface type and to changes made to a product [@bangor2008empirical]. Their 2009 follow-up added an adjective rating to nearly 1,000 SUS surveys and found it correlated strongly with the SUS score (r = 0.822), with a long-run mean near 70 [@bangor2008empirical]. Items 4 and 10 measure learnability and the other eight usability; SUS can be given to as few as two users, but small samples give imprecise estimates [@brooke1996sus].

Three limits matter most. SUS is not diagnostic: it gives a number without reasons. Its correlation with task performance is modest (about r = .24, around 6% of variance) [@brooke1996sus]. And users can give high scores while meeting serious problems [@bangor2008empirical].

::: myth
**"A SUS score of 68 means the system is 68% usable, and anything above 70 passes."** SUS scores are not percentages; the benchmark source stresses that they should be read as percentile ranks [@brooke1996sus]. The 68 average is the mean of a mixed set of about 500 studies, not a pass mark, and fixed cut-offs such as 70 are citing authors' conveniences that the benchmark data do not establish as thresholds [@bangor2008empirical].
:::

::: {.rule #USE-077 grade="C"}
**If LTF uses SUS, give the standard ten items unchanged, after a defined task, naming Learn to Fly as the system, and report a percentile with a confidence interval rather than a raw score.** Changed wording voids the benchmarks, scores are not percentages, and small samples are imprecise [@brooke1996sus; @bangor2008empirical].

*In LTF:* in a beta test, "this system" is replaced by "Learn to Fly" in the instructions, so learners do not rate the simulator. With five learners, report the interval, which will be wide.
:::

::: {.rule #USE-078 grade="B"}
**Use SUS to compare the same task and the same learner group across releases, not to compare LTF with other products or to certify a design.** SUS is sensitive to changes made to a product [@bangor2008empirical], but it explains little of task performance and carries no diagnosis [@brooke1996sus].

*In LTF:* track SUS for "complete Lesson 0.1" and "fly and debrief the first challenge" across releases, and pair each administration with one open question ("What was the most confusing thing?") to get the reasons SUS cannot give.
:::

### Experiments at LTF's scale

Randomized controlled experiments on live traffic (A/B tests) are the strongest design for establishing that a change causes a difference in behavior, and Kohavi and colleagues' guide distills practice at very large sites [@kohavi2009controlled]. They advise agreeing a single overall evaluation criterion in advance, validating the system with an A/A test, running in whole weeks, and splitting traffic evenly for power. Their rule of thumb for sample size, n = 16σ²/Δ² per variant for 80% power, implies very large numbers for small effects: their example of detecting a 5% change in revenue needs over 409,000 users. They warn that underpowered tests are a common mistake and that "no significant difference" does not prove no difference.

Kaptein and Robertson's critique of statistical practice in HCI names three problems: confusing the probability of the data given the null hypothesis with the probability of the null given the data, neglecting statistical power, and not interpreting effect sizes [@kaptein2012rethinking]. They argue findings should be judged by the size and practical importance of effects, not by significance alone.

::: {.rule #USE-079 grade="B"}
**Before running an A/B test on LTF, compute the sample needed to detect the smallest effect worth acting on, and if LTF's traffic cannot supply it, decide from principles and qualitative testing instead.** Small effects need very large samples, and underpowered tests are a common, misleading mistake [@kohavi2009controlled].

*In LTF:* button wording, colors and small layout changes on the landing page or `LessonPage` are decided by the rules in this book and by test sessions, not by an underpowered split test. If a test is run, it compares large differences (a new lesson structure against the old), with one agreed success measure.
:::

::: {.rule #USE-080 grade="C"}
**Report every quantitative comparison as a difference with an interval in units LTF cares about, against a smallest effect worth acting on set in advance, and never report "no difference" from an underpowered study.** Significance alone says little about practical importance [@kaptein2012rethinking], and a null result from an underpowered test is not evidence of no effect [@kohavi2009controlled].

*In LTF:* "Two more of ten learners finished the first challenge brief unaided (interval wide; below the threshold of three we set)" is a usable result; "not significant" is not.
:::

### What this means for Learn to Fly

LTF has no measurement program yet, which means it can start with the right habits rather than unlearn the wrong ones.

- Make task performance the primary measure for every flow (USE-073), and measure diagram and widget changes with reading tasks (USE-074).
- Compare variants at equal finish (USE-075) and fix interaction problems before polish (USE-076). This orders the work between this Part and the identity Parts.
- If SUS is adopted for the beta, administer it as USE-077 describes, track it per task over releases (USE-078) and pair it with one open question.
- Do not run A/B tests of details at beta traffic (USE-079); report comparisons with effect sizes and intervals (USE-080).
- The landing page's live stats and the dashboard's "Stats" tiles are product metrics, not usability measures; completion counts say how many finished, not how many struggled.

## Decision list and review checklist

### Decisions this Part settles for Learn to Fly

1. **Usability goals have a fixed form.** Every goal names users, goal and context, and reports effectiveness, efficiency and satisfaction separately, with a learning measure beside them. LTF keeps three context-of-use records (lesson at a desk, challenge setup, in-flight lookup) and judges Fly mode against its own (USE-001, USE-002, USE-003, USE-005, USE-007).
2. **Failures belong to the design.** Test logs and triage record use errors against design conditions, and classify them as slips, lapses or mistakes before a fix is chosen (USE-004, USE-037).
3. **Review vocabulary.** Findings are filed under Nielsen's ten heuristics plus ISO 9241-110's learnability and engagement, extended by LTF domain items for units, altitude references, control names, sim version and verification status. Consistency and recognition are checked first (USE-011, USE-012, USE-013, USE-014).
4. **Rules are specific and short.** Interface rules are written in enforceable form, grouped by function, owned, enforced by lint and token checks where possible, and revisited when the platform changes (USE-009, USE-010, USE-036).
5. **Fly mode is a glance interface.** The current step, stopwatch state and finish action are findable at a glance; site-wide notices such as `BetaBanner` leave `FlyModeLayout`; no confirmations or destructive controls sit on `FlyModePage`; wrong ticks are fixed by tapping again (USE-015, USE-043, USE-053).
6. **Feedback and closure.** Responses scale with the action; procedures close each chunk; rows state the target state; save status is visible; response times are budgeted in three categories without decorating short waits (USE-016, USE-017, USE-018, USE-019, USE-020, USE-021, USE-022).
7. **One name per control, and what the learner needs stays on screen.** The simulator's label is the name of record; steps never depend on recall from an earlier lesson; new items per step are few; widget mapping follows the sim (USE-023, USE-024, USE-025, USE-028, USE-029).
8. **Consistency repairs.** Headings go through the `display-*` and `heading-*` utilities, cards through `Card`, the `QuizBlock` left border is reconciled with the no-stripe rule, and state controls stop looking like primary buttons. Deliberate exceptions, such as instrument widgets, are recorded (USE-030, USE-031, USE-032, USE-033, USE-034, USE-035).
9. **Error handling.** Changed steps are marked; modes are visible; disabled controls say why; every learning action is reversible (including un-marking a lesson complete); resets name their scope; irreversible actions say so and default to cancel; error messages say what failed, what to do and where to go next (USE-038, USE-039, USE-040, USE-041, USE-042, USE-044, USE-045).
10. **Control and minimalism.** Leaving and returning is normal and loses nothing; exits stay in one place; `FlyPanel` gets `ChecklistRunner`'s keyboard pattern; sequence across lessons stays open; a shared text-size control serves in-flight views; the stack above the first block of `LessonPage` shows only what is relevant to this learner; needed controls are never hidden; verification markers stay visible (USE-046 to USE-052, USE-054).
11. **Inspection protocol.** At least three independent reviewers (five for Fly mode and the first lesson), working alone from written scenarios and problem criteria, with a mixed panel; severity is rated once on the merged list by task impact; single-reviewer findings are kept; inspection findings are hypotheses for testing (USE-055 to USE-062).
12. **Testing protocol.** Repeated rounds of about five learners per group with fixes between, in the learner's own setup for challenge and Fly mode flows; tasks, criteria and a stopping rule are written first; deviations and behavioral impact are logged; two people analyze each session; results are reported as samples; open tasks get more learners; every session is read for blockers (USE-063 to USE-072).
13. **Measurement.** Task performance decides; ratings are reported separately; widget changes are chosen by reading tasks; variants are compared at equal finish; interaction problems are fixed before polish; SUS, if used, is unmodified, task-bound, reported as a percentile with an interval and tracked across releases; no underpowered A/B tests; comparisons are effect sizes with intervals (USE-073 to USE-080).

### Review checklist

Run these questions against a pull request that changes a learner-facing page, component or flow, or against a page in an audit. Each question names the rules it checks.

#### Goals and context

- Does the change state its users, goal and context, and which of effectiveness, efficiency and satisfaction it improves? (USE-001, USE-002)
- If the page is used during flight, was it judged against the in-flight context record? (USE-003)
- Is there a testable behavioral goal for the flow, and a learning measure beside the usability one? (USE-005, USE-007)
- Is any claim that the change "works" based on a test rather than a demo? (USE-006, USE-008)

#### Visibility and feedback

- Can a learner glancing from the sim find the next action and the current state on this screen? (USE-015)
- Does every action give an in-place response scaled to its weight, without toasts on tick-level actions? (USE-016)
- Does each lesson, challenge and procedure chunk end with explicit closure? (USE-017)
- Do step and checklist rows state the target state in the sim's words? (USE-018)
- Do loading states follow the three response-time categories, and are short waits calm? (USE-019, USE-020)
- Can the learner see whether what they entered is saved, and where? (USE-021)
- Does each challenge step say what success looks like in observable cues? (USE-022)

#### Language, recognition and memory

- Does every simulator control, menu and setting use the sim's exact label, the same everywhere? (USE-023)
- Is everything the learner must act on visible at the moment of action, with no recall from earlier lessons? (USE-024)
- Does any step introduce many new items, or ask the learner to hold a value while looking at the sim? (USE-025)
- Is every fork a choice whose labels say where each option leads? (USE-026)
- Is interface guidance placed beside the control it explains? (USE-027)
- Do widget controls move and sit as the sim's controls do, and do procedure lists follow panel order with critical items first? (USE-028, USE-029)
- Are codes such as "C4.3" paired with titles wherever the learner chooses? (USE-023, USE-026)

#### Consistency

- Are headings set with the type utilities and cards with `Card`, not inlined classes? (USE-030, USE-036)
- Has the change passed the physical, communicational and conceptual passes? (USE-031)
- Do state controls look different from action buttons? (USE-032)
- Is any departure from the design system a recorded, task-driven exception? (USE-033)
- Are views grouped by the learner's task rather than by storage or route structure? (USE-034)
- Are navigation, forms, quizzes and lists conventional? (USE-035)

#### Errors and recovery

- If a procedure, checklist or rubric changed, is the changed step marked? (USE-038)
- Is the current mode visible, and do mode-dependent controls say which mode they act in? (USE-039)
- Does every disabled control say what will enable it? (USE-040)
- Can the learner reverse the action at the effort it took, and does every reset name its scope? (USE-041, USE-042)
- Is Fly mode free of confirmations and destructive controls? (USE-043)
- Are irreversible actions announced beforehand, with focus on the safe choice? (USE-044)
- Does every error message say what failed, what to do now, and where to go next? (USE-045)

#### Control and minimalism

- Can the learner leave and return without losing state, and is the exit in its usual place? (USE-046, USE-047)
- Are accelerators offered for repeated actions and stated at the point of use? (USE-048)
- Can returning learners skip ahead without beginners losing guidance? (USE-049)
- Are theme and text-size settings remembered and applied before paint? (USE-050)
- Is every element above the first lesson block relevant to this learner on this visit? (USE-051)
- Is any control needed for the task hidden to make the screen look cleaner? (USE-052)
- Are site-wide notices kept out of in-flight views? (USE-053)
- Is verification status visible wherever an aviation fact is shown? (USE-054)

#### Evaluation and measurement

- Was the change inspected by at least three independent reviewers (five for Fly mode and the first lesson), working alone? (USE-055, USE-056)
- Were scenarios and problem criteria written first, and was the panel mixed? (USE-057, USE-058)
- Was severity rated once, on the merged list, by task impact, with single-reviewer findings kept? (USE-059, USE-060, USE-061)
- Were inspection findings for time-pressured views confirmed by testing? (USE-062)
- If tested: in context, in rounds with fixes between, with groups recruited separately and a stated stopping rule? (USE-063, USE-064, USE-066, USE-067, USE-069)
- Is the report framed as a sample, with every session read for blockers and analyzed by two people? (USE-065, USE-068, USE-071)
- Were deviations and behavioral impact logged against pre-written tasks? (USE-070, USE-072)
- Does the decision rest on task performance, with ratings reported separately and variants compared at equal finish? (USE-073, USE-074, USE-075)
- Were interaction problems fixed before visual polish? (USE-076)
- If SUS or an A/B test was used: standard items, percentile with interval, adequate power, effect size against a preset threshold? (USE-077, USE-078, USE-079, USE-080)
