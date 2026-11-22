"use client";

import {
  Bookmark,
  BookmarkCheck,
  Check,
  Copy,
  Minus,
  Plus,
  Printer,
  Share2,
} from "lucide-react";
import { useEffect, useState } from "react";

import { t } from "@/lib/copy";
import type { IngredientItem, Lang } from "@/lib/types";
import { cn } from "@/lib/utils";

const FAVORITES_KEY = "dmkn:favorites";

/** 0.5 → "½", 1.25 → "1¼", 2 → "2", 0.333 → "0.33" */
function formatQuantity(value: number): string {
  if (!Number.isFinite(value) || value <= 0) return "";
  const rounded = Math.round(value * 100) / 100;
  if (Number.isInteger(rounded)) return String(rounded);

  const whole = Math.floor(rounded);
  const fraction = Math.round((rounded - whole) * 4) / 4;
  const glyph = fraction === 0.25 ? "¼" : fraction === 0.5 ? "½" : fraction === 0.75 ? "¾" : null;
  if (glyph) return whole > 0 ? `${whole}${glyph}` : glyph;

  return String(Math.round(rounded * 10) / 10);
}

function ingredientLine(
  ingredient: IngredientItem,
  factor: number,
  base: number,
): string {
  const amount =
    ingredient.quantity === null ? "" : formatQuantity(ingredient.quantity * factor);
  const parts = [amount, ingredient.unit, ingredient.item].filter(Boolean).join(" ");
  return ingredient.note ? `${parts} (${ingredient.note})` : parts;
}

/**
 * Serving calculator + recipe utilities.
 *
 * Quantities are recomputed on the client from numeric base amounts, so the
 * printed and copied versions always match what the reader sees. Non-numeric
 * amounts ("to taste") are left untouched instead of being invented.
 */
export function RecipeTools({
  lang,
  title,
  ingredients,
  baseServings,
  yieldLabel,
  path,
}: {
  lang: Lang;
  title: string;
  ingredients: IngredientItem[];
  baseServings: number;
  yieldLabel: string;
  path: string;
}) {
  const labels = t(lang);
  const [servings, setServings] = useState(baseServings);
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(FAVORITES_KEY);
      const list: string[] = raw ? JSON.parse(raw) : [];
      setSaved(Array.isArray(list) && list.includes(path));
    } catch {
      setSaved(false);
    }
  }, [path]);

  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(() => setMessage(null), 2600);
    return () => window.clearTimeout(timer);
  }, [message]);

  const factor = servings / baseServings;

  function flash(text: string) {
    setMessage(text);
  }

  async function copyIngredients() {
    const text = [
      title,
      `${labels.recipe.servings}: ${servings} (${yieldLabel})`,
      "",
      ...ingredients.map((ingredient) => `• ${ingredientLine(ingredient, factor, baseServings)}`),
      "",
      typeof window !== "undefined" ? window.location.href : "",
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      flash(labels.recipe.copied);
    } catch {
      flash(labels.recipe.printHint);
    }
  }

  async function shareRecipe() {
    const url = typeof window !== "undefined" ? window.location.href : path;
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        flash(labels.recipe.linkCopied);
      }
    } catch {
      /* user cancelled the share sheet */
    }
  }

  function toggleSaved() {
    try {
      const raw = window.localStorage.getItem(FAVORITES_KEY);
      const list: string[] = raw ? JSON.parse(raw) : [];
      const next = Array.isArray(list) ? list : [];
      const exists = next.includes(path);
      const updated = exists ? next.filter((item) => item !== path) : [...next, path];
      window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      setSaved(!exists);
      flash(exists ? labels.recipe.removeSaved : labels.recipe.saved);
    } catch {
      flash(labels.recipe.printHint);
    }
  }

  return (
    <div id="recipe" className="scroll-mt-28">
      <div className="rounded-3xl border border-leaf-900/[0.08] bg-cream-50 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-leaf-900/[0.08] p-5 sm:p-6">
          <div>
            <h2 className="font-serif text-xl text-leaf-900">{labels.recipe.ingredients}</h2>
            <p className="mt-1 text-xs text-ink-soft">
              {labels.recipe.scaling} · {labels.recipe.yield}: {yieldLabel}
            </p>
          </div>

          <div className="no-print flex items-center gap-2" aria-label={labels.recipe.adjust}>
            <button
              type="button"
              onClick={() => setServings((value) => Math.max(baseServings, value - Math.max(1, Math.round(baseServings / 2))))}
              disabled={servings <= baseServings}
              className="grid h-9 w-9 place-items-center rounded-full border border-leaf-900/15 text-leaf-800 transition-colors hover:bg-leaf-50 disabled:opacity-40"
            >
              <Minus aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">
                {labels.recipe.adjust} −
              </span>
            </button>
            <div className="min-w-[76px] rounded-full bg-leaf-50 px-3 py-1.5 text-center">
              <span className="text-sm font-semibold text-leaf-900">{servings}</span>
              <span className="ml-1 text-[10px] uppercase tracking-[0.08em] text-ink-soft">
                {labels.recipe.servings}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setServings((value) => value + Math.max(1, Math.round(baseServings / 2)))}
              className="grid h-9 w-9 place-items-center rounded-full border border-leaf-900/15 text-leaf-800 transition-colors hover:bg-leaf-50"
            >
              <Plus aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">
                {labels.recipe.adjust} +
              </span>
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <ul className="divide-y divide-leaf-900/[0.06]">
            {ingredients.map((ingredient) => (
              <li key={`${ingredient.item}-${ingredient.unit}`} className="flex items-baseline justify-between gap-4 py-2.5">
                <span className="text-[15px] leading-relaxed text-ink">
                  {ingredient.item}
                  {ingredient.note ? (
                    <span className="ml-1 text-xs text-ink-soft">({ingredient.note})</span>
                  ) : null}
                </span>
                <span className="shrink-0 text-sm font-semibold text-leaf-900">
                  {ingredient.quantity === null
                    ? ingredient.unit || "—"
                    : `${formatQuantity(ingredient.quantity * factor)} ${ingredient.unit}`.trim()}
                </span>
              </li>
            ))}
          </ul>

          <div className="no-print mt-5 flex flex-wrap gap-2 border-t border-leaf-900/[0.08] pt-5">
            <button
              type="button"
              onClick={copyIngredients}
              className="inline-flex items-center gap-1.5 rounded-full border border-leaf-900/15 px-3.5 py-2 text-xs font-semibold text-leaf-800 hover:bg-leaf-50"
            >
              {message === labels.recipe.copied ? (
                <Check aria-hidden="true" className="h-3.5 w-3.5" />
              ) : (
                <Copy aria-hidden="true" className="h-3.5 w-3.5" />
              )}
              {labels.recipe.copy}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-full border border-leaf-900/15 px-3.5 py-2 text-xs font-semibold text-leaf-800 hover:bg-leaf-50"
            >
              <Printer aria-hidden="true" className="h-3.5 w-3.5" />
              {labels.recipe.print}
            </button>
            <button
              type="button"
              onClick={shareRecipe}
              className="inline-flex items-center gap-1.5 rounded-full border border-leaf-900/15 px-3.5 py-2 text-xs font-semibold text-leaf-800 hover:bg-leaf-50"
            >
              <Share2 aria-hidden="true" className="h-3.5 w-3.5" />
              {labels.recipe.share}
            </button>
            <button
              type="button"
              onClick={toggleSaved}
              aria-pressed={saved}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-colors",
                saved
                  ? "bg-leaf-700 text-cream-50 hover:bg-leaf-800"
                  : "border border-leaf-900/15 text-leaf-800 hover:bg-leaf-50",
              )}
            >
              {saved ? (
                <BookmarkCheck aria-hidden="true" className="h-3.5 w-3.5" />
              ) : (
                <Bookmark aria-hidden="true" className="h-3.5 w-3.5" />
              )}
              {saved ? labels.recipe.saved : labels.recipe.save}
            </button>
            <p aria-live="polite" className="w-full text-xs text-leaf-700">
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
