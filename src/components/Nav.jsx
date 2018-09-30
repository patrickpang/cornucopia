import React from 'react'
import { Link } from '@reach/router'
import { css } from 'react-emotion'
import Icon from './Icon'
import Row from './Row'

const Nav = () => (
  <div
    className={css`
      position: fixed;
      bottom: 0;
      background: white;
      box-shadow: 0 0 20px 0 lightgrey;

      @media screen and (orientation: portrait) {
        width: 100%;
      }

      @media screen and (orientation: landscape) {
        width: 375px;
      }
    `}
  >
    <Row
      className={css`
        padding: 16px 32px;
      `}
    >
      <NavButton to="/games/" icon="videogame_asset" align="left" />
      <NavButton to="/" icon="home" />
      <NavButton to="/products/" icon="shopping_cart" align="right" />
    </Row>
  </div>
)

const NavButton = ({ to, icon, align = 'center' }) => (
  <Link
    to={to}
    getProps={({ isCurrent }) => ({
      style: { color: isCurrent ? 'black' : 'lightgrey' },
    })}
    className={css`
      flex: 1;
      display: block;
      color: inherit;
      text-decoration: none;
      text-align: ${align};
    `}
  >
    <Icon
      className={css`
        font-size: 28px;
      `}
    >
      {icon}
    </Icon>
  </Link>
)

export default Nav
