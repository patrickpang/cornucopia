import React from 'react'
import { css } from 'react-emotion'
import BasicButton from './BasicButton'

const backgroundColor = {
  simple: 'white',
  orange: 'linear-gradient(45deg, #fc4a1a, #f7b733)',
  violet: 'linear-gradient(45deg, #3f5efb, #fc466b)',
}

const textColor = {
  simple: 'black',
  orange: 'white',
  violet: 'white',
}

const ActionButton = ({ children, theme = 'simple', shadow = 'lightgrey' }) => (
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
      box-shadow: 0 0 20px 0 ${shadow};
    `}
  >
    {children}
  </BasicButton>
)

export default ActionButton
