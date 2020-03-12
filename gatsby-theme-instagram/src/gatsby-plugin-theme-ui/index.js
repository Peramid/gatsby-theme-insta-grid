import { roboto as theme } from "@theme-ui/presets";

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
