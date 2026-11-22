import type { Metadata } from "next";

import { IngredientsIndexPage } from "@/components/pages/IndexPages";
import { t } from "@/lib/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  title: t("en").index.ingredientsTitle,
  description: t("en").index.ingredientsLead,
  path: "/en/ingredients",
  alternatePath: "/hi/samagri",
});

export default function EnglishIngredientsIndex() {
  return <IngredientsIndexPage lang="en" />;
}
