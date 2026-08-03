/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "transparent-black": "rgba(21, 21, 21, 0.55)",
        "nice-black": "rgba(21, 21, 21, 0.54)",
        "nice-green": "#43D681",
        "primary-black": "#3C3C3B",
        "secondary-black": "rgba(20, 20, 20, 1)",
        "black-light": "rgba(60, 60, 59, 0.22)",
        "black-dark": "rgba(0, 0, 0, 1)",
        "other-black": "#141414",
        "primary-blue": "#0E9297",
        "green-dark": "#43D681",
        "green-light": "#A0FFBF",
        "bgDrop-gray": "rgba(255, 255, 255)",
        "dark-purple": "#090526",
        "medium-purple": "#231459",
        "bright-purple": "#472DA6",
        "veryBright-purple": "#7941F2",
        "dark-green": "#1A4039",
        "medium-green": "#12734F",
        "bright-green": "#0ABF6A",
        "green-blue": "#88B5BF",
        "dp-blue": "##0E9297",
        "dp-green": "#A0FFBF",
      },
    },
  },
  plugins: [],
};
