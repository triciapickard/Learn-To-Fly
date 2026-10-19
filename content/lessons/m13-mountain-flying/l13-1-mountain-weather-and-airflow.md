---
slug: l13-1-mountain-weather-and-airflow
code: L13.1
module: m13-mountain-flying
order: 1
priority: P0
title: Mountain weather and airflow
summary: How wind behaves over a ridge, how to spot mountain wave before it finds you, and the wind limit that keeps you out of the lee-side sink.
estimatedMinutes: 20
prerequisites: [l11-1-weather-theory-air-masses-fronts-and-stability]
objectives:
  - Describe windward lift and lee-side sink when air flows over a ridge.
  - Recognize the signs of mountain wave from clouds and the winds-aloft forecast.
  - Set a wind limit for a ridge crossing and apply it to a forecast.
challenges: []
resources: [faa-tips-mountain-flying, aim-7, faa-weather-handbook]
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

## Why mountain flying is different

:::callout{type="real-world"}
In a real airplane, nobody flies the Sierra after reading a lesson. A real pilot takes a mountain flying course with an instructor who knows the local passes, flies the route in calm weather first, and builds up to windier days over many flights. This module gives you the ideas and lets you try them in the sim, where a bad decision costs only a restart. It prepares you for that real training and does not replace it.
:::

Air flows over mountains much like a river flows over rocks. Water meeting a rock speeds up over the top, then tumbles and swirls on the downstream side. Air over a ridge does the same thing, and it carries the Skyhawk with it.

Course 1 weather was about clouds and visibility. Mountain weather adds **the vertical movement of air**. Rising air lifts you for free. Sinking air can descend faster than the Skyhawk can climb. This lesson shows you where each one occurs, how to see it coming, and when the answer is "not today."

:::callout{type="safety"}
A Skyhawk at a high density altitude might climb 300 ft per minute. The lee side of a Sierra ridge in a strong wind can sink at 1,500–2,000 ft per minute. Skill cannot make up that difference, so stay out of the lee-side sink.
:::

## Why wind accelerates over ridges

A ridge squeezes the wind into a thinner layer, and like water through a narrow channel, it speeds up. A 20 kt wind in the valley can be 30 kt or more at the crest:

| Where you are                    | What the air does            | What you feel in the Skyhawk                      |
| -------------------------------- | ---------------------------- | ------------------------------------------------- |
| Windward slope (facing the wind) | Rises smoothly up the slope  | Free lift: a better climb than the charts promise |
| Ridge crest                      | Fastest, often gusty         | Strong headwind or tailwind, bumps                |
| Lee slope (behind the ridge)     | Sinks, tumbles, forms rotors | Sink that can exceed your climb rate, turbulence  |

The danger is on the lee side. The air that rose smoothly on the windward side comes down the back of the ridge like a waterfall. The stronger the wind, the stronger the sink and the farther downwind it reaches.

:::quiz{id="l13-1-q1" type="single"}
Crossing a ridge with a strong wind, where should you expect the sink?

- [ ] On the windward side, as the air piles up against the slope
- [x] On the lee side, behind the ridge
- [ ] Directly over the crest only
- [ ] Nowhere, as long as you are above the ridge

---

The air rises on the windward side and sinks on the lee side. Flying downwind across a ridge, you meet the sink right after the crest. Flying upwind, it is the first thing you meet.
:::

## Lee-side downdrafts and rotors

On the lee side the sinking air can curl back on itself into a horizontal spinning tube called a **rotor**, at or below ridge-top level and anywhere from a few miles to about 20 nm downwind. The turbulence inside can be severe enough to cause loss of control in a light airplane, and it is invisible unless there is enough moisture to form a ragged, tumbling cloud.

Above the rotor, in a stable air mass, the air keeps bouncing up and down for tens of miles downwind. That is **mountain wave**. Glider pilots use the rising parts. You care about the sinking parts and the rotor underneath. In a strong wind, stay well above ridge level, keep away from the lee side, and treat any sink as a signal to turn toward lower terrain.

:::callout{type="verify"}
Widget pending: W29 (Mountain Airflow) is embedded here once Phase 20 ships it: `::widget{name="mountain-airflow" mode="explore"}`. Desk-verified 2026-10-13: the wave, rotor and lenticular description matches AIM 7-6-7, FAA-P-8740-60 and AC 00-57.
:::

## Lenticular clouds

Lenticular clouds are a warning of mountain wave. They form at the crest of each wave, where rising air cools below its dew point, and evaporate on the way down. The result is a smooth, lens-shaped cloud that does not move, even in a 40 kt wind.

One lenticular tells you there is strong wind aloft, air stable enough to form a wave, and probably a rotor below. A dry day can have all of these without the cloud, so check the forecast too.

| Sign        | What it looks like                                  | What it means                      |
| ----------- | --------------------------------------------------- | ---------------------------------- |
| Cap cloud   | Cloud hugging the crest, spilling down the lee side | Strong flow over the ridge         |
| Rotor cloud | Ragged, rolling cloud level with the ridge top      | Severe turbulence beneath the wave |
| Lenticular  | Smooth lens that stays put, sometimes stacked       | Wave above; rotor probably below   |

:::quiz{id="l13-1-q2" type="multi"}
Which of these are signs of mountain wave? Pick all that apply.

- [x] Smooth, lens-shaped clouds that stay in place over the ridge
- [x] A ragged, rolling cloud sitting level with the ridge top downwind of it
- [ ] Scattered fair-weather cumulus over the valley at noon
- [x] A winds-aloft forecast of 35 kt at ridge level

---

Lenticular clouds, rotor clouds and strong winds at ridge level all point to wave. Fair-weather cumulus at noon are a sign of afternoon convection, covered below.
:::

## Winds aloft at ridge level

You learned to read a winds-aloft forecast in [[l11-2-forecasts-and-briefings]]. For a crossing, the number that matters is the wind at ridge level, not the surface wind at your departure airport. Sierra crests along the I-80 corridor sit around 8,000–9,000 ft MSL, so the 9,000 ft forecast level is your reference. Look at:

- **Speed at ridge level.** The FAA's "Tips on Mountain Flying" says not to attempt a mountain flight when the forecast wind at mountain-top level is above 25 kt, and to add an extra 1,000 ft of ridge clearance once it is above 20 kt. The AIM puts the light-airplane limit at 35 mph, about 30 kt. Many instructors treat 20 kt as a firm no-go.
- **Direction relative to the ridge.** Wind blowing straight across the ridge makes the strongest wave. Wind along the ridge is gentler.

:::callout{type="decision"}
Set your limit before you look at the forecast, not after. Learn to Fly's starting mountain limit: **ridge-level wind 20 kt or more, or any lenticular or rotor cloud, and you do not cross.** Write it on the kneeboard. When the 9,000 ft forecast says 25 kt from the west, the decision is already made.
:::

:::quiz{id="l13-1-q3" type="single"}
The winds-aloft forecast gives 9,000 ft winds of 270° at 28 kt. The ridge you plan to cross runs north–south at about 8,500 ft MSL. Using the limit above, what do you do?

- [ ] Cross 500 ft above the ridge, straight on, for the shortest exposure
- [ ] Cross 2,000 ft above the ridge and accept the bumps
- [x] Do not cross today; fly the valley legs or stay on the ground
- [ ] Cross after sunset, when the wind drops

---

28 kt straight across the ridge is above the 20 kt limit, so the crossing is off. Altitude does not fix a rotor, and night adds its own problems. Saying "no" is the good decision here.
:::

## Afternoon convection

Wave comes from wind. Convection comes from the sun. By late morning in summer the slopes heat the air beside them and it rises in bubbles called thermals. Over the flat Central Valley you felt these as light chop. Mountain slopes face the sun directly, so the thermals are stronger and closer together. As the day heats up:

1. **Turbulence** builds through the afternoon, worst over sun-facing slopes and ridgelines.
2. **Cumulus** form over the peaks by noon and can grow into thunderstorms by mid-afternoon in July and August.
3. **Density altitude** peaks at the same time, so your climb is at its worst when the air is roughest ([[l9-1-density-altitude-and-performance]]).

The oldest mountain rule is to **fly early**. Dawn departures give cool, calm air and the best climb you will get all day.

## The Sierra in summer

Put the pieces together for the region this module flies:

| Factor          | Typical Sierra summer pattern                                          | What to do                                                        |
| --------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Prevailing wind | Westerly; the Sierra's east face and the Carson Range are the lee side | Expect wave near Truckee, Minden and Lake Tahoe                   |
| Morning         | Calm, cool, smooth                                                     | Be across the ridge by mid-morning                                |
| Afternoon       | Thermals, cumulus, high density altitude                               | Be on the ground or back in the valley                            |
| Smoke           | Wildfire smoke can cut visibility for days                             | Check visibility, not just clouds                                 |
| Terrain         | Peaks above 9,000 ft near the passes                                   | Plan the crossing altitude in [[l13-2-planning-a-mountain-route]] |

Minden (KMEV) is a famous glider site because the Carson Range makes reliable wave. That is good for a sailplane and a warning for you. Challenge C13.4 "Mountain wave" puts you eastbound over that range on a windy day to feel the sink early, slow to {{vspeed.va}}, turn toward lower ground and choose not to continue.

:::callout{type="sim"}
MSFS 2024 models wind over terrain and some updrafts and downdrafts, but how strong and realistic its lee-side sink and rotor turbulence are is uncertain. The course checks it before the challenge ships.
:::

:::callout{type="verify"}
Sim check: fly the `WX_MOUNTAIN_WAVE` preset over the Carson Range and record the sink rate, turbulence and whether any rotor is modeled (v2 Phase 16 flight test); then confirm the sim callout above still reads true. Shot list: "lenticular cloud over the Carson Range" if the sim renders one.
:::

## Practice and next steps

To carry forward:

1. Air rises on the windward side of a ridge and sinks on the lee side. The stronger the wind, the stronger the sink.
2. Lenticular clouds, rotor clouds and 20 kt or more at ridge level mean mountain wave, so do not cross.
3. Fly the mountains early, when the air is cool and calm and your climb rate is best.

**Practice.** This lesson feeds the `weather-signs` flashcard deck: windward versus lee, the cloud signs of wave, and the 20 kt ridge-level limit.

**Next.** [[l13-2-planning-a-mountain-route]] plans the KAUN to KTRK crossing over Donner Summit, with a crossing altitude and an escape route for every leg.
