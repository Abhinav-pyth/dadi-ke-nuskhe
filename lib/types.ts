/**
 * Content model for Dadi Maa Ke Nuskhe.
 *
 * One typed store powers remedies, recipes, homemade products, beauty and
 * household guides, ingredients, categories and seasonal collections. The UI
 * never embeds copy, so the data source can move to a headless CMS later
 * without touching a template.
 */

export type Lang = "hi" | "en";

export type SectionKey =
  | "home-remedies"
  | "recipes"
  | "hair-care"
  | "beauty"
  | "homemade-products"
  | "household-tips";

/**
 * Publishing pipeline:
 * draft → editorial-review → safety-review → approved → published
 *                                    ↘ needs-update → archived
 * Only `published` content is rendered and indexed.
 */
export type ContentStatus =
  | "draft"
  | "editorial-review"
  | "safety-review"
  | "approved"
  | "published"
  | "needs-update"
  | "archived";

/**
 * `approved` may only be set after a real, named reviewer has signed off.
 * Everything else stays `pending` and renders with an explicit
 * "review pending" notice, without reviewer structured data.
 */
export type ReviewStatus = "pending" | "approved";

export type Difficulty = "easy" | "medium" | "advanced";

export interface Reference {
  title: string;
  publisher: string;
  url: string;
  publishedDate?: string;
  /** Date our editorial team accessed the source (ISO date). */
  accessedDate: string;
  /** The specific claim this source supports. */
  supports: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface IngredientItem {
  item: string;
  /** Numeric quantity so the serving calculator can scale it. */
  quantity: number | null;
  unit: string;
  note?: string;
}

export interface Step {
  text: string;
  tip?: string;
}

export interface ImageRef {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface BaseEntry {
  /** Language-independent key, used for translations and relations. */
  key: string;
  slug: string;
  lang: Lang;
  title: string;
  seoTitle: string;
  metaDescription: string;
  summary: string;
  /** Category keys (taxonomy) this entry belongs to. */
  categories: string[];
  /** Free-form discovery tags: winter, sweets, festival, skincare… */
  tags: string[];
  keywords: string[];
  status: ContentStatus;
  reviewStatus: ReviewStatus;
  publishedAt: string;
  updatedAt: string;
  featured?: boolean;
  image?: ImageRef;
  /** Name and role of a real reviewer. Never populated speculatively. */
  medicalReviewer?: { name: string; role: string } | null;
}

export interface RecipeEntry extends BaseEntry {
  kind: "recipe";
  section: "recipes";
  intro: string[];
  cuisine: string;
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  yieldLabel: string;
  difficulty: Difficulty;
  ingredients: IngredientItem[];
  steps: Step[];
  tips: string[];
  mistakes: string[];
  storage: string[];
  substitutions: string[];
  allergens: string[];
  /** Free-text note; never presented as a calculated nutrition panel. */
  nutritionNote?: string;
  safetyNotes: string[];
  faqs: Faq[];
  references: Reference[];
  ingredientKeys: string[];
  /** Entry keys of related recipes/guides. */
  related: string[];
}

export type GuideKind = "remedy" | "hair-care" | "beauty" | "homemade-product" | "household";

export interface TraditionalRemedy {
  name: string;
  ingredientKey?: string;
  preparation: string[];
  evidence: string;
  caution?: string;
}

export interface GuideEntry extends BaseEntry {
  kind: GuideKind;
  section: SectionKey;
  intro: string[];
  /** What the concern is / what the preparation is. */
  whatIs: string[];
  symptoms?: string[];
  causes?: string[];
  homeRemedies?: TraditionalRemedy[];
  materials?: IngredientItem[];
  method?: Step[];
  usage?: string[];
  evidence: string[];
  /** Precautions and things to avoid. */
  safety: string[];
  whoShouldAsk: string[];
  seeDoctor?: string[];
  emergency?: string[];
  storage?: string[];
  faqs: Faq[];
  references: Reference[];
  ingredientKeys: string[];
  related: string[];
}

export interface IngredientEntry {
  kind: "ingredient";
  key: string;
  slug: string;
  lang: Lang;
  name: string;
  alternateName: string;
  botanicalName?: string;
  summary: string;
  seoTitle: string;
  metaDescription: string;
  description: string[];
  traditionalUses: string[];
  culinaryUses: string[];
  evidence: string[];
  safety: string[];
  allergies: string[];
  /** Recipe keys that use this ingredient. */
  recipes: string[];
  /** Guide keys (remedies, hair care, beauty…) that reference it. */
  guides: string[];
  references: Reference[];
  keywords: string[];
  status: ContentStatus;
  reviewStatus: ReviewStatus;
  publishedAt: string;
  updatedAt: string;
}

export interface CategoryEntry {
  key: string;
  slug: string;
  lang: Lang;
  name: string;
  tagline: string;
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  icon: string;
  /** Sections this category draws from. */
  sections: SectionKey[];
  /** Tag filter applied when listing entries, e.g. "winter". */
  tags: string[];
  faqs: Faq[];
  related: string[];
}

export interface CollectionEntry {
  key: string;
  slug: string;
  lang: Lang;
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  season: "winter" | "summer" | "monsoon";
  icon: string;
  /** Explicit, editorially ordered entry keys. */
  entryKeys: string[];
  relatedCategories: string[];
}

export type InfoPageKey =
  | "about"
  | "contact"
  | "editorial-policy"
  | "medical-disclaimer"
  | "food-safety-policy"
  | "privacy-policy"
  | "terms"
  | "sources";

export interface InfoSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface InfoPage {
  key: InfoPageKey;
  lang: Lang;
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  updatedAt: string;
  sections: InfoSection[];
}

export type Entry = RecipeEntry | GuideEntry;

export interface SearchEntry {
  type: "recipe" | "guide" | "ingredient" | "category" | "collection";
  key: string;
  lang: Lang;
  title: string;
  /** Full path so suggestions can link directly. */
  href: string;
  description: string;
  section?: SectionKey;
  sectionName?: string;
  categoryName?: string;
  tags: string[];
}
