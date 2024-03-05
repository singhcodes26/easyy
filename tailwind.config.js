/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        aliceblue: "#f3f8fc",
        darkslategray: "#253d32",
        dimgray: "#5d5d5d",
        orange: "#ffba00",
        silver: "#a2bdaa",
        black: "#000",
        royalblue: {
          "100": "#6889ff",
          "200": "#1c7cff",
        },
        darkgray: "#9d9b9b",
        gray: "#777",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e5e5e5",
        },
        dodgerblue: "#3696ff",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        raleway: "Raleway",
        poppins: "Poppins",
        inter: "Inter",
        "covered-by-your-grace": "'Covered By Your Grace'",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "lg-1": "18.1px",
      base: "16px",
      xl: "20px",
      "3xl": "22px",
      lg: "18px",
      "15xl": "34px",
      "8xl": "27px",
      "5xs": "8px",
      "5xl": "24px",
      lgi: "19px",
      "21xl": "40px",
      "13xl": "32px",
      xs: "12px",
      sm: "14px",
      "19xl": "38px",
      "11xl": "30px",
      "4xl": "23px",
      "20xl": "39px",
      "12xl": "31px",
      "18xl": "37px",
      "7xl": "26px",
      "26xl": "45px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
