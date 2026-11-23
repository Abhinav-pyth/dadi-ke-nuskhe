import { notFound } from "next/navigation";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryCard } from "@/components/CategoryCard";
import { CategoryIcon } from "@/components/CategoryIcon";
import { EntryCard } from "@/components/EntryCard";
import { JsonLd } from "@/components/JsonLd";
import { Newsletter } from "@/components/Newsletter";
import { Badge } from "@/components/ui/badge";
import {
  collectionEntries,
  entriesForCategory,
  getCategoryByKey,
  getCollection,
  getCollectionByKey,
} from "@/lib/entries";
import { t } from "@/lib/copy";
import { collectionPath, collectionsPath } from "@/lib/i18n";
import { collectionPageSchema } from "@/lib/schema";
import { getSection } from "@/lib/sections";
import type { Lang } from "@/lib/types";

export function CollectionPage({ lang, slug }: { lang: Lang; slug: string }) {
  const collection = getCollection(lang, slug);
  if (!collection) notFound();

  const labels = t(lang);
  const entries = collectionEntries(lang, collection);
  const categories = collection.relatedCategories
    .map((key) => getCategoryByKey(lang, key))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const path = collectionPath(lang, collection.slug);

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          lang,
          name: collection.title,
          description: collection.metaDescription,
          url: path,
          items: entries.map((entry) => ({
            name: entry.title,
            url: `/${lang}/${getSection(entry.section).slug[lang]}/${entry.slug}`,
          })),
        })}
      />

      <div className="border-b border-leaf-900/[0.06] bg-gradient-to-b from-cream-100/80 to-cream">
        <div className="container-page py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { name: labels.common.home, href: `/${lang}` },
              { name: labels.nav.collections, href: collectionsPath(lang) },
              { name: collection.title },
            ]}
          />
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-leaf-700 text-cream-50">
              <CategoryIcon name={collection.icon} className="h-6 w-6" />
            </span>
            <div className="max-w-3xl">
              <Badge tone="saffron">{collection.season}</Badge>
              <h1
                className={`mt-3 text-3xl leading-tight text-leaf-900 sm:text-4xl ${
                  lang === "hi" ? "font-hindi-serif" : "font-serif"
                }`}
              >
                {collection.title}
              </h1>
              <div className="mt-4 space-y-3 text-base leading-relaxed text-ink-muted">
                {collection.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <EntryCard key={entry.key} entry={entry} lang={lang} />
          ))}
        </div>

        {categories.length ? (
          <section className="mt-12">
            <h2 className="font-serif text-2xl text-leaf-900">{labels.common.relatedCategories}</h2>
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

        <section className="mt-12">
          <h2 className="font-serif text-2xl text-leaf-900">{labels.index.collectionsTitle}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["winter-collection", "summer-collection", "monsoon-collection"]
              .map((key) => getCollectionByKey(lang, key))
              .filter((item): item is NonNullable<typeof item> => Boolean(item))
              .filter((item) => item.key !== collection.key)
              .map((item) => (
                <Link
                  key={item.key}
                  href={collectionPath(lang, item.slug)}
                  className="rounded-full border border-leaf-900/15 px-4 py-2 text-sm font-semibold text-leaf-800 hover:bg-leaf-50"
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </section>

        <div className="mt-12">
          <Newsletter lang={lang} />
        </div>
      </div>
    </>
  );
}
