/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: '"Lato", sans-serif',
    },
    extend: {
      boxShadow: {
        "3xl": "0 6px 14px 0 #666",
        "4xl":
          "0 24px 38px 3px rgba(0, 0, 0, 0.14),0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
