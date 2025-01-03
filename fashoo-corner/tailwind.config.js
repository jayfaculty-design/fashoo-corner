/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      hashbgs: "#e6e6e6",
      oranges: "#df5408",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
