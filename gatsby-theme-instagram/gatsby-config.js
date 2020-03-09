module.exports = ({username = 'zara'}) => ({
    plugins: [
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-instagram',
            options: {
                username: username
            }
        }
    ]
});
