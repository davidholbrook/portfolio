module.exports = {
  siteMetadata: {
    title: `David Holbrook`,
    description: `Web developer for Wiha Tools, also designs things.`,
    author: `@davidholbrook`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Work Sans\:300,400,600`, `Roboto Slab\:300,400`],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Holbrook`,
        short_name: `davidholbrook`,
        start_url: `/`,
        background_color: `#E84118`,
        theme_color: `#E84118`,
        display: `minimal-ui`,
        icon: `src/images/davidholbrook-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
