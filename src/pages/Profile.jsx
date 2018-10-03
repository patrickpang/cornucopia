import { css } from 'emotion'
import React from 'react'
import Caption from '../components/Caption'
import Frame from '../components/Frame'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Row from '../components/Row'
import Icon from '../components/Icon'
import BasicButton from '../components/BasicButton'
import styled from 'react-emotion'

const InfoCard = ({ heading, children }) => (
  <div
    className={css`
      background: rgba(0, 0, 0, 0.7);
      border-radius: 8px;
      box-shadow: 0px 0px 8px black;
      padding: 24px;
      margin-bottom: 32px;
    `}
  >
    <div
      className={css`
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 16px;
      `}
    >
      {heading}
    </div>
    {children}
  </div>
)

const CardAction = styled('div')`
  margin-top: 16px;
  text-align: right;
`

const Profile = () => (
  <Layout>
    <Caption>
      <h1>Profile</h1>
      <p>
        We provide a personalized experience for the user, including their in-flight experience and
        trip itinerary.
      </p>
    </Caption>
    <Frame
      className={css`
        background: url('/images/singapore_vertical.jpg') no-repeat center;
        background-size: cover;
        color: white;
      `}
    >
      <Header simple />
      <div
        className={css`
          padding: 32px;
          padding-top: 0;
        `}
      >
        <h2>Welcome, Patrick</h2>
        <InfoCard heading="MY MILES">
          <div>55,700 miles</div>
          <CardAction>
            <BasicButton>
              <Row>
                <span>Top-up miles</span>
                <Icon>keyboard_arrow_right</Icon>
              </Row>
            </BasicButton>
          </CardAction>
        </InfoCard>
        <InfoCard heading="FLIGHT">
          <Row>
            <Icon
              className={css`
                margin-right: 8px;
              `}
            >
              access_time
            </Icon>
            <span>1 h 30 m remaining</span>
          </Row>
          <CardAction>
            <BasicButton>
              <Row>
                <span>Dietary Preferences</span>
                <Icon>keyboard_arrow_right</Icon>
              </Row>
            </BasicButton>
          </CardAction>
        </InfoCard>
        <InfoCard heading="MY TRIP">
          <div>Singapore Trip</div>
        </InfoCard>
      </div>
    </Frame>
  </Layout>
)

export default Profile
