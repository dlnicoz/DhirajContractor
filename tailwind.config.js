/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
      },
      backgroundImage: {
        sea1: 'url("https://raw.githubusercontent.com/dlnicoz/DhirajContractor/32d363711d80cc15244549700540dec6c7bebf59/public/bg-images/bg-1.webp")',
        sea2: 'url("https://raw.githubusercontent.com/dlnicoz/DhirajContractor/master/public/bg-images/bg-2.webp")',
        sea3: 'url("https://raw.githubusercontent.com/dlnicoz/DhirajContractor/master/public/bg-images/bg-3.webp")',
      },
    },
  },
  plugins: [require("daisyui")],
};
