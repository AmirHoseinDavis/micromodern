import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        Me: "4px 2px 6px -1px rgb(0 0 0 / 0.2)",
        hover: " 4px 2px 6px -1px rgb(0 0 0 / 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
