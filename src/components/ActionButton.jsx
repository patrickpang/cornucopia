import React from 'react'
import { css } from 'react-emotion'
import BasicButton from './BasicButton'

const backgroundColor = {
  simple: 'white',
  orange: 'linear-gradient(45deg, #fc4a1a, #f7b733)',
}

const textColor = {
  simple: 'black',
  orange: 'white',
}

const ActionButton = ({ children, theme = 'simple' }) => (
  <BasicButton
    className={css`
      display: block;
      width: 200px;
      margin-bottom: -20px;
      transform: translateY(-20px);
      margin-bottom: -20px;
      margin-left: auto;
      margin-right: auto;
      color: ${textColor[theme]};
      background: ${backgroundColor[theme]};
      padding: 12px 20px;
      border-radius: 24px;
      box-shadow: 0 0 20px 0 lightgrey;
    `}
  >
    {children}
  </BasicButton>
)

export default ActionButton
