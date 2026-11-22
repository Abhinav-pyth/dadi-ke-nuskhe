"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/lib/types";

/**
 * FAQs are real reader questions, answered in the article body.
 * They are rendered as an accordion for scanning, and are also present in the
 * HTML so they remain crawlable.
 */
export function FaqList({ faqs, idPrefix }: { faqs: Faq[]; idPrefix: string }) {
  if (faqs.length === 0) return null;
  return (
    <Accordion type="single" collapsible className="rounded-2xl border border-leaf-900/[0.08] bg-cream-50 px-5">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`${idPrefix}-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
