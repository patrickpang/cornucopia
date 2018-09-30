import styled from 'react-emotion'

const Layout = styled('div')`
  // display: flex;
  // flex-direction: column;
  // height: 100vh;

  @media screen and (orientation: landscape) {
    max-width: 375px;
    margin: auto;
  }
`

export default Layout
