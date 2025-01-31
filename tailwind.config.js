/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        madimi: ['Madimi One', 'sans-serif'],
        mplus: ['Madimi One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
