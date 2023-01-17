import styled from "styled-components";

const MenuMobile = styled.button`
  border: none;
  width: 35px;
  margin-right: 40px;

  div {
    border: 3px solid #fff;
    border-radius: 5px;
    margin-bottom: 6px;
  }

  @media screen and (min-width: 749px) {
    display: none;
  }
`;

export default MenuMobile;
