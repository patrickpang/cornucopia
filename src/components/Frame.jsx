import styled from 'react-emotion'

const Frame = styled('div')`
  @media screen and (orientation: portrait) {
  }

  @media screen and (orientation: landscape) {
    height: calc(100vh - 200px);
    overflow: auto;
    box-shadow: 0 0 20px 0 lightgrey;
  }
`

export default Frame
