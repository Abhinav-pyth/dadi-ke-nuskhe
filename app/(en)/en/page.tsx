import type { Metadata } from "next";

import { HomePage } from "@/components/pages/HomePage";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  title: `${SITE.name.en} — ${SITE.tagline.en}`,
  description: SITE.description.en,
  path: "/en",
  alternatePath: "/hi",
});

export default function EnglishHome() {
  return <HomePage lang="en" />;
}
