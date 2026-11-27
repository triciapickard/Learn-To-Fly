# Density test: Part VIII, The Quantitative Laws of Interaction

Section drafted three times: "Fitts's law: the regularity and its formulations", from the
lane 09 notes on fitts1954information, mackenzie1992fitts, soukoreff2004towards and
card1978evaluation.

## Draft A: terse (about 150 words)

Fitts (1954) found that the time to hit a target grows with the logarithm of distance over
width. His subjects tapped plates, moved discs and transferred pins; performance held near
10 to 12 bits per second across a wide range of difficulty. MacKenzie (1992) proposed the
Shannon form, ID = log2(A/W + 1), and effective width from the scatter of endpoints. The
regularity is among the most replicated in movement science. The absolute numbers are not:
mouse throughput across studies ranged from about 2.55 to 12.5 bits per second before
ISO 9241-9, and the same 1978 mouse data give 10.3 or 2.65 bits per second depending on
method. Use the shape, not the constants. In LTF, make frequent targets large and near the
hand, and never quote a throughput figure.

## Draft B: medium (about 400 words)

Fitts (1954) extended information theory from perception to movement. In three
experiments with right-handed college men (16 in the first two, 20 in the third) he had
people tap between two plates, move discs and transfer pins, varying the amplitude of the
movement and the tolerance of the target. He defined an index of difficulty in bits,
Id = -log2(Ws/2A), and an index of performance, Id divided by movement time. Across
conditions the rate stayed roughly constant, about 10 to 12 bits per second over 1 to 10
bits of difficulty, though very short movements and very small tolerances did worse.

The regularity, that movement time is linear in the log of distance over width, is one of
the most replicated results in movement science. The interpretation as a channel capacity
is weaker, and Fitts himself said capacity likely differs by limb.

MacKenzie (1992) brought the law into HCI. He proposed the Shannon formulation,
ID = log2(A/W + 1), which cannot go negative, and effective width (We = 4.133 times the
standard deviation of endpoints), which reflects where people actually land. He listed
problems: times sit above the line at low difficulty, shrinking width costs more than
lengthening distance by the same ratio, and across six device studies IP ranged from about
1.1 to 13.7 bits per second.

Soukoreff and MacKenzie (2004) showed why such numbers cannot be pooled: 24 non-standard
mouse models ranged from 2.55 to 12.5 bits per second, while nine ISO 9241-9 studies fell
between 3.7 and 4.9. The 1978 Card, English and Burr mouse model gave 10.3 bits per second;
re-analysed the modern way, the same data give a mean of 2.65.

For LTF: the law licenses a qualitative rule (bigger and closer is faster) and a method for
comparing designs within one study. It does not license importing a number. Size fly-mode
controls for a learner whose precision is degraded, because effective width is set by real
scatter.

## Draft C: full (about 850 words)

(The full draft is the text that appears in the Part under "The regularity", "Three
formulations" and "Effective width: size for where people land". It adds, beyond Draft B:
the stylus weights and the r = .97 correlation across them; the error rates of about 1.2
and 1.3 percent in Experiment I and the instruction to favour accuracy; the reanalysis of
Fitts's own data raising the correlation from .9831 to .9937 and lowering IP from 10.6 to
8.2; the 2 percent error example giving We of about 4.45 cm for a 5 cm target; Welford's
variant and the fact that Card, English and Burr used it; negative intercepts; the
recommendation to aim for about a 4 percent error rate; the selection method as a separate
factor affecting the intercept; and three worked consequences for LTF (the FlyPanel row
padding that is not part of the hit area, the Stopwatch Reset beside Pause, and the
sizing of the "Got it" alert button).)

Sample paragraph at full density:

> MacKenzie lists the places where the law bends. Movement time sits above the regression
> line at low difficulty, so very easy targets are not as fast as the line predicts.
> Reducing width costs more time than an equal proportional increase in distance, which
> breaks the symmetry the formula implies: a designer who halves a button to make room
> pays more than one who moves it twice as far. Intercepts are often nonzero or negative,
> error rates often go unreported, and the selection method (click, release, dwell) shifts
> the intercept and should be treated as its own factor [@mackenzie1992fitts]. For LTF the
> width asymmetry is the practical point: when space is tight, keep the size of a
> frequent control and accept a longer reach before you shrink it.

## Verdict

Draft A keeps the headline but drops every caveat that makes the law safe to use: the
population, the shape of the asymmetries, the reason numbers differ, and the method. A
reader could not tell a good use from a bad one. Draft B keeps the main numbers and the
caveat about method but loses the asymmetry between width and distance, the intercept
problem and the selection method, which are exactly the details that change a design
decision. Draft C keeps all of them, and each added sentence is either a finding, a limit
or an LTF consequence, with no restatement.

Chosen density: **full (Draft C)** for the sections that carry a law, its evidence and its
limits; medium density for background and history where the notes give little more than an
abstract (for example Dabrowski and Munson, Liu and colleagues). Every chapter reaches its
length through more findings, worked LTF decisions and named components, not through
summary.
