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
resources: [awc-gfa, 1800wxbrief, faa-weather-handbook]
published: false
lastVerifiedAt: null
simVersion: null
---

## The morning ritual

Every real pilot has the same morning ritual before a cross-country: coffee, then the weather. Not a glance at a phone app that says "sunny, 72°", but a **briefing**: a structured read of what the sky is doing now, what it will do over the next few hours and what the forecasters are worried about.

In [[l11-1-weather-theory-air-masses-fronts-and-stability]] you learned what fronts, stability and the marine layer do. This lesson teaches you to read the products that describe them. By the end you will walk through a full briefing for a flight from Livermore to Monterey and decide what the worst thing on it is.

:::callout{type="sim"}
Nothing in this lesson is a forecast for the sim. MSFS 2024 weather presets are fixed conditions you set, and live weather is a snapshot of now, not a forecast of later ([[l11-5-weather-in-msfs-2024]]). You brief for the sim the way you would brief for a real flight because the habit is the point, not because the sim will surprise you with a front.
:::

## The standard briefing order

When you call Flight Service or open a briefing on 1800wxbrief.com, you ask for a **standard briefing** and you get it in a fixed order. The order is not random. It puts the things that could kill you first and the things that merely annoy you last.

| #   | Item                     | What it answers                                                                            |
| --- | ------------------------ | ------------------------------------------------------------------------------------------ |
| 1   | **Adverse conditions**   | Is there anything out there that should stop this flight? AIRMETs, SIGMETs, closed runways |
| 2   | **Synopsis**             | The big picture: where the fronts, highs and lows are and where they are going             |
| 3   | **Current conditions**   | METARs and PIREPs along the route right now                                                |
| 4   | **En route forecast**    | What the air between the airports will do while you are in it                              |
| 5   | **Destination forecast** | The TAF for where you are landing, at the time you will arrive                             |
| 6   | **Winds aloft**          | Direction, speed and temperature at your cruise altitudes                                  |
| 7   | **NOTAMs**               | Runway closures, lighting outages, TFRs, navigation aids out of service                    |
| 8   | **Anything else**        | ATC delays, special-use airspace, whatever you ask for                                     |

Three kinds of briefing exist. A **standard** briefing is the full set, used when you have not already looked at the weather. An **abbreviated** briefing updates specific items from an earlier briefing. An **outlook** briefing is for a departure more than 6 hours away and gives you the forecast picture to plan around. For every challenge in this module, and every real flight, you want the standard one.

The order matters because of how people read. If the first thing you learn is "AIRMET Sierra for IFR conditions along the coast until 20Z", you read everything after it with the right question in mind: _does this flight still work?_ If you read the winds aloft first, you have already started planning the flight before you know whether it should happen.

:::callout{type="verify"}
Check the standard briefing elements and their order against the current AIM paragraph on preflight briefings (AIM 7-1-5 in recent editions; the paragraph number has moved between editions), and confirm whether Flight Service still issues the "VFR flight not recommended" advisory as a separate item. Confirm the 6-hour threshold for an outlook briefing.
:::

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

Adverse conditions come first so that everything else is read with the question "does this flight still work?" in mind. Then the big picture, then now, then later along the route and at the destination, then the winds for planning, then the NOTAMs.
:::

## TAFs: the forecast for one airport

A **TAF** (terminal aerodrome forecast) is a forecast for the area within about 5 statute miles of one airport, usually for the next 24 hours. It uses the same codes as a METAR, which you can refresh here before reading on:

::widget{name="metar-decoder" mode="explore"}

The difference is time. A METAR says what is happening now; a TAF is a list of time periods, each with its own conditions. Here is an **invented example TAF** for Livermore. It is realistic for a fall night when the marine layer pushes inland, but it is made up for teaching and is not a real forecast.

```
TAF KLVK 131720Z 1318/1418 25010KT P6SM SKC
     FM140200 27006KT P6SM FEW020
     FM140800 VRB03KT 5SM BR SCT008
     TEMPO 1410/1414 2SM BR OVC006
     PROB30 1412/1415 1SM BR OVC003
     FM141700 26008KT P6SM SCT015
```

Decode it line by line. All times are Zulu; Pacific Daylight Time is 7 hours behind.

| Line                             | Decoded                                                                                                              |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `TAF KLVK 131720Z 1318/1418`     | Forecast for Livermore, issued on the 13th at 1720Z, valid from the 13th at 18Z (11 a.m. PDT) to the 14th at 18Z     |
| `25010KT P6SM SKC`               | From the start: wind 250° at 10 kt, visibility more than 6 statute miles, sky clear                                  |
| `FM140200 27006KT P6SM FEW020`   | **From** the 14th at 02Z (7 p.m. PDT): wind 270° at 6 kt, visibility over 6 SM, a few clouds at 2,000 ft AGL         |
| `FM140800 VRB03KT 5SM BR SCT008` | From 08Z (1 a.m.): wind variable at 3 kt, visibility 5 SM in **mist**, scattered cloud at 800 ft                     |
| `TEMPO 1410/1414 2SM BR OVC006`  | Between 10Z and 14Z (3–7 a.m.), **temporary** periods, each under an hour, of 2 SM in mist and an overcast at 600 ft |
| `PROB30 1412/1415 1SM BR OVC003` | Between 12Z and 15Z, a **30% chance** of 1 SM in mist with an overcast at 300 ft                                     |
| `FM141700 26008KT P6SM SCT015`   | From 17Z (10 a.m.): wind 260° at 8 kt, visibility over 6 SM, scattered at 1,500 ft. The marine layer has burned off  |

The three change groups are the whole skill of TAF reading:

| Group      | Meaning                                                                                       | How to treat it                                                       |
| ---------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **FM**     | A complete, lasting change at that time. Everything after FM replaces everything before it    | The new conditions are the forecast until the next FM                 |
| **TEMPO**  | Temporary fluctuations, each lasting less than an hour and together less than half the period | Plan for the TEMPO conditions. They can be there when you arrive      |
| **PROB30** | A 30% probability of those conditions during the period                                       | Treat it as "possible". For VFR, plan as if the worse case can happen |

There is also **BECMG**, a gradual change over a period, which US TAFs use rarely. A TAF has no temperature or altimeter group; use the METAR for those.

Read this one as a pilot. Tomorrow morning at 7 a.m. the TAF says mist, a scattered layer at 800 ft and short spells of an overcast at 600 ft. That is below VFR minimums for the Class D airspace at Livermore. By 10 a.m. it is scattered at 1,500 ft and clearing. The decision writes itself: a 7 a.m. departure is a no-go, a 10:30 departure is fine.

:::callout{type="verify"}
W17 is embedded in METAR mode above. The spec wants a TAF mode (`mode="taf"` or similar) that decodes this example on click; add it once the widget supports TAFs. Check the TAF rules against the Aviation Weather Handbook: 5 SM radius, 24-hour validity (30 hours at some large airports), the TEMPO definition, and the rule that PROB groups are not used in the first 9 hours of a US TAF. The example is invented and must stay labeled "example"; never replace it with a real forecast.
:::

:::quiz{id="l11-2-q1" type="single"}
In the example TAF, what does `FM140800 VRB03KT 5SM BR SCT008` mean?

- [ ] At 08Z on the 14th, wind variable at 3 kt, visibility 5 km in rain, broken cloud at 8,000 ft
- [x] From 08Z on the 14th, wind variable at 3 kt, visibility 5 statute miles in mist, scattered cloud at 800 ft AGL
- [ ] For 8 hours from 14Z, wind 030° variable, visibility 5 SM, scattered cloud at 8,000 ft
- [ ] From 08Z on the 14th, a 30% chance of mist and a scattered layer at 800 ft

---

FM is a lasting change from the stated day and time (the 14th at 0800Z). `VRB03KT` is variable at 3 kt, `5SM` is 5 statute miles, `BR` is mist and `SCT008` is scattered at 800 ft AGL (heights are in hundreds of feet). A 30% chance would be a PROB30 group.
:::

:::quiz{id="l11-2-q2" type="single"}
The TAF includes `TEMPO 1410/1414 2SM BR OVC006`. You plan to arrive at 12Z. What should you expect?

- [ ] Visibility 2 SM and an overcast at 600 ft for the whole period from 10Z to 14Z
- [x] Short spells, each under an hour, of 2 SM in mist and an overcast at 600 ft, any of which could be happening at 12Z
- [ ] A 30% chance of 2 SM and 600 ft overcast
- [ ] An overcast at 6,000 ft between 10Z and 14Z

---

TEMPO means temporary fluctuations, each lasting less than an hour, within that period. They are not continuous, but one of them can be in progress when you arrive, so you plan for them. The height `006` is 600 ft AGL, not 6,000.
:::

## The GFA: the picture, not the code

Text products describe single points. The **Graphical Forecasts for Aviation** (GFA) on aviationweather.gov shows the whole region at once, with a time slider so you can step through the hours of your flight.

| GFA view                             | What it shows                                                                 | Use it for                                                |
| ------------------------------------ | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Clouds**                           | Cloud coverage, bases and tops by area                                        | Will the marine layer cover the hills on my route?        |
| **Surface** (weather and visibility) | Visibility, precipitation, fog, flight category colors (VFR, MVFR, IFR, LIFR) | Where is it below VFR, and is it getting better or worse? |
| **Winds**                            | Winds at the surface and at selected altitudes                                | Headwind, crosswind and the ride over the hills           |
| **Icing**                            | Icing probability and severity by altitude                                    | For the Skyhawk, anywhere this is shaded is a no          |
| **Turbulence**                       | Turbulence by altitude                                                        | Low-level turbulence on a hot afternoon                   |

Walk through it in the same order as the briefing: adverse first. Open the Surface view, drag the slider to your departure time and look for yellow, red and magenta (MVFR, IFR and LIFR) along your route. Drag it forward to your arrival time and look again. Then Clouds for the bases, then Winds for the ride. Five minutes with the slider tells you more than ten minutes of text.

:::callout{type="verify"}
Shot list: "GFA Surface view, NorCal, with the time slider at a marine-layer morning" and "GFA Clouds view for the same hour", annotated with the flight-category colors and the slider. Confirm the current GFA layout and view names on aviationweather.gov; the site was redesigned and names move.
:::

## Winds and temperatures aloft

The **winds and temperatures aloft forecast** (FB) gives wind direction, speed and temperature at fixed altitudes for a set of stations. Each entry is a compact code:

| Code      | Decoded                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------- |
| `2712`    | Wind from 270° at 12 kt (no temperature at the lowest levels)                                             |
| `2820+10` | Wind from 280° at 20 kt, temperature +10 °C                                                               |
| `3135-08` | Wind from 310° at 35 kt, temperature −8 °C                                                                |
| `9900`    | Light and variable (under 5 kt)                                                                           |
| `7312`    | Wind from 230° at 112 kt: when the speed is over 99 kt, 50 is added to the direction and 100 to the speed |

Two gaps to know: no wind is forecast for altitudes within about 1,500 ft of the station elevation, and no temperature within about 2,500 ft, so the 3,000 ft column often has wind only. Above 24,000 ft the temperature sign is dropped because it is always negative.

For a Skyhawk cruising at 3,500 or 5,500 ft, you mostly care about the 3,000 and 6,000 ft columns. Feed them into the wind triangle you learned in [[l6-3-pilotage-and-dead-reckoning]] for your groundspeed and heading. The temperature column also gives you the freezing level, which matters in [[l11-4-thunderstorms-icing-and-turbulence]].

:::callout{type="verify"}
Check the FB decoding rules (the 1,500 ft and 2,500 ft gaps, the "add 50 to direction" rule above 99 kt, the dropped sign above 24,000 ft) against the Aviation Weather Handbook. Confirm the forecast periods currently published (6, 12 and 24 hours).
:::

:::quiz{id="l11-2-q4" type="numeric" answer="115" tolerance="0" unit="kt"}
A winds aloft entry reads `7315`. What is the wind speed?

---

A direction code above 36 means the speed is over 99 kt. Subtract 50 from the direction (73 − 50 = 23, so 230°) and add 100 to the speed: 15 + 100 = 115 kt. Not a day for a Skyhawk at that altitude.
:::

## AIRMETs, SIGMETs and PIREPs

These are the "adverse conditions" of the briefing. **AIRMETs** are advisories of weather that matters to small aircraft over a wide area. They come in three flavors:

| AIRMET     | Covers                                                                                     | For the Skyhawk                           |
| ---------- | ------------------------------------------------------------------------------------------ | ----------------------------------------- |
| **Sierra** | IFR conditions (ceilings under 1,000 ft or visibility under 3 SM) and mountain obscuration | The common one on the coast: marine layer |
| **Tango**  | Moderate turbulence, sustained surface winds of 30 kt or more, low-level wind shear        | A rough ride and crosswinds beyond limits |
| **Zulu**   | Moderate icing and the freezing level                                                      | A no-go wherever it touches your route    |

**SIGMETs** warn of severe hazards for all aircraft: severe icing, severe or extreme turbulence, dust or sand storms, volcanic ash. A **Convective SIGMET** covers thunderstorms: severe storms, embedded storms, lines of storms or large areas of them. Any SIGMET that touches your route is a stop sign.

A **PIREP** is a report from a pilot who was just out there. It is the only product in the briefing that is an observation from the air rather than a forecast from the ground, which makes it gold:

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

So `UA /OV SNS /TM 1740 /FL035 /TP C172 /SK OVC TOP018 /TB LGT /RM CLR ABV` says: a Skyhawk over Salinas at 1740Z, at 3,500 ft, reported an overcast with tops at 1,800 ft, light turbulence, and clear above. Give PIREPs yourself in a real airplane; another pilot is briefing right now and would love to know what you found.

:::callout{type="verify"}
Check the AIRMET categories (and that G-AIRMETs are now the graphical form), the SIGMET and Convective SIGMET criteria, and the PIREP field codes against the Aviation Weather Handbook and AIM 7-1 (PIREPs). Confirm that AIRMET Sierra's IFR definition matches the ceiling and visibility thresholds used in [[l11-3-clouds-fog-and-low-visibility]].
:::

## A worked briefing: KLVK to KMRY

Put it together. You plan to fly from Livermore to Monterey, about 65 nm south, departing at 11 a.m. (18Z) and cruising at 5,500 ft. Everything below is an **invented example briefing**, not real weather.

| Briefing item          | What it said (example)                                                                                | So what?                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Adverse conditions     | AIRMET Sierra for IFR conditions, coastal areas from Half Moon Bay to Monterey, until 20Z. No SIGMETs | The destination is in it. Note the end time: 20Z (1 p.m.)                                                 |
| Synopsis               | Pacific high offshore, weak onshore flow, marine layer along the coast burning off by early afternoon | Classic summer pattern from [[l11-1-weather-theory-air-masses-fronts-and-stability]]                      |
| Current: KLVK          | `25008KT 10SM CLR 22/09 A3010`                                                                        | Clear at home. Spread 13 °C                                                                               |
| Current: KMRY          | `30008KT 4SM BR OVC006 14/13 A3012`                                                                   | Below VFR minimums now. Spread 1 °C, so it is not lifting yet                                             |
| PIREP                  | `UA /OV SNS /TM 1740 /FL035 /TP C172 /SK OVC TOP018 /RM CLR ABV`                                      | The layer is thin: tops at 1,800 ft, clear above. Good to know, but you still need a hole to land through |
| En route forecast      | GFA: VFR inland all day; MVFR along the coast until about 20Z, then VFR                               | The route is fine; the last 10 miles are the problem                                                      |
| Destination TAF (KMRY) | `FM132000 31010KT P6SM SCT012 BKN020`                                                                 | From 1 p.m.: VFR, with a scattered layer at 1,200 ft                                                      |
| Winds aloft            | 3,000 ft `2810`; 6,000 ft `2915+08`                                                                   | A light quartering headwind; about 15 kt at cruise. No icing: +8 °C at 6,000 ft                           |
| NOTAMs                 | KMRY: a taxiway closed. KLVK: none affecting you                                                      | Note it for the taxi plan                                                                                 |

:::callout{type="decision"}
What is the worst thing on this briefing? Not the taxiway, not the headwind. It is the destination sitting under a 600 ft overcast in 4 SM of mist, with a spread of 1 °C, two hours before the TAF says it clears. An 11 a.m. departure arrives at about noon, an hour before the forecast improvement, with no guarantee the forecast is right. The good decision is one of two: **delay** the departure to about 1 p.m. and re-brief before you go, or **go** at 11 with Salinas (KSNS, inland and VFR) as a firm alternate and a decision point before descending toward the coast. Taking off at 11 and "seeing how it looks" with no alternate is the bad decision, and it is the one the accident reports describe.
:::

Notice how the briefing order did the work. Adverse conditions first told you where to look. The synopsis explained why. The METAR said "not now", the PIREP said "but it is thin", the TAF said "by 1 p.m.", and the winds said "no other problems". Every item answered one question, in order.

:::callout{type="verify"}
Confirm the KLVK–KMRY distance and track with a current chart (about 65 nm, roughly south). Confirm KSNS as a sensible inland alternate. Confirm Monterey's airspace class for the arrival (covered in [[l15-1-class-b-and-class-c-operations]]). Every METAR, TAF, PIREP and AIRMET in this section is invented; keep the "example" label.
:::

## Practice and next steps

Three things to carry forward:

1. Brief in order: adverse conditions, synopsis, now, en route, destination, winds, NOTAMs.
2. In a TAF, FM is a lasting change, TEMPO is short spells you must plan for, PROB30 is "possible".
3. Ask "what is the worst thing on this briefing?" before you ask anything else.

**Practice.** This lesson feeds the `weather-codes` flashcard deck: TAF change groups, winds aloft codes, AIRMET letters and PIREP fields.

**Fly it.** Challenge C11.1 "Go / no-go board" gives you four briefings for this same KLVK to KMRY flight and asks for the decision. It opens after [[l11-6-the-go-no-go-decision-and-vfr-into-imc]]. First, [[l11-3-clouds-fog-and-low-visibility]] looks closely at the thing that was wrong with this briefing: the fog.

**Go deeper.** The GFA on aviationweather.gov and a free account at 1800wxbrief.com are how real pilots brief; both are free and both are worth an evening of exploring.
