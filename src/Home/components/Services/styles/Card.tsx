import styled from "styled-components";

const Card = styled.div`
  border-top: 3px solid #006eff;
  border-radius: 10px;
  background-color: var(--bs-gray-900);
  width: 90%;
  height: 300px;
  margin: 0 auto 20px;
  padding: 15px;
  transition: .5s;

  &:hover {
    scale: 1.1;
  }

  @media screen and (min-width: 749px) {
    border-top: 5px solid #0044ff;
    width: 340px;
  }
`;

export default Card;
