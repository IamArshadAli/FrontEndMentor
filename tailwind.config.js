/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // ! 1-1
        HankenGrotesk: ['Hanken Grotesk', 'sans-serif'],
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
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
