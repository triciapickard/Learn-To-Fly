# Density test: Part XXV, Accessibility

Test section: "Size and space for pointers and fingers" (from the chapter on pointer, touch and
motor access), drafted from the notes for w3c2023wcag, w3c2024wcag (lane 28 Understanding
pages for 2.5.5, 2.5.7 and 2.5.8), parhi2006target and connell1997principles.

## Draft 1: terse (about 150 words)

WCAG 2.2 adds 2.5.8 Target Size (Minimum) at Level AA: pointer targets must be at least 24 by 24
CSS pixels, unless spacing, an equivalent control, inline text, a user agent control or an
essential presentation applies. The spacing exception passes an undersized target when a
24-pixel circle centered on it touches no other target. The AAA criterion 2.5.5 asks for 44 by
44, a figure the Understanding page does not justify. Parhi and colleagues found error rates for
one-handed thumb tapping stopped improving at about 9.6 mm, so they recommended 9.2 mm for
discrete and 9.6 mm for serial targets, from twenty young participants on a 2005 PDA. The
universal design principle of size and space points the same way. For LTF, 24 pixels is the
floor; Fly mode controls, checklist ticks and widget steppers should be 44 pixels or larger, and
the 32-pixel `sm` button should not be used there.

## Draft 2: medium (about 400 words)

WCAG 2.2 made target size a Level AA requirement for the first time. Success criterion 2.5.8
Target Size (Minimum) asks that pointer targets be at least 24 by 24 CSS pixels, with five
exceptions: spacing (an undersized target passes if a 24 CSS pixel circle centered on its
bounding box intersects no other target and no other undersized target's circle), an equivalent
control on the same page that meets the size, inline targets inside a sentence, targets sized by
the user agent and not changed by the author, and presentations that are essential or legally
required. The Understanding page says the purpose is to let people activate a target without
hitting a neighbor, and that spacing can work as well as size: a row of 20-pixel buttons with
4-pixel gaps passes, the same row with no gaps fails. The AAA criterion 2.5.5 uses 44 by 44 CSS
pixels; the Understanding page does not say how 44 was derived, but it recommends larger targets
for frequent controls, actions that are hard to undo, edge-of-screen controls and steps in a
sequence.

The touch research sits above the standard's floor. Parhi, Karlson and Bederson had twenty
right-handed participants tap with one thumb on a small device. Speed kept improving as targets
grew, but errors stopped improving between 9.6 and 11.5 mm, and they recommended 9.2 mm for
discrete targets and 9.6 mm for serial entry. The sample was small, young, mostly male and
standing, on a 2005-era device. The universal design principles name size and space for approach
and use, and accommodating variation in hand size, as a principle in its own right.

For LTF the floor is 24 pixels everywhere. The `Button` `sm` size (32 px) passes the floor but
not the 44-pixel level, which matters in Fly mode, where a learner taps a checklist tick on a
tablet while holding a yoke. Use `lg` (48 px) for every Fly mode control, keep plus and minus
steppers in widgets apart, and check the `ThemeToggle`'s 32-pixel segments against the spacing
test.

## Draft 3: full (about 800 words)

Target size became a Level AA requirement in WCAG 2.2. Success criterion 2.5.8 Target Size
(Minimum) says the target for a pointer input is at least 24 by 24 CSS pixels [@w3c2024wcag].
There are five exceptions. Spacing: an undersized target passes if a circle of 24 CSS pixels
centered on its bounding box does not intersect another target or the circle of another
undersized target. Equivalent: the same function is available from another control on the page
that meets the size. Inline: the target sits in a sentence or its size is set by the line height
of surrounding text. User agent: the browser sizes the control and the author has not changed it.
Essential: a particular presentation is essential or legally required. The Understanding
document states the purpose plainly (a person should be able to activate a target without
accidentally activating its neighbor) and says spacing can be as effective as size. Its worked
example is a toolbar: buttons 20 pixels high with 4-pixel margins pass by spacing; the same
buttons with no gaps fail.

The enhanced criterion, 2.5.5 Target Size (Enhanced) at Level AAA, uses 44 by 44 CSS pixels.
The Understanding page does not explain how 44 was chosen. It does name where larger targets
matter most: controls used often, actions that cannot easily be undone, controls that are hard to
reach or sit at a screen edge, and steps in a sequential task. Critics of 2.5.8 call 24 pixels a
deliberately low compromise and note that the spacing exception lets visually tiny controls pass;
24 CSS pixels is about 6 mm at the nominal 96 pixels per inch, though a CSS pixel has no fixed
physical length on a phone.

The experimental anchor is Parhi, Karlson and Bederson's study of one-handed thumb use
[@parhi2006target]. Twenty right-handed participants (aged 19 to 42, 17 of them men, only five
with any touchscreen handheld experience) stood and tapped with the right thumb. Discrete targets
ranged from 3.8 to 11.5 mm and were surrounded by distractors with zero edge spacing. Task time
fell with every increase in size, even between the two largest. Error rates fell too, but the
difference between 9.6 and 11.5 mm was not significant. A box of 9.1 by 8.9 mm enclosed 95
percent of hits on a 9.6 mm target. In the serial task, a four-digit keypad, errors were higher
at 5.8 mm than at 9.6 mm and above. The authors recommended 9.2 mm for discrete targets and
nothing under 9.6 mm for data entry, and they recommended that targets on the right edge extend to
the edge of the screen for right-handed users, because hits leaned right there. The limits are the
sample, the 2005 device and the standing posture.

The universal design principles reach the same conclusion from a different direction. Principle 7,
size and space for approach and use, asks for comfortable reach and for accommodating variation
in hand and grip size; principle 6, low physical effort, asks designers to minimize repetitive
actions [@connell1997principles]. These are expert consensus from product and built-environment
design, mapped loosely to software.

Put together, the evidence supports a two-level policy. The standard's 24 pixels is a floor that
every pointer target must meet, by size or by spacing. Controls a learner uses often, uses in a
sequence or uses while attending to something else should be larger, at the 44-pixel level or
more, because the AAA guidance and the touch study both point that way.

For LTF, every `Button` size passes the floor (32, 40 and 48 px), so the risk is not a failing
size but the wrong size in the wrong place. The `sm` size appears in the widget steppers (the
plus and minus buttons beside the airspeed slider in `AirspeedIndicator.tsx`) and in the header.
In Fly mode (`FlyModePage`, `FlyPanel large`) a learner taps checklist ticks and "Got it" on a
tablet with one hand while the other holds a yoke, and looks back and forth between screens. That
is the frequent, sequential, divided-attention case the AAA guidance names, so every Fly mode
control should be `lg` or larger, with gaps between neighbors. The `ThemeToggle`'s 32-pixel
segments sit flush in their track; they pass by size, but a test should confirm it.

## Verdict

The terse draft keeps the thresholds but drops the spacing test's mechanics, the toolbar example,
the list of where larger targets matter, the study's sample limits and the hit-distribution
finding, all of which a reviewer needs to apply or challenge the rule. The full draft keeps every
number and caveat in the notes, but its closing synthesis paragraph partly restates the two
sources and its last paragraph overlaps with what the chapter-ending section will say. The medium
draft loses the study's sample details and the right-edge finding, which are practical.

Chosen density: between medium and full, about 600 to 700 words for a section of this weight. Keep
every threshold, exception, sample size and limit; cut the synthesis paragraph that restates the
sources; and move product application to the chapter-ending section and the rule's *In LTF*
line instead of a closing paragraph. The Part is written at this density, and the word floor is
reached by covering more criteria, more studies and more LTF components, not by restating.
