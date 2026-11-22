import { ref } from "@/content/references";
import type { GuideEntry } from "@/lib/types";

/**
 * Everyday home-remedy guides. Educational only: no cure claims, explicit
 * red flags, and a clear "when to see a clinician" section on every page.
 */
export const remedyGuides: GuideEntry[] = [
  {
    kind: "remedy",
    key: "stomach-gas",
    slug: "stomach-gas-home-care",
    lang: "en",
    section: "home-remedies",
    categories: ["remedies"],
    tags: ["health"],
    keywords: ["stomach", "gas", "home", "care"],
    title: "Stomach Gas: Traditional Home Care and When to Worry",
    seoTitle: "Stomach Gas Home Care — Traditional Remedies",
    metaDescription:
      "Educational guide to stomach gas: common causes, traditional ajwain and jeera preparations, evidence limits and the symptoms that need a doctor.",
    summary:
      "Gas is normal; painful bloating is not. What Indian households traditionally used, what the evidence supports, and when to seek help.",
    intro: [
      "Passing gas is a normal part of digestion. The discomfort people describe as 'gas' — a full, tight, gurgling abdomen — usually reflects swallowed air, fermentation of undigested carbohydrates, or constipation.",
      "Home preparations can ease mild discomfort, but they do not treat an underlying cause. Persistent pain, weight loss or a change in bowel habit needs clinical assessment.",
    ],
    whatIs: [
      "Intestinal gas is produced when gut bacteria ferment carbohydrates that were not absorbed in the small intestine — beans, some vegetables, wheat and dairy are common triggers.",
      "Swallowed air from eating quickly, drinking fizzy drinks or chewing gum adds to it. Most people pass gas 10–20 times a day, which is normal.",
    ],
    symptoms: [
      "A bloated, tight feeling in the abdomen that worsens after meals",
      "Frequent burping or passing wind",
      "Gurgling sounds and mild cramping",
      "Temporary relief after passing gas or a bowel movement",
    ],
    causes: [
      "Eating quickly or talking while eating, which increases swallowed air",
      "High-fibre foods introduced suddenly, or large portions of legumes",
      "Lactose intolerance, which causes gas after milk and some curd",
      "Constipation, which lets gas accumulate",
      "Carbonated drinks, chewing gum and very sweet foods",
    ],
    homeRemedies: [
      {
        name: "Ajwain (carom seed) water",
        ingredientKey: "ajwain",
        preparation: [
          "Boil 1 cup (200 ml) water, add 1/2 teaspoon of ajwain, cover and steep for 5 minutes.",
          "Strain and sip warm, once after a heavy meal.",
        ],
        evidence:
          "Ajwain contains thymol, which has antispasmodic activity in laboratory studies. There is no good clinical trial showing it reliably relieves gas, so treat it as a comfort measure.",
        caution: "Avoid in large amounts during pregnancy and keep away from young children; the taste is strong and can cause reflux.",
      },
      {
        name: "Roasted jeera and fennel infusion",
        ingredientKey: "jeera",
        preparation: [
          "Dry-roast 1/2 teaspoon each of cumin and fennel seeds until fragrant.",
          "Crush, add to 200 ml hot water, steep 5 minutes and strain.",
        ],
        evidence:
          "Cumin and fennel are traditional carminatives. Small studies suggest fennel may reduce bloating, but evidence is limited and not specific to gas.",
        caution: "Fennel is a common allergen in the celery family; skip it if you react to similar plants.",
      },
      {
        name: "Warm water with lemon after meals",
        preparation: [
          "Add a squeeze of lemon to a glass of warm water and drink slowly after eating.",
        ],
        evidence:
          "No evidence that lemon water reduces gas. It mainly supports fluid intake, which helps if you are constipated.",
        caution:
          "Lemon can worsen reflux and erode tooth enamel; avoid if you have heartburn or sensitive teeth.",
      },
    ],
    evidence: [
      "Most 'gas remedies' are carminatives with a long culinary history and very little clinical research. They may help you feel better but do not change how gas is produced.",
      "The best-supported measures are behavioural: eating slowly, identifying trigger foods, treating constipation, and limiting fizzy drinks and large amounts of added sugar.",
      "If lactose intolerance is suspected, a two-week trial of reduced dairy — with a calcium source kept in the diet — is a reasonable discussion to have with a clinician or dietitian.",
    ],
    safety: [
      "Do not use essential oils such as peppermint oil internally without medical advice.",
      "Avoid alcohol-based 'digestive' tonics; they irritate the stomach lining and interact with medicines.",
      "Do not take antacids daily for weeks without review — they can mask a problem and interfere with nutrient absorption.",
    ],
    whoShouldAsk: [
      "Anyone with known irritable bowel syndrome, acid reflux or gastritis should check new herbal preparations with their clinician.",
      "Pregnant and breastfeeding women should avoid concentrated herbal infusions and ask before using any remedy.",
      "People taking blood thinners should be cautious with concentrated cumin, fennel and ajwain preparations.",
    ],
    seeDoctor: [
      "Gas with persistent abdominal pain lasting more than a few days",
      "Unintentional weight loss, blood in the stool, or a change in bowel habit after age 45",
      "Fever, vomiting, or an abdomen that is hard and tender",
    ],
    emergency: [
      "A rigid, silent abdomen with severe pain",
      "Chest pain or pressure, especially with sweating or breathlessness — this is not 'gas' until a clinician says so",
    ],
    faqs: [
      {
        question: "Does drinking water with ajwain really help gas?",
        answer:
          "It may soothe mild discomfort, but there is no reliable evidence that it removes gas. It is a comfort measure, not a treatment.",
      },
      {
        question: "Is frequent gas a sign of cancer?",
        answer:
          "On its own, no. Gas is extremely common. Persistent pain, weight loss, bleeding or a new change in bowel habit are the features that need assessment.",
      },
    ],
    references: [
      ref("medlineGas", "What intestinal gas is, common causes and normal frequency."),
      ref("nhsIndigestion", "Self-care advice for indigestion and bloating, and red flags."),
      ref("nccihHerbs", "Limited evidence for traditional herbal preparations and interaction warnings."),
    ],
    ingredientKeys: ["ajwain", "jeera"],
    related: ["acidity", "constipation", "masala-chaas"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-18",
    featured: true,
  },
  {
    kind: "remedy",
    key: "acidity",
    slug: "acidity-and-heartburn-home-care",
    lang: "en",
    section: "home-remedies",
    categories: ["remedies"],
    tags: ["health"],
    keywords: ["acidity", "and", "heartburn", "home"],
    title: "Acidity and Heartburn: Home Care, and What Not to Do",
    seoTitle: "Acidity Home Care — Safe Relief and Red Flags",
    metaDescription:
      "Educational guide to occasional acidity and heartburn: lifestyle measures that work, traditional preparations, and when reflux needs medical review.",
    summary:
      "Occasional heartburn usually responds to meal timing and portion changes. Here is what helps, what is traditionally used, and what to avoid.",
    intro: [
      "Acidity is the burning discomfort behind the breastbone that comes when stomach acid moves up into the oesophagus. Occasional episodes after a heavy or late meal are common.",
      "Frequent reflux — more than twice a week — needs medical assessment. Long-standing untreated reflux can damage the oesophagus.",
    ],
    whatIs: [
      "The stomach lining is built to handle acid; the oesophagus is not. When the valve at the top of the stomach relaxes at the wrong time, acid splashes upward and causes burning.",
      "Spicy food is often blamed, but the strongest triggers are usually large meals, lying down soon after eating, alcohol, smoking, and excess weight around the abdomen.",
    ],
    symptoms: [
      "Burning behind the breastbone, often 30–60 minutes after eating",
      "Sour fluid coming into the throat, especially when bending or lying down",
      "A bitter taste in the mouth in the morning",
      "A chronic dry cough or hoarse voice in some people",
    ],
    causes: [
      "Large or late meals, and lying down within two hours of eating",
      "Alcohol, smoking and very strong coffee on an empty stomach",
      "Excess weight, which increases pressure on the stomach",
      "Some medicines, including certain painkillers, taken long term",
    ],
    homeRemedies: [
      {
        name: "Cold milk",
        ingredientKey: "milk",
        preparation: ["Drink half a glass of cold plain milk slowly when symptoms start."],
        evidence:
          "Milk temporarily coats the oesophagus and can soothe burning, but it also stimulates acid production afterwards. It is a comfort measure, not a treatment.",
        caution: "Avoid if you are lactose intolerant. Do not use milk to 'settle' reflux every night — persistent symptoms need review.",
      },
      {
        name: "Jeera and saunf water",
        ingredientKey: "saunf",
        preparation: [
          "Roast 1/2 teaspoon cumin and 1/2 teaspoon fennel, add to 200 ml hot water, steep and strain.",
          "Sip warm, not hot, after meals.",
        ],
        evidence:
          "Traditionally used as a digestive. Evidence for reflux specifically is lacking; the warm fluid and the pause after eating probably help more than the seeds.",
      },
      {
        name: "Coconut water",
        preparation: ["Sip 150–200 ml of fresh coconut water when you feel burning."],
        evidence:
          "No clinical evidence for reflux. It is a pleasant, low-sugar fluid and a reasonable alternative to fizzy drinks.",
        caution: "Coconut water is high in potassium; people with kidney disease should ask their clinician about it.",
      },
    ],
    evidence: [
      "Lifestyle change has the strongest evidence: smaller meals, an earlier dinner, raising the head of the bed by 10–15 cm, and weight loss where relevant.",
      "Chewing gum after meals increases saliva and can reduce acid exposure in the oesophagus — a simple, low-risk measure.",
      "Home remedies are comfort measures. They do not heal reflux damage, and they should not replace prescribed acid-suppressing treatment.",
    ],
    safety: [
      "Do not take baking soda (sodium bicarbonate) for heartburn — it causes gas, raises blood pressure and can be dangerous with kidney or heart disease.",
      "Avoid lemon juice, vinegar or strong spice mixtures on an empty stomach if you have reflux.",
      "Do not stop prescribed reflux medicines without speaking to your doctor, even if you feel better.",
    ],
    whoShouldAsk: [
      "Pregnant women with reflux should ask before using herbal preparations; many are not studied in pregnancy.",
      "People over 55 with new reflux symptoms should be assessed rather than self-treating.",
      "Anyone taking daily painkillers or blood thinners should discuss reflux with their prescriber.",
    ],
    seeDoctor: [
      "Reflux more than twice a week, or symptoms needing antacids most days",
      "Difficulty or pain on swallowing",
      "Unintentional weight loss, vomiting, or black stools",
    ],
    emergency: [
      "Chest pain with sweating, breathlessness or pain spreading to the arm or jaw — treat as a possible heart attack and call 112",
      "Vomiting blood or material that looks like coffee grounds",
    ],
    faqs: [
      {
        question: "Does cold milk help acidity?",
        answer:
          "It can soothe for a short while, but milk also stimulates acid. It is not a cure and should not be used nightly without review.",
      },
      {
        question: "Is lemon water good for acidity?",
        answer:
          "No. Lemon is acidic and commonly worsens reflux. Despite popular advice, it is not a safe remedy for heartburn.",
      },
    ],
    references: [
      ref("nhsHeartburn", "Symptoms, self-care and when to see a GP for reflux."),
      ref("medlineIndigestion", "Overview of indigestion and reflux triggers."),
    ],
    ingredientKeys: ["saunf", "jeera"],
    related: ["stomach-gas", "constipation", "masala-chaas"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-18",
  },
  {
    kind: "remedy",
    key: "constipation",
    slug: "constipation-home-care",
    lang: "en",
    section: "home-remedies",
    categories: ["remedies"],
    tags: ["health"],
    keywords: ["constipation", "home", "care"],
    title: "Constipation: Fibre, Fluid and Traditional Home Care",
    seoTitle: "Constipation Home Care — Fibre, Fluid and Remedies",
    metaDescription:
      "Educational guide to constipation: how fibre and fluid work, traditional soaked-fruit and buttermilk preparations, and when constipation needs a doctor.",
    summary:
      "Most constipation responds to fibre, fluid and routine — not to strong laxatives. What helps, and what to avoid.",
    intro: [
      "Constipation usually means fewer than three bowel movements a week, hard stools, or straining. It is common and usually responds to changes in diet and routine.",
      "Traditional preparations such as soaked figs or warm buttermilk can help, but the foundation is fibre plus enough fluid — fibre without fluid can make constipation worse.",
    ],
    whatIs: [
      "The colon absorbs water from stool. When movement is slow or fluid intake is low, stools become hard and difficult to pass.",
      "Iron supplements, some painkillers, pregnancy, thyroid problems and a low-fibre diet are common contributors.",
    ],
    symptoms: [
      "Fewer than three bowel movements a week",
      "Hard or lumpy stools and straining",
      "A feeling of incomplete emptying",
      "Mild abdominal discomfort and bloating",
    ],
    causes: [
      "Low dietary fibre, especially from vegetables, fruit and whole pulses",
      "Not drinking enough water, particularly in hot weather",
      "Ignoring the urge to go, or a change in routine and travel",
      "Iron supplements and some medicines",
      "Pregnancy and thyroid conditions",
    ],
    homeRemedies: [
      {
        name: "Soaked figs or prunes",
        ingredientKey: "figs",
        preparation: [
          "Soak 2 dried figs or 3 prunes in 150 ml water overnight.",
          "Eat them in the morning and drink the soaking water.",
        ],
        evidence:
          "Prunes have modest clinical evidence for improving stool frequency. Figs are traditional and provide fibre, though trials are limited.",
        caution: "Dried fruit is high in sugar — people with diabetes should count it. Introduce slowly to avoid bloating.",
      },
      {
        name: "Warm milk with a teaspoon of ghee at bedtime",
        ingredientKey: "ghee",
        preparation: ["Warm 200 ml milk and stir in 1 teaspoon of ghee. Drink before bed."],
        evidence:
          "Ghee is a traditional lubricant in Indian practice. There is no clinical trial evidence, but warm milk with fat is a gentle, low-risk routine.",
        caution: "Avoid if you have lactose intolerance or high cholesterol that requires strict fat control.",
      },
      {
        name: "Chaas with roasted cumin",
        ingredientKey: "jeera",
        preparation: [
          "Whisk 100 g curd with 200 ml water, add a pinch of roasted cumin and salt.",
          "Drink with lunch.",
        ],
        evidence:
          "Fluid plus a fermented dairy food; neither is a proven laxative, but it supports hydration and adds flavour to meals.",
        caution: "Dairy can worsen bloating in lactose intolerance.",
      },
    ],
    evidence: [
      "Fibre works when it is increased gradually with adequate fluid: 25–30 g a day for most adults, from vegetables, fruit, whole grains and pulses.",
      "Regular physical activity and a consistent toilet routine — going when you feel the urge, without rushing — have good support.",
      "Strong stimulant laxatives are not a first-line solution and can cause dependence. They belong to short-term, clinician-guided use.",
    ],
    safety: [
      "Do not use castor oil or strong herbal purgatives regularly.",
      "Avoid relying on enemas; they can cause injury and electrolyte problems.",
      "Stop any fibre supplement that causes severe bloating and discuss alternatives.",
    ],
    whoShouldAsk: [
      "Pregnant women should ask before using herbal laxatives; fibre, fluid and gentle activity are safer first steps.",
      "Older adults on multiple medicines should have constipation reviewed rather than self-treated long term.",
      "Children with constipation need paediatric advice rather than adult remedies.",
    ],
    seeDoctor: [
      "Constipation lasting more than three weeks despite diet changes",
      "Blood in the stool, or black, tarry stools",
      "Unexplained weight loss, severe pain, or vomiting",
      "A new change in bowel habit after age 45",
    ],
    emergency: [
      "A completely distended, painful abdomen with no stool or gas passed",
      "Vomiting with severe abdominal pain",
    ],
    faqs: [
      {
        question: "Does drinking warm water in the morning help?",
        answer:
          "It may help some people start a routine, and it supports hydration. There is no strong evidence it is specifically laxative.",
      },
      {
        question: "How much fibre should I add?",
        answer:
          "Increase gradually towards 25–30 g a day for adults, with more fluid. A sudden jump causes gas and bloating.",
      },
    ],
    references: [
      ref("nhsConstipation", "Definition, diet and lifestyle advice, and when to seek help."),
      ref("medlineIndigestion", "Digestive symptoms and self-care context."),
      ref("icmrDiet", "Recommended fibre-rich foods in the Indian diet."),
    ],
    ingredientKeys: ["ghee", "jeera"],
    related: ["stomach-gas", "acidity", "panjeeri"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-11",
    updatedAt: "2026-11-18",
  },
  {
    kind: "remedy",
    key: "common-cold",
    slug: "common-cold-home-care",
    lang: "en",
    section: "home-remedies",
    categories: ["remedies", "winter-remedies"],
    tags: ["health"],
    keywords: ["common", "cold", "home", "care"],
    title: "Common Cold: What Home Care Can and Cannot Do",
    seoTitle: "Common Cold Home Care — Traditional and Safe",
    metaDescription:
      "Common cold home care: rest, fluids, saline rinses and traditional tulsi or ginger drinks, with clear guidance on when a cold needs a doctor.",
    summary:
      "A cold is a viral infection that runs its course. Home care eases symptoms; it does not shorten the illness.",
    intro: [
      "The common cold is caused by viruses, most often rhinoviruses. Symptoms peak in two to three days and usually settle within a week to ten days.",
      "Antibiotics do not help a cold. Home care focuses on comfort: fluids, rest, saline rinses and warm drinks.",
    ],
    whatIs: [
      "Cold viruses infect the lining of the nose and throat. The immune response — not the virus itself — produces most of the congestion and soreness.",
      "Adults get two to four colds a year on average; children more. Most are self-limiting.",
    ],
    symptoms: [
      "Runny or blocked nose, sneezing and mild sore throat",
      "Low-grade fever in some people",
      "Tiredness and a dry cough that may last a week or two",
    ],
    causes: [
      "Rhinovirus and other respiratory viruses, spread by droplets and contaminated hands",
      "Close contact in crowded or poorly ventilated spaces",
      "Seasonal patterns — colds are more common in cooler, drier months",
    ],
    homeRemedies: [
      {
        name: "Tulsi and ginger infusion",
        ingredientKey: "tulsi",
        preparation: [
          "Boil 200 ml water, add 4–5 tulsi leaves and 2 thin slices of ginger.",
          "Cover, steep 5 minutes, strain. Add honey only if you are not giving it to a child under one year.",
        ],
        evidence:
          "Tulsi and ginger are traditional comfort drinks. Small studies suggest some symptomatic benefit for ginger in sore throat, but evidence for colds is weak. Warm fluid itself soothes.",
        caution: "Honey must never be given to infants under 12 months (botulism risk). Avoid very hot drinks.",
      },
      {
        name: "Saline nasal rinse",
        preparation: [
          "Dissolve 1/2 teaspoon of non-iodised salt in 250 ml of boiled, cooled water.",
          "Use a clean neti pot or squeeze bottle, rinsing each nostril gently.",
        ],
        evidence:
          "Saline irrigation has reasonable evidence for reducing nasal congestion and is widely recommended. Use only sterile, cooled boiled water.",
        caution:
          "Never use tap water directly. Stop if it causes pain or ear pressure. Avoid forceful rinsing.",
      },
    ],
    evidence: [
      "Rest, fluids and saline rinses are the best-supported measures. Honey (over age one) has modest evidence for cough.",
      "Vitamin C does not prevent colds in the general population. Zinc lozenges have mixed evidence and can cause nausea and taste disturbance.",
      "Steam inhalation is popular but carries a real burn risk, especially for children. A warm shower is safer than a bowl of boiling water.",
    ],
    safety: [
      "Do not give aspirin to children under 16 — it is linked to Reye's syndrome.",
      "Do not use medicated steam with boiling water near children; scalds are a common household injury.",
      "Avoid combination cold medicines in young children; check with a pharmacist.",
    ],
    whoShouldAsk: [
      "Pregnant women should check any medicine, including herbal preparations, with their clinician.",
      "People with asthma or COPD should have a plan for worsening symptoms.",
      "Anyone with a weakened immune system should seek advice early.",
    ],
    seeDoctor: [
      "Symptoms lasting more than 10 days without improving",
      "High fever, ear pain, facial pain or a productive cough that worsens",
      "Difficulty breathing or wheezing",
    ],
    emergency: [
      "Severe breathlessness, chest pain or bluish lips",
      "A child who is drowsy, breathing fast, or not drinking",
    ],
    faqs: [
      {
        question: "Can I take antibiotics for a cold?",
        answer:
          "No. Colds are viral, and antibiotics do not help. They can cause side effects and resistance when used unnecessarily.",
      },
      {
        question: "Is steam inhalation safe?",
        answer:
          "It carries a burn risk, particularly for children. A warm shower or a bowl of warm — not boiling — water in a safe place is preferable.",
      },
    ],
    references: [
      ref("nhsCold", "Symptoms, self-care and when to seek medical advice."),
      ref("medlineCold", "Overview of the common cold and its course."),
      ref("whoFoodSafety", "Safe preparation of home remedies and drinking water."),
    ],
    ingredientKeys: ["tulsi", "adrak"],
    related: ["cough", "sore-throat", "masala-chaas"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-11",
    updatedAt: "2026-11-19",
    featured: true,
  },
  {
    kind: "remedy",
    key: "cough",
    slug: "cough-home-care",
    lang: "en",
    section: "home-remedies",
    categories: ["remedies", "winter-remedies"],
    tags: ["health"],
    keywords: ["cough", "home", "care"],
    title: "Cough: Home Care for a Common Symptom",
    seoTitle: "Cough Home Care — What Helps and What to Avoid",
    metaDescription:
      "Cough home care explained: honey, warm fluids and humidity, why cough syrups are overused, and the warning signs that need medical review.",
    summary:
      "Most coughs after a cold settle on their own. Honey and warm fluids help; sedating syrups and unnecessary antibiotics do not.",
    intro: [
      "Cough is a reflex that clears the airways. After a viral infection it can persist for two to three weeks even when the infection has gone.",
      "The aim of home care is comfort and sleep, not switching the cough off completely — a productive cough is doing a job.",
    ],
    whatIs: [
      "Coughs are dry (no mucus) or productive (with phlegm). Dry coughs often follow a cold; productive coughs help clear the chest.",
      "Most acute coughs are viral. A cough lasting more than eight weeks in adults is called chronic and needs assessment.",
    ],
    symptoms: [
      "Tickling or irritation in the throat",
      "Dry cough that worsens at night",
      "Chest soreness from repeated coughing",
      "Phlegm in a productive cough",
    ],
    causes: [
      "Viral respiratory infection, often following a cold",
      "Post-nasal drip from allergies or sinusitis",
      "Asthma, especially with wheeze or breathlessness",
      "Reflux, smoke or dry indoor air",
    ],
    homeRemedies: [
      {
        name: "Honey with warm water",
        ingredientKey: "honey",
        preparation: [
          "Stir 1 teaspoon of honey into 150 ml warm (not boiling) water.",
          "Sip slowly, especially before bed.",
        ],
        evidence:
          "Honey has modest evidence for reducing night cough in children over one year and is recommended by several guidelines as a first-line option.",
        caution: "Never give honey to a child under 12 months. Honey is sugar — people with diabetes should account for it.",
      },
      {
        name: "Ginger and tulsi decoction",
        ingredientKey: "adrak",
        preparation: [
          "Simmer 2 slices of ginger and 4 tulsi leaves in 200 ml water for 5 minutes.",
          "Strain and sip warm with a little honey if liked.",
        ],
        evidence:
          "Traditional comfort drink. There is no strong evidence it shortens a cough, but warm fluid soothes the throat.",
        caution: "Avoid in reflux. Do not give concentrated decoctions to young children.",
      },
    ],
    evidence: [
      "Honey is the best-studied home remedy for nocturnal cough in children over one year, with modest benefit.",
      "Over-the-counter cough syrups have limited evidence in adults and are not recommended for young children. Sedating antihistamines can be risky in children.",
      "Humidity and nasal saline may reduce throat irritation from dry air and post-nasal drip.",
    ],
    safety: [
      "Do not use codeine or sedating cough medicines in children.",
      "Avoid menthol rubs on the face of infants and young children.",
      "Do not give antibiotics unless a clinician has diagnosed a bacterial infection.",
    ],
    whoShouldAsk: [
      "Pregnant women should check any cough medicine with their clinician.",
      "People with asthma should follow their action plan and review worsening cough.",
      "Older adults with a new cough and fever should be assessed early.",
    ],
    seeDoctor: [
      "Cough lasting more than three weeks",
      "Coughing blood, or breathlessness at rest",
      "Fever with chest pain or a productive cough that worsens",
      "A cough with unexplained weight loss or night sweats",
    ],
    emergency: [
      "Severe difficulty breathing, choking or bluish lips",
      "Chest pain with breathlessness",
    ],
    faqs: [
      {
        question: "Does honey really help a cough?",
        answer:
          "For children over one year and adults, honey has modest evidence for reducing night cough. It is not a cure and must not be given to infants.",
      },
      {
        question: "Should I suppress a productive cough?",
        answer:
          "Usually not. A cough that brings up phlegm is clearing the airway. Focus on fluids and humidity; ask a pharmacist before using suppressants.",
      },
    ],
    references: [
      ref("nhsCough", "Cough types, self-care and when to get help."),
      ref("nccihGinger", "Evidence and cautions for ginger preparations."),
    ],
    ingredientKeys: ["honey", "adrak", "tulsi"],
    related: ["common-cold", "sore-throat", "masala-chaas"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-11",
    updatedAt: "2026-11-18",
  },
  {
    kind: "remedy",
    key: "sore-throat",
    slug: "sore-throat-home-care",
    lang: "en",
    section: "home-remedies",
    categories: ["remedies", "winter-remedies"],
    tags: ["health"],
    keywords: ["sore", "throat", "home", "care"],
    title: "Sore Throat: Safe Home Care and When to See a Doctor",
    seoTitle: "Sore Throat Home Care — Salt Water and Honey",
    metaDescription:
      "Sore throat home care: salt-water gargles, honey, warm fluids, and the signs of strep throat or a serious infection that need medical attention.",
    summary:
      "Most sore throats are viral and settle in a few days. Gargles and warm fluids ease pain; antibiotics are only for confirmed bacterial infection.",
    intro: [
      "A sore throat is usually part of a cold or another viral infection. Pain peaks in the first two days and improves within a week.",
      "Home care can reduce discomfort. The important skill is recognising when a sore throat is not routine.",
    ],
    whatIs: [
      "The throat lining becomes inflamed, often from a virus, sometimes from bacteria such as group A streptococcus.",
      "Dry air, smoke, shouting and reflux can also cause a raw throat without any infection.",
    ],
    symptoms: [
      "Pain or scratchiness that worsens when swallowing",
      "Redness and mild swelling at the back of the throat",
      "Low fever with a cold",
      "Swollen neck glands in some infections",
    ],
    causes: [
      "Viral upper respiratory infection — the most common cause",
      "Bacterial infection such as strep throat, more common in children",
      "Dry indoor air, smoke or dust",
      "Acid reflux irritating the throat overnight",
    ],
    homeRemedies: [
      {
        name: "Salt-water gargle",
        preparation: [
          "Dissolve 1/2 teaspoon of salt in 250 ml of warm water.",
          "Gargle for 20–30 seconds and spit out. Repeat up to four times a day.",
        ],
        evidence:
          "Salt-water gargling is widely recommended for symptomatic relief and has some evidence for reducing throat pain. It does not treat infection.",
        caution: "Do not swallow the solution. Children should only gargle if they can reliably spit.",
      },
      {
        name: "Honey and warm water",
        ingredientKey: "honey",
        preparation: ["Stir 1 teaspoon of honey into warm water and sip slowly."],
        evidence:
          "Honey coats the throat and has modest evidence for cough and sore throat comfort.",
        caution: "Not for infants under 12 months.",
      },
      {
        name: "Turmeric milk",
        ingredientKey: "haldi",
        preparation: [
          "Warm 200 ml milk with 1/4 teaspoon of turmeric and a pinch of pepper.",
          "Drink before bed.",
        ],
        evidence:
          "A traditional comfort drink. Curcumin in turmeric has anti-inflammatory activity in laboratory studies, but drinking turmeric milk is not a proven treatment for throat infection.",
        caution: "Avoid if you are lactose intolerant. Turmeric can stain teeth and clothing.",
      },
    ],
    evidence: [
      "Warm salt-water gargles, honey and adequate fluids are reasonable, low-risk comfort measures.",
      "Most sore throats do not need antibiotics. Inappropriate use causes resistance and side effects.",
      "A rapid strep test or throat swab is the appropriate way to decide whether antibiotics are needed.",
    ],
    safety: [
      "Do not use aspirin gargles or aspirin for children.",
      "Avoid very hot drinks — they can further irritate the throat.",
      "Do not use leftover antibiotics from a previous illness.",
    ],
    whoShouldAsk: [
      "Pregnant women should check any lozenge or medicine with a pharmacist.",
      "People with weakened immunity should seek advice early.",
      "Children under three with fever and poor drinking need medical review.",
    ],
    seeDoctor: [
      "Severe pain, difficulty swallowing saliva, or drooling",
      "Fever above 38.5°C lasting more than three days",
      "A sore throat lasting more than two weeks",
      "A rash with sore throat, or one-sided severe swelling",
    ],
    emergency: [
      "Difficulty breathing, a muffled voice with drooling, or inability to open the mouth",
      "Neck swelling with high fever — this can indicate a deep infection",
    ],
    faqs: [
      {
        question: "Does turmeric milk cure a throat infection?",
        answer:
          "No. It is a soothing drink, but it does not treat a bacterial infection. Persistent or severe symptoms need assessment.",
      },
      {
        question: "When are antibiotics needed?",
        answer:
          "Only when a clinician diagnoses a bacterial infection, usually with a test. Most sore throats are viral and do not respond to antibiotics.",
      },
    ],
    references: [
      ref("nhsSoreThroat", "Symptoms, self-care and when to see a doctor."),
      ref("nccihTurmeric", "Evidence and cautions for turmeric preparations."),
    ],
    ingredientKeys: ["honey", "haldi", "tulsi"],
    related: ["cough", "common-cold", "masala-chaas"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-11",
    updatedAt: "2026-11-18",
  },
  {
    kind: "remedy",
    key: "headache",
    slug: "headache-home-care",
    lang: "en",
    section: "home-remedies",
    categories: ["remedies"],
    tags: ["health"],
    keywords: ["headache", "home", "care"],
    title: "Headache: Home Care, Triggers and Warning Signs",
    seoTitle: "Headache Home Care — Triggers and Red Flags",
    metaDescription:
      "Everyday headache home care: hydration, sleep, screen breaks and cold compresses, plus the sudden severe headache signs that need emergency care.",
    summary:
      "Most headaches are tension-type and respond to rest, hydration and routine. A sudden worst-ever headache is an emergency.",
    intro: [
      "Tension-type headaches feel like a tight band around the head. They are the most common kind and are often linked to stress, poor sleep, skipped meals or screen strain.",
      "Migraine is different — usually one-sided, throbbing, with nausea or light sensitivity — and needs its own management plan.",
    ],
    whatIs: [
      "Tension headaches are thought to involve muscle tension and pain sensitisation around the scalp and neck.",
      "Migraine is a neurological condition with episodes triggered by factors such as sleep changes, certain foods, hormonal cycles and stress.",
    ],
    symptoms: [
      "A dull, pressing pain on both sides of the head",
      "Neck and shoulder tightness",
      "Mild sensitivity to light or noise",
      "For migraine: throbbing pain, nausea, visual changes",
    ],
    causes: [
      "Stress, poor sleep or a disrupted routine",
      "Dehydration and skipped meals",
      "Long screen time with poor posture",
      "Caffeine withdrawal or excess",
      "Sinus infection, eye strain or, rarely, more serious causes",
    ],
    homeRemedies: [
      {
        name: "Cold or warm compress",
        preparation: [
          "Apply a cold pack to the forehead for tension headaches, or a warm pack to the neck for muscle tightness.",
          "Keep a cloth between the pack and skin; 10–15 minutes at a time.",
        ],
        evidence:
          "Compresses are widely used and low risk; evidence is modest but consistent for temporary relief.",
        caution: "Do not apply ice directly to skin. Avoid heat on the face if you have sinus pain with fever.",
      },
      {
        name: "Peppermint oil on the temples",
        ingredientKey: "pudina",
        preparation: ["Dilute one drop of peppermint oil in a teaspoon of carrier oil and dab on the temples."],
        evidence:
          "Small trials suggest diluted peppermint oil may reduce tension headache pain. Keep it away from eyes and broken skin.",
        caution: "Do not use on children's faces. Essential oils are not for internal use.",
      },
      {
        name: "Hydration and a small snack",
        preparation: ["Drink a glass of water and eat something simple if you have skipped a meal."],
        evidence:
          "Dehydration and low blood sugar are common, reversible triggers. This is the first thing to try.",
      },
    ],
    evidence: [
      "Regular sleep, meals, hydration and screen breaks reduce headache frequency for many people.",
      "Simple painkillers can help occasional headaches, but using them more than 10–15 days a month can cause medication-overuse headache.",
      "Relaxation and neck exercises have reasonable evidence for tension headaches.",
    ],
    safety: [
      "Do not take painkillers daily without medical advice.",
      "Avoid neck manipulation by untrained practitioners.",
      "Do not ignore a headache after a head injury.",
    ],
    whoShouldAsk: [
      "Pregnant women should ask before taking any painkiller or using essential oils.",
      "People with migraine should have a management plan rather than relying on home remedies.",
      "Anyone with high blood pressure and new headaches should be assessed.",
    ],
    seeDoctor: [
      "A headache that is new, persistent and unlike your usual pattern",
      "Headache with fever, neck stiffness or rash",
      "Headache after a head injury",
      "Headache with weakness, vision loss or confusion",
    ],
    emergency: [
      "A sudden, severe 'worst ever' headache reaching peak within a minute",
      "Headache with slurred speech, one-sided weakness, or seizures",
    ],
    faqs: [
      {
        question: "Is a headache a sign of high blood pressure?",
        answer:
          "Usually not on its own. High blood pressure is often silent. If you have new persistent headaches and high readings, get assessed.",
      },
      {
        question: "Can skipping meals cause headaches?",
        answer:
          "Yes, low blood sugar and dehydration are common triggers. A regular meal and fluid routine helps many people.",
      },
    ],
    references: [
      ref("nhsHeadache", "Types of headache, self-care and when to seek help."),
      ref("medlineIndigestion", "General context on digestive and lifestyle triggers."),
    ],
    ingredientKeys: ["pudina"],
    related: ["stomach-gas", "acidity", "common-cold"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-12",
    updatedAt: "2026-11-18",
  },
  {
    kind: "remedy",
    key: "dandruff",
    slug: "dandruff-home-care",
    lang: "en",
    section: "home-remedies",
    categories: ["remedies", "hair-care-cat"],
    tags: ["health"],
    keywords: ["dandruff", "home", "care"],
    title: "Dandruff: Causes, Shampoo Routine and What Home Care Can Do",
    seoTitle: "Dandruff Home Care — Causes and Safe Routine",
    metaDescription:
      "Dandruff explained: the yeast-related cause, why washing routine matters more than oils, safe home care and when flaking needs a dermatologist.",
    summary:
      "Dandruff is usually a mild inflammatory response to scalp yeast. Regular washing and the right shampoo matter more than kitchen remedies.",
    intro: [
      "Dandruff appears as white or yellowish flakes, often with itching. It is not caused by poor hygiene, and it is not contagious.",
      "Oil-based home remedies can help dryness but often worsen a yeast-related flaky scalp by feeding the yeast. The most reliable approach is a consistent washing routine.",
    ],
    whatIs: [
      "The scalp hosts Malassezia yeast. In some people the immune response to it causes increased turnover of skin cells, producing visible flakes.",
      "Cold, dry weather, stress and infrequent washing can make it worse. Seborrhoeic dermatitis is a related, more inflamed condition.",
    ],
    symptoms: [
      "White or yellowish flakes on the scalp and shoulders",
      "Itching, sometimes worse after sweating",
      "Mild redness around the hairline",
      "Flaking in eyebrows or beard in some people",
    ],
    causes: [
      "Malassezia yeast and individual immune response",
      "Infrequent shampooing, allowing scale to build up",
      "Dry indoor air in winter",
      "Stress and fatigue",
    ],
    homeRemedies: [
      {
        name: "Fenugreek paste",
        ingredientKey: "methi",
        preparation: [
          "Soak 2 tablespoons of fenugreek seeds overnight, grind to a smooth paste.",
          "Apply to the scalp for 15 minutes, then rinse and shampoo.",
        ],
        evidence:
          "Fenugreek is traditionally used for scalp soothing. There is no reliable trial evidence for dandruff; it may help dryness.",
        caution: "Patch test first. Rinse thoroughly — leftover paste can irritate and clog the scalp.",
      },
      {
        name: "Aloe vera gel",
        ingredientKey: "aloe-vera",
        preparation: [
          "Apply fresh aloe gel to the scalp for 15–20 minutes before washing.",
          "Rinse well and shampoo.",
        ],
        evidence:
          "Aloe has soothing properties; evidence for dandruff specifically is limited.",
        caution: "Use only the clear inner gel; the yellow latex can irritate skin.",
      },
    ],
    evidence: [
      "Anti-dandruff shampoos containing zinc pyrithione, selenium sulphide, ketoconazole or salicylic acid have the best evidence. Use them two to three times a week, leaving on for the stated time.",
      "If one shampoo stops working, alternating active ingredients can help.",
      "Home oil treatments are not a substitute for medicated shampoo and can worsen flaking in some people.",
    ],
    safety: [
      "Do not scratch the scalp with combs or fingernails; broken skin can get infected.",
      "Avoid strong essential oils undiluted on the scalp.",
      "Do not use lemon juice on the scalp — it stings and disrupts the skin barrier.",
    ],
    whoShouldAsk: [
      "People with eczema, psoriasis or a very irritated scalp should see a dermatologist.",
      "Parents should ask a pharmacist before using medicated shampoos on infants.",
    ],
    seeDoctor: [
      "Thick, greasy scales with redness extending beyond the hairline",
      "Scalp sores, bleeding or hair loss",
      "No improvement after six weeks of medicated shampoo",
    ],
    faqs: [
      {
        question: "Does oiling cause dandruff?",
        answer:
          "Not directly, but heavy oiling can feed the yeast involved and make flakes worse for some people. Use light oiling and wash it out the same day.",
      },
      {
        question: "How often should I wash my hair with dandruff?",
        answer:
          "Two to three times a week with an anti-dandruff shampoo is a common starting routine. Adjust with a dermatologist if the scalp is very dry.",
      },
    ],
    references: [
      ref("nhsDandruff", "Causes, shampoo treatment and when to seek help."),
      ref("nccihHerbs", "Caution on traditional topical herbs and limited evidence."),
    ],
    ingredientKeys: ["methi", "aloe-vera"],
    related: ["grey-hair-oil", "amla-hair-oil", "besan-face-pack"],
    status: "published",
    reviewStatus: "pending",
    publishedAt: "2026-11-12",
    updatedAt: "2026-11-18",
  },
];
