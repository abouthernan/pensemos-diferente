/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cYellow: "#fcea0e",
        cBlack: "#1d1d1b",
      },
    },
  },
  plugins: [],
};
