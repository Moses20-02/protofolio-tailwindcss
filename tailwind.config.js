/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#14b8a6",
        darkSlate: "#0f172a",
      },
      screens: {
        "2xl": "1360px",
      },
    },
  },
  plugins: [],
};
