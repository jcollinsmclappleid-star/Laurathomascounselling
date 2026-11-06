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

## Parentology World (Batch 2f)

Sister site **http://www.parentologyworld.com/** — homepage strap (“Teen counselling · Parent support · Real-time guidance”) and Laura’s own lines (“When your teenager suddenly changes…”, “Anxiety. Anger. School refusal. Shutdowns. Silence.”, “There is a way through this…”, “I’ll help you understand what’s really going on…”). The homepage **Parentology** band uses that copy, the Parentology World wordmark, and the mother-and-daughter photograph, with one internal link to registry route `/parentology/` (no off-site checkout).

## Live imagery not reused (Batch 2f)

| Asset | Reason |
| --- | --- |
| Pexels stock blocks on current WP homepage | Third-party stock; not Laura’s photography |
| `detail.webp` | Superseded by doorway hero |
| `laura.webp` (pack) | Superseded by live doorway + Bedford-1111 teen/parent portrait |
| Squarespace lifestyle JPGs on Parentology (Aro Ha series) | Third-party / venue lifestyle; not used as Parentology’s homepage identity |
| `public/images/parentology/parentology-hero.webp` | File at the documented Squarespace URL is the **PSA accredited-register badge**, not a parenting photograph. Not used as a panel or section background. |
| Blog post featured images | Registry-only articles; no migration batch |

- **Google Calendar “Book a free call”** external URL on live site — rebuild CTA stays on registry `/contact-me/` only (no new off-site booking integration this batch).
- **Live phone/email in header** — not copied; `src/lib/site.ts` has no verified contact constants yet.
- **Blog teasers, testimonies, fees tables** — out of scope; articles remain registry-only.
- **Parentology sister site** — outbound mention only via `/parentology/` gateway route.

## Logo decision (Batch 2f)

Navigation no longer uses a cream pill. The live **v2a** lockup (`laura-logo-v2a-1280x393.jpg`) is knocked out to transparency. The tree mark keeps its original gold and navy. On the dark green bar the wordmark and credentials are cream (`public/brand/laura-logo-nav-on-green.webp`). On a cream bar they stay the original grey (`public/brand/laura-logo-nav-on-cream.webp`). Proportions are unchanged.

## Parentology on the homepage — rationale

**Chosen:** a clay-coloured Parentology band (`HomeParentologySection`) after About Laura, separate from the counselling story, with the Parentology wordmark, a short intro in Laura’s words from parentologyworld.com, the mother-and-daughter image, and one button to `/parentology/`. The hero route tile still offers the same door, using `family.webp`, but it is only the fork — not Parentology’s home on the page.

**Why this, for UX.** The first mobile screen has to be Laura: eyebrow, doorway photo, headline, intro, and “Book a free call”. Giving Parentology half of that screen would bury the primary counselling action. A route tile alone is also too thin — it cannot carry the wordmark or a sentence in Laura’s voice, so Parentology reads as a second button rather than a second practice. The clay band is the same brand system (forest type, terracotta accent) with Parentology’s own colour and logo, so the two practices stay related and distinct. The button leaves the homepage for the registry page `/parentology/`, where the fuller gateway belongs.

**Why this, for SEO.** The homepage keeps a single H1. Parentology gets its own H2, unique verbatim copy, a descriptive image alt, and an internal link with the anchor “Explore Parentology” to `/parentology/`. That is a clear topical signal and a crawlable path without a second H1, without an off-site checkout link, and without duplicating the whole Parentology site. Testimonials on the sister site are not reused.

**Images.** `family.webp` is the mother-and-daughter photograph used for the Parentology route tile in Batch 2e, and again in the band. The counselling route tile uses `room.webp` (an armchair in a quiet room). The live file previously used there (`counselling-space.webp`, Bedford-Counselling-71) is a windowsill of ornaments, not a counselling room. The PSA badge is not a background; accreditation stays as the small credentials line already on the page.
