/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#F5DEB3", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2E8B57", "700": "#F5DEB3", "800": "#FFDEAD", "900": "#1e3a8a" }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
