# Lane 27: Accessibility standards and research

Notes for the Learn to Fly Design Knowledge Base. Each section covers one source and ends with what was actually confirmed in this session.

## w3c2023wcag

W3C, Web Content Accessibility Guidelines (WCAG) 2.2. W3C Recommendation of 5 October 2023; the page read this session is the 12 December 2024 version, which the W3C describes as minor editorial updates. Editors: Campbell, Adams, Bradley Montgomery, Cooper, Kirkpatrick.

### Core claims

WCAG 2.2 is the international technical standard for making web content usable by people with disabilities. It organizes requirements under four principles (content must be Perceivable, Operable, Understandable and Robust), 13 guidelines, and testable success criteria (SC), each at level A (lowest), AA or AAA (highest). It extends WCAG 2.1 (June 2018). The central claim is that accessibility can be specified as pass/fail criteria that authors, testers and regulators can apply to the same page. The W3C says the December 2024 version is expected to become ISO/IEC 40500:2026.

### Specifics

Nine criteria are new in 2.2: 2.4.11 Focus Not Obscured (Minimum, AA), 2.4.12 Focus Not Obscured (Enhanced, AAA), 2.4.13 Focus Appearance (AAA), 2.5.7 Dragging Movements (AA), 2.5.8 Target Size (Minimum, AA), 3.2.6 Consistent Help (A), 3.3.7 Redundant Entry (A), 3.3.8 Accessible Authentication (Minimum, AA) and 3.3.9 Accessible Authentication (Enhanced, AAA). Criterion 4.1.1 Parsing was removed. Thresholds confirmed from the W3C Understanding pages:

- 1.4.3 Contrast (Minimum, AA): text needs at least 4.5:1; large-scale text (18 point, or 14 point bold) at least 3:1.
- 1.4.11 Non-text Contrast (AA): visual information needed to identify a control, its states (including focus indicators) and graphical objects needed to understand content needs at least 3:1 against adjacent colors. The threshold is strict (2.999:1 fails).
- 1.4.10 Reflow (AA): no two-dimensional scrolling at a width equivalent to 320 CSS pixels (vertical scrolling content) or a height of 256 CSS pixels (horizontal). Maps, diagrams, video, games and data tables are excepted.
- 2.2.2 Pause, Stop, Hide (A): content that moves automatically, lasts more than five seconds and sits beside other content needs a pause, stop or hide control; auto-updating content has no five-second exception.
- 2.4.11 (AA): a focused component must not be entirely hidden by author-created content; sticky headers, footers and cookie banners are the named hazards.
- 2.5.8 (AA): pointer targets at least 24 by 24 CSS pixels unless spacing (a 24-pixel circle on each undersized target must not touch another target), an equivalent control, inline text, user agent, or essential presentation applies.
- 2.5.7 (AA): anything operated by dragging must also work with a single pointer without dragging, unless essential.
- 3.3.8 (AA): no cognitive function test (remembering a password, solving a puzzle) in authentication unless an alternative, a mechanism (password managers, paste), object recognition or personal content applies.
- 1.2.2 Captions (Prerecorded, A): captions include speaker identification and meaningful non-speech sound.

### Replication and criticism

WCAG is a consensus standard, so "replication" means field evidence on whether conformance helps users. Power et al. (2012, in this lane) had 32 blind users test 16 sites and found only 50.4% of the 1,383 problems were covered by any WCAG 2.0 criterion. Petrie and Kheir (2007, in this lane) found guidelines' priority ratings did not match participants' severity ratings. The WebAIM Million shows 95.9% of home pages with a detected WCAG 2 failure in February 2026. Critics add that a page can pass criteria and remain hard to use, and that cognitive and learning disabilities are less well covered, which is why the W3C publishes supplementary guidance (COGA, in this lane).

### Implications for LTF

Treat WCAG 2.2 AA as the floor and write the thresholds into design tokens and the review checklist: text at 4.5:1 or better in both themes; instrument outlines, tick marks, slider thumbs and focus rings at 3:1 or better; every button, chip and stepper at least 24 by 24 CSS pixels (larger in fly mode, where the learner's hands may be on sim controls). Every draggable instrument needs a click, tap or keyboard alternative. Sticky headers and the fly-mode toolbar must not hide the focused element. Animated demos over five seconds need a visible pause control. Sim video needs captions with non-speech cues. Login must allow password managers and paste. Lesson prose must reflow at 320 CSS pixels; use the two-dimensional exception only for diagrams.

Confirmed this session: fetched https://www.w3.org/TR/WCAG22/ (first 100,000 characters) and the Understanding pages for target-size-minimum, focus-not-obscured-minimum, accessible-authentication-minimum, dragging-movements, non-text-contrast, reflow, pause-stop-hide and captions-prerecorded under https://www.w3.org/WAI/WCAG22/Understanding/; web search of W3C news pages for the 5 October 2023 and 12 December 2024 dates and ISO status (https://www.w3.org/WAI/news/2024-12-12/wcag2updates/).

## webaim2026million

WebAIM, The WebAIM Million: An accessibility analysis of the top 1,000,000 home pages (2026 report, eighth annual; February 2026 scan). Web Accessibility In Mind, Utah State University.

### Core claims

The WebAIM Million is a yearly automated audit of the home pages of the top one million sites. Its central claim is that, despite a decade of standards, tooling and law, the web is overwhelmingly not conformant even on the narrow slice of problems that machines can detect. In the 2026 report, 95.9% of home pages had at least one detected WCAG 2 failure, up from 94.8% in 2025, and the average page had about 56.1 detectable errors, up from 51. The report also argues that the same six failure types account for nearly all errors year after year, so a small set of fixes would remove most of the detectable problems. A second claim concerns ARIA: pages that use ARIA have more detectable errors than pages that do not, which the authors explicitly describe as a correlation that may reflect page complexity, not proof that ARIA causes errors.

### Specifics

Method: the scan uses the WAVE stand-alone API on the rendered DOM (after scripts and styles run), applied to the top 1,000,000 home pages drawn from the Tranco ranking. Sites with no home page, errors, fewer than 10 HTML elements or more than 5,000 same-domain links were excluded. 

Six most common failure types in 2026, as a share of home pages: low contrast text 83.9%; missing alternative text on images 53.1%; missing form input labels 51%; empty links 46.3%; empty buttons 30.6%; missing document language 13.5%. Prior-year values: low contrast 79.1%, missing labels 48.2%, missing alt text 55.5%.

ARIA: 82.7% of pages used ARIA in 2026 (79.4% the year before). Pages with ARIA averaged 59.1 errors versus 42 for pages without. Home pages averaged 1,437 elements, 14.3% more than 1,257 a year earlier,.

Limitations stated by the authors: automated tools cannot detect every conformance failure, and the report says that absence of detected errors does not indicate a page is accessible or conformant. An earlier edition's page (February 2019 data) says only about 25% of possible conformance failures are detectable by automated tools, and it recorded 97.8% of pages with failures, 59.6 average errors, low contrast at 85.3%, missing alt text at 68%, and ARIA on 60.1% of pages with 26.7 more errors on those pages than on pages without. Comparing the editions: the share of failing pages fell about 1.9 percentage points between 2019 and 2026, missing alt text and language declarations improved, and ARIA use rose from 60.1% to 82.7% of pages.

### Replication and criticism

This is an observational census, not an experiment, and it has been repeated annually with the same tool, which makes trends credible but also means any change in WAVE rules affects comparisons. Critics of automated scans note that the numbers undercount real problems (the 2019 page puts automated detectability near a quarter of failures), say nothing about whether an error blocks a user, and cover only home pages. The ARIA finding is frequently misquoted as "ARIA makes pages worse"; the authors caution against that reading, and the paired finding that pages with ARIA are larger and more complex supports a confound explanation. Power et al. (2012) and Petrie and Kheir (2007), also in this lane, show that user-observed problems extend well beyond what any scan finds, so the Million should be read as a floor on the problem.

### Implications for LTF

The six failure types are a ready-made automated test list for LTF in continuous integration: contrast of text and chart labels in both themes, alternative text or text equivalents for every instrument image, programmatic labels on every input and slider, no empty links or buttons (icon-only fly-mode controls need accessible names), and a language attribute on the document. Because low contrast is the single most common failure, set theme tokens against contrast targets once, in the token file, and test every pairing in light and dark. The ARIA finding supports a "native element first" rule for LTF widgets: use real buttons, inputs and headings and add ARIA only where native HTML cannot express the role. Run an automated scan (axe or WAVE) on every route in the end-to-end tests, but never treat a clean scan as proof; pair it with the keyboard and screen reader walk-throughs described in the other notes.

Confirmed this session: fetched https://webaim.org/projects/million/ (2026 report figures above) and https://webaim.org/projects/million/2019 (2019 figures above).

## webaim2026screen

WebAIM, Screen Reader User Survey #11 (July to August 2026). Web Accessibility In Mind, Utah State University. Results page read this session; survey #10 (December 2023 to January 2024) figures are used for comparison.

### Core claims

The survey is a long-running self-selected questionnaire of screen reader users (the first was in January 2009) that reports which assistive technology, browsers and navigation strategies people actually use and how they rate web accessibility. Its core messages in the 2026 edition: JAWS has regained ground as the primary desktop screen reader, mobile screen reader use is near universal among respondents, heading navigation remains the dominant way to find information on a long page, and respondents overwhelmingly say better websites would help more than better assistive technology. The authors state the sample is not controlled and may not represent all screen reader users.

### Specifics

Sample: 1,780 valid responses in survey #11, against 1,539 in survey #10. Primary desktop or laptop screen reader in #11: JAWS 55.0%, NVDA 32.9%, VoiceOver 6.5%, all others combined 5.5% (12.2% in 2024). In #10 the figures were JAWS 40.5%, NVDA 37.7%, VoiceOver 9.7%. Commonly used in #11: JAWS 69.2%, NVDA 59.3%, VoiceOver 42.0%, Narrator 36.1%. Primary browser in #11: Chrome 52.3%, Edge 23.6%, Firefox 15.9%, Safari 4.8%. Top pairings: JAWS with Chrome 31.2%, NVDA with Chrome 17.3%. Windows was the primary desktop OS for 90.7%.

Mobile: 91.8% use a screen reader on a mobile device; iOS is primary for 73.3% and Android 24.0%; VoiceOver is the most used mobile screen reader (72.2%) followed by TalkBack (29.5%). About 42.6% mainly use desktop or laptop, 49.0% use both about equally and 8.3% mainly use mobile or tablet.

Navigation: 67.8% navigate by headings first when searching a lengthy page (71.6% in #10); 88.3% find heading levels very or somewhat useful; 28.3% use landmarks or regions often or whenever available (31.8% in #10) and only 3.4% use landmarks first; 37.7% use skip links always or often (31.2% in 2021).

Perceived progress in #11: 32.2% say web content became more accessible in the past year, 44.9% no change, 22.9% less accessible (#10: 34.6%, 46.8%, 18.6%). In #10 CAPTCHA was the most problematic item by a notable margin, with lack of keyboard accessibility fifth. In #11, 85.6% said PDFs are very or somewhat likely to pose significant accessibility issues, versus 31.1% for Word documents. A large majority, 83.9%, say more accessible websites would have a bigger impact than better assistive technology. AI use: 60.1% use AI to generate image descriptions or alternative text, 49.7% for detailed descriptions of complex images, 40.6% for guidance on online tasks, 37.1% for page or document summaries; only 8.2% reported none of these uses.

### Replication and criticism

Because it has run eleven times, trends are informative, but the authors state the sample is uncontrolled, so respondents may skew toward people who are engaged enough to answer an open survey about accessibility; I did not confirm the recruitment channels or the respondents' countries. The figures are self-reported habits, not observed behavior, and are not population statistics for blind people. It also does not include people with cognitive, motor or hearing disabilities, so it cannot guide design for those groups. Findings agree in direction with observational studies such as Lazar et al. (2007) and Power et al. (2012), also in this lane, that structural markup and labels are what screen reader users depend on.

### Implications for LTF

Test on JAWS with Chrome and NVDA with Chrome first, then VoiceOver on iOS, because the survey shows those pairings dominate; one pass with Edge covers the next largest browser. Headings are the primary navigation strategy, so every LTF lesson needs a real, descending heading outline (one h1, h2 per lesson section, no skipped levels), and headings must describe content rather than decorate it. Landmarks are used less but cost little: main, nav and a labelled region for the fly-mode panel. Provide a skip link. Since users also reach for AI to describe complex images, LTF should not outsource this: every instrument widget needs authored text alternatives that state the reading (for example the value the gauge shows and what it means for the lesson), and diagrams need a long description. Avoid CAPTCHA entirely on sign-in and sign-up. Mobile screen reader use is high, so touch layouts must also work with VoiceOver and TalkBack gestures.

Confirmed this session: fetched https://webaim.org/projects/screenreadersurvey11/ and https://webaim.org/projects/screenreadersurvey10/ (all figures above).

## petrie2007relationship

Petrie, H., and Kheir, O. (2007). The relationship between accessibility and usability of websites. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2007), San Jose, pp. 397 to 406. DOI 10.1145/1240624.1240688.

### Core claims

Petrie and Kheir ask an empirical question that most accessibility advice skips: are accessibility and usability the same thing, and do published guidelines rank problems in the order users experience them? Their abstract notes that usability is precisely defined while accessibility has several competing approaches, and that little empirical data exists on how problems affect disabled and non-disabled users or on whether the importance ratings in guidelines are accurate. Their answer is that the two groups meet real problems that only partly overlap, that blind users experience some problems as more severe than sighted users, and that neither participants nor researchers agreed with the priority ratings the guidelines assign.

### Specifics

Participants were 6 blind users and 6 sighted users, who evaluated two websites (the White Rose record does not name them and does not describe tasks or rating procedures; the full text was not available to read this session). The problems met by the two groups formed two intersecting sets, with approximately 15% overlap. On one of the two sites, blind participants rated problems as significantly more severe than sighted participants did. Participants agreed highly with each other on how severe a problem was, and participants agreed with the researchers. By contrast, neither participants nor researchers agreed significantly with the importance or priority ratings that accessibility and usability guidelines give to the same problems. A related thesis by the second author, described on a separate page, studied mobile phone company sites and concluded that the guidelines' severity ratings are not valid; that page is a companion account, not the CHI paper itself.

Key definitions the paper works with: accessibility problems (barriers that matter to disabled users), usability problems (barriers that matter to all users) and the claim that these are two intersecting sets, not nested ones. Severity is a participant or expert rating, set against the priority levels written into guidelines (for example the priority tiers of the WCAG versions of the time).

### Replication and criticism

The study is small (twelve participants, two sites), and its abstract leaves out the procedure, so it should be read as an influential early empirical signal rather than a robust estimate; the 15% overlap figure in particular should not be treated as a population constant. Its direction was extended by larger work from the same research group: Power et al. (2012, also in this lane) used 32 blind users on 16 sites and again found that guidelines missed a large share of user problems. Critics of this line of work, such as the reviewers of Power et al. on the W3C wiki, argue that several of the problems found are plain usability issues that would affect everyone, which supports Petrie and Kheir's own framing but also makes the boundary of "accessibility" a matter of definition. Evidence strength: a small mixed-method user study with expert comparison; consistent with later, larger studies but not a replication of its specific numbers.

### Implications for LTF

LTF should not assume that passing WCAG means the lessons work for blind or low vision learners, or that fixing the highest-priority guideline failures first fixes the most severe user problems. Plan two parallel tracks: a conformance checklist (WCAG 2.2 AA and automated scans) and task-based walkthroughs with disabled learners. Because problem sets overlap only partly, run the walkthroughs with at least one screen reader user and one keyboard-only or switch user, not just sighted testers wearing a simulated impairment. Severity should come from observed task failure: a keyboard trap in a quiz that blocks completion outranks a cosmetic contrast issue even if the checklist rates them the other way round. When a learner cannot finish a challenge briefing, an in-sim checklist, or a progress dashboard, log it as severe regardless of which guideline it maps to. Treat sighted and non-sighted learners as having different severity profiles when triaging, for example reading order and label clarity weigh more for screen reader users.

Confirmed this session: abstract and details from https://eprints.whiterose.ac.uk/id/eprint/7394/ (White Rose record: participants, overlap, severity findings, DOI, pages); Crossref query returned DOI 10.1145/1240624.1240688 with matching authors, year and pages; web search summary of the abstract at https://researchr.org/publication/PetrieK07.

## power2012guidelines

Power, C., Freire, A., Petrie, H., and Swallow, D. (2012). Guidelines are only half of the story: accessibility problems encountered by blind users on the web. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2012), pp. 433 to 442. DOI 10.1145/2207676.2207736.

### Core claims

The paper tests how well WCAG 2.0 describes what actually stops blind people from using websites. Its main finding is that only about half of the user problems observed were covered by any WCAG 2.0 success criterion, and that even where a covered problem existed, sites that had implemented the recommended techniques still produced the problem for users. The authors conclude that developers are not widely implementing WCAG 2.0 and that implementing it does not clearly reduce problems for people with disabilities, and they propose moving away from a problem-by-problem checklist paradigm toward broader design principles derived from data on how disabled people use the web.

### Specifics

Design: task-based user evaluations with 32 blind users across 16 websites, producing 1,383 instances of user problems (figures from the abstract as summarized by search results). The authors then coded each problem against the WCAG 2.0 success criteria. They report that 50.4% of the problems were covered by success criteria, and that for the covered problems, 16.7% of the sites had implemented WCAG 2.0 recommended techniques but the techniques did not solve the problem. The third-party review on the W3C WCAG wiki lists six issue types it reads as uncovered by WCAG 2.0, and maps them to ISO 9241 characteristics: content found where users do not expect it (efficiency); content not found where users expect it (effectiveness); pages that load too slowly (effectiveness); no alternative to document formats such as PDF (effectiveness); an overly complex information architecture (efficiency); and broken links (error tolerance). The same review singles out Success Criterion 2.4.4 Link Purpose, noting that WCAG 1.0 checkpoint 13.1 asked for link text that makes sense out of context and WCAG 2.0 relaxed it.

### Replication and criticism

A related doctoral thesis by the second author drew on the same data and reported that comparisons between observed user problems and WCAG 1.0 and 2.0 showed no significant relationship between user-based accessibility measures and most measures based on technical guidelines (search result summary). On the critical side, a W3C review by Laura Carlson argues that the study presents usability issues as accessibility issues, that a site can conform to WCAG 2.0 and still be hard to use, and that the six issues would hurt all users. It cites Detlev Fischer's view that most of the data and conclusions should be discounted except the link identification finding, though Fischer also found the link-purpose conclusion valid. The evidence is a single large observational user study with expert coding; the 50.4% figure depends on coding choices about what counts as covered, so treat it as an order of magnitude, not a constant.

### Implications for LTF

Plan for the half of the problems the checklist will not catch. For a flight-training app the likely uncovered ones are the ones the review lists: content in unexpected places, over-complex navigation, slow pages, PDF-only material and broken links. So give every lesson a flat, predictable structure (objective, brief, explanation, widget, quiz, summary in the same order), keep the navigation shallow, avoid shipping checklists only as PDFs (provide HTML, which also works in fly mode), keep fly-mode pages light so they load fast beside the sim, and run a link checker in CI. Write link text that is meaningful out of context ("Read the lesson on climbing turns", never "click here"), because link purpose was the one criterion on which the critics and the authors agreed. Budget real sessions with blind users for the first interactive widgets, since that is where guidelines say least.

Confirmed this session: Crossref query returned DOI 10.1145/2207676.2207736 (authors, 2012, CHI proceedings, pages 433 to 442); web search summaries of the abstract and critiques (https://researchr.org/publication/PowerFPS12; https://etheses.whiterose.ac.uk/3873/); fetched reviews at https://www.w3.org/WAI/GL/wiki/Review:_Guidelines_are_only_half_of_the_story and https://www.d.umn.edu/~lcarlson/wcagwg/reviews/guidelines_only_half_the_story.html. The ACM page returned 403 so the full text was not read.

## lazar2007frustrates

Lazar, J., Allen, A., Kleinman, J., and Malarkey, C. (2007). What frustrates screen reader users on the web: a study of 100 blind users. International Journal of Human-Computer Interaction, 22(3), 247 to 269. DOI 10.1080/10447310709336964.

### Core claims

Earlier research had documented the computer frustrations of student and workplace users, but the frustrations of blind people on the web had not been examined. This study asks what actually frustrates screen reader users and how much it costs them. Its answer is that a small set of recurring, mostly fixable design faults dominate: confusing screen reader feedback from page layout, conflicts between the screen reader and the web application, unlabeled or badly designed forms, images without text alternatives, and screen reader crashes. The authors argue that most of these are quick fixes and should be treated as a to-do list by web designers, while the harder ones (crashes, conflicts) must be fixed by screen reader developers.

### Specifics

Method: 100 blind participants kept diaries while browsing the web with screen readers, asked to browse for two hours. They recorded each problem, its effect on their mood and its effect on their ability to get work done in a timely manner (UBC course-wiki summary of the paper). Frustration categories reported in secondary accounts: page layout that produces confusing screen reader feedback; conflicts between the screen reader and the application; poorly designed or unlabeled forms; visual items with no alternative text; and screen reader crashes. A literature review that cites the paper adds misleading links and inaccessible PDFs to the list. Several secondary accounts report that, on average, participants lost 30.4% of their time to frustrating situations; I could not read the full text (the publisher page returned 403), so treat that number as reported by secondary sources, not confirmed against the paper. The same accounts say participants usually kept trying to solve a problem instead of giving up or rebooting the computer. The abstract says implications for web developers, screen reader developers and screen reader users are discussed.

The recommendations summarized from the paper: use the causes of frustration as a design to-do list, involve users with visual disabilities in the design process to uncover such problems, and have designers take the lead in building usable websites for people with visual disabilities.

### Replication and criticism

This is a self-report diary study, so it measures what users noticed and recorded, not what an observer would code, and the time-loss estimate is a participant estimate. It is also a convenience sample of people able to keep a diary, probably more experienced than average. Its findings agree in kind with later observational work: Power et al. (2012, also in this lane) used task-based observation and again found missing labels, link problems and structure problems, though they reported a larger set of usability-type issues. Missing alternative text, missing form labels and similar faults still top the WebAIM Million automated counts nearly two decades later (also in this lane), which suggests the frustrations were not solved by the guidance that followed. Evidence strength: a large (for this field) user-reported study, descriptive, with no comparison group. The screen reader landscape has changed since 2007 (mobile screen reader use is now near universal in WebAIM Survey #11), so crash and conflict problems may not carry over, but form-label and alt-text problems still top the WebAIM counts.

### Implications for LTF

Forms are where LTF will hurt screen reader users most: the sign-in form, settings, quiz answer inputs, and any numeric entry in a widget (for example typing an altimeter setting). Every input needs a programmatic label (a visible label tied with for and id), error messages tied to the field, and no placeholder-only labels. Every instrument image and diagram needs a text alternative that gives the reading and its meaning; decorative flourishes need empty alt text so they are skipped. Keep page layout simple and linear so a screen reader reads lesson content in the intended order, and avoid layouts where the reading order differs from the visual order, especially in a fly-mode dashboard of gauges. Test widgets against real screen reader and browser pairings, because conflicts between assistive technology and custom scripts were a leading frustration; where a custom widget conflicts with the screen reader, fall back to native controls. Do not ship checklists or briefings as PDF only.

Confirmed this session: Crossref query returned DOI 10.1080/10447310709336964 with matching authors, journal, volume 22, issue 3, pages 247 to 269, year 2007; the UBC course wiki summary at https://wiki.ubc.ca/Course:LIBR559A/Lazar,_J,_Allen_A,_Kleinman,_J.,_%26_Malarkey,_C._(2007) (method, categories, recommendations); web search results summarizing the abstract and the 30.4% figure (secondary; the Taylor and Francis page returned 403).

## newell2011user

Newell, A. F., Gregor, P., Morgan, M., Pullin, G., and Macaulay, C. (2011). User-sensitive inclusive design. Universal Access in the Information Society, 10(3), 235 to 243. DOI 10.1007/s10209-010-0203-y. Earlier statement: Newell and Gregor (2000), "User sensitive inclusive design: in search of a new paradigm", Proceedings of the 2000 Conference on Universal Usability.

### Core claims

User-sensitive inclusive design (USID) argues that design for older and disabled people cannot be solved by applying standards and guidelines alone. According to the abstract (as recorded in the Dundee repository), user-centred and participatory design methods are harder to apply when users are older or disabled, and universal design, inclusive design and design for all encourage designers to include these groups but often lead them to build a standard prototype first and adapt it afterward. That wastes effort and can produce designs that meet accessibility criteria yet are unusable in practice. The paper reviews the authors' alternative: designers should develop real empathy with their user groups, and the methods recommended for doing so include ethnography and techniques from professional theatre, used both for requirements gathering and for building empathy with marginalized users.

### Specifics

The tension at the heart of the paper is between three strategies: designing for a "standard" user and adapting later (the pattern the abstract criticizes), designing one thing for everyone (universal design), and designing for the full range of users with explicit attention to their specific, sometimes extreme, needs (user-sensitive inclusive design). A secondary commentary adds that the authors suggest theatre professionals can act out open-ended scenarios for an audience of designers as a way around the weaknesses of invented personas. The paper is peer-reviewed, appears in Universal Access in the Information Society, vol. 10 no. 3, pp. 235 to 243 (Dundee record: August 2011; the DOI record from Crossref gives the online date 11 July 2010), and its keywords include user-centred design, inclusive design, universal design, older and disabled people, interface and theatre. The Dundee page shows 182 Scopus citations. I could not read the full text, so the paper's own case studies and any quantitative results are not described here.

### Replication and criticism

USID is a position and method proposal, backed by the authors' case work with older and disabled users, not a controlled experiment. Its argument is partly a critique of universal design (see Mace et al. in this lane), claiming that a single design for everyone can fail the people with the most severe needs; defenders of universal design reply that the principles already ask for flexibility and equitable use. The same worry underlies Holmes (Mismatch, also in this lane), and later Wobbrock and colleagues' ability-based design. Evidence strength: expert argument supported by practice and qualitative method. The empirical test of the claim (do designs developed through empathy methods outperform guideline-led ones?) is, as far as I confirmed, not settled in this record. A practical objection is cost: ethnography and theatre sessions with real users are slower than running a checker, which is why many teams default to guidelines.

### Implications for LTF

LTF's audience is a complete beginner in a cockpit context, and some will be older learners, some with low vision, hearing loss or motor difficulties, and some using sim peripherals such as yokes and keyboards in unusual ways. Do not stop at the WCAG checklist: recruit a handful of such learners early, watch them use a prototype lesson with the sim running, and write what you observe into design notes. Use scenario walkthroughs that include the real setting (one hand on a yoke, screen viewed at arm's length, glare, a second monitor) instead of abstract personas. Design the first prototype of each widget with the extreme case in mind (a screen reader user reading a gauge, a keyboard-only user adjusting a slider) so adaptation is not an afterthought, and keep such cases in the acceptance criteria for every widget.

Confirmed this session: Crossref query (DOI 10.1007/s10209-010-0203-y, authors Newell, Gregor, Morgan, Pullin, volume 10, issue 3, pages 235 to 243; DOI 10.1145/355460.355470 for the 2000 paper); Dundee repository page https://discovery.dundee.ac.uk/en/publications/user-sensitive-inclusive-design/ (abstract paraphrase, date, citation count); web search summaries (the MIT PDF copy could not be read as text).

## connell1997principles

Connell, B. R., Jones, M., Mace, R., Mueller, J., Mullick, A., Ostroff, E., Sanford, J., Steinfeld, E., Story, M., and Vanderheiden, G. (1997). The Principles of Universal Design, Version 2.0 (1 April 1997). Raleigh, NC: The Center for Universal Design, NC State University.

### Core claims

A working group of architects, product designers, engineers and environmental design researchers (per search results) compiled seven principles to evaluate existing designs, guide the design process and educate designers and consumers. The central claim is that products, environments and communications can be usable by the widest range of people without adaptation or specialized design, and that this can be broken into seven checkable principles, each with guidelines (the Center's reprint rules refer to seven principles and 29 guidelines, per search results). The principles address usability only, not other design factors such as cost or culture.

### Specifics

The seven principles, with their one-line definitions and guidelines (fetched from the NC State Center for Universal Design page):

1. Equitable Use: useful and marketable to people with diverse abilities. Provide the same means of use for everyone where possible, equivalent where not; avoid segregating or stigmatizing any users; make privacy, security and safety equally available; make the design appealing to all.
2. Flexibility in Use: accommodates a wide range of individual preferences and abilities. Offer a choice of methods; support right- and left-handed use; help users achieve accuracy and precision; allow users to set their own pace.
3. Simple and Intuitive Use: easy to understand regardless of experience, knowledge, language skills or concentration level. Remove unnecessary complexity; align with expectations and intuition; accommodate a wide range of literacy and language skills; arrange information by importance; give effective prompts and feedback during and after tasks.
4. Perceptible Information: communicates necessary information regardless of ambient conditions or sensory abilities. Present essential information in multiple modes (pictorial, verbal, tactile); provide adequate contrast; maximize legibility; differentiate elements in ways that can be described; be compatible with devices used by people with sensory limitations.
5. Tolerance for Error: minimizes hazards and adverse consequences of accidental or unintended actions. Arrange elements so the most used are most accessible and hazards are eliminated, isolated or shielded; provide warnings; provide fail-safe features; discourage unconscious actions in tasks that require vigilance.
6. Low Physical Effort: usable efficiently and comfortably with minimal fatigue. Neutral body position; reasonable operating forces; minimize repetitive actions; minimize sustained physical effort.
7. Size and Space for Approach and Use: appropriate size and space for approach, reach, manipulation and use regardless of body size, posture or mobility. Clear line of sight; comfortable reach; accommodate variations in hand and grip size; adequate space for assistive devices or personal assistance.

One NC State page says the Center is currently not active because of funding challenges, though the principles remain widely reproduced.

### Replication and criticism

The principles are expert consensus from the built-environment and product design world, not a tested model, and some guidelines (neutral body position, operating forces) map only loosely to software. A common critique, made in the user-sensitive inclusive design literature (Newell et al. 2011, also in this lane), is that designing one thing for everyone can fail those with the most extreme needs and can lead to bland compromises. Defenders point to principle 2, which already asks for a choice of methods. Standards such as WCAG are the measurable counterpart.

### Implications for LTF

Use the seven principles as a design-review lens that sits above WCAG. Equitable use: the same lesson and challenge content for everyone, with no "accessible version" that is a lesser one. Flexibility: allow keyboard, mouse, touch and (where possible) sim-hardware-adjacent input to operate every widget, let learners set their own pace in lessons and never time a quiz without a way to extend it, and offer text, diagram and (later) audio forms of an explanation. Simple and intuitive: arrange information by importance (the next step first) and give feedback after each action. Perceptible: instrument state must never be conveyed by color alone and should be available as text and as a visual. Tolerance for error: confirm destructive actions such as resetting progress, make quizzes recoverable, and let a learner undo a widget setting. Low effort: minimize repeated clicks in fly mode, where the learner's hands may be on sim controls. Size and space: touch and click targets large enough and spaced, in line with WCAG 2.5.8.

Confirmed this session: fetched https://design.ncsu.edu/research/center-for-universal-design/ (title, date, authors, seven principles and guidelines) and web search summarizing the Center's reprint rules and status. No Crossref or Open Library record applies; the document was verified through the NC State page.

## microsoft2017inclusive

Microsoft Design (2017, as dated by the IxDA listing; the manual's own date was not confirmed). Inclusive: A Microsoft Design Toolkit (manual, activities and videos), and the Inclusive Design site at inclusive.microsoft.design.

### Core claims

Microsoft's inclusive design methodology reframes disability as a mismatch between a person and an experience, not as a personal attribute, and organizes practice around three principles: recognize exclusion, solve for one and extend to many, and learn from diversity. The central argument is that exclusion happens when designers solve problems using their own biases, and that designing for people with permanent disabilities produces results that benefit a broader population because everyone has abilities and limits that vary by context. The toolkit was published under a Creative Commons license so that anyone could download and reuse it, according to the IxDA listing.

### Specifics

Recognize exclusion: the Microsoft Learn training unit traces the shift from the 1980 World Health Organization definition of disability as a personal attribute to the 2001 view that disability is the interaction between features of a person's body and features of the society in which he or she lives. Points of exclusion generate new ideas.

Solve for one, extend to many, and the persona spectrum: exclusion can be permanent, temporary or situational. The manual's table lists touch as one arm (permanent), arm injury (temporary) and new parent (situational). The same unit gives a scale figure, that 26,000 people a year in the United States suffer loss of upper extremities, but that when temporary and situational impairment are included the number is greater than 20 million (figures stated by Microsoft; I did not trace their source). It adds a "persona network" of the family, coworkers and friends who interact with the primary persona. Closed captions are the standard example: made for people who are deaf or hard of hearing, they also help someone watching a webinar in an open office.

Learn from diversity: people are the experts in adapting; the slogan is "nothing about us without us", design with disabled people. The Xbox Adaptive Controller example describes a community concern about stigma if the device looked "medical" or toy-like. The unit warns that simulating impairments with blindfolds and earplugs is misleading and that empathy comes from learning how people adapt.

### Replication and criticism

This is an industry design method, not a validated model; its evidence is case studies from Microsoft products and the IxDA award recognition. The scale figure cited above is a company claim. A 2025 newsletter argues that credit for the methodology is incomplete (it says another designer was omitted from the toolkit's credits); this is one contested account, not established fact. Academic work on persona spectrums is thin, and the "solve for one, extend to many" assertion is a plausible hypothesis (curb cuts and captions are the usual examples) rather than a tested law. It does not guarantee that a solution for one group is optimal for another, a limit the user-sensitive inclusive design literature stresses.

### Implications for LTF

The persona spectrum is a quick way to justify and prioritize access work to a small team. A learner with a permanent low vision condition, one with a temporary eye strain after a long session, and one reading a tablet in bright light in a cockpit-like glare setting share the same need for strong contrast and zoomable text. Use that argument to put captions and transcripts on all sim video, high-contrast themes, keyboard operation, and generous target size in the baseline, not a backlog. Fly mode is a ready situational spectrum: a learner with one hand on a yoke or mouse, attention divided, at arm's length from the screen. Test with disabled learners and not blindfold simulations, and credit the community input in design notes.

Confirmed this session: fetched https://inclusive.microsoft.design/ (three principles), https://learn.microsoft.com/en-us/training/modules/inclusive-design-principles/3-inclusive-design-principles (disability definitions, persona spectrum, figures, Xbox example) and https://ixda.org/video/microsoft-inclusive-toolkit/ (2017 date, contents, CC license); web search results for the manual PDF listing (the PDF exceeded the fetch size limit).

## holmes2018mismatch

Holmes, K. (2018). Mismatch: How Inclusion Shapes Design. Cambridge, MA: MIT Press (Simplicity: Design, Technology, Business, Life series). Open Library work OL20186749W.

### Core claims

Holmes, who led development of Microsoft's inclusive design toolkit, argues that design routinely excludes people through mismatches between a person and the interaction a product demands, and that exclusion is a design outcome that can be designed out. The MIT Press description frames it as: design can lead to exclusion, and inclusive methods can remedy it by designing with rather than for excluded users. Reviewers quote her line that mismatches are the building blocks of exclusion and that designing for inclusion starts with recognizing exclusion. She also argues that inclusion is a business asset and a catalyst for creativity, not charity, because treating it as charity widens the gap between people.

### Specifics

Examples in the publisher and review material: a computer mouse that does not work for left-handed people, and a payment touchscreen that assumes a particular language, eyesight and payment method. The key framework, as described by a reviewer, is the spectrum of permanent, temporary and situational mismatches: a door designed for someone with one arm should also work for someone with a broken arm or someone carrying a baby. Reviews describe the book as under 200 pages, opening with in-group and out-group thinking and following a "Who, What, Why, When, How" structure, with anecdotes, interviews and research in place of a single technical method, and each chapter ending with practical to-dos. The advice reviewers draw out: recognize exclusion first; offer varied ways to participate (a "one size fits one" stance, not one solution for everyone); accept imperfection and keep improving; and design for inclusion early, to avoid costly retrofitting. A section in chapter 4, "We Are All Designers", is a point of review comment.

### Replication and criticism

A trade book, not a study: its authority is craft and case-based. Reviews are mostly favorable. Terence Eden called it "part manifesto, part manual" but "a little short" without much technical detail. One reviewer argues that calling digital inaccessibility a "mismatch" understates its harm and that exclusion from web content is discrimination; another found it repetitive. Jeremy Senko's review worries that the "We Are All Designers" claim could weaken licensing and professional education that protect public safety. The ideas overlap heavily with Microsoft's toolkit (also in this lane) and with the social model of disability, and none of them has controlled evidence that mismatch-based practice improves outcomes.

### Implications for LTF

Adopt "mismatch" as a vocabulary for design reviews: when a learner cannot complete a task, ask what the interaction demanded (fine pointer control, color discrimination, reading speed, memory, two hands) that the learner could not supply, and fix the demand, not the learner. Use permanent, temporary and situational variants in each acceptance review: for a heading-bug slider, a one-handed user, a user with a wrist injury, and a pilot-trainee holding a yoke. Offer more than one way to complete each interaction (drag or type a value, click or key). Design inclusion in at the start of each widget, since retrofitting is costly. And treat inclusion language as part of product copy: avoid "normal user" and "disabled user" as an exceptional category in design docs.

Confirmed this session: Open Library search returned work OL20186749W (Mismatch, Kat Holmes, 2018, MIT Press, ISBNs 0262349620 and 0262349639); web search found the MIT Press description summarized at https://mitpressbookstore.mit.edu/book/9780262539487; reviews fetched at https://timkadlec.com/read/2019-mismatch/, https://shkspr.mobi/blog/2019/12/book-review-mismatch-by-kat-holmes/ and https://spacing.ca/national/2019/06/03/book-review-mismatch-how-inclusion-shapes-design/. The MIT Press page itself returned 403.

## w3c2023aria

W3C (2023). Accessible Rich Internet Applications (WAI-ARIA) 1.2. W3C Recommendation, 6 June 2023. Editors: Diggs, Nurthen, Cooper, MacLeod. Read together with the W3C Note "Using ARIA", which the W3C marked as a discontinued draft on 24 February 2026.

### Core claims

WAI-ARIA is a technical specification that gives authors a vocabulary of roles, states and properties (the aria-* attributes) to describe user interface elements to assistive technology when native HTML cannot. It defines an ontology of roles, how roles inherit from one another and which attributes each role supports. Its core claim, repeated in the companion guidance, is that ARIA supplements native host language semantics and does not replace them: where a host language feature provides equivalent accessibility, it should be used. ARIA changes only what assistive technology is told; it adds no behavior, so any interactive role needs scripted keyboard handling.

### Specifics

Role categories in 1.2: abstract roles (authors must not use them), widget roles (including composite widgets that manage contained widgets), document structure roles, landmark roles, live region roles and window roles. Each role is classed by how it gets its accessible name (author, content, or prohibited); the computation lives in a separate specification. The live region properties include aria-live, aria-relevant, aria-atomic and aria-busy. The Recommendation says version 1.2 adds features to improve interoperability with assistive technologies and a more consistent accessibility model for HTML and SVG; the full change list is in its Appendix B, which I did not read.

The "Using ARIA" Note (editors Faulkner, MacDonald, Montalvo) states four rules, as fetched: (1) use a native HTML element or attribute with the semantics and behavior you need instead of repurposing an element with ARIA, with exceptions where native support is missing, visual design rules the native element out, or HTML lacks the feature; (2) do not change native semantics unless you really have to (wrap a heading in an element with role tab instead of giving the heading the tab role); (3) all interactive ARIA controls must be usable with the keyboard; (4) do not apply role presentation or aria-hidden true to focusable elements, because keyboard users can land on something that is never announced. That Note now carries a W3C "Discontinued Draft" status dated 24 February 2026 and points readers to the Authoring Practices Guide, so treat the rules as widely taught craft guidance whose official home has moved. The APG's read-me page adds that "No ARIA is better than Bad ARIA" in the sense that wrong ARIA misleads screen reader users, that a role is a promise the developer must keep, and that interoperability testing with real assistive technology is essential.

### Replication and criticism

ARIA is a standard, not a finding, and its practical record is mixed. The WebAIM Million (also in this lane) found that 82.7% of home pages used ARIA in 2026 and that pages with ARIA averaged 59.1 detected errors against 42 without, a correlation the report says may reflect page complexity. The APG warns that browser and assistive technology support for ARIA features is uneven, that some features are not supported in any mobile browser, and that some example failures may be bugs in the software. Screen reader users in the WebAIM survey (also in this lane) rely much more on headings than on landmarks (28.3% use landmarks often, against 67.8% navigating by headings first), which tempers claims about how much weight ARIA landmark work carries.

### Implications for LTF

Adopt the first rule as a project rule: buttons are button elements, inputs are inputs, lists are lists, the quiz uses real radio groups and fieldsets, and sliders use input type range unless a custom instrument genuinely needs more. When a custom instrument widget must be built (a rotary altimeter setting knob, a heading bug), define its role, name, value and keyboard behavior against the APG pattern first, and check the accessible name and value announce correctly with a screen reader before shipping. Use live regions sparingly and deliberately: announce quiz feedback and challenge results politely, not every animated needle movement. Never put aria-hidden on a focusable control, which is a risk in fly mode when toolbars are hidden visually; use the hidden attribute or display none so hidden controls leave the tab order. Add automated checks (a linter and an axe run in end-to-end tests) so ARIA misuse fails the build.

Confirmed this session: fetched https://www.w3.org/TR/wai-aria-1.2/ (first 100,000 characters: status, date, editors, role categories, name computation), https://www.w3.org/TR/using-aria/ (four rules, discontinued status) and https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/ (No ARIA is better than Bad ARIA, support caveats).

## w3c2026authoring

W3C WAI ARIA Authoring Practices Task Force. ARIA Authoring Practices Guide (APG), living document (the pages read this session carry a 2026 copyright and a change history back to 2014; no version number is given).

### Core claims

The APG is the W3C's practical companion to the ARIA specification: it shows how to build accessibility semantics and keyboard behavior into common web widgets (patterns), gives cross-cutting practices, and offers example implementations. It argues that the usability of a custom widget depends on matching established desktop-style keyboard conventions and on managing focus deliberately, not just on adding roles. The Task Force states a goal of giving guidance or examples for every ARIA attribute, and publishes assistive technology support tables and a coverage and quality report to track gaps.

### Specifics

Keyboard interface guidance (fetched from the APG practices page): Tab and Shift+Tab move between components, while arrow keys move among the items inside a composite widget such as a radio group, tablist, menu or grid. Only one item in a composite should be in the tab sequence. Two techniques manage that: roving tabindex (one item has tabindex 0 and the others tabindex minus 1; on an arrow key, the old item is set to minus 1, the new one to 0 and focus is called on it) and aria-activedescendant (only the container is focusable and the page updates which child is active, so the author must draw the visual focus indicator and scroll the item into view).

Focus rules: keep a visible focus indicator, preferring browser defaults, and avoid subtle changes and colors that disappear in high-contrast modes. Focus should never fall back to the body; after a dialog closes or an item is deleted, move focus to a logical target such as the triggering button or the next item. Keep focus order predictable: match reading order, finish one section before the next, avoid large backward jumps and avoid setting focus on page load unless one primary function is used immediately. Focus and selection are different: selection is a state (aria-selected true) and must look different from focus; selection may follow focus in single-select widgets except where moving focus triggers slow loads. Avoid positive tabindex values, which override DOM order. Use the native disabled attribute where users can infer a control from neighbors, and aria-disabled true to keep a control focusable where discoverability matters. Keyboard shortcuts must supplement, not replace, standard navigation, and should avoid operating system, assistive technology (for example Caps Lock or Insert combinations) and browser shortcuts, with alternatives provided and documented where conflicts are unavoidable.

### Replication and criticism

The APG is guidance from a standards body, partly drawn from long-standing desktop conventions, and its patterns are tested through the support tables rather than controlled studies. Its own pages say the examples do not work around gaps in browser or assistive technology support and that mobile and touch support is not yet documented. It is a moving target: patterns change as browser behavior changes, so the pattern must be rechecked against the live page. Practitioners often note that following an APG pattern is a starting point and that testing with screen readers still turns up differences between JAWS, NVDA and VoiceOver, consistent with the interoperability warning on its read-me page.

### Implications for LTF

Use the APG as the spec for every interactive widget LTF builds: tabs for lesson sections, an accordion for glossary entries, a dialog for the quiz summary, a slider for any gauge-setting control, a listbox or radio group for multiple-choice questions, a toolbar for fly-mode controls. For the fly-mode toolbar use roving tabindex so Tab moves in and out in one stop. On dialog close return focus to the opener. Preserve the visible focus ring with 3:1 contrast (WCAG 2.2) in both themes. Document every LTF keyboard shortcut and ensure it has a non-shortcut path, because screen reader and browser keys will conflict with single-key shortcuts; consider an option to turn shortcuts off (a WCAG 2.1 criterion, not confirmed in the pages read this session). Treat the APG example pages as a regression test: if an LTF widget behaves differently from the APG example under the same keys, explain why or fix it.

Confirmed this session: fetched https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/ (all guidance above) and https://www.w3.org/WAI/ARIA/apg/about/ (maintainer, scope, 2026 copyright, change history since 2014), plus https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/.

## seemanhorwitz2021making

W3C Cognitive and Learning Disabilities Accessibility Task Force (2021). Making Content Usable for People with Cognitive and Learning Disabilities. W3C Working Group Note, 29 April 2021. Editors: Seeman-Horwitz, Bradley Montgomery, Lee, Ran.

### Core claims

This Note is supplemental guidance beyond WCAG: following it is not required for WCAG conformance. It argues that people with cognitive, learning and neurodivergent conditions face barriers the WCAG success criteria mostly do not address, and it collects design patterns, organized under eight objectives, that reduce those barriers. It also covers a wider audience than diagnosed conditions: people with mental health issues, age-related forgetfulness, temporary stress, limited technical knowledge or limited familiarity with the language or culture benefit as well. The page itself says the document is a draft and does not imply W3C Membership endorsement.

### Specifics

Eight objectives: (1) help users understand what things are and how to use them; (2) help users find what they need; (3) use clear and understandable content; (4) help users avoid mistakes and know how to correct them; (5) help users focus; (6) ensure processes do not rely on memory; (7) provide help and support; (8) support adaptation and personalization. User groups named include intellectual disabilities, specific learning disabilities, dyslexia, dyscalculia, ADHD and autism, and the document includes ten personas (including mild cognitive impairment, dementia, Down syndrome, traumatic brain injury, memory loss, hemiplegia with aphasia, and dyslexia with impaired eye-hand coordination).

Patterns under clear content (section 4.4), as fetched: use common words, explaining jargon within one click, and the document says the most common 1,500 words are what people with severe language impairments are most likely to know; use present tense, active voice and direct address; avoid double negatives and nested clauses; use literal language and explain figures of speech; keep text succinct, with paragraphs of around 50 words or fewer, one topic each, and lists for three or more items; use unambiguous formats for dates and avoid Roman numerals; summarize long documents (headings can serve as the summary for content under 300 words); put each instruction step in its own bullet or number and use if/then tables for conditionals; use white space; keep the foreground unobscured with solid backgrounds and strong contrast behind text; explain implied content; pair numbers with plain concepts such as cold, warm, hot.

Patterns under avoiding mistakes (section 4.5): controls and content do not move unexpectedly; let users go back without losing work; show fees and charges at the start; design forms to prevent mistakes (ask for as little as possible, mark required fields, accept many input formats, auto-correct only when reliable); make form errors easy to undo with a summary before submission. Other listed patterns include make the purpose of the page clear, use a familiar hierarchy and design, provide search, limit interruptions, avoid data loss and timeouts, provide a login that does not rely on memory, and provide human help.

### Replication and criticism

The guidance is built from user research reviews, expert consultation and public comment through a task force, so it is consensus guidance rather than controlled experiments, and several specific numbers (1,500 common words, 50-word paragraphs) are presented as practical rules of thumb; I did not confirm their underlying studies. The WCAG 2.2 Understanding page for Accessible Authentication names people with cognitive disabilities as beneficiaries, but most COGA patterns remain advisory. Critics note that cognitive accessibility is hard to test with automated tools and that some advice (for example dropping metaphors) can conflict with engaging, narrative writing.

### Implications for LTF

LTF's whole premise is teaching complete beginners, which makes cognitive accessibility the highest-value part of this lane. Write lesson prose in present tense, active voice and direct address, define jargon on first use (and link glossary entries), explain every acronym and abbreviation such as IAS or ATIS, avoid double negatives in quiz stems, and keep paragraphs short with one idea each. Put each procedure step in its own numbered item, which doubles as the format for in-sim checklists. Use headings as summaries. Prevent mistakes in quizzes: no unexpected movement, confirm before submitting, allow going back, and never lose progress on a timeout or refresh (autosave). Offer a consistent place for help on each page. Avoid decorative motion and flashing banners that compete for focus. Give numerical readings a plain-language gloss (what this airspeed means for the flaps) beside the dial value, in the spirit of pairing numbers with concepts.

Confirmed this session: fetched https://www.w3.org/TR/coga-usable/ (status, editors, objectives, user groups, patterns in sections 4.4 and 4.5 from the first 200,000 characters).

## horton2013web

Horton, S., and Quesenbery, W. (2014). A Web for Everyone: Designing Accessible User Experiences. Brooklyn, NY: Rosenfeld Media. Open Library work OL16857506W (first printing dated 2013 in catalog records, 2014 in many citations).

### Core claims

Horton and Quesenbery argue that accessibility is a user experience discipline, not a compliance afterthought: start from people and their needs, build accessibility in from the beginning, and favor universal design over accommodation. A review of the book (Larsen, February 2014) summarizes the stance as: start with the user experience and human needs, build accessibility in from the beginning, favor universal design over accommodations, use semantic structure, keyboard support and clear navigation, write in plain language and provide text alternatives for media, and make the organization accountable. The book frames this as a practical on-ramp for designers, writers and developers who are not accessibility specialists.

### Specifics

Structure, as laid out in the review: chapter 1 makes the case for inclusive design and introduces WCAG 2.0 and a set of principles (the review mentions seven design principles; a search result ties the opening chapter to the POUR principles); chapter 2, "People First Design", introduces eight detailed personas covering physical and cognitive abilities, technology skill and attitudes (the persona names per the publisher listing are Trevor, Emily, Jacob, Lea, Vishnu, Steven, Maria and Carol; the first is described as a high school student with autism); chapter 3 "Clear Purpose" (know your audience, start with accessibility); chapter 4 "Solid Structure" (semantic markup including HTML5 and WAI-ARIA, separate content from presentation, order content so assistive technology reaches the important parts first); chapter 5 "Easy Interaction" (keyboard access, focus visibility, adequately sized controls, avoiding unexpected actions, accessible error handling); chapter 6 "Helpful Wayfinding" (consistent navigation, location cues such as breadcrumbs, landmarks, obvious links); chapter 7 "Clean Presentation" (layout, fonts, contrast, user customization, responsive style sheets); chapter 8 "Plain Language" (write for the audience, do not oversimplify, use clear headings, short paragraphs and lists); chapter 9 "Accessible Media" (alt text, captions, transcripts); chapter 10 "Universal Usability"; chapter 11 "In Practice" (organization-wide commitment, auditing, working with real people because personas are stand-ins); chapter 12 "The Future". Appendices list the principles as test prompts, summarize WCAG 2.0 and map it to the chapters, and offer further reading. The personas have since been published separately (the Know About Accessibility site, per a link blog).

### Replication and criticism

A practitioner book, so its authority is craft and synthesis of research and consulting experience, not experiment. The reviewer's assessment is that it excels at the "what" and "why" and at making personas vivid, but offers fewer concrete "how" examples and little coding guidance, so it suits readers who want orientation, not an implementation manual. It was written against WCAG 2.0 and predates WCAG 2.1 and 2.2, so the mapping appendix is dated (the target size, reflow and focus criteria arrived later). The personas approach has a known limit that the authors acknowledge in chapter 11: personas are only stand-ins for real people. The same point appears in Microsoft's inclusive design guidance (also in this lane), which warns against relying on simulation.

### Implications for LTF

Use the book's chapter headings as a content-design checklist for every lesson page: clear purpose (what this page teaches in the first sentence), solid structure (headings, landmarks, reading order matching visual order), easy interaction (keyboard, visible focus, big targets, no surprises), helpful wayfinding (consistent lesson navigation, a progress location, breadcrumbs to the course), clean presentation (readable type, contrast, user text size and theme choices), plain language (the core of LTF's beginner promise), accessible media (captions and transcripts for sim clips) and universal usability. Create a small set of LTF learner personas that include disabled learners (a low vision learner using zoom, a screen reader user, a learner with ADHD using the lessons beside the sim, a learner with a tremor using a trackball) and use them in design reviews, with the explicit caveat that real testing replaces them. Update the WCAG mapping appendix by hand to 2.2: add target size, dragging alternatives, focus not obscured and redundant entry.

Confirmed this session: Open Library search returned work OL16857506W (Horton and Quesenbery, Rosenfeld Media, 2013 first publication, ISBNs 1306799503 and 1933820977); chapter structure and assessment from the review at https://www.mkltesthead.com/2014/02/book-review-web-for-everyone.html; web search results on the publisher listing and personas (the Rosenfeld Media product page returned 403).

## shinohara2011shadow

Shinohara, K., and Wobbrock, J. O. (2011). In the shadow of misperception: assistive technology use and social interactions. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2011), Vancouver, pp. 705 to 714. DOI 10.1145/1978942.1979044.

### Core claims

Assistive technology research usually asks whether a device is functional and usable, but devices are used in social settings, where how others perceive the user can decide whether the device is used at all. The paper reports an interview study of 20 people with disabilities and argues that accessibility is also a social design problem. The abstract's findings: specific assistive devices sometimes marked their users as having disabilities; functional access took priority over feeling self-conscious; and two misperceptions pervaded assistive technology use, namely that assistive devices could functionally eliminate a disability, and that people with disabilities would be helpless without their devices. The authors conclude that accessibility should be built into mainstream technologies, and where that is not feasible, assistive devices should incorporate cutting-edge technology and be designed for social acceptability, a design approach they propose.

### Specifics

Method: 20 participants interviewed in sessions of 60 to 90 minutes at the university, at work or at home, recruited through local assistive technology center email lists. Eleven were blind (three lost sight later in life), three had low vision, four were deaf or hard of hearing, one was deaf-blind and one had cerebral palsy. Interviews were recorded and transcribed verbatim and analyzed with a grounded theory approach (open and axial coding). Participants were asked about their devices, what using them around others was like, whether they felt misperceptions and whether they felt empowered or self-conscious.

Findings in more detail: participants combined proprietary devices and mainstream ones (iPhone, iPad, laptops), and conspicuous or "strange looking" devices attracted attention; smaller devices that resembled mainstream counterparts attracted least. Participants reported feeling self-conscious in a few situations: when they had an invisible disability, when using socially recognizable devices such as a white cane or hearing aids, and when a design drew attention to difference, for example phones that spoke commands aloud. Participants valued devices that let them access what everyone else could, and several said assistive technology lagged behind current technical standards. The paper's related work cites an earlier review (Pape et al.) finding that people were more likely to abandon a device if they did not accept their disability, if it made them feel different from peers, or if it clashed with cultural values. The Discussion proposes "design for social acceptance" as a future three-part approach: mock-up comparisons, iterative prototyping evaluated on both usability and social-acceptability metrics, and in situ testing.

### Replication and criticism

A qualitative interview study with a small, mostly blind and local sample, recruited through assistive technology centers; the authors note the need for more interviews or surveys with people with other disabilities and for studies of non-disabled observers. Later work extended it: the same authors' diary study (Shinohara and Wobbrock 2016, ACM TACCESS 8(2), DOI 10.1145/2827857, found in Crossref) examines the social accessibility of assistive technology, and an arXiv paper whose title refers to choosing assistive devices that save face appeared in search results (not read). The finding is plausible and consistent across studies, but it is qualitative evidence, not a measured effect size.

### Implications for LTF

Do not build a separate "accessible mode" that looks different from the main app. Make accessibility features part of the mainstream experience: dark and light themes, text size controls, keyboard operation, reduced motion and captions available to every learner without an application or label. Use neutral wording for settings (Display, Reading, Motion), not "disability" labels, so a learner can turn on a screen reader mode or a high-contrast theme without announcing anything. Keep every learner on the same lesson path and the same progress and badge system; do not show an "accessible version" with fewer features. In copy and imagery avoid the two misperceptions: do not imply that assistive technology removes all barriers (offer real alternatives such as a text description of an instrument) and do not assume learners are helpless without it. When planning sim input, expect disabled learners to use ordinary mainstream hardware such as a trackball, voice control or a joystick adapter alongside the app.

Confirmed this session: read the full text of the CHI 2011 paper from https://faculty.washington.edu/wobbrock/pubs/chi-11.03.pdf (abstract, method, results, discussion, future work); Crossref query returned DOI 10.1145/1978942.1979044 (title, authors, 2011, pages 705 to 714) and DOI 10.1145/2827857 for the 2016 follow-up.

## fisk2009designing

Fisk, A. D., Rogers, W. A., Charness, N., Czaja, S. J., and Sharit, J. (2009). Designing for Older Adults: Principles and Creative Human Factors Approaches (2nd ed.). Boca Raton, FL: CRC Press. First edition 2004. Open Library work OL19490713W.

### Core claims

The book is a human factors primer that turns research on aging into design guidelines for products, interfaces and training. Its premise is that age-related changes in sensation, perception, cognition and movement are systematic enough that designers can plan for them from the start, that doing so helps younger users too, and that good design for older adults is worth the effort (chapter 1 asks directly "Is good design worth the effort?"). The publisher's description, as recorded in the University of Illinois research record, calls it a primer on designing for older adults; the second edition revises and updates chapters, reorders some, adds a section of tutorials and updates the recommended readings. A bookseller summary adds that the second edition added chapters on transportation and aging in place.

### Specifics

I read the second edition's scanned table of contents (the Max Planck Institute library copy). Section 1, Fundamentals: chapter 1 "Toward Better Design for Older Adults" (demographics, what products older adults use, how to define an older adult, general guidelines versus specific questions); chapter 2 "Characteristics of Older Adult Users" (human factors underpinnings; aging and the sensory modalities: taste and smell, haptics, audition, vision; cognition: memory, attention, spatial cognition, understanding written and spoken language; control of movements and movement speed; a summary of the review and guidance for design); chapter 3 "Guiding the Design Process" (principles of design, universal design, what makes a product usable, user-centered design with task analysis, usability testing, think-aloud protocols, field observation, interviews, questionnaires and focus groups; methods that do not involve the user such as checklists, heuristic evaluation and layout analysis). Section 2, Design Guidelines: chapter 4 "Improving Perception of Information" (visual perception, text characteristics, icons versus text, lighting guidelines, text guidelines, auditory perception thresholds and speech perception, haptics); chapter 5 "Design of Input and Output Devices" (minimizing steps, consistency); chapter 6 "Interface Design" (information organization, getting lost in the system and navigation tools, depth versus breadth, compatibility, documentation and error recovery); chapter 7 "Design of Training and Instructional Programs" (principles of instruction and an integrated approach to instructional design for complex tasks). Later sections cover exemplar applications and tutorials (search results mention task analysis, error prediction and GOMS in the tutorials). I did not read the chapter text, so I cannot confirm specific numerical guidance such as minimum font sizes or contrast values; the book's content should be checked directly before any such number is used.

### Replication and criticism

The book is a synthesis of experimental aging research (cognitive aging, psychophysics) by established human factors researchers; its strength is breadth and the link between findings and design practice. Limits: it is a 2009 edition, so the mobile and touch era, and today's older adults' technology experience, are outside it; a third edition (Czaja, Boot, Charness and Rogers, 2019) exists, per search results, with new chapters on existing and emerging technologies, work and volunteering, social engagement and leisure. The book's own section "How do we define older adult?" shows the category is a judgment call, and age is a blunt proxy for ability; this connects to the user-sensitive inclusive design argument (Newell et al., also in this lane) and to Shinohara and Wobbrock's concerns about stigma.

### Implications for LTF

Flight training skews toward adult learners, including retirees and career changers, so plan for aging eyes and hands as a normal case, not an edge case. The book's structure suggests a checklist per LTF surface: perception (text size controls, strong contrast, avoiding small low-contrast gauge labels, not relying on high-pitched or quiet sounds for warnings), input (minimize steps and keep controls consistent, offer large targets and tolerance for imprecise pointing), interface (shallow navigation, clear location cues, easy recovery from errors, help in context) and training (the instructional principles in chapter 7 apply directly to lesson sequencing: chunk complex tasks, let learners practice, give feedback). Treat age as a spectrum of capabilities, not a user segment: build settings for text size, motion and pace rather than an "older user mode".

Confirmed this session: Open Library search returned work OL19490713W (Fisk, Rogers, Charness, Czaja, Sharit; first published 2004; CRC Press); University of Illinois record https://experts.illinois.edu/en/publications/designing-for-older-adults-principles-and-creative-human-factors--3/ (second edition, 2009, CRC Press, description); scanned second-edition table of contents (http://library.mpib-berlin.mpg.de/toc/z2009_2658.pdf) read as images; search results for ISBN and edition details.

## clarkson2003inclusive

Clarkson, J., Keates, S., Coleman, R., and Lebbon, C. (Eds.) (2003). Inclusive Design: Design for the Whole Population. London: Springer. DOI 10.1007/978-1-4471-0001-0. Open Library work OL12631391W. Chapter-level evidence also drawn from Clarkson, Dong and Keates (2003), "Visualising design exclusion", ICED 03.

### Core claims

This edited volume reviews inclusive design practice and argues that designing for the whole population is both ethical and commercially sensible. Search records describe it as split into a business case section and a designer-focused section. A central idea in the Keates and Clarkson chapters is to focus on design exclusion, not only on the aspiration to be inclusive or universal: exclusion occurs, as the ICED paper defines it, when "a product cannot be used effectively because of choices made during the design process", and it can be measured by comparing the demands a product places on users with the capabilities of the population.

### Specifics

Capability and demand: Clarkson, Dong and Keates describe products as placing demands on users, and users who lack the capability to meet them are excluded; their kettle example (too heavy for a weaker user to lift) illustrates the approach, and the associated case study estimated how many people a specific kettle design excludes. In "Visualising design exclusion" the authors use two British data sources: the Survey of Disability in Great Britain (1985 to 1988), which built a severity measure from assessments by expert judges, and the Disability Follow-up to the 1996/97 Family Resources Survey. The surveys cover 13 capabilities of which 7 are relevant to product assessment, grouped as motion (locomotion, reaching and stretching, dexterity), sensory (seeing, hearing) and cognitive (communication, intellectual functioning).

Population figures stated in that paper: about 20% of adults (an estimated 8,582,200) had a disability; of those, 34% had mild impairment, 45% moderate and 21% severe; 48% of the disabled population were aged 65 or older and 29% were 75 or older; the share with a capability loss in the 75 and older band was "10 times higher" than in the 16 to 49 band. For Great Britain adults aged 16 and over, motion loss affected 6,710,000 people (14.3%), sensory loss 3,979,000 (8.5%), cognitive loss 2,622,000 (5.6%), and any of the three 8,126,000 (17.3%); the paper says at least half of those with some capability loss have more than one. The book's own text, table of contents and chapter details were not available to read, so chapter-level claims are limited to what the abstracts and repository records say.

### Replication and criticism

The exclusion calculation is a modeling approach that depends on old survey data (late 1980s and mid 1990s) and on how capabilities are scaled; the data are British and now dated, and the model treats capabilities as independent scales, which a real person's combination of impairments often is not (the paper itself notes multiple impairments are common among older users). It also quantifies exclusion through impairment categories, which sits uneasily with the mismatch view of disability in Microsoft's inclusive design and Holmes (both in this lane). Evidence strength: expert-edited collection with quantitative modeling and case studies, not randomized evidence.

### Implications for LTF

Use the capability and demand framing to review each widget. For every interaction, list the demands (vision, reading, hearing, fine pointer control, two-handed input, memory, timing) and ask how many learners the interaction would exclude. A slider that demands precise dragging excludes people with dexterity limits, so reduce the demand: add keyboard arrow steps and type-in fields. A gauge that relies on seeing a thin needle on a dark dial excludes people with reduced vision: add a numeric readout and a larger option. An audio cue demands hearing: pair it with a visual and text cue. The figures above help make a case that a substantial minority of adults have some capability loss and that many have more than one (so combined needs, such as low vision plus a tremor, should be tested together), but because the data are dated and British, do not quote them as current US prevalence in product copy. The notion of "exclusion count" can become an acceptance criterion: keep the number of demands per interaction low and provide alternatives.

Confirmed this session: Open Library search returned work OL12631391W (Inclusive Design, Clarkson, Coleman, Keates, Lebbon, 2003, Springer; ISBNs 9781447100010, 1447100018); search results gave DOI 10.1007/978-1-4471-0001-0 and chapter abstracts; fetched the ICED 2003 paper https://iced.designsociety.org/download-publication/23893/VISUALISING+DESIGN+EXCLUSION for the figures above (its exclusion calculation section was truncated and not read). The Springer and Napier pages could not be fetched.

## lazar2015ensuring

Lazar, J., Goldstein, D. F., and Taylor, A. (2015). Ensuring Digital Accessibility through Process and Policy. Waltham, MA: Morgan Kaufmann (Elsevier). Open Library work OL21096584W.

### Core claims

The book argues that digital accessibility fails mostly for organizational reasons, not technical ones: the standards exist, but without process (testing, procurement, monitoring) and policy (law, regulation, enforcement) they are not applied. Its publisher framing, as summarized in search results, is that it is not strictly about interface design nor strictly about law; the authors' mix of legal, technical and research backgrounds is its distinguishing feature. It presents inaccessibility as discriminatory in effect, and treats culture change as part of the solution.

### Specifics

The British Library catalog record lists the chapters as: Introduction to Accessible Technology; The History of Access Technology; The Discriminatory Impact of Digital Inaccessibility; Technical Standards for Accessibility; U.S. Laws and Lawsuits; International Disability Law; Regulations; Evaluation Methods and Measurement; Compliance Monitoring Policies and Procurement; Case Studies of Success; and The Need for Culture Change and Looking Ahead to the Future. The publisher blurb adds that it covers the history of accessible computing, why accessibility matters socially and legally, interface standards, evaluation methods, and laws and regulations, with real-world examples. Catalog records give a page count between 230 and 247, depending on format. I could not read the chapters, so specific claims about case law, procurement tools or evaluation methods are not summarized here. The lead author is also the lead author of the screen reader frustration study in this lane (Lazar et al. 2007), which grounds the book's emphasis on the impact on real users.

### Replication and criticism

A practitioner and academic textbook, not a primary study; its value is synthesis across law, standards and method. As a 2015 text it predates WCAG 2.1 and 2.2, the second wave of web accessibility law in the US and EU (the Section 508 refresh, EN 301 549 and the European Accessibility Act, covered in the other legal sources in this lane), and much recent litigation, so the legal chapters need to be read alongside current sources. Its core thesis, that accessibility outcomes depend on process and enforcement, is consistent with the WebAIM Million, which finds that most home pages still fail basic checks a decade after widespread guidance (also in this lane). Critics of compliance-led approaches (Power et al. 2012, Petrie and Kheir 2007) warn that a process that only checks conformance can miss real user problems, and the book's chapter on evaluation methods and measurement is where I would expect user-based methods to appear, though I did not read it.

### Implications for LTF

For a small product team the lesson is to build accessibility into the process instead of treating it as a final audit. Practical forms for LTF: add accessibility acceptance criteria to every design and pull request template (keyboard path, labels, contrast in both themes, reduced motion); run automated checks in continuous integration and a manual keyboard and screen reader pass on each new widget; keep an accessibility statement with a contact route and a log of known issues; record the target standard (WCAG 2.2 AA) in project policy; and if the product is later sold to schools, flight clubs or other institutions, expect them to ask for a conformance report, so keep test records. Because the law covers procurement, designing a documented process now makes institutional sales easier later. Avoid legal claims in product copy until a lawyer has reviewed current requirements.

Confirmed this session: Open Library search returned work OL21096584W (Lazar, Goldstein, Taylor, Elsevier Science and Technology Books, 2015; ISBNs 0128006463, 9780128007105); web search results for the publisher blurb and British Library contents list (https://eld.bl.uk/catalog/017409731 and the Elsevier shop listing). The O'Reilly and chapter pages returned 403, so no chapter text was read.

## etsi2021en301549

ETSI, CEN and CENELEC (2021). EN 301 549 V3.2.1 (2021-03): Accessibility requirements for ICT products and services. European Standard. A revision (V4.1.1) was planned for 2026 in support of the European Accessibility Act.

### Core claims

EN 301 549 is the European harmonised standard that specifies functional accessibility requirements for information and communication technology (ICT) products and services. Produced jointly by the three European standards organizations, it gives public buyers and manufacturers one set of testable requirements covering web content, software, documents, hardware and support services. Under Commission Implementing Decision (EU) 2021/1339 of 11 August 2021, version 3.2.1 was made the harmonised standard that confers a presumption of conformity with the essential requirements of the EU Web Accessibility Directive, replacing the earlier version (2.1.2, 2018), which was superseded.

### Specifics

Structure: requirements are self-scoping, each in two parts, with the first part a precondition for the second part, which holds the actual requirement; chapters 5 to 13 organize requirements by function or product feature, not by product category. Its web and non-web software content requirements incorporate all WCAG 2.1 success criteria and conformance requirements, and extend them to non-web software such as mobile apps and to non-web documents (per the Interoperable Europe rolling plan page). Version history on that page: V1.1.2 (2015-04), V2.1.2 (2018-08), V3.1.1 (November 2019, corrected in March 2021) and V3.2.1 (2021-03). A Standardisation Request (M/587) asks for a revision to cover the requirements of the European Accessibility Act (Directive 2019/882); search results say the revision aimed to publish V4.1.1 in 2026. The rolling plan page said Member States had to transpose the Act by June 2022; I could not confirm the application date from the pages read. The PDF is available free from ETSI, per search results, and the Luxembourg listing shows 186 pages.

### Replication and criticism

A standard, not a study. Its main critics are practical: it is long, written for procurement and conformity assessment, and it lags WCAG, since V3.2.1 references 2.1 AA and not 2.2 (the 2.2 additions such as target size and focus not obscured are not in it unless a revision adds them; the revision plans were not read in detail). The standard's value is legal: in the EU, conformity with it gives a presumption of conformity with the Web Accessibility Directive for public sector bodies, and the later Act extends accessibility obligations to some private-sector products and services. The effects on actual web accessibility are visible in the WebAIM Million, which finds most home pages still failing (also in this lane), although that data set is global and not Europe-specific.

### Implications for LTF

If LTF has users or institutional customers in Europe, EN 301 549 (with WCAG 2.1 AA inside it) is the reference they will cite, which is another reason to adopt WCAG 2.2 AA now: 2.2 extends 2.1, so a page meeting 2.2 AA should be checked against the 2.1 AA criteria that V3.2.1 incorporates. Beyond web content the standard contains functional performance criteria and requirements for documents and software, so if LTF later ships downloadable PDFs (checklists, flight plans) or a desktop or mobile companion app, those fall under the non-web clauses and should be tagged and tested too. Keep a dated conformance record and an accessibility statement so that a European school or flight club can adopt the product. Because the revision to V4 was still underway when this was checked, check the current version before making any compliance claim.

Confirmed this session: web search results (ETSI page listing, Interoperable Europe rolling plan, CEN-CENELEC explanatory text, ANSI webstore listing) and fetched https://interoperable-europe.ec.europa.eu/collection/rolling-plan-ict-standardisation/accessibility-ict-products-and-services-rp2024 (version history, Decision 2021/1339, WCAG 2.1 incorporation, M/587). The ETSI page itself returned 404 and the full standard text was not read.

## accessboard2017ict

U.S. Access Board (2017). Information and Communication Technology (ICT) Standards and Guidelines: the Section 508 Standards and Section 255 Guidelines, final rule of 18 January 2017 (reference date 18 January 2018).

### Core claims

The final rule refreshed the U.S. federal accessibility requirements for information and communication technology. Section 508 of the Rehabilitation Act applies to ICT that federal agencies develop, procure, maintain or use, and Section 255 of the Communications Act applies to telecommunications equipment and customer premises equipment. The rule replaced the 2000 standards (published 21 December 2000), which were organized as technical provisions for software and web content, with a structure built on functional performance criteria, hardware, software, support documentation and services, and referenced standards, and it adopted WCAG 2.0 Level A and AA as the content requirement.

### Specifics

From the Access Board's ICT page: the Board issued the revised final rule on 18 January 2017; 18 January 2018 serves as the reference date for the "existing ICT" exemption, so legacy components not altered on or after that date are exempt; a 22 January 2018 correction restored TTY access provisions; and the page does not name a separate effective date. Electronic content (E205.4) and user interface components of software and platforms (E207.2) must meet WCAG 2.0 Level A and AA success criteria, with WCAG 2.0 incorporated by reference (the W3C Recommendation of 11 December 2008). Non-web documents are exempt from four success criteria (2.4.1, 2.4.5, 3.2.3 and 3.2.4), and non-web software has the same four exemptions plus the Complete Processes conformance requirement. Exemptions to Section 508 include national security systems, certain legacy ICT and ICT a contractor acquires incidentally to a contract. The revised standards have new chapters for functional performance criteria (Chapter 3), hardware (4), software (5), support documentation and services (6) and referenced standards (7), and more detailed equivalent facilitation and undue burden provisions.

### Replication and criticism

A regulation, not a study. Criticism is practical: it names WCAG 2.0, which is older than 2.1 and 2.2, so what the rule requires lags the current W3C standard. The rule applies directly to federal procurement and not to private websites in general, and private-sector web accessibility litigation in the US proceeds under other laws, a legal area that the Lazar, Goldstein and Taylor book (also in this lane) covers and that I did not research here.

### Implications for LTF

If LTF is ever offered to public schools, universities, military or other federal-funded training programs, a buyer's procurement office may ask for a Section 508 conformance statement, which in practice means a WCAG report. Building to WCAG 2.2 AA goes beyond the WCAG 2.0 Level A and AA requirement the rule names (check the 2.0 criteria individually, since 2.2 removed 4.1.1 Parsing), but non-web deliverables (PDF lessons, a desktop companion) fall under the rule's separate content provisions. Record test dates, tools and assistive technology used in a short conformance log from the start. Avoid claiming "Section 508 compliant" in marketing without a documented evaluation.

Confirmed this session: fetched https://www.access-board.gov/ict/ (first 100,000 characters: dates, WCAG 2.0 A and AA, exemptions, chapter structure, scope).
