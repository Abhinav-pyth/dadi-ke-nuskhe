import type { Metadata } from "next";

import { LANG_META } from "./i18n";
import { SITE, SITE_URL } from "./site";
import type { ImageRef, Lang } from "./types";

/** Used by every page that does not carry its own `image`. */
export const DEFAULT_OG_IMAGE: ImageRef = {
  url: "/images/og-default.jpg",
  width: 1392,
  height: 752,
  alt: "Traditional Indian ingredients arranged on a warm cream surface",
};

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function siteVerification(): Metadata["verification"] {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const other: Record<string, string> = {};
  if (process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION) {
    other["msvalidate.01"] = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
  }
  if (!google && Object.keys(other).length === 0) return undefined;
  return {
    ...(google ? { google } : {}),
    ...(Object.keys(other).length ? { other } : {}),
  };
}

interface SeoInput {
  lang: Lang;
  title: string;
  description: string;
  /** Path of the current page, e.g. "/en/health/stomach-gas". */
  path: string;
  /** Path of the translated page when one exists. Enables reciprocal hreflang. */
  alternatePath?: string;
  /** Per-entry social card; falls back to DEFAULT_OG_IMAGE. */
  image?: ImageRef;
  type?: "website" | "article";
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * The <title> a page actually ships. SERP titles are truncated around 60
 * characters, so the brand suffix is only worth its width when the whole thing
 * still fits; otherwise the page title stands alone and the brand is left to
 * Google's own site-name display. Shared with scripts/validate-content.ts so
 * duplicate-title detection compares what is really rendered.
 */
export function pageTitle(lang: Lang, title: string, path: string) {
  const MAX_TITLE = 60;
  const branded = `${title} | ${SITE.name[lang]}`;
  return path === `/${lang}` || branded.length > MAX_TITLE ? title : branded;
}

/**
 * Builds language-aware metadata: per-language title/description, canonical,
 * and reciprocal hreflang pairs (hi-IN, en-IN, x-default → Hindi).
 */
export function buildMetadata({
  lang,
  title,
  description,
  path,
  alternatePath,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
}: SeoInput): Metadata {
  const languages: Record<string, string> = {};
  if (alternatePath) {
    const other = lang === "hi" ? "en" : "hi";
    languages[LANG_META[other].hreflang] = absoluteUrl(alternatePath);
    languages[LANG_META[lang].hreflang] = absoluteUrl(path);
    // x-default points at the Hindi (primary) version when available.
    languages["x-default"] = lang === "hi" ? absoluteUrl(path) : absoluteUrl(alternatePath);
  }

  const fullTitle = pageTitle(lang, title, path);

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: absoluteUrl(path),
      ...(Object.keys(languages).length ? { languages } : {}),
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: SITE.name[lang],
      locale: LANG_META[lang].locale,
      ...(alternatePath ? { alternateLocale: LANG_META[lang === "hi" ? "en" : "hi"].locale } : {}),
      images: [image],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: [SITE.name[lang]],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    verification: siteVerification(),
  };
}

export const SITE_METADATA_BASE = new URL(SITE_URL);
