# Color: Science, Meaning and Access

Color is the design variable most often decided by taste and defended by folklore. This Part replaces both with what can be shown. It runs from the physics and physiology of color vision (why hue is a coarse signal and lightness a strong one), through the standards that measure color and the perceptual spaces that make token ramps behave, to the context effects that make a correct swatch look wrong on the page. It then tests the popular claims about color meaning against their replications, sets out what is known about color and emotion, preference and learning, and ends with the material that most directly governs the product: color vision deficiency, contrast standards, display polarity in light and dark themes, and color as a signal in alerts, status and data.

The evidence is uneven, and the grades say so. The physiology and colorimetry are among the most secure findings in this book: trichromacy, opponent processing, the non-uniformity of the CIE diagram and simultaneous contrast have been replicated for a century or more. The psychology of color meaning is the weakest: several headline effects (red lowers test scores, blue helps creativity, red wins fights) have shrunk to nothing in larger studies. Contrast thresholds are standards, graded C, with a modest experimental base on polarity and reading behind them. Every chapter applies its findings to Learn to Fly by name, and several of the applications rest on numbers computed this session from the values in `src/styles/tokens.css`: WCAG contrast ratios, Oklch coordinates and simulated color-deficient views of the status pairs. Use the rules as gates in review, and the closing decision list as the summary of what this Part settles for LTF.

## Light, Cones and Opponent Channels

### Color is made by the viewer

Newton's prism experiments established that white sunlight is a mixture of rays that differ in how strongly they bend, and that each ray carries a color no later refraction changes [@newton1704opticks]. Read in the 1704 printing, his central proposition is broad: all the colors made by light, and not by imagination, are either the colors of homogeneal lights or compounds of them. He describes the separated spectrum as violet, indigo, blue, green, yellow, orange and red, "with all their intermediate degrees in continual succession", and says there are as many degrees of color as there are sorts of rays [@newton1704opticks]. The seven names are labels laid on a continuum, not seven measured kinds of light.

Newton also gave the first rule for mixing. He divided a circle into seven arcs, placed a weight at the center of each arc in proportion to the amount of that color, and took the common center of gravity: its direction from the center gave the hue of the mixture, its distance the "fullness", and the center itself meant white [@newton1704opticks]. He admitted the rule was accurate enough for practice but not mathematically exact, that he could never make a perfect white from two primaries, and that red mixed with violet gives a purple that is not in the spectrum at all. Helmholtz later repeated Brewster's challenges to the prism results under tighter controls and found no departure from Newton's predictions [@helmholtz1924treatise].

What Newton placed in the light, Young placed in the eye. In his 1802 Bakerian Lecture, Young argued that if each sensitive point of the retina needed a separate particle tuned to every possible frequency, the retina would need an unlimited number of them, so "it becomes necessary to suppose the number limited, for instance, to the three principal colours, red, yellow, and blue" [@young1802theory]. Two details of that sentence matter. The triplet he named was red, yellow and blue, the painters' primaries, not the red, green and violet that popular accounts attribute to him; no source consulted for this book shows when or whether he changed it. And the receptors are broadly tuned: each can be moved "less or more forcibly" by frequencies "differing less or more from a perfect unison", which is already the idea of overlapping sensitivity curves [@young1802theory]. The argument was by economy, not by measurement, and priority is contested, since George Palmer proposed a three-particle retina in the 1770s and 1780s.

Helmholtz turned the hypothesis into a working framework. His Handbuch supported Young's suggestion with color-mixing measurements and color-blind observers, distinguished additive from subtractive mixing, and drew speculative sensitivity curves for three kinds of fibres, captioned in the English translation as red-sensitive, green-sensitive and violet-sensitive [@helmholtz1924treatise]. The curves overlap; they are not separate bands. He did not at first embrace Young's idea and became a proponent after Maxwell's color-disc work of 1855, and his results rested almost entirely on his own observations [@helmholtz1924treatise].

### Three cones, measured

The three-cone picture was confirmed physiologically in the twentieth century, and the current standard estimates of cone sensitivity come from Stockman and Sharpe [@stockman2000spectral]. Their method is worth knowing because it explains why the numbers are trusted. They measured observers who lack one cone class, so that the missing cone cannot contaminate the measurement of the other, and they genotyped those observers so that the photopigment each carried was known. The abstract reports M-cone data from nine protanopes and L-cone data from 20 deuteranopes; Stockman's later review gives twenty-two deuteranopes, and the discrepancy cannot be settled without the paper's own text [@stockman2000spectral]. The resulting cone fundamentals were sanctioned by the CIE in 2006 as physiologically relevant standards for mean normal color vision.

Three facts from this work bear on design. First, a single cone cannot signal wavelength: photon absorption is all-or-nothing, so each cone's response is "univariant", light is represented by three numbers, and any two lights that produce the same three cone responses match even if their spectra differ [@stockman2000spectral]. Such matching pairs are metamers. Second, every set of color-matching functions, for real or imaginary primaries, is a linear transformation of the cone fundamentals, which is why one good set of matching data can generate all the others. Third, the standard describes a mean observer. The commonest natural shift in the L-cone pigment is about 3 nm, caused by a single amino-acid substitution, and individuals differ in lens density, macular pigment and photopigment density in ways the standard does not capture [@stockman2000spectral]. Peaks quoted for the fundamentals (near 570, 543 and 442 nm for L, M and S in one citing source) differ from pigment peaks (near 560, 530 and 420 nm) because the fundamentals include the filtering of lens and macula.

::: {.rule #COL-001 grade="B"}
**Do not promise that a color on an LTF page matches the color a learner sees in the simulator.** Matching is a property of one observer and two spectra: lights that produce equal cone responses match for that observer and may not for another, and the standards describe only a mean observer whose lens, macular and pigment variation is not modeled [@stockman2000spectral]. Hunt and Pointer's treatment of metamerism and of precision in colorimetry exists because such claims fail in practice [@hunt2011measuring]. Wide-gamut monitors with narrow primaries widen the differences between observers.

*In LTF:* lesson copy and widget captions say "similar to" or "a simplified version of" the sim's display colors, never "the same as". The fixed instrument tokens (`arc-green`, `display-magenta` and the others) are drawing colors chosen for the widget, not reproductions of the simulator.
:::

### The second stage: opponent channels

Trichromacy explains matching but not appearance. Hering had observed that reddish greens and yellowish blues are never seen, although yellowish greens and bluish reds are common, and that staring at a red patch leaves a greenish afterimage. His hypothesis was that the three cone signals feed later stages organized in opposing pairs: red against green, yellow against blue, and a non-opponent black against white channel [@hurvich1957opponent]. Hurvich and Jameson gave the idea a quantitative footing with hue cancellation. For each wavelength the observer adds a cancelling light until one perceived hue disappears (green to cancel redness at short wavelengths, blue to cancel yellowness in the middle of the spectrum); the amount needed measures the strength of the cancelled hue, its chromatic valence, and plotting valence against wavelength gives the opponent curves [@hurvich1957opponent]. In the illustrative data reproduced in teaching accounts of the method, 450 nm carries a blue valence near minus 1.0 and a red valence near 0.2, which is why it looks violet; no single wavelength gives unique red, since even 700 nm needs a little blue to cancel its yellowness.

Opponency as a feature of visual processing is no longer in question; neural responses mirroring it were recorded from the 1950s. The stronger claim, that the psychophysical hue axes are the neural axes, is contested. A 2017 tutorial by Shevell and Martin (not itself in this book's bibliography, and reported here through the secondary accounts of the Hurvich and Jameson work) argues that unique hues vary between observers (especially blue, red and green), that they do not line up with the cone-opponent axes found in the retina and thalamus, and that there are no "red-green" or "blue-yellow" cells as such [@hurvich1957opponent]. One source gives a range of 490 to 555 nm for unique green across people. The modern synthesis, which also settled the Helmholtz and Hering dispute, is a two-stage model: three cone classes first, opponent recoding second [@helmholtz1924treatise; @hurvich1957opponent].

For a designer the two-stage model has three consequences, each of which recurs throughout this Part. The achromatic channel carries fine detail and does not depend on hue, so text and thin marks must be separated from their ground by luminance. The red-green channel is the one that fails in the commonest forms of color vision deficiency (see the chapter on color vision deficiency), so a red-green pair is the weakest two-way distinction a UI can rely on. And the receptors are broadly tuned, so hue is a coarse signal: small hue steps carry little.

::: {.rule #COL-002 grade="B"}
**Separate text, thin strokes and any must-see mark from its background by luminance contrast, never by hue difference alone.** The black-white opponent channel carries the detail that reading needs and is independent of hue [@hurvich1957opponent]. Buchner and Baumgartner found that red text on a green background, a hue contrast without a luminance contrast, could not compensate for the missing luminance difference in proofreading [@buchner2007text], and the WCAG Understanding document states that hue matters less than light-dark difference [@w3c2024wcag]. The limit: this governs legibility and detection of detail, not the coding of large areas, where hue can label categories.

*In LTF:* every text token pair is checked for luminance contrast (the chapter on contrast lists the computed ratios). A colored label such as the `text-accent` lesson code "Lesson 0.1" passes because `accent` (#00757c) is dark enough on `canvas` (5.03:1), not because teal differs from grey.
:::

::: {.rule #COL-003 grade="B"}
**Do not encode a quantity or a state in small hue differences; make hue steps large or add a second channel.** Young's receptors are broadly tuned and overlapping [@young1802theory], hue categories are labels on a continuum [@newton1704opticks], and efficient visual search for a color target needs a difference far larger than a just-noticeable one [@wolfe2004what]. Small hue shifts are therefore discriminable side by side under good conditions and unreliable at a glance on an unknown screen.

*In LTF:* the Day `caution` (#945a00, hue near 67 degrees in Oklch) and `tier-gold` (#906200, hue near 77) differ by about ten degrees of hue at nearly the same lightness; they are told apart only by their words and context, which must stay. No widget may show "slightly warmer" as a meaningful state.
:::

::: {.rule #COL-004 grade="B"}
**When a two-way distinction must rest partly on hue, prefer the blue and yellow axis to the red and green axis, and still add a non-color cue.** The commonest color vision deficiencies weaken the red-green opponent signal, while blue against yellow survives for red-green deficient viewers [@hurvich1957opponent; @machado2009physiologically]. Okabe and Ito, themselves protanopes, build their figure guidance on the same principle of varying hue and lightness along axes dichromats can still discriminate [@okabe2008color]. The axis choice reduces risk; it does not remove it, since tritan deficiencies, though rare, weaken blue against yellow.

*In LTF:* the product's own status pair is red against green (`warn` and `go`). Where a new binary indicator is drawn in a widget (for example "inside the target band" against "outside"), use the accent teal against an amber or ink state, with a shape change, rather than introducing another red-green pair.
:::

::: {.rule #COL-005 grade="C"}
**Keep large, saturated, high-luminance flashes out of dark full-screen views.** Hering's observation that a red patch followed by a neutral field leaves a complementary ghost is part of the evidence for opponent processing [@hurvich1957opponent]; a bright saturated patch on a dark screen, followed by the dark cockpit of a simulator, invites exactly that afterimage. The rule rests on a classical observation and on reasoning about the viewing situation, not on a test of web interfaces, hence grade C.

*In LTF:* the Fly mode random-event alert uses a `border-4 border-warn` frame on `bg-warn-tint` and a ring that pulses outward (`warning-pulse`) rather than a full-screen red fill. Keep it that way: the attention cue is the ring, the beep and the word, not a flood of saturated color across a dark screen.
:::

::: {.rule #COL-006 grade="C"}
**In learner-facing copy about vision, call the cones long-, middle- and short-wavelength cones, and describe color as made by the eye and brain, not as a property of light.** The cone names "red, green and blue" are shorthand for broadly tuned, overlapping sensitivities [@helmholtz1924treatise; @stockman2000spectral], and Young's own 1802 triplet was red, yellow and blue [@young1802theory]. Copy that says a cone "sees red" teaches a false model, and a beginner who holds it will expect color names on an instrument to be physical facts.

*In LTF:* a lesson on reading glass-cockpit colors, or a "Sim vs reality" `Callout` about monitor color, says that the same display can look different on two screens and to two people, and points to the label or position as the reliable cue.
:::

### How strong the evidence is

The physiological story in this chapter is grade A as science: three cone classes, confirmed by single-cone measurements and by the genotyped psychophysics behind the CIE fundamentals, and an opponent second stage confirmed by neural recordings [@stockman2000spectral; @hurvich1957opponent]. What is contested lies at the edges: which hue triplet Young meant, who has priority, whether unique hues correspond to neural axes, and how cone signals combine (the yellow-blue equilibrium locus is dog-leg shaped, suggesting a nonlinear combination). None of those disputes changes the design consequences. The rules above are graded B or C not because the physiology is weak but because the step from physiology to a specific interface choice is an inference, supported by experiments such as Buchner and Baumgartner's [@buchner2007text] rather than tested directly on LTF's screens.

One more consequence of trichromacy is a hard limit on reproduction. Because screens mix three primaries additively, they can only show colors inside the triangle those primaries span; Newton's center-of-gravity rule already implied that a mixture lies between its components [@newton1704opticks]. Spectral colors and some saturated simulator renderings simply cannot be shown on an sRGB page, a point the chapter on perceptual color spaces turns into a rule about gamut mapping.

### What this means for Learn to Fly

**Keep.** The token system already separates luminance from hue in the way this chapter requires. The ink ladder (`ink`, `ink-2`, `ink-3`) is near-neutral at Oklch chroma of about 0.003 in both themes, so all ordinary reading text is carried by luminance alone. The single saturated non-status color, `accent`, is dark enough in Day (#00757c, 5.03:1 on `canvas`) and light enough in Night (#56d3da, 10.30:1 on the Night `canvas`) to work as text. The quiz result in `QuizBlock` pairs `text-go` with a `CheckCircle2` icon and the word "Correct!", and `text-warn` with an `XCircle` icon and "Not quite.", so the red-green pair never stands alone.

**Change.** The status pair `go` and `warn` in Day differ almost only in hue: computed this session with the WCAG relative-luminance formula, `go` (#006c43) and `warn` (#b71824) have a luminance ratio of only 1.02 to each other. To the achromatic channel they are the same grey. That is acceptable only because every use carries an icon or a word, so treat the icon and word as mandatory, never optional, in `Badge`, `Callout`, `Toast` and `FormField` errors. The `PasswordStrengthMeter` colors its bar with `bg-warn`, `bg-warn`, `bg-caution`, `bg-go`, `bg-go`, a red-to-green ramp for an ordered quantity; it must show its strength word beside the bar (COL-003, COL-004).

**Build.** Add a short "Sim vs reality" explainer to Module 0 that tells learners their monitor, room light and own eyes all change what a color looks like, and that the app always names or labels what a color means (COL-001, COL-006). Add an authoring rule to `content/README.md` that lessons never describe cones by color names.

## Measuring Color: Standards, Order and Difference

### The 1931 standard observer

In 1931 the Commission Internationale de l'Eclairage adopted a way to specify a color by three numbers, so that two lights with the same numbers match for a standard observer. Smith and Guild's long paper in the Transactions of the Optical Society explained the system and its use, covering the trichromatic method, new colorimetric terms and the theory of transformations between primaries [@smith1931cie]. The data underneath came from matching experiments in the late 1920s by W. David Wright with ten observers and John Guild with seven, who matched test colors with three primaries at 700, 546.1 and 435.8 nm in a field two degrees across [@smith1931cie]. That field size is why the result is called the 2-degree standard observer; it was tied to the belief that the color-sensitive cones lay within about two degrees of the fovea.

Matching with real primaries needs negative amounts of some primary for many test colors. The CIE transformed the data to imaginary primaries X, Y and Z so that all matching functions were non-negative, which simplified calculation by hand [@smith1931cie]. Two choices from that transformation shape every web color tool. The y function was set equal to the photopic luminous efficiency function V(lambda), so Y is luminance. And chromaticity was defined by normalizing away intensity: x = X/(X+Y+Z), y = Y/(X+Y+Z), with z = 1 − x − y, and equal-energy white at x = y = z = 1/3 [@smith1931cie]. The transformations are valid only because color matching is linear and additive, as stated in Grassmann's laws, which have been tested extensively and hold well.

The standard's limits are well documented. It holds for small foveal fields, which is why a 10-degree supplementary observer followed in 1964. It describes additive mixing only. The short-wavelength end of the luminosity function was later corrected by Judd and by Vos. Stockman argues that the 1931 functions inherit a flawed 1924 V(lambda) that underestimates luminance at short wavelengths, a view to read knowing that he is an author of the competing cone-based standard [@stockman2000spectral]. And, most important for design, distances on the xy diagram do not correspond to perceived differences.

### Equal distances are not equal differences

MacAdam measured how precisely a trained observer could match one color to another [@macadam1942visual]. The observer viewed a fixed test color and adjusted a second field to match it, repeatedly; the standard deviation of the matches, plotted on the CIE chromaticity diagram, formed an ellipse around each target. The abstract states the finding: small, equally noticeable chromaticity differences are represented by the radii of a family of ellipses, and those ellipses vary greatly in size and orientation across the diagram [@macadam1942visual]. The test field was held at constant luminance (15 millilamberts on a 7.5 millilambert surround, per the abstract) under Illuminant C. Secondary accounts report 25 color points and a single trained observer; those details are secondhand.

The famous plot draws the ellipses at ten times their true size. If matches follow a bivariate normal distribution, a 1X ellipse contains about 39 percent of matches, a 2X about 86 percent and a 3X about 99 percent, and the just-noticeable chromaticity difference is generally taken as about the 3X ellipse [@macadam1942visual]. Lighting engineers still describe the color precision of a lamp in "standard deviations of color matching" defined on these ellipses.

The qualitative result has been replicated by every later study: Brown and MacAdam extended it to ellipsoids including luminance in 1949, and others followed [@macadam1942visual]. No transformation can turn all the ellipses into equal circles, and the later uniform spaces (CIE 1960 UCS, CIELUV, CIELAB) only reduced the spread. The original data set is small by modern standards, one observer and a 2-degree field, so the specific ellipses are not universal thresholds; discrimination ellipses stayed relatively unchanged for luminances between 3 and 30 cd/m², which says nothing about very dim interface states.

::: {.rule #COL-007 grade="A"}
**Never judge how different two colors look by their distance in RGB, hex, HSL or CIE xy; use a perceptual difference measure.** MacAdam's ellipses vary widely in size and orientation across the chromaticity diagram, so equal distances there are not equal visual differences, and this has been replicated by every later study; even the later uniform spaces only reduce the problem [@macadam1942visual; @smith1931cie]. RGB and HSL are device encodings and inherit the same non-uniformity.

*In LTF:* when comparing tokens (whether `ink-2` and `ink-3` are far enough apart, whether two chart series are distinct), compute the difference in Oklab or with CIEDE2000, never by eyeballing hex values or a color picker's HSL sliders.
:::

::: {.rule #COL-008 grade="B"}
**Make any two states that must be told apart at a glance differ by many just-noticeable steps, not one or two.** MacAdam's thresholds were measured with a trained observer matching adjacent fields under laboratory conditions [@macadam1942visual]; a beginner scanning a busy screen beside a simulator is far from that. Wolfe and Horowitz add that efficient color search needs differences much larger than a MacAdam ellipse, and that the efficient region does not even look like a scaled ellipse [@wolfe2004what]. The rule is graded B because the threshold for "at a glance" on LTF's screens has not been measured.

*In LTF:* the Day tier tokens `tier-gold` (#906200), `tier-silver` (#5f6469) and `tier-bronze` (#8c5331) sit within 0.03 of each other in Oklch lightness (0.53, 0.50 and 0.50, computed this session), and gold and bronze are only about 0.06 apart in Oklab. As rings they are near-identical in lightness; the printed tier word and the ring shape carry the distinction, and must continue to.
:::

### Color order: hue, value and chroma

Munsell's contribution was to insist that every color has three independent qualities and to measure them [@munsell1907color]. Hue is the quality that distinguishes a red from a yellow; value distinguishes a light color from a dark one; chroma is the "strength of color", which separates a strong color from a weak one at the same hue and value. He called "intensity" a misleading synonym for chroma. Two dimensions are not enough: diagrams of hue and value that leave out chroma are, in his comparison, as incomplete as a map of Switzerland with the mountains left out [@munsell1907color].

His solid has white at the north pole, black at the south, a neutral grey axis between, and chroma running outward from the axis. Five principal hues (R, Y, G, B, P) and five intermediates give ten hue names, which he thought as many as a child could handle at the outset; value runs from 0 for black to 10 for white. The notation is hue, then value over chroma: vermilion is R 5/9, a buttercup YR 7/9, a wild violet B 3/4 [@munsell1907color]. The buttercup is more stimulating than the violet partly because it is lighter and partly because its chroma is five steps higher. And because pigments differ in the chroma they can reach, the true solid is an irregular "color tree" with branches of unequal length: the maximum chroma available differs by hue.

Munsell's own spacing was set by his judgment. The Optical Society's committee (Newhall, Nickerson and Judd, 1943) renotated the system by new visual estimates and defined it in CIE terms under Illuminant C, aiming at psychological equal spacing; later renotations proposed alternatives, and one source holds that a system built on radiating polar coordinates can never be completely uniform [@munsell1907color]. His physical explanations, such as value as the height of "ether waves", belong to his time and should not be cited. The three-quality model, and the irregular solid, have lasted.

::: {.rule #COL-009 grade="C"}
**Specify every design color by three perceptual coordinates (lightness, chroma and hue), and decide each one deliberately.** Munsell's demonstration that hue and value without chroma describe only part of a color [@munsell1907color] is reinforced by the color-psychology literature's complaint that chroma has been almost entirely overlooked and that device-level color specification confounds the dimensions [@elliot2014color]. Grade C: this is a craft and standards consensus about specification, not an experimental finding.

*In LTF:* the token comments in `tokens.css` describe roles ("one saturated non-status color, the horizon line") but the values are hex. Each token's usage note should record its Oklch triplet, as tabulated in the chapter on perceptual color spaces, so a reviewer can see that `accent` is a medium-lightness, moderate-chroma teal and not just "#00757c".
:::

### Computing difference correctly

The industrial standard for small color differences is CIEDE2000, published by the CIE in 2001. Sharma, Wu and Dalal showed that implementing it is harder than it looks [@sharma2005ciede2000]. The formula rescales the a* axis using the mean chroma, computes lightness, chroma and hue differences each divided by a weighting and a parametric factor, and adds a rotation term that matters mainly in the blue region, around 275 degrees of hue. Its worked examples in the CIE report were too few to catch mistakes: several implementations circulating on the Internet, including some from reputable sources, agreed with those examples and were still wrong.

The paper lists the traps. Use a four-quadrant arctangent and convert hue to 0 to 360 degrees. Compute the chroma and hue differences as signed quantities; using absolute values breaks only the cross term, an error that is hard to see because it is localized in the blue region. Handle the mean hue carefully, since a literal reading of the published equations can give angles above 360 or below zero, and most implementations of the time got this wrong. Check symmetry by swapping the two colors. The authors supply 34 test pairs designed to exercise exactly these cases (pairs 1 to 6 for the signed differences, 7 to 16 for the arctangent and mean hue, 17 to 20 for large differences, 25 to 34 reproducing the published data), and recommend agreement to four decimal places [@sharma2005ciede2000].

They also document small discontinuities. The main one arises when two hue angles about 180 degrees apart are averaged and the mean flips; at chroma 2.5 the largest jump in the difference is 0.2734, which the authors call relatively small but not negligible [@sharma2005ciede2000]. The discontinuities rule out gradient-based optimization over the formula. The paper addresses computation only, not whether the formula matches perception, and the formula is meant for small differences.

::: {.rule #COL-010 grade="C"}
**Verify any color-difference code against Sharma, Wu and Dalal's 34 test pairs before trusting its output, and do not optimize palettes by gradient descent on CIEDE2000.** Implementations that matched the CIE's own examples were still wrong, and the formula has discontinuities that break continuous optimization [@sharma2005ciede2000]. For palette search, use a continuous space such as Oklab [@ottosson2020perceptual]. Check the license of any reference code before copying it; the author's page provides it as is and says it is not an official CIE implementation.

*In LTF:* if a palette check is added to the test suite (a script that warns when two chart or status tokens are too close), use a library that publishes its CIEDE2000 validation, or use Euclidean distance in Oklab, and keep the test pairs as fixtures.
:::

### The measurement side of the subject

Fairchild's Color Appearance Models and Hunt and Pointer's Measuring Colour are the two references a team should own when a defensible number is needed [@fairchild2013color; @hunt2011measuring]. Hunt and Pointer's stance is that measuring color involves the observer's physiology and psychology, not only instruments, and their chapters map onto LTF questions: RGB colorimetry for describing display primaries, metamerism and color constancy for why a sim screenshot and a web color diverge across monitors, precision and accuracy before anyone claims a color is "exactly" the sim's, and color order systems for naming [@hunt2011measuring]. Neither book is a source for aviation color conventions, which must come from aviation documents.

::: {.rule #COL-011 grade="C"}
**Base every contrast and legibility calculation on relative luminance (CIE Y, linearized), never on lightness coordinates, saturation or perceived brightness.** In the CIE system Y was defined as luminance by setting the y function equal to V(lambda) [@smith1931cie], and the WCAG contrast ratio is computed from relative luminance with linearized channels [@w3c2024wcag]. Perceptual lightness (Oklab L, CIELAB L*) is a different quantity designed for spacing, not for the standard's contrast test [@ottosson2020perceptual].

*In LTF:* the contrast check for `tokens.css` linearizes each sRGB channel and weights them 0.2126, 0.7152 and 0.0722 before applying the ratio; the Oklch table is used only for ramp spacing.
:::

::: {.rule #COL-012 grade="C"}
**Cite a color-science source for any color-science fact stated in a lesson or component note, and never copy formulas into tokens from memory.** The facts in this chapter are easy to garble (Young's triplet, the meaning of Y, the status of the 1931 functions), and the reference works exist to settle them [@hunt2011measuring; @fairchild2013color]. Grade C: an evidence-discipline rule.

*In LTF:* a "Sim vs reality" callout that explains why the PFD looks different on a phone cites this Part or Hunt and Pointer; a code comment that defines a color formula links its source.
:::

### What this means for Learn to Fly

**Keep.** The token system already defines colors by role and holds them constant within a theme, which is the precondition for measuring them. The fixed instrument and chart tokens are deliberately separate, so their measurement can be done once.

**Change.** Hex values alone hide the perceptual structure. The Day ink ladder shows why: `ink-2` (#595856) and `ink-3` (#6a6967) are 0.06 apart in Oklch lightness (0.46 and 0.52) and give 6.53:1 and 5.04:1 on `canvas`. Two text levels that close are a distinction few readers will perceive, which is a reason either to widen the gap or to retire one level (COL-007, COL-008). The tier rings in `Badge` and the landing tier legend should never be shown without their words, since gold, silver and bronze in Day share almost one lightness (COL-008).

**Build.** Add a small script under `scripts/` (or a test beside the tokens) that parses `tokens.css`, converts each token to Oklch, computes the WCAG ratio for each declared text and ground pair, and computes Oklab distance for pairs that must be distinguishable (status pairs, tier pairs, chart series). Use Sharma's pairs as fixtures if CIEDE2000 is used (COL-010, COL-011). Store the output as a generated table so that design review reads numbers, not swatches.

## Perceptual Color Spaces and Token Ramps

### Why a perceptual space

A design system needs a color space in which simple operations behave: stepping lightness evenly, changing chroma without shifting hue, blending two colors without a muddy middle. Device spaces (sRGB, HSL, HSV) fail at all three, because they encode what a display emits, not what a viewer sees. The CIE answered with CIELAB and CIELUV, and color science went on to full appearance models (CIECAM02, CAM16) that account for adaptation, surround and luminance [@fairchild2013color]. Fairchild's book teaches why viewing conditions matter and what a model must predict; it also shows, by devoting a chapter to testing models and another to the question "why not just CIELAB", that no model is accepted as complete [@fairchild2013color]. CIECAM02 has documented numerical problems under extreme blue adaptation, which CAM16 was designed to fix.

For a web app, the appearance-model machinery is too heavy for runtime use. The practical choice is Oklab, introduced by Björn Ottosson in a 2020 technical post [@ottosson2020perceptual]. His assessment of the alternatives, as written: CIELAB and CIELUV predict hue poorly, especially for blues; CAM16-UCS is good overall but numerically poorly behaved, not scale invariant, and compresses chroma in a way that hurts blending; IPT has excellent hue uniformity but poor lightness and chroma prediction; HSV fails nearly every requirement. Oklab keeps IPT's simple structure while aiming at CAM16-level lightness and chroma prediction [@ottosson2020perceptual].

### How Oklab was built, and what it does not do

The derivation used three data sets: equal-lightness and equal-chroma pairs generated with CAM16 under normal viewing conditions and limited to Pointer's gamut, and uniform-hue pairs from the IPT data [@ottosson2020perceptual]. The transform has three steps: a matrix from XYZ to an LMS-like cone space, a cube root on each component, and a second matrix to L, a and b. The fitted exponent came out at 0.323 and was fixed at one third; D65 white maps to L = 1 with a = b = 0, and positive b points to the same yellow as CAM16. Oklch is the polar form, with chroma C as the length of (a, b) and hue h as its angle. In the root-mean-square errors on the page, smaller being better, Oklab scores 0.20 on lightness against CIELAB's 1.70, 0.81 on chroma against 1.84, and 0.49 on hue against 0.69 (with JzAzBz best at 0.43) [@ottosson2020perceptual].

The limits are stated by the author and matter for design. There is no peer-reviewed validation in what the research for this book found. The lightness and chroma test data were generated by CAM16, not collected from observers, so the page cannot show which model best matches human perception. Oklab claims perceptually orthogonal coordinates, not exact spacing along each axis. It is exposure invariant and does not model viewing conditions such as the background color; it is designed for a well-lit viewing condition. And sRGB has an awkward shape in Oklab, so editing in Oklch easily produces colors the screen cannot show [@ottosson2020perceptual]. CSS Color Module Level 4 defines `oklab()` and `oklch()`, and browser support reached baseline status in 2023.

The starting matrix is a cone-like space, which is no accident: every color-matching system is a linear transform of the cone fundamentals [@stockman2000spectral], and Oklab builds on that physiology before its nonlinearity.

### LTF's tokens in Oklch

The following values were computed this session from the hex values in `src/styles/tokens.css`, using Ottosson's published transform. L is lightness from 0 to 1, C is chroma, h is hue in degrees.

| Token | Day (L, C, h) | Night (L, C, h) | Note |
| --- | --- | --- | --- |
| `canvas` | 0.97, 0.003, 68 | 0.19, 0.004, 107 | warm-neutral ground |
| `surface` | 1.00, 0.000 | 0.24, 0.004, 85 | cards |
| `ink` | 0.20, 0.004, 85 | 0.94, 0.003, 85 | body text |
| `ink-2` | 0.46, 0.003, 85 | 0.76, 0.003, 85 | supporting text |
| `ink-3` | 0.52, 0.003, 85 | 0.66, 0.003, 85 | meta text |
| `accent` | 0.51, 0.087, 202 | 0.80, 0.110, 200 | the horizon line |
| `accent-line` | 0.63, 0.107, 202 | 0.74, 0.126, 200 | underlines, connector |
| `go` | 0.47, 0.108, 159 | 0.82, 0.130, 162 | status |
| `caution` | 0.52, 0.115, 67 | 0.85, 0.140, 85 | status |
| `warn` | 0.50, 0.190, 25 | 0.76, 0.146, 25 | status |
| `tier-gold` | 0.53, 0.111, 77 | 0.84, 0.130, 85 | tier |

Three patterns are visible. The greys are genuinely neutral (chroma near 0.003) and the hue is held near 85 degrees, so the ink ladder is a clean lightness ramp. The Day status colors cluster at L between 0.47 and 0.52, so `go`, `caution` and `warn` differ in hue and chroma but hardly in lightness. And `warn` in Day carries by far the highest chroma in either theme (0.190), which makes it the loudest token in the system; that is correct for a warning and a problem wherever `warn` is used for anything else (see the chapter on color as signal).

The Night ink ladder has a different shape from the Day one. In Day the steps from `ink` to `ink-2` to `ink-3` are 0.26 and then 0.06 in L; in Night they are 0.18 and then 0.10. The tertiary level is better separated in Night than in Day.

::: {.rule #COL-013 grade="C"}
**Author theme ramps in Oklch: hold hue constant within a ramp, step lightness in planned increments, and set chroma by role.** Oklab's lightness and chroma predictions are far closer to the CAM16 reference than CIELAB's, and its hue prediction is better too [@ottosson2020perceptual]; Munsell's three qualities are the model being implemented [@munsell1907color]. Grade C because Oklab itself lacks independent perceptual validation, and the rule is a practice built on it.

*In LTF:* the ink ladder is already a hue-held ramp. New ramps (a chart sequential scale, a dark-theme surface ladder) are written in `oklch()` in `tokens.css`, with the intended L steps stated in the comment.
:::

::: {.rule #COL-014 grade="B"}
**Cap chroma separately for each hue rather than applying one saturation value across a palette.** The maximum chroma reachable differs by hue (Munsell's irregular color tree), so a vivid yellow and a vivid blue cannot be balanced at equal chroma or equal area [@munsell1907color]; the sRGB gamut is irregular in Oklab, so a uniform chroma target produces out-of-gamut colors for some hues [@ottosson2020perceptual]. Grade B: the hue dependence of maximum chroma is long established, though its application to a UI palette is practice.

*In LTF:* the Night status tokens already vary chroma by hue (`go` 0.130, `caution` 0.140, `warn` 0.146). When the palette is extended, set each new hue's chroma from what the sRGB gamut allows at the target lightness, not from a shared number.
:::

::: {.rule #COL-015 grade="C"}
**Never use a difference in Oklab or CIELAB lightness as a substitute for the WCAG contrast ratio.** Perceptual lightness is designed for even spacing, while the standard's contrast test is defined on relative luminance with a flare term [@w3c2024wcag; @ottosson2020perceptual]. The two disagree most for dark colors, where a small luminance difference can be a large lightness difference.

*In LTF:* the Night `canvas` (L 0.19) and `line` (L 0.34) are 0.15 apart in lightness, which looks generous, yet their contrast ratio is only 1.57:1. The ramp tool may plan in L; the gate is always the ratio.
:::

::: {.rule #COL-016 grade="C"}
**Map out-of-gamut colors by reducing chroma at constant hue and lightness, never by clipping channels.** Clipping changes the proportion of primaries and shifts hue; the stated goal is to avoid hue shifts while reducing chroma as little as possible [@ottosson2020perceptual]. Editing in Oklch makes out-of-gamut values easy to produce, so the mapping must be explicit.

*In LTF:* any token authored in `oklch()` is checked against the sRGB gamut in the token script; if out of gamut, its chroma is lowered until it fits and the resulting hex is recorded, so that browsers do not each clip it differently.
:::

::: {.rule #COL-017 grade="C"}
**Interpolate gradients and color transitions in Oklab, not in sRGB.** Oklab was built so that blends and gradients behave, and its structure avoids the chroma compression that hurts blending in CAM16-UCS [@ottosson2020perceptual]. CSS can request the interpolation space directly.

*In LTF:* the product uses few gradients; where `color-mix()` appears (the `warning-pulse` keyframes mix `warn` toward transparent "in srgb"), mixing in oklab would keep the ring's hue stable as it fades. This is a minor refinement, not a defect.
:::

::: {.rule #COL-018 grade="C"}
**Name tokens by role and let each theme map roles to values; never let components reference raw values.** Carbon's color system expresses every color as a role-based token so that the same component renders correctly in four themes without code changes, with groups such as background, layer, border, text, support and focus [@ibm2026carbon]. Grade C: vendor documentation of a practice, not research.

*In LTF:* `tokens.css` already does this (`canvas`, `surface`, `ink`, `accent`, `go`, `caution`, `warn`), and the AGENTS rule forbids raw hex in components. Keep the fixed instrument and chart tokens as the only exceptions, documented as such.
:::

::: {.rule #COL-019 grade="C"}
**Keep adjacent levels of a text or surface ramp at least about 0.08 apart in Oklch lightness, or merge them.** Distinctions smaller than many just-noticeable steps are not reliably seen in use [@macadam1942visual; @wolfe2004what], and a ramp level that cannot be told from its neighbor adds a token without adding a distinction. The 0.08 figure is a working threshold chosen for this product, not a published value; tune it by review, which is why the grade is C.

*In LTF:* Day `ink-2` and `ink-3` are 0.06 apart; Night `ink-2` and `ink-3` are 0.10 apart. Either lighten Day `ink-3` toward the 4.5:1 floor on `surface-sunken` (it is 4.73:1 there now, so the room is small) or fold `text-ink-3` (23 uses) into `text-ink-2` and keep three levels only in Night.
:::

### Viewing conditions the space ignores

Fairchild's catalogue of appearance phenomena is a checklist of what Oklab does not model [@fairchild2013color]. The Hunt effect is an increase in colorfulness with luminance, first described by R. W. G. Hunt in 1952: the same token looks more colorful on a bright screen than on a dimmed one. The Helmholtz-Kohlrausch effect is that a saturated stimulus looks brighter than an achromatic one of the same luminance, which is one reason a saturated `warn` button looks heavier than its luminance suggests. The Bezold-Brücke effect is a hue shift with intensity: most colors look less red or green and more blue or yellow as illumination increases [@fairchild2013color]. Chromatic adaptation and the surround change everything again. These effects are why a palette built in a perceptual space still has to be reviewed on real screens at real brightness, in the next chapter's terms.

### What this means for Learn to Fly

**Keep.** The neutral ink ladder, the role names, and the decision to vary chroma by hue in Night are sound. The Night palette is lighter for accents and keeps their hue (accent near 200 degrees in both themes, `warn` at 25 in both), which preserves identity across themes.

**Change.** Record Oklch values next to each token in `tokens.css` comments (the table above is a start), and resolve the Day `ink-2` and `ink-3` collision (COL-019). Plan in Oklch, gate on the WCAG ratio (COL-013, COL-015).

**Build.** Extend the token script proposed in the previous chapter to emit the Oklch table, flag gamut problems for any `oklch()` token, and report lightness gaps between adjacent ramp levels (COL-016, COL-019). If a chart palette or a sequential scale is added for the dashboard, define it in Oklch with a monotonic L and per-hue chroma caps (COL-013, COL-014).

## Context: Simultaneous Contrast and the Surround

### A dye that was not at fault

Chevreul's book begins with a workplace complaint. As director of dyeing at the Gobelins tapestry works he was told that the blacks used to shade blue and violet draperies lacked vigor [@chevreul1872principles]. Black wools bought from other workshops were no better. The weakness was not in the dye: it came from the color next to the black, a phenomenon of contrast. He concluded that he had two subjects, the chemistry of dyeing and the contrast of colors, and spent about ten years on both. His central statement is the law of simultaneous contrast: when the eye sees two contiguous colors at once, they appear as dissimilar as possible, both in optical composition and in height of tone [@chevreul1872principles].

He separated the effect into two parts. Placing two stripes side by side, either two tones of one color or one tone of two colors, the eye perceives changes in the intensity of each (contrast of tone) and in its optical composition (contrast of color), provided the stripes are not too wide. The translator's introduction to the English edition tabulates what happens to red: against blue it looks yellower, against yellow bluer, against green purer and brighter, against black duller, against white lighter and brighter, and against grey brighter [@chevreul1872principles]. He also described successive contrast (looking at a color calls up its complementary) and mixed contrast (the called-up color adds to a following one and dulls it). He applied the law to painting, tapestry, carpets, mosaics, printing, map coloring, dress and gardening.

Three qualifications keep Chevreul current. The existence of simultaneous contrast is robust, and Fairchild lists it first among appearance phenomena [@fairchild2013color]. But the rule that neighbors always become more dissimilar is too strong: in some displays assimilation occurs instead, with narrow luminance transitions producing assimilation and wide ones contrast, and no general quantitative model of simultaneous color contrast is accepted. The explanation by "added complementaries" is descriptive, not a mechanism. And Chevreul's red, yellow and blue primaries, with their complementary pairs (blue and orange, red and green, yellow and violet), are wrong for mixing lights; Munsell's appendix attacks this scheme and gives blue-green as the true complement of red [@munsell1907color]. Keep his observations and discard his wheel.

::: {.rule #COL-020 grade="A"}
**Never approve a color in isolation: judge every token on each surface it will appear on, next to its real neighbors, in both themes.** Simultaneous contrast is one of the oldest and most robust findings in color science: the same color changes in apparent hue and lightness with its surround [@chevreul1872principles; @fairchild2013color], and Albers built a whole curriculum on showing that one color can be made to look like two [@albers1963interaction]. The size and direction of the change depend on the configuration, so it must be checked, not predicted.

*In LTF:* `accent` is used as text on `canvas`, `surface` and `accent-tint`, as `accent-line` on the 1 px `line` baseline of `Tabs`, and as a progress fill. Review each of those contexts in Day and Night on `/dev/components`, which renders every component in every state, rather than approving the swatch in `tokens.css`.
:::

### Albers: color deceives continually

Albers taught color as an experience to be trained rather than a system to be memorized. His Interaction of Color grew out of his course at Black Mountain College and Yale; his foundation describes his rejection of color systems as having little practical value for artists and his preference for direct observation, with exercises that isolate one aspect of interaction at a time and move from simple to complex [@albers1963interaction]. He wrote that color "deceives continually", and held that color is relative and unstable, but also partly predictable, so that putting colors in specific contexts gives anticipatable results. The best-known problems ask students to make one color look like two, make two different colors look alike, and produce vibrating or vanishing boundaries and illusions of transparency from opaque papers [@albers1963interaction].

Albers offers demonstrations, not data; the effects are the simultaneous-contrast and assimilation phenomena that vision science catalogues [@fairchild2013color]. His view that systems are of little use is a teacher's position, and the measured systems in the previous chapters show that designers can use them. The book's plates are reproductions, so their effects vary with printing and screen. Sources disagree on the number of plates in the 1963 edition, so no count is given here.

Tufte imported Albers into information design as "1 + 1 = 3 or more": two elements placed together create a third, unintended visual effect, such as an incidental white path, vibration or pattern that carries no information [@tufte1990envisioning]. He states that this noise is directly proportional to the light-dark contrast between figure and ground, so on white backgrounds a range of lighter colors minimizes incidental clutter; that grids should be grey and delicate; and that in a look-up table the grid should be muted relative to the data. He ties the remedy to instruments: reducing noise can reduce viewer fatigue and improve the accuracy of readings from a computer interface or a flight-control display [@tufte1990envisioning].

::: {.rule #COL-021 grade="B"}
**Separate adjacent saturated colors with a neutral edge or a clear lightness gap.** Two saturated hues in contact shift each other and can produce vibrating boundaries [@chevreul1872principles; @albers1963interaction]; Tufte gives the same remedy for vibration in maps and tables, thinning or neutralizing the boundary [@tufte1990envisioning]. Grade B: the phenomenon is robust, and the remedy is craft practice consistent with it.

*In LTF:* the Fly mode stopwatch places an 8 px `accent-line` running dot inside an `ink` pill; keep it separated from any `warn` alert by surface. In the G1000 widget, magenta and green course elements drawn against `sky` and `ground` fills need a thin dark or light keyline where they cross those fields.
:::

::: {.rule #COL-022 grade="B"}
**Present every reproduction of a cockpit display or chart on a neutral, constant field.** Because the surround changes how a display's colors look [@chevreul1872principles; @fairchild2013color], an instrument drawing placed on a tinted card or a colored band will look different from the same drawing on grey. Fixing the drawing's own colors is not enough; the frame around it must be fixed too.

*In LTF:* the instrument tokens are fixed in both themes, but `WidgetFrame` sits on `bg-surface`, which is white in Day and near-black in Night. Give the drawing area its own fixed ground (the `instrument` token for glass displays, `chart-land` for the sectional) inside the frame, so the instrument colors are judged against the same surround in both themes. Do not place widgets inside tinted `Callout`s.
:::

### Large areas quiet, small areas strong

Tufte quotes Eduard Imhof's rules of color composition: pure, bright or very strong colors are unbearable when they stand unrelieved over large adjacent areas but can be used sparingly on or between dull background tones, and large background colors should be muted, greyish or neutral so that smaller bright areas stand out [@tufte1990envisioning]. Tufte's own color principles are "do no harm", four uses of color (to label, to measure, to imitate reality, to enliven), and a warning that more than 20 or 30 colors frequently produce negative returns for abstract information; he recommends a palette from nature, especially lighter blues, yellows and greys, with spot highlights of strong color [@tufte1990envisioning]. He also notes that the fourth Imhof rule is pushed too far toward a general aesthetic theory, citing Mondrian as a painter who violates it.

The color-and-emotion experiments in a later chapter point the same way: high saturation over large areas raises arousal [@wilms2018color; @valdez1994effects]. The cartographic rule and the laboratory finding agree, which is unusual enough to be worth acting on.

::: {.rule #COL-023 grade="B"}
**Keep large areas muted and near-neutral, and spend saturated color only on small elements that carry meaning.** Imhof's composition rules, as quoted by Tufte, and Tufte's own budget of a quiet ground with one or two spot highlights per screen [@tufte1990envisioning] agree with laboratory findings that saturated large fields are the most arousing [@wilms2018color]. Grade B: craft authority plus indirect experimental support.

*In LTF:* the warm-neutral `canvas` and white `surface` are the right grounds, and status tints are pale. The full-width `BetaBanner` in `bg-caution-tint` on every page, and the tinted `current` cards and resume bars in `bg-accent-tint`, are the largest colored areas in the product; keep them pale and few, and do not add tinted section bands to the landing page.
:::

::: {.rule #COL-024 grade="C"}
**Mute grid lines, borders and rules relative to the data or text they organize.** Dark structural lines create clutter and vibration in proportion to their contrast with the ground [@tufte1990envisioning]. The limit is accessibility: a boundary that is the only means of identifying an interactive component must still meet the non-text contrast minimum [@w3c2024wcag].

*In LTF:* the default `line` token (#dfdedc in Day, 1.24:1 on `canvas`) is suitably quiet for card edges and table rules, and `line-strong` (3.63:1 on `canvas`, 3.95:1 on `surface`) is reserved for input borders where the boundary identifies the control. Keep that split; do not use `line-strong` for decorative dividers.
:::

### Brightness and adaptation change appearance

The appearance effects of the previous chapter apply here with force. The Hunt effect makes colors look more colorful at higher luminance, and the Bezold-Brücke effect shifts hue with intensity [@fairchild2013color]. A learner's laptop at low brightness in a dim room, beside a bright simulator monitor, is a viewing condition that neither the CIE observer nor Oklab models [@smith1931cie; @ottosson2020perceptual]. MacAdam's ellipses were measured in daylight at moderate luminance and should not be extrapolated to very dim interface states [@macadam1942visual].

::: {.rule #COL-025 grade="B"}
**Review palettes at both high and low display brightness, and in a dim room, before accepting them.** Colorfulness and hue change with luminance (the Hunt and Bezold-Brücke effects), and adaptation to a surround changes appearance again [@fairchild2013color]; ColorBrewer's practice of filtering schemes by end-use environment (screen, print, projection, photocopy) treats viewing conditions as a design input [@harrower2003colorbrewer]. Grade B: the effects are established, and the review step follows from them.

*In LTF:* add "checked at minimum and maximum laptop brightness, Day and Night, and in a dark room beside a lit monitor" to the review of any change to `tokens.css` and to each widget's fixed colors.
:::

::: {.rule #COL-026 grade="C"}
**Never ask a learner to identify a color by name from a single swatch on a variable background; show labeled choices side by side.** Appearance depends on neighbors [@chevreul1872principles; @albers1963interaction], and color names are less reliably shared than labels (see the next chapter) [@berlin1969basic]. A quiz that asks "which indicator is the amber one?" tests the screen and the surround as much as the learner.

*In LTF:* quiz items in `QuizBlock` that involve display colors refer to a labeled element ("the pointer marked A") or to position ("the band at the top of the tape"), never to a bare color name.
:::

### Teaching context effects

Albers's method, show the effect and then explain it, is the right template for a beginner [@albers1963interaction]. A learner who has seen one swatch change on two backgrounds understands at once why the app labels its colors and why a screenshot of the sim may not look like their own screen. An interactive pair, the same patch on two surrounds with a slider that changes one surround, makes the principle experiential rather than asserted. Such a widget is cheap to build with the existing widget primitives.

### What this means for Learn to Fly

**Keep.** The neutral grounds and the pale tints; the decision that `Callout` spends its type color only on the 20 px icon and the title, with body copy in `ink`; the quiet `line` token for structure.

**Change.** Give widget drawings their own fixed ground inside `WidgetFrame` so instrument colors meet the same surround in Day and Night (COL-022). Audit large tinted areas (the `BetaBanner`, `bg-accent-tint` objective cards and resume bars) and keep their number and area small (COL-023). Add keylines where saturated widget colors meet `sky` and `ground` fills (COL-021).

**Build.** A small "Same color, two backgrounds" widget for Module 0 or the "Sim vs reality" material, built from the existing SVG primitives, so learners see why color is always paired with a label (COL-020, COL-026). Make `/dev/components` render each status and accent token on every ground in both themes side by side, which turns COL-020 into a page a reviewer can open.

## Color Names and Categories

### Categories on a continuum

Hue is continuous, but people use it in categories. Newton named seven regions of a spectrum that he described as continuous, with as many degrees of color as sorts of rays [@newton1704opticks]. Any interface that asks a viewer to tell "orange" from "yellow" at a glance is therefore asking for a category judgment on a continuous variable, and the answer depends on where that viewer, in that language, draws the boundary.

Berlin and Kay argued in 1969 that the way languages divide color is not arbitrary [@berlin1969basic]. Every language has some basic color terms, and the sets across languages follow a constrained order. In the strong form, terms are added in a fixed sequence: stage I has two terms (dark-cool and light-warm, read as black and white), stage II adds red, stage III adds green or yellow, stage IV has both, stage V adds blue, stage VI adds brown, and stage VII adds purple, pink, orange or grey, reaching eight or more terms [@berlin1969basic]. They proposed a universal inventory of eleven basic categories; English uses all eleven (black, white, red, green, yellow, blue, brown, purple, pink, orange, grey). A summary of the work puts its base at 20 languages studied experimentally and 78 more from the literature.

### A tendency, not a law

The hypothesis has been revised rather than abandoned, and its strong form has not held [@berlin1969basic]. Berlin and Kay loosened the ordering in later work; the World Color Survey found anomalies that require modifying the schema, though one review judged that they hardly invalidate the basic formulation. Critics argue that the methods and cultural assumptions are flawed, that some languages' "color" terms encode other properties such as dryness or freshness, that deciding which terms are basic is discretionary (English "orange" is a case in point), and that the clustering on which universality rests may be partly an artifact.

On the relativity side, a study of Berinmo speakers in Papua New Guinea, whose language has five basic color terms, found categorical perception effects only at the boundaries of each speaker's own linguistic categories, which its authors read as evidence that having words for categories shapes recognition and judgment. A later review argued that the Whorf hypothesis is "half right": naming affects color perception mainly in the right visual field, processed by the language-dominant left hemisphere, and cross-language naming reflects both universal tendencies and local convention. Those studies (Roberson, Davies and Davidoff 2000; Regier and Kay 2009) are reported here through the critical literature on Berlin and Kay and are not separately in this book's bibliography [@berlin1969basic]. The debate is not settled. The safe reading for design is that basic color terms are shared as a tendency, that category boundaries differ across languages, and that only a handful of hues can be named reliably.

::: {.rule #COL-027 grade="C"}
**When lesson or interface text must name a color, use a basic English color term (red, green, yellow, blue, orange, purple, pink, brown, gray, black, white) and never a designer's name for it.** Basic terms are the ones most reliably shared, while terms outside the set, and the boundaries between categories, vary between speakers and languages [@berlin1969basic]. Okabe and Ito make the same point from the side of color vision deficiency: state color names clearly where communication depends on them [@okabe2008color]. Grade C because the universality claim behind basic terms is contested; the rule rests on the weaker, uncontested point that basic terms are more widely shared.

*In LTF:* the `AirspeedArcs` legend already uses basic names ("White", "Green", "Yellow", "Red line"). Learner copy never says "teal", "amber" or "magenta" without a basic-term gloss; where the simulator's own label is "magenta", write "magenta (pink-purple)" on first use.
:::

::: {.rule #COL-028 grade="C"}
**Whenever a color name carries meaning, pair it with a label, an icon, a position or a shape that carries the same meaning.** Category boundaries differ across languages and individuals [@berlin1969basic], appearance shifts with the surround [@chevreul1872principles], and color-deficient viewers may not see the named difference at all [@okabe2008color]. A learner who reads English as a second language faces the first problem twice.

*In LTF:* the `AirspeedArcs` legend pairs each band's color name with its meaning in words and draws the red line as a different shape (a 3 px vertical mark rather than a band). That is the model for every widget legend. Lesson prose that says "the green arc" also says what it marks, using the lesson's own sourced wording and `{{vspeed.*}}` tokens rather than numbers typed by hand.
:::

::: {.rule #COL-029 grade="C"}
**Limit any set of colors that learners must name or remember to about six hues, plus black, white and gray.** English has eleven basic terms, three of which are achromatic and one of which (brown) is a dark orange, so few chromatic categories can be named reliably [@berlin1969basic]; Tufte warns of negative returns well before twenty or thirty colors for abstract coding [@tufte1990envisioning]. The figure six is a design limit derived from the term inventory, not a measured capacity, hence grade C.

*In LTF:* the page UI uses one accent and three status hues, which is within the limit. The widgets add arc colors, display magenta, cyan and green, sky, ground and chart colors; each widget should use only the subset it needs, and no lesson should require learners to remember more than a few color meanings at once.
:::

### The primaries myth

::: myth
**"Red, yellow and blue are the three primary colors, and red is the complement of green."** The claim comes from painters' pigments and from Chevreul's color wheel, in which complements were the secondary made from the other two primaries: blue and orange, red and green, yellow and violet [@chevreul1872principles]. It fails for light. Munsell's appendix "False color balance" calls the red, yellow and blue primaries a widely accepted error, says the theory behind them had long been dropped once the elements of color vision were found, and reports that the red-green, yellow-purple and blue-orange complements fail when tested with colored lights or Maxwell discs; he gives blue-green as the complement of red [@munsell1907color]. Young's 1802 triplet was red, yellow and blue as a hypothesis, not a measurement [@young1802theory]. Screens mix light additively from red, green and blue primaries, and complementary pairs for lights are found by mixing them to neutral, not from a painter's wheel.
:::

::: {.rule #COL-030 grade="B"}
**Do not teach a painter's color wheel or red, yellow and blue primaries in any lesson or design rationale; if complements are needed, use pairs that mix to neutral as lights.** The red-yellow-blue scheme and its complementary pairs are wrong for mixing lights, as Munsell's tests with lights and Maxwell discs showed [@munsell1907color], and the modern account of color vision does not support them [@hurvich1957opponent]. Grade B: the physics of additive mixture is secure, and Munsell's tests are early but consistent with it.

*In LTF:* this matters for any widget or lesson that explains display colors or afterimages. The text says that screens use red, green and blue light, and that an afterimage of red tends toward blue-green.
:::

::: {.rule #COL-031 grade="B"}
**Do not make a learner judge a category boundary between neighboring hues (orange against yellow, cyan against green, magenta against purple) without a second cue.** Hue is a continuum labeled with categories [@newton1704opticks], boundaries vary between people and languages [@berlin1969basic], and unique-hue settings vary between observers [@hurvich1957opponent]. Grade B: the individual variation is measured; the interface consequence is inferred.

*In LTF:* the G1000 widget uses `display-magenta`, `display-cyan` and `display-green`. Wherever the lesson depends on telling two of these apart (for example a course line against a reference line), the widget labels them in text or with a distinct line style, and the "Describe this diagram" text names each element.
:::

### Naming in the product's own vocabulary

The product names its themes "Day" and "Night" and its accent "the horizon line" in code comments. Those are design vocabulary, not color names, and are fine as long as learner-facing copy never relies on them to identify a color. The callout titles ("Safety", "Pro tip", "Classic panel") carry their meaning in words, which is what makes their tints decorative rather than load-bearing. The tier names Gold, Silver and Bronze are object names that suggest colors; the tiers are always printed as words, and the ring colors, which in Day sit at nearly one lightness, should be read as decoration of the word rather than as the code.

### What this means for Learn to Fly

**Keep.** The widget legends that pair basic color names with meanings and distinct shapes (`AirspeedArcs`), the always-printed tier words, and the worded callout titles.

**Change.** Add to `content/README.md` a copy rule: color names in lessons are basic English terms, each paired with its meaning, and designer names ("teal", "amber") appear only with a gloss (COL-027, COL-028). Check the G1000 and sectional-legend widgets for any element distinguished only by a neighboring hue (COL-031).

**Build.** When writing the lesson material on glass-cockpit displays, include a short labeled legend for each display color the lesson uses, written from the lesson's sourced material, so that learners anchor each color to a label and position rather than to a name alone (COL-028, COL-029).

## Color Psychology Under Replication

### A nascent field, by its own leaders' account

Color psychology asks whether perceiving a color changes how people feel, think and act. Elliot and Maier, the two researchers most associated with its modern revival, reviewed the field in 2014 and reached a two-part conclusion: color can carry important meaning and can affect affect, cognition and behavior, but the literature "remains at a nascent stage of development", and much more work on boundary conditions, moderators and real-world generalizability is needed before strong recommendations for application are warranted [@elliot2014color]. Their review concentrates on achievement, affiliation and attraction, with consumer behavior and food evaluation alongside.

Elliot's follow-up methodological checklist, published in 2015, explains why caution is needed [@elliot2014color]. Color has three properties, hue, lightness and chroma, but most theory concerns hue, especially red, and chroma has been almost entirely overlooked. Many studies specify color at the device level or not at all, rather than spectrally, so focal and non-focal properties are confounded. Viewing distance, angle, ambient light and background are often uncontrolled, and web-based studies usually cannot control them. Work going back to the nineteenth century often lacked experimenter blinding, did not exclude color-deficient participants, did not standardize exposure time, and used underpowered samples. The theory the authors favor, color-in-context theory, holds that color meaning comes from biological predisposition combined with learning and is therefore context dependent: blue on a ribbon signals first place, blue on meat signals rot [@elliot2014color].

That theory is plausible and also hard to falsify: if effects depend on culture, task, age and color variant, any failed replication can be explained by a moderator. The claims below show what happened when the headline effects were tested with larger samples.

### Red and test performance

Elliot and colleagues proposed in 2007 that red is learned to signal danger and failure in achievement settings, so that merely perceiving red evokes avoidance motivation and lowers performance on tasks that matter [@elliot2007color]. Four experiments reported that a brief glimpse of red before an important test, such as an IQ test, impaired performance, apparently without participants' awareness; two more linked red to avoidance through task choice and cortical activation. The comparison colors were green and grey or other achromatic controls.

Gnambs tested the claim with a random-effects meta-analysis of 67 effect sizes from 38 samples in 22 publications, all randomized studies from 2007 onward comparing red with another color on anagram, reasoning or knowledge tests [@gnambs2020limited]. Anagram and knowledge tests showed no significant effect (d of −0.06 and −0.04). Reasoning tests showed a pooled effect of d = −0.34, 95% CI [−0.61, −0.06], but the cumulative analysis showed that effect shrinking from −0.86 in the early studies as later ones were added, and every publication-bias correction (PET-PEESE, selection models, p-uniform*) returned adjusted effects near zero. Sample sizes had a median of 76 (range 16 to 282); with typical samples, power to detect the pooled reasoning effect was about 18 percent. No moderator tested (control color, color matching, paper against screen, cover page against every page) mattered. The author notes that the analysis was not preregistered and covers only these test types [@gnambs2020limited].

::: myth
**"Red makes people perform worse on tests."** The original experiments reported that a brief exposure to red before an intelligence test impaired performance through avoidance motivation [@elliot2007color]. A meta-analysis of 38 samples found no effect on anagram or knowledge tests, a reasoning effect that shrank sharply from the early to the later studies, and no evidential value at all after correcting for publication bias; with typical samples the studies had about 18 percent power [@gnambs2020limited]. The pattern of large early effects shrinking in larger later studies is the signature of small samples and selective publication.
:::

### Blue for creativity, red for detail

Mehta and Zhu tried to reconcile a literature in which blue sometimes helped and sometimes hurt [@mehta2009blue]. Their proposal was task dependence: red induces avoidance motivation and so improves detail-oriented tasks, blue induces approach motivation and so improves creative tasks. Six studies supported it, with samples from 42 to 208: red against blue induced the two motivations (n = 69), red helped a detail task and blue a creative one (n = 208 and 118), and the results extended to product design (n = 42) and persuasive messages (n = 161), apparently outside awareness (n = 68) [@mehta2009blue]. The reconciliation is itself flexible: red harms test performance in one theory and helps detail work in another, depending on how the task is classified.

Steele directly replicated one of the anagram experiments with the same anagrams, instructions and colors and more than three times as many participants, and found no color-priming effect although power was sufficient to detect the original one [@steele2014failure]. A single failed replication of one of six experiments cannot show an effect is zero, and no replication of the creativity arm was found. Read together with the meta-analysis of the red-performance literature [@gnambs2020limited], the headline claim stands as a hypothesis with a clear failed direct test.

::: myth
**"Blue backgrounds boost creativity and red backgrounds sharpen attention to detail."** The claim comes from six small-to-moderate studies proposing that red primes avoidance and blue primes approach [@mehta2009blue]. A direct replication of the anagram experiment with more than three times the sample and adequate power found no effect [@steele2014failure], and the related red-performance literature shows no evidential value after bias correction [@gnambs2020limited]. No background hue has been shown to improve checklists, procedures or learning.
:::

### Red wins contests

Hill and Barton reported in a one-page Nature letter that in the 2004 Olympic combat sports, where red or blue was assigned by organizers, red was associated with a higher probability of winning, and they proposed a sexually selected signal of dominance [@hill2005red]. Secondary accounts put the red win rate at about 55 percent overall, concentrated in evenly matched bouts. Follow-ups shifted the explanation to judges: a referee experiment reported in news coverage found that experienced taekwondo referees awarded red-clad fighters more points for the same sparring, and a study with electronic scoring found no red advantage. Then the original authors, with colleagues, tested 6,589 contests from seven Olympic Games (1996 to 2020) and nine World Boxing Championships (2005 to 2021) [@peperkoorn2024meta]. Red won 50.5 percent overall and 51.5 percent of close contests, neither significantly different from even. Only before 2005 did close contests show some support (56.8 percent for red), and the authors suggest that awareness of the effect and rule changes may have made a small effect disappear [@peperkoorn2024meta].

::: myth
**"Red is a dominance color that helps you win."** The Athens 2004 observation [@hill2005red] did not survive a test of 6,589 contests over 25 years by a team that included its original authors: red won 50.5 percent overall, not significantly different from chance [@peperkoorn2024meta]. Where a red advantage appeared, evidence pointed to judges' bias rather than to the competitors.
:::

### Color charts and brand personality

Labrecque and Milne reported four marketing studies in which hue, saturation and value shaped brand personality ratings: red logos were rated more "exciting" and blue logos more "competent" [@labrecque2012exciting]. These are ratings of imagery, not behavior, with limited control of spectral properties and display, and the full text was not available for this book, so no effect sizes are given. Palmer and Schloss's ecological valence theory, discussed in the next chapter, implies that such mappings are learned and should vary across cultures and product categories [@palmer2010ecological]. The popular "color meaning" chart that assigns trust to blue and energy to red descends from studies of this kind with the context removed.

Whitfield and Wiltshire's critical review is the older warning label. They limited it to laboratory studies of evaluative responses to color patches or chips, which they describe as numerically the main body of color psychology, because of the literature's size, diversity and uneven rigor [@whitfield1990color]. Later work cites it for the ambiguity of uncontrolled research and for the point that rating a color's connotation on scales such as warm-cool is not evidence about the color's emotional effect on the viewer [@elliot2014color; @wilms2018color].

::: myth
**"Blue means trust, red means urgency, green means calm: pick brand and UI colors from the chart."** The charts compress rating studies of logos and patches, made without spectral control, into universal rules [@labrecque2012exciting; @whitfield1990color]. Color meaning is learned and context bound (blue on a ribbon against blue on meat) [@elliot2014color], preferences come from the objects people associate with colors and vary between groups [@palmer2010ecological], and the field's own leaders call it nascent [@elliot2014color].
:::

::: {.rule #COL-032 grade="A"}
**Never justify an LTF color choice by a claimed priming effect on performance, motivation or mood.** The best-known effects (red impairs test performance, red and blue change task performance, red wins contests) have failed direct replication or shrunk to nothing in meta-analyses with bias correction [@gnambs2020limited; @steele2014failure; @peperkoorn2024meta]. Grade A for the rule's basis: the null results are replicated across independent tests.

*In LTF:* design rationale in PRs, in `v1.md` decisions and in code comments gives legibility, convention, contrast and color-vision reasons for color, never "red keeps learners alert" or "blue calms nervous beginners".
:::

::: {.rule #COL-033 grade="C"}
**Choose the color of error, warning and incorrect-answer states by signal convention and redundancy, not by psychology.** The argument against careless red is color vision deficiency and dilution of the warning signal, not an anxiety effect on learners, which has no reliable support [@gnambs2020limited; @okabe2008color; @faa2010flightcrew]. Grade C: convention and standards.

*In LTF:* the `warn` red on a wrong quiz answer is justified because red marks error by common convention and the state also carries `XCircle` and "Not quite."; it needs no psychological defense, and it should not be softened to a "calmer" hue on psychological grounds.
:::

::: {.rule #COL-034 grade="B"}
**Never write learner-facing copy that claims a color improves memory, calm, focus or performance.** The claims that circulate have failed replication or rest on preference ratings [@gnambs2020limited; @steele2014failure; @whitfield1990color]; the one positive learning result (emotional design) does not isolate color (see the next chapter) [@brom2018how]. Grade B.

*In LTF:* the theme toggle, onboarding copy and any "why Night mode" text describe what a theme does (lighter text on a dark ground, for a dim room) and make no wellness claim.
:::

::: {.rule #COL-035 grade="B"}
**If LTF tests a color change against a learning or performance outcome, preregister it and power it for effects much smaller than those first reported.** Published color effects shrank as samples grew; the typical sample in the red-performance literature had a median of 76 and about 18 percent power [@gnambs2020limited]. Steele's replication is the model: same stimuli, stated measure, larger sample, a statement of power [@steele2014failure].

*In LTF:* any A/B test of themes on quiz accuracy or challenge scores states its hypothesis, measure and sample in advance, and treats an early positive result as likely to shrink.
:::

::: {.rule #COL-036 grade="C"}
**Treat brand-personality color associations as weak, culture-bound preferences that never override legibility, contrast or convention.** The evidence is rating studies of logos without behavioral outcomes [@labrecque2012exciting], and associations vary with the objects and groups people know [@palmer2010ecological]. Grade C.

*In LTF:* the teal accent needs no "teal means trust" justification and should not get one. If the brand color is revisited, the decisive tests are contrast in both themes, distinctness from the status colors, and identity, not a color-meaning chart.
:::

::: {.rule #COL-037 grade="C"}
**When LTF studies color, specify stimuli in measured terms and control the viewing conditions that can be controlled.** The field's own checklist names device-level specification, uncontrolled ambient light and background, unscreened color-deficient participants and unstandardized exposure as the faults that made earlier work uninterpretable [@elliot2014color]. Grade C: methodological consensus.

*In LTF:* a theme experiment records the tokens as Oklch values, the device and brightness where known, and the room conditions where reported, and screens out nothing it cannot measure while noting what it could not control.
:::

::: {.rule #COL-038 grade="B"}
**Do not assign red or blue to learners or groups in competitive features in the belief that the color gives an edge, and prefer automated scoring to human judgment where bias is possible.** The red advantage vanished in large data, and where it appeared, evidence pointed to judges [@peperkoorn2024meta; @hill2005red]. Grade B.

*In LTF:* challenge tiers and any future leaderboard use the tier tokens and neutral ink, not red against blue. The debrief already recomputes the tier on the server from the rubric; keep scoring rubric-based rather than impressionistic.
:::

### What this means for Learn to Fly

**Keep.** The product's color choices are already justified by role (horizon line, status, tier) rather than by psychology; the token comments speak of contrast and meaning, not mood.

**Change.** Strike any psychological claim from future design rationale and copy (COL-032, COL-034). Keep the `warn` red for errors and wrong answers on convention, with its icon and word, rather than softening it for imagined learner anxiety (COL-033).

**Build.** If the team ever wants evidence about color and learning in LTF, write a preregistered test plan in `docs/` before building it: a theme or palette variable, a measured outcome such as quiz accuracy or checklist completion, a power analysis, and measured stimuli (COL-035, COL-037). Until then, the honest statement is that no color has been shown to improve learning by itself.

## Emotion, Preference and Learning

### Lightness and chroma do most of the work

The folklore says hue carries emotion: red excites, blue calms. The two best controlled studies in the research for this book say that lightness and chroma matter at least as much. Valdez and Mehrabian rated emotional reactions to Munsell chips on the Pleasure-Arousal-Dominance model [@valdez1994effects]. Saturation and brightness had strong and consistent effects, and brightness effects were nearly the same for chromatic and achromatic colors. The standardized regressions in the abstract are Pleasure = .69B + .22S, Arousal = −.31B + .60S and Dominance = −.76B + .32S, with B for brightness and S for saturation: brighter colors felt more pleasant, less arousing and less dominant, and more saturated colors felt more arousing and somewhat more pleasant [@valdez1994effects]. Hue mattered too, but not as the folklore predicts: blue, blue-green, green, red-purple, purple and purple-blue were the most pleasant, yellow and green-yellow the least; green-yellow, blue-green and green were the most arousing. Red was not singled out as the most arousing hue.

The study's stimuli were not colorimetrically specified, its Munsell values were not reported exactly, and brightness and saturation were probably not varied independently [@wilms2018color]. The task was also to rate a color, not one's own state while viewing it.

Wilms and Oberfeld fixed those problems [@wilms2018color]. They crossed three hues (blue, green, red), three saturations and three brightness levels in a factorial design, plus three brightness-matched achromatic colors, on an LED panel in a darkened cabin at 1.5 m (about 18 degrees of visual angle, maximum 223 cd/m²), specifying colors in CIE L*a*b* with measured luminance. Sixty-two participants viewed each color for 30 seconds after a grey adapting field and rated their own valence and arousal while skin conductance and heart rate were recorded. Saturated and bright colors produced higher arousal and larger skin conductance responses. With saturation and brightness controlled, hue also affected arousal, rising from blue to green to red. Valence was highest for saturated and bright colors; blue got higher valence than the other hues, but only at high saturation, and the pattern reversed at low saturation. Hue and brightness affected arousal only for relatively saturated colors. Physiological effects were weaker than rating effects, and 12 of the 62 participants produced no skin conductance responses [@wilms2018color].

The two studies agree on the main point, that saturation and brightness do much of the work, and disagree on details: the most arousing hue (green-yellow before, red here) and the shape of the saturation-valence relation (monotonic before, peaking at medium saturation here). Both are single studies of large color fields viewed alone, far from the small, mixed color of an interface.

::: {.rule #COL-039 grade="B"}
**Set the emotional tone of a surface through its lightness and chroma, not by picking a "calm" or "energetic" hue.** In both controlled studies, saturation and brightness had strong effects on rated pleasure and arousal, and the hue effects that remained depended on saturation [@valdez1994effects; @wilms2018color]. A high-chroma "calm blue" is not calm in any tested sense. Grade B: two studies that agree on the main point and differ on details.

*In LTF:* the product's restraint comes from low chroma (neutral greys at C 0.003, pale tints near C 0.03–0.05), not from its teal hue. Any proposal to make a page "friendlier" or "calmer" is expressed as a lightness and chroma change and reviewed for contrast.
:::

::: {.rule #COL-040 grade="B"}
**Reserve high chroma for small elements the learner should act on, and keep large surfaces low in chroma.** Saturated large fields are the most arousing in the laboratory [@wilms2018color; @valdez1994effects], and composition practice says strong color is bearable only in small areas against muted grounds [@tufte1990envisioning]. The step from large patches in a dark cabin to interface elements is an inference, which limits the grade to B.

*In LTF:* the highest-chroma page token is Day `warn` (C 0.190). It should appear as small text, icons, borders and the alert frame, and as a filled area only on the `danger` button behind a confirmation. The landing hero's 64 px `bg-warn` play disc on `YouTubeEmbed` is a large, high-chroma, non-warning use and should change to `ink` or `accent` (see also the chapter on color as signal).
:::

### Preference follows associations

Palmer and Schloss asked why people on average like some colors more than others [@palmer2010ecological]. Their ecological valence theory holds that people like colors associated with objects they like (blues with clear sky and clean water) and dislike colors associated with objects they dislike (browns with feces and rotting food). They used 32 colors from the Berkeley Color Project, eight hues crossed with four saturation-lightness "cuts" (saturated, light, muted, dark). Preferences came from 48 participants; separate groups listed objects for each color (74 participants, 3,874 descriptions in 222 object categories), rated how much they liked each object (98) and rated how well each object's color matched each screen color (31) [@palmer2010ecological]. The weighted affective valence estimate built from those tasks, with no free parameters, correlated with average preference at r = +0.893, explaining 80 percent of the variance. Alternatives explained less: a color-appearance model 60 percent, a color-emotion model 55 percent, and a cone-contrast model 37 percent.

The preference pattern peaked at blue and dipped at chartreuse; saturated colors were preferred to light and muted ones; dark orange (brown) and dark yellow (olive) were disliked while dark red and dark green were liked [@palmer2010ecological]. Preliminary extensions found that preference clusters of similar people were predicted better by their own cluster's estimates, that American estimates predicted American preferences better than Japanese ones and the reverse, and that school-spirit colors shifted preferences between Berkeley and Stanford students. The evidence is correlational and from one lab, the sample is mostly Bay Area undergraduates, the cultural and priming results are explicitly preliminary, and preference ("I like this color") is not emotional effect ("this color makes me feel good").

::: {.rule #COL-041 grade="B"}
**Offer a theme choice instead of assuming one palette suits everyone, and never present a palette as universally preferred.** Average preference is real but varies between groups and cultures and with the objects people associate with each color [@palmer2010ecological]; first impressions of web pages likewise vary with age and education [@reinecke2013predicting]. Grade B.

*In LTF:* the three-way `ThemeToggle` (Day, System, Night) is the right structure. Keep both themes first-class, and do not ship a single "brand" palette that overrides the learner's choice anywhere except where a fixed palette is required (the instrument and chart drawings).
:::

::: {.rule #COL-042 grade="C"}
**Avoid dark yellow (olive) and dark orange (brown) as accents for headline states.** They were the least-liked color cuts in the one large study of average preference [@palmer2010ecological]. The consideration is mild and comes from one lab's sample, so it never outranks contrast or convention; grade C.

*In LTF:* the Day `caution` (#945a00, a dark orange at L 0.52) and `tier-bronze` (#8c5331) sit in that region. That is acceptable for a caution state and a bronze tier, whose meaning comes from convention and words, but neither should become a brand or accent color.
:::

### Pleasant colors in learning materials

The one positive learning result involving color comes from emotional design. Brom, Stárková and D'Mello meta-analyzed 33 independent samples (N = 2,924) that added anthropomorphic faces or pleasant colors to multimedia learning materials [@brom2018how]. They found positive effects on retention (k = 18, d+ = 0.387), comprehension (k = 14, d+ = 0.317) and transfer (k = 27, d+ = 0.327), a robust effect on intrinsic motivation (d+ = 0.255), weaker effects on liking (0.109) and positive affect (0.113, marginal), and a reduction in perceived difficulty (d+ = −0.208) [@brom2018how]. There was no major publication bias; a trim-and-fill analysis for transfer left the estimate at 0.316.

What this licenses is narrow. "Pleasant colors" in this literature means predominantly warm, bright, saturated colors chosen with good visual design, avoiding the garish [@brom2018how]. Only 5 of the 33 samples (15.2 percent) were color-only contrasts; 11 were faces only, 13 combined faces and colors, and 4 pooled manipulations, so the color effect cannot be isolated. Most studies used college students, science content and sessions of up to about 30 minutes, and the mechanism is unknown, with intrinsic motivation a candidate. Unlike the priming literature, this one passes bias checks, and the color is a property of the learning material tested on learning outcomes.

::: {.rule #COL-043 grade="B"}
**Give lesson diagrams and widgets a coherent, moderately warm and clear palette rather than grayscale, without garish saturation and never at the cost of contrast.** A meta-analysis found small to medium learning gains from emotional design that included pleasant colors, with reduced perceived difficulty and no major publication bias [@brom2018how]. The color-only evidence is thin (five samples) and short-session, which is why this is B, not A, and why the rule says "clear" rather than "saturated".

*In LTF:* the widgets already use color rather than grey (the `chart-*` sectional colors, the `sky` and `ground` attitude fills, the arc bands). Keep them; do not desaturate diagrams to match the neutral page chrome. The constraint is that every colored element in a widget still meets the non-text contrast floor and has a label.
:::

### First impressions: complexity before colorfulness

Reinecke and colleagues predicted visual appeal from 500 ms exposures to 450 website screenshots, rated by 548 volunteers for colorfulness, complexity or appeal [@reinecke2013predicting]. A colorfulness model built from image statistics reached R² of .78, and a complexity model R² of .65. Combined with demographics, the two predicted 48 percent of the variance in appeal ratings (from 3,412 rating means by 242 volunteers aged 16 to 70 in 34 countries). Complexity mattered most; colorfulness played a role but was not nearly as important. High complexity produced the largest drop in appeal, participants over 45 liked low complexity more than others, and people with a PhD were most negatively affected by high colorfulness [@reinecke2013predicting]. Even Webby-nominated sites drew average ratings from 4.21 to 6.57 on a 9-point scale. The models predict a first impression from a screenshot, not usability or trust, and the authors note their colorfulness model overestimates bright colors.

::: {.rule #COL-044 grade="B"}
**On first-contact pages, reduce visual complexity first and keep colorfulness moderate; do not try to win a first impression with more color.** Complexity predicted 500 ms appeal far more strongly than colorfulness, older viewers preferred low complexity, and some groups were put off by high colorfulness [@reinecke2013predicting]. Grade B: one large study of first impressions, consistent with related work on complexity.

*In LTF:* the landing page's restrained palette (canvas and surface bands, one teal accent, ink buttons) is consistent with this. Its generic look comes from layout rhythm, not from too little color, so the fix for "looks like every template" is not a brighter palette; see Part XX, Brand Identity and Distinctiveness.
:::

### What this means for Learn to Fly

**Keep.** Low-chroma grounds and a single accent; colored widgets that are clear rather than gaudy; both themes as equal choices.

**Change.** Replace the red `bg-warn` play disc on the landing video with a neutral or accent fill (COL-040). Keep `caution` and `tier-bronze` out of any brand use (COL-042). Express any "friendlier" or "calmer" request as lightness and chroma, then check contrast (COL-039).

**Build.** When new widgets are drawn, set a widget palette brief: a small set of clear, moderately warm colors per widget, each labeled, each above the non-text contrast floor against the widget's fixed ground (COL-043). Record the reason for each color in the widget's code comment in terms of role, never mood.
