import { ref } from "@/content/references";
import type { RecipeEntry } from "@/lib/types";

/** Sweets, breakfasts and summer coolers. */
export const summerAndSweetRecipes: RecipeEntry[] = [
  {
    kind: "recipe",
    key: "gajar-ka-halwa",
    slug: "gajar-ka-halwa-recipe",
    lang: "en",
    section: "recipes",
    title: "Gajar Ka Halwa — Slow-Cooked Carrot Halwa with Ghee",
    seoTitle: "Gajar Ka Halwa Recipe — Traditional Carrot Halwa",
    metaDescription:
      "Traditional gajar ka halwa recipe with carrots, milk, ghee and sugar, including how to avoid a watery halwa and how long it keeps.",
    summary:
      "Grated carrots cooked down in milk until glossy, then finished with ghee and cardamom. The patience is in the evaporation, not the technique.",
    intro: [
      "Gajar ka halwa is a winter fixture in north Indian homes. The recipe is simple but the timing matters: the carrots must be cooked until the milk has almost disappeared before the ghee and sugar go in.",
      "Use the sweetest carrots you can find — if they are dull, add a tablespoon of milk powder to restore body.",
    ],
    categories: ["desi-recipes", "winter-sweets", "sweets-snacks", "festival-recipes"],
    tags: ["winter", "sweets", "festival"],
    keywords: ["gajar ka halwa", "carrot halwa recipe", "gajar halwa", "winter sweet"],
    cuisine: "North Indian",
    prepMinutes: 20,
    cookMinutes: 50,
    servings: 6,
    yieldLabel: "6 generous bowls",
    difficulty: "easy",
    ingredients: [
      { item: "Carrots, grated", quantity: 1, unit: "kg" },
      { item: "Full-fat milk", quantity: 600, unit: "ml" },
      { item: "Ghee", quantity: 60, unit: "g" },
      { item: "Sugar", quantity: 100, unit: "g", note: "adjust to the carrots" },
      { item: "Milk powder", quantity: 2, unit: "tbsp", note: "optional" },
      { item: "Green cardamom powder", quantity: 0.5, unit: "tsp" },
      { item: "Almonds, slivered", quantity: 20, unit: "g" },
      { item: "Cashews", quantity: 15, unit: "g" },
    ],
    steps: [
      {
        text: "Heat half the ghee in a wide, heavy pan and add the grated carrots. Sauté on medium heat for 6–8 minutes until the raw smell goes.",
        tip: "A wide pan evaporates the milk far faster than a deep pot.",
      },
      {
        text: "Add the milk and bring to a gentle simmer. Cook uncovered for 25–30 minutes, stirring every few minutes, until almost all the milk is absorbed.",
      },
      {
        text: "Stir in the sugar and milk powder. The mixture will loosen again — continue cooking for 8–10 minutes until it thickens.",
      },
      {
        text: "Add the remaining ghee and cardamom, and cook for 5 minutes until the halwa leaves the sides of the pan and looks glossy.",
      },
      {
        text: "Toast the almonds and cashews in a dry pan and scatter over the top. Serve warm.",
      },
    ],
    tips: [
      "Grate coarsely; fine grating turns to mush.",
      "If the carrots are watery, squeeze out a little juice before cooking.",
    ],
    mistakes: [
      "Adding sugar early, which stops the carrots from softening and leaves the halwa watery.",
      "Stirring constantly at the start — occasional stirring is enough until the milk reduces.",
    ],
    storage: [
      "Refrigerate in a covered container for up to 3 days; reheat in a pan with a splash of milk.",
      "Do not leave milk-based sweets at room temperature overnight.",
    ],
    substitutions: [
      "Use jaggery instead of sugar for a deeper flavour; add it at the end so it does not split the milk.",
      "Condensed milk can replace milk and sugar — use 200 g and skip the sugar.",
    ],
    allergens: ["Contains dairy and tree nuts. Not suitable for people with milk protein allergy."],
    nutritionNote:
      "About 300 kcal per serving, mostly from milk, ghee and sugar. Estimates from ingredient weights, not laboratory analysis.",
    safetyNotes: [
      "Refrigerate promptly — milk-based sweets support bacterial growth when left warm.",
      "People with diabetes should treat halwa as a dessert, not a vegetable dish.",
    ],
    faqs: [
      {
        question: "Can I make gajar halwa without ghee?",
        answer:
          "Yes, but ghee is what gives it the glossy finish and aroma. Use half the amount if you prefer it lighter.",
      },
      {
        question: "Why is my halwa not thickening?",
        answer:
          "The milk has not evaporated enough, or sugar was added too early. Keep cooking uncovered on medium-low heat and stir more often.",
      },
    ],
    references: [
      ref("icmrDiet", "Moderation of added sugar and fat in traditional sweets."),
      ref("nhsFoodStorage", "Refrigerating milk-based foods promptly."),
    ],
    ingredientKeys: ["ghee"],
    related: ["atta-laddu", "besan-laddu", "panjeeri"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-15",
    updatedAt: "2026-11-19",
    featured: true,
  },
  {
    kind: "recipe",
    key: "indori-poha",
    slug: "indori-poha-recipe",
    lang: "en",
    section: "recipes",
    title: "Indori Poha — Soft Poha with Jeeravan and Sev",
    seoTitle: "Indori Poha Recipe — Classic Malwa Breakfast",
    metaDescription:
      "Make Indori poha with thick poha, jeeravan masala, peanuts and sev. Includes rinsing tips so the poha stays fluffy instead of mushy.",
    summary:
      "The Malwa breakfast: thick poha rinsed not soaked, finished with jeeravan, lemon, sev and pomegranate. Sweet, sour and soft in one bowl.",
    intro: [
      "Indori poha is a temple-food style breakfast from Madhya Pradesh. What makes it distinct is jeeravan — a sweet-sour spice blend — and a generous finish of sev and pomegranate.",
      "The only real skill is rinsing: poha should be wet enough to soften but never left standing in water.",
    ],
    categories: ["desi-recipes", "kids-recipes"],
    tags: ["breakfast", "healthy"],
    keywords: ["indori poha", "poha recipe", "jeeravan poha", "malwa breakfast"],
    cuisine: "Malwa, Madhya Pradesh",
    prepMinutes: 10,
    cookMinutes: 12,
    servings: 3,
    yieldLabel: "3 bowls",
    difficulty: "easy",
    ingredients: [
      { item: "Thick poha (flattened rice)", quantity: 200, unit: "g" },
      { item: "Oil", quantity: 2, unit: "tbsp" },
      { item: "Mustard seeds", quantity: 1, unit: "tsp" },
      { item: "Peanuts", quantity: 40, unit: "g" },
      { item: "Curry leaves", quantity: 10, unit: "leaves" },
      { item: "Onion, finely chopped", quantity: 1, unit: "medium" },
      { item: "Turmeric", quantity: 0.5, unit: "tsp" },
      { item: "Jeeravan masala", quantity: 2, unit: "tsp" },
      { item: "Salt", quantity: null, unit: "to taste" },
      { item: "Sugar", quantity: 1, unit: "tsp" },
      { item: "Lemon juice", quantity: 1, unit: "tbsp" },
      { item: "Sev and pomegranate", quantity: null, unit: "to garnish" },
    ],
    steps: [
      {
        text: "Place the poha in a colander and rinse under running water for 30 seconds, tossing gently. Leave it to drain for 5 minutes — do not soak.",
        tip: "If the poha is very thin, sprinkle water instead of rinsing so it does not disintegrate.",
      },
      {
        text: "Heat the oil, pop the mustard seeds, then fry the peanuts for 2 minutes until they begin to crackle.",
      },
      {
        text: "Add curry leaves and onion, and sauté for 3 minutes until the onion is translucent.",
      },
      {
        text: "Add turmeric, jeeravan, salt and sugar, then the drained poha. Toss gently on low heat for 3–4 minutes.",
      },
      {
        text: "Turn off the heat, add lemon juice and cover for 2 minutes so the flavours settle.",
      },
      {
        text: "Serve topped with sev, pomegranate and a little extra jeeravan.",
      },
    ],
    tips: [
      "Use thick poha for this style; thin poha turns pasty.",
      "Jeeravan already contains salt — taste before adding more.",
    ],
    mistakes: [
      "Soaking the poha in a bowl of water, which makes it mushy.",
      "Cooking on high heat after adding poha, which dries it out.",
    ],
    storage: [
      "Best eaten immediately. Refrigerate leftovers for up to a day and reheat in a covered pan with a teaspoon of water.",
    ],
    substitutions: [
      "No jeeravan? Mix cumin powder, black salt, amchur and a pinch of sugar.",
      "Skip sev for a lighter version and add roasted peanuts instead.",
    ],
    allergens: ["Contains peanuts. Sev may contain gram flour and traces of gluten depending on the brand."],
    nutritionNote:
      "Roughly 300–350 kcal per bowl with sev. Poha is a source of carbohydrate; add a protein such as curd or sprouts to make it a fuller meal.",
    safetyNotes: [
      "Check the poha for dust and stones before rinsing — it is a minimally processed grain product.",
      "Peanut and mustard are common allergens; label the dish if you are serving guests.",
    ],
    faqs: [
      {
        question: "Do I need to soak poha for Indori poha?",
        answer:
          "No. Rinse it in a colander and drain. Soaking makes it soft and sticky, which is the opposite of what you want.",
      },
      {
        question: "What can I use instead of jeeravan?",
        answer:
          "A mix of roasted cumin powder, amchur, black salt, a pinch of sugar and a little garam masala gets close.",
      },
    ],
    references: [
      ref("icmrDiet", "Guidance on balanced breakfasts and moderation of added salt and sugar."),
      ref("fssai", "Basic food hygiene for home-cooked breakfasts."),
    ],
    ingredientKeys: ["curry-leaves"],
    related: ["besan-chilla", "sattu-sharbat", "masala-chaas"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-15",
    updatedAt: "2026-11-18",
  },
  {
    kind: "recipe",
    key: "besan-chilla",
    slug: "besan-chilla-recipe",
    lang: "en",
    section: "recipes",
    title: "Besan Chilla — Savoury Gram Flour Pancakes for Breakfast",
    seoTitle: "Besan Chilla Recipe — Quick Gram Flour Pancake",
    metaDescription:
      "Quick besan chilla recipe with gram flour, onion, tomato and spices. High-protein vegetarian breakfast with filling ideas and storage tips.",
    summary:
      "A 15-minute gram flour pancake with vegetables folded into the batter — one of the easiest protein-forward Indian breakfasts.",
    intro: [
      "Besan chilla is a thin, savoury pancake made from gram flour. Because besan carries both carbohydrate and protein, it keeps you fuller than a plain flour pancake.",
      "The batter should be pourable but not watery: thick enough to hold a little body in the pan.",
    ],
    categories: ["desi-recipes", "healthy-diet", "kids-recipes"],
    tags: ["breakfast", "healthy"],
    keywords: ["besan chilla", "gram flour pancake", "besan cheela recipe", "high protein breakfast"],
    cuisine: "North Indian",
    prepMinutes: 8,
    cookMinutes: 10,
    servings: 2,
    yieldLabel: "4 chillas",
    difficulty: "easy",
    ingredients: [
      { item: "Gram flour (besan)", quantity: 120, unit: "g" },
      { item: "Water", quantity: 120, unit: "ml" },
      { item: "Onion, finely chopped", quantity: 1, unit: "small" },
      { item: "Tomato, deseeded and chopped", quantity: 1, unit: "small" },
      { item: "Green chilli, chopped", quantity: 1, unit: "optional" },
      { item: "Coriander leaves, chopped", quantity: 2, unit: "tbsp" },
      { item: "Turmeric", quantity: 0.25, unit: "tsp" },
      { item: "Ajwain (carom seeds)", quantity: 0.25, unit: "tsp" },
      { item: "Salt", quantity: null, unit: "to taste" },
      { item: "Oil", quantity: 1, unit: "tsp", note: "for the pan" },
    ],
    steps: [
      {
        text: "Whisk the besan with water until smooth, then add turmeric, ajwain and salt. The batter should coat the back of a spoon.",
      },
      {
        text: "Fold in the onion, tomato, chilli and coriander and rest the batter for 5 minutes.",
      },
      {
        text: "Heat a flat non-stick pan on medium heat and brush with a few drops of oil.",
      },
      {
        text: "Pour a ladleful of batter and spread gently into a thin circle. Cook for 2 minutes until the edges lift.",
      },
      {
        text: "Flip, drizzle a little oil around the edges, and cook for another minute. Repeat with the remaining batter.",
      },
      {
        text: "Serve hot with mint chutney or plain curd.",
      },
    ],
    tips: [
      "Resting the batter lets the besan hydrate and gives a softer chilla.",
      "Keep the pan at medium heat — high heat burns the outside before the inside cooks.",
    ],
    mistakes: [
      "A watery batter, which tears when flipped.",
      "Adding too much onion, which releases water and makes the chilla soggy.",
    ],
    storage: [
      "Best fresh. The batter keeps refrigerated for up to 24 hours; stir before use.",
      "Cooked chillas can be refrigerated for a day and reheated in a dry pan.",
    ],
    substitutions: [
      "Use 30 g of besan replaced with oats flour for a lighter version.",
      "For a dairy-free filling, serve with coconut chutney instead of curd.",
    ],
    allergens: ["Contains chickpea (legume). Cooked in a pan that may have handled gluten if shared."],
    nutritionNote:
      "Each chilla supplies roughly 110–130 kcal and about 5 g protein before oil. Estimates only; filling and oil change the total.",
    safetyNotes: [
      "Legume allergies are less common than peanut allergy but real — check with guests before serving.",
      "Cook the chilla through; raw besan batter can cause stomach upset.",
    ],
    faqs: [
      {
        question: "Can I make besan chilla without onion?",
        answer:
          "Yes. Replace the onion with grated carrot or cabbage and add a pinch of chaat masala for flavour.",
      },
      {
        question: "Is besan chilla good for weight loss?",
        answer:
          "It is a reasonable high-protein breakfast, but weight depends on the whole diet. Frying it in a lot of oil or serving it with fried sides changes the picture.",
      },
    ],
    references: [
      ref("icmrDiet", "Guidance on including pulses and protein-rich foods in daily meals."),
      ref("fssai", "Home food hygiene for batter-based preparations."),
    ],
    ingredientKeys: ["besan"],
    related: ["indori-poha", "masala-chaas", "besan-face-pack"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-16",
    updatedAt: "2026-11-18",
  },
  {
    kind: "recipe",
    key: "masala-chaas",
    slug: "masala-chaas-recipe",
    lang: "en",
    section: "recipes",
    title: "Masala Chaas — Spiced Buttermilk for Hot Days",
    seoTitle: "Masala Chaas Recipe — Spiced Buttermilk",
    metaDescription:
      "Cooling masala chaas recipe with curd, roasted cumin, mint and black salt. A traditional summer drink with hydration and food-safety notes.",
    summary:
      "Whisked curd, water, roasted cumin and mint — the everyday Indian cooler that costs less than a bottled drink.",
    intro: [
      "Chaas is simply diluted, whisked curd with salt and spices. It is a practical hot-weather drink: it replaces some fluid and electrolytes without the sugar load of a soft drink.",
      "Use fresh curd and clean water. Chaas is a dairy drink, so it should not sit out in the heat.",
    ],
    categories: ["desi-recipes", "summer-recipes", "healthy-diet"],
    tags: ["summer", "drinks", "healthy"],
    keywords: ["masala chaas", "buttermilk recipe", "summer drink", "chaas recipe"],
    cuisine: "Indian",
    prepMinutes: 8,
    cookMinutes: 0,
    servings: 4,
    yieldLabel: "4 glasses",
    difficulty: "easy",
    ingredients: [
      { item: "Fresh curd (dahi)", quantity: 300, unit: "g" },
      { item: "Cold water", quantity: 500, unit: "ml" },
      { item: "Roasted cumin powder", quantity: 1, unit: "tsp" },
      { item: "Black salt", quantity: 0.5, unit: "tsp" },
      { item: "Salt", quantity: null, unit: "to taste" },
      { item: "Mint leaves", quantity: 10, unit: "leaves" },
      { item: "Ginger, grated", quantity: 0.5, unit: "tsp" },
      { item: "Curry leaves", quantity: 6, unit: "leaves", note: "optional" },
    ],
    steps: [
      {
        text: "Whisk the curd with 100 ml of water until completely smooth and lump-free.",
        tip: "A balloon whisk or a blender gives the smoothest chaas.",
      },
      {
        text: "Add the remaining water, roasted cumin, black salt and salt, and whisk again.",
      },
      {
        text: "Crush the mint and ginger lightly and stir them in, or blend for 10 seconds and strain.",
      },
      {
        text: "Taste and adjust the salt and cumin. Serve immediately over ice if you like.",
      },
    ],
    tips: [
      "Roast cumin fresh and grind it — pre-ground cumin loses its aroma quickly.",
      "Add a tablespoon of boiled, cooled rice water for a slightly thicker body.",
    ],
    mistakes: [
      "Using sour curd, which makes the drink taste off no matter how much salt you add.",
      "Leaving chaas unrefrigerated for hours before serving.",
    ],
    storage: [
      "Refrigerate and finish within 24 hours.",
      "Do not carry it unrefrigerated for long in summer; dairy spoils quickly.",
    ],
    substitutions: [
      "Use lactose-free curd for lactose intolerance.",
      "Swap mint for coriander leaves if mint is unavailable.",
    ],
    allergens: ["Contains dairy (milk)."],
    nutritionNote:
      "About 70 kcal per glass, with some protein and calcium from the curd. Estimates only; depends on the fat content of the curd.",
    safetyNotes: [
      "Use potable water — chaas is not boiled after mixing.",
      "People with lactose intolerance may still react to curd; choose lactose-free curd if needed.",
    ],
    faqs: [
      {
        question: "Is chaas the same as lassi?",
        answer:
          "No. Chaas is thin, salted and spiced; lassi is thicker and usually sweet. Chaas is lower in sugar as a result.",
      },
      {
        question: "Can I make chaas with milk?",
        answer:
          "Traditional chaas uses curd. Milk with lemon will curdle unevenly; use curd for the right texture.",
      },
    ],
    references: [
      ref("icmrDiet", "Guidance on hydration and including fermented dairy in the diet."),
      ref("whoFoodSafety", "Safe water and dairy handling to prevent foodborne illness."),
    ],
    ingredientKeys: ["curry-leaves", "adrak"],
    related: ["aam-panna", "sattu-sharbat", "besan-chilla"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-16",
    updatedAt: "2026-11-18",
  },
  {
    kind: "recipe",
    key: "aam-panna",
    slug: "aam-panna-recipe",
    lang: "en",
    section: "recipes",
    title: "Aam Panna — Raw Mango Cooler for Indian Summers",
    seoTitle: "Aam Panna Recipe — Raw Mango Summer Cooler",
    metaDescription:
      "Traditional aam panna recipe with raw mango, jaggery, roasted cumin and mint. Includes a safe sugar range and storage for the concentrate.",
    summary:
      "Boiled raw mango pulped with jaggery, cumin and mint — a sour-sweet concentrate you dilute with cold water all summer.",
    intro: [
      "Aam panna is made from green mangoes boiled until soft, then mashed with jaggery and spices. The concentrate keeps for a week in the fridge, which makes it a practical summer staple.",
      "Jaggery is still sugar. This recipe keeps the concentrate moderately sweet so you can control how much goes into each glass.",
    ],
    categories: ["desi-recipes", "summer-recipes"],
    tags: ["summer", "drinks"],
    keywords: ["aam panna", "raw mango drink", "aam panna recipe", "summer cooler"],
    cuisine: "Indian",
    prepMinutes: 15,
    cookMinutes: 20,
    servings: 10,
    yieldLabel: "10 glasses (about 700 ml concentrate)",
    difficulty: "easy",
    ingredients: [
      { item: "Raw mangoes", quantity: 500, unit: "g" },
      { item: "Jaggery, grated", quantity: 200, unit: "g" },
      { item: "Roasted cumin powder", quantity: 2, unit: "tsp" },
      { item: "Black salt", quantity: 1, unit: "tsp" },
      { item: "Salt", quantity: 0.5, unit: "tsp" },
      { item: "Black pepper", quantity: 0.5, unit: "tsp" },
      { item: "Mint leaves", quantity: 20, unit: "leaves" },
      { item: "Water", quantity: 1.5, unit: "litre", note: "for boiling and diluting" },
    ],
    steps: [
      {
        text: "Wash the mangoes and boil them in 500 ml water for 15–20 minutes until the skin splits and the flesh is soft.",
        tip: "Pressure-cooking for 3 whistles also works and keeps more flavour.",
      },
      {
        text: "Cool, then peel and scoop the pulp, discarding the stones. Mash or blend the pulp smooth.",
      },
      {
        text: "Melt the jaggery in 200 ml warm water and strain. Mix it into the mango pulp.",
      },
      {
        text: "Add roasted cumin, black salt, salt, pepper and crushed mint. Stir well.",
      },
      {
        text: "To serve, mix 3–4 tablespoons of concentrate with a glass of cold water and taste before adding more.",
      },
    ],
    tips: [
      "Roast the cumin yourself and grind it — the aroma is noticeably better.",
      "Freeze the concentrate in ice-cube trays for single glasses.",
    ],
    mistakes: [
      "Using ripe mangoes, which makes the drink sweet and flat instead of tangy.",
      "Adding too much jaggery at the start; you cannot take sweetness out later.",
    ],
    storage: [
      "Refrigerate the concentrate in a clean glass jar for up to 7 days.",
      "Discard if it smells fermented or shows bubbles beyond a light fizz.",
    ],
    substitutions: [
      "Use sugar if jaggery is unavailable, but reduce to 150 g and add a pinch of black salt.",
      "Dried mango powder (amchur) can stand in for raw mango in a pinch, though the body will be thinner.",
    ],
    allergens: ["No common allergens. Contains jaggery (sugarcane)."],
    nutritionNote:
      "A glass made with 3 tablespoons of concentrate has roughly 80–100 kcal, mostly from jaggery. Estimates only.",
    safetyNotes: [
      "People with diabetes should count aam panna as a sugary drink, not a health tonic.",
      "Traditional claims about cooling the body are cultural; the drink's main benefit is fluid and flavour.",
    ],
    faqs: [
      {
        question: "Can I use mango pulp instead of raw mango?",
        answer:
          "You can, but aam panna depends on the sourness of raw mango. Ripe pulp gives a different, sweeter drink.",
      },
      {
        question: "How long does aam panna concentrate last?",
        answer:
          "About a week refrigerated in a clean jar. Freeze portions if you want it to last longer.",
      },
    ],
    references: [
      ref("icmrDiet", "Moderation of added sugar in sweetened drinks."),
      ref("whoFoodSafety", "Safe handling of home-made concentrates and drinking water."),
    ],
    ingredientKeys: ["adrak"],
    related: ["sattu-sharbat", "masala-chaas", "amla-candy"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-17",
    updatedAt: "2026-11-19",
    featured: true,
  },
  {
    kind: "recipe",
    key: "sattu-sharbat",
    slug: "sattu-sharbat-recipe",
    lang: "en",
    section: "recipes",
    title: "Sattu Sharbat — Roasted Gram Flour Summer Drink",
    seoTitle: "Sattu Sharbat Recipe — Bihari Summer Drink",
    metaDescription:
      "Sattu sharbat recipe with roasted gram flour, black salt, lemon and mint. A savoury, filling summer drink with honest nutrition notes.",
    summary:
      "A savoury, protein-rich summer cooler from Bihar: roasted gram flour whisked with water, lemon, black salt and mint.",
    intro: [
      "Sattu is roasted gram flour, and sattu sharbat is the everyday summer drink built from it. Unlike most Indian coolers it is savoury, which makes it a better match with salty meals.",
      "Because sattu carries protein and fibre, one glass is genuinely filling — a useful quality in hot weather.",
    ],
    categories: ["desi-recipes", "summer-recipes", "healthy-diet", "kids-recipes"],
    tags: ["summer", "drinks", "healthy"],
    keywords: ["sattu sharbat", "sattu drink", "bihari sattu recipe", "summer protein drink"],
    cuisine: "Bihar",
    prepMinutes: 6,
    cookMinutes: 0,
    servings: 2,
    yieldLabel: "2 tall glasses",
    difficulty: "easy",
    ingredients: [
      { item: "Sattu (roasted gram flour)", quantity: 60, unit: "g" },
      { item: "Cold water", quantity: 500, unit: "ml" },
      { item: "Lemon juice", quantity: 1, unit: "tbsp" },
      { item: "Black salt", quantity: 1, unit: "tsp" },
      { item: "Roasted cumin powder", quantity: 0.5, unit: "tsp" },
      { item: "Mint leaves, crushed", quantity: 8, unit: "leaves" },
      { item: "Green chilli, minced", quantity: 0.5, unit: "optional" },
      { item: "Salt", quantity: null, unit: "to taste" },
    ],
    steps: [
      {
        text: "Put the sattu in a bowl and add 150 ml water a little at a time, whisking to a smooth slurry with no lumps.",
        tip: "Whisking first prevents the dry flour from clumping when the rest of the water goes in.",
      },
      {
        text: "Add the remaining cold water, black salt, roasted cumin and salt, and stir well.",
      },
      {
        text: "Stir in lemon juice, crushed mint and chilli if using. Taste and adjust.",
      },
      {
        text: "Serve immediately — sattu settles quickly, so stir before drinking.",
      },
    ],
    tips: [
      "Use fresh sattu; older flour tastes flat and can be musty.",
      "For a sweeter version, skip the salt and lemon and add jaggery to taste.",
    ],
    mistakes: [
      "Dumping all the water in at once, which leaves lumps.",
      "Making it hours ahead — it separates and the mint turns bitter.",
    ],
    storage: [
      "Drink fresh. A mixed glass keeps for a few hours refrigerated at most.",
      "Store dry sattu in an airtight jar for up to 3 months, away from moisture.",
    ],
    substitutions: [
      "Use lemon or amchur for sourness; both work.",
      "Add a tablespoon of curd for a creamier texture.",
    ],
    allergens: ["Contains gram (legume). Check for gluten cross-contact if the sattu is milled in a shared facility."],
    nutritionNote:
      "Each glass has roughly 110 kcal and 6 g protein from the sattu. Estimates only; the drink is a light snack, not a meal replacement.",
    safetyNotes: [
      "Use potable water and clean ice — this drink is not boiled after mixing.",
      "People with legume allergies should avoid sattu.",
    ],
    faqs: [
      {
        question: "Is sattu sharbat good after a workout?",
        answer:
          "It provides carbohydrate, some protein and fluid, which is reasonable after light exercise. It is not a substitute for a proper meal or for medical advice.",
      },
      {
        question: "Can children drink sattu sharbat?",
        answer:
          "Yes, in ordinary amounts, but go easy on black salt and chilli for young children and use clean water.",
      },
    ],
    references: [
      ref("icmrDiet", "Including pulses and adequate fluid in the daily diet."),
      ref("whoFoodSafety", "Safe drinking water and hygienic preparation of cold drinks."),
    ],
    ingredientKeys: ["besan"],
    related: ["masala-chaas", "aam-panna", "panjeeri"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-17",
    updatedAt: "2026-11-18",
  },
];
