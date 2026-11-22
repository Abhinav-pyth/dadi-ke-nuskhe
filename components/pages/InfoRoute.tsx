import { notFound } from "next/navigation";

import { InfoPageContent } from "@/components/pages/InfoPage";
import { getInfoPage } from "@/lib/entries";
import type { InfoPageKey, Lang } from "@/lib/types";

/** Shared body for the eight trust/legal routes in each language. */
export function InfoRoute({ lang, pageKey }: { lang: Lang; pageKey: InfoPageKey }) {
  const page = getInfoPage(lang, pageKey);
  if (!page) notFound();
  return <InfoPageContent lang={lang} page={page} />;
}
