import { ArrowRight, Beaker, Flame } from "lucide-react";
import Link from "next/link";

import { t } from "@/lib/copy";
import type { GuideEntry, Lang } from "@/lib/types";

/**
 * The site's running argument, in one band: what dadi maa's household does,
 * and what the published evidence behind it actually says, spoken in dada ji's
 * voice. Everything shown here is taken from the entry's own `homeRemedies`,
 * `method` and `evidence` fields — the persona never invents a claim.
 */
export function DadiDadaPanel({ lang, entry }: { lang: Lang; entry: GuideEntry }) {
  const labels = t(lang);
  const copy = labels.dadiDada;

  const nuskhe = entry.homeRemedies?.length
    ? entry.homeRemedies.slice(0, 2).map((remedy) => ({
        name: remedy.name,
        text: remedy.preparation[0] ?? remedy.evidence,
      }))
    : (entry.method ?? []).slice(0, 2).map((step, index) => ({
        name: `${labels.recipe.stepLabel} ${index + 1}`,
        text: step.text,
      }));

  return (
    <section
      id="dadi-vs-dada"
      aria-labelledby="dadi-vs-dada-heading"
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-leaf-900/10 bg-cream-50"
    >
      <div className="border-b border-leaf-900/10 px-5 py-5 sm:px-6">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2
          id="dadi-vs-dada-heading"
          className={`mt-2 text-xl leading-snug text-leaf-900 sm:text-2xl ${
            lang === "hi" ? "font-hindi-serif" : "font-serif"
          }`}
        >
          {copy.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">{copy.lead}</p>
      </div>

      <div className="grid gap-px bg-leaf-900/10 md:grid-cols-2">
        {/* Dadi maa: the preparation as the household makes it. */}
        <div className="bg-cream-50 p-5 sm:p-6">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-saffron-600">
            <Flame aria-hidden="true" className="h-3.5 w-3.5" />
            {copy.dadiName} · {copy.dadiLabel}
          </p>
          {nuskhe.length ? (
            <ol className="mt-4 space-y-4">
              {nuskhe.map((item, index) => (
                <li key={`${item.name}-${index}`}>
                  <p className="text-[15px] font-semibold text-leaf-900">
                    <span className="mr-2 inline-grid h-5 w-5 place-items-center rounded-full bg-saffron-100 text-[11px] text-saffron-600">
                      {index + 1}
                    </span>
                    {item.name}
                  </p>
                  <p className="mt-1 pl-7 text-sm leading-relaxed text-ink-muted">{item.text}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{copy.dadiFallback}</p>
          )}
        </div>

        {/* Dada ji: what the cited evidence supports, and its limits. */}
        <div className="bg-leaf-900 p-5 text-cream-100 sm:p-6">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-saffron-200">
            <Beaker aria-hidden="true" className="h-3.5 w-3.5" />
            {copy.dadaName} · {copy.dadaLabel}
          </p>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-cream-100/85">
            {entry.evidence.slice(0, 2).map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="#references"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-saffron-200 underline decoration-saffron-200/40 underline-offset-4 hover:decoration-saffron-200"
          >
            {copy.sourcesCta}
            <ArrowRight aria-hidden="true" className="h-3 w-3" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-1 border-t border-leaf-900/10 px-5 py-4 text-xs leading-relaxed text-ink-soft sm:px-6">
        <span className="font-semibold uppercase tracking-[0.12em] text-ink-soft">
          {copy.reading}
        </span>
        <span>{copy.readingBody}</span>
      </div>
    </section>
  );
}
