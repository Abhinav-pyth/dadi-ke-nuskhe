import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { getTranslationMap } from "@/lib/entries";
import { fontVariables } from "@/lib/fonts";
import { LANG_META } from "@/lib/i18n";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import type { Lang } from "@/lib/types";

/**
 * Root document shared by the language route groups. Each group renders this
 * from its own root layout, which is what allows /hi and /en to declare their
 * own `<html lang>` without client-side hacks.
 */
export function RootDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const pairs = getTranslationMap();
  const skip = lang === "hi" ? "मुख्य सामग्री पर जाएँ" : "Skip to main content";

  return (
    <html lang={LANG_META[lang].htmlLang} className={fontVariables}>
      <body className="min-h-screen bg-cream text-ink">
        <div id="top" aria-hidden="true" />
        <a href="#main-content" className="skip-link">
          {skip}
        </a>
        <Header lang={lang} pairs={pairs} />
        <main id="main-content">{children}</main>
        <Footer lang={lang} />
        <Analytics />
        <JsonLd data={[websiteSchema(lang), organizationSchema(lang)]} />
      </body>
    </html>
  );
}
