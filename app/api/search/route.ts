import { NextResponse } from "next/server";

import { buildSearchIndex, searchEntries } from "@/lib/search";
import type { Lang } from "@/lib/types";

export const dynamic = "force-dynamic";

/** Suggestions endpoint used by the header search combobox. */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang: Lang = searchParams.get("lang") === "hi" ? "hi" : "en";
  const query = (searchParams.get("q") ?? "").slice(0, 80);
  const requested = Number(searchParams.get("limit") ?? 8);
  const limit = Number.isFinite(requested) ? Math.min(Math.max(requested, 1), 20) : 8;

  if (query.trim().length < 2) {
    return NextResponse.json(
      { results: [] },
      { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } },
    );
  }

  const results = searchEntries(buildSearchIndex(lang), query, limit).map((entry) => ({
    type: entry.type,
    key: entry.key,
    lang: entry.lang,
    title: entry.title,
    href: entry.href,
    description: entry.description,
    sectionName: entry.sectionName,
    categoryName: entry.categoryName,
  }));

  return NextResponse.json(
    { results },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } },
  );
}
