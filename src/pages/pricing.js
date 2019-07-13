import React from 'react'
import { Layout } from '../components/layout'
import { graphql } from 'gatsby'

const PricingPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Package A</th>
            <th>Package B</th>
            <th>Package C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$1</td>
            <td>$2</td>
            <td>$3</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default PricingPage
