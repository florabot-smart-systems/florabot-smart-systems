/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        madimi: ['Madimi One', 'sans-serif'],
        mplus: ['M PLUS 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
