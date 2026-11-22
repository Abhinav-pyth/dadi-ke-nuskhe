import type { Lang } from "./types";

/** Human labels for discovery tags, used by filters and chips. */
export const TAG_LABELS: Record<string, Record<Lang, string>> = {
  winter: { hi: "सर्दी", en: "Winter" },
  summer: { hi: "गर्मी", en: "Summer" },
  monsoon: { hi: "बरसात", en: "Monsoon" },
  breakfast: { hi: "नाश्ता", en: "Breakfast" },
  snacks: { hi: "नमकीन", en: "Snacks" },
  sweets: { hi: "मिठाई", en: "Sweets" },
  festival: { hi: "त्योहार", en: "Festival" },
  healthy: { hi: "हेल्दी", en: "Healthy" },
  drinks: { hi: "पेय", en: "Drinks" },
  "main-course": { hi: "मुख्य भोजन", en: "Main course" },
  skincare: { hi: "त्वचा", en: "Skincare" },
  hair: { hi: "बाल", en: "Hair" },
  cleaning: { hi: "सफाई", en: "Cleaning" },
  kitchen: { hi: "रसोई", en: "Kitchen" },
  dairy: { hi: "डेयरी", en: "Dairy" },
  spice: { hi: "मसाले", en: "Spices" },
  preserve: { hi: "अचार-मुरब्बा", en: "Preserves" },
  digestive: { hi: "पाचन", en: "Digestive" },
  "cold-and-cough": { hi: "सर्दी-खांसी", en: "Cold & cough" },
  "general-wellness": { hi: "सामान्य सेहत", en: "General wellness" },
  gifting: { hi: "गिफ्ट", en: "Gifting" },
  kids: { hi: "बच्चे", en: "Kids" },
};

export function tagLabel(lang: Lang, tag: string): string {
  return TAG_LABELS[tag]?.[lang] ?? tag;
}

export function sortTags(tags: string[]): string[] {
  const order = Object.keys(TAG_LABELS);
  return [...tags].sort((a, b) => {
    const ai = order.indexOf(a);
    const bi = order.indexOf(b);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
}
