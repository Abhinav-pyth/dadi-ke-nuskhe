import type { Metadata } from "next";

import { CollectionPage } from "@/components/pages/CollectionPage";
import { collectionSlugs, getCollection, getCollectionByKey } from "@/lib/entries";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return collectionSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection("en", slug);
  if (!collection) return {};
  const translation = getCollectionByKey("hi", collection.key);

  return buildMetadata({
    lang: "en",
    title: collection.seoTitle,
    description: collection.metaDescription,
    path: `/en/collections/${collection.slug}`,
    alternatePath: translation ? `/hi/sangrah/${translation.slug}` : undefined,
  });
}

export default async function EnglishCollection({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CollectionPage lang="en" slug={slug} />;
}
