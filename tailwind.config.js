import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
    },
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      width: {
        "1/4-custom": "calc(100% / 4.1)",
        "1/3-custom": "calc(100% / 3.1)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#4BB4DE",
        secondary: "#A2E2F8",
        accent: "#345DA7",
        neutral: "#ded9da",
        "base-100": "#f2f2f2",
        info: "#00b7ff",
        success: "#31A640",
        warning: "#EDAE49",
        error: "#D1495B",
        light: "#edf4fe",
        dark: "#0d2136",
        muted: "#767676",
        "dark-primary": "#1b2d48",
        "dark-secondary": "#3c649f",
        "dark-accent": "#83aff0",
        "dark-light": "#A2E2F8",
        "dark-dark": "#001122",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        slaceDown: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.5)" },
        },
        floatingImg: {
          "0%, 100%": { transform: "translateY(0rem)" },
          "50%": { transform: "translateY(-1.1rem)" },
        },
        bounceHero: {
          "0%, 100%": { transform: "translateY(0rem)" },
          "50%": { transform: "translateY(-1.2rem)" },
        },
      },
      animation: {
        scaleUp: "scaleUp 0.2s ease forwards",
        scaleDown: "scaleDown 0.2s ease forwards",
        floatingImg: "floatingImg 5s linear infinite",
        bounceHero4s: "bounceHero 4s linear infinite",
        bounceHero6s: "bounceHero 6s linear infinite",
        bounceHero8s: "bounceHero 8s linear infinite",
      },
    },
  },
  plugins: [forms, typography, aspectRatio, containerQueries],
};
