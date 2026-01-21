/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./componenets/**/*.{js,jsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#FD9026',
      }
    },
  },
  plugins: [],
}
