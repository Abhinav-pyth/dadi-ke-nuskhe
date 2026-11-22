import { Inter, Lora, Noto_Sans_Devanagari, Tiro_Devanagari_Hindi } from "next/font/google";

/**
 * Font strategy
 * - Latin body: Inter (high legibility at small sizes, wide weight range).
 * - Latin display: Lora (warm editorial serif for headlines).
 * - Devanagari body: Noto Sans Devanagari (tall x-height, clear conjuncts).
 * - Devanagari display: Tiro Devanagari Hindi (traditional, book-like).
 *
 * All fonts are self-hosted by next/font at build time: no render-blocking
 * requests to third-party font CDNs, and automatic `size-adjust` fallbacks
 * to reduce layout shift.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-hindi",
});

const tiroDevanagari = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  display: "swap",
  weight: ["400"],
  variable: "--font-hindi-serif",
});

export const fontVariables = [
  inter.variable,
  lora.variable,
  notoDevanagari.variable,
  tiroDevanagari.variable,
].join(" ");
