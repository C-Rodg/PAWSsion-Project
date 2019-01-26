// Libraries
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Components
import Footer from './footer'

// Styles
import '../styles/base.css'
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const PageLayout = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <Footer />
    </Wrapper>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
