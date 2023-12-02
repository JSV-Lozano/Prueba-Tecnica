/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "shadow-form":
          "7.4px 4.9px 1.7px -15px rgba(0, 0, 0, 0.069), 24.8px 16.5px 5.8px -15px rgba(0, 0, 0, 0.101), 111px 74px 26px -15px rgba(0, 0, 0, 0.17)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
