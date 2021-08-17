module.exports = {
  siteMetadata: {
    siteUrl: "https://davidholbrook.info",
    title: "Portfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "STIX Two Text",
            weights: ["400", "600", "700"],
          },
          {
            family: "Open Sans",
            weights: ["400", "700", "800"],
          },
        ],
      },
    },
  ],
}
