module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "pureblack": "var(--pureblack)",
        "purewhite": "var(--purewhite)",
        "tint": "var(--tint)",
        "darkgrey": "var(--darkgrey)",
        "portwhite": "var(--portwhite)",
        "bodytext": "var(--bodytext)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
