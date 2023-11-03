/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // ! 1-1
        HankenGrotesk: ["Hanken Grotesk", "sans-serif"],
        // ! 1-2
        Fraunces: ["Fraunces", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        // ! 1-3
        Outfit: ["Outfit", "sans-serif"],
        // ! 1-4
        Overpass: ["Overpass", "sans-serif"],
      },
      colors: {
        // ! 1-1
        // Primary
        LightRed: "hsl(0, 100%, 67%)",
        OrangeYellow: "hsl(39, 100%, 56%)",
        GreenTeal: "hsl(166, 100%, 37%)",
        CobaltBlue: "hsl(234, 85%, 45%)",
        // Neutral
        White: "hsl(0, 0%, 100%)",
        PaleBlue: "hsl(221, 100%, 96%)",
        LightLavender: "hsl(241, 100%, 89%)",
        DarkGrayBlue: "hsl(224, 30%, 27%)",
        // Grad I
        SlateBlue: "hsl(252, 100%, 67%)",
        RoyalBlue: "hsl(241, 81%, 54%)",
        // Grad II
        VioletBlue: "hsla(256, 72%, 46%, 1)",
        PersianBlue: "hsla(241, 72%, 46%, 0)",
        // ! 1-2
        // Primary
        DarkCyan: "hsl(158, 36%, 37%)",
        Cream: "hsl(30, 38%, 92%)",
        // Neutral
        VeryDarkBlue: "hsl(212, 21%, 14%)",
        DarkGrayishBlue: "hsl(228, 12%, 48%)",
        // ! 1-3
        // Primary
        SoftBlue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        // Neutral
        VeryDarkBlueMainBG: "hsl(217, 54%, 11%)",
        VeryDarkBlueCardBG: "hsl(216, 50%, 16%)",
        VeryDarkBlueLine: "hsl(215, 32%, 27%)",
        // ! 1-4
        // Primary
        Orange: "hsl(25, 97%, 53%)",
        // Neutral
        LightGrey: "hsl(217, 12%, 63%)",
        MediumGrey: "hsl(216, 12%, 54%)",
        DarkBlue: "hsl(213, 19%, 18%)",
        VeryDarkBlue14: "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
