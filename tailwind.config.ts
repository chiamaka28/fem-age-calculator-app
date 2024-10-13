import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
      },
    },

    colors: {
      purple: "hsl(259, 100%, 65%)",
      lightRed: "hsl(0, 100%, 67%)",
      offWhite:" hsl(0, 0%, 100%)",
      lightGrey: "hsl(0, 0%, 86%)",
      smokeyGrey: "hsl(0, 1%, 44%)",
      offBlack:"hsl(0, 0%, 8%)",
      white: "hsl(0, 0%, 100%)",

    },
    fontFamily:  {
      sans: ['var(--font-poppins)']
    },
    extend: {},
  },
  plugins: [],
};
export default config;
