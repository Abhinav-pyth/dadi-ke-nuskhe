import { ArrowRight, Beaker, Flame } from "lucide-react";
import Link from "next/link";

import { t } from "@/lib/copy";
import { sectionPath } from "@/lib/sections";
import type { Lang } from "@/lib/types";

/**
 * Home-page introduction to the site's running format: the household nuskha
 * and the evidence behind it, side by side. It only advertises the format; the
 * per-page DadiDadaPanel does the actual comparing.
 */
export function DadiDadaStrip({ lang }: { lang: Lang }) {
  const copy = t(lang).dadiDada;
  const href = sectionPath(lang, "home-remedies");

  return (
    <section className="container-page" aria-labelledby="home-dadi-dada">
      <div className="overflow-hidden rounded-3xl border border-leaf-900/10 bg-cream-50">
        <div className="grid gap-px bg-leaf-900/10 md:grid-cols-2">
          <div className="bg-cream-50 p-5 sm:p-6">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-saffron-600">
              <Flame aria-hidden="true" className="h-3.5 w-3.5" />
              {copy.dadiName}
            </p>
            <p className="mt-3 font-serif text-lg leading-snug text-leaf-900">{copy.dadiLine}</p>
          </div>
          <div className="bg-leaf-900 p-5 text-cream-100 sm:p-6">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-saffron-200">
              <Beaker aria-hidden="true" className="h-3.5 w-3.5" />
              {copy.dadaName}
            </p>
            <p className="mt-3 font-serif text-lg leading-snug text-cream-50">{copy.dadaLine}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-leaf-900/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-saffron-600">
              {copy.eyebrow}
            </p>
            <h2 id="home-dadi-dada" className="mt-1 font-serif text-xl text-leaf-900">
              {copy.homeTitle}
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-muted">{copy.homeLead}</p>
          </div>
          <Link
            href={href}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-leaf-700 px-4 py-2 text-xs font-semibold text-cream-50 hover:bg-leaf-800"
          >
            {copy.homeCta}
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
