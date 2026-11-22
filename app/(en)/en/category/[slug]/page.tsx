import type { Metadata } from "next";

import { CategoryPage } from "@/components/pages/CategoryPage";
import { categorySlugs, getCategory, getCategoryByKey, isCategoryIndexable } from "@/lib/entries";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return categorySlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory("en", slug);
  if (!category) return {};
  const translation = getCategoryByKey("hi", category.key);

  return buildMetadata({
    lang: "en",
    title: category.seoTitle,
    description: category.metaDescription,
    path: `/en/category/${category.slug}`,
    alternatePath: translation ? `/hi/category/${translation.slug}` : undefined,
    noindex: !isCategoryIndexable("en", category.key),
  });
}

export default async function EnglishCategory({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CategoryPage lang="en" slug={slug} />;
}
