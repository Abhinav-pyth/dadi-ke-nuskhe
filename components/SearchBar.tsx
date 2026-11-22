"use client";

import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { t } from "@/lib/copy";
import { searchPath } from "@/lib/i18n";
import type { Lang, SearchEntry } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  lang: Lang;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  size?: "md" | "lg";
  onNavigate?: () => void;
}

/**
 * Accessible search combobox with server-side suggestions.
 * Without JavaScript the surrounding form still performs a normal GET search.
 */
export function SearchBar({
  lang,
  placeholder,
  className,
  autoFocus = false,
  size = "md",
  onNavigate,
}: SearchBarProps) {
  const labels = t(lang);
  const router = useRouter();
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<SearchEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setItems([]);
      setLoading(false);
      return;
    }
    const controller = new AbortController();
    setLoading(true);
    const timer = window.setTimeout(async () => {
      try {
        const response = await fetch(
          `/api/search?lang=${lang}&q=${encodeURIComponent(trimmed)}&limit=6`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("search failed");
        const data = (await response.json()) as { results: SearchEntry[] };
        setItems(data.results);
        setOpen(true);
        setActive(-1);
      } catch (error) {
        if ((error as Error).name !== "AbortError") setItems([]);
      } finally {
        setLoading(false);
      }
    }, 220);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [query, lang]);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function go(href: string) {
    setOpen(false);
    onNavigate?.();
    router.push(href);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (active >= 0 && items[active]) {
      event.preventDefault();
      go(items[active].href);
      return;
    }
    if (!query.trim()) {
      event.preventDefault();
      return;
    }
    setOpen(false);
    onNavigate?.();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      setActive(-1);
      return;
    }
    if (!open || items.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => (index + 1) % items.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => (index <= 0 ? items.length - 1 : index - 1));
    }
  }

  const showPanel = open && query.trim().length >= 2;

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <form action={searchPath(lang)} method="get" role="search" onSubmit={handleSubmit}>
        <label htmlFor={`${listboxId}-input`} className="sr-only">
          {labels.search.title}
        </label>
        <div className="relative flex items-center">
          <Search aria-hidden="true" className="pointer-events-none absolute left-4 h-4 w-4 text-ink-soft" />
          <input
            id={`${listboxId}-input`}
            name="q"
            type="search"
            role="combobox"
            aria-expanded={showPanel}
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-activedescendant={active >= 0 ? `${listboxId}-option-${active}` : undefined}
            aria-label={labels.search.title}
            autoComplete="off"
            autoFocus={autoFocus}
            value={query}
            placeholder={placeholder ?? labels.hero.searchPlaceholder}
            onChange={(event) => {
              setQuery(event.target.value);
              setOpen(true);
            }}
            onFocus={() => {
              if (items.length) setOpen(true);
            }}
            onKeyDown={handleKeyDown}
            className={cn(
              "w-full rounded-full border border-leaf-900/15 bg-white/95 pl-11 pr-28 text-ink shadow-sm placeholder:text-ink-soft/80 focus-visible:border-leaf-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-600/25",
              size === "lg" ? "h-14 text-base" : "h-12 text-sm",
            )}
          />
          <button
            type="submit"
            className={cn(
              "absolute right-1.5 inline-flex items-center gap-1.5 rounded-full bg-leaf-700 font-semibold text-cream-50 transition-colors hover:bg-leaf-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-600 focus-visible:ring-offset-2",
              size === "lg" ? "h-11 px-5 text-sm" : "h-9 px-4 text-xs",
            )}
          >
            {loading ? <Loader2 aria-hidden="true" className="h-3.5 w-3.5 animate-spin" /> : null}
            {labels.hero.searchCta}
          </button>
        </div>
      </form>

      <p aria-live="polite" className="sr-only">
        {showPanel ? `${items.length} ${labels.search.resultCount}` : ""}
      </p>

      {showPanel ? (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl border border-leaf-900/10 bg-cream-50 shadow-lift">
          <p className="border-b border-leaf-900/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
            {labels.search.suggestions}
          </p>
          {items.length === 0 ? (
            <p className="px-4 py-5 text-sm text-ink-muted">
              {loading ? labels.search.placeholder : labels.search.noResultsBody}
            </p>
          ) : (
            <ul id={listboxId} role="listbox" aria-label={labels.search.suggestions}>
              {items.map((item, index) => (
                <li
                  key={`${item.type}-${item.key}`}
                  id={`${listboxId}-option-${index}`}
                  role="option"
                  aria-selected={active === index}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    go(item.href);
                  }}
                  onMouseEnter={() => setActive(index)}
                  className={cn(
                    "cursor-pointer border-b border-leaf-900/[0.05] px-4 py-3 last:border-b-0",
                    active === index ? "bg-leaf-50" : "bg-transparent",
                  )}
                >
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-medium text-leaf-900">{item.title}</span>
                    <span className="shrink-0 text-[10px] uppercase tracking-[0.1em] text-ink-soft">
                      {item.sectionName ?? item.type}
                    </span>
                  </span>
                  <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-ink-muted">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <div className="border-t border-leaf-900/[0.06] bg-cream-100/60 px-4 py-2">
            <button
              type="button"
              onMouseDown={(event) => {
                event.preventDefault();
                go(searchPath(lang, query.trim()));
              }}
              className="text-xs font-semibold text-leaf-700 hover:text-leaf-900"
            >
              {labels.search.button} “{query.trim()}” →
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
