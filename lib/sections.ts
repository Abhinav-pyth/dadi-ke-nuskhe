import { LANG_META } from "./lang-meta";
import type { Lang, SectionKey } from "./types";

export interface SectionDef {
  key: SectionKey;
  /** URL segment per language. */
  slug: Record<Lang, string>;
  name: Record<Lang, string>;
  tagline: Record<Lang, string>;
  intro: Record<Lang, string>;
  icon: string;
}

/**
 * Sections define both navigation and URL structure:
 * /hi/nuskhe/, /en/home-remedies/, /hi/recipes/ …
 */
export const SECTIONS: SectionDef[] = [
  {
    key: "home-remedies",
    slug: { hi: "nuskhe", en: "home-remedies" },
    name: { hi: "दादी माँ के नुस्खे", en: "Home Remedies" },
    tagline: {
      hi: "पारंपरिक घरेलू नुस्खे, सावधानी और प्रमाण के साथ",
      en: "Traditional household remedies, with precautions and evidence",
    },
    intro: {
      hi: "छोटी-मोटी स्वास्थ्य समस्याओं के लिए भारतीय घरों में पीढ़ियों से आज़माए जाने वाले नुस्खे — तैयारी का तरीका, विज्ञान क्या कहता है, किसे सावधानी रखनी चाहिए और कब चिकित्सक से मिलना चाहिए। ये पृष्ठ शैक्षणिक हैं और किसी भी स्थिति का इलाज का दावा नहीं करते।",
      en: "The household preparations Indian families have reached for across generations for everyday complaints — how they are made, what the evidence actually supports, who should be careful, and when to see a clinician. These pages are educational and never claim to cure a condition.",
    },
    icon: "leaf",
  },
  {
    key: "recipes",
    slug: { hi: "recipes", en: "recipes" },
    name: { hi: "देसी रेसिपी", en: "Recipes" },
    tagline: {
      hi: "लड्डू, नाश्ता, शरबत, मिठाई और त्योहारों के व्यंजन",
      en: "Laddus, breakfasts, coolers, sweets and festival dishes",
    },
    intro: {
      hi: "माप, चरण, समय और भंडारण के साथ घर की रसोई की रेसिपी — ठंड के लड्डू से लेकर गर्मियों के शरबत तक। हर रेसिपी में सामग्री की मात्रा बदलने की सुविधा, भोजन सुरक्षा की बातें और एलर्जी की जानकारी दी गई है।",
      en: "Kitchen recipes with real measurements, steps, timings and storage guidance — from winter laddus to summer coolers. Every recipe page lets you scale ingredient quantities, and includes food-safety notes and allergen information.",
    },
    icon: "soup",
  },
  {
    key: "hair-care",
    slug: { hi: "hair-care", en: "hair-care" },
    name: { hi: "बालों की देखभाल", en: "Hair Care" },
    tagline: {
      hi: "घर पर बने हेयर ऑयल, मास्क और स्कैल्प देखभाल",
      en: "Homemade hair oils, masks and scalp care",
    },
    intro: {
      hi: "नारियल तेल, आंवला, करी पत्ता, मेथी और भृंगराज जैसे पारंपरिक घटकों से बने हेयर ऑयल और मास्क बनाने के तरीके, पैच टेस्ट, भंडारण और वास्तविक अपेक्षाओं के साथ। कोई भी घरेलू तेल सफेद बालों को काला करने का दावा नहीं करता।",
      en: "How to make hair oils and masks with coconut oil, amla, curry leaves, methi and bhringraj — with patch testing, storage guidance and realistic expectations. No homemade oil is claimed to reverse grey hair.",
    },
    icon: "sparkles",
  },
  {
    key: "beauty",
    slug: { hi: "beauty", en: "beauty" },
    name: { hi: "घरेलू ब्यूटी", en: "Beauty & Skincare" },
    tagline: {
      hi: "फेस पैक, स्क्रब, उबटन और लिप बाम",
      en: "Face packs, scrubs, ubtan and lip balm",
    },
    intro: {
      hi: "घर पर बनने वाले फेस पैक, स्क्रब, उबटन और मॉइस्चराइज़र — हर पृष्ठ पर पैच टेस्ट, संवेदनशील त्वचा की सावधानी, संदूषण (contamination) का जोखिम और छोटी मात्रा में बनाने की सलाह। त्वचा को गोरा करने का कोई दावा नहीं किया जाता।",
      en: "Face packs, scrubs, ubtan and moisturisers made at home — each page covers patch testing, sensitive-skin cautions, contamination risk and why small batches matter. No skin-whitening claims are made anywhere.",
    },
    icon: "flower",
  },
  {
    key: "homemade-products",
    slug: { hi: "homemade-products", en: "homemade-products" },
    name: { hi: "घर पर बनाएं", en: "Homemade Products" },
    tagline: {
      hi: "घी, पनीर, मसाले, कैंडी और घरेलू सामान",
      en: "Ghee, paneer, masalas, candies and household staples",
    },
    intro: {
      hi: "रसोई और घर के लिए खुद बनाई जाने वाली चीजें — देसी घी, पनीर, गरम मसाला, आंवला कैंडी और साफ-सफाई के सुरक्षित मिश्रण। खाद्य और गैर-खाद्य उत्पादों को स्पष्ट रूप से अलग रखा गया है।",
      en: "Things you can genuinely make yourself for the kitchen and home — desi ghee, paneer, garam masala, amla candy and safe cleaning mixtures. Food and non-food preparations are clearly separated.",
    },
    icon: "home",
  },
  {
    key: "household-tips",
    slug: { hi: "gharelu-tips", en: "household-tips" },
    name: { hi: "घरेलू टिप्स", en: "Household Tips" },
    tagline: {
      hi: "रसोई, भंडारण, सफाई और घर की देखभाल",
      en: "Kitchen, storage, cleaning and home care",
    },
    intro: {
      hi: "रसोई और घर चलाने के व्यावहारिक तरीके — सब्जियां और मसाले ताज़ा रखना, फ्रिज की बदबू, बर्तनों की सफाई और बरसात में भोजन की स्वच्छता। पारंपरिक आदतों और सत्यापित सुरक्षा सलाह में अंतर बताया गया है।",
      en: "Practical ways to run a kitchen and home — keeping produce and spices fresh, handling fridge odours, cleaning utensils, and monsoon food hygiene. Traditional habits are clearly separated from verified safety advice.",
    },
    icon: "broom",
  },
];

export function getSection(key: SectionKey): SectionDef {
  const section = SECTIONS.find((item) => item.key === key);
  if (!section) throw new Error(`Unknown section: ${key}`);
  return section;
}

export function sectionBySlug(lang: Lang, slug: string): SectionDef | undefined {
  return SECTIONS.find((section) => section.slug[lang] === slug);
}

export function sectionPath(lang: Lang, key: SectionKey): string {
  return `/${lang}/${getSection(key).slug[lang]}`;
}

export function sectionEntryPath(lang: Lang, key: SectionKey, slug: string): string {
  return `${sectionPath(lang, key)}/${slug}`;
}

export const SECTION_LABELS: Record<Lang, Record<SectionKey, string>> = {
  hi: Object.fromEntries(SECTIONS.map((s) => [s.key, s.name.hi])) as Record<SectionKey, string>,
  en: Object.fromEntries(SECTIONS.map((s) => [s.key, s.name.en])) as Record<SectionKey, string>,
};

export const LANG_CODES = LANG_META;
