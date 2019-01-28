// Libraries
import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import PageLayout from '../components/pageLayout'
import SEO from '../components/seo'
import NavBar from '../components/navBar'
import Modal from '../components/modal'

// Images
import ShelterImages from '../images/shelter/ShelterImages'

// Icons
import Close from '../components/icons/close'

// Styles
import PageTitle from '../styles/pageTitle'
import PaddingWrapper from '../styles/paddingWrapper'
import GridWrap from '../styles/gridWrap'
import PageParagraph from '../styles/pageParagraph'
import ModalClose from '../styles/modalClose'

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
    transition: transform 1.4s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ModalImageWrapper = styled.div`
  display: flex;
  margin: 20px auto;
  align-items: center;
  justify-content: center;
  img {
    box-sizing: border-box;
    border-radius: 2px;
    display: block;
    height: auto;
    max-width: 100%;
    max-height: 90vh;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  }
`

class Gallery extends Component {
  state = {
    currentImageIdx: null,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.checkCloseModal, false)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.checkCloseModal)
  }

  // Close modal if escape key pressed
  checkCloseModal = ev => {
    if (this.state.currentImageIdx !== null) {
      if (ev.keyCode === 27) {
        this.handleCloseModal()
      } else if (ev.keyCode === 37 && this.state.currentImageIdx !== 0) {
        this.setState(prevState => {
          return { currentImageIdx: prevState.currentImageIdx - 1 }
        })
      } else if (
        ev.keyCode === 39 &&
        this.state.currentImageIdx !== ShelterImages.length - 1
      ) {
        this.setState(prevState => {
          return { currentImageIdx: prevState.currentImageIdx + 1 }
        })
      }
    }
  }

  // Set viewing to the current image
  handleOpenImageModal = idx => () => {
    this.setState({
      currentImageIdx: idx,
    })
  }

  // Close modal
  handleCloseModal = () => {
    this.setState({ currentImageIdx: null })
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
    const { currentImageIdx } = this.state
    return (
      <>
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
                rescues and our amazing volunteers that work to make this
                happen. To stay up-to-date with our latest pups, please like our{' '}
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
        {currentImageIdx !== null && (
          <Modal>
            <ModalClose onClick={this.handleCloseModal}>
              <Close size={36} />
            </ModalClose>
            <ModalImageWrapper>
              <img
                src={ShelterImages[currentImageIdx].src}
                alt={ShelterImages[currentImageIdx].text}
              />
            </ModalImageWrapper>
          </Modal>
        )}
      </>
    )
  }
}

export default Gallery
