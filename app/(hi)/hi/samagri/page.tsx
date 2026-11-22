import type { Metadata } from "next";

import { IngredientsIndexPage } from "@/components/pages/IndexPages";
import { t } from "@/lib/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "hi",
  title: t("hi").index.ingredientsTitle,
  description: t("hi").index.ingredientsLead,
  path: "/hi/samagri",
  alternatePath: "/en/ingredients",
});

export default function HindiIngredientsIndex() {
  return <IngredientsIndexPage lang="hi" />;
}
