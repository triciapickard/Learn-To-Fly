---
slug: l19-1-holding-patterns-entries-timing-and-wind
code: L19.1
module: m19-holding
order: 1
priority: P0
title: 'Holding patterns: entries, timing and wind'
summary: Turn a holding clearance into a picture, pick the right entry at the fix, and fly a 1-minute racetrack that stays put in a crosswind.
estimatedMinutes: 30
prerequisites: [l18-5-enroute-ifr-and-lost-communications, l6-4-vor-navigation]
objectives:
  - Draw a holding pattern from an ATC holding instruction, including the inbound course and the holding side.
  - Choose the recommended entry (direct, teardrop or parallel) from the heading at the fix.
  - Fly the hold with correct outbound timing and a tripled outbound wind correction.
challenges: []
resources: [aim-5, iph-holding, faa-acs-instrument, pilot-controller-glossary, ifh-ifr-flight]
published: false
lastVerifiedAt: null
simVersion: null
---

## The airplane that has to wait

You are level at 4,000 ft MSL in cloud, 10 miles north-east of the ECA VOR, heading for the approach at Livermore. Then the controller says it: "Skyhawk 3-4-5, hold south of ECA on the 180 radial, right turns, maintain 4,000, expect further clearance at 2145."

Nothing has gone wrong. An airplane ahead is still on the approach, and the controller needs you to wait in a known place. A holding pattern is a parking space in the sky: a racetrack you fly around a fix until the way ahead is clear. It is hard for a new instrument pilot because you must build a picture in your head, in cloud, in about 90 seconds, while flying the airplane. This lesson gives you that picture, building on the radials and HSI from [[l6-4-vor-navigation]] and the IFR system from [[l18-5-enroute-ifr-and-lost-communications]].

:::callout{type="real-world"}
In a real airplane, holding is taught and tested as part of the instrument rating, and you fly it with an instructor or safety pilot wearing a view-limiting device long before you fly it in real cloud. Holding alone in actual instrument conditions, single-pilot, is demanding even for experienced pilots. The sim lets you practice the thinking as often as you like, which is where most of the difficulty lives.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## Why holds exist

Holds have three jobs:

- **Traffic spacing.** ATC can only run one airplane down a final approach at a time. When the airport is busy, or an airplane ahead has gone missed, you wait.
- **Weather.** If your destination is below minimums, ATC may hold you while you decide between waiting and your alternate ([[l18-1-ifr-rules-minimums-currency-alternates-and-fuel]]).
- **Procedure design.** Some approaches use a hold to reverse course, and many missed approaches end at a holding fix. Those charted holds are the subject of [[l19-2-holding-with-the-g1000-and-autopilot]].

Whatever the reason, every minute in the hold is fuel you will not have at the alternate.

:::callout{type="decision"}
The moment you copy "expect further clearance at 2145", do the fuel sum. If holding until 2145 plus the approach, the missed approach, the flight to the alternate and the reserve would leave you short, say so now: "Skyhawk 3-4-5 can hold until 2130, then we need to divert." Controllers would much rather know early. Asking for a shorter hold is a good decision, not an admission of failure.
:::

## The holding instruction

A holding instruction always has the same parts in the same order. Learn the order and you can copy one at radio speed.

| Part                     | In our example                     | What it tells you                                                                                |
| ------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| Direction from the fix   | "south of ECA"                     | Which side of the fix the racetrack lies on                                                      |
| The fix                  | "ECA"                              | The VOR, intersection or waypoint the pattern is anchored to                                     |
| Radial, course or airway | "on the 180 radial"                | The line the inbound leg lies along                                                              |
| Leg length               | (not stated)                       | Given in miles when DME or GPS legs are used; otherwise legs are timed (ask if you want minutes) |
| Direction of turns       | "right turns"                      | Right is standard; ATC says "left turns" only when the hold is non-standard                      |
| Altitude                 | "maintain 4,000"                   | Your holding altitude                                                                            |
| Expect further clearance | "expect further clearance at 2145" | The EFC: when to expect onward clearance, and your departure time if the radios fail             |

Two traps hide in that list. First, "on the 180 radial" names a **radial**, which runs _from_ the station. The hold lies south of ECA along it, so the **inbound course**, the direction you fly toward the fix, is the reciprocal: **360**. Second, right turns are standard, so a controller usually leaves the turn direction out: hear nothing about turns and it is a right-hand hold.

Always write down the EFC. If you lose communications in the hold, it is the time you leave the fix under the lost-comms rules from [[l18-5-enroute-ifr-and-lost-communications]].

:::callout{type="verify"}
Author decision: C19.1 "Hold at a VOR" has no YAML yet. When it is written, keep the clearance in this element order (desk-verified 2026-10-13 against AIM 5-3-8 and the Pilot/Controller Glossary "expect further clearance (time)" entry) and pick one EFC form: this lesson uses a clock time ("at 2145"); v2.md Section 15 uses "in 15 minutes".
:::

:::quiz{id="l19-1-q1" type="single"}
"Hold south of ECA on the 180 radial, right turns, maintain 4,000." What is the inbound course to the fix?

- [ ] 180
- [x] 360
- [ ] 090
- [ ] 270

---

The 180 radial runs south from the station. You fly the inbound leg **toward** the station, so the inbound course is the reciprocal, 360. The outbound heading is about 180.
:::

## Drawing the hold on the HSI

You will not have paper in cloud, so draw the hold on the instrument in front of you. The HSI already shows a course arrow on a compass card, which is most of the drawing.

1. **Set the inbound course** (360 here) with the CRS knob. The head of the arrow now points along the inbound leg, toward the fix.
2. **Put the fix at the center** of the HSI in your mind. The inbound leg runs from the tail of the arrow up to the center.
3. **Hang the racetrack on the correct side.** For right turns the outbound leg lies to the **right** of the arrow, looking from tail to head; for left turns, to the left. Here the inbound leg runs north toward ECA and the racetrack sits east of the 180 radial.
4. **Read the outbound heading** off the tail of the arrow: 180.

Each standard-rate turn and each straight leg takes about 1 minute, so a lap is 4 minutes. Try it on the HSI below: set the course to 360 and imagine the pattern hanging off the right side of the arrow, then set 270 and imagine it again.

::widget{name="vor-cdi" mode="explore"}

:::callout{type="tip"}
Say the picture out loud as you build it: "Inbound 360 to the fix, right turns, pattern on the east side, outbound 180." Speaking it checks it. Instructors hear pilots talk themselves out of a wrong picture all the time.
:::

:::callout{type="verify"}
Widget pending: W37 (Holding Pattern Entry Trainer) is embedded here once Phase 21 ships it: `::widget{name="holding-entry" mode="explore"}`. It draws the racetrack and the three entry sectors on an HSI view and animates the entry. Until then the `vor-cdi` widget and the tables in this lesson carry the content. Screenshot for the shot list: "G1000 HSI with course 360 set, annotated with the racetrack on the east side."
:::

## Entries: direct, teardrop and parallel

You rarely arrive at the fix lined up with the inbound course. The **entry** is how you join the racetrack, and which one you fly depends on your **heading when you cross the fix** compared with the inbound course. Subtract the inbound course from your heading and call the result the **relative angle**, kept between −180° and +180° (250° becomes −110°; −200° becomes +160°). For a **right-turn** hold:

| Relative angle (heading − inbound course) | Entry        | Sector | What you do at the fix                                                                                                                                                               |
| ----------------------------------------- | ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| −70° to +110°                             | **Direct**   | 180°   | Turn right straight onto the outbound heading and fly the pattern                                                                                                                    |
| +110° to +180°                            | **Teardrop** | 70°    | Turn to a heading 30° from the outbound heading, toward the holding side; fly 1 minute; turn right to intercept the inbound course                                                   |
| −180° to −70°                             | **Parallel** | 110°   | Turn to the outbound heading on the non-holding side; fly 1 minute; turn **left** (toward the pattern) through more than 180° and intercept the inbound course, or return to the fix |

For a **left-turn** hold, flip the sign of the relative angle and use the same table (and the parallel entry turns right instead of left).

On the HSI you can skip the arithmetic: with the inbound course set, see where the head of the course arrow sits. From 110° left of the nose round through the nose to 70° right is direct; beyond 110° left (lower left) is teardrop; beyond 70° right (lower right) is parallel. For our ECA hold (inbound 360, right turns):

| Heading at the fix | Relative angle | Entry                                     |
| ------------------ | -------------- | ----------------------------------------- |
| 360                | 0°             | Direct                                    |
| 090                | +90°           | Direct                                    |
| 120                | +120°          | Teardrop                                  |
| 180                | +180°          | Boundary: teardrop or parallel, your pick |
| 270                | −90°           | Parallel                                  |
| 300                | −60°           | Direct                                    |

:::callout{type="tip"}
At a sector boundary either neighboring entry is fine. The instrument ACS asks for an entry appropriate to the pattern, and these three are the ones the FAA recommends, but a safe entry flown promptly always beats the perfect entry chosen too late. Decide before the fix, then fly it. If you realize over the fix that you picked the "wrong" one, keep flying what you chose: all three keep you inside protected airspace.
:::

**Four worked examples.** Each matches a clearance variant in Challenge C19.1 "Hold at a VOR".

:::quiz{id="l19-1-q2" type="single"}
Hold south of ECA on the 180 radial, right turns (inbound course 360). You cross ECA on a heading of 030. Which entry?

- [x] Direct
- [ ] Teardrop
- [ ] Parallel
- [ ] None of these; ask ATC

---

030 − 360 = −330, which is +30 in the −180 to +180 range: the direct sector. Turn right at the fix straight onto the outbound heading of 180.
:::

:::quiz{id="l19-1-q3" type="single"}
Same hold (inbound 360, right turns). You cross ECA on a heading of 150. Which entry?

- [ ] Direct
- [x] Teardrop
- [ ] Parallel
- [ ] Parallel, but with right turns

---

150 − 360 = −210, which is +150: the teardrop sector. Turn to 150 (outbound 180 minus 30°, toward the holding side, east), fly 1 minute, then turn right to intercept the 360 inbound course.
:::

:::quiz{id="l19-1-q4" type="single"}
Same hold (inbound 360, right turns). You cross ECA on a heading of 240. Which entry?

- [ ] Direct
- [ ] Teardrop
- [x] Parallel
- [ ] Direct, but with left turns

---

240 − 360 = −120: the parallel sector. Turn left to the outbound heading of 180, fly 1 minute on the west (non-holding) side, then turn left toward the holding side, intercept the 360 course and fly it to the fix.
:::

:::quiz{id="l19-1-q5" type="single"}
A different hold: "Hold east of the fix on the 090 radial, left turns." You cross the fix on a heading of 010. Which entry?

- [ ] Direct
- [ ] Teardrop
- [x] Parallel
- [ ] Teardrop, with right turns

---

The inbound course is 270 (the reciprocal of the 090 radial). 010 − 270 = −260, which is +100; for a **left-turn** hold flip the sign: −100, the parallel sector. Turn right to the outbound heading of 090 on the non-holding (north) side, fly 1 minute, then turn right to intercept 270 inbound.
:::

## Timing and wind

A hold is a 1-minute pattern, measured on the **inbound** leg: at or below 14,000 ft MSL the inbound leg should take 1 minute (1½ minutes above 14,000 ft). The outbound leg is whatever makes that true, and the first outbound leg is flown for the full minute.

**Where to start the clock.** Start the outbound time over the fix or abeam it, whichever comes later; if you cannot tell when you are abeam, start it when the turn to outbound is complete. Holding at a VOR with the inbound course set, the TO/FROM flag does both jobs: its first flip (to FROM) is station passage, your cue to start the turn outbound, and when it flips back to TO you are abeam the station, so start the clock. Start the inbound time when you roll out on the inbound course.

**Correcting the time.** Fly the first outbound leg for 1 minute, then time the inbound leg. If it ran long you had a headwind inbound (a tailwind outbound) and went too far out: shorten the next outbound leg by the amount the inbound leg was over. If it ran short, lengthen the outbound leg.

| Outbound flown | Inbound measured | Next outbound                |
| -------------- | ---------------- | ---------------------------- |
| 60 s           | 60 s             | 60 s (no wind along the leg) |
| 60 s           | 75 s             | 45 s                         |
| 60 s           | 50 s             | 70 s                         |
| 45 s           | 65 s             | 40 s                         |

> **Next outbound time = last outbound time − (inbound time − 60 s)**

It is a first guess; wind rarely blows exactly along the legs, so expect to adjust again next lap.

**Correcting the heading.** Wind also pushes you sideways. Find the inbound wind correction by bracketing the needle as in [[l6-4-vor-navigation]] and note the crab angle. Outbound there is no needle, and the two turns add drift of their own, so **triple** the inbound correction on the outbound leg, on the opposite side of the compass but still into the wind. Inbound 360 with a westerly wind and a 10° left crab means an inbound heading of 350; outbound is 180 plus 30° into the wind, heading 210. Tripling is an instructor rule of thumb, not an FAA number: the handbooks say only to correct for drift on both legs and to adjust the outbound time.

:::quiz{id="l19-1-q6" type="numeric" answer="40" tolerance="5" unit="s"}
You flew the outbound leg for 60 seconds and the inbound leg took 80 seconds. How many seconds should the next outbound leg be?

---

The inbound leg was 20 seconds long, so shorten the outbound leg by 20 seconds: 60 − 20 = 40 seconds.
:::

:::callout{type="sim"}
The wind in the Learn-To-Fly `WX_IMC_HIGH` preset is steady, so once your outbound time and heading are right they stay right. Real wind shifts with altitude and time, and a real hold needs a small adjustment almost every lap. Treat a perfect second lap in the sim as the start, not the finish.
:::

## The 5 Ts

Every time you cross the fix, run the same five items in the same order. They stop you forgetting the clock while you are busy with the turn, and the radio while you are busy with the clock.

:::callout{type="memory"}
**The 5 Ts at the fix**

1. **Turn** to the outbound heading (or the entry heading).
2. **Time**: start the clock over or abeam the fix, whichever is later (wings level outbound if you cannot tell).
3. **Twist** the course knob to the inbound course if it is not already set.
4. **Throttle**: set holding power and speed.
5. **Talk**: report entering the hold if required, with the time and altitude.

:::

The order is what matters: turn first, because the airplane needs it; time second, because the clock is already running; the rest once the wings are level.

## Speed limits in the hold

A hold sits inside a protected area, and a fast airplane flies a bigger racetrack, so every hold has a maximum airspeed that depends on altitude. The Skyhawk cannot get near any of them, but one day you will fly something faster.

| Altitude (MSL)  | Maximum holding airspeed |
| --------------- | ------------------------ |
| Up to 6,000 ft  | 200 KIAS                 |
| 6,001–14,000 ft | 230 KIAS                 |
| Above 14,000 ft | 265 KIAS                 |

Some holds carry a lower limit printed on the chart (an icon with the speed, often 210 or 175 KIAS). Start slowing when you are 3 minutes or less from the fix, so you cross it the first time at or below the limit. In the Skyhawk a comfortable holding speed is about 90 KIAS with power a little under cruise; slower saves fuel, which is the point of a hold.

:::callout{type="verify"}
Sim check: fly the hold in the sim's 172 and record the power setting and speed it holds comfortably; "about 90 KIAS" is an instructor rule of thumb, not a POH number. The speed table, the charted lower limits and the 3-minute rule were desk-verified 2026-10-13 against AIM 5-3-8 and Instrument ACS task IR.III.B.
:::

:::callout{type="classic"}
In a classic steam-gauge Skyhawk you draw the hold on the heading indicator instead of an HSI, and the VOR needle gives you no course arrow to hang the racetrack on. The relative-angle rule works just the same; many pilots trace the 70° line on the heading indicator with a finger.
:::

## Practice and next steps

Three things to carry forward:

1. The hold lies on the named radial on the named side of the fix; the **inbound course is the reciprocal** of the radial, and right turns are standard.
2. Entry from the relative angle: **direct** −70° to +110°, **teardrop** +110° to +180°, **parallel** −180° to −70° (flip the sign for left turns). Any safe entry beats a late one.
3. One minute inbound: start timing over or abeam the fix, whichever is later, correct the next outbound time by the inbound error, and triple the wind correction outbound.

**Practice.** This lesson feeds the `holding-entries` flashcard deck: random clearances and headings, and you name the entry. The 5 Ts go to the `memory-items` deck.

**Fly it.** Challenge C19.1 "Hold at a VOR" gives you the ECA clearance in cloud with a 20-kt westerly wind, and changes the arrival radial each time so every entry comes up. Fly the entry you chose, two full laps, and bring your timing numbers to the debrief.

**Next.** [[l19-2-holding-with-the-g1000-and-autopilot]] puts the same racetrack into the G1000 and the GFC 700, so the airplane draws the pattern and you supervise.
