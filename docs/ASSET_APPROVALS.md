# Asset approvals (Batch 2)

| Asset | Path | Status |
| --- | --- | --- |
| Concept counselling interior | `public/images/room.webp` | **Pending client approval** — generated concept imagery, not Laura’s actual practice room. |
| Concept family photograph | `public/images/family.webp` | **Pending client approval** — generated concept imagery, not real clients. |
| Homepage hero (temporary) | `public/images/detail.webp` | **Superseded (Batch 2e)** — replaced by live doorway photo; file may remain until cleanup. |
| Laura portrait (pack) | `public/images/laura.webp` | Reference pack photograph; still available, not primary hero. |
| Book covers | `public/images/book-*.webp` | Verified covers from reference pack. |
| Counselling logo (pack) | `public/brand/original-00-00.png` | Reference pack; **header now uses live logos below**. |

## Live site assets reused (Batch 2e)

| Description | Source URL | Local path |
| --- | --- | --- |
| Laura in doorway (hero) | `https://www.laurathomascounselling.co.uk/wp-content/uploads/2023/02/DSC8857-Edit-Large.png` | `public/images/laura-doorway-hero.webp` |
| Laura in doorway (about) | Same (resized crop) | `public/images/laura-doorway-about.webp` |
| Intro video | `https://www.laurathomascounselling.co.uk/wp-content/uploads/2026/04/WhatsApp-Video-2026-04-13-at-17.59.21.mp4` | `public/media/laura-intro.mp4` |
| Video poster (frame @ 1s) | Extracted from intro video | `public/images/laura-video-poster.webp` |
| Logo — navigation on green (live v2a, transparent, cream wordmark) | `https://www.laurathomascounselling.co.uk/wp-content/uploads/2022/05/laura-logo-v2a-1280x393.jpg` | `public/brand/laura-logo-nav-on-green.webp` |
| Logo — navigation on cream (same asset, original grey wordmark) | Same | `public/brand/laura-logo-nav-on-cream.webp` |
| Teen / parent portrait | `https://www.laurathomascounselling.co.uk/wp-content/uploads/2019/12/Bedford-Counselling-1111-980x1471.jpg` | `public/images/teen-parent-support.webp` |
| Parentology logo (live header wordmark) | `https://images.squarespace-cdn.com/content/v1/66fd780b0c462278f659f97b/b09e73ae-01d0-4177-b36e-6f108285f899/Copy+of+Black+and+White+Minimalist+Elegant+Modern+Typography++Creative+Studio+Brand+Logo+%282000+x+1200+px%29+%285%29.png` | `public/images/parentology/parentology-logo.webp` |
| PSA accredited-register badge (not a hero) | `https://images.squarespace-cdn.com/content/v1/66fd780b0c462278f659f97b/1a3b00dc-4bbe-441f-81b7-d7d2c2e849df/PARENTING+TEENS%2C+TOGETHER+%285%29.png` | `public/images/parentology/parentology-hero.webp` — **do not use as a background** |

## Batch 2f notes

| Note | Detail | |
| --- | --- | --- |
| Legacy header assets | `public/brand/laura-logo-*-header.webp`, `laura-logo-nav.webp` | Superseded by transparent `laura-logo-nav-on-green.webp` / `laura-logo-nav-on-cream.webp` (no cream pill, no CSS invert). |
| Counselling route panel | `public/images/room.webp` | Concept room (armchair). Live `counselling-space.webp` is a windowsill, not a room. |
| Parentology route panel | `public/images/family.webp` | Concept mother-and-daughter photograph, as in Batch 2e. |
| Wixams file (business cards, not the building) | `https://www.laurathomascounselling.co.uk/wp-content/uploads/2019/12/Bedford-Counselling-Wixams-1280x853.jpg` | `public/images/wixams-practice.webp` — do not use as the practice exterior |
| Practice doorway (also on Parentology About) | `https://www.laurathomascounselling.co.uk/wp-content/uploads/2023/02/DSC8857-Edit-Large.png` | `public/images/laura-doorway-hero.webp` — homepage location image |
| Laura portrait used under How I can help | Parentology About, WhatsApp image 8 Mar 2026 | `public/images/laura-parentology-portrait.webp` |
| Laura in the counselling space (individual support) | `https://www.laurathomascounselling.co.uk/wp-content/uploads/2023/02/DSC8821-Edit-Medium.jpeg` | `public/images/individual-support.webp` |
| Counselling room | `https://www.laurathomascounselling.co.uk/wp-content/uploads/2019/12/Bedford-Counselling-71-1280x853.jpg` | `public/images/counselling-space.webp` |
| Couples / relationship | `https://www.laurathomascounselling.co.uk/wp-content/uploads/2021/07/relationship-5-1280x825.jpg` | `public/images/couples-support.webp` |

Do not present concept room/family photography as documentary photos of Laura’s practice or clients until Laura confirms.

## Credentials pending Laura’s confirmation (Batch 2h, decision D09)

The homepage, About section and footer were showing **M.Ed** and **MNCPS (Accred.)**. The live logo file reads **M.Sc., MNCS (Accred)**. Pack decision D09 says qualifications, memberships and professional wording still need Laura’s confirmation. Those text pills and lines are off the page until she confirms them. The logo images stay, including the wording printed in the artwork.

| Removed from | Wording taken off the page |
| --- | --- |
| Homepage, under the hero | Pills: M.Ed; MNCPS (Accred.) |
| Homepage About Laura | Pills: M.Ed; MNCPS (Accred.) |
| Footer | Line: M.Ed · MNCPS (Accred.) |
| Meet Laura panel (component exists; not currently on the page) | Leading “M.Ed · ” |

Not added in their place: M.Sc. or MNCS (Accred.) as text. “Published parenting author” and “Wixams, Bedford & online” remain.

## Parentology Revision 2 images (Batch 2h)

Reference renditions live in `docs/reference/parentology-rev2/assets/`. They are not production masters. Image_Register marks identity and licence as still to confirm.

| ID | Decision |
| --- | --- |
| IMG010 | Same Parentology wordmark already at `public/images/parentology/parentology-logo.webp`. Reused. Not copied again. |
| IMG006, IMG013 | Design brief treats these as Laura portraits. The register still says identity/licence to confirm, so they were **not** copied into `public/`. The hub uses the existing doorway portrait of Laura from her counselling site. |
| IMG001 | Pexels stock (`pexels-cottonbro`). Not used. Not presented as Laura or as a client. |
| Other pack renditions | Left in `docs/reference/` only. Not copied into `public/`. |
| Welcome to Parentology poster | YouTube thumbnail for `YJPXSzILdv4` (oEmbed title “Welcome to Parentology”, author Laura Thomas Psychotherapist) | `public/images/parentology/welcome-video-poster.jpg` — still only. The film is not rehosted. Captions and transcript are not confirmed. Playback of the embedded player still needs a manual check. |
