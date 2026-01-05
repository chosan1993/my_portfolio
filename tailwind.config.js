/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#06457F",
        headingColor: "#1D293D",
        smallTextColor: "#4A5565",
        secondaryColor: "#6A7282",
        aboutColor: "#DBD1C8",
        heroColor: "#A8C4EC",
        footerColor: "#2C344C",
        skillColor: "#415a77",
        expColor: "#EFF3F6",
        portColor: "#FF634A",
      },
    },
  },
  plugins: [],
}

