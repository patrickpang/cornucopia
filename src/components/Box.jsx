import styled from 'react-emotion'

const Box = styled('div')`
  min-width: ${({ width = 8 }) => width}px;
  min-height: ${({ height = 8 }) => height}px;
`

export default Box
