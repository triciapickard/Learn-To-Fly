---
slug: l7-3-towered-airports-and-sim-atc
code: L7.3
module: m7-radio-airport-operations
order: 3
priority: P0
title: Towered airports and sim ATC
summary: ATIS, ground, tower and back again — the full sequence at a towered airport, what to read back, and how MSFS ATC differs.
estimatedMinutes: 25
prerequisites: [l7-2-non-towered-airports-ctaf]
objectives:
  - Listen to the ATIS, call ground for taxi, call tower for takeoff and read back correctly.
  - Ask for and fly a tower-assigned pattern entry and landing.
  - Use the MSFS ATC window and know how it differs from real ATC.
challenges: [c7-2-towered-departure-and-return-at-livermore]
resources: [aim-4-2, aim-4-3, vatsim-getting-started, pilotedge]
published: false
lastVerifiedAt: null
simVersion: null
---

## The sequence

At a towered airport, you talk to different controllers at each stage:

1. **ATIS**: listen for the weather and runway in use.
2. **Ground**: permission to taxi.
3. **Tower**: permission to take off.
4. Leave the Class D, then later call the **tower** again to come back.
5. **Tower**: permission to land.
6. **Ground**: permission to taxi to parking.

## Departing Livermore

The frequencies are on the sectional and in the Chart Supplement.

:::callout{type="verify"}
Author note: check the Livermore runway numbers, ATIS, ground and tower frequencies, and the parking area names in the Chart Supplement and in the sim.
:::

**Ground:**

> **You:** "Livermore Ground, Skyhawk One Two Three, at the south ramp, VFR departure to the east, with information Alfa."
>
> **Ground:** "Skyhawk One Two Three, Livermore Ground, runway two five right, taxi via Alfa, hold short of runway two five left."
>
> **You:** "Runway two five right, taxi via Alfa, hold short of two five left, Skyhawk One Two Three."

After the run-up, switch to the tower:

> **You:** "Livermore Tower, Skyhawk One Two Three, holding short runway two five right, ready for departure, eastbound."
>
> **Tower:** "Skyhawk One Two Three, Livermore Tower, runway two five right, cleared for takeoff, right turn out approved."
>
> **You:** "Runway two five right, cleared for takeoff, right turn out, Skyhawk One Two Three."

## Read-backs

Read back the important parts of an instruction so the controller can catch any mistake. Always read back:

- **Runway assignments**, including "cleared for takeoff" and "cleared to land" with the runway.
- **Hold short instructions.**
- **Altimeter settings**, **frequencies**, **headings** and **altitudes**.

End the read-back with your call sign.

:::quiz{id="l7-3-q1" type="single"}
Which instruction must you always read back?

- [ ] "Traffic, 2 o'clock, 3 miles"
- [x] "Hold short of runway two five left"
- [ ] "Good morning"
- [ ] "Wind two five zero at eight"

---

**Hold short instructions** (and runway assignments) must always be read back. Crossing a runway by mistake is one of the most serious errors at an airport.
:::

:::quiz{id="l7-3-q2" type="single"}
What should you have before you first call ground?

- [ ] Your takeoff clearance
- [x] The current ATIS
- [ ] Permission from the tower
- [ ] Your engine started for 10 minutes

---

**The current ATIS.** Tell ground which one you have: "with information Alfa".
:::

## Coming back

Call the tower about 10 nm out, **before** you reach the Class D:

> **You:** "Livermore Tower, Skyhawk One Two Three, one zero miles east, three thousand five hundred, inbound for landing with information Bravo."
>
> **Tower:** "Skyhawk One Two Three, Livermore Tower, enter right downwind runway two five right, report midfield."
>
> **You:** "Right downwind two five right, report midfield, Skyhawk One Two Three."

Once the tower has answered **using your call sign**, you have **two-way radio communication**, and you may enter the Class D. If the tower says "Aircraft calling Livermore Tower, stand by", you don't: they haven't used your call sign.

Fly the pattern you're given, make the reports you're asked for, and land only when you hear "**cleared to land**". After landing, clear the runway and switch to ground when told.

## MSFS ATC

The sim's ATC window lets you choose calls from a menu:

- **Pick from the list.** The sim reads out your call and the controller answers.
- **It's simplified.** Some real options are missing, and the phrasing doesn't always match the AIM.
- **Practice anyway.** Say each call out loud before you choose it.

:::callout{type="verify"}
Author note: check the MSFS 2024 ATC window options for VFR departures and arrivals at Livermore, and note where they differ from the scripts above.
:::

## Next steps: online ATC

When you're ready for more, networks like **VATSIM** (free, with volunteer controllers) and **PilotEdge** (paid, with professional-style controllers) let you talk to real people. You speak on a real microphone, and nobody reads the calls out for you.
