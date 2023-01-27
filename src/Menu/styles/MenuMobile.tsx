import styled from "styled-components";

interface Props {
  on: boolean;
}

const MenuMobile = styled.div<Props>`
  @keyframes displayOn {
    from {height: 0;}
    to {height: 200px;}
  }
  @keyframes displayOff {
    from {height: 200px;}
    to {height: 0;}
  }

  /* border: 1px solid lime; */
  height: ${props => props.on ? '200px' : '0'};
  display: ${props => props.on && 'grid'};
  grid-template-columns: 1fr;
  align-items: center;
  animation: ${props => props.on ? 'displayOn .5s ease' : 'displayOff.5s ease'};
  z-index: 0;

  div {
    display: ${props => !props.on && 'none'};
  }

  @media screen and (min-width: 1020px) {
    display: none;
  }
`;

export default MenuMobile;
