import { readFileSync, writeFileSync } from "node:fs";

const guideFiles = [
  "content/en/guides/remedies.ts",
  "content/en/guides/diy.ts",
  "content/hi/guides/remedies.ts",
  "content/hi/guides/diy.ts",
];

const tagByKind = {
  remedy: ["health"],
  "hair-care": ["hair"],
  beauty: ["skincare"],
  "homemade-product": ["kitchen"],
  household: ["home"],
};

for (const file of guideFiles) {
  let source = readFileSync(file, "utf8");
  source = source.replace(
    /(\n    kind: "(remedy|hair-care|beauty|homemade-product|household)",\n(?:.*\n)*?    categories: \[[^\]]*\],\n)(    title:)/g,
    (match, head, kind, title) => {
      if (head.includes("tags:")) return match;
      const slug = /slug: "([^"]+)"/.exec(match)?.[1] ?? "guide";
      const tags = tagByKind[kind] ?? ["health"];
      const keywords = slug.split("-").filter(Boolean).slice(0, 4);
      const lines =
        `    tags: [${tags.map((t) => `"${t}"`).join(", ")}],\n` +
        `    keywords: [${keywords.map((k) => `"${k}"`).join(", ")}],\n`;
      return `${head}${lines}${title}`;
    },
  );
  writeFileSync(file, source);
}

// Widen the English copy object so translations can supply different strings.
let copy = readFileSync("lib/copy.ts", "utf8");
copy = copy.replace("} as const;\n\ntype Copy = typeof en;", "};\n\ntype Copy = typeof en;");
if (!copy.includes("evidence:")) {
  copy = copy.replace(
    /(noReviewer: "[^"]*",\n)/g,
    '$1    evidence: "Evidence basis",\n    educational: "General education, not medical advice",\n',
  );
}
writeFileSync("lib/copy.ts", copy);

// lucide-react in this project has no `Jar` icon.
let icon = readFileSync("components/CategoryIcon.tsx", "utf8");
icon = icon.replace("  Jar,\n", "").replace("  jar: Jar,", "  jar: Archive,").replace("  Baby,", "  Archive,\n  Baby,");
writeFileSync("components/CategoryIcon.tsx", icon);

console.log("done");
