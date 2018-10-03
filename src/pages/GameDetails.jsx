import { css } from 'emotion'
import React from 'react'
import ActionButton from '../components/ActionButton'
import Caption from '../components/Caption'
import Expanded from '../components/Expanded'
import Frame from '../components/Frame'
import GameBanner from '../components/GameBanner'
import Icon from '../components/Icon'
import Layout from '../components/Layout'
import Row from '../components/Row'
import { games } from '../helpers/games'
import styled from 'react-emotion'
import Box from '../components/Box'
import Paragraph from '../components/Paragraph'

const Tag = styled('div')`
  display: inline-block;
  margin: 0 8px 8px 0;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  font-size: 14px;
`

const Tags = ({ tags }) => (
  <div>
    {tags.map(tag => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </div>
)

const GameDetails = ({ id }) => {
  const game = games[id]
  const { description, tags } = game

  return (
    <Layout>
      <Caption>
        <h1>Game Details</h1>
        <p>In order to attract the user, we emphasize an immersive experience with games.</p>
      </Caption>
      <Frame
        className={css`
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
          `}
        >
          <Paragraph>{description}</Paragraph>
          <Box height={32} />
          <Tags tags={tags} />
        </div>
      </Frame>
    </Layout>
  )
}

export default GameDetails
