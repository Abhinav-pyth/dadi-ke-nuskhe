/**
 * Validates every content file before publication.
 * Run with: npm run validate:content
 * Exits 1 when any error-severity issue is found.
 */
import {
  entriesForCategory,
  getAllEntries,
  getAllReferences,
  getCategories,
  getCollections,
  getEntryByKey,
  getInfoPage,
  getInfoPageKeys,
  getIngredients,
  isCategoryIndexable,
} from "../lib/entries";
import {
  validateCategories,
  validateCollections,
  validateGuides,
  validateIngredients,
  validateRecipes,
  type Issue,
} from "../lib/validation";
import { t } from "../lib/copy";
import {
  categoriesPath,
  categoryPath,
  collectionPath,
  collectionsPath,
  entryPath,
  ingredientPath,
  ingredientsPath,
  infoPath,
} from "../lib/i18n";
import { SECTIONS, sectionPath } from "../lib/sections";
import { pageTitle } from "../lib/seo";
import type { GuideEntry, Lang, RecipeEntry } from "../lib/types";

const issues: Issue[] = [];
const languages: Lang[] = ["hi", "en"];

interface SeoPage {
  path: string;
  /** The title as rendered, brand suffix included. */
  title: string;
  description: string;
}

/**
 * Every indexable page's title and description, built the same way the routes
 * build them. Home and search pages are left out: search is noindex and the
 * home titles are brand-only, so neither can compete with a content page.
 */
function seoPages(lang: Lang): SeoPage[] {
  const pages: SeoPage[] = [];
  const add = (path: string, title: string, description: string) => {
    pages.push({ path, title: pageTitle(lang, title, path), description });
  };

  for (const entry of getAllEntries(lang))
    add(entryPath(lang, entry.section, entry.slug), entry.seoTitle, entry.metaDescription);

  for (const ingredient of getIngredients(lang))
    add(ingredientPath(lang, ingredient.slug), ingredient.seoTitle, ingredient.metaDescription);

  for (const category of getCategories(lang)) {
    // noindex categories cannot compete for a query, so they are not compared.
    if (!isCategoryIndexable(lang, category.key)) continue;
    add(categoryPath(lang, category.slug), category.seoTitle, category.metaDescription);
  }

  for (const collection of getCollections(lang))
    add(collectionPath(lang, collection.slug), collection.seoTitle, collection.metaDescription);

  for (const key of getInfoPageKeys(lang)) {
    const page = getInfoPage(lang, key);
    if (page) add(infoPath(lang, key), page.seoTitle, page.metaDescription);
  }

  for (const section of SECTIONS)
    add(
      sectionPath(lang, section.key),
      `${section.name[lang]} — ${section.tagline[lang]}`,
      section.intro[lang].slice(0, 158),
    );

  const labels = t(lang).index;
  add(categoriesPath(lang), labels.categoriesTitle, labels.categoriesLead);
  add(ingredientsPath(lang), labels.ingredientsTitle, labels.ingredientsLead);
  add(collectionsPath(lang), labels.collectionsTitle, labels.collectionsLead);

  return pages;
}

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

/**
 * Two pages with the same title or description split the same query between
 * them and neither ranks as well as one would. Exact matches after whitespace
 * and case normalisation are always a mistake, so they fail the build.
 */
function checkDuplicates(lang: Lang, pages: SeoPage[], issues: Issue[]) {
  for (const field of ["title", "description"] as const) {
    const groups = new Map<string, SeoPage[]>();
    for (const page of pages) {
      const key = normalize(page[field]);
      if (!key) continue;
      const group = groups.get(key) ?? [];
      group.push(page);
      groups.set(key, group);
    }
    for (const [value, group] of groups) {
      if (group.length < 2) continue;
      issues.push({
        level: "error",
        item: `${lang}:duplicate-${field}`,
        message: `${group.length} pages share the same ${field}: ${group
          .map((page) => page.path)
          .join(", ")} — "${value}"`,
      });
    }
  }
}

for (const lang of languages) {
  const recipes = getAllEntries(lang).filter((entry): entry is RecipeEntry => entry.kind === "recipe");
  const guides = getAllEntries(lang).filter((entry): entry is GuideEntry => entry.kind !== "recipe");

  validateRecipes(recipes, issues);
  validateGuides(guides, issues);
  validateIngredients(getIngredients(lang), issues);
  validateCategories(getCategories(lang), (key) => entriesForCategory(lang, key).length, issues);
  validateCollections(getCollections(lang), (key) => Boolean(getEntryByKey(lang, key)), issues);
  checkDuplicates(lang, seoPages(lang), issues);

  // Duplicate slugs within a section would silently shadow pages.
  const seen = new Set<string>();
  for (const entry of [...recipes, ...guides]) {
    const id = `${lang}:${entry.section}:${entry.slug}`;
    if (seen.has(id)) issues.push({ level: "error", item: id, message: "duplicate slug in section" });
    seen.add(id);
  }

  // Every entry must have a published translation for reciprocal hreflang.
  const other: Lang = lang === "hi" ? "en" : "hi";
  for (const entry of [...recipes, ...guides]) {
    const translation = getEntryByKey(other, entry.key);
    if (!translation)
      issues.push({
        level: "warning",
        item: `${lang}:${entry.slug}`,
        message: `no ${other} translation for key ${entry.key}`,
      });
  }
}

const errors = issues.filter((issue) => issue.level === "error");
const warnings = issues.filter((issue) => issue.level === "warning");

const stats = (lang: Lang) => ({
  lang,
  entries: getAllEntries(lang).length,
  recipes: getAllEntries(lang).filter((entry) => entry.kind === "recipe").length,
  guides: getAllEntries(lang).filter((entry) => entry.kind !== "recipe").length,
  ingredients: getIngredients(lang).length,
  categories: getCategories(lang).length,
  references: getAllReferences(lang).length,
});

console.log("Content report:", JSON.stringify({ hi: stats("hi"), en: stats("en") }, null, 2));

// Not a content error, but the most damaging SEO misconfiguration there is: an
// unset origin publishes localhost canonical, hreflang and sitemap URLs.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
if (!/^https:\/\//.test(siteUrl)) {
  console.log(
    `\nSEO note: NEXT_PUBLIC_SITE_URL is ${siteUrl ? `"${siteUrl}"` : "unset"}, so canonical, hreflang, og:url and sitemap URLs fall back to http://localhost:3000. Set it to the https production origin before deploying.`,
  );
}

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const warning of warnings) console.log(`  ⚠ ${warning.item}: ${warning.message}`);
}

if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  for (const error of errors) console.error(`  ✖ ${error.item}: ${error.message}`);
  process.exit(1);
}

console.log("\n✔ Content validation passed with no errors.");
