import React from 'react'
import { Header } from './header'
import { Link } from 'gatsby'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="layout-container">
        {children}
        <footer>
          <Link to="/">Back to Home</Link>
        </footer>
      </main>
    </>
  )
}
