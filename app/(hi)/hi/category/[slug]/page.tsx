import type { Metadata } from "next";

import { CategoryPage } from "@/components/pages/CategoryPage";
import { categorySlugs, getCategory, getCategoryByKey, isCategoryIndexable } from "@/lib/entries";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return categorySlugs("hi").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory("hi", slug);
  if (!category) return {};
  const translation = getCategoryByKey("en", category.key);

  return buildMetadata({
    lang: "hi",
    title: category.seoTitle,
    description: category.metaDescription,
    path: `/hi/category/${category.slug}`,
    alternatePath: translation ? `/en/category/${translation.slug}` : undefined,
    // Thin categories stay live but out of the index until they have depth.
    noindex: !isCategoryIndexable("hi", category.key),
  });
}

export default async function HindiCategory({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CategoryPage lang="hi" slug={slug} />;
}
