import { css } from 'emotion'
import React from 'react'
import ActionButton from '../components/ActionButton'
import Caption from '../components/Caption'
import Expanded from '../components/Expanded'
import Frame from '../components/Frame'
import Icon from '../components/Icon'
import Layout from '../components/Layout'
import ProductBanner from '../components/ProductBanner'
import Row from '../components/Row'
import { products } from '../helpers/products'

const ProductDetails = ({ id }) => {
  const product = products[id]
  const { description } = product

  return (
    <Layout>
      <Caption>
        <h1>Product Details</h1>
        <p>
          In order to enrich the purchase experience, we emphasizes group buying and delivery
          process.
        </p>
      </Caption>
      <Frame>
        <ProductBanner product={product} />
        <ActionButton theme="orange">
          <Row>
            <Expanded>Add To Cart</Expanded>
            <Icon>add_shopping_cart</Icon>
          </Row>
        </ActionButton>
        <div
          className={css`
            padding: 32px;
          `}
        >
          <div>{description}</div>
        </div>
      </Frame>
    </Layout>
  )
}

export default ProductDetails
