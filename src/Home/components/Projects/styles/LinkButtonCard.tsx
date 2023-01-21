import styled from "styled-components";

const LinkButtonCard = styled.a`
  border-radius: 20px;
  background-color: #f1f1f1;
  color: var(--bs-gray-800);
  font-size: 30px;
  margin-top: 20px;
  display: inline-block;

  &:hover {
    color: var(--bs-gray-800);
  }

  @media screen and (min-width: 1020px) {
    font-size: 40px;
    margin: 0;
  }
`;

export default LinkButtonCard;
