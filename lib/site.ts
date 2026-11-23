export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

export const SITE = {
  url: SITE_URL,
  name: {
    hi: "दादी माँ के नुस्खे",
    en: "Dadi Maa Ke Nuskhe",
  },
  shortName: {
    hi: "दादी माँ",
    en: "Dadi Maa",
  },
  tagline: {
    hi: "दादी माँ के पारंपरिक नुस्खे, स्वादिष्ट रेसिपी और घर पर बनी उपयोगी चीजें",
    en: "Traditional Indian Home Remedies, Recipes & Homemade Living",
  },
  description: {
    hi: "पारंपरिक घरेलू नुस्खे, देसी रेसिपी, लड्डू, शरबत, घर पर बने हेयर ऑयल और ब्यूटी प्रोडक्ट — माप, सावधानी और स्रोतों के साथ।",
    en: "Traditional home remedies, Indian recipes, laddus, coolers, homemade hair oils and beauty products — with measurements, safety notes and sources.",
  },
  email: "hello@dadimaakenuskhe.com",
} as const;

/** Organization byline. No individual author or reviewer is invented. */
export const EDITORIAL_TEAM = {
  hi: "दादी माँ के नुस्खे संपादकीय टीम",
  en: "Dadi Maa Ke Nuskhe editorial team",
} as const;

export const MEDICAL_DISCLAIMER = {
  hi: "यहाँ दी गई स्वास्थ्य जानकारी केवल सामान्य शिक्षा के लिए है। यह डॉक्टर की सलाह, निदान या उपचार का विकल्प नहीं है। किसी भी लगातार या गंभीर समस्या के लिए योग्य चिकित्सक से परामर्श लें और चल रही दवाएँ बंद न करें।",
  en: "Health information on this site is general education only. It is not a substitute for professional medical advice, diagnosis or treatment. Consult a qualified clinician for persistent or severe symptoms, and never stop prescribed medicines.",
} as const;

export const FOOD_SAFETY_DISCLAIMER = {
  hi: "रेसिपी की जानकारी सामान्य पाक-शिक्षा के लिए है। साफ हाथ और बर्तन इस्तेमाल करें, भोजन पूरी तरह पकाएँ, समय पर फ्रिज में रखें और बासी या बदबूदार भोजन न खाएँ। एलर्जी वाले लोग सामग्री-सूची ध्यान से पढ़ें।",
  en: "Recipe information is general cooking education. Use clean hands and utensils, cook food thoroughly, refrigerate promptly, and discard anything that smells or looks spoiled. Check the ingredient list carefully if you have allergies.",
} as const;

export const COSMETIC_SAFETY_DISCLAIMER = {
  hi: "घर पर बने कॉस्मेटिक प्रोडक्ट्स में प्रोफेशनल प्रिज़र्वेटिव नहीं होते। पहली बार इस्तेमाल से 24 घंटे पहले कलाई के भीतरी हिस्से पर पैच टेस्ट करें। छोटी मात्रा बनाएँ, ठंडी जगह रखें और रंग, गंध या बनावट बदलने पर तुरंत फेंक दें।",
  en: "Homemade cosmetics contain no professional preservatives. Patch test on your inner forearm 24 hours before first use. Make small batches, store them cool, and throw them away at the first change in colour, smell or texture.",
} as const;

export const CLEANING_SAFETY_DISCLAIMER = {
  hi: "ब्लीच को कभी सिरके, नींबू या अमोनिया वाले क्लीनर के साथ न मिलाएँ — इससे ज़हरीली गैस बनती है। क्लीनर को साफ लेबल वाली बोतलों में रखें, बच्चों और पालतू जानवरों से दूर रखें और खाने के बर्तन में कभी न भरें।",
  en: "Never mix bleach with vinegar, lemon or ammonia-based cleaners — it releases toxic gas. Label every container, keep products away from children and pets, and never store a cleaner in a food container.",
} as const;

export const EMERGENCY = {
  number: "112",
  title: {
    hi: "आपातकालीन स्थिति में घरेलू नुस्खे न आज़माएँ",
    en: "Do not try home remedies in an emergency",
  },
  text: {
    hi: "सांस लेने में गंभीर कठिनाई, सीने में दर्द, बेहोशी, बोलने या चलने में अचानक कमज़ोरी, गंभीर एलर्जी या तेज़ बुखार के साथ बहुत ज़्यादा सुस्ती — इनमें तुरंत आपातकालीन सहायता लें। भारत में सामान्य आपातकालीन नंबर 112 है।",
    en: "Seek emergency help immediately for severe breathing difficulty, chest pain, fainting, sudden weakness on one side or slurred speech, a severe allergic reaction, or a high fever with unusual drowsiness. In India the general emergency number is 112.",
  },
} as const;

export const REVIEW_PENDING_NOTE = {
  hi: "इस पृष्ठ की समीक्षा अभी लंबित है। सामग्री शैक्षणिक है और किसी योग्य समीक्षक द्वारा जाँचे जाने तक इसे समीक्षित सामग्री के रूप में प्रस्तुत नहीं किया जाता।",
  en: "Review of this page is pending. The content is educational and is not presented as reviewed material until a qualified reviewer has actually checked it.",
} as const;
