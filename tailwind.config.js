const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        serif: ['var(--font-cinzel)'],
        serif: ['var(--font-ubuntu)']
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui()
  ],
}

