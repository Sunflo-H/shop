/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
      },
      backgroundPosition: {
        // "3xl": "center ",
        left40: "40%",
      },
      objectPosition: {
        "top-10": "50%",
      },
      width: {
        banner: "1040px",
        section: "1465px",
        slider: "7325px",
      },
      height: {
        banner: "800px",
        image: "720px",
        section: "800px",
      },
      maxWidth: {
        banner: "1040px",
      },
      maxHeight: {
        banner: "800px",
      },
      colors: {
        brand: "#f96162",
      },
      backgroundImage: {
        banner1: `url('../public/images/home/banner1.jpg')`,
        banner2: `url('../public/images/home/banner2.jpg')`,
        banner3: `url('../public/images/home/banner3.jpg')`,
        banner4: `url('../public/images/home/accessories.jpg')`,
      },
      translate: {
        section0: "0px",
        section1: "-1465px",
        section2: "-2930px",
        section3: "-4395px",
        section4: "-5860px",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
      animation: {
        "banner-img": "show 1s ease-in forwards",
        "banner-img-sm": "show-sm 1s ease-in-out forwards",
        "banner-text": "move-left 1.5s 1.1s ease forwards",
        "btn-show": "show 1.5s 1.3s ease forwards",
        hide: "hide 1.7s ease forwards",
      },
      keyframes: {
        "move-left": {
          "0%": { transform: "translate(40px,0)" },
          "100%": { transform: "translate(0px,0)", opacity: "1" },
        },

        show: {
          "0%": { opacity: 0 },
          "100%": { opacity: "1" },
        },

        "show-sm": {
          "0%": { opacity: 0 },
          "100%": { opacity: "0.8" },
        },

        hide: {
          "0%": { transform: "translate(0px,0)", opacity: 1 },
          "100%": { transform: "translate(0px,0)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
