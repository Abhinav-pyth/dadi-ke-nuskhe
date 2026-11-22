import type { Metadata } from "next";

import { CollectionPage } from "@/components/pages/CollectionPage";
import { collectionSlugs, getCollection, getCollectionByKey } from "@/lib/entries";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return collectionSlugs("hi").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection("hi", slug);
  if (!collection) return {};
  const translation = getCollectionByKey("en", collection.key);

  return buildMetadata({
    lang: "hi",
    title: collection.seoTitle,
    description: collection.metaDescription,
    path: `/hi/sangrah/${collection.slug}`,
    alternatePath: translation ? `/en/collections/${translation.slug}` : undefined,
  });
}

export default async function HindiCollection({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CollectionPage lang="hi" slug={slug} />;
}
