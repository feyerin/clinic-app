/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7620FF",
        light: "#F2F2F2",
        secondary: "#585858",
        success: "#48AE53",
        successDarker: "#005518",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
        serif: ["Helvetica Neue", "serif"],
        gilroy: ["Gilroy", "sans-serif"],
        Khula: ["Khula", "sans-serif"]
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1536px",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("@tailwindcss/line-clamp"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
        },
      });
    },
  ],
};
