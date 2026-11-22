import type { Metadata } from "next";

import "../globals.css";
import { RootDocument } from "@/components/RootDocument";
import { SITE } from "@/lib/site";
import { SITE_METADATA_BASE, siteVerification } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: SITE_METADATA_BASE,
  applicationName: SITE.name.en,
  title: { default: SITE.name.en, absolute: SITE.name.en },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  formatDetection: { telephone: false, email: false, address: false },
  verification: siteVerification(),
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
