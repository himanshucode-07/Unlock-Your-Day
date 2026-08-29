/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFF5F7",
        accent: "#FF7E67",
        textMain: "#3A3A3A",
      },
    },
  },
  plugins: [],
};
