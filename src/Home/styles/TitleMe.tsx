import styled from 'styled-components';

const TitleMe = styled.div`
  /* text-align: center; */
  padding: 20px;
  h1 {
    background-image: linear-gradient( #B095D9, #8C89EB, #0044ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
    font-size: 40px;
    text-align: center;
  }
  p {
    font-family: cursive;
    margin-top: 15px;
  }

  @media screen and (min-width: 1020px) {
    h1 {
      font-size: 60px;
      text-align: left;
    }
  }
`;

export default TitleMe;
