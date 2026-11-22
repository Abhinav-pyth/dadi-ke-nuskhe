import { CalendarDays, RefreshCw, ShieldCheck, ShieldQuestion } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { t } from "@/lib/copy";
import { EDITORIAL_TEAM, REVIEW_PENDING_NOTE } from "@/lib/site";
import type { Lang, ReviewStatus } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function ArticleMetadata({
  lang,
  publishedAt,
  updatedAt,
  reviewStatus,
  reviewer,
  sources,
  className,
}: {
  lang: Lang;
  publishedAt: string;
  updatedAt: string;
  reviewStatus: ReviewStatus;
  reviewer?: { name: string; role: string } | null;
  sources?: number;
  className?: string;
}) {
  const labels = t(lang);
  const approved = reviewStatus === "approved" && Boolean(reviewer?.name);

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-muted">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays aria-hidden="true" className="h-3.5 w-3.5" />
          {labels.common.published}: {formatDate(publishedAt, lang)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <RefreshCw aria-hidden="true" className="h-3.5 w-3.5" />
          {labels.common.updated}: {formatDate(updatedAt, lang)}
        </span>
        {typeof sources === "number" ? (
          <span>
            {sources} {labels.common.sourcesCount}
          </span>
        ) : null}
        {approved ? (
          <Badge tone="leaf" className="normal-case tracking-normal">
            <ShieldCheck aria-hidden="true" className="h-3.5 w-3.5" />
            {labels.common.reviewedBy} {reviewer?.name}
          </Badge>
        ) : (
          <Badge tone="warning" className="normal-case tracking-normal">
            <ShieldQuestion aria-hidden="true" className="h-3.5 w-3.5" />
            {labels.common.reviewPending}
          </Badge>
        )}
      </div>

      <dl className="mt-4 grid gap-3 rounded-2xl border border-leaf-900/[0.08] bg-cream-50 p-4 text-xs sm:grid-cols-3">
        <div>
          <dt className="font-semibold uppercase tracking-[0.1em] text-ink-soft">
            {labels.common.writtenBy}
          </dt>
          <dd className="mt-1 text-ink">{EDITORIAL_TEAM[lang]}</dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-[0.1em] text-ink-soft">
            {labels.common.reviewedBy}
          </dt>
          <dd className="mt-1 text-ink-muted">
            {approved ? `${reviewer?.name} — ${reviewer?.role}` : labels.common.noReviewer}
          </dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-[0.1em] text-ink-soft">
            {labels.common.evidence}
          </dt>
          <dd className="mt-1 text-ink-muted">{labels.common.educational}</dd>
        </div>
      </dl>

      {!approved ? (
        <p className="mt-3 text-xs leading-relaxed text-ink-soft">{REVIEW_PENDING_NOTE[lang]}</p>
      ) : null}
    </div>
  );
}
