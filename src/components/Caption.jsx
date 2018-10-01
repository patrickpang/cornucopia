import styled from 'react-emotion'

const Caption = styled('div')`
  @media screen and (orientation: portrait) {
    display: none;
  }

  @media screen and (orientation: landscape) {
    box-sizing: border-box;
    padding-top: 32px;
    height: 250px;
  }
`

export default Caption
