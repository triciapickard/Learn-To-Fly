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
| `https://www.liveatc.net`                | Not yet    | Cloudflare bot check. Needs a person to open it                                                             |
