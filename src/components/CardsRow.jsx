import React from 'react'
import { css } from 'react-emotion'
import Card from './Card'
import Box from './Box'
import Row from './Row'

const CardsRow = ({ items, padding, onCardClick = () => null }) => (
  <Row
    className={css`
      overflow-x: auto;
      padding: 16px 32px;
      margin: 0 -32px;
      &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
    `}
  >
    {items.map(item => (
      <Card
        item={item}
        key={item.id}
        className={css`
          flex-shrink: 0;
          width: 150px;
        `}
        padding={padding}
        onClick={onCardClick}
      />
    ))}
    <Box width={32} />
  </Row>
)

export default CardsRow
