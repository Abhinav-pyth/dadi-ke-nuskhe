/**
 * Pre-publication validation.
 *
 * Used by scripts/validate-content.ts before every release, and exported so a
 * future admin dashboard can block publication of incomplete or unsafe pages.
 */
import type {
  CategoryEntry,
  CollectionEntry,
  ContentStatus,
  GuideEntry,
  ImageRef,
  IngredientEntry,
  Lang,
  RecipeEntry,
  Reference,
  ReviewStatus,
} from "./types";

export interface Issue {
  level: "error" | "warning";
  item: string;
  message: string;
}

const PUBLISHED: ContentStatus = "published";

function checkReference(ref: Reference, item: string, issues: Issue[]) {
  if (!ref.title?.trim()) issues.push({ level: "error", item, message: "reference without title" });
  if (!ref.publisher?.trim())
    issues.push({ level: "error", item, message: `reference without publisher: ${ref.title}` });
  if (!/^https:\/\//.test(ref.url ?? ""))
    issues.push({ level: "error", item, message: `reference is not https: ${ref.url}` });
  if (!ref.accessedDate)
    issues.push({ level: "error", item, message: `reference without access date: ${ref.url}` });
  if (!ref.supports?.trim())
    issues.push({ level: "error", item, message: `reference without supported claim: ${ref.url}` });
}

interface CommonInput {
  key: string;
  slug: string;
  lang: Lang;
  seoTitle: string;
  metaDescription: string;
  references: Reference[];
  status: ContentStatus;
  reviewStatus: ReviewStatus;
  publishedAt: string;
  updatedAt: string;
  image?: ImageRef;
  medicalReviewer?: { name: string; role: string } | null;
}

function checkCommon(input: CommonInput, label: string, issues: Issue[]) {
  const name = `${input.lang}:${label}`;

  if (!input.seoTitle?.trim()) issues.push({ level: "error", item: name, message: "missing seoTitle" });
  if (input.seoTitle && input.seoTitle.length > 65)
    issues.push({ level: "warning", item: name, message: `seoTitle is ${input.seoTitle.length} chars (>65)` });
  if (!input.metaDescription?.trim())
    issues.push({ level: "error", item: name, message: "missing metaDescription" });
  if (
    input.metaDescription &&
    (input.metaDescription.length < 70 || input.metaDescription.length > 165)
  )
    issues.push({
      level: "warning",
      item: name,
      message: `metaDescription is ${input.metaDescription.length} chars (aim 70–165)`,
    });

  // Optional social card: absent means the page uses DEFAULT_OG_IMAGE, which is
  // valid. Present means it must be a local file declared at its real size.
  if (input.image) {
    if (!input.image.url?.startsWith("/"))
      issues.push({ level: "error", item: name, message: `image url must be a site path: ${input.image.url}` });
    if (!input.image.alt?.trim())
      issues.push({ level: "error", item: name, message: "image without alt text" });
    if (!(input.image.width > 0 && input.image.height > 0))
      issues.push({ level: "error", item: name, message: "image without positive width and height" });
  }

  if (input.references.length === 0)
    issues.push({ level: "error", item: name, message: "no references" });
  input.references.forEach((ref) => checkReference(ref, name, issues));

  if (input.reviewStatus === "approved") {
    if (!input.medicalReviewer?.name)
      issues.push({
        level: "error",
        item: name,
        message: "reviewStatus=approved without a real named reviewer",
      });
    if (!input.medicalReviewer?.role)
      issues.push({ level: "error", item: name, message: "reviewer without role" });
  }

  if (input.medicalReviewer && input.reviewStatus !== "approved") {
    issues.push({
      level: "error",
      item: name,
      message: "reviewer recorded but reviewStatus is not approved",
    });
  }

  if (input.status === PUBLISHED) {
    if (!input.publishedAt) issues.push({ level: "error", item: name, message: "published without publishedAt" });
    if (!input.updatedAt) issues.push({ level: "error", item: name, message: "published without updatedAt" });
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.publishedAt))
    issues.push({ level: "error", item: name, message: "publishedAt must be YYYY-MM-DD" });
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.updatedAt))
    issues.push({ level: "error", item: name, message: "updatedAt must be YYYY-MM-DD" });
}

export function validateRecipes(
  recipes: RecipeEntry[],
  issues: Issue[] = [],
): Issue[] {
  for (const recipe of recipes) {
    const name = `${recipe.lang}:${recipe.slug}`;
    checkCommon(recipe, recipe.slug, issues);

    if (recipe.ingredients.length < 4)
      issues.push({ level: "error", item: name, message: "recipe needs at least four ingredients" });
    if (recipe.steps.length < 3)
      issues.push({ level: "error", item: name, message: "recipe needs at least three steps" });
    if (recipe.servings <= 0)
      issues.push({ level: "error", item: name, message: "servings must be greater than zero" });
    if (recipe.prepMinutes < 0 || recipe.cookMinutes < 0)
      issues.push({ level: "error", item: name, message: "times cannot be negative" });
    if (!recipe.storage.length)
      issues.push({ level: "error", item: name, message: "missing storage guidance" });
    if (!recipe.allergens.length)
      issues.push({ level: "error", item: name, message: "missing allergen information" });
    if (!recipe.tips.length) issues.push({ level: "warning", item: name, message: "no preparation tips" });
    if (!recipe.mistakes.length)
      issues.push({ level: "warning", item: name, message: "no common-mistakes section" });
    if (!recipe.faqs.length) issues.push({ level: "warning", item: name, message: "no FAQs" });
    if (recipe.categories.length === 0)
      issues.push({ level: "error", item: name, message: "recipe has no category" });

    // Scaled quantities must be numeric; text-only amounts are fine but must
    // at least carry a unit or a note so the calculator can skip them safely.
    for (const ingredient of recipe.ingredients) {
      if (ingredient.quantity !== null && !(ingredient.quantity > 0))
        issues.push({ level: "error", item: name, message: `invalid quantity for ${ingredient.item}` });
      if (ingredient.quantity === null && !ingredient.unit && !ingredient.note)
        issues.push({
          level: "warning",
          item: name,
          message: `non-scalable ingredient without unit or note: ${ingredient.item}`,
        });
    }
  }
  return issues;
}

export function validateGuides(guides: GuideEntry[], issues: Issue[] = []): Issue[] {
  for (const guide of guides) {
    const name = `${guide.lang}:${guide.slug}`;
    checkCommon(guide, guide.slug, issues);

    if (!guide.intro.length) issues.push({ level: "error", item: name, message: "missing intro" });
    if (!guide.whatIs.length) issues.push({ level: "error", item: name, message: "missing whatIs" });
    if (!guide.evidence.length) issues.push({ level: "error", item: name, message: "missing evidence" });
    if (!guide.safety.length) issues.push({ level: "error", item: name, message: "missing safety notes" });
    if (!guide.whoShouldAsk.length)
      issues.push({ level: "error", item: name, message: "missing who-should-ask-a-professional" });
    if (guide.faqs.length < 2)
      issues.push({ level: "warning", item: name, message: "fewer than two FAQs" });
    if (guide.categories.length === 0)
      issues.push({ level: "error", item: name, message: "guide has no category" });

    if (guide.kind === "remedy") {
      if (!guide.homeRemedies?.length)
        issues.push({ level: "error", item: name, message: "remedy guide without preparations" });
      if (!guide.seeDoctor?.length)
        issues.push({ level: "error", item: name, message: "remedy guide without when-to-see-a-doctor" });
      if (!guide.symptoms?.length)
        issues.push({ level: "warning", item: name, message: "remedy guide without symptoms" });
    }

    if (guide.kind === "beauty" || guide.kind === "hair-care") {
      if (!guide.materials?.length)
        issues.push({ level: "error", item: name, message: "DIY cosmetic without materials" });
      if (!guide.method?.length)
        issues.push({ level: "error", item: name, message: "DIY cosmetic without method" });
      if (!guide.storage?.length)
        issues.push({ level: "error", item: name, message: "DIY cosmetic without storage guidance" });
      const hasPatchTest = guide.safety.some((note) => /patch|पैच/i.test(note));
      if (!hasPatchTest)
        issues.push({
          level: "error",
          item: name,
          message: "DIY cosmetic without a patch-test instruction",
        });
    }
  }
  return issues;
}

export function validateIngredients(
  ingredients: IngredientEntry[],
  issues: Issue[] = [],
): Issue[] {
  for (const ingredient of ingredients) {
    const name = `${ingredient.lang}:${ingredient.slug}`;
    checkCommon(ingredient, ingredient.slug, issues);
    if (!ingredient.description.length)
      issues.push({ level: "error", item: name, message: "missing description" });
    if (!ingredient.traditionalUses.length)
      issues.push({ level: "error", item: name, message: "missing traditional uses" });
    if (!ingredient.evidence.length)
      issues.push({ level: "warning", item: name, message: "missing evidence note" });
    if (!ingredient.safety.length) issues.push({ level: "error", item: name, message: "missing safety notes" });
    if (!ingredient.allergies.length)
      issues.push({ level: "error", item: name, message: "missing allergy information" });
  }
  return issues;
}

export function validateCategories(
  categories: CategoryEntry[],
  countFor: (key: string) => number,
  issues: Issue[] = [],
): Issue[] {
  for (const category of categories) {
    if (!category.sections.length)
      issues.push({ level: "error", item: `${category.lang}:${category.slug}`, message: "category without sections" });
    const count = countFor(category.key);
    if (count === 0)
      issues.push({
        level: "error",
        item: `${category.lang}:${category.slug}`,
        message: "category has no published pages",
      });
    else if (count === 1)
      issues.push({
        level: "warning",
        item: `${category.lang}:${category.slug}`,
        message: "category has one page and will be served noindex",
      });
  }
  return issues;
}

export function validateCollections(
  collections: CollectionEntry[],
  entryExists: (key: string) => boolean,
  issues: Issue[] = [],
): Issue[] {
  for (const collection of collections) {
    const name = `${collection.lang}:${collection.slug}`;
    if (collection.entryKeys.length < 3)
      issues.push({ level: "warning", item: name, message: "collection curated with fewer than three entries" });
    for (const key of collection.entryKeys) {
      if (!entryExists(key))
        issues.push({ level: "error", item: name, message: `collection references unknown entry: ${key}` });
    }
  }
  return issues;
}
