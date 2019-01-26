import styled from 'styled-components'

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1060px) {
    margin-left: 4vw;
    margin-right: 4vw;
  }

  @media (max-width: 630px) {
    flex-direction: column;
    margin-top: 30px;
  }
`
export default FlexWrapper
