/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("/icon-success.svg")',
      },
      colors: {
        bgColor: "hsl(235, 18%, 26%)", textColor: "hsl(234, 29%, 20%)"
      }
    },
  },
  plugins: [],
}

