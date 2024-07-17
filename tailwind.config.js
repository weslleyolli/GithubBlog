/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        base: "#071422",
        header: "#0B1B2B",
        baseCard: "#112131",
        baseInput: "#040F1A"
      },
      textColor: {
        baseTitle: "#E7EDF4",
        baseText: "#AFC2D4",
        brandBlue: "#3294F8",
        
      },
      fontFamily: {
        sans: "Nunito",
      },
    },
  },
  plugins: [],
}

