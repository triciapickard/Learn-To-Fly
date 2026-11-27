# Density test: Part XXIV, Writing and Microcopy

Test section: "Messages that say what happened and what to do" (from the chapter on errors,
feedback and system states), drafted from the notes for shneiderman1982designing,
bargasavila2010simple and wroblewski2009inline.

## Draft 1: terse (about 150 words)

Novices meet a system mostly through its messages. Shneiderman (1982) reports five small
experiments in which rewritten messages improved performance: more specific compiler
messages gave 28 percent better repair scores, and students fixed 7.5 of 10 bad editor
commands with improved messages against 4.1 with the originals. Good messages are brief,
positive, specific and constructive, and leave the user in control; bad ones are vague,
hostile or coded. Later studies of enhanced compiler messages are mixed. For forms,
Bargas-Avila and colleagues found messages placed beside the field after submission worked
better than early inline ones, while Wroblewski found the opposite for some fields; timing
depends on the field. For LTF, "Something went wrong" names no cause and no action beyond
retry; the auth messages ("Email or password is incorrect.") are closer to the model. Every
message should say what happened and what to do.

## Draft 2: medium (about 400 words)

A beginner meets software mainly through what it says when something goes wrong.
Shneiderman's 1982 practitioner note opens with the messages novices faced ("FATAL ERROR,
RUN ABORTED", "ILLEGAL CMD", bare codes) and reports five controlled experiments in which
revised messages helped. Increasing the specificity of compiler messages produced 28 percent
better repair scores. Users of an editor whose only message was a question mark made 10.7
errors, against 6.1 with brief messages. Students corrected 4.1 of 10 faulty commands with
the standard messages and 7.5 with improved ones. The article gives no sample sizes or
statistics, the systems were command-line tools of the 1970s, and later work on enhanced
compiler messages for students is mixed, so the figures show direction, not size.

The guidance survives because it is specific. Messages should be brief, positive,
constructive, specific and comprehensible, and should stress the user's control of the
system rather than the system's control of the user. They should not be wordy, negative,
critical of the user, general or cryptic. The model rewrites replace a verdict with a fact
the user can act on: not "INVALID DATA" but the range of values the field accepts.

Form research adds placement and timing. Bargas-Avila and colleagues report that messages
shown beside the field after the user submits led to fewer repeated errors than inline
messages shown as the field was left, which people ignored. Wroblewski's small Etre study
found the reverse for harder fields, with premature messages ("before and while" typing)
worst of all. Both fit one reading: show a message when the user can use it, next to the
thing it concerns.

For LTF, the default `ErrorState` copy, "Something went wrong" with "We could not load
this. Check your connection and try again.", names one plausible cause and one action,
which is acceptable for a network failure and wrong for anything else. The messages the
auth tests expect from the server ("Email or password is incorrect.", "This password is too
common. Choose something harder to guess.") already state the fact and the next step. The
debrief's "Refresh the page to load the new rubric, then answer again." is the model to
copy.

## Draft 3: full (about 800 words)

A beginner meets software mainly through what it says when something goes wrong, and a
learner who is also flying a simulator meets it at the worst moment, with attention split
between two screens. Shneiderman's 1982 note in Communications of the ACM is the root of
most later advice on this. It opens with the messages novices then faced: violent ones such
as "FATAL ERROR, RUN ABORTED", vague ones such as "ILLEGAL CMD", and codes such as "OC7",
which leave users "shaken, confused, dismayed, and discouraged from continuing".

It then reports five experiments. Undergraduate novices repairing Cobol statements did 28
percent better with more specific compiler messages. Users of a text editor whose only
message was a question mark made 10.7 errors, and 6.1 when they moved to an editor with
brief messages. Students corrected 4.1 of 10 erroneous editor commands with standard
messages and 7.5 of 10 with improved ones. With job control language, students given the
messages of two popular systems scored 2.9 and 3.8 of 6, and students given improved
messages scored 4.8. Preferences favored the improved messages too.

The limits are plain. The article reports no sample sizes and no statistical tests. The
tasks were programming and editing on command-line systems, with students. Later work on
enhanced compiler messages for novice programmers is mixed: one study is reported to have
found fewer errors, another is titled "Results Inconclusive", and a think-aloud study found
students read and acted on enhanced messages without a clear learning gain. The direction
is consistent; the size for a modern web product is unknown.

The guidance is more durable than the numbers. Messages should be brief, positive,
constructive, specific and comprehensible, and emphasize the user's control over the
system. They should not be wordy, negative in tone, critical of the user, general or
cryptic, or imply that the system controls the user. The model rewrites show the move:
"ILLEGAL PASSWORD" becomes "Your password did not match the stored password. Please try
again."; "INVALID DATA" becomes a statement of the accepted range; "INCORRECT COMMAND"
becomes a list of the commands that are allowed. Each replaces a verdict with a fact the
user can act on. Shneiderman also treats messages as a quality-control problem: involve an
editor, keep a record of changes, test messages with the target users, and count how often
each error condition occurs.

Forms research adds where and when. Bargas-Avila and colleagues report a comparison of six
presentations in which messages embedded next to fields and shown after the send button led
to fewer consecutive errors, while messages shown as each field was left led to more errors
because people ignored or dismissed them. Wroblewski's study with Etre (22 users, six form
versions) found the best inline version beat submit-only validation, with "after" timing
fastest and "before and while" worst, because premature messages distract. Messages on
simple fields were noticed by 30 to 50 percent of participants, on hard fields by 80 to 100
percent. The two studies conflict on inline validation; they agree that a message must
appear when the user can use it and next to what it concerns.

For LTF, the default `ErrorState` reads "Something went wrong" and "We could not load this.
Check your connection and try again." That names one cause and one action, which suits a
failed fetch but not a server fault or a missing lesson, where "check your connection" is
wrong advice. `RootErrorPage` says "Reloading usually fixes it", which is specific and
honest. The server messages the auth tests expect are close to Shneiderman's model:
"Email or password is incorrect." states a fact without blaming, and "This password is too
common. Choose something harder to guess." gives the next step. The debrief's
"Refresh the page to load the new rubric, then answer again." is the best message in the
product: cause implied by the title, action stated in order. The quiz's "Not quite." is
gentle but carries no fact; it relies entirely on the explanation that follows. The rule
for LTF is one sentence for what happened in the learner's terms, one for what to do, no
blame, no code, and a count of how often each message fires.

## Verdict

The terse draft keeps the headline numbers but loses the four experiments' variety, the
missing sample sizes, the mixed later evidence, the model rewrites and the
quality-control recommendations, so it cannot support a graded rule or a review checklist.
The medium draft keeps the findings and caveats but compresses the application to two
examples and drops the timing and noticing figures that decide fly-mode and form behavior.
The full draft keeps every finding, number, caveat and the worked LTF decisions, and its
extra length is evidence and application, not restatement. The Part is written at the full
density, with one change: where a source has already been described in an earlier chapter,
later chapters refer to it by its finding rather than restating its design.
