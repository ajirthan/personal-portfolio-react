/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        system: ['"Noto Sans"', '"Noto Sans Tamil"', 'sans-serif'],
        accent: ['"Carter One"', '"Noto Sans Tamil"', 'cursive'],
      },
    },
  },
  plugins: [],
}
