# Aesthetics, Emotion and Trust

This Part covers what people feel about an interface before, during and after they use it, and how far those feelings track what the interface actually does. It takes in the aesthetic-usability literature from Kurosu and Kashimura's ATM layouts to the experiments that reversed their finding; the research on first impressions formed in a fraction of a second; visual complexity, typicality and novelty; the two main instruments for measuring perceived aesthetics; processing fluency and the mere exposure effect; emotional design in learning materials; and web credibility. It ends with the question that matters most for a product that teaches safety-relevant procedures: how to make a page look trustworthy without making it look more trustworthy than it is.

The evidence is uneven, and the Part grades it accordingly. The oldest and most quoted claim in the field, that what is beautiful is usable, has been qualified, mediated and in one strong experiment reversed, so it appears here as a conditional finding, not a law. The findings on first impressions and on visual complexity are among the best replicated in human-computer interaction. The mere exposure effect rests on a large meta-analysis. The credibility research is mostly survey and short laboratory work, and the guidelines built on it are craft consensus. Use the rules as a review instrument: each one names the LTF component it applies to, and the final chapter collects them into decisions and a checklist that can be run against a pull request.

## Apparent usability and the beauty halo

### The original finding

Kurosu and Kashimura drew a distinction that the rest of this Part depends on. Inherent usability is the measurable ease and safety of operating a system. Apparent usability is how easy the interface looks to use before, or without, operating it [@kurosu1995apparent]. Their two-page CHI '95 report argued that apparent usability is driven more by how beautiful an interface looks than by the design factors usability engineers treat as the causes of ease.

The stimuli were layouts of an automatic cash dispenser screen. Twenty-six people (nine GUI designers, six industrial designers, eight engineers and three secretaries) each arranged the same set of elements (numeric keys, special keys, cancel and correction keys, main and sub displays) as they saw fit, producing 26 layouts. Two hundred fifty-two students rated each layout on 10-point scales for apparent usability and for beauty. The two rater groups, design students and psychology students, agreed well enough that their data were merged [@kurosu1995apparent].

From interviews with interface designers the authors derived seven strategies designers believe make a layout usable: glance sequence, familiarity, grouping, two operation-sequence strategies, hand dominance, and a safety strategy (how far the cancel key sits from the main keys). Each strategy was scored for every layout and correlated with the apparent-usability ratings. Beauty and apparent usability correlated at 0.589. Most of the designers' strategies correlated weakly or not at all with apparent usability: glance sequence at 0.000, grouping at 0.075, hand dominance at -0.127 and safety at 0.137. One strategy beat beauty: familiarity of the keypad arrangement, at 0.730 [@kurosu1995apparent].

That last number is usually left out when the study is retold, and it is the most useful thing in it. The single strongest predictor of whether a layout looked easy was whether it looked like layouts people had already used. Beauty came second.

### Replication across a culture

Tractinsky asked whether the finding was a Japanese peculiarity or an artifact of the rating procedure [@tractinsky1997aesthetics]. He used the same 26 layouts, translated into Hebrew, in three experiments with Israeli engineering students. Experiment 1 (104 students) copied the original procedure, with layouts projected for about 20 seconds and both ratings given together. Experiment 2 (81 students) showed the layouts in two separate rounds, one rating per round, to test whether answering both questions at once created the correlation. Experiment 3 (108 students) presented the layouts on personal computers in random order, one question per pass, and recorded response times.

The correlation between aesthetics and apparent usability was 0.921 in Experiment 1, far higher than the original 0.59, and Experiment 2 gave closely similar results, which weakens the explanation that rating both qualities together produces the link [@tractinsky1997aesthetics]. Mean ratings were similar across the two countries (aesthetics 5.9 in Israel against 6.0 in Japan; apparent usability 5.4 against 5.8). Participants took longer to rate usability (8.68 seconds on average) than aesthetics (7.58 seconds), a hint that the usability judgment involves more inference. A multitrait-multimethod analysis found strong convergent validity but only tentative discriminant validity, with most of the violations in Experiment 1.

A correlation of 0.921 between two single-item scales should raise a question rather than settle one. It leaves open that raters treated "how easy is this" and "how beautiful is this" as the same overall like-or-dislike judgment. The study shows how quickly and consistently people form a combined impression of a screen; it does not show that the screen is easy.

### Adding real use

Tractinsky, Katz and Ikar then asked whether the link survives actual use, and which of the two qualities, real usability or interface beauty, drives judgments afterwards [@tractinsky2000what]. The design was a 3 by 2 between-groups experiment with 132 third-year industrial engineering students, 124 of whom were analyzed. Aesthetics had three levels, chosen for each participant from nine ATM layouts that held the same objects in different arrangements, based on that participant's own ratings. Usability had two levels, manipulated by adding delays (9 seconds on average per task), buttons that did not respond the first time they were pressed, and one task that blocked a shortcut. Participants did 11 tasks on a simulated ATM and rated aesthetics, usability and amount of information before and after, plus satisfaction after.

The manipulations worked. Pre-use aesthetics ratings were 8.26, 4.97 and 2.07 in the high, medium and low conditions, and tasks took 23.5 seconds in the high-usability condition against 37.5 seconds in the low one. Aesthetics had no effect on completion time or errors. Perceived aesthetics and perceived usability correlated 0.66 before use and 0.71 after. Satisfaction after use correlated 0.87 with perceived usability and 0.71 with perceived aesthetics [@tractinsky2000what].

The headline result came from the multivariate analysis. With pre-use perceived usability as a covariate, only the aesthetics factor affected post-use perceptions, including perceived usability. The real usability manipulation did not. Under high aesthetics, post-use ratings did not drop even when the machine was slow and buttons failed. Ratings of the medium and low aesthetics layouts rose after use, which the authors speculate may reflect mere exposure or adaptation [@tractinsky2000what]. They tied the result to the social-psychology finding that attractive people are assumed to have other good traits, and the title gave the field its slogan.

The authors flagged their own limits: short use, a homogeneous student sample, and bottom-line ratings rather than process data. The next chapter shows what happened when the usability manipulation was made much stronger.

### Beauty and goodness are different judgments

Hassenzahl proposed a model that splits what people perceive in an interactive product into pragmatic attributes (manipulation, usability, usefulness for tasks) and hedonic attributes, which divide into stimulation (novelty and interest) and identification (how well the product expresses who you are or want to be) [@hassenzahl2004interplay]. These feed two overall judgments: beauty, a visual and self-oriented judgment, and goodness, a broader judgment that the product is satisfying or desirable.

In two studies with four skins of an MP3 player application, judged without use in the first and after use in the second, beauty before use was predicted only by hedonic identification, while goodness was predicted by hedonic attributes and by anticipated pragmatic quality. After use, perceived usability became a strong determinant of goodness. Perceived usability and goodness moved with experience; hedonic attributes and beauty stayed stable [@hassenzahl2004interplay]. When Hassenzahl controlled the correlation between pragmatic quality and beauty for hedonic quality, the beauty-usability correlation disappeared [@tuch2012beautiful].

The model is supported by moderate evidence (two studies, four skins, one product type), and it proposes causal paths from correlational data, so treat it as a well-argued frame. Its practical content is that "looks good" and "is good" separate as soon as people use a product, and that beauty is the more stable of the two.

::: myth
**"What is beautiful is usable."** The slogan comes from an ATM experiment in which high aesthetics protected post-use usability ratings from a modest usability manipulation [@tractinsky2000what]. It is often repeated as a general law: make it beautiful and people will find it easy. Later work does not support the general form. Hassenzahl and Monk reviewed 25 independent correlations from 15 papers, found them highly variable, and concluded that the link is indirect, mediated by an overall judgment of goodness, and overplayed [@hassenzahl2010inference]. A strong usability manipulation reversed the direction: poor usability lowered perceived beauty, and beauty did not raise perceived usability [@tuch2012beautiful]. The defensible claim is narrower: when people have little experience of a product and its usability differences are small, beauty colors their judgment of ease.
:::

::: {.rule #AES-001 grade="B"}
**Treat a beginner's first judgment of how hard LTF is to use as a reading of its looks and its familiarity, not of its usability.** Ratings of apparent usability tracked beauty (0.589) and, more strongly, familiarity (0.730), while most of the factors designers believe create usability did not predict them [@kurosu1995apparent]; the link replicated in a second culture at 0.921 [@tractinsky1997aesthetics]. The evidence is correlational ratings of static screens by students, so it describes the impression, not its causes. The impression still matters, because a beginner deciding whether flying is within reach decides from it.

*In LTF:* the landing hero, `CurriculumPage` and the first lesson (`/learn/m0-getting-started/l0-1-welcome`) are judged on this basis by every new visitor; their review must ask "does this look easy and familiar" separately from "is this easy".
:::

::: {.rule #AES-002 grade="B"}
**Use the familiar form for every control, list and procedure a beginner operates, and spend novelty elsewhere.** In the study that started this literature, familiarity of the arrangement was the strongest single predictor of apparent usability, stronger than beauty [@kurosu1995apparent]. The finding comes from one screen type, and familiarity there meant a familiar keypad layout, so its extension to web conventions is an inference, but it is a conservative one.

*In LTF:* checklists in `ChecklistPage` and the `FlyPanel` step rows stay vertical lists with checkboxes; `QuizBlock` stays question, choices, check, feedback; `Tabs`, `Select` and `Breadcrumbs` keep standard behavior. Distinctiveness lives in `LessonPath`, the instrument widgets and the logo, not in how a checkbox works.
:::

::: {.rule #AES-003 grade="B"}
**Never accept learner satisfaction with an attractive build as evidence that its flow is usable.** In the ATM experiment, high aesthetics kept post-use usability ratings up even when tasks took longer and buttons failed, and satisfaction correlated 0.87 with perceived usability [@tractinsky2000what]. A polished prototype can therefore hide friction from the people rating it. The result is from a short session with students; its lesson for evaluation holds regardless of how general the effect is.

*In LTF:* a redesign of `LessonPage`, `ChallengePage` or `DebriefForm` is accepted on task evidence (time to complete, errors, abandonment, wrong rubric selections), with ratings reported alongside, never instead.
:::

::: {.rule #AES-004 grade="B"}
**Separate beauty from goodness in every review: judge identity and appeal on entry surfaces, and judge usefulness on surfaces people return to.** Before use, beauty was predicted by hedonic identification; after use, goodness came to depend on perceived usability, and beauty stayed stable while goodness moved [@hassenzahl2004interplay]. Evidence is two studies with four skins of one product, so the model guides attention rather than predicting outcomes.

*In LTF:* the landing page and the curriculum map carry identification ("this is a place for people who want to fly"); `FlyModePage`, `ChecklistPage`, `QuizBlock` and the reference hub earn or lose the product's goodness through repeated use, and their reviews weight task quality first.
:::

::: {.rule #AES-005 grade="B"}
**Expect early ratings from new learners to be generous, and re-measure after several sessions before drawing conclusions.** People with little experience of a product infer its usability from its looks through a general judgment of goodness, and that inference gives way to direct evidence [@hassenzahl2010inference]. In the ATM study, ratings of the less attractive layouts rose after use [@tractinsky2000what], so the first reading can also understate. The direction of drift is not fixed; the instability is.

*In LTF:* any survey attached to the beta (the `BetaBanner` "Report a problem" path or a post-lesson question) records how many lessons the respondent has completed, and results are compared by that count.
:::

### What this means for Learn to Fly

The beauty halo is an asset and a hazard for LTF at the same time. It is an asset on first contact. A beginner who has "never flown" arrives at the landing page with no model of what flight-training software should look like and very little evidence about whether this one is easy; on Kurosu and Kashimura's data, they will read ease from the look of the page and from how familiar its parts are. The current landing page already leans on familiarity: a hero with a headline, sub-copy and two buttons, a stats row, a five-step "How a lesson works" row, a curriculum list and a questions section. The product dossier lists that order as one of the traits that make LTF resemble a template. This chapter's evidence says the familiarity itself is not the problem; the next chapters argue that what makes a page generic is its surface, and that the skeleton should stay familiar.

The halo is a hazard in evaluation. LTF is built by a small team and reviewed visually, often from screenshots. The ATM studies show that people rating attractive screens will rate them easy, and that satisfaction will follow. Three consequences for the work:

1. Keep: the familiar structure of the lesson page (`LessonPage` with its `SectionNav` rail, article column, objectives `Card`, blocks and completion panel) and the conventional control vocabulary in `src/components/` (`Button`, `Checkbox`, `RadioGroup`, `Select`, `Tabs`). These are the familiar forms AES-002 asks for.
2. Change: design reviews of new pages should stop asking a single "does this look good" question. Ask about appearance and ease separately (AES-004), and for any surface a learner operates, require at least one observed task before calling it done (AES-003).
3. Build: a short, repeatable post-lesson question (one appearance item, one ease item) stored with the learner's completed-lesson count, so that generous early ratings can be told apart from settled ones (AES-005).

The Module 0 lessons deserve particular care. They are the first evidence a learner gets about inherent usability, and the halo from the landing page will be at its strongest when they arrive. If the first widget or the first quiz frustrates, the next chapter's evidence predicts that the learner will start to find the whole product less attractive, not only harder.

## When usability decides beauty

### The inference account

Hassenzahl and Monk re-examined the beauty-usability link from the ground up [@hassenzahl2010inference]. They began with 15 papers reporting 25 independent correlations between perceived beauty and perceived usability, and noted how widely the correlations varied. They argued that much of the variation reflects method, in particular unsystematic sampling of products, and they reanalyzed data so that products and participants were sampled in the same way and findings could be tested for generality across products, not only across people. Across four datasets and several aggregation methods, a mediation model held: the correlation between pragmatic quality (their measure of usability) and beauty was wholly mediated by goodness.

The authors call this an inference perspective. People do not see usability in a picture. When direct evidence is missing, they infer it from whatever they can see, and beauty informs an overall evaluation that then colors the usability judgment. The paper is a review with new analyses of self-report data, not a task experiment, and it does not say beauty has no effect. It says the effect is indirect and depends on how much the person knows about the product [@hassenzahl2010inference].

This account explains why the earlier studies looked the way they did. Kurosu and Kashimura's raters and Tractinsky's first-round raters never used the layouts [@kurosu1995apparent; @tractinsky1997aesthetics], so inference was all they had. In the ATM experiment the use was short and the usability manipulation modest [@tractinsky2000what]. The account also predicts the next result: once people have strong direct evidence about usability, the inference has less room to work.

### The reversal

Tuch and colleagues ran the experiment the literature was missing, varying both qualities independently and strongly, and measuring how strong each manipulation was [@tuch2012beautiful]. Eighty participants (42 female, mean age 25.7) each used one of four versions of an online clothing shop in a 2 by 2 between-subjects design. Usability was manipulated only through the shop's information architecture, its category labels and the assignment of items to categories, so the usable and unusable versions looked identical. The authors checked the navigation paths with a latent semantic analysis of information scent. Beauty was manipulated without changing any interaction element: in an online pretest 178 people rated 20 design versions, and the pair with the largest difference was chosen (t(177) = 12.63, d = .95). Participants did four browse tasks, each capped at five minutes, and rated the shop from a screenshot before use and again after, on several validated instruments, among them Lavie and Tractinsky's classical and expressive aesthetics scales, AttrakDiff-based hedonic scales and the System Usability Scale.

Aesthetics did not affect perceived usability before use (F(1,76) = .582, p = .448), and it did not afterwards. Usability did affect perceived aesthetics after use: the shop that was hard to navigate was rated less beautiful once people had struggled with it, although it looked exactly like the easy one [@tuch2012beautiful]. The authors propose that the affective experience of use, the frustration of failing at the tasks, carries the effect from interaction into the aesthetic judgment.

They then made a methodological point that reframes the field. Their usability manipulation was very strong (f = 1.01 to 1.72) and their aesthetics manipulation medium to large (f = .32 to .54). None of the earlier experiments had reported its manipulation strengths as effect sizes [@tuch2012beautiful]. A study that finds "beauty drives perceived usability" with a weak usability manipulation may simply be reporting which manipulation was stronger.

### The other direction is also real

Sonderegger and Sauer found the effect running the original way, and in performance as well as ratings [@sonderegger2010influence]. Sixty adolescents aged 14 to 17 did typical mobile phone tasks on one of two computer simulations that differed only in visual design. The appealing prototype was rated more attractive (5.3 against 3.15 on a 7-point scale; F = 39.8, p < .001) and more usable on a one-item scale (6.14 against 5.32; F(1,57) = 9.8, p < .01), with the same pattern on every subscale of an adapted post-study usability questionnaire. Perceived usability did not change from before to after use.

The performance results are the surprising part. Task completion time was 147.7 s (SD 58.0) with the appealing prototype and 198.5 s (SD 83.6) with the unappealing one; interaction efficiency was 59 percent against 46 percent; errors per trial were 2.0 against 4.8 [@sonderegger2010influence]. The authors discuss positive affect as one possible route to better performance, and they also discuss the opposite possibility, that enjoyable products prolong use. A related later paper by the same group is described as finding longer completion times with the more attractive product, so the direction of performance effects is not settled.

### Reconciling the two

The results fit one conditional model. Where interaction quality is equal, or the person has little experience, looks lead: Sonderegger and Sauer's phones differed only in looks, and Tractinsky's ATMs differed in looks a great deal and in usability only modestly. Where interaction quality differs a lot and the person has felt the difference, interaction leads and pulls the aesthetic judgment with it, as in Tuch's shop. Hassenzahl and Monk's mediation supplies the mechanism: beauty informs goodness when it is the only evidence, and direct experience takes over when it arrives [@hassenzahl2010inference].

Each study has narrow limits. Tuch's is one lab experiment with students and one product type, and its authors name the strength asymmetry as a boundary condition [@tuch2012beautiful]. Sonderegger and Sauer's is one phone simulation with adolescents, who the authors note may attach more importance to appearance than adults [@sonderegger2010influence]. Neither tested learners in a web application, and neither tested use under divided attention. The conditional model is the safest reading, and it is enough to set an order of work.

::: {.rule #AES-006 grade="B"}
**Fix task failures before investing in visual refinement on any surface a learner operates under load.** When usability was poor, perceived beauty fell after use, and beauty did not raise perceived usability, in the one experiment that manipulated both strongly [@tuch2012beautiful]. Polish cannot repair a frustrating flow, and on this evidence a frustrating flow spends the polish too. The finding is from a shop with students, so its size for LTF is unknown; its direction is the conservative assumption.

*In LTF:* on `FlyModePage` and `FlyPanel` (step rows, `Stopwatch`, random-event alert, "Finish and debrief"), on `DebriefForm` and on `QuizBlock`, a usability defect blocks a visual change in the same area until it is fixed.
:::

::: {.rule #AES-007 grade="B"}
**Ask about appearance and ease as separate questions, and ask them after a task, not from a screenshot.** Ratings given together on the same screen correlate so highly that they may be one judgment [@tractinsky1997aesthetics]; ratings before use reflect inference from looks [@hassenzahl2010inference]; and usability can change perceived beauty only once it has been experienced [@tuch2012beautiful]. A screenshot review can tell you about first impressions and nothing about ease.

*In LTF:* a design review of a lesson, challenge tab or reference page records two answers per tester (how it looks, how easy it was), both collected after the tester has completed a named task on the page.
:::

::: {.rule #AES-008 grade="B"}
**When comparing two design variants, make them differ in one quality only, or state which difference is larger.** The direction of the aesthetics-usability relation depended on which manipulation was stronger, and earlier experiments did not report manipulation strengths [@tuch2012beautiful]; a purely visual difference changed both ratings and task times [@sonderegger2010influence]. A comparison between a polished new design and a rough old one confounds polish with structure.

*In LTF:* a proposed replacement for a component (a new `Card` treatment, a new `LessonPath` style) is tested against the current component given the same visual finish, or the review says plainly that the variants differ in finish as well as structure.
:::

::: {.rule #AES-009 grade="B"}
**Use task measures (completion, time, errors, abandonment) as the primary evidence for any usability claim, and treat ratings as a separate signal.** Aesthetics can bias the outcomes of usability tests, both subjective ratings and performance [@sonderegger2010influence], and beauty informs usability ratings when experience is thin [@hassenzahl2010inference]. Ratings remain useful; they measure how people see the product, which is a different thing.

*In LTF:* the e2e flows that already exist for keyboard and accessibility checks are not usability evidence; a moderated session in which a beginner completes Lesson 0.1 and one challenge Brief and Fly, timed and with errors logged, is.
:::

::: {.rule #AES-010 grade="C"}
**Treat frustration as the mechanism to design against on surfaces used beside the simulator.** Tuch and colleagues propose that the frustration of poor usability carries into the aesthetic judgment [@tuch2012beautiful]. The mediation was proposed, not isolated, so this rule rests on the authors' interpretation, but it identifies the moment that matters: a learner failing at something while their attention is split.

*In LTF:* list the failure points on `FlyModePage` (losing the current step, mis-tapping a checkbox, a dismissed alert reappearing, the screen sleeping) and treat each as a design defect with an owner, ahead of any styling work on that page.
:::

### What this means for Learn to Fly

The conditional model gives LTF an order of work and a map of where each kind of effort pays. On surfaces where learners have little experience and little at stake, the landing page, the curriculum map and the first lesson, looks lead, and polish buys a favorable first inference. On surfaces where learners have strong direct experience, interaction leads, and polish is spent unless the interaction is right.

`FlyModePage` is the clearest case of the second kind. It runs in `FlyModeLayout` (dark, `text-xl`, `max-w-3xl`) on a second screen while the learner is flying. The learner glances at it, ticks a step, starts or stops the `Stopwatch`, and may be interrupted by the random-event alert (`border-4 border-warn bg-warn-tint`, pulse, beep). Every one of those moments is a chance for the frustration Tuch describes, and the learner's attention is already divided. AES-006 and AES-010 put the failure list for this page ahead of any visual change. Questions for that list include whether the current step is always findable after a glance away, whether a mis-tap can be undone, and whether "Keep the screen on while flying" actually prevents the device from sleeping.

The same reasoning applies to the `Debrief` tab. The learner self-scores a rubric in radio cards, sees a live score preview in `font-mono text-2xl font-bold`, and gets a result card with a `TierBadge` and the `tier-pop` animation. The result card is the product's reflective high point, and it is worth making beautiful; but if the rubric is confusing, or the "Not saved" and "This challenge was updated" states in `DebriefForm` appear without a clear way forward, the learner's frustration arrives just before the celebration and colors it.

For process, the changes are small and specific:

1. Keep: the existing a11y and keyboard e2e suites, which catch defects but are not usability evidence (AES-009).
2. Change: review templates that ask one "looks good?" question get two questions, asked after a task (AES-007).
3. Build: a moderated beginner session protocol covering Lesson 0.1, one widget in Explore and "Quiz me" modes, and one challenge through Brief, Fly and Debrief, with completion, time and errors recorded. Run it before and after any redesign, with the variants given equal finish (AES-008).

## The first impression at a glance

### Fifty milliseconds

Lindgaard, Fernandes, Dudek and Brown showed homepages for very short exposures and asked people to rate their visual appeal [@lindgaard2006attention]. In the first study, participants rated pages twice after 500 ms exposures, and the two sets of ratings correlated at r = .97. In the second, an extra trial with unlimited viewing time correlated .98 with the 500 ms ratings. In the third, ratings after 50 ms correlated .97 with ratings after 500 ms [@tuch2012role]. The three studies had 22, 31 and 40 participants. A contemporary news report described the glimpses as lasting about the length of one frame of standard television footage [@lindgaard2006attention]. The authors concluded that visual appeal can be assessed within 50 ms, and the title turned that into advice for designers.

The paradigm has held up. Tuch and colleagues list a later study by Lindgaard's group that replicated the stability of appeal, trust and usability judgments with masked 50 ms exposures, and their own experiments found design properties affecting aesthetic ratings at 17 ms [@tuch2012role]. Reinecke and colleagues used 500 ms exposures with hundreds of volunteers across 34 countries [@reinecke2013predicting]. Few findings in this Part rest on as broad a base.

What the paradigm shows needs stating carefully. A high correlation between ratings after 50 ms and after 500 ms shows that the two sets of judgments agree across pages; it does not show that a person decides within 50 ms, or that the decision is final. Put plainly, the study shows that people can judge a page seen for 50 ms, not that they must decide that fast. Stability is not accuracy either: a stable appeal rating says nothing about whether the site is usable or its content credible. And the averages hide disagreement, as the next section shows.

### What drives the glance: complexity and prototypicality

Tuch, Presslaber, Stöcklin, Opwis and Bargas-Avila used the brief-exposure method to ask which properties of a page shape the first impression [@tuch2012role]. Stimuli were screenshots of real company websites, pretested with 267 raters and unfamiliar to participants (mean familiarity 1.04 on a 5-point scale). Two properties were varied: visual complexity (low, medium, high) and prototypicality (low, high), meaning how typical a site looks for its category.

Study 1 used 119 screenshots with 59 participants, mostly undergraduate psychology students, and exposures of 50, 500 and 1000 ms. Because complexity and beauty were linearly related, Study 2 dropped the medium level and pushed the exposures down to 17, 33 and 50 ms (measured means 16.67, 33.27 and 49.98 ms because of screen refresh), with 80 pages, 82 participants and a visual noise mask after each screenshot [@tuch2012role].

More complex pages got lower ratings and more typical pages got higher ratings. At 17 ms, complexity already had a large effect (partial eta squared .38), larger than prototypicality (.19). At 33 ms the two were similar (.65 and .66), and at 50 ms similar again (.57 and .66). Complexity had a stronger effect on highly typical pages. The authors read this as support for a stage model of aesthetic processing in which complexity is processed earlier than prototypicality [@tuch2012role]. Pages with low complexity and high prototypicality were judged most appealing.

The authors list four limits: passive viewing of screenshots rather than browsing; a young, mostly Western student sample; company websites only, so the results may not carry to shops or news sites where mental models are stronger; and uncontrolled factors such as form, color and location behind complexity and typicality. They explicitly do not identify which features make a page complex or typical. The result says that simple, typical-looking pages are liked at a glance; it does not say what to change to get there.

### A model built from screenshots

Reinecke and colleagues filled part of that gap by building computational models of perceived complexity and colorfulness, then using them with demographics to predict appeal after 500 ms [@reinecke2013predicting]. Across three online experiments, 548 volunteers rated 450 websites for colorfulness, complexity or appeal. The colorfulness model, built from image statistics, had an R squared of .78. The complexity model, built from the area of text and non-text, the number of text groups, the number of image areas, a space-based decomposition and a colorfulness term, had an R squared of .65 (r = .80). After excluding inconsistent raters, the appeal analysis used 3,412 rating means from 242 volunteers aged 16 to 70 in 34 countries.

A mixed-effects model with complexity, colorfulness and demographic interactions explained 48 percent of the variance in appeal [@reinecke2013predicting]. Complexity mattered most. High complexity produced the largest drop in appeal, and low complexity was liked about as much as medium complexity, so the curve was not a strong inverted U. Colorfulness played a smaller role. The effects were not universal: participants older than 45 liked low complexity more than other age groups, and people with a PhD were most negatively affected by high colorfulness. Gender showed no significant interactions in the final model.

One detail bears directly on the habit of designing toward admired examples. Twenty sites in the set were Webby Award nominees, treated as best-practice design. They received average ratings between 4.21 and 6.57 on a 9-point scale, against an overall mean of 4.73 for the other sites, with a mean standard deviation of 1.69 [@reinecke2013predicting]. Award-winning design was widely disliked by some people.

The authors' limits: the models predict first impressions from screenshots at 500 ms, not usability or trust judgments formed later; the colorfulness model overestimates bright colors and the complexity model overestimates the effect of text; the sample is volunteers on a research platform; and preferences vary enough that they suggest personal models of appeal [@reinecke2013predicting]. The metrics are a research prototype, not a design tool.

::: {.rule #AES-011 grade="A"}
**Reduce visual complexity on first-contact pages: fewer text groups, fewer image areas, fewer competing regions.** Visual complexity lowered rated appeal at exposures as short as 17 ms [@tuch2012role] and was the strongest predictor of appeal in a model fitted to volunteers from 34 countries [@reinecke2013predicting]. High complexity is penalized much more than low complexity is, so the safe direction is down. Both sources tested screenshots and first impressions only.

*In LTF:* the landing page's seven bands are reviewed for the number of distinct text groups and image areas in each viewport; the hero, which today holds an eyebrow, a headline, sub-copy, two buttons, a note line, a video block and a caption, is the first candidate for consolidation.
:::

::: {.rule #AES-012 grade="B"}
**Run a brief-exposure impression test on every first-contact page before and after a redesign.** Appeal judgments after 50 ms agree closely with judgments after 500 ms and after unlimited viewing [@lindgaard2006attention; @tuch2012role], so a short-exposure test is a cheap, well-founded measure of the first impression. Show each page for about 500 ms (or 50 ms with a mask), collect one appeal rating, and compare against the current version. The test measures appeal only.

*In LTF:* the landing page, `CurriculumPage`, the first lesson, `SignupPage` and the reference hub are the first-contact set; each is tested in Day and Night themes, since learners land in either.
:::

::: {.rule #AES-013 grade="C"}
**Do not decide lesson structure, widget design or procedure layout from snap-judgment tests.** Brief-exposure ratings measure appeal at first contact; stable judgments are not accurate judgments, and they say nothing about usability or credibility [@lindgaard2006attention; @reinecke2013predicting]. This is a limit on the method stated by its users, not an experimental finding.

*In LTF:* glance tests stay on the first-contact set in AES-012; `LessonRenderer` blocks, `WidgetFrame` content and `FlyPanel` are evaluated with tasks (AES-009).
:::

::: {.rule #AES-014 grade="B"}
**Do not design toward award-winning or admired examples; test with the learners you actually have.** Award-nominated sites averaged between 4.21 and 6.57 on a 9-point appeal scale with wide disagreement, and first impressions varied with age and education [@reinecke2013predicting]. Admired design is one taste among several.

*In LTF:* moodboards of celebrated product sites can inform craft, but a direction for LTF is accepted only after it has been shown to beginners from the intended audience, including older learners.
:::

::: {.rule #AES-015 grade="B"}
**Weight low complexity more, not less, for an audience that includes older adults.** Participants older than 45 liked low-complexity pages more than other age groups did [@reinecke2013predicting]. The finding is one interaction in one model, so it sets a direction, not a threshold.

*In LTF:* flight simulation draws adult learners across a wide age range; when a page's complexity is in question, the simpler variant is the default unless testing with older learners says otherwise.
:::

::: {.rule #AES-016 grade="C"}
**Never let the first impression promise more than the page behind it delivers.** A first impression sets expectations within a fraction of a second [@lindgaard2006attention], and a learner who finds the lesson harder or rougher than the landing page suggested has been misled, however unintentionally. This is a design ethic drawn from the evidence, not a tested effect.

*In LTF:* the landing page's sample challenge `Card` ("Full-stop landing", setup chips, "You are scored on") and the "How a lesson works" steps must match what the real `ChallengePage` and `LessonPage` show; if the product changes, the marketing copy and samples change with it.
:::

### What this means for Learn to Fly

The first-impression evidence is strong enough to act on directly, and LTF's first-contact pages are few and known: the landing page, `CurriculumPage`, the first Module 0 lesson, `SignupPage` and `LoginPage` in `AuthLayout`, and the reference hub. Each of them carries the `BetaBanner` above the `Header`, so the banner is part of every first impression and counts as a text group in any complexity review.

The landing page is the most complex of the set. Its hero alone holds an eyebrow ("Free · Public beta · Cessna 172 Skyhawk · MSFS 2024"), the `display-xl` headline, `body-lg` sub-copy, two large buttons, a `text-sm text-ink-3` note, a `YouTubeEmbed` block with a red `bg-warn` play disc, and a caption. Below it come the four-stat row, the Module 0 band with its `LessonPath` card, the five-step row, the curriculum list, the challenge band with the tier legend and sample `Card`, "What you need" in three cards, the questions grid and a final call to action. None of these is wrong, but counted as text groups and image areas, the way Reinecke's model counts them, the page is busy, and the research says busy pages lose at a glance. AES-011 asks for a review of each viewport for consolidation, starting with the hero. One specific question: the play disc uses `bg-warn`, the status red reserved for errors and warnings elsewhere; in the hero it is the most saturated object on the page, and colorfulness, though a smaller factor than complexity, counts against appeal for some groups.

The reference hub is already close to the low-complexity, high-typicality profile: a centered header, one large search field, a row of "Most looked up" chips, then the kneeboard and the numbered rail. `CurriculumPage` in `PageContainer narrow` is also restrained. The first lesson is harder to judge from source, because the lesson page stacks many elements above the first block: breadcrumbs, the mono lesson label, the `h1`, the meta row, possibly `UnverifiedWarning`, the `SignupBanner`, a resume bar, the objectives `Card`, and the mobile section `Select`. On a phone, the first screen of Lesson 0.1 may contain no lesson content at all. That is worth testing with a glance test (AES-012) and fixing if confirmed.

Build: a small script that loads each first-contact route in both themes at desktop and phone widths, saves screenshots, and supports a 500 ms rating session with a handful of beginners. Record the results in `docs/` next to the screenshots so that the next redesign has a baseline to beat.

## Typical first, then distinctive

### The apparent conflict

LTF's owner describes the product as looking generic, interchangeable with thousands of other sites. The first-impression research seems at first to recommend exactly that: pages with high prototypicality, pages that look like typical members of their category, were judged more appealing at a glance, and low-prototypicality websites were generally judged unattractive [@tuch2012role]. If typical is liked, why not be typical? The answer is in a study of industrial design that separated typicality from novelty, and in a closer reading of what "typical" means.

### Most advanced, yet acceptable

Hekkert, Snelders and van Wieringen started from a puzzle [@hekkert2003most]. Typicality (how good an example an item is of its category) and novelty are each known to relate to aesthetic liking, yet they look incompatible, because a typical product is rarely new. Across three studies of consumer products, they found that typicality and novelty were jointly and about equally effective in explaining aesthetic preference. They also suppressed each other: the direct correlations of each with preference were not significant, and each relationship became highly significant once the other was partialed out.

The summary conclusion is that people prefer novel designs as long as the novelty does not cost typicality, or equivalently that they prefer typicality as long as it does not cost novelty. Preferred products have an optimal combination of both [@hekkert2003most]. In Study 2, design experts and non-experts weighted novelty and typicality similarly. In Study 3, a more objective measure of typicality (central tendency, an exemplar's average similarity to the other members of its category) gave the same result as the rated version.

The suppression result is worth understanding, because it explains why naive testing misleads. Typical and novel are negatively related across real products. So if you correlate novelty with liking across a set of designs, the gain from novelty is cancelled by the loss of typicality that usually comes with it, and novelty looks useless. Only when typicality is held constant does novelty's contribution appear. A designer who tries one unusual layout, sees it tested poorly, and concludes that novelty does not pay may have tested a design that gave up typicality to get it.

The limits: the studies used ratings of consumer products, the abstract does not give participant counts or stimuli, and nothing in the work addresses software or long-run exposure [@hekkert2003most]. It does not say how much novelty is optimal for a given category or audience.

### Where typicality lives

Tuch and colleagues used Hekkert's finding to motivate their website experiments, and their results line up with it: prototypicality had a large effect at 33 and 50 ms, and complexity had a stronger effect on highly typical pages [@tuch2012role]. But their stimuli were whole pages, and their authors do not say which features make a page typical. The practical question for LTF is where a learning product's typicality lies.

A reasonable decomposition, an inference from these studies rather than a tested result, separates three layers:

| Layer | What it holds | Typicality need |
| --- | --- | --- |
| Skeleton | Page order, navigation, reading direction, control behavior | High |
| Signature | A few elements that mark the product as itself | Novel within type |
| Surface | Type, color, radius, icon style, texture | Chosen, not default |

The skeleton is what lets a visitor recognize "a course with lessons and progress" in a glance. The signature elements are where novelty can be spent without costing recognition, as long as each one still reads as the kind of thing it is. The surface is where generic sites are generic: the same default radii, the same stock icons, the same inverted pill buttons, the same neutral palette with one accent. Hekkert's result suggests that the skeleton should stay typical, that novelty belongs in the signature, and that the surface should be chosen deliberately rather than inherited.

This also reframes the owner's complaint. A page can be typical in structure and still generic in surface, and the evidence on prototypicality gives no support for a generic surface. Typicality, in the research, is about being a good example of a category, not about being indistinguishable from other examples of it.

### Complexity and the inverted U

Berlyne's experiments are the origin of a popular idea in design: that preference follows an inverted U, peaking at a moderate level of complexity or arousal [@berlyne1970novelty]. His five experiments used undergraduates (80 and 56 in the first two) rating sequences of irregular colored patches shown for 9 seconds each. On the whole, both pleasingness and interestingness rose with novelty. Ratings fell during monotonous runs and rose temporarily when a contrasting stimulus appeared. Simple stimuli became less pleasant as they became less novel, while complex ones declined less or became more pleasant, a hypothesis that received partial confirmation [@berlyne1970novelty]. Berlyne linked this to the Wundt curve, in which hedonic value peaks at moderate arousal potential and turns negative as arousal potential rises further.

The empirical support for the inverted U in screen design is mixed. Several studies found a linear rather than a quadratic relation between complexity and preference [@tuch2012role], and Reinecke's model, which included quadratic terms to allow a curve, found that high complexity was penalized heavily while low complexity was liked about as much as medium [@reinecke2013predicting]. Berlyne himself cautioned that some of his effects were peculiar to the stimuli and that general conclusions would be hazardous [@berlyne1970novelty]. His data are undergraduates rating abstract colored shapes; the leap to web pages is large.

::: myth
**"Designs should aim for a moderate level of complexity, because preference follows an inverted U."** The idea comes from Berlyne's arousal theory and his experiments with simple colored patterns [@berlyne1970novelty]. For first impressions of websites the evidence does not show a reliable peak at medium complexity: several studies found a linear decline [@tuch2012role], and in a model of thousands of ratings, low complexity was liked about as much as medium while high complexity was strongly penalized [@reinecke2013predicting]. The defensible version is asymmetric: avoid high complexity on first view, and get interest from content and variation over time rather than from visual busyness.
:::

::: myth
**"To look distinctive, a product must break layout conventions."** The intuition is that a site resembles others because its structure does, so a distinctive site needs an unusual structure. In industrial design, novelty raised preference only when typicality was kept, and the two suppressed each other's effects when traded off [@hekkert2003most]; low-prototypicality websites were generally judged unattractive at a glance [@tuch2012role]. Distinctiveness is better placed in a few signature elements and a deliberately chosen surface on a recognizable skeleton.
:::

::: {.rule #AES-017 grade="B"}
**Keep the page skeleton of every LTF page typical for a learning product: recognizable page order, standard navigation, conventional reading direction and control behavior.** Higher prototypicality raised appeal at a glance [@tuch2012role], and novelty helped only when typicality was preserved [@hekkert2003most]. The evidence is ratings of company websites and consumer products, and neither study says which features make a page typical; the rule therefore protects the structures a beginner already knows from other sites.

*In LTF:* `RootLayout` (skip link, banner, header, main, footer), the `Header` navigation (Learn, Challenges, Reference), `Breadcrumbs`, the lesson page's rail, article and completion panel, and the challenge page's tabs stay structurally conventional.
:::

::: {.rule #AES-018 grade="B"}
**Spend novelty on a small number of signature elements, each of which still reads at a glance as the kind of thing it is.** Preferred designs combined novelty with typicality, and each quality's contribution appeared only once the other was held constant [@hekkert2003most]. A signature element that a beginner cannot identify has traded typicality for novelty and loses both.

*In LTF:* the signature set is `LessonPath` (it must still read as a progress path), the instrument widgets in `src/features/widgets/` (they must still read as instruments), the Logo's tail fin and teal stripe, the reference hub's numbered rail and kneeboard, and `FlyModePage`. New signature elements are added to this list deliberately, not by accident.
:::

::: {.rule #AES-019 grade="C"}
**Choose every surface property (type, color, radius, icon style, elevation) deliberately; never inherit it from a framework default.** The research on prototypicality concerns being a good example of a category, not resembling other products in surface detail, so it gives no support for a default surface. This rule is a design inference from that distinction, not an experimental finding; Part XX, Brand Identity and Distinctiveness, treats the brand side.

*In LTF:* the dossier's generic signals are surface signals: hand-inlined `rounded-lg border border-line bg-surface p-4 shadow-1` boxes, stock lucide glyphs for challenge types, ink-filled pill controls shared by `ThemeToggle`, the widget toggle, the `Stopwatch` and the primary `Button`. Each is a candidate for a chosen alternative.
:::

::: {.rule #AES-020 grade="B"}
**Test a novel component against a typical one with typicality held constant, not against an arbitrary baseline.** Typicality and novelty suppress each other, so a comparison in which the novel variant also lost typicality will show novelty as worthless [@hekkert2003most]. Before testing, state what category the component belongs to and check that beginners still name it correctly.

*In LTF:* a redesigned `LessonPath` or a custom challenge-type icon set is first checked with a naming task ("what is this?"), and only variants that pass are compared for preference.
:::

::: {.rule #AES-021 grade="C"}
**Confine high-complexity displays to places where complexity is the content, and introduce them after a simple frame has been established.** Complexity lowers first-impression appeal [@tuch2012role; @reinecke2013predicting], but a cockpit display is complex by nature, and simplifying it beyond recognition would remove what the learner needs to recognize. The rule is a placement judgment based on that evidence.

*In LTF:* the `g1000-pfd` widget, the sectional legend `Chart.tsx` and the `AirspeedArcs` kneeboard band appear inside lesson bodies and reference sections, inside a `WidgetFrame`, never as the first thing on a first-contact page.
:::

### What this means for Learn to Fly

The owner's complaint and the research point in the same direction once the layers are separated. LTF's skeleton is typical, and should stay so: the landing page's section order, the lesson page's three zones, the challenge tabs and the reference hub's search-first layout all read immediately as what they are. The dossier's list of "traits that resemble a default Tailwind or SaaS template" is mostly a list of surface traits: rounded cards with soft shadows repeated everywhere, a small tracked uppercase eyebrow over every heading, stock line icons, ink pill controls, one sans family plus a mono, and a neutral palette with one accent. None of these is required for typicality. A learning site can be recognizable as a learning site with a different card treatment, a different heading pattern and its own icons.

LTF also already has the beginnings of a signature set, and the dossier lists it among the traits that are distinctive: the instrument and chart tokens that stay fixed across themes, the hand-built SVG widgets, the logo and the "horizon line" teal reused as underline, connector and progress fill, `LessonPath` with its single ink "current" pin, the honesty language, and the aviation framing in Brief, Fly and Debrief. AES-018 asks that these be treated as the deliberate home of novelty and protected as such. The test for each is a naming test: a beginner who sees `LessonPath` should say "my progress through the module", and one who sees the airspeed widget should say "an airspeed indicator".

Two specific decisions follow:

1. Change: replace the inlined card boxes with `Card` and give `Card` itself a chosen treatment rather than a soft-shadow default (AES-019). The `Card` code comment already says state is carried by "the badge, the eyebrow and the fill, never a colored left border"; that is a surface choice worth extending to elevation and radius.
2. Build: draw the planned custom challenge-type icons (the dossier notes they are not drawn) as part of the signature set, test them with a naming task first (AES-020), and keep lucide for generic interface glyphs where typicality helps.

The plan's earlier landing direction (D-25, a livery with big condensed type and a detailed Skyhawk illustration) is not in the code. Whatever direction is chosen, this chapter's evidence says to judge it by whether the skeleton stays typical and whether the novelty is concentrated in a few recognizable signature elements, not by how different the whole page looks.

## The two faces and four facets of visual aesthetics

### Classical and expressive

"Make it beautiful" gives a designer nothing to work with, and so does "it looks bad". Two measurement projects broke perceived visual aesthetics into parts that can be rated, compared and designed for. The first is Lavie and Tractinsky's [@lavie2004assessing].

They began with 41 items for perceived aesthetics drawn from the literature and from experts, and refined them through four studies. Study 1 (125 engineering students) rated a news magazine site or another site and gave a first exploratory factor analysis. Study 2 (212 third-year engineering students) had participants visit an e-commerce site and ostensibly buy items, and found a simple two-factor structure. Study 3 (145 participants browsing an Israeli online store) added scales for usability, playfulness, pleasure and service quality, and the two-factor solution explained 55.7 percent of the variance. Study 4 used confirmatory factor analysis with ordinary web users in their own environment, aged 17 to 67 with an average of 27, and settled on 10 items, five per factor [@lavie2004assessing].

The two factors are:

- **Classical aesthetics**: orderly, clear design, the notions that held from antiquity to the 18th century and that overlap with many of the rules usability experts advocate. Its items include pleasant, clear, clean, symmetrical and aesthetic.
- **Expressive aesthetics**: the designer's creativity and originality and the ability to break design conventions. Its items include creative, original, sophisticated, fascinating and using special effects.

The relation to usability is the point. Classical aesthetics correlated between 0.60 and 0.78 with the other constructs measured, expressive aesthetics between 0.37 and 0.59, and usability correlated considerably more with classical than with expressive aesthetics [@lavie2004assessing]. Age and gender did not correlate with either factor. Only one of the two faces of aesthetics overlaps strongly with ease of use.

Two cautions. The samples were Israeli students and web users rating Hebrew and English sites, and the structure may differ in other cultures. And in some studies participants only viewed or briefly browsed the sites, so part of the classical-usability correlation may be the halo described in the first chapter of this Part. Tuch and colleagues later used both scales as outcome measures in their reversal experiment [@tuch2012beautiful].

### Four facets

Moshagen and Thielsch argued that items such as "pleasant" are too abstract to direct a designer, and built a more specific instrument, the Visual Aesthetics of Website Inventory, or VisAWI [@moshagen2010facets]. Study 1 defined the domain: a literature review found 34 aspects of web visual aesthetics, and 256 web users rated each for importance on a 5-point scale. Simplicity was rated most important (mean 4.72), then colors (4.19) and proportion (4.01); depth (2.37), symmetry (2.39) and movement (2.48) were rated least important, though no aspect was judged unimportant.

From an initial pool of 84 items across twelve content domains, about half of them reversed to counter acquiescence bias, the authors worked through seven studies with a development base of more than 2,000 participants evaluating over 70 websites. Study 2 (300 volunteers aged 15 to 64) rated Finnish websites chosen so that content and usability would not be confounded with looks. Later studies cut the scale to 18 items, and confirmatory factor analysis with natural websites supported four interrelated facets [@moshagen2010facets]:

| Facet | Basis given by the authors |
| --- | --- |
| Simplicity | A formal parameter of aesthetic objects |
| Diversity | A formal parameter of aesthetic objects |
| Colors | A critical property of aesthetic objects |
| Craftsmanship | Skillful, coherent integration of the design dimensions |

Simplicity and Diversity are the formal parameters studied throughout the history of empirical aesthetics, and the facets together represent perceived visual aesthetics while remaining distinguishable. In validation, the facets related as expected to Lavie and Tractinsky's scales and to intention to revisit the site. Divergent validity was mixed: the facets also correlated at least moderately with perceived usability and content quality [@moshagen2010facets].

The experimental studies are the most useful part for practice. When participants completed tasks before rating, the correlations between VisAWI and perceived usability were much weaker, and only Simplicity, Craftsmanship and the total score still related to usability. When color schemes were distorted, the Colors facet changed as it should [@moshagen2010facets]. This fits the reversal literature: the aesthetics-usability link is partly a rating effect when no one has used the site, and the facets that survive use are the ones tied to order and execution.

The authors state their limits: the full instrument may be long for some settings, it covers visual aesthetics only, it was tested on websites only, and the samples shared a cultural background. A short version, VisAWI-S, was published by the same authors in 2013 [@moshagen2010facets].

### From instruments to review criteria

The two instruments give a review vocabulary that maps onto concrete decisions:

- **Simplicity** is the facet users rate most important and the one that survives use. It corresponds to Lavie and Tractinsky's classical face, and to the low complexity that wins first impressions.
- **Diversity** is, on its name and its pairing with Simplicity, the counterweight: the facet a page can lose when it is simplified badly. A page can be simple and monotonous. (This reading is an interpretation; the instrument does not prescribe a balance.)
- **Colors** asks whether color is chosen and harmonious, not whether there is a lot of it.
- **Craftsmanship** is the facet a design review can check most objectively: alignment, consistent spacing, consistent states, consistent type, the same component looking the same everywhere.

::: {.rule #AES-022 grade="B"}
**Lead with classical aesthetics (order, clarity, cleanliness, symmetry) on every surface where learners study or operate.** Classical aesthetics correlated much more strongly with usability than expressive aesthetics did [@lavie2004assessing], and in the facet instrument only Simplicity and Craftsmanship stayed related to perceived usability after real use [@moshagen2010facets]. The evidence is self-report with partial halo, but both projects point the same way.

*In LTF:* `LessonPage`, `ChallengePage` (all tabs), `FlyModePage`, `ChecklistPage`, `SpeedsPage` and the reference panels are classical surfaces; their reviews ask whether the page is orderly, clear and clean before anything else.
:::

::: {.rule #AES-023 grade="C"}
**Confine expressive aesthetics (originality, special effects, convention-breaking) to moments that are about identity or celebration, never to moments that are about learning or operating.** Expressive aesthetics carries much less of the usability overlap [@lavie2004assessing]; its value lies in identification and interest, which matter most on entry and reflective surfaces [@hassenzahl2004interplay]. This placement is an inference from the two models.

*In LTF:* the landing hero, the course-complete panel with `CourseBadge`, the `tier-pop` result moment, the 404 page and the roadmap ladder may be expressive; the lesson article and the Fly tab may not.
:::

::: {.rule #AES-024 grade="B"}
**Review pages against the four VisAWI facets (Simplicity, Diversity, Colors, Craftsmanship) rather than against "does it look good".** The facets are distinguishable, carry unique meaning, and respond to the manipulations they should [@moshagen2010facets]. They turn a taste judgment into four specific questions.

*In LTF:* the review checklist in the final chapter carries one question per facet; a page that passes Simplicity but fails Diversity (every lesson section identical in rhythm) is flagged as monotonous, not as clean.
:::

::: {.rule #AES-025 grade="C"}
**Treat craftsmanship as a testable property: the same component must look and behave the same everywhere, in both themes and every state.** Craftsmanship, the coherent integration of all design dimensions, is one of the two facets that stayed related to usability after use [@moshagen2010facets]. What counts as coherent is a craft judgment, which is why the grade is C; the consistency checks themselves are objective.

*In LTF:* the two typographic dialects (the `display-*` and `heading-*` utilities against raw `text-2xl font-bold` and `text-3xl font-bold`), the unused `body-md` utility, and the many inlined card boxes are craftsmanship defects; `/dev/components` is the place to check every state of every component in Day and Night.
:::

::: {.rule #AES-026 grade="B"}
**When collecting learner ratings of appearance, use a validated multi-item instrument (VisAWI-S or the Lavie and Tractinsky items), and read the result as perception, not usability.** Single-item ratings of beauty and usability can collapse into one judgment [@tractinsky1997aesthetics], and the facet scores' relation to usability weakens sharply after real tasks [@moshagen2010facets]. A validated instrument gives comparable numbers across redesigns.

*In LTF:* a post-module survey can carry the short VisAWI items alongside the task measures of AES-009; the two are reported separately.
:::

::: {.rule #AES-027 grade="C"}
**Translate abstract aesthetic feedback ("looks cheap", "feels generic", "pleasant") into a facet and a specific property before acting on it.** Moshagen and Thielsch built their instrument because abstract items give designers no direction [@moshagen2010facets]. A complaint that cannot be assigned to Simplicity, Diversity, Colors or Craftsmanship, and then to a token or component, is not yet actionable.

*In LTF:* "looks generic" maps mostly to Craftsmanship and Diversity in surface choices (AES-019), "looks busy" to Simplicity on the landing page (AES-011), "looks dull" to Diversity within the lesson body.
:::

### What this means for Learn to Fly

LTF's palette and layout already lean classical: a warm off-white `canvas` (#f7f5f3 in Day, #141412 in Night), `surface` cards one step lighter or white, three ink levels, one teal accent, generous section padding, and a restrained status set. On Simplicity and Colors the product is likely to score reasonably. Where the evidence points to weakness is Craftsmanship and Diversity.

Craftsmanship first. A learner does not see the code, but they see its consequences. The dossier records that `h2` is 24 px at weight 700 on app pages, 32 to 44 px at 600 to 700 on the landing page, and 20 px at 600 on the reference hub; that the lesson `h1` is raw `text-3xl font-bold sm:text-4xl` while `PageHeader` uses `display-md`; and that many pages skip `Card` and inline their own box. Each inconsistency is small. Together they are what a facet rating of Craftsmanship picks up, and what a reviewer means by "sloppy". AES-025 makes the fix concrete: one heading scale used through the token utilities, `Card` everywhere a card appears, and `/dev/components` checked in both themes as part of any visual change.

Diversity second. Restraint and monotony look alike in a screenshot and differ in use. A lesson that is all `MarkdownContent` paragraphs and `text-2xl font-bold` block headings, with the occasional `Callout`, is simple and also flat. The lesson block types already provide variety (markdown, heading, callout, image, video, quiz, widget, checklist), and the Diversity facet argues for using them to vary the rhythm of a lesson rather than for adding decoration. The next chapters on fluency, exposure and emotional design take this up.

Expressive aesthetics has room in LTF, but only in a few places. The course-complete panel with `CourseBadge`, the `tier-pop` result card, the 404 page ("You've wandered off the taxiway") and the roadmap ("The road to the A380") are identity and celebration moments, and AES-023 allows them more expression. The lesson article, the Fly tab and `FlyModePage` stay classical.

## Fluency: why easy feels good, true and doable

### Beauty in the perceiver's processing

Reber, Schwarz and Winkielman proposed a single account for a long list of aesthetic effects [@reber2004processing]. Their claim is that aesthetic pleasure is a function of the perceiver's processing dynamics: the more fluently an object can be processed, the more positive the aesthetic response. Variables known to raise aesthetic judgments, among them figural goodness, figure-ground contrast, repetition, symmetry and prototypicality, all make stimuli easier to process. Variables that change fluency without changing the stimulus at all, such as visual or semantic priming, also raise judgments of pleasure. In contrast with theories that locate beauty in objective properties of the object, the authors locate it in the perceiver's experience, which is partly a function of those properties.

The account rests on four assumptions [@reber2004processing]. Objects differ in how fluently they can be processed, both through classic objective features and through priming. Fluency is itself hedonically marked: it feels positive, which psychophysiological findings support. Fluency feeds aesthetic judgment because people draw on their subjective experience unless its informational value is called into question. And the impact of fluency is moderated by expectations and attribution: it is stronger when its source is unknown and discounted when the person attributes it to an irrelevant source.

The supporting evidence is mostly from controlled laboratory stimuli. High-contrast circles were judged prettier than low-contrast ones. In a study varying presentation time (0.3, 1, 3 and 10 seconds), contrast influenced aesthetic judgments only at short exposures, as a fluency account predicts, because given enough time anything can be processed easily. Facial muscle activity over the region used in smiling was stronger for high-fluency stimuli. In priming studies, the effect of fluency on judgments disappeared when participants attributed their feeling to an irrelevant source such as background music [@reber2004processing].

The authors discuss the account's challenges directly. People sometimes prefer complex stimuli, though simple ones should be easier to process, and the authors offer expectations, attribution and expertise as contributing processes. They cite a discrepancy-attribution view in which fluency produces a felt experience mainly when it is unexpected. These are conjectures. Treat fluency as a well-supported organizing idea for low-level perceptual effects (contrast, clarity, symmetry, repetition), not as a rule that simpler always wins.

### If it is hard to read, it is hard to do

Song and Schwarz tested a consequence of the attribution assumption that matters for any product that asks people to do something [@song2008hard]. People often judge how much effort a new activity will take from how hard its instructions feel to read. In their short report, the same exercise instructions printed in a hard-to-read font led readers to predict that the exercise would take longer and be more effortful, and made them less willing to take it up. The authors' later review describes the numbers: readers estimated the exercise would take 8.2 minutes in an easy font and 15.1 minutes in a difficult one, expected it to flow naturally in the easy font and to drag in the hard one, and were more willing to fit it into their daily routine when it was easy to read [@song2008hard].

A second study used a recipe. In an elegant but difficult script font, people assumed the dish needed more time and more skill than in a plain sans. The review adds a discounting result: when the experimenter pointed out that the text might be hard to read because of the font, decision deferral in the difficult-font condition dropped from 41 to 16 percent, eliminating the difference between fonts, which the authors read as evidence of misattribution rather than a direct effect of the font [@song2008hard]. These numbers come from the authors' own review, not from the three-page 2008 report itself, and no independent replication of the effort-prediction effect was found by the research for this Part, so the result is plausible and consistent with the wider account but not established at the level of a replicated effect. The direction of the implication is safe even if the size is uncertain.

### Needless complexity costs credibility

Oppenheimer applied the same idea to writing [@oppenheimer2006consequences]. Writers often use complex vocabulary to seem intelligent. In his experiments, texts made more complex were judged to come from less intelligent authors. Experiments 1 to 3 manipulated the complexity of texts (graduate school application essays, sociology dissertation abstracts and translations of Descartes) and found a negative relation between complexity and the author's judged intelligence. Experiment 4 manipulated fluency directly with hard-to-read fonts and found the same penalty. Experiment 5 tested discounting: when there was an obvious irrelevant cause of low fluency, such as text printed with low toner, readers did not penalize the author [@oppenheimer2006consequences]. The participants were students and the sample sizes were not available to the research for this Part.

The discounting result is a warning as much as a reassurance. If a page is hard to read for an obvious extraneous reason, readers may excuse the author. If the cause is not obvious, they blame the author's competence, and in a course, the course.

### What fluency does and does not license

Three things follow, at different strengths. Perceptual fluency (contrast, clarity, alignment, symmetry, repetition of familiar structure) raises liking; the evidence is broad and mostly from simple stimuli. Disfluent instructions make tasks seem harder and less attractive to start; the evidence is one short report with a plausible mechanism. Needlessly complex prose lowers judged competence; the evidence is a set of student experiments with no known failed replication. What fluency does not license is stripping content until nothing is left, or assuming that the most fluent page is the best one for an expert, since preference for complexity, including among experts, is the account's own acknowledged challenge [@reber2004processing].

::: {.rule #AES-028 grade="B"}
**Maximize perceptual fluency for everything a learner reads under time pressure or divided attention: high figure-ground contrast, clear type, aligned and predictable layout.** Contrast, clarity, symmetry and repetition raise processing fluency and liking, and contrast mattered most at short exposures, when processing time is limited [@reber2004processing]. Glances at a second screen while flying are short exposures.

*In LTF:* `FlyModePage` text, the `FlyPanel` step rows, `Stopwatch` digits, the random-event alert and `KeyNumbers large` use the highest-contrast ink-on-ground pairs available in each theme, with no low-contrast `ink-3` text for anything operational.
:::

::: {.rule #AES-029 grade="B"}
**Set procedures, checklists and challenge briefings in plain, highly legible type so they look exactly as hard as they are.** Instructions in a hard-to-read font led readers to predict a task would take longer and be more effortful, and to defer it [@song2008hard]. The size of the effect is uncertain (one short report, numbers from the authors' review), but the direction is the safe assumption for a product that wants beginners to start.

*In LTF:* `BriefTab` Procedure, `FlyPanel` steps, `ChecklistPage` items and the lesson `checklist` block use the body face (the `font-sans` token) at body size or larger; no display face, script, condensed or all-caps setting is used for steps.
:::

::: {.rule #AES-030 grade="B"}
**Write lessons and interface copy in plain words; never add complexity to sound authoritative.** Needlessly complex texts were judged to come from less intelligent authors, and hard-to-read fonts produced the same penalty [@oppenheimer2006consequences]. The source of a fact can be a dense handbook; the sentence a learner reads should not be.

*In LTF:* lesson Markdown in `content/` and copy in components follow the plain-word rule already in AGENTS.md; reviewers flag Latinate padding ("utilize", "commence", "in the event that") as a credibility defect, not only a style one. Part XXIV, Writing and Microcopy, covers the writing itself.
:::

::: {.rule #AES-031 grade="B"}
**Remove extraneous sources of reading difficulty that a learner could not attribute to their real cause.** Readers penalize the author for low fluency unless an irrelevant cause is obvious [@oppenheimer2006consequences], and fluency effects are discounted only when people know the source [@reber2004processing]. A learner who meets a clipped table, an unthemed widget or a low-contrast state in Night will not think "rendering bug"; they will think less of the course.

*In LTF:* every lesson and widget is checked in Day and Night; tables in `MarkdownContent` keep their focusable scroll region and show a visible cue when they scroll; widgets in `WidgetFrame` show the `Skeleton` and error boundary states rather than a partial render.
:::

::: {.rule #AES-032 grade="C"}
**Use fluency to remove avoidable friction, not to remove content or richness the learner needs.** The fluency account itself flags preference for complex stimuli, including by experts, as unexplained [@reber2004processing]. A lesson emptied of detail is fluent and useless. This rule limits the previous four; its grade reflects that the limit is argued, not tested.

*In LTF:* the `g1000-pfd` and sectional legend widgets keep their real detail; fluency work on them targets labels, contrast, and the "Describe this diagram" text, not the number of things shown.
:::

### What this means for Learn to Fly

Fluency is the reason behind several rules that appear elsewhere in this book on other grounds: contrast in Part VI, Color: Science, Meaning and Access; legibility in Part III, Legibility and the Science of Reading; plain words in Part XXIV, Writing and Microcopy. What this chapter adds is the affective consequence. A fluent page is not only read faster; it is liked more, its tasks look easier to start, and its author looks more competent.

For LTF that has three specific consequences.

The first concerns the lesson body. Lessons render through `MarkdownContent` at 16/26 in an article capped at 800 px, which the dossier estimates at roughly 90 to 100 characters per line; the design system's own measure token (`max-w-measure`, 68ch) is used only by `Prose` on static pages. A long line is a fluency cost on every lesson, and on the fluency evidence it costs liking and perceived ease as well as reading speed. The decision on the measure belongs to the typography Parts; this chapter adds weight to fixing it.

The second concerns procedures. The Brief tab's Procedure section, the Fly tab's "Steps", the checklist pages and the `checklist` lesson block are where Song and Schwarz's result applies most directly. Keep them in the body face (`font-sans`) at body size or larger, in sentence case. If a display face is ever adopted (the plan's Big Shoulders Display was never implemented), AES-029 keeps it out of steps.

The third concerns errors that look like the author's fault. The `RootErrorPage` copy ("Reloading usually fixes it") and the `ErrorState` message ("Check your connection and try again") are good examples of naming an extraneous cause, which is what Oppenheimer's discounting result suggests: when the cause is visible, the author is not blamed. The cases to worry about are the silent ones: a widget that renders partly, a table that overflows on a phone without a visible scroll cue, a Night-theme state that nobody checked. AES-031 makes checking both themes and the error states part of the definition of done for any lesson or widget.

## Exposure, familiarity and tedium

### Mere exposure

Zajonc argued that repeated exposure to a stimulus is enough by itself to increase liking for it, without any reward or reinforcement [@zajonc1968attitudinal]. "Mere" refers to the fact that the exposure is only a matter of the stimulus being perceptible. His monograph combined experiments of his own with a review of others. One line of evidence used word frequency: students ranked which member of 154 antonym pairs sounded more favorable, and the member used more often in English won in over 80 percent of cases. Another used photographs of graduation portraits shown 0, 1, 2, 5, 10 or 25 times [@zajonc1968attitudinal]. The results of that experiment are not confirmed in the research for this Part, so they are not reported here. The design Zajonc used, several stimuli shown in the same session at different frequencies, became the standard.

The effect is now one of the most studied in social psychology. Montoya, Horton, Vevea, Citkowicz and Lauber meta-analyzed 268 curve estimates from 81 articles covering exposure effects on liking, familiarity and recognition [@montoya2017reexamination]. Liking followed a curve with a positive slope and a negative quadratic term, consistent with an inverted U: it rises with exposure and then flattens or declines. Inverted-U curves were associated with all visual stimuli but not auditory ones; with exposure durations shorter than 10 seconds and longer than one minute; with both homogeneous and heterogeneous presentation; and with ratings taken after all stimuli had been presented. The authors concluded that existing models of mere exposure do not adequately account for the findings.

So the effect that exposure raises liking is well replicated, and the shape of the effect is bounded: more is better up to a point, and visual material in particular shows the downturn. The mechanism is debated. Reber and colleagues propose that repetition raises liking by making a stimulus easier to process, and that fluency may feel good because it signals that a stimulus is familiar and so unlikely to be harmful [@reber2004processing]. Alternative accounts exist, and the meta-analysis's own conclusion is that the models are incomplete [@montoya2017reexamination]. For design purposes, the mechanism matters less than the shape.

### Tedium

Berlyne's experiments, described in the earlier chapter on typicality, add the other half [@berlyne1970novelty]. In sequences of colored patterns, judged pleasingness fell during monotonous runs and rose temporarily when a contrasting stimulus appeared. Homogeneous sequences declined in pleasantness more than sequences with other stimuli interspersed. Simple stimuli became less pleasant as they became less novel; complex stimuli declined less or became more pleasant. Berlyne reported that monotony favored a tedium factor, and that representational (meaningful) stimuli declined more steeply than nonrepresentational ones. He checked whether requiring a rating after every presentation explained the difference from Zajonc's results and found no effect of attention instructions [@berlyne1970novelty].

Berlyne framed his result as running counter to Zajonc's, but the two are less contradictory than they look. Both fit an optimum: familiarity raises liking up to a point, monotony lowers it after that, and the point comes sooner for simple material than for complex [@berlyne1970novelty; @montoya2017reexamination].

### Stable frame, varied content

The combined evidence gives a clear pattern for a product used repeatedly over weeks. The visual vocabulary that frames the learning (layout, navigation, components, colors, icons, the look of the instruments) benefits from consistency, because repeated exposure to it builds familiarity and liking. The content inside that frame benefits from variation, because identical, repeated material turns tedious, and simple material turns tedious fastest.

This matches the earlier chapter on typicality from a different direction. Typicality makes a skeleton recognizable on first contact; consistency makes the product's own vocabulary recognizable with use. Both argue against redesigning the frame often and for spending variety in the content.

::: {.rule #AES-033 grade="A"}
**Keep LTF's visual vocabulary consistent across every page so that repeated exposure builds familiarity and liking.** Repeated exposure raises liking, a finding pooled from 268 curve estimates in 81 articles [@montoya2017reexamination] and dating to Zajonc's monograph [@zajonc1968attitudinal]. Most of the evidence uses simple laboratory stimuli, so the size of the benefit for an interface is unknown; its direction is not in doubt.

*In LTF:* the same component renders the same way on every page: `Card`, `Badge`, `Callout`, `Tabs`, `Button` variants and the eyebrow-and-heading pattern appear in one form each, and pages do not invent local variants.
:::

::: {.rule #AES-034 grade="B"}
**Within a stable frame, vary the format and rhythm of lesson content so that no long run of identical material occurs.** Pleasingness fell during monotonous runs and recovered when a contrasting stimulus appeared, and simple stimuli lost appeal with repetition faster than complex ones [@berlyne1970novelty]. The data are abstract shapes rated by undergraduates, so this is a direction, not a dose.

*In LTF:* a lesson alternates block types (`markdown`, `widget`, `quiz`, `callout`, `checklist`, `image`) rather than presenting a long unbroken run of paragraphs; a module alternates lessons with challenges, as the curriculum already does.
:::

::: {.rule #AES-035 grade="B"}
**Do not repeat the same prompt, decoration or celebration identically and indefinitely.** Liking follows an inverted U with exposure, and visual stimuli in particular show the downturn [@montoya2017reexamination]. A banner or animation that delighted on the first view becomes noise by the twentieth.

*In LTF:* `SignupBanner` and `BetaBanner` are already dismissible and remember the choice (`ltf-signup-banner-dismissed`, `ltf-beta-banner`); the same treatment applies to any future nudge. The `tier-pop` animation stays short, and repeated Gold results do not escalate the celebration.
:::

::: {.rule #AES-036 grade="C"}
**Keep instrument drawings consistent across lessons, challenges, reference pages and Fly mode, and consistent with what the learner will see in the simulator where the teaching goal allows.** Exposure benefits accrue to the specific visual vocabulary that is repeated [@montoya2017reexamination]; an instrument drawn three ways gets three smaller benefits. Where simplification is the better teaching choice, the next chapters on emotional design and calibrated trust take precedence. Matching the sim is an inference, not a tested effect.

*In LTF:* the shared primitives in `src/features/widgets/shared/svg.tsx` (`Gauge`, `Tape`, `Compass`) and the fixed instrument tokens (`instrument`, `arc-*`, `bezel`, `display-*`) are the only way instruments are drawn, including in the kneeboard `AirspeedArcs` band.
:::

::: {.rule #AES-037 grade="B"}
**Measure reactions to a visual change after several sessions, not only on first view.** Liking moves with exposure [@montoya2017reexamination], and ratings of less attractive designs rose after use in the ATM experiment [@tractinsky2000what]. A first-view comparison of a refresh mixes novelty with quality.

*In LTF:* if a visual refresh is trialed, its appearance ratings are collected from learners who have used it for at least a module, alongside first-view ratings from new visitors.
:::

::: {.rule #AES-038 grade="C"}
**Never treat liking produced by familiarity as evidence of learning.** Mere exposure changes liking and familiarity, not understanding [@zajonc1968attitudinal; @montoya2017reexamination]. A learner who likes the product more after five lessons may or may not know more; only assessment tells.

*In LTF:* product reviews report quiz and challenge outcomes (`QuizBlock` results, tier distributions, rubric criteria) separately from satisfaction, and do not cite rising satisfaction as evidence that a module teaches well.
:::

### What this means for Learn to Fly

LTF is a product people return to. A learner who works through the course will see the lesson page dozens of times, the challenge page and `FlyModePage` many times, and the reference hub whenever they need a number. That makes the exposure evidence unusually relevant: the frame will become familiar whether or not it is designed to, and the question is whether what becomes familiar is one coherent vocabulary or several competing ones.

At present, some of it is several. The dossier records two type dialects, many hand-inlined card boxes alongside `Card`, h2 sizes that differ by page type, and a few bracket radii. Each variant splits the exposure benefit. AES-033 is the exposure argument for the same consolidation that AES-025 asked for on craftsmanship grounds.

The content side is in better shape by construction. The lesson block types allow real variation in format, and the curriculum interleaves lessons and challenges. The risk is in authoring habit: if lessons settle into a pattern of several paragraphs, one callout, one quiz at the end, they will be consistent in the wrong place. AES-034 belongs in the content review alongside the facts review. A simple check is to list the block types of a lesson in order and look for long runs of `markdown`.

The instruments are the strongest case for consistency. The widgets already share primitives and fixed tokens, and the dossier lists the fixed instrument and chart palettes among LTF's distinctive traits. Keeping every instrument drawing on those primitives (AES-036) makes the airspeed indicator in a lesson, on the kneeboard and in a challenge brief the same object, so that each exposure builds on the last. When the learner then meets the instrument in the simulator, the familiarity can carry over; whether a widget should match the sim or caricature it is a separate question, taken up in the chapter on calibrated trust.

Finally, nudges. The beta and sign-up banners already remember dismissal, which is the right default. Any future nudge (a reminder to continue, a prompt to try a challenge, a notification request) should follow the same rule, and the decline should stick. Part XIX, Decisions, Persuasion and Dark Patterns, treats repeated prompts as an ethical issue; the exposure evidence adds that they also stop working.

## Emotion in learning materials

### Three levels

Norman's *Emotional Design* argues that emotion is not decoration added to function: attractiveness, pleasure and meaning are part of whether a product works for people [@norman2004emotional]. He organizes the argument around three levels of processing. The visceral level is the immediate reaction to appearance. The behavioral level is the experience of use, its look and feel in operation and the total experience of using the product. The reflective level is what the product means afterwards: the image it projects and what it says about its owner's taste.

Norman describes a study with Kara Coyne and Jakob Nielsen using alarm clocks, espresso makers and vegetable peelers [@norman2004emotional]. One participant struggled to use an attractive, prestigious alarm clock and was close to tears, yet still said they were dying to buy it; another, skilled with technology, rejected it mainly over price. Norman suggests that people differ in which level they weigh most, and that products differ in which level dominates: a peeler is mostly behavioral, a wall clock may be visceral or reflective. A shopper who chose a peeler by brand, a reflective choice, lost that preference when its performance disappointed.

The three levels are a framework, not a tested causal model, and the book is a trade synthesis of research and design cases [@norman2004emotional]. The experimental evidence on its headline claim, that attractive things work better, is mixed, as the first two chapters of this Part showed. The alarm clock case is itself evidence that the levels can conflict: desire at the visceral and reflective levels survived failure at the behavioral one. That makes the levels useful as a checklist and dangerous as a test of design quality, because a person can want something they cannot use.

### Emotional design in multimedia learning

For learning materials specifically, there is a meta-analysis. Brom, Stárková and D'Mello pooled 33 independent samples (N = 2,924) testing whether adding anthropomorphic faces to multimedia graphics, or adding pleasant colors, helps learning [@brom2018how]. They found significant positive random-effects estimates for retention (k = 18, d+ = 0.387), comprehension (k = 14, d+ = 0.317) and transfer (k = 27, d+ = 0.327). Affective and motivational effects were weaker: intrinsic motivation (k = 23, d+ = 0.255) was robust, liking and enjoyment (d+ = 0.109) weaker, and positive affect (d+ = 0.113) marginal. Perceived learning and perceived effort were unaffected, but perceived difficulty went down (d+ = -0.208).

The details limit what the result can say about color alone. "Pleasant colors" in this literature means predominantly warm, bright, saturated colors, and the authors note that such colors should add little load if chosen with good visual design, avoiding gaudy or garish ones. Only 5 of the 33 samples were color-only contrasts; 11 were faces only, 13 combined faces and colors, and 4 pooled different manipulations [@brom2018how]. So the headline effects mix the two, and the color-only subset is too small to isolate. With one exception, there was no evidence of moderation by contrast type, dynamicity, age, language, culture, prior mood, time on task or publication type, and no major publication bias. Most studies used college students, natural science content and sessions up to about 30 minutes. The mechanism is not established; intrinsic motivation is a candidate.

### Interesting is not the same as relevant

The opposite risk is well documented. Harp and Mayer tested whether making science passages more engaging with interesting but irrelevant material, "seductive details", helps [@harp1998seductive]. Across four experiments with 357 undergraduates, readers of passages containing such details recalled fewer main ideas and produced fewer problem-solving transfer solutions. Highlighting the main ideas, stating learning objectives and adding signaling did not remove the harm. Placing the details at the start of the passage made it worse; placing them at the end reduced it. The authors argue the details do damage by priming an inappropriate schema around which readers organize the material, rather than by distracting them or breaking coherence.

Rey's meta-analysis of 39 experimental effects found a significant seductive detail effect, small to medium for retention and medium for transfer [@rey2012review]. It reviews four rival explanations (working memory overload, attention distraction, schema interference and coherence disruption) and finds evidence both for and against each, so the mechanism is unsettled. The review also examines moderating factors, as befits an effect whose size varies from study to study [@rey2012review]. The effect is real on average and variable in size.

The two literatures are compatible. Brom's manipulations were properties of the learning material itself, the colors and faces of the graphics carrying the content. Harp and Mayer's seductive details were additional content that the lesson did not need. Emotional design that changes how the relevant material looks can help; emotional content that adds irrelevant material can hurt.

### Decoration in graphics

A third literature sits between these. Bateman and colleagues compared embellished charts by the designer Nigel Holmes with plain versions carrying the same data [@bateman2010useful]. With 20 university students, accuracy in describing the charts was no worse for the embellished versions, and recall after two to three weeks was significantly better. Participants preferred the embellished charts on enjoyment, attractiveness and memorability. The authors suggest the images were tightly tied to topic and trend, and they explicitly do not advocate embellishment as a general principle, because strong images can bias interpretation. The study is small (20 students, ten per recall condition), uses one designer's charts with simple one-sentence messages, and its authors note that monitoring tasks differ from the description and recall they tested [@bateman2010useful]. The licensed reading is narrow: decoration tied to the message may aid memory of the message, and it is not free.

::: {.rule #AES-039 grade="C"}
**Review every LTF surface at the visceral, behavioral and reflective levels, and decide which level dominates it before deciding how it should look.** The levels are a framework, not a tested model [@norman2004emotional], but they force the question of what each surface is for. Where behavior dominates, decoration gives way to legibility and speed.

*In LTF:* behavioral surfaces are `FlyModePage`, `FlyPanel`, `ChecklistPage`, `QuizBlock`, `DebriefForm` and the reference search; visceral and reflective surfaces are the landing page, `CurriculumMap`, the dashboard's course-complete panel and the result card.
:::

::: {.rule #AES-040 grade="C"}
**Never use desire ("I'd use this", "I love it") as the test of a design.** In Norman's alarm clock case, a participant who nearly cried trying to use a clock still wanted to buy it [@norman2004emotional]. Desire and usability can conflict, and desire is easier to collect.

*In LTF:* beta feedback that a page is loved is recorded as visceral or reflective evidence and never closes a usability issue; the task measures in AES-009 do.
:::

::: {.rule #AES-041 grade="B"}
**Prefer a warm, coherent, moderately saturated palette in learning graphics over grayscale, provided legible contrast is kept and no color is garish.** Emotional design with faces and pleasant colors improved retention, comprehension and transfer and lowered perceived difficulty in a meta-analysis of 33 samples [@brom2018how]. Color-only contrasts were only 5 of those samples, so the color effect alone is not isolated, and the studies were short sessions with students.

*In LTF:* lesson widgets keep their colored instrument and chart palettes (`arc-*`, `display-*`, `chart-*`) rather than moving to grayscale; new lesson illustrations use the same fixed palettes, never colors that compete with `accent` or the status tokens.
:::

::: {.rule #AES-042 grade="A"}
**Keep interesting but irrelevant material out of core explanations; if it stays, put it after the core idea, in clearly optional form.** Seductive details reduced recall and transfer in four experiments [@harp1998seductive], and a meta-analysis of 39 effects found a small to medium harm for retention and a medium harm for transfer [@rey2012review]. Highlighting and objectives did not undo it; moving the details to the end reduced it. The effect varies in size and its mechanism is unsettled.

*In LTF:* aviation history, anecdotes and trivia go in a `Callout` at the end of a lesson section or in "Go deeper", never before the explanation of a control relationship; a `real-world` or `classic` callout is kept only if it serves the lesson's objective.
:::

::: {.rule #AES-043 grade="B"}
**Allow pictorial decoration in a learning graphic only when it is tied to the message, and never in a display read for values under workload.** Embellishment tied to topic and trend aided long-term recall without hurting description accuracy [@bateman2010useful], but its authors caution that strong images can bias interpretation and that monitoring tasks differ. The base is 20 participants.

*In LTF:* end-of-lesson recap graphics may carry a restrained pictorial element tied to the take-away; `Gauge`, `Tape`, `KeyNumbers`, the speeds `Table` and everything in `FlyModePage` stay plain.
:::

::: {.rule #AES-044 grade="B"}
**Aim for material that feels approachable to beginners, and check that it is not merely feeling easy.** Emotional design lowered perceived difficulty (d+ = -0.208) without changing perceived effort or perceived learning [@brom2018how]. Lower perceived difficulty helps a beginner start; it is not evidence that the material is easier.

*In LTF:* approachability is pursued through warm palettes, clear diagrams and plain copy; quiz and challenge results remain the check on whether a lesson is actually understood.
:::

::: {.rule #AES-045 grade="C"}
**Keep celebration brief, earned and specific to what was achieved.** The reflective level is where a product becomes part of how a person sees themselves [@norman2004emotional], and the exposure evidence shows repeated identical celebration losing value [@montoya2017reexamination]. A celebration that overstates the achievement also undermines trust, which the chapter on calibrated trust takes up.

*In LTF:* `tier-pop` (400 ms) and the course-complete panel are the only celebrations; they name the tier and the criteria met, and the `CourseBadge` keeps its statement that it is not a pilot certificate.
:::

### What this means for Learn to Fly

LTF's lessons are short multimedia units with interactive diagrams, which is close to the setting of the emotional design meta-analysis, so its result applies more directly here than most aesthetic findings do. The product already makes the choice that the evidence favors in its widgets: the instrument and chart drawings use fixed, colored palettes, not grayscale, and the dossier lists them among the distinctive traits. AES-041 keeps them. What LTF does not have is a friendly face of any kind: no instructor character, no illustration on the landing page, no imagery in the empty and error states. The meta-analysis's larger sample base is for combined faces and colors, and an instructor character is outside this Part's scope, but the finding that emotional design lowered perceived difficulty is a reason to consider one, tested like anything else.

The seductive detail evidence matters more for authoring than for visual design. Flight-sim learners love detail, and a writer who loves aviation will be tempted to open a lesson on pitch and power with a story about a famous flight. On Harp and Mayer's Experiment 4, the opening position is the worst place for it. LTF's `Callout` types include "In a real airplane" and "Classic panel", which are relevant comparisons when they serve the objective and seductive details when they do not. The content review for each lesson should ask, per callout, whether it serves the lesson's stated objectives (the "In this lesson you will" card), and move or cut it if not.

Celebration is the reflective level. The result card on the Debrief tab, with the `TierBadge` and the `font-mono text-5xl font-bold` percent, and the dashboard's course-complete panel with "Course complete: Skyhawk Pilot (Sim)", are where a learner feels like a pilot in training. They should feel good. They should also be accurate about what was achieved, which the next two chapters take up: a celebration that overclaims is a trust problem, and the `CourseBadge` disclaimer ("It is not a pilot certificate and has no value for real-world flying") is the right model.

## Credibility: how a page earns belief

### What people say they judge

The Stanford Persuasive Technology Lab asked large numbers of people to judge the credibility of live websites in their own words, and coded what they mentioned [@fogg2003how]. The abstract reports that 2,684 people evaluated two live sites on a similar topic, drawn from ten content categories (e-commerce, entertainment, finance, health, news, nonprofit, opinion or review, search engines, sports and travel); the title says "over 2,500 participants". Participants used the sites, chose the more credible one and explained why, in open-ended comments that did not prime them toward any factor. The visual design of a site was the most mentioned factor, in 46.1 percent of comments, ahead of information structure and information focus.

The study is the evidence behind Fogg's prominence-interpretation theory: a site element affects credibility only if the user notices it (prominence) and then interprets it as a credibility cue (interpretation). Both steps are needed. A cue that is present but not noticed does nothing, and a cue that is noticed but read the wrong way can do harm.

The method sets the limits. This is a large survey of what people say, not of what changes their judgments, and visible things like layout and color are easier to name than content quality. The 46.1 percent is a descriptive finding about these participants' comments, not a causal effect size. The sampling and coding details were not available to the research for this Part [@fogg2003how].

### What an experiment shows

Robins and Holmes held content constant and changed only the visual treatment [@robins2008aesthetics]. They saved 21 landing pages, mostly informational and consultant sites, and made a second version of each by stripping its visual enhancements in an HTML editor without altering the content, giving 21 pairs. Twenty participants (library and information science students) saw all 42 images in random order, with pairs never side by side, and gave quick credibility judgments by turning a dial on a scale from -7 to +7, with a neutral image between trials. That produced 840 judgments.

Average judgment time was 3.42 seconds, with no significant difference between the high and low aesthetic versions. The high aesthetic treatment was rated more credible than the low (p < .001), though the raw difference was small on the scale's range. In 14 of the 21 pairs, the designed version was rated positive and the stripped version negative, and across pairs some aesthetic treatment raised the rating in 19 of 21 cases [@robins2008aesthetics]. Three participants who read the content carefully took much longer (9.79 seconds on average). Those who gave lower ratings were quicker, at about 2 seconds, than those who gave higher ones, at about 4.3. The authors call this the amelioration effect of visual design on content credibility, and suggest it operates in the first few seconds of viewing.

The limits: a convenience sample of students trained in information science, and low-aesthetic versions that were stripped of all design rather than sloppily designed, which may be an unusual baseline [@robins2008aesthetics]. The authors argue that even people trained to read for credibility gave visceral judgments. Participants were not tested on whether they could judge actual accuracy, so the study shows a bias in snap judgments, not their validity. That cuts both ways, as the next chapter discusses.

### The Stanford guidelines

From three years of research involving more than 4,500 people, Fogg published ten guidelines for web credibility [@fogg2002stanford]. Paraphrased:

1. Make it easy to verify the accuracy of the information on your site, with third-party support such as citations and links.
2. Show that a real organization stands behind the site.
3. Highlight the expertise in the organization and in the content, with credentials, and avoid linking to sites that are not credible.
4. Show that honest and trustworthy people stand behind the site, with real people and personal details.
5. Make it easy to contact you.
6. Design the site so it looks professional, or appropriate for its purpose, with attention to layout, typography, images and consistency.
7. Make the site easy to use and useful, rather than showing off technology.
8. Update content often, or at least show that it has been reviewed recently.
9. Use restraint with promotional content such as ads, offers and pop-ups.
10. Avoid errors of all types, no matter how small, because typos and broken links hurt credibility more than expected.

These are research-derived craft guidance, not an experimental test of each item, and the page reports no effect sizes [@fogg2002stanford]. They date from 2002, and some items (a physical address, avoiding ads) are generic. Later experimental work supports individual claims, notably the effect of visual design on credibility [@robins2008aesthetics], but not the list as a package. For an aviation learning product, items 1, 3, 4, 8 and 10 map almost directly onto practices LTF already has in its content pipeline.

### Plain words as a credibility cue

The fluency research adds a cue that the Stanford list leaves implicit. Needlessly complex texts were judged to come from less intelligent authors, and hard-to-read fonts produced the same penalty [@oppenheimer2006consequences]. For a product that asks to be believed about procedures, plain writing and clear type are credibility features as well as usability features.

::: {.rule #AES-046 grade="B"}
**Treat visual consistency and finish on lesson and reference pages as a credibility requirement, not a cosmetic one.** With content held constant, the designed version of a page was judged more credible than a stripped one in 19 of 21 pairs, within seconds [@robins2008aesthetics], and visual design was the factor people mentioned most when explaining credibility judgments [@fogg2003how]. The experimental effect is small in raw terms and the sample narrow; the survey is self-report.

*In LTF:* `LessonPage`, `SpeedsPage`, `ChecklistPage` and the reference panels are held to the craftsmanship checks of AES-025 before any content on them is considered publishable.
:::

::: {.rule #AES-047 grade="C"}
**Make every fact on a lesson or reference page verifiable from the page: show its sources, the date it was last verified, and the simulator version it was checked against.** Ease of verification and recent review are the first and eighth Stanford guidelines [@fogg2002stanford]. The guidelines are craft consensus; for a product whose own rule is that every aviation fact has a source, showing the source is also simply honest.

*In LTF:* `SpeedsPage` and `ChecklistPage` already show "Last verified" lines. Lessons do not: the lesson DTO carries `lastVerifiedAt` (`shared/schemas/api.ts`) and published content requires a `simVersion`, but `LessonPage` renders neither. Add both to the lesson meta row, and list the lesson's sources next to "Go deeper".
:::

::: {.rule #AES-048 grade="C"}
**Show who writes and checks the content, and how to reach them, in a place a learner will find.** Real people, expertise and easy contact are Stanford guidelines 3, 4 and 5 [@fogg2002stanford]. This is consensus guidance; its value for LTF is that an anonymous source asking to be believed about procedures has a credibility gap that design cannot close.

*In LTF:* `AboutPage` says the site is built by "a flight-sim enthusiast" and points to GitHub issues for contact. Name the person or persons who verify content, describe how verification works (sources, in-sim checks), and link "How we check lessons" from the lesson meta row.
:::

::: {.rule #AES-049 grade="C"}
**Allow no small errors on learner-facing pages: no typos, broken links, placeholder text, broken states or mismatched themes.** Errors of all types, no matter how small, hurt credibility more than expected (Stanford guideline 10) [@fogg2002stanford], and disfluency that a reader cannot attribute to an outside cause is blamed on the author [@oppenheimer2006consequences].

*In LTF:* `npm run spell`, link checks in the content pipeline and the e2e suite are credibility checks; the `index.html` default title, which the dossier notes contains an em dash, is a small error of exactly this kind.
:::

::: {.rule #AES-050 grade="C"}
**Keep promotional content out of the reading path of a lesson.** Restraint with promotion is Stanford guideline 9 [@fogg2002stanford]. On a page that asks to be trusted about procedures, a sales prompt between the learner and the content competes with the content and recolors it.

*In LTF:* `SignupBanner` ("Sign up (free) to save your progress and challenge scores.") sits above the objectives card on `LessonPage`. Keep it dismissible, and move it below the first content block or to the completion panel, where saving progress is the natural next question.
:::

::: {.rule #AES-051 grade="C"}
**Match the look of each page to its purpose: plain and exact for procedures, warmer for invitation, never corporate and never toy-like.** Stanford guideline 6 asks for a design that looks professional or appropriate to its purpose [@fogg2002stanford], and Hassenzahl's identification attribute is about whether the product expresses who the user wants to be [@hassenzahl2004interplay]. Appropriate for LTF means the visual language of a careful instructor, which is a judgment, not a measurement.

*In LTF:* the reference hub's POH-style numbered rail and the kneeboard, the Brief, Fly and Debrief tabs and the mono "readout" numbers are appropriate purpose cues; gamified treatments (points bursts, confetti, mascots celebrating wrong answers) are not.
:::

::: {.rule #AES-052 grade="C"}
**Make each credibility cue prominent enough to be noticed at the moment it matters.** Under prominence-interpretation theory a cue works only if it is noticed and then interpreted as a credibility signal [@fogg2003how]. A "Last verified" line in the footer is present and invisible.

*In LTF:* the verification date and source count sit in the lesson meta row next to "About n minutes", in `text-sm` ink-2, not in the page footer; the verify state uses `DraftBadge` text, not color alone.
:::

### What this means for Learn to Fly

LTF has an unusual advantage for credibility: its content pipeline already does what most of the Stanford guidelines ask for. Every aviation fact needs a source; publication requires a `lastVerifiedAt` and a `simVersion`; `verify` callouts block publication; unverified content is never seeded in production. The problem is that almost none of this is visible to the learner on the page where it matters. On `SpeedsPage` and `ChecklistPage` a "Last verified" line appears. On `LessonPage`, where most of the learning happens, it does not, although the data is in the API response. AES-047 and AES-052 put it in the lesson meta row.

The second gap is people. Stanford guidelines 3 and 4 ask for visible expertise and real people. `AboutPage` is honest and modest ("an independent personal project built by a flight-sim enthusiast"), and it says "Every procedure and number is checked against FAA handbooks and flown in the sim before it is published." That sentence is the most important credibility claim LTF makes, and it is on a page few learners visit. AES-048 asks for the claim to be supported (who checks, how) and linked from the lessons. Nothing in the evidence requires credentials LTF does not have; it requires that the process be shown.

The third is the visible polish of lessons themselves. The Robins and Holmes result says a learner will judge the credibility of a lesson within seconds from its look. The craftsmanship defects listed in the chapter on aesthetic facets (two heading dialects, inlined card variants, a wide measure) are therefore credibility defects on lesson pages, and fixing them is part of making correct content believed.

One existing pattern is already right: the `BetaBanner` copy ("Lessons and challenges are still being checked in the sim, so you may hit rough edges or content that changes. Report a problem") is a clear, honest statement with a contact path, which is guidelines 5 and 8 in practice. The next chapter argues that this kind of honesty matters more, not less, as the design gets better.

## Calibrated trust: polish that does not lie

### The amelioration effect works on wrong content too

The credibility evidence in the previous chapter has an uncomfortable corollary. If a designed page is judged more credible than the same content stripped of design, within about three seconds and before anyone reads carefully [@robins2008aesthetics], then design raises the credibility of content regardless of whether the content is correct. Robins and Holmes did not test whether their participants could judge accuracy; their result is a bias in fast judgments, and the participants who read carefully took about three times as long. Beauty makes correct content more believable and makes incorrect content more believable by the same mechanism.

For most websites that is a commercial fact. For a product that teaches procedures a learner will carry into a simulator, and that some learners may one day carry further, it is an ethical constraint. The goal is not maximum trust. It is trust that matches how far the content has actually been checked: calibrated trust.

### Misuse and disuse

Parasuraman and Riley's analysis of automation gives a vocabulary for what goes wrong when trust is not calibrated [@parasuraman1997humans]. Use is the voluntary engagement of automation. Misuse is over-reliance, which "can result in failures of monitoring or decision biases." Disuse is neglect or underuse, "commonly caused by alarms that activate falsely." Abuse is the automation of functions by designers and managers "without due regard for the consequences for human performance." The authors argue that these are not operator character flaws but consequences of design and management decisions. Factors that affect how well people monitor automation include workload, the reliability and consistency of the automation, and the conspicuousness of indicators of its state. Disuse often follows when alarm thresholds are set without considering the base rate of the condition they detect [@parasuraman1997humans].

LTF is not an automated system in the sense of that paper, and the transfer from professional operators to learners using consumer software is an analogy. But the two failure modes map onto a teaching product closely. Misuse is a learner trusting the app's numbers or pass mark more than the simulator in front of them, or more than the content's verification status justifies. Disuse is a learner who has learned to ignore the app's warnings because too many of them were noise.

### Realism that persuades without informing

Smallman and St. John describe a related trap in display design: naive realism, the misplaced faith in people's ability to extract information from realistic displays [@smallman2005naive]. Users and designers prefer highly realistic displays that they believe are intuitive, even when those displays produce worse performance. The authors' evidence comes from a program of Navy display work. Realistic 3-D perspective views were poor for precise judgments of relative position and distance. In change-detection tasks, users rarely detected changes that happened during interruptions, and a tool that listed changes in a table improved response times by as much as 80 percent and reduced misses to zero, while an instant-replay tool, which kept the realism of time, was less useful than no tool. Users rated realistic 3-D ship and aircraft icons as preferable, while abstract symbols produced consistently better identification [@smallman2005naive].

The remedy the authors propose has three parts: simplify and caricature reality, quietly supplement what perception misses, and gently inform users of likely error. They are explicit that they are not arguing for sparse displays; caricatured icons maximized both performance and preference in their own work. They also note that realism is not always wrong: where the detailed experience is part of the task, fidelity can matter [@smallman2005naive]. The evidence is mostly from military tasks with trained operators, so its application to learners reading a cockpit diagram is an inference.

Naive realism is the aesthetic-usability effect seen from the display designer's side. A photoreal cockpit looks impressive, is preferred, and is believed to be clear. Those three judgments are not evidence that it teaches.

### Honesty as a design property

Rams's sixth principle is that good design is honest: it does not overstate innovation, power or value, and does not make promises it cannot keep [@rams2026ten]. His principles are expert opinion tied to industrial design, with no empirical test behind them, and the dating and wording vary across sources. They are useful here as a statement of the value that calibrated trust serves.

Gray and colleagues' taxonomy of dark patterns gives the negative case [@gray2018dark]. One of their five strategies is interface interference, manipulating the interface so that certain actions are privileged over others, and one of its subtypes is aesthetic manipulation: visual emphasis, false hierarchy and disguised content used against the user's interest. The taxonomy is qualitative, built from 118 artifacts shared by practitioners, so it describes kinds of manipulation, not their prevalence. Part XIX, Decisions, Persuasion and Dark Patterns, treats the whole taxonomy. For this chapter, aesthetic manipulation is the specific danger: visual quality used to make something look more settled, more certain or more endorsed than it is.

::: {.rule #AES-053 grade="C"}
**Never let visual polish signal a level of verification that has not happened: unverified content must look visibly and consistently different from verified content.** Design raises judged credibility in seconds regardless of content accuracy [@robins2008aesthetics], and good design does not make promises it cannot keep [@rams2026ten]. The experimental half of this rule is graded evidence; the obligation it draws is a value, hence C.

*In LTF:* keep `UnverifiedWarning` ("Unverified content: not for learning use", `border-2 border-warn bg-warn-tint`) and `DraftBadge` ("Draft · unverified") as the loud and quiet forms; never restyle drafts to look finished for screenshots or previews; keep the dashed `verify` callout visually distinct from every published callout type.
:::

::: {.rule #AES-054 grade="C"}
**Make every honesty statement the product makes consistent with every other.** Calibrated trust needs one account of how far the content has been checked; two accounts that disagree teach the learner that neither is exact. This follows from the calibration argument and Stanford guideline 8 on showing review status [@fogg2002stanford].

*In LTF:* the `BetaBanner` says lessons and challenges "are still being checked in the sim"; `AboutPage` says "Everything that is open has been flown and checked in MSFS 2024". Reconcile them, for example by saying in the banner that open content has been checked and the site itself is new.
:::

::: {.rule #AES-055 grade="C"}
**Keep warnings rare enough to mean something, and retire any warning or nudge that learners routinely dismiss.** Disuse of alerts is commonly caused by false alarms, and alert thresholds must take the base rate of the condition into account [@parasuraman1997humans]. The source is an integrative review of professional automation, so its transfer to a learning app is an analogy.

*In LTF:* the random-event alert on the Fly tab (`border-4 border-warn`, `warning-pulse`, beep) is a training event, so its frequency is set by the challenge design and stated in the brief; `warn` styling is reserved for real problems; dismissal of `BetaBanner`, `SignupBanner` and toasts is logged if analytics are ever added, as a signal to retire.
:::

::: {.rule #AES-056 grade="C"}
**State the limits of the app's own checks wherever the app scores, confirms or advises.** Over-reliance on automated aids leads to monitoring failures, and the conspicuousness of an aid's state affects how well people monitor it [@parasuraman1997humans]. LTF cannot see the simulator; a learner who forgets that may trust a self-scored tier over what actually happened.

*In LTF:* `DebriefForm` already opens with a `note` callout, "Score what you flew", saying scores are self-assessed and suggesting the sim's replay; that model is right. Carry the same statement onto the result card in `ResultView`, where the tier is celebrated, and keep challenge steps asking the learner to read values in the sim rather than copy them from the app.
:::

::: {.rule #AES-057 grade="B"}
**Teach with simplified, caricatured instrument and cockpit drawings, and use real simulator screenshots for orientation (where to look), not for explanation.** Users preferred realistic displays that produced worse performance, while caricatured symbols maximized both performance and preference [@smallman2005naive]. The evidence is from military display tasks with trained operators; for learners it is an inference, though a well-founded one.

*In LTF:* the hand-built widgets (`Gauge`, `Tape`, the `g1000-pfd`, the sectional legend) are caricatures by construction and stay so; the three Module 0 sim-settings screenshots are the right use of photographs; no photoreal panel replaces a widget.
:::

::: {.rule #AES-058 grade="B"}
**Do not accept "this looks great" or "this looks just like the real thing" as evidence that a display teaches.** Preference for realistic displays is high and is a poor guide to performance [@smallman2005naive]; desire and usability can conflict [@norman2004emotional]. Pair every display review with a task: read a value, detect a change, name a state.

*In LTF:* a widget review includes a short task in "Quiz me" mode with a beginner, and the result is recorded with the review.
:::

::: {.rule #AES-059 grade="C"}
**Label every simplification as a simplification, at the place the learner meets it.** Gently informing users of likely error is part of the remedy for naive realism [@smallman2005naive], and honest design does not overstate what a product is [@rams2026ten]. A simplified diagram mistaken for the real panel misleads by omission.

*In LTF:* keep the "Simplified model" badge in every `WidgetFrame` header; extend the same honesty to lesson images that crop or annotate the sim, with a caption that says what was changed.
:::

::: {.rule #AES-060 grade="C"}
**Never use visual emphasis, hierarchy or polish to steer a learner against their own interest.** Aesthetic manipulation (visual emphasis, false hierarchy, disguised content) is a named form of interface interference in the dark-patterns taxonomy [@gray2018dark]. The taxonomy is qualitative; the rule is a design ethic.

*In LTF:* "Not now" on `SignupBanner` and the decline actions in any dialog are visually honest secondary buttons, not low-contrast text; destructive actions (`danger`, `bg-warn`) stay behind confirmation, as in the account deletion `Dialog`.
:::

::: {.rule #AES-061 grade="C"}
**Make every badge, tier and celebration say what it is and, where a learner could misread it, what it is not.** Honest design does not overstate value [@rams2026ten], and celebration sits at the reflective level where a product shapes how people see themselves [@norman2004emotional]. A simulator achievement presented like a qualification invites exactly the misuse calibrated trust is meant to prevent.

*In LTF:* keep the `CourseBadge` statement ("It is not a pilot certificate and has no value for real-world flying") and the simulation-only line on every lesson; the Gold tier copy ("checkride-ready") on the landing page is reviewed against this rule, since it borrows a real-world standard.
:::

### What this means for Learn to Fly

The dossier names "honesty as UI" as one of LTF's distinctive traits, and this chapter's evidence says it is also one of its most important. LTF already has most of the parts of a calibrated-trust system: `DraftBadge` and `UnverifiedWarning` as quiet and loud forms of "not checked", `verify` callouts that block publication, "Last verified" lines on speeds and checklists, the "Simplified model" badge on widgets, the `CourseBadge` disclaimer, the simulation-only line, and the beta banner. The work left is to make the system consistent and complete.

Consistency first. The `BetaBanner` and the `AboutPage` give different accounts of how far the open content has been checked (AES-054). Each is honest in intent; together they are confusing. One sentence fixes it.

Completeness second. Verification status is shown for speeds and checklists, not for lessons (AES-047 in the previous chapter). The Debrief form says plainly that scores are self-assessed ("Score what you flew"), but the result card that follows, with its `TierBadge` and `tier-pop`, does not repeat it, and that is the moment the learner remembers (AES-056). The "Simplified model" badge covers widgets; lesson images that annotate sim screenshots have no equivalent (AES-059).

Third, the risk that grows with quality. Every improvement this book recommends to the look of LTF raises the credibility of whatever is on the page. That is the purpose when the content is verified, and a hazard when it is not. Production never seeds drafts, according to the `UnverifiedWarning` code comment, but the repository is public, and anyone running it locally sees drafts rendered in the same polished layout. AES-053 keeps the warning loud precisely because the layout around it is getting better.

Finally, one copy decision. The landing page says "Bronze means you did it safely. Gold is checkride-ready." It is a good line, and it borrows the authority of a real checkride for a simulator tier. AES-061 does not forbid it; it asks that a reviewer decide whether a beginner could read it as a real-world claim, and if so, add the qualifier the `CourseBadge` already uses.

## Testing appeal and trust without fooling yourself

### Why a method is needed

Every chapter of this Part has found a way in which judgments of appeal, ease and trust go wrong when they are collected carelessly. Ratings of beauty and ease given together collapse into one judgment [@tractinsky1997aesthetics]. Ratings before use are inferences from looks [@hassenzahl2010inference]. Polish changes task times as well as ratings, so a comparison of a finished design with a rough one tells you little [@sonderegger2010influence]. The direction of the aesthetics-usability effect depends on which manipulation is stronger [@tuch2012beautiful]. First impressions are stable but differ by age and education, and admired designs divide people [@reinecke2013predicting]. Liking moves with exposure [@montoya2017reexamination]. Credibility judgments made in seconds are biased by design and say nothing about accuracy [@robins2008aesthetics]. Desire survives failure [@norman2004emotional].

These are not reasons to avoid measuring appeal and trust. They are a specification for measuring them properly. This chapter assembles that specification into a protocol LTF can run with a handful of learners, and adds the rules the earlier chapters did not cover.

### Four questions, four instruments

The evidence supports separating four questions and using a different instrument for each:

| Question | Instrument | When |
| --- | --- | --- |
| First impression | 500 ms glance, one appeal rating | First-contact pages |
| Perceived aesthetics | VisAWI-S or Lavie and Tractinsky items | After a task |
| Usability | Completion, time, errors, abandonment | During a task |
| Credibility | "How far would you trust this page?" with reasons | After reading |

The glance test follows Lindgaard and Tuch: show each page for about 500 ms, or 50 ms with a mask, and collect one appeal rating [@lindgaard2006attention; @tuch2012role]. The aesthetics instrument is a validated multi-item scale, collected after a task so that the halo has had a chance to fade [@moshagen2010facets; @lavie2004assessing]. Usability is measured by behavior, not by asking. Credibility is asked after the person has read the page, with an open question about reasons, which is how Fogg's study collected its comments [@fogg2003how]; the reasons tell you which cues were noticed.

### Sampling the right people

The research samples were mostly students, and several studies showed that the population changes the answer. First impressions varied with age and education [@reinecke2013predicting]; the beauty-usability correlation differed between Japanese and Israeli raters [@tractinsky1997aesthetics]; adolescents may weigh appearance more than adults [@sonderegger2010influence]. For LTF the intended learner is a beginner who has never flown, of any adult age, often at a desk with the simulator running and a second screen beside it. Testing only with experienced simmers or with the people who built the product samples the wrong population twice: they know the domain and they know the product.

### Comparing like with like

When two variants are compared, the evidence asks for three controls. Equalize finish, or report which variant is more finished, because polish alone moves both ratings and performance [@sonderegger2010influence]. Report how different the variants are on each dimension, because the stronger manipulation wins [@tuch2012beautiful]. And when a variant is more novel, check that it has not lost typicality in the process, because the two suppress each other [@hekkert2003most].

### Measuring complexity directly

Reinecke's complexity model counted text groups, image areas and the area of text and non-text in a screenshot [@reinecke2013predicting]. A team can make a crude version of that count by hand or with a script, and use it to compare a page with its previous version or with sibling pages. Rosenholtz and colleagues' clutter measures (Feature Congestion, Subband Entropy and Edge Density) are computable from an image and capture different aspects of clutter; Feature Congestion includes color variability, which the other two do not [@rosenholtz2007measuring]. The measures were validated on photographs, maps and visualizations rather than interface screens [@rosenholtz2007measuring], so whether any of them tracks clutter on an interface is untested. Use them to flag outliers for human review, never as a pass or fail threshold.

::: {.rule #AES-062 grade="B"}
**Recruit test participants from the intended audience, including older adults and people who have never flown, not only from experienced simmers or the team.** First impressions varied with age and education [@reinecke2013predicting], the beauty-usability link varied across cultures [@tractinsky1997aesthetics], and the age of the sample may change how much appearance matters [@sonderegger2010influence].

*In LTF:* the moderated beginner session in AES-009 recruits at least some participants over 45 and some with no aviation background, and records both facts with the results.
:::

::: {.rule #AES-063 grade="B"}
**Never use a single-item "how good does this look" or "how easy does this look" rating as evidence for a design decision.** Two single-item scales rated on the same screen correlated at 0.921, which leaves open that they measured one overall judgment [@tractinsky1997aesthetics]. Multi-item validated instruments exist and separate facets [@lavie2004assessing; @moshagen2010facets].

*In LTF:* the post-lesson question in AES-005 is a monitoring signal only; design decisions use the instruments in the four-question table of this chapter.
:::

::: {.rule #AES-064 grade="C"}
**Run every appeal, credibility and complexity check in both themes and at phone and desktop widths.** First-contact judgments form in a glance [@lindgaard2006attention], and learners land in whichever theme their system or their last choice sets. A page that is calm in Day and harsh in Night has two first impressions. This is a procedural consequence of the evidence, not a separate finding.

*In LTF:* the screenshot set for any review covers Day, Night, phone and desktop; the inline theme script in `index.html` means a learner's first paint is already in their theme, so neither is secondary.
:::

::: {.rule #AES-065 grade="B"}
**Use a computed complexity or clutter count to flag pages for review, and never as a pass or fail threshold.** Counts of text groups and image areas predicted perceived complexity well in one model [@reinecke2013predicting], and computable clutter measures capture real properties of displays, but those measures were validated on photographs, maps and visualizations, not on interface screens [@rosenholtz2007measuring].

*In LTF:* a script that screenshots each route and computes an edge-density or text-group count can run in design review; a page whose count jumps relative to its siblings or its previous version is looked at by a person.
:::

::: {.rule #AES-066 grade="C"}
**Keep a baseline: record each first-contact page's glance rating, facet scores and task results before a redesign, and compare after.** Every measure in this Part is most informative as a comparison, because absolute ratings vary with samples and award-winning design itself divides raters [@reinecke2013predicting]. This is method guidance, not a tested effect.

*In LTF:* store the baseline screenshots and results under `docs/` with the date and commit, next to the verification records the project already keeps in `docs/verification/`.
:::

::: {.rule #AES-067 grade="C"}
**Ask credibility questions with an open "why", and treat the reasons as data about which cues were noticed.** Under prominence-interpretation theory a cue must be noticed and interpreted to matter, and open comments revealed which factors people used [@fogg2003how]. What people say is not proof of what changed their judgment, so the reasons guide redesign; they do not measure its effect.

*In LTF:* after a participant reads a lesson, ask how far they would trust its numbers and why; if no one mentions the verification date or sources, they are not prominent enough (AES-052).
:::

### What this means for Learn to Fly

LTF does not need a research lab to apply this chapter. It needs a protocol, a small recruitment habit and a place to keep results. A workable version:

1. **Glance test** (15 minutes, five to eight people): the first-contact set (landing, `CurriculumPage`, Lesson 0.1, `SignupPage`, reference hub) in Day and Night at 500 ms, one appeal rating each, against the stored baseline (AES-012, AES-064, AES-066).
2. **Task session** (30 to 45 minutes, five people who have never flown, some over 45): Lesson 0.1 including its quiz and one widget in "Quiz me" mode, then one challenge through Brief, Fly on a second screen beside the simulator, and Debrief. Record completion, time, errors and moments of visible frustration (AES-009, AES-010, AES-062).
3. **After the task**: VisAWI-S, one ease question, and the open credibility question for the lesson (AES-026, AES-063, AES-067).
4. **Between sessions**: the screenshot and complexity script on every route, flagging outliers for human review (AES-065).

The protocol fits the project's existing practice. LTF already keeps in-sim verification records under `docs/verification/` and requires a sim verification list in pull requests that change facts; a design baseline beside them gives visual and interaction changes the same kind of evidence trail. The `/dev/components` page, which renders every component in every state, is the natural place to capture the craftsmanship screenshots in both themes.

What the protocol cannot do is tell LTF what its identity should be. It can tell whether a direction is simpler, more typical in its skeleton, more trusted and easier to use than the current one, and whether a novel element is still recognized. The choice of direction belongs to the brand and identity work in Part XX, Brand Identity and Distinctiveness, and Part XXVI, The Audit and the Identity Playbook; this Part supplies the tests that direction has to pass.

## Decision list and review checklist

### Decisions this Part settles for LTF

The decisions below are the ones the evidence in this Part supports strongly enough to act on now. Each names the rules that justify it.

1. **Task quality before polish on operated surfaces.** On `FlyModePage`, `FlyPanel`, `QuizBlock`, `DebriefForm` and `ChecklistPage`, known usability defects are fixed before visual refinement in the same area, and frustration points are tracked as defects (AES-006, AES-010, AES-022, AES-039).
2. **Evidence standard for design changes.** A redesign of anything a learner operates is accepted on task measures (completion, time, errors, abandonment) from beginners, with appearance and ease rated separately after a task, using validated multi-item instruments; ratings never substitute for tasks, and desire never closes a usability issue (AES-003, AES-007, AES-009, AES-026, AES-040, AES-058, AES-063).
3. **Fair comparisons.** Variants are compared at equal finish, or the difference in finish is stated; novel variants are checked for recognizability before preference is tested (AES-008, AES-020).
4. **Generous early ratings are expected.** Feedback is recorded with the respondent's number of completed lessons, and visual changes are evaluated after several sessions as well as on first view (AES-005, AES-037).
5. **First-contact pages are simplified and tested at a glance.** The landing page, `CurriculumPage`, Lesson 0.1, `SignupPage` and the reference hub are reviewed for complexity (text groups and image areas), with the landing hero first, and tested with 500 ms glance tests in Day and Night against a stored baseline; glance tests are not used for lesson or widget design (AES-011, AES-012, AES-013, AES-015, AES-064, AES-066).
6. **No designing toward admired examples without testing.** Directions are accepted after testing with intended learners, including older adults and people who have never flown (AES-014, AES-062).
7. **Marketing matches the product.** Landing samples and "How a lesson works" copy match the real `LessonPage` and `ChallengePage` (AES-016).
8. **Typical skeleton, chosen surface, concentrated signature.** Page structure and control behavior stay conventional; every surface property is chosen rather than inherited from a framework default; novelty is concentrated in a named signature set (`LessonPath`, the instrument widgets, the logo, the reference rail and kneeboard, `FlyModePage`, future custom challenge-type icons) (AES-002, AES-017, AES-018, AES-019, AES-021).
9. **Classical aesthetics for learning, expression for identity and celebration.** The lesson article, challenge tabs, Fly mode and reference stay orderly and plain; the landing hero, result card, course-complete panel, 404 and roadmap may be more expressive (AES-004, AES-022, AES-023).
10. **Craftsmanship consolidation.** One heading scale through the token utilities (retiring raw `text-2xl font-bold` and `text-3xl font-bold` headings), `Card` instead of inlined card boxes, every component in one form checked in `/dev/components` in both themes (AES-024, AES-025, AES-027, AES-033, AES-046).
11. **Fluent operational text.** Fly mode, steps, checklists and briefings use high-contrast ink pairs and the body face at body size or larger; no display or stylized face for steps; plain words everywhere (AES-028, AES-029, AES-030).
12. **No silent rendering faults.** Lessons and widgets are checked in Day and Night, with visible scroll cues on tables and proper skeleton and error states in widgets (AES-031, AES-049, AES-064).
13. **Stable frame, varied content.** Lessons alternate block types and avoid long runs of paragraphs; nudges and celebrations do not repeat identically or escalate; instruments are drawn only with the shared widget primitives and fixed tokens (AES-034, AES-035, AES-036).
14. **Emotional design in its place.** Learning graphics keep warm, coherent instrument and chart palettes rather than grayscale; trivia and anecdotes go after the core idea or in "Go deeper"; decoration appears only in recap graphics and only when tied to the message (AES-041, AES-042, AES-043, AES-044, AES-045).
15. **Visible verification on lessons.** `LessonPage` shows `lastVerifiedAt`, the sim version and its sources in the meta row; a "How we check lessons" explanation names who verifies and how, linked from lessons (AES-047, AES-048, AES-052).
16. **Promotion out of the reading path.** `SignupBanner` moves below the first content block or to the completion panel and stays dismissible (AES-050, AES-035).
17. **Purpose-appropriate look.** Aviation-literate structure and copy (Brief, Fly, Debrief; POH rail; readouts) are kept; gamified treatments are not adopted (AES-051).
18. **Calibrated trust.** Unverified content always looks different from verified content; honesty statements agree with each other (the `BetaBanner` and `AboutPage` accounts are reconciled); the result card says the tier is self-assessed; warnings stay rare; simplifications are labeled; badges and tier copy do not imply real-world qualification (AES-053, AES-054, AES-055, AES-056, AES-059, AES-061).
19. **Caricature over realism for teaching.** Widgets stay simplified drawings; sim screenshots are for orientation; "looks like the real thing" is not evidence (AES-057, AES-058).
20. **No aesthetic manipulation.** Decline and secondary actions are honest secondary buttons, never low-contrast text; destructive actions stay behind confirmation (AES-060).
21. **A standing test protocol and baseline.** The glance test, the beginner task session, post-task instruments with an open credibility question, and a complexity flagging script, with results stored under `docs/` beside the verification records (AES-012, AES-062, AES-065, AES-066, AES-067).
22. **Liking is not learning.** Satisfaction and outcomes are reported separately; rising satisfaction is never cited as evidence that a module teaches (AES-038, AES-044).

### Review checklist

Run these questions against a pull request that changes a page or component, or against a live page. Each question names the rules it checks. A "no" is a finding; the reviewer records the rule ID with it.

#### Evidence and method

- Is any claim that the change improves usability backed by task measures from beginners, not only by ratings or a screenshot review? (AES-003, AES-009)
- Were appearance and ease asked as separate questions, after a task, with a multi-item instrument where a decision depends on it? (AES-007, AES-026, AES-063)
- If two variants were compared, were they at equal finish, or is the difference stated? Was the novel variant recognized in a naming check first? (AES-008, AES-020)
- Did the test sample include people who have never flown and some older adults? (AES-062)
- Is any "I love it" or "looks just like the real thing" feedback being used to close an issue? If so, it should not be. (AES-040, AES-058)
- Are early ratings labeled with how much the respondent had used the product? (AES-005, AES-037)
- Is satisfaction being reported as evidence of learning? If so, it should not be. (AES-038)

#### First contact

- If the page is first-contact, has a glance test been run in Day and Night against the stored baseline? (AES-012, AES-064, AES-066)
- Has the number of text groups and image areas gone down, or at least not up, in each viewport? Did the complexity script flag it? (AES-011, AES-015, AES-065)
- Do landing samples and marketing copy still match the real lesson and challenge pages? (AES-016)
- Is the direction justified by testing with learners, not by resemblance to admired sites? (AES-014)

#### Structure, novelty and surface

- Does the page skeleton stay conventional (layout order, navigation, reading direction, control behavior)? (AES-002, AES-017)
- Is any novel element one of the named signature set, and does a beginner still recognize what it is? (AES-018, AES-020)
- Is every surface property (radius, elevation, icon, type, color) a chosen token or component, not a framework default or a hand-inlined one-off? (AES-019, AES-025)
- Are complex displays (PFD, sectional, arcs) inside a `WidgetFrame` in lesson or reference content, not on a first-contact view? (AES-021)
- Is the surface classical if learners study or operate here, and is any expressive treatment confined to identity or celebration moments? (AES-022, AES-023)

#### Facets and craftsmanship

- Simplicity: is the page orderly and easy to grasp? Diversity: does a long page vary its rhythm, or is it monotonous? Colors: is color chosen and harmonious? Craftsmanship: is every element aligned, spaced and styled consistently? (AES-024, AES-027)
- Are headings set with the token utilities, cards rendered with `Card`, and components used in their single shared form? (AES-025, AES-033)
- Has every new or changed component been checked in `/dev/components` in Day and Night, in every state? (AES-025, AES-064)

#### Fluency and content

- Is operational text (Fly mode, steps, checklists, briefings, key numbers) in a high-contrast pair and in the body face at body size or larger? (AES-028, AES-029)
- Is the copy plain, without padding meant to sound authoritative? (AES-030)
- Could any rendering fault (clipped table, partial widget, unthemed state) be mistaken for an author error? (AES-031, AES-049)
- Has fluency work removed content the learner needs? (AES-032)
- Does the lesson alternate block types rather than run long stretches of paragraphs? (AES-034)
- Is any trivia, anecdote or comparison callout placed after the core idea and tied to the lesson's objectives? (AES-042)
- Is any decoration in a graphic tied to its message, and absent from any display read for values? (AES-043)
- Do learning graphics use the fixed instrument and chart palettes rather than grayscale or garish color? (AES-041, AES-044)
- Are instruments drawn only with the shared widget primitives and fixed tokens? (AES-036)

#### Credibility and trust

- Does the page meet the craftsmanship checks that make correct content believed? (AES-046)
- Does a lesson or reference page show its last-verified date, sim version and sources, prominently enough to be noticed? (AES-047, AES-052)
- Is it clear who checks the content and how to reach them? (AES-048)
- Is there any typo, broken link, placeholder or em dash in learner-facing text? (AES-049)
- Is any promotional prompt in the reading path of a lesson? (AES-050)
- Does the look match the purpose, without gamified or corporate treatments? (AES-051)
- Does unverified content look different from verified content in every view, including previews and screenshots? (AES-053)
- Does every honesty statement on the page agree with the others and with `AboutPage` and `BetaBanner`? (AES-054)
- Is any new warning, alert or nudge rare, meaningful and retirable? Does a dismissal stick? (AES-035, AES-055)
- Wherever the app scores or confirms, does it say what it cannot check (it cannot see the sim; tiers are self-assessed)? (AES-056)
- Is every simplified drawing or annotated screenshot labeled as such? Are widgets caricatures rather than photoreal panels? (AES-057, AES-059)
- Is any decline, secondary or destructive action visually honest? (AES-060)
- Does every badge, tier and celebration say what it is, and what it is not where it could be misread? Is it brief and non-escalating? (AES-045, AES-061)
