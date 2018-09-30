import React from 'react'
import BasicInput from './BasicInput'
import Row from './Row'
import Icon from './Icon'
import { css } from 'react-emotion'

const SearchBar = () => (
  <Row
    className={css`
      width: 200px;
      margin-bottom: -20px;
      transform: translateY(-20px);
      margin-bottom: -20px;
      margin-left: auto;
      margin-right: auto;
      background: white;
      padding: 12px 20px;
      border-radius: 24px;
      box-shadow: 0 0 20px 0 lightgrey;
    `}
  >
    <BasicInput placeholder="Search" />
    <Icon>search</Icon>
  </Row>
)

export default SearchBar
