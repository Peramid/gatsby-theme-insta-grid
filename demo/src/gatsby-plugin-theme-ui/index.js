import baseTheme from "gatsby-theme-insta-grid/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  styles: {
    ...baseTheme.styles,
    root: { fontFamily: "body", lineHeight: "body", fontWeight: "body" },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    }
  },
  colors: {
    ...baseTheme.colors
  },
  text: {
    ...baseTheme.text,
    numbers: {
      ...baseTheme.text.numbers
    }
  }
};
