/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ["Audiowide", "cursive"],
      },
      boxShadow: {
        "3xl": "0 0 10px #020202;",
      },
      colors: {
        "to-color": "#4b6ca3",
        "via-color": "#85848cfa",
        "from-color": "#919194fa",
        "input-bg": "rgb(214 216 219)",
      },
    },
  },
  plugins: [],
};
