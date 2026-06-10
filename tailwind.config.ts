import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FAF6F0",
          linen: "#F3EDE3",
          parchment: "#EDE6DA",
          brown: "#7A6551",
          "brown-dark": "#4A3F35",
          "brown-deep": "#3D342C",
          "brown-light": "#A68B6A",
          tan: "#C9B08A",
          "tan-light": "#D9C9AD",
          ink: "#1C1917",
          gold: "#B8956B",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 20px rgba(74, 63, 53, 0.06)",
        card: "0 8px 40px rgba(74, 63, 53, 0.08)",
        "card-hover": "0 16px 48px rgba(74, 63, 53, 0.14)",
        float: "0 12px 40px rgba(74, 63, 53, 0.18)",
        menu: "0 20px 60px rgba(74, 63, 53, 0.15), 0 8px 20px rgba(74, 63, 53, 0.08)",
        photo: "0 12px 32px rgba(74, 63, 53, 0.2)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-in": "fadeIn 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
