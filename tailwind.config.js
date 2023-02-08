/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        under: "0 2px 0 #000",
      },
    },
    // fontFamily: {
    //   body: ["Montserrat", "sans-serif"],
    // },
  },
  plugins: [],
};
