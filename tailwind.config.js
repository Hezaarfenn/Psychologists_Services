export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary-color) / <alpha-value>)",
        primaryHover: "rgb(var(--primary-color-hover) / <alpha-value>)",
        textOnPrimary: "rgb(var(--primary-text-on) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
