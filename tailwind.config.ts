import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F6F3",
        surface: "#FFFFFF",
        border: "#E2E0DB",
        ink: "#1C1C1C",
        muted: "#6B6561",
        accent: "#3D5A6C",
        "accent-light": "rgba(61,90,108,0.08)",
        "accent-mid": "rgba(61,90,108,0.18)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25,0.46,0.45,0.94)",
      },
      boxShadow: {
        card: "0 2px 16px rgba(28,28,28,0.06)",
        hover: "0 8px 40px rgba(28,28,28,0.1)",
        glass: "0 4px 24px rgba(61,90,108,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
