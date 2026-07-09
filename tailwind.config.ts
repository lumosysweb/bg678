import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080B14",
        card: "#101726",
        "card-secondary": "#151F33",
        primary: "#1FD8A4",
        emerald: "#00C78A",
        "purple-glow": "#7B3AED",
        "blue-accent": "#2D8CFF",
        danger: "#FF4D6D",
        muted: "#B6C2D4",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        numbers: ["var(--font-outfit)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.75rem",
        "hero-xl": "32px",
      },
      boxShadow: {
        primary: "0 0 40px -8px rgba(31,216,164,0.45)",
        purple: "0 0 40px -8px rgba(123,58,237,0.45)",
        emerald: "0 0 40px -8px rgba(0,199,138,0.4)",
        glass: "0 8px 32px 0 rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "luxury-radial":
          "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(123,58,237,0.25), transparent 60%), radial-gradient(ellipse 70% 60% at 85% 30%, rgba(31,216,164,0.18), transparent 60%), radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0,199,138,0.15), transparent 60%)",
        "primary-gradient": "linear-gradient(135deg, #1FD8A4 0%, #00B383 50%, #1FD8A4 100%)",
        "purple-gradient": "linear-gradient(135deg, #7B3AED 0%, #2D8CFF 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1.5s",
        shine: "shine 3s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(6px)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
