# What's next — Service Areas by county

_Handoff note for picking this up on the laptop (or for Claude Code to execute)._

## Goal

Add a **Service Areas** tab to the nav that is organized **by county**, with SEO
pages for at least **5 towns per county**. Counties (corrected spelling):

1. **Spokane County**
2. **Whitman County** _(you wrote "Whiteman" — this is Whitman County, home of Pullman/Colfax)_
3. **Stevens County**
4. **Pend Oreille County**

> Heads-up: Whitman, Stevens, and Pend Oreille counties are a fair drive from
> Spokane. The town pages should be honest about that ("we travel to … by
> appointment; travel fee agreed up front") rather than implying we're around
> the corner. This keeps the pages truthful and still captures the search traffic.

## Nav change

Add a **Service Areas** link in `components/Nav.js` pointing to `/service-area`
(the index page). Order: Mobile Notary · Apostille · **Service Areas** · About · Book.

## URL structure

- `/service-area` — index page, grouped by county, linking to every town.
- `/service-area/[slug]` — one page per town (flat slugs, matches the original
  handoff spec). County grouping comes from a `county` field on each town.

## Proposed towns (≥5 per county)

| County | Towns (slug) |
| --- | --- |
| **Spokane** | spokane-valley, liberty-lake, cheney, airway-heights, medical-lake, deer-park, millwood |
| **Whitman** | pullman, colfax, palouse, rosalia, tekoa, garfield |
| **Stevens** | colville, chewelah, kettle-falls, springdale, northport, loon-lake |
| **Pend Oreille** | newport, cusick, ione, metaline, metaline-falls, usk |

(Spokane itself stays targeted by the homepage + `/mobile-notary`, so it isn't a
separate town page — but we can add one if we want.)

## Data model — recommended: local data file first

Supabase isn't set up yet, so to avoid blocking, build these from a **local data
module** `lib/serviceAreas.js` that exports an array of towns:

```js
// lib/serviceAreas.js
export const SERVICE_AREAS = [
  {
    slug: 'spokane-valley',
    name: 'Spokane Valley',
    county: 'Spokane County',
    // 300+ words of UNIQUE local content (not boilerplate with the name swapped):
    intro: '…',
    landmarks: ['…neighborhoods / meeting spots…'],
    driveNote: 'Typically 15–20 minutes from central Spokane.',
    faq: [ { q: '…', a: '…' } ],  // 2–3 local FAQs
    published: true,
    sortOrder: 1,
  },
  // …every town…
];
```

`lib/data.js` already has `getServiceAreas()` / `getServiceArea(slug)` for the
**Supabase** version. Later we can move `SERVICE_AREAS` into the `service_areas`
table (SQL is in the original handoff §6 — add a `county text` column) and switch
the pages to the async data functions. Until then, import the local array directly.

## Page requirements

### `/service-area` (index)
- H1 like "Notary Service Areas Across the Inland Northwest".
- For each county: a county heading + a grid/list of its town links.
- Short intro paragraph; CTA band at the bottom.
- Internal links matter for SEO — this page links to every town page.

### `/service-area/[slug]` (town page)
- `generateStaticParams()` from `SERVICE_AREAS` so all towns are static.
- **Metadata:** title `Mobile Notary in {Town}, WA | ML Notary Services`,
  description using the town + county.
- **One H1:** "Mobile Notary in {Town}, WA".
- **300+ words of UNIQUE content** per town — real local detail (neighborhoods,
  where we meet, drive time, county context). No town-name-swapped boilerplate;
  Google filters that out.
- A **local FAQ** (2–3 Q&A, e.g. "How fast can a mobile notary reach {Town}?",
  "What does a mobile notary cost in {Town}?") — reuse `components/Faq.js` so it
  emits FAQPage schema automatically.
- **JSON-LD:** `LocalBusiness` + `BreadcrumbList` (Home › Service Areas › {Town}).
  Add a `breadcrumbSchema()` helper to `lib/seo.js`.
- Reuse existing styles/components: `CtaBand`, `Check`, `.content`, `.page-head`.

## SEO wiring
- Add every town URL to `app/sitemap.js` (map over `SERVICE_AREAS`).
- Link to the county/town pages from `components/Footer.js` (a "Service areas"
  column) and from the `/service-area` index.
- Keep titles high-intent: "Mobile Notary in {Town}, WA".

## Acceptance criteria
- [ ] "Service Areas" appears in the nav → `/service-area`.
- [ ] Index page groups all towns under the 4 counties.
- [ ] ≥5 town pages per county, each 300+ unique words + a local FAQ.
- [ ] Each town page has LocalBusiness + BreadcrumbList JSON-LD.
- [ ] All town URLs are in `sitemap.xml` and linked from the footer.
- [ ] `npx next build` passes (use the dummy-Supabase env vars as before).

---

## Current project status (for context)

**Done & on `main`:** homepage (warm brand, downtown Spokane aerial hero, 80vh on
desktop), `/mobile-notary`, `/apostille`, `/about`, `/book` (lead form + save/email
API + Calendly embed), and full SEO foundation (robots, sitemap, LocalBusiness +
FAQ JSON-LD, generated OG image + favicon).

**Run it locally:**
```bash
npm install
npm run build
npm run start   # http://localhost:3000
```
Build check with dummy values:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://dummy.supabase.co NEXT_PUBLIC_SUPABASE_ANON_KEY=dummy npx next build
```

**Placeholders still to fill in `lib/site.js`:** phone, phoneHref, email, domain,
Calendly link, GA4 id. And on `app/about/page.js`: `[NOTARY NAME]`, `[COMMISSION #]`.

**Hero photo licensing:** the current aerial (`public/spokane-aerial.webp`) is
third-party and must be licensed or swapped before launch. Free-licensed fallback
`public/spokane-hero.jpg` (Spokane River bridge) is still in the repo.

**Owner setup tasks (not code):** create the Supabase project (SQL in original
handoff §6), connect the repo in Vercel with **Framework Preset = Next.js** + add
env vars, buy the domain, verify the Resend sending domain, create a GA4 property.

## Gotcha worth remembering
`next/og` (the OG image + favicon) must use `export const runtime = 'edge'` —
the `nodejs` runtime fails to build on Windows. And any `<div>` in an OG image
with more than one child (including text + an interpolated variable) needs
`display: flex`, or Satori throws.
