import { t } from "@/lib/copy";
import type { Lang } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Reserved, clearly-labelled advertising space.
 *
 * Renders nothing until an approved AdSense publisher ID is configured, so the
 * layout never ships empty ad boxes and never pushes medical safety notices
 * out of view. Ad units sit below article content, never inside it.
 */
export function AdSlot({
  lang,
  slot,
  className,
}: {
  lang: Lang;
  slot: string;
  className?: string;
}) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  if (!client) return null;
  const labels = t(lang);

  return (
    <aside
      aria-label={labels.ads.label}
      className={cn("rounded-2xl border border-dashed border-leaf-900/15 bg-cream-100/50 p-3", className)}
    >
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
        {labels.ads.label}
      </p>
      <div className="min-h-[90px]" data-ad-client={client} data-ad-slot={slot} />
      <p className="mt-2 text-[10px] leading-relaxed text-ink-soft">{labels.ads.disclosure}</p>
    </aside>
  );
}
