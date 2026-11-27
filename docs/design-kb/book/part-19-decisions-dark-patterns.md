# Decisions, Persuasion and Dark Patterns

Every screen asks the learner to decide something: where to start, whether to sign up, which answer to pick, how to rate their own landing, whether to keep going. This Part collects what judgment and decision research says about how those decisions are made, how interface choices shift them, and where shifting them becomes manipulation. It runs from Simon's bounded rationality and the heuristics-and-biases program, through framing, defaults and choice overload, to nudges, sludge, the dark patterns taxonomies, the one large experiment on their effects, the US regulator's reading of them, and the behavior design models that product teams use to persuade.

The evidence is uneven, and the Part says so rule by rule. Anchoring, framing and default effects have replicated, though at smaller sizes than first reported. Choice overload, the most quoted finding in this area, has a meta-analytic average near zero and an open dispute about when it appears. The average effect of nudges is contested after correction for publication bias. Dark patterns are documented by a qualitative taxonomy, a large crawl and randomized experiments, and are read against existing law by the Federal Trade Commission. Grade A and B rules here rest on that experimental and meta-analytic work; grade C rules rest on regulatory guidance, theory or the ethics of a free learning product; grade D marks claims to treat as contested. Use the Part in two ways: as a set of decisions for Learn to Fly's flows (sign-up, progress, debrief, account deletion, any future plan or reminder), and as a review checklist, in its last chapter, to run against a pull request.

## Bounded Rationality and the Beginner

### Simon's organism

Herbert Simon's 1955 paper replaced the "economic man" of classical theory, who knows his environment, holds a stable preference ordering and can compute the best available action, with a chooser whose rationality fits the information and computing capacity people actually have [@simon1955behavioral]. The paper is theory resting on what Simon called casual empiricism, not experiment. Its first empirical proposition is blunt: there is a complete lack of evidence that, in human choice situations of any complexity, the classical computations can be or are performed.

Simon's list of what any choice model needs is a useful frame for interface work. There is the set of alternatives, and inside it the subset the person actually considers or perceives, which can be much smaller than what is objectively available. There are outcomes, a pay-off function that values each outcome, and information linking alternatives to outcomes, possibly only as probabilities [@simon1955behavioral]. An interface changes several of these at once. It decides which alternatives are visible (the considered set), what the learner is told about outcomes, and often what counts as a good result.

A beginner on Learn to Fly is Simon's organism at its most limited. The considered set is small because the learner does not know what exists. The pay-off function is vague because they do not yet know what a good landing or a good lesson looks like. Information is costly because every fact must be read, understood and tried. Designing for this learner means designing for limited search, not for an optimizer who reads every option.

### Satisficing and the aspiration level

The core of Simon's paper is a set of simplifications. A "simple" pay-off function takes only two values, satisfactory or unsatisfactory, or three, such as win, draw and lose. His example is a person selling a house who regards $15,000 as acceptable: anything above is satisfactory, anything below is not, and the boundary sits at the aspiration level [@simon1955behavioral]. To the objection that a rational seller still prefers $25,000 to $16,000, Simon answers that offers arrive in sequence and must be taken or refused as they come, and a two-valued pay-off can approximate a smoother curve. The decision rule becomes a search: find outcomes that are satisfactory, then find an action whose possible outcomes all fall in that set. His chess illustration makes the point: the player looks for a good move, not the best one.

A later reprint introduction notes that Simon does not use the phrase "bounded rationality" in this paper (it appears in 1957), but he does define the aspiration level as the line between satisfactory and unsatisfactory [@simon1955behavioral]. For design, the aspiration level is the important idea. A learner who does not know where "good enough" lies cannot stop searching. They either give up or keep polishing past the point of value.

The paper's final section replaces a single pay-off with a vector of values that have no common denominator: salary, climate, pleasantness of work, prestige [@simon1955behavioral]. Options described by such vectors may not be fully ordered. This has a direct consequence for any screen that ranks or scores things: collapsing incommensurable qualities into one number creates an order the person did not hold.

::: {.rule #DEC-001 grade="C"}
**Give every lesson and challenge a visible standard for "good enough" before the learner starts.** Simon's satisficing chooser searches until an outcome clears an aspiration level, and cannot stop sensibly without one [@simon1955behavioral]. Gigerenzer and Gaissmaier treat stopping rules as a core building block of effective simple strategies [@gigerenzer2011heuristic]. Neither source tests this rule in a learning product; it is a theoretical consequence, so it is graded C. The standard must be stated in the learner's terms (what they will see or do), not as a percentage alone.

*In LTF:* the landing line "Bronze means you did it safely" is already a stated aspiration level. Carry the same idea into `BriefTab`: the "How you'll be scored" table should be preceded by one plain sentence saying what a safe, acceptable attempt looks like, so the learner knows when to stop chasing Gold. On `LessonPage`, the objectives `Card` ("In this lesson you will") plays this role for lessons.
:::

### Ecological rationality and less-is-more

Gigerenzer and Gaissmaier's 2011 review defines a heuristic as a strategy that ignores part of the information in order to decide more quickly, frugally or accurately than more complex methods [@gigerenzer2011heuristic]. The classical view, which they attribute to the heuristics-and-biases program, held that saving effort costs accuracy. They argue that for many decisions the conditions of rational models are not met, so how well a heuristic works is an empirical question, and that formal models show simple rules can be more accurate than weighting and adding all the information.

The review borrows Savage's distinction between small worlds, in which all alternatives, consequences and probabilities are known, and large worlds, in which they are not [@gigerenzer2011heuristic]. It restates Simon's question as "how do human beings reason when the conditions for rationality are not met?" Its key concepts are three. Less-is-more effects describe an inverse-U relation between accuracy and the amount of information, computation or time: past a point, more hurts. Ecological rationality is the degree to which a heuristic is adapted to the structure of the environment. Simon's scissors is the image that rational behavior is cut by two blades, the structure of the task environment and the computational capabilities of the actor, so studying the mind alone cannot explain success or failure.

The review gives formal definitions. The recognition heuristic infers that a recognized alternative has the higher criterion value when the other is not recognized; it is ecologically rational when recognition correlates with the criterion. Take-the-best searches cues in order of validity, stops at the first cue that discriminates, and decides for the alternative that cue favors. Tallying counts equally weighted cues; the review cites a study of 20 environments in which tallying had on average higher predictive accuracy than multiple regression, with unit-weight models doing well when the ratio of alternatives to cues was 10 or smaller, linear predictability was low and cues were redundant [@gigerenzer2011heuristic]. The 1/N rule splits resources equally. Part of the explanation is the bias-variance dilemma: a simple model can win when samples are small and the world noisy, trading a little bias for much less variance.

The review is position-taking. Its claims are conditional on the environment, and the authors note that people do not automatically use the recognition heuristic when it applies [@gigerenzer2011heuristic]. It opposes the heuristics-and-biases reading of Tversky and Kahneman, and the two camps have not converged.

::: {.rule #DEC-002 grade="C"}
**Where the learner must decide what to do next, show one recommended action and a short list of alternatives, not the whole catalog.** A beginner's considered set is small and search is costly [@simon1955behavioral]; narrowing the set to a good default and a few alternatives matches how a satisficer searches. This is a theoretical rule (C). It does not apply to browsing screens, where the full list is the point (see DEC-027).

*In LTF:* keep the landing hero's single primary CTA ("Start lesson 0.1" or "Continue where you left off") and the `LessonPath` pattern, where exactly one stop is the current ink pin with an accent "Start" button. On `DashboardPage`, the Continue card should remain the single strongest action above "Next up".
:::

::: {.rule #DEC-003 grade="B"}
**Teach decisions as a few cues in order of importance with an explicit stopping point, not as a long list of factors to weigh.** Formal comparisons show that take-the-best and tallying can match or beat weighted models when information is partial, samples are small and cues are redundant [@gigerenzer2011heuristic]. The evidence is from prediction tasks, not from teaching, so the transfer to lesson design is indirect (B). Which cues to teach for any flight task, and in what order, must come from the aircraft sources, never from this rule.

*In LTF:* in lesson Markdown, present a decision as an ordered list ("check this first; if it settles the question, stop") rather than a paragraph of considerations. The `decision` `Callout` type is the natural container. Checklists rendered by the checklist block already work this way and should stay short.
:::

### Simple rules and the limits of simplicity

Simple rules are not universally good. Gigerenzer and Gaissmaier stress that a heuristic is ecologically rational only where it fits the environment, and the same rule can fail elsewhere [@gigerenzer2011heuristic]. Simon himself left the empirical work of finding which simplifications people use, and when, for later [@simon1955behavioral]. A design that simplifies must therefore say what it leaves out. A checklist is a legitimate bounded search, but a learner who treats a simplified widget model as the whole truth has been misled by the simplification.

The vector pay-off has a quieter design lesson. Dashboards and lists often merge qualities into a single score because a single number sorts easily. A learner choosing a challenge cares about time, difficulty and topic, which share no unit. A composite "recommended score" would create an order the learner does not hold and hide the dimension they care about.

::: {.rule #DEC-004 grade="C"}
**Do not merge qualities that share no unit (time, difficulty, topic, interest) into a single score; show each dimension.** Simon notes that options valued on several incommensurable dimensions may not be fully ordered [@simon1955behavioral]. A combined score imposes an order the learner did not hold. Graded C: a theoretical argument, not an experiment.

*In LTF:* the challenge card meta row on `ChallengesPage` already shows `DifficultyDots`, minutes, ICAO and badges separately. Keep it that way; do not add a single "match" or "priority score" to cards or filters.
:::

::: {.rule #DEC-005 grade="C"}
**Prefer plain counts to composite indices on progress screens.** The tallying results show that simple, equally weighted summaries can be more robust than fitted weights when data are few [@gigerenzer2011heuristic], and a count is also easier for a beginner to check against their memory. The evidence concerns prediction, not comprehension, so this is C.

*In LTF:* the `DashboardPage` "Stats" tiles (Attempts, Gold results, "Sim time (estimated)") and `ProgressBar`s showing lessons done of total are the right kind of measure. Do not introduce a "pilot score" that blends them.
:::

::: {.rule #DEC-006 grade="C"}
**State what a simplification leaves out wherever the product simplifies.** Heuristics are rational only relative to an environment, and a simple rule can fail outside it [@gigerenzer2011heuristic]. A learner who does not know the boundaries of a simplified model will apply it where it fails. Graded C.

*In LTF:* `WidgetFrame` already carries a "Simplified model" accent badge. Pair it with one sentence in the "Describe this diagram" `details`, or in the lesson text next to the widget, naming what the model ignores. The `sim` `Callout` ("Sim vs reality") does the same job for simulator behavior.
:::

### What this means for Learn to Fly

Keep the single-path structures: the landing CTA that goes straight to the first incomplete lesson, the `LessonPath` with one current pin, the `DashboardPage` Continue card. They narrow the considered set without removing anything. Keep the separated meta rows on challenge cards and the plain counts on the dashboard. Change the challenge brief so that a stated aspiration level ("a safe attempt looks like this") comes before the scoring table on `BriefTab`, and give every widget's "Simplified model" badge a sentence on what is left out. Build lessons that teach decisions as ordered cues with stopping points, using the `decision` `Callout`, with the cues themselves taken from the aircraft sources and the `{{vspeed.*}}` tokens, not invented in design.

## Heuristics, Biases and the First Number on the Screen

### Three heuristics

Tversky and Kahneman's 1974 paper in *Science* argued that people judge probabilities and predict values with a few heuristic principles that turn hard judgments into simpler ones [@tversky1974judgment]. The authors call these heuristics "quite useful" but say they sometimes lead to severe and systematic errors, and that the errors are predictable enough to reveal which shortcut produced them. The paper named three: representativeness, availability, and adjustment from an anchor. It launched the heuristics-and-biases research program.

Representativeness is judging whether something belongs to a class by how much it resembles the class stereotype. This ignores factors that should matter. In the engineer and lawyer experiment, subjects read short personality descriptions said to be drawn from a group of 100 professionals, described in one condition as 70 engineers and 30 lawyers and in another as 30 engineers and 70 lawyers. Bayes' rule says the odds should differ by a factor of 5.44, yet probability judgments were essentially the same in both conditions [@tversky1974judgment]. The base rate was ignored. Sample size is neglected too: asked whether a hospital with about 45 births a day or one with about 15 records more days on which over 60 percent of babies are boys, most subjects said the two were about equally likely, although the smaller hospital is more likely to.

Availability is judging frequency or probability by the ease with which instances come to mind. In the paper's word example, people judge words that begin with a given letter to be more common than words with that letter in third position, because memory is searched by first letter [@tversky1974judgment]. What is vivid or easy to recall feels common.

### Anchoring

Adjustment and anchoring is the heuristic with the most direct design consequences. Estimates start from an initial value and are adjusted, and the adjustment is typically too small, so different starting points yield different estimates biased toward the start [@tversky1974judgment]. In the wheel of fortune demonstration, a number from 0 to 100 was set by spinning a wheel in front of the subjects, who then said whether the percentage of African countries in the United Nations was higher or lower than that number and gave an estimate. Groups that received 10 and 65 as starting points gave median estimates of 25 and 45. The anchor was visibly random, and it still moved the answers. The paper reports that payoffs for accuracy did not reduce the effect. In a second demonstration, high school students had 5 seconds to estimate a product: the median estimate for 1×2×3×4×5×6×7×8 was 512, for the descending sequence 2,250, while the correct answer is 40,320. The first few numbers anchored the estimate.

The evidence is a set of small questionnaire experiments, tersely reported. Anchoring has since become among the best-supported effects in the program: the Many Labs 2 multi-site project is reported to have reproduced anchoring and framing findings, though the anchoring table itself was not read for this Part [@tversky1974judgment; @openscience2015estimating]. The broader claim that people are generally irrational is a different matter, and it is contested (see the review in Bounded Rationality and the Beginner).

::: {.rule #DEC-007 grade="B"}
**Show only numbers that bear on the decision at hand, and put the decision-relevant number first.** Any number shown before an estimate pulls the estimate toward it, even when it is visibly arbitrary and even when accuracy is rewarded [@tversky1974judgment]. The effect replicates, but its size in an interface is not measured, so this is B.

*In LTF:* decorative numerals are a risk wherever a learner later estimates or judges. On `FlyModePage`, the only numbers should be the ones the learner uses (the stopwatch, step content). On `BriefTab`, the order of "Sim setup" rows should follow the order the learner will use them, so the first number seen is the first one needed.
:::

::: {.rule #DEC-008 grade="B"}
**In quizzes, never place an unrelated or misleading number in the question stem, and order numeric answer options ascending.** Anchors in the stem bias estimates toward them [@tversky1974judgment], so a stem that mentions one value and asks for another tests resistance to anchoring, not knowledge. A fixed ascending order removes the option order as a hidden cue. Graded B for the anchoring mechanism; the ordering convention itself is untested.

*In LTF:* this is a content rule for `QuizBlock` items in `content/`. It belongs in the content checklist for `/review-lesson`. Any number in a stem that refers to the aircraft must be a `{{vspeed.*}}` or `{{aircraft.*}}` token, never a literal.
:::

::: {.rule #DEC-009 grade="C"}
**Show benchmarks and typical results as ranges, not single points.** A single displayed benchmark becomes the anchor for a learner's judgment of their own performance [@tversky1974judgment]. A range conveys the spread and weakens the pull of one number. The application is reasoned from the anchoring finding, not tested (C).

*In LTF:* if `DashboardPage` or the challenge `HistoryTab` ever shows "typical" scores or times, show them as a band. The existing "Est. 20 min" and "About n minutes" estimates on cards and lessons are anchors for pacing; keep them honest and consider "15–25 min" style ranges where the spread is real.
:::

### Availability and base rates in teaching

Availability and base-rate neglect matter wherever a lesson talks about risk. A vivid incident story is easy to recall, so it inflates perceived frequency [@tversky1974judgment]. A description that fits a stereotype pulls the judgment toward that stereotype, regardless of how common the case is. A lesson that tells one memorable story about a rare failure and none about common ones teaches a distorted sense of what usually goes wrong.

The remedy is to pair "what happens" with "how often" and with the base the frequency is drawn from. Where the frequency is not known from a source, the honest statement is that it is not known.

::: {.rule #DEC-010 grade="B"}
**Pair every vivid incident example in a lesson with context on how often it happens, from a source, or a plain statement that the frequency is not known.** Ease of recall inflates judged frequency, and base rates are neglected when a description is representative [@tversky1974judgment]. The demonstrations are robust in questionnaires; their effect on learners reading a lesson is inferred, hence B.

*In LTF:* a `safety` `Callout` that tells a story should carry the frequency or the "not known" line. Any figure used must come from a source listed in v1.md Section 54.1, and an unconfirmed one must be marked with a `verify` callout, which blocks publication.
:::

### Two systems as a metaphor

Kahneman's *Thinking, Fast and Slow* organizes the program's findings around two modes of thought: System 1, fast, intuitive and emotional, and System 2, slower, more deliberative and more logical [@kahneman2011thinking]. It argues that knowing how the two interact explains many errors and helps people learn where their intuitions can be trusted. The book is a synthesis for general readers, not a primary study, and its two systems are explicitly a metaphor in the author's telling. Gigerenzer and Gaissmaier note that the opposition between rational logic and error-prone intuition was entrenched in psychology from the heuristics-and-biases program through various two-system theories, and they reject it [@gigerenzer2011heuristic].

The book is also the best-known casualty of the replication crisis in this field. Its chapter on priming relied on social priming studies. In 2012 Kahneman wrote an open letter to priming researchers saying he saw a "train-wreck looming" after an independent lab failed to replicate a well-known priming study, and he later acknowledged that behavioral priming effects cannot be as large and robust as the chapter suggested, according to press accounts of the letter [@kahneman2011thinking]. A blog analysis by Schimmack, Heene and Kesavan, not peer-reviewed, reported that 11 of the 12 priming articles cited in the chapter have a replicability index below 50. A defense by Sherman and Rivers argues the critique is misdirected. Other findings the book discusses, such as framing, have held up better, at reduced size.

::: myth
**"System 1 and System 2 are two parts of the brain."** The two systems are a metaphor that Kahneman uses to organize findings about fast and slow judgment, not anatomical structures [@kahneman2011thinking]. The framework itself is contested: Gigerenzer and Gaissmaier argue heuristics are tools to be judged by their fit to the environment, not the output of an error-prone fast system [@gigerenzer2011heuristic]. Use the vocabulary to talk about workload, not as a model of the learner's mind.
:::

::: myth
**"Subtle cues in the background (a word, an image, a color) quietly change what users do."** This is social or behavioral priming. The chapter of *Thinking, Fast and Slow* that popularized it leaned on studies that later failed to replicate, its author warned of a "train-wreck looming", and he acknowledged the effects cannot be as large and robust as described [@kahneman2011thinking]. The Open Science Collaboration's broader replication effort found that surprising, small-sample results replicate least well [@openscience2015estimating].
:::

::: {.rule #DEC-011 grade="D"}
**Do not build any feature whose value depends on behavioral priming.** The priming evidence is contested and largely failed to replicate [@kahneman2011thinking; @openscience2015estimating]. The grade marks the evidence as contested: there is no reliable effect to design for, so the rule is to not rely on one.

*In LTF:* do not add "motivational" background imagery, word choices or colors to `LessonPage` or `FlyModePage` on the theory that they raise persistence or care. Visual choices are made for legibility and identity, under the rules in the Parts on color and on aesthetics.
:::

### Intuitive errors as teaching material

The usable part of the two-systems vocabulary is about load. A beginner doing an unfamiliar task is slow and effortful; an experienced person recognizes the pattern quickly. A second-screen companion used while the learner is flying the sim should not demand slow reasoning from someone already loaded. And the attraction of an intuitive wrong answer is itself the instructional opportunity: a quiz explanation that says why the wrong answer feels right teaches more than one that only states the right answer.

::: {.rule #DEC-012 grade="C"}
**When a quiz distractor is a common intuitive error, the feedback must say why it is attractive and what the intuition misses.** The heuristics literature shows that errors are systematic and reveal the shortcut that produced them [@tversky1974judgment], which makes the shortcut teachable. This is an instructional inference, graded C.

*In LTF:* `QuizBlock` shows "Not quite." plus an explanation. Content authors should write explanations that name the tempting reasoning, not only the correct fact. The `memory` and `real-world` callouts are not the place for this; the explanation is.
:::

### The self-scored debrief

One LTF screen deserves specific attention. On the challenge Debrief tab the learner rates their own attempt against a rubric with `RadioGroup` radio cards, and a live score preview beside the form shows a `TierBadge`, a `font-mono text-2xl font-bold` percentage and "n of n points" as they rate. The server recomputes the tier. The radio cards start with no option selected, which is correct. The live preview, however, makes the tier boundary visible while the learner is still judging, and a visible target can pull uncertain ratings toward it. This is an inference from the anchoring findings and from the general point that a displayed number becomes a reference [@tversky1974judgment], not a tested effect in self-assessment.

::: {.rule #DEC-013 grade="C"}
**Test whether showing the score preview only after every required criterion is rated changes self-ratings, and keep the preview hidden during rating if it does.** A number displayed during a judgment acts as a reference point for it [@tversky1974judgment]. Whether a live tier preview biases self-scoring is untested, so the rule is to test it rather than assume (C).

*In LTF:* `DebriefForm` currently updates "Score preview" live. A low-cost variant reveals it once the "Answer the required criteria to submit" message clears. Compare the share of borderline ratings in each version on the History data before choosing.
:::

### What this means for Learn to Fly

Keep the debrief's unselected radio cards and the server-side tier computation. Change content habits: quiz stems free of stray numbers and numeric options in ascending order (a `/review-lesson` check), explanations that name the tempting error, incident stories paired with sourced frequency or a `verify` callout. Keep `FlyModePage` free of numbers the learner does not use. Consider ranges for time estimates on cards. Build a small test of the `DebriefForm` live preview before changing it. Do not build anything on priming.

## Framing and Mental Accounts

### The same outcome, described two ways

Tversky and Kahneman's 1981 paper showed that preferences between options can reverse when the same options are described differently [@tversky1981framing]. They define a decision frame as the decision maker's conception of the acts, outcomes and contingencies of a choice, controlled partly by how the problem is formulated and partly by the person's norms, habits and characteristics. Their central claim is that choices involving gains tend to be risk averse and choices involving losses tend to be risk taking. The respondents were students at Stanford University and the University of British Columbia answering short questionnaires in class.

The best-known demonstration is the Asian disease problem. A disease is expected to kill 600 people. In Problem 1 (N = 152), Program A saves 200 people for sure; Program B has a one-third probability that 600 are saved and a two-thirds probability that none are. 72 percent chose A. In Problem 2 (N = 155), a different group saw the same consequences stated as deaths: under Program C 400 people will die; under Program D there is a one-third probability that nobody will die and a two-thirds probability that 600 will die. Only 22 percent chose C, and 78 percent chose D [@tversky1981framing]. Nothing changed except "saved" and "die".

Problem 3 (N = 150) shows the same asymmetry with money. Offered a sure gain of $240 or a 25 percent chance of $1,000, 84 percent took the sure gain. Offered a sure loss of $750 or a 75 percent chance of losing $1,000, 87 percent took the gamble [@tversky1981framing]. People avoid risk to protect a gain and accept risk to avoid a sure loss.

### How much to trust it

The Asian disease result is one of the most cited demonstrations in decision research and the source of the term "framing effect" as the field uses it. It is also sensitive to details. A summary of the Many Labs 2 project reports that the framing effect was reproduced at about half its original strength [@tversky1981framing; @openscience2015estimating]. A standing objection is that "200 will be saved" can be heard as "at least 200", so the two versions may not be equivalent in everyday language. The safe reading is that wording changes choices reliably, and that the original size is an overestimate.

::: {.rule #DEC-014 grade="B"}
**Choose the frame that matches the true message, and keep it consistent across a lesson or flow; never pick a frame because it moves a metric.** The same facts described as gains or losses shift choices, an effect that replicates at roughly half its original size [@tversky1981framing; @openscience2015estimating]. Because the frame alone moves behavior, choosing it to move behavior is manipulation, not description. Graded B: the effect is replicated, its size in interface copy is not measured.

*In LTF:* the landing copy "Bronze means you did it safely. Gold is checkride-ready." is a gain frame for every tier. Hold that frame on `ChallengePage`, the Debrief result card and `HistoryTab`: a Bronze result is "safe", never "only Bronze" or "missed Silver".
:::

::: {.rule #DEC-015 grade="C"}
**Do not use loss frames ("you'll lose your progress", "don't break your streak") to drive return visits or sign-ups.** Losses invite risk taking and pressure that gains do not [@tversky1981framing]; Ryan and Deci list threats, deadlines and pressured evaluation among the conditions that undermine intrinsic motivation [@ryan2000selfdetermination]. A true, specific statement of what will happen is allowed. Graded C: the copy application is reasoned, not tested.

*In LTF:* the `SignupBanner` line "Sign up (free) to save your progress and challenge scores." is a gain frame and a true description. Keep it that way; do not rewrite it as "Your progress will be lost". The Debrief "Not saved" status is factual and allowed; if it is ever expanded, state what is kept ("Your answers are kept on this device") before what is not.
:::

### Framing in quizzes and risk statements

Framing has two consequences for teaching content. First, a set of quiz items that switches between asking which statement is correct and which is incorrect, about the same fact, changes answers through the switch alone. Second, any statement about risk carries a frame. "Most learners who briefed first hit the target" and "many learners who skipped the brief missed it" can describe the same data and will be received differently [@tversky1981framing]. The honest course is to state the counts and the base, so the learner sees both sides of the same number.

::: {.rule #DEC-016 grade="C"}
**Keep quiz polarity constant within a set: do not mix "which is correct" and "which is NOT correct" items about the same fact.** A change of frame alone changes choices [@tversky1981framing], so a polarity switch tests reading attention rather than knowledge. Graded C, an inference for assessment design.

*In LTF:* a `/review-lesson` check on `QuizBlock` items. If a negative item is needed, the word "not" goes in bold in the stem, and the item is not paired with its positive twin in the same lesson.
:::

::: {.rule #DEC-017 grade="B"}
**When a lesson describes a risk or an outcome rate, state it as a count with its base ("n of N"), not only as a saved or lost share.** Gain and loss wording of identical outcomes reverses preferences [@tversky1981framing], and base rates are neglected when they are not shown [@tversky1974judgment]. Stating the count and the base exposes both frames at once. Graded B for the mechanism; the remedy itself is not separately tested.

*In LTF:* applies to lesson Markdown and `safety` `Callout` text. It also applies to LTF's own claims about learners (see Holding Behavioral Claims to Evidence): "most learners" needs a count, or should not be said.
:::

### Mental accounts

The same paper introduced mental accounting [@tversky1981framing]. In Problem 8 (N = 183), 88 percent said they would still pay $10 for a play ticket after losing a $10 bill. In Problem 9 (N = 200), the ticket itself was lost, and only 46 percent said they would buy another. The authors propose that the second purchase is charged to the account the first one opened, so the show seems to cost $20. In Problem 10, 68 percent would drive 20 minutes to save $5 on a $15 calculator, but only 29 percent would do so on a $125 calculator (groups of 93 and 88), although the saving is the same. The authors distinguish the minimal account (the $5 and the inconvenience) from the more inclusive account (the saving against the price). These are hypothetical survey answers, not tests with real money.

For a free product the currency that matters is time. A learner keeps an account of how long things take. "Lesson 0.1 takes five minutes" opens an account with five minutes in it; if the lesson also asks for sim setup that is not counted, the learner experiences an overrun, and the next estimate is trusted less. The inclusive account (reading plus sim time) is the honest one.

::: {.rule #DEC-018 grade="C"}
**Present the whole cost of a task in one account: time estimates include the sim time and setup the task requires, and any future price includes every mandatory fee.** People evaluate costs inside mental accounts, so the same amount weighs differently depending on what it is compared with [@tversky1981framing]. The FTC treats late-appearing mandatory fees (drip pricing) as a dark pattern [@ftc2022bringing]. Graded C: mental accounting evidence is hypothetical, the fee rule is regulatory guidance.

*In LTF:* `ModulePage` already says "About {h} hours of lessons and sim time", the inclusive account. Check that lesson "About n minutes" and challenge "Est. 20 min" figures are computed the same way, and say so in the content README so authors keep them consistent.
:::

### Frames LTF already uses

LTF's copy is framed throughout, and mostly well. The landing headline "Yes, you can fly a plane." is a competence frame aimed at a beginner who has never flown. The tier copy frames Bronze as safe. The 404 line "You've wandered off the taxiway" frames an error as a small, recoverable detour. The account deletion text, "Permanently deletes your account, progress, challenge attempts and notes, and signs you out everywhere. This cannot be undone.", is factual with no emotional loss frame, which is what a destructive action needs. The course badge carries the frame-correcting sentence "It is not a pilot certificate and has no value for real-world flying."

One frame deserves review. "Gold is checkride-ready" borrows the language of a real examination. In a product whose disclaimer says it "must not be used for real-world flight training", the phrase frames a simulator score as readiness for a real test. Whether that creates a false belief is a question about the net impression of the whole design, which the FTC treats as the standard for deception [@ftc2022bringing]. The fix is small: keep the aviation flavor and anchor it to the sim ("checkride standard, in the sim").

::: {.rule #DEC-019 grade="C"}
**Review any copy that borrows real-world credentials or examinations so that its net impression stays inside the simulator.** The FTC holds firms responsible for the net impression of a design, not only its individual words [@ftc2022bringing], and a frame shapes what the reader takes away [@tversky1981framing]. Graded C.

*In LTF:* revise "Gold is checkride-ready" on the landing page and anywhere `TierBadge` copy repeats it, and keep the "not a pilot certificate" sentence next to `CourseBadge` on `DashboardPage`.
:::

### What this means for Learn to Fly

Keep the gain frames: the tier copy, the `SignupBanner` wording, the competence headline, the neutral deletion text and the certificate disclaimer. Change "checkride-ready" so its net impression stays in the sim. Add three content checks to `/review-lesson`: constant quiz polarity, counts with bases for any risk statement, and time estimates that include sim time. Never introduce loss-framed engagement copy; if a streak or reminder feature is ever proposed, its copy is reviewed against DEC-015 before design starts.

## Defaults

### What a default does

A default is what happens if the person does nothing. Johnson and Goldstein's short 2003 report in *Science* argued that defaults have very large effects on high-stakes decisions, using organ donation as the test [@johnson2003defaults]. Countries that ask citizens to opt in to donation show much lower agreement than countries where consent is presumed and citizens must opt out. The authors read this as evidence that preferences about donation are often constructed at the moment of the question, and are therefore shaped by its form.

The longer companion article by the same authors, in *Transplantation* in 2004, reports the program in more detail [@johnson2003defaults]. Its online experiment asked 161 respondents whether they would be donors under one of three questions. In the opt-in condition they were told to assume they had moved to a state whose default was not to be a donor, and could confirm or change it; the opt-out condition was identical except that the default was to be a donor; a neutral condition required a choice with no default. Changing the answer took one mouse click, which makes effort a weak explanation. Stated donation was about twice as high under opt-out as under opt-in. The opt-out condition did not differ significantly from the neutral one, which reached 79 percent, so the opt-in default was the outlier that suppressed agreement.

Across European countries, effective consent rates separated opt-in and opt-out countries by nearly 60 percentage points, with no overlap between the two distributions. The Netherlands mailed more than 12 million letters in a country of 15.8 million, and its effective consent rate did not change [@johnson2003defaults]. On actual donations, which is what matters, a regression controlling for infrastructure, education and religion found a significant default effect, 14.1 rising to 16.4 donors per million (16.3 percent), and a separate study cited there found 10.8 rising to 16.9 (56.5 percent). The real effect on outcomes is much smaller than the consent gap.

### Why defaults work

The companion article names three routes [@johnson2003defaults]. The default acts as an implied recommendation: people infer that whoever set it thought it best. Changing it takes effort, however small. And the default is the status quo, so moving away from it is felt as a loss. The article also gives natural experiments outside medicine. In car insurance, 79 percent of New Jersey drivers kept the limited right to sue, their state's default, while 70 percent of Pennsylvania drivers kept the full right, theirs. In a retirement plan, raising the default contribution from 0 to 3 percent lifted the share of new employees saving anything from 31 to 86 percent, though it reduced the number choosing more than 3 percent. A default pulls people toward it from both sides.

### How large and how general

The consent comparison measures agreement, not donations, and the headline gaps overstate what a design change alone would do. A review by Steffel, Williams and Tannenbaum found higher consent, donation and transplantation rates under presumed consent but cautioned that it is one factor among many (read here only in a secondary account). On breadth, Jachimowicz and colleagues' meta-analysis of default effects, read only in summary for this Part, covers 58 studies with a pooled sample of 73,675 and reports d = 0.68 (95 percent CI 0.53 to 0.83), with wide heterogeneity. Defaults worked better when they signaled endorsement or reflected the status quo, and less well in environmental domains. In the Maier re-analysis of nudging, the "structure" category that contains defaults was the one category left undecided rather than showing evidence against an effect after correction for publication bias [@maier2022no]. Defaults are the strongest tool in this Part, large on average and not constant.

::: {.rule #DEC-020 grade="A"}
**Set every default to the option a well-informed learner would choose for themselves, and set privacy, sharing and contact defaults to the more private option.** Defaults shift choices strongly and reliably, through implied recommendation, effort and the status quo [@johnson2003defaults], and they are the one class of nudge whose effect survives correction for publication bias as undecided rather than absent [@maier2022no]. A default that benefits LTF at the learner's expense is the preselection dark pattern [@gray2018dark], and the FTC lists defaults that maximize data collection among privacy dark patterns [@ftc2022bringing]. Graded A for the size and replication of the default effect.

*In LTF:* the current defaults pass. "Remember me for 30 days" on `LoginForm` is unticked and carries the hint "Don't tick this on a shared computer." `ThemeToggle` defaults to "System". If public profiles, leaderboards, analytics sharing or email of any kind are ever added, each defaults to off.
:::

::: {.rule #DEC-021 grade="B"}
**Never preselect an answer in a quiz or a rating in a self-assessment.** A preselected option is read as a recommendation and is kept for lack of effort to change it [@johnson2003defaults]; in an assessment that converts the default into the answer. Graded B: the mechanism is well supported, its size in quizzes is not measured.

*In LTF:* `QuizBlock` and the `DebriefForm` `RadioGroup` (whose value starts as an empty string) already comply. Keep a unit test that asserts no option is checked on first render, so a refactor cannot introduce one.
:::

::: {.rule #DEC-022 grade="B"}
**When a default is a recommendation, say so in the interface and say why.** The endorsement route means a hidden default is taken as advice [@johnson2003defaults], and defaults that signal endorsement have larger effects in the meta-analytic summary. Saying so turns an unseen push into visible advice the learner can weigh. Graded B.

*In LTF:* the landing CTA that targets the first incomplete Module 0 lesson is a default route. The `LessonPath` "Start" pin and the `DashboardPage` Continue card should carry a short reason where it helps ("Recommended: lessons build on each other"), as `CurriculumMap` already signals with "Up next".
:::

::: {.rule #DEC-023 grade="C"}
**Make every default changeable with one action at the place where the default applies.** The effort of changing a default is one of the routes by which it acts [@johnson2003defaults]; a default the learner can change in place keeps the influence to the recommendation alone. The FTC lists buried choices among privacy dark patterns [@ftc2022bringing]. Graded C.

*In LTF:* the theme can be changed in the header `ThemeToggle` and in `/account` Preferences. Any future setting, such as a reminder, must be changeable on the screen that sets it, not only in `/account`.
:::

::: {.rule #DEC-024 grade="C"}
**Ask for consent with an unticked box or a separate button the learner must actively choose, never with a pre-ticked box or a bundled clause.** The FTC reads consent as requiring an affirmative, unambiguous act that cannot be buried in general terms [@ftc2022bringing]. Graded C: regulatory guidance.

*In LTF:* the sign-up `Checkbox` "I understand this is for simulation only and agree to the Terms." is unticked and required. Keep it unticked. If a marketing or research-use consent is ever needed, it is a second, optional checkbox, unticked, never folded into this one.
:::

### Defaults that help

Not every default is a dark pattern. The default effect is a reason to set defaults with care, not to avoid them: some default always exists, including the default of showing nothing. A setup screen that starts from tested settings serves a beginner who will keep what they are given. A dark, large-type layout as the default for a second screen beside a running sim is a default chosen for the learner's situation.

::: {.rule #DEC-025 grade="C"}
**Start every setup screen from settings that have been tested for the beginner's situation, because most learners will keep them.** People mostly keep the default they are given [@johnson2003defaults], so the default is the setting most learners will actually use. Graded C.

*In LTF:* `FlyModeLayout` defaults to dark and `text-xl`, a sound choice for a second screen. The "Sim setup" rows in `BriefTab` act as defaults for the sim; every value in them must come from verified content, and any not yet verified in the sim carries the `verify` callout.
:::

::: {.rule #DEC-026 grade="B"}
**Do not forecast a large effect from a new default; plan for the smaller, variable effect the meta-analytic evidence shows.** Cross-country consent gaps overstate the effect of a default on outcomes, and default effects vary widely across studies and domains [@johnson2003defaults; @maier2022no]. Graded B.

*In LTF:* if a reminder or "review tomorrow" default is ever tested, write down the expected effect as a range that includes zero before the test runs (see DEC-066).
:::

### What this means for Learn to Fly

Keep the private and neutral defaults: the unticked "Remember me for 30 days" with its shared-computer hint, the "System" theme, the unticked terms checkbox, the empty debrief radio cards and quiz options, the dark large-type Fly mode. Change the recommended-path elements so they say why they recommend. Build a guard into tests that no quiz or rubric renders with a selection. For any future setting (reminders, profiles, sharing, email), the default is off, consent is a separate unticked choice, and the setting can be changed where it appears.

## Choice Overload and Its Replication

### The jam study

The claim that more options demotivate has one famous origin. Iyengar and Lepper set up a tasting booth in an upscale grocery store in Menlo Park, California, on two Saturdays, showing either 24 or 6 jams and rotating the display hourly [@iyengar2000when]. Of the 242 shoppers who met the extensive display, 60 percent stopped; of the 260 who met the limited display, 40 percent stopped. Those who stopped did not sample significantly different numbers of flavors. Every shopper who approached received a coupon for $1 off, coded so purchases could be traced to the condition. Nearly 30 percent (31) of the limited-choice group later bought a jar, against 3 percent (4) of the extensive-choice group. The large display attracted more attention and sold far less.

Two further studies pointed the same way [@iyengar2000when]. Students offered an optional two-page extra-credit essay chose among 6 or 30 topics: 74 percent of the 70 students in the limited condition turned one in, against 60 percent of the 123 in the extensive condition, and the limited-condition essays were graded higher. Participants choosing among 30 Godiva chocolates took longer to decide (24.36 seconds on average, against 8.91 for 6), rated the decision as harder and more frustrating, and said they had been given "too many". Offered chocolate or cash as payment afterward, 48 percent of the limited group chose chocolate, against 12 percent of the extensive group and 10 percent of a no-choice group.

### The meta-analyses

The result did not generalize. Scheibehenne, Greifeneder and Todd collected 63 conditions from 50 published and unpublished experiments, 5,036 participants in all, deliberately including unpublished work to limit publication bias [@scheibehenne2010can]. The mean effect of the number of options was virtually zero, with large variance: some studies showed strong overload, others a benefit from more options. They found several possible preconditions for overload and no sufficient conditions, so no setting reliably produces it. A press summary reported that more options helped especially when people had clear prior preferences, a secondary reading of the paper's moderator discussion. Secondary accounts also report that the lead author of the jam study failed to replicate it for her 2008 dissertation, and describe another failed attempt [@iyengar2000when].

Chernev, Böckenholt and Goodman objected in the same journal issue, in a commentary titled "Choice Overload: Is There Anything to It?", that overload has several antecedents, so a search for one main effect across all conditions is not informative [@scheibehenne2010can]. Their own 2015 meta-analysis of 99 observations (N = 7,202) found a significant overall effect once four moderators were included [@chernev2015choice]. Greater choice set complexity increased overload. Higher decision task difficulty increased it. Greater preference uncertainty, not knowing what one wants, increased it. A more prominent effort-minimizing goal increased it. They also found that four outcome measures (satisfaction or confidence, regret, choice deferral, and the likelihood of switching) can be used interchangeably.

A trade summary of related work by the same authors illustrates the four factors: five retirement funds described by 50 data points each are more likely to overwhelm than 50 funds described by one metric; time pressure raises overload; people who already know what they value filter options easily; and wanting a final choice that requires trade-offs is harder than browsing for later [@chernev2015choice]. The same account reports that outright paralysis was erratic across studies while switching intentions and regret were steadier. That summary concerns a related analysis, so it illustrates the factors rather than adding evidence.

The Scheibehenne group replied to the commentary. The dispute is partly about method (what counts as a comparable study, how moderators are coded) and partly about interpretation [@chernev2015choice]. No preregistered experiment confirming the four-factor account was found. The best-supported statement is that there is no robust general effect of the number of options, and that conditions matter; the four factors are a well-argued hypothesis with meta-analytic support.

::: myth
**"Show more than a handful of options and people freeze; the jam study proved it."** The jam booth is one field result from one store over two Saturdays, and its lead author's own replication attempt is reported to have failed [@iyengar2000when]. A meta-analysis of 50 experiments found an average effect of virtually zero [@scheibehenne2010can]. A later meta-analysis finds an effect only under specific conditions, and that account is itself disputed [@chernev2015choice]. There is no general cap on options.
:::

::: {.rule #DEC-027 grade="B"}
**Do not cap the length of a list by a rule of thumb; decide each list's length from what the learner is doing on that screen.** A meta-analysis of 63 conditions found no average effect of the number of options [@scheibehenne2010can]. Graded B: one meta-analysis, contested on interpretation but not on its average.

*In LTF:* the full challenge grid on `ChallengesPage`, the airport cards, the glossary and the reference hub's numbered rail are browse screens and should show everything, with filters. Do not trim them to a "magic number".
:::

::: {.rule #DEC-028 grade="D"}
**Where several overload moderators stack (unfamiliar options, a hard or timed decision, a learner unsure what they want, a final choice), reduce the set and lead with one recommendation.** Chernev and colleagues' meta-analysis finds overload under these conditions [@chernev2015choice], but the moderator account is disputed by the authors of the null meta-analysis [@scheibehenne2010can] and lacks a preregistered test. Graded D for contested evidence. The rule is cheap to follow and consistent with DEC-002, which is why it is kept.

*In LTF:* the place where all four stack is the very first choice. The landing page answers it with one CTA. If the planned `/welcome` onboarding (v1.md Section 20.13) is ever built, its first screen must not ask a beginner to pick among training paths.
:::

::: {.rule #DEC-029 grade="C"}
**When options must be compared, describe them on the same few attributes in the same order.** Choice set complexity, including options described on many different attributes, is one of the four moderators of overload [@chernev2015choice]. Graded C: the moderator is contested, but comparable descriptions also aid search for reasons in Bounded Rationality and the Beginner.

*In LTF:* challenge cards already share one meta row (code, `TypeIcon`, `DifficultyDots`, minutes, ICAO, badges). Keep the fields in a fixed order on every card, and on `CurriculumMap` keep the "n lessons · n challenges · about h" line identical in form across modules.
:::

::: {.rule #DEC-030 grade="C"}
**Give a learner who does not yet know what they want a "not sure yet" route that does not force a final choice.** Preference uncertainty and a final-decision goal both raise overload in the moderator account [@chernev2015choice]; a route that defers the choice removes both. Graded C.

*In LTF:* the landing secondary button "See the curriculum" is such a route: it lets the learner look without committing. Any future picker (aircraft, training goal) should offer "Start with the basics" as a deferral.
:::

::: {.rule #DEC-031 grade="C"}
**Give every long list a filter or grouping by purpose, and show how many items the current filter leaves.** A long list is not harmful in itself [@scheibehenne2010can], but search costs fall when the learner can narrow it [@simon1955behavioral]. Graded C.

*In LTF:* `ChallengesPage` does this: five `Select` filters with "All" options and a `role="status"` line "Showing n challenges of n". Apply the same pattern to `/reference/resources` and `/reference/airports` if they grow.
:::

### Where choice meets the end of a lesson

The end of a lesson is a smaller version of the first-choice problem. The learner has just finished something, may be tired, and is presented with the completion panel ("Mark lesson complete"), "Fly it" challenge cards, "Go deeper" resource cards, glossary chips and previous and next cards. Each is reasonable; together they compete. The moderator account suggests this matters most for a learner who does not know what to do next, which is most beginners at most lesson ends [@chernev2015choice]. The fix is hierarchy, not removal: one primary next action, the rest visibly secondary.

::: {.rule #DEC-032 grade="C"}
**At the end of a lesson, make exactly one next action primary and present the others as secondary.** The end of a lesson combines preference uncertainty and a decision about what to do next, two moderators of overload [@chernev2015choice], and a single recommendation is how a satisficer is best served [@simon1955behavioral]. Graded C.

*In LTF:* in `LessonPage`, after "Mark lesson complete", the next-lesson card should carry the visual weight (the `accent` Button variant is reserved for continuing the lesson path, which fits). "Fly it" cards stay prominent where a challenge is the intended next step; "Go deeper" cards stay below, as quiet `Card`s.
:::

::: {.rule #DEC-033 grade="C"}
**Before cutting or splitting any list, check LTF's own completion and drop-off data for that list.** The general literature cannot say whether a specific list overloads a specific audience [@scheibehenne2010can; @chernev2015choice]. Graded C.

*In LTF:* if analytics are added, measure where learners stop on `CurriculumMap` and `ChallengesPage` filters. Until there are data, follow DEC-027 for browse screens and DEC-028 for first choices.
:::

### Choices in Fly mode and in quizzes

Time pressure is one of the four moderators, and Fly mode is where it is highest [@chernev2015choice]. A learner glancing at a phone beside the sim has no spare attention for a menu. Quiz answer sets are a different case: they are small by convention, and that convention is not evidence. The literature says nothing specific about the right number of quiz options; the reason to keep them few is that each distractor must be a plausible, teachable error (DEC-012), and good distractors are hard to write.

::: {.rule #DEC-034 grade="C"}
**Offer no menus or settings choices during a flight on `FlyModePage`; every choice is made before the learner starts flying.** Time pressure raises overload in the moderator account [@chernev2015choice], and a learner flying the sim has the least spare attention of any LTF user. Graded C.

*In LTF:* `FlyPanel large` has steps, a stopwatch and "Finish and debrief". Keep it that way. The "Keep the screen on while flying" option and any timer setup belong before the flight starts, on the Fly tab.
:::

### What this means for Learn to Fly

Keep the full lists on browse screens with their filters and counts, and keep the single CTA at the first choice. Change the end of `LessonPage` so one next action leads. Never cite the jam study in a design review; cite the four moderators and say which apply. If `/welcome` onboarding is built, it must not open with a path picker. Fly mode stays free of menus. Measure drop-off before trimming any list.

## Nudges and the Evidence Behind Them

### Choice architecture

Thaler and Sunstein's *Nudge* proposes libertarian paternalism: a middle path between command-and-control regulation and strict neutrality, in which choice architects arrange the context of decisions so that people are steered toward better outcomes while staying free to choose otherwise [@thaler2008nudge]. A nudge, in the authors' definition, is any aspect of the choice architecture that alters people's behavior in a predictable way without forbidding any options or significantly changing economic incentives, and it must be easy and cheap to avoid. Their illustrations: fruit placed at eye level is a nudge, banning junk food is not; home energy reports that compare your use with your neighbors'; asking citizens to plan when, where and how they will vote; automatic enrollment in a retirement plan through payroll deduction. The common tools are defaults, social comparison and making the preferred option salient.

The book is a policy argument built on the heuristics-and-biases tradition [@tversky1974judgment], prospect theory framing [@tversky1981framing] and default findings [@johnson2003defaults], not a primary study. Its useful contribution to design is vocabulary. Every interface is choice architecture, because some arrangement always exists; the question is whose interest the arrangement serves and whether the person could see and avoid it.

### The evidence after correction

Nudging has become one of the most criticized parts of applied behavioral science, on three fronts.

First, effects shrink at scale. DellaVigna and Linos analyzed all trials run by two large US nudge units, 126 randomized trials covering over 23 million people, and found an average take-up effect of 1.4 percentage points, against 8.7 points in a sample of academic papers; they attribute most of the gap, about 70 percent in the published version, to selective publication. Their paper was read only in abstract and is named here without a bibliography entry; it is the main field check on the book's promise.

Second, the average may vanish once publication bias is corrected. Maier and colleagues re-analyzed the large meta-analysis of choice architecture interventions by Mertens and colleagues, which had reported a random-effects d = 0.43 (95 percent interval 0.38 to 0.48) along with moderate publication bias [@maier2022no]. Using robust Bayesian meta-analysis with publication-bias adjustment (RoBMA-PSMA), which averages over selection models so the severity of bias need not be assumed, they obtained d = 0.04 (0.00 to 0.14) ignoring clustering of estimates within studies, and d = 0.11 (0.00 to 0.24) using only the most precise estimate per study. The Egger regression coefficient (b = 2.10) indicated severe bias, and the original authors' own sensitivity analysis had allowed that the true effect could be as low as d = 0.08. The letter's wording is that "no evidence for the effectiveness of nudges remains" after adjustment.

The category results matter more for design than the average [@maier2022no]. Information nudges fell from 0.25 unadjusted to 0.00, with evidence against an effect. Assistance nudges fell from 0.22 to 0.01, also with evidence against. Structure nudges, the category containing defaults and other changes to the decision environment, fell from 0.58 to 0.12 and were undecided. By domain, health was 0.01, food 0.02, environment 0.01, finance 0.00, prosocial 0.00 and other 0.08. Every category and domain except finance showed heterogeneity, which the authors say means that some nudges might work even if the average is near zero.

Third, the critique has limits of its own. The authors state that fully three-level bias-corrected models were computationally intractable, so they used two workarounds; that per-subfield analyses ignore clustering; and that the conclusion depends on how bias is modeled [@maier2022no]. In a later rejoinder they described the overall result as undecided rather than as evidence against nudging, and said the title was not ideal. No published reply by the original meta-analysts was found.

The fair summary: average nudge effects are probably much smaller than the published literature suggests, structural changes such as defaults may still work, information-only messages have the weakest support, and context decides.

::: myth
**"A well-placed nudge reliably lifts completion by a few percent."** DellaVigna and Linos found that trials run by nudge units averaged about 1.4 percentage points, against 8.7 in published papers, and after correcting the largest nudge meta-analysis for publication bias no evidence for an average effect remained [@maier2022no]. Some nudges may work in some contexts; none can be budgeted on from a blog post's percentage.
:::

::: {.rule #DEC-035 grade="B"}
**Do not plan or justify a design on a forecast lift from a nudge; expect a small effect or none, and test if the decision matters.** Average nudge effects shrink sharply in large field programs (DellaVigna and Linos's analysis of nudge-unit trials) and after correction for publication bias [@maier2022no], and published effects in psychology are inflated in general [@openscience2015estimating]. Graded B: two independent lines of evidence agree on inflation, but the bias-corrected estimate is itself disputed by its authors as undecided.

*In LTF:* the resume bar on `LessonPage`, the `DashboardPage` Continue card and the `SignupBanner` are nudges. Justify them by clarity (they show the learner where they are and what is available), not by an expected engagement gain.
:::

::: {.rule #DEC-036 grade="B"}
**Do not rely on information-only nudges such as "most learners finish this module" or "join 2,000 pilots" to change behavior.** In the bias-corrected analysis, information interventions showed evidence against any average effect [@maier2022no]. A social-norm message must also be true, or it is the false social proof dark pattern [@mathur2019dark]. Graded B.

*In LTF:* the landing stats row ("modules open now", "short interactive lessons", "scored in-sim challenges") describes the product, which is fine. Do not add counts of other learners as persuasion; if counts of learners ever appear, they are live, real and labeled.
:::

::: {.rule #DEC-037 grade="B"}
**Spend design effort on making the next step easier and clearer before spending it on messages meant to motivate.** Structural interventions are the only nudge category not showing evidence against an effect after correction [@maier2022no], and Fogg's model puts ability on equal footing with motivation [@fogg2009behavior]. Graded B.

*In LTF:* the clearest examples already exist: the `returnTo` redirect that brings a learner back to the lesson after sign-up, the debrief draft kept on the device "while you log in or sign up", the copy buttons in the `BriefTab` "Sim setup" rows. More of these are worth more than any motivational banner.
:::

### When influence is acceptable

The definition of a nudge carries its own ethical test: no option is removed, incentives are not changed, and the influence is easy and cheap to avoid [@thaler2008nudge]. Add one more condition from the dark patterns literature: the person would endorse the influence if they saw what it was doing. A "next lesson" button as the default path passes. A countdown or a guilt message does not. A nudge that cannot be explained to the learner in one sentence should not ship, because an influence that cannot be stated plainly is usually one that would not survive being stated.

::: {.rule #DEC-038 grade="C"}
**Ship a nudge only if it removes no option, is as easy to avoid as to follow, and can be explained to the learner in one sentence they would agree with.** This combines Thaler and Sunstein's definition of a nudge [@thaler2008nudge] with the line the dark patterns literature draws at influence that works only when hidden [@gray2018dark; @ftc2022bringing]. Graded C: an ethical test, not an empirical finding.

*In LTF:* write the one sentence in the pull request. "The Continue card shows the lesson you were in so you can pick up where you left off" passes. "The banner reappears every visit so more people sign up" fails.
:::

::: {.rule #DEC-039 grade="C"}
**Where a prompt supports a safety habit, justify it by the value of the habit, not by a claimed percentage improvement.** The evidence for average nudge effects is too weak to support a number [@maier2022no], while the habit itself (reviewing a checklist, reading the brief) is justified by the instructional content. Graded C.

*In LTF:* the large "I'm set up, start flying" button at the end of `BriefTab` is a structural prompt to read the brief first. Keep it; do not add a "pilots who brief first score higher" message unless LTF's own data, collected under DEC-066, support it.
:::

### Nudging and the learner's own goals

A learning product's nudges differ from a government's in one respect: the learner has chosen to be there and states a goal (to learn to fly the airplane in the sim). Nudges that serve that goal are easy to justify. Nudges that serve the product's metrics (time on site, return visits, sign-ups) are justified only where the metric and the learner's goal coincide, and they often do not. A learner who has finished what they came for and leaves is a success, not a churn event.

::: {.rule #DEC-040 grade="C"}
**Define every engagement metric in terms of the learner's goal, and drop any nudge whose only effect is on a metric the learner does not care about.** A nudge is acceptable when it steers toward outcomes the person would choose [@thaler2008nudge]; time on page or return visits are not outcomes a learner chooses for their own sake. Graded C.

*In LTF:* the relevant outcomes are lessons understood, challenges flown and the learner's own progress on `DashboardPage`, not visits. "All caught up" on the dashboard is a legitimate end state and should not be followed by a prompt to do more.
:::

### What this means for Learn to Fly

Keep the structural helpers (`returnTo`, device-kept drafts, copy buttons, the resume bar) and justify them by clarity. Do not add social-proof counts of learners, loss-framed reminders or nudges whose purpose is a metric. Write the one-sentence explanation for every nudge in its pull request. Treat any claimed lift as a hypothesis for LTF's own test, held to the standards in Holding Behavioral Claims to Evidence.

## Sludge and Deliberate Friction

### Nudging for evil

Ten years after *Nudge*, Thaler wrote a one-page essay in *Science* arguing that the understanding of behavior that supports helpful nudges also supports their opposite, which he called sludge [@thaler2018nudge]. The abstract describes sludge as activity that just mucks things up and makes wise decision making and prosocial activity more difficult, and frames the problem as what to do about activities that are essentially nudging for evil. The essay is an opinion piece by an established author, and only its abstract and secondary accounts were read for this Part.

Those secondary accounts agree on the concept: sludge is excessive or unjustified friction that makes it harder to do something in the person's interest, whether the obstacle is a design, an administrative procedure or a policy [@thaler2018nudge]. Their examples are rebates that require difficult procedures, subscriptions that can only be cancelled by phone, long and complicated student aid forms, and a company that promises refunds but makes claiming them procedurally complex enough that few follow through. The key design point is symmetry. Friction can be added or removed on purpose. Removing friction from behavior that benefits the designer while adding it to behavior that benefits the person is a choice, and it is the choice sludge names.

### The regulator's use of the term

The FTC's 2022 staff report adopts the term. It quotes a workshop panelist defining sludge as "a high friction experience that, by its nature, causes people to become fatigued and give up", and applies it to the ABCMouse cancellation path, which required six to nine screens and which the report calls a prime example [@ftc2022bringing]. The report ties sludge to legal tests. ROSCA (2010) prohibits charging for online negative option sales unless the seller clearly discloses material terms before taking billing information, obtains express informed consent, and provides a simple way to stop recurring charges. The report's reading is that cancellation should be at least as easy as signing up, in the same medium, and without delaying the person with new offers.

### Friction that protects

Sludge has critics. Whether it always reduces welfare is debated, and one healthcare commentator argues that some friction is beneficial because it slows people down and makes them think [@thaler2018nudge]. The line between sludge and protective friction is therefore a judgment about whose interest the friction serves, not a property of the friction itself. The evidence for the size of sludge effects is mostly field cases and policy examples, not large trials, though the experimental dark patterns work in What Dark Patterns Do: Experiments and Law shows that obstruction and hidden information do change decisions [@luguri2021shining].

That gives a usable test with three parts. Does the friction sit on an action that is in the learner's interest? Does it protect the learner from a mistake they would regret, such as irreversible loss? Is the wording neutral, and can the learner proceed? Friction on an irreversible destructive action, with neutral words and a clear way through, is protection. Friction on leaving, unsubscribing or exporting, or wording that guilts, is sludge.

::: {.rule #DEC-041 grade="C"}
**Make every exit at least as easy as the matching entry: deleting an account, exporting data, unsubscribing and cancelling take no more steps, and no other medium, than signing up.** The FTC's reading of ROSCA is that cancellation must be at least as easy as sign-up, in the same medium [@ftc2022bringing], and obstruction of exits is the roach motel pattern [@gray2018dark]. Graded C: regulatory guidance and craft consensus.

*In LTF:* count the steps. Sign-up is one form (display name, email, password, terms checkbox) and a button. Deletion is the `/account` Data section's "Delete my account" button, then one `Dialog` with two fields (type DELETE, password) and "Delete permanently". Export is one link, "Export my data", that downloads a JSON file with no confirmation. The flows are in balance; keep them so, and check the balance in review whenever either changes.
:::

::: {.rule #DEC-042 grade="C"}
**Put no retention offers, surveys, "are you sure?" chains or guilt copy between a learner and leaving.** The FTC says cancellation must not be delayed by new offers [@ftc2022bringing], and repeated interruptions of an exit are the nagging and obstruction strategies [@gray2018dark]. Graded C.

*In LTF:* the deletion `Dialog` ("Delete your account?", "Everything will be permanently deleted.") has one confirmation and neutral wording. Do not add a "We'll miss you" screen, a "Tell us why" form before deletion, or a second confirmation after it.
:::

::: {.rule #DEC-043 grade="C"}
**Add friction only where it protects the learner from an irreversible mistake, word it neutrally, let the learner proceed, and record the reason in the pull request.** Friction is sludge or protection depending on whose interest it serves [@thaler2018nudge]. Graded C.

*In LTF:* typing DELETE plus a password before account deletion is protective friction: deletion is irreversible and signs the learner out everywhere. A confirmation before resetting a challenge's local flight state would be justified on the same grounds. A confirmation before closing the `SignupBanner` would not.
:::

### Friction LTF can remove

Sludge is not only about exits. Any step that does not serve the learner is friction to remove: a form field the product does not need, a repeated sign-in prompt, a setting placed where nobody looks for it, a detour that loses the learner's place. LTF has removed several of these already, which is worth recording so that later changes do not reintroduce them.

The landing note "You can start without an account." removes the sign-up wall from the first lesson. The `returnTo` parameter on every sign-up and log-in link returns the learner to the page they left. The Debrief callout "Log in to save your result" says "Your answers are kept on this device while you log in or sign up", so a detour through authentication does not lose a filled-in rubric. The sign-up form asks for four things, and the display name is explained ("Shown on your dashboard").

::: {.rule #DEC-044 grade="C"}
**Collect only the data a lesson or feature needs, and say on the form what each field is for.** The FTC recommends minimizing data collection [@ftc2022bringing], and a field the product does not need is friction on the learner's path [@thaler2018nudge]. Graded C.

*In LTF:* the sign-up form's hint on display name is the model. Any new field on `SignupForm` or `/account` Profile needs a hint stating its use, and a pull request that adds a field states which feature reads it.
:::

::: {.rule #DEC-045 grade="C"}
**Preserve the learner's place and work across every detour the product imposes (sign-up, log-in, errors, reloads).** Losing work turns a small required step into a large one, which is how procedural friction makes people give up [@thaler2018nudge; @ftc2022bringing]. Graded C.

*In LTF:* keep `returnTo` on every auth link, the debrief draft storage in `features/challenges/storage.ts` and the resume bar. The `ErrorState` "Try again" button should retry in place rather than navigating away.
:::

::: {.rule #DEC-046 grade="C"}
**Allow no step in Fly mode that does not serve the flight in progress.** Attention is scarcest while the learner is flying the sim, so any added step there costs more than anywhere else, and a prompt that interrupts is the nagging strategy at its most harmful [@gray2018dark; @thaler2018nudge]. Graded C.

*In LTF:* `FlyModePage` shows no sign-up prompt, no `SignupBanner` and no toasts unrelated to the flight. The `BetaBanner`, which `RootLayout` and Fly mode both show until dismissed, is the one exception today; consider suppressing it in `FlyModeLayout` once dismissed elsewhere, or always.
:::

### A friction ledger

Because the same friction can be sludge or protection, the record matters as much as the decision. A short ledger in the design log, one line per deliberate friction (where it is, what it protects, why the wording is neutral), lets a later reviewer see that a confirmation dialog was chosen, not accreted. It also gives the symmetry audit something to check against: every entry should be on an action that harms the learner if done by mistake, never on an action that merely harms a metric.

::: {.rule #DEC-047 grade="C"}
**Keep a ledger of every deliberate friction in the product, and audit it in each release for entries that sit on exits or serve a metric.** Sludge is defined by whose interest friction serves [@thaler2018nudge], which can only be checked if the reason is written down. Graded C.

*In LTF:* the ledger starts with three entries: the DELETE-and-password confirmation, the required terms checkbox on sign-up, and the danger `Button` variant's rule that it sits behind a confirmation. Store it beside the review checklist in this Part's last chapter.
:::

### What this means for Learn to Fly

Keep the balanced sign-up and deletion flows, the one-link export, the account-free first lesson, `returnTo`, device-kept drafts and the neutral deletion copy. Change Fly mode so the `BetaBanner` does not occupy the second screen during a flight. Build the friction ledger and the step-count check into review. If email, reminders or any paid plan is ever added, unsubscribing and cancelling must be one action from the place the learner finds the setting, with no offer in between.

## A Taxonomy of Dark Patterns

### From a practitioner's term to five strategies

Harry Brignull coined "dark patterns" in 2010 for interface designs that trick people into doing things they did not intend [@gray2018dark; @ftc2022bringing]. Gray and colleagues, writing at CHI in 2018, argued that practitioner talk about dark patterns had not been connected to academic work on ethics and values in design, and built a corpus to connect them [@gray2018dark]. The corpus held 118 artifacts: 45 from social media, 40 from practitioner blogs, 19 from news outlets, 10 from the researchers' own use of products, and 4 from Brignull's site. Two researchers collected them over two months, starting from the term and its hashtag and widening to words such as "unethical" and "manipulative" to catch unlabeled cases.

They first coded the corpus against Brignull's twelve types (among them bait and switch, disguised ads, forced continuity, friend spam, hidden costs, misdirection, price comparison prevention, privacy Zuckering, roach motel, sneak into basket and trick questions) and found that the types mixed strategies with context-specific content [@gray2018dark]. Re-coding openly produced five strategies, organized by what the designer is trying to do rather than where the pattern appears.

**Nagging** is a minor redirection of expected functionality that may persist across interactions, such as repeated interruptions; their example is Instagram's notification prompt offering only "Not Now" and "OK". **Obstruction** makes an interaction harder than it needs to be in order to dissuade an action; its subtypes are roach motel (easy to enter, hard to leave), price comparison prevention, and intermediate currency, in which real money is exchanged for a virtual currency that disconnects people from the dollar value. **Sneaking** hides, disguises or delays information relevant to the user so that they take an action they might object to with full knowledge: hidden costs, forced continuity, sneak into basket, bait and switch. **Interface interference** manipulates the interface so that certain actions are privileged over others, with three subtypes: hidden information (fine print, discolored text), preselection (an option chosen before the user acts) and aesthetic manipulation (visual emphasis, false hierarchy, disguised ads). **Forced action** requires a specific action to continue, such as an operating system forcing an update before shutdown, or a service requiring consent to share data in order to unsubscribe [@gray2018dark].

The authors relate the strategies to Norman's gulfs of execution and evaluation: interface interference and obstruction leave the user "flying blind" about what can be done, while nagging and forced action foreground only the actions the company prefers [@gray2018dark].

### Limits of the taxonomy

The corpus is a convenience sample of cases salient enough to be posted, so it supports a taxonomy and examples and says nothing about how common each pattern is [@gray2018dark]. The categories overlap by design; the authors note that a roach motel can invoke hidden information. The strategy-by-motivation framing has nevertheless been adopted in regulatory language, though the FTC report organizes its own categories by consumer harm [@ftc2022bringing].

::: {.rule #DEC-048 grade="C"}
**Review every new or changed flow against the five strategies (nagging, obstruction, sneaking, interface interference, forced action), and require a written reason for any design that falls under one.** The taxonomy captures the strategies practitioners and regulators recognize as manipulative [@gray2018dark; @ftc2022bringing]. Graded C: a qualitative taxonomy, not a measured effect.

*In LTF:* the five questions are in this Part's review checklist. They apply to `SignupBanner`, the lesson completion `Dialog`, the Debrief sign-in callout, the `BetaBanner`, `/account` and any future notification or plan screen.
:::

### Dark patterns at scale

Mathur and colleagues made the first large measurement of dark patterns on the web [@mathur2019dark]. A crawler collected 53,180 product pages from 11,286 shopping websites, drawn from a list of about 19,000 English-language sites; a checkout crawler built on OpenWPM simulated adding a product to the cart, viewing the cart and checking out. The team extracted text segments, clustered them, and inspected the clusters by hand. They found 1,818 dark pattern instances of 15 types in 7 categories, on about 11.1 percent of the sites. More popular sites were more likely to use them. Because the method saw only text-based elements on a sample of pages, the authors call the counts a lower bound.

Their seven categories adopt sneaking from Gray and colleagues and add others [@mathur2019dark]. Sneaking contains sneak into basket, hidden costs and hidden subscription. Urgency contains countdown timers and limited-time messages. Misdirection contains confirmshaming, trick questions, visual interference and pressured selling. Social proof contains activity notifications and testimonials. Scarcity, obstruction ("hard to cancel") and forced action ("forced enrollment") complete the list. Most patterns found were covert, deceptive and information-hiding.

They also checked whether urgency was real. Recording repeated visits, they counted a countdown timer as deceptive if it reset after reaching zero with the offer still valid, or if the offer stayed valid after it expired. They found 157 deceptive countdown timers on 140 websites, one a 60-minute timer on a deal that persisted afterward, and 234 deceptive instances across 183 websites in total [@mathur2019dark]. They identified 22 third-party entities selling dark patterns as a service, two of which openly advertised practices that enable deceptive messages.

### Five characteristics

The paper's most reusable tool is a set of five characteristics that describe how a pattern acts on the user [@mathur2019dark]. **Asymmetric** patterns put unequal weight or burden on the choices, such as a prominent accept and a hidden decline. **Covert** patterns hide their effect from the user, as a decoy does. **Deceptive** patterns induce false beliefs. **Information-hiding** patterns obscure or delay necessary information. **Restrictive** patterns narrow the set of choices, such as allowing sign-up only through a social media account. The paper links the types to the biases they exploit: anchoring, bandwagon, default, framing, scarcity and sunk cost.

The study is a measurement, not an experiment. It is limited to English-language shopping sites, to text-based patterns and to pages the crawler reached, and classification rests on the researchers' labels [@mathur2019dark]. The crawler and data were released. It does not show how much any pattern changes behavior, and prevalence is not evidence of effectiveness: the experiment discussed in What Dark Patterns Do: Experiments and Law found that some of the most common patterns, such as urgency messages, had no significant effect [@luguri2021shining].

::: {.rule #DEC-049 grade="C"}
**Test every new control with five questions (is it asymmetric, covert, deceptive, information-hiding, restrictive?) and require a written reason for any yes.** The five characteristics describe how dark patterns act across the 1,818 instances Mathur and colleagues classified [@mathur2019dark]. Graded C: a descriptive taxonomy.

*In LTF:* the lesson completion `Dialog` for visitors ("Save your progress") passes: its three buttons ("Not now", "Log in", "Sign up free") are the same size, "Not now" closes the dialog, and the description says plainly what an account adds. Its primary-weight "Sign up free" is an ordinary hierarchy, not asymmetric burden, because declining is one click on an equal-size button.
:::

::: {.rule #DEC-050 grade="B"}
**Write decline options as plain, neutral words on a control of the same size and form as the accept option; never shame the learner for declining.** Confirmshaming is one of the most common misdirection patterns found at scale [@mathur2019dark], loaded language was moderately effective in experiments [@luguri2021shining], and the FTC lists a highlighted accept against a greyed-out alternative as a privacy dark pattern [@ftc2022bringing]. Graded B for the experimental support on loaded language.

*In LTF:* "Not now" on the completion `Dialog` is the model. Never write "No thanks, I don't want to save my progress". The `SignupBanner` dismiss is a 32 px ghost icon button labeled "Dismiss" for screen readers; it is a decline that is visually quieter than the "Sign up" link, which is acceptable because the banner is non-blocking, but it should not get smaller.
:::

::: {.rule #DEC-051 grade="B"}
**Show no countdown, deadline, scarcity or "others are viewing" message unless it is literally true and its basis is stated.** Mathur and colleagues found 157 deceptive countdown timers on 140 sites [@mathur2019dark], the FTC lists fake timers, false low-stock claims and false activity messages as deceptive [@ftc2022bringing], and scarcity and countdown messages had no significant effect on acceptance in experiments [@luguri2021shining], so they carry risk with no business case. Graded B.

*In LTF:* there are no offers to time. The randomized in-flight event alert on the Fly tab (warn border, pulse, beep) is a training event, not urgency about a decision, and is outside this rule. Real deadlines, if any ever exist (a beta closing date), are stated as a date.
:::

::: {.rule #DEC-052 grade="C"}
**Use social proof only from real, current counts, and label any fallback figure so it is never presented as live.** False activity notifications and testimonials are among the documented social proof patterns [@mathur2019dark], and the FTC treats false claims about others' activity as deceptive [@ftc2022bringing]. Graded C.

*In LTF:* the landing stats row takes live counts from the API with a static fallback. The fallback numbers must be true at the time they are written and must never exceed the real counts; a test that compares the fallback to the content index would catch drift.
:::

::: {.rule #DEC-053 grade="C"}
**Audit every third-party script, embed or widget for built-in dark patterns before it ships, and again when it updates.** Mathur and colleagues found 22 third-party entities selling dark patterns as a turnkey service [@mathur2019dark]. Graded C.

*In LTF:* `YouTubeEmbed` is click-to-load on the privacy-enhanced domain with no thumbnail, which loads nothing from the third party until the learner asks. Hold any future embed (comments, analytics, payment) to the same standard.
:::

### Nagging and the repeated prompt

Nagging deserves its own rule because it is the pattern a learning product slides into most easily. A sign-up prompt that returns on every lesson, a notification permission request on every visit, a "rate us" dialog: each looks harmless alone and becomes nagging by repetition [@gray2018dark]. LTF's `SignupBanner` stores its dismissal in `localStorage` under `ltf-signup-banner-dismissed`, so once dismissed it does not come back on that device. The `BetaBanner` does the same under `ltf-beta-banner`. The lesson completion `Dialog` is different: it appears when a visitor clicks "Mark lesson complete", which is a response to the learner's own action, not an interruption.

::: {.rule #DEC-054 grade="C"}
**Once a learner declines or dismisses a prompt, do not show it again unprompted; show it again only in response to an action that needs it.** Persistent repetition after refusal is the nagging strategy [@gray2018dark], and the FTC lists repeated prompts among privacy dark patterns [@ftc2022bringing]. Graded C.

*In LTF:* keep the persisted dismissals of `SignupBanner` and `BetaBanner`. Do not add a timer that brings them back. The completion `Dialog` and the Debrief "Log in to save your result" callout are allowed because they answer an action that genuinely needs an account.
:::

### What this means for Learn to Fly

LTF today shows almost none of the documented patterns: no costs to hide, no timers, no scarcity, no confirmshaming, persisted dismissals, a click-to-load video, an equal-size decline on the one modal sign-up prompt. Keep all of it. Build the five strategies and five characteristics into review, so that the next feature (reminders, a community, a plan) is tested before it ships. Add a test that the landing stats fallback cannot exceed real counts. Keep the `SignupBanner` dismiss control at least its current size.

## What Dark Patterns Do: Experiments and Law

### Two experiments

The taxonomies say what dark patterns look like and how common they are. Luguri and Strahilevitz, legal scholars, measured what they do [@luguri2021shining]. They define dark patterns as interfaces whose designers knowingly confuse users, obstruct their true preferences or push them into actions, and they ran two large online experiments with census-weighted samples of American adults to find out how much such interfaces change decisions, which ones work best, and whether they provoke a backlash.

In the first study, participants were offered a dubious paid identity theft protection service [@luguri2021shining]. A control group saw a neutral interface, a mild group saw a few dark patterns, an aggressive group saw many. Acceptance was 11.3 percent in the control, 25.8 percent in the mild condition and 41.9 percent in the aggressive condition: mild patterns more than doubled sign-ups and aggressive ones nearly quadrupled them. Raising the price from $2.99 to $8.99 a month had no significant effect on acceptance. The aggressive condition produced a strong backlash; the mild condition did not. Less educated respondents were significantly more susceptible to mild dark patterns than the well educated.

The second study isolated single patterns [@luguri2021shining]. The most effective were hidden information, obstruction and trick questions. Hidden information raised acceptance from 14.8 percent in its control to 30.1 percent; a trick question raised it from 19.2 to 33.4 percent. Loaded language and bandwagon messages were moderately effective. Scarcity and "act now" countdown messages had no significant effect. Price again had little effect. The authors conclude that the structure of the decision, not the price, drove purchasing.

### How strong the evidence is

These are randomized experiments with large, census-weighted samples, which makes them the strongest evidence in this Part for the effect of manipulative interfaces [@luguri2021shining]. They have limits. The scenario is a simulated offer inside a survey platform with an artificial sign-up decision, so real effects could be larger or smaller. The first study bundles several patterns per condition. No independent replication of this exact design was found. The FTC report cites a closely related finding, that dark patterns doubled sign-ups for a dubious identity theft protection service and the effect grew with more patterns, but that is the same research reported again, not independent confirmation [@ftc2022bringing].

Three findings matter most for a design team. Dark patterns work, and the subtle ones work without backlash, so the cost is invisible in the metrics. They work best on the least educated, which is to say on the people least able to protect themselves. And the most visible tricks, urgency and scarcity, did not work at all in these studies, so there is not even a business case for them.

::: {.rule #DEC-055 grade="B"}
**Never use hidden information, obstruction or trick-question wording on any consent, account, data or payment screen.** These were the most effective single patterns in randomized experiments, roughly doubling acceptance of a dubious service [@luguri2021shining], and the FTC treats hidden material information and obstructed choices as likely violations [@ftc2022bringing]. Graded B: large randomized experiments, not independently replicated.

*In LTF:* the sign-up terms `Checkbox` states its content in plain words ("I understand this is for simulation only and agree to the Terms") with the Terms one link away. The deletion text says exactly what is deleted. Any future consent line is a single positive statement, never a double negative ("Uncheck to not receive...").
:::

::: {.rule #DEC-056 grade="B"}
**Treat a large lift from a variant that hides terms, adds steps to declining or uses loaded wording as evidence of manipulation, not as a win.** In experiments, subtle patterns doubled acceptance without provoking backlash, so their cost does not show in conversion [@luguri2021shining]; the authors propose using firms' own A/B tests to identify unlawfully manipulative designs. Graded B.

*In LTF:* if sign-up wording or the `SignupBanner` is ever tested, the review compares the variants against DEC-048 and DEC-049 before looking at the numbers, and a variant that fails is dropped whatever its result.
:::

::: {.rule #DEC-057 grade="B"}
**Test persuasive and consent copy with the least experienced readers in the audience, not only with the team.** Less educated respondents were significantly more susceptible to mild dark patterns [@luguri2021shining], so a design that looks harmless to its makers can still push its most vulnerable users. Graded B.

*In LTF:* LTF's audience is a complete beginner who has "never flown". Copy on `SignupForm`, `SignupBanner`, the completion `Dialog` and `/account` should be read by someone outside the team, ideally a beginner, before it ships, and checked against the copy rules in `AGENTS.md`.
:::

### The regulator's reading

The FTC's September 2022 staff report summarizes an April 2021 workshop and the academic literature, and organizes common dark patterns under four consumer-protection concerns [@ftc2022bringing]. It describes dark patterns as design practices that trick or manipulate users into choices they would not otherwise have made and that may cause harm, says they often exploit cognitive biases, are stronger in combination and can be tested at scale online, and states that the FTC will act where they violate the FTC Act, ROSCA and other laws. It is a staff view, not a rule or a court holding, and it describes the allegations in complaints as allegations.

The four categories, with the report's examples [@ftc2022bringing]:

1. **Inducing false beliefs**: disguised ads, fake countdown timers, claims that an item is nearly sold out when stock is ample, false claims that others are viewing or buying, and rankings that look neutral but are paid for.
2. **Hiding or delaying material information**: terms buried in long terms of service, fees behind tooltips or below the fold (in one complaint, mobile users had to scroll about four times to see a fee), and drip pricing. A study the report quotes found that users not shown ticket fees upfront spent about 20 percent more and were 14 percent more likely to complete the purchase.
3. **Leading to unauthorized charges**: children's in-app purchases (one company made more than $70 million in refunds available, for charges from $0.99 to $99.99), free trials that roll into subscriptions, and cancellation paths such as the six-to-nine-screen ABCMouse flow.
4. **Obscuring or subverting privacy choices**: six tactics, namely making it hard to reject collection, repeated prompts, confusing toggles, buried choices, a highlighted accept button against a greyed-out alternative, and defaults that maximize data collection.

The report's advice to firms goes beyond individual words. Companies are responsible for the net impression of a design [@ftc2022bringing]. Consent needs an affirmative, unambiguous act. Firms should look beyond sales and click-through to whether consumers understand material terms, remedy designs that induce false beliefs, minimize data collection, and not highlight one privacy option over another. Poor color contrast (a white disclosure on yellow) and peripheral placement can themselves be violations, and mobile scrolling makes hiding easier. An appendix lists types with examples, including false activity messages, false low stock, baseless countdown timers, price comparison prevention and roadblocks to cancellation.

The legal argument is pressed further by Luguri and Strahilevitz, who argue that many dark patterns may violate federal and state rules on unfair and deceptive practices, that contracts formed through them could be voidable, and that FTC consent decrees should include dark pattern audits [@luguri2021shining]. Nothing in this Part is legal advice; the report is used here as a design baseline, because it states plainly what the main US consumer agency regards as manipulation.

::: {.rule #DEC-058 grade="C"}
**Judge every page by its net impression: what a beginner would believe after reading it, not whether each sentence is literally true.** The FTC holds firms responsible for the net impression of a design [@ftc2022bringing]. Graded C.

*In LTF:* the net impression to protect is "this is simulator practice, not flight training". It is carried by the "For simulation use only" lines on the landing page and lesson footer, the `CourseBadge` sentence "It is not a pilot certificate", the "Draft · unverified" badge and the `BetaBanner`. Any new claim (a badge name, a tier label, a share card) is read against that impression.
:::

::: {.rule #DEC-059 grade="C"}
**Make every disclosure as legible as the content around it: at least body contrast, in the reading path, visible without scrolling past the action it qualifies, in both Day and Night themes.** The FTC treats poor contrast and peripheral or below-the-fold placement of material information as potential violations, and notes that mobile scrolling makes hiding easier [@ftc2022bringing]. Graded C.

*In LTF:* the landing note "You can start without an account. Any edition of MSFS 2024 works, on PC or Xbox. For simulation use only." is set in `text-sm text-ink-3`, the quietest text style in the product, directly under the hero buttons. Verify its contrast on `canvas` in both themes, and consider `text-ink-2` for the simulation-only sentence. The lesson disclaimer (`text-sm text-ink-2` under a `border-t`) should stay above the fold of its section, not after long trailing content.
:::

::: {.rule #DEC-060 grade="C"}
**If LTF ever charges for anything, disclose the price, billing frequency and trial end before asking for payment details, include all mandatory fees in the first price shown, require an affirmative click to consent, and offer cancellation in the same place and number of steps as sign-up.** These are the FTC's reading of ROSCA and its drip pricing and unauthorized charge categories [@ftc2022bringing]. Graded C: regulatory baseline.

*In LTF:* the product is free today and the landing eyebrow says "Free". This rule exists so a future plan screen starts compliant. Fly mode carries no upsell of any kind, ever.
:::

### Dark patterns and trust

The backlash finding has a quieter implication for a product whose distinctive trait is honesty. LTF's beta banner, unverified badges, verification dates and certificate disclaimer are trust signals, and the product's identity rests partly on them (see the Part on aesthetics, emotion and trust). Mild manipulation would not show up as a backlash in the numbers [@luguri2021shining], but it would contradict the identity those signals build. A product that tells the learner when a speed has not been checked in the sim cannot also tell them a fake count of other pilots.

::: {.rule #DEC-061 grade="C"}
**Keep honesty signals (draft and unverified badges, verification dates, the beta banner, disclaimers) visible and specific, and never trade one away for a conversion gain.** Mild dark patterns raise acceptance without visible backlash [@luguri2021shining], so the only guard against eroding trust is a rule that does not depend on the metric. Graded C.

*In LTF:* the `UnverifiedWarning` on draft lessons, the "Last verified" line on `SpeedsPage`, the `verify` callout that blocks publication and the `BetaBanner` stay. If the beta ends, the banner is replaced by an equally specific statement, not removed silently.
:::

### What this means for Learn to Fly

Keep the plain consent line, the specific deletion text, the free and upsell-free Fly mode, and every honesty signal. Change the landing disclaimer note to a more legible ink level and verify contrast in both themes. Revise any copy whose net impression reaches beyond the sim. Build the plan-screen baseline (DEC-060) into the plan before any paid feature is designed, and make "would the least experienced learner be misled?" part of copy review.

## Ethical Persuasion and Behavior Design

### Motivation, ability and a prompt

Product teams rarely cite Tversky and Kahneman directly. They cite behavior design models, and the most widely used is Fogg's [@fogg2009behavior]. In the 2009 paper, a target behavior happens only when three factors converge at the same moment: motivation, ability and a trigger, which Fogg renamed "prompt" in late 2017. If a behavior does not occur, at least one of the three is missing. The model is meant both for analyzing why behavior change efforts fail and for designing persuasive technology, and it gives teams a shared vocabulary. It is a conceptual model from the founder of Stanford's Behavior Design Lab, and the model's own site says it has been cited in more than 1,900 academic publications.

The model's current site, which post-dates the paper, fills in the parts [@fogg2009behavior]. Motivation has three core motivators, each with two sides: sensation (pleasure or pain), anticipation (hope or fear) and belonging (acceptance or rejection). A "Motivation Wave" describes how people do hard things when motivation is high and only easy things when it subsides. Ability is simplicity, a function of the person's scarcest resource at that moment, with time and money as examples: "your weakest link determines what makes a behavior hard to do." Designers can raise ability by training people (the hard path), by giving a tool or resource, or by scaling the behavior back until it is easy, which is the approach Fogg advocates. Motivation and ability trade off, the curved line in the model's diagram: high motivation can compensate for low ability, and the reverse. Prompts come in three types, named facilitator, signal and spark, and should match the person's context; the site calls a re-engagement email with a prominent sign-in button mostly a facilitator. The definitions of signal and spark were not confirmed for this Part, so they are not given.

### What the model is and is not

The honest statement is that this is a heuristic design model, widely used and cited, not a tested causal theory [@fogg2009behavior]. No experiment testing the full model's predictions, such as the compensatory curve or the prompt types, was found, and its constructs are broad enough that a failure can usually be explained afterward by a missing element. Its ethical risk is direct. The same model that helps a designer remove friction from a good habit can be used to prompt a person at the moment their motivation is high and ability low, which is how many dark patterns operate [@mathur2019dark; @luguri2021shining]. And the bias-corrected nudge evidence suggests that effort on ability and simplicity pays better than effort on motivational tricks [@maier2022no], which the model itself allows, since it puts ability and prompts on equal footing with motivation.

Used as a diagnostic, the model is valuable. When a learner stalls, there are three questions. Do they see why the step matters (motivation)? Is the step too hard or too long (ability)? Do they know what to do next (prompt)? For beginners, ability is the likeliest first suspect.

::: {.rule #DEC-062 grade="C"}
**When learners stall at a step, diagnose motivation, ability and prompt in that order of questions, and fix ability first: make the step smaller, give a tool, or make the next action obvious.** Fogg's model holds that behavior needs all three at once and that ability can be raised by training, tools or scaling back [@fogg2009behavior]; structural changes are the nudge category with the best surviving evidence [@maier2022no]. Graded C: the model is untested as a causal theory.

*In LTF:* the tools LTF already gives are the widgets, the checklist block, the copy buttons on "Sim setup" and the `Stopwatch`. A lesson where learners stop is first split into shorter blocks or given a widget, before any message is written to encourage them.
:::

::: {.rule #DEC-063 grade="C"}
**Never prompt a learner at a moment when their ability is low, and above all never while they are flying the sim.** A prompt that arrives when ability is low pushes action the person cannot carry out well, which is the moment dark patterns exploit [@fogg2009behavior; @mathur2019dark]. Graded C.

*In LTF:* `FlyModePage` shows no prompt unrelated to the flight. Toasts, sign-up prompts and any future notification are suppressed in `FlyModeLayout`. The Debrief sign-in callout appears after the flight, when the learner has attention to spare.
:::

::: {.rule #DEC-064 grade="C"}
**To build a habit, start from a very small, easy behavior, and measure whether it holds rather than assuming the model predicts it.** Fogg advocates scaling a behavior back until it is easy [@fogg2009behavior], but the model is not experimentally tested, so its predictions are hypotheses. Graded C.

*In LTF:* "Lesson 0.1 takes five minutes. Start there." is the right shape: a small first step. If regular practice is ever encouraged, the unit is one short lesson or one challenge attempt, not a weekly target.
:::

### Rewards, feedback and control

Persuasion in a learning product mostly takes the form of feedback and rewards: tiers, badges, progress bars, completion marks. The motivation research has a clear finding about their structure. Deci, Koestner and Ryan's meta-analysis of 128 studies found that rewards that are tangible and expected significantly undermined free-choice intrinsic motivation: engagement-contingent, completion-contingent and performance-contingent rewards had d = -0.40, -0.36 and -0.28 [@deci1999meta]. Positive verbal feedback enhanced both free-choice behavior (d = 0.33) and self-reported interest (d = 0.31). The effect of a reward depends on what it is contingent on and on whether it is experienced as controlling or as information about competence. The meta-analysis drew a long dispute (Cameron and Pierce had concluded rewards rarely harm), it rests mostly on short laboratory studies with children and students, and its d values are not forecasts for LTF. Its reasonable reading is that undermining is real and moderate, strongest for expected, contingent, tangible rewards on tasks people already enjoy, and absent or reversed for informational feedback.

Self-determination theory frames this as three needs, competence, autonomy and relatedness, whose support raises intrinsic motivation and internalization of values [@ryan2000selfdetermination]. Ryan and Deci list tangible rewards, threats, deadlines, directives and pressured evaluations as conditions that reduce intrinsic motivation, and optimal challenge, effectance-promoting feedback and freedom from demeaning evaluation as conditions that support it. Their continuum of regulation runs from external (acting for rewards or to avoid punishment) through introjected (acting to avoid guilt or protect self-worth) and identified (acting because one values the goal) to intrinsic. Guilt-driven copy aims at introjection; a stated reason aims at identification.

The classroom case most often cited against gamification is Hanus and Fox's semester-long comparison of a gamified course section (leaderboard, badges) with a non-gamified one [@hanus2015assessing]. Students in the gamified section showed less intrinsic motivation, satisfaction and empowerment over time and scored lower on the final exam, with the exam effect running through lower intrinsic motivation. It is one quasi-experiment comparing two sections, a correction to it was later published whose content was not retrieved, and the wider literature is mixed, so it is a cautionary case, not proof.

::: {.rule #DEC-065 grade="B"}
**Make feedback on attempts informational (what went well, what the numbers show, what to try next) and never controlling ("you must", "keep it up or lose it").** Positive informational feedback enhanced intrinsic motivation in the meta-analysis, while controlling feedback produced less than informational feedback in the studies it cites [@deci1999meta]; pressured evaluation undermines motivation in self-determination theory [@ryan2000selfdetermination]. Graded B: a meta-analysis, with a long-running dispute about rewards in general.

*In LTF:* the Debrief result card's "Criterion by criterion" rows are informational and should stay so. `QuizBlock`'s "Correct!" and "Not quite." are brief; the explanation that follows carries the information (DEC-012).
:::

::: {.rule #DEC-066 grade="B"}
**Award tiers and badges for demonstrated competence, with the competence named, and never as a currency for engagement or for simply finishing.** Engagement- and completion-contingent tangible rewards were the most undermining in the meta-analysis, while rewards that carry competence information fare better [@deci1999meta]. Graded B.

*In LTF:* `TierBadge` (Bronze, Silver, Gold) is performance-contingent and named for what it means ("did it safely"). Keep the criterion beside it. The `CourseBadge` is awarded for completing the course, and its sentence about what it is not keeps it informational. Do not add points, coins or unlocks for visiting or for marking lessons complete.
:::

::: {.rule #DEC-067 grade="B"}
**Show no public leaderboard; compare each learner only with their own earlier attempts.** A leaderboard introduces social comparison, and in the classroom case a leaderboard-and-badges section showed lower motivation and exam scores [@hanus2015assessing], consistent with self-determination theory's account of pressured evaluation [@ryan2000selfdetermination]. Graded B: one quasi-experiment plus theory, with mixed wider evidence.

*In LTF:* `HistoryTab` (a table of the learner's own attempts) and "Best: {TierBadge} {n}%" on `ChallengePage` are the right comparisons. If any social feature is proposed, it starts opt-in and private by default (DEC-020).
:::

::: {.rule #DEC-068 grade="B"}
**Use no streaks, deadlines or guilt messages to bring learners back.** Ryan and Deci name deadlines, threats and pressured evaluation as undermining intrinsic motivation [@ryan2000selfdetermination], guilt aims at introjected regulation, and loss frames manufacture risk (DEC-015) [@tversky1981framing]. Graded B.

*In LTF:* the product has no streaks today. "All caught up" on `DashboardPage` is a calm end state. Keep it that way.
:::

::: {.rule #DEC-069 grade="B"}
**Give the reason a step matters wherever the product asks the learner to do something effortful.** A rationale supports internalization toward identified regulation, which goes with persistence and better outcomes in self-determination research [@ryan2000selfdetermination]. Graded B.

*In LTF:* the objectives `Card` and the challenge "Goal" heading do this. "I'm set up, start flying" at the end of `BriefTab` is better when the brief states why the setup matters; the "Recommended lessons" list should say what each lesson prepares.
:::

### A test for persuasion

The rules in this Part reduce to one test that can be run on any screen. Imagine showing the learner a plain description of what the design is doing to their decision ("this button is bigger because we want you to sign up"; "this reminder is on by default because most people keep defaults"). If the learner would agree it serves them, the influence is persuasion. If they would object, it is manipulation, however mild. The test is ethical, not empirical, and it sits behind Thaler and Sunstein's requirement that a nudge be easy to avoid [@thaler2008nudge] and the FTC's concern with choices people "would not otherwise have made" [@ftc2022bringing].

::: {.rule #DEC-070 grade="C"}
**Before shipping any design meant to change what learners do, write one sentence telling the learner what it does to their decision, and ship it only if a learner reading that sentence would agree it serves them.** This is the disclosure test implied by the nudge definition and by the regulator's description of dark patterns as producing choices people would not otherwise make [@thaler2008nudge; @ftc2022bringing]. Graded C.

*In LTF:* the pull request template gets a line for this sentence. It extends DEC-038 from nudges to every persuasive element, including tier animations (`tier-pop`), progress rings and the Continue card.
:::

### What this means for Learn to Fly

Keep the informational debrief, the named tiers, the honest course badge, the private history, and the calm "All caught up" end state. Change the brief and recommended-lesson copy so each effortful step says why it matters. Build stall diagnosis around ability first (widgets, checklists, shorter blocks). Never add leaderboards, streaks, points for visiting, or prompts in Fly mode. Put the disclosure sentence in the pull request template.

