import React from 'react'
import { Layout } from '../components/layout'
import { Link } from 'gatsby'

const HomePage = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ad. Placeat corporis facere ullam, dolorem quia sequi iure iste reiciendis numquam dolor recusandae libero architecto, esse iusto voluptas doloribus modi dicta quisquam nobis nihil at, nulla adipisci saepe! Deserunt eum alias, placeat consequatur corporis quae voluptates rem, corrupti at temporibus numquam. Dolorem itaque velit quis facere, sequi officia numquam qui non quas aspernatur harum eos beatae unde rerum voluptatibus? Ab deleniti cumque eius architecto eos quia, dolorum quibusdam corrupti illo corporis officia dolore laboriosam distinctio maiores nihil eveniet aspernatur minima unde itaque voluptatum qui deserunt recusandae ad excepturi. Perspiciatis, nam.</p>
      <hr/>
      <noscript>
        <h2>Only show when there is no js</h2>
      </noscript>
      <noscript id="gatsby-noscript">
        <h2>Only show when there is no js (with #gatsby-noscript)</h2>
      </noscript>
      <Link to="/about-me">About Me</Link>
    </Layout>
  )
}

export default HomePage
