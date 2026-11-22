"use client";

import { Languages } from "lucide-react";
import { usePathname } from "next/navigation";

import { t } from "@/lib/copy";
import { otherLang } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Language switcher.
 *
 * Every request has its own URL per language. For a page that has a published
 * translation we link straight to it; otherwise we fall back to that
 * language's homepage (never to a half-translated hybrid page, and never by
 * redirecting visitors based on IP or browser language).
 */
export function LanguageSwitcher({
  lang,
  pairs,
  className,
  variant = "header",
}: {
  lang: Lang;
  pairs: Record<string, string>;
  className?: string;
  variant?: "header" | "footer";
}) {
  const pathname = usePathname() || `/${lang}`;
  const target = otherLang(lang);
  const href = pairs[pathname] ?? `/${target}`;
  const hasTranslation = Boolean(pairs[pathname]);
  const labels = t(lang);

  const text = target === "en" ? "English" : "हिन्दी";

  return (
    <a
      href={href}
      hrefLang={target === "en" ? "en-IN" : "hi-IN"}
      lang={target}
      aria-label={`${target === "en" ? "Read in English" : "हिन्दी में पढ़ें"}${
        hasTranslation ? "" : ` — ${labels.language.fallback}`
      }`}
      title={hasTranslation ? undefined : labels.language.fallback}
      data-translated={hasTranslation}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border font-semibold transition-colors",
        variant === "header"
          ? "h-9 border-leaf-900/15 px-3.5 text-xs text-leaf-800 hover:border-leaf-700/40 hover:bg-leaf-50"
          : "h-10 border-cream-300/30 px-4 text-sm text-cream-100 hover:border-cream-100/60 hover:bg-white/5",
        className,
      )}
    >
      <Languages aria-hidden="true" className="h-4 w-4" />
      <span lang={target}>{text}</span>
    </a>
  );
}
