"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { t } from "@/lib/copy";
import { SITE } from "@/lib/site";
import type { Lang } from "@/lib/types";

type Status = "idle" | "loading" | "success" | "invalid" | "unavailable" | "error";

export function ContactForm({ lang }: { lang: Lang }) {
  const labels = t(lang);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (field: keyof typeof form) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email) || !form.message.trim()) {
      setStatus("invalid");
      return;
    }
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    if (!endpoint) {
      setStatus("unavailable");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-3xl border border-leaf-900/10 bg-cream-50 p-6 shadow-card sm:p-8">
      <form onSubmit={onSubmit} noValidate className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="contact-name">{labels.contact.name}</Label>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              value={form.name}
              onChange={update("name")}
              aria-invalid={status === "invalid" && !form.name.trim()}
            />
          </div>
          <div>
            <Label htmlFor="contact-email">{labels.contact.email}</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={update("email")}
              aria-invalid={status === "invalid" && !form.email.includes("@")}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="contact-subject">{labels.contact.subject}</Label>
          <Input id="contact-subject" name="subject" value={form.subject} onChange={update("subject")} />
        </div>
        <div>
          <Label htmlFor="contact-message">{labels.contact.message}</Label>
          <Textarea
            id="contact-message"
            name="message"
            required
            value={form.message}
            onChange={update("message")}
            aria-invalid={status === "invalid" && !form.message.trim()}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : null}
            {labels.contact.send}
          </Button>
          <p className="text-xs text-ink-muted">
            <a className="link-underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
        </div>
        <p aria-live="polite" className="min-h-[1.25rem] text-sm">
          {status === "success" ? (
            <span className="text-leaf-800">{labels.contact.success}</span>
          ) : null}
          {status === "invalid" ? <span className="text-clay">{labels.contact.required}</span> : null}
          {status === "unavailable" ? (
            <span className="text-ink-muted">{labels.contact.unavailable}</span>
          ) : null}
          {status === "error" ? <span className="text-clay">{labels.contact.error}</span> : null}
        </p>
      </form>
    </div>
  );
}
