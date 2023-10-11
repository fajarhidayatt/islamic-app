const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        arabic: ['Lateef', 'cursive'],
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'dark-500': '#15223E',
      'dark-400': '#232E49',
      'dark-300': '#2E3A54',
      'dark-200': '#38445D',
    }),
  },
  variants: {
    extend: {
      transitionProperty: ['width'],
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.body-scroll::-webkit-scrollbar': {
          width: '10px',
        },
        '.body-scroll::-webkit-scrollbar-thumb': {
          backgroundColor: '#C2C2C2',
        },
        '.smooth-scroll': {
          scrollBehavior: 'smooth',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
