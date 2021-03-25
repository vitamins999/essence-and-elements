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
      screens: {
        iPadPro: { raw: '(width: 1024px) and (height: 1366px)' },
        iPadProWidescreen: { raw: '(width: 1366px) and (height: 1024px)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
