---
slug: l19-2-holding-with-the-g1000-and-autopilot
code: L19.2
module: m19-holding
order: 2
priority: P0
title: Holding with the G1000 and autopilot
summary: Load published holds and build your own in the G1000 NXi, let the GPS fly the entry on the autopilot, and know exactly how to leave when ATC clears you onward.
estimatedMinutes: 20
prerequisites: [l19-1-holding-patterns-entries-timing-and-wind]
objectives:
  - Tell a published hold, a hold-in-lieu of procedure turn and a user-defined hold apart, and say when each is flown.
  - Create a hold at a fix in the G1000 NXi flight plan and let the GPS sequence the entry.
  - Monitor the autopilot through the hold and exit it correctly when cleared.
challenges: []
resources: [iph-holding, aim-5, faa-chart-users-guide]
published: false
lastVerifiedAt: null
simVersion: null
---

## The same racetrack, drawn by the computer

In [[l19-1-holding-patterns-entries-timing-and-wind]] you built the holding picture in your head and flew it with a clock and a tripled wind correction. The G1000 NXi can draw the same racetrack on the map, pick an entry, time the legs, correct for wind and, with the GFC 700 engaged, fly the whole thing while you talk to ATC and do the fuel sum.

That is a real workload saver in cloud. It is also the fastest way to fly a hold wrong with great confidence, because the airplane will cheerfully fly whatever hold you loaded, with whatever turn direction you left in the box. This lesson is about loading it right and watching it the way an instructor watches a student.

:::callout{type="real-world"}
In a real airplane, instrument students learn holding by hand first and only then with the autopilot, and the checkride can ask for either. The GFC 700 in a real Skyhawk is a certified autopilot with its own limitations and failure modes, which a real pilot studies in the POH supplement. The sim version is close enough to teach the habits; it is not a substitute for that study.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## Published holds, holds-in-lieu and user holds

The G1000 can hold at a fix in three ways, and the difference changes what the box does after the first lap.

| Kind                                       | Where it comes from                                                                          | How the G1000 treats it                                             | When you fly it                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Published hold**                         | Charted, usually at the end of a missed approach or on an airway                             | Loaded with the procedure; holds until you tell it to leave         | After a missed approach, or when ATC says "hold as published"                        |
| **Hold-in-lieu of procedure turn (HILPT)** | Charted on an approach as the course reversal (bold racetrack with its leg time or distance) | Loaded with the approach; flies **one** lap, then continues         | When you arrive at the fix needing to turn around; **not** on vectors or straight-in |
| **User hold**                              | You build it from an ATC instruction                                                         | Added as a hold leg at a waypoint; holds until you tell it to leave | Any ATC-assigned hold at a fix in the database                                       |

The hold-in-lieu is the one that catches people. It is part of the approach, a course reversal rather than a parking space. On vectors to final, cleared straight-in, on a route marked NoPT, or on a timed approach from a holding fix you do not fly it, and you must tell the G1000 that, or it will dutifully turn around at the fix in front of the airplane behind you. One circuit is all it is for: once you are established inbound the reversal is complete, and if you want another lap to lose altitude or settle down, tell ATC when you get the approach clearance. [[l20-1-anatomy-of-an-instrument-approach]] covers course reversals in detail.

:::callout{type="verify"}
Sim check: does the MSFS 2024 nav database carry the UHHUT hold on the KLVK RNAV (GPS) RWY 25R, and does the NXi fly it as a one-lap hold-in-lieu (no SUSP) when the approach is loaded with UHHUT as the transition? Desk-verified 2026-10-13 against d-TPP cycle 2610 (01–29 Oct 2026): hold-in-lieu at UHHUT (IF/IAF), right turns, inbound 255°, 4 NM legs; the OOWEN, EVETT and SMONE arrivals are NoPT; the ILS and LOC RWY 25R carry only the missed-approach hold at ALTAM. Not for navigation.
:::

:::quiz{id="l19-2-q1" type="multi"}
When do you **not** fly a charted hold-in-lieu of procedure turn? Pick all that apply.

- [x] ATC is giving you radar vectors to the final approach course
- [x] ATC clears you for the "straight-in" approach
- [x] "NoPT" is charted on the route you are arriving on
- [ ] The weather is below minimums
- [ ] You are flying the approach on the autopilot

---

The hold-in-lieu is a course reversal, needed only when you arrive at the fix pointing the wrong way. On vectors, cleared straight-in, or on a "NoPT" route you are already set up for final, so you skip it. Weather and the autopilot have nothing to do with it.
:::

## Building a user hold in the G1000 NXi

Take the clearance from the last lesson: "Hold south of ECA on the 180 radial, right turns, maintain 4,000, expect further clearance at 2145." ECA is already in your flight plan, so you hang the hold on it. The Garmin Pilot's Guide gives these steps, which the Working Title NXi in MSFS 2024 follows closely:

1. Press **FPL** to open the active flight plan.
2. Press the FMS knob to bring up the cursor (on the MFD) and turn the large FMS knob to highlight the holding fix: ECA.
3. Press **MENU**, highlight **Hold At Waypoint** and press **ENT**. The "Hold at" window opens with the course field highlighted.
4. Fill it in, pressing **ENT** after each field: course **360**, **Inbound**, **Time** legs of **1 minute** (or **Distance** if ATC gave miles), **Right** turns, and the **EFC** time.
5. With **Load?** highlighted, press **ENT**. The racetrack appears on the map at ECA and a HOLD leg appears in the flight plan after the waypoint.

The Direct-To window offers the same editor (choose **Hold?** instead of **Activate?**), which is the quick way when ATC sends you direct to a fix and tells you to hold there. Either way, check the result against the picture in your head. A racetrack on the wrong side of the radial means you entered the course as outbound instead of inbound, or picked the wrong turn direction. Fix it before the fix, not after.

::widget{name="g1000-pfd" mode="explore"}

:::callout{type="verify"}
Sim check: in MSFS 2024 with the Working Title NXi, confirm the FPL MENU item reads "Hold At Waypoint", the field order (course, Inbound/Outbound, Time/Distance, length, Right/Left, EFC) and the "Load?" prompt match the steps above, and record the sim version. The steps were desk-verified 2026-10-13 against the Garmin G1000 NXi Pilot's Guide for the Cessna Nav III (190-02177-00 Rev A, pp. 206–207). Screenshots for the shot list: "G1000 NXi hold editor at ECA" and "MFD map with the user hold drawn south of ECA."
:::

:::callout{type="sim"}
The Working Title NXi is a very good copy of the real unit, not a perfect one. The hold editor layout, the knob and softkey sequence and what happens at the edge of a hold have all changed between sim updates. If a step here does not match your screen, trust the screen and tell us; the intent (course, direction, turns, leg length, then load) stays the same.
:::

:::quiz{id="l19-2-q2" type="order"}
Put the steps for creating a user hold at ECA in order.

1. Open the active flight plan with the FPL key
2. Highlight ECA with the FMS knob
3. Press MENU and choose Hold At Waypoint
4. Set course 360 inbound, 1-minute legs, right turns and the EFC
5. Load the hold and check the racetrack on the map

---

Flight plan, waypoint, menu, details, load, then **check**. The last step catches the wrong-side-of-the-radial mistake while there is still time to fix it.
:::

## Flying the entry: GPS, SUSP and the autopilot

With the hold loaded, the GPS picks the entry for you with the same sector logic you learned, and draws it on the map. It uses your ground track rather than your heading, so in a strong crosswind it may pick the neighboring entry; either is fine. Your job is to make sure the airplane follows it:

- **CDI source GPS.** The HSI needle must be magenta. Press the CDI softkey until it is.
- **NAV mode on the autopilot**, with **ALT** holding 4,000. With a GPS source the lateral mode annunciates **GPS**, not NAV, and the GFC 700 follows the GPS roll steering through the entry and the racetrack without you touching the heading bug.
- **Watch the fix.** At the fix the hold leg goes active and the HSI shows **SUSP** beside the airplane symbol, and the OBS softkey turns into a **SUSP** softkey: the box has suspended automatic waypoint sequencing so it keeps going round instead of flying on to the next waypoint.

SUSP is the most important word in this lesson. While it shows, the airplane holds. Clear it, and the airplane leaves the hold the next time it crosses the fix and continues along the flight plan.

:::quiz{id="l19-2-q3" type="single"}
SUSP is showing on the HSI while you are in a user hold. ATC clears you direct to Livermore. What happens if you do nothing?

- [ ] The airplane leaves the hold at the next fix crossing
- [x] The airplane keeps flying laps in the hold
- [ ] The autopilot disconnects
- [ ] The G1000 deletes the hold

---

SUSP means sequencing is suspended: the box keeps going round until you tell it otherwise. Press SUSP to clear it, and the airplane sequences onward the next time it crosses the fix.
:::

So the exit is:

1. ATC: "Skyhawk 3-4-5, cleared to Livermore via direct, descend and maintain 3,000." Read it back.
2. Press the **SUSP** softkey. SUSP disappears, and the box guides you round the rest of the pattern to the inbound course.
3. Finish the lap. Crossing the fix, the GPS sequences to the next leg and the autopilot follows. Deleting the HOLD leg instead (FPL, highlight it, **CLR**, "Remove Holding Pattern?") is for a hold you no longer need before you reach it; do not delete a hold you are flying.
4. Set the new altitude and run the 5 Ts once more: **Talk** is your "leaving the hold" report if required.

For a hold-in-lieu the logic is reversed: the box does **not** show SUSP, flies one lap and sequences onto the approach by itself. If ATC wants you to stay in it for spacing, press SUSP to keep it going round.

| What you see                       | What the box is doing                            | What you do                                              |
| ---------------------------------- | ------------------------------------------------ | -------------------------------------------------------- |
| SUSP on the HSI, racetrack magenta | Holding at the fix; will not sequence            | Fly laps; press SUSP when cleared onward                 |
| No SUSP, hold leg active           | Hold-in-lieu: one lap, then onward               | Fine for a course reversal; press SUSP to stay           |
| SUSP cleared, next leg went active | You cleared SUSP earlier than you meant to       | Reload the hold before the fix, or hand-fly the next lap |
| Needle green, not magenta          | Autopilot is following the VOR, not the GPS hold | CDI softkey to GPS; check GPS is the lateral mode        |

:::callout{type="verify"}
Sim check: in MSFS 2024 with the Working Title NXi, confirm (1) a user hold shows SUSP at the first fix crossing and the SUSP softkey (in the OBS position) exits it after the current lap; (2) a hold-in-lieu sequences after one circuit with no SUSP; (3) NAV with a GPS source annunciates GPS and the GFC 700 flies the entry. Record the annunciations in the v2 Section 8.5 autopilot table and the sim version. Desk-verified 2026-10-13 against the Garmin G1000 NXi Pilot's Guide 190-02177-00 Rev A (SUSP exit and "Remove Holding Pattern?" p. 207; GPS lateral mode and roll steering, Section 7).
:::

## Monitoring the automation

An autopilot in a hold is a textbook case of the question from [[l18-4-the-g1000-nxi-and-gfc-700-for-ifr]]: "What's it doing now?" Set yourself a scan for the hold and say the answers out loud:

- **Mode annunciator:** GPS and ALT green? A white, armed mode means the autopilot is waiting for something and the airplane may not be doing what you think.
- **HSI:** magenta needle, SUSP showing (or not, for a hold-in-lieu), course pointer on the inbound course.
- **Map:** the airplane symbol riding the drawn racetrack, turning the way the clearance said.
- **Altitude and speed:** 4,000 ft within the Learn to Fly instrument standard, holding speed set with the throttle; the autopilot does not manage power.
- **Clock and fuel:** time to the EFC and fuel remaining, every lap.

When something is wrong, say "I have the airplane", disconnect the autopilot, hand-fly the pattern from the last lesson and sort out the box on the next straight leg. The hand-flown hold is your fallback, not an embarrassment, which is why Challenge C19.2 "GPS hold" scores a hand-flown entry and first lap before the coupled lap.

:::callout{type="decision"}
Every lap, ask: do I still have the fuel to hold until the EFC and then fly the approach, the missed approach and the flight to the alternate with the reserve intact? The autopilot makes holding so easy that pilots forget they are burning fuel going nowhere. The decision to leave early is yours, not the box's.
:::

## Practice and next steps

Three things to carry forward:

1. Three kinds of hold: **published** (holds until told), **hold-in-lieu** (one lap, then the approach; skipped on vectors or straight-in) and **user** (you build it from the clearance).
2. Build a user hold with FPL, MENU, Hold At Waypoint, then course, direction, legs, turns, EFC, Load?, and **check the racetrack on the map**.
3. **SUSP** showing means the airplane holds; press SUSP when cleared and it leaves at the next fix crossing. CDI on GPS, GPS and ALT annunciated, scan every lap.

**Practice.** This lesson feeds the `holding-entries` flashcard deck (which entry will the GPS pick?) and adds the SUSP and hold-in-lieu rules to the `ifr-rules` deck.

**Fly it.** Challenge C19.2 "GPS hold" starts you in cloud near a Livermore approach fix: load the hold, hand-fly the entry, couple the autopilot for a lap, and exit cleanly when "cleared for the approach" arrives. Fly Challenge C19.1 "Hold at a VOR" first if you have not.

**Next.** Module 20 begins with [[l20-1-anatomy-of-an-instrument-approach]], where the hold-in-lieu returns as a course reversal and the published hold at the end of the missed approach ([[l20-5-missed-approaches]]) becomes the place you go when the runway does not appear.
