/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xl: "0 0px 20px 0px #2C2C2C",
      },
    },
  },
  plugins: [],
};
