---
slug: l14-4-fire-smoke-and-emergency-descent
code: L14.4
module: m14-failures-emergencies
order: 4
priority: P0
title: Fire, smoke and emergency descent
summary: The engine-fire memory items, what to do about an electrical fire or smoke in the cabin, and how to get down fast without breaking the airplane.
estimatedMinutes: 20
prerequisites: [l14-3-partial-power-loss-and-fuel-problems]
objectives:
  - Recite and fly the engine-fire-in-flight memory items in order.
  - Fly an emergency descent within airspeed and bank limits, with a cleared area and a planned level-off.
  - Handle an electrical fire and smoke in the cabin, including isolating the source and ventilating.
challenges: []
resources: [afh-ch18, msfs-checklist]
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

## Why fire is different

The emergencies so far gave you a calm minute to think. Fire does not. An engine fire in flight is the one case where the right answer is to stop the engine on purpose, cut off its fuel, and get on the ground in the next few minutes, wherever that is.

So this lesson uses **memory items**, actions you do from memory, in order, before you open any checklist. Practice them until you can say them in your sleep, then fly them in Challenge C14.5 "Engine fire and emergency descent".

:::callout{type="safety"}
Engine fires in a Skyhawk are rare, and most happen on the ground during a start. In the air, starve the fire, get down and land. Trying to save the engine costs minutes you do not have.
:::

## Engine fire in flight: the memory items

The engine is in front of the firewall. The fuel is in the wings and runs forward through a line under the floor. The memory items close that line, remove fuel and electricity from the engine compartment, then use airspeed and a descent to fight the flames and reach the ground.

:::callout{type="memory"}
**Engine fire in flight (simplified for the sim)**

1. **Mixture: idle cut-off.** Stop feeding the engine.
2. **Fuel shutoff valve: OFF.** Close the line from the tanks.
3. **Auxiliary fuel pump: OFF.** Do not pump fuel toward the fire.
4. **Master switch: OFF.** Remove electrical ignition sources. (The engine's magnetos keep sparking while the propeller windmills, which is why the fuel came first.)
5. **Cabin heat and cabin air: OFF.** Keep smoke out of the cabin. Overhead vents open as needed.
6. **Airspeed: as the checklist specifies.** Fly faster than best glide to try to blow the fire out; if it does not go out, the checklist may call for a higher speed still.
7. **Forced landing.** Execute, as in Course 1. The engine is not coming back.

:::

The flow has no restart. You are now flying a glider, and the forced landing from [[l5-4-engine-failure-and-forced-landings]] takes over.

:::callout{type="verify"}
Desk-verified 2026-10-13: fuel first (mixture idle cut-off, fuel shutoff OFF), no restart after the fire is out, and a faster descent to try to blow the fire out confirmed (AFH Ch 18, Engine Fire; the AFH notes the master-off item costs you the radios and transponder, so it comes after the fuel items). POH check: Section 3 "Engine fire in flight": exact item order and wording ("fuel shutoff valve" vs "fuel selector", any STBY BATT item), and the airspeed (100 KIAS is commonly quoted, with a higher speed if the fire persists); match the sim's checklist wording and teach the POH version.
:::

:::quiz{id="l14-4-q1" type="order"}
Engine fire in flight. Put the memory items in order.

1. Mixture idle cut-off
2. Fuel shutoff valve OFF
3. Auxiliary fuel pump OFF
4. Master switch OFF
5. Cabin heat and air OFF
6. Airspeed per the checklist, then forced landing

---

Fuel first (mixture, shutoff valve, pump), then the master, then cabin heat and air, then airspeed and the forced landing. Fuel comes before the master because the magnetos keep sparking as long as the propeller turns.
:::

## Electrical fire and smoke in the cabin

An electrical fire smells different: hot insulation, sharp acrid smoke, often no flame. The engine is fine. The problem is behind the panel, and you fix it by removing electrical power.

:::callout{type="memory"}
**Electrical fire or smoke in the cabin (simplified for the sim)**

1. **Master switch: OFF.** Avionics master OFF. All other electrical switches OFF.
2. **Vents, cabin air and cabin heat: CLOSED** until the smoke stops, then **open** to clear the cabin.
3. **Fire extinguisher** if there are flames. Ventilate after using it.
4. If the fire is out and you need electrical power to land: **circuit breakers checked**, master ON, then avionics and radios ON **one at a time**, watching for smoke to return.
5. Land as soon as practical.

:::

Step 4 is the judgment call. On a clear day you may not need power at all, because the engine runs on magnetos and the airplane flies without a screen. At night, or at a towered airport, you may want one radio and the PFD back. Bring them back one at a time, so if the smoke returns you know which item caused it.

:::callout{type="verify"}
Desk-verified 2026-10-13: master and all electrical switches off, vents opened to clear smoke only after the extinguisher and closed again if the smoke grows, and power restored one switch at a time with a pause after each, confirmed (AFH Ch 18, Electrical Fires and Cabin Fire). POH check: Section 3 "Electrical fire in flight" item order and wording (vents, extinguisher, master, breakers, avionics). Sim check: whether the sim models cabin smoke or a fire extinguisher at all.
:::

:::quiz{id="l14-4-q2" type="single"}
Smoke appears from behind the panel and smells electrical. The engine is running normally. What is the first action?

- [ ] Mixture idle cut-off and fuel shutoff OFF
- [x] Master switch OFF, then avionics and all electrical switches OFF
- [ ] Open every vent to clear the smoke
- [ ] Set up an emergency descent at {{vspeed.vne}}

---

Electricity feeds an electrical fire, so the master comes off first. Shutting down a healthy engine would turn one emergency into two. Vents close until the smoke stops, then open to clear it.
:::

## The emergency descent

Fire is one reason to get down fast. A sick passenger or smoke you cannot clear are others. An **emergency descent** trades altitude for time as quickly as the airframe allows without exceeding its limits:

1. **Clear the area.** Look below before you go there.
2. **Power: idle.** Mixture as required (in a fire, it is already at cut-off).
3. **Bank 30°–45°** and lower the nose. The bank adds drag and lets you see the ground you are descending toward.
4. **Airspeed.** Flaps up, accelerate to no faster than {{vspeed.vno}} in smooth air, and never above {{vspeed.vne}}. If you choose flaps, stay below {{vspeed.vfe}}. Flaps give a steeper, slower descent. In rough air, stay at or below {{vspeed.va}}. {{vspeed.vno}} is our target rather than an FAA number. The handbook says to descend at the fastest speed the configuration allows without passing its limit, and we keep a margin below the red line for a beginner.
5. **Plan the level-off.** Decide the altitude you are descending to before you start, and begin leveling off a few hundred feet above it.

| Choice                           | Descent                      | Use when                                        |
| -------------------------------- | ---------------------------- | ----------------------------------------------- |
| Flaps up, near {{vspeed.vno}}    | Fast, steep, smooth air only | Engine fire, you want airflow and altitude gone |
| Flaps down, below {{vspeed.vfe}} | Steeper angle, lower speed   | Rough air, or you need to see and land soon     |
| Spiral at 30°–45° bank           | Keeps you over one spot      | Descending to a field you have already chosen   |

In a fire the bank also helps keep the flames away from the cabin side and the field in view.

:::callout{type="verify"}
Desk-verified 2026-10-13: power idle, bank about 30°–45° to keep positive load and look below, flaps and gear as the manufacturer recommends, never past VNE or VFE, VA in turbulence, and a level-off started high enough to recover, confirmed (AFH Ch 18, Emergency Descents). POH check: whether Section 3 gives an emergency descent airspeed or flap setting for the 172S; if it does, teach that number and retune Challenge C14.5's ±5 kt target to it.
:::

:::quiz{id="l14-4-q3" type="single"}
Emergency descent in smooth air, flaps up. What is the fastest speed you should use?

- [ ] {{vspeed.vfe}}
- [ ] {{vspeed.va}}
- [x] {{vspeed.vno}}
- [ ] {{vspeed.vne}}

---

{{vspeed.vno}}, the top of the green arc, is the sensible ceiling for a flaps-up descent in smooth air. {{vspeed.vne}} is a limit, not a target. With flaps, stay below {{vspeed.vfe}}. In rough air, stay at or below {{vspeed.va}}.
:::

## The forced landing that follows

An engine fire ends in a forced landing. An emergency descent for smoke usually ends at an airport. Either way the last part is the one you know from Course 1: pick the field or runway, fly key points, flaps only when the landing is made, secure the airplane.

After a fire, get out fast. Unlatch the doors before touchdown so they cannot jam, and leave the airplane upwind of the smoke. Do not restart the engine to taxi clear, because it was on fire.

:::callout{type="decision"}
At 6,500 ft over the Central Valley, memory items done, fire out. The nearest airport is 12 nm away, at the edge of the glide ring. A flat, dry field is 3 nm away. Choose the field. After a fire, do not bet on the airplane. If you might not complete the glide, you risk a forced landing somewhere you did not plan.
:::

## In the sim

MSFS 2024 may not model an engine fire at all. Challenge C14.5 uses an event card, "ENGINE FIRE", at a random time after the air start. You fly the memory items aloud, set up the emergency descent and plan the forced landing. The sim scores what it can see: the switches you moved and their order, the airspeed and bank in the descent, and the field you chose.

:::callout{type="sim"}
With no fire modeled, the engine keeps running until you cut the mixture. Cut it. Memory items train your hands to move before your mind catches up, and you can only train that by moving the controls.
:::

:::callout{type="verify"}
Sim check: whether MSFS 2024 models engine fire or cabin smoke for the Skyhawk; record the sim version. Screenshot for the shot list: "emergency descent, 45° bank, {{vspeed.vno}} on the tape".
:::

## Practice and next steps

To carry forward:

1. Engine fire: fuel off (mixture, shutoff, pump), master off, cabin air off, airspeed up, forced landing.
2. Electrical fire: master off, isolate, ventilate, restore one item at a time only if you must.
3. Emergency descent: clear the area, idle, 30°–45° bank, below {{vspeed.vno}} clean or {{vspeed.vfe}} with flaps, plan the level-off.

**Practice.** This lesson feeds the `memory-items` deck: both fire flows and the emergency descent limits.

**Fly it.** Challenge C14.5 "Engine fire and emergency descent" starts at 6,500 ft over the Central Valley. Next, [[l14-5-off-airport-landings-and-ditching]] covers choosing where to put the airplane down. Before this, [[l14-3-partial-power-loss-and-fuel-problems]] covered an engine that loses power without catching fire.
