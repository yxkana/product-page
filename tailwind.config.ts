import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "1023px",
      },
      colors: {
        /* Main colors */
        primary_orange: "hsl(26, 100%, 55%)",
        secondary_orange: "hsl(25, 100%, 94%)",

        /* Neutrals colors */

        darkBlue: "hsl(220, 13%, 13%)",
        greishDarkBlue: "hsl(219, 9%, 45%)",
        greishBlue: "hsl(220, 14%, 75%)",
        greishLightBlue: "hsl(223, 64%, 98%)",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  },
} satisfies Config;
