module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      h1: "67px",
      h2: "51px",
      h3: "38px",
      h4: "28px",
      h5: "22px",
      base: "16px",
      caption: "12px",
    },
    fontFamily: {
      space: "Space Mono, monospace",
      work: "Work Sans, sans-serif",
    },
    colors: {
      bg: "#2B2B2B",
      bgSec: "#3B3B3B",
      captionc: "#858584",
      white: "#FFFFFF",
      cta: "#A259FF",
      "cta-h": "#613599",
      blue: "#377DF7",
      pink: "#FF6250",
    },
    extend: {
      keyframes: {
        fromLeft: {
          "0%": { transform: "translateX(-20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fromTop: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        show: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        show: "show 1s cubic-bezier(0.87, 0, 0.13, 1) forwards",
      },
    },
  },
  plugins: [],
};
