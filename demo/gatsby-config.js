module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Insta Grid Demo`,
    description: `The online demo for Gatsby Theme Insta Grid`,
    author: `@melanienolan`,
  },
  plugins: [
    {
      resolve: "@melanienolan/gatsby-theme-insta-grid",
      options: {
        username: "nasa",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
