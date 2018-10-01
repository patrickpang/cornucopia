import React from 'react'
import { css, cx } from 'react-emotion'
import BasicImage from './BasicImage'

const Card = ({
  item: { id, name, cover, dollars, miles },
  className,
  onClick = () => null,
  padding = true,
}) => (
  <div
    onClick={() => onClick(id)}
    className={cx(
      className,
      css`
        display: flex;
        flex-direction: column;
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
    <div
      className={css`
        flex: 1;
        padding: ${padding ? 0 : '16px 16px 0 16px'};
      `}
    >
      {name}
    </div>
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
  </div>
)

export default Card
