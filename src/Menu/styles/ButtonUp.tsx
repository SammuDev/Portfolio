import styled from "styled-components";

const ButtonUp = styled.div`
  border: 1px solid #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: fixed;
  left: 80%;
  top: 75%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 540px) {
    width: 70px;
    height: 70px;
    left: 75%;
    top: 75%;
  }
  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
    left: 80%;
    top: 75%;
  }
  @media screen and (min-width: 1020px) {
    width: 70px;
    height: 70px;
    left: 90%;
    top: 80%;
  }
`;

export default ButtonUp;
