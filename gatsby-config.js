module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: false,
        basePath: `/notes`,
      },
    },
    // with gatsby-plugin-theme-ui, the last theme in the config
    // will override the theme-ui context from other themes
    { resolve: `gatsby-theme-blog` },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    { resolve: `gatsby-source-filesystem`, options: { path: `./content/assets/` } },
  ],
  siteMetadata: {
    title: `Shadowed Site Title`,
  },
}
