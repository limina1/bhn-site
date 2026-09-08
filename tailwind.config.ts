import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Bitcoin orange — anchored on the canonical #f7931a
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f7931a",
          600: "#ea7a0b",
          700: "#c2620a",
          800: "#9a4e0f",
          900: "#7c3f10"
        },
        // Polished, calm blue used as the cool counterpoint to Bitcoin orange
        accent: {
          50: "#eef6ff",
          100: "#d9ecff",
          200: "#bcddff",
          300: "#8ec7ff",
          400: "#5aa8fb",
          500: "#3488ef",
          600: "#206bd6",
          700: "#1d56ad",
          800: "#1d488c",
          900: "#1c3e74"
        },
        // Nostr brand purple for the community call-to-action
        nostr: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8e6ff0",
          600: "#7c53e6",
          700: "#6a40cc",
          800: "#5733a4",
          900: "#482c83"
        },
        // Neutral gray "ink" surfaces for dark mode
        ink: {
          950: "#0e1014",
          900: "#14161c",
          850: "#181b22",
          800: "#1e222b",
          700: "#2a2f3a"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
        card: "0 14px 32px rgba(2, 6, 23, 0.08), 0 1px 0 rgba(2, 6, 23, 0.05)",
        glow: "0 18px 50px -12px rgba(247, 147, 26, 0.45)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;
