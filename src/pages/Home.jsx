import React from 'react'
import Icon from '../components/Icon'
import Layout from '../components/Layout'
import HeaderBanner from '../components/HeaderBanner'
import SearchBar from '../components/SearchBar'
import Row from '../components/Row'
import { css } from 'react-emotion'
import Main from '../components/Main'
import { products } from '../helpers/products'
import CardsRow from '../components/CardsRow'
import Nav from '../components/Nav'
import { games } from '../helpers/games'
import Caption from '../components/Caption'
import Frame from '../components/Frame'
import { navigate } from '@reach/router'
import BasicLink from '../components/BasicLink'

const Section = ({ heading, items, padding, itemLinkPrefix = '/' }) => (
  <div>
    <Row>
      <h2
        className={css`
          flex: 1;
        `}
      >
        {heading}
      </h2>
      <Row>
        <BasicLink to={itemLinkPrefix}>MORE</BasicLink>
        <Icon>keyboard_arrow_right</Icon>
      </Row>
    </Row>
    <CardsRow items={items} padding={padding} onCardClick={id => navigate(itemLinkPrefix + id)} />
  </div>
)

const Home = () => (
  <Layout>
    <Caption>
      <h1>Homepage</h1>
      <p>A newsfeed combining products and games the user might be interested in.</p>
    </Caption>
    <Frame>
      <HeaderBanner />
      <SearchBar />
      <Main>
        <Section heading="Shopping" items={Object.values(products)} itemLinkPrefix="/products/" />
        <Section
          heading="Entertainment"
          items={Object.values(games)}
          itemLinkPrefix="/games/"
          padding={false}
        />
      </Main>
      <Nav />
    </Frame>
  </Layout>
)

export default Home
