/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(3deg)' }
        }
      }
    }
  },
  plugins: []
}
