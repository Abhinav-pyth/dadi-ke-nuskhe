import type { CollectionEntry } from "@/lib/types";

/** Editorially ordered seasonal collections. */
export const collections: CollectionEntry[] = [
  {
    key: "winter-collection",
    slug: "winter-collection",
    lang: "en",
    title: "The Winter Table",
    seoTitle: "Winter Collection — Laddus, Halwa and Warmth",
    metaDescription:
      "A curated winter collection: gond and methi laddus, til gud, gajar halwa and the oils and remedies that suit the season.",
    intro: [
      "Winter food in north India is built around warmth: ghee, jaggery, nuts and slow cooking. This collection gathers the recipes and routines we make every year.",
      "Start with a laddu, add a halwa for a cold evening, and keep the hair and skin routines simple.",
    ],
    season: "winter",
    icon: "snowflake",
    entryKeys: [
      "gond-ke-laddu",
      "methi-ke-laddu",
      "til-gud-laddu",
      "gajar-ka-halwa",
      "panjeeri",
      "grey-hair-oil",
    ],
    relatedCategories: ["winter-sweets", "winter-remedies", "hair-care-cat"],
  },
  {
    key: "summer-collection",
    slug: "summer-collection",
    lang: "en",
    title: "Summer Coolers",
    seoTitle: "Summer Collection — Chaas, Aam Panna and Sattu",
    metaDescription:
      "Cooling Indian summer drinks and light breakfasts: masala chaas, aam panna, sattu sharbat and besan chilla.",
    intro: [
      "In a Indian summer the kitchen moves to fluids and light meals. These are the drinks that actually get made, with their sugar and salt made visible.",
    ],
    season: "summer",
    icon: "sun",
    entryKeys: ["masala-chaas", "aam-panna", "sattu-sharbat", "besan-chilla", "indori-poha"],
    relatedCategories: ["summer-recipes", "healthy-diet"],
  },
  {
    key: "festival-collection",
    slug: "festival-collection",
    lang: "en",
    title: "Festival Mithai",
    seoTitle: "Festival Collection — Mithai for Diwali and Sankranti",
    metaDescription:
      "A curated festival collection of Indian mithai: besan laddu, til gud laddu, gajar halwa and gond laddu for celebrations.",
    intro: [
      "Festival sweets are made in batches and shared. These recipes scale cleanly, keep well and carry the allergen notes you need when you are giving food away.",
    ],
    season: "winter",
    icon: "gift",
    entryKeys: ["besan-laddu", "til-gud-laddu", "gajar-ka-halwa", "gond-ke-laddu", "ubtan"],
    relatedCategories: ["festival-recipes", "winter-sweets"],
  },
];
