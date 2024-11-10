/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2196f3',
          dark: '#1976d2',
        },
        background: {
          DEFAULT: '#000000', // Changed to pure black
          secondary: '#1e1e1e',
        },
      },
    },
  },
  plugins: [],
}