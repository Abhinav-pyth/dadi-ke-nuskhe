import { FlaskConical } from "lucide-react";
import { notFound } from "next/navigation";

import { AdSlot } from "@/components/AdSlot";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EntryCard } from "@/components/EntryCard";
import { JsonLd } from "@/components/JsonLd";
import { MedicalSafetyNotice } from "@/components/MedicalSafetyNotice";
import { Newsletter } from "@/components/Newsletter";
import { Badge } from "@/components/ui/badge";
import {
  entriesUsingIngredient,
  getIngredient,
  getIngredientByKey,
} from "@/lib/entries";
import { t } from "@/lib/copy";
import { ingredientPath, ingredientsPath } from "@/lib/i18n";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { getSection } from "@/lib/sections";
import type { Lang } from "@/lib/types";
import { formatDate } from "@/lib/utils";

function List({ items }: { items: string[] }) {
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

export function IngredientPage({ lang, slug }: { lang: Lang; slug: string }) {
  const ingredient = getIngredient(lang, slug);
  if (!ingredient) notFound();

  const labels = t(lang);
  const entries = entriesUsingIngredient(lang, ingredient.key);
  const recipes = entries.filter((entry) => entry.kind === "recipe");
  const guides = entries.filter((entry) => entry.kind !== "recipe");
  const path = ingredientPath(lang, ingredient.slug);

  const crumbs = [
    { name: labels.common.home, href: `/${lang}` },
    { name: labels.nav.ingredients, href: ingredientsPath(lang) },
    { name: ingredient.name },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs.map((crumb) => ({ name: crumb.name, url: crumb.href ?? path }))),
          collectionPageSchema({
            lang,
            name: ingredient.name,
            description: ingredient.metaDescription,
            url: path,
            items: entries.map((entry) => ({
              name: entry.title,
              url: `/${lang}/${getSection(entry.section).slug[lang]}/${entry.slug}`,
            })),
          }),
        ]}
      />

      <div className="container-page py-8 lg:py-12">
        <Breadcrumbs items={crumbs} />

        <header className="mt-6 max-w-3xl">
          <Badge tone="saffron">{labels.nav.ingredients}</Badge>
          <h1
            className={`mt-3 text-3xl leading-tight text-leaf-900 sm:text-4xl ${
              lang === "hi" ? "font-hindi-serif" : "font-serif"
            }`}
          >
            {ingredient.name}
          </h1>
          <p className="mt-2 text-sm text-ink-muted">
            {labels.ingredient.names}: {ingredient.alternateName}
            {ingredient.botanicalName ? <span className="italic"> · {ingredient.botanicalName}</span> : null}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{ingredient.summary}</p>
          <p className="mt-3 text-xs text-ink-soft">
            {labels.common.updated}: {formatDate(ingredient.updatedAt, lang)} ·{" "}
            {ingredient.references.length} {labels.common.sourcesCount} · {labels.common.reviewPending}
          </p>
        </header>

        <div className="mt-6">
          <MedicalSafetyNotice lang={lang} />
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-xl text-leaf-900 sm:text-2xl">{labels.ingredient.about}</h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-muted">
                {ingredient.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="border-t border-leaf-900/10 pt-8">
              <h2 className="font-serif text-xl text-leaf-900 sm:text-2xl">{labels.ingredient.traditional}</h2>
              <div className="mt-3">
                <List items={ingredient.traditionalUses} />
              </div>
            </section>

            {ingredient.culinaryUses.length ? (
              <section className="border-t border-leaf-900/10 pt-8">
                <h2 className="font-serif text-xl text-leaf-900 sm:text-2xl">{labels.ingredient.culinary}</h2>
                <div className="mt-3">
                  <List items={ingredient.culinaryUses} />
                </div>
              </section>
            ) : null}

            <section className="border-t border-leaf-900/10 pt-8">
              <h2 className="font-serif text-xl text-leaf-900 sm:text-2xl">{labels.ingredient.evidence}</h2>
              <div className="mt-3 rounded-2xl border border-leaf-900/[0.08] bg-leaf-50/40 p-5">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-leaf-700">
                  <FlaskConical aria-hidden="true" className="h-4 w-4" />
                  {labels.common.educational}
                </p>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-muted">
                  {ingredient.evidence.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>

            <section className="border-t border-leaf-900/10 pt-8">
              <h2 className="font-serif text-xl text-leaf-900 sm:text-2xl">{labels.ingredient.safety}</h2>
              <div className="mt-3">
                <List items={ingredient.safety} />
              </div>
            </section>

            <section className="border-t border-leaf-900/10 pt-8">
              <h2 className="font-serif text-xl text-leaf-900 sm:text-2xl">{labels.ingredient.allergies}</h2>
              <div className="mt-3">
                <List items={ingredient.allergies} />
              </div>
            </section>

            <section className="border-t border-leaf-900/10 pt-8">
              <h2 className="font-serif text-xl text-leaf-900 sm:text-2xl">{labels.common.sources}</h2>
              <ol className="mt-4 space-y-4">
                {ingredient.references.map((reference) => (
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
                  </li>
                ))}
              </ol>
            </section>

            {recipes.length ? (
              <section className="border-t border-leaf-900/10 pt-8">
                <h2 className="font-serif text-xl text-leaf-900 sm:text-2xl">{labels.ingredient.usedInRecipes}</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {recipes.map((entry) => (
                    <EntryCard key={entry.key} entry={entry} lang={lang} />
                  ))}
                </div>
              </section>
            ) : null}

            {guides.length ? (
              <section className="border-t border-leaf-900/10 pt-8">
                <h2 className="font-serif text-xl text-leaf-900 sm:text-2xl">{labels.ingredient.usedInGuides}</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {guides.map((entry) => (
                    <EntryCard key={entry.key} entry={entry} lang={lang} />
                  ))}
                </div>
              </section>
            ) : null}

            <div className="mt-8">
              <AdSlot lang={lang} slot={`ingredient-${ingredient.key}`} />
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <MedicalSafetyNotice lang={lang} />
            <div className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {labels.common.related}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {ingredient.recipes.slice(0, 4).map((key) => {
                  const entry = entries.find((item) => item.key === key && item.kind === "recipe");
                  if (!entry) return null;
                  return (
                    <li key={key}>
                      <a href={`/${lang}/recipes/${entry.slug}`} className="text-leaf-700 hover:underline">
                        {entry.title}
                      </a>
                    </li>
                  );
                })}
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

export function ingredientTranslationPath(lang: Lang, key: string): string | undefined {
  const other: Lang = lang === "hi" ? "en" : "hi";
  const translation = getIngredientByKey(other, key);
  return translation ? ingredientPath(other, translation.slug) : undefined;
}
