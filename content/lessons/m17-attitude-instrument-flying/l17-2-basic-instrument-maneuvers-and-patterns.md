---
slug: l17-2-basic-instrument-maneuvers-and-patterns
code: L17.2
module: m17-attitude-instrument-flying
order: 2
priority: P0
title: Basic instrument maneuvers and patterns
summary: Straight and level, standard-rate turns, climbs and descents, timed turns and Pattern A, flown to the Learn-To-Fly instrument standard.
estimatedMinutes: 25
prerequisites: [l17-1-the-instrument-scan]
objectives:
  - Fly straight and level, standard-rate turns, and constant-airspeed and constant-rate climbs and descents to Gold tolerances.
  - Calculate the bank angle for a standard-rate turn and the time for a timed turn to any heading.
  - Fly Pattern A from the leg table using only the clock, the attitude indicator and power.
challenges: []
resources: [ifh-attitude-flying, faa-acs-instrument, garmin-g1000-nxi-pilots-guide]
published: false
lastVerifiedAt: null
simVersion: null
---

## The same maneuvers, with the picture painted over

Every maneuver in this lesson is one you flew in Module 2: level flight, turns, climbs and descents. What is new is that you fly them from the attitude indicator alone, and that you are now held to the **Learn-To-Fly instrument standard**, which is tighter than the visual one.

| Tier        | Altitude | Heading | Airspeed |
| ----------- | -------- | ------- | -------- |
| ⭐ Bronze   | ±200 ft  | ±20°    | ±15 kt   |
| ⭐⭐ Silver | ±150 ft  | ±15°    | ±10 kt   |
| ⭐⭐⭐ Gold | ±100 ft  | ±10°    | ±10 kt   |

Gold is inspired by the instrument rating standards. It sounds strict. With a good scan and a trimmed airplane it is not hard, because you catch every deviation when it is still small.

:::callout{type="real-world"}
In a real airplane these maneuvers are flown under a view-limiting device with an instrument instructor, or with a safety pilot who holds at least a private certificate and is current in the airplane. The instructor also puts the airplane into the attitude you did not expect; in the sim you will do that to yourself in [[l17-3-unusual-attitude-recovery]].
:::

## Level flight

Straight and level on instruments is three jobs at once: hold the pitch that gives your altitude, hold the wings level for your heading, and hold the power that gives your airspeed.

Set the cruise picture from the table in [[l17-1-the-instrument-scan]]: about +1° to +2° pitch, 2,300 RPM. Then scan. The altimeter tells you if the pitch is right; the VSI warns you before the altimeter moves; the heading tells you if the wings are really level. A heading that creeps right means a sliver of right bank you cannot see on the attitude indicator, so roll a hair left.

Corrections are small and proportional:

| Deviation                    | Correction                                                |
| ---------------------------- | --------------------------------------------------------- |
| Altitude off by under 100 ft | Pitch only, about 1° toward the altitude, hold until back |
| Altitude off by over 100 ft  | Pitch plus a small power change (about 100 RPM)           |
| Heading off by under 10°     | Bank no more than the number of degrees off               |
| Heading off by more          | A standard-rate turn, rolling out on the heading          |
| Airspeed off                 | Power, then re-trim once it settles                       |

The rule for altitude is to climb or descend at about twice the deviation in feet per minute: 50 ft low means about 100 fpm up. A 500 fpm chase for a 50 ft error overshoots every time.

## Standard-rate turns and the rate-of-turn indicator

Instrument turns are flown at **standard rate**: 3° per second, a full circle in 2 minutes. Standard rate is gentle enough to keep your scan going and predictable enough to time.

The bank angle for standard rate depends on true airspeed. The rule of thumb from Course 1 is **bank ≈ TAS ÷ 10 + 7**:

| True airspeed | Bank for standard rate |
| ------------- | ---------------------- |
| 80 KTAS       | About 15°              |
| 90 KTAS       | About 16°              |
| 100 KTAS      | About 17°              |
| 110 KTAS      | About 18°              |
| 120 KTAS      | About 19°              |

On the G1000 PFD the **turn rate indicator** sits directly above the HSI compass card: a magenta trend bar grows from the lubber line toward tick marks that mean half-standard and standard rate. Roll in to about 17° on the attitude indicator, then check that the bar reaches the standard-rate mark and adjust the bank a degree or two; the rule of thumb rounds a little high, and the bar is the judge. In a turn your scan adds the heading more often, and the altimeter still gets every other look, because the nose wants to drop as you bank.

Roll out early. The lead is about half the bank angle: at 17° of bank, start rolling out about 8° before the heading.

::widget{name="turn-coordinator" mode="explore"}

:::callout{type="classic"}
The classic Skyhawk has a turn coordinator: a small airplane symbol that banks to the "L" and "R" marks at standard rate, with the slip ball below it. The G1000's turn rate indicator shows the same information as a bar above the HSI; the slip-skid indicator is the small bar under the bank pointer at the top of the attitude indicator.
:::

:::callout{type="verify"}
Sim check: screenshot "PFD in standard-rate turn (KLVK area)" and confirm the MSFS 2024 NXi draws both tick marks and the magenta trend vector as Garmin describes (desk-verified 2026-10-13 against the G1000 NXi Pilot's Guide: half-standard and standard-rate ticks either side of the lubber line, arrowhead above 4°/s). Record the bank that puts the bar on the standard-rate mark at the C17.1 cruise speed (the geometry gives about 15° at 100 KTAS; the lesson's rule says 17°) and adjust the table if the sim disagrees.
:::

:::quiz{id="l17-2-q1" type="numeric" answer="17" tolerance="2" unit="°"}
What bank angle gives a standard-rate turn at 100 KTAS?

---

Bank ≈ TAS ÷ 10 + 7 = 100 ÷ 10 + 7 = 17°.
:::

## Climbs and descents

There are two ways to climb or descend on instruments, and the difference is which instrument you pitch for.

| Maneuver                  | Pitch controls | Power controls | Typical use                        |
| ------------------------- | -------------- | -------------- | ---------------------------------- |
| Constant-airspeed climb   | Airspeed       | Fixed (full)   | Climbing to altitude after takeoff |
| Constant-rate climb       | Rate (VSI)     | Airspeed       | Reaching an altitude by a fix      |
| Constant-airspeed descent | Airspeed       | Fixed (set)    | Cruise descent                     |
| Constant-rate descent     | Rate (VSI)     | Airspeed       | Approaches: 500 fpm at 90 KIAS     |

For a **constant-airspeed climb**, add full power and raise the nose to about +6°, then adjust pitch until the airspeed reads 80 KIAS. Whatever rate you get is the rate you get. For a **constant-rate descent**, reduce power to about 1,700 RPM and pitch for 500 fpm down on the VSI; if the airspeed drifts from 90 KIAS, fix it with power, not pitch. Pitch owns the rate, power owns the speed.

**Level-off leads.** The airplane keeps climbing while you change the picture, so start the level-off early: lead by about **10% of the vertical speed**. At 500 fpm, begin the level-off 50 ft before the target altitude. Lower the nose to the level attitude, let the speed build, then set cruise power and trim. For a descent, add power to the cruise setting as you raise the nose; the airplane levels and accelerates to cruise together.

:::quiz{id="l17-2-q2" type="single"}
In a constant-rate descent at 500 fpm, the airspeed is 5 kt fast. What do you change?

- [ ] Raise the nose
- [x] Reduce power slightly
- [ ] Lower the nose
- [ ] Add flaps

---

In a constant-rate descent, pitch holds the rate and power holds the airspeed. Reducing power a little slows you down without disturbing the 500 fpm.
:::

:::quiz{id="l17-2-q3" type="numeric" answer="50" tolerance="10" unit="ft"}
You are climbing at 500 fpm to 5,000 ft. How many feet before 5,000 ft do you start the level-off?

---

Lead the level-off by about 10% of the vertical speed: 10% of 500 fpm is 50 ft, so start at 4,950 ft.
:::

## Timed turns

If you can hold standard rate, you can turn to any heading with nothing but a clock. At 3° per second, **every 45° takes 15 seconds**: divide the degrees of turn by 3 to get seconds.

| Turn | Time at standard rate |
| ---- | --------------------- |
| 30°  | 10 s                  |
| 45°  | 15 s                  |
| 90°  | 30 s                  |
| 180° | 60 s                  |
| 360° | 2 min                 |

Start the timer as you begin the roll-in and begin the roll-out when the time is up; the roll-in and roll-out take about the same time and cancel each other. Hold the bank from the table above and resist the urge to peek at the heading until you are wings level and the compass has settled. Timed turns are the backbone of partial-panel flying in [[l17-4-partial-panel-and-the-magnetic-compass]], where the heading indicator is gone.

:::quiz{id="l17-2-q4" type="numeric" answer="30" tolerance="0" unit="s"}
How many seconds does a standard-rate turn through 90° take?

---

90° ÷ 3° per second = 30 seconds, or 15 seconds for each 45°.
:::

## Pattern A

Instrument training patterns string the maneuvers together with a stopwatch, so you practice the transitions as well as the steady state. Learn-To-Fly teaches this version of Pattern A, starting at 4,000 ft MSL, heading 090, 100 KIAS:

| Leg | Action                                                         | Time |
| --- | -------------------------------------------------------------- | ---- |
| 1   | Straight and level, 100 KIAS, heading 090                      | 2:00 |
| 2   | Standard-rate left turn to heading 270                         | 1:00 |
| 3   | Straight and level; slow to 90 KIAS                            | 1:00 |
| 4   | Standard-rate right turn to heading 360                        | 0:30 |
| 5   | Constant-rate climb, 500 fpm at 80 KIAS, to 4,500 ft           | 1:00 |
| 6   | Standard-rate right turn to heading 180, level at 4,500 ft     | 1:00 |
| 7   | Constant-rate descent, 500 fpm at 90 KIAS, to 4,000 ft         | 1:00 |
| 8   | Standard-rate left turn to heading 090; accelerate to 100 KIAS | 0:30 |

Start the stopwatch at the beginning of each leg and let it run; the turns are timed turns, so the clock and the heading should agree when you roll out. The pattern ends where it started, which is the test: if you finish on 090 at 4,000 ft and 100 KIAS, every leg was flown right. Pattern B (Challenge C17.5, a P1 extra) adds a simulated approach and a missed-approach segment to the same idea.

:::callout{type="verify"}
Author decision: keep this original leg table or adopt an IFH pattern. Desk-verified 2026-10-13: the current IFH (FAA-H-8083-15B, Chapter 7) has no "Pattern A"; its basic instrument flight patterns are the racetrack, procedure-turn, 80/260, teardrop and circling patterns, all clock-plus-maneuver exercises, so the name is ours. The legs above are internally consistent (every turn and altitude change matches its time). The C17.2 challenge file and the Fly tab stopwatch must use these legs; a plan-view diagram (original drawing) is on the shot list.
:::

:::callout{type="tip"}
Say each leg aloud before you fly it: "Leg 5, climb 500 fpm, 80 knots, to 4,500." Announcing the target makes omission errors rare, and it is exactly what single-pilot IFR pilots do with real clearances.
:::

## Practice and next steps

Three things to carry forward:

1. Bank for standard rate ≈ TAS ÷ 10 + 7; lead the rollout by half the bank.
2. Degrees ÷ 3 = seconds; lead a level-off by 10% of the vertical speed.
3. Constant airspeed: pitch for speed. Constant rate: pitch for rate, power for speed.

**Practice.** This lesson feeds the `limits-and-speeds` flashcard deck: the standard-rate bank table, the timed-turn table and the level-off lead.

**Fly it.** Challenge C17.1 "Basic instrument maneuvers" covers every maneuver here; Challenge C17.2 "Pattern A" strings them together against the stopwatch. Then move on to [[l17-3-unusual-attitude-recovery]], where you learn what to do when the picture is suddenly wrong.
