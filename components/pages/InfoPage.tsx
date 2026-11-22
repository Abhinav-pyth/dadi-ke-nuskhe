import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { MedicalSafetyNotice } from "@/components/MedicalSafetyNotice";
import { Badge } from "@/components/ui/badge";
import { getAllReferences } from "@/lib/entries";
import { t } from "@/lib/copy";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import type { InfoPage as InfoPageType, Lang } from "@/lib/types";
import { formatDate } from "@/lib/utils";

const TRUST_LINKS = (lang: Lang) => [
  { slug: "about", label: t(lang).nav.about },
  { slug: "editorial-policy", label: t(lang).footer.editorial },
  { slug: "sources", label: t(lang).footer.sources },
  { slug: "medical-disclaimer", label: t(lang).medicalSafety.title },
  { slug: "food-safety-policy", label: t(lang).footer.foodSafety },
  { slug: "privacy-policy", label: t(lang).footer.privacy },
  { slug: "terms", label: t(lang).footer.terms },
  { slug: "contact", label: t(lang).footer.contact },
];

export function InfoPageContent({ lang, page }: { lang: Lang; page: InfoPageType }) {
  const labels = t(lang);
  const url = `/${lang}/${page.key}`;
  const crumbs = [{ name: labels.common.home, href: `/${lang}` }, { name: page.title }];
  const references = page.key === "sources" ? getAllReferences(lang) : [];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: c.href ?? url })))} />
      <div className="border-b border-leaf-900/[0.06] bg-cream-100/50">
        <div className="container-page py-10 sm:py-14">
          <Breadcrumbs items={crumbs} />
          <div className="mt-5 max-w-3xl">
            <Badge tone="neutral">{labels.common.educational}</Badge>
            <h1
              className={`mt-3 text-3xl leading-tight text-leaf-900 sm:text-4xl ${
                lang === "hi" ? "font-hindi-serif" : "font-serif"
              }`}
            >
              {page.title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">{page.intro}</p>
            <p className="mt-3 text-xs text-ink-soft">
              {labels.common.updated}: {formatDate(page.updatedAt, lang)}
            </p>
          </div>
        </div>
      </div>

      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="max-w-content">
            {page.sections.map((section, index) => (
              <section
                key={section.heading}
                className={index === 0 ? "" : "mt-9 border-t border-leaf-900/10 pt-8"}
              >
                <h2 className="font-serif text-xl leading-tight text-leaf-900 sm:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2.5 text-[15px] leading-relaxed text-ink-muted"
                      >
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {page.key === "contact" ? (
              <div className="mt-9">
                <ContactForm lang={lang} />
                <p className="mt-4 text-sm text-ink-muted">
                  {labels.contact.lead}{" "}
                  <a className="link-underline font-medium" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </p>
              </div>
            ) : null}

            {page.key === "sources" ? (
              <section className="mt-9 border-t border-leaf-900/10 pt-8">
                <h2 className="font-serif text-xl text-leaf-900 sm:text-2xl">
                  {labels.common.sources} ({references.length})
                </h2>
                <ul className="mt-4 divide-y divide-leaf-900/10 rounded-2xl border border-leaf-900/[0.08] bg-cream-50">
                  {references.map((reference) => (
                    <li key={reference.url} className="p-4">
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-leaf-800 underline decoration-leaf-300 underline-offset-4 hover:decoration-leaf-600"
                      >
                        {reference.title}
                      </a>
                      <p className="mt-1 text-xs text-ink-muted">
                        {reference.publisher}
                        {reference.publishedDate ? ` · ${reference.publishedDate}` : ""}
                      </p>
                      <p className="mt-1 text-xs text-ink-soft">
                        {labels.common.supportingClaim}: {reference.supports}
                      </p>
                      <p className="mt-1 text-[11px] text-ink-soft">
                        {reference.usedIn.slice(0, 3).join(" · ")}
                        {reference.usedIn.length > 3 ? ` +${reference.usedIn.length - 3}` : ""}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <div className="mt-10">
              <MedicalSafetyNotice lang={lang} />
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-leaf-900/10 pt-6 text-sm">
              {TRUST_LINKS(lang)
                .filter((item) => item.slug !== page.key)
                .map((item) => (
                  <Link
                    key={item.slug}
                    className="font-semibold text-leaf-700 hover:underline"
                    href={`/${lang}/${item.slug}`}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {labels.footer.trust}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {TRUST_LINKS(lang).map((item) => (
                  <li key={item.slug}>
                    <Link href={`/${lang}/${item.slug}`} className="text-leaf-700 hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
