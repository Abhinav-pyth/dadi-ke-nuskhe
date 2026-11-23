/**
 * Search helpers for the Jan Aushadhi (PMBJP) medicine price list.
 *
 * The catalogue itself lives in content/janaushadhi/products.ts and is copied
 * verbatim from the official PMBI product list. Nothing here estimates, rounds
 * or invents a price: every MRP shown comes from that file.
 */
import {
  JANAUSHADHI_PRODUCTS,
  type JanaushadhiProduct,
} from "@/content/janaushadhi/products";

import { normalize } from "./search";

export type { JanaushadhiProduct };

export const JANAUSHADHI_INFO = {
  scheme: {
    hi: "प्रधानमंत्री भारतीय जनऔषधि परियोजना (PMBJP)",
    en: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)",
  },
  /** Official product & MRP list this page is built from. */
  listUrl: "https://janaushadhi.gov.in/product-portfolio/product-view-list",
  homeUrl: "https://janaushadhi.gov.in/",
  accessedDate: "2026-11-23",
  total: JANAUSHADHI_PRODUCTS.length,
} as const;

/** Longest list we render for one search; the real match count is shown too. */
export const RESULT_LIMIT = 60;

/* -------------------------------------------------------------------------- */
/* Composition ("formula") extraction                                         */
/* -------------------------------------------------------------------------- */

/**
 * Dosage-form and pharmacopoeia words are stripped so that only the active
 * ingredients remain. This is text cleaning, not a chemical interpretation:
 * the official generic name stays visible next to it on every card.
 */
const STRIP = [
  /\bw\s*\/\s*[wv]\b/gi,
  /\b(?:IP|BP|USP|JP)\b/g,
  /\b(?:tablets?|capsules?|injections?|syrups?|suspensions?|ointments?|creams?|gels?|lotions?|powders?|drops?|solutions?|sachets?|granules?|suppositor(?:y|ies)|patches?|sprays?|mouthwash|inhalers?|kits?|oral|prolonged|sustained|release|effervescent|dispersible|chewable|extended|gastro-?resistant|gastro-resistant|enteric|film|coated|sugar|free|forte|suspension)\b/gi,
];

function tidy(part: string) {
  return part
    .replace(/\s+/g, " ")
    .replace(/(\d)\s*(mg|ml|mcg|gm|kg|iu|%)\b/gi, "$1 $2")
    .trim();
}

/** Active ingredients as printed in the official generic name. */
export function formulaParts(name: string): string[] {
  let text = name.replace(/\((?:[^()]|\([^()]*\))*\)/g, " ");
  for (const pattern of STRIP) text = text.replace(pattern, " ");

  return text
    .split(/\s*(?:,|;|\+|&|\band\b)\s*/i)
    .map(tidy)
    .filter((part) => part.length > 2 && /[a-z]/i.test(part));
}

export function formulaLabel(name: string): string {
  const parts = formulaParts(name);
  return parts.length ? parts.join(" + ") : name;
}

export function formatMrp(mrp: number) {
  return mrp > 0 ? `₹${mrp.toFixed(2)}` : null;
}

/* -------------------------------------------------------------------------- */
/* Index                                                                      */
/* -------------------------------------------------------------------------- */

interface IndexedProduct {
  product: JanaushadhiProduct;
  formula: string[];
  /** Normalised text used for matching, including composition words. */
  haystack: string;
}

const INDEX: IndexedProduct[] = JANAUSHADHI_PRODUCTS.map((product) => {
  const formula = formulaParts(product.name);
  return {
    product,
    formula,
    // Leading space lets a token test match a word at the very start.
    haystack: ` ${normalize([
      product.name,
      product.group,
      String(product.code),
      ...formula,
    ].join(" "))}`,
  };
});

export interface JanaushadhiGroup {
  name: string;
  count: number;
}

let groupCache: JanaushadhiGroup[] | null = null;

export function janaushadhiGroups(): JanaushadhiGroup[] {
  if (groupCache) return groupCache;
  const counts = new Map<string, number>();
  for (const item of JANAUSHADHI_PRODUCTS) {
    counts.set(item.group, (counts.get(item.group) ?? 0) + 1);
  }
  groupCache = [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return groupCache;
}

export interface JanaushadhiMatch {
  product: JanaushadhiProduct;
  formula: string[];
}

export interface JanaushadhiSearchResult {
  matches: JanaushadhiMatch[];
  /** Total matches before the display limit is applied. */
  total: number;
  /** Products in the selected therapeutic group, regardless of the query. */
  groupTotal: number;
}

/**
 * A token matches at the start of a word, so "ors" does not match "Torsemide".
 * Longer fragments may match mid-word, which is what partial typing needs.
 */
function hasToken(haystack: string, token: string) {
  return haystack.includes(` ${token}`) || (token.length >= 5 && haystack.includes(token));
}

const SCORED = (query: string, item: IndexedProduct, grouped: boolean) => {
  const q = normalize(query);
  if (!q) return 0;

  const name = normalize(item.product.name);
  const formula = normalize(item.formula.join(" "));

  let score = 0;
  if (name === q) score += 140;
  else if (name.startsWith(q)) score += 90;
  else if (name.includes(q)) score += 60;
  if (formula === q) score += 80;
  else if (formula.startsWith(q)) score += 50;
  else if (formula.includes(q)) score += 30;
  if (item.haystack.includes(q)) score += 10;

  const tokens = q.split(" ").filter((token) => token.length > 1);
  for (const token of tokens) {
    if (hasToken(` ${name}`, token)) score += 8;
    else if (hasToken(` ${formula}`, token)) score += 5;
    else if (hasToken(item.haystack, token)) score += 2;
  }

  return grouped ? score + 1 : score;
};

/**
 * Spelling differences that Indian labels actually use, so a reader typing the
 * international spelling is not told the medicine is missing.
 */
const SPELLING_FIXES: [RegExp, string][] = [
  [/\bamoxicillin\b/g, "amoxycillin"],
  [/\bacetaminophen\b/g, "paracetamol"],
  [/\bacetylsalicylic acid\b/g, "aspirin"],
];

function canonicalQuery(input: string) {
  return SPELLING_FIXES.reduce(
    (text, [pattern, replacement]) => text.replace(pattern, replacement),
    normalize(input),
  );
}

/**
 * Every token of the query must appear somewhere in the name, the composition
 * or the therapeutic group, so "paracetamol 325" narrows rather than widens.
 */
export function searchJanaushadhi(
  query: string,
  { group, limit = RESULT_LIMIT }: { group?: string; limit?: number } = {},
): JanaushadhiSearchResult {
  const q = canonicalQuery(query);
  const tokens = q.split(" ").filter((token) => token.length > 1);

  const inGroup = group
    ? INDEX.filter((item) => item.product.group === group)
    : INDEX;

  if (!tokens.length && !group) {
    return {
      matches: INDEX.slice(0, limit).map((item) => ({
        product: item.product,
        formula: item.formula,
      })),
      total: INDEX.length,
      groupTotal: INDEX.length,
    };
  }

  const scored: { item: IndexedProduct; score: number }[] = [];
  for (const item of inGroup) {
    if (tokens.length && !tokens.every((token) => hasToken(item.haystack, token))) continue;
    const score = SCORED(q, item, Boolean(group));
    if (tokens.length && score <= 0) continue;
    scored.push({ item, score });
  }

  scored.sort(
    (a, b) =>
      b.score - a.score ||
      a.item.product.name.length - b.item.product.name.length ||
      a.item.product.code - b.item.product.code,
  );

  return {
    matches: scored.slice(0, limit).map(({ item }) => ({
      product: item.product,
      formula: item.formula,
    })),
    total: scored.length,
    groupTotal: inGroup.length,
  };
}

/** Compositions readers ask about most often, verified against the list. */
export const JANAUSHADHI_EXAMPLES = [
  "Paracetamol",
  "Cetirizine",
  "Pantoprazole",
  "Metformin",
  "Amoxicillin",
  "Ibuprofen",
  "Vitamin D3",
  "Azithromycin",
] as const;
