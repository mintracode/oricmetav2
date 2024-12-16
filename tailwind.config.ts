import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBanner: "url('/images/heroBanner.svg')",
      },
      colors: {
        primary: {
          light: "#1d4ed8",
          main: "#60a5fa",
          white: "#fff",
          default: "#000",
          transparent: "transparent",
        },
      },
    },
  },
  plugins: [],
};
export default config;
