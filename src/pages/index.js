// Libraries
import React from 'react'
import styled from 'styled-components'

// Components
import PageLayout from '../components/pageLayout'
import SEO from '../components/seo'
import HeroHeader from '../components/heroHeader'

// Styles
import PaddingWrapper from '../styles/paddingWrapper'
import GridWrap from '../styles/gridWrap'
const StyledMainWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -20px;
  margin-top: -70px;
  padding-left: 12px;
  padding-right: 12px;
`

const Card = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 1 300px;
  min-height: 300px;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px,
    rgba(39, 44, 49, 0.03) 1px 3px 8px;
  overflow: hidden;
  margin: 0 20px 40px;
  background: center center / cover rgb(255, 255, 255);
  border-radius: 5px;
  transition: all 0.5s ease 0s;

  &:hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px,
      rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transform: translate3d(0px, -1px, 0px) scale(1.02);
    transition: all 0.4s ease 0s;
  }
`

const LeadCard = styled(Card)`
  flex-direction: row;
  flex: 1 1 100%;
`

const IndexPage = () => (
  <PageLayout>
    <SEO title="Home" />
    <HeroHeader />
    <PaddingWrapper background="#f5f8fb">
      <GridWrap>
        <StyledMainWrapper>
          <LeadCard>Top Box</LeadCard>
          <Card>bottom left</Card>
          <Card>bottom right</Card>
        </StyledMainWrapper>
      </GridWrap>
    </PaddingWrapper>
  </PageLayout>
)

export default IndexPage
