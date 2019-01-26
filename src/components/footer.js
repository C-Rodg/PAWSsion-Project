// Libraries
import React from 'react'
import styled from 'styled-components'

// Styles
import GridWrap from '../styles/gridWrap'
import FlexWrapper from '../styles/flexWrapper'

const StyledFooterWrapper = styled.footer`
  background: #000;
  padding: 20px 4vw 60px 4vw;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);

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
    top: 8px;
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
    <StyledFooterWrapper>
      <GridWrap>
        <FlexWrapper>
          <div>
            <a
              href="https://curtisrodgers.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Curtis Rodgers © {new Date().getFullYear()}
            </a>
          </div>
          <StyledNavLinks>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mail
            </a>
          </StyledNavLinks>
        </FlexWrapper>
      </GridWrap>
    </StyledFooterWrapper>
  )
}

export default Footer
