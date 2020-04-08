import { roboto as theme } from "@theme-ui/presets";

console.log(theme);

export default {
  ...theme,
  colors: {
    ...theme.colors
  },
  cards: {
    basic: {
      margin: 2,
      flex: "0 1 300px"
    },
    complex: {
      padding: 2,
      margin: 2,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      backgroundColor: "#ffffff",
      flex: "0 1 300px"
    }
  }
};
