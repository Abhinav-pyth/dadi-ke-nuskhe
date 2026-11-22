import type { Metadata } from "next";

import { CollectionsIndexPage } from "@/components/pages/IndexPages";
import { t } from "@/lib/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "hi",
  title: t("hi").index.collectionsTitle,
  description: t("hi").index.collectionsLead,
  path: "/hi/sangrah",
  alternatePath: "/en/collections",
});

export default function HindiCollectionsIndex() {
  return <CollectionsIndexPage lang="hi" />;
}
