// Libraries
import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import PageLayout from '../components/pageLayout'
import SEO from '../components/seo'
import NavBar from '../components/navBar'

// Images
import ShelterImages from '../images/shelter/ShelterImages'

// Styles
import PageTitle from '../styles/pageTitle'
import PaddingWrapper from '../styles/paddingWrapper'
import GridWrap from '../styles/gridWrap'
import PageParagraph from '../styles/pageParagraph'

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 15px;
  justify-content: center;
  margin-bottom: 60px;
  figure {
    margin-bottom: 0;
    width: 320px;
    height: 240px;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      img {
        transform: scale3d(1.07, 1.07, 1);
      }
    }
  }

  img {
    backface-visibility: hidden;
    transform: scale3d(1, 1, 1);
    transition: transform 1.8s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

class Gallery extends Component {
  handleOpenImageModal = idx => () => {
    console.log('Opening: ' + idx)
  }

  // Render image grid
  renderImages() {
    return ShelterImages.map((img, idx) => {
      return (
        <figure key={idx} onClick={this.handleOpenImageModal(idx)}>
          <img src={img.src} alt={img.text} />
        </figure>
      )
    })
  }

  render() {
    return (
      <PageLayout>
        <SEO title="Gallery" />
        <NavBar />
        <PageTitle>
          <h1>Gallery</h1>
        </PageTitle>
        <PaddingWrapper>
          <GridWrap>
            <PageParagraph>
              Happy dogs make us happy. Please take a look at some of our past
              rescues and our amazing volunteers that work to make this happen.
              To stay up-to-date with our latest pups, please like our{' '}
              <a
                href="https://www.facebook.com/PAWSsionProject/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>{' '}
              page or give us a follow on{' '}
              <a
                href="https://www.instagram.com/pawssionproject/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              .
            </PageParagraph>
            <ImageWrapper className="shelter-wrapper">
              {this.renderImages()}
            </ImageWrapper>
          </GridWrap>
        </PaddingWrapper>
      </PageLayout>
    )
  }
}

export default Gallery
