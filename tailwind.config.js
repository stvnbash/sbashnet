/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // p1: "#6fffe9",
        // p2: "#54C1C7",
        // p3: "#3982a4",
        // p4: "#1e4381",
        // p5: "#03045E",
        // geckogreen: "#39ff14",
        // blue1: "#306CC7",
        // teal1: "#46B8DB",
        // green1: "#5ECCC1",
        // yellow1: "#FFC500",
        // orange1: "#FF8733",
        // navy2: "#010220",
        navy1: "#060950",
        purple1: "#D0B0FF",
        darkpurple1: "#290066",
        pink1: "#E895B6",
        red1: "#FF7A6C",
        orange1: "#FFAA37",
        yellow1: "#FFDA01",
        yellowgreen1: "#C3DE33",
        green1: "#86E164",
        turquoise1: "#0CE8C7",
        darkturquoise1: "#033A32",
        text1: "#FFFCEB",
      },

    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require('@tailwindcss/typography'),],
}

// This custom color pallette was developed with Adobe color to ensure accessibility for both color blind users and contrast between text and background colors.

// the official color pallette
// https://coolors.co/d0b0ff-e895b6-ff7a6c-ffaa37-ffda01-c3de33-86e164-0ce8c7-09798c-060950

// slightly off from actual pallette
// https://coolors.co/dac2ff-e99bba-ff7e70-ffaf47-ffda0a-82e265-0ce9c8-09798c-080b5e
