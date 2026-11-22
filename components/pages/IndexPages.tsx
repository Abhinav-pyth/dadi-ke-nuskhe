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
  getCategories,
  getCollections,
  getIngredients,
  getRecipes,
} from "@/lib/entries";
import { t } from "@/lib/copy";
import { categoryPath, collectionPath, ingredientPath } from "@/lib/i18n";
import { collectionPageSchema } from "@/lib/schema";
import type { Lang } from "@/lib/types";

function PageHeader({
  lang,
  title,
  lead,
  eyebrow,
  crumbs,
}: {
  lang: Lang;
  title: string;
  lead: string;
  eyebrow: string;
  crumbs: { name: string; href?: string }[];
}) {
  return (
    <div className="border-b border-leaf-900/[0.06] bg-cream-100/50">
      <div className="container-page py-10 sm:py-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-5 max-w-3xl">
          <Badge tone="leaf">{eyebrow}</Badge>
          <h1
            className={`mt-3 text-3xl leading-tight text-leaf-900 sm:text-4xl ${
              lang === "hi" ? "font-hindi-serif" : "font-serif"
            }`}
          >
            {title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">{lead}</p>
        </div>
      </div>
    </div>
  );
}

export function CategoriesIndexPage({ lang }: { lang: Lang }) {
  const labels = t(lang);
  const categories = getCategories(lang);

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          lang,
          name: labels.index.categoriesTitle,
          description: labels.index.categoriesLead,
          url: `/${lang}/categories`,
          items: categories.map((category) => ({
            name: category.name,
            url: categoryPath(lang, category.slug),
          })),
        })}
      />
      <PageHeader
        lang={lang}
        eyebrow={labels.nav.categories}
        title={labels.index.categoriesTitle}
        lead={labels.index.categoriesLead}
        crumbs={[{ name: labels.common.home, href: `/${lang}` }, { name: labels.nav.categories }]}
      />
      <div className="container-page py-12">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.key}
              category={category}
              lang={lang}
              count={entriesForCategory(lang, category.key).length}
            />
          ))}
        </div>
        <div className="mt-12">
          <Newsletter lang={lang} />
        </div>
      </div>
    </>
  );
}

export function IngredientsIndexPage({ lang }: { lang: Lang }) {
  const labels = t(lang);
  const ingredients = getIngredients(lang);

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          lang,
          name: labels.index.ingredientsTitle,
          description: labels.index.ingredientsLead,
          url: `/${lang}/${lang === "hi" ? "samagri" : "ingredients"}`,
          items: ingredients.map((ingredient) => ({
            name: ingredient.name,
            url: ingredientPath(lang, ingredient.slug),
          })),
        })}
      />
      <PageHeader
        lang={lang}
        eyebrow={`${ingredients.length} ${labels.index.countLabel}`}
        title={labels.index.ingredientsTitle}
        lead={labels.index.ingredientsLead}
        crumbs={[{ name: labels.common.home, href: `/${lang}` }, { name: labels.nav.ingredients }]}
      />
      <div className="container-page py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ingredient) => (
            <Link
              key={ingredient.key}
              href={ingredientPath(lang, ingredient.slug)}
              className="group flex h-full flex-col rounded-3xl border border-leaf-900/[0.07] bg-cream-50 p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-leaf-700/20 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-serif text-lg text-leaf-900">{ingredient.name}</h2>
                <span className="rounded-full bg-leaf-50 px-2.5 py-1 text-[10px] font-semibold text-leaf-800">
                  {ingredient.alternateName}
                </span>
              </div>
              {ingredient.botanicalName ? (
                <p className="mt-1 text-[11px] italic text-ink-soft">{ingredient.botanicalName}</p>
              ) : null}
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{ingredient.summary}</p>
              <p className="mt-auto pt-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                {ingredient.recipes.length + ingredient.guides.length} {labels.common.related}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <Newsletter lang={lang} />
        </div>
      </div>
    </>
  );
}

export function CollectionsIndexPage({ lang }: { lang: Lang }) {
  const labels = t(lang);
  const collections = getCollections(lang);

  return (
    <>
      <PageHeader
        lang={lang}
        eyebrow={labels.nav.collections}
        title={labels.index.collectionsTitle}
        lead={labels.index.collectionsLead}
        crumbs={[{ name: labels.common.home, href: `/${lang}` }, { name: labels.nav.collections }]}
      />
      <div className="container-page py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {collections.map((collection) => {
            const entries = collectionEntries(lang, collection);
            return (
              <Link
                key={collection.key}
                href={collectionPath(lang, collection.slug)}
                className="group flex h-full flex-col rounded-3xl border border-leaf-900/[0.07] bg-gradient-to-br from-cream-50 to-cream-100/70 p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-leaf-700 text-cream-50">
                  <CategoryIcon name={collection.icon} />
                </span>
                <h2 className="mt-4 font-serif text-xl text-leaf-900">{collection.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{collection.intro[0]}</p>
                <p className="mt-auto pt-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                  {entries.length} {labels.index.countLabel}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="mt-12">
          <Newsletter lang={lang} />
        </div>
      </div>
    </>
  );
}

export function FeaturedRecipesPage({ lang }: { lang: Lang }) {
  const labels = t(lang);
  const recipes = getRecipes(lang);
  return (
    <div className="container-page py-12">
      <h2 className="font-serif text-2xl text-leaf-900">{labels.search.recipes}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.slice(0, 6).map((recipe) => (
          <EntryCard key={recipe.key} entry={recipe} lang={lang} />
        ))}
      </div>
    </div>
  );
}
