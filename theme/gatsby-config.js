module.exports = {
    plugins: [
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-instagram',
            options: {
                username: 'zara'
            }
        }
    ]
};
