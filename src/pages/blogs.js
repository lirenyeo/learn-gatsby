import { graphql } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';

const BlogsPage = ({ data }) => {
  return (
    <Layout>
      <div className="heading">
        <h1>Blogs</h1>
        <p>({data.allMarkdownRemark.totalCount} posts)</p>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title} <small>{node.frontmatter.date}</small>
          </h3>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query AllBlogsQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            published
          }
        }
      }
    }
  }
`;

export default BlogsPage;
