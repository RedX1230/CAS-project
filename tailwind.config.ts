import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#FCFBF8",
          100: "#F9F6F0",
          200: "#F4EFE6",
          300: "#ECE4D8",
          400: "#DDD2C3",
          500: "#C7B9A7",
        },
        ink: {
          50: "#F6F5F4",
          100: "#ECE9E6",
          200: "#D8D2CD",
          300: "#BCB3AC",
          400: "#988E86",
          500: "#7A6F67",
          600: "#625851",
          700: "#4D453F",
          800: "#36302C",
          900: "#221E1C",
          950: "#141110",
        },
        amberink: {
          50: "#FAF6F1",
          100: "#F3ECE1",
          200: "#E3D3BE",
          300: "#CEB595",
          400: "#B6946E",
          500: "#9C764D",
          600: "#835E3B",
          700: "#6B492E",
          800: "#553825",
          900: "#422B1D",
        },
        crimson: {
          subtle: "#8A3C34",
          soft: "#F9F2F1",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "68ch",
            color: "#221E1C",
            lineHeight: "1.75",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
