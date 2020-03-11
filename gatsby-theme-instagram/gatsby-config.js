module.exports = ({ username = "zara" }) => ({
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: username
      }
    }
  ]
});
