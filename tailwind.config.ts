import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { width: '8px' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out',
      },
      colors: {
        primer: "#7D5BA6",
        second: "#c6afe3"
      },
    },
  },
  plugins: [],
} satisfies Config;
