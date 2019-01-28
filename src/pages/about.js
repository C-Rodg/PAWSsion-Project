// Libraries
import React from 'react'

// Components
import PageLayout from '../components/pageLayout'
import SEO from '../components/seo'
import NavBar from '../components/navBar'

// Styles
import PageTitle from '../styles/pageTitle'
import PaddingWrapper from '../styles/paddingWrapper'
import GridWrap from '../styles/gridWrap'
import PageParagraph from '../styles/pageParagraph'

const About = () => (
  <PageLayout>
    <SEO title="About Us" />
    <NavBar />
    <PageTitle>
      <h1>About Us</h1>
    </PageTitle>
    <PaddingWrapper>
      <GridWrap>
        <PageParagraph>
          We are a Bacolod-based non-profit group rescuing dogs from the pound
          and supporting stray and maltreated dogs. Everyone is invited to come
          visit the shelter and open your hearts and homes to our lovely
          rescues. While we are Bacolod-based, the shelter is in{' '}
          <a
            href="https://www.facebook.com/242523159763862/posts/248517069164471/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Victorias, Negros Occ
          </a>
          .
        </PageParagraph>
        <PageParagraph>
          <blockquote>
            You won’t change the world by saving and adopting an animal, but you
            will definitely change that animal’s world.
          </blockquote>
        </PageParagraph>
        <PageParagraph>
          Interested in adopting? While we didn't have adoption fees before,
          please be advised that Pawssion Project now asks for PHP1000 donation
          in cash for every dog adopted from the shelter. This is to sustain the
          needs of the other dogs left at the shelter and other expenses. Only
          spayed/neutered dogs may be adopted, but you may adopt an unsterilized
          dog so long as you sign an agreement that you will have the dog
          undergo spay/neuter operation, as part of our responsible pet
          ownership campaign. All adopters must agree to update vaccinations and
          must agree to provide the dog with a quality life - including bringing
          the dog to the vet when sick.
        </PageParagraph>
        <PageParagraph>
          Thank you and may our rescues find their forever homes in you...
        </PageParagraph>
      </GridWrap>
    </PaddingWrapper>
  </PageLayout>
)

export default About
