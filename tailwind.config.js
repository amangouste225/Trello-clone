/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        dynamic_background: "var(--dynamic-background)",
        dynamic_background_transparent: "var(--dynamic-background-transparent)",
        list_background: "var(--list-background)",
        list_text: "var(--list-text)",
      },
    },
  },
  plugins: [],
};
