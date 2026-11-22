import Link from "next/link";

import { SearchBar } from "@/components/SearchBar";
import { t } from "@/lib/copy";
import { getCategories, getSectionEntries } from "@/lib/entries";
import { categoriesPath, categoryPath } from "@/lib/i18n";
import type { Lang } from "@/lib/types";

export function NotFoundContent({ lang }: { lang: Lang }) {
  const labels = t(lang);
  const categories = getCategories(lang).slice(0, 6);
  const popular = getSectionEntries(lang, "recipes").slice(0, 4);

  return (
    <div className="container-page py-16 sm:py-24">
      <p className="font-serif text-5xl text-saffron-500">404</p>
      <h1
        className={`mt-4 text-3xl leading-tight text-leaf-900 sm:text-4xl ${
          lang === "hi" ? "font-hindi-serif" : "font-serif"
        }`}
      >
        {labels.notFound.title}
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">{labels.notFound.lead}</p>

      <div className="mt-7 max-w-xl">
        <SearchBar lang={lang} />
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
            {labels.nav.categories}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.key}>
                <Link href={categoryPath(lang, category.slug)} className="text-leaf-700 hover:underline">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
            {labels.home.recipesTitle}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {popular.map((entry) => (
              <li key={entry.key}>
                <Link href={`/${lang}/recipes/${entry.slug}`} className="text-leaf-700 hover:underline">
                  {entry.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold">
        <Link href={`/${lang}`} className="rounded-full bg-leaf-700 px-5 py-2.5 text-cream-50 hover:bg-leaf-800">
          {labels.notFound.cta}
        </Link>
        <Link
          href={categoriesPath(lang)}
          className="rounded-full border border-leaf-700/25 px-5 py-2.5 text-leaf-800 hover:bg-leaf-50"
        >
          {labels.nav.categories}
        </Link>
      </div>
    </div>
  );
}
