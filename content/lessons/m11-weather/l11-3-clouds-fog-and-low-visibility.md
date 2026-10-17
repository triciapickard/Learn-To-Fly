---
slug: l11-3-clouds-fog-and-low-visibility
code: L11.3
module: m11-weather
order: 3
priority: P0
title: Clouds, fog and low visibility
summary: How fog forms, why the marine layer closes an airport in minutes, what counts as a ceiling, and the VFR minimums you must stay above.
estimatedMinutes: 20
prerequisites: [l11-1-weather-theory-air-masses-fronts-and-stability]
objectives:
  - Identify the type of fog from the conditions that formed it, and predict when it forms and clears.
  - Explain why a ceiling or visibility can drop faster than the forecast says.
  - State the VFR weather minimums for the airspace you plan to use and read a ceiling from a METAR.
challenges: []
resources: [faa-weather-handbook, ecfr-91-155]
published: false
lastVerifiedAt: null
simVersion: null
---

## The airport that disappears

Half Moon Bay is 12 minutes from Palo Alto in a Skyhawk. You leave KPAO under a blue sky and climb over the ridge, expecting to see the coast. Instead, where the airport should be, there is a flat white sheet, edge to edge, and the hills on your side of it have their tops in cloud.

The forecast did say so, in a line you skimmed: `TEMPO 1416/1419 OVC006`. The marine layer came back early. This lesson is about why that happens, the clues that it will, and the numbers that tell you when you may legally and safely keep going.

## How fog forms

Fog is cloud on the ground. It forms whenever air near the surface cools to its dewpoint, and each of the common ways that happens has a name:

| Fog type      | How it forms                                                                        | When and where                                                     | How it clears                                    |
| ------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------ |
| **Radiation** | On a clear, calm night the ground radiates its heat away and cools the air above it | Inland valleys, fall and winter; the Central Valley's tule fog     | Burns off after sunrise, usually by late morning |
| **Advection** | Moist air moves (advects) over a colder surface, which cools it from below          | Coasts, any time of day; the Bay Area's marine stratus and sea fog | Only when the wind or the air mass changes       |
| **Upslope**   | Wind pushes moist air up rising terrain, and it cools as it climbs                  | The windward side of hills, including the coastal ridges           | When the wind stops pushing                      |

Two less common types are **precipitation fog**, when rain falls through cold air ahead of a warm front, and **steam fog**, when cold air moves over warm water. In the Bay Area, think radiation fog inland in winter and advection fog on the coast all year. The difference that matters most is wind. Radiation fog needs calm air and burns off in the sun. Advection fog needs wind, and the sun alone will not clear it.

:::quiz{id="l11-3-q1" type="single"}
A steady 10 kt wind has been blowing from the ocean across the cold water near Half Moon Bay all afternoon. By 5 p.m. the airport is under a low overcast and visibility is 1 SM. What type of fog is this?

- [ ] Radiation fog
- [x] Advection fog
- [ ] Upslope fog
- [ ] Steam fog

---

Moist air moving over a cooler surface is the definition of advection fog. The clues are the wind, the ocean and the time of day. Radiation fog needs calm air and clear nights and would not form at 5 p.m. in a 10 kt wind.
:::

## The marine layer at KHAF and KMRY

The marine layer from [[l11-1-weather-theory-air-masses-fronts-and-stability]] is advection fog and stratus over a large area: cool, moist Pacific air under an inversion, pressed against the coast. At the airports it is a low overcast, often 500–1,500 ft AGL with tops around 1,500–2,500 ft. What makes it dangerous is how fast it moves and how local it is:

- **Thin but solid.** From above it is a white floor. You cannot descend through it VFR.
- **It moves with the sea breeze.** It pushes inland in the afternoon and evening and pulls back by late morning. Twenty minutes can take an airport from VFR to IFR.
- **Terrain holds it back.** The coastal hills block it, so KPAO can be clear while KHAF, 15 nm west, is closed. KMRY is often the last airport to clear.
- **Predictable in general, unpredictable in detail.** The TAF can say it will come back tonight but not whether at 4 p.m. or 6 p.m.

The two numbers that tell you what it will do next are the spread at the coastal airport and the wind. A spread of 1–2 °C with an onshore wind means the layer is forming or holding. A spread opening to 4–5 °C means it is lifting.

:::quiz{id="l11-3-q2" type="numeric" answer="3" tolerance="0" unit="°C"}
The Half Moon Bay METAR reads `16/13`. What is the temperature/dewpoint spread?

---

16 − 13 = 3 °C, the edge of the "watch it" zone. If the next METAR shows it closing to 2 or 1, fog or low stratus is forming. If it opens to 5, the layer is lifting.
:::

## Scud and "just one more mile"

**Scud** is the ragged low cloud under a lowering ceiling or around hills. **Scud running** is flying lower and lower to stay under it, in less and less visibility, because the destination is "just one more mile". It is one of the most consistent ways VFR pilots die.

Here is how it goes. The ceiling ahead looks lower, so you descend 300 ft. Visibility drops to 4 miles, still legal. The ground rises toward the hills. The ceiling lowers again, and you descend again. Now you are at 500 ft AGL in 2 miles of haze with hills on both sides, and a turn back needs room you no longer have.

:::callout{type="safety"}
Scud running kills a little at a time. Each step takes away some ceiling, visibility, altitude and room to turn, until none is left. Protect yourself with a rule you set in advance. Decide before takeoff the ceiling and visibility at which you will turn around, and when you reach them, turn around. Turning back is a good decision.
:::

:::callout{type="decision"}
**The turn-back point.** Before every flight toward weather, write down a place (the ridge, a highway, a VOR radial) and a condition (ceiling below 1,500 ft AGL, visibility below 5 SM, or the hilltops not visible). Reaching either one means you turn back or divert, immediately, without a discussion. Challenge C11.2 "Marine layer at Half Moon Bay" grades this decision. The safe call at or before the point is a pass even though you never land at KHAF.
:::

## Ceilings in METARs

A METAR lists cloud layers from the bottom up, each with a coverage and a height in hundreds of feet AGL. The **ceiling** is the lowest layer that is broken or overcast, or the vertical visibility into fog. Few and scattered layers do not make a ceiling, however low they are.

| Code          | Coverage (eighths of the sky)     | Counts as a ceiling? |
| ------------- | --------------------------------- | -------------------- |
| `CLR` / `SKC` | None                              | No                   |
| `FEW`         | 1–2                               | No                   |
| `SCT`         | 3–4                               | No                   |
| `BKN`         | 5–7                               | Yes                  |
| `OVC`         | 8                                 | Yes                  |
| `VV`          | Sky obscured; vertical visibility | Yes                  |

So `FEW004 SCT009 BKN012 OVC020` has a ceiling of 1,200 ft AGL, because the layers at 400 and 900 ft do not count. That is the legal answer. In practice, a scattered layer at 900 ft over the sea can close into an overcast in half an hour. Ceiling and visibility together give the four **flight categories** that color the GFA from [[l11-2-forecasts-and-briefings]]:

| Category | Ceiling                  | and / or | Visibility         |
| -------- | ------------------------ | -------- | ------------------ |
| **VFR**  | Above 3,000 ft AGL       | and      | Above 5 SM         |
| **MVFR** | 1,000–3,000 ft           | and/or   | 3–5 SM             |
| **IFR**  | 500 ft to below 1,000 ft | and/or   | 1 SM to below 3 SM |
| **LIFR** | Below 500 ft             | and/or   | Below 1 SM         |

Marginal VFR is legal, barely, and it is where scud running starts. For now, treat MVFR at the destination as a no-go and MVFR en route as a divert.

::widget{name="metar-decoder" mode="explore"}

:::callout{type="verify"}
Widget pending: confirm the METAR decoder (W17) example set includes a multi-layer METAR with a low scattered layer, such as `FEW004 SCT009 BKN012 OVC020`, so the "ceiling is the first BKN" point can be clicked through. Desk-verified 2026-10-13: ceiling definition and flight-category thresholds match AIM 7-1-7 and 7-1-28.
:::

:::quiz{id="l11-3-q3" type="single"}
A METAR reports `FEW004 SCT009 BKN012 OVC020`. What is the ceiling?

- [ ] 400 ft AGL
- [ ] 900 ft AGL
- [x] 1,200 ft AGL
- [ ] 2,000 ft AGL

---

The ceiling is the lowest broken or overcast layer: BKN012, 1,200 ft AGL. Few and scattered layers do not count, though a scattered layer at 900 ft over the coast is a warning that the real ceiling may be about to drop.
:::

## VFR minimums: the numbers you must know

The legal minimums from [[l6-2-airspace]] set the lower limit for every decision in this module. Simplified, below 10,000 ft MSL:

| Airspace                | Flight visibility | Distance from clouds                              |
| ----------------------- | ----------------- | ------------------------------------------------- |
| Class B                 | 3 SM              | Clear of clouds                                   |
| Class C, D and E        | 3 SM              | 500 ft below, 1,000 ft above, 2,000 ft horizontal |
| Class G (day, low down) | 1 SM              | Clear of clouds                                   |

Airports add stricter rules. To take off, land or fly the pattern VFR at an airport inside Class B, C, D or E surface airspace, such as Livermore or Palo Alto, the reported **ceiling must be at least 1,000 ft** and ground **visibility at least 3 SM**. Otherwise you need a special VFR clearance ([[l15-3-light-gun-signals-lost-comms-and-special-vfr]]) or you wait.

You measure cloud clearance from your airplane to the cloud. With a 1,200 ft ceiling at a 400 ft airport, the base is 1,600 ft MSL and you must stay 500 ft below it, at 1,100 ft MSL. The airport's pattern altitude is 1,400 ft. The marine layer does not need to reach the ground to close an airport to you.

## Visibility, haze and smoke

Visibility can fall with no cloud at all. Haze and smoke collect under the same inversions that make the marine layer, and in fire season a METAR's `FU` (smoke) can take a clear-sky day down to 3 SM. Reported visibility can be worse than it sounds:

- **Slant visibility.** The observer measures along the ground, but looking down through haze you see less. A runway reported at 4 SM may not appear until you are 2 miles out.
- **Flying into the sun.** Haze lights up when the sun is low and ahead of you. Westbound at 5 p.m. in smoke, a legal 5 SM can leave you seeing almost nothing ahead.
- **No horizon.** In thick haze over water or flat ground the horizon fades and your eyes have nothing to level the wings against, which is where [[l11-6-the-go-no-go-decision-and-vfr-into-imc]] begins.

:::quiz{id="l11-3-q4" type="single"}
Which of these conditions is marginal VFR (MVFR)?

- [ ] Ceiling 4,000 ft, visibility 8 SM
- [x] Ceiling 2,000 ft, visibility 4 SM
- [ ] Ceiling 800 ft, visibility 2 SM
- [ ] Ceiling 300 ft, visibility ½ SM

---

MVFR is a ceiling of 1,000–3,000 ft and/or visibility of 3–5 SM. The first option is VFR, the third is IFR, the fourth is LIFR. MVFR is legal for VFR flight in most airspace, so it tempts pilots to keep going.
:::

## Practice and next steps

To carry forward:

1. Radiation fog: calm, clear nights inland; burns off. Advection fog: wind over cold water on the coast; may not.
2. A spread closing under 3 °C with an onshore wind means the marine layer is forming or holding.
3. The ceiling is the lowest broken or overcast layer. Few and scattered do not count, but they are a warning.
4. Set a turn-back point before you go. Reaching it means you turn.

**Practice.** This lesson feeds the `weather-codes` deck (fog types, flight categories, ceiling rules) and the `airspace-and-minimums` deck (the VFR minimums table).

**Fly it.** Challenge C11.2 "Marine layer at Half Moon Bay" flies KPAO to KHAF with the layer lower than forecast, and the challenge grades your decision. It opens after [[l11-6-the-go-no-go-decision-and-vfr-into-imc]].

**Next.** [[l11-4-thunderstorms-icing-and-turbulence]] covers the unstable side of the weather.
