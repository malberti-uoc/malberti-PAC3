const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
    },
    fontFamily: {
     'body': ['Montserrat', 'sans-serif'],
    },
      fontSize: {
        '7xl': '5.25rem',
      },
    extend: {
      colors: {
        teal: colors.teal
      },
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
