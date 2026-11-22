import { getSection, sectionEntryPath, sectionPath } from "./sections";
import type { Lang, SectionKey } from "./types";

export { LANGS, LANG_META } from "./lang-meta";

export function otherLang(lang: Lang): Lang {
  return lang === "hi" ? "en" : "hi";
}

export function homePath(lang: Lang) {
  return `/${lang}`;
}

export function categoriesPath(lang: Lang) {
  return `/${lang}/categories`;
}

export function categoryPath(lang: Lang, slug: string) {
  return `/${lang}/category/${slug}`;
}

export function ingredientsPath(lang: Lang) {
  return `/${lang}/${lang === "hi" ? "samagri" : "ingredients"}`;
}

export function ingredientPath(lang: Lang, slug: string) {
  return `${ingredientsPath(lang)}/${slug}`;
}

export function collectionsPath(lang: Lang) {
  return `/${lang}/${lang === "hi" ? "sangrah" : "collections"}`;
}

export function collectionPath(lang: Lang, slug: string) {
  return `${collectionsPath(lang)}/${slug}`;
}

export function searchPath(lang: Lang, query?: string) {
  return query ? `/${lang}/search?q=${encodeURIComponent(query)}` : `/${lang}/search`;
}

export function infoPath(lang: Lang, key: string) {
  return `/${lang}/${key}`;
}

export function sectionIndexPath(lang: Lang, key: SectionKey) {
  return sectionPath(lang, key);
}

export function entryPath(lang: Lang, section: SectionKey, slug: string) {
  return sectionEntryPath(lang, section, slug);
}

/** Human label for a section, in the requested language. */
export function sectionLabel(lang: Lang, key: SectionKey) {
  return getSection(key).name[lang];
}
