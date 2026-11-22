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

  return items.map((item) => {
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
}
