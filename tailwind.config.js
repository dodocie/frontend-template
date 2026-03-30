/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': 'clamp(0.75rem, 0.7rem + 0.2vw, 0.8125rem)',
        'sm': 'clamp(0.875rem, 0.8rem + 0.3vw, 1rem)',
        'base': 'clamp(1rem, 0.95rem + 0.4vw, 1.125rem)',
        'lg': 'clamp(1.125rem, 1rem + 1.5vmin, 1.5rem)',
        'xl': 'clamp(1.25rem, 1rem + 3vmin, 2.25rem)',
        '2xl': 'clamp(1.5rem, 1.25rem + 5vmin, 3rem)',
      },
      spacing: {
        '4': 'clamp(0.75rem, 0.5rem + 1vw, 1rem)',
        '8': 'clamp(1.5rem, 1rem + 3vmin, 2.5rem)',
      },
    },
  },
  plugins: [],
}
