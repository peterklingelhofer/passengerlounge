module.exports = {
  trailingSlash: `always`,
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
        mediumAccount: "carbondesign",
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
    `gatsby-plugin-netlify`,
  ],
};
