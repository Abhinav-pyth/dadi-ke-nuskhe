import { ArrowRight, Info, Search } from "lucide-react";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { t } from "@/lib/copy";
import { buildSearchIndex, popularEntries, searchEntries, type SearchOptions } from "@/lib/search";
import { searchPath } from "@/lib/i18n";
import { sortTags, tagLabel } from "@/lib/tags";
import type { Lang, SearchEntry } from "@/lib/types";

const SUGGESTED: Record<Lang, string[]> = {
  hi: ["गोंद के लड्डू", "सफेद बालों का तेल", "बेसन फेस पैक", "पेट में गैस", "घर पर घी"],
  en: ["gond laddu", "grey hair oil", "besan face pack", "stomach gas", "ghee at home"],
};

const TYPES = ["recipe", "guide", "ingredient", "category", "collection"] as const;

function typeLabel(lang: Lang, type: SearchEntry["type"]) {
  const labels = t(lang);
  switch (type) {
    case "recipe":
      return labels.search.recipes;
    case "guide":
      return labels.search.guides;
    case "ingredient":
      return labels.search.ingredients;
    case "category":
      return labels.nav.categories;
    default:
      return labels.nav.collections;
  }
}

/**
 * Search results are server-rendered (crawlable links, works without JS) and
 * marked noindex in page metadata: internal search should never compete with
 * the pages it links to.
 */
export function SearchResultsPage({
  lang,
  query,
  type,
  tag,
}: {
  lang: Lang;
  query: string;
  type?: SearchOptions["type"];
  tag?: string;
}) {
  const labels = t(lang);
  const index = buildSearchIndex(lang);
  const trimmed = query.trim();
  const results = trimmed
    ? searchEntries(index, trimmed, 80, { type, tag })
    : [];
  const allTags = sortTags(Array.from(new Set(index.flatMap((entry) => entry.tags))));
  const fallback = popularEntries(index, 6);

  const buildHref = (overrides: { type?: string; tag?: string }) => {
    const params = new URLSearchParams();
    if (trimmed) params.set("q", trimmed);
    const nextType = "type" in overrides ? overrides.type : type;
    const nextTag = "tag" in overrides ? overrides.tag : tag;
    if (nextType) params.set("type", nextType);
    if (nextTag) params.set("tag", nextTag);
    const qs = params.toString();
    return qs ? `/${lang}/search?${qs}` : `/${lang}/search`;
  };

  return (
    <>
      <div className="border-b border-leaf-900/[0.06] bg-cream-100/50">
        <div className="container-page py-10">
          <Breadcrumbs
            items={[{ name: labels.common.home, href: `/${lang}` }, { name: labels.search.title }]}
          />
          <h1
            className={`mt-4 text-3xl leading-tight text-leaf-900 sm:text-4xl ${
              lang === "hi" ? "font-hindi-serif" : "font-serif"
            }`}
          >
            {labels.search.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">{labels.search.lead}</p>

          <form action={`/${lang}/search`} method="get" role="search" className="mt-6 max-w-xl">
            <label htmlFor="search-page-input" className="sr-only">
              {labels.search.title}
            </label>
            <div className="relative flex items-center">
              <Search aria-hidden="true" className="pointer-events-none absolute left-4 h-4 w-4 text-ink-soft" />
              <input
                id="search-page-input"
                name="q"
                type="search"
                defaultValue={trimmed}
                placeholder={labels.search.placeholder}
                autoComplete="off"
                className="h-12 w-full rounded-full border border-leaf-900/15 bg-white/95 pl-11 pr-28 text-sm text-ink shadow-sm focus-visible:border-leaf-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-600/25"
              />
              {type ? <input type="hidden" name="type" value={type} /> : null}
              {tag ? <input type="hidden" name="tag" value={tag} /> : null}
              <button
                type="submit"
                className="absolute right-1.5 h-9 rounded-full bg-leaf-700 px-4 text-xs font-semibold text-cream-50 hover:bg-leaf-800"
              >
                {labels.search.button}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container-page py-10">
        <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="space-y-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {labels.search.filterType}
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <Link
                    href={buildHref({ type: undefined })}
                    aria-current={!type ? "page" : undefined}
                    className={`block rounded-xl px-3 py-2 ${
                      !type ? "bg-leaf-50 font-semibold text-leaf-900" : "text-leaf-700 hover:bg-leaf-50/60"
                    }`}
                  >
                    {labels.search.all}
                  </Link>
                </li>
                {TYPES.map((item) => (
                  <li key={item}>
                    <Link
                      href={buildHref({ type: item })}
                      aria-current={type === item ? "page" : undefined}
                      className={`block rounded-xl px-3 py-2 ${
                        type === item
                          ? "bg-leaf-50 font-semibold text-leaf-900"
                          : "text-leaf-700 hover:bg-leaf-50/60"
                      }`}
                    >
                      {typeLabel(lang, item)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {labels.search.filterTag}
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {tag ? (
                  <li>
                    <Link
                      href={buildHref({ tag: undefined })}
                      className="inline-block rounded-full bg-leaf-700 px-2.5 py-1 text-[11px] font-semibold text-cream-50"
                    >
                      {labels.search.all}
                    </Link>
                  </li>
                ) : null}
                {allTags.map((item) => (
                  <li key={item}>
                    <Link
                      href={buildHref({ tag: item })}
                      className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        tag === item
                          ? "bg-leaf-700 text-cream-50"
                          : "border border-leaf-900/15 text-leaf-800 hover:bg-leaf-50"
                      }`}
                    >
                      {tagLabel(lang, item)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div>
            {trimmed ? (
              <p className="text-sm text-ink-muted">
                <span className="font-semibold text-leaf-900">{results.length}</span>{" "}
                {labels.search.resultCount} — {labels.search.resultsFor}{" "}
                <span className="font-semibold text-leaf-900">“{trimmed}”</span>
              </p>
            ) : null}

            {trimmed && results.length === 0 ? (
              <div className="mt-4 rounded-3xl border border-dashed border-leaf-900/20 bg-cream-50 p-8">
                <h2 className="font-serif text-xl text-leaf-900">{labels.search.noResultsTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{labels.search.noResultsBody}</p>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {labels.search.tryThese}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {SUGGESTED[lang].map((suggestion) => (
                    <li key={suggestion}>
                      <Link
                        href={searchPath(lang, suggestion)}
                        className="inline-block rounded-full bg-leaf-50 px-3 py-1.5 text-xs font-medium text-leaf-800"
                      >
                        {suggestion}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {!trimmed ? (
              <div className="rounded-3xl border border-leaf-900/10 bg-cream-50 p-8">
                <p className="flex items-center gap-2 text-sm text-ink-muted">
                  <Info aria-hidden="true" className="h-4 w-4 text-saffron-500" />
                  {labels.search.lead}
                </p>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {labels.search.popular}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {SUGGESTED[lang].map((suggestion) => (
                    <li key={suggestion}>
                      <Link
                        href={searchPath(lang, suggestion)}
                        className="inline-block rounded-full bg-leaf-50 px-3 py-1.5 text-xs font-medium text-leaf-800"
                      >
                        {suggestion}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {labels.home.recentTitle}
                </p>
                <ul className="mt-2 divide-y divide-leaf-900/10">
                  {fallback.map((entry) => (
                    <li key={`${entry.type}-${entry.key}`}>
                      <Link href={entry.href} className="flex items-center justify-between py-2.5 text-sm text-leaf-800 hover:underline">
                        {entry.title}
                        <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 text-leaf-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {results.length > 0 ? (
              <ul className="mt-4 divide-y divide-leaf-900/10 rounded-2xl border border-leaf-900/[0.08] bg-cream-50">
                {results.map((entry) => (
                  <li key={`${entry.type}-${entry.key}`}>
                    <Link
                      href={entry.href}
                      className="group flex items-start justify-between gap-4 p-5 hover:bg-leaf-50/50"
                    >
                      <span>
                        <Badge tone={entry.type === "recipe" ? "saffron" : "leaf"}>
                          {typeLabel(lang, entry.type)}
                        </Badge>
                        <span className="mt-2 block font-serif text-lg leading-snug text-leaf-900">
                          {entry.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-ink-muted">
                          {entry.description}
                        </span>
                        <span className="mt-2 block text-xs text-ink-soft">
                          {[entry.sectionName, entry.categoryName].filter(Boolean).join(" · ")}
                        </span>
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-leaf-600 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
