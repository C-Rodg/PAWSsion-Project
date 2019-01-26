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

const Gallery = () => (
  <PageLayout>
    <SEO title="Gallery" />
    <NavBar />
    <PageTitle>
      <h1>Gallery</h1>
    </PageTitle>
    <PaddingWrapper>
      <GridWrap>lksjdlfjl lksjdflkj skljdfkl</GridWrap>
    </PaddingWrapper>
  </PageLayout>
)

export default Gallery
