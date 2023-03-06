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
      width: {
        banner: "1040px",
      },
      height: {
        banner: "600px",
        image: "720px",
      },
      colors: {
        brand: "#f96162",
      },
      backgroundImage: {
        banner1: `url('../public/images/banner1.jpg')`,
        banner2: `url('../public/images/banner2.jpg')`,
        banner3: `url('../public/images/banner3.jpg')`,
      },
    },
  },
  plugins: [],
};
