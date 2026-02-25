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
        primary: '#d97706',
        retro: {
          bg: '#fef9f0',
          paper: '#fffdf5',
          paperAlt: '#fef3dc',
          ink: '#2d1b00',
          inkLight: '#5c3d1e',
          inkMuted: '#9a7040',
          amber: '#d97706',
          orange: '#c2410c',
          cream: '#fef9f0',
        },
        dark: {
          bg: '#fef9f0',
          card: '#fffdf5',
          border: '#2d1b00',
        },
        light: {
          bg: '#fef9f0',
          card: '#fffdf5',
          border: '#2d1b00',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
