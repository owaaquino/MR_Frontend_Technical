const colors = {
  primary: {
    100: "#222222",
    200: "#888888",
  },
  gray: {
    100: "#F6F6F7",
    200: "#222222",
    300: "#CCCCCC",
  },
  star: {
    100: "#C90000",
  },
  red: {
    100: "#ff0000",
  },
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    // Using px values so calc in @media can be used
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1248px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
      link: {
        DEFAULT: colors.primary["100"],
        hover: colors.primary["200"],
      },
      body: colors.gray[300],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
    extend: {
      spacing: {
        "gs-1": "var(--gridspace)",
        "gs-2": "calc(var(--gridspace) * 2)",
        "gs-xs": "calc(var(--baseline) / 2)",
        "gs-sm": "calc(var(--baseline) / 1.5)",
        "gs-base": "var(--baseline)",
        "gs-lg": "calc(var(--baseline) * 1.5)",
        "gs-xl": "calc(var(--baseline) * 2)",
      },
      fontFamily: {
        sans: "Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
        mono: "Consolas, Menlo, Courier, monospace",
      },
      fontSize: {
        "2xs": [".65rem", "1rem"],
        "gs-xs": [
          "calc(1rem / var(--typescale) / var(--typescale))",
          "calc(var(--baseline) / 2)",
        ],
        "gs-sm": [
          "calc(1rem / var(--typescale))",
          "calc(var(--baseline) / 1.5)",
        ],
        "gs-base": ["1rem", "calc(var(--baseline) / 2)"],
        "gs-lg": ["calc(1rem * var(--typescale))", "calc(var(--baseline) * 1)"],
        "gs-xl": [
          "calc(1rem * var(--typescale) * var(--typescale))",
          "calc(var(--baseline) * 1)",
        ],
        "gs-2xl": [
          "calc(1rem * var(--typescale) * var(--typescale) * var(--typescale))",
          "calc(var(--baseline) * 1.5)",
        ],
        "gs-3xl": [
          "calc(1rem * var(--typescale) * var(--typescale) * var(--typescale) * var(--typescale))",
          "calc(var(--baseline) * 1.5)",
        ],
      },
      lineHeight: {
        11: "2.75rem",
        "gs-xs": "calc(var(--baseline) / 2)",
        "gs-sm": "calc(var(--baseline) / 1.5)",
        "gs-base": "var(--baseline)",
        "gs-lg": "calc(var(--baseline) * 1.5)",
        "gs-xl": "calc(var(--baseline) * 2)",
      },
      transformOrigin: {
        "top-center": "top center",
      },
      outline: {
        gray: ["1px dotted #888"],
        none: "none",
      },
      keyframes: {
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          to: { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          to: { transform: "scale(.9)", opacity: 0 },
        },
      },
      animation: {
        enter: "enter 0.25s ease-in-out",
        leave: "leave 0.25s ease-in-out forwards",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
