/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        image: "640px",
      },
      height: {
        detail: "900px",
        image: "720px",
      },
      colors: {
        brand: "#f96162",
      },
    },
  },
  plugins: [],
};
