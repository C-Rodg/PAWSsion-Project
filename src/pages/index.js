import React from 'react'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper'

const IndexPage = () => (
  <Wrapper>
    <Layout headerOpen={true}>
      <SEO title="Home" keywords={[`non-profit`, `dogs`, `shelter`]} />
    </Layout>
  </Wrapper>
)

export default IndexPage
