import styled from "styled-components";

const Logo = styled.div`
  @keyframes spin {
    0% {transform: rotateY(0deg)}
    50% {transform: rotateY(180deg)}
    100% {transform: rotateY(0deg)}
  }

  img {
    animation: spin 1s ease infinite;
  }

  @media screen and (min-width: 1020px) {
    border: none;
    width: 220px;
  }
`;

export default Logo;
