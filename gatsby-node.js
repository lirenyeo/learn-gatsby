const path = require('path')
const blogTemplate = path.resolve(
  __dirname,
  'src',
  'templates',
  'blog-template.js'
)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogTemplate,
      context: {
        id: node.id
      }
    })
  })
}
