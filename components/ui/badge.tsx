import * as React from "react";

import { cn } from "@/lib/utils";

type Tone = "leaf" | "saffron" | "neutral" | "warning";

const tones: Record<Tone, string> = {
  leaf: "bg-leaf-50 text-leaf-800 border-leaf-200",
  saffron: "bg-saffron-100 text-saffron-600 border-saffron-200",
  neutral: "bg-cream-100 text-ink-muted border-cream-300",
  warning:
    "bg-[var(--badge-warning-bg)] text-[var(--badge-warning-text)] border-[var(--badge-warning-border)]",
};

export function Badge({
  className,
  tone = "leaf",
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
