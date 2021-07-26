module.exports = {
    siteMetadata: {
        title: "Isabella Enriquez's Website",
        description: "Full Stack Developer & Student building beautiful digital environments everyone can enjoy."
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/blog`
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sass`,
    ]
}