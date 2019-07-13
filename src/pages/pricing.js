import React from 'react'
import { Layout } from '../components/layout'

const PricingPage = () => {
  return (
    <Layout>
      <table>
        <tr>
          <th>Package A</th>
          <th>Package B</th>
          <th>Package C</th>
        </tr>
        <tr>
          <td>$1</td>
          <td>$2</td>
          <td>$3</td>
        </tr>
      </table>
    </Layout>
  )
}

export default PricingPage
