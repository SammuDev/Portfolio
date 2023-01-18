import styled from "styled-components";

const Card = styled.div`
  border-top: 3px solid #006eff;
  border-bottom: 3px solid #aa02aa;
  border-radius: 10px;
  background-color: var(--bs-gray-900);
  width: 90%;
  height: 500px;
  margin: 0 auto 20px;
  padding: 15px;
  transition: .5s;

  &:hover {
    scale: 1.1;
  }

  @media screen and (min-width: 1020px) {
    width: 340px;
    & * {
      transform: none;
    }
  }
`;

export default Card;
