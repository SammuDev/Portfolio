import styled from "styled-components";

const CardProject = styled.div`
  border-radius: 10px;
  background-color: #f1f1f1;
  color: #000;
  text-align: center;
  height: 600px;
  padding: 30px;

  img {
    border: 2px solid #4b4b4b;
    border-radius: 10px;
  }

  @media screen and (min-width: 1020px) {
    margin-top: 100px;
  }
`;

export default CardProject;
