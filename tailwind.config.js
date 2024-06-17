/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   roboto: ['"Roboto Slab"', 'serif'],
      //   raleway: ['Raleway', 'sans-serif'],
      // },
      boxShadow: {
        inner: '5px 5px 7px #1c1d1f, -5px -5px 7px #222527',
        md: '0px 13px 10px -7px rgba(0, 0, 0, 0.1)',
        lg: '0px 30px 18px -8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
