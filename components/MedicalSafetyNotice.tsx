import { Info, Phone, ShieldAlert, ShieldCheck, SprayCan } from "lucide-react";
import Link from "next/link";

import { t } from "@/lib/copy";
import {
  COSMETIC_SAFETY_DISCLAIMER,
  EMERGENCY,
  FOOD_SAFETY_DISCLAIMER,
} from "@/lib/site";
import type { Lang, SectionKey } from "@/lib/types";
import { cn } from "@/lib/utils";

export function MedicalSafetyNotice({
  lang,
  className,
  showReviewNote = false,
}: {
  lang: Lang;
  className?: string;
  showReviewNote?: boolean;
}) {
  const labels = t(lang);
  return (
    <aside
      className={cn(
        "rounded-2xl border border-saffron-200 bg-[var(--notice-amber-bg)] p-4 text-sm leading-relaxed text-[var(--notice-amber-text)]",
        className,
      )}
      aria-labelledby="medical-notice-heading"
    >
      <p
        id="medical-notice-heading"
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--notice-amber-heading)]"
      >
        <Info aria-hidden="true" className="h-4 w-4" />
        {labels.medicalSafety.title}
      </p>
      <p className="mt-2">{labels.medicalSafety.text}</p>
      {showReviewNote ? <p className="mt-2 text-xs opacity-90">{labels.common.reviewPending}</p> : null}
      <p className="mt-2 text-xs">
        <Link className="font-semibold underline" href={`/${lang}/medical-disclaimer`}>
          {labels.medicalSafety.link}
        </Link>
      </p>
    </aside>
  );
}

export function EmergencyNotice({
  lang,
  className,
  headingId = "emergency-heading",
}: {
  lang: Lang;
  className?: string;
  /** Unique per instance: the callout is rendered twice on remedy pages. */
  headingId?: string;
}) {
  const labels = t(lang);
  return (
    <aside
      className={cn(
        "rounded-2xl border bg-[var(--notice-emergency-bg)] p-5 text-sm leading-relaxed text-[var(--notice-emergency-text)] border-[var(--notice-emergency-border)]",
        className,
      )}
      aria-labelledby={headingId}
    >
      <p
        id={headingId}
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--notice-emergency-heading)]"
      >
        <ShieldAlert aria-hidden="true" className="h-4 w-4" />
        {EMERGENCY.title[lang]}
      </p>
      <p className="mt-2">{EMERGENCY.text[lang]}</p>
      <a
        href={`tel:${EMERGENCY.number}`}
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--notice-emergency-action)] px-4 py-2 text-xs font-semibold text-[var(--notice-emergency-action-text)] hover:bg-[var(--notice-emergency-action-hover)]"
      >
        <Phone aria-hidden="true" className="h-3.5 w-3.5" />
        {labels.emergency.call}
      </a>
    </aside>
  );
}

/** Section-appropriate safety notice for recipes and DIY guides. */
export function SectionSafetyNotice({
  lang,
  section,
  className,
}: {
  lang: Lang;
  section: SectionKey;
  className?: string;
}) {
  const labels = t(lang);

  if (section === "household-tips") {
    return (
      <aside
        className={cn("rounded-2xl border border-leaf-900/15 bg-cream-100/70 p-4 text-sm leading-relaxed text-ink", className)}
      >
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-leaf-800">
          <SprayCan aria-hidden="true" className="h-4 w-4" />
          {labels.cleaningSafety.title}
        </p>
        <p className="mt-2">{labels.cleaningSafety.text}</p>
        <p className="mt-2 text-xs">
          <Link className="font-semibold underline" href={`/${lang}/food-safety-policy`}>
            {labels.footer.foodSafety}
          </Link>
        </p>
      </aside>
    );
  }

  if (section === "beauty" || section === "hair-care") {
    return (
      <aside
        className={cn(
          "rounded-2xl border border-saffron-200 bg-[var(--notice-amber-bg)] p-4 text-sm leading-relaxed text-[var(--notice-amber-text)]",
          className,
        )}
      >
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-saffron-600">
          <ShieldCheck aria-hidden="true" className="h-4 w-4" />
          {labels.cosmeticSafety.title}
        </p>
        <p className="mt-2">{COSMETIC_SAFETY_DISCLAIMER[lang]}</p>
        <p className="mt-2 text-xs">{labels.cosmeticSafety.text}</p>
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "rounded-2xl border border-leaf-900/15 bg-leaf-50/60 p-4 text-sm leading-relaxed text-leaf-900",
        className,
      )}
    >
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
