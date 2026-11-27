# Lane 03: Screen and web typography. Notes

Verification note: web search confirmed bibliographic details for every entry. The page fetch tool could not reach external hosts, so the content below comes from prior knowledge of these works plus search snippets. Where I am unsure of a figure I say "approximately" or "as I recall". The writer should re-check exact numbers against the live sources before printing them as facts.

## Rutter2017

**Core claims.** Web Typography is a handbook for designers and developers that grew out of webtypography.net, Rutter's earlier site translating Robert Bringhurst's The Elements of Typographic Style into HTML and CSS. The thesis is that the web deserves the same typographic care as a book, but with the rules re-derived for a medium where the reader, not the designer, controls window width, font size and sometimes the font itself. Typography must therefore be specified as relationships (ratios, relative units) rather than as fixed values.

**Specifics.** The book is organized around the same questions as print: choosing typefaces, setting size, measure and leading, then refinements. Recurring recommendations (stated as I recall them): measure of roughly 45 to 75 characters (Bringhurst's range, with 66 as the classic ideal), expressed in `em` or `ch` so it tracks the font rather than the pixel width; unitless `line-height` so it scales with the font size on nested elements; sizes in `rem`/`em` so the user's browser default (normally 16px) is respected; a modular scale for the size ladder; real small caps, real italics and lining or oldstyle numerals chosen by context; `hyphens: auto` with `lang` set for justified or narrow text; hanging punctuation where supported; adding letterspacing to capitals and small caps. A crucial screen-specific theme is the rendering of type: antialiasing, subpixel rendering, hinting on Windows, and the idea of designing text first on the devices people actually read on. Numerals get a dedicated treatment: tabular versus proportional figures, and the OpenType feature (`font-variant-numeric`) that selects them. Rutter also covers the "content-out" approach: set the body copy first, then derive headings and the rest from it.

**Quotations.** None used; wording not verified.

**Criticism and status.** The advice is practitioner consensus rather than experimental evidence. The Bringhurst-derived measure range has partial support from reading research (lane 02) but studies find reading speed is surprisingly tolerant of line length within a wide band. Some CSS techniques are dated (for example `text-rendering: optimizeLegibility` hacks, viewport-unit tricks before `clamp()`).

**Further detail and reasoning.** Rutter's underlying argument is that typographic rules from print survive on the web only if they are translated into the web's own units. A print measure of 66 characters becomes a width in `ch` or `em` with `max-width`, not a pixel column. A print leading of 120 to 145 percent becomes a unitless `line-height` that inherits as a ratio, which avoids the classic bug where a fixed length line height is inherited into a larger child element and the lines collide. He treats size as a conversation with the user: the default 16px is a statement of the reader's preference, so authors should scale from it with `rem` and let user settings and zoom work. He explains that screens have a different reading situation from paper: lower resolution, glare, a varying reading distance and light emission, so text usually needs a little more size, more generous spacing and more careful contrast than the same text in a book. He distinguishes text typography (long reading) from display and interface typography (short, glanceable), and argues each needs its own rules, with tighter spacing and smaller leading in large display type. He is also a teacher of the "content-out" workflow: pick a text face, set a comfortable paragraph, then derive the scale around it. The standard criticism is that the book teaches craft from authority and tradition rather than experiments, and that web conventions have shifted since (variable fonts, fluid scales, system font stacks). Even so, his reasoning about relative units has aged well.

**Use for LTF.**
1. Set lesson body text at 18 to 20px (1.125 to 1.25rem) with a measure capped near 65ch; the lesson column is a reading surface, not an app panel.
2. Use `font-variant-numeric: tabular-nums` on every changing number (airspeed, altitude, timers, quiz scores) so digits do not jitter.
3. Use oldstyle or proportional figures only in running prose; lining tabular figures in widgets and tables.
4. Define size, leading and measure as one system of tokens in `tokens.css`, expressed in rem.
5. Set `lang="en"` and enable hyphenation for narrow mobile columns instead of ragged-ugly justification.

## SantaMaria2014

**Core claims.** On Web Typography argues that web typography starts from how people read, not from typeface fashion. The chapters run from "How We Read" through anatomy, choosing and pairing typefaces, to hierarchy and composition. Santa Maria's central lesson is that typography is a set of decisions made to serve the reader on a particular device in a particular context, and that you only know whether they work by testing real content in the real browser.

**Specifics.** Key practical arguments (stated as I recall): (a) choose a typeface by testing it at actual size on actual screens, since the same face can be elegant at 60px in a specimen and clumsy at 16px; look at x-height, counter openness, letter spacing and the distinction between similar characters (I, l, 1); (b) pairing works from contrast and shared structure, usually two families at most, often one superfamily with a serif and sans of related skeleton; (c) hierarchy is built from a small number of levers (size, weight, case, color, spacing, position), and the fewer sizes you use the stronger the hierarchy; (d) respect the reader's flow, with rhythm and paragraph spacing set so the page reads as a series of designed units; (e) responsive layouts change type size and measure across breakpoints. He also stresses designing in the browser rather than in a graphics tool because the browser is the final rendering engine, and that web type should be treated as content that can reflow.

**Quotations.** None used.

**Criticism and status.** Written in 2014, when webfont loading was less settled and variable fonts were absent; the book therefore says less on performance, optical sizing and fluid scaling. It is judgement-based, so claims about "good" pairings are matters of taste and context, not measured outcomes.

**Further detail and reasoning.** The book opens with the argument that you cannot make good type choices without understanding reading: people do not read letter by letter in a slow, conscious way but in a flow of fixations and jumps, so type should avoid anything that interrupts the flow, such as irregular spacing, unclear letters or poor rhythm. Santa Maria is careful to separate legibility (can I tell the letters apart) from readability (is this text comfortable over time), and to say that both depend on context, device and reader. He describes anatomy only so designers can name what they see (x-height, ascender, counter, aperture, terminal), and then uses those terms to compare faces. On selecting type he recommends starting from the job: a long article, a short interface label and a banner each ask for something different, and a face that is excellent for one can fail in another. He also stresses practical constraints that were new to web designers in 2014: licensing, file weight, rendering differences and fallbacks. On composition, he teaches readers to see a page as a set of related blocks whose spacing and scale communicate importance, and to use contrast (in size, weight and color) deliberately rather than everywhere at once. The book is short on purpose; its limits are the absence of research evidence and of later tools. It remains a good model for how to write guidance that a non-specialist can act on.

**Use for LTF.**
1. Pick the lesson typeface by reading a full lesson paragraph in it on a laptop and a phone, not by looking at a headline specimen.
2. Limit the hierarchy to about five or six sizes and three weights, and make hierarchy through at least two levers at once (size plus weight, or color plus spacing).
3. A pairing needs a reason: for example a warm text serif for lessons and a more technical sans or mono for widgets and data, sharing x-height and proportions.
4. Treat Day and Night themes as separate rendering contexts; test weight and size in both (light text on dark appears bolder).
5. Always test with real lesson copy including numbers, units and callouts, not lorem ipsum.

## Brown2011MoreMeaningful

**Core claims.** In this A List Apart article Brown argues that web designers should build size, spacing and layout from a modular scale: a sequence of numbers related by a constant ratio, borrowed from music (octave 1:2, perfect fifth 2:3, and so on) and architecture, so that every dimension on the page has a harmonic relationship to the others. He makes the case that "meaningful" typography comes from deriving values from content and from a few chosen numbers instead of arbitrary pixel sizes.

**Specifics.** The method has two inputs: a ratio (such as 1.5, the perfect fifth, or 1.618) and one or more base values. Sizes are generated by repeated multiplication upward and division downward from the base. A base of 16px (the browser default) and ratio 1.5 yields 16, 24, 36, 54 going up and 10.67, 7.11 going down (computed, not quoted). The article introduces the "double-stranded" scale, where two bases (for example the body size and a second important number such as a column width or a larger size) each generate a strand and the union gives a richer set of values while keeping relationships. He suggests anchoring the scale on an "important number" tied to the content or layout, such as the body size at which the text looks best, or the width of an advertising unit. He also provided the ModularScale calculator (modularscale.com), which outputs px or em values. Values can be applied to type size, line height, margins and column widths alike.

**Quotations.** None used (wording not verified).

**Criticism and status.** Ratios of this kind are an aesthetic heuristic; no controlled studies show that harmonic scales improve reading or comprehension. They are most useful for consistency and decision-making. The golden-ratio claims often attached to these scales are mythical (see lane 04). Real interfaces also mix in sizes for components (labels, captions) that fall outside the scale, so teams usually apply the scale to type only and use a separate spacing scale.

**Further detail and reasoning.** Brown's rationale draws on a long tradition: classical proportions in architecture and musical intervals, and the practice of print typographers who restricted themselves to a limited set of sizes (the traditional series of point sizes grows in roughly geometric steps). He argues that when everything on a page relates by the same ratio, the viewer perceives order even if they cannot say why, and that the designer gains a defensible method instead of picking sizes by eye. He distinguishes the scale (a list of values) from the application: you still choose which values to use for which roles, and you can use scale values for more than font size, including line height, measure and margins, so type and space harmonize. The double-stranded scale answers a common objection, that a single base produces values that are too far apart or does not hit the sizes that content requires; with two bases the steps become more finely graded. He also encourages using ems so that nested sizes remain proportional. Criticisms: musical analogies are metaphors; the eye perceives size differences nonlinearly and interface components often need sizes that sit between scale values; and over-reliance on a calculator can lead to sizes that look fine mathematically but are poorly tuned for a given face (optical size and x-height differ among fonts). The practical position, which Brown himself later takes, is to treat the scale as a starting point and adjust by eye.

**Use for LTF.**
1. Pick a scale ratio (1.2 major third or 1.25 for dense UI; 1.333 for editorial headings) and generate all text sizes from it; tokens named by role, not by number.
2. Use a second strand for widgets: fixed instrument label sizes that do not follow the reading scale.
3. Reuse the same ratio for spacing so type and layout feel related.
4. Document the "important number" (body size) as the anchor, so changing it propagates.

## Brown2018Flexible

**Core claims.** Flexible Typesetting (A Book Apart no. 27, foreword by Jessica Hische) reframes typesetting for the web as a flexible system whose values are relative and adaptive, not fixed. Rather than prescribing set margins and point sizes, Brown talks in terms of ideas like pressure, tempo and focus. He recasts the modular scale as a tool that sets the rate at which sizes grow or shrink as conditions change, and treats any given size as a starting point.

**Specifics.** As I recall: the book covers choosing and tuning relative units (ems, rems, and viewport-based values) so type, leading and measure all scale together; setting the modular scale ratio to vary by breakpoint (a gentler ratio on small screens, a bigger one on large ones, so that headings do not overwhelm a phone); tying line height to measure and size (longer lines and smaller type need more leading, large display type needs less); adjusting for color and polarity (text on dark backgrounds often needs a little more leading and lighter weight perception); and using conditions such as container width, viewport and reading distance as inputs. Brown also discusses several different modular scales for different kinds of projects.

**Quotations.** None used.

**Criticism and status.** A practitioner framework, not experimental. Written before `clamp()`, container queries and variable-font optical sizing were widely supported, so it is conceptually right but its code is dated.

**Further detail and reasoning.** The central metaphors of the book are pressure, tempo and focus: a layout puts pressure on the type (container width, device, reader), tempo is the rhythm of sizes and spacing through a text, and focus is what the reader's attention lands on. Treating a type system as something that responds to pressure leads Brown to prefer ratios and relative units, and to a type scale whose ratio itself changes with the viewport rather than a fixed table of sizes per breakpoint. He also emphasizes that a font size is only meaningful together with line height, measure and the face's own proportions: a face with a large x-height looks bigger at the same nominal size and needs less size and more leading than one with a small x-height. He recommends testing sizes against real text and real devices, and notes that color, background and the user's environment change how type feels. The critique is that the book's tools (calc, viewport units) are now handled more cleanly by `clamp()` and container queries, and that the metaphors may feel abstract to teams who need a checklist. The strength is that it models type as a system of dependencies, which is the right way to specify a token set for a product with several contexts such as reading and glancing.

**Use for LTF.**
1. Make the scale ratio itself fluid: one ratio for mobile (about 1.2) and a larger one for desktop (about 1.25 to 1.333).
2. Tie leading to measure: tighter on short widget labels, looser in long lesson paragraphs.
3. Re-tune leading for Night theme instead of assuming Day values carry across.
4. Define "fly mode" (read at arm's length beside a simulator) as its own condition with larger type and shorter measure than lesson reading.

## Reichenstein2006

**Core claims.** Reichenstein's essay "Web Design is 95% Typography" (iA, 19 October 2006) argues that because roughly 95% of information on the web is written language, designers must be trained as typographers and the web designer's main job is to make text readable. A follow-up part and later essays ("Responsive Typography: The Basics", his 2013 Fronteers talk) refined the argument toward reading comfort across devices.

**Specifics.** Claims and practices associated with the essay and with iA's later work (as I recall): body text should be large enough to read without effort (iA argued for sizes larger than the 11 to 12px then common, with comfortable contrast and measure); set line length by what the eye can track and tie it to the font rather than the screen; use a consistent baseline rhythm; avoid low-contrast greys; and treat grid and rhythm as typographic, not graphic, tools. Reichenstein later stated in a 2013 talk that he did not know much about typography when he wrote it, and that he would have preferred the title "Webdesign is all about typography. Period." The "95%" is rhetorical, not a measured quantity.

**Quotations.** None used.

**Criticism and status.** Critics noted that interaction, images, video and data visualization are not text, so the claim is overstated for application interfaces; iA itself softened it. The core defensible point is that most interface functions (labels, instructions, numbers) are typographic.

**Further detail and reasoning.** The original essay was part of a movement that argued web design had over-invested in decoration and under-invested in text. Reichenstein's reasoning: if most of what a site offers is text, then the quality of the text experience is the quality of the site, and visual flourishes that make text harder to read are a net loss. In later pieces he developed this into a position on responsive typography: the unit of design is the reading experience, so type size and line length should be set by reading comfort at arm's or lap's length, not by the screen's pixel count, and the design should adapt as the device and its distance from the reader change. He advocated body sizes well above the then common small sizes and relative sizing so that the page respects the reader. He is also a supporter of strong contrast in text, but with softened extremes (very light grey text on white was a common failing). The criticisms are fair: the 95% number is invented; applications also depend on interaction, feedback and icons; and reading comfort is individual. A related caveat is that some of iA's own design (a single typeface, minimal hierarchy) suits a writing tool and may not suit an instructional app that needs strong wayfinding. Treat the essay as a historical and rhetorical anchor for text-first design, not as evidence.

**Use for LTF.**
1. Treat the interface as text: buttons, labels, hints, checklists and instrument readouts are all typography decisions and need the same care as lesson copy.
2. Raise default text contrast and size above generic app defaults; the generic look the owner dislikes often comes from small grey UI text.
3. Make reading a first-class state: a lesson page should be designed as a reading page, with fly mode as a separate glanceable page.

## Butterick2010

**Core claims.** Butterick's Practical Typography is a free online book of concise, opinionated rules for working typographers, with a ten-minute summary and a "summary of key rules" page. It stresses that most bad typography comes from a handful of defaults (cramped line spacing, tiny size, long lines, system fonts used without thought) and gives numeric ranges to avoid them.

**Specifics.** From the site: body text 10 to 12 points in print and 15 to 25 pixels on the web; line spacing 120% to 145% of the point size; average line length 45 to 90 characters including spaces (or about 2 to 3 lowercase alphabets, roughly 60 to 70 characters, as a comfortable target); as you reduce point size you should reduce line spacing and line length proportionally (the site says this explicitly); type is drawn inside the em box so fonts at the same point size do not look equally large, so adjust for each font. He recommends using real italics and small caps, avoiding all-caps for long text and adding letterspacing to capitals, avoiding underlining for emphasis, using one space after a period, and not using Times New Roman or Arial as defaults without thought. The "Screen-reading considerations" page discusses how screen type improved and that browsers render the same page differently.

**Quotations.** None used.

**Criticism and status.** The numeric ranges agree with general practice but are not experimental findings; the line length range is wider than some research would recommend for novice readers. The site is opinionated and favors specific commercial fonts.

**Further detail and reasoning.** Practical Typography is organized as a set of short pages: a ten-minute summary, then sections on text formatting (point size, line spacing, line length, font choice, text justification, hyphenation, headings), page layout, and a font recommendation list. A key conceptual point is that the best typographic improvements are the cheap ones: set a sensible size, a sensible line length and a sensible line spacing, and most of the page improves. He repeatedly asks the reader to test with their own eyes and to avoid defaults. On headings he advises restraint: use one or two levels, differentiate with size and weight, keep them close to the text they introduce, and avoid underlines and all caps. On layout he advises that line spacing and paragraph spacing should be consistent and that body text should be set ragged right unless hyphenation is good. On screens he notes that many readers will adjust the size, so tuning for the extreme is less valuable than getting the basic parameters right. His font advice favors fonts designed for text with robust italics and a range of weights. Criticisms: the site is categorical where research is often more equivocal; the line length and line spacing ranges are consensus rather than data; and it reflects the author's taste. However, it is among the most useful, concise statements of professional consensus and is easy to adopt as a baseline.

**Use for LTF.**
1. Adopt his body size as a floor: 17 to 20px for lessons, never below 16px for anything a learner must read.
2. Line spacing 1.45 to 1.6 for body, tighter (about 1.2) for headings and large numbers.
3. Cap measure near 65ch in lessons; allow wider only for tables.
4. Adjust size per font by x-height, because "same point size, different apparent size" is a real trap when swapping fonts across themes.

## Stein2017

**Core claims.** Webfont Handbook is the practical reference on delivering fonts: selection, formats, licensing, hosting, performance, rendering, OpenType features, language support and loading. Stein, who wrote the Font Face Observer library at Adobe Typekit, argues that webfont use is a performance and design decision together and has to be planned.

**Specifics.** As I recall: use WOFF2 (Brotli-compressed) with WOFF as a fallback, and drop older formats; subset fonts to the character sets needed with `unicode-range` so the browser only downloads the ranges used; choose fallback fonts whose metrics match the webfont so layout does not shift when the swap happens; understand FOIT (invisible text while loading) versus FOUT (flash of fallback text), and the staged "FOFT" approach (load a small Roman first, then italics and bold); self-host with long cache lifetimes; and treat font weight count as a cost (every style is a file). He explains font features (ligatures, numerals, small caps) and how hinting and rasterization differ by platform. The chapter excerpt on "Using Webfonts" covers fallback fonts and format ordering.

**Quotations.** None used.

**Criticism and status.** Some details are dated (2017): `font-display` and `size-adjust` now automate parts of what the book does manually; variable fonts reduce file count. Browser handling of preload and caching has shifted.

**Further detail and reasoning.** Stein's argument is that fonts are a dependency and should be treated like other assets: chosen with care, delivered efficiently and given a fallback. He explains how browsers render text (they must wait for a font to arrive, then re-layout), why that causes either invisible text or a visible swap, and how choices about format, subsetting, caching and the loading API change the experience. He covers the web font formats and why WOFF2 became the default, the issues of hosting on a third-party service versus your own server, and licensing (a font license may restrict page views, domains or self-hosting). The OpenType chapter explains features such as ligatures, numeral styles, small caps and stylistic sets, and that browsers support them through `font-variant-*` and `font-feature-settings`; if a font has been subset, features may have been removed, so subset carefully. He also describes language support: character coverage differs across fonts and fallbacks matter for names and special characters. The standard criticism is the book's age relative to new CSS features; however, its mental model of the pipeline (choose, license, subset, host, load, render) remains right and is the best checklist for a performance budget.

**Use for LTF.**
1. Ship one variable font file per family (roman, plus italic only if used) in WOFF2, subset to Latin; budget in the existing size check.
2. Choose a fallback stack whose metrics are close and use `size-adjust`/metric overrides to prevent layout shift.
3. Prefer a small number of styles; every extra weight costs a request.
4. Self-host to avoid a third-party DNS and privacy hit.

## Leatherman2016

**Core claims.** Leatherman's guide catalogs font loading strategies and argues that the default browser behavior (hiding text for up to about three seconds) harms readers. He recommends showing fallback text immediately (FOUT) and swapping, preferably using a staged approach (FOFT), and adopting `font-display`.

**Specifics.** Strategies: FOIT (default in older browsers), FOUT, FOFT (critical FOFT loads a subset Roman first via the Font Loading API, then the rest), and `font-display`. Per the CSS spec, `font-display: block` gives a short invisible period (about 3 seconds) then an indefinite swap; `swap` gives a near-zero block and an indefinite swap; `fallback` gives about 100ms block and a roughly 3 second swap window; `optional` gives about 100ms block and no later swap, so the font only appears if it loaded quickly. The guide, updated July 2017, notes that `font-display` is needed but not sufficient on its own, and recommends pairing it with `<link rel="preload" as="font" crossorigin>` (the `crossorigin` attribute is required even for same-origin fonts) so the file is requested early. It is not meant for icon fonts.

**Quotations.** None used.

**Criticism and status.** Evolving; the guide is updated and some advice (JavaScript font loading) is less necessary where `font-display` is supported. Preloading too many fonts can compete with critical resources.

**Further detail and reasoning.** The guide's reasoning is about user experience under bad networks: a reader on a slow connection should see words immediately, even if the face is temporarily wrong, since reading is the purpose of the page. FOUT is therefore a tolerable cost and FOIT is not. The FOFT approach reduces the visible jump by first loading a small Roman subset, so that body text swaps once with a relatively close shape and the italic and bold arrive later (browsers might otherwise synthesize fake versions). The guide discusses the Font Loading API (`document.fonts.load`), session storage or cookie flags to avoid re-doing the swap on repeat visits, and the trade-off between `swap` (always eventually uses the web font, at the cost of layout shift) and `optional` (stable layout, but the font may not show on the first visit). It also encourages matching fallback metrics so the shift is small, which later became possible with CSS descriptors. A caution is that different browsers had different timeouts and policies when the guide was written, so empirical testing on throttled connections is recommended. Use the guide for the vocabulary and the decision framework, and check current browser documentation for exact behavior.

**Use for LTF.**
1. Use `font-display: swap` for body (or `optional` for decorative display faces) with a metrics-matched fallback.
2. Preload only the one or two files used above the fold (body roman and the numeral face).
3. Never let instrument readouts or checklists be invisible while loading; use a system monospace fallback for numbers.

## Riethmuller2016

**Core claims.** Riethmuller shows how to make font size interpolate smoothly between a minimum and maximum across a viewport range using `calc()` and viewport units, so type is neither stepped at breakpoints nor unbounded. This is the basis of fluid type systems.

**Specifics.** The formula (as documented on his site): `font-size: calc(minSize + (maxSize - minSize) * ((100vw - minViewport) / (maxViewport - minViewport)))`. Example from the page: text goes from 20px to 40px as the viewport goes from 600px to 800px, with the size fixed outside that range by media queries. Equivalent modern form: `font-size: clamp(min, preferred, max)` where preferred is a rem plus vw mix. Pure viewport-unit sizing does not respond to browser zoom or user font settings, which hurts accessibility (WCAG 1.4.4 resize text), so the preferred value should include a rem term (for example `1rem + 0.5vw`) and the maximum should not exceed about 2.5 times the minimum (a guideline some accessibility reviewers cite).

**Quotations.** None used.

**Criticism and status.** Widely adopted, then superseded in syntax by `clamp()`. The concern about zoom and the max/min ratio is a recognized limit.

**Further detail and reasoning.** The key insight is that a linear interpolation between two sizes across a viewport range can be expressed as a line: size = min + (max - min) times the fraction of the way through the viewport range. Because `100vw` is the viewport width, the fraction is `(100vw - minVw) / (maxVw - minVw)`, and CSS `calc()` can compute the whole expression. Outside the range the size should be locked, which the original did with media queries and which `clamp()` now does in a single declaration. The approach matters because breakpoints produce stepped type that jumps at specific widths, whereas fluid type gives an exact, continuous relation between space and size. The limitations are important: a size defined only in viewport units ignores the user's font-size preference and, in some browsers, does not respond to zoom, which can fail the WCAG success criterion on resizing text; mixing a `rem` term fixes this. Another limitation is that fluid type applied to body text can produce odd sizes at in-between widths and interacts with line length. Many teams therefore apply fluid scaling to headings and display type and keep text at fixed rem sizes, or use a modest range such as 1rem to 1.125rem. Exact publication details of the original post remain to be confirmed.

**Use for LTF.**
1. Define each size token as `clamp()` between a mobile and a desktop value, with a rem term.
2. Keep fluid scaling for headings and display; body can stay at a fixed rem.
3. Do not scale instrument numerals fluidly beyond what the widget container allows.

## Apple2020WWDCTypography

**Core claims.** Apple's WWDC 2020 session "The details of UI typography" and the Human Interface Guidelines typography page explain how the San Francisco system fonts handle size. Different sizes need different letterform designs, so SF moved to variable fonts with dynamic optical sizes, merging the discrete Text and Display designs and weights into one continuous design. Text styles and Dynamic Type let users scale type across the whole system.

**Specifics.** HIG: system fonts support dynamic optical sizes, so you rarely need to pick Text or Display manually; tracking is size-dependent (looser at small sizes, tighter at large) and built into the font; WWDC22 added width styles (Condensed, Compressed, Expanded) and SF Compact for narrow columns and small sizes (watchOS). The HIG recommends system text styles, supports larger accessibility sizes, and advises testing layouts at all sizes. As I recall, the default iOS body size is 17pt, the minimum recommended size is about 11pt, and the HIG advises avoiding thin and light weights for small text (heavier weights are more legible). SF includes monospaced and proportional digit options for numerals.

**Quotations.** None used.

**Criticism and status.** Platform-specific, but the principles (optical size, tracking by size, text styles that scale) transfer. Wikipedia's claim that display size starts at about 20pt is not confirmed by Apple.

**Further detail and reasoning.** The WWDC session explains why one design cannot serve all sizes: at small sizes letters need wider spacing, larger apertures and sturdier strokes; at large sizes they can be tighter and more refined. Historically the same idea was handled by cutting different sizes of a typeface (text, caption, display). San Francisco historically shipped as two discrete designs (Text and Display) with a size threshold; the move to variable fonts lets the system interpolate continuously so there is no visible switch. The system also automates tracking by size (the tracking tables), so developers should not manually adjust letter-spacing for system text. Dynamic Type lets users choose a preferred reading size system-wide; a well-built app uses the text styles (large title, title, headline, body, callout, subheadline, footnote, caption) and scales layouts with them. The HIG also emphasizes hierarchy through weight and size, and consistent use of styles. For numerals, the monospaced-digit variants prevent changing values from shifting layout. For the web, the equivalent is `font-optical-sizing: auto` with a variable font that has an `opsz` axis, letter-spacing adjustments by role, and respecting the user's browser font-size. Caveat: the specifics are tied to Apple platforms.

**Use for LTF.**
1. Use a variable font with an `opsz` axis and `font-optical-sizing: auto` so small labels are sturdier and large headings are finer.
2. Tighten letter-spacing as size increases and loosen slightly for small caps labels.
3. Avoid light weights below 18px, especially in Night theme.
4. Give users a text size control, and test layouts at 200% size.

## Google2021Material3Type

**Core claims.** Material 3 defines a type scale of named roles (Display, Headline, Title, Body, Label), each in Large, Medium and Small, mapped to tokens, so components pick a role, not a size. This ensures hierarchy and consistency across a large product.

**Specifics.** Baseline values as I recall (sp, with line height): Display Large 57/64, Medium 45/52, Small 36/44; Headline Large 32/40, Medium 28/36, Small 24/32; Title Large 22/28, Medium 16/24, Small 14/20; Body Large 16/24, Medium 14/20, Small 12/16; Label Large 14/20, Medium 12/16, Small 11/16. Weights are Regular (400) for display, headline and body and Medium (500) for title and label. The default typeface is Roboto, with Roboto Flex available as a variable font. Material 3 Expressive adds emphasized variants (30 styles total in some descriptions). Wear OS adds a Numeral role. Tracking varies by role. The line height is about 1.4 to 1.5 times size for body and about 1.1 to 1.2 for display.

**Quotations.** None used.

**Criticism and status.** The scale is optimized for app UI, not long reading; body at 14 to 16sp is smaller than good reading text. Style counts vary across variants and platforms.

**Further detail and reasoning.** Material 3 organizes type by function. Display is for short, large, expressive text; Headline for high-emphasis short text; Title for medium-emphasis headings of sections or components; Body for long reading; Label for buttons, tabs and captions. Each role has three sizes so components can choose their level while staying inside the system. Each style defines font, weight, size, line height and tracking together, which prevents ad hoc combinations. Line heights are given as absolute values on a 4dp grid, which ties type to the layout grid. Material also introduced guidance on scaling with the user's font size and on responsive type, and in newer versions offers emphasized variants for stronger hierarchy. For web implementation Material 3 uses CSS custom properties named after roles. The system's value to LTF is the idea of a closed vocabulary: a developer chooses a role name rather than a size. The limitation is that it is a generic, widely recognizable look, which is exactly what the project owner wants to avoid; the structure is useful, the visual defaults are not.

**Use for LTF.**
1. Adopt role-based tokens (display, heading, title, body, label, numeral) instead of numeric sizes.
2. Add a Numeral role (tabular, larger, medium weight) for instrument values, as Wear OS did.
3. Keep two body sizes: reading (18px) and UI (14 to 15px).
4. Pair size with weight and tracking in the token so teams cannot recombine them ad hoc.

## W3C2018CSSFonts3

**Core claims.** CSS Fonts Level 3 is the standard that defines `@font-face`, font matching, `font-variant-*` properties, and low-level OpenType feature access. Levels 4 and 5 (still drafts) add variable font axes, `font-optical-sizing`, `font-display`, and metric overrides.

**Specifics.** Properties relevant to screens: `font-variant-numeric` with values `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal`, `slashed-zero`; `font-variant-caps` (`small-caps`, `all-small-caps`, `petite-caps`); `font-variant-ligatures`; `font-feature-settings` (low-level, overrides); `font-size-adjust` (keeps x-height constant across fallback fonts); `font-synthesis` (control fake bold and italic); `unicode-range` for subsetting. `font-feature-settings` should be a last resort; higher-level `font-variant-*` cascade better. `font-variation-settings` and `font-optical-sizing` (Level 4) control variable axes: the registered axes are `wght`, `wdth`, `slnt`, `ital`, `opsz`. `font-display` is defined in Level 4. `size-adjust`, `ascent-override` are in Level 5.

**Quotations.** None used.

**Criticism and status.** Level 3 status from memory; levels 4 and 5 are drafts but widely implemented. Support varies for some features.

**Further detail and reasoning.** The standard defines how the browser matches a requested font (family, weight, style, stretch) to available faces, how `@font-face` rules declare downloadable fonts (with `src` lists and format hints), and how character ranges can restrict a font to certain code points. It defines the shorthand `font` and the longhand `font-variant`, which groups ligatures, caps, numeric, east-asian and position settings. The numeric values are particularly useful: lining or oldstyle for the shape of the figures, proportional or tabular for the width, and diagonal or stacked fractions, ordinals and slashed zero as extras. When `font-variant-*` cannot express a feature, `font-feature-settings` accepts raw OpenType tags (for example `"ss01"`) and takes precedence, but it does not cascade as gracefully as the higher-level properties. `font-synthesis` controls whether browsers may fake bold, italic or small caps. `font-size-adjust` aligns the apparent size of fonts with different x-heights so fallbacks do not look noticeably smaller or larger. Level 4 adds variable-font controls (`font-variation-settings`, `font-optical-sizing`, `font-style: oblique <angle>`), `font-display`, and font technology hints in `@font-face`. Level 5 adds metric override descriptors. A writer should verify current support on a browser compatibility table before recommending specifics.

**Use for LTF.**
1. Set `font-variant-numeric: tabular-nums slashed-zero` on instrument and data readouts where the font supports it, to avoid confusing 0 and O.
2. Use `font-size-adjust` for the fallback stack.
3. Disable `font-synthesis` so missing weights are not faked.
4. Use `font-variant-caps: all-small-caps` for labels rather than uppercase text with ad hoc tracking.

## Lupton2004

**Core claims.** Thinking with Type is a critical guide organized into three parts, Letter, Text and Grid, with a theme that typography is a system of relationships. Lupton shows how hierarchy, spacing and alignment are made with a few levers and treats rules of thumb as starting points.

**Specifics.** As I recall: leading usually starts at about 120% of type size; hierarchy is made with size, weight, style, color and position; the text section covers kerning, tracking, paragraph spacing, alignment, and "hierarchy" (primary, secondary and tertiary levels); the grid section covers columns, modular grids and baseline grids. Chapters include exercises and practical advice on small sizes and screens in the later edition.

**Quotations.** None used.

**Criticism and status.** Print-centered; screen specifics are limited. Valuable as a framework for explaining hierarchy.

**Further detail and reasoning.** The book's structure moves from the smallest unit (the letter, including history, anatomy and the classification of typefaces) to text (kerning, tracking, leading, alignment, hierarchy and the paragraph) to grid (the page and the system). Its distinctive approach is critical: Lupton asks why typographic conventions exist and what they communicate, and frames rules as tools. On text, she covers the relationships among size, leading, line length and alignment, and the importance of a clear hierarchy (the reader should immediately know which element is primary), which she shows through before-and-after examples. She also treats type as a system built from a small set of variables, a view that matches the token approach in design systems. On grids she discusses columns, gutters, margins and modules, and how they create rhythm and consistency. The second edition added more content on the web and on type in screen environments, and the newer editions extend this. The book has also been criticized, as most introductions are, for being more descriptive than prescriptive and for print bias, but its clear examples make it good for training a team to see hierarchy.

**Use for LTF.**
1. Define three levels of hierarchy per screen type (lesson, widget, fly mode) and check each against the levers.
2. Use a baseline grid derived from the leading.
3. Teach consistent paragraph spacing: either indent or space, not both.

## Spiekermann1993

**Core claims.** Spiekermann's book is an accessible introduction to how type works, from the letterform up. It argues that type choice is functional, that legibility is distinct from readability, and that the best type is often unnoticed. The third edition (2013) adds screen considerations.

**Specifics.** Definitions: legibility concerns the distinguishability of characters, readability concerns how comfortably a text reads. He emphasizes x-height, counters, spacing and word shape; the title refers to a Goudy remark about letterspacing lowercase. Spiekermann designed FF Meta (1991) and Fira Sans (for Mozilla), a typeface with tall x-height, open counters and many weights, designed for small sizes on varied screens, illustrating his design principles.

**Quotations.** None used.

**Criticism and status.** The word-shape model of reading is contested in reading research (letter-by-letter parallel recognition is the accepted model, lane 02), so treat the "word shape" argument cautiously.

**Further detail and reasoning.** The book explains type from the user's perspective: it asks what type is for, shows how typefaces differ and argues that choosing a typeface is choosing a voice. It devotes space to the mechanics of text setting: letterspacing, word spacing, line spacing and line length, with the principle that these must be balanced for the reading situation. It discusses how reading depends on rhythm and on the even texture of text (a rhythm created by consistent spacing and stroke). Spiekermann's own typefaces illustrate the principles: FF Meta was designed to work at small sizes in poor reproduction; Fira Sans, designed with Carrois for Mozilla, aimed at legibility on diverse screens and low-resolution devices, with features such as large x-height, open apertures, and distinct numerals. His experience with signage and wayfinding (for example transit systems) underlies his view that legibility at a glance matters. The word-shape argument (that readers recognize whole word silhouettes) has been challenged by reading science, which supports parallel letter recognition, so the advice should be presented as craft intuition about spacing and rhythm, not as evidence for word shape. The book's longevity and accessible tone make it a good source for non-designers.

**Use for LTF.**
1. Choose a type for screens with tall x-height and open counters.
2. Choose a monospace or tabular numeric face for instruments with distinct 0/O and 1/l.
3. Separate legibility (instrument glance) from readability (lesson reading) when picking faces.

## Bigelow2019

**Core claims.** Bigelow reviews the research relating typeface features (x-height, stroke weight, serifs, letter and word spacing, letter shape) to legibility and shows that many classic assumptions are untested or inconsistent. Legibility depends on size relative to a reader's visual acuity, on spacing, and on distinguishability of letters.

**Specifics.** As I recall: character recognition near the acuity limit is limited by crowding (spacing matters as much as shape); critical print size and a range of comfortable sizes exist for reading speed; serif versus sans-serif has no consistent effect on legibility; x-height and spacing matter more at small sizes; disambiguating features for confusable letters (I, l, 1; O, 0) help; fonts for small sizes are designed with larger x-height, wider spacing and heavier strokes. The Legge and Bigelow 2011 review "Does print size matter for reading?" is related.

**Quotations.** None used.

**Criticism and status.** A review, with older evidence of mixed quality. I did not retrieve the abstract this session, so details should be checked.

**Further detail and reasoning.** The review's central point is that typeface legibility cannot be reduced to simple labels such as serif versus sans. Reading is limited at small sizes by visual acuity and by crowding, where neighboring letters interfere with recognition, so spacing, size and stroke contrast interact. Studies of single letter identification, reading speed and eye movements measure different things and do not always agree, so advice must say which outcome it targets. Many older experiments were confounded: they compared faces that differed in several properties at once, or measured at sizes and contrasts that are unlike current screens. The review distinguishes features that plausibly help (adequate x-height, open apertures, distinct confusable characters, adequate spacing at small sizes) from claims with little support (serifs as guides along the line). For screen display it notes that rendering technologies such as subpixel antialiasing and hinting alter apparent shape, so a face's printed design may not predict its performance. The practical conclusion for designers is to design and test for the target size, resolution, contrast polarity and reader population, and to read legibility claims critically. Details beyond this summary should be checked against the paper itself.

**Use for LTF.**
1. Do not justify a serif or sans choice by claiming it is more legible; choose by context and test.
2. Use wider spacing for small labels and numerals.
3. Use slashed or dotted zero, and distinct 1 and l, in instrument fonts.

## Lane synthesis

**Agreement.** The sources agree on a short list: body text on screens should be larger than the old 12px default (15 to 25px per Butterick; Reichenstein pushed the same direction); measure should be capped at about 45 to 90 characters (Rutter, Butterick, Lupton); leading should be roughly 1.2 to 1.5 of size and depend on measure and size; sizes should be relative (rem, ch) so user preferences apply; hierarchy should come from a small set of levers; and loading should never hide text. Corporate systems (Apple, Material) converge on role-based tokens with paired size, weight, tracking and leading.

**Conflicts.** Modular scales: Brown treats ratios as meaningful, while empirical support is absent and Material and Apple use hand-tuned values instead. Fluid type: Riethmuller's formula is powerful but conflicts with zoom accessibility unless a rem term is included. Word shape (Spiekermann) versus modern reading science. "95% typography" (Reichenstein) versus the reality of data and interaction. Loading: Stein and Leatherman prefer swap, while `optional` can avoid layout shift at the cost of inconsistent branding.

**Ten actionable takeaways.**
1. Define type as role tokens (display, heading, title, body, label, numeral) each carrying size, weight, tracking and leading.
2. Lesson body 18 to 20px, leading about 1.5 to 1.6, measure up to about 65ch.
3. Use a ratio scale (1.2 to 1.25 mobile, up to about 1.333 desktop) as a consistency tool, not as science.
4. Make headings fluid with `clamp()` using a rem term; keep body steady.
5. Use a variable font with optical size and set `font-optical-sizing: auto`.
6. Give every changing number `tabular-nums`; use slashed zero and disambiguated 1/l for instruments.
7. Create a dedicated Numeral role and a fly-mode scale larger than the reading scale.
8. Retune weight and leading for Night theme (light on dark looks heavier).
9. Ship WOFF2, subset, one or two preloaded files, `font-display: swap` with a metric-matched fallback.
10. Avoid thin weights below about 18px; test at 200% zoom and with user font-size changes.
