---
slug: l13-2-planning-a-mountain-route
code: L13.2
module: m13-mountain-flying
order: 2
priority: P0
title: Planning a mountain route
summary: Plan the Auburn to Truckee crossing over Donner Summit along I-80, with a crossing altitude, a 45° approach and an escape route for every mile.
estimatedMinutes: 25
prerequisites: [l13-1-mountain-weather-and-airflow, l6-6-planning-a-cross-country-flight]
objectives:
  - Choose a mountain route that follows roads and passes and keeps an escape option on every leg.
  - Plan a ridge crossing altitude and the 45° approach angle for a given ridge.
  - Identify and rank the emergency landing options along the I-80 corridor.
challenges: []
resources: [faa-tips-mountain-flying, skyvector, airnav, ecfr-91-151, ecfr-91-159, aim-7]
published: false
lastVerifiedAt: null
simVersion: null
---

## Fifty miles that need a plan

:::callout{type="real-world"}
In a real airplane, a mountain crossing is planned with a mountain flying instructor, in a classroom first and then on a calm morning with the instructor beside you. Local knowledge matters: which passes close in with cloud, where the sink sits on a west wind, which strip is really usable. Learn the method here; if you ever fly the real Sierra, go with someone who has done it.
:::

Auburn Municipal (KAUN) sits in the Sierra foothills at about 1,500 ft MSL. Truckee–Tahoe (KTRK) sits on the far side of the crest at about 5,900 ft. They are roughly 50 nm apart, and between them is a wall of granite above 8,000 ft. The only sensible way over it for a Skyhawk is the way the trucks go: **Interstate 80 over Donner Summit**.

In [[l6-6-planning-a-cross-country-flight]] you planned legs between checkpoints over the Central Valley. Mountain planning uses the same nav log with three additions: a **crossing altitude** you must reach before the ridge, a **45° approach** to the ridge, and an **escape route** for every leg. This lesson builds all three for the route you will fly in Challenge C13.2 "Donner Pass crossing".

## Follow the passes: I-80 over Donner Summit

Mountain pilots follow roads for the same reason the road builders chose that line: it is the lowest, gentlest way through. A highway also gives you a checkpoint you cannot lose, a strip of cleared ground, and a place rescuers can reach.

| Leg | From → To                   | Landmark                                            | Terrain under you (about) |
| --- | --------------------------- | --------------------------------------------------- | ------------------------- |
| 1   | KAUN → Colfax               | I-80 and the railroad climbing between the canyons  | 1,500–2,500 ft MSL        |
| 2   | Colfax → Blue Canyon (KBLU) | I-80, Emigrant Gap, the airport beside the highway  | 2,500–5,500 ft MSL        |
| 3   | KBLU → Donner Summit        | I-80 climbing to the pass; Donner Peak to the south | 5,500–7,200 ft MSL        |
| 4   | Donner Summit → KTRK        | Donner Lake below, then the Truckee basin           | 7,200 ft down to 5,900 ft |

Notice what the road does on leg 3. The pass is a notch in the ridge: the highway crosses at about 7,200 ft while the peaks either side stand above 8,000 ft. Crossing over the notch gives you the lowest terrain and the widest escape.

Two rules for the valley legs. **Fly the side of the valley, not the middle**, so the whole width is there for a turn; on a windy day the windward side has the rising air. And **never fly up a canyon you have not planned**. The American River canyons either side of I-80 look inviting, and some dead-end at a wall. The highway is the plan.

## Crossing altitude and the 45° approach

The crossing altitude comes from the terrain, not from the pass. Use the highest ground within a few miles of your crossing point, because sink does not care that the road is lower.

> **Crossing altitude = highest nearby terrain + 1,000 ft in calm air, or + 2,000 ft with any wind at ridge level**

For Donner Summit the nearby terrain is about 8,000 ft MSL, so calm air gives 9,000 ft and a light wind 10,000 ft. Eastbound VFR above 3,000 ft AGL you fly odd thousands plus 500, so **9,500 ft MSL** is the practical minimum and 11,500 ft the next step on a windier morning.

Then there is **when** to reach it. The Skyhawk climbs slowly at a high density altitude, and the climb from 1,500 ft to 9,500 ft takes 20 min or more. Plan to be level at the crossing altitude **before** Blue Canyon, with a kneeboard note: "not level at KBLU, circle over the valley until you are." Climbing toward a ridge that is higher than you is how pilots end up in the trees.

:::callout{type="verify"}
Widget pending: W21 (Density Altitude Calculator) is embedded here once Phase 20 ships it: `::widget{name="density-altitude" mode="explore"}`, pre-set to KAUN on a summer morning. Sim check: confirm the climb-time estimate (about 20 min from 1,500 ft to 9,500 ft) against the W22 flight-test climb data.
:::

Finally, the angle. Approach the ridge at about **45°**, not straight on. If the air over the crest turns out to be sinking or rough, a turn of about 90° points you back toward lower ground. Straight-on, you would need a full 180° turn, in sink, with the terrain close. Only when you can see the ground falling away on the far side do you turn to cross.

:::quiz{id="l13-2-q1" type="single"}
At what angle should you approach a ridge you plan to cross?

- [ ] 90°, straight across, to spend the least time over it
- [x] About 45°, so a small turn takes you back toward lower terrain
- [ ] Parallel to it, then turn across at the last moment
- [ ] Any angle, as long as you are 500 ft above it

---

**About 45°.** The angle buys you an escape: if the ridge is sinking or turbulent, a 90° turn points you downhill instead of a 180° turn in sink.
:::

:::quiz{id="l13-2-q2" type="numeric" answer="9500" tolerance="0" unit="ft"}
The highest terrain near your crossing point is about 8,000 ft MSL, the air is calm, and you are eastbound. Using the rule above and the VFR cruising altitude rule, what crossing altitude in feet MSL do you plan?

---

8,000 + 1,000 = 9,000 ft minimum. Eastbound VFR cruising altitudes are odd thousands plus 500, so the first one at or above 9,000 is **9,500 ft MSL**. With wind at ridge level you would plan 11,500 ft.
:::

## Escape routes and "the way out is behind you"

An escape route is the turn you make when something goes wrong: sink, cloud over the pass, a rough engine, a climb that is not keeping up. In the mountains the escape is almost always **the way you came**. Behind you the terrain is lower, you have just seen the weather there, and you know the airplane could fly it.

| Leg                  | Escape                                                           | Decision point                                 |
| -------------------- | ---------------------------------------------------------------- | ---------------------------------------------- |
| KAUN → Colfax        | Turn back to KAUN                                                | Ceiling below the ridge tops ahead             |
| Colfax → KBLU        | Turn back down I-80 toward Colfax and Auburn                     | Not at 9,500 ft by KBLU, or wind limit reached |
| KBLU → Donner Summit | 90° turn away from the ridge, descend over the Bear River valley | Sink or turbulence on the 45° approach         |
| Donner Summit → KTRK | Continue: the terrain ahead is lower than behind you             | Once Donner Lake is in sight you are committed |

The last row matters. Over the summit with the ground falling away ahead, Truckee is the escape. Before that moment, every escape points west.

:::callout{type="decision"}
Level at 9,500 ft passing Blue Canyon, the ridge ahead looks clear, but the airplane starts losing 300 ft per minute with full power and {{vspeed.vy}}. That is the lee-side sink from [[l13-1-mountain-weather-and-airflow]], earlier than expected. Decide now: turn 90° away from the ridge toward the lower ground west, get out of the sink, then choose between another attempt higher up and going home. Pressing on and hoping is not on the list; in Challenge C13.2, turning back here scores as the right decision.
:::

## Emergency options: KBLU, valleys, roads

In Course 1 you learned to pick a field and set up a glide ([[l5-4-engine-failure-and-forced-landings]]). Over the Sierra there are few fields, so you rank the options before you take off.

::widget{name="glide-range" mode="explore"}

1. **Blue Canyon (KBLU).** A paved mountain airport beside I-80 at about 5,300 ft, with a 3,300 ft runway and closed in winter when snow covers it: the best option between Colfax and the summit, and the reason this route follows the highway.
2. **The valleys.** Meadows and the flatter ground around Donner Lake and the Truckee basin. Fewer than you would like, but real.
3. **The highway.** A last resort: traffic, signs, overpasses and a slope. Still better than trees. Land along it, not across it.

From 9,500 ft over terrain at 7,000 ft, the Skyhawk's {{aircraft.glideRatio}} glide gives you only about 2,500 ft to work with: roughly 4 nm in still air. That is why the crossing altitude is generous and the escape is pre-planned.

:::callout{type="verify"}
Sim check: confirm KBLU (RWY 15/33, 3,300 x 50 ft asphalt, 5,284 ft; real-world AirNav 2026-10-13) is present and landable in MSFS 2024 scenery, and that Donner Lake, Emigrant Gap and I-80 are recognizable from 9,500 ft (v2 Section 12.3). Shot list: "Donner Summit from 9,500 ft, I-80 and Donner Lake visible".
:::

:::quiz{id="l13-2-q3" type="single"}
You are over Blue Canyon at 9,500 ft, eastbound, and the engine starts running rough. Which is your first choice?

- [ ] Continue to KTRK; it is closer in time
- [x] Blue Canyon (KBLU), the airport beneath you
- [ ] A straight stretch of I-80
- [ ] The meadow you remember near Donner Lake

---

**Blue Canyon.** An airport directly below you beats everything on the far side of a ridge. The highway and the meadows are for when no airport is in glide range.
:::

## Fuel and daylight margins

Mountain routes stretch two things you are used to planning tightly:

- **Fuel.** The climb to 9,500 ft burns more than cruise, and a turn-back doubles the leg. Day VFR legally needs 30 min of reserve; for a mountain flight plan at least **1 hour** at {{aircraft.fuelBurn}}, with the turn-back counted as if it were the destination.
- **Daylight.** Shadows fill the valleys an hour or more before sunset, and a night mountain crossing is not a VFR plan. Be on the ground **1 hour before sunset**; the calm air is at dawn anyway.
- **Weather margin.** A ceiling that gives 1,000 ft over the Central Valley gives nothing over an 8,000 ft ridge. Your go/no-go needs a ceiling **above the crossing altitude**, not just VFR minimums at the airports.

:::callout{type="verify"}
Author decision: the 1 hour mountain fuel reserve is a Learn-To-Fly policy, not an FAA number (FAA-P-8740-60 gives no reserve figure; 14 CFR 91.151 day VFR is 30 min, desk-verified 2026-10-13). Confirm the wording stays as a house rule.
:::

:::callout{type="verify"}
Sim check: confirm the departure time and the sunrise/sunset the `TIME_DAWN` preset gives C13.2, so "landed 1 hour before sunset" is achievable in the challenge.
:::

## The Sierra route worksheet (kneeboard)

Everything above fits on one page. Fill it in before every mountain flight; Challenge C13.2 checks that it is on your kneeboard before you taxi.

| Item                             | Your entry for KAUN → KTRK                                           |
| -------------------------------- | -------------------------------------------------------------------- |
| Route                            | KAUN, I-80, Colfax, KBLU, Donner Summit, Donner Lake, KTRK           |
| Highest terrain near crossing    | About 8,000 ft MSL                                                   |
| Crossing altitude (calm / windy) | 9,500 ft / 11,500 ft MSL, level by KBLU or circle                    |
| Ridge approach                   | 45° from the southwest; turn to cross only when the far side is seen |
| Ridge-level wind limit           | 20 kt or less at 9,000 ft, no lenticular or rotor cloud              |
| Ceiling needed                   | At least 1,000 ft above the crossing altitude over the pass          |
| Escape, each leg                 | West, back down I-80; after the summit, continue to KTRK             |
| Emergency options                | KBLU, Donner Lake meadows, the highway                               |
| Fuel on board / reserve          | Full / 1 hour minimum, turn-back counted                             |
| Timing                           | Depart at dawn, across by mid-morning, landed 1 hour before sunset   |

:::quiz{id="l13-2-q4" type="multi"}
Which items belong on the kneeboard before a mountain crossing? Pick all that apply.

- [x] The crossing altitude and the point by which you must be level at it
- [x] The escape route for each leg
- [ ] The go-around speed at a sea-level airport
- [x] The ridge-level wind limit you set before looking at the forecast

---

Crossing altitude, the "level by" point, escape routes and the wind limit are the heart of the worksheet. Go-around speed matters in the next lesson, not in route planning.
:::

## Practice and next steps

Three things to carry forward:

1. Follow the road through the pass, fly the side of the valley, and never explore a canyon you have not planned.
2. Crossing altitude is highest nearby terrain plus 1,000 ft (calm) or 2,000 ft (wind), reached before the ridge, approached at 45°.
3. The way out is behind you: write the escape for every leg before you take off.

**Practice.** This lesson feeds the `mountain-planning` flashcard deck: the crossing-altitude rule, the 45° approach, the escape rule and the worksheet items.

**Fly it.** Challenge C13.2 "Donner Pass crossing" flies this route from KAUN at dawn, with a variant that puts 25 kt at ridge level so you can practice saying no. Next: [[l13-3-high-elevation-airport-operations]].
