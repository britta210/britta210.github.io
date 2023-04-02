/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {                            // Breakpoints festlegen
      sm: "480px",
      md: "768px", 
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        primary: "#FFE663", 
        darkprimary: "#C1AE48",
        secondary: "#1D1D1D",
        bgWhite: "#FAFAFA"
      }
    },
  },
  plugins: [],
}
