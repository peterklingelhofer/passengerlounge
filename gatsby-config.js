module.exports = {
  siteMetadata: {
    title: "Passenger Lounge",
    description: "A website for the band Passenger Lounge",
    keywords: "band,music",
    lang: "en",
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Passenger Lounge",
        icon: "./src/images/favicon.png",
        short_name: "Passenger Lounge",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#161616",
        display: "browser",
      },
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {
        iconPath: "./src/images/favicon.png",
        repository: {
          baseUrl:
            "https://github.com/carbon-design-system/gatsby-theme-carbon",
          subDirectory: "/packages/example",
        },
        theme: {
          homepage: "dark",
          interior: "dark",
        },
      },
    },
    {
      resolve: "gatsby-source-rss-feed",
      options: {
        url: "https://passengerlounge.substack.com/feed",
        name: "SubstackFeed",
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
