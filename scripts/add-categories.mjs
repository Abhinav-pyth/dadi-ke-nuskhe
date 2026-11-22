import { readFileSync, writeFileSync } from "node:fs";

const files = ["content/en/guides/remedies.ts", "content/en/guides/diy.ts"];

const byKind = {
  remedy: ["remedies"],
  "hair-care": ["hair-care-cat"],
  beauty: ["skin-care", "beauty-products"],
  "homemade-product": ["homemade-things"],
  household: ["natural-cleaning"],
};

const extras = {
  "grey-hair-oil": ["grey-hair"],
  "curry-leaf-hair-oil": ["grey-hair"],
  dandruff: ["hair-care-cat"],
  "sore-throat": ["winter-remedies"],
};

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const out = source.replace(
    /(\n    kind: "(remedy|hair-care|beauty|homemade-product|household)",\n(?:.*\n)*?    section: "[a-z-]+",\n)(    title:)/g,
    (match, head, kind, title) => {
      const key = /key: "([^"]+)"/.exec(match)?.[1] ?? "";
      const categories = [...(byKind[kind] ?? []), ...(extras[key] ?? [])];
      const line = `    categories: [${categories.map((c) => `"${c}"`).join(", ")}],\n`;
      return `${head}${line}${title}`;
    },
  );
  writeFileSync(file, out);
  console.log(`${file}: ${(out.match(/categories:/g) ?? []).length} categories blocks`);
}
