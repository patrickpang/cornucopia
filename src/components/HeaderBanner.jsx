import React from 'react'
import Header from './Header'
import Icon from './Icon'
import { css } from 'react-emotion'
import Row from './Row'

const HeaderBanner = () => (
  <div
    className={css`
      background: url(images/singapore.jpg);
      background-size: contain;
      background-size: cover;
      color: white;

      display: flex;
      flex-direction: column;
      height: 280px;
      padding-bottom: 8px;
    `}
  >
    <div
      className={css`
        flex: 1;
      `}
    >
      <Header />
    </div>
    <div
      className={css`
        padding: 32px;
      `}
    >
      <div
        className={css`
          font-size: 20px;
        `}
      >
        Hong Kong to
      </div>
      <div
        className={css`
          font-size: 32px;
        `}
      >
        Singapore
      </div>
      <Row
        className={css`
          margin-top: 16px;
          font-size: 16px;
        `}
      >
        <Icon
          className={css`
            margin-right: 8px;
          `}
        >
          access_time
        </Icon>
        <span>1 h 30 m left</span>
      </Row>
    </div>
  </div>
)

export default HeaderBanner
