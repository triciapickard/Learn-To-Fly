---
slug: l17-4-partial-panel-and-the-magnetic-compass
code: L17.4
module: m17-attitude-instrument-flying
order: 4
priority: P0
title: Partial panel and the magnetic compass
summary: Keep flying when the PFD's attitude and heading go away, using the standby instruments, timed turns and a compass that lies in predictable ways.
estimatedMinutes: 25
prerequisites: [l17-2-basic-instrument-maneuvers-and-patterns]
objectives:
  - Fly straight and level and make timed turns on the standby instruments after an AHRS or PFD failure.
  - Turn to north and to south by compass, applying the correct lead or lag.
  - Describe the compass acceleration (ANDS) and turning (UNOS) errors.
challenges: []
resources: [ifh-attitude-flying, ifh-instruments, phak-ch8]
published: false
lastVerifiedAt: null
simVersion: null
---

## The red X

Two minutes into a climb through cloud, a red X appears across the attitude display and another across the heading. The airspeed and altimeter tapes are still there. The autopilot has dropped off. The airplane is flying exactly as it was a second ago; the question is whether you can keep it that way with what you have left.

This is **partial panel**: flying by instruments with some of them gone. In a steam-gauge airplane it meant a failed vacuum pump taking the attitude and heading indicators with it. In the G1000 Skyhawk it means an AHRS failure, an ADC failure or a dead display, and the answer is the row of small standby instruments and the magnetic compass.

:::callout{type="real-world"}
In a real airplane, partial-panel work is practiced under a view-limiting device with an instrument instructor who covers instruments with suction cups or sticky notes, never by actually failing the systems. A real AHRS failure in cloud is an emergency: you tell ATC, you ask for help, and you get to visual conditions or an airport with the simplest approach available. The sim lets you practice the flying part as often as you like.
:::

## What partial panel means in a G1000 airplane

The G1000 is built from separate boxes, and each one failing takes a different set of instruments with it.

| Failure        | What you lose on the PFD                     | What you fly with                                                        |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------------ |
| AHRS           | Attitude, heading (HSI), turn rate indicator | Standby attitude indicator, magnetic compass, PFD airspeed and altimeter |
| ADC (air data) | Airspeed, altimeter, VSI, true airspeed, OAT | Standby airspeed, standby altimeter, PFD attitude and heading            |
| PFD display    | Everything on that screen                    | Reversionary mode on the MFD (press DISPLAY BACKUP), standby instruments |
| Both displays  | Everything                                   | Standby attitude, standby airspeed, standby altimeter, magnetic compass  |

The standby instruments sit in a row below or beside the displays: a small attitude indicator, airspeed indicator and altimeter, with the magnetic compass above the glare shield. They are small and not where your eyes are used to looking. The failures themselves and the DISPLAY BACKUP flow are covered in [[l14-2-instrument-and-avionics-failures]].

:::callout{type="verify"}
Confirm against the Garmin G1000 NXi Pilot's Guide and the sim: which PFD fields show a red X for an AHRS failure versus an ADC failure, whether the turn rate indicator is lost with the AHRS, and what powers the standby attitude indicator in the MSFS 2024 Skyhawk (electric, vacuum or a self-contained unit) and whether it has its own battery. Screenshot: "standby instruments close-up".
:::

:::quiz{id="l17-4-q1" type="single"}
The AHRS fails. Which of these can you still use for bank?

- [ ] The PFD turn rate indicator
- [ ] The HSI
- [x] The standby attitude indicator
- [ ] The PFD attitude indicator

---

The AHRS feeds the PFD attitude, heading and turn rate. The standby attitude indicator is a separate unit and keeps working, so it becomes your control instrument for pitch and bank.
:::

## Flying on the standby instruments

Move your scan hub. The standby attitude indicator is now the control instrument; the airspeed and altimeter are the performance instruments; the magnetic compass is your heading, with the limits described below. The attitude-and-power table from [[l17-1-the-instrument-scan]] matters more than ever, because the small attitude indicator shows a one-degree change poorly. Set the pitch and power you know, then let the altimeter and airspeed tell you whether it is right.

If the attitude indicator is gone as well, pitch comes from the **airspeed trend and the altimeter**, and bank from the compass and the turn rate indicator if it survived. Airspeed increasing and altitude decreasing means nose low, so ease the nose up; a heading that keeps changing means you are banked, so apply a little opposite aileron and wait. Use half-size inputs, because you cannot see the attitude you are setting.

:::callout{type="tip"}
Say what you have left aloud: "Standby attitude, standby airspeed, standby altimeter, compass." Naming the working instruments stops your eyes drifting back to the red X out of habit, which is the most common partial-panel error.
:::

## Timed turns without a heading indicator

The magnetic compass is useless while turning (the next sections explain why), so partial-panel turns are **timed turns** from [[l17-2-basic-instrument-maneuvers-and-patterns]]. Set the standard-rate bank on the standby attitude indicator (about 17° at 100 KTAS), run the clock for degrees ÷ 3 seconds, roll level and wait for the compass to settle before you read it.

| Turn | Time at standard rate | Example            |
| ---- | --------------------- | ------------------ |
| 30°  | 10 s                  | Heading 090 to 120 |
| 60°  | 20 s                  | Heading 090 to 150 |
| 90°  | 30 s                  | Heading 090 to 180 |
| 120° | 40 s                  | Heading 090 to 210 |
| 180° | 60 s                  | Heading 090 to 270 |

Choose the shorter way around for any turn over 180°. Without the turn rate indicator you cannot confirm standard rate, so hold the bank from the table precisely and accept a small error; after the compass settles, make a second, shorter timed turn to fix what is left.

:::quiz{id="l17-4-q2" type="numeric" answer="40" tolerance="0" unit="s"}
Standard-rate timed turn from heading 030 to heading 150. How many seconds?

---

150 − 030 = 120° of turn. 120 ÷ 3 = 40 seconds.
:::

## Compass acceleration errors: ANDS

The magnetic compass is a magnet floating in fluid, and in the northern hemisphere the earth's field pulls its north end downward. That downward pull is what causes the errors.

On **east or west headings**, speeding up or slowing down tilts the card, and it swings as if you had turned:

| You do         | The compass shows       |
| -------------- | ----------------------- |
| **A**ccelerate | A turn toward **N**orth |
| **D**ecelerate | A turn toward **S**outh |

**ANDS**: Accelerate North, Decelerate South. The error is largest on east and west, zero on north and south, and it disappears as soon as the speed is steady. So when you add power to climb on a westerly heading and the compass swings toward north, you have not turned. Hold the wings level and wait.

:::quiz{id="l17-4-q3" type="single"}
Heading 270, you reduce power to start a descent and the compass swings toward 240. What happened?

- [ ] You turned left; roll right to correct
- [x] Nothing; deceleration on a westerly heading shows a false turn toward south
- [ ] The compass has failed
- [ ] You are in a nose-high attitude

---

ANDS: decelerating on an east or west heading makes the compass show a turn toward south. Hold the wings level and the card comes back as the speed settles.
:::

## Compass turning errors: UNOS and the latitude rule

In a banked turn the same downward pull makes the card **lag** when you turn through north and **lead** when you turn through south. Through east and west it reads about right.

| Turning to | The compass   | So you roll out               |
| ---------- | ------------- | ----------------------------- |
| **N**orth  | Lags behind   | **U**nder: before the heading |
| **S**outh  | Runs ahead    | **O**ver: past the heading    |
| East/West  | About correct | On the heading                |

**UNOS**: Undershoot North, Overshoot South. How much? Learn-To-Fly teaches the Instrument Flying Handbook rule: **lead or lag ≈ your latitude plus half the bank angle**. The Bay Area sits at about 38° N, so with a 15° bank the number is about 38 + 7 ≈ 45°. Turning right from east to north, roll out when the compass reads about 315; turning left from east to south, roll out when it reads about 225. Past the roll-out, wings level, wait a few seconds, and the compass will swing onto the heading you wanted.

:::callout{type="verify"}
Two versions of the rule are taught: lead equals latitude, or latitude plus half the bank angle. This lesson and quiz q4 use the latitude-plus-half-bank version; confirm it against the current Instrument Flying Handbook compass section, and update the quiz answer (38 instead of 45) if the lesson switches to the latitude-only version. Widget W35 (Magnetic Compass Errors, P1) is embedded here once Phase 21 ships it: `::widget{name="magnetic-compass" mode="explore"}`, with heading, bank and latitude sliders and the "roll out on north" quiz. Until then the two tables carry the content.
:::

:::quiz{id="l17-4-q4" type="numeric" answer="45" tolerance="5" unit="°"}
At 38° N with 15° of bank, how many degrees before north do you roll out of a turn to north?

---

Lead ≈ latitude + half the bank = 38 + 7.5 ≈ 45°. Turning right to north, that means rolling out as the compass passes about 315.
:::

## Getting help from ATC: no-gyro vectors

You do not have to do this alone. Tell ATC you have lost your heading indicator and ask for **no-gyro vectors**. Instead of headings, the controller says "turn left" and "stop turn" while watching your target on radar. Make every turn at standard rate; on the final approach course the controller will ask for half standard rate.

| Controller says                     | You do                                                       |
| ----------------------------------- | ------------------------------------------------------------ |
| "This will be a no-gyro vector"     | Acknowledge; be ready for turn and stop-turn calls           |
| "Turn left"                         | Roll into a standard-rate left turn now                      |
| "Stop turn"                         | Roll wings level now                                         |
| "Make all turns half standard rate" | Use half the standard-rate bank for the rest of the approach |

:::callout{type="verify"}
Confirm the no-gyro phraseology against AIM 5-4-11 (radar approaches) and the Pilot/Controller Glossary entries for "no-gyro approach" and "no-gyro vector", and check whether the sim's built-in ATC offers it (likely not) and whether VATSIM controllers routinely do. Record the AIM edition checked.
:::

:::callout{type="sim"}
MSFS 2024's built-in ATC does not provide no-gyro vectors, so Challenge C17.4 scores the timed and compass turns themselves. On VATSIM ([[l15-5-flying-on-vatsim]]) a controller with time will give you a no-gyro vector if you ask; it is a satisfying thing to fly.
:::

## Setting it up in the sim

Challenge C17.4 "Partial panel" starts you in the overcast and, a few minutes in, cues an AHRS failure: cover the PFD attitude and heading with a sticky note on the monitor, or use the sim's failure menu if it offers one. Then fly straight and level, a timed turn to a heading, compass turns to north and to south, and a 500 ft constant-rate descent.

:::callout{type="decision"}
A real AHRS failure in cloud is not a maneuver to finish; it is a reason to land. The decision is made in the first minute: tell ATC, ask for the nearest VMC or the simplest approach, and fly the airplane with the small instruments. Learn-To-Fly counts that call as the correct answer whenever a challenge offers it.
:::

:::callout{type="verify"}
Confirm the MSFS 2024 failure menu path for an AHRS or attitude failure (v2 Section 9.1 table: "Instruments → AHRS/attitude") and whether it produces the red X on the NXi. The sticky-note method is the default per D2-09.
:::

## Practice and next steps

Three things to carry forward:

1. AHRS failure: fly the standby attitude indicator and the compass; ADC failure: fly the standby airspeed and altimeter.
2. Turn by the clock: degrees ÷ 3 seconds at standard rate, then let the compass settle.
3. ANDS on east and west; UNOS through north and south, by about latitude plus half the bank.

**Practice.** This lesson feeds the `memory-items` flashcard deck: ANDS, UNOS and the roll-out lead at 38° N.

**Fly it.** Challenge C17.4 "Partial panel" covers everything here. Then finish the module with [[l17-5-spatial-disorientation]], which explains why your body will fight every lesson in it.
