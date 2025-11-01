/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e6ebff",
          500: "#646cff",
        },
        portfolio: {
          dark: "#120720",
          purple: "#eb03ff",
          lightPurple: "#9d7bd2",
          accent: "#6c5ce7",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
