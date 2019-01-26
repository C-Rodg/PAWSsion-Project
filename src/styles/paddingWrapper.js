// Libraries
import styled from 'styled-components'

const PaddingWrapper = styled.main`
  padding: 0 4vw;
  flex-grow: 1;
  background-color: ${props => (props.background ? props.background : '#fff')};
`

export default PaddingWrapper
