/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blueprint: {
          900: '#030712',
          850: '#050b18',
          800: '#071329',
          700: '#0b1d3a',
          card: 'rgba(7, 19, 41, 0.65)',
          border: 'rgba(56, 189, 248, 0.2)',
          cyan: '#00f2fe',
          blue: '#3b82f6',
          electric: '#00d2ff'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}

