module.exports = {
  siteMetadata: {
    title: `Takeanydoubt`,
    description: `Take Any Doubt is a web application platform that will provide online tutoring as well as offline.`,
    author: `EJC Technology`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "Subject",
    //     fieldName: "myadmin",
    //     url:
    //       "https://ntqf2byhpvbnxiqptpfozfwppm.appsync-api.us-east-2.amazonaws.com/graphql",
    //     headers: {
    //       "x-api-key": "27u7jtv73c5a8id49024bai2b",
    //     },
    //   },
    // },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
