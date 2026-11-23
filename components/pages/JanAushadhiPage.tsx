import { ArrowRight, ExternalLink, MapPin, Pill, Search, ShieldCheck, Tag } from "lucide-react";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { t } from "@/lib/copy";
import {
  JANAUSHADHI_EXAMPLES,
  JANAUSHADHI_INFO,
  formatMrp,
  janaushadhiGroups,
  searchJanaushadhi,
} from "@/lib/janaushadhi";
import type { Lang } from "@/lib/types";

export function janaushadhiPath(lang: Lang) {
  return `/${lang}/jan-aushadhi`;
}

function formatDate(lang: Lang, iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Mirror of the official PMBJP (Jan Aushadhi) product and MRP list. Search runs
 * on the server against the copied catalogue, so it works without JavaScript
 * and the page never ships the 2,400-row dataset to the browser.
 */
export function JanAushadhiPage({
  lang,
  query,
  group,
}: {
  lang: Lang;
  query: string;
  group?: string;
}) {
  const copy = t(lang).janaushadhi;
  const path = janaushadhiPath(lang);
  const groups = janaushadhiGroups();
  const trimmed = query.trim();
  const { matches, total, groupTotal } = searchJanaushadhi(trimmed, { group });
  const filtered = Boolean(trimmed) || Boolean(group);

  const groupHref = (name?: string) =>
    name ? `${path}?group=${encodeURIComponent(name)}` : path;
  const queryHref = (term: string) => `${path}?q=${encodeURIComponent(term)}`;

  return (
    <>
      <div className="border-b border-leaf-900/[0.06] bg-cream-100/50">
        <div className="container-page py-10">
          <Breadcrumbs
            items={[
              { name: t(lang).common.home, href: `/${lang}` },
              { name: copy.navLabel },
            ]}
          />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge tone="saffron">{copy.newBadge}</Badge>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              {JANAUSHADHI_INFO.scheme[lang]}
            </span>
          </div>
          <h1
            className={`mt-3 max-w-3xl text-3xl leading-tight text-leaf-900 sm:text-4xl ${
              lang === "hi" ? "font-hindi-serif" : "font-serif"
            }`}
          >
            {copy.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">{copy.lead}</p>

          <form action={path} method="get" role="search" className="mt-6 max-w-xl">
            <label htmlFor="janaushadhi-input" className="sr-only">
              {copy.searchLabel}
            </label>
            <div className="relative flex items-center">
              <Search aria-hidden="true" className="pointer-events-none absolute left-4 h-4 w-4 text-ink-soft" />
              <input
                id="janaushadhi-input"
                name="q"
                type="search"
                defaultValue={trimmed}
                placeholder={copy.searchPlaceholder}
                autoComplete="off"
                className="h-12 w-full rounded-full border border-leaf-900/15 bg-white/95 pl-11 pr-36 text-sm text-ink shadow-sm focus-visible:border-leaf-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-600/25"
              />
              <button
                type="submit"
                className="absolute right-1.5 h-9 rounded-full bg-leaf-700 px-4 text-xs font-semibold text-cream-50 hover:bg-leaf-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-600 focus-visible:ring-offset-2"
              >
                {copy.searchCta}
              </button>
            </div>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
              {copy.examplesTitle}
            </span>
            {JANAUSHADHI_EXAMPLES.map((term) => (
              <Link
                key={term}
                href={queryHref(term)}
                className="rounded-full bg-cream-50 px-3 py-1.5 text-xs font-medium text-leaf-800 ring-1 ring-leaf-900/10 transition-colors hover:bg-leaf-50"
              >
                {term}
              </Link>
            ))}
          </div>

          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-soft">
            <Pill aria-hidden="true" className="h-3.5 w-3.5" />
            {copy.stats
              .replace("{medicines}", String(JANAUSHADHI_INFO.total))
              .replace("{groups}", String(groups.length))
              .replace("{date}", formatDate(lang, JANAUSHADHI_INFO.accessedDate))}
          </p>
        </div>
      </div>

      <div className="container-page py-10">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside aria-labelledby="janaushadhi-groups" className="space-y-4">
            <div className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-4">
              <h2
                id="janaushadhi-groups"
                className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft"
              >
                {copy.browseGroups}
              </h2>
              <ul className="mt-3 max-h-[60vh] space-y-0.5 overflow-y-auto pr-1 text-sm">
                <li>
                  <Link
                    href={path}
                    aria-current={!group ? "page" : undefined}
                    className={`flex items-center justify-between gap-2 rounded-xl px-3 py-2 ${
                      !group ? "bg-leaf-50 font-semibold text-leaf-900" : "text-leaf-700 hover:bg-leaf-50/60"
                    }`}
                  >
                    {copy.allProducts}
                    <span className="text-[11px] text-ink-soft">{JANAUSHADHI_INFO.total}</span>
                  </Link>
                </li>
                {groups.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={groupHref(item.name)}
                      aria-current={group === item.name ? "page" : undefined}
                      className={`flex items-start justify-between gap-2 rounded-xl px-3 py-2 leading-snug ${
                        group === item.name
                          ? "bg-leaf-50 font-semibold text-leaf-900"
                          : "text-leaf-700 hover:bg-leaf-50/60"
                      }`}
                    >
                      {item.name}
                      <span className="shrink-0 text-[11px] text-ink-soft">{item.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-4">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                <Tag aria-hidden="true" className="h-3.5 w-3.5" />
                {copy.sourceTitle}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">{copy.sourceBody}</p>
              <ul className="mt-3 space-y-2 text-xs">
                <li>
                  <a
                    href={JANAUSHADHI_INFO.listUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-900"
                  >
                    {copy.sourceList}
                    <ExternalLink aria-hidden="true" className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href={JANAUSHADHI_INFO.homeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-900"
                  >
                    {copy.sourceHome}
                    <ExternalLink aria-hidden="true" className="h-3 w-3" />
                  </a>
                </li>
              </ul>
              <p className="mt-3 text-[11px] text-ink-soft">
                {copy.updated}: {formatDate(lang, JANAUSHADHI_INFO.accessedDate)}
              </p>
            </div>
          </aside>

          <div>
            {filtered ? (
              <p aria-live="polite" className="text-sm text-ink-muted">
                <span className="font-semibold text-leaf-900">{total}</span>{" "}
                {total === 1 ? copy.resultOne : copy.resultsMany}
                {trimmed ? (
                  <>
                    {" "}
                    {copy.resultsFor} <span className="font-semibold text-leaf-900">“{trimmed}”</span>
                  </>
                ) : null}
                {group ? (
                  <>
                    {" "}
                    {copy.inGroup} <span className="font-semibold text-leaf-900">{group}</span>
                    {` (${groupTotal})`}
                  </>
                ) : null}
              </p>
            ) : null}

            {filtered && total > matches.length ? (
              <p className="mt-2 rounded-xl bg-cream-100/70 px-3 py-2 text-xs text-ink-muted">
                {copy.showingFirst
                  .replace("{shown}", String(matches.length))
                  .replace("{total}", String(total))}
              </p>
            ) : null}

            {filtered && total === 0 ? (
              <div className="mt-4 rounded-3xl border border-dashed border-leaf-900/20 bg-cream-50 p-8">
                <h2 className="font-serif text-xl text-leaf-900">{copy.noResultsTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{copy.noResultsBody}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {JANAUSHADHI_EXAMPLES.slice(0, 4).map((term) => (
                    <Link
                      key={term}
                      href={queryHref(term)}
                      className="rounded-full bg-leaf-50 px-3 py-1.5 text-xs font-medium text-leaf-800 hover:bg-leaf-100"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
                {group ? (
                  <Link href={path} className="mt-4 inline-block text-xs font-semibold text-leaf-700 underline underline-offset-4">
                    {copy.clear}
                  </Link>
                ) : null}
              </div>
            ) : null}

            {!filtered ? (
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Search, title: copy.how1Title, body: copy.how1Body },
                  { icon: Tag, title: copy.how2Title, body: copy.how2Body },
                  { icon: MapPin, title: copy.how3Title, body: copy.how3Body },
                ].map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-4"
                  >
                    <step.icon aria-hidden="true" className="h-4 w-4 text-leaf-600" />
                    <h2 className="mt-2 text-sm font-semibold text-leaf-900">{step.title}</h2>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted">{step.body}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {matches.length ? (
              <ul
                aria-label={copy.resultsLabel}
                className="mt-4 divide-y divide-leaf-900/10 overflow-hidden rounded-2xl border border-leaf-900/[0.08] bg-cream-50"
              >
                {matches.map(({ product, formula }) => {
                  const mrp = formatMrp(product.mrp);
                  return (
                    <li
                      key={product.code}
                      id={`drug-${product.code}`}
                      className="p-5 transition-colors hover:bg-leaf-50/40"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                            {copy.drugCode} {product.code} · {product.group}
                          </p>
                          <h3 className="mt-1 font-serif text-lg leading-snug text-leaf-900">
                            {product.name}
                          </h3>
                          {formula.length > 1 || /\d/.test(formula[0] ?? "") ? (
                            <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                              <span className="font-semibold text-leaf-800">{copy.composition}:</span>{" "}
                              {formula.join(" + ")}
                            </p>
                          ) : null}
                        </div>
                        <dl className="flex shrink-0 items-start gap-6 rounded-xl bg-cream-100/70 px-4 py-2">
                          <div>
                            <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                              {copy.mrp}
                            </dt>
                            <dd className="mt-0.5 font-serif text-lg text-leaf-900">
                              {mrp ?? copy.mrpPending}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                              {copy.pack}
                            </dt>
                            <dd className="mt-0.5 text-sm text-leaf-900">{product.pack}</dd>
                          </div>
                        </dl>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : null}

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-5">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-leaf-900">
                  <ShieldCheck aria-hidden="true" className="h-4 w-4 text-leaf-600" />
                  {copy.priceTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {copy.priceBody}{" "}
                  <a
                    href="https://janaushadhi.gov.in/about-pmbjb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-leaf-700 underline underline-offset-4"
                  >
                    {copy.priceSource}
                  </a>
                </p>
              </div>

              <div className="rounded-2xl border border-saffron-500/30 bg-saffron-100/50 p-5">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-leaf-900">
                  <ArrowRight aria-hidden="true" className="h-4 w-4 text-saffron-600" />
                  {copy.safetyTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{copy.safetyBody}</p>
                <p className="mt-2 text-xs font-semibold text-saffron-600">{copy.notMedical}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
