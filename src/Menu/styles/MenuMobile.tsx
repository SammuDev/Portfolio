import styled from "styled-components";

interface Props {
  on: any;
}

const MenuMobile = styled.div<Props>`
  display: ${props => props.on ? 'flex' : 'none'};
  align-items: center;
  flex-direction: column;

  a {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 749px) {
    display: none;
  }
`;

export default MenuMobile;
