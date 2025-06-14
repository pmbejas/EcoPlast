/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 0px #22c55e' },
          '50%': { boxShadow: '0 0 20px #22c55e' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      rotateY: {
        '180': '180deg',
      },
    },
  },
  plugins: [],
};
