"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/** How long the first-load splash stays up, and the floor for route changes. */
const SPLASH_MS = 720;
const NAV_MS = 320;

/**
 * Page-wide loading feedback: a thin progress bar pinned to the top of the
 * viewport plus a soft veil with a spinner. It covers the whole page on first
 * load and re-appears as soon as an internal link is clicked, then fades out
 * once the route has painted.
 *
 * It is purely decorative — nothing is blocked (the veil ignores pointer
 * events) and with reduced motion the spinner simply stands still.
 */
export function PageLoader({ label }: { label: string }) {
  const pathname = usePathname();
  const [active, setActive] = useState(true);
  const [progress, setProgress] = useState(10);
  const shownAt = useRef<number | null>(null);
  const hideTimer = useRef<number | null>(null);
  const hasRendered = useRef(false);

  const clearHideTimer = useCallback(() => {
    if (hideTimer.current !== null) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  }, []);

  const begin = useCallback(() => {
    clearHideTimer();
    if (shownAt.current === null) shownAt.current = Date.now();
    setProgress(10);
    setActive(true);
  }, [clearHideTimer]);

  // Start loading on any same-origin link click, before the route changes.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(target instanceof HTMLAnchorElement)) return;
      if (target.target && target.target !== "_self") return;
      if (target.hasAttribute("download")) return;

      let url: URL;
      try {
        url = new URL(target.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      begin();
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [begin]);

  // Tidy up once the page (or the new route) has painted.
  useEffect(() => {
    const minimum = hasRendered.current ? NAV_MS : SPLASH_MS;
    hasRendered.current = true;
    if (shownAt.current === null) shownAt.current = Date.now();

    const elapsed = Date.now() - shownAt.current;
    clearHideTimer();
    hideTimer.current = window.setTimeout(
      () => {
        setProgress(100);
        setActive(false);
        shownAt.current = null;
        hideTimer.current = null;
      },
      Math.max(0, minimum - elapsed),
    );

    return clearHideTimer;
  }, [pathname, clearHideTimer]);

  // Ease the bar towards 92% while the route is still loading.
  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => {
      setProgress((value) => (value >= 92 ? value : Math.min(92, value + Math.max(2, (92 - value) * 0.18))));
    }, 160);
    return () => window.clearInterval(id);
  }, [active]);

  return (
    <>
      <div
        aria-hidden="true"
        className="page-progress"
        style={{ width: `${active ? progress : 100}%`, opacity: active ? 1 : 0 }}
      />
      <div
        className={cn("page-loader", active ? "page-loader--visible" : "page-loader--hidden")}
        role="status"
        aria-live="polite"
        aria-busy={active}
        aria-hidden={active ? undefined : true}
      >
        <div className="page-loader__panel">
          <span className="page-loader__ring" aria-hidden="true" />
          <span className="page-loader__label">{label}</span>
        </div>
      </div>
    </>
  );
}
