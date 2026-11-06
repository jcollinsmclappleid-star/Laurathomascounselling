# Controlled Cursor prompts
Therapist Website Studio | Laura Thomas | 3 November 2026

## How to use
Begin with the master prompt in Plan mode. After reviewing its findings, run only the approved phase in Agent mode. Do not paste all phases and ask Cursor to execute everything. Every phase ends with a reviewable result and a pause before the next phase. The present deliverables are a concept proposal; no production implementation has been approved by Laura yet.

## Master prompt: assessment and implementation contract
```text
You are implementing a future paid project for Laura Thomas Counselling.
Act as a senior Next.js architect, premium editorial UX designer, motion engineer,
accessibility specialist and technical SEO engineer.

The approved strategic concept is TWO WORLDS. ONE LAURA THOMAS.
Keep https://www.laurathomascounselling.co.uk and https://www.parentologyworld.com
as distinct websites. The counselling application introduces Laura's broad
therapeutic practice, biography and books. It contains an original Parentology
gateway and links to the existing Parentology site for detailed programmes,
resources and specialist services. Do not rebuild or merge Parentology.

At this point assess and plan only. Do not perform a full application rebuild,
install dependencies, modify live CMS data, change booking settings or deploy.

Read the supplied strategy, mockup pack, interactive HTML, asset/source register,
technical specification and phased prompts. Treat the interactive HTML as an
offline design/motion reference, not production Next.js source.
Inspect this repository's AGENTS.md and conventions, framework, routes, build
scripts, dependencies, styling, content/CMS, SEO, image pipeline and deployment.
Record existing work and avoid destructive changes. If this is not a Next.js repo,
propose an isolated prototype or separate app location before changing framework.

Recommended stack: compatible stable Next.js App Router + TypeScript; server
components for readable/indexable content; Motion for React free core in small
client boundaries; CSS perspective for verified book covers; optional GSAP only
when a clear timeline requirement justifies it. No WebGL, custom CMS, paid motion
subscription, authentication/database/payment rebuild or scroll hijacking.

Design: prefer the editorial homepage with Laura's actual portrait, two obvious
photographic pathways and direct service navigation. Counselling is cream, deep
green and sage, quiet and reassuring. Parentology uses the same grid/type family,
its genuine logo and warmer clay/coral/family imagery. Keep both businesses clear.
Use supplied high-fidelity layouts; do not simplify to generic therapist cards.
Do not invent credentials, book chapters, testimonials, outcomes, fees, locations
or quotes. All concept copy and generated photography require the agreed review.

Retain these useful URLs unless a reviewed migration decision says otherwise:
/, /services/, /counselling/, /couples-counselling/, /family-therapy-2/,
/counselling-for-young-people/, /qualified-counsellor/, /fully-qualified/,
/faq-and-fees/, /counselling-blog/, /contact-me/ and existing root article slugs.
Add /parentology/, /online-counselling/, /books/ and two exact book-title detail
routes. /services/ is the counselling hub; /counselling/ remains individual intent.

Signature motion stays inside the counselling origin. A selected image expands
through a controlled 2.5D mask/FLIP transition and settles into its local gateway.
Use a persistent transition provider/portal if routes unmount. Keep real links,
direct-entry pages, history, Escape/skip, keyboard focus and reduced motion.
Do not stretch faces. Do not hide services behind animation or imply a seamless
shared-element transition across the two domains.

Blog: public evidence shows 16 WordPress posts and 16 pages; this is not a complete
backup. Preserve URLs, explicit original dates, visible guest authors, relevant
media and metadata. Remove spam/comment widgets from the frontend. Trial a
migration before committing to Sanity. Sanity Free supports manual publishing;
scheduled drafts/editor permission roles differ. Headless WordPress is a valid
fallback. Never build an editing backend from scratch.

Search: preserve and improve existing metadata/schema. Server-render meaningful
content; add truthful Person/Organisation/Service/Book/Article relationships,
canonicals, breadcrumbs and sitemaps. Each domain owns distinct useful content.
No ranking or AI-recommendation guarantees. No unapproved location pages.

Return:
1. Current-repository findings with exact file references.
2. Conflicts/unknowns that materially affect the design or migration.
3. Proposed files/components/routes for Phase 1 only.
4. Dependency/version choices and why they fit the repository.
5. A small validation plan and clear scope boundary.
6. Items needing actual client decisions, separated from routine engineering.
Stop before implementation. Wait for explicit approval of the phase plan.
```

## Phase 1: design and motion prototype
```text
Implement ONLY the approved Phase 1 plan in an isolated branch/app location.
Re-read the master contract and high-fidelity mockups. Preserve existing product
behaviour. Build the recommended editorial homepage, photographic world selector,
local counselling arrival and local Parentology arrival. Provide the cinematic
split-screen as a private design-review variant, never a second public homepage.

Use real Laura portrait assets and verified original book covers. Generated
supporting photography must remain identified in the review surface. Set up the
cream/green counselling tokens and warmer Parentology token overrides. Match
composition, typographic hierarchy, spacing and image crops before adding motion.
Keep both path links and the enquiry/service navigation clear without JavaScript.

Build one signature transition using free Motion core. Keep the transition layer
in a persistent provider/portal. Preserve image proportions and use shared layout,
FLIP or a profiled mask rather than stretching the image. Use native scroll and
short, restrained motion. Include a calm counselling variation. Limit fine-pointer
image depth and disable it for coarse pointers and reduced motion. Ensure Escape,
skip, unmount, failed image load, route replacement and resize clean up correctly.
Do not add every animation library just because it is listed in the brief.

Use fixtures only. Do not connect production CMS, forms, live booking writes or
payments. The reference HTML's dimension-based animation demonstrates intent; it
is not the production performance standard.

Acceptance:
- Both homepage concepts can be compared in a private review surface.
- The recommended layout matches the 1440px and 390px mockups in hierarchy.
- At 320px there is no horizontal overflow or clipped heading/action.
- Both worlds remain reachable with native links and direct route entry.
- A parent pathway click visibly expands/settles into the local warmer gateway.
- Counselling has a complementary calmer arrival.
- Reduced-motion mode skips scale/perspective/masks; keyboard focus moves to the
  destination heading and visible focus is retained for controls.
- Back/forward, Escape, rapid repeated clicks, missing image and resize leave no
  stuck overlay, scroll lock or inaccessible main content.
- No full-site rebuild or external-system mutation occurred.

Report changed files, a short recording, mobile screenshots, interaction checks
and measured performance concerns. Stop for creative approval before Phase 2.
```

## Phase 2: site architecture and reusable structures
```text
Proceed only after approval of the visual/motion direction. Implement the actual
counselling shell, /services/ hub, /parentology/ gateway, navigation, footer,
breadcrumbs and reusable server-rendered templates. Retain the agreed existing
URLs. Make a route registry that cannot confuse root article slugs with services.

The Parentology gateway must contain: introduction; Laura's relevant expertise;
parent/teen/ongoing-support choices; In-Touch; accurate RESET steps; two books;
article/resource entry points; explicit continuation to Parentology World.
It introduces the brand substantively but does not copy its homepage, resource
vault, programme content or checkout. Use an approved external-destination map.
Make local/external journeys clear; leave the cross-domain move a normal link.

Add responsive components with scoped world tokens. No global hover-only content,
mandatory scroll animation, custom cursor or elaborate full-screen menu. Preserve
meaningful HTML and final destination content before hydration.

Acceptance:
- Every proposed top-level navigation item resolves to a meaningful page.
- /services/ and /counselling/ retain different hub/individual roles.
- The gateway's eight sections are present and visually coherent on mobile.
- Parentology remains a separate site; no domain/platform migration occurs.
- Templates support service, book, author and article content without a generic
  all-purpose page blob or duplicated hardcoded sections.
- Keyboard/mobile navigation, direct entry and 200% zoom work.
- No unintended routes, production changes or broken existing links are introduced.

Provide route/component inventory and review screenshots. Stop before Phase 3.
```

## Phase 3: services, books and approved professional content
```text
Use only Laura-approved facts, imagery, wording and service boundaries. Work from
the source/approval register. Enhance the existing individual, couples, family and
young-person pages and create a useful online counselling page. Each must have a
distinct audience, emotionally relevant hero, approach, practical information,
relevant credentials, FAQs, related support and a clear enquiry route. Use the
complete individual service design as the reference, adapting its content/layout
rather than cloning the exact wording across services.

Resolve current service fees and booking destinations with the content owner;
public individual/FAQ prices differ. Confirm ages, confidentiality limits, parent
involvement, online service area and actual practice location. Do not assume all
services share the same calendar. Do not replace BACP training with membership or
present the in-progress EdD as a completed doctorate.

Build /books/ and individual book detail pages with the exact verified covers,
titles, edition metadata, original overview, intended reader, themes, purchase
links, relevant support and related articles. Use accessible text outside the
cover artwork. Use light CSS perspective only. Full chapter contents were not
verified; the editorial map proposes themes, not claimed chapter adaptations.

Use the editorial workflow: evidence/edition -> Laura notes/interview -> original
question-led draft -> professional review -> source and overlap check -> publish.
Preserve historical counselling parenting posts; new deeper parent guidance is
principally owned by Parentology. Do not publish ten duplicate new articles merely
to satisfy the topic count. The sample expert article is a layout example until
Laura approves authorship and content.

Acceptance:
- Five service journeys have specific useful content and correct provider/CTA.
- No invented office, qualification, result, testimonial, quote or book chapter.
- Both books have accurate edition-specific metadata and original covers.
- The source/approval register identifies unresolved claims/assets.
- Related links connect appropriate services, biography, books and gateway.
- Images have approved provenance, meaningful alt text and responsive crops.

Return page/content/approval status, screenshots and unresolved client decisions.
Stop before CMS migration or broad publication.
```

## Phase 4: CMS, historical content and search foundations
```text
Begin with the owner-authorised backup/export and a migration trial. Keep current
WordPress working until the trial is accepted. Compare Sanity Free with headless
WordPress against Laura's actual editorial needs. Manual publishing is available
on Sanity Free within limits; do not confuse it with paid scheduled drafts. Verify
permission roles and current quotas. Use established Studio/WordPress editing.

Trial three representative articles including old formatting, media and guest
authorship. Convert HTML/Divi shortcodes deliberately. Preserve explicit
publishedAt, meaningful modifiedAt, original URLs, bylines, images, alt/captions,
SEO fields and permissions. Reconcile visible writer credits with account IDs.
Remove spam/comment widgets from display without destroying the source backup.

After approval, migrate/preserve all agreed content. Reconcile the 16 public posts
and 16 pages against full export and sitemap evidence, then record any differences.
Support independent drafts, preview, editing and manual publish. Optional date
visibility must never replace historical dates with import dates. Prove anonymous
users cannot access unpublished content. Use signed, scoped revalidation hooks.

Implement server-rendered copy; unique metadata/OG; accurate canonicals; a
truthful Person/Organisation/Service/Book/Article graph; BreadcrumbList; sitemap
and robots. Keep separate entities for the two businesses. Shared Person identity
must be explicit and supported. Add no fabricated ratings, medical status, rich
result promises or AI visibility statistics. Do not create AI-specific schema or
files as an indexing prerequisite.

Create exact retained-route and one-hop redirect tests. Evaluate legacy pages one
by one. Do not redirect unknown URLs to the homepage. Implement a minimal,
privacy-appropriate event map for enquiries and cross-site clicks; no sensitive
text in analytics. Stage form tests away from Laura's real inbox.

Acceptance:
- Inventory counts reconcile and all exceptions are explained.
- Original public URLs resolve correctly or have approved relevant redirects.
- Sample comparisons show correct text, media, dates and visible author credits.
- Laura can save a draft, preview, edit, publish and see the correct public result.
- Unpublished drafts remain private; production metadata uses approved content.
- Schema, canonicals, sitemaps and server HTML agree with visible pages.
- Enquiry success, email clicks and booking outbound clicks are separate events.
- Rollback/export exists; no lossless-migration claim is made without validation.

Return migration evidence, redirect map, CMS guide and search checks. Stop for QA.
```

## Phase 5: quality assurance and launch preparation
```text
Complete the agreed production QA. Run repository build/typecheck/lint and only
meaningful integration tests for changed behaviour. Inspect 320/390/768/1440px,
short screens, 200% zoom, keyboard-only navigation, screen-reader headings and
reduced motion. Use real mobile hardware for the signature transition.

Test direct route entry, back/forward, skip/Escape, fast repeat actions, image/CMS
failure, resizing and draft preview. Verify all service/enquiry destinations,
contact-form validation and successful delivery through the approved test path.
Validate contrast, touch areas, page titles, alt text and focus restoration.

Measure route-level image/JS/font payloads and animation performance. Aim for
75th-percentile field CWV: LCP <=2.5s, INP <=200ms, CLS <=0.1. Do not report a lab
run as proven field performance. Remove unnecessary motion if it impairs access.

Crawl all approved routes and legacy URLs. Check 200/redirect/404 behaviour,
canonicals, metadata, robots, sitemap inclusion, structured data and broken media.
Confirm staging is noindex and production is intentionally indexable. Confirm
public fees, location wording, credentials, policies, image rights and source
approval. Record the pre-launch Search Console baseline where access is provided.

Acceptance:
- No critical journey, accessibility, migration or indexing issue remains open.
- CMS publishing and enquiry routing are demonstrated end to end.
- A source-backed QA log records checks, findings and fixes, with measured values.
- Client handover includes publishing guide, redirect map, asset/source register,
  analytics definitions, backup/rollback and post-launch observation plan.
- Production deployment occurs only within the agreed engagement/authorization.

Return the concrete release candidate and remaining non-blocking limitations.
Do not introduce extra features or continue rebuilding after checks pass.
```
