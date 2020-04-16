export default {
  breakpoints: ["40em", "52em", "64em", "80em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    monospace: '"Roboto Mono", monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  lineHeights: { body: 1.5, heading: 1.125 },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
  },
  styles: {
    Flex: {
      insta: {
        justifyContent: "center",
        flexFlow: "row wrap",
        alignItems: "stretch",
        margin: -2,
      },
      overlay: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
        position: "absolute",
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        opacity: 0,
        transition: "opacity 0.3s",
      },
      complex: {
        alignItems: "center",
        justifyContent: "flex-end",
        py: 2,
      },
    },
  },
  cards: {
    basic: {
      padding: 2,
      flexGrow: 1,
      flexBasis: ["100%", "50%", "30%", "25%"],
      position: "relative",
      ":hover": {
        div: {
          opacity: 1,
        },
      },
    },
    complex: {
      padding: 2,
      margin: 2,
      flexGrow: 1,
      flexBasis: ["100%", "50%", "30%"],
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      backgroundColor: "#ffffff",
    },
  },
  text: {
    caption: {
      fontSize: 1,
      lineHeight: "body",
      wordBreak: "break-word",
      color: "text",
    },
    numbers: {
      pl: 1,
      pr: 2,
      m: "0",
      fontSize: "0.9rem",
      fontWeight: "bold",
    },
  },
};
