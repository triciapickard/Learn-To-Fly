# Evidence and Ideas: How to Know What Works

Every later Part of this book makes claims of two kinds. Some come from experiments: a study measured reading speed, error rates or recall, and the rule follows from what was measured. Others come from craft: a typographer, an architect or an industrial designer, after decades of practice, wrote down what good work does. This Part sets out how the book tells the two apart, how much weight each deserves, and how the evidence grades A to D are earned and lost. Its first half draws on the methodological literature of psychology, statistics and human-computer interaction: the replication projects, the critiques of significance testing, the studies of how usability evaluations disagree, and the classic accounts of validity. Its second half draws on the design philosophers whose ideas sit underneath many craft rules: Simon on satisficing, Rittel and Webber on wicked problems, Alexander on misfit, Sullivan, Loos, Rams and Venturi on function, ornament and simplicity, and Hume on whose taste counts.

The evidence in this Part is unusual. Most of its sources are arguments, simulations, reviews and statements of principle rather than experiments on design, so most of its rules are graded C, and that grade is honest rather than weak: a rule such as "test the difference, not the difference in significance" rests on arithmetic that no experiment could improve. A few rules rest on replicated findings about how evaluation itself goes wrong and earn an A. Use this Part in two ways. When you read a rule elsewhere in the book, come back here to see what its grade means and what would change it. When you make a design decision for Learn to Fly that no rule settles, use the procedures here (the screening questions, the reviewer qualifications, the misfit list, the decision record) to make it defensibly.

## How a grade is earned

A rule's grade is a claim about the evidence behind the rule, and like any claim it needs support. The grades used throughout this book are A (replicated evidence), B (some evidence), C (expert consensus without direct experiment) and D (contested). The definitions are short; applying them is not. This chapter sets out the procedure the book follows, so that a reader can check any grade and an editor can change one when the evidence changes.

### Start from the kind of contribution

Before asking how strong a source is, ask what kind of thing it is. Wobbrock and Kientz describe seven types of research contribution in human-computer interaction, each judged by its own criteria [@wobbrock2016research]. Empirical contributions report new findings from observation and data (experiments, user tests, field observations, interviews, surveys, diaries) and are judged on the importance of the findings and the soundness of the methods. Artifact contributions are new systems, techniques, toolkits, sketches and mockups; they are often accompanied by studies "but do not have to be, and sometimes should not be". Methodological contributions are judged on utility, reproducibility, reliability and validity. Theoretical contributions (concepts, models, frameworks) are judged on novelty, soundness and their power to describe, predict and explain. Dataset contributions are judged on usefulness and representativeness, survey contributions on how well they organize what is known and expose gaps, and opinion contributions, essays and arguments, are "judged on the strength of their argument", which should use evidence and fairly consider opposing views.

The point for grading is that applying the wrong criteria is a category error. An essay such as Greenberg and Buxton's "Usability evaluation considered harmful (some of the time)" is, in Wobbrock and Kientz's own classification, an opinion contribution [@wobbrock2016research; @greenberg2008usability]. It cannot be faulted for lacking a control group, and it cannot supply an effect size. Its value is the force of its argument. Equally, an experiment's value is not raised by the fame of its authors. The type also tells you which grade is even possible: an opinion essay alone can support at most a C, however persuasive, and a single empirical study alone can support at most a B.

The taxonomy is a convention, not a finding, and other schemes exist [@wobbrock2016research]. Its use here is practical. Every source in this book's bibliography is described in the research notes by kind (replication project, theoretical essay, opinion essay, textbook, practitioner guide, craft treatise, polemic), and the grade of each rule begins from that label.

::: {.rule #EVD-001 grade="C"}
**Label every source by its kind of contribution before weighing it, and judge it by the criteria for that kind.** Empirical work is judged on its methods and findings, artifacts on what they make possible, theory on explanatory power, and opinion on the strength of its argument [@wobbrock2016research]. Treating an essay as data, or dismissing an artifact for lacking a study, is a category error. The taxonomy is a convention of the field rather than an experimental result, hence C.

*In LTF:* when a pull request or a design note cites a source, it says what kind of source it is ("craft treatise", "single experiment, 124 students"). A widget in `src/features/widgets/` is an artifact and is judged by what it lets a learner do; a claim that the widget "improves retention" is empirical and needs a comparison.
:::

### What earns each grade

The four grades map onto the strength and directness of the support. The following table states the test the book applies.

| Grade | Earned by | Typical sources | Capped by |
|---|---|---|---|
| A | Several independent studies or a meta-analysis agreeing on the direction | Replication projects, reviews of many studies | Distant tasks or populations |
| B | One or a few studies, or indirect evidence | A single experiment, a field study | Small samples, no replication |
| C | Craft authority, standards, sound argument | Treatises, standards, statistics | Contradicting experiments |
| D | Conflicting evidence or failed replication | Disputed findings | Nothing; it is the floor |

Three refinements matter in practice. First, directness. A rule earns its grade from evidence about its specific claim, not about a neighboring one. The finding that replication effects are about half the size of original effects in psychology is strong evidence about psychology studies [@openscience2015estimating]; it is indirect evidence about HCI studies, whose replication rate has not been measured in the same way [@cockburn2020threats]. Second, population and task. An experiment on students judging cash-machine layouts is direct evidence about students judging cash-machine layouts [@tractinsky2000what]. Applied to a beginner reading a lesson beside a flight simulator it is indirect, and the grade drops unless other studies close the gap. Third, the claim's own scope. A rule that says "preference and performance can come apart" is better supported than one that says "they usually do", and the rule must be written at the scope its evidence supports.

A meta-analysis earns an A only if it survives the criticisms made of it. Hattie's synthesis of more than 800 meta-analyses is the cautionary case. It produced a league table of effect sizes and a benchmark "hinge point", and critics have shown averaging of unrelated studies, correlations treated as effect sizes, unweighted means and a cutoff with no principled justification; Hattie acknowledged that one family of values in the book was calculated incorrectly throughout [@hattie2009visible]. A synthesis is only as good as the comparability of what it combines.

::: {.rule #EVD-002 grade="C"}
**Grade a rule by the strongest evidence that bears directly on its specific claim, for a population and task close to the product's, not by the reputation of the source.** An A needs several independent studies or a sound meta-analysis agreeing in direction; a B needs at least one study or solid indirect evidence; a C rests on craft, standards or argument; a D marks conflict or failed replication. Lower the grade when the studied people or tasks are far from a beginner using a course beside a simulator [@henrich2010weirdest; @campbell1966experimental]. The procedure is the book's convention, so it is graded C itself.

*In LTF:* a rule about lesson text that rests on studies of students reading print is at most a B for `LessonPage` until it is checked with learners on screen.
:::

::: {.rule #EVD-003 grade="C"}
**Write each rule at the scope its evidence supports, and state the conditions and limits inside the rule.** "Can dissociate" and "usually dissociate" are different claims with different support. A rule that hides its conditions invites use where it does not hold, as happened when practitioners kept the number five from the usability-sample literature and dropped the qualifications its authors attached [@virzi1992refining; @nielsen1993mathematical].

*In LTF:* every rule cited in a review of `FlyModePage` or `ChallengePage` should be read together with its stated conditions; if the conditions do not match (second screen, controller in hand, beginner), say so in the review.
:::

### Recording what was read

A grade is only checkable if the evidence behind it is recorded. The research notes for this book record, for each source, what was actually read (full text, abstract, a publisher's record, a secondary account), what was confirmed and how, and what the source's critics say. The Open Science Collaboration's results argue for a further habit: when a rule cites an experiment, record the sample size, whether it was replicated and the effect size, so a future editor can downgrade a rule that has not held up [@openscience2015estimating]. Kaptein and Robertson's call to judge findings by the magnitude and practical importance of effects suggests one more field: what the effect means in units the product cares about, and whether it would change a decision [@kaptein2012rethinking].

Where a source reports only a p value, the record should say that the effect size and its uncertainty are unknown [@dragicevic2016fair]. Where a source was not read in full, the record says so, and any rule built on it says what is secondhand. Several sources in this Part were read only through reviews or abstracts (Pye's book through a single detailed review, Kaptein and Robertson through their abstract, Maeda's laws through a reader's summary), and the text below marks this where it matters.

::: {.rule #EVD-004 grade="C"}
**For every study a rule relies on, record the sample, the effect size with its uncertainty, whether it has been replicated, what was read, and what the effect means in the product's own units.** Without these a grade cannot be checked or revised [@openscience2015estimating; @kaptein2012rethinking]. If only a p value is reported, record that the size and uncertainty of the effect are unknown [@dragicevic2016fair].

*In LTF:* design notes and pull requests that justify a change by research quote the study's sample and effect, not only its conclusion. "Tractinsky et al., 124 students, simulated cash machine" tells a reviewer how far the finding travels.
:::

### What a grade is not

A grade describes evidence, not importance. A requirement in an accessibility standard may have no experiment behind its exact threshold, and so earn a C, while still being mandatory for the product. A rule graded A may matter little if the effect it describes is small. Ruskin's maxim, "Know what you have to do, and do it", is a C by any standard, yet much design failure, he observed, comes from "a confused understanding of the thing actually to be done" [@ruskin1849seven]. Importance is a separate judgment, and the decision lists at the end of each Part make it.

A grade is also not a verdict on a field. Most of design philosophy earns C because it is argument and craft, and that is what it is for. Most of the statistical rules in this Part earn C for a different reason: they follow from probability, and an experiment could not make them stronger. Cohen's demonstration that a "significant" screening result can leave a high probability that the null hypothesis is true is arithmetic [@cohen1994earth]. To grade such a rule B because no one ran a study on it would be a mistake about what evidence is.

::: {.rule #EVD-005 grade="C"}
**Treat a grade as a statement about evidence, never about importance or obligation.** A standards requirement graded C can be mandatory; a mathematical rule graded C cannot be strengthened by experiment; a rule graded A can describe a small effect. Decide importance separately, in the decision list, with reasons [@cohen1994earth; @wobbrock2016research].

*In LTF:* a review comment that says "only a C, so optional" is wrong when the rule is a contrast or focus requirement for `Button` or the global focus ring; check the decision list for the rule's status instead.
:::

### How a grade moves

Grades change as evidence arrives. A rule moves up when independent studies on a relevant population agree with it, and down when a careful replication fails, when a critique exposes a flaw in the original, or when the original turns out to have been read secondhand and misreported. The aesthetic-usability literature shows the downward path in one decade: an early correlational study of rated layouts [@kurosu1995apparent], an experiment that appeared to show beauty driving post-use judgments of usability [@tractinsky2000what], then a reanalysis arguing that the link is mediated by an overall judgment of goodness and has been overplayed [@hassenzahl2010inference], and a later experiment by Tuch and colleagues, with a stronger usability manipulation, that found no effect of aesthetics on perceived usability and instead found poor usability lowering perceived beauty [@tractinsky2000what]. A rule built on the 2000 paper alone would have been a B in 2001 and a D a decade later.

The upward path works the same way, with independent agreement in place of failure. The workflow in both directions is identical: the rule changes in this book first, with the new citation, and the product follows. That ordering keeps the book the source of truth and stops a design change from quietly outrunning its justification.

::: {.rule #EVD-006 grade="C"}
**Change a grade only by citing the new evidence, and change the rule here before changing the product.** Upgrade on independent agreement from a relevant population; downgrade on failed replication, exposed flaws or misreporting. Record the reason with the change, so the history of the rule is legible [@openscience2015estimating; @hassenzahl2010inference].

*In LTF:* when testing with learners contradicts a rule (for example, learners misread a `Callout` type that a rule says is clear), the finding is written up with its sample, the rule is revised or downgraded here, and only then is the component changed.
:::

### What this means for Learn to Fly

The product already grades its own content, and the design should be held to the same discipline. A lesson or challenge cannot be published while it contains a `verify` callout; it needs a `lastVerifiedAt` date and a `simVersion`; `DraftBadge` and `UnverifiedWarning` mark drafts on preview builds; the speeds page prints a "Last verified" line; and, under D-32 in `v1.md`, only fully verified modules are shown. That is an evidence system for aviation facts. Design decisions have nothing comparable. The product-context dossier lists departures from the plan that have no recorded justification: the body face is Instrument Sans rather than the planned Inter, the planned Big Shoulders Display face is absent, the primary color is ink with a single teal accent rather than the planned sky blue and amber, the landing page drops the D-25 "Skyhawk livery" direction, and the CSS comments cite design files (`tokens.json`, a design-system README, `night-mode.md`) that do not exist in the repository. No Decision Log entry covers this design system. Some of these choices may be good; none can be checked.

Keep the content verification system exactly as it is. Change the design process so that every design decision of consequence cites rule IDs from this book (EVD-001), states the kind and strength of its evidence (EVD-002, EVD-004), and lands in the `v1.md` Decision Log when it departs from the plan. Build one small thing: a short "design rationale" field in the pull request template, filled with rule IDs and, where a study is cited, its sample and effect. When learner testing overturns a rule, revise the rule here first (EVD-006). Treat the existing honesty traits (`BetaBanner`, the "Simplified model" badge in `WidgetFrame`, the "not a pilot certificate" line on `DashboardPage`) as the model: the product already says how sure it is about its facts, and its design rules should say the same.

## Why published findings fail

A design rule that cites "a study" inherits that study's reliability, and the reliability of published studies is lower than their confidence suggests. The last two decades produced direct measurements of the problem in psychology, a theoretical account of why it happens, demonstrations of how ordinary analytic choices manufacture false positives, and a survey suggesting that computer science, including HCI, is exposed to the same causes. A book that turns findings into rules has to absorb all four.

### The reproducibility project

The Open Science Collaboration repeated 100 experimental and correlational studies published in three psychology journals, using high-powered designs and the original materials when they were available [@openscience2015estimating]. Replication effects were half the magnitude of the original effects. Ninety-seven percent of the original studies had statistically significant results; 36 percent of the replications did. Forty-seven percent of the original effect sizes fell inside the 95 percent confidence interval of the replication effect. The replication teams rated 39 percent of effects as having replicated. Assuming no bias in the originals and pooling both sets of data, 68 percent of effects remained significant. Replication success was better predicted by the strength of the original evidence than by the characteristics of either team.

These are different answers to different questions, because there is no agreed definition of a successful replication; whoever quotes one of them alone is choosing a story. The project was challenged in a technical comment by Gilbert and colleagues, who argued that statistical errors inflated the apparent failure, and the original team replied; the dispute also concerns what counts as a failure and how far replication protocols differed from the originals, and the size of the problem remains disputed. The direction is not. Effects shrank when repeated, which is what selective publication of significant results would produce. The finding covers psychology, and Cockburn and colleagues report comparable failures elsewhere: cancer researchers could not reproduce 47 of 53 landmark results, and a Nature survey of more than 1,500 researchers found 90 percent agreeing that there is a crisis [@cockburn2020threats].

::: {.rule #EVD-007 grade="A"}
**Treat a single significant study as a lead, not a rule, and assume its reported effect is an upper bound.** Coordinated replication in psychology found effects about half their original size and far fewer significant results on repetition [@openscience2015estimating]; failures of similar scale are reported in cancer biology [@cockburn2020threats]. The magnitude is disputed and the direction is not, so the grade is A for the direction only. Prefer findings with independent replications, large samples or meta-analyses.

*In LTF:* a rule elsewhere in this book that rests on one experiment is a B at most, and when it is applied to `LessonPage` or `QuizBlock` its effect size should be treated as optimistic.
:::

### Why a significant result can be false

Ioannidis gave the mechanism in a probability model rather than new data [@ioannidis2005why]. Whether a claimed finding is likely to be true depends on the study's power, on bias in how it was run and reported, on how many teams are testing the same question, and on the prior odds that relationships probed in that field are real. With R the pre-study odds, alpha the type I error rate and beta the type II error rate, the positive predictive value without bias is (1 minus beta) times R, divided by (R minus beta times R plus alpha); a finding is more likely true than false only when (1 minus beta) times R exceeds alpha. Bias lowers the value further, and so do many teams chasing the same question, since at least one will find a spurious positive. In the paper's simulation table, an adequately powered randomized trial starting from even odds is true about 85 percent of the time, while underpowered early-phase work is true about one time in four or less.

The model yields six corollaries: findings are less likely to be true when studies are small, when effects are small, when many relationships are tested with little selection, when designs, definitions, outcomes and analyses are flexible, when financial and other interests are strong, and when a field is hot, with many teams involved [@ioannidis2005why]. The essay is theory, not an estimate of how many findings in any field are false, and Goodman and Greenland argued that its treatment of bias drives the false-positive count too high. Read it as an account of which conditions make findings fragile. On that reading the corollaries match later empirical work on small samples and flexible analysis.

::: {.rule #EVD-008 grade="C"}
**Screen every cited study against six flags before it supports a rule: small sample, small effect, many outcomes tested, flexible analysis, an interest in the result, and a crowded topic.** These are the conditions under which a claimed finding is least likely to be true [@ioannidis2005why]. A study raising several flags cannot carry a rule on its own. The corollaries are a model's consequences, not measured rates, hence C.

*In LTF:* design topics with commercial interest and many vendors publishing results (conversion "best practices", engagement tactics, color psychology) raise three flags at once; claims from them do not set defaults for `Button`, `BetaBanner` or the landing page without independent support.
:::

### How flexibility manufactures findings

Simmons, Nelson and Simonsohn showed that ordinary, well-meant flexibility, which they call researcher degrees of freedom, raises the real false-positive rate far above the nominal 5 percent [@simmons2011false]. Deciding when to stop collecting data, which measures to report, which covariates to include and which conditions to compare, after seeing the data, can produce significant support for almost any hypothesis. In their simulations of 15,000 samples, checking significance and then adding participants raised the false-positive rate by half, and combining several freedoms (choosing among dependent variables, controlling for a covariate, dropping a condition, optional stopping) produced a 61 percent false-positive rate, which the authors considered conservative.

Their demonstration experiment made the point vivid. Twenty undergraduates heard either "When I'm Sixty-Four" or a control piece, then reported their birth dates; after controlling for father's age, those who heard the Beatles song appeared about a year and a half younger (adjusted means 20.1 against 21.5 years, p = .040). The authors do not believe it. A rewritten report disclosing all the flexibility shows the effect disappearing without the covariate. Their remedy is disclosure: six requirements for authors and four guidelines for reviewers, among them deciding the sample-size rule before collecting data and listing every variable collected. Self-report surveys suggest the practices are common: in one survey of 2,000 psychologists cited by Cockburn and colleagues, over 63 percent admitted not reporting all dependent measures and 56 percent admitted adding participants after failing to reach significance [@cockburn2020threats]. With 15 dependent variables and only the significant ones reported, the chance of at least one false positive is 54 percent rather than 5 [@cockburn2020threats].

::: {.rule #EVD-009 grade="B"}
**Before looking at any data from a test, write down the outcome measure, the sample or stopping rule, the comparison and the analysis, and keep the note with the result.** Undisclosed flexibility in stopping, measures, covariates and conditions can push the false-positive rate from the nominal 5 percent to well over half [@simmons2011false], and surveys show such practices are common [@cockburn2020threats]. The evidence is simulation plus survey rather than a trial of the remedy, hence B. Disclosure does not stop deliberate fraud, a limit the authors concede.

*In LTF:* a pilot of a new `QuizBlock` feedback style names its single measure (for example, the share of learners answering a delayed retest correctly), its sample and its end date before the first learner sees it.
:::

::: {.rule #EVD-010 grade="C"}
**Report every variant, measure and subgroup that was examined, not only the one that moved.** Full reporting is the condition for anyone else to judge the result [@wasserstein2016asa; @simmons2011false]. Reporting only the winner converts exploration into apparent confirmation.

*In LTF:* a write-up of any change to `LessonPage` or the challenge flow lists all the versions tried and all the numbers looked at, including those that showed nothing.
:::

### The vocabulary of failure

Cockburn and colleagues give names to the mechanisms [@cockburn2020threats]. Publication bias and the file-drawer effect remove null results from the record. P-hacking adjusts the analysis until a threshold is crossed; p-fishing searches many tests for one that crosses. HARKing, hypothesizing after the results are known, presents a pattern found in the data as if it had been predicted, an instance of the Texas sharpshooter fallacy, in which the target is painted around the bullet holes. Each produces confident, publishable findings that will not hold.

Their survey asks whether computer science is exposed. Inspecting the ten most downloaded articles from each of 41 ACM Transactions journals (410 articles), they found that 61, or 15 percent, used a dichotomous interpretation of p values, spread across 21 journals; all but two of those 61 reported at least one finding below .05, which suggests publication bias [@cockburn2020threats]. The survey counts a habit, not wrongdoing, so it is evidence of risk rather than of unreliable results. They review the proposed remedies without crowning one: a stricter threshold of .005 (proposed by 75 senior scientists and heavily criticized), abandoning thresholds, Bayesian methods (themselves open to "b-hacking"), charts of effect sizes and intervals, tools for detecting p-hacking such as the p-curve (whose reliability statisticians question), preregistration and registered reports.

::: {.rule #EVD-011 grade="C"}
**Never present a pattern found while exploring data as if it had been predicted; label it exploratory and test it fresh.** HARKing paints the target around the bullet holes and produces findings that do not replicate [@cockburn2020threats]. An exploratory result is a hypothesis for the next test.

*In LTF:* if browsing the challenge attempt history suggests that learners who open the "Go deeper" cards on `LessonPage` score better tiers, that is a hypothesis about a self-selected group, not a finding about the cards.
:::

::: myth
**"A peer-reviewed, statistically significant result can be taken as established."** Peer review checks a report, not whether the effect will reappear. In a coordinated replication of 100 psychology studies, 97 percent of the originals were significant and 36 percent of the repeats were, with effects about half their original size [@openscience2015estimating]. Flexible analysis can make an impossible effect significant [@simmons2011false], and theory shows why small, flexible, crowded fields produce fragile findings [@ioannidis2005why].
:::

### HCI is not exempt

Design research is especially exposed to several of Ioannidis's flags. Samples are often small, effects in interface comparisons are often modest, many measures are easy to collect, and the field rewards novelty. Greenberg and Buxton describe much research evaluation as an "existence proof": the researcher builds a situation in which the new technique beats the old one at least once, which is confirmatory testing rather than the risky, refutation-seeking kind that gives strong evidence, and replication is rare and hard to publish [@greenberg2008usability]. They cite an analysis of 24 years of CHI papers finding that almost all accepted papers include some evaluation, about 70 percent of it quantitative empirical usability studies. A literature that requires a positive evaluation for publication will contain many positive evaluations.

This does not make HCI findings worthless. It makes the independent replication the thing to look for, and the lone, recent, surprising result the thing to hold loosely. It also means that a finding repeated across many studies of a robust mechanism (pointing time and target size, for instance, treated in Part VIII, The Quantitative Laws of Interaction) deserves more trust than a single result about a stylistic choice.

::: {.rule #EVD-012 grade="C"}
**Give more weight to a mechanism replicated across many tasks than to a single comparison of two designs, and hold lone, recent, surprising design findings loosely.** Confirmatory "existence proof" evaluation and rare replication are common in HCI research [@greenberg2008usability], and the field shows the reporting habits that preceded replication failures elsewhere [@cockburn2020threats].

*In LTF:* a robust finding about target size can set the size of `Button` controls with confidence; a single study claiming that a particular card style raises engagement cannot set the style of `Card`.
:::

### What this means for Learn to Fly

Learn to Fly will draw on psychology for spacing and retrieval practice, multimedia learning, attention and color, and on HCI for layout and interaction. Every one of those imports carries the risks in this chapter. Keep the content pipeline's habit of refusing unverified facts and extend it to design claims: when a pull request cites research for a change to `LessonPage`, `QuizBlock`, `LessonPath` or the landing page, the reviewer runs the six flags (EVD-008) and asks whether the finding has been replicated (EVD-007).

For the product's own tests the stakes are concrete. The beta audience is small, so any pilot will be underpowered, and underpowered studies that "win" overstate their effects. Change the team's habit from "try it and see" to "write it down, then try it": a one-paragraph note naming the measure, the sample and the end date (EVD-009), and a write-up that reports every variant and measure (EVD-010). The data the product already stores (lesson completions, challenge attempts, tiers and debrief scores, shown on `DashboardPage` and in `HistoryTab`) are a tempting field for fishing; treat any pattern found by browsing them as a hypothesis (EVD-011). Build nothing new for this yet, beyond a template for the pre-test note kept beside the plan in `docs/`.

## Reading the numbers: significance, size and uncertainty

Most design research reports its results through null hypothesis significance testing, and most readers of design research, including designers, misread it in predictable ways. The errors are old and well documented. Statisticians have described them for decades, and in 2016 the American Statistical Association issued its first policy statement on a specific matter of practice to correct them [@wasserstein2016asa]. This chapter sets out what a p value does and does not say, why effect sizes and intervals carry the information a design decision needs, and the specific comparison error that turns subgroup results into false stories.

### What a p value says

Informally, a p value is the probability, under a specified statistical model, that a summary of the data (such as the difference between two group means) would be equal to or more extreme than the value observed [@wasserstein2016asa]. The ASA statement sets out six principles. P values can indicate how incompatible the data are with a specified model. They do not measure the probability that the studied hypothesis is true, nor the probability that the data were produced by chance alone. Scientific conclusions and business or policy decisions should not rest only on whether a p value passes a threshold. Proper inference requires full reporting and transparency. A p value does not measure the size of an effect or the importance of a result. And by itself a p value is not a good measure of evidence; a value near .05 taken alone offers only weak evidence against the null [@wasserstein2016asa].

The statement names alternatives (estimation with intervals, Bayesian methods, likelihood ratios and Bayes factors, decision-theoretic modeling, false discovery rates) and notes that all rest on further assumptions. Its editorial is candid that drafting was "lengthier and more controversial than anticipated", that the group did not address alternative hypotheses, error types or power, and that more than two dozen commentators added differing views. It does not tell anyone to stop computing p values. It tells them not to misuse them, and it ends with the line that no single index should substitute for scientific reasoning [@wasserstein2016asa].

### The inverse probability error

Cohen identified the most consequential misreading [@cohen1994earth]. A significance test gives the probability of data at least this extreme if the null hypothesis is true. Researchers want the probability that the null hypothesis is true given the data. Getting from one to the other needs a prior, as Bayes's theorem requires. Kaptein and Robertson list the same confusion, the fallacy of the transposed conditional, first among the problems in CHI statistical practice, with neglect of power and reluctance to interpret effect sizes [@kaptein2012rethinking].

Cohen's worked example is a screening test with a base rate of about 2 percent, sensitivity of at least 95 percent and specificity of about 97 percent [@cohen1994earth]. In his table of 1,000 cases there are 50 positive results, of which 30 are false positives. A positive result is "significant at p < .05" against the hypothesis that the case is normal, yet the probability that the case is normal, given a positive result, is about .60. When true effects are rare, most significant results are false. Design is a field where many ideas do not help, so the base rate of real improvement among tested ideas may be low, and a significant win in a test is correspondingly more likely to be noise.

Cohen also records the replication fallacy: in a study he cites, 42 of 70 academic psychologists believed that a result at p = .01 meant a significant result would be obtained 99 percent of the time on repetition. Rosenthal's point, which Cohen repeats, is that with power around .50 the chance of three significant replications in a row is about one in eight [@cohen1994earth].

::: {.rule #EVD-013 grade="C"}
**Never read a p value as the probability that a design change works, or as the chance the result will replicate; weigh it against how often ideas of that kind succeed.** A significance test gives the probability of the data under the null, not the probability of the null given the data, and with a low base rate of true effects most significant results can be false [@cohen1994earth; @wasserstein2016asa; @kaptein2012rethinking]. This is arithmetic, hence C.

*In LTF:* if most proposed tweaks to `LessonPage` would make no real difference, a "significant" win for one tweak in a small pilot is more likely chance than a discovery; prefer few, well-motivated tests.
:::

### Effect sizes in meaningful units

Because a hypothesis of exactly zero difference is almost never true, a large enough sample will reject it. Cohen cites a cross-tabulation of 15 variables for 57,000 students in which all 105 chi-square tests were significant, and the "crud factor" of ambient correlation among variables [@cohen1994earth]. Significance with a large sample says only that the difference is not exactly zero. His remedy is to report effects as regression coefficients and intervals in units that mean something. A highly significant correlation between height and intelligence in 14,000 children translated, in raw units, into needing 14 feet of extra height to raise IQ from 100 to 130. He also warns that standardized effect sizes depend on the variability of the sample, which makes them hard to compare across studies.

Cumming's "new statistics" generalizes the advice: ask "how much?" rather than "is there an effect?", report effect sizes with confidence intervals, and combine studies by meta-analysis [@cumming2014new]. An interval is read as a range of plausible values for the true effect, with plausibility falling off smoothly toward its ends. A response-time improvement of 34 ms with a 95 percent interval of 7 to 61 means the true improvement could plausibly be anywhere from 7 to 61 ms. Cumming's "dance of the p values" illustrates how widely p varies across replications of the same experiment, which is why relying on it is, in his summary, nonsensical [@cumming2014new].

Dragicevic gives the practical case for HCI [@dragicevic2016fair]. In his hypothetical study of a weight-loss pill, a single "p = .009" leaves a reader unable to tell how large or how uncertain the effect is, while a plot of the mean difference with a 95 percent interval shows both. He frames the goal as fair statistical communication, with principles of clarity, transparency, simplicity, robustness (similar outcomes should yield similar conclusions), non-contingency (no analysis decision should depend on the data) and precision. His tips include asking focused questions, preferring simple and within-subject designs, preferring pictures to numbers for intervals, and banning dichotomous interpretations.

::: {.rule #EVD-014 grade="C"}
**Report every comparison as an effect size with an interval, in units the product cares about, and show it as a chart where possible.** "Median 12 minutes faster, interval 3 to 21" supports a decision; "significant" does not [@cumming2014new; @dragicevic2016fair; @cohen1994earth]. Standardized effects depend on sample variability, so raw units are preferred.

*In LTF:* results of any test on the challenge flow are stated as, for example, the change in the share of attempts reaching a given tier, with its interval, not as a p value.
:::

### Intervals are not significance tests in disguise

The remedy can be misused. Dragicevic points out that using an interval only to check whether it contains zero reproduces significance testing with all its drawbacks; plausibility does not drop suddenly at an interval's limit [@dragicevic2016fair]. Cumming offers a rule of thumb for reading two independent 95 percent intervals by eye (if they overlap by less than about a quarter of their average length, the difference is significant at .05), and Dragicevic cautions that it is a reference point, not a binary rule [@dragicevic2016fair]. Cohen himself noted that intervals are rarely reported partly because they are "embarrassingly large" [@cohen1994earth].

That embarrassment is information. Where samples are small, as they will be for a niche course in public beta, intervals will be wide, and a wide interval says the data cannot yet distinguish the options. The right response is to accept the tie and decide on other grounds: cost, clarity, accessibility, consistency with the rest of the product.

The debate is not settled. Cockburn and colleagues record that there is no consensus on what should replace significance testing, that some researchers defend it, and that there is no evidence yet that abandoning it improves replicability; one journal banned dichotomous statistics including intervals [@cockburn2020threats]. Bayesian analysis introduces a choice of priors, which is another researcher degree of freedom [@cockburn2020threats]. The rules in this chapter do not depend on taking a side in that debate. They depend only on reporting size and uncertainty and on not mistaking a threshold for a conclusion.

::: {.rule #EVD-015 grade="C"}
**When an interval is wide, call the result a tie and decide on cost, clarity, accessibility and consistency; never read a wide interval that includes zero as "no effect".** An interval that spans both zero and useful values says the data cannot yet tell the options apart [@dragicevic2016fair; @cumming2014new]. Treating an interval as a yes-or-no test reproduces the errors of significance testing.

*In LTF:* if two versions of the `Callout` layout give completion rates whose interval spans zero, choose the version that better meets the contrast, measure and consistency rules of the other Parts.
:::

::: {.rule #EVD-016 grade="C"}
**Never conclude from a non-significant result that a change is harmless or makes no difference.** Absence of significance in an underpowered test says little, and "no significant difference" does not prove no difference [@kohavi2009controlled; @dragicevic2016fair]. Estimate power before the test and state it in the report.

*In LTF:* a pilot that finds "no significant drop" in lesson completion after adding a step to `FlyPanel` has not shown the step is free; state the interval and the smallest drop the test could have detected.
:::

### Differences between significant and not significant

Gelman and Stern describe a distinct error, separate from arbitrary thresholds or the gap between statistical and practical significance: comparing two results by comparing their significance [@gelman2006difference]. Two independent studies estimate effects of 25 and 10, each with a standard error of 10. The first is significant at the 1 percent level, the second is only one standard error from zero. But the difference between them, 15, has a standard error of about 14, so the two studies do not differ significantly. A third, larger study estimating 2.5 with a standard error of 1.0 reaches the same significance as the first and yet differs significantly from it. Equal significance does not mean equal effect, and different significance does not mean different effect.

Their applied examples show the error in print. A study of older brothers and men's sexual orientation was described as finding that older brothers mattered and older sisters did not, apparently by contrasting a significant coefficient (0.28, standard error 0.10) with a nonsignificant one (0.08, standard error 0.10) without testing the difference. In experiments on electromagnetic fields and calcium efflux, a plot shaded by significance level suggested separate processes at different frequencies; plotted as estimates with standard errors, the effects were almost always positive and typically not far from 0.1, and the dramatic features were explainable by sampling variability [@gelman2006difference]. The remedy is to show estimates and standard errors and to test differences directly.

::: {.rule #EVD-017 grade="C"}
**To claim that a design works for one group and not another, estimate the difference between the groups' effects directly; never infer it from one result being significant and the other not.** Changes in significance are not themselves significant [@gelman2006difference]. Such interaction estimates usually have wide intervals.

*In LTF:* "the new lesson layout helped learners on desktop (significant) but not on phones (not significant)" is not evidence of a device difference; estimate the difference in effect, and expect it to be uncertain.
:::

### Practical importance comes first

The three problems Kaptein and Robertson identify (the transposed conditional, neglected power, uninterpreted effect sizes) lead to weakly specified hypotheses, weak theories, and studies of limited practical value; their prescription is to judge findings by the magnitude and practical importance of effects [@kaptein2012rethinking]. The working form of that prescription is to decide, before looking at the data, the smallest effect worth acting on. A difference smaller than that is not worth shipping even if it is real; a test that cannot detect a difference that large is not worth running. The ASA's third principle makes the same point for decisions: "ship this variant" should rest on the size of the effect, its cost and risk and the prior evidence, not on a threshold [@wasserstein2016asa].

::: {.rule #EVD-018 grade="C"}
**Decide the smallest effect worth acting on before collecting data, and judge the result against it rather than against a significance threshold.** Magnitude and practical importance are the criteria that matter for design decisions [@kaptein2012rethinking; @wasserstein2016asa].

*In LTF:* before testing a change to the challenge brief, agree what difference would justify it, for instance a few more percent of learners finishing the challenge, and do not ship a smaller gain that adds complexity to `BriefTab`.
:::

::: myth
**"p < .05 means there is a 95 percent chance the effect is real."** A p value is the probability of data at least this extreme under the null model, not the probability that the hypothesis is true [@wasserstein2016asa]. With a low base rate of real effects, a significant result can still leave a high probability that nothing is there; in Cohen's screening example a significant positive result leaves about a .60 probability that the case is normal [@cohen1994earth]. Nor does p predict replication [@cumming2014new].
:::

### What this means for Learn to Fly

The product shows numbers to learners and will show numbers to its team. The rules here apply to both. Learner-facing figures should be in plain units: `DashboardPage` already shows Attempts, Gold results and "Sim time (estimated)" in `font-mono` tiles, and `ProgressBar` carries an `aria-valuetext`. Keep that plain-units habit (EVD-014). Where a learner-facing number is an estimate (sim time, a debrief score that the server recomputes into a tier), say so, as "Sim time (estimated)" already does; do not present an estimate with false precision. The result card in the debrief shows a `font-mono text-5xl` percentage; if the score depends on the learner's own rubric ratings, it is a measurement with error, and the copy around it should not imply more certainty than the rubric supports.

For the team, any comparison of lesson or challenge variants is reported as an effect with an interval in product units (EVD-014), a wide interval is a tie decided on other grounds (EVD-015), no test is cited as proof of harmlessness (EVD-016), subgroup claims (desktop against phone, Day theme against Night, new to sims against experienced) are tested directly (EVD-017), and the smallest worthwhile effect is agreed first (EVD-018). Build a short results template with these fields. Do not build dashboards that shade metrics by significance.

## Who, where and compared with what: validity

A finding can be statistically sound and still not answer the question a designer is asking. The study may not show that the change caused the outcome, or it may show it only for people, tasks and settings unlike the ones that matter. Campbell and Stanley gave the field its vocabulary for these two failures more than half a century ago, and two later bodies of work sharpen it for design: the evidence that most behavioral research samples a narrow slice of humanity, and the long argument in educational research about comparisons in which the medium is confounded with the method.

### Internal and external validity

Campbell and Stanley distinguish internal validity (did the treatment make a difference in this specific instance?) from external validity (to what populations, settings, treatments and measures can the effect be generalized?) [@campbell1966experimental]. They call internal validity "the basic minimum without which any experiment is uninterpretable", and they note that the two are often at odds: the controls that make a causal claim secure can make the setting artificial.

They name eight classes of extraneous variable that threaten internal validity. History: events between the first and second measurement other than the treatment. Maturation: processes within the participants over time, such as growing older, hungrier or more tired. Testing: the effect of taking a test on later scores. Instrumentation: changes in the calibration of an instrument or in the observers or scorers. Statistical regression: movement toward the mean when groups are selected for extreme scores. Selection: biases in choosing who goes in which group. Experimental mortality: differential loss of participants. And the interaction of selection with maturation, which appears in some multiple-group designs [@campbell1966experimental]. Four factors threaten external validity: a pretest changing sensitivity to the treatment, the interaction of selection with the treatment, reactive effects of experimental arrangements, and interference among multiple treatments.

They evaluate sixteen designs against these threats, coded with X for treatment, O for observation and R for random assignment. Three are pre-experimental (the one-shot case study, the one-group pretest-posttest design and the static-group comparison); three are true experiments (pretest-posttest control group, the Solomon four-group design, and posttest-only control group); ten are quasi-experiments, including time series, nonequivalent control groups, counterbalanced designs and regression discontinuity. The one-shot case study has, in their words, such a total absence of control as to be of almost no scientific value. Randomization is the all-purpose way of making groups equal before treatment within known statistical limits [@campbell1966experimental].

Two cautions come from the authors themselves. Replication and cross-validation under other conditions are what science actually runs on, more than once-and-for-all definitive experiments, and they recommend varying how a treatment is executed, not only repeating it exactly. And their summary tables of pluses and minuses must not replace reading the discussion: the chapter was not written to replace one dogma with a dogma of acceptable designs [@campbell1966experimental]. Kohavi and colleagues' practice for online experiments can be read as the same logic carried forward: A/A tests and robot filtering address instrumentation and selection, and novelty and primacy effects are testing or reactivity effects [@kohavi2009controlled].

::: {.rule #EVD-019 grade="C"}
**Before accepting a before-and-after improvement as caused by a redesign, rule out history, maturation, testing, instrumentation, regression, selection and attrition; prefer a randomized comparison, or at least a time series with a comparison group.** A one-shot case study ("learners who used it did well") has almost no evidential value [@campbell1966experimental]. The threats list is canonical method, not an experimental finding, hence C.

*In LTF:* if quiz scores rise after a lesson rewrite, check whether a simulator update changed the task (history), whether the same learners had seen the quiz (testing), and whether the audience changed when a new module was published (selection) before crediting the rewrite.
:::

::: {.rule #EVD-020 grade="C"}
**Treat a pretest as part of the treatment, and do not assume an effect measured after a pretest will appear without one.** A pretest can change what participants attend to, a threat to external validity [@campbell1966experimental].

*In LTF:* a "what do you already know" quiz at the top of a lesson is itself an intervention; if one is ever added before the blocks rendered by `LessonRenderer`, its effect on what learners notice must be considered when the lesson is evaluated.
:::

### The narrow sample

Henrich, Heine and Norenzayan asked whether claims about human psychology drawn from Western, educated, industrialized, rich and democratic (WEIRD) samples generalize, and concluded that WEIRD participants are unusual, frequently outliers, across domains that include visual perception, fairness, cooperation, spatial reasoning, categorization, moral reasoning and self-concept [@henrich2010weirdest]. They cite an analysis of top journals in six subdisciplines of psychology from 2003 to 2007 in which 68 percent of participants came from the United States and 96 percent from Western industrialized countries, countries holding about 12 percent of the world's population; in one leading social psychology journal, 67 percent of the American samples consisted solely of undergraduate psychology students.

Their most striking case concerns perception, often assumed to be the most universal domain. The Mueller-Lyer illusion, measured in 16 societies in the 1960s, was strongest among American undergraduates, for whom one segment had to be about a fifth longer than the other before the two looked equal, while San foragers of the Kalahari were unaffected; the authors relate the difference to experience of "carpentered" environments [@henrich2010weirdest]. In economic games the U.S. adult non-student sample sat at an extreme of the distribution of offers and rejections.

The review is a synthesis of other studies, of varying quality, and many of its comparisons are older or small. It does not say WEIRD findings are wrong, only that their generality is unknown [@henrich2010weirdest]. For design evidence the consequence is direct: much of it comes from university students and general web users, and claims about perception, color meaning or symbol recognition cannot be assumed universal on that basis.

::: {.rule #EVD-021 grade="B"}
**Before applying a finding, compare the studied participants with the product's learners on age, prior experience, language, device and motivation, and lower the rule's grade when they differ.** Behavioral samples are overwhelmingly Western and often student, and even perceptual effects vary across populations [@henrich2010weirdest]. The review's warning is widely accepted but rests on older and uneven comparisons, hence B.

*In LTF:* the learner is a beginner, at home, with a controller or keyboard and a second screen; findings from undergraduates at a desk reading print are indirect for `FlyModePage`, and claims about what a color or icon "means" need checking with actual learners before they shape `Badge` variants or challenge-type icons.
:::

### Media, methods and novelty

Instructional research went through a long version of the design field's habit of comparing a new medium with an old one. Clark's review of that work argued that there are no learning benefits to be gained from employing any specific medium to deliver instruction; media are vehicles, and the truck that delivers groceries does not change our nutrition [@clark1983reconsidering]. His evidence was the confounding visible in the meta-analyses of his time. In college courses comparing computer-based with conventional teaching, the effect was 0.51 standard deviations when different faculty taught the compared courses and 0.13 when one instructor planned and taught both. Programmed instruction gave similar effects whether delivered by text or by computer. Computer groups often saved 30 to 50 percent of lesson time, which Clark attributed to the greater design effort behind them.

Novelty compounds the confound. In secondary-school computer studies, an average effect of 0.32 was 0.56 in studies lasting four weeks or less, 0.3 for five to eight weeks and about 0.2 beyond eight weeks; published studies averaged larger effects (0.47) than unpublished ones (0.21) [@clark1983reconsidering]. A box-score count can also mislead: of 42 audiotutorial studies, 29 favored the new medium, yet the effect-size analysis found only about 0.2 standard deviations, roughly 1.6 points on a 100-point exam. Studies of media "attributes" such as zooming showed they could help some learners, but a partial replication found that a static isolation of the relevant cues worked even better, suggesting the active ingredient was isolating cues, not the motion [@clark1983reconsidering].

Clark's claim is strongest as a warning about confounded comparisons and weaker as a claim that medium never matters. Kozma reframed the debate, and later authors treat medium and method as mutually constitutive: a simulator makes possible practice that no text can [@clark1983reconsidering].

::: {.rule #EVD-022 grade="B"}
**Compare instructional designs on the method they deliver, with the content and method held constant, and never justify a choice by medium alone ("video is more engaging", "interactive is better").** Apparent media effects in reviewed meta-analyses shrank sharply when one instructor taught both conditions [@clark1983reconsidering]. Medium can matter where it enables a new method, so the rule targets confounded comparison, not media as such.

*In LTF:* to judge an interactive widget in `src/features/widgets/`, compare it with a static diagram that has the same prediction prompt and the same feedback, not with a paragraph of text.
:::

::: {.rule #EVD-023 grade="B"}
**Judge a new interactive or animated feature after repeated use, not in the first sessions, and expect early gains to shrink.** In reviewed school computer studies, average effects fell from 0.56 in studies of four weeks or less to about 0.2 in studies longer than eight weeks, and published studies showed larger effects than unpublished ones [@clark1983reconsidering]; online experiments show novelty and primacy effects that require running for weeks [@kohavi2009controlled].

*In LTF:* a new `tier-pop` celebration or a new widget should not be judged by learners' reactions in the first week of a module; look at completion and quiz results across several weeks.
:::

### Aggregates that hide differences

Large syntheses can launder confounds. Hattie's league table of influences on achievement averages effect sizes from meta-analyses of unrelated studies, different outcomes, populations and durations, and critics show that the choice of formula alone can reorder the ranking of three teaching methods in a simulated example; Wecker and colleagues concluded that broad integration of this kind cannot currently be carried out in a scientifically sound way [@hattie2009visible]. A correlation of about .196 converts to an effect size above the book's 0.40 benchmark while explaining under 4 percent of variance. The lesson for a designer is not that synthesis is useless but that a single number for "feedback" or "visual design" summarizes things that should not have been added together.

::: {.rule #EVD-024 grade="C"}
**Do not cite a league-table effect size, or a benchmark cutoff such as a "hinge point", as the authority for a design decision; cite the primary experiments or meta-analyses on a comparable task.** Averages across unrelated studies, outcomes and populations are not comparable, and the cutoff has no principled justification [@hattie2009visible].

*In LTF:* a proposal to add feedback to `QuizBlock` because "feedback has an effect size of" some figure needs a primary study of feedback in a comparable task; the general point that feedback matters may be supported by better-evidenced sources in Part XIV, The Science of Learning: Load and Memory.
:::

### External validity and the use context

The use context of Learn to Fly is unusual enough that external validity deserves its own attention. The learner is beside a running simulator, often with a controller in hand, glancing between screens; lab studies of reading and interface use seldom resemble that. Campbell and Stanley's reactive arrangements matter here too: a learner who knows they are being observed in a test session may behave differently from one at home at night [@campbell1966experimental]. Greenberg and Buxton's argument for testing in context, rather than in a quiet lab, applies with particular force to a product used alongside another program [@greenberg2008usability].

::: {.rule #EVD-025 grade="C"}
**Evaluate designs meant for use beside the simulator in that setting, with the simulator running and the learner's hands on its controls, not at a desk with the page alone.** Reactive arrangements and artificial settings threaten external validity [@campbell1966experimental], and context-specific use must be tested in context [@greenberg2008usability].

*In LTF:* any evaluation of `FlyModePage`, the checklist runner widget or the `Stopwatch` happens with MSFS 2024 running and the page on the second screen the learner would really use.
:::

### What this means for Learn to Fly

Three habits follow. First, audit claims about learners before believing them. The product's own data cannot show that a lesson works by showing that people who took it later did well, because the people who take later lessons are self-selected and more motivated (EVD-019). The signed-up cohort, whose progress is saved, differs from anonymous visitors who start Lesson 0.1 without an account, so findings from `DashboardPage` data describe signed-up learners only (EVD-021). Second, keep medium and method apart in arguments about widgets. The thirteen hand-built SVG widgets are one of the product's distinctive traits, and their value lies in the methods they enable (prediction, manipulation, a "Quiz me" mode in `WidgetFrame`), which is what any evaluation should isolate (EVD-022). Expect the novelty of any new interactive feature to fade (EVD-023).

Third, test where the product is used. Fly mode, large-type checklists and print styles exist because the learner is beside a simulator. An evaluation of those surfaces at a quiet desk tests a different product (EVD-025). Build nothing yet; change the test plan template so that every study names its participants (new to sims, experienced in other sims), its setting and its comparison, and so that before-and-after claims list the threats considered.

## Testing with people: what usability evaluation can and cannot tell you

Watching people use a design is the most direct evidence a product team can collect, and the front matter of this book ranks cheap observation of real learners above inference from distant experiments. That ranking holds only if the observation is done well, because usability evaluation has its own reliability problem, documented in a series of studies in which different evaluators, or different teams, examined the same interface and reported strikingly different problems. This chapter sets out what that literature found, what the famous "five users" rule does and does not say, and when evaluation helps or harms a design.

### The evaluator effect

Hertzum and Jacobsen reviewed eleven studies of three widely used methods, cognitive walkthrough, heuristic evaluation and thinking-aloud testing, and found a substantial evaluator effect in all of them: evaluators using the same method on the same interface detect markedly different sets of problems [@hertzum2001evaluator]. The effect held for novice and experienced evaluators, for cosmetic and severe problems, for detection and for severity judgments, and for simple and complex systems. Average agreement between any two evaluators, measured as the problems both found divided by the problems either found, ranged from 5 to 65 percent, and no method was consistently better.

The examples are concrete. In a cognitive walkthrough of a web library system by 11 first-time evaluators, 58 percent of the 33 problems found collectively were found by only one evaluator and none by all. When four HCI researchers analyzed the same videotaped thinking-aloud sessions of four users, with nine set criteria for what counted as a problem, 46 percent of the 93 problems were found by only one evaluator and another 20 percent by two; the two experienced evaluators found more but agreed on only 40 percent of what they found between them [@hertzum2001evaluator]. Severity ratings agreed poorly too, with mean rank correlations between raters of 0.31, 0.24 and 0.23 in three studies. A later study by the same group, with 19 experienced professionals analyzing recorded sessions with five users, found each reporting on average about a third of the problems reported by the group, and up to 30 percent of problems rated critical by one participant and minor by another [@hertzum2001evaluator].

The causes the authors identify are features of the methods: vague goal analyses lead evaluators to different task scenarios, vague procedures let them anchor on a user like themselves, and vague problem criteria let "anything" count as a problem. Their remedies are several evaluators, explicit coverage of high-risk and high-frequency tasks, and explicit problem criteria. They stress that agreement is reliability, not validity: it says nothing about whether problems appear in real use.

### Many teams, one product

The Comparative Usability Evaluation studies widened the variation from evaluators to whole teams. In CUE-2, nine teams evaluated the Hotmail web site in late 1998, using different methods and different amounts of effort, and reported very different problems [@molich2004comparative]. Figures relayed from the author's interview (secondary, not from the paper itself) give 310 different problems reported, only six of them by more than half the teams, and 232, three quarters, reported only once. In earlier comparisons summarized by Hertzum and Jacobsen, 129 of 141 problems in one and 147 of 186 in another were reported by a single laboratory [@hertzum2001evaluator]. The project's own conclusions are practical: no single method reliably finds all problems, so combine methods; the total number of problems exceeds what one or a few tests can find, so test smaller feature sets iteratively; and one professionally conducted test is still useful and its problems should be fixed [@molich2004comparative].

::: {.rule #EVD-026 grade="A"}
**Never treat one reviewer's problem list or severity ratings as complete; have at least two people find problems independently against agreed criteria, merge the lists, and rate severity from the merged list.** Agreement between any two evaluators using the same method ranged from 5 to 65 percent across eleven studies [@hertzum2001evaluator], the effect persists among experienced professionals, and independent teams testing one site reported largely different problems [@molich2004comparative]. The effect is replicated across methods, systems and evaluator experience, hence A. It concerns reliability; validity was not examined.

*In LTF:* a design review of `LessonPage` or `ChallengePage` uses two reviewers working separately before discussion, and a problem raised by one reviewer only is kept and rated, not dropped.
:::

::: {.rule #EVD-027 grade="B"}
**Write the task scenarios, including the high-risk ones, and the definition of a usability problem before any evaluation begins.** Vague goals, procedures and problem criteria are the identified causes of evaluator disagreement [@hertzum2001evaluator]. The remedy follows from the causes rather than from a trial of it, hence B.

*In LTF:* problem criteria for a learner session are fixed in advance (the learner stalls, takes a wrong action, misreads a unit or label, or needs outside help), and the tasks include the hard ones: setting up `FlyModePage` beside the sim and following the checklist runner while flying.
:::

### Where "five users" comes from

The folk rule that five test users find most problems has two roots. Virzi's three experiments related the share of problems found to the number of participants, by subsampling from 12 users in one study and 20 in two others, and supported three claims: four or five participants reveal about 80 percent of problems, additional participants reveal fewer and fewer new ones, and the most severe problems tend to be found by the first few [@virzi1992refining]. Nielsen and Landauer modeled problem discovery across 11 projects as a curve in which each added participant finds fewer new problems, with the number found from n users equal to N times (1 minus (1 minus L) to the power n), where L is the share of problems one user finds [@nielsen1993mathematical]. Nielsen later gave a typical L of 31 percent and wrote that the curve bends around five users; his practical advice was to run several small studies rather than one large one, fixing problems between rounds, and to use three or four users per group when there are two distinct groups.

The three claims have not fared equally. Lewis's independent study supported diminishing returns, supported the 80 percent figure only when the average chance of a participant detecting a problem lay between 0.32 and 0.42, and failed to support the severity claim: he found no correlation between severity and how early a problem was discovered [@virzi1992refining]. Faulkner tested 60 users and found that samples of five averaged 85 percent of problems but ranged from 55 percent to nearly 100 [@virzi1992refining]. Spool and Schroeder had 49 users perform the same task on four production web sites and reported that the sites would need considerably more than five users to find 85 percent of their problems; Faulkner reports that in that study the first five users revealed only 35 percent, and both the 13th and the 15th users found a new severe problem [@spool2001testing]. Woolrych and Cockton argued that the model's assumption that all users find problems with similar probability makes it over-predict [@nielsen1993mathematical].

Virzi himself wrote that participants should be run until new problems drop to an acceptable level, leaving "acceptable" to the practitioner, and Faulkner observes that both Virzi and Nielsen stated limits that practitioners then dropped [@virzi1992refining]. The defensible summary: the shape of diminishing returns is robust; the number five is not a constant, and depends on how open the task is and how large the design is.

::: myth
**"Five users find 85 percent of usability problems."** The figure is arithmetic on a model with an assumed per-user detection rate of about 31 percent [@nielsen1993mathematical]. With 60 users, five-user samples found between 55 percent and nearly 100 percent [@virzi1992refining]; on open tasks across production web sites the first five found about 35 percent [@spool2001testing]. The idea that severe problems surface first failed an independent test [@virzi1992refining]. What holds is the advice behind the number: small rounds, fix, and test again.
:::

::: {.rule #EVD-028 grade="B"}
**Run usability testing as small repeated rounds (about five learners per distinct learner group, fix, repeat), and end a round on a stopping rule such as two consecutive sessions with no new serious problem, not on a fixed count.** Diminishing returns are robust, but the share found by five varies widely and is much lower for open-ended tasks [@virzi1992refining; @spool2001testing; @nielsen1993mathematical]. The model concerns finding problems, not measuring task times or success rates, which need larger samples.

*In LTF:* a scripted flow (open Lesson 0.1, answer the `QuizBlock`, mark the lesson complete) can be tested in a few sessions; open areas such as the `ChallengesPage` filters, the reference search and the dashboard need more learners and realistic goals. Recruit separately from people new to simulators and people who have flown other aircraft in a sim.
:::

::: {.rule #EVD-029 grade="B"}
**Scan every session for severe failures; never assume the serious problems will have appeared in the first few.** The claim that severe problems are found first failed an independent test [@virzi1992refining], and late participants in open-task testing found new severe problems [@spool2001testing].

*In LTF:* a learner unable to find the next step in `FlyPanel`, or one who misreads a value set in mono on `SpeedsPage`, is a severe problem whenever it appears, even in the tenth session.
:::

### When evaluation harms

Greenberg and Buxton argue that usability evaluation, demanded by reviewers and taught as a default, can be ineffective or harmful when applied by rule rather than by thought [@greenberg2008usability]. Early in design it can mute creative ideas that do not fit current interface norms. Applied to radical innovations it can quash a vision because of the problems of an immature technology. Used to validate a prototype it can suggest worth without a meaningful critique of everyday adoption. And it ignores how cultures adopt technology over time, so today's reluctance can forestall tomorrow's acceptance. Their central distinction is between sketches and prototypes: early designs should be many and cheap, so the team compares ideas ("getting the right design") before refining one ("getting the design right"). Evaluating a sketch as if it were a prototype can kill a promising idea and encourages local hill-climbing.

They also distinguish usable from useful. Think-aloud, walkthroughs and heuristic evaluation look for problems, not benefits, so they favor more usable systems, not radically new ones; many systems, as Landauer put it, are both too hard to use and do too little that is useful [@greenberg2008usability]. The essay is opinion, explicitly in the "considered harmful" tradition; the authors have practiced usability testing for decades and say it should continue for many situations but not all. Norman and Verganti make the related argument that human-centered iteration climbs the hill a product is already on and cannot reveal a higher hill elsewhere [@norman2014incremental].

::: {.rule #EVD-030 grade="C"}
**In early design, compare several rough alternatives as sketches before usability testing any one of them, and do not let the bugs of a first prototype decide the concept.** Premature evaluation can kill promising ideas and encourages local optimization [@greenberg2008usability; @norman2014incremental]. The argument is opinion from experienced researchers, hence C.

*In LTF:* before building a new widget or a new Fly mode layout, put two or three static mockups in front of a few beginners and critique them as sketches; usability test only the one chosen.
:::

::: {.rule #EVD-031 grade="C"}
**Pair every usability measure with a measure of usefulness, for a course meaning whether the learner learned: a delayed quiz, a challenge result or a stated value.** A page learners navigate without error may still fail to teach, and problem-finding methods favor usable over useful designs [@greenberg2008usability].

*In LTF:* a lesson redesign is judged on navigation errors and on whether learners later answer the lesson's questions and complete its "Fly it" challenge, not on the first alone.
:::

### Expert inspection and its place

Inspection methods, in which experts judge an interface against heuristics without users, suffer the evaluator effect at least as much as testing [@hertzum2001evaluator]. They are cheap, so they are useful, but their output is a list of candidate problems, not a verdict. The role of expert judgment more broadly is the subject of the chapter on craft authority below; here the rule is narrower. An inspection's findings are inputs to a test, and a finding raised by one inspector is kept until a test or a second look disposes of it.

::: {.rule #EVD-032 grade="B"}
**Treat expert inspection results as candidate problems to be checked with learners, not as findings.** Inspection methods show the same low agreement between evaluators as testing [@hertzum2001evaluator], and combining methods finds more than any one [@molich2004comparative].

*In LTF:* the review checklists at the end of each Part produce candidate problems for a page; the problems that matter most for beginners (fly mode, checklists, challenge briefings) are then checked in a session with a learner.
:::

### What this means for Learn to Fly

The product context records that only the landing page and the error state of `/learn` have been inspected rendered; lessons, challenges, dashboard and reference were read from source. Nothing in the record shows a session with a beginner. That is the largest evidence gap for the design, larger than any gap in the literature, and the rules here say how to close it cheaply. Run a first round of about five beginners per group (EVD-028) on the main flows in `v1.md` Section 19.3: landing to Lesson 0.1, sign up and continue, a challenge through Brief, Fly and Debrief, and a mid-flight lookup on `/reference` and Fly mode. Write tasks and problem criteria first (EVD-027). Have two people log problems independently (EVD-026). Judge lessons on learning as well as navigation (EVD-031).

Keep the habit of reviewing from source and rendering pages; change its status, from a verdict to a list of candidates (EVD-032). For new surfaces such as the onboarding screens planned in `v1.md` but absent from the code, or any rethinking of the landing page, start with sketches compared side by side (EVD-030). Build a session log template with fields for participant group, setting (sim running or not), tasks, problems with severity, and whether each problem was new, so the stopping rule can be applied.

## Preference is not performance

The commonest evidence in design discussions is somebody's judgment: the team likes a version, users rate it highly, an expert says it reads better. Judgments matter, since a product people dislike will not be used, but several lines of research show that what people prefer and how well they perform can come apart, and that the beliefs designers hold about why a design works are sometimes simply wrong. This chapter collects that evidence and turns it into rules for how judgments enter a decision.

### Apparent and inherent usability

Kurosu and Kashimura introduced the distinction between inherent usability (the measurable ease of operating a system) and apparent usability (how easy it looks before or without use) [@kurosu1995apparent]. Twenty-six people arranged the same cash-dispenser elements into 26 layouts, and 252 students rated each layout for apparent usability and for beauty. Beauty correlated 0.589 with apparent usability, while most of the design strategies that interface designers believed made a layout usable (glance sequence, grouping, hand dominance, the placement of the cancel key) correlated weakly or not at all. One factor correlated strongly, at 0.730: the familiarity of the keypad arrangement. The study used ratings of static pictures by people who never operated the layouts, so it cannot show causation, and Tractinsky's later replication in Israel found a higher correlation, supporting the finding while raising questions of culture and method [@kurosu1995apparent].

Tractinsky, Katz and Ikar then let people use the interfaces [@tractinsky2000what]. In a 3 by 2 experiment with 124 analyzed students, aesthetics had three levels chosen from each participant's own ratings of nine cash-machine layouts that differed only in arrangement, and usability had two levels, manipulated with delays and buttons that failed on first press. The usability manipulation worked (23.5 against 37.5 seconds per task), and aesthetics had no effect on completion time or errors. Yet after use, only the aesthetics factor affected perceived usability; under high aesthetics, ratings did not fall even when real usability was poor. The paper gave the field its slogan, "what is beautiful is usable".

The slogan did not hold up as a general law. Hassenzahl and Monk reviewed 15 papers reporting 25 correlations between perceived beauty and perceived usability, found them widely variable, and in analyses across products as well as people found the link wholly mediated by an overall judgment of goodness, an inference users make when they lack direct experience [@hassenzahl2010inference]. A later experiment by Tuch and colleagues with a strong usability manipulation found no effect of aesthetics on perceived usability, and found instead that poor usability lowered perceived beauty [@tractinsky2000what]. The fair reading is that the effect is real in some conditions, strongest when usability differences are modest and aesthetic differences large, and absent or reversed in others.

::: {.rule #EVD-033 grade="D"}
**Do not count on attractive design to raise learners' judgments of how easy the product is; if you rely on a first-impression effect at all, expect it to fade with use.** Early studies found beauty strongly tied to apparent and post-use perceived usability [@kurosu1995apparent; @tractinsky2000what]; a reanalysis found the link mediated and overplayed [@hassenzahl2010inference], and a later experiment found the reverse direction [@tractinsky2000what]. The evidence conflicts, hence D.

*In LTF:* polish on the landing page and the first lesson is worth doing for its own sake and for trust (see Part XVIII, Aesthetics, Emotion and Trust), but do not argue that it will make learners overlook friction in `FlyPanel` or the debrief form.
:::

::: {.rule #EVD-034 grade="B"}
**Never use satisfaction or preference ratings of an attractive prototype as evidence that a flow is usable; measure time, errors and abandonment on the task.** Apparent and inherent usability are distinct [@kurosu1995apparent], perceived usability can stay high when real usability is poor [@tractinsky2000what], and early ratings reflect inference from appearance when experience is missing [@hassenzahl2010inference].

*In LTF:* a beginner's "this looks really clear" about a new `Tabs` layout on `ChallengePage` is recorded, then set beside whether they actually found the Debrief tab and completed the rubric.
:::

### Familiar beats clever in first judgments

The one inherent factor that tracked apparent usability strongly in Kurosu and Kashimura's data was familiarity [@kurosu1995apparent]. A layout that looks like ones people already know is judged easy. That is not proof that it is easy, but for a beginner deciding in the first minutes whether a product is within reach, the judgment itself matters, and the case for conventions on other grounds is made in Part IX, Usability Principles and Evaluation. The practical reading is to spend novelty on content and keep navigation, form controls and common patterns conventional.

::: {.rule #EVD-035 grade="B"}
**Keep navigation, form controls and common interface patterns conventional, and spend visual novelty on content and identity elements.** In rated layouts, familiarity of arrangement tracked apparent usability more strongly than beauty did [@kurosu1995apparent]. The evidence is one correlational study with a replication, hence B.

*In LTF:* the `Header` navigation, `FormField`, `Select`, `Checkbox` and `Tabs` stay conventional in behavior; distinctiveness belongs in the `LessonPath`, the widgets, the reference "kneeboard" and the typography of lessons.
:::

### Preference against performance

Roberts, Gray and Lesnik measured preference and performance on the same task, journey planning with schematic metro maps [@roberts2017preference]. In their first experiment, 80 participants planned journeys on the official octolinear Paris Metro map and on a curvilinear redesign. The curvilinear map was faster (63 of 80 participants had a faster mean time with it; mean planning times were around 38 to 42 seconds against 48 to 52 for the official map), yet preference was unrelated to performance: 38 preferred the official map, 34 the curvilinear one, and the ratings did not differ significantly. In a second experiment 649 respondents rated nine London designs and showed a clear bias toward octolinearity, with people holding an "octolinear" theory of good design distinguishable from those holding a "simplicity" theory. In a third, three Berlin maps gave the same journey times and different usability ratings. People's ratings, the authors conclude, reflect their expectations and prejudices about effective design. Roberts has also argued, in a later paper not examined here, that informal expert assessments of map usability are unreliable [@roberts2017preference].

Smallman and St. John named a related error naive realism: the misplaced faith in people's ability to extract information from realistic displays [@smallman2005naive]. In the military display studies they review, realistic 3-D perspective views were poor for judging relative position and distance; users rarely detected changes that occurred during interruptions, and a tool that listed changes in a table cut response times by as much as 80 percent and reduced misses to zero, while an instant replay tool, which kept temporal realism, was less useful than no tool; and users preferred realistic 3-D ship and aircraft icons while abstract symbols produced consistently better identification. Their remedy is to simplify and caricature reality, to supplement quietly what perception misses, and to inform users gently of likely error. They are explicit that realism is sometimes right, when the detailed experience is part of the task, and their evidence comes from trained participants on military tasks, so transfer to learners reading a cockpit diagram is an inference [@smallman2005naive].

::: {.rule #EVD-036 grade="A"}
**Treat what users and designers prefer, and what they perform best with, as separate measurements, and measure the second on a real task before trusting the first.** Preference and performance dissociated in three map experiments [@roberts2017preference], in reviewed display studies of perspective views, change monitoring and icons [@smallman2005naive], and in rated interface layouts [@kurosu1995apparent]. The dissociation is replicated across independent groups and domains, hence A; the claim is that they can come apart, not that they always do.

*In LTF:* any new diagram, chart or instrument widget is checked by asking beginners to read a value or make a judgment with it, timed, before asking whether they like it.
:::

::: {.rule #EVD-037 grade="B"}
**For teaching, prefer simplified, caricatured instrument and panel diagrams that emphasize what is being taught over photorealistic or 3-D renders, and test the choice; use real sim screenshots for orientation to where things are.** Realistic displays are preferred yet often support worse judgments and identification [@smallman2005naive]. Realism can be right when the detailed experience is the task, so the rule is a default.

*In LTF:* keep the widgets in `src/features/widgets/` drawn as flat SVG in the fixed `instrument`, `arc-*` and `bezel` colors, with the lesson's three sim-settings screenshots used for where-to-click orientation; resist proposals for a photoreal panel.
:::

::: {.rule #EVD-038 grade="B"}
**To help a learner notice what has changed in a configuration or a sequence, give an explicit list of the changes rather than a replay or a realistic animation.** A change table improved response and eliminated misses where a replay did not [@smallman2005naive].

*In LTF:* the checklist runner and the "Steps" list in `FlyPanel` should show the state of each item (done, current, pending) as text and marks, rather than animating a panel to show what moved.
:::

### Folk theories in the craft

Designers' beliefs about why something works are a kind of preference too, and some of the most confident ones are wrong. Typographers long held that readers recognize words by the outline of their shape. Larson reviewed the experimental literature and concluded that "word shape is no longer a viable model of word recognition": the effects once cited for it (the word superiority effect, the speed of lowercase, proofreading errors, the cost of alternating case) are explained by letter recognition and practice, and eye-movement studies show readers using letter identities in parallel [@larson2005science]. In one test, misspellings that changed the word's shape but not its letter shapes were missed more often than ones that kept the shape and changed letter shapes, which is the reverse of what word shape predicts.

In instruction the parallel case is learning styles. Pashler and colleagues set out the only design that could validate matching instruction to a learner's preferred style (classify learners, randomize each group across methods, test all, and look for a crossover interaction) and found virtually no evidence of the required result, with several properly designed studies flatly contradicting it [@pashler2008learning]. A later review found 13 experiments meeting their criteria, with small, non-significant pooled effects. The authors are careful: many versions have simply not been tested, and people do have preferences and different aptitudes. What fails is the claim that matching to a preference improves learning.

::: myth
**"Readers recognize words by their overall shape, so all-capital text is hard to read because it loses the outline."** Experiments separating word shape from letter shape find the letters doing the work; the cost of capitals is largely a matter of practice [@larson2005science]. Avoid long runs of capitals because readers are less practiced with them and they take more space, not because of word shape.
:::

::: myth
**"Learners learn best when teaching matches their visual, auditory or kinesthetic style."** The crossover interaction that matching requires is virtually absent from studies able to detect it, and several contradict it [@pashler2008learning]. Choose the format by the content, for everyone.
:::

::: {.rule #EVD-039 grade="C"}
**When a design rule is justified by a mechanism ("people read word shapes", "visual learners need diagrams"), check the mechanism against experiments before accepting the rule, and keep the rule only if it survives on other grounds.** Confident craft mechanisms have failed when tested [@larson2005science; @pashler2008learning], while some of the rules they justified survive for other reasons.

*In LTF:* the `eyebrow` utility sets short uppercase labels; defend it by its length and spacing, not by word shape, and do not extend capitals to longer text.
:::

::: {.rule #EVD-040 grade="A"}
**Do not offer learning-style tracks, quizzes or settings; adapt, where at all, to what the learner got wrong.** Matching instruction to self-reported style lacks the required evidence and contradicting studies exist [@pashler2008learning]. The conclusion rests on a methodological review and a later review of qualifying experiments, hence A.

*In LTF:* diagrams and widgets are used where content is spatial (instrument layouts, the traffic pattern) and text where it is verbal; captions and text size changes are accessibility features, not style matching.
:::

### What this means for Learn to Fly

Learn to Fly is a product that a beginner will judge by eye before using, and its team will judge it by eye before testing. Both judgments are useful and neither is evidence of usability. Keep the type-led, illustration-free landing page if testing supports it, but do not justify it by first-impression effects whose evidence conflicts (EVD-033). Change any review practice that treats "the team prefers it" or "testers liked it" as a result: preference is logged, performance is measured (EVD-034, EVD-036).

The product already leans the right way on realism. Its widgets are flat SVG caricatures in fixed instrument colors, `WidgetFrame` labels them with a "Simplified model" badge, and there are only three lesson images, all sim-settings screenshots. Keep that (EVD-037). Keep conventional controls conventional (EVD-035). In the checklist runner and `FlyPanel`, show state as explicit marks and text (EVD-038). Build no learner-type quiz and no style settings (EVD-040). When a reviewer defends a typographic choice by a mechanism, ask for the evidence for the mechanism (EVD-039).

## Finding out for yourself: experiments and field methods at small scale

The literature in this book was produced mostly by others, on other people. The cheapest strong evidence for Learn to Fly will be what the team learns about its own learners. That evidence has the same failure modes as published research, and a small product adds one of its own: too few users for the methods that large sites use. This chapter sets out what controlled online experiments require, when a small product should not run them, and which qualitative methods give the most for a few sessions.

### What a trustworthy online experiment needs

Kohavi, Longbotham, Sommerfield and Henne, drawing on experience at large web companies, argue that randomized controlled experiments on live users are the best design for establishing that a change causes a difference in behavior, and that organizations learn more from them than from the "Highest Paid Person's Opinion" [@kohavi2009controlled]. Their guide is specific. Users are randomly assigned to control and treatment. The Overall Evaluation Criterion, the single quantitative measure of the experiment's objective, should be agreed in advance and not focused on the short term. An A/A test, splitting users into two identical groups, validates the system: if it shows differences more often than chance, the instrumentation is broken. Robots can skew results so badly that an A/A test shows far more than 5 percent false positives.

Their examples include a checkout redesign that cost a site about 90 percent of its revenue, and a shopping-cart recommendation prototype that a senior executive opposed and that won when tested; small changes can have large, surprising effects in either direction [@kohavi2009controlled]. They warn that underpowered tests are a common mistake, that "no significant difference" does not prove no difference, that adjusting for multiple comparisons lowers power, and that novelty and primacy effects mean some experiments must run for weeks, with analysis repeated on new users only. Run at least one or two weeks, then in whole weeks, to capture day-of-week effects; split 50/50 for power, since a 99/1 split takes about 25 times longer; ramp up risky treatments and abort automatically on harm. Speed matters too: they cite experiments in which added delay cost revenue or queries, so a losing variant may simply be slower.

### The arithmetic of sample size

Their rule of thumb for sample size gives 80 percent power with n = 16 sigma squared divided by delta squared per variant, where sigma is the standard deviation of the measure and delta the smallest difference to detect (21 in place of 16 for 90 percent power) [@kohavi2009controlled]. In their examples, detecting a 5 percent change in revenue needed over 409,000 users, and a conversion-rate example needed under 122,000. The formula is textbook statistics. The paper's limit is scale: it assumes traffic that a niche course will never have.

For a product like Learn to Fly the implication is plain. A test of a fine detail (a button label, a color, a heading size) aims at a small delta, and the required sample grows with the square of one over delta. Such tests cannot reach adequate power. A test of a large difference (a new lesson structure against the old one, a different challenge brief) might. Where the number is out of reach, the decision has to come from principles, qualitative sessions and accessibility, not from an underpowered test whose result will be noise presented as evidence.

::: {.rule #EVD-041 grade="C"}
**Before running a comparative test, compute the sample needed to detect the smallest worthwhile difference; if it is out of reach, do not run the test, and decide from principles, qualitative sessions and accessibility instead.** Required sample grows with the square of the inverse of the difference, and underpowered tests are a common mistake [@kohavi2009controlled]. The arithmetic is standard, hence C.

*In LTF:* do not A/B test the label on the "Start lesson 0.1" button or the shade of `accent`; if a whole new `LessonPage` structure is proposed, compute whether the beta audience could detect the expected change in completion within a few weeks.
:::

::: {.rule #EVD-042 grade="C"}
**When a comparative test is feasible, agree one overall success measure in advance, validate randomization and logging with an A/A run, run in whole weeks, and repeat the analysis on new users to check for novelty.** These are the practices that make online experiments trustworthy [@kohavi2009controlled].

*In LTF:* a test of two challenge brief layouts names its measure (for example, the share of learners who start the Fly tab after reading the brief), checks that the split itself shows no difference, and runs at least two full weeks.
:::

::: {.rule #EVD-043 grade="C"}
**Measure load time and interaction delay for every variant, and check that a losing variant is not merely slower.** Added delay has been linked to lost revenue and queries in reported experiments [@kohavi2009controlled].

*In LTF:* a heavier widget chunk or a new font file on `LessonPage` is tested with its loading cost visible; Part XXII, Motion and Perceived Performance, covers the thresholds.
:::

### Choosing a method that fits the question

Lazar, Feng and Hochheiser's textbook organizes HCI research around a premise: the method must follow the research question [@lazar2017research]. Its chapters, as listed in catalog records, cover experimental research and design, statistical analysis, surveys, diaries, case studies, interviews and focus groups, ethnography, usability testing, qualitative analysis, automated data collection, physiological measures, online research, and working with human subjects, including participants with disabilities. The book is secondary evidence and its statistics chapter predates some of the reforms described in this Part, so it should be read with them. Its value here is as a menu.

| Question | Method | Main risk |
|---|---|---|
| Which of two designs teaches better? | Controlled comparison | Underpowered, confounded |
| How do beginners practice at home? | Observation, interviews, diaries | Small, context-bound |
| What do many learners think? | Survey | Wording and self-selection |
| Can learners complete a flow? | Usability test | Evaluator effect |
| Where do sessions fail? | Logs and replays | Biased sample, no reasons |

::: {.rule #EVD-044 grade="C"}
**Choose the research method from the question being asked, and state the question before choosing.** Each method answers a different kind of question and carries its own risks [@lazar2017research; @greenberg2008usability].

*In LTF:* "why do learners stall in Module 1?" calls for observation and interviews; "does the new brief raise the share who start flying?" calls for a comparison; neither is answered by the other.
:::

### Contextual inquiry

Beyer and Holtzblatt's Contextual Design builds the front end of design on observing and interviewing people in their own context, so that customer data rather than designers' assumptions drives decisions [@beyer1998contextual]. Contextual inquiry follows a master-apprentice model: the interviewer watches people work and asks about what they are doing, rather than arriving with a fixed list of questions. The method's four principles are context, partnership, interpretation and focus. Findings are captured in work models (flow, sequence, artifact, cultural and physical), and interview notes are organized bottom-up into an affinity diagram; later stages consolidate across customers, redesign the work, and test mockups with customers. The authors date the method's invention to 1988 and revised it in 2013 for phones and always-on devices [@beyer1998contextual].

The book is craft authority. The method has been widely used in industry, but no experiment compares its outcomes with other methods; it is costly in time and skill, and its findings are bound to their contexts [@beyer1998contextual]. Its fit to Learn to Fly is unusually close, because the product's defining condition, use beside a running simulator, is a physical and attentional arrangement that designers cannot imagine accurately from a desk.

::: {.rule #EVD-045 grade="C"}
**Observe beginners at home with the simulator running before designing surfaces used beside it, noting where the screens, keyboard and controller are, what they glance at, and what interrupts them.** Contextual inquiry grounds design in observed work rather than assumption [@beyer1998contextual]. It is a practitioner method without comparative trials, hence C.

*In LTF:* the layout of `FlyModePage`, the size of `FlyPanel` text and the placement of the `Stopwatch` should be shaped by what is seen in a few such sessions, recorded as flow and physical models.
:::

### Grounded theory for open material

Glaser and Strauss proposed generating theory from systematically analyzed data rather than only testing theory derived in advance [@glaser1967discovery]. Their constant comparative method starts analysis with the first data and continues throughout: compare incident with incident within a code, then codes with codes, collapsing them into categories, and new data with old. Theoretical sampling follows leads from the analysis, seeking new participants or material to fill gaps and test interpretations, with the aim of developing categories rather than representing a population. Theoretical saturation is reached when new data no longer add to the categories. The method later split into Glaserian, Straussian and constructivist versions that differ in coding and in the use of prior literature, and "saturation" is now often misused as a sample-size justification rather than its original sense of stopping when categories stop developing [@glaser1967discovery]. The book itself was not read for this Part; these points come from an overview of the method.

::: {.rule #EVD-046 grade="C"}
**Analyze open-ended learner material (interviews, support questions, session notes) by constant comparison, sample further where a category is thin, and present the result as categories and hypotheses, not as counts of how many learners struggle.** Grounded theory yields concepts, not population estimates [@glaser1967discovery]; pair it with counts from logs or a survey.

*In LTF:* problem reports sent through the beta banner's "Report a problem" link can be coded into categories of beginner confusion; how common each category is must come from a separate count.
:::

### Preregistration at the size of a paragraph

Cockburn and colleagues recommend preregistration, open data and artifact repositories for HCI [@cockburn2020threats]. For a product team the useful form is a single paragraph written before a study starts: the question, the measure, the participants and how many, the stopping rule, the analysis, and what result would change the decision. It costs minutes and removes most of the flexibility that Simmons and colleagues showed can manufacture findings [@simmons2011false].

::: {.rule #EVD-047 grade="C"}
**Write a one-paragraph plan for every study with learners before it starts (question, measure, participants, stopping rule, analysis, and the result that would change the decision), record all measures collected, and keep anonymized raw data where the team can recheck the analysis.** Preregistration and open data are the field's main proposed defenses against flexible analysis [@cockburn2020threats; @simmons2011false].

*In LTF:* the plan lives in `docs/` beside the result; the results template from the chapter on reading numbers fills in against it.
:::

### Data the product already collects

Learn to Fly already records two kinds of data that could be mistaken for research evidence. Signed-in learners' progress and challenge attempts are stored, and, under D-30 in `v1.md`, Sentry Session Replay records 10 percent of production sessions and every session that hits an error, with text and inputs masked. Both are biased samples in Campbell and Stanley's sense of selection [@campbell1966experimental]. Progress data describe learners who chose to sign up. Replays over-represent sessions with errors by design. Logs show what people did and never why. Used as research, they need the same caution as any convenience sample, and work with learners needs consent and careful data handling, which the textbook treats as its own topic [@lazar2017research].

::: {.rule #EVD-048 grade="C"}
**Treat stored progress data and session replays as convenience samples that show what happened and not why; never generalize from error-triggered replays to typical use, and handle any research use of them under the product's privacy terms.** Selection bias threatens any comparison drawn from self-selected or event-triggered data [@campbell1966experimental], and studies with people carry consent and data obligations [@lazar2017research].

*In LTF:* a replay showing a learner lost in the `ChallengesPage` filters is a candidate problem for a usability round, not evidence of how often learners get lost.
:::

### What this means for Learn to Fly

The product's scale decides its methods. With a small beta audience and no third-party analytics, most fine design questions cannot be settled by A/B test, and pretending otherwise produces noise with the authority of numbers (EVD-041). The strongest evidence available cheaply is observation: a few beginners at home with the sim running (EVD-045), small usability rounds (from the previous chapter), and constant-comparison analysis of the problems learners report (EVD-046). Reserve comparative tests for large differences, and run them properly when they happen (EVD-042, EVD-043).

Keep the privacy posture: masked replays, no tracking cookies, no third-party analytics. Change how the team talks about the data it has: completion and attempt data describe signed-in learners, replays over-sample errors (EVD-048). Build two templates in `docs/`: the one-paragraph study plan (EVD-047) and a contextual-inquiry note with flow and physical sketches of the learner's setup.

## Weighing craft authority against experiment

Much of what this book recommends comes from practitioners rather than laboratories: typographers on measure and leading, cartographers on generalization, architects and industrial designers on function and ornament. These sources earn C, and for many questions they are the best evidence that exists. The question this chapter answers is how to weigh them: when a craft rule should stand without an experiment, when an experiment should overrule it, and how to tell a reliable judge of design from a confident one.

### Why craft knowledge deserves weight

Schön's account of professional practice explains why experienced designers know things that experiments have not measured [@schon1983reflective]. Competent practitioners, in a line secondary accounts quote, "usually know more than they can say". Their skill is knowing-in-action, a tacit competence built by practice; when surprised, they reflect-in-action, thinking about what they are doing while they do it. Design is his central case: the designer holds a "reflective conversation with the situation", makes a move such as a sketch, sees what it implies, including what was not intended, and reframes the problem. In an interview he called a designer's internal sense of quality a "gyroscope" that develops over years. His evidence is detailed qualitative case analysis, and critics find the constructs unclear, the two kinds of reflection hard to separate, and context and power ignored; even so, the vocabulary of framing, moves and backtalk has lasted in design research and teaching [@schon1983reflective].

Greenberg and Buxton make the same point from inside HCI: they cite the tacit understanding that experienced designers use when assessing designs and argue that subjective expert critique can be as legitimate as measurement [@greenberg2008usability]. Pye, a woodworker and professor of furniture design, offers a distinction that locates where such judgment is needed. In the workmanship of certainty, the result is predetermined before making starts; in the workmanship of risk, "the quality of the result is not pre-determined, but depends on the judgment, dexterity and care the maker exercises" [@pye1978nature]. Pye's book was read for this Part only through a detailed review. The distinction is an analogy when carried from physical craft to software, but it is an apt one.

Craft knowledge has a second strength: resolution. Experiments vary a few factors at coarse levels. Craft rules often concern fine detail (the spacing of a label against a rule, the weight of a numeral beside a word) that no study has varied and none is likely to. On such questions the craft record is not weaker evidence than experiment; it is the only evidence.

### Why craft knowledge needs checking

Craft authorities make three kinds of claim, and they deserve different treatment. Some are statements of value (good design is honest; ornament should not deceive). Some are empirical claims about effects (this arrangement reads faster; this face is more legible). Some are mechanism stories, explanations of why an effect occurs (readers see word shapes). Values cannot be refuted by experiment, only argued. Empirical claims can be tested, and when tested they sometimes fail. Mechanism stories are the most often wrong, because they are invented to explain practice after the fact; the word-shape account of reading is the standard example [@larson2005science].

The historical record of rule-writing shows the pattern. Owen Jones prefaced his plates of world ornament with thirty-seven propositions on form and color [@jones1856grammar]. Some are structural and still useful: proposition 7 asks for general forms first, then subdivision by general lines, then ornament that "may again be subdivided and enriched for closer inspection". His own proposition 36 states the right relation to exemplars: "The principles discoverable in the works of the past belong to us; not so the results. It is taking the end for the means." But his color propositions rest on the color theory of his day, including fixed balancing proportions, and cannot be quoted as rules without checking them against modern color science, which Part VI, Color: Science, Meaning and Access, does [@jones1856grammar]. A single source can hold durable principles and dated empirical claims side by side.

Alexander's career shows a craft authority correcting himself. His first book proposed a formal mathematical procedure for decomposing a design problem; in his 1971 preface he wrote that he had found it "quite unnecessary to use such a complicated and formal way", and of the design-methods field the book helped start he was quoted saying "forget the whole thing" [@alexander1964notes]. An attempted replication of the book's computed decomposition in 2023 also failed, citing clerical errors in the appendix data [@alexander1964notes]. The idea of designing from misfits survived; the formal method did not.

::: {.rule #EVD-049 grade="C"}
**Separate every craft source's statements of value, its empirical claims and its mechanism stories, and weigh each differently: argue with values, test empirical claims, and distrust mechanism stories until checked.** Craft sources mix durable principles with dated or untested empirical claims [@jones1856grammar; @alexander1964notes], and their mechanism stories have failed when tested [@larson2005science].

*In LTF:* "teal should be the single accent" is a value to argue; "readers find teal links easier to spot" is an empirical claim to check; "the eye is drawn to cool colors" is a mechanism story to distrust until evidence is shown.
:::

### The procedure for weighing

Combining the two kinds of evidence follows from what each can and cannot do. Where a relevant experiment, on a comparable task and population, contradicts a craft claim about an effect, the experiment wins on that effect. Where no experiment addresses the question, or the experiments that exist used tasks far from the product's, the craft consensus stands as a C. Where the question is one of value or fit to a particular context, experiment can inform but not settle it, and argument decides. Where craft authorities disagree among themselves, the rule is graded D, and the decision must be argued from the product's own situation.

::: {.rule #EVD-050 grade="C"}
**Accept a craft rule as the default where no relevant experiment exists, and overrule it on a specific effect only when an experiment on a comparable task and population contradicts it; where craft authorities disagree, grade the rule D and argue from the product's context.** Craft knowledge holds tacit, fine-grained judgment that experiments rarely reach [@schon1983reflective; @greenberg2008usability], while its empirical claims can fail when tested [@larson2005science; @roberts2017preference].

*In LTF:* on the measure of lesson text, craft consensus and legibility experiments are both available (Part II, Classical Typography, and Part III, Legibility and the Science of Reading), and the lesson article's current width, roughly 90 to 100 characters, has to answer to both.
:::

### Whose judgment counts

The practical question behind craft authority is who to listen to. Hume's essay on taste is still the best account [@hume1757standard]. He grants that "beauty is no quality in things themselves: It exists merely in the mind which contemplates them", yet denies that all judgments are equal, because "the general principles of taste are uniform in human nature", and where judgments differ some "defect or perversion in the faculties" can usually be found, "from prejudice, from want of practice, or want of delicacy". His true judge has five marks: "Strong sense, united to delicate sentiment, improved by practice, perfected by comparison, and cleared of all prejudice", and "the joint verdict of such" is the standard of taste [@hume1757standard].

Hume illustrates delicacy with a story from Don Quixote. Sancho's two kinsmen were asked to judge a hogshead of wine; one tasted leather, the other iron, and both were mocked until the cask was emptied and an old key on a leather thong was found at the bottom [@hume1757standard]. Their judgment was vindicated by a fact. Hume asks the obvious question himself ("where are such critics to be found? By what marks are they to be known?") and answers that these are "questions of fact, not of sentiment". Critics have charged the account with circularity, since the best art is what true judges approve and true judges are those who approve the best art; the standard interpretation still holds that Hume is not a relativist [@hume1757standard].

He also leaves room for preferences that cannot be ranked. Where people differ because of blameless variations of temperament, or the manners of an age and country, no standard decides between them [@hume1757standard].

::: {.rule #EVD-051 grade="C"}
**Give design review weight to reviewers who show Hume's five marks for this product: they know the domain, have watched beginners use it, have compared it with alternatives, are not defending their own work, and notice small defects.** Judgments differ in quality, and the joint verdict of qualified judges is the best standard available [@hume1757standard]; tacit judgment develops with practice [@schon1983reflective].

*In LTF:* a review panel for a lesson template includes someone who has watched beginners in the sim and someone who has looked closely at other flight courses; the author of the template is not the deciding reviewer.
:::

::: {.rule #EVD-052 grade="C"}
**When a reviewer says something feels wrong, find the fact that makes it wrong (a contrast ratio, a misaligned baseline, a mislabeled axis, an inconsistent token, a target too small) before acting, and record it.** Fine perception is vindicated by facts, as the key in Sancho's cask vindicated the kinsmen [@hume1757standard].

*In LTF:* "the dashboard stats feel heavy" becomes "the stat values use `font-mono text-2xl font-bold` where the `readout` utilities define weight 500"; the fact makes the fix checkable.
:::

::: {.rule #EVD-053 grade="C"}
**Do not spend review time debating preferences that are blameless variations of taste within a legible, accessible, consistent system; decide once, record the decision, and move on.** Some differences of taste have no standard to decide them [@hume1757standard], and satisficing on non-critical choices is the rational course [@simon1996sciences].

*In LTF:* the exact corner radius of `Card` among values that all meet the system's rules is decided once in the tokens and not reopened in every pull request.
:::

### Certainty and risk in the pipeline

Pye's distinction maps onto how a team spends review effort [@pye1978nature]. Some qualities can be guaranteed mechanically: a value comes from the right token, a schema validates, a contrast ratio passes, a lint rule holds. That is the workmanship of certainty, and it should be automated so that no reviewer's attention is spent on it. Other qualities depend on judgment every time: whether a paragraph explains, whether a diagram reads at a glance, whether a page feels trustworthy to a nervous beginner. That is the workmanship of risk, and that is where human review belongs.

::: {.rule #EVD-054 grade="C"}
**Automate every check that can be made certain, and spend human review on the qualities that depend on judgment.** The workmanship of certainty can be guaranteed in advance; the workmanship of risk depends on the judgment and care exercised each time [@pye1978nature].

*In LTF:* schema and content rules are already checked by `content:validate` and the editing hooks, and contrast, token use and banned characters can be checked the same way; reviewers spend their time on whether a lesson's prose, a widget's legibility at arm's length, and a page's hierarchy work for a beginner.
:::

### Copying exemplars

The last risk of craft authority is imitation. When a product admires another product, it is tempted to copy its surface. Jones's proposition 36 names the error: the principles of past work belong to us, its results do not, and copying results is "taking the end for the means" [@jones1856grammar]. Buchanan's argument that design has no subject matter of its own apart from what the designer makes of a particular situation points the same way: a design is a discovered particular, not a transfer of someone else's answer [@buchanan1992wicked].

::: {.rule #EVD-055 grade="C"}
**Borrow principles from admired products, not their surfaces; for every element taken from an exemplar, state the principle it serves in this product.** Copying results rather than principles takes the end for the means [@jones1856grammar], and design answers to its particular situation [@buchanan1992wicked].

*In LTF:* the ink-filled primary `Button`, the pill `ThemeToggle` and the tooltip inversion resemble a common developer-tool look, as the product context notes; each should be kept only where a principle specific to Learn to Fly justifies it.
:::

### What this means for Learn to Fly

The product's distinctive traits are craft decisions, and so are its generic ones. The instrument and chart tokens, the hand-built widgets, the `LessonPath` and the honesty copy came from someone's judgment, not from a test; so did the rounded bordered cards, the eyebrow over every heading, and the lucide icons everywhere. The procedure in this chapter is how to decide which to keep. Separate value, claim and mechanism in every design argument (EVD-049). Default to craft consensus where no experiment applies, and let a relevant experiment overrule it (EVD-050). Constitute review around qualified judges (EVD-051), make every "feels wrong" into a fact (EVD-052), and stop debating blameless choices (EVD-053).

Keep the automated checks the repository already runs (the hooks that lint, format, validate content and typecheck) and extend them to design facts that can be made certain, such as forbidding raw hex and raw Tailwind size classes where a type utility exists (EVD-054). Change the review of borrowed patterns: every pattern that resembles a common template must name the Learn to Fly principle it serves, or go (EVD-055).
