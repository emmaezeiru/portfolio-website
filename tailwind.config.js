// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "#09090b",
//         foreground: "#fafafa",
//         muted: "#a1a1aa",
//         "muted-foreground": "#71717a",
//         card: "#0f0f12",
//         "card-hover": "#141418",
//         border: "#27272a",
//         "border-subtle": "#1f1f23",
//         accent: "#818cf8",
//         success: "#22c55e",
//       },
//       fontFamily: {
//         sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
//         mono: ["var(--font-geist-mono)", "monospace"],
//       },
//       animation: {
//         "fade-in": "fadeIn 0.5s ease-out forwards",
//         "slide-up": "slideUp 0.5s ease-out forwards",
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         slideUp: {
//           "0%": { opacity: "0", transform: "translateY(12px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };


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
        navy: "#0a192f",
        "light-navy": "#112240",
        "lightest-navy": "#233554",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
        slate: "#8892b0",
        background: "#0a192f",
        foreground: "#ccd6f6",
        muted: "#a8b2d1",
        "muted-foreground": "#8892b0",
        card: "#112240",
        "card-hover": "#233554",
        border: "#233554",
        "border-subtle": "#1d2d50",
        accent: "#64ffda",
        success: "#64ffda",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
