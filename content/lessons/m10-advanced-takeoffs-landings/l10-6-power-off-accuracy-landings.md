---
slug: l10-6-power-off-accuracy-landings
code: L10.6
module: m10-advanced-takeoffs-landings
order: 6
priority: P1
title: Power-off accuracy landings
summary: Pull the power abeam the aiming point and land within 200 ft beyond it, with flaps and slips as your only throttle.
estimatedMinutes: 15
prerequisites: [l10-2-slips, l5-4-engine-failure-and-forced-landings]
objectives:
  - Fly a power-off 180 from abeam the aiming point to a touchdown within 200 ft beyond it without adding power.
  - Manage energy with flaps and slips so that you arrive neither short nor long.
  - Judge the base turn from the key position and correct early.
challenges: []
resources: [afh-ch9, afh-ch18, faa-acs-commercial]
published: false
lastVerifiedAt: null
simVersion: null
---

## Why practice the power-off 180

In [[l5-4-engine-failure-and-forced-landings]] you learned the flow for an engine failure and how to pick a field. That lesson could not give you a feel for how far the Skyhawk glides from pattern altitude, or how to hit a spot with no engine to fix a mistake. The **power-off 180** teaches both. Abeam your aiming point on downwind, you bring the throttle to idle and leave it there. The goal is a touchdown within 200 ft beyond the aiming point.

Commercial pilot candidates fly this on their checkride, where the standard is a touchdown on or within 200 ft beyond the chosen point, with no side drift and the airplane aligned with the centerline. For you it is optional, and it is the clearest test of judgment in this module.

## The key position

The maneuver starts at the **key position**: abeam the aiming point on downwind, at pattern altitude. Power to idle, then pitch and trim for best glide, {{vspeed.vg}}, flaps up.

| Step                      | Action                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------- |
| 1. Abeam the aiming point | Throttle to idle. Pitch for {{vspeed.vg}}. Trim.                                                      |
| 2. Judge the wind         | A headwind on final means turn base sooner. A tailwind on downwind is blowing you away from the field |
| 3. Base turn              | Begin when the aiming point is roughly 45° behind the wing, and sooner in any wind                    |
| 4. Base leg               | Flaps 10° only if you are sure you will make it. Keep {{vspeed.vg}} until the field is made           |
| 5. Final                  | Add flaps as needed and slow to {{vspeed.approach}} once the field is certain                         |
| 6. Touchdown              | Within 200 ft beyond the aiming point, with no power added                                            |

The glide-range widget shows how little margin pattern altitude gives. At {{aircraft.glideRatio}}, each 1,000 ft above the ground gives about 1.5 nm of glide in still air, and a normal pattern uses most of it.

::widget{name="glide-range" mode="explore"}

:::quiz{id="l10-6-q1" type="single"}
Where does the power-off 180 begin?

- [ ] At the end of the downwind leg, where you would normally turn base
- [x] Abeam the aiming point on downwind, at pattern altitude
- [ ] On final at 500 ft AGL
- [ ] At the key position on base

---

It begins abeam the aiming point on downwind. You bring the power to idle there, pitch for best glide, and fly the rest of the pattern without the engine.
:::

## Energy management with flaps and slips

With the throttle at idle, you can lose energy but you cannot gain it. So **stay high and slightly tight**, and use up the extra height on the way down:

| Tool                           | Effect                                                                         | When                                            |
| ------------------------------ | ------------------------------------------------------------------------------ | ----------------------------------------------- |
| Flaps 10°, 20°, 30°            | A steeper descent at the same speed. Each notch is permanent, so add them late | Only once the field is made                     |
| Forward slip ([[l10-2-slips]]) | A big, adjustable increase in descent rate that can be taken out again         | Final, when flaps alone will not fix it         |
| Turn geometry                  | A tighter base turn shortens the path, and a wider one lengthens it            | Downwind and base                               |
| Airspeed                       | Faster than best glide shortens the glide. Slower is worse and dangerous       | Never slower than {{vspeed.vg}} until the flare |

The rule from the forced-landing lesson still applies. Add flaps only when the field is made. That usually means no flaps until you roll out on final and see the aiming point sitting still in the windshield. If you are long, flaps and a slip bring you down. If you are short, nothing brings you back, so plan high.

:::quiz{id="l10-6-q2" type="single"}
On final in a power-off 180 you are clearly going to land long. Which correction is best?

- [ ] Reduce the airspeed below best glide to steepen the descent
- [ ] Add a little power to extend the pattern
- [x] Add flaps and, if needed, a forward slip
- [ ] Accept this attempt and extend the downwind next time

---

Add flaps and a slip. Both add drag without adding power. Slowing below best glide reduces control and shortens the glide. Adding power fails the maneuver.
:::

## Judging the base turn

Most attempts succeed or fail at the base turn. Turn too early and you arrive high, which the slip and flaps can usually fix. Turn too late and you arrive low and short, which nothing fixes. So lean toward turning early. If in doubt, turn sooner. In a strong wind, fly a continuous turn from downwind to final rather than a squared-off pattern.

Use these cues:

- **The aiming point in the window.** On base it should sit a little ahead of the wing tip, not behind it.
- **Altitude at the base turn.** From a 1,000 ft AGL pattern, about 600–700 ft AGL turning base and 400 ft AGL rolling out on final is typical for a glide. Note your own numbers.
- **The wind.** Judge it on downwind from the groundspeed and drift, before you pull the power.

:::callout{type="tip"}
Fly the first three attempts without correcting and note where you land. The touchdown error tells you the base-turn correction more reliably than any rule. Then adjust one thing at a time.
:::

:::callout{type="verify"}
Sim check: fly the glide from a 1,000 ft AGL pattern and record the altitudes at the base turn and the final roll-out (the figures above are estimates); the Tracy pattern is 800 ft AGL (994 ft MSL in `airports.yaml`), so the C10.6 numbers will be lower. Screenshot for the shot list: "power-off 180, key position abeam the numbers, Tracy".
:::

:::quiz{id="l10-6-q3" type="single"}
You are unsure whether you are high enough to make the field from downwind. What is the safer error?

- [x] Turn base early and arrive a little high
- [ ] Extend the downwind to be sure of a square pattern
- [ ] Add full flaps now to steepen the descent
- [ ] Slow to 5 knots below best glide to stretch the glide

---

Turn early. You can lose extra height with flaps and a slip. A short approach cannot be fixed without the engine, and slowing below best glide makes it worse.
:::

## Practice and next steps

To carry forward:

1. Key position: abeam the aiming point, throttle idle, {{vspeed.vg}}.
2. Plan high and slightly tight. Spend the extra height with flaps and a slip.
3. In doubt, turn base early. Nothing fixes a short approach.

**Practice.** This lesson feeds the `limits-and-speeds` flashcard deck (best glide and the "flaps when the field is made" rule).

**Fly it.** Challenge C10.6 "Power-off 180" at Tracy scores the touchdown distance and that no power was added. This is the last lesson of Module 10. The weather module begins with [[l11-1-weather-theory-air-masses-fronts-and-stability]].
