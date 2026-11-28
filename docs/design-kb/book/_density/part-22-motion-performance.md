# Density test: Part XXII, Motion and Perceived Performance

Test section: "Slow in and slow out for movement the learner tracks" (from the chapter on
easing and duration), drafted from the notes for dragicevic2011temporal,
bederson1999animation, heer2007animated, lasseter1987principles and chang1993animation.

## Draft 1: terse (about 150 words)

Animators have long eased motion in and out of its poses, and interface designers adopted the
habit without evidence. Dragicevic and colleagues (2011) tested it: twelve students tracked one
point through one-second transitions paced four ways, and slow-in/slow-out gave lower error
than constant speed, fast-in/fast-out or an adaptive pacing, which the authors attribute to
predictability. Bederson and Boltman (1999) used one-second eased glides and found better
spatial reconstruction with no time penalty. The evidence covers roughly one-second moves the
user starts and expects, with small samples and abstract stimuli. It does not cover short
micro-transitions or values that change on their own. Lasseter warns that splines overshoot.
For LTF: use ease-in-out for tracked moves of about a second; use non-overshooting curves on
anything that shows a quantity; let live needles follow the data.

## Draft 2: medium (about 400 words)

Slow in and slow out is one of the twelve principles Disney animators used: more frames near
the start and end of a move, fewer in the middle. Chang and Ungar (1993) carried it into
interfaces, arguing that without it "movement feels artificial and dead", while stressing that
the motions are still quick. For decades the guideline had no direct test.

Dragicevic, Bezerianos, Javed, Elmqvist and Fekete (2011) supplied one. Twelve paid students
tracked a single target in an animated point cloud under four pacings of equal duration:
constant speed, slow-in/slow-out, fast-in/fast-out, and an adaptive pacing that slowed the
visually complex frames. All transitions lasted one second. Slow-in/slow-out had significantly
lower error than the other techniques for every distractor profile, and participants
complained of overshooting the target with the other pacings. The authors explain the gain as
predictability: a gradual start lets the eye lock on, and a gradual stop lets it anticipate the
end point.

Bederson and Boltman (1999) had already used one-second slow-in/slow-out glides at 20 frames
per second in a zoomable family-tree viewer; twenty participants rebuilt the tree more
accurately after animated navigation, with no difference in navigation time. Heer and
Robertson (2007) link slow-in/slow-out to their "maximize predictability" principle.

Limits: twelve participants, identical squares, one target, a one-second duration, and a
transition the participant started with a key press. Nothing here sets a curve for a 150 ms
hover or for a value that changes while the learner looks elsewhere. Lasseter (1987) adds a
warning: splines overshoot when a large change happens over few frames.

For LTF, `useTween` eases widget values with a cubic ease-out over 350 ms, and the `ease-out`
token is a strong ease-out curve. Neither overshoots. For a user-started move of about a
second that the learner must track (a marker moving along the traffic pattern after a click),
an ease-in-out curve is the tested choice. For needles that show a modelled value, follow the
data rather than a curve.

## Draft 3: full (about 800 words)

Slow in and slow out is the animator's habit of spending more frames near the start and end
of a move than in its middle, so an object leaves its pose gently, travels quickly and settles
gently. It is one of the twelve principles that Thomas and Johnston set down from Disney
practice, and Lasseter (1987) restated it for computer animation as a matter of spacing the
in-between frames, which mathematically concerns second and third order continuity of motion.
He also gave a warning that matters to anyone building an instrument widget: when splines are
used to produce the ease, they can overshoot at the extremes if a large change is packed into
a few frames.

Chang and Ungar (1993) brought the principle into user interfaces. In their account it gives
weight and reduces surprise, and without it "movement feels artificial and dead". They insist
the motions are still fast; elsewhere they say animation should be "as fast as it can be while
still preserving legibility". Their paper describes one system and reports no user study, so
the claim was argued rather than measured.

The measurement came eighteen years later. Dragicevic, Bezerianos, Javed, Elmqvist and Fekete
(2011) note that slow-in/slow-out had been an informal guideline without empirical data, and
test four pacings of the same total duration: constant speed, slow-in/slow-out (a piecewise
quadratic ease), fast-in/fast-out, and an adaptive pacing that slows the frames of highest
visual complexity. Twelve paid university students each used all four in a Latin square, with
the task of tracking one target in a cloud of identical dark squares and clicking its final
position. All transitions lasted one second. Slow-in/slow-out produced significantly lower
error than every other technique for every distractor profile. In one count of fully correct
answers it led with 38%, ahead of constant speed (31%), fast-in/fast-out (15%) and adaptive
(14%), although the source notes leave unclear which data set that count describes. Adaptive
speed did best only where complexity sat at the endpoints, where it reduces to
slow-in/slow-out. Participants complained that the other pacings made them overshoot the
target as it stopped. The authors explain the result through predictability and hypothesize a
broader rule: keep velocity variations low.

Two earlier experiments used the same curve. Bederson and Boltman (1999) animated viewpoint
changes in a zoomable family-tree interface for exactly one second at 20 frames per second
with slow-in/slow-out, at an average 750 pixels per second. Twenty participants rebuilt the
tree more accurately after animated navigation, with no significant cost in navigation time,
recall or satisfaction. Heer and Robertson (2007) tie the curve to their principle of
maximizing predictability in data-graphic transitions.

The limits are specific. Dragicevic's sample was twelve students, the stimuli were abstract
squares, there was one target, and participants started each transition themselves, so they
knew when it would begin. The duration was one second. No figure from the study applies to a
150 ms button state or a 200 ms popover, and nothing in it supports slow easing on a value that
changes by itself while the learner is looking at the simulator.

For LTF the application divides three ways. First, the moves that resemble the tested task are
user-started relocations the learner must follow: the aircraft marker in the traffic-pattern
widget, a card moving to a new position, a diagram panning to a new area. There, an ease-in-out
curve of about a second is the evidence-backed choice, and LTF has no such token: its `ease-out`
token, `cubic-bezier(0.16, 1, 0.3, 1)`, is a strongly front-loaded ease-out that suits short
entrances, not tracked travel. Second, short entrances and state changes (popover `rise-in`,
dialog `pop-in`, toasts) are craft territory; ease-out at about 200 ms is a defensible
convention, graded as such. Third, anything that displays a quantity must never overshoot, and
the existing curves do not: both control points of the `ease-out` token have a y value of 1,
and `useTween` uses a cubic ease-out that approaches its target from one side. The `tier-pop`
keyframes do overshoot (to 1.08 scale), which is acceptable because a badge's size encodes
nothing. For a needle driven by a modelled value, the motion is the data, and the needle should
follow it rather than an easing curve.

## Verdict

The terse draft keeps the headline result but drops the sample details that make the limits
legible (who started the transition, what the stimuli were) and loses the three-way split that
turns the finding into LTF decisions. The full draft keeps every number and caveat but spends
words retelling the principle's history twice and reproducing figures the notes flag as
indicative. The medium draft loses the curve analysis of LTF's own tokens, which is the most
useful part. The Part is written between medium and full: every finding, number and caveat
from the notes, the history stated once, each section ending in concrete decisions about named
LTF tokens and components, and no restatement of what the previous paragraph said.
