# Density test: Part XIV, The Science of Learning: Load and Memory

Section chosen: "Retrieval beats rereading", the core of the testing-effect material. Sources:
`roediger2006testenhanced`, `rowland2014effect`, `karpicke2011retrieval` (lane 15 notes).

## Draft 1: terse (about 150 words)

Taking a test is a learning event, not only a measurement. In Roediger and Karpicke's first
experiment, students who restudied a prose passage recalled more five minutes later (81 versus
75 percent), but students who had been tested instead recalled more after two days (68 versus
54 percent) and after a week (56 versus 42 percent) [@roediger2006testenhanced]. Rowland's
meta-analysis of 159 effect sizes puts the average benefit of testing over restudy at
g = 0.50, with large heterogeneity, and finds recall tests help more than recognition tests
[@rowland2014effect]. Learners predict the reverse: rereaders felt more confident and did worse
[@roediger2006testenhanced; @karpicke2011retrieval].

For LTF: ask for recall before re-reading, prefer recall formats to multiple choice, and do not
judge a lesson by its immediate quiz score.

## Draft 2: medium (about 400 words)

A memory test is a learning event as well as a measurement. Roediger and Karpicke had 120
undergraduates study two short prose passages for seven minutes each, then either restudy one
passage for seven minutes or spend those minutes on a free-recall test with no feedback. On a
final test five minutes later, restudy won (81 versus 75 percent of idea units, d = 0.52). Two
days later the order reversed (68 versus 54 percent, d = 0.95), and after a week the tested
passage still led (56 versus 42 percent, d = 0.83) [@roediger2006testenhanced]. A second
experiment compared four study sessions with one study and three tests: at five minutes the
all-study schedule led (83 versus 71 percent), at one week the test-heavy schedule led (61
versus 40 percent), and the all-study group had predicted the opposite.

The crossover matters for a product. An immediate quiz score flatters rereading, so a lesson
judged by it will drift toward the wrong design.

Rowland pooled 159 effect sizes from 61 studies and found a mean benefit of g = 0.50 (95 percent
CI 0.42 to 0.58), rising to 0.66 where tested items were fully re-exposed through feedback or
high initial success [@rowland2014effect]. Heterogeneity was large (I-squared about 84 percent),
18 percent of effects favored restudy, and published studies showed larger effects than
unpublished ones. Initial recall tests produced larger benefits than recognition tests.

Karpicke and Blunt add that retrieval also beat concept mapping with the text open, on verbatim
and inference questions alike, and that most students predicted the reverse
[@karpicke2011retrieval].

For LTF: put a recall prompt before any second reading, default to recall formats over
recognition, show the answer after every attempt, and read learning from a delayed check, not
from the in-lesson `QuizBlock` result.

## Draft 3: full (about 800 words)

Taking a memory test is usually treated as a way of finding out what someone knows. The testing
effect says it is also one of the most effective ways of making them know it. Roediger and
Karpicke ran the cleanest modern demonstration with 120 Washington University undergraduates
[@roediger2006testenhanced]. Each student studied two short prose passages (256 and 275 words,
"The Sun" and "Sea Otters", each divided into 30 idea units) for seven minutes. For one passage
they then restudied for another seven minutes; for the other they spent seven minutes writing
down everything they could recall, with no feedback. On that initial test they recalled 20.9
idea units on average, about 70 percent. The final test came five minutes, two days or one week
later, with delay varied between students.

At five minutes, restudy won: 81 percent against 75 percent (d = 0.52). At two days the order
reversed: 68 percent for the tested passage against 54 percent (d = 0.95). At one week, 56
against 42 percent (d = 0.83). The tested group at one week recalled slightly more than the
restudy group had at two days. The restudy control re-read the whole passage, while the tested
students re-experienced only what they could produce, so the design if anything favors restudy.

The second experiment, with 180 students in a between-subjects design, compared four study
periods (SSSS), three study periods and a test (SSST), and one study period and three tests
(STTT). At five minutes the order was SSSS 83, SSST 78, STTT 71 percent. At one week it
reversed: STTT 61, SSST 56, SSSS 40 percent. Proportional forgetting over the week was 14 percent
for STTT against 28 percent for SSST. The SSSS group read the passage about 14.2 times against
3.4 times for STTT, and in a questionnaire predicted better one-week recall than the other
groups, the opposite of what happened.

Two lessons follow. The first is a crossover: a test given right after learning favors whatever
makes material feel familiar, and a test given days later favors whatever made the learner
produce it. The second is that the learner's own judgment points the wrong way.

Rowland's meta-analysis is the quantitative backbone [@rowland2014effect]. It pooled 159 effect
sizes from 61 studies reported between 1975 and 2013, using Hedges's g with a random-effects
model. The mean was g = 0.50 (95 percent CI 0.42 to 0.58). In a high-exposure subset of 92
effects, where tested items were fully re-exposed through feedback or high initial success, it
was 0.66 (CI 0.56 to 0.75). Heterogeneity was large, I-squared about 84 percent. Of the effects,
81 percent favored testing, 18 percent favored restudy and 1 percent were zero. Published
studies averaged 0.58 and unpublished ones 0.25, though the gap vanished in the high-exposure
set. Initial recall tests produced larger benefits than recognition tests, which Rowland reads
as support for effortful retrieval as a contributor. A secondary summary says applied research
was excluded, so classroom size is not estimated directly.

Karpicke and Blunt pushed the comparison against a strong rival: concept mapping done with the
text in view [@karpicke2011retrieval]. With learning time matched, and with the ideas in maps and
in recalls nearly identical (0.78 against 0.81), retrieval practice scored 0.67 on a one-week
test against 0.45 for concept mapping (d = 1.50), on both verbatim and inference questions. In
the second experiment, 101 of 120 students did better with retrieval, yet only 30 had predicted
that it would win. The authors note that mapping without the text would itself be retrieval,
and that "active" does not tell you how much a task teaches.

For LTF the consequences are specific. `QuizBlock` offers four types (single, multi, numeric,
order), all of them recognition or construction from given options except numeric; none asks the
learner to produce an answer from memory in words. The plan's 2–4 questions per lesson, placed
after the section they test, are well placed for retrieval, but the scroll position means the
answer is one flick away; a prompt that asks for recall before the learner scrolls back is the
cleaner form. `quizStore.ts` records the first answer and whether it was correct, which is the
right data to keep, because the first attempt is the retrieval event. The lesson completion panel
should not present the in-lesson score as evidence of learning, since the five-minute result is
exactly the one that misleads. Fly mode briefings are a natural place for a short recall of the
procedure before the learner opens the sim, and feedback should always follow, because Rowland's
high-exposure estimate is the larger one.

## Comparison against the notes

- Terse keeps the headline numbers but loses the second experiment, the confidence reversal's
  evidence, Rowland's heterogeneity and publication-bias caveats, and the recall-versus-
  recognition moderator's design consequence. It would launder a variable effect into a
  confident one. Rejected.
- Medium keeps every finding that changes a design decision, every caveat that limits a rule
  (heterogeneity, publication status, negative effects), and lands an application. It drops
  material details (passage lengths, idea-unit counts) that do not change any decision.
- Full adds detail of real value in a few places (the restudy control favoring restudy, the
  proportional forgetting figures, the student prediction counts) but much of it is method
  description a designer will not act on, and the LTF section repeats what the chapter-ending
  section will say.

## Verdict

Write at the medium density as the base, about 400–600 words per major finding, and pull in
the specific full-density details that strengthen or limit a rule (a control that biases
toward the null, a prediction count that shows the illusion, a moderator that changes the
format). Keep method description to what a reader needs to judge the evidence. Put product
application in the chapter-ending section and in rule *In LTF* lines, not after every
paragraph. Reach the floor with more findings and more worked LTF decisions, not more method
narrative.
