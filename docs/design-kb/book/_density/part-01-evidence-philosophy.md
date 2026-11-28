# Density test: Part I, Evidence and Ideas

Section chosen: the reproducibility project and what it means for a single study
(`openscience2015estimating`, with `cockburn2020threats` and the Gilbert et al. comment as
reported in lane 31 notes). It is substantial, number-heavy and has a live criticism, so it
tests whether a density keeps findings, caveats and application together.

## Draft 1: terse (about 150 words)

The Open Science Collaboration repeated 100 published psychology studies with high-powered
designs and original materials where available [@openscience2015estimating]. Replication
effects were about half the size of the originals. Ninety-seven percent of originals were
significant; 36 percent of replications were. Thirty-nine percent were rated as having
replicated. Strength of the original evidence predicted success better than who ran the
study. The size of the problem is disputed (a technical comment argued that statistical
errors inflated it), but the direction, smaller effects on repetition, is not. For the book
this means one significant study is a lead, not a rule, and original effect sizes should be
assumed inflated. For Learn to Fly it means a small pilot "win" for a lesson variant should
be confirmed with a second cohort before lessons are rewritten.

## Draft 2: medium (about 400 words)

The Open Science Collaboration asked a plain question: how often does a published
psychology finding appear again when someone repeats the study? A large group of labs
repeated 100 experimental and correlational studies from three journals, using high-powered
designs and the original materials when they were available [@openscience2015estimating].

The abstract reports several results, and they are not the same number. Replication effects
were half the magnitude of original effects. Ninety-seven percent of the original studies
had significant results; 36 percent of the replications did. Forty-seven percent of the
original effect sizes fell inside the 95 percent confidence interval of the replication.
Thirty-nine percent of effects were rated by the replication teams as having replicated.
Pooling original and replication data, and assuming no bias in the originals, left 68
percent of effects significant. Correlational analyses suggested that the strength of the
original evidence predicted replication better than the characteristics of either team.

There is no single "replication rate", because there is no agreed definition of a
successful replication. Quoting only 36 or only 68 percent is choosing a story. The project
was challenged: Gilbert and colleagues argued in a technical comment that statistical
errors and protocol differences inflated the apparent failure, and the original team
replied. The exact size of the problem is contested. The direction is not: effects shrank
on repetition, which is what selective publication of significant results would produce.
The project covers psychology only, and whether HCI shows the same pattern is an open
question, although a survey of computer science journals found the same reliance on
dichotomous p values that preceded the crisis elsewhere [@cockburn2020threats].

For this book the consequence is a grading rule. One study with a small sample and a p
value just under .05 earns at most a B, and its effect size is assumed to be an upper
bound. For Learn to Fly the consequence is humility about small tests: if a lesson variant
wins in a pilot of a few dozen learners, expect the real difference to be smaller or
absent, write down the expected effect before testing, and confirm a surprising win with a
second cohort before rewriting lessons.

## Draft 3: full (about 800 words)

The Open Science Collaboration set out to answer a question that the published record could
not answer by itself: if a psychology study is repeated as closely as possible, how often
does the result appear again? A large group of laboratories repeated 100 experimental and
correlational studies published in three psychology journals. They used high-powered
designs, and the original materials when those were available
[@openscience2015estimating].

The abstract reports the outcome in several ways, and the variety is itself a finding.
Replication effects were, on average, half the magnitude of the original effects.
Ninety-seven percent of the original studies had reported statistically significant
results; 36 percent of the replications did. Forty-seven percent of the original effect
sizes lay inside the 95 percent confidence interval of the replication effect. The
replication teams subjectively rated 39 percent of effects as having replicated. If one
assumes the original results were unbiased and combines original and replication data, 68
percent of effects remain significant. Finally, correlational tests suggested that success
was better predicted by the strength of the original evidence than by the characteristics
of the teams who ran either study.

Each of those numbers answers a different question. Significance in the replication asks
whether the repeat crossed the same threshold. Interval overlap asks whether the two
estimates are compatible. The subjective rating asks the people who did the work. The
pooled estimate asks what the combined data say under a generous assumption. There is no
agreed definition of a successful replication, so a writer who quotes only one figure has
chosen a story, and a reader should ask which. Cockburn and colleagues later summarized the
project as psychologists failing to replicate 39 of 100 studies, which matches the
subjective-rating figure [@cockburn2020threats].

The project was itself criticized. In a technical comment in the same journal, Gilbert,
King, Pettigrew and Wilson argued that the paper contained statistical errors and that,
once corrected, the evidence did not show a crisis; part of their argument concerned
differences between original and replication protocols. The original authors replied, and
the exchange continued. The research notes for this book confirm the existence and thrust
of that exchange but not its detailed numbers, so none are given here. A fair reading is
that the size of the problem is contested and its direction is not. Effects were smaller
when repeated, which is what one would expect if journals preferentially publish
significant results and significant results in small studies overstate the effect.

Three limits bound the finding. It covers psychology only. It is a coordinated replication
attempt, not a single experiment, so its own evidence is strong for the population of
studies it sampled and silent about others. And it measures repeatability, not truth: a
finding that replicates can still be misinterpreted, and one that fails may be real but
smaller than claimed. Whether human-computer interaction shares the problem is open.
Cockburn and colleagues inspected 410 highly downloaded articles across 41 ACM Transactions
journals and found that 15 percent interpreted p values dichotomously, the habit that
preceded the crisis elsewhere; that is evidence of risk, not of failure
[@cockburn2020threats].

For this book, the project sets the floor for grading. A single study with a small sample
and a p value just under .05 is a lead. It can support a B when the mechanism is plausible
and nothing contradicts it, but its reported effect size is treated as an upper bound, and
the rule built on it says so. An A needs several independent replications or a
meta-analysis. When a source entry records a study, it records the sample size, whether it
was replicated and the effect size, so that a later editor can downgrade a rule that has
not held up.

For Learn to Fly, the consequence is humility about small tests of its own. The product is
a niche, free course in public beta, and any pilot of a lesson variant will involve tens of
learners, not thousands. If a new layout for `LessonPage` or a new quiz flow "wins" in such
a pilot, the real difference is probably smaller than observed and may be absent. Write
the expected effect and the success measure down before the test, and confirm a surprising
win with a second cohort before rewriting the lessons that depend on it.

## Verdict

The terse draft keeps the headline numbers but loses the point that matters most for a
reader judging evidence: that the several replication figures answer different questions.
It also drops the limits (psychology only, repeatability is not truth) and the HCI survey,
so it would license a confident misreading. It fails the brief.

The full draft keeps everything in the notes, but about a third of it restates: the
paragraph explaining what each number asks repeats the list above it, the "three limits"
paragraph partly restates the criticism paragraph, and the opening sentence restates the
question twice. Written at this density, 22,000 words would carry fewer findings, not
more.

The medium draft keeps every finding, every number the notes confirm, the criticism with
its limit (thrust confirmed, details not), the scope limit, the HCI evidence and the
application to the product, in about half the words of the full draft. It loses only the
explicit gloss of what each figure measures, which one sentence restores.

**Chosen density: medium, with one added sentence where a number needs its meaning
explained.** The Part is written at about 400 words per substantial finding, with the word
floor reached by covering more sources, more cross-lane findings, more worked decisions for
Learn to Fly and more rules, not by expanding each finding.
