---
slug: l18-5-enroute-ifr-and-lost-communications
code: L18.5
module: m18-ifr-system
order: 5
priority: P0
title: Enroute IFR and lost communications
summary: Fly airways and direct routes at the right altitudes, make the reports ATC expects, and apply the lost-communications rules for route and altitude.
estimatedMinutes: 25
prerequisites: [l18-4-the-g1000-nxi-and-gfc-700-for-ifr]
objectives:
  - Fly an airway or direct route at an altitude that satisfies the MEA and the IFR cruising altitude rule.
  - List the reports you must make to ATC in a radar environment.
  - Apply the lost-communications rules to choose a route and an altitude.
challenges: []
resources: [iph-enroute, ecfr-91-185, aim-6]
published: false
lastVerifiedAt: null
simVersion: null
---

## The quiet part of the flight

The clearance is read back, the departure is flown, and the Skyhawk is climbing into gray with the needle centered. The enroute part of an IFR flight is calm by design: you fly the route, hold the altitude, talk when ATC calls or when a rule says you must. It is also where the system's safety net is most visible, because every rule for the quiet part assumes the radio might stop working.

This lesson covers both: how to fly the route, and what to do when nobody answers.

:::callout{type="real-world"}
In a real airplane, enroute IFR means real ice, real embedded thunderstorms and real fuel. A real instrument student flies long cross-countries with an instructor before doing it alone, and a lost-communications event is a genuine emergency with a plan behind it. The rules here are the real ones, simplified for the sim; the judgment about weather comes from Module 11 and from training.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## Airways and direct routing

Your route is either an **airway** from the enroute chart ([[l18-2-ifr-charts-and-the-approach-plate]]) or a **direct** leg between fixes that GPS makes possible. ATC mixes them freely: "cleared direct SUNOL, then as filed" is normal.

| Routing         | How you fly it                                                                                                       | What to watch                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Victor airway   | Loaded as an airway in the FPL ([[l18-4-the-g1000-nxi-and-gfc-700-for-ifr]]); NAV mode on GPS, or VOR if GPS is lost | The changeover point; the MEA changes at each fix                               |
| T-route         | Same, GPS only                                                                                                       | The MEA is a GPS MEA; VOR is not an option                                      |
| Direct to a fix | D→ the fix, then Activate Leg to rejoin the route                                                                    | Terrain: no airway means no MEA, so check the OROCA and your clearance altitude |
| Radar vectors   | HDG mode on the assigned heading                                                                                     | ATC is responsible for terrain while vectoring; you still watch the map         |

Joining an airway is the same intercept you flew in [[l6-4-vor-navigation]]: a 30–45° angle, then turn onto the course as the needle comes alive. With GPS the airway is a magenta line, so the intercept happens on the map as much as on the HSI.

At each fix on the route, run the 5 Ts you will meet again in [[l19-1-holding-patterns-entries-timing-and-wind]]: **Turn, Time, Twist, Throttle, Talk**. Enroute, most of them are "nothing to do", and saying so is the point.

:::callout{type="verify"}
Verify the off-airway terrain guidance (OROCA and 91.177 for direct routes) against the Instrument Procedures Handbook enroute chapter and AIM 5-3-3 (direct routing on GPS). SUNOL is a real fix near Livermore; keep the example as "direct to a fix on your route" and confirm the name against the current enroute chart or replace it with a fictional one.
:::

## Altitudes on the airway

Two rules decide your cruising altitude. The first is terrain: at or above the **MEA** for the segment (or the MOCA when ATC allows it with GPS). The second is traffic: in level cruise below 18,000 ft MSL, IFR flights separate by direction of flight:

| Magnetic course          | IFR cruising altitude | Example            |
| ------------------------ | --------------------- | ------------------ |
| 000° through 179° (east) | **Odd** thousands     | 5,000 ft, 7,000 ft |
| 180° through 359° (west) | **Even** thousands    | 4,000 ft, 6,000 ft |

Compare the VFR rule from [[l6-6-planning-a-cross-country-flight]]: same east-odd, west-even split, but without the extra 500 ft. That is how VFR and IFR traffic stay 500 ft apart by rule alone.

In controlled airspace, which is almost everywhere you will fly IFR, you fly the altitude **ATC assigns**, and ATC follows this rule for you. Your job is to notice when an assigned altitude is below the MEA ahead and to say so.

:::callout{type="verify"}
IFR cruising altitudes are 14 CFR 91.179; verify the course bands and that the rule applies in controlled airspace only when ATC has not assigned an altitude. Minimum altitudes are 91.177. Confirm the wording before publishing; the quiz below depends on the odd/even split.
:::

:::quiz{id="l18-5-q1" type="single"}
You are flying IFR on a magnetic course of 250° in uncontrolled airspace below 18,000 ft MSL. Which altitude fits the cruising altitude rule?

- [ ] 5,000 ft MSL
- [x] 6,000 ft MSL
- [ ] 6,500 ft MSL
- [ ] 7,000 ft MSL

---

A westbound course (180° through 359°) takes even thousands under IFR: 6,000 ft. The 6,500 ft option is the VFR altitude for the same direction.
:::

## Required reports

In a radar environment ATC can see your position, so position reports are not needed. A short list of events still requires a call **without being asked**:

| Report                                                                 | Why ATC needs it                                     |
| ---------------------------------------------------------------------- | ---------------------------------------------------- |
| Leaving an assigned altitude for a new one ("leaving 5,000 for 7,000") | Separation depends on knowing where the climb starts |
| Unable to climb or descend at least 500 fpm                            | ATC's timing assumes you can                         |
| Missed approach, and what you would like to do next                    | ATC must protect the missed approach airspace        |
| A change of true airspeed of 5% or 10 kt, whichever is greater         | Flow and spacing use your filed speed                |
| Reaching a holding fix (time and altitude) and leaving it              | Holding airspace is protected by time                |
| Loss of VOR, GPS, ILS or other navigation capability                   | Changes what ATC can clear you for                   |
| Any loss of radio capability, if some transmitter still works          | Starts the lost-comms plan on their side too         |
| Unforecast weather or anything affecting safety of flight              | Other pilots and the forecast depend on it           |

Outside radar coverage, add a **position report** at each compulsory reporting point (the filled triangles on the chart): identification, position, time, altitude, next fix and ETA, then the fix after that. In the Bay Area and the Sierra you will rarely be outside radar, but the sim's ATC may not say "radar contact", so Challenge C18.3 asks for the reports regardless.

:::callout{type="verify"}
Verify the required reports list against AIM 5-3-3 and the position report format against AIM 5-3-2. Confirm the 500 fpm and 5%/10 kt figures. Check whether MSFS 2024 ATC acknowledges voluntary reports; on VATSIM they are expected.
:::

:::quiz{id="l18-5-q2" type="multi"}
Which of these must you report to ATC without being asked, in a radar environment? Pick all that apply.

- [x] Leaving an assigned altitude
- [x] Being unable to climb at 500 fpm
- [x] Executing a missed approach
- [ ] Passing each fix on the airway

---

Altitude changes, poor climb performance and missed approaches are required reports. Passing a fix is a position report, which is only required outside radar coverage, at compulsory reporting points.
:::

## Lost communications: AVEF

The radio fails in cloud. ATC's plan for you is already written into the clearance: the route you were given, the altitude you were told to expect, the time you said you would arrive. Lost-communications rules exist so that you and ATC fly the same plan without talking.

:::callout{type="memory"}
**Lost communications under IFR (simplified).**

**Squawk 7600.** If you are in VMC, or reach VMC, stay VMC and land as soon as practicable.

**Route, in this order: A-V-E-F.**

- **A**ssigned: the route in your last clearance.
- **V**ectored: if being vectored, go direct to the fix, route or airway you were being vectored to.
- **E**xpected: the route ATC told you to expect.
- **F**iled: the route in your flight plan.

**Altitude, for each segment, the highest of:**

- the altitude last **assigned**,
- the **MEA** for the segment,
- the altitude ATC told you to **expect**.

**Leave the clearance limit** to begin the approach at the expect-further-clearance time, or, if none was given, at your filed ETA.

Worked example: cleared to Monterey as filed, "climb and maintain 3,000, expect 7,000 ten minutes after departure". You are on a vector of 250° to join the filed route when the radio dies, 12 minutes after takeoff, in cloud. Route: go direct to the fix you were being vectored toward, then the filed route. Altitude: assigned 3,000, MEA on the first segment 5,000, expected 7,000 and the 10 minutes have passed, so **7,000 ft**. If a later segment's MEA is 9,000, climb to 9,000 for that segment and come back down to 7,000 after it.
:::

Three details that catch people. First, "highest of the three" is checked **per segment**, so your altitude can change along the route. Second, the "expect" altitude counts only once its time or fix has been reached; before that, the assigned altitude is the one. Third, if you are in VMC, the rules stop: land, then phone.

| Situation                                              | What you do                                                                     |
| ------------------------------------------------------ | ------------------------------------------------------------------------------- |
| Radio fails, you are in VMC                            | Stay VMC, land at the nearest suitable airport, telephone ATC                   |
| Radio fails in IMC, you were on vectors                | Squawk 7600, go direct to the fix you were being vectored to, continue AVEF     |
| Radio fails in IMC, you were told "expect 7,000"       | Climb to 7,000 once the expected time has passed, higher where the MEA requires |
| You reach the clearance limit before the expected time | Hold at the fix until the expected time, then begin the approach                |
| No expected time was given                             | Begin the approach at the ETA you filed, or the amended ETA you gave ATC        |

:::callout{type="verify"}
Lost communications are 14 CFR 91.185 and AIM 6-4-1; the summary is from v2 Appendix B.14. Verify the exact wording on when to leave the clearance limit (expect-further-clearance time vs ETA, and the case where the clearance limit is not an approach fix). Confirm 7600 and the VMC provision in 91.185(b). Keep the worked example consistent with the C21.3 "Lost comms in IMC" challenge once it is written.
:::

:::quiz{id="l18-5-q3" type="single"}
Your last clearance was "climb and maintain 4,000, expect 8,000 at SUNOL". The radio fails in IMC before SUNOL, on a segment with an MEA of 5,000 ft. What altitude do you fly on that segment?

- [ ] 4,000 ft
- [x] 5,000 ft
- [ ] 8,000 ft
- [ ] Any VFR cruising altitude

---

Highest of assigned (4,000), MEA (5,000) and expected (8,000, but only after SUNOL). Before SUNOL the expected altitude does not apply yet, so the MEA of 5,000 ft wins. After SUNOL you would climb to 8,000 ft.
:::

:::callout{type="decision"}
The radio has been silent for 2 minutes and you are not sure whether it failed or you missed a handoff. Before squawking 7600: try the last frequency, the previous one, 121.5, and the transmitter in the blind ("Skyhawk 172LF transmitting in the blind"). Check the volume, the audio panel and the headset plug. Most "lost comms" are a knob. If nothing works, the rules are there for you; fly them calmly.
:::

## Practice and next steps

Three things to carry forward: east-odd, west-even for IFR cruise; report altitude changes, poor climb and the missed without being asked; and A-V-E-F with the highest of assigned, MEA and expected.

**Practice.** This lesson feeds the `ifr-rules` flashcard deck (cruising altitudes, required reports, the lost-communications route and altitude rules) and the `memory-items` deck through the memory callout above.

**Fly it.** Challenge C18.3 "IFR departure and enroute" departs Livermore in cloud, flies the departure procedure from [[l18-3-clearances-and-departures]], joins the route and flies it to the first fix of your arrival, with every required report along the way.

**Next.** [[l19-1-holding-patterns-entries-timing-and-wind]] teaches the one thing ATC asks of an enroute IFR flight that VFR never does: wait, precisely, in a racetrack in the sky.
