import type { Metadata } from "next";

import { IngredientPage } from "@/components/pages/IngredientPage";
import { getIngredient, getIngredientByKey, ingredientSlugs } from "@/lib/entries";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return ingredientSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ingredient = getIngredient("en", slug);
  if (!ingredient) return {};
  const translation = getIngredientByKey("hi", ingredient.key);

  return buildMetadata({
    lang: "en",
    title: ingredient.seoTitle,
    description: ingredient.metaDescription,
    path: `/en/ingredients/${ingredient.slug}`,
    alternatePath: translation ? `/hi/samagri/${translation.slug}` : undefined,
    type: "article",
    publishedTime: ingredient.publishedAt,
    modifiedTime: ingredient.updatedAt,
  });
}

export default async function EnglishIngredient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <IngredientPage lang="en" slug={slug} />;
}
