import styled from 'styled-components';

const TitleMe = styled.div`
  h1 {
    background-image: linear-gradient(45deg, #B095D9, #8C89EB, #0044ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
    font-size: 30px;
  }
  p {
    font-family: cursive;
    margin-top: 15px;
  }

  @media screen and (min-width: 749px) {
    h1 {
      background-image: linear-gradient(45deg, #B095D9, #8C89EB, #0044ff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: black;
      font-size: 60px;
    }
  }
`;

export default TitleMe;
