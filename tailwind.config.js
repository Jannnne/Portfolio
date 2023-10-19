/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/lib/esm/index.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

