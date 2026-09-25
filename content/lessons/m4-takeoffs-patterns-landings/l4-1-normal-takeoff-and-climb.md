---
slug: l4-1-normal-takeoff-and-climb
code: L4.1
module: m4-takeoffs-patterns-landings
order: 1
priority: P0
title: Normal takeoff and climb
summary: Line up, add power smoothly, hold the centerline, rotate at the right speed and climb out of the pattern.
estimatedMinutes: 15
prerequisites: [l3-3-run-up-before-takeoff-and-after-landing, l2-3-climbs-and-descents]
objectives:
  - Line up on the centerline and apply full power smoothly.
  - Hold the centerline with rudder, rotate at Vr and climb at Vy.
  - Depart the pattern and transition to a cruise climb.
challenges: [c4-1-normal-takeoff-and-departure]
resources: [afh-ch6, boldmethod-left-turning]
published: false
lastVerifiedAt: null
simVersion: null
---

## Lining up

Taxi onto the runway and line up on the **centerline**, using the whole runway: start from the very end, not partway down. Runway behind you is useless.

From the left seat, the centerline runs under the airplane's nose, a little to the right of where you're sitting. In the sim, find the view where the centerline disappears under the middle of the nose and remember it.

:::callout{type="verify"}
Author note: check the lined-up sight picture from the MSFS 2024 default cockpit camera and add a screenshot (Section 49.5).
:::

## Full power, smoothly

1. **Throttle to full, smoothly**, over about 2–3 seconds. Slamming it in makes the airplane swerve.
2. **"Airspeed alive."** Call it when the airspeed tape starts moving.
3. **Engine gauges green.** A quick glance at RPM and oil pressure.
4. **Eyes outside**, far down the runway.

## Right rudder

As the airplane accelerates at full power, it wants to turn **left**. The engine's torque, the spiraling propeller slipstream and P-factor all push the nose left (Lesson 2.5, a bonus lesson, explains why). Hold the centerline with **right rudder**, adding more as the speed builds.

:::quiz{id="l4-1-q1" type="single"}
Which rudder do you usually need during the takeoff roll?

- [ ] Left rudder
- [x] Right rudder
- [ ] None, the airplane tracks straight

---

**Right rudder.** At full power and low speed the airplane pulls left, so you hold the centerline with right rudder.
:::

## Rotate and climb

At **{{vspeed.vr}}**, apply gentle back pressure to raise the nose to the takeoff attitude, about 10° nose up. Don't pull it off the ground: hold the attitude and let the airplane fly off when it's ready.

After liftoff, let the speed settle at **{{vspeed.vy}}** (Vy). Trim for it. Above about 500 ft above the ground, you can lower the nose to a **cruise climb** ({{vspeed.cruiseClimb}}) for a better view and cooler engine.

:::quiz{id="l4-1-q2" type="single"}
At what speed do you rotate?

- [ ] {{vspeed.vx}}
- [ ] {{vspeed.vy}}
- [x] {{vspeed.vr}}
- [ ] {{vspeed.vso}}

---

Rotate at **{{vspeed.vr}}**, then climb at {{vspeed.vy}}.
:::

::checklist{slug="normal-takeoff"}

:::callout{type="sim"}
In a real airplane you feel the acceleration and the wheels leaving the ground. In the sim you don't, so watch the airspeed tape and the view out the front. Call the speeds out loud to keep your attention on them.
:::

## Leaving the pattern

At a non-towered airport, the AIM recommends departing one of two ways:

- **Straight out**, continuing on the runway heading, or
- **A 45° turn** in the direction of the traffic pattern (to the left for a left pattern), after you reach pattern altitude.

At a towered airport, fly what the tower tells you.

## When to abort

The best time to find a problem is on the runway, when you can simply stop. **Reject the takeoff** if, before liftoff:

- The **airspeed** isn't increasing.
- The **engine** runs rough or loses power.
- The airplane **drifts** toward the edge and you can't correct it.
- A door pops open, or anything else doesn't feel right.

To abort: **throttle to idle, keep straight with rudder, brake firmly** and stop.

:::callout{type="safety"}
If in doubt on the ground, abort. You have runway. Once you're airborne with little runway left, your options shrink fast.
:::

:::quiz{id="l4-1-q3" type="single"}
When should you reject a takeoff?

- [ ] Only if the engine stops completely
- [x] At any abnormal indication before liftoff, such as airspeed not increasing or a rough engine
- [ ] Never; once you add full power you're committed
- [ ] Only after liftoff

---

Reject the takeoff at **any abnormal indication before liftoff**. Throttle idle, keep straight, brake.
:::

## Common errors

- **Over-rotating.** Yanking the nose up too high: the airspeed drops and the stall horn sounds. Hold about 10°.
- **Pulling it off early.** Rotating below {{vspeed.vr}} leaves the airplane barely flying.
- **Drifting left.** Not enough right rudder.
- **Forgetting to trim** in the climb, then fighting the back pressure.

Fly it in [[c4-1-normal-takeoff-and-departure]].
