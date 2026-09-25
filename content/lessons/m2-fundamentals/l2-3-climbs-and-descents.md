---
slug: l2-3-climbs-and-descents
code: L2.3
module: m2-fundamentals
order: 3
priority: P0
title: Climbs and descents
summary: Enter climbs and descents with attitude, power and trim, and level off exactly on your target altitude.
estimatedMinutes: 15
prerequisites: [l2-2-attitude-flying-and-trim]
objectives:
  - Enter a climb at Vy and a cruise climb, and level off at a target altitude.
  - Enter a descent at a target airspeed and rate, and level off.
  - Lead the level-off by about 10% of the vertical speed.
challenges: [c2-2-climbs-and-descents]
resources: [afh-ch3]
published: false
lastVerifiedAt: null
simVersion: null
---

## Entering a climb

The order is **attitude, power, trim**:

1. **Attitude.** Raise the nose smoothly to the climb attitude, roughly 7–10° nose up.
2. **Power.** Add full power.
3. **Trim.** As the speed settles on your target, trim away the back pressure.

Then adjust the attitude to hold the speed: nose up a little if you're too fast, down a little if you're too slow. In a climb, **pitch controls airspeed**.

## Which climb speed?

| Speed          | KIAS                   | Use it when                                        |
| -------------- | ---------------------- | -------------------------------------------------- |
| Vx, best angle | {{vspeed.vx}}          | You need the most height in the shortest distance. |
| Vy, best rate  | {{vspeed.vy}}          | You want the most height per minute.               |
| Cruise climb   | {{vspeed.cruiseClimb}} | A long climb: better view and engine cooling.      |

Cruise climb is a little slower to gain altitude, but the nose is lower, so you can see traffic ahead, and more air flows over the engine to keep it cool.

:::quiz{id="l2-3-q1" type="single"}
Which speed gives the most altitude per unit of time?

- [ ] Vx
- [x] Vy
- [ ] Cruise climb
- [ ] Best glide

---

**Vy** ({{vspeed.vy}}) gives the best _rate_: the most altitude per minute. Vx gives the best _angle_: the most altitude per distance.
:::

## Leveling off from a climb

Start the level-off before you reach the altitude, or you'll overshoot. Lead by about **10% of your vertical speed**: climbing at 500 fpm, start 50 ft early.

The order for the level-off is **attitude, power, trim**:

1. **Attitude.** Lower the nose to the level picture.
2. Let the speed build toward cruise.
3. **Power.** Reduce to cruise power, about 2,300 RPM.
4. **Trim.**

:::callout{type="tip"}
Lead your level-off by 10% of your vertical speed.
:::

:::quiz{id="l2-3-q2" type="numeric" answer="2940" tolerance="10" unit="ft"}
You're climbing at 600 fpm to 3,000 ft. At what altitude should you start leveling off?

---

10% of 600 fpm is 60 ft, so start the level-off at about **2,940 ft**.
:::

:::quiz{id="l2-3-q3" type="order"}
Put the steps of a level-off from a climb in order.

1. Lower the nose to the level attitude
2. Let the speed build
3. Reduce to cruise power
4. Trim

---

**Attitude, let the speed build, power, trim.** Reducing power before the speed builds leaves you slow and nose-high.
:::

## Descents

To descend at a chosen speed:

1. **Power.** Reduce to about 1,700–2,000 RPM.
2. **Attitude.** Hold the attitude that gives your target speed. The nose goes a little below the horizon.
3. **Trim** once it's stable.

In a descent at constant speed, **power controls the rate of descent**: less power, faster descent. Pitch still sets the airspeed.

Try it below: set up a 500 fpm descent at 90 knots.

::widget{name="pitch-power" mode="quiz"}

:::callout{type="verify"}
Author note: fly the descent settings in the sim and adjust the RPM ranges (Section 8.5) to match.
:::

## Leveling off from a descent

Start adding power **50–100 ft before** your target altitude, and raise the nose to the level picture as the power comes in. Then trim. If you raise the nose without adding power, you'll slow down.

## Look before you climb

The Skyhawk's nose blocks your view ahead and above in a climb, and the high wing hides the view above you in a descent. Before a long climb or descent, make a **clearing turn**: a gentle turn left or right of 90° or so, looking for traffic, then turn back.
