/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        primary: "#3E82FC",
      },
      backgroundImage: {
        Hero: "url('assets/Background.png')",
      },
    },
  },
  plugins: [],
};
