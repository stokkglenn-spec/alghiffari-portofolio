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
        bg: '#0f0505',
        surface: '#1a0808',
        accent: '#ef4444',
        'accent-hover': '#dc2626',
        'text-primary': '#fef2f2',
        'text-secondary': '#a87070',
        border: '#3d1515',
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
