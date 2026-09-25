---
slug: l5-4-engine-failure-and-forced-landings
code: L5.4
module: m5-slow-flight-stalls-emergencies
order: 4
priority: P0
title: Engine failure and forced landings
summary: If the engine quits, fly the airplane first — best glide, best field, checklist, declare, execute.
estimatedMinutes: 20
prerequisites: [l5-2-stalls-power-off-and-power-on]
objectives:
  - Apply the ABCDE flow — Airspeed, Best field, Checklist, Declare, Execute.
  - Estimate how far you can glide.
  - Fly to a landable field and set up an approach using key points.
challenges: [c5-5-engine-failure]
resources: [afh-ch18, aopa-asi-engine-failure]
published: false
lastVerifiedAt: null
simVersion: null
---

## Rare, but be ready

Modern engines rarely fail, but if one does, the first few seconds matter most. The Skyhawk glides well. With a plan you practiced in advance, an engine failure is something you can manage.

:::callout{type="safety"}
Fly the airplane first. An airplane without an engine is still a glider, and it will fly as well as you let it.
:::

## A: Airspeed

**Immediately** pitch for best glide, **{{vspeed.vg}}**, and trim for it. At cruise speed you'll need to raise the nose to slow down; hold your altitude while the speed bleeds off, then lower the nose to hold {{vspeed.vg}}.

Best glide gives you the most distance for each foot of altitude. Flying faster or slower than best glide means you reach the ground sooner.

:::quiz{id="l5-4-q1" type="single"}
What's the best glide speed?

- [ ] {{vspeed.vy}}
- [x] {{vspeed.vg}}
- [ ] {{vspeed.vs1}}
- [ ] {{vspeed.va}}

---

Best glide is **{{vspeed.vg}}**. Set it and trim for it first.
:::

## B: Best field

Pick somewhere to land that you can definitely reach. A good field is:

- **Into the wind**, if you can.
- **Long and flat**, like a field, road or airport.
- **Free of obstacles**, such as power lines, trees and ditches.

A planning figure: the Skyhawk glides about **1.5 nm for every 1,000 ft** above the ground. Pick a field well inside that range, and turn toward it straight away.

:::callout{type="verify"}
Author note: check the glide figure against the POH glide ratio ({{aircraft.glideRatio}}) and in the sim.
:::

## C: Checklist

If you have time, try to restart the engine:

::checklist{slug="engine-failure-in-flight"}

## D: Declare

Tell someone. Use the frequency you're on, or **121.5 MHz** (the emergency frequency), and set the transponder to **7700**.

> "Mayday, mayday, mayday, Skyhawk 123, engine failure, 5 miles east of Livermore, 2,500 feet, landing in a field."

:::quiz{id="l5-4-q2" type="single"}
What transponder code means an emergency?

- [ ] 1200
- [ ] 7500
- [ ] 7600
- [x] 7700

---

**7700** means an emergency. (7600 is a radio failure, and 1200 is normal VFR.)
:::

## E: Execute

Plan the approach using **key points**, just like a traffic pattern:

- Aim for a **high downwind**, so you have altitude to spare.
- Turn **base** when you can see you'll make the field.
- **Flaps only when the field is made.** Flaps add drag; once they're out, you can't stretch the glide.
- Before touchdown, **secure the engine**: mixture cut-off, fuel off, ignition off, and master off once the flaps are set.

It's easier to lose extra altitude (with flaps or a slip) than to find altitude you don't have. If in doubt, stay high.

## Engine failure after takeoff

If the engine fails shortly after takeoff, **land roughly straight ahead**, with only small turns to avoid obstacles. Turning back to the runway at low altitude takes more height than most pilots expect, and a steep turn at low speed can stall and spin.

:::quiz{id="l5-4-q3" type="single"}
The engine fails at 400 ft after takeoff. Do you turn back to the runway?

- [ ] Yes, always
- [x] No, land roughly straight ahead
- [ ] Yes, with a steep 60° turn
- [ ] Only if there's a crosswind

---

**No.** At 400 ft there isn't enough altitude for a safe turn back. Land ahead, with small turns to avoid obstacles.
:::

## Practicing in the sim

You can fail the engine in two ways:

- The sim's **failures** menu, if it offers engine failures.
- **Mixture to idle cut-off** at a random moment. The challenge page gives you a timer that beeps when it's time.

:::callout{type="verify"}
Author note: check the MSFS 2024 failure menu options for engine failures.
:::

:::callout{type="sim"}
Real engine failures are frightening. In the sim, you can pause, but don't. Practicing without pausing trains you to make decisions under pressure.
:::
