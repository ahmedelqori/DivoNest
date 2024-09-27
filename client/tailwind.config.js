/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        airstrike: ["Airstrike", "sans-serif"], // Add your custom font here
        motionpicture: ["MotionPicture", "sans-serif"],
      },
      colors: {
        white: "var(--white-color)",
        silver: "var(--silver-color)",
        charcoal: "var(--charcoal-color)",
        indianRed: "var(--indian-red-color)",
        newsRed: "var(--news-red-color)",
        yellowGreen: "var(--yellow-green-color)",
      },
    },
  },
  plugins: [],
};
