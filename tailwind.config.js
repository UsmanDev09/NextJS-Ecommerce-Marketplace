/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      textColor: {
        basic: {
          light: "var(--color-light)",
          dark: "var(--color-dark)",
          muted: "var(--color-muted)",
        },
      },
      buttonColor: {
        basic: {
          enabled: "var(--color-enabled)",
          disabled: "var(--color-disabled)",
          light: "var(--color-light)",
          dark: "var(--color-dark)",
        },
      },
    },
    fontFamily: {
      caslon: ["Caslon Bold Regular"],
      unica: ["Unica One"],
      comfortaa: ["Comfortaa"],
    },
    screens: {
      xs: "0px",

      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "850px",
      // => @media (min-width: 768px) { ... }

      lg: "1144px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
