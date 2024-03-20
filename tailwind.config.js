module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "bgblack": "var(--bgblack)",
        "bgwhite": "var(--bgwhite)",
        "tint": "var(--tint)",
        "portbg": "var(--portbg)",
        "bodytext": "var(--bodytext)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
