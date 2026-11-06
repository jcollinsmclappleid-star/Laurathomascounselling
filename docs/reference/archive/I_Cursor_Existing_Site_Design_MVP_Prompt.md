# Cursor prompt: Laura Thomas design MVP in an existing site

Use **Agent mode** in the existing website repository. Attach the latest presentation, the `Visual_Direction_02` folder and the supplied `assets` folder. This prompt supersedes the earlier full-build phase prompts for this design MVP: assess briefly, then implement the bounded MVP without stopping at a plan.

```text
Build a polished, working Laura Thomas DESIGN MVP in this existing website project.
I will continue editing this existing site. Reuse its framework, routing, styling
conventions and installed tooling. Do not create a second application, migrate the
framework to Next.js, or start an unrelated repository. If it already uses Next.js,
use its existing App Router conventions. If it uses Vite/React, work within that.

First inspect AGENTS.md, package.json, routes, styles, current homepage and reusable
components. Give a short assessment, then implement. I want to see the design work,
not receive another planning-only response. Do not deploy or change production DNS.

PURPOSE
Create a premium, emotionally engaging counselling website concept around:
TWO WORLDS. ONE LAURA THOMAS.
Counselling and Parentology remain distinct brands/domains. The counselling site
introduces both pathways, then provides a substantive local Parentology gateway.
The final step into https://www.parentologyworld.com/ is an ordinary external link.

LATEST VISUAL AUTHORITY
Use the updated deep-green photographic desktop homepage, terracotta Parentology
arrival and large book showcase in Visual_Direction_02. For MOBILE, use the latest
Mobile_First_Screen_390x664.png and Mobile_First_Screen_320x568.png, not the older
long stacked mobile layout. The latest presentation explains the strategy.
The older interactive HTML illustrates the transition pattern only.
Do not recreate the earlier plain cream homepage as the final visual direction.

BRANDING
Use assets/original-00-00.png as Laura's existing counselling logo in the website
header. Use assets/logo-parentology-alpha.webp for the Parentology gateway.
Use Laura's actual portrait (laura.webp), the supplied verified book covers and the
provided supporting concept photos. Preserve the logo/cover artwork and aspect
ratios. No AI replacement logos, invented client photographs or fake testimonials.
Therapist Website Studio is the proposing studio, not Laura's practice: its logo
belongs in proposal/review materials, not as Laura's website hero brand. If adding
a small build credit, keep it out of the primary customer journey.

WHERE TO BUILD
If this is already the Laura project, enhance the current marketing routes.
If it is an unrelated existing site, build the MVP under /laura-preview with its
local counselling, Parentology and book routes/components so the current live
product, account, checkout and database behaviour remain intact. Link the preview
clearly for local review. Do not mix the donor site's brand into the Laura preview.
Do not delete existing routes or backend code to make the new page fit.

MVP SCOPE
1. A complete responsive homepage: actual client logo/header, photographic hero,
   two world choices, concise Laura introduction, service entry points, both books,
   a small insights section, enquiry invitation and footer.
2. A counselling arrival/hub using the quieter sage/green atmosphere. Include
   individual, couples, family, young-person and online service navigation.
3. A local Parentology gateway: warmer introductory hero; who it supports; parent,
   teen and In-Touch choices; accurate RESET introduction; two books; related
   insights; a clear continuation to the separate Parentology site.
4. A book showcase and reusable individual book-detail design using verified copy.
5. One finished individual-counselling service concept demonstrating the template.
6. One restrained, working world-selection transition, plus ordinary navigation
   and clear enquiry links. No fake form success or simulated completed booking.

MOBILE FIRST SCREEN: NON-NEGOTIABLE
The first screen must communicate Laura's identity AND show BOTH photographic
pathways, including their labels and tappable actions. Do not simply stack the
large desktop hero above two below-fold cards. Redesign the composition for mobile.

Use a compact cream logo/menu header, an abbreviated dark photographic intro and
two short full-width photographic choices. Preserve rich photography and colour,
but shorten secondary copy and reduce decorative spacing instead of shrinking
essential text. Keep both pathways visibly different, readable and selectable.
Aim for the measured reference: both choices fit within the viewport at 320x568,
375x667, 390x664 (a useful short mobile viewport), 390x844 and 430x740 CSS pixels.
Do not assume a full device screen is available above browser controls.
Use content-driven layout and svh carefully. Do not clip text in a fixed-height
hero, use overflow:hidden to conceal a failure, or place absolute-positioned
controls over the supporting copy. Allow natural reflow under text zoom or larger
accessibility fonts even if that requires scrolling. At those accessibility sizes,
readability takes priority over forcing everything into a viewport.
No horizontal carousel or first-tap-only hover state. A first tap chooses a world.
Both choices are real anchors with visible words. At least 44px effective tap
areas; readable body text; visible focus. The menu must work by keyboard and touch.

DESKTOP ART DIRECTION
Retain the immersive deep-green photographic hero, editorial serif typography,
real Laura portrait and generous paired photographic choices. Keep the choice
panels prominent, not as tiny cards under a large unrelated portrait. Cream,
forest green, sage and restrained gold connect to Laura's identity. Parentology's
warm terracotta, original logo and family photograph make arrival feel different.
Keep typography crisp and properly responsive. Avoid generic SaaS cards, blobs,
heavy gradients, dashboards, clinical stock clichés or cartoon family imagery.

MOTION
Use the repository's existing animation library if suitable. Otherwise free Motion
for React is enough. Add GSAP only for a clearly justified timeline need.
On selection, let the chosen photograph expand with a short mask/shared-element
or FLIP transition, introduce the appropriate colour atmosphere, then settle into
its local destination. Preserve photographic proportions. Avoid stretching faces.
Use a persistent transition layer if route changes unmount the source element.
Keep ordinary links, direct entry, back/forward, Escape/skip and focus management
working. Reduced-motion preference must bypass large scale/perspective/moving masks.
No WebGL, paid plugins, scroll hijacking, autoplay sound or long splash sequence.

CONTENT AND SEARCH INTENT
Service-specific pages should clearly identify audience, format, location and
next step. Wixams/Bedford is the verified counselling practice context. Do not
invent offices in surrounding towns. Books, Laura's biography and gateway should
link naturally rather than repeat near-identical copy across domains.
Keep content readable/indexable in the project's normal rendering model. Add
appropriate page titles, descriptions, canonical intentions and semantic headings
for the MVP. Leave a clear route to the eventual production SEO work.
Do not claim rankings, AI citations or increased enquiries are guaranteed.

FACTS
Laura is a counsellor/psychotherapist, Parentology founder and published author.
Her public qualifications include M.Ed. and MNCPS (Accred.). Doctoral study is in
progress; do not give her a completed doctorate or invent professional memberships.
Books: Parenting Unstoppable Girls; Parenting Teen Boys with Confidence.
RESET: Recognise the issue; Empathise in the moment; Say what matters;
Emotionally regulate together; Take action with confidence.
Use approved source material and supplied copy. The example article is draft
copy, not an already published Laura article. Do not invent chapter quotations.

BOUNDARIES
No CMS/database migration, custom editing backend, authentication, payment system,
live enquiry delivery or full historical blog migration in this design MVP.
Keep existing integrations and data intact. Preserve existing article URLs and
public content during preview work. The existing blog/CMS decision follows later.
If supplied assets are absent, reuse suitable assets already present and report
which exact assets remain missing. Do not block all independent design work.

ACCEPTANCE BEFORE YOU FINISH
- Show desktop and mobile screenshots of the actual implementation.
- Measure getBoundingClientRect() for both mobile pathway anchors: each bottom
  must be <= innerHeight at the five standard viewports above, with no text clipping.
- Check the real logo is loaded and the image crops keep relevant people visible.
- Test both world links, local arrival, enquiry links, mobile menu, back/forward,
  keyboard focus, Escape/skip and reduced motion.
- Check 200% text/zoom reflow, no horizontal overflow, broken images or console errors.
- Run the project's existing build/typecheck/lint checks as appropriate.
- Report changed files, the preview route, completed scope and remaining production
  work. Make the result locally viewable. Stop after the design MVP passes review.
```
