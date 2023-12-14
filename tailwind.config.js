/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        dynamicBackground: "var(--dynamic-background)",
        dynamicBackgroundTrans: "var(--dynamic-background-transparent)",
        listBackground: "var(--list-background)",
        listText: "var(--list-text)",
        listHover: "var(--list-hover-bg)",
        cardBackground: "var(--card-background)",
        addList: "var(--addList)",
        addListHover: "var(--addListHover)",
        newFormBtn: "var(--nexFormBtn)",
      },
    },
  },
  plugins: [],
};
