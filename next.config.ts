import type { NextConfig } from "next";

/**
 * Redirects are permanent (301) so legacy URLs and old marketing links keep
 * their value instead of dead-ending on a 404.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600, 1920],
  },
  async redirects() {
    return [
      // Hindi is the primary language, so the bare origin goes straight to it
      // instead of serving its own indexable page alongside /hi.
      { source: "/", destination: "/hi", permanent: true },

      // Policy pages resolve to the English experience.
      { source: "/about", destination: "/en/about", permanent: true },
      { source: "/contact", destination: "/en/contact", permanent: true },
      { source: "/editorial-policy", destination: "/en/editorial-policy", permanent: true },
      { source: "/medical-disclaimer", destination: "/en/medical-disclaimer", permanent: true },
      { source: "/food-safety-policy", destination: "/en/food-safety-policy", permanent: true },
      { source: "/privacy-policy", destination: "/en/privacy-policy", permanent: true },
      { source: "/terms", destination: "/en/terms", permanent: true },
      { source: "/sources", destination: "/en/sources", permanent: true },

      // The 2025 structure used /health and /remedies; keep those links alive.
      { source: "/hi/health", destination: "/hi/nuskhe", permanent: true },
      { source: "/hi/health/:slug", destination: "/hi/nuskhe/:slug", permanent: true },
      { source: "/en/health", destination: "/en/home-remedies", permanent: true },
      { source: "/en/health/:slug", destination: "/en/home-remedies/:slug", permanent: true },
      { source: "/hi/remedies", destination: "/hi/samagri", permanent: true },
      { source: "/hi/remedies/:slug", destination: "/hi/samagri/:slug", permanent: true },
      { source: "/en/remedies", destination: "/en/ingredients", permanent: true },
      { source: "/en/remedies/:slug", destination: "/en/ingredients/:slug", permanent: true },

      // Season pages named in earlier campaigns.
      { source: "/hi/sardi-ke-nuskhe", destination: "/hi/sangrah/winter-collection", permanent: true },
      { source: "/hi/garmi-ke-nuskhe", destination: "/hi/sangrah/summer-collection", permanent: true },
      { source: "/en/seasonal-remedies", destination: "/en/collections", permanent: true },
      { source: "/en/winter-recipes", destination: "/en/collections/winter-collection", permanent: true },
      { source: "/en/summer-recipes", destination: "/en/collections/summer-collection", permanent: true },
    ];
  },
};

export default nextConfig;
