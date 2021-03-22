module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat'],
        heading: ['Libre Baskerville'],
      },
      spacing: {
        84: '21rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
