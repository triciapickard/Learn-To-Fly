---
slug: l6-5-gps-navigation-with-the-g1000
code: L6.5
module: m6-vfr-navigation
order: 5
priority: P0
title: GPS navigation with the G1000
summary: Direct-To, flight plans and the Nearest page, and why GPS doesn't replace looking outside.
estimatedMinutes: 25
prerequisites: [l6-4-vor-navigation]
objectives:
  - Use Direct-To to fly to an airport.
  - Build, activate and fly a flight plan with 2–4 waypoints.
  - Use the Nearest page to find the nearest airport.
challenges: [c6-5-g1000-flight-plan]
resources: [ifh-glass]
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

## GPS is a tool

GPS makes navigation easy, but it can pull your eyes inside the cockpit. Use it to check where you are. Keep following your route on the chart, and keep scanning for traffic.

## Direct-To

**Direct-To** creates a straight line from where you are to one waypoint.

1. Press the **D→** key.
2. Turn the small **FMS** knob to start entering the identifier, and the large knob to move between characters. Type **KTCY**.
3. Press **ENT** to accept the identifier, then **ENT** again to activate.
4. Follow the **magenta line**.

Try it in the walkthrough below.

::widget{name="g1000-pfd" view="navigation" mode="explore"}

:::quiz{id="l6-5-q1" type="single"}
Which key starts a direct route to a single waypoint?

- [ ] FPL
- [x] D→ (Direct-To)
- [ ] NRST
- [ ] PROC

---

**D→**, the Direct-To key.
:::

## Flight plans

For a route with several waypoints, use a flight plan:

1. Press **FPL** to open the active flight plan. On the MFD, push the **FMS** knob to bring up the cursor (on the PFD it's already there). The NXi fills in your departure airport by itself.
2. Turn the small **FMS** knob to start entering a waypoint, spell the identifier and press **ENT**. Repeat for each waypoint, then push the FMS knob to put the cursor away.
3. To insert or delete a waypoint, move the cursor with the large FMS knob and enter a new one or press **CLR**.
4. There's nothing to activate. Waypoints entered here go straight into the active plan. Only a stored plan from the catalog needs activating.
5. The active leg shows in magenta. The PFD shows the next waypoint, its distance and the time to get there.

:::callout{type="verify"}
Sim check: desk-verified 2026-10-13 against the Garmin G1000 NXi Cockpit Reference Guide (Creating a Basic Flight Plan: FPL, push the FMS knob for the cursor on the MFD, enter waypoints with the FMS knob and ENT; no activation step for the active plan). Still open: how a flight plan from the MSFS 2024 world map syncs into the G1000, and whether the sim's NXi fills in the origin airport.
:::

## The magenta line and the HSI

On the PFD's **HSI**, the needle color tells you what it's following:

- **Magenta** means GPS.
- **Green** means VOR or localizer.

If the needle is green when you meant to follow GPS, press the **CDI** softkey until it's magenta.

:::quiz{id="l6-5-q2" type="single"}
What does a magenta needle on the HSI mean?

- [x] It's following GPS
- [ ] It's following a VOR
- [ ] The autopilot is on
- [ ] There's a navigation failure

---

**Magenta means GPS.** Green means a VOR or localizer.
:::

## Nearest airports

Press **NRST** to list the nearest airports, with their bearing, distance and runway length. It's the fastest way to find somewhere to land in an emergency or a diversion. Select an airport and press **D→** to go straight there.

## Common mistakes

- **CDI on VOR** instead of GPS, so you fly a VOR needle while thinking it's GPS.
- **The wrong waypoint** picked from a list of similar names.
- **Map range too small** to see what's coming.
- **Heads-down flying**, typing into the G1000 for too long without looking outside.
