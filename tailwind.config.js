const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { join } = require("path");

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "6rem",
        lg: "8rem",
        xl: "10rem",
      },
    },
    extend: {
      fontFamily: {
        mono: ["'Manrope'", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        "fill-900": "hsl(217, 19%, 35%)",
        "fill-800": "hsl(214, 17%, 51%)",
        "fill-700": "hsl(212, 23%, 69%)",
        "fill-600": "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen 2xl": {
            maxWidth: "1440px",
          },
        },
      });
    }),
  ],
};
