# Live site assessment (Batch 2e)

**Assessed:** 6 November 2026  
**Sources:** [Home](https://www.laurathomascounselling.co.uk/), [About / qualified counsellor](https://www.laurathomascounselling.co.uk/qualified-counsellor/), [Services](https://www.laurathomascounselling.co.uk/services/), [Counselling](https://www.laurathomascounselling.co.uk/counselling/) (HTML fetch; no WordPress import).

## Strongest language & sections (reused on rebuild homepage)

| Theme | Live intent | Rebuild use |
| --- | --- | --- |
| Hero promise | “When everything feels overwhelming…” / practical support, not endless talking | Retained Visual Direction 02 headline; kicker keeps **Counselling in Bedford** |
| How I can help | Three columns: Individual, Couples & Family, Teen & Parent | Below-fold `How I can help` (Batch 2d copy, unchanged) |
| Overwhelm list | Six bullets + “You don’t have to figure this out on your own” | Sage section with live bullet copy |
| About Laura | Welcome, 22 years, Psychology → mental health → counsellor, long/short term | `HomeAboutLaura` under hero + link to `/qualified-counsellor/` |
| Location | Wixams, 4 miles south of Bedford, M1/A421/A6, quiet separate space | Location section + Wixams photo |
| FAQ teaser | Nerve-wracking, sample questions | Links to `/faq-and-fees/` |
| CTA | Book a free call / contact | `/contact-me/` (no phone/email in `site.ts`) |

## Imagery & media on live site

| Asset | Role on live site | Brought into repo |
| --- | --- | --- |
| **DSC8857 doorway portrait** | Primary hero parallax + social/OG image — Laura in doorway | Yes — hero + about (`laura-doorway-*.webp`) |
| **Intro MP4** | About block video (`WhatsApp-Video-…mp4`) | Yes — compressed `public/media/laura-intro.mp4`, click-to-load + poster frame |
| **laura-logo-v2a** | Header on light areas | Yes — `laura-logo-light-header.webp` |
| **laura-logo-v2-01.png** | Alternate / dark-friendly mark | Yes — `laura-logo-dark-header.webp` |
| **Bedford-Counselling-Wixams** | Practice / location | Yes — `wixams-practice.webp` |
| **Bedford-Counselling-71** | Counselling space / room | Yes — `counselling-space.webp` |
| **relationship-5** | Couples / relationship support | Yes — `couples-support.webp` |
| **Bedford-Counselling-1111** | About page portrait | Not duplicated — doorway set covers hero/about |
| **Pexels stock (2026 homepage blocks)** | Decorative section backgrounds | **Not reused** — third-party stock, not Laura’s photography |
| **Concept room/family (rebuild)** | N/A on live WP | Still used for **route panels only** — flagged in `ASSET_APPROVALS.md` |

## Video

- Hosted on Laura’s WordPress uploads (not YouTube/Vimeo).
- Rebuild: self-hosted MP4 (~3.2 MB, 720-wide H.264), poster from frame at 1s (`laura-video-poster.webp`), play on user click (no autoplay).

## Gaps / not taken from live

- **Google Calendar “Book a free call”** external URL on live site — rebuild CTA stays on registry `/contact-me/` only (no new off-site booking integration this batch).
- **Live phone/email in header** — not copied; `src/lib/site.ts` has no verified contact constants yet.
- **Blog teasers, testimonies, fees tables** — out of scope; articles remain registry-only.
- **Parentology sister site** — outbound mention only via `/parentology/` gateway route.

## Logo decision

Replaced CSS-inverted pack PNG on the homepage overlay header with Laura’s **live v2 wordmarks** (dark header variant on forest hero, light variant on cream sticky header).
