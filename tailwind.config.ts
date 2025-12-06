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
        background: "var(--background)",
        text: "var(--text-color)",
        red: "var(--red)",
        "gray-border": "var(--gray-border)",
        "gray-divider": "var(--gray-divider)",
      },
      maxWidth: {
        header: "var(--max-width-header)",
        content: "var(--max-width-content)",
      },
      fontFamily: {
        hero: ["var(--font-hero)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
