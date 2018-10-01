import React from 'react'
import { css } from 'emotion'

const ProgressBar = ({ max = 100, value, height = 8, color = '#f8d16f' }) => (
  <div
    className={css`
      background: whitesmoke;
      height: ${height}px;
      border-radius: 8px;
      width: 100%;
      margin: 8px;
    `}
  >
    <div
      className={css`
        background: ${color};
        height: ${height}px;
        border-radius: 8px 0 0 8px;
        width: ${(value / max) * 100}%;
      `}
    />
  </div>
)

export default ProgressBar
