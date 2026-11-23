"use client";

import { Gamepad2 } from "lucide-react";
import { useEffect, useState } from "react";

import { t } from "@/lib/copy";
import { GTA_THEME, THEME_ATTRIBUTE, THEME_STORAGE_KEY } from "@/lib/theme";
import type { Lang } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Optional GTA6-style neon skin. The site is warm, cream-and-leaf by default;
 * this is a per-device preference that only flips a `data-theme` attribute —
 * no content, links or structured data change.
 */
export function ThemeToggle({ lang, className }: { lang: Lang; className?: string }) {
  const copy = t(lang).dadiDada;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(document.documentElement.getAttribute(THEME_ATTRIBUTE) === GTA_THEME);
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    if (next) {
      document.documentElement.setAttribute(THEME_ATTRIBUTE, GTA_THEME);
    } else {
      document.documentElement.removeAttribute(THEME_ATTRIBUTE);
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? GTA_THEME : "classic");
    } catch {
      // Private mode or storage disabled: the theme still applies for this view.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? copy.themeOn : copy.themeOff}
      title={copy.themeHint}
      className={cn(
        "inline-flex h-10 items-center gap-1.5 rounded-full border px-3 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors",
        enabled
          ? "border-clay text-clay"
          : "border-leaf-900/15 text-leaf-800 hover:bg-leaf-50",
        className,
      )}
    >
      <Gamepad2 aria-hidden="true" className="h-4 w-4" />
      <span className="hidden lg:inline">{copy.theme}</span>
    </button>
  );
}
