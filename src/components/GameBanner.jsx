import React from 'react'
import Header from './Header'
import { css } from 'emotion'
import { Parallax } from 'react-parallax'
import Expanded from './Expanded'
import Column from './Column'

const GameBanner = ({ game: { name, banner, miles } }) => (
  <Parallax blur={{ min: 0.5, max: 1 }} bgImage={banner} bgImageAlt={name}>
    <Column
      className={css`
        // background: url(${banner});
        // background-size: cover;
        color: white;
        height: 320px;
      `}
    >
      <Header simple />
      <Expanded />
      <div
        className={css`
          padding: 32px;
        `}
      >
        <h2>{name}</h2>
        <div>{miles} miles</div>
      </div>
    </Column>
  </Parallax>
)

export default GameBanner
