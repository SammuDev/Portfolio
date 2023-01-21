import styled from "styled-components";

const Loading = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border: 5px solid;
  border-radius: 50px;
  border-color: transparent #f1f1f1 #f1f1f1 #f1f1f1;
  width: 20px;
  height: 20px;
  animation: spinner 1.5s infinite;
  position: relative;
  top: 5px;
  display: inline-block;
`;

export default Loading;
