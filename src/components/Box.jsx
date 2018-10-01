import styled from 'react-emotion'

const Box = styled('div')`
  width: ${({ width = 8 }) => width}px;
  height: ${({ height = 8 }) => height}px;
`

export default Box
