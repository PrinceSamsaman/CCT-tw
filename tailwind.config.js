const { gray } = require('color-name');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        
        primary: "#51E9EF",
        secondary: "#39B0A8",
        primaryDark: "#2A4745",
        light: "#F5F5F5",
        dark: "#1C1C1C",
        gray: "#5C5B5B",

        banner_text:"#5C5B5B",
        black:"#000000",

      },

      fontFamily:{
        roboto:['Roboto', 'sans-serif'],
        poppins:['Poppins','sans-serif'],
      },

      fontSize:{
        huge:'clamp(2rem, 6vw, 3rem)',
      }
    },

    container: {
      center: true,
      padding: '50px',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        // '2xl': '1496px',
      },
    }

  },
  plugins: [],
}

