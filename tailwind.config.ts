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
        merino: "#F5EEDD",
        rockBlue: "#84B3CE",
        veniceBlue: "#16587B",
      },
    },
  },
  plugins: [],
};
export default config;