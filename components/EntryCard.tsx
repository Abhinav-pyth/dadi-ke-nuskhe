import { ArrowRight, ChefHat, Clock, Leaf } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { t } from "@/lib/copy";
import { getSection } from "@/lib/sections";
import type { Entry, Lang } from "@/lib/types";
import { readingTime } from "@/lib/utils";

export function EntryCard({
  entry,
  lang,
  className,
}: {
  entry: Entry;
  lang: Lang;
  className?: string;
}) {
  const labels = t(lang);
  const section = getSection(entry.section);
  const recipe = entry.kind === "recipe" ? entry : null;
  const minutes = recipe
    ? recipe.prepMinutes + recipe.cookMinutes
    : readingTime([entry.summary, ...entry.intro].join(" "), lang);

  return (
    <article
      className={`group relative flex h-full flex-col rounded-3xl border border-leaf-900/[0.07] bg-cream-50 p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-leaf-700/20 hover:shadow-lift ${className ?? ""}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={recipe ? "saffron" : "leaf"}>
          {recipe ? <ChefHat aria-hidden="true" className="h-3 w-3" /> : <Leaf aria-hidden="true" className="h-3 w-3" />}
          {section.name[lang]}
        </Badge>
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-soft">
          <Clock aria-hidden="true" className="h-3 w-3" />
          {recipe
            ? `${minutes} ${labels.common.minutes}`
            : `${minutes} ${labels.common.minRead}`}
        </span>
      </div>

      <h3 className="mt-3 font-serif text-xl leading-snug text-leaf-900">
        <Link href={`/${lang}/${section.slug[lang]}/${entry.slug}`} className="after:absolute after:inset-0">
          {entry.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{entry.summary}</p>

      {recipe ? (
        <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-leaf-900/[0.06] pt-3 text-[11px]">
          <div>
            <dt className="uppercase tracking-[0.08em] text-ink-soft">{labels.recipe.prepTime}</dt>
            <dd className="mt-0.5 font-semibold text-leaf-900">
              {recipe.prepMinutes} {labels.common.minutes}
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.08em] text-ink-soft">{labels.recipe.cookTime}</dt>
            <dd className="mt-0.5 font-semibold text-leaf-900">
              {recipe.cookMinutes} {labels.common.minutes}
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.08em] text-ink-soft">{labels.recipe.servings}</dt>
            <dd className="mt-0.5 font-semibold text-leaf-900">{recipe.servings}</dd>
          </div>
        </dl>
      ) : null}

      <div className="mt-auto flex items-center justify-between pt-5 text-xs font-semibold text-leaf-700">
        <span>{labels.common.readMore}</span>
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </article>
  );
}
