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
- Two worlds, one Laura: both homepage pathways stay **inside** the counselling site; Parentology World remains a separate site with contextual outbound links only.

---

## Batch titles
0. Codebase assessment + Next.js base (complete)  
1. Fonts, assets, header/footer layout shell (extends Batch 0)  
2. Homepage (desktop + mobile first screen)  
3. Counselling hub + individual service template  
4. Local Parentology gateway  
5. Books showcase + book detail pages  
6. Article template, blog listing, one recovered article  
7. About, practical info / FAQ, contact (verified or placeholders)  
8. Signature world-selection motion  
9. SEO foundations (metadata, sitemap, robots, basic JSON-LD)  

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

## Batch 4 — Local Parentology gateway

```text
Batch 4 of 9. Read docs/reference/references/Parent_Hub.html, previews/Parent_Hub.jpg, archive/Visual_Direction_02/Parentology.html/.png, archive/mockups/04_Parentology_World.png.

Implement app/parentology/page.tsx as a substantive LOCAL gateway (warmer terracotta/clay): Parentology logo, who it supports, parent/teen/In-Touch entry points, accurate RESET steps (Recognise; Empathise; Say what matters; Emotionally regulate together; Take action with confidence), two books, insights entry, clear external continuation to https://www.parentologyworld.com/ (new tab, rel noopener). Do not copy Parentology programmes, vault, or checkout. No invented chapter text — topic cards must link to real local sections or books/blog.

Acceptance: build + lint; distinct warmer atmosphere; external link explicit; 375px OK; commit `feat(batch-4): local Parentology gateway` and stop.
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
- Real links still work without JS; reduced-motion bypass; Escape/skip; focus to destination h1; no WebGL/scroll hijack/autoplay audio
- Do not break Batch 2 mobile first-screen layout

Acceptance: build + lint; reduced-motion OK; commit `feat(batch-8): world selection motion` and stop.
```

---

## Batch 9 — SEO foundations (technical only)

```text
Batch 9 of 9. Implement next metadata for built routes, app/sitemap.ts, app/robots.ts, truthful JSON-LD stubs (Person / Organization counselling only with pack facts — Wixams/Bedford & online; Book where pages exist; BreadcrumbList). No fabricated ratings, medical licences, or AI-guarantee schema. No long-form or SEO copywriting — metadata and structured data only. Canonical + trailing-slash consistency. Preview/noindex notes if any preview path exists.

Acceptance: build + lint; sitemap lists only real routes; commit `feat(batch-9): seo metadata sitemap json-ld` and stop. Summarise remaining work (optional future migration if Joshua approves, Sanity decision, fee confirmation, asset approvals for concept photos).
```

