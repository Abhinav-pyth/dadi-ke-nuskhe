import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dadi Maa Ke Nuskhe — दादी माँ के नुस्खे",
  description:
    "Traditional Indian home remedies and everyday wellness, explained in Hindi and English. दादी माँ के पारंपरिक नुस्खे और सेहत की सही जानकारी।",
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "hi-IN": absoluteUrl("/hi"),
      "en-IN": absoluteUrl("/en"),
      "x-default": absoluteUrl("/"),
    },
  },
  robots: { index: true, follow: true },
};

/**
 * Language entry point. Visitors are never redirected by IP or browser
 * language; the site simply asks which experience they want.
 */
export default function LanguageChooser() {
  return (
    <div className="container-page flex min-h-[calc(100vh-72px)] flex-col items-center justify-center py-16">
      <div className="w-full max-w-2xl text-center">
        <span
          aria-hidden="true"
          className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-leaf-700 text-cream-50 ring-8 ring-saffron-100/70"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden="true">
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

        <h1 className="mt-6 font-hindi-serif text-3xl leading-tight text-leaf-900 sm:text-4xl">
          दादी माँ के नुस्खे
        </h1>
        <p className="mt-1 font-serif text-xl text-leaf-800">Dadi Maa Ke Nuskhe</p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
          पारंपरिक भारतीय घरेलू नुस्खे और रोज़मर्रा की सेहत — हिंदी और अंग्रेज़ी में।
          <br />
          Traditional Indian home remedies and everyday wellness — in Hindi and English.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/hi"
            lang="hi"
            hrefLang="hi-IN"
            className="group rounded-3xl border border-leaf-900/10 bg-cream-50 p-6 text-left shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-saffron-500">
              हिन्दी
            </p>
            <p className="mt-2 font-hindi-serif text-xl text-leaf-900">हिंदी में पढ़ें</p>
            <p className="mt-1 text-sm text-ink-muted">{SITE.tagline.hi}</p>
          </Link>
          <Link
            href="/en"
            lang="en"
            hrefLang="en-IN"
            className="group rounded-3xl border border-leaf-900/10 bg-cream-50 p-6 text-left shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-saffron-500">
              English
            </p>
            <p className="mt-2 font-serif text-xl text-leaf-900">Read in English</p>
            <p className="mt-1 text-sm text-ink-muted">{SITE.tagline.en}</p>
          </Link>
        </div>

        <p className="mx-auto mt-8 max-w-lg text-xs leading-relaxed text-ink-soft">
          यह वेबसाइट केवल सामान्य स्वास्थ्य जानकारी और शैक्षणिक उद्देश्यों के लिए है। यहाँ दी गई
          जानकारी डॉक्टर की सलाह, निदान या उपचार का विकल्प नहीं है।
          <br />
          Educational information only — not a substitute for professional medical advice.
        </p>
      </div>
    </div>
  );
}
