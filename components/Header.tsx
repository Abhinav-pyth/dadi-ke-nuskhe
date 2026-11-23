"use client";

import { Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { t } from "@/lib/copy";
import { sectionPath } from "@/lib/sections";
import type { Lang, SectionKey } from "@/lib/types";
import { cn } from "@/lib/utils";

const NAV: { key: SectionKey | "home" | "categories"; labelKey: string }[] = [
  { key: "home", labelKey: "home" },
  { key: "home-remedies", labelKey: "remedies" },
  { key: "recipes", labelKey: "recipes" },
  { key: "hair-care", labelKey: "hair" },
  { key: "beauty", labelKey: "beauty" },
  { key: "homemade-products", labelKey: "homemade" },
  { key: "household-tips", labelKey: "tips" },
  { key: "categories", labelKey: "categories" },
];

export function Header({ lang, pairs }: { lang: Lang; pairs: Record<string, string> }) {
  const labels = t(lang);
  const pathname = usePathname() || `/${lang}`;
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const items = NAV.map((item) => ({
    label: labels.nav[item.labelKey as keyof typeof labels.nav],
    href:
      item.key === "home"
        ? `/${lang}`
        : item.key === "categories"
          ? `/${lang}/categories`
          : sectionPath(lang, item.key as SectionKey),
  }));

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === `/${lang}` ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-leaf-900/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
      <div className="container-page flex h-[72px] items-center justify-between gap-3">
        <Logo lang={lang} showTagline />

        <nav aria-label={labels.nav.menu} className="hidden items-center gap-0.5 xl:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors",
                isActive(item.href)
                  ? "bg-leaf-50 text-leaf-900"
                  : "text-ink-muted hover:bg-leaf-50/70 hover:text-leaf-900",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setSearchOpen((open) => !open);
              setMenuOpen(false);
            }}
            aria-expanded={searchOpen}
            aria-controls="site-search-panel"
            className="grid h-10 w-10 place-items-center rounded-full border border-leaf-900/15 text-leaf-800 transition-colors hover:bg-leaf-50"
          >
            <Search aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">{searchOpen ? labels.nav.close : labels.nav.openSearch}</span>
          </button>

          <LanguageSwitcher lang={lang} pairs={pairs} className="hidden sm:inline-flex" />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="grid h-10 w-10 place-items-center rounded-full border border-leaf-900/15 text-leaf-800 transition-colors hover:bg-leaf-50 xl:hidden"
          >
            {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
            <span className="sr-only">{menuOpen ? labels.nav.close : labels.nav.menu}</span>
          </button>
        </div>
      </div>

      {searchOpen ? (
        <div id="site-search-panel" className="border-t border-leaf-900/10 bg-cream-50/95">
          <div className="container-page py-4">
            <SearchBar lang={lang} autoFocus onNavigate={() => setSearchOpen(false)} />
          </div>
        </div>
      ) : null}

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto border-t border-leaf-900/10 bg-cream xl:hidden"
        >
          <div className="container-page flex flex-col gap-6 py-6">
            <SearchBar lang={lang} onNavigate={() => setMenuOpen(false)} placeholder={labels.search.placeholder} />
            <nav aria-label={labels.nav.menu} className="grid gap-1">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium",
                    isActive(item.href) ? "bg-leaf-50 text-leaf-900" : "text-ink-muted hover:bg-leaf-50/70",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="grid gap-2 border-t border-leaf-900/10 pt-5 text-sm">
              <a href={`/${lang}/${lang === "hi" ? "samagri" : "ingredients"}`} className="px-1 py-1 text-leaf-800">
                {labels.nav.ingredients}
              </a>
              <a href={`/${lang}/${lang === "hi" ? "sangrah" : "collections"}`} className="px-1 py-1 text-leaf-800">
                {labels.nav.collections}
              </a>
              <a href={`/${lang}/about`} className="px-1 py-1 text-leaf-800">
                {labels.nav.about}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 border-t border-leaf-900/10 pt-5">
              <LanguageSwitcher lang={lang} pairs={pairs} />
              <a href={`/${lang}/medical-disclaimer`} className="text-sm text-ink-muted underline underline-offset-4">
                {labels.common.disclaimer}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
