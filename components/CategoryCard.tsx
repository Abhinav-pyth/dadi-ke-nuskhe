import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CategoryIcon } from "@/components/CategoryIcon";
import { t } from "@/lib/copy";
import type { CategoryEntry, Lang } from "@/lib/types";
import { cn } from "@/lib/utils";

export function CategoryCard({
  category,
  count,
  lang,
  className,
}: {
  category: CategoryEntry;
  count: number;
  lang: Lang;
  className?: string;
}) {
  const labels = t(lang);
  return (
    <Link
      href={`/${lang}/category/${category.slug}`}
      className={cn(
        "group flex h-full flex-col justify-between gap-4 rounded-3xl border border-leaf-900/[0.07] bg-cream-50 p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-leaf-700/20 hover:shadow-lift",
        className,
      )}
    >
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-leaf-50 text-leaf-700 ring-1 ring-leaf-100 transition-colors group-hover:bg-leaf-100">
        <CategoryIcon name={category.icon} />
      </span>
      <span className="block">
        <span className="block font-serif text-base font-semibold leading-snug text-leaf-900">
          {category.name}
        </span>
        <span className="mt-1 block text-xs leading-relaxed text-ink-muted">{category.tagline}</span>
      </span>
      <span className="flex items-center justify-between border-t border-leaf-900/[0.06] pt-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
        <span>
          {count} {labels.common.entriesCount}
        </span>
        <ArrowRight
          aria-hidden="true"
          className="h-3.5 w-3.5 text-leaf-600 transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
