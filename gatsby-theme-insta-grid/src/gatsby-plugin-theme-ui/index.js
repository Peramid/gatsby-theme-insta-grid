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
      },
      overlay: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        opacity: 0,
        transition: "opacity 0.3s"
      },
      complex: {
        alignItems: "center",
        justifyContent: "flex-end",
        py: 2
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
  },
  text: {
    caption: {
      fontSize: 1,
      lineHeight: "body",
      wordBreak: "break-word",
      color: theme.colors.text
    },
    numbers: {
      pl: 1,
      pr: 2,
      m: "0",
      fontSize: "0.9rem",
      fontWeight: "bold"
    }
  }
};
