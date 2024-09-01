/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, jsx, js, ts}"],
  theme: {
    extend: {
      boxShadow: {
        mpop: "3px 3px 8px transparent,-1px -1px 3px inset transparent",
      },
    },
  },
  plugins: [],
};
