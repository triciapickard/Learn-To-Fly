# Lane 05: Color science and color theory (notes)

Confidence note: sources marked verified "web" had bibliographic details confirmed by search. Others come from memory and are marked "memory" in sources.json. Specific numbers are given only where reliably known; "approximately" marks the rest.

## Chevreul1839

**Core claims.** Chevreul, a chemist at the Gobelins dye works, was asked why the same dyed wool looked dull next to certain neighbors. He concluded that the cause was not chemical but visual: colors alter each other. His "law of simultaneous contrast" says that when two adjacent areas differ, they look as different as possible, in both tone (lightness) and hue. He distinguished three kinds of contrast: simultaneous (side by side), successive (after-images, after looking at one color then another) and mixed (both). Each area appears shifted away from its neighbor: a grey beside red takes on a greenish cast, a pale blue beside yellow looks bluer or more violet.

**Specifics.**
- Contrast of tone: a mid grey looks lighter beside black and darker beside white. Contrast of colors: the shift is toward the complement of the neighboring hue.
- Fine patterns do the reverse of broad areas: thin stripes or small dots of two colors blend (optical mixture) at distance. He applied this to tapestry and print, and it directly influenced Seurat and Signac.
- Harmonies: he classed harmonies as "of analogous colors" (adjacent hues, differing in tone) and "of contrast" (complements or strongly different pairs). Neutral borders (white, black, grey) between conflicting colors reduce clash. He recommended these as practical fixes. Black or white lines between two adjacent colors damp the effect.
- Practical craft: to make a color look as intended, adjust it with the neighbor in mind; a color is judged in context, not alone.
- The book appeared in French in 1839; Martel's English translation (1854) was widely used by designers.

**Quotation.** None given, to avoid misquoting.

**Criticism and status.** The phenomena (simultaneous lightness and chromatic contrast) are textbook and replicate. His explanation was mental and optical; the modern one is lateral inhibition in retinal ganglion cells and cortical receptive fields, plus chromatic adaptation. His harmony rules are craft doctrine, not experimental findings, and Schloss and Palmer (2011) show hue similarity helps harmony, which fits his "analogous" class but not any claim that complements are intrinsically harmonious.

**Use for LTF.**
1. Never judge a color token alone: test text, badges and instrument colors on their real neighbors (card, panel, sky and ground in diagrams).
2. A neutral grey UI surface takes a cast from a saturated neighbor, so place semantic colors (green status chip) on neutral surfaces, not tinted ones.
3. Use a thin neutral keyline between colors that clash or vibrate (airspace-like overlays, chart bands).
4. For widgets such as the attitude indicator (blue sky over brown ground), expect the horizon edge to look sharper than it is because of contrast; do not rely on the edge for exact numeric reading.
5. Small hatched fills blend into a third color at distance; avoid fine two-color patterns as encodings.

## Hurvich1957

**Core claims.** Hering (1878) argued that color experience is organized in opponent pairs: red-green, blue-yellow, and light-dark, and that no color is seen as simultaneously red and green or blue and yellow. Young and Helmholtz's trichromatic receptor theory explained matching but not this. Hurvich and Jameson made opponent theory quantitative with the **hue-cancellation method**: a test light's perceived hue is canceled by adding a measured amount of a light of the opposite hue. The amount needed gives the strength of the opponent response across the spectrum.

**Specifics.**
- Observers can pick four unique hues: red, green, yellow, blue, each judged to contain no trace of another hue. For spectral lights, unique blue, green and yellow fall at short, middle and middle-to-long wavelengths respectively (unique green is near the middle of the spectrum, unique yellow in the yellow band); unique red has no single spectral wavelength. Exact wavelengths vary between observers and studies, so no figures are given here.
- The two chromatic response curves change sign at wavelengths where one of the unique hues sits: the yellow-blue curve crosses zero at unique green, the red-green curve at unique blue and unique yellow. This is the logic of hue cancellation: at a crossing, the opponent pair is balanced and only the other pair contributes.
- Their "zone" model has two stages: cone receptors with three broad sensitivities, then opponent coding (L-M, S-(L+M), and L+M for luminance).
- The theory explains complementary after-images, why red-green and blue-yellow color deficiencies come in pairs, and why complements neutralize in mixture.
- De Valois, Abramov and Jacobs (1966) found opponent cell types in macaque LGN, the physiological support; later work (Derrington, Krauskopf and Lennie 1984) identified two cone-opponent axes.

**Criticism and status.** The two-stage view is accepted. The perceptual unique-hue axes do not map straight onto the LGN cone-opponent axes, so a third stage is posited. The hue-cancellation functions are measured under particular conditions and individuals differ. Hering-style hue sets underlie NCS (Natural Color System, Hård and Sivik 1981) and unique hues also inform CIECAM hue quadratures.

**Use for LTF.**
1. Pair semantic colors along opponent axes for maximum distinguishability (blue/orange or blue/yellow, red/green is the weakest pair for color-deficient users).
2. Yellow-blue is the axis that survives red-green deficiency, so use it for the primary two-state signal.
3. After-image and adaptation: large saturated fields (full-bleed colors) cause fatigue; keep saturated areas small.
4. When naming colors for learners (red, green, yellow, blue), use the four unique hues as the identifiable categorical set.

**Additional detail.** The theory has a practical corollary often missed in design talk: the red-green and blue-yellow channels have much lower spatial resolution than the luminance channel, so fine detail drawn only in hue is lost. The same asymmetry explains why color fringes are tolerable in video compression (chroma subsampling) but luminance blur is not. The model also explains why a color can be neither reddish and greenish at once but can be both reddish and yellowish (orange), which is why the four unique hues are a better basis for naming than the three primaries of a display. For designers the useful summary is: three channels, one carrying lightness and fine detail, two carrying hue and coarse shape.

## Munsell1905

**Core claims.** Munsell proposed describing any surface color by three independent perceptual attributes, arranged in equal visual steps: **Hue**, **Value** (lightness, 0 black to 10 white) and **Chroma** (distance from neutral grey). A color is written as hue value/chroma, such as 5R 4/14 (a strong red at value 4, chroma 14).

**Specifics.**
- Hue circle: five principal hues (Red, Yellow, Green, Blue, Purple) and five intermediates (YR, GY, BG, PB, RP), each divided into ten steps, giving 100 hue positions, with 5 as the representative step of each hue.
- Value runs 0-10 in nine to ten steps; neutral greys are written N 5/. Mid grey N 5 corresponds to roughly a fifth of white's luminance factor, which is why perceptual mid grey is much darker than 50% of linear light.
- Chroma is open ended: it starts at 0 (neutral) and goes up in steps of 2 in the book, with different maxima per hue and value. This is why the color solid is irregular. Yellows reach high chroma at high values, blues and purples reach high chroma at lower values; the maximum chroma of spectrally pure red is at about value 4.
- Unlike the RGB cube, equal numeric steps are intended to be equal perceptual steps.
- Munsell's training principle: balance. He proposed that harmony arises when colors are arranged along simple paths in the solid (constant value, chroma ramps, hue spokes) and that bright colors are balanced by larger areas of weaker chroma. His slogan (paraphrased) was that strong chromas should be used in small areas and weak chromas in large areas.
- The Munsell Renotation (Newhall, Nickerson and Judd 1943) re-scaled the book from a very large body of observer judgments and is the basis for CIE xyY conversions; the Munsell Book of Color (1929 onward) is still produced.

**Criticism and status.** Chroma steps are not perceptually equal across all hues in the original; the solid cannot be a sphere; neighbors alter appearance. Later systems (NCS, CIELAB, CAM16, Oklab) continued the idea of perceptual coordinates computed rather than looked up.

**Use for LTF.**
1. Think in three axes: define tokens by hue, lightness and chroma rather than hex, and let lightness do the hierarchy work.
2. "Strong chroma small, weak chroma large": big surfaces neutral and low chroma, small accents high chroma. This is a principled basis for an identity: restraint plus one confident accent.
3. Because max chroma differs by hue, equal-chroma palettes look uneven; adjust per hue (blue needs lower value, yellow higher).
4. Name ramps in lightness steps (like 0-10) so contrast ratios follow predictably.

**Additional detail.** Munsell insisted on a rational vocabulary instead of poetic names such as "sky blue" or "old rose", and on teaching color by systematic exercises in matching. This is the intellectual ancestor of design tokens: a color is a coordinate, not a name. His book also proposed balance by averaging: a composition is balanced when the chroma and value of its parts, weighted by area, average toward a neutral grey (his "middle grey" balance). This is a testable and usable heuristic (area-weighted average near neutral), though later evidence (Schloss and Palmer) gives it little direct support as a rule of liking. Munsell is also the ancestor of the sRGB-to-lightness comparison used in modern accessibility work: relative luminance is not the same as Munsell value, which is roughly a cube-root-like function of luminance.

## Albers1963

**Core claims.** Albers held that color is the most relative medium in art: it is nearly impossible to see a color as it is, because it always looks different with context. The book is a course in learning by experiment, using cut colored papers rather than paint, with no theory of "harmony" or color wheels.

**Specifics.** Principal exercises (in the 1963 book and the later full-color edition):
- One color looks like two (same paper on two different grounds) and two colors look the same (different papers made to match using contrasting grounds).
- Lightness reversals: a lighter ground makes a color look darker and the reverse.
- Subtraction of hue and the "after-image" effect, and reversed grounds.
- Vibrating boundaries: two colors of similar lightness but very different hue meet in an edge that appears to vibrate or fuzz. This is the equiluminance effect: edges defined only by hue are weak for the luminance system.
- Transparency and illusion of overlap; color "intervals" (the sense of a middle mixed color between two).
- Bezold effect (spreading): a thin line of one color in a pattern changes the apparent overall color of the whole pattern, because of assimilation.
- Color temperature, "weight", and "boundaries": cool and warm are relative, and shifting a boundary changes the effect.

**Quotation.** None given, to avoid misquoting.

**Criticism and status.** The book is not research and offers no thresholds, and some readers want rules it declines to give. But the phenomena (chromatic induction, assimilation, vibration at equiluminance) are well documented in vision science. The pedagogy of "see it yourself, then name it" is the book's contribution.

**Use for LTF.**
1. Design review rule: judge every color pair at full size in the real context (an "Albers check") because swatches mislead.
2. Avoid adjacent equiluminant saturated hues (red text on green, orange on blue) because they vibrate and blur; separate by lightness.
3. Thin colored lines or small markers inside textured areas shift the whole area's look (assimilation); keep chart gridlines neutral.
4. Teach color-relativity ideas in interactive widgets: this pedagogy is itself a model for "show, don't tell" lessons.

**Additional detail.** Albers deliberately avoided color wheels and names. He had students collect, cut and arrange sheets of colored paper (commercial Color-aid papers), because paper gives flat, unambiguous areas and makes comparison fast. The structure of the course moves from single-color effects (one color looks like two) to relations between colors (intervals, transparency) to the weight and temperature of colors. He also warned against learning by memorizing harmony rules, because every rule fails in some context. For a design knowledge base the lesson is methodological: color decisions are tested by comparing against alternatives in place. A practical routine for LTF: preview each palette change on three real screens (a lesson, the fly-mode view, a dashboard) in both themes before approving it.

## Berlin1969

**Core claims.** Languages do not divide the color space arbitrarily. Berlin and Kay found that basic color terms (single word, not a subtype of another, in common use) are drawn from a universal set of eleven: white, black, red, green, yellow, blue, brown, purple, pink, orange, grey. The number of terms a language has, and which, follows a partial order of evolutionary stages.

**Specifics.**
- Method: speakers of 20 languages (bilingual informants in the San Francisco Bay Area) were asked to name and to pick best examples ("focal colors") of their terms on a chart of 320 chromatic Munsell chips plus 9 neutral chips (329 in total; 40 hues by 8 values at maximum chroma). They also drew on the literature for 78 further languages (98 total).
- Focal points clustered across languages even where category boundaries differed.
- Sequence (as originally stated): Stage I two terms (white/light-warm and black/dark-cool); II red; III green or yellow; IV both; V blue; VI brown; VII purple, pink, orange, grey in any order. Later versions (Kay and McDaniel 1978) tied the sequence to opponent-process cells.

**Criticism and status.** Strongly contested at the details. Roberson, Davies and Davidoff (2000) found Himba and Berinmo speakers' memory and discrimination follow their own category boundaries, not the English ones. The World Color Survey (110 unwritten languages, 2,616 speakers) analyses by Kay and colleagues (2009) support strong cross-language clustering of focal colors but not the strict stage sequence; Regier, Kay and Khetarpal (2007) suggest categories are efficient partitions of perceptual space. Winawer et al. (2007) showed Russian speakers discriminate light and dark blues (goluboy, siniy) faster across their category boundary, a small but real effect of naming on perception.

**Use for LTF.**
1. Restrict categorical UI colors to basic color terms (red, green, yellow, blue, orange, purple, grey): learners can talk and think about them without ambiguity. A "teal" or "indigo" role is not identifiable.
2. Use eight or fewer categorical hues; beyond that, naming collapses.
3. Do not rely on color terms alone across languages; keep text or icon labels.
4. Red, amber (yellow), green in aviation status (caution, warning, advisory) are all basic terms, which backs their reuse in LTF checklists.
5. Brown (ground) and blue (sky) in attitude displays are also basic terms, so the metaphor is cognitively cheap.

**Additional detail.** The book distinguishes basic from non-basic terms by criteria: a term must be one word, not included in another color's range (so scarlet is not basic), not restricted to a narrow class of objects (blond), and psychologically salient (appears early in elicited lists, stable across speakers). English has exactly eleven by these criteria; Russian is often cited as having twelve because goluboy and siniy name light and dark blue. This matters for LTF audiences who speak other languages: a design that depends on a distinction English speakers name (orange versus yellow) may not be named identically elsewhere. The robust finding across later work is that focal colors (best examples) cluster around the same places in perceptual space across languages, while boundaries vary.

## Fairchild1998

**Core claims.** Colorimetry (CIE 1931 XYZ, 1976 CIELAB) predicts matches under fixed conditions, but not appearance: how a color looks changes with luminance, surround, background and adaptation. A color appearance model (CIECAM97s, CIECAM02, iCAM) predicts correlates of lightness, chroma, hue, brightness, colorfulness and saturation across viewing conditions.

**Specifics.**
- CIE 1931 standard observer from color-matching experiments (Wright and Guild, with 2-degree field); chromaticity diagram x, y; Y is luminance. CIELAB (1976): L* = 116 f(Y/Yn) - 16, a*, b*; color difference delta E*ab; a delta E of roughly one is often quoted as barely noticeable for side-by-side patches in ideal conditions; published JND values differ by method and viewing condition, so treat any single figure with caution. CIELAB is poorly uniform in blue and does not model surround.
- Appearance phenomena the book catalogs: simultaneous contrast, crispening (differences near the background lightness look larger), spreading, Hunt effect (colorfulness rises with luminance, so colors look more vivid in a bright room or screen), Stevens effect (brightness contrast rises with luminance), Helmholtz-Kohlrausch effect (saturated colors look brighter than equal-luminance grey), Bezold-Brücke (hue shifts with intensity), Abney effect (adding white shifts hue).
- Surround: Bartleson and Breneman (1967) found perceived image contrast is higher with a bright surround than a dark one; a dark surround needs boosted contrast (a higher gamma) to look right. This is the basis of the video encoding gamma choice and relevant for a dark UI viewed in a dim room.
- Chromatic adaptation: von Kries scaling of cone signals; the eye adapts to the white point in minutes (incomplete adaptation to mixed displays/lighting).
- Dark adaptation: rods peak near 507 nm (scotopic) against cones near 555 nm (photopic), the Purkinje shift: reds darken first at night.

**Criticism and status.** Models work best for simple fields; complex scenes and HDR need more. CAM16 (Li et al., 2017) superseded CIECAM02, but concepts remain.

**Use for LTF.**
1. Day and Night themes must be tuned separately: the same chroma in a dark theme on a lit screen looks more colorful (Hunt effect) and halation affects light text on dark; reduce chroma and avoid pure white on pure black.
2. In a dim sim room, dark surrounds lower perceived contrast; test the Night theme in a dark room, not just the office.
3. Do not invert the Day palette to make Night; re-derive lightness steps.
4. Saturated reds in Night mode look dark first (Purkinje); use lighter reds for alerts there.
5. Assume viewers adapt to the sim monitor's white; keep fly-mode neutral so a second window does not shift their adaptation.

**Additional detail.** The book is organized as: human color vision, color specification (colorimetry, CIELAB), viewing conditions, appearance phenomena, then models and their evaluation. It is explicit about the terminology that designers confuse: brightness and lightness (relative brightness), colorfulness, chroma and saturation (chroma relative to the lightness of the same color, saturation relative to its own brightness). Using these correctly avoids arguing past each other. A Day theme and a Night theme share chroma numerically but not perceptually. The gap between simple contrast ratio and appearance is why WCAG contrast alone cannot guarantee comfort: for example, light text on a dark background is affected by irradiation and halation, particularly for people with astigmatism, so extremely high contrast can be less comfortable than moderate contrast. Treat this as a practical, widely held view rather than a measured threshold.

## MacAdam1942

**Core claims.** Equal distances in the CIE xy chromaticity diagram are not equal perceived differences. MacAdam measured the variability of color matches around 25 reference chromaticities and found each cloud of matches is an ellipse of different size, shape and orientation.

**Specifics.**
- The ellipses are the contours of one standard deviation of repeated color matches, from one trained observer (usually cited as PGN) at a fixed luminance and a small foveal field.
- Ellipse size varies greatly across the diagram: very small in the blue-violet region and much larger (many times larger) in the green region. When plotted they are usually enlarged (commonly by a factor of ten) to be visible.
- One step along a MacAdam ellipse is a "MacAdam step"; lighting standards (LED binning) still specify tolerance in 1-, 3- or 5-step MacAdam ellipses.
- The findings led to uniform chromaticity scales: the CIE 1960 UCS (u, v, from MacAdam's proposal), CIE 1976 u'v', CIELUV and CIELAB, and later Brown and MacAdam (1949) ellipsoids including luminance.
- Wyszecki and Fielder (1971) repeated with three observers and found larger ellipses with clear observer variation.

**Criticism and status.** Small sample, one luminance, color matching (not difference scaling), so it measures precision of matches and not suprathreshold difference. Still the founding evidence that sRGB or xy distances do not track perception.

**Use for LTF.**
1. Never interpolate palettes in sRGB or HSL and expect even steps; do it in a perceptual space (Oklab/OKLCH).
2. Greens tolerate large differences before they look different; use more separation between two greens than two blues.
3. For tiny status shifts (say two similar blues), do not expect learners to see them; require more than a threshold difference.
4. Check mid-ramp colors (the "muddy middle") when building gradients.

**Additional detail.** The experiment worked as follows: a split field with a fixed reference color on one half and an adjustable color on the other; the observer adjusted along one direction in chromaticity until the halves matched, repeated many times; the standard deviation of the settings gave the ellipse axes in that direction. Since a match error is a measure of noise, not necessarily of how different two colors look when clearly separated, later researchers distinguish threshold (MacAdam step) from suprathreshold difference scales. The latter are what palettes need: the colors in a UI differ by many steps, and uniformity at that scale is what Munsell, CIELAB and Oklab approximate. The paper is thus best used to justify the principle (non-uniformity of xy), not as a design threshold.

## Brewer1994

**Core claims.** The structure of a color scheme should mirror the structure of the data. Brewer's typology: **qualitative** (categories, differ in hue, similar lightness), **sequential** (ordered low to high, vary mainly lightness, secondarily hue and saturation), **diverging** (two sequential ramps meeting at a meaningful midpoint, such as zero or a mean), and extra types (binary, paired, accent).

**Specifics.**
- Sequential: lightness change is the primary cue to order; light for low and dark for high on a white background (reverse on dark backgrounds, since "more" should be more visually prominent).
- Diverging: two hues (red/blue, orange/blue, orange/purple, yellow/purple examples) that diverge from a light neutral midpoint, with equal-lightness arms; avoid red-green for color vision deficiency.
- Qualitative: hues vary, lightness and saturation roughly constant so no class dominates. Practical limit: about 8-12 distinguishable classes; ColorBrewer offers up to 12 for qualitative (Set3, Paired) and 9 for single-hue sequential, up to 11 for diverging.
- Companion tool ColorBrewer (Harrower and Brewer 2003) flags schemes as colorblind safe, print friendly, photocopy safe, and LCD/projector friendly.
- Map-specific advice includes adding patterns/outline for small areas and using fewer classes when the display is poor.

**Criticism and status.** Strongly validated in cartography; the rules are for areas on maps and not tuned for thin lines or tiny symbols (small marks need higher contrast). ColorBrewer palettes use a lightness range that is not perfectly perceptually uniform.

**Use for LTF.**
1. Progress dashboards (mastery levels) are sequential: one hue, lightness ramp.
2. Performance versus target (altitude or heading error above/below) is diverging: blue and orange arms with a neutral midpoint.
3. Lesson categories (flight controls, navigation, radio) are qualitative: at most six, same lightness.
4. In Night theme invert the lightness direction (high is brighter).
5. Always add redundant non-color cues.

## Rogowitz1998

**Core claims.** The default rainbow colormap distorts data: it has no perceptual order, introduces false boundaries, and the human visual system does not use the spectrum as a ruler. Rogowitz and Treinish argue that map selection should follow the data type and the task, using rules about luminance and hue.

**Specifics.**
- The rainbow's luminance is non-monotonic: yellow is much brighter than blue or red, so luminance has a peak in the middle. Smooth data therefore appear to have bands and ridges that are not in the data.
- Hue categories (the "perceptual color bands" of blue, cyan, green, yellow, orange, red) create apparent steps where the data change smoothly. Equal steps in data do not give equal perceived steps.
- Their framework: classify data (nominal, ordinal, interval, ratio), the task (isolate, compare, extract form or value) and the spatial frequency; then pick the map. Luminance monotonic (grey-scale like) maps show form best; hue variation helps classify; they recommend combining a monotonic luminance ramp with moderate hue variation.
- They built a rule-based system (PRAVDAColor) that applies such rules. They also showed that a map fixed in a perceptual space (a luminance-uniform path) shows the structure of a known test pattern correctly where a rainbow fails (a prior paper: "How NOT to lie with visualization," Computers in Physics 10(3), 1996).

**Criticism and status.** Widely accepted; MATLAB (parula, 2014), matplotlib (viridis, 2015), and others changed defaults partly in response. Rainbow maps may help some tasks: Ware, Stone and Szafir (2023) argue they aid reading values in high-resolution contexts. Treat "never use rainbow" as "do not use it as default for form".

**Use for LTF.**
1. Any gradient used to encode a quantity should be monotonic in lightness.
2. Avoid rainbow gradients for decoration too, because they read as generic.
3. Altitude or speed bands in widgets should use discrete labeled bands, not smooth hue sweeps.
4. Use a luminance ramp with mild hue shift (like viridis) for continuous quantities.

## Borland2007

**Core claims.** Reiterates the case against the rainbow colormap with simple demonstrations, and recommends alternatives by display type.

**Specifics.**
- Authors' literature survey: each year between 40 and 59 percent of papers using pseudocoloring used a rainbow map, despite criticism.
- Three concrete flaws: (1) no natural perceptual ordering (is green higher than yellow?); (2) uncontrolled changes in luminance mean important features can be hidden (a feature in a dark blue region or a yellow band) and non-features emerge; (3) it hides fine detail since hue gives lower spatial resolution than luminance.
- Experiment-style examples: a simple synthetic ramp, a bump function, and medical (MRI) examples where rainbow introduced banding or hid shape.
- Recommended alternatives: a monotonically increasing luminance map (grey scale or single hue) for form; a double-ended (diverging) map for data with a meaningful center; a color-and-luminance spiral for combination; categorical maps for nominal data; a "mixed" map when users need both form and value.
- Note: for exact value lookup a rainbow can still help because categorical hues serve as landmarks; the paper acknowledges that quantitative reading (value) can benefit from added hue variation.

**Criticism and status.** A position piece; its claims are consistent with the empirical work of Rogowitz, Ware and others. Counter-view in Ware, Stone and Szafir (2023). Consensus: avoid default rainbow for continuous data; acceptable when the task is landmarking particular bands.

**Use for LTF.**
1. Make "no rainbow gradients" an explicit design rule in the book.
2. If a heat-style map is needed (turbulence, terrain elevation lessons), use a perceptually ordered palette.
3. For terrain/altitude tinting in lessons, mirror aeronautical chart hypsometric tints (lessons from chart design lane).
4. Label bands directly rather than relying on a legend lookup.

## Ware1988

**Core claims.** Different tasks on a univariate map need different color sequences. Ware distinguishes **metric** information (reading exact values at a point) from **form** information (seeing the shape and structure of the surface). Grey scale (luminance) is excellent for form, poor for exact value; a hue-varying sequence is better for value but can hide form unless luminance is also monotonic.

**Specifics.**
- Theory: the visual system gets spatial detail mainly from luminance contrast (achromatic channel) and gets color categories from the opponent channels; therefore form needs luminance variation and values need hue categories as landmarks.
- Experiment: five color sequences tested, including a grey scale, a spectrum-like sequence, and sequences spiraling through color space with monotonic luminance. Tasks measured reading errors and perception of surface shape/structure.
- Findings (qualitative summary): the form hypothesis was only partly supported, but sequences that vary both in luminance and in hue are the best compromise; simultaneous contrast causes significant reading errors in maps (the same value looks different against different neighbors).
- Principles offered: use a spiral path through a perceptual space (he worked in CIELUV) with monotonically increasing luminance and varying hue, and keep the sequence from being too short in hue.
- A color sequence editor built in CIELUV (Oliveri and Ware) implements these.

**Criticism and status.** Early, small-sample experiments; modern studies (Rogowitz and Treinish, Bernard, Zeppelzauer et al. 2015) partially agree. Still the intellectual root of luminance-plus-hue designs such as viridis and NASA Earth Observatory palettes.

**Use for LTF.**
1. For a continuous value (airspeed arc, progress), vary lightness steadily and add a mild hue shift.
2. Simultaneous contrast misleads value reading: do not require learners to decode exact values from color alone; add numbers.
3. Use luminance contrast for shapes (needle on dial) and hue only as category or emphasis.
4. Test any color scale in grayscale; it should still be ordered.

## Ottosson2020

**Core claims.** Oklab is a color space with a simple (matrix and cube root) transform from linear sRGB, designed to predict perceived lightness, chroma and hue better than CIELAB, with easy computation. Coordinates: L (lightness), a (green-red), b (blue-yellow); the polar form is Oklch (L, C, h).

**Specifics.**
- Why it exists: CIELAB has known hue nonlinearity (blue shifts toward purple as lightness changes), and models like CAM16-UCS and IPT are more accurate but harder to compute or lack a clean inverse.
- Construction: fitted to data generated from CAM16 (lightness and chroma) and IPT (hue), with the transform: linear sRGB to an LMS-like space by a 3x3 matrix, cube root, then a second 3x3 matrix to Lab. Computation cost is trivial in a shader or CSS.
- Properties he reports: hue uniform when mixing and gradients (blue to white stays blue), lightness predicted well, chroma separate from lightness. Grays map to a=b=0 under D65.
- Follow-ups: Okhsl and Okhsv (2021 post) for pickers, and a gamut clipping post. Gradients in Oklab avoid the grey "dead zone" mid-gradient of sRGB between saturated colors.
- Adoption: included in CSS Color Module Level 4 (oklab(), oklch(), color-mix() in 'oklab'), supported in modern browsers from 2023. Design-tool and framework adoption has followed, but check current documentation before citing any specific product.
- Typical ranges: L 0 to 1, C usually 0 to about 0.4 within sRGB, h 0 to 360 degrees.

**Criticism and status.** Self-published, not peer reviewed; accuracy is a reasonable approximation, not best-in-class (CAM16-UCS and newer models such as Jzazbz are better for HDR and dark colors). Lightness uniformity is weaker for very dark colors. Wikipedia and others note it is not for physically correct blending, where linear RGB is used.

**Use for LTF.**
1. Build the palette in OKLCH: fix L per step across hues so a "500" blue and "500" amber have comparable lightness and predictable contrast.
2. Keep the same hue across a ramp (no blue-to-purple drift).
3. Use `color-mix(in oklch ...)` or oklab for gradients and hover states.
4. Derive Night tokens by changing L and C only, keeping hue.
5. Provide sRGB fallbacks and check gamut clipping.

**Additional detail.** Ottosson also gives a rule for the gradient problem: interpolating two saturated colors in non-linear sRGB passes through a darker, duller middle, while interpolation in Oklab keeps perceived lightness steadier. For palette building the useful workflow is to fix L for each step, choose a C that fits inside the sRGB gamut for every hue at that L, and let hue vary. Because the sRGB gamut is narrower in blues and purples at high lightness, the same chroma cannot be used everywhere and gamut clipping must be handled, which CSS Color 4 specifies as a gamut-mapping step in the oklch space.

## Schloss2011

**Core claims.** Preference for a color pair, harmony of a pair, and similarity must be separated. Prior literature conflicted (some claimed harmony comes from contrast, some from similarity); Schloss and Palmer showed both preference and harmony rise as hue similarity rises, but preference depends more on the liking of the component colors and on lightness contrast, while harmony is more tied to overall similarity.

**Specifics.**
- Stimuli: 32 colors, 992 pairs (web-confirmed). From memory (medium confidence), the set was a grid of eight hues crossed with four levels (saturated, light, muted, dark) taken from Palmer and Schloss's earlier work, and pairs were shown as figure on ground.
- 48 participants rated pairs; group means of preference and harmony correlated r = .79, while individual correlations ranged from about -.03 to +.70, so people differ in whether they conflate the two.
- Preference increased with lightness contrast between the pair; harmony increased with similarity in hue and less with lightness contrast. For preference, dark/light pairs with a well-liked hue (blue-ish, cyan) did best.
- Observers rated pairs that included their own preferred colors higher; mean color liking explained a large share of pair preference.
- This supports the "color preference + similarity" account over classical rules (complementary, triadic wheel harmonies).

**Criticism and status.** Largely consistent with Ou and Luo (2006). Small sample for each task and US university students; patches not interfaces. Later work shows context and semantics (what the colors are on) change preferences (Schloss and Palmer; Palmer and Schloss 2010 PNAS found the "ecological valence" account explains average hue preference).

**Use for LTF.**
1. Do not justify the palette with color-wheel schemes (triad, split complement); the evidence favors analogous hues and strong lightness contrast.
2. Pick a small analogous hue family plus neutral, with one contrasting accent.
3. Contrast of lightness drives both legibility and preference; a design that is liked and legible converges.
4. Remember individuals vary: do not assume the owner's taste represents all users, so test with learners.

## Ou2006

**Core claims.** Two-color harmony can be modeled quantitatively in CIELAB-based coordinates, with harmony predicted by chromatic and lightness factors.

**Specifics.**
- Stimuli: 1431 two-color pairs rated for harmony on a 10-category scale (the abstract confirmed by search); an independent data set tested the model.
- Model components (from the authors' description, details approximate): a **chromatic effect** (HC) from the chroma of the two colors, with higher chroma in the pair reducing harmony for strongly saturated pairs; a **lightness effect** (HL) increasing with the lightness of the pair and with lightness difference; and a **hue effect** (HH) where hue combinations vary in harmony and blue-ish colors give more harmony than yellow-ish. The sum predicts harmony score.
- Defined harmony as connected with pleasantness and order; "generally speaking, harmony increases with lightness and with lower chroma".
- Related: Ou, Luo, Woodcock and Wright (2004) "A study of colour emotion and colour preference" Parts I to III, Color Research & Application 29, link emotion to preference.

**Criticism and status.** Single-pair model; interfaces involve many colors and context. Participants mostly from two countries. Treat coefficients as approximate. It supports the idea that low-chroma, light pairs are rated more harmonious; that is partly a taste for restraint.

**Use for LTF.**
1. Use low-to-moderate chroma for large areas; reserve high chroma for small accents.
2. Be careful with high-chroma yellow-based pairs, which scored low on harmony.
3. Pairs of lighter tints read as harmonious but may fail contrast: check both harmony and WCAG contrast separately.
4. Use this evidence base (not folk rules) when the owner asks "which colors go together".

## Heer2012

**Core claims.** A probabilistic model of how people name colors can be turned into tools: color saliency, name distance, and name-based palette evaluation.

**Specifics.**
- Data: the XKCD Color Survey, an online survey with a very large number of responses (hundreds of thousands of participants) in which people named randomly shown RGB colors.
- Model: for each point in a discretized CIELAB space, a probability distribution over names (most common 150 or so names). From it: **saliency** (how consistently a color gets one name, lower entropy) and **name distance** (difference in naming distributions, based on cosine distance of name vectors).
- Applications: a color dictionary/thesaurus; image editing by name selection; palette tools that detect colors with confusable names.
- Palette guidance: in categorical palettes, colors should have high name distance and high saliency; colors that share names (two blues both called "blue") are hard to talk about and to match to legends. Name-based selection improves memory and legend-matching.
- Stone has pushed this view in practice at Tableau: categorical palettes with distinct nameable hues, and guidelines that color differences be large for small marks.

**Criticism and status.** Samples are English-speaking and self-selected, with uncalibrated displays; names differ across languages (Berlin and Kay). Complementary to Berlin and Kay.

**Use for LTF.**
1. Test every categorical color for a unique name; if two roles share the same name, merge or move one hue.
2. Name tokens by common color words in the docs; saliency suggests which hues are reliable.
3. Avoid colors with low saliency (muddy olive/teal) as identity colors; they are hard to remember and describe.
4. Run a quick "name test" with five learners on a palette.

**Additional detail.** The paper argues that a numeric color difference (for example in CIELAB) is not the only difference that matters: two colors may be far apart numerically yet share a name, or be close yet named differently. They propose combining color difference with name difference when picking categorical palettes, so that palette colors are separable both perceptually and linguistically. Stone's wider guidance (A Field Guide to Digital Color, 2003, and her work for Tableau) adds that small marks need larger color differences than large areas, that light colors on a white background are hard to see, and that the number of colors a viewer can separate in a legend is limited. These points follow from the same idea: color is useful when it can be named, remembered and matched back to a legend.

## Livingstone2002

**Core claims.** Primate vision has partly separate pathways: a luminance-sensitive system (magnocellular, color-blind, fast, good at position, motion, depth and spatial detail; she labels it the "Where" system) and a color-sensitive system (parvocellular and blob pathways; "What" system, object and face recognition). Painters exploit the difference.

**Specifics.**
- Equiluminant colors (same luminance) are seen well by the color system but poorly by the luminance system, so edges look indistinct, motion appears weak, and a shimmer is perceived. Example: the sun in Monet's *Impression, Sunrise* has roughly the same luminance as the sky, so it seems to float or vibrate.
- Luminance defines shape and depth: a black and white (luminance) version of a painting preserves spatial structure; colors alone make it look flat.
- Mona Lisa's smile is discussed in terms of spatial frequency: low spatial frequencies (blurry view from peripheral vision) show a smile that high frequencies (direct gaze) lose.
- Color perception is slow and spatially coarse compared with luminance; colored regions can "bleed" past outlines without being noticed (as in watercolor wash and Fauvist work).
- Practical test: convert an image to grey; if edges and hierarchy vanish, the design relies on hue alone.

**Criticism and status.** Dichotomy oversimplified (color and luminance interact at many stages, the magno stream carries some color information, and equiluminance does not eliminate motion perception completely). Supported in broad strokes by psychophysics of equiluminant stimuli.

**Use for LTF.**
1. Design in grayscale first; hierarchy is carried by lightness, then color is added.
2. Never put text on a background of the same lightness (e.g. orange on blue-green), however different the hue.
3. Color fills can be coarse and soft; crisp luminance edges outline shapes in widgets (needle, horizon line).
4. Motion cues (needle motion, animated lessons) should use luminance contrast, because equiluminant motion looks slow.
5. Peripheral glances in fly mode rely on low-spatial-frequency luminance blobs, so key states need large lightness differences.

**Additional detail.** The book is written for artists as much as scientists, and each chapter pairs a physiological fact with a painting: the fovea and the way detail is seen only in a tiny area; low-resolution vision of the periphery; equiluminance; depth from shading; and motion. It relates shading and edges to the luminance system and explains why a grey-scale copy of a painting reveals composition. Neuroscientists accept the underlying anatomy (separate magnocellular and parvocellular streams) but also note the streams mix in cortex, so the book is best used as a heuristic for design rather than as a strict anatomical claim. The heuristic is reliable: test the lightness structure, then the hue structure.

## Lane synthesis

**Where sources agree.** (1) Color is relative: Chevreul, Albers and Fairchild all show that a color's appearance depends on neighbors, surround and adaptation. (2) Lightness is the workhorse: Livingstone, Ware, Rogowitz, Borland and Brewer all say luminance carries form and order, hue carries category. (3) Perceptual uniformity is not provided by sRGB or xy: MacAdam, Munsell and Ottosson show you must work in a perceptual space. (4) Categories are limited and nameable: Berlin and Kay and Heer and Stone both support small sets of well-named hues.

**Where they conflict.** Harmony: Chevreul and Itten-style theory favors complements and contrast; empirical work (Schloss and Palmer, Ou and Luo) favors hue similarity, lightness contrast and component-color liking, with high individual variation. Rainbow: Rogowitz, Borland and Taylor against; Ware, Stone and Szafir 2023 find task-specific value. Naming universality: Berlin and Kay strong universals versus Roberson and others emphasizing language effects. Oklab is practical but self-published and not best in class.

**Ten actionable takeaways.**
1. Define all palette tokens in OKLCH; keep lightness steps constant across hues and name steps by lightness.
2. Design hierarchy and states in grayscale first, then add hue (equiluminance warning: no text on same-lightness hues).
3. Large areas low chroma, small accents high chroma (Munsell, Ou and Luo); aim for one confident accent hue to give identity.
4. Do not justify colors with color-wheel harmony schemes; use analogous hues plus a neutral and test with real learners.
5. Limit categorical colors to about six, all with common names (red, orange, yellow, green, blue, purple) and check name distance.
6. Use sequential ramps for progress, diverging for error above/below target, qualitative for categories (Brewer); always add redundant cues.
7. No rainbow gradients; use monotonic lightness plus mild hue shift (Ware).
8. Build Night separately from Day: lower chroma, re-derive lightness, test in a dark room (Hunt effect, surround).
9. Avoid vibrating adjacent saturated pairs and separate clashing colors with a neutral keyline (Chevreul, Albers).
10. Judge colors in context at actual size; swatches deceive, and equal-looking colors differ by neighbors.
