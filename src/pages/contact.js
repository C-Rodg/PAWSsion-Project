// Libraries
import React from 'react'
import styled from 'styled-components'

// Components
import PageLayout from '../components/pageLayout'
import SEO from '../components/seo'
import NavBar from '../components/navBar'

// Styles
import PageTitle from '../styles/pageTitle'
import PaddingWrapper from '../styles/paddingWrapper'
import GridWrap from '../styles/gridWrap'
import PageParagraph from '../styles/pageParagraph'

const ContactList = styled.ul`
  border-left: #3eb0ef 3px solid;
  list-style-type: none;
  margin: 0;
  li {
    padding-left: 1.5rem;
    font-style: italic;
    line-height: 150%;

    margin-bottom: 1rem;
    font-size: 1.2rem;

    em {
      font-weight: 600;
      font-style: normal;
    }
  }
`

const Contact = () => (
  <PageLayout>
    <SEO title="Contact Us" />
    <NavBar />
    <PageTitle>
      <h1>Contact</h1>
    </PageTitle>
    <PaddingWrapper>
      <GridWrap>
        <PageParagraph>
          Want to reach out to us? Please choose one of the contact methods or
          complete the contact form below and we will be in touch! If you are
          interested in helping our cause, then donations can be sent to the
          Paypal account below.
        </PageParagraph>
        <PageParagraph>
          <ContactList>
            <li>
              <em>Phone:</em> <a href="tel:+639778210271">+63 977 821 0271</a>
            </li>
            <li>
              <em>Paypal Donation Account:</em>{' '}
              <a
                href="https://paypal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                pawssionproject@gmail.com
              </a>
            </li>
            <li>
              <em>Contact Email:</em>{' '}
              <a href="mailto:pawssionproject@gmail.com">
                pawssionproject@gmail.com
              </a>
            </li>
            <li>
              <em>Facebook:</em>{' '}
              <a
                href="https://www.facebook.com/PAWSsionProject/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/pg/PAWSsionProject/
              </a>
            </li>
            <li>
              <em>Instagram:</em>{' '}
              <a
                href="https://www.instagram.com/pawssionproject/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @PawssionProject
              </a>
            </li>
          </ContactList>
        </PageParagraph>
      </GridWrap>
    </PaddingWrapper>
  </PageLayout>
)

export default Contact
