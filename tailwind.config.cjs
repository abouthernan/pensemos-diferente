/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cYellow: "#fcea0d",
        cBlack: "#1d1d1d",
      },
      fontFamily: {
        myriad: ["myriad-pro", "sans-serif"],
        lato: ["lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
