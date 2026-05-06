/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050a1a',
        surface: '#0a1628',
        accent: '#60a5fa',
        'accent-hover': '#93c5fd',
        'text-primary': '#e0f0ff',
        'text-secondary': '#7aa3cc',
        border: '#1a3a5c',
      },
      fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        body: ['Google Sans', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.03em',
      },
    },
  },
  plugins: [],
}
