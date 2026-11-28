# Density test: Part XI, Forms, Onboarding and Touch

Test section: "When to validate a field" (from the chapter on validation and error messages).
Sources: `bargasavila2010simple`, `wroblewski2009inline`, `scott2024inline`, `seckler2014designing`.

## Draft 1: terse (about 150 words)

Inline validation is contested. The Basel study reported by Bargas-Avila and colleagues found
that messages shown as each field was left produced more errors than messages shown after
submit, because people ignored them [@bargasavila2010simple]. Wroblewski's study of 22 users
found the best inline variant beat a submit-only control on success, errors, time and
satisfaction, with "after" timing best and "before and while" worst [@wroblewski2009inline].
Baymard recommends validating on blur, or at a known length for fixed-length fields, clearing
errors as soon as the field is valid, and keeping a submit-time summary [@scott2024inline].
The common ground: never validate on the first keystroke, validate on leaving the field,
clear errors immediately, keep the summary. For LTF, check quiz answers only on submit.

## Draft 2: medium (about 400 words)

The timing of validation is the most contested question in form design, and the sources
disagree in ways that are informative. In a 2007 comparison of six error-message designs,
reported in the Bargas-Avila chapter, messages embedded next to fields and shown after the
send button led to fewer consecutive errors, while inline validation (the message appears as
the field is left) led to significantly more errors, because people ignored or dismissed the
messages [@bargasavila2010simple]. Two years later Wroblewski, with the London firm Etre,
tested a submit-only registration form against five inline variants with 22 users. The best
inline version beat the control on every measure, and the timing variants separated clearly:
validating after the field was left was fastest, and "before and while" produced the most
errors and the worst satisfaction, because premature messages distracted people
[@wroblewski2009inline]. Only 30 to 50 percent of participants noticed messages on easy fields
such as name and email, against 80 to 100 percent on harder fields such as user ID and
password.

Baymard's large-scale e-commerce testing agrees on timing: validate when the user leaves the
field, or once a fixed-length field reaches its expected length; recheck on every keystroke
once an error is showing so it clears the moment the input is valid; and keep a traditional
error page because people still submit with errors present [@scott2024inline]. It reports no
sample sizes.

The reconciliation is the one Wroblewski proposes himself: timing and message design matter
more than the policy. All three sources are compatible with these rules: no message before
the person has finished typing; a message on leaving the field only where mistakes are likely;
errors that clear as soon as they are fixed; and a summary at submit as a safety net.

For LTF, the signup form already validates on submit through react-hook-form and revalidates
on change after a failed submit, which matches the "clear immediately" advice. Quiz answers are
a different case: checking correctness while the learner types would turn recall into trial
and error, so `QuizBlock` should keep checking only on "Check answer".

## Draft 3: full (about 850 words)

The timing of validation is the most contested question in form design. The sources disagree,
and the pattern of disagreement is more useful than any one headline number.

The earliest result points against inline validation. In a 2007 comparison of six ways of
presenting error messages, reported by Bargas-Avila and colleagues in their review chapter,
messages embedded next to the fields and shown after the person pressed send led to fewer
consecutive errors. Inline validation, where the message appears as the person leaves a
field, led to significantly more errors, because people ignored or dismissed the messages
[@bargasavila2010simple]. The study came from the authors' own lab, with a modest sample.

Two years later Wroblewski, working with the London firm Etre, compared a registration form
that validated only on submit with five variants that validated inline, with 22 users aged 21
to 49 seeing all six versions in random order [@wroblewski2009inline]. The best inline variant
beat the control on success, errors, completion time, satisfaction and eye fixations. Timing
mattered: "after" (validate when the field is left) was fastest, seven to ten seconds faster
than "while" and "before and while", and "before and while" produced the highest error rates
and worst satisfaction because messages appeared before people had finished. Noticing depended
on difficulty: 30 to 50 percent of participants noticed validation messages on the easy first
fields (name, email) against 80 to 100 percent on the harder fields (user ID, password).
Persistent messages outside the field worked best; fading success messages were missed, and
success ticks on trivial fields left people unsure whether they meant "correct" or merely
"valid". The caveats are large and the article states most of them: a small sample, metrics
that Etre called indicative, errors counted only at submission (which flatters the inline
versions, since corrections made along the way were not errors), and no screen-reader users.

Baymard's e-commerce research adds three implementation details [@scott2024inline]. First,
avoid premature validation: validate on blur, and for fixed-length fields such as ZIP codes
and card numbers validate once the expected length is reached. Second, remove an error as soon
as the field becomes valid, rechecking on every keystroke once an error is showing; leaving a
fixed field flagged, especially a password confirmation, made participants think it was still
wrong. Third, show positive validation on all fields. It also advises keeping a traditional
error page, because people submit with errors present. The article reports no sample sizes and
no statistics, and its setting (address and card entry at checkout) is far from a learning
site.

Where the sources conflict, the conflict is real. Baymard's positive validation on every field
runs against Wroblewski's finding that ticks on trivial fields confuse, and nothing in the
reviewed material tests the two head to head. The Basel result and the Etre result are
compatible only if timing and message design drive the effect, which is Wroblewski's own
conclusion. What survives across all three is: no message before the person has finished
typing; a message on leaving the field only where mistakes are likely; errors that disappear
the moment they are fixed; and a summary at submit. Seckler and colleagues' bundle test, which
included "show error messages after the form is sent, all together, embedded in the form",
found guidelines on format specification and error messages had the strongest effect on
first-attempt success [@seckler2014designing], which supports keeping the submit-time path
strong whatever inline layer is added.

For LTF: `SignupForm` and `LoginForm` use react-hook-form with its default submit-time
validation, show an `ErrorSummary` that takes focus, and attach each message to its
`FormField` with an octagon icon and text. After a failed submit, the library revalidates on
change, which clears errors as soon as they are fixed. That is the defensible common ground.
The one place an inline signal earns its place is the password: `PasswordStrengthMeter`
updates as the learner types and says "Strength: ..." in words, which is positive guidance on a
hard field, not a premature error. Quiz answers are different in kind. `QuizBlock` checks
correctness only when the learner presses "Check answer"; checking while typing would turn a
recall task into trial and error. Do not quote the Etre percentages (22, 31, 42, 47) as
general effects in LTF documents; they come from one small study of one form.

## Verdict

The terse draft keeps the conclusion but drops the noticing finding (30 to 50 percent against
80 to 100 percent), the "ticks confuse" result, the counting flaw that flatters inline
validation and the Baymard versus Wroblewski conflict. Without those, a reader cannot see why
the rule is graded as contested or apply it to the password field. The medium draft keeps most
findings but loses the caveats, the success-tick conflict and the concrete mapping to
`PasswordStrengthMeter` and `ErrorSummary`. The full draft keeps every number, caveat and
application and has no restatement once the summary paragraph is trimmed to the points that
survive. **Chosen density: full**, with one discipline: each paragraph must add a finding, a
caveat or an application, and the closing application must name LTF code, not repeat the
evidence.
