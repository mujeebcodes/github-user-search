/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#0079FF",
        "blue-gray": "#697C9A",
        "dark-blue": "#4B6A9B",
        "dark-blue-gray": "#2B3442",
        "off-white": "#F6F8FF",
        "pure-white": "#FEFEFE",
        "navy-blue": "#141D2F",
        "shaded-dark-blue": "#1E2A47",
      },
    },
  },
  plugins: [],
};
