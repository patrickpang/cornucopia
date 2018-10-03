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
      border-radius: 12px;
      box-shadow: 0px 0px 8px black;
      padding: 32px 24px;
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
  margin-top: 32px;
  text-align: right;
`

const Timeline = () => (
  <div
    className={css`
      padding-top: 8px;
    `}
  >
    <Destination icon="business" name="Gardens by the Bay" />
    <Destination icon="business" name="Kampong Glam" />
    <Destination icon="business" name="Tiong Bahru Estate" />
    <Destination icon="restaurant" name="Lau Pa Sat" />
    <Destination icon="hotel" name="Marine Bay Sands" />
  </div>
)

const Destination = ({ icon, name }) => (
  <Row
    className={css`
      margin: 8px;
    `}
  >
    <Icon left>{icon}</Icon>
    <div>{name}</div>
  </Row>
)

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
      <div
        className={css`
          height: 100%;
          overflow-y: auto;
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

          <InfoCard heading="My Miles">
            <Row>
              <Icon left>flight_takeoff</Icon>
              <span>55,700 miles</span>
            </Row>
            <CardAction>
              <BasicButton>
                <Row>
                  <span>Top-up</span>
                  <Icon>keyboard_arrow_right</Icon>
                </Row>
              </BasicButton>
            </CardAction>
          </InfoCard>

          <InfoCard heading="My Flight">
            <Row>
              <Icon left>access_time</Icon>
              <span>1 h 30 m remaining</span>
            </Row>
            <CardAction>
              <BasicButton>
                <Row>
                  <span>Preferences</span>
                  <Icon>keyboard_arrow_right</Icon>
                </Row>
              </BasicButton>
            </CardAction>
          </InfoCard>

          <InfoCard heading="My Trip">
            <Timeline />

            <CardAction>
              <BasicButton>
                <Row>
                  <span>Details</span>
                  <Icon>keyboard_arrow_right</Icon>
                </Row>
              </BasicButton>
            </CardAction>
          </InfoCard>
        </div>
      </div>
    </Frame>
  </Layout>
)

export default Profile
