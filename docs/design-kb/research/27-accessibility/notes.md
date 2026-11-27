# Lane 27: Accessibility standards and research

Notes for the Learn to Fly Design Knowledge Base. Each section covers one source and ends with what was actually confirmed in this session.

## w3c2023wcag

W3C, Web Content Accessibility Guidelines (WCAG) 2.2. W3C Recommendation, the page read this session is dated 12 December 2024. Editors: Campbell, Adams, Bradley Montgomery, Cooper, Kirkpatrick.

### Core claims

WCAG 2.2 is the international technical standard for making web content usable by people with disabilities. It organizes requirements under four principles: content must be Perceivable, Operable, Understandable and Robust. Under those principles sit 13 guidelines, and under the guidelines sit testable success criteria (SC), each assigned to conformance level A (lowest), AA or AAA (highest). Most laws and procurement rules that cite WCAG ask for level AA. WCAG 2.2 extends WCAG 2.1 (June 2018) and is designed so that content that conforms to 2.2 also conforms to 2.1. The standard is deliberately technology-neutral: it states outcomes ("the focus indicator is visible") and leaves techniques to separate, non-normative documents (Understanding WCAG and Techniques for WCAG). The central claim is that accessibility can be specified as pass/fail criteria that authors, testers and regulators can all apply to the same page.

### Specifics

Nine criteria are new in 2.2: 2.4.11 Focus Not Obscured (Minimum, AA), 2.4.12 Focus Not Obscured (Enhanced, AAA), 2.4.13 Focus Appearance (AAA), 2.5.7 Dragging Movements (AA), 2.5.8 Target Size (Minimum, AA), 3.2.6 Consistent Help (A), 3.3.7 Redundant Entry (A), 3.3.8 Accessible Authentication (Minimum, AA) and 3.3.9 Accessible Authentication (Enhanced, AAA). Criterion 4.1.1 Parsing was removed. By one count of the table of contents the principles hold 29, 34, 21 and 3 criteria respectively, 87 in total, but that tally came from a fetch tool summary and should be rechecked before it is quoted.

The criteria most relevant to a lesson and widget app, with the thresholds confirmed from the W3C Understanding pages:

- 1.4.3 Contrast (Minimum, AA): text and images of text need at least 4.5:1; large-scale text (18 point, or 14 point bold) needs at least 3:1.
- 1.4.11 Non-text Contrast (AA): visual information needed to identify a control, its states (including focus indicators) and graphical objects needed to understand content must reach at least 3:1 against adjacent colors. The threshold is strict, so 2.999:1 fails. Disabled controls and hover effects are excluded, and controls identified by visible text need no contrasting boundary.
- 1.4.10 Reflow (AA): content must work without two-dimensional scrolling at a width equivalent to 320 CSS pixels for vertically scrolling content and a height of 256 CSS pixels for horizontally scrolling content. The Understanding page ties 320 pixels to a 1280-pixel viewport at 400% zoom. Exceptions cover content that needs two-dimensional layout, such as maps, diagrams, video, games, and data tables (but headings and search near a table must still reflow).
- 2.2.2 Pause, Stop, Hide (A): moving, blinking or scrolling content that starts automatically, lasts more than five seconds and sits alongside other content needs a mechanism to pause, stop or hide it. Auto-updating content needs control with no five-second exception. Essential activities are exempt.
- 2.4.11 Focus Not Obscured (Minimum, AA): a focused component must not be entirely hidden by author-created content. Sticky headers, footers and cookie banners are the named hazards; the Understanding page suggests CSS scroll padding, making notifications modal, or closing non-essential notifications.
- 2.5.8 Target Size (Minimum, AA): pointer targets must be at least 24 by 24 CSS pixels, unless a spacing rule is met (a 24-pixel circle centered on each undersized target must not intersect another target), an equivalent control exists, the target is inline in a sentence, the size is set by the user agent, or the presentation is essential.
- 2.5.7 Dragging Movements (AA): anything that relies on dragging must be operable with a single pointer without dragging, unless dragging is essential.
- 3.3.8 Accessible Authentication (Minimum, AA): no cognitive function test (remembering a password, solving a puzzle) at any authentication step unless an alternative, a supporting mechanism (password managers, paste), object recognition or personal content applies.
- 1.2.2 Captions (Prerecorded, A): captions for prerecorded audio in synchronized media, including non-speech audio needed to understand the content such as speaker identification and meaningful sound effects.

Conformance requires meeting all criteria at the chosen level for full pages, and conformance claims are about whole pages or processes, not isolated components.

### Replication and criticism

WCAG is a consensus standard, not an experiment, so "replication" means field evidence about whether conformance helps users. Power et al. (2012, also in this lane) ran task-based evaluations with 32 blind users on 16 websites, logged 1,383 problems, and found that only 50.4% of them were covered by any WCAG 2.0 success criterion (confirmed via search result summaries of the CHI abstract). Petrie and Kheir (2007, also in this lane) found accessibility and usability problems overlap only partly. The WebAIM Million (also in this lane) shows that basic failures such as low contrast text remain on a large majority of home pages, 95.9% of which had a detected WCAG 2 failure in the February 2026 scan, so the gap between the standard and practice is wide. Critics also note that a page can pass criteria while remaining hard to use, that AAA is explicitly not meant as a blanket requirement, and that cognitive and learning disabilities are less well covered than sensory and motor ones, which is why the W3C maintains supplementary guidance (COGA, also in this lane). The 2.2 additions on target size, dragging, focus visibility and authentication address motor, low vision and cognitive barriers; the Understanding pages name those groups as beneficiaries, though I did not confirm the working group's internal history of why each was added.

### Implications for LTF

Treat WCAG 2.2 AA as the floor for every LTF page and widget, and write the thresholds above into design tokens and the review checklist. Concretely: body and label text at 4.5:1 or better in both light and dark themes; instrument widget outlines, dial ticks, slider thumbs and focus rings at 3:1 or better against their backgrounds; every button, chip and stepper at least 24 by 24 CSS pixels (aim larger for the fly-mode controls a learner taps with a mouse while their hands are partly on a yoke or throttle). Any draggable instrument, for example a slider that sets a heading bug or a flap lever, needs a click, tap or keyboard alternative. Sticky lesson headers and the fly-mode toolbar must not hide the focused element, so use scroll-padding. Animated instrument demos that run longer than five seconds need a visible pause control, and autoplaying loops should respect the reduced-motion preference. Any video of sim footage needs captions that include non-speech cues such as warning tones. Login must allow password managers and paste. Reflow at 320 CSS pixels must hold for lesson prose; wide panel layouts may use the two-dimensional exception for diagrams only, not for the surrounding text.

Confirmed this session: fetched https://www.w3.org/TR/WCAG22/ (first 100,000 characters: status, editors, principles, new criteria, 1.4.3 values) and the Understanding pages for target-size-minimum, focus-not-obscured-minimum, accessible-authentication-minimum, dragging-movements, non-text-contrast, reflow, pause-stop-hide and captions-prerecorded under https://www.w3.org/WAI/WCAG22/Understanding/.

## webaim2026million

WebAIM, The WebAIM Million: An accessibility analysis of the top 1,000,000 home pages (2026 report, eighth annual; February 2026 scan). Web Accessibility In Mind, Utah State University.

### Core claims

The WebAIM Million is a yearly automated audit of the home pages of the top one million sites. Its central claim is that, despite a decade of standards, tooling and law, the web is overwhelmingly not conformant even on the narrow slice of problems that machines can detect. In the 2026 report, 95.9% of home pages had at least one detected WCAG 2 failure, up from 94.8% in 2025, and the average page had about 56.1 detectable errors, up from 51. The report also argues that the same six failure types account for nearly all errors year after year, so a small set of fixes would remove most of the detectable problems. A second claim concerns ARIA: pages that use ARIA have more detectable errors than pages that do not, which the authors explicitly describe as a correlation that may reflect page complexity, not proof that ARIA causes errors.

### Specifics

Method: the scan uses the WAVE stand-alone API on the rendered DOM (after scripts and styles run), applied to the top 1,000,000 home pages drawn from the Tranco ranking. Sites were excluded if they had no home page, returned errors, had fewer than 10 HTML elements or had more than 5,000 same-domain links. Supplementary tools supplied technology and category data.

Six most common failure types in 2026, as a share of home pages: low contrast text 83.9%; missing alternative text on images 53.1%; missing form input labels 51%; empty links 46.3%; empty buttons 30.6%; missing document language 13.5%. Prior-year values given on the same page: low contrast 79.1%, missing labels 48.2%, empty links 45.4%, empty buttons 29.6%, missing alt text 55.5%, missing language 15.8%.

ARIA: 82.7% of pages used ARIA in 2026 (79.4% the year before). Pages with ARIA averaged 59.1 errors versus 42 for pages without. Home pages averaged 1,437 elements, 14.3% more than 1,257 a year earlier, and ARIA attributes per page rose about 27%.

Limitations stated by the authors: automated tools cannot detect every conformance failure, and the report says that absence of detected errors does not indicate a page is accessible or conformant. An earlier edition's page (February 2019 data) says only about 25% of possible conformance failures are detectable by automated tools, and it recorded 97.8% of pages with failures, 59.6 average errors, low contrast at 85.3%, missing alt text at 68%, and ARIA on 60.1% of pages with 26.7 more errors on those pages than on pages without. Comparing the two editions: the share of failing pages fell only about 1.9 percentage points in seven years, average errors fell slightly, missing alt text and language declarations improved a lot, and ARIA use rose by more than 20 points while the ARIA error gap persisted.

### Replication and criticism

This is an observational census, not an experiment, and it has been repeated annually with the same tool, which makes trends credible but also means any change in WAVE rules affects comparisons. Critics of automated scans make three points the authors themselves accept: the numbers undercount real problems (the 2019 page puts automated detectability near a quarter of failures), they say nothing about whether a detected error actually blocks a user, and home pages are not representative of deep application pages. The ARIA finding is frequently misquoted as "ARIA makes pages worse"; the authors caution against that reading, and the paired finding that pages with ARIA are larger and more complex supports a confound explanation. Power et al. (2012) and Petrie and Kheir (2007), also in this lane, show that user-observed problems extend well beyond what any scan finds, so the Million should be read as a floor on the problem.

### Implications for LTF

The six failure types are a ready-made automated test list for LTF in continuous integration: contrast of text and chart labels in both themes, alternative text or text equivalents for every instrument image, programmatic labels on every input and slider, no empty links or buttons (icon-only fly-mode controls need accessible names), and a language attribute on the document. Because low contrast is the single most common failure, set theme tokens against contrast targets once, in the token file, and test every pairing in light and dark. The ARIA finding supports a "native element first" rule for LTF widgets: use real buttons, inputs and headings and add ARIA only where native HTML cannot express the role. Run an automated scan (axe or WAVE) on every route in the end-to-end tests, but never treat a clean scan as proof; pair it with the keyboard and screen reader walk-throughs described in the other notes. Page weight matters too: complexity correlated with errors, so keep lesson pages simple.

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

Because it has run eleven times with a similar instrument, trends are informative, but the authors state the sample is uncontrolled, so respondents may skew toward people who are engaged enough to answer an open survey about accessibility; I did not confirm the recruitment channels or the respondents' countries. The survey measures self-reported habits, not observed behavior, so the 67.8% "headings first" figure describes stated preference. Its portrait of AT use should not be read as population statistics for blind people generally. It also does not include people with cognitive, motor or hearing disabilities, so it cannot guide design for those groups. Findings agree in direction with observational studies such as Lazar et al. (2007) and Power et al. (2012), also in this lane, that structural markup and labels are what screen reader users depend on.

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
