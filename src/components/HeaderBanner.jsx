import React from 'react'
import Header from './Header'
import Icon from './Icon'
import { css } from 'react-emotion'
import Row from './Row'
import { navigate } from '@reach/router'
import Expanded from './Expanded'
import Column from './Column'

const HeaderBanner = () => (
  <Column
    onClick={() => navigate('/profile')}
    className={css`
      background: url(/images/singapore.jpg);
      background-size: cover;
      color: white;
      cursor: pointer;
      height: 280px;
      padding-bottom: 8px;
    `}
  >
    <Expanded>
      <Header />
    </Expanded>
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
        <span>1 h 30 m remaining</span>
      </Row>
    </div>
  </Column>
)

export default HeaderBanner
