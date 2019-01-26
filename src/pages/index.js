// Libraries
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Components
import PageLayout from '../components/pageLayout'
import SEO from '../components/seo'
import HeroHeader from '../components/heroHeader'

// Images
import PicDogTrio from '../images/dogs_trio.png'
import PicDogSleeping from '../images/dogs_sleeping2.png'
import PicDogCloseUp from '../images/dogs_looking.png'

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

const SubText = styled.div`
  margin-bottom: 4px;
  color: #738a94;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const TitleText = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
`

const LeadCard = styled(Card)`
  flex-direction: row;
  flex: 1 1 100%;

  @media (max-width: 720px) {
    flex-direction: column;

    .content.side-image {
      padding-right: 0;
    }
  }

  .content {
    flex-basis: 50%;
  }

  .side-image {
    padding-right: 20px;
  }

  .side-right {
    padding: 30px 40px 30px 20px;
  }
`

const DogImage = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center center;
  width: 100%;
`

const DogContentWrapper = styled.div`
  padding: 0 30px 30px 30px;
`

const IndexPage = () => (
  <PageLayout>
    <SEO title="Home" />
    <HeroHeader />
    <PaddingWrapper background="#f5f8fb">
      <GridWrap>
        <StyledMainWrapper>
          <LeadCard>
            <Link to="/about" className="content side-image">
              <DogImage src={PicDogTrio} alt="trio of rescue dogs" />
            </Link>
            <div className="content side-right">
              <Link to="/about">
                <SubText>About Us</SubText>
                <TitleText>Come Learn About Our Story</TitleText>

                <div>
                  **TODO** Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </div>
              </Link>
            </div>
          </LeadCard>
          <Card>
            <Link to="/gallery">
              <DogImage src={PicDogCloseUp} alt="dog close up" />
            </Link>
            <DogContentWrapper>
              <Link to="/gallery">
                <SubText>Gallery</SubText>
                <TitleText>See Some of Our Rescues</TitleText>
                <div>
                  **TODO** Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Link>
            </DogContentWrapper>
          </Card>
          <Card>
            <Link to="/contact">
              <DogImage src={PicDogSleeping} alt="dog resting" />
            </Link>
            <DogContentWrapper>
              <Link to="/contact">
                <SubText>Contact</SubText>
                <TitleText>Get in Touch With Us</TitleText>
                <div>
                  **TODO** Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Link>
            </DogContentWrapper>
          </Card>
        </StyledMainWrapper>
      </GridWrap>
    </PaddingWrapper>
  </PageLayout>
)

export default IndexPage
