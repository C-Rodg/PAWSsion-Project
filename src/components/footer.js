// Libraries
import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: #000;
  color: rgba(255, 255, 255, 0.7);
  padding: 20px 4vw 60px 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a:hover {
    color: rgba(255, 255, 255, 1);
  }
`

const StyledNavLinks = styled.div`
  a {
    margin-left: 20px;
    position: relative;
  }
  a:before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
  }

  a:first-of-type:before {
    display: none;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <a
          href="https://curtisrodgers.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curtis Rodgers
        </a>{' '}
        © {new Date().getFullYear()}
      </div>
      <StyledNavLinks>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          Mail
        </a>
      </StyledNavLinks>
    </StyledFooter>
  )
}

export default Footer
