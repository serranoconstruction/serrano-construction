import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { withUt } from "uploadthing/tw";

export default withUt({
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      borderRadius: {
        xl: "1.25rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        black: {
          "400": "#333333",
          "200": "#4B5563",
          "100": "#6B7280",
        },
        white: {
          "400": "#fff",
        },
        blue: {
          "400": "#092C89",
          "300": "#B3C7E6",
        },
      },
      boxShadow: {
        "equal-top-bottom":
          "0 0px 6px rgba(0, 0, 0, 0.1), 0 0px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    plugin((props) => {
      return props.addUtilities({
        ".text-shadow-glow-gold": {
          textShadow: "0 0 5px #C9BA6F, 0 0 5px rgba(201, 186, 111, 0.2)",
        },
      });
    }),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
  ],
}) satisfies Config;
