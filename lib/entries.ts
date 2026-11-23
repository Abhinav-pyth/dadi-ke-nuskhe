/**
 * Content access layer.
 *
 * The whole site is derived from typed data in `content/`. Templates never
 * import content files directly, so a headless CMS can replace this module
 * without touching any page component.
 */
import { categories as enCategories } from "@/content/en/categories";
import { collections as enCollections } from "@/content/en/collections";
import { guides as enGuides } from "@/content/en/guides";
import { infoPages as enInfoPages } from "@/content/en/info-pages";
import { ingredients as enIngredients } from "@/content/en/ingredients";
import { recipes as enRecipes } from "@/content/en/recipes";
import { categories as hiCategories } from "@/content/hi/categories";
import { collections as hiCollections } from "@/content/hi/collections";
import { guides as hiGuides } from "@/content/hi/guides";
import { infoPages as hiInfoPages } from "@/content/hi/info-pages";
import { ingredients as hiIngredients } from "@/content/hi/ingredients";
import { recipes as hiRecipes } from "@/content/hi/recipes";

import {
  categoriesPath,
  categoryPath,
  collectionPath,
  collectionsPath,
  ingredientPath,
  ingredientsPath,
  infoPath,
  searchPath,
} from "./i18n";
import { SECTIONS, sectionEntryPath, sectionPath } from "./sections";
import type {
  CategoryEntry,
  CollectionEntry,
  Entry,
  GuideEntry,
  InfoPage,
  InfoPageKey,
  IngredientEntry,
  Lang,
  RecipeEntry,
  Reference,
  SectionKey,
} from "./types";

const CONTENT = {
  hi: {
    recipes: hiRecipes,
    guides: hiGuides,
    ingredients: hiIngredients,
    categories: hiCategories,
    collections: hiCollections,
    info: hiInfoPages,
  },
  en: {
    recipes: enRecipes,
    guides: enGuides,
    ingredients: enIngredients,
    categories: enCategories,
    collections: enCollections,
    info: enInfoPages,
  },
} as const;

const isPublished = (item: { status: string }) => item.status === "published";

/* -------------------------------------------------------------------------- */
/* Entries (recipes + guides)                                                 */
/* -------------------------------------------------------------------------- */

export function getAllEntries(lang: Lang): Entry[] {
  return [...CONTENT[lang].recipes, ...CONTENT[lang].guides].filter(isPublished);
}

export function getSectionEntries(lang: Lang, section: SectionKey): Entry[] {
  const entries = getAllEntries(lang).filter((entry) => entry.section === section);
  const featured = entries.filter((entry) => entry.featured);
  return [...featured, ...entries.filter((entry) => !entry.featured)];
}

export function getEntry(lang: Lang, section: SectionKey, slug: string): Entry | undefined {
  return getAllEntries(lang).find((entry) => entry.section === section && entry.slug === slug);
}

export function getEntryByKey(lang: Lang, key: string): Entry | undefined {
  return getAllEntries(lang).find((entry) => entry.key === key);
}

export function getRecipes(lang: Lang): RecipeEntry[] {
  return getAllEntries(lang).filter((entry): entry is RecipeEntry => entry.kind === "recipe");
}

export function getGuides(lang: Lang): GuideEntry[] {
  return getAllEntries(lang).filter((entry): entry is GuideEntry => entry.kind !== "recipe");
}

export function entriesByTag(lang: Lang, section: SectionKey, tag?: string): Entry[] {
  const entries = getSectionEntries(lang, section);
  return tag ? entries.filter((entry) => entry.tags.includes(tag)) : entries;
}

export function tagsForSection(lang: Lang, section: SectionKey): string[] {
  const tags = new Set<string>();
  for (const entry of getSectionEntries(lang, section)) {
    for (const tag of entry.tags) tags.add(tag);
  }
  return [...tags];
}

export function sectionCount(lang: Lang, section: SectionKey): number {
  return getSectionEntries(lang, section).length;
}

/* Slug lists used by generateStaticParams. */

export function entrySlugs(lang: Lang): { section: string; slug: string }[] {
  return getAllEntries(lang).map((entry) => ({
    section: getSectionSlug(lang, entry.section),
    slug: entry.slug,
  }));
}

export function ingredientSlugs(lang: Lang): string[] {
  return getIngredients(lang).map((ingredient) => ingredient.slug);
}

export function categorySlugs(lang: Lang): string[] {
  return getCategories(lang).map((category) => category.slug);
}

export function collectionSlugs(lang: Lang): string[] {
  return getCollections(lang).map((collection) => collection.slug);
}

function getSectionSlug(lang: Lang, key: SectionKey): string {
  return SECTIONS.find((section) => section.key === key)?.slug[lang] ?? key;
}

/** Newest published entries across the whole site. */
export function getRecentEntries(lang: Lang, limit = 4): Entry[] {
  return [...getAllEntries(lang)]
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}

export function getFeaturedBySection(lang: Lang, section: SectionKey, limit = 3): Entry[] {
  return getSectionEntries(lang, section).slice(0, limit);
}

export function relatedEntries(lang: Lang, keys: string[]): Entry[] {
  return keys.map((key) => getEntryByKey(lang, key)).filter(Boolean) as Entry[];
}

/* -------------------------------------------------------------------------- */
/* Ingredients                                                                */
/* -------------------------------------------------------------------------- */

export function getIngredients(lang: Lang): IngredientEntry[] {
  return CONTENT[lang].ingredients.filter(isPublished);
}

export function getIngredient(lang: Lang, slug: string): IngredientEntry | undefined {
  return getIngredients(lang).find((ingredient) => ingredient.slug === slug);
}

export function getIngredientByKey(lang: Lang, key: string): IngredientEntry | undefined {
  return getIngredients(lang).find((ingredient) => ingredient.key === key);
}

export function ingredientsForEntry(lang: Lang, keys: string[]): IngredientEntry[] {
  return keys.map((key) => getIngredientByKey(lang, key)).filter(Boolean) as IngredientEntry[];
}

/** Entries that reference an ingredient, derived from the data on both sides. */
export function entriesUsingIngredient(lang: Lang, key: string): Entry[] {
  return getAllEntries(lang).filter((entry) => entry.ingredientKeys.includes(key));
}

/* -------------------------------------------------------------------------- */
/* Categories                                                                 */
/* -------------------------------------------------------------------------- */

export function getCategories(lang: Lang): CategoryEntry[] {
  return CONTENT[lang].categories;
}

export function getCategory(lang: Lang, slug: string): CategoryEntry | undefined {
  return getCategories(lang).find((category) => category.slug === slug);
}

export function getCategoryByKey(lang: Lang, key: string): CategoryEntry | undefined {
  return getCategories(lang).find((category) => category.key === key);
}

export function entriesForCategory(lang: Lang, key: string): Entry[] {
  return getAllEntries(lang).filter((entry) => entry.categories.includes(key));
}

/** Categories are indexable once they hold at least two original pages. */
export function isCategoryIndexable(lang: Lang, key: string): boolean {
  return entriesForCategory(lang, key).length >= 2;
}

export function categoriesForSection(lang: Lang, section: SectionKey): CategoryEntry[] {
  return getCategories(lang).filter((category) => category.sections.includes(section));
}

/* -------------------------------------------------------------------------- */
/* Collections                                                                */
/* -------------------------------------------------------------------------- */

export function getCollections(lang: Lang): CollectionEntry[] {
  return CONTENT[lang].collections;
}

export function getCollection(lang: Lang, slug: string): CollectionEntry | undefined {
  return getCollections(lang).find((collection) => collection.slug === slug);
}

export function getCollectionByKey(lang: Lang, key: string): CollectionEntry | undefined {
  return getCollections(lang).find((collection) => collection.key === key);
}

export function collectionEntries(lang: Lang, collection: CollectionEntry): Entry[] {
  const entries = collection.entryKeys
    .map((key) => getEntryByKey(lang, key))
    .filter(Boolean) as Entry[];
  // Fall back to a tag match so a collection never renders empty while its
  // curated list is still being written.
  if (entries.length === 0) {
    return getAllEntries(lang).filter((entry) => entry.tags.includes(collection.season));
  }
  return entries;
}

/* -------------------------------------------------------------------------- */
/* Info pages                                                                 */
/* -------------------------------------------------------------------------- */

export function getInfoPage(lang: Lang, key: InfoPageKey): InfoPage | undefined {
  return CONTENT[lang].info.find((page) => page.key === key);
}

export function getInfoPageKeys(lang: Lang): InfoPageKey[] {
  return CONTENT[lang].info.map((page) => page.key);
}

/* -------------------------------------------------------------------------- */
/* Sources                                                                    */
/* -------------------------------------------------------------------------- */

export function getAllReferences(lang: Lang): (Reference & { usedIn: string[] })[] {
  const map = new Map<string, Reference & { usedIn: string[] }>();
  const add = (refs: Reference[], title: string) => {
    for (const ref of refs) {
      const existing = map.get(ref.url);
      if (existing) {
        if (!existing.usedIn.includes(title)) existing.usedIn.push(title);
      } else {
        map.set(ref.url, { ...ref, usedIn: [title] });
      }
    }
  };
  for (const entry of getAllEntries(lang)) add(entry.references, entry.title);
  for (const ingredient of getIngredients(lang)) add(ingredient.references, ingredient.name);
  return [...map.values()].sort((a, b) => a.publisher.localeCompare(b.publisher));
}

/* -------------------------------------------------------------------------- */
/* Translation map (used by the language switcher)                            */
/* -------------------------------------------------------------------------- */

export function getTranslationMap(): Record<string, string> {
  const map: Record<string, string> = {};
  const link = (from: string, to: string) => {
    map[from] = to;
    map[to] = from;
  };

  for (const section of SECTIONS) {
    link(sectionPath("hi", section.key), sectionPath("en", section.key));
  }

  for (const entry of getAllEntries("hi")) {
    const translation = getEntryByKey("en", entry.key);
    if (translation) {
      link(
        sectionEntryPath("hi", entry.section, entry.slug),
        sectionEntryPath("en", translation.section, translation.slug),
      );
    }
  }

  for (const ingredient of getIngredients("hi")) {
    const translation = getIngredientByKey("en", ingredient.key);
    if (translation) link(ingredientPath("hi", ingredient.slug), ingredientPath("en", translation.slug));
  }

  for (const category of getCategories("hi")) {
    const translation = getCategoryByKey("en", category.key);
    if (translation) link(categoryPath("hi", category.slug), categoryPath("en", translation.slug));
  }

  for (const collection of getCollections("hi")) {
    const translation = getCollectionByKey("en", collection.key);
    if (translation) link(collectionPath("hi", collection.slug), collectionPath("en", translation.slug));
  }

  for (const page of getInfoPageKeys("hi")) {
    link(infoPath("hi", page), infoPath("en", page));
  }

  link("/hi", "/en");
  link(categoriesPath("hi"), categoriesPath("en"));
  link(ingredientsPath("hi"), ingredientsPath("en"));
  link(collectionsPath("hi"), collectionsPath("en"));
  link(searchPath("hi"), searchPath("en"));
  return map;
}

/* -------------------------------------------------------------------------- */
/* Sitemap + stats                                                            */
/* -------------------------------------------------------------------------- */

export interface SitemapItem {
  path: string;
  lastModified: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  alternatePath?: string;
}

export function getSitemapItems(lang: Lang): SitemapItem[] {
  const other: Lang = lang === "hi" ? "en" : "hi";
  const items: SitemapItem[] = [];

  items.push({ path: `/${lang}`, lastModified: "2026-11-20", priority: 1, changeFrequency: "weekly", alternatePath: `/${other}` });
  items.push({
    path: categoriesPath(lang),
    lastModified: "2026-11-20",
    priority: 0.6,
    changeFrequency: "monthly",
    alternatePath: categoriesPath(other),
  });
  items.push({
    path: ingredientsPath(lang),
    lastModified: "2026-11-20",
    priority: 0.6,
    changeFrequency: "monthly",
    alternatePath: ingredientsPath(other),
  });
  items.push({
    path: collectionsPath(lang),
    lastModified: "2026-11-20",
    priority: 0.5,
    changeFrequency: "monthly",
    alternatePath: collectionsPath(other),
  });

  for (const section of SECTIONS) {
    items.push({
      path: sectionPath(lang, section.key),
      lastModified: "2026-11-20",
      priority: 0.8,
      changeFrequency: "weekly",
      alternatePath: sectionPath(other, section.key),
    });
  }

  for (const entry of getAllEntries(lang)) {
    const translation = getEntryByKey(other, entry.key);
    items.push({
      path: sectionEntryPath(lang, entry.section, entry.slug),
      lastModified: entry.updatedAt,
      priority: entry.kind === "recipe" ? 0.8 : 0.7,
      changeFrequency: "monthly",
      alternatePath: translation
        ? sectionEntryPath(other, translation.section, translation.slug)
        : undefined,
    });
  }

  for (const category of getCategories(lang)) {
    if (!isCategoryIndexable(lang, category.key)) continue;
    const translation = getCategoryByKey(other, category.key);
    items.push({
      path: categoryPath(lang, category.slug),
      lastModified: "2026-11-20",
      priority: 0.6,
      changeFrequency: "monthly",
      alternatePath: translation ? categoryPath(other, translation.slug) : undefined,
    });
  }

  for (const ingredient of getIngredients(lang)) {
    const translation = getIngredientByKey(other, ingredient.key);
    items.push({
      path: ingredientPath(lang, ingredient.slug),
      lastModified: ingredient.updatedAt,
      priority: 0.5,
      changeFrequency: "monthly",
      alternatePath: translation ? ingredientPath(other, translation.slug) : undefined,
    });
  }

  for (const collection of getCollections(lang)) {
    const translation = getCollectionByKey(other, collection.key);
    items.push({
      path: collectionPath(lang, collection.slug),
      lastModified: "2026-11-20",
      priority: 0.6,
      changeFrequency: "monthly",
      alternatePath: translation ? collectionPath(other, translation.slug) : undefined,
    });
  }

  for (const page of getInfoPageKeys(lang)) {
    items.push({
      path: infoPath(lang, page),
      lastModified: "2026-11-20",
      priority: 0.3,
      changeFrequency: "yearly",
      alternatePath: infoPath(other, page),
    });
  }

  return items;
}

export function getStats(lang: Lang) {
  return {
    entries: getAllEntries(lang).length,
    recipes: getRecipes(lang).length,
    categories: getCategories(lang).length,
    ingredients: getIngredients(lang).length,
    references: getAllReferences(lang).length,
  };
}
