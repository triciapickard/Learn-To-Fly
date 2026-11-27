# Density test: Part IX, Usability Principles and Evaluation

Section drafted three times from `research/10-usability-heuristics/notes.md` (hertzum2001evaluator, with the 2014 follow-up reported in the same notes): "The evaluator effect".

## Draft 1: terse (about 150 words)

Different evaluators using the same method on the same interface find markedly different problems. Hertzum and Jacobsen reviewed eleven studies of cognitive walkthrough, heuristic evaluation and thinking-aloud testing and found the effect in all three, for novices and experts, for cosmetic and severe problems, and for simple and complex systems [@hertzum2001evaluator]. Average agreement between any two evaluators ranged from 5% to 65%. Severity ratings agreed no better. The causes are vague goal analyses, vague procedures and vague problem criteria. A 2014 follow-up with 19 professionals analyzing the same videos found each reported about a third of the group's problems. The remedy is several evaluators, agreed task scenarios and explicit problem criteria.

*In LTF:* never accept one reviewer's list for `LessonPage` or `FlyModePage`; two reviewers list problems alone against written criteria and a third rates severity.

## Draft 2: medium (about 400 words)

When two people evaluate the same interface with the same method, they do not find the same problems. Hertzum and Jacobsen called this the evaluator effect and documented it across eleven studies of the three most used methods: cognitive walkthrough, heuristic evaluation and thinking-aloud testing [@hertzum2001evaluator]. The effect held for novice and experienced evaluators, for cosmetic and severe problems, for detection and for severity judgments, and for simple and complex systems. Average any-two agreement (the problems both evaluators found divided by the problems either found) ranged from 5% to 65%, and no method was consistently better.

Two examples carry the size of it. In a cognitive walkthrough of a web library system, 58% of the 33 problems found collectively were found by only one evaluator and none by all. In a thinking-aloud study where four HCI researchers analyzed the same videotapes with nine set problem criteria, 46% of the 93 problems were found by one evaluator alone and another 20% by two. Severity agreed no better: in three studies the mean Spearman correlation between evaluators' severity ratings was 0.31, 0.24 and 0.23.

The authors trace the effect to interpretation. Vague goal analyses produce different task scenarios; vague procedures let evaluators anchor on a user like themselves; vague problem criteria let anything count as a problem. A later study by the same group had 19 experienced professionals analyze the same video sessions: each reported about a third of the group's problems.

The conclusion is not that evaluation is useless but that one evaluator's list is a sample. Use several evaluators, fix the task scenarios in advance, and write down what counts as a problem.

*In LTF:* for a review of `LessonPage`, `ChallengePage` or `FlyModePage`, two or more people list problems alone against written criteria (a stall, a wrong action, a misread unit, a request for help), and a third rates severity from the merged list.

## Draft 3: full (about 800 words)

When two people evaluate the same interface with the same method, they do not find the same problems. Hertzum and Jacobsen named this the evaluator effect and documented it across eleven studies of the three methods most used in practice: cognitive walkthrough, heuristic evaluation and thinking-aloud testing [@hertzum2001evaluator]. The effect appeared for novice and experienced evaluators, for cosmetic and severe problems, for problem detection and for severity judgments, and for simple and complex systems. No method was consistently better than the others.

The measure matters. The common "detection rate" (each evaluator's count divided by the group's count) flatters small teams, because its lower bound is 100/n percent and it assumes the group found everything. The authors prefer any-two agreement: for each pair, the problems both found divided by the problems either found, averaged over all pairs. On that measure, agreement ranged from 5% to 65%. It measures reliability, not validity: it says nothing about whether the problems show up in real use.

Two examples show the scale. In a cognitive walkthrough in which 11 first-time evaluators judged a web library system against three set tasks, 58% of the 33 problems found collectively were found by only one evaluator, and none by all. In a thinking-aloud study, four HCI researchers analyzed the same videotaped sessions of four users with nine set criteria for what counts as a problem; 46% of the 93 problems were detected by one evaluator only and another 20% by two. The two experienced evaluators found more (average detection 59% against 45%) but agreed on only 40% of what they found between them.

Severity does not rescue the method. In four experiments severe problems were detected appreciably more often; in ten there was largely no difference. Agreement on which problems were severe was 28% in one study and 20% in two others, and the mean Spearman correlations between severity ratings were 0.31, 0.24 and 0.23.

The effect persists with modern professionals. Hertzum, Molich and Jacobsen (2014, abstract reported in the notes) had 19 experienced practitioners analyze video of five users. Each reported on average 33% (moderated sessions) or 32% (unmoderated) of the problems reported by the whole group, and 50% or 40% of the problems anyone rated critical or serious. Up to 24% and 30% of problems reported by several people were rated critical by one and minor by another.

The authors trace the effect to interpretation and name three weaknesses. Vague goal analyses produce different task scenarios. Vague evaluation procedures let evaluators anchor on a user like themselves. Vague problem criteria let anything be accepted as a usability problem. Their recommendations follow directly: involve several evaluators; check that the task scenarios cover high-risk and high-frequency functions; and define problem criteria explicitly before the evaluation starts. They conclude that a thinking-aloud study analyzed by one evaluator is "highly questionable" as an authoritative statement of what problems an interface has.

Two limits apply. How problems are grouped when lists are merged changes the detection figures, and none of these studies tests whether the problems are real for users. A problem found by one evaluator may still be the most important one.

*In LTF:* the product is reviewed by a small team, so the effect is the single strongest argument for a written protocol. For `LessonPage`, `ChallengePage` (Brief, Fly, Debrief tabs) and `FlyModePage`, two or more reviewers walk fixed task scenarios alone and list problems against written criteria: the learner stalls, takes a wrong action, misreads a unit or altitude reference, or needs outside help. A third person merges the lists and rates severity. The scenarios must include the high-risk ones (setting up Fly mode beside the running sim, following `FlyPanel` steps while flying), not only the tidy ones.

## Verdict

The terse draft keeps the headline but loses the measure (any-two agreement versus detection rate), the 2014 replication's figures, the severity numbers and the reliability-versus-validity caveat, all of which change how a reviewer should read a result. The medium draft keeps most findings but drops the measurement caveat, the experienced-versus-novice comparison and the limit on merging. The full draft keeps every finding, number and caveat and adds the application, with little restatement.

Chosen density: **full**, trimmed of transitions. Each section states the finding with its numbers and conditions, the caveats and replication status, then the concrete LTF consequence. The Part reaches its floor through more sources (from lanes 11, 17, 19, 23, 24, 27, 31 and 32 as well as lane 10) and more worked application to named LTF pages, not through restatement.
