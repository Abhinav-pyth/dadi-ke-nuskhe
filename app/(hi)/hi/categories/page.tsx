import type { Metadata } from "next";

import { CategoriesIndexPage } from "@/components/pages/IndexPages";
import { t } from "@/lib/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "hi",
  title: t("hi").index.categoriesTitle,
  description: t("hi").index.categoriesLead,
  path: "/hi/categories",
  alternatePath: "/en/categories",
});

export default function HindiCategories() {
  return <CategoriesIndexPage lang="hi" />;
}
