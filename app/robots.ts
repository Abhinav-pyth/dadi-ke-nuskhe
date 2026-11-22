import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * Everything needed to render a page stays crawlable: no CSS, JS or image
 * blocking. Only internal search and the API are kept out of the index.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/hi/search", "/en/search"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
