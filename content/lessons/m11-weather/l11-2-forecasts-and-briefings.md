---
slug: l11-2-forecasts-and-briefings
code: L11.2
module: m11-weather
order: 2
priority: P0
title: Forecasts and briefings
summary: Decode a TAF line by line, read the GFA, winds aloft, AIRMETs, SIGMETs and PIREPs, and organize a standard briefing for a real route.
estimatedMinutes: 30
prerequisites: [l11-1-weather-theory-air-masses-fronts-and-stability]
objectives:
  - Decode a TAF, including FM, TEMPO and PROB groups.
  - Read the GFA, winds aloft, AIRMETs, SIGMETs and PIREPs for a route.
  - Organize a standard briefing in a logical order.
challenges: []
resources: [awc-gfa, 1800wxbrief, faa-weather-handbook, aim-7]
published: false
lastVerifiedAt: null
simVersion: null
---

## The morning ritual

Before a cross-country, every real pilot checks the weather with a **briefing**, a structured read of what the sky is doing now, what it will do over the next few hours and what the forecasters are worried about. A phone app that says "sunny, 72°" leaves most of that out.

[[l11-1-weather-theory-air-masses-fronts-and-stability]] taught what fronts, stability and the marine layer do. This lesson teaches you to read the products that describe them, ending with a full briefing for Livermore to Monterey.

:::callout{type="sim"}
Nothing in this lesson is a forecast for the sim. MSFS 2024 presets are fixed conditions you set, and live weather shows conditions now without forecasting later ([[l11-5-weather-in-msfs-2024]]). You brief for the sim as you would for a real flight to build the habit.
:::

## The standard briefing order

When you call Flight Service or open a briefing on 1800wxbrief.com, you ask for a **standard briefing** and get it in a fixed order that puts the things that could kill you first and the things that merely annoy you last.

| #   | Item                     | What it answers                                                                                                                                                 |
| --- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Adverse conditions**   | Is there anything that should stop this flight? AIRMETs, SIGMETs, closed runways. If VFR looks doubtful the briefer adds the words "VFR flight not recommended" |
| 2   | **Synopsis**             | The big picture: where the fronts, highs and lows are and where they are going                                                                                  |
| 3   | **Current conditions**   | METARs and PIREPs along the route right now                                                                                                                     |
| 4   | **En route forecast**    | What the air between the airports will do while you are in it                                                                                                   |
| 5   | **Destination forecast** | The TAF for where you are landing, at the time you will arrive                                                                                                  |
| 6   | **Winds aloft**          | Direction, speed and temperature at your cruise altitudes                                                                                                       |
| 7   | **NOTAMs**               | Runway closures, lighting outages, TFRs, navigation aids out of service                                                                                         |
| 8   | **ATC delays and more**  | Known ATC delays and flow control; on request, special-use airspace, density altitude and more                                                                  |

A **standard** briefing is the full set. An **abbreviated** briefing updates items from an earlier one. An **outlook** briefing, for a departure six or more hours away, gives you the picture to plan around. For every challenge in this module and every real flight, you want the standard one.

The order matters because of how people read. If the first thing you learn is "AIRMET Sierra for IFR conditions along the coast until 20Z", you read everything after it asking _does this flight still work?_ Read the winds aloft first and you have started planning the flight before you know whether it should happen.

:::quiz{id="l11-2-q3" type="order"}
Put the items of a standard briefing in the order you receive them.

1. Adverse conditions
2. Synopsis
3. Current conditions
4. En route forecast
5. Destination forecast
6. Winds aloft
7. NOTAMs

---

Adverse conditions come first so everything else is read with "does this flight still work?" in mind. Then the big picture, now, later along the route and at the destination, the winds for planning, and the NOTAMs.
:::

## TAFs: the forecast for one airport

A **TAF** (terminal aerodrome forecast) covers the area within about 5 statute miles of one airport, usually for the next 24 hours. It uses the same codes as a METAR, which you can refresh here:

::widget{name="metar-decoder" mode="explore"}

The difference is time. A METAR says what is happening now, and a TAF is a list of periods, each with its own conditions. Here is an **invented example TAF** for Livermore, realistic for a fall night when the marine layer pushes inland, but made up for teaching and not a real forecast.

```
TAF KLVK 131720Z 1318/1418 25010KT P6SM SKC
     FM140200 27006KT P6SM FEW020
     FM140800 VRB03KT 5SM BR SCT008
     TEMPO 1410/1414 2SM BR OVC006
     PROB30 1412/1415 1SM BR OVC003
     FM141700 26008KT P6SM SCT015
```

Here it is line by line. All times are Zulu, and Pacific Daylight Time is 7 hours behind.

| Line                             | Decoded                                                                                                              |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `TAF KLVK 131720Z 1318/1418`     | Livermore, issued on the 13th at 1720Z, valid from the 13th at 18Z (11 a.m. PDT) to the 14th at 18Z                  |
| `25010KT P6SM SKC`               | From the start: wind 250° at 10 kt, visibility more than 6 statute miles, sky clear                                  |
| `FM140200 27006KT P6SM FEW020`   | **From** the 14th at 02Z (7 p.m. PDT): wind 270° at 6 kt, visibility over 6 SM, a few clouds at 2,000 ft AGL         |
| `FM140800 VRB03KT 5SM BR SCT008` | From 08Z (1 a.m.): wind variable at 3 kt, visibility 5 SM in **mist**, scattered cloud at 800 ft                     |
| `TEMPO 1410/1414 2SM BR OVC006`  | Between 10Z and 14Z (3–7 a.m.), **temporary** periods, each under an hour, of 2 SM in mist and an overcast at 600 ft |
| `PROB30 1412/1415 1SM BR OVC003` | Between 12Z and 15Z, a **30% chance** of 1 SM in mist with an overcast at 300 ft                                     |
| `FM141700 26008KT P6SM SCT015`   | From 17Z (10 a.m.): wind 260° at 8 kt, visibility over 6 SM, scattered at 1,500 ft. The marine layer has burned off  |

Most of TAF reading is knowing the change groups:

| Group      | Meaning                                                                                    | How to treat it                                                  |
| ---------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| **FM**     | A complete, lasting change at that time; everything after FM replaces everything before it | The new conditions are the forecast until the next FM            |
| **TEMPO**  | Temporary fluctuations, each under an hour and together less than half the period          | Plan for the TEMPO conditions; they can be there when you arrive |
| **PROB30** | A 30% probability of those conditions during the period                                    | "Possible". For VFR, plan as if the worse case can happen        |

There is also **BECMG**, a gradual change over a period, which NWS TAFs do not use. You will meet it in military and foreign TAFs. A TAF has no temperature or altimeter group, so use the METAR for those.

Now read it as a pilot. At 7 a.m. tomorrow the TAF says mist, scattered at 800 ft and short spells of an overcast at 600 ft. That is below VFR minimums for Livermore's Class D. By 10 a.m. it is scattered at 1,500 ft and clearing. A 7 a.m. departure is a no-go, and a 10:30 departure is fine.

:::callout{type="verify"}
Widget pending: W17 is embedded above in METAR mode. The spec wants a TAF mode (`mode="taf"` or similar) that decodes this example on click; add it once the widget supports TAFs. The example is invented and must stay labeled "example"; never replace it with a real forecast. Desk-verified 2026-10-13: 5 SM radius, 24-hour validity (30 hours at some major airports), the TEMPO definition and the PROB30 rules match the Aviation Weather Handbook 27.4 and AIM 7-1-28.
:::

:::quiz{id="l11-2-q1" type="single"}
In the example TAF, what does `FM140800 VRB03KT 5SM BR SCT008` mean?

- [ ] At 08Z on the 14th, wind variable at 3 kt, visibility 5 km in rain, broken cloud at 8,000 ft
- [x] From 08Z on the 14th, wind variable at 3 kt, visibility 5 statute miles in mist, scattered cloud at 800 ft AGL
- [ ] For 8 hours from 14Z, wind 030° variable, visibility 5 SM, scattered cloud at 8,000 ft
- [ ] From 08Z on the 14th, a 30% chance of mist and a scattered layer at 800 ft

---

FM is a lasting change from the stated day and time. `VRB03KT` is variable at 3 kt, `5SM` is 5 statute miles, `BR` is mist and `SCT008` is scattered at 800 ft AGL (heights are in hundreds of feet). A 30% chance would be a PROB30 group.
:::

:::quiz{id="l11-2-q2" type="single"}
The TAF includes `TEMPO 1410/1414 2SM BR OVC006`. You plan to arrive at 12Z. What should you expect?

- [ ] Visibility 2 SM and an overcast at 600 ft for the whole period from 10Z to 14Z
- [x] Short spells, each under an hour, of 2 SM in mist and an overcast at 600 ft, any of which could be happening at 12Z
- [ ] A 30% chance of 2 SM and 600 ft overcast
- [ ] An overcast at 6,000 ft between 10Z and 14Z

---

TEMPO means temporary fluctuations, each under an hour, within that period. They are not continuous, but one can be in progress when you arrive, so you plan for them. `006` is 600 ft AGL, not 6,000.
:::

## The GFA: graphical forecasts

Text products describe single points. The **Graphical Forecasts for Aviation** (GFA) on aviationweather.gov shows the whole region at once, with a time slider to step through the hours of your flight.

| GFA view                             | What it shows                                                                                 | Use it for                                                |
| ------------------------------------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Ceiling & Visibility**             | Forecast ceilings and visibility, shaded by flight category: MVFR blue, IFR red, LIFR magenta | Where is it below VFR, and is it getting better or worse? |
| **Clouds**                           | Cloud coverage, bases and tops by area                                                        | Will the marine layer cover the hills on my route?        |
| **Precipitation**, **Thunderstorms** | Rain, snow, fog and convection by area                                                        | Is anything falling, and where are the storms?            |
| **Winds**                            | Winds at the surface and at selected altitudes                                                | Headwind, crosswind and the ride over the hills           |
| **Icing**                            | Icing probability and severity by altitude                                                    | For the Skyhawk, anywhere this is shaded is a no          |
| **Turbulence**                       | Turbulence by altitude                                                                        | Low-level turbulence on a hot afternoon                   |

Walk through it in briefing order, adverse conditions first. Open the Ceiling & Visibility view, drag the slider to your departure time and look for blue, red and magenta (MVFR, IFR and LIFR) along your route. VFR areas are unshaded. Drag it to your arrival time and look again. Then Clouds for the bases, then Winds for the ride. The slider runs about 18 hours ahead in hourly steps.

:::callout{type="verify"}
Author decision: shot list, "GFA Ceiling & Visibility view, NorCal, time slider at a marine-layer morning" and "GFA Clouds view for the same hour", annotated with the flight-category colors and the slider. Desk-verified 2026-10-13: view names and colors match aviationweather.gov/gfa and its help page; re-check them on the day the shots are taken, the site changes.
:::

## Winds and temperatures aloft

The **winds and temperatures aloft forecast** (FB) gives direction, speed and temperature at fixed altitudes for a set of stations, in a compact code:

| Code      | Decoded                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------- |
| `2712`    | Wind from 270° at 12 kt (no temperature at the lowest levels)                                             |
| `2820+10` | Wind from 280° at 20 kt, temperature +10 °C                                                               |
| `3135-08` | Wind from 310° at 35 kt, temperature −8 °C                                                                |
| `9900`    | Light and variable (under 5 kt)                                                                           |
| `7312`    | Wind from 230° at 112 kt: when the speed is over 99 kt, 50 is added to the direction and 100 to the speed |

The forecast gives no wind within 1,500 ft of the station elevation and no temperature within 2,500 ft, so the 3,000 ft column often has wind only. Above 24,000 ft the code drops the temperature sign because it is always negative. Directions are true, like a chart, not magnetic.

For a Skyhawk at 3,500 or 5,500 ft you care about the 3,000 and 6,000 ft columns. Feed them into the wind triangle from [[l6-3-pilotage-and-dead-reckoning]]. The temperatures also give you the freezing level, which matters in [[l11-4-thunderstorms-icing-and-turbulence]].

:::quiz{id="l11-2-q4" type="numeric" answer="115" tolerance="0" unit="kt"}
A winds aloft entry reads `7315`. What is the wind speed?

---

A direction code above 36 means the speed is over 99 kt. Subtract 50 from the direction (73 − 50 = 23, so 230°) and add 100 to the speed: 15 + 100 = 115 kt.
:::

## AIRMETs, SIGMETs and PIREPs

These are the "adverse conditions" of the briefing. **AIRMETs** advise of weather that matters to small aircraft over a wide area. Over the lower 48 they come as graphics (G-AIRMETs), which is how the GFA and 1800wxbrief show them:

| AIRMET     | Covers                                                                                     | For the Skyhawk                           |
| ---------- | ------------------------------------------------------------------------------------------ | ----------------------------------------- |
| **Sierra** | IFR conditions (ceilings under 1,000 ft or visibility under 3 SM) and mountain obscuration | The common one on the coast: marine layer |
| **Tango**  | Moderate turbulence, sustained surface winds above 30 kt, low-level wind shear             | A rough ride and crosswinds beyond limits |
| **Zulu**   | Moderate icing and the freezing level                                                      | A no-go wherever it touches your route    |

**SIGMETs** warn of severe hazards for all aircraft: severe icing, severe or extreme turbulence, dust or sand storms, volcanic ash. A **Convective SIGMET** covers thunderstorms: severe storms, embedded storms, lines or large areas of them. Any SIGMET touching your route makes the flight a no-go.

A **PIREP** is a report from a pilot who just flew in the area. It is the only item in the briefing observed from the air rather than forecast from the ground:

| Field | Means                           | Example          |
| ----- | ------------------------------- | ---------------- |
| `UA`  | Routine PIREP (`UUA` is urgent) | `UA`             |
| `/OV` | Location                        | `/OV SNS`        |
| `/TM` | Time (Zulu)                     | `/TM 1740`       |
| `/FL` | Altitude (hundreds of feet MSL) | `/FL035`         |
| `/TP` | Aircraft type                   | `/TP C172`       |
| `/SK` | Sky condition                   | `/SK OVC TOP018` |
| `/TB` | Turbulence                      | `/TB LGT`        |
| `/IC` | Icing                           | `/IC NEG`        |
| `/RM` | Remarks                         | `/RM CLR ABV`    |

So `UA /OV SNS /TM 1740 /FL035 /TP C172 /SK OVC TOP018 /TB LGT /RM CLR ABV` is a Skyhawk over Salinas at 1740Z, at 3,500 ft, reporting an overcast with tops at 1,800 ft, light turbulence and clear above. Give PIREPs yourself in a real airplane, because another pilot is briefing right now.

## A worked briefing: KLVK to KMRY

You plan to fly from Livermore to Monterey, about 65 nm south, departing at 11 a.m. (18Z) at 5,500 ft. Everything below is an **invented example briefing**, not real weather.

| Briefing item          | What it said (example)                                                                                | So what?                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Adverse conditions     | AIRMET Sierra for IFR conditions, coastal areas Half Moon Bay to Monterey, until 20Z. No SIGMETs      | The destination is in it. Note the end time: 20Z (1 p.m.)                            |
| Synopsis               | Pacific high offshore, weak onshore flow, marine layer along the coast burning off by early afternoon | The classic summer pattern                                                           |
| Current: KLVK          | `25008KT 10SM CLR 22/09 A3010`                                                                        | Clear at home. Spread 13 °C                                                          |
| Current: KMRY          | `30008KT 4SM BR OVC006 14/13 A3012`                                                                   | Below VFR minimums now. Spread 1 °C, so it is not lifting yet                        |
| PIREP                  | `UA /OV SNS /TM 1740 /FL035 /TP C172 /SK OVC TOP018 /RM CLR ABV`                                      | The layer is thin: tops 1,800 ft, clear above. You still need a hole to land through |
| En route forecast      | GFA: VFR inland all day; MVFR along the coast until about 20Z, then VFR                               | The route is fine. The last 10 miles are the problem                                 |
| Destination TAF (KMRY) | `FM132000 31010KT P6SM SCT012 BKN020`                                                                 | From 1 p.m.: VFR, with a scattered layer at 1,200 ft                                 |
| Winds aloft            | 3,000 ft `2810`; 6,000 ft `2915+08`                                                                   | A light quartering headwind, about 15 kt at cruise. No icing: +8 °C at 6,000 ft      |
| NOTAMs                 | KMRY: a taxiway closed. KLVK: none affecting you                                                      | Note it for the taxi plan                                                            |

:::callout{type="decision"}
What is the worst thing on this briefing? It is the destination under a 600 ft overcast in 4 SM of mist, with a 1 °C spread, two hours before the TAF says it clears. The taxiway and the headwind are minor next to that. An 11 a.m. departure arrives about noon, an hour before the forecast improvement, with no guarantee the forecast is right. A good decision is to delay to about 1 p.m. and re-brief, or to go at 11 with Salinas (KSNS, inland and VFR) as a firm alternate and a decision point before descending toward the coast. Taking off at 11 to "see how it looks" with no alternate is the bad decision, and the one the accident reports describe.
:::

The briefing order led you through it. Adverse conditions told you where to look, the synopsis explained why, the METAR said "not now", the PIREP said "but it is thin", the TAF said "by 1 p.m.", and the winds said "no other problems".

## Practice and next steps

To carry forward:

1. Brief in order: adverse conditions, synopsis, now, en route, destination, winds, NOTAMs.
2. In a TAF, FM is a lasting change, TEMPO is short spells you must plan for, PROB30 is "possible".
3. Ask "what is the worst thing on this briefing?" before you ask anything else.

**Practice.** This lesson feeds the `weather-codes` flashcard deck: TAF change groups, winds aloft codes, AIRMET letters and PIREP fields.

**Fly it.** Challenge C11.1 "Go / no-go board" gives you four briefings for this KLVK to KMRY flight and asks for the decision. It opens after [[l11-6-the-go-no-go-decision-and-vfr-into-imc]]. First, [[l11-3-clouds-fog-and-low-visibility]] looks closely at what was wrong with this briefing: the fog.

**Go deeper.** The GFA on aviationweather.gov and a free account at 1800wxbrief.com are how real pilots brief. Both are worth an evening of exploring.
