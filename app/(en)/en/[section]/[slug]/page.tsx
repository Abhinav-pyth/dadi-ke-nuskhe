import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuidePage } from "@/components/pages/GuidePage";
import { RecipePage } from "@/components/pages/RecipePage";
import { getAllEntries, getEntry, getEntryByKey } from "@/lib/entries";
import { buildMetadata } from "@/lib/seo";
import { getSection, sectionBySlug, sectionEntryPath } from "@/lib/sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllEntries("en").map((entry) => ({
    section: getSection(entry.section).slug.en,
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}): Promise<Metadata> {
  const { section: sectionSlug, slug } = await params;
  const section = sectionBySlug("en", sectionSlug);
  if (!section) return {};

  const entry = getEntry("en", section.key, slug);
  if (!entry) return {};
  const translation = getEntryByKey("hi", entry.key);

  return buildMetadata({
    lang: "en",
    title: entry.seoTitle,
    description: entry.metaDescription,
    path: `/${sectionSlug}/${entry.slug}`,
    alternatePath: translation ? sectionEntryPath("hi", translation.section, translation.slug) : undefined,
    type: "article",
    publishedTime: entry.publishedAt,
    modifiedTime: entry.updatedAt,
  });
}

export default async function EnglishEntryPage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section: sectionSlug, slug } = await params;
  const section = sectionBySlug("en", sectionSlug);
  if (!section) notFound();

  const entry = getEntry("en", section.key, slug);
  if (!entry) notFound();

  if (entry.kind === "recipe") {
    return <RecipePage lang="en" slug={entry.slug} />;
  }
  return <GuidePage lang="en" section={entry.section} slug={entry.slug} />;
}
