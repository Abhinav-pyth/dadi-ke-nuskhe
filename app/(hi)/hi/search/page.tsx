import type { Metadata } from "next";

import { SearchResultsPage } from "@/components/pages/SearchResultsPage";
import { t } from "@/lib/copy";
import { buildMetadata } from "@/lib/seo";

/** Internal search: useful to visitors, noindex so it never competes with articles. */
export const metadata: Metadata = buildMetadata({
  lang: "hi",
  title: t("hi").search.title,
  description: t("hi").search.lead,
  path: "/hi/search",
  noindex: true,
});

const TYPES = ["recipe", "guide", "ingredient", "category", "collection"] as const;

export default async function HindiSearch({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[]; type?: string | string[]; tag?: string | string[] }>;
}) {
  const params = await searchParams;
  const first = (value?: string | string[]) =>
    typeof value === "string" ? value : Array.isArray(value) ? value[0] : undefined;
  const type = first(params.type);
  const tag = first(params.tag);

  return (
    <SearchResultsPage
      lang="hi"
      query={first(params.q) ?? ""}
      type={TYPES.includes(type as (typeof TYPES)[number]) ? (type as (typeof TYPES)[number]) : undefined}
      tag={tag}
    />
  );
}
