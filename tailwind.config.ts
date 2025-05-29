import type { Config } from "tailwindcss";

export default {
   darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/types/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
       animation: {
        'pulse-scale': 'pulse-scale 1.5s ease-in-out infinite',
        // fadeOut: 'fadeOut 2.7s ease-in-out forwards 1.8s',
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        destructive: "var(--destructive)",
        text: {
          primary: "var(--primary)",
          secondary: "var(--secondary)",
        },
        button: {
          primary: "var(--primary)",
          text: "var(--text)",
          gray: {
            DEFAULT: "var(--button-gray)",
            hover: "var(--button-gray-hover)"
          },
          blue: {
            DEFAULT: "var(--button-blue)",
            hover: "var(--button-blue-hover)"
          }
        },
        border: "var(--border)",
        accent: "var(--accent)",
        card: {
          background: "var(--card-background)"
        },
        mobile: {
          nav: "var(--mobile-nav)"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
