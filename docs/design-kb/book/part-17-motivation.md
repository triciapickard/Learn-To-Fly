# Motivation and Gamification

This Part covers why learners start, keep going and come back, and what interface devices (rewards, points, tiers, badges, streaks, leaderboards, progress displays, feedback messages, goals and difficulty) do to that. It draws on self-determination theory, the reward and feedback meta-analyses, goal-setting and self-efficacy research, flow and intrinsic-motivation theory from games, the gamification reviews and meta-analyses, and the evidence on persuasion and dark patterns. The evidence is uneven in a specific way. The strongest findings are about feedback and reward structure, where meta-analyses of many experiments exist and their disagreements are well mapped. The gamification literature is large but young: most studies bundle several elements, run for days rather than months, and report "positive" or "mixed" results without effect sizes, so almost no individual mechanic (a streak, a badge, a leaderboard) has strong evidence for or against it. Motivation theories (self-determination, flow, self-efficacy) are well developed but were built and tested largely by their own authors, often with self-report measures.

Use the Part in two ways. When someone proposes a motivational feature for Learn to Fly, find the chapter that covers its mechanism, read the rules and their grades, and write the hypothesis and test the chapter "Measuring motivation honestly" asks for. When reviewing copy or a results screen, run the checklist in the last chapter. The governing idea is that LTF already has a game: the simulator. The design work is to make flying in it feel achievable and informative, and to keep the web pages from bribing, pressuring or distracting a learner who in most cases arrived wanting to fly.

## Motivation has a type, not only an amount

### The three needs

Self-determination theory (SDT) holds that the social context of an activity either supports or thwarts three innate psychological needs: competence (feeling effective), autonomy (feeling that what you do is your own choice) and relatedness (feeling connected to others) [@ryan2000selfdetermination]. When the needs are supported, people show more intrinsic motivation, take in the values of an activity more fully and report better well-being; when they are thwarted, motivation becomes controlled or lapses. The paper's second claim is the one designers most often miss: motivation is not a single quantity to be raised. Its type, autonomous or controlled, predicts the quality of engagement and its outcomes better than how much of it there is. A learner who logs in every day because a streak counter will reset is highly "engaged" in the quantity sense and poorly motivated in the quality sense.

Cognitive evaluation theory, one of SDT's mini-theories, explains how specific events change intrinsic motivation. Events act through perceived competence and perceived autonomy. Optimal challenges, feedback that promotes a sense of effectiveness, and freedom from demeaning evaluation tend to support intrinsic motivation. Tangible rewards, threats, deadlines, directives and pressured evaluations tend to reduce it, because they move the perceived cause of the behavior outside the person [@ryan2000selfdetermination]. This list is the shortest useful screen for any interface device: does it work by making the person feel more able, or by making them feel watched, paid or hurried?

::: {.rule #MOT-001 grade="B"}
**Before shipping any motivational device, name which of competence, autonomy and relatedness it supports and check that it does not work through pressure, payment or surveillance.** Self-determination theory identifies the three needs and lists tangible rewards, threats, deadlines, directives and pressured evaluation as events that lower intrinsic motivation by shifting the perceived cause of behavior outside the person [@ryan2000selfdetermination]. The underlying evidence is a large body of experiments and correlational studies, mostly from the theory's own group and often with self-report measures, so grade B, not A.

*In LTF:* every proposal for `DashboardPage`, `ResultView` or a future practice page states the need it serves in one line. A proposal that can only be justified by "it makes people come back" fails this screen.
:::

### The regulation continuum

Organismic integration theory, a second mini-theory, lays out a continuum of reasons for acting, which is the most reusable framework in the paper for writing copy [@ryan2000selfdetermination]. At one end is amotivation, no intention to act. Then external regulation: acting for a reward or to avoid punishment. Then introjected regulation: acting to avoid guilt or anxiety or to protect self-worth, which comes from inside but is still pressured. Then identified regulation: acting because you value the goal. Then integrated regulation, where the value has become part of the self. At the far end is intrinsic motivation, interest and enjoyment in the activity itself. Internalization is the movement along this continuum toward the autonomous end, and the paper reports that support for autonomy, competence and relatedness promotes it. More internalized motivation went with better persistence and well-being in the education and health studies the paper cites.

The continuum gives a test for every line of motivational copy. "Do not break your streak" works at the introjected level: it recruits guilt. "Finish today to earn a badge" is external. "This is the check that tells you the airplane is ready, so you can fly the pattern you came here to fly" is identified: it gives a reason the learner can adopt as their own. For learners who arrive intrinsically motivated, which is most of LTF's audience, copy at the external or introjected level can only move them backward.

::: {.rule #MOT-002 grade="B"}
**Write motivational copy at the identified level: give the reason a step matters for the learner's own flying, never a reward to earn or a loss to avoid.** The regulation continuum separates external and introjected reasons (rewards, guilt, self-worth) from identified ones (valuing the goal), and the paper reports that more internalized regulation goes with better persistence and well-being [@ryan2000selfdetermination]. The continuum is a theoretical framework; the outcome evidence is mostly correlational.

*In LTF:* the objectives card on `LessonPage` ("In this lesson you will") and the "What you'll be able to do" card on `ModulePage` are the right home for identified reasons. Copy such as "keep your streak" or "earn your wings" does not appear on those surfaces.
:::

::: {.rule #MOT-003 grade="B"}
**Give a one-sentence rationale wherever the product asks the learner to do something they did not choose.** SDT names a rationale as a support for internalization [@ryan2000selfdetermination], and goal-setting research found that an assigned goal works about as well as a participatively set one when a rationale is given, while a terse "Do this" produced significantly lower performance [@locke2002building]. Two independent research programmes point the same way, but neither tested product copy.

*In LTF:* the "Sim setup" list in `BriefTab` and any required criterion in "How you'll be scored" carry a short "why" line. A required checklist step that the learner may find tedious says what it protects against.
:::

### Autonomy without abandonment

Autonomy in SDT does not mean independence or the absence of structure. It means the learner experiences their actions as self-endorsed [@ryan2000selfdetermination]. A learner can follow a strict sequence autonomously if they understand and accept its purpose, and can feel controlled by a free-form menu if every option is accompanied by pressure. The practical supports are choice where choice is real, explanation where it is not, and an absence of controlling language. The paper's list of autonomy-thwarting events (deadlines, directives, pressured evaluations) should be read against interface conventions that are now normal: countdown banners, "you must complete this to continue" interstitials, red warning badges on incomplete items, and messages timed to the hour a learner usually opens the app.

Choice has limits that belong to another Part (choice overload is covered under Decisions, Persuasion and Dark Patterns). For motivation the point is narrower: offer the choices that matter to the learner (what to fly next, whether to see a hint, whether to retry or move on) and remove choices that only add work.

::: {.rule #MOT-004 grade="C"}
**Offer real choices about what to fly next, whether to take a hint and whether to retry, and do not lock content to force a sequence the learner could safely skip.** Autonomy support in SDT includes choice and the absence of controlling demands [@ryan2000selfdetermination], and the games research from the same group found perceived in-game autonomy associated with enjoyment and wanting to play again [@przybylski2010motivational]. The transfer from games to a course is an inference, and no study tested lesson locking, so this is graded C.

*In LTF:* keep the current pattern in which `CurriculumMap` shows every module and lesson, `LessonPath` marks one stop as current without locking the rest, and `ChallengesPage` lets the learner filter by module, type, difficulty and status. The `locked` state of `Card` and `LessonPath` is reserved for content that genuinely depends on an earlier skill, and its copy says which.
:::

### Relatedness in a solo product

Relatedness is the hardest need for a web app used alone beside a simulator. SDT treats it as especially important for internalization: people take on the values of those they feel connected to [@ryan2000selfdetermination]. The games research found that autonomy, competence and relatedness independently predicted enjoyment and future play in an online multiplayer community [@przybylski2010motivational]. But LTF's v1 plan puts social features, including leaderboards, comments and sharing, out of scope (`v1.md`, the out-of-scope list), and the evidence on competitive social features is the subject of the chapter on points, badges and leaderboards.

That leaves the quieter forms of relatedness, which cost little and carry no comparison: an instructor's voice in the copy (the plan describes the voice as a calm instructor), honest statements that a step is hard for most people, and the sense that the product's makers are present and accountable. The BetaBanner's "Report a problem" link and the visible verification dates are small but real signals that someone is listening.

::: {.rule #MOT-005 grade="C"}
**Meet the relatedness need through an instructor's voice and honest normalizing statements before considering any social feature.** Relatedness supports internalization [@ryan2000selfdetermination], and the social features that might serve it most directly are the ones with the most mixed evidence (see MOT-018 and MOT-019). Instructor voice as a relatedness support is a reasonable inference from the theory, not a tested intervention, so grade C.

*In LTF:* lesson and debrief copy may say "most people find the flare hard at first" where a lesson author can support it, keeps the calm-instructor voice described in `v1.md`, and keeps the "Report a problem" path in `BetaBanner` visible. Any future community feature goes through MOT-019, MOT-020 and MOT-067.
:::

### What this means for Learn to Fly

LTF's audience is self-selected. Nobody is required to learn to fly a Cessna in a simulator, and the product is free, so the learner who reaches `LessonPage` usually arrives at the autonomous end of the continuum. The design task is therefore less about generating motivation than about not converting it into the controlled kind. Keep: the open curriculum in `CurriculumMap`, the non-locking `LessonPath`, the choice of filters on `ChallengesPage`, the calm instructor voice, and the honesty devices (`BetaBanner`, `DraftBadge`, verification dates) that make the makers present. Change: wherever copy asks the learner to do something, add the identified reason (MOT-002, MOT-003), starting with the "Sim setup" and required criteria in `BriefTab`. Build nothing whose only rationale is return frequency until it has passed MOT-001. When `v2.md` adds practice pages, the streak and reminder features specified there ("no guilt messaging", reminders on the dashboard only) fit this chapter's reading, and the chapter on habits and return visits sets the limits that keep them there.

## Rewards and the overjustification effect

### The founding experiment

The overjustification hypothesis comes from self-perception theory: people infer their own motives partly by watching their own behavior, so when a salient external reward seems sufficient to explain why they did something, they attribute the behavior to the reward and not to their own interest. Lepper, Greene and Nisbett tested this in a nursery school [@lepper1973undermining]. They observed children unobtrusively during baseline sessions and selected only those who already showed high interest in drawing with felt-tip markers. Fifty-five children took part and 51 were analyzed. In the expected-award condition each child was shown a "Good Player Award" card (a star, a ribbon and the child's name) and asked whether they wanted to draw to win it. In the unexpected-award condition the child drew with no mention of an award and received the same card afterward. In the no-award condition there was nothing. Each child drew for six minutes.

Seven to 14 days later, observers who did not know the conditions recorded how much free-choice classroom time each child spent with the markers. The expected-award group spent 8.59 percent of free time drawing, the no-award group 16.73 percent and the unexpected-award group 18.09 percent. The contrast between the expected-award group and the other two was significant, and within the expected-award group interest fell significantly from baseline while the others rose slightly. Judges blind to condition also rated the pictures drawn during the session: expected-award pictures averaged 2.18 on a five-point scale against 2.85 and 2.69, although the children drew a similar number of pictures [@lepper1973undermining].

The unexpected-award group is the decisive control. Those children received the identical object and were not harmed. What reduced later interest was drawing in order to get the award. The quality result matters as much as the interest result for a skill product: doing a task for a pre-announced prize went with careless work.

The study's limits are clear. It is one small field experiment with young children, one activity and one reward type, in a classroom where movement was restricted, which the authors themselves flag. Its data also suggest that children with low initial interest were not harmed, so the caution applies most to people who arrive motivated [@lepper1973undermining].

### The structure of a reward decides its effect

Deci, Koestner and Ryan pooled 128 experiments in a field where four earlier meta-analyses had disagreed, and argued that averaging all "rewards" together hides the variable that matters: the reward's structure [@deci1999meta]. Cognitive evaluation theory predicts that a reward acts through two channels, how much it feels like control and how much it tells the person about their competence. Which dominates depends on what the reward is contingent on and how it is delivered.

The paper defines four contingencies. Task-noncontingent rewards are given regardless of what the person does. Engagement-contingent rewards are given for doing the task. Completion-contingent rewards are given for finishing it. Performance-contingent rewards are given for reaching a standard or doing well. The authors predicted that engagement-contingent rewards would be the most clearly controlling, and that the effect of performance-contingent rewards would depend on whether they carried competence information and how pressuring the interpersonal climate was.

The primary analyses used interesting tasks only, because undermining concerns activities people already like. On those tasks, engagement-contingent, completion-contingent and performance-contingent rewards all significantly undermined free-choice intrinsic motivation (d = -0.40, -0.36 and -0.28). All rewards, all tangible rewards and all expected rewards undermined it too. Engagement- and completion-contingent rewards also lowered self-reported interest, though less (d = -0.15 and -0.17). Positive verbal feedback did the opposite: it enhanced free-choice behavior (d = 0.33) and self-reported interest (d = 0.31). Tangible rewards tended to be more detrimental for children than for college students, and verbal rewards less enhancing for children. The paper also cites two studies in which positive feedback delivered in a controlling way produced less intrinsic motivation than the same feedback delivered informationally [@deci1999meta].

Hattie and Timperley add a framing that makes the result easy to apply: tangible rewards are contingencies, not feedback, because they carry little information about the task [@hattie2007power]. A coin for finishing a lesson tells the learner nothing they did not already know.

::: {.rule #MOT-006 grade="A"}
**Do not give points, currency, unlocks or other tangible rewards for opening, doing or finishing a lesson.** Engagement- and completion-contingent rewards undermined free-choice intrinsic motivation on interesting tasks across 128 experiments (d = -0.40 and -0.36), and expected tangible rewards undermined it generally [@deci1999meta]; the founding field experiment showed the same pattern and a drop in work quality [@lepper1973undermining]. The effect is replicated across many studies but disputed in size (see the debate below), and it is strongest for people who already find the activity interesting, which describes most LTF learners.

*In LTF:* "Mark lesson complete" in the lesson completion panel records progress and nothing else. No XP, coins, or unlock count is ever attached to it, to `QuizBlock` answers or to page visits.
:::

::: {.rule #MOT-007 grade="B"}
**Never announce a badge, tier or award as the reason to do a lesson or challenge; describe the skill, and let recognition arrive after the attempt.** The expected-award children lost interest while the unexpected-award children, who got the same card, did not [@lepper1973undermining]; across the meta-analysis expected rewards undermined and unexpected ones did not show the same harm [@deci1999meta]. The evidence for timing comes mainly from the expected versus unexpected contrast, with limited direct tests in adult courses.

*In LTF:* the challenge brief in `BriefTab` states the goal and how the flight is scored, which learners need (see MOT-025), but does not frame the tier as the prize ("Win Gold"). The `CourseBadge` is never shown as a teaser on `CurriculumMap` or the landing page before the course is complete.
:::

### The debate and how far to trust it

The reward literature was openly contested, and a design rule should carry the dispute with it. Cameron and Pierce (1994) and Eisenberger and Cameron (1996) concluded that rewards rarely harm intrinsic motivation and can be used safely. Deci and colleagues argued in the 1999 paper that those analyses collapsed across important moderators, pooled dull and interesting tasks, and defined contingency categories differently; in the same journal issue Lepper, Henderlong and Gingras judged the literature better captured by the moderator view, and the exchange continued into 2001 [@deci1999meta; @lepper1973undermining]. Two further cautions apply. The effect sizes are small to moderate, with self-report effects smaller than behavioral ones. And they come from short laboratory sessions with children and students, not from adults practicing a hobby over weeks. Do not treat any d value here as a prediction for LTF.

The defensible reading is that undermining is real under specific conditions (an already interesting activity, a tangible reward, expected, framed as payment for doing the task) and absent or reversed for informational feedback and unexpected recognition. "All rewards are bad" overstates it; "rewards are harmless" ignores the moderators.

::: myth
**"Rewards always kill intrinsic motivation."** The claim overgeneralizes a conditional finding. In the 1999 meta-analysis, positive verbal feedback enhanced both free-choice behavior and self-reported interest, and the harm was concentrated in expected, tangible, contingent rewards on interesting tasks [@deci1999meta]. In the founding experiment the unexpected award did no harm [@lepper1973undermining]. Whether a reward hurts depends on its structure and on whether it carries information.
:::

::: myth
**"Rewards are harmless because motivation goes up while they are in place."** Undermining is measured after the reward stops, in what the person chooses to do when no longer required. That is why the founding study measured free-choice time one to two weeks later [@lepper1973undermining], and why the meta-analysis treats free-choice behavior as the primary outcome [@deci1999meta]. A rise in activity during a reward programme says nothing about interest once it ends.
:::

### Performance-contingent recognition: the narrow safe path

LTF's Gold, Silver and Bronze tiers are performance-contingent: they depend on reaching a standard. The meta-analysis found performance-contingent rewards undermining on average (d = -0.28), but predicted their effect would depend on whether they carry competence information and how pressuring the climate is [@deci1999meta]. That gives the tiers a narrow path to being safe: they must work as information about what the learner did, delivered without pressure.

Three properties keep a performance-contingent signal on the informational side. It is tied to a stated criterion, so it tells the learner what they achieved. It is reported after the activity, so the activity is not done for it. And the language around it is neutral rather than controlling ("Gold on touchdown point" rather than "you must get Gold"). The paper's citation of two studies in which controlling positive feedback lowered intrinsic motivation relative to informational feedback shows that wording alone can tip the balance [@deci1999meta].

::: {.rule #MOT-008 grade="B"}
**Make every performance tier say which criterion it reflects, and report it after the flight in neutral language.** Performance-contingent rewards undermined intrinsic motivation on average, with the effect predicted to depend on competence information and a non-pressuring climate, and controlling delivery of positive feedback lowered motivation relative to informational delivery [@deci1999meta]. The moderators were coded from studies rather than manipulated in one design, so grade B.

*In LTF:* keep the `ResultView` structure, in which the overall `TierBadge` is followed by "Criterion by criterion" rows that name each criterion and its result. Keep the tier descriptions that the debrief radio cards show from the challenge content (`c.tiers.gold` and so on), because they make a tier a description of a flight, not a medal.
:::

::: {.rule #MOT-009 grade="C"}
**Avoid controlling language around results: no "must", "don't stop now" or "keep it up" in result, dashboard or reminder copy.** The meta-analysis reports that controlling delivery turned positive feedback into a weaker motivator [@deci1999meta], and SDT lists directives and pressured evaluation among events that lower intrinsic motivation [@ryan2000selfdetermination]. No study tested these specific phrases, so grade C.

*In LTF:* "Passed. Fly it again to push for a higher tier." in `ResultView` is acceptable as an invitation; "Fly again" stays a choice beside "Next" and "See all attempts". Do not add copy such as "Don't settle for Bronze".
:::

### Rewards and quality of practice

The founding study's quality result deserves its own rule for a product about careful procedure. Children drawing for an expected award produced lower-rated pictures [@lepper1973undermining]. If LTF tied a reward to speed of finishing a checklist or the number of challenges flown, the prediction is the same: more volume, less care. Goal-setting research adds a parallel warning: difficult performance goals increased the riskiness of strategies in a computer game [@locke2002building]. A device that pays for throughput teaches the learner that throughput is the point, and in a procedure-heavy course throughput is exactly what should not be the point.

::: {.rule #MOT-010 grade="B"}
**Never reward speed or volume of practice; reward nothing that a learner could improve by being less careful.** Expected reward lowered the rated quality of work while leaving quantity unchanged [@lepper1973undermining], and goal-setting research warns that difficult performance goals can increase risky strategies [@locke2002building]. The quality evidence is a single small study plus indirect support.

*In LTF:* the optional `Stopwatch` in `FlyPanel` stays optional and never feeds a score. The dashboard "Attempts" tile counts attempts as a record, and no badge or tier is ever awarded for a number of attempts or a time taken.
:::

### Who is most at risk

The undermining effect applies to tasks people already find interesting, and the founding study suggests low-interest children were not harmed [@lepper1973undermining]. Deci and colleagues set dull tasks aside for the same reason [@deci1999meta]. This means the risk is not spread evenly across LTF. It is highest on the parts learners came for (flying challenges, interactive widgets) and lowest on parts many find dull (account setup, settings checklists). Even on dull parts, the better tool is a rationale (MOT-003), because it promotes internalization without teaching the learner that the task is something one is paid to do.

::: {.rule #MOT-011 grade="B"}
**Treat the in-sim challenges and widgets as the surfaces where extrinsic devices are most likely to backfire, and keep them free of any reward layer.** Undermining concerns interesting activities, and learners who started with high interest showed the drop [@lepper1973undermining; @deci1999meta]. The population inference to adult aviation hobbyists is reasonable but untested.

*In LTF:* `WidgetFrame` keeps its Explore and "Quiz me" modes without scores, counters or streaks. `FlyPanel` and `FlyModePage` show steps, the timer and events, and nothing that resembles points.
:::

### What this means for Learn to Fly

LTF is already on the right side of this evidence in most places. There is no XP, no coin, no unlock count; "Mark lesson complete" only records progress; the `CourseBadge` is drawn as a record and always carries the "not a pilot certificate" wording. Keep all of that, and add MOT-006 to the review template so a future contributor cannot add lesson points without meeting the rule. The tiers are the one performance-contingent device, and they are mostly safe because `ResultView` reports them per criterion after the debrief and the debrief radio cards describe what each tier means. Two changes are worth making. First, review landing and brief copy for any framing of tiers as a prize; the landing line "Bronze means you did it safely. Gold is checkride-ready." describes standards, which is acceptable, but marketing that says "earn Gold" would not be. Second, audit the dashboard stat "Gold results": a count of golds is closer to a trophy shelf than to information, and the chapter on points, badges and leaderboards suggests replacing it with a per-skill view of improvement.

## What gamification is, and what the evidence shows

### A definition that excludes the simulator

The working definition of gamification is "the use of game design elements in non-game contexts" [@deterding2011from]. It has three parts: use (of elements, not whole games), game design elements (things characteristic of games), and non-game contexts (purposes other than entertainment). The definition separates gamification from a complete game built for a serious purpose, and from games made for fun. Deterding and colleagues traced the term's spread through consumer software and positioned it against serious games, pervasive games, alternate reality games and playful design. The paper is a definition paper and tests nothing.

The first author later qualified it. In a 2012 post he wrote that he had grown more sceptical about what a "game design element" could be, and in a 2014 chapter he argued that game design elements cannot be cleanly distinguished from other design elements: patterns sold by gamification platforms, such as notification streams, come from social software, while the real concerns of game design, interestingly hard challenges and meaningful choices, are often missing from gamification practice [@deterding2011from]. He argued that motivational experiences emerge from the relation between people and their environment, so motivational design should concern whole systems rather than elements with presumed fixed effects. A competing 2011 definition by Huotari and Hamari frames gamification as enhancing a service with affordances for gameful experience, which shifts the focus from elements to experience. Critics such as Ian Bogost went further and called the practice "exploitationware" [@deterding2011from].

The definition matters for LTF in a precise way. Flying a challenge in Microsoft Flight Simulator 2024 is not gamification: the simulator is the activity, and the challenge has its own goals, choices and consequences. Adding points and badges to a lesson page would be gamification. The two have different evidence bases and should not be argued about together.

::: {.rule #MOT-012 grade="C"}
**Never write "gamification" as a goal in a spec; name the mechanic (tier, progress ring, streak, badge) and the need it serves.** The term bundles many different devices, its own author doubts that "game design element" can be pinned down, and he recommends designing for the motivational experience of the whole system [@deterding2011from]. This is a conceptual recommendation, not a tested one.

*In LTF:* a ticket that says "gamify the dashboard" is rewritten as, for example, "show per-skill improvement across attempts on `DashboardPage` to support competence (MOT-001)".
:::

::: {.rule #MOT-013 grade="C"}
**Put motivational design effort into the in-sim challenges, which are already a game, before decorating web pages.** The 2014 critique argues that standard gamification omits the parts of game design that create motivation, interestingly hard challenges and meaningful choices [@deterding2011from], and the games research locates engagement in competence and autonomy during play [@przybylski2010motivational]. Grade C: a design argument from theory.

*In LTF:* improvements to scenario variety, criteria and debrief quality in `ChallengePage` come ahead of any new badge, counter or animation on `DashboardPage` or `LessonPage`.
:::

### The first review: positive, conditional and weak

Hamari, Koivisto and Sarsa reviewed peer-reviewed empirical gamification studies and found 24 papers [@hamari2014gamification]. Their abstract states that gamification provides positive effects, but that the effects depend greatly on the context and on the users. Points, leaderboards and achievements or badges were by far the most tested (in nine, ten and nine papers), followed by levels, story or theme, clear goals, feedback, rewards, progress and challenge. Most studies measured behavior (use, activity); the studies of psychological outcomes mostly used interviews and questionnaires, and only one used validated psychometric measures.

The results were conditional: a majority reported positive effects, but "only two studies found all of the tests positive" [@hamari2014gamification]. Many quantitative papers were descriptive and could not infer an effect at all. In education, the most common context, learning outcomes were mostly positive, but studies also flagged negatives: increased competition, difficulty evaluating tasks, and design problems. Some studies suggested effects were short-lived and possibly due to novelty. One reported that removing gamification could harm users who were still engaged by it, possibly through loss aversion at losing earned badges and points. In the IBM Beehive studies, some users wanted to top the leaderboard, others were content to appear on it, and some found competitive features negative.

The authors list the limitations themselves: samples around N = 20 in some studies, no validated measures, missing control groups, no controls between affordances so individual elements could not be isolated, descriptive statistics, very short timeframes and unclear reporting [@hamari2014gamification].

### The larger review: mostly positive, remarkably mixed

Koivisto and Hamari updated the review with 819 studies up to June 2015 [@koivisto2019rise]. Their abstract says results lean toward positive findings but that the amount of mixed results is remarkable. To keep to tested hypotheses they analyzed results only for the 66 controlled experimental quantitative studies, out of 227 quantitative or mixed-method studies. In those 66, the median sample was 74.5 and the range 1 to 42,724. Fully positive findings appeared in 28.7 percent, mixed but mainly positive in 47.0 percent, and fully negative results in only two studies. In education and learning (28 studies), 35.7 percent were fully positive and 32.1 percent mixed but mostly positive. Most studies tested several affordances at once, so points, badges and leaderboards could not be separated.

The authors conclude that the mixed results support the earlier view that gamification is not a silver bullet, flag possible publication bias given how few studies reported fully negative results, and set out an agenda: consistent measures, more controlled experiments, controls for individual affordances, larger samples and longer timeframes to see past novelty, and clear reporting [@koivisto2019rise]. Because the review tallies studies as positive or mixed, it cannot say how large any effect is.

### The meta-analysis: small effects, and motivation is the weakest

Sailer and Homner pooled experimental and quasi-experimental studies of gamification in learning [@sailer2020gamification]. The random-effects estimates were cognitive g = .49 (95% CI 0.30 to 0.69, k = 19, N = 1686), motivational g = .36 (95% CI 0.18 to 0.54, k = 16, N = 2246) and behavioral g = .25 (95% CI 0.04 to 0.46, k = 9, N = 951). Heterogeneity was substantial (I2 of 72.21 percent for cognitive and 75.13 percent for motivational outcomes). The authors checked publication bias and found no strong sign of it.

The robustness check is the part to remember. When only experimental or pre/post quasi-experimental studies were kept, the cognitive effect held (g = .42, 95% CI 0.14 to 0.68, k = 9, N = 686), but the motivational effect was no longer significant (g = .22, 95% CI -0.11 to 0.56, k = 7) and neither was the behavioral one (g = .27, 95% CI -0.16 to 0.70, k = 5) [@sailer2020gamification]. Quasi-experimental studies found significant motivational and behavioral effects while experimental ones did not. The subsets were small and probably underpowered, so this is not proof of no effect, but it means the motivational claim, the one most gamification is sold on, is the least secure. A further caution from a critique noted in this lane: the "motivational outcomes" category lumped intrinsic motivation, attitudes, engagement, confidence and self-efficacy, so it is not a clean measure of intrinsic motivation. The authors list the persistence of effects after an intervention ends as an open question.

Two moderators are relevant to LTF and are covered in later chapters: game fiction moderated behavioral outcomes, and combining competition with collaboration was particularly effective for them. Both are post hoc, which the authors say explicitly, so they are hypotheses.

::: myth
**"Gamification increases motivation."** The best pooled estimate for motivational outcomes in learning was significant across all studies but not significant once the analysis was restricted to the more rigorous designs [@sailer2020gamification]; across 66 controlled experiments in the larger review, fewer than a third were fully positive [@koivisto2019rise]; and in the first review only two of 24 studies found all tests positive [@hamari2014gamification]. The honest statement is that some gamified designs, in some contexts, for some users, have shown small benefits, most clearly on learning outcomes.
:::

::: {.rule #MOT-014 grade="A"}
**Do not justify a feature by "gamification raises motivation"; any motivational mechanic needs its own hypothesis and its own test in LTF.** Three independent syntheses agree that results are mixed and context-dependent, that individual elements are rarely isolated, and that the motivational effect is the least robust [@hamari2014gamification; @koivisto2019rise; @sailer2020gamification]. The grade reflects the agreement of the syntheses on this negative point, not evidence for any mechanic.

*In LTF:* a proposal for a streak, badge set or progress animation includes the one-line hypothesis and evaluation plan required by the chapter "Measuring motivation honestly" (MOT-067).
:::

### Novelty and the cost of removal

Two warnings recur across the reviews. Effects may fade as novelty wears off [@hamari2014gamification; @koivisto2019rise], and once a feature exists, removing it may hurt the users who relied on it [@hamari2014gamification]. The novelty warning is older than gamification. Clark's review of media comparisons found that the average effect of computer-based instruction in secondary schools was 0.56 for studies lasting four weeks or less, 0.3 for five to eight weeks and about 0.2 beyond eight weeks [@clark1983reconsidering]. A gain that shrinks by more than half as the study lengthens is what novelty looks like in data.

For a hobby course that runs over weeks, novelty fade is the expected case, not a risk at the edges. Koivisto and Hamari single out long-term commitment domains such as health and learning as the ones where it matters most [@koivisto2019rise].

::: {.rule #MOT-015 grade="B"}
**Judge any motivational feature on data collected after at least several weeks of use, not on its launch week.** Gamification effects may reflect novelty [@hamari2014gamification; @koivisto2019rise], and in Clark's synthesis the average computer-instruction effect fell from 0.56 in studies of four weeks or less to about 0.2 beyond eight weeks [@clark1983reconsidering]. The novelty evidence is consistent but comes from older media studies and short gamification trials.

*In LTF:* any evaluation of a new dashboard element on `DashboardPage` or a future practice streak compares cohorts after the novelty window, and reports first-week numbers separately.
:::

::: {.rule #MOT-016 grade="B"}
**Do not launch a game layer you are not prepared to keep; removing earned points, badges or streaks can harm the people who valued them.** The first review reports that removing gamification could harm users still engaged by it, possibly through loss aversion at losing what they had earned [@hamari2014gamification]. One study is the basis, so grade B at most, but it is consistent with the loss-framing evidence in the chapter on habits and return visits.

*In LTF:* best tiers shown in `HistoryTab`, `TierBadge` and the `CourseBadge` are permanent records. If a challenge rubric changes (the `DebriefForm` already handles "This challenge was updated"), earlier results stay visible with their original rubric rather than being silently reset.
:::

### Context and users decide

Every synthesis here says the effect depends on the context and the user [@hamari2014gamification; @koivisto2019rise; @sailer2020gamification]. The first review notes that the largest studies suggested gamification might not work in a utilitarian service, and that sporadic users may not engage with a persistent game layer at all [@hamari2014gamification]. Both apply to LTF. Its reference pages are utilitarian (`/reference/speeds` is a lookup, not a pastime), and many learners will open the product weekly or less, around sim sessions. A persistent game layer designed for daily visitors would mostly be noise for them.

::: {.rule #MOT-017 grade="C"}
**Keep the reference pages entirely free of game elements.** The first review reports that the largest studies suggested gamification may not be effective in utilitarian services, and that context determines effects [@hamari2014gamification]. This is a cautious inference from a few large studies, so grade C.

*In LTF:* `ReferenceHubPage`, `SpeedsPage`, the checklists, airports and kneeboard show no progress, tier, badge or counter. "Most looked up" chips are navigation, not a score.
:::

### What this means for Learn to Fly

The evidence does not support a gamification layer as a motivational strategy for LTF, and it does not forbid one either. What it supports is a modest, test-first stance and a sharp distinction between the simulator, which is the game, and the web pages around it. Keep the current absence of points, levels and a global score. Keep the tiers, since they belong to the challenge itself (they describe the quality of a flight) rather than being decoration on a page. Change the way features are proposed: the word "gamification" leaves the vocabulary in specs (MOT-012), and each proposed mechanic arrives with a hypothesis and a test plan (MOT-014). Build the challenge experience first (MOT-013): scenario variety, clearer criteria and better debriefs in `ChallengePage` will do more for motivation, by every theory in this Part, than any badge on `DashboardPage`. Keep `/reference` pages free of game elements (MOT-017), because they are tools used mid-flight.

## Points, badges, tiers and leaderboards

The reviews say the effects of individual elements cannot be separated in most studies [@hamari2014gamification; @koivisto2019rise]. This chapter therefore does not claim that any one element "works". It reasons from the structure of each element (what it rewards, what it compares, what it makes salient) to the theories with better evidence, and it uses the few studies that come close to the LTF case.

### The closest cautionary case

Hanus and Fox ran a semester-long quasi-experiment in a university course: one section got a gamified version with a leaderboard and badges (and coins, per a dissertation describing the study) on the course learning management system, another got the same curriculum without them [@hanus2015assessing]. Measures were taken at four points through the 16-week semester. Over time, students in the gamified section showed less intrinsic motivation, satisfaction and empowerment than the comparison section, and scored lower on the final exam, with the effect on exam scores running through lower intrinsic motivation. The authors concluded that care is needed when applying certain gamification mechanics to education.

The study has real weaknesses. It compared two course sections, and the secondary accounts do not describe random assignment, so instructor, timing and student mix may contribute. Accounts of the sample size differ, so no number is given here. A corrigendum was published in 2018, and this book's research could not retrieve what it changed, so the exact statistics should not be quoted without reading it. The design also bundled a leaderboard (social comparison) with badges and coins (rewards), so it cannot say which hurt [@hanus2015assessing]. The wider literature includes positive and neutral results, and the meta-analytic picture is small positive effects with nonrobust motivational ones [@sailer2020gamification]. Hanus and Fox is a warning, not a verdict. Its mechanism is plausible, though: later authors treat badges as resembling performance-contingent rewards, which undermined intrinsic motivation on average in the reward meta-analysis [@deci1999meta].

The finding that matters most for a product team is the shape of the harm. An engagement metric can rise while learning falls, and the mechanism linking them can be motivation itself.

::: {.rule #MOT-018 grade="B"}
**Do not show a public leaderboard or any ranking of learners against each other.** In the closest classroom test, a section with a leaderboard and badges showed declining intrinsic motivation, satisfaction and empowerment and lower exam scores, mediated by intrinsic motivation [@hanus2015assessing]; the first gamification review recorded learners who found competitive features negative [@hamari2014gamification]; formative-feedback guidance lists normative comparison among the things to avoid [@shute2008focus]. One quasi-experiment plus consistent indirect evidence gives grade B.

*In LTF:* keep v1's exclusion of leaderboards. `HistoryTab`, `ResultView` and `DashboardPage` compare a learner only with their own earlier attempts.
:::

### Leaderboards and the shape of competition

Leaderboards are the element with the clearest social cost, because they introduce comparison with others. The first review's Beehive example shows the spread of reactions: some users wanted the top spot, some were satisfied just to appear, and some disliked competition [@hamari2014gamification]. A board can only satisfy the first group, and only while they are winning. Sailer and Homner distinguish destructive competition, succeeding by tearing others down, from constructive competition, good natured and encouraging mutual support, and argue from SDT that competition alone can thwart relatedness while competition combined with collaboration can support it [@sailer2020gamification]. In their data, combining competition with collaboration was particularly effective for behavioral outcomes, a post hoc moderator result.

For LTF the conclusion is not "competition is always bad" but that the only form with any support is cooperative, and the default is none. A learner flying alone beside a simulator gains nothing from knowing where they rank, and loses a great deal if the rank tells them they are slow.

::: {.rule #MOT-019 grade="D"}
**If a social feature is ever added, frame it as cooperation (shared goals, helping) rather than rank, and make it opt-in and private by default.** Sailer and Homner found competition combined with collaboration particularly effective for behavioral outcomes, but as a post hoc moderator in a heterogeneous literature [@sailer2020gamification]; user reactions to competitive features vary widely [@hamari2014gamification]. The evidence is thin and partly conflicting, so grade D: a hypothesis to test, not a rule to rely on.

*In LTF:* out of scope for v1 and v2. Any future proposal goes through MOT-014 and MOT-067 and names the cooperative structure.
:::

::: {.rule #MOT-020 grade="C"}
**Make every form of social visibility opt-in, with private as the default.** Reactions to visibility and rank differ between users [@hamari2014gamification], and privacy-protective defaults are the regulator's recommendation for any data-sharing choice [@ftc2022bringing]. A combination of indirect evidence and regulatory guidance, so grade C.

*In LTF:* nothing about a learner's attempts, tiers or progress is visible to anyone else. A future share feature (for example sharing a `CourseBadge`) is a deliberate per-item action, never a default.
:::

### Badges and achievements

A badge is a performance-contingent or completion-contingent reward with a picture. Its effect, by the reward evidence, depends on whether it carries competence information and whether it was the reason for the activity [@deci1999meta]. Sailer and Homner cite work in which the effects of achievements depended on their quantity and difficulty [@sailer2020gamification]: a wall of easy badges is a different intervention from a few hard ones. Hattie and Timperley's point that rewards carry little task information means a badge cannot replace feedback [@hattie2007power].

LTF has one badge: the `CourseBadge`, "Skyhawk Pilot (Sim)", an original drawing of pilot wings shown when the course is complete, always with the sentence "This badge celebrates your simulator practice on Learn to Fly. It is not a pilot certificate and has no value for real-world flying." That design fits the evidence well. It is completion-contingent, but for completing the whole course, so it marks an accomplishment rather than paying for each step. It is not announced on lesson pages. And its honesty line protects against a different harm, that a learner mistakes a simulator record for a qualification.

::: {.rule #MOT-021 grade="B"}
**Keep badges few, hard to earn and tied to a demonstrated skill; never award a badge for visiting, streaking or finishing a single page.** Engagement- and completion-contingent rewards undermined intrinsic motivation more than performance-contingent ones [@deci1999meta], achievement effects depended on how many there were and how hard [@sailer2020gamification], and rewards carry little task information [@hattie2007power]. The badge-specific evidence is cited secondhand, so grade B.

*In LTF:* the `CourseBadge` stays the only badge in v1. Any later badge (for example a module stage check in v2) is earned by a passed challenge, describes the skill in words, and carries the same not-a-certificate wording where it could be mistaken for one.
:::

### Tiers as information

The Gold, Silver and Bronze tiers are LTF's most game-like element. In `shared/scoring.ts` a challenge passes only if every required criterion is met; a passed attempt is Gold at 90 percent or more with every required criterion at Silver or better, Silver at 70 percent or more, otherwise Bronze. The landing page frames them as standards ("Bronze means you did it safely. Gold is checkride-ready."), and the tier legend shows each with a criterion. `TierBadge` always prints the word, so color is never the only signal.

By the reward evidence, these are performance-contingent recognition, safe only when informational and not pressuring (MOT-008). By the goal-setting evidence, they are multiple-level goals, which can be useful because they give a learner who reaches the first level a next target (see the chapter on goals). By the mastery evidence, a high bar for the top level fits the finding that high mastery standards outperformed lower ones [@kulik1990effectiveness]. The risks are that the overall tier hides which criterion held the learner back, and that a learner reads Bronze as failure even though it means a safe pass.

::: {.rule #MOT-022 grade="C"}
**Present Bronze as a pass and every tier as a level of a stated standard, never as a rank among learners or a grade of the person.** Multi-level goals give a next target after the first is reached [@locke2002building; @malone1981toward], and self-level evaluation weakens the effect of feedback [@kluger1996effects]. Grade C: the framing is an application of theory, not a tested copy variant.

*In LTF:* keep "Bronze means you did it safely" as the canonical definition, and keep the tier legend's criterion text. In `ResultView`, a Bronze message says the flight passed and names the criterion that would lift it, rather than only "Passed. Fly it again to push for a higher tier."
:::

### Progress displays

Progress bars, rings and paths are the least controversial element, because they report what happened rather than paying for it. The first review lists progress among the affordances studied, without separable effects [@hamari2014gamification]. The better-grounded reason to show progress comes from goal-setting (feedback on progress toward a goal lets people adjust effort and strategy [@locke2002building]) and from mastery learning, where the review recommends progress shown per skill rather than as a single percent complete [@kulik1990effectiveness]. A percent-complete bar measures exposure, not ability. Mastery per skill tells the learner what they can do.

The other risk is that progress displays measure performance during practice, which can differ from learning (see the chapter on measurement). A bar that fills as lessons are marked complete says the learner read them.

::: {.rule #MOT-023 grade="B"}
**Show progress as skills demonstrated, not only as items completed.** Goals plus progress feedback outperform goals alone [@locke2002building], and mastery programmes, which gate progress on a demonstrated criterion, raised examination performance with an average effect of 0.52 across 103 studies [@kulik1990effectiveness]; that review's implication for this product is per-skill mastery views. The mastery evidence is strong, but the display recommendation is an inference, so grade B.

*In LTF:* keep the module `ProgressRing` and `ProgressBar`, but add, on `DashboardPage`, the passed challenges grouped by skill (with best tier) beside "Core lessons completed", so that the learner sees what they can fly, not only what they have read.
:::

::: {.rule #MOT-024 grade="C"}
**Replace trophy counts with information: show best result and change over attempts per challenge, not totals of golds.** A total rewards accumulation and carries little task information [@hattie2007power], whereas change over time ("velocity" feedback) strengthened feedback effects in the feedback meta-analysis [@kluger1996effects]. Grade C: the specific replacement has not been tested.

*In LTF:* the "Gold results" tile on `DashboardPage` becomes something like "Challenges improved since first attempt", or a short list of recent personal bests from "Recent attempts". The "Attempts" tile can stay as a plain record.
:::

### What this means for Learn to Fly

LTF has made the right v1 choices on the elements with the worst profile: no leaderboard (MOT-018), no points, no badge wall, one honest course badge. Keep these exclusions and write them into the review checklist so they survive new contributors. The tiers are the element to refine, not remove. They work as levels of a stated standard and already appear with criteria in `ResultView` and the debrief radio cards. Change the Bronze message so it reads as a pass with a named next step (MOT-022), and change the dashboard's "Gold results" count to a measure of improvement (MOT-024). Build a per-skill view of passed challenges on `DashboardPage` (MOT-023), because "what can I fly now" is the progress statement a learner can act on. Every social feature stays out until it can pass MOT-019 and MOT-020.

## Goals and the challenge brief

### Specific, difficult goals

Goal-setting theory is one of the best-supported programmes in motivation research. Locke and Latham summarize 35 years of laboratory and field work: specific, difficult goals produce higher performance than easy goals or a vague "do your best", provided people are committed, get feedback, and have the ability and strategies to reach them [@locke2002building]. Goal difficulty relates positively and linearly to effort and performance until ability runs out or commitment lapses, with meta-analytic effect sizes of d = .52 to .82. Specific difficult goals beat do-your-best goals with effect sizes of .42 to .80, because "do your best" has no external referent and so allows a wide range of performance to count as acceptable. The paper is a review by the theory's authors, not an independent test, but the underlying literature is large.

Goals work through four mechanisms. They direct attention and effort toward goal-relevant activity. They energize, since higher goals bring more effort. They prolong effort when people control their time. And they lead people to discover and use task-relevant knowledge and strategies [@locke2002building].

The brief of a challenge is where LTF sets goals. A brief that says "fly a good landing" is a do-your-best goal. A brief that says what the learner is scored on, with each criterion's levels, is a specific goal with an external referent.

::: {.rule #MOT-025 grade="A"}
**State every challenge goal as specific criteria with defined levels, never as "fly well" or "do your best".** Specific difficult goals outperformed do-your-best goals with effect sizes of .42 to .80 in the goal-setting literature [@locke2002building]; the feedback model makes "where am I going?" the first question effective feedback must answer [@hattie2007power]; ARCS lists stating goals and evaluation criteria as a confidence strategy [@keller1987development]. Replicated across many studies.

*In LTF:* keep the "How you'll be scored" table in `BriefTab` (criterion, levels, weight) and the "You are scored on" list on the landing sample card. Every challenge's criteria are written so a learner could judge from the sim replay whether each was met. Aviation values inside criteria come from the challenge content and its tokens, not from design copy.
:::

### Learning goals before performance goals

The most important qualification in the paper is about complex new tasks. When a task is complex and the person lacks strategies, a performance goal (a score to hit) can make people so anxious that they search for strategies unsystematically, and performance suffers [@locke2002building]. The authors recommend specific, challenging learning goals instead, such as discovering a certain number of strategies. A footnote defines the terms with an aviation example: a performance goal is the score one attains, illustrated by the proficiency level reached in practice landings, while a learning goal is the number of ideas or strategies acquired, and it names a student pilot landing a plane as an example of a difficult task. In an air traffic controller simulation cited in the paper, a performance goal interfered with learning the task, while a specific difficult learning goal helped.

Effect sizes also shrink as complexity rises: for goal difficulty, d of .48 for the most complex tasks against .67 for the least complex; for specific difficult goals against do-your-best, .41 against .77 [@locke2002building]. Landing an airplane in a simulator for the first time is about as complex a task as a beginner in this course will meet.

::: {.rule #MOT-026 grade="B"}
**For a learner's first attempts at a complex maneuver, set a learning goal (find and use a named cue) before a performance goal (hit a tolerance).** Performance goals impaired learning on complex new tasks, including an air traffic controller simulation, while specific learning goals helped, and goal effects were smaller for complex tasks [@locke2002building]. The evidence is a handful of experiments summarized by the theory's authors, so grade B.

*In LTF:* the first challenge for a new maneuver can carry a learning-goal criterion ("identify the cue the lesson names for starting the flare", scored met or not met as a `binary` criterion) before later challenges add tiered tolerance criteria. Which cue, and what tolerance, comes from the lesson's verified content.
:::

### Commitment, rationale and choice

Goals only work if people are committed to them. Commitment is strongest when goals are difficult, and is raised by importance and by self-efficacy. Assigned goals work as well as participatively set ones if a rationale is given, but a terse "Do this" produced significantly lower performance than a participatively set goal [@locke2002building]. Self-efficacy determines whether people raise or lower their goals after poor feedback, and people with high goals are less satisfied with any given result but produce more, because the goal is the reference for satisfaction.

That last point has a direct design consequence. A learner who sets themselves a Gold target will be less satisfied with Silver than a learner who expected Bronze, even though the Silver flight is better. A results screen should not amplify that gap.

::: {.rule #MOT-027 grade="B"}
**Let the learner choose the target level for an attempt, and explain why each criterion matters.** Participatively set goals and assigned goals with a rationale both sustained performance, while terse assigned goals underperformed; self-efficacy governs how people adjust goals after feedback [@locke2002building]. The choice mechanism is an application, not a tested LTF feature.

*In LTF:* a future addition to `BriefTab`: an optional "Your target for this flight" choice (Bronze, Silver, Gold), stored with the attempt so `ResultView` can say "you aimed for Silver and met it on two criteria". The required criteria remain fixed, because they define a safe pass.
:::

### Goals with feedback, and proximal subgoals

Goals plus summary feedback beat goals alone, because people cannot adjust effort or strategy without knowing where they stand [@locke2002building]. The feedback meta-analysis agrees from the other direction: goal setting combined with feedback interventions strengthened their effect [@kluger1996effects]. For long tasks, the implication is proximal subgoals: break the flow into stages that each have their own target and their own feedback. Malone's account of challenge adds that goals motivate when the outcome is uncertain, and lists multiple level goals among the ways to create that uncertainty [@malone1981toward]. Stages give a learner who falls short at one stage a target they can still reach at the next.

::: {.rule #MOT-028 grade="B"}
**Break long challenges into stages that each have their own criterion, so the learner gets feedback per stage.** Goals plus feedback outperform goals alone, and proximal subgoals within longer flows follow from that finding [@locke2002building; @kluger1996effects]; multiple-level goals sustain uncertainty and so challenge [@malone1981toward]. Grade B: strong evidence for goals with feedback, an inference for the staging.

*In LTF:* criteria in "How you'll be scored" follow the phases of the flight in order, so "Criterion by criterion" in `ResultView` reads as a timeline the learner can match to the replay. The "Steps" list in `FlyPanel` uses the same phase names.
:::

### When goals do harm

Goal setting has costs that its authors acknowledge and a critic emphasizes. The paper itself reports smaller effects on complex tasks, increased risk-taking (difficult performance goals raised the riskiness of strategies in a computer game), goal conflict, and impaired learning from performance goals on complex new tasks [@locke2002building]. Ordonez, Schweitzer, Galinsky and Bazerman (2009) argued that the benefits have been overstated and the harms ignored, including narrow focus and unethical behavior, and recommended that goals be prescribed selectively with a warning label; a reply followed (both known to this book only through summaries cited in the lane notes for this paper [@locke2002building]).

In a flight-training product the risk-taking finding is the serious one. A goal that rewards hitting a number can teach a learner to chase the number by an unsafe route. The defense is to make safety criteria required, so no tier can be earned without them, and to never set goals on speed.

::: {.rule #MOT-029 grade="B"}
**Make safety criteria required and binary, so no tier can be reached by trading safety for score, and never set a goal on time taken.** Difficult performance goals increased risky strategies, and goals can narrow focus [@locke2002building]. Grade B: the risk is documented in the source and its critics, though not in flight training.

*In LTF:* keep the scoring rule in `shared/scoring.ts` under which any unmet required criterion means "Not passed yet", whatever the percentage. Which criteria are safety-critical is a content decision verified through the lesson review process, not a design one.
:::

### What a good brief contains

ARCS gives a compatible checklist for the brief as a whole [@keller1987development]. Attention: a concrete scenario. Relevance: say how the challenge builds on skills the learner has and why it matters for later flying. Confidence: state goals and evaluation criteria, and order material so each challenge is conquerable. Satisfaction: let the learner use the new skill in a realistic setting soon. Keller insists motivational strategy is a means to an end, and that strategies should not take much instructional time or detract from objectives.

::: {.rule #MOT-030 grade="C"}
**Give every challenge brief four parts in a fixed order: the scenario, why it matters, how it is scored, and what to do if it goes wrong.** ARCS names attention, relevance, confidence (stated criteria) and satisfaction as the conditions instruction must meet [@keller1987development], and the feedback model asks that the goal be clear before the attempt [@hattie2007power]. ARCS is a design model with uncontrolled field tests, so grade C.

*In LTF:* `BriefTab` already has Goal, Sim setup, Recommended lessons, Procedure, How you'll be scored, and Safety and Tip callouts. Add a one-line "Why this matters" under Goal, and make sure the procedure or a callout says what to do on a bad approach in terms the verified content supplies.
:::

::: {.rule #MOT-031 grade="C"}
**Keep motivational framing in a brief to a sentence or two; do not let story, encouragement or decoration delay the criteria.** Keller warns that motivational strategies must not take much time or detract from objectives, and that learners who arrive motivated need no added strategies [@keller1987development]. Grade C.

*In LTF:* the "I'm set up, start flying" button in `BriefTab` is reachable without scrolling past more than the scenario, criteria and setup on a laptop screen.
:::

### What this means for Learn to Fly

`BriefTab` is the most evidence-aligned surface in LTF: a stated goal, a scoring table with levels and weights, and required criteria that define a safe pass. Keep that structure, and keep `shared/scoring.ts`'s rule that a required criterion gates the pass (MOT-029). Change three things. Add a one-line rationale under the goal (MOT-003, MOT-030). For the first challenge of a new maneuver, use learning-goal criteria before tolerance criteria (MOT-026), which content authors can do now with `binary` criteria. Order criteria by flight phase so the debrief reads as a timeline (MOT-028). Build, later, an optional target-tier choice that the result screen can refer back to (MOT-027). None of this changes an aviation value; criteria wording and tolerances stay with verified challenge content.

## Feedback that keeps people trying

### A third of feedback makes things worse

Kluger and DeNisi's meta-analysis overturned the assumption that feedback reliably helps [@kluger1996effects]. Only 131 papers (5 percent of those reviewed) met their inclusion criteria, yielding 607 effect sizes from 12,652 participants and 23,663 observations. The mean effect of a feedback intervention on performance was d = .41, with large variability, and over one third of feedback interventions decreased performance. The authors tested for artifacts and found the negative effects robust: they could not be explained by sampling error, by whether feedback was positive or negative, or by existing theories. Hattie and Timperley's later review reports the figures differently (an average of 0.38, 32 percent of effects negative, and 470 effect sizes from 131 studies) [@hattie2007power]; the Kluger and DeNisi figures above are from the original.

Their explanation, feedback intervention theory, treats behavior as regulated by comparing feedback with goals arranged in a hierarchy. Attention is limited, so only the gaps that get attention drive behavior. The hierarchy has three levels: meta-task processes, which involve the self (what this performance means about me); task-motivation processes (effort on this task); and task-learning processes (the details of how to do it). Feedback changes where attention goes, and its effectiveness falls as attention moves up toward the self [@kluger1996effects].

The moderator results give concrete guidance, with the caution that they come from coded study features rather than experiments that manipulated them. Praise, and feedback designed to discourage, both of which push attention to the self, weakened feedback effects. Feedback that threatened self-esteem weakened them. Feedback with cues that support learning, such as the correct solution, and "velocity" feedback (change in performance over time) tended to strengthen them, as did combining feedback with goal setting. Computerized feedback was marginally related to stronger effects, while verbal feedback that makes another person salient was related to weaker ones. The authors' summary: feedback on a familiar task, with cues that support learning, that draws attention to task-level gaps and is free of self-directed praise or criticism, is likely to yield large gains. They add that effects that depend on continuous feedback can reverse when it is removed [@kluger1996effects].

::: {.rule #MOT-032 grade="A"}
**Point every piece of result feedback at the flight, not the flyer: no praise or criticism of the person.** Feedback that directs attention to the self (praise, discouragement, self-esteem threat) weakened feedback effects in a meta-analysis of 607 effect sizes [@kluger1996effects]; feedback at the self level is the least effective in the feedback model [@hattie2007power]; formative-feedback guidelines say to focus on the task, not the learner, and to praise sparingly if at all [@shute2008focus]. Converging syntheses, though the moderators are correlational.

*In LTF:* `ResultView`'s Gold message "Excellent flying. That is a Gold." becomes task-level, for example "Gold: every criterion at Silver or better." `QuizBlock`'s "Correct!" stays short but is always followed by the explanation, as it is now. No copy says "You're a natural", "Great pilot!" or "You're not getting this".
:::

::: myth
**"More positive feedback is always better."** In Kluger and DeNisi's meta-analysis, over a third of feedback interventions lowered performance, and the sign of the feedback did not explain which; praise, which moves attention to the self, weakened effects [@kluger1996effects]. Hattie and Timperley argue the level of the feedback matters more than its sign, and report that positive feedback raises motivation for tasks people want to do and lowers it for tasks they have to do [@hattie2007power].
:::

### Three questions and four levels

Hattie and Timperley's model says effective feedback answers three questions for the learner: where am I going (feed up), how am I going (feed back) and where to next (feed forward) [@hattie2007power]. It works at one of four levels. Task feedback says whether the work is correct and what to include. Process feedback is about how the task was done, the strategies. Self-regulation feedback concerns monitoring, self-evaluation and the confidence to continue. Self feedback is personal evaluation ("You are a great student"). The authors argue self-level feedback is least effective and process and self-regulation feedback the most powerful for deep learning.

Their evidence base: 12 earlier meta-analyses on classroom feedback, 196 studies and 6,972 effect sizes, averaged 0.79, with the highest effects for information about a task and how to do it better, and lower effects for praise, rewards and punishment [@hattie2007power]. That 0.79 averages across very different outcomes and designs, and the four levels are the authors' proposal, inferred from earlier studies; the model is a well-argued framework with partial empirical support.

For a challenge debrief the levels map directly. Task: what happened on each criterion. Process: the cue or technique that would change it. Self-regulation: how to check your own flight next time, for example with the replay. Self: nothing.

::: {.rule #MOT-033 grade="B"}
**End every result with one feed-forward step: the single change to try on the next attempt, linked to where it is taught.** Feedback works best when it answers "where to next" and works at the process level [@hattie2007power]; feedback with cues that support learning strengthened effects [@kluger1996effects]. The level model has partial empirical support, so grade B.

*In LTF:* `ResultView` already shows a "Review {lesson}" link on criteria scored below Silver, via `reviewLink`. Promote the first such criterion into a "Next attempt" line above "Criterion by criterion", and keep the link to the lesson section.
:::

::: {.rule #MOT-034 grade="B"}
**Add a self-regulation prompt to the debrief: tell the learner how to check their own flight before scoring it.** Self-regulation feedback is among the most powerful levels in the model [@hattie2007power], and ARCS advises avoiding external evaluation when learners can evaluate their own work [@keller1987development]. Grade B.

*In LTF:* keep the `DebriefForm` callout "Score what you flew" ("Scores are self-assessed, so they only help you improve if they match what happened. If you can, check your flight with the sim's replay before you answer."). It is a good self-regulation prompt. Make the per-criterion descriptions concrete enough that the replay can settle each one.
:::

### Velocity feedback and the learner's own history

Velocity feedback, the change in performance over time, strengthened feedback effects [@kluger1996effects], and Hattie and Timperley report that feedback works better when it builds on changes from previous trials [@hattie2007power]. Velocity is also the safest comparison for motivation, because it compares a learner with themselves. It satisfies the competence need without the social comparison that hurt in the classroom leaderboard study (see the chapter on points, badges and leaderboards).

::: {.rule #MOT-035 grade="B"}
**Show change against the learner's own previous attempts on the result screen and in history, criterion by criterion.** Velocity feedback strengthened feedback effects [@kluger1996effects; @hattie2007power]. Moderator evidence, not manipulated in a single design, so grade B.

*In LTF:* `ResultView` already shows "Your best so far" when it differs. Extend "Criterion by criterion" with an indicator of change since the last attempt for each criterion ("up from Bronze"), and give `HistoryTab` a per-criterion trend in addition to the attempts table.
:::

### Grades alone do not help

Shute's review of formative feedback lists what to avoid: normative comparisons, overall grades, discouraging or threatening messages, praise except sparingly, and interrupting a learner who is actively engaged [@shute2008focus]. On grades, she summarizes Wiliam: students given grades only showed no gains, comments only showed large gains, and grades plus comments showed no gains. The things to do include focusing on the task, giving elaborated feedback (what, how and why) in manageable units, reducing uncertainty between performance and goals, and giving feedback after the learner has attempted a solution. Shute's review is narrative and concedes that the field shows many conflicting findings, so its guidelines vary in support.

The grades-plus-comments result is a direct challenge to the current `ResultView`, which leads with a large `TierBadge`, a `font-mono text-5xl` percentage and a points line, and puts the criterion-level information below. If a grade crowds out the comment, the learner reads the grade.

::: {.rule #MOT-036 grade="B"}
**Lead the result screen with what happened and what to change; keep the overall tier and percentage visible but secondary.** Formative-feedback guidance lists overall grades among things to avoid and reports that grades alongside comments eliminated the gains of comments alone [@shute2008focus]; feedback effects are larger when attention stays on task-level detail [@kluger1996effects]. The grades evidence is a single summarized line of research, so grade B.

*In LTF:* on `ResultView`, move "Criterion by criterion" and the next-attempt line above the fold, and reduce the percentage from `text-5xl` to a size equal to the tier label. The `tier-pop` animation stays (it respects reduced motion), but the badge no longer dominates the screen.
:::

### Timing, and the guidance hypothesis

When feedback should arrive depends on the task and the level. Hattie and Timperley cite Kulik and Kulik: at the task level some delay was beneficial (0.36) while at the process level immediate feedback was (0.28); Clariana and colleagues found delayed feedback effects of -0.06 for easy items and 1.17 for difficult ones [@hattie2007power]. Shute recommends immediate feedback for difficult tasks, at least at first, and delay for simple ones to avoid intrusion, and reports a computer-instruction meta-analysis with a mean effect of 0.80 for feedback against none on immediate outcomes but 0.35 on delayed outcomes [@shute2008focus]. She also reports that low achievers tend to benefit from immediate feedback and high achievers from delayed.

Motor learning adds the guidance hypothesis: feedback after every trial guides performance during practice, but if given too often the learner depends on it, which shows when it is removed [@salmoni1984knowledge]. Schmidt and Bjork (1992), building on the review, reported that feedback after every trial versus summaries after 5 or 15 trials produced more error during practice as summaries lengthened, but the 15-trial group did best on retention [@salmoni1984knowledge]. The qualification is that for complex skills, frequent feedback learned at least as well, and the optimal summary length was shorter for more complex tasks. The guidance hypothesis does not justify withholding feedback from beginners on complex tasks.

::: {.rule #MOT-037 grade="B"}
**Give rich, frequent feedback in a learner's first attempts at a challenge and thin it as their attempts become consistent.** Frequent feedback suits difficult tasks and early learning, and reduced frequency supports retention once the task is in hand [@shute2008focus; @salmoni1984knowledge]; the challenge point framework makes the same recommendation [@guadagnoli2004challenge]. The replication record of the guidance hypothesis is mixed, so grade B.

*In LTF:* for a learner's first two or three attempts at a challenge, `ResultView` shows every criterion with its review link. After repeated passes, it can collapse met criteria into a single line and show only those that changed. The exact thresholds are a product choice to test, not a figure from the research.
:::

### Never evaluate during the flight

The feedback meta-analysis locates harm in shifting attention away from the task [@kluger1996effects]. Shute lists interrupting an actively engaged learner among the things to avoid [@shute2008focus]. In LTF, the learner's task during a challenge is in the simulator; the second screen holds the steps and the timer. An evaluative message on that screen mid-flight would pull attention from the airplane to the self, the exact mechanism the meta-analysis warns about.

::: {.rule #MOT-038 grade="B"}
**Show no evaluative feedback, praise or scoring in Fly mode while the learner is flying; keep all evaluation for the debrief.** Feedback that pulls attention to the self or interrupts active engagement weakens its effect [@kluger1996effects; @shute2008focus]. The in-flight case is an inference, so grade B.

*In LTF:* `FlyModePage` and `FlyPanel large` keep only steps, the optional `Stopwatch` and random-event alerts. Ticking a step (`border-go bg-go-tint`) confirms the action; it is not praise and carries no score.
:::

### Quiz feedback

`QuizBlock` gives verification ("Correct!" or "Not quite.") followed by an explanation. Shute's distinction between verification (right or wrong) and elaboration (why, hints, worked examples, error analysis) puts the value in the second part [@shute2008focus]. The current pattern is sound. "Not quite." is task-level and non-threatening, and "Change your answer and check again." invites a retry rather than ending the item.

::: {.rule #MOT-039 grade="C"}
**Follow every quiz verdict with an explanation of why, for right and wrong answers alike.** Elaborated feedback carries the information that verification alone lacks [@shute2008focus]. Grade C here because the strongest testing-effect evidence belongs to the learning-science Part; this rule concerns the motivational tone.

*In LTF:* keep `QuizBlock`'s "Correct!" and "Not quite." with the explanation always rendered; content authors write an explanation for correct answers as well as incorrect ones.
:::

### What this means for Learn to Fly

LTF's feedback surfaces are `ResultView`, `DebriefForm`, `HistoryTab` and `QuizBlock`. Their structure is better than most: criterion-level results, review links to the lesson section behind each weak criterion, a self-assessment prompt that points at the replay, and quiz explanations. The changes are about emphasis and wording. Rewrite the Gold message to task level (MOT-032). Promote the first weak criterion into a "Next attempt" line (MOT-033). Show per-criterion change from the last attempt (MOT-035). Rebalance the screen so the large percentage no longer outranks the criterion rows (MOT-036). Keep Fly mode free of evaluation (MOT-038). Each of these can be built inside the existing components without new data, except the per-criterion trend, which needs the previous attempt's results that `HistoryTab` already loads.

## Confidence built from mastery

### Self-efficacy and its four sources

Bandura proposed that behavioral change, whatever produces it, works by altering self-efficacy: the expectation that one can carry out the behavior needed for an outcome [@bandura1977selfefficacy]. Efficacy expectations decide whether a person starts coping behavior, how much effort they spend and how long they keep going against obstacles. They are distinct from outcome expectations (the belief that the behavior leads to the outcome), and they vary in magnitude (easy tasks only, or the most taxing ones), generality (one situation, or many) and strength (easily extinguished, or persistent).

The paper names four sources of efficacy information, ranked by dependability [@bandura1977selfefficacy]. Performance accomplishments, the learner's own mastery experiences, are the strongest: successes raise expectations and repeated failures lower them, especially early failures. Once strong efficacy is built through repeated success, occasional failures matter less, and failures overcome by determined effort can strengthen persistence. Vicarious experience, watching others succeed, raises efficacy more weakly and less durably. Verbal persuasion, being told you can cope, produces weaker expectations because it has no experiential base and is readily extinguished by disconfirming experience. Emotional arousal matters too: high arousal in taxing situations usually debilitates performance and lowers efficacy, so reducing it can raise expectations.

The evidence in the paper is small clinical studies. In an experiment with adults whose snake phobias affected their lives, participant modeling (guided mastery through progressively more threatening tasks) produced more generalized increases in efficacy and behavior change than modeling alone. Efficacy expectations predicted later approach behavior equally well however they were instated (r = .83 when instated enactively, .84 vicariously), and task-by-task agreement between efficacy judgment and performance was 89 percent when efficacy came from performance accomplishments and 86 percent from vicarious experience. Brief exposure to successful models raised efficacy level by 9 percent and strength by 5 percent with little behavior change (10 percent), while repeated observation raised level by 44 percent, strength by 38 percent and performance by 35 percent [@bandura1977selfefficacy]. The ranking of sources rests heavily on later work not reviewed here, and the paper concerns therapy, not skill training.

### An early first success

If performance accomplishments are the strongest source, the most valuable motivational event in LTF is an early, real success in the simulator. Bandura's emphasis on early failures as especially damaging points the same way. Locke and Latham build self-efficacy into goal-setting as part of a "motivation hub": high-efficacy people set higher goals, commit more readily to assigned ones and find better strategies [@locke2002building]. Keller's confidence strategies include organizing material by increasing difficulty so each challenge is "conquerable", letting learners learn new skills under low risk, and then practicing well-learned tasks under realistic conditions [@keller1987development].

::: {.rule #MOT-040 grade="B"}
**Design the opening of the course so the learner has a genuine, noticed success in the sim early, using scaffolding that is later withdrawn.** Performance accomplishments are the strongest source of self-efficacy and early failures the most damaging [@bandura1977selfefficacy]; efficacy feeds goal level and commitment [@locke2002building]; conquerable steps are a core confidence strategy [@keller1987development]. The source ranking comes from small clinical studies and a theory with wide later support, so grade B.

*In LTF:* the landing CTA "Lesson 0.1 takes five minutes. Start there." and Module 0's `LessonPath` lead to a first challenge. That first challenge should be one nearly every learner can pass at Bronze on the first or second attempt, with the setup listed in "Sim setup" doing the hard work. Which sim assists are used is a content decision checked in the sim.
:::

::: {.rule #MOT-041 grade="B"}
**Make each success visible as evidence: what the learner did, in their own record, not a congratulation.** Mastery experience is persuasive because it is authentic evidence, while verbal persuasion is weak and easily extinguished [@bandura1977selfefficacy]. Grade B.

*In LTF:* `HistoryTab` and the dashboard's "Recent attempts" are the evidence. A first pass of any challenge is marked there with the criterion results, and the Continue card on `DashboardPage` can name the last skill passed ("You passed {code} {title}. Next: {code} {title}") instead of a generic greeting.
:::

### Encouragement is the weakest source

Verbal persuasion is the cheapest source to produce and the weakest in effect [@bandura1977selfefficacy]. A line that says "You can do it!" provides no experiential base, and the first failed attempt can extinguish it. That does not make encouraging copy useless; persuasion can get someone to try. It means copy cannot be the strategy. LTF's landing headline "Yes, you can fly a plane." is verbal persuasion, and it is fine as an invitation because the page immediately offers the experience that can make it true: a five-minute first lesson and no account required.

::: {.rule #MOT-042 grade="B"}
**Pair every encouraging claim with an immediate, small, real task that can confirm it; never rely on encouragement copy alone.** Verbal persuasion produces weaker and less durable efficacy than mastery and is easily disconfirmed [@bandura1977selfefficacy]. Grade B.

*In LTF:* keep the landing h1 next to "Start lesson 0.1". Do not add motivational banners ("You've got this!") to `LessonPage`, `ChallengePage` or `FlyModePage`.
:::

### Models who struggle

Vicarious experience is weaker than mastery but useful before the learner can succeed alone. The paper reports that observers gain more from models who overcome difficulty through determined effort than from facile experts, and from models similar to themselves, and that repeated observation does far more than brief exposure [@bandura1977selfefficacy]. A polished expert video of a perfect landing is the weakest kind of model by this account. A beginner's imperfect approach, corrected step by step, is the stronger one.

::: {.rule #MOT-043 grade="B"}
**When showing a worked example of a maneuver, prefer a model who makes and corrects a beginner's mistakes over a flawless expert run.** Coping models similar to the observer raised efficacy more than facile experts, and repeated observation more than brief exposure [@bandura1977selfefficacy]. The comparison comes from the paper's clinical context, so grade B for transfer.

*In LTF:* lesson `video` blocks and future replay examples include at least one "first attempt" version, annotated with what went wrong and what fixed it. The `YouTubeEmbed` caption says which kind it is.
:::

### Arousal and the calm cockpit

High arousal in taxing situations usually debilitates performance and lowers efficacy [@bandura1977selfefficacy]. A beginner flying their first approach is already aroused. Anything the companion screen does to add alarm adds to that load. LTF's Fly mode has a random-event alert with a 4 px warn border, a pulse and a beep, which is designed to simulate an in-flight surprise. That is a legitimate training device in a challenge that is about handling events, but it is a cost in a challenge that is about building basic control.

::: {.rule #MOT-044 grade="C"}
**Keep Fly mode calm by default: reserve alarming sound and motion for challenges whose stated goal is handling an event, and never use them for reminders or encouragement.** High arousal lowers efficacy and performance in taxing tasks [@bandura1977selfefficacy], and flow research treats interruptions as a threat to concentration [@csikszentmihalyi2008flow]. Grade C: an application to interface alerts.

*In LTF:* the `FlyPanel` random-event alert (`border-4 border-warn bg-warn-tint`, pulse, beep) appears only in challenges that declare random events in the brief, and the brief says so. Early Module 0 challenges have none.
:::

### Confidence must be calibrated

Confidence is a means, not the outcome. In safety-critical skills an overconfident learner is a worse outcome than a cautious one, and Bandura's paper, which concerns therapy, does not address this [@bandura1977selfefficacy]. The memory research makes the risk concrete: learners after blocked practice were markedly overconfident about their next-day performance, while those after interleaved practice predicted it closely [@bjork2009making]. LTF's self-scored debrief makes calibration part of the product. A learner who scores themselves Gold on every criterion learns nothing and builds a false efficacy that the first unscripted flight will extinguish.

::: {.rule #MOT-045 grade="B"}
**Treat accurate self-assessment as a goal of the debrief, and never reward a high self-score in a way that tempts inflation.** Efficacy must rest on authentic experience to be durable [@bandura1977selfefficacy], blocked practice produces overconfidence [@bjork2009making], and avoiding external evaluation is helpful only when the learner can evaluate accurately [@keller1987development]. Grade B.

*In LTF:* the server already recomputes tier from the learner's answers. Keep tiers private (MOT-018) so there is no audience to inflate for. A future addition: a "compare with replay" checkbox per criterion in `DebriefForm`, and a note in `HistoryTab` when an attempt was self-scored without replay.
:::

### Growth mindset: a small effect, oversold

Growth mindset theory says that believing intelligence can be developed leads to better achievement, and that short interventions teaching the belief should raise it. Two meta-analyses by Sisk and colleagues found weak support [@sisk2018extent]. Across 273 effect sizes (N = 365,915), the correlation between mindset and achievement was r = .10; 58 percent of effects were not significantly different from zero; and by developmental stage it was .19 for children, .15 for adolescents and .02 for adults, the last not significant. Across 43 intervention effects (N = 57,155), the average was d = 0.08, with d = 0.34 for low-socioeconomic-status students (7 effect sizes) and a borderline effect for highly at-risk students. Almost half the studies that reported manipulation checks found that mindsets had not changed, and the intervention effect was significant when the check failed and null when it succeeded, which the authors say suggests "successful" interventions may not work through mindset.

The strongest counterweight is Yeager and colleagues' pre-registered national experiment in 65 US public high schools [@yeager2019national]. A two-session online intervention shifted self-reported mindsets (0.33 standardized difference) and raised lower-achieving students' core GPA by 0.10 grade points (standardized 0.11). The effect was larger in schools whose peer norms supported challenge-seeking. The authors argue that 0.20 s.d. is large for scalable educational interventions, and warn that not all growth mindset interventions can be expected to raise grades. Both papers agree on small average effects concentrated in lower-achieving groups; both concern school students, not adult hobbyists.

::: myth
**"Teaching people that their brain is like a muscle will raise their performance."** For adults, the mindset and achievement correlation was r = .02 and not significant, and the average intervention effect was d = 0.08, with doubts about whether successful interventions worked through mindset at all [@sisk2018extent]. The rigorous national trial found a small effect concentrated in lower-achieving adolescents and dependent on school norms, and its authors caution against loose copies of the intervention [@yeager2019national].
:::

::: {.rule #MOT-046 grade="A"}
**Do not add growth-mindset slogans to lessons or results; instead make retrying normal through structure (unlimited retries, no penalty, a visible history of improvement).** Two meta-analyses and a large pre-registered trial agree that average mindset effects are small and near zero for adults, and the trial found benefits only where the environment supported challenge-seeking [@sisk2018extent; @yeager2019national]. The negative conclusion about slogans is well supported; the structural alternative is an inference.

*In LTF:* keep "Fly again" with no limit and no cost, "Not passed yet" in place of "Failed", and best-so-far tracking. Do not add "Mistakes make your brain grow" style copy. If an optional onboarding module for anxious beginners is ever built, test it with a manipulation check and a behavioral outcome, as Yeager's design did.
:::

### What this means for Learn to Fly

The strongest lever in this chapter is structural: an early real success in the sim (MOT-040), made visible as the learner's own record (MOT-041). The landing page and Module 0 are already arranged to reach a first lesson in minutes; the gap is the first challenge, which should be designed to be nearly certain at Bronze with the setup doing the work. Keep the copy restrained: the landing headline is acceptable because a real task follows it, but encouragement does not spread into lessons or Fly mode (MOT-042). Keep Fly mode calm except where an event is the point of the challenge (MOT-044). The self-scored debrief needs one more piece of support, a replay check per criterion (MOT-045), because confidence built on inflated self-scores will not survive the first unscripted flight. Skip mindset messaging (MOT-046); "Not passed yet" and unlimited retries already do the part of that idea that has evidence behind it.

## Challenge, flow and the right difficulty

### Flow and its conditions

Csikszentmihalyi argues that the most satisfying moments are not passive relaxation but states of deep, effortful involvement in a challenging activity, which he calls flow [@csikszentmihalyi2008flow]. Descriptions of the book summarize it as total involvement in which a person enjoys the activity deeply and loses track of time, reached by setting challenges that are neither too hard nor too easy for one's abilities. The book also develops the autotelic experience, an activity worth doing for its own sake, where purpose comes from the process rather than from external reward.

The research tradition attributes three conditions to flow: clear goals, immediate feedback, and a balance of challenge and skill [@csikszentmihalyi2008flow]. In the quadrant operationalization used with experience sampling (random signals prompting people to report what they are doing and feeling), flow is any moment when both perceived challenge and perceived skill are above the person's own average. That is a within-person definition: what counts as a high challenge depends on who is flying.

The science is less settled than the popular account. A 2020 critical review found that across 42 studies from a five-year window, flow was operationalized in 24 distinct ways, with disagreement about whether flow is a discrete state or a continuous quantity, whether it is inherently enjoyable, and whether the conditions are part of the definition [@csikszentmihalyi2008flow]. Two commonly cited features, lack of self-consciousness and the merging of action and awareness, loaded poorly on a higher-order flow factor. A meta-analysis of 28 studies, as summarized secondhand, found a moderate relationship between challenge-skill balance and flow, with clear goals and a sense of control also contributing. Balance is a necessary condition, not a guarantee.

::: {.rule #MOT-047 grade="B"}
**Give every in-sim challenge the three flow conditions: a goal stated before the attempt, feedback right after it, and a difficulty matched to the learner's current skill.** Clear goals, immediate feedback and challenge-skill balance are the proposed antecedents of flow, and challenge-skill balance has a moderate relationship with flow across studies [@csikszentmihalyi2008flow]; the same conditions appear independently in goal-setting and feedback research [@locke2002building; @kluger1996effects]. The construct of flow is disputed, so grade B.

*In LTF:* the brief supplies the goal (`BriefTab`), the debrief and `ResultView` supply feedback after the flight, and the challenge sequence in each module supplies difficulty. The rules below cover how to match difficulty.
:::

::: myth
**"Flow is a well-defined state with eight components that designers can engineer."** Component lists differ between summaries, a critical review found 24 distinct operationalizations in 42 studies, and two often-cited features load poorly on a general flow factor [@csikszentmihalyi2008flow]. The conditions (clear goals, feedback, challenge matched to skill) are useful design targets; the promise of flow is not.
:::

### Uncertain outcomes and multiple levels

Malone asked what makes computer games intrinsically fun and whether that could be built into instruction, and answered with three categories: challenge, fantasy and curiosity [@malone1981toward]. Challenge depends on goals with uncertain outcomes. The paper lists ways to make outcomes uncertain: variable difficulty, multiple level goals, hidden information and randomness. A goal motivates when the person cannot be sure of reaching it, so a game provides goals, a way to tell whether one is getting closer, and uncertainty about success. Malone calls his own theory rudimentary, and it was built from studies of games, not tested as a framework.

Uncertainty is a different idea from difficulty. A goal can be hard and certain (a learner who knows they cannot do it) or moderate and uncertain (a learner who might). The second is the motivating one. That is also why the challenge must be matched to the person: uncertainty of outcome is a property of the learner and the task together.

::: {.rule #MOT-048 grade="C"}
**Create challenge through uncertainty in the scenario (conditions, hidden cues, levels of the goal), never through uncertainty in the scoring or the instructions.** Challenge depends on uncertain outcomes, produced by variable difficulty, multiple-level goals, hidden information and randomness [@malone1981toward]; feedback should reduce uncertainty between performance and goal [@shute2008focus]. Malone's theory is a design proposal, so grade C.

*In LTF:* tiers give multiple levels; random events in `FlyPanel` and varied setups give scenario uncertainty. Criteria text, tier descriptions and the scoring rule in `shared/scoring.ts` stay fully explicit, so the learner is never unsure how a flight will be judged.
:::

### The challenge point moves

The challenge point framework in motor learning makes the matching problem explicit [@guadagnoli2004challenge]. Learning depends on the information available from performance. Too little challenge gives too little to learn from; too much overwhelms. The optimal level of functional difficulty (how hard the task is for this person in these conditions, as opposed to its nominal difficulty) differs by skill level and moves as skill grows. Predictions attributed to the framework include that frequent feedback is more useful for difficult tasks and less frequent feedback for easy ones. Support is mixed and mostly indirect, and the framework's main weakness is that functional difficulty cannot be measured directly.

Wickens and colleagues' meta-analysis of 37 transfer studies tested two common ways of easing a hard task [@wickens2013effectiveness]. Increasing-difficulty training worked when the increases were adaptive and not when they came in fixed steps. Part-task training generally produced negative transfer when parts that are done together in the whole task were practiced separately, but variable-priority training of the whole task (practicing it whole with shifting emphasis) worked. Experienced learners benefited less, or suffered more, from both strategies.

::: {.rule #MOT-049 grade="B"}
**Raise challenge difficulty adaptively from each learner's results, not in fixed steps set by lesson number.** Increasing-difficulty training worked when adaptive and not when fixed in a meta-analysis of 37 studies [@wickens2013effectiveness], and the optimal challenge point moves with skill [@guadagnoli2004challenge]. The meta-analysis is mostly laboratory and simulated tasks, and its full text was not read, so grade B.

*In LTF:* a future step for challenge content: variants of a challenge with harder conditions, offered on `ResultView` as the "Next" suggestion after consecutive passes at Silver or better, and an easier variant offered after repeated "Not passed yet". The thresholds are product choices to test. Which conditions make a variant harder is a content decision verified in the sim.
:::

::: {.rule #MOT-050 grade="B"}
**After repeated failure, offer an easier path without hiding the original challenge or marking the learner as failed.** Too much challenge overwhelms and yields little learning [@guadagnoli2004challenge], early repeated failures lower self-efficacy [@bandura1977selfefficacy], and difficulties are only desirable when the learner can respond to them [@bjork2009making]. Grade B.

*In LTF:* after two "Not passed yet" results on one challenge, `ResultView` adds a secondary action: the recommended lesson for the failed required criterion (already available through `reviewLink`) and, where one exists, an easier variant. The `Fly again` button stays.
:::

::: {.rule #MOT-051 grade="B"}
**Let learners with prior experience skip ahead or take a diagnostic challenge rather than repeat novice supports.** Experienced learners benefited less from, or were harmed by, simplified training [@wickens2013effectiveness], consistent with the expertise-reversal literature covered in the learning-science Part. Grade B.

*In LTF:* keep the current freedom to open any module from `CurriculumMap` and any challenge from `ChallengesPage`. A learner who arrives having flown other simulators should not meet a gate.
:::

### Desirable difficulty and the mood cost

Difficulty that helps learning often feels bad. The Bjorks distinguish performance during practice from learning that lasts, and show that conditions which speed apparent learning often fail to support retention and transfer, while conditions that slow it, such as varying conditions, interleaving, spacing and testing, often optimize it [@bjork2009making]. The word "desirable" matters: a difficulty becomes undesirable if the learner lacks the background to respond to it. Learners and teachers prefer the conditions that make practice feel smooth, because they mistake current performance for learning [@soderstrom2015learning].

This creates a real tension with motivation. Varied, spaced practice lowers in-practice success, which by the self-efficacy account lowers confidence. The resolution suggested by the Bjorks is to tell learners once, plainly, that struggle during mixed practice is expected and useful, and to keep the difficulty within reach [@bjork2009making]. The deliberate-practice evidence adds a domain reason: practice explained much less of the variance in performance for low-predictability activities, and the meta-analysis gave handling an aviation emergency as its example of low predictability [@macnamara2014deliberate]. Skills for unpredictable situations need varied scenarios, not drills on one setup.

::: {.rule #MOT-052 grade="B"}
**Vary the conditions of challenges across attempts and modules, and say once, plainly, that harder mixed practice is meant to feel harder.** Varying conditions and interleaving slow apparent progress but improve retention and transfer [@bjork2009making; @soderstrom2015learning], and practice on one setup explains less in low-predictability domains [@macnamara2014deliberate]. Grade B: strong laboratory evidence, thinner classroom and skill evidence for the full set.

*In LTF:* challenges within a module use different airports or conditions where the verified content allows, and the module intro on `ModulePage` carries one sentence explaining why. Do not show a "streak of perfect attempts" anywhere, since a perfect blocked streak is performance, not learning.
:::

### Protecting concentration

Flow research treats interruption as the enemy of involvement, and the games research found that intuitive controls support competence, autonomy and presence [@csikszentmihalyi2008flow; @przybylski2010motivational]. For LTF the companion screen is part of the cockpit environment during a challenge. Every element it shows either supports the flight (steps, timer, event cards) or competes with it.

::: {.rule #MOT-053 grade="B"}
**Show nothing in Fly mode that the flight does not need: no pop-ups, celebratory animations, reminders, sign-up prompts or upsells.** Interruptions threaten concentration and presence [@csikszentmihalyi2008flow; @przybylski2010motivational], and nagging is a recognized dark pattern that is especially costly when it interrupts a task [@gray2018dark]. Grade B: the mechanism is supported; the specific application is an inference.

*In LTF:* `FlyModeLayout` already has no header or footer. The `BetaBanner` currently shows above it on every page including Fly mode; hide it in `FlyModeLayout` once dismissed elsewhere, or always. `SignupBanner`, toasts other than errors, and the `tier-pop` animation never appear there.
:::

### What this means for Learn to Fly

LTF has the parts of a flow-supporting challenge loop already: stated criteria in `BriefTab`, a focused `FlyModePage`, an immediate debrief and result. What it lacks is difficulty matched to the person. Today every learner meets the same challenge sequence, and the "Next" button on `ResultView` points to the next challenge in order. Build adaptive variants (MOT-049) and an easier path after repeated failure (MOT-050), as content allows and the sim verifies. Vary conditions across a module (MOT-052). Protect Fly mode from everything that is not the flight (MOT-053), starting with the `BetaBanner`. Do not use "flow" in marketing copy; the landing page can say "the right level of challenge", which the evidence supports, rather than promising a state researchers cannot yet define.

## Fantasy, curiosity and the simulator as the game

### Why games engage: needs met during play

Przybylski, Rigby and Ryan's model holds that both the appeal of video games and their effects on well-being come from their potential to satisfy competence, autonomy and relatedness [@przybylski2010motivational]. The research programme behind it reports that perceived in-game autonomy and competence were associated with enjoyment, preference and changes in well-being from before to after play; that competence and autonomy were related to intuitive controls and to presence or immersion; and that in an online multiplayer community, autonomy, competence and relatedness independently predicted enjoyment and future play. The group built the Player Experience of Need Satisfaction (PENS) scales, covering autonomy, competence, presence and intuitive controls. The model proposes that intuitive, readily mastered controls help competence and autonomy, which in turn predict presence, enjoyment and wanting to play again.

The limits are stated by the authors: the studies mostly assigned people to play, while real play is self-selected; the PENS and presence measures were new; and the work came mostly from one group, one of whose authors had an industry affiliation [@przybylski2010motivational]. The research concerns entertainment games, so transfer to learning is an inference, and the classroom gamification study shows game-like appeal does not automatically carry over [@hanus2015assessing].

For LTF the model frames the main motivational asset correctly. Flight Simulator is the game. Whether the learner enjoys LTF depends largely on whether the sim, with LTF's help, makes them feel competent and in control, and the main threat to that is friction: unfamiliar controls, a confusing setup, a companion screen that demands attention.

::: {.rule #MOT-054 grade="B"}
**Reduce friction before the first success: give a plain, hardware-specific control map and setup, so the learner's first sim minutes are spent flying, not configuring.** Intuitive controls supported competence, autonomy and presence, which predicted enjoyment and continued play [@przybylski2010motivational]; ability is the factor most often missing when a behavior does not happen [@fogg2009behavior]. Mostly one research group and games rather than courses, so grade B.

*In LTF:* Module 0's lessons and the `BriefTab` "Sim setup" list (with its copy buttons) carry this. A control-map reference for the learner's input device (keyboard, controller, yoke) belongs one click from `FlyModePage`. Bindings themselves are verified in the sim, not asserted by design.
:::

### Intrinsic and extrinsic fantasy

Malone distinguishes two kinds of fantasy [@malone1981toward]. Extrinsic fantasy depends only weakly on the skill being used: the story is a coating, such as a reward cartoon after correct answers. Intrinsic fantasy is intimately tied to the skill: using the skill drives the fiction. He argues fantasy has cognitive and emotional advantages in instructional environments, and implies that the intrinsic kind is the stronger.

The later evidence on game fiction is mixed, as Sailer and Homner summarize: one review found positive effects of game fiction on knowledge and motivation, while meta-analyses by Wouters and colleagues found serious games with narrative elements no more effective than those without [@sailer2020gamification]. In Sailer and Homner's own data, game fiction moderated behavioral outcomes (a significant small effect with fiction, none without) but not cognitive or motivational ones, and the result is post hoc [@sailer2020gamification].

For LTF the distinction resolves a recurring temptation. A mascot, a story arc about "becoming an ace", or a cartoon after a correct answer would be extrinsic fantasy. A scenario brief that places the learner at a specific airport with specific conditions, where the skill is the story, is intrinsic fantasy, and the simulator supplies it without any extra art.

::: {.rule #MOT-055 grade="C"}
**Use scenario framing that is the task itself (where you are, what the conditions are, what you are trying to do), and never add a story, mascot or character that does not depend on the skill.** Intrinsic fantasy is tied to the skill and extrinsic fantasy is a coating [@malone1981toward]; game fiction showed a small, post hoc behavioral effect, and narrative serious games were no more effective than plain ones in other meta-analyses [@sailer2020gamification]. Mixed evidence, a theory-based distinction, so grade C.

*In LTF:* the challenge eyebrow and title ("Challenge C4.3 · Landing", "Full-stop landing") and the scenario in Goal are the fiction. No mascot, avatar or narrative character is added to `LessonPage`, `ChallengePage` or `DashboardPage`.
:::

### Seductive details

The case against decorative interest comes from learning research. Harp and Mayer found, across four experiments with 357 undergraduates, that students who read science passages with interesting but irrelevant "seductive details" recalled fewer main ideas and solved fewer transfer problems [@harp1998seductive]. Highlighting the main ideas, stating learning objectives and signaling did not remove the effect. Placing the details at the start of the passage made it worse; placing them at the end reduced it. The authors favor a schema explanation: details read first prime an inappropriate framework around which the reader organizes the rest. Rey's meta-analysis of 39 experimental effects found the effect small to medium for retention and medium for transfer, with evidence for and against each of four proposed mechanisms [@rey2012review]. Later work describes the effect as real on average but variable and sometimes hard to elicit.

Aviation invites seductive detail. War stories, aircraft history and impressive facts are exactly what a flight-sim audience enjoys, and exactly what can pull a beginner's attention away from basic control relationships. Rey's caveat cuts the other way too: the research measures learning after short sessions, not persistence over weeks, and interesting material might keep people coming back [@rey2012review]. The defensible position is placement, not prohibition.

::: {.rule #MOT-056 grade="A"}
**Keep interesting but non-essential material (history, trivia, anecdotes, decorative imagery) out of the core explanation, and place any such material after it, marked optional.** Seductive details reduced recall and transfer in controlled experiments and in a meta-analysis of 39 effects, and placing them first was worse than placing them last [@harp1998seductive; @rey2012review]. Replicated on average, though variable in size and mostly short laboratory reading.

*In LTF:* content authors put background stories in a `note` callout or a "Go deeper" resource card after the core section, never in the opening paragraph of a lesson section. A story about an incident is acceptable in the core text only when it illustrates the mechanism the section teaches.
:::

### Curiosity

Malone's third category, curiosity, has sensory and cognitive components [@malone1981toward]. Cognitive curiosity is aroused when learners come to believe their knowledge is incomplete, inconsistent or unparsimonious. In practice that means showing a gap, a contradiction or a case that the learner's current rule does not explain, so that resolving it becomes interesting. Keller lists incongruity and inquiry among attention strategies [@keller1987development]. This is interest that comes from the content's own structure, the opposite of a seductive detail.

::: {.rule #MOT-057 grade="C"}
**Open lesson sections with a question or case the learner's current understanding cannot yet explain, rather than with a fact or a decoration.** Cognitive curiosity is aroused by revealing incomplete or inconsistent knowledge [@malone1981toward], and incongruity and inquiry are standard attention strategies [@keller1987development]. Design theory without a controlled test of the framework, so grade C.

*In LTF:* a section in `LessonRenderer` may open with a one-line prediction prompt ("What do you expect the airspeed to do when you raise the nose?") followed by the widget that answers it. The aviation content of the prompt and its answer is verified lesson content.
:::

### Medium is not the motivation

Clark's review of media comparisons warns that apparent gains from a new medium are vulnerable to two rival explanations: differences in instructional method, and novelty [@clark1983reconsidering]. When one instructor planned and taught both a computer and a conventional course, the advantage fell from 0.51 to 0.13. The argument applies to motivational claims too. "Interactive widgets are more engaging" may be true because of the method they carry (a prediction prompt, immediate feedback) rather than the interactivity, and any novelty advantage fades.

::: {.rule #MOT-058 grade="B"}
**Justify a widget or simulation feature by the method it enables (prediction, feedback, practice), not by being interactive or engaging.** Media effects shrank sharply when method was held constant and faded with study length [@clark1983reconsidering]. Grade B: older media studies, a durable methodological point.

*In LTF:* each widget registered in `features/widgets/registry.ts` states, in its frame description, what the learner predicts or practices with it. The "Quiz me" mode of `WidgetFrame` is the method; the animation is the vehicle.
:::

### What this means for Learn to Fly

LTF is unusually well placed here, because its game is a full flight simulator that supplies fantasy, presence and challenge without any work on the web side. The risk is the opposite of most products: adding decoration where the real thing is already present. Keep the scenario-led briefs and the aviation framing (Brief, Fly, Debrief; "Fly mode"; the POH-style reference rail), which are intrinsic to the skill. Do not add mascots, story arcs or reward cartoons (MOT-055). Move aviation trivia and stories out of core lesson text (MOT-056). Use prediction prompts and widgets to raise curiosity from the content itself (MOT-057), and judge widgets by the method they carry (MOT-058). The largest motivational gain on this axis is probably friction removal in Module 0 and Fly mode (MOT-054), since the needs model ties competence and presence to controls that the learner can master quickly.

## Habits, return visits and honest persuasion

### Why learners stall

A self-paced course has a known weakness. In the mastery-learning meta-analysis, self-paced mastery programmes often reduced completion rates in college classes, even while mastery approaches raised examination performance overall (an average effect of 0.52 across 103 studies, and 0.71 on follow-up examinations about eight weeks later in 11 studies) [@kulik1990effectiveness]. Group-paced programmes produced larger effects than self-paced ones. LTF is entirely self-paced, so the risk is not that learners dislike it but that they drift.

Fogg's behavior model is a useful diagnostic for drift [@fogg2009behavior]. A behavior happens only when motivation, ability and a prompt (originally "trigger") converge at the same moment; if it does not happen, at least one is missing. Motivation and ability trade off: high motivation can compensate for a hard task and an easy task needs little motivation. Ability is a function of the person's scarcest resource at that moment, so "your weakest link determines what makes a behavior hard to do". The model is a heuristic, widely cited, with no experiment testing its full predictions, and its constructs are broad enough to explain any failure afterward. It is also double-edged: the same model that helps remove friction from a good habit can be used to prompt someone when motivation is high and judgment low.

For LTF the most likely missing element is ability, not motivation. Opening the sim, setting up a challenge and finding the right lesson is a lot of work for a weeknight. Making the next session small and obvious is the first lever.

::: {.rule #MOT-059 grade="C"}
**When learners stall, check ability and prompt before motivation: make the next session small, obvious and ready to start.** In the behavior model a behavior fails when motivation, ability or a prompt is missing, and ability is set by the scarcest resource at that moment [@fogg2009behavior]; self-paced mastery courses lost completers [@kulik1990effectiveness]; motivational nudges have weak average effects once publication bias is corrected [@maier2022no]. The model is untested as a whole, so grade C.

*In LTF:* the Continue card on `DashboardPage` and "Continue where you left off" on the landing page already supply the prompt. Add the expected time ("About {n} minutes") from the lesson or challenge metadata, and when the next item is a challenge, put "Sim setup" one click away so the learner can prepare before launching the sim.
:::

### Nudges are weaker than they look

A large meta-analysis of nudging had reported a moderate average effect (d = 0.43). Maier and colleagues reanalyzed it with a publication-bias correction and found that "no evidence for the effectiveness of nudges remains": the adjusted overall estimate was d = 0.04 or 0.11 depending on the analysis [@maier2022no]. Information nudges (telling people what others do) adjusted to 0.00, assistance nudges to 0.01, and structure nudges (defaults and other changes to the decision environment) to 0.12, which the authors treat as undecided. Heterogeneity in almost every category means some nudges might work even if the average is near zero, and the authors later said the overall result is better described as undecided than as evidence against nudging.

The implication is a budget rule. Messages such as "most learners finish Module 0 in a week" are information nudges, the category with the weakest evidence. Effort spent on making steps simpler and clearer is a better bet than effort spent on motivational messaging.

::: {.rule #MOT-060 grade="B"}
**Do not rely on social-norm or reminder messages to raise return visits; spend the effort on simpler steps and clearer next actions.** After correcting for publication bias, the average nudge effect was near zero, information nudges showed evidence against an effect, and structure nudges were undecided [@maier2022no]. A reanalysis whose conclusion depends on the bias model, so grade B.

*In LTF:* no "X learners are flying this now" counters on `ChallengesPage` or the landing page. If a structural nudge (for example a default reminder setting in v2) is used, it is tested with the expectation of a null result.
:::

### Streaks and loss frames

A streak counts consecutive days of activity and resets when a day is missed. Its pull comes from loss: the longer the streak, the more there is to lose. Tversky and Kahneman showed that the same outcomes described as gains or as losses reverse preferences. When a disease programme was framed as lives saved, 72 percent chose the sure option; framed as deaths, only 22 percent did [@tversky1981framing]. People tend to be risk averse for gains and risk seeking for losses. A Many Labs 2 replication reproduced the framing effect at about half its original strength, so the original magnitude is an overestimate, but the direction is reliable. The first gamification review adds that removing earned points and badges could harm users, possibly through loss aversion [@hamari2014gamification].

A streak is a loss frame applied to the learner's own behavior, and in SDT terms it works at the introjected level, through guilt at breaking it [@ryan2000selfdetermination]. For a hobby learned around sim sessions, often weekly, a daily streak also measures the wrong thing. `v2.md` plans a streak on the practice page ("days practised in a row", priority P1, "no guilt messaging") with practice reminders on the dashboard only and no email. That specification already removes the worst of the pattern. The rules below set what else it needs.

::: {.rule #MOT-061 grade="B"}
**If a streak is shown, present it as a gain record (days practiced, best run) with no warning of loss, no reset alarm and no penalty, and never make it the most prominent element on a page.** Loss frames shift choices toward risk and pressure [@tversky1981framing]; losing earned game elements can harm users [@hamari2014gamification]; guilt-based reasons are introjected, controlled motivation [@ryan2000selfdetermination]. The framing evidence is replicated at reduced size; its application to streaks is an inference, so grade B.

*In LTF:* the v2 `/practice` streak shows "Practiced 4 of the last 7 days" or "Longest run: 9 days" rather than a flame and a countdown. No copy says "Don't lose your streak", and missing a day produces no message.
:::

::: {.rule #MOT-062 grade="C"}
**Count practice in weeks rather than days for a course used around simulator sessions.** Sporadic users may not engage with a persistent daily game layer [@hamari2014gamification], and spacing practice over time is itself beneficial for learning [@bjork2009making]. Grade C: an application to LTF's usage pattern.

*In LTF:* the v2 practice summary uses a weekly window; the v2 "refresher suggestion" (offered when a skill has not been flown for a while) is the better return prompt, because it is tied to a skill rather than to a calendar.
:::

### Reminders without nagging

Gray and colleagues' taxonomy of dark patterns names five strategies: nagging (repeated redirection, such as a notification prompt that offers only "Not Now" and "OK"), obstruction, sneaking, interface interference, and forced action [@gray2018dark]. Nagging is the one motivational features slide into. A reminder that repeats after being declined, or a banner that returns after dismissal, crosses from prompt to pressure. Fogg's own reading is that a reminder after a missed session is a signal and a guilt message is a dark pattern [@fogg2009behavior].

`SignupBanner` on `LessonPage` is a good model of a non-nagging prompt: it is small, sits in a `bg-surface-sunken` strip, has a dismiss control, and stays dismissed (`ltf-signup-banner-dismissed` in localStorage). The completion panel's "Not now" for visitors gives a real decline without shaming.

::: {.rule #MOT-063 grade="C"}
**Ask for any reminder or notification permission once, in context, with a decline that is as easy as accepting, and never ask again after a decline unless the learner opens the setting.** Nagging is a defined dark pattern [@gray2018dark], regulators list repeated prompts among tactics that subvert choice [@ftc2022bringing], and guilt prompts are the manipulative use of the behavior model [@fogg2009behavior]. Taxonomy and regulatory guidance, so grade C.

*In LTF:* keep the `SignupBanner` dismissal behavior and the "Not now" button. The v2 practice reminders, which are dashboard-only, are set in the Preferences section of `/account`, with the off state as default or as an equally weighted choice.
:::

### No confirmshaming, no false urgency

Mathur and colleagues crawled 11,286 shopping sites and found 1,818 dark-pattern instances, including countdown timers, low-stock messages and confirmshaming (decline buttons worded to shame, such as "No thanks, I don't want to learn") [@mathur2019dark]. They found 157 deceptive countdown timers on 140 sites. Luguri and Strahilevitz measured effects in randomized experiments: mild dark patterns more than doubled sign-ups for a dubious service (11.3 percent in control to 25.8 percent) and aggressive ones nearly quadrupled it (41.9 percent), with a strong backlash against the aggressive version; less educated respondents were more susceptible to mild patterns [@luguri2021shining]. Scarcity and "act now" countdowns had no significant effect. The FTC's staff report lists fake timers, false scarcity and buried choices among the practices it treats as deceptive and recommends that firms look beyond click-through to whether people understand what they agreed to [@ftc2022bringing].

For a free course these findings matter less for sales than for trust. LTF's honesty devices (`BetaBanner`, `DraftBadge`, "Last verified" lines, the not-a-certificate wording) are part of its identity. One confirmshaming button would undo them.

::: {.rule #MOT-064 grade="B"}
**Never use confirmshaming, false urgency, fake activity counts or guilt in any prompt to sign up, return or continue.** These patterns are widespread [@mathur2019dark], they measurably move decisions and provoke backlash when strong [@luguri2021shining], and regulators treat them as deceptive [@ftc2022bringing]. The effect evidence is from a simulated service offer, so grade B for transfer to a course.

*In LTF:* decline buttons read "Not now" or "Skip", never "No, I'll stay grounded". There are no countdowns on any page. The dashboard's "All caught up" message, which points to the roadmap or a retry for a better tier, is the model tone for an empty state.
:::

::: {.rule #MOT-065 grade="C"}
**Review every motivational or retention feature against the five dark-pattern strategies (nagging, obstruction, sneaking, interface interference, forced action) and require a written reason for any match.** The taxonomy was built for exactly this review and its authors recommend it as a checklist [@gray2018dark]; the characteristics in the crawl study (asymmetric, covert, deceptive, hides information, restrictive) give a second screen [@mathur2019dark]. A qualitative taxonomy, so grade C.

*In LTF:* add the five strategies to the pull request checklist for any change to `DashboardPage`, `SignupBanner`, the completion panel, reminders or the account Data section (deleting an account must stay as easy as creating one).
:::

### Framing progress

Framing also governs progress copy. "3 of 12 lessons done" and "9 lessons left" describe the same state, but the second frames it as a remaining burden. Tversky and Kahneman's lesson for an instructional product is to choose the frame that matches the true message and hold it, not to pick whichever frame drives behavior [@tversky1981framing].

::: {.rule #MOT-066 grade="C"}
**Describe progress as what is done and what is next, never as what is left to lose or still owed.** Gain and loss descriptions of the same outcome move choices differently [@tversky1981framing], and loss frames work through pressure [@ryan2000selfdetermination]. Grade C: the application to progress copy is untested.

*In LTF:* keep `CurriculumMap`'s "n lessons · n challenges · about h" and the `ProgressBar` `aria-valuetext` in gain form. Do not add "You're 80% of the way, don't stop now" or "3 lessons overdue".
:::

### What this means for Learn to Fly

LTF currently has almost no retention machinery, which is safer than most products and leaves room to do it well. The prompt it does have, the Continue card and the landing CTA, is the right kind: specific, honest and tied to the next real step. Strengthen it with time estimates and a short path to sim setup (MOT-059). Do not add social-norm counters or reminder campaigns as a substitute for making the next session easy (MOT-060). When the v2 streak arrives, build it as a gain record with a weekly window and no loss warning (MOT-061, MOT-062), which keeps it within the plan's own "no guilt messaging" requirement. Keep `SignupBanner` and "Not now" as the models for prompts (MOT-063), ban confirmshaming and false urgency outright (MOT-064), and put the five dark-pattern strategies on the review checklist (MOT-065).

## Measuring motivation honestly

### Engagement is not learning

The classroom study in which a gamified section showed falling intrinsic motivation and lower exam scores is a warning about metrics as much as about badges: an activity measure can rise while learning falls, and the link can run through motivation [@hanus2015assessing]. The learning research makes the general point. Performance during instruction is "often an unreliable index" of whether learning has occurred; the two can dissociate in both directions, and people often mistake performance during acquisition for a guide to long-term learning [@soderstrom2015learning]. Learning, defined as what persists, therefore has to be measured after a delay. The guidance hypothesis adds that a guided pass shows the guidance working, not the skill learned, so learning should be tested without help and after a delay [@salmoni1984knowledge].

For LTF, the tempting metrics are visits, lessons marked complete, time on page and attempts per week. Each is a performance or exposure measure. None says whether a learner can fly the pattern next month.

::: {.rule #MOT-067 grade="B"}
**Write a one-line hypothesis and a success metric for every motivational feature before building it, and make the metric a learning or persistence outcome, not raw activity.** Gamification reviews call for hypothesis-driven tests with consistent measures [@koivisto2019rise]; activity can rise while learning falls [@hanus2015assessing]; performance during practice is an unreliable index of learning [@soderstrom2015learning]; experiment guides insist the success criterion be agreed in advance and not short-term [@kohavi2009controlled]. Several converging sources, each indirect for LTF, so grade B.

*In LTF:* the hypothesis is written in the pull request, for example "Showing per-criterion change on `ResultView` increases the share of learners who retry a challenge within a week and pass it", with the metric defined before the feature ships.
:::

::: myth
**"If engagement goes up, the feature is working."** In the semester-long classroom comparison, the gamified section's exam scores fell, with the effect running through intrinsic motivation [@hanus2015assessing], and performance during practice can improve without learning [@soderstrom2015learning]. Engagement is at best a proxy, and for features built on extrinsic devices it can move opposite to the outcome that matters.
:::

### Power, duration and what LTF can test

Controlled experiments are the best design for causal claims about a feature, but they need traffic. Kohavi and colleagues give a rule of thumb of n = 16 sigma squared over delta squared per variant for 80 percent power, and an example in which detecting a 5 percent change in revenue needed over 409,000 users [@kohavi2009controlled]. They advise running at least one or two weeks and in multiples of a week, splitting traffic evenly for power, checking the system with an A/A test, and watching for novelty and primacy effects that may require weeks and an analysis restricted to new users. A "no significant difference" result does not prove there is no difference.

LTF, a free course in public beta, will not have the traffic to detect small effects of copy tweaks. That changes what it should test. It can test large differences (a result screen with per-criterion change against one without), over whole weeks, with one success metric agreed in advance. For small decisions it should decide from principle and the rules in this Part, not from underpowered tests.

::: {.rule #MOT-068 grade="C"}
**Test only large differences, run tests for whole weeks and past the novelty window, and decide small copy and styling questions from principle rather than from underpowered experiments.** Sample size grows with the inverse square of the effect to detect, novelty effects require long runs, and a null result does not prove harmlessness [@kohavi2009controlled; @koivisto2019rise]. Practitioner guidance and textbook statistics, so grade C.

*In LTF:* before any test, compute the needed sample from the rule of thumb using LTF's own recent numbers. If it is out of reach, record the decision and its rationale in the pull request instead.
:::

### Measure the needs, not satisfaction

The gamification reviews found that few studies used validated psychometric measures; the first found only one [@hamari2014gamification], and the larger review lists consistent instruments first in its agenda [@koivisto2019rise]. The games research provides scales aimed at the mechanism this Part cares about: the PENS measures of in-game autonomy, competence, presence and intuitive controls [@przybylski2010motivational]. Flow research suggests a short self-report of perceived challenge against perceived skill after an activity rather than inferring flow from clicks [@csikszentmihalyi2008flow]. Keller recommends evaluating motivational design with direct measures such as persistence, effort, emotion and attitude, not achievement scores alone [@keller1987development].

::: {.rule #MOT-069 grade="B"}
**When LTF measures motivation, use short need-satisfaction items (competence, autonomy, and challenge against skill) and a behavioral persistence measure, not a generic satisfaction rating.** Validated measures were rare in gamification studies and are first on the research agenda [@hamari2014gamification; @koivisto2019rise]; need-satisfaction scales were built for play [@przybylski2010motivational]; persistence and effort are the recommended direct measures [@keller1987development]. Grade B: the instruments are partly validated, mostly by their authors.

*In LTF:* an optional two-question check after a debrief ("How hard was this for you?" and "How able did you feel?") on a five-point scale, stored with the attempt, plus the behavioral measure of whether the learner flew the challenge again. Keep it optional and skippable so it is not itself a nag.
:::

### Check that the mechanism moved

The mindset meta-analysis found that almost half of the studies reporting manipulation checks had failed to change mindsets, and that intervention effects appeared when the check failed but not when it succeeded [@sisk2018extent]. The national trial, by contrast, pre-registered its outcomes, measured the mindset shift, used independent data collection and corroborated its result with a blinded Bayesian analysis [@yeager2019national]. The lesson generalizes. If LTF changes something on the theory that it raises perceived competence, it should check whether perceived competence moved, or it cannot know why any outcome changed.

::: {.rule #MOT-070 grade="B"}
**For any feature built on a motivational theory, measure the mechanism (for example perceived competence) as well as the outcome, and pre-register both.** Mindset interventions showed effects that did not run through mindset [@sisk2018extent], and the strongest trial in that literature pre-registered outcomes and measured the shift [@yeager2019national]; nudge literature effects shrank sharply once publication bias was corrected [@maier2022no]. Grade B.

*In LTF:* the pull request for a motivational feature names the mechanism measure from MOT-069 and the outcome, and the result is recorded in `docs/` whether it is positive, null or negative.
:::

### Logs over recollection

The deliberate-practice meta-analysis found that the relationship between practice and performance depended on how practice was measured: retrospective interviews gave 20 percent of variance, retrospective questionnaires 12 percent and logs kept at the time 5 percent [@macnamara2014deliberate]. The authors reason that logs are probably more accurate because people do not remember the past perfectly. Any LTF feature that shows practice totals should use logged sessions. The dashboard's "Sim time (estimated)" tile already labels itself as an estimate, which is honest; the estimate should come from logged attempts, not from a learner's recollection.

::: {.rule #MOT-071 grade="B"}
**Show practice totals only from logged activity, labeled as estimates where they are estimates.** Retrospective practice estimates inflated the practice and performance relationship compared with contemporaneous logs [@macnamara2014deliberate]. Grade B.

*In LTF:* keep the "(estimated)" label on the `DashboardPage` "Sim time" tile, and compute it only from attempts and lesson metadata. Copy never implies a number of hours guarantees a level of skill, which this literature does not support.
:::

### Report what did not work

The publication-bias reanalysis of nudging and the gamification reviews' worry that few negative results were published both point to the same discipline for LTF's own experiments [@maier2022no; @koivisto2019rise]. A team that only records wins will believe its features work better than they do.

::: {.rule #MOT-072 grade="C"}
**Record every motivational experiment's result, including nulls and negatives, and remove features that fail their pre-registered test (subject to MOT-016).** Selective reporting inflates apparent effects in the nudge and gamification literatures [@maier2022no; @koivisto2019rise], and experiment guides warn against reading a null as proof of harmlessness [@kohavi2009controlled]. Grade C.

*In LTF:* results go into a short log under `docs/` linked from the pull request. A failed feature is retired with notice, and earned records (tiers, the `CourseBadge`) are never removed.
:::

### What this means for Learn to Fly

LTF's analytics should be designed around the outcomes this Part cares about: whether learners pass challenges after earlier failures, whether they retry, whether they return after a gap, and whether they can still pass a challenge they passed weeks ago. Raw visits and "lessons completed" are context, not success. Every motivational feature arrives with a written hypothesis and metric (MOT-067), is tested only where traffic allows (MOT-068), measures the needs and persistence rather than satisfaction (MOT-069), checks the mechanism (MOT-070), and records its result whatever it is (MOT-072). The plan already gives LTF a place for this: the v2 admin "learning signals" stats page. Its first tables should be retries after failure and repeat passes after a delay, because those are closer to learning than anything a session counter shows.
