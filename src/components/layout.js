import React from 'react'
import { Header } from './header'
import { Link } from 'gatsby'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="layout-container">{children}</main>
      <footer>
        <Link to="/">Home</Link>
      </footer>
    </>
  )
}
