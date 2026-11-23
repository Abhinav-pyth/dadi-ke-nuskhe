import { ArrowRight, FlaskConical, Info, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AdSlot } from "@/components/AdSlot";
import { ArticleMetadata } from "@/components/ArticleMetadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DadiDadaPanel } from "@/components/DadiDadaPanel";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import {
  EmergencyNotice,
  MedicalSafetyNotice,
  SectionSafetyNotice,
} from "@/components/MedicalSafetyNotice";
import { Newsletter } from "@/components/Newsletter";
import { RelatedArticles } from "@/components/RelatedArticles";
import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/ui/badge";
import {
  getCategoryByKey,
  getEntry,
  getIngredientByKey,
  ingredientsForEntry,
  relatedEntries,
} from "@/lib/entries";
import { t } from "@/lib/copy";
import { categoryPath, ingredientPath } from "@/lib/i18n";
import { getSection, sectionPath } from "@/lib/sections";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import type { Lang, SectionKey } from "@/lib/types";
import { formatDate } from "@/lib/utils";

function List({ items, tone = "default" }: { items: string[]; tone?: "default" | "warning" }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-muted">
          <span
            aria-hidden="true"
            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tone === "warning" ? "bg-clay" : "bg-moss"}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Block({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28 border-t border-leaf-900/10 pt-8">
      <h2 id={`${id}-heading`} className="font-serif text-xl leading-tight text-leaf-900 sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function GuidePage({
  lang,
  section: sectionKey,
  slug,
}: {
  lang: Lang;
  section: SectionKey;
  slug: string;
}) {
  const entry = getEntry(lang, sectionKey, slug);
  if (!entry || entry.kind === "recipe") notFound();
  const guide = entry;

  const labels = t(lang);
  const section = getSection(guide.section);
  const path = `/${lang}/${section.slug[lang]}/${guide.slug}`;
  const ingredients = ingredientsForEntry(lang, guide.ingredientKeys);
  const related = relatedEntries(lang, guide.related);
  const isRemedy = guide.kind === "remedy";

  const crumbs = [
    { name: labels.common.home, href: `/${lang}` },
    { name: section.name[lang], href: sectionPath(lang, guide.section) },
    { name: guide.title },
  ];

  const toc = [
    { id: "dadi-vs-dada", label: labels.dadiDada.eyebrow },
    { id: "what-is", label: labels.guide.whatIs },
    ...(guide.symptoms?.length ? [{ id: "symptoms", label: labels.guide.symptoms }] : []),
    ...(guide.causes?.length ? [{ id: "causes", label: labels.guide.causes }] : []),
    ...(guide.homeRemedies?.length ? [{ id: "preparations", label: labels.guide.remedies }] : []),
    ...(guide.materials?.length ? [{ id: "materials", label: labels.guide.materials }] : []),
    ...(guide.method?.length ? [{ id: "method", label: labels.guide.method }] : []),
    ...(guide.usage?.length ? [{ id: "usage", label: labels.guide.usage }] : []),
    { id: "evidence", label: labels.guide.evidence },
    { id: "safety", label: labels.guide.safety },
    ...(guide.storage?.length ? [{ id: "storage", label: labels.guide.storage }] : []),
    { id: "who", label: labels.guide.whoShouldAsk },
    ...(guide.seeDoctor?.length ? [{ id: "doctor", label: labels.guide.seeDoctor }] : []),
    // "emergency-signs" keeps this anchor distinct from the EmergencyNotice
    // callout's own id="emergency-heading".
    ...(guide.emergency?.length ? [{ id: "emergency-signs", label: labels.guide.emergency }] : []),
    ...(guide.faqs.length ? [{ id: "faqs", label: labels.common.faqTitle }] : []),
    { id: "references", label: labels.common.sources },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs.map((crumb) => ({ name: crumb.name, url: crumb.href ?? path }))),
          articleSchema({
            lang,
            title: guide.title,
            description: guide.metaDescription,
            url: path,
            publishedAt: guide.publishedAt,
            updatedAt: guide.updatedAt,
            section: section.name[lang],
            image: (guide.image ?? DEFAULT_OG_IMAGE).url,
            keywords: guide.keywords,
            reviewer:
              guide.reviewStatus === "approved" && guide.medicalReviewer ? guide.medicalReviewer : null,
          }),
          ...(guide.faqs.length ? [faqSchema(guide.faqs)] : []),
        ]}
      />

      <div className="container-page py-8 lg:py-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article>
            <Breadcrumbs items={crumbs} />

            <header className="mt-6">
              <div className="flex flex-wrap items-center gap-2">
                <Link href={sectionPath(lang, guide.section)}>
                  <Badge tone={isRemedy ? "leaf" : "saffron"}>{section.name[lang]}</Badge>
                </Link>
                <Badge tone="warning">{labels.common.reviewPending}</Badge>
              </div>
              <h1
                className={`mt-4 text-3xl leading-[1.2] text-leaf-900 sm:text-4xl ${
                  lang === "hi" ? "font-hindi-serif" : "font-serif"
                }`}
              >
                {guide.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">{guide.summary}</p>
            </header>

            <div className="mt-6">
              <ArticleMetadata
                lang={lang}
                publishedAt={guide.publishedAt}
                updatedAt={guide.updatedAt}
                reviewStatus={guide.reviewStatus}
                reviewer={guide.medicalReviewer ?? null}
                sources={guide.references.length}
              />
            </div>

            <div className="mt-6">
              {isRemedy ? (
                <MedicalSafetyNotice lang={lang} />
              ) : (
                <SectionSafetyNotice lang={lang} section={guide.section} />
              )}
            </div>

            <div className="mt-8 space-y-8">
              <div className="space-y-4 text-[15px] leading-relaxed text-ink-muted">
                {guide.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>

              <DadiDadaPanel lang={lang} entry={guide} />

              <Block id="what-is" title={labels.guide.whatIs}>
                <div className="space-y-4 text-[15px] leading-relaxed text-ink-muted">
                  {guide.whatIs.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </Block>

              {guide.symptoms?.length ? (
                <Block id="symptoms" title={labels.guide.symptoms}>
                  <List items={guide.symptoms} />
                </Block>
              ) : null}

              {guide.causes?.length ? (
                <Block id="causes" title={labels.guide.causes}>
                  <List items={guide.causes} />
                </Block>
              ) : null}

              {guide.homeRemedies?.length ? (
                <Block id="preparations" title={labels.guide.remedies}>
                  <ul className="space-y-4">
                    {guide.homeRemedies.map((remedy) => {
                      const ingredient = remedy.ingredientKey
                        ? getIngredientByKey(lang, remedy.ingredientKey)
                        : undefined;
                      return (
                        <li key={remedy.name} className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="font-serif text-lg text-leaf-900">{remedy.name}</h3>
                            {ingredient ? (
                              <Link
                                href={ingredientPath(lang, ingredient.slug)}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-leaf-700 hover:underline"
                              >
                                {ingredient.name}
                                <ArrowRight aria-hidden="true" className="h-3 w-3" />
                              </Link>
                            ) : null}
                          </div>
                          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                            {labels.guide.preparation}
                          </p>
                          <ol className="mt-2 space-y-1.5">
                            {remedy.preparation.map((step, index) => (
                              <li key={step} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-muted">
                                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-leaf-50 text-[11px] font-semibold text-leaf-800">
                                  {index + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                          <p className="mt-4 border-t border-leaf-900/[0.06] pt-3 text-sm leading-relaxed text-ink-muted">
                            <span className="font-semibold text-leaf-900">{labels.guide.evidence}:</span>{" "}
                            {remedy.evidence}
                          </p>
                          {remedy.caution ? (
                            <p className="mt-2 flex gap-2 rounded-xl bg-[var(--notice-emergency-bg)] p-3 text-xs leading-relaxed text-[var(--notice-emergency-text)]">
                              <ShieldAlert aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay" />
                              <span>
                                <strong className="font-semibold">{labels.guide.caution}:</strong> {remedy.caution}
                              </span>
                            </p>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </Block>
              ) : null}

              {guide.materials?.length ? (
                <Block id="materials" title={labels.guide.materials}>
                  <ul className="divide-y divide-leaf-900/[0.06] rounded-2xl border border-leaf-900/[0.08] bg-cream-50 px-5">
                    {guide.materials.map((material) => (
                      <li
                        key={`${material.item}-${material.unit}`}
                        className="flex items-baseline justify-between gap-4 py-2.5"
                      >
                        <span className="text-[15px] text-ink">
                          {material.item}
                          {material.note ? <span className="ml-1 text-xs text-ink-soft">({material.note})</span> : null}
                        </span>
                        <span className="shrink-0 text-sm font-semibold text-leaf-900">
                          {material.quantity === null
                            ? material.unit
                            : `${material.quantity} ${material.unit}`.trim()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Block>
              ) : null}

              {guide.method?.length ? (
                <Block id="method" title={labels.guide.method}>
                  <ol className="space-y-3">
                    {guide.method.map((step, index) => (
                      <li key={step.text.slice(0, 24)} className="flex gap-4">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-leaf-700 text-[11px] font-semibold text-cream-50">
                          {index + 1}
                        </span>
                        <p className="pt-1 text-[15px] leading-relaxed text-ink">{step.text}</p>
                      </li>
                    ))}
                  </ol>
                </Block>
              ) : null}

              {guide.usage?.length ? (
                <Block id="usage" title={labels.guide.usage}>
                  <List items={guide.usage} />
                </Block>
              ) : null}

              <Block id="evidence" title={labels.guide.evidence}>
                <div className="rounded-2xl border border-leaf-900/[0.08] bg-leaf-50/40 p-5">
                  <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-leaf-700">
                    <FlaskConical aria-hidden="true" className="h-4 w-4" />
                    {labels.common.educational}
                  </p>
                  <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-muted">
                    {guide.evidence.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Block>

              <Block id="safety" title={labels.guide.safety}>
                <List items={guide.safety} tone="warning" />
              </Block>

              {guide.storage?.length ? (
                <Block id="storage" title={labels.guide.storage}>
                  <List items={guide.storage} />
                </Block>
              ) : null}

              <Block id="who" title={labels.guide.whoShouldAsk}>
                <List items={guide.whoShouldAsk} />
              </Block>

              {guide.seeDoctor?.length ? (
                <Block id="doctor" title={labels.guide.seeDoctor}>
                  <List items={guide.seeDoctor} />
                </Block>
              ) : null}

              {guide.emergency?.length ? (
                <>
                  <Block id="emergency-signs" title={labels.guide.emergency}>
                    <List items={guide.emergency} tone="warning" />
                  </Block>
                  <EmergencyNotice lang={lang} />
                </>
              ) : null}

              {guide.faqs.length ? (
                <Block id="faqs" title={labels.common.faqTitle}>
                  <FaqList faqs={guide.faqs} idPrefix={`guide-${guide.key}`} />
                </Block>
              ) : null}

              <Block id="references" title={labels.common.sources}>
                <ol className="space-y-4">
                  {guide.references.map((reference) => (
                    <li key={reference.url} className="text-sm leading-relaxed">
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-leaf-800 underline decoration-leaf-300 underline-offset-4 hover:decoration-leaf-600"
                      >
                        {reference.title}
                      </a>
                      <span className="text-ink-muted"> — {reference.publisher}</span>
                      <span className="mt-1 block text-xs text-ink-soft">
                        {labels.common.accessed} {formatDate(reference.accessedDate, lang)}.
                      </span>
                      <span className="mt-1 block text-xs text-ink-soft">
                        {labels.common.supportingClaim}: {reference.supports}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs leading-relaxed text-ink-soft">{labels.common.referencesNote}</p>
              </Block>

              <div className="space-y-8">
                <RelatedArticles
                  id="related-ingredients"
                  title={labels.common.relatedIngredients}
                  items={ingredients.map((ingredient) => ({
                    title: ingredient.name,
                    href: ingredientPath(lang, ingredient.slug),
                    description: ingredient.summary,
                    meta: labels.nav.ingredients,
                  }))}
                />

                <RelatedArticles
                  id="related-entries"
                  title={labels.common.related}
                  items={related.map((item) => ({
                    title: item.title,
                    href: `/${lang}/${getSection(item.section).slug[lang]}/${item.slug}`,
                    description: item.summary,
                    meta: getSection(item.section).name[lang],
                  }))}
                />

                <RelatedArticles
                  id="related-categories"
                  title={labels.common.relatedCategories}
                  items={guide.categories
                    .map((key) => getCategoryByKey(lang, key))
                    .filter((category): category is NonNullable<typeof category> => Boolean(category))
                    .map((category) => ({
                      title: category.name,
                      href: categoryPath(lang, category.slug),
                      description: category.tagline,
                      meta: labels.nav.categories,
                    }))}
                />
              </div>
            </div>

            <div className="mt-10">
              <AdSlot lang={lang} slot={`guide-${guide.key}`} />
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-leaf-900/10 pt-6 text-sm">
              <Link href={sectionPath(lang, guide.section)} className="font-semibold text-leaf-700 hover:underline">
                {labels.common.viewAll} — {section.name[lang]}
              </Link>
              <a href="#top" className="font-semibold text-leaf-700 hover:underline">
                {labels.common.backToTop}
              </a>
            </div>
          </article>

          <aside className="no-print space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-5">
              <TableOfContents items={toc} label={labels.common.onThisPage} />
            </div>
            {isRemedy ? <EmergencyNotice lang={lang} headingId="emergency-sidebar-heading" /> : null}
            {isRemedy ? null : (
              <p className="flex gap-2 rounded-2xl border border-leaf-900/10 bg-cream-100/60 p-4 text-xs leading-relaxed text-ink-muted">
                <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-saffron-500" />
                {labels.common.cookingNote}
              </p>
            )}
          </aside>
        </div>

        <div className="mt-16">
          <Newsletter lang={lang} />
        </div>
      </div>
    </>
  );
}
