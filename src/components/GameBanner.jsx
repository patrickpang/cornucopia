import React from 'react'
import Header from './Header'
import { css } from 'emotion'
import { Parallax } from 'react-parallax'

const GameBanner = ({ game: { name, description, banner, miles } }) => (
  <Parallax blur={{ min: 1, max: 2 }} bgImage={banner} bgImageAlt={name}>
    <div
      className={css`
        // background: url(${banner});
        // background-size: cover;
        color: white;
      `}
    >
      <Header simple />
      <div
        className={css`
          padding: 32px;
        `}
      >
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  </Parallax>
)

export default GameBanner
