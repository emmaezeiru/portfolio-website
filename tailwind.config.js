/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "loop-text": "typing 4s steps(20, end) infinite, blink 0.7s step-end infinite",
        "blink": "blink 0.7s step-end infinite",
      },
      keyframes: {
        loopText: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: {
          "scroll-behavior": "smooth",
        },
      });
    },
  ],
};
