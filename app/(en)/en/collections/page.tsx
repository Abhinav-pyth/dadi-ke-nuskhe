import type { Metadata } from "next";

import { CollectionsIndexPage } from "@/components/pages/IndexPages";
import { t } from "@/lib/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  title: t("en").index.collectionsTitle,
  description: t("en").index.collectionsLead,
  path: "/en/collections",
  alternatePath: "/hi/sangrah",
});

export default function EnglishCollectionsIndex() {
  return <CollectionsIndexPage lang="en" />;
}
