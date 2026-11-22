import type { Metadata } from "next";

import { CategoriesIndexPage } from "@/components/pages/IndexPages";
import { t } from "@/lib/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  title: t("en").index.categoriesTitle,
  description: t("en").index.categoriesLead,
  path: "/en/categories",
  alternatePath: "/hi/categories",
});

export default function EnglishCategories() {
  return <CategoriesIndexPage lang="en" />;
}
