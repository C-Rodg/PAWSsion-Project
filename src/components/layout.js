// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Footer from './footer'

// Styles
import '../styles/layout.css'

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
