# Dadi Maa Ke Nuskhe

A bilingual (Hindi / English) library of Indian home remedies, recipes, homemade staples and household tips. Built with the Next.js App Router, TypeScript and Tailwind CSS, and designed to be deployed on Vercel.

The guiding rule of the project: **publish the tradition and the caveats together.** No invented reviewers, ratings, nutrition figures or shelf lives, and no cure or skin-whitening claims.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (SSG for all content routes) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint over the project |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run validate:content` | Structure, sourcing and safety checks on all content |
| `npm run check` | Typecheck + lint + content validation |

## URL structure

Each language is an independent experience with its own `<html lang>`:

- `/hi/…` — Hindi (`hi-IN`)
- `/en/…` — English (`en-IN`)
- `/` — bilingual language chooser (`x-default`)

Sections (Hindi slug / English slug):

| Section | Hindi | English |
| --- | --- | --- |
| Home remedies | `/hi/nuskhe` | `/en/home-remedies` |
| Recipes | `/hi/recipes` | `/en/recipes` |
| Hair care | `/hi/hair-care` | `/en/hair-care` |
| Beauty | `/hi/beauty` | `/en/beauty` |
| Homemade products | `/hi/homemade-products` | `/en/homemade-products` |
| Household tips | `/hi/gharelu-tips` | `/en/household-tips` |

Plus, per language: `/categories`, `/category/[slug]`, `/samagri` or `/ingredients`, `/sangrah` or `/collections`, `/search`, and the eight information pages (`about`, `contact`, `editorial-policy`, `medical-disclaimer`, `food-safety-policy`, `privacy-policy`, `terms`, `sources`).

Language selection is never automatic — there is no IP or browser-language redirect. The switcher links to the translated page when one exists and falls back to the other language's homepage otherwise.

Legacy paths (`/about`, `/remedies`, `/health`, seasonal aliases) are handled with 301 redirects in `next.config.ts`.

## Content model

All content is typed data in `content/`, never copy embedded in components:

```
content/
  references.ts        # shared, verified source registry: ref(key, supports)
  en/ recipes guides ingredients categories collections info-pages
  hi/ recipes guides ingredients categories collections info-pages
lib/
  types.ts             # the schema (RecipeEntry, GuideEntry, …)
  entries.ts           # the only access layer the UI uses
  validation.ts        # pre-publication rules
scripts/validate-content.ts
```

Publishing workflow, expressed as `status`:

`draft → editorial-review → safety-review → approved → published → needs-update → archived`

Only `published` entries render. `reviewStatus: "approved"` requires a real named `medicalReviewer`; without one, pages show a visible "review pending" notice and emit no reviewer structured data.

To add a recipe or guide: create the entry in the language files, add its categories (they must exist in `content/<lang>/categories.ts`), use `ref()` for every source, then run `npm run validate:content`.

## Safety rules enforced by validation

- Recipes need at least four ingredients, three steps, servings, storage, allergens and a category.
- Remedy guides need preparations, a "when to see a doctor" list and references.
- DIY cosmetics need materials, method, storage **and** a patch-test instruction in `safety`.
- Every entry needs at least one https reference with an access date and the claim it supports.
- Dates must be `YYYY-MM-DD`; approved reviews need a reviewer name and role.

## SEO

- Unique titles and descriptions per entry, canonical URLs, reciprocal `hreflang` (`hi-IN`, `en-IN`, `x-default`).
- Open Graph and Twitter metadata, `sitemap.xml`, `robots.txt`, JSON-LD for `WebSite`, `Organization`, `BreadcrumbList`, `Article`, `Recipe`, `CollectionPage` and `FAQPage`.
- Internal search results are `noindex`; categories with fewer than two pages are `noindex` and excluded from the sitemap.
- Content routes are statically generated with `generateStaticParams`.

## Environment

Copy `.env.example` to `.env.local`. All variables are optional; the site runs without them.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used in metadata and the sitemap |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Enables analytics when set |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Search console verification tags |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | Ad slots render only when set |
| `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` / `NEXT_PUBLIC_CONTACT_ENDPOINT` | Optional form endpoints |

## Images

Both images are AI-generated placeholders and are declared at their true pixel size:

| File | Size | Declared in |
| --- | --- | --- |
| `public/images/hero-ingredients.jpg` | 1184 × 880 | `components/pages/HomePage.tsx` |
| `public/images/og-default.jpg` | 1392 × 752 | `lib/seo.ts` (`DEFAULT_OG_IMAGE`) |

Replace each with photography at the same pixel dimensions and keep the file names, so no code changes are needed. If a replacement is a different size, update the declared `width`/`height` in those two files to match. The hero is cropped by `object-cover` at 320, 420 and 480 px tall, so keep its subject centred; `og-default.jpg` is the social card for every page that does not set its own.

A recipe or guide may set an optional `image: { url, alt, width, height }` field, with `url` a path under `public/`, to use its own social card and recipe structured-data image. Entries without it fall back to `DEFAULT_OG_IMAGE` through `buildMetadata`; `npm run validate:content` checks the field when it is present.

## Deployment

The repository is Vercel-ready (`vercel.json` pins `bom1` and adds basic security and caching headers). Push to a Git provider, import the project, set `NEXT_PUBLIC_SITE_URL` to the production origin, and deploy.

## Content status

Seed content is a launch set, not the finished library: 12 English and 9 Hindi recipes, 17 English and 15 Hindi guides, 8 ingredients per language, 15 categories and 3 collections per language. Some English entries do not yet have a Hindi counterpart (reported as warnings by `validate:content`), and every published page is marked review-pending until a named reviewer signs off.
