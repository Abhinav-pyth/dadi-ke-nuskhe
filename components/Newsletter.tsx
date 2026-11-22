"use client";

import { Loader2, Mail } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { t } from "@/lib/copy";
import type { Lang } from "@/lib/types";

type Status = "idle" | "loading" | "success" | "invalid" | "unavailable" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Newsletter({ lang }: { lang: Lang }) {
  const labels = t(lang);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("invalid");
      return;
    }
    const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;
    if (!endpoint) {
      setStatus("unavailable");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: `newsletter-${lang}` }),
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="rounded-3xl border border-leaf-900/10 bg-leaf-800 p-6 text-cream-100 sm:p-8"
    >
      <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-saffron-200">
            {labels.newsletter.title}
          </p>
          <h2 id="newsletter-heading" className="mt-2 font-serif text-xl text-cream-50 sm:text-2xl">
            {labels.newsletter.lead}
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-cream-100/70">{labels.newsletter.consent}</p>
        </div>
        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            {labels.newsletter.placeholder}
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Mail
                aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
              />
              <Input
                id="newsletter-email"
                type="email"
                name="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder={labels.newsletter.placeholder}
                value={email}
                aria-invalid={status === "invalid"}
                aria-describedby="newsletter-status"
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                className="pl-10"
              />
            </div>
            <Button type="submit" variant="saffron" disabled={status === "loading"}>
              {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
              {labels.newsletter.button}
            </Button>
          </div>
          <p
            id="newsletter-status"
            aria-live="polite"
            className="min-h-[1.25rem] text-xs text-cream-100/80"
          >
            {status === "success" ? labels.newsletter.success : null}
            {status === "invalid" ? labels.newsletter.invalid : null}
            {status === "unavailable" ? labels.newsletter.unavailable : null}
            {status === "error" ? labels.newsletter.error : null}
          </p>
        </form>
      </div>
    </section>
  );
}
