# Laura Thomas Counselling — agent instructions

## Hard rules (every batch)

1. **Single session** — no subagents, background agents, or parallel agents.
2. **Copy** — short placeholders only until explicitly told otherwise; no long-form or SEO page content.
3. **Facts** — never invent fees, credentials, contact details, testimonials, or reviews; use `[PLACEHOLDER: …]` where facts are unverified.
4. **Secrets & infra** — never commit secrets; do not deploy or change DNS.
5. **Reference pack** — keep `docs/reference/` out of `public/` and the production bundle.
6. **No content migration** — do not fetch, scrape, import, or recreate WordPress articles or pages unless Joshua explicitly approves a migration batch. No migration inventories or recovery work in design/infrastructure batches.
7. **RULE A — NOT INDEXABLE** — Laura’s live site must not be affected until Joshua explicitly approves launch. Default the build to non-indexable: root layout `metadata.robots` (`index: false`, `follow: false`), `X-Robots-Tag: noindex, nofollow` on all routes via `next.config` headers, and `app/robots.ts` returning `Disallow: /` for all user agents. Do not list URLs in the sitemap (empty until launch). Do not set canonical URLs pointing at the live production domain yet. Gate behind a single flag (`SITE_INDEXABLE`, default `false`); document in `.env.example`.
8. **RULE B — PROTECT URLS** — every existing public URL on Laura’s current site keeps exactly the same path, including trailing slashes. Maintain an explicit registry in `src/lib/routes.ts` (from `WordPress_Content_Inventory.csv` plus route notes in the technical spec). Set `trailingSlash: true` in `next.config`. No catch-all routes, no redirects to the homepage, no slug changes. Article URLs are listed in the registry only until a migration batch builds them. Run `npm run check:routes` to verify no duplicate registry paths and that every built page path exists in the registry.

## How to run work

- Execute **one batch per session** following [`COMPOSER_BATCHES.md`](./COMPOSER_BATCHES.md) (after Batch 0).
- Read authority in order: `docs/reference/00_START_HERE.md` → `START_IN_CURSOR.md` → `DESIGN_TOKENS.md` → `references/*.html`.
- End each batch with `npm run build`, `npm run lint`, and a quick **375×667** check on touched routes; then commit and stop.

## Batch 0 summary

- Donor codebase assessed: **trusted-founders-club** (Next.js 16, React 19, Tailwind 4, App Router + `src/`).
- **Reused:** tooling, layout primitives, buttons, FAQ accordion pattern, SEO route stubs, Laura CSS tokens, trimmed `site` helpers.
- **Skipped:** Supabase, Stripe, Resend, admin, review/product routes, SEO guide farm, donor branding.
- Full detail: [`docs/CODEBASE_ASSESSMENT.md`](./docs/CODEBASE_ASSESSMENT.md).

## Donor repo

The public donor repo is **read-only** reference (cloned outside this repo). Never push to it or treat it as Laura production.
