---
slug: l17-1-the-instrument-scan
code: L17.1
module: m17-attitude-instrument-flying
order: 1
priority: P0
title: The instrument scan
summary: Fly the Skyhawk with no horizon at all, by setting a known attitude and power on the PFD and checking the result with a disciplined scan.
estimatedMinutes: 20
prerequisites: [l8-2-preparing-for-your-checkride]
objectives:
  - Name the control and performance instruments on the G1000 PFD.
  - Describe a radial scan and recognize fixation, omission and emphasis errors.
  - Set a known attitude and power for each phase of flight in IMC.
challenges: []
resources: [ifh-attitude-flying, ifh-glass]
published: false
lastVerifiedAt: null
simVersion: null
---

## Flying in cloud

You lift off from Livermore on a gray morning and climb into the overcast at 1,200 ft. The windshield turns white. You see no horizon, no ground and no sky, only the panel in front of you.

Everything from Course 1 still works. The airplane flies the same way in cloud. What changes is where your picture of the airplane's attitude comes from. In cloud it comes from the attitude indicator instead of the windshield. Course 3, Learn to Fly's instrument course, starts here.

:::callout{type="real-world"}
In a real airplane, instrument training happens with an instrument instructor in the right seat. You wear a **view-limiting device** (a hood or "foggles") that hides the windshield. When you practice with a fellow pilot instead, that pilot is your **safety pilot** and watches for traffic. Nobody flies into real cloud without an instrument rating and an airplane equipped and current for IFR. In the sim, the cloud is the hood, and nothing is at risk.
:::

## Why your inner ear misleads you

In cloud, your body cannot tell which way is up. The balance organs in your inner ear sense acceleration, not attitude. A gentle, steady bank feels like level flight after a few seconds. A smooth pull feels like a climb, even in a dive. Untrained pilots who fly into cloud typically lose control within minutes. The cause is not panic. Their body gives them a convincing but wrong sense of which way is up.

[[l17-5-spatial-disorientation]] goes through the illusions one by one. For now, remember that **when your body and the instruments disagree, the instruments are right.**

## Control and performance

In [[l2-2-attitude-flying-and-trim]] you learned the most useful sentence in flying: **attitude + power = performance**. Instrument flying is that sentence, applied with discipline.

The **control instruments** show what you are putting in: the attitude indicator (pitch and bank) and the tachometer (power, on the engine strip at the left edge of the MFD, right beside the PFD). The **performance instruments** show what you are getting out: altimeter, airspeed, vertical speed, heading and turn rate. Set the control instruments, let the airplane settle, read the performance instruments, adjust. Never work the other way around. Students who chase the altimeter with the yoke end up 300 ft off and climbing.

| Instrument on the G1000     | Kind        | Tells you                             |
| --------------------------- | ----------- | ------------------------------------- |
| Attitude indicator          | Control     | Pitch and bank you have set           |
| Tachometer (EIS strip, MFD) | Control     | Power you have set                    |
| Airspeed tape               | Performance | Whether the pitch and power are right |
| Altimeter tape              | Performance | Whether you are holding altitude      |
| Vertical speed indicator    | Performance | The trend, before the altimeter moves |
| HSI heading                 | Performance | Whether the wings are really level    |
| Turn rate indicator         | Performance | Rate of turn (standard rate = 3°/s)   |

Find each one on the PFD explorer. The G1000's attitude indicator fills the whole screen, so a one-degree pitch change is easy to see. The turn rate indicator sits directly above the HSI compass card.

::widget{name="g1000-pfd" mode="explore"}

:::callout{type="tip"}
"Attitude + power = performance" works in IMC the same way as in VMC. Know the attitude and power for level cruise and you can fly level cruise with the windshield painted over. Learn the numbers, then set them and trust them.
:::

:::callout{type="verify"}
Widget pending: W33 (Instrument Scan Trainer) is embedded here once Phase 21 ships it: `::widget{name="instrument-scan" mode="explore"}`, a simplified PFD with the moving "eye" of a radial scan and the "What's wrong?" quiz. Until then the table and the knowledge check carry the content. Sim check: screenshot "PFD in IMC, level cruise (KLVK area)" and confirm the MSFS 2024 NXi matches the Garmin layout (desk-verified 2026-10-13 against the G1000 NXi Pilot's Guide for the Cessna Nav III: turn rate indicator directly above the HSI compass card, EIS on the MFD).
:::

:::quiz{id="l17-1-q1" type="multi"}
Which of these are control instruments?

- [x] Attitude indicator
- [x] Tachometer
- [ ] Altimeter
- [ ] Vertical speed indicator

---

The attitude indicator and the tachometer show what you have set. The altimeter and VSI show the result, so they are performance instruments.
:::

## The radial scan

Your eyes cannot watch seven instruments at once, so you move them in a pattern. The **radial scan** starts at the attitude indicator, glances out to one performance instrument, comes back, glances out to the next, comes back. Like the spokes of a wheel, every spoke returns to the hub.

The hub gets most of your attention because it is the only instrument you fly with. The spokes confirm the result. In level cruise a typical loop is attitude, altimeter, attitude, heading, attitude, airspeed, attitude, VSI, with the tachometer every few loops. Change the loop to suit the maneuver. In a climb the airspeed gets more visits, and in a turn the heading does.

These errors catch almost everyone at first:

| Error        | What it looks like                                                                  | The fix                                                       |
| ------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Fixation** | Staring at one instrument (usually the altimeter) while the heading wanders off     | Count: no instrument gets more than a one-second look         |
| **Omission** | Leaving an instrument out of the loop, often the VSI or the tachometer              | Say the loop aloud until it is a habit                        |
| **Emphasis** | Giving one instrument too much weight, such as chasing the VSI needle with the yoke | Remember which instrument is control and which is performance |

:::quiz{id="l17-1-q2" type="single"}
Cruise at 2,300 RPM, wings level. The VSI shows 200 fpm down and the altimeter is just starting to move. Which instrument showed the problem first, and what fixes it?

- [x] The VSI; raise the nose about a degree on the attitude indicator
- [ ] The altimeter; add power
- [ ] The airspeed tape; reduce power
- [ ] The heading; roll the wings level

---

The VSI shows a trend before the altimeter has lost much height. The correction is a small pitch change on the attitude indicator, the control instrument. Power stays where it is for a deviation this small.
:::

:::quiz{id="l17-1-q3" type="single"}
You hold altitude perfectly for a minute and then notice the heading has drifted 20° right. Which scan error is this?

- [ ] Omission
- [x] Fixation
- [ ] Emphasis
- [ ] Reverse sensing

---

Staring at the altimeter while the heading wanders is fixation. Omission would be never looking at the heading at all. Emphasis is over-weighting one instrument's information when you do look at it.
:::

## The Skyhawk's attitude-and-power table for IMC

This table turns that sentence into numbers. It lists the attitudes and power settings Learn to Fly teaches for instrument work in the sim's Skyhawk, flaps up.

| Phase                     | Pitch (attitude indicator) | Power         | Expect                       |
| ------------------------- | -------------------------- | ------------- | ---------------------------- |
| Cruise, level             | About +1° to +2°           | 2,300 RPM     | About 100–105 KIAS           |
| Cruise descent            | About −3°                  | 2,100 RPM     | 100 KIAS, about 500 fpm down |
| Approach, level           | About +3°                  | 2,000 RPM     | 90 KIAS                      |
| Approach descent          | About 0°                   | 1,700 RPM     | 90 KIAS, about 500 fpm down  |
| Climb (constant airspeed) | About +6°                  | Full throttle | 80 KIAS, about 500 fpm up    |

Every value is provisional, so check it in the sim before you rely on it. The habit matters more than the digits. Set the pitch, set the power, count to five, then read the performance instruments and nudge.

:::callout{type="verify"}
Sim check: the table comes from the unverified `powerSettings` and `performanceModel` in `content/aircraft.yaml`, not from the sim. Fly each row in MSFS 2024 at the C17.1 weight and 4,000 ft, record pitch, RPM, airspeed and vertical speed, then update this table and `aircraft.yaml` together (the `limits-and-speeds` flashcards follow). The climb row uses 80 KIAS (the C17.1 climb speed), not {{vspeed.vy}}.
:::

## Trim after every change

A trimmed airplane holds its attitude while you look away from the attitude indicator. An untrimmed one wanders the moment your eyes move, and every spoke of your scan becomes a correction. Instrument flying with bad trim is exhausting, and a tired pilot makes scan errors.

Trim after every change of attitude or power: set the attitude, hold it, let the speed settle, then trim off the pressure until the yoke is light in your fingers. Hold the yoke with your fingertips. If you catch yourself gripping the yoke, re-trim.

:::callout{type="sim"}
With a desktop yoke or stick you cannot feel control pressure. Trim until releasing the control changes nothing on the attitude indicator for five seconds. That is "hands off" in the sim.
:::

## Setting up the sim for instrument practice

In the sim, the cloud is your view-limiting device. Learn to Fly's instrument challenges start you in the air inside a thick overcast (the `WX_IMC_HIGH` preset), above the base and below the tops, so there is nothing to see and nothing to hit. For your own practice, set up the same thing:

| Step | Setting                                                        | Why                                              |
| ---- | -------------------------------------------------------------- | ------------------------------------------------ |
| 1    | Custom weather: a solid overcast from 1,500 ft to 8,000 ft MSL | No horizon, no ground, no peeking                |
| 2    | Wind calm, no turbulence, for the first sessions               | Learn the scan before you add bumps              |
| 3    | Start in the air at 4,000 ft, or climb up from KLVK            | Get into the practice area, not the departure    |
| 4    | Assistance: approach guidance and autopilot help off           | Fly the instruments, not the sim's hints         |
| 5    | Autopilot off, flight director off                             | Hand-fly first; the autopilot comes in Module 18 |

To practice in clear weather, an instruments-only camera view that hides the windshield does the same job, as long as you do not look outside.

:::callout{type="verify"}
Sim check: in MSFS 2024, confirm the custom-weather cloud-layer controls (base, top, coverage) and the exact assistance setting names in the table (v2 Section 9.6), and whether an instruments-only cockpit camera exists; if not, delete the last sentence and teach the overcast layer only (v2 Section 9.5). Record the sim version.
:::

## Practice and next steps

To carry forward:

1. Set attitude and power on the control instruments, then read the result on the performance instruments.
2. Scan radially from the attitude indicator, and watch for fixation, omission and emphasis.
3. Trim after every change so the airplane holds the attitude while you scan.

**Practice.** This lesson feeds the `limits-and-speeds` flashcard deck: the IMC attitude-and-power table, one row per card.

**Fly it.** Challenge C17.1 "Basic instrument maneuvers" puts you in the overcast at 4,000 ft for straight and level, turns, climbs and descents. Read [[l17-2-basic-instrument-maneuvers-and-patterns]] first. It teaches each maneuver and the tolerances you are scored against.
