---
slug: l18-1-ifr-rules-minimums-currency-alternates-and-fuel
code: L18.1
module: m18-ifr-system
order: 1
priority: P0
title: 'IFR rules: minimums, currency, alternates and fuel'
summary: 'The handful of rules that shape every IFR flight before you start the engine: when you need a clearance, the 1-2-3 rule, alternate minimums, fuel and currency.'
estimatedMinutes: 25
prerequisites: [l11-2-forecasts-and-briefings]
objectives:
  - Decide from a TAF whether an alternate airport is required, using the 1-2-3 rule.
  - Compute the minimum IFR fuel for a flight with and without an alternate.
  - State the instrument currency requirements and when an IFR clearance is required.
challenges: []
resources: [ecfr-91-167, ecfr-91-169, ecfr-61-57, ifh-ifr-flight]
published: false
lastVerifiedAt: null
simVersion: null
---

## The flight you cannot see

In [[l17-1-the-instrument-scan]] you learned to fly without looking outside. Now comes the part that makes instrument flying a _system_ rather than a stunt: the rules that let thousands of airplanes fly through cloud every day without seeing each other.

Those rules start before engine start. Do you need a clearance? A second airport in your plan? How much fuel? Are you even current? This lesson answers each one with a table, then applies the table to a forecast.

:::callout{type="real-world"}
In a real airplane, the instrument rating takes a written test, at least 40 hours of instrument time, IFR cross-countries with an instructor and a practical test. The rules here are real, but applying them to a real flight needs that training and a legal briefing. Here you apply them to sim flights, so the habit is built before the stakes are.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## VFR or IFR: when you need a clearance

Under **VFR** you stay clear of clouds and other airplanes by looking. Under **IFR** you fly an ATC clearance, and ATC keeps you clear of other IFR traffic. The weather decides which is possible.

| Situation                                                     | What you need                                                         |
| ------------------------------------------------------------- | --------------------------------------------------------------------- |
| Weather at or above VFR minimums ([[l6-2-airspace]])          | Nothing extra. Fly VFR, or file IFR anyway if you prefer the service  |
| Weather below VFR minimums in controlled airspace             | An IFR flight plan and an ATC clearance before you enter              |
| Class A airspace (18,000 ft MSL and above)                    | IFR always, whatever the weather                                      |
| Weather below VFR minimums in uncontrolled (Class G) airspace | IFR without a clearance is legal but rare; Learn-To-Fly never does it |

In plain words: **to fly in cloud in controlled airspace, you need a clearance first.** The sim will let you take off into fog without one. Learn-To-Fly's challenges will not.

:::callout{type="verify"}
Check the clearance and flight-plan requirement against 14 CFR 91.173 and the Class A rule against 91.135. Confirm the Class G wording (91.173 applies in controlled airspace only) and keep the learner-facing text as a paraphrase.
:::

## The rules at a glance

The whole module on one card. Each line comes back in the lesson that teaches it.

| Topic                      | The rule, in plain words                                                                                                       | Taught in                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| IFR fuel                   | Enough to fly to the destination, then to the alternate (if one is required), then 45 minutes at normal cruise                 | This lesson                                   |
| Alternate required?        | The 1-2-3 rule: no alternate if, 1 hour either side of your ETA, the ceiling is at least 2,000 ft and visibility at least 3 sm | This lesson                                   |
| Alternate minimums         | Standard: 600 ft and 2 sm for a precision approach, 800 ft and 2 sm for a non-precision one, unless the plate says otherwise   | This lesson                                   |
| Instrument currency        | In the preceding 6 calendar months: 6 instrument approaches, holding, and intercepting and tracking courses                    | This lesson                                   |
| Clearance format           | CRAFT: Clearance limit, Route, Altitude, Frequency, Transponder                                                                | [[l18-3-clearances-and-departures]]           |
| Lost communications        | Route: Assigned, Vectored, Expected, Filed. Altitude: the highest of assigned, MEA or expected. Squawk 7600                    | [[l18-5-enroute-ifr-and-lost-communications]] |
| Descending below DA or MDA | Only with the required visibility and the runway environment in sight, from a normal descent to a landing                      | [[l20-1-anatomy-of-an-instrument-approach]]   |

:::callout{type="verify"}
Verify each row against the source regulation: fuel 91.167, alternates 91.169, currency 61.57(c), lost communications 91.185, descent below minimums 91.175. The table is from v2 Section 11.2 and is a paraphrase; keep exact wording out of the learner-facing text.
:::

## The 1-2-3 rule

An **alternate** is a second airport you could land at if the destination weather goes bad. Whether you must name one depends only on the destination forecast around your arrival time. Write the rule as three numbers:

- **1** hour before to **1** hour after your estimated time of arrival,
- ceiling at least **2**,000 ft, and
- visibility at least **3** statute miles.

If the forecast meets all three for the whole window, no alternate is required. If any one fails at any point in the window, file an alternate. A "ceiling" is the lowest **broken** or **overcast** layer; FEW and SCT do not count ([[l11-2-forecasts-and-briefings]]).

Two invented forecasts, labelled as fiction. Your ETA in each case is 2100Z.

| Forecast (fictional)                                                              | Window 2000Z–2200Z                                  | Alternate?   |
| --------------------------------------------------------------------------------- | --------------------------------------------------- | ------------ |
| `TAF KLVK 131720Z 1318/1418 25010KT P6SM FEW040 SCT250`                           | No ceiling (FEW and SCT only), visibility over 6 sm | Not required |
| `TAF KMRY 131720Z 1318/1418 29008KT 3SM BR OVC008 FM132200 30006KT 1SM BR OVC004` | Ceiling 800 ft overcast, visibility 3 sm            | Required     |

The second forecast fails on ceiling alone; one failure is enough. Temporary (TEMPO) and probability groups count too: if a TEMPO line drops the ceiling below 2,000 ft inside your window, plan the alternate.

:::callout{type="verify"}
The 1-2-3 rule is 14 CFR 91.169(b). Confirm the treatment of TEMPO and PROB groups against the current FAA guidance (the AIM and FAA legal interpretations on 91.169) and the 3 sm visibility boundary. Both TAFs above are invented for teaching and must stay labelled as fictional.
:::

:::quiz{id="l18-1-q1" type="single"}
Your ETA is 1500Z. The destination TAF (fictional) reads `1312/1412 20012KT P6SM BKN025` with no changes forecast. Is an alternate required?

- [ ] Yes, because the sky is broken
- [x] No, because the ceiling is above 2,000 ft and visibility is above 3 sm for the whole window
- [ ] Yes, because the wind is over 10 kt
- [ ] Only if the flight is at night

---

A broken layer at 2,500 ft is a ceiling of 2,500 ft, which is above 2,000 ft. Visibility is more than 6 sm. Both conditions hold from 1400Z to 1600Z, so no alternate is required. Wind and darkness play no part in the 1-2-3 rule.
:::

:::quiz{id="l18-1-q2" type="single"}
Your ETA is 0300Z. The destination TAF (fictional) reads `1218/1318 10005KT P6SM SCT020 TEMPO 1302/1305 2SM BR BKN010`. Is an alternate required?

- [x] Yes, the TEMPO group puts a 1,000 ft ceiling and 2 sm visibility inside your window
- [ ] No, the main forecast shows scattered clouds and good visibility
- [ ] No, TEMPO groups never count
- [ ] Only if the TEMPO lasts more than 4 hours

---

Your window is 0200Z to 0400Z. The TEMPO group covers 0200Z to 0500Z and forecasts a 1,000 ft ceiling and 2 sm visibility. Either number on its own fails the rule, so an alternate is required.
:::

## Alternate minimums and the "A" on the plate

An alternate is only useful if you could land there, so its forecast must be at or above its **alternate minimums** at your ETA there. The standard values depend on its best approach:

| Best approach at the alternate                         | Standard alternate minimums (forecast at ETA)                     |
| ------------------------------------------------------ | ----------------------------------------------------------------- |
| Precision (ILS, or an LPV treated by the rule as such) | Ceiling 600 ft and visibility 2 sm                                |
| Non-precision (LNAV, LOC, VOR)                         | Ceiling 800 ft and visibility 2 sm                                |
| No instrument approach at all                          | Descent from the MEA and landing must be possible under basic VFR |

Many airports have **non-standard** alternate minimums. The approach plate shows a small triangle with an **A** inside: look the airport up in the alternate minimums section of the d-TPP. **NA** next to it means the airport cannot be an alternate at all, usually because its weather reporting is not reliable enough. You will find these symbols in [[l18-2-ifr-charts-and-the-approach-plate]].

:::callout{type="verify"}
Standard alternate minimums are in 14 CFR 91.169(c). Confirm the current wording for how RNAV (GPS) approaches with LPV minima are treated when planning an alternate (there are restrictions on using GPS approaches at both the destination and the alternate: AIM 1-1-17 and the d-TPP alternate minimums notes). Confirm the triangle-A and NA symbols against the Chart Users' Guide.
:::

:::callout{type="decision"}
A forecast that needs an alternate is not a reason to cancel. It is a reason to plan properly: pick an alternate with better weather, check its minimums, add its fuel, and go. The pilot who gets caught is the one who skipped the arithmetic and hoped.
:::

## IFR fuel

The fuel rule follows from the alternate rule. You must take off with enough fuel to:

1. fly to the destination and shoot the approach,
2. fly from there to the alternate (if one is required), and
3. fly for **45 minutes** more at normal cruise.

Work it with time, then turn time into gallons. The Skyhawk burns {{aircraft.fuelBurn}}.

| Leg                                                  | Time           | Fuel at 10 GPH |
| ---------------------------------------------------- | -------------- | -------------- |
| Livermore to the destination, including the approach | 1 h 30 min     | 15 gal         |
| Missed approach and flight to the alternate          | 30 min         | 5 gal          |
| Reserve                                              | 45 min         | 7.5 gal        |
| **Minimum at takeoff**                               | **2 h 45 min** | **27.5 gal**   |

That is the legal floor. Add taxi fuel, a margin for a hold, and your personal minimum from [[l8-1-decision-making-and-personal-minimums]]. With {{aircraft.fuelCapacity}}, fuel is rarely the problem on a short IFR flight, but the arithmetic is the habit.

:::callout{type="verify"}
IFR fuel is 14 CFR 91.167. The 10 GPH planning figure comes from `aircraft.yaml`; recheck the burn in the sim at the cruise power used in Course 3 challenges.
:::

:::quiz{id="l18-1-q3" type="numeric" answer="165" tolerance="0" unit="min"}
Your flight to the destination will take 1 hour 30 minutes, the alternate is 30 minutes further, and an alternate is required. How many minutes of fuel must you have at takeoff?

---

Destination 90 min, alternate 30 min, reserve 45 min: 90 + 30 + 45 = 165 minutes, or 2 hours 45 minutes.
:::

## Instrument currency and proficiency

Rated is not the same as current. To act as pilot in command under IFR, within the preceding **6 calendar months** you must have logged:

| Task                              | Count |
| --------------------------------- | ----- |
| Instrument approaches             | 6     |
| Holding procedures and tasks      | Yes   |
| Intercepting and tracking courses | Yes   |

If the 6 months pass, you get a further 6 months to regain currency with a safety pilot or instructor; after that an **instrument proficiency check** is required. Currency is the legal minimum; **proficiency** is whether you can do it well today. A pilot with 6 approaches 5 months ago is current but may not be proficient.

A home simulator does not count toward real currency. Learn-To-Fly's logbook tracks your sim approaches and holds as a habit tracker, so you can see when your skills are getting stale.

:::callout{type="verify"}
Currency is 14 CFR 61.57(c); the grace period and the IPC are 61.57(d). Confirm the current wording on what counts as an approach and on simulator credit (FAA-approved devices only). The Learn-To-Fly logbook is not a legal logbook (v2 D2-12).
:::

:::quiz{id="l18-1-q4" type="multi"}
Which of these are required to be instrument current? Pick all that apply.

- [x] 6 instrument approaches in the preceding 6 calendar months
- [x] Holding procedures and tasks in the preceding 6 calendar months
- [x] Intercepting and tracking courses in the preceding 6 calendar months
- [ ] 3 night landings in the preceding 90 days

---

Approaches, holding, and intercepting and tracking courses are the three parts of instrument currency. Night landings are passenger-carrying currency, a separate rule from [[l12-3-night-operations-preflight-to-landing]].
:::

## Practice and next steps

Four numbers to remember: **1-2-3** for the alternate decision, **600-2** and **800-2** for the alternate itself, **45 minutes** of reserve, and **6 in 6** for currency.

**Practice.** This lesson feeds the `ifr-rules` flashcard deck: the 1-2-3 rule, standard alternate minimums, the IFR fuel formula and the currency tasks.

**Fly it.** No challenge yet. The planning you learned here opens every Course 3 flight, starting with Challenge C18.3 "IFR departure and enroute" after [[l18-5-enroute-ifr-and-lost-communications]].

**Next.** [[l18-2-ifr-charts-and-the-approach-plate]] shows you the charts the rules point at: the enroute chart with its minimum altitudes, and the approach plate with its "A" symbol and minima.
