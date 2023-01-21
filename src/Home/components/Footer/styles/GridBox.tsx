import styled from "styled-components";

const GridBox = styled.div`

  display: grid;

  @media screen and (min-width: 1020px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default GridBox;
