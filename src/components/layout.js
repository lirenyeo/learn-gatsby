import React from 'react'
import { Header } from './header'
import { Link } from 'gatsby'

export const Layout = ({ children, forBlog = false }) => {
  return (
    <>
      <Header forBlog={forBlog} />
      <main className="layout-container">
        <article>{children}</article>
        <footer>
          <hr />
          <Link to="/">Back to Home</Link>
        </footer>
      </main>
    </>
  )
}
