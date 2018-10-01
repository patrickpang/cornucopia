import { css } from 'emotion'
import React from 'react'
import ActionButton from '../components/ActionButton'
import Caption from '../components/Caption'
import Expanded from '../components/Expanded'
import Frame from '../components/Frame'
import Icon from '../components/Icon'
import Layout from '../components/Layout'
import GameBanner from '../components/GameBanner'
import Row from '../components/Row'
import { games } from '../helpers/games'

const GameDetails = ({ id }) => {
  const game = games[id]
  const { miles } = game

  return (
    <Layout>
      <Caption>
        <h1>Game Details</h1>
        <p>In order to attract the user, we emphasize an immersive experience with games.</p>
      </Caption>
      <Frame
        className={css`
          height: 100%;
          background: linear-gradient(0deg, #16222a, #3a6073);
        `}
      >
        <GameBanner game={game} />
        <ActionButton theme="violet">
          <Row>
            <Icon>play_arrow</Icon>
            <Expanded
              className={css`
                text-align: center;
              `}
            >
              Start The Game
            </Expanded>
          </Row>
        </ActionButton>
        <div
          className={css`
            color: white;
            padding: 32px;
            text-align: center;
          `}
        >
          <div>{miles} miles</div>
        </div>
      </Frame>
    </Layout>
  )
}

export default GameDetails
