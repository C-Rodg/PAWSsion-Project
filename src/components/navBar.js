// Libraries
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Icons
import Facebook from './icons/facebook'
import Instagram from './icons/instagram'
import Mail from './icons/mail'
import Phone from './icons/phone'

// Logo
import PawsLogo from '../images/logo-horizontal.png'

// Styles
import GridWrap from '../styles/gridWrap'
import FlexWrapper from '../styles/flexWrapper'

const StyledHeaderWrapper = styled.header`
  position: relative;
  background: ${props => (props.isHero ? 'transparent' : '#000')};
  padding: ${props => {
    return props.isHero ? '12px 0' : '12px 4vw 12px 4vw'
  }};
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  top: ${props => (props.isHero ? '-70px' : '0px')};
  a:hover {
    color: rgba(255, 255, 255, 1);
  }
`

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 770px) {
    margin: 0 auto;
  }
`

const LogoImage = styled.img`
  max-height: 48px;
  margin-top: 5px;
  margin-right: 10px;

  @media (max-width: 770px) {
    margin: 5px auto;
  }
`

const NavLinks = styled(Link)`
  text-transform: uppercase;
  padding: 10px 12px;
`

const SocialLinkWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 40px;
  justify-content: center;

  @media (max-width: 770px) {
    margin: 0 auto;
  }
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

const NavBar = ({ isHero }) => {
  return (
    <StyledHeaderWrapper isHero={isHero}>
      <GridWrap>
        <FlexWrapper as="nav">
          <NavLinksWrapper>
            {!isHero && <LogoImage src={PawsLogo} alt="Pawssion Project" />}
            <div>
              <NavLinks to="/">Home</NavLinks>
              <NavLinks to="/about">About</NavLinks>
              <NavLinks to="/gallery">Gallery</NavLinks>
              <NavLinks to="/contact">Contact</NavLinks>
            </div>
          </NavLinksWrapper>
          <SocialLinkWrapper>
            <SocialLink
              className="social-link"
              href="https://www.facebook.com/PAWSsionProject/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </SocialLink>
            <SocialLink
              className="social-link"
              href="https://www.instagram.com/pawssionproject/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </SocialLink>

            <SocialLink
              className="social-link"
              href="mailto:pawssionproject@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </SocialLink>
            <SocialLink
              className="social-link"
              href="tel:+639778210271"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone />
            </SocialLink>
          </SocialLinkWrapper>
        </FlexWrapper>
      </GridWrap>
    </StyledHeaderWrapper>
  )
}

export default NavBar
