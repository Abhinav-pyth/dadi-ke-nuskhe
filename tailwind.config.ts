import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF7EE",
          50: "#FDFBF6",
          100: "#F7F1E3",
          200: "#EFE5D1",
          300: "#E3D5BA",
        },
        ink: {
          DEFAULT: "#22302A",
          muted: "#5B6B62",
          soft: "#7B8A81",
        },
        leaf: {
          50: "#EFF5F0",
          100: "#DCEAE0",
          200: "#B9D5C2",
          300: "#8FBA9E",
          400: "#5F9673",
          500: "#3D7A55",
          600: "#2B6242",
          700: "#1F5134",
          800: "#173F29",
          900: "#122F20",
        },
        moss: "#7C8B6F",
        saffron: {
          100: "#FBEFD8",
          200: "#F5DDB0",
          400: "#DD9C3C",
          500: "#C97B2E",
          600: "#A9621F",
        },
        clay: "#B4553C",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        hindi: ["var(--font-hindi)", "var(--font-sans)", "sans-serif"],
        "hindi-serif": ["var(--font-hindi-serif)", "var(--font-serif)", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(23, 63, 41, 0.04), 0 12px 28px -18px rgba(23, 63, 41, 0.28)",
        lift: "0 2px 4px rgba(23, 63, 41, 0.05), 0 24px 48px -24px rgba(23, 63, 41, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        content: "72ch",
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.ink.DEFAULT"),
            "--tw-prose-headings": theme("colors.leaf.800"),
            "--tw-prose-links": theme("colors.leaf.700"),
            "--tw-prose-bold": theme("colors.leaf.900"),
            "--tw-prose-bullets": theme("colors.moss"),
            maxWidth: "none",
          },
        },
      }),
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.4s ease-out both",
      },
    },
  },
  plugins: [typography],
};

export default config;
