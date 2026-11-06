# Laura Thomas: start the rebuild in the existing project

Use Cursor Agent mode. Extract `Laura_Thomas_Core_Rebuild_Pack.zip` into a
`laura-reference/` folder in the existing repository. Keep that reference folder
out of the application's public directory and production bundle. Paste the prompt below.

```text
Start implementing the Laura Thomas website redesign in this existing repository.
Read AGENTS.md, package.json, routes, styling, integrations and existing components
first. Give a short assessment, then implement a working, locally reviewable design.
Do not stop after a plan. Do not deploy, change DNS, or replace the production site.

PROJECT SAFETY
Reuse the existing framework and package manager. Do not create a second app or
force a Next.js migration. If this is an unrelated existing website, isolate the
Laura implementation under /laura-preview and prefix its local links consistently.
Protect the donor site's routes, accounts, payments, databases and integrations.
If this is already Laura's project, work on its intended marketing routes.

REFERENCE AUTHORITY
Read laura-reference/README.md and DESIGN_TOKENS.md. Use references/Home.html and
references/Mobile_Home.html for the homepage, and the parent, service, article and
book references for their respective templates. Reference HTML is static visual
guidance, not application code: replace dummy links and controls with real routing
and accessible components. Prefer the smaller editorial typography in the mapped
content references over oversized headings in older concepts. Preview JPGs show
the intended look. Do not embed reference HTML, screenshots or base64 payloads as
the live website. Build real responsive components and readable text.

STRATEGY: TWO WORLDS, ONE LAURA THOMAS
Build BOTH journeys INSIDE the counselling website:
1. Counselling: clear access to individual, couples, family, young-person and
   online counselling information and enquiries.
2. A substantial parenting/Parentology section: useful original parent education,
   book themes, Laura's expertise and appropriate support pathways.
Keep Parentology World as a separate website. Introduce its specialist offer with
its actual logo and contextual links, rather than sending the homepage choice
straight to another domain. The local section must deliver the education it promises.
Do not duplicate Parentology's full programmes, private resources or checkout.

VISUAL DIRECTION
Premium editorial design: deep forest green #173e35, cream #f4efe4, sage #dce3d3,
terracotta #9b4935 and warm clay #e6cbbb. Cormorant Garamond for editorial headings,
Inter for body/navigation, restrained gold details and photographic depth.
Use the actual counselling logo and Laura portrait. Parentology has a warmer
visual atmosphere with its existing logo. Use original book covers with intact
proportions, tasteful CSS perspective and light shadows. Do not stretch faces,
recreate cover typography or fabricate branding/testimonials.
The room and family photos are generated concept imagery, not Laura's actual
practice or clients. Flag them for client approval before production. The studio
logo is only for reference/proposal use, not Laura's customer-facing hero.

INITIAL IMPLEMENTATION: BUILD THESE NOW
- Responsive homepage: actual logo/navigation, rich photographic intro, two large
  world choices, concise Laura introduction, service entry points, two books,
  article links and a clear enquiry route.
- Counselling hub and one complete individual-service template. Use it for the
  other service pages where verified existing copy is available. Preserve useful
  existing paths such as /counselling/, /couples-counselling/, /family-therapy-2/
  and /counselling-for-young-people/. Do not change slugs for cosmetic reasons.
- Substantial local parent hub: education, Laura's professional perspective,
  communication/confidence/boundaries/independence topic entry points, books,
  accurate RESET introduction and contextual Parentology feature.
- Books showcase and individual book-page template for both books.
- Article template, blog listing and shared tag-archive template. Populate at
  least one article from verified live content and preserve its original path.
  Build the shared content model so later migration and new posts use it.
- About, practical information and contact routes using verified existing content
  where available. Do not invent fees, session formats, availability or policies.
Do not fill unapproved pages with invented advice. Use real existing content or
clearly flagged draft copy for review. Topic ideas are proposed editorial work,
not verified chapters or already published Laura articles. Don't make dead cards:
link to a substantive existing/local destination or an actual section on the hub.
Do not construct a working enquiry form with simulated success. Preserve verified
booking/contact destinations; report missing configuration clearly.

MOBILE FIRST SCREEN
Show Laura's identity AND both photographic choices on the first ordinary mobile
screen. Use the supplied compact mobile composition, not a tall desktop hero
stacked above two below-fold cards. Test 320x568, 375x667, 390x664, 390x844, 430x740.
Reduce decorative spacing and secondary copy, not essential text legibility.
No clipping, fixed-height text traps or horizontal scrolling. Both choices are
real anchors with 44px effective touch targets. At enlarged accessibility text
sizes allow scrolling and natural reflow rather than forcing the viewport fit.
Make the menu work with touch and keyboard, with visible focus and correct state.

SIGNATURE MOTION
Use the installed motion library if suitable; otherwise Motion for React is enough.
On hover/focus, use a very small image scale and tonal response. On first tap or
selection, expand the chosen photographic panel through a restrained shared-element
or FLIP overlay, move into the LOCAL destination, then reveal its heading/content.
Aim for roughly 450-650ms for the transition; do not delay essential navigation.
Parent arrival warms toward terracotta; counselling settles into sage/green.
Use transforms/opacity, stable image dimensions and a persistent transition layer
where needed. Preserve back/forward, ordinary links and direct entry. Move focus
appropriately on route arrival. Reduced motion bypasses spatial animation. No
WebGL, scroll hijacking, autoplay audio or paid animation subscriptions/plugins.

CONTENT MIGRATION: INVENTORY FIRST, THEN REUSE
Inspect https://www.laurathomascounselling.co.uk/sitemap_index.xml and its page,
post, tag and category sitemaps. Try the public WordPress REST API first; otherwise
crawl the public HTML. Respect access controls; do not bypass blocks. Flag any
unrecoverable content or relationship and continue independent design work.
Create a migration inventory before changing existing content or routes:
original URL, type, title, credited author, publication/modified dates, body,
images, image alt/captions, tags/categories, available SEO metadata and internal links.
The sitemap lists URLs; it is not the complete relationship map. Resolve API tag
IDs or crawl archive/article links to establish assignments. Verify the mappings.
Extract only the main article body. Exclude recent-post cards, recommendations,
navigation, footers and comments. Migrate each article once by its original URL.
Download required images; do not rely on the old host remaining available.
Keep tag membership separate from article URL. Generate blog lists and tag
archives from the same content collection. Do not treat every tag as a new article.
Keep useful existing archive URLs initially; flag consolidation/removal separately
for review, informed by Search Console/backlink data when available. Do not apply
blanket noindex, delete archives or redirect all tags to the homepage/blog.
Do not move existing root-level article URLs under /blog/ automatically.
Do not rewrite all historical articles during the visual rebuild. Preserve guest
author credits and original publication dates. Remove spam/comment UI from the
new presentation without including it in article content.
For now create the inventory and prove the template with at least one recovered
article. Report the remaining migration count; do not imply the whole archive is
complete. Full migration is the next controlled batch after the design review.

NO CMS NEEDED FOR THIS PHASE
Use structured content files in the repository (the existing supported format,
or Markdown/MDX with a validated metadata schema). Include original path, title,
author, dates, excerpt, images and tag slugs. Render through shared templates.
Future workflow: Laura emails an article; we format it, review a preview and publish.
No custom editor, login, database, payments or CMS subscription is required here.
Do not add unsanitised raw HTML or executable untrusted MDX from scraped content.

AI SEARCH / AEO / SEO
Use our Recommendation Reconstruction approach: map a reader's actual question
and related needs, preserve Laura's reasoning and context, and connect the answer
to the named professional, source material and appropriate next step.
Example proposed cluster: communication/trust from Parenting Unstoppable Girls;
independence/emotional understanding from Parenting Teen Boys with Confidence.
Inspect existing articles before proposing overlapping new content. Related
questions can be sections; not every question warrants a separate URL.
Keep content available as crawlable HTML using the project's rendering model.
Implement unique titles/descriptions, canonical URLs, semantic headings, internal
links, image dimensions/alt text and an appropriate sitemap/robots configuration.
Use structured data matching visible content: Person, practice organisation,
Service on relevant pages, Book on publication pages, Article on articles and
BreadcrumbList where appropriate. Reuse consistent @id references and avoid
duplicate/conflicting graph output. Distinguish the person from the businesses.
Verify exact publication/edition details before including them in the graph.
Never invent qualifications, offices, book quotes, chapter titles or reviews.
No schema or content volume guarantees AI recommendations or rankings.
Preserve the preferred hostname/trailing-slash convention. Any changed URL needs
an explicit mapping and appropriate permanent redirect, not a homepage catch-all.
Do not update every article date or sitemap lastmod on every deployment.
Keep preview URLs out of search and generate production canonicals only for the
actual production domain; do not publish /laura-preview URLs in its sitemap.

KNOWN FACTS TO RECHECK AGAINST APPROVED/LIVE SOURCES
Counselling practice context: Wixams/Bedford and online, not invented town offices.
Books: Parenting Unstoppable Girls; Parenting Teen Boys with Confidence.
RESET labels: Recognise the issue; Empathise in the moment; Say what matters;
Emotionally regulate together; Take action with confidence.
Don't present doctoral study as a completed doctorate or infer memberships from
training. Use verified current qualifications and service details.

ACCEPTANCE AND HANDOVER
- Both homepage choices enter local content, with a distinct parent atmosphere.
- At standard mobile sizes both choices fit the first viewport; enlarged text reflows.
- Images/logos/covers load correctly, with no distorted crops or broken links.
- Keyboard, focus, mobile menu, direct entry, history and reduced motion work.
- Existing unrelated application features remain intact.
- Main content is readable without animation and can be inspected in rendered HTML.
- One recovered article retains its URL; recommendation text is not in its body.
- Blog and tag views reuse that content model; unresolved mappings are listed.
- Run existing relevant build/type/lint checks and inspect real desktop/mobile views.
- Provide screenshots, the local preview URL, changed files, migration inventory,
  completed scope and specific remaining work. Stop before production launch.
```
