# Density test: Part XIX, Decisions, Persuasion and Dark Patterns

Test section: choice overload and its replication (sources: iyengar2000when,
scheibehenne2010can, chernev2015choice). The same notes were drafted three times.

## Draft 1: terse (about 150 words)

The jam study found that a 24-jam display drew more shoppers (60 percent stopped, against 40
percent for 6 jams) but sold far less (3 percent bought, against nearly 30 percent)
[@iyengar2000when]. It did not generalize. A meta-analysis of 63 conditions from 50 experiments
(N = 5,036) found a mean effect of virtually zero with large variance [@scheibehenne2010can]. A
later meta-analysis of 99 observations (N = 7,202) found a significant effect once four moderators
were included: set complexity, task difficulty, preference uncertainty and an effort-minimizing
goal [@chernev2015choice]. So there is no general rule that menus must be short. Overload is a
risk where a beginner faces a hard, unfamiliar, final choice. For LTF, keep one recommended next
step where the learner knows least, and keep full lists (challenges, airports, glossary) with
filters where the learner is browsing.

## Draft 2: medium (about 400 words)

The popular claim that more options demotivate comes from one paper. In a Menlo Park grocery
store a tasting booth showed either 24 or 6 jams, rotated hourly over two Saturdays. Of 242
shoppers who passed the large display, 60 percent stopped; of 260 who passed the small one, 40
percent stopped. Purchases, traced through a coded $1 coupon, went the other way: nearly 30
percent of the limited-choice group bought a jar against 3 percent of the extensive group
[@iyengar2000when]. Two further studies pointed the same way: students offered 6 essay topics
turned in more essays (74 against 60 percent) than those offered 30, and participants choosing
among 30 chocolates found the choice harder and more often took cash instead of chocolate
afterward (12 against 48 percent).

The finding did not hold as a general law. Scheibehenne, Greifeneder and Todd pooled 63
conditions from 50 published and unpublished experiments, 5,036 participants in all, and found a
mean effect of virtually zero with wide variance: some studies showed overload, some showed a
benefit from more options [@scheibehenne2010can]. Chernev, Böckenholt and Goodman replied that a
null average hides moderated effects, and their own meta-analysis of 99 observations (N = 7,202)
found a significant effect once four moderators entered the model: more complex choice sets,
harder decision tasks, greater uncertainty about what one wants, and a stronger goal of
minimizing effort each increased overload [@chernev2015choice]. They also found that
satisfaction, regret, deferral and switching worked about equally well as outcome measures. The
two groups have not settled the dispute, and no preregistered test of the four factors was found.

For design, the defensible statement is conditional. Long lists do not harm on average. A beginner
making a difficult, unfamiliar, final choice is where overload has been reported. In LTF that
describes the first choice of where to start, not the challenge catalog or the glossary. Keep the
single recommended next step (`LessonPath`'s current pin, the landing CTA) and keep full lists
with filters on `ChallengesPage` and the airports page.

## Draft 3: full (about 800 words)

The claim that more options demotivate has one famous origin. Iyengar and Lepper set up a
tasting booth in an upscale grocery store in Menlo Park, California, on two Saturdays, showing
either 24 or 6 jams and rotating the display hourly [@iyengar2000when]. Of the 242 shoppers who
met the extensive display, 60 percent (145) stopped; of the 260 who met the limited display, 40
percent (104) stopped. Those who stopped did not sample significantly different numbers of
flavors. Everyone who approached received a coupon for $1 off, coded so that purchases could be
traced to the condition. Nearly 30 percent (31) of the limited-choice group later bought a jar,
against 3 percent (4) of the extensive-choice group, a difference reported as chi-square 32.34 on
N = 249, p < .0001. The large display drew more attention and sold far less.

The paper did not rest on the booth alone. In a classroom study, students offered an optional
extra-credit essay chose among either 6 or 30 topics: 74 percent of the 70 limited-condition
students turned in an essay, against 60 percent of the 123 extensive-condition students, and
graders rated the limited-condition essays higher (8.09 against 7.69). In a laboratory study,
participants choosing among 30 Godiva chocolates took longer (24.36 against 8.91 seconds), found
the decision harder and more frustrating, and said they had been given "too many" options. Offered
chocolate or cash as payment afterward, 48 percent of the limited group took chocolate, against 12
percent of the extensive group and 10 percent of a no-choice group.

The finding then failed to generalize. Scheibehenne, Greifeneder and Todd collected 63
conditions from 50 published and unpublished experiments, 5,036 participants in all, including
unpublished work to limit publication bias [@scheibehenne2010can]. The mean effect of the number
of options was virtually zero, with large variance: some studies showed strong overload, others a
benefit from more options. They found possible preconditions but no sufficient conditions. A
press summary reported that more options helped especially when people had clear prior
preferences (a secondary reading). Secondary accounts also report that the lead author's own
attempt to replicate the jam result in 2008 failed, and describe another failed attempt.

Chernev, Böckenholt and Goodman objected in the same journal issue that searching for a single
main effect across all conditions is uninformative when overload has several antecedents. Their
2015 meta-analysis of 99 observations (N = 7,202) found a significant overall effect once four
moderators were modeled [@chernev2015choice]. Greater choice set complexity, higher decision task
difficulty, greater preference uncertainty and a more prominent effort-minimizing goal each
increased overload. Four outcome measures (satisfaction or confidence, regret, deferral, and
switching) behaved about equally. A trade summary of related work illustrates the factors: five
funds with fifty data points each overwhelm more than fifty funds on one metric; time pressure
raises overload; a final choice requiring trade-offs is harder than browsing. The Scheibehenne
group replied, and the dispute is open. No preregistered test of the four factors was found, so
they are a well-argued hypothesis with meta-analytic support.

For LTF, rate each choice screen against the four factors. The first choice of where to start
stacks all four: the learner does not know what they want, the options are unfamiliar, it feels
final, and the learner wants to get going. That screen should offer one recommended start, as the
landing CTA "Start lesson 0.1" and the `LessonPath` current pin already do. The end of a lesson
stacks fewer: the learner now knows something, but prev and next cards, "Fly it" challenge cards
and "Go deeper" resources compete, so one should be primary. `ChallengesPage` is a browse, so its
full grid and five `Select` filters are fine. The airports list and glossary are browses too. Fly
mode adds time pressure, so it should offer no menu at all. Before cutting any long list, LTF
should look at its own drop-off on that list rather than cite the jam booth.

Compared against the notes, the full draft keeps every number and caveat, but the chi-square, the
essay grading means and the per-screen walk-through added length that either restates the
medium draft's conclusion or gives precision a designer never acts on.

## Verdict

The terse draft loses the replication story's texture (who replied to whom, what outcome
measures mean, that the dispute is open) and every number from Studies 2 and 3, which matter
because they show the original evidence was more than one booth. The full draft keeps everything
but pads the application with restatement. The medium density keeps every finding, every number a
reader might act on, every caveat and the open dispute, and leaves room for a separate, concrete
application section per chapter. The Part is written at the medium density: about 400 words per
major section of evidence, with the extra length coming from more sources, more LTF screens and
worked decisions, not from longer restatement. Secondary-only details (the failed dissertation
replication, the phys.org reading) are kept but flagged as secondary in one clause each.
