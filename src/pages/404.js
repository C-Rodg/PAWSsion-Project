import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper'

const NotFoundPage = () => (
  <Wrapper>
    <Layout headerOpen={false}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </Wrapper>
)

export default NotFoundPage
