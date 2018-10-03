import React from 'react'
import { css } from 'react-emotion'
import BasicButton from './BasicButton'

const backgroundColor = {
  simple: 'white',
  orange: 'linear-gradient(45deg, #fc4a1a, #f7b733)',
  violet: 'linear-gradient(45deg, #3f5efb, #fc466b)',
}

const textTheme = {
  simple: 'dark',
  orange: 'light',
  violet: 'light',
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
      color: ${textTheme[theme] === 'dark' ? 'black' : 'white'};
      background: ${backgroundColor[theme]};
      padding: 12px 20px;
      border-radius: 24px;
      box-shadow: 0 0 20px 0 ${textTheme[theme] === 'dark' ? 'lightgrey' : 'grey'};
    `}
  >
    {children}
  </BasicButton>
)

export default ActionButton
