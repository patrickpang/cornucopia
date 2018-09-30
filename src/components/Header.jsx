import React from 'react'
import Icon from './Icon'
import { css } from 'react-emotion'
import Row from './Row'
import BasicButton from './BasicButton'

const Header = ({ simple = false }) => (
  <Row
    className={css`
      padding: 32px;
      justify-content: space-between;
    `}
  >
    {!simple && (
      <Row>
        <Icon
          className={css`
            margin-right: 8px;
          `}
        >
          airplanemode_active
        </Icon>
        <span
          className={css`
            font-size: 20px;
          `}
        >
          Cornucopia
        </span>
      </Row>
    )}
    {simple && (
      <BasicButton onClick={() => window.history.back()}>
        <Icon>arrow_back</Icon>
      </BasicButton>
    )}
    <Row>
      <span>55,700 miles</span>
      <Icon
        className={css`
          margin-left: 8px;
        `}
      >
        person
      </Icon>
    </Row>
  </Row>
)

export default Header
