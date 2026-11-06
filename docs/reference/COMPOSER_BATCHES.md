# Laura Thomas Counselling — Cursor Composer batches

**Repo:** `jcollinsmclappleid-star/Laura-Thomas-Counselling-` (empty Next.js greenfield)  
**Reference pack path in repo:** `docs/reference/`  
**Authority:** `docs/reference/START_IN_CURSOR.md` + `docs/reference/references/*.html` + Visual Direction 02. Archive `F_Phased_Cursor_Prompts.md` / `E_…Specification.md` are supporting specs; do not revive superseded cream-only homepage concepts as the final look.

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
- **Do not invent** credentials, fees, session formats, availability, testimonials, chapter quotes, or contact details. Prefer pack / WordPress inventory facts, or clear `[PLACEHOLDER: …]` copy.
- Keep `docs/reference/` **out of** `public/` and the production bundle. Copy needed assets into `public/` or import via the app asset pipeline.
- No CMS backend, no live enquiry form success simulation, no DNS/deploy, no Parentology rebuild/checkout.
- Two worlds, one Laura: both homepage pathways stay **inside** the counselling site; Parentology World remains a separate site with contextual outbound links only.

---

## Batch titles
1. Next.js scaffold + design tokens + fonts + layout shell  
2. Homepage (desktop + mobile first screen)  
3. Counselling hub + individual service template  
4. Local Parentology gateway  
5. Books showcase + book detail pages  
6. Article template, blog listing, one recovered article  
7. About, practical info / FAQ, contact (verified or placeholders)  
8. Signature world-selection motion  
9. SEO foundations (metadata, sitemap, robots, basic JSON-LD)  

---

## Batch 1 — Next.js scaffold + design tokens + fonts + layout shell

```text
You are building the Laura Thomas Counselling marketing site in THIS repository.
This is Batch 1 of 9. Implement ONLY this batch, then stop and commit.

CONTEXT
- Repo is empty / greenfield. Create a Next.js App Router + TypeScript app at the repository root (not a nested second app).
- Read before coding:
  - docs/reference/00_START_HERE.md
  - docs/reference/START_IN_CURSOR.md (strategy + acceptance; ignore any instruction to “reuse a non-Next donor stack” — this repo is empty and Next.js is required)
  - docs/reference/DESIGN_TOKENS.md
  - docs/reference/README.md
  - docs/reference/archive/assets/fonts.css
  - docs/reference/archive/E_Cursor_Technical_Build_Specification.md (stack notes only; do not implement all routes yet)
- Visual authority for later batches: docs/reference/references/Home.html and Mobile_Home.html. Do NOT port full pages in Batch 1.

CREATE / CHANGE (exact scope)
1. Scaffold Next.js (App Router, TypeScript, ESLint). Prefer `create-next-app` with App Router, TS, no src/ directory OR with src/ — pick one and stay consistent. Include a lockfile. Use the package manager already present if any; otherwise npm.
2. Copy runtime assets from the reference pack into the app (NOT the whole docs/reference tree into public):
   - public/brand/original-00-00.png  (counselling logo)
   - public/brand/logo-parentology-alpha.webp
   - public/images/laura.webp
   - public/images/room.webp
   - public/images/family.webp
   - public/images/book-girls.webp
   - public/images/book-boys.webp
   - public/images/detail.webp (if present)
   - fonts: place the six font-*.woff2 files where next/font/local can load them (e.g. app/fonts/ or src/app/fonts/), and keep licence texts under docs/reference/licences (already in repo) — optionally also copy licences to a LICENSES/ or docs/fonts/ note.
3. Design tokens as CSS variables (global CSS, e.g. app/globals.css):
   - --color-forest: #173e35
   - --color-cream: #f4efe4
   - --color-sage: #dce3d3
   - --color-terracotta: #9b4935
   - --color-clay: #e6cbbb
   - Plus semantic aliases: --surface, --text, --accent, --soft-surface
   - Parentology world overrides can be prepared as a data-world="parentology" selector (warmer clay/terracotta) but do not build the gateway yet.
   - Fluid type scale stubs for display / h1 / body / kicker; max content width ~1296px; 8px spacing scale helpers.
4. Fonts via next/font/local (Cormorant Garamond 400/500 + italic 400; Inter 400/500/600). Wire CSS variables --font-serif / --font-sans onto <html> or <body>. Follow the pack’s @font-face mapping in docs/reference/archive/assets/fonts.css. If format('truetype') is required because of the TrueType-in-.woff2 quirk, match that; do not invent other families.
5. Layout shell only:
   - app/layout.tsx: html lang="en", metadata title/description placeholders (“Laura Thomas Counselling” / Bedford & online — no invented claims), skip-to-content link, apply fonts + globals.
   - components/shell/Header.tsx: cream bar, real logo img from /brand/original-00-00.png with alt “Laura Thomas Counselling”, desktop nav links (Counselling → /services/, Parentology → /parentology/, Books → /books/, About Laura → /qualified-counsellor/), CTA “Start a conversation” → /contact-me/, mobile Menu control (≥44px tap) that toggles an accessible disclosure (aria-expanded, Escape closes, focus return). No fake booking.
   - components/shell/Footer.tsx: simple footer with credentials line using ONLY verified pack facts: “M.Ed · MNCPS (Accred.)”, “Published parenting author”, “Wixams, Bedford & online”. No invented phone/email — use placeholder links to /contact-me/ if needed.
   - app/page.tsx: temporary stub that says the shell is ready and lists the Batch 2 homepage goal; use cream background and tokens so the shell is visually on-brand. Do not implement the photographic homepage yet.
6. Add a short AGENTS.md at repo root pointing future Composer runs at docs/reference/COMPOSER_BATCHES.md and the authority order in docs/reference/README_PACK.md.
7. .gitignore appropriate for Next.js. Ensure docs/reference stays tracked. Do not commit secrets or .env with credentials.

DO NOT DO IN BATCH 1
- Full homepage, world selector, motion, service pages, CMS, forms that pretend to submit, Sanity, redirects migration, or copying docs/reference HTML into React as a blob.

ACCEPTANCE (must all pass before you stop)
- `npm run build` succeeds.
- `npm run lint` succeeds (or fix config so it does).
- `npm run dev` shows Header + Footer + stub home on cream; logo loads; desktop nav links have correct hrefs; mobile menu opens/closes with keyboard + Escape.
- At 375px width: no horizontal scroll on the stub page; menu control usable.
- Fonts apply (serif headings / sans body) without console 404s for font files.
- Stop. Commit with message: `chore(batch-1): Next.js scaffold, tokens, fonts, layout shell`.

REPORT briefly: files created, any token/font quirks found, and confirm Batch 2 should implement the homepage from docs/reference/references/Home.html + Mobile_Home.html.
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

## Batch 6 — Article template, blog listing, one recovered article

```text
Batch 6 of 9. Read docs/reference/references/Article.html, previews/Article.jpg, archive/registers/WordPress_Content_Inventory.csv, START_IN_CURSOR migration section.

Implement structured content files (MD/MDX or JSON) + shared Article template:
- app/counselling-blog/page.tsx listing
- One recovered article at its ORIGINAL root slug from the inventory (e.g. a real post URL path). Preserve title, credited author, dates; strip nav/comments/recommendation chrome from body; if full body is unavailable, use excerpt + `[PLACEHOLDER: full body pending migration]` and still prove the route.
- Shared tag-archive template stub generating from the same collection (even if only one tag).
- docs/MIGRATION_INVENTORY.md listing inventory counts and what remains.

No CMS. No rewriting all historical articles. Acceptance: build + lint; article URL works; commit `feat(batch-6): article template + one recovered post` and stop.
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

## Batch 9 — SEO foundations

```text
Batch 9 of 9. Implement next metadata for built routes, app/sitemap.ts, app/robots.ts, truthful JSON-LD stubs (Person / Organization counselling only with pack facts — Wixams/Bedford & online; Book where pages exist; BreadcrumbList). No fabricated ratings, medical licences, or AI-guarantee schema. Canonical + trailing-slash consistency. Preview/noindex notes if any preview path exists.

Acceptance: build + lint; sitemap lists only real routes; commit `feat(batch-9): seo metadata sitemap json-ld` and stop. Summarise remaining work (full WP migration, Sanity decision, fee confirmation, asset approvals for concept photos).
```

