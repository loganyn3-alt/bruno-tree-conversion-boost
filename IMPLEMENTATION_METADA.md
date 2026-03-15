## Goal

Define a concrete, framework-agnostic plan to (1) replace the current generic “Lovable” URL previews with an actual visual snapshot of our site, and (2) implement a complete, robust metadata strategy (HTML `<head>` + structured data) for SEO and social platforms (Open Graph, Twitter, etc.).

## Assumptions

- **Tech stack**: The app is a modern JavaScript/TypeScript web app (SPA or SSR) with a central place to manage `<head>` tags (e.g. `index.html`, a layout file, or a metadata helper).  
- **Deployment**: We can run a small build-time or scheduled job (Node-based) to generate preview images.  
- **Branding**: We have (or can define) brand colors, logo, and typography for the preview image.  
- **Single primary domain**: One canonical production URL (e.g. `https://example.com`) and possibly a small number of key marketing pages.

If any of these are wrong, we will adapt details during implementation.

## High-Level Outcomes

1. **Consistent SEO metadata** for all important pages (title, description, canonical URL, structured data, robots, language, etc.).  
2. **Robust social metadata** (Open Graph + Twitter Cards + platform-specific tags where helpful).  
3. **Automatically generated preview image** that shows an actual snapshot of the site (or a branded variation) instead of the current Lovable/placeholder preview.  
4. **Centralized configuration** so titles, descriptions, and images can be managed in one place and expanded easily as the site grows.  
5. **Tested and verified** previews across major platforms (Slack, iMessage, X/Twitter, LinkedIn, Facebook, etc.).

---

## 1. Discover Current Metadata & Preview Behavior

1. **Identify metadata entry points**
   - **Locate** where global `<head>` is defined:
     - If SPA: main `index.html` or root layout component.
     - If SSR/Next-like: layout(s) or route-level metadata functions.
   - **Document** current tags: `<title>`, `<meta>` tags (description, viewport, theme-color, etc.), `<link>` tags (canonical, icons, manifest).
2. **Audit production metadata**
   - Use browser dev tools (`<head>` inspector) on the live site.
   - Use curl or `fetch` to retrieve raw HTML of main pages and review tags.
   - Note where the current “Lovable” preview/OG image originates (e.g. `og:image`, platform default, or hosting provider).
3. **Inventory key pages**
   - Home page, main marketing pages, pricing, docs/feature pages, and any blog/article templates.
   - Decide which pages:
     - Use **shared default** metadata.
     - Require **page-specific** metadata (title, description, OG image).

**Deliverable**: Short audit document (or inline comments in code) mapping pages → current metadata and gaps.

---

## 2. Design Metadata Strategy (SEO + Social)

1. **Define metadata model**
   - For each page or route, support:
     - `title` (human-readable, under ~60 characters for SERPs).
     - `description` (~120–160 characters, compelling copy).
     - `url` (absolute, canonical URL).
     - `image` (absolute URL of OG/social image).
     - Optional: `keywords`, `section`, `publishDate`, `modifiedDate`, `author`.
   - Add site-wide defaults:
     - Site name, default title template (e.g. `"{pageTitle} | Site Name"`).
     - Default description if route does not override.
     - Default OG/social image (generated snapshot, see section 4).
2. **Decide per-route vs global config**
   - Plan a **central metadata config** file or helper:
     - Example shape: `const metaConfig = { '/', '/pricing', '/features', ... }`.
   - Define how dynamic routes (e.g. `/blog/[slug]`) will populate metadata (pull from CMS/content or prop-based).
3. **Canonical URLs & robots**
   - For primary pages, ensure:
     - `<link rel="canonical" href="https://example.com/path" />`.
     - `<meta name="robots" content="index,follow" />` for public pages.
     - Optional `noindex,nofollow` for internal/non-marketing pages (if applicable).
4. **Language and locale**
   - Ensure a top-level `lang` on `<html>` (e.g. `en`).
   - If multiple locales, design a pattern for `hreflang` tags (can be planned but implemented later if out-of-scope now).

**Deliverable**: A final metadata schema/interface and a mapping file (or design) that centralizes metadata per route.

---

## 3. Implement Core SEO Metadata

1. **Create/extend a metadata helper**
   - Add a utility (e.g. `getPageMeta(route)` or an options object) that:
     - Merges site-wide defaults with per-page overrides.
     - Ensures required fields (title, description, image, url) are always set.
2. **Wire into `<head>`**
   - Update the appropriate layout/head file to reference the metadata helper and render:
     - `<title>` (with consistent format).
     - `<meta name="description" ... />`.
     - `<link rel="canonical" ... />`.
     - Optional: `<meta name="keywords" ... />` (low SEO weight but sometimes useful).
     - `<meta name="robots" ... />` where applicable.
3. **Add structured data (JSON-LD) where appropriate**
   - For the home/marketing pages:
     - Basic `Organization` schema (name, URL, logo, sameAs social URLs).
   - For any article/blog routes:
     - `Article`/`BlogPosting` schema with headline, description, author, datePublished, image, etc.
   - Plan JSON-LD injection approach (inline `<script type="application/ld+json">` populated by metadata helper).
4. **Add generic technical meta**
   - `<meta charset="utf-8" />`.
   - `<meta name="viewport" content="width=device-width, initial-scale=1" />`.
   - `<meta http-equiv="X-UA-Compatible" content="IE=edge" />` (if not already present).
   - `<meta name="theme-color" content="{brand-primary}" />` for mobile UI theming.

**Deliverable**: Centralized, strongly typed metadata system used by all primary pages, with basic SEO, canonical, and JSON-LD where relevant.

---

## 4. Implement Social Metadata (Open Graph, Twitter, Others)

1. **Open Graph tags**
   - For each page, render:
     - `<meta property="og:title" content="..." />`.
     - `<meta property="og:description" content="..." />`.
     - `<meta property="og:url" content="..." />`.
     - `<meta property="og:type" content="website" />` (or `article` for blog posts).
     - `<meta property="og:image" content="absolute-image-url" />`.
     - Optional:
       - `og:site_name`, `og:locale`, `og:image:alt`, `og:image:width`, `og:image:height`.
2. **Twitter Cards**
   - Use large summary cards:
     - `<meta name="twitter:card" content="summary_large_image" />`.
     - `<meta name="twitter:title" content="..." />`.
     - `<meta name="twitter:description" content="..." />`.
     - `<meta name="twitter:image" content="..." />`.
     - Optional:
       - `<meta name="twitter:site" content="@handle" />`.
       - `<meta name="twitter:creator" content="@creatorHandle" />`.
3. **Other platforms**
   - Ensure OG tags are correct, as most platforms (LinkedIn, Slack, iMessage, Discord, etc.) rely on OG tags.
   - Optionally plan support for:
     - `<meta name="apple-mobile-web-app-title" ... />`.
     - `<meta name="application-name" ... />`.

**Deliverable**: Extended metadata helper and layout/head that output OG and Twitter tags consistently for all key routes.

---

## 5. Generate a Snapshot-Based Social Preview Image

Goal: Replace the generic Lovable previews with a **real visual snapshot** of the site (or a branded composition using a snapshot).

1. **Decide snapshot strategy**
   - **Option A – Static snapshot of homepage**
     - Take a fixed viewport screenshot of the homepage at production (e.g. 1200x630).
     - Possibly layer a semi-transparent gradient + logo + title for branding.
     - Suitable if one OG image is OK for most pages.
   - **Option B – Per-page snapshots (if needed)**
     - For a small set of crucial routes (e.g. home, pricing, feature pages), generate separate screenshots.
     - Use query parameters or a templating system to render custom overlays for each route.
2. **Choose tooling**
   - Use a **Node-based headless browser** (e.g. Playwright or Puppeteer):
     - Script opens the production URL with a specific viewport.
     - Waits for network idle or specific selector to ensure page is ready.
     - Takes screenshot and saves to `public/og/` (or equivalent static assets directory).
3. **Design output format**
   - Use a standard OG-friendly size (e.g. 1200x630, PNG or high-quality JPEG).
   - File naming strategy:
     - Global: `og/default.png`.
     - Per-page: `og/home.png`, `og/pricing.png`, etc.
4. **Automate generation**
   - Add a small Node script (e.g. `scripts/generate-og-images.ts`) that:
     - Accepts a list of page URLs and output file paths.
     - Launches Playwright/Puppeteer, takes screenshots, saves images.
   - Integrate script into:
     - **Build or deploy pipeline** (e.g. `npm run generate:og` before deploy), or
     - **Manual run** on-demand when UI changes significantly.
5. **Integrate with metadata**
   - Update the metadata helper to reference the generated images:
     - Default OG image → `https://example.com/og/default.png`.
     - Route overrides (if any) → `https://example.com/og/pricing.png`, etc.
   - Ensure URLs are absolute (scheme + domain).
6. **Fallbacks**
   - If the image is missing or the script fails, ensure:
     - A safe static fallback image is used (e.g. logo-on-gradient).

**Deliverable**: Automated snapshot generation script and updated OG/Twitter metadata referencing the new snapshot images.

---

## 6. Favicon, App Icons, and Manifest

1. **Favicon and browser icons**
   - Ensure:
     - `favicon.ico` + `<link rel="icon" ...>` variants for PNG/SVG as appropriate.
     - Apple touch icon(s): `<link rel="apple-touch-icon" sizes="..." href="/icons/apple-touch-icon.png" />`.
2. **Manifest and PWA-related meta (if applicable)**
   - Confirm presence and correctness of:
     - `<link rel="manifest" href="/manifest.webmanifest" />`.
     - `name`, `short_name`, `icons`, `theme_color`, `background_color` in the manifest.
3. **Platform-specific meta**
   - `<meta name="apple-mobile-web-app-capable" content="yes" />` (if PWA-like experience is desired).
   - `<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />` or similar.

**Deliverable**: Updated favicon and app icon set, plus manifest and related meta tags in the head.

---

## 7. Configuration, Environment, and Content Management

1. **Base URL configuration**
   - Centralize the production base URL:
     - Use an environment variable (e.g. `SITE_URL`) or a constants file.
     - Ensure metadata helper uses this for canonical URLs and OG image URLs.
2. **Environment-aware metadata**
   - For non-production environments:
     - Optionally add `<meta name="robots" content="noindex,nofollow" />`.
     - Adjust canonical URLs or add `X-Robots-Tag` headers at server level if needed.
3. **Copy management**
   - Decide how titles and descriptions will be maintained:
     - Inline in a config file (short term).
     - From a CMS or content source (long term).
   - Structure the metadata config for easy updates by non-developers in the future (e.g. clean JSON/TS structures).

**Deliverable**: Configurable metadata system aware of environment and easy to maintain.

---

## 8. Testing and Validation

1. **Local/dev verification**
   - Inspect `<head>` locally for key routes:
     - Titles, descriptions, canonical, OG/Twitter tags, JSON-LD.
   - Confirm OG image URLs resolve and load correctly.
2. **Automated/regression tests (optional but recommended)**
   - Add simple tests that:
     - Ensure required meta tags exist on key routes.
     - Validate canonical URLs and OG image references are absolute.
3. **External validators**
   - Use platform validators on a staging or production URL:
     - Twitter/X Card Validator.
     - LinkedIn Post Inspector.
     - Facebook Sharing Debugger.
     - Google Rich Results Test for JSON-LD.
4. **Iterate based on results**
   - Adjust descriptions, images, or structured data as needed from validator feedback.

**Deliverable**: Verified previews and rich results across major platforms, with tests guarding against regressions.

---

## 9. Rollout & Maintenance

1. **Rollout plan**
   - Ship metadata and snapshot generation changes together, ensuring:
     - OG images are available at deploy time.
     - Caches/CDN are invalidated so new previews are picked up.
2. **Monitoring**
   - After deployment:
     - Spot-check social previews when sharing links.
     - Monitor analytics (e.g. click-through rates on social posts over time).
3. **Ongoing updates**
   - Document how to:
     - Add metadata for new routes.
     - Regenerate OG snapshot images when major UI changes occur.
   - Optionally add a short `METADATA.md` section or README entry pointing to this plan and the actual implementation.

**Deliverable**: Deployed, documented metadata system and preview image pipeline, with clear instructions for future maintenance and expansion.

