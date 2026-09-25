---
slug: l4-3-normal-approach-and-landing
code: L4.3
module: m4-takeoffs-patterns-landings
order: 3
priority: P0
title: Normal approach and landing
summary: Fly a stabilized approach, judge the glide path, and flare to a gentle touchdown on the centerline.
estimatedMinutes: 25
prerequisites: [l4-2-the-traffic-pattern]
objectives:
  - Fly a stabilized approach, configured, on speed and on the glide path by 300 ft AGL.
  - Use the aiming point and the PAPI to judge the glide path.
  - Round out, flare and touch down on the main wheels near the touchdown zone.
challenges: [c4-3-full-stop-landing, c4-7-three-circuit-session]
resources: [afh-ch9, boldmethod-landing]
published: false
lastVerifiedAt: null
simVersion: null
---

## The stabilized approach

A good landing starts with a good approach. By **300 ft above the ground** on final, the approach must be **stabilized**:

- **Configured.** Full flaps (30°), before-landing checklist done.
- **On speed.** {{vspeed.approach}}, within about ±5 knots.
- **On the glide path.** Neither high nor low.
- **On the centerline.** Lined up with the runway.
- **Power set.** Small adjustments only.

If any of these isn't true at 300 ft, **go around**. It's the rule professional pilots use, and it prevents most landing accidents.

::checklist{slug="before-landing"}

:::quiz{id="l4-3-q1" type="single"}
You're not stabilized at 300 ft AGL on final. What do you do?

- [ ] Push the nose down to catch up
- [ ] Land anyway and brake hard
- [x] Go around
- [ ] Add flaps

---

**Go around.** An unstabilized approach leads to a bad landing. A go-around is a normal maneuver, not a failure.
:::

## The aiming point

Pick a spot on the runway where you want the approach to end, a little before your planned touchdown point. Watch it in the windshield:

- If it **stays still**, you're on the right path.
- If it **moves up**, you're going to land short (you're too low).
- If it **moves down**, you'll land long (you're too high).

## The PAPI

Many runways have a **PAPI**: four lights beside the runway that show your glide path.

| Lights         | Meaning           |
| -------------- | ----------------- |
| 4 white        | Too high          |
| 3 white, 1 red | Slightly high     |
| 2 white, 2 red | On the glide path |
| 1 white, 3 red | Slightly low      |
| 4 red          | Too low           |

Some airports have an older two-bar **VASI** instead: red over white means on path. A memory aid: "red over white, you're all right".

:::callout{type="verify"}
Author note: check which KLVK and KTCY runways have a PAPI or VASI, in reality and in the sim.
:::

:::quiz{id="l4-3-q2" type="single"}
Two white lights and two red lights on the PAPI mean what?

- [ ] Too high
- [x] On the glide path
- [ ] Too low
- [ ] The runway is closed

---

**Two white, two red: on the glide path.** More white means high, more red means low.
:::

## Pitch and power on final

A useful simplification for final approach:

- **Pitch controls airspeed.** Too fast? Raise the nose slightly. Too slow? Lower it.
- **Power controls the glide path.** Too low? Add a little power. Too high? Reduce it.

Make small corrections, and make them early.

## The round-out and flare

1. At about **10–20 ft** above the runway, start the **round-out**: gently raise the nose to stop the descent.
2. **Look down the runway**, toward the far end, not over the nose. The runway's edges and how fast they're converging tell you your height.
3. **Flare.** As the airplane slows, keep raising the nose to hold it just off the runway. The airplane should settle gently.
4. **Main wheels first**, with the nose held up. Then let the nose wheel down gently.

:::callout{type="sim"}
A flat screen gives no depth perception, which makes judging the flare harder than in real life. Watch the runway edges spread apart as you get lower, and look far down the runway. It helps to find a camera height that shows enough runway over the nose.
:::

:::quiz{id="l4-3-q3" type="single"}
Where should you look during the flare?

- [ ] Straight over the nose at the runway just ahead
- [ ] At the airspeed tape
- [x] Toward the far end of the runway
- [ ] Out the side window

---

Look **toward the far end of the runway**. Looking just ahead of the nose makes the ground rush past and hides your height.
:::

## After touchdown

- **Keep straight** with the rudder.
- **Brake gently** once the nose wheel is down.
- **Slow to taxi speed**, then clear the runway at a taxiway.

::checklist{slug="normal-landing"}

## Common errors

| Error                        | Result                 | Fix                                           |
| ---------------------------- | ---------------------- | --------------------------------------------- |
| Approach too fast            | Floats down the runway | Hold {{vspeed.approach}} on final             |
| Flare too high               | Drops onto the runway  | Round out lower; go around if it's a big drop |
| Flare too late or too little | Bounces                | Start the round-out earlier                   |
| Looking over the nose        | Misjudged height       | Look at the far end                           |

If you **bounce**, don't push the nose down. Add full power and **go around**. That's the next lesson.
