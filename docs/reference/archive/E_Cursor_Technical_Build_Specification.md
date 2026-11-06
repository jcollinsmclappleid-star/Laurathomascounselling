# Laura Thomas: Next.js implementation specification
Therapist Website Studio | 3 November 2026 | Production handover after creative approval

## Scope boundary
This is a specification for a later paid implementation in Cursor. The supplied HTML is a self-contained design/motion reference, with local concept routes and no backend. It is not a Next.js source application. Do not deploy it as Laura's website, import its entire bundled HTML into React, or treat its reference-copy and animation implementation as production-ready.

Do not start a complete rebuild before the creative direction is approved. In Phase 1, build an isolated design/motion prototype only. No live DNS, booking settings, CMS content or Parentology production pages should be changed during that phase. Parentology remains a separate domain and existing application.

## Architecture and stack
Use Next.js App Router and TypeScript, with React Server Components for indexable page content. Use the current mutually compatible stable releases at project start, pin exact versions and commit a lockfile. Inspect any existing repository before choosing versions or restructuring it. No authentication, database or payment subsystem is required for the counselling marketing site.

Recommended layers:
- App Router routes and server components for services, biography, books, blog and gateway.
- CSS variables/CSS Modules or the repository's existing utility approach for design tokens and responsive layout. Do not introduce a competing styling system unnecessarily.
- Motion for React's free core for the world selection, shared image transitions and small interface motion. Keep interactive imports within client boundaries.
- CSS perspective/rotate transforms for book presentation. Keep exact cover artwork as images, separate from selectable title text.
- Optional GSAP only if the approved signature choreography genuinely exceeds the maintainability of a Motion timeline. The official pricing page currently describes the full GSAP library as free; check licence terms against the final project before shipping. Do not add a paid motion subscription.
- Native scroll as the default. No global scroll hijacker, continuous parallax, custom cursor or autoplay sound.
- next/image for explicit dimensions, responsive sizes and delivery. next/font/local for approved licensed fonts, with subset WOFF2 files and restrained preload.
- Sanity Studio plus Content Lake preferred for structured editorial publishing after a migration trial. WordPress headless is the continuity fallback.
- Existing booking providers via approved links; a minimal, rate-limited enquiry endpoint only if separately agreed. Do not rebuild appointment scheduling.
- Production hosting compatible with the chosen Next.js features, revalidation, image optimisation and preview. Confirm the target's supported adapter/runtime rather than assuming all Next.js server APIs are available.

No React Three Fiber/WebGL is justified. The signature effect concerns a photographic plane and typography, not an interactive 3D world. A short local 2.5D sequence is a better fit for the audience, budget and content maintenance.

## Route strategy
Preserve existing URLs where useful. /services/ is the counselling hub. /counselling/ remains individual counselling. Existing /couples-counselling/, /family-therapy-2/, /counselling-for-young-people/, /qualified-counsellor/, /fully-qualified/, /faq-and-fees/, /counselling-blog/ and /contact-me/ remain available initially. Add /parentology/, /books/, two book detail routes and /online-counselling/. Preserve the original root slugs of migrated articles.

Use an explicit route registry, not a loose catch-all that can shadow services or book pages. For legacy root articles, resolve only exact known slugs from the CMS and call notFound() otherwise. Static routes take precedence. Build a route collision check for CMS slugs, existing pages and reserved routes. Store redirects separately with source, destination, reason and approval. Internal links should use canonical destinations directly.

Suggested organisation (adapt to the inspected repository):

```text
app/
  layout.tsx
  page.tsx
  services/page.tsx
  counselling/page.tsx
  couples-counselling/page.tsx
  family-therapy-2/page.tsx
  counselling-for-young-people/page.tsx
  online-counselling/page.tsx
  parentology/page.tsx
  books/page.tsx
  books/[slug]/page.tsx
  counselling-blog/page.tsx
  [legacyArticleSlug]/page.tsx
  qualified-counsellor/page.tsx
  fully-qualified/page.tsx
  faq-and-fees/page.tsx
  contact-me/page.tsx
  api/revalidate/route.ts
  sitemap.ts
  robots.ts
components/
  shell/{Header,MobileMenu,Footer,Breadcrumbs}
  worlds/{WorldSelector,WorldTransitionProvider,WorldImage,ReducedMotionControl}
  editorial/{EditorialHero,PortraitBlock,ArticleBody,SourceReferences}
  services/{ServiceHero,AudienceConcerns,FirstSteps,ServiceFAQ,RelatedSupport}
  books/{BookCover3D,BookMetadata,BookCard,BookLinks}
  gateway/{ParentologyIntro,SupportPaths,InTouchIntro,ResetSteps,CrossDomainCTA}
  conversion/{EnquiryCTA,ContactOptions,FeesLink}
lib/{cms,seo,analytics,assets,routes,redirects}
content/{schemas,fixtures,source-register}
```

Route group names may be added for organisation, but they must not change the public URLs. Keep external Parentology destinations in an allowlisted configuration. Each link records whether it is counselling-local, Parentology-external, a retailer, a research source or a booking provider.

## Design system
Use the high-fidelity pack as the visual reference. Do not replace it with generic cards, dashboards or a template library. Define semantic tokens with world-specific aliases so Parentology can feel different without duplicating every component.

| Token | Counselling | Parentology gateway |
| --- | --- | --- |
| Page surface | #F5F1E8 | #F7EFE5 |
| Text / primary action | #233F38 | #233F38 |
| Soft surface | #DCE3D8 | #EBD7C7 |
| Accent/action | Muted olive; restrained existing gold cue | Warm clay #934733 for readable action text; coral as accent |
| Photography | Quiet interior, real practice details, reflective adults | Authentic parent-teen interactions, warmer layered depth |
| Type | Editorial serif heading and readable sans body | Related type pair; existing Parentology wordmark retained |
| Motion character | Grounded, shorter movement | Controlled expansion and warmer reveal |

The colours above are proposal tokens, not a claim to be Laura's supplied brand specification. Existing Parentology coral/mustard should be sampled from approved master artwork. Measure contrast against the actual backgrounds; the bright original logo accent need not be used for body copy.

Typography: Cormorant Garamond/Inter are present on Parentology and used in the mockups. Confirm licences and choose production font files. Limit initial weights. Establish fluid type scales: desktop display around 72-88px, mobile 39-49px depending on width; body 16-18px in production. The mockups show composition, not a requirement to preserve every small annotation size.

Layout: max content width approximately 1296px; broad desktop margins; reading columns 62-72 characters; mobile gutters 22-24px, reduced where necessary at 320px. Use a consistent 8px spacing scale with editorial exceptions. Avoid tiny uppercase labels carrying essential meaning. Retain their meaning in normal-size text or the accessible name.

Responsive: no artificial device frame in the real product. Stack pathways and support sections. Use art-directed crops, including a family image that keeps both people visible. Desktop portrait is prominent; mobile gets a concise opening, both pathways and a fuller Laura section below. At small heights, the persistent service menu/enquiry entry must remain available even if a path is below the fold. No equal-height requirement that makes readable copy overflow.

## Component/content contracts
| Component | Required inputs | Behaviour |
| --- | --- | --- |
| Header | Brand asset, nav items, enquiry route | Desktop links; accessible mobile disclosure; no hidden essential route |
| WorldSelector | Two world records: title, description, image/focal point, canonical href | Native links with meaningful labels; click may be progressively enhanced |
| ServiceHero | Audience, H1, body, image, CTA, practical link | Emotional relevance plus an obvious next step; indexable before hydration |
| SupportPaths | Service label, distinction, owning-domain URL | Parentology paths explain audience before linking to the external full service |
| BookCover3D | Verified cover, title text, edition, alt | Decorative 3D tilt on fine pointers only; no dependence on cover text for accessibility |
| ArticleBody | Original body, author, source relations, dates | Semantic headings, reference links, optional contents, related support |
| EnquiryCTA | Service context, approved destination | Consistent action wording; context passed without sensitive information |

The alternative homepage is a design option, not a second indexable homepage. Choose one production concept; keep rejected variants out of public routes.

## Signature world transition
The transition must take place within the counselling application. Parentology World opens through a standard explicit cross-domain link after the local gateway. Never promise a seamless cross-origin shared-element animation.

State machine: idle -> engaged -> preparing -> expanding -> arriving -> settled. Failure/cancel paths return to a usable settled route. Content is never dependent on completing an animation.

Suggested timing targets, to tune in the production prototype:
- Engagement: 160-220ms, image scale no more than approximately 1.02-1.035; maximum fine-pointer tilt 1-1.5 degrees if testing supports it.
- Expand: approximately 500-680ms desktop, 300-420ms mobile. Maintain photographic proportions; mask/crop rather than stretch faces.
- Warm arrival: approximately 200-300ms, with headline/content reveal overlapping the end of the image move.
- Counselling: approximately 350-500ms, lower scale/depth and a softer settled state.
- Text entry: opacity plus 8-12px translation, 25-40ms stagger across a few groups. Animate groups rather than letters.
- Easing: a restrained ease-out such as cubic-bezier(.22,1,.36,1); no elastic bounce.

Production implementation:
1. Keep the source link real and its destination server-rendered. Prefetch the local gateway and decode the transition image where practical without delaying a click.
2. Measure the source image once, after activation. Capture scroll/viewport state and create a pointer-transparent transition layer in a portal outside transformed page parents.
3. Use a stable aspect-ratio image plane, overflow clipping and a transform-based FLIP or carefully profiled mask animation. Use Motion shared layout only where elements remain within a stable client boundary; App Router route changes can unmount them. A shared layoutId alone is not a complete route-transition architecture.
4. For a route transition, keep the portal/provider in a persistent layout and detect destination readiness. Mount/reveal the destination's server content, then settle the image into its image slot. Avoid double animation owners on the same transform.
5. Preserve navigation history. On direct entry, render the final page immediately. Back/forward must restore a useful state without replaying the full entrance.
6. Move focus to the new main heading after successful navigation; use a programmatically focusable heading without a decorative focus border. Keep visible focus on interactive controls. Announce the new route once, not every frame.
7. Skip/Escape must cancel and clean up. Abort animation on route replacement, unmount, viewport resize or missing target. Fall back to immediate navigation when the image/route is unavailable.
8. Do not hide content in the server HTML or make SEO content depend on an animated canvas. JavaScript-disabled links still work.

Reference limitation: the supplied standalone demo animates the image box dimensions with the browser's native Web Animations API to show the choreography. It is intentionally not a benchmarked production Motion implementation. Production should use a persistent transition layer and profile transform/mask choices on real mobile hardware. Prototype and production have the same visual intent, with different engineering responsibilities.

GSAP alternative: a scoped timeline using context/React cleanup can own expansion, mask and text reveal if necessary. Let React own state/navigation and GSAP own only the agreed motion values. Do not animate the same element with Motion and GSAP simultaneously. ScrollTrigger is optional for one-off reveals, not a dependency for reading the page. CSS scroll-driven animation is progressive enhancement only; browser support must be checked at build time. Browser View Transitions can be explored within supported same-origin navigation, but the ordinary route path is the baseline.

## Accessibility and performance contract
Use native anchors, semantic buttons, logical headings, meaningful page titles, landmarks and skip navigation. Mobile disclosure must expose expanded state, support Escape and restore focus appropriately; if implemented as a modal, follow the dialog focus pattern fully. Do not use a half-modal navigation overlay.

Honour prefers-reduced-motion and a visible per-visit motion toggle in the demonstration. In production a modest motion preference control can remain available. Reduced mode navigates immediately or with a short opacity-only transition; remove scale, perspective, parallax and moving masks. Do not announce hover state changes. No essential information is available only on hover.

Aim for WCAG 2.2 AA: body contrast at least 4.5:1, large text 3:1, meaningful controls/focus and non-text boundaries as applicable; effective touch areas about 44px; keyboard reachability; 200% zoom and 320px reflow. Avoid absolute confidentiality promises and distinguish ordinary support from urgent-service availability using Laura-approved wording.

Core Web Vitals targets at the 75th percentile: LCP <=2.5s, INP <=200ms, CLS <=0.1. These are launch/field targets, not achieved metrics from the static demonstration. [R39]

Initial engineering budgets to test: one priority LCP image; accurate sizes; fixed image dimensions; mobile hero candidates around 100-180KB where visual quality allows; no eager download of every full-size mockup; limited font preloads; motion imports isolated from article routes; no video/3D bundle in the critical path. Avoid loading both full desktop and mobile hero assets. The self-contained proposal embeds repeated imagery for offline use and is not a production payload model.

Validate transitions in DevTools Performance on representative mobile hardware: dropped frames, layout/paint activity, long tasks and input responsiveness. Temporarily remove clip-path or large shadows if they cause expensive paints. Use will-change briefly around the transition, then remove it. Optimize for readable content and the next action before animation flourish.

## CMS recommendation and models
Preferred: Sanity Studio, client-owned project, Free plan if usage/roles fit. Ordinary manual publishing is supported. Scheduled drafts and the Editor role are paid distinctions at the time of research. Do not promise all future usage is free. Offer headless WordPress if Laura wants familiar editing or the migration trial reveals unacceptable conversion work. Keep the existing CMS until the new workflow passes acceptance.

| Model | Fields to include |
| --- | --- |
| person | name, approved credentials, biography, real portrait, profile URLs, research references, canonical identity URL, review date |
| organisation | name, legal display name, owner/founder reference, canonical URL, approved contact/location, links; separate records for each business |
| service | title, existing slug, audience, intro, image/focal point, approach, practical info, eligible ages, provider, fee reference, FAQs, CTA destination, sources/status |
| post | title, canonical slug, originalUrl, body, author reference, credited guest author, publishedAt, meaningful modifiedAt, showPublishedDate, showReviewedDate, main image/alt/credit, meta title/description, source references, related service/book, content owner, approval status |
| book | exact title, short title, subtitle, author, cover/rights, original source URL, edition, format, ISBN, publication date, publisher, language, page count, verified themes, retailer links, companion resource references |
| researchItem | exact title, type/status (dissertation / in-progress doctorate / article), institution, year, source URL, approved summary; no inferred peer-review status |
| redirect | oldPath, destination, status code, reason, verified source, approval, lastChecked |
| settings | navigation, footer, social links, contact routes, site metadata, approved external-link registry, motion defaults |

Use explicit publishedAt and editorial modifiedAt fields, independent of CMS document creation/update timestamps. A migrated article must not look newly published merely because it was imported. showPublishedDate changes display only; dates remain stored and metadata must stay truthful. Prefer displaying a meaningful date for time-sensitive clinical/editorial material. Never fabricate reviewed dates.

Sanity public datasets are for public editorial content. Do not store client enquiries or clinical records in the CMS. Keep preview tokens on the server; production queries use the published perspective, with authenticated draft preview routes. Verify both HTML and API behaviour: an unpublished draft must not appear to anonymous users. Set publication webhooks with signature validation and narrow revalidation tags. Follow the installed Next.js version's caching/revalidation API rather than pasting obsolete signatures.

WordPress headless fallback: keep updates/security/backups, fetch through its REST API, agree a production URL/canonical strategy, avoid an indexable duplicate frontend and retain admin access. Use a stable dedicated backend host or supported architecture. Do not leave both WordPress and Next.js serving duplicate public articles with conflicting canonicals.

## Migration protocol
1. Obtain owner-authorised WXR export, media inventory, configuration and a restorable backup. Public API inventory is a baseline, not a full database export.
2. Reconcile 16 public posts and 16 public pages against the sitemap, export and access logs/Search Console. Classify archives, tags, media attachments, policy documents and legacy pages.
3. Reconcile WordPress author IDs with visible author credits, especially the Kerry Chalmers post. Retain original permission information and publication dates.
4. Trial at least three representative posts: old formatted content, a post with featured/body media, and guest material. Inspect Divi shortcodes and nested HTML, lists, embedded content and captions. Compare rendered output and extracted text.
5. Download/copy media only with rights and ownership agreement; map filenames, alt text, captions, focal points and missing files. Do not silently replace real Laura photographs with generated people.
6. Migrate all agreed content with explicit route mappings. Archive the source backup; suppress spam/comment widgets and feeds in the new presentation. Do not destroy historical comments or the old database until retention/rollback decisions are agreed.
7. Test every original public content URL: 200 on retained pages; one-hop permanent redirect on approved moved pages; real 404/410 only on approved removals. Never blanket-redirect missing content to the homepage.
8. Verify canonicals, metadata, schema, sitemap inclusion, publication dates, visible authors and media. Independently publish a test draft through Laura's account and confirm the published page updates.
9. Launch only when counts reconcile, exceptions are recorded, and rollback is tested. Observe indexing and traffic after launch; do not promise a lossless migration before this work.

## SEO, local search and AEO implementation
Generate unique titles, descriptions, OG images and canonicals with Next metadata APIs. Include substantive content in initial server HTML. Ensure all service/book/gateway destinations are normal links. Validate robots/sitemaps against the actual production host and canonical origin. Keep staging noindex; verify production is not unintentionally blocked.

Use structured data that matches visible text. Proposed identity graph:
- Biography WebPage mainEntity -> Person, e.g. canonical biography URL + #laura-thomas.
- Counselling Organisation -> provider on counselling Service pages; include only approved actual location/contact.
- Parentology Organisation -> founder references the same Person. It is not the same organisation merely because Laura runs both.
- Book -> author Person, verified ISBN/edition/date/publisher/cover.
- Article -> author Person or actual guest author, mainEntityOfPage, truthful dates, references and relevant about/topic information.
- BreadcrumbList -> genuine route hierarchy.

Use sameAs for verified identity equivalents, not every related sales page. Use founder for the Parentology relation and author for books; do not imply employment, medical registration or degrees not established. Choose ordinary Organisation/LocalBusiness subtypes carefully; do not default to Physician or claim medical licences. Schema describes evidence; it cannot guarantee rich results or AI citations.

Maintain separate self-canonicals for useful original pages across both sites. Avoid automatic cross-domain canonicalisation or copying whole articles. For existing overlap, compare text, backlinks and intent, then choose preserve/refresh/consolidate with Laura. Historical parenting articles on counselling may retain their URL and link to the deeper Parentology resource.

Local: use accurate Wixams/Bedford location, approved room/directions/accessibility details and consistent public contact data. Confirm Parentology's Milton Keynes wording before publishing location claims. Any Business Profile work requires separate authorised account access. Do not manufacture branch offices or repeat a service page with town names swapped.

AEO content: answer a real question clearly; provide scope, professional context, evidence and author/source relationships; include relevant next steps. No AI visibility widget with invented results. No special AI-file/schema dependency. Build the 10-topic editorial map only after checking current content and Laura's source notes.

## Conversion and analytics
Agree routing by service: adult/couples -> current counselling email/enquiry; parent/teen -> verified appropriate booking/service destination; family/online -> confirmed route. Store endpoints centrally. Never submit test enquiries to Laura's live inbox without agreement. Use a staging sink for QA.

If implementing a contact form, collect minimal necessary contact information; explain purpose and expected handling; validate server-side; rate-limit; protect against spam; keep secrets server-side; log no free-text message content. Do not add a complex intake or clinical case-management system.

Events: world_select with world; gateway_view; parentology_outbound with destination category; counselling_enquiry_submit on confirmed success; email_click, phone_click and booking_outbound as separate intent events. No symptoms, personal identifiers or message text in event payloads. Consent and privacy implementation depend on the actual analytics choice. Do not infer booked sessions from outbound clicks.

## Acceptance and delivery
Required artifacts: approved route registry, design tokens/components, production motion reference, CMS schema and trial migration report, full redirect map, source/asset register, QA findings/fixes, analytics event list, client publishing guide and rollback/launch instructions.

Before release: production build/typecheck/lint under the repository's supported commands; meaningful integration tests for migration routes/draft privacy/enquiry success; keyboard/reduced-motion/320px/390px/768px/1440px checks; real-device motion review; schema validation; sitemap and canonical validation; broken-link/image check; route-level performance budgets; all approved copy/images; no console errors. Preserve the prototype files as creative references, but keep them off production indexing.
