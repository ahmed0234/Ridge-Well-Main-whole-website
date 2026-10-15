# SvelteKit export validation

Validated on 14 October 2026 with Node.js 24.19.0.

| Check | Result |
| --- | --- |
| Svelte/TypeScript diagnostics | 0 errors, 0 warnings |
| SvelteKit static production compilation | Passed |
| Review configuration build and route audit | Passed; noindex and crawl disallow preserved |
| Production indexing configuration build and audit | Passed; canonical production URLs and indexable page metadata |
| Native page routes | 149 |
| Service pages | 23 |
| Editorial posts | 90 |
| Original page/post paths preserved | 118 |
| Original category paths preserved | 7 |
| XML sitemap entries | 148; thank-you page excluded |
| Local link references checked | 12,711 |
| Asset references checked | 3,321, plus image source-set candidates |
| Original image paths preserved | 475; every file matches the prior redesign byte for byte |
| Consultation forms | 25, with the configured POST endpoint, return URL and page path |
| Service form defaults | Matching service selected on all 23 service pages |
| Legacy redirect aliases | 9 valid 301 destinations |
| Canonicals, H1s, descriptions, JSON-LD, IDs and fragments | Passed |
| Main-content parity with the latest redesign | All 149 pages match after whitespace normalization and the documented pergola correction |

The Svelte compiler and static build also validated markup across all pages. The original stylesheet, layout classes, responsive breakpoints and visual assets were retained. The export adds native Svelte navigation/form interactions and shared components.

`build-audit.json` records the final review build. `production-audit.json` records the separate production indexing check. `content-parity.json` records the page-text and image-byte comparison. `export-cleanup.json` records repaired placeholder/staging links and the inherited pergola sentence correction. The package is restored to **review/noindex defaults** after testing.

This is build, type and structural verification. Browser visual/interaction testing was unavailable in this environment. Form email delivery, analytics conversion delivery, host-specific redirects, live DNS and Google indexing were not tested. No real consultation was submitted and no live website was changed during this export.
