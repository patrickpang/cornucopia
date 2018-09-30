import React from 'react'
import { cx } from 'react-emotion'

const Icon = ({ children, className }) => (
  <i className={cx('material-icons', className)}>{children}</i>
)

export default Icon
