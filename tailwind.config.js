module.exports = {
  purge: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#D0EDFF",
          200: "#A1D7FF",
          300: "#72BDFF",
          400: "#4EA5FF",
          500: "#147DFF",
          default: "#147DFF",
          600: "#0E60DB",
          700: "#0A47B7",
          800: "#063293",
          900: "#03237A",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
