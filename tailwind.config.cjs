/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cYellow: '#fcea33',
        cBlack: '#1c1c1b'
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
}
