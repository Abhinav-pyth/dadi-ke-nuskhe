import type { Metadata } from "next";

import { InfoRoute } from "@/components/pages/InfoRoute";
import { SectionPage } from "@/components/pages/SectionPage";
import { getInfoPage, getInfoPageKeys } from "@/lib/entries";
import { buildMetadata } from "@/lib/seo";
import { SECTIONS, sectionBySlug, sectionPath } from "@/lib/sections";
import type { InfoPageKey } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...SECTIONS.map((section) => ({ section: section.slug.en })),
    ...getInfoPageKeys("en").map((key) => ({ section: key })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section: slug } = await params;

  const section = sectionBySlug("en", slug);
  if (section) {
    return buildMetadata({
      lang: "en",
      title: `${section.name.en} — ${section.tagline.en}`,
      description: section.intro.en.slice(0, 158),
      path: sectionPath("en", section.key),
      alternatePath: sectionPath("hi", section.key),
    });
  }

  const info = getInfoPage("en", slug as InfoPageKey);
  if (info) {
    return buildMetadata({
      lang: "en",
      title: info.seoTitle,
      description: info.metaDescription,
      path: `/${info.lang}/${info.key}`,
      alternatePath: `/hi/${info.key}`,
    });
  }

  return {};
}

export default async function EnglishSectionOrInfo({
  params,
  searchParams,
}: {
  params: Promise<{ section: string }>;
  searchParams: Promise<{ tag?: string | string[] }>;
}) {
  const { section: slug } = await params;
  const query = await searchParams;
  const tag = typeof query.tag === "string" ? query.tag : Array.isArray(query.tag) ? query.tag[0] : undefined;

  const section = sectionBySlug("en", slug);
  if (section) {
    return <SectionPage lang="en" sectionKey={section.key} tag={tag} />;
  }

  return <InfoRoute lang="en" pageKey={slug as InfoPageKey} />;
}
