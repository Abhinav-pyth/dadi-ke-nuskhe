import type { InfoPage } from "@/lib/types";

const UPDATED = "2026-11-20";

/** Legal, editorial and contact pages. */
export const infoPages: InfoPage[] = [
  {
    key: "about",
    lang: "en",
    title: "About Dadi Maa Ke Nuskhe",
    seoTitle: "About Us — Dadi Maa Ke Nuskhe",
    metaDescription:
      "Who we are, why we publish traditional Indian remedies and recipes bilingually, and how we separate tradition from evidence.",
    intro:
      "Dadi Maa Ke Nuskhe is a bilingual library of Indian home remedies, recipes and household knowledge, written for people who want the tradition and the caveats together.",
    updatedAt: UPDATED,
    sections: [
      {
        heading: "Why this site exists",
        paragraphs: [
          "Most Indian food and remedy knowledge lives in families and WhatsApp forwards. Some of it is excellent, some of it is outdated, and a little of it is dangerous. We write it down properly: exact quantities, clear steps, honest limits.",
          "Every page exists in Hindi and English. Neither language is a translation afterthought — both are written for readers who cook and care in that language.",
        ],
      },
      {
        heading: "What we will not do",
        bullets: [
          "We do not invent ratings, reviews or reviewer names.",
          "We do not claim that a home remedy cures a disease.",
          "We do not publish nutrition numbers as if they were laboratory measurements.",
          "We do not use before-and-after skin claims or 'whitening' language.",
        ],
      },
      {
        heading: "How the site is built",
        paragraphs: [
          "Content lives in a typed data layer separate from the interface, so pages are generated from structured entries rather than hand-written HTML. That lets us validate every recipe and guide for required safety information before publishing.",
        ],
      },
    ],
  },
  {
    key: "contact",
    lang: "en",
    title: "Contact Us",
    seoTitle: "Contact — Dadi Maa Ke Nuskhe",
    metaDescription:
      "How to reach the editorial team with corrections, source suggestions, recipe feedback or safety concerns.",
    intro:
      "Corrections and source suggestions are the most useful messages we receive. If a recipe did not work or a safety note is missing, tell us.",
    updatedAt: UPDATED,
    sections: [
      {
        heading: "What to write about",
        bullets: [
          "A factual correction, with a source if you have one",
          "A safety concern about a published page",
          "A recipe that failed, with what you did differently",
          "A translation or accessibility issue",
        ],
      },
      {
        heading: "What we cannot do",
        paragraphs: [
          "We cannot give personal medical advice or diagnose a condition. For anything urgent, contact a clinician or emergency services. In India, dial 112.",
        ],
      },
    ],
  },
  {
    key: "editorial-policy",
    lang: "en",
    title: "Editorial Policy",
    seoTitle: "Editorial Policy — How We Write and Review",
    metaDescription:
      "Our publishing workflow, sourcing standards, review status rules and correction policy for remedies, recipes and guides.",
    intro:
      "This policy explains how content moves from draft to published, who checks it, and what happens when something is wrong.",
    updatedAt: UPDATED,
    sections: [
      {
        heading: "Publishing workflow",
        bullets: [
          "Draft — written and structured against the content schema",
          "Editorial review — language, structure and sourcing checked",
          "Safety review — warnings, contraindications and red flags checked",
          "Approved — signed off by a named reviewer where a medical claim is made",
          "Published — live and indexable",
          "Needs update — a source changed or a reader reported a problem",
          "Archived — removed from navigation and search",
        ],
        paragraphs: [
          "Pages marked 'review pending' have passed editorial checks but do not yet carry a named medical reviewer. They display that status openly and do not emit reviewer structured data.",
        ],
      },
      {
        heading: "Sourcing",
        paragraphs: [
          "We prefer public health bodies, peer-reviewed literature and official food-safety guidance. Every entry lists its sources with the specific claim each source supports and the date we accessed it.",
          "We do not cite pages we have not read, and we do not invent URLs.",
        ],
      },
      {
        heading: "Corrections",
        paragraphs: [
          "Substantive corrections are made on the page and the updated date changes. Safety-related corrections are made immediately, even if the rest of the page is under review.",
        ],
      },
    ],
  },
  {
    key: "medical-disclaimer",
    lang: "en",
    title: "Medical Disclaimer",
    seoTitle: "Medical Disclaimer — Read Before Using Remedies",
    metaDescription:
      "Our remedies are educational, not medical advice. Read the limits, emergency guidance and the situations that need a clinician.",
    intro:
      "Nothing on this site is medical advice, diagnosis or treatment. Home remedies are described for education and cultural context.",
    updatedAt: UPDATED,
    sections: [
      {
        heading: "No doctor–patient relationship",
        paragraphs: [
          "Reading this site does not create a clinical relationship. We do not know your history, medicines or allergies. A preparation that is safe for most people can be unsafe for you.",
        ],
      },
      {
        heading: "When to stop and get help",
        bullets: [
          "Chest pain, breathlessness, fainting or one-sided weakness — call emergency services",
          "Severe abdominal pain, persistent vomiting, blood in stool or vomit",
          "A sudden 'worst ever' headache",
          "Any symptom in a baby, or a child who is drowsy or not drinking",
        ],
      },
      {
        heading: "Supplements and interactions",
        paragraphs: [
          "Herbs can interact with medicines — blood thinners, diabetes medication, blood pressure drugs and thyroid treatment in particular. Tell your clinician about anything you take, including traditional preparations.",
        ],
      },
    ],
  },
  {
    key: "food-safety-policy",
    lang: "en",
    title: "Food Safety Policy",
    seoTitle: "Food Safety Policy — How We Handle Recipes",
    metaDescription:
      "How our recipes handle allergens, storage, reheating and high-risk ingredients, and why we never publish an unqualified shelf life.",
    intro:
      "Every recipe carries storage guidance and an allergen statement. Where we are not certain, we say so instead of guessing.",
    updatedAt: UPDATED,
    sections: [
      {
        heading: "Storage and shelf life",
        paragraphs: [
          "Shelf lives assume clean containers, correct refrigeration and a normal domestic kitchen. They are guidance, not guarantees. Discard food that smells off, looks slimy or has visible mould — do not taste it to check.",
        ],
      },
      {
        heading: "High-risk foods",
        bullets: [
          "Milk-based sweets: refrigerate promptly, do not leave out overnight",
          "Rice and pulses: cool quickly and refrigerate within two hours",
          "Raw meat: keep on the bottom shelf, separate boards and knives",
          "Honey: never give to a child under 12 months",
        ],
      },
      {
        heading: "Allergens",
        paragraphs: [
          "We list dairy, gluten, nuts, peanuts, sesame and legumes where they occur. Cross-contact in a home kitchen is real; if you are cooking for someone with a severe allergy, treat every shared surface as contaminated.",
        ],
      },
    ],
  },
  {
    key: "privacy-policy",
    lang: "en",
    title: "Privacy Policy",
    seoTitle: "Privacy Policy — Dadi Maa Ke Nuskhe",
    metaDescription:
      "What we collect, what stays in your browser, how analytics and advertising work, and how to contact us about your data.",
    intro:
      "We keep data collection minimal. Recipes you save are stored in your own browser, not on our servers.",
    updatedAt: UPDATED,
    sections: [
      {
        heading: "What stays on your device",
        paragraphs: [
          "Saved recipes and your language preference are stored in your browser's local storage. They are not transmitted to us and can be cleared by clearing site data.",
        ],
      },
      {
        heading: "Analytics and advertising",
        paragraphs: [
          "If analytics or advertising is enabled for this deployment, those scripts are listed in the site configuration and load only when configured. Advertising identifiers are set by the ad provider, not by us.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "For privacy questions, use the contact page. We do not sell personal data.",
        ],
      },
    ],
  },
  {
    key: "terms",
    lang: "en",
    title: "Terms of Use",
    seoTitle: "Terms of Use — Dadi Maa Ke Nuskhe",
    metaDescription:
      "The terms that apply to using this site, including content ownership, permitted use and limitation of liability.",
    intro: "By using this site you accept these terms. They are written to be readable, not to hide anything.",
    updatedAt: UPDATED,
    sections: [
      {
        heading: "Content and copyright",
        paragraphs: [
          "Text, structure and design on this site belong to Dadi Maa Ke Nuskhe unless stated otherwise. You may print or save pages for personal use. Republishing whole pages commercially requires permission.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "The content is provided for information. We are not liable for outcomes from following a remedy or recipe. Always use your judgement, follow local food-safety guidance and consult a clinician when needed.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "We may update these terms. The updated date on this page reflects the current version.",
        ],
      },
    ],
  },
  {
    key: "sources",
    lang: "en",
    title: "Sources and References",
    seoTitle: "Sources — Our Reference Library",
    metaDescription:
      "The public health, food-safety and research sources we cite, with the specific claims they support across our remedies and recipes.",
    intro:
      "We cite public health bodies, peer-reviewed literature and official food-safety guidance. This page lists every source used on the site and the entries that use it.",
    updatedAt: UPDATED,
    sections: [
      {
        heading: "How to read our citations",
        paragraphs: [
          "Each source is listed with a specific 'supports' note on the page where it is used. A citation means the source supports that statement — not that the source endorses our recipe.",
          "Guidance changes. If a cited page has been updated since our access date, the newer guidance takes precedence.",
        ],
      },
      {
        heading: "What we do not cite",
        bullets: [
          "Commercial product pages",
          "Unsourced listicles or social media posts",
          "Studies we have not read in full",
        ],
      },
    ],
  },
];
