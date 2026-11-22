import type { Lang } from "./types";

/** Language metadata lives in its own module to avoid a circular import. */
export const LANGS: Lang[] = ["hi", "en"];

export const LANG_META: Record<
  Lang,
  { label: string; nativeLabel: string; htmlLang: string; hreflang: string; locale: string }
> = {
  hi: { label: "Hindi", nativeLabel: "हिन्दी", htmlLang: "hi", hreflang: "hi-IN", locale: "hi_IN" },
  en: { label: "English", nativeLabel: "English", htmlLang: "en", hreflang: "en-IN", locale: "en_IN" },
};
