import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper'

const About = () => (
  <Wrapper>
    <Layout headerOpen={false}>
      <SEO title="About Us" />
      <h1>About Us content</h1>
    </Layout>
  </Wrapper>
)

export default About
