/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '15': '3.75rem',
      },
      colors: {
        'primary': '#5bba47'
      },
    },
  },
  plugins: [],
}
