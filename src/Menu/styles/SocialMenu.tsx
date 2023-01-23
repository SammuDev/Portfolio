import styled from "styled-components";

const SocialMenu = styled.a`
  border-radius: 25px;
  color: #fff;
  width: 50px;
  height: 50px;
  /* line-height: 50px; */
  margin: 0 10px;
  text-align: center;
  transition: .5s;
  display: grid;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #222222;

    svg {
      background-color: #222222;
    }
  }
`;

export default SocialMenu;
