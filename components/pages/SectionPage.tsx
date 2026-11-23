import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AdSlot } from "@/components/AdSlot";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryCard } from "@/components/CategoryCard";
import { EntryCard } from "@/components/EntryCard";
import { JsonLd } from "@/components/JsonLd";
import { SectionSafetyNotice } from "@/components/MedicalSafetyNotice";
import { Newsletter } from "@/components/Newsletter";
import { Badge } from "@/components/ui/badge";
import {
  categoriesForSection,
  entriesByTag,
  entriesForCategory,
  getSectionEntries,
  tagsForSection,
} from "@/lib/entries";
import { t } from "@/lib/copy";
import { searchPath } from "@/lib/i18n";
import { getSection, sectionPath } from "@/lib/sections";
import { collectionPageSchema } from "@/lib/schema";
import { sortTags, tagLabel } from "@/lib/tags";
import type { Lang, SectionKey } from "@/lib/types";

export function SectionPage({
  lang,
  sectionKey,
  tag,
}: {
  lang: Lang;
  sectionKey: SectionKey;
  tag?: string;
}) {
  const section = getSection(sectionKey);
  if (!section) notFound();

  const labels = t(lang);
  const all = getSectionEntries(lang, sectionKey);
  const entries = entriesByTag(lang, sectionKey, tag);
  const tags = sortTags(tagsForSection(lang, sectionKey));
  const categories = categoriesForSection(lang, sectionKey);
  const path = sectionPath(lang, sectionKey);

  const crumbs = [
    { name: labels.common.home, href: `/${lang}` },
    { name: section.name[lang] },
  ];

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          lang,
          name: section.name[lang],
          description: section.intro[lang],
          url: path,
          items: all.map((entry) => ({
            name: entry.title,
            url: `/${lang}/${section.slug[lang]}/${entry.slug}`,
          })),
        })}
      />

      <div className="border-b border-leaf-900/[0.06] bg-cream-100/50">
        <div className="container-page py-10 sm:py-14">
          <Breadcrumbs items={crumbs} />
          <div className="mt-5 max-w-3xl">
            <Badge tone="leaf">
              {all.length} {labels.index.countLabel}
            </Badge>
            <h1
              className={`mt-3 text-3xl leading-tight text-leaf-900 sm:text-4xl ${
                lang === "hi" ? "font-hindi-serif" : "font-serif"
              }`}
            >
              {section.name[lang]}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">{section.intro[lang]}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href={path}
              aria-current={!tag ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${
                !tag ? "bg-leaf-700 text-cream-50" : "border border-leaf-900/15 text-leaf-800 hover:bg-leaf-50"
              }`}
            >
              {labels.section.all} ({all.length})
            </Link>
            {tags.map((item) => (
              <Link
                key={item}
                href={`${path}?tag=${item}`}
                aria-current={tag === item ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${
                  tag === item
                    ? "bg-leaf-700 text-cream-50"
                    : "border border-leaf-900/15 text-leaf-800 hover:bg-leaf-50"
                }`}
              >
                {tagLabel(lang, item)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page py-12">
        <p className="text-sm text-ink-muted">
          {tag ? `${tagLabel(lang, tag)} · ` : ""}
          {entries.length} {labels.section.showing}
        </p>

        {entries.length === 0 ? (
          <div className="mt-6 rounded-3xl border border-dashed border-leaf-900/20 p-8">
            <p className="text-sm text-ink-muted">{labels.section.empty}</p>
            <Link href={path} className="mt-3 inline-block text-sm font-semibold text-leaf-700 hover:underline">
              {labels.section.all}
            </Link>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map((entry) => (
              <EntryCard key={entry.key} entry={entry} lang={lang} />
            ))}
          </div>
        )}

        <div className="mt-10">
          <SectionSafetyNotice lang={lang} section={sectionKey} />
        </div>

        {categories.length ? (
          <section className="mt-12" aria-labelledby="section-categories">
            <h2 id="section-categories" className="font-serif text-2xl text-leaf-900">
              {labels.section.categoriesTitle}
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category.key}
                  category={category}
                  lang={lang}
                  count={entriesForCategory(lang, category.key).length}
                />
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-12" aria-labelledby="section-more">
          <h2 id="section-more" className="font-serif text-2xl text-leaf-900">
            {labels.section.moreTitle}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { label: labels.nav.ingredients, href: `/${lang}/${lang === "hi" ? "samagri" : "ingredients"}` },
              { label: labels.nav.collections, href: `/${lang}/${lang === "hi" ? "sangrah" : "collections"}` },
              { label: labels.nav.categories, href: `/${lang}/categories` },
              { label: labels.search.title, href: searchPath(lang) },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-4 text-sm font-medium text-leaf-900 hover:border-leaf-700/25"
              >
                {item.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4 text-leaf-600" />
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-10">
          <AdSlot lang={lang} slot={`section-${sectionKey}`} />
        </div>

        <div className="mt-12">
          <Newsletter lang={lang} />
        </div>
      </div>
    </>
  );
}
