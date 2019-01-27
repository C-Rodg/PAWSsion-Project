// Libraries
import React from 'react'

// Components
import PageLayout from '../components/pageLayout'
import SEO from '../components/seo'
import NavBar from '../components/navBar'

// Styles
import PageTitle from '../styles/pageTitle'
import PaddingWrapper from '../styles/paddingWrapper'
import GridWrap from '../styles/gridWrap'
import PageParagraph from '../styles/pageParagraph'

const Gallery = () => (
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
          rescues and our amazing volunteers that work to make this happen. To
          stay up-to-date with our latest pups, please like our{' '}
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
      </GridWrap>
    </PaddingWrapper>
  </PageLayout>
)

export default Gallery
