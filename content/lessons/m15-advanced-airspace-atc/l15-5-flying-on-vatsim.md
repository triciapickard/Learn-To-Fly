---
slug: l15-5-flying-on-vatsim
code: L15.5
module: m15-advanced-airspace-atc
order: 5
priority: P0
title: Flying on VATSIM
summary: 'Real people on the other end of the radio: setting up a VATSIM account and pilot client, filing a VFR flight plan, using UNICOM, and making a first flight that follows the rules.'
estimatedMinutes: 30
prerequisites: [l15-4-readbacks-and-phraseology]
objectives:
  - Create a VATSIM account and complete the network's requirements for new pilots.
  - Install and configure a pilot client for MSFS 2024, then connect parked and listen before you fly.
  - File a VFR flight plan and fly a first flight that follows the Code of Conduct, with or without a controller online.
challenges: []
resources: [vatsim, vatsim-getting-started, vatsim-code-of-conduct, vpilot, vzoa]
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

## Real people on the other end

So far in this course, the sim's computer has answered every radio call, or you have played both parts. On **VATSIM** the controller in Oakland Center is a person, sitting at a radar scope, who will answer your call in a real voice, catch your wrong readback, and say "readback correct" when you get it right.

It is the most realistic practice available without a real airplane, and it is free. It is also a shared space with rules, because the pilot in the airliner behind you is a person too. This lesson gets you from "never heard of it" to a first flight that leaves a good impression.

:::callout{type="note"}
Learn to Fly is not affiliated with VATSIM, vZOA or the authors of any pilot client. VATSIM is an independent organization with its own rules, which change. Where this lesson describes those rules, the network's own website is the authority.
:::

## What VATSIM is

VATSIM (the Virtual Air Traffic Simulation Network) connects flight simulators worldwide to one shared sky. Volunteer controllers, trained and rated by the network, staff real-world positions: a tower, an approach sector, a center. Pilots connect with a small program called a **pilot client** and appear on the controllers' scopes and in each other's sims.

It adds to the other two ways to fly a communication challenge in this course:

| Mode               | Who answers you                                   | Cost                 | Good for                                               |
| ------------------ | ------------------------------------------------- | -------------------- | ------------------------------------------------------ |
| Sim ATC            | MSFS 2024's menu-driven controller                | Free, built in       | Learning the sequence; always available                |
| Self-voiced script | You, reading both sides                           | Free                 | Phraseology practice; always available                 |
| VATSIM             | A volunteer controller, or other pilots on UNICOM | Free, account needed | Real voices, real corrections, real traffic            |
| PilotEdge          | Paid professional-style controllers               | Subscription         | Guaranteed coverage on the West Coast during its hours |

Coverage on VATSIM depends on who is online. A Bay Area tower may be staffed on a weekday evening and empty on a weekday morning. That is normal, and the UNICOM section below covers the empty case.

The pilot client for MSFS runs on a Windows PC, so VATSIM is PC-only. There is no Xbox path, and the network has said it does not expect one. On Xbox, the sim's ATC and the self-voiced script are your two modes.

:::callout{type="verify"}
Author decision: desk-verified 2026-10-13 against vatsim.net (free to join; approved pilot client for MSFS 2024 is vPilot, Windows; no console client) and VATSIM's Xbox compatibility statement. Still open: check VATSIM's Commercial Use Policy and any guidance on third-party training material before publishing (Section 54.2).
:::

## Account, pilot training and ratings

You join on the VATSIM website, not in the sim. The likely steps:

| Step                          | What happens                                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Register                   | Create an account with your real, full name and email (you must be 16 or older); you receive a numeric **VATSIM ID**                                    |
| 2. Join a region and division | Pick where you live, not where you fly; your division provides local support                                                                            |
| 3. New Member Orientation     | A short online course and exam in myVATSIM on the basics: the rules, how to connect, what to expect. Your account goes active once you pass             |
| 4. Read the Code of Conduct   | You agree to it when you join; the etiquette section below summarizes the parts that bite new pilots                                                    |
| 5. Pilot ratings (optional)   | Optional training through the network's Pilot Training Department leads to the P1 (VFR), P2 (IFR), P3 (multi-engine) and P4 (ATP) ratings. Not required |

You do not need a pilot rating to connect and fly VFR. You do need the orientation, which the network calls the **P0** rating, and you need to use your real name, because the network does not allow pseudonyms. Keep the VATSIM ID and password. The pilot client asks for both.

:::callout{type="verify"}
Author decision: desk-verified 2026-10-13 against vatsim.net (free, age 16+, real-name rule in Code of Conduct A4, New Member Orientation course and exam mandatory before logging on, P0 the only rating required, P1–P4 names from the VATSIM pilot training blog). Still open: the sign-up form itself could not be read without an account; confirm the region/division step wording and whether ATO training is free before publishing.
:::

:::quiz{id="l15-5-q1" type="single"}
What do you need before your first flight on VATSIM?

- [ ] A P1 pilot rating
- [x] A registered account with the new member orientation completed
- [ ] A real-world pilot certificate
- [ ] A paid subscription

---

VATSIM is free and needs a registered account and the network's new-member orientation. Pilot ratings are optional training, and no real-world certificate is required.
:::

## Installing and configuring the pilot client

The pilot client connects MSFS 2024 to the network. For MSFS on Windows the common choice is vPilot, which is free. The setup, in outline:

1. **Install** the client on the same PC as the sim, or on a second PC on the same network.
2. **Enter your VATSIM ID and password** in the client settings.
3. **Set a push-to-talk key.** Pick a key or a joystick button you can reach without looking, and use the same one every time.
4. **Install model matching** so other pilots' airplanes appear as the right type instead of one of a few default models. When MSFS 2024 support arrived, VATSIM pointed pilots at the free FSLTL package. Check the client's current advice.
5. **Turn off the sim's own traffic and ATC.** AI traffic, live traffic and the sim's ATC voices conflict with the network. Only network traffic should appear. Use free flight, not Career mode, which retunes your radios on its own.
6. **Choose a call sign and type.** Your call sign is the N-number you want on the radio, such as N172SP. The aircraft type is the ICAO code C172.
7. **Connect**, parked, and spend the first session listening (below) before you fly.

Start the sim, load your airplane at a parking spot, and only then connect. Never connect on a runway or taxiway. You appear instantly on everyone's scope and in their windows.

:::callout{type="sim"}
The sim's ATC window and the network work separately. With the sim's ATC on, you would hear two towers at once. Switch the sim's ATC voices off and ignore the ATC menu while you are connected. Use the real COM radios on the G1000 to tune the controller's frequency. The client follows them.
:::

:::callout{type="verify"}
Sim check: desk-verified 2026-10-13: vPilot (vpilot.rosscarlson.dev, v3.12.1 of 15 Feb 2026) is VATSIM's approved client for MSFS 2024; credentials go on its Network tab and the push-to-talk key on its PTT tab; the connect window asks for call sign and type; typed text goes out on the selected COM frequency; the FSLTL advice is from VATSIM's Nov 2024 MSFS 2024 note and may be out of date. Still open: the MSFS 2024 menu paths for disabling AI traffic, live traffic and ATC voices; record client and sim versions; screenshot "pilot client connect dialog with call sign and type (check the client's terms before publishing)".
:::

## VFR flight plans and remarks

On VATSIM an IFR flight must file a flight plan. A VFR flight is only encouraged to. File one anyway, every time. It is how the controller knows what you intend before you call. The client's Flight Plan button opens the network's own form in your browser. The fields that matter for a VFR flight in the Skyhawk:

| Field           | What to enter                                     | Example                                   |
| --------------- | ------------------------------------------------- | ----------------------------------------- |
| Call sign       | Your N-number                                     | N172SP                                    |
| Aircraft type   | ICAO code and equipment, as the form asks         | C172                                      |
| Flight rules    | VFR                                               | V                                         |
| Departure       | ICAO airport code                                 | KLVK                                      |
| Destination     | ICAO airport code                                 | KTCY                                      |
| Cruise altitude | Your planned VFR altitude                         | 3,500                                     |
| Route           | Waypoints or landmarks, or "DCT" for direct       | DCT                                       |
| Remarks         | Anything the controller should know               | "New VATSIM member, Learn to Fly student" |
| Voice           | Whether you will use voice, receive only, or text | Voice                                     |

The remark helps the controller help you. Controllers see it on your strip and slow down, spell things out, and expect "say again". Many pilots on the network started the same way, and the ones who declare it get the most patient controllers. Voice is the network's preferred mode. Receive-only and text-only exist for pilots who cannot use voice.

:::callout{type="verify"}
Author decision: desk-verified 2026-10-13: VFR plans encouraged, IFR required (Code of Conduct B10); vPilot 3.8+ opens the VATSIM ICAO-format web form; voice preferred (Code of Conduct A14). Still open: the live form at my.vatsim.net could not be read without an account; confirm the exact field labels, the type/equipment entry for a G1000 Skyhawk, how the voice capability is entered, and whether a pattern flight with the same departure and destination is accepted.
:::

:::quiz{id="l15-5-q2" type="single"}
Why put "new VATSIM member" in the remarks of your flight plan?

- [ ] It is required by the Code of Conduct
- [ ] It lets you skip readbacks
- [x] Controllers see it and adjust their pace and phrasing for you
- [ ] It excuses you from filing a route

---

The remark appears on the controller's strip. A controller who knows you are new speaks slower, spells things out and expects "say again". It changes nothing about the rules you follow.
:::

## UNICOM when no controller is online

Most of the time at most airports, nobody is controlling. Then VATSIM works like the non-towered airports of [[l7-2-non-towered-airports-ctaf]]: everyone tunes **UNICOM on 122.800** and self-announces. The calls are the ones you already know, with the airport name at both ends: "Livermore traffic, Skyhawk One Two Three, taxiing to runway two five right, Livermore."

Text is the habit that differs from real life. UNICOM carries voice, but many pilots also send the same calls as short typed messages in the client, so pilots without voice can read them: "Livermore traffic, N172SP departing runway 25R, right crosswind departure." Typed text goes out on whichever COM frequency you have selected to transmit on.

Before you decide nobody is there, check who is online. The client lists controllers in range, and the network's online map shows staffing. VATSIM controllers work **top-down**: if Oakland Center is online and the Livermore tower is not, Center is your tower. Call Center. When in doubt, ask.

:::callout{type="verify"}
Author decision: desk-verified 2026-10-13: 122.800 and the duty to monitor and announce (Code of Conduct B5), voice and text both carried (vPilot documentation), top-down coverage (vatsim.net "Finding ATC"), text format from VATSIM's UNICOM guidance. Still open: make the Challenge C15.5 UNICOM-only criteria match this section.
:::

:::quiz{id="l15-5-q3" type="single"}
You want to fly a pattern at Livermore on VATSIM. The Livermore tower is not staffed, but Oakland Center is online. Who do you call?

- [ ] Nobody: self-announce on UNICOM 122.800
- [x] Oakland Center, which covers the tower's airspace top-down
- [ ] NorCal Approach, even if it is offline
- [ ] The sim's built-in ATC

---

On VATSIM a higher position covers everything beneath it. With Center online and the tower unstaffed, Center is your tower. UNICOM is only for airspace nobody online is covering.
:::

## Listening first

Your first session on the network should involve no flying at all. The network's own advice is to connect normally, parked on an apron where you block nobody, and listen. Pick an airport on the network's map that has a tower online, tune it, and listen for 30 minutes. (The client's "observer mode" is for a second pilot sharing a cockpit, not for this.) Stay at the keyboard. A parked, unattended connection also breaks the rules.

What to listen for:

- How pilots shorten their first call when the frequency is busy, and how controllers shorten call signs.
- How a wrong readback is corrected ("negative, runway two eight **left**") and how calmly it happens.
- How long a quiet gap lasts before someone transmits. On a busy frequency it is less than a second.
- What "stand by" sounds like when a controller is overloaded, and that nobody minds.

An hour of listening does more for your phraseology than a week of reading. Much of flying on the network is knowing when not to transmit.

:::callout{type="tip"}
Pair the listening session with LiveATC. Real NorCal Approach and the Bay Area towers sound almost exactly like the better VATSIM controllers, and the comparison teaches you which habits are the network's and which are aviation's.
:::

## Etiquette and the Code of Conduct

The Code of Conduct is short, and most of it is common sense. The parts that catch new pilots:

| Do                                                                       | Don't                                                                                                                            |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Stay at the controls for the whole time you are connected                | Leave the connection unattended: 30 minutes is the hard limit, and under ATC you ask before stepping away                        |
| Connect at a parking spot, and disconnect if you have to leave           | Connect on a runway or taxiway, or vanish mid-pattern without a word to the controller                                           |
| Follow controller instructions, and say "unable" if you cannot           | Ignore an instruction, or argue on frequency                                                                                     |
| Fly in real time                                                         | Pause while connected (only under ATC, with the controller's permission), or speed up time in controlled airspace without asking |
| Use real-world weather: at least the live wind, pressure and temperature | Fly in clear-sky weather while everyone else has the marine layer                                                                |
| Use your real name and a realistic call sign                             | Use a false name, a call sign that implies a status you do not hold, or a fictional aircraft                                     |
| Be courteous on voice and in text, and keep frequencies for operations   | Swear, chat, interrupt, or play with the push-to-talk                                                                            |

If a controller asks you to do something you do not understand, the right answer is "say again" or "unable, student pilot". If you make a mess of a call, the right answer is to fix it and carry on. Controllers on the network were all new once, and nearly all of them remember it.

:::quiz{id="l15-5-q4" type="multi"}
Which of these break the Code of Conduct? Pick all that apply.

- [x] Pausing the sim on downwind to answer the door, without asking the tower
- [x] Connecting while sitting on the runway, ready for takeoff
- [ ] Saying "unable, student pilot" to a complicated instruction
- [x] Switching on time acceleration on downwind without asking the tower
- [ ] Putting "new member" in the flight plan remarks

---

Pausing under ATC without permission, connecting on a runway and speeding up time in controlled airspace without permission all break the Code. "Unable, student pilot" and a "new member" remark are what the network wants from a new pilot.
:::

## vZOA: the Bay Area on VATSIM

The Bay Area and the Sierra belong to Oakland ARTCC, run on VATSIM by the virtual facility **vZOA** at oakartcc.org. Its website shows who is online, the events it runs, and an airports-and-charts page for pilots that was still being rebuilt when this lesson was written. Before a flight into San Jose or Oakland, look there for a pilot briefing. If there is none, the controller's text ATIS and the charts from [[l6-2-airspace]] are enough, and the controller will tell you which frequency to call first.

Events bring the most controllers online, and also the busiest frequencies. Save them for after Challenge C15.5.

## Your first flight: a plan

Put the whole lesson together into one short flight:

1. **The night before**: account done, orientation done, client installed, listening session complete.
2. **Check the map** for who is online in the Bay Area. A tower or Center online is ideal. If nobody is online, use UNICOM.
3. **Load the sim** at a Livermore parking spot, airplane running, sim ATC and AI traffic off.
4. **File the plan**: KLVK to KLVK, VFR, 1,400, "pattern work, new VATSIM member".
5. **Connect**, tune the ATIS if there is one, listen for a minute, then make the call from [[l7-3-towered-airports-and-sim-atc]]: "Livermore Ground, Skyhawk One Two Three, on the northwest apron, request taxi for pattern work with information Alfa."
6. **Fly two circuits** as you would offline, reading back everything.
7. **Taxi to parking, then disconnect.** Say goodbye if the frequency is quiet: "Skyhawk One Two Three, going offline, thanks for the help."

:::callout{type="decision"}
The frequency is a wall of airliners and the controller has said "stand by" twice. The good decision is to keep listening and wait, or to disconnect at the gate and come back on a quieter evening. The bad decision is to taxi without a clearance because "they seem busy". Nobody on the network minds a pilot who waits.
:::

## Practice and next steps

To carry forward:

1. Account, orientation, client, listening session: in that order, before the first call.
2. File a VFR plan for every flight, with a remark that says you are new, and connect only at a parking spot.
3. When nobody is online, use UNICOM 122.800 and the CTAF habits from Course 1. When Center is online, Center is your tower.

**Practice.** This lesson feeds the `radio-phraseology` flashcard deck with the network's standard words and the UNICOM text format. Keep drilling [[l15-4-readbacks-and-phraseology]] before each session.

**Fly it.** Challenge C15.5 "Your first VATSIM flight" (P1) is the plan above with scoring: Code of Conduct followed, a flight plan filed, correct calls and readbacks, and a pattern flown to standard.

**Next.** Module 16 begins with [[l16-1-risk-management-for-longer-flights]], which combines everything from Course 2 in one long cross-country.
