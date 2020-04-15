module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Insta Grid Demo`,
    description: `The online demo for the Insta Grid Gatsby Theme`,
    author: `@melanienolan`
  },
  plugins: [
    {
      resolve: "gatsby-theme-insta-grid",
      options: {
        username: "nasa"
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js")
        }
      }
    },
    "gatsby-plugin-react-helmet"
  ]
};
