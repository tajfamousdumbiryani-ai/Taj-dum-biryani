/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-up": "slide-up 0.3s ease-out forwards",
        "fade-in": "fade-in 0.2s ease-out forwards",
        "slide-left": "slide-left 0.3s ease-out forwards",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translate(-50%, -48%)" },
          "100%": { opacity: "1", transform: "translate(-50%, -50%)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        }
      },
      colors: {
        brand: {
          red: '#E23744',
          darkred: '#DC2626'
        }
      },
      fontFamily: { sans: ['Manrope', 'sans-serif'], heading: ['DM Sans', 'sans-serif'] }
    },
  },
  plugins: [],
}
