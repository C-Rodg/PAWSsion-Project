// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Header from './header'
import Footer from './footer'

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
