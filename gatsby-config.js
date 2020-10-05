require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Rat Brain Digital`,
    description: `Small Brains. Big Ideas.`,
    author: `@redbraindigital`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `SEO`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Landing`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Portfolio`,
            mapping: { Image: `fileNode` },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `@willthevideoman/gatsby-plugin-ackee-tracker`,
      options: {
        domainId: process.env.ACKEE_DOMAIN_ID,
        server: process.env.ACKEE_SERVER,
        ignoreLocalhost: true,
        detailed: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ratbraindigital`,
        short_name: `rbd`,
        start_url: `/`,
        background_color: `#808080`,
        theme_color: `#c50aeb`,
        display: `minimal-ui`,
        icon: `src/images/ratbraindigital-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
