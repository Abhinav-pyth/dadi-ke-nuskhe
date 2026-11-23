import type { MetadataRoute } from "next";

import { getSitemapItems } from "@/lib/entries";
import { LANG_META } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

/**
 * One URL per language with reciprocal hreflang alternates. Filter and search
 * URLs are never included; thin categories never enter the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const items = [...getSitemapItems("hi"), ...getSitemapItems("en")];

  const pages: MetadataRoute.Sitemap = items.map((item) => {
    const lang = item.path.startsWith("/hi") ? "hi" : "en";
    const other = lang === "hi" ? "en" : "hi";
    const alternateUrl = item.alternatePath ? `${SITE_URL}${item.alternatePath}` : undefined;
    const selfUrl = `${SITE_URL}${item.path}`;

    const languages: Record<string, string> = alternateUrl
      ? {
          [LANG_META[lang].hreflang]: selfUrl,
          [LANG_META[other].hreflang]: alternateUrl,
          "x-default": lang === "hi" ? selfUrl : alternateUrl,
        }
      : {};

    return {
      url: selfUrl,
      lastModified: item.lastModified,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
      ...(Object.keys(languages).length ? { alternates: { languages } } : {}),
    };
  });

  // The Jan Aushadhi price finder is one landing page per language; searches
  // inside it are marked noindex, so only the entry points are listed.
  const janAushadhi: MetadataRoute.Sitemap = (["hi", "en"] as const).map((lang) => {
    const other = lang === "hi" ? "en" : "hi";
    return {
      url: `${SITE_URL}/${lang}/jan-aushadhi`,
      lastModified: new Date("2026-11-23"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          [LANG_META[lang].hreflang]: `${SITE_URL}/${lang}/jan-aushadhi`,
          [LANG_META[other].hreflang]: `${SITE_URL}/${other}/jan-aushadhi`,
          "x-default": `${SITE_URL}/hi/jan-aushadhi`,
        },
      },
    };
  });

  return [...pages, ...janAushadhi];
}
