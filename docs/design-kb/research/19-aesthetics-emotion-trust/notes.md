# Lane 19: Aesthetics, emotion and trust

Evidence base for how visual appeal, first impressions, emotional design, fluency and credibility cues shape what beginners think of Learn to Fly, and how far those perceptions track what actually works. Read the cautions first: the oldest claim in this lane ("what is beautiful is usable") has been qualified several times, and the fluency literature has had real replication failures.

## kurosu1995apparent

Kurosu, M., & Kashimura, K. (1995). Apparent usability vs. inherent usability. CHI '95 Conference Companion, 292-293.

### Core claims

Kurosu and Kashimura introduced the distinction between inherent usability (the measurable ease and safety of operating a system) and apparent usability (how easy the interface looks to use before or without operating it). Their two-page CHI '95 companion paper argues that apparent usability is driven more by how beautiful an interface looks than by the design factors that usability engineers normally treat as the causes of ease of use. The paper is generally treated as the origin of what later literature calls the aesthetic-usability effect. It is a short experimental report, not a full study with extensive statistics, so its value is mostly as the starting point that others had to replicate.

### Specifics

According to a fetched summary of the CHI '95 proceedings page (chi1995.chistatic.hosting.acm.org/proceedings/shortppr/mk_bdy.htm), the stimuli were layouts of an automatic cash dispenser screen. Twenty-six people (9 GUI designers, 6 industrial designers, 8 engineers and 3 secretaries) each arranged the same set of elements (numeric keys, special keys, a Yen key, cancel and correction keys, and main and sub displays) as they saw fit, producing 26 layout patterns that were shown to raters on hard copy. Two hundred fifty-two students (156 from a design school and 96 from a psychology course) rated each layout on 10-point scales for apparent usability and for beauty. The two rater groups agreed well (the summary reports correlations of 0.679 for usability and 0.783 for beauty between groups), so their data were merged.

From interviews with interface designers the authors derived seven design strategies that designers believe make a layout usable: glance sequence, familiarity, grouping, two operation-sequence strategies, hand dominance, and a safety strategy (how far the cancel key sits from the main keys). Each strategy was scored for every layout and correlated with the apparent-usability ratings. The headline result is a correlation of 0.589 between beauty and apparent usability. Most of the inherent-usability measures correlated weakly or not at all with apparent usability (glance sequence 0.000, grouping 0.075, hand dominance -0.127, safety 0.137 as reported in that summary), with one large exception: familiarity of the keypad arrangement, reported at 0.730. Tractinsky's later account of this study (Tractinsky et al., 2000, in this lane) restates the point as beauty being more strongly tied to apparent usability than all but one of the inherent factors.

### Replication and criticism

This is a correlational study of ratings of static screen pictures, so it cannot say that beauty causes the perception of ease. Raters never used the layouts, which later authors flagged as a possible method bias. Tractinsky (1997, also in this lane) replicated the design in Israel with 26 Hebrew-translated layouts and found a much higher correlation, which supported the basic finding while raising questions about culture and method. Later experiments let people actually use the interface and found that the link can persist (Tractinsky et al., 2000), can weaken (Hassenzahl and Monk, 2010), or can reverse direction (Tuch et al., 2012). The sample is also limited to one screen type, one culture, and students, and only 26 layouts, so the effect of any single layout is large relative to the number of items.

### Implications for LTF

The paper's practical message is that a beginner will judge how hard Learn to Fly is to use from how it looks before using it. For an app that has to persuade a complete beginner that flight training is within reach, that matters at the first lesson page and the first widget. But the paper's own data show that familiarity (a layout that looks like ones you have seen) mattered more than beauty. For a flight-training audience, that argues for standard patterns in navigation, checklists and quizzes, and saving novelty for the content. The study also warns against using beauty to hide real problems: apparent usability is not inherent usability, so fly mode and challenge briefings still need task-level testing with real beginners, not just visual review.

Confirmed this session: Crossref record for DOI 10.1145/223355.223680 (title, authors, 1995, pages 292-293); fetched summary of the CHI '95 short-paper page (chi1995.chistatic.hosting.acm.org/proceedings/shortppr/mk_bdy.htm), which gave the method and the correlations quoted above; the Tractinsky et al. (2000) full text for the description of Kurosu and Kashimura's findings. I did not read the original two-page PDF text itself.

## tractinsky1997aesthetics

Tractinsky, N. (1997). Aesthetics and apparent usability: Empirically assessing cultural and methodological issues. Proceedings of CHI '97, 115-122.

### Core claims

Tractinsky tested whether Kurosu and Kashimura's finding (perceived beauty of an ATM screen tracks its apparent ease of use) was a Japanese peculiarity or a feature of how rating tasks work. Across three experiments in Israel he replicated the basic result: perceived aesthetics and perceived ease of use were very highly correlated. He also found cultural differences in the relationship, but in the opposite direction from what he had hypothesized, and concluded that objective usability measures alone may not predict whether people accept a system. The paper is an exploratory replication with a methodological purpose: ruling out that the strong correlation is produced by the procedure of rating both qualities on the same screen at once.

### Specifics

According to the CHI '97 proceedings page (chi1997.acm.org/proceedings/paper/nt.html, fetched this session), the stimuli were the same 26 ATM layouts used by Kurosu and Kashimura, translated into Hebrew, each varying in seven objective design features such as display location, keypad type and key grouping. Participants rated each layout on two 1 to 10 scales, how easy it is to use and how beautiful it is. Experiment 1 (104 first-year engineering students) copied the original procedure: layouts were projected in a classroom for about 20 seconds each and both ratings were given before moving on. Experiment 2 (81 students) tested response dependency by showing the layouts in two separate rounds with one rating per round, in counterbalanced order, about 15 seconds per layout. Experiment 3 (108 third-year students) tested medium bias by presenting the layouts on personal computers in fully randomized order, one question per pass, and recording response times.

Results as summarized from that page: mean aesthetics was 5.9 in Israel against 6.0 in Japan, and mean apparent usability 5.4 against 5.8. The aesthetics and usability correlation was 0.921 in Experiment 1, much higher than the 0.59 in the original study, and Israeli ratings varied more across layouts. Experiment 2 gave closely similar results, which weakens the explanation that answering both questions together creates the correlation. In Experiment 3, participants took longer to rate usability (8.68 seconds on average) than aesthetics (7.58 seconds). A multitrait-multimethod analysis showed strong convergent validity but only tentative discriminant validity, with most violations in Experiment 1, suggesting some method bias there that later experiments reduced.

### Replication and criticism

The paper is itself a replication, and it is the first to establish that the effect appears in a second culture. It also reveals the study's limits: all participants were engineering students, ratings were of pictures, and the high correlation (0.921) between two single-item scales leaves open that raters simply treated the two questions as one overall like-dislike judgment. The author notes this is exploratory and recommends a holistic approach to how people experience information systems. Later work separated a halo from a genuine inference: Tractinsky et al. (2000) added actual use of the system, and Hassenzahl and Monk (2010) re-analyzed 25 correlations from 15 papers and argued the link is largely indirect, mediated by overall goodness. A single high correlation from rating screenshots should therefore be read as showing how people form a quick judgment, not how a system will perform.

### Implications for LTF

For LTF, the main lesson is that beginners will quickly read a page as both attractive and easy, and that the two judgments are hard to separate when asked on the same screen. Any design review of lesson pages that asks testers for a combined "does this look good and easy" rating will overstate usability. Ask usability questions after a task, and separate the visual review. Cultural variation also matters for a US English product that may attract learners abroad: do not assume that a layout rated easy by one group will be rated easy by another, so test with a mix of pilots, not only students or hobbyist simmers.

Confirmed this session: Crossref record for DOI 10.1145/258549.258626 (title, author, 1997, pages 115-122); fetched CHI '97 proceedings page for the paper (chi1997.acm.org/proceedings/paper/nt.html), which supplied the abstract, participant counts and results above; the Tractinsky et al. (2000) full text for how it describes this paper. I did not read the paper's own full text, figures or tables.

## tractinsky2000what

Tractinsky, N., Katz, A. S., & Ikar, D. (2000). What is beautiful is usable. Interacting with Computers, 13(2), 127-145.

### Core claims

Tractinsky and colleagues asked whether the strong link between perceived beauty and perceived usability survives after people actually use a system, and which of the two (real usability or interface beauty) drives post-use perceptions. In an experiment with an ATM simulation, the correlation between perceived aesthetics and perceived usability stayed high after use, and the manipulated level of aesthetics affected post-use perceptions of both aesthetics and usability, while the manipulated level of actual usability did not. They connect this to the social-psychology finding that physically attractive people are assumed to have other desirable traits ("what is beautiful is good"), and they call for aesthetics to be studied seriously in HCI. This is the paper that gave the field its slogan.

### Specifics

The design was a 3 by 2 between-groups experiment with 132 third-year industrial engineering students (average age 25; about 67 percent male); eight were excluded because their ratings of the most and least beautiful layouts differed by 3 points or less on a 1 to 10 scale, and analyses used 124 participants. Aesthetics had three levels (low, medium, high), chosen per participant from nine ATM layouts that all contained the same objects and differed only in arrangement, based on that participant's own ratings. Usability had two levels, manipulated by adding delays (9 seconds on average per task), buttons that did not work the first time they were pressed, and one task that blocked a shortcut. Participants did 11 tasks on a simulated ATM (balance inquiries, withdrawals, combined tasks, deposits) and rated aesthetics, usability and amount of information before and after, plus satisfaction after. Mean pre-use aesthetics ratings were 8.26, 4.97 and 2.07 in the high, medium and low conditions. The usability manipulation worked (23.5 seconds per task in high usability against 37.5 seconds in low usability) and aesthetics had no effect on completion time or errors.

Pre-use perceived aesthetics and perceived usability correlated 0.66, and post-use 0.71. Post-use satisfaction correlated 0.87 with post-use perceived usability and 0.71 with post-use perceived aesthetics. In the multivariate analysis, with pre-use perceived usability as covariate, only the aesthetics factor affected post-use perceptions (including perceived usability), and the usability factor and the interaction did not. Under high aesthetics, post-use ratings did not drop even when real usability was low. Ratings of the medium and low aesthetics interfaces actually rose after use, which the authors speculate may reflect mere exposure or adapting to the system.

### Replication and criticism

The result was widely cited and then qualified. The authors themselves flag short duration of use, a homogeneous student sample, and bottom-line rather than process data. A later experiment with a strong usability manipulation (Tuch et al., 2012) found no effect of aesthetics on perceived usability and instead found that poor usability lowered perceived beauty, and Hassenzahl and Monk (2010) argued that the link has been overplayed. Sonderegger and Sauer (2010) found an aesthetics effect on perceived usability and performance with a phone simulation. Taken together, the correct reading is that the effect is real in some conditions but not universal, and strongest when usability differences are modest and aesthetics differences are large.

### Implications for LTF

Two practical points. First, a beautiful interface may excuse friction in the learner's eye, which is helpful for motivation but dangerous for evaluation: LTF teams should not use learner satisfaction on attractive prototypes as evidence that the flow is usable. Measure time to complete, errors and abandonment in lessons, quizzes and checklists. Second, medium or low aesthetics may improve with exposure, so first-run impressions can understate later opinion; but a poor first impression may cost sign-ups, so first screens deserve the most polish.

Confirmed this session: full text read (Interacting with Computers 13(2), 127-145, from the author's university site, ise.bgu.ac.il/faculty/noam/papers/00_nt_ask_di_iwc.pdf), Crossref record for DOI 10.1016/s0953-5438(00)00031-x.

## hassenzahl2004interplay

Hassenzahl, M. (2004). The interplay of beauty, goodness, and usability in interactive products. Human-Computer Interaction, 19(4), 319-349.

### Core claims

Hassenzahl proposed a model in which people judge an interactive product through two kinds of attributes: pragmatic ones (manipulation, usability, usefulness for tasks) and hedonic ones (stimulation, which is novelty and interest, and identification, which is how well the product expresses who you are or want to be). Those attribute perceptions feed two overall judgments, "beauty" (a visual, self-oriented judgment) and "goodness" (a broader judgment that the product is satisfying or desirable). His central claim is that beauty and goodness are related but not the same, that beauty is driven by the hedonic, identification side and stays stable with experience, and that goodness depends on both hedonic and pragmatic qualities, with usability becoming more important once people use the product. This challenges the simple "beautiful is usable" story: according to the model, beauty does not directly make a product seem usable.

### Specifics

The paper reports two studies using four skins of an MP3 player application. As summarized by the sources fetched this session (a Semantic Scholar record and secondary descriptions; the paper itself was not available to me), in study 1 participants judged the skins without using them and in study 2 participants who had used them did so. Constructs were measured with the author's attribute questionnaire (later called AttrakDiff, used by Tuch et al., 2012). Before use, beauty was predicted only by hedonic identification ratings, while goodness was predicted by hedonic attributes and by anticipated pragmatic quality. After use, perceived usability became a strong determinant of goodness, and perceived usability and goodness changed with experience (actual usability and usability problems), while hedonic attributes and beauty stayed stable. Tuch et al. (2012, read in full) describe a key analytic move: Hassenzahl controlled the correlation between perceived usability (pragmatic quality) and beauty for hedonic quality, and the beauty-usability correlation then disappeared, because hedonic quality is strongly related to beauty.

### Replication and criticism

The paper is often cited against the beauty-usability link; Tuch et al. (2012) list it among the studies that did not find the aesthetics-usability relation. Hassenzahl and Monk (2010, in this lane) extended it by reviewing 15 papers with 25 independent correlations and concluding that the beauty-usability link is indirect and mediated by goodness. Tuch et al. also note that models like this one propose causal paths on the basis of correlational data, so the causal story is theoretical rather than demonstrated. The evidence is two studies with a small set of four skins of one product type, so it is best treated as a well-argued model supported by moderate evidence, not as a settled result. I could not read the paper's own results tables, so I give no coefficients.

### Implications for LTF

The model suggests splitting "good design" for LTF into two jobs. Beauty and identification (does this feel like a place for people who want to fly?) shape first impressions, and they will survive use. Usability and usefulness decide whether learners judge the product good after a few lessons. A beginner who tries a challenge briefing that is hard to follow will downgrade the product's overall goodness even if they still find the visual style attractive. So LTF should invest in identity cues that suit learners (calm, competent, aviation-appropriate visual language, light and dark themes that both look finished), and in measurable task quality for the parts people use repeatedly: checklists, quizzes, fly mode.

Confirmed this session: Crossref record for DOI 10.1207/s15327051hci1904_2 (title, author, 2004, volume 19, issue 4, pages 319-349); Semantic Scholar summary line for the paper; web search results describing the two studies (scilit and secondary summaries); Tuch et al. (2012) full text for how it characterizes this study. The paper's abstract and full text were not available.

## lindgaard2006attention

Lindgaard, G., Fernandes, G., Dudek, C., & Brown, J. (2006). Attention web designers: You have 50 milliseconds to make a good first impression! Behaviour & Information Technology, 25(2), 115-126.

### Core claims

The paper reports three studies showing that people rate the visual appeal of web pages consistently after very short exposures, and that ratings after 50 ms agree with ratings after 500 ms. The authors conclude that visual appeal can be assessed within 50 ms and that designers therefore have about that long to make a good first impression. The result is widely used to justify the priority of first-impression visual design.

### Specifics

The abstract confirmed in search results says the studies tested how quickly people form an opinion about visual appeal, with homepages shown for 500 ms in the first study and for either 500 ms or 50 ms in the third. A later paper (Tuch et al., 2012, "The role of visual complexity and prototypicality...", read in full this session) summarizes the numbers: in study 1 participants rated pages twice after 500 ms and the two ratings correlated at r = .97; in study 2 an extra trial with unlimited viewing time correlated .98 with the 500 ms ratings; in study 3 ratings after 50 ms correlated .97 with ratings after 500 ms. Tuch et al.'s review table lists the participant counts as 22, 31 and 40 in the three studies. The Nature news report (nature.com/news/2006/060109/full/news060109-13.html) describes the glimpses as lasting about the length of one frame of standard television footage and says the verdicts tallied well with those made after longer viewing. The paper is about visual appeal, not about trust or usability, and its judgments are correlations across pages between exposure conditions.

### Replication and criticism

The paradigm has replicated and been extended, with qualifications. Tuch et al.'s table lists Lindgaard et al. (2011) replicating the stability of appeal, trust and usability judgments with masked 50 ms exposures, and Tuch et al. themselves found visual complexity and prototypicality affect aesthetic ratings at 17 ms. Critics point out that a high correlation between ratings after 50 ms and 500 ms shows agreement of judgments, not that the decision is made within 50 ms or is final. A Digital Trends commentary noted the study likely shows people can judge a page seen for 50 ms, not that they must decide that fast. Stability across time also does not mean accuracy: appeal ratings say nothing about whether the site is usable or credible. The participants were mostly students and the page sets were chosen from existing sites; later work (Reinecke et al., 2013, in this lane) found that first impressions vary by age and education, so a single average rating hides disagreement.

### Implications for LTF

For LTF the practical rule is to treat the first screen a learner sees as the one that sets expectations, and to test it with a very short exposure (a 500 ms impression test is cheap and well-founded). Check that the home page, the first lesson page and the sign-up page each read as calm, credible and uncluttered at a glance, in both light and dark themes. But the paper gives no support for making decisions about lesson design from snap judgments; those are for first contact only. The first impression should never be allowed to promise more than the lesson delivers.

Confirmed this session: Crossref record for DOI 10.1080/01449290500330448; web search snippet of the abstract (tandfonline page listed in the results); Nature news report fetched (nature.com/news/2006/060109/full/news060109-13.html); Tuch et al. (2012) full text for the correlations and sample sizes; Digital Trends critique via search summary. I did not read the original paper.

## hassenzahl2010inference

Hassenzahl, M., & Monk, A. (2010). The inference of perceived usability from beauty. Human-Computer Interaction, 25(3), 235-260.

### Core claims

Hassenzahl and Monk re-examined the "what is beautiful is usable" claim. They argued that the large and variable correlations between perceived beauty and perceived usability in the literature may reflect methodological problems (such as unsystematic sampling of products), and that the link is better explained as an inference: when users have little experience with a product, beauty informs an overall evaluation ("goodness"), which in turn colors judgments of usability. In their analysis the correlation between pragmatic quality (their operationalization of usability) and beauty is wholly mediated by goodness, so the beauty-usability link has been overplayed.

### Specifics

Per a fetched summary of the abstract (matthias-laschke-mt77.squarespace.com blog entry) and search results, the paper first reviews 15 papers that reported 25 independent correlations of perceived beauty with perceived usability and notes that they varied widely. It then reports analyses that sample products and participants in the same way and aggregate data both across participants and across products, so that findings can be tested for generality across products and not only across people. A mediation model of beauty, goodness and pragmatic quality was tested across four datasets and different aggregation methods, with the same pattern. The authors emphasize an inference perspective: users do not directly perceive usability from a picture; they infer it from other attributes when direct evidence is missing. This is a review plus new analyses of existing and new data, not a new experiment with real task performance.

### Replication and criticism

The paper is a major qualification of the 1990s and 2000s findings, and Tuch et al. (2012) cite it as concluding that experimental manipulation studies were lacking. It does not say beauty has no effect; it says the effect is indirect and context dependent. Later experimental work (Tuch et al., 2012; Sonderegger and Sauer, 2010) shows mixed evidence in different conditions. Because the key claims depend on correlations among self-reported attributes, they inherit the usual limits of that method. I confirmed the abstract-level claims only; I could not read the paper itself, so I give no coefficients.

### Implications for LTF

The inference perspective is useful for new learners, because they arrive with little experience. A beginner who has never used LTF will infer how usable it is from how it looks and feels, so first sessions get a beauty bonus on perceived usability. That bonus fades as direct evidence arrives. LTF should therefore expect early survey ratings to be generous and later ones to reflect actual task quality, and should not read early positive ratings as proof that the flow is easy. In reviews of design changes, measure usability with tasks (time, errors) and treat satisfaction ratings as a separate signal.

Confirmed this session: Crossref record for DOI 10.1080/07370024.2010.500139 (title, authors, 2010, volume 25, issue 3, pages 235-260); fetched abstract summary from the blog page above; web search result describing the 15 papers and 25 correlations; Tuch et al. (2012) full text for how it cites this paper.

## tuch2012beautiful

Tuch, A. N., Roth, S. P., Hornbaek, K., Opwis, K., & Bargas-Avila, J. A. (2012). Is beautiful really usable? Toward understanding the relation between usability, aesthetics, and affect in HCI. Computers in Human Behavior, 28(5), 1596-1607.

### Core claims

In a laboratory experiment that varied aesthetics and usability independently, Tuch and colleagues found that aesthetics did not affect perceived usability, either before or after use. Instead, usability affected post-use perceived aesthetics: poor usability lowered how beautiful the shop looked. They conclude that the "what is beautiful is usable" notion can be reversed under certain conditions (a strong usability manipulation combined with a medium to large aesthetics manipulation), and propose that the user's affective experience, in particular the frustration of poor usability, mediates the effect.

### Specifics

Eighty participants (42 female, mean age 25.7) each used one of four versions of an online clothing shop in a 2 by 2 between-subjects design. Usability was manipulated only through the shop's information architecture labels and category assignments, so the usable and unusable versions looked identical; navigation paths were checked with latent semantic analysis of information scent. Aesthetics was manipulated without changing interaction elements: from 20 design versions, 178 users rated beauty in a preliminary online study and the pair with the largest difference was chosen (t(177) = 12.63, d = .95). Participants had to find target items in four browse tasks (with a 5 minute cap per task), and rated the shop before use (from a screenshot) and after use on perceived aesthetics and usability using four validated instruments: classical and expressive aesthetics from Lavie and Tractinsky, AttrakDiff-based hedonic scales, the System Usability Scale, and others. At the pre-use phase, aesthetics did not affect perceived usability (F(1,76) = .582, p = .448). The paper also computed the effect sizes of manipulations (f = .32 to .54 for aesthetics, medium to large; f = 1.01 to 1.72 for usability, large) and reviewed earlier studies, noting that none of the earlier experiments had reported the strength of its manipulations as effect sizes.

### Replication and criticism

The study is a single lab experiment with students, a single product type (a shop), and a usability manipulation stronger than the aesthetics one, which the authors acknowledge as a boundary condition. It does not show that beauty never affects usability perceptions; it shows that this depends on conditions. A summary on measuringu.com reads the evidence as supporting "what is usable is beautiful" in this case. In combination with Tractinsky et al. (2000) and Sonderegger and Sauer (2010), who found an aesthetics effect on perceived usability, the sensible reading is mixed: both directions exist, and the direction depends on manipulation strength and context.

### Implications for LTF

This is the most important caution for LTF's design reviews. Visual polish cannot compensate for frustrating interaction. If a beginner struggles to find the checklist or cannot parse a quiz, they will rate the whole experience as less attractive, not just less usable. Fly mode, used beside the sim under cognitive load, is where the "frustration lowers beauty" effect is most likely. So usability problems should be fixed first, and then polish should be added. When running tests, measure both directions: ask about appearance and usability separately, and compare ratings of the same design before and after task completion.

Confirmed this session: full text read (from a university library copy, cpb-us-e1.wpmucdn.com/wp.wwu.edu/dist/8/2868/files/2018/04/Tuch-et-al-2012-Is-Beautiful-Usable-2don1em.pdf); Crossref record for DOI 10.1016/j.chb.2012.03.024; measuringu.com/visual-appeal summary.

## tuch2012role

Tuch, A. N., Presslaber, E. E., Stoecklin, M., Opwis, K., & Bargas-Avila, J. A. (2012). The role of visual complexity and prototypicality regarding first impression of websites: Working towards understanding aesthetic judgments. International Journal of Human-Computer Studies, 70(11), 794-811.

### Core claims

Using the very-brief-exposure paradigm of Lindgaard et al. (2006), this paper asks which design properties shape first impressions. Two experiments show that visual complexity (VC) and prototypicality (PT, how typical a site looks for its category) both affect aesthetic ratings within 50 ms, and that VC already does so at 17 ms, while the effect of PT is smaller at the shortest exposure and becomes as strong as VC at longer exposures. Overall, websites with low visual complexity and high prototypicality were judged most appealing. The authors read this as support for the information-processing stage model of aesthetic processing (Leder et al., 2004), where complexity is processed earlier than prototypicality.

### Specifics

Stimuli were screenshots of real company websites. Study 1 used 119 screenshots varying in VC (low, medium, high) and PT (low, high), with presentation time varied between participants (50, 500 and 1000 ms); there were 59 participants, mostly undergraduate psychology students. Study 2 shortened exposures to 17, 33 and 50 ms (measured mean exposure times were 16.67, 33.27 and 49.98 ms because of screen refresh limits), dropped the medium VC level because VC and beauty had been linearly related in study 1, and used 80 pages with 82 participants (mean age 27.3). A random visual noise mask followed each screenshot. The stimulus sites were pretested with 267 raters, and they were unfamiliar to participants (mean familiarity 1.04 on a 5-point scale). The dependent variable was perceived beauty. In study 2, at 17 ms the effect of VC (partial eta squared .38) was larger than that of PT (.19); at 33 ms both were similar (.65 and .66) and at 50 ms similar again (.57 and .66). More complex pages got lower ratings, higher-PT pages got higher ratings, and VC had a stronger effect for pages of high PT.

The paper also includes a review table of earlier brief-exposure studies, including Lindgaard et al.'s three studies (ratings correlated .97, .98 and .97), and notes Berlyne's inverted-U theory of complexity and preference is only mixed in support, with several studies finding a linear rather than a quadratic relation.

### Replication and criticism

This is a controlled experiment extending an influential paradigm, and its results fit those of Reinecke et al. (2013), who found complexity the dominant predictor of first impressions in a larger online sample. The authors list four limitations: passive viewing of screenshots rather than real browsing; a young, student, mostly Western sample, so culture and age may change preferences; company websites only, so results may not carry to shops or news sites where mental models are stronger; and uncontrolled underlying factors (form, color, location) behind complexity and prototypicality. The authors explicitly do not identify which features make a page complex or typical, so the result says that simple, typical-looking sites are liked, not what to change to get there.

### Implications for LTF

Two design rules follow with unusual support. Reduce visual complexity on first-contact pages (landing, lesson index, onboarding) and use familiar page structures for the kind of site LTF is (an e-learning product with lessons and progress). A site that looks like a typical learning site and is visually simple will read as appealing even in a glance. This supports plain layouts for lesson pages, a conventional left-to-right reading order, and conventional navigation, and it cautions against heavy novelty for its own sake. It also reminds designers that "complexity" of a flight instrument widget should be a deliberate choice: a cockpit-like gauge cluster is complex by nature, so put it in a dedicated fly-mode screen, not on the entry pages. Test any redesigned landing page with a 50 ms to 500 ms exposure and compare with the current page.

Confirmed this session: full text of the authors' preprint read (static.googleusercontent.com/media/research.google.com/en//pubs/archive/38315.pdf); Crossref record for DOI 10.1016/j.ijhcs.2012.06.003; Semantic Scholar record.

## reinecke2013predicting

Reinecke, K., Yeh, T., Miratrix, L., Mardiko, R., Zhao, Y., Liu, J., & Gajos, K. Z. (2013). Predicting users' first impressions of website aesthetics with a quantification of perceived visual complexity and colorfulness. Proceedings of CHI 2013, 2049-2058.

### Core claims

The authors built computational models that predict how complex and how colorful people perceive a website screenshot to be, and then used those two predictions, with demographics, to predict the visual appeal people reported after seeing the site for 500 ms. Together they explain 48 percent of the variance in appeal ratings. Visual complexity matters most; colorfulness plays a role but is not nearly as important; and the effects are not universal, since age and education level shape first impressions (the introduction also lists gender, but gender interactions were not significant in the final model).

### Specifics

The paper reports three online experiments on LabintheWild.org. Four hundred fifty websites (350 English-language, 60 in another script, 20 English sites converted to grayscale, and 20 Webby Award nominees) were each shown for 500 ms to 548 volunteers who rated colorfulness, complexity or appeal. The colorfulness model, built from image statistics (HSV and CIELab color metrics, W3C color shares), had R squared of .78; the complexity model (text and non-text area, number of text groups, number of image areas, space-based decomposition leaves and a colorfulness term) had R squared of .65 (r = .80). After excluding inconsistent rating pairs, the appeal analysis used 3,412 rating means from 242 volunteers aged 16 to 70 living in 34 countries. A mixed-effects model with complexity, colorfulness and demographic interactions, including quadratic terms to allow a U shape, explained 48 percent of the variance. High complexity produced the largest drop in appeal, and low complexity was liked about as much as medium complexity, so the curve is not a strong inverted U. Age interacted with complexity: participants older than 45 liked low complexity more than other age groups. People with a PhD were most negatively affected by high colorfulness; gender did not show significant interactions.

The paper also reports that the 20 Webby Award sites, treated as best-practice examples, got average ratings between 4.21 and 6.57 on a 9-point scale (overall mean for other sites 4.73), with a mean standard deviation of 1.69, so even award-winning design was widely disliked.

### Replication and criticism

The result agrees with Tuch et al. (2012, role of visual complexity) on the importance of complexity and the weakness of the inverted U. The authors list limits: the models predict first impressions at 500 ms from screenshots, not usability or trust judgments formed later; the colorfulness model overestimates bright colors and the complexity model overestimates the effect of text; the sample is volunteers on a research platform; and preferences vary, so they suggest personal models of appeal. The computed metrics are a research prototype, not a design tool.

### Implications for LTF

This is a strong source for simplifying first-contact screens. A compact page with few text groups and image areas will be rated more appealing at a glance. It also argues against assuming a universal taste: learners come in different ages, and older learners (a real part of the flight-training audience) liked low complexity more. For LTF, that suggests restrained pages with clear grouping, sparing color for meaning rather than decoration, and an honest view of award-winning designs as one taste. The paper also gives a practical test: screenshot a page, measure text-group and image-area counts, and compare with an alternative.

Confirmed this session: full paper text read from the author's PDF (kgajos.seas.harvard.edu/papers/reinecke13aesthetics.pdf); Crossref record for DOI 10.1145/2470654.2481281.

## fogg2003how

Fogg, B. J., Soohoo, C., Danielson, D. R., Marable, L., Stanford, J., & Tauber, E. R. (2003). How do users evaluate the credibility of Web sites? A study with over 2,500 participants. Proceedings of the 2003 Conference on Designing for User Experiences, 1-15.

### Core claims

The Stanford Persuasive Technology Lab asked large numbers of people to judge the credibility of live websites in their own words and then coded what they mentioned. The central finding is that, among the things people said affected credibility, visual design was the most common, ahead of information structure and information focus. This study is cited as the evidence behind Fogg's prominence-interpretation theory, in which a site element affects credibility only if the user notices it (prominence) and then interprets it as a credibility cue.

### Specifics

According to the ACM and web-search records summarized for me this session, the abstract reports that 2,684 people evaluated the credibility of two live websites on a similar topic, drawn from ten content categories (e-commerce, entertainment, finance, health, news, nonprofit, opinion or review, search engines, sports and travel). The title states "over 2,500 participants", so the exact count differs between title and abstract and should not be quoted as a precise figure without checking the paper. The comments people wrote were coded, and the visual design of a site was the most mentioned factor, in 46.1 percent of comments, per that summary. NN/g's article on the theory describes the research as having participants judge two sites, choose the more credible and explain, with comments coded into categories like look, structure and focus. NN/g also credits the study with using behavior (participants used the sites) and with open-ended questions that did not prime people. Fogg's prominence-interpretation theory is a two-factor claim: the user must notice an element and then judge it.

### Replication and criticism

The study is a large survey of what people say, which is not the same as what actually changes judgments; in my reading, people can misreport the causes of their evaluations, and visible things like layout and color are easier to name than content quality. I could not read the paper's sampling or coding details, so I cannot say how the participants were recruited or how the categories were defined. Other studies (Robins and Holmes, 2008, in this lane) manipulated aesthetics experimentally with fixed content and also found visual design raising credibility. Treat the 46.1 percent as a descriptive finding of what these participants said, not as a causal effect size.

### Implications for LTF

LTF teaches safety-relevant material, so learners need to believe the content. If surface cues are the first thing people use to judge credibility, then typos, broken layouts, placeholder images or inconsistent styling on lessons can reduce confidence in the facts on the page. This is a good reason to polish lesson pages and quizzes, and to show who wrote and verified lesson content (see the Stanford guidelines, below). Visual design alone will not make wrong content credible, but sloppy design can make correct content seem unreliable.

Confirmed this session: Crossref record for DOI 10.1145/997078.997097 (title, authors, 2003, pages 1-15); web search results summarizing the abstract (2,684 participants, 46.1 percent, ten categories) citing dl.acm.org/doi/10.1145/997078.997097; NN/g article nngroup.com/articles/prominence-interpretation-theory fetched. I could not fetch the ACM page or full text.

## fogg2002stanford

Fogg, B. J. (2002). Stanford guidelines for web credibility: A research summary from the Stanford Persuasive Technology Lab. Stanford University. credibility.stanford.edu/guidelines.

### Core claims

The Stanford guidelines are a ten-item checklist for building the credibility of a website, summarizing three years of research involving more than 4,500 people (as stated on the page). They are craft guidance derived from survey and observational research, not a single experiment. They combine content and organization cues (verification, real organization, expertise, contact) with presentation cues (professional look, ease of use) and hygiene (updates, restrained promotion, no errors).

### Specifics

The page, written by B. J. Fogg and dated May 2002 with an update in June 2002, lists these ten guidelines (paraphrased): (1) make it easy to verify the accuracy of the information on your site, with third-party support such as citations and links; (2) show that there is a real organization behind your site, with a physical address and extras such as photos; (3) highlight the expertise in your organization and in the content and services, with credentials, and avoid linking to non-credible sites; (4) show that honest and trustworthy people stand behind your site, with real people and personal details in bios; (5) make it easy to contact you; (6) design your site so it looks professional, or is appropriate for your purpose, with attention to layout, typography, images and consistency, matching the purpose; (7) make your site easy to use and useful, rather than showing off technology; (8) update your site's content often, or at least show that it has been reviewed recently; (9) use restraint with promotional content such as ads, offers, pop-ups and separate sponsored content; and (10) avoid errors of all types, no matter how small, because typos and broken links hurt credibility more than expected. The related Stanford research page groups the work into evaluation strategies, design, individual factors, and context and content.

### Replication and criticism

These are research-derived guidelines but not an experimental test of each item, and the page as fetched reports no effect sizes or method detail. They date from 2002, an early period of web use, so they should be treated as a dated craft summary. In my reading, some items, like avoiding ads or showing a physical address, are generic and may not fit every product. Later experimental work supports individual claims, such as the effect of visual design on credibility (Robins and Holmes, 2008), but not the full list as a package.

### Implications for LTF

For an aviation learning product, guidelines 1, 3, 4, 8 and 10 map directly onto content practice. Link each lesson's facts to their sources (and to the simulator's own documentation where relevant), show reviewer names and a "last verified" date and sim version, say who the authors are (guideline 4), and keep the page error-free. These cues are also the visible evidence of the project's own rule that every fact has a source. Guideline 6 says to match the design to purpose, which suggests a clean, plain, aviation-literate look for LTF rather than a corporate or gamified one. Guideline 9 argues for restraint with promotional content in lessons, and guideline 10 argues for a proofread, tested interface with no broken links or typos.

Confirmed this session: fetched the Stanford page (credibility.stanford.edu/guidelines) for the ten guidelines, byline, dates and research base; fetched credibility.stanford.edu/research for the research areas.

## robins2008aesthetics

Robins, D., & Holmes, J. (2008). Aesthetics and credibility in web site design. Information Processing & Management, 44(1), 386-399.

### Core claims

Robins and Holmes tested whether aesthetic treatment changes how credible the same content seems. When the same content was presented with a high aesthetic treatment (HAT) and a low aesthetic treatment (LAT), the high treatment was judged more credible in nearly all cases. They call this the amelioration effect of visual design and aesthetics on content credibility, and suggest that it operates in the first few seconds of viewing.

### Specifics

Twenty-one landing pages (mostly informational sites and consultant sites; the sample included .com, .org and other domains) were saved and, in a second version, stripped of their visual enhancements in an HTML editor without altering the content, giving 21 pairs (42 images). Twenty subjects (14 female, 6 male; library and information science graduate students, six of them undergraduates) saw all 42 images in randomized order, with pairs not shown side by side, and gave quick credibility judgments by turning a dial on a 14-point scale from -7 to +7, with a neutral image between trials. That produced 840 judgments (the authors report power of 0.99). Average judgment time was 3.42 seconds (3.49 for HAT, 3.36 for LAT, not significantly different). The high-aesthetic group rated credibility higher than the low group (p < .001), though the raw difference was small on the 15-step range. In 14 of the 21 pairs the HAT version was rated positive and the LAT version negative, and across the pairs some aesthetic treatment increased the rating in 19 of 21 cases (90 percent). Three participants who carefully read the content had a much longer average time (9.79 seconds). Those who gave lower ratings were quicker (about 2 seconds) than those who gave higher ones (about 4.3 seconds).

### Replication and criticism

The authors state their limits: a convenience sample of LIS graduate students; the possibility that their participants know about web credibility; and the fact that the low-aesthetic versions were stripped versions (all graphic design removed) rather than sloppily designed ones, which may be an unusual baseline. They defend the sample by arguing that people trained to read for credibility still gave visceral judgments. A follow-up by Robins, Holmes and Stansbury on consumer health web pages also found visual design judgments related to credibility ratings. The effect size is small in raw terms and the participants were not tested on ability to judge actual accuracy, so the study shows a bias in snap judgments, not a validity of those judgments. Fogg et al. (2003, in this lane) also found visual design was the most cited credibility factor.

### Implications for LTF

For LTF, an unstyled or inconsistent page may be read as lower in credibility even if the facts are right, within seconds. Lesson pages should have a consistent type scale, spacing and hierarchy in both themes. But the bias works the other way too: well-designed pages can make weak content seem more credible than it is, which is an ethical risk for safety-relevant material. LTF's rule that no unverified fact is published (with a "verify" callout when unsure) matters most where the design is most polished. Do not let the polish of a page imply a level of verification that has not happened.

Confirmed this session: full text read (makinggood.ac.nz/media/1276/robinsholmes_2008_aestheticsandcredibilityinwebdesign.pdf); Crossref record for DOI 10.1016/j.ipm.2007.02.003.

## norman2004emotional

Norman, D. A. (2004). Emotional design: Why we love (or hate) everyday things. Basic Books.

### Core claims

Norman, whose earlier book argued that products must be understandable and usable, argues here that emotion is not a decoration on top of function: attractiveness, pleasure and meaning are part of whether a product works for people. He organizes the argument around three levels of processing: visceral (the immediate reaction to appearance), behavioral (the experience of using the product, its look and feel in use) and reflective (what the product means to you, the image it projects and what it says about your taste). The publisher's description on Open Library presents the thesis that people become emotionally involved with products and that products must be attractive, pleasurable and fun as well as not confusing or frustrating. This is a trade book that synthesizes research for designers, so its evidence is expert argument plus selected studies, not a single experiment.

### Specifics

The three levels are described the same way in Norman's own web essay (jnd.org/emotional-design, fetched this session): visual or visceral design is the initial impact, mainly appearance; behavioral design is about look and feel and the total experience of using a product; reflective design is about thoughts afterward, the image a product projects, and what it says about the owner. The essay describes a study by Norman, Kara Coyne and Jakob Nielsen with alarm clocks, espresso makers and vegetable peelers. One participant struggled to use a Jacob Jensen alarm clock, which was attractive and prestigious but hard to use, and was close to tears, yet still said they were dying to buy it; another, skilled with technology, rejected it mainly over price. Norman also suggests that people can be grouped by which level they weigh most, and that products differ in which level dominates (a peeler is mostly behavioral, a wall clock may be visceral or reflective). A reflective shopper who chose a peeler by brand lost that preference when its performance disappointed.

Catalog dates differ: Open Library's search entry gives 2003 and the work record gives 2005 as first publication, while the 2004 date used here comes from the copyright notice quoted in web search results; ISBN 9780465051359 is listed under the Basic Books work. The page that I fetched does not itself state the book's claims about positive affect and problem solving, so I do not repeat them. Tractinsky et al. (2000, in this lane) cite Isen's work that positive affect may improve decision making and creativity as a possible reason aesthetic interfaces help performance, but that is a citation to Isen, not a finding of this book.

### Replication and criticism

The three-level model is a framework, not a tested causal model. Empirical studies in this lane give a mixed picture of the book's headline claim that attractive things work better: Sonderegger and Sauer (2010) found attractive phones were used faster, Tuch et al. (2012) found that poor usability lowered perceived beauty and that beauty did not raise perceived usability, and Hassenzahl and Monk (2010) concluded the link is mediated by overall goodness. Norman's own alarm clock example suggests people can love something that is hard to use; that fits the idea that levels can conflict. Anecdotes and design cases are persuasive but cannot establish effect sizes.

### Implications for LTF

The three levels are a good checklist for each LTF surface. Visceral: does the first view of a lesson or challenge feel calm and inviting, in both themes? Behavioral: can a beginner complete the task with the sim open next to the app, with little effort? Reflective: does completing a lesson make the learner feel like a capable pilot-in-training, and does the product look like something a serious aviation learner would trust? Use the levels to set priorities. In fly mode the behavioral level dominates, so decoration should give way to legibility and speed. On the landing page and course map, visceral and reflective cues matter more. And because Norman's alarm clock case shows that desire can outrun usability, do not use "I'd use this" as the test of a design; use task completion.

Confirmed this session: Open Library work record OL1879160W (title, subtitle, author, first publication, publishers, ISBN list and publisher description); web search results for the book's publication details; fetched jnd.org/emotional-design essay for the levels and the alarm clock study. I did not read the book.

## reber2004processing

Reber, R., Schwarz, N., & Winkielman, P. (2004). Processing fluency and aesthetic pleasure: Is beauty in the perceiver's processing experience? Personality and Social Psychology Review, 8(4), 364-382.

### Core claims

The authors propose that aesthetic pleasure is a function of the perceiver's processing dynamics: the more fluently perceivers can process an object, the more positive their aesthetic response. They review variables known to influence aesthetic judgments (figural goodness, figure-ground contrast, stimulus repetition, symmetry and prototypicality) and trace their effects to changes in processing fluency. Variables such as visual or semantic priming, which change fluency without changing the stimulus, also raise judgments of pleasure. In contrast with theories that locate beauty in objective stimulus features, they say beauty is grounded in the perceiver's processing experiences, which are partly a function of stimulus properties. This is a review and theory paper, not a single experiment.

### Specifics

The paper states four assumptions: objects differ in the fluency with which they can be processed (including through the classic objective features such as symmetry and figure-ground contrast, and through priming); processing fluency is itself hedonically marked, experienced as positive, as indicated by psychophysiological findings; fluency feeds into aesthetic judgments because people draw on their subjective experience unless its informational value is called into question; and the impact of fluency is moderated by expectations and attribution, being stronger when its source is unknown and discounted when attributed to an irrelevant source. Evidence cited includes Reber, Winkielman and Schwarz (1998), who varied figure-ground contrast of circles and found high-contrast circles judged prettier; and a study varying presentation time (0.3, 1, 3 and 10 seconds) in which contrast influenced aesthetic judgments only at short exposures, as a fluency account predicts, since long exposures let people process anything easily. They also describe Winkielman and Cacioppo (2001), who measured facial muscle activity and found that high fluency was linked to stronger activity over the region used in smiling. On mere exposure, they propose that repetition raises liking by making a stimulus easier to process, and report that in priming studies the effect on judgments was eliminated when participants attributed their feeling to an irrelevant source such as background music.

The paper discusses its challenges directly. People sometimes prefer complex stimuli, though simple ones should be easier to process, so they offer several processes that may contribute, including expectations, attribution and expertise. They also cite a discrepancy-attribution view in which fluency produces a felt experience when it is unexpected, and note that expected fluency may still be enjoyed for prototypical faces or symmetrical patterns. These are proposed as conjectures awaiting testing.

### Replication and criticism

Fluency effects on liking have a long experimental record, but not all fluency claims survive. The strongest evidence concerns perceptual fluency from repetition, contrast and clarity in controlled stimuli. Claims that difficult fonts change reasoning have failed to replicate (Meyer et al., 2015, pooled one original study with 16 replications and found no effect on solution rates), and Mrkva and Van Boven (2020, read in full) argue that salience, not fluency, better explains mere exposure effects, with fluency accounting for less of the effects. The authors themselves flag that the explanation is hard to separate from other accounts, and that the complexity preference remains a challenge. Treat the theory as a well-supported organizing idea for low-level effects, not a rule that simpler always wins.

### Implications for LTF

Fluency is a unifying reason behind many LTF design rules: strong figure-ground contrast, symmetric and aligned layout, conventional (prototypical) structure, and repeated patterns across lessons all make pages easier to process and therefore feel better. In fly mode, where learners glance at the screen under load, high contrast and clarity should do the most work. The attribution point matters too: people may credit ease of reading to the content ("this is easy") when it is the layout, as in the effort-prediction work of Song and Schwarz (2008). That favors clean typography on lesson pages, but the paper's complexity discussion warns against stripping out all richness: an expert learner may enjoy denser, richer displays. Use fluency to remove avoidable friction, not to drain pages of content.

Confirmed this session: Crossref record and abstract for DOI 10.1207/s15327957pspr0804_3; full paper text read (pages.ucsd.edu/~pwinkielman/reber-schwarz-winkielman-beauty-PSPR-2004.pdf); PubMed abstract for the Meyer et al. replication (PMID 25844628); Mrkva and Van Boven (2020) full text.

## zajonc1968attitudinal

Zajonc, R. B. (1968). Attitudinal effects of mere exposure. Journal of Personality and Social Psychology, 9(2, Pt. 2), 1-27.

### Core claims

Zajonc argued that repeated exposure to a stimulus is by itself enough to increase liking for it, even without any reward or reinforcement. The phenomenon became known as the mere exposure effect, "mere" because the exposure is only a matter of the stimulus being perceptible to the person. The monograph combined experiments of Zajonc's own with a review of a fair number of experiments by others (Berlyne's description). The paper is a foundational demonstration, and the effect appears in nearly every introductory psychology textbook, as Mrkva and Van Boven (2020) put it.

### Specifics

My access to the 1968 text was limited to bibliographic records and secondary accounts, so I can state its structure but not its tables. Search results describing the full text report two kinds of evidence: students ranked which of 154 antonym pairs sounded more favorable, and the member of each pair that is used more often in English won in over 80 percent of cases; and in an experiment with photographs of men's graduation portraits, stimuli were shown 0, 1, 2, 5, 10 or 25 times, according to a secondary account; I could not confirm the results of that experiment. One secondary source also mentions nonsense words as stimuli. I did not confirm other stimulus details. In the modern literature, the design Zajonc used (several stimuli shown in the same session with different frequencies, called heterogeneous presentation) is the standard one. Reber et al. (2004) cite Zajonc for the idea that high fluency may feel good because it signals that a stimulus is familiar and so unlikely to be harmful.

Berlyne (1970, in this lane) states that Zajonc reported experiments indicating an inverse relation between novelty and verbally expressed preference, that is, liking rises as stimuli become familiar, and set out to test when that holds. Berlyne's own data with simple colored patches showed that pleasingness fell with repetition for simple stimuli but not for complex ones, so the effect depends on material and procedure.

### Replication and criticism

The effect has been studied for decades; the meta-analysis by Montoya et al. (2017, in this lane) pooled 268 curve estimates from 81 articles and found a positive slope with a negative quadratic term, consistent with an inverted U, so liking increases with exposure up to a point and may then decline. Mrkva and Van Boven (2020), citing earlier meta-analyses, note that the effect is larger when many stimuli are presented in one session than when each is presented alone, and that exposure raises liking more for neutral and positive than for negative stimuli. These facts are hard for the original familiarity-based explanations to explain, and they propose salience as an alternative mechanism: relative exposure, not absolute count, matters. They also note most experiments use mundane stimuli and controlled lab presentation, so naturalistic generalization is uncertain.

### Implications for LTF

Repeated, consistent exposure to the same visual vocabulary (icons, colors, layout, instrument styling) should make LTF feel more familiar and more liked over the first lessons, which supports consistent components. But the inverted-U finding and Berlyne's data warn about monotony: identical, repeated pages can turn tedious, so lessons should reuse structure while varying content. It also supports keeping instrument widgets visually matched to what learners will see in the sim, so the sim and the app reinforce each other. Because the effect is on liking, not on understanding, it should never stand in for learning outcomes.

Confirmed this session: Crossref record for DOI 10.1037/h0025848 (title, author, 1968, volume 9, issue 2 Pt.2, pages 1-27); web search results describing the monograph's 154 antonym pairs and 0, 1, 2, 5, 10, 25 exposures (I could not fetch the original PDF; cdn.isr.umich.edu returned 403); Berlyne (1970), Reber et al. (2004), Mrkva and Van Boven (2020) full texts for how they describe it.

## montoya2017reexamination

Montoya, R. M., Horton, R. S., Vevea, J. L., Citkowicz, M., & Lauber, E. A. (2017). A re-examination of the mere exposure effect: The influence of repeated exposure on recognition, familiarity, and liking. Psychological Bulletin, 143(5), 459-498.

### Core claims

This meta-analysis tests which models of the mere exposure effect fit the data and what moderates the effect. It finds that the effect of repeated exposure on liking follows a curve with a positive slope and a negative quadratic term, consistent with an inverted U: liking rises with exposure and then flattens or declines. The authors conclude that existing models of mere exposure do not adequately account for the findings and offer a framework for future research. It is the main modern quantitative check on Zajonc's 1968 claim.

### Specifics

According to the abstract (PubMed, PMID 28263645, fetched via the NCBI API this session), the authors estimated parameters from 268 curve estimates drawn from 81 articles, covering exposure effects on liking, familiarity and recognition among other evaluations. Inverted-U curves were associated with all visual but not auditory stimuli; with exposure durations shorter than 10 seconds and longer than one minute; with both homogeneous and heterogeneous presentation types; and with ratings taken after all stimuli were presented. Those are the moderators the abstract names. Mrkva and Van Boven (2020), citing this meta-analysis and Bornstein (1989), summarize related regularities: effects are moderate in heterogeneous presentation experiments (several stimuli in the same session) but small or absent in homogeneous ones, and liking increases more for neutral and positive stimuli than for negative ones. I only read the abstract of the meta-analysis itself, so I give no effect sizes or optimal number of exposures.

### Replication and criticism

A meta-analysis of 81 articles is stronger evidence than single experiments, but it inherits the limits of the studies: most use lab presentations of simple stimuli (shapes, words, faces) to students, and meta-analytic estimates depend on how curves are coded. The finding that visual stimuli show the inverted U while auditory ones do not shows that generalizing across modalities is unsafe. The authors' conclusion that existing models fail has prompted alternatives, including the salience account by Mrkva and Van Boven (2020). Reber et al. (2004) propose that fluency explains mere exposure; the later salience paper reports that fluency accounted for less of the effects than salience in its mediation models. The debate is about mechanism, not about whether exposure raises liking; that part is well replicated.

### Implications for LTF

Two practical points for a learning product. First, familiarity is a real but bounded benefit: repeated exposure to a consistent look raises liking for a while, but excessive repetition can flatten or reverse it, so there is no case for forcing the same prompt or decoration repeatedly. Second, because mere exposure effects apply to visual material, a stable set of instrument and control visuals across lessons, challenges and fly mode is likely to help liking and recognition, which is a low-cost design benefit. Do not rely on exposure alone to make learners like difficult content. For measurement, if LTF A/B tests a visual refresh, measure liking after a few sessions, not only after the first view, since early reactions may move.

Confirmed this session: Crossref record for DOI 10.1037/bul0000085 (title, authors, 2017, volume 143, issue 5, pages 459-498); PubMed abstract via eutils.ncbi.nlm.nih.gov (PMID 28263645); Mrkva and Van Boven (2020) full text for the related summary. I did not read the meta-analysis itself.

## berlyne1970novelty

Berlyne, D. E. (1970). Novelty, complexity, and hedonic value. Perception & Psychophysics, 8(5), 279-286.

### Core claims

Berlyne's paper reports five experiments on how novelty and complexity shape the hedonic value (pleasingness) and interest of simple visual patterns. The abstract states that, on the whole, both pleasingness and interestingness increase with novelty, which runs counter to experiments indicating an inverse relation between novelty and verbally expressed preference (Zajonc, 1968). Further experiments examined why: homogeneous (repetitive) sequences declined in judged pleasantness more than sequences with other stimuli interspersed, and simple stimuli became less pleasant as they became less novel, while complex stimuli declined less or became more pleasant. The paper links this to arousal theory, in which hedonic value peaks at a moderate level of arousal potential (the Wundt curve), which is the origin of the inverted-U idea in empirical aesthetics.

### Specifics

Experiments I and II used 80 and 56 undergraduates respectively, who saw sequences of colored patches of irregular shape on a white background, each shown for 9 seconds, and gave a rating after each (pleasingness on a 7-point scale in Experiment I, interestingness in Experiment II). Sequences were drawn from classes manipulated in whether stimuli differed in color only or in color and shape, whether a contrasting stimulus appeared, and whether participants were prefamiliarized with the full stimulus set. Ratings fell during monotonous runs and rose temporarily when a contrasting stimulus appeared. Experiment III (48 students) compared simpler and more complex patterns, including nonrepresentational and representational ones, in homogeneous and heterogeneous sequences; the hypothesis that hedonic value of simpler patterns decreases and that of complex ones increases with repetition received partial confirmation. Experiment IV checked whether requiring a rating after every presentation, which could have made repetition tedious or changed attention, explained the difference from Zajonc, and found no effect of attention instructions. Berlyne reports that monotony favors a tedium factor and that representational (meaningful) stimuli declined more steeply than nonrepresentational ones. The abstract adds that two crucial predictions were confirmed in a fifth experiment, which I did not read in detail. The discussion presents the Wundt curve: hedonic value is highest at moderate arousal potential and becomes negative as arousal potential increases, and as a stimulus becomes familiar it moves from right to left along the curve.

### Replication and criticism

This is one of the foundational works on complexity and preference, and its inverted-U is widely cited in design circles. The empirical record is mixed: Tuch et al. (2012, role of visual complexity) report that support for the inverted U is mixed and that several studies found a linear rather than a quadratic relation, citing Martindale and colleagues, and Reinecke et al. (2013) found a strong decline for high complexity but little penalty for low complexity in websites. The data here come from undergraduates rating abstract colored shapes, so the leap to web pages or flight displays is large. Berlyne himself cautions that effects of the representational versus nonrepresentational variable were complicated and peculiar to the stimuli and that it would be hazardous to draw general conclusions. Note that Zajonc and Berlyne are less contradictory than they look: both are consistent with an optimum, not a monotonic rule.

### Implications for LTF

Berlyne gives a theoretical reason for varied pacing: simple, repeated material gets boring, while moderately novel or complex material holds interest. Lesson sequences should interleave formats (reading, widget, quiz, challenge) rather than repeat one. But for web pages the practical evidence points to reducing complexity at the first view (see Reinecke et al.). The combined message: keep chrome, navigation and layout stable and simple, and spend novelty in the learning content. Do not cite "the inverted U" as a rule for design without noting the mixed support.

Confirmed this session: full text extracted and read for the abstract, Experiments I to IV and the general discussion (link.springer.com/content/pdf/10.3758/BF03212593.pdf, saved PDF); Crossref record for DOI 10.3758/bf03212593; Tuch et al. (2012) full text for the critique of the inverted U.

## hekkert2003most

Hekkert, P., Snelders, D., & van Wieringen, P. C. W. (2003). 'Most advanced, yet acceptable': Typicality and novelty as joint predictors of aesthetic preference in industrial design. British Journal of Psychology, 94(1), 111-124.

### Core claims

Typicality (how well an item is a good example of its category) and novelty are each known to relate to aesthetic liking, yet they seem incompatible because a typical product is rarely new. Across three studies the authors show that typicality and novelty are jointly and about equally effective in explaining aesthetic preference for consumer products, but that they suppress each other's effect: their direct correlations with preference were not significant, and each relationship became highly significant once the other was partialed out. The summary conclusion is that people prefer novel designs as long as the novelty does not affect typicality, or equivalently prefer typicality as long as it is not at the cost of novelty. Preferred products have an optimal combination of both. The title quotes a design maxim, "most advanced, yet acceptable", often attributed to the industrial designer Raymond Loewy; I could confirm the maxim's existence in web search results, but not that this paper cites him, so I do not attribute it here.

### Specifics

Details I could confirm come from the abstract (PubMed PMID 12648393, fetched via the NCBI API). Typicality was operationalized as "goodness of example." In Study 2, the expertise level of observers did not change the relative contribution of novelty and typicality, so design experts and non-experts weighted them similarly. In Study 3, a more objective measure of typicality, central tendency (an exemplar's average similarity to all other members of the category), gave the same effect of typicality on aesthetic preference as the rated version. The stimuli were consumer products (the abstract mentions industrial design), and the three studies used ratings of products by observers. Tuch et al. (2012, role of visual complexity, read in full) describe the main finding as people preferring novel designs only as long as the novelty did not affect prototypicality, and use it to motivate their website experiments.

### Replication and criticism

The suppression pattern is a statistical result worth taking seriously: a naive correlation between novelty and liking can be near zero even when novelty matters, because typical and novel are negatively related. Related work found that aesthetic appeal correlated positively with prototypicality for basic object categories (as summarized in Tuch et al., 2012), and Tuch et al. found that low-prototypicality websites were generally judged unattractive. The result depends on rating tasks with consumer products and on the particular categories sampled; it does not say how much novelty is optimal for a given category or audience. Reber et al. (2004) offer a fluency interpretation of why prototypes are liked and say that preference for complex stimuli, including by experts, remains a challenge for fluency theory. I could not confirm the participants or stimuli of the three studies, and nothing in the abstract addresses long-run exposure or software.

### Implications for LTF

This paper gives a clear rule for visual and structural choices: be recognizable first, then distinctive. A lesson page that follows familiar patterns for a learning product (a clear title, progress indicator, content column, next button) will be judged as good; deviation should be limited and purposeful. Conventional patterns for checklists (a vertical list with check marks), quizzes (question, choices, feedback) and dashboards will be easier for beginners, who have no model of what flight training software should look like and will rely on general web conventions. LTF's identity can come from its content and its restrained aviation-flavored palette and instrument styling, not from unusual controls. Judge novelty in widgets by whether the learner still sees "what this is" in a glance.

Confirmed this session: Crossref record for DOI 10.1348/000712603762842147; PubMed abstract (eutils.ncbi.nlm.nih.gov, PMID 12648393); web search for the Loewy maxim (results did not link Hekkert to Loewy); Tuch et al. (2012) and Reber et al. (2004) full texts for how they describe it. I did not read the full paper.

## lavie2004assessing

Lavie, T., & Tractinsky, N. (2004). Assessing dimensions of perceived visual aesthetics of web sites. International Journal of Human-Computer Studies, 60(3), 269-298.

### Core claims

Through four studies the authors developed a measurement instrument for perceived web site aesthetics. Using exploratory and confirmatory factor analyses they found that users' perceptions fall into two main dimensions. Classical aesthetics pertains to notions that presided from antiquity until the 18th century: orderly, clear design, closely related to many of the design rules that usability experts advocate. Expressive aesthetics is manifested by the designers' creativity and originality and by the ability to break design conventions. The two dimensions are distinguishable, and each is measured by a five-item scale. The paper's practical point is that "aesthetics" is not one thing, and that only one of its two faces overlaps strongly with usability.

### Specifics

The authors began with a list of 41 items for perceived aesthetics generated from the literature and from experts, and used four studies. Study 1 (125 engineering students) rated either the Times Magazine site or another site on the item list and a first exploratory factor analysis was run, after which items were revised. Study 2 (212 third-year undergraduate engineering students) had participants visit an e-commerce site (the Gap or Macy's sites) and ostensibly purchase items, and exploratory factor analysis identified a simple structure with two factors. Study 3 added scales for usability, playfulness, pleasure and service quality in a sample of 145 participants browsing an Israeli online store, with the two-factor solution explaining 55.7 percent of the variance. Study 4 used confirmatory factor analysis on a sample of ordinary web users in their natural environment, aged 17 to 67 with an average of 27, to settle the final model of 10 aesthetic items, five per factor. The classical items include pleasant, clear, clean, symmetrical and aesthetic; the expressive ones include creative, original, sophisticated, fascinating and using special effects. In the correlation analyses, classical aesthetics correlated between 0.60 and 0.78 with the other constructs, while expressive aesthetics correlated 0.37 to 0.59 with them, and the correlation of usability with classical aesthetics was considerably higher than with expressive aesthetics. Correlations with age and gender were not significant, supporting discriminant validity.

### Replication and criticism

The scale became a standard measure, and it is used in later experiments (for example, Tuch et al., 2012 used its classical and expressive scales). Moshagen and Thielsch (2010) argue that the items are too abstract to guide design (an item such as "pleasant" gives a designer no direction), and developed a more specific alternative with four facets. The studies sampled Israeli students and web users and evaluated both Hebrew and English sites, which the authors present as a strength, but the authors list limitations. Self-report ratings rely on conscious judgments and the two-factor structure may differ in other cultures, as Moshagen and Thielsch also note about their own samples. In my reading, the reported correlation between classical aesthetics and usability may be partly a halo effect of the kind discussed in Tractinsky et al. (2000), since participants evaluated sites and did not necessarily use them.

### Implications for LTF

The distinction gives LTF a useful vocabulary. Classical aesthetics (order, clarity, cleanliness, symmetry) is the face that overlaps with usability, and it is what a flight-training product should lead with. Expressive aesthetics (originality, special effects) carries less usability benefit and risks distracting learners from the content. A review of LTF pages can use the ten items as a quick survey: ask a small group of beginners to rate a page on the classical and expressive items and compare designs. A page with a high classical score and a low expressive score is likely the right place for a safety-critical lesson. Marketing pages may afford more expression.

Confirmed this session: full text read (ise.bgu.ac.il/faculty/noam/papers/04_tl_nt_ijhcs.pdf, fetched as a PDF); Crossref record for DOI 10.1016/j.ijhcs.2003.09.002.

## moshagen2010facets

Moshagen, M., & Thielsch, M. T. (2010). Facets of visual aesthetics. International Journal of Human-Computer Studies, 68(10), 689-709.

### Core claims

The paper aims to provide a precise definition and a new measure of perceived visual aesthetics of websites. Based on a broad definition of the domain, the authors developed the Visual Aesthetics of Website Inventory (VisAWI). Across seven studies they identified and validated four interrelated facets: Simplicity and Diversity (formal parameters of aesthetic objects throughout the history of empirical aesthetics), Colors (a critical property of aesthetic objects) and Craftsmanship (the skillful and coherent integration of the relevant design dimensions). The facets together represent perceived visual aesthetics but are distinguishable from each other and carry unique meaning.

### Specifics

Study 1 defined the domain: a literature review identified 34 aspects of web visual aesthetics, which 256 web users rated for importance on a 5-point scale. Simplicity (mean 4.72), colors (4.19) and proportion (4.01) were judged most important, and depth (2.37), symmetry (2.39) and movement (2.48) least, with no aspect judged unimportant. An initial pool of 84 items was written across twelve content domains, with about half reversed to counter acquiescence bias. Study 2 (300 volunteers, age 15 to 64, mean 27.8) rated Finnish websites, chosen so that content and usability were not confounded, with the site and items on screen; exploratory analysis reduced the pool from 77 to 37 items. Later studies refined the scale to 39 and then 18 items (final VisAWI), and confirmatory factor analysis in Study 4 with natural websites supported the four-factor structure. Study 5 established convergent, divergent, concurrent and discriminative validity against measures that included Lavie and Tractinsky's classical and expressive scales and a measure of intention to revisit. Divergent validity was mixed: the other facets also correlated at least moderately with perceived usability and content quality. Studies 6 and 7 were experimental: when participants completed tasks before evaluating, the correlations between VisAWI and perceived usability were much weaker, with only Simplicity, Craftsmanship and the total score related to usability, and the colorfulness facet changed when color schemes were distorted. The paper reports a development base of more than 2,000 participants evaluating over 70 websites.

### Replication and criticism

The VisAWI is widely used and has a 2013 short version by the same authors (Moshagen and Thielsch, Behaviour & Information Technology, confirmed in Crossref), but this paper's own limits are stated: it may be long for some settings, covers visual aesthetics only, was tested on websites only, used unrepresentative participants and sites, and rests on samples with a common cultural background; and Likert items assume conscious access to the aesthetic experience. The study with natural websites cannot rule out that designers who do well on aesthetics also do well on usability and content, and participants who only view sites may show a halo. The experimental follow-up (Study 6) weakened the usability correlation, which supports the idea that the aesthetics-usability link is partly an inflated rating effect when no one uses the site.

### Implications for LTF

The four facets translate into design review criteria that are more actionable than "make it beautiful": is the layout simple, is there enough visual variety to hold interest, are colors harmonious and purposeful, and is the whole crafted with coherent attention to detail. The user ratings that simplicity matters most fit LTF's priorities: simple layouts and few colors for lesson and fly-mode pages. Craftsmanship is a reminder to check alignment, spacing and consistent states in both light and dark themes. VisAWI-S, the short version, could be used in a post-session survey, provided it is read as a measure of how learners see the design and not of usability.

Confirmed this session: full text of the authors' draft read (uni-muenster.de/OWMS/uploads/drafts_thielsch/pdf/moshagen_2010.pdf, extracted from the saved PDF); Crossref records for DOI 10.1016/j.ijhcs.2010.05.006 and for the 2013 short version (DOI 10.1080/0144929x.2012.694910).

## sonderegger2010influence

Sonderegger, A., & Sauer, J. (2010). The influence of design aesthetics in usability testing: Effects on user performance and perceived usability. Applied Ergonomics, 41(3), 403-410.

### Core claims

Two functionally identical simulations of a mobile phone, one visually appealing and one not, were tested with 60 adolescents. Participants who used the appealing phone rated it more usable and completed tasks faster, with fewer clicks and fewer errors, than those who used the unappealing one. The paper argues that product aesthetics can bias the outcomes of usability tests (both subjective ratings and performance), which matters because usability tests are supposed to measure functional quality. It also discusses what the use of adolescents means for ergonomic research.

### Specifics

Sixty adolescents (14 to 17 years) completed typical mobile phone tasks on a computer simulation. The two prototypes differed only in visual design. Manipulation check: the appealing prototype was rated more attractive (mean 5.3 against 3.15 on a 7-point scale; F = 39.8, p < .001). Perceived usability on a one-item scale was 6.14 for the appealing prototype against 5.32 for the unappealing one (F(1,57) = 9.8, p < .01), and the same pattern appeared on all subscales of an adapted Post-Study System Usability Questionnaire. Perceived usability did not change from before to after use (F < 1). Performance measures also differed: task completion time was 147.7 s (SD 58.0) with the appealing prototype and 198.5 s (SD 83.6) with the unappealing one (F(1,57) = 8.9, p < .01); the interaction efficiency index was 59 percent against 46 percent; and errors per trial were 2.0 against 4.8 (F = 12.0, p < .001). Female participants made more errors than male ones, with no gender effect on the other measures. The authors discuss the possibility that appealing products could raise performance through positive affect, or lengthen completion times through a prolongation of enjoyable use; a web search summary describes a related 2011 paper by the same authors as reporting longer completion times with the more attractive product, so the direction of performance effects is not settled.

### Replication and criticism

The result supports the aesthetics-usability effect in a performance experiment, in contrast to Tuch et al. (2012), who found no effect of aesthetics on perceived usability with an adult sample and a stronger usability manipulation. The key difference may be that here the appealing and unappealing prototypes differed only in visual appearance with no real usability gap, while Tuch et al. used a large usability manipulation, a boundary condition Tuch et al. discuss. The 2011 related study by Sauer and Sonderegger reported longer completion times for the more attractive product (as noted in a search summary I could not verify in full). The sample is adolescents in a lab with a simulated phone, so generalization to adult learners in a web app is not shown. The authors note that effects might be stronger for adolescents, who attach more importance to appearance, and recommend comparing adolescents and adults.

### Implications for LTF

If LTF runs usability tests of designs that differ in polish, the polished one may get higher ratings and faster times even if the interaction design is identical. So test variants with equal visual finish, or control for it, and use task measures in addition to ratings. The result also supports giving challenge briefings and fly-mode controls a refined, consistent look because it may help speed and error rates in real use, but this is an inference from one phone simulation. For a beginner audience with little confidence, an attractive interface may reduce perceived difficulty and so help motivation; track whether that persists once content difficulty rises.

Confirmed this session: full text read (sonar.ch/documents/302271/files/Sonderegger_Sauer2010.pdf, saved PDF); PubMed abstract (PMID 19892317, via NCBI API); Crossref record for DOI 10.1016/j.apergo.2009.09.002 and the related 2011 paper's record (DOI 10.1080/0144929x.2010.503352).

## song2008hard

Song, H., & Schwarz, N. (2008). If it's hard to read, it's hard to do: Processing fluency affects effort prediction and motivation. Psychological Science, 19(10), 986-988.

### Core claims

People often judge how much effort a new activity will take from how hard its instructions feel to process. In this short report, the same exercise instructions or recipe, printed in a hard-to-read font, led readers to predict that the task would take longer and be more effortful, and made them less willing to take it up. The authors interpret this as a misattribution of fluency: the felt difficulty of reading is read as difficulty of doing.

### Specifics

The PubMed record confirms the citation (Psychological Science 2008, 19(10), 986-988) but has no abstract. The details come from the same authors' review in The Psychologist ("If it's easy to read, it's easy to do, pretty, good, and true", February 2010, fetched as a PDF), which describes the study. Identical exercise instructions were shown in an easy-to-read font (Arial) or a difficult one; readers assumed the exercise would take 8.2 minutes in the easy font and 15.1 minutes in the difficult font (citing Song and Schwarz, 2008b), thought it would flow naturally when the font was easy but feared it would drag in the hard font, and were more willing to include it in their daily routine in the easy font. A second study used a recipe for a Japanese lunch roll: in the elegant but difficult Mistral font people assumed it would need more time and more skill than in Arial. The review notes the font could be useful for restaurants that want to signal skilled preparation but discourages home cooks. The review also reports that when the experimenter pointed out that the text might be difficult to read because of the font, decision deferral in the difficult-font condition dropped from 41 to 16 percent, wiping out the difference between the two fonts, which the authors take as evidence of misattribution rather than a direct effect of the font. Note that these numbers come from the authors' review, not from the 2008 paper itself, and that web search material described the second font and dish inconsistently across sources, so I treat those details as approximate.

### Replication and criticism

The 2008 paper is a very short report (three pages, per the page range), and the fluency literature has had real replication failures: Meyer et al. (2015) pooled the original disfluent-font math experiment with 16 replication attempts and found no effect on problem solving, and a web search result described a later study of a newer disfluent font that found no improvement in recall (journals.sagepub.com/doi/full/10.1177/21582440211056624, not read in full), so effects of disfluent type are inconsistent. That failure concerns a different claim (that difficulty improves reasoning), not this effort-prediction effect, which I found no replication of in my searches. Treat the result as plausible and consistent with the wider misattribution account (Reber et al., 2004), but not as established at the level of a well-replicated effect.

### Implications for LTF

The direction of the implication is safe even if the exact size is uncertain: avoid making ordinary instructions look hard. Checklists, procedure steps and challenge briefings should use plain, high-legibility type so that learners do not infer that the procedure is more difficult than it is. A beginner deciding whether to start a lesson or a flight challenge may judge it from the look of its first screen. Do not use stylized fonts for steps. Do not take this as a reason to hide real difficulty: it argues against fake difficulty, not for hiding real difficulty.

Confirmed this session: Crossref record and PubMed record for DOI 10.1111/j.1467-9280.2008.02189.x (PMID 19000208, no abstract); fetched PDF of Song and Schwarz's review in The Psychologist (dornsife.usc.edu/norbert-schwarz/wp-content/uploads/sites/231/2023/12/10_TP_Song__Schwarz_Easy.pdf); PubMed abstract and Crossref record for Meyer et al. (2015), DOI 10.1037/xge0000049. I did not read the 2008 paper itself.
