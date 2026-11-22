import { ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryIcon } from "@/components/CategoryIcon";
import { EntryCard } from "@/components/EntryCard";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { SectionSafetyNotice } from "@/components/MedicalSafetyNotice";
import { Badge } from "@/components/ui/badge";
import {
  entriesForCategory,
  getCategory,
  getCategoryByKey,
  isCategoryIndexable,
} from "@/lib/entries";
import { t } from "@/lib/copy";
import { categoriesPath, categoryPath } from "@/lib/i18n";
import { breadcrumbSchema, collectionPageSchema, faqSchema } from "@/lib/schema";
import { getSection } from "@/lib/sections";
import type { Lang } from "@/lib/types";

export function CategoryPage({ lang, slug }: { lang: Lang; slug: string }) {
  const category = getCategory(lang, slug);
  if (!category) notFound();

  const labels = t(lang);
  const entries = entriesForCategory(lang, category.key);
  const indexable = isCategoryIndexable(lang, category.key);
  const related = category.related
    .map((key) => getCategoryByKey(lang, key))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const crumbs = [
    { name: labels.common.home, href: `/${lang}` },
    { name: labels.nav.categories, href: categoriesPath(lang) },
    { name: category.name },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(
            crumbs.map((crumb) => ({ name: crumb.name, url: crumb.href ?? categoryPath(lang, category.slug) })),
          ),
          collectionPageSchema({
            lang,
            name: category.name,
            description: category.metaDescription,
            url: categoryPath(lang, category.slug),
            items: entries.map((entry) => ({
              name: entry.title,
              url: `/${lang}/${getSection(entry.section).slug[lang]}/${entry.slug}`,
            })),
          }),
          ...(category.faqs.length ? [faqSchema(category.faqs)] : []),
        ]}
      />

      <div className="border-b border-leaf-900/[0.06] bg-cream-100/50">
        <div className="container-page py-10 sm:py-14">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cream-50 text-leaf-700 shadow-card ring-1 ring-leaf-900/10">
              <CategoryIcon name={category.icon} className="h-6 w-6" />
            </span>
            <div className="max-w-3xl">
              <Badge tone="leaf">
                {entries.length} {labels.index.countLabel}
              </Badge>
              <h1
                className={`mt-3 text-3xl leading-tight text-leaf-900 sm:text-4xl ${
                  lang === "hi" ? "font-hindi-serif" : "font-serif"
                }`}
              >
                {category.name}
              </h1>
              <p className="mt-2 text-base text-ink-muted">{category.tagline}</p>
            </div>
          </div>

          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink-muted">
            {category.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {category.sections.map((sectionKey) => {
              const section = getSection(sectionKey);
              return (
                <Link
                  key={sectionKey}
                  href={`/${lang}/${section.slug[lang]}`}
                  className="rounded-full border border-leaf-900/10 bg-cream-50 px-3 py-1.5 text-xs font-medium text-leaf-800 hover:bg-leaf-50"
                >
                  {section.name[lang]}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div>
            {entries.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-leaf-900/15 p-6 text-sm text-ink-muted">
                {labels.section.empty}
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {entries.map((entry) => (
                  <EntryCard key={entry.key} entry={entry} lang={lang} />
                ))}
              </div>
            )}

            {category.faqs.length ? (
              <section className="mt-12" aria-labelledby="category-faqs">
                <h2 id="category-faqs" className="font-serif text-xl text-leaf-900">
                  {labels.common.faqTitle}
                </h2>
                <div className="mt-4">
                  <FaqList faqs={category.faqs} idPrefix={`category-${category.key}`} />
                </div>
              </section>
            ) : null}

            {related.length ? (
              <section className="mt-12" aria-labelledby="related-categories">
                <h2 id="related-categories" className="font-serif text-xl text-leaf-900">
                  {labels.common.relatedCategories}
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {related.map((item) => (
                    <li key={item.key}>
                      <Link
                        href={categoryPath(lang, item.slug)}
                        className="group flex items-center justify-between gap-3 rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-4 hover:border-leaf-700/25"
                      >
                        <span>
                          <span className="block text-sm font-medium text-leaf-900">{item.name}</span>
                          <span className="mt-0.5 block text-xs text-ink-muted">{item.tagline}</span>
                        </span>
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-leaf-600 transition-transform group-hover:translate-x-0.5"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <SectionSafetyNotice lang={lang} section={category.sections[0] ?? "recipes"} />
            {!indexable ? (
              <p className="flex gap-2 rounded-2xl border border-leaf-900/10 bg-cream-100/60 p-4 text-xs leading-relaxed text-ink-muted">
                <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-saffron-500" />
                {lang === "hi"
                  ? "इस श्रेणी में अभी कम पृष्ठ हैं। विषय तक पहुँच बनी रहे इसलिए यह खुला है, लेकिन और मौलिक सामग्री आने तक इसे खोज में शामिल नहीं किया जाता।"
                  : "This category holds only a few pages. It stays live so the topic is navigable, but it is excluded from search indexing until more original content is published."}
              </p>
            ) : null}
            <div className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {labels.nav.categories}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href={categoriesPath(lang)} className="text-leaf-700 hover:underline">
                    {labels.index.categoriesTitle}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/${lang === "hi" ? "samagri" : "ingredients"}`} className="text-leaf-700 hover:underline">
                    {labels.nav.ingredients}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/${lang === "hi" ? "sangrah" : "collections"}`} className="text-leaf-700 hover:underline">
                    {labels.nav.collections}
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
