import { Cinzel_Decorative } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {

        cinzel: ["Cinzel Decorative", "serif"],
        garamond: 'var(--font-garamond), serif',
        girassol: ['Girassol', 'serif'],
        cinzel_decorative: ['Cinzel Decorative', 'serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
