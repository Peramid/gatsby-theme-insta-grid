module.exports = ({
  username = undefined,
  type = "account",
  hashtag = undefined
}) => ({
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-instagram",
      options: {
        type,
        username,
        hashtag
      }
    }
  ]
});
