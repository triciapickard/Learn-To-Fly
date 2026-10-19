---
slug: l14-1-electrical-failures
code: L14.1
module: m14-failures-emergencies
order: 1
priority: P0
title: Electrical failures
summary: Recognize an alternator failure from the EIS, shed load to stretch the battery, and land before the screens go dark.
estimatedMinutes: 20
prerequisites: [l1-3-engine-fuel-and-electrical-systems]
objectives:
  - Recognize an alternator failure from the EIS ammeter, bus voltage and the LOW VOLTS annunciation.
  - Fly the alternator-failure flow in order and shed non-essential electrical load.
  - Decide where to land before the battery runs out, using a battery-time estimate.
challenges: []
resources: [phak-ch7, afh-ch18, msfs-checklist]
published: false
lastVerifiedAt: null
simVersion: null
---

<!-- ltf:unverified-warning:start (managed by `npm run content:warnings`, do not edit) -->

> [!CAUTION]
> **UNVERIFIED CONTENT: NOT FOR LEARNING USE**
>
> This lesson is an unverified draft. It has not been checked in Microsoft Flight
> Simulator 2024 or against official sources, so its numbers, procedures and steps may be
> wrong. Do not use it to learn to fly, in the sim or in a real aircraft. Only verified
> content is published on the Learn to Fly site.

<!-- ltf:unverified-warning:end -->

## How an alternator failure starts

You are 20 minutes out of Livermore, heading south toward Salinas, with the engine running normally at 2,300 RPM. The only sign that anything has changed is a small red LOW VOLTS message in the PFD's alerts window, with a tone, which you may not notice for a minute or two.

That is an alternator failure. The engine keeps running, because its magnetos make their own spark ([[l1-3-engine-fuel-and-electrical-systems]]). Everything else that runs on electricity, including both G1000 displays, the radios, the transponder, the flaps and the lights, now runs off a battery that is slowly draining.

This emergency gives you time to think, plan and fly to an airport. This lesson teaches you to notice it early, stretch the battery and land while the panel still works.

:::callout{type="safety"}
The danger comes around the thirtieth minute, on a long final at an unfamiliar airport, when the flaps stop moving and the PFD goes black. This lesson is about using the early minutes well.
:::

## The 172S electrical system

The Skyhawk you fly has a 28 V electrical system. These are its main parts:

| Part                    | What it does                                                                                                                      |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Alternator** (60 A)   | Driven by the engine. Makes the electricity in normal flight and keeps the battery charged.                                       |
| **Main battery** (24 V) | Starts the engine. In flight it is a reserve that carries the load if the alternator stops.                                       |
| **Standby battery**     | A small, separate battery that feeds the essential bus so the PFD and standby instruments keep working if the main battery fails. |

Power flows along **buses**, which are shared wiring. The main bus feeds most equipment, the **avionics buses** feed the G1000 and radios through the avionics master, and the **essential bus** carries the few things you cannot fly without.

The master switch is split, as you learned in Course 1. BAT connects the battery and ALT connects the alternator. Turning ALT off alone is the instructor's trick for simulating this failure, and it is also part of the real checklist.

On the MFD, the EIS shows bus volts (M for the main bus, E for the essential bus) and battery amps (M for the main battery, S for the standby). In normal flight you see about 28 V and a small positive (charging) current. Memorize that picture, because the failure is a change from it.

:::callout{type="verify"}
Widget pending: W30 (Electrical System Schematic) is embedded here once Phase 20 ships it: `::widget{name="electrical-system" mode="explore"}`. Until then the table above is the walkthrough. Desk-verified 2026-10-13: 28 V / 24 V / 60 A, the STBY BATT switch positions ARM/OFF/TEST and the EIS VOLTS M/E and BATT M/S fields confirmed (Garmin G1000 NXi CRG for the Cessna NAV III; UND and CAP 172S systems guides). Sim check: the EIS field labels on the sim's Skyhawk. POH check: Section 7, which units sit on AVN BUS 1 vs BUS 2. Screenshot for the shot list: "EIS electrical page, normal cruise".
:::

## What alternator failure looks like

When the alternator stops, the panel changes in this order:

1. **The ammeter goes negative.** The battery is now supplying current instead of receiving it. On the EIS the battery amps show a discharge.
2. **Bus voltage falls.** From about 28 V toward 24 V (the battery's own voltage) and then lower as it drains.
3. **LOW VOLTS** appears in red in the PFD's alerts window, with a repeating tone, once the bus voltage drops below the alert threshold (about 24.5 V).

| Reading      | Normal cruise      | After alternator failure        |
| ------------ | ------------------ | ------------------------------- |
| Bus volts    | About 28 V         | About 24 V and falling          |
| Battery amps | Small positive (+) | Negative (−), a discharge       |
| Annunciation | None               | LOW VOLTS (red, with a tone)    |
| Engine       | Normal             | Normal (magnetos need no power) |

The first two signs are silent, so glance at the EIS volts and amps on every cruise check. Challenge C14.1 "Alternator failure" scores how fast you notice, and you notice fast only if you are already looking.

:::callout{type="verify"}
Desk-verified 2026-10-13: LOW VOLTS is a red warning with a repeating tone, inhibited on the ground (Garmin G1000 NXi CRG for the Cessna NAV III, Annunciations). Sim check: what the sim's EIS shows within 30 seconds of ALT off, and whether the sim draws LOW VOLTS in red and plays the tone; note the sim version. POH check: Section 7, the 24.5 V threshold.
:::

:::quiz{id="l14-1-q1" type="single"}
Thirty seconds after an alternator failure, what does the EIS battery ammeter show?

- [ ] A large positive current, because the battery is charging hard
- [x] A negative current: the battery is discharging to carry the load
- [ ] Zero, because nothing is connected to the battery any more
- [ ] It flickers between positive and negative

---

With no alternator the battery is the only source of power, so current flows out of it. That is a discharge, shown as negative amps, with volts drifting down from about 28 V.
:::

## The checklist flow

Here is the flow in our own words. The exact switch names come from the in-sim checklist.

:::callout{type="memory"}
**Alternator failure flow (simplified for the sim)**

1. **Recognize.** Discharge on the ammeter, LOW VOLTS, voltage falling. Say it aloud: "Alternator failure."
2. **Check and reset once.** ALT circuit breaker in; master ALT switch OFF, then ON. If the alternator comes back, watch it; if it fails again, do not keep cycling it.
3. **If not restored: ALT OFF.** Confirm the standby battery is armed. Shed load: turn off every non-essential electrical item.
4. **Tell ATC and land as soon as practical.** Note the time and the voltage. Plan to be on the ground before the battery runs out.

:::

Step 2 exists because some "failures" are a tripped breaker or an alternator that dropped offline. One reset is reasonable. Repeated resets of a failed alternator can do harm, so after one try you commit to step 3.

:::callout{type="verify"}
Desk-verified 2026-10-13: shed load, tell ATC, land at the nearest suitable airport and expect a no-flap landing confirmed (AFH Ch 18, Electrical System); one reset of the ALT FIELD breaker and the ALT switch, no repeats, confirmed against the UND 172S systems guide. POH check: Section 3 "LOW VOLTS annunciation" item order and wording (breaker name, AVIONICS BUS 1/2 off before the reset, STBY BATT ARM), and the sim's checklist wording, so steps 2 and 3 match what the learner sees.
:::

:::quiz{id="l14-1-q2" type="order"}
Put the alternator-failure flow in order.

1. Recognize: discharge, LOW VOLTS, falling voltage
2. Check the ALT breaker and reset the ALT switch once
3. ALT OFF and shed non-essential load
4. Tell ATC and land as soon as practical

---

Recognize, one reset, then commit: alternator off, load shed, and a plan to be on the ground before the battery is empty.
:::

## Load shedding

Halve the load and you roughly double the battery's time. **Load shedding** means turning off everything that is not keeping you safe right now.

| Keep on                                        | Turn off                                        |
| ---------------------------------------------- | ----------------------------------------------- |
| One COM radio and the transponder              | The second COM and NAV radios, if separate      |
| The PFD (and the MFD if it draws little extra) | Landing and taxi lights (until final)           |
| Pitot heat only if you need it                 | Strobes and other exterior lights in daytime    |
| Autopilot off: you fly                         | Cabin fans, seat and panel lights, USB charging |

Which items are essential depends on the flight. At night you keep the position lights, and in cloud you keep pitot heat.

:::callout{type="tip"}
Shed load before you call ATC. The call takes 30 seconds, while the shed takes 10 and buys minutes.
:::

## Battery time and the standby battery

Battery time depends on its charge, how much you shed and how cold it is. A healthy battery with the load trimmed hard might carry the panel for something like 30 minutes. Treat any number as a planning figure only.

When the main battery can no longer hold the voltage, the standby battery takes over the essential bus, keeping the PFD running for about 30 minutes so you can keep flying attitude and find the airport. It will not run the flaps, the transponder or the landing light.

| Stage                     | What still works                               | Your job                           |
| ------------------------- | ---------------------------------------------- | ---------------------------------- |
| Alternator fails          | Everything, on the main battery                | Shed load, pick an airport         |
| Main battery low          | Essential bus on the standby battery           | Be on final, flaps already decided |
| Standby battery exhausted | Magnetic compass, engine, flight controls, you | Land. The airplane still flies     |

:::callout{type="sim"}
The sim's battery may drain far slower or faster than a real one, and the standby battery may not be modeled. Our challenges score the flow and the decision, not how long the screens stay lit. Fly as if you have 30 minutes.
:::

:::callout{type="verify"}
Desk-verified 2026-10-13: standby battery runs the essential bus for at least 30 minutes, essential bus has no flaps or transponder (CAP TXWG 172S Introduction; UND 172S systems guide; both paraphrase POH Section 7). POH check: exact Section 7 wording for the 30-minute figure. Sim check: time the sim's battery from ALT off to PFD blackout with and without load shed, whether STBY BATT is modeled, and what it powers.
:::

## Land as soon as practical

"As soon as practical" is not "as soon as possible." It means the nearest airport where you can land safely, which is usually not a field. With a working engine you have options. A towered airport with a long runway can beat a short strip closer by.

:::callout{type="decision"}
South of Livermore, LOW VOLTS 5 minutes ago, load shed, 23.5 V. Tracy is 10 minutes away, non-towered. Livermore is 15 minutes back, towered, longer runways, and you know it. Either is defensible. What matters is that you decide now, while the radios work, and tell someone. Set the flaps you want on downwind, because they are electric and may not move later.
:::

Tell ATC early: "Skyhawk 123, electrical failure, battery power only, request straight-in Runway 25 Right." If the radio dies afterward, they already know, and you fly the light gun signals from Module 15.

:::quiz{id="l14-1-q3" type="single"}
After an alternator failure the flaps are electric and the battery is low. When should you set the flaps for landing?

- [x] Early, on downwind, while you still have power
- [ ] On short final, as normal, to save battery
- [ ] Never; land with flaps up to be safe
- [ ] Only once the standby battery takes over

---

Electric flaps need the main bus, so set them while the battery can still move them. A no-flap landing at {{vspeed.approachFlapsUp}} is fine too. Plan for a longer roll.
:::

## Practice and next steps

To carry forward:

1. An alternator failure is silent: a discharge on the ammeter, falling volts, then LOW VOLTS.
2. One reset, then ALT off, shed load, tell ATC, land as soon as practical.
3. Decide early and set the flaps while you still can.

**Practice.** This lesson feeds the `memory-items` deck: the alternator flow and the three signs of failure.

**Fly it.** Challenge C14.1 "Alternator failure" puts the failure at a random point on a Livermore to Salinas cross-country. The event card tells you to switch ALT off. The rest is up to you.

**Next.** [[l14-2-instrument-and-avionics-failures]] covers instrument failures that give wrong readings while the screens stay on.
