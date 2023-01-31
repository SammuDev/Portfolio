import styled from "styled-components";

const Logo = styled.div`
  @keyframes spin {
    from {transform: rotateY(0deg)}
    to {transform: rotateY(360deg)}
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
