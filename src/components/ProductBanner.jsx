import { css } from 'emotion'
import React from 'react'
import BasicImage from './BasicImage'
import Header from './Header'

const ProductBanner = ({ product: { name, description, cover, miles, dollars } }) => (
  <div>
    <Header simple />
    <div
      className={css`
        padding: 0 32px 16px 32px;
      `}
    >
      <h2>{name}</h2>
      <div
        className={css`
          text-align: center;
        `}
      >
        <BasicImage
          src={cover}
          alt={name}
          className={css`
            max-height: 30vh;
            width: auto;
          `}
        />
      </div>
    </div>
  </div>
)

export default ProductBanner
