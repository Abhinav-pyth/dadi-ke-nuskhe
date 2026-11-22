/**
 * Local search over all content types. No external API: the index is generated
 * from the same typed content that renders the pages.
 */
import {
  getAllEntries,
  getCategories,
  getCollections,
  getIngredients,
} from "./entries";
import { getSection } from "./sections";
import type { Lang, SearchEntry } from "./types";

/* -------------------------------------------------------------------------- */
/* Normalisation                                                              */
/* -------------------------------------------------------------------------- */

export function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFC")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/[़ऺऻ]/g, "")
    .replace(/[।.,;:!?"'()[\]{}\-–—_/\\|@#$%^&*+=~`<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Rough Latin transliteration so "laddu" can match "लड्डू". */
const DEVANAGARI_LATIN: Record<string, string> = {
  "अ": "a", "आ": "aa", "इ": "i", "ई": "ee", "उ": "u", "ऊ": "oo", "ए": "e", "ऐ": "ai", "ओ": "o", "औ": "au",
  "क": "k", "ख": "kh", "ग": "g", "घ": "gh", "ङ": "n", "च": "ch", "छ": "chh", "ज": "j", "झ": "jh",
  "ट": "t", "ठ": "th", "ड": "d", "ढ": "dh", "ण": "n", "त": "t", "थ": "th", "द": "d", "ध": "dh", "न": "n",
  "प": "p", "फ": "ph", "ब": "b", "भ": "bh", "म": "m", "य": "y", "र": "r", "ल": "l", "व": "v",
  "श": "sh", "ष": "sh", "स": "s", "ह": "h", "ळ": "l", "ड़": "r", "ढ़": "rh", "ज़": "z", "फ़": "f", "क़": "q",
  "ा": "a", "ि": "i", "ी": "i", "ु": "u", "ू": "u", "े": "e", "ै": "ai", "ो": "o", "ौ": "au",
  "ं": "n", "ँ": "n", "ः": "h", "्": "",
};

export function transliterate(input: string): string {
  return input
    .split("")
    .map((char) => DEVANAGARI_LATIN[char] ?? char)
    .join("");
}

/** Symmetric spelling variants Indian users actually type. */
const ALIASES: [string, string[]][] = [
  ["laddu", ["ladoo", "ladu", "लड्डू", "लड्डू के"]],
  ["laddoo", ["laddu", "ladoo"]],
  ["halwa", ["halva", "halwaa", "हलवा"]],
  ["kabz", ["kabj", "qabz", "constipation"]],
  ["gas", ["gases", "flatulence", "pet gas"]],
  ["acidity", ["acid", "reflux", "heartburn"]],
  ["dandruff", ["rusi", "roosi", "flakes"]],
  ["khansi", ["khasi", "cough"]],
  ["sardi", ["cold", "zukam", "jukam"]],
  ["sirdard", ["headache", "sar dard"]],
  ["adrak", ["ginger", "adhrak"]],
  ["haldi", ["turmeric", "halad"]],
  ["tulsi", ["basil", "tulasi"]],
  ["shahad", ["honey", "shehad"]],
  ["ajwain", ["carom", "ajvain"]],
  ["jeera", ["cumin", "jira"]],
  ["saunf", ["fennel", "sonf"]],
  ["pudina", ["mint", "peppermint"]],
  ["amla", ["amalaki", "indian gooseberry", "आंवला"]],
  ["methi", ["fenugreek"]],
  ["gond", ["edible gum", "gum", "गोंद"]],
  ["ghee", ["ghi", "घी"]],
  ["paneer", ["panir", "पनीर"]],
  ["besan", ["gram flour", "बेसन"]],
  ["chai", ["tea", "चाय"]],
  ["masala", ["spice", "मसाला"]],
  ["tel", ["oil", "तेल"]],
  ["baal", ["hair", "बाल"]],
  ["twacha", ["skin", "त्वचा"]],
  ["thand", ["winter", "sardi", "ठंड"]],
  ["garmi", ["summer", "गर्मी"]],
];

function aliasTerms(term: string): string[] {
  const out = [term];
  for (const [key, variants] of ALIASES) {
    if (term.includes(key) || variants.some((variant) => term.includes(variant))) {
      out.push(key, ...variants);
    }
  }
  return Array.from(new Set(out));
}

/* -------------------------------------------------------------------------- */
/* Index                                                                      */
/* -------------------------------------------------------------------------- */

export function buildSearchIndex(lang: Lang): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const entry of getAllEntries(lang)) {
    const section = getSection(entry.section);
    const categoryName = entry.categories
      .map((key) => getCategories(lang).find((category) => category.key === key)?.name)
      .filter(Boolean)[0];

    entries.push({
      type: entry.kind === "recipe" ? "recipe" : "guide",
      key: entry.key,
      lang,
      title: entry.title,
      href: `/${lang}/${section.slug[lang]}/${entry.slug}`,
      description: entry.summary,
      section: entry.section,
      sectionName: section.name[lang],
      categoryName,
      tags: entry.tags,
    });
  }

  for (const ingredient of getIngredients(lang)) {
    entries.push({
      type: "ingredient",
      key: ingredient.key,
      lang,
      title: ingredient.name,
      href: `/${lang}/${lang === "hi" ? "samagri" : "ingredients"}/${ingredient.slug}`,
      description: ingredient.summary,
      tags: [],
    });
  }

  for (const category of getCategories(lang)) {
    entries.push({
      type: "category",
      key: category.key,
      lang,
      title: category.name,
      href: `/${lang}/category/${category.slug}`,
      description: category.tagline,
      tags: category.tags,
    });
  }

  for (const collection of getCollections(lang)) {
    entries.push({
      type: "collection",
      key: collection.key,
      lang,
      title: collection.title,
      href: `/${lang}/${lang === "hi" ? "sangrah" : "collections"}/${collection.slug}`,
      description: collection.intro[0] ?? "",
      tags: [collection.season],
    });
  }

  return entries;
}

function haystack(entry: SearchEntry) {
  return normalize(
    [entry.title, entry.description, entry.key, entry.sectionName ?? "", entry.categoryName ?? "", ...entry.tags].join(" "),
  );
}

/* -------------------------------------------------------------------------- */
/* Query                                                                      */
/* -------------------------------------------------------------------------- */

export interface SearchResult extends SearchEntry {
  score: number;
}

export interface SearchOptions {
  type?: "recipe" | "guide" | "ingredient" | "category" | "collection";
  tag?: string;
}

export function searchEntries(
  entries: SearchEntry[],
  query: string,
  limit = 20,
  options: SearchOptions = {},
): SearchResult[] {
  const q = normalize(query);
  if (q.length === 0) return [];

  const tokens = q.split(" ").filter(Boolean);
  const expanded = Array.from(new Set(tokens.flatMap(aliasTerms)));
  const latinQuery = transliterate(q);
  const results: SearchResult[] = [];

  for (const entry of entries) {
    if (options.type && entry.type !== options.type) continue;
    if (options.tag && !entry.tags.includes(options.tag)) continue;

    const title = normalize(entry.title);
    const keywords = normalize(entry.tags.join(" "));
    const body = haystack(entry);
    const latinTitle = transliterate(title);
    const latinBody = transliterate(body);

    let score = 0;
    if (title === q) score += 120;
    if (title.startsWith(q)) score += 70;
    if (title.includes(q)) score += 50;
    if (latinTitle.includes(latinQuery)) score += 30;

    for (const token of expanded) {
      if (token.length < 2) continue;
      if (title.includes(token)) score += 16;
      if (keywords.includes(token)) score += 9;
      if (body.includes(token)) score += 4;
    }

    if (latinBody.includes(latinQuery)) score += 10;
    if (entry.type === "recipe") score += 3;

    if (score > 0) results.push({ ...entry, score });
  }

  return results.sort((a, b) => b.score - a.score).slice(0, limit);
}

/** Fill a search page that has no query with genuinely published pages. */
export function popularEntries(index: SearchEntry[], limit = 8): SearchEntry[] {
  return index.filter((entry) => entry.type === "recipe" || entry.type === "guide").slice(0, limit);
}
