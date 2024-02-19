import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        github_black: {
          '50': '#e9eff2',
          '100': '#d3dee6',
          '200': '#9db1c2',
          '300': '#6d869e',
          '400': '#263854',
          '500': '#020409',
          '600': '#02040a',
          '700': '#010308',
          '800': '#010205',
          '900': '#010105',
          '950': '#000103'
        },
        github_bg: {
          '50': '#edf1f2',
          '100': '#dfe5e8',
          '200': '#b3bdc4',
          '300': '#8c99a3',
          '400': '#45505c',
          '500': '#0e1116',
          '600': '#0c0f14',
          '700': '#090c12',
          '800': '#05070d',
          '900': '#03050a',
          '950': '#010308'
        }
      }
    },
  },
  plugins: [],
};
export default config;
