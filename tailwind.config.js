/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
