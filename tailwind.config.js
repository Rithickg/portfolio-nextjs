/** @type {import('tailwindcss').Config} */

const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('animated-tailwindcss'),
  ],
});