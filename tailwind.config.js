import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */

export default {
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
      },
      keyframes: {
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
        floatingImg: "floatingImg 5s linear infinite",
        bounceHero4s: "bounceHero 4s linear infinite",
        bounceHero6s: "bounceHero 6s linear infinite",
        bounceHero8s: "bounceHero 8s linear infinite",
      },
    },
  },
  plugins: [forms, typography, aspectRatio, containerQueries],
};
