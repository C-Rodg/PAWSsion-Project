// Libraries
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

// Components
import Facebook from './icons/facebook'
import Twitter from './icons/twitter'
import Instagram from './icons/instagram';
import Mail from './icons/mail';

const SiteNav = ({ navOpen }) => {
  return (
    <nav>
      <div className="nav-left">
        <li role="menuitem">
          <Link to="/">Home</Link>
        </li>
        <li role="menuitem">
          <Link to="/about">About</Link>
        </li>
        <li role="menuitem">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li role="menuitem">
          <Link to="/contact">Contact</Link>
        </li>
      </div>
      <div className="nav-right social-links">
        <a
          className="social-link"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
        <a
          className="social-link"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          className="social-link"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <a
          className="social-link"
          href="https://gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      </div>
    </nav>
  )
}

SiteNav.propTypes = {
  navOpen: PropTypes.bool,
}

SiteNav.defaultProps = {
  navOpen: false,
}

export default SiteNav
