import { roboto as theme } from "@theme-ui/presets";

console.log("theme", theme);

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
  }
};
