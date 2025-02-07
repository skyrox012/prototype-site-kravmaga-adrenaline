module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#030806",
        red: "#D20000",
        kaki: "#49440F",
        white: "#F8F5F7",
      },
      fontFamily: {
        jura: ["Jura", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["active"],
      transform: ["hover", "focus"],
    },
  },
  plugins: [],
};
