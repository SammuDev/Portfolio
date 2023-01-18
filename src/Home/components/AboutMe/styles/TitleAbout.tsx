import styled from "styled-components";

const TitleAbout = styled.h1`
  background-image: linear-gradient(45deg, #22ffda, #8C89EB, #c300ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
  text-align: center;

  p {
    background-image: linear-gradient( #00ffff, #0004ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    margin-top: 20px;
  }

  @media screen and (min-width: 749px) {
    font-size: 60px;
  }
`;

export default TitleAbout;
