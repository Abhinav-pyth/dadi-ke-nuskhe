import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuidePage } from "@/components/pages/GuidePage";
import { RecipePage } from "@/components/pages/RecipePage";
import { getAllEntries, getEntry, getEntryByKey } from "@/lib/entries";
import { buildMetadata } from "@/lib/seo";
import { getSection, sectionBySlug, sectionEntryPath } from "@/lib/sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllEntries("hi").map((entry) => ({
    section: getSection(entry.section).slug.hi,
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}): Promise<Metadata> {
  const { section: sectionSlug, slug } = await params;
  const section = sectionBySlug("hi", sectionSlug);
  if (!section) return {};

  const entry = getEntry("hi", section.key, slug);
  if (!entry) return {};
  const translation = getEntryByKey("en", entry.key);

  return buildMetadata({
    lang: "hi",
    title: entry.seoTitle,
    description: entry.metaDescription,
    path: sectionEntryPath("hi", section.key, entry.slug),
    alternatePath: translation
      ? sectionEntryPath("en", translation.section, translation.slug)
      : undefined,
    image: entry.image,
    type: "article",
    publishedTime: entry.publishedAt,
    modifiedTime: entry.updatedAt,
  });
}

export default async function HindiEntryPage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section: sectionSlug, slug } = await params;
  const section = sectionBySlug("hi", sectionSlug);
  if (!section) notFound();

  const entry = getEntry("hi", section.key, slug);
  if (!entry) notFound();

  if (entry.kind === "recipe") {
    return <RecipePage lang="hi" slug={entry.slug} />;
  }
  return <GuidePage lang="hi" section={entry.section} slug={entry.slug} />;
}
