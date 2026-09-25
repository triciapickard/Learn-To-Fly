---
slug: l1-4-speeds-limits-and-checklists
code: L1.4
module: m1-meet-the-skyhawk
order: 4
priority: P0
title: Speeds, limits and checklists
summary: Learn the Skyhawk's key speeds, read the airspeed color bands and use checklists like a professional.
estimatedMinutes: 20
prerequisites: [l1-3-engine-fuel-and-electrical-systems]
objectives:
  - State the key V-speeds (Vr, Vx, Vy, Vg, Vfe, Vno, Vne, Vso, Vs1) and what each one means.
  - Identify the airspeed color bands and what each band allows.
  - Explain why pilots use checklists and the difference between read-do and do-verify.
challenges: [c1-1-cockpit-scavenger-hunt]
resources: [phak-ch9, afh-ch1, msfs-checklist]
published: false
lastVerifiedAt: null
simVersion: null
---

## What a V-speed is

Pilots fly by numbers. A **V-speed** is a named airspeed with a job: the speed to lift the nose on takeoff, the speed that climbs fastest, the speed to glide farthest if the engine stops.

The "V" comes from "velocity", and the letters after it say what the speed is for. You will see them written as Vy or V_Y. They are always **indicated airspeed in knots (KIAS)** — the number on your airspeed indicator — so you never need to calculate them in flight.

You do not need to memorize them all today. Learn the four you will use on every flight first: rotate at {{vspeed.vr}}, climb at {{vspeed.vy}}, glide at {{vspeed.vg}} and approach at about {{vspeed.approach}}.

:::callout{type="verify"}
Author note: check every speed in this lesson against the MSFS 2024 in-sim checklist for the G1000 Skyhawk before publishing (Section 54).
:::

## The Skyhawk's key speeds

| V-speed | What it means                                             | KIAS           |
| ------- | --------------------------------------------------------- | -------------- |
| V_SO    | Stall speed with full (30°) flaps                         | {{vspeed.vso}} |
| V_S1    | Stall speed with flaps up                                 | {{vspeed.vs1}} |
| V_R     | Rotate: lift the nose on takeoff                          | {{vspeed.vr}}  |
| V_X     | Best angle of climb: most height per distance             | {{vspeed.vx}}  |
| V_Y     | Best rate of climb: most height per minute                | {{vspeed.vy}}  |
| V_G     | Best glide: farthest distance with the engine off         | {{vspeed.vg}}  |
| V_FE    | Maximum speed with more than 10° of flaps                 | {{vspeed.vfe}} |
| V_NO    | Maximum structural cruising speed (smooth air above this) | {{vspeed.vno}} |
| V_NE    | Never exceed                                              | {{vspeed.vne}} |

A memory hook: **X is for eXtra steep** (best angle), **Y is for Yes, climb fast** (best rate). You rotate at 55, climb at 74 and glide at 68.

:::quiz{id="l1-4-q1" type="single"}
What is Vy, the best rate of climb speed, in the Cessna 172S?

- [ ] {{vspeed.vx}}
- [x] {{vspeed.vy}}
- [ ] {{vspeed.vg}}
- [ ] {{vspeed.vr}}

---

Vy is {{vspeed.vy}}. It gives the most altitude per minute, so it is the normal climb speed. Vx ({{vspeed.vx}}) gives the most altitude per distance, for clearing obstacles.
:::

:::quiz{id="l1-4-q3" type="single"}
Your engine stops at 3,000 ft. Which speed should you fly to glide as far as possible?

- [x] {{vspeed.vg}}
- [ ] {{vspeed.vy}}
- [ ] {{vspeed.vso}}
- [ ] {{vspeed.vno}}

---

Best glide speed is {{vspeed.vg}} with the flaps up. Flying faster or slower than best glide shortens the distance you can reach.
:::

## Reading the airspeed color bands

The airspeed indicator shows the important limits as colored bands, so you can check them at a glance:

- **White arc** ({{vspeed.vso}} to {{vspeed.vfe}}): the flap operating range. Use more than 10° of flaps only inside it.
- **Green arc** ({{vspeed.vs1}} to {{vspeed.vno}}): the normal operating range.
- **Yellow arc** ({{vspeed.vno}} to {{vspeed.vne}}): caution. Only in smooth air, and with gentle control inputs.
- **Red line** ({{vspeed.vne}}): never exceed.

On the G1000 these bands appear as colored strips along the airspeed tape instead of arcs. Drag the needle below, or use the slider or arrow keys, and watch which band you are in.

::widget{name="airspeed-indicator" mode="explore"}

:::quiz{id="l1-4-q2" type="single"}
What does the top of the white arc mark?

- [ ] The stall speed with flaps up
- [x] The maximum speed with flaps extended beyond 10°
- [ ] The best glide speed
- [ ] The maximum structural cruising speed

---

The top of the white arc is Vfe, {{vspeed.vfe}}: the fastest you may fly with more than 10° of flaps. With 10° of flaps you may fly up to {{vspeed.vfe10}}.
:::

:::callout{type="tip"}
Say the speeds out loud on every takeoff: "Airspeed alive… 55, rotate." Calling them builds the habit of watching them.
:::

## Maneuvering speed changes with weight

**Maneuvering speed (Va)** is the fastest speed at which you can make a full, abrupt control movement — or fly through a strong gust — without overstressing the airplane. The wing stalls before the structure is overloaded.

Unlike most V-speeds, Va gets **lower as the airplane gets lighter**. A lighter airplane is pushed around more easily by the same gust, so it reaches its load limit at a lower speed.

| Weight             | Maneuvering speed |
| ------------------ | ----------------- |
| 2,550 lb (maximum) | 105 KIAS          |
| 2,200 lb           | 98 KIAS           |
| 1,900 lb           | 90 KIAS           |

In turbulence, slow down to below Va for your weight. Solo with 75% fuel, the Skyhawk weighs roughly 2,100–2,200 lb, so use about 95 KIAS.

## Why professional pilots use checklists

In 1935 Boeing's new Model 299 bomber crashed on takeoff during an evaluation flight. The experienced crew had forgotten to release the control lock. The airplane was not too hard to fly — it was too complex to fly from memory. The response was a simple card of steps for each phase of flight: the pilot's checklist.

Checklists are used in two ways:

- **Read-do:** read an item, then do it. Used for procedures you do rarely, such as starting the engine or handling an emergency when time allows.
- **Do-verify:** do the items from memory in a set physical order (a **flow**), then read the checklist to verify nothing was missed. Used for busy phases such as before landing.

Either way, the checklist catches the one item that is easy to forget on a busy day.

:::quiz{id="l1-4-q4" type="single"}
In a do-verify checklist, when do you read the checklist?

- [ ] Before touching anything, reading one item at a time
- [x] After doing the flow, to verify every item was done
- [ ] Only in an emergency
- [ ] Only if the instructor asks for it

---

In do-verify, you complete the flow from memory first, then read the checklist to catch anything you missed. Read-do is the opposite: read one item, then do it.
:::

## The in-sim checklist and ours

MSFS 2024 includes a checklist for the Skyhawk that you can open from the toolbar. It follows the real procedures closely, and some items can highlight the control you need.

Learn-To-Fly's checklists are a **simplified summary in our own words**, written to match the sim. They are great for learning the flow of each phase, but the in-sim checklist is your reference while flying.

:::callout{type="sim"}
The in-sim checklist can auto-complete items for you. Turn that assistance off (Lesson 0.2): the point is that you check each item yourself.
:::

## Try a checklist

Run the before-starting-engine checklist below. Press Space or tap an item to tick it; Backspace unticks. Try it once now, then keep it open next to the sim the first time you start the engine.

::checklist{slug="before-starting-engine"}
