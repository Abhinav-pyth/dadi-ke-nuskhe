import type { Metadata } from "next";

import { JanAushadhiPage } from "@/components/pages/JanAushadhiPage";
import { t } from "@/lib/copy";
import { buildMetadata } from "@/lib/seo";

type SearchParams = { q?: string | string[]; group?: string | string[] };

function first(value?: string | string[]) {
  return typeof value === "string" ? value : Array.isArray(value) ? value[0] : undefined;
}

function metadataFor(): Metadata {
  const copy = t("hi").janaushadhi;
  return buildMetadata({
    lang: "hi",
    title: copy.seoTitle,
    description: copy.seoDescription,
    path: "/hi/jan-aushadhi",
    alternatePath: "/en/jan-aushadhi",
  });
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const sp = await searchParams;
  const metadata = metadataFor();
  if (!first(sp.q) && !first(sp.group)) return metadata;
  return { ...metadata, robots: { index: false, follow: true } };
}

export default async function HindiJanAushadhi({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  return <JanAushadhiPage lang="hi" query={first(sp.q) ?? ""} group={first(sp.group)} />;
}
