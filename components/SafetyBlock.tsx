import { Info, SprayCan, Sparkles } from "lucide-react";
import Link from "next/link";

import { t } from "@/lib/copy";
import {
  CLEANING_SAFETY_DISCLAIMER,
  COSMETIC_SAFETY_DISCLAIMER,
  FOOD_SAFETY_DISCLAIMER,
} from "@/lib/site";
import type { Lang } from "@/lib/types";
import { cn } from "@/lib/utils";

export function FoodSafetyNotice({ lang, className }: { lang: Lang; className?: string }) {
  const labels = t(lang);
  return (
    <aside className={cn("rounded-2xl border border-leaf-900/15 bg-leaf-50/60 p-4 text-sm leading-relaxed text-leaf-900", className)}>
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-leaf-700">
        <Info aria-hidden="true" className="h-4 w-4" />
        {labels.recipeSafety.title}
      </p>
      <p className="mt-2">{FOOD_SAFETY_DISCLAIMER[lang]}</p>
      <p className="mt-2 text-xs">
        <Link className="font-semibold underline" href={`/${lang}/food-safety-policy`}>
          {labels.footer.foodSafety}
        </Link>
      </p>
    </aside>
  );
}

export function CosmeticSafetyNotice({ lang, className }: { lang: Lang; className?: string }) {
  const labels = t(lang);
  return (
    <aside
      className={cn(
        "rounded-2xl border border-saffron-200 bg-[var(--notice-amber-bg)] p-4 text-sm leading-relaxed text-[var(--notice-amber-text)]",
        className,
      )}
    >
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-saffron-600">
        <Sparkles aria-hidden="true" className="h-4 w-4" />
        {labels.cosmeticSafety.title}
      </p>
      <p className="mt-2">{COSMETIC_SAFETY_DISCLAIMER[lang]}</p>
    </aside>
  );
}

export function CleaningSafetyNotice({ lang, className }: { lang: Lang; className?: string }) {
  const labels = t(lang);
  return (
    <aside className={cn("rounded-2xl border border-leaf-900/15 bg-cream-100/70 p-4 text-sm leading-relaxed text-ink", className)}>
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-leaf-800">
        <SprayCan aria-hidden="true" className="h-4 w-4" />
        {labels.cleaningSafety.title}
      </p>
      <p className="mt-2">{CLEANING_SAFETY_DISCLAIMER[lang]}</p>
    </aside>
  );
}
