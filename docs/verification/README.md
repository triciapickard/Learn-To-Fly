# Phase 12 verification

In-sim QA for v1 (v1.md Section 52, protocol in Section 54).

## Verification baseline (step 12.1)

| Field           | Value                                                    |
| --------------- | -------------------------------------------------------- |
| Simulator       | Microsoft Flight Simulator 2024                          |
| Sim version     | **1.8.16.0**                                             |
| Recorded        | 2026-09-28                                               |
| Content freeze  | From 2026-09-28: only verification fixes until launch    |
| `simVersion` to | `"MSFS 2024 (1.8.16.0)"` in every item verified this run |

If the sim updates during Phase 12, record the new version here. Then re-check the items
already verified, starting with the sample in v1.md Section 54.5.

## Files

| File                             | What it is                                          | How to refresh                             |
| -------------------------------- | --------------------------------------------------- | ------------------------------------------ |
| [`tracker.csv`](./tracker.csv)   | One row per item; your columns are kept on re-runs  | `npm run content:verify-report`            |
| [`checklist.md`](./checklist.md) | Every open verify marker, by module                 | `npm run content:verify-report`            |
| [`links.md`](./links.md)         | External link check: broken, blocked and redirected | `npm run content:links -- --report`        |
| [`app/`](./app/)                 | **LTF Verifier**, a double-click Mac app for ticking off every check in a module and exporting a `.txt` report (see below) | `npm run content:verify-app -- --modules 2,3,4` |
| [`v2-desk/`](./v2-desk/)         | Desk-verification reports per module: what each verify marker was checked against, what changed, what still needs the sim, the POH or an author decision | Written by hand during Phases 22–23 |

## When an item passes

Set these in its content file (Section 54.2), then re-run the report:

```yaml
published: true
lastVerifiedAt: 2026-09-28
simVersion: 'MSFS 2024 (1.8.16.0)'
```

## Manual link checks (step 12.4)

`npm run content:links` cannot get past bot protection, so these links always show as
blocked in [`links.md`](./links.md). Check them by hand in a browser before each release.

| URL                                      | Checked    | Result                                                                                                      |
| ---------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------- |
| `https://support.garmin.com/`            | 2026-10-09 | OK in a browser (sends you to your regional support page)                                                   |
| `https://www.ecfr.gov/current/title-14`  | 2026-10-09 | eCFR shows browsers a CAPTCHA. URL and sections 91.151, 91.155 and 91.159 confirmed through the eCFR search API |
| `.../part-91/section-91.151`             | 2026-10-09 | As above                                                                                                    |
| `.../part-91/section-91.155`             | 2026-10-09 | As above                                                                                                    |
| `.../part-91/section-91.159`             | 2026-10-09 | As above                                                                                                    |
| `https://www.liveatc.net`                | 2026-10-09 | OK in a browser (Cloudflare bot check blocks the script) |

## The verifier app (`app/LTF Verifier.app`)

A self-contained page, wrapped in a macOS launcher, for working through the Section 54
protocol module by module without a spreadsheet. It needs no server and no internet.

1. Rebuild it for the modules you are checking:
   `npm run content:verify-app -- --modules 2,3,4` (it reads the lessons, challenges, open
   verify markers, `tracker.csv` notes and the sim version above).
2. Double-click `docs/verification/app/LTF Verifier.app`. It opens in your default
   browser. If macOS refuses to open it, right-click the app, choose **Show Package
   Contents**, and open `Contents/Resources/index.html` directly.
3. Pick a lesson or challenge on the left. Read each section, then mark every check
   **OK**, **Issue** or **Skip**. An Issue opens a note box: write what the sim or the
   source actually shows and what the text should say instead. "All OK" ticks the rest
   of a group. Challenges also record the tier flown and the minutes it took.
4. Progress saves in the browser as you go. Use the ⋯ menu to save it to a file (or load
   one) if you switch browsers or machines.
5. When a module is done, press **Export report (.txt)** and hand the file to the next
   fix PR. It lists every Issue with its note and file, the other comments, and the full
   tick list.

Rebuilding keeps saved progress for every check whose text has not changed.
