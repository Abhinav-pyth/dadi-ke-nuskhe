import { SITE, SITE_URL } from "./site";
import type { Lang, RecipeEntry } from "./types";

type JsonLd = Record<string, unknown>;

export function websiteSchema(lang: Lang): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE.name[lang],
    alternateName: SITE.name[lang === "hi" ? "en" : "hi"],
    url: `${SITE_URL}/${lang}`,
    inLanguage: lang === "hi" ? "hi-IN" : "en-IN",
    description: SITE.description[lang],
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/${lang}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema(lang: Lang): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name[lang],
    url: `${SITE_URL}/${lang}`,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` },
    description: SITE.description[lang],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

interface ArticleSchemaInput {
  lang: Lang;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt: string;
  section?: string;
  /** Site path of the article's social card; omitted when none is declared. */
  image?: string;
  keywords?: string[];
  reviewer?: { name: string; role: string } | null;
}

/**
 * Deliberately conservative: no ratings, no review counts, no invented
 * authors, and `reviewedBy` only when a real reviewer is recorded.
 */
export function articleSchema(input: ArticleSchemaInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    isAccessibleForFree: true,
    headline: input.title,
    description: input.description,
    inLanguage: input.lang === "hi" ? "hi-IN" : "en-IN",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${input.url}` },
    url: `${SITE_URL}${input.url}`,
    datePublished: input.publishedAt,
    dateModified: input.updatedAt,
    ...(input.image ? { image: [`${SITE_URL}${input.image}`] } : {}),
    articleSection: input.section,
    keywords: input.keywords?.join(", "),
    author: { "@type": "Organization", name: SITE.name[input.lang] },
    publisher: { "@type": "Organization", name: SITE.name[input.lang], url: `${SITE_URL}/${input.lang}` },
    ...(input.reviewer
      ? { reviewedBy: { "@type": "Person", name: input.reviewer.name, jobTitle: input.reviewer.role } }
      : {}),
  };
}

/**
 * Recipe structured data.
 *
 * Only fields we actually hold are emitted: no aggregateRating, no invented
 * nutrition object, no fabricated author. `author` is the publishing
 * organization, which is accurate for our editorial byline.
 */
export function recipeSchema(input: {
  lang: Lang;
  recipe: RecipeEntry;
  url: string;
  sectionName: string;
  imageUrl: string;
}): JsonLd {
  const { recipe, lang, url } = input;
  const iso = (minutes: number) => `PT${Math.max(1, Math.round(minutes))}M`;

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.metaDescription,
    inLanguage: lang === "hi" ? "hi-IN" : "en-IN",
    url: `${SITE_URL}${url}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${url}` },
    image: [`${SITE_URL}${input.imageUrl}`],
    author: { "@type": "Organization", name: SITE.name[lang] },
    datePublished: recipe.publishedAt,
    dateModified: recipe.updatedAt,
    recipeCategory: input.sectionName,
    recipeCuisine: recipe.cuisine,
    keywords: recipe.keywords.join(", "),
    recipeYield: String(recipe.servings),
    prepTime: iso(recipe.prepMinutes),
    cookTime: iso(recipe.cookMinutes),
    totalTime: iso(recipe.prepMinutes + recipe.cookMinutes),
    recipeIngredient: recipe.ingredients.map((ingredient) =>
      [ingredient.quantity ?? "", ingredient.unit, ingredient.item, ingredient.note ? `(${ingredient.note})` : ""]
        .filter(Boolean)
        .join(" ")
        .trim(),
    ),
    recipeInstructions: recipe.steps.map((step) => ({
      "@type": "HowToStep",
      text: step.text,
    })),
  };
}

export function collectionPageSchema(input: {
  lang: Lang;
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: `${SITE_URL}${input.url}`,
    inLanguage: input.lang === "hi" ? "hi-IN" : "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: input.items.length,
      itemListElement: input.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${SITE_URL}${item.url}`,
      })),
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
