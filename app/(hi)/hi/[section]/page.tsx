import type { Metadata } from "next";

import { InfoRoute } from "@/components/pages/InfoRoute";
import { SectionPage } from "@/components/pages/SectionPage";
import { getInfoPage, getInfoPageKeys } from "@/lib/entries";
import { buildMetadata } from "@/lib/seo";
import { SECTIONS, sectionBySlug, sectionPath } from "@/lib/sections";
import type { InfoPageKey } from "@/lib/types";

/**
 * Handles both section landing pages (/hi/nuskhe, /hi/recipes, …) and the
 * eight trust/legal pages (/hi/about, /hi/editorial-policy, …). Keeping them in
 * one dynamic segment avoids a routing conflict between two dynamic folders at
 * the same level.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...SECTIONS.map((section) => ({ section: section.slug.hi })),
    ...getInfoPageKeys("hi").map((key) => ({ section: key })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section: slug } = await params;

  const section = sectionBySlug("hi", slug);
  if (section) {
    return buildMetadata({
      lang: "hi",
      title: `${section.name.hi} — ${section.tagline.hi}`,
      description: section.intro.hi.slice(0, 158),
      path: sectionPath("hi", section.key),
      alternatePath: sectionPath("en", section.key),
    });
  }

  const info = getInfoPage("hi", slug as InfoPageKey);
  if (info) {
    return buildMetadata({
      lang: "hi",
      title: info.seoTitle,
      description: info.metaDescription,
      path: `/${info.lang}/${info.key}`,
      alternatePath: `/en/${info.key}`,
      noindex: false,
    });
  }

  return {};
}

export default async function HindiSectionOrInfo({
  params,
  searchParams,
}: {
  params: Promise<{ section: string }>;
  searchParams: Promise<{ tag?: string | string[] }>;
}) {
  const { section: slug } = await params;
  const query = await searchParams;
  const tag = typeof query.tag === "string" ? query.tag : Array.isArray(query.tag) ? query.tag[0] : undefined;

  const section = sectionBySlug("hi", slug);
  if (section) {
    return <SectionPage lang="hi" sectionKey={section.key} tag={tag} />;
  }

  return <InfoRoute lang="hi" pageKey={slug as InfoPageKey} />;
}
