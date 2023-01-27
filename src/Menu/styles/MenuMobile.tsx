import styled from "styled-components";

interface Props {
  on: boolean;
}

const MenuMobile = styled.div<Props>`
  @keyframes displayOn {
    from {top: -100px;}
    to {top: 0;}
  }

  height: ${props => props.on ? '200px' : '0'};
  display: ${props => props.on && 'grid'};
  grid-template-columns: 1fr;
  align-items: center;
  transition: .2s ease;

  div {
    width: 25%;
    margin: auto;
    position: relative;
    display: ${props => !props.on && 'none'};
    animation: ${props => props.on && 'displayOn .5s ease'};
  }

  @media screen and (min-width: 1020px) {
    display: none;
  }
`;

export default MenuMobile;
