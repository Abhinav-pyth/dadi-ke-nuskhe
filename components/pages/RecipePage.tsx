import { AlertTriangle, ArrowRight, ChefHat, Clock, Flame, Lightbulb, Snowflake, Users } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AdSlot } from "@/components/AdSlot";
import { ArticleMetadata } from "@/components/ArticleMetadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { SectionSafetyNotice } from "@/components/MedicalSafetyNotice";
import { Newsletter } from "@/components/Newsletter";
import { RecipeTools } from "@/components/RecipeTools";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Badge } from "@/components/ui/badge";
import {
  getCategories,
  getCategoryByKey,
  getCollectionByKey,
  getEntry,
  ingredientsForEntry,
  relatedEntries,
} from "@/lib/entries";
import { t } from "@/lib/copy";
import { categoryPath, collectionPath, ingredientPath } from "@/lib/i18n";
import { getSection, sectionPath } from "@/lib/sections";
import { breadcrumbSchema, faqSchema, recipeSchema } from "@/lib/schema";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import type { Lang } from "@/lib/types";
import { formatDate } from "@/lib/utils";

function ListBlock({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-muted">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function RecipePage({ lang, slug }: { lang: Lang; slug: string }) {
  const entry = getEntry(lang, "recipes", slug);
  if (!entry || entry.kind !== "recipe") notFound();

  const recipe = entry;
  const labels = t(lang);
  const section = getSection("recipes");
  const path = `/${lang}/${section.slug[lang]}/${recipe.slug}`;
  const ingredients = ingredientsForEntry(lang, recipe.ingredientKeys);
  const related = relatedEntries(lang, recipe.related);
  const collections = ["winter-collection", "summer-collection", "monsoon-collection"]
    .map((key) => getCollectionByKey(lang, key))
    .filter((collection) => collection?.entryKeys.includes(recipe.key));
  const totalMinutes = recipe.prepMinutes + recipe.cookMinutes;
  // Structured data must point at the same card as the social metadata.
  const ogImage = recipe.image ?? DEFAULT_OG_IMAGE;

  const crumbs = [
    { name: labels.common.home, href: `/${lang}` },
    { name: section.name[lang], href: sectionPath(lang, "recipes") },
    { name: recipe.title },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs.map((crumb) => ({ name: crumb.name, url: crumb.href ?? path }))),
          recipeSchema({
            lang,
            recipe,
            url: path,
            sectionName: section.name[lang],
            imageUrl: ogImage.url,
          }),
          ...(recipe.faqs.length ? [faqSchema(recipe.faqs)] : []),
        ]}
      />

      <div className="container-page py-8 lg:py-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article>
            <Breadcrumbs items={crumbs} />

            <header className="mt-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="saffron">
                  <ChefHat aria-hidden="true" className="h-3 w-3" />
                  {section.name[lang]}
                </Badge>
                <Badge tone="neutral">
                  {labels.recipe[recipe.difficulty]}
                </Badge>
                <Badge tone="neutral">
                  <Clock aria-hidden="true" className="h-3 w-3" />
                  {totalMinutes} {labels.common.minutes}
                </Badge>
              </div>
              <h1
                className={`mt-4 text-3xl leading-[1.2] text-leaf-900 sm:text-4xl ${
                  lang === "hi" ? "font-hindi-serif" : "font-serif"
                }`}
              >
                {recipe.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">{recipe.summary}</p>
              <a
                href="#recipe"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-leaf-700 px-4 py-2 text-xs font-semibold text-cream-50 hover:bg-leaf-800"
              >
                {labels.recipe.jumpToRecipe}
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            </header>

            <div className="mt-6">
              <ArticleMetadata
                lang={lang}
                publishedAt={recipe.publishedAt}
                updatedAt={recipe.updatedAt}
                reviewStatus={recipe.reviewStatus}
                reviewer={recipe.medicalReviewer ?? null}
                sources={recipe.references.length}
              />
            </div>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-muted">
              {recipe.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            {/* Recipe overview */}
            <dl className="mt-7 grid grid-cols-2 gap-3 rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-4 sm:grid-cols-4">
              {[
                { label: labels.recipe.prepTime, value: `${recipe.prepMinutes} ${labels.common.minutes}`, icon: Clock },
                { label: labels.recipe.cookTime, value: `${recipe.cookMinutes} ${labels.common.minutes}`, icon: Flame },
                { label: labels.recipe.totalTime, value: `${totalMinutes} ${labels.common.minutes}`, icon: Clock },
                { label: labels.recipe.servings, value: String(recipe.servings), icon: Users },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                    <item.icon aria-hidden="true" className="h-3 w-3" />
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-leaf-900">{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-xs text-ink-soft">
              {labels.recipe.yield}: {recipe.yieldLabel} · {labels.recipe.cuisine}: {recipe.cuisine}
            </p>

            <div className="mt-6">
              <SectionSafetyNotice lang={lang} section="recipes" />
            </div>

            <div className="mt-8">
              <RecipeTools
                lang={lang}
                title={recipe.title}
                ingredients={recipe.ingredients}
                baseServings={recipe.servings}
                yieldLabel={recipe.yieldLabel}
                path={path}
              />
            </div>

            {/* Method */}
            <section id="method" className="mt-10">
              <h2 className="font-serif text-2xl text-leaf-900">{labels.recipe.method}</h2>
              <ol className="mt-5 space-y-4">
                {recipe.steps.map((step, index) => (
                  <li key={step.text.slice(0, 24)} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf-700 text-xs font-semibold text-cream-50">
                      {index + 1}
                    </span>
                    <div className="pt-1">
                      <p className="text-[15px] leading-relaxed text-ink">{step.text}</p>
                      {step.tip ? (
                        <p className="mt-2 flex gap-2 rounded-xl bg-leaf-50 p-3 text-xs leading-relaxed text-leaf-900">
                          <Lightbulb aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          <span>
                            <strong className="font-semibold">{labels.recipe.tipLabel}:</strong> {step.tip}
                          </span>
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <section>
                <h2 className="font-serif text-xl text-leaf-900">{labels.recipe.tips}</h2>
                <div className="mt-3">
                  <ListBlock items={recipe.tips} />
                </div>
              </section>
              <section>
                <h2 className="font-serif text-xl text-leaf-900">{labels.recipe.mistakes}</h2>
                <div className="mt-3">
                  <ListBlock items={recipe.mistakes} />
                </div>
              </section>
            </div>

            <section className="mt-10 border-t border-leaf-900/10 pt-8">
              <h2 className="font-serif text-xl text-leaf-900 sm:text-2xl">{labels.recipe.storage}</h2>
              <div className="mt-3">
                <ListBlock items={recipe.storage} />
              </div>
            </section>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <section className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-5">
                <h2 className="font-serif text-lg text-leaf-900">{labels.recipe.substitutions}</h2>
                <div className="mt-3">
                  <ListBlock items={recipe.substitutions} />
                </div>
              </section>
              <section className="rounded-2xl border border-saffron-200 bg-saffron-100/40 p-5">
                <h2 className="flex items-center gap-2 font-serif text-lg text-leaf-900">
                  <AlertTriangle aria-hidden="true" className="h-4 w-4 text-clay" />
                  {labels.recipe.allergens}
                </h2>
                <div className="mt-3">
                  <ListBlock items={recipe.allergens} />
                </div>
              </section>
            </div>

            <section className="mt-8 rounded-2xl border border-leaf-900/[0.08] bg-leaf-50/40 p-5">
              <h2 className="font-serif text-lg text-leaf-900">{labels.recipe.nutrition}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {recipe.nutritionNote ?? labels.recipe.estimate}
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-serif text-xl text-leaf-900">{labels.recipe.safety}</h2>
              <div className="mt-3">
                <ListBlock items={recipe.safetyNotes} />
              </div>
            </section>

            {recipe.faqs.length ? (
              <section className="mt-10">
                <h2 className="font-serif text-xl text-leaf-900">{labels.common.faqTitle}</h2>
                <div className="mt-4">
                  <FaqList faqs={recipe.faqs} idPrefix={`recipe-${recipe.key}`} />
                </div>
              </section>
            ) : null}

            <section className="mt-10 border-t border-leaf-900/10 pt-8">
              <h2 className="font-serif text-xl text-leaf-900">{labels.common.sources}</h2>
              <ol className="mt-4 space-y-4">
                {recipe.references.map((reference) => (
                  <li key={reference.url} className="text-sm leading-relaxed">
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-leaf-800 underline decoration-leaf-300 underline-offset-4 hover:decoration-leaf-600"
                    >
                      {reference.title}
                    </a>
                    <span className="text-ink-muted"> — {reference.publisher}</span>
                    <span className="mt-1 block text-xs text-ink-soft">
                      {labels.common.accessed} {formatDate(reference.accessedDate, lang)}.
                    </span>
                    <span className="mt-1 block text-xs text-ink-soft">
                      {labels.common.supportingClaim}: {reference.supports}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs leading-relaxed text-ink-soft">{labels.common.referencesNote}</p>
            </section>

            <div className="mt-10 space-y-8">
              <RelatedArticles
                title={labels.common.relatedRecipes}
                items={related
                  .filter((item) => item.kind === "recipe")
                  .map((item) => ({
                    title: item.title,
                    href: `/${lang}/recipes/${item.slug}`,
                    description: item.summary,
                    meta: labels.search.recipes,
                  }))}
              />

              <RelatedArticles
                title={labels.common.relatedIngredients}
                items={ingredients.map((ingredient) => ({
                  title: ingredient.name,
                  href: ingredientPath(lang, ingredient.slug),
                  description: ingredient.summary,
                  meta: labels.nav.ingredients,
                }))}
              />

              {related.filter((item) => item.kind !== "recipe").length ? (
                <RelatedArticles
                  title={labels.common.relatedGuides}
                  items={related
                    .filter((item) => item.kind !== "recipe")
                    .map((item) => ({
                      title: item.title,
                      href: `/${lang}/${getSection(item.section).slug[lang]}/${item.slug}`,
                      description: item.summary,
                      meta: getSection(item.section).name[lang],
                    }))}
                />
              ) : null}

              {collections.length ? (
                <RelatedArticles
                  title={labels.nav.collections}
                  items={collections.map((collection) => ({
                    title: collection!.title,
                    href: collectionPath(lang, collection!.slug),
                    description: collection!.intro[0],
                    meta: labels.nav.collections,
                  }))}
                />
              ) : null}

              <RelatedArticles
                title={labels.common.relatedCategories}
                items={recipe.categories
                  .map((key) => getCategoryByKey(lang, key))
                  .filter((category): category is NonNullable<typeof category> => Boolean(category))
                  .map((category) => ({
                    title: category.name,
                    href: categoryPath(lang, category.slug),
                    description: category.tagline,
                    meta: labels.nav.categories,
                  }))}
              />
            </div>

            <div className="mt-10">
              <AdSlot lang={lang} slot={`recipe-${recipe.key}`} />
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-leaf-900/10 pt-6 text-sm">
              <Link href={sectionPath(lang, "recipes")} className="font-semibold text-leaf-700 hover:underline">
                {labels.common.viewAll} — {section.name[lang]}
              </Link>
              <a href="#top" className="font-semibold text-leaf-700 hover:underline">
                {labels.common.backToTop}
              </a>
            </div>
          </article>

          <aside className="no-print space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {labels.common.onThisPage}
              </p>
              <ol className="mt-3 space-y-2 border-l border-leaf-900/10 pl-4 text-sm">
                {[
                  { id: "recipe", label: labels.recipe.ingredients },
                  { id: "method", label: labels.recipe.method },
                ].map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-ink-muted hover:text-leaf-800">
                      {item.label}
                    </a>
                  </li>
                ))}
                {ingredients.slice(0, 4).map((ingredient) => (
                  <li key={ingredient.key}>
                    <a
                      href={ingredientPath(lang, ingredient.slug)}
                      className="inline-flex items-center gap-1 text-leaf-700 hover:underline"
                    >
                      {ingredient.name}
                      <ArrowRight aria-hidden="true" className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-5">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                <Snowflake aria-hidden="true" className="h-3.5 w-3.5" />
                {labels.nav.collections}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {getCategories(lang).slice(0, 6).map((item) => (
                  <li key={item.key}>
                    <Link href={categoryPath(lang, item.slug)} className="text-leaf-700 hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <Newsletter lang={lang} />
        </div>
      </div>
    </>
  );
}

