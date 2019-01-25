// Libraries
import React from 'react'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import SiteNav from '../components/siteNav'

// Styles
import Wrapper from '../styles/wrapper'

const IndexPage = () => (
  <Wrapper>
    <Layout>
      <SEO title="Home" />
      <header className="top-stuff">
        <div>Image & tagline for index page</div>
        <SiteNav navOpen={true} />
      </header>
    </Layout>
  </Wrapper>
)

export default IndexPage
