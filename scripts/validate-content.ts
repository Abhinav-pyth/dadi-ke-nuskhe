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
  getIngredients,
} from "../lib/entries";
import {
  validateCategories,
  validateCollections,
  validateGuides,
  validateIngredients,
  validateRecipes,
  type Issue,
} from "../lib/validation";
import type { GuideEntry, Lang, RecipeEntry } from "../lib/types";

const issues: Issue[] = [];
const languages: Lang[] = ["hi", "en"];

for (const lang of languages) {
  const recipes = getAllEntries(lang).filter((entry): entry is RecipeEntry => entry.kind === "recipe");
  const guides = getAllEntries(lang).filter((entry): entry is GuideEntry => entry.kind !== "recipe");

  validateRecipes(recipes, issues);
  validateGuides(guides, issues);
  validateIngredients(getIngredients(lang), issues);
  validateCategories(getCategories(lang), (key) => entriesForCategory(lang, key).length, issues);
  validateCollections(getCollections(lang), (key) => Boolean(getEntryByKey(lang, key)), issues);

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
