import styled from 'styled-components'

const PageParagraph = styled.p`
  color: rgb(59, 71, 77);
  margin: 0px 0px 1.5em;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 170%;
  text-rendering: optimizeLegibility;

  blockquote {
    margin: 0 0 1.5em;
    padding: 0 1.5em;
    border-left: #3eb0ef 3px solid;
    font-style: italic;
  }

  a {
    color: #000;
    word-break: break-word;
    box-shadow: #3eb0ef 0 -1px 0 inset;

    &:hover {
      color: #3eb0ef;
      text-decoration: none;
    }
  }
`

export default PageParagraph
