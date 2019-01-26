// Libraries
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Icons
import Facebook from './icons/facebook'
import Twitter from './icons/twitter'
import Instagram from './icons/instagram'
import Mail from './icons/mail'

// Logo
import PawsLogo from '../images/logo-horizontal.png';

// Styles
import GridWrap from '../styles/gridWrap'
import FlexWrapper from '../styles/flexWrapper'

const StyledHeaderWrapper = styled.header`
  background: #000;
  padding: 12px 4vw 12px 4vw;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);

  a:hover {
    color: rgba(255, 255, 255, 1);
  }
`

const NavLinksWrapper = styled.div`
    display: flex;
    align-items: center;
`

const LogoImage = styled.img`
    max-height: 48px;
    margin-top: 5px;
    margin-right: 10px;
`;

const NavLinks = styled(Link)`
    text-transform: uppercase;
    padding: 10px 12px;
`

const SocialLinkWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 40px;
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  opacity: 0.8;
  margin: 0px;
  padding: 10px;

  &:hover {
    opacity: 1;
  }

  svg {
    height: 1rem;
  }
`



const NavBar = () => {
  return (
    <StyledHeaderWrapper>
      <GridWrap>
        <FlexWrapper as="nav">
          <NavLinksWrapper>
            <LogoImage src={PawsLogo} alt="Pawssion Project" />
            <NavLinks to="/">Home</NavLinks>
            <NavLinks to="/about">About</NavLinks>
            <NavLinks to="/gallery">Gallery</NavLinks>
            <NavLinks to="/contact">Contact</NavLinks>
          </NavLinksWrapper>
          <SocialLinkWrapper>
            <SocialLink
              className="social-link"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </SocialLink>
            <SocialLink
              className="social-link"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </SocialLink>
            <SocialLink
              className="social-link"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </SocialLink>
            <SocialLink
              className="social-link"
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </SocialLink>
          </SocialLinkWrapper>
        </FlexWrapper>
      </GridWrap>
    </StyledHeaderWrapper>
  )
}

export default NavBar
