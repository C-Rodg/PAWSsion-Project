import React from 'react'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper'
import SiteNav from '../components/siteNav';

const IndexPage = () => (
  <Wrapper>
    <Layout>
      <SEO title="Home" keywords={[`non-profit`, `dogs`, `shelter`]} />
      <header className="top-stuff">
        <div>Image & tagline for index page</div>
        <SiteNav navOpen={true} />
      </header>  
    </Layout>
  </Wrapper>
)

export default IndexPage
