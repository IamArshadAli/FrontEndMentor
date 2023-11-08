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
        // ! 1-5
        Inter: ["Inter", "sans-serif"],
        // ! 1-5 | 1-8
        LexendDeca: ["LexendDeca", "sans-serif"],
        // ! 1-6
        RedHatDisplay: ["Red Hat Display", "sans-serif"],
        // ! 1-8
        BigShouldersDisplay: ["Big Shoulders Display", "sans-serif"],
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
        // ! 1-5
        // Primary
        VeryDarkBlueMainBg15: "hsl(233, 47%, 7%)",
        DarkDesaturatedBlueCardBg: "hsl(244, 38%, 16%)",
        SoftVioletAccent: "hsl(277, 64%, 61%)",
        // Neutral
        SlightlyTransparentWhiteMainParagraph: "hsla(0, 0%, 100%, 0.75)",
        SlightlyTransparentWhiteStatHeadings: "hsla(0, 0%, 100%, 0.6)",
        // ! 1-6
        // Primary
        PaleBlue16: "hsl(225, 100%, 94%)",
        BrightBlue: "hsl(245, 75%, 52%)",
        // Neutral
        VeryPaleBlue: "hsl(225, 100%, 98%)",
        DesaturatedBlue: "hsl(224, 23%, 55%)",
        DarkBlue16: "hsl(223, 47%, 23%)",
        // ! 1-7
        LightGray: "hsl(212, 45%, 89%)",
        GrayishBlue: "hsl(220, 15%, 55%)",
        DarkBlue17: "hsl(218, 44%, 22%)",
        // ! 1-8
        // Primary
        BrightOrange: "hsl(31, 77%, 52%)",
        DarkCyan18: "hsl(184, 100%, 22%)",
        VeryDarkCyan: "hsl(179, 100%, 13%)",
        // Neutral
        TransparentWhite: "hsla(0, 0%, 100%, 0.75)",
        VeryLightGray: "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};