import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#EEE8DF",
        "cream-soft": "#F7F3EC",
        beige: "#C9BEAE",
        ink: "#22221D",
        navy: "#2C365A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        flourish: ["var(--font-flourish)", "serif"],
      },
      minHeight: {
        screen: "var(--screen-h)",
      },
      height: {
        screen: "var(--screen-h)",
      },
      spacing: {
        "ds-1": "8px",
        "ds-2": "16px",
        "ds-3": "24px",
        "ds-4": "32px",
        "ds-5": "48px",
        "ds-6": "64px",
        "ds-7": "96px",
        "ds-8": "128px",
      },
      borderRadius: {
        pill: "999px",
        card: "12px",
      },
      keyframes: {
        caretBlink: {
          "0%, 45%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
        dotPulse: {
          "0%, 100%": { opacity: ".25", transform: "scale(.85)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "caret-blink": "caretBlink 1s step-end infinite",
        rise: "rise .35s ease both",
        "dot-pulse": "dotPulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
