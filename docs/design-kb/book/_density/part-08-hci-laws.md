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

## Draft C: full (about 1,000 words)

This is the text used in the Part, before its rules.

#### The regularity

Fitts ran three experiments with right-handed college men, 16 in the first two and 20 in the third [@fitts1954information]. In the first, reciprocal tapping, participants struck two metal plates alternately with a stylus for 15 seconds at a time. Plate widths were 2, 1, 0.5 and 0.25 inches and center-to-center amplitudes were 2, 4, 8 and 16 inches, giving 16 conditions, each run with a 1 ounce and a 1 pound stylus on separate days. Instructions stressed accuracy over speed, errors were rare (1.2 and 1.3 percent) and practice effects small. The second experiment had people move discs from one peg to another and the third transfer pins between holes, with no errors permitted.

Fitts defined an index of difficulty in bits per response, Id = -log2(Ws/2A), where Ws is the tolerance and A the amplitude, and an index of performance, Ip = Id/t, in bits per second. For the eight best light-stylus tapping conditions Ip ranged from 10.3 to 11.5 bits per second; disc transfer, with difficulty from 4 to 10 bits, ranged from 7.5 to 10.4; pin transfer ranged from 8.9 to 12.6 over all 20 conditions. His summary puts optimum performance at roughly 10 to 12 bits per second over 1 to 10 bits of difficulty. The correlation of Ip across the two stylus weights was .97. Performance fell at the extremes: movements of 1 and 2 inches were less efficient than those of 4 to 8 inches, and very small tolerances did poorly.

The regularity that survives, that movement time is linear in the logarithm of distance divided by width, is one of the most replicated results in human movement science [@fitts1954information; @mackenzie1992fitts]. The interpretation as a fixed channel capacity is much weaker. Fitts himself said capacity probably differs by limb and muscle group, and that his index ignores direction, grasp and release, and physical work. The regression form now taught, MT = a + b ID, came later; Fitts computed his index condition by condition.

#### Three formulations

MacKenzie's review brought the law into human-computer interaction and catalogued the ways it had been written [@mackenzie1992fitts]. Fitts's original is ID = log2(2A/W). Welford's variant is log2(A/W + 0.5), the form Card, English and Burr used in their 1978 mouse study [@card1978evaluation]. MacKenzie's Shannon formulation is ID = log2(A/W + 1). The Shannon form has a practical advantage: it cannot go negative, while the other two can for overlapping targets or for wide, short targets such as a word of text approached from the side. Under the Shannon form, a target that is as wide as the distance to it has a difficulty of one bit, and difficulty can only approach zero as the target swallows the distance.

All three forms give the same design direction. Doubling the distance or halving the width adds roughly one bit, and each bit adds a roughly constant amount of time. Because the terms sit inside a logarithm, returns diminish: making a large target larger still helps less than making a small one larger.

#### Where the law bends

MacKenzie lists the places where the law does not fit cleanly, and two of them change design decisions [@mackenzie1992fitts]. Movement time sits above the regression line at low difficulty, so very easy targets are not quite as fast as the line predicts; there is a floor. And reducing width costs more time than an equal proportional increase in distance, which breaks the symmetry the formula implies. A designer who halves a button to make room for another pays more than a designer who moves the button twice as far away. The review also records that intercepts are often nonzero or even negative, that error rates are often unreported, that the selection method (click, release, dwell) affects the intercept and should be treated as its own factor, and that at the time of writing the law had not been tested in three-dimensional tasks.

#### Effective width: size for where people land

The most useful idea in the methodological literature is effective width. Nominal width is the size of the target as drawn. Effective width, We, is computed from where people actually land: 4.133 times the standard deviation of the endpoints, or, from an error rate, the nominal width multiplied by 2.066 divided by the z score for that error rate [@mackenzie1992fitts]. MacKenzie's example is a 2 percent error rate on a 5 cm target, giving an effective width of about 4.45 cm. When he reanalyzed Fitts's own 1954 data with effective width and the Shannon form, the correlation rose from .9831 to .9937 and the index of performance fell from 10.6 to 8.2 bits per second.

For design, effective width says that the real size of a target, in the sense that matters for speed, is set by the scatter of the people using it. A learner who is half-attending to a simulator, glancing at a tablet and tapping without a steady look scatters more widely than a seated student staring at the target. The nominal size must therefore be larger than a desk-bound test would suggest, and the gap between adjacent targets must absorb the scatter, or taps will land on a neighbor.

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
