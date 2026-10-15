# Ridgewell Colorado · SvelteKit

The latest Ridgewell redesign, converted to native SvelteKit pages and reusable Svelte components. This package contains the updated conversion copy, premium service layouts, original photography, mobile navigation and fixed mobile call bar. It is a source-code handoff; it does not change the existing live website.

## Quick start

Use Node.js 24 LTS (Node 22.17 or newer is required).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite, normally http://localhost:5173.

```sh
npm run check
npm run build
npm run audit
npm run preview
```

`build/` is the deployable static site. `npm run preview` serves that build locally, normally at http://localhost:4173. No Python, WordPress, database or server is required to build it. Dependencies and generated output are intentionally excluded from the ZIP; `npm ci` installs the exact versions in `package-lock.json`.

## Framework

Stable releases verified on 14 October 2026:

- SvelteKit **3.0.1**
- Svelte **5.57.2**
- Vite **8.3.4**
- Static adapter **4.0.0**
- TypeScript **6.0.3**, compatible with SvelteKit 3's current peer requirement

This follows SvelteKit 3 conventions: configuration in `vite.config.ts`, `#lib` package imports, `$app/state` and Svelte 5 runes. There is no obsolete `svelte.config.js` or `$lib` alias. Pages are prerendered with server rendering enabled, so text, links and structured data are present in the initial HTML.

Official references: [SvelteKit 3 migration](https://svelte.dev/docs/kit/migrating-to-sveltekit-3), [static adapter](https://svelte.dev/docs/kit/adapter-static), [page options](https://svelte.dev/docs/kit/page-options).

## Where to edit

| Location | Purpose |
| --- | --- |
| `src/routes/+page.svelte` | Homepage content and layout |
| `src/routes/our-services/**/+page.svelte` | Individual service and city pages |
| `src/routes/blog/**/+page.svelte` | Blog pages and archive |
| Each page's `metadata.json` | Title, description, structured data, canonical path and social image |
| `src/lib/components/Header.svelte` | Desktop navigation, mobile menu and trust strip |
| `src/lib/components/Footer.svelte` | Footer and fixed mobile call bar |
| `src/lib/components/ConsultationForm.svelte` | Shared consultation form and service selection |
| `src/lib/components/Seo.svelte` | Shared metadata rendering |
| `src/lib/styles/site.css` | Complete responsive design |
| `site.config.json` | Domain, indexability, form endpoint and shared business settings |
| `static/assets/` | Optimized and original design assets |
| `static/wp-content/uploads/` | Preserved original image paths |
| `route-manifest.json` | Expected route inventory and sitemap input |
| `URL-MAPPING.csv` | Original-to-new URL mapping |

Every page has its own editable Svelte file; the page body is native markup, not a raw HTML wrapper. The shared form uses the matching service by default. Navigation and form interactions use Svelte; the old standalone `site.js` is not included. Some business details also appear in preserved page text and JSON-LD; update those together if the business details change.

If adding or deleting a page, update `route-manifest.json` and internal links as well. If changing its URL, update its `metadata.json` path, navigation, sitemap inventory and redirects. Existing routes should remain unchanged.

## Content and URL preservation

There are **149 page routes**: **23 services**, **90 editorial posts**, **28 listing pages** and **8 standard pages**. All **118 original page/post URLs** are retained. Six service URLs were stored as WordPress posts in the original site; they now use the service layout. All **475 original image URLs** are retained alongside optimized image variants.

Content reflects the latest reviewed redesign. Original long-form service content remains in native disclosure sections, with the first section expanded. Editorial content remains accessible without JavaScript. One original article, `/blog/what-types-of-plants-are-used-in-landscaping/`, had no recoverable body; its existing URL and title remain with the introduction documented in the prior redesign. During conversion, empty headings were removed, placeholder and former staging-host links were repaired, filename-style photo descriptions were cleaned up, and one inherited fire-installation sentence on the pergola page was corrected. `export-cleanup.json` records the link and copy fixes.

`CLAIM-REVIEW.md`, `source-claim-inventory.csv` and `content-corrections.json` document the prior source review. The published original website supports a five-year paver warranty and one-year irrigation warranty; no general five-year hardscaping warranty or aggregate review count was invented. These are source statements, not independent verification of contract coverage or credentials. Editorial articles were preserved, not independently fact-checked.

## Indexing and deployment

The default package is a review build: `indexable` is `false`, page meta is `noindex`, and `robots.txt` disallows crawling. Canonicals deliberately point to `https://ridgewellcolorado.com`. This protects against accidental indexing on a staging host; it is not password protection.

Before the approved production migration, edit `site.config.json`:

```json
{
  "siteOrigin": "https://ridgewellcolorado.com",
  "deploymentOrigin": "https://ridgewellcolorado.com",
  "indexable": true
}
```

These are the fields to change, not the entire config file. Then run `npm run build` and `npm run audit` again. The preparation script regenerates `robots.txt`, all XML sitemaps and the static 404 page. The thank-you page always remains noindex and is excluded from sitemaps. For a non-production review host, keep `indexable: false` and set `deploymentOrigin` to that host before building so forms return correctly without JavaScript.

Deploy the **contents of `build/`** to a host that serves `/path/index.html` for `/path/`. Use a real HTTP 404 for missing URLs and serve `404.html`; do not use a homepage or SPA fallback. Existing pages must return 200. `static/_redirects` contains nine old article aliases for hosts supporting that syntax; translate and apply the rules on other hosts. They are not handled by Vite's local preview. Preserve HTTPS, the existing apex domain and one-hop redirects from HTTP and www. Do not apply a catch-all redirect to the homepage.

Before replacing the original site, compare the current production sitemap with this snapshot and carry over anything published since the review. Back up WordPress and agree on future editing: this is a code-based site, not a WordPress CMS export. Retained URLs and content reduce migration risk but cannot guarantee rankings or ad auction results.

## Consultation forms and analytics

The form endpoint is **FormSubmit** at the client's existing `info@ridgewellcolorado.com`. **Delivery is not verified and recipient activation may be required.** No test inquiries were sent. Set `formAction` to the client's approved endpoint or reconnect the original Fluent Forms/CRM integration, then verify a real submission reaches the team before sending live ad traffic. Changing `formDeliveryVerified` alone does not activate email delivery.

The form uses native browser validation and a normal POST, including without JavaScript. It carries the current page path, matching service, and available UTM/Google click parameters. The thank-you redirect uses `deploymentOrigin` in the generated HTML and the current host after hydration. If replacing FormSubmit, adjust its provider-specific `_next`, `_subject` and `_honey` fields to match the new integration.

The package pushes `phone_click` and `consultation_submit_attempt` events to `window.dataLayer`; it does **not** load analytics or count attempts as successful leads. The prior website's GA4 ID was `G-30M2S5LL7C`. Reconnect the client's approved analytics/Google Ads setup, align the privacy policy and verify genuine successful leads and calls before recording conversions.

## Validation

See `VALIDATION.md` for the checks performed on this export. The audit checks expected pages, canonical paths, indexability, metadata, headings, schema, linked local assets, fragment IDs, consultation forms and preserved route coverage. Browser interaction, visual QA, email delivery, production redirects and search-engine indexing still need checking in the deployment environment.
