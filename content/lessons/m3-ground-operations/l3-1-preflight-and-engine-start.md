---
slug: l3-1-preflight-and-engine-start
code: L3.1
module: m3-ground-operations
order: 1
priority: P0
title: Preflight and engine start
summary: What a preflight inspection is for, and how to start the Skyhawk from cold and dark with the checklists.
estimatedMinutes: 20
prerequisites: [l1-4-speeds-limits-and-checklists]
objectives:
  - Describe the purpose of a preflight inspection and what the sim can and cannot simulate.
  - Complete the before-starting-engine and starting-engine checklists from cold and dark.
  - Recognize normal indications after start.
challenges: [c3-1-cold-and-dark-to-running]
resources: [afh-ch2, msfs-checklist, phak-ch7]
published: false
lastVerifiedAt: null
simVersion: null
---

## The walkaround

Before every real flight, the pilot walks around the airplane. The **preflight inspection** catches problems while the airplane is safely on the ground:

- **Fuel.** Check the quantity in each tank by looking in, and drain a small sample from each tank to check for water and the right fuel (100LL is blue).
- **Oil.** Check the level on the dipstick.
- **Control surfaces.** Free to move, hinges secure, nothing damaged.
- **Tires and brakes.** Inflated, no damage.
- **Covers and tie-downs.** Remove the pitot cover, the chocks and the tie-down ropes.

In the sim, most of this can't go wrong. MSFS 2024 may offer a walkaround mode where you can look at the airplane from outside; use it to build the habit.

:::callout{type="verify"}
Author note: describe MSFS 2024's walkaround features for the Skyhawk (which items it models, such as the pitot cover, chocks and fuel sampling) after checking them in the sim.
:::

## Setting up the cockpit

Before you touch the engine controls:

1. **Seat and belts.** Adjusted and fastened.
2. **Parking brake.** Set.
3. **A cockpit flow.** Work across the panel in one direction, left to right, touching each control in order. A flow is faster than reading every item, and the checklist afterwards catches anything you missed.

Run the before-starting-engine checklist below. In this summary, each item has the **action** to take.

::checklist{slug="before-starting-engine"}

## Starting the engine

The starting sequence for the fuel-injected Skyhawk:

1. **Throttle** open about a quarter inch.
2. **Mixture** as the checklist says, then rich as the engine starts.
3. **Auxiliary fuel pump** on briefly to prime, then off, if the checklist calls for it.
4. **Beacon light** on, so people outside know the engine is about to start.
5. **Look outside and shout "CLEAR!"**
6. **Key to START.** Release it to BOTH as soon as the engine fires.
7. **Throttle** to about **1,000 RPM**.
8. **Oil pressure.** Check that it rises into the green within about **30 seconds**. If it doesn't, shut the engine down.

:::callout{type="safety"}
Always shout "CLEAR!" before starting, even in the sim. A spinning propeller is almost invisible, and habits you build here transfer to the real airplane.
:::

::checklist{slug="starting-engine"}

:::callout{type="verify"}
Author note: check the exact start sequence (mixture position, auxiliary pump use, throttle setting) against the MSFS 2024 in-sim checklist for the G1000 Skyhawk, and the 30-second oil pressure rule.
:::

:::quiz{id="l3-1-q1" type="single"}
What must rise into the green within about 30 seconds after the engine starts?

- [ ] Fuel flow
- [x] Oil pressure
- [ ] Oil temperature
- [ ] Engine RPM

---

**Oil pressure.** Without it the engine isn't being lubricated. If it doesn't rise within about 30 seconds, shut down. Oil temperature takes much longer to rise.
:::

:::quiz{id="l3-1-q2" type="single"}
Why do pilots shout "CLEAR!" before starting the engine?

- [ ] It's required by the radio rules
- [x] To warn anyone near the propeller
- [ ] To tell the tower you're starting
- [ ] It helps the starter motor

---

To **warn anyone near the propeller**, and to make yourself look outside before you turn the key.
:::

## After the start

Once the engine is running smoothly:

- **Avionics master on.** The G1000 screens come to life.
- **Flaps** up, and check they move.
- **Lights** as needed: navigation lights, taxi light.
- **Altimeter** set, and listen to the airport weather (ATIS or AWOS).
- **Alternator.** Check it's charging: the ammeter or voltage on the EIS shows a positive charge.

## When it won't start

In the sim, a failed start is almost always one of three things:

- **Fuel selector** not on BOTH (or OFF).
- **Mixture** left at idle cut-off.
- **Parking brake** off, so the airplane starts rolling as soon as the engine runs.

:::quiz{id="l3-1-q3" type="single"}
The engine won't start in the sim. What do you check first?

- [ ] The avionics master
- [ ] The COM frequency
- [x] The mixture and the fuel selector
- [ ] The altimeter setting

---

Check the **mixture** (not in idle cut-off once the engine should be running) and the **fuel selector** (on BOTH). Without fuel, there's nothing to burn.
:::

Now try it for real in [[c3-1-cold-and-dark-to-running]].
