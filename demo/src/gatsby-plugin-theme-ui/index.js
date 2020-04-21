import baseTheme from "@melanienolan/gatsby-theme-insta-grid/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    body: '"Avenir Next", system-ui, sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    ...baseTheme.fontWeights,
    heading: 700,
    bold: 700,
  },
  styles: {
    ...baseTheme.styles,
    h1: {
      color: "background",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 7,
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
    a: {
      color: "primary",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    code: {
      fontFamily: "monospace",
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
