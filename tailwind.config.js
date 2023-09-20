/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      dark: "#4f005f",
      light: "#741188",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
