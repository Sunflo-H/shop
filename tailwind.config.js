/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
      },
      backgroundPosition: {
        "3xl": "center ",
      },
      objectPosition: {
        "top-10": "50%",
      },
      width: {
        banner: "1040px",
      },
      height: {
        banner: "800px",
        image: "720px",
        section: "800px",
      },
      colors: {
        brand: "#f96162",
      },
      backgroundImage: {
        banner: `url('../public/images/woman6.jpg')`,
        banner2: `url('../public/images/banner4.jpg')`,
      },
      animation: {
        "banner-img": "move-left 1s ease-in-out ",
        "banner-text": "move-left 1s .5s linear forwards",
        show: "show 1s 1s ease-in-out forwards",
      },
      keyframes: {
        "move-left": {
          "0%": {
            transform: "translate(50px,0)",
            opacity: "0",
          },
          "100%": { transform: "translate(0,0)", opacity: "1" },
        },
        show: {
          "0%": {
            opacity: "0",
          },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
