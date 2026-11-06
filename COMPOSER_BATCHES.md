# Laura Thomas Counselling — Cursor Composer batches

**Repo:** `jcollinsmclappleid-star/Laurathomascounselling`  
**Reference pack path in repo:** `docs/reference/`  
**Authority:** `docs/reference/00_START_HERE.md` → `START_IN_CURSOR.md` → `DESIGN_TOKENS.md` → `references/*.html` + Visual Direction 02.

**Batch 0 (complete):** Next.js 16 App Router base repurposed from donor tooling — tokens, shared components, SEO stubs. No full pages.  
**Batch 1 extends Batch 0** — do not re-scaffold or run `create-next-app`; add fonts, public assets, header/footer shell only.

## How to run
1. Open the Laura repo in Cursor.
2. Merge / check out the `reference-pack` branch (or copy `docs/reference/` into the project) so Composer can see the pack.
3. Paste **one batch only** into Composer (Agent mode). Wait for a clean commit before the next batch.
4. Every batch must end with: `npm run build` green, lint/typecheck if configured, and a quick **375×667** viewport check of touched routes. Then **stop and commit**.

## Global rules (every batch)
- Next.js **App Router** + **TypeScript**. Pin current stable Next/React and commit the lockfile.
- Design tokens: forest `#173e35`, cream `#f4efe4`, sage `#dce3d3`, terracotta `#9b4935`, clay `#e6cbbb`. Headings: Cormorant Garamond; body/nav: Inter (files under `docs/reference/assets/font-*.woff2` — note they are TrueType data in `.woff2` names; follow `docs/reference/archive/assets/fonts.css` / convert correctly).
- Use real logo `original-00-00.png`, portrait `laura.webp`, Parentology logo `logo-parentology-alpha.webp`, verified covers `book-girls.webp` / `book-boys.webp`. `room.webp` and `family.webp` are **generated concept** images — flag for client approval; do not present as Laura’s real practice/clients.
- Preserve useful URLs: `/`, `/services/`, `/counselling/`, `/couples-counselling/`, `/family-therapy-2/`, `/counselling-for-young-people/`, `/online-counselling/`, `/parentology/`, `/books/`, `/books/[slug]/`, `/counselling-blog/`, `/qualified-counsellor/`, `/fully-qualified/`, `/faq-and-fees/`, `/contact-me/`, plus original root article slugs when migrating.
- **Do not invent** credentials, fees, session formats, availability, testimonials, chapter quotes, or contact details. Prefer pack facts, or clear `[PLACEHOLDER: …]` copy.
- **No WordPress / legacy content migration** in Composer batches unless Joshua explicitly approves a dedicated migration effort — no fetching, scraping, importing, recreating articles/pages, or building migration inventories during design/infrastructure work.
- Keep `docs/reference/` **out of** `public/` and the production bundle. Copy needed assets into `public/` or import via the app asset pipeline.
- No CMS backend, no live enquiry form success simulation, no DNS/deploy, no Parentology rebuild/checkout.
- Two worlds, one Laura: both homepage pathways stay **inside** the counselling site; Parentology World remains a separate site with contextual outbound links only. Any link that leaves for Parentology World must say that it opens parentologyworld.com.
- **Parentology URLs (Batch 2h):** Revision 2 proposed new pages under `/parenting/`. This repo uses `/parentology/` for those eight P1 routes instead. That is a deliberate deviation so the live 301 from `/parenting/` to `/parenting-and-family-support/` stays exactly as it is. `/parentology/` and the other seven P1 slugs 404 on the live site today, so they do not clash with an existing URL.
- **Parentology copy:** public wording for the new section comes from `docs/reference/parentology-rev2/Rewritten_Page_Content.md`, not pasted from parentologyworld.com. Unconfirmed commercial facts (prices, hours, packages, response times) and credentials stay out of public copy until Laura confirms them. Do not put M.Ed, M.Sc., MNCPS (Accred.) or MNCS (Accred.) in page copy until then. The logo image may still show the lockup printed on it.
- **P2 routes** stay unregistered and unlinked until the conditional batch below, and only after Laura approves.

---

## Batch titles
0. Codebase assessment + Next.js base (complete)  
1. Fonts, assets, header/footer layout shell (extends Batch 0)  
2. Homepage (desktop + mobile first screen)  
3. Counselling hub + individual service template  
4a. Parenting shell, hub, and click-to-load video  
4b. Support for you, In-Touch, and RESET  
4c. Practical tools, workshops, and two workshop pages  
5. Books showcase + book detail pages  
6. Article template, blog listing, one recovered article  
7. About, practical info / FAQ, contact (verified or placeholders)  
P2. Conditional Parentology expansion — after Batch 7, only once Laura approves  
8. Signature world-selection motion  
9. SEO foundations and Parentology launch QA (metadata, sitemap, robots, basic JSON-LD)  

---

## Batch 1 — Fonts, assets, layout shell (extends Batch 0)

```text
Batch 1 extends the Batch 0 Next.js base — do NOT run create-next-app or re-scaffold.

Scope: copy fonts (TrueType files named .woff2 in the pack — rename to .ttf or set format correctly), wire next/font/local, copy listed assets into public/, Header + Footer shell, stub home. Read docs/reference/references/Home.html + Mobile_Home.html for header chrome only.

Acceptance: build + lint; 375px no horizontal scroll; commit `chore(batch-1): fonts, assets, layout shell` and stop. Batch 2 implements the homepage.
```

---

## Batch 2 — Homepage (desktop + mobile first screen)

```text
Batch 2 of 9. ONLY the homepage. Read docs/reference/references/Home.html, Mobile_Home.html, previews/Desktop_Home.jpg, previews/Mobile_Home.jpg, archive/Visual_Direction_02/BRANDING_AND_MOBILE_MVP_NOTES.md and Mobile_First_Screen_Checks.json.

Implement app/page.tsx as the Visual Direction 02 homepage:
- Cream header already in shell; deep photographic hero with concept room image, kicker, editorial headline “Different journeys. The right support for you.”, Meet Laura link to about route, arched portrait of Laura with caption “Laura Thomas · M.Ed · MNCPS (Accred.)” (desktop).
- Two large pathway cards (not tiny): Counselling “A space for you.” → /services/ ; Parentology “Growing together.” → /parentology/. Real <Link>s, ≥44px targets.
- MOBILE FIRST SCREEN NON-NEGOTIABLE: at 320×568, 375×667, 390×664, 390×844, 430×740 both pathway cards fit in the first viewport with logo/menu — use the compact mobile composition from the references, not a tall desktop stack. Check getBoundingClientRect bottoms ≤ innerHeight at those sizes (standard text size).
- Trust bar: credentials / author / Wixams Bedford & online.
- Below fold OK for later sections (concise Laura intro, service entry points, two books, article teasers, enquiry CTA) using verified or clearly flagged draft copy — prefer structure with placeholders rather than inventing advice.
- next/image with explicit sizes; do not stretch faces; flag room/family as concept imagery in a short HTML comment or review note file docs/ASSET_APPROVALS.md.

Acceptance: build + lint; desktop matches hierarchy of Home reference; mobile first-screen rule; no horizontal overflow at 375px; commit `feat(batch-2): homepage desktop + mobile first screen` and stop.
```

---

## Batch 3 — Counselling hub + individual service template

```text
Batch 3 of 9. Read docs/reference/references/Individual_Service.html, previews/Individual_Service.jpg, archive/mockups/03_Counselling_World.png, archive/mockups/07_Individual_Counselling.png, and WordPress inventory rows for counselling pages.

Create:
- app/services/page.tsx — counselling hub (sage/green quieter atmosphere): intro + links to individual, couples, family, young-person, online.
- app/counselling/page.tsx — complete individual-counselling template (hero, audience, approach, practical info section with PLACEHOLDERS for fees/availability, FAQs stubs, related support, enquiry CTA to /contact-me/).
- Stub routes (can reuse a shared ServicePage layout with inventory-sourced titles/excerpts only): couples-counselling, family-therapy-2, counselling-for-young-people, online-counselling. No invented clinical claims.

Acceptance: build + lint; /services and /counselling render; 375px OK; commit `feat(batch-3): counselling hub + individual service template` and stop.
```

---

## Batch 4a — Parenting shell, hub, and video

```text
Batch 4a. Replaces the old gateway-only Batch 4. Read docs/reference/parentology-rev2/ (Revision 2 supersedes that gateway plan), especially UI_UX_Design_Brief.md, Page_Briefs.md and Rewritten_Page_Content.md R01.

URL deviation: build under /parentology/, not the pack’s /parenting/ paths. The live site 301-redirects /parenting/ to /parenting-and-family-support/; that redirect stays. Do not add a page at /parenting/. /parentology/ and the other seven P1 slugs 404 on the live site today.

Batch 2h already registered the eight P1 routes and shipped a minimal /parentology/ hub so the homepage choice is not a dead link. This batch finishes the section shell:
- Breadcrumbs, subnav (Find support · In-Touch · RESET · Tools · Workshops) and the reusable templates in the design brief.
- Bring the hub up to the full R01 layout (support choices, book links, approved imagery). Do not link unpublished P2 pages.
- Reusable click-to-load video: poster, provider ID, direct watch fallback. A player is not complete until playback is actually checked. Do not rehost YouTube files or expose member resources.

Copy comes from Rewritten_Page_Content, not pasted from parentologyworld.com. Omit unconfirmed prices, response times and credentials.

Acceptance: direct entry, keyboard and mobile work; no empty topic pages linked; no existing counselling URL changed; build + lint; commit and stop.
```

---

## Batch 4b — Support, In-Touch, and RESET

```text
Batch 4b. Read the Revision 2 page briefs and Rewritten_Page_Content R02–R04.

Build only:
- /parentology/support-for-you/
- /parentology/ongoing-guidance/ (In-Touch)
- /parentology/responding-with-reset/

Use the rewritten drafts. Keep one facts record per agreed service. Do not publish unconfirmed prices, hours or Core/Plus cards. Do not imply an emergency or overnight service. Link therapy for a young person to the existing /counselling-for-young-people/ page rather than duplicating it. Parent strategy sessions stay unpublished until Laura confirms a distinct offer (that route is P2, not this batch).

Link to the existing /parenting-and-family-support/ and /parenting-teens/ pages as different counselling URLs. Do not redirect them and do not copy their bodies onto these new pages.

Acceptance: original local explanation; no invented credentials or outcome guarantees; build + lint; commit and stop.
```

---

## Batch 4c — Tools and workshops

```text
Batch 4c. Read Rewritten_Page_Content R05–R08 and the resource/video registers.

Build only:
- /parentology/practical-tools/
- /parentology/learn-at-your-pace/
- /parentology/learn-at-your-pace/when-parenting-feels-too-much/
- /parentology/learn-at-your-pace/understanding-self-harm/

Distinguish free, sign-up, paid and member-only access with labels. Use existing authorised purchase destinations. Do not build payment processing, customer accounts, video streaming, a membership system or an AI assistant. Do not import blog posts or put private files in public/. Where confirmation is outstanding, show the public description and a verified access destination rather than the file itself. External actions name Parentology World.

Acceptance: no private file in the public bundle; no blog import; build + lint; commit and stop.
```

---

## Batch P2 — Conditional expansion (after Batch 7, only once Laura approves)

```text
Not part of the default sequence. Run only after Batch 7 is complete and only once Laura approves the conditional offers and topic copy. Until then the nine P2 routes stay unregistered and unlinked. This does not block Batches 8 or 9.

This is the pack’s “shared authority and topic clusters” batch, on the /parentology/ prefix (same URL deviation as 4a–4c):
- /parentology/exams-with-less-pressure/
- /parentology/understanding-your-teen/ and its five topic pages
- /parentology/support-for-schools/
- /parentology/a-plan-for-your-family/

Develop a route only when its service details and original copy are approved. Do not manufacture book chapters or near-duplicate pages. Do not import the separate practitioner network as Laura’s staff. Leave unfinished routes unpublished and do not link them.

Acceptance: one useful reader need per published page; unapproved prices and credentials still omitted; build + lint; commit and stop.
```

---

## Batch 5 — Books showcase + book detail pages

```text
Batch 5 of 9. Read docs/reference/references/Book_Detail.html, previews/Book_Detail.jpg, archive/Visual_Direction_02/Books.html/.png, mockups 06 + 11.

Implement:
- app/books/page.tsx showcase with both verified covers (CSS perspective tilt decorative only on fine pointers).
- app/books/[slug]/page.tsx for `parenting-unstoppable-girls` and `parenting-teen-boys-with-confidence` (exact titles; accessible text outside artwork; retailer links only if present in pack — else PLACEHOLDER).
- content/books/*.json or MD with metadata schema; no invented ISBN/quotes/chapters.

Acceptance: build + lint; covers undistorted; commit `feat(batch-5): books showcase + detail pages` and stop.
```

---

## Batch 6 — Article template + blog listing (placeholder content only)

```text
Batch 6 of 9. Read docs/reference/references/Article.html and previews/Article.jpg for layout only — do NOT recover WordPress posts or read WordPress_Content_Inventory.csv for migration.

Implement structured content files (MD/MDX or JSON) + shared Article template:
- app/counselling-blog/page.tsx listing with placeholder sample entries (clearly marked draft — not migrated WordPress content)
- One sample article route using placeholder title/body to prove the template (no original root slug recovery)
- Shared tag-archive template stub generating from the same placeholder collection (even if only one tag)

No CMS. No WordPress recovery or migration. Full historical content migration deferred until Joshua approves.

Acceptance: build + lint; template routes work; commit `feat(batch-6): article template + blog listing placeholders` and stop.
```

---

## Batch 7 — About, practical info / FAQ, contact

```text
Batch 7 of 9. Use inventory + pack facts only.

Routes: /qualified-counsellor/ (about), /fully-qualified/ if useful alias or redirect note, /faq-and-fees/ (fees as PLACEHOLDER pending Laura confirmation — do not invent prices), /contact-me/ (contact options as links/placeholders; NO working form with simulated success; report missing booking config).

Acceptance: build + lint; no invented fees/phone; commit `feat(batch-7): about, faq placeholders, contact` and stop.
```

---

## Batch 8 — Signature world-selection motion

```text
Batch 8 of 9. Read START_IN_CURSOR signature motion + E spec transition section + interactive concept only as choreography reference.

Add Motion for React (free core) in client boundaries:
- Persistent transition provider in layout
- Homepage pathway click: restrained expand (~450–650ms) into local /services or /parentology; counselling calmer/sage, parent warmer/terracotta
- Real links still work without JS and without waiting for the animation. Batch 2h choice cards are ordinary links; motion may enhance them and must not block navigation.
- reduced-motion bypass; Escape/skip; focus to destination h1; no WebGL/scroll hijack/autoplay audio
- Do not break Batch 2 mobile first-screen layout

Acceptance: build + lint; reduced-motion OK; commit `feat(batch-8): world selection motion` and stop.
```

---

## Batch 9 — SEO foundations and Parentology launch QA

```text
Batch 9. SEO foundations, plus the Revision 2 launch-QA batch (the pack’s final QA), folded in here.

SEO: next metadata for built routes, app/sitemap.ts, app/robots.ts, truthful JSON-LD stubs (Person / Organization counselling only with confirmed facts — Wixams/Bedford & online; Book where pages exist; BreadcrumbList). No fabricated ratings, medical licences, or AI-guarantee schema. No long-form or SEO copywriting — metadata and structured data only. Canonical + trailing-slash consistency.

Launch gate stays in force until Joshua approves indexing: SITE_INDEXABLE false, robots noindex/nofollow, X-Robots-Tag, robots.txt Disallow: /, empty sitemap, no canonical pointing at the live production domain. Do not deploy or change DNS. The live 301 from /parenting/ to /parenting-and-family-support/ stays; do not replace it with the Parentology hub.

Parentology QA (from the Revision 2 launch batch): page titles and descriptions, server-rendered main content, source-to-route coverage against the eight P1 routes, structured data that matches visible copy, and actual CTA destinations. Test launch routes at 320, 390, 768 and 1440px, on a short screen, at 200% zoom, and with keyboard, focus, reduced motion and direct entry. Check image dimensions, contrast, video fallback, and that external Parentology links name parentologyworld.com. Provide screenshots, the route/content ledger, and the approved versus still-open list. Do not submit live bookings, purchases or enquiries while checking links.

Copy check: parenting pages still match Rewritten_Page_Content, not a paste from parentologyworld.com. Unconfirmed commercial facts and credentials are still absent.

Acceptance: build + lint; sitemap lists routes only when SITE_INDEXABLE is true, and stays empty while it is false; commit `feat(batch-9): seo metadata sitemap json-ld` and stop. Summarise remaining work (optional future migration if Joshua approves, Sanity decision, fee confirmation, asset approvals, Laura’s open decisions D01–D14).
```

