import type { Metadata } from "next";

import { IngredientPage } from "@/components/pages/IngredientPage";
import { getIngredient, getIngredientByKey, ingredientSlugs } from "@/lib/entries";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return ingredientSlugs("hi").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ingredient = getIngredient("hi", slug);
  if (!ingredient) return {};
  const translation = getIngredientByKey("en", ingredient.key);

  return buildMetadata({
    lang: "hi",
    title: ingredient.seoTitle,
    description: ingredient.metaDescription,
    path: `/hi/samagri/${ingredient.slug}`,
    alternatePath: translation ? `/en/ingredients/${translation.slug}` : undefined,
    type: "article",
    publishedTime: ingredient.publishedAt,
    modifiedTime: ingredient.updatedAt,
  });
}

export default async function HindiIngredient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <IngredientPage lang="hi" slug={slug} />;
}
