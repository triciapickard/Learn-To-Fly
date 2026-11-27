# Density test: Part X, Interaction Design

Section tested: "Hold the mode, do not latch it" (the Sellen, Kurtenbach and Buxton result on
mode errors), from the chapter on modes. Each draft is written from
`research/11-interaction-design/notes.md` (sections sellen1992prevention, raskin2000humane,
norman1981categorization) and `research/17-aviation-human-factors/notes.md` (sarter1995world).

## Draft 1: terse (about 150 words)

A mode error is acting as if the interface were in one state when it is in another
[@norman1981categorization]. Sellen, Kurtenbach and Buxton tested two remedies in a vi-style
editing task with twelve experts and twelve novices: a foot pedal the user had to hold to stay in
insert mode, and a screen that turned pink in insert mode [@sellen1992prevention]. Both reduced
mode errors, but the held pedal did more: mode-switch method accounted for 15.6% of variance
(liberal scoring) against 4.8% for the color. The pedal also shortened the time to resume after a
distractor task; the color did not. Raskin's quasimode is the same idea [@raskin2000humane]. The
sample was small and the hardware unusual, so the numbers do not transfer. The lesson does: a mode
the user holds is safer than one the system remembers, and color alone is the weakest signal.
For LTF, the widget Explore and Quiz me switch is a latched mode marked mostly by an ink pill.

## Draft 2: medium (about 400 words)

Norman defined a mode error as misclassifying the situation and then doing what fits the assumed
state rather than the true one [@norman1981categorization]. Raskin sharpened the condition: an
interface is modal for a gesture when the current state is not the user's locus of attention and
the gesture can produce different results [@raskin2000humane]. Both point at the same remedy,
which is to put the state where attention already is.

The best direct test is Sellen, Kurtenbach and Buxton [@sellen1992prevention]. Twelve experienced
vi users and twelve novices inserted a string after each capitalized word in a block of text,
while also servicing a distractor task on a second computer that pulled their attention away and
back. Two factors were crossed. Mode switching was either by keyboard (i and escape) or by holding
a foot pedal for insert mode. Visual feedback was either none or the whole screen turning dark
pink in insert mode. The pedal produced significantly fewer mode errors under both scoring rules.
Mode-switch method explained 15.6% of variance (liberal) and 11.0% (conservative); visual feedback
explained 4.8% and 4.1%. The pedal also gave a faster resume time after the distractor, a measure
of confusion about mode, while the pink screen had no effect on it. A second experiment found a
non-latching pedal more salient than a latching one.

The caveats are real: twelve people per group, one editing task, an unusual input device. The
authors also name rival explanations (feedback through the limb that switches, relief for visual
attention). What survives is the ordering: user-maintained beats system-maintained, and a color
change is the weakest form of feedback tested.

In LTF the Explore and Quiz me switch in `WidgetFrame` is a latched, system-maintained mode shown
by which pill is ink-filled. A learner who leaves the page for the sim and returns has only that
pill to tell them whether dragging the needle is practice or an answer.

## Draft 3: full (about 800 words)

A mode error, in Norman's definition, happens when a person misclassifies the situation and then
performs an action that is appropriate to the assumed state but not to the true one
[@norman1981categorization]. His collection of about a thousand slips put mode errors inside the
first family, errors in forming the intention, and his examples included text editors with
command and text modes and devices whose buttons change meaning by state, among them aircraft
automatic pilots. Raskin later gave the condition a precise form. An interface is modal with
respect to a gesture when the current state is not the user's locus of attention and the gesture
can produce one of several responses [@raskin2000humane]. He proposed the quasimode, a mode that
lasts only while the user keeps up a physical action, such as holding the shift key. Because the
user must keep doing something to stay in the mode, the user cannot forget being in it.

The best controlled test of that idea is Sellen, Kurtenbach and Buxton [@sellen1992prevention].
The task simulated the vi editor: insert the string "errorerror" after each capitalized word in a
passage of about 190 words with 75 capitalized words. Twelve experienced vi users and twelve
novices took part, and each also serviced a distractor task on a second computer, with digits
from 1 to 6 presented after beeps at intervals of about 4.5 seconds on average, which forced them
to switch attention away and then resume. The design crossed the mode-switch method (the i and
escape keys, versus holding a sustain pedal while in insert mode) with visual feedback (no change,
versus the whole screen turning dark pink in insert mode).

The pedal produced significantly fewer mode errors than the keyboard under both liberal and
conservative scoring, and visual feedback also reduced errors. The omega-squared analysis
attributed 15.6% of variance (liberal) and 11.0% (conservative) to the switch method, and 4.8%
and 4.1% to the visual feedback, roughly three times as much for the held pedal. The pedal also
gave a faster resume time, the interval from finishing the distractor to the first editing action,
which the authors used as a measure of confusion about the current mode. The pink screen had no
effect on resume time. Experts benefited from the visual feedback when using the keyboard, but it
was redundant with the pedal. Eight of the eleven novices whose preferences could be classified
preferred the pedal conditions; the experts split five and five. A second experiment found that a
non-latching pedal, one that must be held, gave a more salient indication of mode than a latching
one. The paper also lists dimensions along which feedback can vary (sensory modality, reactive
versus proactive, transient versus sustained, demanding versus avoidable, user-maintained versus
system-maintained) and cites Monk, who cut mode errors by a third with a mode-contingent sound on
each keystroke.

So user-maintained modes beat system-maintained ones, and a held mode beats a latched one. In
other words, the strongest protection is a state the user keeps alive with their own action. The
color change, the most common way interfaces mark a mode, was the weakest remedy tested.

The limits matter. The sample was twelve per group, the task was narrow, and the foot pedal is
unusual hardware, so the percentages should not be carried over to touch screens. The authors
name rival explanations for the pedal advantage: feedback through the limb that makes the switch,
relief from competition for visual attention, and the distribution of tasks over limbs. They also
reject the claim, which they quote from Tesler, that modes can be designed away: almost every
interface contains modes (dialog boxes, cursor shape, selection state), so the task is to make
them salient and easy to enter and leave. Sarter and Woods extend the point to automation, where
the system can change modes by itself and the failure becomes one of mode awareness, not only of
using the wrong mode [@sarter1995world].

For LTF the result has three applications. First, the Explore and Quiz me switch in `WidgetFrame`
is a latched, system-maintained mode marked by which pill is ink-filled; a learner who looks away
to the sim and returns has only that pill to say whether dragging a needle is practice or an
answer. Second, the Fly tab's optional timer silently arms the challenge's random events, so
starting it changes what the next minutes will do without saying so on the control. Third, the
theme toggle is a latched mode too, but a harmless one, since no gesture means something different
under Day or Night. The rule, restated for LTF, is that a user-maintained state is the safer
choice wherever an action changes meaning by mode.

## Comparison

Measured against the notes, the full draft kept every number and caveat but spent about 150
words saying the conclusion again and re-describing the quasimode. The terse draft dropped the
resume-time measure, the conservative scoring figure, the second experiment and the rival
explanations, each of which matters to how far the finding can be pushed.

## Verdict

Write at the medium density, with the full draft's extra specifics (the expert and novice split,
the feedback dimensions, Monk's sound) kept where they change a decision, and its restatements cut.
Each finding is stated once with its numbers, its sample and its caveat, then applied to a named
LTF component. Reach the word floor by covering more sources and more LTF decisions, not by
summarizing a section at its end.
