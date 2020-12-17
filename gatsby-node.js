// // /**
// //  * Implement Gatsby's Node APIs in this file.
// //  *
// //  * See: https://www.gatsbyjs.com/docs/node-apis/
// //  */

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /Header/,
//             use: loaders.null(),
//           },
//           {
//             test: /index/,
//             use: loaders.null(),
//           },
//           {
//             test: /styled-components/,
//             use: loaders.null(),
//           },
//           {
//             test: /gatsby-ssr/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }
