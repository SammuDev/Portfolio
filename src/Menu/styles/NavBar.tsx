import styled from "styled-components";

const NavBar = styled.div`
  display: none;

  @media screen and (min-width: 749px) {
    display: flex;
    gap: 10px;

    a {
      border-radius: 25px;
      width: 100px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      transition: .5s;
      &:hover {
        background-color: #222222;
      }
    }
  }
`;

export default NavBar;
