/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'boldGreen': '#3DB070'
      }
    },
  },
  plugins: [require("daisyui")],
}
