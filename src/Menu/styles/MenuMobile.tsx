import styled from "styled-components";

interface Props {
  on: boolean;
}

const MenuMobile = styled.div<Props>`
  height: ${props => props.on ? '200px' : '0'};
  display: ${props => props.on && 'grid'};
  grid-template-columns: 1fr;
  align-items: center;
  transition: .5s ease;

  div {
    display: ${props => !props.on && 'none'};
  }

  @media screen and (min-width: 1020px) {
    display: none;
  }
`;

export default MenuMobile;
