/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/Home.jsx",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}

