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
  - Install and configure a pilot client for MSFS 2024 and connect in observer mode.
  - File a VFR flight plan and fly a first flight that follows the Code of Conduct, with or without a controller online.
challenges: []
resources: [vatsim, vatsim-getting-started, vatsim-code-of-conduct, vpilot, vzoa]
published: false
lastVerifiedAt: null
simVersion: null
---

## Real people on the other end

Every radio call in this course so far has been answered by a computer, or by you playing both parts. Tonight that changes. On **VATSIM** the controller in Oakland Center is a person, sitting at a radar scope, who will answer your call in a real voice, catch your wrong readback, and say "readback correct" when you get it right.

It is the most realistic practice available without a real airplane, and it is free. It is also a shared space with rules, because the pilot in the airliner behind you is a person too. This lesson gets you from "never heard of it" to a first flight that leaves a good impression.

:::callout{type="note"}
Learn-To-Fly is not affiliated with VATSIM, vZOA or the authors of any pilot client. VATSIM is an independent organization with its own rules, which change. Where this lesson describes those rules, the network's own website is the authority.
:::

## What VATSIM is

VATSIM (the Virtual Air Traffic Simulation Network) connects flight simulators worldwide to one shared sky. Volunteer controllers, trained and rated by the network, staff real-world positions: a tower, an approach sector, a center. Pilots connect with a small program called a **pilot client** and appear on the controllers' scopes and in each other's sims.

It sits alongside the other two ways to fly a communication challenge in this course:

| Mode               | Who answers you                                   | Cost                 | Good for                                               |
| ------------------ | ------------------------------------------------- | -------------------- | ------------------------------------------------------ |
| Sim ATC            | MSFS 2024's menu-driven controller                | Free, built in       | Learning the sequence; always available                |
| Self-voiced script | You, reading both sides                           | Free                 | Phraseology practice; always available                 |
| **VATSIM**         | A volunteer controller, or other pilots on UNICOM | Free, account needed | Real voices, real corrections, real traffic            |
| PilotEdge          | Paid professional-style controllers               | Subscription         | Guaranteed coverage on the West Coast during its hours |

Coverage on VATSIM depends on who is online. A Bay Area tower may be staffed on a weekday evening and empty on a weekday morning. That is normal, and the UNICOM section below covers the empty case.

:::callout{type="verify"}
Author note: confirm the current description of VATSIM, its pricing (free), and that pilot clients remain Windows-only, which makes online flying PC-only; check whether any Xbox path exists (v2 Section 9.4). Check VATSIM's guidance on third-party training material before publishing (Section 54.2).
:::

## Account, pilot training and ratings

Joining happens on the VATSIM website, not in the sim. The likely steps:

| Step                          | What happens                                                                                                          |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 1. Register                   | Create an account with your real name and email; you receive a numeric **VATSIM ID**                                  |
| 2. Join a region and division | Pick where you live, not where you fly; your division provides local support                                          |
| 3. New member orientation     | A short online course and test on the basics: the rules, how to connect, what to expect                               |
| 4. Read the Code of Conduct   | You agree to it when you join; the etiquette section below summarizes the parts that bite new pilots                  |
| 5. Pilot ratings (optional)   | Free training courses with the network's partner organizations lead to P1, P2 and higher ratings. Not required to fly |

You do not need a pilot rating to connect and fly VFR. You do need the orientation, and you need a real name: the network does not allow pseudonyms. Keep the VATSIM ID and password; the pilot client asks for both.

:::callout{type="verify"}
Author note: confirm every row against vatsim.net at the time of writing: the registration flow, whether the new member orientation (or any replacement) is mandatory for pilots, the current rating names (P0–P4 or as renamed), and the real-name policy. Update the step names to match the website's own wording.
:::

:::quiz{id="l15-5-q1" type="single"}
What do you need before your first flight on VATSIM?

- [ ] A P1 pilot rating
- [x] A registered account with the new member orientation completed
- [ ] A real-world pilot certificate
- [ ] A paid subscription

---

VATSIM is free and needs **a registered account and the network's new-member orientation**. Pilot ratings are optional training, and no real-world certificate is required.
:::

## Installing and configuring the pilot client

The pilot client is the bridge between MSFS 2024 and the network. For MSFS on Windows the common choice is **vPilot**, which is free. The setup, in outline:

1. **Install** the client on the same PC as the sim, or on a second PC on the same network.
2. **Enter your VATSIM ID and password** in the client settings.
3. **Set a push-to-talk key.** Pick a key or a joystick button you can reach without looking; the same one every time.
4. **Install model matching** so other pilots' airplanes appear as the right type instead of a default model. The client's documentation names the packages it supports.
5. **Turn off the sim's own traffic and ATC.** AI traffic, live traffic and the sim's ATC voices conflict with the network. Only network traffic should appear.
6. **Choose a call sign and type.** Your call sign is the N-number you want on the radio, such as N172SP. The aircraft type is the ICAO code **C172**.
7. **Connect**, first in observer mode (below), then as a pilot.

Start the sim, load your airplane at a parking spot, and only then connect. Never connect on a runway or taxiway: you appear instantly on everyone's scope and in their windows.

:::callout{type="sim"}
The sim's ATC window and the network are not aware of each other. With the sim's ATC on, you would hear two towers at once. Switch the sim's ATC voices off and ignore the ATC menu while you are connected. Use the real COM radios on the G1000 to tune the controller's frequency; the client follows them.
:::

:::callout{type="verify"}
Author note: confirm that vPilot supports MSFS 2024 and is still the client VATSIM recommends; check the current URL, the model-matching recommendation for MSFS 2024, the exact settings names (push-to-talk, VATSIM ID), observer mode, and the MSFS 2024 menu paths for disabling AI traffic, live traffic and ATC voices. Record the client and sim versions. Screenshot for the shot list: "pilot client connect dialog with call sign and type (check the client's terms before publishing)".
:::

## VFR flight plans and remarks

On VATSIM you file a flight plan for every flight, VFR included. It is how the controller knows what you intend before you call. The client has a flight plan form; the network's website has another. The fields that matter for a VFR flight in the Skyhawk:

| Field           | What to enter                                     | Example                                   |
| --------------- | ------------------------------------------------- | ----------------------------------------- |
| Call sign       | Your N-number                                     | N172SP                                    |
| Aircraft type   | ICAO code and equipment, as the form asks         | C172                                      |
| Flight rules    | VFR                                               | V                                         |
| Departure       | ICAO airport code                                 | KLVK                                      |
| Destination     | ICAO airport code                                 | KTCY                                      |
| Cruise altitude | Your planned VFR altitude                         | 3,500                                     |
| Route           | Waypoints or landmarks, or "DCT" for direct       | DCT                                       |
| Remarks         | Anything the controller should know               | "New VATSIM member, Learn-To-Fly student" |
| Voice           | Whether you will use voice, receive only, or text | Voice                                     |

The remark is not an apology. Controllers see it on your strip and slow down, spell things out, and expect "say again". Many pilots on the network started the same way, and the ones who declare it get the most patient controllers.

:::callout{type="verify"}
Author note: confirm the flight plan form fields and the voice/text indicator against the current pilot client and the VATSIM website, including the aircraft type and equipment format the form expects for a G1000 Skyhawk and whether a pattern flight with the same departure and destination is accepted.
:::

:::quiz{id="l15-5-q2" type="single"}
Why put "new VATSIM member" in the remarks of your flight plan?

- [ ] It is required by the Code of Conduct
- [ ] It lets you skip readbacks
- [x] Controllers see it and adjust their pace and phrasing for you
- [ ] It excuses you from filing a route

---

The remark appears on the controller's strip. A controller who knows you are new **speaks slower, spells things out and expects "say again"**. It changes nothing about the rules you follow.
:::

## UNICOM when no controller is online

Most of the time at most airports, nobody is controlling. Then VATSIM works like the non-towered airports of [[l7-2-non-towered-airports-ctaf]]: everyone tunes **UNICOM on 122.800** and self-announces. The calls are the ones you already know, with the airport name at both ends: "Livermore traffic, Skyhawk One Two Three, taxiing to runway two five right, Livermore."

The habit that is different from real life is **text**. On VATSIM UNICOM you send the same calls as short typed messages in the client, so pilots without voice can read them: "N172SP, Livermore, departing 25R, right crosswind." Many pilots do both, voice and text, on UNICOM.

Before you decide nobody is there, check who is online. The client lists controllers in range, and the network's online map shows staffing. VATSIM controllers work **top-down**: if Oakland Center is online and the Livermore tower is not, Center is your tower. Call Center.

:::callout{type="verify"}
Author note: confirm the UNICOM frequency (122.800), whether UNICOM is text only or supports voice on the current network, the top-down coverage rule, and the suggested text format against the VATSIM pilot guidance. Challenge C15.5 allows a UNICOM-only flight; make sure its criteria match what is confirmed here.
:::

:::quiz{id="l15-5-q3" type="single"}
You want to fly a pattern at Livermore on VATSIM. The Livermore tower is not staffed, but Oakland Center is online. Who do you call?

- [ ] Nobody: self-announce on UNICOM 122.800
- [x] Oakland Center, which covers the tower's airspace top-down
- [ ] NorCal Approach, even if it is offline
- [ ] The sim's built-in ATC

---

On VATSIM a higher position covers everything beneath it. With **Center online and the tower unstaffed, Center is your tower**. UNICOM is only for airspace nobody online is covering.
:::

## Listening first

Your first session on the network should involve no flying at all. Connect in **observer mode**, which lets you tune frequencies and hear everything without appearing as an airplane. Park at a busy airport on the network's map, tune the tower, and listen for 30 minutes.

What to listen for:

- How pilots shorten their first call when the frequency is busy, and how controllers shorten call signs.
- How a wrong readback is corrected ("negative, runway two eight **left**") and how calmly it happens.
- How long a quiet gap lasts before someone transmits. On a busy frequency it is less than a second.
- What "stand by" sounds like when a controller is overloaded, and that nobody minds.

An hour of listening does more for your phraseology than a week of reading. Half of flying on the network is knowing when **not** to transmit.

:::callout{type="tip"}
Pair the observer session with LiveATC. Real NorCal Approach and the Bay Area towers sound almost exactly like the better VATSIM controllers, and the comparison teaches you which habits are the network's and which are aviation's.
:::

## Etiquette and the Code of Conduct

The Code of Conduct is short, and most of it is common sense. The parts that catch new pilots:

| Do                                                             | Don't                                                                                                           |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Stay at the controls for the whole time you are connected      | Connect and walk away: an unattended airplane gets disconnected                                                 |
| Connect at a parking spot and disconnect at one                | Connect on a runway, or disconnect while still taxiing or airborne                                              |
| Follow controller instructions, and say "unable" if you cannot | Ignore an instruction, or argue on frequency                                                                    |
| Fly in real time                                               | Pause, slew or speed up time while connected under ATC                                                          |
| Use your real name and a sensible call sign                    | Use someone else's name, an offensive call sign or a real airline's flight number without the airplane to match |
| Be courteous on voice and in text                              | Swear, interrupt, or play with the push-to-talk                                                                 |
| Tell the controller if you need to leave                       | Vanish mid-pattern                                                                                              |

If a controller asks you to do something you do not understand, the right answer is "say again" or "unable, student pilot". If you make a mess of a call, the right answer is to fix it and carry on. Controllers on the network were all new once, and nearly all of them remember it.

:::callout{type="verify"}
Author note: check each row against the current VATSIM Code of Conduct, especially the rules on pausing, slewing and time acceleration while under ATC, the inactivity disconnect period, the call sign rules, and the real-name policy. Quote nothing; paraphrase. Confirm nothing here suggests behavior the Code prohibits (Section 54.2).
:::

:::quiz{id="l15-5-q4" type="multi"}
Which of these break the Code of Conduct? Pick all that apply.

- [x] Pausing the sim on downwind to answer the door while the tower is online
- [x] Connecting while sitting on the runway, ready for takeoff
- [ ] Saying "unable, student pilot" to a complicated instruction
- [x] Disconnecting on short final because the landing looks bad
- [ ] Putting "new member" in the flight plan remarks

---

Pausing under ATC, connecting on a runway and disconnecting in flight all break the Code. **"Unable, student pilot"** and an honest remark are exactly what the network wants from a new pilot.
:::

## vZOA: the Bay Area on VATSIM

The Bay Area and the Sierra belong to **Oakland ARTCC**, run on VATSIM by the virtual facility **vZOA**. Its website lists the positions it staffs, the events it runs, pilot briefings for the busy airports, and the local procedures the controllers expect. Before a flight into San Jose or Oakland, read the facility's pilot briefing for that airport: it tells you the expected VFR arrival routes and which frequency to call first.

Events are the best and the worst time for a first flight: the most controllers online, and the busiest frequencies. Save them for after Challenge C15.5.

:::callout{type="verify"}
Author note: confirm the vZOA website, that it is the Oakland ARTCC facility on VATSIM, and what pilot resources it currently publishes for KLVK, KOAK and KSJC.
:::

## Your first flight: a plan

Put the whole lesson together into one short flight:

1. **The night before**: account done, orientation done, client installed, observer session complete.
2. **Check the map** for who is online in the Bay Area. A tower or Center online is ideal; nobody online means UNICOM.
3. **Load the sim** at a Livermore parking spot, airplane running, sim ATC and AI traffic off.
4. **File the plan**: KLVK to KLVK, VFR, 1,400, "pattern work, new VATSIM member".
5. **Connect**, tune the ATIS if there is one, listen for a minute, then make the call from [[l7-3-towered-airports-and-sim-atc]]: "Livermore Ground, Skyhawk One Two Three, on the northwest apron, request taxi for pattern work with information Alfa."
6. **Fly two circuits** exactly as you would offline, reading back everything.
7. **Taxi to parking, then disconnect.** Say goodbye if the frequency is quiet: "Skyhawk One Two Three, going offline, thanks for the help."

:::callout{type="decision"}
The frequency is a wall of airliners and the controller has said "stand by" twice. The good decision is to keep listening and wait, or to disconnect at the gate and come back on a quieter evening. The bad decision is to taxi without a clearance because "they seem busy". Nobody on the network minds a pilot who waits.
:::

## Practice and next steps

Three things to carry forward:

1. Account, orientation, client, observer session: in that order, before the first call.
2. File a VFR plan for every flight, with an honest remark, and connect only at a parking spot.
3. When nobody is online, UNICOM 122.800 and the CTAF habits from Course 1; when Center is online, Center is your tower.

**Practice.** This lesson feeds the `radio-phraseology` flashcard deck with the network's standard words and the UNICOM text format. Keep drilling [[l15-4-readbacks-and-phraseology]] before each session.

**Fly it.** Challenge C15.5 "Your first VATSIM flight" (P1) is the plan above with scoring: Code of Conduct followed, a flight plan filed, correct calls and readbacks, and a pattern flown to standard.

**Next.** Module 16 begins with [[l16-1-risk-management-for-longer-flights]], where everything from Course 2 comes together into one long cross-country.
