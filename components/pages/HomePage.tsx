import { ArrowRight, BookOpen, CheckCircle2, ChefHat, Snowflake, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AdSlot } from "@/components/AdSlot";
import { CategoryCard } from "@/components/CategoryCard";
import { DadiDadaStrip } from "@/components/DadiDadaStrip";
import { EntryCard } from "@/components/EntryCard";
import { MedicalSafetyNotice } from "@/components/MedicalSafetyNotice";
import { Newsletter } from "@/components/Newsletter";
import { SearchBar } from "@/components/SearchBar";
import { SectionCard } from "@/components/SectionCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import {
  collectionEntries,
  entriesForCategory,
  getCategories,
  getAllEntries,
  getCollectionByKey,
  getCollections,
  getIngredients,
  getRecentEntries,
  getSectionEntries,
  getStats,
} from "@/lib/entries";
import { t } from "@/lib/copy";
import {
  categoryPath,
  collectionPath,
  collectionsPath,
  ingredientPath,
  ingredientsPath,
  searchPath,
} from "@/lib/i18n";
import { SECTIONS, getSection, sectionPath } from "@/lib/sections";
import type { Lang } from "@/lib/types";

const POPULAR_QUERIES: Record<Lang, string[]> = {
  hi: ["गोंद के लड्डू", "सफेद बालों का तेल", "बेसन फेस पैक", "पेट में गैस", "घर पर घी"],
  en: ["gond laddu", "grey hair oil", "besan face pack", "stomach gas", "ghee at home"],
};

export function HomePage({ lang }: { lang: Lang }) {
  const labels = t(lang);
  const stats = getStats(lang);
  const categories = getCategories(lang);
  const collections = getCollections(lang);
  const recipes = getSectionEntries(lang, "recipes");
  const featuredRecipes = recipes.slice(0, 3);
  const remedies = getSectionEntries(lang, "home-remedies");
  const hair = getSectionEntries(lang, "hair-care");
  const beauty = getSectionEntries(lang, "beauty");
  const products = getSectionEntries(lang, "homemade-products");
  const tips = getSectionEntries(lang, "household-tips");
  const recent = getRecentEntries(lang, 4);
  const ingredients = getIngredients(lang).slice(0, 6);
  const winter = getCollectionByKey(lang, "winter-collection");
  const winterEntries = winter ? collectionEntries(lang, winter).slice(0, 3) : [];
  const festival = getCategories(lang).filter((category) => category.tags.includes("festival"));

  const favourites = [
    ...recipes.filter((entry) => entry.featured).slice(0, 2),
    ...getAllEntries(lang).filter((entry) => entry.tags.includes("hair")).slice(0, 2),
  ].slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-leaf-900/[0.06] bg-gradient-to-b from-cream-100/80 via-cream to-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-saffron-200/30 blur-3xl"
        />
        <div className="container-page relative grid gap-10 py-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-20">
          <div>
            <Badge tone="saffron">{labels.hero.eyebrow}</Badge>
            <h1
              className={`mt-5 text-3xl leading-[1.25] text-leaf-900 sm:text-4xl lg:text-[2.8rem] ${
                lang === "hi" ? "font-hindi-serif" : "font-serif"
              }`}
            >
              {labels.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">{labels.hero.lead}</p>

            <div className="mt-7 max-w-xl">
              <SearchBar lang={lang} />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
                {labels.hero.popular}
              </span>
              {POPULAR_QUERIES[lang].map((query) => (
                <Link
                  key={query}
                  href={searchPath(lang, query)}
                  className="rounded-full bg-cream-50 px-3 py-1.5 text-xs font-medium text-leaf-800 ring-1 ring-leaf-900/10 transition-colors hover:bg-leaf-50"
                >
                  {query}
                </Link>
              ))}
            </div>

            <dl className="mt-9 grid max-w-lg grid-cols-3 gap-4 border-t border-leaf-900/10 pt-6">
              {[
                { value: stats.entries, label: labels.hero.statsEntries },
                { value: stats.categories, label: labels.hero.statsCategories },
                { value: stats.ingredients, label: labels.hero.statsIngredients },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="font-serif text-2xl text-leaf-800">{item.value}</dd>
                  <dd className="mt-0.5 text-[11px] uppercase tracking-[0.1em] text-ink-soft">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-cream-300/70 bg-cream-200 shadow-lift">
              <Image
                src="/images/hero-ingredients.jpg"
                alt={
                  lang === "hi"
                    ? "गुड़, तिल, सूखे मेवे, हल्दी और मिट्टी के बर्तन — पारंपरिक भारतीय रसोई"
                    : "Jaggery, sesame, dry fruits, turmeric and clay pots — a traditional Indian kitchen"
                }
                width={1184}
                height={880}
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-leaf-900/10 bg-cream-50/95 p-4 shadow-card backdrop-blur sm:left-6 sm:right-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-saffron-600">
                {labels.home.ingredientsTitle}
              </p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-leaf-900">
                {ingredients.slice(0, 4).map((ingredient) => (
                  <li key={ingredient.key}>
                    <Link
                      href={ingredientPath(lang, ingredient.slug)}
                      className="underline decoration-leaf-300 decoration-1 underline-offset-4 hover:decoration-leaf-600"
                    >
                      {ingredient.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <DadiDadaStrip lang={lang} />

      {/* Sections */}
      <section className="container-page py-16" aria-labelledby="home-sections">
        <SectionHeading
          id="home-sections"
          eyebrow={labels.home.browseEyebrow}
          title={labels.home.sectionsTitle}
          lead={labels.home.sectionsLead}
          action={{ label: labels.nav.categories, href: `/${lang}/categories` }}
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((section) => (
            <SectionCard
              key={section.key}
              sectionKey={section.key}
              lang={lang}
              count={getSectionEntries(lang, section.key).length}
            />
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-leaf-900/[0.06] bg-leaf-50/50">
        <div className="container-page grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[labels.home.trust1, labels.home.trust2, labels.home.trust3, labels.home.trust4].map((point) => (
            <p key={point} className="flex items-start gap-2 text-sm text-leaf-900">
              <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
              {point}
            </p>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-16" aria-labelledby="home-categories">
        <SectionHeading
          id="home-categories"
          eyebrow={labels.nav.categories}
          title={labels.home.browseTitle}
          lead={labels.index.categoriesLead}
          action={{ label: labels.common.viewAll, href: `/${lang}/categories` }}
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
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

      {/* Popular recipes */}
      <section className="border-y border-leaf-900/[0.06] bg-cream-100/60 py-16" aria-labelledby="home-recipes">
        <div className="container-page">
          <SectionHeading
            id="home-recipes"
            eyebrow={labels.home.recipesTitle}
            title={labels.home.recipesTitle}
            lead={labels.home.recipesLead}
            action={{ label: labels.common.viewAll, href: sectionPath(lang, "recipes") }}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredRecipes.map((entry) => (
              <EntryCard key={entry.key} entry={entry} lang={lang} />
            ))}
          </div>
          <div className="mt-8">
            <AdSlot lang={lang} slot="home-recipes" />
          </div>
        </div>
      </section>

      {/* Winter collection */}
      {winter ? (
        <section className="container-page py-16" aria-labelledby="home-winter">
          <SectionHeading
            id="home-winter"
            eyebrow={labels.nav.collections}
            title={labels.home.winterTitle}
            lead={labels.home.winterLead}
            action={{ label: labels.common.viewAll, href: collectionPath(lang, winter.slug) }}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {winterEntries.map((entry) => (
              <div key={entry.key} className="relative">
                <EntryCard entry={entry} lang={lang} />
                <span className="pointer-events-none absolute right-4 top-4 text-saffron-500">
                  <Snowflake aria-hidden="true" className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Hair + beauty */}
      <section className="border-y border-leaf-900/[0.06] bg-cream-100/60 py-16">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div aria-labelledby="home-hair">
            <SectionHeading
              id="home-hair"
              eyebrow={labels.nav.hair}
              title={labels.home.hairTitle}
              lead={labels.home.hairLead}
              action={{ label: labels.common.viewAll, href: sectionPath(lang, "hair-care") }}
            />
            <ul className="mt-6 divide-y divide-leaf-900/10 rounded-2xl border border-leaf-900/[0.07] bg-cream-50">
              {hair.slice(0, 4).map((entry) => (
                <li key={entry.key}>
                  <Link
                    href={`/${lang}/hair-care/${entry.slug}`}
                    className="flex items-baseline justify-between gap-3 px-5 py-4 hover:bg-leaf-50/60"
                  >
                    <span className="text-sm font-medium text-leaf-900">{entry.title}</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-leaf-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div aria-labelledby="home-beauty">
            <SectionHeading
              id="home-beauty"
              eyebrow={labels.nav.beauty}
              title={labels.home.beautyTitle}
              lead={labels.home.beautyLead}
              action={{ label: labels.common.viewAll, href: sectionPath(lang, "beauty") }}
            />
            <ul className="mt-6 divide-y divide-leaf-900/10 rounded-2xl border border-leaf-900/[0.07] bg-cream-50">
              {beauty.slice(0, 4).map((entry) => (
                <li key={entry.key}>
                  <Link
                    href={`/${lang}/beauty/${entry.slug}`}
                    className="flex items-baseline justify-between gap-3 px-5 py-4 hover:bg-leaf-50/60"
                  >
                    <span className="text-sm font-medium text-leaf-900">{entry.title}</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-leaf-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Remedies + products */}
      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div aria-labelledby="home-remedies">
            <SectionHeading
              id="home-remedies"
              eyebrow={labels.nav.remedies}
              title={labels.home.remediesTitle}
              lead={labels.home.remediesLead}
              action={{ label: labels.common.viewAll, href: sectionPath(lang, "home-remedies") }}
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {remedies.slice(0, 4).map((entry) => (
                <EntryCard key={entry.key} entry={entry} lang={lang} />
              ))}
            </div>
          </div>
          <div aria-labelledby="home-products">
            <SectionHeading
              id="home-products"
              eyebrow={labels.nav.homemade}
              title={labels.home.productsTitle}
              lead={labels.home.productsLead}
              action={{ label: labels.common.viewAll, href: sectionPath(lang, "homemade-products") }}
            />
            <div className="mt-6 flex flex-col gap-3">
              {products.slice(0, 4).map((entry) => (
                <Link
                  key={entry.key}
                  href={`/${lang}/homemade-products/${entry.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-leaf-900/[0.07] bg-cream-50 p-5 transition-colors hover:border-leaf-700/25"
                >
                  <span>
                    <span className="block font-serif text-lg leading-snug text-leaf-900">{entry.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-muted">{entry.summary}</span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-leaf-600 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent + favourites */}
      <section className="container-page grid gap-12 pb-16 lg:grid-cols-[1.2fr_1fr]">
        <div aria-labelledby="home-recent">
          <SectionHeading
            id="home-recent"
            eyebrow={labels.home.recentTitle}
            title={labels.home.recentTitle}
            lead={labels.home.recentLead}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {recent.map((entry) => (
              <EntryCard key={entry.key} entry={entry} lang={lang} />
            ))}
          </div>
        </div>

        <div aria-labelledby="home-favourites">
          <SectionHeading
            id="home-favourites"
            eyebrow={labels.home.mostReadTitle}
            title={labels.home.mostReadTitle}
            lead={labels.home.mostReadLead}
          />
          <ol className="mt-6 divide-y divide-leaf-900/10 rounded-2xl border border-leaf-900/[0.07] bg-cream-50">
            {favourites.map((entry, index) => (
              <li key={entry.key}>
                <Link
                  href={`/${lang}/${getSection(entry.section).slug[lang]}/${entry.slug}`}
                  className="flex items-baseline gap-3 px-5 py-4 hover:bg-leaf-50/60"
                >
                  <span className="font-serif text-sm text-saffron-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium leading-snug text-leaf-900">{entry.title}</span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-2xl border border-leaf-900/[0.07] bg-cream-50 p-5">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
              {labels.home.ingredientsTitle}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {ingredients.map((ingredient) => (
                <li key={ingredient.key}>
                  <Link
                    href={ingredientPath(lang, ingredient.slug)}
                    className="inline-block rounded-full bg-leaf-50 px-3 py-1.5 text-xs font-medium text-leaf-800 hover:bg-leaf-100"
                  >
                    {ingredient.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={ingredientsPath(lang)}
                  className="inline-block rounded-full border border-leaf-900/15 px-3 py-1.5 text-xs font-semibold text-leaf-800"
                >
                  {labels.common.viewAll}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Collections + festival */}
      <section className="border-y border-leaf-900/[0.06] bg-cream-100/60 py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div aria-labelledby="home-collections">
            <SectionHeading
              id="home-collections"
              eyebrow={labels.nav.collections}
              title={labels.home.seasonalTitle}
              lead={labels.home.seasonalLead}
              action={{ label: labels.common.viewAll, href: collectionsPath(lang) }}
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {collections.map((collection) => (
                <Link
                  key={collection.key}
                  href={collectionPath(lang, collection.slug)}
                  className="group rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-5 transition-colors hover:border-leaf-700/25"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-saffron-600">
                    {collection.season}
                  </span>
                  <span className="mt-1 block font-serif text-lg leading-snug text-leaf-900">
                    {collection.title}
                  </span>
                  <span className="mt-2 block text-xs leading-relaxed text-ink-muted">
                    {collection.intro[0]}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div aria-labelledby="home-festival">
            <SectionHeading
              id="home-festival"
              eyebrow={labels.home.festivalTitle}
              title={labels.home.festivalTitle}
              lead={labels.home.festivalLead}
            />
            <ul className="mt-6 space-y-2">
              {festival.map((category) => (
                <li key={category.key}>
                  <Link
                    href={categoryPath(lang, category.slug)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-leaf-800 hover:bg-cream-50"
                  >
                    {category.name}
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 text-leaf-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Household tips */}
      <section className="container-page py-16" aria-labelledby="home-tips">
        <SectionHeading
          id="home-tips"
          eyebrow={labels.nav.tips}
          title={labels.nav.tips}
          lead={tips[0]?.summary ?? labels.home.sectionsLead}
          action={{ label: labels.common.viewAll, href: sectionPath(lang, "household-tips") }}
        />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tips.slice(0, 3).map((entry) => (
            <EntryCard key={entry.key} entry={entry} lang={lang} />
          ))}
        </div>
      </section>

      {/* About + safety */}
      <section className="container-page grid gap-8 pb-16 lg:grid-cols-[1.15fr_1fr]">
        <div className="rounded-3xl border border-leaf-900/[0.07] bg-cream-50 p-6 shadow-card sm:p-8">
          <p className="eyebrow">{labels.home.editorialTitle}</p>
          <h2 className="mt-2 font-serif text-2xl text-leaf-900">{labels.home.editorialTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{labels.home.editorialBody}</p>
          <div className="mt-6 space-y-4">
            <MedicalSafetyNotice lang={lang} />
          </div>
          <Link
            href={`/${lang}/editorial-policy`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-700 hover:text-leaf-900"
          >
            {labels.home.aboutCta}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-3xl border border-leaf-900/[0.07] bg-leaf-800 p-6 text-cream-100 sm:p-8">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-saffron-200">
            <BookOpen aria-hidden="true" className="h-4 w-4" />
            {labels.home.aboutTitle}
          </p>
          <h2 className="mt-3 font-serif text-2xl text-cream-50">{labels.home.aboutTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-cream-100/80">{labels.home.aboutBody}</p>
          <Link
            href={`/${lang}/about`}
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-cream-50 px-4 py-2 text-xs font-semibold text-leaf-900 hover:bg-cream-100"
          >
            {labels.nav.about}
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <section className="container-page pb-20">
        <Newsletter lang={lang} />
      </section>
    </>
  );
}
