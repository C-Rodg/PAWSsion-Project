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

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404: Not found" />
    <NavBar />
    <PageTitle>
      <h1>NOT FOUND</h1>
    </PageTitle>
    <PaddingWrapper>
      <GridWrap>
        <PageParagraph style={{ textAlign: 'center' }}>
          You just hit a route that doesn&#39;t exist... the sadness.
        </PageParagraph>
      </GridWrap>
    </PaddingWrapper>
  </PageLayout>
)

export default NotFoundPage
