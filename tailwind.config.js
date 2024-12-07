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
        'loop-text': 'loopText 4s infinite',
      },
      keyframes: {
        loopText: {
          '0%, 100%': { transform: 'translateX(0)', opacity: 1 },
          '50%': { transform: 'translateX(-100%)', opacity: 0 },
        },
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'html': {
          'scroll-behavior': 'smooth',
        },
      });
    },
  ],
};
