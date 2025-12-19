import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          main:'#1A1D4F',
        },
        secondary:{
          main: '#44C7F4'
        },
        button:{
          blue:'#204FFF'
        }
      },
      fontFamily: {
        main: ["Articulat", "sans-serif"],
      },
      dropShadow: {
        "3xl": '0 35px 35px rgba(256, 256, 256, 0.25)',
      }
    },
  },
  plugins: [],
};
export default config;
