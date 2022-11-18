module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#db2777",

          "secondary": "#c084fc",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#ffffff",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}