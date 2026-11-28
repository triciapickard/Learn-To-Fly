# Forms, Onboarding and Touch

This Part covers the moments when a learner gives Learn to Fly something: an email address, a
typed answer, a tick on a checklist step, a tap on a tablet propped beside the simulator. Those
moments are small, and they are where products lose people. The Part takes them in order: how
to decide what to ask, how to lay out a form, how answer spaces prevent errors, when to
validate and how to word an error, how to let people take a mistake back, how a first run
should teach, how large and how far apart touch targets must be, which gestures beginners can
be expected to know, and how to design the Fly mode screen that a learner glances at while
flying.

The evidence is uneven, and the Part says so rule by rule. Pointing and target size rest on
one of the most replicated regularities in human performance and on several independent touch
studies that agree in shape if not in numbers. Form design rests on a small number of lab
experiments, a bundle test of 20 guidelines, survey-methodology experiments on answer spaces,
and a much larger body of practitioner writing, some of which has been repeated so often that
its weak origins are forgotten. Onboarding rests on a research program at IBM in the 1980s and
on practitioner analysis since. Validation timing is genuinely contested. Use the grades: an
**A** or **B** rule should be broken only with evidence; a **C** rule is the agreed craft and
can be revisited when LTF's own testing says otherwise; a **D** rule records a live dispute and
the position LTF takes on it.

## Forms as conversations

### Why forms matter more than their size suggests

A form is rarely the reason anyone visits a site. Bargas-Avila and colleagues open their
review of web form research with exactly that point: forms are the main contact point between
users and site owners, people never visit a site in order to fill one in, and an unusable form
is a hurdle at which the transaction is lost [@bargasavila2010simple]. For Learn to Fly the
"transaction" is not a purchase. It is a learner deciding to keep going: creating an account so
progress is saved, typing an answer into a quick check, scoring their own flight in a debrief.
A clumsy field at any of those points costs more than the seconds it wastes, because it lands
at the exact moment the learner is deciding whether this course is for them.

The best direct evidence that form quality matters comes from Seckler and colleagues, who took
20 published guidelines, rebuilt three real newspaper registration forms to follow them, and
compared original and improved versions in an eye-tracking lab study with 65 participants
[@seckler2014designing]. The original forms broke 9, 9 and 12 of the guidelines. The improved
versions needed fewer submission attempts in all three cases. Completion time fell by 25
percent on one form (113 to 85 seconds), 33 percent on another (105 to 70 seconds) and 18
percent on the third (104 to 85 seconds). The difference was significant for the two weaker
forms, with effect sizes of d = .93 and 1.00, and not significant for the best one. Three
features of the result matter for how it is used. First, the gains were largest where the
original was worst, so benefits shrink as baseline quality rises. Second, a keystroke-level
model had predicted only a 7 to 23 percent improvement, so counting keystrokes underestimated
what the redesign did. Third, the study tested the guidelines as a bundle, so it cannot say
which single guideline did the work; from interviews and error counts the authors inferred
that format specification and error-message handling mattered most, and that expert severity
ratings did not track real user impact well.

### Three layers of a form

Jarrett and Gaffney describe a form as a conversation conducted in three layers
[@jarrett2009forms]. The **relationship** layer is why the person is there and whether they
trust and understand what is being asked. The **conversation** layer is the questions
themselves and whether they can be answered. The **appearance** layer is layout and controls.
A form fails if any layer fails, and work on appearance cannot fix a failure in the other two.
The model has no experimental test behind it; its value is diagnostic, because it sends each
problem to the layer where the fix lives.

The model is sharpest when applied to LTF's in-sim challenges. A planning field in a debrief
asks the learner to record a value from their flight. If they do not know which instrument to
read, the failure is in the conversation layer: the question cannot be answered as posed. If
they do not see why the field exists or whether it is scored, the failure is in the
relationship layer. Only if they know both and still mistype does the appearance layer come
into play. A redesign that only restyles the input would leave the first two failures in place.

::: {.rule #FRM-001 grade="C"}
**Before changing how a form looks, name the layer that is failing: relationship,
conversation or appearance.** Jarrett and Gaffney's three-layer model routes each problem to
its fix: an unclear reason for asking is a relationship problem, an unanswerable question is a
conversation problem, and only a field that is understood but mis-entered is an appearance
problem [@jarrett2009forms]. The model is a framework, not a tested result, so use it as a
review question rather than a proof.

*In LTF:* every design review of `SignupForm`, `LoginForm`, `DebriefForm` and `QuizBlock`
states which layer a proposed change addresses. Restyling `control-box` does not count as a
fix for a planning field the learner cannot answer.
:::

### Every question has a cost

Wroblewski's account of form design starts from the observation that any question asked
requires people to parse it, formulate a response and input their answer, so the first
question about any field is whether it can be removed, postponed or inferred
[@wroblewski2008web]. That is craft authority, drawn from his work at Yahoo! and eBay and
from commissioned usability studies, and the book is not peer reviewed. The principle needs no
experiment to be useful, because it is a discipline of asking rather than a claim about
effect size. Bargas-Avila's guideline set reaches the same point from the empirical
literature: ask only what is necessary [@bargasavila2010simple].

::: {.rule #FRM-002 grade="C"}
**Justify every field by what LTF does with the answer; remove, postpone or infer any field
that has no use at the moment it is asked.** Each question costs the learner a parse, a
decision and an entry [@wroblewski2008web], and the guideline literature puts "ask only what
is necessary" first [@bargasavila2010simple]. Seckler and colleagues deliberately did not test
the "keep the form short" guideline [@seckler2014designing], so this rule rests on craft
consensus, not a measured effect.

*In LTF:* the review question for any new field in `SignupForm`, `DebriefForm` or the account
sections is "what screen uses this value, and is that screen reached before the learner could
have been asked later?"
:::

### Counting the work

The keystroke-level model of Card, Moran and Newell predicts how long an expert takes to run a
routine method by summing standard times for its operations: keystrokes, pointing, homing the
hands between devices, mental preparation and waiting for the system [@card1980keystroke]. It
was validated against 28 users on 10 systems over 14 task types, with a root-mean-square error
of 21 percent for single tasks. Its constants were measured on 1970s editors and should be
treated as historical. Its structure remains a useful design tool. Mental preparation, the
operator placed wherever a decision must be made, costs more than any keystroke, and homing is
paid every time the hand moves between devices. Seckler's result shows the model's limit: it
predicted a smaller gain than the real redesign achieved, because it ignores errors, rereading
and uncertainty, which is where most of a novice's time goes [@seckler2014designing].

::: {.rule #FRM-003 grade="B"}
**Compare two form or flow designs by counting their operations (fields, decisions, pointing
moves and device switches), and remove decisions first.** The keystroke-level model predicts
routine expert time from such counts with about 21 percent error on single tasks
[@card1980keystroke], and it treats each decision as the most expensive step. It
underestimates novice gains because it ignores errors [@seckler2014designing], so use it to
rank designs, never to promise timings.

*In LTF:* write the operator count in the pull request when changing a flow such as
sign-up after "Mark lesson complete", or ticking a step in `FlyPanel`. Do not quote
millisecond values from the model in design documents.
:::

::: {.rule #FRM-004 grade="B"}
**Fix the forms that break the most guidelines first, and expect smaller gains on forms that
are already good.** In Seckler's bundle test, improvements were significant on the two weaker
forms and not on the best one, and expert severity ratings did not predict which problems
hurt users [@seckler2014designing].

*In LTF:* audit the forms against the checklist at the end of this Part and rank them by
violations. On present evidence the debrief planning fields and the quiz numeric entry need
more work than `LoginForm`, which already follows most of the guidelines.
:::

### Testing with the people who will use it

Shneiderman's early work on system messages ended with an acceptance test: run the messages
past the target user community before release, and collect data on how often each error
condition occurs [@shneiderman1982designing]. Seckler's finding that expert ratings of
severity did not track user impact makes the same point from the other direction
[@seckler2014designing]. Jarrett and Gaffney call testing the best part of making a form
[@jarrett2009forms]. None of these sources says how many testers are enough for a form; for
LTF the practical floor is a handful of real beginners per significant form, because the
people who build LTF already know what every field means.

::: {.rule #FRM-005 grade="B"}
**Test every new or changed form with a few beginners before release, and do not let expert
judgment of severity stand in for that test.** Experts' severity ratings did not track actual
user impact in Seckler's study [@seckler2014designing], and acceptance testing with the
target users is one of Shneiderman's five recommendations for messages
[@shneiderman1982designing].

*In LTF:* a challenge with planning fields or a new quiz type is not published until two or
three people who have never flown have filled it in while someone watches, and the question
"what would you do next?" has been asked at each error.
:::

### What this means for Learn to Fly

LTF has few forms, and each sits at a moment of commitment. The inventory, from the code:
`SignupForm` (display name, email, password with `PasswordStrengthMeter`, a terms checkbox),
`LoginForm` (email, password, "Remember me for 30 days"), the account sections (profile,
preferences, security, and the data section with export and a typed-confirmation delete
dialog), `QuizBlock` (single choice, multiple choice, numeric and ordering questions), the
challenge `DebriefForm` (a radio rubric per criterion, optional planning fields, optional
reflections, notes and a "paused the sim" checkbox), the `ReportProblemDialog`, the challenges
filter of five `Select`s and the reference search field.

Keep the shared plumbing. `FormField` already puts the label above the control, wires
`aria-describedby` and `aria-invalid`, and renders errors as text with an octagon icon; the
auth forms already use `ErrorSummary`, which takes focus after a failed submit. That is a sound
base, and most of the rules in this Part ask for changes at the conversation layer rather than
new components. Change the review habit: every form change names its layer (FRM-001), justifies
each field (FRM-002), carries an operator count (FRM-003) and is watched in use by beginners
(FRM-005). Build a short "forms audit" pass into the `ltf-review` client checklist so that
FRM-004 is applied to the worst form first rather than the most visible one.

## Asking less, and asking later

### Account walls and the moment of value

The most expensive form in most products is the one that stands between a newcomer and the
thing they came for. Wroblewski's discussion of registration includes a case study, credited
to Jared Spool and reported in a review of the book, in which a store replaced a mandatory
register step before checkout with a continue button and a note that an account was optional
[@wroblewski2008web]. The review gives a large percentage gain for that change, but the figure
is secondhand, from Spool's article rather than the book's own research, and it was not
verified for this Part, so it is not repeated here. The direction is consistent with every
other source in this Part: people act first and register when registering gives them
something. Kendrick's analysis of mobile onboarding lists account creation among the few
situations in which an up-front screen can be justified, and her example is a banking app
where identity must be confirmed before anything else can happen [@kendrick2020mobileapp]. A
free course is the opposite case.

LTF already behaves well here. The landing page says "You can start without an account", the
primary call to action goes straight to Lesson 0.1, and the first prompt to sign up arrives
when the learner presses "Mark lesson complete" while signed out: a dialog titled "Save your
progress" explains that an account is needed "to mark lessons complete, save quiz answers and
track your challenge scores", with "Not now", "Log in" and "Sign up free". That is an account
request tied to the exact moment it pays off. The open question is what happens next: if the
learner signs up from that dialog, the lesson they just tried to complete should be marked
complete on return, or they will have to repeat the action that triggered the request. The
code reviewed for this Part shows the `returnTo` path but not whether the completion is
replayed, so this needs checking.

::: {.rule #FRM-006 grade="C"}
**Let the learner start and finish the first lesson without an account, and ask for one only
at the moment it gives them something they asked for.** Practitioner analysis treats an
up-front account step as justified only when the product cannot work without identity
[@kendrick2020mobileapp], and the form literature's first question is whether a step can be
postponed [@wroblewski2008web]. The evidence is craft consensus and case reports, not a
controlled comparison.

*In LTF:* keep the "Mark lesson complete" dialog as the main account prompt. When a learner
signs up from it, complete the lesson they were finishing before showing the lesson page
again. Do not add an account step to `/welcome` or to Lesson 0.1.
:::

### Remove, postpone, infer

Applied to `SignupForm`, the remove-postpone-infer test asks a hard question of each field.
Email and password are needed to create a credential. The terms checkbox ("I understand this
is for simulation only and agree to the Terms") records consent to a safety disclaimer that
the product depends on, so it stays. The display name, with the hint "Shown on your dashboard.
2–40 characters.", is used only by the dashboard greeting ("Welcome aboard, {name}!"). It could
be postponed to the account page or to the first dashboard visit, or inferred from the part of
the email address before the at sign and offered for editing later. Each of those moves takes
a field and a decision out of the sign-up moment. Whether the saving is worth the loss of a
personal greeting on first visit is a product choice; the rule is that the choice is made
explicitly and recorded.

::: {.rule #FRM-007 grade="C"}
**For every field on a sign-up or setup form, record whether it was removed, postponed,
inferred or kept, and why.** Asking whether a question can be removed, postponed or inferred
is the core discipline of form design in the practitioner literature [@wroblewski2008web], and
asking for as little as possible is one of the W3C's cognitive accessibility patterns for
preventing mistakes [@seemanhorwitz2021making].

*In LTF:* the `SignupForm` display name is the first candidate. Either postpone it (default it
from the email and let the learner edit it in `ProfileSection`) or keep it with a recorded
reason in the pull request that last touches the form.
:::

### Say why before you ask

The relationship layer is easy to neglect because it rarely shows up as an error. A learner
who does not know why LTF wants an email address does not make a mistake; they leave. Jarrett
and Gaffney's model puts this first: before a person answers, they need to know why they are
being asked and what will happen with the answer [@jarrett2009forms]. Seckler's guideline set
includes the other end of the exchange: a confirmation page saying what happens next
[@seckler2014designing].

::: {.rule #FRM-008 grade="C"}
**State in one plain sentence, before the first field, why LTF is asking and what the learner
gets; after submit, say what happened and what comes next.** The relationship layer of a form
is whether the person understands and accepts why they are asked [@jarrett2009forms], and the
tested guideline bundle included a confirmation that explains next steps
[@seckler2014designing].

*In LTF:* `SignupPage` already does the first half: its `PageHeader` description reads "A free
account saves your lesson progress, challenge scores and attempt history." Keep that sentence
first and keep the beta caveat after it. The second half is missing: after sign-up, return the
learner to the lesson with a short `Toast` that confirms progress is now saved, so the
`returnTo` redirect does not land silently.
:::

### Defaults are decisions

Every preselected control decides for the learner, because most people keep what they are
given. Johnson and Goldstein's work on organ donation is the best-known demonstration: in an
online experiment with 161 respondents, where changing the answer took one click, stated
donation was about twice as high when the default was to donate as when it was not, and the
opt-out condition did not differ from a neutral forced choice [@johnson2003defaults]. Across
European countries, effective consent rates in opt-in and opt-out countries differed by nearly
60 percentage points with no overlap. Jachimowicz and colleagues' later meta-analysis of 58 default studies, reported in
search-result summaries rather than a full reading, found a pooled effect of d = 0.68
with wide heterogeneity, larger when defaults signal endorsement. The authors list three
routes: the default reads as a recommendation, changing it takes effort, and people favor the
status quo. That makes a default the strongest design lever in a form and the easiest to
misuse. Gray and colleagues list preselection as a form of interface interference among dark
patterns: an option chosen before the user acts, in the designer's interest
[@gray2018dark].

`LoginForm` sets "Remember me for 30 days" to unchecked, with the hint "Don't tick this on a
shared computer". That default protects the learner on a shared machine at the cost of an
extra tick for everyone else, which is the right side to err on. The sign-up terms checkbox is
unchecked and must be ticked, which is correct for consent. `QuizBlock` starts with no answer
selected, which keeps a recommendation out of a recall task.

::: {.rule #FRM-009 grade="A"}
**Preselect only the option a well-informed learner would choose for themselves; never
preselect consent, data sharing, marketing email or a quiz answer.** Defaults change choices
substantially even when changing them costs one click [@johnson2003defaults], and preselection
in the designer's interest is a recognized dark pattern [@gray2018dark]. The size of the
effect varies widely, but its existence is well replicated.

*In LTF:* keep "Remember me" unchecked, keep the terms box unchecked, and keep `QuizBlock` and
the `DebriefForm` rubric free of preselected answers. Any future email reminder setting starts
off, with the benefit stated next to it.
:::

### Credentials without memory tests

WCAG 2.2 added two criteria that bear directly on sign-up and log-in. Accessible
Authentication (Minimum), at level AA, forbids a cognitive function test such as remembering a
password or solving a puzzle as the only way to authenticate, unless the page supports a
mechanism such as a password manager or paste, or another listed exception applies
[@w3c2023wcag]. Redundant Entry, at level A, forbids asking for information the user has
already given in the same process unless it is essential or auto-filled [@w3c2023wcag]. The
W3C cognitive accessibility guidance lists a login that does not rely on memory among its
patterns [@seemanhorwitz2021making]. These are consensus standards, not experiments.

The auth forms already set `autoComplete` to `email`, `new-password` and `current-password`,
which lets password managers fill and generate credentials, and `PasswordInput` uses a normal
input with a "Show" toggle, so paste works. The sign-up password hint ("At least 12 characters.
A few random words make a strong, memorable password.") states the format before typing and
gives a strategy, not a list of character-class rules. There is no "confirm password" field,
which avoids redundant entry; the visible "Show" toggle covers the mistyping risk that a
confirmation field usually addresses.

::: {.rule #FRM-010 grade="C"}
**Support password managers, paste and autofill on every credential field, and do not add a
second "confirm" field when a show-password toggle is present.** WCAG 2.2 requires that
authentication not rest on a memory test without such a mechanism, and forbids asking twice
for the same information in one process [@w3c2023wcag].

*In LTF:* keep the `autoComplete` attributes on `SignupForm`, `LoginForm` and the delete
dialog, never block paste in `PasswordInput`, and add a test that asserts the attributes so a
refactor cannot drop them.
:::

::: {.rule #FRM-011 grade="C"}
**Never ask a learner to enter the same information twice in one flow; carry it forward or
prefill it.** Redundant Entry is a level A requirement in WCAG 2.2 [@w3c2023wcag].

*In LTF:* if the planned onboarding collects controller, panel and theme choices before
sign-up, those answers are sent with the new account and never asked again on the account
page. A learner who typed an email on `/login` and then chose "Create a free account" should
find it already filled in on `/signup`; the current link carries only `returnTo`, so this is
a change.
:::

### Friction in the right places

Thaler's term "sludge" names the opposite of a helpful nudge: friction that makes it harder to
do something in the person's own interest [@thaler2018nudge]. The essay is an opinion piece,
known for this Part from its abstract and secondary accounts, and the concept has been
criticized for blurring into protective friction. The useful test is symmetry: compare the
effort of actions that benefit the learner with the effort of actions that benefit the
product. Gray and colleagues' taxonomy names the failure modes: obstruction (a task made
harder than it needs to be, as in the roach motel that is easy to enter and hard to leave),
nagging (repeated interruptions after a refusal), and forced action (a consent or action
required to continue that the task does not need) [@gray2018dark].

LTF's delete-account path asks the learner to type "DELETE" and their password in a dialog
whose description says "Everything will be permanently deleted", next to an "Export my data"
link. That is friction, but it protects the learner from an irreversible loss, the wording is
neutral, and export is one click. It passes the symmetry test against a four-field sign-up.
The `SignupBanner` in lessons ("Sign up (free) to save your progress and challenge scores.")
is dismissible and remembers the dismissal, so it is not nagging. These are the patterns to
protect when the product grows a paid tier or email.

::: {.rule #FRM-012 grade="C"}
**Make leaving (deleting the account, unsubscribing, stopping reminders) take no more steps
than joining, and add friction only where it protects the learner from an irreversible
loss.** Excess friction on actions in the person's interest is sludge [@thaler2018nudge], and
obstruction of exit is a named dark pattern [@gray2018dark].

*In LTF:* keep the typed confirmation on account deletion, keep export next to it, and keep
any future unsubscribe to one click from the email. Record every deliberate friction and its
reason in the pull request.
:::

::: {.rule #FRM-013 grade="C"}
**Once a learner dismisses a prompt, do not show it again in the same context.** Repeated
interruption after a refusal is the nagging pattern [@gray2018dark], and limiting
interruptions is one of the W3C's patterns for helping people focus
[@seemanhorwitz2021making].

*In LTF:* `SignupBanner` and `BetaBanner` already persist their dismissal in `localStorage`.
Apply the same rule to any future coach mark or reminder, and do not reopen the "Save your
progress" dialog on every lesson once the learner has chosen "Not now" in a session.
:::

### Ask for device permissions in context

Kendrick recommends asking for any permission or setting at the moment it is needed, with a
sentence saying why [@kendrick2020mobileapp]. `FlyPanel` does this already: the "Keep the
screen on while flying" checkbox appears only where the Wake Lock API is supported, next to the
timer, where its purpose is obvious. A notification or sim-connection permission, if LTF adds
one, belongs in the same place: beside the feature that uses it, at the moment it is used.

::: {.rule #FRM-014 grade="C"}
**Request a device permission (wake lock, notifications, audio) beside the feature that needs
it, at the moment it is used, with one line saying why.** Permission requests out of context
add interaction cost without a reason the person can see [@kendrick2020mobileapp].

*In LTF:* keep the wake-lock checkbox in `FlyPanel`. If random-event beeps ever need an audio
permission on some devices, ask when the learner starts the timer, with the sentence "So you
can hear in-flight events while looking at the sim."
:::

### What this means for Learn to Fly

Keep the account-optional start, the "Save your progress" dialog at "Mark lesson complete",
the unchecked "Remember me", the unchecked terms box, the autocomplete attributes, the
single password field with a "Show" toggle, the dismissible banners and the protective but
neutral delete dialog. Change three things: decide and record the fate of the display name
field (FRM-007), make sure a learner who signs up from the completion dialog does not have to
complete the lesson twice (FRM-006), and confirm after sign-up that progress is now being saved
(FRM-008). Build tests that pin the defaults and autocomplete attributes so they survive
refactors (FRM-009, FRM-010). If the planned `/welcome` onboarding is built, it inherits
FRM-011: answers given there are never asked for again.

## Labels, layout and controls

### Where labels go, and how much is known

The most repeated rule in form design is that labels belong above their fields. Its main
source is a short practitioner article by Penzo, who ran an eye-tracking test of four layouts
of a plain web form with expert and novice groups [@penzo2006label]. With left-aligned labels
to the left of the fields, each label and field pair cost one saccade of about 500 ms, and some
label-to-field distances were excessive. Right-aligning those side labels nearly halved total
fixations and completion time, with saccades of about 170 ms for experts and 240 ms for
novices. Labels above the fields cut saccades to about 50 ms, most fixations landed on the
inputs, and no expert needed to recheck a label, though some novices did. Making the
above-field labels bold raised saccade time from about 50 to about 80 ms with no visible
benefit.

The article does not state how many people took part, reports no significance tests or
variance, and used deliberately bare forms, which the author accepted may have affected the
bold-label result. A 2011 comment on the article by Caroline Jarrett argues that the
conclusions overstate the experiment and points to later work by Das and colleagues (2008) and
by Feichtinger (2010) that found no advantage for labels above fields in simple forms. The Das
abstract, as summarized by a web search, suggests right-aligned labels at least for multi-field
forms, with a small sample. What the evidence supports is narrower than the popular rule: side
labels cost extra eye movement, left-aligned side labels are the worst of the four, and
above-field against right-aligned is unsettled for simple forms. Bargas-Avila and colleagues'
guideline set adopts labels above fields on the strength of Penzo's test
[@bargasavila2010simple], and Wroblewski's slides recommend top-aligned labels for familiar
data, short completion times, localization and mobile screens, at the cost of vertical space
[@wroblewski2008web].

::: myth
**"Eye-tracking proved that labels above fields are fastest."** The claim traces to one
practitioner test with an unstated sample size and no statistics [@penzo2006label]. Later
studies cited in the comment thread found no advantage for top labels in simple forms, and one
suggests right-aligned labels for multi-field forms. Labels above fields are a sound default
for narrow screens and consistency, not a proven speed winner.
:::

For LTF the choice is made on other grounds. The auth layout is a 448 px column, lessons are
read on phones and tablets as well as desktops, and learners may enlarge text. Side labels run
out of room in all three cases. Above-field labels also put the label in the same reading
order as the field for a screen reader and keep every form in the product consistent.

::: {.rule #FRM-015 grade="C"}
**Place labels above their fields, in plain weight, visible at all times.** Side labels cost
an extra eye movement per field and left-aligned side labels were slowest in Penzo's test,
while above-field and right-aligned labels have not been reliably separated
[@penzo2006label]. Top labels suit narrow screens, localization and large text
[@wroblewski2008web]. Bold labels showed no benefit [@penzo2006label].

*In LTF:* keep `FormField`'s stacked layout (label, control, hint or error with 6 px gaps) and
its `label` style at 14/20 and weight 500. Do not introduce a horizontal form layout for the
wider account page; consistency outweighs a contested speed difference.
:::

### Labels that machines can read

A label that is visible but not programmatically tied to its input fails screen-reader users,
and a placeholder used as the only label disappears as soon as typing starts. Lazar and
colleagues' diary study of 100 blind screen-reader users found unlabeled or badly designed
forms among the five leading causes of frustration [@lazar2007frustrates]. Nearly two decades
later, the WebAIM Million found missing form input labels on 51 percent of the top million
home pages in its 2026 scan, the third most common detectable failure after low-contrast text
and missing alternative text [@webaim2026million]. The audit is automated and counts only what
a machine can detect, so it is a floor on the problem.

LTF's `FormField` binds the label with `htmlFor` and the input's `id`, and the `useFormField`
context sets `aria-describedby` for hints and errors and `aria-invalid` on error. `Checkbox`
makes the whole label the hit target. `RadioGroup` labels the group with `aria-labelledby` on
a Radix root. The one input outside this system is the numeric answer in `QuizBlock`, which
has an `sr-only` label ("Your answer in {unit}") and relies on the question legend for sighted
learners. That is acceptable, because the legend is the question, but the field has no visible
label of its own and no visible format hint, which matters in the next chapter.

::: {.rule #FRM-016 grade="B"}
**Give every input a visible label tied to it in code, and never use placeholder text as the
only label.** Unlabeled forms were a leading frustration for 100 blind users
[@lazar2007frustrates], and missing labels still appear on about half of top home pages in
automated scans [@webaim2026million]. The evidence is descriptive, not comparative, but it is
large and consistent.

*In LTF:* every new input goes through `FormField` or a component that consumes
`useFormField`. Keep the existing axe checks in `pages/a11y.test.tsx` and `e2e/a11y.spec.ts`,
and add the `QuizBlock` numeric input and the `DebriefForm` planning fields to the end-to-end
routes they cover.
:::

### One column, one question per row

Bargas-Avila's guidelines call for a single column with one question per row
[@bargasavila2010simple], and the improved forms in Seckler's test followed that rule
[@seckler2014designing]. The guideline rests on only a few studies, and the chapter's own
summary of the evidence for it is thin. The practical case is stronger than the experimental
one: a second column creates an ambiguous reading order (across or down), and on a phone it
collapses into one column anyway, so the two-column version is the one tested less often.

::: {.rule #FRM-017 grade="C"}
**Lay out forms in a single column with one question per row.** This is part of the tested
guideline bundle [@seckler2014designing; @bargasavila2010simple], though the individual rule
rests on few studies.

*In LTF:* the auth forms and `DebriefForm` already stack. The challenges filter
(`sm:grid-cols-2 lg:grid-cols-5`) is a filter bar, not a form a learner completes, and is
exempt; any multi-field form added to the account page is not.
:::

### Field width is an instruction

People read the size of an answer box as a statement of what belongs in it. Bargas-Avila's
review reports Christian and colleagues' finding that a month field half the size of the year
field produced more answers in the expected format, and Couper and colleagues' finding of more
incorrect answers when field size did not fit the expected input [@bargasavila2010simple;
@christian2007helping]. Both are survey-methodology results with student or survey samples,
and their direction agrees.

LTF's `control-box` is full width in its container. That is right for email and password, and
wrong for a value of known short length. The `DebriefForm` planning fields render a
full-width `Input` with `maxLength={200}` even when the field is numeric. The `QuizBlock`
numeric input, by contrast, is `w-32`, which signals a short number.

::: {.rule #FRM-018 grade="B"}
**Make each field about as wide as its expected answer: short for numbers and codes, full
width for email and free text.** Field size steers what people enter, and mismatched size
produces more incorrect answers [@bargasavila2010simple; @christian2007helping].

*In LTF:* give `Input` a width prop (for example `size="short"` at about 8 to 10 characters
of `font-mono`) and use it for numeric planning fields in `DebriefForm`. Keep email, password
and reflection fields full width.
:::

### Radio buttons, selects and checkboxes

The guideline literature recommends radio buttons for up to about four options and a
drop-down beyond that, on the advice of Miller and Jarrett, but the chapter reporting it is
candid that the empirical comparisons are mixed [@bargasavila2010simple]. Healey found radio
buttons faster per question but no difference over a whole questionnaire; Hogg and Masztal
found no difference; Heerwegh and Loosveldt found drop-downs slower in one study that a second
study did not replicate. Jarrett and Gaffney give a chapter to choosing between drop-downs and
other controls, and their specific rules face the same mixed evidence
[@jarrett2009forms]. The clearer findings are two. For multiple selection, checkboxes beat
list boxes in the Basel group's own 2009 study [@bargasavila2010simple]. And drop-downs draw
attention strongly in eye-tracking, so Penzo advises using them for important data or placing
less important ones lower [@penzo2006label].

The argument for radios that does not depend on speed is visibility: every option is on
screen, so a learner can compare them without opening anything, and a screen-reader user hears
the count. That matters most in `QuizBlock` and the `DebriefForm` rubric, which already use
visible options (bordered labels at `min-h-11` for quiz choices, `RadioGroup` for criteria).

::: {.rule #FRM-019 grade="D"}
**Show up to about four mutually exclusive options as visible radio buttons, and reserve a
select for long or familiar lists; do not justify either choice by speed.** The speed evidence
for radios against drop-downs is mixed and partly unreplicated [@bargasavila2010simple;
@jarrett2009forms]. Visibility of all options is the stronger reason.

*In LTF:* keep quiz and rubric choices as visible options. Keep `Select` for the challenges
filters and the mobile lesson section picker, where the list is long and the learner knows
what they are looking for.
:::

::: {.rule #FRM-020 grade="B"}
**Use a set of checkboxes, never a multi-select list box, when the learner may choose more
than one option.** Checkboxes outperformed list boxes for multiple selection in a controlled
study reported in the review [@bargasavila2010simple].

*In LTF:* `QuizBlock` multi questions already use checkboxes with "Select all that apply."
Keep that wording; it is the only cue that distinguishes a multi question from a single one
before the learner tries.
:::

### Required, optional and the primary action

Users of the original forms in Seckler's study most often complained about two things:
missing format specifications and unclear marking of required against optional fields
[@seckler2014designing]. The guideline set asks that people be able to tell required from
optional at all times [@bargasavila2010simple]. The review reports a study by Pauwels and
colleagues in which color-highlighting required fields led to faster completion, fewer errors
and higher satisfaction than an asterisk alone [@bargasavila2010simple]. Color cannot carry
the distinction on its own, for the same reason LTF's badges always carry a word: some
learners will not see it.

`FormField` and `RadioGroup` take a `required` prop that prints "(required)" in `text-ink-2`
after the label, hidden from screen readers because `aria-required` carries the state. The
debrief marks reflections as "Optional, up to {n} characters." in the hint. That is the right
direction: words, not symbols. The rule for which to mark depends on the form: when most
fields are required, mark the optional ones; when most are optional, mark the required ones.

::: {.rule #FRM-021 grade="C"}
**Make every field's required or optional status visible in words, and mark whichever kind is
the minority.** Unclear required and optional marking was among the most frequent complaints
about the original forms in Seckler's study [@seckler2014designing], and the guideline set
asks that the distinction be visible at all times [@bargasavila2010simple].

*In LTF:* in the auth forms every field is required, so print nothing on them and mark
nothing optional. In `DebriefForm`, where most fields are optional, keep the "(required)"
marker on required rubric criteria and the "Optional" hint on reflections.
:::

Two further guidelines close the layout list. Avoid reset buttons, which wipe a form with one
misplaced click and have no use a learner would ask for [@bargasavila2010simple]. And make the
form's primary action visually dominant with secondary actions quiet [@wroblewski2008web].

::: {.rule #FRM-022 grade="C"}
**Do not put a reset or clear-all button on a form.** Avoiding reset buttons is part of the
guideline set [@bargasavila2010simple]; a reset next to submit invites a costly slip.

*In LTF:* no form has one today. The `ChecklistRunner` and `Stopwatch` resets are controls on
running tools, not forms, and are covered by the chapters on recovery and Fly mode.
:::

::: {.rule #FRM-023 grade="C"}
**Give each form exactly one visually dominant primary action, placed after the last field,
with secondary actions as quiet links or secondary buttons.** Wroblewski treats a dominant
primary action with quiet secondary actions as basic form hierarchy [@wroblewski2008web].

*In LTF:* the auth forms follow this (a `size="lg"` primary "Create account" or "Log in", then
a text link to the other form). The "Save your progress" dialog has one primary ("Sign up
free") and two secondaries. Keep that pattern for any new dialog form.
:::

### What this means for Learn to Fly

Keep `FormField`'s stacked label, plain-weight label style, programmatic wiring and words for
required and optional. Keep visible options in `QuizBlock` and the rubric, checkboxes for
multi questions, and one dominant action per form. Change field widths: add a short width
variant to `Input` and use it for numeric planning fields (FRM-018). Give the quiz numeric
field a visible format hint alongside its `sr-only` label (FRM-016 and the next chapter). Add
the quiz and debrief routes to the automated accessibility runs. Do not re-open label
placement in reviews: the evidence does not settle it, and FRM-015 records why LTF chose top
labels.

## Formats, units and answer spaces

### Preventing errors is cheaper than reporting them

An error message is a repair. The cheaper design makes the error unlikely in the first place,
and the strongest evidence in this Part for how to do that comes from survey methodologists
rather than interface designers. Christian, Dillman and Smyth wanted web respondents to enter
a date as two digits for the month and four for the year, so that no correction request would
be needed afterward [@christian2007helping]. Across a series of experiments embedded in web
surveys of random samples of university students, they changed the size and proximity of the
answer boxes, replaced verbal instructions with the symbols MM and YYYY, changed the wording of
the question, and moved the symbolic instruction around the boxes. Use of the desired format
rose through the series from 45 percent to 96 percent. Their conclusion was that writing
effective web questions may depend as much or more on the presentation of the answer spaces as
on the wording of the question.

The details available for this Part come from the publisher's abstract and from the
Bargas-Avila chapter's account of the study, not from the full paper. The chapter reports that
92.9 to 95.8 percent of respondents gave the correct format when symbols were used, and that
placing the instruction to the right of the year field produced fewer correct answers
[@bargasavila2010simple]. The headline jump came from combined manipulations, so it cannot be
credited to any single change, and the samples were students answering a low-stakes survey.
The direction agrees with other groups' work: mismatched field sizes produce wrong answers
(Couper and colleagues, as reported in the chapter), and format specification was among the
most influential fixes in Seckler's bundle test [@seckler2014designing].

### State the format before typing

The Basel group's own experiment on format rules found that stating the rule in advance,
without an extra example, produced significantly fewer errors and fewer submission attempts
[@bargasavila2010simple]. Seckler's participants most often complained about missing format
specifications in the original forms, and the authors single out format specification as one
of the two guidelines with a remarkable effect on first-attempt success
[@seckler2014designing]. Both results argue against the common pattern of hiding the format
in a placeholder that vanishes on the first keystroke, or in an error that appears only after
the learner has guessed wrong.

LTF's sign-up already does this well. "Shown on your dashboard. 2–40 characters." and "At
least 12 characters. A few random words make a strong, memorable password." are hints that
appear under the label before any typing. The `DebriefForm` planning fields do not: each
renders only its label, with no hint for unit, precision or where the value comes from.

::: {.rule #FRM-024 grade="B"}
**State any required format, length or unit in the label or hint before the learner types,
not in a placeholder or an after-the-fact error.** Stating the format rule in advance reduced
errors and resubmissions in a controlled study [@bargasavila2010simple], and format
specification was one of the two most effective guidelines in a tested bundle
[@seckler2014designing].

*In LTF:* extend the challenge content schema so each planning field can carry a hint (unit,
expected precision, and where in the sim the value is read), and render it through
`FormField`'s `hint`. Content authors write it with tokens where a number is involved, never a
literal aircraft value.
:::

### Let the answer space carry the instruction

The Christian experiments show that the box itself can say what belongs in it: its width tells
the length, symbols beside or inside it tell the format, and their position matters, with
instructions placed to the right of the last box doing worse [@christian2007helping;
@bargasavila2010simple]. For LTF the most common structured answer is a number with a unit:
an altitude, a heading, a distance, a time. The unit is part of the answer space, and it
belongs immediately next to the box in the reading direction, as close as the symbols were in
the survey experiments.

`QuizBlock` places the unit as a `text-ink-2` span after a `w-32` mono input, which is the
pattern the evidence supports. Two refinements follow from the same evidence. First, the
unit's position after the box is fine for a short unit such as "ft" or "kt", but a format
instruction that the learner needs before typing (for example "whole number" or "to the
nearest ten") should sit above the box in the hint, not after it. Second, the copy rules in
AGENTS.md require every altitude to say MSL or AGL. That qualifier is part of the unit, and
leaving it out of the label beside an altitude box asks the learner to guess the reference.

::: {.rule #FRM-025 grade="B"}
**Make the answer box show what belongs in it: width for length, a unit or symbol immediately
beside the box, and any format instruction above it rather than to its right.** Changing box
size, using symbols instead of words and moving the symbols closer raised correct format from
45 to 96 percent across a series of survey experiments [@christian2007helping], and
instructions placed to the right of the final box did worse [@bargasavila2010simple].

*In LTF:* keep the `QuizBlock` numeric layout (short mono box, unit after it). Move any
precision or format note into a visible hint above the box. Every altitude unit reads
"ft MSL" or "ft AGL", following the copy rules, never a bare "ft".
:::

::: {.rule #FRM-026 grade="C"}
**Never require the learner to type a unit; show it fixed beside the box and accept a typed
unit if they add one anyway.** The unit is part of the answer space
[@christian2007helping], and the W3C's cognitive accessibility guidance asks forms to accept
many input formats [@seemanhorwitz2021making]. Requiring a typed unit turns a recall
question into a formatting test.

*In LTF:* `QuizBlock` numeric answers and numeric planning fields strip a trailing unit the
learner types after the number (for example a trailing "ft") before checking, and never mark an answer wrong for
including one.
:::

### Accept what people actually type

The W3C's guidance on making content usable for people with cognitive and learning
disabilities lists, under helping users avoid mistakes, a cluster of form patterns: ask for as
little as possible, mark required fields, accept many input formats, auto-correct only when
the correction is reliable, use unambiguous formats for dates, and make errors easy to undo
with a summary before submission [@seemanhorwitz2021making]. The guidance is consensus from a
task force, not experiment, and it is explicitly beyond WCAG conformance. Its rationale is not
limited to diagnosed conditions; it names temporary stress and limited technical knowledge
among the situations it serves, which describes a beginner in a simulator chair.

For a numeric answer, "many formats" means a thousands separator, a leading or trailing
space, a trailing unit, a decimal comma where the learner's locale uses one, and a leading
zero on a heading. `QuizBlock` uses `type="number"` with `inputMode="decimal"` and converts
with `Number()`, which leaves the parsing to the browser; what a given browser accepts in a
number input varies, and the behaviour has not been checked for this Part. The safer path is a
text input with `inputMode="decimal"` and LTF's own tolerant parser, with the rules documented
next to the parser and tested.

::: {.rule #FRM-027 grade="C"}
**Accept every reasonable way of writing a value (separators, spaces, a typed unit, leading
zeros) and normalize it before checking; auto-correct only when the correction is certain.**
Accepting many formats and auto-correcting only when reliable are listed patterns for
preventing form errors [@seemanhorwitz2021making].

*In LTF:* move numeric parsing for `QuizBlock` and `DebriefForm` into one tested function in
`shared/` (pure, no DOM), so the client check and any server recomputation agree on what
counts as the same number.
:::

### Short structured values: one box or several

For a short value with fixed parts, such as a date or a time, the Basel group compared six
date-entry designs. A drop-down design was best when format errors must be avoided, and a
single text field with MM and YYYY symbols was fastest [@bargasavila2010simple]. The
Christian experiments used two separate boxes, sized to their parts
[@christian2007helping]. The choice is therefore a trade between speed and error-proofing,
and it depends on what the value is used for. A time the learner records in a debrief for
their own notes favors the fast single field; a value the server scores favors the
error-proof design.

::: {.rule #FRM-028 grade="B"}
**For a short value with fixed parts, use one text field with visible format symbols when
speed matters and a constrained control when a format error would be scored; choose by what
the value is used for.** In a comparison of six date designs, a single field with symbols was
fastest and a drop-down design best for avoiding format errors [@bargasavila2010simple].

*In LTF:* a planning field for a time or a heading that only feeds the learner's notes uses a
single short field with a symbol hint (for example "HH:MM"); a value that changes the scored
tier uses a constrained control or strict validation on leaving the field.
:::

### Open answers need room and a purpose

A companion study by Smyth, Dillman, Christian and McBride (2009), known here from its
abstract and read alongside the Christian work, found that enlarging an open-answer box had little effect on early responders but
substantially improved response quality among late responders, and that any explanation
making quality and length salient improved answers from both groups
[@christian2007helping]. The late responders, the less motivated respondents, are the closer
match for a learner filling in a reflection after a long flight.

`DebriefForm` reflections use a three-row `Textarea` with the hint "Optional, up to {n}
characters." The hint tells the learner the limit, which is a format statement, and says
nothing about what a useful answer looks like, which is the part the companion study found
effective.

::: {.rule #FRM-029 grade="B"}
**Give open-ended prompts a roomy box and one sentence that says what a useful answer looks
like.** Making quality and length salient improved open answers from both early and late
survey responders, while box size alone helped only the late ones [@christian2007helping].

*In LTF:* change the `DebriefForm` reflection hint from a bare character limit to a purpose
plus the limit, for example "One or two sentences on what you would do differently. Optional,
up to {n} characters." Keep `rows={3}` as the minimum and let the box grow with content.
:::

### Copy-paste values from the brief

One LTF-specific way to prevent errors is already in the product. The challenge `BriefTab`
shows "Sim setup" as a definition list with copy buttons beside values the learner must enter
into the simulator. That is error prevention at its simplest: the learner never retypes a
value that the product already holds. The same idea applies inside LTF's own forms. When a
debrief asks for a value the learner was given in the brief, show it beside the field for
comparison, or prefill it and ask the learner to confirm or correct.

### What this means for Learn to Fly

Keep the sign-up hints, the `QuizBlock` unit-after-box layout, the short mono numeric box and
the `BriefTab` copy buttons. Change the planning fields: give them hints for unit and source
(FRM-024), short widths (FRM-018), and unit labels that follow the MSL and AGL copy rule
(FRM-025). Build one tolerant numeric parser in `shared/` with tests, used by quizzes and
debriefs alike, that accepts a typed unit and common separators (FRM-026, FRM-027). Rewrite
the reflection hint to say what a good answer looks like (FRM-029). None of this changes an
aviation value; where a hint needs a number, it uses an `{{aircraft.*}}` or `{{vspeed.*}}`
token from `content/aircraft.yaml`.

## Validation and error messages

### When to validate a field

The timing of validation is the most contested question in form design. The sources
disagree, and the pattern of disagreement is more useful than any one headline number.

The earliest result points against inline validation. In a 2007 comparison of six ways of
presenting error messages, reported by Bargas-Avila and colleagues, messages embedded next to
the fields and shown after the person pressed send led to fewer consecutive errors. Inline
validation, where the message appears as the person leaves a field, led to significantly more
errors, because people ignored or dismissed the messages [@bargasavila2010simple]. The study
came from the authors' own lab, with a modest sample.

Two years later Wroblewski, working with the London firm Etre, compared a registration form
that validated only on submit with five inline variants, with 22 users aged 21 to 49 seeing
all six versions in random order [@wroblewski2009inline]. The best inline variant beat the
control on success, errors, completion time, satisfaction and eye fixations. Timing mattered:
"after" (validate when the field is left) was fastest, seven to ten seconds faster than
"while" and "before and while", and "before and while" produced the highest error rates and
worst satisfaction because messages appeared before people had finished. Noticing depended on
difficulty: 30 to 50 percent of participants noticed validation messages on the easy first
fields (name, email), against 80 to 100 percent on the harder fields (user ID, password).
Persistent messages outside the field worked best. Fading success messages were missed and
made some people worry that valid fields had become invalid, and success ticks on simple
fields left people unsure whether they meant "correct" or merely "valid". The caveats are
large, and the article states most of them: a small sample, metrics that Etre called
indicative, errors counted only at submission (which flatters the inline versions, since
corrections made along the way were not counted), and no screen-reader users.

Baymard's large-scale e-commerce testing adds three implementation details
[@scott2024inline]. Avoid premature validation: validate on blur, and for fixed-length fields
validate once the expected length is reached. Remove an error as soon as the field becomes
valid, rechecking on every keystroke once an error is showing; participants read a fixed but
still-flagged field, especially a password confirmation, as still wrong. And show positive
validation on all fields. It also advises keeping a traditional error page, because people
submit with errors present. The article reports no sample sizes and no statistics, its
setting (address and card entry at checkout) is far from a learning site, and it contains a
one-point inconsistency in its own prevalence figure (31 or 32 percent of sites with no inline
validation).

The conflicts are real. Baymard's positive validation on every field runs against
Wroblewski's finding that ticks on trivial fields confuse, and nothing reviewed here tests the
two head to head. The Basel and Etre results are compatible only if timing and message design
drive the effect, which is Wroblewski's own conclusion. What survives across all three is a
short list: no message before the person has finished typing; a message on leaving the field
only where mistakes are likely; errors that disappear the moment they are fixed; and a summary
at submit.

::: myth
**"Inline validation raises success rates by 22 percent and cuts completion time by 42
percent."** These figures come from one study of one registration form with 22 users, in
which errors were counted only at submission [@wroblewski2009inline]. An earlier controlled
study found inline messages increased errors [@bargasavila2010simple]. The defensible claim
is about timing: premature messages hurt, and messages after a field is finished can help on
hard fields.
:::

::: {.rule #FRM-030 grade="B"}
**Never show an error while the learner is still typing a field for the first time; the
earliest moment is when they leave it, or when a fixed-length value is complete.** Premature
messages produced the most errors and worst satisfaction in Wroblewski's study
[@wroblewski2009inline] and frustrated participants in Baymard's testing [@scott2024inline].
The two sources agree on this point even where they disagree on others.

*In LTF:* keep react-hook-form's default submit-time validation in `SignupForm` and
`LoginForm`. If a field gains on-blur checking, use `mode: 'onTouched'` for that field only,
never `onChange` before the first submit.
:::

::: {.rule #FRM-031 grade="B"}
**Add on-leave validation only to fields where mistakes are likely, and keep easy fields quiet
until submit.** Only 30 to 50 percent of participants noticed messages on easy fields against
80 to 100 percent on hard ones [@wroblewski2009inline], and an earlier study found messages on
leaving a field were often ignored and raised errors [@bargasavila2010simple].

*In LTF:* the candidates are the password (length rule) and the email format on `/signup`.
Display name, the login fields and every quiz answer stay submit-only.
:::

::: {.rule #FRM-032 grade="C"}
**Once an error is showing, recheck on every change and remove the message the moment the
input becomes valid.** Participants read a fixed but still-flagged field as still wrong
[@scott2024inline]. The evidence is observational, without reported samples.

*In LTF:* this is react-hook-form's default `reValidateMode: 'onChange'` after a failed
submit, which the auth forms already rely on. Keep it, and make the `ErrorSummary` list
update with the fields, so a corrected field leaves the summary too.
:::

::: {.rule #FRM-033 grade="D"}
**Show positive confirmation only on fields that are hard to get right (password strength,
availability), never a tick on every valid field.** Baymard recommends positive validation on
all fields [@scott2024inline]; Wroblewski found ticks on trivial fields confused people about
what they meant [@wroblewski2009inline]. The dispute is untested head to head, and LTF takes
the cautious side.

*In LTF:* keep `PasswordStrengthMeter`, which updates as the learner types and says
"Strength: ..." in words with a four-segment bar. Do not add ticks to email or display name.
The meter's segment colors (`bg-warn`, `bg-caution`, `bg-go`) are backed by the word, which is
what makes them acceptable.
:::

### Where errors appear

Bargas-Avila's guidelines, and the improved forms in Seckler's test, show error messages after
the form is sent, all together, embedded in the form next to the fields concerned, noticeable
at a glance through color, an icon and text, polite and explaining how to fix the problem
[@bargasavila2010simple; @seckler2014designing]. The submit-time summary is the safety net
that every source keeps, Baymard included, because people submit with errors present
[@scott2024inline].

LTF's `ErrorSummary` is a strong implementation of that net. It appears above the form after a
failed submit, takes focus so keyboard and screen-reader users land on it, carries
`role="alert"`, titles itself "There is a problem", and lists each error as a link that jumps
to its field. Each field repeats its own message beneath the control through `FieldMessage`,
in `text-warn` with a 14 px octagon icon, so the error is marked by color, shape and words.

::: {.rule #FRM-034 grade="B"}
**After a failed submit, show a focused summary of all errors at the top, each linking to its
field, and repeat each message beside its field with an icon and text, never color alone.**
Embedded messages shown after sending led to fewer consecutive errors in a controlled
comparison [@bargasavila2010simple], the tested bundle used this design
[@seckler2014designing], and a submit-time summary catches errors that inline checks miss
[@scott2024inline].

*In LTF:* every form uses `ErrorSummary` with a `focusKey` that changes on each attempt, and
`FormField` errors with the octagon icon. `DebriefForm` is the exception today: it disables
its submit button while required criteria are missing and shows a server failure in a
`Callout type="safety"` titled "Not saved". Move that failure into `ErrorSummary`, and keep
the safety callout for aviation safety, where its meaning must stay unambiguous.
:::

### Writing the message

Shneiderman's short report on system messages is the root of most later advice
[@shneiderman1982designing]. He describes novices faced with violent, vague or coded messages
as "shaken, confused, dismayed, and discouraged from continuing", and reports a series of
small experiments in which revised messages helped. More specific compiler messages produced
28 percent better repair scores. Text-editor users made 10.7 errors with an editor whose only
message was a question mark and 6.1 with brief messages. Students corrected 4.1 of 10 faulty
editor commands with standard messages and 7.5 of 10 with improved ones. With job-control
messages, students scored 2.9 and 3.8 out of 6 on two commercial systems and 4.8 with improved
messages. The article gives no sample sizes or statistical tests, and later work on enhanced
compiler messages for novice programmers is mixed. The guidance it draws has held up as craft:
messages should be brief, positive, constructive, specific and comprehensible, should not
blame, and should leave the user in control. Its model rewrite of "ILLEGAL PASSWORD" is "Your
password did not match the stored password. Please try again."

LTF's messages mostly follow that pattern ("We could not load this. Check your connection and
try again."). The weak spot is the fallback in `applyServerErrors`, which returns "Something
went wrong. Please try again." for any error that is not an `ApiError`. That is the vague
message Shneiderman warns against: it says nothing about what failed or whether trying again
can help. The quiz feedback ("Not quite." followed by an explanation, and "Change your answer
and check again.") is closer to the ideal, because it is blameless and says what to do next.

::: {.rule #FRM-035 grade="B"}
**Write each error message to say what happened in the learner's terms and what to do next,
without blame, codes or vague phrases.** Specific, constructive messages improved repair and
correction in several small early experiments [@shneiderman1982designing], and polite messages
that explain the fix are part of the tested guideline bundle [@seckler2014designing].

*In LTF:* replace the `applyServerErrors` fallback with messages for the cases the client can
tell apart (offline, server unavailable, session expired), each with its next step. Server
validation messages in `server/` are written to be shown to the learner as they are.
:::

::: {.rule #FRM-036 grade="C"}
**Never clear a field the learner has filled in because of an error elsewhere, and never
clear the field that has the error.** Keeping completed fields after an error is one of the
20 guidelines [@bargasavila2010simple], and Baymard observed forms that reset after a
submit error and forced re-entry [@scott2024inline].

*In LTF:* react-hook-form keeps values on a failed submit; keep it that way. The one
deliberate clear is the delete-account dialog, which empties its fields when it closes; that
is correct for a password.
:::

::: {.rule #FRM-037 grade="C"}
**Disable the submit control and show progress from the first click until the request
settles, so a second click cannot send the form twice.** Disabling submit after a click is
one of the 20 guidelines [@bargasavila2010simple].

*In LTF:* `Button` with `loading` already sets `disabled` and `aria-busy` and shows a spinner.
Use it on every submitting button, including the `DebriefForm` submit and "Mark lesson
complete".
:::

### Quiz answers are not form fields

A quick check in a lesson is a recall task, not data entry, and the validation advice above
does not transfer to it. Feedback research says feedback should come after the learner has
attempted a solution, not before, and should be elaborated and focused on the task
[@shute2008focus]. Checking correctness while a learner types would turn the question into
trial and error. `QuizBlock` gets this right: "Check answer" is disabled until there is an
answer, correctness is judged only on that press, the result is announced in a polite live
region, and changing the answer clears the result so the learner can try again.

::: {.rule #FRM-038 grade="C"}
**Check quiz and challenge answers for correctness only when the learner presses the check or
submit control; validate format, never correctness, before that.** Formative feedback works
best after an attempt [@shute2008focus], and inline correctness would replace recall with
guessing.

*In LTF:* keep `QuizBlock`'s "Check answer" flow. A numeric quiz may flag an empty or
unparseable entry on leaving the field (FRM-030), but it never hints at whether the number is
right.
:::

### Counting errors as a product metric

Shneiderman's last recommendation is to collect data on how often each error condition
occurs, and to treat an error rate as a measure of system quality
[@shneiderman1982designing]. For LTF that applies beyond forms: a quiz that most learners get
wrong on the first try, or a debrief field that keeps failing validation, is evidence about
the lesson or the question, not only about the learners.

::: {.rule #FRM-039 grade="C"}
**Record how often each validation error and each wrong quiz answer occurs, and treat a
frequent one as a defect in the question or the lesson.** Error frequency as a quality metric
is one of Shneiderman's five recommendations [@shneiderman1982designing].

*In LTF:* the `onAnswer` callback on `QuizBlock` already reports correctness; aggregate it per
question without identifying learners, and review any question with a high first-try error
rate together with its lesson section.
:::

### What this means for Learn to Fly

Keep submit-time validation, `ErrorSummary` with focus and jump links, `FieldMessage` with
icon and text, react-hook-form's revalidate-on-change after a failed submit, the `loading`
button, `PasswordStrengthMeter` as the only positive indicator, and `QuizBlock`'s explicit
"Check answer". Change the vague fallback message in `applyServerErrors` (FRM-035), show
`DebriefForm` failures in `ErrorSummary` rather than a safety `Callout` (FRM-034), and start counting first-try error rates
per quiz question (FRM-039). Add on-leave checks only to the sign-up password and email if
testing shows people submit and fail on them (FRM-031). Do not cite the Etre percentages in
LTF documents.

## Taking mistakes back: drafts, undo and modes

### Recovery is an intention, not a command

Abowd and Dix argue that undo should be regarded "not as a system command to be implemented,
but as a user intention to be supported by the system" [@abowd1992giving]. The question to ask
of a design is what the person is trying to recover, not what a button does. They distinguish
backward recovery, which restores a previous state, from forward recovery, which moves on from
the present state toward the goal, and they note that in open systems an action may already
have changed the world; their example is a cockpit navigator who cannot ask the pilot to back
the plane up. Two properties support recovery whatever its form: visibility (people can see
the effects of what they did) and commensurate effort (what is easy to do should be easy to
undo). The paper is analytical, built on formal models, and cites a study of a word processor
in which even expert users could neither predict nor recognize what undo would do. It offers a
checklist, adapted from Young and Whittington, of four things a person must be able to answer
about any undo: which stream of activity it applies to, what counts as a unit, which unit will
be affected, and what exactly is restored.

LTF has no general undo button, and does not need one. Its recovery paths are forward and
local. A learner who ticks the wrong step in `FlyPanel` taps it again and it unticks. In
`ChecklistRunner`, Backspace unticks the last item, a keyboard path the runner documents in
its own help line ("Space ticks an item, Backspace unticks the last one."). In `QuizBlock`,
changing an answer clears the old result and "Change your answer and check again." invites a
retry. In the ordering question, items move up and down one place at a time with buttons, so
any move is reversed by the opposite button. All of these meet the commensurate-effort test.

::: {.rule #FRM-040 grade="C"}
**Make every frequent action reversible with the same effort it took: a second tap unticks,
the opposite button reverses a move, a changed answer clears its old result.** Commensurate
effort and visible effects are the properties that let people recover by themselves
[@abowd1992giving]. The source is an analysis, not an experiment.

*In LTF:* keep tap-to-untick in `FlyPanel`, Backspace in `ChecklistRunner`, and the up and
down buttons in ordering questions. Any new interactive widget states, in its dev page entry,
how each action is reversed.
:::

### Never lose work

The W3C cognitive accessibility patterns include letting users go back without losing work,
and avoiding data loss and timeouts [@seemanhorwitz2021making]. Bargas-Avila's guidelines ask
that completed fields never be cleared after an error [@bargasavila2010simple]. For LTF the
risk is highest where input is long or produced under effort: a debrief after a flight, a set
of checklist ticks made while flying, a reflection typed on a phone.

The product already treats this seriously. `DebriefForm` saves its draft on every change, and
its own comment says drafts survive a refresh and a detour through log-in. `FlyPanel` saves
the tick state of every step on each change. `QuizBlock` restores the last stored answer when
the lesson is reopened. On a successful submit the debrief and flight drafts are cleared,
which is the right moment, because the attempt now exists on the server.

::: {.rule #FRM-041 grade="C"}
**Save what the learner enters as they enter it, so that a refresh, a lost connection, a
sign-in detour or a closed tab never costs them their work; clear the draft only when the
server has accepted it.** Avoiding data loss and letting users go back without losing work are
listed cognitive accessibility patterns [@seemanhorwitz2021making], and never clearing
completed fields is one of the 20 form guidelines [@bargasavila2010simple].

*In LTF:* keep the `saveDebrief` and `saveFlight` drafts in `features/challenges/storage.ts`.
Extend the same treatment to `ReportProblemDialog`, which keeps its description only in
component state, so a refresh or a closed tab loses what the learner typed.
:::

### Say so before the point of no return

Abowd and Dix's analysis implies that irreversibility is a property people must be able to
predict [@abowd1992giving]. LTF has a few one-way actions: submitting a challenge attempt
(which records a scored result in History), deleting the account, and resetting a stopwatch or
a checklist during a flight. The delete dialog states plainly that "This cannot be undone" and
asks for a typed confirmation. The others say nothing.

A confirmation dialog is the usual answer, and it is the wrong one for anything frequent,
because people learn to dismiss it without reading. Friction is justified where it protects
the learner from a loss they cannot reverse, as long as the wording is neutral and they can
proceed [@thaler2018nudge]. For frequent actions, the better tools are placement (keep the
one-way control away from the frequent one) and a short undo window after the action.

::: {.rule #FRM-042 grade="C"}
**State before any one-way action what will be permanent, and use a confirmation dialog only
for rare, destructive actions; for frequent ones, offer a short undo after the fact
instead.** Irreversibility must be predictable to be managed [@abowd1992giving], and friction
is acceptable only where it protects the person from an irreversible loss
[@thaler2018nudge].

*In LTF:* the `DebriefForm` submit area says, above the button, that the attempt will be saved
to History and cannot be edited afterward (if that is how the server behaves). The `Stopwatch`
and `ChecklistRunner` resets get a `Toast` with "Undo" for a few seconds rather than a
dialog.
:::

### Slips predict where errors will happen

Norman's analysis of about a thousand collected slips sorts them by where the path from
intention to action breaks [@norman1981categorization]. Three of his categories map directly
onto LTF screens. **Capture errors** happen when a sequence being performed resembles a more
familiar one, which takes over. **Description errors** happen when the intended target is
specified too loosely, so a similar neighbor gets the action. **Mode errors** happen when the
person misclassifies the current state and does what would be right in the state they assume.
The method is naturalistic (collected reports, not experiments), so the frequencies are not
prevalence estimates, but the categories have stayed in use for four decades.

Description errors are a layout problem. In `ChecklistRunner` the header row holds "Large
text" and "Reset" as adjacent ghost `sm` buttons with similar weight; in the `Stopwatch` the
"Pause" and "Reset" pills sit side by side. A learner glancing from the sim who means to pause
can reset the timer, and nothing confirms or undoes it.

::: {.rule #FRM-043 grade="C"}
**Keep destructive or resetting controls physically apart from frequent ones, and make them
look different in shape or label, not only in color.** Similar neighbors invite description
errors [@norman1981categorization]; position and distinct form, not label alone, separate
them.

*In LTF:* in `ChecklistRunner` move "Reset" to the end of the list or into an overflow, away
from "Large text". In `Stopwatch` separate "Reset" from "Pause" with space at least equal to a
pill's width, and give it the undo `Toast` from FRM-042.
:::

Capture errors are a content problem. A learner who has practiced a procedure will run the
practiced version even after a lesson changes one step. Norman's account predicts this and
offers no defense except monitoring: a slip is caught only when something makes the
discrepancy visible [@norman1981categorization].

::: {.rule #FRM-044 grade="C"}
**When a procedure a learner has already practiced changes, mark the changed step visibly the
next time they see it.** Capture errors arise when a familiar sequence takes over from a
similar new one [@norman1981categorization], so the product, not the learner, must surface the
difference.

*In LTF:* when a challenge's `procedure` changes between versions and the learner has a past
attempt, `FlyPanel` and `BriefTab` mark the changed step with a `Badge` reading "Changed". The
debrief already detects a changed rubric ("This challenge was updated"); this extends the idea
to steps.
:::

### Modes need more than a color

Sellen, Kurtenbach and Buxton ran two experiments on mode errors in a vi-like text-editing
task, with twelve experts and twelve novices, a concurrent distractor task on a second
computer, and a measure of "resume time" from finishing the distractor to the first editing
action [@sellen1992prevention]. A foot pedal that the person held down to stay in insert mode
produced significantly fewer mode errors than keyboard switching, and turning the whole screen
pink in insert mode also helped. The mode-switching method accounted for about three times as
much variance as the visual feedback (15.6 against 4.8 percent under liberal error scoring).
The pedal also gave faster resume times, and the visual feedback had no effect on resume
time. The authors conclude that mode states the user maintains by their own action prevent
errors better than states the system maintains. The sample is small, the hardware unusual and
the task narrow, so the numbers should not be carried to touch screens; the direction is the
transferable part.

LTF has modes. `WidgetFrame` has an Explore or "Quiz me" pill toggle that changes what a
widget's controls do. `ChecklistRunner` labels its mode with a `Badge` reading "Read-do" or
"Do-verify", which is a word plus a variant color. The challenge page has a Fly tab and a
separate Fly mode screen. None of these is a user-maintained state, and none should be: a
press-and-hold for a whole flight is impractical. The lesson for LTF is the second half of the
result: color alone was the weakest signal, so every mode must announce itself in words and
in the layout.

::: {.rule #FRM-045 grade="B"}
**Show every mode with a word and a change in layout or shape, never by a color change alone;
reserve hold-to-act controls for brief, risky modes.** User-maintained mode states prevented
errors better than system-maintained ones, and a color change was the weakest cue tested
[@sellen1992prevention]. Mode errors are a recognized slip category
[@norman1981categorization].

*In LTF:* the `WidgetFrame` "Quiz me" state adds a heading or banner inside the canvas
("Quiz: set the needle to..."), not only a filled pill. `ChecklistRunner` keeps its word
badge. If LTF ever adds a scored mode to Fly mode, it shows "Scored" as text in the title bar,
not as a tint.
:::

::: {.rule #FRM-046 grade="B"}
**Test any screen with a mode by interrupting the tester (switch to the simulator, then
back) and measuring how long they take to act correctly on return.** Resume time after an
interruption revealed mode confusion that error counts alone did not
[@sellen1992prevention].

*In LTF:* add a "switch away for 30 seconds, then continue" step to usability sessions for
`FlyModePage`, `WidgetFrame` quiz mode and `ChecklistRunner`, and note the time to the first
correct action.
:::

### What this means for Learn to Fly

Keep the forward, local recovery paths (tap again, Backspace, opposite button, change and
check again) and the draft saving in `features/challenges/storage.ts`. Keep the delete
dialog's explicit "This cannot be undone". Change three things. State irreversibility before
the debrief submit (FRM-042). Separate reset controls from frequent ones in `ChecklistRunner`
and `Stopwatch`, and give both an undo `Toast` rather than a dialog (FRM-042, FRM-043). Make
the `WidgetFrame` quiz state announce itself in words inside the canvas (FRM-045). Build the
"Changed" step badge for procedures a learner has practiced (FRM-044). Add an interruption
step to every usability session that involves a mode (FRM-046).

## Onboarding: the active user and training wheels

### The paradox of the active user

Carroll and Rosson, working from user studies at IBM's User Interface Institute in the early
1980s, described a pattern that every onboarding designer meets: new users do not read the
manual or finish setup first; they start using the system at once to get their task done
[@carroll1987paradox]. The paradox is that a little time spent learning up front would save
time later, and people still do not spend it, because their motivation is the task, not the
system. The chapter's lesson for designers is to stop designing for an idealized learner who
studies first and to design for an active user who, in the words of one account of the
argument, "acts on the system with limited knowledge of it". The chapter itself was not
available for this Part; it is known from Nielsen's column on it and a lecture note, and
Nielsen's account says later studies confirmed the pattern without citing them in the text.
Taken literally, "users never read" is an overstatement: people do consult help once stuck,
especially when it is short and sits at the point of need.

LTF's learners are active users in the strongest sense. They have a simulator open, a
controller in hand and a reason to be there, and many will try the airplane before finishing a
lesson. The product's current entry already respects this: the landing page's primary action,
"Start lesson 0.1", goes straight to the first lesson, and the hero note says Lesson 0.1 takes
five minutes.

### What the Minimal Manual showed

The design response from the same research program is the best experimental evidence in this
Part for how to teach a new system. Carroll and colleagues built a "minimal manual" for a word
processor around four principles: focus on real tasks from the start, slash the verbiage,
support recognizing and recovering from errors, and guide exploration
[@carroll1987minimal]. They cut a commercial training manual to 45 pages, less than a quarter
of its length, by removing repetition, previews, reviews, practice exercises, the index, the
welcome introduction and the troubleshooting appendix. A learner quoted in the paper wanted
"to do something, not learn how to do everything".

In the first experiment, with 19 novices, the minimal-manual group needed 40 percent less
learning time and completed 2.7 times as many performance subtasks as the group using the
standard self-instruction manual. In the second, with 32 office workers who had little
computer experience, minimal-manual learners completed 58 percent more subtasks and achieved
93 percent more per unit time on the first three tasks. They also made 20 percent fewer
errors, spent 10 percent less time recovering and used the recommended recovery methods 60
percent more often, though those error differences were not statistically significant. The
samples were small, the system was a 1980s word processor, and the two manuals differed in
many ways at once, so the paper cannot say which feature produced the gain. Carroll has said
there is no deductive theory of minimalist instruction, which puts the weight on testing.

::: {.rule #FRM-047 grade="B"}
**Make the first screen of a first run a real task, with explanation attached to the action
rather than placed before it.** Task-first, low-verbiage instruction cut learning time and
raised task completion in two experiments with novices [@carroll1987minimal], and new users
act before they read [@carroll1987paradox]. The samples were small and the manipulation
bundled, so the evidence supports the approach, not any one feature of it.

*In LTF:* keep "Start lesson 0.1" as the landing page's primary action, and keep Lesson 0.1
built around a first action in the sim within its first minutes. Do not add a welcome
introduction, a "how to use this course" section or a preview of the curriculum before that
action.
:::

::: {.rule #FRM-048 grade="B"}
**Give every procedure step its checkpoint (what the learner should now see) and its recovery
(what to do if they do not).** Explicit support for error recognition and recovery is one of
the four minimalist principles, and it is how a learner coordinates the instructions with the
system in front of them [@carroll1987minimal].

*In LTF:* add optional `expect` and `ifNot` fields to challenge `procedure` steps in the
content schema, rendered under each step in `FlyPanel` and `BriefTab` in `text-ink-2`. Their
content follows the aviation-facts rules: sourced, tokenized, and marked with a `verify`
callout until checked in the sim.
:::

### Training wheels

Carroll and Carrithers tested a different response to novice errors: instead of explaining
the system, make the troublesome parts of it unreachable [@carroll1984training]. Their
training-wheels word processor blocked typical and troublesome error states. Learners using it
learned faster, achieved more and did better on a comprehension post-test than learners on
the full system, and the control group spent almost a quarter of its time recovering from the
error states the training interface had blocked. A companion paper in Human Factors reported
two further experiments, one on learning by doing and one on learning from the manual, in
which the restricted version again improved learning efficiency. Only the abstracts were
available for this Part, so secondary figures that circulate about the study (sample size,
speed advantage, number of blocked errors) are left out. The design risk follows from the idea
itself: blocking a function frustrates someone who needs it, so the interface must show what
is unavailable and why. No controlled study of that cost was found.

LTF already has the vocabulary for this. `LessonPath` and `Card` have a `locked` state (a
dashed ring on the path). `WidgetFrame` carries a "Simplified model" badge, which tells the
learner that the widget is a reduced version of the real thing. What the product does not yet
do is restrict a widget's controls in early lessons and say when they open.

::: {.rule #FRM-049 grade="B"}
**In early lessons, show only the controls the current step needs, and label anything held
back with what unlocks it.** Blocking common error states made novices learn faster and
better, and the control group lost almost a quarter of its time to the errors that were
blocked [@carroll1984training]. The evidence is strong for the principle and weak for any
particular implementation.

*In LTF:* widgets used in Module 0 and Module 1 accept a `controls` prop that limits which
inputs are live; held-back inputs render disabled with `aria-disabled` and a one-line reason
("Opens in Lesson 1.3"). The `locked` state on `LessonPath` always says what unlocks it.
:::

### When guidance turns into noise

Guidance that helps a beginner can hurt someone who already knows the material. Kalyuga,
Ayres, Chandler and Sweller reviewed experiments showing that techniques "highly effective with
inexperienced learners can lose their effectiveness and even have negative consequences when
used with more experienced learners" [@kalyuga2003expertise]. Integrated text that novices
needed became redundant for more experienced trainees, who did better with the diagram alone;
worked examples that beat problem solving for novices lost their advantage and then reversed as
experience grew; gradual fading from examples into problems beat an abrupt switch. The
mechanism they propose is that experts must reconcile the guidance with what they already know,
and redundant information "is frequently difficult to ignore". The review comes from the
theory's own proponents, many studies use subjective effort ratings, and full reversals are
rarer than simple disappearance of the benefit.

LTF's audience includes long-time sim players, student pilots and returning learners
alongside true beginners. For them, a mandatory walkthrough is not neutral: it costs time and
attention that the evidence says may make learning worse.

::: {.rule #FRM-050 grade="B"}
**Fade guidance as the learner progresses, and give experienced learners a way to skip or
collapse it.** Novice-oriented guidance loses its benefit and can reverse for more
experienced learners, and redundant explanation is hard to ignore [@kalyuga2003expertise].

*In LTF:* any first-run help, coach mark or setup screen has a visible skip. Callouts that
repeat material from an earlier lesson collapse to their title after the learner has completed
that lesson. Later checklists in `ChecklistRunner` show items without the explanatory hints
that the first exposure carried.
:::

### What practitioner analysis says about tours and coach marks

Kendrick's Nielsen Norman Group analysis of mobile onboarding argues that onboarding adds
interaction cost and strains memory, and that teams should avoid creating it whenever possible
and fix the usability problems instead [@kendrick2020mobileapp]. It sorts first-run help into
three components. Deck-of-cards tutorials (a carousel of explanatory screens) did not improve
task performance in earlier NN/g research that the article cites; if one is used it needs a
highly visible skip, few cards and one concept per card. Interactive walkthroughs are worth it
only when the workflow is new or unfamiliar. Coach marks (overlays pointing at controls) are
often nice to have rather than needed, and should be timely and unobtrusive; one weather app
is criticized for highlighting every interaction on a single screen. The article reports no
study numbers or sample sizes and the earlier research method was not read, so its
recommendations are expert judgment. They agree with the older experimental line from
Carroll.

::: myth
**"New users need a product tour before they start."** The experimental evidence points the
other way: novices learned faster from task-first material with the preview and welcome
sections removed [@carroll1987minimal], new users skip up-front material anyway
[@carroll1987paradox], and carousel tutorials did not improve task performance in the testing
that practitioner analysis cites [@kendrick2020mobileapp].
:::

::: {.rule #FRM-051 grade="C"}
**Do not put a carousel tutorial or a tour of the site's sections in front of the first
task.** Deck-of-cards tutorials did not help task performance in the research cited by
practitioner analysis, and walkthroughs are justified only for unfamiliar workflows
[@kendrick2020mobileapp].

*In LTF:* the planned onboarding screen "Your flight bag" (v1.md Section 20.13, a card per
site area with "Next" moving a highlight) is a tour of this kind and should not be built
before the first lesson. The same information belongs where each area is first used: the
"Fly it" challenge card in a lesson, the Reference link from a lesson glossary chip.
:::

::: {.rule #FRM-052 grade="C"}
**Use at most one coach mark per screen, on first use only, attached to the one control that
is not self-explanatory, and never show it again once dismissed.** Coach marks should be
timely and unobtrusive, and highlighting every interaction on a screen is the named failure
[@kendrick2020mobileapp]; repeating a dismissed prompt is nagging [@gray2018dark].

*In LTF:* the one candidate is `FlyModePage` on its first open: a single dismissible tip on
the step checkboxes ("Tap a step when it's done. Tap again to undo."). Store the dismissal
like `ltf-beta-banner`.
:::

### Confidence comes from doing

Bandura's account of self-efficacy ranks its sources by dependability: performance
accomplishments (the person's own successes) first, then watching others succeed, then verbal
persuasion, then physiological state [@bandura1977selfefficacy]. Persuasion produces weaker
expectations than success because it provides no experience to rest on, and it is easily
undone by a failure. The evidence comes from small clinical studies of phobia treatment, and
the ranking rests partly on later work not reviewed here, but the direction is consistent with
the minimal-manual results: people who do real tasks early finish more of them.

For onboarding this means the goal of a first run is a first real success, as early as the
course allows, and not reassurance. LTF's landing headline ("Yes, you can fly a plane.") is a
persuasion line, which is fine as a promise on a marketing page; the product's job is to make
it true within the first lesson.

::: {.rule #FRM-053 grade="B"}
**Design the first run to end in a real, noticeable success the learner achieved, and do not
substitute encouragement copy for it.** Mastery experiences are the most dependable source of
self-efficacy and persuasion the weakest [@bandura1977selfefficacy].

*In LTF:* the first completion of a Module 0 lesson or challenge shows what the learner did
(the steps ticked, the time flown) in the completion panel, not a generic "Great job!". Keep
encouragement in the landing hero, where it is a promise, and out of result screens, where it
should be a record.
:::

### The planned onboarding, measured against the evidence

The plan describes a five-screen `/welcome` flow (v1.md Section 20.13, decision D-27) that is
not in the code: a welcome screen with an illustration; Learn to Fly settings (controller,
panel, theme); an optional sim setup that repeats Lesson 0.2; the "Your flight bag" tour; and
an account offer for signed-out visitors. Several of its features match the evidence well. It
is never forced, deep links bypass it, every screen can be skipped to Lesson 0.1 with
defaults, choices are saved and carried into a new account, and it can be run again from the
account page. Those choices answer FRM-011, FRM-050 and FRM-054.

Three parts conflict with the evidence in this chapter. The welcome screen and the tour are
the up-front explanation that the minimal manual removed and that practitioner analysis
advises against (FRM-047, FRM-051). The account offer on screen 5 asks before the learner has
anything to save, which FRM-006 places at "Mark lesson complete" instead. The settings screen
is the strongest part, because the panel choice changes lesson content, but it could equally
be asked the first time a lesson depends on it, with the default stated. Changing the plan is
the owner's decision, so any of these departures needs a Decision Log entry in `v1.md`.

::: {.rule #FRM-054 grade="C"}
**Make every first-run step skippable straight to the first lesson with sensible defaults,
and measure how many learners skip it before keeping it.** Practitioner analysis recommends a
visible skip and measuring use of first-run help [@kendrick2020mobileapp], and active users
will skip it regardless [@carroll1987paradox].

*In LTF:* if any `/welcome` screen is built, log skip and completion per screen (without
identifying learners) and review after the first month of beta. A screen that most learners
skip is removed or moved into the lesson where its content is needed.
:::

::: {.rule #FRM-055 grade="C"}
**Put any step that is critical to safety or to the simulator setup inside the task that
needs it, never only in a "read me first" screen.** Learners skip up-front material to get to
the task [@carroll1987paradox], so anything placed there will be missed by the people who need
it.

*In LTF:* the sim assistance settings that Module 0 depends on live in Lesson 0.2, where the
plan already puts them, and the planned onboarding screen 3 links to that lesson rather than
holding its own copy. A challenge whose setup matters shows it in the `BriefTab` "Sim setup"
list before "I'm set up, start flying".
:::

### What this means for Learn to Fly

Keep the direct "Start lesson 0.1" entry, the account-optional first lesson, the `locked`
state on `LessonPath` and the "Simplified model" badge on `WidgetFrame`. Change the content
model so procedure steps carry a checkpoint and a recovery line (FRM-048), and so early
widgets can hold back controls with a stated unlock (FRM-049). Collapse repeated callouts for
learners who have passed the lesson that introduced them (FRM-050). Add one first-use tip to
`FlyModePage` and nothing else (FRM-052). Before building `/welcome`, record a decision on the
welcome screen, the tour and the position of the account offer (FRM-051, FRM-006), and
instrument whatever is built (FRM-054).

## Touch targets: size, spacing and position

### Distance and size: the law underneath

Fitts showed in 1954 that the time to make an aimed movement grows with the distance to the
target and shrinks with its width, with both inside a logarithm, across stylus tapping, disc
transfer and pin transfer tasks [@fitts1954information]. The regularity is among the most
replicated results in human movement science; its information-theory interpretation is much
weaker than the regularity itself. MacKenzie's review moved the law into HCI and refined it,
recommending the Shannon form of the index of difficulty, log2(A/W + 1), and an "effective
width" computed from where people actually land rather than from the drawn size of the target
[@mackenzie1992fitts]. Two of his observations matter for design. Reducing a target's width
costs more time than an equal increase in distance, which breaks the model's neat symmetry.
And throughput figures varied so widely between studies (about 1.1 to 13.7 bits per second
across six device comparisons) that the law is a tool for comparing layouts within one study,
not a source of absolute numbers.

Effective width is the idea to carry into LTF. It says that the target a person can reliably
hit is defined by their scatter, and scatter grows when attention is divided, when the hand is
cold or tired, or when the device sits at an awkward angle. A learner tapping a tablet beside
the simulator is in all three conditions at once.

::: {.rule #FRM-056 grade="A"}
**Make the controls a learner uses most often both large and close to where their hand or
pointer already is, and size them for degraded precision, not best-case aim.** Movement time
rises with distance over width, and shrinking a target costs more than lengthening the move
[@fitts1954information; @mackenzie1992fitts]. Use the law qualitatively; its absolute
constants are unstable across studies.

*In LTF:* in `FlyPanel`, the step list and "Finish and debrief" are the frequent targets; keep
them in one column under the thumb or cursor rather than spread across the width of
`max-w-3xl`. Do not quote bits-per-second figures in design documents.
:::

### What the touch studies found

Several independent touch studies agree on the shape of the size and error relationship,
though not on its numbers.

Parhi, Karlson and Bederson tested one-handed thumb use on a small device with 20 right-handed
participants, most of whom rarely used touchscreens [@parhi2006target]. For discrete targets
(a button, radio or checkbox) at five sizes from 3.8 to 11.5 mm, surrounded by distractors with
zero spacing, task time fell with every size step, while error rates stopped improving
between 9.6 and 11.5 mm. A box of 9.1 by 8.9 mm enclosed 95 percent of hits on a 9.6 mm
target anywhere on screen. For serial entry on a numeric keypad, errors were higher at 5.8 mm
than at 9.6 mm and above. The authors concluded that 9.2 mm suffices for discrete targets and
9.6 mm for serial ones, and that error rates were higher in serial tasks. The sample was small,
young and mostly male, the device a 2005-era PDA used standing.

Henze, Rukzio and Boll published a tapping game and analyzed over 120 million touch events from
more than 91,000 installations [@henze2011100]. Error rose sharply as targets shrank: below
about 15 mm error climbed steeply, and it exceeded 40 percent for targets under 8 mm. For
targets under 12 mm, error at the screen border was much higher than in the center (31.68
against 17.59 percent on one phone), about the same as making the target 3 mm smaller. Touches
were systematically offset, toward the lower right on the phones analyzed, and a correction
function cut errors by 7.79 percent in a live test. The authors compare their figures with
Parhi's and attribute their higher error rates to time pressure and an animated game, so the
absolute numbers do not transfer; the shape of the curve and the border effect do.

Holz and Baudisch showed why touch is imprecise [@holz2011understanding]. People aim by
aligning visual features on top of the finger, such as the nail, with the target, while the
screen senses the contact patch underneath. A model based on that projected view cut error
offsets to 1.6 mm from 4 mm for the contact-area model, and supported 4.9 mm targets for 95
percent reliability against 7.9 mm. Those figures describe a lab touchpad with an overhead
camera, not a phone as sold. The transferable finding is that touch error depends on finger
angle and is systematic, not random.

Sears and Shneiderman, working on 1980s hardware, showed that much of touch's poor reputation
came from committing a selection at the instant the finger lands [@sears1991high]. With
stabilized input and selection on lift-off, people matched the mouse for targets down to a few
pixels. Even so, selection was fastest and least error-prone for the largest targets, and the
authors proposed "gravity", enlarging the selectable area around a target, as future work.

::: {.rule #FRM-057 grade="A"}
**Treat touch target size as a steep curve: errors rise quickly as targets shrink, so lean
toward the large end for anything tapped often.** Lab studies of thumb tapping
[@parhi2006target], a field study of over 120 million taps [@henze2011100] and studies of
finger posture [@holz2011understanding] and selection strategy [@sears1991high] agree that
larger targets cut errors, though their absolute thresholds differ with task and device.

*In LTF:* the frequent touch targets are fly-mode steps, quiz options, rubric choices and the
`Stopwatch` controls. Size them from the 44 px floor in FRM-058 upward, not down to it.
:::

### The standards: a floor, not a target

WCAG 2.2 sets Target Size (Minimum), level AA, at 24 by 24 CSS pixels, with exceptions for
undersized targets spaced so that a 24 px circle centered on each does not touch another
target, for functions available through another conforming control, for links inside a
sentence, for browser-drawn controls and for essential presentations [@w3c2024wcag]. The
Understanding document says sufficient spacing can work as well as larger size, and gives a row
of 20 px buttons with 4 px margins as a pass and the same row with no gaps as a fail. Target
Size (Enhanced), level AAA, asks for 44 by 44 CSS pixels and recommends larger targets for
frequent controls, actions that are hard to undo, edge-of-screen controls and steps in a
sequence. The document does not explain how 44 was derived. A CSS pixel is not a fixed
physical length on phones, so 24 px is only roughly 6 mm, well below the 9 to 10 mm the thumb
study found.

::: myth
**"44 pixels is the scientifically established minimum touch target."** WCAG's AAA figure of
44 CSS pixels comes with no stated derivation [@w3c2024wcag], CSS pixels vary in physical size
across devices, and the empirical studies report thresholds in millimeters that depend on task,
grip and time pressure [@parhi2006target; @henze2011100]. Use 44 px as a practical house
standard, not as a measured boundary.
:::

::: {.rule #FRM-058 grade="B"}
**Never ship a pointer target smaller than 24 by 24 CSS pixels unless it meets WCAG's spacing
or inline exception, and make every frequently used or touch-first control at least 44 by
44.** The 24 px floor is the AA requirement [@w3c2024wcag]; the larger figure is supported in
direction by the touch studies [@parhi2006target; @henze2011100], though its exact value is a
convention.

*In LTF:* `Button` `sm` is 32 px and is used for the header "Log in" and "Sign up", the
`SignupBanner` dismiss, `ChecklistRunner` "Large text" and "Reset", and the `QuizBlock`
ordering arrows. It passes AA; on touch layouts these uses move to `md` with a 44 px
`min-h-11` hit area, as the header nav links and quiz option labels already have. The
`PasswordInput` "Show" toggle (32 px) and the `ThemeToggle` segments (32 px) get the same
treatment on touch.
:::

### Hit area larger than the drawing

Because aim is offset and scatter grows under divided attention, the clickable area can be
larger than what is drawn, which is Sears and Shneiderman's "gravity" idea
[@sears1991high] and the practical consequence of Holz and Baudisch's offsets
[@holz2011understanding]. LTF already uses this in `Checkbox`, whose whole label is the hit
target around a 20 px box, and in `QuizBlock`, whose option labels are `min-h-11` bordered
rows.

::: {.rule #FRM-059 grade="B"}
**Where a control must look small, make its hit area larger than its drawing, extending into
its label or padding.** An enlarged selectable area was proposed as a fix for touch
imprecision [@sears1991high], and systematic aim offsets make the drawn edge an unreliable
boundary [@holz2011understanding].

*In LTF:* keep the whole-label hit target in `Checkbox` and `RadioGroup`. Give icon-only ghost
buttons (dismiss X, ordering arrows) a transparent padding that brings the hit area to 44 px
without enlarging the icon.
:::

### Space between targets

Parhi's discrete targets were packed with zero spacing between neighbors, a deliberate choice
to resemble real layouts, and errors still improved only at the larger sizes
[@parhi2006target]. WCAG's spacing exception rests on the same logic: what matters is whether
the touch lands on a neighbor [@w3c2024wcag].

::: {.rule #FRM-060 grade="B"}
**Leave visible space between adjacent tap targets, and never place two actions edge to edge
when either one is destructive.** Errors were measured with zero spacing between targets
[@parhi2006target], and spacing can substitute for size under WCAG 2.2 [@w3c2024wcag].

*In LTF:* the ordering arrows in `QuizBlock` sit side by side at `sm`; separate them by at least
8 px, or stack them vertically. `Stopwatch` pills keep a gap at least equal to their height.
:::

### Edges and grips

Henze found that edge targets are harder to hit [@henze2011100]. Parhi found a right-leaning
hit bias in the rightmost column and recommended that targets on that edge, for right-handed
users, extend to the screen edge [@parhi2006target]. The two agree once the target is allowed
to grow: a control at an edge either runs to the edge, so a stray touch still lands on it, or
moves inward.

Grip assumptions are where touch design most often goes wrong. Hoober's field observation of
1,333 people using phones in public found grips split 49 percent one-handed, 36 percent cradled
and 15 percent two-handed among people touching the screen, with frequent switching between
grips [@hoober2013how]. The article became the origin of the popular "thumb zone" reach
diagrams, and its page now carries the author's 2017 comment saying those reach drawings and
the claim about touch locations were inaccurate and should be ignored.

::: myth
**"Put primary actions in the thumb zone."** The reach diagrams came from rough informal
sampling, and their author later said they were inaccurate and should be ignored
[@hoober2013how]. His own data show grips vary and change every few seconds, so there is no
safe region of the screen for one hand.
:::

::: {.rule #FRM-061 grade="B"}
**At a screen edge, either let the target run to the edge or move it inward; never put a
small target near the border.** Error rates are higher at the border [@henze2011100], and
right-edge targets benefit from extending to the edge [@parhi2006target].

*In LTF:* the `Toast` dismiss X at the bottom right and the `Drawer` close control are the
edge targets; give both a 44 px hit area and at least 8 px inset.
:::

::: {.rule #FRM-062 grade="C"}
**Do not design for a one-handed thumb zone; place controls so they work with either hand and
any grip, and keep destructive ones out of easy accidental reach.** Grips vary and change
often, the reach maps were withdrawn by their author, and he advised against placing
dangerous functions where they are hit by accident [@hoober2013how].

*In LTF:* test Fly mode and the lesson page with left-handed testers as well as right-handed
ones. Do not mirror layouts by handedness; keep one layout that works for both.
:::

::: {.rule #FRM-063 grade="B"}
**Make keys for serial entry (keypads, steppers pressed repeatedly) larger than one-off
buttons.** Error rates were higher in serial than discrete tapping, and the authors recommended
nothing under 9.6 mm for data entry [@parhi2006target].

*In LTF:* if numeric entry in Fly mode ever uses on-screen steppers or a keypad, use `Button`
`lg` (48 px) with gaps, not `sm`.
:::

### What this means for Learn to Fly

Keep the 44 px header nav, the `min-h-11` quiz options, the whole-label `Checkbox` hit area, the
`h-11` `RangeField` track and the 48 px `lg` buttons. Change the touch-facing uses of `Button`
`sm`, the 32 px `PasswordInput` toggle and the 32 px `ThemeToggle` segments to 44 px hit areas
(FRM-058, FRM-059). Separate the quiz ordering arrows and the stopwatch pills (FRM-060). Inset
edge controls (FRM-061). Add a component test that measures the rendered hit area of every
interactive element on `/dev/components` against 24 px, and of the fly-mode controls against
44 px, so the policy is enforced in CI rather than by review.

## Gestures, dragging and commit on release

### Which gestures people already know

Wobbrock, Morris and Wilson asked 20 participants with no prior touchscreen experience to
invent gestures for 27 commands on a tabletop, after seeing an animation of each command's
effect [@wobbrock2009userdefined]. Agreement among participants was modest: an average score
of 0.32 for one-handed and 0.28 for two-handed gestures, and the more conceptually complex the
command, the less people agreed (r = -.52). Simple commands produced physical gestures such as
dragging; complex ones produced metaphorical or symbolic gestures that few people shared. The
participants rarely cared how many fingers they used, preferred one hand to two, and were
strongly shaped by desktop idioms. The consensus set covered 57.0 percent of all gestures
proposed and deliberately included aliases, several gestures for one command. The three
authors had each designed a set in advance, and each covered only 43.5 percent of what users
produced. The limits are real: a tabletop is not a phone, there was no recognizer or feedback,
and later critics have argued that agreement scores depend on how commands are shown and on
habits carried over from other devices.

The finding that transfers is that a beginner's gesture vocabulary is small and borrowed: tap,
drag, and the pinch and swipe that phones taught everyone. Anything beyond that must be taught,
and LTF's learners already have a whole cockpit to learn.

::: {.rule #FRM-064 grade="B"}
**Use only gestures beginners already know (tap, drag, pinch, swipe), and give every gesture a
visible control that does the same thing.** Agreement on invented gestures was low and fell
further for complex commands, which the authors suggest need on-screen widgets
[@wobbrock2009userdefined].

*In LTF:* no multi-finger or edge gesture moves between steps, lessons or tabs. Any pinch-zoom
on a chart widget is matched by visible zoom buttons.
:::

::: {.rule #FRM-065 grade="B"}
**Offer more than one way to perform an adjustment, such as dragging a slider or tapping
buttons beside it, and do not require a particular number of fingers or a free-form path.**
Aliases raised guessability, and finger count did not reliably distinguish users' intentions
[@wobbrock2009userdefined]. Free-form path gestures were the slowest and least accurate
techniques in a comparison under distraction, at 81.4 and 83.5 percent accuracy
[@bragdon2011experimental].

*In LTF:* `RangeField` keeps the native range input, which accepts drag, track taps and arrow
keys. Where a widget adjusts a value the learner must hit precisely, add minus and plus
buttons beside the slider.
:::

### Commit on release

Sears and Shneiderman's lift-off strategy commits a touch selection only when the finger is
lifted, which lets the person see where they landed and slide to correct or cancel
[@sears1991high]. That is how the browser's `click` event already behaves on touch, so LTF
gets the benefit as long as it does not bypass it. The code reviewed for this Part has no
`onPointerDown` handlers.

::: {.rule #FRM-066 grade="B"}
**Commit any action on release, never on touch-down or pointer-down, so the learner can slide
off a control to cancel.** Lift-off selection let touch match mouse accuracy down to very small
targets where land-on selection did not [@sears1991high].

*In LTF:* use `onClick` for ticking steps, checking answers and submitting. A lint rule or
review check flags `onPointerDown` and `onTouchStart` handlers that change state.
:::

### Dragging along a path

Accot and Zhai showed that steering a pointer through a tunnel follows a different law from
pointing: time rises linearly with the path's length divided by its width, so doubling the
length or halving the width doubles the time, a steeper penalty than pointing's logarithm
[@accot1997beyond]. Error rates in their steering tasks were high (about 18 percent in one set
of narrowing-tunnel conditions), and the law has held in follow-up studies across several
input devices. A slider track, a drag along a drawn approach path and a diagonal move into a
cascading menu are all steering tasks.

::: {.rule #FRM-067 grade="B"}
**Do not make a drag depend on staying inside a narrow corridor; give drag paths wide
tolerance, and clamp a value at its limit rather than cancelling the drag when the pointer
wanders.** Steering time grows linearly with length over width, and steering errors are high
[@accot1997beyond].

*In LTF:* any widget that asks the learner to trace or follow a path (for example on
`TrafficPattern`) accepts a tolerance band as wide as the teaching point allows, and range
inputs keep tracking when the pointer leaves the track vertically.
:::

WCAG 2.2 Dragging Movements, at level AA, requires that anything done by dragging can also be
done with a single pointer without dragging, unless dragging is essential [@w3c2024wcag]. Its
examples are a slider that also accepts a tap on the track, a map with directional buttons and
a sortable list with up and down controls. LTF's ordering quiz already uses up and down
buttons rather than drag and drop, which satisfies the criterion and is easier for a beginner
on a tablet.

::: {.rule #FRM-068 grade="C"}
**Give every drag interaction a single-tap or button alternative.** Dragging Movements is a
level AA requirement in WCAG 2.2 [@w3c2024wcag].

*In LTF:* keep the up and down buttons in `QuizBlock` ordering questions. Any future
drag-to-place widget (a dial, a map pin, a sortable checklist) ships with buttons or tap-to-set
in the same release.
:::

### Keep the value out from under the finger

Sears and Shneiderman's offset cursor solved a problem that every touch slider still has: the
finger hides what it is setting [@sears1991high]. Hoober's observations add that fingers
obscure content in ordinary use, and he advises testing prototypes by holding them
[@hoober2013how]. `RangeField` puts its value readout above the track at the right, in mono,
which keeps it visible during a drag from below.

::: {.rule #FRM-069 grade="B"}
**Show the value being set by a drag in a readout placed where the finger cannot cover it,
above or beside the control, updating continuously.** The offset cursor let people see what
they were selecting [@sears1991high], and fingers routinely hide content on touch screens
[@hoober2013how].

*In LTF:* keep `RangeField`'s readout above the track. For draggable needles or dials in
widgets, mirror the value in a readout outside the dial face, and never only in a tooltip that
appears under the finger.
:::

### What this means for Learn to Fly

Keep the native range inputs, the button-based ordering quiz, `onClick` commits and the
readout above `RangeField`. Add plus and minus buttons to sliders where precision matters
(FRM-065), check every drag widget for a non-drag path and a wide tolerance before release
(FRM-067, FRM-068), and add a check against state changes on pointer-down (FRM-066). Do not
introduce custom gestures for navigation (FRM-064).

## Fly mode: designing for divided attention

### Looking is the cost

Fly mode is used while the learner's eyes are on the simulator. The closest empirical match in
the reviewed research is Bragdon, Nelson, Li and Hinckley's comparison of soft buttons and
gestures on a phone under four conditions: seated with no distraction, seated with a
situational-awareness task on a monitor, walking on a treadmill with that task, and seated with
an attention-saturating tracking task [@bragdon2011experimental]. Fifteen participants took
part. Soft-button completion time rose by 15.84 percent from the undistracted condition to the
monitor-task condition and then stayed fairly flat, which suggests the largest cost was simply
not being able to look at the phone all the time. Eye tracking showed that soft buttons needed
the eyes on the phone 98.8 percent of the time against 3.5 percent for gestures. In the three
distracted conditions no participant preferred soft buttons, and 13 of 15 wanted more than one
technique. The study was small, the distractors were simulated, and its best gestures started
from the phone's physical bezel, which a web page cannot use. The robust finding is the
attention cost of having to look at a small target; it does not show that a particular swipe
would suit LTF. The paper also cites Kane and colleagues' finding that larger buttons help
when walking.

LTF's `FlyModeLayout` already responds to this: dark, `text-xl`, `max-w-3xl`, an `h1` at
`text-4xl`, a `text-2xl` goal, `FlyPanel large` with `text-xl` steps in bordered rows that turn
`border-go bg-go-tint` when ticked, and `text-5xl` stopwatch digits.

::: {.rule #FRM-070 grade="B"}
**In Fly mode, show few controls, make each large, and keep every one in a fixed position from
step to step so it can be hit with a glance.** Having to look at small soft targets carried the
main performance cost under divided attention [@bragdon2011experimental], and size matters most
when precision is degraded [@mackenzie1992fitts].

*In LTF:* keep the step rows full width and the "Finish and debrief" button at `lg`. Raise the
`Stopwatch` pills from 36 px to at least 48 px in `large` mode, and keep steps in a fixed order
that never reflows when one is ticked.
:::

::: {.rule #FRM-071 grade="B"}
**Make the current step and state readable in a single glance on return from the sim.**
Learners will glance away and back, and the cost of soft controls was in the looking
[@bragdon2011experimental]; resume time after an interruption exposes confusion about state
[@sellen1992prevention].

*In LTF:* `FlyPanel` marks ticked steps but not the next one. Give the first unticked step a
distinct treatment (an ink border and `aria-current="step"`, as `ChecklistRunner` already
does) so the eye lands on it.
:::

### The device on the desk

Fly mode will often run on a tablet or phone lying flat or propped beside a keyboard, touched
by a finger at a low angle. Holz and Baudisch found that touch error offsets depend on finger
posture [@holz2011understanding], and Henze found systematic offsets in ordinary phone use
[@henze2011100]. Hoober's grip data are about handheld phones in public and do not describe a
device on a desk [@hoober2013how]. The keystroke-level model adds the cost of homing, moving
the hand between devices, which a learner pays every time they leave the controller to tap the
tablet [@card1980keystroke].

::: {.rule #FRM-072 grade="B"}
**Test Fly mode with the device flat or propped on a desk, tapped at a low finger angle, and
with an interruption that sends the tester's eyes to the sim between taps.** Touch offsets
change with finger posture [@holz2011understanding], and interruption reveals mode and state
confusion [@sellen1992prevention].

*In LTF:* add these two conditions to the fly-mode usability script and to the manual test
list for any `FlyPanel` change.
:::

::: {.rule #FRM-073 grade="C"}
**Do not require more than one tap on the second screen per procedure step, and offer a
keyboard path so a learner at a desk need not switch devices.** Each move between devices is a
homing cost paid on every step [@card1980keystroke]. Keyboard shortcuts must supplement, not
replace, standard controls, be documented, and avoid browser and screen-reader keys
[@w3c2026authoring].

*In LTF:* bring `ChecklistRunner`'s documented keys (Space ticks, Backspace unticks the last
item) to `FlyPanel`, and show them in one line under the steps as the runner does.
:::

### Feedback without interruption

Nielsen's widely used response-time limits put the feeling of direct manipulation at about 0.1
second, an uninterrupted flow of thought at about 1 second and the limit of focused attention
at about 10 seconds [@nielsen1993response]. They are a convention with an expert's authority,
not experimentally derived thresholds, and they are a useful budget. For a learner glancing at
the screen, a tick that does not respond at once invites a second tap that undoes it.

::: {.rule #FRM-074 grade="C"}
**Show the result of every tap in Fly mode within about 0.1 second, locally, before any network
call completes.** That limit is the conventional threshold for feeling that the interface
responds directly [@nielsen1993response].

*In LTF:* `FlyPanel` already updates its state and saves to storage synchronously on each
tick. Keep any future server sync of ticks optimistic, with a quiet persistent "Saved" or
"Waiting to sync" line that does not move other content.
:::

Feedback research warns against interrupting a learner who is actively engaged, and favors
holding detailed feedback for a natural pause [@shute2008focus]. Bandura notes that high
arousal usually debilitates performance [@bandura1977selfefficacy]. Fly mode has one deliberate
interruption: a challenge's random events fire an alert with a four-pixel `border-warn`, a
pulse and a two-tone beep, and the learner dismisses it with "Got it". That is the product
simulating an in-flight event on purpose, and it works only if nothing else in Fly mode looks
or sounds like it. The `BetaBanner` also appears above Fly mode, which spends screen space on a
message the learner has already read elsewhere.

::: {.rule #FRM-075 grade="B"}
**Reserve Fly mode's alert style and sound for the challenge's own events, and queue all other
feedback (sign-up prompts, tips, sync notices) for the debrief.** Interrupting an engaged
learner is listed among things to avoid in formative feedback [@shute2008focus], and high
arousal tends to impair performance [@bandura1977selfefficacy].

*In LTF:* hide `BetaBanner` and the `SignupBanner` inside `FlyModeLayout`; show no `Toast` in fly
mode except a failure to save. Keep the random-event alert as the only `border-warn`
element on the screen.
:::

::: {.rule #FRM-076 grade="C"}
**Never move content under the learner's finger in Fly mode: no layout shift when an alert
appears, a step is ticked or a banner loads.** Controls and content that do not move
unexpectedly are a listed cognitive accessibility pattern [@seemanhorwitz2021making], and a
moved target becomes a description error waiting to happen [@norman1981categorization].

*In LTF:* render the random-event alert in a reserved slot or as an overlay that does not push
the step list down, and keep the `Stopwatch` width fixed as digits change (its tabular mono
digits already help).
:::

::: {.rule #FRM-077 grade="C"}
**Keep the focused control visible under sticky bars and alerts, and return focus to a logical
place when an alert is dismissed.** WCAG 2.2 Focus Not Obscured requires that a focused
component not be entirely hidden by author content [@w3c2023wcag], and focus should never fall
back to the page body after a dialog or alert closes [@w3c2026authoring].

*In LTF:* after "Got it" on a random-event alert, move focus to the current step, not to the
top of the page.
:::

### What this means for Learn to Fly

Keep `FlyModeLayout`'s large type and dark surface, the full-width step rows, the synchronous
local save, the wake-lock option, the random-event alert and the "Got it" dismissal. Change
these: enlarge the stopwatch pills and separate "Reset" (FRM-070, FRM-043), mark the next
step (FRM-071), add `ChecklistRunner`'s keyboard path to `FlyPanel` (FRM-073), hide banners and
toasts in Fly mode (FRM-075), reserve space for the alert so nothing shifts (FRM-076) and
return focus after it (FRM-077). Test on a desk with interruptions before shipping any fly-mode
change (FRM-072).

## Decision list and review checklist

### Decisions this Part settles for Learn to Fly

1. **Account later.** The first lesson needs no account; the account request stays at "Mark
   lesson complete" and completes the action after sign-up (FRM-006, FRM-008).
2. **Ask less.** Every sign-up field has a recorded remove, postpone, infer or keep decision;
   the display name is the first to decide (FRM-002, FRM-007).
3. **Protective defaults.** No preselected consent, marketing or quiz answer; "Remember me"
   stays off (FRM-009).
4. **Credentials.** Autocomplete, paste and password managers always work; no confirm-password
   field while "Show" exists (FRM-010, FRM-011).
5. **Symmetric friction.** Leaving is no harder than joining; dismissed prompts stay dismissed
   (FRM-012, FRM-013, FRM-014).
6. **Layout.** Top labels in plain weight, one column, widths that fit the answer, words for
   required and optional, one primary action, no reset (FRM-015 to FRM-023).
7. **Answer spaces.** Formats and units stated before typing, units fixed beside the box,
   tolerant parsing in one `shared/` function, purposeful reflection hints (FRM-024 to FRM-029).
8. **Validation.** Submit-time by default, on-leave only for hard fields, never while typing,
   errors cleared on fix, focused summary plus field messages, quiz correctness only on check
   (FRM-030 to FRM-039).
9. **Recovery.** Every frequent action reversible at equal effort; drafts saved; one-way
   actions announced; resets separated and undoable; modes shown in words (FRM-040 to
   FRM-046).
10. **Onboarding.** The first lesson is the onboarding; no tour or welcome deck before it;
    training wheels and fading in content; one coach mark in Fly mode; any `/welcome` screen is
    skippable and measured, and departures from v1.md Section 20.13 go in the Decision Log
    (FRM-047 to FRM-055).
11. **Touch.** 24 px absolute floor, 44 px for frequent or touch-first controls, larger in fly
    mode; hit areas beyond drawings; space between targets; no thumb-zone layouts
    (FRM-056 to FRM-063).
12. **Gestures.** Known gestures only, with visible equivalents; commit on release; wide drag
    tolerance; non-drag alternatives; readouts clear of the finger (FRM-064 to FRM-069).
13. **Fly mode.** Few, large, fixed controls; the next step marked; keyboard path; instant local
    feedback; no interruptions but the challenge's own; no layout shift (FRM-070 to FRM-077).

### Review checklist

Run these questions against a pull request or a page. Each names the rules it checks.

**Forms and fields**

- Does the change say which layer (relationship, conversation, appearance) it fixes? (FRM-001)
- Is every new field justified by a screen that uses it, with a remove, postpone or infer
  decision recorded? (FRM-002, FRM-007)
- Has the flow's operation count been compared with the old one? (FRM-003)
- Has a beginner filled in the new or changed form while someone watched? (FRM-004, FRM-005)
- Is an account asked for only at a moment of value, with the reason stated and a confirmation
  after? (FRM-006, FRM-008)
- Are all defaults ones the learner would choose, with no preselected consent or answers?
  (FRM-009)
- Do credential fields keep autocomplete and paste, and is no information asked twice?
  (FRM-010, FRM-011)
- Is leaving as easy as joining, and does a dismissed prompt stay dismissed? (FRM-012, FRM-013)
- Are permissions requested in context with a reason? (FRM-014)
- Are labels above fields, visible, plain weight and tied in code? (FRM-015, FRM-016)
- Is the form one column, with fields sized to their answers? (FRM-017, FRM-018)
- Are options visible radios or checkboxes where there are few, with no multi-select list box?
  (FRM-019, FRM-020)
- Is required or optional status shown in words, with one primary action and no reset?
  (FRM-021, FRM-022, FRM-023)

**Formats and validation**

- Is every format, length and unit stated before typing, and does the box show its expected
  size and unit? (FRM-024, FRM-025)
- Can the learner type a unit or separator without being marked wrong? (FRM-026, FRM-027)
- Is the structured-value control chosen by what the value is used for? (FRM-028)
- Do open prompts say what a useful answer looks like? (FRM-029)
- Does any message appear while the learner is still typing? It must not. (FRM-030)
- Is on-leave validation limited to hard fields, and do errors clear on fix? (FRM-031, FRM-032)
- Are positive ticks limited to hard fields? (FRM-033)
- Is there a focused error summary with links, plus field messages with icon and text?
  (FRM-034)
- Does each message say what happened and what to do, without blame? (FRM-035)
- Is typed input kept after an error, and is double submission prevented? (FRM-036, FRM-037)
- Is quiz correctness checked only on "Check answer"? (FRM-038)
- Are error and first-try failure rates being recorded? (FRM-039)

**Recovery and modes**

- Can each frequent action be reversed with the same effort? (FRM-040)
- Does input survive a refresh, a lost connection and a sign-in detour? (FRM-041)
- Are one-way actions announced, with dialogs only for rare destructive ones? (FRM-042)
- Are reset and destructive controls apart from frequent ones? (FRM-043)
- Are changed procedure steps marked for learners who practiced the old version? (FRM-044)
- Is every mode named in words, and was it tested with an interruption? (FRM-045, FRM-046)

**Onboarding**

- Is the first screen a real task, with steps that carry a checkpoint and a recovery? (FRM-047,
  FRM-048)
- Are early controls limited, with locked items saying what unlocks them? (FRM-049)
- Can experienced learners skip or collapse guidance? (FRM-050)
- Is there no tour or carousel before the first task, and at most one coach mark? (FRM-051,
  FRM-052)
- Does the first run end in a recorded success rather than encouragement copy? (FRM-053)
- Is every first-run step skippable and measured, with critical steps inside the task?
  (FRM-054, FRM-055)

**Touch, gestures and Fly mode**

- Are frequent controls large and near the hand, sized for degraded precision? (FRM-056,
  FRM-057)
- Is every target at least 24 px, and every frequent or touch-first one at least 44 px?
  (FRM-058)
- Do small-looking controls have larger hit areas and space between them? (FRM-059, FRM-060)
- Are edge targets inset or extended, with no thumb-zone assumption? (FRM-061, FRM-062)
- Are serial-entry keys larger than one-off buttons? (FRM-063)
- Are only familiar gestures used, each with a visible control and an alternative way?
  (FRM-064, FRM-065)
- Does every action commit on release? (FRM-066)
- Do drags tolerate wandering and have a non-drag path? (FRM-067, FRM-068)
- Is the value being set visible outside the finger? (FRM-069)
- In Fly mode, are controls few, large and fixed, with the next step marked? (FRM-070, FRM-071)
- Was it tested flat on a desk with interruptions, and does it offer a keyboard path? (FRM-072,
  FRM-073)
- Does every tap respond within about 0.1 second locally? (FRM-074)
- Are interruptions limited to the challenge's events, with no layout shift and focus returned
  after alerts? (FRM-075, FRM-076, FRM-077)
