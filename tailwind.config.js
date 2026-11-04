/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      colors: {
        paper: "#F3EFE7",
        sand: "#E6DFD2",
        ink: "#241F1B",
        mist: "#6E655C",
        clay: "#8C4A34",
        sage: "#5C6A55",
        line: "#D9D0C3",
      },
    },
  },
  plugins: [],
}

