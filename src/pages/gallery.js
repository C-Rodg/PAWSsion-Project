import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper'

const Gallery = () => (
  <Wrapper>
    <Layout headerOpen={false}>
      <SEO title="Gallery" />
      <h1>Image Gallery slideshow</h1>
    </Layout>
  </Wrapper>
)

export default Gallery
