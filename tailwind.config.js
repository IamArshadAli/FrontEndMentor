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
        // ! 1-9 | 1-10
        KumbhSans: ["Kumbh Sans", "sans-serif"],
        // ! 1-11
        LeagueSpartan: ["League Spartan", "sans-serif"],
        // ! 1-12
        Manrope: ["Manrope", "sans-serif"],
        // ! 1-13 | 1-15
        Poppins: ["Poppins", "sans-serif"],
        // ! 1-14
        JosefinSans: ["Josefin Sans", "sans-serif"],
        // ! 1-16
        Karla: ["Karla", "sans-serif"],
        // ! 1-17
        LibreFranklin: ["LibreFranklin", "sans-serif"],

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
        // ! 1-9
        // Primary
        DarkCyan19: "hsl(185, 75%, 39%)",
        VeryDarkDesaturatedBlue: "hsl(229, 23%, 23%)",
        DarkGrayishBlue19: "hsl(227, 10%, 46%)",
        // Neutral
        DarkGray: "hsl(0, 0%, 59%)",
        // ! 1-10
        // *Primary
        // Text
        VeryDarkDesaturatedBlue110: "hsl(238, 29%, 16%)",
        SoftRed: "hsl(14, 88%, 65%)",
        // Gradient
        SoftViolet: "hsl(273, 75%, 66%)",
        SoftBlue110: "hsl(240, 73%, 65%)",
        // *Neutral
        // Text
        VeryDarkGrayishBlue: "hsl(237, 12%, 33%)",
        DarkGrayishBlue110: "hsl(240, 6%, 50%)",
        // Dividers
        LightGrayishBlue: "hsl(240, 5%, 91%)",
        // ! 1-11
        // Primary
        VeryDarkMagenta: "hsl(300, 43%, 22%)",
        SoftPink: "hsl(333, 80%, 67%)",
        // Neutral
        DarkGrayishMagenta: "hsl(303, 10%, 53%)",
        LightGrayishMagenta: "hsl(300, 24%, 96%)",
        // ! 1-12
        VeryDarkGrayishBlue112: "hsl(217, 19%, 35%)",
        DesaturatedDarkBlue: "hsl(214, 17%, 51%)",
        GrayishBlue112: "hsl(212, 23%, 69%)",
        LightGrayishBlue112: "hsl(210, 46%, 95%)",
        // ! 1-13
        // Primary
        Red: "hsl(0, 78%, 62%)",
        Cyan113: "hsl(180, 62%, 55%)",
        Orange113: "hsl(34, 97%, 64%)",
        Blue: "hsl(212, 86%, 64%)",
        // Neutral
        VeryDarkBlue113: "hsl(234, 12%, 34%)",
        GrayishBlue113: "hsl(229, 6%, 66%)",
        VeryLightGray113: "hsl(0, 0%, 98%)",
        // ! 1-14
        // Primary
        DesaturatedRed: "hsl(0, 36%, 70%)",
        SoftRed114: "hsl(0, 93%, 68%)",
        // Neutral
        DarkGrayishRed: "hsl(0, 6%, 24%)",
        // Gradients
        // Linear, 135deg, from hsl(0, 0%, 100%), to hsl(0, 100%, 98%)
        // Linear, 135deg, from hsl(0, 80%, 86%), to hsl(0, 74%, 74%)
        // ! 1-15
        // Primary
        Red115: "hsl(0, 100%, 74%) ",
        Green: "hsl(154, 59%, 51%)",
        // Neutral
        DarkBlue115: "hsl(249, 10%, 26%) ",
        GrayishBlue115: "hsl(246, 25%, 77%)",
        // Accent
        Blue115: "hsl(248, 32%, 49%)",
        // ! 1-16
        // Primary
        Cyan116: "hsl(179, 62%, 43%)",
        BrightYellow: "hsl(71, 73%, 54%)",
        // Neutral
        LightGray116: "hsl(204, 43%, 93%)",
        GrayishBlue116: "hsl(218, 22%, 67%)",
        // ! 1-17
        // Primary
        Blue117: "hsl(223, 87%, 63%)",
        // Secondary
        PaleBlue117: "hsl(223, 100%, 88%)",
        LightRed117: "hsl(354, 100%, 66%)",
        // Neutral
        Gray: "hsl(0, 0%, 59%)",
        VeryDarkBlue117: "hsl(209, 33%, 12%)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
