import { ArrowUpRight, Phone } from "lucide-react";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { t } from "@/lib/copy";
import { getTranslationMap, getSectionEntries } from "@/lib/entries";
import {
  categoriesPath,
  collectionsPath,
  infoPath,
  ingredientsPath,
} from "@/lib/i18n";
import { SECTIONS, sectionPath } from "@/lib/sections";
import { EMERGENCY, FOOD_SAFETY_DISCLAIMER, SITE } from "@/lib/site";
import type { Lang } from "@/lib/types";

export function Footer({ lang }: { lang: Lang }) {
  const labels = t(lang);
  const pairs = getTranslationMap();
  const popular = getSectionEntries(lang, "recipes").slice(0, 4);

  return (
    <footer className="mt-24 border-t border-leaf-900/10 bg-leaf-900 text-cream-100">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-6">
            <div className="rounded-2xl bg-cream-50/95 p-4">
              <Logo lang={lang} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/75">{labels.footer.aboutBody}</p>
            <div className="mt-5">
              <LanguageSwitcher lang={lang} pairs={pairs} variant="footer" />
            </div>
          </div>

          <nav aria-label={labels.footer.explore}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-200/90">
              {labels.footer.explore}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a className="text-cream-100/80 hover:text-cream-50" href={`/${lang}`}>
                  {labels.nav.home}
                </a>
              </li>
              {SECTIONS.map((section) => (
                <li key={section.key}>
                  <a className="text-cream-100/80 hover:text-cream-50" href={sectionPath(lang, section.key)}>
                    {section.name[lang]}
                  </a>
                </li>
              ))}
              <li>
                <a className="text-cream-100/80 hover:text-cream-50" href={categoriesPath(lang)}>
                  {labels.footer.categories}
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label={labels.footer.popular}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-200/90">
              {labels.footer.popular}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {popular.map((entry) => (
                <li key={entry.key}>
                  <a
                    className="text-cream-100/80 hover:text-cream-50"
                    href={`/${lang}/recipes/${entry.slug}`}
                  >
                    {entry.title}
                  </a>
                </li>
              ))}
              <li>
                <a className="text-cream-100/80 hover:text-cream-50" href={ingredientsPath(lang)}>
                  {labels.footer.ingredients}
                </a>
              </li>
              <li>
                <a className="text-cream-100/80 hover:text-cream-50" href={collectionsPath(lang)}>
                  {labels.footer.collections}
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label={labels.footer.trust}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-200/90">
              {labels.footer.trust}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: labels.nav.about, href: infoPath(lang, "about") },
                { label: labels.footer.editorial, href: infoPath(lang, "editorial-policy") },
                { label: labels.medicalSafety.title, href: infoPath(lang, "medical-disclaimer") },
                { label: labels.footer.foodSafety, href: infoPath(lang, "food-safety-policy") },
                { label: labels.footer.privacy, href: infoPath(lang, "privacy-policy") },
                { label: labels.footer.terms, href: infoPath(lang, "terms") },
                { label: labels.footer.sources, href: infoPath(lang, "sources") },
                { label: labels.footer.contact, href: infoPath(lang, "contact") },
              ].map((item) => (
                <li key={item.href}>
                  <a className="flex items-center gap-1 text-cream-100/80 hover:text-cream-50" href={item.href}>
                    {item.label}
                    <ArrowUpRight aria-hidden="true" className="h-3 w-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 rounded-2xl border border-cream-100/15 bg-leaf-800/70 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-saffron-200">
            {labels.footer.essentials}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cream-100/80">{FOOD_SAFETY_DISCLAIMER[lang]}</p>
          <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-cream-100/80">
            <Phone aria-hidden="true" className="h-4 w-4 text-saffron-200" />
            <span>
              {lang === "hi" ? "चिकित्सा आपातकाल (भारत)" : "Medical emergency (India)"}:{" "}
              <a className="font-semibold text-cream-50 underline" href={`tel:${EMERGENCY.number}`}>
                {EMERGENCY.number}
              </a>
            </span>
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-cream-100/10 pt-6 text-xs text-cream-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name[lang]}. {labels.footer.rights}
          </p>
          <p>{labels.footer.madeNote}</p>
        </div>
      </div>
    </footer>
  );
}
