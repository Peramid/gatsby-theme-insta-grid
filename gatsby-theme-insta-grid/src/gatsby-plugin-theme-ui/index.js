import { roboto as theme } from "@theme-ui/presets";

console.log("theme", {
  ...theme,
  colors: {
    ...theme.colors,
    modes: {
      dark: {
        text: "#ffffff",
        background: "grey"
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      margin: 3,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      background: "background"
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted"
    }
  }
});

export default {
  ...theme,
  colors: {
    ...theme.colors,
    modes: {
      dark: {
        text: "#ffffff",
        background: "grey"
      }
    }
  },
  cards: {
    basic: {
      padding: 2,
      margin: 3
    },
    complex: {
      padding: 2,
      margin: 3,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      backgroundColor: "background"
    }
  },
  text: {
    bold: {
      fontWeight: "bold"
    }
  }
};
