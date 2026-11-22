import type { Reference } from "@/lib/types";

/**
 * Shared, verified source registry.
 *
 * Keeping URLs in one place means a moved page is fixed once, and editors
 * cannot accidentally invent a citation. Every reference must state which
 * claim it supports.
 */
const ACCESSED = "2026-11-18";

type Base = Omit<Reference, "supports" | "accessedDate"> & { accessedDate?: string };

export const SOURCES = {
  icmrDiet: {
    title: "Dietary Guidelines for Indians",
    publisher: "ICMR – National Institute of Nutrition",
    url: "https://www.nin.res.in/",
    publishedDate: "2024",
  },
  fssai: {
    title: "Food Safety and Standards Authority of India — Eat Right India",
    publisher: "FSSAI, Government of India",
    url: "https://www.fssai.gov.in/",
  },
  whoDiet: {
    title: "Healthy diet — fact sheet",
    publisher: "World Health Organization",
    url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
    publishedDate: "2024",
  },
  whoFoodSafety: {
    title: "Food safety — fact sheet",
    publisher: "World Health Organization",
    url: "https://www.who.int/news-room/fact-sheets/detail/food-safety",
    publishedDate: "2024",
  },
  nhsFoodStorage: {
    title: "How to store food safely",
    publisher: "NHS",
    url: "https://www.nhs.uk/live-well/eat-well/how-to-store-food-safely/",
  },
  nhsConstipation: {
    title: "Constipation",
    publisher: "NHS",
    url: "https://www.nhs.uk/conditions/constipation/",
  },
  nhsIndigestion: {
    title: "Indigestion",
    publisher: "NHS",
    url: "https://www.nhs.uk/conditions/indigestion/",
  },
  nhsHeartburn: {
    title: "Heartburn and acid reflux",
    publisher: "NHS",
    url: "https://www.nhs.uk/conditions/heartburn-acid-reflux/",
  },
  nhsCold: {
    title: "Common cold",
    publisher: "NHS",
    url: "https://www.nhs.uk/conditions/common-cold/",
  },
  nhsCough: {
    title: "Cough",
    publisher: "NHS",
    url: "https://www.nhs.uk/conditions/cough/",
  },
  nhsSoreThroat: {
    title: "Sore throat",
    publisher: "NHS",
    url: "https://www.nhs.uk/conditions/sore-throat/",
  },
  nhsHeadache: {
    title: "Headaches",
    publisher: "NHS",
    url: "https://www.nhs.uk/conditions/headaches/",
  },
  nhsDandruff: {
    title: "Dandruff",
    publisher: "NHS",
    url: "https://www.nhs.uk/conditions/dandruff/",
  },
  nhsHairLoss: {
    title: "Hair loss",
    publisher: "NHS",
    url: "https://www.nhs.uk/conditions/hair-loss/",
  },
  nhsContactDermatitis: {
    title: "Contact dermatitis",
    publisher: "NHS",
    url: "https://www.nhs.uk/conditions/contact-dermatitis/",
  },
  medlineGas: {
    title: "Gas",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
    url: "https://medlineplus.gov/gas.html",
  },
  medlineIndigestion: {
    title: "Indigestion",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
    url: "https://medlineplus.gov/indigestion.html",
  },
  medlineCold: {
    title: "Common cold",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
    url: "https://medlineplus.gov/commoncold.html",
  },
  medlineUlcers: {
    title: "Canker sores",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
    url: "https://medlineplus.gov/cankersores.html",
  },
  nccihGinger: {
    title: "Ginger — herb at a glance",
    publisher: "National Center for Complementary and Integrative Health",
    url: "https://www.nccih.nih.gov/health/ginger",
  },
  nccihTurmeric: {
    title: "Turmeric — herb at a glance",
    publisher: "National Center for Complementary and Integrative Health",
    url: "https://www.nccih.nih.gov/health/turmeric",
  },
  nccihHerbs: {
    title: "Herbs at a glance",
    publisher: "National Center for Complementary and Integrative Health",
    url: "https://www.nccih.nih.gov/health/herbsataglance",
  },
  ayush: {
    title: "Ministry of Ayush — traditional medicine systems of India",
    publisher: "Ministry of Ayush, Government of India",
    url: "https://ayush.gov.in/",
  },
  fdaCosmetics: {
    title: "Cosmetics safety and ingredients",
    publisher: "U.S. Food and Drug Administration",
    url: "https://www.fda.gov/cosmetics/cosmetics-safety",
  },
  epaSaferChoice: {
    title: "Safer Choice — cleaning product ingredients",
    publisher: "U.S. Environmental Protection Agency",
    url: "https://www.epa.gov/saferchoice",
  },
  mohfw: {
    title: "Ministry of Health and Family Welfare",
    publisher: "Government of India",
    url: "https://www.mohfw.gov.in/",
  },
} satisfies Record<string, Base>;

export type SourceKey = keyof typeof SOURCES;

/** Build a citation for one specific claim. */
export function ref(key: SourceKey, supports: string): Reference {
  const base = SOURCES[key] as Base;
  return {
    title: base.title,
    publisher: base.publisher,
    url: base.url,
    ...(base.publishedDate ? { publishedDate: base.publishedDate } : {}),
    accessedDate: base.accessedDate ?? ACCESSED,
    supports,
  };
}
