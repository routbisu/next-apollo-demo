import styled from 'styled-components'

const Grid = styled('div')`
  display: flex;
  flex-wrap: wrap;

  & > div {
    flex-basis: 100%;

    @media only screen and (min-width: 500px) {
      flex-basis: 50%;
    }

    @media only screen and (min-width: 800px) {
      flex-basis: 33.33%;
    }

    @media only screen and (min-width: 1000px) {
      flex-basis: 25%;
    }
  }
`

export default Grid
