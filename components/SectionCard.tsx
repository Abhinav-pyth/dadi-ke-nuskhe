import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CategoryIcon } from "@/components/CategoryIcon";
import type { Lang, SectionKey } from "@/lib/types";
import { getSection } from "@/lib/sections";

export function SectionCard({
  sectionKey,
  lang,
  count,
}: {
  sectionKey: SectionKey;
  lang: Lang;
  count: number;
}) {
  const section = getSection(sectionKey);
  return (
    <Link
      href={`/${lang}/${section.slug[lang]}`}
      className="group flex items-start gap-4 rounded-3xl border border-leaf-900/[0.07] bg-gradient-to-br from-cream-50 to-cream-100/60 p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-leaf-700/20 hover:shadow-lift"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-leaf-700 text-cream-50">
        <CategoryIcon name={section.icon} />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          <span className="font-serif text-lg leading-snug text-leaf-900">{section.name[lang]}</span>
          <span className="rounded-full bg-cream-100 px-2 py-0.5 text-[10px] font-semibold text-ink-soft">
            {count}
          </span>
        </span>
        <span className="mt-1 block text-xs leading-relaxed text-ink-muted">{section.tagline[lang]}</span>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-leaf-700">
          {lang === "hi" ? "देखें" : "Explore"}
          <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </span>
    </Link>
  );
}
