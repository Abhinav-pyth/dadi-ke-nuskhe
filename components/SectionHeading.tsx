import Link from "next/link";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  action,
  className,
  id,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  action?: { label: string; href: string };
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-2xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={id} className="mt-2 font-serif text-2xl leading-tight text-leaf-900 sm:text-3xl">
          {title}
        </h2>
        {lead ? <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{lead}</p> : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className="shrink-0 self-start rounded-full border border-leaf-700/25 px-4 py-2 text-xs font-semibold text-leaf-800 transition-colors hover:bg-leaf-50 sm:self-auto"
        >
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
