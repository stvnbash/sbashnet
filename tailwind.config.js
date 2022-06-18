/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        p1: "#6fffe9",
        p2: "#54C1C7",
        p3: "#3982a4",
        p4: "#1e4381",
        p5: "#03045E",
      },

    },
  },
  plugins: [],
}
