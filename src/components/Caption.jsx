import styled from 'react-emotion'

const Caption = styled('div')`
  @media screen and (orientation: portrait) {
    display: none;
  }

  @media screen and (orientation: landscape) {
    padding-top: 32px;
    height: 200px;
  }
`

export default Caption
