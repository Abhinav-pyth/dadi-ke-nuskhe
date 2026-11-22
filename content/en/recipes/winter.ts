import { ref } from "@/content/references";
import type { RecipeEntry } from "@/lib/types";

/**
 * Winter laddu and ladoo-adjacent recipes.
 * Quantities are numeric so the serving calculator can scale them.
 */
export const winterRecipes: RecipeEntry[] = [
  {
    kind: "recipe",
    key: "gond-ke-laddu",
    slug: "gond-ke-laddu-recipe",
    lang: "en",
    section: "recipes",
    title: "Gond Ke Laddu (Edible Gum Laddu) — Traditional Winter Recipe",
    seoTitle: "Gond Ke Laddu Recipe — Traditional Edible Gum Laddu",
    metaDescription:
      "Step-by-step gond ke laddu recipe with exact measurements, edible gum safety notes, storage advice and a serving calculator for winter gifting.",
    summary:
      "A slow-roasted winter laddu made with edible gum, whole wheat flour, ghee and jaggery — with careful notes on preparing the gum safely.",
    intro: [
      "Gond ke laddu is one of the winter preparations Indian families make in large batches: edible gum is puffed in hot ghee, mixed with roasted atta and jaggery, and rolled while still warm.",
      "Edible gum expands dramatically in hot fat, so the pan must be deep and the heat moderate. This page gives the proportions we actually use, plus the safety points that matter more than the recipe itself.",
    ],
    categories: ["desi-recipes", "winter-sweets", "sweets-snacks"],
    tags: ["winter", "sweets", "festival"],
    keywords: ["gond ke laddu", "edible gum laddu", "winter laddu recipe", "gond laddu recipe"],
    cuisine: "North Indian",
    prepMinutes: 20,
    cookMinutes: 30,
    servings: 12,
    yieldLabel: "12 laddus of about 40 g",
    difficulty: "medium",
    ingredients: [
      { item: "Edible gum (gond)", quantity: 100, unit: "g" },
      { item: "Ghee", quantity: 150, unit: "g", note: "plus 2 tsp for frying" },
      { item: "Whole wheat flour (atta)", quantity: 250, unit: "g" },
      { item: "Jaggery, grated", quantity: 200, unit: "g" },
      { item: "Semolina (sooji)", quantity: 50, unit: "g" },
      { item: "Almonds, chopped", quantity: 40, unit: "g" },
      { item: "Cashews, chopped", quantity: 30, unit: "g" },
      { item: "Melon seeds (magaz)", quantity: 20, unit: "g" },
      { item: "Green cardamom powder", quantity: 0.5, unit: "tsp" },
      { item: "Poppy seeds", quantity: 1, unit: "tsp", note: "optional" },
    ],
    steps: [
      {
        text: "Heat 2 teaspoons of ghee in a deep, heavy pan on medium heat. Add the edible gum in small batches — it puffs within seconds and can spit hot fat.",
        tip: "Use a splatter guard and keep children away from the stove while the gum is frying.",
      },
      {
        text: "Fry the puffed gum for 20–30 seconds until it turns pale and crisp, then transfer to a plate. Cool completely and crush coarsely with a rolling pin or in a mixer on pulse.",
        tip: "If a piece stays hard and translucent, it has not puffed through — discard it rather than adding it to the laddu.",
      },
      {
        text: "Roast the semolina in 1 teaspoon of ghee until it smells nutty, then set aside. In the same pan, roast the wheat flour in the remaining ghee on low heat for 12–15 minutes, until it darkens slightly and smells cooked.",
        tip: "Low and slow is essential: flour roasted quickly tastes raw inside the laddu.",
      },
      {
        text: "Lightly toast the almonds, cashews and melon seeds in the same pan for 2 minutes, then add them to the roasted flour with the semolina, cardamom and poppy seeds.",
      },
      {
        text: "Melt the grated jaggery with 2 tablespoons of water on low heat until it dissolves, then strain out any grit. Pour the hot jaggery syrup into the flour mixture and mix thoroughly.",
      },
      {
        text: "While the mixture is warm but comfortable to handle, take small portions, press them into a ball and roll firmly. Cool completely on a tray before storing.",
        tip: "If the mixture crumbles, return it to low heat for a minute with a spoon of warm ghee.",
      },
    ],
    tips: [
      "Grate jaggery rather than chopping it; it melts evenly and does not burn.",
      "Roast the flour a day ahead if you are making a large batch for gifting.",
      "Warm the mixture slightly if it stiffens before you finish rolling.",
    ],
    mistakes: [
      "Frying gond on high heat, which burns the outside while the centre stays hard.",
      "Adding jaggery syrup to cold flour — the mixture will not bind and the laddu will crumble.",
      "Packing laddus while still warm, which traps steam and makes them soft and sticky.",
    ],
    storage: [
      "Cool completely, then store in an airtight steel or glass container with a piece of butter paper between layers.",
      "At room temperature in a dry climate, expect 2–3 weeks. In humid weather, refrigerate and bring to room temperature before eating.",
      "Discard any laddu that smells rancid or shows mould — ghee and nuts can turn quickly in heat.",
    ],
    substitutions: [
      "Replace some jaggery with dates purée for a softer, less sweet laddu; reduce the syrup accordingly.",
      "Use almonds only if cashews are unavailable — the total nut weight matters more than the mix.",
    ],
    allergens: ["Contains gluten (wheat flour), dairy (ghee) and tree nuts. Edible gum is a plant resin and may rarely cause reactions."],
    nutritionNote:
      "This is an energy-dense winter sweet: roughly 200–230 kcal per 40 g laddu, mostly from ghee, jaggery and nuts. Those figures are estimates from ingredient weights, not a laboratory analysis. One or two laddus a day is a realistic portion for most adults.",
    safetyNotes: [
      "Edible gum can be a choking hazard for young children — do not give whole or coarsely crushed pieces to children under five.",
      "People with diabetes should treat this as a high-sugar food and discuss portions with their clinician.",
    ],
    faqs: [
      {
        question: "Can I make gond ke laddu without ghee?",
        answer:
          "The gum needs hot fat to puff, and ghee is what gives the laddu its texture and keeping quality. A neutral oil can puff the gum, but the flavour and shelf life will be noticeably different.",
      },
      {
        question: "Why did my laddu turn hard?",
        answer:
          "Usually the jaggery was overcooked to a hard-ball stage, or the mixture cooled too much before rolling. Melt the jaggery only until it dissolves, and roll while the mixture is still warm.",
      },
      {
        question: "How long do gond ke laddu last?",
        answer:
          "Two to three weeks in an airtight container in a dry climate. Refrigerate in humid weather; ghee-based sweets absorb moisture and can spoil quietly.",
      },
    ],
    references: [
      ref("icmrDiet", "Guidance to limit added sugar and fat in traditional sweets and to keep portions modest."),
      ref("fssai", "General food hygiene and safe handling practices while preparing sweets at home."),
      ref("nhsFoodStorage", "Storing cooked and fat-rich foods safely to limit spoilage."),
    ],
    ingredientKeys: ["gond", "ghee"],
    related: ["methi-ke-laddu", "atta-laddu", "panjeeri", "garam-masala"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-12",
    updatedAt: "2026-11-19",
    featured: true,
  },
  {
    kind: "recipe",
    key: "methi-ke-laddu",
    slug: "methi-laddu-recipe",
    lang: "en",
    section: "recipes",
    title: "Methi Ke Laddu (Fenugreek Laddu) — Bitter-Sweet Winter Classic",
    seoTitle: "Methi Ke Laddu Recipe — Fenugreek Laddu for Winter",
    metaDescription:
      "How to make methi ke laddu with fenugreek seeds, atta, ghee and jaggery, including how to control bitterness and safe portions during winter.",
    summary:
      "Fenugreek seeds give these winter laddus their distinctive bitterness and warmth; the trick is roasting them properly and keeping the portion small.",
    intro: [
      "Methi ke laddu are made in many north Indian homes once the weather turns cold. The seeds are soaked, ground and roasted with flour until the raw bitterness softens into something warm and malty.",
      "Fenugreek is a strong-tasting ingredient and a little goes a long way. This recipe keeps the proportion conservative so the laddus stay pleasant to eat every day.",
    ],
    categories: ["desi-recipes", "winter-sweets", "sweets-snacks"],
    tags: ["winter", "sweets", "healthy"],
    keywords: ["methi laddu", "fenugreek laddu", "methi ke laddu recipe", "winter laddu"],
    cuisine: "North Indian",
    prepMinutes: 25,
    cookMinutes: 30,
    servings: 12,
    yieldLabel: "12 small laddus",
    difficulty: "medium",
    ingredients: [
      { item: "Fenugreek seeds (methi)", quantity: 40, unit: "g" },
      { item: "Whole wheat flour (atta)", quantity: 250, unit: "g" },
      { item: "Ghee", quantity: 130, unit: "g" },
      { item: "Jaggery, grated", quantity: 180, unit: "g" },
      { item: "Semolina (sooji)", quantity: 40, unit: "g" },
      { item: "Almonds, chopped", quantity: 30, unit: "g" },
      { item: "Cardamom powder", quantity: 0.5, unit: "tsp" },
      { item: "Warm milk", quantity: 2, unit: "tbsp", note: "only if needed" },
    ],
    steps: [
      {
        text: "Rinse the fenugreek seeds, soak them in two cups of water for 4–6 hours, then drain and pat dry. Spread them on a cloth for 20 minutes so they roast evenly.",
      },
      {
        text: "Dry-roast the seeds on low heat for 4–5 minutes until they smell nutty and lose the raw green smell. Cool, then grind coarsely — a little texture is good.",
      },
      {
        text: "Roast the semolina in one teaspoon of ghee until light golden and set aside.",
        tip: "Roasting the semolina separately keeps the flour from becoming dense.",
      },
      {
        text: "Roast the wheat flour in the remaining ghee on low heat for 12–14 minutes. Add the ground fenugreek in the last three minutes so it cooks without scorching.",
      },
      {
        text: "Melt the jaggery with two tablespoons of water, strain, and pour into the warm flour along with the semolina, almonds and cardamom. Mix well.",
      },
      {
        text: "Roll into small laddus while warm — about 35 g each. If the mixture feels dry, add warm milk a teaspoon at a time.",
      },
    ],
    tips: [
      "Smaller laddus suit fenugreek's strong flavour better than large ones.",
      "Soaking removes some surface bitterness; do not skip it.",
      "A pinch of salt balances the jaggery and makes the methi taste less sharp.",
    ],
    mistakes: [
      "Using unsoaked seeds, which makes the laddu harsh and bitter.",
      "Adding too much fenugreek — more than about 15% of the flour weight overwhelms the sweet.",
      "Rolling too tightly while hot, which makes the outside hard.",
    ],
    storage: [
      "Airtight container at room temperature for 2 weeks in dry weather.",
      "Refrigerate in humid months and finish within a month.",
    ],
    substitutions: [
      "Use 30 g fenugreek with 20 g flaxseed for a milder version.",
      "Date syrup can replace jaggery, but reduce the milk to keep the mixture firm.",
    ],
    allergens: ["Contains gluten and dairy; may contain tree nuts."],
    nutritionNote:
      "Each 35 g laddu supplies roughly 170 kcal. Fenugreek is a flavouring ingredient here, not a medicine — the amount in one laddu is far below any studied therapeutic dose.",
    safetyNotes: [
      "Fenugreek may lower blood sugar; people on diabetes medication should ask their clinician before eating these daily.",
      "Avoid fenugreek-heavy foods during pregnancy in medicinal amounts; culinary portions in a laddu are generally small, but check with your clinician.",
    ],
    faqs: [
      {
        question: "Does methi laddu help with joint pain?",
        answer:
          "There is no reliable clinical evidence that a laddu treats joint pain. Fenugreek has been studied for several conditions, but a sweet eaten in small amounts is not a treatment. See a clinician for persistent joint pain.",
      },
      {
        question: "Can I skip soaking the methi?",
        answer:
          "You can, but the laddus will be noticeably more bitter and harder to digest. Soaking for four to six hours is worth the wait.",
      },
    ],
    references: [
      ref("nccihHerbs", "General caution that traditional herbs have limited evidence and can interact with medicines."),
      ref("icmrDiet", "Guidance on moderate added sugar and fat in traditional sweets."),
    ],
    ingredientKeys: ["methi", "ghee"],
    related: ["gond-ke-laddu", "atta-laddu", "panjeeri", "methi-hair-mask"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-12",
    updatedAt: "2026-11-18",
  },
  {
    kind: "recipe",
    key: "atta-laddu",
    slug: "atta-laddu-recipe",
    lang: "en",
    section: "recipes",
    title: "Atta Laddu — Simple Whole Wheat Laddus with Ghee and Jaggery",
    seoTitle: "Atta Laddu Recipe — Whole Wheat Jaggery Laddu",
    metaDescription:
      "An easy atta laddu recipe with whole wheat flour, ghee and jaggery. Includes roasting times, binding tips and storage advice for beginners.",
    summary:
      "The simplest of the winter sweets: roasted whole wheat flour, ghee and jaggery, rolled warm. A good first laddu recipe.",
    intro: [
      "Atta laddu needs four ingredients and patience with the roasting. There is no gum to fry and no syrup to judge — just flour taken slowly to a deep, nutty brown.",
      "It is the recipe we recommend to someone making laddus for the first time, because the mixture tells you when it is ready: it holds together when pressed and smells like toasted wheat.",
    ],
    categories: ["desi-recipes", "winter-sweets", "sweets-snacks"],
    tags: ["winter", "sweets"],
    keywords: ["atta laddu", "wheat laddu recipe", "gud atta laddu", "easy laddu recipe"],
    cuisine: "North Indian",
    prepMinutes: 10,
    cookMinutes: 25,
    servings: 10,
    yieldLabel: "10 laddus of about 40 g",
    difficulty: "easy",
    ingredients: [
      { item: "Whole wheat flour (atta)", quantity: 250, unit: "g" },
      { item: "Ghee", quantity: 120, unit: "g" },
      { item: "Jaggery, grated", quantity: 150, unit: "g" },
      { item: "Cardamom powder", quantity: 0.5, unit: "tsp" },
      { item: "Almonds, chopped", quantity: 25, unit: "g", note: "optional" },
      { item: "Warm milk", quantity: 2, unit: "tbsp", note: "if needed" },
    ],
    steps: [
      {
        text: "Heat the ghee in a heavy pan on low heat, add the flour and stir continuously with a spatula.",
        tip: "A heavy pan and a low flame prevent the flour from catching at the bottom.",
      },
      {
        text: "Roast for 15–18 minutes until the flour turns medium brown and smells nutty. Do not rush this stage.",
      },
      {
        text: "Add the almonds and cardamom, stir for a minute, then take the pan off the heat and let it cool for 3–4 minutes.",
      },
      {
        text: "Melt the jaggery with two tablespoons of water on low heat, strain it, and pour it into the warm flour. Mix quickly and thoroughly.",
      },
      {
        text: "While warm, press small portions into balls. If the mixture crumbles, add warm milk one teaspoon at a time or a little warm ghee.",
      },
      {
        text: "Cool completely on a plate before storing so no steam is trapped.",
      },
    ],
    tips: [
      "Grind coarse jaggery rather than using blocks — it dissolves faster and strains cleanly.",
      "Roast in two batches if your pan is small; overcrowding steams the flour instead of roasting it.",
    ],
    mistakes: [
      "Under-roasting, which leaves a raw flour taste that no amount of jaggery hides.",
      "Adding all the ghee at once at the start — reserve a spoonful to adjust the binding at the end.",
    ],
    storage: [
      "Airtight container for 2 weeks at room temperature.",
      "Refrigerate in humid weather and consume within a month.",
    ],
    substitutions: [
      "Replace 50 g of atta with ragi or bajra flour for a earthier flavour (add 1 tablespoon more ghee).",
      "Use powdered sugar instead of jaggery for a lighter-coloured laddu, but add it off the heat.",
    ],
    allergens: ["Contains gluten and dairy; may contain tree nuts."],
    nutritionNote:
      "About 180 kcal per laddu, mostly from ghee and jaggery. These are estimates from ingredient weights, not a laboratory analysis.",
    safetyNotes: [
      "Jaggery is still sugar: people with diabetes should keep portions small and account for it.",
      "Hot ghee and flour can splatter — keep the pan handle turned inward and children away.",
    ],
    faqs: [
      {
        question: "Why is my atta laddu cracking?",
        answer:
          "The mixture is too dry or has cooled too far. Return it to low heat with a spoon of ghee or warm milk, mix, and roll again while warm.",
      },
      {
        question: "Can I use oil instead of ghee?",
        answer:
          "You can, but ghee gives the characteristic flavour and firmness. Oil laddus soften faster and keep for less time.",
      },
    ],
    references: [
      ref("icmrDiet", "Guidance on moderating added sugar and fat in traditional sweets."),
      ref("nhsFoodStorage", "Safe storage of fat-rich home-made sweets."),
    ],
    ingredientKeys: ["ghee"],
    related: ["besan-laddu", "gond-ke-laddu", "panjeeri"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-13",
    updatedAt: "2026-11-18",
  },
  {
    kind: "recipe",
    key: "til-gud-laddu",
    slug: "til-gud-laddu-recipe",
    lang: "en",
    section: "recipes",
    title: "Til Gud Laddu — Sesame and Jaggery Laddus for Makar Sankranti",
    seoTitle: "Til Gud Laddu Recipe — Sesame Jaggery Laddu",
    metaDescription:
      "Classic til gud laddu recipe with toasted sesame, jaggery syrup and cardamom, plus notes on the syrup stage and sesame allergy warnings.",
    summary:
      "Toasted sesame bound with a soft jaggery syrup — the Sankranti sweet that keeps for weeks if the syrup is cooked correctly.",
    intro: [
      "Til gud laddu are made across northern and western India for Makar Sankranti. The method is short, but the jaggery syrup stage decides whether you get a soft laddu or a hard disc.",
      "We use a 1:1 ratio of sesame to jaggery by weight and cook the syrup only to a soft thread, which keeps the laddu chewy rather than brittle.",
    ],
    categories: ["desi-recipes", "winter-sweets", "sweets-snacks", "festival-recipes"],
    tags: ["winter", "sweets", "festival"],
    keywords: ["til gud laddu", "sesame jaggery laddu", "makar sankranti recipe", "tilache ladu"],
    cuisine: "Indian",
    prepMinutes: 10,
    cookMinutes: 15,
    servings: 12,
    yieldLabel: "12 small laddus",
    difficulty: "easy",
    ingredients: [
      { item: "White sesame seeds (til)", quantity: 200, unit: "g" },
      { item: "Jaggery, grated", quantity: 180, unit: "g" },
      { item: "Ghee", quantity: 1, unit: "tbsp" },
      { item: "Cardamom powder", quantity: 0.5, unit: "tsp" },
      { item: "Roasted peanuts, crushed", quantity: 30, unit: "g", note: "optional" },
    ],
    steps: [
      {
        text: "Dry-roast the sesame on low heat for 4–5 minutes, stirring constantly, until it starts popping and smells toasted. Tip onto a plate to cool.",
        tip: "Sesame burns in seconds — take it off the heat when it is one shade darker than raw.",
      },
      {
        text: "Grease a plate and your palms lightly with ghee.",
      },
      {
        text: "Melt the jaggery with two tablespoons of water on low heat. Cook for 4–5 minutes until a drop placed in cold water forms a soft, pliable ball.",
        tip: "If the syrup hardens immediately in cold water, it has gone too far; add a spoon of water and lower the heat.",
      },
      {
        text: "Turn off the heat, add the sesame, peanuts and cardamom, and stir fast so everything is coated.",
      },
      {
        text: "While the mixture is still warm, scoop small portions and press into balls. Work quickly — jaggery stiffens as it cools.",
      },
      {
        text: "Cool completely, then store with butter paper between layers.",
      },
    ],
    tips: [
      "Toast extra sesame and keep it ready before you start the syrup.",
      "Wear thin cotton gloves if the mixture is too hot to handle.",
    ],
    mistakes: [
      "Cooking the jaggery to a hard-ball stage, which makes the laddu brittle.",
      "Adding cold sesame to hot syrup, which sets before it can be mixed.",
    ],
    storage: [
      "Airtight container for 3 weeks in dry weather.",
      "In humid conditions the jaggery draws moisture and the laddus soften — refrigerate and consume within 2 weeks.",
    ],
    substitutions: [
      "Use half sesame and half crushed peanuts for a chunkier texture.",
      "Date syrup works but produces a softer laddu that keeps for less time.",
    ],
    allergens: ["Contains sesame and may contain peanuts — both are common allergens. Contains dairy."],
    nutritionNote:
      "Sesame is a good source of calcium and healthy fats, but the jaggery makes this a sugar-rich sweet: roughly 150 kcal per small laddu. Estimates only.",
    safetyNotes: [
      "Sesame is a declared allergen in many countries — label home-made boxes you gift.",
      "Jaggery syrup reaches high temperatures; keep children away while it cooks.",
    ],
    faqs: [
      {
        question: "Why did my til gud laddu become hard?",
        answer:
          "The syrup was cooked past the soft-ball stage. Next time, test a drop in cold water: it should feel pliable, not brittle.",
      },
      {
        question: "Can I make these without jaggery?",
        answer:
          "You can use sugar, but the flavour and colour will differ and the mixture sets harder. Jaggery is traditional for a reason.",
      },
    ],
    references: [
      ref("icmrDiet", "Moderation of added sugar in traditional festival sweets."),
      ref("fssai", "Allergen awareness and hygienic preparation of home-made sweets."),
    ],
    ingredientKeys: ["til", "ghee"],
    related: ["gond-ke-laddu", "besan-laddu", "gajar-ka-halwa"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-13",
    updatedAt: "2026-11-18",
  },
  {
    kind: "recipe",
    key: "besan-laddu",
    slug: "besan-laddu-recipe",
    lang: "en",
    section: "recipes",
    title: "Besan Laddu — Gram Flour Laddus with Ghee",
    seoTitle: "Besan Laddu Recipe — Soft Gram Flour Laddu",
    metaDescription:
      "Soft besan laddu recipe with roasted gram flour, ghee and sugar, including how to tell when the besan is fully roasted and how to store it.",
    summary:
      "Roasted gram flour, ghee and sugar — the Diwali classic. The whole recipe hinges on roasting the besan patiently until the raw taste disappears.",
    intro: [
      "Besan laddu is the most forgiving of the laddu family once you understand one rule: the besan must be roasted until it is fragrant and flows like sand, not until it merely changes colour.",
      "This version uses powdered sugar rather than syrup, which gives the soft, melt-in-the-mouth texture most families expect.",
    ],
    categories: ["desi-recipes", "sweets-snacks", "festival-recipes"],
    tags: ["sweets", "festival"],
    keywords: ["besan laddu", "besan ke laddoo", "diwali laddu recipe", "gram flour laddu"],
    cuisine: "Indian",
    prepMinutes: 10,
    cookMinutes: 25,
    servings: 14,
    yieldLabel: "14 laddus of about 30 g",
    difficulty: "easy",
    ingredients: [
      { item: "Gram flour (besan)", quantity: 250, unit: "g" },
      { item: "Ghee", quantity: 130, unit: "g" },
      { item: "Powdered sugar", quantity: 150, unit: "g" },
      { item: "Green cardamom powder", quantity: 1, unit: "tsp" },
      { item: "Chopped almonds", quantity: 20, unit: "g", note: "optional" },
    ],
    steps: [
      {
        text: "Sift the besan to remove lumps. Heat the ghee in a heavy pan on low heat and add the besan.",
      },
      {
        text: "Roast on low heat for 18–20 minutes, stirring continuously and scraping the base of the pan.",
        tip: "The besan is ready when it turns a warm golden colour, smells nutty and loosens from the pan.",
      },
      {
        text: "Take the pan off the heat and let the mixture cool until it is warm but no longer hot — about 10 minutes.",
      },
      {
        text: "Add the powdered sugar, cardamom and almonds, and mix until evenly combined.",
      },
      {
        text: "Press small portions into balls. If the mixture will not hold, add a teaspoon of warm ghee.",
      },
      {
        text: "Cool completely and store in an airtight jar.",
      },
    ],
    tips: [
      "Sifting removes lumps that otherwise stay raw inside the laddu.",
      "Add sugar only when the mixture is warm — hot ghee makes the sugar melt and the laddu weep.",
    ],
    mistakes: [
      "Under-roasting the besan, which leaves a bitter raw taste.",
      "Adding sugar while the mixture is still very hot, causing a sticky, wet texture.",
    ],
    storage: [
      "Airtight container for 2 weeks at room temperature.",
      "Refrigerate in humid weather; bring to room temperature before serving.",
    ],
    substitutions: [
      "Use boora (tagar) sugar for a more traditional texture if you can find it.",
      "Replace 20% of the besan with milk powder for a richer laddu (reduce the ghee slightly).",
    ],
    allergens: ["Contains chickpea flour and dairy; may contain tree nuts."],
    nutritionNote:
      "About 150 kcal per 30 g laddu. Estimates based on ingredient weights; the sugar and ghee dominate the calorie count.",
    safetyNotes: [
      "Keep the heat low: besan can scorch at the base and the burnt taste spreads through the whole batch.",
      "Very young children should not be given dense, dry sweets that can crumble and cause choking.",
    ],
    faqs: [
      {
        question: "How do I know the besan is roasted enough?",
        answer:
          "Colour alone is unreliable. Smell and texture are better guides: it should smell like roasted nuts and slide off the spatula without sticking.",
      },
      {
        question: "Can I use jaggery instead of sugar?",
        answer:
          "Yes. Melt grated jaggery into the warm mixture or add powdered jaggery; the laddu will be darker and slightly softer.",
      },
    ],
    references: [
      ref("icmrDiet", "Moderating added sugar and fat in traditional sweets."),
      ref("fssai", "Hygienic preparation and storage of home-made sweets."),
    ],
    ingredientKeys: ["besan", "ghee"],
    related: ["atta-laddu", "gond-ke-laddu", "besan-face-pack"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-14",
    updatedAt: "2026-11-19",
  },
  {
    kind: "recipe",
    key: "panjeeri",
    slug: "panjeeri-recipe",
    lang: "en",
    section: "recipes",
    title: "Panjeeri — Traditional Postpartum and Winter Nutrition Mix",
    seoTitle: "Panjeeri Recipe — Traditional Winter Nutrition Mix",
    metaDescription:
      "Authentic panjeeri recipe with atta, ghee, nuts, seeds and jaggery, plus honest notes on its traditional role and realistic portions.",
    summary:
      "A roasted flour, nut and seed mix traditionally given in winter and after childbirth — nutrient-dense, and easy to over-eat.",
    intro: [
      "Panjeeri is a coarse, roasted mixture of flour, ghee, nuts, seeds and jaggery. In many families it is made for new mothers and for the cold months, when extra energy and warmth are welcome.",
      "It is a food, not a supplement or a treatment. It is calorie-dense, so a small bowl is a portion — not a snack you finish by the handful.",
    ],
    categories: ["desi-recipes", "winter-sweets", "healthy-diet", "kids-recipes"],
    tags: ["winter", "healthy", "kids"],
    keywords: ["panjeeri recipe", "panjiri", "postpartum nutrition mix", "winter nutrition"],
    cuisine: "North Indian",
    prepMinutes: 15,
    cookMinutes: 25,
    servings: 20,
    yieldLabel: "About 20 servings of 30 g",
    difficulty: "medium",
    ingredients: [
      { item: "Whole wheat flour (atta)", quantity: 200, unit: "g" },
      { item: "Ghee", quantity: 100, unit: "g" },
      { item: "Jaggery, grated", quantity: 120, unit: "g" },
      { item: "Almonds", quantity: 40, unit: "g" },
      { item: "Cashews", quantity: 30, unit: "g" },
      { item: "Pistachios", quantity: 20, unit: "g" },
      { item: "Flaxseed (alsi), ground", quantity: 30, unit: "g" },
      { item: "Melon seeds (magaz)", quantity: 20, unit: "g" },
      { item: "Edible gum (gond), puffed and crushed", quantity: 30, unit: "g", note: "optional" },
      { item: "Cardamom powder", quantity: 1, unit: "tsp" },
      { item: "Ginger powder (sonth)", quantity: 0.5, unit: "tsp" },
    ],
    steps: [
      {
        text: "Chop the almonds, cashews and pistachios coarsely. Dry-roast the nuts and melon seeds on low heat for 3 minutes and set aside.",
        tip: "Keep the heat low — nuts go from toasted to burnt very quickly.",
      },
      {
        text: "If using gond, fry it in a teaspoon of ghee until puffed, cool and crush coarsely.",
      },
      {
        text: "Roast the wheat flour in the remaining ghee on low heat for 15 minutes until golden and fragrant.",
      },
      {
        text: "Add the ground flaxseed, ginger powder and cardamom and stir for another two minutes.",
      },
      {
        text: "Turn off the heat. When the mixture is warm, stir in the jaggery, nuts, seeds and crushed gond.",
      },
      {
        text: "Cool completely and store in an airtight jar. Serve a small bowl (about 30 g) with warm milk in winter.",
      },
    ],
    tips: [
      "Ground flaxseed goes rancid quickly; grind only what you need for the batch.",
      "If you prefer less sweetness, halve the jaggery and add two chopped dates per serving instead.",
    ],
    mistakes: [
      "Adding jaggery to a hot pan, which makes the mixture sticky and lumpy.",
      "Assuming panjeeri is a 'health supplement' and eating it in large amounts — the ghee and nuts make it calorie-dense.",
    ],
    storage: [
      "Airtight container for 3 weeks in a cool, dry place.",
      "Refrigerate in hot or humid weather; the nuts and flaxseed turn rancid at warm room temperature.",
    ],
    substitutions: [
      "Replace half the atta with ragi flour for more fibre and a stronger flavour.",
      "Use sunflower seeds in place of melon seeds if unavailable.",
    ],
    allergens: ["Contains gluten, dairy and tree nuts. May contain edible gum, which is a plant resin."],
    nutritionNote:
      "A 30 g serving provides roughly 170–190 kcal, with fat from ghee and nuts, carbohydrate from flour and jaggery, and some protein. Estimates only — the mix varies by household.",
    safetyNotes: [
      "Panjeeri is not a treatment for postpartum depression, anaemia or any medical condition; new mothers with health concerns need proper clinical care and a varied diet.",
      "Do not give whole nuts or gond pieces to children under five because of choking risk; grind them finely.",
      "People with diabetes should treat panjeeri as a sweet food and keep portions small.",
    ],
    faqs: [
      {
        question: "Is panjeeri only for new mothers?",
        answer:
          "It is traditionally given after childbirth in many communities, but it is simply a dense winter food. Anyone can eat it in small portions; it has no special medical property.",
      },
      {
        question: "Can I make panjeeri without jaggery?",
        answer:
          "Yes — omit it and sweeten individual servings with a little honey or dates. The mixture will be crumblier and works well stirred into warm milk.",
      },
    ],
    references: [
      ref("icmrDiet", "Guidance on energy-dense foods, added sugar and a varied diet."),
      ref("whoDiet", "General principles of a healthy diet including moderation of added sugars and fats."),
      ref("nhsFoodStorage", "Storing nut- and fat-rich mixtures safely."),
    ],
    ingredientKeys: ["ghee", "til", "gond"],
    related: ["gond-ke-laddu", "methi-ke-laddu", "sattu-sharbat"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-14",
    updatedAt: "2026-11-19",
  },
];
