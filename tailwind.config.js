/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsxs}"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    extend: {
      fontFamily: {
        Caveat: ['"Caveat"', "cursive"],
      },
    },
  },
};
