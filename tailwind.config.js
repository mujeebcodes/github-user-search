/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: { 100: "500px" },
      width: {
        17: "4.37rem",
      },
      colors: {
        "deep-blue": "hsl(var(--color-deep-blue) / <alpha-value>)",
        "blue-gray": "hsl(var(--color-blue-gray) / <alpha-value>)",
        "dark-blue": "hsl(var(--color-dark-blue) / <alpha-value>)",
        "dark-blue-gray": "hsl(var(--color-dark-blue-gray) / <alpha-value>)",
        "off-white": "hsl(var(--color-off-white) / <alpha-value>)",
        "pure-white": "hsl(var(--color-pure-white) / <alpha-value>)",
        "navy-blue": "hsl(var(--color-navy-blue) / <alpha-value>)",
        "shaded-dark-blue":
          "hsl(var(--color-shaded-dark-blue) / <alpha-value>)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
