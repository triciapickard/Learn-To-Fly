---
slug: l14-3-partial-power-loss-and-fuel-problems
code: L14.3
module: m14-failures-emergencies
order: 3
priority: P0
title: Partial power loss and fuel problems
summary: Troubleshoot a rough or weak engine with a short flow, tell fuel starvation from fuel exhaustion, and decide when to stop fixing and start landing.
estimatedMinutes: 20
prerequisites: [l5-4-engine-failure-and-forced-landings]
objectives:
  - Fly the engine-roughness troubleshooting flow in order (fuel, mixture, magnetos, auxiliary pump).
  - Explain the difference between fuel starvation and fuel exhaustion and what each one looks like.
  - Decide between continuing, landing at a nearby airport and a forced landing, using the glide range as a planning tool.
challenges: []
resources: [afh-ch18, phak-ch7, aim]
published: false
lastVerifiedAt: null
simVersion: null
---

## Why partial power is hard

In [[l5-4-engine-failure-and-forced-landings]] the engine stopped, so the decision was simple: best glide, best field, go. This lesson is the harder case. The engine coughs, runs rough, or sags to 1,800 RPM and stays there. It is still making power, just not enough, and you have no idea whether it will recover or stop in 30 seconds.

Partial power is harder than no power because it tempts you to think, "It's still running, I can probably make it home." Pilots have flown past three good airports on a sick engine and then landed in a field within sight of the fourth. This lesson teaches a short troubleshooting flow, followed by an early decision about where to land.

:::callout{type="safety"}
A partial power loss is an engine failure that has not finished yet. Assume the engine will stop before you reach the ground, and be happy to be wrong.
:::

## First, fly the airplane

Before you touch a switch, set a speed and trim for it.

- With some power, hold altitude if you can, or accept a slow descent near best glide, {{vspeed.vg}}. It is also the speed you want if the engine quits during your troubleshooting.
- With power mostly gone, pitch for {{vspeed.vg}} and start the forced-landing plan from Course 1 alongside the flow below.

Then look outside. Note where you are, what is below you and which way the nearest airport is. Thirty seconds of flying and looking is time well spent.

## The troubleshooting flow

Most partial power losses are fuel, air or spark. The flow checks each one, from most likely to least.

:::callout{type="memory"}
**Engine roughness or partial power loss (simplified for the sim)**

1. **Fly the airplane.** Best glide, or the best speed for the power you have. Trim.
2. **Fuel selector BOTH.** A tank you did not mean to be on may be empty.
3. **Auxiliary fuel pump ON.** If the engine-driven pump is weak, the electric one backs it up.
4. **Mixture as required.** Rich first; if roughness came on after leaning, that is the first suspect.
5. **Magnetos: check L, R, BOTH.** If one magneto has failed, the engine may run smoother on the other alone. Leave it on whichever runs best.
6. **Check the engine instruments.** Fuel flow, fuel quantity, oil pressure, oil temperature, EGT and CHT. They tell you what kind of problem you have.
7. **Decide.** Power restored: land at the nearest suitable airport anyway and get it looked at. Power still partial: nearest suitable airport. Power gone: forced landing.

:::

Each step takes a few seconds. Say what you are doing aloud. In a real airplane the person next to you needs to know what you are about to touch.

:::callout{type="verify"}
Desk-verified 2026-10-13: the 172S is fuel-injected with an engine-driven pump backed by an electric auxiliary pump, so there is no carburetor heat item (PHAK Ch 7, Fuel-Pump System and Fuel Injection Systems). POH check: Section 3 "Engine failure during flight" and "Rough engine operation or loss of power": the order of fuel selector, auxiliary pump and mixture items, whether each magneto is tried, and anything left out (primer, alternate air); match the in-sim checklist wording. Sim check: if the sim's classic variant is carbureted, add carb heat as the first item in a classic callout.
:::

:::quiz{id="l14-3-q1" type="order"}
The engine starts running rough at 3,500 ft. Put the flow in order.

1. Set best glide or the best speed for the power available, and trim
2. Fuel selector BOTH, auxiliary fuel pump ON
3. Mixture rich (then as required)
4. Magnetos L, R, BOTH, leave on the best
5. Read the engine instruments and decide where to land

---

Fly first, then fuel (selector and pump), mixture, magnetos, then read the instruments and decide. The whole flow takes under a minute.
:::

## Fuel starvation vs fuel exhaustion

Two fuel problems look the same from the cockpit and have very different fixes.

| Problem             | Meaning                                                   | What you see                                                                                   | The fix                          |
| ------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------- |
| **Fuel starvation** | There is fuel on board, but it is not reaching the engine | One tank shows fuel, selector on the other (empty) tank; fuel flow drops; surges and roughness | Selector BOTH, auxiliary pump ON |
| **Fuel exhaustion** | You have used all the fuel on board                       | Both gauges near empty, fuel flow falling to zero, engine winding down                         | None. Forced landing             |

You can fix starvation in seconds, so the fuel selector is step 2, and Course 1 taught you to take off and land on BOTH. You prevent exhaustion on the ground, before the flight, with the planning from [[l9-4-leaning-the-mixture-and-fuel-management]]. In the air, one gauge empty and the other at a quarter is a starvation clue. Both empty is the end of the flow and the start of a forced landing.

:::quiz{id="l14-3-q2" type="single"}
You have been cruising with the fuel selector on LEFT for the past 90 minutes. The engine surges and runs rough. The left gauge reads near empty. The right reads half. What is the most likely problem and the first fix?

- [ ] Fuel exhaustion; set up a forced landing immediately
- [x] Fuel starvation from the empty left tank; selector to BOTH and auxiliary pump ON
- [ ] A failed magneto; switch to the right magneto
- [ ] Carburetor ice; apply carburetor heat

---

There is fuel on board (half a tank on the right) but the engine is feeding from a tank that just ran dry. That is starvation. BOTH and the pump should restore power within seconds. The 172S has no carburetor, so carb ice is not a candidate.
:::

## Where can you reach?

With partial power, you need to know which airport you can reach and what happens if the engine quits on the way. The glide ring from Course 1 answers the second half. It shows where you could land from your altitude with no engine at all. An airport inside the ring is a good choice. Choosing one outside it means betting on the engine.

::widget{name="glide-range" mode="explore"}

Use it like this:

1. Note your height above the ground and find the ring.
2. If an airport is inside it, head there now and troubleshoot on the way.
3. If no airport is inside it, pick the best field inside the ring and fly toward it, using the partial power to hold altitude while the ring moves with you. If the engine keeps running, an airport may come inside the ring later. If not, you are already heading for a field.

The ring is the Skyhawk's clean glide, about {{aircraft.glideRatio}}. A windmilling propeller glides a little worse, so stay comfortably inside the ring, not on its edge.

:::callout{type="tip"}
The MFD's NRST page lists the nearest airports with distance and bearing. Press it the moment the engine first stumbles. It costs nothing and shows your options.
:::

## When to stop troubleshooting and land

The flow takes under a minute. If it fixes the problem, you still land at the nearest suitable airport, because a problem that fixed itself can come back. If it does not, you stop troubleshooting and fly the plan. Do not go back and run the whole flow again.

:::callout{type="decision"}
At 3,500 ft between Livermore and Tracy the engine drops to 1,800 RPM and the flow changes nothing. Tracy is 6 nm ahead, inside the glide ring. Livermore is 9 nm behind, outside it, with a tower and longer runways. Choose Tracy, because an airport you can glide to beats a better one you cannot. Tell someone ("Pan-Pan" if the engine is running, "Mayday" if not), squawk 7700 unless you are already talking to ATC on a discrete code, and fly a high, tight pattern as if the engine were already gone.
:::

Partial power changes your pattern. Stay high and close in, never drag a long final on an engine that might quit, add flaps only when the runway is made, and carry extra altitude you can lose with a slip.

:::quiz{id="l14-3-q3" type="single"}
The troubleshooting flow restored full power. You are 10 nm from your destination and 4 nm from a small non-towered airport. What now?

- [ ] Continue to the destination; the problem is fixed
- [x] Land at the nearest suitable airport and have the engine checked
- [ ] Shut the engine down to save it and glide to the nearest airport
- [ ] Climb as high as possible and continue

---

A problem that cleared on its own can come back, so land at the nearest suitable airport. Never shut down a running engine, because even partial power gives you more options.
:::

## In the sim

By default the challenge works the way an instructor would. Challenge C14.4 "Rough running engine" sends an event card at a random time. It tells you to pull the mixture back until the engine runs rough and leave it, or to reduce the throttle to the RPM on the card and not touch it again. From there the flow, the decision and the landing are yours.

:::callout{type="sim"}
Pulling the mixture back to simulate roughness means step 4 (mixture rich) would "fix" the failure, so the card tells you not to touch it. Say "mixture, rich" aloud and move on. The point is the flow and the decision.
:::

:::callout{type="verify"}
Sim check: which engine failure options the MSFS 2024 failure menu offers for the Skyhawk (partial power, rough running, magneto, fuel pump), the menu path and sim version, and whether the sim models fuel starvation with the selector on an empty tank.
:::

## Practice and next steps

To carry forward:

1. Fly first, then fuel, mixture, magnetos, instruments, decide. Under a minute.
2. Starvation is fuel that is not reaching the engine (selector to BOTH fixes it). Exhaustion is no fuel at all.
3. Pick an airport inside the glide ring, and land even if the engine recovers.

**Practice.** This lesson feeds the `memory-items` deck: the troubleshooting flow and the starvation vs exhaustion pair.

**Fly it.** Challenge C14.4 "Rough running engine" puts the failure between Livermore and Tracy. Next, [[l14-4-fire-smoke-and-emergency-descent]] covers the emergency where you want the engine to stop.
