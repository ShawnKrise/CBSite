/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        "deep-greyblue": "#11141a",
        "deep-dark-grey": "#111111",
        "lighest-blue": "#2389db",
        "light-blue": "#1c75bc",
        "purple-blue": "#2b3990",
        "dark-purple-blue": "#262262",
        blue: "#2CBCE9",
        red: "e31e3a",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00bce5 7.21%, #ffcc60 45.05%, #ffcc60 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #00bce5 14.53%, #ffcc60 69.36%, #ffcc60 117.73%)",
      }),
      fontFamily: {
        Inter: ["Inter", "serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
