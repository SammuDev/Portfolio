import styled from "styled-components";

const ButtonHamburg = styled.button`
  border: none;
  width: 35px;
  margin-right: 40px;

  @media screen and (min-width: 1020px) {
    display: none;
  }
`;

export default ButtonHamburg;
