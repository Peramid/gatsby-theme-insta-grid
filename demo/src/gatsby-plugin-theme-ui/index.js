import baseTheme from "gatsby-theme-insta-grid/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  styles: {
    ...baseTheme.styles,
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
  },
  colors: {
    ...baseTheme.colors,
    text: "#222222",
    background: "#ffffff",
    primary: "#3D5A80",
  },
  text: {
    ...baseTheme.text,
    numbers: {
      ...baseTheme.text.numbers,
    },
  },
};
