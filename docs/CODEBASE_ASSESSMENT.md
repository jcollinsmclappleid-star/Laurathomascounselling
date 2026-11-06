# Codebase assessment — Batch 0

**Donor (read-only clone):** `jcollinsmclappleid-star/trusted-founders-club`  
**Target:** Laura Thomas Counselling marketing site (Next.js App Router, TypeScript)  
**Reference pack:** `docs/reference/` (not served from `public/`)

## Stack and versions (donor)

| Layer | Choice |
| --- | --- |
| Framework | Next.js **16.2.6** (App Router, `app/` routes) |
| UI | React **19.2.6**, React DOM **19.2.6** |
| Language | TypeScript **6.0.3** (`strict`, `@/*` → `./src/*`) |
| Styling | Tailwind CSS **4.3.0** via `@tailwindcss/postcss` + `@import "tailwindcss"` in global CSS |
| Icons | `lucide-react` (latest in donor lockfile) |
| Fonts (donor) | `next/font/google` — Inter + Libre Baskerville |
| Fonts (Laura) | **Local** Cormorant Garamond + Inter from `docs/reference/assets/font-*.woff2` (Batch 1+) |
| Lint | ESLint flat config — `eslint-config-next` core-web-vitals + typescript |
| Build | `next build`; donor sets `turbopack.root` in `next.config.ts` |
| Deploy (donor) | Vercel-oriented `.gitignore`; no `.github/` CI in donor repo |

### Donor routing (all removed in Laura base)

Marketing: `/`, `/pricing`, `/submit`, `/apps`, `/apps/[slug]`, `/example-review`, `/guidelines`, `/terms`, `/privacy`, `(marketing)/guides`, `(marketing)/[slug]` SEO guides. Admin: `/admin`, `/admin/submissions/*`. API: `/api/submissions/checkout`, `/api/stripe/webhook`.

### Donor integrations (all skipped for Laura)

- **Supabase** — `@supabase/supabase-js`, service role, migrations for `app_submissions`, listing assets, transactional email queue
- **Stripe** — checkout + webhook for paid review submissions
- **Resend** — transactional email (`RESEND_API_KEY`, `FROM_EMAIL`, `ADMIN_NOTIFICATION_EMAIL`)
- **Admin auth** — password session (`ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`)
- **SEO content system** — large `src/content/seo/*`, word-count validators, dynamic sitemap entries from DB profiles

### Env var names (donor — not carried into Laura `.env.example`)

`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_*`, `ADMIN_*`, `RESEND_API_KEY`, `FROM_EMAIL`, `ADMIN_NOTIFICATION_EMAIL`.

Laura base retains **`NEXT_PUBLIC_SITE_URL` only** until a later batch needs more (e.g. form provider).

---

## REUSE — keep for Laura (copied/adapted in Batch 0)

| Item | Why |
| --- | --- |
| Next.js App Router + `src/` alias layout | Matches Laura brief and donor proven setup |
| `package.json` scripts (`dev`, `build`, `start`, `lint`) | Standard pipeline; lockfile committed after install |
| `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `next.config.ts` | Tooling parity, minimal config |
| `.gitignore` (Next/Vercel/env) | Secret safety |
| `src/lib/utils.ts` (`cn`) | Shared class merging |
| `src/lib/site.ts` (trimmed) | `siteConfig`, `absoluteUrl`, `pageMetadata` only — no product copy |
| `src/components/page-shell.tsx` | PageHero, ContentBand, SectionHeading, SectionFrame — editorial layout primitives (tokens retargeted to Laura CSS vars) |
| `src/components/buttons.tsx` | Primary/secondary link buttons with focus rings (Laura colours via CSS vars) |
| `src/components/fade-in-section.tsx`, `hover-lift.tsx` | Motion-friendly patterns with reduced-motion handled in CSS |
| `src/components/faq-accordion.tsx` | Accessible `<details>` FAQ pattern; **items passed as props**, no default product FAQs |
| `app/globals.css` | Tailwind v4 entry + **Laura design tokens** + reduced-motion utilities |
| `app/robots.ts`, `app/sitemap.ts` | Metadata route patterns (Laura stub routes only for now) |
| `app/layout.tsx` | Root metadata shell, skip link, font variable hooks (local fonts in Batch 1) |

---

## SKIP — do not port (reasons)

| Item | Reason |
| --- | --- |
| All `/admin`, `/api/*`, Stripe, Supabase libs and migrations | Counselling site is static/marketing-first; no paid submission product |
| `src/lib/submissions.ts`, `directory.ts`, `packages.ts`, SEO libs/content | Review Signal product and SEO farm |
| Product components (badges, reviews, pricing, submit form, directory, etc.) | Wrong domain; would leak branding |
| `src/lib/site.ts` bulk (nav, FAQs, pricing, hero mocks, disclaimers) | Invented product copy; Laura uses pack + placeholders |
| Donor `SiteHeader` / `SiteFooter` / `BrandLogo` | Review Signal chrome; Laura shell built in Batch 1 from references |
| Google fonts in donor layout | Laura requires local Cormorant + Inter per `DESIGN_TOKENS.md` |
| Donor colour system (navy/gold) | Replaced by forest/cream/sage/terracotta/clay |
| `public/badges`, `public/editorial-assets` | Third-party app review assets |
| SEO guide routes and scripts (`verify:seo`, `analyze:seo`) | Not Laura scope |
| Tests | Donor has none; add only when requested |

---

## Risks vs Laura brief

1. **Greenfield assumption in `COMPOSER_BATCHES.md`** — Batch 1 text says “empty / create-next-app”; Batch 0 repurposes donor infra. Later batches must not run a second scaffold or re-add Stripe/Supabase.
2. **Font file quirk** — `.woff2` filenames contain TrueType data; wrong `@font-face` format breaks fonts (see `docs/reference/archive/assets/fonts.css`).
3. **Concept imagery** — `room.webp` / `family.webp` must not be presented as real practice/clients until client approval.
4. **Content discipline** — WordPress inventory is large; easy to invent fees, credentials, or migrate comment chrome into articles. Batches 6–7 and 9 must stay placeholder-heavy until verified.
5. **`docs/reference/` exposure** — Must never land under `public/`; copy assets explicitly into `public/brand` and `public/images` in Batch 1.
6. **Trailing-slash URLs** — Live site uses paths like `/counselling/`; align redirects/canonicals in Batch 9, not ad hoc.
7. **Motion batch (8)** — Donor has CSS-only motion; Laura wants FLIP/shared-element — do not copy donor hero animations wholesale.

---

## Proposed `COMPOSER_BATCHES.md` adjustments (apply manually after review)

1. **Add Batch 0** (this PR): assess donor, write `docs/CODEBASE_ASSESSMENT.md`, repurpose infra, `AGENTS.md`, `.cursor/rules/laura.mdc`, stub home — **no Laura pages**.
2. **Revise Batch 1 intro** — Replace “Repo is empty / create-next-app” with “Next.js base from Batch 0; add local fonts, copy brand assets from `docs/reference/assets`, implement Header/Footer shell per references.”
3. **Batch 1 step 1** — Delete duplicate scaffold step; start at design tokens/fonts/shell.
4. **Batch 6** — Explicit cap: **one** recovered article; body may be excerpt + `[PLACEHOLDER: full body pending migration]` only; **no** bulk migration or long-form rewriting in this batch.
5. **Batch 9** — JSON-LD and meta descriptions stay **short factual stubs**; no fabricated ratings, reviews, or medical claims; sitemap lists **built routes only**; no SEO guide-scale content.
6. **Global rules** — Add: “Donor repo is read-only reference; never push or deploy from it.”
7. **Renumber note** — Document that batch numbers 1–9 unchanged but Batch 0 is prerequisite.

---

## Batch 0 deliverables in this repo

- Repurposed Next.js base at repository root (stub `app/page.tsx`)
- This assessment document
- `AGENTS.md` and `.cursor/rules/laura.mdc`
- `NEXT_PUBLIC_SITE_URL` in `.env.example` only
- `npm run build` and `npm run lint` green
