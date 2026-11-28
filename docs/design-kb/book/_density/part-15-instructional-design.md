# Density test: Part XV, Instructional Design

Section drafted three times: "What feedback should say" (the chapter on feedback after an attempt). Sources: `shute2008focus`, `butler2008feedback`, `alfieri2011does`, from the lane 29 and lane 15 notes.

## Draft 1: terse (about 150 words)

Feedback is not reliably helpful. About a third of the studies in two landmark meta-analyses showed feedback lowering learning [@shute2008focus]. What separates useful feedback is its target and content: it should point at the task, not the learner, and explain what happened and why (elaboration), not just mark right or wrong. Grades alone produced no gains in the work Shute summarizes, and grades plus comments did no better than grades. Give feedback after the learner has attempted a solution, in small units, and avoid praise except sparingly. Feedback after multiple-choice items also stops learners absorbing the wrong options [@butler2008feedback]. In the discovery meta-analysis, feedback was one of the conditions that beat unassisted discovery [@alfieri2011does].

For LTF: the `ResultView` leads with a large percentage and a praise line. Lead instead with the criterion that failed, what it means, and the review link.

## Draft 2: medium (about 400 words)

Feedback is the most trusted tool in instruction and one of the least reliable. Shute's review opens with the uncomfortable fact that about one third of the studies in two landmark meta-analyses (Bangert-Drowns and colleagues; Kluger and DeNisi) found that feedback made learning worse [@shute2008focus]. Feedback that harms learning is, in her definition, not formative at all. The question for a designer is therefore not whether to give feedback but which kind.

Two distinctions carry most of the weight. The first is between verification (right or wrong) and elaboration (why, with hints, worked steps or the misconception named). The second, from Kluger and DeNisi's feedback intervention theory as Shute summarizes it, is between feedback that draws attention to the task and feedback that draws attention to the self. Task-directed feedback tends to help; praise and ego threat tend to hurt. Shute's "avoid" list follows from this: normative comparisons, overall grades, discouraging messages, praise except sparingly, and interrupting a learner who is engaged. Summarizing Wiliam, she reports that students given grades only showed no gains, comments only showed large gains, and grades plus comments showed no gains: the grade swamps the comment.

Timing depends on the task. Immediate feedback suits difficult procedural tasks and novices; delayed feedback has been associated with better transfer. Shute treats the question as unsettled. Butler and Roediger add a narrow but useful result: after a multiple-choice test, feedback raised later correct recall and brought intrusions of the wrong options back down to the untested baseline [@butler2008feedback]. And in the discovery meta-analysis, feedback was among the guidance conditions that beat unassisted discovery [@alfieri2011does].

For LTF, the `ResultView` currently leads with a `TierBadge`, a 48 px mono percentage and a message such as "Excellent flying. That is a Gold." The criterion list, which is the elaborated part, comes second. Reverse the weight: lead with the one or two criteria that were not met, what each means for the next attempt, and the review link that already exists for weak criteria.

## Draft 3: full (about 850 words)

Feedback is the most trusted tool in instruction and one of the least reliable. Shute's review opens with the fact that about one third of the studies in two landmark meta-analyses (Bangert-Drowns and colleagues in 1991; Kluger and DeNisi in 1996) showed negative effects of feedback on learning [@shute2008focus]. She defines formative feedback as information communicated to the learner that is intended to modify thinking or behavior to improve learning, and says researchers agree it should be nonevaluative, supportive, timely and specific. Feedback that harms learning is by definition not formative. The designer's question is which feedback, not whether.

Verification and elaboration. Shute separates verification, the simple judgment of right or wrong, from elaboration, the informational part: an explanation of why, hints and cues, worked examples, error analysis, the specific bug or misconception. Her Table 1 arrays types from least to most complex. Her "do" list asks for elaborated feedback (what, how and why), in manageable units, as simple as possible but no simpler, and focused on reducing the gap between the performance and the goal.

Task versus self. Kluger and DeNisi's feedback intervention theory, as she summarizes it, holds that feedback directing attention to the task helps while feedback directing attention to the self (praise, ego threat) tends to hurt. The "avoid" list follows: normative comparisons, overall grades, discouraging or self-esteem-threatening messages, praise except sparingly, oral delivery, and interrupting a learner who is actively engaged. Summarizing Wiliam, she reports that students given grades only showed no gains, comments only showed large gains, and grades plus comments showed no gains.

Timing. Immediate feedback fixes errors in real time and is efficient for procedural skills; delayed feedback has been associated with better transfer. She cites a computer-based instruction meta-analysis with a mean weighted effect of 0.80 for feedback versus none on immediate outcomes (22 studies) and 0.35 on delayed outcomes (9 studies). Her advice is immediate feedback for difficult tasks, at least at first, and delay for simple ones; low achievers favored immediate feedback and high achievers delayed. Field studies tend to favor immediate and lab studies delay, so the question is open.

Two further results. Response certitude: confidently wrong learners may need richer feedback, a finding the review itself notes was not consistently replicated. Butler and Roediger showed in one experiment with 72 undergraduates that feedback after multiple-choice items raised later recall (from .31 with no feedback to .45 immediate and .56 delayed) and brought lure intrusions back to the no-test baseline [@butler2008feedback]. In the discovery meta-analysis, feedback was the second strongest explicit condition against unassisted discovery (d = -0.46) [@alfieri2011does].

Strength of evidence. Shute's is a narrative review; she concedes "many conflicting findings and no consistent pattern of results" is a fair description of the field, and several guidelines rest on single studies. Task-focus and elaboration are the most consistent threads; timing is the least settled.

For LTF, the `ResultView` currently leads with a `TierBadge` with `tier-pop`, a `font-mono text-5xl` percentage and a message ("Excellent flying. That is a Gold." or "Not passed yet: a required criterion was not met. Review it and try again."). The "Criterion by criterion" list, which carries the elaboration, sits below. The review link already appears for criteria scoring under two points. The change is weight, not new features: put the failed or weakest criterion first, with the authored reason from `commonMistakes`, keep the percentage smaller, and drop praise in favor of a task statement.

## Verdict

The terse draft lost the evidence strength, the timing nuance, the numbers that let a reader judge size (0.80 versus 0.35, the Butler recall figures) and the reason grades fail (they swamp comments). It reads as a list of slogans, which is what the owner complains about in the product.

The medium draft keeps the two core distinctions and the Wiliam result, but drops the effect sizes, the response-certitude caveat and the explicit statement of evidence quality, and that last loss is the one a grade decision depends on.

The full draft keeps every finding, number and caveat in the notes for this topic and each paragraph adds new material. Its only waste is the definitional sentence repeated in the opening, which can be cut.

Chosen density: **full**, with one discipline: each paragraph must carry either a finding with its number and caveat or a concrete LTF consequence, and summaries of what was just said are cut. Application to LTF is concentrated in rules ("*In LTF:*") and in the chapter-ending section, not repeated after every paragraph.
