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
      <h1>Our Story</h1>
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
          please be advised that Pawssion Project now asks for PHP1000{' '}
          <a href="/contact">donation</a> in cash for every dog adopted from the
          shelter. This is to sustain the needs of the other dogs left at the
          shelter and other expenses. Only spayed/neutered dogs may be adopted,
          but you may adopt an unsterilized dog so long as you sign an agreement
          that you will have the dog undergo spay/neuter operation, as part of
          our responsible pet ownership campaign. All adopters must agree to
          update vaccinations and must agree to provide the dog with a quality
          life - including bringing the dog to the vet when sick.
        </PageParagraph>
      </GridWrap>
    </PaddingWrapper>
    <PageTitle>
      <h1>Testimonials</h1>
    </PageTitle>
    <PaddingWrapper>
      <GridWrap>
        <PageParagraph>
          <blockquote>
            "Great idea done purely for the love of dogs, and on a very small
            budget. Thanks for all you do."
            <div className="author">- Edward</div>
          </blockquote>
          <blockquote>
            "Beautifully thought out project by beautiful bighearted people!
            Congratulations for stepping up for our 4legged best friends.."
            <div className="author">- Jon</div>
          </blockquote>
          <blockquote>
            "Thank you for saving the lives of these dogs and thank you for
            giving them the love that they really deserved. God bless you and
            this project."
            <div className="author">- Charlden</div>
          </blockquote>
          <blockquote>
            "My heart is full for them. I cannot thank you enough for saving the
            lives of these dogs."
            <div className="author">- Ria</div>
          </blockquote>
          <blockquote>
            "I’m very happy and proud to be part of this group . Helping our
            animals ( AsPin ) dogs by providing a safe haven and making sure
            they are well taking care of on time being while working on the
            process of finding them a forever home. AsPin dogs are the sweetest.
            Take it from my experienced. Thank you Malou for taking a big step
            of this project . God will always provide . We need serious dogs
            lovers volunteers for spending time with the rescued AsPin dogs to
            let them feel the love and support. These dogs are traumatized. Let
            us all extend our help and time for them."
            <div className="author">- Spy</div>
          </blockquote>
          <blockquote>
            "Great idea done purely for the love of dogs, and on a very small
            budget. Thanks for all you do."
            <div className="author">- Edward</div>
          </blockquote>
        </PageParagraph>
        <PageParagraph>
          Thank you and may our rescues find their forever homes in you...
        </PageParagraph>
      </GridWrap>
    </PaddingWrapper>
  </PageLayout>
)

export default About
