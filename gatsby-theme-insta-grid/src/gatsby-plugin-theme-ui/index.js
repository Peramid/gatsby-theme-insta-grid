import { roboto as theme } from "@theme-ui/presets";

console.log(theme);

export default {
  ...theme,
  colors: {
    ...theme.colors
  },
  styles: {
    ...theme.styles,
    Flex: {
      insta: {
        justifyContent: "center",
        flexFlow: "row wrap",
        alignItems: "stretch"
      }
    }
  },
  cards: {
    basic: {
      margin: 2,
      flex: "0 1 300px",
      position: "relative",
      ":hover": {
        div: {
          opacity: 1
        }
      }
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
