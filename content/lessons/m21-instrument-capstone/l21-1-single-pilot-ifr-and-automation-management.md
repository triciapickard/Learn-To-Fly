---
slug: l21-1-single-pilot-ifr-and-automation-management
code: L21.1
module: m21-instrument-capstone
order: 1
priority: P0
title: Single-pilot IFR and automation management
summary: 'How one pilot stays ahead of an IFR flight: where the workload peaks, briefing early, choosing a level of automation and setting personal minimums.'
estimatedMinutes: 20
prerequisites: [l20-5-missed-approaches]
objectives:
  - Plan the workload of an IFR flight by phase and move tasks out of the busy phases.
  - Choose a level of automation for each phase, and step down a level when the airplane surprises you.
  - Write a set of personal IFR minimums and apply them to a go/no-go decision.
challenges: []
resources: [faa-risk-management-handbook, ifh-ifr-flight]
published: false
lastVerifiedAt: null
simVersion: null
---

## One pilot, one airplane, a lot to do

You can now hold, fly an ILS, fly an RNAV (GPS) approach and go missed. This lesson is about doing all of them in one flight, in cloud, with nobody in the right seat to tune a radio or read a checklist.

Single-pilot IFR is hard because tasks pile up at the same moments. The airplane descends, ATC gives you a new frequency, the approach needs loading and the flaps need to come out, all in the same 2 minutes. Pilots who do this well are not faster. They move work into the quiet parts of the flight and let the automation carry what it can.

:::callout{type="real-world"}
In a real airplane, single-pilot IFR comes only after an instrument rating and many hours with an instructor before any solo flight in cloud. Real instrument pilots also keep currency with recent approaches and holds, and many add a "no single-pilot IFR at night in low weather" rule for their first years. This course teaches the thinking in the sim, where a mistake costs nothing. Nothing here replaces that training.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## Workload peaks

Workload is not spread evenly. Picture a graph of "how busy you are" against time: two big peaks, and nearly every single-pilot IFR mistake happens on one of them.

| Phase                  | Workload  | Why                                                                              | Move out of this phase                                         |
| ---------------------- | --------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Planning and clearance | Medium    | Weather, alternate, fuel, the CRAFT clearance                                    | Nothing; this is where the thinking happens                    |
| Taxi and departure     | High      | Run-up, departure procedure, climb, frequency changes, first turn                | Flight plan built, departure briefed, first frequency set      |
| Climb to cruise        | Medium    | Leveling off, altitude and heading changes, leaning                              | Nothing new; settle the airplane and trim                      |
| Cruise                 | Low       | Monitoring, position, fuel                                                       | The quiet time: get the weather and brief the approach         |
| Descent and approach   | Very high | Approach clearance, step-downs, configuration, CDI source, the land-or-miss call | Approach loaded and briefed, radios set, minimums written down |
| Missed approach        | Very high | Power, pitch, flaps, navigate, talk, all while climbing in cloud                 | Missed approach briefed; first heading and altitude known      |
| After landing          | Low       | Taxi, shutdown, log it                                                           | Nothing                                                        |

Everything in the right-hand column can be done in cruise or on the ground, so the peaks are smaller when they arrive. That is the whole trick. A good single pilot reaches the top of descent with the approach loaded, the frequencies in standby and the minimums on the kneeboard, and then has one job: fly.

:::quiz{id="l21-1-q1" type="single"}
Where do most single-pilot IFR workload problems appear?

- [ ] During the climb, because the airplane is slow
- [x] During the descent and approach, because many tasks arrive at the same time
- [ ] During cruise, because the pilot gets bored
- [ ] Before engine start, because of the paperwork

---

Descent and approach stack clearances, configuration, frequency changes and the minimums decision into a few minutes. Cruise is the quiet phase you use to prepare for it.
:::

## Briefing early

The approach briefing is the best tool for flattening the descent peak. You learned the fields in [[l20-1-anatomy-of-an-instrument-approach]]: procedure name and cycle, frequencies, final approach course, final approach fix and altitude, DA or MDA with the visibility, airport elevation, the missed approach and the notes. Read them out loud, in the same order every time, even when you are alone. Speaking catches the mistake your eyes skip over.

The rule of thumb: **brief 10–15 minutes before the top of descent**. Not when ATC says "expect the ILS"; by then you are already busy. If the approach might change, brief the most likely one and note the backup.

Brief the departure too. Before takeoff, say the first heading, altitude and frequency, and what you will do if the engine quits. A pilot who lifts off into cloud without knowing the first turn is already behind.

:::callout{type="tip"}
Write three numbers on your kneeboard before every approach: the DA or MDA, the missed approach altitude and the first missed approach heading. At 200 ft AGL in bumpy cloud you will not have time to find them on the plate.
:::

## Levels of automation

The G1000 NXi and GFC 700 give you a ladder of automation. Each rung takes work off you and adds a job: watching what the autopilot is doing. Choose the rung that fits the phase, and change rungs on purpose.

| Level                             | You                                            | The airplane                                  | Best for                                                                     |
| --------------------------------- | ---------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------- |
| 1. Hand-fly, raw data             | Attitude, power, trim, navigation, everything  | Nothing                                       | Takeoff, landing, the first 1,000 ft, and whenever the automation misbehaves |
| 2. Flight director                | Fly the command bars by hand                   | Computes the attitude for the selected modes  | Climb-out and hand-flown approaches; keeps you in the loop                   |
| 3. HDG and ALT                    | Set headings and altitudes as ATC gives them   | Holds the heading and altitude                | Vectors, level cruise, busy radio moments                                    |
| 4. NAV or APR with vertical modes | Monitor the mode annunciator and the CDI       | Tracks the course, climbs, descends, holds    | Enroute, holds, the intermediate segment                                     |
| 5. Coupled approach               | Monitor, configure, call the minimums decision | Flies the final approach course and glidepath | The second approach of the day, or any approach when you are tired           |

Two habits make this ladder safe. First, **say the mode out loud** when you change it, and check that the annunciator agrees: "NAV armed, ALT holding." Second, when you cannot explain what the airplane is doing, **step down a level**. HDG and ALT are always available and always simple. If even that is confusing, disconnect and hand-fly. Pilots have followed autopilots into trouble while trying to work out why they would not behave. Flying the airplane yourself is never wrong.

:::callout{type="verify"}
Confirm that the sim's 172S G1000 NXi offers a flight director without the autopilot engaged (the FD key), and record which autopilot modes the sim models (v2 Section 8.5). Adjust the ladder if the sim lacks a level. Screenshot for the shot list: "GFC 700 mode annunciator with NAV armed and ALT active".
:::

:::quiz{id="l21-1-q2" type="single"}
The autopilot starts a turn you did not expect while on vectors in cloud. What is the right first move?

- [ ] Wait and see where it goes; it probably knows something you do not
- [ ] Press mode keys until the annunciator looks right
- [x] Step down a level: select HDG and ALT, or disconnect and hand-fly, then work out what happened
- [ ] Ask ATC what the autopilot is doing

---

"What's it doing now?" is the signal to simplify. HDG and ALT are predictable, and hand-flying is always available. Find the cause once the airplane is doing what you told it.
:::

## Personal IFR minimums worksheet

Legal minimums are the floor the rules allow. Personal minimums are the floor **you** allow, written on a calm day so the decision is not made at 3 a.m. with passengers waiting. You wrote VFR minimums in [[l8-1-decision-making-and-personal-minimums]]; IFR adds a few lines.

| Item                                         | Starting point for a new instrument pilot | An experienced pilot might use | Yours |
| -------------------------------------------- | ----------------------------------------- | ------------------------------ | ----- |
| Ceiling at destination                       | Published minimums plus 500 ft            | Published plus 200 ft          |       |
| Visibility at destination                    | Published plus 1 sm                       | Published                      |       |
| Approach types to minimums                   | ILS and LPV only                          | Any published approach         |       |
| Weather at the alternate                     | Alternate minimums plus 300 ft and 1 sm   | Alternate minimums             |       |
| Fuel on landing                              | 1 hour                                    | 45 minutes (the legal reserve) |       |
| Night IFR                                    | No, for the first 25 instrument hours     | Yes, above personal minimums   |       |
| Longest leg in cloud                         | 1 hour                                    | 2 hours                        |       |
| Recent practice                              | An approach in the last 30 days           | Legal currency                 |       |
| Reported icing or thunderstorms on the route | No go                                     | No go                          |       |

The first two columns are examples, not rules. Fill in the last column and keep it on your kneeboard. Once a month, raise or lower a line based on how recent flights went. Minimums that never change are not being used.

:::callout{type="decision"}
You are planning KLVK to KMRY. The Monterey TAF gives a 300 ft ceiling and 1 sm at your arrival time, close to the ILS minimums. Legally, with an alternate and the fuel, you may go. Your worksheet says "published plus 500 ft". The right answer is to wait, or to plan so the decision is made at the alternate instead of at the DA. Not going is a pass.
:::

:::quiz{id="l21-1-q3" type="multi"}
Which of these belong on a personal IFR minimums worksheet? Pick all that apply.

- [x] The lowest ceiling you will accept at the destination, above the published minimums
- [x] How much fuel you want on landing, above the legal reserve
- [ ] The autopilot modes the sim models
- [x] Whether you will fly IFR at night, and under what conditions

---

Personal minimums cover weather margins, fuel, your own recency and the conditions you choose to avoid. The modes the sim models are a fact about the airplane, not a limit you set on yourself.
:::

## The IFR cross-country plan

Everything from Modules 18–20 fits one workflow, the one you fly in the capstone and the one a real instrument pilot follows on every flight.

1. **Weather, go/no-go, alternate and fuel.** Read the TAFs, apply the 1-2-3 rule, decide whether an alternate is required, and compute the IFR fuel: destination, alternate, then 45 minutes. See [[l18-1-ifr-rules-minimums-currency-alternates-and-fuel]].
2. **Build the flight plan** in the G1000 with the departure and the expected approach. See [[l18-4-the-g1000-nxi-and-gfc-700-for-ifr]].
3. **Get the clearance.** Copy it with CRAFT and read it back. See [[l18-3-clearances-and-departures]].
4. **Before takeoff.** Set the departure, check the CDI source, brief the departure.
5. **Depart, climb and join the route.** Hand-fly to a safe altitude, then pick your level of automation. See [[l18-5-enroute-ifr-and-lost-communications]].
6. **Brief the approach** 10–15 minutes before the descent.
7. **Fly the approach.** Land, or go missed and hold or divert. See [[l20-1-anatomy-of-an-instrument-approach]] and [[l20-5-missed-approaches]].
8. **Log it.** Approaches, holds and instrument time go in the logbook.

:::quiz{id="l21-1-q4" type="order"}
Put these IFR flight steps in order.

1. Decide on the alternate and compute the IFR fuel
2. Copy the clearance with CRAFT
3. Brief the approach in cruise
4. Make the land-or-miss decision at the DA

---

Planning first, then the clearance, then the briefing in the quiet cruise phase, and finally the decision at the DA with everything already prepared.
:::

Challenge C21.2 "IFR cross-country capstone" is this workflow flown for real: KLVK to KMRY in cloud, from the briefing and alternate decision through the clearance, departure, enroute leg and the ILS or LOC RWY 10R at Monterey. In one variant Monterey is above minimums and you land. In the other you go missed at the DA and divert to Salinas for the ILS or LOC RWY 31. The challenge scores your planning numbers, tracking and altitudes, the DA decision, the alternate leg if needed, the 45-minute reserve on landing and the logbook entry. Not for navigation.

:::callout{type="verify"}
Confirm the charted titles "ILS or LOC RWY 10R" (KMRY) and "ILS or LOC RWY 31" (KSNS) against the current d-TPP and record the cycle checked. KMRY is not yet in `airports.yaml`; add it before the capstone ships. Confirm the sim's nav database has both procedures.
:::

## Practice and next steps

Three ideas to carry forward:

1. Workload peaks on departure and on the approach. Move every possible task into cruise or onto the ground.
2. Choose a level of automation on purpose, say the mode out loud, and step down a level when the airplane surprises you.
3. Personal minimums are written on a calm day and used on a bad one. Staying on the ground is a pass.

**Practice.** This lesson feeds the `ifr-rules` flashcard deck: the briefing order, the 10–15 minute rule and the levels of automation.

**Fly it.** Challenge C21.2 "IFR cross-country capstone" opens after this lesson. Fill in your minimums worksheet first and check the capstone's weather against it. Then continue to [[l21-2-ifr-emergencies]], where the same flight goes wrong in three ways.
