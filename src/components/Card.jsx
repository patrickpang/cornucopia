import React from 'react'
import { css, cx } from 'react-emotion'
import BasicImage from './BasicImage'
import Column from './Column'
import Expanded from './Expanded'

const Card = ({
  item: { id, name, cover, dollars, miles },
  className,
  onClick = () => null,
  padding = true,
}) => (
  <Column
    onClick={() => onClick(id)}
    className={cx(
      className,
      css`
        cursor: pointer;
        border-radius: 12px;
        box-shadow: 0px 0px 16px lightgrey;
        padding: ${padding ? '16px' : 0};
        margin-right: 32px;
      `
    )}
  >
    <BasicImage
      className={css`
        border-radius: ${padding ? 0 : '12px 12px 0 0'};
      `}
      src={cover}
      alt={name}
    />
    <Expanded
      className={css`
        padding: ${padding ? 0 : '16px 16px 0 16px'};
      `}
    >
      {name}
    </Expanded>
    <div
      className={css`
        margin-top: 8px;
        font-size: 70%;
        padding: ${padding ? 0 : '0 16px 16px 16px'};
      `}
    >
      {miles} miles
      {dollars && ` / $ ${dollars}`}
    </div>
  </Column>
)

export default Card
