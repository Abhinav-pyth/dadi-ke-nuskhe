import { ref } from "@/content/references";
import type { GuideEntry } from "@/lib/types";

/**
 * DIY cosmetics, homemade staples and household guides.
 * Every cosmetic entry carries a patch-test instruction, a contamination
 * warning and a realistic shelf life — no "natural means safe" claims.
 */
export const diyGuides: GuideEntry[] = [
  {
    kind: "hair-care",
    key: "grey-hair-oil",
    slug: "grey-hair-oil-recipe",
    lang: "en",
    section: "hair-care",
    categories: ["hair-care-cat", "grey-hair"],
    tags: ["hair"],
    keywords: ["grey", "hair", "oil", "recipe"],
    title: "Grey Hair Oil with Curry Leaves and Amla — Honest Guide",
    seoTitle: "Grey Hair Oil Recipe — What It Can and Cannot Do",
    metaDescription:
      "Make a curry leaf and amla hair oil at home. What the ingredients do, why no oil reverses greying, patch testing, storage and safety.",
    summary:
      "A conditioning oil with curry leaves and amla. It softens hair and scalp; it does not restore pigment, and we say so plainly.",
    intro: [
      "This is a traditional conditioning oil, not a cure for greying. Hair turns grey when pigment cells in the follicle stop producing melanin — no oil or herb reverses that.",
      "Used regularly, the oil makes dry hair easier to manage and keeps the scalp comfortable, which is a real benefit even without colour change.",
    ],
    whatIs: [
      "A coconut-oil infusion of curry leaves, amla and fenugreek. Curry leaves and amla are traditional hair ingredients; fenugreek adds mucilage that makes hair feel smoother.",
    ],
    materials: [
      { item: "Coconut oil", quantity: 200, unit: "ml" },
      { item: "Curry leaves, dried", quantity: 30, unit: "g" },
      { item: "Amla, dried and chopped", quantity: 20, unit: "g" },
      { item: "Fenugreek seeds", quantity: 10, unit: "g" },
    ],
    method: [
      {
        text: "Warm the coconut oil in a heavy pan on the lowest heat until just melted — it should never smoke.",
        tip: "Smoking oil is already degrading; keep the flame low.",
      },
      {
        text: "Add the curry leaves and amla and stir for 8–10 minutes until the leaves darken. Do not let them turn black.",
      },
      {
        text: "Add the fenugreek, switch off the heat and leave covered for 2 hours so the oil cools slowly.",
      },
      {
        text: "Strain through a clean muslin cloth into a dry glass bottle. Label it with the date.",
      },
    ],
    usage: [
      "Once or twice a week, massage 1–2 teaspoons into the scalp and along the lengths.",
      "Leave for 30–60 minutes, then shampoo out. Do not sleep with heavy oil on the scalp.",
    ],
    evidence: [
      "No clinical evidence that curry leaf or amla oil restores hair pigment. Amla is a traditional conditioning ingredient and contains vitamin C, but that does not translate into repigmentation.",
      "Oiling helps dry, brittle hair by reducing friction and breakage; it does not change the colour of new growth.",
    ],
    safety: [
      "Patch test: apply a few drops behind the ear and wait 24 hours. Stop if there is itching, redness or swelling.",
      "Use clean hands and a dry bottle. Water in a homemade oil grows mould and bacteria — discard any bottle that smells rancid or has visible growth.",
      "Keep away from eyes and never use on broken or infected scalp skin.",
      "Coconut oil can make an oily scalp worse; use on the ends if your scalp is already greasy.",
    ],
    whoShouldAsk: [
      "People with seborrhoeic dermatitis or psoriasis should ask a dermatologist before applying oils.",
      "Anyone with a history of contact dermatitis should avoid new botanical oils without testing.",
      "Sudden, patchy or rapid greying in young people should be assessed rather than treated with oil.",
    ],
    storage: [
      "Store in a dark glass bottle in a cool cupboard, away from the stove.",
      "Use within 3 months; write the date on the label and discard if the smell changes.",
    ],
    faqs: [
      {
        question: "Will this oil stop grey hair?",
        answer:
          "No. Greying is caused by a loss of pigment cells. An oil can condition hair but cannot restore colour, whatever the recipe claims.",
      },
      {
        question: "Can I use it daily?",
        answer:
          "Once or twice a week is enough. Daily heavy oiling can cause scalp buildup and, for some people, more flaking.",
      },
    ],
    references: [
      ref("nhsHairLoss", "Hair loss and scalp care advice, including when to see a GP."),
      ref("nhsContactDermatitis", "Patch testing and contact allergy to topical products."),
      ref("nccihHerbs", "Limited evidence for traditional herbs and interaction cautions."),
    ],
    ingredientKeys: ["curry-leaves", "amla", "methi"],
    related: ["amla-hair-oil", "curry-leaf-hair-oil", "dandruff"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-09",
    updatedAt: "2026-11-18",
    featured: true,
  },
  {
    kind: "hair-care",
    key: "curry-leaf-hair-oil",
    slug: "curry-leaf-hair-oil-recipe",
    lang: "en",
    section: "hair-care",
    categories: ["hair-care-cat", "grey-hair"],
    tags: ["hair"],
    keywords: ["curry", "leaf", "hair", "oil"],
    title: "Curry Leaf Hair Oil for Dry Scalp — Safe Recipe",
    seoTitle: "Curry Leaf Hair Oil Recipe — Gentle Scalp Oil",
    metaDescription:
      "A simple curry leaf hair oil for dry hair: correct infusion temperature, patch-test instructions, storage and realistic expectations.",
    summary: "A light curry leaf infusion for dry, rough hair — and an honest note on what it cannot fix.",
    intro: [
      "Curry leaves are used in South Indian hair care because they smell pleasant and are cheap. The oil's real value is that it conditions dry strands and gives a scalp massage routine.",
    ],
    whatIs: [
      "A sesame or coconut oil infusion of dried curry leaves and a little fenugreek. It is a conditioner, not a treatment for hair loss.",
    ],
    materials: [
      { item: "Sesame oil", quantity: 150, unit: "ml" },
      { item: "Curry leaves, dried", quantity: 25, unit: "g" },
      { item: "Fenugreek seeds", quantity: 10, unit: "g" },
    ],
    method: [
      { text: "Gently warm the oil on the lowest heat, add the leaves and fenugreek, and stir for 6–8 minutes." },
      { text: "Switch off, cover and leave for 3–4 hours. The oil should smell of curry leaf, not of burnt leaves." },
      { text: "Strain through muslin into a clean, dry bottle and label with the date." },
    ],
    usage: [
      "Massage 1 teaspoon into the scalp for 5 minutes, then apply a little to the ends.",
      "Leave 45 minutes, then wash out with a mild shampoo.",
    ],
    evidence: [
      "No evidence that curry leaves promote hair growth. Sesame oil is a reasonable emollient, and massage may feel relaxing.",
      "Treat any claim about 'thickening' hair with caution — it is not supported by trials.",
    ],
    safety: [
      "Patch test: apply a little behind the ear and wait 24 hours before wider use.",
      "Sterilise the bottle with boiling water and dry it fully; water in oil causes microbial growth.",
      "Stop at once if you notice itching, bumps or a rash, and do not apply to an inflamed scalp.",
      "Avoid in children under 2, and keep it out of reach of small children.",
    ],
    whoShouldAsk: [
      "Anyone with an active scalp infection or open sores should avoid oils until treated.",
      "Pregnant women should check new botanical products with their clinician out of caution.",
    ],
    storage: [
      "Cool, dark cupboard, tightly closed; use within 3 months.",
      "Discard if it smells rancid or cloudy.",
    ],
    faqs: [
      {
        question: "Can curry leaf oil darken hair colour?",
        answer: "No. There is no evidence it changes hair pigment; it conditions hair and adds shine.",
      },
      {
        question: "Is it safe for dandruff?",
        answer:
          "Heavy oiling can make dandruff worse because the yeast involved feeds on oil. Use a medicated shampoo instead, and oil only the ends.",
      },
    ],
    references: [
      ref("nhsContactDermatitis", "Patch testing topical products and recognising contact allergy."),
      ref("nhsDandruff", "Scalp care and when oiling should be avoided."),
    ],
    ingredientKeys: ["curry-leaves", "methi"],
    related: ["grey-hair-oil", "amla-hair-oil", "dandruff"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-09",
    updatedAt: "2026-11-18",
  },
  {
    kind: "hair-care",
    key: "amla-hair-oil",
    slug: "amla-hair-oil-recipe",
    lang: "en",
    section: "hair-care",
    categories: ["hair-care-cat"],
    tags: ["hair"],
    keywords: ["amla", "hair", "oil", "recipe"],
    title: "Amla Hair Oil — Traditional Recipe and Safety Notes",
    seoTitle: "Amla Hair Oil Recipe — Traditional Conditioning Oil",
    metaDescription:
      "How to make amla hair oil at home with coconut oil and dried amla, plus patch testing, a realistic shelf life and honest claims.",
    summary: "A dark, conditioning amla oil that suits dry hair — with clear limits on what it can do.",
    intro: [
      "Amla oil is one of the most widely sold hair oils in India. Making it at home is straightforward, and it lets you control freshness and avoid mineral oil.",
    ],
    whatIs: [
      "Dried amla simmered gently in coconut oil. The result is a dark, faintly sour oil used as a pre-wash conditioner.",
    ],
    materials: [
      { item: "Coconut oil", quantity: 200, unit: "ml" },
      { item: "Dried amla pieces", quantity: 40, unit: "g" },
      { item: "Fenugreek seeds", quantity: 10, unit: "g", note: "optional" },
    ],
    method: [
      { text: "Warm the oil on low heat, add the amla and fenugreek, and keep the flame low for 10 minutes." },
      { text: "Cover and cool for 3 hours, then strain through muslin into a dry bottle." },
      { text: "Label with the date and keep in a dark place." },
    ],
    usage: [
      "Apply to the scalp 30–60 minutes before washing, once a week.",
      "Wash out with shampoo; leaving it on overnight can irritate the scalp for some people.",
    ],
    evidence: [
      "Amla is rich in vitamin C and tannins, but eating or applying amla has not been shown to regrow hair in clinical trials.",
      "Coconut oil reduces protein loss from hair in some studies, which supports its use as a pre-wash conditioner.",
    ],
    safety: [
      "Patch test on the inner forearm for 24 hours before using on the scalp.",
      "Water in the oil grows mould — bottle must be completely dry, and discard at the first sign of cloudiness or a sour smell.",
      "Avoid if you have a known allergy to coconut; choose sesame oil instead.",
      "Do not use on children's scalps without checking with a paediatrician.",
    ],
    whoShouldAsk: [
      "People with eczema or a sensitive scalp should test carefully and limit contact time.",
      "Anyone experiencing sudden hair loss should see a doctor rather than change oils.",
    ],
    storage: ["Cool, dark place for up to 3 months.", "Refrigerate in hot, humid weather to slow rancidity."],
    faqs: [
      {
        question: "Does amla oil prevent greying?",
        answer: "No. Greying is a pigment-cell change that oils do not reverse.",
      },
      {
        question: "Can I leave it overnight?",
        answer:
          "Some people do, but it can irritate the scalp and stain pillows. An hour before washing is enough.",
      },
    ],
    references: [
      ref("nhsHairLoss", "Causes of hair loss and when to seek assessment."),
      ref("nhsContactDermatitis", "Contact allergy and the value of patch testing."),
    ],
    ingredientKeys: ["amla", "methi"],
    related: ["grey-hair-oil", "curry-leaf-hair-oil", "amla-candy"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-18",
  },
  {
    kind: "beauty",
    key: "besan-face-pack",
    slug: "besan-face-pack-recipe",
    lang: "en",
    section: "beauty",
    categories: ["skin-care", "beauty-products"],
    tags: ["skincare"],
    keywords: ["besan", "face", "pack", "recipe"],
    title: "Besan Face Pack for Oily Skin — Gentle Recipe",
    seoTitle: "Besan Face Pack Recipe — Oily Skin Care",
    metaDescription:
      "A simple besan and turmeric face pack for oily skin, with patch-test steps, contamination warnings and realistic expectations.",
    summary: "Gram flour and a pinch of turmeric make a mild, cheap face pack — if you patch test and keep it fresh.",
    intro: [
      "Besan is a gentle physical exfoliant and absorbs some surface oil. It will not shrink pores, remove pigmentation or 'whiten' skin, and any recipe claiming that is wrong.",
      "This pack suits oily skin. Dry or sensitive skin should use it less often or skip it.",
    ],
    whatIs: [
      "A fresh paste of gram flour, a pinch of turmeric and water or curd, applied for ten minutes and rinsed off.",
    ],
    materials: [
      { item: "Gram flour (besan)", quantity: 2, unit: "tbsp" },
      { item: "Turmeric", quantity: 1, unit: "pinch" },
      { item: "Curd or water", quantity: 2, unit: "tbsp" },
    ],
    method: [
      { text: "Mix the besan and turmeric with curd or water to a thick, smooth paste with no lumps." },
      { text: "Wash your face and pat dry. Apply a thin layer, avoiding the eyes, lips and any broken skin." },
      { text: "Leave for 8–10 minutes — do not let it dry to a crack. Rinse with lukewarm water, using gentle circular motions." },
    ],
    usage: [
      "Once a week for oily skin; once a fortnight for combination skin.",
      "Follow with a plain moisturiser. Do not scrub afterwards.",
    ],
    evidence: [
      "No evidence that besan or turmeric lightens skin, and 'whitening' claims are both false and harmful. Turmeric has anti-inflammatory activity in laboratory work, not proven in a brief face pack.",
      "Gentle exfoliation can temporarily smooth the skin surface; over-scrubbing damages the skin barrier.",
    ],
    safety: [
      "Patch test: apply a small amount behind the ear or on the inner forearm and wait 24 hours.",
      "Make a fresh batch every time. A wet besan paste left at room temperature grows bacteria within hours.",
      "Turmeric stains skin, nails and fabric — use a tiny pinch and wear old clothes.",
      "Stop if you feel stinging, burning or see redness; rinse with cool water and moisturise.",
    ],
    whoShouldAsk: [
      "People with eczema, rosacea or acne cysts should ask a dermatologist before using exfoliating packs.",
      "Anyone using prescription retinoids or acids should not add a scrub-like pack without advice.",
      "Pregnant women should keep the routine simple and check new products.",
    ],
    storage: ["Do not store the mixed paste.", "Keep the dry besan in an airtight jar for up to 3 months."],
    faqs: [
      {
        question: "Does besan remove facial hair?",
        answer:
          "No. Besan cannot remove hair. Any apparent change is from temporary skin smoothing, not hair removal.",
      },
      {
        question: "Can I use it every day?",
        answer:
          "No. Physical exfoliation every day damages the skin barrier. Once a week is plenty for most people.",
      },
    ],
    references: [
      ref("fdaCosmetics", "Cosmetic safety and why 'natural' does not mean risk-free."),
      ref("nhsContactDermatitis", "Patch testing and recognising contact dermatitis."),
    ],
    ingredientKeys: ["besan", "haldi"],
    related: ["ubtan", "besan-laddu", "dandruff"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-08",
    updatedAt: "2026-11-18",
    featured: true,
  },
  {
    kind: "beauty",
    key: "ubtan",
    slug: "ubtan-recipe",
    lang: "en",
    section: "beauty",
    categories: ["skin-care", "beauty-products"],
    tags: ["skincare"],
    keywords: ["ubtan", "recipe"],
    title: "Ubtan: A Traditional Body Scrub Recipe",
    seoTitle: "Ubtan Recipe — Traditional Body Scrub",
    metaDescription:
      "Traditional ubtan recipe with besan, turmeric and sandalwood powder, with patch testing, allergy warnings and safe use for the body.",
    summary: "A festive body scrub of gram flour, turmeric and sandalwood — used gently, on the body rather than the face.",
    intro: [
      "Ubtan is a traditional scrub used before weddings and festivals. The classic mix is besan, turmeric and sandalwood powder, sometimes with milk or rose water.",
      "It is a scrub, not a bleach. It temporarily smooths and brightens the appearance of skin by removing dead cells; it does not change skin colour.",
    ],
    whatIs: [
      "A paste of gram flour, a pinch of turmeric and sandalwood powder, used on the body and rinsed off after a few minutes.",
    ],
    materials: [
      { item: "Gram flour (besan)", quantity: 3, unit: "tbsp" },
      { item: "Sandalwood powder", quantity: 1, unit: "tsp" },
      { item: "Turmeric", quantity: 1, unit: "pinch" },
      { item: "Milk or rose water", quantity: 3, unit: "tbsp" },
    ],
    method: [
      { text: "Mix the dry ingredients, then add milk or rose water to make a soft paste." },
      { text: "Apply to damp skin and massage very gently for 2 minutes — no hard scrubbing." },
      { text: "Rinse with lukewarm water and apply a plain moisturiser." },
    ],
    usage: [
      "Once a week at most, on the body rather than the face.",
      "Skip it on sunburnt, shaved, waxed or irritated skin.",
    ],
    evidence: [
      "Sandalwood powder is traditional and has a pleasant scent; there is no clinical evidence it treats pigmentation in a rinse-off scrub.",
      "The visible effect comes from exfoliation and from the milk's temporary smoothing, not from pigment change.",
    ],
    safety: [
      "Patch test on the inner forearm for 24 hours before using all over.",
      "Never mix a fresh paste in advance; bacteria multiply quickly in a wet flour mixture.",
      "Turmeric stains; use a tiny pinch and an old towel.",
      "Do not use on the face if you have acne, broken skin or a history of eczema.",
    ],
    whoShouldAsk: [
      "People with sensitive skin or a sandalwood allergy should avoid it.",
      "Anyone with a skin condition should confirm with a dermatologist before scrubbing.",
    ],
    storage: ["Make fresh each time.", "Keep the dry mix in an airtight jar for up to 2 months."],
    faqs: [
      {
        question: "Can ubtan lighten skin?",
        answer:
          "No. Skin colour is determined by melanin and genetics. Any 'lightening' is temporary exfoliation, and the claim should not be trusted.",
      },
      {
        question: "Is it safe before a wedding?",
        answer:
          "Only if you have patch tested it well in advance and your skin is not irritated. Never try a new scrub days before an event.",
      },
    ],
    references: [
      ref("fdaCosmetics", "Cosmetic safety and regulation of skin-lightening claims."),
      ref("nhsContactDermatitis", "How to patch test and spot allergic reactions."),
    ],
    ingredientKeys: ["besan", "haldi"],
    related: ["besan-face-pack", "besan-laddu", "garam-masala"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-08",
    updatedAt: "2026-11-18",
  },
  {
    kind: "homemade-product",
    key: "ghee",
    slug: "ghee-at-home-recipe",
    lang: "en",
    section: "homemade-products",
    categories: ["homemade-things"],
    tags: ["kitchen"],
    keywords: ["ghee", "at", "home", "recipe"],
    title: "Ghee at Home: Safe Method, Shelf Life and Storage",
    seoTitle: "How to Make Ghee at Home — Safe Method",
    metaDescription:
      "Make ghee from cream or butter at home: the slow simmer, how to tell it is ready, safe storage and a realistic shelf life.",
    summary: "A slow, patient simmer turns butter into ghee — with a clear readiness test and storage rules.",
    intro: [
      "Ghee is clarified butter: butter simmered until the water evaporates and the milk solids brown and settle. The result keeps far longer than butter at room temperature.",
      "The main risks are burning the solids and trapping moisture, which shortens shelf life.",
    ],
    whatIs: [
      "Butter heated slowly until the water boils off and the milk proteins brown, then strained. Homemade ghee has a nutty flavour and a high smoke point.",
    ],
    materials: [
      { item: "Unsalted butter", quantity: 500, unit: "g" },
      { item: "Clean muslin cloth", quantity: 1, unit: "piece" },
      { item: "Dry glass jar with lid", quantity: 1, unit: "piece" },
    ],
    method: [
      { text: "Melt the butter in a heavy pan on low heat. It will foam as the water boils off." },
      { text: "Keep the heat low and let the foam subside; the solids will turn golden brown and the liquid clear." },
      { text: "When the bubbling almost stops and you see golden particles at the bottom, switch off. Do not let the solids go dark brown." },
      { text: "Cool for 10 minutes, strain through dry muslin into a dry jar, and cover once fully cool." },
    ],
    usage: [
      "Use in cooking, on rotis or in traditional sweets. One teaspoon is roughly 45 kcal of fat.",
      "Keep the jar dry — a wet spoon introduces moisture and spoilage.",
    ],
    evidence: [
      "Ghee is almost pure fat, with small amounts of fat-soluble vitamins. It is not a health food and should be used in moderation; it is high in saturated fat.",
      "People with milk allergy should avoid ghee; it contains trace milk proteins unless highly clarified.",
    ],
    safety: [
      "Hot ghee can cause serious burns — keep children away from the stove and never add water to hot fat.",
      "Use only dry, clean jars and spoons. Moisture causes mould and rancidity.",
      "Discard ghee that smells sour, looks cloudy, or has visible growth.",
    ],
    whoShouldAsk: [
      "People with high cholesterol or heart disease should discuss fat intake with their clinician.",
      "Anyone with a dairy allergy should avoid ghee; lactose intolerance is usually tolerated but check individually.",
    ],
    storage: [
      "Airtight jar in a cool, dark cupboard for up to 3 months; refrigerated for up to 6 months.",
      "In hot, humid weather, refrigerate to prevent rancidity.",
    ],
    faqs: [
      {
        question: "How do I know the ghee is ready?",
        answer:
          "The bubbling slows, the liquid looks clear and golden, and browned milk solids sit at the bottom. If the solids are black, it has burned.",
      },
      {
        question: "Is homemade ghee healthier than butter?",
        answer:
          "It is concentrated fat with most water and milk solids removed. That makes it suitable for high-heat cooking, not a lower-calorie option.",
      },
    ],
    references: [
      ref("icmrDiet", "Guidance on dietary fat and moderation of saturated fat."),
      ref("fssai", "Safe household food preparation and storage practices."),
    ],
    ingredientKeys: ["ghee"],
    related: ["ghee-rice", "garam-masala", "atta-laddu"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-07",
    updatedAt: "2026-11-18",
  },
  {
    kind: "homemade-product",
    key: "garam-masala",
    slug: "garam-masala-recipe",
    lang: "en",
    section: "homemade-products",
    categories: ["homemade-things"],
    tags: ["kitchen"],
    keywords: ["garam", "masala", "recipe"],
    title: "Garam Masala at Home — Fresh, Balanced and Aromatic",
    seoTitle: "Garam Masala Recipe — Homemade Spice Blend",
    metaDescription:
      "A balanced homemade garam masala recipe with roasting times, grinding tips, storage and allergen notes for a fresher blend.",
    summary: "Whole spices roasted and ground in small batches — fresher and more fragrant than a stale packet.",
    intro: [
      "Garam masala is a finishing spice, not a cooking base. Grinding your own in small batches keeps the aroma that packets lose within weeks.",
      "The blend below is moderate and works for most north Indian dishes. Adjust the pepper and cardamom to taste.",
    ],
    whatIs: [
      "A roasted, ground blend of cinnamon, cardamom, cloves, black pepper, cumin, coriander and bay leaf.",
    ],
    materials: [
      { item: "Coriander seeds", quantity: 4, unit: "tbsp" },
      { item: "Cumin seeds", quantity: 2, unit: "tbsp" },
      { item: "Black peppercorns", quantity: 1, unit: "tbsp" },
      { item: "Green cardamom", quantity: 10, unit: "pods" },
      { item: "Cinnamon", quantity: 2, unit: "sticks" },
      { item: "Cloves", quantity: 8, unit: "pieces" },
      { item: "Bay leaf", quantity: 1, unit: "leaf" },
    ],
    method: [
      { text: "Dry-roast the coriander and cumin first on low heat until they smell nutty and begin to pop." },
      { text: "Add the pepper, cardamom, cinnamon, cloves and bay leaf and roast for 1–2 minutes more — do not let them darken." },
      { text: "Cool completely on a plate, then grind in small batches to a powder." },
      { text: "Sift if you want a finer texture and store in an airtight jar away from light." },
    ],
    usage: [
      "Add 1/2 to 1 teaspoon at the end of cooking, or sprinkle over finished dishes.",
      "Unlike turmeric or chilli, garam masala is aromatic and loses character if boiled for long.",
    ],
    evidence: [
      "No health claims are made here. Spices add flavour and can help reduce reliance on salt, which is a genuine benefit.",
      "Whole spices keep their aroma far longer than ground ones; buy small quantities.",
    ],
    safety: [
      "Hot spices can irritate reflux and mouth ulcers — use less if you are sensitive.",
      "Check for allergens: mustard is not in this blend, but cross-contact in a shared grinder is possible.",
      "Do not store a warm powder in a sealed jar; condensation causes clumping and mould.",
    ],
    whoShouldAsk: [
      "People with reflux, gastritis or ulcers may need a milder blend.",
      "Anyone with a spice allergy should grind separately to avoid cross-contact.",
    ],
    storage: [
      "Airtight jar in a dark cupboard for up to 6 months.",
      "Replace when the aroma fades — a stale blend adds colour but no flavour.",
    ],
    faqs: [
      {
        question: "Can I skip roasting?",
        answer:
          "You can, but roasting drives off moisture and develops aroma. The blend will taste flatter without it.",
      },
      {
        question: "Why does my garam masala taste bitter?",
        answer:
          "The spices were roasted too hot or for too long. Roast on low heat and stop as soon as they smell fragrant.",
      },
    ],
    references: [
      ref("fssai", "Household spice handling and hygiene practices."),
      ref("icmrDiet", "Using spices to reduce salt while keeping flavour."),
    ],
    ingredientKeys: ["haldi"],
    related: ["ghee", "masala-chaas", "panjeeri"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-07",
    updatedAt: "2026-11-18",
  },
  {
    kind: "household",
    key: "natural-cleaning",
    slug: "natural-cleaning-guide",
    lang: "en",
    section: "household-tips",
    categories: ["natural-cleaning"],
    tags: ["home"],
    keywords: ["natural", "cleaning", "guide"],
    title: "Natural Cleaning at Home — What Works and What Is Dangerous",
    seoTitle: "Natural Cleaning Guide — Safe Combinations",
    metaDescription:
      "Vinegar, baking soda and lemon for cleaning: what works, what does not, and the dangerous combinations to never mix, including bleach and acids.",
    summary:
      "Vinegar and baking soda do clean some surfaces — but some popular combinations are useless and a few are dangerous.",
    intro: [
      "Natural cleaning is mostly about surfactants, acids and abrasives. Vinegar is a mild acid, baking soda a mild abrasive, and soap does the actual cleaning in most cases.",
      "The important rule is chemical safety: never mix bleach with acids, ammonia or vinegar, and never mix hydrogen peroxide with vinegar in one container.",
    ],
    whatIs: [
      "Household cleaning with vinegar, baking soda, soap and lemon. Effective for light limescale, grease and deodorising; not a substitute for disinfectants in high-risk situations.",
    ],
    usage: [
      "Limescale on taps: spray with a 1:1 white vinegar and water solution, leave 10 minutes, wipe.",
      "Sink and drain smell: pour half a cup of baking soda, then a cup of vinegar, wait 15 minutes, flush with hot water.",
      "Glass: dilute vinegar works, but avoid it on natural stone, marble and aluminium.",
    ],
    evidence: [
      "Vinegar has some antimicrobial activity against common bacteria but is not a hospital-grade disinfectant and does not kill all pathogens.",
      "Baking soda deodorises and mildly abrades; it does not 'absorb' odours from the air in a fridge unless surfaces are cleaned.",
    ],
    safety: [
      "NEVER mix bleach with vinegar, lemon juice, toilet cleaner or any acid — it releases chlorine gas, which can be fatal.",
      "NEVER mix bleach with ammonia (some glass cleaners) — it produces toxic chloramine vapour.",
      "Never mix hydrogen peroxide and vinegar in the same container; peracetic acid forms and irritates the lungs.",
      "Do not use vinegar on natural stone, marble, granite or aluminium — it etches or corrodes them.",
      "Keep all cleaning chemicals out of reach of children and never store them in drinks bottles.",
    ],
    whoShouldAsk: [
      "People with asthma or chemical sensitivity should ventilate well and avoid strong-smelling mixtures.",
      "Households with infants or pets should avoid essential-oil sprays and keep floors rinsed.",
      "For mould over a large area or after flooding, use professional help rather than home mixtures.",
    ],
    storage: [
      "Store vinegar solutions in labelled spray bottles, never in food containers.",
      "Make small batches; vinegar solutions lose strength and can grow bacteria if diluted with dirty water.",
    ],
    faqs: [
      {
        question: "Does vinegar disinfect everything?",
        answer:
          "No. It reduces some bacteria on clean surfaces but is not a reliable disinfectant for viruses or for food-contact surfaces after raw meat.",
      },
      {
        question: "Is baking soda and vinegar a good cleaner?",
        answer:
          "They fizz and can loosen grime, but they largely neutralise each other. Use baking soda as an abrasive, then vinegar separately for limescale.",
      },
    ],
    references: [
      ref("epaSaferChoice", "Safer cleaning product choices and safe use guidance."),
      ref("whoFoodSafety", "Cleaning and sanitising surfaces that contact food."),
    ],
    ingredientKeys: [],
    related: ["fridge-odour", "monsoon-food-hygiene"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-18",
  },
  {
    kind: "household",
    key: "fridge-odour",
    slug: "fridge-odour-guide",
    lang: "en",
    section: "household-tips",
    categories: ["natural-cleaning"],
    tags: ["home"],
    keywords: ["fridge", "odour", "guide"],
    title: "Fridge Odour: Find the Cause, Then Clean It Properly",
    seoTitle: "How to Remove Fridge Odour — Safe Cleaning",
    metaDescription:
      "Remove fridge smell by finding the source, cleaning shelves and seals safely, and storing food correctly. Includes food-safety guidance.",
    summary: "A smelly fridge is a food-safety signal, not just a nuisance. Clean the source, not the air.",
    intro: [
      "Most fridge odours come from spoiled food, spills under shelves, or a dirty door seal. Air fresheners and baking-soda boxes mask the smell without fixing it.",
      "A fridge that stays above 5°C lets bacteria multiply faster and makes odours worse. Check the temperature first.",
    ],
    whatIs: [
      "A cleaning routine: remove spoiled food, wash shelves and drawers with hot soapy water, clean the seal, and dry everything before restocking.",
    ],
    usage: [
      "Empty one shelf at a time so food stays cold. Discard anything mouldy or past its date.",
      "Wash removable shelves and drawers in hot soapy water, rinse and dry fully.",
      "Wipe the door seal with a dilute vinegar solution and dry it — this is a common hidden source.",
      "Leave an open box of baking soda in the fridge to absorb mild odours, and replace it monthly.",
    ],
    evidence: [
      "Cleaning removes the source of odour; baking soda absorbs some volatile compounds but does not sanitise.",
      "Keeping the fridge at 4°C or below slows bacterial growth and is the single most effective measure.",
    ],
    safety: [
      "Do not mix bleach with vinegar or other cleaners inside the fridge.",
      "Never use hot water on cold glass shelves — thermal shock can shatter them.",
      "Do not refreeze food that has thawed during a long power cut or a warm fridge.",
      "Throw away food with an off smell, slime or mould; do not try to 'save' it.",
    ],
    whoShouldAsk: [
      "Pregnant women, older adults and anyone immunocompromised should be strict about discarding suspect food.",
      "If the fridge cannot hold 4°C, get it serviced rather than adding more air freshener.",
    ],
    storage: [
      "Store cooked food covered and label leftovers with the date.",
      "Keep raw meat on the bottom shelf in a sealed container so drips cannot contaminate ready-to-eat food.",
    ],
    faqs: [
      {
        question: "Does baking soda remove fridge smell?",
        answer:
          "It absorbs some odours if the fridge is already clean. It will not fix a spill or spoiled food you have not removed.",
      },
      {
        question: "How often should I clean the fridge?",
        answer:
          "Wipe spills immediately, check for spoiled food weekly and deep clean shelves and seals monthly.",
      },
    ],
    references: [
      ref("nhsFoodStorage", "Refrigeration temperatures and safe food storage."),
      ref("whoFoodSafety", "Preventing cross-contamination in cold storage."),
    ],
    ingredientKeys: [],
    related: ["natural-cleaning", "monsoon-food-hygiene"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-18",
  },
];
