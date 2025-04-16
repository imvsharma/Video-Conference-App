/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import fontFamily from "tailwindcss/defaultTheme";
import plugin from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx,html}",
    // Include ShadCN UI paths
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#F9FAFB",
        foreground: "#111827",
        primary: {
          DEFAULT: "#1B263B",
          foreground: "#F9FAFB",
        },
        secondary: {
          DEFAULT: "#4A5A6A",
          foreground: "#F9FAFB",
        },
        accent: {
          DEFAULT: "#61AFFF",
          foreground: "#1B263B",
        },
        muted: {
          DEFAULT: "#E5E7EB",
          foreground: "#6B7280",
        },
        border: "#E5E7EB",
        input: "#D1D5DB",
        ring: "#61AFFF",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [plugin ],
};

export default config;
