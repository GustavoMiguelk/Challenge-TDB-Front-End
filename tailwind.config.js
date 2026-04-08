/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8C00',
        secondary: '#BCC10E',
        beige: '#FFFBEA',
        brown: '#8B5A2B',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        archivo: ['"Archivo Black"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}