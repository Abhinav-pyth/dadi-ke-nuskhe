import Link from "next/link";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Lang } from "@/lib/types";

export function Logo({
  lang,
  className,
  showTagline = false,
}: {
  lang: Lang;
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <Link
      href={`/${lang}`}
      className={cn("group flex shrink-0 items-center gap-3", className)}
      aria-label={`${SITE.name[lang]} — ${lang === "hi" ? "होमपेज" : "home"}`}
    >
      <span
        aria-hidden="true"
        className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf-700 text-cream-50 ring-4 ring-saffron-100/60 transition-colors group-hover:bg-leaf-800"
      >
        <svg viewBox="0 0 24 24" className="icon-animated h-6 w-6" fill="none" aria-hidden="true">
          <path
            d="M12 20c0-4.2.9-7 2.6-8.7C16.3 9.6 19 8.9 21 8.6c-.2 2.2-.8 4.6-2.3 6.1C17 16.5 14.6 17.4 12 20Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M12 20c0-4.2-.9-7-2.6-8.7C7.7 9.6 5 8.9 3 8.6c.2 2.2.8 4.6 2.3 6.1C7 16.5 9.4 17.4 12 20Z"
            fill="currentColor"
            opacity="0.55"
          />
          <path d="M12 20V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "whitespace-nowrap font-semibold text-leaf-900",
            lang === "hi" ? "font-hindi-serif text-lg" : "font-serif text-lg",
          )}
        >
          {SITE.name[lang]}
        </span>
        {showTagline ? (
          <span className="mt-0.5 hidden whitespace-nowrap text-[11px] leading-snug text-ink-soft md:block xl:hidden">
            {SITE.tagline[lang]}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
