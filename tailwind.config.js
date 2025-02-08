module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  safelist: [
    "space-y-8",
    "space-x-4",
    "space-y-6",
    // Ajoutez ici toutes les classes space-y et space-x que vous utilisez
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
