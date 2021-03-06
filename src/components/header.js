import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const Header = ({ forBlog }) => {
  const {
    site: {
      siteMetadata: { title, description }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <header className="header">
      <div className="header-title">{forBlog ? 'Blog' : title}</div>
      <div className="header-subtitle">{description}</div>
    </header>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
