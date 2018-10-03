import React from 'react'
import { cx, css } from 'react-emotion'

const Icon = ({ children, className, left, right }) => (
  <i
    className={cx(
      'material-icons',
      className,
      css`
        ${left && 'margin-right: 8px;'} ${right && 'margin-left: 8px;'};
      `
    )}
  >
    {children}
  </i>
)

export default Icon
