// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import NavBar from './navBar';

// Images
import BackgroundHeroImage from '../images/header-background.jpg'
import PawsLogo from '../images/logo-vertical.png'

// Styles
import GridWrap from '../styles/gridWrap'

const StyledHeroWrapper = styled.div`
    background: center center / cover no-repeat rgb(10, 11, 12);
    background-image: url(${BackgroundHeroImage});
    color: #fff;
`

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 9vw 4vw;
    min-height: 200px;
    max-height: 450px;
    text-align: center;
`

const LogoImage = styled.img`
    max-height: 150px;
`

const Subtitle = styled.div`
    font-weight: 300;
    letter-spacing: 0.5px;
    opacity: 0.8;
    margin-bottom: 8px;
`

const HeroHeader = () => {
    return (
        <StyledHeroWrapper>
            <GridWrap>
                <HeroContent>
                <div><LogoImage src={PawsLogo} alt="Pawssion Project" /></div>
                <Subtitle>Bacolod-based non-profit dog resuce.</Subtitle>
                <div>**TODO** DONATION LINKS - Paypal, ?? </div>
                </HeroContent>
                <NavBar isHero={true} />
            </GridWrap>
        </StyledHeroWrapper>
    )
}

export default HeroHeader;