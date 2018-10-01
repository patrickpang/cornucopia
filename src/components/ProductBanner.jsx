import { css } from 'emotion'
import React from 'react'
import BasicImage from './BasicImage'
import Header from './Header'
import ProgressBar from './ProgressBar'
import Row from './Row'

const PriceTag = ({ miles, dollars, discount, purchases }) => (
  <div>
    <div
      className={css`
        font-size: 20px;
        color: #ff4136;
      `}
    >
      {Math.round(miles * (1 - discount))} miles / $ {dollars * (1 - discount)}
    </div>

    <div
      className={css`
        padding: 16px 0;
      `}
    >
      <Row>
        <div
          className={css`
            width: 180px;
            font-size: 14px;
            text-decoration: line-through;
          `}
        >
          {miles} miles
          <br />$ {dollars}
        </div>
        <ProgressBar max={15} value={purchases} />
        <div
          className={css`
            width: 200px;
            font-size: 16px;
          `}
        >
          {Math.round(miles * 0.85)} miles
          <br />$ {dollars * 0.85}
        </div>
      </Row>
      <p>{15 - purchases} more purchases to get 15% off</p>
    </div>
  </div>
)

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
        <PriceTag miles={miles} dollars={dollars} discount={0.1} purchases={13} />
      </div>
    </div>
  </div>
)

export default ProductBanner
