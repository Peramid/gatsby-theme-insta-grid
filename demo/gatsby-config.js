module.exports = {
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
    }
  ]
};
