import styled from 'styled-components';

const LinkImgProject = styled.a`
  background-color: #f1f1f1;
  height: 150px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  img {
    border-radius: 75px;
    background-color: #f1f1f1;
    color: #000;
    width: 100%;
  }

  @media screen and (min-width: 1020px) {
    height: 300px;
  }
`;

export default LinkImgProject;
