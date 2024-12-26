/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "1440px",
    },
    extend: {
      colors: {
        green: "hsl(75, 94%, 57%)",
        bg: "hsl(0, 0, 12%)",
        cardBg: "hsl(0, 0%, 16%)",
        linkBg: "hsl(0, 0%, 20%)",
      },
    },
  },
  plugins: [],
};
