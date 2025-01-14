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
    extend: {
      fontFamily: {
        syne: ["Syne", "serif"],
        bodoni: ["Bodoni Moda", "serif"],
        forum: ["Forum", "serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "800px",
        xl: "1440px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
