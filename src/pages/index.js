// Libraries
import React from 'react'

// Components
import PageLayout from '../components/pageLayout'
import SEO from '../components/seo'
import HeroHeader from '../components/heroHeader';

const IndexPage = () => (
  <PageLayout>
    <SEO title="Home" />
    <HeroHeader />
    <h1>Main index page content</h1>
  </PageLayout>
)

export default IndexPage
