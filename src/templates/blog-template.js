import React from 'react'
import { Layout } from '../components/layout'
import { graphql } from 'gatsby'

const BlogTemplate = ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  return (
    <Layout forBlog>
      <article>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

/*
  id is based on this.props.pageContext.id,
  which is injected through: (refer to gatsby-node.js)
    createPage({
      ...stuffs,
      context: {
        id: node.id
      }
    })
*/
export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogTemplate
