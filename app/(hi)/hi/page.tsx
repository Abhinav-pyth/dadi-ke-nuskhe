import type { Metadata } from "next";

import { HomePage } from "@/components/pages/HomePage";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  lang: "hi",
  title: `${SITE.name.hi} — ${SITE.tagline.hi}`,
  description: SITE.description.hi,
  path: "/hi",
  alternatePath: "/en",
});

export default function HindiHome() {
  return <HomePage lang="hi" />;
}
