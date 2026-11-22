import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export interface RelatedLink {
  title: string;
  href: string;
  description?: string;
  meta?: string;
}

/** Used for related concerns, ingredients and categories alike. */
export function RelatedArticles({
  title,
  items,
  className,
  id,
}: {
  title: string;
  items: RelatedLink[];
  className?: string;
  id?: string;
}) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby={id ?? "related-heading"} className={cn("", className)}>
      <h2
        id={id ?? "related-heading"}
        className="font-serif text-xl leading-tight text-leaf-900"
      >
        {title}
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-4 transition-colors hover:border-leaf-700/25 hover:bg-leaf-50/50"
            >
              <span>
                {item.meta ? (
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    {item.meta}
                  </span>
                ) : null}
                <span className="mt-0.5 block text-sm font-medium leading-snug text-leaf-900">
                  {item.title}
                </span>
                {item.description ? (
                  <span className="mt-1 block text-xs leading-relaxed text-ink-muted">
                    {item.description}
                  </span>
                ) : null}
              </span>
              <ArrowRight
                aria-hidden="true"
                className="mt-1 h-4 w-4 shrink-0 text-leaf-600 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
