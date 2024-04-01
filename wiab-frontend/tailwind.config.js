/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#009087",
        "custom-black": "#323643",
      },
    },
  },
  plugins: [],
};
