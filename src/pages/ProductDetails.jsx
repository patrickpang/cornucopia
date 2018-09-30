import React from 'react'
import Layout from '../components/Layout'
import Caption from '../components/Caption'
import Frame from '../components/Frame'
import Header from '../components/Header'

const ProductDetails = ({ id }) => (
  <Layout>
    <Caption>
      <h1>Product Details</h1>
      <p>
        In order to enrich the purchase experience, we emphasizes groupbuying and delivery process.
      </p>
    </Caption>
    <Frame>
      <Header simple />
    </Frame>
  </Layout>
)

export default ProductDetails
