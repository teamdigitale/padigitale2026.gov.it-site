module.exports = {
  siteMetadata: {
    name: 'PA digitale 2026',
    hostname: 'padigitale2026.gov.it',
    siteUrl: 'https://padigitale2026.gov.it/',
    apiUrl: 'https://api.padigitale2026.gov.it/api',
    captchaKey: '6Ldj-g4eAAAAAN0ee9NiyA28zbF6TD8cjjFxaOX0',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-attr',
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 740,
            },
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: 'R9pxNNv0Xm',
        matomoUrl: `https://ingestion.webanalytics.italia.it/`,
        siteUrl: 'https://padigitale2026.gov.it',
        matomoPhpScript: 'matomo.php',
        matomoJsScript: 'matomo.js',
        localScript: '/assets/matomo.js',
        enableJSErrorTracking: true,
      },
    },
  ],
};
