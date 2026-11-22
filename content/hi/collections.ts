import type { CollectionEntry } from "@/lib/types";

/** मौसम के अनुसार चुने गए संग्रह। */
export const collections: CollectionEntry[] = [
  {
    key: "winter-collection",
    slug: "sardiyon-ka-sangrah",
    lang: "hi",
    title: "सर्दियों की थाली",
    seoTitle: "सर्दियों का संग्रह — लड्डू, हलवा और गरमाहट",
    metaDescription:
      "सर्दियों का चुना हुआ संग्रह: गोंद और मेथी के लड्डू, तिल गुड़, गाजर का हलवा और मौसम के अनुकूल तेल व नुस्खे।",
    intro: [
      "उत्तर भारत का सर्दियों का खाना घी, गुड़, मेवे और धीमी पकाई पर टिका है। यह संग्रह वही रेसिपी और दिनचर्या जोड़ता है जो हर साल बनती हैं।",
      "एक लड्डू से शुरू करें, ठंडी शाम के लिए हलवा बनाएँ और बाल-त्वचा की दिनचर्या सरल रखें।",
    ],
    season: "winter",
    icon: "snowflake",
    entryKeys: ["gond-ke-laddu", "methi-ke-laddu", "til-gud-laddu", "gajar-ka-halwa", "grey-hair-oil"],
    relatedCategories: ["winter-sweets", "winter-remedies", "hair-care-cat"],
  },
  {
    key: "summer-collection",
    slug: "garmiyon-ka-sangrah",
    lang: "hi",
    title: "गर्मियों के ठंडे पेय",
    seoTitle: "गर्मियों का संग्रह — छाछ, आम पन्ना, सत्तू",
    metaDescription:
      "गर्मियों के ठंडे भारतीय पेय और हल्का नाश्ता: मसाला छाछ, आम पन्ना, सत्तू का शरबत और बेसन चीला।",
    intro: ["भारतीय गर्मी में रसोई तरल और हल्के भोजन की ओर चली जाती है। ये वे पेय हैं जो सचमुच बनते हैं — शक्कर और नमक की मात्रा सामने रखकर।"],
    season: "summer",
    icon: "sun",
    entryKeys: ["masala-chaas", "aam-panna", "sattu-sharbat"],
    relatedCategories: ["summer-recipes", "healthy-diet"],
  },
  {
    key: "festival-collection",
    slug: "tyohar-ki-mithai-sangrah",
    lang: "hi",
    title: "त्योहार की मिठाई",
    seoTitle: "त्योहार का संग्रह — दिवाली और संक्रांति",
    metaDescription:
      "त्योहारों की चुनी हुई मिठाइयाँ: बेसन लड्डू, तिल गुड़ लड्डू, गाजर का हलवा और गोंद के लड्डू।",
    intro: ["त्योहार की मिठाई बड़ी मात्रा में बनती और बाँटी जाती है। ये रेसिपी आसानी से बढ़ती हैं, अच्छी रहती हैं और बाँटते समय एलर्जी की जानकारी देती हैं।"],
    season: "winter",
    icon: "gift",
    entryKeys: ["besan-laddu", "til-gud-laddu", "gajar-ka-halwa", "gond-ke-laddu", "ubtan"],
    relatedCategories: ["festival-recipes", "winter-sweets"],
  },
];
