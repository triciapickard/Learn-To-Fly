---
slug: l14-5-off-airport-landings-and-ditching
code: L14.5
module: m14-failures-emergencies
order: 5
priority: P1
title: Off-airport landings and ditching
summary: How to choose a field by surface, slope, length and wind when there is no runway, and what a water landing looks like if the coast is all you have.
estimatedMinutes: 15
prerequisites: [l14-3-partial-power-loss-and-fuel-problems]
objectives:
  - Choose a landing field by surface, slope, length, wind and obstacles, and explain the order of priority.
  - 'Describe the key points of a ditching: direction, configuration, touchdown attitude and getting out.'
challenges: []
resources: [afh-ch18]
published: false
lastVerifiedAt: null
simVersion: null
---

## There is no runway

Every forced landing so far has ended on a field you chose in a hurry. This lesson slows that choice down: what makes a field good, what makes it a trap, and what to do when the only flat thing in glide range is the Pacific Ocean. Modules 5 and 14 gave you the flying; this is the judgment that goes in front of it.

:::callout{type="safety"}
The goal is not to save the airplane but to walk away. A slow, wings-level arrival in a bad field is survivable; a stall from 50 ft while stretching toward a better one is not.
:::

## Choosing a field

Pilots use a short priority list. Each line beats the ones below it when they conflict.

| Priority                | Look for                                                | Why                                                                     |
| ----------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| 1. Reachable            | Inside the glide ring with altitude to spare            | The best field you cannot reach is not a field                          |
| 2. Wind                 | Land into the wind if you can                           | Lower groundspeed; energy at touchdown falls with the square of speed   |
| 3. Length and obstacles | Long enough; no wires, trees or ditches on the approach | Wires are nearly invisible; look for the poles                          |
| 4. Surface              | Firm and smooth: pasture, a dry field, a dirt road      | Plowed fields and tall crops flip airplanes; land **along** the furrows |
| 5. Slope                | Flat, or uphill                                         | Uphill shortens the roll; downhill can make it endless                  |

Trade-offs are the whole game. A short field into the wind usually beats a long one with a tailwind; a slightly uphill field with a clear approach beats a flat one behind power lines. Roads carry wires, signs and traffic. Use the glide ring to shortlist, then apply the table to what is inside it.

::widget{name="glide-range" mode="explore"}

:::callout{type="tip"}
Read **color and texture**. Dark, even green is often pasture: good. Bright, striped or tall is a crop: bad. Brown with ridges is plowed: land along the ridges, never across. A field that shines is flooded.
:::

:::quiz{id="l14-5-q1" type="single"}
Two fields are in glide range. Field A is long, flat, downwind with a 10 kt tailwind and a line of poles across the approach. Field B is shorter, slightly uphill, into the wind and clear. Which do you pick?

- [ ] Field A: length matters most
- [x] Field B: into the wind, clear approach, uphill helps
- [ ] Neither; glide to the nearest road
- [ ] Field A, but land across the poles diagonally

---

Field B wins on three counts: into the wind, no wires on the approach, and a slight uphill that shortens the roll. Poles mean wires, the most common thing pilots hit on a forced landing.
:::

## Flying the arrival

Fly it like the forced landing in [[l5-4-engine-failure-and-forced-landings]]: high key over the field, downwind with altitude in hand, base when you can see you will make it, flaps only once the landing is certain. Three additions for a rough field:

1. **Touch down as slowly as you safely can**, full flaps, nose high. Do not stall it in.
2. **Doors unlatched** before touchdown so they cannot jam.
3. **Secure the airplane** before the flare: mixture idle cut-off, fuel off, magnetos off, master off once the flaps are set.

:::callout{type="verify"}
Check the field-selection priorities and rough-field technique against AFH Chapter 18 ("Emergency approaches and landings" and "Terrain selection"). Confirm the POH Section 3 order for securing the airplane before a forced landing, and the recommended touchdown technique. Note whether the sim models a soft field well enough to score a touchdown.
:::

## Ditching

Fly from Half Moon Bay toward Monterey and the glide ring is mostly water. A planned landing on water is **ditching**, and the Skyhawk, with its fixed gear, will almost certainly flip as the wheels dig in. That is survivable if you have thought about it in advance. This section is awareness, not a skill you will be scored on.

| Decision         | Guidance                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| Direction        | Land **parallel to the swells**, not into their faces. In a strong wind with small waves, land into the wind |
| Configuration    | Full flaps, power off, slowest controllable speed                                                            |
| Attitude         | Nose up, like a soft-field landing. Do not dive in, and do not stall high above the water                    |
| Before touchdown | Doors unlatched, belts tight, life vests on but **not** inflated inside the cabin                            |
| After            | Wait for the motion to stop, find the door, get out, then inflate the vest                                   |

Judging height over smooth water is hard: use the altimeter and a gentle, steady descent rate rather than flaring by eye. Land near a boat or the shore if you can, so someone sees you.

:::callout{type="real-world"}
No one practices ditching in an airplane, and this lesson will not make you ready for it. A real coastal pilot carries life vests, flies high enough to keep the shore in glide range, and takes a water-survival course if they cross water often. In the sim a ditching ends when the screen goes blue; in the real airplane it ends with a swim in cold water, which is the part that hurts people.
:::

:::callout{type="verify"}
Verify the ditching guidance against AFH Chapter 18 ("Ditching"): swell direction rule, touchdown attitude, and the fixed-gear flip-over note. Check whether MSFS 2024 allows a water landing in the Skyhawk at all (it may crash or reset). If not, keep this section as awareness only and say so in the sim callout.
:::

:::quiz{id="l14-5-q2" type="single"}
You must ditch in a long ocean swell with a light wind. Which direction do you land?

- [x] Parallel to the swells
- [ ] Directly into the wind, whatever the swells are doing
- [ ] Into the face of the swells, to stop quickly
- [ ] Downwind, to be nearer the shore

---

Parallel to the swells. Hitting the face of a swell is like hitting a wall; along it is a long, smoother surface. Only in a strong wind with small waves does landing into the wind take priority.
:::

## Practice and next steps

Two things to carry forward:

1. Reachable, into wind, long and clear, firm surface, flat or uphill, in that order.
2. Ditching: parallel to the swells, slow, nose up, doors unlatched, vests on but not inflated until you are out.

**Practice.** This lesson feeds the `memory-items` deck: the field priority list and the securing items.

**Fly it.** Challenge C14.6 "Surprise failure" (P1) picks a random Module 14 failure on any route, and the field choice is part of what it scores. Behind you, [[l14-4-fire-smoke-and-emergency-descent]] is the emergency most likely to end in a field. Module 15 moves on to airspace and ATC with [[l15-1-class-b-and-class-c-operations]].
