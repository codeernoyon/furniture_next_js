/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-clr": "rgb(177, 151, 119);",
        gradient:
          "linear-gradient(180deg, rgba(39, 39, 39, 1) 0%, rgba(175,119,6,0) 100%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
