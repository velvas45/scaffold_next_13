/**
 * This file include all system design for your apps "dynamic style"
 */

module.exports = {
  theme: {
    colors: {
      white: "#FAFAFA",
      gray: {
        light: "#D1D1D1",
        primary: "#8D8D8D",
        secondary: "#555555",
      },
      black: "#2C2C2C",
      blue: {
        ligthless: "#CBD8F3",
        light: "#9FB5EC",
        primary: "#3872E7",
        secondary: "#4060B2",
        tertiary: "#384F85",
      },
      green: {
        ligthless: "#DDEBD6",
        light: "#BFDCB3",
        primary: "#77C164",
        secondary: "#709B5E",
        tertiary: "#5A764D",
      },
      gold: {
        ligthless: "#F3E6D5",
        light: "#ECD4AF",
        primary: "#E7AC5A",
        secondary: "#B18D59",
        tertiary: "#846D49",
      },
      purple: {
        ligthless: "#DFCCE8",
        light: "#C49FD7",
        primary: "#9B43BD",
        secondary: "#764095",
        tertiary: "#5E3A71",
      },
      red: {
        ligthless: "#EFD3D2",
        light: "#E4ACAA",
        primary: "#E55858",
        secondary: "#AA5350",
        tertiary: "#7F4644",
      },
      orange: {
        ligthless: "#F4DBC6",
        light: "#EDBD94",
        primary: "#F57B20",
        secondary: "#B76C34",
        tertiary: "#875730",
      },
      teal: {
        ligthless: "#D6EFF0",
        light: "#B3E5E6",
        primary: "#4ED4D4",
        secondary: "#62A8A9",
        tertiary: "#4F7F7F",
      },
      yellow: {
        ligthless: "#F8F3D2",
        light: "#F6EBAB",
        primary: "#F6EBAB",
        secondary: "#BFB056",
        tertiary: "#8E8346",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        full: "9999999",
      },
    },
  },
  plugins: [],
};
